// Интерфейс: экраны, живой матч, модальные окна, сохранения и редактор базы.
(function () {
  const SAVE_AUTO = 'ffm26_auto';
  const SAVE_SLOT = 'ffm26_slot_';
  const DB_KEY = 'ffm26_db';
  const app = document.getElementById('app');
  const UI = { g: null, tab: 'home', sel: null, tablesLid: null, tablesView: 'table', round: null, statsKey: 'g', tf: {}, sortKey: 'ovr', sortDir: -1, tfPage: 0 };
  window.UI = UI;

  // ================== помощники ==================
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const g = () => UI.g;
  const T = (id) => UI.g.teams[id];
  const P = (id) => UI.g.players[id];

  const lum = (hex) => {
    const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  // второй цвет клуба, если он читается на первом; иначе белый или чёрный
  const badgeText = (t) => {
    const [bg, fg] = t.colors.map(lum);
    const ratio = (Math.max(bg, fg) + 0.05) / (Math.min(bg, fg) + 0.05);
    return ratio >= 2.5 ? t.colors[1] : bg > 0.35 ? '#111111' : '#ffffff';
  };
  function badge(t, cls = '') {
    const init = t.name.replace(/[«»"]/g, '').split(/[\s-]+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
    return `<span class="badge ${cls}" style="background:${t.colors[0]};color:${badgeText(t)}">${esc(init)}</span>`;
  }
  const tname = (t, b = true) => `<span class="tname" data-team="${t.id}">${b ? badge(t, 'sm') : ''}<span>${esc(t.name)}</span></span>`;
  const ovrCls = (o) => (o >= 82 ? 'o6' : o >= 75 ? 'o5' : o >= 68 ? 'o4' : o >= 60 ? 'o3' : o >= 52 ? 'o2' : 'o1');
  const ovr = (o) => `<span class="ovr ${ovrCls(o)}">${o}</span>`;
  const pos = (p) => `<span class="pos ${FM.GROUP[p]}" title="${FM.POS_NAME[p]}">${FM.POS_RU[p]}</span>`;
  const form = (f) => `<span class="form">${f.map((x) => `<i class="${x}">${{ W: 'В', D: 'Н', L: 'П' }[x]}</i>`).join('')}</span>`;
  const pname = (p) => `<span class="pl" data-player="${p.id}" style="cursor:pointer">${esc(p.name)}</span>${p.gen ? '<span class="gen" title="Сгенерированный игрок — замените реальным в редакторе базы">*</span>' : ''}`;
  const status = (p) => (p.inj ? `<span class="ico bad" title="Травма: ${p.inj} дн.">✚${p.inj}</span>` : '') + (p.sus ? `<span class="ico bad" title="Дисквалификация">▮${p.sus}</span>` : '') + (p.listed ? '<span class="ico warn" title="Выставлен на трансфер">$</span>' : '') + (p.contract <= g().s.season ? '<span class="ico warn" title="Контракт истекает летом">✎</span>' : '');
  const rt = (r) => `<span class="rt ${r >= 8 ? 'top' : r >= 7 ? 'hi' : r < 6 ? 'lo' : ''}">${r.toFixed(1)}</span>`;
  const compName = (c) => (c === 'cup' ? 'Кубок России' : c === 'po' ? 'Стыковые матчи' : g().s.leagues[c] ? g().s.leagues[c].name : c);
  const fitBar = (f) => `<div class="bar ${f < 70 ? 'bad' : f < 88 ? 'warn' : ''}" style="width:48px;display:inline-block;vertical-align:middle"><i style="width:${f}%"></i></div>`;
  const ovrCell = (p) => ovr(p.ovr);
  // цвет метки команды в ленте матча: тёмный основной цвет на тёмном фоне не виден
  const markColor = (t) => (parseInt(t.colors[0].slice(1, 3), 16) + parseInt(t.colors[0].slice(3, 5), 16) + parseInt(t.colors[0].slice(5, 7), 16) < 120 ? t.colors[1] : t.colors[0]);

  function toast(text, ms = 2600) {
    let box = document.getElementById('toasts');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toasts';
      document.body.appendChild(box);
    }
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = text;
    box.appendChild(el);
    setTimeout(() => el.remove(), ms);
  }

  function modal(html, cls = '') {
    closeModal();
    const bg = document.createElement('div');
    bg.className = 'modal-bg';
    bg.id = 'modal';
    bg.innerHTML = `<div class="modal ${cls}"><button class="x" data-close>×</button>${html}</div>`;
    bg.addEventListener('click', (e) => { if (e.target === bg || e.target.hasAttribute('data-close')) closeModal(); });
    document.body.appendChild(bg);
    bindCommon(bg);
    return bg.querySelector('.modal');
  }
  function closeModal() {
    const m = document.getElementById('modal');
    if (m) m.remove();
  }

  // клики по именам игроков и клубов работают везде
  function bindCommon(root) {
    root.querySelectorAll('[data-player]').forEach((el) => el.addEventListener('click', (e) => { e.stopPropagation(); playerModal(+el.dataset.player); }));
    root.querySelectorAll('[data-team]').forEach((el) => el.addEventListener('click', (e) => { e.stopPropagation(); teamModal(el.dataset.team); }));
    root.querySelectorAll('[data-match]').forEach((el) => el.addEventListener('click', (e) => { e.stopPropagation(); matchReport(+el.dataset.match); }));
  }

  // ================== сохранения ==================
  const ls = FM.Store.ls;
  const infoOf = (s) => `${s.manager} · ${s.teams[s.user].name} · ${FM.fmtDate(s.date, true)}`;
  const localMeta = (key) => { try { return JSON.parse(ls.get(key + '_meta') || 'null'); } catch (e) { return null; } };

  // Локально и (на странице claude.ai) в облако. Возвращает false, если не удалось сохранить никуда.
  function save(key = SAVE_AUTO) {
    const s = g().s;
    s.savedAt = Date.now();
    const str = JSON.stringify(s);
    const info = infoOf(s);
    const ok = ls.set(key, str) && ls.set(key + '_meta', JSON.stringify({ info, ts: s.savedAt }));
    FM.Store.cloudSave(key, str, info);
    if (!ok && !UI.cloud) toast('Не удалось сохранить: браузер не дал места в хранилище. Используйте экспорт в файл.');
    return ok || !!UI.cloud;
  }
  function loadState(state) {
    UI.g = new FM.Game(state);
    UI.tab = 'home';
    UI.tablesLid = UI.g.userTeam().league;
    render();
  }
  // Загружает более свежую из двух копий: локальную или облачную.
  async function loadSlot(key) {
    const lm = localMeta(key);
    const cm = await FM.Store.cloudMeta(key);
    try {
      if (cm && (!lm || cm.ts > lm.ts)) {
        const st = await FM.Store.cloudLoad(key);
        if (st) return loadState(st);
      }
      const raw = ls.get(key);
      if (raw) return loadState(JSON.parse(raw));
      toast('Сохранение не найдено.');
    } catch (e) {
      toast('Сохранение повреждено.');
    }
  }
  async function slotMetas() {
    const keys = [SAVE_AUTO, SAVE_SLOT + 1, SAVE_SLOT + 2, SAVE_SLOT + 3];
    const out = {};
    for (const k of keys) out[k] = localMeta(k);
    UI.cloud = await FM.Store.init();
    if (UI.cloud) {
      const cms = await Promise.all(keys.map((k) => FM.Store.cloudMeta(k)));
      keys.forEach((k, i) => { const cm = cms[i]; if (cm && (!out[k] || cm.ts > out[k].ts)) out[k] = { info: cm.info, ts: cm.ts }; });
    }
    return out;
  }
  async function download(name, text) {
    const dl = window.claude && window.claude.use ? await window.claude.use('downloads').catch(() => null) : null;
    if (dl) {
      try { await dl.save({ filename: name, data: text }); }
      catch (e) { if (e && e.code !== 'declined') toast('Не удалось сохранить файл.'); }
      return;
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function pickFile(cb) {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.json,application/json';
    inp.onchange = () => {
      const f = inp.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => { try { cb(JSON.parse(r.result)); } catch (e) { toast('Файл не похож на JSON.'); } };
      r.readAsText(f);
    };
    inp.click();
  }
  function customDb() {
    try {
      const raw = ls.get(DB_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  // ================== стартовый экран ==================
  function startScreen() {
    const db = customDb() || FM.leagues;
    let lid = db[0].id;
    let metas = {};
    const draw = () => {
      const L = db.find((x) => x.id === lid);
      const auto = metas[SAVE_AUTO];
      app.innerHTML = `
      <div class="hero"><h1>Футбольный менеджер <span>26</span></h1>
        <div class="muted">Симуляция сезона 2026/27: Мир РПЛ, Лига PARI и Вторая лига</div></div>
      <main>
        ${auto ? `<div class="card" style="margin-bottom:14px"><div class="row"><div class="grow"><b>Продолжить карьеру</b><div class="muted small">${esc(auto.info)}</div></div><button class="btn primary" id="cont">Продолжить</button></div></div>` : ''}
        <div class="card" style="margin-bottom:14px">
          <div class="row">
            <label class="grow">Имя тренера<br><input id="mgr" value="${esc(ls.get('ffm26_mgr') || 'Тренер')}" style="width:100%"></label>
            <button class="btn" id="loadfile">Загрузить из файла</button>
            ${[1, 2, 3].map((i) => metas[SAVE_SLOT + i] ? `<button class="btn" data-slot="${i}" title="${esc(metas[SAVE_SLOT + i].info)}">Слот ${i}</button>` : '').join('')}
          </div>
          ${UI.cloud ? '<div class="small muted" style="margin-top:8px">Сохранения синхронизируются между вашими устройствами.</div>' : ''}
          ${customDb() ? '<div class="note small">Используется ваша отредактированная база (Меню → Редактор базы).</div>' : ''}
        </div>
        <h2>Выберите клуб</h2>
        <div class="seg" style="margin-bottom:12px;flex-wrap:wrap">${db.map((x) => `<button data-l="${x.id}" class="${x.id === lid ? 'on' : ''}">${esc(x.name)}</button>`).join('')}</div>
        <div class="teams-pick">${L.teams.slice().sort((a, b) => b.rep - a.rep).map((t) => `
          <button class="tp" data-pick="${t.id}">${badge(t, 'lg')}<div><b>${esc(t.name)}</b><div class="muted small">${esc(t.city)}</div>
          <div class="stars">${'★'.repeat(Math.max(1, Math.round((t.rep - 40) / 10)))}</div></div></button>`).join('')}</div>
      </main>`;
      app.querySelectorAll('[data-l]').forEach((b) => b.onclick = () => { lid = b.dataset.l; draw(); });
      app.querySelectorAll('[data-pick]').forEach((b) => b.onclick = () => {
        const mgr = app.querySelector('#mgr').value.trim() || 'Тренер';
        ls.set('ffm26_mgr', mgr);
        UI.g = FM.Game.newGame(b.dataset.pick, mgr, customDb() || undefined);
        UI.tab = 'home';
        UI.tablesLid = UI.g.userTeam().league;
        save();
        render();
      });
      const c = app.querySelector('#cont');
      if (c) c.onclick = () => loadSlot(SAVE_AUTO);
      app.querySelectorAll('[data-slot]').forEach((b) => b.onclick = () => loadSlot(SAVE_SLOT + b.dataset.slot));
      app.querySelector('#loadfile').onclick = () => pickFile((s) => (s.teams && s.players ? loadState(s) : toast('Это не файл сохранения.')));
    };
    for (const k of [SAVE_AUTO, SAVE_SLOT + 1, SAVE_SLOT + 2, SAVE_SLOT + 3]) metas[k] = localMeta(k);
    draw();
    // облачные сохранения подтягиваются позже; перерисовываем, только пока пользователь на этом экране
    slotMetas().then((m) => { if (!UI.g) { metas = m; draw(); } });
  }

  // ================== каркас ==================
  const TABS = [
    ['home', 'Главная'], ['squad', 'Состав'], ['fixtures', 'Календарь'], ['tables', 'Турниры'], ['stats', 'Статистика'],
    ['transfers', 'Трансферы'], ['finance', 'Финансы'], ['club', 'Клуб'], ['inbox', 'Почта'], ['menu', 'Меню'],
  ];

  function render() {
    if (!UI.g) return startScreen();
    const G = g(), s = G.s, u = G.userTeam();
    const unread = s.inbox.filter((m) => !m.read).length;
    app.innerHTML = `
      <div class="topbar"><div class="inner">
        <div class="club">${badge(u)}<div><b>${esc(u.name)}</b><div class="muted small">${esc(s.manager)} · ${esc(s.leagues[u.league].name)}</div></div></div>
        <div class="meta"><b>${FM.fmtDateWd(s.date)} ${s.date.slice(0, 4)}</b><br>Бюджет: <b class="${u.money < 0 ? 'bad' : ''}">${FM.money(u.money)}</b></div>
      </div>
      <nav class="nav">${TABS.map(([id, n]) => `<button data-tab="${id}" class="${UI.tab === id ? 'on' : ''}">${n}${id === 'inbox' && unread ? `<span class="dot">${unread}</span>` : ''}</button>`).join('')}</nav></div>
      <main id="main"></main>
      <div class="cont"><div class="inner"><span class="muted small" id="contInfo"></span><button class="btn primary" id="go">Продолжить ▸</button></div></div>`;
    app.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => { UI.tab = b.dataset.tab; UI.sel = null; render(); });
    app.querySelector('#go').onclick = goOn;
    const main = app.querySelector('#main');
    const nm = G.userMatchToday() || G.nextUserMatch();
    app.querySelector('#contInfo').textContent = s.sacked ? 'Вы без клуба' : nm ? `Следующий матч: ${FM.fmtDate(nm.date)}` : '';
    ({ home: viewHome, squad: viewSquad, fixtures: viewFixtures, tables: viewTables, stats: viewStats, transfers: viewTransfers, finance: viewFinance, club: viewClub, inbox: viewInbox, menu: viewMenu })[UI.tab](main);
    bindCommon(main);
  }

  // ================== ход игры ==================
  function goOn() {
    const G = g();
    if (G.s.sacked) return sackedModal();
    let r, guard = 0;
    do { r = G.advance(); } while (r === 'day' && guard++ < 400);
    if (r === 'match') { save(); render(); return preMatch(); }
    if (r === 'season_end') {
      const sum = G.endSeason();
      UI.round = null;
      UI.tablesLid = G.userTeam().league;
      save();
      render();
      return seasonModal(sum);
    }
    if (r === 'sacked') { save(); render(); return sackedModal(); }
    if (r === 'offer') { toast('Новое предложение по игроку — загляните в почту.'); }
    save();
    render();
  }

  function seasonModal(sum) {
    const G = g();
    const L = G.s.leagues;
    modal(`<h2>Сезон ${sum.year}/${String(sum.year + 1).slice(2)} завершён</h2>
      ${Object.keys(sum.tables).map((lid) => `<div class="list-item"><b class="grow">${esc(L[lid].name)}</b>${sum.tables[lid].map((id, i) => `${['🥇', '🥈', '🥉'][i]} ${esc(T(id).name)}`).join(' &nbsp; ')}</div>`).join('')}
      ${sum.cup ? `<div class="list-item"><b class="grow">Кубок России</b>🏆 ${esc(T(sum.cup).name)}</div>` : ''}
      <h3 style="margin-top:14px">Переходы между лигами</h3>
      <div>${sum.moves.map((m) => `<div class="small">${m.up ? '<span class="good">▲</span>' : '<span class="bad">▼</span>'} ${esc(T(m.id).name)} → ${esc(L[m.to].name)}</div>`).join('') || '<span class="muted">—</span>'}</div>
      <div class="note">Ваша команда: ${sum.userPos}-е место. Доверие руководства: ${Math.round(G.s.board.conf)}%.</div>
      <button class="btn primary" data-close>К новому сезону</button>`);
  }

  function sackedModal() {
    const G = g();
    const offers = G.jobOffers();
    modal(`<h2>Вы остались без работы</h2><p class="muted">Вам поступили предложения:</p>
      ${offers.map((t) => `<div class="list-item">${badge(t)}<div class="grow"><b>${esc(t.name)}</b><div class="small muted">${esc(G.s.leagues[t.league].name)}</div></div><button class="btn primary sm" data-job="${t.id}">Принять</button></div>`).join('')}`);
    document.querySelectorAll('[data-job]').forEach((b) => b.onclick = () => { G.takeJob(b.dataset.job); closeModal(); UI.tab = 'home'; save(); render(); });
  }

  // ================== главная ==================
  function viewHome(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const nm = G.userMatchToday() || G.nextUserMatch();
    const L = s.leagues[u.league];
    const tab = G.table(u.league);
    const myRow = tab.find((r) => r.id === u.id);
    const i0 = FM.clamp(myRow.pos - 4, 0, Math.max(0, tab.length - 7));
    const last = Object.values(s.matches).filter((m) => m.played && (m.h === u.id || m.a === u.id)).sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 5);
    const conf = Math.round(s.board.conf);
    const top = (key) => G.leaders(u.league, key, 3);
    main.innerHTML = `<div class="grid">
      <div class="card"><h3>Следующий матч</h3>${nm ? (() => {
        const h = T(nm.h), a = T(nm.a);
        return `<div class="muted center small">${esc(compName(nm.comp))}${nm.round && nm.comp !== 'cup' ? `, ${nm.round}-й тур` : ''} · ${FM.fmtDateWd(nm.date)}</div>
        <div class="next"><div class="side">${badge(h, 'lg')}<b>${tname(h, false)}</b><span class="small muted">${G.s.leagues[h.league].short}, ${G.positionOf(h.id)}-е</span></div>
        <div class="vs">vs</div>
        <div class="side">${badge(a, 'lg')}<b>${tname(a, false)}</b><span class="small muted">${G.s.leagues[a.league].short}, ${G.positionOf(a.id)}-е</span></div></div>
        <div class="center small muted">${esc(h.stadium)} · ${h.cap.toLocaleString('ru-RU')} мест</div>`;
      })() : '<div class="muted">Матчей в календаре нет — сезон подходит к концу.</div>'}</div>

      <div class="card"><h3>${esc(L.name)}</h3><table>${tab.slice(i0, i0 + 7).map((r) => `<tr class="${r.id === u.id ? 'me' : ''}"><td class="num">${r.pos}</td><td>${tname(T(r.id))}</td><td class="num">${r.p}</td><td class="num">${r.gf - r.ga > 0 ? '+' : ''}${r.gf - r.ga}</td><td class="num"><b>${r.pts}</b></td></tr>`).join('')}</table></div>

      <div class="card"><h3>Последние матчи</h3>${last.length ? last.map((m) => resultLine(m, u.id)).join('') : '<div class="muted">Сезон ещё не начался.</div>'}</div>

      <div class="card"><h3>Руководство</h3>
        <div class="row"><div class="grow">Доверие</div><b class="${conf < 25 ? 'bad' : conf < 45 ? 'warn' : 'good'}">${conf}%</b></div>
        <div class="bar ${conf < 25 ? 'bad' : conf < 45 ? 'warn' : ''}" style="margin:6px 0 10px"><i style="width:${conf}%"></i></div>
        <div class="small">Задача: <b>${esc(G.expectText())}</b> (ориентир — ${s.board.expect}-е место)</div>
        <div class="small muted" style="margin-top:6px">Трансферное окно: ${G.windowText()}</div></div>

      <div class="card"><h3>Лидеры команды</h3>${(() => {
        const sq = G.squad(u);
        const bySc = sq.filter((p) => p.st.g).sort((a, b) => b.st.g - a.st.g).slice(0, 3);
        const byR = sq.filter((p) => p.st.apps >= 3).sort((a, b) => b.st.rsum / b.st.apps - a.st.rsum / a.st.apps).slice(0, 3);
        return `<div class="small muted">Бомбардиры</div>${bySc.map((p) => `<div class="row small">${pname(p)}<b class="grow right">${p.st.g}</b></div>`).join('') || '<div class="small muted">—</div>'}
        <div class="small muted" style="margin-top:8px">Средняя оценка</div>${byR.map((p) => `<div class="row small">${pname(p)}<span class="grow right">${rt(p.st.rsum / p.st.apps)}</span></div>`).join('') || '<div class="small muted">—</div>'}`;
      })()}</div>

      <div class="card"><h3>Лучшие в лиге</h3>
        <div class="small muted">Бомбардиры</div>${top('g').map(([p, v]) => `<div class="row small">${pname(p)}<span class="muted">${esc(T(p.club).name)}</span><b class="grow right">${v}</b></div>`).join('') || '<div class="small muted">—</div>'}
        <div class="small muted" style="margin-top:8px">Ассистенты</div>${top('a').map(([p, v]) => `<div class="row small">${pname(p)}<span class="muted">${esc(T(p.club).name)}</span><b class="grow right">${v}</b></div>`).join('') || '<div class="small muted">—</div>'}</div>

      <div class="card"><h3>Новости</h3>${s.news.slice(0, 8).map((n) => `<div class="small" style="margin:4px 0"><span class="muted">${FM.fmtDate(n.date)}</span> · ${esc(n.text)}</div>`).join('') || '<div class="muted small">Пока тихо.</div>'}</div>
    </div>`;
  }

  function resultLine(m, uid) {
    const h = T(m.h), a = T(m.a);
    let cls = '';
    if (uid) {
      const my = m.h === uid ? m.hg : m.ag, op = m.h === uid ? m.ag : m.hg;
      cls = my > op ? 'W' : my < op ? 'L' : 'D';
      if (m.winner && my === op) cls = m.winner === uid ? 'W' : 'L';
    }
    return `<div class="list-item" data-match="${m.id}" style="cursor:pointer"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span>
      <span class="grow right">${esc(h.name)}</span><span class="score ${cls}">${m.hg}:${m.ag}${m.pens ? '*' : ''}</span><span class="grow">${esc(a.name)}</span></div>`;
  }

  // ================== состав и тактика ==================
  function teamStrength(t) {
    const slots = FM.FORMATIONS[t.formation];
    const grp = { G: [], D: [], M: [], F: [] };
    t.lineup.forEach((pid, i) => {
      const p = P(pid);
      if (p) grp[FM.GROUP[slots[i][0]]].push(p.ovr * FM.fit(p.pos, slots[i][0]));
    });
    const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
    return { att: avg(grp.F) * 0.6 + avg(grp.M) * 0.4, mid: avg(grp.M), def: avg(grp.D) * 0.75 + avg(grp.G) * 0.25 };
  }

  function viewSquad(main) {
    const G = g(), u = G.userTeam();
    const slots = FM.FORMATIONS[u.formation];
    while (u.lineup.length < slots.length) u.lineup.push(null);
    const sq = G.squad(u).sort((a, b) => FM.POS.indexOf(a.pos) - FM.POS.indexOf(b.pos) || b.ovr - a.ovr);
    const inXI = new Set(u.lineup.filter(Boolean));
    const onBench = new Set(u.bench);
    const problems = G.lineupProblems(u);
    const str = teamStrength(u);
    const t = u.tactics;
    const segBtns = (key, opts) => `<div class="seg">${opts.map(([v, n]) => `<button data-t="${key}" data-v="${v}" class="${t[key] === v ? 'on' : ''}">${n}</button>`).join('')}</div>`;
    main.innerHTML = `<div class="squad-layout">
      <div>
        <div class="card" style="margin-bottom:14px">
          <div class="row" style="margin-bottom:10px"><select id="formation">${Object.keys(FM.FORMATIONS).map((f) => `<option ${f === u.formation ? 'selected' : ''}>${f}</option>`).join('')}</select>
            <button class="btn sm" id="auto">Автосостав</button><span class="grow"></span><span class="small muted">${UI.sel ? 'Выберите игрока в списке' : 'Нажмите на позицию'}</span></div>
          <div class="pitch"><div class="box top"></div><div class="box bot"></div>
            ${slots.map(([sp, x, y], i) => {
              const p = P(u.lineup[i]);
              const bad = p && (!G.isAvailable(p) || p.club !== u.id);
              const sel = UI.sel && UI.sel.type === 'xi' && UI.sel.i === i;
              return `<div class="slot ${p ? '' : 'empty'} ${bad ? 'bad' : ''} ${sel ? 'sel' : ''}" data-slot="${i}" style="left:${x}%;top:${y}%">
                <div class="shirt" style="background:${u.colors[0]};color:${badgeText(u)}">${p ? p.ovr : '+'}</div>
                <div class="nm">${p ? esc(p.name.split(' ').slice(-1)[0]) : FM.POS_RU[sp]}</div>
                ${p && p.pos !== sp ? `<div class="sp">${FM.POS_RU[sp]} (${Math.round(FM.fit(p.pos, sp) * 100)}%)</div>` : ''}</div>`;
            }).join('')}
          </div>
          <h3 style="margin-top:12px">Запасные</h3>
          <div class="row">${Array.from({ length: 9 }, (_, i) => {
            const p = P(u.bench[i]);
            const sel = UI.sel && UI.sel.type === 'bench' && UI.sel.i === i;
            return `<button class="btn sm ${sel ? 'on' : ''}" data-bench="${i}" title="${p ? esc(p.name) : 'Пусто'}">${p ? `${FM.POS_RU[p.pos]} ${esc(p.name.split(' ').slice(-1)[0])}` : '—'}</button>`;
          }).join('')}</div>
          ${problems.length ? `<div class="note bad small">${problems.map(esc).join('<br>')}<br>Перед матчем такие места заполнятся автоматически.</div>` : ''}
        </div>
        <div class="card">
          <h3>Тактика</h3>
          <div class="small muted">Настрой</div>${segBtns('ment', [[-2, 'Автобус'], [-1, 'Оборона'], [0, 'Баланс'], [1, 'Атака'], [2, 'Штурм']])}
          <div class="small muted" style="margin-top:8px">Прессинг</div>${segBtns('press', [[0, 'Низкий'], [1, 'Средний'], [2, 'Высокий']])}
          <div class="small muted" style="margin-top:8px">Темп</div>${segBtns('tempo', [[0, 'Низкий'], [1, 'Средний'], [2, 'Высокий']])}
          <label class="row small" style="margin-top:10px"><input type="checkbox" id="autosubs" ${G.s.settings.autoSubs ? 'checked' : ''}> Автоматические замены в живом матче</label>
          <h3 style="margin-top:12px">Сила состава</h3>
          ${[['Атака', str.att], ['Центр', str.mid], ['Оборона', str.def]].map(([n, v]) => `<div class="str"><span>${n}</span><div class="bar"><i style="width:${FM.clamp((v - 40) * 2, 0, 100)}%"></i></div><b>${Math.round(v)}</b></div>`).join('')}
          <div class="small muted" style="margin-top:6px">Высокий прессинг и темп сильнее утомляют игроков.</div>
        </div>
      </div>
      <div class="card tight"><div class="tbl-wrap"><table>
        <tr><th></th><th>Поз</th><th>Игрок</th><th class="num">Возр</th><th class="num">Рейт</th><th class="hide-m">Форма</th><th class="num hide-m">И</th><th class="num hide-m">Г</th><th class="num hide-m">П</th><th class="num hide-m">Оц</th><th class="num">Цена</th></tr>
        ${sq.map((p) => `<tr class="click ${UI.sel && UI.sel.pid === p.id ? 'sel' : ''}" data-row="${p.id}">
          <td>${inXI.has(p.id) ? '<span class="lineup-mark">ОСН</span>' : onBench.has(p.id) ? '<span class="bench-mark">ЗАП</span>' : ''}</td>
          <td>${pos(p.pos)}</td><td>${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}</td><td class="num">${p.age}</td><td class="num">${ovrCell(p)}</td>
          <td class="hide-m">${fitBar(p.fit)}</td><td class="num hide-m">${p.st.apps}</td><td class="num hide-m">${p.st.g}</td><td class="num hide-m">${p.st.a}</td>
          <td class="num hide-m">${p.st.apps ? rt(p.st.rsum / p.st.apps) : '—'}</td><td class="num">${FM.money(p.value)}</td></tr>`).join('')}
      </table></div><div class="small muted" style="padding:10px">Нажмите на позицию на поле или на скамейке, затем на игрока. Без выбора позиции — откроется карточка игрока. «*» — сгенерированный игрок.</div></div>
    </div>`;

    main.querySelector('#formation').onchange = (e) => {
      const old = u.lineup.slice();
      u.formation = e.target.value;
      const ns = FM.FORMATIONS[u.formation];
      // переносим игроков на самые подходящие позиции новой схемы
      const r = G.autoPick({ ...u, players: old.filter(Boolean).concat(u.bench) }, u.formation);
      u.lineup = r.lineup.slice(0, ns.length);
      UI.sel = null;
      render();
    };
    main.querySelector('#auto').onclick = () => {
      const r = G.autoPick(u, u.formation);
      u.lineup = r.lineup; u.bench = r.bench; UI.sel = null; render();
    };
    main.querySelector('#autosubs').onchange = (e) => { G.s.settings.autoSubs = e.target.checked; };
    main.querySelectorAll('[data-t]').forEach((b) => b.onclick = () => { u.tactics[b.dataset.t] = +b.dataset.v; render(); });
    main.querySelectorAll('[data-slot]').forEach((el) => el.onclick = () => {
      const i = +el.dataset.slot;
      UI.sel = UI.sel && UI.sel.type === 'xi' && UI.sel.i === i ? null : { type: 'xi', i };
      render();
    });
    main.querySelectorAll('[data-bench]').forEach((el) => el.onclick = () => {
      const i = +el.dataset.bench;
      UI.sel = UI.sel && UI.sel.type === 'bench' && UI.sel.i === i ? null : { type: 'bench', i };
      render();
    });
    main.querySelectorAll('[data-row]').forEach((el) => el.onclick = () => {
      const pid = +el.dataset.row;
      if (!UI.sel) return playerModal(pid);
      placePlayer(u, UI.sel, pid);
      UI.sel = null;
      render();
    });
  }

  function placePlayer(u, sel, pid) {
    const xiIdx = u.lineup.indexOf(pid);
    const bIdx = u.bench.indexOf(pid);
    if (sel.type === 'xi') {
      const prev = u.lineup[sel.i];
      if (xiIdx >= 0) u.lineup[xiIdx] = prev;
      else if (bIdx >= 0) { if (prev) u.bench[bIdx] = prev; else u.bench.splice(bIdx, 1); }
      u.lineup[sel.i] = pid;
    } else {
      const prev = u.bench[sel.i];
      if (xiIdx >= 0) u.lineup[xiIdx] = prev || null;
      else if (bIdx >= 0) { u.bench[bIdx] = prev; }
      if (sel.i >= u.bench.length) u.bench.push(pid); else u.bench[sel.i] = pid;
      u.bench = u.bench.filter((x, i, a) => x && a.indexOf(x) === i);
    }
  }

  // ================== календарь ==================
  function viewFixtures(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const list = Object.values(s.matches).filter((m) => m.h === u.id || m.a === u.id).sort((a, b) => (a.date < b.date ? -1 : 1));
    main.innerHTML = `<div class="card tight"><div class="tbl-wrap"><table>
      <tr><th>Дата</th><th>Турнир</th><th></th><th class="right">Хозяева</th><th class="center">Счёт</th><th>Гости</th></tr>
      ${list.map((m) => {
        const h = T(m.h), a = T(m.a);
        let cls = '';
        if (m.played) {
          const my = m.h === u.id ? m.hg : m.ag, op = m.h === u.id ? m.ag : m.hg;
          cls = my > op ? 'W' : my < op ? 'L' : 'D';
          if (m.winner && my === op) cls = m.winner === u.id ? 'W' : 'L';
        }
        return `<tr class="${m.played ? 'click' : ''}" ${m.played ? `data-match="${m.id}"` : ''}><td>${FM.fmtDateWd(m.date)}</td><td class="small muted">${esc(compName(m.comp))}${m.comp !== 'cup' && m.comp !== 'po' ? ` · ${m.round}` : m.leg ? ` · ${m.leg}-й матч` : ''}</td>
          <td class="small muted">${m.h === u.id ? 'Д' : 'Г'}</td>
          <td class="right">${esc(h.name)} ${badge(h, 'sm')}</td><td class="center">${m.played ? `<span class="score ${cls}">${m.hg}:${m.ag}${m.pens ? ` <span class="small">(${m.pens[0]}:${m.pens[1]})</span>` : ''}</span>` : '<span class="muted">—</span>'}</td><td>${badge(a, 'sm')} ${esc(a.name)}</td></tr>`;
      }).join('')}
    </table></div></div>`;
  }

  // ================== турниры ==================
  function viewTables(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const lid = UI.tablesLid || u.league;
    if (UI.tablesView === 'po' && !s.playoff) UI.tablesView = 'table';
    const view = UI.tablesView;
    const L = s.leagues[lid];
    let body = '';
    if (view === 'cup') body = cupView();
    else if (view === 'po') body = playoffView();
    else {
      const tab = G.table(lid);
      const z = G.zones(lid);
      const rounds = L.rounds.length;
      let cur = UI.round;
      if (!cur || cur > rounds) {
        cur = L.rounds.findIndex((r) => r.some((id) => !s.matches[id].played)) + 1 || rounds;
      }
      body = `<div class="grid" style="grid-template-columns:minmax(0,3fr) minmax(280px,2fr)">
      <div class="card tight"><div class="tbl-wrap"><table>
        <tr><th>#</th><th>Клуб</th><th class="num">И</th><th class="num">В</th><th class="num">Н</th><th class="num">П</th><th class="num">Мячи</th><th class="num">О</th><th class="hide-m">Форма</th></tr>
        ${tab.map((r) => `<tr class="${r.id === u.id ? 'me' : ''}"><td class="num"><span class="zone ${z[r.pos] || ''}"></span>${r.pos}</td><td>${tname(T(r.id))}</td><td class="num">${r.p}</td><td class="num">${r.w}</td><td class="num">${r.d}</td><td class="num">${r.l}</td><td class="num">${r.gf}–${r.ga}</td><td class="num"><b>${r.pts}</b></td><td class="hide-m">${form(r.form)}</td></tr>`).join('')}
      </table></div>
      <div class="small muted" style="padding:10px"><span class="zone up"></span>${L.tier === 1 ? 'чемпион' : 'повышение'} &nbsp; ${L.tier === 2 ? '<span class="zone po"></span>стыки за выход &nbsp;' : ''}${L.tier === 1 ? '<span class="zone po_down"></span>стыки &nbsp;' : ''}<span class="zone down"></span>вылет${L.teams.some((id) => T(id).reserveOf) ? ' · резервные команды не повышаются в классе' : ''}</div></div>
      <div class="card"><div class="row" style="margin-bottom:8px"><button class="btn sm" id="rp">‹</button><b class="grow center">${cur}-й тур · ${FM.fmtDate(s.matches[L.rounds[cur - 1][0]].date)}</b><button class="btn sm" id="rn">›</button></div>
        ${L.rounds[cur - 1].map((id) => { const m = s.matches[id]; return m.played ? resultLine(m, null) : `<div class="list-item"><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; }).join('')}</div></div>`;
      UI.round = cur;
    }
    main.innerHTML = `<div class="row" style="margin-bottom:12px"><div class="seg">${s.order.map((id) => `<button data-lid="${id}" class="${view === 'table' && id === lid ? 'on' : ''}">${esc(s.leagues[id].short)}</button>`).join('')}
      <button data-v="cup" class="${view === 'cup' ? 'on' : ''}">Кубок</button>${s.playoff ? `<button data-v="po" class="${view === 'po' ? 'on' : ''}">Стыки</button>` : ''}</div></div>${body}`;
    main.querySelectorAll('[data-lid]').forEach((b) => b.onclick = () => { UI.tablesLid = b.dataset.lid; UI.tablesView = 'table'; UI.round = null; render(); });
    main.querySelectorAll('[data-v]').forEach((b) => b.onclick = () => { UI.tablesView = b.dataset.v; render(); });
    const rp = main.querySelector('#rp'), rn = main.querySelector('#rn');
    if (rp) rp.onclick = () => { UI.round = Math.max(1, UI.round - 1); render(); };
    if (rn) rn.onclick = () => { UI.round = Math.min(L.rounds.length, UI.round + 1); render(); };
  }

  function cupView() {
    const G = g(), s = G.s, c = s.cup;
    return `<div class="grid">${c.rounds.map((R, i) => `<div class="card"><h3>${esc(R.name)} · ${FM.fmtDate(R.date)}</h3>
      ${R.matches.length ? R.matches.map((id) => {
        const m = s.matches[id];
        const h = T(m.h), a = T(m.a);
        return m.played ? resultLine(m, null) : `<div class="list-item"><span class="grow right">${esc(h.name)}</span><span class="score">–:–</span><span class="grow">${esc(a.name)}</span></div>`;
      }).join('') : `<div class="muted small">${i === 1 && c.byes.length ? `С этой стадии стартуют: ${c.byes.map((id) => esc(T(id).name)).join(', ')}` : 'Жеребьёвка после предыдущего раунда'}</div>`}
      ${i === c.rounds.length - 1 && c.winner ? `<div class="note">🏆 ${esc(T(c.winner).name)}</div>` : ''}</div>`).join('')}</div>`;
  }

  function playoffView() {
    const G = g(), s = G.s;
    return `<div class="grid">${s.playoff.ties.map((tie) => `<div class="card"><h3>${esc(T(tie.up).name)} — ${esc(T(tie.low).name)}</h3>
      ${tie.legs.map((id) => { const m = s.matches[id]; return m.played ? resultLine(m, null) : `<div class="list-item"><span class="small muted">${FM.fmtDate(m.date)}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; }).join('')}
      ${tie.winner ? `<div class="note">Победитель: ${esc(T(tie.winner).name)}</div>` : ''}</div>`).join('')}</div>`;
  }

  // ================== статистика ==================
  function viewStats(main) {
    const G = g(), s = G.s;
    const lid = UI.tablesLid || G.userTeam().league;
    const key = UI.statsKey;
    const rows = G.leaders(lid, key, 30);
    main.innerHTML = `<div class="row" style="margin-bottom:12px"><div class="seg">${s.order.map((id) => `<button data-lid="${id}" class="${id === lid ? 'on' : ''}">${esc(s.leagues[id].short)}</button>`).join('')}</div>
      <div class="seg">${[['g', 'Голы'], ['a', 'Передачи'], ['rating', 'Оценки'], ['yc', 'Жёлтые']].map(([k, n]) => `<button data-k="${k}" class="${k === key ? 'on' : ''}">${n}</button>`).join('')}</div></div>
      <div class="card tight"><table><tr><th>#</th><th>Игрок</th><th>Клуб</th><th class="num">И</th><th class="num">${{ g: 'Голы', a: 'Пас', rating: 'Оценка', yc: 'ЖК' }[key]}</th></tr>
      ${rows.map(([p, v], i) => `<tr class="${p.club === s.user ? 'me' : ''}"><td class="num">${i + 1}</td><td>${pos(p.pos)} ${pname(p)}</td><td>${tname(T(p.club))}</td><td class="num">${p.st.apps}</td><td class="num"><b>${key === 'rating' ? v.toFixed(2) : v}</b></td></tr>`).join('') || '<tr><td colspan="5" class="muted">Пока нет данных</td></tr>'}</table></div>`;
    main.querySelectorAll('[data-lid]').forEach((b) => b.onclick = () => { UI.tablesLid = b.dataset.lid; render(); });
    main.querySelectorAll('[data-k]').forEach((b) => b.onclick = () => { UI.statsKey = b.dataset.k; render(); });
  }

  // ================== трансферы ==================
  function viewTransfers(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const f = UI.tf;
    const view = f.view || 'search';
    let body = '';
    if (view === 'search') {
      let list = Object.values(G.players).filter((p) => p.club !== u.id);
      if (f.name) list = list.filter((p) => p.name.toLowerCase().includes(f.name.toLowerCase()));
      if (f.pos) list = list.filter((p) => p.pos === f.pos);
      if (f.league === 'free') list = list.filter((p) => !p.club);
      else if (f.league) list = list.filter((p) => p.club && T(p.club).league === f.league);
      if (f.maxPrice) list = list.filter((p) => p.value <= f.maxPrice * 1000);
      if (f.minOvr) list = list.filter((p) => p.ovr >= f.minOvr);
      if (f.maxAge) list = list.filter((p) => p.age <= f.maxAge);
      if (f.listed) list = list.filter((p) => p.listed);
      if (f.realOnly) list = list.filter((p) => !p.gen);
      const k = UI.sortKey, d = UI.sortDir;
      list.sort((a, b) => (k === 'name' ? a.name.localeCompare(b.name) * -d : (a[k] - b[k]) * d));
      const page = UI.tfPage, per = 60;
      const shown = list.slice(page * per, page * per + per);
      const th = (key, n, cls = 'num') => `<th class="sort ${cls}" data-sort="${key}">${n}${UI.sortKey === key ? (UI.sortDir < 0 ? ' ▾' : ' ▴') : ''}</th>`;
      body = `<div class="card" style="margin-bottom:12px"><div class="row">
        <input id="f-name" placeholder="Имя" value="${esc(f.name || '')}" style="width:150px">
        <select id="f-pos"><option value="">Все позиции</option>${FM.POS.map((p) => `<option value="${p}" ${f.pos === p ? 'selected' : ''}>${FM.POS_NAME[p]}</option>`).join('')}</select>
        <select id="f-league"><option value="">Все лиги</option>${s.order.map((id) => `<option value="${id}" ${f.league === id ? 'selected' : ''}>${esc(s.leagues[id].name)}</option>`).join('')}<option value="free" ${f.league === 'free' ? 'selected' : ''}>Свободные агенты</option></select>
        <input id="f-price" type="number" placeholder="Цена до, млн €" value="${f.maxPrice || ''}" style="width:130px" step="0.1">
        <input id="f-ovr" type="number" placeholder="Рейтинг от" value="${f.minOvr || ''}" style="width:100px">
        <input id="f-age" type="number" placeholder="Возраст до" value="${f.maxAge || ''}" style="width:100px">
        <label class="small"><input type="checkbox" id="f-listed" ${f.listed ? 'checked' : ''}> на трансфере</label>
        <label class="small"><input type="checkbox" id="f-real" ${f.realOnly ? 'checked' : ''}> только реальные</label>
      </div></div>
      <div class="card tight"><div class="tbl-wrap"><table><tr><th>Поз</th>${th('name', 'Игрок', '')}<th>Клуб</th>${th('age', 'Возр')}${th('ovr', 'Рейт')}${th('pot', 'Потенц.')}${th('value', 'Цена')}</tr>
        ${shown.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}</td><td>${p.club ? tname(T(p.club)) : '<span class="muted">свободный агент</span>'}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num small muted">${G.potLabel(p)}</td><td class="num">${FM.money(p.value)}</td></tr>`).join('')}
      </table></div>
      <div class="row" style="padding:10px"><span class="muted small grow">Найдено: ${list.length}</span><button class="btn sm" id="pp" ${page ? '' : 'disabled'}>‹</button><span class="small">${page + 1} / ${Math.max(1, Math.ceil(list.length / per))}</span><button class="btn sm" id="pn" ${(page + 1) * per < list.length ? '' : 'disabled'}>›</button></div></div>`;
    } else if (view === 'mine') {
      const sq = G.squad(u).sort((a, b) => b.value - a.value);
      body = `<div class="card tight"><table><tr><th>Поз</th><th>Игрок</th><th class="num">Возр</th><th class="num">Рейт</th><th class="num">Цена</th><th class="num">Зарплата/нед</th><th class="num">Контракт</th><th></th></tr>
        ${sq.map((p) => `<tr><td>${pos(p.pos)}</td><td>${pname(p)}${status(p)}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num">${FM.money(p.value)}</td><td class="num">${FM.money(p.wage)}</td><td class="num">${p.contract}</td>
          <td><button class="btn sm ${p.listed ? 'on' : ''}" data-list="${p.id}">${p.listed ? 'На трансфере' : 'Выставить'}</button></td></tr>`).join('')}</table></div>`;
    } else {
      body = `<div class="card tight"><table><tr><th>Дата</th><th>Игрок</th><th>Откуда</th><th>Куда</th><th class="num">Сумма</th></tr>
        ${s.seasonLog.map((x) => `<tr><td class="small">${FM.fmtDate(x.date)}</td><td>${G.players[x.pid] ? pname(G.players[x.pid]) : esc(x.name)}</td><td>${x.from ? esc(T(x.from).name) : '<span class="muted">своб. агент</span>'}</td><td>${esc(T(x.to).name)}</td><td class="num">${x.fee ? FM.money(x.fee) : 'бесплатно'}</td></tr>`).join('') || '<tr><td colspan="5" class="muted">Пока переходов нет</td></tr>'}</table></div>`;
    }
    main.innerHTML = `<div class="row" style="margin-bottom:12px"><div class="seg">${[['search', 'Поиск'], ['mine', 'Мои игроки'], ['log', 'Переходы']].map(([v, n]) => `<button data-view="${v}" class="${view === v ? 'on' : ''}">${n}</button>`).join('')}</div>
      <span class="small muted">Окно: ${G.windowText()} · Бюджет: <b>${FM.money(u.money)}</b> · Игроков: ${u.players.length}/32</span></div>${body}`;
    main.querySelectorAll('[data-view]').forEach((b) => b.onclick = () => { f.view = b.dataset.view; render(); });
    main.querySelectorAll('[data-sort]').forEach((b) => b.onclick = () => {
      if (UI.sortKey === b.dataset.sort) UI.sortDir *= -1; else { UI.sortKey = b.dataset.sort; UI.sortDir = b.dataset.sort === 'name' ? 1 : -1; }
      render();
    });
    const bindF = (id, key, num, scale) => {
      const el = main.querySelector(id);
      if (!el) return;
      el.onchange = () => {
        const v = el.type === 'checkbox' ? el.checked : el.value;
        f[key] = num ? (v === '' ? null : +v * (scale || 1)) : v;
        UI.tfPage = 0;
        render();
      };
    };
    bindF('#f-name', 'name'); bindF('#f-pos', 'pos'); bindF('#f-league', 'league'); bindF('#f-price', 'maxPrice', true);
    bindF('#f-ovr', 'minOvr', true); bindF('#f-age', 'maxAge', true); bindF('#f-listed', 'listed'); bindF('#f-real', 'realOnly');
    const pp = main.querySelector('#pp'), pn = main.querySelector('#pn');
    if (pp) pp.onclick = () => { UI.tfPage--; render(); };
    if (pn) pn.onclick = () => { UI.tfPage++; render(); };
    main.querySelectorAll('[data-list]').forEach((b) => b.onclick = () => { const p = P(+b.dataset.list); p.listed = !p.listed; render(); });
  }

  // ================== карточка игрока ==================
  function playerModal(pid) {
    const G = g(), s = G.s, u = G.userTeam();
    const p = P(pid);
    if (!p) return;
    const club = p.club ? T(p.club) : null;
    const mine = p.club === u.id;
    const avg = p.st.apps ? (p.st.rsum / p.st.apps).toFixed(2) : '—';
    const ask = club ? G.askingPrice(p) : 0;
    const wage = G.wageDemand(p, u);
    const el = modal(`<div class="row">${club ? badge(club, 'lg') : ''}<div class="grow"><h2 style="margin:0">${esc(p.name)}${p.gen ? ' <span class="gen" title="Сгенерированный игрок">*</span>' : ''}</h2>
      <div class="muted">${FM.POS_NAME[p.pos]} · ${p.age} лет · ${esc(FM.NAT[p.nat] || p.nat)}</div>
      <div>${club ? tname(club) : '<span class="muted">Свободный агент</span>'}</div></div><div class="center">${ovr(p.ovr)}<div class="small muted">рейтинг</div></div></div>
      <div class="kv">
        <div><span>Стоимость</span><b>${FM.money(p.value)}</b></div>
        <div><span>Потенциал</span><b>${G.potLabel(p)}</b></div>
        <div><span>Зарплата</span><b>${FM.money(p.wage)}/нед</b></div>
        <div><span>Контракт до</span><b>лето ${p.contract + 1}</b></div>
        <div><span>Физ. готовность</span><b>${Math.round(p.fit)}%</b></div>
        <div><span>Мораль</span><b>${p.morale >= 70 ? 'отличная' : p.morale >= 50 ? 'нормальная' : 'плохая'}</b></div>
      </div>
      ${p.inj ? `<div class="note bad">Травма: ещё ${G.injText(p.inj)}</div>` : ''}${p.sus ? `<div class="note bad">Дисквалификация: ${p.sus} матч(а)</div>` : ''}
      <table class="small"><tr><th></th><th class="num">Игры</th><th class="num">Голы</th><th class="num">Пас</th><th class="num">ЖК</th><th class="num">КК</th><th class="num">Оценка</th></tr>
        <tr><td>Чемпионат</td><td class="num">${p.st.apps}</td><td class="num">${p.st.g}</td><td class="num">${p.st.a}</td><td class="num">${p.st.yc}</td><td class="num">${p.st.rc}</td><td class="num">${avg}</td></tr>
        <tr><td>Кубок и стыки</td><td class="num">${p.cst.apps}</td><td class="num">${p.cst.g}</td><td class="num">${p.cst.a}</td><td class="num">${p.cst.yc}</td><td class="num">${p.cst.rc}</td><td class="num">${p.cst.apps ? (p.cst.rsum / p.cst.apps).toFixed(2) : '—'}</td></tr>
        <tr><td>Прошлые сезоны</td><td class="num">${p.car.apps}</td><td class="num">${p.car.g}</td><td class="num">${p.car.a}</td><td></td><td></td><td></td></tr></table>
      <div id="act" style="margin-top:14px">${mine ? `
        <div class="row"><button class="btn" data-renew>Продлить контракт</button>
        <button class="btn ${p.listed ? 'on' : ''}" data-tl>${p.listed ? 'Снять с трансфера' : 'Выставить на трансфер'}</button>
        <button class="btn danger" data-release>Расторгнуть контракт</button></div><div id="res"></div>` : `
        <h3>Предложение</h3>
        <div class="row">${club ? `<label>Сумма, тыс. €<br><input id="fee" type="number" value="${ask}" step="25" style="width:130px"></label>` : ''}
          <label>Зарплата/нед, тыс. €<br><input id="wage" type="number" value="${wage}" step="0.5" style="width:120px"></label>
          <label>Лет<br><select id="years">${[1, 2, 3, 4, 5].map((y) => `<option ${y === 3 ? 'selected' : ''}>${y}</option>`).join('')}</select></label>
          <button class="btn primary" data-offer>${club ? 'Сделать предложение' : 'Подписать'}</button></div>
        <div class="small muted" style="margin-top:6px">${club ? `Ориентир клуба: ~${FM.money(ask)}. ` : ''}Запрос игрока по зарплате: ~${FM.money(wage)}/нед. Бюджет: ${FM.money(u.money)}.</div><div id="res"></div>`}</div>`);
    const res = el.querySelector('#res');
    const say = (t, cls = '') => { res.innerHTML = `<div class="note ${cls}">${t}</div>`; };
    if (mine) {
      el.querySelector('[data-tl]').onclick = () => { p.listed = !p.listed; save(); playerModal(pid); render(); };
      el.querySelector('[data-renew]').onclick = () => {
        const w = G.renewCost(p);
        res.innerHTML = `<div class="note">Игрок согласен на ${FM.money(w)}/нед. Срок:
          ${[1, 2, 3, 4].map((y) => `<button class="btn sm" data-y="${y}">${y} г.</button>`).join(' ')}</div>`;
        res.querySelectorAll('[data-y]').forEach((b) => b.onclick = () => { G.renew(pid, +b.dataset.y); save(); playerModal(pid); render(); toast('Контракт продлён'); });
      };
      el.querySelector('[data-release]').onclick = () => {
        const years = Math.max(0, p.contract - s.season);
        const comp = Math.round(p.wage * 52 * Math.max(years, 0.5) * 0.5);
        res.innerHTML = `<div class="note warn">Компенсация составит ${FM.money(comp)}. <button class="btn sm danger" data-yes>Расторгнуть</button></div>`;
        res.querySelector('[data-yes]').onclick = () => { G.release(pid); save(); closeModal(); render(); toast(`${esc(p.name)} покинул клуб`); };
      };
    } else {
      el.querySelector('[data-offer]').onclick = () => {
        const fee = club ? +el.querySelector('#fee').value || 0 : 0;
        const w = +el.querySelector('#wage').value || 0;
        const yrs = +el.querySelector('#years').value;
        const r = G.offer(pid, fee, w, yrs);
        if (r.status === 'done') { save(); closeModal(); render(); toast(`${esc(p.name)} — ваш игрок!`); return; }
        if (r.status === 'counter') {
          say(`${esc(r.text)} <button class="btn sm primary" data-acc>Согласиться</button>`, 'warn');
          res.querySelector('[data-acc]').onclick = () => { el.querySelector('#fee').value = r.fee; el.querySelector('[data-offer]').click(); };
          return;
        }
        if (r.wage) el.querySelector('#wage').value = r.wage;
        say(esc(r.text), 'bad');
      };
    }
  }

  // ================== карточка клуба ==================
  function teamModal(tid) {
    const G = g(), s = G.s;
    const t = T(tid);
    const sq = G.squad(t).sort((a, b) => FM.POS.indexOf(a.pos) - FM.POS.indexOf(b.pos) || b.ovr - a.ovr);
    const row = G.table(t.league).find((r) => r.id === tid);
    modal(`<div class="row">${badge(t, 'lg')}<div class="grow"><h2 style="margin:0">${esc(t.name)}</h2><div class="muted">${esc(t.city)} · ${esc(t.stadium)} (${t.cap.toLocaleString('ru-RU')})</div>
      <div class="small">${esc(s.leagues[t.league].name)}: ${row.pos}-е место, ${row.pts} очк. ${form(row.form)}</div></div></div>
      <div class="kv"><div><span>Стоимость состава</span><b>${FM.money(G.squadValue(t))}</b></div><div><span>Репутация</span><b>${t.rep}</b></div><div><span>Схема</span><b>${t.formation}</b></div><div><span>Игроков</span><b>${t.players.length}</b></div></div>
      <div class="tbl-wrap"><table><tr><th>Поз</th><th>Игрок</th><th class="num">Возр</th><th class="num">Рейт</th><th class="num">И</th><th class="num">Г</th><th class="num">Цена</th></tr>
      ${sq.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num">${p.st.apps}</td><td class="num">${p.st.g}</td><td class="num">${FM.money(p.value)}</td></tr>`).join('')}</table></div>`, 'wide');
  }

  // ================== отчёт о матче ==================
  function matchReport(mid) {
    const G = g(), s = G.s;
    const m = s.matches[mid];
    if (!m || !m.played) return;
    const h = T(m.h), a = T(m.a);
    const goals = (side) => (m.goals || []).filter((x) => x.side === side).map((x) => `${G.players[x.scorer] ? esc(G.players[x.scorer].name) : '?'} ${x.min}'${x.pen ? ' (пен.)' : ''}`).join('<br>');
    const st = m.stats || {};
    const srow = (n, k) => st[k] ? statRow(n, st[k][0], st[k][1]) : '';
    const ratAll = Object.entries(m.ratings || {}).map(([pid, r]) => [G.players[pid], r]).filter(([p]) => p);
    modal(`<div class="muted center small">${esc(compName(m.comp))} · ${FM.fmtDateWd(m.date)}${m.att ? ` · зрителей: ${m.att.toLocaleString('ru-RU')}` : ''}</div>
      <div class="board" style="margin-top:8px"><div class="tm">${badge(h, 'lg')}<b>${esc(h.name)}</b><div class="scorers">${goals('h')}</div></div>
      <div><div class="sc">${m.hg}:${m.ag}</div>${m.pens ? `<div class="center small muted">пен. ${m.pens[0]}:${m.pens[1]}</div>` : ''}</div>
      <div class="tm">${badge(a, 'lg')}<b>${esc(a.name)}</b><div class="scorers">${goals('a')}</div></div></div>
      <div style="margin-top:12px">${srow('Владение, %', 'poss')}${srow('Удары', 'shots')}${srow('В створ', 'sot')}${srow('xG', 'xg')}${srow('Угловые', 'corners')}${srow('Жёлтые', 'yc')}${srow('Красные', 'rc')}</div>
      ${m.mvp && G.players[m.mvp] ? `<div class="note">Лучший игрок матча: <b>${pname(G.players[m.mvp])}</b> ${rt(m.ratings[m.mvp])}</div>` : ''}
      ${ratAll.length ? `<div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">${[h, a].map((t) => `<div><h3>${esc(t.name)}</h3>${ratAll.filter(([p]) => p.club === t.id).sort((x, y) => y[1] - x[1]).map(([p, r]) => `<div class="row small">${pos(p.pos)} <span class="grow">${pname(p)}</span>${rt(r)}</div>`).join('')}</div>`).join('')}</div>` : ''}`);
  }

  function statRow(n, a, b) {
    const sum = (+a || 0) + (+b || 0) || 1;
    return `<div class="statrow"><b class="right">${a}</b><div><div class="lbl">${n}</div><div class="b"><i style="width:${(a / sum) * 100}%"></i><i style="width:${(b / sum) * 100}%"></i></div></div><b>${b}</b></div>`;
  }

  // ================== перед матчем ==================
  function preMatch() {
    const G = g(), s = G.s, u = G.userTeam();
    const m = G.userMatchToday();
    if (!m) return;
    const h = T(m.h), a = T(m.a);
    const opp = m.h === u.id ? a : h;
    const problems = G.lineupProblems(u);
    let extra = '';
    if (m.firstLeg) {
      const f = s.matches[m.firstLeg];
      extra = `<div class="note">Первый матч: ${esc(T(f.h).name)} ${f.hg}:${f.ag} ${esc(T(f.a).name)}</div>`;
    }
    const el = modal(`<div class="muted center small">${esc(compName(m.comp))}${m.comp !== 'cup' && m.comp !== 'po' ? `, ${m.round}-й тур` : ''} · ${FM.fmtDateWd(m.date)}</div>
      <div class="next"><div class="side">${badge(h, 'lg')}<b>${esc(h.name)}</b><span class="small muted">${form(h.form.slice(-5))}</span></div><div class="vs">vs</div>
      <div class="side">${badge(a, 'lg')}<b>${esc(a.name)}</b><span class="small muted">${form(a.form.slice(-5))}</span></div></div>
      ${extra}
      <div class="small muted center">Соперник играет по схеме ${opp.formation}. Ваша схема: ${u.formation}.</div>
      ${problems.length ? `<div class="note warn small">${problems.map(esc).join('<br>')}<br>Свободные места займут лучшие доступные игроки.</div>` : ''}
      <div class="row" style="justify-content:center;margin-top:14px">
        <button class="btn" data-squad>Изменить состав</button>
        <button class="btn" data-quick>Быстрый результат</button>
        <button class="btn primary" data-live>Смотреть матч</button></div>`);
    el.querySelector('[data-squad]').onclick = () => { closeModal(); UI.tab = 'squad'; render(); };
    el.querySelector('[data-quick]').onclick = () => {
      closeModal();
      G.playMatch(m);
      afterUserMatch(m);
    };
    el.querySelector('[data-live]').onclick = () => { closeModal(); liveMatch(m); };
  }

  function afterUserMatch(m) {
    save();
    render();
    matchReport(m.id);
  }

  // ================== живой матч ==================
  const ICONS = { goal: '⚽', yellow: '🟨', red: '🟥', sub: '⇄', injury: '✚', save: '🧤', miss: '·', pen: '❗', half: '⏱', end: '⏱', start: '⏱', pens: '🎯', info: '' };

  function liveMatch(m) {
    const G = g();
    const sim = G.createMatch(m, true);
    const root = document.createElement('div');
    root.className = 'match';
    document.body.appendChild(root);
    let speed = 1, timer = null, tab = 'feed', subSel = null;
    const delays = { 1: 650, 2: 280, 4: 90 };
    const h = sim.home.team, a = sim.away.team;
    root.innerHTML = `<div class="inner">
      <div class="board"><div class="tm">${badge(h, 'lg')}<b>${esc(h.name)}</b><div class="scorers" id="sh"></div></div>
        <div><div class="sc" id="sc">0:0</div><div class="min" id="mn">0'</div></div>
        <div class="tm">${badge(a, 'lg')}<b>${esc(a.name)}</b><div class="scorers" id="sa"></div></div></div>
      <div class="prog"><i id="pg" style="width:0"></i></div>
      <div class="row mtabs"><div class="seg" id="spd">${[['0', '⏸'], ['1', '×1'], ['2', '×2'], ['4', '×4']].map(([v, n]) => `<button data-s="${v}" class="${+v === speed ? 'on' : ''}">${n}</button>`).join('')}</div>
        <div class="seg" id="tabs">${[['feed', 'Ход матча'], ['stats', 'Статистика'], ['lu', 'Составы']].map(([v, n]) => `<button data-tab="${v}" class="${v === tab ? 'on' : ''}">${n}</button>`).join('')}</div>
        <span class="grow"></span><button class="btn" id="mng">Замены и тактика</button><button class="btn" id="fin">До конца</button></div>
      <div id="mgrPanel" class="card hidden" style="margin-bottom:12px"></div>
      <div class="card" id="body"></div>
      <div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary hidden" id="done">Завершить</button></div></div>`;
    const $ = (q) => root.querySelector(q);
    const feed = [];
    const draw = () => {
      $('#sc').textContent = `${sim.home.goals}:${sim.away.goals}`;
      $('#mn').textContent = sim.done ? (sim.pens ? `пен. ${sim.pens.h}:${sim.pens.a}` : 'Конец') : `${sim.minuteLabel()}'`;
      const total = sim.phase === 'et' ? 120 : 90;
      const cur = sim.phase === 'first' ? Math.min(sim.minute, 45) : Math.min(sim.minute, total);
      $('#pg').style.width = `${sim.done ? 100 : (cur / total) * 100}%`;
      const gl = (sd) => sim.goalsList.filter((x) => x.side === sd).map((x) => `${esc(G.players[x.scorer].name.split(' ').slice(-1)[0])} ${x.min}'`).join(', ');
      $('#sh').innerHTML = gl('h');
      $('#sa').innerHTML = gl('a');
      const body = $('#body');
      if (tab === 'feed') {
        body.innerHTML = `<div class="feed">${feed.slice().reverse().map((e) => `<div class="ev ${e.type}"><span class="m">${e.min}'</span><span class="i">${ICONS[e.type] || ''}</span><span>${e.side ? `<b style="color:${markColor(e.side === 'h' ? h : a)}">■</b> ` : ''}${esc(e.text)}</span></div>`).join('')}</div>`;
      } else if (tab === 'stats') {
        const H = sim.home.stats, A = sim.away.stats;
        const tp = H.possTicks + A.possTicks || 1;
        const ph = Math.round((H.possTicks / tp) * 100);
        body.innerHTML = statRow('Владение, %', ph, 100 - ph) + statRow('Удары', H.shots, A.shots) + statRow('В створ', H.sot, A.sot) + statRow('xG', H.xg.toFixed(2), A.xg.toFixed(2)) + statRow('Угловые', H.corners, A.corners) + statRow('Фолы', H.fouls, A.fouls) + statRow('Жёлтые', H.yc, A.yc) + statRow('Красные', H.rc, A.rc);
      } else {
        const side = (sd) => `<div><h3>${esc(sd.team.name)}</h3><table class="lu small">${sd.onPitch.map((o) => `<tr><td>${pos(o.slot)}</td><td>${esc(o.p.name)}${sd.yellows[o.p.id] ? ' 🟨' : ''}</td><td>${fitBar(Math.round(sd.fitness[o.p.id]))}</td><td class="num">${rt(sd.rating[o.p.id])}</td></tr>`).join('')}
          <tr><td colspan="4" class="muted">Запас (замен осталось: ${sd.subsLeft})</td></tr>${sd.bench.map((p) => `<tr class="muted"><td>${pos(p.pos)}</td><td>${esc(p.name)}${sd.used.has(p.id) ? ' (вышел)' : ''}</td><td></td><td></td></tr>`).join('')}</table></div>`;
        body.innerHTML = `<div class="grid" style="grid-template-columns:1fr 1fr">${side(sim.home)}${side(sim.away)}</div>`;
      }
    };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    const tick = () => {
      const evs = sim.step();
      feed.push(...evs);
      if (sim.done) { stop(); finish(); }
      else if (sim.halfTime || sim.needUserSub) {
        setSpeed(0);
        if (sim.needUserSub) { tab = 'lu'; openMgr(); }
      }
      draw();
    };
    const setSpeed = (v) => {
      speed = v;
      stop();
      if (v > 0 && !sim.done) timer = setInterval(tick, delays[v]);
      root.querySelectorAll('#spd button').forEach((b) => b.classList.toggle('on', +b.dataset.s === v));
    };
    const finish = () => {
      $('#done').classList.remove('hidden');
      $('#fin').disabled = true;
      $('#mng').disabled = true;
      $('#mgrPanel').classList.add('hidden');
    };
    const openMgr = () => {
      const panel = $('#mgrPanel');
      const sd = sim.userSide;
      if (!sd) return;
      setSpeed(0);
      const t = sd.tactics;
      const seg = (key, opts) => `<div class="seg">${opts.map(([v, n]) => `<button data-mt="${key}" data-v="${v}" class="${t[key] === v ? 'on' : ''}">${n}</button>`).join('')}</div>`;
      const benchAvail = sd.bench.filter((p) => !sd.used.has(p.id));
      panel.classList.remove('hidden');
      panel.innerHTML = `<div class="row"><b class="grow">Замены (осталось ${sd.subsLeft})</b><button class="btn sm" id="closeMgr">Скрыть</button></div>
        ${sim.needUserSub ? `<div class="note bad small">${esc(G.players[sim.needUserSub].name)} травмирован — замените его.</div>` : ''}
        <div class="grid" style="grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
          <div><div class="small muted">На поле — кого заменить</div>${sd.onPitch.map((o) => `<button class="btn sm ${subSel === o.p.id ? 'on' : ''}" style="display:block;width:100%;text-align:left;margin:3px 0" data-out="${o.p.id}">${FM.POS_RU[o.slot]} · ${esc(o.p.name)} · ${Math.round(sd.fitness[o.p.id])}% · ${sd.rating[o.p.id].toFixed(1)}</button>`).join('')}</div>
          <div><div class="small muted">Запасные — кто выйдет</div>${benchAvail.map((p) => `<button class="btn sm" style="display:block;width:100%;text-align:left;margin:3px 0" data-in="${p.id}" ${subSel && sd.subsLeft > 0 && G.isAvailable(p) ? '' : 'disabled'}>${FM.POS_RU[p.pos]} · ${esc(p.name)} · ${p.ovr}</button>`).join('') || '<div class="small muted">Никого не осталось</div>'}</div></div>
        <div class="row" style="margin-top:10px"><span class="small muted">Настрой</span>${seg('ment', [[-2, 'Автобус'], [-1, 'Оборона'], [0, 'Баланс'], [1, 'Атака'], [2, 'Штурм']])}
          <span class="small muted">Прессинг</span>${seg('press', [[0, 'Низкий'], [1, 'Средний'], [2, 'Высокий']])}</div>`;
      panel.querySelector('#closeMgr').onclick = () => panel.classList.add('hidden');
      panel.querySelectorAll('[data-out]').forEach((b) => b.onclick = () => { subSel = +b.dataset.out; openMgr(); });
      panel.querySelectorAll('[data-in]').forEach((b) => b.onclick = () => {
        if (sim.userSub(subSel, +b.dataset.in)) { feed.push(sim.events[sim.events.length - 1]); subSel = null; openMgr(); draw(); }
      });
      panel.querySelectorAll('[data-mt]').forEach((b) => b.onclick = () => {
        const v = {};
        v[b.dataset.mt] = +b.dataset.v;
        sim.setUserTactics(v);
        feed.push(sim.events[sim.events.length - 1]);
        openMgr();
        draw();
      });
    };
    root.querySelectorAll('#spd button').forEach((b) => b.onclick = () => setSpeed(+b.dataset.s));
    root.querySelectorAll('#tabs button').forEach((b) => b.onclick = () => {
      tab = b.dataset.tab;
      root.querySelectorAll('#tabs button').forEach((x) => x.classList.toggle('on', x === b));
      draw();
    });
    $('#mng').onclick = openMgr;
    $('#fin').onclick = () => {
      stop();
      while (!sim.done) {
        feed.push(...sim.step());
        if (sim.needUserSub) {
          // без участия тренера травмированного меняет ассистент
          const sd = sim.userSide, o = sd.onPitch.find((x) => x.p.id === sim.needUserSub);
          const sub = o && sim.bestSub(sd, o.slot);
          if (sub) sim.doSub(sd, o.p, sub); else sim.needUserSub = null;
        }
      }
      finish();
      draw();
    };
    $('#done').onclick = () => {
      G.applyMatch(m, sim);
      root.remove();
      afterUserMatch(m);
    };
    draw();
    setSpeed(1);
  }

  // ================== финансы ==================
  function viewFinance(main) {
    const G = g(), u = G.userTeam();
    const wages = G.wageBill(u);
    const net = u.sponsor - wages;
    const top = G.squad(u).sort((a, b) => b.wage - a.wage).slice(0, 10);
    main.innerHTML = `<div class="grid">
      <div class="card"><h3>Баланс</h3><div class="kv">
        <div><span>Деньги клуба</span><b class="${u.money < 0 ? 'bad' : ''}">${FM.money(u.money)}</b></div>
        <div><span>Спонсоры, в неделю</span><b>${FM.money(u.sponsor)}</b></div>
        <div><span>Зарплаты, в неделю</span><b>${FM.money(wages)}</b></div>
        <div><span>Итог недели (без билетов)</span><b class="${net < 0 ? 'bad' : 'good'}">${FM.money(net)}</b></div>
        <div><span>Стоимость состава</span><b>${FM.money(G.squadValue(u))}</b></div>
        <div><span>Доходы / расходы за сезон</span><b>${FM.money(u.fin.income)} / ${FM.money(u.fin.expense)}</b></div></div>
        <div class="small muted">Доходы: спонсоры (каждый понедельник), билеты на домашние матчи, призовые по итогам сезона, кубковые премии и продажи игроков. Долг больше 3 млн € раздражает руководство.</div></div>
      <div class="card"><h3>Самые высокие зарплаты</h3>${top.map((p) => `<div class="row small">${pos(p.pos)} <span class="grow">${pname(p)}</span><b>${FM.money(p.wage)}</b><span class="muted">до ${p.contract + 1}</span></div>`).join('')}</div>
      <div class="card"><h3>Движение средств</h3>${u.fin.log.slice(0, 30).map((x) => `<div class="row small"><span class="muted" style="width:70px">${FM.fmtDate(x.date)}</span><span class="grow">${esc(x.what)}</span><b class="${x.amount < 0 ? 'bad' : 'good'}">${FM.money(x.amount)}</b></div>`).join('') || '<div class="muted small">Пока пусто</div>'}</div></div>`;
  }

  // ================== клуб ==================
  function viewClub(main) {
    const G = g(), s = G.s, u = G.userTeam();
    main.innerHTML = `<div class="grid">
      <div class="card"><div class="row">${badge(u, 'lg')}<div><h2 style="margin:0">${esc(u.name)}</h2><div class="muted">${esc(u.city)}</div></div></div>
        <div class="kv"><div><span>Стадион</span><b>${esc(u.stadium)}</b></div><div><span>Вместимость</span><b>${u.cap.toLocaleString('ru-RU')}</b></div>
        <div><span>Репутация</span><b>${u.rep}</b></div><div><span>Лига</span><b>${esc(s.leagues[u.league].name)}</b></div></div>
        <button class="btn" data-team="${u.id}">Весь состав</button></div>
      <div class="card"><h3>Руководство</h3><div>Задача: <b>${esc(G.expectText())}</b></div><div class="small muted">Ориентир — ${s.board.expect}-е место</div>
        <div class="bar" style="margin:10px 0"><i style="width:${Math.round(s.board.conf)}%"></i></div><div class="small">Доверие: ${Math.round(s.board.conf)}%</div></div>
      <div class="card"><h3>История тренера</h3>${s.history.length ? `<table><tr><th>Сезон</th><th>Клуб</th><th>Турнир</th><th class="num">Место</th><th></th></tr>${s.history.map((x) => `<tr><td>${x.year}/${String(x.year + 1).slice(2)}</td><td>${esc(T(x.team).name)}</td><td>${esc(s.leagues[x.league] ? s.leagues[x.league].short : x.league)}</td><td class="num">${x.pos}</td><td>${x.moved === 'up' ? '<span class="good">▲</span>' : x.moved === 'down' ? '<span class="bad">▼</span>' : ''}${x.cup ? ' 🏆' : ''}</td></tr>`).join('')}</table>` : '<div class="muted small">Первый сезон в карьере.</div>'}</div></div>`;
  }

  // ================== почта ==================
  function viewInbox(main) {
    const G = g(), s = G.s;
    main.innerHTML = `<div class="card tight">${s.inbox.map((m) => `<div class="inbox-item ${m.read ? '' : 'unread'}" data-msg="${m.id}">
      <div class="row"><span class="t grow">${esc(m.title)}</span><span class="small muted">${FM.fmtDate(m.date)}</span></div>
      <div class="small">${esc(m.text)}</div>
      ${m.type === 'offer' && m.data ? (m.data.closed ? `<div class="small muted">${esc(m.data.result || 'Закрыто')}</div>` : `<div class="row" style="margin-top:6px"><button class="btn sm primary" data-acc="${m.id}">Принять</button><button class="btn sm" data-dec="${m.id}">Отклонить</button><span class="small muted">до ${FM.fmtDate(m.data.until)}</span></div>`) : ''}
      ${m.type === 'job' && m.data && !m.data.closed ? `<div class="row" style="margin-top:6px"><button class="btn sm primary" data-job="${m.id}">Принять предложение</button></div>` : ''}
    </div>`).join('') || '<div style="padding:14px" class="muted">Писем нет</div>'}</div>`;
    s.inbox.forEach((m) => { if (m.type !== 'offer' || (m.data && m.data.closed)) m.read = true; });
    main.querySelectorAll('[data-acc]').forEach((b) => b.onclick = () => { toast(esc(G.answerOffer(+b.dataset.acc, true))); save(); render(); });
    main.querySelectorAll('[data-dec]').forEach((b) => b.onclick = () => { G.answerOffer(+b.dataset.dec, false); save(); render(); });
    main.querySelectorAll('[data-job]').forEach((b) => b.onclick = () => {
      const m = s.inbox.find((x) => x.id === +b.dataset.job);
      m.data.closed = true;
      G.takeJob(m.data.team);
      UI.tab = 'home';
      save();
      render();
    });
  }

  // ================== меню ==================
  function viewMenu(main) {
    const G = g();
    main.innerHTML = `<div class="grid">
      <div class="card"><h3>Сохранения</h3>
        ${[1, 2, 3].map((i) => `<div class="list-item"><b>Слот ${i}</b><span class="grow small muted" id="slot${i}">${esc((localMeta(SAVE_SLOT + i) || {}).info || 'пусто')}</span>
          <button class="btn sm" data-save="${i}">Сохранить</button><button class="btn sm" data-load="${i}">Загрузить</button></div>`).join('')}
        <div class="small muted" style="margin:8px 0">Игра автоматически сохраняется после каждого матча${UI.cloud ? ' — и в облако, так что продолжить можно с другого устройства' : ''}.</div>
        <div class="row"><button class="btn" id="exp">Экспорт в файл</button><button class="btn" id="imp">Импорт из файла</button></div></div>
      <div class="card"><h3>База данных</h3>
        <div class="small" style="margin-bottom:10px">Составы РПЛ собраны по заявкам и составам на матчи лета–осени 2026 года, цены — оценка на уровне Transfermarkt. По ФНЛ и Второй лиге открытых данных мало: недостающих игроков игра генерирует, они помечены «*». В редакторе можно исправить любого игрока или клуба.</div>
        <div class="row"><button class="btn primary" id="editor">Редактор базы</button></div></div>
      <div class="card"><h3>Игра</h3><div class="row"><button class="btn danger" id="newgame">Новая игра</button></div></div></div>`;
    main.querySelectorAll('[data-save]').forEach((b) => b.onclick = () => { if (save(SAVE_SLOT + b.dataset.save)) toast('Сохранено'); render(); });
    main.querySelectorAll('[data-load]').forEach((b) => b.onclick = () => loadSlot(SAVE_SLOT + b.dataset.load));
    slotMetas().then((m) => {
      [1, 2, 3].forEach((i) => { const el = main.querySelector('#slot' + i); if (el && m[SAVE_SLOT + i]) el.textContent = m[SAVE_SLOT + i].info; });
    });
    main.querySelector('#exp').onclick = () => download(`ffm26_${G.userTeam().id}_${G.s.date}.json`, JSON.stringify(G.s));
    main.querySelector('#imp').onclick = () => pickFile((s) => (s.teams && s.players ? loadState(s) : toast('Это не файл сохранения.')));
    main.querySelector('#editor').onclick = () => editor();
    const ng = main.querySelector('#newgame');
    ng.onclick = () => {
      // подтверждение вторым нажатием: системные диалоги на странице claude.ai не показываются
      if (!ng.dataset.sure) {
        ng.dataset.sure = '1';
        ng.textContent = 'Точно? Нажмите ещё раз';
        return;
      }
      save();
      UI.g = null;
      startScreen();
    };
  }

  // ================== редактор базы ==================
  function exportDb(G) {
    const s = G.s;
    return s.order.map((lid) => {
      const L = s.leagues[lid];
      return {
        id: L.id, name: L.name, short: L.short, tier: L.tier, weekday: L.weekday, autumn: L.autumn, spring: L.spring, ticket: L.ticket, prize: L.prize,
        teams: L.teams.map((tid) => {
          const t = G.teams[tid];
          return {
            id: t.id, name: t.name, city: t.city, stadium: t.stadium, cap: t.cap, colors: t.colors, rep: t.rep, money: Math.round(t.money), reserveOf: t.reserveOf || undefined,
            players: '\n' + G.squad(t).map((p) => [p.name, p.pos, p.age, p.value, p.nat, p.ovr, p.pot, p.gen ? 'g' : ''].join('|')).join('\n'),
          };
        }),
      };
    });
  }

  function editor() {
    const G = g(), s = G.s;
    let lid = G.userTeam().league, tid = G.userTeam().id;
    const draw = () => {
      const L = s.leagues[lid];
      if (!L.teams.includes(tid)) tid = L.teams[0];
      const t = T(tid);
      const sq = G.squad(t).sort((a, b) => FM.POS.indexOf(a.pos) - FM.POS.indexOf(b.pos) || b.ovr - a.ovr);
      const el = modal(`<h2>Редактор базы</h2>
        <div class="small muted" style="margin-bottom:8px">Изменения применяются к текущей игре. Чтобы новые карьеры начинались с исправленными составами, нажмите «Сделать базой для новых игр». Если поменять только цену, рейтинг пересчитается по ней автоматически.</div>
        <div class="row" style="margin-bottom:10px"><select id="e-l">${s.order.map((id) => `<option value="${id}" ${id === lid ? 'selected' : ''}>${esc(s.leagues[id].name)}</option>`).join('')}</select>
          <select id="e-t">${L.teams.map((id) => `<option value="${id}" ${id === tid ? 'selected' : ''}>${esc(T(id).name)}</option>`).join('')}</select></div>
        <div class="row ed" style="margin-bottom:10px">
          <label>Название<br><input id="t-name" value="${esc(t.name)}"></label><label>Город<br><input id="t-city" value="${esc(t.city)}"></label>
          <label>Стадион<br><input id="t-stad" value="${esc(t.stadium)}"></label><label>Мест<br><input id="t-cap" type="number" value="${t.cap}" style="width:90px"></label>
          <label>Репутация<br><input id="t-rep" type="number" value="${t.rep}" style="width:70px"></label><label>Деньги, тыс. €<br><input id="t-money" type="number" value="${Math.round(t.money)}" style="width:110px"></label>
          <label>Цвета<br><input id="t-c1" type="color" value="${t.colors[0]}" style="width:44px;padding:0"><input id="t-c2" type="color" value="${t.colors[1]}" style="width:44px;padding:0"></label></div>
        <div class="tbl-wrap"><table class="ed" id="e-tab"><tr><th>Имя</th><th>Поз</th><th>Возр</th><th>Страна</th><th>Рейт</th><th>Потенц.</th><th>Цена, тыс. €</th><th>Ген.</th><th></th></tr>
          ${sq.map((p) => edRow(p)).join('')}</table></div>
        <div class="row" style="margin-top:10px"><button class="btn" id="e-add">+ Игрок</button><span class="grow"></span>
          <button class="btn primary" id="e-save">Сохранить клуб</button></div>
        <h3 style="margin-top:16px">Вся база</h3>
        <div class="row"><button class="btn" id="e-exp">Экспорт базы (JSON)</button><button class="btn" id="e-imp">Импорт базы → новая игра</button>
          <button class="btn" id="e-def">Сделать базой для новых игр</button><button class="btn danger" id="e-reset" ${customDb() ? '' : 'disabled'}>Вернуть встроенную базу</button></div>`, 'wide');
      el.querySelector('#e-l').onchange = (e) => { lid = e.target.value; draw(); };
      el.querySelector('#e-t').onchange = (e) => { tid = e.target.value; draw(); };
      el.querySelector('#e-add').onclick = () => {
        const tr = document.createElement('tr');
        tr.innerHTML = edRow({ id: '', name: '', pos: 'CM', age: 24, nat: 'RUS', ovr: '', pot: '', value: 300, gen: false });
        el.querySelector('#e-tab').appendChild(tr);
        bindDel(tr);
      };
      const bindDel = (root) => root.querySelectorAll('[data-del]').forEach((b) => b.onclick = () => { b.closest('tr').classList.toggle('del'); b.closest('tr').style.opacity = b.closest('tr').classList.contains('del') ? 0.35 : 1; });
      bindDel(el);
      el.querySelector('#e-save').onclick = () => {
        t.name = el.querySelector('#t-name').value.trim() || t.name;
        t.city = el.querySelector('#t-city').value.trim();
        t.stadium = el.querySelector('#t-stad').value.trim();
        t.cap = +el.querySelector('#t-cap').value || t.cap;
        t.rep = FM.clamp(+el.querySelector('#t-rep').value || t.rep, 30, 99);
        t.money = +el.querySelector('#t-money').value;
        t.colors = [el.querySelector('#t-c1').value, el.querySelector('#t-c2').value];
        el.querySelectorAll('#e-tab tr[data-pid]').forEach((tr) => {
          const get = (k) => tr.querySelector(`[data-k="${k}"]`);
          const pid = tr.dataset.pid;
          if (tr.classList.contains('del')) {
            if (pid) { const p = P(+pid); G.removeFromTeam(p); delete G.players[p.id]; }
            return;
          }
          const name = get('name').value.trim();
          if (!name) return;
          const d = {
            name, pos: get('pos').value, age: +get('age').value || 24, nat: (get('nat').value || 'RUS').toUpperCase(),
            value: +get('value').value || 100, ovr: +get('ovr').value || null, pot: +get('pot').value || null, gen: get('gen').checked,
          };
          if (!pid) {
            const p = G.createPlayer({ ...d, ovr: d.ovr || FM.ovrFromValue(d.value, d.age) }, t);
            if (d.pot) p.pot = Math.max(d.pot, p.ovr);
            return;
          }
          const p = P(+pid);
          const valueChanged = d.value !== p.value, ovrChanged = d.ovr && d.ovr !== p.ovr;
          Object.assign(p, { name: d.name, pos: d.pos, age: d.age, nat: d.nat, gen: d.gen });
          if (valueChanged && !ovrChanged) p.ovr = FM.ovrFromValue(d.value, d.age);
          else if (ovrChanged) p.ovr = FM.clamp(d.ovr, 30, 99);
          p.pot = Math.max(d.pot || p.pot, p.ovr);
          if (valueChanged) { p.value = d.value; p.vmul = FM.clamp(d.value / FM.baseValue(p.ovr, p.age, p.pot), 0.3, 4); }
          else G.revalue(p);
        });
        G._tables = {};
        save();
        render();
        draw();
        toast('Клуб сохранён');
      };
      el.querySelector('#e-exp').onclick = () => download('ffm26_database.json', JSON.stringify(exportDb(G), null, 1));
      el.querySelector('#e-def').onclick = () => {
        if (ls.set(DB_KEY, JSON.stringify(exportDb(G)))) { toast('Новые игры будут начинаться с этой базой'); draw(); }
        else toast('Не хватило места в хранилище браузера.');
      };
      el.querySelector('#e-reset').onclick = () => { ls.del(DB_KEY); toast('Встроенная база восстановлена'); draw(); };
      el.querySelector('#e-imp').onclick = () => pickFile((db) => {
        if (!Array.isArray(db) || !db[0] || !db[0].teams) return toast('Это не файл базы.');
        if (!ls.set(DB_KEY, JSON.stringify(db))) return toast('Не хватило места в хранилище браузера.');
        closeModal();
        UI.g = null;
        startScreen();
        toast('База загружена — выберите клуб');
      });
    };
    draw();
  }

  function edRow(p) {
    return `<tr data-pid="${p.id}"><td><input data-k="name" value="${esc(p.name)}" style="min-width:160px"></td>
      <td><select data-k="pos">${FM.POS.map((x) => `<option value="${x}" ${x === p.pos ? 'selected' : ''}>${FM.POS_RU[x]}</option>`).join('')}</select></td>
      <td><input data-k="age" type="number" value="${p.age}" style="width:56px"></td><td><input data-k="nat" value="${esc(p.nat)}" style="width:56px"></td>
      <td><input data-k="ovr" type="number" value="${p.ovr}" style="width:56px"></td><td><input data-k="pot" type="number" value="${p.pot}" style="width:56px"></td>
      <td><input data-k="value" type="number" value="${p.value}" style="width:90px"></td><td class="center"><input data-k="gen" type="checkbox" ${p.gen ? 'checked' : ''}></td>
      <td><button class="btn sm danger" data-del>✕</button></td></tr>`;
  }

  // ================== запуск ==================
  startScreen();
})();
