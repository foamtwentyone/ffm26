// Премьер-лига Египта 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'egy', name: 'Премьер-лига Египта', short: 'Египет', country: 'EGY', tier: 1, weekday: 5,
  autumn: { from: '08-15', rounds: 19 }, spring: { from: '01-09', rounds: 19 },
  ticket: 2, prize: [2000, 1900, 1850, 1750, 1700, 1600, 1550, 1450, 1350, 1300, 1200, 1150, 1050, 950, 900, 800, 750, 650, 600, 500],
  teams: [
    { id: 'al_ahly', name: 'Аль-Ахли', city: 'Каир', stadium: 'Cairo International Stadium', cap: 74100, colors: ['#c8102e', '#ffffff'], players: `
Oufa Shobeir|GK|26|2000|EGY|2029||2019-09-01
Mohamed El Shenawy|GK|37|400|EGY|2028||<2016-07-09
Hamza Alaa|GK|25|75|EGY|2029||2025-09-18
Achraf Dari|CB|27|1000|MAR|2028||2024-08-28
Hady Reyad|CB|28|700|EGY|2030||<2026-01-27
Yassin Marei|CB|24|600|EGY|2030||2025-07-07
Amr El Gazar|CB|27|550|EGY|2030||<2026-01-13
Yasser Ibrahim|CB|33|250|EGY|2027||<2019-01-07
Youssef Belammari|LB|28|1200|MAR|2029||2026-01-21
Tawfik Mohamed|LB|26|500|EGY|2031||<2026-08-15
Karim El Debes|LB|23|200|EGY|2030||<2023-07-20
Karim Fouad|LB|27|200|EGY|2028||2021-09-01
Mohamed Hany|RB|30|1500|EGY|2027||2015-01-01
Ahmed Eid|RB|25|150|EGY|2029||<2026-01-19
Ibrahim El Asyuti|RB|21|100|EGY|||2026-07-01
Marwan Ateya|DM|28|4500|EGY|2030||<2023-01-10
Ahmed Kouka|DM|25|1200|EGY|2029||2021-09-01
Akram Tawfik|DM|28|800|EGY|2029||2026-08-12
Emam Ashour|CM|28|5000|EGY|2030||2023-07-18
Ali Mahmoud|CM|23|550|EGY|2031||<2026-07-07
Ahmed Reda|CM|26|500|EGY|2029||<2025-01-26
Omar El Saaiy|CM|23|500|EGY|2029||<2024-08-31
Kabaka|CM|21|350|EGY|2028||<2025-07-01
Afsha|AM|30|600|EGY|2027||<2019-07-31
Achraf Bencharki|LW|32|2200|MAR|2027||2025-01-29
Mahmoud Salah|LW|19|600|EGY|2031||<2026-08-14
Hussein El Shahat|LW|34|250|EGY|2028||2019-01-06
Zizo|RW|30|3500|EGY|2030||<2025-06-06
Reda Slim|RW|27|900|MAR|2027||2023-07-30
Taher Mohamed|RW|29|450|EGY|2029||<2020-11-01
Cristo|RW|23|300|TUN|2027||2023-01-05
Mohamed Abdallah|RW|21|150|EGY|||<2024-08-01
Omar Moawad|RW|20|100|EGY|2030||2026-07-01
Mounsef Bakrar|ST|25|3000|ALG|2029||2026-07-28
Soufiane Benjdida|ST|25|2200|MAR|2029||2026-07-19
Aqtay Abdallah|ST|23|450|EGY|2031||<2026-07-07
Mohamed Raafat|ST|21|100|EGY|||2026-07-01` },
    { id: 'pyramids', name: 'Пирамидз', city: 'Каир', stadium: '30 June Air Defence Stadium', cap: 30000, colors: ['#002d72', '#ffffff'], players: `
Mahmoud Gad|GK|28|400|EGY|2030||<2025-08-05
Ahmed El Shenawy|GK|35|300|EGY|2029||<2018-07-28
Ziad Haytham|GK|20|50|EGY|||2025-07-01
Hazem Gamal|GK|21|100|EGY|2031||2026-08-15
Mahmoud Marei|CB|28|1500|EGY|2027||<2023-08-12
Osama Galal|CB|29|400|EGY|||<2021-01-31
Ahmed Samy|CB|34|350|EGY|2027||2020-11-23
Eyad El Askalany|CB|21|350|EGY|2027||2026-07-28
Mohamed Hamdi|LB|31|1200|EGY|2027||<2018-07-01
Karim Hafez|LB|30|800|EGY|2027||2022-09-05
Mohamed Chibi|RB|33|1000|MAR|2028||2022-09-15
Khaled Awad|RB|23|600|EGY|2031||<2026-07-17
Mohanad Lasheen|DM|30|3000|EGY|2027||<2023-08-10
Hamed Hamdan|DM|26|1200|PLE|2029||<2026-01-01
Ahmed Fawzi|DM|24|250|EGY|||<2022-01-17
Ahmed Tawfik|DM|35|75|EGY|2027||<2023-01-22
Otta|CM|23|2200|EGY|||2023-07-21
Walid El Karti|CM|32|800|MAR|2028||2021-10-07
Hassan Tarek|CM|21|100|EGY|||2026-07-01
Mahmoud Saber|AM|25|1800|EGY|2029||<2021-09-23
Nasser Maher|AM|29|1800|EGY|2030||<2026-01-20
Mostafa Ziko|LW|29|2200|EGY|2029||<2025-08-01
Ewerton|LW|29|1500|BRA|2029||2025-07-28
Odeh Fakhoury|LW|20|500|JOR|2029||2026-01-31
Ahmed Abdelkader|LW|27|450|EGY|2030||2026-08-13
Ali Hamouda|LW|20|100|EGY|||2026-07-01
Mesho|LW|20|100|EGY|||2026-07-01
Ziad Saoudi|LW|17|100|EGY|||2026-07-01
Zalaka|RW|27|1500|EGY|2028||<2024-01-25
Mostafa Fathi|RW|32|700|EGY|2027||2023-07-24
Abdelrahman Magdi|RW|29|300|EGY|2028||<2024-08-31
Nadhir Benbouali|ST|26|2200|ALG|2030||2026-08-15
Youssef Obama|ST|30|350|EGY|2027||<2024-09-01
Dodo El Gabas|ST|38|25|EGY|2027||<2019-07-31` },
    { id: 'zamalek', name: 'Замалек', city: 'Гиза', stadium: 'Cairo International Stadium', cap: 74100, colors: ['#ffffff', '#c8102e'], players: `
Mohamed Sobhi|GK|27|250|EGY|2028||<2019-07-29
El Mahdi Soliman|GK|39|150|EGY|2027||<2025-07-11
Mohamed Awad|GK|34|100|EGY|2027||2019-07-31
Mahmoud El Shenawy|GK|22|25|EGY|2029||2024-07-01
Omar Abdelaziz|GK|18|100|EGY|||2026-07-01
Mohamed Ismail|CB|27|1500|EGY|2030||<2025-07-21
Mahmoud El Wensh|CB|31|600|EGY|2028||<2016-08-01
Mostafa El Zenary|CB|27|300|EGY|2027||<2022-09-21
Ahmed Hossam|CB|25|150|EGY|2029||<2025-01-30
El Sayed Osama|CB|20|100|EGY|2030||2026-01-01
Mahmoud Bentayg|LB|27|1200|MAR|2028||2025-07-01
Ahmed Fatouh|LB|28|1000|EGY|2027||2017-01-31
Ahmed Khodary|LB|21|100|EGY|2030||2026-01-01
Mohamed Ibrahim|RB|21|250|EGY|2029||2026-01-01
Omar Gaber|RB|34|100|EGY|2027||<2022-09-19
Mohamed Farag|RB|18|100|EGY|||2026-07-01
Ahmed Rabie|DM|25|350|EGY|2030||<2025-07-06
Mahmoud Gehad|DM|25|100|EGY|2029||2025-01-30
Youssef Wael|DM|21|50|EGY|2027|FRA|2026-01-01
Mohamed Shehata|CM|25|1800|EGY|2029||<2024-08-21
Mohamed El Sayed|CM|20|500|EGY|2029||2024-07-01
Adam Kaied|CM|24|200|PLE|2029|SWE|2025-07-15
Mohamed Hamad|CM|18|100|EGY|2029||2026-01-01
Seif Gaafar|CM|26|75|EGY|2027||<2024-01-31
Abdallah El Said|CM|41|75|EGY|2027||<2024-01-31
Ahmed Safwat|AM|17|100|EGY|2028||2026-07-01
Chico Banza|LW|27|800|ANG|2029||2025-07-13
Ahmed Sherif|LW|23|250|EGY|2030||2025-07-02
Ahmed Jafeli|LW|23|75|TUN|2028|GER|2025-02-07
Oday Dabbagh|RW|27|1800|PLE|2029||2025-08-05
Ahmed Esho|RW|23|200|EGY|2030||2023-07-21
Nasser Mansy|ST|28|1000|EGY|2027||<2023-01-27
Hossam Ashraf|ST|25|250|EGY|2029||<2022-09-01
Amr Nasser|ST|27|200|EGY|2030||2025-07-07
Adham Hasseib|ST|17|100|EGY|||2026-07-01` },
    { id: 'cleopatra', name: 'Керамика Клеопатра', city: 'Каир', stadium: 'Suez Canal Stadium', cap: 22000, colors: ['#f68b1f', '#000000'], players: `
Mohamed Alaa|GK|27|1200|EGY|2030||<2026-07-14
Mohamed Bassam|GK|35|150|EGY|2027||<2022-09-22
Mohamed Tarek|GK|27|100|EGY|||2025-07-01
Beckham|CB|29|800|EGY|||<2022-09-14
Justice Arthur|CB|28|400|GHA|2028||2022-09-26
Ragab Nabil|CB|33|250|EGY|2027||<2022-09-15
Moaz Ahmed|CB|23|150|EGY|||2026-08-13
Mohamed El Maghraby|CB|25|75|EGY|2028||<2025-07-12
Fawzi El Henawy|LB|28|400|EGY|2029||2026-07-26
Hussein El Sayed|LB|35|150|EGY|2027||<2024-10-10
Ahmed Hany|RB|29|350|EGY|2027||<2022-09-15
Abdallah Magdy|RB|29|75|EGY|||<2025-07-01
Fathi Mohamed|RB|21|50|EGY|||2026-08-13
Amr Kalawa|DM|28|250|EGY|2027||2022-09-16
Karim Nedved|DM|29|150|EGY|2028||<2025-07-20
Hema Mohamed|DM|26|150|EGY|2028||2024-01-10
Ezzat Mansour|CM|20|100|EGY|||2026-07-01
Ahmed Belhadji|CM|28|1500|MAR|2027|ESP|2023-09-14
Bobo|CM|25|800|EGY|2029||<2026-02-08
Amr El Solia|CM|36|100|EGY|||<2025-07-23
Sodiq Awujoola|LW|25|2200|NGA|2027||<2023-09-10
Ayman Mukka|LW|29|150|EGY|2027||<2024-09-08
Islam Issa|RW|30|700|EGY|||<2025-07-01
Peter Gwargis|RW|26|600|IRQ|2029|SWE|2026-08-12
Mohamed Emad|RW|25|350|EGY|2029||<2026-07-14
Samir El Eraki|RW|25|150|EGY|2030||2026-07-14
Eissa Ali Maher|RW|21|100|EGY|||2026-07-01
Ashour Shika|RW|23|100|EGY|2030||2026-08-14
Nejc Gradisar|ST|24|1000|SVN|2027||<2026-08-01
Marwan Otaka|ST|24|350|EGY|||<2023-07-21
Mohamed Shika|ST|29|300|EGY|||2026-08-14
Khaled Al-Nabris|ST|23|100|PLE|2029||2026-08-13` },
    { id: 'el_masry', name: 'Аль-Масри', city: 'Порт-Саид', stadium: 'New Suez Stadium', cap: 27000, colors: ['#00843d', '#ffffff'], players: `
Mahmoud Hamdy|GK|33|200|EGY|2028||<2024-08-31
Mohamed Seha|GK|25|150|EGY|2027||<2026-08-02
Essam Tharwat|GK|37|75|EGY|2027||<2020-10-31
Mohamed Shehata|GK|27|25|EGY|||2021-09-01
Ahmed Wahp|GK|21|25|EGY|2030||2025-07-01
Baher El Mohamady|CB|29|600|EGY|2028||2023-08-15
Mostafa El Aash|CB|26|500|EGY|2029||<2026-07-30
Khaled Sobhi|CB|31|450|EGY|2028||<2024-09-12
Mohamed Hashem|CB|31|200|EGY|2027||2024-07-31
Mohamed Shokry|LB|27|500|EGY|2029||<2026-07-30
Amr El Saadawy|LB|29|400|EGY|2028||<2022-09-15
Karim El Eraki|RB|28|500|EGY|2027||2017-08-01
Abdo Nader|RB|21|200|EGY|2030||2026-01-01
Mohamed Makhlouf|DM|28|600|EGY|2027||2024-08-21
Yassin El Mallah|DM|22|200|EGY|2030||2026-07-28
Mostafa Aboul-Kheir|DM|22|25|EGY|2028||<2025-02-08
Mahmoud Hamada|CM|32|850|EGY|2027||2023-09-13
Hassan Ali|CM|28|200|EGY|2029||2019-07-01
Ameed Sawafta|CM|26|200|PLE|2029||2026-01-11
Hussein Faisal|CM|27|150|EGY|2027||<2024-01-30
Youssef El Gohary|CM|28|50|EGY|2027||<2023-08-14
Belia|CM|21|100|EGY|||2025-07-01
Abderrahim Deghmoum|AM|27|1200|ALG|2029||2022-08-25
Kheir Eddine Toual|AM|25|350|ALG|2030||2026-07-30
Moustafa Zeidan|AM|28|200|PLE|2029|SWE|2026-01-30
Abdellah Ziani|LW|23|600|MAR|2030||2026-07-27
Hossam Hassan|LW|20|100|EGY|||2026-07-01
Ahmed El Armouty|RW|27|150|EGY|2028||<2024-09-12
Ahmed Sharaf|RW|21|50|EGY|2030||2024-07-01
Salah Mohsen|ST|28|800|EGY|2027||<2024-01-29
Ali Sulieman|ST|26|800|ERI|2030||2026-08-15
Mounder Temine|ST|25|400|ALG|2028||2025-07-02
Karim Bambo|ST|33|250|EGY|||<2024-08-21
Mohamed El Shami|ST|30|200|EGY|2028||2023-07-25` },
    { id: 'national_bank', name: 'Нэшнл Бэнк', city: 'Каир', stadium: 'Cairo International Stadium', cap: 74100, colors: ['#00843d', '#ffd100'], players: `
Abdelaziz El Balouti|GK|32|150|EGY|2027||<2024-08-29
Ahmed Sobhi|GK|32|100|EGY
Ahmed Tarek Soliman|GK|26|100|EGY|2029||2025-07-01
Mahmoud El Gazar|CB|28|800|EGY|2028||<2022-09-17
Mohamed Nasr|CB|26|300|EGY|2029||2026-07-05
Cyril Dao|CB|20|200|BFA|2028||2025-07-01
Amir Medhat|CB|35|25|EGY
Ahmed Meteb|LB|30|550|EGY|2028||<2025-07-01
Alpha Boubacar Keita|LB|23|75|GUI|2028||<2024-02-01
Hatem Sukar|LB|25|50|EGY|2029||2026-08-15
Mostafa Dowidar|RB|27|300|EGY|2028||<2025-07-01
Shefo|RB|25|150|EGY|2028||2024-08-04
Hesham Salah|RB|29|100|EGY|2028||<2024-08-20
Ali Hamdi|DM|27|800|EGY|2029||<2026-07-01
Mody Naser|DM|25|300|EGY|2029||<2026-07-01
Bencharki|CM|25|250|EGY|2029||<2025-07-01
Seif Adel|CM|21|100|EGY|||2026-07-01
Mohamed Gamal|CM|26|100|EGY|2029||2026-07-01
Rashad El Metwaly|AM|25|450|EGY|2029||<2026-07-01
Salah Abd Etouab Bouchama|AM|25|200|ALG|2029||2026-01-13
Ahmed Madbouli|AM|31|150|EGY|2027||2023-07-22
Boluwatife Adesanya|AM|19|100|NGA|2029||2026-08-12
Yaw Annor|LW|28|400|TOG||GHA|2024-01-28
Mostafa Shalaby|LW|32|300|EGY|2027||<2025-07-15
Karim Hamed|LW|21|50|EGY|2029||2026-08-15
Anderson Ceará|RW|27|750|BRA|2029||2026-08-13
Sayed Abdallah|RW|26|100|EGY|2028||<2025-07-15
Mohamed Reda|RW|20|100|EGY|2029||2026-07-01
Osama Faisal|ST|25|800|EGY|2030||<2024-02-05
Ahmed Yasser Rayan|ST|28|800|EGY|2027||<2024-08-25
Oufa|ST|30|200|EGY|2028||<2025-07-01` },
    { id: 'zed', name: 'ЗЕД', city: 'Гиза', stadium: 'Cairo International Stadium', cap: 74100, colors: ['#000000', '#ffffff'], players: `
Ali Lotfi|GK|37|150|EGY|2027||<2023-07-28
Mohamed Mazzika|GK|32|100|EGY|||<2021-08-11
Abdelmonem Tamer|GK|20|25|EGY|||2025-07-01
Ahmed Nader El Sayed|GK|23|100|EGY|2029|BEL|2025-07-21
Ahmed Tarek|CB|25|700|EGY
Abdo Gouda|CB|23|450|EGY|2027||<2026-08-15
Mohamed Rabia|CB|30|450|EGY|2028||<2025-07-24
Ahmed Castelo|CB|27|350|EGY|2029||<2025-07-20
Mohamed Hussein|CB|22|250|EGY|2029||2026-07-14
Abdallah Bakri|CB|32|150|EGY|2027||2024-01-11
Moussa Mohamed|CB|22|75|EGY|||2026-07-01
Abdallah Bostangy|CB|21|25|EGY|2028||<2025-07-18
Ahmed Abdelaziz|CB|21|100|EGY|||2026-07-01
Wajdi Nabhan|LB|25|300|PLE|2029||2026-07-01
Mohamed Ashraf|LB|25|100|EGY|2029||<2024-09-14
Amara Keita|LB|21|50|SLE|2028||2025-07-01
Tarek Alaa|RB|24|300|EGY|2029||<2026-07-01
Ahmed Sayed|RB|24|100|EGY|2028||2023-07-28
Sameh Ibrahim|RB|28|100|EGY|2027||<2024-07-01
Marwan Hegy|RB|21|100|EGY|||2026-07-01
Hamdy Alaa|DM|26|100|EGY|2027||<2024-09-12
Mahmoud Bolbol|DM|28|75|EGY|2027||<2024-01-11
Maata Magassa|CM|23|800|MTN|2027||2023-08-07
Ahmed El-Saghiri|CM|28|600|EGY|2027||2024-01-11
Mahmoud Ouka|CM|23|250|EGY|2029||2026-07-29
Mohamed Ezz|CM|23|150|EGY|||2026-08-02
Maged Hany|CM|23|75|EGY|2027||2024-09-12
Mohamed Ibrahim|AM|34|100|EGY|2029||<2026-07-06
Abdelrahman El Banouby|LW|26|250|EGY|2027||<2024-01-09
Ahmed Adel|LW|29|200|EGY|2027||<2024-10-03
Marwane Hajij|LW|24|175|FRA||MAR|2026-07-17
Omar Khedr|LW|20|150|EGY|2027||2026-08-01
Mostafa Saad|RW|25|500|EGY|2027||<2023-07-27
Walid Farag|RW|25|75|EGY|2029||<2026-07-29
Rafaat Khalil|ST|22|350|EGY|2029||<2024-09-14
Ahmed Atef|ST|28|250|EGY|2028||<2025-07-01
Rasheed Ahmed|ST|26|250|NGA|2027||<2024-01-09
Mamadu Bah|ST|25|100|LBR|2028|USA|2026-02-08` },
    { id: 'enppi', name: 'ЭНППИ', city: 'Каир', stadium: 'Al Salam Stadium', cap: 30000, colors: ['#c8102e', '#ffffff'], players: `
Body Samir|GK|26|600|EGY|||2018-07-01
Ramadan Mostafa|GK|27|100|EGY|||2022-09-15
Reda El Sayed|GK|38|75|EGY|||2023-01-30
Ahmed Kalosha|CB|27|1500|EGY|2028||2022-09-13
Ahmed Sabeha|CB|27|250|EGY|2027||2022-09-15
Mohamed Samir|CB|25|200|EGY|2028||<2024-09-14
Seif Elkhashab|CB|28|150|EGY|||2022-09-01
Mohamed Sharkia|CB|19|150|EGY|2030||2026-02-01
Hesham Adel|CB|28|50|EGY|||2017-07-01
Mohanad Bakri|CB|24|100|EGY|2029||2025-07-01
Marwan Daoud|LB|29|350|EGY|||2021-09-01
Mohamed Hamdi|LB|23|350|EGY|2027||<2022-09-01
Ahmed Mahmoud|RB|23|100|EGY|||<2026-08-14
Hazem Temsah|RB|25|100|EGY|2029||2025-07-01
Mohamed Samir|RB|20|50|EGY|||2025-01-01
Youssef Abdelhafiz|RB|21|50|EGY|||2026-08-05
Moriken Sanogo|RB|18|100|CIV|||2026-07-01
Ziad Kamal|DM|25|350|EGY|||2019-09-01
Ahmed El Agouz|DM|33|150|EGY|||<2019-07-22
Razak Labode|DM|18|50|NGA|||2026-07-01
Ahmed Shadad|DM|24|100|EGY|2030||<2026-08-08
Mohamed Goldy|CM|24|150|EGY|2028||2025-07-01
Sayed Said|CM|25|100|EGY|2029||2025-07-01
Amar Hamdy|CM|26|75|EGY|||<2026-07-12
Mohamed Emad|CM|21|25|EGY|||2024-09-01
Ali Khald|CM|20|100|EGY|||2025-07-01
Mohamed Essam|AM|21|200|EGY|||2026-08-15
Ahmed Kofta|AM|30|75|EGY|2029||2025-07-17
Suleiman Kirki|AM|23|50|NGA|2029||2025-08-06
Ali Ehab|LW|20|300|EGY|||2025-07-01
Hamed Abdallah|LW|21|250|EGY|||2025-07-01
Emad Mayhoub|LW|25|150|EGY|||<2026-07-01
Ousseynou Bodian|LW|26|100|SEN|2028||2025-07-24
Omar Osama Hassan|LW|21|100|EGY|||2025-07-01
Mohamed Hathout|RW|27|250|EGY|||2020-11-01
Ahmed Ismail|RW|24|200|EGY|2029||2024-09-01
Ahmed Nader Hawash|RW|23|150|EGY|2027||<2022-09-01
Arafat Masoud|RW|19|100|TAN|2028||2025-07-26
Mohamed El Nahas|ST|24|200|EGY|||<2023-07-21
Kahraba|ST|32|200|EGY|2027||2026-02-08
Hossam Ghanem|ST|27|75|EGY|2027||<2025-01-13
Mostafa Fawzy|ST|27|100|EGY|2030||2026-07-01` },
    { id: 'wadi_degla', name: 'Вади Дегла', city: 'Каир', stadium: 'Al Salam Stadium', cap: 30000, colors: ['#002d72', '#ffffff'], players: `
Amr Hossam|GK|35|125|EGY|2028||<2025-07-14
Ziad Seyam|GK|23|75|EGY|||2024-07-01
Abdelrahman Qattawy|GK|26|100|EGY|||<2021-09-01
Greisha|GK|20|100|EGY|||2026-08-03
Kamal Aboul-Fetouh|CB|29|250|EGY|2027||<2024-09-17
Riga|CB|27|250|EGY|2028||<2025-07-07
Omar Adly|CB|29|200|EGY|||<2023-07-01
Seif Teka|CB|35|150|TUN|||<2024-09-19
Ahmed Abdin|CB|20|50|EGY|2029||<2026-07-30
Ahmed Dahroug|LB|30|150|EGY|||2023-08-01
Ahmed Reda|LB|23|150|EGY|||2020-07-01
Yehia Mostafa|LB|21|100|EGY|||2026-07-01
Shady Maher|RB|29|300|EGY|||2022-07-23
Ahmed Ayman|RB|30|200|EGY|2028||<2025-07-16
Mahmoud Adel|RB|22|150|EGY|||2024-07-01
Ahmed Scholes|DM|28|300|EGY|2027||2024-09-09
Mohamed Fathi|DM|32|150|EGY|2028||<2026-07-27
Halimo|DM|31|100|EGY|2028||2026-07-16
Hamza Hassan|CM|21|350|EGY|||2025-07-01
Mees Kaandorp|CM|28|350|NED|2027||2025-07-28
Mohamed Abdelaati|CM|31|250|EGY|||2015-08-01
Kanu|CM|33|150|EGY|||<2023-07-01
Juhayna|CM|26|150|EGY|||<2026-08-11
Ibrahim El Bahnasi|CM|24|150|EGY|2029||2025-07-01
Ahmed El Shimi|CM|31|100|EGY|2028||<2025-07-15
Mohamed Barakat|CM|18|100|EGY|||2026-02-12
Adam El Mallah|CM|19|100|EGY|||2026-02-12
Mahmoud Diasty|LW|26|400|EGY|||2022-10-01
Zizo|LW|24|300|EGY|||2024-09-04
Ahmed Refaat|LW|26|75|EGY|2028||<2023-07-24
Youssef Oya|RW|26|200|EGY|||2023-07-31
Mohamed Abdelrahim|RW|27|200|EGY|2027||2023-01-31
Mohamed Soliman|RW|22|100|EGY|2030||2026-07-13
Franck Boli|ST|32|650|CIV|||2025-08-20
Ahmed Farouk|ST|25|300|EGY|2029||2025-07-14` },
    { id: 'ittihad_alex', name: 'Иттихад Александрия', city: 'Александрия', stadium: 'Alexandria Stadium', cap: 19676, colors: ['#00843d', '#ffffff'], players: `
Sobhi Soliman|GK|29|350|EGY|2028||2019-07-01
Ali El Gabry|GK|25|150|EGY|2030||<2026-07-12
Ahmed El Arabi|GK|33|50|EGY|2029||<2026-07-12
Ahmed Menshawi|GK|21|100|EGY|||2025-07-01
Mostafa Ibrahim|CB|26|600|EGY|2029||2021-09-01
Mido Mostafa|CB|32|400|EGY|2029||<2026-07-01
Mostafa Moawad|CB|29|225|EGY|2029||2026-08-15
Islam Abdellah|CB|25|175|EGY|2027||<2026-07-28
Moataz Mohamed|CB|21|100|EGY|2028||2026-07-01
Abdo Hesham|CB|27|100|EGY|2030||2026-07-01
Khaled Mosaad|LB|26|200|EGY|2030||2026-07-01
Moamen Sherif|LB|20|100|EGY|2028||2025-01-01
Mazen Osama|LB|23|100|EGY|2030||2026-07-30
Momen Awad|RB|25|250|EGY|2029||2026-07-05
Ahmed El Shazly|RB|25|100|EGY|2029||2026-07-01
Mahmoud Emad|DM|28|450|EGY|2027||<2026-08-12
Mohamed Tony|DM|30|400|EGY|2029||<2026-07-16
Kenneth Semakula|DM|23|300|UGA|2029||2026-07-23
Mahmoud Dunga|DM|33|100|EGY|2027||<2026-01-09
Mohamed Fakhri|CM|27|300|EGY|2030||2026-07-08
Saviour Isaac|CM|24|250|NGA|2027||2025-07-15
Ahmed Atef|CM|21|150|EGY|2030||2026-01-01
Ahmed Hamdi|CM|28|100|EGY|2029||<2026-07-12
Bibo Ahmed Hassan|CM|24|50|EGY|2028||<2026-07-29
Ahmed Nagy|CM|21|25|EGY|||2025-07-01
Ahmed El Sayed|CM|27|100|EGY|2030||2026-07-01
Joseph Arumala|LW|22|250|NGA|2029||2026-08-10
Nour Alaa|LW|23|150|EGY|2027||<2026-07-16
Ahmed Eid|LW|27|50|EGY|2027||2022-09-01
Youssry Wahid|RW|28|200|EGY|2027||<2026-07-29
Pascal Phiri|RW|21|150|ZAM|2027||<2026-08-14
Islam Samir|RW|27|50|EGY|2028||2024-09-04
Anas Wael|RW|21|100|EGY|2031||2026-08-09
John Ebuka|ST|29|250|NGA|2027||<2025-07-20
Hossam Hassan|ST|33|200|EGY|2028||<2026-07-01
Trezeguet|ST|19|100|EGY|||2026-08-09` },
    { id: 'mokawloon', name: 'Аль-Мокавлун', city: 'Каир', stadium: 'Arab Contractors Stadium (Osman Ahmed Osman Stadium)', cap: 35000, colors: ['#ffd100', '#000000'], players: `
Mahmoud Aboul-Saoud|GK|38|100|EGY|||<2014-07-03
Mahmoud El Hadary|GK|31|100|EGY|2027||<2024-09-07
Mohamed Fawzi|GK|30|100|EGY|2028||<2025-07-01
Ali Tarek Soliman|GK|24|100|EGY
Hassan Shakosh|CB|28|300|EGY|2027||2024-09-02
Mohamed Ammar|CB|27|250|EGY|2029||2026-07-15
Mohamed Hamed|CB|32|175|EGY|2028||<2025-07-04
Youssef Safina|CB|25|100|EGY|2030||2026-07-01
Joseph Ochaya|LB|32|200|UGA|||2022-09-17
Nader Hesham|LB|27|150|EGY|2028||<2025-07-21
Sherif Reda|RB|29|350|EGY|2029||<2026-07-01
Omar Kamal|RB|33|250|EGY|2028||<2026-08-15
Kahraba|RB|27|200|EGY|2027||2025-07-01
Khaled Abdelfattah|RB|27|150|EGY|2027||<2026-08-12
Dokou Dodo|DM|22|200|BEN|2028||2026-08-18
Mostafa Gamal|DM|36|100|EGY|||2024-09-01
Ibrahim Adel|DM|20|100|EGY|2027||<2026-08-15
Omar El Wahsh|CM|31|350|EGY|2027||<2025-07-20
Islam Gaber|CM|30|150|EGY|2028||<2025-07-17
Abdelrahman Akmal|CM|22|50|EGY|||2024-09-01
Karim Ali|CM|21|100|EGY|||2026-07-01
Mohamed Abdelnasser|AM|20|400|EGY|2027||<2026-08-16
Ahmed Fouad|AM|27|100|EGY|2029||2026-01-25
Idrissa Thiam|LW|26|600|MTN|2028||2026-08-06
Mohammed Sandouqa|LW|23|100|PLE|2028||2026-07-20
Mostafa Sobhi|LW|28|75|EGY|2027||2024-10-01
Ahmed Ouled Behi|RW|26|250|TUN|2028||2026-02-04
Anas Baniouwda|RW|25|150|PLE|2028||2026-07-05
Mohamed Refaat|RW|21|150|EGY|||2026-07-01
Mido Gaber|RW|34|100|EGY|2029||<2026-07-01
Shokry Naguib|ST|32|200|EGY|2027||<2025-07-20
Joackiam Ojera|ST|28|150|UGA|||2024-01-31
Shady Hussein|ST|33|150|EGY|||<2026-07-05
Mohamed Salem|ST|32|100|EGY|2027||2019-07-01` },
    { id: 'smouha', name: 'Смуха', city: 'Александрия', stadium: 'Borg El Arab Stadium', cap: 86000, colors: ['#0033a0', '#ffffff'], players: `
Ahmed Mayhoub|GK|30|650|EGY|2028||<2026-07-01
Hussein Taimour|GK|26|25|EGY
Mohamed Haidar|GK|22|100|EGY|2030||2026-07-01
Mohamed Ragab|CB|27|400|EGY|2028||2025-07-01
Ahmed Abdelrasoul|CB|30|200|EGY|2028||<2026-07-01
Omar Mohsen|CB|20|100|EGY|2030||2026-07-01
Clement Niyigena|CB|25|100|RWA|||2026-07-11
Mohamed Desouki|LB|28|200|EGY|2028||<2026-07-01
Abdelrahman Amer|LB|34|100|EGY|||2023-07-21
Ali Lala|RB|27|400|EGY|2028||<2026-07-01
Hesham Hafez|RB|25|250|EGY|2027||<2024-09-05
Attidjikou Samadou|DM|22|450|BEN|2027||<2025-07-30
Mohamed Adel|DM|31|400|EGY|2027||<2026-08-02
Samir Fekri|CM|31|300|EGY|2028||<2025-07-11
Khaled El Ghandour|CM|32|200|EGY|2027||<2025-07-03
Amr El Sisi|CM|32|150|EGY|2028||<2025-01-30
Ahmed El Nadry|CM|27|100|EGY|2028||<2026-07-01
Abdelghani Mohamed|CM|24|100|EGY|2029||<2026-07-01
Mohamed Abdelsamia|CM|26|100|EGY|2029||2026-07-01
Kone Mohamed|CM|21|75|CIV|2028||2024-10-12
Ahmed Ali Amin|CM|22|25|EGY|||2022-08-09
Ahmed Ehab|AM|20|100|EGY|||2025-07-01
Hesham Balaha|LW|30|75|EGY|||<2026-01-21
Hady Amer|LW|21|100|EGY|||2026-07-01
Ahmed Saleh|LW|21|100|EGY|2029||2026-08-15
Marwan Hamdi|RW|25|150|EGY|2028||2026-07-05
Mohamed Farouk|RW|27|150|EGY|2029||2026-07-09
Makarona|RW|24|125|EGY|||2022-09-01
Pape Badji|ST|27|350|SEN|2028||<2025-07-20
Gabriel Chukwudi|ST|23|300|NGA|2028||<2026-07-01
Fady Farid|ST|29|250|EGY|2028||<2026-08-11
Emmanuel Nweke|ST|19|75|NGA|||2026-02-08` },
    { id: 'petrojet', name: 'Петроджет', city: 'Суэц', stadium: 'New Suez Stadium', cap: 27000, colors: ['#ffd100', '#002d72'], players: `
Omar Salah|GK|28|450|EGY|2027||<2024-09-03
Abdelkafi Ragab|GK|31|75|EGY|2027||<2025-07-01
Mohamed Khalifa|GK|23|75|EGY|2027||2024-09-01
Barakat Haggag|CB|29|250|EGY|||<2025-08-03
Youssef Abdeltawab|CB|19|150|EGY|2029||2026-07-01
Ahmed Bahbah|CB|33|125|EGY|||2023-08-01
Ahmed Yassin|CB|29|75|EGY|2027||<2025-07-14
Karim El Deeb|LB|31|250|EGY|||<2026-07-17
Islam Abdallah|LB|23|150|EGY|2027||2024-10-21
Ahmed El Beblawy|LB|21|100|EGY|||2026-07-01
Omar Diyaa|RB|25|150|EGY|||2026-08-11
Mahmoud Shedid Kenawi|RB|35|100|EGY|2027||2023-01-10
Mohamed Ali Okasha|DM|28|300|EGY|||<2024-09-20
Amadou Djoulde Bah|DM|23|150|GUI|||<2025-08-03
Abdelrahman Ramadan|DM|26|75|EGY|2030||2026-08-08
Gamal Fawzi|DM|21|100|EGY|||2026-07-01
Adham Hamed|CM|26|600|EGY|2027||<2025-01-22
Abdulhadi Rashid|AM|21|25|PLE|||2026-07-01
Mostafa El Badry|LW|29|350|EGY|2028||<2025-08-04
Badr Mousa|LW|27|300|PLE|2027||2024-09-25
Kgaogelo Sekgota|LW|29|75|RSA|2028||2026-08-05
Ahmed Helmy|LW|21|25|EGY|||2025-07-01
Abubakar Liadi|RW|23|250|NGA|2028||<2026-08-05
Mohamed Dodo|RW|23|200|EGY|2027||2024-09-01
Mostafa El Gamal|RW|29|200|EGY|2027||2021-09-01
Godwin Chika|ST|29|200|NGA|2027||<2026-08-07
Freddy Michael Kouablan|ST|28|150|CIV|2027||<2026-08-07
Samir Mohamed|ST|23|75|EGY|2029||<2026-08-15
Adel Ali|ST|21|25|EGY|||2025-07-01
Hossam Adel|ST|20|100|EGY|||2026-07-29` },
    { id: 'modern_sport', name: 'Модерн Спорт', city: 'Каир', stadium: 'Cairo International Stadium', cap: 74100, colors: ['#c8102e', '#000000'], players: `
Mostafa Makhlouf|GK|23|200|EGY|||<2026-07-01
Mahmoud El Zanfaly|GK|34|100|EGY|2028||2026-07-01
Sayed Sobhy|GK|25|100|EGY|2030||2026-07-01
Sharkia|CB|23|250|EGY|||2026-07-22
Mahmoud El Halawani|CB|29|250|EGY|2029||2026-07-08
Karim Yehia|CB|28|200|EGY|2028||2026-07-04
Tarek Mohamed|CB|26|75|EGY|2029||2024-08-12
Khaled Reda|CB|37|25|EGY|2027||<2023-08-17
Mohamed Yousri|CB|22|100|EGY|2029||2025-07-01
Omar Amin|CB|18|100|EGY|||2026-07-01
Walid Mostafa|LB|26|200|EGY|||2026-07-20
Hamdi Marcelo|LB|23|150|EGY|2028||2026-01-01
Ahmed Mazhoud|LB|31|75|TUN|2028||2025-07-01
Adham Nabil|LB|21|100|EGY|||2026-07-01
Ali Fawzi|RB|32|350|EGY|2027||<2025-01-14
Mostafa Gamal|RB|25|100|EGY|2029||2026-07-01
Ghanam Mohamed|DM|29|700|EGY|2028||2021-09-01
Ahmed Youssef|DM|27|300|EGY|2028||<2025-01-14
Mohamed Sabry|DM|26|200|EGY|2028||2024-08-03
El Limby|DM|26|100|EGY|||2026-07-05
Ali Zazaa|CM|25|150|EGY|2027||<2022-09-15
Ahmed Mostafa|AM|29|150|EGY||KSA|<2024-08-20
Mahmoud Mamdouh|LW|24|300|EGY|2029||2025-07-05
Adem Redjem|LW|29|75|ALG|2028||2025-07-03
Ismail Ayodele|LW|22|50|NGA|||2026-08-05
Youssef Ali|LW|27|50|EGY|||2026-07-05
Seif Oufa|LW|22|100|EGY|2030||2026-07-01
Mohamed Mosaad|RW|25|150|EGY|2029||2024-07-18
Arnold Eba|RW|23|150|CMR|2027||2024-01-31
Tito|RW|22|150|EGY|2030||2026-07-01
Kamel Kaboria|RW|29|100|EGY|||2026-07-06
Michael Ephson|ST|22|100|GHA|||2026-08-15
Selim Soliman|ST|21|25|EGY|||2026-07-01
El Zahy Abdelnaby|ST|21|100|EGY|2031||2026-07-09` },
    { id: 'ghazl', name: 'Газль Эль-Махалла', city: 'Эль-Махалла-эль-Кубра', stadium: 'El Mahalla Stadium', cap: 29000, colors: ['#ffd100', '#c8102e'], players: `
Amer Amer|GK|39|100|EGY|2027||<2024-09-07
Ahmed El Nafarawy|GK|28|50|EGY|2028||<2024-07-01
Mohamed Koko|GK|35|50|EGY|2028||<2026-07-05
Ahmed Fawzy|GK|21|100|EGY|||2026-07-01
Ahmed El Aash|CB|28|500|EGY|2028||<2025-07-01
Ahmed Shousha|CB|33|200|EGY|2028||<2025-07-01
Abdelfattah Sheta|CB|24|150|EGY|2029||2026-07-10
Abdelrahman Rashdan|CB|23|150|EGY|2029||2026-07-19
Adel Alaa|CB|17|100|EGY|2029||2026-07-01
Yehia Zakaria|LB|24|300|EGY|2029||2024-01-21
Mostafa Oufa|LB|22|50|EGY|2029||2025-07-13
Ahmed Raafat|LB|19|100|EGY|||2026-07-01
Fares Nechat|RB|25|350|ALG|2029||2026-07-18
Ahmed Gamal|RB|32|50|EGY|2027||2025-08-04
Mory Touré|DM|23|350|CIV|2027||2024-07-09
Mahmoud El Moghazi|DM|20|100|EGY|2030||2025-07-01
Ahmed Yasser|DM|19|75|EGY|||2026-01-01
Youssef Hassan|DM|28|25|EGY|2028||2024-10-24
Mohamed El Shahat|DM|21|100|EGY|||2026-07-01
Abdelrahman Shika|CM|27|400|EGY|2029||<2026-07-01
Moaz Abdelsalam|CM|20|250|EGY|2030||2025-07-01
Rached Arfaoui|CM|30|250|TUN|2027||2025-02-11
Abdelrahman Emad|CM|27|100|EGY|2029||<2026-07-10
Bassam Walid|CM|28|75|EGY|||2024-01-01
Armoosha|CM|26|75|EGY|2029||2025-07-07
Ahmed Etman|CM|23|75|EGY|2028||2025-07-01
Youssef El Azab|CM|23|50|EGY|2028||<2025-07-02
Saïdi Kibou|LW|20|150|COD|2028||2025-08-06
Abdo Yehia|RW|27|175|EGY|2030||<2018-07-01
Mohamed Ashraf|RW|28|125|EGY|2027||2024-09-09
Hazem El Askry|ST|23|100|EGY|2027||<2026-07-10
Amr Gomaa|ST|27|75|EGY|2029||<2026-07-10
Mohamed Salem Ekbad|ST|28|50|MTN|2028||2026-07-08
Atef El Hakim|ST|21|50|EGY|||2025-07-01` },
    { id: 'qanah', name: 'Олимпик Эль-Канах', city: 'Исмаилия', stadium: 'Suez Canal Stadium', cap: 22000, colors: ['#0033a0', '#ffffff'], players: `
Mohamed Shaaban|GK|32|200|EGY|2029||<2026-07-12
Mostafa Mahmoud|GK|29|100|EGY|||2025-08-01
Ahmed Castelo|GK|24|100|EGY|||2023-07-01
Ibrahim Samy|CB|24|200|EGY|2029||<2026-07-01
Momen Mahdy|CB|27|150|EGY|2028||2025-01-08
Mahmoud Rizk|CB|33|150|EGY|2028||<2026-08-07
Ali Elfil|CB|35|75|EGY|||<2026-08-12
Mohamed El Shebini|CB|35|100|EGY|2027||<2025-07-01
Mohab Samy|LB|21|150|EGY|2027||<2026-08-10
Islam Halima|LB|27|100|EGY|2027||2024-07-01
Mohamed Hany Treka|LB|27|50|EGY|||<2026-08-14
Osama El Nagar|RB|26|150|EGY|||<2026-07-01
Hassan El Shazly|RB|31|150|EGY|2029||2026-07-01
Momen Rady|DM|31|150|EGY|2027||2025-07-06
Mahmoud Hersha|DM|31|150|EGY|||2023-08-20
Mohamed Diab|DM|31|75|EGY|2027||<2025-01-15
Mohamed El Kout|DM|27|50|EGY|2028||2025-07-19
Hafiz Ibrahim|CM|24|250|GHA|2028||2026-07-13
Ahmed Ali|CM|26|100|EGY|2027||<2026-08-04
Mohamed Helal|AM|31|400|EGY|2029||<2026-07-12
Mostafa Hamada|AM|26|150|EGY|||<2026-08-12
Mohamed Sadek|AM|29|150|EGY|2027||<2026-08-03
Mawuli Wayo|LW|23|250|GHA|||2026-08-13
Mody Shalata|LW|25|200|EGY|2028||2024-09-23
Hossam Greisha|LW|29|125|EGY|||<2025-08-06
Ibrahim El Sayed|LW|21|100|EGY|||2025-07-01
Ramy Najjarine|RW|26|350|LBN|2028|AUS|2026-07-13
Mohamed Antar|RW|33|75|EGY|2028||<2026-07-01
Hazem Abosena|ST|25|150|EGY|||<2026-07-01
Mohamed Hamdi|ST|34|100|EGY|||2026-07-09
Rudolf Mensah|ST|25|75|GHA|||2026-07-01` },
    { id: 'talaea', name: 'Талаеа Эль-Гаиш', city: 'Каир', stadium: 'Gehaz El Reyada Stadium', cap: 20000, colors: ['#c8102e', '#ffffff'], players: `
Omar Radwan|GK|29|150|EGY|||<2022-09-01
Emad El-Sayed|GK|40|50|EGY|||<2022-10-04
Mohamed Magdy|GK|31|50|EGY|||<2025-07-01
Mohamed Camacho|CB|33|250|EGY|||<2023-01-31
Ahmed Alaa|CB|32|250|EGY|||<2024-09-03
Mahmoud Shabana|CB|31|200|EGY|2028||<2026-07-14
Moamen Mahmoud|CB|23|75|EGY|||2023-07-21
Khaled Sotohi|CB|37|25|EGY|||<2017-08-01
Hossam Awad|CB|21|100|EGY|||2026-07-01
Hamed El Gabry|LB|27|150|EGY|2027||<2024-10-08
Amro Tarek|LB|34|75|EGY|2028|USA|2023-09-14
Ahmed Zola|RB|33|150|EGY|||<2019-07-20
Zaghloul El Zoughbi|RB|24|75|EGY|2030||2026-07-17
Yehia Mostafa|DM|23|150|EGY|2029||2026-02-08
Ahmed Wahid|DM|21|100|EGY|||2026-07-01
Walid Benbella|DM|25|100|FRA||MAR|2026-07-27
Houssem Eddine Souissi|CM|29|400|TUN|2028||2025-07-01
Mostafa El Khawaga|CM|33|100|EGY|||<2023-08-06
Mohamed Yasser|CM|19|100|EGY|||2025-07-01
Islam Mohareb|AM|34|100|EGY|||<2023-07-21
Ahmed Tarek|AM|24|100|EGY|2028||2025-07-01
Mahmoud Abdelaziz|AM|24|25|EGY|2029||2025-07-01
Kareem Tarek|LW|34|100|EGY|||<2023-08-07
Komi Arnaud Komlavi|LW|25|75|TOG|||2026-07-30
Ayman Amir Abdelaziz|LW|20|100|EGY|2029||2026-08-11
Mohamed Atef|RW|24|300|EGY|2027||<2025-07-14
Mohamed Hany|RW|24|100|EGY|||2023-07-21
Khaled Aboziada|RW|27|100|EGY|2027||<2025-07-01
Ismaïl Ouro-Agoro|ST|30|200|TOG|2027||2025-08-04
Fares Hatem|ST|23|150|EGY|||2023-07-21
Riga|ST|32|75|EGY|||<2024-09-06
Ali El Garhi|ST|19|100|EGY|||2026-07-01` },
    { id: 'el_gouna', name: 'Эль-Гуна', city: 'Эль-Гуна', stadium: 'Khaled Bichara Stadium', cap: 14000, colors: ['#ffd100', '#0033a0'], players: `
Islam Reisha|GK|29|150|EGY|||<2026-07-24
Ahmed Masoud|GK|34|50|EGY|2027||<2023-08-05
Badreldin Walid|GK|20|100|EGY|||2024-10-14
Shamy Rabiaa|GK|21|100|EGY|||2026-07-01
Ziad Askar|GK|25|100|EGY|2029||2025-07-01
Mostafa Metawea|CB|23|250|EGY|2027||<2026-07-26
Alpha Turay|CB|21|150|SLE|2027||2025-08-05
Saber El Shimi|CB|33|125|EGY|2028||2025-07-01
Islam Abou-Salima|CB|33|100|EGY|||2026-07-23
Marwan Essam|CB|21|75|EGY|||2026-07-26
Ahmed Sherif|CB|20|100|EGY|2027||<2026-07-25
Khaled Ahmed|LB|23|400|EGY|2027||<2026-07-25
Youssef Afifi|LB|25|75|EGY|2027||<2026-08-14
Abdelgawad Taalab|RB|24|300|EGY|2027||2024-02-06
Ahmed Ghoneim|RB|27|75|EGY|||<2026-07-23
Ahmed Belia|RB|26|75|EGY|2028||2025-07-01
David Simukonda|DM|21|100|ZAM|2027||<2026-08-15
Wilfried Teukeu|DM|21|100|CMR|||2026-08-14
Mahmoud Hassouna|DM|29|50|EGY|2027||2024-10-06
Nour El Sayed|DM|42|25|EGY|2027||<2020-10-31
Zizo|DM|25|100|EGY|2027||<2026-07-01
Omar El Gazar|CM|22|150|EGY|2027||<2026-07-26
Michael Egbemba|CM|21|150|CMR|||2026-08-02
Reda Salah|CM|28|100|EGY|||2024-01-10
Belal El Sayed|CM|25|100|EGY|2027||<2024-09-06
Mohamed Reda|CM|24|100|EGY|||<2026-07-23
Ismail Zazaa|CM|19|100|EGY|||2026-07-01
Salah Zayed|LW|25|100|EGY|2027||<2026-07-05
Alaa Shaaban|LW|26|75|EGY|2029||<2026-07-01
Ali El Zahdi|RW|30|100|EGY|||<2024-10-25
Tolulope Samuel Ojo|ST|23|150|NGA|2027||<2024-10-25
Ahmed Gamal|ST|24|150|EGY|2027||<2025-07-22
Ahmed Zaki|ST|24|100|EGY|2027||<2026-07-01
Marwan Mohsen|ST|37|75|EGY|2027||2025-01-01
Islam Hesham|ST|29|50|EGY|2028||<2026-07-30` },
    { id: 'asyut', name: 'Асьют Петролеум', city: 'Асьют', stadium: 'Asyut Cement Stadium', cap: 10000, colors: ['#0033a0', '#ffd100'], players: `
Amgad Youssef|GK|26|200|EGY|||2025-07-16
Karim Emad|GK|29|100|EGY|2028||<2026-08-07
Ahmed Gamal|GK|21|100|EGY
Abdelaziz Ahmed|GK|27|100|EGY|||2025-07-31
Mahmoud Alaa|CB|29|150|EGY|2029||<2026-07-01
Ahmed Shokry|CB|32|150|EGY|||2025-01-16
Mahmoud Okal|CB|32|150|EGY|||2023-08-06
Ahmed Magdy|CB|21|100|EGY|2029||<2026-08-09
Khaled Abdelaal|CB|23|100|EGY|2027||2024-09-21
Ziad Tarek|LB|25|150|EGY|2027||<2026-08-08
Abdelrahman Morgan|LB|20|75|EGY|2029||2026-08-09
Fares Ragab|LB|21|100|EGY|||2026-07-01
Ali Mahran|LB|31|100|EGY|||2026-08-14
Abdelrahman Medhat|RB|24|100|EGY|2027||<2024-09-30
Ahmed Hamzawi|DM|30|150|EGY|||2026-07-09
Abdelrahman El Khamisi|DM|26|150|EGY|||2023-07-20
Abdo Keshkesh|DM|26|100|EGY|2028||2025-07-20
Bakr Fawzi|DM|27|75|EGY|||2025-07-29
Alabi Folarin Salam|DM|23|75|NGA|2029||2026-07-01
Moamen Eid|DM|25|100|EGY|2028||2025-02-06
Youssef Ahmed Hassan|DM|21|100|EGY|||<2026-07-01
Ibrahim Abbas|CM|27|100|EGY|2027||2024-09-23
Mohamed Hesha|AM|27|150|EGY|||2023-01-15
Karim Kamel|AM|23|75|EGY|2028||2025-07-09
Mostafa Sadafa|LW|28|150|EGY|||2022-01-24
Mohamed Eid|LW|30|100|EGY|||2023-07-01
Ismail Ashraf|LW|27|100|EGY|2029||2026-07-20
Fathy Gamal|LW|28|100|EGY|2029||2026-08-06
Ahmed Younes|RW|24|100|EGY|||2020-07-01
Ahmed Khaled|ST|25|150|EGY|2027||<2026-08-13
Che Corines Bodne|ST|24|100|CMR|2027||2026-08-04
Joshua Egaji|ST|21|100|NGA|||<2025-07-01
Ahmed Arabi|ST|24|100|EGY|||2023-07-01` },
    { id: 'abo_qir', name: 'Абу-Кир', city: 'Александрия', stadium: 'Alexandria Stadium', cap: 19676, colors: ['#0033a0', '#ffffff'], players: `
Mahmoud Genesh|GK|39|100|EGY|2027||<2026-07-12
Mohamed Shika|GK|33|100|EGY|2028||2026-07-01
El Sayed El Sawy|GK|35|100|EGY|2028||2021-10-01
Ahmed Awad|CB|31|150|EGY|2027||<2026-07-08
Mohamed Dabash|CB|34|75|EGY|2028||<2026-07-26
Bashar Al-Shobaki|CB|26|50|PLE|||2026-07-12
Eyad Salah|CB|21|100|EGY|2029||2026-08-15
Ahmed Fayez|CB|29|100|EGY|2028||2023-07-26
Gaber Kamel|LB|30|150|EGY|2028||2026-07-04
Ahmed Dahesh|LB|28|150|EGY|2027||<2026-07-26
Islam Ashraf|LB|27|100|EGY|2028||2025-07-02
Mohamed Alaa|RB|26|150|EGY|2028||2019-07-01
Ayman El Gazar|RB|22|100|EGY|2027||2026-07-23
Ramez Milad|DM|28|200|EGY|2028||2021-07-24
Emad Hamdi|DM|33|100|EGY|2027||<2026-07-01
Seif El Agouz|DM|24|25|EGY|2029||2026-07-23
Youssef Hamdi|CM|26|150|EGY|2028||2021-07-01
Ocha|CM|28|100|EGY|2028||2023-09-12
Glid Otanga|CM|26|100|CGO|||2026-08-01
Omar Ibrahim|CM|28|75|EGY|2028||2021-07-01
Emad Fathi|CM|33|75|EGY|2027||<2026-07-14
Ziad Shaker|CM|20|100|EGY|||2026-07-23
Quaison Kofi Gideon|AM|21|50|GHA|||2026-08-15
Ziad Farag|AM|24|25|EGY|2028||<2026-08-01
Prince Tweneboah|LW|20|125|GHA|||2026-08-15
Favour Akem|LW|22|100|NGA|||<2026-08-15
Mohamed Camara|LW|19|100|GUI|2028||2028-06-30
Seif Shika|LW|25|75|EGY|2028||<2026-08-03
Ahmed Khaled|LW|28|50|EGY|2027||<2026-07-02
Mohamed Magdy|LW|29|100|EGY|2028||2028-06-30
Mostafa Shehata|RW|25|75|EGY|2027||<2026-07-01
Ali Hussein|ST|33|100|EGY|2027||<2026-08-13
Mahmoud Abou-Gouda|ST|28|75|EGY|2028||<2026-07-13
Hesham Ramadan|ST|30|100|EGY|2027||2025-01-01
Abdelrahman El Desouki|ST|26|100|EGY|2028||2026-01-05
Khaled Rabiaa|ST|21|100|EGY|2029||2029-06-30` },
  ],
});
