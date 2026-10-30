// Премьер-лига Азербайджана 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'aze', name: 'Премьер-лига Азербайджана', short: 'Азербайджан', country: 'AZE', tier: 1, weekday: 6,
  autumn: { from: '08-15', rounds: 11 }, spring: { from: '02-06', rounds: 11 },
  ticket: 3, prize: [1500, 1400, 1300, 1150, 1050, 950, 850, 750, 650, 500, 400, 300],
  teams: [
    { id: 'sabah', name: 'Сабах', city: 'Баку', stadium: 'Стадион «Баку»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Стас Покатилов|GK|33|600|KAZ|2027
Амин Рамазанов|GK|23|125|AZE|2028
Раван Мирзаммадов|GK|21|500|AZE|2027
Steve Solvet|CB|30|1000|GLP|2027
Aden McCarthy|CB|22|600|RSA|2029
Рахман Дашдамиров|CB|27|500|AZE|2027
Júnior Almeida|CB|26|300|BRA|2029
Tymoteusz Puchacz|LB|27|2500|POL|2029
Akim Zedadka|RB|31|800|ALG|2027
Теллур Муталлимов|RB|31|200|AZE|2027
Ivan Lepinjica|DM|27|2000|CRO|2027
Умарали Рахмоналиев|DM|23|1200|UZB|2029
Zinédine Ould Khaled|DM|26|350|FRA|2027
Rodrigo Fernandes|DM|25|175|POR|2028
Du Queiroz|CM|26|1500|BRA|2027
Алексей Исаев|CM|30|1000|AZE|2027
Абдулах Хайбулаев|CM|25|450|AZE|2027
Рауф Рустамли|CM|22|300|AZE|2027
Хаял Алиев|LW|22|800|AZE|2027
Joy-Lance Mickels|LW|32|800|RWA|2027
Veljko Simic|LW|31|750|SRB|2028
Christian Nwachukwu|LW|20|600|NGA|2029
Younes Lachaab|LW|21|500|FRA|2027
Kaheem Parris|RW|26|1000|JAM|2028
Xander Severina|RW|25|600|CUW|2028
Carlos Eduardo|ST|24|500|BRA|2027
Orphé Mbina|ST|25|350|GAB|2027` },
    { id: 'qarabag', name: 'Карабах', city: 'Агдам', stadium: 'Стадион «Агдам»', cap: 8000, colors: ['#000000', '#ffffff'], players: `
Martin Zlomislic|GK|28|2000|BIH|2029
Шахрудин Махаммадалиев|GK|32|600|AZE
Бахлул Мустафазада|CB|29|1000|AZE|2027
Bence Várkonyi|CB|24|500|HUN|2029
Бадави Хусейнов|CB|35|100|AZE|2027
Елвин Цафаркулиев|LB|25|2000|AZE|2027
Bruno Langa|LB|28|1000|MOZ|2029
Jérémie Gnali|LB|24|400|FRA|2028
Matheus Silva|RB|29|1200|BRA|2027
Cebrail Makreckis|RB|26|1000|LVA|2029
Аббас Хусейнов|RB|31|400|AZE
Pedro Bicalho|DM|25|2000|BRA|2029
Diego Rosa|DM|24|1500|BRA|2027
Marko Jankovic|CM|31|800|MNE|2027
Samuel Lobato|CM|25|450|POR|2029
Kady Borges|AM|30|2000|BRA|2029
Reda Khadra|AM|25|1200|GER|2028
Joni Montiel|AM|28|800|ESP|2027
Хикмат Цабраьилзада|AM|19|175|AZE
Taofeek Ismaheel|LW|26|1500|NGA|2029
Renaldo Cephas|LW|26|900|JAM|2029
Jaly Mouaddib|LW|25|550|FRA|2029
Олексий Кащук|RW|26|1500|UKR|2027
Zakaria Sawo|ST|26|750|GAM|2029
Муса Курбанлы|ST|24|750|AZE|2027` },
    { id: 'turan', name: 'Туран Товуз', city: 'Товуз', stadium: 'Стадион «Товуз»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
Олег Баклов|GK|32|500|TJK|2027
Алексей Кеняйкин|GK|28|300|RUS|2028
Мехман Хациев|GK|31|500|AZE
Emmanuel Hackman|CB|31|700|TOG
Haiderson Hurtado|CB|30|600|COL|2027
Filip Damjanovic|CB|28|450|SRB|2028
Рахил Маммадов|CB|30|225|AZE|2027
Roderick Miller|CB|34|175|PAN
Henrique Silva|LB|32|450|BRA|2027
Денис Марандици|LB|30|300|MDA
Фаик Хациев|RB|27|800|AZE
Jorge Silva|RB|30|650|POR|2027
Álex Serrano|CM|31|800|ESP|2027
Roberto Olabe|CM|30|600|ESP|2027
Steeve Beusnard|CM|34|250|FRA|2028
Вейсал Рзаев|CM|24|125|AZE
Рахим Садыхов|AM|30|1200|AZE|2027
Хаял Нацафов|AM|28|350|AZE
David Tavares|AM|27|175|CPV|2028
Aleksa Janković|RW|26|700|SRB|2029
Diogo Balau|RW|26|600|POR|2028
Ibrahima Wadji|ST|31|550|SEN|2027
Jô|ST|31|350|BRA|2027
Садик Шафиев|ST|21|125|AZE|2027` },
    { id: 'neftchi', name: 'Нефтчи', city: 'Баку', stadium: 'Стадион «Баку»', cap: 8000, colors: ['#000000', '#ffffff'], players: `
Рза Цафаров|GK|23|600|AZE|2027
Эмиль Балаев|GK|32|150|AZE|2028
Igor Ribeiro|CB|30|850|BRA|2027
Елвин Бадалов|CB|31|600|AZE|2027
Andreaw Gravillon|CB|28|500|GLP|2028
Мурад Хачаев|CB|28|450|AZE|2027
Albert Gomez|CB|20|500|GAM|2027
Руфат Аббасов|LB|21|1200|AZE|2029
Moustapha Seck|LB|30|500|ESP|2027
Falaye Sacko|RB|31|1000|MLI|2027
Аслан Ширинов|RB|21|500|AZE
Vicko Sevelj|DM|26|650|CRO|2029
Sessi D'Almeida|DM|30|400|BEN|2027
Ifeanyi Mathew|CM|29|650|NGA
Эмиль Сафаров|CM|23|500|AZE|2027
Gustavo Klismahn|CM|26|500|BRA|2028
Емин Махмудов|CM|34|450|AZE|2027
Freddy Vargas|LW|27|900|VEN|2028
Alen Skribek|LW|25|400|HUN|2028
Андрий Штогрин|LW|27|350|UKR|2027
Dragoljub Savic|RW|25|800|SRB|2028
Breno Almeida|RW|28|600|BRA|2028
Denzel Jubitana|ST|27|600|SUR|2028
Lubomir Tupta|ST|28|600|SVK|2028
Bassala Sambou|ST|29|400|ENG
Adeleke Akinyemi|ST|28|250|NGA|2028` },
    { id: 'zira', name: 'Зиря', city: 'Баку', stadium: 'Стадион «Баку»', cap: 8000, colors: ['#00a650', '#ffffff'], players: `
Айдын Байрамов|GK|30|400|AZE|2028
Maycon Cleiton|GK|27|250|BRA|2028
Хусейнали Кулиев|GK|27|200|AZE|2028
Анар Назиров|GK|41|500|AZE
Ruan Renato|CB|32|750|BRA|2027
Ange Mutsinzi|CB|28|700|RWA|2027
Mehdi Mchakhchekh|CB|22|325|MAR|2029
Елчин Алицанов|CB|27|300|AZE|2028
Issa Djibrilla|LB|30|550|NIG|2027
Henrique Gelain|LB|31|300|BRA|2027
Кисмат Алиев|RB|30|1400|AZE|2027
Амин Сейдиев|RB|27|650|AZE|2028
Исмаьил Ибрахимли|DM|28|550|AZE|2027
Guima|DM|30|500|MOZ|2027
Хацяга Хацылы|DM|28|125|AZE|2027
Ktatau|CM|25|500|BRA|2029
Айхан Хусейнов|AM|27|700|AZE|2028
Vieirinha|AM|29|375|POR|2028
Raphael Utzig|LW|30|700|BRA
Dimitri Legbo|LW|25|500|CIV
Гиорги Папунашвили|RW|31|650|GEO|2027
Давит Волкови|ST|31|800|GEO|2028
Loué Bayere Junior|ST|25|600|CIV|2028
Eren Aydın|ST|23|500|TUR|2029
Егор Богомолский|ST|26|250|BLR|2027` },
    { id: 'araz', name: 'Араз-Нахчыван', city: 'Нахчыван', stadium: 'Стадион «Нахчыван»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
Arthur Augusto|GK|27|200|BRA|2027
Тарлан Ахмадли|GK|31|100|AZE|2027
Issouf Paro|CB|32|225|BFA|2027
Luka Dumancic|CB|27|200|CRO|2027
Рашад Хасанов|CB|22|500|AZE|2027
Bruno Franco|LB|28|400|BRA|2027
Bojan Letic|LB|33|150|BIH|2027
Омар Булудов|RB|27|450|AZE|2027
Абдулла Рзаев|RB|24|250|AZE|2027
Мустафа Ахмадзада|DM|23|350|AZE|2028
Mamadou Kané|DM|29|200|GUI|2027
Ибрагим Пириев|CM|21|500|AZE|2028
Patrick Andrade|CM|33|300|CPV
Ровлан Мурадов|RW|28|400|AZE|2027
Цейхун Нуриев|AM|25|650|AZE|2027
Alberto Fernández|AM|27|375|ESP|2027
Кабил Ализада|AM|25|500|AZE
Mohamed Mara|LW|29|350|GUI|2027
Charles Boli|RW|28|600|FRA
Нихат Мехралиев|RW|21|50|AZE|2027
Улви Исгандаров|ST|29|300|AZE|2027
Агададаш Салянский|ST|22|150|AZE|2027
Abdallah Sudi|ST|26|125|BDI|2027` },
    { id: 'sumgayit', name: 'Сумгайыт', city: 'Сумгайыт', stadium: 'Стадион «Сумгайыт»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Хаял Фарзуллаев|GK|21|350|AZE|2027
Marko Johansson|GK|28|250|SWE
Jeimes|GK|25|200|BRA|2028
Афтандил Арихов|GK|19|500|AZE|2027
Renan Santana|CB|21|1000|BRA|2029
Easah Suliman|CB|28|200|PAK|2027
Imani Barker|CB|24|175|GUY|2029
Хоццат Хакверди|CB|33|100|AZE|2027
Канан Фейзиев|CB|19|75|AZE
Keffel|LB|27|750|BRA|2027
Надир Оруцов|LB|19|250|AZE|2028
Айхан Сулейманлы|LB|22|100|AZE|2027
Tiago Almeida|RB|25|700|POR|2027
Руслан Алиев|DM|22|25|AZE
Сабухи Абдуллазада|CM|24|1500|AZE|2027
Roi Kehat|CM|34|200|ISR|2027
Ronaldo Vásquez|AM|27|750|DOM|2027
Masaki Murata|AM|27|400|JPN|2027
Cedric Badolo|AM|27|350|BFA|2027
Эмиль Мустафаев|AM|25|325|AZE|2028
Lucas Black|AM|26|500|BRA|2028
Рустам Ахмадзада|LW|25|800|AZE|2027
Нихад Ахмадзада|LW|20|250|AZE|2027
Вусал Пашаев|LW|18|500|AZE|2028
Mamady Bangré|RW|25|350|BFA|2027
Jeam|ST|32|500|BRA|2027` },
    { id: 'shamakhi', name: 'Шамахы', city: 'Шамахы', stadium: 'Стадион «Шамахы»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Ricardo Fernandes|GK|31|400|POR|2027
Абдулла Сейдахмадов|GK|29|25|AZE|2027
Ницат Карагозлу|GK|20|500|AZE
David Santos|CB|25|450|BRA|2027
Емин Рустамов|CB|22|225|AZE|2028
Rui Pacheco|CB|24|500|POR|2028
Цейхун Багырзада|CB|20|500|AZE|2028
Санан Мурадлы|LB|20|75|AZE|2027
Jota|LB|26|500|POR|2027
Abdoul Rachid Moumini|RB|21|450|BEN|2027
Фариз Хейруллаев|RB|22|500|AZE|2027
Ricardo Apolinário|DM|27|650|POR
Оруц Маммадов|CM|22|500|AZE|2027
Эмиль Сулейманов|CM|22|150|AZE|2028
Filipe Marques|CM|28|500|POR|2028
Окан Тахмазли|CM|21|500|AZE|2028
Хацяли Ширалиев|RW|21|500|AZE|2028
Едкар Адилханов|AM|21|350|AZE|2027
David Dego|AM|25|75|ISR|2027
Хабиб Исмаьилов|RW|22|125|AZE|2028
Угур Цахангиров|ST|25|175|AZE|2028
Abdullahi Shuaibu|ST|24|150|NGA
Торнике Ахвледиани|ST|27|100|GEO|2027
Ayman Bouali|ST|27|500|MAR` },
    { id: 'imishli', name: 'Имишли', city: 'Имишли', stadium: 'Стадион «Имишли»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
Юсиф Иманов|GK|24|700|AZE|2028
Садик Маммадзада|GK|19|100|AZE|2028
Имам Али|GK|19|25|AZE|2028
Айхан Аббасзада|GK|19|500|AZE|2028
Diogo Rollo|CB|24|550|BRA|2027
Азар Салахлы|CB|32|200|AZE|2027
Бахтияр Хасанализада|CB|33|150|AZE|2027
Акбар Еюбов|CB|21|500|AZE|2027
Edwin Banguera|LB|30|800|COL|2027
Тунцай Юсифли|LB|21|100|AZE|2027
Мехди Тахиров|RB|25|100|AZE|2027
Yvan Senin|DM|20|500|CIV|2028
Идрис Инкилаблы|CM|25|300|AZE|2027
Yaw Moses|CM|27|250|GHA|2027
Juan Hernández|CM|20|500|COL|2027
Мурад Алакбаров|CM|21|500|AZE
Deco|CM|21|500|ANG|2028
Фарид Набиев|AM|27|600|AZE|2027
Вусал Канбаров|AM|23|250|AZE|2027
Халил Мурсалли|AM|20|25|AZE|2027
Juninho|RW|23|650|BRA|2027
Diogo Almeida|ST|26|600|POR|2027
Diogo Cardoso|ST|24|175|POR|2027
Сейхан Фарацов|ST|25|500|AZE|2028` },
    { id: 'kapaz', name: 'Кяпаз', city: 'Гянджа', stadium: 'Стадион «Гянджа»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Rogério|GK|27|275|POR|2027
Елгун Байрамов|GK|23|25|AZE|2027
Рашад Азизли|GK|32|500|AZE|2027
Diogo Verdasca|CB|29|650|POR|2028
Мате Абуладзе|CB|26|350|GEO
David Domgjoni|CB|29|250|KVX|2027
Хусейн Бабаев|CB|23|500|AZE|2027
Adama Fofana|LB|27|250|BFA|2027
Максад Исаев|LB|32|250|AZE
Урфан Аббасов|LB|34|175|AZE|2027
Умид Самадов|LB|23|100|AZE|2027
Рафаел Махаррамли|RB|27|550|AZE|2027
Арзу Атакишиев|RB|21|50|AZE|2027
Mahamadou Ba|DM|27|500|MLI|2027
Вадим Абдуллаев|DM|31|450|AZE|2027
Шакир Сеьидов|DM|25|400|AZE|2027
Desmond Acquah|CM|24|250|BEL|2027
Али Самадов|CM|29|100|AZE|2028
Фарид Калантаров|CM|21|25|AZE|2027
Ницат Маммадов|CM|25|500|AZE|2027
Виктор Стина|AM|28|275|MDA|2027
Намик Аласгаров|AM|31|250|AZE|2027
Рахман Хациев|AM|33|100|AZE|2027
Раул Исаков|AM|16|25|AZE
Шахнур Исмаьилов|AM|19|25|AZE
Benito|RW|28|125|NGA
Kenneth Kalunga|RW|29|500|ZAM|2027
Asumah Abubakar|ST|29|175|POR|2027` },
    { id: 'gabala', name: 'Габала', city: 'Габала', stadium: 'Стадион «Габала»', cap: 8000, colors: ['#e30613', '#000000'], players: `
Arthur|GK|25|700|BRA|2027
Салахат Агаев|GK|35|100|AZE|2027
Хабиб Хушанов|GK|19|500|AZE|2027
Isaac Amoah|CB|25|350|GHA|2027
Nathan Monzango|CB|25|300|FRA|2027
Сулейман Дамадаев|CB|23|100|AZE|2027
Edson|CB|24|50|BRA|2029
Салман Аласгаров|CB|25|500|AZE
Самир Агаев|CB|21|500|AZE|2027
Ницат Алиев|LB|25|400|AZE|2027
Kouya Mabea|LB|28|250|CIV|2027
Нугай Рашидов|LB|22|125|AZE|2027
Ешкин Ахмадов|RB|20|350|AZE|2027
Jaime Sierra|DM|28|400|ESP|2027
Елвин Цамалов|DM|31|250|AZE
Акшин Якубов|DM|21|500|AZE|2027
Шахин Шахнияров|CM|21|400|AZE|2027
Фарид Исгандаров|CM|25|100|AZE|2027
Асиф Маммадов|CM|40|500|AZE
Endri Cekici|AM|29|400|ALB|2027
Bruno Silva|LW|28|350|POR|2027
Зия Шакарханов|LW|19|500|AZE|2027
Meshack Ubochioma|RW|24|250|NGA|2027
Хаыйам Маммадли|RW|21|500|AZE|2027
Karim Rossi|ST|32|250|SUI|2028
Ismaheel Akinade|ST|32|125|NGA|2027` },
    { id: 'shafa', name: 'Шафа', city: 'Баку', stadium: 'Стадион «Баку»', cap: 8000, colors: ['#00a650', '#ffffff'], players: `
Ницат Мехбалиев|GK|26|200|AZE|2027
Маммад Хусейнов|GK|27|125|AZE|2027
Алирза Муштабазада|GK|24|500|AZE
Арсен Агцабаёв|CB|26|600|AZE|2027
Maudo Jarjué|CB|29|300|GAM|2028
Christopher Mamengi|CB|25|300|NED|2027
Мурад Мусаев|CB|32|125|AZE|2027
Тарлан Кулиев|CB|34|500|AZE|2027
Oumar Diaw|CB|25|500|FRA|2028
Andrei Dragu|LB|27|400|ROU|2027
Исмаьил Зулфукарлы|LB|25|500|AZE
Рауф Хусейнли|RB|26|550|AZE|2028
Нихад Кулиев|DM|25|500|AZE
Vlad Pop|CM|26|350|ROU
Фарид Юсифли|CM|24|150|AZE|2027
Рамин Насирли|RW|24|500|AZE|2027
Moussa Guel|AM|27|300|CIV
Dylan Mertens|AM|31|200|NED|2027
Эльмир Тагиев|AM|26|500|AZE
Bafodé Dansoko|LW|30|300|GUI|2027
Нахид Алиев|LW|21|500|AZE|2027
Tray Fuller|RW|24|125|CAN|2027
Елнур Цафаров|RW|29|500|AZE|2027
Luis Felipe|ST|25|175|BRA|2027` },
  ],
});
