// Суперлига Узбекистана, сезон 2026/27. Клубы последних сезонов (Википедия), составов в открытом доступе нет; у клубов без состава
// игроков создаёт игра. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Без плей-офф.
FM.addLeague({
  id: 'uzb', name: 'Суперлига Узбекистана', short: 'Узбекистан', country: 'UZB', tier: 1, weekday: 5,
  autumn: { from: '09-12', rounds: 10 }, spring: { from: '01-16', rounds: 8 },
  ticket: 1, prize: [200, 140, 100, 80, 60, 50, 40, 35, 30, 25, 20, 20],
  teams: [
    { id: 'uz_almalyk', name: 'Алмалык', city: 'Алмалык', stadium: '—', cap: 1500, colors: ['#f2a900', '#1b1b1b'], rep: 62, money: 264, players: `` },
    { id: 'uz_lokomotiv', name: 'Локомотив', city: 'Ташкент', stadium: '—', cap: 1500, colors: ['#d50000', '#ffffff'], rep: 58, money: 216, players: `` },
    { id: 'uz_turon', name: 'Турон-С', city: 'Андижан', stadium: '—', cap: 1200, colors: ['#1565c0', '#ffffff'], rep: 56, money: 192, players: `` },
    { id: 'uz_nafis', name: 'Нафис', city: 'Самарканд', stadium: '—', cap: 1000, colors: ['#6a1b9a', '#ffffff'], rep: 54, money: 168, players: `` },
    { id: 'uz_stroitel', name: 'Строитель', city: 'Зарафшан', stadium: '—', cap: 1000, colors: ['#ff6f00', '#ffffff'], rep: 54, money: 168, players: `` },
    { id: 'uz_dustlik', name: 'Дустлик', city: 'Карши', stadium: '—', cap: 1000, colors: ['#2e7d32', '#ffffff'], rep: 52, money: 144, players: `` },
    { id: 'uz_kagan', name: 'Каган', city: 'Каган', stadium: '—', cap: 800, colors: ['#00838f', '#ffffff'], rep: 50, money: 120, players: `` },
    { id: 'uz_solikchi', name: 'Соликчи', city: 'Чирчик', stadium: '—', cap: 800, colors: ['#37474f', '#ffd54f'], rep: 50, money: 120, players: `` },
    { id: 'uz_umid', name: 'Умид', city: 'Наманган', stadium: '—', cap: 800, colors: ['#0277bd', '#ffeb3b'], rep: 48, money: 96, players: `` },
    { id: 'uz_madaminov', name: 'Рузмат Мадаминов', city: 'Хива', stadium: '—', cap: 800, colors: ['#c62828', '#ffffff'], rep: 48, money: 96, players: `` },
  ],
});
