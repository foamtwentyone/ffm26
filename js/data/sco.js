// Шотландский Премьершип 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'sco', name: 'Шотландский Премьершип', short: 'Шотландия', country: 'SCO', tier: 1, weekday: 6,
  autumn: { from: '08-01', rounds: 11 }, spring: { from: '01-17', rounds: 11 },
  ticket: 15, prize: [5000, 4650, 4250, 3900, 3550, 3200, 2800, 2450, 2100, 1750, 1350, 1000],
  teams: [
    { id: 'celtic', name: 'Селтик', city: 'Глазго', stadium: 'Celtic Park', cap: 60832, colors: ['#018749', '#ffffff'], players: `
Viljami Sinisalo|GK|25|1058|FIN
Sam Johnstone|GK|33|1578|ENG
Ross Doohan|GK|28|347|SCO
Alistair Johnston|RB|28|8287|CAN
Jordan Lotomba|RB|28|1989|SUI
Liam Scales|CB|28|4592|IRL
Auston Trusty|CB|28|3376|USA
Landon Emenalo|LB|18|300|ENG
Cameron Carter-Vickers|CB|28|9616|USA
Dane Murray|CB|23|460|SCO
Colby Donovan|RB|20|1595|SCO
Anthony Ralston|RB|27|865|SCO
Joseph Haney|LB|17|300|SCO
Kieran Tierney|LB|29|7007|SCO
Benjamin Nygren|AM|25|13782|SWE
Luke McCowan|RW|28|1159|SCO
Oliver Sørensen|CM|24|8797|DEN
Alex Oxlade-Chamberlain|DM|33|640|ENG
Mika Baur|DM|22|3873|GER
Joël van den Berg|DM|19|2009|NED
Callum McGregor|DM|33|1556|SCO
Jota|LW|27|4062|POR
Kasper Waarts Høgh|ST|25|13391|DEN
Camilo Durán|ST|24|1096|COL
Hyun-Jun Yang|RW|24|3590|KOR
Sebastian Tounekti|LW|24|5647|TUN
Callum Osmand|LW|20|373|WAL
Haissem Hassan|RW|24|5670|EGY
Shumaira Mheuka|ST|19|2843|ENG
James Forrest|RW|35|276|SCO` },
    { id: 'rangers', name: 'Рейнджерс', city: 'Глазго', stadium: 'Ibrox Stadium', cap: 51700, colors: ['#1b458f', '#ffffff'], players: `
Ivor Pandur|GK|26|4072|CRO
Liam Kelly|GK|30|657|SCO
Rydnn McGuire|GK|18|300|SCO
Ben Godfrey|CB|28|3618|ENG
John Souttar|CB|30|1163|SCO
Kosta Nedeljković|RB|20|7403|SRB
Dujon Sterling|RB|27|1406|ENG
Olwethu Makhanya|CB|22|2112|RSA
Tuur Rommens|LB|23|8795|BEL
James Penrice|LB|27|1675|SCO
Emmanuel Fernandez|CB|24|4204|NGA
Ashton Scally|CB|16|300|SCO
José Cifuentes|AM|27|1906|ECU
Ross McCrorie|RB|28|2058|SCO
Daniel Neil|DM|24|4277|ENG
Cameron Devlin|CM|28|1491|AUS
Vanja Dragojević|DM|20|5934|SRB
Tochi Chukwuani|DM|23|6048|DEN
Nicolas Raskin|DM|25|14468|BEL
Findlay Curtis|RW|20|2218|SCO
Lawrence Shankland|ST|31|2189|SCO
Youssef Chermiti|ST|22|16524|POR
Min-Su Kim|LW|20|4396|KOR
Daisuke Yokota|RW|26|1039|JPN
Kevin Kelsy|ST|22|3725|VEN
Ryan Don Naderi|ST|23|1070|CZE
Djeidi Gassama|LW|23|7452|MTN
Badredine Bouanani|RW|21|11298|ALG
Bojan Miovski|ST|27|1891|MKD
Ross McCausland|LW|23|761|NIR` },
    { id: 'hearts', name: 'Харт оф Мидлотиан', city: 'Эдинбург', stadium: 'Tynecastle Park', cap: 20099, colors: ['#800020', '#ffffff'], players: `
Beau Reus|GK|24|1512|NED
Zander Clark|GK|34|262|SCO
Ryan Fulton|GK|30|228|SCO
Kieran Wright|GK|27|219|SCO
Christian Dahle Borchgrevink|RB|27|408|NOR
Stephen Kingsley|LB|32|286|SCO
Craig Halkett|CB|31|482|SCO
Jamie McCart|CB|29|379|SCO
Oisin McEntee|RB|25|619|IRL
Stuart Findlay|CB|31|585|SCO
Harry Milne|LB|29|315|SCO
Jordi Altena|RB|22|700|NED
Malachi Fagan-Walcott|CB|24|300|ENG
Laurent Mendy|CB|29|300|FRA
Leart Kabashi|LW|18|557|SUI
Ageu|AM|24|1077|BRA
Tom Renaud|CM|25|384|FRA
Blair Spittal|CM|30|333|SCO
Sabri Guendouz|AM|26|536|FRA
Tómas Magnússon|CM|24|607|ISL
Yan Dhanda|AM|27|288|ENG
Finlay Pollock|AM|22|463|SCO
Aron Benjaminsen|RW|18|300|FRO
Calvin Miller|LW|28|732|SCO
JJ Williams|ST|28|208|USA
Cláudio Braga|ST|26|6622|POR
Pierre Landry Kaboré|ST|25|371|BFA
Joshua McPake|LW|25|451|SCO
Elton Kabangu|ST|28|487|COD
James Wilson|ST|19|1611|SCO
Sabah Kerjota|RW|25|474|ALB
Rogers Mato|LW|23|300|UGA
Amadou Ba-Sy|ST|25|464|FRA` },
    { id: 'dundee_utd', name: 'Данди Юнайтед', city: 'Данди', stadium: 'CalForth Construction Arena at Tannadice Park', cap: 14268, colors: ['#f26522', '#000000'], players: `
Jack Walton|GK|28|480|ENG
Jordan Amissah|GK|25|443|GHA
Bert Esselink|CB|27|264|NED
Иурие Иову|CB|24|337|MDA
Ross Graham|CB|25|411|SCO
Michael Forbes|CB|22|674|NIR
Kevin Ciubotaru|LB|22|752|ROU
Joshua Rawlins|RB|22|771|AUS
Panutche Camará|CM|29|249|GNB
Dylan Tait|DM|24|710|SCO
Will Ferry|LW|25|891|IRL
Emmanuel Agyei|CM|21|403|GHA
Zidane Iqbal|CM|23|853|IRQ
Lyall Cameron|AM|24|847|SCO
Neil Farrugia|AM|27|399|IRL
Dario Naamo|RW|21|774|IRQ
Abdoulaye Yoro|CM|19|300|CIV
Mehdi Merghem|RW|29|392|ALG
Zachary Sapsford|ST|24|1294|AUS
Lachlan Rose|ST|27|619|AUS
Jesse Randall|LW|24|1006|NZL
Daniel Bennie|LW|20|665|AUS
Idjessi Metsoko|ST|24|353|TOG` },
    { id: 'dundee', name: 'Данди', city: 'Данди', stadium: 'Dens Park', cap: 12085, colors: ['#002d72', '#ffffff'], players: `
Owen Goodman|GK|22|642|CAN
Kieran O'Hara|GK|30|208|IRL
Harrison Sharp|GK|25|298|SCO
Bradley Halliday|RB|31|376|ENG
Idris Odutayo|LB|23|758|ENG
Ryan Astley|CB|25|592|WAL
Owen Bevan|CB|22|481|WAL
Matai Akinmboni|CB|20|1488|USA
Drey Wright|LB|31|325|ENG
Imari Samuels|LB|23|336|ENG
Joe Wright|CB|31|151|ENG
Ryan Finnigan|CM|23|347|ENG
Finlay Robertson|AM|23|402|SCO
Alan Forrest|LW|30|393|SCO
Jack Moorhouse|DM|20|274|ENG
Žan Bešir|CM|26|437|SVN
Callum Jones|CM|25|307|WAL
Ethan Hamilton|DM|28|579|SCO
Bobby Wales|ST|21|834|SCO
Ashley Hay|ST|23|388|ENG
Simon Murray|ST|34|352|SCO
Charlie Reilly|LW|24|347|SCO
Joe Westley|AM|22|758|ENG
Bradley Fink|ST|23|457|SUI
Joe Bevan|RW|22|300|SCO
Ashton Leiper|RW|19|300|SCO
Ryan Bland|ST|17|300|SCO
Alfie Harrison|RW|20|300|ENG` },
    { id: 'st_mirren', name: 'Сент-Миррен', city: 'Пейсли', stadium: 'The Marbill Coaches Stadium', cap: 8016, colors: ['#000000', '#ffffff'], players: `
Jacob Chapman|GK|26|451|AUS
Peter Urminský|GK|27|265|SVK
Ryan Mullen|GK|25|300|SCO
Grant Tamosevicius|GK|24|300|SCO
Liam Donnelly|CB|30|246|NIR
Richard King|CB|24|335|JAM
Louis Jackson|CB|21|300|SCO
Alex Gogić|CB|32|309|CYP
Marcus Fraser|CB|32|272|SCO
Marcello De Barros|CB|15|300|SCO
Calvin Ramsay|RB|23|1143|SCO
Henry Fieldson|LB|21|791|ENG
Jayden Richardson|RW|26|317|ENG
Declan John|LW|31|294|WAL
Ryan Carr|DM|22|300|ENG
Samuel Ramos|CM|26|384|ESP
Allan Campbell|CM|28|326|SCO
Malik Dijksteel|CM|25|380|NED
Ismeal Kabia|RB|20|516|NED
Keanu Baccus|CM|28|353|AUS
Fraser Taylor|CM|23|402|SCO
Carrick McEvoy|CM|19|300|SCO
Paul Nsio|DM|20|570|ENG
Killian Phillips|CM|24|1013|IRL
Eseosa Sule|ST|20|300|NGA
Jonah Ayunga|ST|29|309|KEN
Luke Thomas|LW|27|296|ENG
Jalmaro Calvin|ST|23|321|ATG
Jake Young|ST|25|325|ENG
Chris Mochrie|ST|23|356|SCO
Josh Farquhar|ST|18|300|SCO
Nikolas Agrafiotis|ST|26|174|SRB
Luke Douglas|ST|17|300|SCO
Caiden McMillan|CM|17|300|SCO` },
    { id: 'falkirk', name: 'Фалкерк', city: 'Фалкерк', stadium: 'The Falkirk Stadium', cap: 9008, colors: ['#002d72', '#ffffff'], players: `
Nicky Hogarth|GK|25|459|SCO
Scott Bain|GK|34|424|SCO
Joe Hastings|GK|17|300|SCO
Keelan Adams|RB|24|349|SCO
Leon McCann|LB|26|485|SCO
Liam Henderson|CB|30|436|SCO
Coll Donaldson|CB|31|338|SCO
Lewis Neilson|CB|23|448|SCO
Connor Allan|CB|22|458|SCO
Deniss Meļņiks|CB|24|157|LVA
Jack McMillan|DM|28|461|SCO
Brad Spencer|DM|30|436|SCO
Craig Sibbald|CM|31|246|SCO
Finn Yeats|AM|22|825|SCO
Finley Barbrook|DM|21|387|ENG
Scott Tanser|LW|32|376|ENG
Ryan Strain|RW|29|250|AUS
Aidan Nesbitt|LW|29|215|SCO
Conor McLeod|RW|19|300|ENG
Ben Krauhaus|AM|23|405|ENG
Kalvin Bennett|CM|19|300|SCO
Ben Parkinson|ST|21|522|ENG
Ross MacIver|ST|27|306|SCO
Paul McGovern|ST|18|649|NIR
Ethan Laidlaw|LW|21|300|SCO
Joseph Gardner|LW|21|580|ENG
Ethan Ross|RW|25|363|SCO
Jacob Murrell|ST|22|225|USA
Alfie Agyeman|ST|26|259|ITA
Owen Eames|LW|19|527|ENG
Aodhan Doherty|RW|20|415|NIR
CJ Fodrey|ST|22|285|USA` },
    { id: 'st_johnstone', name: 'Сент-Джонстон', city: 'Перт', stadium: 'McDiarmid Park', cap: 10673, colors: ['#0055a4', '#ffffff'], players: `
Toby Steward|GK|21|779|ENG
Ross Sinclair|GK|25|341|SCO
Kyle Thomson|GK|19|300|SCO
Enes Alić|LB|27|149|BIH
Cheick Diabate|CB|24|364|ENG
Morgan Boyes|CB|25|330|WAL
Zach Mitchell|CB|21|425|ENG
Božo Mikulić|CB|29|132|CRO
Matty Foulds|LB|28|259|ENG
Daniel Finlayson|CB|25|553|NIR
Liam Smith|RB|30|217|SCO
Jason Holt|DM|33|209|SCO
Macaulay Tait|CM|21|930|SCO
Matty Todd|RB|25|390|SCO
Joel Cotterill|AM|22|403|WAL
Reece McAlear|DM|24|358|SCO
Jack Robertson|CM|18|300|SCO
Unax Álvarez|ST|24|420|ESP
Taylor Steven|RW|22|553|SCO
Josh Fowler|ST|24|444|ENG
Jamie Gullan|AM|27|386|SCO
Samuel Stanton|RW|32|175|SCO
Kai Fotheringham|LW|23|411|SCO
Danny Schmidt|ST|23|435|GER
Logan Chalmers|RW|26|424|SCO
Josh Campbell|AM|26|703|SCO
Ruari Paton|ST|26|500|IRL` },
    { id: 'aberdeen', name: 'Абердин', city: 'Абердин', stadium: 'Pittodrie Stadium', cap: 22199, colors: ['#e30613', '#ffffff'], players: `
Marius Müller|GK|33|765|GER
Daniel Klein|GK|25|358|GER
Nicky Devlin|CB|33|293|SCO
Mitchel Frame|LB|20|300|SCO
Mats Knoester|CB|27|616|NED
Gavin Molloy|CB|25|395|IRL
Jack Milne|CB|23|1609|SCO
Lewis Mayo|CB|26|387|SCO
Kristers Tobers|CB|25|760|LVA
Nesta Guinness-Walker|LB|27|552|ENG
Daniel Happe|CB|28|492|ENG
Chris Cadden|RB|30|474|SCO
Brad Lyons|CM|29|272|NIR
Alexander Briedl|DM|24|859|AUT
Hicham Mahou|LW|27|702|FRA
Stuart Armstrong|AM|34|302|SCO
Ante Palaversa|CM|26|354|CRO
Connor Ronan|CM|28|931|IRL
Afeez Aremu|DM|27|523|NGA
Findlay Marshall|AM|20|707|SCO
Emmanuel Gyamfi|LW|22|663|GER
Tony Yogane|LW|21|905|ENG
Ayoub Mouloua|ST|24|881|MAR
Lewis Smith|RW|26|404|SCO
Kevin Nisbet|ST|29|1154|SCO
Toyosi Olusanya|ST|29|435|ENG
Mitchy Ntelo|ST|25|436|BEL
Andrew Fasanya|ST|15|300|SCO` },
    { id: 'motherwell', name: 'Мотеруэлл', city: 'Мотеруэлл', stadium: 'Fir Park', cap: 13742, colors: ['#ffb81c', '#800020'], players: `
Alex Paulsen|GK|24|714|NZL
Matty Connelly|GK|23|329|SCO
Jack McConnell|GK|18|300|SCO
Stephen O'Donnell|RB|34|238|SCO
Jake Girdwood-Reich|CB|22|1675|AUS
Jamie Knight-Lebel|CB|21|619|CAN
Martin Moormann|CB|25|482|AUT
Jordan McGhee|RB|30|234|SCO
Tom Sparrow|RB|23|414|WAL
Paul McGinn|CB|36|290|SCO
Johnny Koutroumbis|RB|28|255|AUS
Ewan Wilson|LB|21|406|SCO
Jack Dalziel|CB|17|300|SCO
Samuel Ngandu|CB|16|300|ENG
Emmanuel Longelo|LB|25|1069|ENG
Aaron Buchanan|CM|17|300|SCO
Lukas Fadinger|DM|26|538|AUT
Alex Lowry|AM|23|349|SCO
Oscar Priestman|DM|23|537|AUS
Dylan Williams|DM|23|548|ENG
Mikey Booth|AM|19|300|SCO
Lucas Weir|CM|17|300|SCO
Dylan Levitt|DM|25|584|WAL
Joe Hodge|DM|24|732|IRL
Jardell Kanga|RW|20|785|SWE
Eythor Martin Bjørgolfsson|ST|26|439|NOR
Regan Charles-Cook|ST|29|333|GRN
Tawanda Maswanhise|ST|23|2003|ZIM
Ibrahim Said|LW|24|1568|NGA
Robbie Hunter|ST|16|300|SCO
Seb Palmer Houlden|ST|22|588|ENG
Callum Hendry|ST|28|296|SCO
Willy Vogt|ST|24|424|SUI` },
    { id: 'kilmarnock', name: 'Килмарнок', city: 'Килмарнок', stadium: 'The BBSP Stadium Rugby Park', cap: 18128, colors: ['#0055a4', '#ffffff'], players: `
Maksymilian Stryjek|GK|30|249|POL
Calum Ferrie|GK|28|258|ENG
Nico Mantl|GK|26|373|GER
Jamie Brandon|RB|28|251|SCO
MJ Kamara|RB|20|363|SLE
Cathal McCarthy|CB|20|328|IRL
Robbie Deas|CB|26|443|SCO
George Stanger|CB|26|318|NZL
Johnly Yfeko|CB|23|350|ENG
Jonathan Meier|RB|26|204|GER
Michael Schjønning-Larsen|LB|25|289|EST
Euan Bowie|LB|19|300|SCO
Mark O'Hara|CM|30|288|SCO
Greg Kiltie|AM|29|318|SCO
Tom Lowery|CM|28|275|ENG
Aaron Tshibola|DM|31|149|COD
Bailey Rice|DM|20|300|SCO
Rory McKenzie|DM|33|230|SCO
Erik Ring|RW|24|481|SWE
Joe Hugill|ST|23|537|ENG
Tyreece John-Jules|ST|25|847|ENG
Ницкы Цлесценцо|ST|25|358|MDA
Roshaun Mathurin|RW|22|491|ENG
Ieuan Owen|ST|20|300|WAL
Djenairo Daniëls|ST|24|322|SUR
Cole Burke|ST|18|300|SCO` },
    { id: 'hibernian', name: 'Хиберниан', city: 'Эдинбург', stadium: 'Easter Road Stadium', cap: 20421, colors: ['#00a650', '#ffffff'], players: `
Raphael Sallinger|GK|30|440|AUT
Jordan Smith|GK|31|331|ENG
Freddie Owens|GK|21|300|SCO
Grant Hanley|CB|34|302|SCO
Marko Ivezić|CB|24|1092|SRB
Jason Kerr|CB|29|583|SCO
Alex Williams|RB|21|683|WAL
Jack Iredale|CB|30|449|AUS
Jordan Obita|CB|32|327|UGA
Rocky Bushiri|CB|26|1001|COD
Adam Mayor|LB|21|662|ENG
Josh Mulligan|DM|23|3430|SCO
Joe Newell|DM|33|240|ENG
Miguel Chaiwa|DM|22|3417|ZAM
Jamie McGrath|AM|30|960|IRL
Nicky Cadden|LB|30|306|SCO
Callum Wright|AM|26|927|ENG
Jacob Devaney|DM|19|348|IRL
Felix Passlack|RB|28|582|GER
Kanayochukwu Megwa|RB|22|480|ENG
Azeem Abdulai|DM|23|542|SLE
Owen Elding|ST|20|921|IRL
Nathan Lowe|ST|21|1090|ENG
Martin Boyle|ST|33|399|AUS
Thibault Klidje|ST|25|1738|TOG
Ante Šuto|RW|26|300|AUS
Rabbi Matondo|LW|26|505|WAL` },
  ],
});
