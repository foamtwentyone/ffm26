// MLS 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'usa', name: 'MLS', short: 'MLS', country: 'USA', tier: 1, weekday: 6, single: true,
  autumn: { from: '08-01', rounds: 15 }, spring: { from: '02-20', rounds: 14 },
  ticket: 30, prize: [12000, 11700, 11400, 11050, 10750, 10450, 10150, 9850, 9500, 9200, 8900, 8600, 8300, 7950, 7650, 7350, 7050, 6700, 6400, 6100, 5800, 5500, 5150, 4850, 4550, 4250, 3950, 3600, 3300, 3000],
  teams: [
    { id: 'nashville', name: 'Нэшвилл', city: 'Нэшвилл', stadium: 'GEODIS Park', cap: 30109, colors: ['#ece83a', '#1f1646'], players: `
Joe Willis|GK|38|50|USA
Xavier Valdez|GK|22|117|DOM
William Joshua Mackay|GK|18|300|USA
Brian Schwake|GK|25|388|USA
Daniel Lovitz|LB|35|96|USA
Maxwell Woledzi|CB|25|2430|GHA
Jeisson Palacios|CB|32|186|COL
Jack Maher|CB|26|1368|USA
Owen Presthus|RB|20|393|USA
Thomas Williams|CB|22|269|USA
Josh Bauer|RB|28|77|USA
Reed Baker-Whiting|LB|21|1059|USA
Julian Gaines|RB|23|241|USA
Andy Nájar|RB|33|100|HON
Malachi Molina|RB|20|300|JAM
Bryan Acosta|CM|32|117|HON
Patrick Yazbek|CM|24|2376|AUS
Shak Mohammed|RW|23|257|GHA
Matthew Corcoran|CM|20|1805|USA
Alex Muyl|LW|31|1022|USA
Edvard Tagseth|CM|25|2161|NOR
Famara Camara|CM|21|823|SEN
Cristian Espinoza|RW|31|2150|ARG
Sam Surridge|ST|28|8087|ENG
Hany Mukhtar|ST|31|2054|GER
Elias Saad|LW|26|1443|TUN
Zidane Yáñez|ST|18|300|CHI
Jordan Knight|RW|24|147|CAN
Ahmed Qasem|LW|23|3563|IRQ
Warren Madrigal|ST|22|543|CRC` },
    { id: 'inter_miami', name: 'Интер Майами', city: 'Майами', stadium: 'Nu Stadium', cap: 26700, colors: ['#f7b5cd', '#231f20'], players: `
Luis Barraza|GK|29|61|USA
Rocco Ríos Novo|GK|24|385|ARG
Dayne St. Clair|GK|29|1686|CAN
Gonzalo Luján|CB|25|1509|ARG
Sergio Reguilón|LB|29|2004|ESP
Facundo Mura|RB|27|1423|ARG
Fricio Caicedo|LB|18|769|ECU
Micael|CB|26|2518|BRA
Ian Fray|RB|24|836|JAM
Tyler Hall|CB|20|559|USA
Maximiliano Falcón|CB|29|1052|URU
Israel Boatwright|RW|21|380|DOM
Daniel Sumalla|CB|19|300|USA
Ezequiel Abadia-Reda|LB|20|190|USA
Casemiro|DM|34|2954|BRA
Rodrigo De Paul|CM|32|13820|ARG
Telasco Segovia|CM|23|6142|VEN
David Ayala|CM|24|1525|ARG
Yannick Bright|CM|25|1475|ITA
Lovens Delinois|ST|22|131|HAI
Preston Plambeck|LW|20|234|USA
Matías Galarza|CM|24|2201|PAR
Alexander Shaw|DM|18|464|COL
Luis Suárez|ST|39|970|URU
Lionel Messi|RW|39|13963|ARG
Riquelme Fillipi|LW|20|300|BRA
Germán Berterame|ST|27|12854|MEX
Santiago Morales|LW|19|547|USA
Tadeo Allende|RW|27|2236|ARG
Mateo Silvetti|LW|20|7993|ARG
Dániel Pintér|ST|19|668|USA` },
    { id: 'new_england', name: 'Нью-Инглэнд', city: 'Фоксборо', stadium: 'Gillette Stadium', cap: 64628, colors: ['#022166', '#ce0e2d'], players: `
Matt Turner|GK|32|1456|USA
Donovan Parisian|GK|22|300|USA
JD Gunn|GK|26|61|PAN
Mamadou Fofana|CB|28|1455|MLI
Tanner Beason|CB|29|227|USA
Tylon Smith|CB|21|195|RSA
Matt Polster|RB|33|262|USA
Ilay Feingold|RB|22|2335|ISR
Cody Baker|RB|22|259|USA
Damario McIntosh|RB|19|300|JAM
Benjamin Sammer|CB|21|108|AUT
Ethan Kohler|CB|21|831|USA
Will Sands|LB|26|312|USA
Joshua Wynder|CB|21|1084|USA
Andrew Farrell|CB|34|50|USA
Carles Gil|AM|33|792|ESP
Jackson Yueill|CM|29|708|USA
Brooklyn Raines|DM|21|2086|USA
Cristiano Oliveira|RW|18|943|USA
Javaun Mussenden|CM|19|300|USA
Judah Siqueira|CM|17|300|USA
Alhassan Yusuf|CM|26|2031|NGA
Griffin Yow|LW|24|1669|USA
Leonardo Campana|ST|26|1452|ECU
Jack Harrison|RW|29|8051|ENG
Dániel Gazdag|ST|30|1719|HUN
Marcos Zambrano|ST|21|232|USA
Peyton Miller|RW|18|4904|USA
Wilson Harris|ST|26|206|USA
Luca Langoni|RW|24|4358|ARG
Diego Fagúndez|RW|31|496|URU
Dor Turgeman|ST|23|5526|ISR` },
    { id: 'chicago', name: 'Чикаго Файр', city: 'Чикаго', stadium: 'Soldier Field', cap: 62493, colors: ['#e30613', '#7ccdef'], players: `
Chris Brady|GK|22|2883|USA
Jeffrey Gal|GK|33|50|USA
Josh Cohen|GK|34|50|USA
Omar González|CB|38|103|USA
Leonardo Barroso|RB|21|1207|POR
Jack Elliott|CB|31|1204|ENG
Mbekezeli Mbokazi|CB|21|1462|RSA
Sam Rogers|CB|27|105|USA
Andrew Gutman|LB|30|699|USA
Andreas Hanche-Olsen|CB|29|2270|NOR
Jonathan Dean|RB|29|498|USA
Noah Allen|LB|22|1972|GRE
Anton Salétros|CM|30|1492|SWE
André Franco|DM|28|706|POR
Robin Lod|CM|33|731|FIN
Johan Gómez|RB|25|433|USA
Mauricio Pineda|CM|29|449|USA
Анзор Меквабишвили|CM|25|1605|GEO
Dawid Poręba|AM|23|175|USA
Sergio Oregel|CM|21|1308|USA
Djé D'Avilla|CM|23|3927|CIV
Oscar Pineda|DM|18|300|USA
Maren Haile-Selassie|ST|27|913|SUI
Chris Mueller|ST|30|53|USA
Robert Lewandowski|ST|38|8528|POL
Philip Zinckernagel|RW|31|2155|DEN
Puso Dithejane|LW|22|811|RSA
Jonathan Bamba|LW|30|2119|CIV
Dean Boltz|ST|20|697|USA
Robert Turdean|AM|16|300|USA` },
    { id: 'charlotte', name: 'Шарлотт', city: 'Шарлотт', stadium: 'Bank of America Stadium', cap: 75412, colors: ['#1a85c8', '#000000'], players: `
Kristijan Kahlina|GK|34|516|CRO
Tyler Miller|GK|33|120|USA
Isaac Walker|GK|26|108|USA
Tim Ream|CB|39|131|USA
Andrew Privett|CB|26|784|USA
Nathan Byrne|RB|34|146|ENG
Harry Toffolo|LB|31|1248|ENG
Henry Kessler|CB|28|697|USA
David Schnegg|LB|28|699|AUT
Mikah Thomas|LB|21|300|USA
Andrew Johnson|CB|22|300|VIN
Will Cleary|RB|23|246|USA
Jack Neeley|CB|21|494|USA
Morrison Agyemang|CB|21|1107|GHA
Ashley Westwood|CM|36|116|ENG
Brandt Bronico|DM|31|710|USA
Pep Biel|AM|30|3323|ESP
Luca de la Torre|CM|28|1496|USA
Baye Coulibaly|CM|20|1707|MLI
Djibril Diani|DM|28|495|FRA
Aron John|CM|20|686|USA
Archie Goodwin|ST|21|1024|AUS
Idan Toklomati|ST|22|3151|ISR
Allan Saint-Maximin|LW|29|10147|FRA
Liel Abada|RW|25|2361|ISR
Tyger Smalls|LW|24|162|ENG
Nimfasha Berchimas|LW|18|1829|USA
Rodolfo Aloko|RW|19|1494|BEN
Brian Romero|RW|20|483|USA
Nathan Richmond|RW|22|300|USA` },
    { id: 'philadelphia', name: 'Филадельфия Юнион', city: 'Филадельфия', stadium: 'Subaru Park', cap: 19778, colors: ['#071b2c', '#b18500'], players: `
Andre Blake|GK|35|119|JAM
George Marks|GK|26|110|USA
Andrew Rick|GK|20|603|USA
Jordan Romaine Griffin|LB|17|300|USA
Kaiden Moore|CB|19|300|USA
Geiner Martínez|CB|23|465|COL
Japhet Sery Larsen|CB|26|1034|DEN
Ben Bender|LB|25|125|USA
Philippe Ossibadjouo|LB|21|300|GAB
Nathan Harriel|CB|25|1025|USA
Kai Wagner|LB|29|1504|GER
Giovanny Sequera|RB|20|636|VEN
Francis Westfield|RB|20|1865|USA
Neil Pierre|CB|19|853|USA
Finn Sundstrom|CB|19|660|USA
Jovan Lukić|CM|24|1789|SRB
Cavan Sullivan|RW|17|7154|USA
Jesús Bueno|CM|27|246|VEN
Alejandro Bedoya|RW|39|50|USA
Jeremy Rafanello|CM|26|91|USA
Indiana Vassilev|LW|25|1822|USA
Danley Jean Jacques|CM|26|1820|HAI
Quinn Sullivan|RW|22|5476|USA
Bruno Damiani|ST|24|1789|URU
Milan Iloski|ST|27|2153|USA
Ezekiel Alladoh|ST|21|5407|GHA
Agustín Anello|ST|24|1255|USA
Malik Jakupović|ST|17|1112|USA
Sal Olivas|ST|20|675|USA` },
    { id: 'orlando', name: 'Орландо Сити', city: 'Орландо', stadium: 'Inter.co Stadium', cap: 25527, colors: ['#633492', '#ffffff'], players: `
Javier Otero|GK|23|154|VEN
Tristan Himes|GK|23|300|USA
Maxime Crépeau|GK|32|1015|CAN
Adrián Marin|CB|29|663|ESP
David Brekalo|CB|27|2056|SVN
Robin Jansson|CB|34|214|SWE
Zakaria Taifi|RB|21|337|USA
Nolan Miller|CB|22|174|USA
Griffin Dorsey|RB|27|981|USA
Vinícius Nogueira|LB|24|1197|BRA
Clovis Archange|LB|18|300|USA
Bernardo Rhein Goncalves|LB|19|1102|USA
Iago|CB|21|1548|BRA
Luis Otávio|DM|19|300|BRA
Braian Ojeda|CM|26|2288|PAR
Tiago Carvalho|CM|21|300|BRA
Wilder Cartagena|DM|32|462|PER
Eduard Atuesta|CM|29|1982|COL
Joran Gerbet|CM|25|142|FRA
Issah Haruna|RW|22|300|GHA
Dylan Judelson|DM|18|300|USA
Iván Angulo|LW|27|1724|COL
Ignacio Gómez|DM|20|440|ARG
Pedro Leão|ST|20|300|BRA
Antoine Griezmann|ST|35|6800|FRA
Daryl Dike|ST|26|683|USA
Martín Ojeda|ST|27|9378|ARG
Tyrese Spicer|LW|25|397|TRI
Justin Ellis|ST|19|1183|USA
Harvey Sarajian|LW|21|629|USA
Gustavo Caraballo|RW|18|1172|VEN
Marco Pašalić|RW|26|6061|CRO` },
    { id: 'cincinnati', name: 'Цинциннати', city: 'Цинциннати', stadium: 'TQL Stadium', cap: 26000, colors: ['#003087', '#fe5000'], players: `
Connor Dale|GK|16|300|USA
Evan Louro|GK|30|50|USA
Roman Celentano|GK|26|1865|USA
Fabian Mrozek|GK|23|102|POL
Alvas Elvis Powell|CB|32|50|JAM
Nick Hagglund|CB|34|165|USA
Julián Malatini|CB|25|1337|ARG
Miles Robinson|CB|29|2037|USA
Teenage Lingani Hadebe|CB|31|327|ZIM
Kyle Smith|CB|34|52|USA
Ayoub Lajhar|CB|22|143|LBY
Andrei Chirilă|CB|18|972|USA
Tyrell Malacia|LB|27|1873|NED
Obinna Nwobodo|CM|29|1458|NGA
Evander Ferreira|CM|28|13628|BRA
Samuel Gidi|CB|22|2159|SVK
Kenji Mboma Dem|ST|24|190|FRA
Pavel Bucha|CM|28|1807|CZE
Gerardo Valenzuela|CM|22|1372|USA
David Douděra|RW|28|1822|CZE
Brian Anunga|DM|30|227|CMR
Bryan Ramírez|LB|26|2093|ECU
Ender Echenique|RW|22|1072|VEN
Kévin Denkey|ST|25|13400|TOG
Kristian Fletcher|ST|21|395|USA
Tom Barlow|ST|31|136|USA
Ștefan Chirilă|ST|19|300|ROU
Ademar Chávez|ST|17|909|USA
Ayoub Jabbari|ST|26|791|MAR` },
    { id: 'ny_red_bulls', name: 'Нью-Йорк Ред Буллз', city: 'Харрисон', stadium: 'Sports Illustrated Stadium', cap: 26765, colors: ['#ed1e36', '#ffffff'], players: `
Tobias Szewczyk|GK|17|300|USA
AJ Marcucci|GK|27|130|USA
Ethan Horvath|GK|31|530|USA
John McCarthy|GK|34|50|USA
Davi Alexandre|CB|19|428|USA
Justin Che|CB|22|759|USA
Jahkeele Marshall-Rutty|RB|22|1671|CAN
Omar Valencia|LB|22|263|PAN
Robert Voloder|CB|25|594|GER
Dylan Nealis|RB|28|1042|USA
Julián Bazán|CB|20|767|COL
Juan Mina|RB|22|300|COL
Tim Parker|CB|33|60|USA
Matthew Dos Santos|LB|18|3108|USA
Devin Padelford|CB|23|209|USA
David Ruiz|CM|22|1360|HON
Emil Forsberg|CM|35|734|SWE
Adri Mehmeti|CM|17|6650|USA
Mohammed Sofo|CM|21|875|GHA
Nehuén Benedetti|CM|21|576|ARG
Ronald Donkor|CM|21|1716|GHA
Sekou Kone|CM|19|300|MLI
Andy Rojas|LW|20|1637|CRC
Aiden Jarvis|CM|19|300|USA
Pedro Castro|AM|19|300|BRA
Dennis Nelich|LW|18|300|USA
Cade Cowell|RW|23|2132|USA
Jorge Ruvalcaba|LW|25|6015|MEX
Eric Maxim Choupo-Moting|ST|37|557|CMR
Julian Hall|ST|18|6204|USA
Cameron Harper|RW|24|420|USA
Tanner Rosborough|LW|18|1003|USA
Rafael Mosquera|RW|21|734|PAN
Mijahir Jiménez|ST|19|1006|PAN` },
    { id: 'toronto', name: 'Торонто', city: 'Торонто', stadium: 'BMO Field', cap: 45736, colors: ['#e31937', '#ffffff'], players: `
Luka Gavran|GK|26|503|CAN
William Yarbrough|GK|37|50|USA
Matheus Pereira|LB|25|1043|BRA
Zane Monlouis|CB|23|426|JAM
Benjamín Kuščević|CB|30|1009|CHI
Nicksoen Gomis|CB|24|188|FRA
Kobe Franklin|RB|23|229|CAN
Richie Laryea|LB|31|509|CAN
Walker Zimmerman|CB|33|984|USA
Jackson Gilman|RB|22|151|USA
Raheem Edwards|LB|31|227|CAN
Niklas Dorsch|CM|28|1698|GER
Nelson Palacio|CM|25|869|COL
Djordje Mihailović|CM|27|4121|USA
Alonso Coello|DM|27|802|ESP
Jonathan Osorio|DM|34|453|CAN
Theo Corbeanu|RW|24|1192|CAN
Josh Sargent|ST|26|16624|USA
Derrick Etienne|ST|29|360|HAI
Emilio Aristizábal|ST|21|1212|COL
Dániel Sallói|LW|30|1309|HUN
Alejandro Piedrahita|LW|24|811|COL
Malik Henry|RW|24|212|CAN
Lewis Morgan|ST|30|577|SCO
Jules-Anthony Vilsaint|RW|23|153|CAN` },
    { id: 'columbus', name: 'Коламбус Крю', city: 'Коламбус', stadium: 'ScottsMiracle-Gro Field', cap: 21188, colors: ['#fedd00', '#000000'], players: `
Nicholas Hagen|GK|30|50|GUA
Evan Bush|GK|40|50|USA
Patrick Schulte|GK|25|2505|USA
Станислав Лапкес|GK|20|300|BLR
Luke Pruter|GK|25|212|USA
Eric Bailly|CB|32|468|CIV
Rudy Camacho|CB|35|50|FRA
Brooks Lennon|RB|29|730|USA
Cesar Ruvalcaba|CB|25|125|USA
Malte Amundsen|LB|28|1508|DEN
Tristan Brown|LB|19|858|USA
Sean Zawadzki|CB|26|1855|USA
Steven Moreira|CB|32|722|CPV
Andrés Herrera|RB|27|1003|ARG
Dylan Chambost|CM|29|1452|FRA
Amar Sejdić|CM|29|50|USA
Taha Habroune|CM|20|2089|USA
Sékou Bangoura|DM|24|547|GUI
André Gomes|CM|33|1406|POR
Anass Zaroury|LW|25|6698|MAR
Mohamed Farsi|RB|26|1278|ALG
Cole Mrowka|AM|20|206|PHI
Kevin Gbamblé|RW|19|300|USA
Tarun Karumanchi|CM|23|121|USA
Santiago Rodríguez|RW|26|6352|URU
Wessam Abou Ali|ST|27|5163|PLE
Brais Méndez|AM|29|7853|ESP
Jamal Thiaré|ST|33|93|SEN
Lautaro Giaccone|LW|25|848|ARG
Gonzalo Tapia|ST|24|4204|CHI
Chase Adams|ST|18|1280|USA
Josef Martínez|ST|33|776|VEN` },
    { id: 'nycfc', name: 'Нью-Йорк Сити', city: 'Нью-Йорк', stadium: 'Yankee Stadium', cap: 54251, colors: ['#6cace4', '#041e42'], players: `
Maclean Learned|GK|24|300|USA
Greg Ranjitsingh|GK|33|50|TRI
Tomás Romero|GK|25|105|SLV
Matt Freese|GK|28|1423|USA
Nico Cavallo|LB|24|300|USA
Matt Miazga|CB|31|729|USA
Thiago Martins|CB|31|1216|BRA
Kevin O'Toole|LB|27|746|IRL
Maxwell Murray|CB|24|300|USA
Tayvon Gray|RB|24|2055|JAM
Raul|CB|27|978|BRA
Mitja Ilenič|RB|21|909|SVN
Drew Baiera|RB|19|808|USA
Kamran Acito|CB|22|300|USA
Kai Trewin|DM|25|1361|AUS
James Sands|CB|26|5120|USA
Andrés Perea|DM|25|1678|USA
Maxi Moralez|AM|39|85|ARG
Kevin Pierre|DM|23|189|USA
Aiden O'Neill|DM|28|1799|AUS
Cooper Flax|DM|22|300|USA
Máximo Carrizo|AM|18|885|USA
Jonathan Shore|CM|19|1791|USA
Keaton Parks|CM|29|1422|USA
Peter Molinari|DM|17|300|USA
Nicolás Fernández|ST|26|9530|ARG
Bénie Traoré|LW|23|9775|CIV
Talles Magno|ST|24|3416|BRA
Alonso Martínez|ST|28|3928|CRC
Hannes Wolf|LW|27|3873|AUT
Luighi|ST|20|7932|BRA
Agustín Ojeda|RW|22|6483|ARG
Jacob Arroyave|ST|18|300|USA
El Hadji Samb|LW|16|300|USA
Arnau Farnós|LW|23|104|ESP
Malachi Jones|LW|23|177|SLE` },
    { id: 'dc_united', name: 'Ди Си Юнайтед', city: 'Вашингтон', stadium: 'Audi Field', cap: 20621, colors: ['#000000', '#ef3e42'], players: `
Sean Johnson|GK|37|103|USA
Grant Leveillé|GK|18|300|HAI
Alex Bono|GK|32|50|USA
Kimito Nono|RB|24|1155|JPN
Lucas Bartlett|CB|29|985|USA
Silvan Hefti|RB|28|264|SUI
Keisuke Kurokawa|LB|29|734|JPN
Conner Antley|RB|31|50|USA
Sean Nealis|CB|29|449|USA
Kye Rowles|CB|28|690|AUS
Nikola Marković|CM|22|288|CAN
Matti Peltola|CM|24|1273|FIN
Peglow|LW|24|993|BRA
Jared Stroud|RW|30|496|USA
Andre Dozzell|DM|27|1511|ENG
Brandon Servania|CM|27|255|PUR
Kamil Castillo|CM|16|300|DOM
Gavin Turner|ST|19|398|USA
Hosei Kijima|RW|24|147|JPN
Tai Baribo|ST|28|5196|ISR
Louis Munteanu|ST|24|6069|ROU
Gabriel Segal|ST|25|147|USA
Nathan Ordaz|ST|22|1790|SLV
Jackson Hopkins|ST|22|1404|USA
Oscar Avilez|RW|16|300|USA` },
    { id: 'atlanta', name: 'Атланта Юнайтед', city: 'Атланта', stadium: 'Mercedes-Benz Stadium', cap: 71000, colors: ['#80000a', '#000000'], players: `
Lucas Hoyos|GK|37|119|ARG
Jayden Hibbert|GK|22|186|JAM
Elías Báez|LB|22|3834|ARG
Enea Mihaj|CB|28|2008|ALB
Júnior Alonso|CB|33|860|PAR
Paulo Díaz|CB|32|1297|CHI
Daniel Chica|RB|24|339|USA
Matthew Edwards|RB|23|149|USA
Dominik Chong-Qui|LB|18|836|USA
Tomás Jacob|RB|22|4343|ARG
Enzo Dovlo|RW|23|190|TOG
Steven Alzate|CM|28|1478|COL
Tristan Muyumba|CM|29|769|FRA
Giuliano Galoppo|DM|27|1762|ARG
Mauricio Amaro|CM|21|1600|URU
Adrian Gill|DM|20|288|USA
Will Reilly|CM|23|141|USA
Ajani Fortune|CM|23|899|TRI
Santiago Pita|AM|19|300|USA
Cooper Sanchez|CM|18|1564|USA
Patrick Weah|RW|22|271|USA
Miguel Almirón|LW|32|11863|PAR
Sérgio Santos|ST|32|148|BRA
Luke Brennan|RW|21|401|USA
Fabrice Picault|ST|35|82|HAI
Cayman Togashi|ST|33|64|JPN
Breel Embolo|ST|29|15893|SUI
Алексей Миранчук|RW|31|4990|RUS
Cameron Dunbar|LW|24|417|USA` },
    { id: 'montreal', name: 'Монреаль', city: 'Монреаль', stadium: 'Stade Saputo', cap: 20801, colors: ['#000000', '#0033a1'], players: `
Sébastian Breza|GK|28|172|CAN
Thomas Gillier|GK|22|1516|CHI
Emil Gazdov|GK|23|156|CAN
Samsy Keita|GK|17|300|CAN
Jalen Neal|CB|23|812|USA
Brayan Ceballos|RB|25|1176|COL
Brayan Vera|CB|27|1016|COL
Brandan Craig|CB|22|168|USA
Luca Petrasso|LB|26|582|CAN
Bode Hidalgo|RB|24|1151|USA
Efraín Morales|CB|22|544|BOL
Dawid Bugaj|RB|22|427|POL
Viktor Radojević|LB|22|1372|SRB
Josh-Duc Nteziryayo|CB|17|300|CAN
Samuel Piette|CM|31|285|CAN
Dani Pereira|CM|26|1983|VEN
Matty Longstaff|CM|26|803|ENG
Wiki Carmona|RW|23|2176|VEN
Fabian Herbers|CM|33|62|GER
Victor Loturi|CM|25|602|CAN
Frankie Amaya|CM|26|759|USA
Иван Лосенко|DM|22|518|UKR
Olger Escobar|AM|20|524|GUA
Prince Owusu|ST|29|2574|GHA
Alexis Sánchez|ST|37|805|CHI
Daniel Ríos|ST|31|190|MEX
Dante Sealy|RW|23|1089|TRI
Хеннадии Сынчук|RW|20|4656|UKR
Noah Streit|LW|21|719|SUI` },
    { id: 'vancouver', name: 'Ванкувер Уайткэпс', city: 'Ванкувер', stadium: 'BC Place', cap: 54500, colors: ['#ffffff', '#00245e'], players: `
Yohei Takaoka|GK|30|1640|JPN
Mathías Laborda|CB|27|1937|URU
Sam Adekugbe|LB|31|118|CAN
Ranko Veselinović|CB|27|1388|SRB
Ralph Priso|CB|24|537|CAN
Belal Halbouni|CB|26|140|SYR
Édier Ocampo|RB|23|4247|COL
Tate Johnson|LB|21|2244|USA
Михаил Гхерасименцов|CB|21|701|MDA
Tristan Blackmon|CB|30|1981|USA
Rui Modesto|RB|27|1281|ANG
Oliver Larraz|DM|25|596|USA
Thomas Müller|AM|37|1732|GER
Andrés Cubas|DM|30|2235|PAR
Aleksa Cvetković|AM|21|299|SRB
Ryan Gauld|AM|30|1974|SCO
Jeevan Badwal|RW|20|1242|CAN
Cheikh Sabaly|RW|27|2102|SEN
Emmanuel Sabbi|RW|28|1534|USA
Bruno Caicedo|LW|21|1497|ECU
Kenji Cabrera|LW|23|1331|PER
Rayan Elloumi|ST|19|1512|TUN
Kwasi Poku|ST|23|351|CAN
Brian White|ST|30|3947|USA
Yadaly Diaby|LW|26|813|GUI` },
    { id: 'st_louis', name: 'Сент-Луис Сити', city: 'Сент-Луис', stadium: 'Energizer Park', cap: 22500, colors: ['#dd004a', '#0a1e2c'], players: `
Zack Campagnolo|GK|18|300|USA
Roman Bürki|GK|35|745|SUI
Colin Welsh|GK|23|300|USA
Benjamin Lundt|GK|31|119|GER
Tahir Reid-Brown|CB|20|606|USA
Mamadou Mbacke|CB|23|288|SEN
Lukas MacNaughton|CB|31|246|CAN
Dante Polvara|CB|26|700|USA
Kyle Hiebert|CB|29|449|CAN
Fallou Fall|CB|22|2058|SEN
Timo Baumgartl|CB|30|298|GER
Jaziel Orozco|CB|22|379|USA
Conrad Wallem|RB|26|1725|NOR
Christopher Durkin|DM|26|1376|USA
Célio Pompeu|AM|26|281|BRA
Tomas Totland|LB|27|510|NOR
Charles-Emile Brunet|CM|22|199|CAN
Carlo Holse|AM|27|4078|DEN
Rafael Santos|LW|28|236|BRA
Alexandru Mățan|AM|27|1200|ROU
Daniel Edelman|DM|23|1844|USA
Miguel Perez|CM|21|470|USA
Tyson Pearce|RW|19|650|USA
Caden Glover|LW|19|797|USA
Sang-Bin Jeong|AM|24|987|KOR
Tomás Ostrák|LW|26|279|CZE
Rafael Navarro|ST|26|6158|BRA
Simon Becher|ST|27|692|USA
Palmer Ault|ST|22|156|USA
Damion Downs|ST|22|5819|USA
Mykhi Joyner|RW|20|853|USA
Brendan McSorley|ST|24|274|USA
Zach Zengue|LW|22|300|USA` },
    { id: 'dallas', name: 'Даллас', city: 'Фриско', stadium: 'Toyota Stadium', cap: 22565, colors: ['#e81f3e', '#2a4076'], players: `
Michael Collodi|GK|25|151|USA
Jonathan Sirois|GK|25|326|CAN
Daniel|GK|32|482|BRA
Eryk Dymora|GK|24|300|USA
Geovane Jesus|RB|25|417|BRA
Osaze Urhoghide|CB|26|1508|ENG
Lalas Abubakar|CB|31|50|GHA
Shaq Moore|CB|29|712|USA
Álvaro Augusto|CB|21|300|BRA
Joshua Torquato|LB|19|931|USA
Sebastien Ibeagha|CB|34|117|NGA
Slade Starnes|CB|23|300|USA
Enzo Newman|RB|20|300|USA
Nolan Norris|CB|21|752|USA
Kaka Scabin|CB|19|300|USA
Ran Binyamin|CM|22|1051|ISR
Patrickson Delgado|AM|23|2157|ECU
Santiago Moreno|AM|26|2043|COL
Christian Cappis|CM|27|394|USA
Herman Johansson|RW|29|1069|SWE
Ramiro|CM|33|133|BRA
Joaquín Valiente|AM|25|1258|URU
Caleb Swann|CM|19|753|USA
Clay Holstad|DM|26|96|USA
Kaick Ferreira|CM|20|300|BRA
Bernard Kamungo|LW|24|954|USA
Daniel Job|LW|21|964|NGA
Petar Musa|ST|28|11603|CRO
Anderson Julio|LW|30|1291|ECU
Ricky Louis|RW|22|212|HAI
Nicholas Simmonds|ST|19|554|JAM
Logan Farrington|ST|24|1651|USA
Sam Sarver|RW|23|393|USA
Benjamin Flowers|LW|15|300|USA
Daniel Baran|LW|20|300|USA
Diego García|LW|20|300|USA` },
    { id: 'san_jose', name: 'Сан-Хосе Эртквейкс', city: 'Сан-Хосе', stadium: 'PayPal Park', cap: 18251, colors: ['#0067b1', '#000000'], players: `
Luca Ulrich|GK|23|300|USA
Angus Gunn|GK|30|709|SCO
Nate Crockford|GK|24|116|USA
Francesco Montali|GK|26|300|USA
Earl Edwards Jr.|GK|34|50|USA
Jamar Ricketts|LB|25|428|USA
David Romney|CB|33|108|USA
Daniel Munie|CB|26|1661|USA
Jack Jasinski|RB|22|207|USA
Reid Roberts|CB|22|670|USA
DeJuan Jones|LB|29|1439|USA
Max Floriani|CB|23|131|USA
Benji Kikanović|RB|26|496|USA
Vítor Costa|LB|32|50|BRA
Edwyn Mendoza|CM|20|300|USA
Rohan Rajagopal|CM|19|300|USA
Ian Harkes|DM|31|243|USA
Niko Tsakiris|AM|21|3437|USA
Ronaldo Vieira|DM|28|242|GNB
Nick Fernandez|AM|24|220|USA
Noel Buck|CM|21|877|USA
Eduard Löwen|AM|29|1989|GER
Beau Leroux|DM|23|2337|USA
Jonathan González|DM|27|124|MEX
Kaedren Spivey|ST|17|300|USA
Paul Marie|RB|31|50|FRA
Ousseni Bouda|RW|26|1254|BFA
Luka Jovanović|ST|21|1476|AUS
Timo Werner|LW|30|2291|GER
Jack Skahan|RW|28|146|USA
Preston Judd|ST|27|1141|USA
Nonso Adimabua|ST|26|149|NGA
Darius Johnson|LW|26|131|GRN` },
    { id: 'houston', name: 'Хьюстон Динамо', city: 'Хьюстон', stadium: 'Shell Energy Stadium', cap: 22661, colors: ['#ff6b00', '#101820'], players: `
Jimmy Maurer|GK|38|50|USA
Blake Gillingham|GK|24|300|USA
Jonathan Bond|GK|33|190|ENG
Logan Erb|GK|22|300|USA
Reese Miller|LB|22|300|USA
Antônio Carlos|CB|33|110|BRA
Marcelo Saracchi|LB|28|1296|URU
Lucas Halter|CB|26|1177|BRA
Lawrence Ennali|LB|24|1222|GER
Franco Negri|LB|31|71|ARG
Agustin Resch|CB|24|411|ARG
Felipe Andrade|RB|24|1510|BRA
Artur|DM|30|1434|BRA
Duane Holmes|RW|31|191|USA
Héctor Herrera|CM|36|168|MEX
Diadie Samassékou|CM|30|465|MLI
Matthew Arana|DM|16|300|MEX
Ibrahim Aliyu|RW|24|634|NGA
Agustín Bouzat|CM|32|360|ARG
Nelson Quiñónes|LW|24|281|COL
Lyle Foster|ST|26|8266|RSA
Nick Markanich|RW|26|186|PHI
Mateusz Bogusz|RW|25|5919|POL
Guilherme Augusto|LW|31|1693|BRA
Duncan McGuire|ST|25|1476|USA` },
    { id: 'lafc', name: 'Лос-Анджелес', city: 'Лос-Анджелес', stadium: 'BMO Stadium', cap: 22937, colors: ['#000000', '#c39e6d'], players: `
Hugo Lloris|GK|39|506|FRA
Thomas Hasal|GK|27|58|CAN
Cabral Carter|GK|22|174|USA
Eddie Segura|LB|29|1020|COL
Ryan Porteous|CB|27|1513|SCO
Sergi Palencia|RB|30|1463|ESP
Lorenzo Dellavalle|CB|22|152|ITA
Ryan Raposo|RB|27|269|CAN
Евген Чеберко|LB|28|483|UKR
Ryan Hollingshead|RB|35|217|USA
Aaron Long|CB|34|367|USA
Christian Díaz|CB|20|300|USA
Kenneth Nielsen|CB|24|140|USA
Nkosi Tafari|CB|29|1006|USA
Igor Jesus|DM|23|2017|BRA
Marco Delgado|CM|31|1454|USA
Timothy Tillman|CM|27|1897|USA
Sergio Vasquez|DM|22|300|ECU
Jude Terry|CM|18|772|USA
Mathieu Choinière|CM|27|561|CAN
Leo Walta|CM|23|2157|FIN
Heung-Min Son|ST|34|8559|KOR
Armindo Sieb|RW|23|2144|GER
Jeremy Ebobisse|ST|29|547|USA
Jacob Shaffelburg|RW|26|1280|CAN
Tyler Boyd|RW|31|127|USA
Thayllon|RW|20|1508|BRA
Tommy Mihalić|LW|23|207|CRO
Denis Bouanga|LW|31|5291|GAB` },
    { id: 'seattle', name: 'Сиэтл Саундерс', city: 'Сиэтл', stadium: 'Lumen Field', cap: 68740, colors: ['#5d9741', '#005595'], players: `
Stefan Frei|GK|40|50|SUI
Andrew Thomas|GK|28|202|USA
Max Anchor|GK|22|284|CAN
Ryan Sailor|CB|27|65|USA
Nouhou Tolo|LB|29|2040|CMR
Álex Roldán|CB|30|1968|SLV
Kee-Hee Kim|CB|37|50|KOR
Jackson Ragen|CB|28|1847|USA
Yeimar Gómez|CB|34|449|COL
Antino Lopez|CB|24|139|USA
Stuart Russell Hawkins|CB|20|300|USA
Gallatin Sandnes|CB|18|300|USA
Kalani Rienzi|RB|24|663|USA
Edson Carli|AM|19|300|USA
Rafael Jauregui|AM|21|308|USA
Cristian Roldan|DM|31|1557|USA
Albert Rusnák|AM|32|1453|SVK
Hassani Dotson|DM|29|1753|USA
Xavi Gnaulati|DM|21|331|USA
Snyder Brunell|DM|19|300|USA
Mark O'Neill|DM|24|300|USA
Nikola Petković|DM|23|673|SRB
Peter Kingston|DM|25|184|USA
Caden Clark|AM|23|707|USA
Dejan Joveljić|ST|27|6772|SRB
Pedro De la Vega|LW|25|1464|ARG
Jordan Morris|RW|31|1938|USA
Paul Rothrock|LW|27|1770|USA
Paul Arriola|LW|31|1244|USA
Danny Musovski|ST|30|1584|MKD
Jesús Ferreira|RW|25|2662|USA
Sebastian Gomez|LW|20|656|USA` },
    { id: 'la_galaxy', name: 'Лос-Анджелес Гэлакси', city: 'Лос-Анджелес', stadium: 'Dignity Health Sports Park', cap: 30510, colors: ['#00245d', '#ffd200'], players: `
Novak Mićović|GK|24|191|SRB
James Marcinkowski|GK|29|300|USA
Brady Scott|GK|27|62|USA
Calegari|RB|24|1553|BRA
Julián Aude|LB|23|1668|ARG
Maya Yoshida|CB|38|60|JPN
Jakob Glesnes|CB|32|1296|NOR
John Nelson|LB|28|503|USA
Justin Haak|CB|25|1624|USA
Chris Rindov|CB|25|136|USA
Emiro Garcés|CB|25|661|COL
Harbor Miller|LW|19|1398|USA
Riley Dalgado|LB|20|300|USA
Sergi Roberto|DM|34|938|ESP
Lucas Sanabria|CM|22|3673|URU
Riqui Puig|CM|27|9869|ESP
Isaiah Parente|CM|26|115|USA
Pablo Ruiz|DM|27|474|ARG
Marco Reus|AM|37|922|GER
Elijah Wynder|DM|23|964|USA
Erik Thommy|LW|32|465|GER
Vicente Garcia|RW|16|300|USA
Troy Elgersma|LW|22|300|USA
Brett Phan|DM|18|300|USA
Kyogo Furuhashi|ST|31|1415|JPN
Hirving Lozano|LW|31|1862|MEX
Robert Taylor|RW|32|509|FIN
Joseph Paintsil|RW|28|4346|GHA
Julian Placias|ST|20|910|USA
João Klauss|ST|29|1316|BRA` },
    { id: 'colorado', name: 'Колорадо Рэпидз', city: 'Коммерс-Сити', stadium: 'Dick\'s Sporting Goods Park', cap: 19734, colors: ['#960a2c', '#9cc2ea'], players: `
Zack Steffen|GK|31|674|USA
Nicholas Hansen|GK|25|255|USA
Bryan Dowd|GK|24|232|USA
Keegan Rosenberry|RB|32|275|USA
Reggie Cannon|RB|28|959|USA
Loïc Williams|CB|24|2252|ESP
Rob Holding|CB|31|1421|ENG
Noah Cobb|CB|21|1025|USA
Miguel Navarro|LB|27|1266|VEN
Kosi Thompson|RB|23|502|CAN
Jackson Travis|LB|22|506|USA
Hamzat Ojediran|DM|22|2156|NGA
Paxten Aaronson|AM|23|7157|USA
Joshua Atencio|DM|24|1496|USA
Wayne Frederick|DM|22|441|TRI
Ali Fadal|CM|22|159|GHA
Alex Harris|RW|21|386|USA
Theodore Ku-DiPietro|LW|24|842|USA
Kimani Stewart|LW|21|195|CAN
Youssef Maziz|AM|28|521|FRA
Morgan Whittaker|RW|25|19578|ENG
Sayed Abu Farkhi|ST|20|2067|ISR
Ibrahim Sadiq|LW|26|1608|GHA
Mamadou Billo Diop|ST|20|868|SEN
Donavan Phillip|ST|21|317|LCA
Darren Yapi|LW|21|3303|USA
Georgi Minoungou|LW|24|1494|BFA` },
    { id: 'rsl', name: 'Реал Солт-Лейк', city: 'Сэнди', stadium: 'America First Field', cap: 21810, colors: ['#b30838', '#013a81'], players: `
Rafael Cabral|GK|36|210|BRA
Max Kerkvliet|GK|21|300|USA
DeAndre Yedlin|CB|33|296|USA
Kobi Henry|CB|22|284|TRI
Lukas Engel|CB|27|1749|DEN
Justen Glad|CB|29|1422|USA
Juan José Arias|CB|22|787|COL
Philip Quinton|CB|26|279|USA
Sam Junqua|CB|29|485|USA
Luis Rivera|CB|18|594|USA
Gio Villa|RB|18|300|USA
Chance Cowell|ST|18|780|USA
Luc De Fougerolles|CB|21|3549|CAN
Liam O'Gara|CM|22|300|USA
Stijn Spierings|CM|30|1009|NED
Juan Sanabria|LB|26|3583|URU
Morgan Guilavogui|AM|28|2270|GUI
Diego Luna|AM|23|6352|USA
Dominik Marczuk|RW|22|1084|POL
Zach Booth|RB|22|162|USA
Colin Guske|DM|19|717|USA
Griffin Dillon|DM|23|204|USA
Dušan Žagar|RW|19|704|SRB
Owen Anderson|LW|19|300|USA
Luca Moisa|CM|18|1134|USA
Antonio Riquelme|AM|18|300|USA
Omar Marquez|CM|18|300|USA
Noel Çalışkan|CM|26|1230|GER
Alexandros Katranis|LW|28|457|GRE
Саба Лобджанидзе|RW|31|1464|GEO
Jason Shokalook|ST|24|224|USA
Emeka Eneli|LW|27|1242|USA
Taylor Booth|LW|25|981|USA
Ariath Piol|ST|22|695|AUS
Sergi Solans|ST|23|816|ESP
Aiden Hezarkhani|RW|19|3286|USA
Lineker Rodrigues dos Santos|ST|24|223|BRA` },
    { id: 'portland', name: 'Портленд Тимберс', city: 'Портленд', stadium: 'Providence Park', cap: 25518, colors: ['#004812', '#d69a00'], players: `
Trey Muse|GK|27|58|USA
Hunter Sulte|GK|24|220|USA
James Pantemis|GK|29|514|CAN
Joel Waterman|CB|30|1259|CAN
Kamal Miller|CB|29|1202|CAN
Brandon Bye|RB|30|1005|USA
Alex Bonetig|CB|24|674|AUS
Ronald Hernández|RB|29|53|VEN
Eric Miller|RB|33|59|USA
Sawyer Jura|RB|20|300|USA
Zac McGraw|CB|29|77|CAN
Finn Surman|CB|23|1548|NZL
Ian Smith|LB|24|188|USA
Jimer Fory|LB|24|1390|COL
Juan Mosquera|RB|24|2062|COL
David Da Costa|AM|25|4752|POR
Cole Bassett|DM|25|2315|USA
Diego Chará|DM|40|72|COL
José Caicedo|CM|24|2812|COL
Eric Izoita|DM|19|954|USA
Joao Ortiz|CM|30|939|ECU
Ariel Lassiter|RW|32|110|CRC
Antony|RW|25|2370|BRA
Vincent Janssen|ST|32|2179|NED
Omir Fernandez|ST|27|581|USA
Alexander Aravena|LW|24|3539|CHI
Gage Guerra|ST|23|104|USA
Kristoffer Velde|LW|27|4308|NOR` },
    { id: 'san_diego', name: 'Сан-Диего', city: 'Сан-Диего', stadium: 'Snapdragon Stadium', cap: 35000, colors: ['#000000', '#00a0df'], players: `
Carlos Dos Santos|GK|26|785|CPV
Pablo Sisniega|GK|31|153|MEX
Marcus Alstrup|GK|22|138|DEN
Duran Ferree|GK|20|1559|USA
William Kumado|RB|24|666|GHA
Dagur Thórhallsson|RB|26|1030|ISL
Kieran Sargeant|LB|23|692|USA
Osvald Gabriel Søe|CB|20|300|DEN
Samuel Vines|LB|27|445|USA
Ian Pilcher|RB|23|214|USA
Manu Duah|CB|21|4366|GHA
Ian Murphy|CB|26|501|USA
Oscar Verhoeven|RB|20|1283|USA
Christopher McVey|CB|29|1294|SWE
Jeppe Tverskov|CM|33|362|DEN
Onni Valakari|CM|27|4323|FIN
Gabriel Pirani|CM|24|866|BRA
Pedro Soma|CM|20|1074|USA
David Vazquez|CM|20|1541|USA
Aníbal Godoy|CM|36|115|PAN
David Mimbang|CM|18|300|CMR
Alejandro Alvarado|CM|23|146|USA
Elias Achouri|LW|27|1860|TUN
Marcus Ingvartsen|ST|30|2208|DEN
Anders Dreyer|RW|28|15701|DEN
Bryan Zamblé|LW|18|966|CIV
Emmanuel Boateng|LW|32|53|GHA
Alex Mighten|LW|24|324|ENG
Amahl Pellegrino|LW|36|81|NOR
Cédric Bakambu|ST|35|725|COD` },
    { id: 'minnesota', name: 'Миннесота Юнайтед', city: 'Сент-Пол', stadium: 'Allianz Field', cap: 19954, colors: ['#231f20', '#8cd2f4'], players: `
Alec Smir|GK|27|50|USA
Drake Callender|GK|29|477|USA
Kayne Rizvanovich|GK|18|782|USA
Nicolás Romero|CB|22|2133|ARG
Michael Boxall|CB|38|106|NZL
Morris Duggan|CB|26|993|GER
D.J. Taylor|RB|29|300|USA
Jefferson Díaz|CB|25|901|COL
Kieran Chandler|LB|21|396|USA
Cherrion Valerius|RB|21|890|NED
Carlos Harvey|CB|26|350|PAN
Kyle Duncan|RB|29|467|JAM
Peter Stroud|DM|24|334|USA
Tomás Chancalay|LW|27|1514|ARG
Anthony Markanich|LB|26|2034|PHI
Wil Trapp|CM|33|139|USA
Bongokuhle Hlongwane|RB|26|1412|RSA
Julian Gressel|CM|32|492|USA
Nectarios Triantis|CM|23|4132|GRE
Joaquín Pereyra|AM|27|4100|ARG
Owen Gene|CM|23|1411|FRA
Kelvin Yeboah|ST|26|6548|ITA
Maurice Malone|ST|26|844|GER
Aziel Jackson|LW|24|1209|USA
Mauricio González|LW|22|1018|COL
Marcus Caldeira|ST|22|360|CAN
Mamadou Dieng|ST|22|175|SEN
Troy Putt|LW|20|477|NZL
Darius Randell|LW|19|740|USA
Jordan Adebayo-Smith|ST|25|136|NGA` },
    { id: 'austin', name: 'Остин', city: 'Остин', stadium: 'Q2 Stadium', cap: 20738, colors: ['#00b140', '#000000'], players: `
Brad Stuver|GK|35|125|USA
Damian Las|GK|24|260|USA
Charlie Farrar|GK|23|300|ENG
Evan Watt|CB|23|300|USA
Riley Thomas|RB|24|300|USA
Mikkel Desler|CB|31|712|DEN
Brendan Hines-Ike|CB|31|483|USA
Олександр Сваток|CB|32|753|UKR
Jon Bell|CB|29|167|JAM
Christopher Applewhite|CB|19|845|USA
Žan Kolmanič|LB|26|298|SVN
Guilherme Biro|CB|26|1371|BRA
Mateja Djordjević|CB|23|894|SRB
Ilie Sánchez|CM|35|58|ESP
Besard Šabović|CM|28|953|SWE
Jon Gallagher|LW|30|1043|IRL
Jorge Alastuey|CM|23|300|ESP
Joseph Rosales|RW|25|1728|HON
Ervin Torres|CM|18|981|USA
Brandon Vázquez|ST|28|4432|USA
Myrto Uzuni|ST|31|2184|ALB
Facundo Torres|RW|26|10794|URU
Christian Ramirez|ST|35|121|USA
Micah Burton|RW|20|616|USA
Przemysław Płacheta|RW|28|770|POL` },
    { id: 'sporting_kc', name: 'Спортинг Канзас-Сити', city: 'Канзас-Сити', stadium: 'Sporting Park', cap: 21650, colors: ['#93b1d7', '#002f65'], players: `
John Pulskamp|GK|25|208|USA
Jack Kortkamp|GK|18|300|USA
Stefan Cleveland|GK|32|72|USA
Ian James|CB|18|1168|USA
Moisés Mosquera|CB|25|1771|COL
Or Blorian|CB|26|1594|ISR
Jacob Davis|RB|24|1217|USA
Justin Reynolds|RB|22|339|USA
Jansen Miller|CB|24|326|USA
Emir Karić|LB|29|763|BIH
Wyatt Meyer|CB|24|201|USA
Diego Borges|CB|21|300|BRA
Jayden Reid|LB|25|208|USA
Lasse Berg Johnsen|CM|27|1802|NOR
Calvin Harris|LW|26|377|ENG
Jacob Bartlett|CM|21|1362|USA
Kwaku Agyabeng|CM|20|372|GHA
Zorhan Bassong|CM|27|742|CAN
Rubén Ramos|AM|19|630|USA
Owen Wolff|LW|21|4551|USA
Магомед-шапи Сулейманов|RW|26|1318|RUS
Capita|LW|24|1535|ANG
André Luiz|RW|24|6120|BRA
Stephen Afrifa|ST|25|229|CAN
Taylor Calheira|ST|24|300|USA
Seymour Reid|ST|18|1180|JAM` },
  ],
});
