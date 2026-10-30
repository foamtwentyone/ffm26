// Экстракласа 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'pol', name: 'Экстракласа', short: 'Экстракласа', country: 'POL', tier: 1, weekday: 5,
  autumn: { from: '07-18', rounds: 17 }, spring: { from: '01-30', rounds: 17 },
  ticket: 10, prize: [6000, 5750, 5450, 5200, 4950, 4700, 4400, 4150, 3900, 3600, 3350, 3100, 2800, 2550, 2300, 2050, 1750, 1500],
  teams: [
    { id: 'lech', name: 'Лех', city: 'Познань', stadium: 'Enea Stadion', cap: 43269, colors: ['#0055a4', '#ffffff'], players: `
Mateusz Lis|GK|29|1500|POL|2029
Mateusz Pruchniewski|GK|19|200|POL|2030
Aleks Olsztyn|GK|16|500|POL|2028
Wiktor Obremski|GK|18|500|POL|2029
Wojciech Mońka|CB|19|10000|POL|2030
Terry Yegbe|CB|25|3000|GHA|2030
Alex Douglas|CB|25|600|SWE|2027
Mateusz Skrzypczak|CB|26|600|POL|2029
Hubert Janyszka|CB|17|50|POL|2029
Michal Gurgul|LB|20|7000|POL|2028
João Moutinho|LB|28|450|POR|2027
Piotr Bartczak|LB|17|500|POL|2027
Joel Pereira|RB|30|2000|POR|2027
Robert Gumny|RB|28|800|POL|2027
Antoni Kozubal|DM|22|6000|POL|2028
Gustav Berggren|DM|29|1500|SWE|2029
Radosław Murawski|DM|32|300|POL|2028
Pablo Rodríguez|AM|25|3500|ESP|2029
Filip Jagiełło|AM|29|700|POL|2027
Karol Delikat|AM|18|300|POL|2029
Luis Palma|LW|26|4000|HON|2029
Daniel Håkans|LW|25|1500|FIN|2028
Leo Bengtsson|LW|28|1500|SWE|2028
Eryk Śledziński|LW|18|500|POL|2029
Patrik Walemark|RW|25|5000|SWE|2029
Allahyar Sayyadmanesh|RW|25|3500|IRN|2029
Ali Gholizadeh|RW|30|1500|IRN|2027
Yannick Agnero|ST|23|1500|CIV|2030
Mikael Ishak|ST|33|500|SWE|2027` },
    { id: 'gornik', name: 'Гурник Забже', city: 'Забже', stadium: 'Arena Zabrze', cap: 31871, colors: ['#0055a4', '#e30613'], players: `
Philipp Schulze|GK|23|600|GER|2029
Tomasz Loska|GK|30|250|POL|2028
Piotr Pietryga|GK|23|500|POL|2027
Wiktor Kania|GK|17|500|POL|2029
Josema|CB|30|800|ESP|2028
Pawel Bochniewicz|CB|30|400|POL|2029
Rafał Janicki|CB|34|300|POL|2027
Ondrej Zmrzly|LB|27|1200|CZE|2029
Erik Janza|LB|33|400|SVN|2027
Michal Sacek|RB|30|800|CZE|2028
Patryk Warczak|RB|23|350|POL|2029
Malthe Højholt|DM|25|1200|DEN|2029
Maximilian Dietz|DM|24|1000|USA|2029
Jarosław Kubicki|DM|31|600|POL|2028
Bastien Donio|DM|21|300|FRA|2028
Paulo Bernardo|CM|24|3500|POR|2027
Kacper Urbański|AM|22|3000|POL|2028
Lukas Sadilek|AM|30|1000|CZE|2029
Marcel Kalemba|AM|21|150|POL|2028
Ksawery Semik|AM|18|500|POL|2029
Максым Хлан|LW|23|5000|UKR|2027
Zeidane Inoussa|LW|24|4500|SWE|2027
Peter Federico|RW|24|2000|DOM|2029
Bruno Durdov|RW|18|2000|CRO|2029
Yvan Ikia Dimi|RW|22|800|CGO|2029
Janis Antiste|ST|24|1000|MTQ|2027
Erik Prekop|ST|29|700|SVK|2029
Sondre Liseth|ST|29|600|NOR|2027` },
    { id: 'jagiellonia', name: 'Ягеллония', city: 'Белосток', stadium: 'Chorten Arena', cap: 22372, colors: ['#ffd700', '#e30613'], players: `
Slawomir Abramowicz|GK|22|5000|POL|2028
Michał Perchel|GK|19|350|POL|2029
Adrian Damasiewicz|GK|18|500|POL|2028
Jakub Rabiczko|GK|18|500|POL|2027
Bernardo Vital|CB|25|3000|POR|2027
Apostolos Konstantopoulos|CB|24|800|GRE|2027
Yuki Kobayashi|CB|26|700|JPN|2028
Dusan Stojinovic|CB|26|500|SVN|2027
Bartłomiej Krasiewicz|CB|20|500|POL|2027
Olaf Pankiewicz|CB|19|500|POL|2027
Bartlomiej Wdowik|LB|26|1500|POL|2027
Guilherme Montóia|LB|23|750|POR|2029
Cezary Polak|LB|23|250|POL|2027
Norbert Wojtuszek|RB|25|2500|POL|2027
Rodrigo Conceição|RB|26|500|POR|2028
Szymon Pankiewicz|RB|25|500|POL
Maciej Kuczyński|RB|19|500|POL|2027
Anders Klynge|DM|26|1200|DEN|2029
Eryk Kozłowski|DM|20|1000|POL|2027
Hampus Finndell|DM|26|650|SWE|2029
Taras Romanczuk|DM|34|200|POL|2028
Sergio Lozano|AM|27|1500|ESP|2027
Dawid Drachal|AM|21|350|POL|2028
Jesús Imaz|AM|36|300|ESP|2028
Jakub Kucharski|AM|17|300|POL|2029
Aleksandar Cirkovic|LW|25|2000|SRB|2027
Kajetan Szmyt|LW|24|1200|POL|2029
Kamil Jóźwiak|LW|28|300|POL|2027
Jeremy Agbonifo|RW|21|4000|SWE|2027
Ousmane Sow|RW|26|2200|FRA|2027
Zachary Zalewski|RW|17|200|POL|2028
Paweł Pakieła|RW|19|500|POL
Nik Prelec|ST|25|1500|SVN|2029
Dimitris Rallis|ST|21|400|GRE|2028
Youssuf Sylla|ST|23|300|BEL|2028
Максим Кононов|ST|20|500|BLR|2028` },
    { id: 'rakow', name: 'Ракув', city: 'Ченстохова', stadium: 'Miejski Stadion Piłkarski Raków', cap: 5500, colors: ['#e30613', '#0055a4'], players: `
Kacper Trelowski|GK|23|2000|POL|2029
Tarik Karic|GK|21|500|BIH|2030
Wiktor Żołneczko|GK|17|50|POL|2029
Nils Zätterström|CB|21|3500|SWE|2027
Stratos Svarnas|CB|28|2000|GRE|2027
Bogdan Racovițan|CB|26|2000|ROU|2028
Arvid Brorsson|CB|27|400|SWE|2029
Dieudonné Gaucho Debohi|CB|25|400|UGA|2028
Jerzy Napieraj|CB|21|50|POL|2029
Nikodem Całko|CB|17|500|POL|2029
Marko Bulat|DM|25|2500|CRO|2030
Oskar Repka|DM|27|1500|POL|2030
Владыслав Кочергин|DM|30|1000|UKR|2027
Karol Struski|DM|25|1000|POL|2029
Abraham Ojo|DM|19|250|NGA|2031
Fran Tudor|RW|31|900|CRO|2027
Jakub Jendryka|RW|19|350|POL|2030
Adriano|LW|24|1000|BRA|2028
Jean Carlos Silva|LW|30|700|ESP|2028
Marko Perovic|LW|20|600|MNE|2030
Erick Otieno|LW|30|450|KEN|2027
Lamine Diaby-Fadiga|AM|25|3000|GUI|2028
Tomasz Pieńko|AM|22|1500|POL|2030
Adam Basse|AM|18|1000|POL|2027
Patryk Makuch|AM|27|800|POL|2028
Bogdan Mirčetić|AM|20|800|SRB|2030
Ádin Molnár|AM|22|800|HUN|2030
Oliwier Kwiatkowski|AM|21|400|POL|2031
Махир Емрели|ST|29|700|AZE|2027
Isak Brusberg|ST|20|500|SWE|2030` },
    { id: 'katowice', name: 'ГКС Катовице', city: 'Катовице', stadium: 'Arena Katowice', cap: 15048, colors: ['#ffd700', '#00a650'], players: `
Rafał Strączek|GK|27|600|POL|2029
Gabriel Kobylak|GK|24|350|POL|2028
Maciej Kikolski|GK|22|300|POL|2027
Wojciech Monica|GK|16|500|POL
Wojciech Pańkowski|GK|18|500|POL|2028
Pau Resta|CB|25|1500|ESP|2030
Marius Olsen|CB|25|450|NOR|2028
Lukas Klemenz|CB|31|350|POL|2028
Aleksander Paluszek|CB|25|250|POL|2027
Arkadiusz Jędrych|CB|34|200|POL|2028
Alan Czerwiński|CB|33|200|POL|2028
Mateusz Kowalczyk|DM|22|1500|POL|2028
Bartosz Wolski|DM|29|500|POL|2029
Jesse Bosch|DM|26|400|NED|2028
Sebastian Milewski|DM|28|350|POL|2029
Damian Rasak|DM|30|350|POL|2027
Kacper Łukasiak|DM|23|300|POL|2027
Erik Jirka|RW|29|500|SVK|2028
Marcin Wasielewski|RW|32|250|POL|2028
Mateusz Wdowiak|LW|30|350|POL|2027
Borja Galán|LW|33|250|ESP|2028
Eman Marković|AM|27|800|NOR|2028
Bartosz Nowak|AM|33|450|POL|2029
Szymon Bartlewicz|AM|20|350|POL|2029
Marcel Wędrychowski|AM|24|250|POL|2028
Илья Шкурин|ST|27|1000|BLR|2028
Adam Zrelak|ST|32|250|SVK|2027
Jakub Kokosiński|ST|19|75|POL|2027` },
    { id: 'legia', name: 'Легия', city: 'Варшава', stadium: 'Stadion Wojska Polskiego', cap: 31103, colors: ['#00a650', '#ffffff'], players: `
Otto Hindrich|GK|24|3500|ROU|2030
Ivan Brkic|GK|31|350|CRO|2029
Jan Bienduga|GK|18|500|POL|2029
Kamil Piątkowski|CB|26|2500|POL|2029
Robert Deziel Jr.|CB|21|1000|USA|2030
Rafał Augustyniak|CB|33|350|POL|2027
Zoran Arsenic|CB|32|300|CRO|2028
Mateusz Lauryn|CB|18|500|POL|2027
Bartosz Korżynski|CB|17|500|POL|2027
Damian Szymański|DM|31|450|POL|2029
Henrique Arreiol|DM|21|400|POR|2029
Filip Przybyłko|DM|18|500|POL|2027
Shinnosuke Fukuda|RW|26|750|JPN|2027
Kacper Chodyna|RW|27|300|POL|2028
Paweł Wszołek|RW|34|200|POL|2027
Rúben Vinagre|LW|27|1500|POR|2028
Arkadiusz Reca|LW|31|350|POL|2028
Эрик Миканович|LW|19|500|BLR|2030
Wojciech Urbański|AM|21|1000|POL|2029
Samuel Kovacik|AM|19|1000|SVK|2029
Mateusz Szczepaniak|AM|19|800|POL|2027
Michal Sevcik|AM|24|800|CZE|2027
Bartosz Kapustka|AM|29|800|POL|2028
Jakub Żewłakow|AM|19|700|POL|2030
Вахан Бичахчян|AM|27|600|ARM|2028
Богдан Виуннык|AM|24|500|UKR|2027
Franciszek Stępniewski|AM|16|500|POL
Jan Kuchta|ST|29|2700|CZE|2027
Rafał Adamski|ST|24|1000|POL|2029
Łukasz Zjawiński|ST|25|600|POL|2030
Antonio Colak|ST|33|200|CRO|2027` },
    { id: 'zaglebie', name: 'Заглембе', city: 'Любин', stadium: 'KGHM Zagłębie Arena', cap: 16068, colors: ['#ff6600', '#00a650'], players: `
Zlatan Alomerovic|GK|35|225|SRB|2028
Dominik Hladun|GK|31|200|POL|2027
Jasmin Buric|GK|39|25|BIH|2027
Franciszek Nowak|GK|17|500|POL
Роман Якуба|CB|25|800|UKR|2027
Aleks Lawniczak|CB|27|600|POL|2027
Damian Michalski|CB|28|500|POL|2027
Michal Nalepa|CB|33|200|POL|2027
Maciej Urbański|CB|19|500|POL|2027
Filip Kocaba|DM|21|1500|POL|2029
Mateusz Dziewiatowski|DM|19|700|POL|2029
Jakub Kolan|DM|22|600|POL|2029
Damian Dabrowski|DM|34|250|POL|2027
Patryk Dziekoński|DM|17|500|POL
Igor Orlikowski|RW|20|800|POL|2028
Szymon Lyczko|RW|20|400|POL|2028
Mateusz Grzybek|RW|30|350|POL|2027
Josip Corluka|RW|31|350|BIH|2027
Arkadiusz Woźniak|RW|36|25|POL|2027
David Colina|LW|26|650|CRO|2028
Marcel Reguła|AM|19|7000|POL|2028
Jakub Sypek|AM|25|350|POL|2027
Sebastian Kerk|AM|32|350|GER|2028
Kamil Nowogoński|AM|19|350|POL|2027
Cyprian Popielec|AM|19|250|POL|2027
Jakub Ligocki|AM|18|75|POL|2028
Seweryn Marek|AM|18|500|POL|2028
Levente Szabó|ST|27|500|HUN|2027
Filip Szymczak|ST|24|500|POL|2029
Michalis Kosidis|ST|24|300|GRE|2027
Mihael Mlinaric|ST|26|300|CRO|2028
Paweł Kosmalski|ST|20|500|POL|2029` },
    { id: 'wisla_plock', name: 'Висла Плоцк', city: 'Плоцк', stadium: 'Orlen Stadion', cap: 15004, colors: ['#0055a4', '#ffffff'], players: `
Rafał Leszczyński|GK|34|250|POL|2027
Jakub Burek|GK|23|100|POL|2028
Szymon Wadas|GK|19|500|POL|2027
Afonso Silva|CB|22|800|POR|2028
Marcus Haglind-Sangré|CB|31|350|SWE|2029
Marcin Kamiński|CB|34|250|POL|2027
Przemysław Misiak|CB|23|175|POL|2028
Marcin Flis|CB|32|100|POL|2028
Матвей Бохно|CB|19|50|BLR|2028
Marcin Więckowski|CB|22|500|POL|2027
Sidnei Tavares|DM|25|1800|CPV|2027
Jurica Prsir|DM|26|1000|CRO|2029
Kyriakos Savvidis|DM|31|250|GRE|2027
Krystian Pomorski|DM|30|150|POL|2027
Dani Pacheco|DM|35|150|ESP|2027
Zan Rogelj|RW|26|900|SVN|2029
Michał Król|RW|26|200|POL|2029
Fabian Hiszpański|RW|32|75|POL|2027
Dion Gallapeni|LW|21|4000|KVX|2029
Глеб Кучко|LW|21|500|BLR|2027
Patryk Kun|LW|31|300|POL|2028
Nikodem Rogowski|LW|17|25|POL|2027
Olaf Kobacki|AM|25|400|POL|2028
Jorge Jiménez|AM|27|400|ESP|2028
Adam Radwański|AM|28|400|POL|2027
Samuel Akere|RW|22|1000|NGA|2027
Said Hamulic|ST|25|400|BIH|2027
Deni Jurić|ST|29|300|AUS|2028
Łukasz Sekulski|ST|35|100|POL|2027
Kacper Błaszkiewicz|ST|20|500|POL|2028
Marcin Kościelecki|ST|20|500|POL|2029` },
    { id: 'pogon', name: 'Погонь', city: 'Щецин', stadium: 'Stadion im. Floriana Krygiera', cap: 21163, colors: ['#1d3c8f', '#800020'], players: `
Valentin Cojocaru|GK|31|700|ROU|2027
Nikolaos Botis|GK|22|350|GRE|2029
Kevin Dąbrowski|GK|28|225|POL|2028
Alex Peškovič|GK|17|500|SVK|2027
Hubert Renka|GK|17|500|POL|2028
Antoni Fojut|GK|16|500|POL|2027
Dimitrios Keramitsis|CB|22|4000|GRE|2029
Attila Szalai|CB|28|1500|HUN|2029
Lukas Willen|CB|23|600|BEL|2029
Alessandro Riccio|CB|24|350|ITA|2028
Andrzej Ossowski|CB|17|500|POL|2029
Benjamin Mendy|LB|32|400|FRA|2027
Linus Wahlqvist|RB|29|800|SWE|2028
Hussein Ali|RB|24|400|IRQ|2028
Isaiah Eichie|RB|19|500|GER|2029
Patryk Dziczek|DM|28|700|POL|2029
Kellyn Acosta|DM|31|600|USA|2027
Jan Biegański|DM|23|400|POL|2027
Mor Ndiaye|DM|25|300|SEN|2027
Natan Ława|AM|17|1000|POL|2029
Maciej Wojciechowski|AM|19|500|POL|2027
José Pozo|AM|30|300|ESP|2027
Darko Churlinov|LW|26|1500|MKD|2028
Paul Mukairu|LW|26|1200|NGA|2027
Kamil Grosicki|LW|38|150|POL|2027
Jacek Czapliński|LW|20|100|POL|2028
Musa Juwara|RW|24|400|GAM|2028
Rajmund Molnár|ST|24|1000|HUN|2028
Filip Cuic|ST|23|700|BIH|2029
Jordi Sánchez|ST|31|400|ESP|2028
Jean-Pierre Nsame|ST|33|250|CMR|2027
Patryk Paryzek|ST|20|250|POL|2027` },
    { id: 'radomiak', name: 'Радомяк', city: 'Радом', stadium: 'Stadion Radomiaka', cap: 14440, colors: ['#00a650', '#ffffff'], players: `
Filip Majchrowicz|GK|26|600|POL|2028
Bartłomiej Gradecki|GK|26|200|POL|2028
Wiktor Koptas|GK|22|25|POL|2027
Cezary Wołowiec|GK|18|500|POL|2028
Steve Kingue|CB|26|600|CMR|2027
Adrián Diéguez|CB|30|350|ESP|2027
Kryspin Szcześniak|CB|25|300|POL|2027
Filip Koperski|CB|22|200|POL|2028
Mateusz Cichocki|CB|34|100|POL|2027
Szymon Kilianek|CB|20|500|POL|2027
Conrado|LB|29|400|BRA|2028
Oskar Markiewicz|LB|26|25|POL|2027
Zié Ouattara|RB|26|1200|CIV|2028
Jan Grzesik|RB|32|350|POL|2027
Romário Baró|DM|26|350|POR|2028
Ibrahima Camará|DM|27|300|GUI|2027
Christos Donis|DM|32|300|GRE|2027
Adam Żabicki|DM|20|25|POL|2027
Luquinhas|AM|30|800|BRA|2027
Roberto Alves|AM|29|400|SUI|2027
Rafał Wolski|AM|33|250|POL|2028
Kacper Karasek|AM|24|200|POL|2028
Anastasios Donis|LW|30|500|GRE|2027
Ronaldo Lumungo|RW|25|450|STP|2029
Ché Nunnely|RW|27|400|SUR|2028
Elves Baldé|RW|27|350|GNB|2027
Manu|RW|20|50|ANG|2029
Nikolas Dohojda|RW|21|500|POL|2027
Guilherme Luiz|ST|21|1500|BRA|2027
Abdoul Tapsoba|ST|25|400|BFA|2027
Fernand Goure|ST|24|300|CIV|2029
Ruan Índio|ST|20|500|BRA|2027` },
    { id: 'korona', name: 'Корона', city: 'Кельце', stadium: 'EXBUD Arena', cap: 15550, colors: ['#ffd700', '#e30613'], players: `
Xavier Dziekoński|GK|23|2000|POL|2027
Rafał Mamla|GK|22|300|POL|2028
Michał Mikielewicz|GK|18|500|POL|2027
Franciszek Panek|GK|17|500|POL|2027
Ariel Mosór|CB|23|800|POL|2030
Slobodan Rubežić|CB|26|700|MNE|2028
Konstantinos Sotiriou|CB|30|450|CYP|2027
Bartłomiej Smolarczyk|CB|23|300|POL|2027
Igor Chmielewski|CB|19|500|POL|2027
Marcel Pięczek|LB|25|550|POL|2028
Konrad Matuszewski|LB|25|300|POL|2028
Konrad Ciszek|LB|19|300|POL|2029
Wiktor Długosz|RB|26|1000|POL|2028
Hubert Zwoźny|RB|22|300|POL|2028
Norbert Barczak|RB|21|300|POL|2029
Patrik Hellebrand|DM|27|3500|CZE|2029
Kamil Jakubczyk|DM|22|1500|POL|2030
Nono|DM|35|150|ESP|2027
Martin Remacle|AM|29|600|BEL|2028
Simon Gustafson|AM|31|400|SWE|2027
Kacper Minuczyc|AM|18|50|POL|2028
Kornel Toboła|AM|20|500|POL|2027
Michael Ameyaw|LW|26|1500|POL|2029
Morgan Faßbender|LW|28|500|GER|2028
Camilo Mena|RW|24|4000|COL|2027
Ondrej Lingr|RW|28|3000|CZE|2029
Stjepan Davidovic|RW|21|500|CRO|2029
Dawid Błanik|RW|29|450|POL|2028
Mariusz Stępiński|ST|31|500|POL|2028
Daniel Bąk|ST|21|350|POL|2028` },
    { id: 'motor', name: 'Мотор', city: 'Люблин', stadium: 'Motor Lublin Arena', cap: 15247, colors: ['#ffd700', '#0055a4'], players: `
Mihai Popa|GK|26|700|ROU|2028
Gasper Tratnik|GK|26|250|SVN|2027
Patryk Kukulski|GK|22|500|POL|2027
Borys Mołdach|GK|17|500|POL
Tin Plavotic|CB|29|600|CRO|2028
Marek Bartos|CB|30|500|SVK|2027
Bartosz Bereszyński|CB|34|300|POL|2028
Paskal Meyer|CB|21|250|POL|2027
Артём Акатов|CB|19|500|BLR|2028
Filip Luberecki|LB|21|2500|POL|2028
Thomas Santos|RB|28|600|DEN|2027
Kamil Lukoszek|RB|24|450|POL|2027
Mateusz Łęgowski|DM|23|1500|POL|2028
Yacine Bourhane|DM|28|450|COM|2028
Alioune Oumar Tall|DM|19|125|SEN|2029
Marcel Złomańczuk|DM|21|500|POL|2028
Ivo Rodrigues|AM|31|600|POR|2027
Christopher Simon|AM|26|300|SEN|2027
Fábio Ronaldo|LW|25|1500|POR|2027
Makan Aïko|LW|25|700|FRA|2028
Mbaye Ndiaye|RW|23|3000|SEN|2028
Rony Lopes|RW|30|900|POR|2028
Florian Haxha|RW|24|200|KVX|2027
Karol Czubak|ST|26|2500|POL|2027
Dominik Gregorski|ST|20|50|POL|2029
Mateusz Posmyk|ST|17|500|POL|2029` },
    { id: 'cracovia', name: 'Краковия', city: 'Краков', stadium: 'Stadion Cracovii', cap: 15016, colors: ['#e30613', '#ffffff'], players: `
Sebastian Madejski|GK|29|450|POL|2028
Aleksander Bobek|GK|22|300|POL|2029
Konrad Cymerys|GK|18|500|POL|2028
Jakub Chrapusta|GK|17|500|POL|2028
Brahim Traoré|CB|22|1000|FRA|2029
Gustav Henriksson|CB|28|700|SWE|2027
Dominik Baumgartner|CB|30|400|AUT|2028
Kamil Glik|CB|38|50|POL|2027
Mauro Perkovic|LB|23|3000|CRO|2029
Vincent Burlet|LB|21|600|BEL|2030
Jakub Wilczek|LB|19|500|POL|2028
Отар Какабадзе|RB|31|800|GEO|2027
Dominik Piła|RB|25|400|POL|2028
Amir Al-Ammari|DM|29|800|IRQ|2028
Beno Selan|DM|21|400|SVN|2029
Karol Knap|DM|25|200|POL|2028
Mateusz Klich|DM|36|200|POL|2027
Wiktor Dej|DM|18|500|POL|2029
Filip Marchwiński|AM|24|1500|POL|2027
Dijon Kameri|AM|22|700|AUT|2028
Mateusz Praszelik|AM|26|300|POL|2028
Mateusz Skoczylas|AM|20|200|POL|2028
Mateusz Tabisz|AM|18|150|POL|2029
Alex Marciniak|AM|18|500|WAL|2029
Sayfallah Ltaief|LW|26|1000|TUN|2028
Martin Minchev|LW|25|700|BUL|2028
Ajdin Hasic|RW|25|3000|BIH|2028
Lasse Nordås|ST|24|3500|NOR|2027
Wiktor Bogacz|ST|22|1500|POL|2027
Mohamed Berte|ST|24|500|BEL|2029
Kahveh Zahiroleslam|ST|24|300|USA|2027
Kacper Śmiglewski|ST|21|150|POL|2027
Siem Eyob-Abraha|ST|18|500|ERI|2028` },
    { id: 'widzew', name: 'Видзев', city: 'Лодзь', stadium: 'Stadion Miejski Widzewa Łódź', cap: 18018, colors: ['#e30613', '#ffffff'], players: `
Bartłomiej Drągowski|GK|29|1500|POL|2029
Veljko Ilić|GK|23|750|SRB|2029
Jan Krzywański|GK|23|500|POL|2027
Franciszek Golański|GK|16|500|POL
Steve Kapuadi|CB|28|2500|COD|2030
Przemysław Wiśniewski|CB|28|2500|POL|2031
Mateusz Żyro|CB|27|500|POL|2028
Ricardo Visus|CB|25|400|ESP|2029
Mario García|LB|23|1500|ESP|2029
Christopher Cheng|LB|24|1000|NOR|2029
Jusuf Gazibegovic|RB|26|2000|BIH|2027
Marcel Krajewski|RB|22|1000|POL|2027
Carlos Isaac|RB|28|600|ESP|2028
Juljan Shehu|DM|28|3000|ALB|2028
Dani Silva|DM|26|2000|POR|2027
Giannis Papanikolaou|DM|27|1200|GRE|2028
Lindon Selahi|DM|27|800|ALB|2028
Lukas Lerager|DM|33|400|DEN|2028
Szymon Czyż|DM|25|300|POL|2027
Emil Kornvig|AM|26|2500|DEN|2029
Fran Álvarez|AM|28|1500|ESP|2028
Stipe Biuk|LW|23|2000|CRO|2029
Paulinho Bóia|LW|28|1200|BRA|2028
Mariusz Fornalczyk|LW|23|900|POL|2029
Darian Males|RW|25|1200|SUI|2029
Antoni Klukowski|RW|19|250|CAN|2028
Karol Świderski|ST|29|2500|POL|2029
Sebastian Bergier|ST|26|1500|POL|2029
Ioan Vermeșan|ST|20|1000|ROU` },
    { id: 'piast', name: 'Пяст', city: 'Гливице', stadium: 'Stadion Miejski', cap: 9913, colors: ['#0055a4', '#e30613'], players: `
Domen Gril|GK|25|1000|SVN|2029
Frantisek Plach|GK|34|150|SVK|2027
Marcel Mendes-Dudziński|GK|21|50|POL|2029
Jakub Grelich|GK|18|500|POL|2029
Francisco Sierralta|CB|29|1200|CHI|2027
Juande Rivas|CB|27|850|ESP|2027
Jakub Czerwiński|CB|35|200|POL|2028
Levis Pitan|CB|21|200|POL|2027
Jakub Lewicki|LB|21|1000|POL|2027
Elton Fikaj|LB|21|300|ALB|2028
Ema Twumasi|RB|29|450|GHA|2027
Filip Borowski|RB|23|150|POL|2027
Jakub Łabojko|DM|29|350|POL|2028
Quentin Boisgard|AM|29|400|FRA|2027
Oskar Leśniak|AM|22|350|POL|2027
Szczepan Mucha|AM|22|150|POL|2027
Oliwier Maziarz|AM|20|100|POL|2028
Hugo Vallejo|LW|26|700|ESP|2028
Ivan Lima|LW|21|600|POR|2029
Jorge Félix|LW|35|100|ESP|2027
Leandro Sanca|RW|26|750|GNB|2027
Jason Lokilo|RW|28|400|COD|2027
Samuel Ntamack|ST|25|500|FRA|2028
Andreas Katsantonis|ST|26|350|CYP|2027
Maciej Kucharski|ST|17|100|POL|2029` },
    { id: 'wisla', name: 'Висла Краков', city: 'Краков', stadium: 'Stadion im. Henryka Reymana', cap: 33268, colors: ['#e30613', '#ffffff'], players: `
Marcel Lubik|GK|22|1500|POL|2027
Patryk Letkiewicz|GK|21|350|POL|2028
Jakub Stępak|GK|20|500|POL|2027
Bartosz Neugebauer|GK|24|500|POL|2027
Darijo Grujcic|CB|27|450|AUT|2027
Maxence Maisonneuve|CB|27|400|FRA|2028
Mariusz Kutwa|CB|22|300|POL|2027
Wiktor Biedrzycki|CB|29|250|POL|2027
Alan Uryga|CB|32|200|POL|2027
Jakub Krzyzanowski|LB|20|2500|POL|2030
Rafał Mikulec|LB|29|200|POL|2027
Raoul Giger|RB|28|550|SUI|2029
Julian Lelieveld|RB|28|450|NED|2027
Bartosz Jaroch|RB|31|150|POL|2027
Kacper Duda|DM|22|1500|POL|2027
James Igbekeme|DM|31|300|NGA|2027
Marc Carbó|DM|32|175|ESP|2027
Максым Цымбалюк|DM|19|500|UKR|2027
Víctor Meseguer|AM|27|1200|ESP|2028
Julius Ertlthaler|AM|29|400|AUT|2029
Élie Youan|LW|27|1200|FRA|2029
Marko Bozic|LW|28|500|AUT|2027
Frederico Duarte|LW|27|450|POR|2029
Maciej Kuziemka|RW|20|1200|POL|2028
Oliwier Pławiński|RW|17|500|POL|2028
Ángel Rodado|ST|29|1500|ESP|2030
Jérémy Guillemenot|ST|28|300|SUI|2028
Karol Tokarczyk|ST|21|500|POL|2027` },
    { id: 'slask', name: 'Шлёнск', city: 'Вроцлав', stadium: 'Tarczyński Arena', cap: 42771, colors: ['#00a650', '#ffffff'], players: `
Karol Niemczycki|GK|27|300|POL|2028
Michał Szromnik|GK|33|100|POL|2027
Hubert Śliczniak|GK|19|500|POL|2027
Dominik Klint|GK|17|500|POL|2027
Егор Маценко|CB|24|500|UKR|2027
Irodotos Christodoulou|CB|24|400|CYP|2028
Dominik Szala|CB|20|350|POL|2027
Lamine Ba|CB|29|300|MTN|2027
Mariusz Malec|CB|31|200|POL|2027
Marko Dijakovic|CB|24|150|AUT
Adrian Żulewski|CB|19|500|POL|2027
Karol Linetty|DM|31|800|POL|2028
Eniss Shabani|DM|23|500|ALB|2028
Michał Mokrzycki|DM|28|350|POL|2029
Jorge Yriarte|DM|26|350|VEN|2027
Dorian Markowski|DM|18|150|POL|2028
Patryk Sokołowski|DM|32|100|POL|2027
Przemyslaw Mazan|DM|16|500|POL|2027
Jan Jurcec|RW|25|1000|CRO|2029
Alex Timossi Andersson|RW|25|500|SWE|2028
Marc Llinares|LW|27|350|ESP|2028
Piotr Samiec-Talar|AM|24|1200|POL|2027
Karol Borys|AM|20|600|POL|2029
Adam Ciućka|AM|18|500|POL|2028
Grzegorz Tomasiewicz|AM|30|300|POL|2028
Ieltsin Camões|ST|27|800|CPV|2027
Malaly Dembélé|ST|29|500|FRA|2028
Luka Marjanac|ST|23|400|BIH|2027
Przemysław Banaszak|ST|29|300|POL|2027
Maksymilian Stangret|ST|21|500|POL` },
    { id: 'wieczysta', name: 'Вечиста', city: 'Краков', stadium: 'Stadion im. Henryka Reymana', cap: 33268, colors: ['#ffd700', '#000000'], players: `
Mateusz Kochalski|GK|26|2500|POL|2029
Nikola Cavlina|GK|24|600|CRO|2027
Antoni Mikułko|GK|21|400|POL|2028
Mateusz Wieteska|CB|29|700|POL|2027
Duje Dujmovic|CB|22|600|CRO|2028
Aleksandar Djermanovic|CB|24|400|SRB|2028
Antonio Milic|CB|32|350|CRO|2028
Kacper Zagrodzki|CB|21|500|POL|2027
Matus Vojtko|LB|26|400|SVK|2028
Kamil Pestka|LB|28|350|POL|2027
Karol Fila|RB|28|300|POL|2027
Kamil Dankowski|RB|30|200|POL|2027
Mikkel Maigaard|DM|31|500|DEN|2027
Ben Lederman|DM|26|300|POL|2028
Nikola Knezevic|DM|23|300|SRB|2028
Tobias Christensen|AM|26|2000|NOR|2028
Lucas Piazón|AM|32|250|BRA|2027
Petar Pusic|AM|27|250|SUI|2027
Christopher Lungoyi|LW|26|700|SUI|2028
Tobiasz Mras|LW|19|100|POL|2027
José Antonio de la Rosa|RW|22|1000|ESP|2028
Lisandro Semedo|RW|30|300|CPV|2027
Miki Villar|RW|30|300|ESP|2027
Efthymios Koulouris|ST|30|2000|GRE|2028
Stefan Feiertag|ST|24|450|AUT|2028
Bartosz Bialek|ST|24|400|POL|2027` },
  ],
});
