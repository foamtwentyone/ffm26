// Лига 2 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'fra2', name: 'Лига 2', short: 'Лига 2', country: 'FRA', tier: 2, weekday: 5,
  autumn: { from: '08-08', rounds: 17 }, spring: { from: '01-09', rounds: 17 },
  ticket: 10, prize: [3000, 2900, 2750, 2650, 2550, 2400, 2300, 2200, 2050, 1950, 1800, 1700, 1600, 1450, 1350, 1250, 1100, 1000],
  teams: [
    { id: 'saint_etienne', name: 'Сент-Этьен', city: 'Сент-Этьен', stadium: 'Stade Geoffroy-Guichard', cap: 41965, colors: ['#00a650', '#ffffff'], players: `
Mamour N'diaye|GK|21|1622|SEN
Gautier Larsonneur|GK|29|1859|FRA
Lucas Lavallée|GK|23|342|FRA
Maxime Bernauer|CB|28|585|FRA
Benjamin Old|LB|24|1518|NZL
João Ferreira|RB|25|1550|POR
Chico Lamba|CB|23|2953|POR
Sohaib Naïr|CB|24|1656|ALG
Kévin Pedro|RB|20|1330|COD
Julien Le Cardinal|CB|29|1127|FRA
Lassana Traoré|CB|19|585|SEN
Nathan Kasia|LB|17|150|FRA
Tom Teillol|CB|18|150|FRA
Mahmoud Jaber|CM|27|1196|ISR
Jakob Breum|AM|22|6036|DEN
Áron Csongvai|DM|25|1204|HUN
Tamar Svetlin|CM|25|1900|SVN
Adam Baallal|CM|19|468|MAR
Modibo Sissoko|CM|19|150|MLI
Paul Eymard|CM|18|919|FRA
Elyes Dhaoui|DM|18|150|TUN
Irvin Cardona|RW|29|1775|MLT
Thierno Ballo|LW|24|6186|AUT
Joshua Duffus|ST|21|2194|ENG
Augustine Boakye|RW|25|5497|GHA
Зурико Давиташвили|LW|25|12015|GEO
Nadir El Jamali|RW|19|1290|FRA
Marten-Chris Paalberg|ST|18|1044|EST` },
    { id: 'nancy', name: 'Нанси', city: 'Нанси', stadium: 'Stade Marcel-Picot', cap: 20087, colors: ['#e30613', '#ffffff'], players: `
Yanis Kouini|GK|22|150|MAR
Enzo Basilio|GK|32|277|ITA
Geoffrey Lembet|GK|38|115|CTA
Kenzo Noel|GK|20|303|FRA
Héliohdino Tavares|RB|22|390|FRA
Nehemiah Fernandez|CB|21|150|FRA
Nicolas Saint-Ruf|CB|34|165|GLP
Thierno Baldé|RB|24|346|FRA
Elydjah Mendy|CB|26|150|GNB
Logan Ndenbe|CB|26|912|BEL
Enzo Tacafred|RB|21|1652|FRA
Yannis Nahounou|CB|22|414|FRA
Kouroufia Kebe|CM|20|749|FRA
Zakaria Fdaouch|LW|29|320|FRA
Walid Bouabdeli|ST|26|577|FRA
Mamadou Fofana|DM|26|150|MTN
Hugo Barbier|CM|22|150|FRA
Yanis Delaveau|CM|20|150|ALG
Jérémy Gelin|CM|29|340|FRA
Zakaria Ztouti|AM|20|537|FRA
Issam Bouaoune|CM|23|299|ALG
Lucas Schnepp|CM|24|150|FRA
Chafik El Hansar|ST|21|269|FRA
Nordine Kandil|RW|24|1021|FRA
Joël-Emmanuel Coulibaly|CM|19|150|FRA
Pape Meïssa Ba|ST|29|334|SEN
Ilyes Housni|ST|21|775|MAR
Adrian Dabasse|ST|33|206|FRA
Sidi Cissé|ST|23|284|FRA
El Hadary Raheriniaina|LW|20|150|MAD
Noam Jacquet|ST|20|150|FRA` },
    { id: 'montpellier', name: 'Монпелье', city: 'Монпелье', stadium: 'Stade de la Mosson-Mondial 98', cap: 32939, colors: ['#003c71', '#f26522'], players: `
Mathieu Michel|GK|35|144|FRA
Simon Ngapandouetnbu|GK|23|2288|CMR
Viktor Džodić|GK|19|375|SRB
Kevin Kamdem|GK|20|150|CMR
Naoufel El Hannach|RB|19|1449|MAR
Yaël Mouanga|CB|21|2111|FRA
Julien Laporte|CB|32|723|FRA
Théo Sainte-Luce|LB|28|619|FRA
Wilfried Ndollo Bille|RB|21|150|CMR
Daylam Meddah|CB|24|1392|FRA
Yanis Zouaoui|LB|28|1469|FRA
Tidiane Diallo|CB|18|150|SUI
Mathis Chambon|RB|17|150|FRA
Nelson Sissoko|RB|29|837|MLI
Florian Tardieu|DM|34|290|FRA
Oscar Eyen|CM|18|150|CMR
Nabil Homssa|CM|24|281|FRA
Axel Guéguin|AM|21|384|FRA
Hichem Abderrebi|DM|18|150|FRA
Jérémy Hatchi|LW|21|565|GLP
Noah Vidal-Cartoux|AM|18|650|FRA
Théo Chennahi|DM|21|2261|FRA
Everson Junior|DM|22|1165|FRA
Gregory Ayem|AM|20|150|FRA
Lacine Megnan-Pave|ST|16|150|FRA
Yassine Benhattab|RW|23|1799|FRA
Mamadou Camara|ST|25|1212|MLI
Nicolas Pays|RW|23|1571|FRA
Nordan Mukiele|LW|20|1462|FRA
Daryll Benlahlou|ST|20|150|ALG` },
    { id: 'reims', name: 'Реймс', city: 'Реймс', stadium: 'Stade Auguste-Delaune', cap: 21684, colors: ['#e30613', '#ffffff'], players: `
Alexis Sauvage|GK|34|162|FRA
Tom Hülsmann|GK|22|2304|GER
Edin Omeragic|GK|24|359|SUI
Soumaïla Sylla|GK|22|349|GUI
Aleksandr Guboglo|RB|19|831|CAN
Joseph Okumu|CB|29|1969|KEN
Sergio Akieme|LB|28|2253|EQG
Jean Mambuku|RB|18|150|ITA
Samuel Kotto|CB|23|3685|CMR
Daouda Guindo|LB|24|4767|MLI
Elie N'Tamon|CB|22|1794|CIV
Armel Zohouri|RB|25|247|CIV
Theo Amorim|CB|22|150|FRA
Jean-Philippe Célestin|CB|23|150|FRA
John Otomewo|CM|19|1940|NGA
Théo Leoni|DM|26|2589|BEL
Yaya Fofana|AM|22|1520|MLI
Mory Gbane|DM|25|2555|CIV
John Patrick|CM|23|150|IRL
Manzur Okwaro|DM|20|150|KEN
Theo Deflorenne|CM|17|150|FRA
Chamsedin Kouranfal|DM|20|150|FRA
Amine Salama|ST|26|754|FRA
Tidiane Diarrassouba|CM|18|922|FRA
Mohamed Daramy|LW|24|1946|DEN
Youssef El Kachati|ST|26|561|NED
Seydou Dembele|RW|18|150|MLI
Arone Gadou|LW|17|150|FRA
Amine Kashi|RW|23|87|FRA
Ikechukwu Orazi|ST|19|150|IRL
Quentin Paris|ST|20|1099|FRA
Hafiz Ibrahim|ST|20|150|NGA
Ange Martial Tia|RW|19|4395|MLI
Sambou Soumano|ST|25|3729|FRA` },
    { id: 'pau', name: 'По', city: 'По', stadium: 'Stade Nouste Camp', cap: 4031, colors: ['#ffd700', '#0055a4'], players: `
Brice Maubleu|GK|36|275|FRA
Maxime Adam|GK|23|150|FRA
Esteban Salles|GK|32|157|FRA
Tom Pouilly|RB|23|1160|FRA
Axel Dodote|CB|19|150|FRA
Souleymane Basse|LB|22|392|SEN
Rony Baheng|CB|21|430|CMR
Anthony Briançon|CB|31|165|FRA
Gaëtan Paquiez|CB|32|358|FRA
Mathys Tourraine|RB|25|526|FRA
Axel Bamba|CB|27|233|CIV
Abdel Hakim Abdallah|LB|29|414|COM
Lorenzo Rajot|CM|29|92|FRA
Cheikh Fall|CM|22|398|SEN
Royce Openda Owaga|CM|24|264|GAB
Tom Saettel|CM|21|261|FRA
Jessy Benet|CM|31|615|FRA
Quentin Daubin|DM|31|168|FRA
Luan Gadegbeku|DM|19|1252|FRA
Kyllian Gasnier|CM|24|119|FRA
Hacène Benali|ST|27|247|ALG
Babacar Leye|ST|26|369|FRA
Bilal Brahimi|RW|26|936|FRA
Alexis Lefebvre|RW|23|150|FRA
Jérémy Sebas|ST|23|362|MTQ
Abdoulaye Mbaye|ST|21|150|SEN` },
    { id: 'red_star', name: 'Ред Стар', city: 'Сент-Уан', stadium: 'Stade Bauer', cap: 6480, colors: ['#00a650', '#e30613'], players: `
Yanis Benchaouch|GK|20|296|MAR
Gaëtan Poussin|GK|27|801|FRA
Mouez Hassen|GK|31|207|TUN
Théo Magnin|RB|23|728|SUI
Matthieu Huard|CB|28|232|FRA
Elyaz Zidane|CB|20|347|FRA
Josué Escartin|CB|23|246|FRA
Bradley Danger|CB|28|395|FRA
Sekou Guindo|CB|22|150|MLI
Dylan Durivaux|CB|25|1136|FRA
Pierre Lemonnier|CB|33|165|FRA
Leonardo Buta|LB|24|1034|POR
Mohafidh Ahamada|CB|22|150|COM
Chaib Lahmer|CB|23|150|FRA
Côme Bianay|CB|21|492|FRA
Saîf-Eddine Khaoui|AM|31|239|TUN
Mahamadou Diawara|DM|21|1349|FRA
Samuel Renel|DM|24|253|MTQ
Islamdine Halifa|DM|21|477|FRA
Idrissa Sabaly|DM|18|619|FRA
Cheick Konate|CM|21|150|RSA
Damien Durand|LW|31|817|FRA
Guillaume Trani|ST|28|130|FRA
Ilija Despotovic|ST|18|551|SUI
Kémo Cissé|RW|29|205|FRA
Jovany Ikanga A Ngele|ST|24|1144|FRA
Godson Kyeremeh|RW|26|389|FRA
Kévin Cabral|ST|27|767|FRA` },
    { id: 'annecy', name: 'Анси', city: 'Анси', stadium: 'Parc des Sports', cap: 15660, colors: ['#e30613', '#ffffff'], players: `
Florian Escales|GK|30|450|FRA
Thomas Callens|GK|28|308|FRA
Matéo Gonzalez|GK|21|150|FRA
Emmanuel Louisir|CB|20|150|FRA
Sacha Lima|CB|22|150|FRA
François Lajugie|CB|30|290|FRA
Adam Yahi|CM|22|274|FRA
Mattéo Veillon|CB|24|254|FRA
Jonathan Do Marcolino|CB|20|458|GAB
Julien Kouadio|LB|27|662|CTA
David Oduro|CB|20|555|GHA
Gabin Secretant|CB|18|150|FRA
Esteban Riou|CB|20|312|FRA
Thibault Delphis|CB|24|593|FRA
Ahmed Kashi|CM|37|217|ALG
Alexis Casadei|DM|21|535|FRA
Souleymane Fofana|CM|20|150|CIV
Mohamed Koné|DM|19|663|CIV
Pascal Mozie|CM|18|971|POL
Kilyan Jusseron-Veniere|RW|20|484|FRA
Esteban Marre|RW|22|150|FRA
Clément Billemaz|LW|28|766|FRA
Nolan Ferro|CM|20|150|FRA
Paul Venot|CM|25|382|FRA
Dion Sahi|AM|24|842|CIV
Alan Mondesir|ST|23|150|FRA
Thibault Rambaud|ST|29|512|FRA
Kadan Young|LW|20|376|ENG
Zépiqueno Redmond|LW|20|800|NED
Antoine Larose|RW|33|219|FRA` },
    { id: 'metz', name: 'Мец', city: 'Мец', stadium: 'Stade Saint-Symphorien', cap: 30000, colors: ['#800020', '#ffffff'], players: `
Jonathan Fischer|GK|24|1997|DEN
Ousmane Ba|GK|24|250|SEN
Pape Sy|GK|29|242|SEN
Maxime Colin|LB|34|233|FRA
Florian Miguel|LB|30|937|FRA
Urie-Michel Mboula|CB|23|1029|GAB
Jean Ruiz|CB|28|861|FRA
Tahirys Dos Santos|CB|20|150|FRA
Adam Marchal|CB|18|150|ALG
Bryan Song|CB|19|150|CMR
Cristian Devenish|CB|25|490|COL
Bouna Sarr|RB|34|280|SEN
Idris Mohamed|CB|22|458|COM
Nampalys Mendy|CM|34|261|SEN
Jessy Deminguet|DM|28|1603|FRA
Téji Savanier|AM|34|578|FRA
Alpha Touré|DM|20|6182|SEN
Believe Munongo|CM|16|14276|FRA
Ibou Sané|ST|21|1332|SEN
Гиорги Абуашвили|LW|23|788|GEO
Pape Moussa Fall|ST|22|3012|SEN
Joseph Mangondo|ST|21|416|FRA
Morgan Bokele|RW|22|969|FRA
Jahyann Pandore|RW|18|446|FRA
Nathan Mbala|RW|18|6476|COD
Abdourahmane Mbodji|ST|18|150|SEN
Hamza Kadamani|LW|17|150|LUX
Abdoulaye Ba|RW|22|150|FRA` },
    { id: 'dijon', name: 'Дижон', city: 'Дижон', stadium: 'Stade Gaston-Gérard', cap: 16098, colors: ['#e30613', '#ffffff'], players: `
Paul Delecroix|GK|38|157|FRA
Ilan Marie-Rose|GK|18|150|FRA
Enzo Ketterle|GK|23|150|FRA
Anass Benyahya|CB|22|150|MAR
Quentin Bernard|CB|37|181|FRA
Waly Diouf|CB|29|171|SEN
Ben-Chayeel Hamada|RB|23|448|COM
Axel Bargain|CB|20|150|FRA
Tom Meynadier|RB|26|339|FRA
Lenny Lacroix|CB|23|384|FRA
Moussa Faty|LB|26|395|FRA
Ylan Aka|LB|19|405|FRA
Boubacar Diallo|LB|21|150|FRA
Ismaïl Bouleghcha|RB|23|383|MAR
Mickaël Barreto|AM|35|148|FRA
Paul Bellon|DM|26|337|FRA
Jordan Marié|DM|35|186|FRA
Adel Lembezat|AM|28|223|FRA
Cesar Obongo|CM|20|338|CGO
Hugo Vargas-Ríos|DM|31|163|FRA
Hatem Mimoune|CM|19|150|FRA
Abdelmajid Djae|ST|21|392|COM
Tyris Dong|ST|18|150|FRA
Yanis Barka|ST|28|326|FRA
Julio Tavarès|ST|37|198|CPV
Brandon Ndezi|LW|26|292|COD
Samy Chouchane|RW|23|293|TUN
Alexis Ntamack|ST|22|481|FRA
Florian Rombogouera|ST|20|264|FRA
Ange Lago|ST|21|434|CIV` },
    { id: 'dunkerque', name: 'Дюнкерк', city: 'Дюнкерк', stadium: 'Stade Marcel-Tribut', cap: 4933, colors: ['#0055a4', '#ffffff'], players: `
Maxence Prévot|GK|29|284|FRA
Mouhamed Sissokho|GK|21|150|SEN
Moha Ramos|GK|26|320|ESP
Ousmane Touré|CB|21|789|FRA
Bram Lagae|CB|22|780|BEL
Lenny Dziki Loussilaho|CB|21|330|CGO
Victor Mayela|CB|22|1812|FRA
Lenny Vallier|LB|27|394|FRA
Opa Sanganté|CB|35|184|GNB
Allan Linguet|RB|27|261|FRA
Felipe Abner|LB|30|141|BRA
Maedine Makhloufi|LB|21|428|FRA
Jordan Morel|DM|23|592|FRA
Gaëtan Robail|AM|32|185|FRA
Adrien Lebeau|AM|28|272|FRA
Steven Nzonzi|DM|37|156|FRA
Théna Massock|DM|19|775|FRA
Franck Atoen|CM|20|150|CMR
Firas Belabdelli|CM|19|150|FRA
Khalil Ayari|RW|21|869|TUN
Егор Пруцев|LW|23|1513|RUS
Pape Malick Dieng|ST|20|150|SEN
Souleymane Keita|ST|20|150|FRA
Arthylio Nade|ST|19|150|FRA
Noah Nemorin|ST|20|150|FRA
Alex Daho|RW|23|410|FRA
Enzo Mayilla|ST|20|517|FRA
M'Baye Niang|ST|31|446|SEN` },
    { id: 'guingamp', name: 'Генгам', city: 'Генгам', stadium: 'Stade du Roudourou', cap: 19003, colors: ['#e30613', '#000000'], players: `
Teddy Bartouche|GK|29|234|GLP
Adrián Ortolá|GK|33|193|ESP
Noah Marec|GK|22|150|FRA
Erwin Koffi|RB|31|180|FRA
Jérémie Matumona|RB|20|743|FRA
Tuomas Ollila|LB|26|265|FIN
Donatien Gomis|CB|31|246|FRA
Jeovanni Dianganga|CB|27|328|BEL
Ibrahim Fomba|CB|20|150|FRA
Nathan Fondja|CB|20|150|FRA
Albin Démouchy|CB|24|326|FRA
Idriss Planeix|CB|19|150|FRA
Vimoj Muntu Wa Mungu|LB|22|337|FRA
Dylan Louiserre|CM|31|733|FRA
Darly N'Landu|CM|26|235|FRA
Florent Sanchez|LW|23|587|FRA
Teddy Averlant|RW|27|756|GAB
Samir Ben Brahim|RW|23|413|FRA
Tanguy Ahilé|CM|22|423|FRA
Jasser Chamakh|CM|23|255|FRA
Gauthier Ott|LW|24|520|FRA
Tom Ducrocq|CM|27|404|FRA
Joel Matondo|CM|21|150|FRA
Ewan Aucan|CM|19|150|FRA
Zayon Chtaï-Telamio|LW|20|150|TUN
Amine Hemia|ST|28|970|FRA
Amadou Samoura|ST|22|411|FRA
Stanislas Kielt|ST|24|667|FRA
Brandon Bokangu|ST|26|378|FRA` },
    { id: 'sochaux', name: 'Сошо', city: 'Монбельяр', stadium: 'Stade Auguste-Bonal', cap: 20005, colors: ['#ffd700', '#0055a4'], players: `
Alexandre Pierre|GK|25|570|HAI
Mehdi Jeannin|GK|35|106|ALG
Dalangunypole Gomis|LB|22|414|FRA
Arthur Vitelli|CB|26|269|FRA
Mathieu Peybernes|CB|36|217|FRA
Benjaloud Youssouf|RB|32|179|COM
Élie N'Gatta|RB|20|1149|FRA
Dylan Tavares|LB|30|181|CPV
Saad Agouzoul|CB|29|165|MAR
Samy Baghdadi|AM|29|165|FRA
Honoré Bayanginisa|DM|21|364|COD
Don Deedson Louicius|RW|25|686|HAI
Jonathan Mexique|DM|31|165|MTQ
Victor Lobry|AM|31|285|FRA
Bakary Diawara|DM|17|150|FRA
Julien Masson|DM|28|227|FRA
Marie-Gaël Mukanya|ST|23|201|FRA
Benjamin Gomel|LW|28|279|FRA
Kapitbafan Djoco|ST|31|150|FRA
Boubacar Fofana|LW|28|214|FRA
Yohan Demoncy|ST|30|166|FRA
Ethan Cortes|ST|19|150|FRA
Noa Kotto Kotto Mouyema|ST|20|150|FRA
Julien Vetro|RW|22|278|FRA
Landry Nomel|LW|29|206|FRA
Mathis Clairicia|ST|24|393|FRA` },
    { id: 'rodez', name: 'Родез', city: 'Родез', stadium: 'Stade Paul Lignon', cap: 6761, colors: ['#e30613', '#ffd700'], players: `
Quentin Braat|GK|29|874|FRA
Lucas Margueron|GK|25|349|FRA
Enzo Crombez|GK|23|291|FRA
Cheick Doumbia|LW|22|359|FRA
Raphaël Lipinski|CB|24|1618|FRA
Mathis Magnin|CB|25|1430|SUI
Mohamed Sylla|CB|22|174|FRA
Corentin Roubiou|RB|21|322|FRA
Evans Jean-Lambert|LB|27|616|FRA
Dylan Vangi|CB|21|323|FRA
Ryan Ponti|LB|28|187|MAD
Loni Laurent|CB|25|439|FRA
Steven Luyambula Biwa|RB|24|386|FRA
Jordan Correia|CM|22|1826|CPV
Damjan Pavlović|CM|25|156|SRB
Mathis Saka|CM|20|777|FRA
Octave Joly|CM|24|530|FRA
Antonin Cartillier|CM|22|443|FRA
Yanis Dahalani|CM|21|150|FRA
Kenny Nagera|ST|24|651|FRA
Nachon Nsingi|ST|25|430|BEL
Mehdi Baaloudj|ST|25|320|ALG
Mathis Touho|ST|21|586|FRA
Hermann Tebily|ST|24|335|FRA
Kelian Nsona|LW|24|357|FRA
Marco Essimi|RW|27|613|FRA
Djibril Mavounia|ST|20|150|FRA` },
    { id: 'boulogne', name: 'Булонь', city: 'Булонь-сюр-Мер', stadium: 'Stade de la Libération', cap: 15242, colors: ['#e30613', '#000000'], players: `
Xavier Lenogue|GK|29|204|MTQ
Ibrahim Koné|GK|36|137|GUI
Azamat Uriev|GK|21|367|FRA
Blondy Nna Noukeu|GK|25|389|CMR
Jonathan Kapenga|CB|22|150|FRA
Julien Boyer|LB|28|302|FRA
Adrien Pinot|CB|25|298|FRA
Demba Thiam|RB|36|229|FRA
Théo Brusco|CB|26|204|FRA
Aurélien Platret|RB|23|307|FRA
Louis Siliadin|CB|25|216|FRA
Antoine Kerriou|CB|23|150|FRA
Oscar Lenne|CB|20|190|FRA
Mathieu Mion|LB|26|348|FRA
Jonas Martin|CM|36|172|FRA
Joffrey Bultel|CM|26|237|FRA
Nolan Binet|CM|22|917|FRA
Sonny Duflos|AM|31|156|FRA
Sohan Paillard|CM|22|208|FRA
Tom Dupont|CM|20|150|FRA
Cheikh Ibrahim Dia|ST|21|150|FRA
Mohamed Soumah|RW|20|150|FRA
Théo Epailly|CM|27|188|FRA
Zoran Moco|CM|23|446|GLP
Aymane Nassiri|RW|21|150|FRA
Martin Lecolier|ST|23|357|FRA
Abdel Hbouch|ST|27|262|FRA
Noah Fatar|ST|24|358|FRA
Ludéric Etonde|ST|26|191|FRA
Benjamin Bešić|ST|24|332|FRA` },
    { id: 'nantes', name: 'Нант', city: 'Нант', stadium: 'Stade de la Beaujoire - Louis Fonteneau', cap: 38285, colors: ['#ffd700', '#00a650'], players: `
Maxime Dupé|GK|33|526|FRA
Alexis Mirbach|GK|21|447|FRA
Patrik Carlgren|GK|34|160|SWE
Louka Gautier-Serrant|LW|20|150|FRA
Ali Yousef Musrati|CB|25|150|LBY
Saïdou Sow|CB|24|1892|GUI
Lucas Perrin|CB|27|1412|FRA
Frédéric Guilbert|RB|31|790|FRA
Sékou Doucouré|CB|21|386|MLI
Tylel Tati|CB|18|25953|FRA
Kelvin Amian|RB|28|1553|FRA
Lamine Diack|CM|25|231|SEN
Johann Lepenant|CM|24|9006|FRA
Fabien Centonze|RB|30|649|FRA
Louis Leroux|CM|20|12566|FRA
Wilitty Younoussa|CM|25|937|CMR
Ryad Hachem|AM|28|909|FRA
Ibrahima Sissoko|CM|28|1466|MLI
Balthazar Pierret|CM|26|908|FRA
Moustapha Dabo|CM|19|331|FRA
Malang Gomes|ST|21|225|FRA
Sacha Ziani|CM|23|150|FRA
Amin Cherni|LB|25|2767|TUN
Antoine Joujou|LW|23|1888|FRA
Killian Corredor|AM|25|2231|FRA
Fodé Doucouré|RW|25|1276|MLI
Dehmaine Tabibou|RW|21|3070|FRA
Mathieu Cafaro|LW|29|1096|FRA
Thomas Robinet|ST|30|781|FRA
Ignatius Ganago|ST|27|1346|CMR
Doumbia Koné|ST|19|150|FRA
Loan Merrifield|RW|17|150|FRA
Klaus Camara|ST|18|150|FRA` },
    { id: 'grenoble', name: 'Гренобль', city: 'Гренобль', stadium: 'Stade des Alpes', cap: 20068, colors: ['#0055a4', '#ffffff'], players: `
Alexandre Olliero|GK|30|279|FRA
Bobby Allain|GK|34|140|FRA
Farouq Limouri|CB|23|220|NED
Clément Vidal|CB|26|1052|FRA
Nesta Zahui|RW|23|687|FRA
Allan Tchaptchet|CB|24|381|FRA
Christ-Owen Kouassi|RB|23|1297|CIV
Ange-Loïc N’Gatta|RB|22|355|FRA
Matthéo Xantippe|LB|24|1123|FRA
Aurélien Pelon|CB|22|190|FRA
Sakhalou Niakaté|RB|20|295|FRA
Yvann Maçon|RB|28|344|GLP
Yohann Magnin|DM|29|833|FRA
Lucas Bernadou|CM|26|270|FRA
Arthur Lallias|RW|23|415|FRA
Baptiste Mouazan|AM|25|489|FRA
Maël Corboz|CM|32|226|USA
Samba Diba|CM|22|597|SEN
Owen Martinez-Jullien|CM|21|115|FRA
Jules Mouton|CM|21|150|FRA
Ze Leite|RW|27|292|POR
Moussa Djitté|ST|27|233|SEN
Ugo Bonnet|ST|33|206|FRA
Leonardo Cerri|ST|23|280|ITA
Dillon Hoogewerf|LW|23|295|NED
Mohamed Bechikh|ST|21|290|FRA
Kyliann Fofana|RW|20|150|FRA
Jean-Guy Akpa Akpro|ST|21|679|FRA` },
    { id: 'clermont', name: 'Клермон', city: 'Клермон-Ферран', stadium: 'Stade Gabriel-Montpied', cap: 13576, colors: ['#e30613', '#0055a4'], players: `
Massamba Ndiaye|GK|25|353|SEN
Theo Guivarch|GK|30|408|FRA
Andy Pelmard|CB|26|1265|MAD
Ethan Kena Kabeya|CB|20|465|FRA
El Hadj Koné|LB|20|1311|FRA
Vital N'Simba|LB|33|187|COD
Yoann Salmier|CB|33|292|FRA
Ivan M'Bahia|CB|21|2138|CIV
Matys Donavin|CB|19|339|FRA
Ibrahim Coulibaly|RB|20|1645|FRA
Kenji Van Boto|LB|30|181|MAD
Abdellah Baallal|CM|21|1290|MAR
Jean Grillot|DM|20|150|FRA
Yuliwes Bellache|LW|24|243|ALG
Junior Sambia|AM|30|204|CTA
Julien Astic|AM|21|425|FRA
Marouane Admar|AM|20|150|FRA
Adrien Hunou|AM|32|157|FRA
Rominigue Kouamé|CM|29|288|MLI
Allan Ackra|AM|22|150|FRA
Florian Bianchini|LW|25|727|FRA
Luís Semedo|ST|23|770|POR
Maïdine Douane|RW|24|457|FRA
Ousmane Diop|RW|21|368|SEN
Noam Strotz|LW|19|150|TUN
Mohamed-Amine Bouchenna|LW|20|423|FRA
Arthur Saintorens|ST|21|150|FRA
Jean Tsamouna|ST|19|150|CGO
Enzo Cantero|RW|21|1085|FRA
Christ Okou|ST|20|150|FRA` },
    { id: 'laval', name: 'Лаваль', city: 'Лаваль', stadium: 'Stade Francis Le Basser', cap: 18607, colors: ['#f26522', '#000000'], players: `
Maxime Hautbois|GK|35|233|FRA
Mamadou Samassa|GK|36|330|MLI
Lucas Droyaux|GK|21|150|FRA
William Bianda|CB|26|506|FRA
Mattéo Commaret|CB|24|491|FRA
Aboubacar Lô|CB|26|150|SEN
Jules Gaudin|LB|26|267|FRA
Esteban Mouton|RB|23|443|FRA
Sidi Bane|CB|22|1011|SEN
Mamadou Sidibé|RB|21|150|GUI
Layousse Samb|LB|25|150|SEN
Julien Maggiotti|AM|31|285|FRA
Sam Sanna|DM|27|771|FRA
Chafik Gourichy|DM|26|159|FRA
Teddy Bouriaud|CM|29|205|FRA
Oumar Konaté|AM|19|150|CIV
Francis Coquelin|DM|35|256|FRA
Cyril Mandouki|CM|35|225|MTQ
Ethan Clavreul|LW|20|702|FRA
Alessio Beaudouin|DM|21|274|FRA
Hermann Esmel|CM|27|326|FRA
Alpha Diallo|CM|20|150|FRA
Mathis Houdayer|AM|21|224|FRA
Yanis Court|DM|17|150|FRA
Mohamed Souare|CM|18|150|FRA
Sacha Mellier|DM|18|150|FRA
Trévis Dago|ST|21|758|FRA
Corentin Fatou|ST|27|326|FRA
Aboubakary Kanté|ST|32|309|GAM
Amine Moussaoui|ST|19|150|FRA` },
  ],
});
