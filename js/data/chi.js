// Примера Чили 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'chi', name: 'Примера Чили', short: 'Чили', country: 'CHI', tier: 1, weekday: 0,
  autumn: { from: '08-01', rounds: 15 }, spring: { from: '02-13', rounds: 15 },
  ticket: 5, prize: [1500, 1450, 1350, 1300, 1200, 1150, 1050, 1000, 900, 850, 750, 700, 600, 550, 450, 400],
  teams: [
    { id: 'u_catolica', name: 'Универсидад Католика', city: 'Сантьяго', stadium: 'Claro Arena', cap: 20249, colors: ['#ffffff', '#0033a0'], players: `
Vicente Bernedo|GK|25|800|CHI|2028||2022-01-01
Darío Melo|GK|33|100|CHI|2027||2025-03-06
Daniel González|CB|24|1500|CHI|2027||2022-06-06
Juan Ignacio Díaz|CB|28|650|ARG|2027||<2026-01-09
Branco Ampuero|CB|33|500|CHI|2028||2021-03-02
Tomás Asta-Buruaga|CB|30|400|CHI|2027||2022-01-01
Agustín García Basso|CB|34|300|ARG|2027|ITA|2026-08-14
Ignacio Pérez|CB|20|75|CHI|||2025-08-01
Nicolás L'Huillier|LB|21|200|CHI|||2026-01-01
Eugenio Mena|LB|38|125|CHI|2027||2023-01-01
Sebastián Arancibia|RB|20|1000|CHI|2029||2025-01-01
Bernardo Cerezo|RB|31|400|CHI|2027||<2026-01-01
Jhojan Valencia|DM|30|1200|COL|2028||2025-01-13
Alfred Canales|DM|26|600|CHI|2027||<2024-01-01
Agustín Farías|DM|38|50|ARG|2027|CHI|<2024-01-01
Gary Medel|DM|39|25|CHI|2027|ESP|2025-01-09
Jimmy Martínez|CM|29|1000|CHI|2028||<2026-01-01
Fernando Zuqui|CM|34|300|ARG|2027||2024-07-17
Matías Palavecino|AM|28|1000|ARG|2029||<2026-01-01
Martín Gómez|AM|20|50|ARG|2027||2026-01-15
Justo Giani|LW|27|3000|ARG|2030|ITA|2026-01-01
Clemente Montes|LW|25|1500|CHI|2028|FRA|2021-01-01
Cristian Cuevas|LW|31|700|CHI|2027||<2022-02-01
Diego Corral|LW|21|500|CHI|||2025-01-01
Diego Valencia|ST|26|500|CHI|2027||2025-02-12
Juan Francisco Rossel|ST|21|450|CHI|2028|ECU|2024-07-01
Fernando Zampedri|ST|38|225|CHI|2028|ARG|2021-01-01` },
    { id: 'colo_colo', name: 'Коло-Коло', city: 'Сантьяго', stadium: 'Estadio Monumental David Arellano', cap: 47017, colors: ['#ffffff', '#000000'], players: `
Gabriel Maureira|GK|19|500|CHI|||2026-01-01
Vozinha|GK|40|500|CPV|2027||2026-08-03
Fernando de Paul|GK|35|250|CHI|2027|ARG|<2023-01-01
Eduardo Villanueva|GK|22|50|CHI|2028||2025-01-01
Iván Román|CB|20|1500|CHI|2028||2026-08-08
Jonathan Villagra|CB|25|1000|CHI|2031||2024-08-08
Joaquín Sosa|CB|24|900|URU|2027|ITA|2026-01-02
Javier Méndez|CB|31|350|URU|2028||2026-01-09
Miguel Toledo|CB|22|100|CHI|2027||2025-01-01
Diego Ulloa|LB|23|750|CHI|2028||2024-01-01
Erick Wiemberg|LB|32|350|CHI|2028||<2025-01-01
Jeyson Rojas|RB|24|500|CHI|2028||2020-07-01
Matías Fernández|RB|31|300|CHI|2027||2026-01-01
Víctor Méndez|DM|27|1500|CHI|2028||2025-01-22
Tomás Alarcón|DM|27|700|CHI|2027|ESP|2025-01-22
Álvaro Madrid|CM|31|600|CHI|2027||<2026-02-04
Arturo Vidal|CM|39|175|CHI|2027||2024-01-23
Bastián Silva|CM|22|150|CHI|2027||2025-01-01
Leandro Hernández|AM|21|1200|CHI|2029||2024-01-01
Lautaro Pastrán|AM|24|600|CHI|2027|ARG|2026-01-29
Claudio Aquino|AM|35|500|ARG|2027||2025-01-01
Francisco Marchant|RW|20|700|CHI|2028||2025-01-01
Marcos Bolados|RW|30|275|CHI|2027||2016-07-27
Maximiliano Romero|ST|27|2500|ARG|2027||2026-01-16
Javier Correa|ST|34|750|ARG|2028||2024-07-01
Yastin Cuevas|ST|18|400|CHI|||2026-01-01` },
    { id: 'u_chile', name: 'Универсидад де Чили', city: 'Сантьяго', stadium: 'Estadio Nacional Julio Martínez Prádanos', cap: 48665, colors: ['#0033a0', '#c8102e'], players: `
Gabriel Castellón|GK|33|500|CHI|2028||<2024-01-03
Cristopher Toselli|GK|38|50|CHI|2027|ITA|2023-01-09
Igor Lichnovsky|CB|32|800|CHI|2029|AUT|2026-08-13
Nicolás Ramírez|CB|29|800|CHI|2027||2025-01-15
Bianneider Tamayo|CB|21|375|VEN|2030||2024-09-23
Matías Zaldivia|CB|35|350|CHI|2028|ARG|<2023-01-01
Marcelo Morales|LB|23|1500|CHI|2027||2026-01-28
Diego Vargas|LB|20|200|CHI|2029||2026-01-01
Fabián Hormazábal|RB|30|1800|CHI|2029||<2024-01-01
Nicolás Fernández|RB|27|400|CHI|2028||<2025-01-20
Lucas Barrera|DM|20|400|ARG|2031||2026-01-01
Marcelo Díaz|DM|39|25|CHI|2027||<2024-01-01
Israel Poblete|CM|31|750|CHI|2029||<2022-02-02
Tobías Reinhart|CM|26|700|ARG|2029|ITA|2026-08-04
Charles Aránguiz|CM|37|300|CHI|2028||2024-08-05
Javier Altamirano|AM|27|2000|CHI|2029||2026-01-01
Agustín Arce|AM|21|1000|CHI|2028||2025-01-01
Ignacio Vásquez|LW|20|700|CHI|2028||2024-07-01
Maximiliano Guerrero|RW|26|1000|CHI|2029||<2024-01-01
Gonzalo Reyna|RW|20|100|ARG|2027||2026-07-04
Juan Martín Lucero|ST|34|500|ARG|2028||2026-01-20
Octavio Rivero|ST|34|350|URU|2028|ESP|2026-01-09
Eduardo Vargas|ST|36|175|CHI|2027||<2026-01-03` },
    { id: 'ohiggins', name: 'О’Хиггинс', city: 'Ранкагуа', stadium: 'Estadio Codelco El Teniente', cap: 12476, colors: ['#6cace4', '#ffffff'], players: `
Omar Carabalí|GK|29|1000|ECU|2030|CHI|<2025-01-01
Jorge Peña|GK|26|400|CHI|2027||<2026-01-09
Diego Carreño|GK|24|75|CHI|2028||2023-01-01
Alan Robledo|CB|28|750|ARG|2027||2025-01-01
Miguel Brizuela|CB|29|700|ARG|2028||2026-01-13
Nicolás Garrido|CB|24|400|CHI|2027||<2025-01-11
José Tomás Movillo|CB|19|25|CHI||ESP|2026-01-01
Leandro Díaz|LB|27|450|CHI|2027||<2026-01-13
Luis Pavez Muñoz|LB|31|400|CHI|2027||2025-01-01
Felipe Faúndez|RB|20|800|CHI|2030||2024-07-01
Benjamín Rojas|RB|25|300|CHI|2027||2026-01-12
Cristián Morales|RB|19|125|CHI|||2025-01-01
Tomás Avilés|DM|22|2500|ARG|2027|CHI|2026-07-15
Felipe Ogaz|DM|23|700|CHI|2027||2023-01-01
Gabriel Pinto|DM|21|150|CHI|||2025-01-01
Juan Leiva|CM|32|450|CHI|2027||2025-01-01
Bryan Rabello|AM|32|450|CHI|2027|ESP|2023-07-17
Martín Maturana|AM|22|375|CHI|2028||2023-01-01
Santiago Toloza|AM|24|350|ARG|2029||2026-08-11
Bastián Yáñez|LW|25|400|CHI|2028||2026-01-17
Rodrigo Godoy|LW|21|300|CHI|2029||2025-01-01
Ignacio Schor|RW|26|600|ARG|2028||2026-08-18
Joaquín Tapia|RW|22|250|CHI|2029||2024-07-01
Walter Bou|ST|33|750|ARG|2027||2026-08-13
Thiago Vecino|ST|27|600|URU|2027|ITA|2026-01-25
Arnaldo Castillo|ST|29|450|PAR|2027|CHI|2024-01-01
David Fernández|ST|20|275|PAR|||2026-08-05
Esteban Moreira|ST|24|150|CHI|2027||2022-01-01` },
    { id: 'coquimbo', name: 'Кокимбо Унидо', city: 'Кокимбо', stadium: 'Estadio Municipal Francisco Sánchez Rumoroso', cap: 18750, colors: ['#ffd100', '#000000'], players: `
Gonzalo Flores|GK|26|250|CHI|2027||2025-01-01
Diego Sánchez|GK|39|50|CHI|2027||2023-01-01
Cristóbal Dorador|GK|20|100|CHI|2028||2024-01-01
Benjamín Gazzolo|CB|29|700|CHI|2027|ITA|<2026-01-12
Elvis Hernández|CB|27|400|ARG|2027|CHI|2024-01-08
Manuel Fernández|CB|37|50|URU|2027|CHI|2024-01-15
Joshua Arancibia|CB|21|100|CHI|2028|USA|2026-01-01
Sebastián Cabrera|LB|28|750|CHI|2027||<2023-01-01
Juan Cornejo|LB|36|100|CHI|2027||2023-01-01
Francisco Salinas|RB|26|1800|CHI|||2026-01-01
Lukas Soza|RB|28|150|CHI|2027||2025-01-01
Sebastián Galani|DM|29|1200|CHI|2027||<2022-06-08
Salvador Cordero|DM|30|350|CHI|2027||2025-01-01
Alejandro Camargo|DM|37|75|ARG|2027|CHI|<2024-01-01
Matías Zepeda|CM|22|400|CHI|||2025-01-01
Pablo Rodríguez|AM|19|250|CHI|2027||2026-01-02
Benjamín Chandía|LW|23|1500|CHI|2028||2023-01-01
Martín Mundaca|LW|19|650|CHI|||2024-01-01
Cristián Zavala|RW|27|1200|CHI|2027||<2026-02-13
Alejandro Azócar|RW|26|800|CHI|2028||2025-01-01
Luis Riveros|RW|28|450|PAR|||<2026-01-01
Dixon Pereira|RW|19|25|CHI|||2026-01-01
Guido Vadalá|ST|29|600|ARG|2027|ITA|2026-01-01
Nicolás Johansen|ST|27|800|ARG|2028||2024-01-11
Facundo Pons|ST|30|375|ARG|2027||2026-06-26
Lucas Pratto|ST|38|75|ARG|2027|ITA|2026-01-06
Rodrigo Holgado|ST|31|100|MAS||ARG|2026-02-09` },
    { id: 'audax', name: 'Аудакс Итальяно', city: 'Сантьяго', stadium: 'Estadio Bicentenario Municipal de La Florida', cap: 11637, colors: ['#00843d', '#ffffff'], players: `
Tomás Ahumada|GK|25|1000|CHI|2028||2021-01-01
Pedro Garrido|GK|23|50|CHI|2028||<2026-01-20
Enzo Ferrario|CB|26|800|CHI|2027|USA|<2025-01-01
Marcelo Ortiz|CB|32|225|ARG|2027||2026-01-02
Cristóbal Muñoz|CB|27|150|CHI|2027||2021-01-01
Diego Monreal|CB|24|75|CHI|2027||2023-01-01
Felipe Salomoni|LB|23|500|ARG|2027||2026-08-07
Oliver Rojas|RB|26|500|CHI|2027||2020-01-01
Raimundo Rebolledo|RB|29|200|CHI|||<2026-02-19
Martín Jiménez|RB|18|100|CHI|||2025-01-01
Vicente Zenteno|DM|19|225|CHI|||2026-01-01
Bryan Soto|DM|25|200|CHI|||<2026-02-12
Mario Sandoval|DM|19|150|CHI|||2025-01-01
Marco Collao|CM|28|700|CHI|2027||2023-01-01
Nicolás Orellana|CM|31|350|CHI|2027||<2024-01-17
Federico Mateos|CM|33|300|ARG|||<2026-01-23
Nicolás Aedo|AM|25|300|CHI|2027||2022-01-01
César Pinares|AM|35|250|CHI|2027||2026-07-07
Favian Loyola|AM|21|200|CHI||USA|2026-01-15
Michael Vadulli|LW|28|750|CHI|2029||2022-01-18
Rodrigo Cabral|LW|26|450|ARG|2027||2026-01-13
Giovani Chiaverano|RW|21|600|ARG|2027||2026-01-29
Ariel Uribe|RW|27|600|CHI|2027||2026-07-14
Paolo Guajardo|RW|23|400|CHI|2028||2024-02-24
Damián Pizarro|ST|21|1200|CHI|2027||2026-07-29
Diego Coelho|ST|31|600|URU|2028||<2026-01-07
Franco Troyansky|ST|29|225|ARG|2028|POL|2025-01-18` },
    { id: 'everton_ch', name: 'Эвертон (Винья-дель-Мар)', city: 'Винья-дель-Мар', stadium: 'Estadio Sausalito', cap: 23360, colors: ['#0033a0', '#ffd100'], players: `
Esteban Kirkman|GK|24|125|CHI|||2026-01-08
Ignacio González|GK|36|100|CHI|2027||<2024-01-01
Isaac Esquenazi|GK|22|25|CHI|2027||2024-01-01
Hugo Magallanes|CB|29|400|URU|2029||2026-01-12
Valentín Vidal|CB|22|400|CHI|2027||2026-02-01
Diego Oyarzún|CB|33|225|CHI|2027||<2021-02-26
Vicente Vega|CB|22|125|CHI|2027||2023-01-01
Ramiro González|CB|35|100|ARG|2027|CHI|<2025-01-04
Vicente Fernández|LB|27|400|CHI|2027||<2026-01-01
Nicolás Baeza|LB|29|250|CHI|2027||<2024-01-01
Lucas Soto|RB|23|800|CHI|2027||<2025-02-26
Cristopher Barrera|RB|28|200|CHI|||<2026-01-04
Martín Guzmán|RB|22|125|CHI|2028||2025-01-01
Óscar Opazo|RB|36|75|CHI|2027||<2026-02-18
Benjamín Berríos|CM|28|600|CHI|2029||<2020-01-08
Gustavo Charrupí|CM|22|550|COL|2027||2026-07-19
Joaquín Moya|CM|32|300|CHI|2027||2025-01-01
Amaro León|AM|19|25|CHI|||2026-01-01
Emiliano Ramos|LW|21|450|CHI|2027||2024-01-01
Braian Martínez|LW|27|450|ARG|2027||2026-01-13
Josué Ovalle|RW|26|1500|CHI|2029||<2026-07-13
Julián Alfaro|RW|25|350|CHI|2027||<2025-07-22
Alan Medina|ST|28|1300|URU|2029||2025-01-13
Nicolás Montiel|ST|21|500|ARG|2027||2026-02-19
Cristian Palacios|ST|36|100|URU|2027|CHI|<2025-01-01` },
    { id: 'palestino', name: 'Палестино', city: 'Сантьяго', stadium: 'Estadio Municipal de La Cisterna', cap: 6000, colors: ['#00843d', '#c8102e'], players: `
Sebastián Pérez|GK|35|225|CHI|2027||<2025-01-01
Sebastián Salas|GK|25|100|CHI|||2026-01-01
Enzo Roco|CB|34|300|CHI|2027||2026-01-26
Antonio Ceza|CB|23|250|CHI|2027||2023-01-01
José Bizama|CB|32|200|CHI|2028||2022-01-10
Fernando Meza|CB|36|50|ARG|2027||2025-02-27
Dilan Zúñiga|LB|30|700|CHI|2029||<2023-01-01
Jason León|LB|26|600|CHI|2028||2025-01-01
Ian Garguez|RB|21|1200|CHI|2029||2024-07-01
Vicente Espinoza|RB|22|400|CHI|||2024-01-01
Simón Pinto|RB|21|100|CHI||ARG|2026-01-01
Francisco Montes|DM|22|500|CHI|||2024-01-01
Dylan Glaby|DM|30|450|ARG|2027||<2026-08-07
Ariel Martínez|CM|32|250|CHI|2027||<2022-01-11
Nicolás Meza|CM|24|200|CHI|2027||2021-07-01
Sebastián Gallegos|CM|34|150|URU|2027|ESP|<2026-01-01
Marcelo Eggel|AM|27|500|ARG|2027||2026-07-09
Joe Abrigo|AM|31|450|CHI|2027||<2023-06-20
César Munder|LW|26|800|CHI|2027|CUB|<2026-01-02
Martín Araya|LW|21|300|CHI|||2024-01-01
Jonathan Benítez|LW|35|225|ARG|2027|CHI|<2020-01-01
Dilan Salgado|LW|23|200|CHI|||2024-01-01
Ian Alegría|LW|18|50|CHI|||2026-01-01
Bryan Carrasco|RW|35|150|CHI|2027||2020-01-23
Nelson Da Silva|ST|30|600|ARG|2029|BRA|<2026-01-06
Gonzalo Tapia|ST|30|400|CHI|2028||2025-01-01
Ronnie Fernández|ST|35|200|CHI|2027||2025-07-07` },
    { id: 'limache', name: 'Депортес Лимаче', city: 'Лимаче', stadium: 'Estadio Municipal Nicolás Chahuán Nazar', cap: 9200, colors: ['#c8102e', '#ffffff'], players: `
Matías Bórquez|GK|28|400|CHI|2027||2023-01-17
César|GK|34|75|BRA|2027|POR|<2026-09-08
Claudio González|GK|36|50|CHI|||<2026-01-01
Martin Smith|GK|17|100|CHI||GER
Axel Alfonzo|CB|22|700|PAR|2027||2026-01-06
Augusto Aguirre|CB|27|650|ARG|2028||2025-01-21
Alfonso Parot|CB|37|100|CHI|2027||<2025-02-06
Benjamín Molina|CB|20|100|CHI|2027||<2026-01-16
Marcelo Flores|LB|24|350|CHI|||2026-01-01
Javier Rojas|LB|21|200|CHI|2027||2026-07-01
Yerko González|RB|25|450|CHI|2027||2026-01-01
Dylan Escobar|RB|25|450|CHI|||<2026-07-18
Carlos Morales|RB|26|250|CHI|||2024-01-08
Misael Llantén|DM|27|400|CHI|||2025-01-21
Ramón Martínez|DM|30|300|PAR|2027||2026-01-01
Tiago Hernández|DM|24|300|URU||ESP|2026-07-01
César Fuentes|DM|33|200|CHI|||2026-01-01
Hugo Martínez|CM|26|500|PAR|||2026-07-03
Flavio Moya|CM|20|450|CHI|2027||<2026-01-16
Leonardo Valencia|AM|35|250|CHI|2027||<2026-07-15
Vicente Cárcamo|AM|21|25|CHI|2027||<2026-07-04
Jean Meneses|LW|33|1200|CHI|2027||2026-01-01
Daniel Castro|LW|32|700|CHI|2027||2021-02-18
Vicente Álvarez|RW|19|600|CHI|2027||2026-01-16
Marcos Arturia|ST|28|150|ARG|2027||2026-01-06
Gonzalo Sosa|ST|37|100|ARG|2027||<2026-01-01` },
    { id: 'la_serena', name: 'Депортес Ла-Серена', city: 'Ла-Серена', stadium: 'Estadio La Portada', cap: 17134, colors: ['#c8102e', '#ffffff'], players: `
José Tapia|GK|24|350|CHI|2027||2023-01-01
Federico Lanzillotta|GK|33|200|ARG|2027||2026-01-15
Ignacio Sáez|GK|21|200|CHI|2027||<2026-07-13
Eryin Sanhueza|GK|30|150|CHI|2027||2023-01-01
Matías Pérez|CB|21|500|CHI|2027||2026-08-13
Andrés Zanini|CB|29|350|ARG|2027||2025-01-20
Lucas Alarcón|CB|26|300|CHI|||<2022-02-10
Ian Rasso|CB|26|150|ARG|2027||2026-07-23
Fernando Dinamarca|LB|22|350|CHI|2028||2025-01-01
Yahir Salazar|LB|21|225|CHI|2027||<2026-01-08
Rafael Delgado|LB|36|100|ARG|2027||2026-01-29
Joaquín Gutiérrez|RB|24|500|CHI|2027||<2026-01-04
Bruno Gutiérrez|RB|24|400|CHI|2027||<2026-01-24
Matías Pinto|RB|22|200|CHI|2027||2025-01-18
Sebastián Díaz|DM|30|400|CHI|2027||<2024-01-19
Francis Mac Allister|DM|31|350|ARG||ITA|2026-02-03
Gonzalo Escalante|CM|33|450|ARG|2027|ITA|2026-01-04
Matías Marín|CM|26|375|CHI|2027||2026-01-13
Felipe Chamorro|AM|25|700|CHI|2028||<2025-01-01
Joan Orellana|AM|21|75|CHI|2027||2026-01-01
Jeisson Vargas|LW|29|750|CHI|2027||2025-01-01
Alexander Oroz|LW|23|200|CHI|||<2026-01-06
Cristóbal Sepúlveda|LW|18|25|CHI|||2026-01-01
Bastián Contreras|RW|21|75|CHI|||2026-01-01
Bastián Sandoval|RW|18|25|CHI|||2026-01-01
Diego Rubio|ST|33|500|CHI|2027|USA|2026-01-29
Ángelo Henríquez|ST|32|300|CHI|2027||2025-03-02
Nicolás Stefanelli|ST|31|250|ARG|2027|ITA|2026-02-20
Gonzalo Figueroa|ST|26|100|ARG|2028||2026-07-25
Fabricio Díaz|ST|20|75|ARG|2028||2025-01-21` },
    { id: 'u_concepcion', name: 'Универсидад де Консепсьон', city: 'Консепсьон', stadium: 'Estadio Municipal Alcaldesa Ester Roa Rebolledo', cap: 30448, colors: ['#ffd100', '#0033a0'], players: `
José Sanhueza|GK|25|225|CHI|2027||2022-01-21
Jorge Broun|GK|40|100|ARG|2028||2026-07-21
Diego Matamala|GK|24|100|CHI|||2023-01-01
Miguel Barbieri|CB|33|350|ARG|2028||2026-07-28
David Retamal|CB|23|350|CHI|2027||<2026-01-12
Bastián Ubal|CB|24|350|CHI|2027||2025-01-03
Moisés González|CB|25|350|CHI|||<2026-01-01
Esteban Páez|CB|17|100|CHI|||2026-01-01
Osvaldo González|CB|42|10|CHI|2027||2023-06-02
Antonio Díaz|LB|26|400|CHI|2027||<2026-01-12
Yerco Oyanedel|LB|26|400|CHI|2027||2025-02-03
Patricio Romero|LB|21|150|CHI|2027||2026-01-01
Jorge Espejo|RB|26|600|CHI|||2026-01-01
Benjamín Sáez|RB|21|50|CHI|2028||2025-01-01
Cristhofer Mesías|DM|28|500|CHI|2028||<2026-01-14
Bryan Ogaz|DM|26|350|CHI|2028||2026-01-01
Francisco Herrera|DM|21|50|CHI|||2025-01-01
Facundo Mater|CM|28|700|SYR|2027|ARG|2026-01-29
Jeison Fuentealba|CM|23|700|CHI|2027||<2024-06-26
Luis Rojas|AM|24|300|CHI|2027||2025-07-07
Pablo Parra|AM|32|250|CHI|2027||<2026-01-01
Tomás Roco|AM|20|100|CHI|||2026-08-18
Iam González|LW|22|350|CHI|||2026-07-06
Harol Salgado|LW|26|250|CHI|2027||<2025-07-30
Rodrigo Olivares|RW|22|175|CHI|2027||2024-01-01
Daniel Barrea|ST|25|500|ARG|2027||2026-02-19
Rogelio Funes Mori|ST|35|400|MEX|2028|ARG|2026-08-13
Cecilio Waterman|ST|35|250|PAN|||<2026-01-01
Diego Sabando|ST|21|25|CHI|||2025-01-01` },
    { id: 'nublense', name: 'Ньюбленсе', city: 'Чильян', stadium: 'Estadio Bicentenario Municipal Nelson Oyarzún', cap: 12000, colors: ['#c8102e', '#ffffff'], players: `
Nicola Pérez|GK|36|200|URU|||2021-03-01
Hernán Muñoz|GK|38|25|CHI|2027||2026-01-01
Osvaldo Bosso|CB|33|300|CHI|2027||<2024-01-12
Pablo Calderón|CB|28|300|ARG|2027||2026-01-01
Sebastián Valencia|CB|26|275|CHI|||2024-01-17
Felipe Campos|CB|32|250|CHI|2027||<2026-01-09
Carlos Salomón|CB|26|150|CHI|2028||2026-01-01
Jovany Campusano|LB|33|300|CHI|2027||<2020-01-01
Diego Sanhueza|RB|24|500|CHI|2028||2025-01-14
Joaquín González|RB|25|100|CHI|2028||2026-01-01
Diego Céspedes|DM|28|500|CHI|2028||<2026-01-14
Lorenzo Reyes|DM|35|200|CHI|2027||2022-02-23
Manuel Rivera|CM|30|500|CHI|||<2026-01-01
Daniel Saavedra|CM|22|150|CHI|||2025-01-01
León Mansilla|CM|20|100|CHI|||2026-01-01
Matías Plaza|AM|25|650|CHI|2028||2024-01-04
Ignacio Tapia|AM|22|300|ARG|2027||2026-01-22
Lucas Molina|LW|20|300|CHI|||2025-01-01
Giovanny Ávalos|LW|21|250|CHI||PAR|2025-01-01
Alex Valdés|LW|24|225|CHI|||2023-01-01
Gabriel Graciani|RW|32|500|ARG|||2024-01-03
Fernando Ovelar|RW|22|400|PAR|2027||2026-01-21
Ignacio Jeraldino|ST|30|500|CHI|2027|ITA|2026-01-19
Esteban Calderón|ST|22|400|CHI|2027||<2026-07-26
Franco Rami|ST|23|375|ARG|2027|ITA|2026-01-07` },
    { id: 'la_calera', name: 'Унион Ла-Калера', city: 'Ла-Калера', stadium: 'Estadio Municipal Nicolás Chahuán Nazar', cap: 9200, colors: ['#c8102e', '#ffffff'], players: `
Nicolás Avellaneda|GK|33|225|ARG|2027||2026-01-01
Nelson Espinoza|GK|31|150|CHI|||2026-01-19
Daniel Gutiérrez|CB|23|500|CHI|2027||<2026-01-18
Rodrigo Cáseres|CB|29|450|ARG|2027||2026-01-04
Juan Salomoni|CB|29|450|ARG|2027|ITA|2026-07-17
Nicolás Palma|CB|25|325|CHI|||2026-01-01
Vicente Lavín|CB|23|250|CHI|2028||2026-06-12
Alexander Pastene|CB|26|50|CHI|2027||2025-08-07
Cristián Gutiérrez|LB|29|250|CAN|2027|CHI|<2026-01-01
Michael Maturana|LB|22|50|CHI|||2024-07-01
Valentino Torrente|LB|21|100|ARG||ESP|2026-07-21
Christopher Díaz|RB|31|400|CHI|2027||2025-01-01
Javier Saldías|RB|25|200|CHI|2028||<2025-01-01
Camilo Moya|DM|28|400|CHI|2027||<2025-01-01
Yerko Leiva|CM|28|375|CHI|||2026-01-01
Rodrigo Pérez|CM|30|350|URU|2028|ITA|2026-07-18
Joaquín Soto|CM|19|350|CHI|2030||2025-01-01
Yonathan Andía|CM|34|75|CHI|||2026-05-01
Benjamín Argandoña|CM|21|100|ARG|||2026-02-09
Carlo Villanueva|AM|27|400|CHI|2027||<2026-01-10
Joan Cruz|AM|23|300|CHI|2027||2026-02-19
Axel Encinas|AM|22|250|ARG|||2024-01-17
Martín Hiriart|LW|21|75|CHI|2027||<2025-03-05
Kevin Méndez|RW|30|500|URU||ITA|2025-07-24
Bayron Oyarzo|RW|31|400|CHI|||<2026-01-01
Nicolás Ferreyra|ST|29|350|ARG|2027||2026-08-11
Francisco Pozzo|ST|23|300|ARG|2027||2026-01-08
Matías Campos López|ST|35|125|CHI|||<2026-01-01
Sebastián Sáez|ST|41|10|ARG||CHI|<2025-01-10` },
    { id: 'huachipato', name: 'Уачипато', city: 'Талькауано', stadium: 'Estadio Huachipato-CAP Acero', cap: 10579, colors: ['#0033a0', '#000000'], players: `
Christian Bravo|GK|20|500|CHI|||2026-01-01
Sebastián Mella|GK|21|400|CHI|2030||2025-01-01
Rodrigo Odriozola|GK|38|50|URU|2027||2025-01-01
Ignacio Cruzat|GK|19|100|CHI
Cristián Toro|CB|25|350|CHI|2028||<2026-01-01
Nicolás Vargas|CB|33|175|CHI|2027||2025-03-06
Rafael Caroca|CB|37|75|CHI|2027||<2025-01-01
Benjamín Mellado|CB|22|50|CHI|2028||2024-07-01
Lucas Velásquez|LB|20|450|CHI|2028||2025-01-01
José Ignacio Castro|LB|25|200|CHI|2028||<2025-08-08
Maicol León|RB|23|300|CHI|2027||<2024-02-14
Guillermo Guaiquil|RB|23|150|CHI|2028||2024-01-01
Carlos Herrera|DM|26|200|CHI|2028||2026-01-01
Claudio Sepúlveda|DM|34|175|CHI|2029||<2017-07-01
Ezequiel Cañete|CM|27|375|ARG|2027||2026-01-07
Javier Cárcamo|CM|21|200|CHI|2029||2024-01-01
Kevin Altez|AM|21|250|URU|||2025-07-23
Mario Briceño|LW|30|500|CHI|2028||2024-01-01
Cris Martínez|LW|33|375|PAR|2027|CHI|2019-02-05
Harold Antiñirre|LW|24|225|CHI|||2026-01-07
Juan Ignacio Figueroa|RW|23|400|CHI|2028||2024-01-01
Claudio Torres|RW|23|250|CHI|2027||2023-01-01
Maximiliano Rodríguez|ST|26|500|CHI|2028||2020-01-01
Lionel Altamirano|ST|33|450|ARG|2027||<2025-01-01
Sergio Núñez|ST|26|450|URU|2027||2026-08-19
Luciano Arriagada|ST|24|150|CHI|2027||2025-07-01` },
    { id: 'cobresal', name: 'Кобресаль', city: 'Эль-Сальвадор', stadium: 'Estadio El Cobre Codelco Salvador', cap: 11240, colors: ['#f68b1f', '#ffffff'], players: `
Alejandro Santander|GK|23|100|CHI|||2022-01-01
Matías Olguín|GK|30|100|CHI|||2026-07-05
José Tiznado|CB|32|350|CHI|2027||2025-01-01
Christian Moreno|CB|30|250|ARG|2027||2025-01-01
Franco Bechtholdt|CB|33|175|ARG|2027|CHI|2024-01-04
Benjamín Villarroel|CB|17|100|CHI
Antonio Castillo|LB|27|250|CHI|||<2026-01-01
Rodrigo Sandoval|LB|25|225|CHI|||2024-01-01
Aaron Astudillo|RB|26|300|VEN|2027|CHI|<2025-01-01
Guillermo Pacheco|RB|37|75|CHI|2027||<2026-01-11
Víctor Campos|RB|20|50|CHI|2027||2026-07-28
Juan Fuentes|DM|31|300|CHI|2027||<2026-01-06
Esteban Valencia|CM|27|300|CHI|2027|BRA|<2026-01-02
Felipe Villagrán|CM|29|200|CHI|||<2026-07-05
Benjamín Valenzuela|CM|21|150|CHI|||2025-01-01
Bryan Carvallo|AM|30|375|CHI|||2026-01-01
Matías Contreras|AM|21|100|CHI||ARG|2026-01-01
Janpol Morales|LW|28|225|PAN||ECU|2026-07-05
Benjamín Moreno|LW|20|75|CHI|||2026-01-01
Benjamín Ramírez|LW|20|25|CHI|||2025-01-01
Julián Brea|RW|27|600|ARG|2027||<2026-01-15
César Yanis|RW|30|400|PAN|||2026-01-01
Renato Huerta|RW|22|200|CHI|2027|ESP|<2026-01-09
Steffan Pino|ST|32|400|CHI|2027||2026-01-08
Franco Frías|ST|24|400|ARG|2027||2026-02-20
Sergio Carrasco|ST|21|75|CHI|2027||2024-01-01
Martín Espinoza Pino|ST|20|100|CHI|2027||2026-07-11` },
    { id: 'd_concepcion', name: 'Депортес Консепсьон', city: 'Консепсьон', stadium: 'Estadio Municipal Alcaldesa Ester Roa Rebolledo', cap: 30448, colors: ['#7b2c84', '#ffffff'], players: `
Nicolás Araya|GK|27|200|CHI|||2024-01-10
Nery Veloso|GK|39|25|CHI|2027||2026-01-05
Norman Rodríguez|CB|28|400|URU|2027||2026-01-01
Diego Carrasco|CB|31|250|CHI|||2025-01-05
Fausto Grillo|CB|33|175|ARG|2027|ESP|2026-01-04
Brayan Véjar|LB|31|300|CHI|2027||2026-01-11
Cristián Riquelme|LB|23|250|CHI|2027||<2026-07-01
Dilan Varas|LB|21|150|CHI|||2026-01-01
Ariel Cáceres|RB|26|225|CHI|||<2026-01-01
Fernando Martínez|DM|32|225|PAR|||2026-07-01
Yonatan Rodríguez|DM|33|175|URU|2027||2026-02-19
Sebastián Martínez|DM|33|50|CHI|2027||<2024-06-13
Misael Dávila|CM|35|200|CHI|2027||2026-01-01
Fabrizio Manzo|CM|28|100|CHI|||<2024-01-05
Mario Sandoval|CM|35|100|CHI|||<2025-07-29
Jorge Henríquez|AM|32|250|CHI|2027||<2026-01-01
Leenhan Romero|AM|20|50|VEN|2027||<2026-01-12
Ethan Espinoza|LW|25|450|CHI|||<2026-01-01
Joaquín Montecinos|RW|30|350|CHI|||<2026-07-15
Aldrix Jara|RW|26|350|CHI|2029||<2026-01-01
Matías Cavalleri|RW|28|150|CHI|2027|ESP|2026-01-01
Bastián Escobar|RW|20|100|CHI|||2026-01-01
Cristóbal Zambrano|RW|18|25|CHI|2027||<2026-09-28
Fernando Romero|ST|26|350|PAR|2027||2026-07-10
Diego Acosta|ST|23|250|PAR|2029||2026-07-13
Carlos Escobar|ST|36|50|CHI|2027||2024-01-30
Joaquín Larrivey|ST|42|10|ARG|2027|CHI|2025-02-03` },
  ],
});
