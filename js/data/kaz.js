// Премьер-лига Казахстана 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'kaz', name: 'Премьер-лига Казахстана', short: 'Казахстан', country: 'KAZ', tier: 1, weekday: 6,
  autumn: { from: '08-01', rounds: 15 }, spring: { from: '03-06', rounds: 15 },
  ticket: 3, prize: [1500, 1400, 1350, 1250, 1200, 1100, 1000, 950, 850, 800, 700, 600, 550, 450, 400, 300],
  teams: [
    { id: 'kairat', name: 'Кайрат', city: 'Алматы', stadium: 'Стадион «Алматы»', cap: 8000, colors: ['#ffd700', '#000000'], players: `
Темирлан Анарбеков|GK|22|400|KAZ|2029
Шерхан Калмурза|GK|18|250|KAZ|2029
Данила Буч|GK|17|500|KAZ|2027
Lucas Áfrico|CB|30|300|BRA|2027
Александр Широбоков|CB|22|250|KAZ|2028
Luís Mata|LB|28|600|POR|2027
Лев Кургин|LB|23|150|KAZ|2027
Данияр Ташпулатов|LB|18|100|KAZ|2027
Александр Мрынский|RB|21|400|KAZ|2029
Еркин Тапалов|RB|32|300|KAZ|2027
Адлан Нургалиев|RB|18|500|KAZ|2027
Дамир Касабулат|DM|23|600|KAZ|2028
Адилет Садыбеков|DM|23|500|KAZ|2028
Олжас Байбек|DM|20|225|KAZ|2029
Jaakko Oksanen|CM|25|500|FIN|2028
Gustavo Mendonça|CM|22|200|POR|2030
Азамат Туякбаев|AM|18|150|KAZ|2029
Мухамедали Абиш|AM|18|500|KAZ|2028
Oiva Jukkola|LW|23|450|FIN|2028
Sebastián Zeballos|RW|24|500|ARG|2027
Исмаил Бекболат|RW|17|175|KAZ|2028
Marc Gual|ST|29|700|ESP|2028
Edmilson|ST|28|300|BRA|2027
Мансур Биркурманов|ST|18|500|KAZ|2027` },
    { id: 'astana', name: 'Астана', city: 'Астана', stadium: 'Стадион «Астана»', cap: 8000, colors: ['#ffd700', '#0055a4'], players: `
Мухаммеджан Сейсен|GK|26|400|KAZ|2027
Josip Condric|GK|32|300|CRO|2027
Данила Карпиков|GK|22|25|KAZ|2027
Branimir Kalaica|CB|27|900|CRO|2027
Kipras Kažukolovas|CB|25|700|LTU|2028
Ivan Miladinovic|CB|31|700|SRB|2027
Санжар Ануаров|CB|20|500|KAZ|2027
Ян Вороговский|LB|29|500|KAZ|2027
Дмитрий Шомко|LB|35|100|KAZ|2027
Karlo Bartolec|RB|30|600|CRO|2027
Айтуар Токен|RB|19|500|KAZ|2027
Ivan Basic|CM|23|1200|BIH|2027
Александр Меркел|CM|33|500|KAZ|2027
Динмухамед Караман|CM|25|400|KAZ|2027
Бауйржан Исламхан|AM|32|250|KAZ|2027
Станислав Басманов|LW|24|150|KAZ|2027
Ахметали Калтанов|LW|19|500|KAZ
Максат Абраев|LW|17|500|KAZ|2029
Marin Tomasov|RW|38|300|CRO|2027
Дамир Марат|RW|25|300|KAZ|2027
Рамазан Каримов|ST|26|250|KAZ|2027
Nnamdi Ahanonu|ST|23|50|NGA|2027` },
    { id: 'tobol', name: 'Тобол', city: 'Костанай', stadium: 'Стадион «Костанай»', cap: 8000, colors: ['#00a650', '#ffffff'], players: `
Данил Устименко|GK|25|400|KAZ|2027
Султан Бусурманов|GK|29|200|KAZ|2027
Юрий Мелихов|GK|22|25|KAZ|2027
Rayan Senhadji|CB|28|900|ALG|2027
Pape-Alioune Ndiaye|CB|27|500|FRA|2027
Nemanja Cavnic|CB|30|300|MNE|2027
Александр Марочкин|CB|35|100|KAZ|2027
Antonio Borsic|LB|30|700|CRO|2028
Роман Асранкулов|LB|26|450|KAZ|2027
Аманжол Бакитжанов|LB|18|50|KAZ|2027
Наурызбек Жагоров|RB|27|450|KAZ|2027
Abdoulaye Cissé|DM|29|700|GUI|2027
Максим Мякиш|DM|25|500|BLR|2027
Amine Talal|CM|29|400|MAR|2027
Емин Мусаев|CM|19|500|KAZ|2027
Султан Бахыткириев|CM|21|500|KAZ|2027
Азамат Зинадин|AM|19|500|KAZ|2027
Александр Зуев|LW|29|700|KAZ|2027
Ислам Чесноков|RW|26|1200|KAZ|2027
Luis Guerra|RW|29|900|VEN|2027
Даурен Жумат|RW|26|450|KAZ|2027
Виталий Лисакович|ST|27|700|BLR|2027
Uros Milovanović|ST|25|400|SRB|2027` },
    { id: 'yelimay', name: 'Елимай', city: 'Семей', stadium: 'Стадион «Семей»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Иван Коновалов|GK|31|450|RUS|2027
Егор Цуприков|GK|28|50|KAZ|2027
Адилбек Жумаханов|CB|23|600|KAZ|2027
Maj Mittendorfer|CB|25|400|SVN|2028
Higor Gabriel|CB|26|350|BRA
Арсен Аширбек|RB|22|200|KAZ|2027
Ади Адамбаев|RB|24|150|KAZ|2027
Артём Жилин|CM|18|500|KAZ|2027
Асан Байгалиев|CM|18|500|KAZ|2027
Hrvoje Ilic|AM|26|700|CRO|2027
Жан-али Пайруз|LW|26|350|KAZ|2027
Duban Palacio|LW|28|325|COL|2027
Акмал Бахтияров|LW|27|200|KAZ|2027
Роман Муртазаев|LW|32|150|KAZ|2027
Fessou Euloge Placca|ST|31|400|TOG|2027
Иван Свиридов|ST|23|350|KAZ|2027
Roger Murillo|ST|23|300|COL|2027` },
    { id: 'aktobe', name: 'Актобе', city: 'Актобе', stadium: 'Стадион «Актобе»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
` },
    { id: 'zhenis', name: 'Женис', city: 'Астана', stadium: 'Стадион «Астана»', cap: 8000, colors: ['#0055a4', '#ffd700'], players: `
` },
    { id: 'ordabasy', name: 'Ордабасы', city: 'Шымкент', stadium: 'Стадион «Шымкент»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
` },
    { id: 'okzhetpes', name: 'Окжетпес', city: 'Кокшетау', stadium: 'Стадион «Кокшетау»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
` },
    { id: 'kyzylzhar', name: 'Кызылжар', city: 'Петропавловск', stadium: 'Стадион «Петропавловск»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
` },
    { id: 'ulytau', name: 'Улытау', city: 'Жезказган', stadium: 'Стадион «Жезказган»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
` },
    { id: 'kaysar', name: 'Кайсар', city: 'Кызылорда', stadium: 'Стадион «Кызылорда»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
` },
    { id: 'zhetysu', name: 'Жетысу', city: 'Талдыкорган', stadium: 'Стадион «Талдыкорган»', cap: 8000, colors: ['#ffd700', '#e30613'], players: `
` },
    { id: 'atyrau', name: 'Атырау', city: 'Атырау', stadium: 'Стадион «Атырау»', cap: 8000, colors: ['#ffd700', '#0055a4'], players: `
` },
    { id: 'kaspiy', name: 'Каспий', city: 'Актау', stadium: 'Стадион «Актау»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
` },
    { id: 'irtysh_pav', name: 'Иртыш Павлодар', city: 'Павлодар', stadium: 'Стадион «Павлодар»', cap: 8000, colors: ['#000000', '#ffffff'], players: `
` },
    { id: 'altay', name: 'Алтай', city: 'Усть-Каменогорск', stadium: 'Стадион «Усть-Каменогорск»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
` },
  ],
});
