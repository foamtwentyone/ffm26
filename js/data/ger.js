// Бундеслига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ger', name: 'Бундеслига', short: 'Бундеслига', country: 'GER', tier: 1, weekday: 6,
  autumn: { from: '08-22', rounds: 17 }, spring: { from: '01-09', rounds: 17 },
  ticket: 32, prize: [35000, 33350, 31700, 30050, 28400, 26750, 25100, 23450, 21800, 20200, 18550, 16900, 15250, 13600, 11950, 10300, 8650, 7000],
  teams: [
    { id: 'bayern', name: 'Бавария', city: 'Мюнхен', stadium: 'Allianz Arena', cap: 75024, colors: ['#dc052d', '#ffffff'], players: `
Jonas Urbig|GK|23|18000|GER|2029
Manuel Neuer|GK|40|4000|GER|2027
Sven Ulreich|GK|38|500|GER|2027
Dayot Upamecano|CB|27|75000|FRA|2030
Jonathan Tah|CB|30|28000|GER|2029
Min-jae Kim|CB|29|20000|KOR|2028
Hiroki Ito|CB|27|18000|JPN|2028
Nathaniel Brown|LB|23|50000|GER|2031
Alphonso Davies|LB|25|45000|CAN|2030
Josip Stanisic|RB|26|40000|CRO|2029
Konrad Laimer|RB|29|32000|AUT|2029
Sacha Boey|RB|26|7000|FRA|2028
Aleksandar Pavlovic|DM|22|90000|GER|2029
Joshua Kimmich|DM|31|35000|GER|2029
Tom Bischof|CM|21|45000|GER|2029
Bara Sapoko Ndiaye|CM|18|8000|SEN|2031
Jamal Musiala|AM|23|80000|GER|2030
Lennart Karl|AM|18|60000|GER|2029
Ismael Saibari|AM|25|55000|MAR|2031
Luis Díaz|LW|29|70000|COL|2029
Michael Olise|RW|24|180000|FRA|2029
Serge Gnabry|ST|31|18000|GER|2028
Harry Kane|ST|33|60000|ENG|2027` },
    { id: 'dortmund', name: 'Боруссия Дортмунд', city: 'Дортмунд', stadium: 'SIGNAL IDUNA PARK', cap: 81365, colors: ['#fde100', '#000000'], players: `
Gregor Kobel|GK|28|40000|SUI|2028
Alexander Meyer|GK|35|500|GER|2027
Patrick Drewes|GK|33|300|GER|2027
Silas Ostrzinski|GK|22|200|GER|2027
Nico Schlotterbeck|CB|26|55000|GER|2031
Joane Gadou|CB|19|28000|FRA|2031
Waldemar Anton|CB|30|18000|GER|2028
Luca Reggiani|CB|18|10000|ITA|2029
Ramy Bensebaini|CB|31|7000|ALG|2027
Filippo Mane|CB|21|5000|ITA|2028
Emre Can|CB|32|3000|GER|2027
Daniel Svensson|LB|24|22000|SWE|2029
Kauã Prates|LB|18|10000|BRA|2031
Julian Ryerson|RB|28|25000|NOR|2028
Mussa Kaba|DM|17|200|GER|2031
Felix Nmecha|CM|26|65000|GER|2030
Jobe Bellingham|CM|21|40000|ENG|2030
Joey Veerman|CM|27|25000|NED|2031
Carney Chukwuemeka|CM|23|17000|AUT|2030
Marcel Sabitzer|CM|32|6000|AUT|2027
Enzo dos Santos|CM|17|1500|LUX|2029
Ethan Nwaneri|AM|19|35000|ENG|2027
Konstantinos Karetsas|AM|18|35000|GRE|2031
Giannis Konstantelias|AM|23|22000|GRE|2031
Justin Lerma|AM|18|3200|ECU|2031
Mathis Albert|LW|17|5000|USA|2027
Samuele Inácio|ST|18|20000|ITA|2029
Maximilian Beier|ST|24|35000|GER|2029
Serhou Guirassy|ST|30|32000|GUI|2028
Fábio Silva|ST|24|22000|POR|2030` },
    { id: 'leipzig', name: 'РБ Лейпциг', city: 'Лейпциг', stadium: 'Red Bull Arena', cap: 47800, colors: ['#ffffff', '#dd0741'], players: `
Maarten Vandevoordt|GK|24|15000|BEL|2030
Ørjan Nyland|GK|36|800|NOR|2028
Leopold Zingerle|GK|32|300|GER|2028
Castello Lukeba|CB|23|50000|FRA|2029
Maxime Estève|CB|24|28000|FRA|2031
Abdoul Koné|CB|21|15000|FRA|2031
Willi Orbán|CB|33|5000|HUN|2027
Lukas Klostermann|CB|30|3500|GER|2028
David Raum|LB|28|25000|GER|2027
Max Finkgräfe|LB|22|5000|GER|2030
Ridle Baku|RB|28|12000|GER|2027
Benjamin Henrichs|RB|29|7000|GER|2028
Nicolas Seiwald|DM|25|25000|AUT|2028
Benno Kaltefleiter|DM|18|500|GER|2029
Neil El Aynaoui|CM|25|30000|MAR|2027
Ezechiel Banzuzi|CM|21|22000|COD|2030
Assan Ouédraogo|CM|20|22000|GER|2029
Rocco Reitz|CM|24|20000|GER|2031
Christoph Baumgartner|AM|27|40000|AUT|2028
Brajan Gruda|AM|22|28000|GER|2027
Andrija Maksimovic|AM|19|9000|SRB|2030
Viggo Gebel|AM|18|350|GER|2028
Antonio Nusa|LW|21|45000|NOR|2029
Tidiam Gomis|LW|20|15000|FRA|2029
Johan Bakayoko|RW|23|20000|BEL|2030
Rômulo|ST|24|30000|BRA|2030
Christopher Nkunku|ST|28|25000|FRA|2027
Marc Guiu|ST|20|12000|ESP|2031
Samba Konaté|ST|17|5000|FRA|2028` },
    { id: 'stuttgart', name: 'Штутгарт', city: 'Штутгарт', stadium: 'MHPArena', cap: 60469, colors: ['#ffffff', '#e32219'], players: `
Dennis Seimen|GK|20|10000|GER|2029
Fabian Bredlow|GK|31|1000|GER|2027
Marius Funk|GK|30|300|GER|2028
Stefan Drljaca|GK|27|300|GER|2027
Finn Jeltsch|CB|20|35000|GER|2030
Ramon Hendriks|CB|25|25000|NED|2028
Jeff Chabot|CB|28|15000|GER|2028
Luca Jaquez|CB|23|10000|SUI|2029
Ameen Al-Dakhil|CB|24|3000|BEL|2028
Dan-Axel Zagadou|CB|27|2000|FRA|2027
Maximilian Mittelstädt|LB|29|18000|GER|2028
Josha Vagnoman|RB|25|12000|GER|2028
Lorenz Assignon|RB|26|9000|FRA|2029
Leonidas Stergiou|RB|24|2000|SUI|2028
Angelo Stiller|DM|25|45000|GER|2028
Atakan Karazor|DM|30|5000|TUR|2028
Nikolas Nartey|CM|26|10000|DEN|2028
Yanik Spalt|CM|19|4000|AUT|2028
Grischa Prömel|CM|31|3500|GER|2029
Ertugrul Yigit|CM|17|750|GER|2029
Bilal El Khannouss|AM|22|35000|MAR|2030
Jarzinho Malanga|AM|20|1400|GER|2028
Leo Sauer|LW|20|15000|SVK|2031
Chris Führich|LW|28|12000|GER|2028
Justin Diehl|LW|21|1200|GER|2029
Jamie Leweling|RW|25|40000|GER|2029
Tiago Tomás|RW|24|15000|POR|2029
Dzenan Pejcinovic|ST|21|25000|GER|2031
Ermedin Demirovic|ST|28|22000|BIH|2028
Deniz Undav|ST|30|22000|GER|2029` },
    { id: 'hoffenheim', name: 'Хоффенхайм', city: 'Зинсхайм', stadium: 'SNP Arena', cap: 30164, colors: ['#1c63b7', '#ffffff'], players: `
Oliver Baumann|GK|36|2500|GER|2028
Luca Philipp|GK|25|750|GER
Lúkas Petersson|GK|22|600|ISL
Albian Hajdari|CB|23|25000|KVX|2031
Ozan Kabak|CB|26|15000|TUR|2030
Robin Hranac|CB|26|10000|CZE|2028
Koki Machida|CB|29|6000|JPN|2029
Sean Dulic|CB|21|1200|GER|2030
Mats Rots|LB|20|16000|NED|2031
Bernardo|LB|31|4000|BRA|2027
Valentin Gendrey|RB|26|6000|FRA|2028
Vladimír Coufal|RB|34|2500|CZE|2028
Natnael Abraha|RB|18|1000|GER
Leon Avdullahu|DM|22|30000|KVX|2031
Wouter Burger|DM|25|20000|NED
Cajetan Lenz|DM|20|10000|GER|2031
Luis Engelns|DM|19|2500|GER
Nathan De Cat|CM|18|27000|BEL|2031
Alexander Prass|LW|25|9000|AUT|2028
Bambasé Conté|AM|23|7000|GER
Adam Daghim|RW|21|13000|DEN|2031
Patrick Wimmer|RW|25|12000|AUT|2031
Andrej Kramaric|ST|35|2500|CRO|2028
Fisnik Asllani|ST|24|30000|KVX|2029
Tim Lemperle|ST|24|17000|GER|2031
Adam Hlozek|ST|24|10000|CZE|2029
Max Moerstedt|ST|20|7000|GER|2030` },
    { id: 'leverkusen', name: 'Байер Леверкузен', city: 'Леверкузен', stadium: 'BayArena', cap: 30210, colors: ['#e32221', '#000000'], players: `
Mark Flekken|GK|33|6000|NED|2028
Janis Blaswich|GK|35|700|GER|2027
Niklas Lomb|GK|33|250|GER|2027
Jarell Quansah|CB|23|50000|ENG|2030
Edmond Tapsoba|CB|27|35000|BFA|2031
Facundo Medina|CB|27|22000|ARG|2031
Loïc Badé|CB|26|20000|FRA|2030
Tim Oermann|CB|23|4000|GER|2029
Miguel Gutiérrez|LB|25|27000|ESP|2031
Guéla Doué|RB|24|30000|CIV|2031
Lucas Vázquez|RB|35|1500|ESP|2027
Equi Fernández|DM|24|20000|ARG|2030
Kennet Eichhorn|DM|17|20000|GER|2031
Robert Andrich|DM|32|5000|GER|2028
Aleix García|CM|29|20000|ESP|2029
Ibrahim Maza|AM|20|50000|ALG|2030
Malik Tillman|AM|24|30000|USA|2030
Jonas Hofmann|AM|34|1500|GER|2027
Afonso Moreira|LW|21|30000|POR|2031
Eliesse Ben Seghir|LW|21|20000|MAR|2030
Martin Terrier|LW|29|8000|FRA|2029
Moussa Diaby|RW|27|25000|FRA|2031
Nathan Tella|RW|27|15000|NGA|2031
Montrell Culbreath|RW|19|15000|GER|2031
Christian Kofane|ST|20|40000|CMR|2029
Patrik Schick|ST|30|18000|CZE|2030
Victor Boniface|ST|25|5000|NGA|2028
Ndjicoura Bomba|ST|18|1500|MLI|2030` },
    { id: 'freiburg', name: 'Фрайбург', city: 'Фрайбург', stadium: 'Europa-Park Stadion', cap: 34700, colors: ['#000000', '#ffffff'], players: `
Mio Backhaus|GK|22|15000|GER
Florian Müller|GK|28|1200|GER
Jannik Huth|GK|32|400|GER
Bruno Ogbus|CB|20|12000|SUI
Philipp Lienhart|CB|30|10000|AUT
Max Rosenfelder|CB|23|8000|GER
Matthias Ginter|CB|32|5000|GER
Anthony Jung|CB|34|600|GER|2027
Jordy Makengo|LB|25|10000|COD|2028
Berkay Yılmaz|LB|21|7000|TUR
Christian Günter|LB|33|2000|GER
Philipp Treu|RB|25|18000|GER
Lukas Kübler|RB|34|1500|GER
Yannik Engelhardt|DM|25|12000|GER
Patrick Osterhage|DM|26|10000|GER
Rihito Yamamoto|DM|24|7000|JPN
Maximilian Eggestein|CM|29|10000|GER
Rouven Tarnutzer|CM|19|500|SUI
Derry Scherhant|LW|23|20000|GER
Vincenzo Grifo|LW|33|4000|ITA
Florent Muslija|LW|28|1000|KVX|2028
Niklas Beste|RW|27|10000|GER|2030
Cyriaque Irié|RW|21|8000|BFA
Yuito Suzuki|ST|24|28000|JPN
Igor Matanovic|ST|23|30000|CRO
Keisuke Goto|ST|21|10000|JPN
Lucas Höler|ST|32|3000|GER` },
    { id: 'frankfurt', name: 'Айнтрахт Франкфурт', city: 'Франкфурт', stadium: 'Deutsche Bank Park', cap: 60100, colors: ['#e1000f', '#000000'], players: `
Noah Atubolu|GK|24|18000|GER|2027
Kauã Santos|GK|23|3000|BRA|2030
Amil Siljevic|GK|19|400|BIH|2029
Jens Grahl|GK|38|200|GER|2027
Nnamdi Collins|CB|22|20000|GER|2030
Lilian Brassier|CB|26|10000|FRA|2031
Robin Koch|CB|30|10000|GER|2030
Otávio|CB|20|3000|BRA|2031
Jeremiaha Maluze|CB|21|2500|GER|2031
Keita Kosugi|LB|20|7000|JPN|2031
Elias Baum|RB|20|7000|GER|2028
Timothy Chandler|RB|36|350|USA|2027
Raphael Onyedika|DM|25|17000|NGA|2031
Noël Aséko|DM|20|12000|GER|2031
Oscar Højlund|CM|21|15000|DEN|2029
Can Uzun|AM|20|45000|TUR|2029
Farès Chaïbi|AM|23|15000|ALG|2028
Love Arrhov|AM|18|5000|SWE|2028
Mario Götze|AM|34|3000|GER|2028
Ritsu Doan|RW|28|17000|JPN|2030
Ansgar Knauff|RW|24|15000|GER|2028
Ayoube Amaimouni-Echghouyab|RW|21|10000|MAR|2031
Jonathan Burkardt|ST|26|30000|GER|2030
Younes Ebnoutalib|ST|23|18000|GER|2031
Malik Pimpong|ST|18|4000|DEN|2031
Jessic Ngankam|ST|26|700|GER|2028` },
    { id: 'augsburg', name: 'Аугсбург', city: 'Аугсбург', stadium: 'WWK Arena', cap: 30662, colors: ['#ba3733', '#46714d'], players: `
Finn Dahmen|GK|28|12000|GER|2027
Nediljko Labrovic|GK|27|2000|CRO|2029
Tom Wisbereit|GK|18|200|GER|2030
Chrislain Matsima|CB|24|25000|FRA|2030
Noahkai Banks|CB|19|25000|GER|2029
Juma Bah|CB|20|10000|SLE|2027
Calvin Brackelmann|CB|27|4000|GER|2030
Jeffrey Gouweleeuw|CB|35|1000|NED|2027
Hennes Behrens|LB|21|8000|GER|2031
Young-woo Seol|RB|27|6500|KOR|2030
Marius Wolf|RB|31|2500|GER|2027
Robin Fellhauer|DM|28|4000|GER|2029
Yannik Keitel|DM|26|2000|GER|2027
Tim Breithaupt|DM|24|800|GER|2028
Tim Schnitzer|DM|18|500|GER|2029
Han-Noah Massengo|CM|25|10000|FRA|2030
Sima Suso|CM|21|2800|GER|2031
Anton Kade|AM|22|15000|GER|2029
Fabian Rieder|AM|24|15000|SUI|2030
Mert Kömür|AM|21|12000|GER|2029
Alexis Claude-Maurice|AM|28|12000|FRA|2027
Arijon Ibrahimovic|LW|20|10000|GER|2027
Faik Sakar|LW|18|200|GER|2030
Rodrigo Ribeiro|ST|21|5000|POR|2031
Uchenna Ogundu|ST|20|4000|NGA|2031
Michael Gregoritsch|ST|32|1500|AUT|2027
Steve Mounié|ST|32|1000|BEN|2027` },
    { id: 'mainz', name: 'Майнц', city: 'Майнц', stadium: 'MEWA ARENA', cap: 34034, colors: ['#c3141e', '#ffffff'], players: `
Robin Zentner|GK|31|2500|GER|2028
Alexander Schwolow|GK|34|450|GER
Maximilian Kinzig|GK|22|150|GER
Kacper Potulski|CB|19|18000|POL|2028
Stefan Posch|CB|29|6000|AUT
Fabio Gruber|CB|24|5000|PER|2030
Dominik Kohr|CB|32|2000|GER|2028
Danny da Costa|CB|33|1200|GER|2027
Stefan Bell|CB|35|600|GER|2027
Phillipp Mwene|LB|32|1500|AUT
Rael Nakuzola|LB|19|500|GER
Anthony Caci|RB|29|7000|FRA|2028
Silvan Widmer|RB|33|800|SUI
Kaishu Sano|DM|25|40000|JPN|2028
Eric Martel|DM|24|8000|GER
Lennard Maloney|DM|27|2500|USA|2028
Sota Kawasaki|DM|25|2000|JPN
Paul Nebel|AM|24|18000|GER|2027
Nadiem Amiri|AM|29|17000|GER|2028
Jae-sung Lee|AM|34|2000|KOR
Otto Ruoppi|AM|20|2000|FIN|2030
Sheraldo Becker|LW|31|2000|SUR
Silas|RW|28|2000|COD
Benedict Hollerbach|ST|25|8000|GER|2029
Phillip Tietz|ST|29|5000|GER|2028
Ransford Königsdörffer|ST|25|5000|GHA
Alynho Haidara|ST|18|500|CIV` },
    { id: 'union', name: 'Унион Берлин', city: 'Берлин', stadium: 'Stadion An der Alten Försterei', cap: 22467, colors: ['#eb1923', '#ffffff'], players: `
Frederik Rönnow|GK|34|2000|DEN
Matheo Raab|GK|27|800|GER
Carl Klaus|GK|32|350|GER
Leopold Querfeld|CB|22|17000|AUT|2027
Zeno Van Den Bosch|CB|23|6000|BEL
Felix Uduokhai|CB|29|2500|GER
Stanley Nsoki|CB|27|2000|FRA
Marvin Friedrich|CB|30|1800|GER
Tom Rothe|LB|21|10000|GER
Derrick Köhn|LB|27|4000|GHA|2029
Andrik Markgraf|LB|20|300|GER
Josip Juranovic|RB|31|2000|CRO
Christopher Trimmel|RB|39|600|AUT|2027
Aljoscha Kemlein|DM|22|12000|GER|2029
Rani Khedira|DM|32|2000|TUN|2027
András Schäfer|CM|27|4500|HUN|2027
Michel Aebischer|CM|29|4000|SUI
Janik Haberer|CM|32|2000|GER|2027
Kastriot Imeri|LW|26|2000|SUI
Robert Skov|LW|30|1500|DEN
Woo-yeong Jeong|AM|27|3500|KOR
Livan Burcu|LW|22|4000|TUR
Linus Güther|LW|16|1000|GER|2028
Julien Friedrich|LW|19|125|GER
Emmanuel Latte Lath|ST|27|10000|CIV|2027
Andrej Ilic|ST|26|9000|SRB
Oliver Burke|ST|29|3000|SCO|2029
Marin Ljubicic|ST|24|2000|CRO
Tim Skarke|ST|30|1500|GER
Mekhi Gray|ST|19|500|JAM` },
    { id: 'gladbach', name: 'Боруссия Мёнхенгладбах', city: 'Мёнхенгладбах', stadium: 'ista-Borussia-Park', cap: 54057, colors: ['#ffffff', '#000000'], players: `
Moritz Nicolas|GK|29|8000|GER|2029
Jan Olschowsky|GK|24|450|GER|2027
Daniel Batz|GK|35|350|GER|2029
Tobias Sippel|GK|38|300|GER|2027
Kevin Diks|CB|30|5000|IDN|2030
Ko Itakura|CB|29|4000|JPN|2030
Fabio Chiarodia|CB|21|3000|ITA|2028
Jan Leszczyński|CB|19|3000|POL|2030
Lukas Ullrich|LB|22|6000|GER|2029
David Herold|LB|23|4000|GER|2030
Юхым Конопля|RB|27|5000|UKR|2029
Joe Scally|RB|23|5000|USA|2027
Daiki Hashioka|RB|27|1500|JPN|2027
Philipp Sander|DM|28|4000|GER|2028
Zento Uno|DM|22|1000|JPN|2030
Jens Castrop|CM|23|10000|KOR|2029
Enzo Leopold|CM|26|4000|GER|2030
Mathieu Nguefack|CM|18|3000|GER|2029
Florian Neuhaus|CM|29|2500|GER|2027
Wael Mohya|AM|17|17000|GER
Kevin Stöger|AM|33|1800|AUT|2027
Fritz Fleck|AM|19|300|GER|2028
Hugo Bolin|LW|23|7500|SWE|2030
Robin Hack|LW|28|5000|GER|2029
Nicolas Kühn|RW|26|10000|GER|2027
Franck Honorat|RW|30|7000|FRA|2029
Tim Kleindienst|ST|31|8000|GER|2029
Isac Lidberg|ST|28|5000|SWE|2030
Shuto Machino|ST|27|3000|JPN|2029
Iaia Manco Danfa|ST|19|250|GNB|2028` },
    { id: 'hamburg', name: 'Гамбург', city: 'Гамбург', stadium: 'Volksparkstadion', cap: 57000, colors: ['#ffffff', '#0a3f86'], players: `
Sander Tangvik|GK|23|2500|NOR|2030
Daniel Heuer Fernandes|GK|33|1200|POR|2028
Fernando Dickes|GK|19|300|GER|2028
Elias Lahti|GK|17|500|FIN|2028
Nicolás Capaldo|CB|28|8000|ARG|2028
Sebastiaan Bornauw|CB|27|6000|BEL|2027
Warmed Omari|CB|26|4000|COM|2030
Jordan Torunarigha|CB|29|4000|NGA|2028
Shafiq Nandja|CB|19|1500|GER|2030
Mario Vuskovic|CB|24|500|CRO|2027
David Møller Wolfe|LB|24|12000|NOR|2027
Louis Lemke|LB|17|5000|GER|2028
Miro Muheim|LB|28|4000|SUI|2027
Zakaria El Ouahdi|RB|24|12000|MAR|2031
Nicolai Remberg|DM|26|9000|GER|2028
Kofi Amoako|DM|21|4000|GER|2030
Albert Sambi Lokonga|CM|27|12000|BEL|2028
Bilal Nadir|CM|22|8000|MAR|2029
Bakery Jatta|RW|28|1000|GAM|2029
Fábio Vieira|AM|26|15000|POR|2030
Martin Adeline|AM|22|8000|FRA|2030
Albert Grønbaek|AM|25|7000|DEN|2030
Immanuel Pherai|AM|25|1200|SUR|2027
Alexander Røssing-Lelesiit|LW|19|5000|NOR|2030
Terem Moffi|ST|27|5000|NGA|2029
Otto Stange|ST|19|5000|GER|2028
Patson Daka|ST|28|3000|ZAM|2027
Yussuf Poulsen|ST|32|1000|DEN|2027` },
    { id: 'koln', name: 'Кёльн', city: 'Кёльн', stadium: 'RheinEnergieSTADION', cap: 50076, colors: ['#ffffff', '#ed1c24'], players: `
Marvin Schwäbe|GK|31|3000|GER|2027
Ron-Robert Zieler|GK|37|500|GER|2027
Martin James|GK|18|400|FRA|2029
Matthias Köbbing|GK|29|100|GER|2027
Jahmai Simpson-Pusey|CB|20|9000|ENG|2030
Rav van den Berg|CB|22|5000|NED|2030
Лука Лочошвили|CB|28|4500|GEO|2029
Joël Schmied|CB|28|2500|SUI|2029
Timo Hübers|CB|30|1500|GER|2027
Gideon Mensah|LB|28|4000|GHA|2028
Borna Sosa|LB|28|3000|CRO|2027
Sebastian Sebulonsen|RB|26|5500|NOR|2028
Alessio Castro-Montes|RB|29|2500|BEL|2028
Tom Krauß|DM|25|4500|GER|2029
Ellyes Skhiri|DM|31|2500|TUN|2028
Paul Okon-Engstler|DM|21|2000|AUS|2030
Ísak Jóhannesson|CM|23|8000|ISL|2030
Gil Neves|CM|18|400|POR|2029
Said El Mala|LW|20|50000|GER|2031
Reigan Heskey|LW|18|2000|ENG|2031
Marius Bülter|LW|33|1800|GER|2027
Mikey Moore|RW|19|18000|ENG|2027
Jan Thielmann|RW|24|3000|GER|2028
Linton Maina|RW|27|3000|GER
Ragnar Ache|ST|28|9000|GER|2029
Thijs Dallinga|ST|26|9000|NED|2027
Luca Waldschmidt|ST|30|2000|GER|2027
Imad Rondic|ST|27|750|BIH|2029
Malek El Mala|ST|21|250|GER|2031` },
    { id: 'werder', name: 'Вердер', city: 'Бремен', stadium: 'Weserstadion', cap: 42100, colors: ['#1d9053', '#ffffff'], players: `
Karl Hein|GK|24|4000|EST|2030
Alexander Schlager|GK|30|1500|AUT|2029
Markus Kolke|GK|36|300|GER
Stefan Smarkalev|GK|19|150|BUL|2027
Marco Friedl|CB|28|10000|AUT|2028
Oskar Wójcik|CB|23|5000|POL|2031
Amos Pieper|CB|28|4000|GER
Mick Schmetgens|CB|19|3000|GER|2029
Niklas Stark|CB|31|2000|GER
Olivier Deman|LB|26|5000|BEL|2028
Moussa Ndiaye|LB|24|4000|SEN|2027
Felix Agu|LB|27|3500|NGA|2027
Arthur|RB|23|8000|BRA|2027
Mitchell Weiser|RB|32|3000|GER|2027
Senne Lynen|DM|27|8000|BEL|2030
Youri Regeer|DM|23|5000|NED|2027
Dariusz Stalmach|DM|20|2500|POL
Skelly Alvero|DM|24|1000|FRA|2028
Jens Stage|CM|29|10000|DEN|2028
Ludovit Reis|CM|26|3000|NED|2029
Chuki|AM|22|10000|ESP|2030
Darwin Soylu|AM|19|500|TUR
Marco Grüll|LW|28|5000|AUT
Eren Dinkçi|RW|24|6000|TUR|2027
Justin Njinmah|RW|25|5000|GER|2028
Paul Erevbenagie|RW|19|1500|GER
Niclas Füllkrug|ST|33|3500|GER|2027
Keke Topp|ST|22|3000|GER|2028
Kenny Quetant|ST|20|3000|HAI|2030
Salim Musah|ST|20|2000|GER|2028
Cedric Itten|ST|29|1800|SUI|2029` },
    { id: 'schalke', name: 'Шальке 04', city: 'Гельзенкирхен', stadium: 'VELTINS-Arena', cap: 62278, colors: ['#004d9d', '#ffffff'], players: `
Loris Karius|GK|33|1200|GER|2028
Kevin Müller|GK|35|300|GER
Johannes Siebeking|GK|20|125|GER|2029
Mertcan Ayhan|CB|20|8000|TUR|2030
Maximilian Wöber|CB|28|3000|AUT|2027
Hasan Kuruçay|CB|29|2500|TUR|2027
Nikola Katic|CB|30|2000|BIH|2028
Timo Becker|CB|29|1500|GER|2029
Robin Gosens|LB|32|4000|GER|2027
Vitalie Becker|LB|21|3000|GER|2030
Adrian Gantenbein|RB|25|900|SUI|2028
Satoshi Tanaka|DM|24|4000|JPN|2030
Dejan Ljubicic|DM|29|3000|AUT|2028
Ron Schallenberg|DM|28|2000|GER|2027
Luca Vozar|DM|19|800|GER|2029
Soufiane El-Faouzi|CM|24|12000|MAR|2030
Janik Bachmann|CM|30|500|GER|2027
Junior Dina Ebimbe|RW|25|4000|CMR|2028
Finn Porath|RW|29|800|GER|2027
Adil Aouchiche|AM|24|7000|ALG|2030
Kenan Karaman|AM|32|1800|TUR|2028
Moussa Sylla|ST|26|5000|MLI|2028
Hee-chan Hwang|ST|30|3000|KOR|2027
Junior Adamu|ST|25|2000|AUT|2029
Edin Dzeko|ST|40|1000|BIH|2027
Bryan Lasme|ST|27|600|FRA|2027
Emil Højlund|ST|21|500|DEN|2028` },
    { id: 'elversberg', name: 'Эльферсберг', city: 'Шписен-Эльферсберг', stadium: 'URSAPHARM-Arena an der Kaiserlinde', cap: 11150, colors: ['#000000', '#ffffff'], players: `
Nicolas Kristof|GK|26|2500|AUT|2029
Tim Boss|GK|33|200|GER|2027
Frank Lehmann|GK|37|100|GER|2027
Elias Etringer|GK|18|500|GER|2029
Lukas Pinckert|CB|26|2500|GER|2028
Luca Sirch|CB|27|2200|GER|2029
Maximilian Rohr|CB|31|1000|GER|2028
Florian Le Joncour|CB|31|500|FRA|2027
Luis Seifert|CB|22|200|GER|2028
Lasse Günther|LB|23|4000|GER|2030
Nicholas Mickelson|LB|27|1000|THA|2027
Jan Gyamerah|RB|31|900|GHA|2027
Felix Keidel|DM|23|5000|GER|2028
Lukasz Poreba|DM|26|4000|POL|2029
Amara Condé|DM|29|900|GER|2028
Frederik Schmahl|CM|23|750|GER|2027
Francis Onyeka|AM|19|12000|GER|2027
Noah Darvich|AM|20|5000|GER|2027
Maurice Krattenmacher|LW|21|5000|GER|2030
Tom Zimmerschied|LW|28|1500|GER|2029
Cole Campbell|RW|20|6000|USA|2030
Lukas Petkov|RW|25|4500|BUL|2027
Raif Adam|RW|21|500|GER|2029
David Mokwa|ST|22|7000|FRA|2029
Noel Futkeu|ST|23|6000|GER|2027
Luca Pfeiffer|ST|30|500|GER|2028
Luca Schnellbacher|ST|32|500|GER|2028` },
    { id: 'paderborn', name: 'Падерборн', city: 'Падерборн', stadium: 'Home Deluxe Arena', cap: 15306, colors: ['#005ca9', '#000000'], players: `
Nahuel Noll|GK|23|2500|GER|2027
Markus Schubert|GK|28|500|GER|2028
Florian Pruhs|GK|20|150|GER
Mattes Hansen|CB|22|2500|GER
Tjark Scheller|CB|24|2500|GER
Felix Götze|CB|28|2000|GER
Jano ter Horst|CB|24|1800|GER
Marcel Hoffmeier|CB|27|800|GER|2028
Jonah Sticker|CB|22|750|GER
Nyamekye Awortwie-Grant|CB|26|400|GER
Tristan Zobel|CB|23|225|GER|2028
Santiago Castañeda|DM|21|6000|USA
Tom Baack|DM|27|600|GER
Laurin Ulrich|CM|21|4000|GER|2027
Sebastian Klaas|CM|28|900|GER
Luka Duric|CM|23|800|BIH
Timur Gayret|CM|28|450|GER|2029
Laurin Curda|RW|24|5000|GER
Ruben Müller|RW|21|1000|GER
Clemens Lippmann|RW|20|1000|GER
Raphael Obermair|LW|30|1200|PHI|2027
Niklas Mohr|LW|22|500|GER|2028
Deniz Zeitler|LW|19|4000|GER|2027
Gabriel Vidovic|LW|22|3000|CRO
Oliver Batista Meier|LW|25|1500|GER
Albert Millgramm|LW|21|150|GER
Rayan Philippe|RW|26|4000|FRA|2027
Sven Michel|RW|36|300|GER|2027
Marvin Pieringer|ST|27|3000|GER
Stefano Marino|ST|22|1500|GER
Steffen Tigges|ST|28|700|GER|2027
Lasse Eickel|ST|18|150|GER|2031` },
  ],
});
