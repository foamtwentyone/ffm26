// Сегунда 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'esp2', name: 'Сегунда', short: 'Сегунда', country: 'ESP', tier: 2, weekday: 0,
  autumn: { from: '08-15', rounds: 21 }, spring: { from: '01-09', rounds: 21 },
  ticket: 15, prize: [5000, 4850, 4650, 4500, 4350, 4150, 4000, 3850, 3650, 3500, 3350, 3150, 3000, 2850, 2650, 2500, 2350, 2150, 2000, 1850, 1650, 1500],
  teams: [
    { id: 'almeria', name: 'Альмерия', city: 'Альмерия', stadium: 'UD Almería Stadium', cap: 18331, colors: ['#e30613', '#ffffff'], players: `
Andrés Fernández|GK|39|284|ESP
Fernando Martínez|GK|36|171|ESP
Jesús López|GK|24|150|ESP
Áron Yaakobishvili|GK|20|4633|HUN
Marcos Luna|RB|23|392|ESP
Álex Muñoz|LB|32|667|ESP
Jorge Pulido|CB|35|372|ESP
Federico Bonini|CB|25|2281|ITA
Rodrigo Ely|CB|32|417|BRA
Chumi|CB|27|611|ESP
Daijiro Chirino|RB|24|1363|NED
Andrej Popović|CB|20|370|SRB
Pedro Cedillo|CB|19|560|ESP
Mikel Vesga|DM|33|955|ESP
Gui Guedes|DM|24|622|POR
Sergio Arribas|AM|25|16785|ESP
Javi Muñoz|CM|31|896|ESP
Leonardo Lelo|LW|26|5736|POR
Brian Cipenga|LW|28|928|COD
Kassoum Kone|CM|19|150|FRA
Stefan Džodić|DM|21|1347|SRB
Quim Junyent|CM|19|150|ESP
Ibrahima Koné|ST|27|455|MLI
Ivan Parra|ST|19|534|SUI
Marciano Tchami|LW|22|319|GNB
Jon Morcillo|LW|28|1476|ESP
Thalys|ST|21|4950|BRA
Nico Melamed|LW|25|2225|ESP
Léo Baptistão|RW|34|271|BRA
Álex Sola|RW|27|1268|ESP
Adrián Embarba|LW|34|615|ESP
Miguel de la Fuente|ST|27|1767|ESP` },
    { id: 'castellon', name: 'Кастельон', city: 'Кастельон', stadium: 'Estadio SkyFi Castalia', cap: 14485, colors: ['#000000', '#ffffff'], players: `
Amir Saipi|GK|26|1275|KVX
Romain Matthys|GK|28|803|BEL
Sergi Torner|GK|22|150|ESP
Juanjo Nieto|CB|32|258|ESP
Fabrizio Brignani|CB|28|880|ITA
Agustín Sienra|CB|27|449|ARG
Alberto Jiménez|CB|33|380|ESP
Federico Ceccherini|CB|34|154|ITA
Lucas Alcázar|LB|24|1049|ESP
Ilias Kostis|CB|23|433|CYP
Tincho Conde|LB|23|412|ESP
Jérémy Mellot|RB|32|341|FRA
Matías Orozco|CM|18|2353|COL
Barri|CM|31|449|ESP
Iñigo Córdoba|LW|29|1250|ESP
Fran Castillo|AM|29|150|ESP
Pablo Santiago|RW|26|792|ESP
Álvaro Martin|CM|25|412|ESP
Jari Vlak|DM|28|756|NED
Antonio Gala|ST|22|462|ITA
Raúl Sánchez|ST|28|862|ESP
Ousmane Nana Camara|ST|24|2170|GUI
Israel Suero|AM|32|193|ESP
Adam Jakobsen|ST|27|1359|DEN
Hamza Bellari|LW|23|419|ESP
Álvaro Garcia|ST|26|367|ESP
David Nzanza|ST|23|213|ANG
Rodrigo Rêgo|RW|21|941|POR` },
    { id: 'eibar', name: 'Эйбар', city: 'Эйбар', stadium: 'Estadio Municipal de Ipurúa', cap: 8050, colors: ['#0055a4', '#a50044'], players: `
Luis López|GK|25|366|ESP
Jonmi Magunagoitia|GK|26|1161|ESP
Sergio Cubero|RB|27|480|ESP
Imanol García de Albéniz|LB|26|744|ESP
Unai Elgezabal|CB|33|316|ESP
Peru Nolaskoain|CB|27|680|ESP
Jair Amador|CB|37|185|POR
Markel Arana|CB|24|308|ESP
Álvaro Rodríguez|RB|32|150|ESP
Anaitz Arbilla|CB|39|273|ESP
Juan Bernat|LB|33|281|ESP
Oier Llorente|RB|21|150|ESP
Haritz Ortuzar|CB|21|150|ESP
Sergio Álvarez|DM|34|394|ESP
Ander Madariaga|DM|24|150|ESP
Jon Magunazelaia|AM|25|926|ESP
Lander Olaetxea|DM|33|210|ESP
Pejiño|RW|30|460|ESP
Iván Gil|AM|26|703|ESP
Lucas Núñez|CM|20|150|ESP
Aleix Garrido|DM|22|1188|ESP
Lucas Sarasketa|CM|19|150|ESP
Adu Ares|RW|25|150|ESP
Jon Bautista|ST|31|1097|ESP
Iker Zubiria|ST|22|150|ESP
Jon Guruzeta|LW|26|351|ESP
Eric Pérez|LW|25|294|ESP
Javi Martón|ST|27|1330|ESP
Elijah Gift|LW|20|150|ESP
Carlos Lumbreras|ST|21|291|ESP` },
    { id: 'granada', name: 'Гранада', city: 'Гранада', stadium: 'Estadio Nuevo Los Cármenes', cap: 22524, colors: ['#e30613', '#ffffff'], players: `
Alberto Flores|GK|22|524|ESP
Raúl Lizoain|GK|35|367|ESP
Pau Casadesús|RB|22|415|ESP
Diego Hormigo|LB|23|150|ESP
Manu Lama|CB|25|1069|ESP
Diego Pampín|LB|26|661|ESP
Sergio López|RB|27|1022|ESP
Baïla Diallo|LB|25|995|MTN
Benedikt Gimber|CB|29|1129|GER
Juanjo|CB|19|150|ESP
Angelo Garcia|LW|20|150|ESP
Bourama Dembele|CB|18|150|ESP
Rubén Alcaraz|CM|35|253|ESP
Gerard Gumbau|DM|31|690|ESP
Pedro Alemañ|CM|24|1388|ESP
Abdoul Kader Bamba|LW|32|765|FRA
Dylan Rodriguez|CM|19|150|ESP
Manuel Maza|CM|19|150|ESP
Sergio Rodelas|RW|21|760|ESP
Alejandro Marqués|ST|26|1126|VEN
Jorge Pascual|ST|23|1696|ESP
José Arnáiz|LW|31|502|ESP
Chinaza Onouha|ST|21|150|ESP
Mario Jiménez|LW|19|150|ESP
Owen Emeka|RW|17|150|ESP` },
    { id: 'mallorca', name: 'Мальорка', city: 'Пальма', stadium: 'Estadi Mallorca Son Moix', cap: 26020, colors: ['#e20613', '#000000'], players: `
Arnau Tenas|GK|25|2658|ESP
Lucas Bergström|GK|24|1107|FIN
Iván Cuéllar|GK|42|163|ESP
Toni Dols|GK|23|150|ESP
Toni Lato|LB|28|849|ESP
David López|CB|23|150|ESP
Alberto Moreno|LB|34|705|ESP
John Donald|CB|26|1149|ESP
Antonio Raíllo|CB|35|909|ESP
Aboubaka Soumahoro|LB|21|1282|FRA
Martin Valjent|CB|30|2269|SVK
Luis Orejuela|LB|19|150|ESP
Leo Sanchez|CB|20|150|ESP
Miguel Calatayud|RB|20|150|ESP
Jan Salas|CM|21|640|ESP
Guille Fernández|CM|18|4361|ESP
Antonio Sánchez|RW|29|1188|ESP
Álex Sala|CM|25|943|ESP
Manu Morlanes|DM|27|1899|ESP
Sergi Darder|AM|32|2272|ESP
Pablo Torre|AM|23|6161|ESP
Antoniu Roca|LW|24|150|ESP
Adrián Liso|ST|21|4838|ESP
Jandro Garcia|CM|20|150|ESP
Abdón Prats|ST|33|685|ESP
Zito Luvumbo|RW|24|4007|ANG
Adam Buksa|ST|30|2296|POL
Arnau Puigmal|RW|25|1297|ESP
Adrián Fuentes|ST|30|1048|ESP
Josep Cerdà|LW|23|1301|ESP
Justin Kalumba|ST|21|1130|FRA
Aimar Pena|ST|22|150|ESP` },
    { id: 'sporting_gijon', name: 'Спортинг Хихон', city: 'Хихон', stadium: 'Estadio Municipal El Molinón-Enrique Castro Quini', cap: 29538, colors: ['#e30613', '#ffffff'], players: `
Rubén Yánez|GK|33|688|ESP
Arana|GK|24|410|ESP
Guille Rosas|RB|26|1695|ESP
Emanuel Gularte|CB|29|1087|URU
Diego Sánchez|LB|23|1565|ESP
Pablo Vázquez|CB|32|268|ESP
Jorge Sáenz|CB|29|506|ESP
Aimar Duñabeitia|CB|23|387|ESP
Iker Martínez|RW|22|150|ESP
Álex Diego|LB|18|150|ESP
Andrés Cuenca|CB|19|1243|ESP
Pablo García|LW|26|516|ESP
Nacho Martín|DM|24|150|ESP
Manu Rodríguez|CM|20|1439|ESP
César Gelabert|AM|25|2701|ESP
Alex Corredera|CM|30|683|ESP
Mamadou Loum Ndiaye|CM|29|233|SEN
Hugo Guillamón|DM|26|1329|ESP
Diego Matabuena|CM|19|150|ESP
Bruno Rubio|CM|19|150|ESP
Andrés Ferrari|ST|23|1365|URU
Gaspar Campos|LW|26|1547|ESP
Konrad de la Fuente|LW|25|628|USA
Alejo Sarco|ST|20|2042|ARG
Antonio Casas|ST|26|425|ESP
Juan Otero|ST|31|1102|COL
Никита Иосифов|LW|25|1067|RUS
Miguel Conde|ST|20|150|ESP
Christian Ferreres|ST|22|150|ESP` },
    { id: 'girona', name: 'Жирона', city: 'Жирона', stadium: 'Estadi Municipal de Montilivi', cap: 14500, colors: ['#e30613', '#ffffff'], players: `
Sergi Puig|GK|27|224|ESP
Paulo Gazzaniga|GK|34|1111|ARG
Владыслав Крапывцов|GK|21|418|UKR
Jordi Danso|GK|19|150|GAM
Abdul Mumin|CB|28|1679|GHA
Mateu Morey|RB|26|1175|ESP
Javier Boñar|RB|21|150|ESP
David López|CB|37|244|ESP
Álex Moreno|LB|33|1909|ESP
Alejandro Francés|CB|24|3432|ESP
Gibert Jordana|CB|19|150|ESP
Mauro Furtado|CB|18|150|POR
Holmes Zamorano|CB|17|150|ESP
Guillem Badia|CB|19|150|ESP
Donny van de Beek|AM|29|1188|NED
Fran Beltrán|CM|27|3159|ESP
Iván Morante|CM|25|1091|ESP
Izan González|CM|21|1522|ESP
Lass Kourouma|DM|22|480|GUI
Mohammed Hamony|RW|20|150|MAR
Cristhian Stuani|ST|40|358|URU
Abel Ruiz|ST|26|1630|ESP
Portu|AM|34|694|ESP
Олександр Пыщур|ST|21|456|UKR
Bryan Gil|LW|25|8690|ESP
Владыслав Ванат|ST|24|14346|UKR
Jastin García|LW|22|150|ESP
Yáser Asprilla|RW|22|16076|COL
Carles Pérez|RW|28|929|ESP
Unai Hernández|AM|21|1584|ESP
Juan Arango|CB|20|150|VEN
Javier Sarasa|LW|21|150|ESP` },
    { id: 'burgos', name: 'Бургос', city: 'Бургос', stadium: 'Estadio Municipal de El Plantío', cap: 12200, colors: ['#ffffff', '#000000'], players: `
Bruno Iribarne|GK|22|150|ESP
Ander Cantero|GK|31|717|ESP
Marc Monedero|GK|21|150|ESP
Diego González|GK|20|150|ESP
Cristian Torrelavid|GK|24|150|ESP
Álex Lizancos|RB|23|1334|ESP
Ignasi Vilarrasa|LB|27|387|ESP
Sergio González|CB|29|351|ESP
Grego Sierra|CB|33|405|ESP
Oier Luengo|CB|28|499|ESP
Saúl del Cerro|CB|22|219|ESP
Brais Martínez|LB|24|275|ESP
Alberto Dadie|RB|24|501|ESP
Iván Martínez|CB|21|150|ESP
David Hernaiz|CB|20|150|ESP
Hugo Sedano|CM|20|150|ESP
Pablo Galdames|CM|29|368|CHI
Marcelo Expósito|CM|23|407|ESP
Kévin Appin|LW|28|413|MTQ
Unai Vencedor|CM|25|965|ESP
David González|RW|24|2149|ESP
Mario Cantero|CM|24|305|ESP
José Gragera|CM|26|937|ESP
Fermín García|LW|23|383|ESP
Santiago Lencina|RW|21|2061|ARG
Jon Karrikaburu|ST|24|1262|ESP
Alex Forés|ST|25|603|ESP
Víctor Mollejo|ST|25|433|ESP
Curro Sánchez|ST|30|834|ESP
Javi Llabrés|LW|24|816|ESP
Irian Ribas|ST|21|150|ESP` },
    { id: 'oviedo', name: 'Реал Овьедо', city: 'Овьедо', stadium: 'Estadio Municipal Carlos Tartiere', cap: 30500, colors: ['#0055a4', '#ffffff'], players: `
Miguel Narváez|GK|24|150|ESP
Aarón Escandell|GK|31|2065|ESP
Samu Franganillo|GK|23|150|ESP
Aisar Ahmed|RB|25|792|ESP
Juan Cruz|LB|34|907|ESP
David Costas|CB|31|981|ESP
Dani Calvo|CB|32|575|ESP
Samu Rodríguez|LB|21|528|ESP
David Jiménez|RB|22|2778|ESP
Nacho Vidal|RB|31|777|ESP
Carlos Domínguez|CB|25|1633|ESP
Marco Esteban|CB|20|609|ESP
Youness Lachhab|CM|27|665|MAR
Dani Villahermosa|CM|25|1320|ESP
Mikel Goti|AM|24|1039|ESP
Alberto Reina|AM|29|1271|ESP
Aritz Aldasoro|DM|27|1109|ESP
Estanis Pedrola|LW|23|1086|ESP
Ilyas Chaira|LW|25|2851|MAR
Christopher Ramos|ST|29|1733|ESP
Jacobo González|LW|29|980|ESP
Carlos Fernández|ST|30|1040|ESP
Victor Mingo|ST|23|472|ESP
Brandon Dominguès|AM|26|502|FRA
Pablo Sáenz|RW|25|867|ESP
Alexandru Ișfan|ST|26|960|ROU
José Luis Morales|ST|39|282|ESP
Enzo Perez|ST|17|150|ESP` },
    { id: 'sabadell', name: 'Сабадель', city: 'Сабадель', stadium: 'Estadi Municipal de la Nova Creu Alta', cap: 11908, colors: ['#0055a4', '#ffffff'], players: `
Diego Fuoli|GK|29|277|ESP
Jose Ortega|GK|34|104|ESP
Marc Vidal|GK|26|320|ESP
Manel Estevez|GK|19|150|ESP
Carlos Aleman|CB|22|150|ESP
Genar Fornés|CB|26|245|ESP
Hudson Davis|CB|20|321|USA
Pipa|LW|28|283|ESP
Miquel Codina|LB|24|150|ESP
Arthur|CB|30|150|BRA
Edgar González|CB|29|630|ESP
Óscar Sanz|CB|26|351|ESP
Kaiser|CB|30|104|ESP
Eneko Aguilar|LB|26|252|ESP
José Luis Català|CB|22|383|ESP
Xavi Moreno|LW|21|507|ESP
Lluis Estebe|CM|21|150|ESP
Ton Ripoll|RB|28|173|ESP
Pere Pons|CM|33|260|ESP
Javi López-Pinto|RW|25|311|ESP
Yussif Owusu|DM|20|150|GHA
Yanis Rahmani|ST|31|211|FRA
Albert Orriols|CM|28|150|ESP
Quadri Liameed|CM|24|591|NGA
Patrick Nuamah|AM|20|1815|ITA
Peque|RW|26|150|ESP
Николай Оболский|ST|29|205|RUS
Ángel Baena|RW|26|299|ESP
Gastón Vallés|ST|25|398|URU
Nicholas Gioacchini|ST|26|361|USA
Alain Ribeiro|ST|29|225|ESP
Joel Priego|ST|27|387|ESP
Quim Utges|ST|21|270|ESP` },
    { id: 'cordoba', name: 'Кордова', city: 'Кордова', stadium: 'Estadio Bahrain Victorious Nuevo Arcángel de Córdoba', cap: 21822, colors: ['#00a650', '#ffffff'], players: `
Iker Álvarez|GK|25|957|AND
Guilherme Fernandes|GK|25|789|POR
Dani Tasende|LB|26|563|ESP
Álex Martin|CB|28|431|ESP
Juan Gutiérrez|CB|26|904|ESP
Franck Fomeyem|CB|27|324|CMR
Rubén Alves|CB|32|370|ESP
Nélson Monte|CB|31|453|POR
Carlos Albarrán|RB|32|238|ESP
Egoitz Muñoz|RB|22|412|ESP
Daniel Budesca|RB|20|1136|ESP
Dani García|CB|22|150|ESP
Damián Cáceres|CM|23|404|ESP
Théo Zidane|CM|24|347|FRA
Ismael Ruiz|CM|25|1360|ESP
Adnane Ghailan|CM|26|150|ESP
Adilson|LW|29|281|POR
Youssouf Diarra|CM|28|150|MLI
Eder García|CM|22|150|ESP
Jacobo Marti|ST|22|479|ESP
Percan|ST|24|295|ESP
Kevin Medina|LW|25|478|ESP
Diego Bri|LW|24|581|ESP
Victor Sanchez|ST|24|150|ESP
Enol Rodríguez|ST|25|820|ESP
Ibai Sanz|ST|23|400|ESP
Cristian Carracedo|RW|30|752|ESP
Salim El Jebari|LW|22|454|ESP` },
    { id: 'eldense', name: 'Эльденсе', city: 'Эльда', stadium: 'Estadio Municipal Nuevo Pepico Amat', cap: 5776, colors: ['#e30613', '#0055a4'], players: `
Ramón Vilà|GK|24|511|ESP
Juanpa Palomares|GK|26|320|ESP
David Bernabeu|GK|21|150|ESP
Iker Recio|CB|25|927|ESP
Juan Larios|LB|22|930|ESP
Floris Smand|CB|23|626|NED
Álex Serra|CB|24|349|ESP
Jesús Clemente|RB|26|281|ESP
Alejandro Ibarrondo|RB|25|150|ESP
David Ruiz|LB|23|254|ESP
Julien Yanda|CB|19|150|GER
Iker Carbonell|CB|22|150|ESP
Antonio David|CB|20|150|ESP
Alejandro Iniesta|CB|22|150|ESP
Javier Olaizola|CB|19|150|ESP
Borja Calvo|CM|24|421|ESP
Marcos Bustillo|AM|25|259|ESP
Roberto López|CM|26|150|ESP
Justin Smith|DM|23|150|CAN
Carlos Guirao|DM|23|413|ESP
Guille Macho|DM|23|462|ESP
Javi Martínez|AM|26|702|ESP
Cristian Amarillo|CM|21|150|ESP
David Rodriguez|CM|21|150|ESP
Jorge Rastrojo|ST|26|150|ESP
Mariano Carmona|ST|25|470|ESP
Fidel Chaves|RW|36|313|ESP
Manu Nieto|ST|28|557|ESP
Pau Cabanes|LW|21|1018|ESP
Waldo Rubio|LW|31|172|ESP
Jordi Martín|LW|25|388|ESP
Dinis Rodrigues|ST|21|221|POR
Aingeru Olabarrieta|LW|20|970|ESP` },
    { id: 'tenerife', name: 'Тенерифе', city: 'Санта-Крус-де-Тенерифе', stadium: 'Estadio Heliodoro Rodríguez Lopéz', cap: 22824, colors: ['#ffffff', '#0055a4'], players: `
Dani Martín|GK|28|554|ESP
Gabriel Lozano|GK|22|150|ESP
David Rodríguez|LB|26|576|ESP
Roko Jureškin|LB|26|257|CRO
José Leon|CB|31|193|ESP
Jorge Moreno|CB|25|521|ESP
Anthony Landázuri|CB|29|283|ECU
César Álvarez|RB|23|592|ESP
Marc Mateu|LW|36|163|ESP
Neal Viereck|CB|22|288|NED
Juanjo|CM|26|455|ESP
Nacho Gil|LW|31|213|ESP
Gerard Valentín|RW|33|233|ESP
Fabricio|CM|28|341|BRA
Jesús Álvarez|DM|26|774|ESP
Mauro Pittón|CM|32|1506|ARG
Anes Krdžalić|CM|22|251|BIH
Iván Chapela|RW|27|446|ESP
Dani Fernández|RW|18|150|ESP
Alassán Manjam|LW|24|304|ESP
Martin Pečar|ST|24|621|SVN
Víctor Moreno|LW|21|757|ESP
Jesús de Miguel|ST|30|510|ESP
Noel López|RW|23|291|ESP
Christian Gomis|ST|26|751|SEN
Enric Gallego|ST|40|315|ESP
Грант-леон Ранос|ST|23|668|ARM
Baba Diocou|LW|21|150|ESP` },
    { id: 'valladolid', name: 'Вальядолид', city: 'Вальядолид', stadium: 'Estadio Municipal José Zorrilla', cap: 27618, colors: ['#5b2b82', '#ffffff'], players: `
Álvaro Aceves|GK|23|537|ESP
Dani Martín|GK|21|761|ESP
Lucas Lavagnino|GK|22|150|ARG
Hugo Wauthier|GK|19|150|ESP
Trilli|RB|23|321|ESP
Guille Bueno|LB|24|1260|ESP
Homam Elamin|LB|27|252|QAT
David Torres|CB|23|1990|ESP
Ramón Martínez|CB|24|1045|ESP
Miguel Rubio|CB|28|1137|ESP
Dani Martín|LB|29|162|ESP
Iván Alejo|RB|31|422|ESP
Pablo Tomeo|CB|26|907|ESP
Carlos Clerc|LB|34|190|ESP
Iván Garriel|LB|21|455|ESP
Ryotaro Ito|AM|28|2219|JPN
Mathis Lachuer|CM|26|937|FRA
Thiago Ojeda|DM|23|608|ARG
Álex Balboa|CM|25|365|EQG
Julien Ponceau|DM|25|1637|FRA
Stanko Jurić|DM|30|624|CRO
Dani Pérez|DM|21|150|ESP
Víctor Fernández|AM|18|747|ESP
Marcos Parriego|CM|20|150|ESP
Luis Chacón|ST|26|1112|ESP
Juanmi Latasa|ST|25|1486|ESP
Yeray Cabanzón|RW|23|663|ESP
Víctor Barberà|ST|22|535|ESP
Adrián Arnuncio|ST|19|150|ESP
Robin van Duiven|ST|20|1127|NED
Kaj de Rooij|LW|25|1007|NED
Tay Abed|RW|22|1225|ISR
Brain Obosso|ST|21|150|NGA
Hugo Calvo|ST|19|150|ESP` },
    { id: 'celta_b', name: 'Сельта Фортуна', city: 'Виго', stadium: 'Estadio Abanca-Balaídos', cap: 24870, colors: ['#8ac3ee', '#ffffff'], reserveOf: 'celta', players: `
Coke Carrillo|GK|24|150|ESP
Caio Barone|GK|20|150|BRA
Marcos González|GK|20|150|ESP
Kike Ribes|CB|22|490|ESP
Seyni Ndiaye|CB|21|427|SEN
Pablo Meixus|CB|23|518|ESP
Jan Oliveras|LW|22|463|ESP
Anxo Rodriguez|CB|19|1069|ESP
Alexis Olmedo|CB|20|584|ESP
Raul Chirveches|CB|18|150|ESP
Anthony Khayat|CB|19|150|UAE
David Sueiro|CB|16|150|ESP
Pablo Gavian|RW|20|150|ESP
Hugo Burcio|CM|19|1073|ESP
Adria Capdevila|CM|22|535|ESP
Hugo Cuenca|CM|21|417|PAR
Joel López|LW|24|406|ESP
Stefan Bajčetić|CM|22|5842|ESP
Germain Milla|RW|20|785|CMR
Noah Rodriguez|CM|18|150|ESP
Mateo Sobral|CM|17|150|ESP
Hugo Lopez|CM|17|150|ESP
Bernard Somuah|ST|20|697|GHA
Andrés Antañón|RW|19|771|ESP
Álvaro Marin|ST|23|483|ESP
Oscar Marcos|RW|20|817|ESP
Ángel Arcos|LW|20|708|ESP
Aldrine Kibet|RW|19|716|KEN
Angel Davila|ST|19|150|ESP
Jorge Perez-Lafuente|ST|18|150|ESP
Vladimir Silva|RW|17|150|GNB` },
    { id: 'leganes', name: 'Леганес', city: 'Леганес', stadium: 'Estadio Ontime Butarque', cap: 14436, colors: ['#0055a4', '#ffffff'], players: `
Raul Fernández|GK|38|283|ESP
Luca Zidane|GK|28|749|ALG
Ale Gorrín|GK|24|150|ESP
Marvel|CB|23|1101|MAR
Francisco Montero|CB|27|566|ESP
Rubén Pulido|CB|26|350|ESP
Ignasi Miquel|CB|34|263|ESP
Lalo Aguilar|CB|24|1131|ESP
Rubén Pena|RB|35|194|ESP
Enric Franquesa|LB|29|503|ESP
Álvaro Tejero|RB|30|1156|ESP
Álex Fita|LB|19|150|ESP
Marcos Leiva|RB|21|498|ESP
Sulaiman Mulumba|CB|20|150|UGA
Yassine Kechta|CM|24|4115|MAR
Zico Buurmeester|DM|24|1274|NED
Naim García|LW|24|515|ESP
Dani Rodríguez|LW|38|185|ESP
Ismaël Gharbi|AM|22|6217|TUN
Miguel Atienza|CM|27|1128|ESP
Álex Sancris|LW|29|1137|ESP
Amadou Diawara|CM|29|409|GUI
Jorge Herrero|CM|21|150|ESP
Jorge Martinez|CM|19|150|ESP
Álex Millán|ST|26|150|ESP
Unax del Cura|ST|21|644|ESP
Andrés Campos|DM|24|259|ESP
Patrick Soko|ST|28|964|CMR
Álvaro Morata|ST|34|4297|ESP
Suleiman El Haddadi|ST|20|150|MAR` },
    { id: 'las_palmas', name: 'Лас-Пальмас', city: 'Лас-Пальмас', stadium: 'Estadio de Gran Canaria', cap: 32392, colors: ['#ffd700', '#0055a4'], players: `
José Antonio Caro|GK|32|312|ESP
Adri Suárez|GK|21|150|ESP
Jorge Valverde|GK|19|150|ESP
Eduard Mohedano|GK|22|150|ESP
Marvin Park|RB|26|1037|ESP
Nicholas Opoku|CB|29|1158|GHA
Alex Suárez|CB|33|418|ESP
Enrique Clemente|LB|27|1244|ESP
Juanma Herzog|CB|22|1598|ESP
Viti|RB|29|856|ESP
Giovanni Bonfanti|CB|23|3670|ITA
Andrés Rodríguez|LB|24|150|ESP
Valentín Pezzolesi|RB|19|856|ARG
Aidan Perez|CB|21|150|ESP
Rachid Saiah|CB|20|150|MAR
Adrian Rodriguez|LB|21|150|ESP
Adrián Vázquez|LB|22|174|ESP
Edward Cedeño|CM|23|496|PAN
Inaki González|CM|22|417|ESP
Sergio Ruiz|CM|31|649|ESP
Jeremía Recoba|ST|23|1101|URU
Taisei Miyashiro|RW|26|1872|JPN
Enzo Loiodice|CM|25|1145|FRA
Manu Fuster|ST|29|1635|ESP
Mateo Aćimović|RW|19|414|SVN
Kirian Rodríguez|CM|30|797|ESP
Ale García|LW|23|1519|ESP
Iván Jaime|LW|26|2528|ESP
Aimar Dominguez|CM|19|150|ESP
Jefté Betancor|ST|33|586|ESP
Jesé|ST|33|464|ESP
Sandro Ramírez|LW|31|242|ESP
Aboubacar Bassinga|RW|21|472|BFA
Adam Arvelo|RW|21|150|ESP
Elías Romero|ST|22|150|ESP
Iván Medina|ST|22|368|ESP
Rafa Cruz|ST|17|150|ESP
Jorge Cruz|ST|17|150|ESP` },
    { id: 'andorra', name: 'Андорра', city: 'Андорра-ла-Велья', stadium: 'Estadi de la FAF d\'Encamp', cap: 5500, colors: ['#0055a4', '#ffd700'], players: `
Nico Ratti|GK|33|274|ARG
Pau López|GK|31|1599|ESP
Jesús Owono|GK|25|943|EQG
Jan Lagunas|GK|19|150|ESP
Javier Vicario|CB|24|215|ESP
Juan Sebastián|RB|24|343|ESP
Lautaro Spatz|CB|25|161|ARG
Gael Alonso|CB|24|1059|ESP
Bomba|CB|20|754|ESP
Alex Calvo|LB|22|440|ESP
Thomas Carrique|RB|27|549|FRA
Andoni López|LB|30|216|ESP
Martí Vilà|LB|27|270|ESP
Diego Alende|CB|29|272|ESP
Hugo Solozábal|CM|23|406|ESP
Efe Akman|CM|20|1384|TUR
Julian Rijkhoff|AM|21|1134|NED
Marc Domènech|CM|23|691|ESP
Sergio Molina|CM|30|449|ESP
Randy Schneider|LW|25|485|PHI
Théo Le Normand|AM|26|259|FRA
Tiago Olmedo|CM|18|150|ESP
Саба Самушиа|ST|19|373|GEO
Lautaro de León|ST|25|1142|URU
Enes Sali|LW|20|994|ROU
Jordi Cano|RW|31|510|ESP
Nacho Quintana|ST|25|426|ESP
Moró Sidibe|LW|24|271|ESP
Diego Díaz|RW|21|150|ESP
Stefan Golubovic|ST|20|341|SRB
Hugo López|ST|19|1609|ESP` },
    { id: 'real_sociedad_b', name: 'Реал Сосьедад Б', city: 'Сан-Себастьян', stadium: 'Estadio Izan', cap: 4000, colors: ['#0067b1', '#ffffff'], reserveOf: 'real_sociedad', players: `
Aitor Fraga|GK|23|1324|ESP
Theo Folgado|GK|21|240|ESP
Lander Olasagasti|GK|22|174|ESP
Daniel Galilea|GK|18|150|ESP
Jon Garro|RB|21|150|ESP
Jon Balda|LB|24|1122|ESP
Kazunari Kita|CB|21|1883|JPN
Iker Calderón|CB|20|462|ESP
Inaki Rupérez|RB|23|372|ESP
Unax Agote|LB|23|280|ESP
Unax Ayo|CB|20|577|ESP
Benat Isasa|CB|17|150|ESP
Eneko Astigarraga|CB|22|197|ESP
Iker Ropero|CB|20|442|ESP
Peru Larranaga|CB|17|150|ESP
Alex Lebarbier|CM|22|599|FRA
Ibai Aguirre|DM|19|1863|ESP
Joan Oleaga|DM|20|381|ESP
Tomy Carbonell|CM|21|1596|ESP
Gorka Gorosabel|AM|20|1663|ESP
Lander Astiazarán|RW|20|150|ESP
Jon Eceizabarrena|AM|21|306|ESP
Oihan Telletxea|CM|17|150|ESP
Dani Díaz|RW|20|2228|ESP
Ekain Orobengoa|LW|22|368|ESP
Arkaitz Mariezkurrena|ST|21|1488|ESP
Gorka Carrera|ST|21|3415|ESP
Javier Soroeta|ST|21|352|ESP
Sydney Osazuwa|LW|19|150|ESP
Andrews Adjabeng|ST|20|150|GHA
Hodei Garitaonaindia|ST|18|150|ESP
Xuban Fernandez|ST|18|150|ESP` },
    { id: 'cadiz', name: 'Кадис', city: 'Кадис', stadium: 'JP Financial Estadio', cap: 22000, colors: ['#ffd700', '#0055a4'], players: `
David Gil|GK|32|185|ESP
Jokin Ezkieta|GK|30|1610|ESP
Rubén Domínguez|GK|21|267|ESP
Benat de Jesus|RB|24|354|ESP
Sergio Arribas|LB|23|416|ESP
Javi Castro|CB|26|1383|ESP
Manu Fernández|CB|25|1240|ESP
Bojan Kovačević|CB|22|1781|SRB
Kenan Toibibou|CB|21|623|COM
Cristian Gutiérrez|LB|25|738|ESP
Juan Díaz|RB|20|534|ESP
Cesar Diaz|CB|18|150|ESP
Noah Obioma|CB|18|757|FRA
Roberto Rosado|CB|18|150|ESP
Manuel Rivera|LB|17|150|ESP
David García|CM|23|238|ESP
Marc-Olivier Doué|DM|26|258|FRA
Suso|AM|32|471|ESP
Гиорги Гочолеишвили|RW|25|1665|GEO
Aïmen Moueffek|CM|25|1604|FRA
Jandro Orellana|CM|26|660|ESP
Damián Rodríguez|DM|23|1986|ESP
Dilan Zárate|CM|19|150|COL
Francisco Mwepu|ST|26|268|ZAM
Efe Aghama|LW|22|596|NGA
Álvaro Pascual|ST|24|1290|ESP
Javi Ontiveros|LW|29|656|ESP
Иури Табатадзе|RW|26|964|GEO
Antoñito Cordero|LW|19|2213|ESP
Urko Izeta|ST|27|1234|ESP
Borja Vázquez|RW|21|504|ESP
Владыслав Копотун|ST|26|450|UKR
Ibon Sánchez|AM|22|150|ESP
Gonzalo Petit|ST|20|6896|URU` },
    { id: 'ceuta', name: 'Сеута', city: 'Сеута', stadium: 'Estadio Municipal Alfonso Murube', cap: 7000, colors: ['#ffffff', '#000000'], players: `
Ayoub Akabou|GK|19|150|FRA
Pedro López|GK|31|312|ESP
Guillermo Vallejo|GK|31|250|ESP
Toni Abad|RB|29|193|ESP
José Matos|LB|31|303|ESP
Albert Caparrós|CB|28|233|ESP
Adrián Lapeña|CB|30|400|ESP
Carlos Hernández|CB|36|256|ESP
Carlos Redruello|LB|29|150|ESP
Álex Petxa|RB|29|413|ESP
Anuar|RB|31|284|MAR
Dani Mas|CB|21|150|ESP
Josemi Gomez|CB|18|150|ESP
Jamelli|CM|33|189|ESP
Kuki Zalazar|CM|28|338|ESP
Marino Illescas|CM|25|274|ESP
Yann Bodiger|CM|31|261|FRA
Joaquín|DM|26|150|ESP
Mawuli Mensah|DM|22|247|GHA
Alejandro Meléndez|CM|27|550|ESP
José Campana|CM|33|153|ESP
Víctor Corral|CM|24|268|ESP
Abraham Bueno|CM|20|150|ESP
Adrian Romero|CM|20|150|ESP
Chidiebere Okoro|CM|19|150|NGA
Josema|CM|23|150|ESP
Manu Vallejo|LW|29|156|ESP
Álex Camacho|LW|28|425|ESP
Jordi Escobar|ST|24|290|ESP
Cedric Teguia|RW|25|760|ESP
Adri Rueda|ST|22|150|ESP
Эдгар Севикян|RW|25|934|ARM
Kenneth Obinna Mamah|RW|28|500|NGA
Kialy Abdoul Koné|LW|29|739|CIV
Salvi Sánchez|RW|35|202|ESP
Arick Betancourt|LW|22|150|ESP
Umaru Konare|ST|22|195|ESP
Omar Sadik|ST|22|1131|MAR` },
    { id: 'albacete', name: 'Альбасете', city: 'Альбасете', stadium: 'Estadio Carlos Belmonte', cap: 17524, colors: ['#ffffff', '#e30613'], players: `
Carlos Marín|GK|29|443|ESP
Diego Mariño|GK|36|182|ESP
Mario Ramos|GK|22|150|ESP
Lorenzo Aguado|RB|24|632|ESP
Javi Moreno|CB|26|254|ESP
Fran Gámez|RB|35|244|ESP
Carlos Neva|CB|30|630|ESP
Lluís López|CB|29|233|ESP
Pepe Sánchez|CB|26|334|ESP
Jesús Vallejo|CB|29|907|ESP
Daniel Bernabéu|LB|19|822|ESP
Antonio Velilla|CB|19|150|ESP
Vicente Vidal|CB|22|150|ESP
Jota|CB|20|150|ESP
Alonso Chillerón|CM|22|150|ESP
Hugo Busto|CM|20|150|ESP
Antonio Pacheco|CM|24|693|ESP
Javi Villar|CM|23|417|ESP
Roberto González|AM|25|667|ESP
Víctor Valverde|LW|24|530|ESP
Victor San Bartolomé|CM|26|364|ESP
Munir El Haddadi|AM|31|1098|MAR
Sergio Ortuño|CM|27|997|ESP
Capi|CM|20|528|ESP
Agustín Albarracín|RW|21|1988|URU
Diego Rodriguez|CM|20|150|ESP
Antonio David|DM|21|150|ESP
Alberto Morientes|ST|19|150|ESP
Fran Gómez|ST|21|150|ESP
Agus Medina|ST|32|787|ESP
Antonio Puertas|ST|34|271|ESP
Mario Soberón|ST|29|748|ESP
Higinio Marín|ST|33|198|ESP
José Corpas|LW|35|459|ESP
Álex Rubio|ST|24|991|ESP
Samuel Obeng|ST|29|315|GHA
Tomas Ingles|ST|22|150|ESP
Fabio Garcia|ST|18|150|ESP` },
  ],
});
