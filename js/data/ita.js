// Серия А 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ita', name: 'Серия А', short: 'Серия А', country: 'ITA', tier: 1, weekday: 0,
  autumn: { from: '08-23', rounds: 19 }, spring: { from: '01-03', rounds: 19 },
  ticket: 30, prize: [35000, 33550, 32050, 30600, 29100, 27650, 26150, 24700, 23200, 21750, 20250, 18800, 17300, 15850, 14350, 12900, 11400, 9950, 8450, 7000],
  teams: [
    { id: 'inter', name: 'Интер', city: 'Милан', stadium: 'Stadio Giuseppe Meazza', cap: 75817, colors: ['#0068a8', '#000000'], players: `
Josep Martínez|GK|28|10000|ESP
Ivan Provedel|GK|32|3000|ITA
Raffaele Di Gennaro|GK|33|300|ITA
Alessandro Bastoni|CB|27|65000|ITA
Yann Bisseck|CB|25|50000|GER
Manuel Akanji|CB|31|17000|SUI
John Stones|CB|32|12000|ENG
Federico Dimarco|LB|28|50000|ITA
Carlos Augusto|LB|27|23000|BRA
Djed Spence|RB|26|35000|ENG
Aleksandar Stanković|DM|21|32000|SRB
Hakan Çalhanoğlu|DM|32|16000|TUR
Nicolò Barella|CM|29|50000|ITA
Petar Sučić|CM|22|45000|CRO
Andy Diouf|CM|23|30000|FRA
Piotr Zieliński|CM|32|10000|POL
Хенрих Мхитарян|CM|37|3000|ARM
Marcus Thuram|ST|29|50000|FRA
Pio Esposito|ST|21|50000|ITA
Ange-Yoan Bonny|ST|22|35000|CIV` },
    { id: 'napoli', name: 'Наполи', city: 'Неаполь', stadium: 'Stadio Diego Armando Maradona', cap: 54726, colors: ['#12a0d7', '#ffffff'], players: `
Vanja Milinković-Savić|GK|29|15000|SRB
Alex Meret|GK|29|8000|ITA
Nikita Contini|GK|30|400|ITA
Claudio Pugliese|GK|18|100|ITA
Sam Beukema|CB|27|18000|NED
Rafa Marín|CB|24|16000|ESP
Benoît Badiashile|CB|25|15000|FRA
Amir Rrahmani|CB|32|10000|KVX
Luca Marianucci|CB|22|7000|ITA
Mathías Olivera|LB|28|15000|URU
Leonardo Spinazzola|LB|33|3500|ITA
Billy Gilmour|DM|25|20000|SCO
Stanislav Lobotka|DM|31|10000|SVK
Scott McTominay|CM|29|40000|SCO
Frank Anguissa|CM|30|15000|CMR
Kevin De Bruyne|AM|35|8000|BEL
Noa Lang|LW|27|20000|NED
Matteo Politano|RW|33|5000|ITA
Rasmus Højlund|ST|23|60000|DEN
Lorenzo Lucca|ST|26|20000|ITA
Giovane|ST|22|12000|BRA` },
    { id: 'roma', name: 'Рома', city: 'Рим', stadium: 'Stadio Olimpico', cap: 70634, colors: ['#8e1f2f', '#f0bc42'], players: `
Devis Vásquez|GK|28|800|COL
Pierluigi Gollini|GK|31|800|ITA
Giorgio De Marzi|GK|19|100|USA
Evan Ndicka|CB|27|35000|CIV
Konstantinos Koulierakis|CB|22|20000|GRE
Leonardo Balerdi|CB|27|18000|ARG
Daniele Ghilardi|CB|23|18000|ITA
Gianluca Mancini|CB|30|15000|ITA
Mario Hermoso|CB|31|7000|ESP
Wesley|RB|23|40000|BRA
Nahuel Molina|RB|28|15000|ARG
Devyne Rensch|RB|23|8500|NED
Emanuele Lulli|RB|19|8000|ITA
Marten de Roon|DM|35|3200|NED
Niccolò Pisilli|CM|22|30000|ITA
Rodrigo Mora|AM|19|38000|POR
Matías Soulé|RW|23|35000|ARG
Donyell Malen|ST|27|55000|NED
Santiago Castro|ST|22|32000|ARG
Antonio Arena|ST|17|4000|ITA` },
    { id: 'como', name: 'Комо', city: 'Комо', stadium: 'Stadio Giuseppe Sinigaglia', cap: 13602, colors: ['#003c71', '#ffffff'], players: `
Robert Sánchez|GK|28|15000|ESP
Jean Butez|GK|31|8000|FRA
Mauro Vigorito|GK|36|150|ITA
Jacobo Ramón|CB|21|45000|ESP
Alberto Dossena|CB|28|5000|ITA
Marc Oliver Kempf|CB|31|3500|GER
Willy Kambwala|CB|22|3000|COD
Edoardo Goldaniga|CB|32|2000|ITA
Kaiki|LB|23|14000|BRA
Álex Valle|LB|22|12000|ESP
Yan Couto|RB|24|17000|BRA
Ivan Smolcic|RB|26|3500|CRO
Máximo Perrone|DM|23|35000|ARG
Samuele Ricci|DM|25|22000|ITA
Maxence Caqueret|CM|26|13000|FRA
Adrian Lahdo|CM|18|10000|SWE
Luis Milla|CM|32|8000|ESP
Nico Paz|AM|22|80000|ARG
Martin Baturina|AM|23|55000|CRO
Jayden Addai|RW|21|20000|NED
Anastasios Douvikas|ST|27|25000|GRE` },
    { id: 'milan', name: 'Милан', city: 'Милан', stadium: 'Stadio Giuseppe Meazza', cap: 75817, colors: ['#fb090b', '#000000'], players: `
Lorenzo Torriani|GK|21|2000|ITA
Pietro Terracciano|GK|36|900|ITA
Strahinja Pavlović|CB|25|40000|SRB
Koni De Winter|CB|24|25000|BEL
Fikayo Tomori|CB|28|10000|ENG
Filippo Terracciano|CB|23|4500|ITA
Sankhoun Diawara|CB|20|2000|FRA
Valeri Vladimirov|CB|18|800|BUL
Davide Bartesaghi|LB|20|22000|ITA
Pervis Estupiñán|LB|28|12000|ECU
Ardon Jashari|DM|24|22000|SUI
Adrien Rabiot|CM|31|18000|FRA
Yunus Musah|CM|23|18000|USA
Christian Comotto|CM|18|10000|ITA
Ruben Loftus-Cheek|CM|30|8500|ENG
Luka Modrić|CM|41|3500|CRO
Diego Moreira|LW|22|45000|BEL
Alphadjo Cisse|AM|20|20000|ITA
Christian Pulisic|RW|28|35000|USA
Omari Hutchinson|RW|22|30000|ENG
Gonçalo Ramos|ST|25|50000|POR
Francesco Camarda|ST|18|15000|ITA` },
    { id: 'juventus', name: 'Ювентус', city: 'Турин', stadium: 'Allianz Stadium', cap: 41689, colors: ['#000000', '#ffffff'], players: `
Guglielmo Vicario|GK|30|12000|ITA
Neto|GK|37|900|BRA
Carlo Pinsoglio|GK|36|200|ITA
Bremer|CB|29|35000|BRA
Pierre Kalulu|CB|26|32000|FRA
Lloyd Kelly|CB|28|23000|ENG
Jhon Lucumí|CB|28|22000|COL
Federico Gatti|CB|28|10000|ITA
Daniele Rugani|CB|32|2000|ITA
Andrea Cambiaso|LB|26|15000|ITA
Juan Cabal|LB|25|7000|COL
Teun Koopmeiners|DM|28|14000|NED
Weston McKennie|CM|28|30000|USA
Pape Matar Sarr|CM|24|30000|SEN
Douglas Luiz|CM|28|18000|BRA
Kerim Alajbegovic|LW|19|32000|BIH
Jérémie Boga|LW|29|8000|CIV
Edon Zhegrova|RW|27|10000|KVX
Nick Woltemade|ST|24|50000|GER
Randal Kolo Muani|ST|27|30000|FRA` },
    { id: 'atalanta', name: 'Аталанта', city: 'Бергамо', stadium: 'New Balance Arena', cap: 24950, colors: ['#1e71b8', '#000000'], players: `
Marco Carnesecchi|GK|26|30000|ITA
Marco Sportiello|GK|34|800|ITA
Thomas Kristensen|CB|24|18000|DEN
Relja Obrić|CB|20|1500|SVN
Lorenzo Bernasconi|LB|22|20000|ITA
Raoul Bellanova|RB|26|15000|ITA
Davide Zappacosta|RB|34|3500|ITA
Gianluca Gaetano|DM|26|12000|ITA
Franck Kessié|CM|29|12000|CIV
Mario Pašalić|CM|31|6000|CRO
Nicola Zalewski|LW|24|20000|POL
Charles De Ketelaere|AM|25|35000|BEL
Lazar Samardžić|AM|24|16000|SRB
Eljif Elmas|AM|27|13000|MKD
Jonathan Rowe|LW|23|33000|ENG
Kamaldeen Sulemana|LW|24|17000|GHA
Nikola Krstović|ST|26|30000|MNE
Gianluca Scamacca|ST|27|25000|ITA` },
    { id: 'bologna', name: 'Болонья', city: 'Болонья', stadium: 'Stadio Renato Dall\'Ara', cap: 39279, colors: ['#a21c26', '#1a2f48'], players: `
Massimo Pessina|GK|18|4500|ITA
Lukasz Skorupski|GK|35|2000|POL
Ukko Happonen|GK|19|50|FIN
Arthur Theate|CB|26|15000|BEL
Torbjørn Heggem|CB|27|15000|NOR
Martin Vitík|CB|23|13000|CZE
Eivind Helland|CB|21|8000|NOR
Nicolò Casale|CB|28|3800|ITA
Juan Miranda|LB|26|15000|ESP
Rahim Alhassane|LB|24|3500|NIG
Nadir Zortea|RB|27|7000|ITA
Matteo Darmian|RB|36|1400|ITA
Nikola Moro|DM|28|7000|CRO
Oussama El Azzouzi|DM|25|1800|MAR
Lewis Ferguson|CM|27|14000|SCO
Mikel Amondarain|CM|21|8500|ARG
Tommaso Pobega|CM|27|8000|ITA
Marco Libra|CM|18|1500|VEN
Jens Odgaard|AM|27|12000|DEN
Nicolò Cambiaghi|LW|25|14000|ITA
Samuel Mbangula|LW|22|8000|BEL
Federico Bernardeschi|RW|32|3500|ITA
Артём Довбык|ST|29|15000|UKR
Jay Enem|ST|23|6000|NED` },
    { id: 'lazio', name: 'Лацио', city: 'Рим', stadium: 'Stadio Olimpico', cap: 70634, colors: ['#87d8f7', '#ffffff'], players: `
Christos Mandas|GK|25|10000|GRE
Edoardo Motta|GK|21|8000|ITA
Davide Renzetti|GK|20|150|ITA
Oliver Provstgaard|CB|23|20000|DEN
Danilho Doekhi|CB|28|13000|NED
Diogo Leite|CB|27|12000|POR
Josip Sutalo|CB|26|12000|CRO
Filipe Bordon|CB|21|750|BRA
Ricardo Bordon|CB|19|200|BRA
Nuno Tavares|LB|26|12000|POR
Luca Pellegrini|LB|27|3000|ITA
Alfonso Pedraza|LB|30|2500|ESP
Mohamed Fares|LB|30|500|ALG
Romano Floriani Mussolini|RB|23|5000|ITA
Manuel Lazzari|RB|32|2000|ITA
Reda Belahyane|DM|22|7500|MAR
Danilo Cataldi|DM|32|3500|ITA
Bruno Galassi|DM|19|100|ARG
Kenneth Taylor|CM|24|25000|NED
Davide Frattesi|CM|27|22000|ITA
Fisayo Dele-Bashiru|CM|25|6000|NGA
Valerio Farcomeni|CM|20|100|ITA
Adrian Przyborek|AM|19|6000|POL
Tijjani Noslin|LW|27|8000|NED
Gustav Isaksen|RW|25|15000|DEN
Matteo Cancellieri|RW|24|7000|ITA
Andrea Pinamonti|ST|27|15000|ITA
Federico Serra|ST|20|400|ITA` },
    { id: 'udinese', name: 'Удинезе', city: 'Удине', stadium: 'Bluenergy Stadium', cap: 25952, colors: ['#000000', '#ffffff'], players: `
Maduka Okoye|GK|27|10000|NGA
Bartosz Mrozek|GK|26|2000|POL
Daniele Padelli|GK|40|150|ITA
Oumar Solet|CB|26|20000|FRA
James Abankwah|CB|22|8000|IRL
Matteo Palma|CB|18|8000|GER
Nicolò Bertola|CB|23|7000|ITA
David Alaba|CB|34|3000|AUT
Enzo Ebosse|CB|27|2800|CMR
Christian Kabasele|CB|35|750|BEL
Hassane Kamara|LB|32|3000|CIV
Alessandro Zanoli|RB|26|4500|ITA
Mërgim Vojvoda|RB|31|2500|KVX
Jurgen Ekkelenkamp|CM|26|13000|NED
Lennon Miller|CM|20|10000|SCO
Jakub Piotrowski|CM|29|4500|POL
Sandi Lovrić|CM|28|3500|SVN
Oier Zarraga|CM|27|1500|ESP
Juan Arizala|LW|21|3500|COL
Unai Gómez|AM|23|5000|ESP
Гиорги Чакветадзе|AM|27|3500|GEO
Lazar Jovanovic|RW|19|6000|SRB
Nicolò Zaniolo|ST|27|15000|ITA
Keinan Davis|ST|28|10000|ENG
Giulio Vinciati|ST|19|100|ITA` },
    { id: 'sassuolo', name: 'Сассуоло', city: 'Сассуоло', stadium: 'MAPEI Stadium - Città del Tricolore', cap: 23717, colors: ['#00a752', '#000000'], players: `
Arijanet Murić|GK|27|7500|KVX
Stefano Turati|GK|25|3000|ITA
Giacomo Satalino|GK|27|400|ITA
Fali Candé|CB|28|3000|GNB
Duje Caleta-Car|CB|30|2800|CRO
Cas Odenthal|CB|26|1200|NED
Rafa Obrador|LB|22|5000|ESP
Josh Doig|LB|24|4500|SCO
Sebastian Walukiewicz|RB|26|5000|POL
Ignace Van der Brempt|RB|24|5000|BEL
Simone Cinquegrano|RB|22|2500|ITA
Yeferson Paz|RB|24|400|COL
Luca Lipani|DM|21|7500|ITA
Ibrahim Sulemana|DM|23|6000|GHA
Nemanja Matić|DM|38|1600|SRB
Andrea Ghion|DM|26|800|ITA
Darryl Bakola|CM|18|15000|FRA
Kristian Thorstvedt|CM|27|10000|NOR
Vasilije Adžić|AM|20|15000|MNE
Armand Laurienté|LW|27|19000|FRA
Benja Domínguez|LW|23|9000|ARG
Cristian Volpato|RW|22|10000|AUS
Nicholas Pierini|RW|28|1600|ITA
Sebastiano Esposito|ST|24|15000|ITA
Kieron Bowie|ST|24|8000|SCO
Laurs Skjellerup|ST|24|1300|DEN` },
    { id: 'torino', name: 'Торино', city: 'Турин', stadium: 'Stadio Olimpico Grande Torino', cap: 27958, colors: ['#8a1e03', '#ffffff'], players: `
Lucas Perri|GK|28|10000|BRA
Diego Mascardi|GK|20|1300|ITA
Lapo Siviero|GK|19|500|ITA
Pietro Comuzzo|CB|21|18000|ITA
Saúl Coco|CB|27|7500|EQG
Ardian Ismajli|CB|30|5000|ALB
Eray Cömert|CB|28|2500|SUI
Cristiano Biraghi|LB|34|900|ITA
Rafik Belghali|RB|24|8000|ALG
Nathan Patterson|RB|25|5000|SCO
Rolando Mandragora|DM|29|7500|ITA
Cesare Casadei|CM|23|15000|ITA
Gvidas Gineitis|CM|22|8000|LTU
Daniel Bragança|CM|27|7000|POR
Kian Fitz-Jim|CM|23|3500|NED
Andrea Luongo|CM|18|1000|ITA
Alessio Cacciamani|LW|19|12000|ITA
Nikola Vlašić|AM|29|10000|CRO
Gaetano Oristanio|AM|24|5000|ITA
Zakaria Aboukhlal|RW|26|5000|MAR
Giovanni Simeone|ST|31|7000|ARG
Ché Adams|ST|30|5000|SCO
Sandro Kulenović|ST|26|3500|CRO
Pietro Pellegri|ST|25|500|ITA` },
    { id: 'parma', name: 'Парма', city: 'Парма', stadium: 'Stadio Ennio Tardini', cap: 22885, colors: ['#ffffff', '#ffd200'], players: `
Giovanni Daffara|GK|21|3500|ITA
Edoardo Corvi|GK|25|3000|ITA
Simone Ghidotti|GK|26|400|ITA
Mariano Troilo|CB|23|10000|ARG
Abdoulaye Ndiaye|CB|24|6000|SEN
Diego Carlos|CB|33|3000|BRA
Lautaro Valenti|CB|27|2000|ARG
Dominik Drobnic|CB|19|1800|SVN
Emanuele Valeri|LB|27|3000|ITA
Franco Carboni|LB|23|1500|ARG
Sascha Britschgi|RB|20|10000|SUI
Mandela Keita|DM|24|20000|BEL
Adrián Bernabé|CM|25|15000|ESP
Christian Ordóñez|CM|22|6500|ARG
Benja Cremaschi|CM|21|4000|USA
Vincent Sierro|CM|31|2500|SUI
Abdou-Salam Konate|CM|19|1500|SEN
Giovanni Fabbian|AM|23|10000|ITA
El Bilal Touré|LW|25|13000|MLI
Ousmane Diallo|LW|19|1500|ESP
Simone Lontani|ST|18|6000|ITA
David Romero|ST|23|7000|ARG
Matija Frigan|ST|23|7000|CRO
Thomás De Martis|ST|18|125|ARG` },
    { id: 'cagliari', name: 'Кальяри', city: 'Кальяри', stadium: 'Unipol Domus', cap: 16416, colors: ['#a50f28', '#002350'], players: `
Elia Caprile|GK|25|12000|ITA
Alen Sherri|GK|28|800|ALB
Boris Radunović|GK|30|500|SRB
Juan Rodríguez|CB|21|14000|URU
Raphael Kofler|CB|21|5500|ITA
Zé Pedro|CB|29|3000|POR
Yerry Mina|CB|32|2500|COL
Adam Obert|LB|24|9000|SVK
Giuseppe Aurelio|LB|26|800|ITA
Nicola Grandu|LB|20|300|ITA
Yukinari Sugawara|RB|26|5500|JPN
Alessandro Romano|DM|20|15000|ITA
Harry Winks|DM|30|2500|ENG
Michel Adopo|CM|26|8500|FRA
Jacopo Fazzini|CM|23|8500|ITA
Joseph Liteta|CM|20|3500|ZAM
Roberto Gagliardini|CM|32|1300|ITA
Demi Akarakiri|CM|19|450|ENG
Ivan Sulev|CM|20|200|BUL
Daniel Maldini|AM|25|9000|ITA
Yanis Massolin|AM|24|4500|FRA
Alieu Fadera|LW|24|4500|GAM
Riccardo Ciervo|LW|24|2000|ITA
Paul Mendy|ST|19|12000|SEN
Kevin Carlos|ST|25|3500|ESP
M'Bala Nzola|ST|30|2500|ANG
Yael Trepy|ST|20|2000|FRA` },
    { id: 'fiorentina', name: 'Фиорентина', city: 'Флоренция', stadium: 'Stadio Artemio Franchi', cap: 43147, colors: ['#482e92', '#ffffff'], players: `
Oliver Christensen|GK|27|1400|DEN
Luca Lezzerini|GK|31|350|ITA
Radu Drăgușin|CB|24|16000|ROU
Víctor Valdepeñas|CB|20|12000|ESP
Viery|CB|21|12000|BRA
Marin Pongracic|CB|29|6500|CRO
Fabiano Parisi|LB|25|6000|ITA
Álex Jiménez|RB|21|22000|ESP
Dodô|RB|27|16000|BRA
João Mário|RB|26|8000|POR
Christ Inao Oulaï|CM|20|28000|CIV
Cher Ndour|CM|22|20000|ITA
Nicolò Fagioli|CM|25|16000|ITA
Marco Brescianini|CM|26|9000|ITA
Pedro Gonçalves|LW|28|25000|POR
Alieu Njie|LW|21|15000|SWE
Riccardo Sottil|LW|27|1500|ITA
Franco Mastantuono|RW|19|45000|ARG
Wilfried Gnonto|RW|22|16000|ITA
Federico Croci|ST|16|3000|ITA
Mateo Pellegrino|ST|25|22000|ARG
Beto|ST|28|18000|GNB` },
    { id: 'genoa', name: 'Дженоа', city: 'Генуя', stadium: 'Stadio Comunale Luigi Ferraris', cap: 36703, colors: ['#a3001c', '#001d40'], players: `
Justin Bijlow|GK|28|4000|NED
Franz Stolz|GK|25|600|AUT
Daniele Sommariva|GK|29|100|ITA
Rendijs Mihelsons|GK|18|100|LVA
Alessandro Marcandalli|CB|23|14000|ITA
Leo Østigård|CB|26|13000|NOR
Sebastian Otoa|CB|22|2500|DEN
Mamedi Doucouré|CB|19|400|FRA
Lukas Klišys|CB|19|100|LTU
Mario Mitaj|LB|23|6000|ALB
David Puczka|LB|21|3500|AUT
Marcelo Vaz|LB|19|400|GNB
Cody Drameh|RB|24|4500|ENG
Stefano Sabelli|RB|33|1300|ITA
Morten Frendrup|DM|25|15000|DEN
Hamed Traoré|CM|26|10000|CIV
Amorim|CM|21|8000|BRA
Mikael Egill Ellertsson|CM|24|6000|ISL
Samuel Wiafe|CM|18|2500|ITA
Tommaso Baldanzi|AM|23|8500|ITA
Stephan El Shaarawy|LW|33|2000|ITA
Robinho Junior|RW|18|5000|BRA
Junior Messias|RW|35|1100|BRA
Vitinha|ST|26|8000|POR
Milutin Osmajic|ST|27|3000|MNE
Elias Havel|ST|23|2200|AUT
Joi Nuredini|ST|19|1000|ALB` },
    { id: 'lecce', name: 'Лечче', city: 'Лечче', stadium: 'Stadio Ettore Giardiniero - Via del Mare', cap: 33876, colors: ['#fcd116', '#da291c'], players: `
Marco Bleve|GK|31|300|ITA
Alexandru Borbei|GK|23|150|ROU
Plamen Penev|GK|18|150|BUL
Tiago Gabriel|CB|21|15000|POR
Jamil Siebert|CB|24|4500|GER
Gaspar|CB|29|3000|ANG
Gaby Jean|CB|26|1500|FRA
Sebastian Esposito|CB|21|600|AUS
Elijah Scott|CB|20|400|USA
Antonino Gallo|LB|26|3500|ITA
Corrie Ndaba|LB|26|900|IRL
Vernon Addo|LB|21|175|NED
Danilo Veiga|RB|24|2500|POR
Ali Dembélé|RB|22|1300|FRA
Marlon Ubani|RB|21|175|GER
Oumar Ngom|DM|22|3000|MTN
Sadik Fofana|DM|23|800|TOG
Olaf Gorter|DM|21|800|NED
Niko Kovač|DM|21|300|BIH
Mohamed Kaba|CM|24|2500|GUI
Youssef Maleh|CM|28|1500|MAR
Omri Gandelman|AM|26|3000|ISR
Joël Monteiro|LW|27|3500|SUI
Amar Fatah|LW|22|800|SWE
Santiago Pierotti|RW|25|4000|ARG
Konan N’Dri|RW|25|1500|NIG
Willem Geubbels|ST|25|5000|FRA
Nikola Stulic|ST|25|3500|SRB
Paco Esteban|ST|20|500|ESP` },
    { id: 'venezia', name: 'Венеция', city: 'Венеция', stadium: 'Stadio Pier Luigi Penzo', cap: 12048, colors: ['#000000', '#f58025'], players: `
Filip Stanković|GK|24|8000|SRB
Lorenzo Montipò|GK|30|1200|ITA
Alessio Pozzi|GK|25|400|ITA
Matteo Grandi|GK|34|50|ITA
Matías Moreno|CB|23|6000|ARG
Joël Schingtienne|CB|24|5000|BEL
Redouane Halhal|CB|23|5000|MAR
Ale Gomes|CB|18|1500|ESP
Juan Jesus|CB|35|1000|BRA
Rufai Mohammed|CB|20|350|GHA
Pasquale Mazzocchi|RB|31|1500|ITA
Simone Panada|DM|24|800|ITA
Simon Sohm|CM|25|8000|SUI
Matteo Dagasso|CM|22|3500|ITA
Toma Bašić|CM|29|3000|CRO
Kike Pérez|CM|29|2500|ESP
Thórir Jóhann Helgason|CM|26|1800|ISL
Lamine Fanne|CM|22|1600|ESP
Alfred Duncan|CM|33|750|GHA
Antoine Hainaut|RW|24|4000|FRA
Thierry Correia|RW|27|2500|POR
Richie Sagrado|RW|22|1500|BEL
Lorenzo Berardi|LW|20|800|ITA
Ridgeciano Haps|LW|33|700|SUR
Toni Fernández|AM|18|5000|ESP
Kornel Lisman|LW|20|1800|POL
John Yeboah|ST|26|5500|ECU
Akor Adams|ST|26|15000|NGA
Albion Rrahmani|ST|26|7000|KVX
Andrea Adorante|ST|26|4500|ITA
Lion Lauberbach|ST|28|2500|GER` },
    { id: 'frosinone', name: 'Фрозиноне', city: 'Фрозиноне', stadium: 'Stadio Benito Stirpe', cap: 16310, colors: ['#ffd200', '#00399a'], players: `
Lorenzo Palmisani|GK|22|6000|ITA
Sebastiano Desplanches|GK|23|1000|ITA
Matteo Pisseri|GK|34|150|ITA
Gabriele Calvani|CB|22|6000|ITA
Giorgio Cittadini|CB|24|1500|ITA
Kevin Akpoguma|CB|31|1500|NGA
Wisdom Amey|CB|21|800|ITA
Omar Fayed|CB|23|600|EGY
Gabriele Bracaglia|LB|23|4000|ITA
Aleksa Terzić|LB|27|2500|SRB
Anthony Oyono|RB|25|2000|GAB
Enzo Tchato|RB|23|1500|CMR
Matteo Cichella|DM|21|5000|ITA
Giacomo Calò|DM|29|2500|ITA
Luis Hasa|CM|22|4500|ALB
Patrizio Masini|CM|25|4500|ITA
Anouar El Azzouzi|CM|25|1500|MAR
Ben Lhassine Kone|CM|26|500|CIV
Francesco Gelli|CM|30|500|ITA
Romano Schmid|AM|26|15000|AUT
Гиорги Квернадзе|LW|23|8000|GEO
Alessio Zerbin|LW|27|2000|ITA
Farès Ghedjemis|RW|24|12000|ALG
Seydou Fini|RW|20|3500|ITA
Tomas Bobcek|ST|25|10000|SVK
Antonio Raimondo|ST|22|7000|ITA
Daniel Bîrligea|ST|26|4500|ROU` },
    { id: 'monza', name: 'Монца', city: 'Монца', stadium: 'U-Power Stadium', cap: 18568, colors: ['#e2001a', '#ffffff'], players: `
Noel Törnqvist|GK|24|2000|SWE
Demba Thiam|GK|28|2000|SEN
Aljaz Strajnar|GK|19|200|SVN
Eddy Kouadio|CB|20|6000|ITA
Саба Гогличидзе|CB|22|3500|GEO
Lorenzo Lucchesi|CB|23|3300|ITA
Andrea Carboni|CB|25|3000|ITA
Valentin Antov|CB|25|1500|BUL
Ricardo Mangas|LB|28|2000|POR
Samuele Birindelli|RB|27|2500|ITA
Adam Bakoune|RB|20|2000|MAR
Leonardo Colombo|DM|21|4000|ITA
Ebenezer Akinsanmiro|CM|21|7000|NGA
Michael Folorunsho|CM|28|5000|ITA
Mathis Mout|CM|19|2000|ITA
Foe Ondoa|CM|20|1500|FRA
Idrissa Touré|RW|28|4000|GER
Patrick Ciurria|RW|31|1000|ITA
Andrea Colpani|AM|27|4000|ITA
Jay Robinson|LW|19|8000|ENG
Keita Baldé|LW|31|800|SEN
Cyril Ngonge|RW|26|7000|BEL
Exequiel Zeballos|RW|24|7000|ARG
Omari Forson|RW|22|2500|ENG
Kevin Martins|RW|21|400|ITA
Gustavo Varela|ST|21|5000|POR
Patrick Cutrone|ST|28|4000|ITA
Dany Mota|ST|28|2800|POR` },
  ],
});
