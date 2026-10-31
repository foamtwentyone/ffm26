// Экстракласа 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'pol', name: 'Экстракласа', short: 'Экстракласа', country: 'POL', tier: 1, weekday: 5,
  autumn: { from: '07-18', rounds: 17 }, spring: { from: '01-30', rounds: 17 },
  ticket: 10, prize: [6000, 5750, 5450, 5200, 4950, 4700, 4400, 4150, 3900, 3600, 3350, 3100, 2800, 2550, 2300, 2050, 1750, 1500],
  teams: [
    { id: 'lech', name: 'Лех', city: 'Познань', stadium: 'Enea Stadion', cap: 43269, colors: ['#0055a4', '#ffffff'], players: `
Mateusz Lis|GK|29|1500|POL|2029||2026-07-01
Mateusz Pruchniewski|GK|19|200|POL|2030||2023-07-18
Aleks Olsztyn|GK|16|500|POL|2028||2026-09-15
Wiktor Obremski|GK|18|500|POL|2029||2026-07-20
Wojciech Mońka|CB|19|10000|POL|2030||2024-04-26
Terry Yegbe|CB|25|3000|GHA|2030||2026-07-01
Alex Douglas|CB|25|600|SWE|2027|GHA|2024-07-09
Mateusz Skrzypczak|CB|26|600|POL|2029||<2025-07-01
Hubert Janyszka|CB|17|50|POL|2029||2025-11-20
Michal Gurgul|LB|20|7000|POL|2028||2023-01-24
João Moutinho|LB|28|450|POR|2027||2025-07-16
Piotr Bartczak|LB|17|500|POL|2027||2026-09-11
Joel Pereira|RB|30|2000|POR|2027||2021-07-01
Robert Gumny|RB|28|800|POL|2027||2025-07-01
Antoni Kozubal|DM|22|6000|POL|2028||2021-01-27
Gustav Berggren|DM|29|1500|SWE|2029||2026-08-12
Radosław Murawski|DM|32|300|POL|2028||2021-07-01
Pablo Rodríguez|AM|25|3500|ESP|2029||2025-07-18
Filip Jagiełło|AM|29|700|POL|2027||2024-08-13
Karol Delikat|AM|18|300|POL|2029||2026-07-20
Luis Palma|LW|26|4000|HON|2029||2026-07-01
Daniel Håkans|LW|25|1500|FIN|2028||2024-08-01
Leo Bengtsson|LW|28|1500|SWE|2028||2025-07-10
Eryk Śledziński|LW|18|500|POL|2029||2026-09-15
Patrik Walemark|RW|25|5000|SWE|2029||2025-01-31
Allahyar Sayyadmanesh|RW|25|3500|IRN|2029||2026-07-01
Ali Gholizadeh|RW|30|1500|IRN|2027||2023-07-11
Yannick Agnero|ST|23|1500|CIV|2030||2025-09-01
Mikael Ishak|ST|33|500|SWE|2027|SYR|2020-07-20` },
    { id: 'gornik', name: 'Гурник Забже', city: 'Забже', stadium: 'Arena Zabrze', cap: 31871, colors: ['#0055a4', '#e30613'], players: `
Philipp Schulze|GK|23|600|GER|2029||2026-07-01
Tomasz Loska|GK|30|250|POL|2028||<2025-07-01
Piotr Pietryga|GK|23|500|POL|2027||2025-07-17
Wiktor Kania|GK|17|500|POL|2029||2026-07-13
Josema|CB|30|800|ESP|2028||2024-07-01
Pawel Bochniewicz|CB|30|400|POL|2029||2026-01-26
Rafał Janicki|CB|34|300|POL|2027||2021-07-16
Ondrej Zmrzly|LB|27|1200|CZE|2029||2026-07-01
Erik Janza|LB|33|400|SVN|2027||2019-07-01
Michal Sacek|RB|30|800|CZE|2028||<2025-07-01
Patryk Warczak|RB|23|350|POL|2029||2026-07-01
Malthe Højholt|DM|25|1200|DEN|2029||2026-09-02
Maximilian Dietz|DM|24|1000|USA|2029|GER|2026-07-17
Jarosław Kubicki|DM|31|600|POL|2028||<2025-07-01
Bastien Donio|DM|21|300|FRA|2028||2025-07-01
Paulo Bernardo|CM|24|3500|POR|2027|VEN|2026-08-04
Kacper Urbański|AM|22|3000|POL|2028||<2026-07-01
Lukas Sadilek|AM|30|1000|CZE|2029||2026-01-26
Marcel Kalemba|AM|21|150|POL|2028|GER|2025-08-29
Ksawery Semik|AM|18|500|POL|2029||2026-02-24
Максым Хлан|LW|23|5000|UKR|2027||2025-08-13
Zeidane Inoussa|LW|24|4500|SWE|2027|BEN|2026-09-09
Peter Federico|RW|24|2000|DOM|2029|ESP|2026-07-11
Bruno Durdov|RW|18|2000|CRO|2029||2026-07-01
Yvan Ikia Dimi|RW|22|800|CGO|2029|FRA|2026-02-11
Janis Antiste|ST|24|1000|MTQ|2027|FRA|2026-08-15
Erik Prekop|ST|29|700|SVK|2029||2026-07-01
Sondre Liseth|ST|29|600|NOR|2027||2025-01-23` },
    { id: 'jagiellonia', name: 'Ягеллония', city: 'Белосток', stadium: 'Chorten Arena', cap: 22372, colors: ['#ffd700', '#e30613'], players: `
Slawomir Abramowicz|GK|22|5000|POL|2028||2021-08-23
Michał Perchel|GK|19|350|POL|2029||2026-07-01
Adrian Damasiewicz|GK|18|500|POL|2028||2025-07-01
Jakub Rabiczko|GK|18|500|POL|2027||2026-07-21
Bernardo Vital|CB|25|3000|POR|2027||2025-07-03
Apostolos Konstantopoulos|CB|24|800|GRE|2027||<2026-01-30
Yuki Kobayashi|CB|26|700|JPN|2028||2025-07-03
Dusan Stojinovic|CB|26|500|SVN|2027||2023-01-26
Bartłomiej Krasiewicz|CB|20|500|POL|2027||2024-07-01
Olaf Pankiewicz|CB|19|500|POL|2027||2026-07-23
Bartlomiej Wdowik|LB|26|1500|POL|2027||2026-09-02
Guilherme Montóia|LB|23|750|POR|2029||2026-01-26
Cezary Polak|LB|23|250|POL|2027||2024-09-03
Norbert Wojtuszek|RB|25|2500|POL|2027||<2025-01-28
Rodrigo Conceição|RB|26|500|POR|2028||2026-07-12
Szymon Pankiewicz|RB|25|500|POL|||2026-07-23
Maciej Kuczyński|RB|19|500|POL|2027||2025-12-04
Anders Klynge|DM|26|1200|DEN|2029||2026-07-28
Eryk Kozłowski|DM|20|1000|POL|2027||2024-09-21
Hampus Finndell|DM|26|650|SWE|2029||2026-08-25
Taras Romanczuk|DM|34|200|POL|2028||2014-07-22
Sergio Lozano|AM|27|1500|ESP|2027||2025-09-02
Dawid Drachal|AM|21|350|POL|2028||<2025-07-01
Jesús Imaz|AM|36|300|ESP|2028||<2019-01-21
Jakub Kucharski|AM|17|300|POL|2029||2026-09-09
Aleksandar Cirkovic|LW|25|2000|SRB|2027||2026-09-01
Kajetan Szmyt|LW|24|1200|POL|2029||<2026-02-06
Kamil Jóźwiak|LW|28|300|POL|2027||2025-09-11
Jeremy Agbonifo|RW|21|4000|SWE|2027|NGA|2026-07-21
Ousmane Sow|RW|26|2200|FRA|2027|SEN|2026-08-17
Zachary Zalewski|RW|17|200|POL|2028|CAN|2026-01-30
Paweł Pakieła|RW|19|500|POL|||2026-07-23
Nik Prelec|ST|25|1500|SVN|2029||2026-07-10
Dimitris Rallis|ST|21|400|GRE|2028|NED|2025-07-01
Youssuf Sylla|ST|23|300|BEL|2028|GUI|2025-08-31
Максим Кононов|ST|20|500|BLR|2028|POL|2026-07-24` },
    { id: 'rakow', name: 'Ракув', city: 'Ченстохова', stadium: 'Miejski Stadion Piłkarski Raków', cap: 5500, colors: ['#e30613', '#0055a4'], players: `
Kacper Trelowski|GK|23|2000|POL|2029||2019-08-23
Tarik Karic|GK|21|500|BIH|2030||2026-07-01
Wiktor Żołneczko|GK|17|50|POL|2029||2026-02-13
Nils Zätterström|CB|21|3500|SWE|2027||2026-09-08
Stratos Svarnas|CB|28|2000|GRE|2027||2023-07-01
Bogdan Racovițan|CB|26|2000|ROU|2028|FRA|2022-01-27
Arvid Brorsson|CB|27|400|SWE|2029||2026-08-18
Dieudonné Gaucho Debohi|CB|25|400|UGA|2028|CIV|2026-07-01
Jerzy Napieraj|CB|21|50|POL|2029||2026-02-04
Nikodem Całko|CB|17|500|POL|2029||2026-07-16
Marko Bulat|DM|25|2500|CRO|2030||2025-08-01
Oskar Repka|DM|27|1500|POL|2030||<2025-07-04
Владыслав Кочергин|DM|30|1000|UKR|2027||2022-03-26
Karol Struski|DM|25|1000|POL|2029||2025-07-01
Abraham Ojo|DM|19|250|NGA|2031||2026-01-26
Fran Tudor|RW|31|900|CRO|2027||2020-01-01
Jakub Jendryka|RW|19|350|POL|2030||2026-07-03
Adriano|LW|24|1000|BRA|2028||2024-07-01
Jean Carlos Silva|LW|30|700|ESP|2028|BRA|<2023-01-01
Marko Perovic|LW|20|600|MNE|2030||2026-08-05
Erick Otieno|LW|30|450|KEN|2027||2024-01-11
Lamine Diaby-Fadiga|AM|25|3000|GUI|2028|FRA|<2025-07-01
Tomasz Pieńko|AM|22|1500|POL|2030||<2025-07-25
Adam Basse|AM|18|1000|POL|2027|USA|2025-02-24
Patryk Makuch|AM|27|800|POL|2028||<2024-07-11
Bogdan Mirčetić|AM|20|800|SRB|2030||2025-09-02
Ádin Molnár|AM|22|800|HUN|2030||2026-07-08
Oliwier Kwiatkowski|AM|21|400|POL|2031||2026-07-01
Махир Емрели|ST|29|700|AZE|2027||2026-07-18
Isak Brusberg|ST|20|500|SWE|2030||2026-01-26` },
    { id: 'katowice', name: 'ГКС Катовице', city: 'Катовице', stadium: 'Arena Katowice', cap: 15048, colors: ['#ffd700', '#00a650'], players: `
Rafał Strączek|GK|27|600|POL|2029||2024-07-24
Gabriel Kobylak|GK|24|350|POL|2028||<2026-07-01
Maciej Kikolski|GK|22|300|POL|2027||<2026-07-01
Wojciech Monica|GK|16|500|POL|||2026-07-22
Wojciech Pańkowski|GK|18|500|POL|2028||2026-04-08
Pau Resta|CB|25|1500|ESP|2030||<2026-07-01
Marius Olsen|CB|25|450|NOR|2028||2026-03-04
Lukas Klemenz|CB|31|350|POL|2028||2024-07-01
Aleksander Paluszek|CB|25|250|POL|2027||<2025-07-01
Arkadiusz Jędrych|CB|34|200|POL|2028||2019-01-29
Alan Czerwiński|CB|33|200|POL|2028||<2024-07-09
Mateusz Kowalczyk|DM|22|1500|POL|2028||2025-07-01
Bartosz Wolski|DM|29|500|POL|2029||<2026-07-01
Jesse Bosch|DM|26|400|NED|2028||2025-08-14
Sebastian Milewski|DM|28|350|POL|2029||2024-07-04
Damian Rasak|DM|30|350|POL|2027||2026-02-11
Kacper Łukasiak|DM|23|300|POL|2027||<2025-07-01
Erik Jirka|RW|29|500|SVK|2028||<2026-01-26
Marcin Wasielewski|RW|32|250|POL|2028||2022-07-01
Mateusz Wdowiak|LW|30|350|POL|2027||<2026-01-26
Borja Galán|LW|33|250|ESP|2028||2024-07-01
Eman Marković|AM|27|800|NOR|2028|BIH|2025-08-29
Bartosz Nowak|AM|33|450|POL|2029||<2024-07-23
Szymon Bartlewicz|AM|20|350|POL|2029||2026-07-01
Marcel Wędrychowski|AM|24|250|POL|2028||<2025-07-01
Илья Шкурин|ST|27|1000|BLR|2028||<2025-09-06
Adam Zrelak|ST|32|250|SVK|2027||2024-07-01
Jakub Kokosiński|ST|19|75|POL|2027||2025-10-24` },
    { id: 'legia', name: 'Легия', city: 'Варшава', stadium: 'Stadion Wojska Polskiego', cap: 31103, colors: ['#00a650', '#ffffff'], players: `
Otto Hindrich|GK|24|3500|ROU|2030|HUN|2026-01-26
Ivan Brkic|GK|31|350|CRO|2029||<2026-07-01
Jan Bienduga|GK|18|500|POL|2029||2026-07-15
Kamil Piątkowski|CB|26|2500|POL|2029||2025-08-30
Robert Deziel Jr.|CB|21|1000|USA|2030|ITA|2026-07-01
Rafał Augustyniak|CB|33|350|POL|2027||2022-07-30
Zoran Arsenic|CB|32|300|CRO|2028||<2026-07-01
Mateusz Lauryn|CB|18|500|POL|2027||2026-09-09
Bartosz Korżynski|CB|17|500|POL|2027||2026-07-15
Damian Szymański|DM|31|450|POL|2029||2025-08-14
Henrique Arreiol|DM|21|400|POR|2029||2025-08-15
Filip Przybyłko|DM|18|500|POL|2027||2026-07-16
Shinnosuke Fukuda|RW|26|750|JPN|2027||2026-09-04
Kacper Chodyna|RW|27|300|POL|2028||<2024-07-01
Paweł Wszołek|RW|34|200|POL|2027||2022-07-07
Rúben Vinagre|LW|27|1500|POR|2028||2025-02-06
Arkadiusz Reca|LW|31|350|POL|2028||2025-07-18
Эрик Миканович|LW|19|500|BLR|2030||2026-07-16
Wojciech Urbański|AM|21|1000|POL|2029||2024-02-02
Samuel Kovacik|AM|19|1000|SVK|2029||2026-01-01
Mateusz Szczepaniak|AM|19|800|POL|2027||2024-05-10
Michal Sevcik|AM|24|800|CZE|2027||2026-07-10
Bartosz Kapustka|AM|29|800|POL|2028||2020-08-13
Jakub Żewłakow|AM|19|700|POL|2030||2024-02-02
Вахан Бичахчян|AM|27|600|ARM|2028||<2025-01-23
Богдан Виуннык|AM|24|500|UKR|2027||2026-09-04
Franciszek Stępniewski|AM|16|500|POL|||2026-10-09
Jan Kuchta|ST|29|2700|CZE|2027||2026-08-10
Rafał Adamski|ST|24|1000|POL|2029||2026-02-11
Łukasz Zjawiński|ST|25|600|POL|2030||2026-07-01
Antonio Colak|ST|33|200|CRO|2027|GER|2025-09-02` },
    { id: 'zaglebie', name: 'Заглембе', city: 'Любин', stadium: 'KGHM Zagłębie Arena', cap: 16068, colors: ['#ff6600', '#00a650'], players: `
Zlatan Alomerovic|GK|35|225|SRB|2028|GER|2026-07-01
Dominik Hladun|GK|31|200|POL|2027||<2024-07-17
Jasmin Buric|GK|39|25|BIH|2027|POL|2022-01-03
Franciszek Nowak|GK|17|500|POL|||2026-07-16
Роман Якуба|CB|25|800|UKR|2027||2025-07-02
Aleks Lawniczak|CB|27|600|POL|2027||2022-01-06
Damian Michalski|CB|28|500|POL|2027||2025-02-03
Michal Nalepa|CB|33|200|POL|2027||2023-07-06
Maciej Urbański|CB|19|500|POL|2027||2026-01-29
Filip Kocaba|DM|21|1500|POL|2029||2022-02-02
Mateusz Dziewiatowski|DM|19|700|POL|2029||2024-02-09
Jakub Kolan|DM|22|600|POL|2029||2022-10-18
Damian Dabrowski|DM|34|250|POL|2027||<2023-07-01
Patryk Dziekoński|DM|17|500|POL|||2026-07-16
Igor Orlikowski|RW|20|800|POL|2028||2023-07-13
Szymon Lyczko|RW|20|400|POL|2028|USA|2026-07-01
Mateusz Grzybek|RW|30|350|POL|2027||<2023-01-09
Josip Corluka|RW|31|350|BIH|2027|CRO|2025-02-12
Arkadiusz Woźniak|RW|36|25|POL|2027||<2022-07-01
David Colina|LW|26|650|CRO|2028||2026-07-03
Marcel Reguła|AM|19|7000|POL|2028||2024-07-16
Jakub Sypek|AM|25|350|POL|2027||<2025-07-01
Sebastian Kerk|AM|32|350|GER|2028||2026-07-01
Kamil Nowogoński|AM|19|350|POL|2027||2025-05-16
Cyprian Popielec|AM|19|250|POL|2027||2023-08-04
Jakub Ligocki|AM|18|75|POL|2028||2026-01-29
Seweryn Marek|AM|18|500|POL|2028||2026-01-29
Levente Szabó|ST|27|500|HUN|2027||2026-01-28
Filip Szymczak|ST|24|500|POL|2029||<2026-07-09
Michalis Kosidis|ST|24|300|GRE|2027||2025-07-05
Mihael Mlinaric|ST|26|300|CRO|2028||2026-02-04
Paweł Kosmalski|ST|20|500|POL|2029||2026-07-01` },
    { id: 'wisla_plock', name: 'Висла Плоцк', city: 'Плоцк', stadium: 'Orlen Stadion', cap: 15004, colors: ['#0055a4', '#ffffff'], players: `
Rafał Leszczyński|GK|34|250|POL|2027||<2025-07-01
Jakub Burek|GK|23|100|POL|2028||2023-02-22
Szymon Wadas|GK|19|500|POL|2027||2026-07-13
Afonso Silva|CB|22|800|POR|2028||2026-08-13
Marcus Haglind-Sangré|CB|31|350|SWE|2029||2024-01-09
Marcin Kamiński|CB|34|250|POL|2027||2025-07-02
Przemysław Misiak|CB|23|175|POL|2028||2024-07-01
Marcin Flis|CB|32|100|POL|2028||2026-07-01
Матвей Бохно|CB|19|50|BLR|2028|POL|2026-01-26
Marcin Więckowski|CB|22|500|POL|2027||2026-07-13
Sidnei Tavares|DM|25|1800|CPV|2027|POR|2026-09-01
Jurica Prsir|DM|26|1000|CRO|2029||2026-07-11
Kyriakos Savvidis|DM|31|250|GRE|2027||2026-02-25
Krystian Pomorski|DM|30|150|POL|2027||2024-07-01
Dani Pacheco|DM|35|150|ESP|2027||<2024-07-16
Zan Rogelj|RW|26|900|SVN|2029||2026-07-01
Michał Król|RW|26|200|POL|2029||<2026-07-01
Fabian Hiszpański|RW|32|75|POL|2027||2023-07-01
Dion Gallapeni|LW|21|4000|KVX|2029|ALB|<2026-07-01
Глеб Кучко|LW|21|500|BLR|2027|POL|2023-03-31
Patryk Kun|LW|31|300|POL|2028||<2026-07-01
Nikodem Rogowski|LW|17|25|POL|2027||2026-05-22
Olaf Kobacki|AM|25|400|POL|2028||2026-07-01
Jorge Jiménez|AM|27|400|ESP|2028||2023-08-24
Adam Radwański|AM|28|400|POL|2027||<2026-07-10
Samuel Akere|RW|22|1000|NGA|2027||<2026-09-09
Said Hamulic|ST|25|400|BIH|2027|NED|2026-02-25
Deni Jurić|ST|29|300|AUS|2028|CRO|2025-09-08
Łukasz Sekulski|ST|35|100|POL|2027||2021-07-26
Kacper Błaszkiewicz|ST|20|500|POL|2028||2026-07-13
Marcin Kościelecki|ST|20|500|POL|2029||2026-08-27` },
    { id: 'pogon', name: 'Погонь', city: 'Щецин', stadium: 'Stadion im. Floriana Krygiera', cap: 21163, colors: ['#1d3c8f', '#800020'], players: `
Valentin Cojocaru|GK|31|700|ROU|2027||2024-07-01
Nikolaos Botis|GK|22|350|GRE|2029||2026-07-01
Kevin Dąbrowski|GK|28|225|POL|2028||2026-09-09
Alex Peškovič|GK|17|500|SVK|2027||2025-08-09
Hubert Renka|GK|17|500|POL|2028||2026-09-17
Antoni Fojut|GK|16|500|POL|2027||2026-08-28
Dimitrios Keramitsis|CB|22|4000|GRE|2029||2024-09-06
Attila Szalai|CB|28|1500|HUN|2029||2026-07-09
Lukas Willen|CB|23|600|BEL|2029||2026-07-31
Alessandro Riccio|CB|24|350|ITA|2028||2026-09-09
Andrzej Ossowski|CB|17|500|POL|2029||2026-07-01
Benjamin Mendy|LB|32|400|FRA|2027|SEN|2025-09-16
Linus Wahlqvist|RB|29|800|SWE|2028||2023-01-01
Hussein Ali|RB|24|400|IRQ|2028|SWE|2025-09-18
Isaiah Eichie|RB|19|500|GER|2029|NGA|2026-09-11
Patryk Dziczek|DM|28|700|POL|2029||<2026-07-01
Kellyn Acosta|DM|31|600|USA|2027||2026-01-26
Jan Biegański|DM|23|400|POL|2027||2025-07-14
Mor Ndiaye|DM|25|300|SEN|2027||2025-07-01
Natan Ława|AM|17|1000|POL|2029||2025-07-01
Maciej Wojciechowski|AM|19|500|POL|2027||2024-07-17
José Pozo|AM|30|300|ESP|2027||<2025-07-01
Darko Churlinov|LW|26|1500|MKD|2028||2026-07-27
Paul Mukairu|LW|26|1200|NGA|2027||2025-07-02
Kamil Grosicki|LW|38|150|POL|2027||2021-08-21
Jacek Czapliński|LW|20|100|POL|2028||2026-02-05
Musa Juwara|RW|24|400|GAM|2028||2025-07-03
Rajmund Molnár|ST|24|1000|HUN|2028||2025-08-30
Filip Cuic|ST|23|700|BIH|2029|CRO|2026-02-23
Jordi Sánchez|ST|31|400|ESP|2028||<2026-09-08
Jean-Pierre Nsame|ST|33|250|CMR|2027|FRA|<2026-07-01
Patryk Paryzek|ST|20|250|POL|2027||2023-11-30` },
    { id: 'radomiak', name: 'Радомяк', city: 'Радом', stadium: 'Stadion Radomiaka', cap: 14440, colors: ['#00a650', '#ffffff'], players: `
Filip Majchrowicz|GK|26|600|POL|2028||<2025-07-01
Bartłomiej Gradecki|GK|26|200|POL|2028||2026-07-01
Wiktor Koptas|GK|22|25|POL|2027||2020-07-02
Cezary Wołowiec|GK|18|500|POL|2028||2026-07-16
Steve Kingue|CB|26|600|CMR|2027||2025-01-23
Adrián Diéguez|CB|30|350|ESP|2027||<2025-08-07
Kryspin Szcześniak|CB|25|300|POL|2027||<2026-07-18
Filip Koperski|CB|22|200|POL|2028||2026-07-09
Mateusz Cichocki|CB|34|100|POL|2027||2019-07-01
Szymon Kilianek|CB|20|500|POL|2027||2025-03-11
Conrado|LB|29|400|BRA|2028|ITA|2026-07-07
Oskar Markiewicz|LB|26|25|POL|2027||2026-02-27
Zié Ouattara|RB|26|1200|CIV|2028||2024-07-01
Jan Grzesik|RB|32|350|POL|2027||2023-07-01
Romário Baró|DM|26|350|POR|2028|GNB|2025-08-22
Ibrahima Camará|DM|27|300|GUI|2027||2025-07-13
Christos Donis|DM|32|300|GRE|2027||2023-01-24
Adam Żabicki|DM|20|25|POL|2027||2026-01-28
Luquinhas|AM|30|800|BRA|2027|POR|2026-01-26
Roberto Alves|AM|29|400|SUI|2027|POR|2022-07-01
Rafał Wolski|AM|33|250|POL|2028||<2023-07-01
Kacper Karasek|AM|24|200|POL|2028||<2026-07-01
Anastasios Donis|LW|30|500|GRE|2027|ENG|2026-09-09
Ronaldo Lumungo|RW|25|450|STP|2029||2026-07-27
Ché Nunnely|RW|27|400|SUR|2028|NED|2026-07-14
Elves Baldé|RW|27|350|GNB|2027|POR|2025-08-12
Manu|RW|20|50|ANG|2029||2026-07-01
Nikolas Dohojda|RW|21|500|POL|2027||2026-07-22
Guilherme Luiz|ST|21|1500|BRA|2027||2026-08-26
Abdoul Tapsoba|ST|25|400|BFA|2027||2025-01-29
Fernand Goure|ST|24|300|CIV|2029||2026-07-01
Ruan Índio|ST|20|500|BRA|2027||2026-09-09` },
    { id: 'korona', name: 'Корона', city: 'Кельце', stadium: 'EXBUD Arena', cap: 15550, colors: ['#ffd700', '#e30613'], players: `
Xavier Dziekoński|GK|23|2000|POL|2027||<2024-07-01
Rafał Mamla|GK|22|300|POL|2028||2022-08-01
Michał Mikielewicz|GK|18|500|POL|2027||2025-01-30
Franciszek Panek|GK|17|500|POL|2027||2026-07-31
Ariel Mosór|CB|23|800|POL|2030||<2026-07-05
Slobodan Rubežić|CB|26|700|MNE|2028|SRB|2025-08-20
Konstantinos Sotiriou|CB|30|450|CYP|2027||2025-01-28
Bartłomiej Smolarczyk|CB|23|300|POL|2027||2024-07-24
Igor Chmielewski|CB|19|500|POL|2027||2026-07-17
Marcel Pięczek|LB|25|550|POL|2028||2024-01-01
Konrad Matuszewski|LB|25|300|POL|2028||2024-07-01
Konrad Ciszek|LB|19|300|POL|2029||2025-01-30
Wiktor Długosz|RB|26|1000|POL|2028||<2024-07-01
Hubert Zwoźny|RB|22|300|POL|2028||2024-07-01
Norbert Barczak|RB|21|300|POL|2029||<2026-07-14
Patrik Hellebrand|DM|27|3500|CZE|2029||<2026-07-01
Kamil Jakubczyk|DM|22|1500|POL|2030||2026-07-04
Nono|DM|35|150|ESP|2027||2023-01-01
Martin Remacle|AM|29|600|BEL|2028||2023-07-07
Simon Gustafson|AM|31|400|SWE|2027||2026-01-26
Kacper Minuczyc|AM|18|50|POL|2028||2025-07-07
Kornel Toboła|AM|20|500|POL|2027||2026-07-17
Michael Ameyaw|LW|26|1500|POL|2029|GHA|<2026-09-04
Morgan Faßbender|LW|28|500|GER|2028|GHA|2026-07-23
Camilo Mena|RW|24|4000|COL|2027||2026-09-09
Ondrej Lingr|RW|28|3000|CZE|2029||2026-08-27
Stjepan Davidovic|RW|21|500|CRO|2029||2025-07-11
Dawid Błanik|RW|29|450|POL|2028||2021-09-01
Mariusz Stępiński|ST|31|500|POL|2028||2026-01-26
Daniel Bąk|ST|21|350|POL|2028||2023-10-20` },
    { id: 'motor', name: 'Мотор', city: 'Люблин', stadium: 'Motor Lublin Arena', cap: 15247, colors: ['#ffd700', '#0055a4'], players: `
Mihai Popa|GK|26|700|ROU|2028||2026-07-01
Gasper Tratnik|GK|26|250|SVN|2027||2025-01-23
Patryk Kukulski|GK|22|500|POL|2027||2025-07-15
Borys Mołdach|GK|17|500|POL|||2026-05-08
Tin Plavotic|CB|29|600|CRO|2028|AUT|2026-07-24
Marek Bartos|CB|30|500|SVK|2027||2024-07-01
Bartosz Bereszyński|CB|34|300|POL|2028||2026-07-03
Paskal Meyer|CB|21|250|POL|2027|GER|2025-07-11
Артём Акатов|CB|19|500|BLR|2028||2026-02-12
Filip Luberecki|LB|21|2500|POL|2028||2023-01-13
Thomas Santos|RB|28|600|DEN|2027|BRA|2026-02-17
Kamil Lukoszek|RB|24|450|POL|2027||<2026-08-04
Mateusz Łęgowski|DM|23|1500|POL|2028||2026-07-04
Yacine Bourhane|DM|28|450|COM|2028|FRA|2026-07-14
Alioune Oumar Tall|DM|19|125|SEN|2029||2026-09-07
Marcel Złomańczuk|DM|21|500|POL|2028||2026-07-06
Ivo Rodrigues|AM|31|600|POR|2027||2025-07-10
Christopher Simon|AM|26|300|SEN|2027||2024-07-14
Fábio Ronaldo|LW|25|1500|POR|2027||2025-09-08
Makan Aïko|LW|25|700|FRA|2028|CIV|2026-07-07
Mbaye Ndiaye|RW|23|3000|SEN|2028||2024-01-28
Rony Lopes|RW|30|900|POR|2028|BRA|2026-09-01
Florian Haxha|RW|24|200|KVX|2027|GER|2025-07-01
Karol Czubak|ST|26|2500|POL|2027||2025-07-01
Dominik Gregorski|ST|20|50|POL|2029||2026-07-11
Mateusz Posmyk|ST|17|500|POL|2029||2026-09-05` },
    { id: 'cracovia', name: 'Краковия', city: 'Краков', stadium: 'Stadion Cracovii', cap: 15016, colors: ['#e30613', '#ffffff'], players: `
Sebastian Madejski|GK|29|450|POL|2028||<2022-09-09
Aleksander Bobek|GK|22|300|POL|2029||2026-09-15
Konrad Cymerys|GK|18|500|POL|2028||2026-07-15
Jakub Chrapusta|GK|17|500|POL|2028||2026-07-22
Brahim Traoré|CB|22|1000|FRA|2029|BFA|2025-08-31
Gustav Henriksson|CB|28|700|SWE|2027||2025-02-07
Dominik Baumgartner|CB|30|400|AUT|2028||2026-07-01
Kamil Glik|CB|38|50|POL|2027|GER|2023-08-30
Mauro Perkovic|LB|23|3000|CRO|2029||2026-01-11
Vincent Burlet|LB|21|600|BEL|2030||2026-07-15
Jakub Wilczek|LB|19|500|POL|2028||2026-07-23
Отар Какабадзе|RB|31|800|GEO|2027||2021-07-01
Dominik Piła|RB|25|400|POL|2028||2025-07-01
Amir Al-Ammari|DM|29|800|IRQ|2028|SWE|2024-07-17
Beno Selan|DM|21|400|SVN|2029||2026-01-26
Karol Knap|DM|25|200|POL|2028||2021-07-01
Mateusz Klich|DM|36|200|POL|2027||2025-08-13
Wiktor Dej|DM|18|500|POL|2029||2026-07-14
Filip Marchwiński|AM|24|1500|POL|2027||2026-07-18
Dijon Kameri|AM|22|700|AUT|2028||2025-07-21
Mateusz Praszelik|AM|26|300|POL|2028||2025-07-09
Mateusz Skoczylas|AM|20|200|POL|2028||2025-09-08
Mateusz Tabisz|AM|18|150|POL|2029||2026-01-28
Alex Marciniak|AM|18|500|WAL|2029|POL|2026-07-18
Sayfallah Ltaief|LW|26|1000|TUN|2028|SUI|2026-08-20
Martin Minchev|LW|25|700|BUL|2028||2025-02-19
Ajdin Hasic|RW|25|3000|BIH|2028||2024-08-01
Lasse Nordås|ST|24|3500|NOR|2027||2026-09-04
Wiktor Bogacz|ST|22|1500|POL|2027||2026-02-10
Mohamed Berte|ST|24|500|BEL|2029|CIV|2026-08-19
Kahveh Zahiroleslam|ST|24|300|USA|2027|IRN|2025-07-31
Kacper Śmiglewski|ST|21|150|POL|2027||2023-01-25
Siem Eyob-Abraha|ST|18|500|ERI|2028|ENG|2026-09-03` },
    { id: 'widzew', name: 'Видзев', city: 'Лодзь', stadium: 'Stadion Miejski Widzewa Łódź', cap: 18018, colors: ['#e30613', '#ffffff'], players: `
Bartłomiej Drągowski|GK|29|1500|POL|2029||2026-01-26
Veljko Ilić|GK|23|750|SRB|2029||2025-09-02
Jan Krzywański|GK|23|500|POL|2027||2023-07-01
Franciszek Golański|GK|16|500|POL|||2026-10-16
Steve Kapuadi|CB|28|2500|COD|2030|FRA|<2026-02-25
Przemysław Wiśniewski|CB|28|2500|POL|2031||2026-01-29
Mateusz Żyro|CB|27|500|POL|2028||2022-07-01
Ricardo Visus|CB|25|400|ESP|2029||2025-07-02
Mario García|LB|23|1500|ESP|2029||2026-07-10
Christopher Cheng|LB|24|1000|NOR|2029||2026-01-26
Jusuf Gazibegovic|RB|26|2000|BIH|2027||2026-07-26
Marcel Krajewski|RB|22|1000|POL|2027||2024-07-01
Carlos Isaac|RB|28|600|ESP|2028||2026-01-26
Juljan Shehu|DM|28|3000|ALB|2028||2022-07-01
Dani Silva|DM|26|2000|POR|2027||2026-09-01
Giannis Papanikolaou|DM|27|1200|GRE|2028||2026-07-26
Lindon Selahi|DM|27|800|ALB|2028|BEL|2025-07-01
Lukas Lerager|DM|33|400|DEN|2028||2026-01-26
Szymon Czyż|DM|25|300|POL|2027||<2025-02-24
Emil Kornvig|AM|26|2500|DEN|2029||2026-01-26
Fran Álvarez|AM|28|1500|ESP|2028||2023-07-01
Stipe Biuk|LW|23|2000|CRO|2029||2026-08-21
Paulinho Bóia|LW|28|1200|BRA|2028||2026-08-03
Mariusz Fornalczyk|LW|23|900|POL|2029||<2025-07-01
Darian Males|RW|25|1200|SUI|2029||2026-08-24
Antoni Klukowski|RW|19|250|CAN|2028|POL|2025-07-01
Karol Świderski|ST|29|2500|POL|2029||2026-07-01
Sebastian Bergier|ST|26|1500|POL|2029||<2025-07-01
Ioan Vermeșan|ST|20|1000|ROU|||2026-09-09` },
    { id: 'piast', name: 'Пяст', city: 'Гливице', stadium: 'Stadion Miejski', cap: 9913, colors: ['#0055a4', '#e30613'], players: `
Domen Gril|GK|25|1000|SVN|2029||2026-07-01
Frantisek Plach|GK|34|150|SVK|2027||2018-01-10
Marcel Mendes-Dudziński|GK|21|50|POL|2029|BRA|<2026-07-11
Jakub Grelich|GK|18|500|POL|2029||2026-02-02
Francisco Sierralta|CB|29|1200|CHI|2027|ESP|2026-09-09
Juande Rivas|CB|27|850|ESP|2027||2025-07-20
Jakub Czerwiński|CB|35|200|POL|2028||<2018-07-01
Levis Pitan|CB|21|200|POL|2027|ENG|2024-08-07
Jakub Lewicki|LB|21|1000|POL|2027||<2024-09-06
Elton Fikaj|LB|21|300|ALB|2028|GRE|2026-01-27
Ema Twumasi|RB|29|450|GHA|2027|USA|2025-07-01
Filip Borowski|RB|23|150|POL|2027||2025-07-10
Jakub Łabojko|DM|29|350|POL|2028||<2026-07-01
Quentin Boisgard|AM|29|400|FRA|2027||2025-07-01
Oskar Leśniak|AM|22|350|POL|2027||2022-07-01
Szczepan Mucha|AM|22|150|POL|2027||2023-01-01
Oliwier Maziarz|AM|20|100|POL|2028||2026-02-02
Hugo Vallejo|LW|26|700|ESP|2028||2025-08-13
Ivan Lima|LW|21|600|POR|2029|STP|2026-02-10
Jorge Félix|LW|35|100|ESP|2027||2022-08-02
Leandro Sanca|RW|26|750|GNB|2027|POR|2025-07-18
Jason Lokilo|RW|28|400|COD|2027|BEL|2025-08-27
Samuel Ntamack|ST|25|500|FRA|2028|CMR|2026-07-01
Andreas Katsantonis|ST|26|350|CYP|2027||2024-09-05
Maciej Kucharski|ST|17|100|POL|2029||2026-07-01` },
    { id: 'wisla', name: 'Висла Краков', city: 'Краков', stadium: 'Stadion im. Henryka Reymana', cap: 33268, colors: ['#e30613', '#ffffff'], players: `
Marcel Lubik|GK|22|1500|POL|2027|GER|2026-07-01
Patryk Letkiewicz|GK|21|350|POL|2028||2023-07-15
Jakub Stępak|GK|20|500|POL|2027||2024-02-16
Bartosz Neugebauer|GK|24|500|POL|2027||2026-08-31
Darijo Grujcic|CB|27|450|AUT|2027||2025-07-02
Maxence Maisonneuve|CB|27|400|FRA|2028||2026-07-01
Mariusz Kutwa|CB|22|300|POL|2027||2023-07-15
Wiktor Biedrzycki|CB|29|250|POL|2027||2024-07-20
Alan Uryga|CB|32|200|POL|2027||<2021-07-01
Jakub Krzyzanowski|LB|20|2500|POL|2030||2022-09-08
Rafał Mikulec|LB|29|200|POL|2027||2024-07-01
Raoul Giger|RB|28|550|SUI|2029||2025-08-12
Julian Lelieveld|RB|28|450|NED|2027||2025-07-01
Bartosz Jaroch|RB|31|150|POL|2027||2022-07-01
Kacper Duda|DM|22|1500|POL|2027||2020-06-06
James Igbekeme|DM|31|300|NGA|2027||2024-08-20
Marc Carbó|DM|32|175|ESP|2027||2023-08-03
Максым Цымбалюк|DM|19|500|UKR|2027||2026-07-16
Víctor Meseguer|AM|27|1200|ESP|2028||2026-08-29
Julius Ertlthaler|AM|29|400|AUT|2029||2025-07-01
Élie Youan|LW|27|1200|FRA|2029|CIV|2026-07-10
Marko Bozic|LW|28|500|AUT|2027||2025-08-23
Frederico Duarte|LW|27|450|POR|2029||2024-07-24
Maciej Kuziemka|RW|20|1200|POL|2028||2024-10-21
Oliwier Pławiński|RW|17|500|POL|2028||2026-07-13
Ángel Rodado|ST|29|1500|ESP|2030||2022-08-20
Jérémy Guillemenot|ST|28|300|SUI|2028||2026-07-15
Karol Tokarczyk|ST|21|500|POL|2027||2026-07-13` },
    { id: 'slask', name: 'Шлёнск', city: 'Вроцлав', stadium: 'Tarczyński Arena', cap: 42771, colors: ['#00a650', '#ffffff'], players: `
Karol Niemczycki|GK|27|300|POL|2028||2026-07-01
Michał Szromnik|GK|33|100|POL|2027||<2025-07-01
Hubert Śliczniak|GK|19|500|POL|2027||2024-07-18
Dominik Klint|GK|17|500|POL|2027||2025-07-17
Егор Маценко|CB|24|500|UKR|2027||2022-07-12
Irodotos Christodoulou|CB|24|400|CYP|2028||2026-07-04
Dominik Szala|CB|20|350|POL|2027||<2026-07-02
Lamine Ba|CB|29|300|MTN|2027|FRA|2026-01-27
Mariusz Malec|CB|31|200|POL|2027||<2025-07-01
Marko Dijakovic|CB|24|150|AUT|||2025-07-01
Adrian Żulewski|CB|19|500|POL|2027||2026-07-21
Karol Linetty|DM|31|800|POL|2028||2026-08-30
Eniss Shabani|DM|23|500|ALB|2028|GER|2026-07-01
Michał Mokrzycki|DM|28|350|POL|2029||2026-01-26
Jorge Yriarte|DM|26|350|VEN|2027|ESP|2025-07-12
Dorian Markowski|DM|18|150|POL|2028||2026-02-06
Patryk Sokołowski|DM|32|100|POL|2027||<2025-07-07
Przemyslaw Mazan|DM|16|500|POL|2027||2026-04-30
Jan Jurcec|RW|25|1000|CRO|2029|POL|2026-09-05
Alex Timossi Andersson|RW|25|500|SWE|2028||2026-07-07
Marc Llinares|LW|27|350|ESP|2028||2025-01-23
Piotr Samiec-Talar|AM|24|1200|POL|2027||2018-07-18
Karol Borys|AM|20|600|POL|2029||2026-09-09
Adam Ciućka|AM|18|500|POL|2028||2025-07-17
Grzegorz Tomasiewicz|AM|30|300|POL|2028||<2026-07-01
Ieltsin Camões|ST|27|800|CPV|2027|POR|2026-09-04
Malaly Dembélé|ST|29|500|FRA|2028|MLI|2026-07-01
Luka Marjanac|ST|23|400|BIH|2027|SUI|2025-07-01
Przemysław Banaszak|ST|29|300|POL|2027||2025-07-16
Maksymilian Stangret|ST|21|500|POL|||2026-08-14` },
    { id: 'wieczysta', name: 'Вечиста', city: 'Краков', stadium: 'Stadion im. Henryka Reymana', cap: 33268, colors: ['#ffd700', '#000000'], players: `
Mateusz Kochalski|GK|26|2500|POL|2029||2026-09-08
Nikola Cavlina|GK|24|600|CRO|2027||2026-07-13
Antoni Mikułko|GK|21|400|POL|2028||2024-07-01
Mateusz Wieteska|CB|29|700|POL|2027||2026-07-31
Duje Dujmovic|CB|22|600|CRO|2028||2026-07-01
Aleksandar Djermanovic|CB|24|400|SRB|2028||2026-02-02
Antonio Milic|CB|32|350|CRO|2028||<2026-07-14
Kacper Zagrodzki|CB|21|500|POL|2027||2025-08-06
Matus Vojtko|LB|26|400|SVK|2028||2026-07-01
Kamil Pestka|LB|28|350|POL|2027||<2025-07-01
Karol Fila|RB|28|300|POL|2027||2025-07-12
Kamil Dankowski|RB|30|200|POL|2027||2025-07-01
Mikkel Maigaard|DM|31|500|DEN|2027||<2026-01-26
Ben Lederman|DM|26|300|POL|2028|ISR|2026-07-01
Nikola Knezevic|DM|23|300|SRB|2028|CRO|2026-01-26
Tobias Christensen|AM|26|2000|NOR|2028||2026-07-01
Lucas Piazón|AM|32|250|BRA|2027|ITA|2025-08-20
Petar Pusic|AM|27|250|SUI|2027|CRO|2025-09-03
Christopher Lungoyi|LW|26|700|SUI|2028|COD|2026-07-01
Tobiasz Mras|LW|19|100|POL|2027||<2025-08-11
José Antonio de la Rosa|RW|22|1000|ESP|2028||2026-09-05
Lisandro Semedo|RW|30|300|CPV|2027|POR|<2024-07-01
Miki Villar|RW|30|300|ESP|2027||<2025-09-08
Efthymios Koulouris|ST|30|2000|GRE|2028||2026-08-20
Stefan Feiertag|ST|24|450|AUT|2028||2025-08-14
Bartosz Bialek|ST|24|400|POL|2027||2026-08-11` },
  ],
});
