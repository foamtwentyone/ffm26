// Чемпионат Казахстана, сезон 2026/27. Участники — таблица чемпионата, составы «Кайрата» и «Атырау» — Википедия; у клубов без состава
// игроков создаёт игра. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Без плей-офф.
FM.addLeague({
  id: 'kaz', name: 'Чемпионат Казахстана', short: 'Казахстан', country: 'KAZ', tier: 1, weekday: 6,
  autumn: { from: '09-12', rounds: 12 }, spring: { from: '01-16', rounds: 10 },
  ticket: 2, prize: [200, 140, 100, 80, 60, 50, 40, 35, 30, 25, 20, 20],
  teams: [
    { id: 'kz_kairat', name: 'Кайрат', city: 'Алматы', stadium: 'СК «Балуан Шолак»', cap: 5000, colors: ['#f5c400', '#111111'], rep: 80, money: 480, players: `
Нарун Сериков|GK|25|0|KAZ|73
Жоао Пауло|GK|31|0|BRA|73
Ромуло|UN|40|0|RUS|69
Эдсон|UN|34|0|KAZ|69
Жахангир Рашит|UN|26|0|KAZ|73
Дамир Каирбай|UN|22|0|KAZ|70
Кевин Аррьета|UN|29|0|ARG|71
Жулио Занотто|UN|30|0|ARM|73
Даурен Турсагулов|UN|31|0|KAZ|73
Кайо Руис|UN|29|0|BRA|71
Атирсон|UN|23|0|BRA|70
Рафаэл|UN|24|0|BRA|73` },
    { id: 'kz_semey', name: 'Семей', city: 'Семей', stadium: '«Абай Арена»', cap: 2500, colors: ['#0b5cad', '#ffffff'], rep: 76, money: 432, players: `` },
    { id: 'kz_aktobe', name: 'Актобе', city: 'Актобе', stadium: '—', cap: 1500, colors: ['#c8102e', '#ffffff'], rep: 70, money: 360, players: `` },
    { id: 'kz_atyrau', name: 'Атырау', city: 'Атырау', stadium: '—', cap: 1500, colors: ['#0a3d91', '#f2c200'], rep: 68, money: 336, players: `
Нияз Алпысбай|GK|18|0|KAZ|58
Талгат Утепбергенов|GK|23|0|KAZ|63
Али Асылбеков|UN|21|0|KAZ|65
Расул Ерболулы|UN|18|0|KAZ|58
Алиссон Тайлан Сантос|UN|29|0|BRA|65
Рамазан Бисембайулы|UN|27|0|KAZ|65
Талап Есениязов|UN|36|0|KAZ|61
Наурызбек Амандыков|UN|21|0|KAZ|62
Жанмурат Амандос|UN|18|0|KAZ|62
Олжас Мейрамулы|UN|18|0|KAZ|60
Дулат Айтжанов|UN|16|0|KAZ|54
Данияр Салимжанов|UN|21|0|KAZ|64
Аят Мусабаев|UN|19|0|KAZ|64
Нурболат Батырханов|UN|28|0|KAZ|67
Азат Кайржанов|UN|22|0|KAZ|62
Нурали Келбатыр|UN|16|0|KAZ|60` },
    { id: 'kz_ayat', name: 'Аят', city: 'Рудный', stadium: '—', cap: 1200, colors: ['#1e7b34', '#ffffff'], rep: 66, money: 312, players: `` },
    { id: 'kz_tulpar', name: 'Тулпар', city: 'Караганда', stadium: '—', cap: 1200, colors: ['#1d2f6f', '#e2b13c'], rep: 60, money: 240, players: `` },
    { id: 'kz_kaspiy', name: 'Каспий', city: 'Актау', stadium: '—', cap: 1000, colors: ['#0091c8', '#ffffff'], rep: 58, money: 216, players: `` },
    { id: 'kz_elorda', name: 'Елорда', city: 'Астана', stadium: '—', cap: 1000, colors: ['#00a3e0', '#f2c200'], rep: 58, money: 216, players: `` },
    { id: 'kz_bayterek', name: 'Байтерек', city: 'Астана', stadium: '—', cap: 1000, colors: ['#1f3f8f', '#d4af37'], rep: 57, money: 204, players: `` },
    { id: 'kz_shymkent', name: 'Шымкент', city: 'Шымкент', stadium: '—', cap: 1000, colors: ['#e4002b', '#ffffff'], rep: 54, money: 168, players: `` },
    { id: 'kz_okzhetpes', name: 'Окжетпес', city: 'Кокшетау', stadium: '«Кокше Арена»', cap: 2000, colors: ['#1b6e3a', '#ffffff'], rep: 54, money: 168, players: `` },
  ],
});
