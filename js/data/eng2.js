// Чемпионшип 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'eng2', name: 'Чемпионшип', short: 'Чемпионшип', country: 'ENG', tier: 2, weekday: 6,
  autumn: { from: '08-01', rounds: 23 }, spring: { from: '01-09', rounds: 23 },
  ticket: 25, prize: [8000, 7750, 7500, 7300, 7050, 6800, 6550, 6350, 6100, 5850, 5600, 5350, 5150, 4900, 4650, 4400, 4150, 3950, 3700, 3450, 3200, 3000, 2750, 2500],
  teams: [
    { id: 'middlesbrough', name: 'Мидлсбро', city: 'Мидлсбро', stadium: 'Riverside Stadium', cap: 34988, colors: ['#e11b22', '#ffffff'], players: `
Radek Vítek|GK|23|5817|CZE
Sol Brynn|GK|25|5834|ENG
Jon McLaughlin|GK|39|284|SCO
Callum Brittain|RB|28|5623|ENG
Sam Byram|LB|33|246|ENG
Ashley Phillips|CB|21|10614|ENG
Alfie Jones|CB|29|4661|CAN
Luke Ayling|CB|35|549|ENG
Alex Bangura|LB|27|304|SLE
George Edmundson|CB|29|278|ENG
Adilson Malanda|CB|24|6365|FRA
Neto Borges|CB|30|1395|BRA
Sebastian Berhalter|DM|25|6022|USA
Riley McGree|AM|27|2378|AUS
Aidan Morris|DM|24|10977|USA
Myles Peart-Harris|LW|24|1214|ENG
Max Arfsten|LB|25|2364|USA
Connor Barron|DM|24|2088|SCO
Leo Castledine|CM|21|2096|ENG
Rokas Pukštas|AM|22|4069|USA
Will Lankshear|ST|21|9615|ENG
Tommy Conway|ST|24|15528|SCO
Amario Cozier-Duberry|RW|21|6456|ENG
David Strelec|ST|25|9102|SVK
Jeremy Sarmiento|LW|24|5206|ECU
Micah Hamilton|LW|22|1413|ENG
Kyle Joseph|ST|25|4526|SCO` },
    { id: 'swansea', name: 'Суонси Сити', city: 'Суонси', stadium: 'Swansea.com Stadium', cap: 21028, colors: ['#ffffff', '#000000'], players: `
Andy Fisher|GK|28|497|ENG
Lawrence Vigouroux|GK|32|757|CHI
Paul Farman|GK|36|281|ENG
Joshua Key|RB|26|928|ENG
Jenson Seelt|CB|23|5896|NED
Ben Cabango|CB|26|9710|WAL
Josh Tymon|LB|27|6979|ENG
Cameron Burgess|CB|31|1285|AUS
Tiago Parente|CB|20|1010|POR
Stephen Welsh|CB|26|1664|SCO
Filip Lissah|RB|21|299|CZE
Jay Fulton|DM|32|523|SCO
Marko Stamenić|DM|24|4218|NZL
Melker Widell|AM|24|1506|SWE
Elijah Just|AM|26|1677|NZL
Tom Iorpenda|AM|21|658|ENG
Gonçalo Franco|AM|25|2756|POR
Stephen Eustaquio|CM|29|4382|CAN
Žan Vipotnik|ST|24|13808|SVN
Eom Ji-Sung|LW|24|1491|KOR
Jeremy Monga|RW|17|19539|ENG
Joseph Opoku|LW|21|6173|GHA
Ross Stewart|ST|30|1757|SCO
Adam Idah|ST|25|4208|IRL
Ronald|RW|25|2205|BRA
Moussa Yeo|LW|22|6218|MLI` },
    { id: 'west_ham', name: 'Вест Хэм', city: 'Лондон', stadium: 'London Stadium', cap: 62500, colors: ['#7a263a', '#1bb1e7'], players: `
Mads Hermansen|GK|26|16766|DEN
Alphonse Areola|GK|33|2545|FRA
Finlay Herrick|GK|20|150|ENG
Kyle Walker-Peters|RB|29|11609|ENG
Maximilian Kilman|CB|29|14932|ENG
Morato|CB|25|17734|BRA
Konstantinos Mavropanos|CB|28|15889|GRE
Adama Boiro|LB|24|2221|ESP
Ollie Scarles|LB|20|12687|ENG
Joël Veltman|RB|34|1024|NED
Edson Álvarez|DM|29|13405|MEX
Arne Engels|CM|23|18728|BEL
Divine Mukasa|AM|19|473|ENG
Mohamadou Kanté|CM|21|1536|FRA
Soungoutou Magassa|DM|23|18187|FRA
Tomás Souček|CM|31|8213|CZE
Lewis Orford|DM|20|881|ENG
Joshua Ajala|AM|19|150|ENG
Joël Piroe|ST|27|10071|SUR
Manor Solomon|LW|27|7723|ISR
Valentín Castellanos|ST|28|31012|ARG
Pablo|ST|22|8386|BRA
Jarrod Bowen|RW|29|31705|ENG
Keiber Lamadrid|LW|22|791|VEN
Maxwel Cornet|RW|30|1921|CIV
Edvin Austbø|LW|21|8329|NOR` },
    { id: 'wolves', name: 'Вулверхэмптон', city: 'Вулверхэмптон', stadium: 'Molineux Stadium', cap: 31750, colors: ['#fdb913', '#231f20'], players: `
José Sá|GK|33|2479|POR
João Virgínia|GK|27|719|POR
John Ruddy|GK|40|333|ENG
Kieran Trippier|RB|36|1307|ENG
Yerson Mosquera|CB|25|15154|COL
Toti Gomes|CB|27|18773|POR
Ghislain Konan|LB|30|1626|CIV
Nasser Djiga|CB|23|7611|BFA
Ladislav Krejcí|CB|27|22539|CZE
Hugo Bueno|LB|24|14117|ESP
Marshall Munetsi|DM|30|12781|ZIM
André|DM|25|25385|BRA
Jordan James|DM|22|13973|WAL
Boubacar Traoré|DM|25|2103|MLI
Tommy Doyle|DM|25|6593|ENG
Jean-Ricner Bellegarde|CM|28|13609|HAI
Fer López|AM|22|18157|ESP
Mateus Mané|AM|19|11020|POR
Jackson Tchatchoua|RW|25|14111|CMR
Raúl Jiménez|ST|35|2324|MEX
Adam Armstrong|ST|29|6373|ENG
Bertrand Traoré|RW|31|1830|BFA
Sean Neave|ST|19|150|ENG
Rafiki Saïd|LW|26|4573|COM
Rodrigo Gomes|RW|23|18358|POR
Tawanda Chirewa|LW|23|388|ZIM` },
    { id: 'west_brom', name: 'Вест Бромвич', city: 'Уэст-Бромидж', stadium: 'The Hawthorns', cap: 28003, colors: ['#122f67', '#ffffff'], players: `
Max O'Leary|GK|30|1605|IRL
Matt Ingram|GK|32|428|ENG
Chris Mepham|CB|28|1938|WAL
Nathaniel Phillips|CB|29|1894|ENG
Callum Styles|LB|26|2364|HUN
George Campbell|CB|25|1946|USA
Brayann Pereira|CB|23|975|CGO
Conor Townsend|LB|33|260|ENG
Nolan Galves|RB|23|1829|FRA
Felix Myhre|CM|27|2254|NOR
Jayson Molumby|CM|27|2439|IRL
Jimmy-Jay Morgan|AM|20|1162|ENG
Toby Collyer|DM|22|4086|ENG
Ousmane Diakité|CM|26|1279|MLI
Rabby Nzingoula|CM|20|2132|FRA
Isaac Price|AM|23|5240|NIR
Harry Whitwell|AM|20|403|ENG
Barney Stewart|ST|22|1431|SCO
Mikey Johnston|LW|27|2489|IRL
Aune Heggebø|ST|25|8675|NOR
Tammer Bany|RW|23|522|JOR
Kareem Tunde|RW|21|3418|ESP` },
    { id: 'southampton', name: 'Саутгемптон', city: 'Саутгемптон', stadium: 'St. Mary\'s Stadium', cap: 32689, colors: ['#d71920', '#ffffff'], players: `
Jamie Jones|GK|37|129|ENG
Daniel Peretz|GK|26|3652|ISR
Ryan Manning|LB|30|1656|IRL
Jack Stephens|CB|32|978|ENG
Zach Abbott|RB|20|2895|ENG
Keven Schlotterbeck|CB|29|2495|GER
James Bree|RB|28|1993|ENG
Nathan Wood|CB|24|11296|ENG
Welington|LB|25|2379|BRA
Mads Roerslev|RW|27|2363|DEN
Flynn Downes|DM|27|9873|ENG
Caspar Jander|DM|23|18251|GER
Finn Azaz|AM|26|22209|IRL
Cameron Bragg|DM|21|1411|SCO
James Ward-Prowse|DM|31|2384|ENG
Léo Scienza|LW|28|6155|BRA
Cyle Larin|ST|31|1914|CAN
Lewis Dobbin|ST|23|6822|ENG
Tom Fellows|RW|23|10189|ENG
Samuel Edozie|LW|23|2387|ENG
Kuryu Matsuki|RW|23|2523|JPN
Divin Mubama|ST|21|5364|ENG` },
    { id: 'birmingham', name: 'Бирмингем Сити', city: 'Бирмингем', stadium: 'St. Andrew\'s @ Knighthead Park', cap: 30009, colors: ['#0000ff', '#ffffff'], players: `
James Beadle|GK|22|9137|ENG
Ryan Allsop|GK|34|402|ENG
Bradley Mayo|GK|22|150|ENG
Ethan Laird|LB|25|1862|ENG
Lee Buchanan|LB|25|1173|ENG
Christoph Klarer|CB|26|7794|AUT
Phil Neumann|CB|29|1690|GER
Alex Cochrane|LB|26|1848|ENG
Dael Fry|CB|29|2420|ENG
Kristoffer Lund|LB|24|4823|USA
Bright Osayi-Samuel|RB|28|2376|NGA
Paik Seung-Ho|DM|29|1483|KOR
Marc Leonard|DM|24|1639|SCO
Jhon Solís|DM|22|4111|COL
Max Bird|DM|26|1840|ENG
Taylor Gardner-Hickman|DM|24|1564|ENG
Tomoki Iwata|RB|29|1255|JPN
Jay Stansfield|AM|23|21253|ENG
Carlos Vicente|RW|27|6953|ESP
August Priske|ST|22|5996|DEN
Demarai Gray|LW|30|2219|JAM
Scott Wright|LW|29|282|SCO
Patrick Roberts|RW|29|2369|ENG
Liam Millar|LW|27|2332|CAN
Luis Vázquez|ST|25|2294|ARG
Marvin Ducksch|ST|32|1440|GER` },
    { id: 'qpr', name: 'КПР', city: 'Лондон', stadium: 'MATRADE Loftus Road', cap: 18360, colors: ['#1d5ba4', '#ffffff'], players: `
Pierce Charles|GK|21|1651|NIR
Calum Ward|GK|26|582|ENG
Kealey Adamson|RB|23|541|AUS
Jimmy Dunne|CB|29|2096|IRL
Liam Morrison|CB|23|1199|SCO
Ronnie Edwards|CB|23|4433|ENG
Jake Clarke-Salter|CB|29|368|ENG
Boy Kemper|LB|27|771|NED
Dennis Cirkin|LB|24|6328|LVA
Amadou Mbengue|RB|24|1834|SEN
Tariq Lamptey|LB|26|4907|GHA
Ilias Chair|LW|28|1992|MAR
Paul Smyth|LW|29|554|NIR
Koki Saito|LW|25|2095|JPN
Glen Kamara|CM|30|1369|FIN
Harvey Vale|RW|23|3705|IRL
Isak Alemayehu|CM|20|605|SWE
Nicolas Madsen|CM|26|5155|DEN
Jonathan Varane|CM|25|2060|MTQ
Karamoko Dembélé|RW|23|1636|ENG
Alfie Lloyd|ST|23|416|ENG
Rumarn Burrell|ST|25|3243|JAM
Kwame Poku|RW|25|707|GHA
Richard Kone|ST|23|10380|CIV
Justin Obikwu|ST|22|401|TRI
Rayan Kolli|ST|21|1802|ALG
Leon Scarlett|ST|17|150|WAL` },
    { id: 'stoke', name: 'Сток Сити', city: 'Сток-он-Трент', stadium: 'bet365 Stadium', cap: 30089, colors: ['#e03a3e', '#ffffff'], players: `
Viktor Johansson|GK|28|13072|SWE
Josh Griffiths|GK|25|1643|ENG
Frank Fielding|GK|38|241|ENG
Ben Johnson|LB|26|3024|ENG
Aaron Cresswell|LB|36|411|ENG
Luke Graham|CB|22|1876|SCO
Ben Wilmot|CB|26|5695|ENG
Eric Bocat|LB|27|1568|FRA
Bosun Lawal|CB|23|2233|IRL
Luca Bombino|LB|20|3696|USA
Junior Tchamadeu|RB|22|2116|CMR
Ben Gibson|CB|33|271|ENG
Максым Таловиеров|CB|26|1558|UKR
Ben Pearson|DM|31|334|ENG
Svante Ingelsson|DM|28|1060|SWE
Jack McGlynn|CM|23|3661|USA
Ethan Galbraith|RB|25|2172|NIR
Bae Jun-Ho|AM|23|150|KOR
Justin Devenny|LB|23|13010|NIR
Tomás Rigo|DM|24|4421|SVK
Djibril Soumaré|CM|23|1996|SEN
Róbert Bozeník|ST|26|1782|SVK
Lamine Cissé|ST|23|4229|FRA
George Hirst|ST|27|10945|SCO
Sam Gallagher|ST|31|567|ENG
Million Manhoef|RW|24|4908|NED` },
    { id: 'blackburn', name: 'Блэкберн Роверс', city: 'Блэкберн', stadium: 'Ewood Park', cap: 31367, colors: ['#009ee0', '#ffffff'], players: `
Aynsley Pears|GK|28|647|ENG
Balázs Tóth|GK|29|771|HUN
Harry Pickering|LB|27|1136|ENG
Tom Atcheson|CB|20|1023|NIR
Sean McLoughlin|CB|29|703|IRL
Scott Wharton|CB|29|942|ENG
Hayden Carter|CB|26|1156|ENG
Lewis Miller|CB|26|1305|AUS
Ryan Alebiosu|RB|24|1725|NGA
Yuri Ribeiro|LB|29|404|POR
Sam Morsy|DM|35|395|EGY
Todd Cantwell|AM|28|1369|ENG
Jayden Fevrier|RB|23|425|ENG
Dion De Neve|LB|25|837|BEL
Moussa Baradji|DM|25|1557|FRA
Ryoya Morishita|AM|29|1500|JPN
Gady Beyuku|RW|20|2349|FRA
Adam Forshaw|DM|35|252|ENG
Jake Garrett|DM|23|336|ENG
Kristi Montgomery|DM|22|740|SCO
Augustus Kargbo|LW|27|688|SLE
Andri Guðjohnsen|ST|24|2284|ISL
Oladapo Afolayan|LW|29|716|ENG
Yuki Ohashi|ST|30|1066|JPN
Mathias Jørgensen|ST|26|2431|DEN` },
    { id: 'portsmouth', name: 'Портсмут', city: 'Портсмут', stadium: 'Fratton Park', cap: 20899, colors: ['#001489', '#ffffff'], players: `
Nicolas Schmid|GK|29|1498|AUT
Ben Killip|GK|30|250|ENG
Daniel Bielica|GK|27|958|POL
Benjamin Arthur|CB|21|1042|ENG
Connor Ogilvie|CB|30|750|ENG
Regan Poole|CB|28|873|WAL
Conor Shaughnessy|CB|30|370|IRL
Jayden Meghoma|LB|20|4207|ENG
Zak Swanson|LB|26|1145|ENG
Terry Devlin|RB|22|4401|NIR
Michael Ani|CB|20|150|ENG
Madiodio Dia|CB|22|623|SEN
Marlon Pack|DM|35|382|ENG
John Swift|AM|31|361|ENG
Márk Kosznovszky|DM|24|1008|HUN
Rocco Shein|CM|23|1964|EST
Odin Bailey|DM|26|753|ENG
Iyad Mohamed|CM|25|343|COM
Ebou Adams|DM|30|573|GAM
Colby Bishop|ST|29|1173|ENG
Adrian Segečić|RW|22|3950|CRO
Abu Kamara|RW|23|1840|ENG
Franco Umeh-Chibueze|RW|21|775|IRL
Tyrese Shade|ST|26|462|SKN
Thomas Waddingham|ST|21|766|AUS
Keshi Anderson|LW|31|294|ENG
Josh Murphy|LW|31|1255|ENG
Ryan Kavuma-McQueen|LW|17|150|ENG
Luke Brooke-Smith|LW|18|1019|NZL
Marezi|ST|23|2799|SRB
Eoin Kenny|RW|20|279|NIR
Harvey Blair|LW|23|432|ENG
Olutayo Singerr|ST|19|150|ENG` },
    { id: 'sheffield_utd', name: 'Шеффилд Юнайтед', city: 'Шеффилд', stadium: 'Bramall Lane', cap: 32702, colors: ['#ee2737', '#ffffff'], players: `
Michael Cooper|GK|27|6947|ENG
Adam Davies|GK|34|279|WAL
Matt Doherty|CB|34|683|IRL
Sam McCallum|LB|26|1597|ENG
Japhet Tanganga|CB|27|5646|ENG
Hamza Choudhury|RB|29|1858|BAN
Harrison Burrows|LB|24|10953|ENG
Liam Kitching|CB|27|12172|IRL
Jamie Shackleton|RW|27|604|ENG
Mark McGuinness|CB|25|7042|IRL
Rhys Norrington-Davies|LB|27|1495|WAL
Jamal Baptiste|CB|22|473|ENG
Femi Seriki|RB|24|2388|ENG
Oliver Arblaster|CM|22|1627|ENG
Joe Rothwell|CM|31|311|ENG
Romelle Donovan|RW|19|5459|ENG
Tahith Chong|RW|26|2230|CUW
Kalvin Phillips|CM|30|4884|ENG
Sydie Peck|DM|22|15319|ENG
Jaïro Riedewald|DM|30|889|NED
Thomas Cannon|ST|23|9240|IRL
Jordan Ayew|ST|35|926|GHA
Ben Brereton|RW|27|4570|CHI
Tyrese Campbell|ST|26|6614|ENG
Ryan Oné|ST|20|1461|SCO
Patrick Bamford|ST|33|930|ENG` },
    { id: 'millwall', name: 'Миллуолл', city: 'Лондон', stadium: 'The Den', cap: 20146, colors: ['#001d5e', '#ffffff'], players: `
Lukas Jensen|GK|27|445|DEN
Max Crocombe|GK|33|650|NZL
Filip Marschall|GK|23|1070|ENG
Joel Coleman|GK|31|303|ENG
Jordi Osei-Tutu|RB|28|354|ENG
Zak Sturge|LB|22|3324|ENG
Tristan Crama|RB|24|4095|FRA
Jake Cooper|CB|31|1079|ENG
Caleb Taylor|CB|23|4237|ENG
Elkan Baggott|CB|24|345|IDN
Ryan Leonard|RB|34|308|ENG
Danny Batth|CB|36|274|ENG
Alfie Doughty|LB|26|2149|ENG
Mathis Servais|LB|21|4918|BEL
Camiel Neghli|AM|24|4015|ALG
Jenson Metcalfe|DM|22|896|ENG
Daniel Kelly|DM|21|150|SCO
Mark Sykes|RW|29|1228|IRL
Massimo Luongo|DM|34|242|AUS
Casper De Norre|DM|29|1307|BEL
Luke Cundle|AM|24|2022|ENG
Derek Mazou-Sacko|DM|22|995|FRA
Taïryk Arconte|ST|22|2212|GLP
Mihailo Ivanović|ST|21|10261|SRB
Romain Esse|RW|21|15400|ENG
Lyndon Dykes|ST|31|594|SCO
Josh Coburn|ST|23|6582|ENG
Kyrell Lisbie|LW|22|693|ENG
Zak Lovelace|ST|20|564|ENG
Yanis Issoufou|LW|19|150|FRA
Regan Monty|ST|15|150|ENG` },
    { id: 'bristol_city', name: 'Бристоль Сити', city: 'Бристоль', stadium: 'Ashton Gate Stadium', cap: 27000, colors: ['#e21b23', '#ffffff'], players: `
Sam Tickle|GK|24|1379|ENG
Lewis Thomas|GK|29|226|WAL
Bradley Collins|GK|29|811|ENG
Lisav Eissat|CB|21|1843|ROU
Cameron Pring|LB|28|1572|ENG
Rob Atkinson|CB|28|1643|ENG
Luke McNally|CB|27|1705|IRL
Rob Dickie|CB|30|1181|ENG
George Tanner|CB|26|1871|ENG
Rio Cardines|LB|20|784|TRI
Noah Eile|CB|24|4079|SWE
Adam Randell|DM|26|2812|ENG
Brian De Keersmaecker|DM|26|1527|BEL
Joe Williams|DM|29|364|ENG
Scott Twine|AM|27|13265|ENG
Jason Knight|DM|25|5188|IRL
Tomi Horvat|AM|27|2340|SVN
Sam Greenwood|LW|24|1628|ENG
Gibson Yah|DM|23|1312|NED
Yu Hirakawa|RW|25|1149|JPN
Lorent Tolaj|ST|25|1588|SUI
Sam Bell|LW|24|1209|ENG
Jed Wallace|RW|32|891|ENG
Dom Ballard|ST|21|2379|ENG
Elijah Adebayo|ST|28|1451|ENG` },
    { id: 'lincoln', name: 'Линкольн Сити', city: 'Линкольн', stadium: 'ProAmpac Stadium', cap: 10780, colors: ['#e30613', '#ffffff'], players: `
George Wickens|GK|24|1490|ENG
Jamie Pardington|GK|26|359|ENG
Joe Gauci|GK|26|1103|AUS
Tendayi Darikwa|RB|34|376|ZIM
Adam Reach|LB|33|361|ENG
Andrei Coubiș|CB|23|851|ROU
Ryley Towler|CB|24|910|ENG
Sonny Bradley|CB|35|359|ENG
Tom Hamer|CB|27|877|ENG
Deji Elerewe|CB|23|825|ENG
Charlie Parks|CB|19|150|ENG
Tom Bayliss|DM|27|569|ENG
Conor McGrandles|DM|31|536|SCO
Dom Jefferies|LW|24|546|WAL
Callum Elder|LB|31|525|AUS
Joshua Honohan|LB|25|340|IRL
Иван Варфоломеев|DM|22|1171|UKR
Yunus Konak|DM|20|5148|TUR
Chiedozie Ogbene|AM|29|2602|IRL
Daniel Oyegoke|RW|23|1023|ENG
Reeco Hackett|RW|28|481|STL
Mason Melia|ST|19|1704|IRL
Mikkel Ladefoged|ST|23|624|DEN
Rob Street|ST|25|1078|ENG
Ben House|LW|27|742|SCO
Isaac Olaofe|ST|26|445|ENG
Ethan Wheatley|ST|20|224|ENG
Freddie Draper|ST|22|1034|ENG` },
    { id: 'cardiff', name: 'Кардифф Сити', city: 'Кардифф', stadium: 'Cardiff City Stadium', cap: 33280, colors: ['#0070b5', '#ffffff'], players: `
Nathan Trott|GK|27|1282|ENG
Harry Tyrer|GK|24|540|ENG
Matthew Turner|GK|24|588|WAL
Will Fish|CB|23|1079|ENG
Joel Bagan|LB|25|1399|IRL
Gabriel Osho|CB|28|965|NGA
Krystian Bielik|CB|28|1485|POL
Calum Chambers|CB|31|453|ENG
Calum Scanlon|LB|21|625|ENG
Perry Ng|RB|30|863|ENG
Ronan Kpakio|RB|19|1892|WAL
Dylan Lawlor|CB|20|1890|WAL
Jack Moylan|AM|25|873|IRL
Rubin Colwill|AM|24|1655|WAL
David Turnbull|DM|27|1109|SCO
Alex Robertson|DM|23|1749|AUS
Joel Colwill|AM|21|1196|WAL
Charlie Holt|CM|17|150|ENG
Yousef Salech|ST|24|4005|DEN
Ollie Tanner|RW|24|1182|ENG
Chris Willock|LW|28|695|ENG
Isaak Davies|LW|25|1009|WAL
Cian Ashford|RW|22|1669|WAL
Callum Robinson|ST|31|354|IRL` },
    { id: 'wrexham', name: 'Рексем', city: 'Рексем', stadium: 'Racecourse Ground', cap: 12600, colors: ['#e30613', '#ffffff'], players: `
Danny Ward|GK|33|268|WAL
Anthony Patterson|GK|26|10521|ENG
Callum Burton|GK|30|277|ENG
Callum Doyle|CB|23|16569|ENG
Jacques Ekomié|LB|23|5570|GAB
Max Cleworth|CB|24|10478|ENG
Dominic Hyam|CB|30|1238|SCO
Joe Worrall|CB|29|1295|ENG
Zak Vyner|CB|29|2016|KEN
Danny Imray|RB|23|1098|ENG
Benjamin Whiteman|DM|30|1499|ENG
Josh Windass|AM|32|886|ENG
Issa Kaboré|RB|25|2645|BFA
Liberato Cacace|LB|26|1874|NZL
George Thomason|LB|25|2064|ENG
George Dobson|CM|28|1249|ENG
Callum O'Hare|AM|28|4183|ENG
Ben Sheaf|DM|28|5338|ENG
Oliver Rathbone|AM|30|727|ENG
Sebastian Revan|LB|23|150|ENG
Lewis O'Brien|AM|28|4743|ENG
Nathan Broadhead|AM|28|6083|WAL
Aaron James|RB|21|150|ENG
Matty James|DM|35|322|ENG
Ryan Longman|RB|25|1642|ENG
Bailey Cadamarteri|ST|21|2133|JAM
Kieffer Moore|ST|34|1112|WAL
Sam Smith|ST|28|1194|ENG` },
    { id: 'bolton', name: 'Болтон Уондерерс', city: 'Болтон', stadium: 'Toughsheet Community Stadium', cap: 28723, colors: ['#ffffff', '#263c7e'], players: `
Jack Bonham|GK|33|340|IRL
David Harrington|GK|26|448|WAL
Gavin Bazunu|GK|24|9237|IRL
Chris Forino|CB|26|416|STL
Lewis Brunt|CB|25|484|ENG
Ben Davies|CB|31|665|ENG
Akin Famewo|LB|27|832|ENG
Eoin Toal|CB|27|573|NIR
Max Conway|LB|23|850|ENG
Xavier Simons|DM|23|939|ENG
Josh Sheehan|DM|31|528|WAL
David Watson|CM|21|1906|SCO
Atsuki Ito|DM|28|1291|JPN
Rúben Rodrigues|AM|30|439|POR
Ethan Erhahon|DM|25|893|SCO
Gaizka Larrazabal|RW|28|1906|ESP
Jayden Nelson|LW|24|1669|CAN
Luca Stephenson|RW|23|1345|ENG
John McAtee|AM|27|335|ENG
Kyliane Dong|LW|22|1274|FRA
Theo Bair|ST|27|1385|CAN
Sam Dalby|ST|26|1294|ENG
Thierry Gale|LW|24|685|BRB
Samuel Iling-Junior|RW|23|9997|ENG
Ryan Hardie|ST|29|725|SCO` },
    { id: 'charlton', name: 'Чарльтон Атлетик', city: 'Лондон', stadium: 'The Valley', cap: 27111, colors: ['#d4021d', '#ffffff'], players: `
Arthur Okonkwo|GK|25|3904|NGA
Tiernan Brooks|GK|24|204|IRL
Will Mannion|GK|28|267|ENG
Kayne Ramsay|CB|26|935|ENG
Josh Edwards|LB|26|523|SCO
Reece Burke|CB|30|622|ENG
Lloyd Jones|CB|31|733|ENG
Billy Koumetio|CB|23|637|FRA
Amari'i Bell|CB|32|505|JAM
Ivan Mesík|LB|25|910|SVK
Dan McNamara|RB|27|1138|IRL
Collins Sichenje|CB|23|862|KEN
Alan Mwamba|DM|20|150|ENG
Tyler Bindon|CB|21|4047|NZL
Conor Coventry|DM|26|1450|IRL
Harvey Knibbs|AM|27|1108|ENG
Sonny Carey|AM|25|2764|ENG
Nathaniel Chalobah|DM|31|283|ENG
Timothy Ouma|CM|22|890|KEN
Joe Rankin-Costello|AM|27|935|ENG
Oliver Skipp|DM|26|4541|ENG
Josh Laqeretabua|CB|21|216|FIJ
Tyreece Campbell|LW|23|1606|JAM
Karlan Grant|LW|29|1280|ENG
Miles Leaburn|ST|22|1563|ENG
Millenic Alli|LW|26|1454|IRL
Charlie Kelman|ST|24|2043|USA
Matty Godden|ST|35|330|ENG
Rob Apter|RW|23|1779|SCO
Micah Mbick|ST|19|896|ENG
Junior Nkeng|LW|19|609|ESP` },
    { id: 'norwich', name: 'Норвич Сити', city: 'Норидж', stadium: 'Carrow Road', cap: 27606, colors: ['#fff200', '#00a650'], players: `
Vladan Kovačević|GK|28|1920|BIH
Daniel Grimshaw|GK|28|502|ENG
Jack Stacey|RB|30|954|ENG
Harry Darling|CB|27|2533|ENG
Lucien Mahovo|LB|21|605|ENG
Darlin Yongwa|CB|26|4980|CMR
Ben Chrisene|LB|22|2010|ENG
Ruairi McConville|CB|21|5980|NIR
Bruno Alves|CB|21|150|BRA
José Córdoba|CB|25|5427|PAN
Kellen Fisher|RB|22|5108|ENG
Pelle Mattsson|DM|25|3400|DEN
Jacob Wright|DM|21|4427|ENG
Anis Ben Slimane|AM|25|2636|TUN
Mirko Topić|DM|25|2882|SRB
Kenny McLean|DM|34|739|SCO
Paris Maghoma|AM|25|1223|ENG
Sam Field|DM|28|1698|ENG
Andre Brooks|RW|23|7685|JAM
Ante Crnac|RW|22|4227|CRO
Papa Diallo|RW|22|4577|SEN
Mohamed Touré|ST|22|4273|AUS
Jovon Makama|ST|22|5396|ENG
Oscar Schwartau|LW|20|9768|DEN
Mathias Kvistgaarden|ST|24|7208|DEN
Ali Ahmed|LW|26|4234|CAN
Anthony Musaba|LW|25|6758|NED` },
    { id: 'watford', name: 'Уотфорд', city: 'Уотфорд', stadium: 'Vicarage Road', cap: 22200, colors: ['#fbee23', '#ed2127'], players: `
Federico Ravaglia|GK|26|1565|ITA
Sam Walker|GK|35|213|ENG
Daniel Bachmann|GK|32|588|AUT
Joshua Mullins|CM|20|150|ENG
Jeremy Ngakia|RB|26|2046|COD
Soumaïla Coulibaly|CB|23|7670|FRA
Kévin Keben|CB|22|3146|CMR
Mattie Pollock|CB|25|1983|ENG
Krépin Diatta|RB|27|2399|SEN
Marc Bola|LB|28|1292|ENG
Omar Haktab Traoré|RB|28|1636|GER
Branimir Mlačić|CB|19|8643|CRO
James Clarridge|CB|22|150|ENG
Hector Kyprianou|DM|25|1357|CYP
Edoardo Bove|DM|24|4728|ITA
Kwadwo Baah|RW|23|2304|GER
Iker Bravo|AM|21|2518|ESP
Martín Payero|CM|28|3895|ARG
Jordan Zemura|LB|26|2267|ZIM
Edo Kayembe|DM|28|1992|COD
Othmane Maamma|LW|21|5932|MAR
Luca Kjerrumgaard|ST|23|10106|DEN
Myron Boadu|ST|25|2442|NED
Rocco Vata|LW|21|1684|IRL
Michail Antonio|ST|36|228|JAM
Mamadou Doumbia|ST|20|5607|MLI
Amin Nabizada|RW|19|809|AFG
Jack Grieves|CM|21|284|ENG
Stephy Mavididi|LW|28|4448|ENG` },
    { id: 'burnley', name: 'Бернли', city: 'Бернли', stadium: 'Turf Moor', cap: 22546, colors: ['#6c1d45', '#99d6ea'], players: `
Max Weiß|GK|22|5809|GER
Ben Amos|GK|36|288|ENG
Grégoire Coudert|GK|27|2028|FRA
Kyle Walker|RB|36|1105|ENG
Max Alleyne|CB|21|3001|ENG
Bashir Humphreys|CB|23|15444|ENG
Connor Roberts|RB|31|1350|WAL
Anel Ahmedhodžić|CB|27|10333|BIH
Hjalmar Ekdal|CB|28|3158|SWE
Shurandy Sambo|RB|25|1162|CUW
Oliver Sonne|RB|25|2544|PER
Lucas Pires|LB|25|3812|BRA
Jordan Beyer|CB|26|1530|GER
Igor Julio|CB|28|8098|BRA
Reo Hatate|CM|28|5763|JPN
Ugo Raghouber|DM|23|2099|FRA
Aaron Ramsey|AM|23|6049|ENG
Josh Cullen|CM|30|3819|IRL
Hannibal Mejbri|AM|23|16154|TUN
Josh Laurent|DM|31|961|ENG
Jacob Bruun Larsen|LW|28|2818|DEN
Jamie Vardy|ST|39|953|ENG
Marcus Edwards|RW|27|6009|CYP
Zeki Amdouni|ST|25|7128|SUI
Дастан Сатпаев|LW|18|6272|KAZ
Andréas Hountondji|ST|24|3494|BEN
Largie Ramazani|LW|25|5852|BEL
Armando Broja|ST|25|8027|ALB
Mike Trésor|LW|27|1766|BEL
Ashley Barnes|ST|36|313|ENG
Michael Obafemi|ST|26|433|IRL` },
    { id: 'derby', name: 'Дерби Каунти', city: 'Дерби', stadium: 'Pride Park Stadium', cap: 33597, colors: ['#ffffff', '#000000'], players: `
Jacob Widell Zetterström|GK|28|1487|SWE
Richard O'Donnell|GK|38|271|ENG
Josh Vickers|GK|30|458|ENG
Derry John Murkin|LB|27|1158|ENG
Craig Forsyth|LB|37|298|SCO
Matt Clarke|CB|30|1607|ENG
Sondre Langås|CB|25|2959|NOR
Jack Robinson|CB|33|271|ENG
Charlie Taylor|LB|33|650|ENG
Max Johnston|RB|22|3704|SCO
Joe Ward|RB|31|371|ENG
Ryan Nyambe|RB|28|360|NAM
Dion Sanderson|CB|26|2148|ENG
Eiran Cashin|CB|24|2392|IRL
David Ozoh|DM|21|1931|ENG
Bobby Clark|AM|21|9315|ENG
Sam Szmodics|AM|31|2098|IRL
Filip Bilbija|AM|26|2137|GER
Alex Mowatt|DM|31|791|ENG
Ryan Hedges|LB|31|335|WAL
Lewis Travis|DM|29|1306|ENG
Oscar Fraulo|DM|22|2154|DEN
Patrick Agyemang|ST|25|11179|USA
Carlton Morris|ST|30|2490|ENG
Rhian Brewster|LW|26|1438|ENG
Lars-Jørgen Salvesen|ST|30|349|NOR
Mohammed Fuseini|RW|24|1614|GHA
Henrik Meister|ST|22|3640|DEN
Corey Blackett-Taylor|LW|29|279|ENG` },
    { id: 'preston', name: 'Престон Норт Энд', city: 'Престон', stadium: 'Deepdale', cap: 23408, colors: ['#ffffff', '#002e5d'], players: `
Daniel Iversen|GK|29|1705|DEN
Lee Nicholls|GK|34|516|ENG
Andrija Vukčević|LB|30|224|MNE
Liam Lindsay|CB|31|627|SCO
Jordan Storey|CB|29|2465|ENG
Andrew Hughes|CB|34|423|WAL
Lewis Gibson|CB|26|1857|ENG
Odeluga Offiah|CB|23|3667|ENG
Pol Valentín|RW|29|575|ESP
Harry Clarke|RB|25|2059|ENG
Alfie Devine|CM|22|10435|ENG
Ali McCann|CM|26|1594|NIR
Thierry Small|LB|22|6033|ENG
Caleb Wiley|LW|21|11642|USA
Jordan Thompson|CM|29|329|NIR
Andrew Moran|CM|23|1575|IRL
Theo Carroll|RW|19|150|ENG
Léo Leroy|CM|26|1896|FRA
Brad Potts|RB|32|259|ENG
Jusef Erabi|ST|23|2450|SWE
Callum Lang|ST|28|1642|ENG
Stanley Mills|RW|22|1737|ENG
Liam Gibbs|RW|23|1212|ENG
Delano Burgzorg|LW|27|1771|SUR
Johnny Kenny|ST|23|1366|IRL` },
  ],
});
