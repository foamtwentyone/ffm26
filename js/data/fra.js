// Лига 1 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'fra', name: 'Лига 1', short: 'Лига 1', country: 'FRA', tier: 1, weekday: 0,
  autumn: { from: '08-16', rounds: 17 }, spring: { from: '01-03', rounds: 17 },
  ticket: 25, prize: [25000, 23800, 22650, 21450, 20300, 19100, 17950, 16750, 15600, 14400, 13250, 12050, 10900, 9700, 8550, 7350, 6200, 5000],
  teams: [
    { id: 'psg', name: 'ПСЖ', city: 'Париж', stadium: 'Parc des Princes', cap: 47929, colors: ['#004170', '#da291c'], players: `
Матвей Сафонов|GK|27|30000|RUS
Lucas Chevalier|GK|24|22000|FRA
Willian Pacho|CB|25|80000|ECU
Илья Забарньи|CB|24|40000|UKR
Lucas Beraldo|CB|22|22000|BRA
Lucas Hernández|LB|30|18000|FRA
Lucas Digne|LB|33|6000|FRA
Achraf Hakimi|RB|27|80000|MAR
Vitinha|DM|26|140000|POR
João Neves|CM|22|140000|POR
Warren Zaïre-Emery|CM|20|80000|FRA
Senny Mayulu|CM|20|40000|FRA
Fabián Ruiz|CM|30|30000|ESP
Dro Fernández|AM|18|15000|ESP
Mika Godts|LW|21|40000|BEL
Quentin Ndjantou|LW|19|6000|FRA
Désiré Doué|RW|21|120000|FRA
Maghnes Akliouche|RW|24|50000|FRA
Ferran Torres|ST|26|55000|ESP` },
    { id: 'lens', name: 'Ланс', city: 'Ланс', stadium: 'Stade Bollaert-Delelis', cap: 41233, colors: ['#ffd600', '#e8222d'], players: `
Robin Risser|GK|21|30000|FRA
Mathieu Gorgelin|GK|36|200|FRA
Régis Gurtner|GK|39|100|FRA
Ilan Jourdren|GK|18|500|FRA
Samson Baidoo|CB|22|25000|AUT
Jean-Clair Todibo|CB|26|22000|FRA
Kyllian Antonio|CB|18|10000|FRA
Nidal Celik|CB|20|7000|BIH
Souleymane Sagnan|CB|21|3000|MLI
Matthieu Udol|LB|30|8000|FRA
Jhoanner Chávez|LB|24|2000|ECU
Saud Abdulhamid|RB|27|9000|KSA
Ruben Aguilar|RB|33|2500|FRA
Yacine Titraoui|CM|23|9000|ALG
Andrija Bulatovic|CM|19|8000|MNE
Michaël Cuisance|CM|27|6000|FRA
Amadou Haidara|CM|28|5000|MLI
Mezian Mesloub|AM|16|8000|POR
Thorgan Hazard|AM|33|2000|BEL
Michal Skoras|LW|26|6000|POL
Junior Kadile|LW|23|5000|COD
Franjo Ivanović|ST|23|15000|CRO
Odsonne Édouard|ST|28|12000|FRA
Florian Sotoca|ST|35|1200|FRA` },
    { id: 'lille', name: 'Лилль', city: 'Лилль', stadium: 'Decathlon Arena - Stade Pierre-Mauroy', cap: 50083, colors: ['#e01e13', '#1a2b4c'], players: `
Berke Özer|GK|26|12000|TÜR
Orlando Gill|GK|26|7500|PAR
Nathan Ngoy|CB|23|25000|BEL
Alexsandro|CB|27|15000|BRA
Isaac Cossier|CB|19|2500|FRA
Tanguy Nianzou|CB|24|1200|FRA
Maxima Goffi|CB|18|1000|FRA
Romain Perraud|LB|29|7000|FRA
Calvin Verdonk|LB|29|2500|IDN
Loun Srdanovic|RB|20|3000|SUI
Ngal'ayel Mukau|DM|21|15000|COD
Nabil Bentaleb|DM|31|4500|ALG
Maurits Kjærgaard|CM|23|8000|DEN
Hákon Arnar Haraldsson|AM|23|30000|ISL
Başar Önal|LW|22|10000|TÜR
Osame Sahraoui|LW|25|7000|MAR
Soriba Diaoune|LW|19|4000|FRA
Tiago Morais|LW|23|1200|POR
Dilane Bakwa|RW|24|28000|FRA
Gaëtan Perrin|RW|30|5000|FRA
Olivier Giroud|ST|40|900|FRA` },
    { id: 'lyon', name: 'Лион', city: 'Лион', stadium: 'Groupama Stadium', cap: 61556, colors: ['#ffffff', '#da0812'], players: `
Dominik Greif|GK|29|9000|SVK
Rémy Descamps|GK|30|1500|FRA
Justin Bengui|GK|21|250|FRA
Lassine Diarra|GK|23|500|MLI
Moussa Niakhaté|CB|30|15000|SEN
Ruben Kluivert|CB|25|8000|NED
Felix Bacher|CB|25|6000|AUT
Noham Kamara|CB|19|3000|FRA
Clinton Mata|CB|33|2500|ANG
Abner|LB|26|10000|BRA
Zachary Athekame|RB|21|15000|SUI
Steeve Kango|RB|19|1000|FRA
Tyler Morton|DM|23|30000|ENG
Tanner Tessmann|DM|25|10000|USA
Paul Akouokou|DM|28|400|CIV
Mads Bidstrup|CM|25|15000|DEN
Khalis Merah|CM|19|15000|FRA
Pavel Sulc|AM|25|20000|CZE
Noah Nartey|AM|21|15000|DEN
Keito Nakamura|LW|26|12000|JPN
Rémi Himbert|LW|18|8000|FRA
Julien Duranville|LW|20|6000|BEL
Ernest Nuamah|RW|22|12000|GHA
Kaïl Boudache|RW|20|8000|ALG
Loïs Openda|ST|26|25000|BEL
Alejandro Gomes Rodríguez|ST|18|800|ENG` },
    { id: 'marseille', name: 'Марсель', city: 'Марсель', stadium: 'Orange Vélodrome', cap: 67394, colors: ['#ffffff', '#2faee0'], players: `
Jeffrey de Lange|GK|28|2500|NED
Théo Vermot|GK|29|300|FRA
Jelle Van Neck|GK|22|500|BEL
Nayef Aguerd|CB|30|15000|MAR
CJ Egan-Riley|CB|23|9000|ENG
Bamo Meïté|CB|24|7000|CIV
Emerson|LB|32|9000|ITA
Ulisses Garcia|LB|30|3000|SUI
Alexi Koum|LB|20|350|CMR
Kelyann Bezahaf|RB|20|1000|ALG
Pierre-Emile Højbjerg|DM|31|15000|DEN
Tochukwu Nnadi|DM|23|4500|NGA
Geoffrey Kondogbia|DM|33|2500|CTA
Nouhoum Kamissoko|DM|21|200|MLI
Himad Abdelli|CM|26|5000|ALG
Angel Gomes|AM|26|10000|ENG
Igor Paixão|LW|26|35000|BRA
Tadjidine Mmadi|LW|19|1000|FRA
Keyliane Abdallah|RW|20|5000|FRA
Amine Harit|RW|29|5000|MAR
Amine Gouiri|ST|26|30000|ALG
Neal Maupay|ST|30|4000|FRA
Faris Moumbagna|ST|26|3500|CMR` },
    { id: 'rennes', name: 'Ренн', city: 'Ренн', stadium: 'Roazhon Park', cap: 31127, colors: ['#e13327', '#000000'], players: `
Brice Samba|GK|32|7000|FRA
Nicolas Lemaître|GK|29|500|FRA
Kilian Belazzoug|GK|20|500|ALG
Charlie Cresswell|CB|24|25000|ENG
Abdelhamid Ait Boudlal|CB|20|20000|MAR
Anthony Rouault|CB|25|12000|FRA
Gonçalo Oliveira|CB|20|3000|POR
Quentin Merlin|LB|24|15000|FRA
Mahamadou Nagida|LB|21|10000|CMR
Przemyslaw Frankowski|RB|31|6000|POL
Bryan Reynolds|RB|25|4000|USA
Mahdi Camara|CM|28|12000|FRA
Djaoui Cissé|CM|22|10000|FRA
Adrien Thomasson|CM|32|4000|FRA
Ludovic Blas|RW|28|10000|MAR
Sebastian Szymański|AM|27|15000|POL
Henrick Do Marcolino|AM|20|300|GAB
Issa Soumaré|LW|26|8000|SEN
Mousa Al-Tamari|RW|29|10000|JOR
Arnaud Nordin|RW|28|4000|FRA
Elías Legendre Quiñónez|RW|18|1000|ECU
Estéban Lepaul|ST|26|45000|FRA
Eliezer Mayenda|ST|21|18000|ESP
Boulaye Dia|ST|29|5000|SEN` },
    { id: 'monaco', name: 'Монако', city: 'Монако', stadium: 'Stade Louis-II', cap: 18523, colors: ['#e7242a', '#ffffff'], players: `
Philipp Köhn|GK|28|3000|SUI
Lukas Hradecky|GK|36|1500|FIN
Jules Stawiecki|GK|19|150|FRA
Christian Mawissa|CB|21|15000|FRA
Sadibou Sané|CB|22|12000|SEN
Mohammed Salisu|CB|27|10000|GHA
Eric Dier|CB|32|4000|ENG
Samuel Nibombe|CB|19|1000|BEL
Nazinho|LB|23|10000|POR
Vanderson|RB|25|18000|BRA
Jordan Teze|RB|27|15000|NED
Lamine Camara|CM|22|55000|SEN
Mamadou Coulibaly|CM|22|20000|FRA
Pape Cabral|CM|19|5000|FRA
Edan Diop|CM|22|3000|FRA
Anis Soubeir|CM|19|2000|MAR
Александр Головин|AM|30|18000|RUS
Stanis Idumbo|AM|21|10000|COD
Mathys Detourbet|LW|19|20000|FRA
Ansu Fati|LW|23|15000|ESP
Takumi Minamino|LW|31|10000|JPN
Folarin Balogun|ST|25|50000|USA
Matthis Abline|ST|23|25000|FRA
Mika Biereth|ST|23|15000|DEN
Paris Brunner|ST|20|15000|GER` },
    { id: 'strasbourg', name: 'Страсбур', city: 'Страсбург', stadium: 'Stade de la Meinau', cap: 26109, colors: ['#009fe3', '#ffffff'], players: `
Filip Jørgensen|GK|24|15000|DEN
Milosz Piekutowski|GK|20|600|POL
Karim Coulibaly|CB|19|28000|GER
Lucas Høgsberg|CB|20|18000|DEN
Jeyland Mitchell|CB|22|8000|CRC
Hermann Malonga|CB|18|500|FRA
Oso|LB|23|10000|ESP
Mateo Del Blanco|LB|22|5000|ARG
Genesis Antwi|RB|19|3000|SWE
Dário Essugo|DM|21|15000|POR
Diogo Sousa|DM|20|10000|POR
Maxi Oyedele|DM|21|5000|POL
Samir El Mourabet|CM|21|22000|MAR
Pape Demba Diop|CM|23|9000|SEN
Tyrese Noubissie|CM|17|1000|ENG
Giovanni Reyna|AM|23|7000|USA
Omari Kellyman|AM|21|4000|ENG
Benjamin Brantlind|AM|18|2000|SWE
Fábio Baldé|LW|21|5000|POR
Gessime Yassine|RW|20|20000|MAR
Samuel Amo-Ameyaw|RW|20|8000|ENG
Yaya Diémé|RW|19|300|SEN
Conrad Harder|ST|21|17000|DEN
Jacobo Ortega|ST|20|7000|ESP
Deivid Washington|ST|21|5000|BRA
Sékou Mara|ST|24|4000|FRA` },
    { id: 'lorient', name: 'Лорьян', city: 'Лорьян', stadium: 'Stade du Moustoir - Yves Allainmat', cap: 18970, colors: ['#f58113', '#000000'], players: `
Yvon Mvogo|GK|32|2500|SUI
Bingourou Kamara|GK|30|600|SEN
Benjamin Leroy|GK|37|100|FRA
Formose Mendy|CB|25|1500|SEN
Nathaniel Adjei|CB|24|1500|GHA
Nosa Edward Obaretin|CB|23|1500|ITA
Isaak Touré|CB|23|1200|FRA
Arsène Kouassi|LB|22|15000|BFA
Srdjan Kuzmic|LB|22|3000|SVN
Alec Georgen|RB|28|1500|FRA
Dembo Sylla|RB|23|1500|GUI
Arthur Avom|CM|21|20000|CMR
Noah Cadiou|CM|27|7000|GUA
Théo Le Bris|RW|24|5000|FRA
Panos Katseris|RW|25|3000|GRE
Jean-Victor Makengo|AM|28|6000|FRA
Gabin Bernardeau|AM|20|1200|FRA
Isak Jensen|LW|22|5000|DEN
Souleymane Faye|RW|23|3000|SEN
Ibrahima Baldé|ST|23|3000|FRA
Mohamed Bamba|ST|24|2000|CIV
Mamadou Koné|ST|19|2000|CIV
Aiyegun Tosin|ST|28|1800|BEN` },
    { id: 'toulouse', name: 'Тулуза', city: 'Тулуза', stadium: 'Stadium de Toulouse', cap: 33150, colors: ['#5b2b82', '#ffffff'], players: `
Guillaume Restes|GK|21|18000|FRA
Mathys Niflore|GK|19|2500|FRA
Mark McKenzie|CB|27|7000|USA
Seny Koumbassa|CB|19|5000|FRA
David Odogu|CB|20|5000|GER
Christ Tapé|LB|20|3500|CIV
Rafik Messali|RB|23|1500|ALG
Ismaïl Diallo|RB|23|900|FRA
Niko Sigur|DM|23|4000|CAN
Cristian Cásseres Jr.|CM|26|12000|VEN
Mathis Amougou|CM|20|9000|FRA
Thomas Jørgensen|CM|21|7500|DEN
Abu Francis|CM|25|2000|GHA
Niklas Schmidt|CM|28|1500|GER
Aymen Amaaouch|CM|17|500|FRA
Aron Dønnum|RW|28|5000|NOR
Sion Oppong|LW|19|3500|SWE
Ilyas Azizi|LW|18|2000|FRA
Santiago Hidalgo|ST|21|6000|ARG
Casper Tengstedt|ST|26|3500|DEN
Jacen Russell-Rowe|ST|24|3000|CAN
Julián Vignolo|ST|19|1500|ARG` },
    { id: 'paris_fc', name: 'Париж', city: 'Париж', stadium: 'Stade Jean-Bouin', cap: 20000, colors: ['#1b2b4f', '#ffffff'], players: `
Obed Nkambadio|GK|23|5000|FRA
Kevin Trapp|GK|36|1800|GER
Diego Coppola|CB|22|20000|ITA
Moustapha Mbow|CB|26|10000|SEN
Otávio|CB|24|10000|BRA
Samir Chergui|CB|27|4000|ALG
Yoan Koré|CB|21|600|FRA
Emmanuel Mbemba|LB|18|2000|FRA
Thibault De Smet|LB|28|1200|BEL
Adama Camara|RB|30|4000|MLI
Hamari Traoré|RB|34|1500|MLI
Maxime Lopez|DM|28|5000|FRA
Pierre Lees-Melou|DM|33|4500|FRA
Patrick Zabi|CM|20|20000|CIV
Rudy Matondo|CM|18|20000|FRA
Vincent Marchetti|CM|29|1500|FRA
Pablo Pagis|AM|23|20000|FRA
Moses Simon|LW|31|7000|NGA
Ilan Kebbal|RW|28|12000|ALG
Luca Koleosho|RW|22|10000|ITA
Lassine Sinayoko|ST|26|15000|MLI
Jean-Philippe Krasso|ST|29|3500|CIV
Omar Sissoko|ST|20|1000|FRA` },
    { id: 'brest', name: 'Брест', city: 'Брест', stadium: 'Stade Francis-Le Blé', cap: 15931, colors: ['#e30613', '#ffffff'], players: `
Egil Selvik|GK|29|1500|NOR
Mathieu Patouillet|GK|22|600|FRA
Romain Cagnon|GK|29|500|FRA
Noé Poillion|GK|19|500|FRA
Gautier Lloris|CB|31|3000|FRA
Bradley Locko|LB|24|6000|FRA
Justin Bourgault|LB|21|1000|FRA
Kenny Lala|RB|35|1500|MAR
Luck Zogbé|RB|21|1200|CIV
Joris Chotard|DM|25|7000|FRA
Mamady Diambou|DM|23|1500|MLI
Hugo Magnetti|CM|28|6000|FRA
Joseph Nonge|CM|21|2000|BEL
Lucas Tousart|CM|29|2000|FRA
Kamory Doumbia|AM|23|12000|MLI
Pathé Mboup|LW|23|2500|SEN
Noah Edjouma|RW|21|5000|FRA
Djylian N'Guessan|ST|18|5000|FRA
Mama Baldé|ST|30|3000|GNB
Ludovic Ajorque|ST|32|3000|FRA` },
    { id: 'angers', name: 'Анже', city: 'Анже', stadium: 'Stade Raymond Kopa', cap: 19000, colors: ['#000000', '#ffffff'], players: `
Anthony Lopes|GK|36|900|POR
Melvin Zinga|GK|24|300|CGO
Oumar Pona|GK|20|200|MLI
Emmanuel Biumla|CB|21|2500|FRA
Jordan Lefort|CB|33|1000|MTN
Maël Gernigon|CB|17|300|FRA
Joseph Kalulu|LB|21|2000|FRA
Lilian Raolisoa|RB|26|4000|FRA
Marius Louër|RB|19|2000|FRA
Carlens Arcus|RB|30|1800|HAI
Yassin Belkhdim|CM|24|7000|MAR
Branco van den Boomen|CM|31|2500|NED
Louis Mouton|AM|24|4000|FRA
Bané Diatta|AM|18|800|FRA
Amine Sbaï|LW|25|6000|MAR
Anthony Bermont|LW|21|3000|FRA
Harouna Djibirin|RW|19|1500|CMR
Jim Allevinah|RW|31|1000|GAB
Prosper Peter|ST|19|12000|FRA
Amine El Ouazzani|ST|25|2500|MAR
Usman Simbakoli|ST|24|700|CTA` },
    { id: 'le_havre', name: 'Гавр', city: 'Гавр', stadium: 'Stade CMA CGM Océane', cap: 25178, colors: ['#7bb3e1', '#002b5c'], players: `
Arnaud Bodart|GK|28|1500|BEL
Gauthier Gallon|GK|33|600|FRA
Ayumu Seko|CB|26|5000|JPN
Ahmed Touba|CB|28|2500|ALG
Lamine N'Diaye|CB|21|500|SEN
Vincent Sasso|CB|35|150|FRA
Enzo Koffi|LB|20|1800|FRA
Djibril Ouziad|RB|17|500|FRA
Junior Mwanga|DM|23|6000|FRA
Mathéo Bodmer|DM|22|300|FRA
Daren Mosengo|DM|20|300|FRA
Rassoul Ndiaye|CM|24|8000|SEN
Simon Ebonog|CM|22|4500|FRA
Amir Richardson|CM|24|4000|MAR
Guy-Noël Zohouri|CM|19|100|CIV
Kaito Mizuta|AM|26|600|JPN
Ismaïl Bouneb|AM|20|400|FRA
Rayan Fofana|ST|20|8000|CIV
Josh Maja|ST|27|4500|NGA
Sota Nakamura|ST|24|900|JPN
Mbwana Samatta|ST|33|700|TAN
Elysée Logbo|ST|22|200|FRA
Joan Tincrès|ST|20|100|FRA` },
    { id: 'auxerre', name: 'Осер', city: 'Осер', stadium: 'Stade de l\'Abbé Deschamps', cap: 17897, colors: ['#ffffff', '#0067b1'], players: `
Mamadou Diop|GK|26|2000|MTN
Paul Nardi|GK|32|1200|FRA
Louis Mezerette|GK|20|500|FRA
Clément Akpa|CB|24|9000|CIV
Sinaly Diomandé|CB|25|6000|CIV
Axel Tuanzebe|CB|28|5000|COD
Christ Makosso|CB|22|2000|CGO
Elikya Legros|CB|18|2000|FRA
Alvin Petit Dol|CB|19|500|FRA
Fredrik Oppegård|LB|24|1500|NOR
Sékou Fofana|LB|23|1200|FRA
Ackah-Tidiane Zoukrou|LB|18|500|FRA
Lamine Sy|RB|24|2500|SEN
Arthur Piedfort|DM|21|5000|BEL
Pierre Ekwah|DM|24|2000|FRA
Lamfia Dioubaté|DM|19|300|FRA
Kévin Danois|CM|22|20000|FRA
Naouirou Ahamada|CM|24|3000|FRA
Tidiane Devernois|CM|19|300|FRA
Romain Faivre|AM|28|4000|FRA
Danny Namaso|LW|26|6000|CMR
Aristide Zossou|LW|21|2500|CIV
Mamoudou Cissokho|RW|18|200|FRA
Cameron Archer|ST|24|7000|ENG
Ryan Rodin|ST|20|300|FRA
Xiangxin Wei|ST|18|300|CHN` },
    { id: 'nice', name: 'Ницца', city: 'Ницца', stadium: 'Allianz Riviera', cap: 35624, colors: ['#c8102e', '#000000'], players: `
Yehvann Diouf|GK|26|7000|SEN
Teddy Boulhendi|GK|25|300|ALG
Martin Ponsot|GK|17|500|FRA
Youssouf Ndayishimiye|CB|27|7000|BDI
Alidu Seidu|CB|26|5000|GHA
Mohamed Abdelmonem|CB|27|2500|EGY
Niels Nkounkou|LB|25|2600|FRA
Jonathan Clauss|RB|34|4000|FRA
Hamza Koutoune|RB|20|300|MAR
Xavier Mandza|DM|17|5000|FRA
Salis Abdul Samed|DM|26|4000|GHA
Everton|DM|19|2000|FRA
Axel Witsel|DM|37|1200|BEL
Nassim Laarej|CM|17|500|MAR
Hicham Boudaoui|CM|27|12000|ALG
Djibril Coulibaly|CM|17|8000|FRA
Morgan Sanson|CM|32|3000|FRA
Issiaga Camara|CM|21|250|GUI
Mohamed Amoura|LW|26|20000|ALG
Sofiane Diop|LW|26|15000|MAR
Isak Jansson|LW|24|3000|SWE
Gauthier Hein|RW|30|5000|FRA
Nathan Ngoumou|RW|26|3500|CMR
Elye Wahi|ST|23|18000|CIV
Zoumana Diallo|ST|21|800|MLI` },
    { id: 'troyes', name: 'Труа', city: 'Труа', stadium: 'Stade de l\'Aube', cap: 21877, colors: ['#004a9d', '#ffffff'], players: `
Patrick Beach|GK|23|2000|AUS
Hillel Konaté|GK|31|400|BFA
Zacharie Boucher|GK|34|100|FRA
Junior Diaz|CB|23|6000|CIV
Paolo Gozzi|CB|25|1200|ITA
Lucas Maronnier|RB|26|800|FRA
Noah Donkor|RB|19|300|FRA
Alexandre Phliponeau|DM|26|350|FRA
Roman Murcy|DM|20|50|FRA
Mouhamed Diop|CM|26|4000|SEN
Antoine Mille|CM|29|2500|FRA
Iron Gomis|CM|26|1400|FRA
Hugo Picard|LW|23|3000|FRA
Dermane Karim|AM|22|2500|TOG
Idrissa Soukouna|AM|18|500|FRA
Kandet Diawara|LW|26|1200|GUI
Merwan Ifnaoui|RW|28|2500|FRA
Amadou Diakité|RW|21|50|FRA
Jérémy Le Douaron|ST|28|3000|FRA
Timothé Nkada|ST|27|2000|FRA
Christ Batola|ST|17|1000|FRA
Renaud Ripart|ST|33|350|FRA
Ibrahim Traoré|ST|20|50|FRA` },
    { id: 'le_mans', name: 'Ле-Ман', city: 'Ле-Ман', stadium: 'Stade Marie-Marvingt', cap: 25064, colors: ['#e2001a', '#ffd200'], players: `
Nicolas Kocik|GK|28|1500|FRA
Ewan Hatfout|GK|26|300|FRA
Augustin Delbecque|GK|24|500|FRA
Noa Boissé|CB|20|3000|FRA
Raúl Torrente|CB|25|2500|ESP
Théo Eyoum|CB|24|1200|FRA
Harold Voyer|CB|29|900|MAR
Samuel Yohou|CB|35|200|FRA
Lucas Calodat|LB|24|3000|FRA
Yasser Larouci|LB|25|1500|ALG
João Almeida|LB|20|400|BRA
Lucas Buades|RB|28|1500|FRA
Rayan Bamba|RB|22|1500|FRA
Djibril Sidibé|RB|34|1000|FRA
Lucas Bretelle|DM|24|1200|FRA
Alexandre Lauray|DM|29|800|FRA
Jean Vercruysse|CM|26|700|FRA
Daouda Traoré|CM|20|400|FRA
Billal Brahimi|RW|26|1000|ALG
Habib Diallo|ST|31|3000|SEN
Louis Mafouta|ST|32|1000|CTA
Dame Gueye|ST|31|800|SEN
Antoine Rabillard|ST|31|700|FRA
William Harhouz|ST|26|400|FRA
Enzo Vagner|ST|20|500|BRA` },
  ],
});
