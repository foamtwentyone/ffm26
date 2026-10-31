// Про-лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'bel', name: 'Про-лига', short: 'Бельгия', country: 'BEL', tier: 1, weekday: 6,
  autumn: { from: '07-25', rounds: 17 }, spring: { from: '01-17', rounds: 17 },
  ticket: 15, prize: [10000, 9550, 9100, 8700, 8250, 7800, 7350, 6900, 6450, 6050, 5600, 5150, 4700, 4250, 3800, 3400, 2950, 2500],
  teams: [
    { id: 'anderlecht', name: 'Андерлехт', city: 'Брюссель', stadium: 'Lotto Park', cap: 28063, colors: ['#5b2b82', '#ffffff'], players: `
Colin Coosemans|GK|34|1200|BEL|2028||<2021-07-01
Justin Heekeren|GK|25|500|GER|2029||2026-01-20
Mattis Seghers|GK|17|200|BEL|2028||2026-07-01
Michiel Haentjens|GK|20|200|BEL|2027||2026-07-01
Andrew Omobamidele|CB|24|8000|IRL|2027|NGA|2026-09-02
Giulian Biancone|CB|26|3500|FRA|2029||2026-07-01
Lucas Hey|CB|23|2500|DEN|2029||2025-01-21
Léo Pétrot|CB|29|2000|FRA|2028||2026-07-02
Zoumana Keita|CB|20|400|GER|2029|MLI|2026-07-01
Kaïs Barry|CB|20|300|MAR|2027|BEL|2026-08-05
Олег Реабциук|LB|28|2500|MDA|2029|POR|2026-09-01
Ludwig Augustinsson|LB|32|1500|SWE|2027||2024-08-06
Ali Maamar|RB|21|5000|MAR|2028|BEL|2025-01-16
Ilay Camara|RB|23|3000|SEN|2030|BEL|<2025-07-05
Killian Sardella|RB|24|2500|BEL|2028|CMR|2019-07-01
Marco Kana|DM|24|4000|BEL|2028|COD|2019-07-01
Enric Llansana|DM|25|2000|NED|2029|ESP|2025-07-01
Noah Kalonji|DM|17|1000|BEL|2028||2026-07-01
Romeo Amane|CM|23|5000|CIV|2030||2026-09-02
Ilias Koutsoupias|CM|25|3000|GRE|2028||2026-09-03
Lukas Ambros|AM|22|6500|CZE|2030||2026-07-10
Mario Stroeykens|AM|22|3000|COD|2028|BEL|2021-01-01
Thelo Aasgaard|AM|24|2800|NOR|2027|ENG|2026-09-02
Joshua Nga Kana|LW|17|3500|BEL|2029||2026-07-01
Noa Ojea|LW|17|3000|BEL|2029|ESP|2026-08-08
Jayden Onia Seke|LW|17|2500|BEL|2029||2026-08-05
Marten Winkler|RW|23|4000|GER|2030||2026-08-17
Oliver Antman|RW|25|4000|FIN|2030||2026-07-29
Tristan Degreef|RW|21|3000|BEL|2028||2024-11-01
Mihajlo Cvetkovic|ST|19|10000|SRB|2029||2025-07-01
Tawfik Bentayeb|ST|24|8000|MAR|2030||2026-08-21
Даныло Сикан|ST|25|5000|UKR|2030||2026-01-21
Adriano Bertaccini|ST|26|2500|BEL|2029|ITA|<2025-08-01` },
    { id: 'antwerp', name: 'Антверпен', city: 'Антверпен', stadium: 'Bosuilstadion', cap: 23057, colors: ['#e30613', '#ffffff'], players: `
Taishi Brandon Nozawa|GK|23|5000|JPN|2029||2025-07-01
Yannick Thoelen|GK|36|200|BEL|2027||<2025-01-30
Lowie Piselé|GK|17|200|BEL|2027||2026-07-01
Niels Devalckeneer|GK|22|150|BEL|2028||2023-07-01
Álvaro Cortés|CB|21|4000|ESP|2030||2026-09-01
Rein Van Helden|CB|24|3000|BEL|2030||<2026-01-23
Yuto Tsunashima|CB|26|1500|JPN|2028||2025-08-06
Luca Schelfhout|CB|19|400|BEL|2030||2026-07-31
Daam Foulon|LB|27|2000|BEL|2028||<2025-07-01
Eran Tuypens|LB|20|750|BEL|2029||2026-07-01
Aaron Ibrahim|LB|18|200|BEL|2028||2026-07-01
Maxime Busi|RB|27|1500|BEL|2029||2026-07-29
Semm Renders|RB|18|1200|BEL|2029||2025-01-01
Arthur Vermeeren|DM|21|15000|BEL|2027||2026-09-03
Mauricio Benítez|DM|22|2500|ARG|2030||2026-08-27
Bahmed Deuff|DM|20|2000|MTN|2027|FRA|2026-09-03
Xander Dierckx|CM|17|5000|BEL|2028||2026-01-01
Modibo Fofana|CM|18|3000|CIV|2030||2026-07-01
Christopher Scott|CM|24|2200|GER|2028|GHA|2022-07-01
Youssef Hamdaoui|CM|18|1500|MAR|2029|BEL|2025-01-01
Louie Van Gelder|CM|17|500|BEL|2028||2026-07-01
Thibo Somers|RW|27|3000|BEL|2028||<2025-07-18
Farouck Adekami|AM|20|1500|CIV|2027||2025-01-01
Ibrahim Salah|LW|25|1800|MAR|2027|BEL|2026-08-04
Koki Ando|LW|19|300|JPN|2030||2026-07-01
Carlos Mejia|RW|19|3000|ECU|2030||2026-07-01
Мухаммадали Уринбоев|RW|21|400|UZB|2029||2025-07-07
Snayder Porozo|ST|19|2500|ECU|2030||2026-08-05
Luis Narh|ST|18|1000|GHA|2030||2026-07-01
Michael Frey|ST|32|600|SUI|2028||2026-07-30
Jeff Godelaine|ST|19|200|BEL|2029||2026-07-01` },
    { id: 'beveren', name: 'Беверен', city: 'Беверен', stadium: 'Freethielstadion', cap: 8235, colors: ['#ffd700', '#1d3c8f'], players: `
Johannes Schenk|GK|23|1500|GER|2027||2026-08-05
Maxim Deman|GK|25|100|BEL|2027||<2023-07-04
Milan De Schutter|GK|23|50|BEL|2028||2026-07-31
Josua Lusamba|GK|21|50|COD|2028|BEL|2024-07-01
Yoni Gomis|CB|21|2000|FRA|2027|SEN|2025-07-14
Viktor Boone|CB|28|700|BEL|2027||2025-07-01
Jannik Robatsch|CB|21|500|AUT|2027||2026-08-21
Stephane Keller|CB|25|400|CMR|2027||2026-09-03
Bruno Godeau|CB|34|300|BEL|2027||<2025-07-28
Christophe Janssens|LB|28|500|BEL|2027||2025-07-01
Dominic Thompson|LB|26|400|ENG|2028|JAM|2026-07-26
Cheick Oumar Konaté|RB|22|1200|MLI|2028||2026-09-03
Laurent Jans|RB|34|250|LUX|2027||2024-07-04
Sieben Dewaele|DM|27|800|BEL|2028||2024-07-12
Cheick Condé|DM|26|700|GUI|2028||2026-07-29
Noah Mawete|DM|21|250|COD|2028|BEL|2025-07-02
Léandre Kuavita|CM|22|500|BEL|2028|ANG|<2026-07-20
Ferre Slegers|AM|21|800|BEL|2028||2025-09-08
Arno Verschueren|AM|29|700|BEL|2029||2026-09-01
Guillaume De Schryver|AM|29|500|BEL|2027||2025-01-17
Christian Brüls|AM|38|150|BEL|2027||2024-12-26
Jearl Margaritha|LW|26|1800|CUW|2028|NED|2025-08-05
Chris Lokesa|LW|21|1000|BEL|2028|COD|2026-01-20
Ilyes Najim|LW|24|300|FRA|2027||2025-07-01
Kurt Abrahams|RW|29|500|RSA|2027||2024-12-21
Victor Olatunji|ST|27|2000|NGA|2027||2026-09-03
Elohim Kaboré|ST|19|800|BFA|2027|CIV|2026-08-12
Lennart Mertens|ST|34|300|BEL|2027||2024-11-27
Junior Diouf|ST|19|100|SEN|2028||2026-02-26` },
    { id: 'cercle', name: 'Серкль Брюгге', city: 'Брюгге', stadium: 'Jan Breydelstadion', cap: 29062, colors: ['#00a650', '#000000'], players: `
Gaëtan Coucke|GK|27|800|BEL|2029||2026-07-10
Yann Lienard|GK|23|100|FRA|2027||2026-09-03
Bas Langenbick|GK|23|50|BEL|2028||2024-01-01
Tiemen De Bel|GK|19|50|BEL|2027||2026-07-01
Geoffrey Kondo|CB|24|3000|FRA|2029|COD|2026-01-27
Emmanuel Kakou|CB|21|2000|CIV|2027||2024-07-01
Royer Caicedo|CB|20|1500|COL|2029||2026-02-02
Yago Lincoln|CB|23|500|BRA|2030||2026-09-02
Sebbe Gheerardyns|CB|21|75|BEL|2027||2026-07-01
Valy Konaté|LB|19|2500|CIV|2027||2025-07-01
Tayo Adaramola|LB|22|800|IRL|2030|NGA|2026-08-17
Gary Magnée|RB|27|2200|BEL|2028||2024-08-17
Ibrahim Diakité|RB|22|2000|GUI|2028|FRA|2024-07-03
Lukas Mondele|DM|22|1000|BEL|2029||2026-07-29
Hannes Van Der Bruggen|DM|33|400|BEL|2027||<2021-01-19
Luke Le Roux|CM|26|800|RSA|2028||2026-09-10
Lazare Amani|CM|28|700|CIV|2028|BEL|2026-07-01
Erick Nunes|RW|22|600|BRA|2029||2025-07-01
Viggo Martens|AM|19|600|BEL|2029||2026-07-01
Lucas Michal|LW|21|3500|FRA|2027|MTQ|2026-07-30
Abdoulie Manneh|LW|22|3000|GAM|2027||2026-08-12
Joel Ndala|LW|20|2500|ENG|2030|COD|2026-07-29
Tunde Akinsola|LW|23|1500|NGA|2030||2026-09-03
Charles Herrmann|RW|20|800|GER|2029|GHA|2026-02-01
Steve Ngoura|ST|21|4000|FRA|2028|CMR|2025-01-07
Dante Vanzeir|ST|28|1800|BEL|2027||<2026-01-06
Krys Kouassi|ST|19|600|FRA|2030||2025-07-10
Abdoul Kader Ouattara|ST|21|400|BFA|2028||2024-01-01` },
    { id: 'charleroi', name: 'Шарлеруа', city: 'Шарлеруа', stadium: 'Stade du Pays de Charleroi', cap: 18000, colors: ['#000000', '#ffffff'], players: `
Mohamed Koné|GK|24|2000|CIV|2027|FRA|2024-07-02
Martin Delavallée|GK|22|1000|BEL|2027||2022-07-01
Arthur Cremer|GK|26|100|BEL|2028||2026-07-12
Check Keita|CB|23|3500|MLI|2027|FRA|2024-07-04
Aiham Ousou|CB|26|3000|SYR|2028|SWE|2025-01-07
Massamba Sow|CB|22|700|FRA|2027|SEN|2025-01-01
Noah Solheid|CB|23|400|BEL|2029||2026-07-01
Naël Piron|CB|18|150|BEL|2028||2026-07-01
Mardochée Nzita|LB|26|1500|BEL|2028|COD|2024-07-01
Rafaël Teugels|LB|20|100|BEL|2027||2026-07-01
Kevin Van Den Kerkhof|RB|30|2500|ALG|2029|FRA|2026-07-01
Triston Rowe|RB|20|1500|ENG|2027|JAM|2026-09-01
Amine Boukamir|DM|20|2000|MAR|2030|BEL|2024-07-01
Isaac Cissé|DM|20|800|CIV|2030||2026-07-29
Boubakar Dembaga|DM|20|150|MLI|2029|FRA|2026-07-15
Mory Kera|DM|18|150|BEL|2028||2025-07-01
Yassine Khalifi|CM|21|3000|MAR|2029||2025-07-14
Patrick Pflücke|RW|29|1800|GER|2027||<2025-09-02
Jakob Napoleon Romsaas|AM|22|2000|NOR|2027||2025-07-01
Freddy Mbemba|LW|23|1500|FRA|2028|COD|2025-07-04
Antoine Bernier|RW|29|1500|BEL|2028||2023-07-01
Gaku Nawata|ST|20|500|JPN|2027||2026-09-03
Aurélien Scheidler|ST|28|2000|FRA|2028||2025-08-19
Adama Bojang|ST|22|1200|GAM|2027||2026-07-18
Antoine Colassin|ST|25|600|BEL|2028||2025-07-08` },
    { id: 'club_brugge', name: 'Брюгге', city: 'Брюгге', stadium: 'Jan Breydelstadion', cap: 29062, colors: ['#0055a4', '#000000'], players: `
Yann Sommer|GK|37|2000|SUI|2029||2026-07-14
Nordin Jackers|GK|29|1000|BEL|2029||<2024-07-01
Argus Vanden Driessche|GK|19|1000|BEL|2029||2026-07-01
Axl De Corte|GK|20|400|BEL|2028||2025-07-01
Joel Ordóñez|CB|22|33000|ECU|2029||2023-07-01
Han-beom Lee|CB|24|7000|KOR|2029||2026-08-03
Jorne Spileers|CB|21|3000|BEL|2028||2023-01-01
Brandon Mechele|CB|33|2800|BEL|2028||2013-07-01
Samba Coulibaly|CB|18|500|FRA|2030|MLI|2026-07-02
Joaquin Seys|LB|21|27000|BEL|2029||2024-07-01
Matteo Dams|LB|22|3500|BEL|2030||2026-08-22
Kyriani Sabbe|RB|21|13000|BEL|2030||2023-01-01
Hugo Siquet|RB|24|4000|BEL|2028||2024-07-23
Freddie Potts|DM|23|10000|ENG|2030||2026-08-04
Lynnt Audoor|DM|23|1500|BEL|2029||2025-07-01
Gianluca Okon-Engstler|DM|17|1500|ITA|2029|AUS|2026-07-01
Cheveyo Tsawa|CM|19|6000|SUI|2030||2026-07-10
Hugo Vetlesen|CM|26|5000|NOR|2029||2023-07-03
Félix Lemaréchal|AM|23|6000|FRA|2029|CIV|2026-01-24
Hans Vanaken|AM|34|5000|BEL|2028||2015-07-01
Tian Nai Koren|AM|17|3000|SVN|2029||2026-07-01
Jan Virgili|LW|20|15000|ESP|2031||2026-08-08
Mamadou Diakhon|LW|21|7000|SEN|2029|FRA|2025-08-18
Wisdom Mike|LW|18|5000|GER|2029|NGA|2026-08-27
Carlos Forbs|RW|22|23000|POR|2029|GNB|2025-07-17
Nicolò Tresoldi|ST|22|35000|GER|2029|ITA|2025-07-01
Romeo Vermant|ST|22|12000|BEL|2028||2023-03-15
Andrej Vasovic|ST|19|5000|SUI|2030|SRB|2026-07-15` },
    { id: 'genk', name: 'Генк', city: 'Генк', stadium: 'Cegeka Arena', cap: 24956, colors: ['#0055a4', '#ffffff'], players: `
Lucca Brughmans|GK|18|20000|BEL|2027||2026-09-01
Tobe Leysen|GK|24|3500|BEL|2031||<2026-09-03
Tobias Lawal|GK|26|1500|AUT|2029||2025-07-09
Hendrik Van Crombrugge|GK|33|500|BEL|2027||<2023-07-18
Emile Doucouré|GK|19|500|MLI|2030|BEL|2026-02-02
Matte Smets|CB|22|10000|BEL|2030||<2024-07-01
Josué Kongolo|CB|20|7000|BEL|2030|COD|2023-07-01
Christiaan Ravych|CB|24|3000|BEL|2030|UKR|<2026-09-01
Elie Mbavu|CB|17|3000|BEL|2028||2026-07-01
Adrián Palacios|CB|22|800|VEN|2028|COL|2024-07-01
Yaimar Medina|LB|21|4000|ECU|2029||2025-01-09
Joris Kayembe|LB|32|2000|COD|2027|BEL|<2023-07-01
Christian Akpan|LB|21|200|NGA|2030||2026-07-01
Milan Roganovic|RB|20|4000|MNE|2031|SRB|2026-09-03
Kevin Amaro|RB|22|2500|URU|2031||2026-08-18
Ken Nkuba|RB|24|1000|BEL|2028|COD|<2024-01-30
Emmanuel Sarfo|RB|19|300|BEL|2027||2026-07-01
Ibrahima Sory Bangoura|DM|22|6000|GUI|2030||2024-01-01
Nikolas Sattlberger|DM|22|2200|AUT|2029||2024-08-05
Bryan Heynen|CM|29|8000|BEL|2029||2015-07-01
Benjamin Tahirović|CM|23|4500|BIH|2027|SWE|2026-08-30
August De Wannemacker|CM|17|2000|BEL|2028||2026-01-20
Kenan Haroun|CM|20|400|BEL|2029|TUR|2026-07-01
Jeppe Erenbjerg|AM|26|5500|DEN|2029||<2026-07-01
Daan Heymans|AM|27|4000|BEL|2029||<2025-07-01
Noah Adedeji-Sternberg|LW|21|4000|BEL|2028|GER|2024-01-01
Ayumu Yokoyama|LW|23|2500|JPN|2029||2025-07-01
Junya Ito|RW|33|3000|JPN|2028||2025-08-09
Rafiu Durosinmi|ST|23|10000|NGA|2030||2026-07-23
Aaron Bibout|ST|22|3500|CMR|2030||2025-07-24
Jerry Afriyie|ST|19|3500|GHA|2031||2026-08-18` },
    { id: 'gent', name: 'Гент', city: 'Гент', stadium: 'Planet Group Arena', cap: 20185, colors: ['#0055a4', '#ffffff'], players: `
Davy Roef|GK|32|2500|BEL|2029||<2020-07-01
Kjell Peersman|GK|22|400|BEL|2030||2025-07-25
Bas Evers|GK|17|400|BEL|2028||2026-01-01
Tom Vandenberghe|GK|34|250|BEL|2027||<2025-01-07
Victor De Coninck|GK|20|75|BEL|2027||2026-07-01
Maksim Paskotsi|CB|23|3500|EST|2029||2025-08-04
Mouhamed Ngom|CB|26|3000|SEN|2031||2026-07-13
Siebe Van der Heyden|CB|28|3000|BEL|2028||2025-07-25
Matties Volckaert|CB|24|2500|BEL|2029||2025-11-09
Christian Burgess|CB|35|1800|ENG|2028|BEL|<2026-07-01
Mamadou Diallo|CB|19|300|SEN|2029||2026-07-01
Hannes Vernemmen|CB|21|200|BEL|2028||2026-07-01
Tiago Araújo|LB|25|5000|POR|2028||2024-08-24
Abdoul Ayinde|LB|21|600|BFA|2028||2026-01-01
Lars Cooman|LB|23|200|BEL|2029||2026-07-01
Gilles De Meyer|RB|20|500|BEL|2028||2024-11-26
Tibe De Vlieger|CM|20|8000|BEL|2030||2024-01-01
Mathias Delorge|CM|22|7000|BEL|2028||<2024-07-24
László Bénes|CM|29|2500|SVK|2030||2026-07-01
Leonardo Lopes|CM|27|2500|POR|2028|CPV|2024-12-13
Mohammed El Âdfaoui|CM|18|2000|BEL|2028|MAR|2025-07-05
Matisse Samoise|RW|24|2500|BEL|2028||2020-11-30
Abdelkahar Kadri|AM|26|2500|ALG|2029||<2025-07-30
Aimé Omgba|AM|24|1000|NED|2029|CMR|2024-09-04
Pieter Gerkens|AM|31|600|BEL|2027||<2023-07-01
Michel-Ange Balikwisha|LW|25|3000|COD|2027|BEL|2026-08-29
Momodou Sonko|LW|21|3000|SWE|2028|GAM|2024-01-29
El Hadji Seck|LW|19|2000|SEN|2030||2026-07-01
Kyrell Wilson|RW|21|1000|ENG|2030||2026-08-05
Josué Vergara|ST|19|5000|PAN|2031||2026-07-01
Hyllarion Goore|ST|21|4000|CIV|2029||2025-01-30
Ibrahima Cissé|ST|19|3000|SEN|2028||2026-07-01
Max Dean|ST|22|2500|ENG|2028||2024-07-12
Abubakar Abdullahi|ST|20|700|NGA|2028||2026-07-01` },
    { id: 'kortrijk', name: 'Кортрейк', city: 'Кортрейк', stadium: 'Guldensporenstadion', cap: 9399, colors: ['#e30613', '#ffffff'], players: `
Marko Ilic|GK|28|800|SRB|2029||2025-01-24
Patrik Gunnarsson|GK|25|400|ISL|2028||2024-07-16
Ebbe De Vlaeminck|GK|20|200|BEL|2028||2023-07-01
Tristen Alliet|GK|21|50|BEL|2027||2026-07-01
Axel Drouhin|CB|26|1200|FRA|2029||2026-09-03
Rudy Kohon|CB|22|1200|FRA|2029|CIV|2025-08-28
James Ndjeungoue|CB|23|800|CMR|2028||2025-01-29
Harrison Murray-Campbell|CB|20|750|ENG|2027||2026-07-10
Gilles Ruyssen|CB|32|600|BEL|2028||2025-07-01
Matthew Anderson|LB|22|1200|SCO|2028||2025-07-01
Guust Lamerand|LB|18|150|BEL|2029||2026-08-07
Basile Vroninks|RB|19|400|BEL|2029||<2026-09-03
Mohamed Fofana|RB|20|250|CIV|2028||2025-01-30
Gilles Dewaele|RB|30|200|BEL|2027||<2024-07-01
Jamie Roche|DM|25|2500|SWE|2029|ENG|2026-09-02
Boris Lambert|DM|26|800|BEL|2029||2026-07-01
Nayel Mehssatou|CM|24|1000|CHI|2029|BEL|<2026-07-16
Liam De Smet|CM|22|450|BEL|2028||2025-07-01
Brecht Dejaegere|CM|35|300|BEL|2027||2024-08-16
Ken Masui|LW|25|900|JPN|2027||2026-07-01
Rok Storman|AM|22|1000|SVN|2027||2026-09-01
Lennard Hens|AM|30|300|BEL|2028||2025-07-01
Shandre Campbell|LW|21|1000|RSA|2030||<2026-07-20
Jellert Van Landschoot|LW|29|800|BEL|2028||2025-07-01
Lenn De Smet|LW|22|700|BEL|2028||2025-07-01
Suf Podgoreanu|LW|24|650|ISR|2030|ROU|2026-07-01
Anthony Philips|RW|17|400|BEL|2029||2026-09-17
Goduine Koyalipou|ST|26|2000|CTA|2027|FRA|2026-07-16
Thierry Ambrose|ST|29|1800|GLP|2027|FRA|2023-08-15
Sixtus Ogbuehi|ST|23|200|NGA|2028||2025-07-24
Abdoul Diop|CM|21|100|SEN|2028||2025-01-30` },
    { id: 'la_louviere', name: 'Ла-Лувьер', city: 'Ла-Лувьер', stadium: 'Easi Arena', cap: 8050, colors: ['#00a650', '#ffffff'], players: `
Marcos Peano|GK|28|2000|ARG|2029|ITA|2024-07-01
Tiago Pereira Cardoso|GK|20|1000|LUX|2027|POR|2026-07-01
Lucas Monteiro|GK|21|100|POR|2027|BEL|2024-07-01
Théo Radelet|GK|18|50|BEL|2029||<2026-07-01
Manu Verbruggen|CB|18|50|BEL|2028||2026-09-25
Yllan Okou|CB|23|2000|FRA|2028|CIV|2025-08-03
Djibril Lamego|CB|23|1000|FRA|2027|GLP|2024-07-01
Siad Gourville|CB|26|800|FRA|2027|ALG|2026-07-01
Patrick Nkoa|CB|27|800|GER|2028|CMR|2026-07-08
Mehdi Boukamir|CB|22|500|MAR|2027|BEL|<2026-07-01
Wagane Faye|CB|32|400|SEN|2027|BEL|2022-07-01
Thierry Lutonda|LB|25|600|BEL|2027|COD|2025-08-07
Nolan Gillot|LB|23|500|FRA|2028||2024-07-01
Shaquil Delos|RB|27|750|FRA|2028|GLP|2026-07-01
Marius Courcoul|DM|19|2500|FRA|2027||2026-08-14
Ismaila Coulibaly|CM|25|1000|MLI|2028||2026-07-01
Mame Wade|CM|24|600|SEN|2028||2026-07-02
Anas Tajaouart|CM|21|600|MAR|2027|BEL|<2026-07-17
Mátyás Kovács|RW|23|700|HUN|2028||2026-07-01
Joël Ito|AM|28|700|BEL|2028|COD|2023-07-01
Bryan Soumaré|AM|27|200|FRA|2027||2026-01-23
Timéo Kerckhofs|AM|17|150|BEL|2028||2026-08-01
Noah Makembo-Ntemo|AM|19|100|BEL|2027|COD|2025-07-01
Quentin Benaets|RW|23|100|BEL|2027||<2026-07-01
Mustapha Isah|ST|22|2500|NGA|2029||2026-07-27
Zsombor Gruber|ST|22|1500|HUN|2029||2026-08-14
Elias Filet|ST|24|1000|FRA|2028||2026-07-01
Léandro Rousseau|ST|23|1000|BEL|2028||2026-08-13
Mouhamed Belkheir|ST|27|500|ALG|2028|FRA|2025-07-01` },
    { id: 'lommel', name: 'Ломмел', city: 'Ломмел', stadium: 'Soeverein Stadion', cap: 12911, colors: ['#00a650', '#ffffff'], players: `
Matthias Pieklak|GK|20|1500|BEL|2029||2024-07-04
Nikola Ivezic|GK|23|200|MNE|2027||2022-07-01
Rik Vercauteren|GK|25|100|BEL|2027||2024-09-04
Melvin Ramundo|GK|19|50|BEL|2027||2026-07-01
Shawn Adewoye|CB|26|900|BEL|2028|NGA|2026-08-03
Dries Wouters|CB|29|800|BEL|2027||2023-07-01
Timothy Eyoma|CB|26|600|ENG|2027|NGA|2025-07-18
Jhon Banguera|CB|22|400|COL|2028||2023-07-26
Jesper Tolinsson|CB|23|400|SWE|2028||2021-07-01
Henry Oware|CB|22|400|GHA|2028||2024-01-12
Emile Vandecraen|CB|18|100|BEL|2028||2026-07-01
Josias Lama|CB|21|50|BEL|2027|COD|2024-07-01
Sam de Grand|LB|22|1500|NED|2027||2026-09-03
Jason van Duiven|RB|21|1000|NED|2029||2024-08-12
Tristan Gooijer|RB|22|1000|NED|2028||2026-08-27
Isaiah Dada-Mascoll|DM|20|500|ENG|2027|NGA|2026-08-01
Joey Pelupessy|DM|33|400|IDN|2027|NED|2025-01-19
Sverre Nypan|CM|19|10000|NOR|2027||2026-07-11
Lucas Schoofs|CM|29|700|BEL|2027||2023-07-01
Djordje Gordic|CM|21|500|SRB|2027||2023-01-03
Nicolas Rommens|CM|31|400|BEL|2028||<2025-07-01
Elijah Odede|LW|19|600|NGA|2027||2026-09-03
Juho Talvitie|RW|21|1000|FIN|2028||2021-07-02
Stredair Appuah|RW|22|1000|FRA|2027|GHA|2026-07-29
Tom Reyners|RW|26|900|BEL|2028||2025-07-01
Niek Corthouts|RW|20|150|BEL|2027||2026-07-01
Don-Angelo Konadu|ST|20|1500|NED|2027|GHA|2026-08-21
Ralf Seuntjens|ST|37|150|NED|2027||2025-07-10
Alexander Reumers|ST|19|150|BEL|2028||2025-07-10` },
    { id: 'mechelen', name: 'Мехелен', city: 'Мехелен', stadium: 'Achter De Kazerne', cap: 16715, colors: ['#ffd700', '#e30613'], players: `
Nacho Miras|GK|29|3000|ESP|2029||2025-01-14
Ortwin De Wolf|GK|29|500|BEL|2027||<2024-07-01
Tijn Van Ingelgom|GK|19|100|BEL|2027||2025-07-01
Axel Willockx|GK|19|50|BEL|2027||2025-07-01
José Marsà|CB|24|3500|ESP|2027||2024-07-13
Tommy St. Jago|CB|26|2000|CUW|2028|NED|2025-07-01
Mike Eerdhuijzen|CB|26|1800|NED|2030||2026-08-22
Luc Marijnissen|CB|23|1500|NED|2030||2026-08-15
Gora Diouf|CB|23|1500|SEN|2028||2025-07-01
Leo Hjelde|CB|23|1500|NOR|2029|ENG|2026-08-11
Ian Struyf|CB|19|400|BEL|2028||2025-07-28
Thérence Koudou|RB|21|4000|FRA|2029|CIV|2025-07-23
Kobe Corbanie|RB|21|500|BEL|2029||<2026-07-01
Fredrik Hammar|DM|25|2500|SWE|2028||2025-01-07
Massimo Decoene|DM|22|400|BEL|2027||2025-09-24
Ryan Teague|DM|24|400|AUS|2028||2025-07-01
Dennis Praet|CM|32|1500|BEL|2028||<2026-07-16
Dikeni Salifou|CM|23|1000|GER|2028||2025-09-07
Marco Decherf|CM|20|800|FRA|2030||2026-09-03
Amine Ouahabi|CM|18|100|MAR|2028|BEL|2025-07-01
Simion Michez|RW|24|600|CMR|2029|BEL|2026-08-27
Bilal Bafdili|AM|22|800|BEL|2027||2023-07-01
Максим Киреев|AM|22|700|BLR|2029|BEL|2025-08-25
Mats Van Helden|AM|20|75|BEL|2028||2026-07-01
Yanis Asghir|AM|17|50|MAR|2028|BEL|2026-07-01
Myron van Brederode|LW|23|4500|NED|2029||2025-09-06
Cedric Van Meirvenne|LW|21|1000|BEL|2030||2026-07-01
Bill Antonio|RW|24|1000|ZIM|2027||2024-01-01
Halil Özdemir|ST|21|400|TUR|2027|BEL|2025-07-24
Bouke Boersma|ST|21|2500|NED|2029||2026-01-28
Keano Vanrafelghem|ST|23|1500|BEL|2029||2025-01-16
Benito Raman|ST|31|800|BEL|2027||2024-08-23
Adeshina Ayodele|ST|20|500|NGA|2029||2026-08-06
Malcolm Lohunanu-Mbasi|ST|18|500|BEL|2028||2026-07-01` },
    { id: 'leuven', name: 'Лёвен', city: 'Лёвен', stadium: 'Den Dreef', cap: 10000, colors: ['#ffffff', '#e30613'], players: `
Dani van den Heuvel|GK|23|800|NED|2029||<2026-07-01
Kiany Vroman|GK|22|300|BEL|2029||2026-09-03
Owen Jochmans|GK|23|150|BEL|2027||2024-07-01
Marcel Van Dijck|GK|18|50|BEL|2027||2027-06-30
Roggerio Nyakossi|CB|22|5000|SUI|2028|TOG|2025-01-27
Ewoud Pletinckx|CB|26|1800|BEL|2029||<2022-07-01
Alessandro Fontanarosa|CB|23|1400|ITA|2027||2026-09-03
Jamie Lawrence|CB|23|1000|GER|2029|NGA|2026-07-20
Noë Dussenne|CB|34|300|BEL|2028||2025-08-19
Viktor Damjanic|CB|20|300|CRO|2028||2025-07-23
Christ Souanga|CB|20|300|BEL|2027|CIV|2024-07-01
Takuya Ogiwara|LB|26|600|JPN|2027||2026-07-16
Davis Opoku|RB|18|2500|BEL|2028||2025-11-01
Óscar Gil|RB|28|800|ESP|2027||2024-08-01
Thibault Vlietinck|RB|29|350|BEL|2028||<2022-08-12
Lukasz Lakomy|DM|25|1500|POL|2029||2026-07-01
Birger Verstraete|DM|32|700|BEL|2027||2024-07-10
Manuel Osifo|DM|23|400|BEL|2027||<2024-02-01
Siebe Schrijvers|CM|30|1500|BEL|2027||<2021-01-15
Wouter George|CM|24|1200|BEL|2030||2025-01-01
Bryang Kayo|CM|24|300|USA|2028|CMR|2025-07-02
Sebastian Murru|CM|19|150|BEL|2028||2028-06-30
William Balikwisha|AM|27|300|COD|2028|BEL|<2024-07-20
Hasan Bulut|AM|19|150|TUR|2027|BEL|2026-07-01
Matteo Heremans|AM|20|100|BEL|2027||2026-07-01
Emmanuel Addai|LW|25|1200|GHA|2029||2026-07-27
Thibaud Verlinden|LW|27|900|BEL|2028|FRA|2025-02-03
Henok Teklab|LW|27|800|GER|2027|ERI|<2025-09-05
Robin Mirisola|ST|19|4000|BEL|2027||<2026-09-03
Abdoul Traoré|ST|19|1300|GUI|2029||2025-07-08
Chukwubuikem Ikwuemesi|ST|25|1200|NGA|2028||2024-07-24
Shin Yamada|ST|26|800|JPN|2027||2026-07-14
Kyan Vaesen|ST|25|700|BEL|2029||<2026-02-02
Chike Van De Ven|ST|19|150|BEL|2028|NGA|2026-07-01` },
    { id: 'stvv', name: 'Сент-Трюйден', city: 'Синт-Трюйден', stadium: 'Stayen', cap: 14600, colors: ['#ffd700', '#0055a4'], players: `
Leo Kokubo|GK|25|5000|JPN|2027||2024-07-11
Matt Lendfers|GK|20|200|BEL|2029|NED|2023-07-01
Yanis Ngoy|GK|18|100|BEL|2028|COD|2026-07-01
Ahmad Abu Rasen|GK|22|25|KSA|2028||2026-08-17
Kota Takai|CB|22|5000|JPN|2027||2026-09-01
Joedrick Pupe|CB|29|1300|BEL|2029||2026-07-01
Visar Musliu|CB|31|1000|MKD|2027||2025-02-03
Shogo Taniguchi|CB|35|750|JPN|2027||2024-07-19
Jeremy Mbambi|CB|18|450|BEL|2027||2026-09-03
Wolke Janssens|CB|31|300|BEL|2028||2016-07-01
Taiga Hata|LB|24|2500|JPN|2028||2025-07-04
Rune Verheyden|LB|19|150|BEL|2030||2026-08-04
Robert-Jan Vanwesemael|RB|24|3000|BEL|2030||2023-07-01
Abdoulaye Sissako|DM|28|2000|UGA|2028|FRA|<2025-07-01
Alouis Diriken|DM|22|300|BEL|2029||2025-07-01
Ryan Merlen|CM|24|2500|FRA|2029||2025-07-01
Nelson Ishiwatari|CM|21|1500|JPN|2030||2026-07-17
Ryotaro Araki|AM|24|1500|JPN|2031||2026-07-20
Ilias Sebaoui|LW|25|4500|MAR|2028|BEL|2025-07-01
Nathanaël Mbuku|LW|24|2000|COD|2027|FRA|2026-09-03
Kaito Matsuzawa|LW|25|1300|JPN|2027||2025-07-01
Arbnor Muja|RW|27|2500|ALB|2029|KVX|2026-08-14
Illyès Benachour|RW|19|100|MAR|2029|FRA|2025-07-01
Samed Bazdar|ST|22|3000|BIH|2030|SRB|2026-08-07
Oumar Diouf|ST|23|1000|SEN|2029||2026-01-20
Shion Shinkawa|ST|19|800|JPN|2029||2026-01-16
Frédéric Soèllé Soèllé|ST|20|400|BEL|2028|CMR|2026-07-01` },
    { id: 'standard', name: 'Стандард', city: 'Льеж', stadium: 'Stade Maurice Dufrasne', cap: 27670, colors: ['#e30613', '#ffffff'], players: `
Matthieu Epolo|GK|21|10000|COD|2029|BEL|2021-07-01
Lucas Pirard|GK|31|350|BEL|2028||<2025-07-01
Belmin Dizdarevic|GK|25|100|BIH|2027||2026-01-30
Ibrahim Karamoko|CB|25|5000|FRA|2030|CIV|2025-01-07
Ibe Hautekiet|CB|24|4000|BEL|2029||<2023-01-31
Josué Homawoo|CB|28|2000|TOG|2027|FRA|2025-07-01
Dimitri Lavalée|CB|29|1500|BEL|2028||2026-07-01
Daan Dierckx|CB|23|1200|BEL|2028||2024-07-01
Noah Sy|CB|19|200|BEL|2027||2026-07-01
Gustav Mortensen|LB|22|4500|DEN|2030||2026-01-15
Henry Lawrence|RB|25|4000|ENG|2029||2024-07-01
Marlon Fossey|RB|28|3500|USA|2027|JER|2022-09-06
Ryan Fosso|DM|24|2000|CMR|2029|SUI|2026-08-14
Marco Ilaimaharitra|DM|31|800|MAD|2027|FRA|<2025-07-01
Laurens Goemaere|DM|20|600|BEL|2030||2026-07-01
Rayan Touzghar|CM|22|3000|MAR|2029|FRA|2026-07-17
Alexis Trouillet|CM|25|2000|FRA|2028||2026-07-11
Casper Nielsen|CM|32|1500|DEN|2028||<2025-07-02
Tobias Mohr|LW|31|800|GER|2028||2025-07-01
Mohammed El Hankouri|AM|29|800|MAR|2027|NED|2025-08-01
Salieu Drammeh|LW|23|2000|GAM|2029|DEN|2026-07-15
Sylvester Jasper|LW|25|1800|BUL|2029|NGA|2026-07-31
Adnane Abid|RW|23|6000|BEL|2029|MAR|2025-07-01
Bernard Nguene|ST|20|3000|CMR|2029||2026-02-02
Bruny Nsimba|ST|26|2500|BEL|2029|ANG|2026-07-01
Andi Zeqiri|ST|27|2000|SUI|2027|KVX|2026-09-01
Dennis Eckert Ayensa|ST|29|2000|IRN|2028|GER|<2025-07-01` },
    { id: 'union_sg', name: 'Юнион Сент-Жилуаз', city: 'Брюссель', stadium: 'Stade Joseph Marien', cap: 9400, colors: ['#ffd700', '#1d3c8f'], players: `
Hervé Koffi|GK|30|6000|BFA|2027|CIV|2026-08-01
Vic Chambaere|GK|23|700|BEL|2027||<2024-07-01
Гиорги Кавлашвили|GK|19|100|GEO|2028|BEL|2025-03-21
Keo Boets|GK|22|50|BEL|2027||2026-07-23
Kevin Mac Allister|CB|28|12000|ARG|2031|ITA|2023-07-12
Massiré Sylla|CB|21|5000|SEN|2030||2026-01-13
Ross Sykes|CB|27|4500|ENG|2027||2022-07-01
Nikki Havenaar|CB|31|500|JPN|2029||2026-07-01
Nohim Chibani|CB|23|400|FRA|2030|ALG|2026-07-01
Louis Patris|RB|25|4000|BEL|2029||<2025-09-02
Denzel De Roeve|RB|22|3500|BEL|2031||2026-08-29
Ondrej Kricfalusi|DM|22|5000|CZE|2030||2026-07-01
Adem Zorgane|CM|26|12000|ALG|2029||<2025-07-01
Kamiel Van de Perre|CM|22|11000|BEL|2030||2024-07-01
Besfort Zeneli|CM|23|10000|SWE|2030|KVX|2026-01-13
Rob Schoofs|CM|32|2000|BEL|2028||<2025-09-01
Ivan Pavlic|CM|24|400|BEL|2029|NED|2025-09-03
Darius Olaru|AM|28|4500|ROU|2030||2026-07-01
Anouar Ait El Hadj|AM|24|3500|BEL|2028|MAR|<2024-07-13
Dylan Aquino|LW|21|6000|ARG|2030||2026-09-02
Relebohile Mofokeng|LW|22|6000|RSA|2030||2026-07-02
Guilherme Smith|LW|23|4000|BRA|2030||2025-08-12
Ilan Hurtevent|RW|21|1200|BEL|2030||<2026-07-01
Mateo Biondić|ST|23|7000|GER|2030|CRO|2026-01-03
Kevin Rodríguez|ST|26|6000|ECU|2029||2023-09-01
Raul Florucz|ST|25|4000|AUT|2029||2025-07-01` },
    { id: 'westerlo', name: 'Вестерло', city: 'Вестерло', stadium: 'Het Kuipje', cap: 9000, colors: ['#ffd700', '#0055a4'], players: `
Andreas Jungdal|GK|24|3500|DEN|2028||2025-07-01
Bill Lathouwers|GK|27|500|BEL|2030||2026-07-01
Jahnilo Wiegel-Triebel|GK|21|100|SUR|2027|NED|2026-07-01
Botond Balogh|CB|24|2500|HUN|2030||2026-09-01
Reno Münz|CB|21|1800|GER|2030||2026-07-01
Amando Lapage|CB|21|1500|BEL|2029||2025-02-03
Seiji Kimura|CB|25|1500|JPN|2029||2025-08-08
Michée Ndembi|CB|19|250|BEL|2029||2026-02-02
Dylan Ourega|LB|22|2000|FRA|2030|CIV|2026-01-21
Fabio Ferraro|LB|24|800|BEL|2029|ITA|2026-07-21
Lasse Flø|RB|21|1200|DEN|2030||2026-07-25
Lucas Mbamba|RB|20|1000|BEL|2029||2025-07-29
Doğucan Haspolat|DM|26|5000|TUR|2027|NED|2023-09-06
Ibrahim Fofana|DM|23|3000|CIV|2030||2026-07-22
Pape Diong|DM|20|2000|SEN|2030||2026-08-27
Сергий Сыдорчук|DM|35|250|UKR|2027||2023-09-05
Thomas Van den Keybus|CM|25|700|BEL|2027||<2023-07-05
Reda Laalaoui|CM|21|500|MAR|2029||2025-09-08
Philippe Bibout|CM|18|100|CMR|2030||2026-08-05
Isa Sakamoto|AM|23|5000|JPN|2028||2025-07-01
Cisse Sandra|AM|22|2000|BEL|2030||<2026-08-04
Shunsuke Saito|LW|21|4000|JPN|2029||2026-01-14
Nikola Storm|LW|32|1200|BEL|2028||2026-09-03
Naoufal Bohamdi-Kamoni|LW|19|500|MAR|2027|BEL|2026-08-12
Cameron Congreve|RW|22|1800|WAL|2030||2026-08-03
Dino Delic|RW|18|250|AUT|2028|BIH|2026-09-01
David Amegnaglo|RW|21|200|FRA|2030|TOG|2026-07-01
Norman Bassette|ST|21|3000|BEL|2027||2026-07-22
Emmanuel Tsimba|ST|20|1500|SUI|2030||2026-08-17
Abdoulaye Koné|ST|20|300|CIV|2030||2026-09-02` },
    { id: 'zulte', name: 'Зюлте-Варегем', city: 'Варегем', stadium: 'Elindus Arena', cap: 12300, colors: ['#e30613', '#00a650'], players: `
Brent Gabriël|GK|27|1000|BEL|2028||2025-07-01
Louis Bostyn|GK|33|300|BEL|2027||2014-07-01
Florian Van Bever|GK|19|100|BEL|2028||2026-07-01
Arnaud Dobbels|GK|21|50|BEL|2027||2023-07-01
Jakob Kiilerich|CB|26|2000|DEN|2027||2025-08-03
Laurent Lemoine|CB|28|1000|BEL|2027|BRA|2024-09-05
Benoit De Jaegere|CB|22|500|BEL|2029||2026-01-01
Mouhamadou Sall|CB|19|100|SEN|2028||2026-01-27
Youssoupha Mbodji|LB|22|1200|SEN|2027||2026-08-17
Yannick Cappelle|LB|23|800|BEL|2028||2023-07-01
Salim Diakité|RB|26|1500|MLI|2027|FRA|2026-08-17
Wilguens Paugain|RB|25|800|HAI|2028|FRA|2025-07-01
Enrique Lofolomo|DM|26|1500|GER|2027|COD|2025-07-01
Thomas Claes|CM|22|1500|BEL|2028||<2025-07-01
Dirk Asare|CM|22|1000|BEL|2029|GHA|2026-02-02
Tristan Panduro|CM|18|100|DEN|2028|ENG|2026-01-10
Ousseynou Niang|LW|25|4000|SEN|2028||<2026-09-03
Serxho Ujka|AM|28|400|ALB|2027||2025-07-18
Niko Horvat|AM|18|200|CRO|2027|BEL|2026-08-27
Marley Aké|LW|25|2500|FRA|2028|CIV|2026-07-01
Zalán Átrok|LW|20|1500|HUN|2029||2026-07-23
Nikola Mituljikic|RW|23|400|SRB|2028||2025-08-14
Malick Mbaye|RW|22|400|SEN|2029||2026-02-02
Anosike Ementa|ST|24|5000|DEN|2028|NGA|2025-08-07
Tobias Hedl|ST|23|1000|AUT|2027||2025-07-01
Hemsley Akpa-Chukwu|ST|21|650|BEL|2029|NGA|2026-07-01` },
  ],
});
