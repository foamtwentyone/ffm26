// Ла Лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'esp', name: 'Ла Лига', short: 'Ла Лига', country: 'ESP', tier: 1, weekday: 6,
  autumn: { from: '08-15', rounds: 19 }, spring: { from: '01-09', rounds: 19 },
  ticket: 35, prize: [40000, 38300, 36650, 34950, 33250, 31600, 29900, 28200, 26550, 24850, 23150, 21450, 19800, 18100, 16400, 14750, 13050, 11350, 9700, 8000],
  teams: [
    { id: 'barcelona', name: 'Барселона', city: 'Барселона', stadium: 'Spotify Camp Nou', cap: 99787, colors: ['#a50044', '#004d98'], players: `
Joan García|GK|25|45000|ESP|2031||<2025-07-01
Dominik Livakovic|GK|31|4000|CRO|2030||2026-08-27
Wojciech Szczęsny|GK|36|800|POL|2027||2024-10-02
Pau Cubarsí|CB|19|100000|ESP|2029||2024-01-01
Eric García|CB|25|45000|ESP|2031||2021-07-01
Gerard Martín|CB|24|40000|ESP|2028||2024-07-01
Andreas Christensen|CB|30|8000|DEN|2028||2022-07-04
Alejandro Balde|LB|23|40000|ESP|2028||2022-07-01
Jules Koundé|RB|27|55000|FRA|2030|BEN|<2022-07-28
Xavi Espart|RB|19|25000|ESP|2030||2026-07-01
João Cancelo|RB|32|7000|POR|2029||2026-08-20
Rodri|DM|30|60000|ESP|2030||2026-08-18
Pedri|CM|23|150000|ESP|2030||<2019-09-02
Marc Bernal|CM|19|40000|ESP|2029||2024-07-01
Gavi|CM|22|25000|ESP|2030||2021-07-01
Frenkie de Jong|CM|29|25000|NED|2029||2019-07-01
Brian Fariñas|CM|20|5000|ESP|2028||2026-07-01
Fermín López|AM|23|110000|ESP|2031||2023-07-01
Dani Olmo|AM|28|60000|ESP|2030||2024-08-09
Anthony Gordon|LW|25|80000|ENG|2031|SCO|2026-07-01
Jesse Bisiwu|LW|18|8000|BEL|2031|GHA|2026-07-31
Lamine Yamal|RW|19|220000|ESP|2031||2023-07-01
Karim Adeyemi|RW|24|40000|GER|2031|NGA|2026-07-23
Roony Bardghji|RW|20|8000|SWE|2029|SYR|2025-07-14
Raphinha|ST|29|70000|BRA|2028|ITA|2022-07-13
Gabriel Jesus|ST|29|17000|BRA|2029||2026-09-01
Hamza Abdelkarim|ST|18|8000|EGY|2030||2026-07-01` },
    { id: 'real_madrid', name: 'Реал Мадрид', city: 'Мадрид', stadium: 'Estadio Bernabéu', cap: 83186, colors: ['#ffffff', '#febe10'], players: `
Thibaut Courtois|GK|34|15000|BEL|2027||2018-08-09
Андрий Лунин|GK|27|12000|UKR|2030||2018-07-01
Dean Huijsen|CB|21|60000|ESP|2030|NED|2025-06-01
Ibrahima Konaté|CB|27|45000|FRA|2030|MLI|2026-07-01
Raúl Asencio|CB|23|18000|ESP|2031||2024-07-01
Éder Militão|CB|28|18000|BRA|2028|ESP|2019-07-01
Antonio Rüdiger|CB|33|6000|GER|2027|SLE|2022-07-01
Marc Cucurella|LB|28|60000|ESP|2032||2026-07-01
Álvaro Carreras|LB|23|50000|ESP|2031||2025-07-14
Ferland Mendy|LB|31|4000|FRA|2028|SEN|2019-07-01
Trent Alexander-Arnold|RB|28|60000|ENG|2031||2025-06-01
Denzel Dumfries|RB|30|25000|NED|2030|ARU|2026-07-05
Aurélien Tchouaméni|DM|26|70000|FRA|2028|CMR|2022-07-01
Federico Valverde|CM|28|90000|URU|2029|ESP|2018-07-01
Eduardo Camavinga|CM|23|50000|FRA|2029|CGO|2021-08-31
Thiago Pitarch|CM|19|20000|ESP|2030|MAR|2026-03-01
Jorge Cestero|CM|20|7500|ESP|2028||2028-06-30
Jude Bellingham|AM|23|160000|ENG|2029|IRL|2023-07-01
Arda Güler|AM|21|100000|TUR|2029||2023-07-06
Bernardo Silva|AM|32|22000|POR|2028||2026-07-01
Vinicius Junior|LW|26|130000|BRA|2032|ESP|2018-07-12
Yan Diomande|RW|19|120000|CIV|2033||2026-08-06
Rodrygo|RW|25|45000|BRA|2028|ESP|2019-07-01
Brahim Díaz|RW|27|35000|MAR|2027|ESP|2019-01-06
Kylian Mbappé|ST|27|200000|FRA|2029|CMR|2024-07-01
Endrick|ST|20|40000|BRA|2030||2024-07-21
Carlos Espí|ST|21|40000|ESP|2031||<2026-07-30` },
    { id: 'villarreal', name: 'Вильярреал', city: 'Вильярреал', stadium: 'Estadio de la Cerámica', cap: 24500, colors: ['#ffe667', '#005187'], players: `
Luiz Júnior|GK|25|12000|BRA|2030|POR|2024-08-20
Péter Gulácsi|GK|36|1000|HUN|2028||2026-08-03
Rubén Gómez|GK|24|400|ESP|2027||2026-07-01
Renato Veiga|CB|23|30000|POR|2032|CPV|2025-08-22
Logan Costa|CB|25|15000|CPV|2030|FRA|2024-08-22
Pau Navarro|CB|21|15000|ESP|2031||2024-11-01
Juan Foyth|CB|28|8000|ARG|2029|ESP|2021-07-01
Carlos Romero|LB|24|25000|ESP|2031||<2024-07-01
Sergi Cardona|LB|27|9000|ESP|2027||<2024-07-18
Santiago Mouriño|RB|24|20000|URU|2030|ESP|<2025-08-01
Alex Freeman|RB|22|15000|USA|2032||2026-01-29
Pape Gueye|CM|27|40000|SEN|2028|FRA|2024-07-05
Carlos Macià|CM|18|15000|ESP|2031||2026-07-01
Nathan Saliba|CM|22|15000|CAN|2031|HAI|2026-08-25
Santi Comesaña|CM|30|8000|ESP|2028||<2023-07-01
Alassane Diatta|CM|21|5000|SEN|2030||2026-07-01
Alberto Moleiro|LW|23|50000|ESP|2030|CUB|<2025-07-01
Nízar El Jmili|LW|21|150|ESP|2030|MAR|2030-06-30
Ilias Akhomach|RW|22|12000|MAR|2028|ESP|<2023-07-03
Tajon Buchanan|RW|27|12000|CAN|2030|JAM|2025-07-29
Nicolas Pépé|RW|31|6000|CIV|2028|FRA|2024-08-04
Георгес Микаутадзе|ST|25|40000|GEO|2031|FRA|2025-09-01
Tani Oluwaseyi|ST|26|7000|CAN|2030|NGA|2025-08-29
Ayoze Pérez|ST|33|5000|ESP|2028||<2024-08-13
Gerard Moreno|ST|34|2500|ESP|2027||<2018-07-01` },
    { id: 'atletico', name: 'Атлетико Мадрид', city: 'Мадрид', stadium: 'Riyadh Air Metropolitano', cap: 70460, colors: ['#cb3524', '#ffffff'], players: `
Jan Oblak|GK|33|15000|SVN|2028||2014-07-16
Juan Musso|GK|32|3000|ARG|2028|ITA|2025-06-10
Salvi Esquivel|GK|21|1000|ESP|2029||2026-09-01
Marc Pubill|CB|23|50000|ESP|2030||<2025-07-23
Cristian Romero|CB|28|40000|ARG|2031||2026-08-15
Dávid Hancko|CB|28|35000|SVK|2030||2025-07-24
Robin Le Normand|CB|29|18000|ESP|2029|FRA|<2024-07-27
Jorge Domínguez|CB|16|8000|ESP|2028|CGO|2028-06-30
Alejandro Grimaldo|LB|31|20000|ESP|2030||2026-07-01
Dani Martínez|LB|22|2500|ESP|2030||2026-09-01
Marcos Llorente|RB|31|20000|ESP|2027||<2019-07-01
Morten Hjulmand|DM|27|45000|DEN|2031||2026-07-11
Pablo Barrios|CM|23|70000|ESP|2030||2023-01-23
Rodrigo Mendoza|CM|21|20000|ESP|2031||<2026-02-02
Johnny Cardoso|CM|25|20000|USA|2030|ITA|<2025-07-16
Obed Vargas|CM|21|10000|MEX|2030|ESP|2026-02-02
Koke|CM|34|5000|ESP|2027||2011-01-01
Kang-in Lee|AM|25|35000|KOR|2031||2026-07-25
Álex Baena|LW|25|45000|ESP|2030||<2025-07-02
Ademola Lookman|LW|29|40000|NGA|2030|ENG|2026-02-02
Arnau Ortiz|LW|24|6000|ESP|2028||2026-07-01
Giuliano Simeone|RW|23|40000|ARG|2030|ITA|2022-07-01
Julián Alvarez|ST|26|110000|ARG|2030|ITA|2024-08-12
Jonathan David|ST|26|30000|CAN|2027|USA|2026-09-01
Alexander Sørloth|ST|30|15000|NOR|2028||<2024-08-03` },
    { id: 'betis', name: 'Бетис', city: 'Севилья', stadium: 'Benito Villamarín', cap: 60721, colors: ['#00954c', '#ffffff'], players: `
Álvaro Valles|GK|29|10000|ESP|2030||2025-07-01
Diego Conde|GK|27|3000|ESP|2027||<2026-07-20
Natan|CB|25|30000|BRA|2030||2025-07-01
Valentín Gómez|CB|23|12000|ARG|2030|ESP|2025-07-26
Diego Llorente|CB|33|2500|ESP|2028||2024-07-09
Marc Bartra|CB|35|900|ESP|2027||2023-07-24
Fran García|LB|27|7500|ESP|2030||<2026-07-08
Junior Firpo|LB|30|3500|DOM|2028|ESP|2025-07-17
Ángel Ortiz|RB|22|6000|ESP|2029||2025-01-01
Héctor Bellerín|RB|31|2400|ESP|2028||2023-07-18
Facundo Bernal|DM|23|10000|URU|2031|ITA|2026-07-06
Marc Roca|DM|29|4000|ESP|2029||2024-07-01
Nelson Deossa|CM|26|9000|COL|2030||2025-08-04
Pablo Fornals|CM|30|8000|ESP|2029||2024-02-01
Dani Ceballos|CM|30|6000|ESP|2029||<2026-09-01
Álvaro Fidalgo|CM|29|5000|MEX|2030|ESP|2026-02-01
Giovani Lo Celso|AM|30|7000|ARG|2028|ITA|2024-08-30
Isco|AM|34|3500|ESP|2028||2023-07-26
Iker Losada|AM|25|1800|ESP|2029||<2024-07-06
Abde Ezzalzouli|LW|24|40000|MAR|2029|ESP|<2023-09-01
Rodrigo Riquelme|LW|26|4000|ESP|2030||<2025-07-04
Antony|RW|26|40000|BRA|2030||2025-09-01
Aitor Ruibal|RW|30|4000|ESP|2028||2019-07-01
Troy Parrott|ST|24|20000|IRL|2031||2026-08-20
Cucho Hernández|ST|27|18000|COL|2030|ESP|2025-02-03` },
    { id: 'celta', name: 'Сельта', city: 'Виго', stadium: 'Abanca-Balaídos', cap: 24870, colors: ['#8ac3ee', '#ffffff'], players: `
Ionuț Radu|GK|29|10000|ROU|2029||2025-07-01
Altay Bayındır|GK|28|3800|TUR|2027||2026-08-07
Iván Villar|GK|29|900|ESP|2027||<2019-07-01
Javi Rodríguez|CB|23|18000|ESP|2030||<2024-07-01
Yoel Lago|CB|22|7500|ESP|2029||<2025-07-01
Carl Starfelt|CB|31|4500|SWE|2027||2023-08-10
Abdoulaye Faye|CB|22|4500|SEN|2027||2026-08-03
Sebastián Cáceres|CB|27|4500|URU|2030||2026-09-01
Marcos Alonso|CB|35|1200|ESP|2028||<2024-08-28
Javi Galán|LB|31|1800|ESP|2028||<2026-07-01
Sergio Carreira|RB|26|12000|ESP|2029||<2021-07-01
Javi Rueda|RB|24|6000|ESP|2029||<2024-07-01
Álvaro Núñez|RB|26|4000|ESP|2030||<2026-02-02
Ilaix Moriba|CM|23|15000|GUI|2029|ESP|2025-07-01
Miguel Román|CM|23|15000|ESP|2028||<2025-07-01
Aleix Febas|CM|30|5000|ESP|2029||<2026-07-01
Hugo Burcio|CM|19|2000|ESP|2028||2028-06-30
Williot Swedberg|LW|22|20000|SWE|2029||2022-07-01
Hugo Álvarez|LW|23|8000|ESP|2028||<2024-07-18
Couhaib Driouech|LW|24|7500|MAR|2030|NED|2026-08-25
Ferran Jutglà|RW|27|10000|ESP|2029||2025-07-01
Jones El-Abdellaoui|RW|20|8000|MAR|2029|NOR|2025-01-08
Hugo González|RW|23|3000|ESP|2028||<2026-07-01
Pablo Durán|ST|25|4000|ESP|2028||<2024-07-18
Borja Iglesias|ST|33|2500|ESP|2027||<2025-08-12
Iago Aspas|ST|39|1600|ESP|2027||<2015-07-07` },
    { id: 'getafe', name: 'Хетафе', city: 'Хетафе', stadium: 'Estadio Coliseum', cap: 17393, colors: ['#005999', '#ffffff'], players: `
David Soria|GK|33|2800|ESP|2030||<2018-07-13
Jiri Letacek|GK|27|2000|CZE|2028||2024-07-13
Zaid Romero|CB|26|5000|ARG|2030|SYR|2026-07-06
Abdel Abqar|CB|27|3500|MAR|2028||<2025-07-29
Sebastián Boselli|CB|22|1500|URU|2030|ITA|2026-07-01
Dakonam Djené|CB|34|1400|TOG|2027||2017-07-24
Саба Сазонов|CB|24|800|GEO|2027|RUS|2026-08-04
Jean Ives Valou|CB|20|600|CIV|2027|BEN|<2026-07-07
Davinchi|LB|19|2000|ESP|2028||2025-07-03
Johan Mojica|LB|34|1500|COL|2027|ESP|<2026-08-13
Andrés García|RB|23|7000|ESP|2027||2026-07-16
Daniel Carvajal|RB|34|3500|ESP|2027||2026-10-13
Kiko Femenía|RB|35|500|ESP|2027||<2025-07-01
Mario Martín|DM|22|10000|ESP|2030||<2026-07-01
Orel Mangala|DM|28|9000|BEL|2027|COD|2026-08-06
Nemanja Gudelj|DM|34|2000|SRB|2027|NED|<2026-08-30
Ramón Terrats|CM|26|3000|ESP|2029||<2026-07-08
Francho Serrano|CM|25|3000|ESP|2029||2026-08-18
Alberto Risco|AM|21|800|ESP|2027||2026-07-01
Juanmi|LW|33|1000|ESP|2027||<2025-07-01
Martín Satriano|ST|25|10000|URU|2030|ITA|2026-07-01
Christantus Uche|ST|23|9000|NGA|2028||2024-07-01
Iván Azón|ST|23|7500|ESP|2027||2026-09-01
Enes Ünal|ST|29|7000|TUR|2029||2026-08-13
Borja Mayoral|ST|29|4500|ESP|2027||<2022-08-01` },
    { id: 'rayo', name: 'Райо Вальекано', city: 'Мадрид', stadium: 'Estadio de Vallecas', cap: 15500, colors: ['#ffffff', '#e53027'], players: `
Augusto Batalla|GK|30|6000|ARG|2030|ITA|2025-07-01
Emil Audero|GK|29|2800|IDN|2027|ITA|2026-09-01
Dani Cárdenas|GK|29|1800|ESP|2027||<2023-08-18
Mujaid Sadick|CB|26|5000|ESP|2027|NGA|2026-09-01
Marash Kumbulla|CB|26|3000|ALB|2027|ITA|2026-08-07
Luiz Felipe|CB|29|2000|ITA|2027|BRA|2025-07-07
Jozhua Vertrouwd|CB|22|2000|NED|2030||<2026-07-01
Florian Lejeune|CB|35|1800|FRA|2028||<2023-07-28
Pelayo Fernández|CB|23|500|ESP|2028||<2024-07-02
Adrià Pedrosa|LB|28|2800|ESP|2027||<2026-08-27
Andrei Rațiu|RB|28|24000|ROU|2030|ESP|2023-08-26
Iván Balliu|RB|34|1000|ALB|2027|ESP|<2021-07-14
Pedro Díaz|CM|28|3000|ESP|2028||2024-08-05
Unai López|CM|30|2500|ESP|2029||<2022-07-01
Óscar Valentín|CM|32|2000|ESP|2027||2019-07-01
Pathé Ciss|CM|32|1800|SEN|2027||2021-07-28
Gnangoro Bouare|CM|22|1000|ESP|2031||2026-08-27
Isi Palazón|AM|31|2800|ESP|2028||2020-01-23
Randy Nteka|AM|28|1000|ANG|2028|FRA|2021-07-28
Rayane Belaid|AM|21|600|ESP|2031|ALG|2026-09-03
Álvaro García|LW|33|1500|ESP|2028||<2018-08-23
Jorge de Frutos|RW|29|12000|ESP|2028||<2023-08-17
Гиорги Цитаишвили|RW|25|3000|GEO|2029|UKR|2026-08-13
Fran Pérez|RW|24|2500|ESP|2029||<2025-08-15
Sergio Camello|ST|25|10000|ESP|2027||<2023-08-17
Alemão|ST|28|4000|BRA|2030|POL|2025-09-01
Raúl de Tomás|ST|32|400|ESP|2027|DOM|2022-09-13` },
    { id: 'valencia', name: 'Валенсия', city: 'Валенсия', stadium: 'Estadio de Mestalla', cap: 49430, colors: ['#ffffff', '#000000'], players: `
Kayne van Oevelen|GK|23|4000|NED|2027||2026-08-24
Stole Dimitrievski|GK|32|2000|MKD|2028|ESP|<2024-07-01
Cristian Rivero|GK|28|100|ESP|2027||2020-08-01
César Tárrega|CB|24|9000|ESP|2030||2024-01-18
Justin de Haas|CB|26|7000|NED|2030||2026-07-01
José Copete|CB|27|5000|ESP|2029||<2025-07-28
Mouctar Diakhaby|CB|29|1500|GUI|2027|FRA|2018-07-01
Iker Córdoba|CB|20|1000|ESP|2028||2025-07-01
José Gayà|LB|31|4000|ESP|2027||2014-07-01
Jesús Vázquez|LB|23|4000|ESP|2028||2022-01-01
Arnau Martínez|RB|23|10000|ESP|2031||<2026-08-26
Pablo Maffeo|RB|29|2500|ARG|2027|ESP|2026-08-20
Dimitri Foulquier|RB|33|500|GLP|2027|FRA|<2021-08-30
Pepelu|DM|28|8000|ESP|2028||<2023-07-08
Guido Rodríguez|DM|32|3500|ARG|2028|ITA|2026-01-26
Aliou Dieng|DM|29|3000|MLI|2028||2026-07-07
Javi Guerra|CM|23|25000|ESP|2029||2023-07-01
Filip Ugrinic|CM|27|6000|SUI|2029||2025-08-08
Aaron Mayol|CM|18|5000|ESP|2029||2026-07-01
Harvey Elliott|AM|23|18000|ENG|2027||2026-09-01
Ryunosuke Sato|LW|20|4000|JPN|2031||2026-07-07
Arnaut Danjuma|LW|29|3000|NED|2028|NGA|<2025-08-10
Sergi Canós|LW|29|600|ESP|2027||<2023-08-20
Diego López|RW|24|9000|ESP|2029||2023-07-01
David Otorbi|RW|19|3500|ESP|2028|NGA|2026-07-01
Luis Rioja|RW|33|1800|ESP|2027||<2024-08-22
Dani Raba|ST|30|1000|ESP|2027||<2025-07-01
Hugo Duro|ST|26|11000|ESP|2028||<2022-07-01
Umar Sadiq|ST|29|3500|NGA|2028||<2026-01-08` },
    { id: 'real_sociedad', name: 'Реал Сосьедад', city: 'Сан-Себастьян', stadium: 'Estadio Municipal de Anoeta', cap: 40000, colors: ['#0067b1', '#ffffff'], players: `
Álex Remiro|GK|31|9000|ESP|2027||<2019-07-01
Unai Marrero|GK|25|1000|ESP|2030||<2023-07-01
Jon Martín|CB|20|25000|ESP|2032||<2024-07-01
Mamadou Sarr|CB|21|22000|SEN|2027|FRA|2026-08-28
Igor Zubeldia|CB|29|6000|ESP|2029||<2017-07-01
Jon Pacheco|CB|25|5000|ESP|2030||<2022-07-01
Luken Beitia|CB|22|2000|ESP|2030||<2026-07-01
Sergio Gómez|LB|26|15000|ESP|2030||2024-07-12
Aihen Muñoz|LB|29|2500|ESP|2027||<2019-07-01
Jon Aramburu|RB|24|15000|VEN|2030|ESP|<2024-07-01
Héctor Fort|RB|20|15000|ESP|2031||<2026-08-29
Álvaro Odriozola|RB|30|800|ESP|2029||<2023-09-01
Jon Gorrotxategi|DM|24|25000|ESP|2030||<2024-07-01
Luka Sucic|CM|24|15000|CRO|2029||2024-08-02
Beñat Turrientes|CM|24|10000|ESP|2030||<2022-08-07
Carlos Soler|CM|29|7000|ESP|2029||2025-09-01
Yangel Herrera|CM|28|6000|VEN|2030|ESP|<2025-09-01
Арсен Захарян|AM|23|7500|RUS|2029||2023-08-19
Pablo Marín|AM|23|7000|ESP|2029||<2024-07-01
Ander Barrenetxea|LW|24|18000|ESP|2030||<2019-07-01
Gonçalo Guedes|LW|29|6000|POR|2028||2025-08-04
Alex Marchal|LW|19|3000|ESP|2029||<2026-07-01
Takefusa Kubo|RW|25|20000|JPN|2029||<2022-07-19
Job Ochieng|RW|23|4000|KEN|2028||<2026-07-01
Mikel Oyarzabal|ST|29|25000|ESP|2028||<2016-01-01
Orri Óskarsson|ST|22|20000|ISL|2030||2024-08-30` },
    { id: 'espanyol', name: 'Эспаньол', city: 'Барселона', stadium: 'RCDE Stadium', cap: 40000, colors: ['#007fc8', '#ffffff'], players: `
Marko Dmitrovic|GK|34|700|SRB|2028||<2025-07-01
Ángel Fortuño|GK|25|300|ESP|2030||2024-07-01
Vanja Drkusic|CB|26|5000|SVN|2027||2026-08-14
Clemens Riedel|CB|23|4000|GER|2029||2025-08-25
Unai Núñez|CB|29|3500|ESP|2027||<2026-08-06
Leandro Cabrera|CB|35|900|URU|2027|ESP|<2020-01-20
Quilindschy Hartman|LB|24|12000|NED|2027|CUW|2026-07-07
Roger Hinojo|LB|21|3000|ESP|2030||2025-07-01
Omar El Hilali|RB|23|15000|MAR|2027|ESP|2023-01-01
Andoni Gorosabel|RB|30|3000|ESP|2027||<2026-09-01
Urko González de Zárate|DM|25|12000|ESP|2030||<2025-08-28
Gabriel Moscardo|DM|21|7000|BRA|2027||2026-07-08
Pol Lozano|CM|27|6000|ESP|2027||2020-07-01
Edu Expósito|CM|30|5000|ESP|2027||<2022-08-08
Rafel Bauzà|CM|21|1200|ESP|2028||2025-07-01
Javi Hernández|AM|22|6000|ESP|2028||2024-07-01
Álex Calatrava|AM|26|5000|ESP|2031||<2026-07-02
Bryan Zaragoza|LW|25|8000|ESP|2027||2026-08-27
Javi Puado|LW|28|7500|ESP|2030||2018-07-01
Pere Milla|LW|34|1000|ESP|2027||<2023-08-15
Tyrhys Dolan|RW|24|10000|ENG|2028||2025-07-25
Jofre Carreras|RW|25|3000|ESP|2029||2022-07-01
Roberto Fernández|ST|24|20000|ESP|2031||2025-07-01
Marcos Fernández|ST|23|2000|ESP|2028||<2025-07-01
Kike García|ST|36|500|ESP|2027||<2025-07-01` },
    { id: 'athletic', name: 'Атлетик Бильбао', city: 'Бильбао', stadium: 'San Mamés', cap: 53289, colors: ['#ee2523', '#ffffff'], players: `
Unai Simón|GK|29|22000|ESP|2029||2018-07-01
Álex Padilla|GK|23|3000|MEX|2029|ESP|2024-07-01
Dani Vivian|CB|27|20000|ESP|2032||2020-08-01
Aymeric Laporte|CB|32|8000|ESP|2028|FRA|2025-09-01
Aitor Paredes|CB|26|7500|ESP|2029||2022-07-01
Yeray Álvarez|CB|31|900|ESP|2028||2016-07-01
Unai Egiluz|CB|24|400|ESP|2028||2024-07-01
Johaneko Louis-Jean|LB|22|2000|FRA|2028||2026-07-01
Yuri Berchiche|LB|36|1000|ESP|2027|ALG|2018-07-02
Jesús Areso|RB|27|5000|ESP|2031||<2025-07-22
Hugo Rincón|RB|23|3500|ESP|2028||<2024-07-01
Mikel Jauregizar|CM|22|25000|ESP|2031||2024-07-01
Beñat Prados|CM|25|12000|ESP|2031||2022-07-01
Alejandro Rego|CM|23|5000|ESP|2030||2025-07-01
Beñat Gerenabarrena|CM|23|5000|ESP|2029||<2025-07-01
Iñigo Ruiz de Galarreta|CM|33|2000|ESP|2027||<2023-07-01
Oihan Sancet|AM|26|25000|ESP|2032||2020-08-04
Peio Canales|AM|21|10000|ESP|2029||<2025-07-01
Nico Williams|LW|24|40000|ESP|2035|GHA|2021-07-01
Álex Berenguer|LW|31|4000|ESP|2027||2020-10-02
Álvaro Djaló|LW|27|4000|GNB|2029|ESP|2024-07-01
Robert Navarro|RW|24|7000|ESP|2030||<2025-07-01
Nico Serrano|RW|23|1500|ESP|2028||2022-07-01
Iñaki Williams|ST|32|8000|GHA|2028|ESP|2015-07-01
Gorka Guruzeta|ST|30|5000|ESP|2028||2022-07-03
Maroan Sannadi|ST|25|3000|MAR|2029|ESP|<2025-02-01` },
    { id: 'sevilla', name: 'Севилья', city: 'Севилья', stadium: 'Estadio Ramón Sánchez Pizjuán', cap: 42714, colors: ['#ffffff', '#d4021d'], players: `
Odysseas Vlachodimos|GK|32|3000|GRE|2027|GER|2025-08-12
Fran González|GK|21|3000|ESP|2031||<2026-08-02
Kike Salas|CB|24|14000|ESP|2029||2023-01-01
Andrés Castrín|CB|23|8000|ESP|2027||2026-01-01
Arouna Sangante|CB|24|8000|SEN|2031|GNB|2026-07-01
Marcão|CB|30|2500|BRA|2028|ESP|2022-07-08
Fábio Cardoso|CB|32|1500|POR|2028||2025-09-01
Gabriel Suazo|LB|29|7000|CHI|2028||2025-07-12
Julio Díaz|LB|21|2000|ESP|2031||<2026-07-28
José Ángel Carmona|RB|24|10000|ESP|2028||2022-07-01
Juan Iglesias|RB|28|6000|ESP|2030||<2026-07-01
Lucien Agoumé|DM|24|18000|FRA|2028|CMR|2024-08-06
Youssouf Fofana|CM|27|15000|FRA|2027|MLI|2026-09-01
Гиорги Кочорашвили|CM|27|4500|GEO|2030||2026-08-21
Nico Guillén|CM|18|2000|ESP|2029||2029-06-30
Jon Guridi|CM|31|1800|ESP|2028||<2026-07-01
Manu Bueno|CM|22|1500|ESP|2027||2025-07-01
Rubén Vargas|LW|28|15000|SUI|2029|DOM|2025-01-10
Félix Correia|LW|25|10000|POR|2027|STP|2026-09-01
Chidera Ejuke|LW|28|4000|NGA|2027||2024-07-01
Alfon González|LW|27|3000|ESP|2028||<2025-07-01
Miguel Sierra|RW|22|7000|ESP|2029||2026-07-01
Peque Fernández|ST|24|3000|ESP|2028||<2024-07-11
Lucas Stassin|ST|21|15000|BEL|2027||2026-09-01
Robbie Ure|ST|22|7000|SCO|2031|UKR|2026-08-11
Isaac Romero|ST|26|5000|ESP|2028||2024-01-11` },
    { id: 'alaves', name: 'Алавес', city: 'Витория', stadium: 'Estadio de Mendizorroza', cap: 19840, colors: ['#0761af', '#ffffff'], players: `
Antonio Sivera|GK|30|6000|ESP|2030||2017-07-19
Adrián Rodríguez|GK|25|200|ARG|2028|ESP|2024-07-01
Ville Koski|CB|24|4000|FIN|2031||2026-07-01
Nicolás Valentini|CB|25|3000|ARG|2029|ITA|2026-08-07
Facundo Garcés|CB|27|500|MAL|2028|ARG|2025-01-01
Youssef Enríquez|LB|21|5000|MAR|2029|ESP|2025-07-16
Nahuel Tenaglia|RB|30|3000|ARG|2029|ITA|2023-08-20
Jonny Otto|RB|32|2200|ESP|2027||2025-07-02
Hugo Novoa|RB|23|800|ESP|2029||2024-07-22
Antonio Blanco|DM|26|10000|ESP|2027||<2023-07-25
Carlos Protesoni|DM|28|1000|URU|2028|ITA|2022-07-01
Pablo Ibáñez|CM|28|4000|ESP|2030||<2025-07-01
Ander Guevara|CM|29|2500|ESP|2027||<2023-07-09
Carles Aleñá|CM|28|2500|ESP|2029||<2025-07-24
Selu Diallo|CM|23|900|GUI|2028|ESP|2025-07-01
Mikel Rodriguez|CM|24|700|ESP|2031||<2026-07-16
Denis Suárez|AM|32|1000|ESP|2027||<2025-08-29
Abde Rebbach|LW|28|2500|ALG|2028|ESP|2022-07-01
Ángel Pérez|RW|24|5000|ESP|2030||2026-01-28
Miguel Rodríguez|RW|23|5000|ESP|2031||2026-07-27
Toni Martínez|ST|29|7500|ESP|2028||2024-08-27
Lucas Boyé|ST|30|5000|ARG|2029|ITA|<2025-08-22
Aitor Mañas|ST|23|600|ESP|2030||2026-05-01
Mariano Díaz|ST|33|500|DOM|2027|ESP|2025-08-07` },
    { id: 'elche', name: 'Эльче', city: 'Эльче', stadium: 'Estadio Manuel Martínez Valero', cap: 31388, colors: ['#ffffff', '#05642c'], players: `
Alejandro Iturbe|GK|23|1400|ESP|2029||2025-07-16
Matías Dituro|GK|39|100|ARG|2027|CHI|2024-01-08
Kevin Lomónaco|CB|24|5000|ARG|2030|ITA|2026-09-01
Víctor Chust|CB|26|2500|ESP|2029||<2026-07-01
Matia Barzic|CB|22|1000|CRO|2030|ESP|2024-07-01
Bambo Diaby|CB|28|800|ESP|2027|SEN|<2024-08-22
Pedro Bigas|CB|36|300|ESP|2027||<2021-07-07
Roy Revivo|LB|23|4500|ISR|2030||2026-09-01
Buba Sangaré|RB|19|5000|ESP|2031|MLI|2026-07-01
Rubén Sánchez|RB|25|1800|ESP|2029||<2026-09-01
Marc Aguado|DM|26|3500|ESP|2027||2025-02-03
Federico Redondo|DM|23|2500|ARG|2030|ESP|2025-08-14
Martim Neto|CM|23|4000|POR|2028||2025-07-30
Javi Morcillo|CM|20|2000|ESP|2030||2026-08-06
Gonzalo Villar|CM|28|1800|ESP|2029||2026-07-01
Facundo Buonanotte|AM|21|12000|ARG|2027|ITA|2026-08-07
Thomas Lemar|AM|30|1800|FRA|2027|GLP|<2026-09-01
Germán Valera|LW|24|6000|ESP|2027|LTU|<2025-07-03
Lucas Cepeda|LW|23|2500|CHI|2030||2026-01-26
Tete Morente|LW|29|1800|ESP|2028||2026-02-02
Yago Santiago|LW|23|1000|ESP|2027||2024-07-30
Grady Diangana|RW|28|2000|COD|2027|ENG|2025-08-30
Josan|RW|36|100|ESP|2027||<2018-01-01
Adam Boayar|ST|21|800|MAR|2027|ESP|2023-07-01
Ali Houary|ST|21|600|MAR|2028|ESP|2025-07-01
Ezequiel Ponce|ST|29|4000|ARG|2027|ESP|2026-08-14
Fer Niño|ST|26|4000|ESP|2030||<2026-07-29
Abiel Osorio|ST|24|1500|ARG|2029||2026-01-10` },
    { id: 'levante', name: 'Леванте', city: 'Валенсия', stadium: 'Estadio Ciudad de Valencia', cap: 25534, colors: ['#b4053f', '#004c9a'], players: `
Mathew Ryan|GK|34|1800|AUS|2027|SCO|2025-08-26
Pablo Campos|GK|24|1500|ESP|2027||2023-07-01
Axel Tape|CB|19|8000|FRA|2027|CIV|2026-08-30
Adrián Dela|CB|27|5000|ESP|2027||2023-07-01
Ifeanyi Ndukwe|CB|18|3000|AUT|2027||2026-08-22
Aïssa Mandi|CB|35|1000|ALG|2028|FRA|2026-07-16
Jorge Cabello|CB|22|900|ESP|2028||2024-07-01
Manu Sánchez|LB|26|6000|ESP|2027||<2025-07-25
Marc Santos|LB|15|500|ESP|2029||2026-07-01
Jeremy Toljan|RB|32|2000|GER|2027|USA|2025-07-08
Nacho Pérez|RB|18|1500|ESP|2028||2026-07-01
Oriol Rey|DM|28|1800|ESP|2027||2023-07-01
Enzo Bardeli|CM|25|6000|FRA|2029||2026-07-01
Hugo Sotelo|CM|22|5000|ESP|2027||<2026-07-20
Jon Ander Olasagasti|CM|26|2500|ESP|2028||<2025-07-16
Dani Requena|CM|22|1500|ESP|2027||<2026-07-17
Thiago Fernández|LW|22|4500|ARG|2027||<2026-08-11
Roger Brugué|LW|29|3000|ESP|2028||2021-07-01
Paco Cortés|LW|19|2000|ESP|2028||2025-07-01
Víctor García|RW|29|1500|ESP|2027||<2025-07-03
Petar Ratkov|ST|23|9000|SRB|2027|CRO|2026-09-01
Karl Etta Eyong|ST|23|9000|CMR|2029||<2025-09-01
Iván Romero|ST|25|8000|ESP|2028||<2023-08-12
Yanis Musuayi|ST|19|3000|BEL|2030||2026-08-02` },
    { id: 'osasuna', name: 'Осасуна', city: 'Памплона', stadium: 'Estadio El Sadar', cap: 23576, colors: ['#d91a21', '#0a346f'], players: `
Sergio Herrera|GK|33|2800|ESP|2028||2017-07-12
Aitor Fernández|GK|35|400|ESP|2027||<2022-07-02
Enzo Boyomo|CB|25|15000|CMR|2029|FRA|<2024-08-29
Jorge Herrando|CB|25|3500|ESP|2030||2023-07-01
Rockson Yeboah|CB|22|3000|GHA|2031||2026-08-12
Alejandro Catena|CB|31|2600|ESP|2028||<2023-07-01
Unai Santos|CB|20|800|ESP|2028||2026-07-01
Abel Bretones|LB|26|3500|ESP|2029||<2024-07-05
Diego Rico|LB|33|800|ESP|2027||<2026-08-12
Valentin Rosier|RB|30|3000|FRA|2028|GLP|<2025-07-01
Iñigo Arguibide|RB|21|2500|ESP|2030||2026-01-01
Lucas Torró|DM|32|2500|ESP|2027||2020-08-04
Iker Muñoz|DM|24|2000|ESP|2030||2023-07-01
Jon Moncayola|CM|28|7000|ESP|2031||2019-07-01
Asier Osambela|CM|21|2000|ESP|2029||2025-07-01
Mauro Echegoyen|CM|21|200|ESP|2028||2026-07-01
Aimar Oroz|AM|24|7500|ESP|2029||2022-07-01
Moi Gómez|AM|32|1500|ESP|2027||<2022-07-28
Raúl Moro|LW|23|3500|ESP|2031||2026-01-22
Romain Del Castillo|RW|30|5000|FRA|2028|ESP|2026-09-01
Jonathan Dubasin|RW|26|4000|ESP|2030|BEL|<2026-07-27
Rubén García|RW|33|1600|ESP|2027||<2019-07-01
Kike Barja|RW|29|1500|ESP|2028||2018-01-01
Raúl García|ST|25|3000|ESP|2031||<2023-08-10
Ante Budimir|ST|35|2800|CRO|2027||<2021-07-01` },
    { id: 'racing', name: 'Расинг', city: 'Сантандер', stadium: 'Campos de Sport de El Sardinero', cap: 22514, colors: ['#ffffff', '#00a650'], players: `
Julen Agirrezabala|GK|25|6000|ESP|2031||<2026-08-10
Simon Eriksson|GK|20|2000|SWE|2030||2026-01-19
Jeanuël Belocian|CB|21|12000|FRA|2027|GLP|2026-09-01
Facundo González|CB|23|3000|URU|2029|ITA|2026-07-01
Pedro Felipe|CB|22|1500|BRA|2030||2026-08-04
Manu Hernando|CB|28|1400|ESP|2028||2024-02-01
Pablo Ramón|CB|25|1400|ESP|2029||<2026-08-05
Jorge Salinas|LB|19|10000|ESP|2029||2025-07-01
Aarón Martín|LB|29|5000|ESP|2027||2026-09-01
Álvaro Mantilla|RB|26|1200|ESP|2028||2020-09-21
Matteo Prati|DM|22|5500|ITA|2027||2026-08-26
Maguette Gueye|DM|23|2500|SEN|2029||2024-08-22
Iván Martín|CM|27|3000|ESP|2030||<2026-08-20
Íñigo Sainz-Maza|CM|28|1000|ESP|2028||2020-08-20
André Almeida|AM|26|5000|POR|2027||<2026-09-01
Sergio Canales|AM|35|3000|ESP|2028||2026-07-01
Iñigo Vicente|LW|28|7000|ESP|2030||<2022-07-14
Гиорги Гулиашвили|LW|25|3500|GEO|2029||2026-01-09
Andrés Martín|RW|27|8000|ESP|2028||<2024-08-02
Pablo García|RW|20|8000|ESP|2030||<2026-09-01
Iker Luque|RW|21|2000|ESP|2030||2026-08-31
Yassir Zabiri|ST|21|20000|MAR|2027||2026-07-29
Asier Villalibre|ST|29|1500|ESP|2029||<2026-07-01
Juan Carlos Arana|ST|26|1000|ESP|2028||<2024-07-01` },
    { id: 'deportivo', name: 'Депортиво', city: 'Ла-Корунья', stadium: 'Estadio Abanca-Riazor', cap: 32490, colors: ['#0067b2', '#ffffff'], players: `
Leo Román|GK|26|9000|ESP|2031||<2026-07-03
Álvaro Ferllo|GK|28|1500|ESP|2027||<2026-01-01
Germán Parreño|GK|33|200|ESP|2028||2023-07-01
José María Giménez|CB|31|6000|URU|2027|ESP|<2026-09-01
Bright Ede|CB|19|6000|POL|2031||2026-07-07
Lucas Noubi|CB|21|3000|BEL|2029|CMR|2025-07-01
Dani Barcia|CB|23|1200|ESP|2028||2023-07-01
Arnau Comas|CB|26|500|ESP|2028||2025-07-04
Giacomo Quagliata|LB|26|4000|ITA|2028||2025-07-30
Angeliño|LB|29|4000|ESP|2027||2026-08-05
Adrià Altimira|RB|25|1800|ESP|2029||<2026-01-02
Miguel Loureiro|RB|29|1200|ESP|2028||2025-08-01
Ximo Navarro|RB|36|100|ESP|2027||2023-08-01
Marc Casadó|DM|23|15000|ESP|2027||<2026-09-01
Lorenzo Amatucci|DM|22|10000|ITA|2028||2026-07-09
Riki Rodríguez|CM|29|1500|ESP|2029||<2026-02-02
Diego Villares|CM|30|1000|ESP|2028||2021-02-01
Noé Carrillo|CM|19|1000|ESP|2029||2026-05-01
Jonathan Asp Jensen|AM|20|6000|DEN|2031||2026-07-13
Mario Soriano|AM|24|6000|ESP|2028||2022-07-19
Yeremay Hernández|LW|23|25000|ESP|2030||2022-07-01
David Mella|RW|21|5000|ESP|2029||2024-02-01
Adama Traoré|RW|30|4000|ESP|2028|MLI|2026-08-26
Luismi Cruz|RW|25|2000|ESP|2029||<2025-07-11
Bil Nsongo|ST|22|5000|CMR|2030||2026-01-01
Pierre-Emerick Aubameyang|ST|37|2500|GAB|2028|FRA|2026-07-17
Zakaria Eddahchouri|ST|26|2500|NED|2028|MAR|2025-01-30` },
    { id: 'malaga', name: 'Малага', city: 'Малага', stadium: 'Estadio La Rosaleda', cap: 30389, colors: ['#0081c6', '#ffffff'], players: `
Alfonso Herrero|GK|32|400|ESP|2028||2023-07-01
Carlos López|GK|21|100|ESP|2029||2023-07-01
Fernando Calero|CB|31|2000|ESP|2027||<2026-07-14
Diego Murillo|CB|25|1500|ESP|2029||2023-08-01
Juan Berrocal|CB|27|1500|ESP|2027||<2026-09-01
Ángel Recio|CB|23|1000|ESP|2029||2025-07-01
Einar Galilea|CB|32|350|ESP|2027||2023-07-01
Álex Pastor|CB|27|300|ESP|2028||<2024-07-11
Adam Aznou|LB|20|6000|MAR|2027|ESP|2026-08-31
José Salinas|LB|26|2000|ESP|2027||<2026-07-27
Rafita Garrido|RB|21|1500|ESP|2029||2025-10-01
Carlos Puga|RB|25|1000|ESP|2029||2024-02-01
Jens Cajuste|DM|27|7000|SWE|2027|USA|2026-09-01
Izan Merino|CM|20|5000|ESP|2028||2024-07-01
Pablo Martínez|CM|28|3000|ESP|2027||<2026-08-21
Carlos Dotor|CM|25|1200|ESP|2027||<2025-07-08
Ramón Enríquez|CM|25|400|ESP|2027||2020-08-01
Dani Lorenzo|AM|23|2500|ESP|2029||2022-07-01
Rafa Rodríguez|AM|23|1000|ESP|2028||2025-07-01
Aarón Ochoa|AM|19|800|IRL|2029|ESP|2024-07-01
Joaquín Muñoz|LW|27|2000|ESP|2027||2025-07-01
Juan Cruz|LW|26|1800|ESP|2027|ARG|<2026-07-19
Julen Lobete|LW|26|1200|ESP|2027||<2024-08-02
David Larrubia|RW|24|6000|ESP|2028||2022-07-01
Haitam Abaida|RW|24|200|MAR|2027|ESP|2023-07-01
Chupe|ST|22|10000|ESP|2029||2025-01-01
Adrián Niño|ST|22|2000|ESP|2029||2025-07-15
Eneko Jauregi|ST|30|700|ESP|2027||2025-07-14` },
  ],
});
