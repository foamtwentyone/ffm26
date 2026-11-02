// Примера Уругвая 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'uru', name: 'Примера Уругвая', short: 'Уругвай', country: 'URU', tier: 1, weekday: 0,
  autumn: { from: '08-01', rounds: 15 }, spring: { from: '02-13', rounds: 15 },
  ticket: 4, prize: [1000, 950, 900, 850, 800, 750, 700, 650, 650, 600, 550, 500, 450, 400, 350, 300],
  teams: [
    { id: 'penarol', name: 'Пеньяроль', city: 'Монтевидео', stadium: 'Estadio Campeón del Siglo', cap: 40005, colors: ['#ffd100', '#000000'], players: `
Washington Aguerre|GK|33|400|URU|2028||2026-01-01
Sebastián Britos|GK|38|50|URU|2027||2026-01-01
Nahuel Herrera|CB|21|3000|URU|2028||2025-01-01
Lucas Ferreira|CB|26|1500|URU|2027||2026-01-11
Mauricio Lemos|CB|30|500|URU|2027||2026-02-10
Germán Pezzella|CB|35|400|ARG|2028|ITA|2026-09-01
Franco Romero|CB|31|300|URU|2028||<2026-07-08
Facundo Álvez|CB|19|100|URU|2030||2026-03-02
Thiago Espinosa|LB|21|1500|URU|2027||2026-07-20
Diego Laxalt|LB|33|500|URU|2027|ITA|2026-01-16
Maximiliano Olivera|LB|34|100|URU|2027|ESP|2023-07-17
Lucas Hernández|LB|34|100|URU|2027||2023-01-20
Brian Barboza|RB|18|250|URU|2030||2026-05-01
Ignacio Alegre|RB|20|50|URU|2029||2026-08-01
Eric Remedi|DM|31|1000|ARG|2027||2025-02-08
Jesús Trindade|DM|33|400|URU|2027||2025-07-08
Nicolás Fernández|CM|28|2000|URU|2029||2026-02-22
Eduardo Darias|CM|28|1000|URU|2028||<2025-01-01
Tomás Olase|CM|22|50|URU|2029||2024-01-01
Stiven Muhlethaler|RW|20|300|URU|2028||2025-06-01
Leonardo Fernández|AM|27|4000|URU|2028||2025-01-05
Leandro Umpiérrez|AM|22|1000|URU|2028||2025-02-07
Franco González|AM|22|250|URU|2027||<2023-08-17
Leonel Jaime|LW|20|3000|ARG|2027||2026-07-01
Luis Angulo|LW|22|1500|COL|2027||2026-02-05
Brandon Álvarez|LW|19|100|URU|2028||2026-02-21
Gonzalo Gelini|RW|19|250|ARG|2027||2026-08-27
Javier Cabrera|RW|34|200|URU|2027||2024-01-01
Matías Arezo|ST|23|4000|URU|2030||2026-07-08
Facundo Batista|ST|27|600|URU|2028||2026-01-05
Jonathan Rodríguez|ST|33|500|URU|2028||2026-07-24
Abel Hernández|ST|36|100|URU|2028||<2026-01-01
Luciano González|ST|20|50|URU|2028||2026-01-01` },
    { id: 'nacional_uru', name: 'Насьональ', city: 'Монтевидео', stadium: 'Estadio Gran Parque Central', cap: 34000, colors: ['#ffffff', '#0033a0'], players: `
Ignacio Suárez|GK|24|250|URU|2027||2019-07-01
Luis Mejía|GK|35|150|PAN|2028|URU|2024-01-13
Alexis Martín Arias|GK|34|150|ARG|2029||2026-07-08
Francisco Calvo|CB|34|400|CRC|2028||2026-07-08
Tomás Viera|CB|20|350|URU|2029||2025-08-01
Agustín Rogel|CB|29|300|URU|2028|ITA|2026-02-04
Sebastián Coates|CB|36|250|URU|2027|ESP|2024-07-06
Luciano Rodríguez|CB|19|100|URU|2027||2026-09-01
Benjamín Núñez|LB|23|375|URU|2029||2026-07-08
Camilo Cándido|LB|31|300|URU|2027|ITA|2026-02-06
Gastón Martirena|RB|26|4000|URU|2027||2026-08-26
Emiliano Ancheta|RB|27|1000|URU|2028||<2025-01-13
Nicolás Rodríguez|RB|35|150|URU|2027||<2024-08-08
Bruno Zuculini|DM|33|250|ARG|2028|ITA|2026-07-01
Juan Ignacio García|DM|20|150|URU|2028|ITA|2026-05-22
Luciano Boggio|CM|27|1200|URU|2028|ITA|2025-02-03
Santiago Silva|CM|22|800|URU|2028||2026-07-20
Agustín Dos Santos|CM|18|450|URU|2028||2025-09-01
Lucas Rodríguez|CM|33|250|URU|2027||<2025-07-14
Luciano Gonzalez|CM|18|50|URU|2029||2026-01-01
Rubén Botta|AM|36|100|ARG|2028|ITA|2026-08-04
Alejandro Martínez|LW|29|500|ARG|2027||2026-09-01
Rodrigo Martínez|LW|18|300|URU|2029||2026-01-01
Tomás Verón Lupi|RW|26|900|ARG|2027|ITA|2026-01-01
Nahuel Gelos|RW|21|150|URU|2028||2026-09-01
Maxi Gómez|ST|30|2000|URU|2028||<2025-07-01
Maximiliano Silvera|ST|29|1700|URU|2029||<2026-01-02
Tiziano Correa|ST|22|450|URU|2028|ITA|<2026-07-08
Pavel Núñez|ST|20|300|URU|2028||2026-03-19` },
    { id: 'torque', name: 'Монтевидео Сити Торке', city: 'Монтевидео', stadium: 'Parque Alfredo Víctor Viera', cap: 7420, colors: ['#6cace4', '#ffffff'], players: `
Gastón Rodríguez|GK|32|150|URU|2027|CHI|2026-01-23
Franco Torgnascioli|GK|36|100|URU|2027||2025-07-17
Kevin Silva|CB|23|400|ARG|2027||2026-02-10
José Tarán|CB|21|250|URU|||2025-07-01
Nicolás Pérez|CB|18|100|URU|||2026-06-01
Gary Kagelmacher|CB|38|50|URU|2027|GER|2025-01-01
Brian Gutiérrez|CB|19|100|ARG|2027||2026-08-04
Facundo Silvera|LB|29|450|URU|2027||<2025-07-15
Nahuel Leivas|LB|20|250|URU|2028||2024-02-01
Santiago Zampieri|LB|19|200|ARG|2027||2026-08-11
Eduardo Agüero|RB|22|1000|URU|2028||2023-06-01
Ezequiel Busquets|RB|26|350|URU|2027|ITA|2025-01-03
Valentino Würth|RB|19|150|URU|2029||2026-01-09
Pablo Siles|DM|29|450|URU|2027||2025-01-16
Franco Pizzichillo|CM|30|500|URU|2027|ITA|2018-07-27
Sebastián Cáceres|CM|26|400|URU|2027||<2026-01-10
Gonzalo Montes|CM|31|350|URU|2027|ITA|2025-07-31
Lucas Duré|CM|21|250|URU|2027||2026-01-01
Diogo Guzmán|AM|20|300|ARG|2029||2024-08-02
Luka Andrade|LW|19|300|ARG|2028||2025-01-03
Facundo Martínez|LW|18|100|URU|2030||2029-12-31
Esteban Obregón|RW|25|1600|ARG|2028||2024-01-22
Ramiro Lecchini|RW|19|500|URU|2030|CRO|2026-01-01
Juan Quintana|RW|26|300|URU|2027||2026-01-09
Salomón Rodríguez|ST|26|2000|URU|2027||2026-01-08
Nahuel Da Silva|ST|21|700|URU|2029||2024-08-19` },
    { id: 'defensor', name: 'Дефенсор Спортинг', city: 'Монтевидео', stadium: 'Estadio Luis Franzini', cap: 18000, colors: ['#5c2d91', '#ffffff'], players: `
Lucas Machado|GK|28|250|URU|2027||2025-01-06
Kevin Dawson|GK|34|250|URU|2028||2024-01-01
Bruno Simone|GK|22|100|URU
Mateo Caballero|CB|19|350|URU|2028||2025-10-03
Edgar Elizalde|CB|26|300|URU|2027|ESP|2026-07-20
Francisco Sorondo|CB|18|300|URU|2028|BRA|2026-01-01
Geanfranco Rodríguez|CB|20|150|URU|2028||2025-01-05
Guillermo de los Santos|CB|35|50|URU|2027||2023-01-10
Axel Frugone|LB|21|800|URU|2028|ITA|<2026-01-22
Lucas Paul de los Santos|DM|25|500|URU|2027||2025-07-17
Germán Barrios|CM|22|600|URU|2029||2025-01-01
Nicolás Wunsch|CM|23|500|URU|2028||2024-01-01
Martín Rabuñal|CM|32|300|URU|2027||<2026-07-08
Juan Manuel Jorge|CM|22|150|URU|2027|ESP|2023-08-01
Erico Cuello|CM|21|75|URU|2028||2025-01-08
Xavier Biscayzacú|AM|21|800|MEX|2028|URU|2025-01-01
Tomás Pozzo|AM|26|250|ARG|2027|ITA|2026-07-29
Nicolás Scotti|LW|16|75|URU||ITA|2026-01-01
Lucas Agazzi|RW|21|2300|URU|2028|ITA|2023-01-01
Alex Perdomo|RW|24|325|URU|||2026-07-08
Alan Torterolo|RW|18|300|URU|2027|ITA|2025-08-01
Facundo Castro|RW|31|250|URU|2027|ITA|2026-01-12
Nicolás Medina|RW|23|150|ARG|2027||2026-01-05
José Neris|ST|26|500|URU|2027||2026-07-28
Brian Montenegro|ST|33|400|PAR|2027|ITA|2026-01-03
Lautaro Navarro|ST|18|200|URU|2027||2025-08-01` },
    { id: 'juventud', name: 'Хувентуд', city: 'Лас-Пьедрас', stadium: 'Estadio Municipal Parque Artigas', cap: 5500, colors: ['#ffffff', '#000000'], players: `
Fabrizio Correa|GK|25|200|URU|2028||<2026-07-03
Nicolás Ruotola|GK|22|50|URU
Sebastián Sosa|GK|40|25|URU|2027|MEX|2025-01-19
David Morosini|CB|22|600|URU|2029||2023-01-01
Patricio Pernicone|CB|25|450|ARG|2027||2026-01-31
Franco Risso|CB|23|300|URU|2027||2026-01-01
Martín Cáceres|CB|39|50|URU|2027||2026-02-02
Renzo Rabino|LB|28|350|URU|2027||<2026-01-29
Kevin Rolón|LB|25|300|URU|2028||2026-07-03
Emmanuel Más|LB|37|75|ARG|2027|ITA|2024-07-24
Agustín Pérez|LB|22|50|URU|2027||2026-12-31
Federico Barrandeguy|RB|30|400|URU|2027||2025-01-01
Ignacio Mujica|RB|20|150|URU|2029||2026-01-01
Mauricio Rodríguez|RB|21|75|URU|2027||2026-01-01
Rodrigo Chagas|DM|23|500|URU|2028||<2025-08-04
Leonel Roldán|DM|22|450|ARG|2027||2026-01-19
Emanuel Cecchini|DM|29|300|ARG|2027|ITA|2026-02-15
Ramiro Peralta|CM|23|750|ARG|2028||2025-07-01
Facundo Pérez|CM|26|350|URU|2028|FRA|2024-03-03
Gonzalo Gómez|AM|21|300|URU|2028||2026-01-01
Gastón Pereiro|AM|31|250|URU|2027||2026-03-16
Mirko Díaz|AM|20|100|ARG|2027||2026-09-01
Alejo Cruz|LW|26|600|URU|2027||<2026-01-24
Bruno Arady|LW|19|200|URU|2027|ITA|<2026-07-14
Martín Boselli|LW|32|100|URU|2027|ESP|2025-01-03
Agustín Alaniz|RW|24|300|URU|2029||2026-01-29
Pablo Lago|RW|19|300|URU|2028||2026-01-01
Agustín Rodríguez|ST|28|900|URU|2029||2020-03-05
Fernando Mimbacas|ST|24|900|URU|2028||2026-02-01
Bruno Larregui|ST|25|500|URU|2028||2023-01-01` },
    { id: 'boston_river', name: 'Бостон Ривер', city: 'Монтевидео', stadium: 'Estadio Campeones Olímpicos', cap: 5000, colors: ['#c8102e', '#ffffff'], players: `
Bruno Antúnez|GK|23|500|URU|2027||2024-01-01
Juan González|GK|33|100|URU|2027|MEX|2026-01-18
Mateo Rivero|CB|22|600|URU|2029||<2025-01-30
Ignacio Fernandez|CB|17|350|URU|2030||2026-01-01
Marco Mancebo|CB|25|250|URU|2027||<2021-08-27
Agustín Aguirre|CB|22|150|ARG|||2026-01-01
Martín González|CB|32|150|URU|2027||<2024-08-21
Fredy Martínez|LB|25|450|URU|2029||<2025-01-01
Jairo O'Neil|LB|25|250|URU|2027||2025-01-10
Facundo Saravia|LB|24|75|URU|2027||<2026-07-17
Lautaro Vázquez|RB|20|300|URU|||2026-01-06
Juan Acosta|RB|32|250|URU|2027||<2024-02-03
Kevin Rodríguez|RB|21|200|URU|2028||<2026-08-31
Rodrigo Saravia|DM|26|700|URU|2028|ITA|2026-07-01
Marco Oroná|DM|21|100|URU|2027||2026-08-04
Agustín Amado|CM|25|450|URU|2027||2023-09-20
Gastón Ramírez|CM|35|50|URU|2027||2026-01-02
Facundo Muñoa|AM|22|500|URU|2028||2028-06-30
Yair González|AM|24|450|ARG|2027||2026-01-14
Franco Pérez|LW|25|200|URU|2027||2024-01-24
Facundo Valdez|LW|20|200|ARG|2027||2026-09-01
Leo Suárez|RW|30|1000|ARG|2027|ESP|2026-08-22
Leandro Suhr|RW|29|450|URU|2027||2023-01-05
Facundo Aristegui|RW|18|200|URU|2029||2026-07-10
Francisco Bonfiglio|ST|24|450|ARG|2027|ITA|2026-01-05
Felipe Avenatti|ST|33|250|URU|2027|ITA|2026-07-08
Nicolás Siri|ST|22|250|URU|2028||<2026-07-23
Facundo Rodríguez|ST|31|150|URU|2027||2024-06-19` },
    { id: 'liverpool_uy', name: 'Ливерпуль (Монтевидео)', city: 'Монтевидео', stadium: 'Estadio Belvedere', cap: 8384, colors: ['#0033a0', '#000000'], players: `
Mathías Bernatene|GK|26|450|URU|2027||2026-01-02
Martín Campaña|GK|37|100|URU|2027|ITA|<2026-01-08
Enzo Castillo|CB|25|500|URU|2028||<2024-08-02
Santiago Strasorier|CB|26|400|ARG|2027||2026-01-16
Santiago Laquidaín|CB|25|300|ARG|2027|ITA|2026-01-01
Diego Romero|LB|26|600|URU|2027||<2026-01-03
Agustín Cayetano|LB|27|350|URU|2027||2022-01-10
Kevin Lewis|LB|27|300|URU|2027||2026-01-15
Facundo Perdomo|RB|27|650|URU|2028||2024-01-11
Rafael Haller|RB|26|300|URU|||<2026-08-21
Jean Rosso|RB|29|250|URU|||2024-01-29
Santiago Milano|DM|23|125|URU|2028||<2025-01-17
Nicolás Garayalde|CM|27|550|ARG|2027||2026-02-03
Ezequiel Olivera|CM|22|300|URU|2028||<2026-01-01
Matías Mir|RW|23|250|URU|2029|ESP|<2025-08-27
Lucas Acosta|AM|24|350|URU|2027||<2024-07-01
Thiago Brizuela|AM|17|300|URU|||2026-01-01
Gonzalo de Mello|AM|21|125|URU|2028||2026-01-01
Federico Martínez|LW|30|600|URU|2027|ESP|2026-01-11
Ramiro Degregorio|RW|23|300|ARG|2027||2026-01-20
Diego Zabala|RW|35|150|URU|2027||2026-01-29
Renzo Machado|ST|21|900|URU|2029|ITA|2023-01-01
Facundo Barceló|ST|33|250|URU|2027|ITA|2026-01-10
Rubén Bentancourt|ST|33|175|URU|2027|ITA|2026-01-24` },
    { id: 'albion', name: 'Альбион', city: 'Монтевидео', stadium: 'Parque Dr. Enrique Falco Lichtemberger', cap: 2000, colors: ['#c8102e', '#0033a0'], players: `
Sebastián Jaume|GK|22|700|URU|2028|NED|2022-07-01
Santiago Silva|GK|27|350|URU|||<2026-09-01
Danilo Lerda|GK|39|10|ARG|2027|URU|2026-01-16
Francisco Couture|CB|23|300|URU|2027|ITA|2026-01-10
Matías De los Santos|CB|33|100|URU|2027||<2026-01-10
Brandon Llana|CB|20|100|URU|||2026-09-01
Pablo Lacoste|CB|38|10|URU|2027||<2025-01-01
Mauro Marichal|CB|18|100|URU|||2026-08-19
José Álvarez|LB|31|400|URU|2027||<2026-01-01
Federico Puente|LB|30|350|URU|2027||2025-01-10
Andrés Romero|RB|28|350|URU|2027||<2025-01-09
Agustín Pereira|RB|25|300|URU|2027||<2026-01-23
Tomás Moschión|DM|26|500|ARG|2027||2025-01-21
Pablo Alcoba|DM|17|250|URU||ESP|2025-05-01
Francisco Ginella|CM|27|550|URU|2027|ITA|<2026-01-01
Santiago Costa|CM|26|300|URU|2027||2026-03-08
Román Gutiérrez|CM|22|25|URU|2027|ESP|2024-01-01
Felipe Serrés|CM|20|100|URU||ITA|2026-07-08
Ignacio Neira|AM|28|150|URU||ESP|2026-08-06
Hernán Toledo|LW|30|400|ARG|2027||<2026-01-05
Agustín Vera|LW|22|300|URU|2027||<2026-02-12
Lucas Rodríguez|LW|29|200|URU|2027||2026-01-16
Mateo Alcoba|LW|17|25|URU||ESP|2025-05-01
Carlos Airala|RW|24|600|ARG|2027||<2025-01-13
Baltasar Barcia|RW|25|500|URU|2027||<2026-09-01
Briam Acosta|RW|29|200|URU|2027||2026-01-23
Iker Zufiaurre|RW|21|125|ARG|2027||2026-08-05
Álvaro López|ST|28|750|ARG|2027||2026-01-06
Tobías Figueroa|ST|34|100|ARG|2027||2026-01-23` },
    { id: 'racing_uy', name: 'Расинг (Монтевидео)', city: 'Монтевидео', stadium: 'Parque Osvaldo Roberto', cap: 8500, colors: ['#00843d', '#ffffff'], players: `
Federico Varese|GK|23|400|URU|2027|ITA|2026-01-13
Facundo Machado|GK|22|250|URU|2027|ITA|<2025-01-01
Felipe Álvarez|CB|22|800|ARG|2029||2025-08-02
Ramiro Brazionis|CB|24|700|URU|2028||<2025-01-01
Facundo Parada|CB|26|200|URU|2027||<2026-01-07
Elías Bentancor|CB|20|75|URU|||2026-07-01
Diego Cheuquepal|LB|19|150|ARG|2028||2025-08-01
Martín Ferreira|LB|34|100|URU|2027||<2024-01-12
Guillermo Cotugno|RB|31|400|URU|2027|ITA|<2024-01-06
Facundo González|RB|21|300|URU|2027||<2025-08-01
Matías Unyicio|RB|19|100|ARG|2028||2026-07-28
Juan Pablo Bosca|DM|21|450|URU|2028||2025-01-01
Agustín De la Cuesta|DM|20|300|ARG|2030||2026-08-09
Lucca Loprete|DM|20|100|URU|2028||2026-07-01
José Varela|CM|38|10|URU|2027||2020-07-02
Yuri Oyarzo|LW|18|1000|URU|2029||2025-05-01
Álex Vázquez|AM|24|600|URU|||2025-01-24
Franco Suárez|LW|23|150|URU|2029||<2025-08-04
Esteban Da Silva|RW|25|500|URU|2028||2024-08-30
Rodrigo Gadea|RW|20|125|URU|||2026-07-01
Sebastián da Silva|ST|24|400|URU|2029||2026-01-07
Tomás Habib|ST|24|350|ARG|2027|ITA|2026-01-01
Iván Manzur|ST|21|300|ARG|2028||2025-07-12
Nicolás Sosa|ST|30|150|URU|2027||2024-01-01` },
    { id: 'central_esp', name: 'Сентраль Эспаньол', city: 'Монтевидео', stadium: 'Estadio Parque Palermo', cap: 4072, colors: ['#c8102e', '#0033a0'], players: `
Federico Pintado|GK|25|250|URU|2027||<2026-08-27
Emiliano Márquez|GK|24|150|URU|2027||<2026-01-05
Rodolfo|GK|35|100|BRA|2027||2024-03-20
Samuel Rodríguez|GK|20|25|URU|||2026-01-14
Ignacio Rodríguez|CB|22|500|URU|2028||<2026-01-22
Matías González|CB|23|400|URU|||<2026-07-16
Andrés Madruga|CB|22|300|URU|||<2026-09-01
Logan Ponce|CB|24|250|URU|2027||2024-06-13
Mateo Urrutia|CB|23|100|URU|2027||2024-02-01
Alejandro Villoldo|CB|37|25|URU|2027||2024-04-26
Ernesto Aramburú|CB|27|25|URU|2027||2023-01-01
Juan Herrera|CB|21|100|URU|||2026-01-21
Andrés Caro|CB|20|100|URU|||2026-08-11
César Nunes|LB|27|400|BRA|2027||2026-02-04
Juan Ignacio Dupont|LB|22|250|URU|2027||2025-02-25
Lautaro Gandulfo|LB|22|200|URU|2027||2025-03-07
Luciano Fernández|RB|24|400|URU|2027||2025-02-11
Julián Pou|RB|22|150|URU|||<2026-09-01
Guillermo Gandolfo|DM|24|500|URU|2027||2025-02-18
Marcos Montiel|DM|31|300|URU|2027||2026-01-29
Isaac Méndez|DM|25|200|URU|||2025-08-12
Davi Melo|DM|20|100|BRA|2027||2026-08-14
Franco Muñoz|CM|27|350|URU|2027||2025-03-06
Lucas Pino|AM|21|450|URU|2027||<2026-02-04
Facundo Yocco|AM|25|50|URU|2027||2023-04-26
Máximo Alonso|LW|24|300|URU|2027|ESP|2026-01-19
Exequiel Mereles|LW|21|150|URU|2028||<2026-07-07
Mariano Aguilera|RW|22|500|ARG|2027||2026-02-21
Fernando Camarda|RW|22|350|URU|2027||2025-03-07
Facundo Sosa|ST|23|250|URU|2027||<2026-01-31
Santiago Sequeira|ST|21|125|URU|2027||2025-02-06
Jonathan Dellarossa|ST|26|125|ARG|||2026-08-01
Francisco Montoro|ST|22|125|ARG||ITA|2026-08-08
Facundo Borges|ST|23|100|URU|2027||2026-01-01
Ignacio Gonella|ST|21|50|URU|||2026-01-01
Matías Kusmanis|ST|22|25|URU|2027|FRA|2026-01-19
Raúl Tarragona|ST|39|10|URU|2027||2024-06-21` },
    { id: 'maldonado', name: 'Депортиво Мальдонадо', city: 'Мальдонадо', stadium: 'Estadio Domingo Burgueño Miguel', cap: 39152, colors: ['#c8102e', '#00843d'], players: `
Diego Segovia|GK|26|400|URU|2027||2025-01-09
Adriano Freitas|GK|29|250|URU|2027||2024-08-15
Nicolás Forastiero|GK|28|225|ARG|2027||2026-08-27
Guillermo de Amores|GK|32|100|URU|2028|ITA|2026-10-22
Nicolás Fuica|CB|22|300|URU|2029|ITA|2024-01-01
Joaquín Fernández|CB|27|300|URU|2027|ITA|2026-01-29
Hernán Petryk|CB|32|125|URU|2027|POL|<2024-01-09
Hernán Menosse|CB|39|10|URU|2027|ITA|<2024-01-15
Facundo Tealde|CB|37|10|URU|2027||2017-02-16
Sebastián Tormo|LB|25|325|URU|2028||<2024-08-14
Juan Ramos|LB|30|300|URU|2027|ITA|2026-01-13
Juan Martín Ginzo|RB|24|450|ARG|2027|ESP|2024-07-12
Camilo Mayada|RB|35|100|URU|2028|ARG|<2026-08-03
Franco Marino|RB|19|25|ARG|2029|ITA|2024-06-01
Santiago Cartagena|DM|24|500|URU|2027||<2023-08-15
Maximiliano González|DM|22|450|ARG|2027||2026-01-23
Sebastián González|DM|26|275|URU|2027||2019-01-01
Lucas Núñez|DM|25|250|URU|2027||2020-07-01
Adrian Vila|CM|24|175|URU|2027||2026-01-02
Bruno Centeno|RW|21|25|URU|2027||2023-02-01
Gonzalo Sosa|AM|21|150|ARG|2027||2026-08-05
Santiago Ramírez|LW|25|450|URU|2027|ITA|<2024-02-08
Guillermo López|LW|23|300|URU|2027||<2026-01-01
Gonzalo Larrazábal|LW|23|250|URU|2027||2024-02-07
Lautaro Ibáñez|LW|23|100|URU|||2026-07-09
Christian Tabó|RW|32|250|URU|2027||2026-01-08
Renato César|RW|33|200|URU|2027||2024-01-05
Maximiliano Noble|ST|29|500|URU|2028||2024-02-12
Cayetano Bolzán|ST|20|100|ARG|2027||2026-07-16
Emiliano Mozzone|ST|28|25|URU|2027|ITA|2026-01-02` },
    { id: 'progreso', name: 'Прогресо', city: 'Монтевидео', stadium: 'Estadio Abraham Paladino', cap: 3200, colors: ['#ffd100', '#c8102e'], players: `
Renzo Bacchia|GK|27|325|URU|2027|ITA|<2026-07-08
Andrés Mehring|GK|32|200|ARG|2027|LUX|2026-01-01
Agustín Requena|GK|27|100|URU|2027||2026-01-05
Lautaro Fernández|GK|20|100|URU|||2026-07-01
Hernán Carroso|CB|20|300|URU|2027||2025-01-01
Mauro Martín|CB|27|250|URU|2027||2023-01-10
Federico Andueza|CB|29|200|URU|2027|ITA|2026-01-10
Sebastián Cardozo|CB|31|200|URU|2027||2026-01-05
Marco Saravia|CB|27|200|PER|||<2026-08-07
Gastón Silva|CB|32|200|URU|2027|ITA|2026-04-28
Federico García|CB|20|150|URU|2029||2026-01-01
Ayrton Cougo|LB|30|300|URU|2027||2025-04-18
Emiliano Álvarez|RB|25|300|URU|||2026-07-08
Gianfranco Trasante|RB|27|250|URU|2027||<2025-01-06
Agustín Pinheiro|DM|24|400|URU|2027||2025-01-01
Ramiro Cristóbal|DM|30|225|URU|2027||2026-07-08
Lorenzo Couture|CM|21|100|URU|2027|ITA|2026-07-27
Agustin Paz|CM|27|75|ARG|2027||2026-01-05
Gonzalo Silva|AM|27|150|ARG|2028||2025-01-01
Agustín Codagnone|AM|21|50|URU|2028||2026-01-05
Nahuel López|LW|19|1000|URU|2027||2025-07-09
Agustín Ocampo|LW|28|200|URU|2027||2026-07-08
Facundo de León|RW|22|250|URU|2027||2026-01-01
Nahuel Acosta|RW|27|175|URU|2027||2026-08-05
Santino Bruschi|RW|20|50|URU|2027||<2026-08-14
Joaquín Solleiro|RW|20|25|URU|2028||2026-01-01
Maximiliano Juambeltz|ST|24|350|URU|2027||2026-07-08
Lucas Viana|ST|22|200|URU|||2026-08-14
Matteo Copelotti|ST|22|175|URU|2027|ITA|2025-01-10
Gary Silva|ST|22|100|URU|2027||2025-01-12
Jonathan Dos Santos|ST|34|75|URU|2027||2026-01-29` },
    { id: 'wanderers_uy', name: 'Монтевидео Уондерерс', city: 'Монтевидео', stadium: 'Parque Alfredo Víctor Viera', cap: 7420, colors: ['#ffffff', '#000000'], players: `
Agustín Buffa|GK|28|400|URU|2027||2026-01-07
José Río|GK|22|125|URU|2027||<2025-07-28
Santiago Benítez|CB|23|400|URU|2027||<2026-02-04
Nicolás Cabral|CB|27|300|ARG|2027||2026-07-10
Fabricio Formiliano|CB|33|300|URU|2028|ITA|2026-01-01
Mateo Acosta|CB|23|250|URU|2027||2024-10-10
Leandro Zazpe|CB|32|200|URU|2027||2025-01-05
Darlin Mencía|LB|23|250|HON|2027||2026-01-08
Guillermo Borthagaray|LB|21|125|URU|2027||2025-01-01
Nahuel Furtado|RB|28|500|URU|2027||<2026-01-21
Alan García|RB|27|300|URU|2027||<2025-07-28
Gonzalo Freitas|DM|35|125|URU|2027||2026-01-21
Sergi Oriol|DM|22|100|ESP|2027||<2026-01-02
José Alberti|CM|29|450|URU|2027||2026-01-08
Nicolás Queiróz|CM|30|300|URU|2027||2024-08-05
Jonás Luna|AM|21|350|ARG|2028||2025-08-05
Jonathan Urretaviscaya|AM|36|50|URU|2027|ESP|<2026-01-01
Rodrigo Rivero|LW|30|300|URU|2027||2025-01-13
Luciano Cosentino|RW|25|450|URU|2027||2022-06-01
Facundo Labandeira|RW|30|400|URU|2027||2026-03-03
Renzo Sánchez|RW|22|100|URU|2027||<2026-07-16
Santiago Guzmán|ST|22|100|URU|2027||2024-01-01
Joaquín Zeballos|ST|29|250|URU|2027||2025-01-01
Santiago Ormeño|ST|32|175|PER|2027|MEX|2026-07-09` },
    { id: 'cerro_largo', name: 'Серро Ларго', city: 'Мело', stadium: 'Estadio Monumental Luis Tróccoli', cap: 25000, colors: ['#0033a0', '#ffffff'], players: `
Pedro González|GK|27|300|PAR|2027||2026-01-08
Lukas González|GK|24|100|URU|2027||2026-01-01
Alexis Piegas|CB|24|300|URU|2027||2026-01-12
Lucas Correa|CB|30|300|URU|2027|ITA|2025-01-27
Martín Gianoli|CB|26|300|URU|2027||2026-08-25
Nicolás Ramos|CB|21|250|URU|2027|USA|2026-02-06
Axel Prado|CB|23|100|URU|2027||<2026-07-09
Robert Ergas|LB|28|700|URU|2027||2026-10-02
Santiago Franca|LB|24|300|URU|2027||2026-01-01
Mateo Monserrat|LB|21|25|ARG|2027||2026-01-10
Facundo Acosta|LB|20|100|URU|||2026-07-10
Alexander Hernández|RB|22|300|URU|2028||<2026-01-01
Facundo Alvez|RB|20|100|URU|2028||2026-01-10
Emiliano Jourdan|DM|22|200|URU|2027||2026-01-01
Nicolás Bertocchi|DM|37|25|ARG|2027|ITA|2024-08-01
Santiago Marcel|CM|24|350|URU|2027||2026-01-01
Mario García|CM|27|250|URU|2027||<2025-07-09
Sebastián Assís|CM|33|200|URU|2027||2024-01-26
Ezequiel Cabral|CM|28|100|URU|||2026-07-09
Axel Pandiani|AM|26|450|URU|2027|ITA|2026-01-01
Brian Lozano|LW|32|300|URU|||<2026-08-12
Andrés Córdoba|LW|29|275|COL|2027||2026-07-10
Bruno Hernández|LW|22|150|URU|2027||<2025-01-01
Lucas Píriz|LW|24|25|URU|2027||2026-07-09
Alfonso de Luca|RW|21|250|URU|2027||<2026-07-10
Alexis Segovia|RW|22|225|ARG|2027||2026-08-12
Gustavo Viera|ST|26|175|URU|2027||<2026-01-07
Elías de León|ST|21|150|URU|2027||<2026-07-17
Diego Daguerre|ST|21|100|URU|2027||2026-01-05
Ihojan Pérez|ST|20|75|URU|2027||2025-07-28
Borys Barone|ST|32|50|URU|2027||2026-02-24` },
    { id: 'danubio', name: 'Данубио', city: 'Монтевидео', stadium: 'Estadio Jardines del Hipódromo', cap: 14401, colors: ['#ffffff', '#000000'], players: `
Mauro Goicoechea|GK|38|25|URU|2027|ITA|<2023-01-02
Kevin Martínez|GK|20|100|URU|||2025-01-01
Emiliano Velázquez|CB|32|300|URU|2027||<2025-01-15
Mauro Brasil|CB|27|300|URU|2027||2026-07-08
Mateo Rinaldi|CB|26|250|ARG|2027||2025-08-13
Martín Jourdan|CB|25|100|URU|2027||2026-01-06
Felipe Cabrera|CB|19|100|URU|||2026-01-01
Gonzalo Rodríguez|CB|21|100|URU|2027||2026-07-01
Tomás Cavanagh|LB|25|300|ARG|||2026-01-17
Leandro Sosa|LB|35|100|URU|2027|ITA|2017-08-10
Facundo Balatti|RB|18|300|URU|2028||2026-01-01
Iván Rossi|DM|33|350|ARG|2027|ITA|<2026-02-18
Sebastián Rodríguez|DM|34|250|URU|2027|ESP|2026-01-20
Juan Millán|DM|25|200|URU|2027||2023-01-01
Emiliano Figueroa|CM|19|100|URU|2029||2026-01-01
Joaquín Trasante|CM|27|100|URU|2027||2026-07-08
Alexander Velázquez|LW|19|200|URU|||2025-01-01
Mateo Peralta|AM|20|700|URU|2028||2024-01-01
Axel Montaña|AM|20|150|URU|2027||2024-01-01
Cristhian Tizón|LW|30|250|URU|2027||2026-09-01
Maicol Ferreira|RW|28|400|URU|2027||2026-01-07
Enzo Cabrera|RW|22|350|URU|2028|ITA|2026-01-06
Enrique Femia|RW|24|350|URU|2027||<2024-07-31
Sebastián Fernández|ST|41|25|URU|2027|ESP|<2022-01-06
Bautista Tomatis|ST|22|300|ARG|2027|ITA|<2026-07-22
John Kleber|ST|26|150|BRA|2027||2026-07-08
Ivo Costantino|ST|27|150|ARG|2027||2026-01-01
Hugo Silveira|ST|33|25|URU|2027||<2026-07-08
Diego Píriz|ST|20|25|URU|2027||2024-01-01` },
    { id: 'cerro', name: 'Серро', city: 'Монтевидео', stadium: 'Estadio Monumental Luis Tróccoli', cap: 25000, colors: ['#6cace4', '#c8102e'], players: `
Darío Denis|GK|34|50|URU|||2026-08-04
Yonatan Irrazábal|GK|38|25|URU|2028||2025-01-20
Diego Capdevila|GK|23|25|URU|2027||2026-01-30
Nahuel Arena|CB|28|300|ARG|2027||2026-07-08
Juan Cruz Guasone|CB|25|200|ARG|2027|ITA|2026-01-29
Mauro Villar|CB|25|175|ARG|2027|ITA|2026-08-31
Ariel Lima|CB|21|150|URU|2027||<2026-01-12
Facundo Butti|CB|26|100|ARG|2027||2026-01-13
Martín Farías|CB|22|25|URU|2027||2025-07-10
Francisco Bregante|LB|22|300|URU|2028||<2026-01-05
Gianni Rodríguez|LB|32|175|URU|2027||2026-01-13
Damián Suárez|RB|38|25|URU|2027|ESP|<2026-02-25
Alejo Macelli|DM|28|400|ARG|2027||2025-07-01
Jairo Amaro|DM|23|250|URU|2027||2026-01-05
Emiliano Sosa|DM|28|150|URU|2027||2025-07-14
Agustín Miranda|CM|33|150|URU|2027|ESP|<2025-01-08
Rodrigo Mederos|CM|21|125|URU|2027||2026-01-07
Brian Quinteros|CM|21|50|URU|2027||2026-02-05
Leonardo Pais|RW|32|200|URU|2027||<2026-07-30
Pablo Nongoy|AM|22|250|URU|2027||2026-02-01
Ezequiel Forclaz|AM|23|200|ARG|2027||2026-08-11
Brahian Alemán|AM|36|50|URU|2027||2026-02-01
Pablo Da Silveira|AM|22|25|URU|||2025-02-06
Nahuel Sena|LW|22|150|URU|2027||2026-01-30
Alejandro Severo|RW|21|300|URU|2027||<2026-01-06
Cristian Barros|RW|26|300|URU|2027||2026-01-18
Emiliano Rodríguez|ST|23|400|URU|2027||2026-08-14
Augusto Cambón|ST|21|400|URU|2027||<2026-01-12
Bruno Morales|ST|21|125|URU|2027||2025-08-23
Tiago Rijo|ST|21|50|URU|2027||2026-01-01
Jeison Cubas|CM|20|100|PER|2028|URU|2026-01-27` },
  ],
});
