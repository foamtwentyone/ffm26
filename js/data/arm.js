// Премьер-лига Армении 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'arm', name: 'Премьер-лига Армении', short: 'Армения', country: 'ARM', tier: 1, weekday: 6,
  autumn: { from: '08-01', rounds: 11 }, spring: { from: '02-27', rounds: 11 },
  ticket: 3, prize: [800, 750, 700, 650, 600, 550, 450, 400, 350, 300, 250, 200],
  teams: [
    { id: 'ararat_arm', name: 'Арарат-Армения', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#ffd700', '#e30613'], players: `
João Bravim|GK|28|800|BRA
Арман Нерсесян|GK|25|175|ARM|2028
Хайк Хачатрян|GK|21|10|ARM
Bruno Wilson|CB|29|600|MOZ
Джуниор Джулио|CB|30|400|ARM
Alexandros Malis|CB|29|300|GRE
Luis Felipe|CB|25|275|BRA
Эдгар Григорян|LB|28|300|ARM
Bruno Pereira|LB|28|275|POR|2027
Hugo Oliveira|RB|24|300|POR
Камо Ховханнисян|RB|34|300|ARM
Maxence Carlier|DM|29|500|FRA|2027
Карен Мурадян|DM|33|175|ARM
Balanta Jr.|CM|29|500|COL|2027
Alwyn Tera|CM|29|200|KEN
Армен Амбарцумян|CM|32|175|ARM
Мичел Айвазян|CM|21|150|ARM|2028
Benny|AM|29|250|POR
Жирайр Шагхоян|LW|25|500|ARM
Zidane Banjaqui|LW|27|500|GNB
Артур Серобян|RW|23|600|ARM
Paul Ayongo|RW|29|200|GHA
Alioune Ndour|ST|29|400|SEN|2028
Carlos França|ST|31|400|BRA|2027
Араьик Елоян|ST|22|300|ARM|2028
Sandro Lima|ST|35|150|BRA` },
    { id: 'noah', name: 'Ноа', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#000000', '#ffd700'], players: `
Dani Figueira|GK|28|500|POR
Артхур Цонеглиан|GK|22|175|ARM|2027
Сергей Мурадян|CB|22|500|ARM|2027
Stone Mambo|CB|27|500|FRA
Nathanaël Saintini|CB|26|500|GLP|2027
Марк Аветисян|CB|21|150|ARM
Michael Pavlovic|LB|25|650|SVN
David Sualehe|LB|29|350|POR
Eric Boakye|RB|26|600|GHA|2028
Ховханнес Хамбардзумян|RB|36|175|ARM
Clinton Dombila|RB|21|150|GHA
Sasa Zdjelar|DM|31|2000|SRB|2028
Takuto Oshima|DM|28|800|JPN|2028
Gustavo Sangaré|DM|29|800|BFA|2027
Yan Eteki|DM|29|700|CMR
Арам Хамоян|DM|26|250|ARM
Valentin Costache|RW|28|800|ROU
Гор Манвелян|AM|24|400|ARM|2027
Алберт Гарегинян|AM|17|100|ARM
Marin Jakolis|LW|29|800|CRO|2027
Bilal Fofana|LW|20|150|FRA
Hélder Ferreira|RW|29|900|POR|2028
Brian Oddei|RW|24|200|GHA|2027
Завен Худавердян|ST|19|200|ARM
Marko Lazetić|ST|22|1000|SRB
Mario González|ST|30|700|ESP` },
    { id: 'pyunik', name: 'Пюник', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Хенри Авагян|GK|30|300|ARM|2029
Станислав Бучнев|GK|36|75|ARM|2027
Filipe Almeida|CB|29|600|POR|2027
Сергий Вакуленко|CB|33|250|UKR
Эрик Симонян|CB|23|200|ARM
Abdoul Fatha Tinde Teribe|CB|19|500|BFA
Михаил Коваленко|LB|31|250|RUS
James|LB|31|225|BRA|2027
Nikolaos Kenourgios|LB|28|175|GRE
Роберт Дарбинян|RB|31|150|ARM
Даниил Куликов|DM|28|600|RUS|2027
Ховханнес Харутюнян|CM|27|300|ARM
Sead Islamovic|CM|27|300|SRB|2027
Mohamed Bamba|CM|21|250|CIV|2027
Хайк Татосян|CM|22|125|ARM
Артак Дашян|CM|36|75|ARM
Вячеслав Афян|RW|20|175|ARM
Давит Хакобян|AM|21|150|ARM
Алишер Рахимов|AM|24|500|TJK|2027
Witi|LW|30|400|MOZ
Геворг Тарахчян|LW|24|250|ARM
Эдгар Малакян|LW|36|75|ARM|2027
Iman Griffith|RW|24|250|NED
Iasonas Pikis|ST|25|325|CYP
Steven Alfred|ST|29|150|NGA|2027
Саргис Метоян|ST|29|125|ARM|2027` },
    { id: 'alashkert', name: 'Алашкерт', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#ffd700', '#0055a4'], players: `
Арсен Бегларян|GK|33|200|ARM
Даниил Полянский|GK|25|50|RUS
Влад Чатунц|GK|24|10|ARM
Ibrahim Sesay|GK|22|500|SLE
Cézar|CB|26|500|BRA|2028
Ярослав Матюхин|CB|21|250|RUS
Степан Гиголян|CB|20|10|ARM
Арсен Садоян|LB|27|200|ARM
Хакоб Хакобян|LB|29|200|ARM
Давит Тертерян|RB|28|200|ARM
Jefferson Granado|RB|23|150|COL
Роберт Хакобян|RB|30|150|ARM
Эдгар Пилоян|DM|21|300|ARM
Rafael Jesus|DM|19|250|BRA
Даниэль Агхбалян|DM|27|200|ARM
Hussein Adebayo|DM|18|50|NGA
Ifeanyi David Nduka|CM|22|175|NGA
Карен Налбандян|AM|24|400|ARM
Daouda Togola|AM|18|50|MLI
Domi Jaurès Massoumou|LW|23|650|CGO|2028
Joseph Sabobo|LW|20|300|ZAM
Obi Chima|LW|19|50|NGA
Olawale Farayola|RW|24|400|NGA
Momo Touré|ST|24|400|GUI
Philip Ejike|ST|24|300|NGA
Isah Yahaya Buhari|ST|19|10|NGA` },
    { id: 'urartu', name: 'Урарту', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#e30613', '#ffd700'], players: `
Александр Мишиев|GK|22|250|ARM
Andrija Dragojevic|GK|34|75|MNE
Нубар Гишян|GK|18|500|ARM
Владыслав Веремеев|CB|28|400|UKR|2027
Эрик Пилоян|CB|25|350|ARM
Антон Братков|CB|33|225|UKR
Петик Манукян|CB|20|200|ARM
Евгений Цымбалюк|CB|30|200|UKR
Арман Гхазарян|CB|25|175|ARM
Жирайр Маргарян|LB|29|300|ARM|2027
Жора Дадамян|LB|18|25|ARM
Харитон Айвазян|RB|22|175|ARM
Нарек Агхасарян|DM|25|250|ARM
Alef Santos|DM|29|175|BRA
Сергей Мкртчян|DM|25|175|ARM
Гарник Минасян|DM|21|25|ARM
Katsuyuki Ishibashi|AM|24|200|JPN
Микаел Мирзоян|AM|25|175|ARM
Гор Лулукян|AM|23|150|ARM|2027
Левон Башоян|AM|21|125|ARM
Miguel Velosa|LW|26|200|POR|2028
Артём Полярус|LW|34|125|UKR|2027
Bruno Michel|RW|27|700|BRA
Карен Мелконян|RW|27|200|ARM
Oege-Sietse van Lingen|ST|27|500|NED
Rajani|ST|23|175|POR
Едик Варданян|ST|21|150|ARM` },
    { id: 'van', name: 'Ван', city: 'Чаренцаван', stadium: 'Стадион «Чаренцаван»', cap: 8000, colors: ['#ffd700', '#e30613'], players: `
Данила Боков|GK|24|200|RUS
Погхос Айвазян|GK|31|50|ARM
Хунан Гюрджинян|GK|21|10|ARM|2027
Iago Viana|CB|18|10|BRA
Javier Torres|CB|26|150|COL|2027
Тарон Восканян|CB|33|150|ARM|2027
Андраник Хакобян|CB|19|10|ARM
Васпурак Минасян|LB|32|100|ARM
Enoch Mensah Nkrumah|LB|20|75|GHA
Alex|RB|19|100|BRA|2027
Adedayo Saheed Akanni|RB|18|50|NGA
Josue Gaba|RB|24|50|CIV
Sargis Gaboyan|RB|20|500|BEL
Ibrahim Isty Daniel|DM|21|125|NGA|2027
Вахрам Махсудян|DM|23|125|ARM|2027
Chimuka Lweendo|CM|18|125|ZAM|2027
Aminu Ajanda Inusa|CM|19|10|NGA|2027
Nascimento|CM|24|500|BRA
Тигран Саргсян|RW|23|25|ARM|2027
Петрос Аветисян|AM|30|175|ARM|2027
Даныло Полонскьи|AM|24|50|UKR|2027
Emmanuel Prince Obinna|LW|19|100|NGA|2028
Brayann Santiago|LW|18|50|BRA
Нарек Манукян|RW|22|125|ARM|2027
Тигран Геворгян|RW|20|75|ARM|2027
Арис Карапетян|ST|21|75|ARM|2027
Khalil Ahmad Sammani|ST|18|50|NGA|2027
Kone Kleyba Boukari|ST|18|25|CIV` },
    { id: 'bkma', name: 'БКМА', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#e30613', '#0055a4'], players: `
Хайк Гхазарян|GK|20|150|ARM|2027
Артём Давидов|GK|19|10|ARM|2028
Аргишти Петросян|CB|34|150|ARM
Погхос Крмзян|CB|22|125|ARM
Давит Дохоян|CB|18|125|ARM|2028
Артур Мовсесян|CB|18|75|ARM|2028
Сергей Харутюнян|CB|19|25|ARM
Арман Исаян|CB|18|25|ARM
Рубен Абрахамян|LB|23|100|ARM
Карен Ховакимян|LB|19|75|ARM
Алёша Хачатрян|RB|20|125|ARM
Хайк Гхукасян|RB|18|25|ARM|2028
Артур Аскарян|CM|20|250|ARM
Хамлет Саргсян|CM|22|175|ARM|2027
Харутюн Манукян|CM|18|75|ARM
Жирайр Ашикян|CM|17|50|ARM|2027
Седрак Мовсисян|RW|19|75|ARM|2028
Сурен Киракосян|LW|19|100|ARM
Артур Манукян|AM|20|50|ARM
Давит Давтян|RW|18|100|ARM|2028
Давид Харутюнян|ST|19|200|ARM|2028
Майкл Асирян|ST|18|100|ARM|2028
Аршак Петросян|ST|19|50|ARM|2027` },
    { id: 'gandzasar', name: 'Гандзасар', city: 'Капан', stadium: 'Стадион «Капан»', cap: 8000, colors: ['#ffd700', '#000000'], players: `
Давит Давтян|GK|21|150|ARM|2027
Анатолий Айвазов|GK|30|125|ARM
Григорий Матевосян|GK|27|100|ARM|2027
Annan Mensah|CB|30|175|GHA
Shunto Kanda|CB|26|175|JPN|2027
Артур Михаелян|CB|20|100|ARM
Decio Neto|CB|28|100|BRA
Robson|CB|22|100|BRA
Ховханнес Геворгян|CB|20|25|ARM
Augusto Dabó|LB|22|250|GNB
Мхер Канканян|LB|22|10|ARM
Арман Хачатрян|RB|29|150|ARM
Atila|RB|24|125|BRA|2028
Марат Асатрян|RB|20|50|ARM
Mariano Ahouangbo|DM|23|250|BEN
Dean Titkov|DM|22|100|AUT
Leo Reis|CM|20|125|POR
Артур Исраелян|CM|22|75|ARM
Lucca|AM|22|150|LUX
Патвакан Аветисян|AM|25|125|ARM|2027
Tomás Rocha|LW|22|75|POR|2028
João Adriano|RW|23|225|BRA|2028
Артём Аванесян|RW|27|175|ARM
Kalifala Doumbia|ST|22|225|MLI|2027
Bertrand Mani|ST|29|150|CHA|2027
Ethan Lizalda|ST|24|125|COL` },
    { id: 'ararat', name: 'Арарат', city: 'Ереван', stadium: 'Стадион «Ереван»', cap: 8000, colors: ['#e30613', '#ffffff'], players: `
Adel Anzimati-Aboudou|GK|24|125|COM
Никита Лобусов|GK|24|125|RUS
Вараздат Хароян|CB|34|250|ARM
Алберт Хачумян|CB|27|175|ARM|2027
Guy Lima|CB|20|125|SEN
Malick Aziz Berte|LB|22|150|MLI|2027
Арам Асланян|LB|21|125|ARM
Divine Ukadike|LB|22|50|NGA
Володя Самсонян|RB|25|150|ARM|2027
Ernest Kacou|RB|20|25|CIV
Souleymane Touré|RB|19|25|MLI|2029
Mohamed Lamine Fofana|DM|20|150|CIV
Беник Ховханнисян|DM|33|125|ARM
Moussa Kante|CM|21|175|CIV|2027
Aboubacar Sidick Ouattara|CM|20|150|CIV
Артур Григорян|CM|33|125|ARM|2027
Okuchukwu Precious Chukwu|CM|19|100|NGA
Александр Алексанян|CM|19|50|ARM|2028
Нарек Алавердян|RW|24|150|ARM
Ален Мкртчян|RW|20|25|ARM
Петрос Алекян|LW|20|125|ARM
Гагик Симонян|AM|20|25|ARM|2028
Эдгар Мовсесян|LW|28|125|ARM|2027
Adama Méïté|LW|22|100|CIV|2028
Patrick Victoire Handzongo|ST|22|125|CMR|2028
Sindou Junior Bakayoko|ST|20|25|CIV` },
    { id: 'sardarapat', name: 'Сардарапат', city: 'Армавир', stadium: 'Стадион «Армавир»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Гор Матинян|GK|22|150|ARM
Сергей Микаелян|GK|24|50|ARM
Ваче Габриелян|GK|19|25|ARM
Есаьи Багхрамян|CB|18|10|ARM
Армен Саргсян|CB|22|150|ARM
Ousmane Konaté|CB|21|125|SEN
Vayanga Doumbia|CB|21|100|CIV|2027
Christ Yann Lago|CB|21|100|CIV
Jean Quiñónez|LB|24|150|ECU
Хайк Ховханнисян|LB|23|10|ARM
Сергей Кочканян|RB|23|150|ARM
Артур Даниелян|RB|28|100|ARM
Тигран Аюнц|RB|26|75|ARM
Арман Мкртчян|RB|27|75|ARM
Florian Seri|DM|20|25|CIV
Юрий Будагян|CM|24|175|RUS
Гор Абрахамян|CM|20|125|ARM
Suleiman Alabi|CM|20|25|NGA
Ховханнес Киракосян|CM|22|10|ARM
Сероб Галстян|RW|24|125|ARM
Мисак Хакобян|LW|22|150|ARM
Роберт Потинян|LW|22|50|ARM
Mouhamed Dieng|RW|21|350|SEN
Левон Петросян|RW|22|175|ARM|2027
Джаник Давтян|RW|18|50|ARM
Левон Варданян|ST|22|175|ARM
Хамлет Минасян|ST|23|150|ARM` },
    { id: 'shirak', name: 'Ширак', city: 'Гюмри', stadium: 'Стадион «Гюмри»', cap: 8000, colors: ['#000000', '#e30613'], players: `
Лёва Карапетян|GK|25|125|ARM
Всеволод Ермаков|GK|30|100|RUS|2027
Сократ Ховханнисян|GK|30|100|ARM
Ховханнес Ховханнисян|GK|18|10|ARM
Хамлет Мнацаканян|CB|24|200|ARM
Тигран Сумбулян|CB|21|150|ARM
Рубен Карагулян|CB|23|125|ARM
Donassy Ibrahim Coulibaly|CB|24|25|CIV
Сурен Царукян|LB|21|150|ARM
Гагик Акулян|LB|21|50|ARM
Мхер Тарлоян|RB|21|150|ARM
Ховханнес Пахлеванян|RB|21|125|ARM
Самвел Гхукасян|RB|24|50|ARM
Рафик Мисакян|DM|26|225|ARM
Рудик Мкртчян|DM|27|175|ARM
Левон Дарбинян|CM|24|150|ARM
Сергей Манукян|RW|22|150|ARM
Вазген Саргсян|RW|21|125|ARM
Amara Karamoko Fofana|LW|20|50|CIV
Нарек Джаноян|AM|20|125|ARM
Donald Alvine Kodia|LW|23|200|CIV
Raymond Gyamfi|LW|19|100|GHA
Лёва Мрян|ST|26|150|ARM
Bamba Mesamba|ST|19|150|CIV|2027
Григор Гхумашян|ST|22|100|RUS
Эмиль Папикян|ST|19|50|ARM
Мхер Харутюнян|ST|17|25|ARM` },
    { id: 'syunik', name: 'Сюник', city: 'Капан', stadium: 'Стадион «Капан»', cap: 8000, colors: ['#0055a4', '#ffffff'], players: `
Diogo Sá|GK|26|75|POR
Арман Гхукасян|GK|19|25|ARM
Михран Ховханнисян|GK|22|500|ARM|2027
Riad Belhadj|CB|24|125|ALG
Amanallah Souassi|CB|23|100|TUN
Артём Литвиаков|CB|30|100|MDA
Перч Погхикян|CB|26|75|ARM
Ален Карапетян|CB|30|50|ARM|2027
Артур Меликян|CB|24|25|ARM|2027
Miguel Silva|LB|28|100|POR
Эрик Согхомонян|LB|26|50|ARM|2027
Гор Аракелян|RB|23|175|ARM
Арсен Галстян|RB|24|25|ARM
Вахагн Хайрапетян|DM|29|125|ARM
Петрос Афаджанян|DM|27|100|ARM
Эрик Варданян|DM|27|75|ARM|2027
Kobbie Jones Enning|DM|18|75|GHA|2027
Гагик Геворгян|DM|21|25|ARM|2027
Максим Хачатрян|DM|22|10|RUS
Армен Цатрян|CM|19|500|ARM
Артём Авагян|CM|24|500|ARM
Amos Kwanye|CM|18|25|GHA|2027
Сурен Харутюнян|LW|17|500|ARM
Давит Барсегхян|AM|21|75|ARM
Сурен Аракелян|AM|30|25|ARM|2027
Kaique Santos|LW|23|50|BRA
Эдгар Григорян|LW|21|25|ARM|2027
Rabbi Annor|LW|18|25|GHA|2027
Joy Brito|RW|19|75|ANG|2027
Oghenevwegba Okiki|RW|18|50|NGA
Godwin Kalu|ST|20|200|NGA
Армен Ховханнисян|ST|26|125|ARM|2027
Самвел Саргсян|ST|20|50|ARM
Godswill Emmanuel Odinakachi|ST|20|50|NGA` },
  ],
});
