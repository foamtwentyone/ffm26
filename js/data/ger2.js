// 2. Бундеслига 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ger2', name: '2. Бундеслига', short: '2. Бундеслига', country: 'GER', tier: 2, weekday: 0,
  autumn: { from: '08-01', rounds: 17 }, spring: { from: '01-16', rounds: 17 },
  ticket: 18, prize: [6000, 5750, 5550, 5300, 5050, 4800, 4600, 4350, 4100, 3900, 3650, 3400, 3200, 2950, 2700, 2450, 2250, 2000],
  teams: [
    { id: 'hertha', name: 'Герта', city: 'Берлин', stadium: 'Olympiastadion Berlin', cap: 74667, colors: ['#0055a4', '#ffffff'], players: `
Konstantin Heide|GK|20|205|GER
Marius Gersbeck|GK|31|118|GER
Tim Goller|GK|21|570|GER
Julian Eitschberger|RB|22|1256|GER
Mads Valentin Pedersen|LB|30|721|DEN
Niklas Kolbe|CB|29|202|GER
Márton Dárdai|CB|24|2064|HUN
Mayson Grothe|CB|17|150|GER
Toni Leistner|CB|36|144|GER
Deyovaisio Zeefuik|RB|28|516|NED
Linus Gechter|CB|22|3707|GER
Julius Gottschalk|CM|20|333|GER
Diego Demme|DM|34|153|GER
Kevin Sessa|DM|26|319|GER
Boris Lum|CM|19|1101|GER
Paul Seguin|DM|31|269|GER
Soufian Gouram|AM|20|329|EST
Kian Todorovic|CM|19|150|TUR
Pascal Klemens|DM|21|1954|GER
Selim Telib|RW|20|276|EGY
Josip Brekalo|LW|28|1593|CRO
Gustaf Nilsson|ST|29|1200|SWE
Sebastian Grønning|ST|29|253|DEN
Luca Schuler|ST|27|527|GER
Oluwaseun Adewumi|ST|21|1158|AUT
Farid Alfa-Ruprecht|RW|20|3549|GER
Jón Thorsteinsson|LW|27|359|ISL
Niklas Hildebrandt|ST|18|150|GER
Jelani Ndi|ST|19|682|GER` },
    { id: 'nurnberg', name: 'Нюрнберг', city: 'Нюрнберг', stadium: 'Max-Morlock-Stadion', cap: 50000, colors: ['#a6192e', '#000000'], players: `
Jan Reichert|GK|25|1241|GER
Robin Lisewski|GK|20|396|POL
Christian Mathenia|GK|34|140|GER
Nicolas Ortegel|GK|22|303|GER
Alexios Kalogeropoulos|CB|22|1471|GRE
Стёпа Мкртчян|CB|23|361|ARM
Andrea Ceresoli|LW|23|576|ITA
Mikayil Faye|CB|22|4476|SEN
Fynn Otto|CB|24|468|GER
Giannis Masouras|RB|30|145|GRE
Enrico Valentini|RB|37|150|ITA
Tim Janisch|RB|21|767|GER
Kristian Mandic|LB|19|439|CRO
Eric Porstner|LB|19|947|GER
Tobias Hess|CB|20|494|GER
Khalid Abu El Haija|CB|20|262|PLE
Winners Osawe|CM|19|563|GER
Adam Markhiev|CM|24|3101|FIN
Javier Fernández|DM|19|2805|ESP
Marko Soldic|CM|16|1273|GER
Rafael Lubach|CM|21|4292|GER
Finn Becker|AM|26|933|GER
Can Moustfa|LW|21|240|SYR
Marc Kornwachs|CM|17|150|GER
Simon Joachims|CM|24|69|GER
Levin Chiumento|ST|19|404|GER
Rayan Ghrieb|RW|27|571|FRA
Sigurd Haugen|ST|29|308|NOR
Julian Justvan|RW|28|1411|GER
William Bøving|LW|23|4348|DEN
Piet Scobel|ST|21|1031|GER
Mohamed Alì Zoma|LW|22|5956|ITA
Adriano Grimaldi|ST|35|153|GER` },
    { id: 'wolfsburg', name: 'Вольфсбург', city: 'Вольфсбург', stadium: 'Volkswagen Arena', cap: 30000, colors: ['#65b32e', '#ffffff'], players: `
Timon Wellenreuther|GK|30|3562|GER
Pavao Pervan|GK|38|171|AUT
Jakub Zieliński|GK|18|1034|POL
Kilian Fischer|RB|26|2874|GER
Hauke Wahl|CB|32|1289|GER
Rogério|LB|28|722|BRA
Jonas Adjetey|CB|22|7186|GHA
Joakim Mæhle|LB|29|5543|DEN
Mathys Angély|CB|19|1711|FRA
Aaron Zehnter|LB|21|7457|GER
Saël Kumbedi|RB|21|17053|FRA
Cleiton Santos|CB|23|675|BRA
Aster Vranckx|CM|24|5359|BEL
Vini Souza|DM|27|8218|BRA
Bence Dárdai|DM|20|6723|HUN
Fraser Hornby|AM|27|3583|SCO
Pharrell Hensel|LW|19|4361|GER
Alexander Bernhardsson|RW|28|1643|SWE
Muhammed Mehmet Damar|AM|22|6282|GER
Christian Eriksen|CM|34|1595|DEN
Maximilian Arnold|DM|32|1969|GER
Yannick Gerhardt|DM|32|941|GER
Mattias Svanberg|DM|27|5182|SWE
Elvis Rexhbeçaj|CM|28|2364|KVX
Kento Shiogai|ST|21|9776|JPN
Fabian Reese|LW|28|3945|GER
Robert Glatzel|ST|32|1123|GER
Alessio Besio|LW|22|1672|SUI
Bruno Katz|ST|18|150|FIN
Trevor Benedict|ST|19|150|GER` },
    { id: 'magdeburg', name: 'Магдебург', city: 'Магдебург', stadium: 'Avnet Arena', cap: 30098, colors: ['#0055a4', '#ffffff'], players: `
Dominik Reimann|GK|29|760|GER
Noah Kruth|GK|23|161|GER
Robert Kampa|GK|21|231|GER
Samuel Loric|RW|26|236|FRA
Anselmo MacNulty|CB|23|1306|IRL
Eldin Džogović|RW|23|197|LUX
Tobias Müller|CB|32|338|GER
Paul Jaeckel|CB|28|425|GER
Herbert Bockhorn|RB|31|128|UGA
Daniel Heber|CB|32|104|GER
Alexander Nollenberger|LB|29|384|GER
Lubambo Musonda|LB|31|212|ZAM
Tarek Chahed|RW|30|50|GER
Moritz-Broni Kwarteng|CM|28|550|GER
Felipe Chávez|AM|19|3730|PER
Tony Reitz|CM|22|180|GER
Falko Michel|CM|25|798|GER
Torben Müsel|DM|27|151|GER
Do-Young Yoon|RB|19|1014|KOR
Pierre Nadjombe|RW|23|244|TOG
Leon Mergner|CM|20|458|GER
Magnus Baars|CM|20|489|GER
Luka Hyryläinen|CM|22|1425|FIN
Aleksa Marušić|ST|27|265|MNE
Emmanuel Iyoha|RW|29|366|GER
Roko Šimić|ST|23|1568|CRO
Chung-Hyun Lee|ST|19|150|KOR
Kevin Manthey|ST|19|496|GER
Mateusz Żukowski|ST|24|1135|POL
Barış Atik|LW|31|520|TUR
Richmond Tachie|RW|27|277|GER` },
    { id: 'kaiserslautern', name: 'Кайзерслаутерн', city: 'Кайзерслаутерн', stadium: 'Fritz-Walter-Stadion', cap: 49327, colors: ['#e30613', '#ffffff'], players: `
Julian Krahl|GK|26|860|GER
Avdo Spahić|GK|29|124|BIH
Yannick Onohiol|GK|22|200|GER
Enis Kamga|GK|19|377|GER
Hendrick Zuck|LB|36|150|GER
Jean Zimmer|RB|32|58|GER
Alex Murphy|CB|22|1324|IRL
Maxwell Gyamfi|CB|26|720|GER
Kelven Frees|CB|21|662|GER
Jacob Rasmussen|CB|29|593|DEN
Jan Elvedi|CB|30|432|SUI
Leon Robinson|CB|25|445|GER
Frank Ronstadt|LB|29|137|GER
Kenny-Prince Redondo|AM|32|178|GER
Simon Asta|RB|25|379|GER
Fabian Kunze|DM|28|746|GER
Marlon Ritter|AM|32|341|GER
Semih Şahin|DM|26|1033|GER
Naatan Skyttä|AM|24|4688|FIN
Mário Sauer|DM|22|1478|SVK
Mika Haas|LB|21|1911|GER
Paul Joly|RB|26|1515|FRA
Neal Gibs|LW|24|105|GER
Thierry Fidjeu-Tazemeta|AM|19|150|AUT
David Schramm|DM|20|363|GER
Erik Müller|CM|20|150|GER
Owen Gibs|AM|19|268|GER
Dion Hofmeister|CM|17|1008|GER
Ben Jungfleisch|CM|18|509|GER
Ivan Prtajin|ST|30|650|CRO
Ibrahim Kanaté|LW|20|1498|MLI
Erencan Yardımcı|ST|24|1276|TUR
Mërgim Berisha|ST|28|725|GER
Miloš Luković|ST|20|6644|SRB
Kian Scheer|ST|19|150|GER` },
    { id: 'heidenheim', name: 'Хайденхайм', city: 'Хайденхайм', stadium: 'Voith-Arena', cap: 15000, colors: ['#e30613', '#003b79'], players: `
Frank Feller|GK|22|728|GER
Thomas Dähne|GK|32|271|GER
Paul Tschernuth|GK|24|279|AUT
Marnon-Thomas Busch|RB|31|628|GER
Tim Siersleben|CB|26|1223|GER
Patrick Mainka|CB|31|1629|GER
Jonas Föhrenbach|CB|30|706|GER
Oualid Mhamdi|RB|23|687|MAR
Leart Paçarada|LB|32|376|KVX
Michael Heule|LB|25|1883|SUI
Adam Kölle|CB|20|1382|GER
Jan Schöppner|CM|27|2302|GER
Paul Hennrich|RW|21|1405|GER
Christian Conteh|AM|27|1180|GER
Julian Niehues|DM|25|971|GER
Luca Kerber|CM|24|1293|GER
Sirlord Conteh|AM|30|565|SLE
Yannik Wagner|LW|19|1129|GER
Marko Zrilic|CM|19|150|GER
Буду Зивзивадзе|ST|32|1132|GEO
Maximilian Breunig|ST|26|271|GER
Mathias Honsak|ST|29|976|AUT
Alessandro Vogt|ST|21|10434|SUI
Marcel Costly|RW|30|295|GER
Mikkel Kaufmann|ST|25|1202|DEN
Tobias Weigel|ST|19|388|GER` },
    { id: 'st_pauli', name: 'Санкт-Паули', city: 'Гамбург', stadium: 'Millerntor-Stadion', cap: 29564, colors: ['#624839', '#ffffff'], players: `
Ben Alexander Voll|GK|25|219|GER
Simon Spari|GK|24|196|AUT
Dimitar Mitov|GK|29|342|BUL
Rony Jansson|RB|22|364|FIN
David Nemeth|CB|25|1455|AUT
Marcus Mathisen|CB|30|454|DEN
Eric Smith|CB|29|2123|SWE
Tomoya Andō|CB|27|1681|JPN
Adam Dźwigała|CB|31|284|POL
Jannik Westphal|CB|22|94|GER
Gísli Thórdarson|CM|22|783|ISL
Branimir Hrgota|AM|33|219|SWE
Arkadiusz Pyrka|RB|24|2460|POL
Joel Chima Fujita|DM|24|8454|JPN
Mathias Rasmussen|DM|28|1379|NOR
Lars Ritzka|LB|28|514|GER
Samuel Klein|CM|22|150|AUS
Louis Oppie|LB|24|1734|GER
Connor Metcalfe|AM|26|875|AUS
Marwin Schmitz|CM|19|530|GER
Youssoupha Niang|RW|20|398|GER
Abdoulie Ceesay|ST|22|839|GAM
Erik Ahlstrand|RW|25|225|SWE
Scott Banks|RW|25|246|SCO
Taichi Hara|ST|27|571|JPN
Martijn Kaars|ST|27|2010|NED
Ricky-Jade Jones|ST|23|856|ENG
Mathias Pereira Lage|ST|29|1885|POR` },
    { id: 'bielefeld', name: 'Арминия', city: 'Билефельд', stadium: 'SchücoArena', cap: 27300, colors: ['#004e95', '#ffffff'], players: `
Jonas Thomas Kersken|GK|26|1171|GER
Leo Oppermann|GK|25|205|GER
Артём Залоха|GK|19|150|UKR
Philip Hildesheim|GK|21|150|GER
Gerrit Gohlke|CB|27|145|GER
Felix Hagmann|RB|22|571|GER
Joel Felix|CB|28|157|DEN
Maximilian Bauer|CB|26|1371|GER
Henri Koudossou|RB|27|584|TOG
Arne Sicker|LB|29|221|GER
Maximilian Großer|CB|25|452|GER
Leon Schneider|CB|26|290|GER
Benjamin Boakye|RB|21|982|GER
Tim Handwerker|LB|28|210|GER
Justin Lukas|CB|20|283|GER
Marvin Mehlem|AM|29|286|GER
Sam Schreck|CM|27|125|GER
Jannik Rochelt|LW|28|393|GER
Lukas Kunze|CM|28|170|GER
Stefano Russo|CM|26|1077|GER
Leon Jensen|CM|29|221|GER
Marius Wörl|CM|22|1542|GER
Till Wegener|CM|17|150|GER
Eyyüb Yaşar|CM|18|578|TUR
Semih Sarli|CM|22|150|GER
David Min|ST|27|1139|NED
Joel Grodowski|ST|28|758|GER
Monju Momuluh|RW|24|1279|GER
Isaiah Young|LW|28|146|USA
Monti Theiß|ST|19|150|GER
Daniel Richter|ST|18|928|GER` },
    { id: 'cottbus', name: 'Энерги Котбус', city: 'Котбус', stadium: 'LEAG Energie Stadion', cap: 22528, colors: ['#e30613', '#ffffff'], players: `
Alexander Sebald|GK|30|117|GER
Marcel Lotka|GK|25|248|GER
Kevin Kratzsch|GK|24|167|GER
Max Böhnke|GK|23|352|GER
Joel Awuah|CB|19|150|GER
King Manu|CB|22|536|GER
Henry Rorig|RB|26|166|GER
Tim Campulka|CB|27|116|GER
Ryan Malone|CB|34|102|USA
Axel Borgmann|LB|32|294|GER
Luca Erlein|CB|19|2079|GER
Fabian Balg|CB|18|150|GER
Fousseny Doumbia|CB|21|400|GER
Anderson Lucoqui|LB|29|111|ANG
Leon Guwara|LB|30|151|GAM
Jannis Zaydan|LB|19|776|GER
Aaron Reschke|CB|18|150|GER
Finn Heidrich|CM|20|150|GER
Dominik Pelivan|DM|30|136|GER
Jonas Hofmann|CM|29|90|GER
Lukas Michelbrink|DM|21|998|LTU
Tolcay Ciğerci|RW|31|234|TUR
Félix Schubart|CM|19|150|GER
Julian Guttau|RW|26|161|GER
Jannis Boziaris|AM|23|205|GRE
Leonardo Bittencourt|DM|32|400|GER
Edwin Kracht|CM|19|150|GER
Christian Kinsombi|LW|27|131|GER
Lucas Copado|ST|22|488|GER
Moritz Hannemann|RW|28|141|GER
Дмытро Богданов|ST|19|926|UKR
Erik Engelhardt|ST|28|606|GER
Justin Butler|LW|25|209|GER` },
    { id: 'furth', name: 'Гройтер Фюрт', city: 'Фюрт', stadium: 'Sportpark Ronhof Thomas Sommer', cap: 16626, colors: ['#00a650', '#ffffff'], players: `
Nils-Jonathan Körber|GK|29|150|GER
Florian Hellstern|GK|19|4004|GER
Christian Ortag|GK|31|149|GER
Silas Prüfrock|GK|21|711|GER
Loris Giandomenico|LB|21|231|SUI
Lukas Reich|RB|20|1723|GER
Elias Benkara|CB|19|651|GER
Maxim Dal|CB|20|359|GER
Jannis Heuer|CB|27|910|GER
Jannik Dehm|RB|30|215|GER
Gian-Luca Itter|LB|27|533|GER
Krisztián Keresztes|CB|26|355|HUN
Hendry Blank|CB|22|780|GER
Omar Megeed|CM|21|496|EGY
Sacha Bansé|CM|25|280|BFA
Dennis Srbeny|ST|32|178|GER
Shinta Appelkamp|AM|25|1197|GER
Ole Pohlmann|LW|25|1215|GER
Aaron Keller|LB|22|1405|SUI
Paul Will|DM|27|443|GER
Mika Wallentowitz|RB|18|1716|GER
Marco John|CM|24|150|GER
Doni Arifi|CM|24|325|FIN
Faton Ademi|CM|20|727|KVX
Julian Green|DM|31|244|USA
Mehmet Avlayici|CM|20|436|GER
Jordan Pefok|ST|30|1221|USA
Benjamin Zank|ST|22|284|GER
Felix Klaus|ST|34|290|GER
Omar Sillah|ST|23|216|GER` },
    { id: 'dresden', name: 'Динамо Дрезден', city: 'Дрезден', stadium: 'Rudolf-Harbig-Stadion', cap: 32066, colors: ['#ffd700', '#000000'], players: `
Tim Schreiber|GK|24|665|GER
Lennart Grill|GK|27|149|GER
Daniel Mesenhöler|GK|31|56|GER
Elias Bethke|GK|23|881|GER
Marlon Grafe|GK|20|150|GER
Kenneth Schmidt|CB|24|747|GER
Brooklyn Ezeh|LB|25|174|GER
Ahmet Muhamedbegović|CB|27|184|AUT
Alexander Rossipal|LB|30|225|GER
Lars Bünning|CB|28|117|GER
Lukas Boeder|CB|29|111|GER
Jonas Sterner|RB|24|590|GER
Till Neininger|CB|19|150|GER
Thomas Leon Keller|CB|27|600|GER
Friedrich Müller|CB|20|380|GER
Simon Straudi|RB|27|142|ITA
Nicolai Rapp|CB|29|776|GER
Luca Herrmann|DM|27|126|GER
Nils Fröling|LW|26|212|SWE
Robert Wagner|DM|23|1816|GER
Tobias Raschl|CM|26|206|GER
Patrice Čović|RW|19|3964|CRO
Niklas Hauptmann|AM|30|416|GER
Kennedy Okpala|ST|21|1360|GER
Vincent Vermeij|ST|32|372|NED
Jakob Lemmer|LW|26|499|GER
Kaan İnanoğlu|RW|21|344|TUR
Ben Bobzien|LW|23|1504|GER
Stefan Kutschke|ST|37|142|GER
Christoph Daferner|ST|28|469|GER` },
    { id: 'osnabruck', name: 'Оснабрюк', city: 'Оснабрюк', stadium: 'Stadion an der Bremer Brücke', cap: 16667, colors: ['#5b2b82', '#ffffff'], players: `
Niklas Sauter|GK|23|266|GER
Jonas Krumrey|GK|22|1073|GER
Mats Remberg|GK|20|150|GER
Luca Böggemann|GK|22|193|GER
Ibrahim Touray|CB|20|164|GER
Lion Semić|RB|23|116|GER
Joël Abu Hanna|CB|28|117|ISR
Theo Janotta|CB|23|278|GER
Jannik Müller|CB|32|297|GER
Niklas Wiemann|CB|27|313|GER
Robin Fabinski|CB|23|357|GER
Elias Bakatukanda|CB|22|703|COD
Jonathan Gómez|LB|23|718|USA
Jonathan Wensing|RW|22|388|GER
Robert Tesche|DM|39|63|GER
Bryan Henning|DM|31|102|GER
Daniel-Kofi Kyereh|CM|30|141|GHA
Leonhard Münst|AM|24|209|GER
Ismail Badjie|AM|21|629|GER
Bjarke Jacobsen|CM|33|136|DEN
Luca Raimund|RW|21|329|GER
Leon Flach|DM|25|754|USA
Adrian Beck|AM|29|1061|GER
Bernd Riesselman|AM|21|243|GER
Tony Lesueur|LB|26|166|FRA
Fridolin Wagner|DM|29|231|GER
Konrad Faber|RB|28|315|GER
Patrick Kammerbauer|RB|29|145|GER
Robin Meißner|ST|27|530|GER
Leon Opitz|ST|21|436|GER` },
    { id: 'bochum', name: 'Бохум', city: 'Бохум', stadium: 'Ruhrstadion', cap: 27599, colors: ['#005ca9', '#ffffff'], players: `
Timo Horn|GK|33|403|GER
Tino Casali|GK|30|104|AUT
Hugo Rölleke|GK|21|332|GER
Mohammed Tolba|CB|22|99|GER
Sean Klaiber|RB|32|524|SUR
Philipp Strompf|CB|28|804|GER
Yiğit Karademir|CB|22|572|GER
Karol Mets|CB|33|502|EST
Jean Manuel Mbom|RB|26|833|GER
Oliver Olsen|RB|26|1133|DEN
Michael Steinwender|CB|26|886|AUT
Babis Drakas|AM|23|242|GER
Leon Sawas|LB|19|150|GER
Maximilian Wittek|LB|31|667|GER
Moritz Göttlicher|CM|18|368|GER
Enis Çokaj|DM|27|861|ALB
Mats Pannewig|DM|21|2480|GER
Charlie Patino|DM|23|941|ENG
Marcel Sobottka|CM|32|138|GER
Tom Meyer|DM|18|767|GER
Lasse Isbruch|CM|18|150|GER
Aurel Wagbe|CM|22|67|GER
Christian Rasmussen|RW|23|1042|DEN
Berkan Taz|ST|27|460|GER
Jarne Steuckers|RW|24|5170|BEL
Gerrit Holtmann|LW|31|245|PHI
Daniel Hanslik|ST|30|645|GER
Koji Miyoshi|RW|29|824|JPN
Mansour Ouro-Tagba|ST|21|505|TOG
Philipp Hofmann|ST|33|553|GER
Alessandro Crimaldi|LW|19|809|ITA` },
    { id: 'hannover', name: 'Ганновер', city: 'Ганновер', stadium: 'Heinz von Heiden-Arena', cap: 49951, colors: ['#00a650', '#000000'], players: `
Pascal Loretz|GK|23|2218|SUI
Leo Weinkauf|GK|30|116|GER
Karl Steinmann|CB|20|362|GER
Boris Tomiak|CB|28|1094|GER
Jean Hugonet|CB|26|832|FRA
Virgil Ghiță|CB|28|1366|ROU
Bastian Allgeier|CB|24|457|GER
Ime Okon|CB|22|3991|RSA
Yunus Uenal|CB|18|689|GER
Marcel Hartel|AM|30|2127|GER
Franz Roggow|CM|24|323|GER
Mwisho Mhango|LW|19|150|MWI
Stefán Thórdarson|DM|28|808|ISL
Hayate Matsuda|RW|23|1751|JPN
Maurice Neubauer|CM|30|764|GER
Alexander Vogel|CM|20|389|GER
Jasper Reinhold|CM|18|150|GER
Mustapha Bundu|RW|29|941|SLE
Waniss Taïbi|AM|24|967|FRA
Benjamin Källman|ST|28|2505|FIN
Benedikt Pichler|ST|29|494|AUT
Lars Gindorf|ST|25|698|GER
Tom Hobrecht|ST|19|589|GER
Taycan Etçibasi|ST|19|893|GER
Emir Sahiti|RW|27|925|KVX` },
    { id: 'karlsruhe', name: 'Карлсруэ', city: 'Карлсруэ', stadium: 'BBBank Wildpark', cap: 34302, colors: ['#0055a4', '#ffffff'], players: `
Hans Christian Bernat|GK|25|771|DEN
Ferdinand Gebert|GK|20|381|GER
Robin Himmelmann|GK|37|50|GER
Sebastian Jung|RB|36|127|GER
Deniz Ofli|LB|19|746|TUR
Héliton|CB|30|638|BRA
Marcel Beifus|CB|23|1609|GER
Paul Scholl|CB|20|678|GER
Christoph Kobald|CB|29|342|AUT
Sandro Trémoulet|CB|26|250|MAD
Marcel Franke|CB|33|174|GER
Viktor Bergh|LB|27|192|SWE
Rafael Pinto Pedrosa|RB|19|5285|GER
Hyeok-Kyu Kwon|CM|25|941|KOR
Santeri Väänänen|CM|24|561|FIN
Kevin Wiethaup|CM|21|232|GER
Marvin Wanitzek|CM|33|794|GER
Tim Civeja|DM|24|205|GER
Lilian Egloff|CM|24|993|GER
Danyal Zor|DM|19|150|GER
Robert Geller|CM|22|175|GER
Moritz Broschinski|ST|26|550|GER
Noel Eichinger|AM|25|267|GER
Shio Fukuda|ST|22|798|JPN
Eymen Laghrissi|ST|18|1495|GER
Louey Ben Farhat|ST|20|10777|TUN
John Meyer|ST|17|150|GER
Jason Ponente|RW|19|150|ITA` },
    { id: 'darmstadt', name: 'Дармштадт', city: 'Дармштадт', stadium: 'Merck-Stadion am Böllenfalltor', cap: 17810, colors: ['#0055a4', '#ffffff'], players: `
Marcel Schuhen|GK|33|249|GER
Benedikt Börner|GK|20|435|GER
Alexander Brunst-Zöllner|GK|31|94|GER
Grayson Dettoni|CB|21|270|USA
Patric Pfeiffer|CB|27|1285|GHA
Meldin Drešković|CB|28|119|MNE
Fabian Nürnberger|LB|27|778|BUL
Raoul Petretta|LB|29|168|ITA
Aleksandar Vukotić|CB|31|286|SRB
Matthias Bader|RB|29|151|GER
Christopher Lannert|RB|28|282|GER
Fabian Holland|LB|36|144|GER
Tim Arnold|CB|20|150|GER
Max Pfister|CB|19|150|GER
Yannik Lührs|CB|23|418|GER
Florian Kleinhansl|LB|26|230|GER
Nicolas Verkooijen|CM|19|720|BEL
Tobias Kempe|RW|37|129|GER
Hiroki Akiyama|DM|25|1879|JPN
Kai Klefisch|DM|26|1110|GER
Merveille Papela|CM|25|321|GER
Lars Kehl|AM|24|405|GER
Carlo Sickinger|DM|29|168|GER
William Mikelbrencis|RW|22|2029|FRA
Lance Duijvestijn|AM|27|473|NED
Manolo Merx|RW|18|276|GER
Marco Richter|RW|28|1091|GER
Noah Weißhaupt|LW|25|1210|GER
Luca Marseiler|LW|29|530|GER
Ho-Jae Lee|ST|26|685|KOR
Ibrahim El Kadiri|LW|24|232|NED
Fynn Lakenmacher|ST|26|196|GER
Milan Smit|ST|23|2151|NED
Yosuke Furukawa|RW|23|367|JPN` },
    { id: 'braunschweig', name: 'Айнтрахт Брауншвейг', city: 'Брауншвейг', stadium: 'Eintracht-Stadion', cap: 24474, colors: ['#ffd700', '#0055a4'], players: `
Ron-Thorben Hoffmann|GK|27|703|GER
Benjamin Uphoff|GK|33|231|GER
Leon Herdes|GK|19|150|GER
Hugo Afonso|CB|21|150|LUX
Noah Katterbach|LB|25|649|GER
Andi Hoti|CB|23|793|KVX
Frederik Jäkel|CB|25|298|GER
Mehmet Aydın|RB|24|1183|TUR
Kevin Ehlers|CB|25|731|GER
Fabio Di Michele|LB|23|658|GER
Isidoros Koutsidis|CB|21|169|GRE
Sanoussy Ba|RB|22|161|GER
Tristan Wagner|CB|21|394|GER
Lukas Frenkert|CB|26|465|GER
Damjan Kovacevic|RB|22|501|AUT
Léon Bell|LB|30|193|CMR
Leonard Laatsch|CM|20|150|GER
Florian Flick|DM|26|559|GER
Samuele Di Benedetto|DM|21|887|GER
Max Marie|DM|22|1465|GER
Anas Bakhat|ST|26|193|GER
Lino Tempelmann|AM|27|557|GER
Robin Heußer|AM|28|219|GER
Sidney Raebiger|LB|21|259|GER
Yann Sturm|LW|21|443|GER
Maximilian Entrup|ST|29|382|AUT
Jovan Mijatović|ST|21|1919|SRB
Aaron Opoku|RW|27|519|GER
Junior Zé|RW|20|1670|SUI
Sidi Sané|AM|23|282|GER
Jan Urbich|ST|22|325|GER` },
    { id: 'kiel', name: 'Хольштайн Киль', city: 'Киль', stadium: 'Holstein-Stadion', cap: 15034, colors: ['#0055a4', '#e30613'], players: `
Timon Weiner|GK|27|381|GER
Marcel Engelhardt|GK|33|81|GER
Lio Rothenhagen|GK|20|362|GER
Frederik Roslyng|CB|20|1399|DEN
Niko Takahashi|LB|21|564|JPN
Sebastian Schonlau|CB|32|137|GER
Carl Johansson|CB|32|176|SWE
Noah Madsen|CB|25|829|DEN
Ivan Nekić|CB|25|1169|CRO
Lasse Rosenboom|RB|24|804|GER
David Zec|CB|26|1857|SVN
Hiroki Sekine|RB|24|1070|JPN
Leon Parduzi|LB|19|652|KVX
Lenny Borges|LW|25|229|GER
Caspar Medlin|CB|19|150|GER
John Tolkin|LB|24|1977|USA
Patrick Erras|CB|31|128|GER
Steven Skrzybski|AM|33|151|GER
Guillermo Balzi|AM|25|994|ARG
Jonas Torrissen Therkelsen|AM|23|2014|NOR
Kasper Davidsen|DM|21|2061|DEN
Andu Yobel Kelati|AM|24|541|GER
Taisei Abe|DM|22|1796|JPN
Ikem Ugoh|CM|21|742|GER
Jonas Meffert|DM|32|435|GER
Tayar Tasdelen|CM|20|358|GER
Till Wiese|CM|18|150|GER
Mark Richter Monserrat|CM|18|150|GER
Hamza Muqaj|DM|21|732|KVX
Гиорги Квилитаиа|ST|33|459|GEO
Gyan de Regt|LW|23|1043|NED
Faride Alidou|ST|25|527|GER
Phil Harres|ST|24|1925|GER
Adrián Kaprálik|RW|24|1352|SVK
Moritz Reimers|LW|19|589|GER` },
  ],
});
