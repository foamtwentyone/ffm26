// Чемпионат Беларуси, сезон 2026/27. Клубы и составы — Википедия (сайты федераций недоступны); у клубов без состава
// игроков создаёт игра. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Без плей-офф.
FM.addLeague({
  id: 'blr', name: 'Чемпионат Беларуси', short: 'Беларусь', country: 'BLR', tier: 1, weekday: 6,
  autumn: { from: '09-12', rounds: 12 }, spring: { from: '01-16', rounds: 10 },
  ticket: 1, prize: [200, 140, 100, 80, 60, 50, 40, 35, 30, 25, 20, 20],
  teams: [
    { id: 'by_stolitsa', name: 'Столица', city: 'Минск', stadium: 'Дворец спорта «Уручье»', cap: 3000, colors: ['#1a3d8f', '#ffffff'], rep: 70, money: 360, players: `
Максим Трофимович|GK|27|0|BLR|63
Алексей Лукша|GK|34|0|BLR|62
Олег Горбенко|UN|39|0|BLR|57
Владимир Жигалко|UN|36|0|BLR|61
Ильнур Исламов|UN|36|0|RUS|64
Павел Книга|UN|33|0|BLR|61
Артём Козел|UN|32|0|BLR|63
Саркис Маргарян|UN|33|0|BLR|67
Владимир Пискун|UN|33|0|BLR|61
Александр Умпирович|UN|30|0|BLR|63
Игорь Щербич|UN|34|0|BLR|60
Дмитрий Шведко|UN|26|0|BLR|67
Сергей Лавор|UN|33|0|BLR|61` },
    { id: 'by_viten', name: 'Витэн', city: 'Орша', stadium: 'СК «Олимпиец»', cap: 250, colors: ['#0f6b3a', '#ffffff'], rep: 66, money: 312, players: `
Мирослав Эльяшевич|GK|25|0|BLR|64
Евгений Змысля|GK|33|0|BLR|64
Максим Батурин|DF|33|0|BLR|64
Павел Раговик|DF|35|0|BLR|61
Сергей Остертах|DF|32|0|BLR|60
Евгений Балдин|UN|31|0|BLR|65
Сергей Синицкий|UN|32|0|BLR|61
Арчил Себисквирадзе|UN|37|0|GEO|62
Юрий Рабыко|UN|39|0|BLR|54
Владислав Бреднев|UN|26|0|BLR|65
Артём Зуёнок|FW|36|0|BLR|61
Владимир Разуванов|FW|34|0|BLR|58` },
    { id: 'by_vrz', name: 'ВРЗ', city: 'Гомель', stadium: 'Универсальный зал игровых видов спорта', cap: 750, colors: ['#c8102e', '#ffffff'], rep: 64, money: 288, players: `` },
    { id: 'by_minsk', name: 'Минск', city: 'Минск', stadium: 'Спорткомплекс МАПИД', cap: 500, colors: ['#e30613', '#1b3c8c'], rep: 62, money: 264, players: `` },
    { id: 'by_borisov', name: 'Борисов-900', city: 'Борисов', stadium: 'Физкультурно-оздоровительный центр', cap: 400, colors: ['#f39200', '#1b1b1b'], rep: 58, money: 216, players: `` },
    { id: 'by_bch', name: 'БЧ', city: 'Гомель', stadium: 'СК «Локомотив»', cap: 750, colors: ['#005baa', '#ffffff'], rep: 56, money: 192, players: `` },
    { id: 'by_dorozhnik', name: 'Дорожник', city: 'Минск', stadium: 'Спорткомплекс МАПИД', cap: 500, colors: ['#ffd200', '#0b3a82'], rep: 56, money: 192, players: `` },
    { id: 'by_merkury', name: 'Меркурий-ГТК', city: 'Брест', stadium: 'СК «Виктория»', cap: 3740, colors: ['#00843d', '#ffffff'], rep: 55, money: 180, players: `` },
    { id: 'by_okhrana', name: 'Охрана-Динамо', city: 'Минск', stadium: 'Спорткомплекс МАПИД', cap: 500, colors: ['#1f4fa3', '#ffffff'], rep: 54, money: 168, players: `` },
    { id: 'by_uvd', name: 'УВД-Динамо', city: 'Гродно', stadium: 'Спорткомплекс «Виктория»', cap: 300, colors: ['#123f8c', '#e8e8e8'], rep: 52, money: 144, players: `` },
    { id: 'by_lida', name: 'Лида-БутикАвто', city: 'Лида', stadium: 'СОК «Олимпия»', cap: 680, colors: ['#d71920', '#ffffff'], rep: 52, money: 144, players: `` },
    { id: 'by_ckk', name: 'ЦКК', city: 'Светлогорск', stadium: 'СК «Олимп»', cap: 500, colors: ['#2e7d32', '#f5f5f5'], rep: 50, money: 120, players: `` },
  ],
});
