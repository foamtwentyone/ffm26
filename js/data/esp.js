// Ла Лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'esp', name: 'Ла Лига', short: 'Ла Лига', country: 'ESP', tier: 1, weekday: 6,
  autumn: { from: '08-15', rounds: 19 }, spring: { from: '01-09', rounds: 19 },
  ticket: 35, prize: [40000, 38300, 36650, 34950, 33250, 31600, 29900, 28200, 26550, 24850, 23150, 21450, 19800, 18100, 16400, 14750, 13050, 11350, 9700, 8000],
  teams: [
    { id: 'barcelona', name: 'Барселона', city: 'Барселона', stadium: 'Spotify Camp Nou', cap: 99787, colors: ['#a50044', '#004d98'], players: `
Joan García|GK|25|45000|ESP|2031
Dominik Livakovic|GK|31|4000|CRO|2030
Wojciech Szczęsny|GK|36|800|POL|2027
Pau Cubarsí|CB|19|100000|ESP|2029
Eric García|CB|25|45000|ESP|2031
Gerard Martín|CB|24|40000|ESP|2028
Andreas Christensen|CB|30|8000|DEN|2028
Alejandro Balde|LB|23|40000|ESP|2028
Jules Koundé|RB|27|55000|FRA|2030
Xavi Espart|RB|19|25000|ESP|2030
João Cancelo|RB|32|7000|POR|2029
Rodri|DM|30|60000|ESP|2030
Pedri|CM|23|150000|ESP|2030
Marc Bernal|CM|19|40000|ESP|2029
Gavi|CM|22|25000|ESP|2030
Frenkie de Jong|CM|29|25000|NED|2029
Brian Fariñas|CM|20|5000|ESP|2028
Fermín López|AM|23|110000|ESP|2031
Dani Olmo|AM|28|60000|ESP|2030
Anthony Gordon|LW|25|80000|ENG|2031
Jesse Bisiwu|LW|18|8000|BEL|2031
Lamine Yamal|RW|19|220000|ESP|2031
Karim Adeyemi|RW|24|40000|GER|2031
Roony Bardghji|RW|20|8000|SWE|2029
Raphinha|ST|29|70000|BRA|2028
Gabriel Jesus|ST|29|17000|BRA|2029
Hamza Abdelkarim|ST|18|8000|EGY|2030` },
    { id: 'real_madrid', name: 'Реал Мадрид', city: 'Мадрид', stadium: 'Estadio Bernabéu', cap: 83186, colors: ['#ffffff', '#febe10'], players: `
Thibaut Courtois|GK|34|15000|BEL|2027
Андрий Лунин|GK|27|12000|UKR|2030
Dean Huijsen|CB|21|60000|ESP|2030
Ibrahima Konaté|CB|27|45000|FRA|2030
Raúl Asencio|CB|23|18000|ESP|2031
Éder Militão|CB|28|18000|BRA|2028
Antonio Rüdiger|CB|33|6000|GER|2027
Marc Cucurella|LB|28|60000|ESP|2032
Álvaro Carreras|LB|23|50000|ESP|2031
Ferland Mendy|LB|31|4000|FRA|2028
Trent Alexander-Arnold|RB|28|60000|ENG|2031
Denzel Dumfries|RB|30|25000|NED|2030
Aurélien Tchouaméni|DM|26|70000|FRA|2028
Federico Valverde|CM|28|90000|URU|2029
Eduardo Camavinga|CM|23|50000|FRA|2029
Thiago Pitarch|CM|19|20000|ESP|2030
Jorge Cestero|CM|20|7500|ESP|2028
Jude Bellingham|AM|23|160000|ENG|2029
Arda Güler|AM|21|100000|TUR|2029
Bernardo Silva|AM|32|22000|POR|2028
Vinicius Junior|LW|26|130000|BRA|2032
Yan Diomande|RW|19|120000|CIV|2033
Rodrygo|RW|25|45000|BRA|2028
Brahim Díaz|RW|27|35000|MAR|2027
Kylian Mbappé|ST|27|200000|FRA|2029
Endrick|ST|20|40000|BRA|2030
Carlos Espí|ST|21|40000|ESP|2031` },
    { id: 'villarreal', name: 'Вильярреал', city: 'Вильярреал', stadium: 'Estadio de la Cerámica', cap: 24500, colors: ['#ffe667', '#005187'], players: `
Luiz Júnior|GK|25|12000|BRA|2030
Péter Gulácsi|GK|36|1000|HUN|2028
Rubén Gómez|GK|24|400|ESP|2027
Renato Veiga|CB|23|30000|POR|2032
Logan Costa|CB|25|15000|CPV|2030
Pau Navarro|CB|21|15000|ESP|2031
Juan Foyth|CB|28|8000|ARG|2029
Carlos Romero|LB|24|25000|ESP|2031
Sergi Cardona|LB|27|9000|ESP|2027
Santiago Mouriño|RB|24|20000|URU|2030
Alex Freeman|RB|22|15000|USA|2032
Pape Gueye|CM|27|40000|SEN|2028
Carlos Macià|CM|18|15000|ESP|2031
Nathan Saliba|CM|22|15000|CAN|2031
Santi Comesaña|CM|30|8000|ESP|2028
Alassane Diatta|CM|21|5000|SEN|2030
Alberto Moleiro|LW|23|50000|ESP|2030
Nízar El Jmili|LW|21|150|ESP|2030
Ilias Akhomach|RW|22|12000|MAR|2028
Tajon Buchanan|RW|27|12000|CAN|2030
Nicolas Pépé|RW|31|6000|CIV|2028
Георгес Микаутадзе|ST|25|40000|GEO|2031
Tani Oluwaseyi|ST|26|7000|CAN|2030
Ayoze Pérez|ST|33|5000|ESP|2028
Gerard Moreno|ST|34|2500|ESP|2027` },
    { id: 'atletico', name: 'Атлетико Мадрид', city: 'Мадрид', stadium: 'Riyadh Air Metropolitano', cap: 70460, colors: ['#cb3524', '#ffffff'], players: `
Jan Oblak|GK|33|15000|SVN|2028
Juan Musso|GK|32|3000|ARG|2028
Salvi Esquivel|GK|21|1000|ESP|2029
Marc Pubill|CB|23|50000|ESP|2030
Cristian Romero|CB|28|40000|ARG|2031
Dávid Hancko|CB|28|35000|SVK|2030
Robin Le Normand|CB|29|18000|ESP|2029
Jorge Domínguez|CB|16|8000|ESP|2028
Alejandro Grimaldo|LB|31|20000|ESP|2030
Dani Martínez|LB|22|2500|ESP|2030
Marcos Llorente|RB|31|20000|ESP|2027
Morten Hjulmand|DM|27|45000|DEN|2031
Pablo Barrios|CM|23|70000|ESP|2030
Rodrigo Mendoza|CM|21|20000|ESP|2031
Johnny Cardoso|CM|25|20000|USA|2030
Obed Vargas|CM|21|10000|MEX|2030
Koke|CM|34|5000|ESP|2027
Kang-in Lee|AM|25|35000|KOR|2031
Álex Baena|LW|25|45000|ESP|2030
Ademola Lookman|LW|29|40000|NGA|2030
Arnau Ortiz|LW|24|6000|ESP|2028
Giuliano Simeone|RW|23|40000|ARG|2030
Julián Alvarez|ST|26|110000|ARG|2030
Jonathan David|ST|26|30000|CAN|2027
Alexander Sørloth|ST|30|15000|NOR|2028` },
    { id: 'betis', name: 'Бетис', city: 'Севилья', stadium: 'Benito Villamarín', cap: 60721, colors: ['#00954c', '#ffffff'], players: `
Álvaro Valles|GK|29|10000|ESP|2030
Diego Conde|GK|27|3000|ESP|2027
Natan|CB|25|30000|BRA|2030
Valentín Gómez|CB|23|12000|ARG|2030
Diego Llorente|CB|33|2500|ESP|2028
Marc Bartra|CB|35|900|ESP|2027
Fran García|LB|27|7500|ESP|2030
Junior Firpo|LB|30|3500|DOM|2028
Ángel Ortiz|RB|22|6000|ESP|2029
Héctor Bellerín|RB|31|2400|ESP|2028
Facundo Bernal|DM|23|10000|URU|2031
Marc Roca|DM|29|4000|ESP|2029
Nelson Deossa|CM|26|9000|COL|2030
Pablo Fornals|CM|30|8000|ESP|2029
Dani Ceballos|CM|30|6000|ESP|2029
Álvaro Fidalgo|CM|29|5000|MEX|2030
Giovani Lo Celso|AM|30|7000|ARG|2028
Isco|AM|34|3500|ESP|2028
Iker Losada|AM|25|1800|ESP|2029
Abde Ezzalzouli|LW|24|40000|MAR|2029
Rodrigo Riquelme|LW|26|4000|ESP|2030
Antony|RW|26|40000|BRA|2030
Aitor Ruibal|RW|30|4000|ESP|2028
Troy Parrott|ST|24|20000|IRL|2031
Cucho Hernández|ST|27|18000|COL|2030` },
    { id: 'celta', name: 'Сельта', city: 'Виго', stadium: 'Abanca-Balaídos', cap: 24870, colors: ['#8ac3ee', '#ffffff'], players: `
Ionuț Radu|GK|29|10000|ROU|2029
Altay Bayındır|GK|28|3800|TUR|2027
Iván Villar|GK|29|900|ESP|2027
Javi Rodríguez|CB|23|18000|ESP|2030
Yoel Lago|CB|22|7500|ESP|2029
Carl Starfelt|CB|31|4500|SWE|2027
Abdoulaye Faye|CB|22|4500|SEN|2027
Sebastián Cáceres|CB|27|4500|URU|2030
Marcos Alonso|CB|35|1200|ESP|2028
Javi Galán|LB|31|1800|ESP|2028
Sergio Carreira|RB|26|12000|ESP|2029
Javi Rueda|RB|24|6000|ESP|2029
Álvaro Núñez|RB|26|4000|ESP|2030
Ilaix Moriba|CM|23|15000|GUI|2029
Miguel Román|CM|23|15000|ESP|2028
Aleix Febas|CM|30|5000|ESP|2029
Hugo Burcio|CM|19|2000|ESP|2028
Williot Swedberg|LW|22|20000|SWE|2029
Hugo Álvarez|LW|23|8000|ESP|2028
Couhaib Driouech|LW|24|7500|MAR|2030
Ferran Jutglà|RW|27|10000|ESP|2029
Jones El-Abdellaoui|RW|20|8000|MAR|2029
Hugo González|RW|23|3000|ESP|2028
Pablo Durán|ST|25|4000|ESP|2028
Borja Iglesias|ST|33|2500|ESP|2027
Iago Aspas|ST|39|1600|ESP|2027` },
    { id: 'getafe', name: 'Хетафе', city: 'Хетафе', stadium: 'Estadio Coliseum', cap: 17393, colors: ['#005999', '#ffffff'], players: `
David Soria|GK|33|2800|ESP|2030
Jiri Letacek|GK|27|2000|CZE|2028
Zaid Romero|CB|26|5000|ARG|2030
Abdel Abqar|CB|27|3500|MAR|2028
Sebastián Boselli|CB|22|1500|URU|2030
Dakonam Djené|CB|34|1400|TOG|2027
Саба Сазонов|CB|24|800|GEO|2027
Jean Ives Valou|CB|20|600|CIV|2027
Davinchi|LB|19|2000|ESP|2028
Johan Mojica|LB|34|1500|COL|2027
Andrés García|RB|23|7000|ESP|2027
Daniel Carvajal|RB|34|3500|ESP|2027
Kiko Femenía|RB|35|500|ESP|2027
Mario Martín|DM|22|10000|ESP|2030
Orel Mangala|DM|28|9000|BEL|2027
Nemanja Gudelj|DM|34|2000|SRB|2027
Ramón Terrats|CM|26|3000|ESP|2029
Francho Serrano|CM|25|3000|ESP|2029
Alberto Risco|AM|21|800|ESP|2027
Juanmi|LW|33|1000|ESP|2027
Martín Satriano|ST|25|10000|URU|2030
Christantus Uche|ST|23|9000|NGA|2028
Iván Azón|ST|23|7500|ESP|2027
Enes Ünal|ST|29|7000|TUR|2029
Borja Mayoral|ST|29|4500|ESP|2027` },
    { id: 'rayo', name: 'Райо Вальекано', city: 'Мадрид', stadium: 'Estadio de Vallecas', cap: 15500, colors: ['#ffffff', '#e53027'], players: `
Augusto Batalla|GK|30|6000|ARG|2030
Emil Audero|GK|29|2800|IDN|2027
Dani Cárdenas|GK|29|1800|ESP|2027
Mujaid Sadick|CB|26|5000|ESP|2027
Marash Kumbulla|CB|26|3000|ALB|2027
Luiz Felipe|CB|29|2000|ITA|2027
Jozhua Vertrouwd|CB|22|2000|NED|2030
Florian Lejeune|CB|35|1800|FRA|2028
Pelayo Fernández|CB|23|500|ESP|2028
Adrià Pedrosa|LB|28|2800|ESP|2027
Andrei Rațiu|RB|28|24000|ROU|2030
Iván Balliu|RB|34|1000|ALB|2027
Pedro Díaz|CM|28|3000|ESP|2028
Unai López|CM|30|2500|ESP|2029
Óscar Valentín|CM|32|2000|ESP|2027
Pathé Ciss|CM|32|1800|SEN|2027
Gnangoro Bouare|CM|22|1000|ESP|2031
Isi Palazón|AM|31|2800|ESP|2028
Randy Nteka|AM|28|1000|ANG|2028
Rayane Belaid|AM|21|600|ESP|2031
Álvaro García|LW|33|1500|ESP|2028
Jorge de Frutos|RW|29|12000|ESP|2028
Гиорги Цитаишвили|RW|25|3000|GEO|2029
Fran Pérez|RW|24|2500|ESP|2029
Sergio Camello|ST|25|10000|ESP|2027
Alemão|ST|28|4000|BRA|2030
Raúl de Tomás|ST|32|400|ESP|2027` },
    { id: 'valencia', name: 'Валенсия', city: 'Валенсия', stadium: 'Estadio de Mestalla', cap: 49430, colors: ['#ffffff', '#000000'], players: `
Kayne van Oevelen|GK|23|4000|NED|2027
Stole Dimitrievski|GK|32|2000|MKD|2028
Cristian Rivero|GK|28|100|ESP|2027
César Tárrega|CB|24|9000|ESP|2030
Justin de Haas|CB|26|7000|NED|2030
José Copete|CB|27|5000|ESP|2029
Mouctar Diakhaby|CB|29|1500|GUI|2027
Iker Córdoba|CB|20|1000|ESP|2028
José Gayà|LB|31|4000|ESP|2027
Jesús Vázquez|LB|23|4000|ESP|2028
Arnau Martínez|RB|23|10000|ESP|2031
Pablo Maffeo|RB|29|2500|ARG|2027
Dimitri Foulquier|RB|33|500|GLP|2027
Pepelu|DM|28|8000|ESP|2028
Guido Rodríguez|DM|32|3500|ARG|2028
Aliou Dieng|DM|29|3000|MLI|2028
Javi Guerra|CM|23|25000|ESP|2029
Filip Ugrinic|CM|27|6000|SUI|2029
Aaron Mayol|CM|18|5000|ESP|2029
Harvey Elliott|AM|23|18000|ENG|2027
Ryunosuke Sato|LW|20|4000|JPN|2031
Arnaut Danjuma|LW|29|3000|NED|2028
Sergi Canós|LW|29|600|ESP|2027
Diego López|RW|24|9000|ESP|2029
David Otorbi|RW|19|3500|ESP|2028
Luis Rioja|RW|33|1800|ESP|2027
Dani Raba|ST|30|1000|ESP|2027
Hugo Duro|ST|26|11000|ESP|2028
Umar Sadiq|ST|29|3500|NGA|2028` },
    { id: 'real_sociedad', name: 'Реал Сосьедад', city: 'Сан-Себастьян', stadium: 'Estadio Municipal de Anoeta', cap: 40000, colors: ['#0067b1', '#ffffff'], players: `
Álex Remiro|GK|31|9000|ESP|2027
Unai Marrero|GK|25|1000|ESP|2030
Jon Martín|CB|20|25000|ESP|2032
Mamadou Sarr|CB|21|22000|SEN|2027
Igor Zubeldia|CB|29|6000|ESP|2029
Jon Pacheco|CB|25|5000|ESP|2030
Luken Beitia|CB|22|2000|ESP|2030
Sergio Gómez|LB|26|15000|ESP|2030
Aihen Muñoz|LB|29|2500|ESP|2027
Jon Aramburu|RB|24|15000|VEN|2030
Héctor Fort|RB|20|15000|ESP|2031
Álvaro Odriozola|RB|30|800|ESP|2029
Jon Gorrotxategi|DM|24|25000|ESP|2030
Luka Sucic|CM|24|15000|CRO|2029
Beñat Turrientes|CM|24|10000|ESP|2030
Carlos Soler|CM|29|7000|ESP|2029
Yangel Herrera|CM|28|6000|VEN|2030
Арсен Захарян|AM|23|7500|RUS|2029
Pablo Marín|AM|23|7000|ESP|2029
Ander Barrenetxea|LW|24|18000|ESP|2030
Gonçalo Guedes|LW|29|6000|POR|2028
Alex Marchal|LW|19|3000|ESP|2029
Takefusa Kubo|RW|25|20000|JPN|2029
Job Ochieng|RW|23|4000|KEN|2028
Mikel Oyarzabal|ST|29|25000|ESP|2028
Orri Óskarsson|ST|22|20000|ISL|2030` },
    { id: 'espanyol', name: 'Эспаньол', city: 'Барселона', stadium: 'RCDE Stadium', cap: 40000, colors: ['#007fc8', '#ffffff'], players: `
Marko Dmitrovic|GK|34|700|SRB|2028
Ángel Fortuño|GK|25|300|ESP|2030
Vanja Drkusic|CB|26|5000|SVN|2027
Clemens Riedel|CB|23|4000|GER|2029
Unai Núñez|CB|29|3500|ESP|2027
Leandro Cabrera|CB|35|900|URU|2027
Quilindschy Hartman|LB|24|12000|NED|2027
Roger Hinojo|LB|21|3000|ESP|2030
Omar El Hilali|RB|23|15000|MAR|2027
Andoni Gorosabel|RB|30|3000|ESP|2027
Urko González de Zárate|DM|25|12000|ESP|2030
Gabriel Moscardo|DM|21|7000|BRA|2027
Pol Lozano|CM|27|6000|ESP|2027
Edu Expósito|CM|30|5000|ESP|2027
Rafel Bauzà|CM|21|1200|ESP|2028
Javi Hernández|AM|22|6000|ESP|2028
Álex Calatrava|AM|26|5000|ESP|2031
Bryan Zaragoza|LW|25|8000|ESP|2027
Javi Puado|LW|28|7500|ESP|2030
Pere Milla|LW|34|1000|ESP|2027
Tyrhys Dolan|RW|24|10000|ENG|2028
Jofre Carreras|RW|25|3000|ESP|2029
Roberto Fernández|ST|24|20000|ESP|2031
Marcos Fernández|ST|23|2000|ESP|2028
Kike García|ST|36|500|ESP|2027` },
    { id: 'athletic', name: 'Атлетик Бильбао', city: 'Бильбао', stadium: 'San Mamés', cap: 53289, colors: ['#ee2523', '#ffffff'], players: `
Unai Simón|GK|29|22000|ESP|2029
Álex Padilla|GK|23|3000|MEX|2029
Dani Vivian|CB|27|20000|ESP|2032
Aymeric Laporte|CB|32|8000|ESP|2028
Aitor Paredes|CB|26|7500|ESP|2029
Yeray Álvarez|CB|31|900|ESP|2028
Unai Egiluz|CB|24|400|ESP|2028
Johaneko Louis-Jean|LB|22|2000|FRA|2028
Yuri Berchiche|LB|36|1000|ESP|2027
Jesús Areso|RB|27|5000|ESP|2031
Hugo Rincón|RB|23|3500|ESP|2028
Mikel Jauregizar|CM|22|25000|ESP|2031
Beñat Prados|CM|25|12000|ESP|2031
Alejandro Rego|CM|23|5000|ESP|2030
Beñat Gerenabarrena|CM|23|5000|ESP|2029
Iñigo Ruiz de Galarreta|CM|33|2000|ESP|2027
Oihan Sancet|AM|26|25000|ESP|2032
Peio Canales|AM|21|10000|ESP|2029
Nico Williams|LW|24|40000|ESP|2035
Álex Berenguer|LW|31|4000|ESP|2027
Álvaro Djaló|LW|27|4000|GNB|2029
Robert Navarro|RW|24|7000|ESP|2030
Nico Serrano|RW|23|1500|ESP|2028
Iñaki Williams|ST|32|8000|GHA|2028
Gorka Guruzeta|ST|30|5000|ESP|2028
Maroan Sannadi|ST|25|3000|MAR|2029` },
    { id: 'sevilla', name: 'Севилья', city: 'Севилья', stadium: 'Estadio Ramón Sánchez Pizjuán', cap: 42714, colors: ['#ffffff', '#d4021d'], players: `
Odysseas Vlachodimos|GK|32|3000|GRE|2027
Fran González|GK|21|3000|ESP|2031
Kike Salas|CB|24|14000|ESP|2029
Andrés Castrín|CB|23|8000|ESP|2027
Arouna Sangante|CB|24|8000|SEN|2031
Marcão|CB|30|2500|BRA|2028
Fábio Cardoso|CB|32|1500|POR|2028
Gabriel Suazo|LB|29|7000|CHI|2028
Julio Díaz|LB|21|2000|ESP|2031
José Ángel Carmona|RB|24|10000|ESP|2028
Juan Iglesias|RB|28|6000|ESP|2030
Lucien Agoumé|DM|24|18000|FRA|2028
Youssouf Fofana|CM|27|15000|FRA|2027
Гиорги Кочорашвили|CM|27|4500|GEO|2030
Nico Guillén|CM|18|2000|ESP|2029
Jon Guridi|CM|31|1800|ESP|2028
Manu Bueno|CM|22|1500|ESP|2027
Rubén Vargas|LW|28|15000|SUI|2029
Félix Correia|LW|25|10000|POR|2027
Chidera Ejuke|LW|28|4000|NGA|2027
Alfon González|LW|27|3000|ESP|2028
Miguel Sierra|RW|22|7000|ESP|2029
Peque Fernández|ST|24|3000|ESP|2028
Lucas Stassin|ST|21|15000|BEL|2027
Robbie Ure|ST|22|7000|SCO|2031
Isaac Romero|ST|26|5000|ESP|2028` },
    { id: 'alaves', name: 'Алавес', city: 'Витория', stadium: 'Estadio de Mendizorroza', cap: 19840, colors: ['#0761af', '#ffffff'], players: `
Antonio Sivera|GK|30|6000|ESP|2030
Adrián Rodríguez|GK|25|200|ARG|2028
Ville Koski|CB|24|4000|FIN|2031
Nicolás Valentini|CB|25|3000|ARG|2029
Facundo Garcés|CB|27|500|MAL|2028
Youssef Enríquez|LB|21|5000|MAR|2029
Nahuel Tenaglia|RB|30|3000|ARG|2029
Jonny Otto|RB|32|2200|ESP|2027
Hugo Novoa|RB|23|800|ESP|2029
Antonio Blanco|DM|26|10000|ESP|2027
Carlos Protesoni|DM|28|1000|URU|2028
Pablo Ibáñez|CM|28|4000|ESP|2030
Ander Guevara|CM|29|2500|ESP|2027
Carles Aleñá|CM|28|2500|ESP|2029
Selu Diallo|CM|23|900|GUI|2028
Mikel Rodriguez|CM|24|700|ESP|2031
Denis Suárez|AM|32|1000|ESP|2027
Abde Rebbach|LW|28|2500|ALG|2028
Ángel Pérez|RW|24|5000|ESP|2030
Miguel Rodríguez|RW|23|5000|ESP|2031
Toni Martínez|ST|29|7500|ESP|2028
Lucas Boyé|ST|30|5000|ARG|2029
Aitor Mañas|ST|23|600|ESP|2030
Mariano Díaz|ST|33|500|DOM|2027` },
    { id: 'elche', name: 'Эльче', city: 'Эльче', stadium: 'Estadio Manuel Martínez Valero', cap: 31388, colors: ['#ffffff', '#05642c'], players: `
Alejandro Iturbe|GK|23|1400|ESP|2029
Matías Dituro|GK|39|100|ARG|2027
Kevin Lomónaco|CB|24|5000|ARG|2030
Víctor Chust|CB|26|2500|ESP|2029
Matia Barzic|CB|22|1000|CRO|2030
Bambo Diaby|CB|28|800|ESP|2027
Pedro Bigas|CB|36|300|ESP|2027
Roy Revivo|LB|23|4500|ISR|2030
Buba Sangaré|RB|19|5000|ESP|2031
Rubén Sánchez|RB|25|1800|ESP|2029
Marc Aguado|DM|26|3500|ESP|2027
Federico Redondo|DM|23|2500|ARG|2030
Martim Neto|CM|23|4000|POR|2028
Javi Morcillo|CM|20|2000|ESP|2030
Gonzalo Villar|CM|28|1800|ESP|2029
Facundo Buonanotte|AM|21|12000|ARG|2027
Thomas Lemar|AM|30|1800|FRA|2027
Germán Valera|LW|24|6000|ESP|2027
Lucas Cepeda|LW|23|2500|CHI|2030
Tete Morente|LW|29|1800|ESP|2028
Yago Santiago|LW|23|1000|ESP|2027
Grady Diangana|RW|28|2000|COD|2027
Josan|RW|36|100|ESP|2027
Adam Boayar|ST|21|800|MAR|2027
Ali Houary|ST|21|600|MAR|2028
Ezequiel Ponce|ST|29|4000|ARG|2027
Fer Niño|ST|26|4000|ESP|2030
Abiel Osorio|ST|24|1500|ARG|2029` },
    { id: 'levante', name: 'Леванте', city: 'Валенсия', stadium: 'Estadio Ciudad de Valencia', cap: 25534, colors: ['#b4053f', '#004c9a'], players: `
Mathew Ryan|GK|34|1800|AUS|2027
Pablo Campos|GK|24|1500|ESP|2027
Axel Tape|CB|19|8000|FRA|2027
Adrián Dela|CB|27|5000|ESP|2027
Ifeanyi Ndukwe|CB|18|3000|AUT|2027
Aïssa Mandi|CB|35|1000|ALG|2028
Jorge Cabello|CB|22|900|ESP|2028
Manu Sánchez|LB|26|6000|ESP|2027
Marc Santos|LB|15|500|ESP|2029
Jeremy Toljan|RB|32|2000|GER|2027
Nacho Pérez|RB|18|1500|ESP|2028
Oriol Rey|DM|28|1800|ESP|2027
Enzo Bardeli|CM|25|6000|FRA|2029
Hugo Sotelo|CM|22|5000|ESP|2027
Jon Ander Olasagasti|CM|26|2500|ESP|2028
Dani Requena|CM|22|1500|ESP|2027
Thiago Fernández|LW|22|4500|ARG|2027
Roger Brugué|LW|29|3000|ESP|2028
Paco Cortés|LW|19|2000|ESP|2028
Víctor García|RW|29|1500|ESP|2027
Petar Ratkov|ST|23|9000|SRB|2027
Karl Etta Eyong|ST|23|9000|CMR|2029
Iván Romero|ST|25|8000|ESP|2028
Yanis Musuayi|ST|19|3000|BEL|2030` },
    { id: 'osasuna', name: 'Осасуна', city: 'Памплона', stadium: 'Estadio El Sadar', cap: 23576, colors: ['#d91a21', '#0a346f'], players: `
Sergio Herrera|GK|33|2800|ESP|2028
Aitor Fernández|GK|35|400|ESP|2027
Enzo Boyomo|CB|25|15000|CMR|2029
Jorge Herrando|CB|25|3500|ESP|2030
Rockson Yeboah|CB|22|3000|GHA|2031
Alejandro Catena|CB|31|2600|ESP|2028
Unai Santos|CB|20|800|ESP|2028
Abel Bretones|LB|26|3500|ESP|2029
Diego Rico|LB|33|800|ESP|2027
Valentin Rosier|RB|30|3000|FRA|2028
Iñigo Arguibide|RB|21|2500|ESP|2030
Lucas Torró|DM|32|2500|ESP|2027
Iker Muñoz|DM|24|2000|ESP|2030
Jon Moncayola|CM|28|7000|ESP|2031
Asier Osambela|CM|21|2000|ESP|2029
Mauro Echegoyen|CM|21|200|ESP|2028
Aimar Oroz|AM|24|7500|ESP|2029
Moi Gómez|AM|32|1500|ESP|2027
Raúl Moro|LW|23|3500|ESP|2031
Romain Del Castillo|RW|30|5000|FRA|2028
Jonathan Dubasin|RW|26|4000|ESP|2030
Rubén García|RW|33|1600|ESP|2027
Kike Barja|RW|29|1500|ESP|2028
Raúl García|ST|25|3000|ESP|2031
Ante Budimir|ST|35|2800|CRO|2027` },
    { id: 'racing', name: 'Расинг', city: 'Сантандер', stadium: 'Campos de Sport de El Sardinero', cap: 22514, colors: ['#ffffff', '#00a650'], players: `
Julen Agirrezabala|GK|25|6000|ESP|2031
Simon Eriksson|GK|20|2000|SWE|2030
Jeanuël Belocian|CB|21|12000|FRA|2027
Facundo González|CB|23|3000|URU|2029
Pedro Felipe|CB|22|1500|BRA|2030
Manu Hernando|CB|28|1400|ESP|2028
Pablo Ramón|CB|25|1400|ESP|2029
Jorge Salinas|LB|19|10000|ESP|2029
Aarón Martín|LB|29|5000|ESP|2027
Álvaro Mantilla|RB|26|1200|ESP|2028
Matteo Prati|DM|22|5500|ITA|2027
Maguette Gueye|DM|23|2500|SEN|2029
Iván Martín|CM|27|3000|ESP|2030
Íñigo Sainz-Maza|CM|28|1000|ESP|2028
André Almeida|AM|26|5000|POR|2027
Sergio Canales|AM|35|3000|ESP|2028
Iñigo Vicente|LW|28|7000|ESP|2030
Гиорги Гулиашвили|LW|25|3500|GEO|2029
Andrés Martín|RW|27|8000|ESP|2028
Pablo García|RW|20|8000|ESP|2030
Iker Luque|RW|21|2000|ESP|2030
Yassir Zabiri|ST|21|20000|MAR|2027
Asier Villalibre|ST|29|1500|ESP|2029
Juan Carlos Arana|ST|26|1000|ESP|2028` },
    { id: 'deportivo', name: 'Депортиво', city: 'Ла-Корунья', stadium: 'Estadio Abanca-Riazor', cap: 32490, colors: ['#0067b2', '#ffffff'], players: `
Leo Román|GK|26|9000|ESP|2031
Álvaro Ferllo|GK|28|1500|ESP|2027
Germán Parreño|GK|33|200|ESP|2028
José María Giménez|CB|31|6000|URU|2027
Bright Ede|CB|19|6000|POL|2031
Lucas Noubi|CB|21|3000|BEL|2029
Dani Barcia|CB|23|1200|ESP|2028
Arnau Comas|CB|26|500|ESP|2028
Giacomo Quagliata|LB|26|4000|ITA|2028
Angeliño|LB|29|4000|ESP|2027
Adrià Altimira|RB|25|1800|ESP|2029
Miguel Loureiro|RB|29|1200|ESP|2028
Ximo Navarro|RB|36|100|ESP|2027
Marc Casadó|DM|23|15000|ESP|2027
Lorenzo Amatucci|DM|22|10000|ITA|2028
Riki Rodríguez|CM|29|1500|ESP|2029
Diego Villares|CM|30|1000|ESP|2028
Noé Carrillo|CM|19|1000|ESP|2029
Jonathan Asp Jensen|AM|20|6000|DEN|2031
Mario Soriano|AM|24|6000|ESP|2028
Yeremay Hernández|LW|23|25000|ESP|2030
David Mella|RW|21|5000|ESP|2029
Adama Traoré|RW|30|4000|ESP|2028
Luismi Cruz|RW|25|2000|ESP|2029
Bil Nsongo|ST|22|5000|CMR|2030
Pierre-Emerick Aubameyang|ST|37|2500|GAB|2028
Zakaria Eddahchouri|ST|26|2500|NED|2028` },
    { id: 'malaga', name: 'Малага', city: 'Малага', stadium: 'Estadio La Rosaleda', cap: 30389, colors: ['#0081c6', '#ffffff'], players: `
Alfonso Herrero|GK|32|400|ESP|2028
Carlos López|GK|21|100|ESP|2029
Fernando Calero|CB|31|2000|ESP|2027
Diego Murillo|CB|25|1500|ESP|2029
Juan Berrocal|CB|27|1500|ESP|2027
Ángel Recio|CB|23|1000|ESP|2029
Einar Galilea|CB|32|350|ESP|2027
Álex Pastor|CB|27|300|ESP|2028
Adam Aznou|LB|20|6000|MAR|2027
José Salinas|LB|26|2000|ESP|2027
Rafita Garrido|RB|21|1500|ESP|2029
Carlos Puga|RB|25|1000|ESP|2029
Jens Cajuste|DM|27|7000|SWE|2027
Izan Merino|CM|20|5000|ESP|2028
Pablo Martínez|CM|28|3000|ESP|2027
Carlos Dotor|CM|25|1200|ESP|2027
Ramón Enríquez|CM|25|400|ESP|2027
Dani Lorenzo|AM|23|2500|ESP|2029
Rafa Rodríguez|AM|23|1000|ESP|2028
Aarón Ochoa|AM|19|800|IRL|2029
Joaquín Muñoz|LW|27|2000|ESP|2027
Juan Cruz|LW|26|1800|ESP|2027
Julen Lobete|LW|26|1200|ESP|2027
David Larrubia|RW|24|6000|ESP|2028
Haitam Abaida|RW|24|200|MAR|2027
Chupe|ST|22|10000|ESP|2029
Adrián Niño|ST|22|2000|ESP|2029
Eneko Jauregi|ST|30|700|ESP|2027` },
  ],
});
