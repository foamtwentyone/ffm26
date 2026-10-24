// Премьер-лига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'eng', name: 'Премьер-лига', short: 'АПЛ', country: 'ENG', tier: 1, weekday: 6,
  autumn: { from: '08-15', rounds: 19 }, spring: { from: '01-02', rounds: 19 },
  ticket: 45, prize: [60000, 57650, 55250, 52900, 50550, 48150, 45800, 43400, 41050, 38700, 36300, 33950, 31600, 29200, 26850, 24450, 22100, 19750, 17350, 15000],
  teams: [
    { id: 'arsenal', name: 'Арсенал', city: 'Лондон', stadium: 'Emirates Stadium', cap: 60704, colors: ['#ef0107', '#ffffff'], players: `
David Raya|GK|31|30000|ESP|2028
Illan Meslier|GK|26|6000|FRA|2028
Kepa Arrizabalaga|GK|32|5000|ESP|2028
Gabriel|CB|28|75000|BRA|2029
Piero Hincapié|CB|24|50000|ECU|2031
Ezri Konsa|CB|29|50000|ENG|2030
Cristhian Mosquera|CB|22|40000|ESP|2030
Riccardo Calafiori|LB|24|65000|ITA|2029
Jurriën Timber|RB|25|70000|NED|2028
Ben White|RB|29|35000|ENG|2028
Martín Zubimendi|DM|27|65000|ESP|2030
Myles Lewis-Skelly|DM|20|65000|ENG|2030
Declan Rice|CM|27|120000|ENG|2028
Bruno Guimarães|CM|28|75000|BRA|2030
Mikel Merino|CM|30|25000|ESP|2028
Eberechi Eze|AM|28|60000|ENG|2029
Bukayo Saka|RW|25|110000|ENG|2030
Max Dowman|RW|16|50000|ENG
Noni Madueke|RW|24|45000|ENG|2030
Kai Havertz|ST|27|60000|GER|2028
Viktor Gyökeres|ST|28|55000|SWE|2030` },
    { id: 'aston_villa', name: 'Астон Вилла', city: 'Бирмингем', stadium: 'Villa Park', cap: 43205, colors: ['#670e36', '#95bfe5'], players: `
Zion Suzuki|GK|24|30000|JPN|2031
Marco Bizot|GK|35|1500|NED|2027
James Wright|GK|21|200|ENG
Pau Torres|CB|29|20000|ESP|2028
Modou Kéba Cissé|CB|21|6000|SEN|2029
Victor Lindelöf|CB|32|5000|SWE|2027
Tyrone Mings|CB|33|3000|ENG|2027
Matty Cash|RB|29|22000|POL|2029
Boubacar Kamara|DM|26|50000|FRA|2030
Lamare Bogarde|DM|22|18000|NED|2028
João Gomes|CM|25|40000|BRA|2031
Leon Goretzka|CM|31|10000|GER|2028
Ross Barkley|CM|32|4000|ENG|2027
Johan Manzambi|AM|21|65000|SUI|2031
Emiliano Buendía|AM|29|16000|ARG|2027
Alejandro Garnacho|LW|22|22000|ARG|2027
George Hemmings|LW|19|15000|ENG
Ibrahim Mbaye|RW|18|50000|SEN|2031
Alysson|RW|20|15000|BRA|2031
Nicolas Jackson|ST|25|45000|SEN|2031
Brian Madjo|ST|17|22000|ENG|2032
Tammy Abraham|ST|29|18000|ENG|2030` },
    { id: 'bournemouth', name: 'Борнмут', city: 'Борнмут', stadium: 'Vitality Stadium', cap: 12357, colors: ['#da291c', '#000000'], players: `
Djordje Petrović|GK|27|28000|SRB|2030
Michele Di Gregorio|GK|29|8000|ITA|2027
James Hill|CB|24|30000|ENG|2029
António Silva|CB|22|30000|POR|2031
Bafodé Diakité|CB|25|22000|FRA|2030
Adrien Truffert|LB|24|35000|FRA|2030
Julio Soler|LB|21|6000|ARG|2029
Tyler Adams|DM|27|30000|USA|2028
Alex Tóth|CM|21|12000|HUN|2031
Lewis Cook|CM|29|11000|ENG|2028
Ryan Christie|CM|31|8000|SCO|2029
Marcus Tavernier|AM|27|30000|ENG|2029
Justin Kluivert|AM|27|25000|NED|2028
Amine Adli|LW|26|20000|MAR|2030
Rayan|RW|20|60000|BRA|2031
Ben Gannon-Doak|RW|20|15000|SCO|2030
David Brooks|RW|29|12000|WAL|2029
Evanilson|ST|27|35000|BRA|2029
Álvaro Rodríguez|ST|22|20000|URU|2031` },
    { id: 'brentford', name: 'Брентфорд', city: 'Лондон', stadium: 'Gtech Community Stadium', cap: 17250, colors: ['#e30613', '#ffffff'], players: `
Caoimhín Kelleher|GK|27|32000|IRL|2030
Hákon Valdimarsson|GK|25|2500|ISL|2030
Ellery Balcombe|GK|27|400|ENG|2029
Sepp van den Berg|CB|24|32000|NED|2029
Kristoffer Ajer|CB|28|25000|NOR|2030
Jannik Schuster|CB|20|22000|AUT|2027
Benjamin Fredrick|CB|21|600|NGA|2030
El Hadji Malick Diouf|LB|21|35000|SEN|2031
Keane Lewis-Potter|LB|25|30000|ENG|2031
Rico Henry|LB|29|10000|JAM|2027
Michael Kayode|RB|22|40000|ITA|2032
Aaron Hickey|RB|24|20000|SCO|2028
Mamadou Sangaré|CM|24|50000|MLI|2031
Mathias Jensen|CM|30|8000|DEN|2027
Mikkel Damsgaard|AM|26|30000|DEN|2030
Fábio Carvalho|AM|24|8000|POR|2029
Jaidon Anthony|LW|26|20000|ENG|2030
Gustavo Nunes|LW|20|6000|BRA|2030
Dango Ouattara|RW|24|35000|BFA|2030
Igor Thiago|ST|25|65000|BRA|2031
Callum Wilson|ST|34|4000|ENG|2027` },
    { id: 'brighton', name: 'Брайтон', city: 'Брайтон', stadium: 'American Express Stadium', cap: 32176, colors: ['#0057b8', '#ffffff'], players: `
Bart Verbruggen|GK|24|40000|NED|2028
Jason Steele|GK|36|500|ENG|2027
Tom McGill|GK|26|500|CAN|2027
Luka Vuskovic|CB|19|65000|CRO|2031
Pascal Struijk|CB|27|22000|NED|2031
Olivier Boscagli|CB|28|20000|FRA|2030
Michael Svoboda|CB|28|5000|AUT|2030
Ferdi Kadıoğlu|LB|27|40000|TUR|2028
Maxim De Cuyper|LB|25|30000|BEL|2030
Jaouen Hadjam|LB|23|10000|ALG|2031
Mats Wieffer|RB|26|25000|NED|2029
Costinha|RB|26|10000|POR|2031
Jack Hinshelwood|DM|21|35000|ENG|2029
Chema Andrés|DM|21|24000|ESP|2031
Yasin Ayari|CM|23|45000|SWE|2027
Diego Gómez|CM|23|30000|PAR|2031
Malick Yalcouyé|CM|20|22000|CIV|2029
Matt O'Riley|CM|25|18000|DEN|2029
Pascal Groß|CM|35|2500|GER|2027
Ibrahim Osman|LW|21|12000|GHA|2029
Yankuba Minteh|RW|22|55000|GAM|2029
Charalampos Kostoulas|ST|19|40000|GRE|2030
Georginio Rutter|ST|24|30000|FRA|2028
Promise David|ST|25|20000|CAN|2027` },
    { id: 'chelsea', name: 'Челси', city: 'Лондон', stadium: 'Stamford Bridge', cap: 40044, colors: ['#034694', '#ffffff'], players: `
Mike Penders|GK|21|25000|BEL|2032
Gabriel Slonina|GK|22|3000|USA|2028
Teddy Sharman-Lowe|GK|23|500|ENG|2028
Maxence Lacroix|CB|26|60000|FRA|2032
Levi Colwill|CB|23|50000|ENG|2029
Wesley Fofana|CB|25|32000|FRA|2029
Josh Acheampong|CB|20|30000|ENG|2029
Aarón Anselmino|CB|21|10000|ARG|2031
Jorrel Hato|LB|20|45000|NED|2032
Marco Palestra|RB|21|45000|ITA|2033
Malo Gusto|RB|23|35000|FRA|2030
Moisés Caicedo|DM|24|100000|ECU|2033
Roméo Lavia|DM|22|25000|BEL|2030
Valentín Barco|CM|22|40000|ARG|2033
Mahdi Nicoll-Jazuli|CM|16|2000|ENG|2028
Jordan Henderson|CM|36|1200|ENG|2028
Morgan Rogers|AM|24|120000|ENG|2033
Cole Palmer|AM|24|110000|ENG|2034
Estêvão|RW|19|80000|BRA|2033
Pedro Neto|RW|26|60000|POR|2032
Geovany Quenda|RW|19|42000|POR|2034
João Pedro|ST|25|100000|BRA|2034
Danny Welbeck|ST|35|3000|ENG|2028` },
    { id: 'coventry', name: 'Ковентри Сити', city: 'Ковентри', stadium: 'Coventry Building Society Arena', cap: 32609, colors: ['#59cbe8', '#ffffff'], players: `
Carl Rushworth|GK|25|22000|ENG
Dan Bentley|GK|33|800|ENG|2028
Ben Wilson|GK|34|300|ENG|2027
Bobby Thomas|CB|25|20000|ENG|2029
Ethan Pinnock|CB|33|3000|JAM
Stephen Mfuni|CB|18|3000|ENG|2027
Joel Latibeaudiere|CB|26|3000|JAM|2027
Jay Dasilva|LB|28|12000|WAL|2027
Jake Bidwell|LB|33|600|ENG|2027
Milan van Ewijk|RB|26|22000|NED|2027
Kaine Kesler-Hayden|RB|24|3000|ENG|2029
Caleb Yirenkyi|CM|20|22000|GHA
Victor Torp|CM|27|14000|DEN
Gustavo Hamer|CM|29|11000|NED
Frank Onyeka|CM|28|8000|NGA|2030
Jack Rudoni|AM|25|20000|ENG|2028
Ephron Mason-Clark|LW|27|16000|JAM|2028
Yann Gboho|LW|25|15000|CIV
Loum Tchaouna|RW|23|18000|FRA|2031
Tatsuhiro Sakamoto|RW|30|4500|JPN|2027
Sidiki Chérif|ST|19|22000|FRA
Brandon Thomas-Asante|ST|27|16000|GHA|2028
Ellis Simms|ST|25|12000|ENG|2027
Taiwo Awoniyi|ST|29|8000|NGA` },
    { id: 'crystal_palace', name: 'Кристал Пэлас', city: 'Лондон', stadium: 'Selhurst Park', cap: 25486, colors: ['#1b458f', '#c4122e'], players: `
Walter Benítez|GK|33|4000|ARG|2028
Remi Matthews|GK|32|200|ENG|2027
Honest Ahanor|CB|18|40000|ITA|2027
Jaydee Canvot|CB|20|35000|FRA|2029
Chris Richards|CB|26|28000|USA|2027
Axel Disasi|CB|28|15000|FRA|2027
Takehiro Tomiyasu|CB|27|5000|JPN
Tyrick Mitchell|LB|27|25000|ENG|2027
Ben Chilwell|LB|29|10000|ENG
Anan Khalaili|RB|22|23000|ISR|2031
Óscar Mingueza|RB|27|15000|ESP|2030
Adam Wharton|DM|22|75000|ENG|2029
Cheick Doucouré|DM|26|7000|MLI|2029
Jefferson Lerma|DM|31|6000|COL|2027
Quinten Timber|CM|25|25000|NED|2031
Daichi Kamada|CM|30|10000|JPN|2027
Will Hughes|CM|31|5000|ENG|2027
Yéremy Pino|LW|24|30000|ESP|2030
Dwight McNeil|LW|26|22000|ENG|2030
Ismaïla Sarr|RW|28|45000|SEN|2029
Darío Osorio|RW|22|20000|CHI|2027
Evann Guessand|RW|25|20000|CIV|2027
Zavier Gozo|RW|19|12000|USA|2031
Jørgen Strand Larsen|ST|26|40000|NOR|2030
Jean-Philippe Mateta|ST|29|30000|FRA|2027
Eddie Nketiah|ST|27|13000|ENG|2029` },
    { id: 'everton', name: 'Эвертон', city: 'Ливерпуль', stadium: 'Hill Dickinson Stadium', cap: 52769, colors: ['#003399', '#ffffff'], players: `
Jordan Pickford|GK|32|13000|ENG|2029
Mark Travers|GK|27|3000|IRL|2029
Tom King|GK|31|100|WAL|2027
Jarrad Branthwaite|CB|24|45000|ENG|2030
James Tarkowski|CB|33|5000|ENG|2028
Michael Keane|CB|33|3000|ENG|2027
Виталий Мыколенко|LB|27|25000|UKR|2029
Jake O'Brien|RB|25|18000|IRL|2028
Ainsley Maitland-Niles|RB|29|10000|ENG|2029
James Garner|DM|25|50000|ENG|2030
Hayden Hackney|DM|24|32000|ENG|2031
Christian Nørgaard|DM|32|5000|DEN|2028
Harrison Armstrong|CM|19|30000|ENG|2028
Merlin Röhl|CM|24|20000|GER|2029
Charly Alcaraz|CM|23|15000|ARG|2027
Kiernan Dewsbury-Hall|AM|28|40000|ENG|2030
Tyrique George|LW|20|25000|ENG|2030
Jack Grealish|LW|31|20000|ENG|2027
Brennan Johnson|RW|25|25000|WAL|2030
Tyler Dibling|RW|20|17000|ENG|2029
Thierno Barry|ST|24|35000|FRA|2029
Braiden Graham|ST|18|700|NIR|2027` },
    { id: 'fulham', name: 'Фулхэм', city: 'Лондон', stadium: 'Craven Cottage', cap: 29589, colors: ['#ffffff', '#000000'], players: `
Bernd Leno|GK|34|6000|GER|2027
Benjamin Lecomte|GK|35|800|FRA|2028
Alex Borto|GK|22|500|USA|2027
Calvin Bassey|CB|26|28000|NGA|2027
David Affengruber|CB|25|20000|AUT|2030
Joachim Andersen|CB|30|16000|DEN|2029
Jorge Cuenca|CB|26|8000|ESP|2028
Antonee Robinson|LB|29|22000|USA|2028
Timothy Castagne|RB|30|8000|BEL|2027
Kenny Tete|RB|31|6000|NED|2028
Sander Berge|DM|28|25000|NOR|2029
Shea Charles|DM|22|25000|NIR|2031
Alex Iwobi|DM|30|20000|NGA|2028
Hugo Larsson|CM|22|23000|SWE|2027
Manuel Ángel|CM|22|5000|ESP|2029
Harrison Reed|CM|31|1300|ENG|2027
Josh King|AM|19|40000|ENG|2029
Emile Smith Rowe|AM|26|17000|ENG|2029
César Palacios|AM|21|12000|ESP|2031
Kevin|LW|23|25000|BRA|2030
Oscar Bobb|RW|23|28000|NOR|2031
Gonzalo García|ST|22|35000|ESP|2031
Rodrigo Muniz|ST|25|20000|BRA|2030
Jonah Kusi-Asare|ST|19|5000|SWE|2031` },
    { id: 'hull', name: 'Халл Сити', city: 'Халл', stadium: 'MKM Stadium', cap: 25586, colors: ['#f5a12d', '#000000'], players: `
Konstantinos Tzolakis|GK|23|22000|GRE|2031
Dillon Phillips|GK|31|200|ENG|2028
Nobel Mendy|CB|22|20000|SEN|2031
Lucas Herrington|CB|19|15000|AUS|2031
John Egan|CB|34|1500|IRL|2028
Paddy McNair|CB|31|1500|NIR|2027
Semi Ajayi|CB|32|1000|NGA|2027
Ryan Giles|LB|26|16000|ENG|2027
Matt Targett|LB|31|3000|ENG|2028
Brooke Norton-Cuffy|RB|22|15000|ENG|2031
Regan Slater|DM|27|10000|ENG|2029
Christos Mouzakitis|CM|19|20000|GRE|2031
Tim Iroegbunam|CM|23|15000|ENG|2031
Jens Hjertø-Dahl|CM|20|10000|NOR|2031
Hidemasa Morita|CM|31|6000|JPN|2028
Matt Crooks|CM|32|1000|ENG|2028
Sorba Thomas|LW|27|14000|WAL|2030
Elliot Stroud|LW|24|8000|SWE|2030
Mohamed Belloumi|RW|24|18000|ALG|2029
Mohamed-Ali Cho|RW|22|15000|FRA|2031
Abdülkadir Ömür|RW|27|1500|TUR|2027
Robinio Vaz|ST|19|18000|FRA|2027
Ilyas Ansah|ST|21|15000|GER|2031
Joe Gelhardt|ST|24|14000|ENG|2030
Oli McBurnie|ST|30|7000|SCO|2029` },
    { id: 'ipswich', name: 'Ипсвич Таун', city: 'Ипсвич', stadium: 'Portman Road', cap: 30056, colors: ['#0044a9', '#ffffff'], players: `
Kjell Scherpen|GK|26|12000|NED|2030
Christian Walton|GK|30|2500|ENG|2029
Alex Palmer|GK|30|1000|ENG|2028
David Button|GK|37|50|ENG|2027
Jacob Greaves|CB|26|17000|ENG|2029
Issa Diop|CB|29|10000|MAR|2030
Cédric Kipré|CB|29|3000|CIV|2028
Leif Davis|LB|26|25000|ENG|2029
Abdoul Ouattara|RB|21|18000|CIV|2031
Darnell Furlong|RB|30|2500|ENG|2028
Florentino|DM|27|16000|POR|2031
Azor Matusiwa|DM|28|12000|NED|2029
Exequiel Palacios|CM|28|25000|ARG|2030
Marcelino Núñez|CM|26|14000|CHI|2029
Saša Lukić|CM|30|10000|SRB|2030
Jack Taylor|CM|28|2200|IRL|2028
Julio Enciso|AM|22|30000|PAR|2031
Anis Mehmeti|AM|25|13000|ALB|2029
Jaden Philogene|LW|24|20000|ENG|2029
Jack Clarke|LW|25|20000|ENG|2029
Daizen Maeda|LW|29|13000|JPN|2029
Abdul Fatawu|RW|22|23000|GHA|2031
Sindre Walle Egeli|RW|20|15000|NOR|2030
Kasey McAteer|RW|24|10000|IRL|2029
Emersonn|ST|22|25000|BRA|2031
Zian Flemming|ST|28|18000|NED|2030
Chuba Akpom|ST|31|3500|ENG|2029` },
    { id: 'leeds', name: 'Лидс Юнайтед', city: 'Лидс', stadium: 'Elland Road', cap: 37645, colors: ['#ffffff', '#1d428a'], players: `
James Trafford|GK|24|35000|ENG|2031
Michael Zetterer|GK|31|4000|GER|2029
Alex Cairns|GK|33|50|ENG|2028
Tarik Muharemović|CB|23|40000|BIH|2031
Jaka Bijol|CB|27|20000|SVN|2030
Nico Elvedi|CB|30|12000|SUI|2029
Gabriel Gudmundsson|LB|27|25000|SWE|2029
Melvin Bard|LB|25|10000|FRA|2027
Jayden Bogle|RB|26|18000|ENG|2030
James Justin|RB|28|16000|ENG|2029
Anton Stach|DM|27|32000|GER|2029
Ilia Gruev|DM|26|12000|BUL|2027
Ao Tanaka|CM|28|15000|JPN|2028
Sean Longstaff|CM|28|12000|ENG|2029
Brenden Aaronson|AM|26|22000|USA|2029
Noah Okafor|LW|26|32000|SUI|2029
Jean-Mattéo Bahoya|LW|21|25000|FRA|2027
Harry Wilson|RW|29|22000|WAL|2030
Daniel James|RW|28|10000|WAL|2029
Dominic Calvert-Lewin|ST|29|25000|ENG|2028
Lukas Nmecha|ST|27|10000|GER|2027` },
    { id: 'liverpool', name: 'Ливерпуль', city: 'Ливерпуль', stadium: 'Anfield', cap: 61276, colors: ['#c8102e', '#ffffff'], players: `
Гиорги Мамардашвили|GK|26|28000|GEO|2031
Alisson|GK|34|15000|BRA|2027
Freddie Woodman|GK|29|3000|ENG|2029
Harvey Davies|GK|23|500|ENG|2027
Jérémy Jacquet|CB|21|65000|FRA|2031
Ronald Araújo|CB|27|25000|URU|2027
Joe Gomez|CB|29|11000|ENG|2027
Milos Kerkez|LB|22|35000|HUN|2030
Konstantinos Tsimikas|LB|30|4500|GRE|2027
Luke Chambers|LB|22|1000|ENG|2027
Ryan Gravenberch|DM|24|75000|NED|2032
Alexis Mac Allister|CM|27|70000|ARG|2028
Trey Nyoni|CM|19|18000|ENG|2030
James McConnell|CM|22|1500|ENG|2030
Florian Wirtz|AM|23|85000|GER|2030
Bradley Barcola|LW|24|100000|FRA|2031
Cody Gakpo|LW|27|75000|NED|2030
Rio Ngumoha|LW|18|50000|ENG|2028
Víctor Muñoz|LW|23|40000|ESP|2032
Alexander Isak|ST|27|90000|SWE|2031
Lewis Koumas|ST|21|8000|WAL|2029
Jayden Danns|ST|20|800|ENG` },
    { id: 'man_city', name: 'Манчестер Сити', city: 'Манчестер', stadium: 'Etihad Stadium', cap: 61470, colors: ['#6cabdd', '#1c2c5b'], players: `
Gianluigi Donnarumma|GK|27|45000|ITA|2030
Gerónimo Rulli|GK|34|5000|ARG|2028
Marcus Bettinelli|GK|34|300|ENG|2027
Marc Guéhi|CB|26|75000|ENG|2031
Абдукодир Хусанов|CB|22|50000|UZB|2031
Vitor Reis|CB|20|30000|BRA|2029
Josko Gvardiol|LB|24|75000|CRO|2031
Nico O'Reilly|LB|21|70000|ENG|2030
Rayan Aït-Nouri|LB|25|35000|ALG|2030
Matheus Nunes|RB|28|45000|POR|2028
Rico Lewis|RB|21|25000|ENG|2030
Elliot Anderson|DM|23|120000|ENG|2031
Ayyoub Bouaddi|DM|19|90000|MAR|2031
Enzo Fernández|CM|25|120000|ARG|2031
Mateo Kovacic|CM|32|10000|CRO|2027
Rayan Cherki|AM|23|110000|FRA|2030
Phil Foden|AM|26|65000|ENG|2030
Jérémy Doku|LW|24|75000|BEL|2031
Iliman Ndiaye|LW|26|65000|SEN|2031
Allan|RW|22|30000|BRA|2031
Ryan McAidoo|RW|18|8000|ENG
Erling Haaland|ST|26|220000|NOR|2034` },
    { id: 'man_utd', name: 'Манчестер Юнайтед', city: 'Манчестер', stadium: 'Old Trafford', cap: 74244, colors: ['#da291c', '#000000'], players: `
Senne Lammens|GK|24|35000|BEL|2030
Karl Darlow|GK|36|200|WAL|2028
Tom Heaton|GK|40|100|ENG|2027
Dermot Mee|GK|23|500|NIR|2028
Lisandro Martínez|CB|28|45000|ARG|2027
Ayden Heaven|CB|20|30000|ENG|2029
Matthijs de Ligt|CB|27|25000|NED|2029
Harry Maguire|CB|33|8000|ENG|2027
Luke Shaw|LB|31|8000|ENG|2027
Harry Amass|LB|19|5000|ENG|2027
Diogo Dalot|RB|27|30000|POR|2028
Carlos Baleba|DM|22|65000|CMR|2031
Andrey Santos|DM|22|45000|BRA|2031
Kobbie Mainoo|CM|21|75000|ENG|2031
Youri Tielemans|CM|29|40000|BEL|2031
Tyler Fletcher|CM|19|2500|SCO|2027
Mason Mount|AM|27|25000|ENG|2028
Marcus Rashford|LW|28|35000|ENG|2028
Patrick Dorgu|LW|21|35000|DEN|2030
Bryan Mbeumo|RW|27|75000|CMR|2030
Amad Diallo|RW|24|45000|CIV|2030
Shea Lacey|RW|19|12000|ENG|2029
Matheus Cunha|ST|27|75000|BRA|2030
Benjamin Šeško|ST|23|75000|SVN|2030
Joshua Zirkzee|ST|25|20000|NED|2029` },
    { id: 'newcastle', name: 'Ньюкасл', city: 'Ньюкасл', stadium: 'St James\' Park', cap: 52305, colors: ['#241f20', '#ffffff'], players: `
Lukas Hornicek|GK|24|27000|CZE|2031
Ewen Jaouen|GK|20|18000|FRA|2030
Nick Pope|GK|34|3000|ENG|2027
Mark Gillespie|GK|34|100|ENG|2027
Malick Thiaw|CB|25|50000|GER|2029
Sven Botman|CB|26|35000|NED|2030
Fabian Schär|CB|34|3000|SUI|2027
Lewis Hall|LB|22|55000|ENG|2031
Amar Dedic|RB|24|30000|BIH|2031
Nico González|DM|24|50000|ESP|2031
Aladji Bamba|DM|20|25000|FRA|2031
Jacob Ramsey|CM|25|35000|ENG|2030
Lewis Miley|CM|20|30000|ENG|2032
Sean Steur|CM|18|22000|NED|2031
Joe Willock|CM|27|18000|ENG|2027
Bazoumana Touré|LW|20|50000|CIV|2031
Harvey Barnes|LW|28|35000|ENG
Anthony Elanga|RW|24|35000|SWE|2030
Jacob Murphy|RW|31|10000|ENG|2027
Yoane Wissa|ST|30|25000|COD|2029` },
    { id: 'nottingham', name: 'Ноттингем Форест', city: 'Ноттингем', stadium: 'The City Ground', cap: 31042, colors: ['#dd0000', '#ffffff'], players: `
John Victor|GK|30|3500|BRA|2028
Matz Sels|GK|34|3500|BEL|2028
Steven Benda|GK|28|1000|GER|2027
Murillo|CB|24|50000|BRA|2030
Ousmane Diomande|CB|22|42000|CIV|2030
Nikola Milenković|CB|29|28000|SRB|2029
Jair Cunha|CB|21|25000|BRA|2030
Neco Williams|LB|25|32000|WAL|2030
Luca Netz|LB|23|8000|GER|2030
Daniel Muñoz|RB|30|22000|COL|2029
Ola Aina|RB|30|18000|NGA|2028
Ibrahim Sangaré|DM|28|20000|CIV|2029
Xaver Schlager|CM|29|15000|AUT|2028
Nicolás Domínguez|CM|28|13000|ARG|2028
Morgan Gibbs-White|AM|26|80000|ENG|2028
James McAtee|AM|24|22000|ENG|2030
Callum Hudson-Odoi|LW|25|25000|ENG|2028
Dan Ndoye|RW|25|35000|SUI|2030
Liam Delap|ST|23|40000|ENG|2031
Arnaud Kalimuendo|ST|24|20000|FRA|2030
Chris Wood|ST|34|4000|NZL|2027` },
    { id: 'sunderland', name: 'Сандерленд', city: 'Сандерленд', stadium: 'Stadium of Light', cap: 49000, colors: ['#eb172b', '#ffffff'], players: `
Robin Roefs|GK|23|30000|NED|2031
Melker Ellborg|GK|23|3000|SWE|2030
Simon Moore|GK|36|75|ENG|2027
Dan Ballard|CB|27|25000|NIR|2029
Kevin Danso|CB|28|20000|AUT|2027
Omar Alderete|CB|29|10000|PAR|2029
Luke O'Nien|CB|31|700|ENG|2027
Aji Alese|CB|25|700|ENG|2027
Reinildo Mandava|LB|32|4000|MOZ|2027
Trai Hume|RB|24|22000|NIR|2030
Nordi Mukiele|RB|28|18000|FRA|2029
Thomas Meunier|RB|35|1500|BEL|2028
Jules Ahoka|DM|20|7000|COD|2031
Noah Sadiki|CM|21|40000|COD|2030
Habib Diarra|CM|22|35000|SEN|2030
Enzo Le Fée|CM|26|30000|FRA|2031
Alan Browne|CM|31|1300|IRL|2027
Chris Rigg|AM|19|25000|ENG|2030
Malick Fofana|LW|21|30000|BEL|2031
Nilson Angulo|LW|23|20000|ECU|2030
Romaine Mundle|LW|23|5000|ENG|2030
Тимур Тутеров|LW|21|300|UKR|2028
Chemsdine Talbi|RW|21|25000|MAR|2030
Jocelin Ta Bi|RW|21|2500|CIV|2030
Abdoullah Ba|RW|23|1500|MTN|2027
Wilson Isidor|ST|26|18000|HAI|2030` },
    { id: 'tottenham', name: 'Тоттенхэм', city: 'Лондон', stadium: 'Tottenham Hotspur Stadium', cap: 62850, colors: ['#ffffff', '#132257'], players: `
Antonín Kinský|GK|23|18000|CZE|2031
Martin Dúbravka|GK|37|500|SVK|2027
Brandon Austin|GK|27|500|ENG|2029
Jan Paul van Hecke|CB|26|60000|NED
Marcos Senesi|CB|29|20000|ARG|2030
Tosin Adarabioyo|CB|29|13000|ENG|2029
Ben Davies|CB|33|3000|WAL|2027
Destiny Udogie|LB|23|25000|ITA|2030
Andrew Robertson|LB|32|7000|SCO|2030
Pedro Porro|RB|27|45000|ESP|2031
Archie Gray|RB|20|35000|ENG|2030
Sandro Tonali|DM|26|90000|ITA|2032
Rodrigo Bentancur|DM|29|17000|URU|2029
Mateus Fernandes|CM|22|70000|POR|2031
Lucas Bergvall|CM|20|40000|SWE|2031
Conor Gallagher|CM|26|32000|ENG|2031
James Maddison|AM|29|17000|ENG|2028
Dejan Kulusevski|AM|26|13000|SWE|2028
Sávio|LW|22|50000|BRA|2031
Mathys Tel|LW|21|22000|FRA|2031
Mohammed Kudus|RW|26|45000|GHA|2031
Omar Marmoush|ST|27|50000|EGY|2027
Dominic Solanke|ST|29|25000|ENG|2030
Richarlison|ST|29|15000|BRA|2027` },
  ],
});
