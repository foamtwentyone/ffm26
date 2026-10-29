// Общие справочники и утилиты. Всё живёт в глобальном FM, чтобы игра открывалась прямо из файла.
const FM = (window.FM = window.FM || {});

FM.leagues = [];
FM.addLeague = (def) => FM.leagues.push(def);

// ---------- случайные числа ----------
FM.rnd = Math.random;
FM.ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
FM.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
FM.chance = (p) => Math.random() < p;
FM.gauss = (m = 0, s = 1) => {
  let u = 0, v = 0;
  while (!u) u = Math.random();
  while (!v) v = Math.random();
  return m + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};
FM.clamp = (x, a, b) => Math.max(a, Math.min(b, x));
FM.shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
FM.weighted = (items, w) => {
  let sum = 0;
  for (const it of items) sum += Math.max(0, w(it));
  let r = Math.random() * sum;
  for (const it of items) {
    r -= Math.max(0, w(it));
    if (r <= 0) return it;
  }
  return items[items.length - 1];
};

// ---------- даты ----------
FM.parseDate = (s) => new Date(s + 'T12:00:00Z');
FM.fmtISO = (d) => d.toISOString().slice(0, 10);
FM.addDays = (s, n) => {
  const d = FM.parseDate(s);
  d.setUTCDate(d.getUTCDate() + n);
  return FM.fmtISO(d);
};
FM.weekday = (s) => FM.parseDate(s).getUTCDay();
FM.nextWeekday = (s, wd) => {
  let d = s;
  while (FM.weekday(d) !== wd) d = FM.addDays(d, 1);
  return d;
};
const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
FM.fmtDate = (s, withYear = false) => {
  const d = FM.parseDate(s);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}${withYear ? ' ' + d.getUTCFullYear() : ''}`;
};
FM.fmtDateWd = (s) => `${WD[FM.weekday(s)]}, ${FM.fmtDate(s)}`;

// ---------- деньги (всё хранится в тысячах евро) ----------
FM.money = (k) => {
  const neg = k < 0;
  k = Math.abs(k);
  let s;
  if (k >= 1000) s = (k / 1000).toFixed(k >= 10000 ? 1 : 2).replace(/\.?0+$/, '') + ' млн €';
  else s = (k < 100 && Math.round(k) !== Math.round(k * 10) / 10 ? (Math.round(k * 10) / 10).toFixed(1) : Math.round(k)) + ' тыс. €';
  return (neg ? '−' : '') + s;
};

// ---------- позиции ----------
FM.POS = ['GK', 'CB', 'LB', 'RB', 'DM', 'CM', 'AM', 'LW', 'RW', 'ST'];
FM.POS_RU = { GK: 'ВР', CB: 'ЦЗ', LB: 'ЛЗ', RB: 'ПЗ', DM: 'ОП', CM: 'ЦП', AM: 'АП', LW: 'ЛВ', RW: 'ПВ', ST: 'НП' };
FM.POS_NAME = {
  GK: 'Вратарь', CB: 'Центральный защитник', LB: 'Левый защитник', RB: 'Правый защитник',
  DM: 'Опорный полузащитник', CM: 'Центральный полузащитник', AM: 'Атакующий полузащитник',
  LW: 'Левый вингер', RW: 'Правый вингер', ST: 'Нападающий',
};
FM.GROUP = { GK: 'G', CB: 'D', LB: 'D', RB: 'D', DM: 'M', CM: 'M', AM: 'M', LW: 'F', RW: 'F', ST: 'F' };
const NEAR = {
  CB: { DM: 0.9, RB: 0.85, LB: 0.85 },
  LB: { RB: 0.9, LW: 0.88, CB: 0.85, DM: 0.75 },
  RB: { LB: 0.9, RW: 0.88, CB: 0.85, DM: 0.75 },
  DM: { CM: 0.95, CB: 0.88, AM: 0.8 },
  CM: { DM: 0.95, AM: 0.92, LW: 0.8, RW: 0.8 },
  AM: { CM: 0.92, LW: 0.88, RW: 0.88, ST: 0.88, DM: 0.8 },
  LW: { RW: 0.93, AM: 0.88, ST: 0.85, LB: 0.82 },
  RW: { LW: 0.93, AM: 0.88, ST: 0.85, RB: 0.82 },
  ST: { AM: 0.85, LW: 0.85, RW: 0.85 },
};
FM.fit = (pos, slot) => {
  if (pos === slot) return 1;
  if (pos === 'GK' || slot === 'GK') return 0.35;
  const n = NEAR[pos] && NEAR[pos][slot];
  if (n) return n;
  return FM.GROUP[pos] === FM.GROUP[slot] ? 0.8 : 0.65;
};

// Схемы: позиции слотов и координаты на поле (x, y в процентах; ворота соперника сверху).
FM.FORMATIONS = {
  '4-4-2': [['GK', 50, 92], ['RB', 84, 74], ['CB', 62, 78], ['CB', 38, 78], ['LB', 16, 74], ['RW', 84, 46], ['CM', 62, 52], ['CM', 38, 52], ['LW', 16, 46], ['ST', 62, 18], ['ST', 38, 18]],
  '4-3-3': [['GK', 50, 92], ['RB', 84, 72], ['CB', 62, 78], ['CB', 38, 78], ['LB', 16, 72], ['CM', 70, 50], ['DM', 50, 60], ['CM', 30, 50], ['RW', 82, 22], ['ST', 50, 14], ['LW', 18, 22]],
  '4-2-3-1': [['GK', 50, 92], ['RB', 84, 72], ['CB', 62, 78], ['CB', 38, 78], ['LB', 16, 72], ['DM', 62, 58], ['DM', 38, 58], ['RW', 82, 34], ['AM', 50, 36], ['LW', 18, 34], ['ST', 50, 13]],
  '4-1-4-1': [['GK', 50, 92], ['RB', 84, 72], ['CB', 62, 78], ['CB', 38, 78], ['LB', 16, 72], ['DM', 50, 61], ['RW', 84, 38], ['CM', 62, 45], ['CM', 38, 45], ['LW', 16, 38], ['ST', 50, 14]],
  '4-4-2 ромб': [['GK', 50, 92], ['RB', 84, 72], ['CB', 62, 78], ['CB', 38, 78], ['LB', 16, 72], ['DM', 50, 61], ['CM', 72, 48], ['CM', 28, 48], ['AM', 50, 34], ['ST', 62, 15], ['ST', 38, 15]],
  '3-5-2': [['GK', 50, 92], ['CB', 72, 77], ['CB', 50, 80], ['CB', 28, 77], ['RB', 88, 48], ['CM', 66, 48], ['DM', 50, 58], ['CM', 34, 48], ['LB', 12, 48], ['ST', 62, 16], ['ST', 38, 16]],
  '3-4-3': [['GK', 50, 92], ['CB', 72, 77], ['CB', 50, 80], ['CB', 28, 77], ['RB', 86, 50], ['CM', 62, 54], ['CM', 38, 54], ['LB', 14, 50], ['RW', 80, 22], ['ST', 50, 14], ['LW', 20, 22]],
  '5-3-2': [['GK', 50, 92], ['RB', 88, 66], ['CB', 70, 77], ['CB', 50, 80], ['CB', 30, 77], ['LB', 12, 66], ['CM', 70, 48], ['DM', 50, 56], ['CM', 30, 48], ['ST', 62, 17], ['ST', 38, 17]],
};

// Соответствие игрока позиции с учётом выученных дополнительных позиций (p.alt) и идущего переучивания (p.train).
FM.pfit = (p, slot) => {
  let f = FM.fit(p.pos, slot);
  for (const a of p.alt || []) f = Math.max(f, FM.fit(a, slot));
  if (p.train && p.train.to === slot) f = Math.max(f, p.train.from + (1 - p.train.from) * Math.min(1, p.train.done / p.train.need));
  return f;
};
// Сколько недель переучиваться: чем дальше позиция и старше игрок, тем дольше.
FM.retrainWeeks = (p, to) => {
  const f = FM.pfit(p, to);
  const base = f >= 0.9 ? 3 : f >= 0.85 ? 5 : f >= 0.75 ? 8 : 12;
  return Math.round(base * (p.age >= 31 ? 1.5 : p.age <= 23 ? 0.8 : 1));
};

// Повышение и вылет между уровнем tier и tier+1 одной страны (сезон 2026/27):
//   down — сколько клубов напрямую вылетает из верхней лиги, up — сколько напрямую поднимается из нижней;
//   po.kind 'pair' — стыки «место в верхней лиге» (с конца таблицы: -3 = 16-е из 18) против «места в нижней», два матча;
//   po.kind 'semi' — плей-офф нижней лиги за одну путёвку: полуфиналы (from против to, from+1 против to-1) в двух матчах
//   и финал на нейтральном поле. Без правила — прямой обмен 2 на 2.
FM.PROMO = {
  RUS: { 1: { down: 2, up: 2, po: { kind: 'pair', pairs: [[-4, 4], [-3, 3]] } }, 2: { down: 3, up: 3 } },
  ENG: { 1: { down: 3, up: 2, po: { kind: 'semi', from: 3, to: 6 } }, 2: { down: 3, up: 2, po: { kind: 'semi', from: 3, to: 6 } },
    3: { down: 4, up: 3, po: { kind: 'semi', from: 4, to: 7 } } },
  ESP: { 1: { down: 3, up: 2, po: { kind: 'semi', from: 3, to: 6 } } },
  ITA: { 1: { down: 3, up: 2, po: { kind: 'semi', from: 3, to: 6 } } },
  GER: { 1: { down: 2, up: 2, po: { kind: 'pair', pairs: [[-3, 3]] } } },
  FRA: { 1: { down: 2, up: 2, po: { kind: 'pair', pairs: [[-3, 3]] } } },
};
FM.promoRule = (country, tier) => (FM.PROMO[country] && FM.PROMO[country][tier]) || { down: 2, up: 2 };

// Линия позиции в конкретной схеме определяется её высотой на поле: вингеры в 4-2-3-1 и 4-4-2 —
// полузащита, в 4-3-3 и 3-4-3 — атака; крайние защитники в 3-5-2 — полузащита. 'G' | 'D' | 'M' | 'F'.
FM.lineOf = (slot, formation) => {
  if (slot === 'GK') return 'G';
  const f = FM.FORMATIONS[formation];
  const e = f && f.find((x) => x[0] === slot);
  if (!e) return FM.GROUP[slot];
  return e[2] >= 64 ? 'D' : e[2] > 26 ? 'M' : 'F';
};

// ---------- страны ----------
FM.NAT = {
  RUS: 'Россия', BRA: 'Бразилия', ARG: 'Аргентина', COL: 'Колумбия', SRB: 'Сербия', KAZ: 'Казахстан', ARM: 'Армения',
  CPV: 'Кабо-Верде', ANG: 'Ангола', NGA: 'Нигерия', CMR: 'Камерун', GHA: 'Гана', POR: 'Португалия', LUX: 'Люксембург',
  BEL: 'Бельгия', CRC: 'Коста-Рика', JAM: 'Ямайка', ALG: 'Алжир', MEX: 'Мексика', FRA: 'Франция', ECU: 'Эквадор',
  URU: 'Уругвай', BOL: 'Боливия', PAR: 'Парагвай', BIH: 'Босния и Герцеговина', BLR: 'Беларусь', MAR: 'Марокко',
  MNE: 'Черногория', HON: 'Гондурас', UZB: 'Узбекистан', AUT: 'Австрия', CHI: 'Чили', ALB: 'Албания', ITA: 'Италия',
  KVX: 'Косово', GEO: 'Грузия', SEN: 'Сенегал', IRN: 'Иран', BFA: 'Буркина-Фасо', TJK: 'Таджикистан', SVK: 'Словакия',
  CRO: 'Хорватия', ROU: 'Румыния', ESP: 'Испания', SVN: 'Словения', PER: 'Перу', SWE: 'Швеция', KGZ: 'Киргизия',
  PAK: 'Пакистан', MSR: 'Монтсеррат', BER: 'Бермуды', TCA: 'Теркс и Кайкос', FAR: 'Фарерские острова', SKN: 'Сент-Китс и Невис', BAN: 'Бангладеш', STL: 'Сент-Люсия', LCA: 'Сент-Люсия', BRB: 'Барбадос', FIJ: 'Фиджи', NAM: 'Намибия', AND: 'Андорра', FRO: 'Фарерские острова', MWI: 'Малави', ATG: 'Антигуа и Барбуда', GRN: 'Гренада', GUY: 'Гайана', LIE: 'Лихтенштейн', NCL: 'Новая Каледония', YEM: 'Йемен', FGU: 'Французская Гвиана', VIN: 'Сент-Винсент и Гренадины', MAS: 'Малайзия',
  DOM: 'Доминикана', PHI: 'Филиппины', GLP: 'Гваделупа', MTQ: 'Мартиника', PUR: 'Пуэрто-Рико', UAE: 'ОАЭ', STP: 'Сан-Томе и Принсипи', ERI: 'Эритрея', AZE: 'Азербайджан', GER: 'Германия', NED: 'Нидерланды', CIV: 'Кот-д’Ивуар', MLI: 'Мали',
  UKR: 'Украина', MDA: 'Молдова', TKM: 'Туркменистан', VEN: 'Венесуэла', MKD: 'Северная Македония', BUL: 'Болгария',
  POL: 'Польша', CZE: 'Чехия', HUN: 'Венгрия', GRE: 'Греция', TUR: 'Турция', ISR: 'Израиль', EGY: 'Египет', TUN:
  'Тунис', GUI: 'Гвинея', GAM: 'Гамбия', TOG: 'Того', BEN: 'Бенин', CGO: 'Конго', COD: 'ДР Конго', GAB: 'Габон', ZAM:
  'Замбия', ZIM: 'Зимбабве', RSA: 'ЮАР', MOZ: 'Мозамбик', GNB: 'Гвинея-Бисау', EQG: 'Экваториальная Гвинея', SLE:
  'Сьерра-Леоне', LBR: 'Либерия', NIG: 'Нигер', CHA: 'Чад', CTA: 'ЦАР', KEN: 'Кения', UGA: 'Уганда', TAN: 'Танзания',
  ETH: 'Эфиопия', SDN: 'Судан', LBY: 'Ливия', MTN: 'Мавритания', MAD: 'Мадагаскар', COM: 'Коморы', BDI: 'Бурунди',
  RWA: 'Руанда', PAN: 'Панама', CUB: 'Куба', HAI: 'Гаити', GUA: 'Гватемала', SLV: 'Сальвадор', NCA: 'Никарагуа', CUW:
  'Кюрасао', SUR: 'Суринам', TRI: 'Тринидад и Тобаго', CAN: 'Канада', USA: 'США', ENG: 'Англия', SCO: 'Шотландия',
  WAL: 'Уэльс', NIR: 'Северная Ирландия', IRL: 'Ирландия', DEN: 'Дания', NOR: 'Норвегия', FIN: 'Финляндия', ISL:
  'Исландия', SUI: 'Швейцария', LTU: 'Литва', LVA: 'Латвия', EST: 'Эстония', CYP: 'Кипр', MLT: 'Мальта', JPN:
  'Япония', KOR: 'Южная Корея', CHN: 'Китай', IRQ: 'Ирак', SYR: 'Сирия', LBN: 'Ливан', JOR: 'Иордания', PLE:
  'Палестина', KSA: 'Саудовская Аравия', QAT: 'Катар', AFG: 'Афганистан', IND: 'Индия', MGL: 'Монголия', AUS:
  'Австралия', NZL: 'Новая Зеландия', IDN: 'Индонезия', THA: 'Таиланд', VIE: 'Вьетнам',
};

// вес чемпионата при выборе обладателя «Золотого мяча» (высший дивизион; ниже — меньше)
FM.LEAGUE_W = { ENG: 1, ESP: 1, ITA: .94, GER: .94, FRA: .9, POR: .8, NED: .78, BEL: .72, TUR: .72, RUS: .7, BRA: .74, ARG: .7,
  KSA: .66, USA: .64, SCO: .66, CZE: .64, GRE: .64, DEN: .64, AUT: .64, SUI: .64, POL: .64 };
FM.leagueW = (country, tier) => (FM.LEAGUE_W[country] || .55) * (tier === 1 ? 1 : tier === 2 ? .55 : .35);

// Дерби и принципиальные противостояния: [клуб, клуб, название]
FM.DERBIES = [
  ['spartak', 'cska', 'Московское дерби'], ['spartak', 'zenit', 'Главное дерби страны'], ['cska', 'zenit', 'Дерби двух столиц'],
  ['cska', 'dinamo', 'Московское дерби'], ['spartak', 'dinamo', 'Московское дерби'], ['spartak', 'lokomotiv', 'Московское дерби'],
  ['cska', 'lokomotiv', 'Московское дерби'], ['dinamo', 'lokomotiv', 'Московское дерби'], ['krasnodar', 'rostov', 'Южное дерби'],
  ['arsenal', 'tottenham', 'Северолондонское дерби'], ['liverpool', 'everton', 'Мерсисайдское дерби'], ['man_utd', 'man_city', 'Манчестерское дерби'],
  ['liverpool', 'man_utd', 'Северо-западное дерби'], ['newcastle', 'sunderland', 'Тайн-Уирское дерби'], ['arsenal', 'chelsea', 'Лондонское дерби'],
  ['chelsea', 'tottenham', 'Лондонское дерби'], ['aston_villa', 'birmingham', 'Второе городское дерби'],
  ['real_madrid', 'barcelona', 'Эль Класико'], ['real_madrid', 'atletico', 'Мадридское дерби'], ['sevilla', 'betis', 'Севильское дерби'],
  ['barcelona', 'espanyol', 'Барселонское дерби'], ['athletic', 'real_sociedad', 'Баскское дерби'],
  ['inter', 'milan', 'Миланское дерби'], ['roma', 'lazio', 'Римское дерби'], ['juventus', 'inter', 'Дерби Италии'],
  ['juventus', 'torino', 'Туринское дерби'], ['napoli', 'roma', 'Дерби Солнца'],
  ['dortmund', 'schalke', 'Рурское дерби'], ['bayern', 'dortmund', 'Дер Классикер'], ['hamburg', 'werder', 'Северное дерби'],
  ['psg', 'marseille', 'Ле Классик'], ['lyon', 'saint_etienne', 'Ронское дерби'],
  ['benfica', 'sporting', 'Лиссабонское дерби'], ['porto', 'benfica', 'О Классико'],
  ['ajax', 'feyenoord', 'Де Классикер'], ['ajax', 'psv', 'Принципиальное противостояние'],
  ['galatasaray', 'fenerbahce', 'Межконтинентальное дерби'], ['besiktas', 'galatasaray', 'Стамбульское дерби'], ['besiktas', 'fenerbahce', 'Стамбульское дерби'],
  ['celtic', 'rangers', 'Олд Фирм'], ['olympiacos', 'panathinaikos', 'Дерби вечных соперников'],
  ['anderlecht', 'club_brugge', 'Топпер'], ['standard', 'anderlecht', 'Классико Бельгии'],
  ['boca', 'river', 'Суперкласико'], ['flamengo', 'fluminense', 'Фла-Флу'], ['corinthians', 'palmeiras', 'Паулистское дерби'],
  ['sao_paulo', 'corinthians', 'Паулистское дерби'], ['al_hilal', 'al_nassr', 'Эр-Риядское дерби'],
  ['copenhagen', 'brondby', 'Новое дерби'], ['rapid', 'austria_wien', 'Венское дерби'], ['basel', 'zurich', 'Классико Швейцарии'],
  ['dinamo_minsk', 'bate', 'Классико Беларуси'], ['qarabag', 'neftchi', 'Классико Азербайджана'], ['astana', 'kairat', 'Классико Казахстана'],
];
FM.DERBY_MAP = new Map(FM.DERBIES.flatMap(([a, b, n]) => [[`${a}|${b}`, n], [`${b}|${a}`, n]]));
FM.derbyName = (a, b) => FM.DERBY_MAP.get(`${a}|${b}`) || null;

// национальные кубки: у каждой страны с лигами в игре свой кубок
FM.CUP_NAME = {
  RUS: 'Кубок России', ENG: 'Кубок Англии', ESP: 'Кубок Короля', ITA: 'Кубок Италии', GER: 'Кубок Германии',
  FRA: 'Кубок Франции', POR: 'Кубок Португалии', NED: 'Кубок Нидерландов', BEL: 'Кубок Бельгии', TUR: 'Кубок Турции',
  POL: 'Кубок Польши', CZE: 'Кубок Чехии', SCO: 'Кубок Шотландии', GRE: 'Кубок Греции', DEN: 'Кубок Дании',
  AUT: 'Кубок Австрии', SUI: 'Кубок Швейцарии', KSA: 'Королевский кубок', USA: 'Открытый кубок США', BRA: 'Кубок Бразилии',
  ARG: 'Кубок Аргентины', BLR: 'Кубок Беларуси', AZE: 'Кубок Азербайджана', ARM: 'Кубок Армении', KAZ: 'Кубок Казахстана',
  UZB: 'Кубок Узбекистана',
};
FM.cupName = (c) => FM.CUP_NAME[c] || `Кубок: ${FM.NAT[c] || c}`;
// id турнира в матчах: 'cup' — Кубок России (как в старых сохранениях), 'cup_ENG' — остальные
FM.cupId = (c) => (c === 'RUS' ? 'cup' : `cup_${c}`);
FM.isCup = (comp) => comp === 'cup' || (typeof comp === 'string' && comp.startsWith('cup_'));
FM.cupCountry = (comp) => (comp === 'cup' ? 'RUS' : comp.slice(4));

// ---------- имена для сгенерированных игроков ----------
const FIRST = ['Александр', 'Алексей', 'Андрей', 'Артём', 'Богдан', 'Вадим', 'Валерий', 'Владимир', 'Владислав', 'Всеволод',
  'Георгий', 'Глеб', 'Григорий', 'Даниил', 'Данила', 'Денис', 'Дмитрий', 'Евгений', 'Егор', 'Иван', 'Игорь', 'Илья',
  'Кирилл', 'Константин', 'Лев', 'Леонид', 'Максим', 'Марк', 'Матвей', 'Михаил', 'Никита', 'Николай', 'Олег', 'Павел',
  'Роман', 'Руслан', 'Святослав', 'Сергей', 'Станислав', 'Степан', 'Тимофей', 'Тимур', 'Фёдор', 'Ярослав', 'Арсений', 'Захар'];
const LAST = ['Абрамов', 'Алексеев', 'Андреев', 'Афанасьев', 'Белов', 'Беляев', 'Блинов', 'Богданов', 'Борисов', 'Быков',
  'Васильев', 'Виноградов', 'Власов', 'Волков', 'Воробьёв', 'Гаврилов', 'Герасимов', 'Голубев', 'Гончаров', 'Горбунов',
  'Григорьев', 'Гусев', 'Давыдов', 'Денисов', 'Дмитриев', 'Ершов', 'Егоров', 'Жуков', 'Зайцев', 'Захаров', 'Зуев',
  'Иванов', 'Ильин', 'Казаков', 'Калинин', 'Карпов', 'Киселёв', 'Климов', 'Ковалёв', 'Козлов', 'Колесников', 'Комаров',
  'Кондратьев', 'Королёв', 'Кудрявцев', 'Кузнецов', 'Куликов', 'Лазарев', 'Лебедев', 'Логинов', 'Лукин', 'Макаров',
  'Максимов', 'Медведев', 'Мельников', 'Миронов', 'Михайлов', 'Морозов', 'Назаров', 'Никитин', 'Николаев', 'Новиков',
  'Орлов', 'Осипов', 'Павлов', 'Панов', 'Пестов', 'Петров', 'Поляков', 'Попов', 'Прохоров', 'Родионов', 'Романов',
  'Рыбаков', 'Савельев', 'Семёнов', 'Сергеев', 'Сидоров', 'Смирнов', 'Соболев', 'Соколов', 'Соловьёв', 'Субботин',
  'Тарасов', 'Тимофеев', 'Титов', 'Третьяков', 'Тихонов', 'Уваров', 'Ульянов', 'Устинов', 'Фёдоров', 'Филиппов',
  'Фомин', 'Фролов', 'Хохлов', 'Цветков', 'Чернов', 'Шаров', 'Широков', 'Щербаков', 'Юдин', 'Яковлев', 'Яшин',
  'Абдулаев', 'Гаджиев', 'Магомедов', 'Алиев', 'Хасанов', 'Сафин', 'Гарипов', 'Валиев', 'Мусин', 'Хабибуллин',
  'Цаголов', 'Кокоев', 'Гагиев', 'Бароев', 'Ткаченко', 'Бондаренко', 'Шевчук', 'Кравец', 'Мартыненко', 'Литвинов'];
// имена для сгенерированных игроков европейских клубов
const NAMES = {
  ENG: [['Jack', 'Harry', 'Oliver', 'George', 'Charlie', 'James', 'Thomas', 'Alfie', 'Callum', 'Lewis', 'Ryan', 'Josh', 'Liam', 'Ben', 'Sam'],
    ['Smith', 'Jones', 'Taylor', 'Brown', 'Wilson', 'Evans', 'Walker', 'Wright', 'Robinson', 'Thompson', 'Hughes', 'Clarke', 'Hall', 'Green', 'Hill']],
  ESP: [['Pablo', 'Álvaro', 'Hugo', 'Adrián', 'Diego', 'Javier', 'Sergio', 'Iker', 'Marcos', 'Raúl', 'Iván', 'Rubén', 'Óscar', 'Mario', 'Dani'],
    ['García', 'Martínez', 'López', 'Sánchez', 'Pérez', 'Gómez', 'Fernández', 'Ruiz', 'Díaz', 'Moreno', 'Muñoz', 'Romero', 'Navarro', 'Torres', 'Gil']],
  ITA: [['Lorenzo', 'Matteo', 'Andrea', 'Francesco', 'Alessandro', 'Gabriele', 'Riccardo', 'Tommaso', 'Davide', 'Federico', 'Luca', 'Marco', 'Simone', 'Nicolò', 'Pietro'],
    ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'Costa', 'Fontana']],
  GER: [['Lukas', 'Leon', 'Finn', 'Jonas', 'Paul', 'Luca', 'Felix', 'Maximilian', 'Niklas', 'Tim', 'Jan', 'Moritz', 'Tom', 'David', 'Julian'],
    ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Koch', 'Richter', 'Klein', 'Wolf', 'Neumann']],
  FRA: [['Lucas', 'Hugo', 'Louis', 'Théo', 'Nathan', 'Mathis', 'Enzo', 'Maxime', 'Clément', 'Antoine', 'Yanis', 'Bastien', 'Rayan', 'Adrien', 'Jules'],
    ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia']],
  NED: [['Daan', 'Sem', 'Lucas', 'Milan', 'Levi', 'Luuk', 'Thijs', 'Jesse', 'Bram', 'Stijn', 'Ruben', 'Tim', 'Jens', 'Niels', 'Sven'],
    ['de Jong', 'Jansen', 'de Vries', 'van den Berg', 'Bakker', 'Visser', 'Smit', 'Meijer', 'de Boer', 'Mulder', 'Bos', 'Vos', 'Peters', 'Hendriks', 'Dekker']],
  POR: [['João', 'Rodrigo', 'Martim', 'Tiago', 'Diogo', 'Rafael', 'Gonçalo', 'Tomás', 'Pedro', 'Francisco', 'Duarte', 'Afonso', 'Rúben', 'Nuno', 'André'],
    ['Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Carvalho', 'Ribeiro']],
  BEL: [['Arthur', 'Noah', 'Louis', 'Jules', 'Lucas', 'Mathis', 'Senne', 'Wout', 'Arne', 'Maxime', 'Thibaut', 'Jarne', 'Robbe', 'Lander', 'Victor'],
    ['Peeters', 'Janssens', 'Maes', 'Jacobs', 'Mertens', 'Willems', 'Claes', 'Goossens', 'Wouters', 'Dubois', 'Lambert', 'Dupont', 'Martens', 'De Smet', 'Vermeulen']],
  TUR: [['Emre', 'Burak', 'Mert', 'Arda', 'Kerem', 'Yusuf', 'Ahmet', 'Mehmet', 'Can', 'Efe', 'Ozan', 'Berkay', 'Barış', 'Cenk', 'Oğuz'],
    ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Koç']],
  POL: [['Jakub', 'Kacper', 'Filip', 'Szymon', 'Bartosz', 'Mateusz', 'Michał', 'Kamil', 'Piotr', 'Patryk', 'Dawid', 'Krzysztof', 'Tomasz', 'Adrian', 'Łukasz'],
    ['Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak', 'Dąbrowski', 'Kozłowski', 'Mazur', 'Krawczyk', 'Piątek']],
  CZE: [['Jan', 'Tomáš', 'Jakub', 'Lukáš', 'Martin', 'David', 'Ondřej', 'Petr', 'Matěj', 'Adam', 'Filip', 'Vojtěch', 'Michal', 'Daniel', 'Josef'],
    ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Němec', 'Pokorný', 'Marek', 'Pospíšil', 'Hájek', 'Jelínek']],
  GRE: [['Giorgos', 'Dimitris', 'Konstantinos', 'Nikos', 'Panagiotis', 'Christos', 'Vasilis', 'Thanasis', 'Kostas', 'Stelios', 'Andreas', 'Michalis', 'Petros', 'Ilias', 'Lefteris'],
    ['Papadopoulos', 'Pappas', 'Georgiou', 'Oikonomou', 'Karagiannis', 'Vlachos', 'Nikolaidis', 'Makris', 'Dimitriou', 'Antoniou', 'Ioannidis', 'Christodoulou', 'Alexiou', 'Konstantinou', 'Mavros']],
  DEN: [['Mads', 'Mikkel', 'Jonas', 'Frederik', 'Mathias', 'Rasmus', 'Oliver', 'Emil', 'Magnus', 'Lucas', 'Kasper', 'Christian', 'Andreas', 'Nikolaj', 'Victor'],
    ['Jensen', 'Nielsen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen', 'Larsen', 'Sørensen', 'Rasmussen', 'Jørgensen', 'Petersen', 'Madsen', 'Kristensen', 'Olsen', 'Thomsen']],
  BRA: [['Gabriel', 'Lucas', 'Matheus', 'Pedro', 'Guilherme', 'Rafael', 'Felipe', 'Gustavo', 'Vinícius', 'Bruno', 'Thiago', 'Igor', 'Caio', 'Diego', 'Rodrigo'],
    ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Araújo']],
  ARG: [['Santiago', 'Mateo', 'Facundo', 'Nicolás', 'Lautaro', 'Tomás', 'Franco', 'Agustín', 'Joaquín', 'Lucas', 'Matías', 'Gonzalo', 'Ezequiel', 'Valentín', 'Thiago'],
    ['González', 'Rodríguez', 'Gómez', 'Fernández', 'López', 'Díaz', 'Martínez', 'Pérez', 'Romero', 'Sosa', 'Álvarez', 'Torres', 'Ruiz', 'Benítez', 'Acosta']],
  USA: [['Tyler', 'Jordan', 'Brandon', 'Kyle', 'Chris', 'Josh', 'Justin', 'Matt', 'Ryan', 'Caleb', 'Mason', 'Ethan', 'Logan', 'Cole', 'Owen'],
    ['Johnson', 'Williams', 'Miller', 'Davis', 'Anderson', 'Moore', 'Jackson', 'Martin', 'Lee', 'Harris', 'Clark', 'Lewis', 'Walker', 'Young', 'Allen']],
  KSA: [['Mohammed', 'Abdullah', 'Fahad', 'Saud', 'Faisal', 'Turki', 'Nawaf', 'Sultan', 'Khalid', 'Abdulrahman', 'Salem', 'Ali', 'Hassan', 'Yasser', 'Majed'],
    ['Al-Dawsari', 'Al-Shahrani', 'Al-Ghamdi', 'Al-Qahtani', 'Al-Harbi', 'Al-Otaibi', 'Al-Malki', 'Al-Zahrani', 'Al-Shehri', 'Al-Mutairi', 'Al-Anazi', 'Al-Yami', 'Al-Buraikan', 'Al-Faraj', 'Al-Amri']],
};
FM.genName = (country) => {
  // страны без своего набора имён берут соседний
  const n = NAMES[country] || NAMES[{ SCO: 'ENG', WAL: 'ENG', IRL: 'ENG', NIR: 'ENG', AUT: 'GER', SUI: 'GER', CAN: 'USA', URU: 'ARG', CHI: 'ARG' }[country]];
  return n ? `${FM.pick(n[0])} ${FM.pick(n[1])}` : `${FM.pick(FIRST)} ${FM.pick(LAST)}`;
};

// ---------- рейтинг и стоимость ----------
// Рейтинг выводится из рыночной стоимости: 1 млн € ≈ 64, каждые ×10 к цене дают +11.
// Молодым цену завышает потенциал, ветеранам занижает возраст — это компенсируется.
FM.ovrFromValue = (vk, age) => {
  let o = 64 + 11 * Math.log10(Math.max(vk, 10) / 1000);
  if (age < 22) o -= (22 - age) * 1.6;
  if (age > 29) o += Math.min(9, (age - 29) * 1.3);
  return Math.round(FM.clamp(o, 38, 93));
};
FM.baseValue = (ovr, age, pot) => {
  let e = (ovr - 64) / 11;
  if (age < 22) e += ((22 - age) * 1.6) / 11;
  if (age > 29) e -= Math.min(9, (age - 29) * 1.3) / 11;
  let v = 1000 * Math.pow(10, e);
  if (pot > ovr && age < 24) v *= 1 + (pot - ovr) * 0.015;
  // наверху рынка цена растёт медленнее: +1 к рейтингу у звезды — это не +23% стоимости
  if (v > 40000) v = 40000 * Math.pow(v / 40000, 0.33);
  return v;
};
// потолок рыночной стоимости (тыс. €) — рекорд рынка около 220 млн
FM.VALUE_CAP = 220000;
FM.roundValue = (v) => {
  if (v >= 10000) return Math.round(v / 500) * 500;
  if (v >= 1000) return Math.round(v / 100) * 100;
  if (v >= 100) return Math.round(v / 25) * 25;
  return Math.max(10, Math.round(v / 5) * 5);
};
// Потенциал — рейтинг, до которого игрок ещё может вырасти. Запас роста быстро сокращается с возрастом:
// у 17-летних до +22, у 23-летних до +7, после 27 лет игрок уже на пике (потенциал = рейтинг).
FM.potRoom = (age) => (age <= 17 ? 22 : age <= 19 ? 16 : age <= 21 ? 12 : age <= 23 ? 7 : age <= 25 ? 4 : age <= 27 ? 2 : 0);
FM.potFor = (ovr, age) => {
  const room = FM.potRoom(age);
  if (!room) return ovr;
  // талант: насколько игрок сильнее типичного сверстника (в 17 лет ~52, к 24 годам ~66) — у сильных молодых выше и запас
  const talent = FM.clamp((ovr - (52 + (Math.min(age, 24) - 17) * 2)) / 12, -1, 1);
  const share = FM.clamp(0.25 + 0.35 * Math.random() + 0.3 * talent, 0, 1);
  return Math.min(94, ovr + Math.round(room * share));
};
// Еврокубки: квоты по странам, день недели, призовые (тыс. €): участие, победа и ничья в общем этапе,
// выход в 1/4, в 1/2, в финал и победа.
FM.EURO = [
  { id: 'ucl', name: 'Лига чемпионов', short: 'ЛЧ', day: 3, final: '05-29', quota: { ENG: 4, ESP: 4, ITA: 3, GER: 3, FRA: 3, POR: 2, NED: 1, BEL: 1, TUR: 1, POL: 1, RUS: 1 },
    fee: 18600, win: 2100, draw: 700, ko: [11000, 15000, 18500, 6500] },
  { id: 'uel', name: 'Лига Европы', short: 'ЛЕ', day: 4, final: '05-19', quota: { ENG: 2, ESP: 2, ITA: 2, GER: 2, FRA: 2, POR: 2, NED: 2, BEL: 2, TUR: 2, POL: 1, RUS: 1, CZE: 1, SCO: 1, GRE: 1, DEN: 1 },
    fee: 4300, win: 450, draw: 150, ko: [1750, 2600, 4000, 4000] },
  { id: 'uecl', name: 'Лига конференций', short: 'ЛК', day: 4, final: '05-26', quota: { ENG: 2, ESP: 2, ITA: 2, GER: 2, FRA: 1, POR: 1, NED: 1, BEL: 1, TUR: 1, POL: 1, RUS: 2, CZE: 1, SCO: 1, GRE: 1, DEN: 1, AUT: 1, SUI: 1, KAZ: 1, AZE: 1 },
    fee: 3200, win: 400, draw: 130, ko: [800, 1300, 2000, 2000] },
];

// Репутация по стоимости состава (тыс. €): 100 млн ≈ 72, 1 млрд ≈ 92, 5 млн ≈ 46.
FM.repFromValue = (sv) => Math.round(FM.clamp(72 + 20 * Math.log10(Math.max(sv, 1) / 100000), 35, 99));
// Зарплата в неделю (тыс. €): около 11% стоимости в год. Молодые на первых контрактах получают меньше,
// опытные — больше; в России, Турции и Саудовской Аравии платят щедрее относительно стоимости, в Нидерландах,
// Португалии и Бельгии — скромнее.
FM.WAGE_C = { RUS: 1.3, TUR: 1.3, KSA: 1.7, ENG: 1.1, NED: 0.75, POR: 0.75, BEL: 0.8, SCO: 0.8, BRA: 0.9, ARG: 0.8, USA: 1.1 };
FM.wageFor = (value, tier, age = 26, country = '') => {
  const ageK = age <= 21 ? 0.6 : age <= 23 ? 0.8 : age <= 29 ? 1 : age <= 32 ? 1.2 : 1.35;
  return Math.max([0, 1.5, 0.6, 0.25][tier] || 0.25, value * 0.0021 * ageK * (FM.WAGE_C[country] || 1));
};
