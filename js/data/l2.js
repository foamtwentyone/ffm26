// Вторая лига, дивизион «А» 2026/27 — третий уровень. В реальности дивизион играет в два этапа
// группами «Золото» и «Серебро»; в игре это один круговой турнир из 18 клубов.
// Заявки клубов третьего уровня в открытых источниках почти не публикуются, поэтому составы
// генерируются игрой (игроки со значком «*»); реальных игроков можно внести в редакторе базы.
FM.addLeague({
  id: 'l2', name: 'Вторая лига А', short: '2Л-А', tier: 3, weekday: 0,
  autumn: { from: '07-17', rounds: 20 }, spring: { from: '03-06', rounds: 14 },
  ticket: 1.5, prize: [400, 300, 250, 200, 150, 120, 100, 90, 80, 70, 60, 55, 50, 45, 40, 35, 30, 25],
  teams: [
    { id: 'alania', name: 'Алания', city: 'Владикавказ', stadium: 'Спартак', cap: 32400, colors: ['#ffd200', '#d71920'], rep: 50, money: 600, players: `` },
    { id: 'sokol', name: 'Сокол', city: 'Саратов', stadium: 'Локомотив', cap: 15000, colors: ['#0d47a1', '#ffffff'], rep: 50, money: 500, players: `` },
    { id: 'chayka', name: 'Чайка', city: 'Песчанокопское', stadium: 'Чайка', cap: 3000, colors: ['#00aeef', '#ffffff'], rep: 48, money: 400, players: `` },
    { id: 'volgar', name: 'Волгарь', city: 'Астрахань', stadium: 'Центральный', cap: 17500, colors: ['#0059b3', '#ffffff'], rep: 48, money: 400, players: `` },
    { id: 'dinamo_br', name: 'Динамо Брянск', city: 'Брянск', stadium: 'Динамо', cap: 10100, colors: ['#0057b8', '#ffffff'], rep: 47, money: 350, players: `` },
    { id: 'dinamo_vl', name: 'Динамо Владивосток', city: 'Владивосток', stadium: 'Динамо', cap: 10200, colors: ['#0057b8', '#ffffff'], rep: 46, money: 350, players: `` },
    { id: 'dinamo_kir', name: 'Динамо Киров', city: 'Киров', stadium: 'Динамо', cap: 4000, colors: ['#0057b8', '#ffffff'], rep: 46, money: 300, players: `` },
    { id: 'kaluga', name: 'Калуга', city: 'Калуга', stadium: 'Анненки', cap: 3000, colors: ['#003a70', '#ffd200'], rep: 46, money: 300, players: `` },
    { id: 'mashuk', name: 'Машук-КМВ', city: 'Пятигорск', stadium: 'Центральный', cap: 10000, colors: ['#00843d', '#ffffff'], rep: 45, money: 300, players: `` },
    { id: 'rodina2', name: 'Родина-2', city: 'Москва', stadium: 'Родина', cap: 1000, colors: ['#0033a0', '#e4002b'], rep: 45, money: 300, reserveOf: 'rodina', players: `` },
    { id: 'sibir', name: 'Сибирь', city: 'Новосибирск', stadium: 'Спартак', cap: 12500, colors: ['#1c4ea1', '#ffffff'], rep: 46, money: 300, players: `` },
    { id: 'amkar', name: 'Амкар-Пермь', city: 'Пермь', stadium: 'Звезда', cap: 17000, colors: ['#d71920', '#111111'], rep: 46, money: 300, players: `` },
    { id: 'dinamo_st', name: 'Динамо Ставрополь', city: 'Ставрополь', stadium: 'Динамо', cap: 15000, colors: ['#0057b8', '#ffffff'], rep: 44, money: 250, players: `` },
    { id: 'dinamo2', name: 'Динамо-2', city: 'Москва', stadium: 'Новогорск', cap: 1000, colors: ['#003b8e', '#ffffff'], rep: 44, money: 250, reserveOf: 'dinamo', players: `` },
    { id: 'zenit2', name: 'Зенит-2', city: 'Санкт-Петербург', stadium: 'Смена', cap: 2000, colors: ['#0b74c4', '#ffffff'], rep: 46, money: 300, reserveOf: 'zenit', players: `` },
    { id: 'irtysh', name: 'Иртыш', city: 'Омск', stadium: 'Красная звезда', cap: 5000, colors: ['#0d3d8c', '#ffffff'], rep: 44, money: 250, players: `` },
    { id: 'torpedo_m', name: 'Торпедо Миасс', city: 'Миасс', stadium: 'Труд', cap: 3000, colors: ['#111111', '#ffffff'], rep: 44, money: 250, players: `` },
    { id: 'tyumen', name: 'Тюмень', city: 'Тюмень', stadium: 'Геолог', cap: 13000, colors: ['#c8102e', '#ffffff'], rep: 45, money: 300, players: `` },
  ],
});
