// Суперлига Кыргызстана, сезон 2026/27. Участники — Sport АКИpress, составов в открытом доступе нет; у клубов без состава
// игроков создаёт игра. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Без плей-офф.
FM.addLeague({
  id: 'kgz', name: 'Суперлига Кыргызстана', short: 'Кыргызстан', country: 'KGZ', tier: 1, weekday: 0,
  autumn: { from: '09-12', rounds: 12 }, spring: { from: '01-16', rounds: 10 },
  ticket: 1, prize: [200, 140, 100, 80, 60, 50, 40, 35, 30, 25, 20, 20],
  teams: [
    { id: 'kg_dsgroup', name: 'ДС Групп', city: 'Нарын', stadium: '—', cap: 800, colors: ['#0d47a1', '#ffffff'], rep: 56, money: 192, players: `` },
    { id: 'kg_dostuk', name: 'Достук', city: 'Бишкек', stadium: '—', cap: 800, colors: ['#c62828', '#ffd600'], rep: 55, money: 180, players: `` },
    { id: 'kg_toptogolok', name: 'Топ-Тоголок', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#2e7d32', '#ffffff'], rep: 52, money: 144, players: `` },
    { id: 'kg_vivat', name: 'Виват', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#6a1b9a', '#ffffff'], rep: 51, money: 132, players: `` },
    { id: 'kg_muras', name: 'Мурас Юнайтед', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#ef6c00', '#1b1b1b'], rep: 51, money: 132, players: `` },
    { id: 'kg_cska', name: 'ЦСКА МО КР', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#b71c1c', '#1a237e'], rep: 50, money: 120, players: `` },
    { id: 'kg_naryn', name: 'Нарын', city: 'Нарын', stadium: '—', cap: 500, colors: ['#00695c', '#ffffff'], rep: 49, money: 108, players: `` },
    { id: 'kg_artblast', name: 'Артбласт Групп', city: 'Бишкек', stadium: '—', cap: 500, colors: ['#455a64', '#ffffff'], rep: 48, money: 96, players: `` },
    { id: 'kg_kant', name: 'Кант', city: 'Кант', stadium: '—', cap: 500, colors: ['#f9a825', '#1b1b1b'], rep: 47, money: 84, players: `` },
    { id: 'kg_alga', name: 'Алга', city: 'Бишкек', stadium: '—', cap: 500, colors: ['#1e88e5', '#ffffff'], rep: 47, money: 84, players: `` },
    { id: 'kg_lider', name: 'Лидер', city: 'Бишкек', stadium: '—', cap: 500, colors: ['#ad1457', '#ffffff'], rep: 46, money: 80, players: `` },
    { id: 'kg_zhashmuun', name: 'Жаш Муун', city: 'Бишкек', stadium: '—', cap: 500, colors: ['#558b2f', '#ffffff'], rep: 45, money: 80, players: `` },
  ],
});
