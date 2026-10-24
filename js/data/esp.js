// Ла Лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'esp', name: 'Ла Лига', short: 'Ла Лига', country: 'ESP', tier: 1, weekday: 6,
  autumn: { from: '08-15', rounds: 19 }, spring: { from: '01-09', rounds: 19 },
  ticket: 35, prize: [40000, 38300, 36650, 34950, 33250, 31600, 29900, 28200, 26550, 24850, 23150, 21450, 19800, 18100, 16400, 14750, 13050, 11350, 9700, 8000],
  teams: [
    { id: 'barcelona', name: 'Барселона', city: 'Барселона', stadium: 'Spotify Camp Nou', cap: 99787, colors: ['#a50044', '#004d98'], players: `
Joan García|GK|25|45000|ESP
Dominik Livakovic|GK|31|4000|CRO
Wojciech Szczęsny|GK|36|800|POL
Pau Cubarsí|CB|19|100000|ESP
Gerard Martín|CB|24|40000|ESP
Alejandro Balde|LB|23|40000|ESP
Xavi Espart|RB|19|25000|ESP
João Cancelo|RB|32|7000|POR
Rodri|DM|30|60000|ESP
Pedri|CM|23|150000|ESP
Marc Bernal|CM|19|40000|ESP
Gavi|CM|22|25000|ESP
Frenkie de Jong|CM|29|25000|NED
Brian Fariñas|CM|20|5000|ESP
Fermín López|AM|23|110000|ESP
Anthony Gordon|LW|25|80000|ENG
Jesse Bisiwu|LW|18|8000|BEL
Lamine Yamal|RW|19|220000|ESP
Karim Adeyemi|RW|24|40000|GER
Gabriel Jesus|ST|29|17000|BRA
Hamza Abdelkarim|ST|18|8000|EGY` },
    { id: 'real_madrid', name: 'Реал Мадрид', city: 'Мадрид', stadium: 'Estadio Bernabéu', cap: 83186, colors: ['#ffffff', '#febe10'], players: `
Thibaut Courtois|GK|34|15000|BEL
Андрий Лунин|GK|27|12000|UKR
Dean Huijsen|CB|21|60000|ESP
Ibrahima Konaté|CB|27|45000|FRA
Éder Militão|CB|28|18000|BRA
Antonio Rüdiger|CB|33|6000|GER
Marc Cucurella|LB|28|60000|ESP
Álvaro Carreras|LB|23|50000|ESP
Trent Alexander-Arnold|RB|28|60000|ENG
Denzel Dumfries|RB|30|25000|NED
Aurélien Tchouaméni|DM|26|70000|FRA
Eduardo Camavinga|CM|23|50000|FRA
Thiago Pitarch|CM|19|20000|ESP
Jorge Cestero|CM|20|7500|ESP
Jude Bellingham|AM|23|160000|ENG
Arda Güler|AM|21|100000|TÜR
Bernardo Silva|AM|32|22000|POR
Yan Diomande|RW|19|120000|CIV
Brahim Díaz|RW|27|35000|MAR
Kylian Mbappé|ST|27|200000|FRA
Endrick|ST|20|40000|BRA
Carlos Espí|ST|21|40000|ESP` },
    { id: 'villarreal', name: 'Вильярреал', city: 'Вильярреал', stadium: 'Estadio de la Cerámica', cap: 24500, colors: ['#ffe667', '#005187'], players: `
Luiz Júnior|GK|25|12000|BRA
Péter Gulácsi|GK|36|1000|HUN
Rubén Gómez|GK|24|400|ESP
Renato Veiga|CB|23|30000|POR
Logan Costa|CB|25|15000|CPV
Pau Navarro|CB|21|15000|ESP
Juan Foyth|CB|28|8000|ARG
Carlos Romero|LB|24|25000|ESP
Sergi Cardona|LB|27|9000|ESP
Santiago Mouriño|RB|24|20000|URU
Alex Freeman|RB|22|15000|USA
Pape Gueye|CM|27|40000|SEN
Carlos Macià|CM|18|15000|ESP
Nathan Saliba|CM|22|15000|CAN
Santi Comesaña|CM|30|8000|ESP
Alassane Diatta|CM|21|5000|SEN
Alberto Moleiro|LW|23|50000|ESP
Nízar El Jmili|LW|21|150|ESP
Ilias Akhomach|RW|22|12000|MAR
Tajon Buchanan|RW|27|12000|CAN
Георгес Микаутадзе|ST|25|40000|GEO
Tani Oluwaseyi|ST|26|7000|CAN
Ayoze Pérez|ST|33|5000|ESP` },
    { id: 'atletico', name: 'Атлетико Мадрид', city: 'Мадрид', stadium: 'Riyadh Air Metropolitano', cap: 70460, colors: ['#cb3524', '#ffffff'], players: `
Jan Oblak|GK|33|15000|SVN
Juan Musso|GK|32|3000|ARG
Salvi Esquivel|GK|21|1000|ESP
Marc Pubill|CB|23|50000|ESP
Dávid Hancko|CB|28|35000|SVK
Robin Le Normand|CB|29|18000|ESP
Jorge Domínguez|CB|16|8000|ESP
Alejandro Grimaldo|LB|31|20000|ESP
Dani Martínez|LB|22|2500|ESP
Marcos Llorente|RB|31|20000|ESP
Morten Hjulmand|DM|27|45000|DEN
Pablo Barrios|CM|23|70000|ESP
Rodrigo Mendoza|CM|21|20000|ESP
Johnny Cardoso|CM|25|20000|USA
Obed Vargas|CM|21|10000|MEX
Kang-in Lee|AM|25|35000|KOR
Álex Baena|LW|25|45000|ESP
Ademola Lookman|LW|29|40000|NGA
Arnau Ortiz|LW|24|6000|ESP
Giuliano Simeone|RW|23|40000|ARG
Julián Alvarez|ST|26|110000|ARG
Jonathan David|ST|26|30000|CAN
Alexander Sørloth|ST|30|15000|NOR` },
    { id: 'betis', name: 'Бетис', city: 'Севилья', stadium: 'Benito Villamarín', cap: 60721, colors: ['#00954c', '#ffffff'], players: `
Álvaro Valles|GK|29|10000|ESP
Diego Conde|GK|27|3000|ESP
Natan|CB|25|30000|BRA
Valentín Gómez|CB|23|12000|ARG
Diego Llorente|CB|33|2500|ESP
Marc Bartra|CB|35|900|ESP
Fran García|LB|27|7500|ESP
Ángel Ortiz|RB|22|6000|ESP
Héctor Bellerín|RB|31|2400|ESP
Marc Roca|DM|29|4000|ESP
Nelson Deossa|CM|26|9000|COL
Pablo Fornals|CM|30|8000|ESP
Dani Ceballos|CM|30|6000|ESP
Álvaro Fidalgo|CM|29|5000|MEX
Giovani Lo Celso|AM|30|7000|ARG
Iker Losada|AM|25|1800|ESP
Abde Ezzalzouli|LW|24|40000|MAR
Rodrigo Riquelme|LW|26|4000|ESP
Antony|RW|26|40000|BRA
Aitor Ruibal|RW|30|4000|ESP
Troy Parrott|ST|24|20000|IRL` },
    { id: 'celta', name: 'Сельта', city: 'Виго', stadium: 'Abanca-Balaídos', cap: 24870, colors: ['#8ac3ee', '#ffffff'], players: `
Ionuț Radu|GK|29|10000|ROU
Altay Bayındır|GK|28|3800|TÜR
Iván Villar|GK|29|900|ESP
Javi Rodríguez|CB|23|18000|ESP
Yoel Lago|CB|22|7500|ESP
Abdoulaye Faye|CB|22|4500|SEN
Sebastián Cáceres|CB|27|4500|URU
Marcos Alonso|CB|35|1200|ESP
Javi Galán|LB|31|1800|ESP
Sergio Carreira|RB|26|12000|ESP
Javi Rueda|RB|24|6000|ESP
Álvaro Núñez|RB|26|4000|ESP
Ilaix Moriba|CM|23|15000|GUI
Aleix Febas|CM|30|5000|ESP
Hugo Burcio|CM|19|2000|ESP
Williot Swedberg|LW|22|20000|SWE
Hugo Álvarez|LW|23|8000|ESP
Couhaib Driouech|LW|24|7500|MAR
Ferran Jutglà|RW|27|10000|ESP
Hugo González|RW|23|3000|ESP
Pablo Durán|ST|25|4000|ESP` },
    { id: 'getafe', name: 'Хетафе', city: 'Хетафе', stadium: 'Estadio Coliseum', cap: 17393, colors: ['#005999', '#ffffff'], players: `
David Soria|GK|33|2800|ESP
Jiri Letacek|GK|27|2000|CZE
Abdel Abqar|CB|27|3500|MAR
Sebastián Boselli|CB|22|1500|URU
Саба Сазонов|CB|24|800|GEO
Jean Ives Valou|CB|20|600|CIV
Davinchi|LB|19|2000|ESP
Johan Mojica|LB|34|1500|COL
Andrés García|RB|23|7000|ESP
Daniel Carvajal|RB|34|3500|ESP
Kiko Femenía|RB|35|500|ESP
Mario Martín|DM|22|10000|ESP
Orel Mangala|DM|28|9000|BEL
Nemanja Gudelj|DM|34|2000|SRB
Ramón Terrats|CM|26|3000|ESP
Francho Serrano|CM|25|3000|ESP
Alberto Risco|AM|21|800|ESP
Martín Satriano|ST|25|10000|URU
Enes Ünal|ST|29|7000|TÜR
Borja Mayoral|ST|29|4500|ESP` },
    { id: 'rayo', name: 'Райо Вальекано', city: 'Мадрид', stadium: 'Estadio de Vallecas', cap: 15500, colors: ['#ffffff', '#e53027'], players: `
Emil Audero|GK|29|2800|IDN
Dani Cárdenas|GK|29|1800|ESP
Mujaid Sadick|CB|26|5000|ESP
Marash Kumbulla|CB|26|3000|ALB
Jozhua Vertrouwd|CB|22|2000|NED
Florian Lejeune|CB|35|1800|FRA
Pelayo Fernández|CB|23|500|ESP
Adrià Pedrosa|LB|28|2800|ESP
Andrei Rațiu|RB|28|24000|ROU
Iván Balliu|RB|34|1000|ALB
Pedro Díaz|CM|28|3000|ESP
Unai López|CM|30|2500|ESP
Gnangoro Bouare|CM|22|1000|ESP
Isi Palazón|AM|31|2800|ESP
Randy Nteka|AM|28|1000|ANG
Rayane Belaid|AM|21|600|ESP
Álvaro García|LW|33|1500|ESP
Jorge de Frutos|RW|29|12000|ESP
Гиорги Цитаишвили|RW|25|3000|GEO
Fran Pérez|RW|24|2500|ESP
Sergio Camello|ST|25|10000|ESP
Alemão|ST|28|4000|BRA` },
    { id: 'valencia', name: 'Валенсия', city: 'Валенсия', stadium: 'Estadio de Mestalla', cap: 49430, colors: ['#ffffff', '#000000'], players: `
Kayne van Oevelen|GK|23|4000|NED
Stole Dimitrievski|GK|32|2000|MKD
Cristian Rivero|GK|28|100|ESP
César Tárrega|CB|24|9000|ESP
Justin de Haas|CB|26|7000|NED
Mouctar Diakhaby|CB|29|1500|GUI
Iker Córdoba|CB|20|1000|ESP
Jesús Vázquez|LB|23|4000|ESP
Arnau Martínez|RB|23|10000|ESP
Pablo Maffeo|RB|29|2500|ARG
Dimitri Foulquier|RB|33|500|GUA
Pepelu|DM|28|8000|ESP
Guido Rodríguez|DM|32|3500|ARG
Aliou Dieng|DM|29|3000|MLI
Javi Guerra|CM|23|25000|ESP
Filip Ugrinic|CM|27|6000|SUI
Aaron Mayol|CM|18|5000|ESP
Harvey Elliott|AM|23|18000|ENG
Ryunosuke Sato|LW|20|4000|JPN
Arnaut Danjuma|LW|29|3000|NED
David Otorbi|RW|19|3500|ESP
Luis Rioja|RW|33|1800|ESP
Dani Raba|ST|30|1000|ESP
Hugo Duro|ST|26|11000|ESP` },
    { id: 'real_sociedad', name: 'Реал Сосьедад', city: 'Сан-Себастьян', stadium: 'Estadio Municipal de Anoeta', cap: 40000, colors: ['#0067b1', '#ffffff'], players: `
Álex Remiro|GK|31|9000|ESP
Unai Marrero|GK|25|1000|ESP
Jon Martín|CB|20|25000|ESP
Mamadou Sarr|CB|21|22000|SEN
Igor Zubeldia|CB|29|6000|ESP
Jon Pacheco|CB|25|5000|ESP
Sergio Gómez|LB|26|15000|ESP
Aihen Muñoz|LB|29|2500|ESP
Héctor Fort|RB|20|15000|ESP
Jon Gorrotxategi|DM|24|25000|ESP
Luka Sucic|CM|24|15000|CRO
Beñat Turrientes|CM|24|10000|ESP
Carlos Soler|CM|29|7000|ESP
Арсен Захарян|AM|23|7500|RUS
Pablo Marín|AM|23|7000|ESP
Ander Barrenetxea|LW|24|18000|ESP
Gonçalo Guedes|LW|29|6000|POR
Alex Marchal|LW|19|3000|ESP
Takefusa Kubo|RW|25|20000|JPN
Job Ochieng|RW|23|4000|KEN
Orri Óskarsson|ST|22|20000|ISL` },
    { id: 'espanyol', name: 'Эспаньол', city: 'Барселона', stadium: 'RCDE Stadium', cap: 40000, colors: ['#007fc8', '#ffffff'], players: `
Marko Dmitrovic|GK|34|700|SRB
Ángel Fortuño|GK|25|300|ESP
Vanja Drkusic|CB|26|5000|SVN
Clemens Riedel|CB|23|4000|GER
Unai Núñez|CB|29|3500|ESP
Leandro Cabrera|CB|35|900|URU
Quilindschy Hartman|LB|24|12000|NED
Roger Hinojo|LB|21|3000|ESP
Omar El Hilali|RB|23|15000|MAR
Andoni Gorosabel|RB|30|3000|ESP
Urko González de Zárate|DM|25|12000|ESP
Gabriel Moscardo|DM|21|7000|BRA
Pol Lozano|CM|27|6000|ESP
Edu Expósito|CM|30|5000|ESP
Rafel Bauzà|CM|21|1200|ESP
Javi Hernández|AM|22|6000|ESP
Álex Calatrava|AM|26|5000|ESP
Bryan Zaragoza|LW|25|8000|ESP
Pere Milla|LW|34|1000|ESP
Tyrhys Dolan|RW|24|10000|ENG
Roberto Fernández|ST|24|20000|ESP
Marcos Fernández|ST|23|2000|ESP` },
    { id: 'athletic', name: 'Атлетик Бильбао', city: 'Бильбао', stadium: 'San Mamés', cap: 53289, colors: ['#ee2523', '#ffffff'], players: `
Unai Simón|GK|29|22000|ESP
Álex Padilla|GK|23|3000|MEX
Dani Vivian|CB|27|20000|ESP
Aitor Paredes|CB|26|7500|ESP
Yeray Álvarez|CB|31|900|ESP
Johaneko Louis-Jean|LB|22|2000|FRA
Yuri Berchiche|LB|36|1000|ESP
Jesús Areso|RB|27|5000|ESP
Hugo Rincón|RB|23|3500|ESP
Mikel Jauregizar|CM|22|25000|ESP
Beñat Prados|CM|25|12000|ESP
Alejandro Rego|CM|23|5000|ESP
Beñat Gerenabarrena|CM|23|5000|ESP
Iñigo Ruiz de Galarreta|CM|33|2000|ESP
Peio Canales|AM|21|10000|ESP
Nico Williams|LW|24|40000|ESP
Álex Berenguer|LW|31|4000|ESP
Álvaro Djaló|LW|27|4000|GNB
Robert Navarro|RW|24|7000|ESP
Nico Serrano|RW|23|1500|ESP
Maroan Sannadi|ST|25|3000|MAR` },
    { id: 'sevilla', name: 'Севилья', city: 'Севилья', stadium: 'Estadio Ramón Sánchez Pizjuán', cap: 42714, colors: ['#ffffff', '#d4021d'], players: `
Odysseas Vlachodimos|GK|32|3000|GRE
Fran González|GK|21|3000|ESP
Kike Salas|CB|24|14000|ESP
Andrés Castrín|CB|23|8000|ESP
Arouna Sangante|CB|24|8000|SEN
Fábio Cardoso|CB|32|1500|POR
Julio Díaz|LB|21|2000|ESP
José Ángel Carmona|RB|24|10000|ESP
Juan Iglesias|RB|28|6000|ESP
Lucien Agoumé|DM|24|18000|FRA
Youssouf Fofana|CM|27|15000|FRA
Гиорги Кочорашвили|CM|27|4500|GEO
Nico Guillén|CM|18|2000|ESP
Manu Bueno|CM|22|1500|ESP
Rubén Vargas|LW|28|15000|SUI
Félix Correia|LW|25|10000|POR
Chidera Ejuke|LW|28|4000|NGA
Alfon González|LW|27|3000|ESP
Peque Fernández|ST|24|3000|ESP
Lucas Stassin|ST|21|15000|BEL
Robbie Ure|ST|22|7000|SCO
Isaac Romero|ST|26|5000|ESP` },
    { id: 'alaves', name: 'Алавес', city: 'Витория', stadium: 'Estadio de Mendizorroza', cap: 19840, colors: ['#0761af', '#ffffff'], players: `
Adrián Rodríguez|GK|25|200|ARG
Ville Koski|CB|24|4000|FIN
Nicolás Valentini|CB|25|3000|ARG
Youssef Enríquez|LB|21|5000|MAR
Nahuel Tenaglia|RB|30|3000|ARG
Jonny Otto|RB|32|2200|ESP
Hugo Novoa|RB|23|800|ESP
Antonio Blanco|DM|26|10000|ESP
Carlos Protesoni|DM|28|1000|URU
Pablo Ibáñez|CM|28|4000|ESP
Ander Guevara|CM|29|2500|ESP
Carles Aleñá|CM|28|2500|ESP
Selu Diallo|CM|23|900|GUI
Denis Suárez|AM|32|1000|ESP
Abde Rebbach|LW|28|2500|ALG
Ángel Pérez|RW|24|5000|ESP
Miguel Rodríguez|RW|23|5000|ESP
Toni Martínez|ST|29|7500|ESP
Lucas Boyé|ST|30|5000|ARG
Aitor Mañas|ST|23|600|ESP
Mariano Díaz|ST|33|500|DOM` },
    { id: 'elche', name: 'Эльче', city: 'Эльче', stadium: 'Estadio Manuel Martínez Valero', cap: 31388, colors: ['#ffffff', '#05642c'], players: `
Alejandro Iturbe|GK|23|1400|ESP
Matías Dituro|GK|39|100|ARG
Kevin Lomónaco|CB|24|5000|ARG
Víctor Chust|CB|26|2500|ESP
Matia Barzic|CB|22|1000|CRO
Bambo Diaby|CB|28|800|ESP
Roy Revivo|LB|23|4500|ISR
Buba Sangaré|RB|19|5000|ESP
Rubén Sánchez|RB|25|1800|ESP
Federico Redondo|DM|23|2500|ARG
Martim Neto|CM|23|4000|POR
Javi Morcillo|CM|20|2000|ESP
Gonzalo Villar|CM|28|1800|ESP
Facundo Buonanotte|AM|21|12000|ARG
Thomas Lemar|AM|30|1800|FRA
Germán Valera|LW|24|6000|ESP
Lucas Cepeda|LW|23|2500|CHI
Tete Morente|LW|29|1800|ESP
Grady Diangana|RW|28|2000|COD
Josan|RW|36|100|ESP
Adam Boayar|ST|21|800|MAR
Ali Houary|ST|21|600|MAR
Ezequiel Ponce|ST|29|4000|ARG
Fer Niño|ST|26|4000|ESP
Abiel Osorio|ST|24|1500|ARG` },
    { id: 'levante', name: 'Леванте', city: 'Валенсия', stadium: 'Estadio Ciudad de Valencia', cap: 25534, colors: ['#b4053f', '#004c9a'], players: `
Mathew Ryan|GK|34|1800|AUS
Pablo Campos|GK|24|1500|ESP
Axel Tape|CB|19|8000|FRA
Adrián Dela|CB|27|5000|ESP
Ifeanyi Ndukwe|CB|18|3000|AUT
Aïssa Mandi|CB|35|1000|ALG
Jorge Cabello|CB|22|900|ESP
Manu Sánchez|LB|26|6000|ESP
Marc Santos|LB|15|500|ESP
Jeremy Toljan|RB|32|2000|GER
Nacho Pérez|RB|18|1500|ESP
Oriol Rey|DM|28|1800|ESP
Enzo Bardeli|CM|25|6000|FRA
Jon Ander Olasagasti|CM|26|2500|ESP
Dani Requena|CM|22|1500|ESP
Thiago Fernández|LW|22|4500|ARG
Paco Cortés|LW|19|2000|ESP
Víctor García|RW|29|1500|ESP
Petar Ratkov|ST|23|9000|SRB
Karl Etta Eyong|ST|23|9000|CMR
Iván Romero|ST|25|8000|ESP
Yanis Musuayi|ST|19|3000|BEL` },
    { id: 'osasuna', name: 'Осасуна', city: 'Памплона', stadium: 'Estadio El Sadar', cap: 23576, colors: ['#d91a21', '#0a346f'], players: `
Sergio Herrera|GK|33|2800|ESP
Aitor Fernández|GK|35|400|ESP
Enzo Boyomo|CB|25|15000|CMR
Rockson Yeboah|CB|22|3000|GHA
Alejandro Catena|CB|31|2600|ESP
Unai Santos|CB|20|800|ESP
Abel Bretones|LB|26|3500|ESP
Diego Rico|LB|33|800|ESP
Valentin Rosier|RB|30|3000|FRA
Iñigo Arguibide|RB|21|2500|ESP
Lucas Torró|DM|32|2500|ESP
Iker Muñoz|DM|24|2000|ESP
Jon Moncayola|CM|28|7000|ESP
Asier Osambela|CM|21|2000|ESP
Mauro Echegoyen|CM|21|200|ESP
Moi Gómez|AM|32|1500|ESP
Raúl Moro|LW|23|3500|ESP
Jonathan Dubasin|RW|26|4000|ESP
Rubén García|RW|33|1600|ESP
Raúl García|ST|25|3000|ESP
Ante Budimir|ST|35|2800|CRO` },
    { id: 'racing', name: 'Расинг', city: 'Сантандер', stadium: 'Campos de Sport de El Sardinero', cap: 22514, colors: ['#ffffff', '#00a650'], players: `
Julen Agirrezabala|GK|25|6000|ESP
Jeanuël Belocian|CB|21|12000|FRA
Facundo González|CB|23|3000|URU
Pedro Felipe|CB|22|1500|BRA
Manu Hernando|CB|28|1400|ESP
Pablo Ramón|CB|25|1400|ESP
Jorge Salinas|LB|19|10000|ESP
Aarón Martín|LB|29|5000|ESP
Álvaro Mantilla|RB|26|1200|ESP
Matteo Prati|DM|22|5500|ITA
Maguette Gueye|DM|23|2500|SEN
Iván Martín|CM|27|3000|ESP
André Almeida|AM|26|5000|POR
Sergio Canales|AM|35|3000|ESP
Iñigo Vicente|LW|28|7000|ESP
Гиорги Гулиашвили|LW|25|3500|GEO
Andrés Martín|RW|27|8000|ESP
Pablo García|RW|20|8000|ESP
Iker Luque|RW|21|2000|ESP
Yassir Zabiri|ST|21|20000|MAR
Asier Villalibre|ST|29|1500|ESP
Juan Carlos Arana|ST|26|1000|ESP` },
    { id: 'deportivo', name: 'Депортиво', city: 'Ла-Корунья', stadium: 'Estadio Abanca-Riazor', cap: 32490, colors: ['#0067b2', '#ffffff'], players: `
Leo Román|GK|26|9000|ESP
Álvaro Ferllo|GK|28|1500|ESP
Germán Parreño|GK|33|200|ESP
José María Giménez|CB|31|6000|URU
Lucas Noubi|CB|21|3000|BEL
Dani Barcia|CB|23|1200|ESP
Arnau Comas|CB|26|500|ESP
Giacomo Quagliata|LB|26|4000|ITA
Angeliño|LB|29|4000|ESP
Adrià Altimira|RB|25|1800|ESP
Miguel Loureiro|RB|29|1200|ESP
Ximo Navarro|RB|36|100|ESP
Lorenzo Amatucci|DM|22|10000|ITA
Riki Rodríguez|CM|29|1500|ESP
Noé Carrillo|CM|19|1000|ESP
Jonathan Asp Jensen|AM|20|6000|DEN
Mario Soriano|AM|24|6000|ESP
Yeremay Hernández|LW|23|25000|ESP
David Mella|RW|21|5000|ESP
Adama Traoré|RW|30|4000|ESP
Luismi Cruz|RW|25|2000|ESP
Bil Nsongo|ST|22|5000|CMR` },
    { id: 'malaga', name: 'Малага', city: 'Малага', stadium: 'Estadio La Rosaleda', cap: 30389, colors: ['#0081c6', '#ffffff'], players: `
Carlos López|GK|21|100|ESP
Fernando Calero|CB|31|2000|ESP
Juan Berrocal|CB|27|1500|ESP
Ángel Recio|CB|23|1000|ESP
Einar Galilea|CB|32|350|ESP
Álex Pastor|CB|27|300|ESP
Adam Aznou|LB|20|6000|MAR
José Salinas|LB|26|2000|ESP
Rafita Garrido|RB|21|1500|ESP
Carlos Puga|RB|25|1000|ESP
Jens Cajuste|DM|27|7000|SWE
Izan Merino|CM|20|5000|ESP
Pablo Martínez|CM|28|3000|ESP
Carlos Dotor|CM|25|1200|ESP
Ramón Enríquez|CM|25|400|ESP
Dani Lorenzo|AM|23|2500|ESP
Rafa Rodríguez|AM|23|1000|ESP
Joaquín Muñoz|LW|27|2000|ESP
Juan Cruz|LW|26|1800|ESP
David Larrubia|RW|24|6000|ESP
Haitam Abaida|RW|24|200|MAR
Chupe|ST|22|10000|ESP
Adrián Niño|ST|22|2000|ESP
Eneko Jauregi|ST|30|700|ESP` },
  ],
});
