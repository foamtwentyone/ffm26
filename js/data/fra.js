// Лига 1 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'fra', name: 'Лига 1', short: 'Лига 1', country: 'FRA', tier: 1, weekday: 0,
  autumn: { from: '08-16', rounds: 17 }, spring: { from: '01-03', rounds: 17 },
  ticket: 25, prize: [25000, 23800, 22650, 21450, 20300, 19100, 17950, 16750, 15600, 14400, 13250, 12050, 10900, 9700, 8550, 7350, 6200, 5000],
  teams: [
    { id: 'psg', name: 'ПСЖ', city: 'Париж', stadium: 'Parc des Princes', cap: 47929, colors: ['#004170', '#da291c'], players: `
Матвей Сафонов|GK|27|30000|RUS|2029
Lucas Chevalier|GK|24|22000|FRA|2030
Willian Pacho|CB|25|80000|ECU|2031
Илья Забарньи|CB|24|40000|UKR|2030
Lucas Beraldo|CB|22|22000|BRA|2031
Lucas Hernández|LB|30|18000|FRA|2028
Lucas Digne|LB|33|6000|FRA|2029
Achraf Hakimi|RB|27|80000|MAR|2029
Vitinha|DM|26|140000|POR|2029
João Neves|CM|22|140000|POR|2031
Warren Zaïre-Emery|CM|20|80000|FRA|2029
Senny Mayulu|CM|20|40000|FRA|2031
Fabián Ruiz|CM|30|30000|ESP|2028
Dro Fernández|AM|18|15000|ESP|2030
Mika Godts|LW|21|40000|BEL|2031
Quentin Ndjantou|LW|19|6000|FRA|2028
Désiré Doué|RW|21|120000|FRA|2029
Maghnes Akliouche|RW|24|50000|FRA|2031
Ferran Torres|ST|26|55000|ESP|2031` },
    { id: 'lens', name: 'Ланс', city: 'Ланс', stadium: 'Stade Bollaert-Delelis', cap: 41233, colors: ['#ffd600', '#e8222d'], players: `
Robin Risser|GK|21|30000|FRA|2030
Mathieu Gorgelin|GK|36|200|FRA|2027
Régis Gurtner|GK|39|100|FRA|2027
Ilan Jourdren|GK|18|500|FRA|2029
Samson Baidoo|CB|22|25000|AUT|2030
Jean-Clair Todibo|CB|26|22000|FRA|2027
Kyllian Antonio|CB|18|10000|FRA|2028
Nidal Celik|CB|20|7000|BIH|2029
Souleymane Sagnan|CB|21|3000|MLI|2030
Matthieu Udol|LB|30|8000|FRA|2028
Jhoanner Chávez|LB|24|2000|ECU|2028
Saud Abdulhamid|RB|27|9000|KSA|2029
Ruben Aguilar|RB|33|2500|FRA|2028
Yacine Titraoui|CM|23|9000|ALG|2031
Andrija Bulatovic|CM|19|8000|MNE|2030
Michaël Cuisance|CM|27|6000|FRA|2030
Amadou Haidara|CM|28|5000|MLI|2029
Mezian Mesloub|AM|16|8000|POR|2030
Thorgan Hazard|AM|33|2000|BEL|2028
Michal Skoras|LW|26|6000|POL|2031
Junior Kadile|LW|23|5000|COD|2027
Franjo Ivanović|ST|23|15000|CRO|2027
Odsonne Édouard|ST|28|12000|FRA|2028
Florian Sotoca|ST|35|1200|FRA|2027` },
    { id: 'lille', name: 'Лилль', city: 'Лилль', stadium: 'Decathlon Arena - Stade Pierre-Mauroy', cap: 50083, colors: ['#e01e13', '#1a2b4c'], players: `
Berke Özer|GK|26|12000|TUR|2029
Orlando Gill|GK|26|7500|PAR|2031
Nathan Ngoy|CB|23|25000|BEL|2029
Alexsandro|CB|27|15000|BRA|2028
Isaac Cossier|CB|19|2500|FRA|2030
Tanguy Nianzou|CB|24|1200|FRA|2028
Maxima Goffi|CB|18|1000|FRA|2028
Romain Perraud|LB|29|7000|FRA|2028
Calvin Verdonk|LB|29|2500|IDN|2028
Loun Srdanovic|RB|20|3000|SUI|2030
Ngal'ayel Mukau|DM|21|15000|COD|2028
Nabil Bentaleb|DM|31|4500|ALG|2028
Maurits Kjærgaard|CM|23|8000|DEN|2031
Hákon Arnar Haraldsson|AM|23|30000|ISL|2030
Başar Önal|LW|22|10000|TUR|2030
Osame Sahraoui|LW|25|7000|MAR|2029
Soriba Diaoune|LW|19|4000|FRA|2028
Tiago Morais|LW|23|1200|POR|2028
Dilane Bakwa|RW|24|28000|FRA|2027
Gaëtan Perrin|RW|30|5000|FRA|2028
Olivier Giroud|ST|40|900|FRA|2027` },
    { id: 'lyon', name: 'Лион', city: 'Лион', stadium: 'Groupama Stadium', cap: 61556, colors: ['#ffffff', '#da0812'], players: `
Dominik Greif|GK|29|9000|SVK|2029
Rémy Descamps|GK|30|1500|FRA|2029
Justin Bengui|GK|21|250|FRA|2028
Lassine Diarra|GK|23|500|MLI|2028
Moussa Niakhaté|CB|30|15000|SEN|2028
Ruben Kluivert|CB|25|8000|NED|2030
Felix Bacher|CB|25|6000|AUT|2031
Noham Kamara|CB|19|3000|FRA|2030
Clinton Mata|CB|33|2500|ANG|2028
Abner|LB|26|10000|BRA|2029
Zachary Athekame|RB|21|15000|SUI|2027
Steeve Kango|RB|19|1000|FRA|2029
Tyler Morton|DM|23|30000|ENG|2030
Tanner Tessmann|DM|25|10000|USA|2029
Paul Akouokou|DM|28|400|CIV|2027
Mads Bidstrup|CM|25|15000|DEN|2031
Khalis Merah|CM|19|15000|FRA|2029
Pavel Sulc|AM|25|20000|CZE|2029
Noah Nartey|AM|21|15000|DEN|2030
Keito Nakamura|LW|26|12000|JPN|2030
Rémi Himbert|LW|18|8000|FRA|2028
Julien Duranville|LW|20|6000|BEL|2031
Ernest Nuamah|RW|22|12000|GHA|2028
Kaïl Boudache|RW|20|8000|ALG|2031
Loïs Openda|ST|26|25000|BEL|2027
Alejandro Gomes Rodríguez|ST|18|800|ENG|2028` },
    { id: 'marseille', name: 'Марсель', city: 'Марсель', stadium: 'Orange Vélodrome', cap: 67394, colors: ['#ffffff', '#2faee0'], players: `
Jeffrey de Lange|GK|28|2500|NED|2027
Théo Vermot|GK|29|300|FRA|2027
Jelle Van Neck|GK|22|500|BEL|2027
Nayef Aguerd|CB|30|15000|MAR|2030
CJ Egan-Riley|CB|23|9000|ENG|2029
Bamo Meïté|CB|24|7000|CIV|2028
Emerson|LB|32|9000|ITA|2027
Ulisses Garcia|LB|30|3000|SUI|2028
Alexi Koum|LB|20|350|CMR|2029
Kelyann Bezahaf|RB|20|1000|ALG|2028
Pierre-Emile Højbjerg|DM|31|15000|DEN|2028
Tochukwu Nnadi|DM|23|4500|NGA|2030
Geoffrey Kondogbia|DM|33|2500|CTA|2027
Nouhoum Kamissoko|DM|21|200|MLI|2029
Himad Abdelli|CM|26|5000|ALG|2030
Angel Gomes|AM|26|10000|ENG|2028
Igor Paixão|LW|26|35000|BRA|2030
Tadjidine Mmadi|LW|19|1000|FRA|2029
Keyliane Abdallah|RW|20|5000|FRA|2028
Amine Harit|RW|29|5000|MAR|2027
Amine Gouiri|ST|26|30000|ALG|2029
Neal Maupay|ST|30|4000|FRA|2028
Faris Moumbagna|ST|26|3500|CMR|2028` },
    { id: 'rennes', name: 'Ренн', city: 'Ренн', stadium: 'Roazhon Park', cap: 31127, colors: ['#e13327', '#000000'], players: `
Brice Samba|GK|32|7000|FRA|2029
Nicolas Lemaître|GK|29|500|FRA|2028
Kilian Belazzoug|GK|20|500|ALG|2028
Charlie Cresswell|CB|24|25000|ENG|2027
Abdelhamid Ait Boudlal|CB|20|20000|MAR|2028
Anthony Rouault|CB|25|12000|FRA|2029
Gonçalo Oliveira|CB|20|3000|POR|2031
Quentin Merlin|LB|24|15000|FRA|2029
Mahamadou Nagida|LB|21|10000|CMR|2029
Przemyslaw Frankowski|RB|31|6000|POL|2027
Bryan Reynolds|RB|25|4000|USA|2030
Mahdi Camara|CM|28|12000|FRA|2029
Djaoui Cissé|CM|22|10000|FRA|2030
Adrien Thomasson|CM|32|4000|FRA|2029
Ludovic Blas|RW|28|10000|MAR|2027
Sebastian Szymański|AM|27|15000|POL|2029
Henrick Do Marcolino|AM|20|300|GAB|2029
Issa Soumaré|LW|26|8000|SEN|2030
Mousa Al-Tamari|RW|29|10000|JOR|2028
Arnaud Nordin|RW|28|4000|FRA|2029
Elías Legendre Quiñónez|RW|18|1000|ECU|2029
Estéban Lepaul|ST|26|45000|FRA|2030
Eliezer Mayenda|ST|21|18000|ESP|2031
Boulaye Dia|ST|29|5000|SEN|2027` },
    { id: 'monaco', name: 'Монако', city: 'Монако', stadium: 'Stade Louis-II', cap: 18523, colors: ['#e7242a', '#ffffff'], players: `
Philipp Köhn|GK|28|3000|SUI|2028
Lukas Hradecky|GK|36|1500|FIN|2027
Jules Stawiecki|GK|19|150|FRA|2029
Christian Mawissa|CB|21|15000|FRA|2029
Sadibou Sané|CB|22|12000|SEN|2031
Mohammed Salisu|CB|27|10000|GHA|2028
Eric Dier|CB|32|4000|ENG|2028
Samuel Nibombe|CB|19|1000|BEL|2027
Nazinho|LB|23|10000|POR|2030
Vanderson|RB|25|18000|BRA|2028
Jordan Teze|RB|27|15000|NED|2029
Lamine Camara|CM|22|55000|SEN|2029
Mamadou Coulibaly|CM|22|20000|FRA|2028
Pape Cabral|CM|19|5000|FRA|2031
Edan Diop|CM|22|3000|FRA|2028
Anis Soubeir|CM|19|2000|MAR|2028
Александр Головин|AM|30|18000|RUS|2029
Stanis Idumbo|AM|21|10000|COD|2030
Mathys Detourbet|LW|19|20000|FRA|2027
Ansu Fati|LW|23|15000|ESP|2030
Takumi Minamino|LW|31|10000|JPN|2027
Folarin Balogun|ST|25|50000|USA|2028
Matthis Abline|ST|23|25000|FRA|2031
Mika Biereth|ST|23|15000|DEN|2030
Paris Brunner|ST|20|15000|GER|2028` },
    { id: 'strasbourg', name: 'Страсбур', city: 'Страсбург', stadium: 'Stade de la Meinau', cap: 26109, colors: ['#009fe3', '#ffffff'], players: `
Filip Jørgensen|GK|24|15000|DEN|2027
Milosz Piekutowski|GK|20|600|POL|2031
Karim Coulibaly|CB|19|28000|GER|2031
Lucas Høgsberg|CB|20|18000|DEN|2030
Jeyland Mitchell|CB|22|8000|CRC|2031
Hermann Malonga|CB|18|500|FRA|2031
Oso|LB|23|10000|ESP|2031
Mateo Del Blanco|LB|22|5000|ARG|2031
Genesis Antwi|RB|19|3000|SWE|2027
Dário Essugo|DM|21|15000|POR|2027
Diogo Sousa|DM|20|10000|POR|2031
Maxi Oyedele|DM|21|5000|POL|2030
Samir El Mourabet|CM|21|22000|MAR|2030
Pape Demba Diop|CM|23|9000|SEN|2030
Tyrese Noubissie|CM|17|1000|ENG|2028
Giovanni Reyna|AM|23|7000|USA|2031
Omari Kellyman|AM|21|4000|ENG|2031
Benjamin Brantlind|AM|18|2000|SWE|2031
Fábio Baldé|LW|21|5000|POR|2031
Gessime Yassine|RW|20|20000|MAR|2030
Samuel Amo-Ameyaw|RW|20|8000|ENG|2029
Yaya Diémé|RW|19|300|SEN|2030
Conrad Harder|ST|21|17000|DEN|2027
Jacobo Ortega|ST|20|7000|ESP|2031
Deivid Washington|ST|21|5000|BRA|2031
Sékou Mara|ST|24|4000|FRA|2029` },
    { id: 'lorient', name: 'Лорьян', city: 'Лорьян', stadium: 'Stade du Moustoir - Yves Allainmat', cap: 18970, colors: ['#f58113', '#000000'], players: `
Yvon Mvogo|GK|32|2500|SUI|2027
Bingourou Kamara|GK|30|600|SEN|2027
Benjamin Leroy|GK|37|100|FRA|2027
Formose Mendy|CB|25|1500|SEN|2028
Nathaniel Adjei|CB|24|1500|GHA|2028
Nosa Edward Obaretin|CB|23|1500|ITA|2027
Isaak Touré|CB|23|1200|FRA|2028
Arsène Kouassi|LB|22|15000|BFA|2029
Srdjan Kuzmic|LB|22|3000|SVN|2030
Alec Georgen|RB|28|1500|FRA|2029
Dembo Sylla|RB|23|1500|GUI|2028
Arthur Avom|CM|21|20000|CMR|2027
Noah Cadiou|CM|27|7000|GLP|2029
Théo Le Bris|RW|24|5000|FRA|2029
Panos Katseris|RW|25|3000|GRE|2028
Jean-Victor Makengo|AM|28|6000|FRA|2027
Gabin Bernardeau|AM|20|1200|FRA|2030
Isak Jensen|LW|22|5000|DEN|2027
Souleymane Faye|RW|23|3000|SEN|2027
Ibrahima Baldé|ST|23|3000|FRA|2027
Mohamed Bamba|ST|24|2000|CIV|2028
Mamadou Koné|ST|19|2000|CIV|2030
Aiyegun Tosin|ST|28|1800|BEN|2027` },
    { id: 'toulouse', name: 'Тулуза', city: 'Тулуза', stadium: 'Stadium de Toulouse', cap: 33150, colors: ['#5b2b82', '#ffffff'], players: `
Guillaume Restes|GK|21|18000|FRA|2028
Mathys Niflore|GK|19|2500|FRA|2029
Mark McKenzie|CB|27|7000|USA|2027
Seny Koumbassa|CB|19|5000|FRA|2030
David Odogu|CB|20|5000|GER|2027
Christ Tapé|LB|20|3500|CIV|2030
Rafik Messali|RB|23|1500|ALG|2028
Ismaïl Diallo|RB|23|900|FRA|2030
Niko Sigur|DM|23|4000|CAN
Cristian Cásseres Jr.|CM|26|12000|VEN|2028
Mathis Amougou|CM|20|9000|FRA|2027
Thomas Jørgensen|CM|21|7500|DEN|2030
Abu Francis|CM|25|2000|GHA|2029
Niklas Schmidt|CM|28|1500|GER|2027
Aymen Amaaouch|CM|17|500|FRA|2029
Aron Dønnum|RW|28|5000|NOR|2027
Sion Oppong|LW|19|3500|SWE|2030
Ilyas Azizi|LW|18|2000|FRA|2029
Santiago Hidalgo|ST|21|6000|ARG|2029
Casper Tengstedt|ST|26|3500|DEN|2029
Jacen Russell-Rowe|ST|24|3000|CAN|2029
Julián Vignolo|ST|19|1500|ARG|2029` },
    { id: 'paris_fc', name: 'Париж', city: 'Париж', stadium: 'Stade Jean-Bouin', cap: 20000, colors: ['#1b2b4f', '#ffffff'], players: `
Obed Nkambadio|GK|23|5000|FRA|2027
Kevin Trapp|GK|36|1800|GER|2028
Diego Coppola|CB|22|20000|ITA|2031
Moustapha Mbow|CB|26|10000|SEN|2028
Otávio|CB|24|10000|BRA|2030
Samir Chergui|CB|27|4000|ALG|2027
Yoan Koré|CB|21|600|FRA|2027
Emmanuel Mbemba|LB|18|2000|FRA|2030
Thibault De Smet|LB|28|1200|BEL|2027
Adama Camara|RB|30|4000|MLI|2028
Hamari Traoré|RB|34|1500|MLI|2027
Maxime Lopez|DM|28|5000|FRA|2027
Pierre Lees-Melou|DM|33|4500|FRA|2027
Patrick Zabi|CM|20|20000|CIV
Rudy Matondo|CM|18|20000|FRA|2030
Vincent Marchetti|CM|29|1500|FRA|2027
Pablo Pagis|AM|23|20000|FRA|2031
Moses Simon|LW|31|7000|NGA|2028
Ilan Kebbal|RW|28|12000|ALG|2028
Luca Koleosho|RW|22|10000|ITA|2031
Lassine Sinayoko|ST|26|15000|MLI|2029
Jean-Philippe Krasso|ST|29|3500|CIV|2028
Omar Sissoko|ST|20|1000|FRA|2027` },
    { id: 'brest', name: 'Брест', city: 'Брест', stadium: 'Stade Francis-Le Blé', cap: 15931, colors: ['#e30613', '#ffffff'], players: `
Egil Selvik|GK|29|1500|NOR|2027
Mathieu Patouillet|GK|22|600|FRA|2029
Romain Cagnon|GK|29|500|FRA|2027
Noé Poillion|GK|19|500|FRA|2029
Gautier Lloris|CB|31|3000|FRA|2028
Bradley Locko|LB|24|6000|FRA|2028
Justin Bourgault|LB|21|1000|FRA|2029
Kenny Lala|RB|35|1500|MAR|2027
Luck Zogbé|RB|21|1200|CIV|2029
Joris Chotard|DM|25|7000|FRA|2029
Mamady Diambou|DM|23|1500|MLI|2028
Hugo Magnetti|CM|28|6000|FRA|2029
Joseph Nonge|CM|21|2000|BEL|2029
Lucas Tousart|CM|29|2000|FRA|2027
Kamory Doumbia|AM|23|12000|MLI|2029
Pathé Mboup|LW|23|2500|SEN|2030
Noah Edjouma|RW|21|5000|FRA|2027
Djylian N'Guessan|ST|18|5000|FRA|2027
Mama Baldé|ST|30|3000|GNB|2027
Ludovic Ajorque|ST|32|3000|FRA|2027` },
    { id: 'angers', name: 'Анже', city: 'Анже', stadium: 'Stade Raymond Kopa', cap: 19000, colors: ['#000000', '#ffffff'], players: `
Anthony Lopes|GK|36|900|POR|2028
Melvin Zinga|GK|24|300|CGO|2027
Oumar Pona|GK|20|200|MLI|2027
Emmanuel Biumla|CB|21|2500|FRA|2028
Jordan Lefort|CB|33|1000|MTN|2029
Maël Gernigon|CB|17|300|FRA|2028
Joseph Kalulu|LB|21|2000|FRA|2030
Lilian Raolisoa|RB|26|4000|FRA|2028
Marius Louër|RB|19|2000|FRA|2028
Carlens Arcus|RB|30|1800|HAI|2027
Yassin Belkhdim|CM|24|7000|MAR|2028
Branco van den Boomen|CM|31|2500|NED|2029
Louis Mouton|AM|24|4000|FRA|2028
Bané Diatta|AM|18|800|FRA|2030
Amine Sbaï|LW|25|6000|MAR|2027
Anthony Bermont|LW|21|3000|FRA|2027
Harouna Djibirin|RW|19|1500|CMR|2028
Jim Allevinah|RW|31|1000|GAB|2027
Prosper Peter|ST|19|12000|FRA|2028
Amine El Ouazzani|ST|25|2500|MAR|2027
Usman Simbakoli|ST|24|700|CTA|2029` },
    { id: 'le_havre', name: 'Гавр', city: 'Гавр', stadium: 'Stade CMA CGM Océane', cap: 25178, colors: ['#7bb3e1', '#002b5c'], players: `
Arnaud Bodart|GK|28|1500|BEL|2027
Gauthier Gallon|GK|33|600|FRA|2027
Ayumu Seko|CB|26|5000|JPN|2028
Ahmed Touba|CB|28|2500|ALG|2027
Lamine N'Diaye|CB|21|500|SEN
Vincent Sasso|CB|35|150|FRA
Enzo Koffi|LB|20|1800|FRA
Djibril Ouziad|RB|17|500|FRA|2030
Junior Mwanga|DM|23|6000|FRA|2030
Mathéo Bodmer|DM|22|300|FRA|2027
Daren Mosengo|DM|20|300|FRA|2027
Rassoul Ndiaye|CM|24|8000|SEN|2028
Simon Ebonog|CM|22|4500|FRA|2029
Amir Richardson|CM|24|4000|MAR|2027
Guy-Noël Zohouri|CM|19|100|CIV|2027
Kaito Mizuta|AM|26|600|JPN|2029
Ismaïl Bouneb|AM|20|400|FRA|2028
Rayan Fofana|ST|20|8000|CIV|2027
Josh Maja|ST|27|4500|NGA|2027
Sota Nakamura|ST|24|900|JPN|2027
Mbwana Samatta|ST|33|700|TAN|2027
Elysée Logbo|ST|22|200|FRA|2027
Joan Tincrès|ST|20|100|FRA|2030` },
    { id: 'auxerre', name: 'Осер', city: 'Осер', stadium: 'Stade de l\'Abbé Deschamps', cap: 17897, colors: ['#ffffff', '#0067b1'], players: `
Mamadou Diop|GK|26|2000|MTN|2030
Paul Nardi|GK|32|1200|FRA|2028
Louis Mezerette|GK|20|500|FRA|2028
Clément Akpa|CB|24|9000|CIV|2028
Sinaly Diomandé|CB|25|6000|CIV|2027
Axel Tuanzebe|CB|28|5000|COD|2027
Christ Makosso|CB|22|2000|CGO|2030
Elikya Legros|CB|18|2000|FRA|2030
Alvin Petit Dol|CB|19|500|FRA|2027
Fredrik Oppegård|LB|24|1500|NOR|2028
Sékou Fofana|LB|23|1200|FRA|2030
Ackah-Tidiane Zoukrou|LB|18|500|FRA|2029
Lamine Sy|RB|24|2500|SEN|2030
Arthur Piedfort|DM|21|5000|BEL|2030
Pierre Ekwah|DM|24|2000|FRA|2027
Lamfia Dioubaté|DM|19|300|FRA|2029
Kévin Danois|CM|22|20000|FRA|2029
Naouirou Ahamada|CM|24|3000|FRA|2027
Tidiane Devernois|CM|19|300|FRA|2030
Romain Faivre|AM|28|4000|FRA|2027
Danny Namaso|LW|26|6000|CMR|2029
Aristide Zossou|LW|21|2500|CIV|2030
Mamoudou Cissokho|RW|18|200|FRA|2029
Cameron Archer|ST|24|7000|ENG|2027
Ryan Rodin|ST|20|300|FRA|2028
Xiangxin Wei|ST|18|300|CHN|2031` },
    { id: 'nice', name: 'Ницца', city: 'Ницца', stadium: 'Allianz Riviera', cap: 35624, colors: ['#c8102e', '#000000'], players: `
Yehvann Diouf|GK|26|7000|SEN|2030
Teddy Boulhendi|GK|25|300|ALG|2027
Martin Ponsot|GK|17|500|FRA
Youssouf Ndayishimiye|CB|27|7000|BDI|2027
Alidu Seidu|CB|26|5000|GHA|2027
Mohamed Abdelmonem|CB|27|2500|EGY|2028
Niels Nkounkou|LB|25|2600|FRA|2027
Jonathan Clauss|RB|34|4000|FRA|2028
Hamza Koutoune|RB|20|300|MAR|2028
Xavier Mandza|DM|17|5000|FRA|2029
Salis Abdul Samed|DM|26|4000|GHA|2028
Everton|DM|19|2000|FRA|2029
Axel Witsel|DM|37|1200|BEL|2027
Nassim Laarej|CM|17|500|MAR
Hicham Boudaoui|CM|27|12000|ALG|2027
Djibril Coulibaly|CM|17|8000|FRA|2028
Morgan Sanson|CM|32|3000|FRA|2027
Issiaga Camara|CM|21|250|GUI|2027
Mohamed Amoura|LW|26|20000|ALG|2027
Sofiane Diop|LW|26|15000|MAR|2027
Isak Jansson|LW|24|3000|SWE
Gauthier Hein|RW|30|5000|FRA|2029
Nathan Ngoumou|RW|26|3500|CMR
Elye Wahi|ST|23|18000|CIV|2027
Zoumana Diallo|ST|21|800|MLI` },
    { id: 'troyes', name: 'Труа', city: 'Труа', stadium: 'Stade de l\'Aube', cap: 21877, colors: ['#004a9d', '#ffffff'], players: `
Patrick Beach|GK|23|2000|AUS|2031
Hillel Konaté|GK|31|400|BFA|2028
Zacharie Boucher|GK|34|100|FRA|2027
Junior Diaz|CB|23|6000|CIV|2029
Paolo Gozzi|CB|25|1200|ITA|2027
Lucas Maronnier|RB|26|800|FRA|2027
Noah Donkor|RB|19|300|FRA|2029
Alexandre Phliponeau|DM|26|350|FRA|2028
Roman Murcy|DM|20|50|FRA|2029
Mouhamed Diop|CM|26|4000|SEN|2028
Antoine Mille|CM|29|2500|FRA|2028
Iron Gomis|CM|26|1400|FRA|2028
Hugo Picard|LW|23|3000|FRA|2027
Dermane Karim|AM|22|2500|TOG|2029
Idrissa Soukouna|AM|18|500|FRA|2029
Kandet Diawara|LW|26|1200|GUI|2027
Merwan Ifnaoui|RW|28|2500|FRA|2027
Amadou Diakité|RW|21|50|FRA
Jérémy Le Douaron|ST|28|3000|FRA|2027
Timothé Nkada|ST|27|2000|FRA|2027
Christ Batola|ST|17|1000|FRA|2029
Renaud Ripart|ST|33|350|FRA|2027
Ibrahim Traoré|ST|20|50|FRA` },
    { id: 'le_mans', name: 'Ле-Ман', city: 'Ле-Ман', stadium: 'Stade Marie-Marvingt', cap: 25064, colors: ['#e2001a', '#ffd200'], players: `
Nicolas Kocik|GK|28|1500|FRA|2027
Ewan Hatfout|GK|26|300|FRA|2029
Augustin Delbecque|GK|24|500|FRA|2027
Noa Boissé|CB|20|3000|FRA|2029
Raúl Torrente|CB|25|2500|ESP|2027
Théo Eyoum|CB|24|1200|FRA|2028
Harold Voyer|CB|29|900|MAR|2028
Samuel Yohou|CB|35|200|FRA|2028
Lucas Calodat|LB|24|3000|FRA|2028
Yasser Larouci|LB|25|1500|ALG|2029
João Almeida|LB|20|400|BRA|2027
Lucas Buades|RB|28|1500|FRA|2028
Rayan Bamba|RB|22|1500|FRA|2027
Djibril Sidibé|RB|34|1000|FRA|2028
Lucas Bretelle|DM|24|1200|FRA|2029
Alexandre Lauray|DM|29|800|FRA|2027
Jean Vercruysse|CM|26|700|FRA|2028
Daouda Traoré|CM|20|400|FRA|2027
Billal Brahimi|RW|26|1000|ALG|2028
Habib Diallo|ST|31|3000|SEN|2029
Louis Mafouta|ST|32|1000|CTA|2028
Dame Gueye|ST|31|800|SEN|2027
Antoine Rabillard|ST|31|700|FRA|2027
William Harhouz|ST|26|400|FRA|2028
Enzo Vagner|ST|20|500|BRA|2027` },
  ],
});
