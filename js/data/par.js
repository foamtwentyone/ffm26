// Примера Парагвая 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'par', name: 'Примера Парагвая', short: 'Парагвай', country: 'PAR', tier: 1, weekday: 0,
  autumn: { from: '08-01', rounds: 11 }, spring: { from: '02-27', rounds: 11 },
  ticket: 3, prize: [1000, 950, 850, 800, 750, 700, 600, 550, 500, 450, 350, 300],
  teams: [
    { id: 'olimpia', name: 'Олимпия', city: 'Асунсьон', stadium: 'Estadio ueno Defensores del Chaco', cap: 42354, colors: ['#ffffff', '#000000'], players: `
Gastón Olveira|GK|33|500|PAR|2027|URU|2022-01-01
Sebastián Lentinelly|GK|29|500|URU|2027|ITA|2026-01-01
Lucas Verza|GK|25|200|PAR|2027||2025-01-01
Mateo Gamarra|CB|26|2000|PAR|2027||2026-01-01
Gustavo Vargas|CB|25|1500|PAR|2027||<2025-07-01
Juan Vera|CB|27|600|PAR|2027||<2026-01-05
Bryan Bentaberry|CB|29|450|URU|2028||2026-01-05
Esteban Matus|LB|24|1000|CHI|2031||2026-07-31
Alan Rodríguez|LB|26|1000|PAR|2027||2026-01-05
César Olmedo|RB|23|800|PAR|2027||2024-01-01
Tim Payne|RB|32|350|NZL|2028||2026-07-13
Raúl Cáceres|RB|35|150|PAR|2027||2026-01-01
Richard Ortiz|DM|36|150|PAR|2027|ESP|2018-01-01
Richard Sánchez|CM|30|2000|PAR|2027||2026-01-22
Juan Fernando Alfaro|CM|26|1000|ARG|2030||<2026-01-01
Alex Franco|CM|25|600|PAR|2027||2023-01-01
Javier Dominguez|CM|26|450|PAR|2027||2025-01-07
Sebastián Quintana|CM|23|375|PAR|2027||<2022-07-01
Rubén Lezcano|AM|22|3500|PAR|2027||2026-02-26
Eduardo Delmas|AM|19|1200|PAR|2030||2026-01-01
Iván Leguizamón|LW|24|1500|PAR|2028|ARG|2025-01-06
Pedro Zarza|LW|19|1000|PAR|2027||2026-07-01
Romeo Benítez|LW|23|500|PAR|2027||2025-07-01
César Miño|RW|19|2000|PAR|2027||<2026-07-31
Rodney Redes|RW|26|1200|PAR|2027||2024-01-01
Fernando Cardozo|RW|25|500|PAR|2027||2025-07-16
Manuel Romero|RW|25|350|PAR|||2023-01-01
Franco Alfonso|RW|24|275|ARG|2029||2026-01-06
Derlis González|ST|32|350|PAR|2027||2020-02-07
Sebastián Ferreira|ST|28|800|PAR|2027||2025-07-01
Tiago Caballero|ST|21|800|PAR|2027||<2025-07-11
Gabriel Ávalos|ST|36|750|PAR|2028||2026-08-28
Braian Romero|ST|35|350|ARG|2028||2026-07-01
Hugo Sandoval|ST|26|250|PAR|2027||<2026-01-21` },
    { id: 'cerro_porteno', name: 'Серро Портеньо', city: 'Асунсьон', stadium: 'Estadio ueno La Nueva Olla', cap: 45000, colors: ['#c8102e', '#0033a0'], players: `
Manuel Roffo|GK|26|2500|ARG|2029|CRO|2026-07-14
Ángel Martínez|GK|24|350|PAR|2030||<2026-07-01
Roberto Fernández|GK|38|100|PAR|2027||2025-01-01
Lucas Quintana|CB|21|4000|PAR|2029||2023-07-01
Lucas Merolla|CB|31|1000|ARG|2028||2026-07-16
Alexis Cañete|CB|23|600|PAR|2027||<2026-07-01
Gustavo Velázquez|CB|35|400|PAR|2027||2025-01-04
Abel Luciatti|CB|33|200|ARG|2027||2025-01-01
Blas Riveros|LB|28|1000|PAR|2027||2025-07-01
Marcelo Chaparro|LB|19|900|PAR|2027||2026-01-01
Guillermo Benítez|LB|32|225|ARG|2027|PAR|<2025-01-01
Fabricio Domínguez|RB|28|1000|URU|2031|ESP|2026-07-01
Iván Ramírez|RB|31|650|PAR|2027||<2026-07-01
Jorge Morel|DM|28|1000|PAR|2028||<2023-07-01
Piris da Motta|DM|32|600|PAR|2028||2022-01-12
Gastón Giménez|DM|35|300|PAR|2027|ARG|2025-01-01
Agustín Almendra|CM|26|2000|ARG|2029||2026-07-16
Cristhian Paredes|CM|28|1000|PAR|2027||2026-01-07
Ariel Gamarra|CM|23|900|PAR|2029|ARG|2026-07-20
Cesar Bobadilla|CM|19|600|PAR|2027||2026-01-01
Amín Cristaldo|CM|19|200|PAR|2027||2026-01-01
Carlos Chena|CM|19|100|PAR|2027||2026-07-01
Mateo Klimowicz|AM|26|1600|GER|2028|UKR|2026-01-12
Carlos Franco|AM|18|500|PAR|2027|ESP|2026-01-01
Ignacio Aliseda|LW|26|1800|ARG|2027||2025-07-03
Derlis Rodríguez|LW|29|750|PAR|2027||<2024-07-01
Santiago Mosquera|LW|31|350|COL|2028||2026-01-01
Gabriel Aguayo|RW|21|1800|PAR|2029||2024-01-01
Cecilio Domínguez|RW|32|700|PAR|||2023-07-01
Juan Iturbe|ST|33|400|PAR|2028|ARG|2024-01-01
Jonatan Torres|ST|29|800|ARG|2028||2025-01-14
Pablo Vegetti|ST|38|300|ARG|2029||2026-01-17
Sergio Araujo|ST|34|100|ARG|2027||2024-09-13
Freddy Noguera|ST|22|100|PAR|2027||2025-07-23` },
    { id: 'libertad', name: 'Либертад', city: 'Асунсьон', stadium: 'Estadio Tigo La Huerta', cap: 12000, colors: ['#ffffff', '#000000'], players: `
Rodrigo Morínigo|GK|28|900|PAR|2027||2022-01-01
Ángel González|GK|23|200|PAR|2027||2022-07-01
Victor Rojas|GK|21|100|PAR|2027||2026-01-01
Robert Rojas|CB|30|1200|PAR|2027||<2025-07-01
Gilberto Flores|CB|23|1200|PAR|2027||2026-07-24
Thiago Fernández|CB|19|500|PAR|2027||2026-01-01
Nicolás Freire|CB|32|300|ARG|2027|ESP|2026-07-01
Néstor Giménez|LB|29|1000|PAR|2027||2015-07-01
Matías Espinoza|LB|29|900|PAR|2027||2026-12-31
Alexis Fretes|LB|21|800|PAR|2027||2024-07-01
Estiven Villalba|RB|18|800|PAR|2027||2026-01-01
Alan Benítez|RB|32|300|PAR|2027||2026-02-27
Álvaro Campuzano|DM|31|600|PAR|2027||2020-10-10
Hernesto Caballero|DM|35|200|PAR|2027||2022-01-01
Agustín Manzur|CM|26|2000|PLE|2027|ARG|<2026-07-01
Lucas Sanabria|CM|27|800|PAR|2027||2020-01-01
Amín Molinas|CM|21|600|PAR|2027||2026-01-01
Christian Martínez|CM|21|100|PAR|2027||2026-01-01
Joaquín Bogarín|AM|19|800|PAR|2027||2025-07-05
Federico Carrizo|AM|35|225|ARG|2027||<2026-01-02
Elvio Vera|LW|25|750|PAR|2029||<2028-12-31
Hugo Fernández|LW|28|700|PAR|2027||<2026-01-01
Pedro Villalba|LW|18|400|PAR|2027||2026-01-01
Rodrigo Villalba|RW|20|1800|PAR|2027||2023-07-01
Iván Franco|RW|26|1000|PAR|2027||2018-01-01
Marcelo Fernández|RW|25|400|PAR|2027||2023-01-01
Iván Ramírez|ST|22|1400|PAR|2027||<2026-07-21
Gustavo Aguilar|ST|26|500|PAR|2027||2026-12-31
Rodrigo Acuña|ST|18|500|PAR|2027||2026-01-01
Lorenzo Melgarejo|ST|36|275|PAR|2027||2021-07-09
Luciano Nequecaur|ST|34|225|ARG|2027|ITA|2026-08-14` },
    { id: 'guarani', name: 'Гарани', city: 'Асунсьон', stadium: 'Estadio Rogelio Silvino Livieres', cap: 8000, colors: ['#ffd100', '#000000'], players: `
Aldo Pérez|GK|25|750|PAR|2027||2022-01-01
Miguel Martínez|GK|28|450|PAR|2027||<2026-08-20
Antonino Martínez|GK|23|100|PAR|||2026-07-01
Thiago Servín|CB|23|800|PAR|2027||2022-07-01
Alcides Barbotte|CB|24|750|PAR|2027||2024-01-01
Imanol Segovia|CB|25|400|ARG|2027||2026-01-13
Paul Riveros|CB|29|400|PAR|2027||<2023-07-01
Miguel Jacquet|CB|31|200|PAR|2027||<2026-07-22
Ángel Ibarra|CB|23|100|PAR|||2026-07-28
Carlos Rolón|CB|34|100|PAR|2027||2026-08-28
Leandro Allende|LB|30|225|ARG|2027||2026-08-26
Jonathan Espínola|LB|24|75|PAR|2027||2026-07-02
Armando Méndez|RB|30|700|URU|2027|ARG|2026-08-20
Daniel Pérez|RB|32|200|PAR|2027||2023-07-01
René Rodríguez|RB|24|100|PAR|2027||<2023-01-01
Luis Martínez|DM|26|900|PAR|2027||2022-01-01
Patricio Tanda|DM|24|500|ARG|2027||2026-01-21
Matías López|CM|23|750|PAR|2027||2026-01-01
Giovanni Gómez|CM|19|500|PAR|2027||2026-01-01
Jesús Llano|CM|25|350|PAR|2027||2026-12-31
Carlos Arrúa|AM|29|300|PAR|2027||<2026-07-20
Ricardo Quiñónez|AM|25|50|PAR|2027||2023-07-01
Maximiliano Añasco|LW|25|450|URU|2027||2026-07-10
Patricio Coronel|LW|19|350|PAR|2027||2026-01-01
Diego Fernández|RW|24|800|PAR|2027||<2025-07-01
Víctor Céspedes|RW|23|100|PAR|2027||<2024-01-01
Fernando Fernández|ST|34|300|PAR|2027||<2025-01-01
Jorge Recalde|ST|34|150|PAR|2027||<2026-08-26
Nelson Romero|ST|18|300|PAR|2027||2026-01-01
Juan Manuel García|ST|33|175|ARG|2027||2026-07-01
Thiago Romero|ST|20|50|ARG|2027||2026-07-03` },
    { id: 'nacional_par', name: 'Насьональ (Асунсьон)', city: 'Асунсьон', stadium: 'Estadio Arsenio Erico', cap: 7000, colors: ['#ffffff', '#0033a0'], players: `
Santiago Rojas|GK|30|500|PAR|2027||2016-07-01
Gerardo Ortiz|GK|37|25|PAR|2027||2025-01-01
Thomás Gutiérrez|CB|26|500|VEN|2027|COL|<2025-07-18
Mauro Coronel|CB|18|400|PAR|2027||2026-07-01
Gastón Benítez|CB|24|400|PAR|2027||2022-01-01
Fernando Díaz|CB|25|275|PAR|2027||2026-01-15
Rodrigo Melgarejo|CB|24|150|PAR|2027||<2026-07-24
Sebastián Vargas|LB|24|275|PAR|2027||2023-01-01
Rodolfo Argüello|LB|23|25|PAR|2027||2026-01-01
Juan Feliú|RB|25|300|PAR|2027|ARG|<2026-01-01
Carlos Espinola|RB|26|250|PAR|2027||2020-01-01
Roberto Ramírez|DM|26|350|PAR|2027||<2026-01-01
Jordan Santacruz|DM|30|250|PAR|2027||2026-07-01
Fabrizio Jara|CM|24|1000|PAR|2027||<2026-07-01
Ángel Cardozo Lucena|CM|32|275|PAR|2027||<2026-07-11
Leandro Meza|CM|24|250|PAR|2027||2024-01-01
Silvio Torales|CM|35|25|PAR|2027||2026-01-01
Mauricio Cabrera|AM|18|300|PAR|2027||2026-07-01
Franco Pelozo|AM|21|75|ARG|2027||2026-01-23
Josué Colmán|LW|28|900|PAR|2027||2026-01-24
Richard Prieto|LW|29|700|PAR|2027||<2025-01-01
Alejandro Samudio|RW|27|325|PAR|2027||<2026-01-01
Orlando Gaona Lugo|RW|36|50|PAR|2027||2023-07-01
Iván Valdez|ST|31|300|PAR|2027||2025-07-11
Hugo Adrián Benítez|ST|23|600|PAR|2027||<2025-07-12
Lucas González|ST|29|300|PAR|2027||2019-07-01
Matías Almeida|ST|21|175|PAR|2027||2025-07-01
Ignacio Bailone|ST|32|100|ARG|2027|ITA|2025-07-01
Roque Santa Cruz|ST|45|100|PAR|2027|ESP|<2026-01-01` },
    { id: 'luqueno', name: 'Спортиво Лукеньо', city: 'Луке', stadium: 'Estadio Feliciano Cáceres', cap: 24000, colors: ['#ffd100', '#0033a0'], players: `
Nicolás Campisi|GK|30|175|ARG|2027||2026-07-01
Francisco Mongelos|GK|21|100|PAR|2027||2025-07-01
Angel Espinola|GK|23|100|PAR|2027|ARG|2024-07-01
Jonathan Díaz|CB|21|250|PAR|2027||2026-07-01
Facundo Wiechniak|CB|24|225|ARG|2027||2026-01-02
Miguel Barreto|CB|28|200|PAR|2027||<2026-07-01
Adrián Brizuela|CB|22|150|PAR|2027|ESP|2024-07-01
Alexis Cantero|LB|23|700|PAR|2027||<2026-07-23
Álvaro Martínez|LB|24|200|PAR|2027||2026-01-01
Axel Balbuena|LB|20|150|PAR|2027|ARG|2026-01-26
Lucas Morales|RB|26|750|URU|2027||2026-07-09
Santiago Ocampos|RB|24|225|PAR|2027||2025-01-07
Fernando Benitez|DM|27|175|PAR|2027||2019-01-01
Aldo Maíz|CM|26|400|PAR|2027||2026-01-08
Giovanni Bogado|CM|25|300|PAR|2027||2026-01-10
Tomás Muro|CM|24|250|ARG|2027||2026-07-27
Sebastián Maldonado|CM|26|125|PAR|2027||2023-01-01
Fernando Bobadilla|CM|22|100|PAR|2027||2026-01-01
Samuel Beltrán|CM|22|50|ARG|2027||2026-07-21
Matías Riveros|CM|22|25|PAR|2027||2026-12-31
Jonathan Ramos|LW|19|350|PAR|2027||2025-01-01
Marcelo Ojeda|LW|22|200|PAR|2029||2026-01-01
Óscar Ruiz|LW|35|50|PAR|2027||2026-01-01
Kevin Pereira|RW|22|175|PAR|2027||2023-07-01
Lautaro Comas|RW|31|175|ARG|2027|ITA|2024-01-01
Iván Maggi|ST|27|500|ARG|2027||2026-01-06
Marcelo Pérez|ST|25|300|PAR|2027||2026-07-23
Walter González|ST|31|200|PAR|2027||<2025-01-01` },
    { id: 'trinidense', name: 'Спортиво Тринидесе', city: 'Асунсьон', stadium: 'Estadio Martín Torres', cap: 3000, colors: ['#c8102e', '#ffffff'], players: `
Matías Dufour|GK|27|500|URU|2027||2025-01-01
Víctor Samudio|GK|39|25|PAR|2027||2022-01-01
Fernando Román|CB|25|350|PAR|2027||<2026-01-01
Maximiliano Centurión|CB|27|300|ARG|2027||2025-01-01
Agustín Da Silveira|CB|25|250|URU|2027||2025-01-20
Bruno Valdez|CB|34|150|PAR|2027||2026-02-27
David Villalba|CB|35|25|PAR|2027||2024-01-01
César Benítez|CB|36|25|PAR|2027||2023-01-01
Diego Melgarejo|LB|30|175|PAR|2027||2025-01-01
Sergio Mendoza|LB|32|150|PAR|2027||<2021-01-01
Axel Cañete|RB|24|275|PAR|2027||2024-01-01
Armando Ruiz Díaz|RB|33|25|PAR|2027||2022-01-01
Ariel Gauto|DM|23|300|PAR|2029||<2025-07-01
Gustavo Viera|DM|31|250|PAR|2027||2025-01-01
Fabrizio Baruja|CM|20|200|PAR|||2026-01-06
Jorge Marcelino|CM|21|50|PAR|2027|BRA|2026-01-01
Luis de la Cruz|CM|35|25|PAR|2027||2023-01-01
Luis Abreu|AM|22|300|PAR|2027||<2026-07-12
Ronald Cornet|AM|24|200|PAR|2027|ESP|<2026-01-01
Lucas González|AM|22|150|ARG|2027||2026-01-01
Junior Gamarra|LW|19|400|PAR|2027||2026-07-01
Tobías Morinigo|LW|21|325|PAR|2027|ARG|<2026-01-23
Ronaldo Báez|LW|28|225|PAR|2027||2024-07-01
Alan Cano|LW|21|125|PAR|2027||2025-07-01
Tomás Rayer|RW|24|300|ARG|2027||2022-01-01
Nicolás Maná|RW|32|125|ARG|2027||2026-01-01
Joel Román|RW|36|25|PAR|2027||2022-01-01
Faustino Barone|ST|20|800|URU|2027|ITA|<2026-08-28
Néstor Camacho|ST|39|25|PAR|2027||2025-01-01
Oscar Giménez|ST|36|25|PAR|2027||<2021-01-01
Clementino González|ST|36|25|PAR|2027||2026-01-01` },
    { id: 'recoleta', name: 'Реколета', city: 'Асунсьон', stadium: 'Estadio Ricardo Gregor', cap: 4000, colors: ['#ffd100', '#0033a0'], players: `
Nelson Ferreira|GK|28|250|PAR|2027||2024-01-01
Óscar Toledo|GK|27|125|PAR|2027||2025-01-01
Andrés Marsengo|GK|24|100|ARG|2028||2026-01-02
Lucas Monzón|CB|23|350|ARG|2027||2026-01-01
Nicolás Marotta|CB|29|225|ARG|2027||2026-01-02
Marcos Pereira|CB|24|75|PAR|2027||2025-01-01
Luis Cardozo|CB|38|25|PAR|2027||<2025-01-01
Juan Núñez|CB|37|25|PAR|2027||<2024-01-01
Julio Domínguez|CB|34|25|PAR|2027||2023-07-01
Pedro Rios|LB|22|350|PAR|2027||2026-01-03
Dairon Mosquera|LB|34|100|COL|2027||2026-01-13
Luis Mendoza|LB|30|25|PAR|2027||2024-01-01
Eliezer Barreto|LB|19|25|PAR|||2026-01-01
Facundo Echeguren|RB|23|250|PAR|2027|ESP|<2024-01-01
Claudio Figueredo|RB|27|75|PAR|2027||2026-02-13
Marcelo Medina|RB|30|50|PAR|2027||2026-12-31
Iván Piris|RB|37|50|PAR|2027|ITA|<2025-01-01
José Espínola|DM|25|400|PAR|2027||2026-12-31
Carlos Vera|DM|38|25|PAR|2027||2026-12-31
Alexander Franco|CM|24|400|PAR|2027||2026-01-01
Alejandro Silva|CM|37|150|URU|2027||<2026-07-01
Fernando Galeano|CM|27|75|PAR|2027||2026-12-31
Claudio Garay|CM|30|50|PAR|2027||2025-01-01
Ronal Domínguez|CM|34|25|PAR|2027||<2025-07-01
Marcelo Cañete|AM|36|25|ARG|2027|PAR|2026-01-02
Juan Falcón|LW|18|300|PAR|||2026-01-01
Giuseppe Guggiari|LW|19|300|PAR|||2026-01-01
Manuel Schupp|LW|20|150|PAR|2027||2025-07-01
Hector López|RW|20|200|PAR|2027||2026-01-01
Wilfrido Báez|RW|32|150|PAR|2027||2024-01-01
Brahian Ferreira|RW|24|150|PAR|2027||2026-12-31
Orlin Barreto|RW|20|100|PAR|2027||2026-07-01
Aldo González|ST|30|175|PAR|2027||<2024-07-01
Kevin Parzajuk|ST|24|275|PAR|2027|POL|2026-01-01
Paul Charpentier|ST|26|250|ARG|2027||2026-07-01
Richard Ortiz|ST|31|100|PAR|2027||2026-01-27
Thiago Vidal|ST|23|50|PAR|2027||2024-01-01` },
    { id: 'ameliano', name: 'Спортиво Амельяно', city: 'Асунсьон', stadium: 'Estadio Ameliano Villeta', cap: 4500, colors: ['#6cace4', '#ffffff'], players: `
Ángel Sánchez|GK|25|50|PAR|2027||2025-01-01
Junior Balbuena|GK|32|25|PAR|2027||2019-07-01
Edilson Salinas|GK|24|100|ARG|2027|PAR|2026-01-13
Thiago Steffen|GK|22|100|PAR|2027||2026-08-28
Andrea Falabella|CB|27|300|ARG|2028|ITA|2025-01-01
Hugo Benítez|CB|27|150|PAR|2027||2020-01-01
Julio González|CB|34|100|PAR|2027||2023-01-01
Francisco Báez|CB|35|25|PAR|2027||<2024-01-01
Luciano Suárez|CB|22|100|ARG|2027||2026-08-14
Abel Paredes|LB|29|200|PAR|2027||<2026-01-11
Miguel Benítez|LB|29|100|PAR|2027||<2025-01-01
Tomás Lezcano|LB|31|75|PAR|2027||2025-07-01
Fabián Franco|RB|28|300|PAR|2027||<2026-01-01
Ronald Peralta|RB|21|100|PAR|||2026-01-01
Pablo Aranda|RB|25|100|ARG|2027||2026-08-30
Jonathan Benítez|DM|25|300|PAR|2027||2025-01-01
Walter Rodríguez|DM|31|50|PAR|2027|ITA|<2026-01-01
Valentín Larralde|CM|25|350|ARG|2027||2026-01-01
Estivel Moreira|CM|27|250|PAR|2027||<2025-01-01
Marcelo Camargo|CM|21|100|ARG|2027||2026-07-01
Raúl Cabral|AM|21|400|ARG|2027||2026-01-02
Luis Ayala|AM|21|250|PAR|2027|ARG|2026-01-01
Alberto Contrera|AM|34|75|PAR|2027||<2023-07-01
Luis Olmedo|LW|26|300|PAR|2029|ARG|2026-03-07
Luis Ortíz|LW|26|275|PAR|2027||2025-01-01
Alex Servían|LW|21|175|PAR|2027||2025-01-01
Carlos Favero|LW|21|150|PAR|2027||2026-01-01
Fredy Vera|RW|28|275|PAR|2027||2025-01-01
Édgar Páez|RW|19|200|PAR|2027||2026-07-10
Mathias León|RW|23|150|PAR|2027||2025-07-01
Bruno López|RW|24|25|PAR|2028||2026-03-07
Richard Torales|ST|25|300|PAR|2027||<2023-01-01
Ariel Ávalos|ST|21|175|PAR|2027||2026-01-01
Cristhian Ocampos|ST|27|150|PAR|2027||2024-07-31` },
    { id: 'dos_mayo', name: 'Дос-де-Майо', city: 'Педро-Хуан-Кабальеро', stadium: 'Estadio Monumental Río Parapití', cap: 22000, colors: ['#0033a0', '#ffffff'], players: `
Nicolás Rossi|GK|28|250|URU|2027||2026-07-22
Miguel Urquiza|GK|26|25|PAR|2027||2024-07-01
Mario Ramirez|GK|31|100|PAR|2027||2026-07-01
César Ramírez|CB|23|275|PAR|2027||<2026-07-01
Alexis Villalba|CB|28|250|PAR|2027||<2026-07-01
Pedro Sosa|CB|35|50|PAR|2027||2026-12-31
Camilo Saiz|CB|34|25|COL|2027||2025-07-08
César Castro|LB|33|125|PAR|2027||2026-12-31
Ulises Coronel|LB|28|100|PAR|2027||<2026-01-03
Rodrigo Gómez|RB|20|600|PAR|2027||<2026-07-01
Alberto Espínola|RB|35|50|PAR|2027||<2026-01-24
Marcos Gómez|DM|24|300|PAR|2027||<2026-07-01
Ángel Aguayo|DM|20|50|PAR|2027||2026-07-22
Óscar Romero|CM|27|125|PAR|2027||<2025-01-19
Luis Alejandro Delgadillo|CM|19|75|PAR|2027||2026-04-01
Tobías Sanabria|CM|22|25|PAR|2027||2026-09-02
Alexis Fariña|AM|21|700|PAR|2027||<2026-02-23
Henry Riquelme|AM|19|350|PAR|2027||2025-07-01
Félix Triñanes|AM|22|150|ARG|2027|ESP|2026-03-04
Ángel Aguilera|AM|23|75|PAR|2027||2026-07-01
Tobias Portillo|LW|21|250|PAR|2027||2026-07-06
Pedro Delvalle|LW|32|125|PAR|||2026-01-01
Matías Moya|LW|28|100|ARG|2027|CHI|2026-07-24
Brahian Ayala|LW|31|100|PAR|2027||<2026-01-28
Alan Fernández|LW|18|75|PAR|2027||2026-04-01
Alfredo Machado|LW|27|25|PAR|2027||2026-07-01
Alan Gómez|RW|24|200|PAR|2027||<2026-01-16
Marcelo González|RW|30|100|PAR|2027||2026-07-27
Estifen Díaz|RW|21|75|PAR|||2026-07-01
Tobías Cervera|ST|24|250|SYR|2027|ARG|2026-07-22
Jorge Sanguina|ST|27|225|PAR|2027||2026-07-09
Fernando Cáceres|ST|30|100|PAR|2027||2025-07-01
Fredy Silvero|ST|19|25|PAR|2027||2026-07-01` },
    { id: 'rubio_nu', name: 'Рубио Нью', city: 'Асунсьон', stadium: 'Estadio La Arboleda', cap: 8000, colors: ['#00843d', '#ffffff'], players: `
Franco Fragueda|GK|26|275|ARG|2027||2026-01-14
Tomás Ezequiel Canteros|GK|25|150|ARG|2027||2026-01-21
Carlos Servín|GK|39|25|PAR|2027||<2026-07-01
Lautaro Maldonado|GK|25|25|ARG|2027||2026-08-10
Javier Vallejos|CB|22|300|PAR|2027||2024-01-01
Pedro Álvarez|CB|25|150|PAR|2027||2025-01-01
Jorge González|CB|29|150|PAR|2027||2026-01-01
Brian Blasi|CB|30|150|ARG|2027||2026-01-01
Lucas Gómez|CB|21|75|PAR|||2026-01-01
Maximiliano Garrone|LB|19|50|ARG|||2026-07-01
Mariano Ramos|RB|22|300|ARG|2027||<2026-07-01
Rodi Ferreira|RB|28|200|PAR|2027||2026-01-01
Víctor Cabañas|RB|23|125|PAR|2027|USA|<2026-01-01
Alan Ledesma|DM|18|500|PAR|2027||2026-07-01
Cristian Núñez|DM|29|150|PAR|2027||2026-07-01
Tobías Leiva|CM|22|350|ARG|2027||2026-08-15
Marcelo Acosta|CM|25|275|PAR|2027||2026-07-01
Pablo Ayala|CM|31|25|PAR|2027||2026-01-01
Rodrigo Rojas|CM|38|25|PAR|2027||2026-01-01
Octavio Alfonso|AM|20|150|PAR|||2026-01-01
William Mendieta|AM|37|50|PAR|2027||<2026-01-01
Lucas Montiel|AM|19|100|PAR|||2026-01-01
Carlos Giménez|LW|20|250|PAR|2027||2026-01-09
Sergio Fretes|LW|27|125|PAR|2027||<2026-07-01
Elías Alfonso|RW|27|275|PAR|2027||<2026-07-01
Kevin Paredes|RW|19|25|PAR|2027||2026-07-01
Estiven Pérez|ST|26|250|PAR|2027||2026-01-01
Rodrigo Ruiz Díaz|ST|27|225|PAR|2027||<2026-07-01
Pedro Báez|ST|29|200|PAR|2027||2026-01-07
Mauricio Roldán|ST|21|100|ARG|2027||2026-02-10
Aaron Páez|ST|21|75|PAR|2027||2026-07-01
Mauricio De Carvalho|ST|18|25|PAR|2027|BRA|2026-07-01` },
    { id: 'san_lorenzo_par', name: 'Спортиво Сан-Лоренсо', city: 'Сан-Лоренсо', stadium: 'Estadio Gunther Vogel', cap: 8000, colors: ['#c8102e', '#ffffff'], players: `
Federico Cristóforo|GK|37|25|URU|2027|ITA|<2025-02-13
Wilson Quiñónez|GK|38|25|PAR|2027||2026-01-01
Luis Franco|GK|27|25|PAR|2027||2026-01-01
Alexis Doldán|CB|29|125|PAR|2027||2026-01-01
Luis Cáceres|CB|30|50|PAR|2027||2026-01-01
Teodoro Paredes|CB|33|25|PAR|2027||2025-01-01
Daniel Meza|LB|23|100|ARG|2027|PAR|2026-03-07
Isaias Fretes|LB|24|75|PAR|2027||2026-07-14
Leandro Esteche|RB|25|100|PAR|2027||<2026-01-01
Maximiliano García|RB|23|100|PAR|2027||2025-02-19
Matías Agüero|RB|22|75|PAR|2027||2025-01-01
Ángel Benítez|DM|30|200|PAR|2027||<2026-08-06
Hugo González|DM|27|75|PAR|2027||2023-01-01
Bruno Piñatares|DM|36|25|URU|2027|ITA|<2026-01-02
Juan Salcedo|CM|23|250|PAR|2027||<2026-08-02
Héctor Villamayor|CM|29|100|PAR|2027||2025-02-19
Ignacio Figueroa|CM|26|75|ARG|2027||2026-01-05
Franco Aragón|CM|32|50|ARG|2027||2026-07-24
Iván Torres|CM|35|25|PAR|2027||<2026-01-01
Bruno Machuca|CM|26|100|ARG|2027||2026-08-31
Kevin Fernández|LW|27|150|PAR|2027||2026-08-31
Gastón Gerzel|LW|26|100|ARG|2027|ITA|2026-07-20
Kevin Ferreira|RW|19|100|PAR|2027||2026-07-01
Rodrigo Amarilla|RW|26|75|PAR|2027||2026-08-02
José Duarte|RW|21|50|PAR|2027||2025-01-01
Alex Álvarez|ST|29|200|PAR|2027||<2026-01-01
José Barrios|ST|22|200|PAR|2027||2025-03-01
Marcelo Ferreira|ST|33|150|PAR|2027||2026-07-15
Cristian Colmán|ST|32|50|PAR|2027||<2026-02-18
Santiago Salcedo|ST|45|100|PAR|2027||2026-08-28` },
  ],
});
