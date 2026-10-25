// Чемпионат Кыргызстана, сезон 2026/27. Клубы и составы — Википедия (сайты федераций недоступны); у клубов без состава
// игроков создаёт игра. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Без плей-офф.
FM.addLeague({
  id: 'kgz', name: 'Чемпионат Кыргызстана', short: 'Кыргызстан', country: 'KGZ', tier: 1, weekday: 0,
  autumn: { from: '09-12', rounds: 10 }, spring: { from: '01-16', rounds: 8 },
  ticket: 1, prize: [200, 140, 100, 80, 60, 50, 40, 35, 30, 25, 20, 20],
  teams: [
    { id: 'kg_dordoy', name: 'Дордой', city: 'Бишкек', stadium: '—', cap: 1000, colors: ['#1e88e5', '#ffffff'], rep: 56, money: 192, players: `` },
    { id: 'kg_steelex', name: 'Стилекс', city: 'Бишкек', stadium: '—', cap: 800, colors: ['#455a64', '#ffffff'], rep: 54, money: 168, players: `` },
    { id: 'kg_dastan', name: 'Дастан', city: 'Бишкек', stadium: '—', cap: 800, colors: ['#c62828', '#ffd600'], rep: 52, money: 144, players: `` },
    { id: 'kg_toptogolok', name: 'Топ-Тоголок', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#2e7d32', '#ffffff'], rep: 50, money: 120, players: `` },
    { id: 'kg_alay', name: 'Алай', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#ef6c00', '#ffffff'], rep: 50, money: 120, players: `` },
    { id: 'kg_farvater', name: 'Фарватер-Аман', city: 'Бишкек', stadium: '—', cap: 600, colors: ['#0d47a1', '#90caf9'], rep: 48, money: 96, players: `` },
    { id: 'kg_zarya', name: 'Заря', city: 'Чуй', stadium: '—', cap: 500, colors: ['#f9a825', '#1b1b1b'], rep: 46, money: 80, players: `` },
    { id: 'kg_tenirtoo', name: 'Тенир-Тоо', city: 'Нарын', stadium: '—', cap: 500, colors: ['#00695c', '#ffffff'], rep: 46, money: 80, players: `` },
    { id: 'kg_agrostyle', name: '777-Агростайл', city: 'Кара-Суу', stadium: '—', cap: 500, colors: ['#558b2f', '#ffffff'], rep: 46, money: 80, players: `` },
    { id: 'kg_shavkat', name: 'Шавкат', city: 'Ош', stadium: '—', cap: 500, colors: ['#ad1457', '#ffffff'], rep: 44, money: 80, players: `` },
  ],
});
