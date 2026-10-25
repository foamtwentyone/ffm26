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
  const SVG = {
    home: '<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    ball: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5l4 2.9-1.5 4.7h-5L8 10.4z"/><path d="M12 3v4.5M16 10.4l4.4-1.6M14.5 15.1l2.7 3.8M9.5 15.1l-2.7 3.8M8 10.4L3.6 8.8"/>',
    shirt: '<path d="M8 3l4 2 4-2 5 4-3 4-2-1v11H8V10l-2 1-3-4z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4"/>',
    cup: '<path d="M7 3h10v6a5 5 0 0 1-10 0zM12 14v4M8 21h8M9 18h6"/>',
    chart: '<path d="M4 20V11M10 20V5M16 20v-6M2 20h20"/>',
    swap: '<path d="M7 7h13l-4-4M17 17H4l4 4"/>',
    in: '<path d="M14 5l-7 7 7 7M7 12h14"/>',
    out: '<path d="M10 5l7 7-7 7M17 12H3"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 8.5a4 4 0 1 0 0 7M7.5 10.5H14M7.5 13.5H14"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    news: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    assist: '<path d="M5 19L19 5M10 5h9v9"/>',
    medal: '<circle cx="12" cy="15" r="5"/><path d="M8 3l4 7 4-7"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>',
  };
  const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVG[n] || ''}</svg>`;

  // Цвет клуба, который читается на тёмном фоне: насыщенный из двух цветов клуба, при необходимости осветлённый.
  const hexRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const rgbHex = (c) => '#' + c.map((v) => Math.round(FM.clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const satOf = (h) => { const c = hexRgb(h); return (Math.max(...c) - Math.min(...c)) / 255; };
  const mixHex = (h, to, k) => { const a = hexRgb(h), b = hexRgb(to); return rgbHex(a.map((v, i) => v + (b[i] - v) * k)); };
  function glow(t) {
    const cands = t.colors.filter((c) => /^#[0-9a-f]{6}$/i.test(c) && satOf(c) > 0.22).sort((a, b) => satOf(b) - satOf(a));
    let c = cands[0];
    if (!c) return '#8fa3d9';
    for (let i = 0; i < 6 && lum(c) < 0.14; i++) c = mixHex(c, '#ffffff', 0.22);
    return c;
  }
  function setAccent(t) {
    const root = document.documentElement.style;
    const a = t ? glow(t) : '#4da3ff';
    root.setProperty('--accent', a);
    root.setProperty('--accent2', mixHex(a, '#000000', 0.3));
    root.setProperty('--accent-ink', lum(a) > 0.45 ? '#0a0f2c' : '#ffffff');
  }

  function badge(t, cls = '') {
    if (t.logoData) return `<span class="badge logo ${cls}"><img src="${t.logoData}" alt="${esc(t.name)}"></span>`;
    if (FM.LOGOS && FM.LOGOS.has(t.id)) return `<span class="badge logo ${cls}"><img src="${FM.LOGO_IMG ? FM.LOGO_IMG[t.id] : `img/logos/${t.id}.png`}" alt="${esc(t.name)}"></span>`;
    const init = t.name.replace(/[«»"]/g, '').split(/[\s-]+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
    return `<span class="badge ${cls}" style="background:${t.colors[0]};color:${badgeText(t)}">${esc(init)}</span>`;
  }
  const tname = (t, b = true) => `<span class="tname" data-team="${t.id}">${b ? badge(t, 'sm') : ''}<span>${esc(t.name)}</span></span>`;
  const ovrCls = (o) => (o >= 82 ? 'o6' : o >= 75 ? 'o5' : o >= 68 ? 'o4' : o >= 60 ? 'o3' : o >= 52 ? 'o2' : 'o1');
  const ovr = (o) => `<span class="ovr ${ovrCls(o)}">${o}</span>`;
  const pos = (p) => `<span class="pos ${FM.GROUP[p]}" title="${FM.POS_NAME[p]}">${FM.POS_RU[p]}</span>`;
  const form = (f) => `<span class="form">${f.map((x) => `<i class="${x}">${{ W: 'В', D: 'Н', L: 'П' }[x]}</i>`).join('')}</span>`;
  const pname = (p) => `<span class="pl" data-player="${p.id}" style="cursor:pointer">${esc(p.name)}</span>${p.gen ? '<span class="gen" title="Сгенерированный игрок — замените реальным в редакторе базы">*</span>' : ''}`;
  const status = (p) => (p.inj ? `<span class="ico bad" title="Травма: ${p.inj} дн.">✚${p.inj}</span>` : '') + (p.sus ? `<span class="ico bad" title="Дисквалификация">▮${p.sus}</span>` : '') + (p.listed ? '<span class="ico warn" title="Выставлен на трансфер">$</span>' : '') + (p.contract <= g().s.season && !p.loan ? '<span class="ico warn" title="Контракт истекает летом">✎</span>' : '') + (p.loan ? `<span class="ico loan" title="В аренде из «${esc(g().teams[p.loan.from].name)}»">А</span>` : '');
  const rt = (r) => `<span class="rt ${r >= 8 ? 'top' : r >= 7 ? 'hi' : r < 6 ? 'lo' : ''}">${r.toFixed(1)}</span>`;
  const euroOf = (c) => FM.EURO.find((E) => E.id === c);
  const compName = (c) => (c === 'cup' ? 'Кубок России' : c === 'po' ? 'Плей-офф и стыки' : euroOf(c) ? euroOf(c).name : g().s.leagues[c] ? g().s.leagues[c].name : c);
  const compShort = (c) => (c === 'cup' ? 'Кубок' : c === 'po' ? 'Плей-офф' : euroOf(c) ? euroOf(c).short : g().s.leagues[c] ? g().s.leagues[c].short : c);
  // стадия матча: тур чемпионата, раунд кубка или этап еврокубка
  const roundText = (m) => (m.label ? m.label : g().s.leagues[m.comp] ? `${m.round}-й тур` : m.comp === 'cup' && g().s.cup.rounds[m.round - 1] ? g().s.cup.rounds[m.round - 1].name : m.leg ? `${m.leg}-й матч` : '');
  const fitBar = (f) => `<div class="bar ${f < 70 ? 'bad' : f < 88 ? 'warn' : ''}" style="width:48px;display:inline-block;vertical-align:middle"><i style="width:${f}%"></i></div>`;
  const ovrCell = (p) => ovr(p.ovr);
  // Поле суммы: крупные суммы вводятся в миллионах, мелкие — в тысячах. Внутри игры деньги хранятся в тыс. €.
  const moneyUnit = (k) => (k >= 1000 ? 'млн' : 'тыс.');
  const moneyField = (id, label, k, unit = moneyUnit(k), attrs = '') => {
    const m = unit === 'млн';
    const v = m ? Math.round(k / 10) / 100 : Math.round(k);
    return `<label>${label}, ${unit} €<input id="${id}" data-unit="${unit}" type="number" min="0" step="${m ? 0.05 : 5}" value="${v}" ${attrs}></label>`;
  };
  const readMoney = (el) => Math.round((+el.value || 0) * (el.dataset.unit === 'млн' ? 1000 : 1));
  // удаления под голами своей команды: «🟥 Иванов 67'»
  const redLines = (reds, side) => (reds || []).filter((r) => r.side === side).map((r) => `<div class="red-line"><i class="rc-card"></i>${g().players[r.pid] ? esc(g().players[r.pid].name) : '?'} ${r.min}'</div>`).join('');
  // голы одного игрока — в одну строку: «Круговой 28', 90+2'»
  const scorerLines = (list, nameOf) => {
    const by = new Map();
    for (const x of list) {
      if (!by.has(x.scorer)) by.set(x.scorer, []);
      by.get(x.scorer).push(`${x.min}'${x.pen ? ' (пен.)' : ''}${x.og ? ' (авт.)' : ''}`);
    }
    return [...by].map(([id, mins]) => `${nameOf(id)} ${mins.join(', ')}`);
  };
  const flag = (c, cls = '') => (FM.FLAGS && FM.FLAGS.has(c)
    ? `<img class="flag ${cls}" src="${FM.FLAG_IMG ? FM.FLAG_IMG[c] : `img/flags/${c}.png`}" alt="${esc(FM.NAT[c] || c)}" title="${esc(FM.NAT[c] || c)}">`
    : `<span class="flag-code" title="${esc(FM.NAT[c] || c)}">${esc(c)}</span>`);
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

  // Если окно уже открыто (переговоры, карточка игрока), меняется только содержимое — без закрытия,
  // повторной анимации и сброса прокрутки.
  function modal(html, cls = '') {
    let bg = document.getElementById('modal');
    const reuse = !!bg;
    if (!bg) {
      bg = document.createElement('div');
      bg.className = 'modal-bg';
      bg.id = 'modal';
      bg.addEventListener('click', (e) => { if (e.target === bg || e.target.hasAttribute('data-close')) closeModal(); });
      document.body.appendChild(bg);
    }
    const top = bg.scrollTop;
    bg.innerHTML = `<div class="modal ${cls} ${reuse ? 'still' : ''}"><button class="x" data-close>×</button>${html}</div>`;
    if (reuse) bg.scrollTop = top;
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
    const str = JSON.stringify(g().packState());
    const info = infoOf(s);
    const ts = s.savedAt;
    FM.Store.localSave(key, str).then((ok) => {
      if (ok) ls.set(key + '_meta', JSON.stringify({ info, ts }));
      else if (!UI.cloud) toast('Не удалось сохранить: браузер не дал места в хранилище. Используйте экспорт в файл.');
    }).catch(() => { /* остаётся облачная копия */ });
    FM.Store.cloudSave(key, str, info);
    return true;
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
      const st = await FM.Store.localLoad(key);
      if (st) return loadState(st);
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
  // репутация клуба из базы: задана явно или считается по стоимости состава, как при создании мира
  const repOf = (t) => t.rep ?? FM.repFromValue((t.players || '').split('\n').reduce((a, l) => a + (+l.split('|')[3] || 0), 0));

  function startScreen() {
    setAccent(null);
    const db = customDb() || FM.leagues;
    let lid = db[0].id;
    let metas = {};
    const draw = () => {
      const L = db.find((x) => x.id === lid);
      const auto = metas[SAVE_AUTO];
      app.innerHTML = `
      <div class="hero"><h1>Футбольный менеджер <span>26</span></h1>
        <div class="muted">Сезон 2026/27: 36 лиг — Россия, вся Европа, Америка, Саудовская Аравия и СНГ</div></div>
      <main>
        ${auto ? `<div class="card" style="margin-bottom:14px"><div class="row"><div class="grow"><b>Продолжить карьеру</b><div class="muted small">${esc(auto.info)}</div></div><button class="btn primary" id="cont">Продолжить</button></div></div>` : ''}
        <div class="card" style="margin-bottom:14px">
          <div class="row">
            <label class="grow">Имя тренера<br><input id="mgr" value="${esc(ls.get('ffm26_mgr') || 'Тренер')}" style="width:100%"></label>
            <label class="row small" style="gap:8px"><input type="checkbox" id="ru-euro" ${ls.get('ffm26_ru_euro') === '0' ? '' : 'checked'}> Российские клубы в еврокубках</label>
            <button class="btn" id="loadfile">Загрузить из файла</button>
            ${[1, 2, 3].map((i) => metas[SAVE_SLOT + i] ? `<button class="btn" data-slot="${i}" title="${esc(metas[SAVE_SLOT + i].info)}">Слот ${i}</button>` : '').join('')}
          </div>
          ${UI.cloud ? '<div class="small muted" style="margin-top:8px">Сохранения синхронизируются между вашими устройствами.</div>' : ''}
          ${customDb() ? '<div class="note small">Используется ваша отредактированная база (Меню → Редактор базы).</div>' : ''}
        </div>
        <h2>Выберите клуб</h2>
        <div id="pick-area"></div>
      </main>`;
      drawPick();
      const c = app.querySelector('#cont');
      if (c) c.onclick = () => loadSlot(SAVE_AUTO);
      app.querySelectorAll('[data-slot]').forEach((b) => b.onclick = () => loadSlot(SAVE_SLOT + b.dataset.slot));
      app.querySelector('#loadfile').onclick = () => pickFile((s) => (s.teams && s.players ? loadState(s) : toast('Это не файл сохранения.')));
    };
    // смена лиги перерисовывает только выбор лиги и список клубов — без перезагрузки всего экрана и анимаций
    const drawPick = () => {
      const area = app.querySelector('#pick-area');
      const L = db.find((x) => x.id === lid);
      area.innerHTML = `${leaguePick(db, lid, 'data-l')}
        <div class="teams-pick">${L.teams.slice().sort((a, b) => repOf(b) - repOf(a)).map((t) => `
          <button class="tp" data-pick="${t.id}" style="--tc:${glow(t)}">${badge(t, 'lg')}<div><b>${esc(t.name)}</b><div class="muted small">${esc(t.city)}</div>
          ${stars(FM.clamp(Math.round((repOf(t) - 40) / 5) / 2, 0.5, 5))}</div></button>`).join('')}</div>`;
      area.querySelectorAll('[data-l]').forEach((b) => b.onclick = () => { lid = b.dataset.l; drawPick(); });
      area.querySelectorAll('[data-pick]').forEach((b) => b.onclick = () => {
        const mgr = app.querySelector('#mgr').value.trim() || 'Тренер';
        ls.set('ffm26_mgr', mgr);
        const ruEuro = app.querySelector('#ru-euro').checked;
        ls.set('ffm26_ru_euro', ruEuro ? '1' : '0');
        UI.g = FM.Game.newGame(b.dataset.pick, mgr, customDb() || undefined, { ruEuro });
        UI.tab = 'home';
        UI.tablesLid = UI.g.userTeam().league;
        save();
        render();
      });
    };
    for (const k of [SAVE_AUTO, SAVE_SLOT + 1, SAVE_SLOT + 2, SAVE_SLOT + 3]) metas[k] = localMeta(k);
    draw();
    // облачные сохранения подтягиваются позже; перерисовываем, только пока пользователь на этом экране
    slotMetas().then((m) => { if (!UI.g) { metas = m; draw(); } });
  }

  // ================== каркас ==================
  const TABS = [
    ['home', 'Главная'], ['squad', 'Состав и тактика'], ['fixtures', 'Расписание'], ['tables', 'Турниры'], ['stats', 'Статистика'],
    ['transfers', 'Трансферы'], ['finance', 'Финансы'], ['club', 'Клуб'], ['inbox', 'Почта'], ['news', 'Новости'], ['coach', 'Тренер'], ['menu', 'Сохранения и база'],
  ];
  // постоянная панель разделов: сверху на компьютере, снизу на телефоне (там — первые четыре и «Ещё»)
  const NAV = ['home', 'squad', 'tables', 'transfers', 'stats', 'fixtures', 'finance', 'inbox', 'coach'];
  const NAV_NAME = { squad: 'Состав', tables: 'Турниры', fixtures: 'Матчи' };
  // короткая подсказка под заголовком раздела: что здесь можно сделать
  const TAB_HINTS = {
    squad: 'Нажмите на позицию на поле и выберите игрока. «Автосостав» поставит сильнейших. ОСН — в старте, ЗАП — на скамейке.',
    fixtures: 'Все матчи сезона. Нажмите на сыгранный матч, чтобы открыть отчёт.',
    tables: 'Таблицы лиг, Кубок России, стыки и еврокубки.',
    stats: 'Статистика ваших игроков с сортировкой и лидеры всех лиг.',
    transfers: 'Найдите игрока и нажмите на него, чтобы начать переговоры. Суммы вводятся в миллионах €.',
    finance: 'Деньги клуба, зарплаты и все поступления и расходы.',
    club: 'Стадион, задача от руководства и ваша тренерская история.',
    inbox: 'Письма руководства и предложения за ваших игроков: их можно принять, отклонить или попросить больше.',
    menu: 'Сохранения карьеры, экспорт в файл и редактор базы.',
    news: 'Все трансферы, отставки и события футбольного мира.',
    coach: 'Ваша карьера: турниры и результаты по сезонам и итоги за всё время.',
  };
  const TAB_ICONS = { home: 'home', squad: 'shirt', fixtures: 'calendar', tables: 'trophy', stats: 'chart', transfers: 'swap', finance: 'coin', club: 'shield', inbox: 'mail', news: 'news', coach: 'user', menu: 'gear' };

  function seasonLabel(s) {
    return `${s.season}/${String(s.season + 1).slice(2)}`;
  }
  function weekNo(s) {
    const d0 = FM.parseDate(`${s.season}-07-01`), d = FM.parseDate(s.date);
    return Math.max(1, Math.floor((d - d0) / (7 * 86400000)) + 1);
  }

  // переход по плитке: «tables:cup» открывает раздел и нужную вкладку в нём
  function go(target) {
    if (target === 'review') return reviewModal();
    const [tab, sub] = target.split(':');
    UI.tab = tab;
    UI.sel = null;
    if (tab === 'tables') UI.tablesView = sub || 'table';
    if (tab === 'transfers' && sub) UI.tf.view = sub;
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    if (!UI.g) return startScreen();
    const G = g(), s = G.s, u = G.userTeam();
    setAccent(u);
    const unread = s.inbox.filter((m) => !m.read).length;
    const injured = G.squad(u).filter((p) => p.inj).length;
    const title = (TABS.find((t) => t[0] === UI.tab) || ['', ''])[1];
    // тот же раздел — перерисовываем без анимации появления и с прежней прокруткой
    const same = UI.lastTab === UI.tab;
    UI.lastTab = UI.tab;
    const scrollY = window.scrollY;
    app.classList.toggle('calm', same);
    app.innerHTML = `
      <header class="hdr"><div class="hdr-in">
        <button class="burger" id="burger" aria-label="Разделы"><i></i><i></i><i></i></button>
        <span class="crest" data-team="${u.id}">${badge(u, 'lg')}</span>
        <b class="club-name">${esc(u.name)}</b>
        <button class="next-btn" id="go">${s.seasonOver ? 'Новый сезон' : 'Далее'} <span>▶</span></button>
      </div></header>
      <div class="strip"><div class="strip-in">
        <div class="when">Сезон ${seasonLabel(s)}<span class="hide-m"> · Неделя ${weekNo(s)} · ${FM.fmtDateWd(s.date)}</span></div>
        <div class="chips">
          <button class="chip" data-tab="squad" title="Травмированные игроки"><b class="cross">✚</b>${injured}</button>
          <button class="chip" data-tab="inbox" title="Непрочитанные письма">✉ ${unread}</button>
          <button class="chip cash" data-tab="finance" title="Деньги клуба"><b>€</b>${FM.money(u.money).replace(' €', '')}</button>
        </div>
      </div></div>
      <nav class="mainnav">${NAV.map((id) => `<button data-tab="${id}" class="${UI.tab === id ? 'on' : ''}"><span class="ni">${icon(TAB_ICONS[id])}</span><span>${NAV_NAME[id] || esc(TABS.find((t) => t[0] === id)[1])}</span>${id === 'inbox' && unread ? `<span class="dot">${unread}</span>` : ''}</button>`).join('')}
        <button class="more" id="more"><span class="ni"><i class="mdots">•••</i></span><span>Ещё</span></button></nav>
      ${UI.tab !== 'home' ? `<div class="crumb"><button class="back" data-tab="home">‹</button><div><h1>${esc(title)}</h1>${TAB_HINTS[UI.tab] ? `<div class="crumb-hint">${TAB_HINTS[UI.tab]}</div>` : ''}</div></div>` : ''}
      <main id="main"></main>
      <div class="drawer hidden" id="drawer"><nav>
        <div class="drawer-head">${badge(u)}<div><b>${esc(u.name)}</b><div class="small muted">${esc(s.manager)} · ${esc(s.leagues[u.league].name)}</div></div></div>
        ${TABS.map(([id, n]) => `<button data-tab="${id}" class="${UI.tab === id ? 'on' : ''}"><span class="di">${icon(TAB_ICONS[id])}</span>${esc(n)}${id === 'inbox' && unread ? `<span class="dot">${unread}</span>` : ''}</button>`).join('')}
      </nav></div>`;
    const drawer = app.querySelector('#drawer');
    app.querySelector('#burger').onclick = () => drawer.classList.remove('hidden');
    app.querySelector('#more').onclick = () => drawer.classList.remove('hidden');
    drawer.onclick = (e) => { if (e.target === drawer) drawer.classList.add('hidden'); };
    app.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => go(b.dataset.tab));
    app.querySelector('#go').onclick = goOn;
    const main = app.querySelector('#main');
    ({ home: viewHome, squad: viewSquad, fixtures: viewFixtures, tables: viewTables, stats: viewStats, transfers: viewTransfers, finance: viewFinance, club: viewClub, inbox: viewInbox, news: viewNews, coach: viewCoach, menu: viewMenu })[UI.tab](main);
    if (same) window.scrollTo(0, scrollY);
    bindCommon(main);
    bindCommon(app.querySelector('.hdr'));
  }

  // ================== ход игры ==================
  function goOn() {
    const G = g();
    if (G.s.sacked) return sackedModal();
    // сезон окончен и итоги просмотрены — «Новый сезон» запускает переходы, контракты и календарь
    if (G.s.seasonOver) {
      const sum = G.endSeason();
      G.s.seasonOver = false;
      UI.round = null;
      UI.tablesLid = G.userTeam().league;
      UI.tab = 'home';
      save();
      render();
      return seasonModal(sum);
    }
    let r, guard = 0;
    do { r = G.advance(); } while (r === 'day' && guard++ < 400);
    if (r === 'match') { save(); render(); return preMatch(); }
    if (r === 'season_end') {
      G.s.seasonOver = true;
      save();
      render();
      return reviewModal();
    }
    if (r === 'sacked') { save(); render(); return sackedModal(); }
    if (r === 'offer') { toast('Новое предложение по игроку — загляните в почту.'); }
    save();
    render();
  }

  // короткое окно после перехода в новый сезон: итог для руководства и задача
  function seasonModal(sum) {
    const G = g(), u = G.userTeam();
    const mv = sum.moves.find((m) => m.id === u.id);
    modal(`<div class="ns-hero">${badge(u, 'xl')}<div><div class="ns-kicker">Новый сезон</div><h2>${seasonLabel(G.s)}</h2>
        <div class="muted">${esc(G.s.leagues[u.league].name)}${mv ? (mv.up ? ' · <span class="good">повышение в классе!</span>' : ' · <span class="bad">вылет</span>') : ''}</div></div></div>
      <div class="kv"><div><span>Прошлый сезон</span><b>${sum.userPos}-е место</b></div><div><span>Доверие руководства</span><b>${Math.round(G.s.board.conf)}%</b></div>
        <div><span>Задача</span><b>${esc(G.expectText())}</b></div><div><span>Трансферное окно</span><b>до 7 сентября</b></div></div>
      <div class="small muted">Подробности — в почте: оценка руководства, ушедшие свободные агенты, вернувшиеся из аренды.</div>
      <button class="btn primary" data-close style="margin-top:12px">Начать сезон</button>`, 'ns');
  }

  // Итоги сезона: открываются в конце сезона и доступны с главной, пока не начат новый
  function reviewModal() {
    const G = g(), s = G.s;
    const R = G.seasonReview();
    const U = R.user, ut = T(U.team);
    const L = s.leagues;
    const medal = (i) => ['🥇', '🥈', '🥉'][i] || '';
    const score = (f) => (f ? `${esc(T(f.h).name)} ${f.hg}:${f.ag}${f.pens ? ` (пен. ${f.pens[0]}:${f.pens[1]})` : ''} ${esc(T(f.a).name)}` : '');
    const pl = (x, fmt) => (x ? `<span data-player="${x[0].id}" class="link">${esc(x[0].name)}</span> <span class="muted">${esc(T(x[0].club) ? T(x[0].club).name : '')}</span> <b>${fmt(x[1])}</b>` : '<span class="muted">—</span>');
    const verdict = U.pos === 1 ? 'Чемпионы!' : U.pos <= U.expect ? 'Задача выполнена' : 'Ниже ожиданий';
    const rec = U.coach.rec;
    const trophies = [];
    R.leagues.forEach((x) => { if (x.top[0].id === U.team) trophies.push(L[x.lid].name); });
    if (R.cup === U.team) trophies.push('Кубок России');
    R.euro.forEach((e) => { if (e.winner === U.team) trophies.push(e.name); });
    const myMove = R.moves.find((m) => m.id === U.team);
    modal(`<div class="rv-hero" style="--tc:${glow(ut)}">
        <div class="rv-kicker">Итоги сезона ${R.year}/${String(R.year + 1).slice(2)}</div>
        <div class="rv-main">${badge(ut, 'xl')}<div class="grow"><h2>${esc(ut.name)}</h2>
          <div class="rv-place"><span class="rv-pos">${U.pos}</span><span>место · ${esc(L[U.league].name)}</span></div>
          <div class="rv-verdict ${U.pos <= U.expect ? 'good' : 'bad'}">${verdict}${myMove ? (myMove.up ? ' · повышение в классе!' : ' · вылет') : ''} <span class="muted">(задача — ${U.expect}-е место)</span></div></div></div>
        ${trophies.length ? `<div class="rv-trophies">${trophies.map((t) => `<span>🏆 ${esc(t)}</span>`).join('')}</div>` : ''}
        <div class="rv-stats">
          <div><b>${U.row.pts}</b><span>очков</span></div><div><b>${rec.w}-${rec.d}-${rec.l}</b><span>В-Н-П, все матчи</span></div>
          <div><b>${rec.gf}:${rec.ga}</b><span>мячи</span></div>
          <div><b>${U.scorer ? U.scorer[1] : 0}</b><span>голов</span><em>${U.scorer ? esc(U.scorer[0].name) : '—'}</em></div>
          <div><b>${U.assist ? U.assist[1] : 0}</b><span>передач</span><em>${U.assist ? esc(U.assist[0].name) : '—'}</em></div>
          <div><b>${U.best ? U.best[1].toFixed(2) : '—'}</b><span>лучшая оценка</span><em>${U.best ? esc(U.best[0].name) : '—'}</em></div>
        </div></div>
      <h3>Победители</h3>
      <div class="rv-grid">
        ${R.euro.map((e) => `<div class="rv-card gold">${badge(T(e.winner), 'lg')}<div><div class="rv-comp">${esc(e.name)}</div><b>${esc(T(e.winner).name)}</b><div class="small muted">${score(e.final)}</div></div></div>`).join('')}
        ${R.cup ? `<div class="rv-card gold">${badge(T(R.cup), 'lg')}<div><div class="rv-comp">Кубок России</div><b>${esc(T(R.cup).name)}</b><div class="small muted">${score(R.cupFinal)}</div></div></div>` : ''}
        ${R.leagues.map((x) => `<div class="rv-card ${x.top[0].id === U.team ? 'mine' : ''}">${badge(T(x.top[0].id), 'lg')}<div class="grow"><div class="rv-comp">${esc(L[x.lid].name)}</div><b>${esc(T(x.top[0].id).name)}</b> <span class="muted small">${x.top[0].pts} очк.</span>
          <div class="small muted">${x.top.slice(1).map((r, i) => `${medal(i + 1)} ${esc(T(r.id).name)}`).join(' · ')}</div></div></div>`).join('')}
      </div>
      <h3>Лучшие игроки лиг</h3>
      <div class="card tight"><table class="rv-table"><tr><th>Лига</th><th>Бомбардир</th><th class="hide-m">Ассистент</th><th class="hide-m">Лучшая оценка</th></tr>
        ${R.leagues.map((x) => `<tr><td><b>${esc(L[x.lid].short)}</b></td><td>${pl(x.scorer, (v) => v)}</td><td class="hide-m">${pl(x.assist, (v) => v)}</td><td class="hide-m">${pl(x.best, (v) => v.toFixed(2))}</td></tr>`).join('')}</table></div>
      ${R.moves.length ? `<h3>Повышения и вылеты</h3><div class="rv-moves">
        <div><div class="rv-comp good">▲ Повышаются</div>${R.moves.filter((m) => m.up).map((m) => `<div class="mini">${badge(T(m.id), 'sm')}<span class="grow">${esc(T(m.id).name)}</span><span class="muted small">→ ${esc(L[m.to].short)}</span></div>`).join('')}</div>
        <div><div class="rv-comp bad">▼ Вылетают</div>${R.moves.filter((m) => !m.up).map((m) => `<div class="mini">${badge(T(m.id), 'sm')}<span class="grow">${esc(T(m.id).name)}</span><span class="muted small">→ ${esc(L[m.to].short)}</span></div>`).join('')}</div></div>` : ''}
      <div class="row" style="margin-top:16px"><button class="btn" data-close>Посмотреть таблицы и статистику</button><span class="grow"></span><button class="btn primary" id="rv-next">Начать новый сезон ▶</button></div>
      <div class="small muted" style="margin-top:6px">Новый сезон начнётся только по кнопке «Новый сезон» — до этого можно спокойно изучить таблицы, кубки и статистику.</div>`, 'wide review');
    document.getElementById('rv-next').onclick = () => { closeModal(); goOn(); };
  }

  function sackedModal() {
    const G = g();
    const offers = G.jobOffers();
    modal(`<h2>Вы остались без работы</h2><p class="muted">Вам поступили предложения:</p>
      ${offers.map((t) => `<div class="list-item">${badge(t)}<div class="grow"><b>${esc(t.name)}</b><div class="small muted">${esc(G.s.leagues[t.league].name)}</div></div><button class="btn primary sm" data-job="${t.id}">Принять</button></div>`).join('')}`);
    document.querySelectorAll('[data-job]').forEach((b) => b.onclick = () => { G.takeJob(b.dataset.job); closeModal(); UI.tab = 'home'; save(); render(); });
  }

  // ================== главная ==================
  // Сила линий: среднее по стартовому составу (у ИИ — по его лучшему составу на сегодня).
  function lineRatings(t) {
    const G = g();
    // у пользователя незаполненные места перед матчем дозаполнятся автоматически — так и считаем
    const full = t.lineup.filter((id) => id && P(id) && G.isAvailable(P(id))).length === FM.FORMATIONS[t.formation].length;
    const lineup = t.id === G.s.user && full ? t.lineup : G.autoPick(t, t.formation).lineup;
    const st = teamStrength(t, lineup);
    return { def: Math.round(st.def), mid: Math.round(st.mid), att: Math.round(st.att) };
  }
  const stars = (v) => `<span class="stars" style="--v:${v}" title="${v} из 5">★★★★★</span>`;
  const tile = (title, target, body, cls = '', ic = '') => `<section class="tile ${cls}" data-go="${target}"><header>${ic ? `<span class="hic">${icon(ic)}</span>` : ''}<span class="tt">${title}</span><span class="chev">›</span></header><div class="tb">${body}</div></section>`;
  const shortDate = (d) => { const x = FM.parseDate(d); return `${x.getUTCDate()}.${String(x.getUTCMonth() + 1).padStart(2, '0')}`; };
  const cmpRow = (label, a, b) => {
    const w = (v) => FM.clamp((v - 40) * 2.2, 6, 100);
    return `<div class="cmp-row"><b>${a}</b><div class="cmp-bar l"><i style="width:${w(a)}%"></i></div><span>${label}</span><div class="cmp-bar r"><i style="width:${w(b)}%"></i></div><b>${b}</b></div>`;
  };

  function viewHome(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const nm = G.userMatchToday() || G.nextUserMatch();
    const L = s.leagues[u.league];
    const tab = G.table(u.league);
    const myRow = tab.find((r) => r.id === u.id);
    const conf = Math.round(s.board.conf);
    const upcoming = Object.values(s.matches).filter((m) => !m.played && (m.h === u.id || m.a === u.id)).sort((a, b) => (a.date < b.date ? -1 : 1)).slice(0, 5);
    const c = s.cup;
    const inCup = c && !c.winner && c.alive.includes(u.id);

    let hero = tile('Следующий матч', 'fixtures', '<div class="muted">Матчей в календаре нет — сезон подходит к концу.</div>', 'w2', 'ball');
    if (nm) {
      const h = T(nm.h), a = T(nm.a);
      const rh = lineRatings(h), ra = lineRatings(a);
      const side = (t) => `<div class="hm-team">${badge(t, 'xl')}<b data-team="${t.id}">${esc(t.name)}</b>
        <span class="small">${G.positionOf(t.id)}-е место</span></div>`;
      hero = `<section class="tile w2 hero-match" data-go="fixtures" style="--hcb:${glow(h)};--acb:${glow(a)}">
        <header><span class="hic">${icon('ball')}</span><span class="tt">Следующий матч</span><span class="chev">›</span></header>
        <div class="tb">
          <div class="hm">${side(h)}
            <div class="hm-mid"><span class="hm-date">${FM.fmtDateWd(nm.date)}</span><span class="hm-vs">VS</span>
              <span class="hm-tag">${esc(compName(nm.comp))}${roundText(nm) ? ` · ${esc(roundText(nm))}` : ''}</span>
              </div>
            ${side(a)}</div>
          <div class="cmp">${cmpRow('Защита', rh.def, ra.def)}${cmpRow('Полузащита', rh.mid, ra.mid)}${cmpRow('Атака', rh.att, ra.att)}</div>
        </div></section>`;
    }

    const sq = G.squad(u);
    const lead = (key, val, fmt) => { const p = sq.filter(key).sort((a, b) => val(b) - val(a))[0]; return p ? { p, v: fmt(val(p)) } : null; };
    const leaders = [
      ['ball', 'Бомбардир', lead((p) => p.st.g, (p) => p.st.g, (v) => v)],
      ['assist', 'Ассистент', lead((p) => p.st.a, (p) => p.st.a, (v) => v)],
      ['medal', 'Лучшая оценка', lead((p) => p.st.apps >= 3, (p) => p.st.rsum / p.st.apps, (v) => v.toFixed(1))],
    ].filter((x) => x[2]);
    // Кубки показываем, только если клуб в них участвует
    const euroMine = s.euro && FM.EURO.find((E) => s.euro[E.id] && s.euro[E.id].teams.includes(u.id));
    const cupRows = [];
    if (G.isRussian(u) && c) cupRows.push(`<div class="kvl"><span>Кубок России</span><b>${c.winner ? (c.winner === u.id ? '🏆 победа!' : `победил ${esc(T(c.winner).name)}`) : inCup ? esc(c.rounds[c.cur].name) : 'выбыли'}</b></div>`);
    if (euroMine) {
      const e = s.euro[euroMine.id];
      let st;
      if (e.winner) st = e.winner === u.id ? '🏆 победа!' : `победил ${esc(T(e.winner).name)}`;
      else if (e.phase === 'league') st = `${G.euroTable(euroMine.id).find((r) => r.id === u.id).pos}-е место`;
      else { const R = e.ko[e.ko.length - 1]; st = e.final ? 'финал' : R ? esc(R.name) : ''; }
      cupRows.push(`<div class="kvl"><span>${esc(euroMine.name)}</span><b>${st}</b></div>`);
    }
    main.innerHTML = `<div class="dash dash-simple">
      ${s.seasonOver ? `<section class="tile w2 season-over" data-go="review"><header><span class="hic">${icon('trophy')}</span><span class="tt">Сезон ${seasonLabel(s)} завершён</span><span class="chev">›</span></header>
        <div class="tb"><div>Посмотрите итоги: чемпионы, кубки, лучшие игроки. Таблицы и статистика сезона ещё доступны.</div>
        <div class="row" style="margin-top:10px"><button class="btn primary" id="rv-open">Итоги сезона</button><span class="small muted">Новый сезон — кнопкой «Новый сезон» вверху</span></div></div></section>` : hero}
      ${tile(esc(L.name), 'tables', tab.slice(0, 5).concat(myRow.pos > 5 ? [myRow] : []).map((r) => `<div class="mini ${r.id === u.id ? 'me' : ''}"><span class="pos-n">${r.pos}</span>${badge(T(r.id), 'sm')}<span class="grow ell">${esc(T(r.id).name)}</span><b>${r.pts}</b></div>`).join(''), '', 'trophy')}
      ${tile('Ближайшие матчи', 'fixtures', upcoming.slice(0, 4).map((m) => {
        const home = m.h === u.id, opp = T(home ? m.a : m.h);
        return `<div class="sched"><b>${shortDate(m.date)}</b>${badge(opp, 'sm')}<span class="grow ell">${esc(opp.name)}</span><span class="muted">${home ? 'дома' : 'в гостях'}</span></div>`;
      }).join('') || '<div class="muted">Сезон завершён</div>', '', 'calendar')}
      ${tile('Клуб', 'club', `<div class="kvl"><span>Деньги</span><b class="${u.money < 0 ? 'bad' : 'good'}">${FM.money(u.money)}</b></div>
        <div class="kvl"><span>Задача</span><b>${esc(G.expectText())}</b></div>
        <div class="kvl"><span>Доверие руководства</span><b class="${conf < 45 ? 'bad' : conf < 75 ? 'warn' : 'good'}">${conf}%</b></div>
        <div class="kvl"><span>Трансферное окно</span><b>${G.inWindow() ? 'открыто' : 'закрыто'}</b></div>`, '', 'shield')}
      ${tile('Новости', 'news', s.news.slice(0, 3).map((n) => `<div class="news ell2">${esc(n.text)}</div>`).join('') || '<div class="muted">Пока тихо</div>', '', 'news')}
      ${tile('Статистика игроков', 'stats', leaders.map(([ic, label, { p, v }]) => `<div class="leader"><span class="li">${icon(ic)}</span><div class="grow"><b data-player="${p.id}">${esc(p.name)}</b><div class="small muted">${label}</div></div><b class="big">${v}</b></div>`).join('') || '<div class="muted">Сезон ещё не начался</div>', '', 'chart')}
      ${cupRows.length ? tile('Кубки', euroMine ? 'tables:' + euroMine.id : 'tables:cup', cupRows.join(''), '', 'cup') : ''}
    </div>`;
    main.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', () => go(el.dataset.go)));
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
  function teamStrength(t, lineup = t.lineup) {
    const slots = FM.FORMATIONS[t.formation];
    const grp = { G: [], D: [], M: [], F: [] };
    lineup.forEach((pid, i) => {
      const p = P(pid);
      if (p) grp[FM.lineOf(slots[i][0], t.formation)].push(p.ovr * FM.pfit(p, slots[i][0]));
    });
    const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
    // каждая линия — только свои игроки: в схеме с одним нападающим атака — это он
    return { att: avg(grp.F), mid: avg(grp.M), def: avg(grp.D) };
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
    // выбрана позиция на поле — подсвечиваем, кто на неё подходит; выбрано место на скамейке — всех доступных
    const selSlot = UI.sel && UI.sel.type === 'xi' ? slots[UI.sel.i][0] : null;
    const selCur = UI.sel ? (UI.sel.type === 'xi' ? u.lineup[UI.sel.i] : u.bench[UI.sel.i]) : null;
    const markOf = (p) => {
      if (!UI.sel || p.id === selCur) return null;
      if (selSlot) return fitMark(p, selSlot);
      return G.isAvailable(p) ? { cls: inXI.has(p.id) ? 'opt-poor' : 'opt-ok', tag: '' } : { cls: 'opt-no', tag: p.inj ? 'травма' : 'дисквал.' };
    };
    // подходящие на выбранную позицию — наверх списка
    if (selSlot) sq.sort((a, b2) => (G.isAvailable(b2) - G.isAvailable(a)) || FM.pfit(b2, selSlot) - FM.pfit(a, selSlot) || b2.ovr - a.ovr);
    const segBtns = (key, opts) => `<div class="seg">${opts.map(([v, n]) => `<button data-t="${key}" data-v="${v}" class="${t[key] === v ? 'on' : ''}">${n}</button>`).join('')}</div>`;
    main.innerHTML = `<div class="squad-layout">
      <div>
        <div class="card" style="margin-bottom:14px">
          <div class="row" style="margin-bottom:10px"><select id="formation">${Object.keys(FM.FORMATIONS).map((f) => `<option ${f === u.formation ? 'selected' : ''}>${f}</option>`).join('')}</select>
            <button class="btn sm" id="auto">Автосостав</button><span class="grow"></span><span class="small ${UI.sel ? 'pick-hint' : 'muted'}">${UI.sel ? (selSlot ? `Кого поставить на позицию «${FM.POS_NAME[selSlot]}»? Подходящие подсвечены` : 'Выберите игрока для скамейки') : 'Нажмите на позицию'}</span></div>
          <div class="pitch"><div class="box top"></div><div class="box bot"></div>
            ${slots.map(([sp, x, y], i) => {
              const p = P(u.lineup[i]);
              const bad = p && (!G.isAvailable(p) || p.club !== u.id);
              const sel = UI.sel && UI.sel.type === 'xi' && UI.sel.i === i;
              return `<div class="slot ${p ? '' : 'empty'} ${bad ? 'bad' : ''} ${sel ? 'sel' : ''}" data-slot="${i}" style="left:${x}%;top:${y}%">
                <div class="shirt ln-${FM.lineOf(sp, u.formation)}">${p ? p.ovr : '+'}</div>
                <div class="nm">${p ? esc(p.name.split(' ').slice(-1)[0]) : FM.POS_RU[sp]}</div>
                ${p && FM.pfit(p, sp) < 1 ? `<div class="sp">${FM.POS_RU[sp]} (${Math.round(FM.pfit(p, sp) * 100)}%)</div>` : ''}</div>`;
            }).join('')}
          </div>
          <div class="legend"><span class="ln-G">Вратарь</span><span class="ln-D">Защита</span><span class="ln-M">Полузащита</span><span class="ln-F">Атака</span></div>
          <h3 style="margin-top:12px">Запасные</h3>
          <div class="row">${Array.from({ length: 9 }, (_, i) => {
            const p = P(u.bench[i]);
            const sel = UI.sel && UI.sel.type === 'bench' && UI.sel.i === i;
            return `<button class="btn sm bench-btn ${sel ? 'on' : ''} ${p && selSlot && p.id !== selCur ? fitMark(p, selSlot).cls : ''}" data-bench="${i}" title="${p ? esc(p.name) : 'Пусто'}">${p ? `${pos(p.pos)} ${esc(p.name.split(' ').slice(-1)[0])}` : '—'}</button>`;
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
          ${[['Атака', str.att, 'F'], ['Полузащита', str.mid, 'M'], ['Защита', str.def, 'D']].map(([n, v, l]) => `<div class="str ln-${l}"><span>${n}</span><div class="bar"><i style="width:${FM.clamp((v - 40) * 2, 0, 100)}%"></i></div><b>${Math.round(v)}</b></div>`).join('')}
          <div class="small muted" style="margin-top:6px">Высокий прессинг и темп сильнее утомляют игроков.</div>
        </div>
      </div>
      <div class="card tight"><div class="tbl-wrap"><table>
        <tr><th></th><th>Поз</th><th>Игрок</th><th class="num">Возр</th><th class="num">Рейт</th><th class="hide-m">Форма</th><th class="num hide-m">И</th><th class="num hide-m">Г</th><th class="num hide-m">П</th><th class="num hide-m">Оц</th><th class="num hide-m">Цена</th></tr>
        ${sq.map((p) => { const mk = markOf(p); return `<tr class="click ${p.id === selCur ? 'sel' : ''} ${mk ? mk.cls : ''}" data-row="${p.id}">
          <td>${inXI.has(p.id) ? '<span class="lineup-mark" title="В стартовом составе">ОСН</span>' : onBench.has(p.id) ? '<span class="bench-mark" title="На скамейке">ЗАП</span>' : ''}</td>
          <td class="nowrap">${pos(p.pos)}${(p.alt || []).length ? `<span class="pos-alt" title="Также играет: ${p.alt.map((x) => FM.POS_NAME[x]).join(', ')}">+${p.alt.map((x) => FM.POS_RU[x]).join(',')}</span>` : ''}${p.train ? `<span class="pos-alt" title="Переучивается">→${FM.POS_RU[p.train.to]}</span>` : ''}</td><td>${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}${mk && mk.tag ? ` <span class="fit-tag">${mk.tag}</span>` : ''}</td><td class="num">${p.age}</td><td class="num">${ovrCell(p)}</td>
          <td class="hide-m">${fitBar(p.fit)}</td><td class="num hide-m">${p.st.apps}</td><td class="num hide-m">${p.st.g}</td><td class="num hide-m">${p.st.a}</td>
          <td class="num hide-m">${p.st.apps ? rt(p.st.rsum / p.st.apps) : '—'}</td><td class="num hide-m">${FM.money(p.value)}</td></tr>`; }).join('')}
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

  // Насколько игрок подходит на позицию: класс подсветки и подпись. Используется при выборе замены.
  function fitMark(p, slot) {
    const G = g();
    if (!G.isAvailable(p)) return { cls: 'opt-no', tag: p.inj ? 'травма' : 'дисквал.' };
    const f = FM.pfit(p, slot);
    if (f >= 1) return { cls: 'opt-best', tag: 'своя позиция' };
    if (f >= 0.85) return { cls: 'opt-ok', tag: `${Math.round(f * 100)}%` };
    return { cls: 'opt-poor', tag: `${Math.round(f * 100)}%` };
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
        return `<tr class="${m.played ? 'click' : ''}" ${m.played ? `data-match="${m.id}"` : ''}><td>${FM.fmtDateWd(m.date)}</td><td class="small muted">${esc(compName(m.comp))}${roundText(m) ? ` · ${esc(roundText(m))}` : ''}</td>
          <td class="small muted">${m.h === u.id ? 'дома' : 'в гостях'}</td>
          <td class="right">${esc(h.name)} ${badge(h, 'sm')}</td><td class="center">${m.played ? `<span class="score ${cls}">${m.hg}:${m.ag}${m.pens ? ` <span class="small">(${m.pens[0]}:${m.pens[1]})</span>` : ''}</span>` : '<span class="muted">—</span>'}</td><td>${badge(a, 'sm')} ${esc(a.name)}</td></tr>`;
      }).join('')}
    </table></div></div>`;
  }

  // ================== турниры ==================
  function viewTables(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const lid = UI.tablesLid || u.league;
    if (UI.tablesView === 'po' && !(s.playoff && s.playoff.ties.length)) UI.tablesView = 'table';
    const view = UI.tablesView;
    const L = s.leagues[lid];
    let body = '';
    if (euroOf(view) && !(s.euro && s.euro[view])) UI.tablesView = 'table';
    if (view === 'cup') body = cupView();
    else if (view === 'po') body = playoffView();
    else if (euroOf(view) && s.euro && s.euro[view]) body = euroView(view);
    else {
      const tab = G.table(lid);
      const z = G.zones(lid);
      const rounds = L.rounds.length;
      // по умолчанию — последний сыгранный тур; ручной выбор держится, пока не сдвинулась дата
      const pin = UI.roundPin && UI.roundPin.lid === lid && UI.roundPin.date === s.date ? UI.roundPin.round : 0;
      let cur = pin;
      if (!cur || cur > rounds) {
        let last = 0;
        L.rounds.forEach((r, i) => { if (r.some((id) => s.matches[id].played)) last = i + 1; });
        cur = last || 1;
      }
      body = `<div class="grid" style="grid-template-columns:minmax(0,3fr) minmax(280px,2fr)">
      <div class="card tight"><div class="tbl-wrap"><table>
        <tr><th>#</th><th>Клуб</th><th class="num">И</th><th class="num">В</th><th class="num">Н</th><th class="num">П</th><th class="num">Мячи</th><th class="num">О</th><th class="hide-m">Форма</th></tr>
        ${tab.map((r) => `<tr class="${r.id === u.id ? 'me' : ''}"><td class="num"><span class="zone ${z[r.pos] || ''}"></span>${r.pos}</td><td>${tname(T(r.id))}</td><td class="num">${r.p}</td><td class="num">${r.w}</td><td class="num">${r.d}</td><td class="num">${r.l}</td><td class="num">${r.gf}–${r.ga}</td><td class="num"><b>${r.pts}</b></td><td class="hide-m">${form(r.form)}</td></tr>`).join('')}
      </table></div>
      <div class="small muted" style="padding:10px">${(() => { const zs = new Set(Object.values(z)); return [['champ', 'чемпион'], ['up', 'повышение'], ['po', 'плей-офф / стыки за выход'], ['po_down', 'стыки'], ['down', 'вылет']].filter(([k]) => zs.has(k)).map(([k, n]) => `<span class="zone ${k}"></span>${n}`).join(' &nbsp; '); })()}${L.teams.some((id) => T(id).reserveOf) ? ' · резервные команды не повышаются в классе' : ''}</div></div>
      <div class="card"><div class="row" style="margin-bottom:8px"><button class="btn sm" id="rp">‹</button><b class="grow center">${cur}-й тур · ${roundDates(L.rounds[cur - 1])}</b><button class="btn sm" id="rn">›</button></div>
        ${L.rounds[cur - 1].map((id) => { const m = s.matches[id]; return m.played ? resultLine(m, null) : `<div class="list-item"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; }).join('')}</div></div>`;
      UI.round = cur;
    }
    main.innerHTML = `<div class="row" style="margin-bottom:10px"><div class="seg"><button data-v="table" class="${view === 'table' ? 'on' : ''}">Чемпионаты</button>
      <button data-v="cup" class="${view === 'cup' ? 'on' : ''}">Кубок России</button>${s.playoff && s.playoff.ties.length ? `<button data-v="po" class="${view === 'po' ? 'on' : ''}">Плей-офф</button>` : ''}
      ${FM.EURO.filter((E) => s.euro && s.euro[E.id]).map((E) => `<button data-v="${E.id}" class="${view === E.id ? 'on' : ''}">${E.short}</button>`).join('')}</div></div>
      ${view === 'table' ? leaguePick(s.order.map((id) => s.leagues[id]), lid) : ''}${body}`;
    main.querySelectorAll('[data-lid]').forEach((b) => b.onclick = () => { UI.tablesLid = b.dataset.lid; UI.tablesView = 'table'; UI.round = null; render(); });
    main.querySelectorAll('[data-v]').forEach((b) => b.onclick = () => { UI.tablesView = b.dataset.v; render(); });
    const rp = main.querySelector('#rp'), rn = main.querySelector('#rn');
    if (rp) rp.onclick = () => { UI.roundPin = { lid, date: s.date, round: Math.max(1, UI.round - 1) }; render(); };
    if (rn) rn.onclick = () => { UI.roundPin = { lid, date: s.date, round: Math.min(L.rounds.length, UI.round + 1) }; render(); };
    const ep = main.querySelector('#ep'), en = main.querySelector('#en');
    if (ep) ep.onclick = () => { UI.euroPin = Object.assign(UI.euroPin || {}, { [view]: { date: s.date, md: Math.max(1, UI.euroMd[view] - 1) } }); render(); };
    if (en) en.onclick = () => { UI.euroPin = Object.assign(UI.euroPin || {}, { [view]: { date: s.date, md: Math.min(8, UI.euroMd[view] + 1) } }); render(); };
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

  function euroView(id) {
    const G = g(), s = G.s, u = G.userTeam();
    const E = euroOf(id), e = s.euro[id];
    const tab = G.euroTable(id);
    const zone = (pos) => (pos <= 4 ? 'up' : pos <= 12 ? 'po' : '');
    const mdCount = e.md.length;
    const pin = UI.euroPin && UI.euroPin[id] && UI.euroPin[id].date === s.date ? UI.euroPin[id].md : 0;
    let cur = pin;
    if (!cur) { cur = 1; e.md.forEach((md, i) => { if (md.some((mid) => s.matches[mid].played)) cur = i + 1; }); }
    UI.euroMd = Object.assign(UI.euroMd || {}, { [id]: cur });
    const line = (mid) => { const m = s.matches[mid]; return m.played ? resultLine(m, null) : `<div class="list-item"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; };
    const ko = e.ko.map((R) => `<div class="card"><h3>${esc(R.name)}</h3>${R.ties.map((t) => `${t.legs.map(line).join('')}${t.winner ? `<div class="small muted" style="margin:-2px 0 8px">Дальше: <b class="good">${esc(T(t.winner).name)}</b></div>` : ''}`).join('')}</div>`).join('');
    const fin = e.final ? `<div class="card"><h3>Финал · ${esc(T(s.matches[e.final].h).name)} — ${esc(T(s.matches[e.final].a).name)}</h3>${line(e.final)}${e.winner ? `<div class="note">🏆 ${esc(T(e.winner).name)}</div>` : ''}</div>` : '';
    return `<div class="grid" style="grid-template-columns:minmax(0,3fr) minmax(280px,2fr)">
      <div class="card tight"><h3>${esc(E.name)} · общий этап</h3><div class="tbl-wrap"><table>
        <tr><th>#</th><th>Клуб</th><th class="hide-m">Лига</th><th class="num">И</th><th class="num">В</th><th class="num">Н</th><th class="num">П</th><th class="num">Мячи</th><th class="num">О</th></tr>
        ${tab.map((r) => `<tr class="${r.id === u.id ? 'me' : ''}"><td class="num"><span class="zone ${zone(r.pos)}"></span>${r.pos}</td><td>${tname(T(r.id))}</td><td class="hide-m small muted">${esc(s.leagues[T(r.id).league].short)}</td><td class="num">${r.p}</td><td class="num">${r.w}</td><td class="num">${r.d}</td><td class="num">${r.l}</td><td class="num">${r.gf}–${r.ga}</td><td class="num"><b>${r.pts}</b></td></tr>`).join('')}
      </table></div><div class="small muted" style="padding:10px 16px"><span class="zone up"></span>сразу в 1/4 финала &nbsp; <span class="zone po"></span>стыки за 1/4 финала</div></div>
      <div style="display:grid;gap:16px;align-content:start">
        <div class="card"><div class="row" style="margin:14px 0 8px"><button class="btn sm" id="ep">‹</button><b class="grow center">${cur}-й тур · ${FM.fmtDate(s.matches[e.md[cur - 1][0]].date)}</b><button class="btn sm" id="en">›</button></div>${e.md[cur - 1].map(line).join('')}</div>
        ${ko}${fin}
      </div></div>`;
  }

  // дни тура без перенесённых матчей: «25–26 июля» или «31 октября»
  function roundDates(ids) {
    const s = g().s, ds = ids.map((id) => s.matches[id].date).sort();
    const mid = ds[Math.floor(ds.length / 2)];
    const near = ds.filter((d) => Math.abs(FM.parseDate(d) - FM.parseDate(mid)) <= 3 * 864e5);
    const a = near[0], b = near[near.length - 1];
    if (a === b) return FM.fmtDate(a);
    const fa = FM.fmtDate(a), fb = FM.fmtDate(b);
    return fa.split(' ')[1] === fb.split(' ')[1] ? `${fa.split(' ')[0]}–${fb}` : `${fa} – ${fb}`;
  }

  function playoffView() {
    const G = g(), s = G.s;
    const card = (tie) => `<div class="card"><h3>${esc(T(tie.up).name)} — ${esc(T(tie.low).name)}</h3>
      <div class="small muted" style="margin-bottom:6px">${tie.stage === 'final' ? 'Финал (нейтральное поле)' : tie.stage === 'semi' ? 'Полуфинал' : 'Стыковые матчи'}</div>
      ${tie.legs.map((id) => { const m = s.matches[id]; return m.played ? resultLine(m, null) : `<div class="list-item"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; }).join('')}
      ${tie.winner ? `<div class="note">${tie.stage === 'semi' ? 'В финале' : tie.stage === 'final' ? 'Повышение' : 'Победитель'}: ${esc(T(tie.winner).name)}</div>` : ''}</div>`;
    const groups = [];
    for (const tie of s.playoff.ties) {
      const key = tie.grp || 'RUS1';
      let gr = groups.find((x) => x.key === key);
      if (!gr) {
        const c = key.replace(/\d+$/, ''), tier = +key.match(/\d+$/)[0];
        const up = G.leagueAt(c, tier), lo = G.leagueAt(c, tier + 1);
        gr = { key, title: up && lo ? `${s.leagues[lo].name} → ${s.leagues[up].name}` : key, ties: [] };
        groups.push(gr);
      }
      gr.ties.push(tie);
    }
    const mine = (gr) => gr.ties.some((t) => t.up === s.user || t.low === s.user);
    groups.sort((a, b) => mine(b) - mine(a));
    return groups.map((gr) => `<h3 style="margin:14px 0 8px">${esc(gr.title)}</h3><div class="grid">${gr.ties.map(card).join('')}</div>`).join('');
  }

  // ================== статистика ==================
  // Подробная статистика игроков своей команды с сортировкой
  function teamStats(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const scope = UI.tsScope || 'all';
    const key = UI.tsKey || 'apps';
    const pick = (p) => {
      const parts = scope === 'league' ? [p.st] : scope === 'cups' ? [p.cst] : [p.st, p.cst];
      const t = { apps: 0, mins: 0, g: 0, a: 0, cs: 0, yc: 0, rc: 0, rsum: 0 };
      for (const x of parts) for (const k in t) t[k] += x[k] || 0;
      t.r = t.apps ? t.rsum / t.apps : 0;
      t.ga = t.g + t.a;
      return t;
    };
    const rows = G.squad(u).map((p) => [p, pick(p)]);
    rows.sort((a, b) => b[1][key] - a[1][key] || b[1].apps - a[1].apps);
    const tot = rows.reduce((o, [, t]) => { o.g += t.g; o.a += t.a; return o; }, { g: 0, a: 0 });
    const cols = [['apps', 'Матчи', 'И'], ['mins', 'Минуты', 'Мин'], ['g', 'Голы', 'Г'], ['a', 'Ассисты', 'П'], ['ga', 'Гол+пас', 'Г+П'], ['r', 'Средняя оценка', 'Оц'], ['cs', 'Сухие матчи', 'Сух'], ['yc', 'Жёлтые', 'ЖК'], ['rc', 'Красные', 'КК']];
    const hideM = new Set(['mins', 'ga', 'yc', 'rc']);
    main.innerHTML = `<div class="row" style="margin-bottom:12px">${statsTabs()}
        <div class="seg">${[['all', 'Все турниры'], ['league', 'Чемпионат'], ['cups', 'Кубки и еврокубки']].map(([k, n]) => `<button data-sc="${k}" class="${k === scope ? 'on' : ''}">${n}</button>`).join('')}</div>
        <span class="small muted">Голов: <b>${tot.g}</b> · передач: <b>${tot.a}</b> · нажмите на заголовок столбца, чтобы отсортировать</span></div>
      <div class="sortbar">${cols.filter(([k]) => ['apps', 'g', 'a', 'r', 'cs'].includes(k)).map(([k, n]) => `<button data-ts="${k}" class="${k === key ? 'on' : ''}">${n}</button>`).join('')}</div>
      <div class="card tight"><div class="tbl-wrap"><table class="ts"><tr><th>#</th><th>Поз</th><th>Игрок</th>${cols.map(([k, n, sh]) => `<th class="num sort ${k === key ? 'on' : ''} ${hideM.has(k) ? 'hide-m' : ''}" data-ts="${k}" title="${n}">${sh}${k === key ? ' ▾' : ''}</th>`).join('')}</tr>
        ${rows.map(([p, t], i) => `<tr><td class="num muted">${i + 1}</td><td>${pos(p.pos)}</td><td>${pname(p)}${status(p)}</td>${cols.map(([k]) => `<td class="num ${k === key ? 'hl' : ''} ${hideM.has(k) ? 'hide-m' : ''}">${k === 'r' ? (t.apps ? rt(t.r) : '—') : k === 'cs' && !['G', 'D'].includes(FM.GROUP[p.pos]) ? '<span class="muted">—</span>' : t[k]}</td>`).join('')}</tr>`).join('')}
      </table></div><div class="small muted" style="padding:10px">Сухой матч засчитывается вратарю и защитникам, сыгравшим от 60 минут без пропущенных мячей.</div></div>`;
    main.querySelectorAll('[data-ts]').forEach((b) => b.onclick = () => { UI.tsKey = b.dataset.ts; render(); });
    main.querySelectorAll('[data-sc]').forEach((b) => b.onclick = () => { UI.tsScope = b.dataset.sc; render(); });
    main.querySelectorAll('[data-sv]').forEach((b) => b.onclick = () => { UI.statsView = b.dataset.sv; render(); });
  }
  const statsTabs = () => `<div class="seg">${[['team', 'Моя команда'], ['league', 'Лидеры лиг']].map(([k, n]) => `<button data-sv="${k}" class="${(UI.statsView || 'team') === k ? 'on' : ''}">${n}</button>`).join('')}</div>`;

  function viewStats(main) {
    if ((UI.statsView || 'team') === 'team') return teamStats(main);
    const G = g(), s = G.s;
    const lid = UI.tablesLid || G.userTeam().league;
    const key = UI.statsKey;
    const rows = G.leaders(lid, key, 30);
    main.innerHTML = `<div class="row" style="margin-bottom:12px">${statsTabs()}</div>${leaguePick(s.order.map((id) => s.leagues[id]), lid)}<div class="row" style="margin-bottom:12px">
      <div class="seg">${[['g', 'Голы'], ['a', 'Передачи'], ['rating', 'Оценки'], ['cs', 'Сухие'], ['yc', 'Жёлтые']].map(([k, n]) => `<button data-k="${k}" class="${k === key ? 'on' : ''}">${n}</button>`).join('')}</div></div>
      <div class="card tight"><table><tr><th>#</th><th>Игрок</th><th>Клуб</th><th class="num">И</th><th class="num">${{ g: 'Голы', a: 'Пас', rating: 'Оценка', yc: 'ЖК', cs: 'Сухие' }[key]}</th></tr>
      ${rows.map(([p, v], i) => `<tr class="${p.club === s.user ? 'me' : ''}"><td class="num">${i + 1}</td><td>${pos(p.pos)} ${pname(p)}</td><td>${tname(T(p.club))}</td><td class="num">${p.st.apps}</td><td class="num"><b>${key === 'rating' ? v.toFixed(2) : v}</b></td></tr>`).join('') || '<tr><td colspan="5" class="muted">Пока нет данных</td></tr>'}</table></div>`;
    main.querySelectorAll('[data-lid]').forEach((b) => b.onclick = () => { UI.tablesLid = b.dataset.lid; render(); });
    main.querySelectorAll('[data-k]').forEach((b) => b.onclick = () => { UI.statsKey = b.dataset.k; render(); });
    main.querySelectorAll('[data-sv]').forEach((b) => b.onclick = () => { UI.statsView = b.dataset.sv; render(); });
  }

  // Выбор лиги: сначала страна (флаг), затем лига этой страны — при 30+ лигах длинный ряд кнопок неудобен.
  // list — массив { id, name, short, country }, attr — атрибут кнопки с id лиги.
  function leaguePick(list, cur, attr = 'data-lid', on = true) {
    const cOf = (l) => l.country || 'RUS';
    const curL = list.find((l) => l.id === cur) || list[0];
    const cc = cOf(curL);
    const countries = [...new Set(list.map(cOf))];
    const inC = list.filter((l) => cOf(l) === cc);
    return `<div class="lpick"><div class="lp-c">${countries.map((c) => {
      const first = c === cc ? curL : list.find((l) => cOf(l) === c);
      return `<button ${attr}="${first.id}" class="${on && c === cc ? 'on' : ''}" title="${esc(FM.NAT[c] || c)}">${flag(c)}<span>${esc(FM.NAT[c] || c)}</span></button>`;
    }).join('')}</div>${inC.length > 1 ? `<div class="seg">${inC.map((l) => `<button ${attr}="${l.id}" class="${on && l.id === curL.id ? 'on' : ''}">${esc(l.name)}</button>`).join('')}</div>` : ''}</div>`;
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
      if (f.expiring) list = list.filter((p) => p.club && p.contract <= s.season && !p.pre);
      const k = UI.sortKey, d = UI.sortDir;
      list.sort((a, b) => (k === 'name' ? a.name.localeCompare(b.name) * -d : (a[k] - b[k]) * d));
      const page = UI.tfPage, per = 60;
      const shown = list.slice(page * per, page * per + per);
      const winter = s.date >= `${s.season + 1}-01-01`;
      const preNote = `<div class="note small" style="margin:12px 0 0">${winter
        ? 'Сейчас можно подписать <b>предварительный контракт</b>: игроки, у которых летом истекает контракт, переходят к вам бесплатно после окончания сезона. Отметьте «контракт истекает летом» и откройте игрока.'
        : 'С 1 января игрокам с истекающим контрактом можно предложить <b>предварительный контракт</b> — они бесплатно перейдут к вам летом.'}</div>`;
      const th = (key, n, cls = 'num') => `<th class="sort ${cls}" data-sort="${key}">${n}${UI.sortKey === key ? (UI.sortDir < 0 ? ' ▾' : ' ▴') : ''}</th>`;
      body = `<div class="card" style="margin-bottom:12px"><div class="row">
        <input id="f-name" placeholder="Имя" value="${esc(f.name || '')}" style="width:150px">
        <select id="f-pos"><option value="">Все позиции</option>${FM.POS.map((p) => `<option value="${p}" ${f.pos === p ? 'selected' : ''}>${FM.POS_NAME[p]}</option>`).join('')}</select>
        <select id="f-league"><option value="">Все лиги</option>${[...new Set(s.order.map((id) => G.countryOf(id)))].map((c) => `<optgroup label="${esc(FM.NAT[c] || c)}">${s.order.filter((id) => G.countryOf(id) === c).map((id) => `<option value="${id}" ${f.league === id ? 'selected' : ''}>${esc(s.leagues[id].name)}</option>`).join('')}</optgroup>`).join('')}<option value="free" ${f.league === 'free' ? 'selected' : ''}>Свободные агенты</option></select>
        <input id="f-price" type="number" placeholder="Цена до, млн €" value="${f.maxPrice || ''}" style="width:130px" step="0.1">
        <input id="f-ovr" type="number" placeholder="Рейтинг от" value="${f.minOvr || ''}" style="width:100px">
        <input id="f-age" type="number" placeholder="Возраст до" value="${f.maxAge || ''}" style="width:100px">
        <label class="small"><input type="checkbox" id="f-listed" ${f.listed ? 'checked' : ''}> на трансфере</label>
        <label class="small"><input type="checkbox" id="f-real" ${f.realOnly ? 'checked' : ''}> только реальные</label>
        <label class="small"><input type="checkbox" id="f-exp" ${f.expiring ? 'checked' : ''}> контракт истекает летом</label>
      </div>${preNote}</div>
      <div class="card tight"><div class="tbl-wrap"><table><tr><th>Поз</th>${th('name', 'Игрок', '')}<th>Клуб</th>${th('age', 'Возр')}${th('ovr', 'Рейт')}${th('pot', 'Потенц.')}${th('value', 'Цена')}</tr>
        ${shown.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${flag(p.nat)}${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}${p.pre ? ' <span class="tag">уже подписал предв. контракт</span>' : p.club && p.contract <= s.season ? ` <span class="tag free">${winter ? 'бесплатно летом' : 'контракт до лета'}</span>` : ''}</td><td>${p.club ? tname(T(p.club)) : '<span class="muted">свободный агент</span>'}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num small muted">${G.potLabel(p)}</td><td class="num">${FM.money(p.value)}</td></tr>`).join('')}
      </table></div>
      <div class="row" style="padding:10px"><span class="muted small grow">Найдено: ${list.length}</span><button class="btn sm" id="pp" ${page ? '' : 'disabled'}>‹</button><span class="small">${page + 1} / ${Math.max(1, Math.ceil(list.length / per))}</span><button class="btn sm" id="pn" ${(page + 1) * per < list.length ? '' : 'disabled'}>›</button></div></div>`;
    } else if (view === 'mine') {
      const sq = G.squad(u).sort((a, b) => b.value - a.value);
      body = `<div class="card tight"><table><tr><th>Поз</th><th>Игрок</th><th class="num">Возр</th><th class="num">Рейт</th><th class="num">Цена</th><th class="num">Зарплата/нед</th><th class="num">Контракт до</th><th></th></tr>
        ${sq.map((p) => `<tr><td>${pos(p.pos)}</td><td>${pname(p)}${status(p)}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num">${FM.money(p.value)}</td><td class="num">${FM.money(p.wage)}</td><td class="num">лето ${p.contract + 1}</td>
          <td>${p.loan ? '<span class="small muted">аренда</span>' : `<button class="btn sm ${p.listed ? 'on' : ''}" data-list="${p.id}">${p.listed ? 'На трансфере' : 'Выставить'}</button>`}</td></tr>`).join('')}</table></div>
        ${(() => { const out = (s.loans || []).map((id) => G.players[id]).filter((p) => p && p.loan && p.loan.from === u.id); return out.length ? `<div class="card tight" style="margin-top:12px"><h3>В аренде в других клубах</h3><table>${out.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${flag(p.nat)}${esc(p.name)}</td><td>${tname(T(p.club))}</td><td class="num">${ovr(p.ovr)}</td><td class="num small muted">${p.st.apps} игр · ${p.st.g} гол.</td></tr>`).join('')}</table></div>` : ''; })()}
        ${(() => { const inc = Object.values(G.players).filter((p) => p.pre && p.pre.team === u.id); return inc.length ? `<div class="card tight" style="margin-top:12px"><h3>Присоединятся летом</h3><table>${inc.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${flag(p.nat)}${esc(p.name)}</td><td>${p.club ? tname(T(p.club)) : ''}</td><td class="num">${ovr(p.ovr)}</td><td class="num">${FM.money(p.pre.wage)}/нед</td><td class="num">${p.pre.years} г.</td></tr>`).join('')}</table></div>` : ''; })()}`;
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
    bindF('#f-ovr', 'minOvr', true); bindF('#f-age', 'maxAge', true); bindF('#f-listed', 'listed'); bindF('#f-real', 'realOnly'); bindF('#f-exp', 'expiring');
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
    const it = mine ? null : G.playerInterest(p, u);
    const el = modal(`<div class="row">${club ? badge(club, 'lg') : ''}<div class="grow"><h2 style="margin:0">${flag(p.nat, 'lg')}${esc(p.name)}${p.gen ? ' <span class="gen" title="Сгенерированный игрок">*</span>' : ''}</h2>
      <div class="muted">${FM.POS_NAME[p.pos]}${(p.alt || []).length ? ` <span class="alt-pos">также: ${p.alt.map((a) => FM.POS_RU[a]).join(', ')}</span>` : ''} · ${p.age} лет</div>
      <div>${club ? tname(club) : '<span class="muted">Свободный агент</span>'}</div></div><div class="center">${ovr(p.ovr)}<div class="small muted">рейтинг</div></div></div>
      <div class="kv">
        <div><span>Стоимость</span><b>${FM.money(p.value)}</b></div>
        <div><span>Потенциал</span><b>${G.potLabel(p)}</b>${p.pot - p.ovr > 1 ? `<span>может вырасти до ${p.pot}</span>` : ''}</div>
        <div><span>Зарплата</span><b>${FM.money(p.wage)}/нед</b></div>
        <div><span>Контракт до</span><b>лето ${p.contract + 1}</b></div>
        <div><span>Физ. готовность</span><b>${Math.round(p.fit)}%</b></div>
        <div><span>Мораль</span><b>${p.morale >= 70 ? 'отличная' : p.morale >= 50 ? 'нормальная' : 'плохая'}</b></div>
      </div>
      ${mine && !p.loan ? retrainBlock(p) : ''}
      ${p.inj ? `<div class="note bad">Травма: ещё ${G.injText(p.inj)}</div>` : ''}${p.sus ? `<div class="note bad">Дисквалификация: ${p.sus} матч(а)</div>` : ''}
      <table class="small"><tr><th></th><th class="num">Игры</th><th class="num">Голы</th><th class="num">Пас</th><th class="num">ЖК</th><th class="num">КК</th><th class="num">Оценка</th></tr>
        <tr><td>Чемпионат</td><td class="num">${p.st.apps}</td><td class="num">${p.st.g}</td><td class="num">${p.st.a}</td><td class="num">${p.st.yc}</td><td class="num">${p.st.rc}</td><td class="num">${avg}</td></tr>
        <tr><td>Кубок и стыки</td><td class="num">${p.cst.apps}</td><td class="num">${p.cst.g}</td><td class="num">${p.cst.a}</td><td class="num">${p.cst.yc}</td><td class="num">${p.cst.rc}</td><td class="num">${p.cst.apps ? (p.cst.rsum / p.cst.apps).toFixed(2) : '—'}</td></tr>
        <tr><td>Прошлые сезоны</td><td class="num">${p.car.apps}</td><td class="num">${p.car.g}</td><td class="num">${p.car.a}</td><td></td><td></td><td></td></tr></table>
      <div id="act" style="margin-top:14px">${mine && p.loan ? `
        <div class="note">В аренде из «${esc(T(p.loan.from).name)}» до конца сезона. Вы платите ${p.loan.wagePct}% зарплаты — ${FM.money(p.wage * p.loan.wagePct / 100)}/нед.${p.loan.buy ? ` Опция выкупа: ${FM.money(p.loan.buy)}.` : ''}</div>
        ${p.loan.buy ? `<div class="row"><button class="btn primary" data-loanbuy>Выкупить за ${FM.money(p.loan.buy)}</button></div>` : ''}` : mine ? `
        <div class="row"><button class="btn" data-renew>Продлить контракт</button>
        <button class="btn" data-loanout>Отдать в аренду</button>
        <button class="btn ${p.listed ? 'on' : ''}" data-tl>${p.listed ? 'Снять с трансфера' : 'Выставить на трансфер'}</button>
        <button class="btn danger" data-release>Расторгнуть контракт</button></div>
        ${p.role || p.release || p.sellOn ? `<div class="small muted" style="margin-top:8px">${[p.role ? `Обещанная роль: ${ROLE_NAME[p.role]}` : '', p.release ? `отступные ${FM.money(p.release)}` : '', p.sellOn && T(p.sellOn.club) ? `${p.sellOn.pct}% с продажи — «${esc(T(p.sellOn.club).name)}»` : ''].filter(Boolean).join(' · ')}</div>` : ''}
        <div id="res"></div>` : p.loan ? `<div class="note">${esc(p.name)} в аренде в «${esc(club.name)}» из «${esc(T(p.loan.from).name)}» до конца сезона.${p.loan.from === u.id ? ' Летом он вернётся к вам.' : ''}</div>` : p.pre ? `<div class="note">Подписан предварительный контракт: летом ${esc(p.name)} переходит в «${esc(T(p.pre.team).name)}».</div>` : `
        <div class="interest"><div class="row"><span class="muted">Интерес к вашему клубу</span><b style="color:${interestColor(it.score)}">${it.label}</b></div>
          <div class="bar"><i style="width:${it.score}%;background:${interestColor(it.score)}"></i></div><div class="small muted">${it.why.map(esc).join(' · ')}</div></div>
        <div class="row" style="margin-top:12px">${club ? '<button class="btn" data-loanin>Взять в аренду</button>' : ''}<button class="btn primary" data-nego>${s.nego && s.nego[pid] && s.nego[pid].log.length ? 'Продолжить переговоры' : G.canPrecontract(p) ? 'Предварительный контракт' : club ? 'Начать переговоры' : 'Предложить контракт'}</button>
          <span class="small muted">${club ? `Окно: ${G.windowText()}` : 'Свободного агента можно подписать в любое время'}</span></div>`}</div>`);
    const res = el.querySelector('#res');
    const rt = el.querySelector('#rt-go');
    if (rt) rt.onclick = () => { toast(esc(G.retrain(pid, el.querySelector('#rt-pos').value))); save(); playerModal(pid); };
    const rtSel = el.querySelector('#rt-pos');
    if (rtSel) rtSel.onchange = () => { el.querySelector('#rt-weeks').textContent = `≈ ${FM.retrainWeeks(p, rtSel.value)} нед.`; };
    const rc = el.querySelector('#rt-cancel');
    if (rc) rc.onclick = () => { G.cancelRetrain(pid); save(); playerModal(pid); };
    const lb = el.querySelector('[data-loanbuy]');
    if (lb) lb.onclick = () => { toast(esc(G.loanBuy(pid))); save(); closeModal(); render(); };
    if (mine && !p.loan) {
      el.querySelector('[data-loanout]').onclick = () => {
        if (!G.inWindow()) { res.innerHTML = '<div class="note warn">Отдать в аренду можно только в трансферное окно.</div>'; return; }
        const offers = G.loanOffers(pid);
        res.innerHTML = offers.length ? `<div class="note"><b>Готовы взять в аренду до конца сезона:</b>${offers.map((o, i) => `<div class="list-item">${badge(T(o.club), 'sm')}<div class="grow"><b>${esc(T(o.club).name)}</b><div class="small muted">${esc(s.leagues[T(o.club).league].name)} · платят ${o.wagePct}% зарплаты${o.fee ? ` · за аренду ${FM.money(o.fee)}` : ''}</div></div><button class="btn sm primary" data-lo="${i}">Отдать</button></div>`).join('')}</div>`
          : '<div class="note warn">Сейчас нет клубов, где этот игрок был бы игроком основы.</div>';
        res.querySelectorAll('[data-lo]').forEach((b) => b.onclick = () => { toast(esc(G.loanOut(pid, offers[+b.dataset.lo]))); save(); closeModal(); render(); });
      };
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
      const nb = el.querySelector('[data-nego]');
      if (nb) nb.onclick = () => negoModal(pid);
      const li = el.querySelector('[data-loanin]');
      if (li) li.onclick = () => loanModal(pid);
    }
  }

  // Аренда чужого игрока до конца сезона: плата, доля зарплаты, опция выкупа
  function loanModal(pid) {
    const G = g(), u = G.userTeam(), p = P(pid), club = T(p.club);
    const a = G.loanAsk(p);
    const el = modal(`<div class="row">${badge(club, 'lg')}<div class="grow"><h2 style="margin:0">${flag(p.nat, 'lg')}${esc(p.name)}</h2>
        <div class="muted">${FM.POS_NAME[p.pos]} · ${p.age} лет · ${esc(club.name)} · зарплата ${FM.money(p.wage)}/нед</div></div>${ovr(p.ovr)}</div>
      <h3>Аренда до конца сезона</h3>
      ${a.refuse ? `<div class="note bad">${esc(a.refuse)}</div>` : `<div class="row nego-form">
        ${moneyField('l-fee', 'Плата за аренду', a.fee, moneyUnit(a.fee))}
        <label>Вы платите зарплаты<select id="l-pct">${[50, 75, 100].map((v) => `<option value="${v}" ${v === a.minPct ? 'selected' : ''}>${v}% — ${FM.money(p.wage * v / 100)}/нед</option>`).join('')}</select></label>
        ${moneyField('l-buy', 'Опция выкупа (0 — нет)', 0, 'млн')}
        <button class="btn primary" id="l-go">Предложить</button></div>
        <div class="small muted" style="margin-top:8px">Клуб рассчитывает примерно на ${FM.money(a.fee)} за аренду и не меньше ${a.minPct}% зарплаты. Больше доля зарплаты или опция выкупа (от ${FM.money(a.buyMin)}) — меньше плата. Окно: ${G.windowText()}.</div>
        <div id="l-res"></div>`}`, 'wide');
    const go = el.querySelector('#l-go');
    if (go) go.onclick = () => {
      const r = G.loanIn(pid, { fee: readMoney(el.querySelector('#l-fee')), wagePct: +el.querySelector('#l-pct').value, buy: readMoney(el.querySelector('#l-buy')) });
      if (!r.ok) { el.querySelector('#l-res').innerHTML = `<div class="note bad">${esc(r.text)}</div>`; return; }
      save(); closeModal(); render(); toast(esc(r.text));
    };
  }

  const ROLE_NAME = { key: 'ключевой игрок', starter: 'игрок основы', rotation: 'ротация', backup: 'запасной' };
  const interestColor = (v) => (v >= 70 ? 'var(--good)' : v >= 50 ? '#9be36b' : v >= 30 ? 'var(--warn)' : 'var(--bad)');

  // Переучивание (как в FC): выбор новой позиции, прогресс по неделям, отмена
  function retrainBlock(p) {
    if (p.train) {
      const pct = Math.round(p.train.done / p.train.need * 100);
      return `<div class="retrain"><div class="row"><b class="grow">Переучивание: ${FM.POS_NAME[p.train.to]}</b><span class="small muted">${p.train.done} из ${p.train.need} нед. · сейчас ${Math.round(FM.pfit(p, p.train.to) * 100)}%</span></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="row" style="margin-top:8px"><span class="small muted grow">Когда тренировки закончатся, это станет основной позицией, прежняя останется дополнительной.</span><button class="btn sm" id="rt-cancel">Отменить</button></div></div>`;
    }
    const opts = FM.POS.filter((x) => x !== p.pos && !(p.alt || []).includes(x) && (x === 'GK') === (p.pos === 'GK'))
      .sort((a, b) => FM.pfit(p, b) - FM.pfit(p, a));
    if (!opts.length) return '';
    return `<div class="retrain"><div class="row"><b class="grow">Переучить на другую позицию</b></div>
      <div class="row" style="margin-top:8px"><select id="rt-pos">${opts.map((x) => `<option value="${x}">${FM.POS_NAME[x]} — сейчас ${Math.round(FM.pfit(p, x) * 100)}%</option>`).join('')}</select>
        <span class="small muted" id="rt-weeks">≈ ${FM.retrainWeeks(p, opts[0])} нед.</span><button class="btn sm primary" id="rt-go">Начать</button></div></div>`;
  }

  // ================== переговоры ==================
  function negoModal(pid) {
    const G = g(), s = G.s, u = G.userTeam();
    const p = P(pid);
    const club = p.club ? T(p.club) : null;
    const n = G.nego(pid);
    const it = G.playerInterest(p, u);
    const blocked = G.negoBlocked(n);
    const stage = { club: 0, player: 1, done: 2 }[n.stage];
    const dots = (k, max) => `<span class="pat">${'●'.repeat(Math.max(0, k))}${'○'.repeat(Math.max(0, max - k))}</span>`;
    let form = '';
    if (blocked) form = `<div class="note bad">${esc(blocked)}</div>`;
    else if (n.stage === 'club') {
      // ориентир с погрешностью: точную цену клуб называет только в ответ на предложения
      const hint = n.release ? n.ask : FM.roundValue(n.ask * (0.92 + ((p.id * 37) % 17) / 100));
      form = `<div class="tags">${(n.notes || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="row nego-form">
          ${moneyField('n-fee', 'Сумма', n.lastFee || FM.roundValue(hint * 0.85), moneyUnit(hint))}
          <label>Оплата<select id="n-inst"><option value="0">Сразу</option><option value="1">Рассрочка 40/30/30</option></select></label>
          <label>% с перепродажи<select id="n-sell"><option value="0">нет</option><option value="10">10%</option><option value="20">20%</option></select></label>
          <button class="btn primary" id="n-bid">Отправить</button></div>
        <div class="small muted" style="margin-top:8px">Ориентир: около ${FM.money(hint)} · терпение клуба ${dots(n.patience, p.listed ? 6 : 5)} · бюджет ${FM.money(u.money)}</div>`;
    } else if (n.stage === 'player') {
      const role = it.starter ? 'starter' : 'rotation';
      const d = G.playerDemand(p, u, role);
      form = `<div class="row nego-form">
          <label>Зарплата/нед, тыс. €<input id="n-wage" type="number" step="0.5" min="0" value="${n.lastWage || Math.round(d.wage * 0.9 * 2) / 2}"></label>
          <label>Срок<select id="n-years">${[1, 2, 3, 4, 5].map((y) => `<option value="${y}" ${y === d.prefYears[0] ? 'selected' : ''}>${y} г.</option>`).join('')}</select></label>
          ${moneyField('n-bonus', 'Подъёмные', d.bonus)}
          <label>Роль<select id="n-role">${Object.entries(ROLE_NAME).map(([k, v]) => `<option value="${k}" ${k === role ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
          ${moneyField('n-release', 'Отступные (0 — нет)', 0, 'млн')}
          <button class="btn primary" id="n-offer">Предложить</button></div>
        <div class="small muted" style="margin-top:8px">Агент ориентируется примерно на ${FM.money(d.wage)}/нед для роли «${ROLE_NAME[role]}», удобный срок — ${d.prefYears.join(' или ')} г. Роль «ключевой игрок» снижает запрос, «запасной» — повышает. Отступные немного снижают запрос. Терпение игрока ${dots(n.pPatience, 4)}</div>`;
    } else {
      const c = G.dealCost(n);
      const t = n.terms;
      form = `<div class="kv">
          ${n.deal ? `<div><span>Трансфер</span><b>${FM.money(c.fee)}</b><span>${n.deal.inst ? `сейчас ${FM.money(c.first)}, остальное — два платежа летом` : 'выплата сразу'}${n.deal.sellOn ? ` · ${n.deal.sellOn}% с перепродажи` : ''}</span></div>` : ''}
          <div><span>Агенту</span><b>${FM.money(c.agent)}</b></div><div><span>Подъёмные</span><b>${FM.money(c.bonus)}</b></div>
          <div><span>Зарплата</span><b>${FM.money(t.wage)}/нед</b><span>${t.years} г. · ${ROLE_NAME[t.role]}${t.release ? ` · отступные ${FM.money(t.release)}` : ''}</span></div>
          <div><span>Платим сейчас</span><b class="${c.now > u.money ? 'bad' : ''}">${FM.money(c.now)}</b><span>на счёте ${FM.money(u.money)}</span></div></div>
        <div class="row"><button class="btn primary" id="n-sign">${n.precontract ? 'Подписать предварительный контракт' : 'Подписать контракт'}</button></div>`;
    }
    const el = modal(`<div class="row">${club ? badge(club, 'lg') : ''}<div class="grow"><h2 style="margin:0">${flag(p.nat, 'lg')}${esc(p.name)}</h2>
        <div class="muted">${FM.POS_NAME[p.pos]} · ${p.age} лет · ${club ? esc(club.name) : 'свободный агент'} · стоимость ${FM.money(p.value)}</div></div>${ovr(p.ovr)}</div>
      <div class="interest"><div class="row"><span class="muted">Интерес игрока</span><b style="color:${interestColor(it.score)}">${it.label}</b></div>
        <div class="bar"><i style="width:${it.score}%;background:${interestColor(it.score)}"></i></div><div class="small muted">${it.why.map(esc).join(' · ')}</div></div>
      <div class="steps">${[club && !n.precontract ? 'Клуб' : null, 'Игрок', 'Подписание'].map((l, i) => (l ? `<span class="${i < stage ? 'done' : i === stage ? 'on' : ''}">${i < stage ? '✓ ' : ''}${l}</span>` : '')).join('')}</div>
      ${n.precontract ? '<div class="note">Контракт игрока истекает летом — можно подписать предварительный контракт без выплаты клубу. Игрок перейдёт после окончания сезона.</div>' : ''}
      <div class="chat" id="chat">${n.log.map((m) => `<div class="msg ${m.who}"><span>${esc(m.text)}</span></div>`).join('') || `<div class="muted small center">${n.stage === 'club' ? `Сначала нужно договориться с «${esc(club.name)}» о сумме трансфера.` : 'Предложите игроку условия контракта.'}</div>`}</div>
      ${form}`, 'wide nego');
    const chat = el.querySelector('#chat');
    chat.scrollTop = chat.scrollHeight;
    const after = (r) => { save(); negoModal(pid); if (r && r.status === 'broken') toast(esc(r.text)); };
    const bid = el.querySelector('#n-bid');
    if (bid) bid.onclick = () => {
      const fee = readMoney(el.querySelector('#n-fee'));
      const r = G.bidClub(pid, fee, el.querySelector('#n-inst').value === '1', +el.querySelector('#n-sell').value);
      if (r.status === 'blocked') return toast(esc(r.text));
      n.lastFee = r.fee || fee;
      after(r);
    };
    const off = el.querySelector('#n-offer');
    if (off) off.onclick = () => {
      const wage = +el.querySelector('#n-wage').value || 0;
      const r = G.offerPlayer(pid, {
        wage, years: +el.querySelector('#n-years').value, bonus: readMoney(el.querySelector('#n-bonus')),
        role: el.querySelector('#n-role').value, release: readMoney(el.querySelector('#n-release')),
      });
      if (r.status === 'blocked') return toast(esc(r.text));
      n.lastWage = r.wage || wage;
      after(r);
    };
    const sign = el.querySelector('#n-sign');
    if (sign) sign.onclick = () => {
      const r = G.completeDeal(pid);
      if (!r.ok) return toast(esc(r.text));
      save();
      closeModal();
      render();
      toast(esc(r.text));
    };
  }

  // ================== карточка клуба ==================
  function teamModal(tid) {
    const G = g(), s = G.s;
    const t = T(tid);
    const sq = G.squad(t).sort((a, b) => FM.POS.indexOf(a.pos) - FM.POS.indexOf(b.pos) || b.ovr - a.ovr);
    const row = G.table(t.league).find((r) => r.id === tid);
    modal(`<div class="row">${badge(t, 'lg')}<div class="grow"><h2 style="margin:0">${esc(t.name)}</h2><div class="muted">${esc(t.city)} · ${esc(t.stadium)} (${t.cap.toLocaleString('ru-RU')})</div>
      <div class="small">${esc(s.leagues[t.league].name)}: ${row.pos}-е место, ${row.pts} очк. ${form(row.form)}</div></div></div>
      ${(() => { if (tid === s.user || t.reserveOf) return ''; const m = G.coachMarket().find((x) => x.id === tid); const [lt, lc] = LEVEL[m ? m.level : 0];
        return `<div class="note job-note"><div class="row"><span class="grow">Интерес к вам как к тренеру: <span class="lvl ${lc}">${m && m.refused ? 'отказал в этом сезоне' : lt}</span>${m && m.vacancy ? ' · <span class="warn">ищут тренера</span>' : ''}</span>${m && m.level >= 1 && !m.refused ? `<button class="btn sm ${m.level >= 2 ? 'primary' : ''}" data-apply="${tid}">${m.level >= 2 ? 'Возглавить команду' : 'Подать заявку'}</button>` : ''}</div></div>`; })()}
      <div class="kv"><div><span>Стоимость состава</span><b>${FM.money(G.squadValue(t))}</b></div><div><span>Репутация</span><b>${t.rep}</b></div><div><span>Схема</span><b>${t.formation}</b></div><div><span>Игроков</span><b>${t.players.length}</b></div></div>
      <div class="tbl-wrap"><table><tr><th>Поз</th><th>Игрок</th><th class="num">Возр</th><th class="num">Рейт</th><th class="num">И</th><th class="num">Г</th><th class="num">Цена</th></tr>
      ${sq.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num">${p.st.apps}</td><td class="num">${p.st.g}</td><td class="num">${FM.money(p.value)}</td></tr>`).join('')}</table></div>`, 'wide');
    const el = document.getElementById('modal');
    el.querySelectorAll('[data-apply]').forEach((b) => b.onclick = () => {
      if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = 'Точно уйти из клуба? Нажмите ещё раз'; b.classList.add('danger'); return; }
      const r = G.applyJob(tid);
      save();
      if (r.ok) { closeModal(); UI.tab = 'home'; UI.tablesLid = G.userTeam().league; render(); toast(esc(r.text), 4000); } else { toast(esc(r.text), 4500); teamModal(tid); }
    });
  }

  // ================== отчёт о матче ==================
  function matchReport(mid) {
    const G = g(), s = G.s;
    const m = s.matches[mid];
    if (!m || !m.played) return;
    const h = T(m.h), a = T(m.a);
    const goals = (side) => scorerLines((m.goals || []).filter((x) => x.side === side), (id) => (G.players[id] ? esc(G.players[id].name) : '?')).join('<br>') + redLines(m.reds, side);
    const st = m.stats || {};
    const srow = (n, k) => st[k] ? statRow(n, st[k][0], st[k][1]) : '';
    const ratAll = Object.entries(m.ratings || {}).map(([pid, r]) => [G.players[pid], r]).filter(([p]) => p);
    modal(`<div class="muted center small">${esc(compName(m.comp))} · ${FM.fmtDateWd(m.date)}${m.att ? ` · зрителей: ${m.att.toLocaleString('ru-RU')}` : ''}</div>
      <div class="board" style="margin-top:8px"><div class="tm">${badge(h, 'lg')}<b>${esc(h.name)}</b><div class="scorers">${goals('h')}</div></div>
      <div><div class="sc">${m.hg}:${m.ag}</div>${m.pens ? `<div class="center small muted">пен. ${m.pens[0]}:${m.pens[1]}</div>` : ''}</div>
      <div class="tm">${badge(a, 'lg')}<b>${esc(a.name)}</b><div class="scorers">${goals('a')}</div></div></div>
      <div style="margin-top:12px">${srow('Владение, %', 'poss')}${srow('Удары', 'shots')}${srow('В створ', 'sot')}${srow('xG', 'xg')}${srow('Угловые', 'corners')}${srow('Жёлтые', 'yc')}${srow('Красные', 'rc')}</div>
      ${m.mvp && G.players[m.mvp] ? `<div class="note">Лучший игрок матча: <b>${pname(G.players[m.mvp])}</b> ${rt(m.ratings[m.mvp])}</div>` : ''}
      ${ratAll.length ? `<div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">${[h, a].map((t) => `<div><h3>${esc(t.name)}</h3>${ratAll.filter(([p]) => p.club === t.id).sort((x, y) => y[1] - x[1]).map(([p, r]) => `<div class="row small">${pos(p.pos)} <span class="grow">${pname(p)}${(m.reds || []).some((x) => x.pid === p.id) ? ' <i class="rc-card" title="Удалён"></i>' : ''}</span>${rt(r)}</div>`).join('')}</div>`).join('')}</div>` : ''}`);
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
    const el = modal(`<div class="muted center small">${esc(compName(m.comp))}${roundText(m) ? `, ${esc(roundText(m))}` : ''} · ${FM.fmtDateWd(m.date)}</div>
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
    // остальные матчи этого дня доигрываются сразу — таблица не «отстаёт» от вашего матча
    g().simulateToday();
    save();
    render();
    matchReport(m.id);
  }

  // ================== живой матч ==================
  const ICONS = { penkick: '🎯', goal: '⚽', yellow: '🟨', red: '🟥', sub: '⇄', injury: '✚', save: '🧤', miss: '·', pen: '❗', half: '⏱', end: '⏱', start: '⏱', pens: '🎯', info: '' };

  function liveMatch(m) {
    const G = g();
    const sim = G.createMatch(m, true);
    const root = document.createElement('div');
    root.className = 'match';
    root.style.setProperty('--hcb', glow(m.h ? T(m.h) : sim.home.team));
    root.style.setProperty('--acb', glow(m.a ? T(m.a) : sim.away.team));
    document.body.appendChild(root);
    let speed = 1, timer = null, tab = 'feed', subSel = null;
    // серия пенальти показывается по одному удару: so — показанные удары, soQueue — ещё не показанные события
    let so = null, soQueue = [], soTimer = null;
    const delays = { 1: 650, 2: 280, 4: 90 };
    const h = sim.home.team, a = sim.away.team;
    root.innerHTML = `<div class="inner">
      <div class="board"><div class="tm">${badge(h, 'lg')}<b>${esc(h.name)}</b><div class="scorers" id="sh"></div></div>
        <div><div class="sc" id="sc">0:0</div><div class="min" id="mn">0'</div>${m.firstLeg ? '<div class="agg" id="agg"></div>' : ''}<div id="so" class="so hidden"></div></div>
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
      if (m.firstLeg) {
        // ответный матч: счёт первой игры и сумма двух матчей
        const f = G.s.matches[m.firstLeg];
        const fh = f.h === m.h ? f.hg : f.ag, fa = f.h === m.h ? f.ag : f.hg;
        $('#agg').innerHTML = `1-й матч: ${esc(T(f.h).name)} <b>${f.hg}:${f.ag}</b> ${esc(T(f.a).name)} · по сумме <b>${sim.home.goals + fh}:${sim.away.goals + fa}</b>`;
      }
      const soLive = so && soQueue.length;
      $('#mn').textContent = so ? `пен. ${so.h}:${so.a}${soLive ? '' : ''}` : sim.done ? 'Конец' : `${sim.minuteLabel()}'`;
      $('#mn').classList.toggle('live', !sim.done || !!soLive);
      const soEl = $('#so');
      if (so) {
        // кружки ударов: зелёный — забил, красный — нет, пустые — оставшиеся из основных пяти
        const row = (sd) => { const k = so.kicks.filter((x) => x.side === sd); const pad = Math.max(0, 5 - k.length); return k.map((x) => `<i class="${x.ok ? 'ok' : 'no'}"></i>`).join('') + '<i></i>'.repeat(pad); };
        soEl.innerHTML = `<div>${row('h')}</div><div>${row('a')}</div>`;
        soEl.classList.remove('hidden');
      }
      const total = sim.phase === 'et' ? 120 : 90;
      const cur = sim.phase === 'first' ? Math.min(sim.minute, 45) : Math.min(sim.minute, total);
      $('#pg').style.width = `${sim.done ? 100 : (cur / total) * 100}%`;
      const gl = (sd) => scorerLines(sim.goalsList.filter((x) => x.side === sd), (id) => esc(G.players[id].name)).join('<br>') + redLines(sim.events.filter((e) => e.type === 'red'), sd);
      $('#sh').innerHTML = gl('h');
      $('#sa').innerHTML = gl('a');
      const body = $('#body');
      if (tab === 'feed') {
        body.innerHTML = `<div class="feed">${feed.slice().reverse().map((e) => `<div class="ev ${e.type} ${e.type === 'penkick' ? (e.ok ? 'goal' : 'red') : ''}"><span class="m">${e.type === 'penkick' ? 'пен' : `${e.min}'`}</span><span class="i">${e.type === 'penkick' ? (e.ok ? '⚽' : '❌') : ICONS[e.type] || ''}</span><span>${e.side ? `<b style="color:${markColor(e.side === 'h' ? h : a)}">■</b> ` : ''}${esc(e.text)}</span></div>`).join('')}</div>`;
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
    // показываем удары серии по одному, с паузой «для интриги»
    const soStep = () => {
      const e = soQueue.shift();
      if (!e) { soTimer = null; if (sim.done) finish(); draw(); return; }
      feed.push(e);
      if (e.type === 'penkick') { so.kicks.push({ side: e.side, ok: e.ok }); so.h = e.ph; so.a = e.pa; }
      draw();
      soTimer = setTimeout(soStep, e.type === 'penkick' ? ({ 1: 1600, 2: 1000, 4: 550 }[speed] || 1600) : 700);
    };
    const tick = () => {
      const evs = sim.step();
      const si = evs.findIndex((e) => e.type === 'pens');
      if (si >= 0 && !so) {
        // началась серия пенальти: останавливаем матч и разыгрываем её по ударам
        feed.push(...evs.slice(0, si + 1));
        stop();
        so = { h: 0, a: 0, kicks: [] };
        soQueue = evs.slice(si + 1);
        draw();
        soTimer = setTimeout(soStep, 1200);
        return;
      }
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
      if (v > 0 && !sim.done && !soTimer) timer = setInterval(tick, delays[v]);
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
      const outO = subSel && sd.onPitch.find((o) => o.p.id === subSel);
      const outSlot = outO ? outO.slot : null;
      panel.classList.remove('hidden');
      panel.innerHTML = `<div class="row"><b class="grow">Замены (осталось ${sd.subsLeft})</b><button class="btn sm" id="closeMgr">Скрыть</button></div>
        ${sim.needUserSub ? `<div class="note bad small">${esc(G.players[sim.needUserSub].name)} травмирован — замените его.</div>` : ''}
        <div class="grid" style="grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
          <div><div class="small muted">На поле — кого заменить</div>${sd.onPitch.map((o) => `<button class="btn sm ${subSel === o.p.id ? 'on' : ''}" style="display:block;width:100%;text-align:left;margin:3px 0" data-out="${o.p.id}">${FM.POS_RU[o.slot]} · ${esc(o.p.name)} · ${Math.round(sd.fitness[o.p.id])}% · ${sd.rating[o.p.id].toFixed(1)}</button>`).join('')}</div>
          <div><div class="small muted">${outSlot ? `Кто выйдет на позицию «${FM.POS_NAME[outSlot]}»` : 'Запасные — сначала выберите, кого заменить'}</div>${(outSlot ? benchAvail.slice().sort((a, b) => FM.pfit(b, outSlot) - FM.pfit(a, outSlot) || b.ovr - a.ovr) : benchAvail).map((p) => { const mk = outSlot ? fitMark(p, outSlot) : null; return `<button class="btn sm sub-btn ${mk ? mk.cls : ''}" data-in="${p.id}" ${subSel && sd.subsLeft > 0 && G.isAvailable(p) ? '' : 'disabled'}>${pos(p.pos)}<span class="grow">${esc(p.name)}</span>${mk ? `<span class="fit-tag">${mk.tag}</span>` : ''}<b>${p.ovr}</b></button>`; }).join('') || '<div class="small muted">Никого не осталось</div>'}</div></div>
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
      // идущая серия пенальти — сразу показать все удары
      if (soTimer) { clearTimeout(soTimer); soTimer = null; }
      for (const e of soQueue) { feed.push(e); if (e.type === 'penkick') { so.kicks.push({ side: e.side, ok: e.ok }); so.h = e.ph; so.a = e.pa; } }
      soQueue = [];
      while (!sim.done) {
        feed.push(...sim.step());
        if (sim.needUserSub) {
          // без участия тренера травмированного меняет ассистент
          const sd = sim.userSide, o = sd.onPitch.find((x) => x.p.id === sim.needUserSub);
          const sub = o && sim.bestSub(sd, o.slot);
          if (sub) sim.doSub(sd, o.p, sub); else sim.needUserSub = null;
        }
      }
      if (sim.pens && !so) so = { h: sim.pens.h, a: sim.pens.a, kicks: sim.pens.kicks.map((k) => ({ side: k.side, ok: k.ok })) };
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
      <div class="card"><h3>История тренера</h3>${s.history.length ? `<table><tr><th>Сезон</th><th>Клуб</th><th>Турнир</th><th class="num">Место</th><th></th></tr>${s.history.map((x) => `<tr><td>${x.year}/${String(x.year + 1).slice(2)}</td><td>${esc(T(x.team).name)}</td><td>${esc(s.leagues[x.league] ? s.leagues[x.league].short : x.league)}</td><td class="num">${x.pos}</td><td>${x.moved === 'up' ? '<span class="good">▲</span>' : x.moved === 'down' ? '<span class="bad">▼</span>' : ''}${x.cup ? ' 🏆' : ''}${(x.euro || []).map((id) => ` <span class="tag">${euroOf(id) ? euroOf(id).short : id} 🏆</span>`).join('')}</td></tr>`).join('')}</table>` : '<div class="muted small">Первый сезон в карьере.</div>'}</div></div>`;
  }

  // ================== почта ==================
  // ================== новости ==================
  function viewNews(main) {
    const s = g().s;
    let last = '';
    main.innerHTML = `<div class="card tight news-list">${s.news.map((n) => {
      const d = n.date && n.date !== last ? `<div class="news-date">${FM.fmtDateWd(n.date)}</div>` : '';
      last = n.date;
      return `${d}<div class="news-item">${esc(n.text)}</div>`;
    }).join('') || '<div style="padding:14px" class="muted">Новостей пока нет</div>'}</div>`;
  }

  // ================== тренер ==================
  function viewCoach(main) {
    const G = g(), s = G.s;
    const seasons = (s.coach && s.coach.seasons ? s.coach.seasons : []).slice().sort((a, b) => b.year - a.year);
    if (!seasons.some((x) => x.year === s.season)) seasons.unshift({ year: s.season, clubs: [G.userTeam().name], comps: {}, rec: { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 }, scorers: {} });
    const res = (r) => (r ? `${esc(r.h)} ${r.hg} : ${r.ag} ${esc(r.a)}` : '—');
    const best = (sc) => { const x = Object.values(sc).sort((a, b) => b.g - a.g)[0]; return x ? `${esc(x.name)}, ${x.g}` : '—'; };
    const recLine = (r) => `<div class="rec">${[['И', r.p], ['В', r.w], ['Н', r.d], ['П', r.l], ['ГЗ', r.gf], ['ГП', r.ga], ['+/−', (r.gf - r.ga > 0 ? '+' : '') + (r.gf - r.ga)]].map(([k, v]) => `<span><i>${k}</i>${v}</span>`).join('')}</div>`;
    // стадия турнира: место в лиге, «победа», «вылет — 1/8 финала» и т. п.
    const stage = (e, comp, c) => {
      const cur = e.year === s.season;
      if (s.leagues[comp] || (!c && e.final)) {
        const pos = cur ? G.positionOf(G.userTeam().id) : e.final && e.final.league === comp ? e.final.pos : null;
        if (!pos) return '—';
        return pos === 1 && !cur ? '<b class="win">🏆 Чемпион</b>' : `${pos}-е место`;
      }
      if (c.md) {
        const row = cur && s.euro && s.euro[comp] && G.euroTable(comp).find((r) => r.id === s.user);
        if (row) return `общий этап · ${row.pos}-е место`;
        return cur ? 'общий этап' : `<span class="bad">вылет · общий этап${c.pos ? `, ${c.pos}-е место` : ''}</span>`;
      }
      const base = c.label || 'стыки';
      if (!c.ko) return `${base} · в борьбе`;
      if (c.won && c.final) return '<b class="win">🏆 Победа</b>';
      if (c.won) return `${base} · ${comp === 'po' && !/полуфинал/.test(base) ? 'выиграли' : 'прошли дальше'}`;
      return `<span class="bad">вылет · ${base}</span>`;
    };
    const card = (e) => {
      const comps = Object.entries(e.comps || {});
      const hist = s.history.find((h) => h.year === e.year);
      const rows = comps.length ? comps.map(([c, x]) => `<div class="kvl"><span>${esc(compName(c))}</span><b>${stage(e, c, x)}</b></div>`).join('')
        : hist ? `<div class="kvl"><span>${esc(s.leagues[hist.league] ? s.leagues[hist.league].name : 'Чемпионат')}</span><b>${hist.pos}-е место</b></div>` : '<div class="muted small">Матчей ещё не было</div>';
      return `<div class="card coach-season"><h3>Сезон ${e.year}/${String(e.year + 1).slice(2)}${e.year === s.season ? ' · текущий' : ''}<span class="grow"></span><span class="clubs">${(e.clubs || []).map(esc).join(', ')}</span></h3>
        <div class="coach-cols"><div>${rows}</div><div>
          <div class="kvl"><span>Лучший бомбардир</span><b>${best(e.scorers || {})}</b></div>
          <div class="kvl"><span>Крупнейшая победа</span><b>${res(e.bigWin)}</b></div>
          <div class="kvl"><span>Крупнейшее поражение</span><b>${res(e.bigLoss)}</b></div>
          <div class="kvl"><span>Все матчи</span>${recLine(e.rec || { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 })}</div></div></div></div>`;
    };
    // итог за карьеру
    const all = { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 }, sc = {}, clubs = [];
    let bw = null, bl = null;
    for (const e of seasons) {
      for (const k in all) all[k] += (e.rec || {})[k] || 0;
      for (const pid in e.scorers || {}) { sc[pid] = sc[pid] || { name: e.scorers[pid].name, g: 0 }; sc[pid].g += e.scorers[pid].g; }
      (e.clubs || []).forEach((c) => { if (!clubs.includes(c)) clubs.push(c); });
      if (e.bigWin && (!bw || e.bigWin.diff > bw.diff || (e.bigWin.diff === bw.diff && e.bigWin.gf > bw.gf))) bw = e.bigWin;
      if (e.bigLoss && (!bl || e.bigLoss.diff < bl.diff)) bl = e.bigLoss;
    }
    s.history.forEach((h) => { const n = G.teams[h.team] && G.teams[h.team].name; if (n && !clubs.includes(n)) clubs.push(n); });
    const titles = s.history.filter((h) => h.pos === 1 && s.leagues[h.league] && s.leagues[h.league].tier === 1).length;
    const cups = s.history.filter((h) => h.cup).length;
    const euros = s.history.reduce((a, h) => a + (h.euro ? h.euro.length : 0), 0);
    main.innerHTML = `${coachMarketCard()}<div class="card coach-total"><h3>Всего за карьеру · ${esc(s.manager)}</h3><div class="coach-cols"><div>
        <div class="kvl"><span>Клубы</span><b>${clubs.map(esc).join(', ')}</b></div>
        <div class="kvl"><span>Сезонов</span><b>${seasons.length}</b></div>
        <div class="kvl"><span>Трофеи</span><b>${titles + cups + euros ? [titles ? `чемпионств: ${titles}` : '', cups ? `кубков: ${cups}` : '', euros ? `еврокубков: ${euros}` : ''].filter(Boolean).join(' · ') : 'пока нет'}</b></div></div><div>
        <div class="kvl"><span>Лучший бомбардир</span><b>${best(sc)}</b></div>
        <div class="kvl"><span>Крупнейшая победа</span><b>${res(bw)}</b></div>
        <div class="kvl"><span>Крупнейшее поражение</span><b>${res(bl)}</b></div>
        <div class="kvl"><span>Все матчи</span>${recLine(all)}</div></div></div></div>
      ${seasons.map(card).join('')}`;
    bindCoachMarket(main);
  }

  // Рынок тренеров (как в FC): репутация, клубы и их интерес, переход по кнопке
  const LEVEL = [['не рассматривает', 'lv0'], ['низкий интерес', 'lv1'], ['заинтересован', 'lv2'], ['очень заинтересован', 'lv3']];
  function coachMarketCard() {
    const G = g(), s = G.s, u = G.userTeam();
    const cr = G.coachRep();
    const all = G.coachMarket();
    const countries = [...new Set(all.map((x) => G.countryOf(x.league)))];
    const cc = UI.cmCountry && (UI.cmCountry === 'all' || countries.includes(UI.cmCountry)) ? UI.cmCountry : (countries.includes(G.countryOf(u.league)) ? G.countryOf(u.league) : 'all');
    let list = cc === 'all' ? all : all.filter((x) => G.countryOf(x.league) === cc);
    if (UI.cmOnlyOpen) list = list.filter((x) => x.level >= 2);
    // сначала те, кто готов взять, затем по силе клуба
    list = list.slice().sort((a, b) => (b.level >= 2) - (a.level >= 2) || b.rep - a.rep).slice(0, 60);
    return `<div class="card coach-market"><h3>Рынок тренеров</h3>
      <div class="row cm-head"><div class="cm-rep"><span>Репутация тренера</span><b>${cr}</b></div>
        <div class="small muted grow">Клубы смотрят на вашу репутацию: она растёт от трофеев и выполненных задач. Клубы, которые сильно отстают от ожиданий, ищут тренера и соглашаются охотнее. Сейчас вы тренируете «${esc(u.name)}» (репутация клуба ${u.rep}).</div></div>
      <div class="row" style="margin:10px 0"><select id="cm-country"><option value="all">Все страны</option>${countries.map((c) => `<option value="${c}" ${c === cc ? 'selected' : ''}>${esc(FM.NAT[c] || c)}</option>`).join('')}</select>
        <label class="check small"><input type="checkbox" id="cm-open" ${UI.cmOnlyOpen ? 'checked' : ''}> только заинтересованные</label></div>
      <div class="cm-list">${list.map((x) => { const t = T(x.id); const [lt, lc] = LEVEL[x.level]; return `<div class="cm-row">${badge(t, 'sm')}<div class="grow"><b data-team="${t.id}">${esc(t.name)}</b><div class="small muted">${esc(s.leagues[x.league].name)} · ${x.played ? `${x.pos}-е место` : 'сезон не начался'}${x.vacancy ? ' · <span class="warn">ищут тренера</span>' : ''}</div></div>
        <span class="lvl ${lc}">${x.refused ? 'отказал в этом сезоне' : lt}</span>${x.level >= 1 && !x.refused ? `<button class="btn sm ${x.level >= 2 ? 'primary' : ''}" data-apply="${t.id}">${x.level >= 2 ? 'Перейти' : 'Подать заявку'}</button>` : ''}</div>`; }).join('') || '<div class="muted small">Подходящих клубов нет</div>'}</div></div>`;
  }
  function bindCoachMarket(main) {
    const G = g();
    const sel = main.querySelector('#cm-country');
    if (sel) sel.onchange = () => { UI.cmCountry = sel.value; render(); };
    const op = main.querySelector('#cm-open');
    if (op) op.onchange = () => { UI.cmOnlyOpen = op.checked; render(); };
    main.querySelectorAll('[data-apply]').forEach((b) => b.onclick = () => {
      // переход — серьёзное решение: подтверждение повторным нажатием
      if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = 'Точно? Нажмите ещё раз'; b.classList.add('danger'); return; }
      const r = G.applyJob(b.dataset.apply);
      save();
      if (r.ok) { UI.tab = 'home'; UI.tablesLid = G.userTeam().league; render(); toast(esc(r.text), 4000); } else { render(); toast(esc(r.text), 4500); }
    });
  }

  function viewInbox(main) {
    const G = g(), s = G.s;
    main.innerHTML = `<div class="card tight">${s.inbox.map((m) => `<div class="inbox-item ${m.read ? '' : 'unread'}" data-msg="${m.id}">
      <div class="row"><span class="t grow">${esc(m.title)}</span><span class="small muted">${FM.fmtDate(m.date)}</span></div>
      <div class="small">${esc(m.text)}</div>
      ${m.type === 'offer' && m.data ? (m.data.closed ? `<div class="small muted">${esc(m.data.result || 'Закрыто')}</div>` : `<div class="row" style="margin-top:6px"><button class="btn sm primary" data-acc="${m.id}">Принять</button><button class="btn sm" data-dec="${m.id}">Отклонить</button>
        <span class="haggle">${(() => { const k = FM.roundValue(m.data.fee * 1.2), u = moneyUnit(k), mm = u === 'млн'; return `<input class="sm" type="number" min="0" step="${mm ? 0.05 : 5}" data-unit="${u}" data-ask="${m.id}" value="${mm ? Math.round(k / 10) / 100 : k}" title="Ваша цена"><span class="small muted">${u} €</span>`; })()}<button class="btn sm" data-haggle="${m.id}">Попросить больше</button></span><span class="small muted">до ${FM.fmtDate(m.data.until)}</span></div>`) : ''}
      ${m.type === 'job' && m.data && !m.data.closed ? `<div class="row" style="margin-top:6px"><button class="btn sm primary" data-job="${m.id}">Принять предложение</button><button class="btn sm" data-jobno="${m.id}">Отказаться</button></div>` : ''}
      ${m.type === 'job' && m.data && m.data.closed && m.data.result ? `<div class="small muted">${esc(m.data.result)}</div>` : ''}
    </div>`).join('') || '<div style="padding:14px" class="muted">Писем нет</div>'}</div>`;
    s.inbox.forEach((m) => { if (m.type !== 'offer' || (m.data && m.data.closed)) m.read = true; });
    main.querySelectorAll('[data-acc]').forEach((b) => b.onclick = () => { toast(esc(G.answerOffer(+b.dataset.acc, true))); save(); render(); });
    main.querySelectorAll('[data-haggle]').forEach((b) => b.onclick = () => {
      const v = readMoney(main.querySelector(`[data-ask="${b.dataset.haggle}"]`));
      toast(esc(G.counterOffer(+b.dataset.haggle, v)), 4000); save(); render();
    });
    main.querySelectorAll('[data-dec]').forEach((b) => b.onclick = () => { G.answerOffer(+b.dataset.dec, false); save(); render(); });
    main.querySelectorAll('[data-jobno]').forEach((b) => b.onclick = () => { toast(esc(G.declineJob(+b.dataset.jobno))); save(); render(); });
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
      <div class="card"><h3>Игра</h3>
        <label class="check small" style="margin-bottom:12px"><input type="checkbox" id="set-ru-euro" ${G.s.settings.ruEuro !== false ? 'checked' : ''}> Российские клубы в еврокубках (со следующего сезона)</label>
        <div class="row"><button class="btn danger" id="newgame">Новая игра</button></div></div></div>`;
    main.querySelectorAll('[data-save]').forEach((b) => b.onclick = () => { if (save(SAVE_SLOT + b.dataset.save)) toast('Сохранено'); render(); });
    main.querySelectorAll('[data-load]').forEach((b) => b.onclick = () => loadSlot(SAVE_SLOT + b.dataset.load));
    slotMetas().then((m) => {
      [1, 2, 3].forEach((i) => { const el = main.querySelector('#slot' + i); if (el && m[SAVE_SLOT + i]) el.textContent = m[SAVE_SLOT + i].info; });
    });
    main.querySelector('#exp').onclick = () => download(`ffm26_${G.userTeam().id}_${G.s.date}.json`, JSON.stringify(G.packState()));
    main.querySelector('#imp').onclick = () => pickFile((s) => (s.teams && s.players ? loadState(s) : toast('Это не файл сохранения.')));
    main.querySelector('#editor').onclick = () => editor();
    main.querySelector('#set-ru-euro').onchange = (e) => { G.s.settings.ruEuro = e.target.checked; save(); };
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
            id: t.id, name: t.name, city: t.city, stadium: t.stadium, cap: t.cap, colors: t.colors, rep: t.rep, money: Math.round(t.money), reserveOf: t.reserveOf || undefined, logoData: t.logoData,
            players: '\n' + G.squad(t).map((p) => [p.name, p.pos, p.age, p.value, p.nat, p.ovr, p.pot, p.gen ? 'g' : '', p.contract + 1].join('|')).join('\n'),
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
          <label>Цвета<br><input id="t-c1" type="color" value="${t.colors[0]}" style="width:44px;padding:0"><input id="t-c2" type="color" value="${t.colors[1]}" style="width:44px;padding:0"></label>
          <div>Эмблема<br><div class="row">${badge(t, 'lg')}<label class="btn sm">Загрузить<input id="t-logo" type="file" accept="image/*" hidden></label>${t.logoData ? '<button class="btn sm" id="t-logo-del">Вернуть стандартную</button>' : ''}</div></div></div>
        <div class="tbl-wrap"><table class="ed" id="e-tab"><tr><th>Имя</th><th>Поз</th><th>Возр</th><th>Страна</th><th>Рейт</th><th>Потенц.</th><th>Цена, тыс. €</th><th>Ген.</th><th></th></tr>
          ${sq.map((p) => edRow(p)).join('')}</table></div>
        <div class="row" style="margin-top:10px"><button class="btn" id="e-add">+ Игрок</button><span class="grow"></span>
          <button class="btn primary" id="e-save">Сохранить клуб</button></div>
        <h3 style="margin-top:16px">Вся база</h3>
        <div class="row"><button class="btn" id="e-exp">Экспорт базы (JSON)</button><button class="btn" id="e-imp">Импорт базы → новая игра</button>
          <button class="btn" id="e-def">Сделать базой для новых игр</button><button class="btn danger" id="e-reset" ${customDb() ? '' : 'disabled'}>Вернуть встроенную базу</button></div>`, 'wide');
      el.querySelector('#t-logo').onchange = (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const img = new Image();
        img.onload = () => {
          // уменьшаем до 128×128, чтобы эмблема не раздувала сохранение
          const c = document.createElement('canvas');
          c.width = c.height = 128;
          const k = Math.min(128 / img.width, 128 / img.height);
          const w = img.width * k, h = img.height * k;
          c.getContext('2d').drawImage(img, (128 - w) / 2, (128 - h) / 2, w, h);
          t.logoData = c.toDataURL('image/png');
          URL.revokeObjectURL(img.src);
          save();
          render();
          draw();
          toast('Эмблема обновлена');
        };
        img.onerror = () => toast('Не удалось прочитать картинку.');
        img.src = URL.createObjectURL(f);
      };
      const del = el.querySelector('#t-logo-del');
      if (del) del.onclick = () => { delete t.logoData; save(); render(); draw(); };
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
