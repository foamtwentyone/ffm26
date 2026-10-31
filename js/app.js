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
    play: '<path d="M8 5.5v13a1 1 0 0 0 1.5.9l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5z" fill="currentColor" stroke="none"/>',
    medic: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor" stroke="none"/>',
    card: '<rect x="6" y="3" width="12" height="18" rx="2" fill="currentColor" stroke="none"/>',
    pencil: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
    fire: '<path d="M12 2.5c.6 3.6 5.5 5.6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.6 1.4-4.2 2.2-5.6.6 1.7 1.6 2.8 2.6 3.2C11.2 8.6 11.7 5 12 2.5z"/>',
    up: '<path d="M12 5l8 12H4z" fill="currentColor" stroke="none"/>',
    down: '<path d="M12 19L4 7h16z" fill="currentColor" stroke="none"/>',
    chevDown: '<path d="M6 9l6 6 6-6"/>',
    chevUp: '<path d="M6 15l6-6 6 6"/>',
    plane: '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" fill="currentColor" stroke="none"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    pause: '<rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>',
    glove: '<path d="M7 21v-4.5L4.2 12a1.6 1.6 0 0 1 2.7-1.7L8.5 13V5.5a1.5 1.5 0 0 1 3 0V11V4a1.5 1.5 0 0 1 3 0v7V5.5a1.5 1.5 0 0 1 3 0V12v-2a1.5 1.5 0 0 1 3 0v4.5c0 3.6-2.9 6.5-6.5 6.5z"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.2"/>',
    clock: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 10v3.5l2.5 2M9.5 2.5h5M12 2.5V6"/>',
    exit: '<path d="M14 4h4.5a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5H14"/><path d="M9.5 8l-4 4 4 4M5.5 12H15"/>',
    dots: '<circle cx="5" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="2" fill="currentColor" stroke="none"/>',
    dot: '<circle cx="12" cy="12" r="6" fill="currentColor" stroke="none"/>',
    ring: '<circle cx="12" cy="12" r="5.5"/>',
    square: '<rect x="5" y="5" width="14" height="14" rx="3" fill="currentColor" stroke="none"/>',
    starF: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="currentColor" stroke="none"/>',
    trophyF: '<path d="M7 3h10v6a5 5 0 0 1-4 4.9V17h3v3H8v-3h3v-3.1A5 5 0 0 1 7 9z" fill="currentColor" stroke="none"/><path d="M7 5.5H4.5A3 3 0 0 0 7.5 10.5M17 5.5h2.5a3 3 0 0 1-3 5"/>',
  };
  const icon = (n, cls = '') => `<svg class="ic${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVG[n] || ''}</svg>`;

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
  function setAccent(t, color, kind = 'club') {
    const el = document.documentElement, root = el.style;
    const a = color || (t ? glow(t) : '#4da3ff');
    root.setProperty('--accent', a);
    root.setProperty('--accent2', mixHex(a, '#000000', 0.3));
    root.setProperty('--accent-ink', lum(a) > 0.45 ? '#0a0f2c' : '#ffffff');
    el.dataset.comp = kind;
  }

  // Оформление как в FC: цвета турнира, в котором ближайший матч (в пределах недели) или который открыт
  // в «Турнирах»; если матчей в ближайшие дни нет — цвета клуба.
  const LEAGUE_THEME = { rpl: '#1f5fd6', fnl: '#14a3c7', l2: '#2e8b57', eng: '#8a2be2', eng2: '#3d6fd8', eng3: '#d8342e', eng4: '#2b9348',
    esp: '#ff4b2b', esp2: '#1b8a5a', ita: '#2a7fff', ita2: '#4caf50', ger: '#e2001a', ger2: '#d50032', fra: '#3d5afe', fra2: '#ff6b35',
    por: '#00a650', ned: '#ff6200', bel: '#e1a100', tur: '#e30a17', pol: '#00a0e9', sco: '#5b3fd6', sau: '#0aa36c', usa: '#1e4fd8',
    bra: '#00a859', arg: '#4aa8ff' };
  const COMP_THEME = { ucl: '#5b8cff', uel: '#ff7a00', uecl: '#1fe07a', cup: '#e8b84a', po: '#ff4d6d', final: '#ffd166' };
  function themeOf(comp, m) {
    if (!comp) return null;
    if (euroOf(comp)) return m && m.neutral ? ['final', COMP_THEME.final] : [comp, COMP_THEME[comp]];
    if (FM.isCup(comp)) return m && m.neutral ? ['final', COMP_THEME.final] : ['cup', COMP_THEME.cup];
    if (comp === 'po') return ['po', COMP_THEME.po];
    if (g().s.leagues[comp]) return ['league', LEAGUE_THEME[comp] || null];
    return null;
  }
  function applyTheme() {
    const G = g(), s = G.s, u = G.userTeam();
    let th = null;
    if (UI.tab === 'tables') {
      const v = UI.tablesView;
      th = v === 'table' ? themeOf(UI.tablesLid || u.league) : v === 'cup' ? themeOf('cup') : v === 'po' ? themeOf('po') : euroOf(v) ? themeOf(v) : null;
    }
    if (!th) {
      const nm = G.userMatchToday() || G.nextUserMatch();
      if (nm && FM.parseDate(nm.date) - FM.parseDate(s.date) <= 7 * 864e5) th = themeOf(nm.comp, nm);
    }
    if (th && th[1]) setAccent(u, th[1], th[0]);
    else setAccent(u);
  }

  // Номер игрока: постоянный, по позиции (вратари 1/12/31, защитники 2–5, полузащита 6–8/10, атака 7/9/11…)
  function shirtNo(p) {
    const pool = { GK: [1, 12, 31, 99], CB: [3, 4, 5, 15, 23], LB: [3, 13, 21], RB: [2, 22, 24], DM: [6, 16, 18], CM: [8, 14, 17], AM: [10, 20, 19], LW: [11, 7, 27], RW: [7, 17, 77], ST: [9, 19, 29] }[p.pos] || [p.id % 98 + 1];
    return pool[p.id % pool.length];
  }
  // Футболка со спины: номер и фамилия, цвета клуба (у вратаря — своя расцветка)
  function kitBack(t, p) {
    const gk = p.pos === 'GK';
    const c1 = gk ? '#f2c14e' : (t && t.colors && t.colors[0]) || '#2f6bff';
    const c2 = gk ? '#1b1b1b' : (t && t.colors && t.colors[1]) || '#ffffff';
    const ink = lum(c1) > 0.5 ? '#111' : (lum(c2) > 0.5 ? c2 : '#fff');
    const last = esc(p.name.split(' ').slice(-1)[0].toUpperCase()).slice(0, 12);
    const path = 'M30 6L8 18l9 18 9-4.5V94h48V31.5l9 4.5 9-18L70 6c-3 6-11 9-20 9s-17-3-20-9z';
    return `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${path}" fill="${c1}"/>
      <path d="M8 18l9 18M92 18l-9 18" stroke="${c2}" stroke-width="4"/><path d="M30 6c3 6 11 9 20 9s17-3 20-9" fill="none" stroke="${c2}" stroke-width="4"/>
      <text x="50" y="35" text-anchor="middle" font-family="Saira Condensed, Arial Narrow, sans-serif" font-weight="800" font-size="${last.length > 8 ? 9 : 11}" fill="${ink}" letter-spacing=".5">${last}</text>
      <text x="50" y="80" text-anchor="middle" font-family="Saira Condensed, Arial Narrow, sans-serif" font-weight="800" font-size="40" fill="${ink}">${shirtNo(p)}</text>
      <path d="${path}" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.5"/></svg>`;
  }

  // Футболка клуба (SVG): основной цвет, полоса и воротник вторым цветом; у вратаря — своя расцветка
  function kitSvg(t, gk, empty) {
    const c1 = gk ? '#f2c14e' : (t.colors && t.colors[0]) || '#2f6bff';
    const c2 = gk ? '#1b1b1b' : (t.colors && t.colors[1]) || '#ffffff';
    const path = 'M14 4l-10 6 4.5 9 4.5-2.2V38h18V16.8l4.5 2.2 4.5-9-10-6c-1.2 3-4.4 5-8 5s-6.8-2-8-5z';
    if (empty) return `<svg viewBox="0 0 44 44" aria-hidden="true"><path d="${path}" fill="rgba(0,0,0,.35)" stroke="rgba(255,255,255,.7)" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`;
    return `<svg viewBox="0 0 44 44" aria-hidden="true"><path d="${path}" fill="${c1}"/>
      <path d="M19 9.2h6V38h-6z" fill="${c2}" opacity="${gk ? 0 : 0.9}"/><path d="M14 4c1.2 3 4.4 5 8 5s6.8-2 8-5" fill="none" stroke="${c2}" stroke-width="2.2"/>
      <path d="M4 10l4.5 9M40 10l-4.5 9" stroke="${c2}" stroke-width="2"/><path d="${path}" fill="none" stroke="rgba(0,0,0,.4)" stroke-width="1.2"/></svg>`;
  }

  // Карточка игрока в стиле FUT: золото от 80, серебро 70–79, бронза ниже; статистика сезона во всех турнирах
  // Карточка игрока — игровая майка: ткань в цветах клуба (у вратаря — своя форма), фамилия и номер на спине,
  // статистика сезона и бирка с рейтингом. Рамка (золото/серебро/бронза) — по рейтингу.
  // stats — что показать на карточке в этом месте: [[значение, подпись], …] (по умолчанию — сезон игрока)
  function futCard(p, stats) {
    const tier = p.ovr >= 80 ? 'gold' : p.ovr >= 70 ? 'silver' : 'bronze';
    const club = p.club ? T(p.club) : null;
    const gk = p.pos === 'GK';
    const k1 = gk ? '#f2c14e' : (club && club.colors && club.colors[0]) || '#3a4256';
    const k2 = gk ? '#1b1b1b' : (club && club.colors && club.colors[1]) || '#d9dde8';
    const ink = lum(k1) > 0.55 ? '#111' : '#fff';
    const apps = p.st.apps + p.cst.apps;
    const r = apps ? ((p.st.rsum + p.cst.rsum) / apps).toFixed(1) : '—';
    stats = stats || (gk ? [[p.st.cs + p.cst.cs, 'сух.'], [apps, 'игр'], [r, 'оц.']] : [[p.st.g + p.cst.g, 'голы'], [p.st.a + p.cst.a, 'пасы'], [r, 'оц.']]);
    const last = p.name.split(' ').slice(-1)[0];
    return `<div class="fut kit-card st${stats.length} ${tier}" style="--k1:${k1};--k2:${k2};--ki:${ink}">
      <div class="kc-collar"></div><div class="kc-stitch"></div>
      <div class="kc-ids">${club ? badge(club, 'sm') : ''}${flag(p.nat)}</div>
      <div class="kc-sn ${last.length > 10 ? 'long' : ''}">${esc(last)}</div><div class="kc-no">${shirtNo(p)}</div>
      <div class="kc-st">${stats.map(([v, l]) => `<span><b>${v}</b>${l}</span>`).join('')}</div>
      <div class="kc-tag"><span>${FM.POS_RU[p.pos]}</span><b>${p.ovr}</b><span>${p.age} лет</span></div></div>`;
  }



  // маленькая карточка FUT для подборок (лидеры, трансферы); подпись под ней — главный показатель
  const futMini = (p, caption, stats) => `<button class="fut-mini" data-player="${p.id}" title="${esc(p.name)}">${futCard(p, stats).replace('class="fut ', 'class="fut sm ')}${caption ? `<span class="fut-cap">${caption}</span>` : ''}</button>`;

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
  const status = (p) => (p.inj ? `<span class="ico bad" title="Травма: ${p.inj} дн.">${icon('medic')}${p.inj}</span>` : '') + (p.sus ? `<span class="ico bad" title="Дисквалификация">${icon('card', 'red')}${p.sus}</span>` : '') + (p.listed ? '<span class="ico warn" title="Выставлен на трансфер">$</span>' : '') + (p.contract <= g().s.season && !p.loan ? `<span class="ico warn" title="Контракт истекает летом">${icon('pencil')}</span>` : '') + (p.loan ? `<span class="ico loan" title="В аренде из «${esc(g().teams[p.loan.from].name)}»">А</span>` : '');
  const rt = (r) => `<span class="rt ${r >= 8 ? 'top' : r >= 7 ? 'hi' : r < 6 ? 'lo' : ''}">${r.toFixed(1)}</span>`;
  const euroOf = (c) => FM.EURO.find((E) => E.id === c);
  const compName = (c) => (FM.isCup(c) ? FM.cupName(FM.cupCountry(c)) : c === 'po' ? 'Плей-офф и стыки' : euroOf(c) ? euroOf(c).name : g().s.leagues[c] ? g().s.leagues[c].name : c);
  const compShort = (c) => (FM.isCup(c) ? 'Кубок' : c === 'po' ? 'Плей-офф' : euroOf(c) ? euroOf(c).short : g().s.leagues[c] ? g().s.leagues[c].short : c);
  // стадия матча: тур чемпионата, раунд кубка или этап еврокубка
  // пометка особого матча: дерби или матч лидеров
  const bigTag = (m) => { const d = g().derbyOf(m) || (g().s.leagues[m.comp] && !m.played ? g().bigMatchOf(m) : null); return d ? `<span class="derby-tag">${icon('fire')} ${esc(d)}</span>` : ''; };
  const roundText = (m) => (m.label ? m.label : g().s.leagues[m.comp] ? `${m.round}-й тур` : FM.isCup(m.comp) && g().cupOf(m.comp) && g().cupOf(m.comp).rounds[m.round - 1] ? g().cupOf(m.comp).rounds[m.round - 1].name : m.leg ? `${m.leg}-й матч` : '');
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
    const u = g().userTeam(), L = s.leagues[u.league];
    const row = g().table(u.league).find((r) => r.id === u.id);
    const meta = { info, ts, club: u.id, clubName: u.name, colors: u.colors, logo: u.logoData || null, mgr: s.manager, season: s.season, date: s.date, league: L.name, pos: row ? row.pos : null, pts: row ? row.pts : null, money: u.money };
    const done = FM.Store.localSave(key, str).then((ok) => {
      if (ok) ls.set(key + '_meta', JSON.stringify(meta));
      else if (!UI.cloud) toast('Не удалось сохранить: браузер не дал места в хранилище. Используйте экспорт в файл.');
    }).catch(() => { /* остаётся облачная копия */ });
    FM.Store.cloudSave(key, str, info);
    return done;
  }
  // Выход в главное меню: сначала автосохранение, потом стартовый экран.
  async function exitToMenu() {
    closeModal();
    await save();
    UI.g = null;
    UI.lastTab = null;
    window.scrollTo(0, 0);
    startScreen();
    toast('Карьера сохранена');
  }
  // Автосохранение, когда приложение сворачивают, переключают вкладку или закрывают.
  const autoSave = () => { if (UI.g) try { save(); } catch (e) { /* не мешаем закрытию */ } };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') autoSave(); });
  window.addEventListener('pagehide', autoSave);
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
      if (!raw) return null;
      // сохранённая база могла появиться до того, как в игру добавили новые лиги, — дополняем её ими
      const db = JSON.parse(raw);
      const ids = new Set(db.map((L) => L.id));
      return db.concat(FM.leagues.filter((L) => !ids.has(L.id)));
    } catch (e) { return null; }
  }

  // ================== свой клуб ==================
  // Клуб занимает место одного из клубов лиги (число команд не меняется). Уровень задаёт силу сгенерированного
  // состава и бюджет; можно оставить игроков заменённого клуба.
  function createClubModal(L, onDone) {
    const teams = L.teams.filter((t) => !t.reserveOf && !L.teams.some((x) => x.reserveOf === t.id)).slice().sort((a, b) => repOf(a) - repOf(b));
    const reps = teams.map(repOf).sort((a, b) => a - b);
    const lvl = { low: reps[0], mid: reps[Math.floor(reps.length / 2)], top: reps[reps.length - 1] };
    let logo = null;
    const el = modal(`<h2 style="margin:0 0 4px">Свой клуб</h2><div class="muted small" style="margin-bottom:12px">${flag(L.country || 'RUS')}${esc(L.name)} · клуб займёт место одного из участников лиги</div>
      <div class="nego-form row">
        <label>Название<input id="c-name" maxlength="28" placeholder="Например, «Метеор»"></label>
        <label>Город<input id="c-city" maxlength="24"></label>
        <label>Стадион<input id="c-stad" maxlength="32"></label>
        <label>Вместимость<select id="c-cap">${[3000, 8000, 15000, 30000, 50000, 75000].map((v) => `<option value="${v}" ${v === 15000 ? 'selected' : ''}>${v.toLocaleString('ru-RU')}</option>`).join('')}</select></label>
        <label>Цвета<span class="row" style="gap:6px"><input type="color" id="c-col1" value="#d81e3a"><input type="color" id="c-col2" value="#ffffff"></span></label>
        <label>Эмблема<span class="row" style="gap:8px"><span id="c-badge"></span><span class="btn sm" style="position:relative">Загрузить<input id="c-logo" type="file" accept="image/*" style="position:absolute;inset:0;opacity:0"></span></span></label>
      </div>
      <div class="nego-form row" style="margin-top:10px">
        <label>Уровень клуба<select id="c-lvl"><option value="low">Аутсайдер лиги</option><option value="mid" selected>Середняк</option><option value="top">Один из лидеров</option></select></label>
        <label>Вместо клуба<select id="c-rep">${teams.map((t, i) => `<option value="${t.id}">${esc(t.name)}${i === 0 ? ' — самый слабый' : ''}</option>`).join('')}</select></label>
        <label>Состав<select id="c-keep"><option value="0">Новые игроки под уровень клуба</option><option value="1">Игроки заменённого клуба</option></select></label>
      </div>
      <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn primary" id="c-go">Создать клуб и начать карьеру</button></div>`);
    const $ = (q) => el.querySelector(q);
    const preview = () => {
      const name = $('#c-name').value.trim() || 'Мой клуб';
      $('#c-badge').innerHTML = badge({ id: '_new', name, colors: [$('#c-col1').value, $('#c-col2').value], logoData: logo }, 'lg');
    };
    ['#c-name', '#c-col1', '#c-col2'].forEach((q) => $(q).oninput = preview);
    $('#c-logo').onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = c.height = 128;
        const k = Math.min(128 / img.width, 128 / img.height);
        c.getContext('2d').drawImage(img, (128 - img.width * k) / 2, (128 - img.height * k) / 2, img.width * k, img.height * k);
        logo = c.toDataURL('image/png');
        URL.revokeObjectURL(img.src);
        preview();
      };
      img.src = URL.createObjectURL(f);
    };
    preview();
    $('#c-go').onclick = () => {
      const name = $('#c-name').value.trim();
      if (!name) { toast('Введите название клуба.'); return; }
      const city = $('#c-city').value.trim() || name;
      onDone({
        league: L.id, replace: $('#c-rep').value, name, city, stadium: $('#c-stad').value.trim() || `Стадион «${name}»`,
        cap: +$('#c-cap').value, colors: [$('#c-col1').value, $('#c-col2').value], rep: lvl[$('#c-lvl').value], level: $('#c-lvl').value,
        keep: $('#c-keep').value === '1', logoData: logo,
      });
    };
  }

  // ================== стартовый экран ==================
  // репутация клуба из базы: задана явно или считается по стоимости состава, как при создании мира
  const repOf = (t) => t.rep ?? FM.repFromValue((t.players || '').split('\n').reduce((a, l) => a + (+l.split('|')[3] || 0), 0));

  function startScreen() {
    setAccent(null);
    const db = customDb() || FM.leagues;
    let lid = db[0].id;
    let metas = {};
    // Главное меню: заставка FM 26 с анимированным полем и плитками «Продолжить», «Новая карьера», «Сохранения»;
    // «Новая карьера» и «Сохранения» открываются отдельными экранами с кнопкой «Назад».
    let view = 'menu';
    const draw = () => {
      const auto = metas[SAVE_AUTO];
      const anyTeam = auto && auto.club ? FM.leagues.flatMap((L) => L.teams).find((x) => x.id === auto.club) : null;
      const back = '<button class="mm-back" id="mm-back">‹ Главное меню</button>';
      if (view === 'menu') {
        const nSlots = [1, 2, 3].filter((i) => metas[SAVE_SLOT + i]).length;
        app.innerHTML = `<div class="mm">
          <div class="mm-pitch"><i></i><i></i><i></i><b></b></div><div class="mm-lights"><span></span><span></span><span></span></div>
          <div class="mm-in">
            <div class="mm-logo"><span class="mm-fm">FM</span><span class="mm-26">26</span><div class="mm-sub">Футбольный менеджер · сезон 2026/27</div></div>
            <div class="mm-tiles">
              ${auto ? `<button class="mm-t big" id="cont" style="--sc:${anyTeam ? glow({ ...anyTeam, colors: auto.colors || anyTeam.colors }) : 'var(--accent)'}"><span class="mm-k">Продолжить карьеру</span>
                <div class="mm-cont">${anyTeam ? badge(auto.logo ? { ...anyTeam, logoData: auto.logo } : anyTeam, 'xl') : ''}<div><b>${esc(auto.clubName || (auto.info || '').split(' · ')[1] || '')}</b>
                <span>${esc(auto.mgr || '')}${auto.date ? ` · ${FM.fmtDate(auto.date)}` : ''}${auto.pos ? ` · ${auto.pos}-е место` : ''}</span></div></div><span class="mm-go">${icon('play')}</span></button>` : ''}
              <button class="mm-t ${auto ? '' : 'big'}" id="mm-new" style="--sc:#1fbf75"><span class="mm-k">Новая карьера</span><b>Выбрать клуб</b><span>36 лиг · или свой клуб</span><span class="mm-go">${icon('play')}</span></button>
              <button class="mm-t" id="mm-saves" style="--sc:#5b8cff"><span class="mm-k">Сохранения</span><b>${nSlots + (auto ? 1 : 0)} из 4</b><span>слоты, загрузка из файла</span><span class="mm-go">${icon('play')}</span></button>
            </div>
            <div class="mm-foot">${UI.cloud ? 'Сохранения синхронизируются между устройствами' : 'Россия, вся Европа, Америка, Саудовская Аравия и СНГ'}</div>
          </div></div>`;
        const c = app.querySelector('#cont');
        if (c) c.onclick = () => loadSlot(SAVE_AUTO);
        app.querySelector('#mm-new').onclick = () => { view = 'new'; draw(); window.scrollTo(0, 0); };
        app.querySelector('#mm-saves').onclick = () => { view = 'saves'; draw(); window.scrollTo(0, 0); };
        return;
      }
      if (view === 'saves') {
        app.innerHTML = `<div class="mm-page"><div class="mm-pagehead">${back}<h1>Сохранения</h1></div><main><div id="sv-root"></div></main></div>`;
        app.querySelector('#mm-back').onclick = () => { view = 'menu'; draw(); };
        savesPanel(app.querySelector('#sv-root'), false);
        return;
      }
      app.innerHTML = `<div class="mm-page"><div class="mm-pagehead">${back}<h1>Новая карьера</h1></div>
      <main>
        <div class="card" style="margin-bottom:14px">
          <div class="row">
            <label class="grow">Имя тренера<br><input id="mgr" value="${esc(ls.get('ffm26_mgr') || 'Тренер')}" style="width:100%"></label>
            <label class="row small" style="gap:8px"><input type="checkbox" id="ru-euro" ${ls.get('ffm26_ru_euro') === '0' ? '' : 'checked'}> Российские клубы в еврокубках</label>
          </div>
          ${customDb() ? '<div class="note small">Используется ваша отредактированная база (Меню → Редактор базы).</div>' : ''}
        </div>
        <h2>Выберите клуб</h2>
        <div id="pick-area"></div>
      </main></div>`;
      app.querySelector('#mm-back').onclick = () => { view = 'menu'; draw(); };
      drawPick();
    };
    // смена лиги перерисовывает только выбор лиги и список клубов — без перезагрузки всего экрана и анимаций
    const drawPick = () => {
      const area = app.querySelector('#pick-area');
      const L = db.find((x) => x.id === lid);
      area.innerHTML = `${leaguePick(db, lid, 'data-l')}
        <div class="teams-pick"><button class="tp tp-new" id="mk-club"><span class="badge lg tp-plus">+</span><div><b>Свой клуб</b><div class="muted small">Займёт место самого слабого клуба лиги «${esc(L.name)}»</div></div></button>${L.teams.slice().sort((a, b) => repOf(b) - repOf(a)).map((t) => `
          <button class="tp" data-pick="${t.id}" style="--tc:${glow(t)}">${badge(t, 'lg')}<div><b>${esc(t.name)}</b><div class="muted small">${esc(t.city)}</div>
          ${stars(FM.clamp(Math.round((repOf(t) - 40) / 5) / 2, 0.5, 5))}</div></button>`).join('')}
</div>`;
      area.querySelectorAll('[data-l]').forEach((b) => b.onclick = () => { lid = b.dataset.l; drawPick(); });
      area.querySelector('#mk-club').onclick = () => createClubModal(L, (custom) => start(custom.replace, custom));
      area.querySelectorAll('[data-pick]').forEach((b) => b.onclick = () => start(b.dataset.pick));
    };
    const start = (teamId, custom) => {
        const mgr = app.querySelector('#mgr').value.trim() || 'Тренер';
        ls.set('ffm26_mgr', mgr);
        const ruEuro = app.querySelector('#ru-euro').checked;
        ls.set('ffm26_ru_euro', ruEuro ? '1' : '0');
        closeModal();
        UI.g = FM.Game.newGame(teamId, mgr, customDb() || undefined, { ruEuro, custom });
        UI.tab = 'home';
        UI.tablesLid = UI.g.userTeam().league;
        save();
        render();
    };
    for (const k of [SAVE_AUTO, SAVE_SLOT + 1, SAVE_SLOT + 2, SAVE_SLOT + 3]) metas[k] = localMeta(k);
    draw();
    // облачные сохранения подтягиваются позже; перерисовываем, только пока пользователь на этом экране
    slotMetas().then((m) => { if (!UI.g) { metas = m; draw(); } });
  }

  // ================== каркас ==================
  const TABS = [
    ['home', 'Главная'], ['squad', 'Состав и тактика'], ['fixtures', 'Расписание'], ['tables', 'Турниры'], ['stats', 'Статистика'],
    ['transfers', 'Трансферы'], ['finance', 'Финансы'], ['club', 'Клуб'], ['inbox', 'Почта'], ['news', 'Новости'], ['coach', 'Тренер'], ['hall', 'Зал славы'], ['menu', 'Сохранения и база'],
  ];
  // постоянная панель разделов: сверху на компьютере, снизу на телефоне (там — первые четыре и «Ещё»)
  const NAV = ['home', 'squad', 'tables', 'transfers', 'stats', 'fixtures', 'finance', 'inbox', 'coach'];
  const NAV_NAME = { squad: 'Состав', tables: 'Турниры', fixtures: 'Матчи', inbox: 'Сообщения' };
  // короткая подсказка под заголовком раздела: что здесь можно сделать
  const TAB_HINTS = {
    squad: 'Нажмите на позицию на поле и выберите игрока. «Автосостав» поставит сильнейших. ОСН — в старте, ЗАП — на скамейке.',
    fixtures: 'Все матчи сезона. Нажмите на сыгранный матч, чтобы открыть отчёт.',
    tables: 'Таблицы лиг, национальные кубки, плей-офф и еврокубки.',
    stats: 'Статистика ваших игроков с сортировкой и лидеры всех лиг.',
    transfers: 'Найдите игрока и нажмите на него, чтобы начать переговоры. Суммы вводятся в миллионах €.',
    finance: 'Деньги клуба, зарплаты и все поступления и расходы.',
    club: 'Стадион, задача от руководства и ваша тренерская история.',
    inbox: 'Письма руководства и предложения за ваших игроков: их можно принять, отклонить или попросить больше.',
    menu: 'Сохранения карьеры, экспорт в файл и редактор базы.',
    news: 'Все трансферы, отставки и события футбольного мира.',
    coach: 'Ваша карьера: турниры и результаты по сезонам и итоги за всё время.',
    hall: 'Рекорды за всё время: бомбардиры и рекордсмены клубов и лиг, чемпионы по сезонам, рекордные трансферы, дерби.',
  };
  const TAB_ICONS = { home: 'home', squad: 'shirt', fixtures: 'calendar', tables: 'trophy', stats: 'chart', transfers: 'swap', finance: 'coin', club: 'shield', inbox: 'mail', news: 'news', coach: 'user', hall: 'star', menu: 'gear' };

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
    if (tab === 'tables') { UI.tablesView = sub || 'table'; if (sub === 'cup') UI.cupC = null; }
    if (tab === 'transfers' && sub) UI.tf.view = sub;
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    if (!document.querySelector('.fx-bg')) { const bg = document.createElement('div'); bg.className = 'fx-bg'; document.body.prepend(bg); }
    if (!UI.g) return startScreen();
    const G = g(), s = G.s, u = G.userTeam();
    applyTheme();
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
        <button class="next-btn" id="go">${s.seasonOver ? 'Новый сезон' : 'Далее'} <span>${icon('play')}</span></button>
      </div></header>
      <div class="strip"><div class="strip-in">
        <div class="when">Сезон ${seasonLabel(s)}<span class="hide-m"> · Неделя ${weekNo(s)} · ${FM.fmtDateWd(s.date)}</span></div>
        <div class="chips">
          <button class="chip" data-tab="squad" title="Травмированные игроки"><b class="cross">${icon('medic')}</b>${injured}</button>
          <button class="chip" data-tab="inbox" title="Непрочитанные письма">${icon('mail')} ${unread}</button>
          <button class="chip cash" data-tab="finance" title="Деньги клуба"><b>€</b>${FM.money(u.money).replace(' €', '')}</button>
        </div>
      </div></div>
      <nav class="mainnav">${NAV.map((id) => `<button data-tab="${id}" class="${UI.tab === id ? 'on' : ''}"><span class="ni">${icon(TAB_ICONS[id])}</span><span>${NAV_NAME[id] || esc(TABS.find((t) => t[0] === id)[1])}</span>${id === 'inbox' && unread ? `<span class="dot">${unread}</span>` : ''}</button>`).join('')}
        <button class="more" id="more"><span class="ni">${icon('dots')}</span><span>Ещё</span></button></nav>
      ${UI.tab !== 'home' ? `<div class="crumb"><button class="back" data-tab="home">‹</button><div><h1>${esc(title)}</h1>${TAB_HINTS[UI.tab] ? `<div class="crumb-hint">${TAB_HINTS[UI.tab]}</div>` : ''}</div></div>` : ''}
      <main id="main"></main>
      <div class="drawer hidden" id="drawer"><nav>
        <div class="drawer-head">${badge(u)}<div><b>${esc(u.name)}</b><div class="small muted">${esc(s.manager)} · ${esc(s.leagues[u.league].name)}</div></div><button class="dh-exit" data-exit title="Выйти в главное меню" aria-label="Выйти в главное меню">${icon('exit')}</button></div>
        ${TABS.map(([id, n]) => `<button data-tab="${id}" class="${UI.tab === id ? 'on' : ''}"><span class="di">${icon(TAB_ICONS[id])}</span>${esc(n)}${id === 'inbox' && unread ? `<span class="dot">${unread}</span>` : ''}</button>`).join('')}
        <div class="drawer-foot">
          <div class="small muted" id="as-status">${(() => { const m = localMeta(SAVE_AUTO); return m ? 'Автосохранение: ' + agoText(m.ts) : 'Автосохранение включено'; })()}</div>
          <button id="exit" class="drawer-exit" data-exit><span class="di">${icon('exit')}</span>Выйти в главное меню</button>
        </div>
      </nav></div>`;
    app.querySelectorAll('[data-exit]').forEach((b) => b.onclick = exitToMenu);
    const drawer = app.querySelector('#drawer');
    app.querySelector('#burger').onclick = () => drawer.classList.remove('hidden');
    app.querySelector('#more').onclick = () => drawer.classList.remove('hidden');
    drawer.onclick = (e) => { if (e.target === drawer) drawer.classList.add('hidden'); };
    app.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => go(b.dataset.tab));
    app.querySelector('#go').onclick = goOn;
    const main = app.querySelector('#main');
    ({ home: viewHome, squad: viewSquad, fixtures: viewFixtures, tables: viewTables, stats: viewStats, transfers: viewTransfers, finance: viewFinance, club: viewClub, inbox: viewInbox, news: viewNews, coach: viewCoach, hall: viewHall, menu: viewMenu })[UI.tab](main);
    if (same) window.scrollTo(0, scrollY);
    // при входе в раздел крупные числа «добегают» до значения
    if (!same) document.querySelectorAll('.band-big b, .tf-stat b').forEach((b) => { const m = b.textContent.match(/^([+\u2212-]?)([\d.]+)(.*)$/s); if (!m || b.children.length) return; const v = +m[2], d = (m[2].split('.')[1] || '').length; countUp(b, v, (x) => m[1] + x.toFixed(d) + m[3]); });
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
    if (r === 'awards') { save(); render(); return ceremonyModal(G.s.awards[G.s.awards.length - 1].year); }
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
    setTimeout(() => { const R = g().s.lastReview || null; const el = document.querySelector('.rv-trophies'); if (el) confetti(['#ffd166', '#ffffff', glow(g().userTeam())], 3500); }, 400);
    const G = g(), s = G.s;
    const R = G.seasonReview();
    const U = R.user, ut = T(U.team);
    const L = s.leagues;
    const medal = (i) => i < 3 ? icon('medal', ['gold', 'silver', 'bronze'][i]) : '';
    const score = (f) => (f ? `${esc(T(f.h).name)} ${f.hg}:${f.ag}${f.pens ? ` (пен. ${f.pens[0]}:${f.pens[1]})` : ''} ${esc(T(f.a).name)}` : '');
    const pl = (x, fmt) => (x ? `<span data-player="${x[0].id}" class="link">${esc(x[0].name)}</span> <span class="muted">${esc(T(x[0].club) ? T(x[0].club).name : '')}</span> <b>${fmt(x[1])}</b>` : '<span class="muted">—</span>');
    const verdict = U.pos === 1 ? 'Чемпионы!' : U.pos <= U.expect ? 'Задача выполнена' : 'Ниже ожиданий';
    const rec = U.coach.rec;
    const trophies = [];
    R.leagues.forEach((x) => { if (x.top[0].id === U.team) trophies.push(L[x.lid].name); });
    (R.cups || []).forEach((c) => { if (c.winner === U.team) trophies.push(c.name); });
    R.euro.forEach((e) => { if (e.winner === U.team) trophies.push(e.name); });
    const myMove = R.moves.find((m) => m.id === U.team);
    modal(`<div class="rv-hero" style="--tc:${glow(ut)}">
        <div class="rv-kicker">Итоги сезона ${R.year}/${String(R.year + 1).slice(2)}</div>
        <div class="rv-main">${badge(ut, 'xl')}<div class="grow"><h2>${esc(ut.name)}</h2>
          <div class="rv-place"><span class="rv-pos">${U.pos}</span><span>место · ${esc(L[U.league].name)}</span></div>
          <div class="rv-verdict ${U.pos <= U.expect ? 'good' : 'bad'}">${verdict}${myMove ? (myMove.up ? ' · повышение в классе!' : ' · вылет') : ''} <span class="muted">(задача — ${U.expect}-е место)</span></div></div></div>
        ${trophies.length ? `<div class="rv-trophies">${trophies.map((t) => `<span>${icon('trophyF', 'tro')} ${esc(t)}</span>`).join('')}</div>` : ''}
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
        ${(R.cups || []).map((c) => `<div class="rv-card gold">${badge(T(c.winner), 'lg')}<div><div class="rv-comp">${flag(c.c)} ${esc(c.name)}</div><b>${esc(T(c.winner).name)}</b><div class="small muted">${score(c.final)}</div></div></div>`).join('')}
        ${R.leagues.map((x) => `<div class="rv-card ${x.top[0].id === U.team ? 'mine' : ''}">${badge(T(x.top[0].id), 'lg')}<div class="grow"><div class="rv-comp">${esc(L[x.lid].name)}</div><b>${esc(T(x.top[0].id).name)}</b> <span class="muted small">${x.top[0].pts} очк.</span>
          <div class="small muted">${x.top.slice(1).map((r, i) => `${medal(i + 1)} ${esc(T(r.id).name)}`).join(' · ')}</div></div></div>`).join('')}
      </div>
      <h3>Лучшие игроки лиг</h3>
      <div class="card tight"><table class="rv-table"><tr><th>Лига</th><th>Бомбардир</th><th class="hide-m">Ассистент</th><th class="hide-m">Лучшая оценка</th></tr>
        ${R.leagues.map((x) => `<tr><td><b>${esc(L[x.lid].short)}</b></td><td>${pl(x.scorer, (v) => v)}</td><td class="hide-m">${pl(x.assist, (v) => v)}</td><td class="hide-m">${pl(x.best, (v) => v.toFixed(2))}</td></tr>`).join('')}</table></div>
      ${R.moves.length ? `<h3>Повышения и вылеты</h3><div class="rv-moves">
        <div><div class="rv-comp good">${icon('up')} Повышаются</div>${R.moves.filter((m) => m.up).map((m) => `<div class="mini">${badge(T(m.id), 'sm')}<span class="grow">${esc(T(m.id).name)}</span><span class="muted small">→ ${esc(L[m.to].short)}</span></div>`).join('')}</div>
        <div><div class="rv-comp bad">${icon('down')} Вылетают</div>${R.moves.filter((m) => !m.up).map((m) => `<div class="mini">${badge(T(m.id), 'sm')}<span class="grow">${esc(T(m.id).name)}</span><span class="muted small">→ ${esc(L[m.to].short)}</span></div>`).join('')}</div></div>` : ''}
      <div class="row" style="margin-top:16px"><button class="btn" data-close>Посмотреть таблицы и статистику</button><span class="grow"></span><button class="btn primary" id="rv-next">Начать новый сезон ${icon('play')}</button></div>
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
  const stars = (v) => `<span class="stars" style="--v:${v}" title="${v} из 5">${icon('starF').repeat(5)}<span class="stars-on">${icon('starF').repeat(5)}</span></span>`;
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
    const c = G.userCup();
    const inCup = c && !c.winner && c.alive.includes(u.id);

    // Заставка следующего матча в стиле телетрансляции: плашка турнира, крупные названия, время и стадион,
    // сравнение линий. Фон — наклонные полосы в цветах команд.
    let hero = `<section class="bc empty" data-go="fixtures"><div class="bc-head"><span class="comp-pill">Календарь</span></div><div class="muted">Матчей в календаре нет — сезон подходит к концу.</div></section>`;
    if (nm) {
      const h = T(nm.h), a = T(nm.a);
      const rh = lineRatings(h), ra = lineRatings(a);
      const row = (t) => G.s.leagues[t.league] ? G.table(t.league).find((r) => r.id === t.id) : null;
      const side = (t, away) => { const r = row(t); return `<div class="bc-team ${away ? 'away' : ''} ${t.name.length > 16 ? 'xlong' : t.name.length > 9 ? 'long' : ''}">${badge(t, 'xl')}<div class="bc-tn"><b data-team="${t.id}">${esc(t.name)}</b>
        <span>${r ? `${r.pos}-е место · ${r.pts} очк.` : esc(s.leagues[t.league].short)}</span><span class="form-s">${form(t.form.slice(-5))}</span></div></div>`; };
      const dRec = G.derbyOf(nm) ? G.derbyRecord(nm.h, nm.a) : null;
      const days = Math.round((FM.parseDate(nm.date) - FM.parseDate(s.date)) / 864e5);
      const duel = (label, x, y) => { const w = (v) => FM.clamp((v - 40) * 2.2, 6, 100); return `<div class="bc-duel"><b>${x}</b><div class="bc-bar l"><i style="width:${w(x)}%"></i></div><span>${label}</span><div class="bc-bar r"><i style="width:${w(y)}%"></i></div><b>${y}</b></div>`; };
      hero = `<section class="bc" data-go="fixtures" style="--hcb:${glow(h)};--acb:${glow(a)}">
        <div class="bc-head"><span class="comp-pill">${esc(compName(nm.comp))}${roundText(nm) ? ` · ${esc(roundText(nm))}` : ''}</span>${bigTag(nm)}${dRec ? `<span class="small muted">личные встречи ${dRec[0]}–${dRec[1]}–${dRec[2]}</span>` : ''}</div>
        <div class="bc-vs">${side(h)}
          <div class="bc-kick"><span class="bc-when">${days === 0 ? 'сегодня' : days === 1 ? 'завтра' : esc(FM.fmtDateWd(nm.date))}</span><span class="bc-v">VS</span><span class="bc-where">${nm.neutral ? 'нейтральное поле' : esc(h.stadium || '')}</span></div>
          ${side(a, true)}</div>
        <div class="bc-duels">${duel('Защита', rh.def, ra.def)}${duel('Полузащита', rh.mid, ra.mid)}${duel('Атака', rh.att, ra.att)}</div>
      </section>`;
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
    if (c) cupRows.push(`<div class="kvl"><span>${esc(c.name)}</span><b>${c.winner ? (c.winner === u.id ? `${icon('trophyF', 'tro')} победа!` : `победил ${esc(T(c.winner).name)}`) : inCup ? esc(c.rounds[c.cur].name) : 'выбыли'}</b></div>`);
    if (euroMine) {
      const e = s.euro[euroMine.id];
      let st;
      if (e.winner) st = e.winner === u.id ? `${icon('trophyF', 'tro')} победа!` : `победил ${esc(T(e.winner).name)}`;
      else if (e.phase === 'league') st = `${G.euroTable(euroMine.id).find((r) => r.id === u.id).pos}-е место`;
      else { const R = e.ko[e.ko.length - 1]; st = e.final ? 'финал' : R ? esc(R.name) : ''; }
      cupRows.push(`<div class="kvl"><span>${esc(euroMine.name)}</span><b>${st}</b></div>`);
    }
    // плитки разделов в стиле меню FC: крупная иконка, название и живая подпись
    const inj = sq.filter((p) => p.inj || p.sus).length;
    const unread = s.inbox.filter((x) => !x.read).length;
    const winOpen = G.inWindow();
    const hub = [
      ['squad', 'shirt', 'Состав', `${sq.length} игроков${inj ? ` · ${inj} не готовы` : ''} · ${u.formation}`, 'c1'],
      ['transfers', 'swap', 'Трансферы', winOpen ? `окно открыто · ${FM.money(u.money)}` : esc(G.windowText()), winOpen ? 'c2 live' : 'c2'],
      ['tables', 'trophy', 'Турниры', `${myRow.pos}-е место · ${myRow.pts} очк.`, 'c3'],
      ['stats', 'chart', 'Статистика', leaders[0] ? `${leaders[0][1].toLowerCase()}: ${esc(leaders[0][2].p.name.split(' ').slice(-1)[0])} · ${leaders[0][2].v}` : 'игроки и лидеры лиг', 'c4'],
      ['inbox', 'mail', 'Почта', unread ? `${unread} новых` : 'новых писем нет', unread ? 'c5 live' : 'c5'],
      ['club', 'shield', 'Клуб', `доверие ${conf}%`, 'c6'],
    ];
    const hubHtml = `<div class="hub">${hub.map(([tab, ic, nm, sub, cls]) => `<button class="hub-t ${cls}" data-go="${tab}"><span class="hub-ic">${icon(ic)}</span><b>${nm}</b><span class="hub-sub">${sub}</span><span class="hub-arrow">›</span></button>`).join('')}</div>`;
    main.innerHTML = `${s.seasonOver ? '' : hero}${hubHtml}<div class="dash dash-a">
      ${s.seasonOver ? `<section class="tile w2 season-over" data-go="review"><header><span class="hic">${icon('trophy')}</span><span class="tt">Сезон ${seasonLabel(s)} завершён</span><span class="chev">›</span></header>
        <div class="tb"><div>Посмотрите итоги: чемпионы, кубки, лучшие игроки. Таблицы и статистика сезона ещё доступны.</div>
        <div class="row" style="margin-top:10px"><button class="btn primary" id="rv-open">Итоги сезона</button><span class="small muted">Новый сезон — кнопкой «Новый сезон» вверху</span></div></div></section>` : ''}
      ${tile(esc(L.name), 'tables', tab.slice(0, 5).concat(myRow.pos > 5 ? [myRow] : []).map((r) => `<div class="mini ${r.id === u.id ? 'me' : ''}"><span class="pos-n">${r.pos}</span>${badge(T(r.id), 'sm')}<span class="grow ell">${esc(T(r.id).name)}</span><span class="hide-m">${form(r.form)}</span><b>${r.pts}</b></div>`).join(''), '', 'trophy')}
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
    main.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', (e) => { if (e.target.closest('[data-team],[data-player]')) return; go(el.dataset.go); }));
  }

  // матч своей команды в списках туров, кубков, еврокубков и плей-офф выделяется
  const mineCls = (m) => (m.h === g().s.user || m.a === g().s.user ? 'mine' : '');
  function resultLine(m, uid) {
    const h = T(m.h), a = T(m.a);
    let cls = '';
    if (uid) {
      const my = m.h === uid ? m.hg : m.ag, op = m.h === uid ? m.ag : m.hg;
      cls = my > op ? 'W' : my < op ? 'L' : 'D';
      if (m.winner && my === op) cls = m.winner === uid ? 'W' : 'L';
    }
    return `<div class="list-item ${uid ? "" : mineCls(m)}" data-match="${m.id}" style="cursor:pointer"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span>
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
    // игрок не может быть одновременно в основе и на скамейке (и дважды в одном списке)
    u.lineup = u.lineup.map((id, i, a) => (id && a.indexOf(id) === i ? id : null));
    u.bench = u.bench.filter((id, i, a) => id && !u.lineup.includes(id) && a.indexOf(id) === i);
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
                <div class="shirt kit">${kitSvg(u, sp === 'GK', !p)}<span class="kit-ovr ln-${FM.lineOf(sp, u.formation)}">${p ? p.ovr : '+'}</span></div>
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
      // скамейка — из тех, кто не попал в основу (раньше она не обновлялась, и игроки оказывались в обоих списках)
      const xi = new Set(u.lineup.filter(Boolean));
      u.bench = old.filter(Boolean).concat(u.bench).filter((id, i, a) => !xi.has(id) && a.indexOf(id) === i).slice(0, 9);
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
        return `<tr class="${m.played ? 'click' : ''}" ${m.played ? `data-match="${m.id}"` : ''}><td>${FM.fmtDateWd(m.date)}</td><td class="small muted">${esc(compName(m.comp))}${roundText(m) ? ` · ${esc(roundText(m))}` : ''} ${bigTag(m)}</td>
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
    else if (view === 'awards') body = awardsView();
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
      <div class="card tight"><div class="tbl-wrap"><table class="lt">
        <tr><th>#</th><th>Клуб</th><th class="num">И</th><th class="num">В</th><th class="num">Н</th><th class="num">П</th><th class="num">Мячи</th><th class="num">О</th><th class="hide-m">Форма</th></tr>
        ${tab.map((r) => `<tr class="${r.id === u.id ? 'me' : ''}"><td class="num"><span class="zone ${z[r.pos] || ''}"></span>${r.pos}</td><td>${tname(T(r.id))}</td><td class="num">${r.p}</td><td class="num">${r.w}</td><td class="num">${r.d}</td><td class="num">${r.l}</td><td class="num">${r.gf}–${r.ga}</td><td class="num"><b>${r.pts}</b></td><td class="hide-m">${form(r.form)}</td></tr>`).join('')}
      </table></div>
      <div class="small muted" style="padding:10px">${(() => { const zs = new Set(Object.values(z)); const ep = L.tier === 1 ? G.euroPlaces(G.countryOf(lid)) : null;
        const cupNote = ep && ep.cupTo ? ` · ещё одна путёвка в ${euroOf(ep.cupTo).short} — у обладателя кубка` : '';
        return [['champ', 'чемпион'], ['ucl', 'Лига чемпионов'], ['uel', 'Лига Европы'], ['uecl', 'Лига конференций'], ['up', 'повышение'], ['po', 'плей-офф / стыки за выход'], ['po_down', 'стыки'], ['down', 'вылет']].filter(([k]) => zs.has(k)).map(([k, n]) => `<span class="zone ${k}"></span>${n}`).join(' &nbsp; ') + cupNote; })()}${L.teams.some((id) => T(id).reserveOf) ? ' · резервные команды не повышаются в классе' : ''}</div></div>
      <div class="card"><div class="row" style="margin-bottom:8px"><button class="btn sm" id="rp">‹</button><b class="grow center">${cur}-й тур · ${roundDates(L.rounds[cur - 1])}</b><button class="btn sm" id="rn">›</button></div>
        ${L.rounds[cur - 1].map((id) => { const m = s.matches[id]; return m.played ? resultLine(m, null) : `<div class="list-item ${mineCls(m)}"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; }).join('')}</div></div>`;
      UI.round = cur;
    }
    main.innerHTML = `<div class="row" style="margin-bottom:10px"><div class="seg"><button data-v="table" class="${view === 'table' ? 'on' : ''}">Чемпионаты</button>
      <button data-v="cup" class="${view === 'cup' ? 'on' : ''}">Кубок</button>${s.playoff && s.playoff.ties.length ? `<button data-v="po" class="${view === 'po' ? 'on' : ''}">Плей-офф</button>` : ''}
      ${FM.EURO.filter((E) => s.euro && s.euro[E.id]).map((E) => `<button data-v="${E.id}" class="${view === E.id ? 'on' : ''}">${E.short}</button>`).join('')}<button data-v="awards" class="${view === 'awards' ? 'on' : ''}">Награды</button></div></div>
      ${view === 'table' ? leaguePick(s.order.map((id) => s.leagues[id]), lid) : ''}${body}`;
    main.querySelectorAll('[data-lid]').forEach((b) => b.onclick = () => { UI.tablesLid = b.dataset.lid; UI.tablesView = 'table'; UI.round = null; render(); });
    main.querySelectorAll('[data-v]').forEach((b) => b.onclick = () => { UI.tablesView = b.dataset.v; render(); });
    main.querySelectorAll('[data-cupc]').forEach((b) => b.onclick = () => { UI.cupC = b.dataset.cupc; render(); });
    main.querySelectorAll('[data-cer]').forEach((b) => b.onclick = () => ceremonyModal(+b.dataset.cer));
    const rp = main.querySelector('#rp'), rn = main.querySelector('#rn');
    if (rp) rp.onclick = () => { UI.roundPin = { lid, date: s.date, round: Math.max(1, UI.round - 1) }; render(); };
    if (rn) rn.onclick = () => { UI.roundPin = { lid, date: s.date, round: Math.min(L.rounds.length, UI.round + 1) }; render(); };
    const ep = main.querySelector('#ep'), en = main.querySelector('#en');
    if (ep) ep.onclick = () => { UI.euroPin = Object.assign(UI.euroPin || {}, { [view]: { date: s.date, md: Math.max(1, UI.euroMd[view] - 1) } }); render(); };
    if (en) en.onclick = () => { UI.euroPin = Object.assign(UI.euroPin || {}, { [view]: { date: s.date, md: Math.min(8, UI.euroMd[view] + 1) } }); render(); };
  }

  function cupView() {
    const G = g(), s = G.s;
    const list = Object.keys(s.cups);
    if (!list.length) return '<div class="card muted">Кубков в этом сезоне нет.</div>';
    // по умолчанию — кубок страны, чья лига открыта в таблицах (или страны вашего клуба)
    const def = G.countryOf(UI.tablesLid || G.userTeam().league);
    const cc = list.includes(UI.cupC) ? UI.cupC : list.includes(def) ? def : list[0];
    const c = s.cups[cc];
    const pick = `<div class="lpick"><div class="lp-c">${list.map((k) => `<button data-cupc="${k}" class="${k === cc ? 'on' : ''}" title="${esc(s.cups[k].name)}">${flag(k)}<span>${esc(FM.NAT[k] || k)}</span></button>`).join('')}</div></div>`;
    const line = (id) => {
      const m = s.matches[id];
      return m.played ? resultLine(m, null) : `<div class="list-item ${mineCls(m)}"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`;
    };
    return `${pick}<h3 style="margin:4px 0 12px">${flag(cc)} ${esc(c.name)}${c.winner ? ` · ${icon('trophyF', 'tro')} ${esc(T(c.winner).name)}` : ''}</h3>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(min(400px,100%),1fr))">${c.rounds.map((R, i) => `<div class="card"><h3>${esc(R.name)} · ${FM.fmtDate(R.date)}</h3>
      ${R.matches.length ? R.matches.map(line).join('') : `<div class="muted small">${i === 1 && c.byes.length ? `С этой стадии стартуют: ${c.byes.map((id) => esc(T(id).name)).join(', ')}` : 'Жеребьёвка после предыдущего раунда'}</div>`}
      ${i === c.rounds.length - 1 && c.winner ? `<div class="note">${icon('trophyF', 'tro')} ${esc(T(c.winner).name)}</div>` : ''}</div>`).join('')}</div>`;
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
    const line = (mid) => { const m = s.matches[mid]; return m.played ? resultLine(m, null) : `<div class="list-item ${mineCls(m)}"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; };
    const ko = e.ko.map((R) => `<div class="card"><h3>${esc(R.name)}</h3>${R.ties.map((t) => `${t.legs.map(line).join('')}${t.winner ? `<div class="small muted" style="margin:-2px 0 8px">Дальше: <b class="good">${esc(T(t.winner).name)}</b></div>` : ''}`).join('')}</div>`).join('');
    const fin = e.final ? `<div class="card"><h3>Финал · ${esc(T(s.matches[e.final].h).name)} — ${esc(T(s.matches[e.final].a).name)}</h3>${line(e.final)}${e.winner ? `<div class="note">${icon('trophyF', 'tro')} ${esc(T(e.winner).name)}</div>` : ''}</div>` : '';
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
      ${tie.legs.map((id) => { const m = s.matches[id]; return m.played ? resultLine(m, null) : `<div class="list-item ${mineCls(m)}"><span class="small muted" style="width:56px">${FM.fmtDate(m.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow right">${esc(T(m.h).name)}</span><span class="score">–:–</span><span class="grow">${esc(T(m.a).name)}</span></div>`; }).join('')}
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
      ${(() => { const top = rows.filter(([, t]) => t[key] > 0).slice(0, 3); const lbl = (cols.find((c) => c[0] === key) || ['', ''])[1].toLowerCase();
        return top.length ? `<div class="podium">${top.map(([p, t], i) => `<div class="pod p${i + 1}"><span class="pod-n">${i + 1}</span>${futMini(p, null, [[key === 'r' ? t.r.toFixed(2) : t[key], esc(lbl)]])}</div>`).join('')}</div>` : ''; })()}
      <div class="sortbar">${cols.filter(([k]) => ['apps', 'g', 'a', 'r', 'cs'].includes(k)).map(([k, n]) => `<button data-ts="${k}" class="${k === key ? 'on' : ''}">${n}</button>`).join('')}</div>
      <div class="card tight"><div class="tbl-wrap"><table class="ts"><tr><th>#</th><th>Поз</th><th>Игрок</th>${cols.map(([k, n, sh]) => `<th class="num sort ${k === key ? 'on' : ''} ${hideM.has(k) ? 'hide-m' : ''}" data-ts="${k}" title="${n}">${sh}${k === key ? ' ' + icon('chevDown', 'sm') : ''}</th>`).join('')}</tr>
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
      ${rows.length ? `<div class="podium">${rows.slice(0, 3).map(([p, v], i) => `<div class="pod p${i + 1}"><span class="pod-n">${i + 1}</span>${futMini(p, null, [[key === 'rating' ? v.toFixed(2) : v, { g: 'голов', a: 'передач', rating: 'оценка', yc: 'жёлтых', cs: 'сухих' }[key]]])}</div>`).join('')}</div>` : ''}
      <div class="card tight"><table class="lt"><tr><th>#</th><th>Игрок</th><th>Клуб</th><th class="num">И</th><th class="num">${{ g: 'Голы', a: 'Пас', rating: 'Оценка', yc: 'ЖК', cs: 'Сухие' }[key]}</th></tr>
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
  // Трансферный центр: шапка с окном и бюджетом, быстрые подборки, фильтры сбоку, результаты списком или карточками;
  // «Мои игроки» — состав с контрактами и действиями; «Переходы» — лента сделок.
  const TF_PRESETS = [
    ['all', 'Все', {}], ['stars', 'Звёзды 85+', { minOvr: 85 }], ['young', 'Таланты до 21', { maxAge: 21, young: true }],
    ['afford', 'По карману', { afford: true }], ['free', 'Свободные агенты', { league: 'free' }], ['exp', 'Контракт истекает', { expiring: true }], ['listed', 'Выставлены на продажу', { listed: true }],
  ];
  function viewTransfers(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const f = UI.tf;
    const view = f.view || 'search';
    const w = s.window, open = G.inWindow();
    const end = s.date <= w.to ? w.to : w.to2;
    const daysLeft = open ? Math.round((FM.parseDate(end) - FM.parseDate(s.date)) / 864e5) : null;
    const wages = G.wageBill(u), room = Math.round((u.sponsor - wages) * 10) / 10;
    const n = u.players.length;
    const head = `<div class="band tf-band" style="--hcb:${glow(u)}">
        <div class="tf-win ${open ? 'on' : ''}"><span class="label">Трансферное окно</span><b>${open ? `открыто · ${daysLeft} дн.` : 'закрыто'}</b><span class="small muted">${esc(G.windowText())}</span></div>
        <div class="band-big"><span class="label">Бюджет</span><b class="${u.money < 0 ? 'bad' : ''}">${FM.money(u.money)}</b></div>
        <div class="band-big"><span class="label">Запас по зарплатам</span><b class="${room < 0 ? 'bad' : 'good'}">${room >= 0 ? '+' : ''}${FM.money(room)}<small>/нед</small></b></div>
        <div class="band-meter"><span class="label">Заявка — ${n} из 32</span><div class="meter"><i class="${n >= 32 ? 'bad' : n >= 30 ? 'warn' : 'good'}" style="width:${Math.min(100, (n / 32) * 100)}%"></i></div></div>
      </div>
      <div class="seg tf-tabs">${[['search', 'Поиск игроков'], ['mine', 'Мой состав'], ['log', 'Лента переходов']].map(([v, nm]) => `<button data-view="${v}" class="${view === v ? 'on' : ''}">${nm}</button>`).join('')}</div>`;
    let body = '';
    if (view === 'search') {
      const preset = f.preset || 'all';
      let list = Object.values(G.players).filter((p) => p.club !== u.id);
      if (f.name) list = list.filter((p) => p.name.toLowerCase().includes(f.name.toLowerCase()));
      const posSel = [].concat(f.pos || []);
      if (posSel.length) list = list.filter((p) => posSel.includes(p.pos));
      if (f.league === 'free') list = list.filter((p) => !p.club);
      else if (f.league) list = list.filter((p) => p.club && T(p.club).league === f.league);
      if (f.maxPrice) list = list.filter((p) => p.value <= f.maxPrice * 1000);
      if (f.minOvr) list = list.filter((p) => p.ovr >= f.minOvr);
      if (f.maxAge) list = list.filter((p) => p.age <= f.maxAge);
      if (f.listed) list = list.filter((p) => p.listed);
      if (f.realOnly) list = list.filter((p) => !p.gen);
      if (f.expiring) list = list.filter((p) => p.club && p.contract <= s.season && !p.pre);
      if (f.afford) list = list.filter((p) => p.value <= Math.max(0, u.money));
      if (f.young) list = list.filter((p) => p.pot - p.ovr >= 6);
      const k = UI.sortKey, d = UI.sortDir;
      list.sort((a, b) => (k === 'name' ? a.name.localeCompare(b.name) * -d : (a[k] - b[k]) * d));
      const page = UI.tfPage, per = 48;
      const shown = list.slice(page * per, page * per + per);
      const winter = s.date >= `${s.season + 1}-01-01`;
      const th = (key, nm, cls = 'num') => `<th class="sort ${cls}" data-sort="${key}">${nm}${UI.sortKey === key ? ' ' + icon(UI.sortDir < 0 ? 'chevDown' : 'chevUp', 'sm') : ''}</th>`;
      const sh = (key, nm) => `<button class="tf-sort ${UI.sortKey === key ? 'on' : ''}" data-sort="${key}">${nm}${UI.sortKey === key ? ' ' + icon(UI.sortDir < 0 ? 'chevDown' : 'chevUp', 'sm') : ''}</button>`;
      const sortBtns = [['ovr', 'Рейтинг'], ['value', 'Цена'], ['age', 'Возраст'], ['pot', 'Потенциал']].map(([key, nm]) => `<button data-sort="${key}" class="${UI.sortKey === key ? 'on' : ''}">${nm}${UI.sortKey === key ? ' ' + icon(UI.sortDir < 0 ? 'chevDown' : 'chevUp', 'sm') : ''}</button>`).join('');
      const potBar = (p) => `<span class="potbar" title="Потенциал: ${G.potLabel(p)}"><i style="width:${FM.clamp((p.ovr - 40) * 1.8, 4, 100)}%"></i><i class="room" style="width:${FM.clamp((p.pot - p.ovr) * 1.8, 0, 60)}%"></i></span>`;
      const rowTags = (p) => (p.pre ? '<span class="tag">предв. контракт</span>' : '') + (!p.pre && p.club && p.contract <= s.season ? `<span class="tag free">${winter ? 'бесплатно летом' : 'контракт до лета'}</span>` : '') + (p.listed ? '<span class="tag warn">на продаже</span>' : '') + (!p.club ? '<span class="tag free">свободен</span>' : '');
      const rows = shown.map((p) => `<div class="tf-row" data-player="${p.id}" style="--kc:${p.club ? glow(T(p.club)) : 'transparent'}">
          <span class="tf-kit">${kitSvg(p.club ? T(p.club) : { colors: ['#3a4256', '#8f9bcc'] }, p.pos === 'GK')}</span>${pos(p.pos)}<div class="tf-who">${flag(p.nat)}<b>${esc(p.name)}</b>${p.gen ? '<span class="gen">*</span>' : ''}${status(p)}<div class="tf-tags">${rowTags(p)}</div></div>
          <div class="tf-club">${p.club ? tname(T(p.club)) : '<span class="muted small">без клуба</span>'}</div>
          <span class="tf-age">${p.age}<small>лет</small></span>${ovr(p.ovr)}${potBar(p)}<span class="tf-val">${FM.money(p.value)}</span></div>`).join('');
      body = `      <div class="tf-layout">
        <aside class="card tf-filters ${UI.tfFiltersOpen ? 'open' : ''}">
          <h3 id="tf-ftoggle">Фильтры <span class="tf-fcount">${['name', 'league', 'maxPrice', 'minOvr', 'maxAge', 'listed', 'expiring', 'realOnly'].filter((key) => f[key]).length + [].concat(f.pos || []).length || ''}</span><span class="tf-fchev">${icon('chevDown')}</span></h3>
          <label>Имя<input id="f-name" placeholder="Например, Кисляк" value="${esc(f.name || '')}"></label>
          <div><span class="tf-lbl">Позиции</span><div class="pos-pick">${FM.POS.map((p) => `<button class="pos-chip ${[].concat(f.pos || []).includes(p) ? 'on' : ''}" data-fpos="${p}" title="${FM.POS_NAME[p]}">${pos(p)}</button>`).join('')}</div></div>
          <label>Лига<select id="f-league"><option value="">Все лиги</option>${[...new Set(s.order.map((id) => G.countryOf(id)))].map((c) => `<optgroup label="${esc(FM.NAT[c] || c)}">${s.order.filter((id) => G.countryOf(id) === c).map((id) => `<option value="${id}" ${f.league === id ? 'selected' : ''}>${esc(s.leagues[id].name)}</option>`).join('')}</optgroup>`).join('')}<option value="free" ${f.league === 'free' ? 'selected' : ''}>Свободные агенты</option></select></label>
          <div class="tf-pair"><label>Рейтинг от<input id="f-ovr" type="number" value="${f.minOvr || ''}"></label><label>Возраст до<input id="f-age" type="number" value="${f.maxAge || ''}"></label></div>
          <label>Цена до, млн €<input id="f-price" type="number" step="0.1" value="${f.maxPrice || ''}"></label>
          <label class="check"><input type="checkbox" id="f-listed" ${f.listed ? 'checked' : ''}> выставлены на продажу</label>
          <label class="check"><input type="checkbox" id="f-exp" ${f.expiring ? 'checked' : ''}> контракт истекает летом</label>
          <label class="check"><input type="checkbox" id="f-real" ${f.realOnly ? 'checked' : ''}> только реальные игроки</label>
          <button class="btn sm" id="f-reset" ${Object.keys(f).some((key) => !['view', 'preset'].includes(key) && f[key] != null && f[key] !== '' && f[key] !== false && !(Array.isArray(f[key]) && !f[key].length)) ? '' : 'disabled'}>Сбросить фильтры</button>
          <div class="small muted">${winter ? 'Сейчас можно подписывать <b>предварительные контракты</b> с игроками, у которых летом истекает контракт.' : 'С 1 января можно подписывать предварительные контракты с игроками, у которых летом истекает контракт.'}</div>
        </aside>
        <div class="tf-results">
          <div class="tf-bar"><span class="tf-found"><b>${list.length.toLocaleString('ru-RU')}</b> игроков</span><span class="grow"></span>
            <div class="seg sm"><button id="tf-list" class="${UI.tfCards ? '' : 'on'}">Список</button><button id="tf-cards" class="${UI.tfCards ? 'on' : ''}">Карточки</button></div></div>
          ${UI.tfCards ? `<div class="card tight"><div class="fut-grid">${shown.map((p) => futMini(p, p.club ? esc(T(p.club).name) : 'свободный агент', [[FM.money(p.value), `цена · потенциал ${G.potLabel(p)}`]])).join('')}</div></div>` : `<div class="card tight"><div class="tbl-wrap"><table class="lt tf-table"><tr><th></th>${th('name', 'Игрок', '')}<th>Клуб</th>${th('age', 'Возр')}${th('ovr', 'Рейт')}${th('pot', 'Потенциал')}${th('value', 'Цена')}</tr>
            ${shown.map((p) => `<tr class="click" data-player="${p.id}"><td>${pos(p.pos)}</td><td>${flag(p.nat)}${esc(p.name)}${p.gen ? '<span class="gen">*</span>' : ''}${status(p)} ${rowTags(p)}</td><td>${p.club ? tname(T(p.club)) : '<span class="muted">свободный агент</span>'}</td><td class="num">${p.age}</td><td class="num">${ovr(p.ovr)}</td><td class="num small">${G.potLabel(p)}</td><td class="num"><b>${FM.money(p.value)}</b></td></tr>`).join('') || '<tr><td colspan="7" class="muted">Никого не нашли — ослабьте фильтры.</td></tr>'}</table></div></div>`}
          <div class="row tf-pages"><button class="btn sm" id="pp" ${page ? '' : 'disabled'}>‹ Назад</button><span class="small">${page + 1} / ${Math.max(1, Math.ceil(list.length / per))}</span><button class="btn sm" id="pn" ${(page + 1) * per < list.length ? '' : 'disabled'}>Дальше ›</button></div>
        </div>
      </div>`;
    } else if (view === 'mine') {
      const sq = G.squad(u).sort((a, b) => FM.POS.indexOf(a.pos) - FM.POS.indexOf(b.pos) || b.ovr - a.ovr);
      const expiring = sq.filter((p) => p.contract <= s.season && !p.loan);
      const listed = sq.filter((p) => p.listed);
      const out = (s.loans || []).map((id) => G.players[id]).filter((p) => p && p.loan && p.loan.from === u.id);
      const inc = Object.values(G.players).filter((p) => p.pre && p.pre.team === u.id);
      const chip = (n, t, cls) => `<div class="tf-stat ${cls || ''}"><b>${n}</b><span>${t}</span></div>`;
      const mrow = (p) => `<div class="tf-row mine">${pos(p.pos)}<div class="tf-who" data-player="${p.id}">${flag(p.nat)}<b>${esc(p.name)}</b>${status(p)}</div>
          <span class="tf-age">${p.age}<small>лет</small></span>${ovr(p.ovr)}<span class="tf-val">${FM.money(p.value)}</span><span class="tf-wage">${FM.money(p.wage)}<small>/нед</small></span>
          <span class="tf-cont ${p.contract <= s.season ? 'bad' : ''}">до ${p.contract + 1}</span>
          ${p.loan ? '<span class="small muted">аренда</span>' : `<button class="btn sm ${p.listed ? 'on' : ''}" data-list="${p.id}">${p.listed ? 'На продаже' : 'Продать'}</button>`}</div>`;
      body = `<div class="tf-stats">${chip(sq.length, 'в заявке')}${chip(FM.money(G.squadValue(u)), 'стоимость состава')}${chip(expiring.length, 'контракт истекает летом', expiring.length ? 'warn' : '')}${chip(listed.length, 'выставлены на продажу')}${chip(out.length, 'в аренде')}${chip(inc.length, 'придут летом', inc.length ? 'good' : '')}</div>
        <div class="card tight tf-list">${sq.map(mrow).join('')}</div>
        ${out.length ? `<div class="card tight tf-list" style="margin-top:12px"><h3>В аренде в других клубах</h3>${out.map((p) => `<div class="tf-row" data-player="${p.id}">${pos(p.pos)}<div class="tf-who">${flag(p.nat)}<b>${esc(p.name)}</b></div><div class="tf-club">${tname(T(p.club))}</div><span class="tf-age">${p.age}<small>лет</small></span>${ovr(p.ovr)}<span class="tf-val">${p.st.apps} игр · ${p.st.g} г</span></div>`).join('')}</div>` : ''}
        ${inc.length ? `<div class="card tight tf-list" style="margin-top:12px"><h3>Присоединятся летом</h3>${inc.map((p) => `<div class="tf-row" data-player="${p.id}">${pos(p.pos)}<div class="tf-who">${flag(p.nat)}<b>${esc(p.name)}</b></div><div class="tf-club">${p.club ? tname(T(p.club)) : ''}</div><span class="tf-age">${p.age}<small>лет</small></span>${ovr(p.ovr)}<span class="tf-val">бесплатно</span></div>`).join('')}</div>` : ''}`;
    } else {
      const lf = f.logFilter || 'all';
      let log = s.seasonLog;
      if (lf === 'mine') log = log.filter((x) => x.from === u.id || x.to === u.id);
      if (lf === 'big') log = log.filter((x) => x.fee >= 20000).sort((a, b) => b.fee - a.fee);
      if (lf === 'league') log = log.filter((x) => (x.from && T(x.from) && T(x.from).league === u.league) || (T(x.to) && T(x.to).league === u.league));
      body = `<div class="seg sm" style="margin-bottom:12px">${[['all', 'Все'], ['big', 'Крупные (от 20 млн)'], ['league', 'Моя лига'], ['mine', 'Мой клуб']].map(([key, nm]) => `<button data-lf="${key}" class="${lf === key ? 'on' : ''}">${nm}</button>`).join('')}</div>
        <div class="tf-feed">${log.slice(0, 150).map((x) => { const p = G.players[x.pid]; const mine = x.from === u.id || x.to === u.id;
          return `<div class="tf-deal ${mine ? 'mine' : ''}"><span class="tf-date">${FM.fmtDate(x.date).replace(/ (\S{3})\S*$/, ' $1')}</span>
            <div class="tf-dp">${p ? pos(p.pos) : ''}<b ${p ? `data-player="${p.id}"` : ''}>${esc(x.name)}</b>${p ? `<span class="small muted">${p.age} лет · ${p.ovr}</span>` : ''}</div>
            <div class="tf-route">${x.from && T(x.from) ? `${badge(T(x.from), 'sm')}<span class="ell">${esc(T(x.from).name)}</span>` : '<span class="muted small">свободный агент</span>'}<span class="tf-arrow">→</span>${badge(T(x.to), 'sm')}<span class="ell">${esc(T(x.to).name)}</span></div>
            <span class="tf-fee ${x.loan ? 'loan' : x.fee ? '' : 'free'}">${x.loan ? 'аренда' : x.fee ? FM.money(x.fee) : 'бесплатно'}</span></div>`; }).join('') || '<div class="card muted" style="padding:14px">Сделок пока нет.</div>'}</div>`;
    }
    main.innerHTML = head + body;
    main.querySelectorAll('[data-view]').forEach((b) => b.onclick = () => { f.view = b.dataset.view; render(); });
    main.querySelectorAll('[data-lf]').forEach((b) => b.onclick = () => { f.logFilter = b.dataset.lf; render(); });
    main.querySelectorAll('[data-preset]').forEach((b) => b.onclick = () => {
      const pr = TF_PRESETS.find((x) => x[0] === b.dataset.preset);
      UI.tf = Object.assign({ view: f.view, preset: pr[0] }, pr[2]);
      if (pr[0] === 'stars' || pr[0] === 'young') { UI.sortKey = pr[0] === 'young' ? 'pot' : 'ovr'; UI.sortDir = -1; }
      UI.tfPage = 0; render();
    });
    const tl = main.querySelector('#tf-list'), tc = main.querySelector('#tf-cards');
    if (tl) tl.onclick = () => { UI.tfCards = false; render(); };
    if (tc) tc.onclick = () => { UI.tfCards = true; render(); };
    main.querySelectorAll('[data-sort]').forEach((b) => b.onclick = () => {
      if (UI.sortKey === b.dataset.sort) UI.sortDir *= -1; else { UI.sortKey = b.dataset.sort; UI.sortDir = b.dataset.sort === 'age' ? 1 : -1; }
      render();
    });
    const bindF = (id, key, num, scale) => {
      const el = main.querySelector(id);
      if (!el) return;
      el.onchange = () => {
        const v = el.type === 'checkbox' ? el.checked : el.value;
        f[key] = num ? (v === '' ? null : +v * (scale || 1)) : v;
        f.preset = null;
        UI.tfPage = 0;
        render();
      };
    };
    main.querySelectorAll('[data-fpos]').forEach((b) => b.onclick = () => {
      const cur = [].concat(f.pos || []), k = b.dataset.fpos;
      f.pos = cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k);
      UI.tfPage = 0;
      render();
    });
    const rs = main.querySelector('#f-reset');
    if (rs) rs.onclick = () => { UI.tf = { view: f.view }; UI.tfPage = 0; render(); };
    const ft = main.querySelector('#tf-ftoggle');
    if (ft) ft.onclick = () => { UI.tfFiltersOpen = !UI.tfFiltersOpen; main.querySelector('.tf-filters').classList.toggle('open', UI.tfFiltersOpen); };
    bindF('#f-name', 'name'); bindF('#f-league', 'league'); bindF('#f-price', 'maxPrice', true);
    bindF('#f-ovr', 'minOvr', true); bindF('#f-age', 'maxAge', true); bindF('#f-listed', 'listed'); bindF('#f-real', 'realOnly'); bindF('#f-exp', 'expiring');
    const pp = main.querySelector('#pp'), pn = main.querySelector('#pn');
    if (pp) pp.onclick = () => { UI.tfPage--; render(); window.scrollTo(0, 0); };
    if (pn) pn.onclick = () => { UI.tfPage++; render(); window.scrollTo(0, 0); };
    main.querySelectorAll('[data-list]').forEach((b) => b.onclick = (e) => { e.stopPropagation(); const p = P(+b.dataset.list); p.listed = !p.listed; render(); });
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
    const el = modal(`<div class="pl-head">${futCard(p)}<div class="pl-info"><h2 style="margin:0">${flag(p.nat, 'lg')}${esc(p.name)}${p.gen ? ' <span class="gen" title="Сгенерированный игрок">*</span>' : ''}</h2>
      <div class="muted">${FM.POS_NAME[p.pos]}${(p.alt || []).length ? ` <span class="alt-pos">также: ${p.alt.map((a) => FM.POS_RU[a]).join(', ')}</span>` : ''} · ${p.age} лет</div>
      <div>${club ? tname(club) : '<span class="muted">Свободный агент</span>'}</div>
      <div class="kv">
        <div><span>Стоимость</span><b>${FM.money(p.value)}</b></div>
        <div><span>Потенциал</span><b>${G.potLabel(p)}</b>${p.pot - p.ovr > 1 ? `<span>может вырасти до ${p.pot}</span>` : ''}</div>
        <div><span>Зарплата</span><b>${FM.money(p.wage)}/нед</b></div>
        <div><span>Контракт до</span><b>лето ${p.contract + 1}</b></div>
        <div><span>Физ. готовность</span><b>${Math.round(p.fit)}%</b></div>
        <div><span>Мораль</span><b>${p.morale >= 70 ? 'отличная' : p.morale >= 50 ? 'нормальная' : 'плохая'}</b></div>
      </div></div></div>
      ${mine && !p.loan ? retrainBlock(p) : ''}
      ${p.inj ? `<div class="note bad">Травма: ещё ${G.injText(p.inj)}</div>` : ''}${p.sus ? `<div class="note bad">Дисквалификация: ${p.sus} матч(а)</div>` : ''}
      <table class="small"><tr><th></th><th class="num">Игры</th><th class="num">Голы</th><th class="num">Пас</th><th class="num">ЖК</th><th class="num">КК</th><th class="num">Оценка</th></tr>
        <tr><td>Чемпионат</td><td class="num">${p.st.apps}</td><td class="num">${p.st.g}</td><td class="num">${p.st.a}</td><td class="num">${p.st.yc}</td><td class="num">${p.st.rc}</td><td class="num">${avg}</td></tr>
        <tr><td>Кубок и стыки</td><td class="num">${p.cst.apps}</td><td class="num">${p.cst.g}</td><td class="num">${p.cst.a}</td><td class="num">${p.cst.yc}</td><td class="num">${p.cst.rc}</td><td class="num">${p.cst.apps ? (p.cst.rsum / p.cst.apps).toFixed(2) : '—'}</td></tr>
        ${p.pst && p.pst.apps ? `<tr><td>За прежний клуб в этом сезоне</td><td class="num">${p.pst.apps}</td><td class="num">${p.pst.g}</td><td class="num">${p.pst.a}</td><td class="num">${p.pst.yc}</td><td class="num">${p.pst.rc}</td><td class="num">${(p.pst.rsum / p.pst.apps).toFixed(2)}</td></tr>` : ''}
        <tr><td>Прошлые сезоны</td><td class="num">${p.car.apps}</td><td class="num">${p.car.g}</td><td class="num">${p.car.a}</td><td></td><td></td><td></td></tr></table>
      <div id="act" style="margin-top:14px">${mine && p.loan ? `
        <div class="note">В аренде из «${esc(T(p.loan.from).name)}» до конца сезона. Вы платите ${p.loan.wagePct}% зарплаты — ${FM.money(p.wage * p.loan.wagePct / 100)}/нед.${p.loan.buy ? ` Опция выкупа: ${FM.money(p.loan.buy)}.` : ''}</div>
        ${p.loan.buy ? `<div class="row"><button class="btn primary" data-loanbuy>Выкупить за ${FM.money(p.loan.buy)}</button></div>` : ''}` : mine ? `
        ${p.pre && p.pre.team !== g().s.user && T(p.pre.team) ? `<div class="note bad">Подписал предварительный контракт с «${esc(T(p.pre.team).name)}» — летом уйдёт бесплатно.</div>` : ''}
        <div class="row">${p.pre && p.pre.team !== g().s.user ? '' : '<button class="btn" data-renew>Продлить контракт</button>'}
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
      if (el.querySelector('[data-renew]')) el.querySelector('[data-renew]').onclick = () => {
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

  // Шкала торга: где ваше последнее предложение относительно запроса другой стороны
  function gapMeter(mine, ask, l1, l2, fmt) {
    if (!ask) return '';
    const max = Math.max(ask, mine) * 1.25;
    const pm = Math.min(100, (mine / max) * 100), pa = Math.min(100, (ask / max) * 100);
    const close = mine && mine >= ask * 0.97 ? 'ok' : mine >= ask * 0.85 ? 'near' : 'far';
    return `<div class="gap ${close}"><div class="gap-track"><i class="gap-fill" style="width:${pm}%"></i><span class="gap-ask" style="left:${pa}%"><b>${fmt(ask)}</b><em>${l2}</em></span>${mine ? `<span class="gap-me" style="left:${pm}%"><b>${fmt(mine)}</b><em>${l1}</em></span>` : ''}</div>
      <div class="gap-say">${!mine ? 'Сделайте первое предложение' : close === 'ok' ? 'Позиции сошлись' : close === 'near' ? 'Почти договорились' : `Разница ${fmt(ask - mine)}`}</div></div>`;
  }

  // ================== посадочный талон после подписания ==================
  // Талон выезжает, самолёт летит по пунктиру от прежнего клуба к новому, в конце — печать «ПОДПИСАН».
  function ticketModal(p, from, to, d) {
    const G = g(), s = G.s;
    // код «аэропорта»: инициалы для названий из нескольких слов, иначе первые три буквы
    const code = (t) => { if (!t) return 'FA'; const w = t.name.replace(/[«»"]/g, '').split(/[\s-]+/).filter(Boolean); return (w.length > 1 ? w.map((x) => x[0]).join('') : w[0]).slice(0, 3).toUpperCase(); };
    const fee = d.pre ? 'бесплатно' : d.fee ? FM.money(d.fee) : 'бесплатно';
    const when = d.pre ? `лето ${s.season + 1}` : FM.fmtDate(s.date);
    const el = modal(`<div class="tk-wrap">
      <div class="tk" style="--c1:${glow(to)};--c0:${from ? glow(from) : '#3a4256'}">
        <div class="tk-main">
          <div class="tk-top"><span>FM26 · ТРАНСФЕР</span><span>${d.pre ? 'ПРЕДВАРИТЕЛЬНЫЙ КОНТРАКТ' : 'ПОСАДОЧНЫЙ ТАЛОН'}</span></div>
          <div class="tk-route">
            <div class="tk-pt">${from ? badge(from, 'lg') : '<span class="ng-free">FA</span>'}<b>${code(from)}</b><small>${from ? esc(from.name) : 'свободный агент'}</small></div>
            <div class="tk-path"><svg viewBox="0 0 200 40" preserveAspectRatio="none"><path d="M4 32 Q100 -14 196 32" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/></svg><span class="tk-plane">${icon('plane')}</span></div>
            <div class="tk-pt">${badge(to, 'lg')}<b>${code(to)}</b><small>${esc(to.name)}</small></div>
          </div>
          <div class="tk-pass"><span class="label">Пассажир</span><b>${flag(p.nat)}${esc(p.name)}</b></div>
          <div class="tk-fields">
            <div><span>Позиция</span><b>${FM.POS_RU[p.pos]}</b></div><div><span>Место</span><b>№ ${shirtNo(p)}</b></div>
            <div><span>Сумма</span><b>${fee}</b></div><div><span>Зарплата</span><b>${FM.money(d.terms.wage || p.wage)}/нед</b></div>
            <div><span>Контракт</span><b>${d.terms.years || '—'} г.</b></div><div><span>Вылет</span><b>${when}</b></div>
          </div>
          <div class="tk-bar"></div>
        </div>
        <div class="tk-stub"><span>RATING</span><b>${p.ovr}</b><span>${FM.POS_RU[p.pos]} · ${p.age}</span><div class="tk-bar v"></div></div>
        <div class="tk-stamp"><span>ПОДПИСАН</span></div>
      </div>
      <div class="center tk-msg">${d.pre ? `${esc(p.name)} присоединится к «${esc(to.name)}» летом.` : `${esc(p.name)} — игрок «${esc(to.name)}»!`}</div>
      <div class="row" style="justify-content:center"><button class="btn primary" data-close>Отлично</button></div></div>`, 'ticket');
    return el;
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
    const dots = (k, max) => `<span class="pat">${icon('dot').repeat(Math.max(0, k))}${icon('ring').repeat(Math.max(0, max - k))}</span>`;
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
        ${gapMeter(n.lastFee || 0, hint, 'Ваше предложение', `Запрос «${esc(club.name)}»`, FM.money)}
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
        ${gapMeter(n.lastWage || 0, d.wage, 'Ваше предложение', 'Запрос агента', (v) => `${FM.money(v)}/нед`)}
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
    // шапка переговоров: откуда → игрок → куда, интерес игрока шкалой
    const ic = interestColor(it.score);
    const el = modal(`<div class="ng-head" style="--hcb:${club ? glow(club) : '#3a4256'};--acb:${glow(u)}">
        <div class="ng-side">${club ? badge(club, 'xl') : '<span class="ng-free">FA</span>'}<b>${club ? esc(club.name) : 'Свободный агент'}</b><span>${club ? esc(s.leagues[club.league].short) : 'без клуба'}</span></div>
        <div class="ng-mid"><div class="ng-card">${futCard(p, [[FM.money(p.value), 'стоимость']]).replace('class="fut ', 'class="fut sm ')}</div>
          <div class="ng-name">${flag(p.nat)}${esc(p.name)}</div><div class="ng-sub">${FM.POS_NAME[p.pos]} · ${p.age} лет</div></div>
        <div class="ng-side">${badge(u, 'xl')}<b>${esc(u.name)}</b><span>ваш клуб</span></div>
      </div>
      <div class="ng-int"><span class="label">Интерес игрока</span><div class="ng-gauge"><i style="width:${it.score}%;background:${ic}"></i></div><b style="color:${ic}">${it.label}</b>
        <div class="small muted ng-why">${it.why.map(esc).join(' · ')}</div></div>
      <div class="steps">${[club && !n.precontract ? 'Клуб' : null, 'Игрок', 'Подписание'].map((l, i) => (l ? `<span class="${i < stage ? 'done' : i === stage ? 'on' : ''}">${i < stage ? icon('check', 'sm') + ' ' : ''}${l}</span>` : '')).join('')}</div>
      ${n.precontract ? '<div class="note">Контракт игрока истекает летом — можно подписать предварительный контракт без выплаты клубу. Игрок перейдёт после окончания сезона.</div>' : ''}
      <div class="chat ng-chat" id="chat">${n.log.map((m, i) => `<div class="msg ${m.who} ${i === n.log.length - 1 ? 'new' : ''}"><span class="ava">${m.who === 'you' ? badge(u, 'sm') : m.who === 'club' && club ? badge(club, 'sm') : `<span class="ava-kit">${kitSvg(club || { colors: ['#3a4256', '#8f9bcc'] }, p.pos === 'GK')}</span>`}</span><span>${esc(m.text)}</span></div>`).join('') || `<div class="muted small center">${n.stage === 'club' ? `Сначала нужно договориться с «${esc(club.name)}» о сумме трансфера.` : 'Предложите игроку условия контракта.'}</div>`}</div>
      ${form}
      <div class="row" style="justify-content:flex-end;margin-top:12px"><button class="btn danger sm" id="n-end">Закончить переговоры</button></div>`, 'wide nego');
    el.querySelector('#n-end').onclick = () => {
      // переговоры сбрасываются: договорённости с клубом и игроком забываются, начать можно заново
      delete s.nego[pid];
      save();
      closeModal();
      render();
      toast(`Переговоры по ${esc(p.name)} завершены.`);
    };
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
      const fromClub = club, pre = !!n.precontract, terms = Object.assign({}, n.terms), cost = G.dealCost(n);
      const r = G.completeDeal(pid);
      if (!r.ok) return toast(esc(r.text));
      save();
      render();
      ticketModal(p, fromClub, u, { pre, terms, fee: cost.fee || 0 });
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
    const mvp = m.mvp && G.players[m.mvp];
    modal(`<div class="bc rep" style="--hcb:${glow(h)};--acb:${glow(a)}">
        <div class="bc-head"><span class="comp-pill">${esc(compName(m.comp))}${roundText(m) ? ` · ${esc(roundText(m))}` : ''}</span>${bigTag(m)}<span class="small muted">${FM.fmtDateWd(m.date)}${m.att ? ` · ${m.att.toLocaleString('ru-RU')} зрителей` : ''}</span></div>
        <div class="rep-sc"><div class="rep-t">${badge(h, 'xl')}<b>${esc(h.name)}</b><div class="scorers">${goals('h')}</div></div>
          <div class="rep-mid"><div class="rep-score">${m.hg}<span>:</span>${m.ag}</div>${m.pens ? `<div class="small muted">пен. ${m.pens[0]}:${m.pens[1]}</div>` : '<div class="label">финальный счёт</div>'}</div>
          <div class="rep-t">${badge(a, 'xl')}<b>${esc(a.name)}</b><div class="scorers">${goals('a')}</div></div></div>
      </div>
      ${mvp ? `<div class="rep-mvp">${futMini(mvp, 'лучший игрок матча', (() => { const gl = (m.goals || []).filter((x) => x.scorer === mvp.id).length, as = (m.goals || []).filter((x) => x.assist === mvp.id).length;
        return [gl ? [gl, gl === 1 ? 'гол' : gl < 5 ? 'гола' : 'голов'] : null, as ? [as, as === 1 ? 'пас' : 'паса'] : null, [m.ratings[m.mvp].toFixed(1), 'оценка']].filter(Boolean); })())}</div>` : ''}
      <div class="rep-stats">${srow('Владение, %', 'poss')}${srow('Удары', 'shots')}${srow('В створ', 'sot')}${srow('xG', 'xg')}${srow('Угловые', 'corners')}${srow('Жёлтые', 'yc')}${srow('Красные', 'rc')}</div>
      ${ratAll.length ? `<div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">${[h, a].map((t) => `<div><h3>${esc(t.name)}</h3>${ratAll.filter(([p]) => p.club === t.id).sort((x, y) => y[1] - x[1]).map(([p, r]) => `<div class="row small rep-pl">${pos(p.pos)} <span class="grow">${pname(p)}${(m.reds || []).some((x) => x.pid === p.id) ? ' <i class="rc-card" title="Удалён"></i>' : ''}</span>${rt(r)}</div>`).join('')}</div>`).join('')}</div>` : ''}`);
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
    // Превью в стиле трансляции: заставка с командами, вероятные составы и главные игроки обеих команд
    const dRec = G.derbyOf(m) ? G.derbyRecord(m.h, m.a) : null;
    const row = (t) => (s.leagues[t.league] ? G.table(t.league).find((r) => r.id === t.id) : null);
    const side = (t, away) => { const r = row(t); return `<div class="bc-team ${away ? 'away' : ''} ${t.name.length > 16 ? 'xlong' : t.name.length > 9 ? 'long' : ''}">${badge(t, 'xl')}<div class="bc-tn"><b>${esc(t.name)}</b>
      <span>${r ? `${r.pos}-е место · ${r.pts} очк.` : esc(s.leagues[t.league].short)}</span><span class="form-s">${form(t.form.slice(-5))}</span></div></div>`; };
    const xiOf = (t) => G.matchLineup(t).xi.map((x) => ({ p: G.players[x.pid], slot: x.slot })).filter((x) => x.p);
    const xiList = (t) => { const xi = xiOf(t);
      return `<div class="pv-xi"><h3>${esc(t.name)} <span class="muted">· ${t.formation}</span></h3>${xi.map(({ p, slot }) => `<div class="pv-row"><span class="pv-kit">${kitSvg(t, slot === 'GK')}</span>${pos(slot)}<span class="grow ell" data-player="${p.id}">${esc(p.name)}</span>${ovr(p.ovr)}</div>`).join('')}</div>`; };
    const star = (t) => { const p = xiOf(t).map((x) => x.p).sort((a, b) => b.ovr - a.ovr)[0]; return p ? `<div class="pv-star"><span class="label">Главный игрок</span>${futMini(p)}</div>` : ''; };
    const el = modal(`<div class="bc pv" style="--hcb:${glow(h)};--acb:${glow(a)}">
        <div class="bc-head"><span class="comp-pill">${esc(compName(m.comp))}${roundText(m) ? ` · ${esc(roundText(m))}` : ''}</span>${bigTag(m)}${dRec ? `<span class="small muted">личные встречи ${dRec[0]}–${dRec[1]}–${dRec[2]}</span>` : ''}</div>
        <div class="bc-vs">${side(h)}<div class="bc-kick"><span class="bc-when">${esc(FM.fmtDateWd(m.date))}</span><span class="bc-v">VS</span><span class="bc-where">${m.neutral ? 'нейтральное поле' : esc(h.stadium || '')}</span></div>${side(a, true)}</div>
      </div>
      ${extra}
      <div class="pv-grid">${star(h)}${xiList(h)}${xiList(a)}${star(a)}</div>
      ${problems.length ? `<div class="note warn small">${problems.map(esc).join('<br>')}<br>Свободные места займут лучшие доступные игроки.</div>` : ''}
      <div class="row pv-actions" style="justify-content:center;margin-top:14px">
        <button class="btn" data-squad>Изменить состав</button>
        <button class="btn" data-quick>Быстрый результат</button>
        <button class="btn primary" data-live>Смотреть матч</button></div>`, 'wide prematch');
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
    const G = g(), uid = G.s.user, my = m.h === uid ? m.hg : m.ag, op = m.h === uid ? m.ag : m.hg;
    const win = m.winner ? m.winner === uid : my > op, draw = !m.winner && my === op;
    const big = !!(m.neutral && m.winner) || !!G.derbyOf(m);
    splash(win ? 'ПОБЕДА' : draw ? 'НИЧЬЯ' : 'ПОРАЖЕНИЕ', `${esc(T(m.h).name)} ${m.hg}:${m.ag} ${esc(T(m.a).name)}`, win ? glow(G.userTeam()) : draw ? '#8f9bcc' : '#ff5c6c', win ? 'win' : draw ? 'draw' : 'loss', 1600);
    if (win && big) setTimeout(() => confetti([glow(G.userTeam()), '#ffd166', '#ffffff'], 3200), 300);
    matchReport(m.id);
  }

  // ================== «Золотой мяч» ==================
  // Церемония: номинанты объявляются с 30-го места, тройка лидеров — с паузой, затем Трофей Копа и Трофей Яшина.
  let ceremonyTimer = null;
  function ceremonyModal(year) {
    const G = g(), s = G.s;
    const A = (s.awards || []).find((x) => x.year === year);
    if (!A) return;
    clearTimeout(ceremonyTimer);
    const seasonTxt = `${A.year}/${String(A.year + 1).slice(2)}`;
    const club = (x) => (G.teams[x.club] ? badge(G.teams[x.club], 'sm') : '');
    const stat = (x) => (x.gk ? `${x.apps} м · ${x.cs} сух.` : `${x.apps} м · ${x.g} г · ${x.a} п`) + ` · ${x.r.toFixed(2)}`;
    const row = (x, i) => `<div class="bd-row ${x.club === s.user ? 'mine' : ''} ${i < 3 ? 'top' + (i + 1) : ''}"><span class="bd-pl">${i + 1}</span>${flag(x.nat)}<span class="grow"><b data-player="${x.id}">${esc(x.name)}</b> <span class="muted small">${FM.POS_RU[x.pos]}</span></span>${club(x)}<span class="small muted bd-cl">${esc(x.clubName)}</span><span class="small bd-st">${stat(x)}</span></div>`;
    const card = (title, x, cls) => (x ? `<div class="bd-card ${cls}"><div class="bd-k">${title}</div><div class="row" style="gap:12px">${G.teams[x.club] ? badge(G.teams[x.club], 'lg') : ''}<div class="grow"><b class="bd-name">${flag(x.nat)}${esc(x.name)}</b><div class="small muted">${esc(x.clubName)} · ${x.age} лет · ${stat(x)}</div></div></div></div>` : '');
    const el = modal(`<div class="bd-hero"><div class="bd-ball"></div><div><div class="bd-kick">Париж · театр «Шатле»</div><h2>Золотой мяч ${seasonTxt}</h2>
        <div class="small muted">Лучшие игроки сезона по версии журналистов: игра, голы и передачи, трофеи клуба, сила чемпионата.</div></div></div>
      <div id="bd-stage"></div><div id="bd-list" class="bd-list"></div><div id="bd-extra"></div>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn" id="bd-skip">Показать сразу</button></div>`, 'wide ceremony');
    const list = el.querySelector('#bd-list'), stage = el.querySelector('#bd-stage'), extra = el.querySelector('#bd-extra');
    const n = A.ballon.length;
    let k = n - 1;
    const finish = () => {
      clearTimeout(ceremonyTimer);
      const w = A.ballon[0];
      stage.innerHTML = w ? `<div class="bd-winner">${G.teams[w.club] ? badge(G.teams[w.club], 'xl') : ''}<div><div class="bd-k">${icon('trophyF', 'tro')} Обладатель «Золотого мяча»</div><div class="bd-wname">${flag(w.nat, 'lg')}${esc(w.name)}</div>
        <div class="muted">${esc(w.clubName)} · ${FM.POS_NAME[w.pos]} · ${w.age} лет</div><div class="small" style="margin-top:4px">${stat(w)}</div></div></div>` : '';
      list.innerHTML = A.ballon.map(row).join('');
      extra.innerHTML = `<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));margin-top:12px">${card('Трофей Копа · лучший молодой игрок (до 21 года)', A.kopa[0], 'kopa')}${card('Трофей Яшина · лучший вратарь', A.yashin[0], 'yashin')}</div>`;
      const b = el.querySelector('#bd-skip'); if (b) b.remove();
      el.querySelectorAll('[data-player]').forEach((x) => x.onclick = () => { if (G.players[x.dataset.player]) playerModal(x.dataset.player); });
    };
    const step = () => {
      if (!document.body.contains(list)) return;
      if (k < 0) return finish();
      const x = A.ballon[k];
      if (k <= 2) {
        // тройка лидеров — по одному, с паузой «для интриги»
        stage.innerHTML = `<div class="bd-drum">${k === 0 ? 'И «Золотой мяч» получает…' : `${k + 1}-е место…`}</div>`;
        ceremonyTimer = setTimeout(() => { if (k === 0) return finish(); list.insertAdjacentHTML('afterbegin', row(x, k)); stage.innerHTML = ''; k--; ceremonyTimer = setTimeout(step, 600); }, k === 0 ? 2200 : 1500);
        return;
      }
      list.insertAdjacentHTML('afterbegin', row(x, k));
      k--;
      ceremonyTimer = setTimeout(step, k < 10 ? 650 : 260);
    };
    el.querySelector('#bd-skip').onclick = finish;
    step();
  }

  // история наград по сезонам
  function awardsView() {
    const G = g(), s = G.s;
    const A = (s.awards || []).slice().reverse();
    if (!A.length) return '<div class="card muted" style="padding:14px">Первая церемония «Золотого мяча» — в конце октября, по итогам прошлого сезона.</div>';
    const nm = (x) => (x ? `${flag(x.nat)}<b>${esc(x.name)}</b> <span class="muted small">${esc(x.clubName)}</span>` : '—');
    return `<div class="card tight"><table><tr><th>Сезон</th><th>Золотой мяч</th><th class="hide-m">2-е и 3-е места</th><th class="hide-m">Трофей Копа</th><th class="hide-m">Трофей Яшина</th><th></th></tr>
      ${A.map((a) => `<tr><td>${a.year}/${String(a.year + 1).slice(2)}</td><td>${nm(a.ballon[0])}</td><td class="hide-m small">${a.ballon.slice(1, 3).map((x) => esc(x.name)).join(', ')}</td><td class="hide-m">${nm(a.kopa[0])}</td><td class="hide-m">${nm(a.yashin[0])}</td><td><button class="btn sm" data-cer="${a.year}">Церемония</button></td></tr>`).join('')}</table></div>`;
  }

  // ================== эффекты в стиле FC ==================
  const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // конфетти на canvas поверх экрана (трофеи, победы в дерби и финалах)
  function confetti(colors, ms = 2600) {
    if (reduceMotion()) return;
    const c = document.createElement('canvas');
    c.className = 'fx-confetti';
    document.body.appendChild(c);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = c.width = innerWidth * dpr, H = c.height = innerHeight * dpr;
    const ctx = c.getContext('2d');
    const parts = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35, vx: (Math.random() - 0.5) * 18 * dpr, vy: (-Math.random() * 16 - 6) * dpr,
      s: (4 + Math.random() * 6) * dpr, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, col: colors[Math.floor(Math.random() * colors.length)] }));
    const t0 = performance.now();
    const frame = (t) => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) { p.vy += 0.45 * dpr; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.col; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); }
      if (t - t0 < ms) requestAnimationFrame(frame); else c.remove();
    };
    requestAnimationFrame(frame);
  }
  // полноэкранная вспышка: «ГОЛ!», итог матча — текст влетает, фон в цветах команды
  function splash(big, small, color, cls = '', ms = 1700) {
    if (reduceMotion()) return;
    const el = document.createElement('div');
    el.className = `fx-splash ${cls}`;
    el.style.setProperty('--sc', color);
    el.innerHTML = `<div class="fx-band"></div><div class="fx-txt"><b>${big}</b>${small ? `<span>${small}</span>` : ''}</div>`;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add('out'), ms - 350);
    setTimeout(() => el.remove(), ms);
  }
  // число «добегает» до значения
  function countUp(el, to, fmt, ms = 700) {
    if (reduceMotion() || !el) return;
    const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / ms); el.textContent = fmt(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  // ================== живой матч ==================
  const ICONS = { penkick: icon('target'), goal: icon('ball'), yellow: icon('card', 'yel'), red: icon('card', 'red'), sub: icon('swap'), injury: icon('medic', 'red'), save: icon('glove'), miss: icon('ring', 'sm'), pen: icon('alert'), half: icon('clock'), end: icon('clock'), start: icon('clock'), pens: icon('target'), info: '' };

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
      <div class="row mtabs"><div class="seg" id="spd">${[['0', icon('pause')], ['1', '×1'], ['2', '×2'], ['4', '×4']].map(([v, n]) => `<button data-s="${v}" class="${+v === speed ? 'on' : ''}">${n}</button>`).join('')}</div>
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
        body.innerHTML = `<div class="feed">${feed.slice().reverse().map((e) => `<div class="ev ${e.type} ${e.type === 'penkick' ? (e.ok ? 'goal' : 'red') : ''}"><span class="m">${e.type === 'penkick' ? 'пен' : `${e.min}'`}</span><span class="i">${e.type === 'penkick' ? (e.ok ? icon('ball') : icon('x', 'red')) : ICONS[e.type] || ''}</span><span>${e.side ? `<b style="color:${markColor(e.side === 'h' ? h : a)}">${icon('square', 'sm')}</b> ` : ''}${esc(e.text)}</span></div>`).join('')}</div>`;
      } else if (tab === 'stats') {
        const H = sim.home.stats, A = sim.away.stats;
        const tp = H.possTicks + A.possTicks || 1;
        const ph = Math.round((H.possTicks / tp) * 100);
        body.innerHTML = statRow('Владение, %', ph, 100 - ph) + statRow('Удары', H.shots, A.shots) + statRow('В створ', H.sot, A.sot) + statRow('xG', H.xg.toFixed(2), A.xg.toFixed(2)) + statRow('Угловые', H.corners, A.corners) + statRow('Фолы', H.fouls, A.fouls) + statRow('Жёлтые', H.yc, A.yc) + statRow('Красные', H.rc, A.rc);
      } else {
        const side = (sd) => `<div><h3>${esc(sd.team.name)}</h3><table class="lu small">${sd.onPitch.map((o) => `<tr><td>${pos(o.slot)}</td><td>${esc(o.p.name)}${sd.yellows[o.p.id] ? ' ' + icon('card', 'yel') : ''}</td><td>${fitBar(Math.round(sd.fitness[o.p.id]))}</td><td class="num">${rt(sd.rating[o.p.id])}</td></tr>`).join('')}
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
      for (const e of evs) if (e.type === 'goal' && e.side) {
        const t = e.side === 'h' ? h : a, sc = G.players[e.scorer];
        splash('ГОЛ!', `${esc(sc ? sc.name : '')} · ${sim.home.goals}:${sim.away.goals}`, glow(t), e.side === (m.h === G.s.user ? 'h' : 'a') ? 'mine' : 'theirs', 1500);
        if (e.side === (m.h === G.s.user ? 'h' : 'a')) confetti([glow(t), '#ffffff', '#ffd166'], 1400);
      }
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
    // недельный баланс: доля зарплат от спонсорских денег — наглядная шкала
    const ratio = u.sponsor ? Math.round((wages / u.sponsor) * 100) : 0;
    main.innerHTML = `<div class="band" style="--hcb:${glow(u)}">${badge(u, 'lg')}
        <div class="band-big"><span class="label">Деньги клуба</span><b class="${u.money < 0 ? 'bad' : ''}">${FM.money(u.money)}</b></div>
        <div class="band-big"><span class="label">Итог недели</span><b class="${net < 0 ? 'bad' : 'good'}">${net >= 0 ? '+' : ''}${FM.money(net)}</b></div>
        <div class="band-meter"><span class="label">Зарплаты — ${ratio}% спонсорских денег</span><div class="meter"><i class="${ratio > 100 ? 'bad' : ratio > 85 ? 'warn' : 'good'}" style="width:${Math.min(100, ratio)}%"></i></div></div>
      </div>
      <div class="grid">
      <div class="card"><h3>Баланс</h3><div class="kv">
        <div><span>Деньги клуба</span><b class="${u.money < 0 ? 'bad' : ''}">${FM.money(u.money)}</b></div>
        <div><span>Спонсоры, в неделю</span><b>${FM.money(u.sponsor)}</b></div>
        <div><span>Зарплаты, в неделю</span><b>${FM.money(wages)}</b></div>
        <div><span>Итог недели (без билетов)</span><b class="${net < 0 ? 'bad' : 'good'}">${FM.money(net)}</b></div>
        <div><span>Стоимость состава</span><b>${FM.money(G.squadValue(u))}</b></div>
        <div><span>Доходы / расходы за сезон</span><b>${FM.money(u.fin.income)} / ${FM.money(u.fin.expense)}</b></div></div>
        <div class="small muted">Доходы: спонсоры (каждый понедельник), билеты на домашние матчи, призовые по итогам сезона, кубковые премии и продажи игроков. Долг больше 3 млн € раздражает руководство.</div></div>
      <div class="card"><h3>Самые высокие зарплаты</h3>${top.map((p) => `<div class="row small">${pos(p.pos)} <span class="grow">${pname(p)}</span><b>${FM.money(p.wage)}</b><span class="muted">до ${p.contract + 1}</span></div>`).join('')}</div>
      <div class="card"><h3>Движение средств</h3>${u.fin.log.slice(0, 30).map((x) => `<div class="row small"><span class="muted" style="width:56px;flex:none">${FM.fmtDate(x.date).replace(/ (\S{3})\S*$/, ' $1')}</span><span class="grow">${esc(x.what)}</span><b class="${x.amount < 0 ? 'bad' : 'good'}">${FM.money(x.amount)}</b></div>`).join('') || '<div class="muted small">Пока пусто</div>'}</div></div>`;
  }

  // ================== клуб ==================
  function viewClub(main) {
    const G = g(), s = G.s, u = G.userTeam();
    main.innerHTML = `<div class="band" style="--hcb:${glow(u)}">${badge(u, 'xl')}
        <div class="band-name"><b>${esc(u.name)}</b><span>${esc(u.city)} · ${esc(u.stadium)} · ${u.cap.toLocaleString('ru-RU')} мест</span></div>
        <div class="band-big"><span class="label">Задача</span><b>${esc(G.expectText())}</b></div>
        <div class="band-meter"><span class="label">Доверие руководства — ${Math.round(s.board.conf)}%</span><div class="meter"><i class="${s.board.conf < 45 ? 'bad' : s.board.conf < 75 ? 'warn' : 'good'}" style="width:${Math.round(s.board.conf)}%"></i></div></div>
      </div>
      <div class="grid">
      <div class="card"><h3>Клуб</h3>
        <div class="kv"><div><span>Стадион</span><b>${esc(u.stadium)}</b></div><div><span>Вместимость</span><b>${u.cap.toLocaleString('ru-RU')}</b></div>
        <div><span>Репутация</span><b>${u.rep}</b></div><div><span>Лига</span><b>${esc(s.leagues[u.league].name)}</b></div></div>
        <button class="btn" data-team="${u.id}">Весь состав</button></div>
      <div class="card"><h3>Руководство</h3><div>Ориентир — <b>${s.board.expect}-е место</b> в лиге.</div><div class="small muted" style="margin-top:6px">Доверие растёт от побед и выполненной задачи, падает от поражений, вылета из кубков и долгов больше 3 млн €. Ниже 8% после 8 туров — увольнение.</div></div>
      <div class="card"><h3>История тренера</h3>${s.history.length ? `<table><tr><th>Сезон</th><th>Клуб</th><th>Турнир</th><th class="num">Место</th><th></th></tr>${s.history.map((x) => `<tr><td>${x.year}/${String(x.year + 1).slice(2)}</td><td>${esc(T(x.team).name)}</td><td>${esc(s.leagues[x.league] ? s.leagues[x.league].short : x.league)}</td><td class="num">${x.pos}</td><td>${x.moved === 'up' ? `<span class="good">${icon('up', 'sm')}</span>` : x.moved === 'down' ? `<span class="bad">${icon('down', 'sm')}</span>` : ''}${x.cup ? ' ' + icon('trophyF', 'tro') : ''}${(x.euro || []).map((id) => ` <span class="tag">${euroOf(id) ? euroOf(id).short : id} ${icon('trophyF', 'tro')}</span>`).join('')}</td></tr>`).join('')}</table>` : '<div class="muted small">Первый сезон в карьере.</div>'}</div></div>`;
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
  // ================== зал славы ==================
  function viewHall(main) {
    const G = g(), s = G.s, u = G.userTeam();
    const H = s.hall || { clubs: {}, leagues: {}, seasons: [], transfers: [], derbies: {} };
    const view = UI.hallView || 'club';
    const seg = `<div class="seg" style="margin-bottom:12px">${[['club', 'Клуб'], ['league', 'Лиги'], ['seasons', 'Чемпионы'], ['transfers', 'Трансферы'], ['derbies', 'Дерби']].map(([k, n]) => `<button data-hv="${k}" class="${view === k ? 'on' : ''}">${n}</button>`).join('')}</div>`;
    const who = (e, pid) => `${flag(e.nat)}${G.players[pid] ? `<span class="link" data-player="${pid}">${esc(e.n)}</span>` : esc(e.n)}`;
    const empty = '<div class="muted small" style="padding:12px">Рекорды накапливаются по ходу карьеры — сыграйте несколько матчей.</div>';
    let body = '';
    if (view === 'club') {
      const tid = UI.hallClub && T(UI.hallClub) ? UI.hallClub : u.id;
      const c = H.clubs[tid] || {};
      const list = (key, n) => Object.entries(c).filter((x) => x[1][key] > 0).sort((a, b) => b[1][key] - a[1][key] || b[1].a - a[1].a).slice(0, n);
      const tbl = (title, key, lbl) => `<div class="card tight"><h3>${title}</h3>${Object.keys(c).length ? `<table>${list(key, 15).map(([pid, e], i) => `<tr><td class="num muted">${i + 1}</td><td>${who(e, pid)}</td><td class="num"><b>${e[key]}</b> <span class="small muted">${lbl}</span></td></tr>`).join('')}</table>` : empty}</div>`;
      const managed = [...new Set((s.history || []).map((h) => h.team).concat(u.id))].filter((id) => T(id));
      body = `${managed.length > 1 ? `<div class="row" style="margin-bottom:10px;gap:6px">${managed.map((id) => `<button class="btn sm ${id === tid ? 'on' : ''}" data-hc="${id}">${badge(T(id), 'sm')} ${esc(T(id).name)}</button>`).join('')}</div>` : ''}
        <h3 style="margin:0 0 10px">${badge(T(tid), 'sm')} ${esc(T(tid).name)} — рекордсмены за время вашей карьеры</h3>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))">${tbl('Бомбардиры', 'g', 'гол.')}${tbl('Больше всего матчей', 'a', 'матч.')}${tbl('Ассистенты', 'as', 'пер.')}</div>`;
    } else if (view === 'league') {
      const lid = UI.hallLid || u.league;
      const L = H.leagues[lid] || {};
      const rows = Object.entries(L).sort((a, b) => b[1].g - a[1].g).slice(0, 25);
      body = `${leaguePick(s.order.map((id) => s.leagues[id]), lid, 'data-hl')}
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))">
        <div class="card tight"><h3>Лучшие бомбардиры за всё время</h3>${rows.length ? `<table>${rows.map(([pid, e], i) => `<tr><td class="num muted">${i + 1}</td><td>${who(e, pid)}</td><td class="small muted">${e.club && T(e.club) ? esc(T(e.club).name) : ''}</td><td class="num"><b>${e.g}</b></td></tr>`).join('')}</table>` : empty}</div>
        <div class="card tight"><h3>Чемпионы и лучшие бомбардиры сезонов</h3>${H.seasons.length ? `<table>${H.seasons.map((x) => `<tr><td class="small">${x.year}/${String(x.year + 1).slice(2)}</td><td>${x.champs[lid] && T(x.champs[lid]) ? tname(T(x.champs[lid])) : '—'}</td><td class="small">${x.scorers[lid] ? `${esc(x.scorers[lid][0])} <span class="muted">${x.scorers[lid][2]}</span>` : ''}</td></tr>`).join('')}</table>` : '<div class="muted small" style="padding:12px">История пополнится после первого сезона.</div>'}</div></div>`;
    } else if (view === 'seasons') {
      const tops = s.order.filter((id) => s.leagues[id].tier === 1).slice(0, 12);
      body = H.seasons.length ? H.seasons.map((x) => `<div class="card tight" style="margin-bottom:12px"><h3>Сезон ${x.year}/${String(x.year + 1).slice(2)}</h3><table>
          ${FM.EURO.filter((E) => x.euro[E.id]).map((E) => `<tr><td><b>${esc(E.name)}</b></td><td>${icon('trophyF', 'tro')} ${tname(T(x.euro[E.id]))}</td></tr>`).join('')}
          ${tops.filter((lid) => x.champs[lid]).map((lid) => `<tr><td>${flag(G.countryOf(lid))}${esc(s.leagues[lid].name)}</td><td>${tname(T(x.champs[lid]))}${x.cups[G.countryOf(lid)] && T(x.cups[G.countryOf(lid)]) ? ` <span class="small muted">· кубок: ${esc(T(x.cups[G.countryOf(lid)]).name)}</span>` : ''}</td></tr>`).join('')}
          ${(s.awards || []).filter((a) => a.year === x.year && a.ballon[0]).map((a) => `<tr><td><b>Золотой мяч</b></td><td>${flag(a.ballon[0].nat)}${esc(a.ballon[0].name)} <span class="small muted">${esc(a.ballon[0].clubName)}</span></td></tr>`).join('')}
        </table></div>`).join('') : '<div class="card muted" style="padding:14px">Чемпионы появятся здесь после первого сезона.</div>';
    } else if (view === 'transfers') {
      body = `<div class="card tight"><h3>Рекордные трансферы карьеры</h3>${H.transfers.length ? `<table><tr><th>#</th><th>Игрок</th><th>Откуда</th><th>Куда</th><th class="num">Сумма</th><th class="hide-m">Дата</th></tr>${H.transfers.map((x, i) => `<tr class="${x.to === u.id || x.from === u.id ? 'me' : ''}"><td class="num muted">${i + 1}</td><td>${flag(x.nat)}${esc(x.name)}</td><td>${x.from && T(x.from) ? tname(T(x.from)) : '—'}</td><td>${tname(T(x.to))}</td><td class="num"><b>${FM.money(x.fee)}</b></td><td class="hide-m small muted">${FM.fmtDate(x.date)} ${x.date.slice(0, 4)}</td></tr>`).join('')}</table>` : empty}</div>`;
    } else {
      const ds = FM.DERBIES.filter(([a, b]) => T(a) && T(b));
      const mine = ds.filter(([a, b]) => a === u.id || b === u.id);
      const row = ([a, b, n]) => { const r = G.derbyRecord(a, b); return `<tr class="${a === u.id || b === u.id ? 'me' : ''}"><td class="small"><b>${esc(n)}</b></td><td>${tname(T(a))}</td><td class="num">${r ? `${r[0]}–${r[1]}–${r[2]}` : '<span class="muted">—</span>'}</td><td>${tname(T(b))}</td></tr>`; };
      body = `<div class="card tight"><h3>Дерби: личные встречи за время карьеры (победы — ничьи — победы)</h3><table>${mine.concat(ds.filter((x) => !mine.includes(x))).map(row).join('')}</table>
        <div class="small muted" style="padding:10px">В дерби стадион почти полон и билеты дороже, судьи чаще показывают карточки, а победа или поражение сильнее влияют на настроение игроков и доверие руководства.</div></div>`;
    }
    main.innerHTML = seg + body;
    main.querySelectorAll('[data-hv]').forEach((b) => b.onclick = () => { UI.hallView = b.dataset.hv; render(); });
    main.querySelectorAll('[data-hc]').forEach((b) => b.onclick = () => { UI.hallClub = b.dataset.hc; render(); });
    main.querySelectorAll('[data-hl]').forEach((b) => b.onclick = () => { UI.hallLid = b.dataset.hl; render(); });
  }

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
        return pos === 1 && !cur ? `<b class="win">${icon('trophyF', 'tro')} Чемпион</b>` : `${pos}-е место`;
      }
      if (c.md) {
        const row = cur && s.euro && s.euro[comp] && G.euroTable(comp).find((r) => r.id === s.user);
        if (row) return `общий этап · ${row.pos}-е место`;
        return cur ? 'общий этап' : `<span class="bad">вылет · общий этап${c.pos ? `, ${c.pos}-е место` : ''}</span>`;
      }
      const base = c.label || 'стыки';
      if (!c.ko) return `${base} · в борьбе`;
      if (c.won && c.final) return `<b class="win">${icon('trophyF', 'tro')} Победа</b>`;
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
      ${m.type === 'awards' && m.data ? `<div class="row" style="margin-top:6px"><button class="btn sm primary" data-cer="${m.data.year}">Смотреть церемонию</button></div>` : ''}
      ${m.type === 'job' && m.data && m.data.closed && m.data.result ? `<div class="small muted">${esc(m.data.result)}</div>` : ''}
    </div>`).join('') || '<div style="padding:14px" class="muted">Писем нет</div>'}</div>`;
    s.inbox.forEach((m) => { if (m.type !== 'offer' || (m.data && m.data.closed)) m.read = true; });
    main.querySelectorAll('[data-acc]').forEach((b) => b.onclick = () => { toast(esc(G.answerOffer(+b.dataset.acc, true))); save(); render(); });
    main.querySelectorAll('[data-haggle]').forEach((b) => b.onclick = () => {
      const v = readMoney(main.querySelector(`[data-ask="${b.dataset.haggle}"]`));
      toast(esc(G.counterOffer(+b.dataset.haggle, v)), 4000); save(); render();
    });
    main.querySelectorAll('[data-dec]').forEach((b) => b.onclick = () => { G.answerOffer(+b.dataset.dec, false); save(); render(); });
    main.querySelectorAll('[data-cer]').forEach((b) => b.onclick = () => ceremonyModal(+b.dataset.cer));
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
  // ================== сохранения: карточки слотов ==================
  const agoText = (ts) => { if (!ts) return ''; const m = Math.round((Date.now() - ts) / 60000); return m < 1 ? 'только что' : m < 60 ? `${m} мин назад` : m < 1440 ? `${Math.round(m / 60)} ч назад` : `${Math.round(m / 1440)} дн. назад`; };
  function slotCard(key, title, meta, ingame) {
    const t = meta && meta.club ? (UI.g && UI.g.teams[meta.club]) || FM.leagues.flatMap((L) => L.teams).find((x) => x.id === meta.club) : null;
    const col = t ? glow({ ...t, colors: meta.colors || t.colors }) : '#3a4256';
    const crest = t ? badge(meta.logo ? { ...t, logoData: meta.logo } : t, 'xl') : '<span class="sv-empty-ic">+</span>';
    const body = meta ? `<div class="sv-club">${esc(meta.clubName || (meta.info || '').split(' · ')[1] || '')}</div>
        <div class="sv-mgr">${esc(meta.mgr || (meta.info || '').split(' · ')[0] || '')}</div>
        <div class="sv-facts">${meta.season ? `<span>сезон ${meta.season}/${String(meta.season + 1).slice(2)}</span>` : ''}${meta.date ? `<span>${FM.fmtDate(meta.date)}</span>` : ''}${meta.pos ? `<span>${meta.pos}-е место · ${esc(meta.league || '')}</span>` : ''}</div>
        <div class="sv-ago">${agoText(meta.ts)}</div>` : '<div class="sv-club muted">Пустой слот</div><div class="sv-mgr">Сохраните сюда текущую карьеру</div>';
    const acts = [meta ? `<button class="btn primary sm" data-sv-load="${key}">${ingame ? 'Загрузить' : 'Играть'}</button>` : '',
      ingame && key !== SAVE_AUTO ? `<button class="btn sm" data-sv-save="${key}">${meta ? 'Перезаписать' : 'Сохранить'}</button>` : '',
      meta && key !== SAVE_AUTO ? `<button class="btn sm danger" data-sv-del="${key}">Удалить</button>` : ''].join('');
    return `<div class="sv ${meta ? '' : 'empty'}" style="--sc:${col}"><div class="sv-tag">${title}</div><div class="sv-crest">${crest}</div><div class="sv-body">${body}</div><div class="sv-acts">${acts}</div></div>`;
  }
  async function savesPanel(root, ingame) {
    const keys = [[SAVE_AUTO, 'Автосохранение'], [SAVE_SLOT + 1, 'Слот 1'], [SAVE_SLOT + 2, 'Слот 2'], [SAVE_SLOT + 3, 'Слот 3']];
    const draw = (m) => {
      root.innerHTML = `<div class="sv-grid">${keys.map(([k, n]) => slotCard(k, n, m[k], ingame)).join('')}</div>
        <div class="sv-tools"><button class="btn" id="sv-exp" ${ingame ? '' : 'hidden'}>Экспорт в файл</button><button class="btn" id="sv-imp">Загрузить из файла</button>
        <span class="small muted">${UI.cloud ? 'Сохранения синхронизируются между вашими устройствами.' : 'Сохранения хранятся в этом браузере. Чтобы перенести карьеру на другое устройство, используйте экспорт в файл.'}</span></div>`;
      root.querySelectorAll('[data-sv-load]').forEach((b) => b.onclick = () => loadSlot(b.dataset.svLoad));
      root.querySelectorAll('[data-sv-save]').forEach((b) => b.onclick = () => { save(b.dataset.svSave); toast('Сохранено'); setTimeout(() => savesPanel(root, ingame), 400); });
      root.querySelectorAll('[data-sv-del]').forEach((b) => b.onclick = async () => {
        if (!b.dataset.sure) { b.dataset.sure = '1'; b.textContent = 'Точно удалить?'; return; }
        await FM.Store.localDelete(b.dataset.svDel); FM.Store.cloudDelete(b.dataset.svDel); toast('Сохранение удалено'); savesPanel(root, ingame);
      });
      const ex = root.querySelector('#sv-exp'); if (ex && ingame) ex.onclick = () => download(`ffm26_${g().userTeam().id}_${g().s.date}.json`, JSON.stringify(g().packState()));
      root.querySelector('#sv-imp').onclick = () => pickFile((st) => (st.teams && st.players ? loadState(st) : toast('Это не файл сохранения.')));
    };
    const local = {}; for (const [k] of keys) local[k] = localMeta(k);
    draw(local);
    const m = await slotMetas();
    for (const [k] of keys) if (local[k] && m[k] && m[k].ts === local[k].ts) m[k] = local[k];
    if (root.isConnected) draw(m);
  }

  function viewMenu(main) {
    const G = g();
    main.innerHTML = `<div class="grid menu-grid">
      <div class="card sv-card"><h3>Сохранения</h3><div id="sv-root"></div></div>
      <div class="card"><h3>База данных</h3>
        <div class="small" style="margin-bottom:10px">Составы РПЛ собраны по заявкам и составам на матчи лета–осени 2026 года, цены — оценка на уровне Transfermarkt. По ФНЛ и Второй лиге открытых данных мало: недостающих игроков игра генерирует, они помечены «*». В редакторе можно исправить любого игрока или клуба.</div>
        <div class="row"><button class="btn primary" id="editor">Редактор базы</button></div></div>
      <div class="card"><h3>Игра</h3>
        <label class="check small" style="margin-bottom:12px"><input type="checkbox" id="set-ru-euro" ${G.s.settings.ruEuro !== false ? 'checked' : ''}> Российские клубы в еврокубках (со следующего сезона)</label>
        <div class="small" style="margin-bottom:10px">Игра сохраняется автоматически после каждого дня, каждого действия и при сворачивании приложения.</div>
        <div class="row"><button class="btn primary" id="exitmenu">Выйти в главное меню</button></div></div></div>`;
    savesPanel(main.querySelector('#sv-root'), true);
    main.querySelector('#editor').onclick = () => editor();
    main.querySelector('#set-ru-euro').onchange = (e) => { G.s.settings.ruEuro = e.target.checked; save(); };
    main.querySelector('#exitmenu').onclick = exitToMenu;
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
      <td><button class="btn sm danger" data-del>${icon('x')}</button></td></tr>`;
  }

  // ================== запуск ==================
  startScreen();
})();
