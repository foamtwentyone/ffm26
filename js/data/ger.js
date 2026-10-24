// Бундеслига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ger', name: 'Бундеслига', short: 'Бундеслига', country: 'GER', tier: 1, weekday: 6,
  autumn: { from: '08-22', rounds: 17 }, spring: { from: '01-09', rounds: 17 },
  ticket: 32, prize: [35000, 33350, 31700, 30050, 28400, 26750, 25100, 23450, 21800, 20200, 18550, 16900, 15250, 13600, 11950, 10300, 8650, 7000],
  teams: [
    { id: 'bayern', name: 'Бавария', city: 'Мюнхен', stadium: 'Allianz Arena', cap: 75024, colors: ['#dc052d', '#ffffff'], players: `
Jonas Urbig|GK|23|18000|GER
Sven Ulreich|GK|38|500|GER
Dayot Upamecano|CB|27|75000|FRA
Jonathan Tah|CB|30|28000|GER
Min-jae Kim|CB|29|20000|KOR
Hiroki Ito|CB|27|18000|JPN
Nathaniel Brown|LB|23|50000|GER
Alphonso Davies|LB|25|45000|CAN
Josip Stanisic|RB|26|40000|CRO
Konrad Laimer|RB|29|32000|AUT
Sacha Boey|RB|26|7000|FRA
Aleksandar Pavlovic|DM|22|90000|GER
Tom Bischof|CM|21|45000|GER
Bara Sapoko Ndiaye|CM|18|8000|SEN
Lennart Karl|AM|18|60000|GER
Ismael Saibari|AM|25|55000|MAR
Michael Olise|RW|24|180000|FRA
Serge Gnabry|ST|31|18000|GER
Harry Kane|ST|33|60000|ENG` },
    { id: 'dortmund', name: 'Боруссия Дортмунд', city: 'Дортмунд', stadium: 'SIGNAL IDUNA PARK', cap: 81365, colors: ['#fde100', '#000000'], players: `
Gregor Kobel|GK|28|40000|SUI
Alexander Meyer|GK|35|500|GER
Patrick Drewes|GK|33|300|GER
Silas Ostrzinski|GK|22|200|GER
Nico Schlotterbeck|CB|26|55000|GER
Joane Gadou|CB|19|28000|FRA
Waldemar Anton|CB|30|18000|GER
Luca Reggiani|CB|18|10000|ITA
Filippo Mane|CB|21|5000|ITA
Daniel Svensson|LB|24|22000|SWE
Julian Ryerson|RB|28|25000|NOR
Felix Nmecha|CM|26|65000|GER
Jobe Bellingham|CM|21|40000|ENG
Joey Veerman|CM|27|25000|NED
Carney Chukwuemeka|CM|23|17000|AUT
Marcel Sabitzer|CM|32|6000|AUT
Enzo dos Santos|CM|17|1500|LUX
Ethan Nwaneri|AM|19|35000|ENG
Mathis Albert|LW|17|5000|USA
Samuele Inácio|ST|18|20000|ITA
Maximilian Beier|ST|24|35000|GER
Serhou Guirassy|ST|30|32000|GUI
Fábio Silva|ST|24|22000|POR` },
    { id: 'leipzig', name: 'РБ Лейпциг', city: 'Лейпциг', stadium: 'Red Bull Arena', cap: 47800, colors: ['#ffffff', '#dd0741'], players: `
Maarten Vandevoordt|GK|24|15000|BEL
Ørjan Nyland|GK|36|800|NOR
Castello Lukeba|CB|23|50000|FRA
Maxime Estève|CB|24|28000|FRA
Abdoul Koné|CB|21|15000|FRA
Willi Orbán|CB|33|5000|HUN
Lukas Klostermann|CB|30|3500|GER
Max Finkgräfe|LB|22|5000|GER
Ridle Baku|RB|28|12000|GER
Benjamin Henrichs|RB|29|7000|GER
Nicolas Seiwald|DM|25|25000|AUT
Benno Kaltefleiter|DM|18|500|GER
Neil El Aynaoui|CM|25|30000|MAR
Ezechiel Banzuzi|CM|21|22000|COD
Rocco Reitz|CM|24|20000|GER
Christoph Baumgartner|AM|27|40000|AUT
Brajan Gruda|AM|22|28000|GER
Andrija Maksimovic|AM|19|9000|SRB
Viggo Gebel|AM|18|350|GER
Antonio Nusa|LW|21|45000|NOR
Tidiam Gomis|LW|20|15000|FRA
Johan Bakayoko|RW|23|20000|BEL
Rômulo|ST|24|30000|BRA
Christopher Nkunku|ST|28|25000|FRA
Samba Konaté|ST|17|5000|FRA` },
    { id: 'stuttgart', name: 'Штутгарт', city: 'Штутгарт', stadium: 'MHPArena', cap: 60469, colors: ['#ffffff', '#e32219'], players: `
Dennis Seimen|GK|20|10000|GER
Fabian Bredlow|GK|31|1000|GER
Marius Funk|GK|30|300|GER
Finn Jeltsch|CB|20|35000|GER
Ramon Hendriks|CB|25|25000|NED
Jeff Chabot|CB|28|15000|GER
Luca Jaquez|CB|23|10000|SUI
Ameen Al-Dakhil|CB|24|3000|BEL
Maximilian Mittelstädt|LB|29|18000|GER
Lorenz Assignon|RB|26|9000|FRA
Angelo Stiller|DM|25|45000|GER
Atakan Karazor|DM|30|5000|TUR
Yanik Spalt|CM|19|4000|AUT
Grischa Prömel|CM|31|3500|GER
Bilal El Khannouss|AM|22|35000|MAR
Jarzinho Malanga|AM|20|1400|GER
Leo Sauer|LW|20|15000|SVK
Chris Führich|LW|28|12000|GER
Jamie Leweling|RW|25|40000|GER
Dzenan Pejcinovic|ST|21|25000|GER
Ermedin Demirovic|ST|28|22000|BIH` },
    { id: 'hoffenheim', name: 'Хоффенхайм', city: 'Зинсхайм', stadium: 'SNP Arena', cap: 30164, colors: ['#1c63b7', '#ffffff'], players: `
Luca Philipp|GK|25|750|GER
Lúkas Petersson|GK|22|600|ISL
Ozan Kabak|CB|26|15000|TUR
Robin Hranac|CB|26|10000|CZE
Koki Machida|CB|29|6000|JPN
Sean Dulic|CB|21|1200|GER
Mats Rots|LB|20|16000|NED
Bernardo|LB|31|4000|BRA
Valentin Gendrey|RB|26|6000|FRA
Vladimír Coufal|RB|34|2500|CZE
Natnael Abraha|RB|18|1000|GER
Leon Avdullahu|DM|22|30000|KVX
Wouter Burger|DM|25|20000|NED
Cajetan Lenz|DM|20|10000|GER
Alexander Prass|LW|25|9000|AUT
Bambasé Conté|AM|23|7000|GER
Adam Daghim|RW|21|13000|DEN
Andrej Kramaric|ST|35|2500|CRO
Fisnik Asllani|ST|24|30000|KVX
Tim Lemperle|ST|24|17000|GER
Adam Hlozek|ST|24|10000|CZE
Max Moerstedt|ST|20|7000|GER` },
    { id: 'leverkusen', name: 'Байер Леверкузен', city: 'Леверкузен', stadium: 'BayArena', cap: 30210, colors: ['#e32221', '#000000'], players: `
Mark Flekken|GK|33|6000|NED
Janis Blaswich|GK|35|700|GER
Niklas Lomb|GK|33|250|GER
Jarell Quansah|CB|23|50000|ENG
Facundo Medina|CB|27|22000|ARG
Loïc Badé|CB|26|20000|FRA
Miguel Gutiérrez|LB|25|27000|ESP
Lucas Vázquez|RB|35|1500|ESP
Equi Fernández|DM|24|20000|ARG
Robert Andrich|DM|32|5000|GER
Aleix García|CM|29|20000|ESP
Ibrahim Maza|AM|20|50000|ALG
Malik Tillman|AM|24|30000|USA
Jonas Hofmann|AM|34|1500|GER
Afonso Moreira|LW|21|30000|POR
Moussa Diaby|RW|27|25000|FRA
Nathan Tella|RW|27|15000|NGA
Patrik Schick|ST|30|18000|CZE
Ndjicoura Bomba|ST|18|1500|MLI` },
    { id: 'freiburg', name: 'Фрайбург', city: 'Фрайбург', stadium: 'Europa-Park Stadion', cap: 34700, colors: ['#000000', '#ffffff'], players: `
Mio Backhaus|GK|22|15000|GER
Florian Müller|GK|28|1200|GER
Jannik Huth|GK|32|400|GER
Philipp Lienhart|CB|30|10000|AUT
Max Rosenfelder|CB|23|8000|GER
Matthias Ginter|CB|32|5000|GER
Anthony Jung|CB|34|600|GER
Jordy Makengo|LB|25|10000|COD
Philipp Treu|RB|25|18000|GER
Lukas Kübler|RB|34|1500|GER
Yannik Engelhardt|DM|25|12000|GER
Patrick Osterhage|DM|26|10000|GER
Rihito Yamamoto|DM|24|7000|JPN
Maximilian Eggestein|CM|29|10000|GER
Rouven Tarnutzer|CM|19|500|SUI
Derry Scherhant|LW|23|20000|GER
Vincenzo Grifo|LW|33|4000|ITA
Niklas Beste|RW|27|10000|GER
Cyriaque Irié|RW|21|8000|BFA
Yuito Suzuki|ST|24|28000|JPN
Igor Matanovic|ST|23|30000|CRO
Keisuke Goto|ST|21|10000|JPN
Lucas Höler|ST|32|3000|GER` },
    { id: 'frankfurt', name: 'Айнтрахт Франкфурт', city: 'Франкфурт', stadium: 'Deutsche Bank Park', cap: 60100, colors: ['#e1000f', '#000000'], players: `
Noah Atubolu|GK|24|18000|GER
Kauã Santos|GK|23|3000|BRA
Amil Siljevic|GK|19|400|BIH
Jens Grahl|GK|38|200|GER
Nnamdi Collins|CB|22|20000|GER
Lilian Brassier|CB|26|10000|FRA
Otávio|CB|20|3000|BRA
Jeremiaha Maluze|CB|21|2500|GER
Keita Kosugi|LB|20|7000|JPN
Elias Baum|RB|20|7000|GER
Timothy Chandler|RB|36|350|USA
Raphael Onyedika|DM|25|17000|NGA
Noël Aséko|DM|20|12000|GER
Oscar Højlund|CM|21|15000|DEN
Can Uzun|AM|20|45000|TUR
Farès Chaïbi|AM|23|15000|ALG
Love Arrhov|AM|18|5000|SWE
Mario Götze|AM|34|3000|GER
Ritsu Doan|RW|28|17000|JPN
Ansgar Knauff|RW|24|15000|GER
Ayoube Amaimouni-Echghouyab|RW|21|10000|MAR
Jonathan Burkardt|ST|26|30000|GER
Younes Ebnoutalib|ST|23|18000|GER
Malik Pimpong|ST|18|4000|DEN` },
    { id: 'augsburg', name: 'Аугсбург', city: 'Аугсбург', stadium: 'WWK Arena', cap: 30662, colors: ['#ba3733', '#46714d'], players: `
Finn Dahmen|GK|28|12000|GER
Nediljko Labrovic|GK|27|2000|CRO
Tom Wisbereit|GK|18|200|GER
Chrislain Matsima|CB|24|25000|FRA
Juma Bah|CB|20|10000|SLE
Calvin Brackelmann|CB|27|4000|GER
Hennes Behrens|LB|21|8000|GER
Young-woo Seol|RB|27|6500|KOR
Marius Wolf|RB|31|2500|GER
Robin Fellhauer|DM|28|4000|GER
Yannik Keitel|DM|26|2000|GER
Tim Schnitzer|DM|18|500|GER
Han-Noah Massengo|CM|25|10000|FRA
Anton Kade|AM|22|15000|GER
Fabian Rieder|AM|24|15000|SUI
Mert Kömür|AM|21|12000|GER
Arijon Ibrahimovic|LW|20|10000|GER
Faik Sakar|LW|18|200|GER
Rodrigo Ribeiro|ST|21|5000|POR
Uchenna Ogundu|ST|20|4000|NGA
Michael Gregoritsch|ST|32|1500|AUT` },
    { id: 'mainz', name: 'Майнц', city: 'Майнц', stadium: 'MEWA ARENA', cap: 34034, colors: ['#c3141e', '#ffffff'], players: `
Alexander Schwolow|GK|34|450|GER
Maximilian Kinzig|GK|22|150|GER
Kacper Potulski|CB|19|18000|POL
Stefan Posch|CB|29|6000|AUT
Fabio Gruber|CB|24|5000|PER
Danny da Costa|CB|33|1200|GER
Stefan Bell|CB|35|600|GER
Phillipp Mwene|LB|32|1500|AUT
Rael Nakuzola|LB|19|500|GER
Anthony Caci|RB|29|7000|FRA
Kaishu Sano|DM|25|40000|JPN
Eric Martel|DM|24|8000|GER
Lennard Maloney|DM|27|2500|USA
Sota Kawasaki|DM|25|2000|JPN
Paul Nebel|AM|24|18000|GER
Nadiem Amiri|AM|29|17000|GER
Jae-sung Lee|AM|34|2000|KOR
Sheraldo Becker|LW|31|2000|SUR
Benedict Hollerbach|ST|25|8000|GER
Phillip Tietz|ST|29|5000|GER
Ransford Königsdörffer|ST|25|5000|GHA
Alynho Haidara|ST|18|500|CIV` },
    { id: 'union', name: 'Унион Берлин', city: 'Берлин', stadium: 'Stadion An der Alten Försterei', cap: 22467, colors: ['#eb1923', '#ffffff'], players: `
Frederik Rönnow|GK|34|2000|DEN
Matheo Raab|GK|27|800|GER
Carl Klaus|GK|32|350|GER
Leopold Querfeld|CB|22|17000|AUT
Zeno Van Den Bosch|CB|23|6000|BEL
Felix Uduokhai|CB|29|2500|GER
Marvin Friedrich|CB|30|1800|GER
Tom Rothe|LB|21|10000|GER
Derrick Köhn|LB|27|4000|GHA
Aljoscha Kemlein|DM|22|12000|GER
Rani Khedira|DM|32|2000|TUN
András Schäfer|CM|27|4500|HUN
Michel Aebischer|CM|29|4000|SUI
Janik Haberer|CM|32|2000|GER
Kastriot Imeri|LW|26|2000|SUI
Robert Skov|LW|30|1500|DEN
Woo-yeong Jeong|AM|27|3500|KOR
Livan Burcu|LW|22|4000|TUR
Linus Güther|LW|16|1000|GER
Julien Friedrich|LW|19|125|GER
Emmanuel Latte Lath|ST|27|10000|CIV
Oliver Burke|ST|29|3000|SCO
Marin Ljubicic|ST|24|2000|CRO
Tim Skarke|ST|30|1500|GER
Mekhi Gray|ST|19|500|JAM` },
    { id: 'gladbach', name: 'Боруссия Мёнхенгладбах', city: 'Мёнхенгладбах', stadium: 'ista-Borussia-Park', cap: 54057, colors: ['#ffffff', '#000000'], players: `
Moritz Nicolas|GK|29|8000|GER
Jan Olschowsky|GK|24|450|GER
Daniel Batz|GK|35|350|GER
Tobias Sippel|GK|38|300|GER
Fabio Chiarodia|CB|21|3000|ITA
Lukas Ullrich|LB|22|6000|GER
David Herold|LB|23|4000|GER
Юхым Конопля|RB|27|5000|UKR
Joe Scally|RB|23|5000|USA
Daiki Hashioka|RB|27|1500|JPN
Philipp Sander|DM|28|4000|GER
Zento Uno|DM|22|1000|JPN
Mathieu Nguefack|CM|18|3000|GER
Florian Neuhaus|CM|29|2500|GER
Wael Mohya|AM|17|17000|GER
Kevin Stöger|AM|33|1800|AUT
Hugo Bolin|LW|23|7500|SWE
Robin Hack|LW|28|5000|GER
Shuto Machino|ST|27|3000|JPN
Iaia Manco Danfa|ST|19|250|GNB` },
    { id: 'hamburg', name: 'Гамбург', city: 'Гамбург', stadium: 'Volksparkstadion', cap: 57000, colors: ['#ffffff', '#0a3f86'], players: `
Sander Tangvik|GK|23|2500|NOR
Daniel Heuer Fernandes|GK|33|1200|POR
Fernando Dickes|GK|19|300|GER
Elias Lahti|GK|17|500|FIN
Nicolás Capaldo|CB|28|8000|ARG
Sebastiaan Bornauw|CB|27|6000|BEL
Warmed Omari|CB|26|4000|COM
Jordan Torunarigha|CB|29|4000|NGA
Shafiq Nandja|CB|19|1500|GER
David Møller Wolfe|LB|24|12000|NOR
Louis Lemke|LB|17|5000|GER
Miro Muheim|LB|28|4000|SUI
Zakaria El Ouahdi|RB|24|12000|MAR
Kofi Amoako|DM|21|4000|GER
Albert Sambi Lokonga|CM|27|12000|BEL
Bilal Nadir|CM|22|8000|MAR
Bakery Jatta|RW|28|1000|GAM
Fábio Vieira|AM|26|15000|POR
Martin Adeline|AM|22|8000|FRA
Albert Grønbaek|AM|25|7000|DEN
Immanuel Pherai|AM|25|1200|SUR
Alexander Røssing-Lelesiit|LW|19|5000|NOR
Terem Moffi|ST|27|5000|NGA
Otto Stange|ST|19|5000|GER
Patson Daka|ST|28|3000|ZAM
Yussuf Poulsen|ST|32|1000|DEN` },
    { id: 'koln', name: 'Кёльн', city: 'Кёльн', stadium: 'RheinEnergieSTADION', cap: 50076, colors: ['#ffffff', '#ed1c24'], players: `
Ron-Robert Zieler|GK|37|500|GER
Martin James|GK|18|400|FRA
Matthias Köbbing|GK|29|100|GER
Jahmai Simpson-Pusey|CB|20|9000|ENG
Лука Лочошвили|CB|28|4500|GEO
Joël Schmied|CB|28|2500|SUI
Gideon Mensah|LB|28|4000|GHA
Borna Sosa|LB|28|3000|CRO
Sebastian Sebulonsen|RB|26|5500|NOR
Alessio Castro-Montes|RB|29|2500|BEL
Tom Krauß|DM|25|4500|GER
Paul Okon-Engstler|DM|21|2000|AUS
Ísak Jóhannesson|CM|23|8000|ISL
Gil Neves|CM|18|400|POR
Said El Mala|LW|20|50000|GER
Reigan Heskey|LW|18|2000|ENG
Marius Bülter|LW|33|1800|GER
Mikey Moore|RW|19|18000|ENG
Jan Thielmann|RW|24|3000|GER
Linton Maina|RW|27|3000|GER
Luca Waldschmidt|ST|30|2000|GER
Malek El Mala|ST|21|250|GER` },
    { id: 'werder', name: 'Вердер', city: 'Бремен', stadium: 'Weserstadion', cap: 42100, colors: ['#1d9053', '#ffffff'], players: `
Karl Hein|GK|24|4000|EST
Alexander Schlager|GK|30|1500|AUT
Markus Kolke|GK|36|300|GER
Stefan Smarkalev|GK|19|150|BUL
Oskar Wójcik|CB|23|5000|POL
Amos Pieper|CB|28|4000|GER
Mick Schmetgens|CB|19|3000|GER
Olivier Deman|LB|26|5000|BEL
Arthur|RB|23|8000|BRA
Mitchell Weiser|RB|32|3000|GER
Senne Lynen|DM|27|8000|BEL
Youri Regeer|DM|23|5000|NED
Dariusz Stalmach|DM|20|2500|POL
Ludovit Reis|CM|26|3000|NED
Chuki|AM|22|10000|ESP
Darwin Soylu|AM|19|500|TUR
Marco Grüll|LW|28|5000|AUT
Eren Dinkçi|RW|24|6000|TUR
Paul Erevbenagie|RW|19|1500|GER
Niclas Füllkrug|ST|33|3500|GER
Kenny Quetant|ST|20|3000|HAI
Cedric Itten|ST|29|1800|SUI` },
    { id: 'schalke', name: 'Шальке 04', city: 'Гельзенкирхен', stadium: 'VELTINS-Arena', cap: 62278, colors: ['#004d9d', '#ffffff'], players: `
Loris Karius|GK|33|1200|GER
Kevin Müller|GK|35|300|GER
Mertcan Ayhan|CB|20|8000|TUR
Hasan Kuruçay|CB|29|2500|TUR
Nikola Katic|CB|30|2000|BIH
Timo Becker|CB|29|1500|GER
Robin Gosens|LB|32|4000|GER
Vitalie Becker|LB|21|3000|GER
Adrian Gantenbein|RB|25|900|SUI
Satoshi Tanaka|DM|24|4000|JPN
Luca Vozar|DM|19|800|GER
Soufiane El-Faouzi|CM|24|12000|MAR
Janik Bachmann|CM|30|500|GER
Junior Dina Ebimbe|RW|25|4000|CMR
Finn Porath|RW|29|800|GER
Adil Aouchiche|AM|24|7000|ALG
Hee-chan Hwang|ST|30|3000|KOR
Junior Adamu|ST|25|2000|AUT
Edin Dzeko|ST|40|1000|BIH
Bryan Lasme|ST|27|600|FRA` },
    { id: 'elversberg', name: 'Эльферсберг', city: 'Шписен-Эльферсберг', stadium: 'URSAPHARM-Arena an der Kaiserlinde', cap: 11150, colors: ['#000000', '#ffffff'], players: `
Nicolas Kristof|GK|26|2500|AUT
Tim Boss|GK|33|200|GER
Frank Lehmann|GK|37|100|GER
Elias Etringer|GK|18|500|GER
Luca Sirch|CB|27|2200|GER
Maximilian Rohr|CB|31|1000|GER
Florian Le Joncour|CB|31|500|FRA
Lasse Günther|LB|23|4000|GER
Nicholas Mickelson|LB|27|1000|THA
Jan Gyamerah|RB|31|900|GHA
Felix Keidel|DM|23|5000|GER
Lukasz Poreba|DM|26|4000|POL
Amara Condé|DM|29|900|GER
Frederik Schmahl|CM|23|750|GER
Maurice Krattenmacher|LW|21|5000|GER
Lukas Petkov|RW|25|4500|BUL
Raif Adam|RW|21|500|GER
David Mokwa|ST|22|7000|FRA
Noel Futkeu|ST|23|6000|GER
Luca Pfeiffer|ST|30|500|GER
Luca Schnellbacher|ST|32|500|GER` },
    { id: 'paderborn', name: 'Падерборн', city: 'Падерборн', stadium: 'Home Deluxe Arena', cap: 15306, colors: ['#005ca9', '#000000'], players: `
Nahuel Noll|GK|23|2500|GER
Markus Schubert|GK|28|500|GER
Florian Pruhs|GK|20|150|GER
Mattes Hansen|CB|22|2500|GER
Tjark Scheller|CB|24|2500|GER
Jano ter Horst|CB|24|1800|GER
Jonah Sticker|CB|22|750|GER
Tristan Zobel|CB|23|225|GER
Santiago Castañeda|DM|21|6000|USA
Tom Baack|DM|27|600|GER
Laurin Ulrich|CM|21|4000|GER
Luka Duric|CM|23|800|BIH
Laurin Curda|RW|24|5000|GER
Ruben Müller|RW|21|1000|GER
Clemens Lippmann|RW|20|1000|GER
Raphael Obermair|LW|30|1200|PHI
Niklas Mohr|LW|22|500|GER
Deniz Zeitler|LW|19|4000|GER
Gabriel Vidovic|LW|22|3000|CRO
Albert Millgramm|LW|21|150|GER
Rayan Philippe|RW|26|4000|FRA
Sven Michel|RW|36|300|GER
Marvin Pieringer|ST|27|3000|GER
Stefano Marino|ST|22|1500|GER
Steffen Tigges|ST|28|700|GER` },
  ],
});
