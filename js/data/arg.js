// Аргентинская Примера 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'arg', name: 'Аргентинская Примера', short: 'Аргентина', country: 'ARG', tier: 1, weekday: 0, single: true,
  autumn: { from: '08-01', rounds: 14 }, spring: { from: '02-06', rounds: 13 },
  ticket: 6, prize: [5000, 4900, 4750, 4650, 4500, 4400, 4300, 4150, 4050, 3900, 3800, 3650, 3550, 3450, 3300, 3200, 3050, 2950, 2850, 2700, 2600, 2450, 2350, 2200, 2100, 2000, 1850, 1750, 1600, 1500],
  teams: [
    { id: 'instituto', name: 'Институто', city: 'Кордова', stadium: 'Estadio Juan Domingo Perón', cap: 26535, colors: ['#e30613', '#ffffff'], players: `
Marcos Ledesma|GK|30|860|ARG
Emanuel Sittaro|GK|27|527|ARG
Hernán de la Fuente|RB|29|246|ARG
Fernando Alarcón|CB|32|863|ARG
Agustín Massaccesi|CB|24|347|ARG
Andrés Meli|LW|26|553|ARG
Leonel Mosevich|CB|29|817|ARG
Jonathan Galván|CB|34|542|ARG
Agustín Bravo|CB|25|420|ARG
Iván Erquiaga|LB|27|149|ARG
Genaro Ordóñez|CB|19|300|ARG
Lucas Olivera|CB|18|300|ARG
Ignacio Rossi|CM|23|300|ARG
Diego Sosa|LW|29|560|ARG
Franco Moyano|DM|29|608|ARG
Jonás Acevedo|RW|29|282|ARG
Juan Ignacio Méndez|DM|29|438|ARG
Wílder Viera|CM|24|934|PAR
Matías Gallardo|CM|22|623|ARG
Augusto Coronel|CM|18|300|ARG
Giuliano Cerato|RW|28|1213|ARG
Gustavo Abregú|CM|29|395|ARG
Joaquín Medina|CM|21|300|ARG
Pedro Baster|CM|19|300|ARG
Nicolás Guerra|ST|27|342|CHI
Facundo Suárez|ST|32|273|ARG
Alex Luna|LW|22|4929|ARG
Matías Fonseca|ST|25|525|URU
Matías Tissera|ST|30|377|ARG
Lucas Sanseviero|RW|26|737|URU
Jhon Córdoba|RW|26|1116|COL
Jeremías Lázaro|AM|22|748|ARG
Lorenzo Albarracín|ST|19|742|ARG
Luca Rafaelli|AM|18|300|ARG` },
    { id: 'boca', name: 'Бока Хуниорс', city: 'Буэнос-Айрес', stadium: 'Estadio Alberto José Armando', cap: 57200, colors: ['#003d8f', '#ffd100'], players: `
Álvaro Montero|GK|31|1937|COL
Leandro Brey|GK|24|1527|ARG
Agustín Marchesín|GK|38|564|ARG
Javier García|GK|39|352|ARG
Lautaro Di Lollo|CB|22|9524|ARG
Lautaro Blanco|LB|27|3656|ARG
Nicolás Figal|CB|32|440|ARG
Leandro Lozano|RB|27|3058|URU
Marco Pellegrino|CB|24|4211|ARG
Malcom Braida|LB|29|1635|ARG
Ayrton Costa|CB|27|5476|ARG
Facundo Herrera|CB|20|300|ARG
Matías Satas|CB|18|300|ARG
Dylan Gorosito|RB|20|405|ARG
Gadiel Paoli|CB|21|300|PAR
Leandro Paredes|CM|32|3867|ARG
Rodrigo Battaglia|CM|35|624|ARG
Carlos Palacios|RW|26|2162|CHI
Tomás Belmonte|CM|28|2019|ARG
Williams Alarcón|DM|25|2139|CHI
Milton Delgado|CM|21|13288|ARG
Santiago Ascacíbar|CM|29|4364|ARG
Tomás Aranda|LW|19|3301|ARG
Camilo Rey Domenech|CM|20|892|ARG
Milton Giménez|ST|30|1756|ARG
Enner Valencia|ST|36|1054|ECU
Miguel Merentiel|ST|30|2654|URU
Alan Velasco|LW|24|2101|ARG
Sebastián Villa|ST|30|4578|COL
Adam Bareiro|ST|30|2389|PAR
Ángel Romero|RW|34|337|PAR
Lautaro Bianco|LB|19|300|ARG
Leonel Flores|RW|19|300|ARG
Rodrigo Bacidalupe|ST|19|300|ARG
Miguel Ventos|ST|21|300|ARG
Joaquín Piñeyro|ST|18|300|ARG
Juan Pussetto|ST|18|300|ARG
Joaquín Ruíz|ST|20|300|ARG
Kevin Ferreira|ST|18|300|ARG` },
    { id: 'defensa', name: 'Дефенса и Хустисия', city: 'Флоренсио-Варела', stadium: 'Estadio Norberto Tito Tomaghello', cap: 20000, colors: ['#00a650', '#ffd700'], players: `
Matías Borgogno|GK|28|1718|ARG
Lautaro Amadé|GK|26|291|ARG
Demián Domínguez|LB|20|300|ARG
Samuel Lucero|LB|21|869|ARG
Fernando Román|LB|27|788|PAR
Ezequiel Burdín|CB|22|926|URU
Mateo López|CB|18|300|ARG
David Martínez|CB|28|668|PAR
Valentín Loza|RB|19|300|ARG
Damián Fernández|CB|25|1577|ARG
Nazareno Roselli|RB|20|582|ARG
Lucas Souto|CB|28|427|ARG
Máximo Rodríguez|LB|21|300|ARG
Nicolás Palavecino|LW|23|559|ARG
César Pérez|DM|23|2221|CHI
Aarón Molinas|DM|26|2461|ARG
Éver Banega|DM|38|246|ARG
Santiago Sosa|DM|21|2254|ARG
Ayrton Portillo|RB|26|994|ARG
David Barbona|AM|31|277|ARG
Maximiliano Porcel|AM|20|755|ARG
Mateo Aguiar|CM|19|855|ARG
Domingo Blanco|LW|31|625|ARG
Jonás Cabrera|CM|18|300|ARG
Thiago Martínez|CM|19|300|ARG
Julián López|DM|26|466|ARG
Tomás Pérez|ST|20|507|ARG
Leandro Fernández|ST|35|457|ARG
Tiziano Perrotta|ST|19|2489|ARG
Agustín Hausch|RW|23|626|ARG
Juan Gutiérrez|LW|24|1887|URU
Facundo Altamira|ST|25|951|ARG
Jeremías Lucco|RW|20|829|ARG
Alan Coria|LW|19|746|ARG
Ramiro Gagliardi|ST|20|300|ARG
Emiliano Cantero|ST|18|300|PAR` },
    { id: 'velez', name: 'Велес Сарсфилд', city: 'Буэнос-Айрес', stadium: 'Estadio José Amalfitani', cap: 49747, colors: ['#ffffff', '#0055a4'], players: `
Tomás Marchiori|GK|31|1482|ARG
Facundo Sanguinetti|GK|25|2152|ARG
Franco Villalba|GK|20|300|ARG
Álvaro Busso|GK|20|300|ARG
Agustín Cortez|GK|19|300|ARG
Emanuel Mammana|CB|30|1763|ARG
Elías Gómez|LB|32|1148|ARG
Joaquín García|RB|25|2468|ARG
Lisandro Magallán|CB|33|1128|ARG
Leo Cristaldo|CB|17|300|PAR
Jano Gordon|RB|22|1603|ARG
Thiago Silvero|CB|20|1182|ARG
Ulises Piedrabuena|CB|18|300|ARG
Alexis Pereyra|CB|19|300|ARG
Claudio Baeza|DM|32|1134|CHI
Lucas Robertone|DM|29|1423|ARG
Diego Valdés|AM|32|1706|CHI
Manuel Lanzini|AM|33|534|ARG
Rodrigo Aliendro|DM|35|579|ARG
Thiago Villalba|CM|19|300|ARG
Luca Feler|DM|18|868|ARG
Matías Pellegrini|RW|26|1020|ARG
Dilan Godoy|ST|20|1415|ARG
Álex Verón|LW|18|1018|ARG
Simón Escobar|LW|17|300|ARG
Simon Prima|ST|18|300|ARG
Lautaro Piola|ST|18|300|ARG
Matías Arias|LW|19|889|ARG
Juan Cruz Policella|LW|17|300|ARG
Thiago Aguirre|RW|17|300|ARG
Ronaldo Martínez|ST|30|2408|PAR` },
    { id: 'lanus', name: 'Ланус', city: 'Ланус', stadium: 'Estadio Ciudad de Lanús - Néstor Díaz Pérez', cap: 46619, colors: ['#800020', '#ffffff'], players: `
Franco Petroli|GK|28|1329|ARG
Evaristo Dieguiz|GK|20|300|ARG
Nahuel Losada|GK|33|2108|ARG
Martín Díaz|GK|19|300|ARG
Tomás Silva|GK|19|300|ARG
Luciano Romero|LB|20|622|ARG
Nicolás Morgantini|RB|32|437|ARG
Gonzalo Pérez|RB|25|1237|URU
Sasha Marcich|LB|28|2202|ARG
José Canale|CB|30|1285|PAR
Carlos Izquierdoz|CB|37|744|ARG
Octavio Ontívero|LB|20|300|ARG
Tomás Guidara|RB|30|987|ARG
Elian Acosta|CB|19|300|ARG
Ronaldo Dejesús|CB|25|1153|PAR
Tomás López|CB|19|300|ARG
Sebastián Leiva|CB|20|300|ARG
Mateo Ramírez|CB|19|300|ARG
Elías Prieto|CB|19|300|ARG
Gabriel Aguirre|CB|19|300|ARG
Thiago Mejías|CM|18|300|ARG
Felipe Peña Biafore|DM|25|1427|ARG
Franco Watson|AM|24|670|ARG
Marcelino Moreno|AM|31|2283|ARG
Raúl Loaiza|DM|32|403|COL
Matías Sepúlveda|RW|27|897|CHI
Agustín Medina|DM|20|300|ARG
Facundo Sánchez|CM|21|643|ARG
Agustín Cardozo|DM|29|1830|ARG
Benjamín Acosta|RW|20|424|ARG
Thiago Laplace|CM|20|300|ARG
Juan Mujica|CM|19|300|ARG
Ian López|CM|19|300|ARG
Tiago Domínguez|CM|17|300|ARG
Eduardo Salvio|RW|36|866|ARG
Jeremías Chavero|ST|20|609|ARG
Yoshan Valois|ST|22|1545|COL
Allan Wlk|ST|23|880|PAR
Alexis Duarte|ST|19|300|PAR
Ramiro Carrera|LW|33|724|ARG
Dante Blanco|ST|18|300|ARG
Thiago Balbuena|ST|20|300|ARG
Gonzalo Lobos|LW|19|300|PAR
Mateo Peralta|ST|19|300|ARG
Lucas Besozzi|LW|23|771|ARG` },
    { id: 'newells', name: 'Ньюэллс Олд Бойз', city: 'Росарио', stadium: 'Estadio Marcelo Alberto Bielsa', cap: 42000, colors: ['#e30613', '#000000'], players: `
Gabriel Arias|GK|39|189|CHI
Josué Reinatti|GK|23|1184|ARG
Francisco Sciarini|GK|21|300|ARG
Ian Glavinovich|CB|24|842|ARG
Martín Luciano|LB|23|824|ARG
Alejo Montero|RB|28|501|ARG
Martín Ortega|RB|27|621|ARG
Lucas Carrizo|CB|29|987|ARG
Lautaro Giannetti|CB|32|865|ARG
Oscar Salomón|CB|27|1198|ARG
Nicolás Goitea|CB|29|300|ARG
Franco Escobar|RB|31|516|ARG
Bruno Cabrera|CB|29|557|ARG
Jerónimo Russo|LB|21|1237|ARG
Saúl Salcedo|CB|29|918|PAR
Fabricio Tirado|DM|22|561|ARG
Mateo García|LW|30|844|ARG
Luca Regiardo|DM|20|2473|ARG
David Sotelo|DM|23|596|ARG
Valentino Acuña|CM|20|1639|ARG
Alan Soñora|AM|28|245|USA
Jerónimo Gómez Mattar|DM|18|2285|ARG
Facundo Guch|AM|19|3339|ARG
Rodrigo Herrera|DM|26|1317|ARG
Lucas Gómez|CM|22|864|ARG
Marcelo Esponda|DM|23|399|ARG
Tomás Viola|CM|20|300|ARG
Blas Benedetto|CM|20|300|ARG
Mateo Villalba|CM|19|300|ARG
Walter Mazzantti|RW|30|1570|ARG
Matías Cóccaro|ST|28|1595|URU
Santiago Solari|RW|28|2124|ARG
Walter Núñez|LW|23|961|ARG
Francisco Scarpeccio|ST|20|626|ARG
Thomas Ríos|LW|20|300|ARG
Ignacio Ramírez|ST|29|1163|URU` },
    { id: 'gimnasia_mza', name: 'Химнасия Мендоса', city: 'Мендоса', stadium: 'Estadio Víctor Antonio Legrotaglie', cap: 11500, colors: ['#ffffff', '#000000'], players: `
César Rigamonti|GK|39|383|ARG
Lautaro Petruchi|GK|28|275|ARG
Diego Mondino|CB|31|293|ARG
Matías Recalde|LB|29|300|ARG
Ezequiel Muñoz|CB|36|475|ARG
Imanol González|CB|28|540|ARG
Germán Guiffrey|CB|28|451|ARG
Juan Franco|RB|34|299|PAR
Franco Saavedra|LB|23|300|ARG
Martín Úbeda|CB|22|300|ARG
Luciano Paredes|RB|24|662|ARG
Ismael Cortez|RB|26|524|ARG
Gerónimo Patritti|CB|23|300|ARG
Lautaro Carrera|CB|23|401|ARG
Nahuel Barboza|CM|27|315|ARG
Ulises Sánchez|CM|28|912|ARG
Julián Ceballos|RW|22|852|ARG
Tomás Ortiz|CM|26|321|ARG
Fermín Antonini|DM|29|277|ARG
Facundo Lencioni|LW|25|1773|ARG
Tomás O'Connor|DM|22|684|ARG
Esteban Fernández|AM|24|456|ARG
Luciano Cingolani|LW|25|436|ARG
Matías Vargas|ST|29|2561|ARG
Nicolás Romano|AM|26|462|ARG
Santiago Rodríguez|ST|29|432|ARG
Ignacio Sabatini|RW|27|501|ARG
Blas Armoa|ST|26|498|PAR
Agustín Módica|ST|23|1692|ITA
Brian Andrada|LW|29|286|ARG
Valentino Simoni|ST|22|829|ARG` },
    { id: 'independiente', name: 'Индепендьенте', city: 'Авельянеда', stadium: 'Estadio Libertadores de América', cap: 52364, colors: ['#e30613', '#ffffff'], players: `
Santiago Mele|GK|29|1396|URU
Joaquín Blázquez|GK|25|341|ARG
Rodrigo Rey|GK|35|963|ARG
Franco Calderón|CB|28|864|ARG
Joshua Velárdez|CB|20|300|PAR
Nahuel Banegas|LB|30|762|ARG
Ramiro Martino|LB|20|300|ARG
Jonathan De Irastorza|LB|21|487|ARG
Santiago Arias|RB|34|858|COL
Juan Fedorco|CB|25|693|ARG
Fernando Closter|CB|18|300|ARG
Facundo Zabala|LB|27|1373|ARG
Leonardo Godoy|RB|31|907|ARG
Gonzalo Bordón|CB|21|300|ARG
Juan Miguel Arrayago|CB|17|300|ARG
Sebastián Valdéz|CB|30|1173|ARG
Maximiliano Meza|CM|33|521|ARG
Luciano Cabral|AM|31|842|CHI
Lautaro Millán|AM|21|300|CHI
Mateo Pérez Curci|DM|20|1631|ARG
Facundo Cruz|CM|20|300|ARG
Iván Marcone|DM|36|488|ARG
Tomás Parmo|CM|18|300|ARG
David Martínez|DM|22|300|ARG
Joel Medina|CM|19|831|ARG
Chimy Ávila|ST|32|981|ARG
Iván Morales|ST|27|1080|CHI
Santiago Montiel|RW|25|2734|ARG
Imanol Machuca|LW|26|1733|MAS
Matías Abaldo|LW|22|6830|URU
Josias Palais|LW|20|300|ARG
Felipe Tempone|ST|20|300|ARG
Simón Bodnar|ST|19|300|HUN
Nahuel Junco|ST|21|300|ARG` },
    { id: 'san_lorenzo', name: 'Сан-Лоренсо', city: 'Буэнос-Айрес', stadium: 'Estadio Pedro Bidegaín', cap: 43494, colors: ['#0055a4', '#e30613'], players: `
Mateo Clemente|GK|24|529|ARG
Facundo Altamirano|GK|30|247|ARG
José Devecchi|GK|31|279|ARG
Danilo Arboleda|CB|31|446|COL
Teo Rodríguez Pagano|LB|21|904|ARG
Mathías de Ritis|LB|23|1080|URU
Guzmán Corujo|CB|30|260|URU
Emiliano Amor|CB|31|514|SYR
Gastón Hernández|CB|28|2464|ARG
Nahuel Arias|RB|21|438|ARG
Ezequiel Herrera|RB|23|2422|ARG
Maximo Atrio|CB|17|300|ARG
Alejo Córdoba|CB|22|300|ARG
Daniel Herrera|CB|22|788|ARG
Franco Lorenzón|CB|25|325|ARG
Ramiro Pedroza|CB|19|300|ARG
Nicolás Blanco|RB|19|300|ARG
Ignacio Zaballa|CM|20|300|ARG
Ignacio Perruzzi|DM|21|2468|ARG
Manuel Insaurralde|DM|27|603|ARG
Facundo Gulli|AM|21|3938|ARG
Juan Rattalino|DM|22|566|ARG
Mauricio Cardillo|RB|23|572|ARG
Juan Pablo Álvarez|RW|30|450|ARG
Nicolás Tripichio|DM|30|1604|ARG
Gonzalo Abrego|CM|26|910|ARG
Martín Río|CM|25|1324|ARG
Nahuel Barrios|AM|28|455|ARG
Facundo Farías|AM|24|2136|ARG
Gonzalo Alassia|CM|22|247|ARG
Ezequiel Cerutti|RW|34|292|ARG
Alexis Cuello|ST|26|4881|ARG
Agustín Ladstatter|LW|21|851|ARG
Diego Herazo|ST|30|307|COL
Gustavo del Prete|LW|30|678|ARG
Branco Salinardi|ST|19|645|ARG
Rodrigo Auzmendi|ST|25|2227|ARG
Uriel Ojeda|RW|18|300|ARG
Alan Salas|ST|20|300|ARG` },
    { id: 'estudiantes', name: 'Эстудиантес', city: 'Ла-Плата', stadium: 'Estadio Jorge Luis Hirschi', cap: 30018, colors: ['#e30613', '#ffffff'], players: `
Fabricio Iacovich|GK|24|679|ARG
Rodrigo Borzone|GK|22|300|ARG
Fernando Muslera|GK|40|686|URU
Tiziano Van Der Tuin|GK|20|300|ARG
Máximo Desábato|CB|21|300|ARG
Santiago Núñez|CB|26|1758|ARG
Marcos Rojo|CB|36|388|ARG
Gastón Benedetti|LB|25|1930|ARG
Leandro González Pírez|CB|34|413|ARG
Santiago Arzamendia|LB|28|1485|PAR
Eric Meza|RB|27|1829|ARG
Tomás Palacios|CB|23|7006|ARG
Ramiro Funes Mori|CB|35|317|ARG
Valente Pierani|CB|20|672|ARG
Joaquín Pereyra|LB|21|656|ARG
Matías Magdaleno|RB|19|300|ARG
Eros Mancuso|RB|27|2307|ARG
Jorge Georgieff|CB|19|300|ARG
Faustino Messina|CB|20|300|ARG
José Sosa|DM|41|298|ARG
Gabriel Neves|DM|29|946|URU
Ezequiel Piovi|DM|34|828|ARG
Alexis Castro|DM|32|620|ARG
Ciro Spalletta|CM|21|300|ARG
Baltasar Rodríguez|CM|23|4569|ARG
Miguel Monsalve|AM|22|4495|COL
Thiago González|CM|19|300|ARG
Franco Basualdo|CM|19|300|ARG
Jalil Elías|CM|30|970|SYR
Benjamín Maliani|CM|20|300|ARG
Axel Atum|LW|20|649|ARG
Agustín Traina|CM|19|300|ARG
Bautista Molinari|CM|20|300|ARG
Bautista Kociubinski|CM|25|330|ARG
Leandro Alcaraz|CM|17|300|ARG
Guido Carrillo|ST|35|489|ARG
Tiago Palacios|RW|25|2915|URU
Joaquín Tobio Burgos|LW|21|1390|ARG
Edwuin Cetré|LW|28|2350|COL
Adolfo Gaich|ST|27|985|ARG
Franco Domínguez|ST|19|860|ARG
Lucas Alario|ST|34|322|ARG
Brian Aguirre|LW|23|4227|ARG
Fabricio Pérez|RW|20|3024|ARG
Joaquín Correa|AM|32|1132|ARG
Benjamín Sagüés Barreiro|ST|19|300|ARG
Santino Crego|ST|18|300|ARG
Juan Fernández Soler|ST|20|300|ARG
Enzo Sanabria|ST|19|300|ARG
Francisco Silvetti|ST|18|300|ARG` },
    { id: 'union_sf', name: 'Унион Санта-Фе', city: 'Санта-Фе', stadium: 'Estadio 15 de Abril', cap: 27000, colors: ['#e30613', '#ffffff'], players: `
Matías Mansilla|GK|30|1393|ARG
Federico Gomes Gerth|GK|22|421|ARG
Lucas Meuli|GK|25|300|ARG
Agustín Chávez|GK|21|300|ARG
Matías Rocha|CB|25|369|URU
Bruno Pittón|LB|33|260|ARG
Juan Pintado|RB|29|638|URU
Lucas Ayala|LB|19|300|ARG
Juan Pablo Ludueña|CB|23|1300|ARG
Tobías Rubio|RB|22|857|ARG
Nazareno Fazzi|CB|19|300|ARG
Ignacio Isla|CB|20|300|ARG
Lautaro Vargas|RB|21|5387|ARG
Mateo Aimar|CB|20|300|ARG
Tomás Fagioli|CB|21|300|ARG
Eric Ramírez|ST|30|552|ARG
Ignacio Malcorra|AM|39|345|ARG
Mauro Luna Diale|LW|27|456|ARG
Lucas Menossi|CM|34|302|ARG
Franco Fragapane|LW|33|282|ARG
Lucas Cacciabue|CM|19|300|ARG
Joaquín Mosqueira|CM|21|1380|ARG
Julián Palacios|RW|27|300|ARG
Brahian Cuello|LW|29|388|ARG
Augusto Solari|RW|34|310|ARG
Santino Vera|CM|20|300|ARG
Mateo Peresutti|CM|19|300|ARG
Emilio Giaccone|CM|21|549|ARG
Santiago Grella|CM|21|593|ARG
José Vanetta|ST|24|300|ARG
Marcelo Estigarribia|ST|31|1109|ARG
Cristian Tarragona|ST|35|543|ARG
Misael Aguirre|ST|18|300|ARG
Valentín Cerrudo|ST|20|300|ARG
Ricardo Solbes|ST|20|392|ARG` },
    { id: 'platense', name: 'Платенсе', city: 'Висенте-Лопес', stadium: 'Estadio Ciudad de Vicente López', cap: 31030, colors: ['#ffffff', '#624839'], players: `
Brian Bustos|GK|30|300|ARG
Nicolás Sumavil|GK|26|288|ARG
Juan Pablo Cozzani|GK|28|2056|ARG
Joaquín Giudice|GK|20|300|ARG
Santino Cambiasso|GK|19|300|ARG
Tomás Silva|LB|23|2201|ARG
Agustín Lagos|RB|25|615|ARG
Eugenio Raggio|CB|25|719|ARG
Fabricio López|RB|23|582|ARG
Ignacio Vázquez|CB|29|1790|ARG
Juan Ignacio Saborido|RB|28|1294|ARG
Lucas Testa|CB|20|300|ARG
Víctor Cuesta|CB|37|399|ARG
Santiago Quirós|LB|23|672|ARG
Mateo Mendía|CB|22|574|ARG
Celías Ingenthron|LB|18|991|ARG
Thiago Currado|CB|19|300|ARG
Gonzalo Goñi|CB|28|424|ARG
Agustín Maglione|CB|20|300|ARG
Tomás Giménez|CB|19|300|ARG
Axel Guzmán|CB|20|300|ARG
Iván Gómez|DM|29|893|ARG
Maximiliano Amarfil|DM|25|1379|ARG
Felipe Bussio|DM|22|614|ARG
Bautista Merlini|AM|31|266|ARG
Héctor Bobadilla|AM|25|323|PAR
Martín Barrios|DM|27|473|URU
Pablo Ferreira|DM|22|927|ARG
Santiago Dalmasso|CM|22|558|ARG
Franco Minerva|LW|20|778|ARG
Demian Troya|CM|21|300|ARG
Agustín Funes|CM|22|300|ARG
Santiago Bouhet|CM|20|300|ARG
Salvador Rixner|CM|20|300|ARG
Guido Mainero|RW|31|1294|ARG
Tomás Nasif|ST|22|958|ARG
Franco Zapiola|LW|25|1441|ARG
Nicolás López|ST|33|652|URU
Gastón Togni|LW|29|1192|ARG
Luciano Giménez|ST|26|515|ARG
Augusto Lotti|ST|30|349|ARG
Leonardo Heredia|ST|30|1014|ARG
Manuel Tucker|RW|21|427|ARG
Juan Gauto|LW|22|1380|ARG
Nicolás Retamar|AM|27|747|ARG
Matías Ramírez|ST|19|300|ARG
Fausto San Pedro|ST|18|300|ARG
Alejandro Vera|ST|19|300|ARG
Bruno Sepúlveda|ST|34|317|ARG
Gonzalo Lencina|ST|29|592|ARG` },
    { id: 'riestra', name: 'Депортиво Риестра', city: 'Буэнос-Айрес', stadium: 'Estadio Guillermo Laza', cap: 3000, colors: ['#000000', '#ffffff'], players: `
Ignacio Arce|GK|34|792|ARG
Iván López|GK|30|300|ARG
Marino Arzamendia|GK|28|410|PAR
Carlos Quintana|CB|38|560|ARG
Eric Tovo|CB|34|293|ARG
Yeison Murillo|RB|32|300|COL
Pedro Ramírez|LB|26|1189|ARG
Ignacio Gariglio|CB|28|362|ARG
Rodrigo Gallo|LB|25|386|ARG
Nicolás Sansotre|RB|33|670|ARG
Manuel Aiello|CB|22|300|ARG
Juan Randazzo|CB|32|274|ARG
Cristian Paz|CB|31|671|ARG
Facundo Miño|CB|27|815|ARG
Ángel Stringa|RB|30|241|ARG
Mariano Bracamonte|RB|27|493|ARG
Antony Alonso|CM|28|1041|URU
Milton Céliz|CM|34|403|ARG
Braian Sánchez|CM|33|230|ARG
Pablo Monje|CM|29|642|ARG
Nicólas Watson|CM|28|306|ARG
Tomás González|RW|23|560|ARG
Yonatan Goitía|CM|32|395|ARG
Gabriel Obredor|CM|29|296|ARG
Benjamín Pérez|LW|20|300|ARG
Nicolás Benegas|ST|30|493|ARG
Alexander Díaz|ST|26|1117|ARG
Ángel Almada|ST|26|444|ARG
Thiago Lauro|RW|21|625|ARG
Agustín Graneros|ST|30|514|ARG
Mauro Smarra|ST|27|369|ARG
Lautaro Duarte|LW|21|300|ARG` },
    { id: 'central_cordoba', name: 'Сентраль Кордоба', city: 'Сантьяго-дель-Эстеро', stadium: 'Estadio Alfredo Terrera', cap: 16000, colors: ['#000000', '#ffffff'], players: `
Alan Aguerre|GK|36|398|ARG
Máximo Álvarez|GK|21|300|ARG
Javier Vallejos|GK|23|427|ARG
Alejandro Maciel|CB|29|679|ARG
Leonardo Marchi|LB|30|326|ARG
Facundo Mansilla|CB|27|364|ARG
José Gómez|RB|26|300|ARG
Yuri Casermeiro|CB|24|353|ARG
Felipe Aguilar|CB|33|465|COL
Darío Cáceres|LB|28|450|PAR
Agustín Romero|CB|19|300|ARG
Lucas Bernabéu|CB|22|524|ARG
Nicolás Garrido|CB|21|300|ARG
Santiago Moyano|RB|29|634|ARG
Tiziano Ramirez|CB|18|300|ARG
Juan Pablo Pignani|CB|25|564|ARG
Tiago Cravero|CM|24|534|ARG
Fernando Juárez|CM|28|578|ARG
Marco Iacobellis|AM|26|343|ARG
Horacio Tijanovich|LW|30|323|ARG
Lucas González|AM|26|1101|ARG
Fernando Martínez|RW|26|363|ARG
Matías Vera|CM|30|528|ARG
Federico Rodríguez|CM|17|300|ARG
Alan Laprida|CM|22|300|ARG
Juan Cardozo|CM|22|602|PAR
Diego Barrera|LW|22|1254|ARG
Lucas Varaldo|ST|24|391|ARG
Ezequiel Naya|ST|25|457|ARG
Michael Santos|ST|33|521|URU
Leonardo Sequeira|RW|31|464|ARG
Joaquín Flores|ST|21|581|ARG
Ignacio Santillán|ST|20|300|ARG
Kevin Ibañez|ST|17|300|ARG
Martín Cuitiño|ST|21|300|ARG` },
    { id: 'talleres', name: 'Тальерес', city: 'Кордова', stadium: 'Estadio Mario Alberto Kempes', cap: 57503, colors: ['#002d72', '#ffffff'], players: `
Santino Barbi|GK|21|300|ARG
Jeremías Florentín|GK|20|300|ARG
Ezequiel Unsain|GK|31|1441|ARG
Franco Yennerich|GK|20|300|ARG
Alexandro Maidana|LB|21|3231|PAR
Matías Catalán|CB|34|391|CHI
Román Riquelme|CB|24|1419|ARG
Thiago Baroni|CB|20|300|ARG
Valentín Fascendini|CB|23|1374|ARG
José Palomino|CB|36|144|ARG
Augusto Schott|RB|26|975|ARG
Gabriel Báez|LB|31|454|ARG
Lucio Ferrari|CB|18|300|ARG
Gonzalo Nuccio|CB|19|300|ARG
Santiago Fernández|CB|21|4879|ARG
Matías Galarza|DM|24|5835|ARG
Federico Fattori|CM|34|780|ARG
Juan Sforza|DM|24|1312|ARG
Franco Cristaldo|AM|30|1765|ARG
Matías Gómez|CM|20|300|ARG
Mateo Cáceres|DM|24|300|ARG
Jeremías Gallard|ST|22|402|ARG
Giovanni Baroni|AM|17|300|ARG
Bruno Trey|CM|20|300|ARG
Lautaro Ortíz|CM|18|300|ARG
Timoteo Chamorro|RB|20|657|ARG
Diego Valoyes|RW|30|822|COL
Agustín Álvarez|ST|25|1651|URU
Valentín Depietri|LW|25|367|ARG
Ignacio Alastra|ST|18|835|ARG
Emiliano Chiavassa|RW|20|645|ARG
Rick|LW|27|1767|BRA
Valentín Dávila|ST|19|2092|ARG` },
    { id: 'rosario', name: 'Росарио Сентраль', city: 'Росарио', stadium: 'Estadio Gigante de Arroyito', cap: 41654, colors: ['#0055a4', '#ffd700'], players: `
Axel Werner|GK|30|456|ARG
Jeremías Ledesma|GK|33|300|ARG
Damián Fernández|LW|22|300|ARG
Sebastián Zaracho|CB|27|391|PAR
Agustín Sández|LB|25|2336|PAR
Juan Cruz Komar|CB|30|449|ARG
Gastón Ávila|CB|25|3784|ARG
Facundo Mallo|CB|31|638|URU
Juan Giménez|CB|20|1981|ARG
Emanuel Coronel|RB|29|1714|ARG
Alexis Soto|LB|33|638|ARG
Lucas Ramos López|DM|20|300|ARG
Álvaro Güich|CB|17|300|ARG
Leonardo Ríos|CB|19|300|ARG
Elías Verón|RB|19|300|ARG
Ignacio Ovando|CB|19|10818|ARG
Luca Raffin|CB|20|595|ARG
Franco Ibarra|DM|25|6290|ARG
Franco Cervi|CM|32|451|ARG
Ángel Di María|AM|38|1021|ARG
Santiago Segovia|AM|19|606|ARG
Vicente Pizarro|DM|23|3885|CHI
Pol Fernández|AM|35|267|ARG
Federico Navarro|DM|26|1500|ARG
Bautista Cantero|CM|18|300|ARG
Paolo Giaccone|CM|19|300|ARG
Felipe Carnicero|CM|20|300|ARG
Alan Rodríguez|RW|26|1622|URU
Marcelo Cabrera|ST|20|300|ARG
Jaminton Campaz|LW|26|2778|COL
Julián Fernández|LW|22|3897|ARG
Enzo Copetti|ST|30|1857|ARG
Giovanni Cantizano|RW|19|1733|ARG
Gaspar Duarte|RW|23|1023|ARG
Marco Ruben|ST|39|310|ARG
Tomás Badaloni|ST|26|2820|ARG` },
    { id: 'argentinos', name: 'Архентинос Хуниорс', city: 'Буэнос-Айрес', stadium: 'Estadio Diego Armando Maradona', cap: 24380, colors: ['#e30613', '#ffffff'], players: `
Agustín Mangiaut|GK|22|300|ARG
Gonzalo Siri|GK|23|300|ARG
Brayan Cortés|GK|31|1424|CHI
Luciano Sánchez|CB|32|380|ARG
Érik Godoy|CB|33|496|ARG
Franco Vázquez|CB|21|704|ARG
Kevin Coronel|RB|22|1008|ARG
Francisco Álvarez|CB|26|4273|ARG
Franco Paredes|RB|27|466|ARG
Sebastián Prieto|LB|33|730|ARG
Mateo Mendoza|CB|21|2232|ARG
Claudio Bravo|LB|29|518|ARG
Alan Núñez|RB|22|1468|PAR
Thiago Gómez|CB|20|300|ARG
Santino Gianini|CB|18|300|ARG
Federico Mancuello|LW|37|439|ARG
Nicolás Oroz|CM|32|996|ARG
Kevin Gutiérrez|DM|29|2073|ARG
Gabriel Florentín|DM|27|557|ARG
Joaquín Gho|DM|23|1604|ARG
Facundo Carrizo|CM|19|733|ARG
Gino Infantino|ST|23|726|ARG
Alan Alcaraz|CM|17|300|ARG
Gastón Bouhier|AM|17|300|ARG
Hernán López|RW|26|2466|ARG
Gastón Verón|ST|25|1145|ARG
Matías Giménez|CM|27|1128|ARG
Tomás Molina|ST|31|1857|ARG
Emiliano Viveros|LW|24|1059|ARG
Ryoga Kida|ST|21|450|JPN
Diego Porcel|LW|21|1198|ARG
Facundo Jainikoski|LW|18|2294|ARG` },
    { id: 'gimnasia', name: 'Химнасия Ла-Плата', city: 'Ла-Плата', stadium: 'Estadio Juan Carmelo Zerillo', cap: 24544, colors: ['#ffffff', '#002d72'], players: `
Máximo Cabrera|GK|20|300|ARG
Patricio Schroeder|GK|19|300|IRL
Harlen Castillo|GK|33|437|COL
Nelson Insfrán|GK|31|1471|ARG
Julián Kadijevic|GK|22|380|ARG
Mariano Ojeda|CB|19|300|ARG
Renzo Giampaoli|CB|26|1324|ARG
Germán Conti|CB|32|275|ARG
Gonzalo Errecalde|CB|26|314|ARG
Enzo Martínez|CB|28|1070|URU
Matías Melluso|LB|28|254|ARG
Pedro Silva Torrejón|LB|29|783|ARG
Alexis Steimbach|RB|24|1342|ARG
Fabricio Corbalán|RB|23|430|ARG
Bautista Barros Schelotto|RB|26|311|ARG
Juan Cortazzo|CB|21|803|ARG
Lucas Lamella|CB|16|300|ARG
Jeremías Langa|CB|20|300|ARG
Alejo Gelsomino|CB|21|300|ARG
Ignacio Miramón|DM|23|1572|ARG
Ignacio Fernández|AM|36|404|ARG
Nicolás Barros Schelotto|DM|20|3703|ARG
Augusto Max|DM|34|350|ARG
Mateo Seoane|DM|22|548|ARG
Pablo Aguiar|DM|20|467|PAR
Leandro Mamut|CM|22|481|ARG
Sergio Troncoso|CM|20|300|ARG
Facundo Di Biasi|CM|21|910|ARG
Agustín Martínez|CM|18|300|ARG
Santiago Villarreal|CM|20|300|ARG
Manuel Panaro|LW|23|1815|ARG
Ivo Mammini|ST|23|382|ARG
Jeremías Merlo|LW|20|1179|ARG
Lucas Janson|LW|32|443|ARG
Agustín Colazo|ST|25|545|ARG
Juan Pérez|RW|22|354|COL
Franco Torres|LW|27|353|ARG
Agustín Auzmendi|ST|29|892|ARG
Marcelo Torres|ST|28|1726|ARG
Maximiliano Zalazar|RW|25|525|ARG` },
    { id: 'belgrano', name: 'Бельграно', city: 'Кордова', stadium: 'Estadio Julio César Villagra', cap: 28000, colors: ['#8ac3ee', '#ffffff'], players: `
Manuel Vicentini|GK|36|275|ARG
Thiago Cardozo|GK|30|2091|URU
Matías Daniele|GK|22|300|ARG
Santiago Ferez|GK|21|300|ARG
Alexis Maldonado|CB|29|1055|ARG
Adrián Spörle|LB|31|499|ARG
Álvaro Ocampo|CB|22|598|ARG
Leonardo Morales|CB|35|764|ARG
Federico Ricca|LB|31|354|URU
Lisandro López|CB|37|581|ARG
Alcides Benítez|RB|24|1763|PAR
Agustín Falcón|RB|21|706|ARG
Joaquín Flandes|CB|19|300|ARG
Santiago Longo|DM|28|1617|ARG
Ramiro Hernandes|LW|21|955|ARG
Лукас Зелараян|AM|34|1762|ARM
Francisco González Metilli|DM|29|1143|ARG
Santino Gatti|CM|21|300|ARG
Franco Vázquez|DM|37|711|ARG
Adrián Sánchez|DM|27|2180|ARG
Marcos Ortiz|CM|17|300|ARG
Gonzalo Zelarayán|AM|22|551|ARG
Thiago Cortés|CM|20|300|ARG
Lucas Passerini|ST|32|1287|ARG
Ramiro Tulián|LW|18|300|ARG
Nicolás Fernández|ST|30|2127|ARG
Emiliano Rigoni|RW|33|1008|ARG
Lautaro Gutierrez|ST|20|635|ARG
Juan Velázquez|LW|21|1630|ARG
Agustín Bono|ST|18|300|ARG
Agustin Melano|ST|22|300|ARG` },
    { id: 'sarmiento', name: 'Сармьенто', city: 'Хунин', stadium: 'Estadio Eva Perón de Junín', cap: 22000, colors: ['#00a650', '#ffffff'], players: `
Iván Arboleda|GK|30|437|COL
Thyago Ayala|GK|25|300|ARG
Juan Insaurralde|CB|42|549|ARG
Lucas Suárez|LB|31|316|ARG
Juan Manuel Cabrera|RB|26|311|ARG
Gastón Arturia|CB|26|506|ARG
Jeremías Vallejos|RB|23|300|ARG
Ulises Giménez|RB|20|713|ARG
Yair Arismendi|LB|28|276|ARG
Thiago Santamaría|RB|23|1163|ARG
Agustín Seyral|CB|21|665|ARG
Joel Godoy|LB|21|1248|ARG
Renzo Orihuela|CB|25|544|URU
Nicolás Pasquini|LB|35|250|ARG
Manuel García|CM|27|712|ARG
Santiago Salle|RW|22|1390|ARG
Jhon Rentería|AM|21|782|COL
Cristian Zabala|CM|28|557|ARG
Mauricio Martínez|CM|33|334|ARG
Agustín Nadruz|CM|30|431|URU
Osmar Giménez|AM|19|977|PAR
Julián Contrera|RW|23|979|ARG
Julián Mavilla|LW|26|534|ARG
Elián Giménez|CM|22|738|ARG
Carlos Villalba|AM|28|316|ARG
Gabriel Díaz|LW|26|321|ARG
Facundo Alaggia|CM|21|417|ARG
Pablo Magnín|ST|36|326|ARG
Diego Churín|ST|36|365|ARG
Gastón González|CM|25|923|ARG
Jonathan Herrera|ST|35|642|ARG
Junior Marabel|ST|28|1267|PAR
Brandon Márquez|ST|21|570|ARG` },
    { id: 'river', name: 'Ривер Плейт', city: 'Буэнос-Айрес', stadium: 'Estadio Monumental', cap: 85018, colors: ['#ffffff', '#e30613'], players: `
Ezequiel Centurión|GK|29|927|ARG
Santiago Beltrán|GK|22|3930|ARG
Franco Jaroszewicz|GK|19|300|ARG
Tobías Ramírez|CB|19|5631|ARG
Francisco Ortega|LB|27|6501|ARG
Lautaro Rivero|CB|22|9293|ARG
Giovanni González|RB|32|1426|URU
Marcos Acuña|LB|34|928|ARG
Lucas Martínez Quarta|CB|30|2731|ARG
Gonzalo Montiel|RB|29|2711|ARG
Nicolás Otamendi|CB|38|1195|ARG
Facundo González|LB|20|675|ARG
Agustín Obregón|CB|20|300|ARG
Thiago Salvatierra|CB|18|300|ARG
Juan Carlos Portillo|DM|26|2381|ARG
Aníbal Moreno|DM|27|8731|ARG
Mauro Arambarri|CM|31|6123|URU
Ángel Correa|AM|31|5607|ARG
Fausto Vera|DM|26|2934|ARG
Thiago Almada|LW|25|22353|ARG
Lautaro Pereyra|AM|18|300|ARG
Santiago Espíndola|CM|18|300|ARG
Thiago Acosta|DM|21|593|ARG
Valentín Lucero|CM|20|300|ARG
Lucas Silva|DM|19|300|ARG
Maximiliano Soria|CM|19|300|ARG
Alexis González|RW|21|300|ARG
Tobias Goytia|ST|17|300|ARG
Sebastián Driussi|ST|30|2720|ARG
Lucas Beltrán|ST|25|10186|ARG
Rafael Borré|ST|31|2351|COL
Juan Cruz Meza|RW|18|4544|ARG
Tomás Galván|LW|26|2652|ARG
Agustín Ruberto|ST|20|1740|ARG
Felipe Esquivel|ST|18|300|ARG
Tobías Andrada|RW|19|12631|ARG` },
    { id: 'barracas', name: 'Баракас Сентраль', city: 'Буэнос-Айрес', stadium: 'Estadio Claudio Fabián Tapia', cap: 4400, colors: ['#e30613', '#ffffff'], players: `
Juan Espínola|GK|31|559|PAR
Marcelo Miño|GK|29|538|ARG
Juan Insúa|GK|21|300|ARG
Luca Fernández|GK|21|300|ARG
Nicolás Capraro|CB|28|958|ARG
Damián Martínez|RB|36|345|ARG
Rafael Barrios|RB|33|407|ARG
Kevin Jappert|CB|22|1772|ARG
Yonatthan Rak|CB|33|281|URU
Elías Pereyra|LB|27|457|ARG
Nicolás Demartini|CB|26|996|ARG
Fernando Tobio|CB|37|530|ARG
Gastón Campi|CB|35|274|ARG
Dardo Miloc|CM|36|571|ARG
Rodrigo Insúa|LB|28|1364|ARG
Tomás Porra|CM|22|1291|ARG
Iván Tapia|CM|27|933|ARG
Iván Guaraz|CM|21|465|ARG
Manuel Duarte|CM|25|510|ARG
Carlos Arce|CM|36|295|ARG
Wilfredo Rivera|AM|23|500|PUR
Yeison Gordillo|CM|34|270|COL
Rodrigo Bogarín|CM|29|254|PAR
Esteban Rolón|CM|31|255|ARG
Maxi Puig|RB|26|368|ARG
Juan Barbieri|ST|30|249|ARG
Gonzalo Morales|ST|23|838|ARG
Норберто Бриасцо|ST|30|357|ARM
Jhonatan Candia|ST|31|451|URU
Lucas Gamba|ST|39|358|ARG
Valentino Gandín|ST|19|300|ARG
Enzo Taborda|LW|21|671|ARG
Gonzalo Maroni|ST|27|1092|ARG
Nicolás Orsini|ST|32|427|ARG
Tomás Lavezzi|ST|21|300|ARG
Facundo Bruera|ST|28|1599|ARG` },
    { id: 'huracan', name: 'Уракан', city: 'Буэнос-Айрес', stadium: 'Estadio Tomás Adolfo Ducó', cap: 48314, colors: ['#ffffff', '#e30613'], players: `
Hernán Galíndez|GK|39|1130|ECU
Nazareno Durán|GK|22|300|ARG
Sebastián Meza|GK|26|680|ARG
Fabrizio Martínez|CB|19|300|ARG
Lucas Blondel|RB|30|1187|SUI
Federico Vera|RB|28|1040|ARG
Fabio Pereyra|CB|36|511|ARG
Leandro Lescano|LB|23|623|ARG
Hugo Nervo|CB|35|268|ARG
Daniel Zabala|CB|23|515|ARG
César Ibáñez|LB|27|1977|ARG
Ignacio Campo|RB|21|931|ARG
Máximo Palazzo|CB|21|1146|ARG
Martín Soto|CB|18|300|ARG
Rodrigo Fernández Cedrés|DM|30|550|URU
Leonardo Gil|AM|35|389|CHI
Óscar Romero|AM|34|270|PAR
Facundo Waller|DM|29|1209|URU
Emmanuel Ojeda|DM|28|604|ARG
Lautaro Mora|CM|21|668|ARG
Santino Rayneli|CM|18|300|ARG
Óscar Cortés|LW|22|3463|COL
Jordy Caicedo|ST|28|1471|ECU
Thaiel Peralta|RW|18|1765|ARG
Juan Bisanz|RW|25|1241|ARG
Ignacio Pussetto|RW|30|1017|ARG
Bruno Barticciotto|LW|25|1651|CHI
Tomás Uribe|RW|19|300|ARG
Facundo Kalinger|LW|21|864|ARG` },
    { id: 'ind_rivadavia', name: 'Индепендьенте Ривадавия', city: 'Мендоса', stadium: 'Estadio Bautista Gargantini', cap: 16000, colors: ['#0055a4', '#ffffff'], players: `
Ramiro Macagno|GK|29|258|ARG
Emmanuel Gómez Riga|GK|25|355|ARG
Nicolás Bolcato|GK|22|1626|ARG
Kevin Pagliaroli|GK|18|300|ARG
Leonard Costa|CB|28|1012|URU
Juan Manuel Elordi|LB|32|525|ARG
Santiago Cena|CB|21|300|ARG
Alejo Osella|CB|26|680|ARG
Luciano Gómez|LB|30|335|ARG
Alex Vigo|RB|27|601|ARG
Ezequiel Bonifacio|RB|32|297|ARG
Iván Villalba|CB|31|805|PAR
Sheyko Studer|CB|23|6619|ARG
Matías Salvo|CB|21|300|ARG
Tomás Bottari|DM|25|1591|ARG
Leonel Bucca|LW|27|295|ARG
Matías Fernández|AM|25|452|ARG
Gonzalo Ríos|CM|27|1282|ARG
Rodrigo Atencio|AM|24|1735|ARG
Alessandro Riep|CM|23|544|ARG
Luis Díaz|AM|22|690|COL
José Florentín|DM|30|1648|PAR
Kevin Vázquez|DM|25|625|ARG
Stéfano Moreyra|DM|25|401|ARG
Facundo Ortiz|CM|20|300|ARG
Tobías Ganduglia|CM|21|300|ARG
Alex Aguado|CM|23|498|ARG
Agustín Rognoni|CM|19|300|ARG
Luis Sequeira|AM|23|518|ARG
Matías Reali|AM|28|1110|ARG
Victorio Ramis|ST|32|300|ARG
Álex Arce|ST|31|2320|PAR
Maximiliano Salas|ST|28|2346|ARG
Diego Crego|LW|29|300|ARG
Fabrizio Sartori|ST|24|1445|ARG
Luciano Sábato|ST|18|300|ARG
Román Ruíz|ST|20|300|ARG` },
    { id: 'tucuman', name: 'Атлетико Тукуман', city: 'Сан-Мигель-де-Тукуман', stadium: 'Estadio Monumental Presidente José Fierro', cap: 35200, colors: ['#8ac3ee', '#ffffff'], players: `
Luis Ingolotti|GK|26|858|ARG
Patricio Albornoz|GK|26|300|ARG
Tomás Durso|GK|27|742|ARG
Ramiro Paunero|LB|21|300|ARG
Maximiliano Villa|RB|29|473|URU
Gianluca Ferrari|CB|29|440|ARG
Moisés Brandán|RB|26|750|ARG
Juan Rodríguez|CB|32|464|ARG
Gastón Suso|CB|35|626|ARG
Ignacio Galván|LB|24|448|ARG
Leonel Di Plácido|RB|32|442|ARG
Clever Ferreira|CB|23|300|PAR
Gabriel Compagnucci|RB|35|461|ARG
Juan Infante|LB|30|388|ARG
Luciano Vallejo|CB|22|498|ARG
Tomás Jung|CM|21|300|ARG
Julián Fernández|DM|31|255|ARG
Martín Benítez|LW|32|238|ARG
Ezequiel Ham|DM|32|254|SYR
Franco Nicola|AM|24|516|URU
Leonel Vega|DM|22|634|ARG
Lautaro Godoy|AM|23|662|ARG
Mauro Carrizo|CM|20|300|ARG
Ezequiel Godoy|CM|23|300|ARG
Kevin Ortíz|CM|26|836|ARG
Leandro Díaz|ST|34|473|ARG
Renzo Tesuri|RW|30|1015|ARG
Alexis Canelo|ST|34|464|ARG
Ramiro Ruíz Rodríguez|ST|26|341|ARG
Facundo Pimienta|ST|23|173|ARG
Nicolás Laméndola|LW|27|559|ARG
Rodrigo Granillo|ST|20|300|ARG
Manuel Brondo|ST|24|575|ARG
Gabriel Abeldaño|ST|21|712|ARG` },
    { id: 'tigre', name: 'Тигре', city: 'Викторию', stadium: 'Estadio José Dellagiovanna', cap: 26282, colors: ['#0055a4', '#e30613'], players: `
Luka Fuster|GK|20|300|ARG
Felipe Zenobio|GK|26|3887|ARG
Máximo Leguizamón|GK|19|300|ARG
Lautaro Morales|GK|26|322|ARG
Joaquín Laso|CB|36|540|ARG
Valentín Moreno|RB|23|1128|ARG
Ángelo Marchese|LB|22|432|ARG
Guillermo Soto|RB|32|259|CHI
Alan Barrionuevo|CB|29|1241|ARG
Gonzalo Requena|CB|23|1234|ARG
Federico Álvarez|LB|32|577|ARG
Juan Villalba|CB|20|652|ARG
Bautista Feversani|CB|18|300|ARG
Alex González|CB|19|300|ARG
Luciano Minniti|CB|21|300|ARG
Lucas Molas|CB|19|300|ARG
Ramón Arias|CB|34|257|URU
Thiago Sánchez|CB|20|300|ARG
Román Saravia|CB|20|300|ARG
Ignacio Peluffo|RB|20|300|ARG
Fabricio Córdoba|CB|25|300|ARG
Bruno Leyes|CM|24|1606|ARG
Simón Rivero|RW|23|861|ARG
Martín Garay|RB|27|564|ARG
Jabes Saralegui|RW|23|3886|ARG
Tiago Serrago|RW|22|1185|ARG
Nicolás Dubersarsky|CM|21|1562|ARG
Sebastián Medina|LW|26|402|ARG
Santiago González|CM|23|1689|ARG
Gonzalo Martínez|AM|33|296|ARG
Nicolás Afonso|CM|19|300|ARG
Lucian Carracedo|CM|20|300|ARG
Gastón Pérez|CM|20|300|ARG
Román Pesolilla|CM|20|300|ARG
Sebastián Lezcano|CM|19|300|ARG
Marco Rivas|CM|18|300|PER
Manuel Fernández|RW|22|421|ARG
Alfio Oviedo|ST|30|325|PAR
Santiago López|LW|20|2098|ARG
Ian Subiabre|LW|19|300|ARG
Ignacio Russo|ST|25|4996|ARG
Jerónimo Dómina|ST|21|1961|ARG
Mauro Méndez|ST|27|1973|URU
Jordan Andrusisen|ST|20|300|ARG
Benjamín Figueredo|ST|19|300|ARG
Brandon Leszczuk|ST|19|300|ARG
Santino Galesio|ST|18|300|ARG` },
    { id: 'banfield', name: 'Банфилд', city: 'Банфилд', stadium: 'Estadio Florencio Solá', cap: 34901, colors: ['#00a650', '#ffffff'], players: `
Gino Santilli|GK|24|300|ARG
Joaquín Molina|GK|22|300|ARG
Diego Rodríguez|GK|37|296|ARG
Nehuén Paz|CB|33|442|ARG
Juan Luis Alfaro|RB|27|301|ARG
Nicolás Meriano|CB|25|686|ARG
Marcos López|RB|20|300|ARG
Brandon Oviedo|CB|21|786|ARG
Lautaro Cano|LB|24|422|ARG
Santiago López García|RB|28|1306|ARG
Mateo Mendizabal|CB|17|300|ARG
Ignacio Abraham|LB|28|1306|SYR
Santiago Daniele|CB|20|620|ARG
Renzo Malanca|CB|23|402|ARG
Lisandro Piñero|LW|19|1123|ARG
Lautaro Ríos|CM|26|381|ARG
Lautaro Gómez|CM|23|581|ARG
Favio Álvarez|CM|33|314|ARG
Santiago Esquivel|CM|22|837|ARG
Томас Адорян|CM|25|605|ARM
Lautaro Villegas|CM|22|738|ARG
Lucas Palavecino|CM|23|586|ARG
Isaías Gutiérrez|CM|17|300|ARG
Neyder Moreno|AM|29|282|COL
Nacho Pais|CM|26|825|ARG
David Zalazar|RW|24|628|ARG
John Arteaga|AM|27|188|COL
Adrián Balboa|ST|32|354|URU
Jeremías Acosta|ST|18|300|ARG
Federico Medina|RW|22|388|ARG
Alexander Machado|ST|24|681|URU
Matías Hernández|ST|21|630|ARG
Federico Anselmo|ST|32|283|ARG
Valentín González|ST|20|300|ARG
Thomas Rodríguez|LW|30|491|CHI` },
    { id: 'racing_club', name: 'Расинг', city: 'Авельянеда', stadium: 'Estadio Presidente Juan Domingo Perón', cap: 51500, colors: ['#8ac3ee', '#ffffff'], players: `
Thiago De Bellis|GK|21|300|ARG
Facundo Cambeses|GK|29|3797|ARG
Matías Tagliamonte|GK|28|771|ARG
Francisco Gómez|GK|22|300|ARG
Matías Pérez|CB|27|1779|ARG
Marco Di Césare|CB|24|6413|ARG
Ezequiel Cannavo|RB|24|2192|ARG
Juan Barinaga|RB|26|2216|ARG
Pacha Espino|LB|34|955|URU
Ignacio Rodríguez|LB|24|300|ARG
Nazareno Colombo|CB|27|1890|ARG
Mateo Martínez|CB|18|300|ARG
Gonzalo Escudero|CB|19|559|ARG
Matías Kranevitter|DM|33|322|ARG
Alan Forneris|CM|21|1075|ARG
Matko Miljevic|CM|25|2657|USA
Matías Zaracho|CM|28|2255|ARG
Ulises Ortegoza|CM|29|1261|CHI
Gastón Lodico|CM|28|2291|ARG
Adrián Fernández|CM|25|723|ARG
Leonel Pérez|CM|22|7626|ARG
Santino Aguirre|CM|19|300|ARG
Bautista Pérez|CM|18|300|ARG
Alexis Yegros|CM|19|300|ARG
Alejandro Tello|CM|18|300|ARG
Gonzalo Leiva|CM|19|300|ARG
Duván Vergara|LW|30|1585|COL
Adrián Martínez|ST|34|2092|ARG
Tomás Conechny|LW|28|1790|ARG
Valentín Carboni|RW|21|9241|ARG
Elías Torres|ST|25|1025|ARG
Lautaro Díaz|ST|28|1405|ARG
Alberto Campo|ST|20|300|ECU
Francisco Fraga|ST|20|300|ARG
Ezequiel Pérez|ST|18|300|ARG` },
    { id: 'estudiantes_rc', name: 'Эстудиантес Рио-Куарто', city: 'Рио-Куарто', stadium: 'Estadio Ciudad de Río Cuarto', cap: 9000, colors: ['#0055a4', '#ffffff'], players: `
Lucas Bruera|GK|29|283|ARG
Francisco Gualtieri|GK|23|300|ARG
Lautaro Herrera|GK|21|300|ARG
Agustín Lastra|GK|25|551|ARG
Lucas Baños|CB|21|300|ARG
Gonzalo Maffini|CB|33|325|ARG
Juan Antonini|CB|27|302|ARG
Matías Ruíz Díaz|RB|30|275|ARG
Jeremías Ramponi|CB|21|300|ARG
Tomás Olmos|RB|21|588|ARG
Facundo Cobos|LB|33|243|ARG
Agustín Quiroga|CB|24|596|ARG
Sergio Ojeda|CB|34|168|ARG
Matías Valenti|CB|24|450|ARG
Raúl Lozano|RB|29|437|ARG
Matias Pagliaricci|CB|25|300|ARG
Valentín Fenoglio|RW|23|718|ARG
Alejandro Cabrera|CM|34|438|ARG
Siro Rosané|CM|26|368|ARG
Tomás González|CM|27|360|ARG
Lautaro Cepeha|CM|22|300|ARG
Gabriel Alanís|AM|32|470|ARG
Nicolás Talpone|AM|30|271|ARG
Tomas Escobar Carranza|CM|20|300|ARG
Facundo Gallardo|RW|20|300|ARG
Francesco Lo Celso|AM|26|367|ARG
Lucas González|ST|29|264|ARG
Javier Ferreira|ST|34|416|PAR
Martín Garnerone|ST|28|303|ARG
Gonzalo González|RW|23|577|ARG
Yeison Moreno|ST|29|366|COL
Joaquín Rivero|ST|21|300|ARG
Benjamín Moyano|ST|18|300|ARG
Mauro Valiente|ST|26|349|ARG
Fernando Rodríguez|LW|26|344|ARG
Juan Garro|ST|33|290|ARG
Mauro Molina|ST|27|376|ARG
Mateo Bajamich|ST|27|416|ARG
Ramón Ábila|ST|37|358|ARG
Ibrahim Hesar|ST|32|307|SYR
Francisco Galván|ST|27|315|ARG
Juan Chala|ST|22|300|COL` },
    { id: 'aldosivi', name: 'Альдосиви', city: 'Мар-дель-Плата', stadium: 'Estadio José María Minella', cap: 35354, colors: ['#00a650', '#ffd700'], players: `
Sebastián Moyano|GK|36|340|ARG
Ignacio Chicco|GK|30|437|ARG
Matías Aballar|GK|19|300|ARG
Kevin Báez|GK|17|300|PAR
Lucas Acosta|GK|31|504|ARG
Guillermo Enrique|RB|26|380|ARG
Lucas Rodríguez|LB|33|260|ARG
Leonardo Sigali|CB|39|381|ARG
Rodrigo González|RB|26|334|ARG
Braian Cufré|LB|29|843|ARG
Elías López|RB|26|429|ARG
Néstor Breitenbruch|CB|31|260|ARG
Simón Sammarone|CB|19|300|ARG
Santiago Moya|CB|23|823|ARG
Joaquín Pombo|CB|25|709|ARG
Nicolás Zalazar|CB|29|436|ARG
Mateo Vales|LB|19|300|ARG
Federico Laurelli|LB|22|598|ARG
Nicolás Linares|CM|30|436|ARG
Roberto Bochi|CM|39|351|ARG
Nicolás Gaitán|AM|38|151|ARG
Francisco Perruzzi|CM|25|520|ARG
Lucas Castro|CM|37|459|ARG
Matías Godoy|LW|24|395|ARG
Alan Sosa|CM|23|624|ARG
Felipe Anso|LW|19|300|ARG
Federico Gino|CM|33|255|URU
Pablo Argoytia|CM|24|300|ARG
Martín García|CM|21|788|ARG
Lautaro Chávez|RW|25|387|ARG
Natanael Guzmán|RW|27|296|ARG
Nicolás Cordero|ST|27|581|ARG
Agustín Palavecino|LW|23|630|ARG
Bautista Dadín|ST|20|977|ARG
Andrés Chávez|ST|35|330|ARG
Tomás Fernández|RW|28|317|ARG
Andrés Vombergar|ST|31|1470|SVN
Augusto Fernández|ST|20|300|ARG` },
  ],
});
