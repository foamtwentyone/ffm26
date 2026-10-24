// Премьер-лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'eng', name: 'Премьер-лига', short: 'АПЛ', country: 'ENG', tier: 1, weekday: 6,
  autumn: { from: '08-15', rounds: 19 }, spring: { from: '01-02', rounds: 19 },
  ticket: 45, prize: [60000, 57650, 55250, 52900, 50550, 48150, 45800, 43400, 41050, 38700, 36300, 33950, 31600, 29200, 26850, 24450, 22100, 19750, 17350, 15000],
  teams: [
    { id: 'arsenal', name: 'Арсенал', city: 'Лондон', stadium: 'Emirates Stadium', cap: 60704, colors: ['#ef0107', '#ffffff'], players: `
David Raya|GK|31|30000|ESP
Illan Meslier|GK|26|6000|FRA
Kepa Arrizabalaga|GK|32|5000|ESP
Gabriel|CB|28|75000|BRA
Piero Hincapié|CB|24|50000|ECU
Ezri Konsa|CB|29|50000|ENG
Cristhian Mosquera|CB|22|40000|ESP
Riccardo Calafiori|LB|24|65000|ITA
Jurriën Timber|RB|25|70000|NED
Ben White|RB|29|35000|ENG
Martín Zubimendi|DM|27|65000|ESP
Myles Lewis-Skelly|DM|20|65000|ENG
Declan Rice|CM|27|120000|ENG
Bruno Guimarães|CM|28|75000|BRA
Mikel Merino|CM|30|25000|ESP
Eberechi Eze|AM|28|60000|ENG
Bukayo Saka|RW|25|110000|ENG
Max Dowman|RW|16|50000|ENG
Noni Madueke|RW|24|45000|ENG
Kai Havertz|ST|27|60000|GER
Viktor Gyökeres|ST|28|55000|SWE` },
    { id: 'aston_villa', name: 'Астон Вилла', city: 'Бирмингем', stadium: 'Villa Park', cap: 43205, colors: ['#670e36', '#95bfe5'], players: `
Zion Suzuki|GK|24|30000|JPN
Marco Bizot|GK|35|1500|NED
James Wright|GK|21|200|ENG
Pau Torres|CB|29|20000|ESP
Modou Kéba Cissé|CB|21|6000|SEN
Victor Lindelöf|CB|32|5000|SWE
Tyrone Mings|CB|33|3000|ENG
Matty Cash|RB|29|22000|POL
Boubacar Kamara|DM|26|50000|FRA
Lamare Bogarde|DM|22|18000|NED
João Gomes|CM|25|40000|BRA
Leon Goretzka|CM|31|10000|GER
Ross Barkley|CM|32|4000|ENG
Johan Manzambi|AM|21|65000|SUI
Emiliano Buendía|AM|29|16000|ARG
Alejandro Garnacho|LW|22|22000|ARG
George Hemmings|LW|19|15000|ENG
Ibrahim Mbaye|RW|18|50000|SEN
Alysson|RW|20|15000|BRA
Nicolas Jackson|ST|25|45000|SEN
Brian Madjo|ST|17|22000|ENG
Tammy Abraham|ST|29|18000|ENG` },
    { id: 'bournemouth', name: 'Борнмут', city: 'Борнмут', stadium: 'Vitality Stadium', cap: 12357, colors: ['#da291c', '#000000'], players: `
Djordje Petrović|GK|27|28000|SRB
Michele Di Gregorio|GK|29|8000|ITA
James Hill|CB|24|30000|ENG
António Silva|CB|22|30000|POR
Bafodé Diakité|CB|25|22000|FRA
Adrien Truffert|LB|24|35000|FRA
Julio Soler|LB|21|6000|ARG
Tyler Adams|DM|27|30000|USA
Alex Tóth|CM|21|12000|HUN
Lewis Cook|CM|29|11000|ENG
Ryan Christie|CM|31|8000|SCO
Marcus Tavernier|AM|27|30000|ENG
Justin Kluivert|AM|27|25000|NED
Amine Adli|LW|26|20000|MAR
Rayan|RW|20|60000|BRA
Ben Gannon-Doak|RW|20|15000|SCO
David Brooks|RW|29|12000|WAL
Evanilson|ST|27|35000|BRA
Álvaro Rodríguez|ST|22|20000|URU` },
    { id: 'brentford', name: 'Брентфорд', city: 'Лондон', stadium: 'Gtech Community Stadium', cap: 17250, colors: ['#e30613', '#ffffff'], players: `
Caoimhín Kelleher|GK|27|32000|IRL
Hákon Valdimarsson|GK|25|2500|ISL
Ellery Balcombe|GK|27|400|ENG
Sepp van den Berg|CB|24|32000|NED
Kristoffer Ajer|CB|28|25000|NOR
Jannik Schuster|CB|20|22000|AUT
Benjamin Fredrick|CB|21|600|NGA
El Hadji Malick Diouf|LB|21|35000|SEN
Keane Lewis-Potter|LB|25|30000|ENG
Rico Henry|LB|29|10000|JAM
Michael Kayode|RB|22|40000|ITA
Aaron Hickey|RB|24|20000|SCO
Mamadou Sangaré|CM|24|50000|MLI
Mathias Jensen|CM|30|8000|DEN
Mikkel Damsgaard|AM|26|30000|DEN
Fábio Carvalho|AM|24|8000|POR
Jaidon Anthony|LW|26|20000|ENG
Gustavo Nunes|LW|20|6000|BRA
Dango Ouattara|RW|24|35000|BFA
Igor Thiago|ST|25|65000|BRA
Callum Wilson|ST|34|4000|ENG` },
    { id: 'brighton', name: 'Брайтон', city: 'Брайтон', stadium: 'American Express Stadium', cap: 32176, colors: ['#0057b8', '#ffffff'], players: `
Bart Verbruggen|GK|24|40000|NED
Jason Steele|GK|36|500|ENG
Tom McGill|GK|26|500|CAN
Luka Vuskovic|CB|19|65000|CRO
Pascal Struijk|CB|27|22000|NED
Olivier Boscagli|CB|28|20000|FRA
Michael Svoboda|CB|28|5000|AUT
Ferdi Kadıoğlu|LB|27|40000|TUR
Maxim De Cuyper|LB|25|30000|BEL
Jaouen Hadjam|LB|23|10000|ALG
Mats Wieffer|RB|26|25000|NED
Costinha|RB|26|10000|POR
Jack Hinshelwood|DM|21|35000|ENG
Chema Andrés|DM|21|24000|ESP
Yasin Ayari|CM|23|45000|SWE
Diego Gómez|CM|23|30000|PAR
Malick Yalcouyé|CM|20|22000|CIV
Matt O'Riley|CM|25|18000|DEN
Pascal Groß|CM|35|2500|GER
Ibrahim Osman|LW|21|12000|GHA
Yankuba Minteh|RW|22|55000|GAM
Charalampos Kostoulas|ST|19|40000|GRE
Georginio Rutter|ST|24|30000|FRA
Promise David|ST|25|20000|CAN` },
    { id: 'chelsea', name: 'Челси', city: 'Лондон', stadium: 'Stamford Bridge', cap: 40044, colors: ['#034694', '#ffffff'], players: `
Mike Penders|GK|21|25000|BEL
Gabriel Slonina|GK|22|3000|USA
Teddy Sharman-Lowe|GK|23|500|ENG
Maxence Lacroix|CB|26|60000|FRA
Levi Colwill|CB|23|50000|ENG
Wesley Fofana|CB|25|32000|FRA
Josh Acheampong|CB|20|30000|ENG
Aarón Anselmino|CB|21|10000|ARG
Jorrel Hato|LB|20|45000|NED
Marco Palestra|RB|21|45000|ITA
Malo Gusto|RB|23|35000|FRA
Moisés Caicedo|DM|24|100000|ECU
Roméo Lavia|DM|22|25000|BEL
Valentín Barco|CM|22|40000|ARG
Mahdi Nicoll-Jazuli|CM|16|2000|ENG
Jordan Henderson|CM|36|1200|ENG
Morgan Rogers|AM|24|120000|ENG
Cole Palmer|AM|24|110000|ENG
Estêvão|RW|19|80000|BRA
Pedro Neto|RW|26|60000|POR
Geovany Quenda|RW|19|42000|POR
João Pedro|ST|25|100000|BRA
Danny Welbeck|ST|35|3000|ENG` },
    { id: 'coventry', name: 'Ковентри Сити', city: 'Ковентри', stadium: 'Coventry Building Society Arena', cap: 32609, colors: ['#59cbe8', '#ffffff'], players: `
Carl Rushworth|GK|25|22000|ENG
Dan Bentley|GK|33|800|ENG
Ben Wilson|GK|34|300|ENG
Bobby Thomas|CB|25|20000|ENG
Ethan Pinnock|CB|33|3000|JAM
Stephen Mfuni|CB|18|3000|ENG
Joel Latibeaudiere|CB|26|3000|JAM
Jay Dasilva|LB|28|12000|WAL
Jake Bidwell|LB|33|600|ENG
Milan van Ewijk|RB|26|22000|NED
Kaine Kesler-Hayden|RB|24|3000|ENG
Caleb Yirenkyi|CM|20|22000|GHA
Victor Torp|CM|27|14000|DEN
Gustavo Hamer|CM|29|11000|NED
Frank Onyeka|CM|28|8000|NGA
Jack Rudoni|AM|25|20000|ENG
Ephron Mason-Clark|LW|27|16000|JAM
Yann Gboho|LW|25|15000|CIV
Loum Tchaouna|RW|23|18000|FRA
Tatsuhiro Sakamoto|RW|30|4500|JPN
Sidiki Chérif|ST|19|22000|FRA
Brandon Thomas-Asante|ST|27|16000|GHA
Ellis Simms|ST|25|12000|ENG
Taiwo Awoniyi|ST|29|8000|NGA` },
    { id: 'crystal_palace', name: 'Кристал Пэлас', city: 'Лондон', stadium: 'Selhurst Park', cap: 25486, colors: ['#1b458f', '#c4122e'], players: `
Walter Benítez|GK|33|4000|ARG
Remi Matthews|GK|32|200|ENG
Honest Ahanor|CB|18|40000|ITA
Jaydee Canvot|CB|20|35000|FRA
Chris Richards|CB|26|28000|USA
Axel Disasi|CB|28|15000|FRA
Takehiro Tomiyasu|CB|27|5000|JPN
Tyrick Mitchell|LB|27|25000|ENG
Ben Chilwell|LB|29|10000|ENG
Anan Khalaili|RB|22|23000|ISR
Óscar Mingueza|RB|27|15000|ESP
Adam Wharton|DM|22|75000|ENG
Cheick Doucouré|DM|26|7000|MLI
Jefferson Lerma|DM|31|6000|COL
Quinten Timber|CM|25|25000|NED
Daichi Kamada|CM|30|10000|JPN
Will Hughes|CM|31|5000|ENG
Yéremy Pino|LW|24|30000|ESP
Dwight McNeil|LW|26|22000|ENG
Ismaïla Sarr|RW|28|45000|SEN
Darío Osorio|RW|22|20000|CHI
Evann Guessand|RW|25|20000|CIV
Zavier Gozo|RW|19|12000|USA
Jørgen Strand Larsen|ST|26|40000|NOR
Jean-Philippe Mateta|ST|29|30000|FRA
Eddie Nketiah|ST|27|13000|ENG` },
    { id: 'everton', name: 'Эвертон', city: 'Ливерпуль', stadium: 'Hill Dickinson Stadium', cap: 52769, colors: ['#003399', '#ffffff'], players: `
Jordan Pickford|GK|32|13000|ENG
Mark Travers|GK|27|3000|IRL
Tom King|GK|31|100|WAL
Jarrad Branthwaite|CB|24|45000|ENG
James Tarkowski|CB|33|5000|ENG
Michael Keane|CB|33|3000|ENG
Виталий Мыколенко|LB|27|25000|UKR
Jake O'Brien|RB|25|18000|IRL
Ainsley Maitland-Niles|RB|29|10000|ENG
James Garner|DM|25|50000|ENG
Hayden Hackney|DM|24|32000|ENG
Christian Nørgaard|DM|32|5000|DEN
Harrison Armstrong|CM|19|30000|ENG
Merlin Röhl|CM|24|20000|GER
Charly Alcaraz|CM|23|15000|ARG
Kiernan Dewsbury-Hall|AM|28|40000|ENG
Tyrique George|LW|20|25000|ENG
Jack Grealish|LW|31|20000|ENG
Brennan Johnson|RW|25|25000|WAL
Tyler Dibling|RW|20|17000|ENG
Thierno Barry|ST|24|35000|FRA
Braiden Graham|ST|18|700|NIR` },
    { id: 'fulham', name: 'Фулхэм', city: 'Лондон', stadium: 'Craven Cottage', cap: 29589, colors: ['#ffffff', '#000000'], players: `
Bernd Leno|GK|34|6000|GER
Benjamin Lecomte|GK|35|800|FRA
Alex Borto|GK|22|500|USA
Calvin Bassey|CB|26|28000|NGA
David Affengruber|CB|25|20000|AUT
Joachim Andersen|CB|30|16000|DEN
Jorge Cuenca|CB|26|8000|ESP
Antonee Robinson|LB|29|22000|USA
Timothy Castagne|RB|30|8000|BEL
Kenny Tete|RB|31|6000|NED
Sander Berge|DM|28|25000|NOR
Shea Charles|DM|22|25000|NIR
Alex Iwobi|DM|30|20000|NGA
Hugo Larsson|CM|22|23000|SWE
Manuel Ángel|CM|22|5000|ESP
Harrison Reed|CM|31|1300|ENG
Josh King|AM|19|40000|ENG
Emile Smith Rowe|AM|26|17000|ENG
César Palacios|AM|21|12000|ESP
Kevin|LW|23|25000|BRA
Oscar Bobb|RW|23|28000|NOR
Gonzalo García|ST|22|35000|ESP
Rodrigo Muniz|ST|25|20000|BRA
Jonah Kusi-Asare|ST|19|5000|SWE` },
    { id: 'hull', name: 'Халл Сити', city: 'Халл', stadium: 'MKM Stadium', cap: 25586, colors: ['#f5a12d', '#000000'], players: `
Konstantinos Tzolakis|GK|23|22000|GRE
Dillon Phillips|GK|31|200|ENG
Nobel Mendy|CB|22|20000|SEN
Lucas Herrington|CB|19|15000|AUS
John Egan|CB|34|1500|IRL
Paddy McNair|CB|31|1500|NIR
Semi Ajayi|CB|32|1000|NGA
Ryan Giles|LB|26|16000|ENG
Matt Targett|LB|31|3000|ENG
Brooke Norton-Cuffy|RB|22|15000|ENG
Regan Slater|DM|27|10000|ENG
Christos Mouzakitis|CM|19|20000|GRE
Tim Iroegbunam|CM|23|15000|ENG
Jens Hjertø-Dahl|CM|20|10000|NOR
Hidemasa Morita|CM|31|6000|JPN
Matt Crooks|CM|32|1000|ENG
Sorba Thomas|LW|27|14000|WAL
Elliot Stroud|LW|24|8000|SWE
Mohamed Belloumi|RW|24|18000|ALG
Mohamed-Ali Cho|RW|22|15000|FRA
Abdülkadir Ömür|RW|27|1500|TUR
Robinio Vaz|ST|19|18000|FRA
Ilyas Ansah|ST|21|15000|GER
Joe Gelhardt|ST|24|14000|ENG
Oli McBurnie|ST|30|7000|SCO` },
    { id: 'ipswich', name: 'Ипсвич Таун', city: 'Ипсвич', stadium: 'Portman Road', cap: 30056, colors: ['#0044a9', '#ffffff'], players: `
Kjell Scherpen|GK|26|12000|NED
Christian Walton|GK|30|2500|ENG
Alex Palmer|GK|30|1000|ENG
David Button|GK|37|50|ENG
Jacob Greaves|CB|26|17000|ENG
Issa Diop|CB|29|10000|MAR
Cédric Kipré|CB|29|3000|CIV
Leif Davis|LB|26|25000|ENG
Abdoul Ouattara|RB|21|18000|CIV
Darnell Furlong|RB|30|2500|ENG
Florentino|DM|27|16000|POR
Azor Matusiwa|DM|28|12000|NED
Exequiel Palacios|CM|28|25000|ARG
Marcelino Núñez|CM|26|14000|CHI
Saša Lukić|CM|30|10000|SRB
Jack Taylor|CM|28|2200|IRL
Julio Enciso|AM|22|30000|PAR
Anis Mehmeti|AM|25|13000|ALB
Jaden Philogene|LW|24|20000|ENG
Jack Clarke|LW|25|20000|ENG
Daizen Maeda|LW|29|13000|JPN
Abdul Fatawu|RW|22|23000|GHA
Sindre Walle Egeli|RW|20|15000|NOR
Kasey McAteer|RW|24|10000|IRL
Emersonn|ST|22|25000|BRA
Zian Flemming|ST|28|18000|NED
Chuba Akpom|ST|31|3500|ENG` },
    { id: 'leeds', name: 'Лидс Юнайтед', city: 'Лидс', stadium: 'Elland Road', cap: 37645, colors: ['#ffffff', '#1d428a'], players: `
James Trafford|GK|24|35000|ENG
Michael Zetterer|GK|31|4000|GER
Alex Cairns|GK|33|50|ENG
Tarik Muharemović|CB|23|40000|BIH
Jaka Bijol|CB|27|20000|SVN
Nico Elvedi|CB|30|12000|SUI
Gabriel Gudmundsson|LB|27|25000|SWE
Melvin Bard|LB|25|10000|FRA
Jayden Bogle|RB|26|18000|ENG
James Justin|RB|28|16000|ENG
Anton Stach|DM|27|32000|GER
Ilia Gruev|DM|26|12000|BUL
Ao Tanaka|CM|28|15000|JPN
Sean Longstaff|CM|28|12000|ENG
Brenden Aaronson|AM|26|22000|USA
Noah Okafor|LW|26|32000|SUI
Jean-Mattéo Bahoya|LW|21|25000|FRA
Harry Wilson|RW|29|22000|WAL
Daniel James|RW|28|10000|WAL
Dominic Calvert-Lewin|ST|29|25000|ENG
Lukas Nmecha|ST|27|10000|GER` },
    { id: 'liverpool', name: 'Ливерпуль', city: 'Ливерпуль', stadium: 'Anfield', cap: 61276, colors: ['#c8102e', '#ffffff'], players: `
Гиорги Мамардашвили|GK|26|28000|GEO
Alisson|GK|34|15000|BRA
Freddie Woodman|GK|29|3000|ENG
Harvey Davies|GK|23|500|ENG
Jérémy Jacquet|CB|21|65000|FRA
Ronald Araújo|CB|27|25000|URU
Joe Gomez|CB|29|11000|ENG
Milos Kerkez|LB|22|35000|HUN
Konstantinos Tsimikas|LB|30|4500|GRE
Luke Chambers|LB|22|1000|ENG
Ryan Gravenberch|DM|24|75000|NED
Alexis Mac Allister|CM|27|70000|ARG
Trey Nyoni|CM|19|18000|ENG
James McConnell|CM|22|1500|ENG
Florian Wirtz|AM|23|85000|GER
Bradley Barcola|LW|24|100000|FRA
Cody Gakpo|LW|27|75000|NED
Rio Ngumoha|LW|18|50000|ENG
Víctor Muñoz|LW|23|40000|ESP
Alexander Isak|ST|27|90000|SWE
Lewis Koumas|ST|21|8000|WAL
Jayden Danns|ST|20|800|ENG` },
    { id: 'man_city', name: 'Манчестер Сити', city: 'Манчестер', stadium: 'Etihad Stadium', cap: 61470, colors: ['#6cabdd', '#1c2c5b'], players: `
Gianluigi Donnarumma|GK|27|45000|ITA
Gerónimo Rulli|GK|34|5000|ARG
Marcus Bettinelli|GK|34|300|ENG
Marc Guéhi|CB|26|75000|ENG
Абдукодир Хусанов|CB|22|50000|UZB
Vitor Reis|CB|20|30000|BRA
Josko Gvardiol|LB|24|75000|CRO
Nico O'Reilly|LB|21|70000|ENG
Rayan Aït-Nouri|LB|25|35000|ALG
Matheus Nunes|RB|28|45000|POR
Rico Lewis|RB|21|25000|ENG
Elliot Anderson|DM|23|120000|ENG
Ayyoub Bouaddi|DM|19|90000|MAR
Enzo Fernández|CM|25|120000|ARG
Mateo Kovacic|CM|32|10000|CRO
Rayan Cherki|AM|23|110000|FRA
Phil Foden|AM|26|65000|ENG
Jérémy Doku|LW|24|75000|BEL
Iliman Ndiaye|LW|26|65000|SEN
Allan|RW|22|30000|BRA
Ryan McAidoo|RW|18|8000|ENG
Erling Haaland|ST|26|220000|NOR` },
    { id: 'man_utd', name: 'Манчестер Юнайтед', city: 'Манчестер', stadium: 'Old Trafford', cap: 74244, colors: ['#da291c', '#000000'], players: `
Senne Lammens|GK|24|35000|BEL
Karl Darlow|GK|36|200|WAL
Tom Heaton|GK|40|100|ENG
Dermot Mee|GK|23|500|NIR
Lisandro Martínez|CB|28|45000|ARG
Ayden Heaven|CB|20|30000|ENG
Matthijs de Ligt|CB|27|25000|NED
Harry Maguire|CB|33|8000|ENG
Luke Shaw|LB|31|8000|ENG
Harry Amass|LB|19|5000|ENG
Diogo Dalot|RB|27|30000|POR
Carlos Baleba|DM|22|65000|CMR
Andrey Santos|DM|22|45000|BRA
Kobbie Mainoo|CM|21|75000|ENG
Youri Tielemans|CM|29|40000|BEL
Tyler Fletcher|CM|19|2500|SCO
Mason Mount|AM|27|25000|ENG
Marcus Rashford|LW|28|35000|ENG
Patrick Dorgu|LW|21|35000|DEN
Bryan Mbeumo|RW|27|75000|CMR
Amad Diallo|RW|24|45000|CIV
Shea Lacey|RW|19|12000|ENG
Matheus Cunha|ST|27|75000|BRA
Benjamin Šeško|ST|23|75000|SVN
Joshua Zirkzee|ST|25|20000|NED` },
    { id: 'newcastle', name: 'Ньюкасл', city: 'Ньюкасл', stadium: 'St James\' Park', cap: 52305, colors: ['#241f20', '#ffffff'], players: `
Lukas Hornicek|GK|24|27000|CZE
Ewen Jaouen|GK|20|18000|FRA
Nick Pope|GK|34|3000|ENG
Mark Gillespie|GK|34|100|ENG
Malick Thiaw|CB|25|50000|GER
Sven Botman|CB|26|35000|NED
Fabian Schär|CB|34|3000|SUI
Lewis Hall|LB|22|55000|ENG
Amar Dedic|RB|24|30000|BIH
Nico González|DM|24|50000|ESP
Aladji Bamba|DM|20|25000|FRA
Jacob Ramsey|CM|25|35000|ENG
Lewis Miley|CM|20|30000|ENG
Sean Steur|CM|18|22000|NED
Joe Willock|CM|27|18000|ENG
Bazoumana Touré|LW|20|50000|CIV
Harvey Barnes|LW|28|35000|ENG
Anthony Elanga|RW|24|35000|SWE
Jacob Murphy|RW|31|10000|ENG
Yoane Wissa|ST|30|25000|COD` },
    { id: 'nottingham', name: 'Ноттингем Форест', city: 'Ноттингем', stadium: 'The City Ground', cap: 31042, colors: ['#dd0000', '#ffffff'], players: `
John Victor|GK|30|3500|BRA
Matz Sels|GK|34|3500|BEL
Steven Benda|GK|28|1000|GER
Murillo|CB|24|50000|BRA
Ousmane Diomande|CB|22|42000|CIV
Nikola Milenković|CB|29|28000|SRB
Jair Cunha|CB|21|25000|BRA
Neco Williams|LB|25|32000|WAL
Luca Netz|LB|23|8000|GER
Daniel Muñoz|RB|30|22000|COL
Ola Aina|RB|30|18000|NGA
Ibrahim Sangaré|DM|28|20000|CIV
Xaver Schlager|CM|29|15000|AUT
Nicolás Domínguez|CM|28|13000|ARG
Morgan Gibbs-White|AM|26|80000|ENG
James McAtee|AM|24|22000|ENG
Callum Hudson-Odoi|LW|25|25000|ENG
Dan Ndoye|RW|25|35000|SUI
Liam Delap|ST|23|40000|ENG
Arnaud Kalimuendo|ST|24|20000|FRA
Chris Wood|ST|34|4000|NZL` },
    { id: 'sunderland', name: 'Сандерленд', city: 'Сандерленд', stadium: 'Stadium of Light', cap: 49000, colors: ['#eb172b', '#ffffff'], players: `
Robin Roefs|GK|23|30000|NED
Melker Ellborg|GK|23|3000|SWE
Simon Moore|GK|36|75|ENG
Dan Ballard|CB|27|25000|NIR
Kevin Danso|CB|28|20000|AUT
Omar Alderete|CB|29|10000|PAR
Luke O'Nien|CB|31|700|ENG
Aji Alese|CB|25|700|ENG
Reinildo Mandava|LB|32|4000|MOZ
Trai Hume|RB|24|22000|NIR
Nordi Mukiele|RB|28|18000|FRA
Thomas Meunier|RB|35|1500|BEL
Jules Ahoka|DM|20|7000|COD
Noah Sadiki|CM|21|40000|COD
Habib Diarra|CM|22|35000|SEN
Enzo Le Fée|CM|26|30000|FRA
Alan Browne|CM|31|1300|IRL
Chris Rigg|AM|19|25000|ENG
Malick Fofana|LW|21|30000|BEL
Nilson Angulo|LW|23|20000|ECU
Romaine Mundle|LW|23|5000|ENG
Тимур Тутеров|LW|21|300|UKR
Chemsdine Talbi|RW|21|25000|MAR
Jocelin Ta Bi|RW|21|2500|CIV
Abdoullah Ba|RW|23|1500|MTN
Wilson Isidor|ST|26|18000|HAI` },
    { id: 'tottenham', name: 'Тоттенхэм', city: 'Лондон', stadium: 'Tottenham Hotspur Stadium', cap: 62850, colors: ['#ffffff', '#132257'], players: `
Antonín Kinský|GK|23|18000|CZE
Martin Dúbravka|GK|37|500|SVK
Brandon Austin|GK|27|500|ENG
Jan Paul van Hecke|CB|26|60000|NED
Marcos Senesi|CB|29|20000|ARG
Tosin Adarabioyo|CB|29|13000|ENG
Ben Davies|CB|33|3000|WAL
Destiny Udogie|LB|23|25000|ITA
Andrew Robertson|LB|32|7000|SCO
Pedro Porro|RB|27|45000|ESP
Archie Gray|RB|20|35000|ENG
Sandro Tonali|DM|26|90000|ITA
Rodrigo Bentancur|DM|29|17000|URU
Mateus Fernandes|CM|22|70000|POR
Lucas Bergvall|CM|20|40000|SWE
Conor Gallagher|CM|26|32000|ENG
James Maddison|AM|29|17000|ENG
Dejan Kulusevski|AM|26|13000|SWE
Sávio|LW|22|50000|BRA
Mathys Tel|LW|21|22000|FRA
Mohammed Kudus|RW|26|45000|GHA
Omar Marmoush|ST|27|50000|EGY
Dominic Solanke|ST|29|25000|ENG
Richarlison|ST|29|15000|BRA` },
  ],
});
