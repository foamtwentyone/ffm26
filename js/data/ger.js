// Бундеслига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ger', name: 'Бундеслига', short: 'Бундеслига', country: 'GER', tier: 1, weekday: 6,
  autumn: { from: '08-22', rounds: 17 }, spring: { from: '01-09', rounds: 17 },
  ticket: 32, prize: [35000, 33350, 31700, 30050, 28400, 26750, 25100, 23450, 21800, 20200, 18550, 16900, 15250, 13600, 11950, 10300, 8650, 7000],
  teams: [
    { id: 'bayern', name: 'Бавария', city: 'Мюнхен', stadium: 'Allianz Arena', cap: 75024, colors: ['#dc052d', '#ffffff'], players: `
Jonas Urbig|GK|23|18000|GER|2029||<2025-01-27
Manuel Neuer|GK|40|4000|GER|2027||<2011-07-01
Sven Ulreich|GK|38|500|GER|2027||<2021-07-01
Dayot Upamecano|CB|27|75000|FRA|2030|GNB|<2021-07-05
Jonathan Tah|CB|30|28000|GER|2029|CIV|<2025-06-09
Min-jae Kim|CB|29|20000|KOR|2028||2023-07-18
Hiroki Ito|CB|27|18000|JPN|2028||<2024-07-01
Nathaniel Brown|LB|23|50000|GER|2031|USA|<2026-07-03
Alphonso Davies|LB|25|45000|CAN|2030|LBR|2019-01-01
Josip Stanisic|RB|26|40000|CRO|2029|GER|2021-08-01
Konrad Laimer|RB|29|32000|AUT|2029||<2023-07-01
Sacha Boey|RB|26|7000|FRA|2028|BEL|2024-01-28
Aleksandar Pavlovic|DM|22|90000|GER|2029|SRB|2023-11-01
Joshua Kimmich|DM|31|35000|GER|2029||<2015-07-02
Tom Bischof|CM|21|45000|GER|2029||<2025-06-09
Bara Sapoko Ndiaye|CM|18|8000|SEN|2031||2026-08-10
Jamal Musiala|AM|23|80000|GER|2030|ENG|2020-07-01
Lennart Karl|AM|18|60000|GER|2029||2025-06-01
Ismael Saibari|AM|25|55000|MAR|2031|BEL|2026-07-01
Luis Díaz|LW|29|70000|COL|2029||2025-07-30
Michael Olise|RW|24|180000|FRA|2029|ENG|2024-07-07
Serge Gnabry|ST|31|18000|GER|2028|CIV|<2017-07-01
Harry Kane|ST|33|60000|ENG|2027|IRL|2023-08-12` },
    { id: 'dortmund', name: 'Боруссия Дортмунд', city: 'Дортмунд', stadium: 'SIGNAL IDUNA PARK', cap: 81365, colors: ['#fde100', '#000000'], players: `
Gregor Kobel|GK|28|40000|SUI|2028||<2021-07-01
Alexander Meyer|GK|35|500|GER|2027||2022-07-01
Patrick Drewes|GK|33|300|GER|2027||<2025-07-01
Silas Ostrzinski|GK|22|200|GER|2027||2025-01-04
Nico Schlotterbeck|CB|26|55000|GER|2031||<2022-07-01
Joane Gadou|CB|19|28000|FRA|2031|CIV|2026-07-01
Waldemar Anton|CB|30|18000|GER|2028||<2024-07-08
Luca Reggiani|CB|18|10000|ITA|2029||2026-03-20
Ramy Bensebaini|CB|31|7000|ALG|2027||<2023-07-01
Filippo Mane|CB|21|5000|ITA|2028|SEN|2025-01-06
Emre Can|CB|32|3000|GER|2027|TUR|2020-07-01
Daniel Svensson|LB|24|22000|SWE|2029||2025-07-01
Kauã Prates|LB|18|10000|BRA|2031||2026-08-12
Julian Ryerson|RB|28|25000|NOR|2028|USA|<2023-01-17
Mussa Kaba|DM|17|200|GER|2031|GUI|2026-07-01
Felix Nmecha|CM|26|65000|GER|2030|ENG|<2023-07-03
Jobe Bellingham|CM|21|40000|ENG|2030|IRL|2025-06-10
Joey Veerman|CM|27|25000|NED|2031||2026-08-18
Carney Chukwuemeka|CM|23|17000|AUT|2030|ENG|2025-08-26
Marcel Sabitzer|CM|32|6000|AUT|2027||<2023-07-24
Enzo dos Santos|CM|17|1500|LUX|2029|CPV|2026-08-19
Ethan Nwaneri|AM|19|35000|ENG|2027|NGA|2026-09-01
Konstantinos Karetsas|AM|18|35000|GRE|2031|BEL|2026-08-03
Giannis Konstantelias|AM|23|22000|GRE|2031||2026-08-17
Justin Lerma|AM|18|3200|ECU|2031||2026-07-01
Mathis Albert|LW|17|5000|USA|2027|GER|2026-07-01
Samuele Inácio|ST|18|20000|ITA|2029|BRA|2026-07-01
Maximilian Beier|ST|24|35000|GER|2029||<2024-08-12
Serhou Guirassy|ST|30|32000|GUI|2028|FRA|<2024-07-18
Fábio Silva|ST|24|22000|POR|2030||2025-08-29` },
    { id: 'leipzig', name: 'РБ Лейпциг', city: 'Лейпциг', stadium: 'Red Bull Arena', cap: 47800, colors: ['#ffffff', '#dd0741'], players: `
Maarten Vandevoordt|GK|24|15000|BEL|2030||2024-07-01
Ørjan Nyland|GK|36|800|NOR|2028||2026-08-04
Leopold Zingerle|GK|32|300|GER|2028||<2023-07-01
Castello Lukeba|CB|23|50000|FRA|2029|ANG|2023-08-11
Maxime Estève|CB|24|28000|FRA|2031||2026-07-17
Abdoul Koné|CB|21|15000|FRA|2031|CIV|2026-01-29
Willi Orbán|CB|33|5000|HUN|2027|GER|<2015-07-01
Lukas Klostermann|CB|30|3500|GER|2028||<2014-08-22
David Raum|LB|28|25000|GER|2027||<2022-07-31
Max Finkgräfe|LB|22|5000|GER|2030||<2025-07-03
Ridle Baku|RB|28|12000|GER|2027|COD|<2025-01-10
Benjamin Henrichs|RB|29|7000|GER|2028|GHA|2021-07-01
Nicolas Seiwald|DM|25|25000|AUT|2028||2023-07-01
Benno Kaltefleiter|DM|18|500|GER|2029||2026-02-19
Neil El Aynaoui|CM|25|30000|MAR|2027|FRA|2026-09-01
Ezechiel Banzuzi|CM|21|22000|COD|2030|NED|2025-07-01
Assan Ouédraogo|CM|20|22000|GER|2029|BFA|<2024-07-01
Rocco Reitz|CM|24|20000|GER|2031||<2026-07-01
Christoph Baumgartner|AM|27|40000|AUT|2028||<2023-07-01
Brajan Gruda|AM|22|28000|GER|2027|ALB|2026-02-02
Andrija Maksimovic|AM|19|9000|SRB|2030||2025-07-16
Viggo Gebel|AM|18|350|GER|2028||2026-07-01
Antonio Nusa|LW|21|45000|NOR|2029|NGA|2024-08-13
Tidiam Gomis|LW|20|15000|FRA|2029|SEN|2025-02-03
Johan Bakayoko|RW|23|20000|BEL|2030|CIV|2025-07-16
Rômulo|ST|24|30000|BRA|2030||2025-08-15
Christopher Nkunku|ST|28|25000|FRA|2027|COD|2026-08-25
Marc Guiu|ST|20|12000|ESP|2031||2026-09-01
Samba Konaté|ST|17|5000|FRA|2028|SEN|2026-07-01` },
    { id: 'stuttgart', name: 'Штутгарт', city: 'Штутгарт', stadium: 'MHPArena', cap: 60469, colors: ['#ffffff', '#e32219'], players: `
Dennis Seimen|GK|20|10000|GER|2029|ROU|<2023-07-01
Fabian Bredlow|GK|31|1000|GER|2027||<2019-07-01
Marius Funk|GK|30|300|GER|2028||<2026-07-01
Stefan Drljaca|GK|27|300|GER|2027|SRB|<2024-07-01
Finn Jeltsch|CB|20|35000|GER|2030||<2025-02-03
Ramon Hendriks|CB|25|25000|NED|2028||2024-07-01
Jeff Chabot|CB|28|15000|GER|2028|FRA|<2024-07-01
Luca Jaquez|CB|23|10000|SUI|2029|DOM|2025-02-03
Ameen Al-Dakhil|CB|24|3000|BEL|2028|IRQ|2024-08-27
Dan-Axel Zagadou|CB|27|2000|FRA|2027|CIV|2022-09-19
Maximilian Mittelstädt|LB|29|18000|GER|2028||<2023-07-01
Josha Vagnoman|RB|25|12000|GER|2028|CIV|<2022-07-09
Lorenz Assignon|RB|26|9000|FRA|2029|TOG|2025-07-01
Leonidas Stergiou|RB|24|2000|SUI|2028|GRE|<2024-07-01
Angelo Stiller|DM|25|45000|GER|2028||<2023-08-25
Atakan Karazor|DM|30|5000|TUR|2028|GER|<2019-07-01
Nikolas Nartey|CM|26|10000|DEN|2028|GHA|<2019-08-29
Yanik Spalt|CM|19|4000|AUT|2028||2026-07-01
Grischa Prömel|CM|31|3500|GER|2029||<2026-07-01
Ertugrul Yigit|CM|17|750|GER|2029|TUR|2026-07-01
Bilal El Khannouss|AM|22|35000|MAR|2030|BEL|2026-07-01
Jarzinho Malanga|AM|20|1400|GER|2028||2026-07-01
Leo Sauer|LW|20|15000|SVK|2031||2026-07-29
Chris Führich|LW|28|12000|GER|2028||<2021-07-19
Justin Diehl|LW|21|1200|GER|2029|GHA|<2024-07-01
Jamie Leweling|RW|25|40000|GER|2029|GHA|<2024-07-01
Tiago Tomás|RW|24|15000|POR|2029||<2025-08-16
Dzenan Pejcinovic|ST|21|25000|GER|2031|MNE|<2026-08-10
Ermedin Demirovic|ST|28|22000|BIH|2028||<2024-07-16
Deniz Undav|ST|30|22000|GER|2029||2024-08-09` },
    { id: 'hoffenheim', name: 'Хоффенхайм', city: 'Зинсхайм', stadium: 'SNP Arena', cap: 30164, colors: ['#1c63b7', '#ffffff'], players: `
Oliver Baumann|GK|36|2500|GER|2028||<2014-07-01
Luca Philipp|GK|25|750|GER|||2020-07-31
Lúkas Petersson|GK|22|600|ISL||GER|2024-07-01
Albian Hajdari|CB|23|25000|KVX|2031|SUI|2025-08-25
Ozan Kabak|CB|26|15000|TUR|2030|GER|<2022-07-23
Robin Hranac|CB|26|10000|CZE|2028||2024-08-25
Koki Machida|CB|29|6000|JPN|2029||2025-07-01
Sean Dulic|CB|21|1200|GER|2030|BIH|2026-07-01
Mats Rots|LB|20|16000|NED|2031||2026-07-01
Bernardo|LB|31|4000|BRA|2027||<2025-07-01
Valentin Gendrey|RB|26|6000|FRA|2028|GLP|2024-08-27
Vladimír Coufal|RB|34|2500|CZE|2028||2025-08-05
Natnael Abraha|RB|18|1000|GER|||2026-07-01
Leon Avdullahu|DM|22|30000|KVX|2031|SUI|2025-07-01
Wouter Burger|DM|25|20000|NED|||2025-07-22
Cajetan Lenz|DM|20|10000|GER|2031|SUI|<2026-07-01
Luis Engelns|DM|19|2500|GER|||<2026-02-02
Nathan De Cat|CM|18|27000|BEL|2031||2026-07-10
Alexander Prass|LW|25|9000|AUT|2028||2024-08-05
Bambasé Conté|AM|23|7000|GER||GUI|<2023-08-16
Adam Daghim|RW|21|13000|DEN|2031||2026-08-02
Patrick Wimmer|RW|25|12000|AUT|2031||<2026-07-01
Andrej Kramaric|ST|35|2500|CRO|2028||2016-07-01
Fisnik Asllani|ST|24|30000|KVX|2029|GER|2022-01-04
Tim Lemperle|ST|24|17000|GER|2031||<2025-07-01
Adam Hlozek|ST|24|10000|CZE|2029||<2024-08-17
Max Moerstedt|ST|20|7000|GER|2030||2024-01-01` },
    { id: 'leverkusen', name: 'Байер Леверкузен', city: 'Леверкузен', stadium: 'BayArena', cap: 30210, colors: ['#e32221', '#000000'], players: `
Mark Flekken|GK|33|6000|NED|2028||2025-07-01
Janis Blaswich|GK|35|700|GER|2027||<2025-08-11
Niklas Lomb|GK|33|250|GER|2027||2012-07-01
Jarell Quansah|CB|23|50000|ENG|2030|SCO|2025-07-02
Edmond Tapsoba|CB|27|35000|BFA|2031||2020-01-31
Facundo Medina|CB|27|22000|ARG|2031||2026-08-11
Loïc Badé|CB|26|20000|FRA|2030|CIV|2025-08-21
Tim Oermann|CB|23|4000|GER|2029||<2025-07-01
Miguel Gutiérrez|LB|25|27000|ESP|2031||2026-08-05
Guéla Doué|RB|24|30000|CIV|2031|FRA|2026-09-01
Lucas Vázquez|RB|35|1500|ESP|2027||2025-08-26
Equi Fernández|DM|24|20000|ARG|2030|PAR|2025-09-01
Kennet Eichhorn|DM|17|20000|GER|2031||<2026-07-01
Robert Andrich|DM|32|5000|GER|2028||<2021-08-16
Aleix García|CM|29|20000|ESP|2029||2024-07-01
Ibrahim Maza|AM|20|50000|ALG|2030|GER|<2025-07-01
Malik Tillman|AM|24|30000|USA|2030|GER|2025-07-12
Jonas Hofmann|AM|34|1500|GER|2027||<2023-07-05
Afonso Moreira|LW|21|30000|POR|2031||2026-07-01
Eliesse Ben Seghir|LW|21|20000|MAR|2030|FRA|2025-08-31
Martin Terrier|LW|29|8000|FRA|2029||2024-07-18
Moussa Diaby|RW|27|25000|FRA|2031|MLI|2026-09-01
Nathan Tella|RW|27|15000|NGA|2031|ENG|2023-08-27
Montrell Culbreath|RW|19|15000|GER|2031|USA|2026-01-29
Christian Kofane|ST|20|40000|CMR|2029||2025-07-11
Patrik Schick|ST|30|18000|CZE|2030||2020-09-08
Victor Boniface|ST|25|5000|NGA|2028||<2023-07-22
Ndjicoura Bomba|ST|18|1500|MLI|2030||2026-07-01` },
    { id: 'freiburg', name: 'Фрайбург', city: 'Фрайбург', stadium: 'Europa-Park Stadion', cap: 34700, colors: ['#000000', '#ffffff'], players: `
Mio Backhaus|GK|22|15000|GER||JPN|<2026-07-01
Florian Müller|GK|28|1200|GER|||<2023-07-01
Jannik Huth|GK|32|400|GER|||<2024-07-01
Bruno Ogbus|CB|20|12000|SUI||NGA|2024-07-01
Philipp Lienhart|CB|30|10000|AUT|||2018-07-01
Max Rosenfelder|CB|23|8000|GER|||2023-07-01
Matthias Ginter|CB|32|5000|GER|||<2022-07-01
Anthony Jung|CB|34|600|GER|2027|ESP|<2025-07-01
Jordy Makengo|LB|25|10000|COD|2028|FRA|2023-07-01
Berkay Yılmaz|LB|21|7000|TUR||GER|<2024-07-01
Christian Günter|LB|33|2000|GER|||2012-07-01
Philipp Treu|RB|25|18000|GER|||<2025-07-01
Lukas Kübler|RB|34|1500|GER|||2015-07-01
Yannik Engelhardt|DM|25|12000|GER|||2026-07-18
Patrick Osterhage|DM|26|10000|GER|||<2024-07-01
Rihito Yamamoto|DM|24|7000|JPN|||2026-07-01
Maximilian Eggestein|CM|29|10000|GER|||<2021-08-18
Rouven Tarnutzer|CM|19|500|SUI||GER|2026-07-01
Derry Scherhant|LW|23|20000|GER|||<2025-07-01
Vincenzo Grifo|LW|33|4000|ITA||GER|<2019-09-02
Florent Muslija|LW|28|1000|KVX|2028|GER|2024-01-24
Niklas Beste|RW|27|10000|GER|2030||2025-01-31
Cyriaque Irié|RW|21|8000|BFA||CIV|2025-07-01
Yuito Suzuki|ST|24|28000|JPN|||2025-07-01
Igor Matanovic|ST|23|30000|CRO||GER|<2025-07-09
Keisuke Goto|ST|21|10000|JPN|||2026-07-01
Lucas Höler|ST|32|3000|GER|||2018-01-01` },
    { id: 'frankfurt', name: 'Айнтрахт Франкфурт', city: 'Франкфурт', stadium: 'Deutsche Bank Park', cap: 60100, colors: ['#e1000f', '#000000'], players: `
Noah Atubolu|GK|24|18000|GER|2027|NGA|<2026-08-28
Kauã Santos|GK|23|3000|BRA|2030||2023-08-29
Amil Siljevic|GK|19|400|BIH|2029|GER|2025-07-10
Jens Grahl|GK|38|200|GER|2027||<2021-07-19
Nnamdi Collins|CB|22|20000|GER|2030|NGA|2023-08-09
Lilian Brassier|CB|26|10000|FRA|2031|TOG|2026-08-31
Robin Koch|CB|30|10000|GER|2030||2024-07-01
Otávio|CB|20|3000|BRA|2031||2026-07-28
Jeremiaha Maluze|CB|21|2500|GER|2031|NGA|2026-07-01
Keita Kosugi|LB|20|7000|JPN|2031||2026-01-01
Elias Baum|RB|20|7000|GER|2028||2023-10-26
Timothy Chandler|RB|36|350|USA|2027|GER|<2014-07-01
Raphael Onyedika|DM|25|17000|NGA|2031||2026-08-02
Noël Aséko|DM|20|12000|GER|2031|EQG|<2026-07-18
Oscar Højlund|CM|21|15000|DEN|2029||2024-07-10
Can Uzun|AM|20|45000|TUR|2029|GER|<2024-07-02
Farès Chaïbi|AM|23|15000|ALG|2028|FRA|2023-08-30
Love Arrhov|AM|18|5000|SWE|2028||2026-01-01
Mario Götze|AM|34|3000|GER|2028||2022-07-01
Ritsu Doan|RW|28|17000|JPN|2030||<2025-08-07
Ansgar Knauff|RW|24|15000|GER|2028|GHA|<2023-07-01
Ayoube Amaimouni-Echghouyab|RW|21|10000|MAR|2031|ESP|2026-01-02
Jonathan Burkardt|ST|26|30000|GER|2030||<2025-07-04
Younes Ebnoutalib|ST|23|18000|GER|2031|MAR|<2026-01-01
Malik Pimpong|ST|18|4000|DEN|2031||2026-07-01
Jessic Ngankam|ST|26|700|GER|2028|CMR|2023-07-14` },
    { id: 'augsburg', name: 'Аугсбург', city: 'Аугсбург', stadium: 'WWK Arena', cap: 30662, colors: ['#ba3733', '#46714d'], players: `
Finn Dahmen|GK|28|12000|GER|2027|ENG|<2023-07-01
Nediljko Labrovic|GK|27|2000|CRO|2029||2024-07-01
Tom Wisbereit|GK|18|200|GER|2030||2026-07-14
Chrislain Matsima|CB|24|25000|FRA|2030|CGO|2025-07-01
Noahkai Banks|CB|19|25000|GER|2029|USA|2024-07-10
Juma Bah|CB|20|10000|SLE|2027||2026-09-01
Calvin Brackelmann|CB|27|4000|GER|2030||<2026-07-01
Jeffrey Gouweleeuw|CB|35|1000|NED|2027||2016-01-09
Hennes Behrens|LB|21|8000|GER|2031||<2026-07-13
Young-woo Seol|RB|27|6500|KOR|2030||2026-08-27
Marius Wolf|RB|31|2500|GER|2027||<2024-08-08
Robin Fellhauer|DM|28|4000|GER|2029||<2025-07-01
Yannik Keitel|DM|26|2000|GER|2027||<2026-01-03
Tim Breithaupt|DM|24|800|GER|2028||2023-07-01
Tim Schnitzer|DM|18|500|GER|2029||2026-07-01
Han-Noah Massengo|CM|25|10000|FRA|2030|CGO|2025-07-15
Sima Suso|CM|21|2800|GER|2031||2026-07-10
Anton Kade|AM|22|15000|GER|2029||2025-08-25
Fabian Rieder|AM|24|15000|SUI|2030||2025-09-01
Mert Kömür|AM|21|12000|GER|2029|TUR|2023-07-01
Alexis Claude-Maurice|AM|28|12000|FRA|2027|GLP|2024-08-30
Arijon Ibrahimovic|LW|20|10000|GER|2027|KVX|<2026-09-01
Faik Sakar|LW|18|200|GER|2030|FRA|2026-07-01
Rodrigo Ribeiro|ST|21|5000|POR|2031||2026-07-01
Uchenna Ogundu|ST|20|4000|NGA|2031||2026-02-02
Michael Gregoritsch|ST|32|1500|AUT|2027||2026-07-01
Steve Mounié|ST|32|1000|BEN|2027|FRA|2024-07-05` },
    { id: 'mainz', name: 'Майнц', city: 'Майнц', stadium: 'MEWA ARENA', cap: 34034, colors: ['#c3141e', '#ffffff'], players: `
Robin Zentner|GK|31|2500|GER|2028||2014-07-01
Alexander Schwolow|GK|34|450|GER|||2026-07-30
Maximilian Kinzig|GK|22|150|GER|||2026-07-01
Kacper Potulski|CB|19|18000|POL|2028||2026-01-01
Stefan Posch|CB|29|6000|AUT|||2026-08-12
Fabio Gruber|CB|24|5000|PER|2030|GER|<2026-07-01
Dominik Kohr|CB|32|2000|GER|2028||<2022-07-01
Danny da Costa|CB|33|1200|GER|2027|ANG|<2022-07-01
Stefan Bell|CB|35|600|GER|2027||2010-07-01
Phillipp Mwene|LB|32|1500|AUT||KEN|2023-08-23
Rael Nakuzola|LB|19|500|GER||COD|2026-10-15
Anthony Caci|RB|29|7000|FRA|2028||2022-07-01
Silvan Widmer|RB|33|800|SUI|||2021-07-09
Kaishu Sano|DM|25|40000|JPN|2028||2024-07-03
Eric Martel|DM|24|8000|GER|||<2026-07-01
Lennard Maloney|DM|27|2500|USA|2028|GER|<2025-01-21
Sota Kawasaki|DM|25|2000|JPN|||2026-07-01
Paul Nebel|AM|24|18000|GER|2027|IRL|2020-07-01
Nadiem Amiri|AM|29|17000|GER|2028||<2024-01-31
Jae-sung Lee|AM|34|2000|KOR|||<2021-07-08
Otto Ruoppi|AM|20|2000|FIN|2030||2026-02-02
Sheraldo Becker|LW|31|2000|SUR||NED|2026-07-01
Silas|RW|28|2000|COD|||<2026-01-06
Benedict Hollerbach|ST|25|8000|GER|2029||<2025-07-01
Phillip Tietz|ST|29|5000|GER|2028||<2026-01-02
Ransford Königsdörffer|ST|25|5000|GHA||GER|<2026-07-01
Alynho Haidara|ST|18|500|CIV` },
    { id: 'union', name: 'Унион Берлин', city: 'Берлин', stadium: 'Stadion An der Alten Försterei', cap: 22467, colors: ['#eb1923', '#ffffff'], players: `
Frederik Rönnow|GK|34|2000|DEN|||<2021-07-20
Matheo Raab|GK|27|800|GER|||<2025-07-11
Carl Klaus|GK|32|350|GER|||<2024-07-28
Leopold Querfeld|CB|22|17000|AUT|2027||2024-07-01
Zeno Van Den Bosch|CB|23|6000|BEL|||2026-07-01
Felix Uduokhai|CB|29|2500|GER||NGA|2026-08-27
Stanley Nsoki|CB|27|2000|FRA||COD|<2026-07-01
Marvin Friedrich|CB|30|1800|GER|||<2026-07-01
Tom Rothe|LB|21|10000|GER|||<2024-08-07
Derrick Köhn|LB|27|4000|GHA|2029|GER|2025-08-19
Andrik Markgraf|LB|20|300|GER|||2025-07-01
Josip Juranovic|RB|31|2000|CRO|||2023-01-22
Christopher Trimmel|RB|39|600|AUT|2027||2014-07-01
Aljoscha Kemlein|DM|22|12000|GER|2029||2023-07-01
Rani Khedira|DM|32|2000|TUN|2027|GER|<2021-07-01
András Schäfer|CM|27|4500|HUN|2027||2022-01-21
Michel Aebischer|CM|29|4000|SUI|||2026-08-19
Janik Haberer|CM|32|2000|GER|2027||<2022-07-01
Kastriot Imeri|LW|26|2000|SUI|||2026-09-01
Robert Skov|LW|30|1500|DEN|||2024-09-04
Woo-yeong Jeong|AM|27|3500|KOR|||<2025-07-01
Livan Burcu|LW|22|4000|TUR||GER|2024-07-20
Linus Güther|LW|16|1000|GER|2028||2026-07-01
Julien Friedrich|LW|19|125|GER|||2024-12-23
Emmanuel Latte Lath|ST|27|10000|CIV|2027|ITA|2026-08-02
Andrej Ilic|ST|26|9000|SRB|||2025-07-01
Oliver Burke|ST|29|3000|SCO|2029||<2025-07-01
Marin Ljubicic|ST|24|2000|CRO|||2025-02-02
Tim Skarke|ST|30|1500|GER|||<2022-07-01
Mekhi Gray|ST|19|500|JAM||GER|2026-07-01` },
    { id: 'gladbach', name: 'Боруссия Мёнхенгладбах', city: 'Мёнхенгладбах', stadium: 'ista-Borussia-Park', cap: 54057, colors: ['#ffffff', '#000000'], players: `
Moritz Nicolas|GK|29|8000|GER|2029||2016-07-01
Jan Olschowsky|GK|24|450|GER|2027||2020-07-13
Daniel Batz|GK|35|350|GER|2029||<2026-07-01
Tobias Sippel|GK|38|300|GER|2027||<2015-07-01
Kevin Diks|CB|30|5000|IDN|2030|NED|2025-07-01
Ko Itakura|CB|29|4000|JPN|2030||2026-08-20
Fabio Chiarodia|CB|21|3000|ITA|2028|GER|<2023-07-01
Jan Leszczyński|CB|19|3000|POL|2030||2026-07-01
Lukas Ullrich|LB|22|6000|GER|2029||2023-07-01
David Herold|LB|23|4000|GER|2030||<2026-07-01
Юхым Конопля|RB|27|5000|UKR|2029||2026-07-01
Joe Scally|RB|23|5000|USA|2027||2021-01-01
Daiki Hashioka|RB|27|1500|JPN|2027||2026-07-30
Philipp Sander|DM|28|4000|GER|2028||<2024-07-01
Zento Uno|DM|22|1000|JPN|2030||2026-07-01
Jens Castrop|CM|23|10000|KOR|2029|GER|<2025-07-01
Enzo Leopold|CM|26|4000|GER|2030||<2026-07-01
Mathieu Nguefack|CM|18|3000|GER|2029|CMR|2026-08-09
Florian Neuhaus|CM|29|2500|GER|2027||2017-07-01
Wael Mohya|AM|17|17000|GER||MAR|2025-07-06
Kevin Stöger|AM|33|1800|AUT|2027||<2024-07-01
Fritz Fleck|AM|19|300|GER|2028||2026-08-09
Hugo Bolin|LW|23|7500|SWE|2030||2026-07-01
Robin Hack|LW|28|5000|GER|2029||<2023-07-01
Nicolas Kühn|RW|26|10000|GER|2027||2026-09-01
Franck Honorat|RW|30|7000|FRA|2029||2023-07-11
Tim Kleindienst|ST|31|8000|GER|2029||<2024-07-01
Isac Lidberg|ST|28|5000|SWE|2030||<2026-07-01
Shuto Machino|ST|27|3000|JPN|2029||<2025-07-26
Iaia Manco Danfa|ST|19|250|GNB|2028|POR|2026-08-09` },
    { id: 'hamburg', name: 'Гамбург', city: 'Гамбург', stadium: 'Volksparkstadion', cap: 57000, colors: ['#ffffff', '#0a3f86'], players: `
Sander Tangvik|GK|23|2500|NOR|2030||2026-01-22
Daniel Heuer Fernandes|GK|33|1200|POR|2028|GER|<2019-07-01
Fernando Dickes|GK|19|300|GER|2028||2025-07-01
Elias Lahti|GK|17|500|FIN|2028||2028-06-30
Nicolás Capaldo|CB|28|8000|ARG|2028|ITA|2025-07-10
Sebastiaan Bornauw|CB|27|6000|BEL|2027||2026-08-19
Warmed Omari|CB|26|4000|COM|2030|FRA|2026-02-02
Jordan Torunarigha|CB|29|4000|NGA|2028|GER|2025-07-01
Shafiq Nandja|CB|19|1500|GER|2030||2026-07-01
Mario Vuskovic|CB|24|500|CRO|2027||2026-09-15
David Møller Wolfe|LB|24|12000|NOR|2027||2026-09-01
Louis Lemke|LB|17|5000|GER|2028||2028-06-30
Miro Muheim|LB|28|4000|SUI|2027||2022-07-01
Zakaria El Ouahdi|RB|24|12000|MAR|2031|BEL|2026-09-01
Nicolai Remberg|DM|26|9000|GER|2028||<2025-07-01
Kofi Amoako|DM|21|4000|GER|2030|GHA|<2026-07-01
Albert Sambi Lokonga|CM|27|12000|BEL|2028|COD|2025-09-01
Bilal Nadir|CM|22|8000|MAR|2029|FRA|2026-07-24
Bakery Jatta|RW|28|1000|GAM|2029||2016-07-01
Fábio Vieira|AM|26|15000|POR|2030||2026-09-01
Martin Adeline|AM|22|8000|FRA|2030||2026-07-13
Albert Grønbaek|AM|25|7000|DEN|2030||2026-07-01
Immanuel Pherai|AM|25|1200|SUR|2027|NED|<2023-07-01
Alexander Røssing-Lelesiit|LW|19|5000|NOR|2030||2025-02-03
Terem Moffi|ST|27|5000|NGA|2029||2026-08-24
Otto Stange|ST|19|5000|GER|2028||2024-11-09
Patson Daka|ST|28|3000|ZAM|2027||2026-07-22
Yussuf Poulsen|ST|32|1000|DEN|2027|TAN|<2025-07-13` },
    { id: 'koln', name: 'Кёльн', city: 'Кёльн', stadium: 'RheinEnergieSTADION', cap: 50076, colors: ['#ffffff', '#ed1c24'], players: `
Marvin Schwäbe|GK|31|3000|GER|2027||2021-07-01
Ron-Robert Zieler|GK|37|500|GER|2027||<2025-07-07
Martin James|GK|18|400|FRA|2029||2026-07-24
Matthias Köbbing|GK|29|100|GER|2027||2022-01-01
Jahmai Simpson-Pusey|CB|20|9000|ENG|2030||2026-07-01
Rav van den Berg|CB|22|5000|NED|2030||2025-08-13
Лука Лочошвили|CB|28|4500|GEO|2029||<2026-07-02
Joël Schmied|CB|28|2500|SUI|2029||2025-01-13
Timo Hübers|CB|30|1500|GER|2027||<2021-07-01
Gideon Mensah|LB|28|4000|GHA|2028||2026-07-11
Borna Sosa|LB|28|3000|CRO|2027|GER|2026-09-01
Sebastian Sebulonsen|RB|26|5500|NOR|2028||2025-07-18
Alessio Castro-Montes|RB|29|2500|BEL|2028|ESP|2025-09-01
Tom Krauß|DM|25|4500|GER|2029||<2026-07-01
Ellyes Skhiri|DM|31|2500|TUN|2028|FRA|<2026-08-21
Paul Okon-Engstler|DM|21|2000|AUS|2030|ITA|2026-07-23
Ísak Jóhannesson|CM|23|8000|ISL|2030|ENG|2025-07-01
Gil Neves|CM|18|400|POR|2029|LUX|2026-08-07
Said El Mala|LW|20|50000|GER|2031||2024-07-01
Reigan Heskey|LW|18|2000|ENG|2031|ANT|2026-07-17
Marius Bülter|LW|33|1800|GER|2027||<2025-07-31
Mikey Moore|RW|19|18000|ENG|2027|WAL|2026-08-31
Jan Thielmann|RW|24|3000|GER|2028||2020-01-17
Linton Maina|RW|27|3000|GER||KEN|<2022-07-01
Ragnar Ache|ST|28|9000|GER|2029|GHA|<2025-07-01
Thijs Dallinga|ST|26|9000|NED|2027||2026-08-17
Luca Waldschmidt|ST|30|2000|GER|2027||<2024-07-01
Imad Rondic|ST|27|750|BIH|2029||2025-02-03
Malek El Mala|ST|21|250|GER|2031||2024-07-01` },
    { id: 'werder', name: 'Вердер', city: 'Бремен', stadium: 'Weserstadion', cap: 42100, colors: ['#1d9053', '#ffffff'], players: `
Karl Hein|GK|24|4000|EST|2030||2026-07-01
Alexander Schlager|GK|30|1500|AUT|2029||2026-07-10
Markus Kolke|GK|36|300|GER|||2024-07-01
Stefan Smarkalev|GK|19|150|BUL|2027||2027-06-30
Marco Friedl|CB|28|10000|AUT|2028||<2019-07-01
Oskar Wójcik|CB|23|5000|POL|2031||2026-07-09
Amos Pieper|CB|28|4000|GER|||<2022-07-01
Mick Schmetgens|CB|19|3000|GER|2029||2025-12-10
Niklas Stark|CB|31|2000|GER|||<2022-07-01
Olivier Deman|LB|26|5000|BEL|2028||2023-08-31
Moussa Ndiaye|LB|24|4000|SEN|2027||2026-09-01
Felix Agu|LB|27|3500|NGA|2027|GER|<2020-07-01
Arthur|RB|23|8000|BRA|2027||<2026-09-01
Mitchell Weiser|RB|32|3000|GER|2027|ALG|<2022-07-15
Senne Lynen|DM|27|8000|BEL|2030||2023-08-08
Youri Regeer|DM|23|5000|NED|2027||2026-08-31
Dariusz Stalmach|DM|20|2500|POL|||<2026-07-01
Skelly Alvero|DM|24|1000|FRA|2028|ANG|2024-07-01
Jens Stage|CM|29|10000|DEN|2028||2022-07-01
Ludovit Reis|CM|26|3000|NED|2029|SVK|2026-08-14
Chuki|AM|22|10000|ESP|2030||2026-07-01
Darwin Soylu|AM|19|500|TUR||GER|2026-07-01
Marco Grüll|LW|28|5000|AUT|||2024-07-01
Eren Dinkçi|RW|24|6000|TUR|2027|GER|<2026-08-17
Justin Njinmah|RW|25|5000|GER|2028|NGA|2022-01-05
Paul Erevbenagie|RW|19|1500|GER|||2026-07-04
Niclas Füllkrug|ST|33|3500|GER|2027||2026-08-18
Keke Topp|ST|22|3000|GER|2028||<2024-07-01
Kenny Quetant|ST|20|3000|HAI|2030|FRA|2026-07-01
Salim Musah|ST|20|2000|GER|2028|GHA|2025-07-06
Cedric Itten|ST|29|1800|SUI|2029||2026-07-01` },
    { id: 'schalke', name: 'Шальке 04', city: 'Гельзенкирхен', stadium: 'VELTINS-Arena', cap: 62278, colors: ['#004d9d', '#ffffff'], players: `
Loris Karius|GK|33|1200|GER|2028||2025-01-14
Kevin Müller|GK|35|300|GER|||<2026-07-08
Johannes Siebeking|GK|20|125|GER|2029||2025-07-01
Mertcan Ayhan|CB|20|8000|TUR|2030|GER|2025-07-01
Maximilian Wöber|CB|28|3000|AUT|2027||2026-07-22
Hasan Kuruçay|CB|29|2500|TUR|2027|DEN|2025-07-29
Nikola Katic|CB|30|2000|BIH|2028|CRO|2025-07-01
Timo Becker|CB|29|1500|GER|2029||<2025-07-01
Robin Gosens|LB|32|4000|GER|2027|NED|2026-07-17
Vitalie Becker|LB|21|3000|GER|2030|RUS|2024-07-01
Adrian Gantenbein|RB|25|900|SUI|2028||2024-07-01
Satoshi Tanaka|DM|24|4000|JPN|2030||2026-07-01
Dejan Ljubicic|DM|29|3000|AUT|2028||2026-01-27
Ron Schallenberg|DM|28|2000|GER|2027||<2023-07-01
Luca Vozar|DM|19|800|GER|2029||2026-07-01
Soufiane El-Faouzi|CM|24|12000|MAR|2030|GER|2025-07-01
Janik Bachmann|CM|30|500|GER|2027||2024-07-01
Junior Dina Ebimbe|RW|25|4000|CMR|2028|FRA|<2026-08-07
Finn Porath|RW|29|800|GER|2027||<2025-08-21
Adil Aouchiche|AM|24|7000|ALG|2030|FRA|2026-02-02
Kenan Karaman|AM|32|1800|TUR|2028|GER|2022-09-01
Moussa Sylla|ST|26|5000|MLI|2028|FRA|2024-07-02
Hee-chan Hwang|ST|30|3000|KOR|2027||2026-09-01
Junior Adamu|ST|25|2000|AUT|2029||<2026-07-01
Edin Dzeko|ST|40|1000|BIH|2027||2026-01-22
Bryan Lasme|ST|27|600|FRA|2027|CIV|<2023-07-01
Emil Højlund|ST|21|500|DEN|2028||2024-07-16` },
    { id: 'elversberg', name: 'Эльферсберг', city: 'Шписен-Эльферсберг', stadium: 'URSAPHARM-Arena an der Kaiserlinde', cap: 11150, colors: ['#000000', '#ffffff'], players: `
Nicolas Kristof|GK|26|2500|AUT|2029|GER|2021-07-01
Tim Boss|GK|33|200|GER|2027||<2023-07-01
Frank Lehmann|GK|37|100|GER|2027||<2017-07-01
Elias Etringer|GK|18|500|GER|2029||2026-07-01
Lukas Pinckert|CB|26|2500|GER|2028||2022-07-22
Luca Sirch|CB|27|2200|GER|2029||<2026-07-21
Maximilian Rohr|CB|31|1000|GER|2028||<2024-08-05
Florian Le Joncour|CB|31|500|FRA|2027||2024-02-01
Luis Seifert|CB|22|200|GER|2028||2025-07-01
Lasse Günther|LB|23|4000|GER|2030||<2025-07-01
Nicholas Mickelson|LB|27|1000|THA|2027|NOR|2025-07-03
Jan Gyamerah|RB|31|900|GHA|2027|GER|<2025-07-04
Felix Keidel|DM|23|5000|GER|2028||2025-07-01
Lukasz Poreba|DM|26|4000|POL|2029||<2026-07-01
Amara Condé|DM|29|900|GER|2028|GUI|2025-07-01
Frederik Schmahl|CM|23|750|GER|2027||2024-07-01
Francis Onyeka|AM|19|12000|GER|2027|NGA|<2026-07-01
Noah Darvich|AM|20|5000|GER|2027||<2026-07-01
Maurice Krattenmacher|LW|21|5000|GER|2030||<2026-07-01
Tom Zimmerschied|LW|28|1500|GER|2029||<2024-08-21
Cole Campbell|RW|20|6000|USA|2030|ISL|<2026-07-09
Lukas Petkov|RW|25|4500|BUL|2027|GER|<2024-08-21
Raif Adam|RW|21|500|GER|2029||2026-01-05
David Mokwa|ST|22|7000|FRA|2029|CMR|<2026-01-03
Noel Futkeu|ST|23|6000|GER|2027|CMR|<2026-08-15
Luca Pfeiffer|ST|30|500|GER|2028||<2025-07-01
Luca Schnellbacher|ST|32|500|GER|2028||2020-07-27` },
    { id: 'paderborn', name: 'Падерборн', city: 'Падерборн', stadium: 'Home Deluxe Arena', cap: 15306, colors: ['#005ca9', '#000000'], players: `
Nahuel Noll|GK|23|2500|GER|2027|ESP|<2026-07-01
Markus Schubert|GK|28|500|GER|2028||2024-07-01
Florian Pruhs|GK|20|150|GER|||2023-07-01
Mattes Hansen|CB|22|2500|GER|||2023-07-01
Tjark Scheller|CB|24|2500|GER|||2024-07-01
Felix Götze|CB|28|2000|GER|||2024-07-01
Jano ter Horst|CB|24|1800|GER|||2026-07-01
Marcel Hoffmeier|CB|27|800|GER|2028||2022-07-01
Jonah Sticker|CB|22|750|GER|||2025-09-01
Nyamekye Awortwie-Grant|CB|26|400|GER||GHA|<2026-07-01
Tristan Zobel|CB|23|225|GER|2028||2025-07-01
Santiago Castañeda|DM|21|6000|USA||COL|2024-07-01
Tom Baack|DM|27|600|GER|||<2026-07-01
Laurin Ulrich|CM|21|4000|GER|2027||<2026-08-16
Sebastian Klaas|CM|28|900|GER|||<2022-07-01
Luka Duric|CM|23|800|BIH||GER|<2026-07-01
Timur Gayret|CM|28|450|GER|2029||2026-07-01
Laurin Curda|RW|24|5000|GER|||2023-07-01
Ruben Müller|RW|21|1000|GER||ESP|2025-07-01
Clemens Lippmann|RW|20|1000|GER|||2026-07-01
Raphael Obermair|LW|30|1200|PHI|2027|GER|<2022-07-01
Niklas Mohr|LW|22|500|GER|2028||2025-09-01
Deniz Zeitler|LW|19|4000|GER|2027|TUR|<2026-08-10
Gabriel Vidovic|LW|22|3000|CRO||GER|2026-08-18
Oliver Batista Meier|LW|25|1500|GER||BRA|2026-07-01
Albert Millgramm|LW|21|150|GER|||2026-07-01
Rayan Philippe|RW|26|4000|FRA|2027||<2026-09-01
Sven Michel|RW|36|300|GER|2027||<2024-07-05
Marvin Pieringer|ST|27|3000|GER|||<2026-08-26
Stefano Marino|ST|22|1500|GER||ITA|2025-07-15
Steffen Tigges|ST|28|700|GER|2027||<2025-08-06
Lasse Eickel|ST|18|150|GER|2031||2026-07-01` },
  ],
});
