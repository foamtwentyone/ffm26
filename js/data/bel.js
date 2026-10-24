// Про-лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'bel', name: 'Про-лига', short: 'Бельгия', country: 'BEL', tier: 1, weekday: 6,
  autumn: { from: '07-25', rounds: 17 }, spring: { from: '01-17', rounds: 17 },
  ticket: 15, prize: [10000, 9550, 9100, 8700, 8250, 7800, 7350, 6900, 6450, 6050, 5600, 5150, 4700, 4250, 3800, 3400, 2950, 2500],
  teams: [
    { id: 'anderlecht', name: 'Андерлехт', city: 'Брюссель', stadium: 'Lotto Park', cap: 28063, colors: ['#5b2b82', '#ffffff'], players: `
Justin Heekeren|GK|25|500|GER|2029
Mattis Seghers|GK|17|200|BEL|2028
Michiel Haentjens|GK|20|200|BEL|2027
Andrew Omobamidele|CB|24|8000|IRL|2027
Giulian Biancone|CB|26|3500|FRA|2029
Léo Pétrot|CB|29|2000|FRA|2028
Zoumana Keita|CB|20|400|GER|2029
Kaïs Barry|CB|20|300|MAR|2027
Олег Реабциук|LB|28|2500|MDA|2029
Ludwig Augustinsson|LB|32|1500|SWE|2027
Ali Maamar|RB|21|5000|MAR|2028
Killian Sardella|RB|24|2500|BEL|2028
Marco Kana|DM|24|4000|BEL|2028
Enric Llansana|DM|25|2000|NED|2029
Noah Kalonji|DM|17|1000|BEL|2028
Romeo Amane|CM|23|5000|CIV|2030
Lukas Ambros|AM|22|6500|CZE|2030
Mario Stroeykens|AM|22|3000|COD|2028
Thelo Aasgaard|AM|24|2800|NOR|2027
Joshua Nga Kana|LW|17|3500|BEL|2029
Noa Ojea|LW|17|3000|BEL|2029
Jayden Onia Seke|LW|17|2500|BEL|2029
Marten Winkler|RW|23|4000|GER|2030
Oliver Antman|RW|25|4000|FIN|2030
Tristan Degreef|RW|21|3000|BEL|2028
Mihajlo Cvetkovic|ST|19|10000|SRB|2029
Tawfik Bentayeb|ST|24|8000|MAR|2030
Даныло Сикан|ST|25|5000|UKR|2030
Adriano Bertaccini|ST|26|2500|BEL|2029` },
    { id: 'antwerp', name: 'Антверпен', city: 'Антверпен', stadium: 'Bosuilstadion', cap: 23057, colors: ['#e30613', '#ffffff'], players: `
Taishi Brandon Nozawa|GK|23|5000|JPN|2029
Yannick Thoelen|GK|36|200|BEL|2027
Lowie Piselé|GK|17|200|BEL|2027
Niels Devalckeneer|GK|22|150|BEL|2028
Álvaro Cortés|CB|21|4000|ESP|2030
Rein Van Helden|CB|24|3000|BEL|2030
Yuto Tsunashima|CB|26|1500|JPN|2028
Luca Schelfhout|CB|19|400|BEL|2030
Daam Foulon|LB|27|2000|BEL|2028
Eran Tuypens|LB|20|750|BEL|2029
Aaron Ibrahim|LB|18|200|BEL|2028
Semm Renders|RB|18|1200|BEL|2029
Arthur Vermeeren|DM|21|15000|BEL|2027
Mauricio Benítez|DM|22|2500|ARG|2030
Bahmed Deuff|DM|20|2000|MTN|2027
Xander Dierckx|CM|17|5000|BEL|2028
Modibo Fofana|CM|18|3000|CIV|2030
Christopher Scott|CM|24|2200|GER|2028
Louie Van Gelder|CM|17|500|BEL|2028
Thibo Somers|RW|27|3000|BEL|2028
Farouck Adekami|AM|20|1500|CIV|2027
Ibrahim Salah|LW|25|1800|MAR|2027
Koki Ando|LW|19|300|JPN|2030
Carlos Mejia|RW|19|3000|ECU|2030
Мухаммадали Уринбоев|RW|21|400|UZB|2029
Snayder Porozo|ST|19|2500|ECU|2030
Luis Narh|ST|18|1000|GHA|2030
Michael Frey|ST|32|600|SUI|2028
Jeff Godelaine|ST|19|200|BEL|2029` },
    { id: 'beveren', name: 'Беверен', city: 'Беверен', stadium: 'Freethielstadion', cap: 8235, colors: ['#ffd700', '#1d3c8f'], players: `
Johannes Schenk|GK|23|1500|GER|2027
Maxim Deman|GK|25|100|BEL|2027
Milan De Schutter|GK|23|50|BEL|2028
Josua Lusamba|GK|21|50|COD|2028
Yoni Gomis|CB|21|2000|FRA|2027
Viktor Boone|CB|28|700|BEL|2027
Jannik Robatsch|CB|21|500|AUT|2027
Stephane Keller|CB|25|400|CMR|2027
Bruno Godeau|CB|34|300|BEL|2027
Christophe Janssens|LB|28|500|BEL|2027
Dominic Thompson|LB|26|400|ENG|2028
Cheick Oumar Konaté|RB|22|1200|MLI|2028
Sieben Dewaele|DM|27|800|BEL|2028
Cheick Condé|DM|26|700|GUI|2028
Noah Mawete|DM|21|250|COD|2028
Ferre Slegers|AM|21|800|BEL|2028
Arno Verschueren|AM|29|700|BEL|2029
Guillaume De Schryver|AM|29|500|BEL|2027
Christian Brüls|AM|38|150|BEL|2027
Jearl Margaritha|LW|26|1800|CUW|2028
Chris Lokesa|LW|21|1000|BEL|2028
Ilyes Najim|LW|24|300|FRA|2027
Victor Olatunji|ST|27|2000|NGA|2027
Elohim Kaboré|ST|19|800|BFA|2027
Lennart Mertens|ST|34|300|BEL|2027
Junior Diouf|ST|19|100|SEN|2028` },
    { id: 'cercle', name: 'Серкль Брюгге', city: 'Брюгге', stadium: 'Jan Breydelstadion', cap: 29062, colors: ['#00a650', '#000000'], players: `
Gaëtan Coucke|GK|27|800|BEL|2029
Yann Lienard|GK|23|100|FRA|2027
Bas Langenbick|GK|23|50|BEL|2028
Tiemen De Bel|GK|19|50|BEL|2027
Geoffrey Kondo|CB|24|3000|FRA|2029
Emmanuel Kakou|CB|21|2000|CIV|2027
Royer Caicedo|CB|20|1500|COL|2029
Yago Lincoln|CB|23|500|BRA|2030
Sebbe Gheerardyns|CB|21|75|BEL|2027
Valy Konaté|LB|19|2500|CIV|2027
Tayo Adaramola|LB|22|800|IRL|2030
Gary Magnée|RB|27|2200|BEL|2028
Ibrahim Diakité|RB|22|2000|GUI|2028
Lukas Mondele|DM|22|1000|BEL|2029
Luke Le Roux|CM|26|800|RSA|2028
Lazare Amani|CM|28|700|CIV|2028
Erick Nunes|RW|22|600|BRA|2029
Viggo Martens|AM|19|600|BEL|2029
Lucas Michal|LW|21|3500|FRA|2027
Abdoulie Manneh|LW|22|3000|GAM|2027
Tunde Akinsola|LW|23|1500|NGA|2030
Charles Herrmann|RW|20|800|GER|2029
Steve Ngoura|ST|21|4000|FRA|2028
Dante Vanzeir|ST|28|1800|BEL|2027
Krys Kouassi|ST|19|600|FRA|2030
Abdoul Kader Ouattara|ST|21|400|BFA|2028` },
    { id: 'charleroi', name: 'Шарлеруа', city: 'Шарлеруа', stadium: 'Stade du Pays de Charleroi', cap: 18000, colors: ['#000000', '#ffffff'], players: `
Mohamed Koné|GK|24|2000|CIV|2027
Martin Delavallée|GK|22|1000|BEL|2027
Arthur Cremer|GK|26|100|BEL|2028
Check Keita|CB|23|3500|MLI|2027
Massamba Sow|CB|22|700|FRA|2027
Noah Solheid|CB|23|400|BEL|2029
Naël Piron|CB|18|150|BEL|2028
Mardochée Nzita|LB|26|1500|BEL|2028
Rafaël Teugels|LB|20|100|BEL|2027
Kevin Van Den Kerkhof|RB|30|2500|ALG|2029
Triston Rowe|RB|20|1500|ENG|2027
Amine Boukamir|DM|20|2000|MAR|2030
Isaac Cissé|DM|20|800|CIV|2030
Boubakar Dembaga|DM|20|150|MLI|2029
Mory Kera|DM|18|150|BEL|2028
Yassine Khalifi|CM|21|3000|MAR|2029
Patrick Pflücke|RW|29|1800|GER|2027
Jakob Napoleon Romsaas|AM|22|2000|NOR|2027
Freddy Mbemba|LW|23|1500|FRA|2028
Gaku Nawata|ST|20|500|JPN|2027
Aurélien Scheidler|ST|28|2000|FRA|2028
Adama Bojang|ST|22|1200|GAM|2027
Antoine Colassin|ST|25|600|BEL|2028` },
    { id: 'club_brugge', name: 'Брюгге', city: 'Брюгге', stadium: 'Jan Breydelstadion', cap: 29062, colors: ['#0055a4', '#000000'], players: `
Yann Sommer|GK|37|2000|SUI|2029
Nordin Jackers|GK|29|1000|BEL|2029
Argus Vanden Driessche|GK|19|1000|BEL|2029
Axl De Corte|GK|20|400|BEL|2028
Han-beom Lee|CB|24|7000|KOR|2029
Jorne Spileers|CB|21|3000|BEL|2028
Brandon Mechele|CB|33|2800|BEL|2028
Samba Coulibaly|CB|18|500|FRA|2030
Joaquin Seys|LB|21|27000|BEL|2029
Matteo Dams|LB|22|3500|BEL|2030
Kyriani Sabbe|RB|21|13000|BEL|2030
Hugo Siquet|RB|24|4000|BEL|2028
Freddie Potts|DM|23|10000|ENG|2030
Lynnt Audoor|DM|23|1500|BEL|2029
Gianluca Okon-Engstler|DM|17|1500|ITA|2029
Cheveyo Tsawa|CM|19|6000|SUI|2030
Hugo Vetlesen|CM|26|5000|NOR|2029
Félix Lemaréchal|AM|23|6000|FRA|2029
Tian Nai Koren|AM|17|3000|SVN|2029
Jan Virgili|LW|20|15000|ESP|2031
Mamadou Diakhon|LW|21|7000|SEN|2029
Wisdom Mike|LW|18|5000|GER|2029
Carlos Forbs|RW|22|23000|POR|2029
Nicolò Tresoldi|ST|22|35000|GER|2029
Romeo Vermant|ST|22|12000|BEL|2028
Andrej Vasovic|ST|19|5000|SUI|2030` },
    { id: 'genk', name: 'Генк', city: 'Генк', stadium: 'Cegeka Arena', cap: 24956, colors: ['#0055a4', '#ffffff'], players: `
Lucca Brughmans|GK|18|20000|BEL|2027
Tobe Leysen|GK|24|3500|BEL|2031
Tobias Lawal|GK|26|1500|AUT|2029
Hendrik Van Crombrugge|GK|33|500|BEL|2027
Emile Doucouré|GK|19|500|MLI|2030
Matte Smets|CB|22|10000|BEL|2030
Josué Kongolo|CB|20|7000|BEL|2030
Christiaan Ravych|CB|24|3000|BEL|2030
Elie Mbavu|CB|17|3000|BEL|2028
Adrián Palacios|CB|22|800|VEN|2028
Joris Kayembe|LB|32|2000|COD|2027
Christian Akpan|LB|21|200|NGA|2030
Milan Roganovic|RB|20|4000|MNE|2031
Kevin Amaro|RB|22|2500|URU|2031
Ken Nkuba|RB|24|1000|BEL|2028
Emmanuel Sarfo|RB|19|300|BEL|2027
Ibrahima Sory Bangoura|DM|22|6000|GUI|2030
Nikolas Sattlberger|DM|22|2200|AUT|2029
Benjamin Tahirović|CM|23|4500|BIH|2027
August De Wannemacker|CM|17|2000|BEL|2028
Jeppe Erenbjerg|AM|26|5500|DEN|2029
Daan Heymans|AM|27|4000|BEL|2029
Noah Adedeji-Sternberg|LW|21|4000|BEL|2028
Ayumu Yokoyama|LW|23|2500|JPN|2029
Junya Ito|RW|33|3000|JPN|2028
Rafiu Durosinmi|ST|23|10000|NGA|2030
Aaron Bibout|ST|22|3500|CMR|2030
Jerry Afriyie|ST|19|3500|GHA|2031` },
    { id: 'gent', name: 'Гент', city: 'Гент', stadium: 'Planet Group Arena', cap: 20185, colors: ['#0055a4', '#ffffff'], players: `
Kjell Peersman|GK|22|400|BEL|2030
Bas Evers|GK|17|400|BEL|2028
Victor De Coninck|GK|20|75|BEL|2027
Maksim Paskotsi|CB|23|3500|EST|2029
Siebe Van der Heyden|CB|28|3000|BEL|2028
Matties Volckaert|CB|24|2500|BEL|2029
Christian Burgess|CB|35|1800|ENG|2028
Mamadou Diallo|CB|19|300|SEN|2029
Tiago Araújo|LB|25|5000|POR|2028
Abdoul Ayinde|LB|21|600|BFA|2028
Gilles De Meyer|RB|20|500|BEL|2028
Tibe De Vlieger|CM|20|8000|BEL|2030
Mathias Delorge|CM|22|7000|BEL|2028
László Bénes|CM|29|2500|SVK|2030
Leonardo Lopes|CM|27|2500|POR|2028
Mohammed El Âdfaoui|CM|18|2000|BEL|2028
Matisse Samoise|RW|24|2500|BEL|2028
Abdelkahar Kadri|AM|26|2500|ALG|2029
Aimé Omgba|AM|24|1000|NED|2029
Michel-Ange Balikwisha|LW|25|3000|COD|2027
Momodou Sonko|LW|21|3000|SWE|2028
El Hadji Seck|LW|19|2000|SEN|2030
Kyrell Wilson|RW|21|1000|ENG|2030
Hyllarion Goore|ST|21|4000|CIV|2029
Ibrahima Cissé|ST|19|3000|SEN|2028
Abubakar Abdullahi|ST|20|700|NGA|2028` },
    { id: 'kortrijk', name: 'Кортрейк', city: 'Кортрейк', stadium: 'Guldensporenstadion', cap: 9399, colors: ['#e30613', '#ffffff'], players: `
Patrik Gunnarsson|GK|25|400|ISL|2028
Ebbe De Vlaeminck|GK|20|200|BEL|2028
Tristen Alliet|GK|21|50|BEL|2027
Axel Drouhin|CB|26|1200|FRA|2029
Rudy Kohon|CB|22|1200|FRA|2029
James Ndjeungoue|CB|23|800|CMR|2028
Harrison Murray-Campbell|CB|20|750|ENG|2027
Gilles Ruyssen|CB|32|600|BEL|2028
Matthew Anderson|LB|22|1200|SCO|2028
Guust Lamerand|LB|18|150|BEL|2029
Mohamed Fofana|RB|20|250|CIV|2028
Gilles Dewaele|RB|30|200|BEL|2027
Boris Lambert|DM|26|800|BEL|2029
Liam De Smet|CM|22|450|BEL|2028
Ken Masui|LW|25|900|JPN|2027
Lennard Hens|AM|30|300|BEL|2028
Shandre Campbell|LW|21|1000|RSA|2030
Jellert Van Landschoot|LW|29|800|BEL|2028
Lenn De Smet|LW|22|700|BEL|2028
Suf Podgoreanu|LW|24|650|ISR|2030
Anthony Philips|RW|17|400|BEL|2029
Goduine Koyalipou|ST|26|2000|CTA|2027
Thierry Ambrose|ST|29|1800|GLP|2027
Sixtus Ogbuehi|ST|23|200|NGA|2028
Abdoul Diop|CM|21|100|SEN|2028` },
    { id: 'la_louviere', name: 'Ла-Лувьер', city: 'Ла-Лувьер', stadium: 'Easi Arena', cap: 8050, colors: ['#00a650', '#ffffff'], players: `
Tiago Pereira Cardoso|GK|20|1000|LUX|2027
Lucas Monteiro|GK|21|100|POR|2027
Théo Radelet|GK|18|50|BEL|2029
Manu Verbruggen|CB|18|50|BEL|2028
Yllan Okou|CB|23|2000|FRA|2028
Djibril Lamego|CB|23|1000|FRA|2027
Siad Gourville|CB|26|800|FRA|2027
Patrick Nkoa|CB|27|800|GER|2028
Mehdi Boukamir|CB|22|500|MAR|2027
Wagane Faye|CB|32|400|SEN|2027
Thierry Lutonda|LB|25|600|BEL|2027
Nolan Gillot|LB|23|500|FRA|2028
Marius Courcoul|DM|19|2500|FRA|2027
Ismaila Coulibaly|CM|25|1000|MLI|2028
Mame Wade|CM|24|600|SEN|2028
Anas Tajaouart|CM|21|600|MAR|2027
Mátyás Kovács|RW|23|700|HUN|2028
Bryan Soumaré|AM|27|200|FRA|2027
Timéo Kerckhofs|AM|17|150|BEL|2028
Noah Makembo-Ntemo|AM|19|100|BEL|2027
Quentin Benaets|RW|23|100|BEL|2027
Mustapha Isah|ST|22|2500|NGA|2029
Zsombor Gruber|ST|22|1500|HUN|2029
Elias Filet|ST|24|1000|FRA|2028
Léandro Rousseau|ST|23|1000|BEL|2028` },
    { id: 'lommel', name: 'Ломмел', city: 'Ломмел', stadium: 'Soeverein Stadion', cap: 12911, colors: ['#00a650', '#ffffff'], players: `
Matthias Pieklak|GK|20|1500|BEL|2029
Nikola Ivezic|GK|23|200|MNE|2027
Rik Vercauteren|GK|25|100|BEL|2027
Melvin Ramundo|GK|19|50|BEL|2027
Shawn Adewoye|CB|26|900|BEL|2028
Timothy Eyoma|CB|26|600|ENG|2027
Jesper Tolinsson|CB|23|400|SWE|2028
Emile Vandecraen|CB|18|100|BEL|2028
Josias Lama|CB|21|50|BEL|2027
Jason van Duiven|RB|21|1000|NED|2029
Tristan Gooijer|RB|22|1000|NED|2028
Isaiah Dada-Mascoll|DM|20|500|ENG|2027
Joey Pelupessy|DM|33|400|IDN|2027
Sverre Nypan|CM|19|10000|NOR|2027
Djordje Gordic|CM|21|500|SRB|2027
Nicolas Rommens|CM|31|400|BEL|2028
Elijah Odede|LW|19|600|NGA|2027
Juho Talvitie|RW|21|1000|FIN|2028
Stredair Appuah|RW|22|1000|FRA|2027
Tom Reyners|RW|26|900|BEL|2028
Niek Corthouts|RW|20|150|BEL|2027
Don-Angelo Konadu|ST|20|1500|NED|2027
Alexander Reumers|ST|19|150|BEL|2028` },
    { id: 'mechelen', name: 'Мехелен', city: 'Мехелен', stadium: 'Achter De Kazerne', cap: 16715, colors: ['#ffd700', '#e30613'], players: `
Nacho Miras|GK|29|3000|ESP|2029
Ortwin De Wolf|GK|29|500|BEL|2027
Tijn Van Ingelgom|GK|19|100|BEL|2027
Axel Willockx|GK|19|50|BEL|2027
José Marsà|CB|24|3500|ESP|2027
Mike Eerdhuijzen|CB|26|1800|NED|2030
Luc Marijnissen|CB|23|1500|NED|2030
Gora Diouf|CB|23|1500|SEN|2028
Thérence Koudou|RB|21|4000|FRA|2029
Kobe Corbanie|RB|21|500|BEL|2029
Massimo Decoene|DM|22|400|BEL|2027
Ryan Teague|DM|24|400|AUS|2028
Dennis Praet|CM|32|1500|BEL|2028
Marco Decherf|CM|20|800|FRA|2030
Amine Ouahabi|CM|18|100|MAR|2028
Simion Michez|RW|24|600|CMR|2029
Bilal Bafdili|AM|22|800|BEL|2027
Максим Киреев|AM|22|700|BLR|2029
Mats Van Helden|AM|20|75|BEL|2028
Yanis Asghir|AM|17|50|MAR|2028
Myron van Brederode|LW|23|4500|NED|2029
Cedric Van Meirvenne|LW|21|1000|BEL|2030
Bill Antonio|RW|24|1000|ZIM|2027
Halil Özdemir|ST|21|400|TUR|2027
Benito Raman|ST|31|800|BEL|2027
Malcolm Lohunanu-Mbasi|ST|18|500|BEL|2028` },
    { id: 'leuven', name: 'Лёвен', city: 'Лёвен', stadium: 'Den Dreef', cap: 10000, colors: ['#ffffff', '#e30613'], players: `
Kiany Vroman|GK|22|300|BEL|2029
Owen Jochmans|GK|23|150|BEL|2027
Marcel Van Dijck|GK|18|50|BEL|2027
Roggerio Nyakossi|CB|22|5000|SUI|2028
Ewoud Pletinckx|CB|26|1800|BEL|2029
Alessandro Fontanarosa|CB|23|1400|ITA|2027
Jamie Lawrence|CB|23|1000|GER|2029
Noë Dussenne|CB|34|300|BEL|2028
Viktor Damjanic|CB|20|300|CRO|2028
Christ Souanga|CB|20|300|BEL|2027
Takuya Ogiwara|LB|26|600|JPN|2027
Davis Opoku|RB|18|2500|BEL|2028
Óscar Gil|RB|28|800|ESP|2027
Thibault Vlietinck|RB|29|350|BEL|2028
Lukasz Lakomy|DM|25|1500|POL|2029
Birger Verstraete|DM|32|700|BEL|2027
Manuel Osifo|DM|23|400|BEL|2027
Wouter George|CM|24|1200|BEL|2030
Bryang Kayo|CM|24|300|USA|2028
Sebastian Murru|CM|19|150|BEL|2028
William Balikwisha|AM|27|300|COD|2028
Hasan Bulut|AM|19|150|TUR|2027
Matteo Heremans|AM|20|100|BEL|2027
Emmanuel Addai|LW|25|1200|GHA|2029
Henok Teklab|LW|27|800|GER|2027
Robin Mirisola|ST|19|4000|BEL|2027
Chukwubuikem Ikwuemesi|ST|25|1200|NGA|2028
Shin Yamada|ST|26|800|JPN|2027
Kyan Vaesen|ST|25|700|BEL|2029
Chike Van De Ven|ST|19|150|BEL|2028` },
    { id: 'stvv', name: 'Сент-Трюйден', city: 'Синт-Трюйден', stadium: 'Stayen', cap: 14600, colors: ['#ffd700', '#0055a4'], players: `
Leo Kokubo|GK|25|5000|JPN|2027
Matt Lendfers|GK|20|200|BEL|2029
Yanis Ngoy|GK|18|100|BEL|2028
Ahmad Abu Rasen|GK|22|25|KSA|2028
Kota Takai|CB|22|5000|JPN|2027
Joedrick Pupe|CB|29|1300|BEL|2029
Visar Musliu|CB|31|1000|MKD|2027
Jeremy Mbambi|CB|18|450|BEL|2027
Wolke Janssens|CB|31|300|BEL|2028
Taiga Hata|LB|24|2500|JPN|2028
Rune Verheyden|LB|19|150|BEL|2030
Robert-Jan Vanwesemael|RB|24|3000|BEL|2030
Abdoulaye Sissako|DM|28|2000|UGA|2028
Alouis Diriken|DM|22|300|BEL|2029
Ryan Merlen|CM|24|2500|FRA|2029
Nelson Ishiwatari|CM|21|1500|JPN|2030
Ryotaro Araki|AM|24|1500|JPN|2031
Ilias Sebaoui|LW|25|4500|MAR|2028
Nathanaël Mbuku|LW|24|2000|COD|2027
Kaito Matsuzawa|LW|25|1300|JPN|2027
Arbnor Muja|RW|27|2500|ALB|2029
Illyès Benachour|RW|19|100|MAR|2029
Samed Bazdar|ST|22|3000|BIH|2030
Oumar Diouf|ST|23|1000|SEN|2029
Shion Shinkawa|ST|19|800|JPN|2029
Frédéric Soèllé Soèllé|ST|20|400|BEL|2028` },
    { id: 'standard', name: 'Стандард', city: 'Льеж', stadium: 'Stade Maurice Dufrasne', cap: 27670, colors: ['#e30613', '#ffffff'], players: `
Matthieu Epolo|GK|21|10000|COD|2029
Lucas Pirard|GK|31|350|BEL|2028
Belmin Dizdarevic|GK|25|100|BIH|2027
Ibrahim Karamoko|CB|25|5000|FRA|2030
Ibe Hautekiet|CB|24|4000|BEL|2029
Dimitri Lavalée|CB|29|1500|BEL|2028
Daan Dierckx|CB|23|1200|BEL|2028
Noah Sy|CB|19|200|BEL|2027
Gustav Mortensen|LB|22|4500|DEN|2030
Henry Lawrence|RB|25|4000|ENG|2029
Ryan Fosso|DM|24|2000|CMR|2029
Marco Ilaimaharitra|DM|31|800|MAD|2027
Laurens Goemaere|DM|20|600|BEL|2030
Rayan Touzghar|CM|22|3000|MAR|2029
Alexis Trouillet|CM|25|2000|FRA|2028
Tobias Mohr|LW|31|800|GER|2028
Salieu Drammeh|LW|23|2000|GAM|2029
Sylvester Jasper|LW|25|1800|BUL|2029
Adnane Abid|RW|23|6000|BEL|2029
Bernard Nguene|ST|20|3000|CMR|2029
Bruny Nsimba|ST|26|2500|BEL|2029
Andi Zeqiri|ST|27|2000|SUI|2027
Dennis Eckert Ayensa|ST|29|2000|IRN|2028` },
    { id: 'union_sg', name: 'Юнион Сент-Жилуаз', city: 'Брюссель', stadium: 'Stade Joseph Marien', cap: 9400, colors: ['#ffd700', '#1d3c8f'], players: `
Hervé Koffi|GK|30|6000|BFA|2027
Vic Chambaere|GK|23|700|BEL|2027
Гиорги Кавлашвили|GK|19|100|GEO|2028
Keo Boets|GK|22|50|BEL|2027
Massiré Sylla|CB|21|5000|SEN|2030
Ross Sykes|CB|27|4500|ENG|2027
Nikki Havenaar|CB|31|500|JPN|2029
Nohim Chibani|CB|23|400|FRA|2030
Louis Patris|RB|25|4000|BEL|2029
Denzel De Roeve|RB|22|3500|BEL|2031
Kamiel Van de Perre|CM|22|11000|BEL|2030
Besfort Zeneli|CM|23|10000|SWE|2030
Darius Olaru|AM|28|4500|ROU|2030
Dylan Aquino|LW|21|6000|ARG|2030
Relebohile Mofokeng|LW|22|6000|RSA|2030
Guilherme Smith|LW|23|4000|BRA|2030
Mateo Biondić|ST|23|7000|GER|2030
Kevin Rodríguez|ST|26|6000|ECU|2029
Raul Florucz|ST|25|4000|AUT|2029` },
    { id: 'westerlo', name: 'Вестерло', city: 'Вестерло', stadium: 'Het Kuipje', cap: 9000, colors: ['#ffd700', '#0055a4'], players: `
Andreas Jungdal|GK|24|3500|DEN|2028
Bill Lathouwers|GK|27|500|BEL|2030
Jahnilo Wiegel-Triebel|GK|21|100|SUR|2027
Botond Balogh|CB|24|2500|HUN|2030
Reno Münz|CB|21|1800|GER|2030
Amando Lapage|CB|21|1500|BEL|2029
Seiji Kimura|CB|25|1500|JPN|2029
Michée Ndembi|CB|19|250|BEL|2029
Dylan Ourega|LB|22|2000|FRA|2030
Fabio Ferraro|LB|24|800|BEL|2029
Lasse Flø|RB|21|1200|DEN|2030
Lucas Mbamba|RB|20|1000|BEL|2029
Ibrahim Fofana|DM|23|3000|CIV|2030
Pape Diong|DM|20|2000|SEN|2030
Сергий Сыдорчук|DM|35|250|UKR|2027
Thomas Van den Keybus|CM|25|700|BEL|2027
Reda Laalaoui|CM|21|500|MAR|2029
Philippe Bibout|CM|18|100|CMR|2030
Isa Sakamoto|AM|23|5000|JPN|2028
Cisse Sandra|AM|22|2000|BEL|2030
Shunsuke Saito|LW|21|4000|JPN|2029
Naoufal Bohamdi-Kamoni|LW|19|500|MAR|2027
Dino Delic|RW|18|250|AUT|2028
David Amegnaglo|RW|21|200|FRA|2030
Norman Bassette|ST|21|3000|BEL|2027
Emmanuel Tsimba|ST|20|1500|SUI|2030
Abdoulaye Koné|ST|20|300|CIV|2030` },
    { id: 'zulte', name: 'Зюлте-Варегем', city: 'Варегем', stadium: 'Elindus Arena', cap: 12300, colors: ['#e30613', '#00a650'], players: `
Brent Gabriël|GK|27|1000|BEL|2028
Louis Bostyn|GK|33|300|BEL|2027
Florian Van Bever|GK|19|100|BEL|2028
Arnaud Dobbels|GK|21|50|BEL|2027
Jakob Kiilerich|CB|26|2000|DEN|2027
Laurent Lemoine|CB|28|1000|BEL|2027
Benoit De Jaegere|CB|22|500|BEL|2029
Mouhamadou Sall|CB|19|100|SEN|2028
Youssoupha Mbodji|LB|22|1200|SEN|2027
Yannick Cappelle|LB|23|800|BEL|2028
Salim Diakité|RB|26|1500|MLI|2027
Enrique Lofolomo|DM|26|1500|GER|2027
Thomas Claes|CM|22|1500|BEL|2028
Dirk Asare|CM|22|1000|BEL|2029
Tristan Panduro|CM|18|100|DEN|2028
Ousseynou Niang|LW|25|4000|SEN|2028
Serxho Ujka|AM|28|400|ALB|2027
Niko Horvat|AM|18|200|CRO|2027
Marley Aké|LW|25|2500|FRA|2028
Zalán Átrok|LW|20|1500|HUN|2029
Nikola Mituljikic|RW|23|400|SRB|2028
Anosike Ementa|ST|24|5000|DEN|2028
Tobias Hedl|ST|23|1000|AUT|2027
Hemsley Akpa-Chukwu|ST|21|650|BEL|2029` },
  ],
});
