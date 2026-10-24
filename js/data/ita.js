// Серия А 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ita', name: 'Серия А', short: 'Серия А', country: 'ITA', tier: 1, weekday: 0,
  autumn: { from: '08-23', rounds: 19 }, spring: { from: '01-03', rounds: 19 },
  ticket: 30, prize: [35000, 33550, 32050, 30600, 29100, 27650, 26150, 24700, 23200, 21750, 20250, 18800, 17300, 15850, 14350, 12900, 11400, 9950, 8450, 7000],
  teams: [
    { id: 'inter', name: 'Интер', city: 'Милан', stadium: 'Stadio Giuseppe Meazza', cap: 75817, colors: ['#0068a8', '#000000'], players: `
Josep Martínez|GK|28|10000|ESP|2029
Ivan Provedel|GK|32|3000|ITA|2029
Raffaele Di Gennaro|GK|33|300|ITA|2027
Alessandro Bastoni|CB|27|65000|ITA|2028
Yann Bisseck|CB|25|50000|GER|2031
Manuel Akanji|CB|31|17000|SUI|2028
John Stones|CB|32|12000|ENG|2028
Federico Dimarco|LB|28|50000|ITA|2028
Carlos Augusto|LB|27|23000|BRA|2028
Djed Spence|RB|26|35000|ENG|2031
Aleksandar Stanković|DM|21|32000|SRB|2031
Hakan Çalhanoğlu|DM|32|16000|TUR|2027
Nicolò Barella|CM|29|50000|ITA|2029
Petar Sučić|CM|22|45000|CRO|2030
Andy Diouf|CM|23|30000|FRA|2030
Piotr Zieliński|CM|32|10000|POL|2028
Хенрих Мхитарян|CM|37|3000|ARM|2027
Marcus Thuram|ST|29|50000|FRA|2028
Pio Esposito|ST|21|50000|ITA|2032
Ange-Yoan Bonny|ST|22|35000|CIV|2030` },
    { id: 'napoli', name: 'Наполи', city: 'Неаполь', stadium: 'Stadio Diego Armando Maradona', cap: 54726, colors: ['#12a0d7', '#ffffff'], players: `
Vanja Milinković-Savić|GK|29|15000|SRB|2030
Alex Meret|GK|29|8000|ITA|2027
Nikita Contini|GK|30|400|ITA|2031
Claudio Pugliese|GK|18|100|ITA
Sam Beukema|CB|27|18000|NED|2030
Rafa Marín|CB|24|16000|ESP|2029
Benoît Badiashile|CB|25|15000|FRA|2027
Amir Rrahmani|CB|32|10000|KVX|2027
Luca Marianucci|CB|22|7000|ITA|2032
Mathías Olivera|LB|28|15000|URU|2030
Leonardo Spinazzola|LB|33|3500|ITA|2028
Billy Gilmour|DM|25|20000|SCO|2029
Stanislav Lobotka|DM|31|10000|SVK|2027
Scott McTominay|CM|29|40000|SCO|2028
Frank Anguissa|CM|30|15000|CMR|2027
Kevin De Bruyne|AM|35|8000|BEL|2027
Noa Lang|LW|27|20000|NED|2030
Matteo Politano|RW|33|5000|ITA|2028
Rasmus Højlund|ST|23|60000|DEN|2030
Lorenzo Lucca|ST|26|20000|ITA|2030
Giovane|ST|22|12000|BRA|2030` },
    { id: 'roma', name: 'Рома', city: 'Рим', stadium: 'Stadio Olimpico', cap: 70634, colors: ['#8e1f2f', '#f0bc42'], players: `
Devis Vásquez|GK|28|800|COL|2027
Pierluigi Gollini|GK|31|800|ITA|2027
Giorgio De Marzi|GK|19|100|USA|2027
Evan Ndicka|CB|27|35000|CIV|2028
Konstantinos Koulierakis|CB|22|20000|GRE|2031
Leonardo Balerdi|CB|27|18000|ARG|2027
Daniele Ghilardi|CB|23|18000|ITA|2030
Gianluca Mancini|CB|30|15000|ITA|2029
Mario Hermoso|CB|31|7000|ESP|2027
Wesley|RB|23|40000|BRA|2030
Nahuel Molina|RB|28|15000|ARG|2030
Devyne Rensch|RB|23|8500|NED|2029
Emanuele Lulli|RB|19|8000|ITA|2027
Marten de Roon|DM|35|3200|NED|2028
Niccolò Pisilli|CM|22|30000|ITA|2029
Rodrigo Mora|AM|19|38000|POR|2031
Matías Soulé|RW|23|35000|ARG|2029
Donyell Malen|ST|27|55000|NED|2030
Santiago Castro|ST|22|32000|ARG|2031
Antonio Arena|ST|17|4000|ITA|2028` },
    { id: 'como', name: 'Комо', city: 'Комо', stadium: 'Stadio Giuseppe Sinigaglia', cap: 13602, colors: ['#003c71', '#ffffff'], players: `
Robert Sánchez|GK|28|15000|ESP|2027
Jean Butez|GK|31|8000|FRA|2030
Mauro Vigorito|GK|36|150|ITA|2027
Jacobo Ramón|CB|21|45000|ESP|2030
Alberto Dossena|CB|28|5000|ITA|2028
Marc Oliver Kempf|CB|31|3500|GER|2029
Willy Kambwala|CB|22|3000|COD|2027
Edoardo Goldaniga|CB|32|2000|ITA|2028
Kaiki|LB|23|14000|BRA|2027
Álex Valle|LB|22|12000|ESP|2029
Yan Couto|RB|24|17000|BRA|2027
Ivan Smolcic|RB|26|3500|CRO|2031
Máximo Perrone|DM|23|35000|ARG|2029
Samuele Ricci|DM|25|22000|ITA|2027
Maxence Caqueret|CM|26|13000|FRA|2029
Adrian Lahdo|CM|18|10000|SWE|2031
Luis Milla|CM|32|8000|ESP|2029
Nico Paz|AM|22|80000|ARG|2028
Martin Baturina|AM|23|55000|CRO|2030
Jayden Addai|RW|21|20000|NED|2030
Anastasios Douvikas|ST|27|25000|GRE|2029` },
    { id: 'milan', name: 'Милан', city: 'Милан', stadium: 'Stadio Giuseppe Meazza', cap: 75817, colors: ['#fb090b', '#000000'], players: `
Lorenzo Torriani|GK|21|2000|ITA|2030
Pietro Terracciano|GK|36|900|ITA|2027
Strahinja Pavlović|CB|25|40000|SRB|2031
Koni De Winter|CB|24|25000|BEL|2030
Fikayo Tomori|CB|28|10000|ENG|2027
Filippo Terracciano|CB|23|4500|ITA|2028
Sankhoun Diawara|CB|20|2000|FRA|2031
Valeri Vladimirov|CB|18|800|BUL|2029
Davide Bartesaghi|LB|20|22000|ITA|2030
Pervis Estupiñán|LB|28|12000|ECU|2030
Ardon Jashari|DM|24|22000|SUI|2030
Adrien Rabiot|CM|31|18000|FRA|2028
Yunus Musah|CM|23|18000|USA|2028
Christian Comotto|CM|18|10000|ITA|2031
Ruben Loftus-Cheek|CM|30|8500|ENG|2027
Luka Modrić|CM|41|3500|CRO|2027
Diego Moreira|LW|22|45000|BEL|2031
Alphadjo Cisse|AM|20|20000|ITA|2030
Christian Pulisic|RW|28|35000|USA|2027
Omari Hutchinson|RW|22|30000|ENG|2027
Gonçalo Ramos|ST|25|50000|POR|2031
Francesco Camarda|ST|18|15000|ITA|2031` },
    { id: 'juventus', name: 'Ювентус', city: 'Турин', stadium: 'Allianz Stadium', cap: 41689, colors: ['#000000', '#ffffff'], players: `
Guglielmo Vicario|GK|30|12000|ITA|2027
Neto|GK|37|900|BRA|2027
Carlo Pinsoglio|GK|36|200|ITA|2027
Bremer|CB|29|35000|BRA|2029
Pierre Kalulu|CB|26|32000|FRA|2029
Lloyd Kelly|CB|28|23000|ENG|2029
Jhon Lucumí|CB|28|22000|COL|2030
Federico Gatti|CB|28|10000|ITA|2030
Daniele Rugani|CB|32|2000|ITA|2028
Andrea Cambiaso|LB|26|15000|ITA|2029
Juan Cabal|LB|25|7000|COL|2029
Teun Koopmeiners|DM|28|14000|NED|2029
Weston McKennie|CM|28|30000|USA|2030
Pape Matar Sarr|CM|24|30000|SEN|2027
Douglas Luiz|CM|28|18000|BRA|2029
Kerim Alajbegovic|LW|19|32000|BIH|2031
Jérémie Boga|LW|29|8000|CIV|2029
Edon Zhegrova|RW|27|10000|KVX|2030
Nick Woltemade|ST|24|50000|GER|2027
Randal Kolo Muani|ST|27|30000|FRA|2031` },
    { id: 'atalanta', name: 'Аталанта', city: 'Бергамо', stadium: 'New Balance Arena', cap: 24950, colors: ['#1e71b8', '#000000'], players: `
Marco Carnesecchi|GK|26|30000|ITA|2028
Marco Sportiello|GK|34|800|ITA|2028
Thomas Kristensen|CB|24|18000|DEN|2027
Relja Obrić|CB|20|1500|SVN|2028
Lorenzo Bernasconi|LB|22|20000|ITA|2030
Raoul Bellanova|RB|26|15000|ITA|2029
Davide Zappacosta|RB|34|3500|ITA|2028
Gianluca Gaetano|DM|26|12000|ITA|2031
Franck Kessié|CM|29|12000|CIV|2029
Mario Pašalić|CM|31|6000|CRO|2028
Nicola Zalewski|LW|24|20000|POL|2029
Charles De Ketelaere|AM|25|35000|BEL|2028
Lazar Samardžić|AM|24|16000|SRB|2029
Eljif Elmas|AM|27|13000|MKD|2027
Jonathan Rowe|LW|23|33000|ENG|2027
Kamaldeen Sulemana|LW|24|17000|GHA|2029
Nikola Krstović|ST|26|30000|MNE|2030
Gianluca Scamacca|ST|27|25000|ITA|2028` },
    { id: 'bologna', name: 'Болонья', city: 'Болонья', stadium: 'Stadio Renato Dall\'Ara', cap: 39279, colors: ['#a21c26', '#1a2f48'], players: `
Massimo Pessina|GK|18|4500|ITA|2029
Lukasz Skorupski|GK|35|2000|POL|2027
Ukko Happonen|GK|19|50|FIN
Arthur Theate|CB|26|15000|BEL|2027
Torbjørn Heggem|CB|27|15000|NOR|2029
Martin Vitík|CB|23|13000|CZE|2029
Eivind Helland|CB|21|8000|NOR|2030
Nicolò Casale|CB|28|3800|ITA|2028
Juan Miranda|LB|26|15000|ESP|2028
Rahim Alhassane|LB|24|3500|NIG|2030
Nadir Zortea|RB|27|7000|ITA|2029
Matteo Darmian|RB|36|1400|ITA|2027
Nikola Moro|DM|28|7000|CRO|2027
Oussama El Azzouzi|DM|25|1800|MAR|2027
Lewis Ferguson|CM|27|14000|SCO|2028
Mikel Amondarain|CM|21|8500|ARG|2031
Tommaso Pobega|CM|27|8000|ITA|2028
Marco Libra|CM|18|1500|VEN
Jens Odgaard|AM|27|12000|DEN|2029
Nicolò Cambiaghi|LW|25|14000|ITA|2029
Samuel Mbangula|LW|22|8000|BEL|2027
Federico Bernardeschi|RW|32|3500|ITA|2027
Артём Довбык|ST|29|15000|UKR|2027
Jay Enem|ST|23|6000|NED|2030` },
    { id: 'lazio', name: 'Лацио', city: 'Рим', stadium: 'Stadio Olimpico', cap: 70634, colors: ['#87d8f7', '#ffffff'], players: `
Christos Mandas|GK|25|10000|GRE|2029
Edoardo Motta|GK|21|8000|ITA|2030
Davide Renzetti|GK|20|150|ITA|2027
Oliver Provstgaard|CB|23|20000|DEN|2031
Danilho Doekhi|CB|28|13000|NED|2029
Diogo Leite|CB|27|12000|POR|2028
Josip Sutalo|CB|26|12000|CRO|2027
Filipe Bordon|CB|21|750|BRA|2028
Ricardo Bordon|CB|19|200|BRA|2027
Nuno Tavares|LB|26|12000|POR|2029
Luca Pellegrini|LB|27|3000|ITA|2027
Alfonso Pedraza|LB|30|2500|ESP|2029
Mohamed Fares|LB|30|500|ALG|2027
Romano Floriani Mussolini|RB|23|5000|ITA|2028
Manuel Lazzari|RB|32|2000|ITA|2027
Reda Belahyane|DM|22|7500|MAR|2029
Danilo Cataldi|DM|32|3500|ITA|2027
Bruno Galassi|DM|19|100|ARG|2029
Kenneth Taylor|CM|24|25000|NED|2030
Davide Frattesi|CM|27|22000|ITA|2027
Fisayo Dele-Bashiru|CM|25|6000|NGA|2028
Valerio Farcomeni|CM|20|100|ITA|2030
Adrian Przyborek|AM|19|6000|POL|2030
Tijjani Noslin|LW|27|8000|NED|2029
Gustav Isaksen|RW|25|15000|DEN|2028
Matteo Cancellieri|RW|24|7000|ITA|2027
Andrea Pinamonti|ST|27|15000|ITA|2031
Federico Serra|ST|20|400|ITA` },
    { id: 'udinese', name: 'Удинезе', city: 'Удине', stadium: 'Bluenergy Stadium', cap: 25952, colors: ['#000000', '#ffffff'], players: `
Maduka Okoye|GK|27|10000|NGA|2028
Bartosz Mrozek|GK|26|2000|POL|2030
Daniele Padelli|GK|40|150|ITA|2027
Oumar Solet|CB|26|20000|FRA|2027
James Abankwah|CB|22|8000|IRL|2029
Matteo Palma|CB|18|8000|GER|2031
Nicolò Bertola|CB|23|7000|ITA|2030
David Alaba|CB|34|3000|AUT|2027
Enzo Ebosse|CB|27|2800|CMR|2027
Christian Kabasele|CB|35|750|BEL|2027
Hassane Kamara|LB|32|3000|CIV|2028
Alessandro Zanoli|RB|26|4500|ITA|2029
Mërgim Vojvoda|RB|31|2500|KVX|2028
Jurgen Ekkelenkamp|CM|26|13000|NED|2029
Lennon Miller|CM|20|10000|SCO|2030
Jakub Piotrowski|CM|29|4500|POL|2029
Sandi Lovrić|CM|28|3500|SVN|2027
Oier Zarraga|CM|27|1500|ESP|2027
Juan Arizala|LW|21|3500|COL|2030
Unai Gómez|AM|23|5000|ESP|2031
Гиорги Чакветадзе|AM|27|3500|GEO|2030
Lazar Jovanovic|RW|19|6000|SRB|2031
Nicolò Zaniolo|ST|27|15000|ITA|2029
Keinan Davis|ST|28|10000|ENG|2031
Giulio Vinciati|ST|19|100|ITA|2029` },
    { id: 'sassuolo', name: 'Сассуоло', city: 'Сассуоло', stadium: 'MAPEI Stadium - Città del Tricolore', cap: 23717, colors: ['#00a752', '#000000'], players: `
Arijanet Murić|GK|27|7500|KVX
Stefano Turati|GK|25|3000|ITA|2031
Giacomo Satalino|GK|27|400|ITA|2027
Fali Candé|CB|28|3000|GNB|2029
Duje Caleta-Car|CB|30|2800|CRO|2028
Cas Odenthal|CB|26|1200|NED|2027
Rafa Obrador|LB|22|5000|ESP|2027
Josh Doig|LB|24|4500|SCO|2028
Sebastian Walukiewicz|RB|26|5000|POL
Ignace Van der Brempt|RB|24|5000|BEL|2027
Simone Cinquegrano|RB|22|2500|ITA|2032
Yeferson Paz|RB|24|400|COL|2027
Luca Lipani|DM|21|7500|ITA|2028
Ibrahim Sulemana|DM|23|6000|GHA|2027
Nemanja Matić|DM|38|1600|SRB|2027
Andrea Ghion|DM|26|800|ITA|2029
Darryl Bakola|CM|18|15000|FRA|2030
Kristian Thorstvedt|CM|27|10000|NOR|2027
Vasilije Adžić|AM|20|15000|MNE|2027
Armand Laurienté|LW|27|19000|FRA|2029
Benja Domínguez|LW|23|9000|ARG|2027
Cristian Volpato|RW|22|10000|AUS|2031
Nicholas Pierini|RW|28|1600|ITA|2027
Sebastiano Esposito|ST|24|15000|ITA|2027
Kieron Bowie|ST|24|8000|SCO|2027
Laurs Skjellerup|ST|24|1300|DEN|2029` },
    { id: 'torino', name: 'Торино', city: 'Турин', stadium: 'Stadio Olimpico Grande Torino', cap: 27958, colors: ['#8a1e03', '#ffffff'], players: `
Lucas Perri|GK|28|10000|BRA|2027
Diego Mascardi|GK|20|1300|ITA|2031
Lapo Siviero|GK|19|500|ITA|2029
Pietro Comuzzo|CB|21|18000|ITA|2027
Saúl Coco|CB|27|7500|EQG|2029
Ardian Ismajli|CB|30|5000|ALB|2027
Eray Cömert|CB|28|2500|SUI|2028
Cristiano Biraghi|LB|34|900|ITA|2027
Rafik Belghali|RB|24|8000|ALG|2027
Nathan Patterson|RB|25|5000|SCO|2029
Rolando Mandragora|DM|29|7500|ITA|2030
Cesare Casadei|CM|23|15000|ITA|2029
Gvidas Gineitis|CM|22|8000|LTU|2029
Daniel Bragança|CM|27|7000|POR|2027
Kian Fitz-Jim|CM|23|3500|NED|2029
Andrea Luongo|CM|18|1000|ITA|2029
Alessio Cacciamani|LW|19|12000|ITA|2031
Nikola Vlašić|AM|29|10000|CRO|2027
Gaetano Oristanio|AM|24|5000|ITA|2027
Zakaria Aboukhlal|RW|26|5000|MAR|2029
Giovanni Simeone|ST|31|7000|ARG|2028
Ché Adams|ST|30|5000|SCO|2027
Sandro Kulenović|ST|26|3500|CRO|2029
Pietro Pellegri|ST|25|500|ITA|2027` },
    { id: 'parma', name: 'Парма', city: 'Парма', stadium: 'Stadio Ennio Tardini', cap: 22885, colors: ['#ffffff', '#ffd200'], players: `
Giovanni Daffara|GK|21|3500|ITA|2031
Edoardo Corvi|GK|25|3000|ITA|2029
Simone Ghidotti|GK|26|400|ITA
Mariano Troilo|CB|23|10000|ARG|2030
Abdoulaye Ndiaye|CB|24|6000|SEN|2029
Diego Carlos|CB|33|3000|BRA|2027
Lautaro Valenti|CB|27|2000|ARG|2027
Dominik Drobnic|CB|19|1800|SVN
Emanuele Valeri|LB|27|3000|ITA|2028
Franco Carboni|LB|23|1500|ARG|2030
Sascha Britschgi|RB|20|10000|SUI|2030
Mandela Keita|DM|24|20000|BEL|2029
Adrián Bernabé|CM|25|15000|ESP|2027
Christian Ordóñez|CM|22|6500|ARG|2030
Benja Cremaschi|CM|21|4000|USA|2031
Vincent Sierro|CM|31|2500|SUI|2027
Abdou-Salam Konate|CM|19|1500|SEN|2029
Giovanni Fabbian|AM|23|10000|ITA|2027
El Bilal Touré|LW|25|13000|MLI|2027
Ousmane Diallo|LW|19|1500|ESP|2031
Simone Lontani|ST|18|6000|ITA|2030
David Romero|ST|23|7000|ARG|2031
Matija Frigan|ST|23|7000|CRO|2030
Thomás De Martis|ST|18|125|ARG|2027` },
    { id: 'cagliari', name: 'Кальяри', city: 'Кальяри', stadium: 'Unipol Domus', cap: 16416, colors: ['#a50f28', '#002350'], players: `
Elia Caprile|GK|25|12000|ITA|2029
Alen Sherri|GK|28|800|ALB|2028
Boris Radunović|GK|30|500|SRB|2029
Juan Rodríguez|CB|21|14000|URU|2030
Raphael Kofler|CB|21|5500|ITA|2027
Zé Pedro|CB|29|3000|POR|2028
Yerry Mina|CB|32|2500|COL|2028
Adam Obert|LB|24|9000|SVK|2030
Giuseppe Aurelio|LB|26|800|ITA|2029
Nicola Grandu|LB|20|300|ITA|2029
Yukinari Sugawara|RB|26|5500|JPN|2027
Alessandro Romano|DM|20|15000|ITA|2027
Harry Winks|DM|30|2500|ENG|2028
Michel Adopo|CM|26|8500|FRA|2029
Jacopo Fazzini|CM|23|8500|ITA|2027
Joseph Liteta|CM|20|3500|ZAM|2030
Roberto Gagliardini|CM|32|1300|ITA|2027
Demi Akarakiri|CM|19|450|ENG|2030
Ivan Sulev|CM|20|200|BUL|2029
Daniel Maldini|AM|25|9000|ITA|2027
Yanis Massolin|AM|24|4500|FRA|2027
Alieu Fadera|LW|24|4500|GAM|2027
Riccardo Ciervo|LW|24|2000|ITA|2027
Paul Mendy|ST|19|12000|SEN|2031
Kevin Carlos|ST|25|3500|ESP|2027
M'Bala Nzola|ST|30|2500|ANG|2027
Yael Trepy|ST|20|2000|FRA|2030` },
    { id: 'fiorentina', name: 'Фиорентина', city: 'Флоренция', stadium: 'Stadio Artemio Franchi', cap: 43147, colors: ['#482e92', '#ffffff'], players: `
Oliver Christensen|GK|27|1400|DEN|2028
Luca Lezzerini|GK|31|350|ITA|2028
Radu Drăgușin|CB|24|16000|ROU|2027
Víctor Valdepeñas|CB|20|12000|ESP
Viery|CB|21|12000|BRA|2031
Marin Pongracic|CB|29|6500|CRO|2029
Fabiano Parisi|LB|25|6000|ITA|2029
Álex Jiménez|RB|21|22000|ESP|2027
Dodô|RB|27|16000|BRA|2027
João Mário|RB|26|8000|POR|2027
Christ Inao Oulaï|CM|20|28000|CIV
Cher Ndour|CM|22|20000|ITA|2029
Nicolò Fagioli|CM|25|16000|ITA|2028
Marco Brescianini|CM|26|9000|ITA|2030
Pedro Gonçalves|LW|28|25000|POR|2027
Alieu Njie|LW|21|15000|SWE|2027
Riccardo Sottil|LW|27|1500|ITA|2027
Franco Mastantuono|RW|19|45000|ARG|2027
Wilfried Gnonto|RW|22|16000|ITA|2027
Federico Croci|ST|16|3000|ITA|2029
Mateo Pellegrino|ST|25|22000|ARG|2031
Beto|ST|28|18000|GNB|2030` },
    { id: 'genoa', name: 'Дженоа', city: 'Генуя', stadium: 'Stadio Comunale Luigi Ferraris', cap: 36703, colors: ['#a3001c', '#001d40'], players: `
Justin Bijlow|GK|28|4000|NED|2029
Franz Stolz|GK|25|600|AUT|2027
Daniele Sommariva|GK|29|100|ITA
Rendijs Mihelsons|GK|18|100|LVA|2028
Alessandro Marcandalli|CB|23|14000|ITA|2029
Leo Østigård|CB|26|13000|NOR|2030
Sebastian Otoa|CB|22|2500|DEN|2028
Mamedi Doucouré|CB|19|400|FRA
Lukas Klišys|CB|19|100|LTU|2027
Mario Mitaj|LB|23|6000|ALB|2027
David Puczka|LB|21|3500|AUT|2031
Marcelo Vaz|LB|19|400|GNB|2029
Cody Drameh|RB|24|4500|ENG
Stefano Sabelli|RB|33|1300|ITA|2028
Morten Frendrup|DM|25|15000|DEN|2028
Hamed Traoré|CM|26|10000|CIV|2027
Amorim|CM|21|8000|BRA|2030
Mikael Egill Ellertsson|CM|24|6000|ISL|2029
Samuel Wiafe|CM|18|2500|ITA|2030
Tommaso Baldanzi|AM|23|8500|ITA|2027
Stephan El Shaarawy|LW|33|2000|ITA|2027
Robinho Junior|RW|18|5000|BRA|2027
Junior Messias|RW|35|1100|BRA|2027
Vitinha|ST|26|8000|POR|2028
Milutin Osmajic|ST|27|3000|MNE|2029
Elias Havel|ST|23|2200|AUT|2030
Joi Nuredini|ST|19|1000|ALB|2029` },
    { id: 'lecce', name: 'Лечче', city: 'Лечче', stadium: 'Stadio Ettore Giardiniero - Via del Mare', cap: 33876, colors: ['#fcd116', '#da291c'], players: `
Marco Bleve|GK|31|300|ITA|2028
Alexandru Borbei|GK|23|150|ROU|2028
Plamen Penev|GK|18|150|BUL|2027
Tiago Gabriel|CB|21|15000|POR|2030
Jamil Siebert|CB|24|4500|GER|2028
Gaspar|CB|29|3000|ANG|2027
Gaby Jean|CB|26|1500|FRA|2027
Sebastian Esposito|CB|21|600|AUS
Elijah Scott|CB|20|400|USA|2027
Antonino Gallo|LB|26|3500|ITA|2029
Corrie Ndaba|LB|26|900|IRL|2028
Vernon Addo|LB|21|175|NED|2028
Danilo Veiga|RB|24|2500|POR|2027
Ali Dembélé|RB|22|1300|FRA|2027
Marlon Ubani|RB|21|175|GER|2029
Oumar Ngom|DM|22|3000|MTN|2029
Sadik Fofana|DM|23|800|TOG|2029
Olaf Gorter|DM|21|800|NED|2029
Niko Kovač|DM|21|300|BIH|2029
Mohamed Kaba|CM|24|2500|GUI|2027
Youssef Maleh|CM|28|1500|MAR|2027
Omri Gandelman|AM|26|3000|ISR|2029
Joël Monteiro|LW|27|3500|SUI|2029
Amar Fatah|LW|22|800|SWE|2029
Santiago Pierotti|RW|25|4000|ARG|2027
Konan N’Dri|RW|25|1500|NIG|2027
Willem Geubbels|ST|25|5000|FRA|2030
Nikola Stulic|ST|25|3500|SRB|2029
Paco Esteban|ST|20|500|ESP|2030` },
    { id: 'venezia', name: 'Венеция', city: 'Венеция', stadium: 'Stadio Pier Luigi Penzo', cap: 12048, colors: ['#000000', '#f58025'], players: `
Filip Stanković|GK|24|8000|SRB|2030
Lorenzo Montipò|GK|30|1200|ITA|2028
Alessio Pozzi|GK|25|400|ITA|2030
Matteo Grandi|GK|34|50|ITA|2028
Matías Moreno|CB|23|6000|ARG|2027
Joël Schingtienne|CB|24|5000|BEL|2031
Redouane Halhal|CB|23|5000|MAR|2030
Ale Gomes|CB|18|1500|ESP|2031
Juan Jesus|CB|35|1000|BRA|2027
Rufai Mohammed|CB|20|350|GHA|2027
Pasquale Mazzocchi|RB|31|1500|ITA|2027
Simone Panada|DM|24|800|ITA|2030
Simon Sohm|CM|25|8000|SUI|2027
Matteo Dagasso|CM|22|3500|ITA|2030
Toma Bašić|CM|29|3000|CRO|2029
Kike Pérez|CM|29|2500|ESP|2027
Thórir Jóhann Helgason|CM|26|1800|ISL|2029
Lamine Fanne|CM|22|1600|ESP|2030
Alfred Duncan|CM|33|750|GHA|2027
Antoine Hainaut|RW|24|4000|FRA|2028
Thierry Correia|RW|27|2500|POR|2027
Richie Sagrado|RW|22|1500|BEL|2028
Lorenzo Berardi|LW|20|800|ITA|2031
Ridgeciano Haps|LW|33|700|SUR|2028
Toni Fernández|AM|18|5000|ESP|2027
Kornel Lisman|LW|20|1800|POL|2030
John Yeboah|ST|26|5500|ECU|2030
Akor Adams|ST|26|15000|NGA|2030
Albion Rrahmani|ST|26|7000|KVX|2029
Andrea Adorante|ST|26|4500|ITA|2028
Lion Lauberbach|ST|28|2500|GER|2029` },
    { id: 'frosinone', name: 'Фрозиноне', city: 'Фрозиноне', stadium: 'Stadio Benito Stirpe', cap: 16310, colors: ['#ffd200', '#00399a'], players: `
Lorenzo Palmisani|GK|22|6000|ITA|2031
Sebastiano Desplanches|GK|23|1000|ITA|2027
Matteo Pisseri|GK|34|150|ITA
Gabriele Calvani|CB|22|6000|ITA|2027
Giorgio Cittadini|CB|24|1500|ITA|2027
Kevin Akpoguma|CB|31|1500|NGA|2028
Wisdom Amey|CB|21|800|ITA|2027
Omar Fayed|CB|23|600|EGY|2030
Gabriele Bracaglia|LB|23|4000|ITA|2029
Aleksa Terzić|LB|27|2500|SRB|2029
Anthony Oyono|RB|25|2000|GAB|2029
Enzo Tchato|RB|23|1500|CMR|2030
Matteo Cichella|DM|21|5000|ITA
Giacomo Calò|DM|29|2500|ITA|2029
Luis Hasa|CM|22|4500|ALB|2030
Patrizio Masini|CM|25|4500|ITA|2027
Anouar El Azzouzi|CM|25|1500|MAR|2029
Ben Lhassine Kone|CM|26|500|CIV|2029
Francesco Gelli|CM|30|500|ITA
Romano Schmid|AM|26|15000|AUT|2030
Гиорги Квернадзе|LW|23|8000|GEO|2028
Alessio Zerbin|LW|27|2000|ITA|2029
Farès Ghedjemis|RW|24|12000|ALG|2030
Seydou Fini|RW|20|3500|ITA|2027
Tomas Bobcek|ST|25|10000|SVK|2031
Antonio Raimondo|ST|22|7000|ITA|2027
Daniel Bîrligea|ST|26|4500|ROU|2027` },
    { id: 'monza', name: 'Монца', city: 'Монца', stadium: 'U-Power Stadium', cap: 18568, colors: ['#e2001a', '#ffffff'], players: `
Noel Törnqvist|GK|24|2000|SWE|2027
Demba Thiam|GK|28|2000|SEN|2028
Aljaz Strajnar|GK|19|200|SVN|2029
Eddy Kouadio|CB|20|6000|ITA|2027
Саба Гогличидзе|CB|22|3500|GEO|2027
Lorenzo Lucchesi|CB|23|3300|ITA|2030
Andrea Carboni|CB|25|3000|ITA|2029
Valentin Antov|CB|25|1500|BUL|2027
Ricardo Mangas|LB|28|2000|POR|2027
Samuele Birindelli|RB|27|2500|ITA|2028
Adam Bakoune|RB|20|2000|MAR|2027
Leonardo Colombo|DM|21|4000|ITA|2029
Ebenezer Akinsanmiro|CM|21|7000|NGA|2027
Michael Folorunsho|CM|28|5000|ITA|2027
Mathis Mout|CM|19|2000|ITA
Foe Ondoa|CM|20|1500|FRA|2030
Idrissa Touré|RW|28|4000|GER|2028
Patrick Ciurria|RW|31|1000|ITA|2028
Andrea Colpani|AM|27|4000|ITA|2028
Jay Robinson|LW|19|8000|ENG|2027
Keita Baldé|LW|31|800|SEN|2027
Cyril Ngonge|RW|26|7000|BEL|2027
Exequiel Zeballos|RW|24|7000|ARG|2030
Omari Forson|RW|22|2500|ENG|2028
Kevin Martins|RW|21|400|ITA|2028
Gustavo Varela|ST|21|5000|POR|2030
Patrick Cutrone|ST|28|4000|ITA|2029
Dany Mota|ST|28|2800|POR|2027` },
  ],
});
