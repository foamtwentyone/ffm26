// Эредивизи 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ned', name: 'Эредивизи', short: 'Эредивизи', country: 'NED', tier: 1, weekday: 6,
  autumn: { from: '08-08', rounds: 17 }, spring: { from: '01-17', rounds: 17 },
  ticket: 20, prize: [12000, 11450, 10900, 10300, 9750, 9200, 8650, 8100, 7550, 6950, 6400, 5850, 5300, 4750, 4200, 3600, 3050, 2500],
  teams: [
    { id: 'ado', name: 'АДО Ден Хааг', city: 'Гаага', stadium: 'WerkTalent Stadion', cap: 15000, colors: ['#00a650', '#ffd700'], players: `
Kilian Nikièma|GK|23|1500|BFA|2030|NED|2022-07-01
Niclas Thiede|GK|27|350|GER|2028||2026-07-15
Sem Eekhout|GK|20|500|NED|2028||2026-07-01
Caleb Kramer|GK|20|500|KEN|2027|NED|2025-07-01
Milan Hokke|CB|23|1400|NED|2027||2025-07-02
Matteo Waem|CB|26|800|BEL|2028|ITA|2023-07-13
Jonas Jensen-Abbew|CB|24|750|DEN|2030|GHA|2026-08-26
Pascal Mulder|CB|27|500|NED|2029||2026-02-03
Lasse Wilhelm|CB|23|400|GER|2029||2026-07-14
Sekou Sylla|LB|27|400|GUI|2028|NED|<2024-08-08
Othniël Raterink|RB|20|1000|NED|2027|COD|2026-08-12
Sanyika Bergtop|RB|19|50|SUR|2028|NED|2025-07-25
Juho Kilo|CM|24|1000|FIN|2029||2024-08-05
Mylian Jiménez|CM|23|450|NED|2028|COL|2025-08-07
Jan Zamburek|CM|25|400|CZE|2029||2026-07-14
Finn de Bruin|CM|22|300|NED|2027||2024-04-03
Matej Sin|AM|22|3000|CZE|2027||<2026-08-31
Evan Rottier|AM|24|850|NED|2027||2025-02-04
Nigel Thomas|LW|25|600|CUW|2027|NED|2025-08-08
Cameron Peupion|LW|24|450|AUS|2027|FRA|2025-01-31
Illaijh de Ruijter|LW|20|400|NED|2028||2025-01-01
Dani van Loenen|LW|19|500|NED|2029||2026-07-01
Álex Pozo|RW|27|1500|ESP|2028||2026-09-16
Jalen Hawkins|RW|25|400|GER|2028|USA|2026-02-03
Daryl van Mieghem|RW|36|150|NED|2027||2023-08-22
Yannick Eduardo|ST|20|2500|CZE|2027|NED|2026-07-21
Donát Bárány|ST|26|800|HUN|2030||2026-07-15
Luka Reischl|ST|22|650|AUT|2028||2025-07-01
Jesse Bal|ST|20|400|NED|2029|UGA|2025-08-22` },
    { id: 'ajax', name: 'Аякс', city: 'Амстердам', stadium: 'Johan Cruijff ArenA', cap: 55885, colors: ['#d2122e', '#ffffff'], players: `
Marc ter Stegen|GK|34|3000|GER|2027||2026-08-04
Maarten Paes|GK|28|2000|IDN|2029|NED|2026-02-02
Joeri Heerkens|GK|20|750|NED|2030|CZE|2025-07-28
Youri Baas|CB|23|16000|NED|2028||2023-01-01
Thilo Kehrer|CB|30|8000|GER|2027|BDI|2026-09-02
Aaron Bouwman|CB|19|8000|NED|2030|ENG|2025-09-01
Dies Janse|CB|20|6500|NED|2030||2026-07-01
Daley Blind|CB|36|1200|NED|2027||2026-07-08
Caio Henrique|LB|29|10000|BRA|2030|ESP|2026-07-01
Owen Wijndal|LB|26|2000|NED|2027|SUR|<2022-07-12
Jofre Torrents|LB|19|1000|ESP|2030||2026-08-17
Lucas Rosa|RB|26|5000|BRA|2029|ITA|2025-02-04
Anton Gaaei|RB|23|5000|DEN|2028||2023-08-17
Jorthy Mokio|DM|18|15000|COD|2031|BEL|2025-09-01
Yves Bissouma|DM|30|10000|MLI|2027|CIV|2026-09-16
Sofyan Amrabat|DM|30|8000|MAR|2028|NED|2026-08-30
Davy Klaassen|CM|33|2000|NED|2027||2024-09-17
Oscar Gloukh|AM|22|13000|ISR|2030||2025-08-01
Julian Brandt|AM|30|12000|GER|2029||2026-07-31
Abdellah Ouazane|AM|17|8000|MAR|2028|NED|2028-06-30
Rayane Bounida|AM|20|5000|MAR|2028|BEL|2025-09-01
Simon Adingra|LW|24|22000|CIV|2027||2026-09-02
Oliver Edvardsen|LW|27|3000|NOR|2028||<2025-01-31
Виктор Цыганков|RW|28|15000|UKR|2029||2026-08-27
Steven Berghuis|RW|34|2000|NED|2027||<2021-07-16
Tolu Arokodare|ST|25|22000|NGA|2027||2026-07-29
Marcos Leonardo|ST|23|16000|BRA|2031||2026-07-17
Kasper Dolberg|ST|29|7000|DEN|2029||2025-09-02` },
    { id: 'az', name: 'АЗ Алкмар', city: 'Алкмар', stadium: 'AFAS Stadion', cap: 19500, colors: ['#e30613', '#ffffff'], players: `
Jari De Busser|GK|27|5000|BEL|2031||<2026-07-01
Rome-Jayden Owusu-Oduro|GK|22|4000|NED|2030|GHA|2023-07-01
Jeroen Zoet|GK|35|250|NED|2027||2024-07-15
Hobie Verhulst|GK|33|150|NED|2028||<2020-07-01
Wouter Goes|CB|22|15000|NED|2030||2023-07-01
Lewis Schouten|CB|22|4000|NED|2028||<2023-07-01
Andrea Natali|CB|18|2000|ITA|2031||2026-07-28
Rion Ichihara|CB|21|1500|JPN|2031||2026-01-31
Wesley Hoedt|CB|32|1200|NED|2027||2026-08-31
Mateo Chávez|LB|22|8000|MEX|2030||2025-07-01
Mees de Wit|LB|28|6000|NED|2029||<2022-07-01
Elijah Dijkstra|RB|20|10000|NED|2029|CUW|2025-07-01
Denso Kasius|RB|24|6000|NED|2029||2023-07-03
Seiya Maikuma|RB|29|2000|JPN|2028||2024-07-01
Peer Koopmeiners|DM|26|15000|NED|2029||2021-07-01
Stije Resink|DM|23|7000|NED|2031||<2026-08-18
Jordy Clasie|DM|35|800|NED|2028||2019-07-22
Dave Kwakman|CM|22|5000|NED|2029||2024-07-01
Kees Smit|AM|20|25000|NED|2030||2024-07-01
Valdemar Byskov|AM|21|5000|DEN|2031||2026-08-31
Hessel de Wit|AM|19|600|NED|2030|SUR|2030-06-30
Ro-Zangelo Daal|LW|22|8000|NED|2030|CUW|2025-01-07
Wassim Bouziane|LW|19|450|NED|2030|MAR|2026-07-09
Weslley Patati|RW|23|4500|BRA|2030|POR|2025-08-28
Calvin Stengs|RW|27|4500|NED|2027|SUR|<2026-07-28
Ayoub Oufkir|RW|20|3000|NED|2030|MAR|<2026-01-01
Mexx Meerdink|ST|23|13000|NED|2030||2023-07-01
Jizz Hornkamp|ST|28|2500|NED|2030||2026-01-02
Bendegúz Kovács|ST|19|2000|HUN|2029||2026-07-27` },
    { id: 'excelsior', name: 'Эксельсиор', city: 'Роттердам', stadium: 'Stadion Woudestein', cap: 4600, colors: ['#e30613', '#000000'], players: `
Stijn van Gassel|GK|30|1000|NED|2027||<2025-07-01
Celton Biai|GK|26|400|GNB|2028|POR|2026-07-17
Tijmen Holla|GK|20|75|NED|2027||2025-07-01
Casper Widell|CB|23|1500|SWE|2027||2023-07-12
Jan Plug|CB|21|1500|NED|2027||<2026-07-13
Rick Meissen|CB|24|800|NED|2027||<2025-08-04
Guilliano Cairo|CB|20|75|NED|2028||2026-07-01
Simon Janssen|LB|26|650|NED|2027||2025-09-01
Osman Turay|LB|18|600|GER|2029|SLE|2026-07-29
Kasey Bos|LB|22|400|AUS|2027|NED|2026-07-01
Eric da Silva Moreira|RB|20|800|GER|2027|POR|2026-08-26
Marlon van de Wetering|RB|18|175|JAM|2029|NED|2026-07-01
Daniel van Vianen|DM|23|600|NED|2029||2026-07-01
Lennard Hartjes|CM|23|1200|NED|2028||<2024-07-26
Valentin Sulzbacher|CM|21|1000|AUT|2029||2026-07-27
Иракли Егоиан|AM|22|3500|GEO|2028|NED|2025-08-19
Noah Naujoks|AM|24|1500|NED|2027||<2023-01-30
Yacqub Finey|AM|23|500|SWE|2029|SOM|2026-07-01
Ágúst Orri Thorsteinsson|LW|21|700|ISL|2029||2026-08-24
Ilano Silva Timas|LW|24|350|CPV|2029|NED|2026-07-15
Aymen Sliti|RW|20|2000|NED|2027|TUN|<2026-08-04
Alireza Jahanbakhsh|RW|33|500|IRN|2027|NED|2026-08-10
David Garden|ST|22|650|NED|2028||2026-07-08
Mario Domínguez|ST|22|400|ESP|2027||2026-08-08
Nesto Groen|ST|22|250|NED|2027||2024-07-11` },
    { id: 'groningen', name: 'Гронинген', city: 'Гронинген', stadium: 'Euroborg', cap: 22579, colors: ['#00a650', '#ffffff'], players: `
Etienne Vaessen|GK|31|2500|SUR|2029|NED|2024-07-01
Pelle Boevink|GK|28|300|NED|2027||2026-09-02
Lovro Stubljar|GK|22|150|SVN|2029||2025-08-15
Rijk Janse|GK|24|50|NED|2028||<2026-07-01
Thijmen Blokzijl|CB|21|4000|NED|2028||2023-01-01
Malcolm Jeng|CB|21|2000|SWE|2027||2026-07-30
Marco Rente|CB|29|1300|GER|2027||2023-07-01
Márk Csinger|CB|23|1000|HUN|2030||2026-08-14
Elvis van der Laan|CB|18|400|SWE|2028|NED|2025-07-01
Jesper Mosselaar|CB|21|500|NED|2027||2027-06-30
Wouter Prins|LB|22|800|NED|2028||2023-11-01
Nikolas Brandis|LB|21|375|SVK|2030||2026-07-23
Jorg Schreuders|RB|22|3000|NED|2027||2023-01-01
Hans Hateboer|RB|32|1800|NED|2027||2026-09-15
Tyrique Mercera|RB|22|600|CUW|2029|NED|<2025-07-17
Tygo Land|DM|20|4000|NED|2027||<2025-08-28
Tika de Jonge|CM|23|3500|NED|2028||2023-07-01
Pelle Clement|CM|30|600|NED|2028||<2026-07-01
Travis Hernes|CM|20|350|NOR|2030|JAM|2026-07-01
Alvin Nordin|CM|18|300|SWE|2030||2026-08-04
Jismerai Dillema|CM|19|500|NED|2028|IDN|2028-06-30
Jahelille Hall|CM|18|500|NED
Thom van Bergen|AM|22|7000|NED|2028||2023-01-01
Jacob Ondrejka|LW|24|5500|SWE|2027||2026-08-14
Ryan Metu|LW|18|600|NED|2030||2026-05-01
David van der Werff|RW|22|5000|NED|2030||2024-12-23
Brynjólfur Willumsson|ST|26|1500|ISL|2027||2024-07-01
Oskar Zawada|ST|30|500|POL|2028||2025-07-11
Nils Eggens|ST|21|275|NED|2029||2026-07-01` },
    { id: 'twente', name: 'Твенте', city: 'Энсхеде', stadium: 'De Grolsch Veste', cap: 30205, colors: ['#e30613', '#ffffff'], players: `
Joël Drommel|GK|29|2500|NED|2030||<2026-08-04
Lars Unnerstall|GK|36|1000|GER|2027||<2021-07-01
Remko Pasveer|GK|42|100|NED|2027||2026-07-02
Yannick Gerritsen|GK|20|50|NED|2028||2025-07-01
Ruud Nijstad|CB|18|18000|NED|2029||2025-07-01
Stav Lemkin|CB|23|6000|ISR|2028|ESP|2025-07-01
Max Bruns|CB|23|2500|NED|2029||2021-02-17
Robin Pröpper|CB|33|1200|NED|2029||2025-07-26
Juliën Mesbahi|CB|20|150|MAR|2027|NED|2023-07-01
Aske Adelgaard|LB|22|2500|DEN|2030||<2026-07-01
Krzysztof Kurowski|LB|20|450|POL|2030||2026-07-01
Bart van Rooij|RB|25|10000|NED|2028||<2024-08-23
Michal Rosiak|RB|21|1000|POL|2030|ENG|2026-09-02
Ramiz Zerrouki|DM|28|6500|ALG|2030|NED|<2026-07-20
Jordy Bawuah|DM|19|1000|BEL|2029|GHA|2026-08-31
Daouda Weidmann|CM|23|6000|FRA|2030|GER|2025-09-01
Thomas van den Belt|CM|25|3000|NED|2029||<2025-07-01
Gijs Besselink|CM|22|600|NED|2028||<2023-09-18
Younes Taha|AM|23|6500|MAR|2029|NED|<2023-07-01
Kristian Hlynsson|AM|22|4000|ISL|2029||<2025-07-08
Sondre Ørjasæter|LW|22|15000|NOR|2030||2025-08-13
Marko Pjaca|LW|31|1500|CRO|2027||2025-09-02
Naci Ünüvar|LW|23|1000|TUR|2028|NED|2025-01-16
Filip Thorvaldsen|RW|20|5000|NOR|2031||2026-08-11
Daan Rots|RW|25|3500|NED|2027||2021-02-17
Wout Weghorst|ST|34|2000|NED|2028||<2026-07-01
Lucas Vennegoor of Hesselink|ST|20|250|NED|2028||2025-07-01` },
    { id: 'utrecht', name: 'Утрехт', city: 'Утрехт', stadium: 'Stadion Galgenwaard', cap: 24426, colors: ['#e30613', '#ffffff'], players: `
Vasilios Barkas|GK|32|2000|GRE|2028|NED|2023-07-28
Kevin Gadellaa|GK|23|250|NED|2027||2024-07-01
Sergio Padt|GK|36|200|NED|2028|ITA|2026-09-11
Mees Eppink|GK|20|175|NED|2029|THA|2026-07-01
Matisse Didden|CB|25|3000|BEL|2028||2024-07-01
Siebe Horemans|CB|28|2500|BEL|2028||<2024-07-01
Jakov Medic|CB|28|1500|CRO|2027||2026-09-01
Nikolas Panagiotou|CB|26|1000|CYP|2029||2026-09-02
Guus Offerhaus|CB|25|800|NED|2029||<2026-07-01
Neville Ogidi Nwankwo|CB|24|800|NED|2027|NGA|<2025-07-03
Ferdinand Pohl|CB|19|800|GER|2029||2029-06-30
Per Kloosterboer|CB|21|275|NED|2029||2026-07-01
Niklas Vesterlund|RB|27|1500|DEN|2027||2024-01-31
Alonzo Engwanda|DM|23|8000|BEL|2028|COD|2024-07-01
Davy van den Berg|DM|26|2000|NED|2028||2025-07-01
Joris van Overeem|DM|32|1000|NED|2028||<2026-07-20
Oualid Agougil|DM|21|500|MAR|2029|NED|2026-01-01
Dani de Wit|CM|28|3500|NED|2028||2025-07-01
Kevin Paredes|LW|23|2000|USA|2027|DOM|2026-07-01
Arthur Zagré|LW|25|2000|BFA|2029|FRA|<2026-07-11
Victor Jensen|AM|26|2500|DEN|2027||2023-01-31
Yoann Cathline|LW|24|4000|FRA|2029|CIV|2025-07-01
Adrian Blake|LW|21|2000|ENG|2027|JAM|2024-07-01
Ángel Alarcón|RW|22|5000|ESP|2029||2026-07-01
Marius Broholm|RW|21|5000|NOR|2027||2026-08-20
Miliano Jonathans|RW|22|750|IDN|2028|NED|<2025-01-01
Emmanuel Chigozie Owen|RW|19|350|GER|2030|NGA|2026-07-01
Nordin Amrabat|RW|39|100|MAR||NED|2026-09-01
Артём Степанов|ST|19|10000|UKR|2027||2026-01-30
Sem van Duijn|ST|22|800|NED|2027||<2026-08-28
Noah Ohio|ST|23|600|NED|2027|ENG|2024-07-08` },
    { id: 'feyenoord', name: 'Фейеноорд', city: 'Роттердам', stadium: 'Stadion Feijenoord', cap: 47500, colors: ['#e30613', '#ffffff'], players: `
Tjark Ernst|GK|23|6000|GER|2030||2026-07-16
Florian Kastenmeier|GK|29|1000|GER|2027||2026-09-01
Liam Bossin|GK|30|350|IRL|2027|BEL|2025-07-01
Mannou Berger|GK|22|75|NED|2027||2026-07-01
Mika Mármol|CB|25|15000|ESP|2030||2026-07-01
Tsuyoshi Watanabe|CB|29|8000|JPN|2029||2025-07-23
Thijs Kraaijeveld|CB|19|5000|NED|2028||2026-02-02
Jeremiah St. Juste|CB|30|4000|NED|2027|STK|2026-01-22
Thomas Beelen|CB|25|3000|NED|2028||<2023-07-10
Tijme Wessels|CB|19|600|NED|2029||2029-06-30
Jordan Bos|LB|23|12000|AUS|2029|NED|2025-07-25
Gijs Smal|LB|29|5500|NED|2028||<2024-07-01
Javi López|LB|24|5000|ESP|2027||2026-08-17
Givairo Read|RB|20|30000|NED|2029|SUR|2024-07-01
Mats Deijl|RB|29|2000|NED|2028||<2026-01-24
Bart Nieuwkoop|RB|30|1500|NED|2027||2023-08-10
Oussama Targhalline|DM|24|16000|MAR|2028||2025-02-04
Charles Vanhoutte|DM|28|7000|BEL|2030||2026-07-01
Gjivai Zechiël|CM|22|20000|NED|2029|SUR|<2023-09-01
Jakub Moder|CM|27|7000|POL|2028||2025-01-20
Luciano Valente|AM|23|24000|NED|2030|ITA|<2025-07-02
Sem Steijn|AM|24|11000|NED|2029||<2025-07-01
Tobias van den Elshout|AM|19|2000|NED|2029||2026-07-01
Reiss Nelson|LW|26|8000|ENG|2027|JAM|2026-09-02
Gaoussou Diarra|LW|23|1700|MLI|2029||2025-07-04
Jivayno Zinhagel|LW|17|1500|NED|2028|SUR|2028-06-30
Anis Hadj Moussa|RW|24|28000|ALG|2030|FRA|2024-07-01
Gonçalo Borges|RW|25|3000|POR|2029||2025-07-20
Jerayno Schaken|RW|17|2000|NED|2028|SUR|2028-06-30
Nacho Ferri|ST|22|10000|ESP|2030||2026-07-01
Shaqueel van Persie|ST|19|5000|NED|2028|MAR|2026-07-01` },
    { id: 'fortuna', name: 'Фортуна Ситтард', city: 'Ситтард', stadium: 'Fortuna Sittard Stadion', cap: 12800, colors: ['#ffd700', '#00a650'], players: `
Mattijs Branderhorst|GK|32|800|NED|2029||<2025-07-01
Luuk Koopmans|GK|32|200|NED|2027||<2023-07-01
Kaylen|GK|22|500|GER|2027|BRA|2026-08-07
Rodrigo Guth|CB|25|1200|BRA|2027|GER|2026-08-19
Justin Hubner|CB|23|1000|IDN|2028|NED|2025-07-29
Syb van Ottele|CB|24|600|NED|2027||<2024-07-13
Iván Márquez|CB|32|450|ESP|2028||2025-08-01
Jasper Dahlhaus|LB|24|1400|NED|2028||2024-07-01
Nick de Groot|LB|25|400|NED|2029||2026-07-15
Daley Sinkgraven|LB|31|200|NED|2027||2026-10-09
Siebe Wylin|RB|23|650|BEL|2028||2026-07-10
Ivo Pinto|RB|36|250|POR|2027||2022-07-01
Philip Brittijn|DM|22|2000|NED|2028||2025-07-01
Edouard Michut|CM|23|2200|FRA|2027||2024-11-05
Yassin Oukili|CM|25|700|MAR|2028|NED|2026-02-02
Sven Simons|CM|22|450|NED|2029||2026-07-01
Moussa Gbemou|CM|19|200|BEL|2028|GUI|2026-07-03
Mohamed Ihattaren|AM|24|3500|MAR|2027|NED|2025-08-14
Shiloh 't Zand|AM|23|700|SUR|2027|NED|2026-07-16
Gani Büyükhan|AM|17|150|BEL|2029|TUR|2029-06-30
Kristoffer Peterson|LW|31|450|SWE|2028||2024-01-09
Lequincio Zeefuik|ST|21|1500|NED|2027|SUR|<2026-07-01
Anthony Descotte|ST|23|800|BEL|2027||2026-07-21
Ole Romeny|ST|26|800|IDN|2027|NED|2026-07-11` },
    { id: 'go_ahead', name: 'Гоу Эхед Иглз', city: 'Девентер', stadium: 'De Adelaarshorst', cap: 10400, colors: ['#e30613', '#ffd700'], players: `
Kjetil Haug|GK|28|550|NOR|2029||2026-07-01
Jasper Cillessen|GK|37|200|NED|2027||2026-10-21
Nick Marsman|GK|36|125|NED|2027||<2026-07-01
Nando Verdoni|GK|23|25|NED|2029|ITA|2023-07-01
Thomas Hulleman|GK|16|500|NED|2029||2026-07-01
Joris Kramer|CB|30|1500|NED|2029||<2023-07-01
Julius Dirksen|CB|23|1500|NED|2029||2024-07-01
Tino Jukic|CB|25|500|CRO|2030|GER|2026-08-27
Gerrit Nauber|CB|34|300|GER|2027||2021-07-05
Giovanni van Zwam|CB|22|300|NED|2027||2025-09-01
Pim Saathof|CB|22|75|NED|2027||2023-07-01
Dani Tijman|CB|20|500|NED|2028||2026-07-01
Dean James|LB|26|1700|IDN|2028|NED|2023-07-18
Tomas Galvez|LB|21|750|FIN|2030|ENG|2026-07-07
Terence Lantveld|LB|19|500|NED|2028||2026-07-01
Alfons Sampsted|RB|28|1500|ISL|2028||2026-01-24
Eus Waayers|RB|20|350|NED|2029||2026-02-02
Evert Linthorst|DM|26|1600|NED|2028||2022-01-30
Melle Meulensteen|CM|27|2500|NED|2029|ENG|2025-08-05
Yassir Salah Rahmouni|CM|20|450|NED|2029|MAR|2025-07-01
Robbin Weijenberg|CM|21|200|NED|2027||2024-07-01
Victor Edvardsen|AM|30|800|SWE|2028||2023-07-01
Mathis Suray|LW|25|3500|BEL|2027||2024-07-01
Thibo Baeten|LW|24|500|BEL|2029||2023-07-06
Oskar Sivertsen|LW|22|450|NOR|2028||2025-02-03
Søren Tengstedt|RW|26|2000|DEN|2027||2024-01-27
Stefán Ingi Sigurdarson|ST|25|2000|ISL|2030||2026-02-02
Erik Flataker|ST|21|1000|NOR|2030||2026-07-08
Richonell Margaret|ST|26|600|SUR|2029|NED|2025-07-04
Ofosu Boakye|ST|19|75|GHA|2029|NED|2025-07-01` },
    { id: 'nec', name: 'НЕК', city: 'Неймеген', stadium: 'Goffertstadion', cap: 12650, colors: ['#e30613', '#00a650'], players: `
Gonzalo Crettaz|GK|26|5000|ESP|2028|ARG|2025-07-01
Nikolas Polster|GK|24|2000|AUT|2030||2026-08-12
Freek Entius|GK|20|500|NED|2027||2026-07-01
Joep Geneste|GK|19|500|NED|2028||2026-07-01
Ahmetcan Kaplan|CB|23|6000|TUR|2030||<2026-08-20
Deveron Fonville|CB|23|6000|CUW|2030|NED|2025-09-02
Tobias Storm|CB|22|3000|DEN|2030|JPN|2026-07-01
Almugera Kabar|CB|20|3000|GER|2027|LBY|2026-08-14
Philippe Sandler|CB|29|2000|NED|2029|USA|<2022-08-11
Gabriel Brás|CB|22|2000|POR|2027||2026-08-13
Perr Schuurs|CB|26|850|NED|2029||2026-07-01
Bram Nuytinck|CB|36|200|NED|2027||2023-07-01
Yassin Moslih|CB|19|500|NED|2028|MAR|2026-07-01
Darko Nejasmic|DM|27|5000|CRO|2027||2025-09-01
Merijn van de Wiel|DM|20|100|NED|2028||2026-07-01
Noé Lebreton|CM|22|6000|FRA|2029|SEN|2025-08-30
Dennis Geiger|CM|28|1000|GER|2028||2026-08-28
Isak Hansen-Aarøen|CM|22|800|NOR|2027||2026-02-01
Jamiro Monteiro|CM|32|650|CPV|2028|NED|<2026-07-13
Sam de Laat|CM|20|75|NED|2027||2025-07-01
Mitchel Bakker|LW|26|1500|NED|2027||2026-10-08
Dusan Tadic|AM|37|1500|SRB|2028||2026-07-27
Willum Thór Willumsson|AM|28|1500|ISL|2028||2026-02-01
Tjaronn Chery|AM|38|400|SUR|2028|NED|2025-07-01
Clement Bischoff|LW|20|4000|DEN|2027|KEN|2026-07-22
Dele Thomas|LW|19|1000|NED|2030|NGA|2026-09-01
Kevin Kers|LW|20|250|NED|2027|CIV|2026-07-01
Adam Tahaui|RW|21|1300|MAR|2030|NED|2026-07-07
Emre Mor|RW|29|1000|TUR|2028|DEN|2026-07-20
Kaj Sierhuis|ST|28|1800|NED|2029||<2026-07-01
Bryan Linssen|ST|36|300|NED|2028||2025-01-05` },
    { id: 'zwolle', name: 'ПЕК Зволле', city: 'Зволле', stadium: 'MAC³PARK Stadion', cap: 14000, colors: ['#005baa', '#ffffff'], players: `
Jasper Schendelaar|GK|26|1500|NED|2027||<2021-07-01
Tom de Graaff|GK|21|800|NED|2030||<2026-07-01
Duke Verduin|GK|22|25|NED|2028||2022-07-01
Simon Graves|CB|27|1500|DEN|2028||2025-07-01
Tijs Velthuis|CB|24|500|NED|2029||<2026-07-01
Nick Viergever|CB|37|300|NED|2027||<2026-07-01
Sherel Floranus|LB|28|800|CUW|2027|NED|2024-08-26
Damian van der Haar|LB|22|400|NED|2028||2023-07-01
Jan Bürger|RB|19|3000|GER|2029||2026-08-14
Olivier Aertssen|RB|22|650|NED|2027||2024-08-26
Jadiel Pereira da Gama|DM|16|1500|NED|2029|ANG|2025-07-01
Ryan Thomas|DM|31|650|NZL|2028|ENG|2022-10-26
Nick Fichtinger|DM|22|350|NED|2028||2023-09-08
Tobias Sommer|CM|24|1500|DEN|2029||2026-07-09
Givaro Rahajaän|CM|18|100|NED|2029||2025-07-01
Filip Krastev|AM|25|3000|BUL|2027||2026-09-02
Thijs Oosting|AM|26|900|NED|2029||<2026-07-01
Odysseus Velanas|AM|28|550|NED|2027|GRE|2023-07-07
Gilles van der Wal|AM|18|500|NED|2029||2029-06-30
Elias Sørensen|LW|27|1200|DEN|2029||2026-07-01
Ibrahim Cissoko|LW|23|1200|GUI|2030|NED|2026-07-22
Dylan Mbayo|RW|25|1300|BEL|2027|COD|2025-07-01
Younes Namli|RW|32|800|DEN|2028|MAR|2026-01-06
Gabriël Reiziger|RW|21|250|NED|2028|SUR|2025-07-01
Koen Kostons|ST|27|1500|NED|2029||2025-07-17
Sydney van Hooijdonk|ST|26|1000|NED|2027||2026-09-01` },
    { id: 'psv', name: 'ПСВ', city: 'Эйндховен', stadium: 'Philips Stadion', cap: 35000, colors: ['#ed1c24', '#ffffff'], players: `
Matej Kovar|GK|26|8000|CZE|2030||2026-07-01
Nick Olij|GK|31|2000|NED|2029||<2025-07-01
Tijn Smolenaars|GK|21|200|NED|2028||2026-07-01
Khadim Ngom|GK|21|50|NED|2027|SEN|2027-06-30
Lutsharel Geertruida|CB|26|20000|NED|2027|CUW|2026-08-21
Yarek Gasiorowski|CB|21|14000|ESP|2030|POL|2025-07-10
Ryan Flamingo|CB|23|12000|NED|2029|SUR|<2024-07-08
Armando Obispo|CB|27|6000|CUW|2027|NED|2017-07-01
Adamo Nagalo|CB|24|2800|BFA|2029|CIV|2024-09-02
Fabian Merién|CB|18|750|NED|2028|CUW|2026-07-01
Mauro Júnior|LB|27|18000|BRA|2029||2018-01-01
Filip Kostic|LB|33|2000|SRB|2028||2026-08-06
Sergiño Dest|RB|25|22000|USA|2028|NED|2024-07-01
Kiliann Sildillia|RB|24|7000|FRA|2030|GLP|2025-07-16
Kodai Sano|DM|23|18000|JPN|2031||<2026-08-08
Jerdy Schouten|DM|29|16000|NED|2030||2023-08-16
Paul Wanner|CM|20|22000|AUT|2030|GER|2025-08-22
Noah Fernandez|CM|18|12000|BEL|2030|JAM|2026-02-26
Guus Til|AM|28|15000|NED|2028||2022-07-04
Sven Mijnans|AM|26|15000|NED|2031||<2026-07-06
Ayoni Santos|AM|21|4000|CPV|2031|NED|<2026-09-02
Ruben van Bommel|LW|22|18000|NED|2030||<2025-07-11
Amir Bouhamdi|LW|18|2000|MAR|2031|NED|2031-06-30
Dennis Man|RW|28|12000|ROU|2029||2025-08-12
Esmir Bajraktarevic|RW|21|10000|BIH|2029|USA|2025-01-02
Sami Ouaissa|RW|22|8000|NED|2031|MAR|<2026-09-01
Ivan Perisic|RW|37|1200|CRO|2027||2024-09-18
Ricardo Pepi|ST|23|30000|USA|2030|MEX|2023-07-07
Mikkel Bro Hansen|ST|17|3000|DEN|2029||2026-09-02
Sam Lammers|ST|29|3000|NED|2028||<2026-09-02
Alassane Pléa|ST|33|2500|FRA|2028|MLI|2025-07-17` },
    { id: 'cambuur', name: 'Камбюр', city: 'Леуварден', stadium: 'Kooi Stadion', cap: 15000, colors: ['#ffd700', '#0055a4'], players: `
Thijs Jansen|GK|24|650|NED|2028||<2024-07-19
Luca Plogmann|GK|26|200|GER|2028||<2026-09-01
Jasper Meijster|GK|21|25|NED|2027||<2025-07-01
Matthijs Kalisvaart|GK|20|25|NED|2028||2025-07-01
Ismaël Baouf|CB|20|3000|MAR|2028|BEL|2025-08-12
Billy van Duijl|CB|21|1500|NED|2027||<2026-08-25
Jamal Amofa|CB|27|600|NED|2027|GHA|2025-07-01
Jorn Berkhout|CB|24|350|NED|2028||2025-07-01
Lucas Jetten|LB|19|600|NED|2029|RSA|2026-07-01
Morgan Costarelli|LB|21|300|FRA|2029|ITA|2026-07-01
Rik Mulders|RB|26|600|NED|2028||2025-07-23
Devid Eugene Bouah|RB|25|400|ITA|2028|CIV|2026-08-17
Wiebe Kooistra|RB|20|200|NED|2027||2024-07-01
Nicky Souren|DM|26|500|CUW|2027|NED|2024-07-01
Wout Asselman|DM|21|400|BEL|2027||2026-09-02
Ethan Apkakou|DM|20|250|FRA|2029||2026-01-01
Daan Visser|DM|21|250|NED|2029||2025-07-01
Rafik El Arguioui|AM|21|1300|MAR|2027|NED|<2026-07-31
Mathieu Maertens|AM|31|600|BEL|2027||2026-08-21
Wiebe van der Heide|AM|20|500|NED|2028||2026-07-01
Ilyes Hamache|LW|23|900|FRA|2029|ALG|2026-07-01
Fabian Kvam|LW|21|400|NOR|2028||2026-01-21
Danyello Look|LW|19|50|NED|2028|CUW|2026-07-01
Jason Ceka|RW|26|800|GER|2027|ALB|2026-09-02
Iwan Henstra|RW|20|225|NED|2028||2025-07-01
Sami Bouhoudane|ST|18|400|MAR|2029|NED|2026-08-05
Skye Vink|ST|20|350|NED|2029|SUR|2026-07-01
Nicolas Binder|ST|24|300|AUT|2027||2025-07-01` },
    { id: 'heerenveen', name: 'Херенвен', city: 'Херенвен', stadium: 'Abe Lenstra Stadion', cap: 27224, colors: ['#0055a4', '#ffffff'], players: `
Bernt Klaverboer|GK|21|4000|NED|2029||2023-07-01
Andries Noppert|GK|32|300|NED|2027||<2022-07-01
Sten Kremers|GK|22|50|NED|2027||2026-09-22
Timo Schreuder|GK|20|500|NED
Maas Willemsen|CB|23|4500|NED|2029||2025-07-01
Mees Hilgers|CB|25|2000|IDN|2028|NED|<2026-08-31
Sam Kersten|CB|28|2000|NED|2027||<2024-07-01
Hristiyan Petrov|CB|24|500|BUL|2029||2025-01-09
Vasilios Zagaritis|LB|25|3000|GRE|2028||2025-07-01
Darling Bladi|LB|22|300|FRA|2029|CIV|2026-07-03
Oliver Braude|RB|22|5000|NOR|2027||2023-07-01
Mats Egbring|RB|20|300|NED|2028||2025-08-21
Jimte Scholten|RB|20|500|NED|2027||2027-06-30
Dirk Proper|DM|24|2500|NED|2030||<2026-07-28
Marcus Linday|CM|23|7000|SWE|2029||2025-01-01
Nolhan Courtens|CM|19|600|COD|2030|BEL|2026-07-01
Ringo Meerveld|AM|23|5000|NED|2029||<2025-08-18
Levi Smans|AM|23|1500|NED|2028||2024-07-01
Maxence Rivera|LW|24|3000|FRA|2028||2025-07-01
Marko Farji|LW|22|1700|IRQ|2030|NOR|2026-09-01
Luca Oyen|LW|23|1200|BEL|2029||2026-01-05
Jacob Trenskow|RW|25|8500|DEN|2028||2024-08-09
Dylan Vente|ST|27|2000|SUR|2029|NED|2025-07-01
Lanroy Machine|ST|21|1500|FRA|2027|FRE|2026-07-27
Roberts Uldrikis|ST|28|500|LVA|2027||2026-09-02` },
    { id: 'sparta_r', name: 'Спарта Роттердам', city: 'Роттердам', stadium: 'Sparta-Stadion Het Kasteel', cap: 11026, colors: ['#e30613', '#ffffff'], players: `
Michael Brouwer|GK|33|250|NED|2028||<2026-09-01
Filip Bednarek|GK|34|200|POL|2027||2025-07-01
Pascal Kuiper|GK|22|75|NED|2027||<2025-07-03
Rik Suur|GK|19|500|NED|2028||2026-07-01
Marvin Young|CB|21|5000|NED|2029|SUR|2024-11-01
Teo Quintero|CB|27|1300|VEN|2027|ESP|2024-07-01
Nick Verschuren|CB|21|1000|NED|2030||2026-07-01
Bruno Martins Indi|CB|34|300|NED|2027|POR|<2025-07-15
Max de Ligt|CB|22|75|NED|2027||2025-07-01
Bas Kuipers|LB|32|800|NED|2028||<2026-07-01
Giannino Vianello|LB|19|300|NED|2029|ITA|2025-09-01
Lushendry Martes|RB|18|5000|NED|2030|CUW|2026-01-01
Boyd Reith|RB|27|350|NED|2027||2024-07-01
Julian Baas|DM|24|1000|NED|2027||<2024-07-01
Cedric Hatenboer|CM|21|2000|NED|2030||2026-08-31
Alwande Roaldsøy|CM|22|800|NOR|2030|RSA|2026-01-20
Shunsuke Mito|AM|24|2000|JPN|2028||2024-01-01
Isaac Babadi|AM|21|1500|NED|2027|SLE|<2026-09-02
Robin van Cruijsen|AM|20|1200|NED|2030||2026-07-30
Jens Toornstra|AM|37|200|NED|2027||<2025-07-01
Joel Ideho|LW|23|300|NED|2028|NGA|2025-02-04
Mitchell van Bergen|RW|27|1500|NED|2029||<2025-08-18
Casper Terho|RW|23|1000|FIN|2030||2026-07-01
Andrej Kostić|ST|19|5000|MNE|2027|SRB|2026-08-19
Milan Zonneveld|ST|23|800|NED|2029||<2026-02-03` },
    { id: 'telstar', name: 'Телстар', city: 'Велсен', stadium: 'BUKO Stadion', cap: 5338, colors: ['#ffffff', '#e30613'], players: `
Ronald Koeman Jr.|GK|31|700|NED|2028||2021-07-01
Daan Reiziger|GK|25|100|NED|2029||<2025-07-14
Finn Mulder|GK|18|500|NED|2029||2026-07-01
Abdelnour Soualhia|CB|25|700|FRA|2027|ALG|<2026-07-02
Sem Valk|CB|24|500|NED|2029||2026-08-24
Marvin Peersman|CB|35|250|BEL|2028|GHA|<2026-07-06
Abdelraffie Benzzine|CB|20|500|NED||MAR|2025-07-01
Yamano Olfers|CB|20|500|SUR||NED|2025-07-01
Nigel Ogidi Nwankwo|LB|28|125|NED|2027|NGA|2025-07-01
Gabi Caschili|RB|23|200|NED|2027|ITA|2026-08-04
Nils Rossen|DM|22|700|NED|2027||<2024-08-08
Noach Shenkman|DM|20|150|NED|2028||2026-07-01
Tyrone Owusu|CM|27|600|NED|2027|GHA|2024-07-01
Isaiah Ahmed|CM|20|125|CUW|2029|NED|2026-07-24
Gerald Alders|RW|21|700|NED|2027|NAM|2026-02-03
Rojendro Oudsten|RW|18|175|SUR|2028|NED|2025-08-08
Jeff Hardeveld|LW|31|450|NED|2028||2024-09-02
Prince Aning|LW|22|175|NED|2028|GHA|2026-07-23
Patrick Brouwer|AM|25|750|NED|2028||2025-07-01
Harrie Kuster|AM|21|650|NED|2029||<2026-08-04
Rui Mendes|AM|26|300|POR|2028||<2026-07-14
Fabiano Rust|AM|21|125|NED|2028|SUR|2026-07-23
Emirhan Demircan|LW|21|450|TUR|2027|GER|<2026-07-21
Fofin Turay|LW|22|100|NED||GUI|<2026-08-01
Ar'jany Martha|RW|23|700|CUW|2027|NED|2026-09-02
Nökkvi Thórisson|ST|27|400|ISL|2027||<2026-08-29
Jelani Seedorf|ST|21|250|NED|2028|SUR|2026-02-03` },
    { id: 'willem', name: 'Виллем II', city: 'Тилбург', stadium: 'Koning Willem II Stadion', cap: 15220, colors: ['#e30613', '#1d3c8f'], players: `
Maxime Delanghe|GK|25|1500|BEL|2027||2026-09-01
Thomas Didillon-Hödl|GK|30|700|FRA|2028||2024-07-01
Wouter van der Steen|GK|36|75|NED|2027||2025-07-01
Karst de Leeuw|GK|22|50|NED|2027||2025-07-01
Finn Stam|CB|23|750|NED|2029||2026-07-01
Maxim Dekker|CB|22|650|NED|2029||<2026-09-02
Mats Lemmens|CB|24|500|BEL|2028||2026-07-23
Justin Hoogma|CB|28|450|NED|2027||2025-07-01
Jens Mathijsen|CB|19|225|NED|2027||2024-07-01
Nathan Tjoe-A-On|LB|24|700|IDN|2027|NED|2025-07-21
Per van Loon|LB|21|250|NED|2027||2024-07-01
Hidde ter Avest|RB|29|800|NED|2027||2026-07-28
Amine Et-Taïbi|RB|23|400|MAR|2028|BEL|2026-01-21
Alessandro Ciranni|RB|30|275|BEL|2027|ITA|2025-09-01
Kasper Boogaard|DM|20|2500|NED|2027||<2026-07-23
Calvin Twigt|DM|23|1200|NED|2030||<2026-08-17
Amine Lachkar|DM|23|300|NED|2027|MAR|2023-01-01
Tonny Vilhena|CM|31|500|NED|2027|ANG|2026-08-26
Anass Zarrouk|CM|20|250|NED|2028|MAR|2025-08-29
Vito van Crooij|AM|30|900|NED|2027||<2026-09-01
Uriël van Aalst|AM|20|800|NED|2028||2025-05-06
Thijs Muller|AM|19|350|NED|2029||2026-08-31
Jari Schuurman|AM|29|300|NED|2027||2025-07-01
Jaden Slory|LW|21|700|NED|2027|SUR|<2026-07-07
Armin Culum|LW|22|400|SWE|2028|BIH|2025-08-30
Eser Gürbüz|RW|19|600|NED|2027|TUR|<2026-07-21
Chido Obi|ST|18|5000|DEN|2027|NGA|2026-09-02
Devin Haen|ST|22|2500|NED|2028||<2025-07-03
Thomas Verheydt|ST|34|125|NED|2027||2025-07-08` },
  ],
});
