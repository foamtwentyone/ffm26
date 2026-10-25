// Чемпионат Казахстана, сезон 2026/27. Клубы и составы — Википедия (сайты федераций недоступны); у клубов без состава
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
    { id: 'kz_atyrau', name: 'Атырау', city: 'Атырау', stadium: '—', cap: 1500, colors: ['#0a3d91', '#f2c200'], rep: 67, money: 324, players: `
Нияз Алпысбай|GK|18|0|KAZ|58
Талгат Утепбергенов|GK|23|0|KAZ|62
Али Асылбеков|UN|21|0|KAZ|64
Расул Ерболулы|UN|18|0|KAZ|57
Алиссон Тайлан Сантос|UN|29|0|BRA|64
Рамазан Бисембайулы|UN|27|0|KAZ|64
Талап Есениязов|UN|36|0|KAZ|60
Наурызбек Амандыков|UN|21|0|KAZ|62
Жанмурат Амандос|UN|18|0|KAZ|62
Олжас Мейрамулы|UN|18|0|KAZ|60
Дулат Айтжанов|UN|16|0|KAZ|53
Данияр Салимжанов|UN|21|0|KAZ|64
Аят Мусабаев|UN|19|0|KAZ|64
Нурболат Батырханов|UN|28|0|KAZ|66
Азат Кайржанов|UN|22|0|KAZ|62
Нурали Келбатыр|UN|16|0|KAZ|59` },
    { id: 'kz_ayat', name: 'Аят', city: 'Рудный', stadium: '—', cap: 1200, colors: ['#1e7b34', '#ffffff'], rep: 62, money: 264, players: `` },
    { id: 'kz_tulpar', name: 'Тулпар', city: 'Караганда', stadium: '—', cap: 1200, colors: ['#1d2f6f', '#e2b13c'], rep: 60, money: 240, players: `` },
    { id: 'kz_kaspiy', name: 'Каспий', city: 'Актау', stadium: '—', cap: 1000, colors: ['#0091c8', '#ffffff'], rep: 58, money: 216, players: `` },
    { id: 'kz_ushkyn', name: 'Ушкын-Искра', city: 'Астана', stadium: 'СК «Алатау»', cap: 500, colors: ['#2a4d8f', '#d32f2f'], rep: 56, money: 192, players: `` },
    { id: 'kz_zhetysu', name: 'Жетысу', city: 'Талдыкорган', stadium: '—', cap: 1000, colors: ['#e4002b', '#ffd200'], rep: 54, money: 168, players: `` },
    { id: 'kz_munayshy', name: 'Мунайшы', city: 'Жанаозен', stadium: 'СК «Энергетик»', cap: 800, colors: ['#ffffff', '#dd0000'], rep: 54, money: 168, players: `` },
    { id: 'kz_sayran', name: 'Сайран', city: 'Астана', stadium: '—', cap: 600, colors: ['#00a3e0', '#ffffff'], rep: 52, money: 144, players: `` },
  ],
});
