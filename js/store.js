// Хранение сохранений: localStorage браузера и, если игра открыта как страница claude.ai,
// личное облачное хранилище — тогда карьера доступна с любого устройства.
FM.Store = (function () {
  const CHUNK = 120000; // символов base64 на документ (лимит документа — 256 КиБ)
  let db = null, uid = null, ready = null;
  let queue = Promise.resolve();
  const pending = {};

  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* хранилище недоступно */ } },
  };

  function init() {
    if (ready) return ready;
    ready = (async () => {
      if (!window.claude || typeof window.claude.use !== 'function') return false;
      try {
        const [d, u] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
        if (!d || !u) return false;
        const id = await u.id();
        if (!id) return false;
        db = d;
        uid = id;
        return true;
      } catch (e) {
        return false;
      }
    })();
    return ready;
  }

  const col = () => db.collection('data/users/' + uid);

  async function pack(str) {
    if (typeof CompressionStream === 'undefined') return { enc: 'raw', data: str };
    const stream = new Blob([str]).stream().pipeThrough(new CompressionStream('gzip'));
    const buf = new Uint8Array(await new Response(stream).arrayBuffer());
    let bin = '';
    for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000));
    return { enc: 'gz64', data: btoa(bin) };
  }

  async function unpack(enc, data) {
    if (enc === 'raw') return data;
    const bin = atob(data);
    const buf = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    const stream = new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).text();
  }

  // Запись в облако идёт по очереди; если за время записи пришло новое сохранение того же слота,
  // пишется только последнее.
  function cloudSave(key, str, info) {
    pending[key] = { str, info };
    queue = queue.then(async () => {
      const job = pending[key];
      if (!job) return;
      delete pending[key];
      if (!(await init())) return;
      const { enc, data } = await pack(job.str);
      const n = Math.max(1, Math.ceil(data.length / CHUNK));
      for (let i = 0; i < n; i++) await col().doc(`${key}_c${i}`).set({ s: data.slice(i * CHUNK, (i + 1) * CHUNK) });
      await col().doc(key).set({ enc, n, info: job.info, ts: Date.now() });
    }).catch(() => { /* облако недоступно — остаётся локальное сохранение */ });
    return queue;
  }

  async function cloudMeta(key) {
    if (!(await init())) return null;
    try {
      const snap = await col().doc(key).get();
      return snap.exists ? snap.data() : null;
    } catch (e) {
      return null;
    }
  }

  async function cloudLoad(key) {
    const meta = await cloudMeta(key);
    if (!meta) return null;
    let data = '';
    for (let i = 0; i < meta.n; i++) {
      const snap = await col().doc(`${key}_c${i}`).get();
      if (!snap.exists) return null;
      data += snap.data().s;
    }
    return JSON.parse(await unpack(meta.enc, data));
  }

  // Локальные сохранения — в IndexedDB браузера: там сотни мегабайт вместо 5 МБ у localStorage. Данные сжимаются.
  // Старые сохранения из localStorage читаются как раньше и при следующей записи переезжают в IndexedDB.
  let idbP = null;
  function idb() {
    if (idbP) return idbP;
    idbP = new Promise((res) => {
      try {
        const rq = indexedDB.open('ffm26', 1);
        rq.onupgradeneeded = () => rq.result.createObjectStore('saves');
        rq.onsuccess = () => res(rq.result);
        rq.onerror = () => res(null);
      } catch (e) { res(null); }
    });
    try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* не критично */ }
    return idbP;
  }
  async function idbDo(mode, fn) {
    const db = await idb();
    if (!db) return undefined;
    return new Promise((res) => {
      try {
        const tx = db.transaction('saves', mode), st = tx.objectStore('saves');
        const rq = fn(st);
        tx.oncomplete = () => res(mode === 'readonly' ? rq.result : true);
        tx.onerror = tx.onabort = () => res(mode === 'readonly' ? undefined : false);
      } catch (e) { res(undefined); }
    });
  }

  async function localSave(key, str) {
    const { enc, data } = await pack(str);
    const val = enc === 'raw' ? data : 'gz:' + data;
    if (await idbDo('readwrite', (st) => st.put(val, key))) { ls.del(key); return true; }
    return ls.set(key, val);
  }

  async function localLoad(key) {
    const raw = (await idbDo('readonly', (st) => st.get(key))) || ls.get(key);
    if (!raw) return null;
    return JSON.parse(raw.startsWith('gz:') ? await unpack('gz64', raw.slice(3)) : raw);
  }

  return { ls, init, cloudSave, cloudMeta, cloudLoad, localSave, localLoad };
})();
