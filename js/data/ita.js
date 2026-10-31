// Серия А 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ita', name: 'Серия А', short: 'Серия А', country: 'ITA', tier: 1, weekday: 0,
  autumn: { from: '08-23', rounds: 19 }, spring: { from: '01-03', rounds: 19 },
  ticket: 30, prize: [35000, 33550, 32050, 30600, 29100, 27650, 26150, 24700, 23200, 21750, 20250, 18800, 17300, 15850, 14350, 12900, 11400, 9950, 8450, 7000],
  teams: [
    { id: 'inter', name: 'Интер', city: 'Милан', stadium: 'Stadio Giuseppe Meazza', cap: 75817, colors: ['#0068a8', '#000000'], players: `
Josep Martínez|GK|28|10000|ESP|2029||<2024-07-09
Ivan Provedel|GK|32|3000|ITA|2029||<2026-07-08
Raffaele Di Gennaro|GK|33|300|ITA|2027||2023-07-13
Alessandro Bastoni|CB|27|65000|ITA|2028||<2017-08-31
Yann Bisseck|CB|25|50000|GER|2031|CMR|2023-07-12
Manuel Akanji|CB|31|17000|SUI|2028|NGA|2026-07-01
John Stones|CB|32|12000|ENG|2028||2026-07-30
Benjamin Pavard|CB|30|12000|FRA|2028||2023-08-30
Federico Dimarco|LB|28|50000|ITA|2028||2018-07-05
Carlos Augusto|LB|27|23000|BRA|2028|ITA|<2024-07-01
Djed Spence|RB|26|35000|ENG|2031|JAM|2026-08-15
Aleksandar Stanković|DM|21|32000|SRB|2031|ITA|2026-06-29
Hakan Çalhanoğlu|DM|32|16000|TUR|2027|GER|<2021-07-01
Nicolò Barella|CM|29|50000|ITA|2029||<2020-09-01
Petar Sučić|CM|22|45000|CRO|2030|BIH|2025-06-01
Curtis Jones|CM|25|35000|ENG|2031||2026-08-21
Andy Diouf|CM|23|30000|FRA|2030|SEN|2025-08-22
Piotr Zieliński|CM|32|10000|POL|2028|ITA|<2024-07-01
Хенрих Мхитарян|CM|37|3000|ARM|2027||<2022-07-01
Luis Henrique|RW|24|20000|BRA|2030||2025-06-07
Lautaro Martínez|ST|29|85000|ARG|2029||2018-07-04
Marcus Thuram|ST|29|50000|FRA|2028|GLP|2023-07-01
Pio Esposito|ST|21|50000|ITA|2032||2023-07-01
Ange-Yoan Bonny|ST|22|35000|CIV|2030|FRA|<2025-07-05` },
    { id: 'napoli', name: 'Наполи', city: 'Неаполь', stadium: 'Stadio Diego Armando Maradona', cap: 54726, colors: ['#12a0d7', '#ffffff'], players: `
Vanja Milinković-Savić|GK|29|15000|SRB|2030|ESP|<2026-07-01
Alex Meret|GK|29|8000|ITA|2027||<2019-07-01
Nikita Contini|GK|30|400|ITA|2031|UKR|2015-07-01
Claudio Pugliese|GK|18|100|ITA|||2026-07-01
Alessandro Buongiorno|CB|27|25000|ITA|2029||<2024-07-13
Sam Beukema|CB|27|18000|NED|2030||<2025-07-20
Rafa Marín|CB|24|16000|ESP|2029||2024-07-10
Benoît Badiashile|CB|25|15000|FRA|2027|COD|2026-08-22
Amir Rrahmani|CB|32|10000|KVX|2027|ALB|<2020-01-20
Luca Marianucci|CB|22|7000|ITA|2032||<2025-07-01
Mathías Olivera|LB|28|15000|URU|2030|ESP|2022-07-01
Leonardo Spinazzola|LB|33|3500|ITA|2028||<2024-07-10
Costantino Favasuli|RB|22|8000|ITA|2027||<2026-08-19
Giovanni Di Lorenzo|RB|33|7500|ITA|2030||<2019-07-01
Billy Gilmour|DM|25|20000|SCO|2029||2024-08-30
Stanislav Lobotka|DM|31|10000|SVK|2027||2020-01-15
Scott McTominay|CM|29|40000|SCO|2028|ENG|2024-08-30
Frank Anguissa|CM|30|15000|CMR|2027||2022-07-01
Antonio Vergara|AM|23|20000|ITA|2031||2022-07-01
Kevin De Bruyne|AM|35|8000|BEL|2027|BDI|2025-07-01
Alisson Santos|LW|24|28000|BRA|2030|TUN|2026-07-01
Noa Lang|LW|27|20000|NED|2030|SUR|2025-07-17
David Neres|RW|29|18000|BRA|2028||2024-08-21
Matteo Politano|RW|33|5000|ITA|2028||<2021-07-01
Rasmus Højlund|ST|23|60000|DEN|2030||2026-07-01
Lorenzo Lucca|ST|26|20000|ITA|2030||2026-01-22
Giovane|ST|22|12000|BRA|2030||<2026-01-24` },
    { id: 'roma', name: 'Рома', city: 'Рим', stadium: 'Stadio Olimpico', cap: 70634, colors: ['#8e1f2f', '#f0bc42'], players: `
Mile Svilar|GK|27|35000|SRB|2030|BEL|2022-07-01
Devis Vásquez|GK|28|800|COL|2027||2025-07-29
Pierluigi Gollini|GK|31|800|ITA|2027||<2025-01-24
Giorgio De Marzi|GK|19|100|USA|2027|ITA|2026-07-01
Evan Ndicka|CB|27|35000|CIV|2028|FRA|2023-07-01
Konstantinos Koulierakis|CB|22|20000|GRE|2031||2026-08-01
Leonardo Balerdi|CB|27|18000|ARG|2027|ITA|2026-08-30
Daniele Ghilardi|CB|23|18000|ITA|2030||<2026-07-01
Gianluca Mancini|CB|30|15000|ITA|2029||<2020-09-01
Mario Hermoso|CB|31|7000|ESP|2027||2024-09-02
Wesley|RB|23|40000|BRA|2030||2025-07-28
Nahuel Molina|RB|28|15000|ARG|2030||2026-08-12
Devyne Rensch|RB|23|8500|NED|2029|SUR|2025-01-23
Emanuele Lulli|RB|19|8000|ITA|2027||2026-07-01
Bryan Cristante|DM|31|7000|ITA|2028|CAN|<2019-07-01
Marten de Roon|DM|35|3200|NED|2028||<2026-08-30
Manu Koné|CM|25|60000|FRA|2029|CIV|2024-08-30
Niccolò Pisilli|CM|22|30000|ITA|2029||2024-07-01
Rodrigo Mora|AM|19|38000|POR|2031||2026-08-19
Lorenzo Pellegrini|AM|30|8000|ITA|2027||<2017-07-01
Matías Soulé|RW|23|35000|ARG|2029|ITA|<2024-07-30
Paulo Dybala|ST|32|5000|ARG|2027|ITA|<2022-07-20
Donyell Malen|ST|27|55000|NED|2030|SUR|2026-07-01
Santiago Castro|ST|22|32000|ARG|2031|ITA|<2026-07-30
Antonio Arena|ST|17|4000|ITA|2028|AUS|2026-07-01` },
    { id: 'como', name: 'Комо', city: 'Комо', stadium: 'Stadio Giuseppe Sinigaglia', cap: 13602, colors: ['#003c71', '#ffffff'], players: `
Robert Sánchez|GK|28|15000|ESP|2027|ENG|2026-09-01
Jean Butez|GK|31|8000|FRA|2030||2025-01-07
Mauro Vigorito|GK|36|150|ITA|2027||2023-07-01
Jacobo Ramón|CB|21|45000|ESP|2030||2025-07-31
Trevoh Chalobah|CB|27|35000|ENG|2031|SLE|2026-08-09
Alberto Dossena|CB|28|5000|ITA|2028||<2024-07-01
Marc Oliver Kempf|CB|31|3500|GER|2029||2024-08-28
Willy Kambwala|CB|22|3000|COD|2027|FRA|2026-08-26
Edoardo Goldaniga|CB|32|2000|ITA|2028||<2024-01-28
Kaiki|LB|23|14000|BRA|2027||2026-07-02
Álex Valle|LB|22|12000|ESP|2029||2025-07-01
Yan Couto|RB|24|17000|BRA|2027|POR|2026-08-06
Ivan Smolcic|RB|26|3500|CRO|2031||2025-02-03
Máximo Perrone|DM|23|35000|ARG|2029|ESP|2025-07-18
Samuele Ricci|DM|25|22000|ITA|2027||<2026-08-29
Lucas Da Cunha|CM|25|30000|FRA|2031|POR|2023-01-16
Maxence Caqueret|CM|26|13000|FRA|2029||2025-01-12
Adrian Lahdo|CM|18|10000|SWE|2031|LBN|2026-02-02
Luis Milla|CM|32|8000|ESP|2029||2026-07-02
Nico Paz|AM|22|80000|ARG|2028|ESP|2024-08-25
Martin Baturina|AM|23|55000|CRO|2030||2025-07-01
Mattia Liberali|AM|19|10000|ITA|2031||<2026-07-15
Assane Diao|LW|21|35000|SEN|2029|ESP|2025-01-07
Jesús Rodríguez|LW|20|30000|ESP|2030||2025-07-02
Jayden Addai|RW|21|20000|NED|2030|GHA|2025-07-04
Moise Kean|ST|26|32000|ITA|2027|CIV|<2026-09-01
Anastasios Douvikas|ST|27|25000|GRE|2029||2025-02-03` },
    { id: 'milan', name: 'Милан', city: 'Милан', stadium: 'Stadio Giuseppe Meazza', cap: 75817, colors: ['#fb090b', '#000000'], players: `
Mike Maignan|GK|31|20000|FRA|2031|FRE|2021-07-01
Lorenzo Torriani|GK|21|2000|ITA|2030||2024-07-01
Pietro Terracciano|GK|36|900|ITA|2027||<2025-07-18
Strahinja Pavlović|CB|25|40000|SRB|2031||2024-07-31
Mario Gila|CB|26|30000|ESP|2031||<2026-07-10
Koni De Winter|CB|24|25000|BEL|2030||<2025-08-13
Matteo Gabbia|CB|27|17000|ITA|2029||2017-07-01
Fikayo Tomori|CB|28|10000|ENG|2027|CAN|2021-07-01
Filippo Terracciano|CB|23|4500|ITA|2028||<2024-01-08
Sankhoun Diawara|CB|20|2000|FRA|2031|SEN|2026-07-28
Valeri Vladimirov|CB|18|800|BUL|2029||2026-09-02
Davide Bartesaghi|LB|20|22000|ITA|2030||2025-07-01
Pervis Estupiñán|LB|28|12000|ECU|2030|ESP|2025-07-24
Ardon Jashari|DM|24|22000|SUI|2030|MKD|2025-08-06
Adrien Rabiot|CM|31|18000|FRA|2028||2025-09-01
Yunus Musah|CM|23|18000|USA|2028|ENG|<2023-08-04
Christian Comotto|CM|18|10000|ITA|2031||2025-07-01
Ruben Loftus-Cheek|CM|30|8500|ENG|2027|GUY|2023-07-01
Warren Bondo|CM|23|4000|FRA|2029|COD|<2025-02-03
Luka Modrić|CM|41|3500|CRO|2027||2025-07-14
Alexis Saelemaekers|RW|27|18000|BEL|2031||2020-09-01
Diego Moreira|LW|22|45000|BEL|2031|POR|2026-08-19
Alphadjo Cisse|AM|20|20000|ITA|2030|GUI|<2026-02-02
Christian Pulisic|RW|28|35000|USA|2027|CRO|2023-07-13
Omari Hutchinson|RW|22|30000|ENG|2027|JAM|2026-08-31
Samuel Chukwueze|RW|27|20000|NGA|2028||2023-07-27
Gonçalo Ramos|ST|25|50000|POR|2031||2026-06-30
Francesco Camarda|ST|18|15000|ITA|2031||<2025-06-01` },
    { id: 'juventus', name: 'Ювентус', city: 'Турин', stadium: 'Allianz Stadium', cap: 41689, colors: ['#000000', '#ffffff'], players: `
Kamil Grabara|GK|27|12000|POL|2027||2026-08-25
Guglielmo Vicario|GK|30|12000|ITA|2027||2026-08-18
Neto|GK|37|900|BRA|2027|ITA|2026-09-28
Carlo Pinsoglio|GK|36|200|ITA|2027||<2014-07-01
Bremer|CB|29|35000|BRA|2029||<2022-07-20
Pierre Kalulu|CB|26|32000|FRA|2029|COD|<2025-07-01
Lloyd Kelly|CB|28|23000|ENG|2029|JAM|2025-07-01
Jhon Lucumí|CB|28|22000|COL|2030||<2026-08-17
Federico Gatti|CB|28|10000|ITA|2030||<2022-01-31
Daniele Rugani|CB|32|2000|ITA|2028||<2013-07-31
Andrea Cambiaso|LB|26|15000|ITA|2029||<2022-07-14
Juan Cabal|LB|25|7000|COL|2029||<2024-07-18
Zeki Çelik|RB|29|14000|TUR|2029||<2026-07-16
Manuel Locatelli|DM|28|25000|ITA|2030||<2023-07-01
Teun Koopmeiners|DM|28|14000|NED|2029||<2024-08-28
Khéphren Thuram|CM|25|35000|FRA|2029|GLP|2024-07-10
Weston McKennie|CM|28|30000|USA|2030||2021-07-01
Pape Matar Sarr|CM|24|30000|SEN|2027||2026-09-01
Douglas Luiz|CM|28|18000|BRA|2029||2024-07-01
Kenan Yıldız|LW|21|75000|TUR|2030|GER|2023-11-07
Kerim Alajbegovic|LW|19|32000|BIH|2031|GER|2026-08-02
Nico González|LW|28|22000|ARG|2030|ITA|2025-07-01
Jérémie Boga|LW|29|8000|CIV|2029|FRA|2026-07-01
Francisco Conceição|RW|23|30000|POR|2030||2025-07-22
Edon Zhegrova|RW|27|10000|KVX|2030|ALB|2025-09-01
Nick Woltemade|ST|24|50000|GER|2027||2026-09-01
Randal Kolo Muani|ST|27|30000|FRA|2031|COD|2026-08-02
Jeff Ekhator|ST|19|18000|ITA|2031|NGA|<2026-07-01
Arkadiusz Milik|ST|32|1500|POL|2027||2023-07-01` },
    { id: 'atalanta', name: 'Аталанта', city: 'Бергамо', stadium: 'New Balance Arena', cap: 24950, colors: ['#1e71b8', '#000000'], players: `
Marco Carnesecchi|GK|26|30000|ITA|2028||2019-07-01
Marco Sportiello|GK|34|800|ITA|2028||<2025-07-18
Thomas Pompei|GK|20|250|ITA|||2026-09-01
Giorgio Scalvini|CB|22|38000|ITA|2031||2021-07-09
Isak Hien|CB|27|22000|SWE|2028|GHA|<2024-01-02
Thomas Kristensen|CB|24|18000|DEN|2027||<2026-08-13
Odilon Kossounou|CB|25|15000|CIV|2029||2025-07-01
Sead Kolasinac|CB|33|4000|BIH|2027|GER|2023-07-06
Relja Obrić|CB|20|1500|SVN|2028|SRB|2026-07-01
Lorenzo Bernasconi|LB|22|20000|ITA|2030||2025-07-01
Raoul Bellanova|RB|26|15000|ITA|2029||<2024-08-22
Davide Zappacosta|RB|34|3500|ITA|2028||2021-08-24
Gianluca Gaetano|DM|26|12000|ITA|2031||<2026-07-09
Éderson|CM|27|40000|BRA|2031||2022-07-06
Franck Kessié|CM|29|12000|CIV|2029|ITA|2026-08-29
Mario Pašalić|CM|31|6000|CRO|2028||2020-09-01
Nicola Zalewski|LW|24|20000|POL|2029|ITA|<2025-08-18
Charles De Ketelaere|AM|25|35000|BEL|2028||<2024-07-01
Lazar Samardžić|AM|24|16000|SRB|2029|GER|<2025-07-01
Eljif Elmas|AM|27|13000|MKD|2027||2026-08-22
Jonathan Rowe|LW|23|33000|ENG|2027|JAM|<2026-09-01
Kamaldeen Sulemana|LW|24|17000|GHA|2029||2025-07-02
Giacomo Raspadori|ST|26|22000|ITA|2030||2026-01-15
Nikola Krstović|ST|26|30000|MNE|2030|SRB|<2025-08-20
Gianluca Scamacca|ST|27|25000|ITA|2028||2023-08-07` },
    { id: 'bologna', name: 'Болонья', city: 'Болонья', stadium: 'Stadio Renato Dall\'Ara', cap: 39279, colors: ['#a21c26', '#1a2f48'], players: `
Massimo Pessina|GK|18|4500|ITA|2029||2025-07-01
Lukasz Skorupski|GK|35|2000|POL|2027||<2018-07-01
Ukko Happonen|GK|19|50|FIN|||2026-07-01
Arthur Theate|CB|26|15000|BEL|2027||2026-08-30
Torbjørn Heggem|CB|27|15000|NOR|2029||2025-08-15
Martin Vitík|CB|23|13000|CZE|2029||2025-07-06
Eivind Helland|CB|21|8000|NOR|2030||2026-01-16
Nicolò Casale|CB|28|3800|ITA|2028||<2025-07-01
Juan Miranda|LB|26|15000|ESP|2028||2024-07-03
Rahim Alhassane|LB|24|3500|NIG|2030|ESP|2026-07-20
Emil Holm|RB|26|10000|SWE|2028||<2024-07-01
Nadir Zortea|RB|27|7000|ITA|2029||<2025-08-20
Matteo Darmian|RB|36|1400|ITA|2027||2026-10-08
Lorenzo De Silvestri|RB|38|600|ITA|2027||<2020-09-17
Nikola Moro|DM|28|7000|CRO|2027||2023-07-02
Oussama El Azzouzi|DM|25|1800|MAR|2027|NED|2023-07-20
Lewis Ferguson|CM|27|14000|SCO|2028||2022-07-12
Mikel Amondarain|CM|21|8500|ARG|2031||2026-07-29
Tommaso Pobega|CM|27|8000|ITA|2028||<2026-07-01
Marco Libra|CM|18|1500|VEN||ITA|2026-07-01
Jens Odgaard|AM|27|12000|DEN|2029||2024-07-01
Nicolò Cambiaghi|LW|25|14000|ITA|2029||<2024-07-12
Samuel Mbangula|LW|22|8000|BEL|2027|COD|2026-09-01
Riccardo Orsolini|RW|29|15000|ITA|2031||<2019-07-01
Federico Bernardeschi|RW|32|3500|ITA|2027||2025-07-19
Roberto Piccoli|ST|25|16000|ITA|2027||<2026-08-13
Артём Довбык|ST|29|15000|UKR|2027||<2026-07-30
Jay Enem|ST|23|6000|NED|2030|NGA|2026-09-01` },
    { id: 'lazio', name: 'Лацио', city: 'Рим', stadium: 'Stadio Olimpico', cap: 70634, colors: ['#87d8f7', '#ffffff'], players: `
Christos Mandas|GK|25|10000|GRE|2029||2023-09-01
Edoardo Motta|GK|21|8000|ITA|2030||2026-01-27
Alessio Furlanetto|GK|24|350|ITA|2028||2022-07-01
Davide Renzetti|GK|20|150|ITA|2027||2024-07-01
Oliver Provstgaard|CB|23|20000|DEN|2031||2025-02-03
Danilho Doekhi|CB|28|13000|NED|2029|SUR|2026-07-14
Diogo Leite|CB|27|12000|POR|2028||2026-09-08
Josip Sutalo|CB|26|12000|CRO|2027||2026-08-22
Filipe Bordon|CB|21|750|BRA|2028|ITA|<2024-07-01
Ricardo Bordon|CB|19|200|BRA|2027||2026-07-01
Nuno Tavares|LB|26|12000|POR|2029|CPV|2025-07-01
Luca Pellegrini|LB|27|3000|ITA|2027||<2025-07-01
Alfonso Pedraza|LB|30|2500|ESP|2029||2026-07-03
Mohamed Fares|LB|30|500|ALG|2027|FRA|2020-10-01
Romano Floriani Mussolini|RB|23|5000|ITA|2028||<2023-07-01
Adam Marusic|RB|34|2500|MNE|2028|SRB|2017-07-01
Manuel Lazzari|RB|32|2000|ITA|2027||2019-07-12
Nicolò Rovella|DM|24|23000|ITA|2028||<2025-07-01
Reda Belahyane|DM|22|7500|MAR|2029|FRA|<2025-02-03
Danilo Cataldi|DM|32|3500|ITA|2027||2013-07-01
Bruno Galassi|DM|19|100|ARG|2029|ESP|2026-07-17
Kenneth Taylor|CM|24|25000|NED|2030||2026-01-09
Davide Frattesi|CM|27|22000|ITA|2027||<2026-08-14
Fisayo Dele-Bashiru|CM|25|6000|NGA|2028|ENG|2025-07-01
Valerio Farcomeni|CM|20|100|ITA|2030||2026-07-01
Adrian Przyborek|AM|19|6000|POL|2030||2026-01-31
Tijjani Noslin|LW|27|8000|NED|2029|SUR|<2024-07-01
Mattia Zaccagni|LW|31|7500|ITA|2029||<2022-07-01
Gustav Isaksen|RW|25|15000|DEN|2028||2023-08-08
Matteo Cancellieri|RW|24|7000|ITA|2027||<2023-07-01
Albert Gudmundsson|ST|29|12000|ISL|2027||<2026-09-01
Andrea Pinamonti|ST|27|15000|ITA|2031||<2026-08-27
Federico Serra|ST|20|400|ITA|||2026-07-01` },
    { id: 'udinese', name: 'Удинезе', city: 'Удине', stadium: 'Bluenergy Stadium', cap: 25952, colors: ['#000000', '#ffffff'], players: `
Maduka Okoye|GK|27|10000|NGA|2028|GER|2023-08-24
Bartosz Mrozek|GK|26|2000|POL|2030||2026-08-28
Daniele Padelli|GK|40|150|ITA|2027||<2021-07-01
Oumar Solet|CB|26|20000|FRA|2027|CIV|2025-01-02
James Abankwah|CB|22|8000|IRL|2029|GHA|2022-01-26
Matteo Palma|CB|18|8000|GER|2031|ITA|<2024-07-01
Nicolò Bertola|CB|23|7000|ITA|2030||2025-07-01
David Alaba|CB|34|3000|AUT|2027||2026-09-24
Enzo Ebosse|CB|27|2800|CMR|2027|FRA|<2022-07-29
Christian Kabasele|CB|35|750|BEL|2027|COD|2023-07-25
Hassane Kamara|LB|32|3000|CIV|2028|FRA|2022-08-22
Alessandro Zanoli|RB|26|4500|ITA|2029||<2026-07-01
Mërgim Vojvoda|RB|31|2500|KVX|2028|ALB|<2026-07-18
Jesper Karlström|DM|31|4000|SWE|2028||2024-08-03
Jurgen Ekkelenkamp|CM|26|13000|NED|2029||2024-08-06
Lennon Miller|CM|20|10000|SCO|2030||2025-08-12
Jakub Piotrowski|CM|29|4500|POL|2029||2025-08-02
Sandi Lovrić|CM|28|3500|SVN|2027|AUT|<2022-07-01
Oier Zarraga|CM|27|1500|ESP|2027||2023-07-01
Juan Arizala|LW|21|3500|COL|2030||2026-01-06
Unai Gómez|AM|23|5000|ESP|2031||2026-07-08
Гиорги Чакветадзе|AM|27|3500|GEO|2030||2026-07-06
Lazar Jovanovic|RW|19|6000|SRB|2031||2026-09-01
Nicolò Zaniolo|ST|27|15000|ITA|2029||2026-07-01
Keinan Davis|ST|28|10000|ENG|2031|JAM|2023-09-01
Idrissa Gueye|ST|20|8000|SEN|2030||2026-07-01
Vakoun Bayo|ST|29|2500|CIV|2028||2024-08-29
Giulio Vinciati|ST|19|100|ITA|2029||2026-07-01` },
    { id: 'sassuolo', name: 'Сассуоло', city: 'Сассуоло', stadium: 'MAPEI Stadium - Città del Tricolore', cap: 23717, colors: ['#00a752', '#000000'], players: `
Arijanet Murić|GK|27|7500|KVX||MNE|2026-07-01
Stefano Turati|GK|25|3000|ITA|2031||2019-10-01
Giacomo Satalino|GK|27|400|ITA|2027||2018-07-01
Jay Idzes|CB|26|14000|IDN|2029|NED|<2025-08-09
Fedde Leysen|CB|23|7000|BEL|2027||2026-08-21
Fali Candé|CB|28|3000|GNB|2029|POR|<2025-08-10
Duje Caleta-Car|CB|30|2800|CRO|2028||2026-09-01
Cas Odenthal|CB|26|1200|NED|2027||2024-07-30
Rafa Obrador|LB|22|5000|ESP|2027||2026-08-14
Josh Doig|LB|24|4500|SCO|2028||<2024-01-20
Edoardo Pieragnolo|LB|23|2000|ITA|2029||2023-07-01
Sebastian Walukiewicz|RB|26|5000|POL|||<2026-07-01
Ignace Van der Brempt|RB|24|5000|BEL|2027||<2026-08-30
Simone Cinquegrano|RB|22|2500|ITA|2032|ARG|2024-07-01
Yeferson Paz|RB|24|400|COL|2027||2022-07-01
Luca Lipani|DM|21|7500|ITA|2028||<2023-08-08
Ibrahim Sulemana|DM|23|6000|GHA|2027||<2026-09-01
Daniel Boloca|DM|27|4000|ITA|2028|ROU|<2023-07-13
Nemanja Matić|DM|38|1600|SRB|2027|SVK|2025-08-26
Andrea Ghion|DM|26|800|ITA|2029||<2019-07-01
Ismaël Koné|CM|24|25000|CAN|2030|CIV|2026-02-02
Darryl Bakola|CM|18|15000|FRA|2030|CGO|2026-02-02
Kristian Thorstvedt|CM|27|10000|NOR|2027||2022-07-12
Vasilije Adžić|AM|20|15000|MNE|2027||<2026-08-03
Armand Laurienté|LW|27|19000|FRA|2029|GLP|2022-08-31
Benja Domínguez|LW|23|9000|ARG|2027||<2026-08-11
Cristian Volpato|RW|22|10000|AUS|2031|ITA|<2023-07-01
Domenico Berardi|RW|32|7000|ITA|2029||<2015-07-01
Nicholas Pierini|RW|28|1600|ITA|2027||<2024-08-30
Sebastiano Esposito|ST|24|15000|ITA|2027||<2026-08-29
Kieron Bowie|ST|24|8000|SCO|2027||<2026-07-31
Laurs Skjellerup|ST|24|1300|DEN|2029||2025-01-20` },
    { id: 'torino', name: 'Торино', city: 'Турин', stadium: 'Stadio Olimpico Grande Torino', cap: 27958, colors: ['#8a1e03', '#ffffff'], players: `
Lucas Perri|GK|28|10000|BRA|2027|ITA|2026-08-29
Franco Israel|GK|26|2500|URU|2028|ITA|2025-07-27
Diego Mascardi|GK|20|1300|ITA|2031||2026-07-16
Lapo Siviero|GK|19|500|ITA|2029||2026-01-22
Pietro Comuzzo|CB|21|18000|ITA|2027||<2026-07-29
Saúl Coco|CB|27|7500|EQG|2029|ESP|2024-07-17
Ardian Ismajli|CB|30|5000|ALB|2027|KVX|<2025-07-08
Eray Cömert|CB|28|2500|SUI|2028|TUR|2026-07-29
Niccolò Fortini|LB|20|10000|ITA|2027||<2026-08-21
Ricardo Rodríguez|LB|34|1400|SUI|2027|CHI|2026-09-03
Cristiano Biraghi|LB|34|900|ITA|2027||<2025-07-01
Rafik Belghali|RB|24|8000|ALG|2027|BEL|<2026-09-01
Nathan Patterson|RB|25|5000|SCO|2029||2026-09-01
Rolando Mandragora|DM|29|7500|ITA|2030||<2026-09-01
Emirhan İlkhan|DM|22|6000|TUR|2027||2022-08-08
Cesare Casadei|CM|23|15000|ITA|2029||2025-02-02
Gvidas Gineitis|CM|22|8000|LTU|2029||2023-01-02
Daniel Bragança|CM|27|7000|POR|2027||2026-09-01
Kian Fitz-Jim|CM|23|3500|NED|2029|SUR|2026-07-31
Andrea Luongo|CM|18|1000|ITA|2029||2026-07-01
Alessio Cacciamani|LW|19|12000|ITA|2031||<2025-07-01
Nikola Vlašić|AM|29|10000|CRO|2027||2023-08-08
Gaetano Oristanio|AM|24|5000|ITA|2027||<2026-07-09
Zakaria Aboukhlal|RW|26|5000|MAR|2029|NED|2025-07-29
Giovanni Simeone|ST|31|7000|ARG|2028|ESP|<2026-07-01
Ché Adams|ST|30|5000|SCO|2027|ENG|2024-07-23
Sandro Kulenović|ST|26|3500|CRO|2029||2026-07-01
Duván Zapata|ST|35|2500|COL|2028||<2024-07-01
Pietro Pellegri|ST|25|500|ITA|2027||<2022-07-01` },
    { id: 'parma', name: 'Парма', city: 'Парма', stadium: 'Stadio Ennio Tardini', cap: 22885, colors: ['#ffffff', '#ffd200'], players: `
Giovanni Daffara|GK|21|3500|ITA|2031||2026-07-01
Edoardo Corvi|GK|25|3000|ITA|2029||2020-07-01
Simone Ghidotti|GK|26|400|ITA|||<2026-09-01
Mariano Troilo|CB|23|10000|ARG|2030||2025-08-21
Abdoulaye Ndiaye|CB|24|6000|SEN|2029||2025-08-04
Diego Carlos|CB|33|3000|BRA|2027|ESP|2026-09-01
Lautaro Valenti|CB|27|2000|ARG|2027|ITA|2021-07-01
Dominik Drobnic|CB|19|1800|SVN|||2026-07-01
Emanuele Valeri|LB|27|3000|ITA|2028||<2024-07-01
Franco Carboni|LB|23|1500|ARG|2030|ITA|<2026-07-02
Sascha Britschgi|RB|20|10000|SUI|2030|CMR|2025-08-26
Enrico Delprato|RB|26|6000|ITA|2029||<2022-07-01
Mandela Keita|DM|24|20000|BEL|2029|GUI|2024-08-30
Hans Nicolussi Caviglia|DM|26|6000|ITA|2030||<2026-07-01
Adrián Bernabé|CM|25|15000|ESP|2027||2021-07-07
Christian Ordóñez|CM|22|6500|ARG|2030|PAR|2025-07-01
Benja Cremaschi|CM|21|4000|USA|2031|ITA|2026-07-01
Vincent Sierro|CM|31|2500|SUI|2027||2026-09-04
Abdou-Salam Konate|CM|19|1500|SEN|2029|FRA|2026-07-01
Giovanni Fabbian|AM|23|10000|ITA|2027||<2026-08-28
El Bilal Touré|LW|25|13000|MLI|2027|CIV|<2026-08-07
Ousmane Diallo|LW|19|1500|ESP|2031|SEN|2026-07-31
Pontus Almqvist|RW|27|1800|SWE|2027||2024-08-13
Simone Lontani|ST|18|6000|ITA|2030||2026-07-01
David Romero|ST|23|7000|ARG|2031||2026-08-14
Matija Frigan|ST|23|7000|CRO|2030||2025-08-15
Nesta Elphege|ST|25|4000|FRA|2030|CMR|2026-01-30
Thomás De Martis|ST|18|125|ARG|2027||2026-08-18` },
    { id: 'cagliari', name: 'Кальяри', city: 'Кальяри', stadium: 'Unipol Domus', cap: 16416, colors: ['#a50f28', '#002350'], players: `
Elia Caprile|GK|25|12000|ITA|2029|ALB|<2025-07-01
Alen Sherri|GK|28|800|ALB|2028||2024-07-24
Boris Radunović|GK|30|500|SRB|2029||2021-07-14
Juan Rodríguez|CB|21|14000|URU|2030||2025-09-01
Raphael Kofler|CB|21|5500|ITA|2027||<2026-07-31
Zé Pedro|CB|29|3000|POR|2028||2025-09-01
Yerry Mina|CB|32|2500|COL|2028||<2024-02-01
Adam Obert|LB|24|9000|SVK|2030||2021-07-01
Riyad Idrissi|LB|21|4000|ITA|2030|MAR|2024-07-01
Giuseppe Aurelio|LB|26|800|ITA|2029||2026-08-10
Nicola Grandu|LB|20|300|ITA|2029||2026-07-01
Yukinari Sugawara|RB|26|5500|JPN|2027||2026-09-01
Alessandro Romano|DM|20|15000|ITA|2027|SUI|<2026-07-01
Harry Winks|DM|30|2500|ENG|2028||2026-07-15
Michel Adopo|CM|26|8500|FRA|2029|CIV|<2025-07-01
Jacopo Fazzini|CM|23|8500|ITA|2027||<2026-07-13
Joseph Liteta|CM|20|3500|ZAM|2030||2025-10-19
Alessandro Deiola|CM|31|1500|ITA|2029||2014-07-01
Roberto Gagliardini|CM|32|1300|ITA|2027||<2026-08-31
Demi Akarakiri|CM|19|450|ENG|2030|NGA|2026-07-03
Ivan Sulev|CM|20|200|BUL|2029||2026-07-01
Daniel Maldini|AM|25|9000|ITA|2027|VEN|<2026-08-09
Yanis Massolin|AM|24|4500|FRA|2027|ALG|<2026-08-31
Alieu Fadera|LW|24|4500|GAM|2027||<2026-08-21
Mattia Felici|LW|25|2500|ITA|2027||2024-07-10
Riccardo Ciervo|LW|24|2000|ITA|2027||<2026-08-29
Paul Mendy|ST|19|12000|SEN|2031||2026-03-05
Kevin Carlos|ST|25|3500|ESP|2027|NGA|2026-08-10
M'Bala Nzola|ST|30|2500|ANG|2027|FRA|<2026-09-01
Yael Trepy|ST|20|2000|FRA|2030||2026-02-02` },
    { id: 'fiorentina', name: 'Фиорентина', city: 'Флоренция', stadium: 'Stadio Artemio Franchi', cap: 43147, colors: ['#482e92', '#ffffff'], players: `
David de Gea|GK|35|3500|ESP|2028||2024-08-09
Oliver Christensen|GK|27|1400|DEN|2028||2023-08-10
Luca Lezzerini|GK|31|350|ITA|2028||2025-08-01
Radu Drăgușin|CB|24|16000|ROU|2027||2026-07-08
Víctor Valdepeñas|CB|20|12000|ESP|||2026-07-31
Viery|CB|21|12000|BRA|2031||2026-07-01
Marin Pongracic|CB|29|6500|CRO|2029|GER|<2024-07-19
Luca Ranieri|CB|27|6000|ITA|2029||2018-07-01
Fabiano Parisi|LB|25|6000|ITA|2029||<2023-07-14
Álex Jiménez|RB|21|22000|ESP|2027||2026-07-13
Dodô|RB|27|16000|BRA|2027||2022-07-22
João Mário|RB|26|8000|POR|2027||<2026-08-03
Christ Inao Oulaï|CM|20|28000|CIV|||2026-07-19
Arthur Atta|CM|23|25000|FRA|2031|BEN|<2026-07-11
Cher Ndour|CM|22|20000|ITA|2029|SEN|2025-02-03
Nicolò Fagioli|CM|25|16000|ITA|2028||<2025-07-01
Marco Brescianini|CM|26|9000|ITA|2030||<2026-07-01
Pedro Gonçalves|LW|28|25000|POR|2027||2026-09-01
Alieu Njie|LW|21|15000|SWE|2027|GAM|<2026-08-30
Riccardo Sottil|LW|27|1500|ITA|2027||<2018-07-01
Franco Mastantuono|RW|19|45000|ARG|2027|ITA|2026-08-07
Wilfried Gnonto|RW|22|16000|ITA|2027|CIV|2026-09-01
Federico Croci|ST|16|3000|ITA|2029||2026-07-01
Mateo Pellegrino|ST|25|22000|ARG|2031|ESP|<2026-08-13
Beto|ST|28|18000|GNB|2030|POR|2026-09-01` },
    { id: 'genoa', name: 'Дженоа', city: 'Генуя', stadium: 'Stadio Comunale Luigi Ferraris', cap: 36703, colors: ['#a3001c', '#001d40'], players: `
Justin Bijlow|GK|28|4000|NED|2029||2026-01-20
Franz Stolz|GK|25|600|AUT|2027||2024-01-27
Daniele Sommariva|GK|29|100|ITA|||2023-07-05
Rendijs Mihelsons|GK|18|100|LVA|2028||2026-07-01
Johan Vásquez|CB|28|14000|MEX|2028||2022-01-03
Alessandro Marcandalli|CB|23|14000|ITA|2029|NGA|2022-07-01
Leo Østigård|CB|26|13000|NOR|2030||2026-01-31
Sebastian Otoa|CB|22|2500|DEN|2028||2025-01-16
Mamedi Doucouré|CB|19|400|FRA||MLI|2026-07-01
Lukas Klišys|CB|19|100|LTU|2027||2026-07-01
Mario Mitaj|LB|23|6000|ALB|2027|GRE|2026-07-31
David Puczka|LB|21|3500|AUT|2031|POL|2026-07-02
Marcelo Vaz|LB|19|400|GNB|2029|SEN|2026-06-29
Cody Drameh|RB|24|4500|ENG||GAM|2026-09-01
Kingsley Ehizibue|RB|31|1500|NED|2027|NGA|2026-09-03
Stefano Sabelli|RB|33|1300|ITA|2028||<2021-07-20
Morten Frendrup|DM|25|15000|DEN|2028||2022-01-30
Hamed Traoré|CM|26|10000|CIV|2027||2026-07-17
Amorim|CM|21|8000|BRA|2030||2026-01-29
Djibril Sow|CM|29|7500|SUI|2030|SEN|2026-08-06
Mikael Egill Ellertsson|CM|24|6000|ISL|2029||<2025-01-30
Franz-Ethan Meichtry|CM|21|5000|SUI|2030|CMR|2026-07-01
Samuel Wiafe|CM|18|2500|ITA|2030|GHA|<2026-07-02
Tommaso Baldanzi|AM|23|8500|ITA|2027||<2026-01-23
Stephan El Shaarawy|LW|33|2000|ITA|2027|EGY|2026-09-02
Robinho Junior|RW|18|5000|BRA|2027|ITA|2026-09-01
Lorenzo Venturino|RW|20|5000|ITA|2029||<2025-01-15
Junior Messias|RW|35|1100|BRA|2027|ITA|<2024-01-13
Lorenzo Colombo|ST|24|10000|ITA|2029||<2026-07-01
Vitinha|ST|26|8000|POR|2028||2024-07-01
Milutin Osmajic|ST|27|3000|MNE|2029||2026-08-24
Elias Havel|ST|23|2200|AUT|2030||2026-07-10
Joi Nuredini|ST|19|1000|ALB|2029|ITA|2026-07-01` },
    { id: 'lecce', name: 'Лечче', city: 'Лечче', stadium: 'Stadio Ettore Giardiniero - Via del Mare', cap: 33876, colors: ['#fcd116', '#da291c'], players: `
Wladimiro Falcone|GK|31|3500|ITA|2029||<2023-07-27
Marco Bleve|GK|31|300|ITA|2028||<2026-08-19
Alexandru Borbei|GK|23|150|ROU|2028||2022-07-01
Plamen Penev|GK|18|150|BUL|2027||2026-08-05
Tiago Gabriel|CB|21|15000|POR|2030||2025-01-28
Jamil Siebert|CB|24|4500|GER|2028||2025-08-22
Gaspar|CB|29|3000|ANG|2027||2024-07-01
Gaby Jean|CB|26|1500|FRA|2027||2024-08-26
Sebastian Esposito|CB|21|600|AUS||ITA|2024-07-01
Elijah Scott|CB|20|400|USA|2027|GER|2026-07-01
Antonino Gallo|LB|26|3500|ITA|2029||<2019-07-25
Corrie Ndaba|LB|26|900|IRL|2028|GHA|2025-07-28
Vernon Addo|LB|21|175|NED|2028|GHA|2024-07-01
Danilo Veiga|RB|24|2500|POR|2027|BRA|2025-01-28
Ali Dembélé|RB|22|1300|FRA|2027|MLI|<2026-08-30
Marlon Ubani|RB|21|175|GER|2029|NGA|2025-07-01
Oumar Ngom|DM|22|3000|MTN|2029|FRA|2026-01-13
Sadik Fofana|DM|23|800|TOG|2029|GER|2026-01-15
Olaf Gorter|DM|21|800|NED|2029||2026-07-01
Niko Kovač|DM|21|300|BIH|2029|GER|2026-07-01
Ivan Ilić|CM|25|7000|SRB|2027||<2026-08-27
Medon Berisha|CM|23|5000|ALB|2028|KVX|2022-07-01
Mohamed Kaba|CM|24|2500|GUI|2027|FRA|2023-08-14
Lassana Coulibaly|CM|30|2200|MLI|2027||2024-08-14
Youssef Maleh|CM|28|1500|MAR|2027|ITA|<2023-07-01
Omri Gandelman|AM|26|3000|ISR|2029|POR|2026-01-09
Joël Monteiro|LW|27|3500|SUI|2029|POR|2026-08-31
Amar Fatah|LW|22|800|SWE|2029|SOM|2026-08-25
Santiago Pierotti|RW|25|4000|ARG|2027|ITA|2024-01-16
Konan N’Dri|RW|25|1500|NIG|2027|CIV|2025-02-02
Willem Geubbels|ST|25|5000|FRA|2030|NED|2026-08-02
Nikola Stulic|ST|25|3500|SRB|2029|CRO|2025-08-27
Paco Esteban|ST|20|500|ESP|2030||2026-07-01` },
    { id: 'venezia', name: 'Венеция', city: 'Венеция', stadium: 'Stadio Pier Luigi Penzo', cap: 12048, colors: ['#000000', '#f58025'], players: `
Filip Stanković|GK|24|8000|SRB|2030|ITA|<2025-07-01
Lorenzo Montipò|GK|30|1200|ITA|2028||<2026-08-19
Alessio Pozzi|GK|25|400|ITA|2030||2026-07-11
Matteo Grandi|GK|34|50|ITA|2028||2023-07-13
Armel Bella-Kotchap|CB|24|7000|GER|2030|CMR|<2026-07-01
Matías Moreno|CB|23|6000|ARG|2027||<2026-07-30
Joël Schingtienne|CB|24|5000|BEL|2031|COD|2024-08-28
Redouane Halhal|CB|23|5000|MAR|2030|FRA|2026-08-01
Marin Šverko|CB|28|1500|CRO|2028|GER|2023-07-07
Ale Gomes|CB|18|1500|ESP|2031|CPV|2026-07-09
Bartol Franjic|CB|26|1000|CRO|||2026-07-01
Juan Jesus|CB|35|1000|BRA|2027|ITA|<2026-08-31
Rufai Mohammed|CB|20|350|GHA|2027||2026-09-01
Pasquale Mazzocchi|RB|31|1500|ITA|2027||<2026-08-31
Gianluca Busio|DM|24|8000|USA|2028|ITA|2021-08-09
Simone Panada|DM|24|800|ITA|2030||2026-01-22
Simon Sohm|CM|25|8000|SUI|2027|NGA|<2026-08-02
Matteo Dagasso|CM|22|3500|ITA|2030||2026-01-28
Toma Bašić|CM|29|3000|CRO|2029||<2026-07-01
Kike Pérez|CM|29|2500|ESP|2027||2025-01-29
Thórir Jóhann Helgason|CM|26|1800|ISL|2029||<2026-07-01
Lamine Fanne|CM|22|1600|ESP|2030|SEN|2026-02-01
Alfred Duncan|CM|33|750|GHA|2027|ITA|<2024-07-26
Antoine Hainaut|RW|24|4000|FRA|2028||<2025-08-15
Thierry Correia|RW|27|2500|POR|2027|CPV|2026-07-02
Richie Sagrado|RW|22|1500|BEL|2028||2024-08-03
Lorenzo Berardi|LW|20|800|ITA|2031|FRA|2026-07-01
Ridgeciano Haps|LW|33|700|SUR|2028|NED|2021-08-31
Toni Fernández|AM|18|5000|ESP|2027||2026-09-01
Kornel Lisman|LW|20|1800|POL|2030||2026-06-29
John Yeboah|ST|26|5500|ECU|2030|GER|2024-08-30
Akor Adams|ST|26|15000|NGA|2030||2026-07-22
Albion Rrahmani|ST|26|7000|KVX|2029|ALB|2026-07-09
Andrea Adorante|ST|26|4500|ITA|2028||<2025-07-12
Lion Lauberbach|ST|28|2500|GER|2029||2026-01-29` },
    { id: 'frosinone', name: 'Фрозиноне', city: 'Фрозиноне', stadium: 'Stadio Benito Stirpe', cap: 16310, colors: ['#ffd200', '#00399a'], players: `
Lorenzo Palmisani|GK|22|6000|ITA|2031||2023-07-01
Sebastiano Desplanches|GK|23|1000|ITA|2027|FRA|<2026-07-18
Matteo Pisseri|GK|34|150|ITA|||2025-09-02
Gabriele Calvani|CB|22|6000|ITA|2027||<2025-07-11
Ilario Monterisi|CB|24|2500|ITA|2027||<2023-07-14
Giorgio Cittadini|CB|24|1500|ITA|2027||<2025-09-01
Kevin Akpoguma|CB|31|1500|NGA|2028|GER|2026-08-01
Wisdom Amey|CB|21|800|ITA|2027|TOG|<2026-07-07
Omar Fayed|CB|23|600|EGY|2030||2026-08-19
Gabriele Bracaglia|LB|23|4000|ITA|2029||2023-07-01
Aleksa Terzić|LB|27|2500|SRB|2029||2026-08-14
Anthony Oyono|RB|25|2000|GAB|2029|FRA|2022-01-30
Enzo Tchato|RB|23|1500|CMR|2030|FRA|2026-08-25
Matteo Cichella|DM|21|5000|ITA|||2024-07-01
Giacomo Calò|DM|29|2500|ITA|2029||<2026-07-01
Florian Grillitsch|DM|31|2500|AUT|2027||2026-08-12
Luis Hasa|CM|22|4500|ALB|2030|ITA|<2026-07-24
Patrizio Masini|CM|25|4500|ITA|2027||<2026-08-10
Anouar El Azzouzi|CM|25|1500|MAR|2029|NED|2026-07-13
Ben Lhassine Kone|CM|26|500|CIV|2029||<2026-07-01
Francesco Gelli|CM|30|500|ITA|||2023-01-31
Romano Schmid|AM|26|15000|AUT|2030||2026-08-12
Гиорги Квернадзе|LW|23|8000|GEO|2028||2024-07-01
Alessio Zerbin|LW|27|2000|ITA|2029||<2026-07-24
Farès Ghedjemis|RW|24|12000|ALG|2030|FRA|2024-01-02
Seydou Fini|RW|20|3500|ITA|2027|CIV|<2026-01-26
Tomas Bobcek|ST|25|10000|SVK|2031||2026-08-28
Antonio Raimondo|ST|22|7000|ITA|2027||<2025-07-17
Daniel Bîrligea|ST|26|4500|ROU|2027||2026-08-27` },
    { id: 'monza', name: 'Монца', city: 'Монца', stadium: 'U-Power Stadium', cap: 18568, colors: ['#e2001a', '#ffffff'], players: `
Noel Törnqvist|GK|24|2000|SWE|2027||<2026-08-31
Demba Thiam|GK|28|2000|SEN|2028|ITA|2025-07-08
Aljaz Strajnar|GK|19|200|SVN|2029||2025-08-19
Jan Ziolkowski|CB|21|12000|POL|2027||<2026-08-31
Eddy Kouadio|CB|20|6000|ITA|2027|CIV|<2026-07-08
Саба Гогличидзе|CB|22|3500|GEO|2027||<2026-09-01
Lorenzo Lucchesi|CB|23|3300|ITA|2030||<2026-07-01
Andrea Carboni|CB|25|3000|ITA|2029||<2022-07-01
Yvan Maye|CB|20|1500|FRA|2027|CIV|2026-08-25
Valentin Antov|CB|25|1500|BUL|2027||2022-07-01
Ricardo Mangas|LB|28|2000|POR|2027||2026-07-24
Samuele Birindelli|RB|27|2500|ITA|2028||<2022-07-07
Adam Bakoune|RB|20|2000|MAR|2027|ITA|2025-07-05
Leonardo Colombo|DM|21|4000|ITA|2029||2024-11-20
Ebenezer Akinsanmiro|CM|21|7000|NGA|2027||<2026-08-01
Matteo Pessina|CM|29|5000|ITA|2027||<2023-07-01
Michael Folorunsho|CM|28|5000|ITA|2027|NGA|<2026-08-28
Mathis Mout|CM|19|2000|ITA||FRA|2026-07-01
Foe Ondoa|CM|20|1500|FRA|2030|CMR|2026-07-01
Idrissa Touré|RW|28|4000|GER|2028|GUI|<2026-08-21
Patrick Ciurria|RW|31|1000|ITA|2028||2021-07-31
Andrea Colpani|AM|27|4000|ITA|2028||<2022-07-01
Jay Robinson|LW|19|8000|ENG|2027||2026-08-07
Keita Baldé|LW|31|800|SEN|2027|ESP|2025-02-13
Cyril Ngonge|RW|26|7000|BEL|2027|COD|<2026-08-28
Exequiel Zeballos|RW|24|7000|ARG|2030||2026-09-01
Omari Forson|RW|22|2500|ENG|2028|GHA|2024-07-01
Kevin Martins|RW|21|400|ITA|2028|NGA|2025-01-02
Gustavo Varela|ST|21|5000|POR|2030|CPV|2026-07-27
Patrick Cutrone|ST|28|4000|ITA|2029||<2026-07-01
Dany Mota|ST|28|2800|POR|2027|LUX|2020-07-01` },
  ],
});
