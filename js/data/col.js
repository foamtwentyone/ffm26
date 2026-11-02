// Примера А (Колумбия) 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'col', name: 'Примера А (Колумбия)', short: 'Колумбия', country: 'COL', tier: 1, weekday: 0,
  autumn: { from: '07-25', rounds: 19 }, spring: { from: '01-23', rounds: 19 },
  ticket: 4, prize: [1500, 1450, 1400, 1350, 1250, 1200, 1150, 1100, 1050, 1000, 900, 850, 800, 750, 700, 650, 550, 500, 450, 400],
  teams: [
    { id: 'nacional_col', name: 'Атлетико Насьональ', city: 'Медельин', stadium: 'Estadio Atanasio Girardot', cap: 45943, colors: ['#00843d', '#ffffff'], players: `
Luis Marquinez|GK|23|300|COL|2030||<2022-01-01
Franco Armani|GK|40|200|ARG|2027||2026-07-17
Andrés Reyes|CB|27|800|COL|2027||2026-08-08
Néider Parra|CB|21|800|COL|2028||2026-02-20
César Haydar|CB|25|550|COL|2029||2026-07-01
William Tesillo|CB|36|200|COL|2027||2024-07-01
Samuel Velásquez|LB|23|650|COL|2027||2023-01-01
Milton Casco|LB|38|75|ARG|2027||2026-01-06
Andrés Felipe Román|RB|31|800|COL|2029||<2022-07-15
Yeicar Perlaza|RB|23|300|COL|2027||<2026-12-31
Jorman Campuzano|DM|30|1500|COL|2028|ARG|2025-07-14
Matheus Uribe|DM|35|400|COL|2028||2025-01-16
Elkin Rivero|DM|20|250|COL|2028||2025-01-01
Juan Zapata|CM|26|900|COL|2028||2025-07-01
Felipe Marín|CM|19|200|COL|2030||2026-07-01
Juan Manuel Rengifo|AM|21|5000|COL|2029||2025-07-01
Elías Cabrera|AM|23|1800|ARG|2027||2026-08-09
James Rodríguez|AM|35|1500|COL|2027|ESP|2026-09-10
Edwin Cardona|AM|33|450|COL|2027||<2024-07-01
Andrés Sarmiento|LW|28|800|COL|2028||<2024-07-01
Kevin Parra|LW|23|800|COL|2028||<2024-07-01
Marlos Moreno|LW|30|700|COL|2027||2025-07-28
Ian Poveda|RW|26|1200|COL|2028|ENG|<2026-08-08
Nicolás Rodríguez|RW|22|900|COL|2027||2026-01-08
Cristian Arango|ST|31|1800|COL|2027||2026-01-31
Alfredo Morelos|ST|30|1500|COL|2029||2026-01-24` },
    { id: 'america_cali', name: 'Америка Кали', city: 'Кали', stadium: 'Estadio Olímpico Pascual Guerrero', cap: 46400, colors: ['#c8102e', '#ffffff'], players: `
Jean|GK|31|550|BRA|2027||2026-01-01
Juan Montoya|GK|28|200|COL|2027||2026-07-01
Marlon Torres|CB|30|450|COL|||<2026-01-10
Nicolás Hernández|CB|28|400|COL|2029||2025-08-29
Dany Rosero|CB|33|300|COL|2027||2026-01-10
Cristian Tovar|CB|28|300|COL|2027||2025-01-11
Brayan Córdoba|CB|27|300|COL|2029||<2026-07-01
Omar Bertel|LB|30|500|COL|2028||<2025-01-01
Marcos Mina|LB|27|300|COL|2027||2023-07-24
Mateo Castillo|RB|23|1500|COL|2028||2025-01-01
Yhormar Hurtado|RB|29|300|COL|||2026-07-01
Brayan Correa|RB|22|100|COL|||2026-01-01
Josen Escobar|DM|21|2500|COL|2028||2023-07-01
Yani Quintero|DM|24|600|COL|2028||2026-07-01
José Cavadia|CM|21|400|COL|2028||2025-01-01
Rafael Carrascal|CM|33|350|COL|2028||2025-01-10
Yeison Guzmán|AM|28|2800|COL|2027||2026-01-12
Jhon Palacios|LW|21|1200|COL|2029||2025-07-01
Edson Tortolero|LW|28|800|VEN|2027||2026-07-21
Jhon Murillo|LW|30|550|VEN|2027|COL|2025-07-01
Jan Lucumi|RW|22|600|COL|2029||2026-01-04
Luis Quiñónes|RW|35|200|COL|2027||2026-07-01
Tomás Ángel|ST|23|900|COL|2027|ENG|2026-02-27
Daniel Valencia|ST|30|600|ECU|2029||2026-02-02
Yojan Garcés|ST|20|200|COL|2028||<2024-01-01
Adrián Ramos|ST|40|50|COL|||2025-08-29` },
    { id: 'millonarios', name: 'Мильонариос', city: 'Богота', stadium: 'Estadio Nemesio Camacho El Campín', cap: 39512, colors: ['#0033a0', '#ffffff'], players: `
Javier Burrai|GK|36|175|ECU|2027|ARG|2026-07-10
James Aguirre|GK|34|100|COL|2027||<2026-07-11
Stiven Barreiro|CB|32|1400|COL|2028||2026-07-23
Andrés Llinás|CB|29|1400|COL|2029|ESP|2019-01-01
Jorge Arias|CB|33|350|COL|2027||<2023-01-11
Sergio Mosquera|CB|32|250|COL|||<2024-07-10
Alex Moreno|CB|24|50|COL|||2022-01-01
Sebastián Valencia|LB|30|800|COL|2029||2026-01-01
Danovis Banguero|LB|37|100|COL|2027||<2024-01-05
Jhomier Guerrero|RB|25|800|COL|2030||<2026-07-18
Carlos Sarabia|RB|21|450|COL
Samuel Martín|RB|20|250|COL|2029||2025-07-01
Leonai|DM|31|700|BRA|2027||2026-08-05
Stiven Vega|DM|28|550|COL|2027||2015-07-01
Rodrigo Ureña|DM|33|450|CHI|2028||2026-01-04
Mateo García|CM|28|1000|COL|2029||<2026-01-01
Sebastián Viveros|CM|21|500|COL|2029||2025-07-01
Juan Carlos Pereira|CM|33|100|COL|||2020-01-01
Juan Guillermo Cuadrado|RW|38|800|COL|2027|ITA|2026-09-10
David Silva|AM|39|50|COL|2027||<2015-01-01
Darwin Quintero|AM|39|50|COL|2027|MEX|<2026-01-01
Daniel Ruiz|LW|25|900|COL|2027||2022-01-01
Francisco Chaverra|LW|26|900|COL|2027||<2026-07-04
Julián Angulo|RW|24|500|COL|2027||<2026-01-01
Rodrigo Contreras|ST|31|1200|ARG|2027||2026-01-13
Andrey Estupiñán|ST|32|500|COL|2028||<2026-07-11
Leonardo Castro|ST|34|500|COL|2029||<2023-01-01
Santiago Giordana|ST|31|100|ARG|2027||2024-01-10` },
    { id: 'junior', name: 'Хуниор', city: 'Барранкилья', stadium: 'Estadio Romelio Martínez', cap: 20000, colors: ['#c8102e', '#ffffff'], players: `
Mauro Silveira|GK|26|1000|URU|2028||2025-07-01
Jefersson Martínez|GK|33|250|COL|2027||<2022-01-27
Jaime Acosta|GK|24|50|COL|||2026-07-01
Jean Carlos Pestaña|CB|29|900|COL|2028||<2026-01-14
Jermein Peña|CB|27|900|COL|2030||2026-01-01
Daniel Rivera|CB|27|550|COL|2028||<2025-01-01
Pablo Ortiz|CB|26|250|COL|2027||2026-07-12
Yeison Suárez|LB|29|800|COL|2029||<2026-07-01
Edwin Herrera|RB|28|700|COL|2027||<2023-01-01
Juan David Ríos|DM|35|300|COL|2027||<2026-01-14
Guillermo Celis|DM|33|300|COL|2028||<2025-07-10
Andrés Shmalbach|DM|19|100|COL
Jesús Rivas|CM|29|900|COL|2028||<2025-07-10
Fabián Ángel|CM|25|350|COL|2028||2019-07-01
Harold Rivera|CM|33|100|COL|2027||<2025-01-13
Jannenson Sarmiento|AM|27|700|COL|2029||2026-01-01
Deiber Caicedo|LW|26|700|COL|2028||2025-01-12
Bryan Castrillón|LW|27|600|COL|2027||<2024-07-18
Joel Canchimbo|RW|21|1800|COL|2029||2024-07-19
Cristian Barrios|RW|28|1200|COL|2029||<2026-01-17
Kevin Pérez|RW|29|450|COL|2029||<2026-01-14
Yimmi Chará|RW|35|200|COL|2027||2024-01-01
Guillermo Paiva|ST|29|600|PAR|2029||2026-01-01
Luis Muriel|ST|35|600|COL|2028||2026-01-14
Francisco Fydriszewski|ST|33|450|ARG|2029|POL|<2026-07-11
Teófilo Gutiérrez|ST|41|50|COL|2027||2025-02-10` },
    { id: 'medellin', name: 'Индепендьенте Медельин', city: 'Медельин', stadium: 'Estadio Atanasio Girardot', cap: 45943, colors: ['#c8102e', '#0033a0'], players: `
Salvador Ichazo|GK|34|200|URU|2028|ITA|<2026-01-04
Eder Chaux|GK|34|200|COL|2027||2025-01-01
Kevin Mantilla|CB|23|1200|COL|2027||2025-02-06
Joaquín Varela|CB|28|500|URU|2029|ESP|<2026-07-01
Alfonso Simarra|CB|26|350|COL|2028||2026-07-15
Luis Escorcia|CB|22|200|COL|2027||2025-01-01
Jhan Mena|LB|20|250|COL|||2026-07-01
Frank Fabra|LB|35|100|COL|2027|ARG|2026-02-11
Esneyder Mena|RB|28|650|COL|2028||<2025-07-17
Hayen Palacios|RB|27|500|COL|2027||2026-02-09
Halam Loboa|DM|20|1600|COL|2029||2025-01-01
Diego Moreno|DM|30|450|COL|2029||2023-07-01
Didier Moreno|DM|35|350|COL|2028||<2026-01-08
Léider Berrío|CM|28|500|COL|2028||<2025-01-21
Baldomero Perlaza|CM|34|300|COL|2027||2024-01-17
Juan Fernando Quintero|AM|33|1800|COL|2027||2026-08-10
Agustín Martegani|AM|26|600|ARG|2027|ITA|2026-07-06
Daniel Cataño|AM|34|275|COL|2028||2026-01-24
John Montaño|RW|20|1400|COL|2027||2026-01-06
Juan Córdoba|RW|23|600|COL|2027||2026-07-08
Yony González|RW|32|400|COL|2028||<2026-01-01
Gerónimo Mancilla|RW|17|200|COL|2030||2026-01-01
Jeison Medina|ST|31|500|COL|2027||2026-07-15
Carlos Lucumí|ST|26|450|COL|2027||<2026-07-01
Enzo Larrosa|ST|25|400|URU|2027||2026-01-12
Jackson Martínez|ST|40|100|COL|2027||2026-09-11` },
    { id: 'dep_cali', name: 'Депортиво Кали', city: 'Кали', stadium: 'Estadio Deportivo Cali', cap: 52000, colors: ['#00843d', '#ffffff'], players: `
Alejandro Rodríguez|GK|25|600|COL|2028|PAN|2023-07-01
Pedro Gallese|GK|36|350|PER|2028||2026-01-01
Alejandro Rojo|GK|20|100|ESP|2027|COL|2026-01-01
Fernando Álvarez|CB|23|1000|COL|2029|USA|2026-01-06
Keimer Sandoval|CB|21|500|COL|2028||2026-02-19
José Caldera|CB|24|400|COL|2028||2027-12-31
José Moya|CB|34|225|COL|2027||2026-07-15
Kalazán Suárez|LB|24|300|COL|2027||2026-07-01
Juan Tello|LB|24|150|COL|||2021-07-01
Edwin Velasco|LB|34|100|COL|2027||<2026-07-06
Leyser Chaverra|RB|29|800|COL|2027||<2026-07-10
Fabián Viáfara|RB|34|250|COL|2027||<2024-07-09
Ronaldo Pájaro|DM|24|800|COL|2029||<2026-01-02
Gustavo Cuéllar|DM|34|500|COL|2028||2026-03-12
Daniel Giraldo|DM|34|300|COL|2027||2026-01-09
Joan Gómez|CM|21|200|COL|2029||2026-01-05
Nicolás Benedetti|AM|29|1000|COL|2028||2026-07-16
Emanuel Reynoso|AM|30|700|ARG|2027||2026-01-07
Johan Martínez|LW|24|1400|COL|2029||2026-07-01
Alexis Manyoma|LW|23|1200|COL|2027||2026-08-10
Eduard Bello|LW|31|650|VEN|2027||<2026-08-07
Avilés Hurtado|LW|39|50|COL|2027|MEX|2025-07-15
Steven Rodríguez|ST|28|800|COL|2027||<2026-01-17
Juan Dinenno|ST|32|600|ARG|2027|ITA|2026-01-01
Carlos Bacca|ST|40|50|COL|2027||<2026-07-31` },
    { id: 'tolima', name: 'Депортес Толима', city: 'Ибаге', stadium: 'Estadio Manuel Murillo Toro', cap: 38000, colors: ['#8a1538', '#ffd100'], players: `
Miguel Ortega|GK|31|400|MEX|||<2026-07-01
Neto Volpi|GK|34|250|BRA|2028||2023-04-12
Jan Ángulo|CB|25|800|COL|||<2026-01-01
Anderson Angulo|CB|30|550|COL|||<2020-01-01
Juan José Mera|CB|24|550|COL|2027||2023-01-01
Yordan Osorio|CB|32|550|VEN|||2026-03-31
Daniel Pedrozo|CB|22|300|COL|2029||2026-01-29
Junior Hernández|LB|27|650|COL|2028||2019-07-01
Shean Barbosa|LB|22|350|COL|2030||2024-01-01
Cristian Arrieta|RB|30|450|COL|||<2026-01-01
Jherson Mosquera|RB|27|450|COL|2028||2026-03-17
Sebastián Guzmán|DM|29|700|COL|2028||<2025-07-16
Homer Martínez|DM|29|700|COL|2027||2026-07-23
Brayan Rovira|DM|29|700|COL|2027||<2024-01-25
Cristian Trujillo|DM|28|400|COL|||2020-01-01
Luis Sánchez|AM|26|700|COL|||<2026-07-01
Kelvin Flórez|LW|22|700|COL|||<2026-01-03
Ever Valencia|LW|29|300|COL|||<2025-01-06
Edwar López|LW|31|300|COL|2027||<2026-01-06
Luis Sandoval|ST|27|800|COL|2027||<2026-01-06
Jorge Hurtado|ST|23|700|COL|2027||2026-07-01
Sergio Aguayo|ST|23|600|MEX|2027|USA|2026-08-05
Adrián Parra|ST|29|600|COL|||<2026-01-01
Jader Valencia|ST|26|250|COL|2027||<2026-02-13
Jeinner Fuentes|ST|21|50|COL|||2025-07-01` },
    { id: 'santa_fe', name: 'Санта-Фе', city: 'Богота', stadium: 'Estadio Nemesio Camacho El Campín', cap: 39512, colors: ['#c8102e', '#ffffff'], players: `
Andrés Mosquera Marmolejo|GK|35|300|COL|2027||<2024-01-01
Juan Espitia|GK|26|250|COL|||2022-01-01
Weimar Asprilla|GK|27|200|COL|2028||<2025-07-01
Jhoyler Andrades|GK|22|100|COL|2028||2025-07-06
Kevin Balanta|CB|29|1200|COL|2027||2026-07-14
Víctor Moreno|CB|32|450|COL|||<2025-01-03
Iván Scarpeta|CB|30|250|COL|2027||<2023-07-11
Juan Quintero|CB|31|200|COL|2027||<2026-01-22
Emmanuel Olivera|CB|36|200|ARG|2027||<2025-01-03
Christian Mafla|LB|33|250|COL|2027||<2025-01-03
Jeison Angulo|LB|30|50|COL|||<2025-01-03
Luis Palacios|RB|25|550|COL|2027||<2026-01-07
Helibelton Palacios|RB|33|450|COL|2029||2026-01-05
Mateo Puerta|RB|29|250|COL|2027||<2026-02-04
Jhojan Torres|DM|23|900|COL|2027||2022-07-01
Yilmar Velásquez|DM|27|700|COL|2028||<2021-07-06
Ewil Murillo|DM|26|700|COL|2028||<2025-01-10
Kilian Toscano|DM|22|550|COL|2027||<2026-01-05
Leandro Angulo|DM|25|100|COL|2028||2025-01-03
Dani Torres|DM|36|100|COL|2027|ESP|<2024-01-01
Alexis Zapata|AM|31|400|COL|2027||<2025-01-10
Emerson Rodríguez|LW|26|1000|COL|2027||2026-08-10
Omar Fernández|LW|33|500|COL|2028||2026-01-01
Maximiliano Lovera|LW|27|400|ARG|2027|PAR|2026-02-23
Jáder Obrian|RW|31|700|COL|2028||2026-02-26
Franco Fagúndez|ST|26|900|URU|2027||2026-01-06
Nahuel Bustos|ST|28|1000|ARG|2027||2026-01-08
Hugo Rodallega|ST|41|50|COL|2027||2023-01-15` },
    { id: 'bucaramanga', name: 'Атлетико Букараманга', city: 'Букараманга', stadium: 'Estadio Américo Montanini', cap: 28000, colors: ['#ffd100', '#00843d'], players: `
Cristopher Fiermarín|GK|28|1700|URU|2027||2026-07-04
Diego Novoa|GK|37|100|COL|2027||<2026-07-17
Luis Vásquez|GK|30|100|COL|2027||<2026-01-06
Luis Matheus|GK|20|100|COL|||2026-01-01
José Ortiz|CB|27|800|COL|2029||<2026-07-08
José García|CB|23|700|COL|2030||2026-01-01
Martín Rea|CB|28|400|URU|||2026-01-08
Carlos Romaña|CB|26|300|COL|2027||2024-01-01
Juan Camilo Mosquera|LB|24|400|COL|2030||2026-01-01
Aldair Gutiérrez|RB|28|400|COL|2027||<2024-01-01
Nilson Castrillón|RB|30|250|COL|||2026-08-01
Aldair Zárate|DM|27|500|COL|2030||2026-01-01
Leonardo Flores|DM|31|350|VEN|2028|COL|2024-01-01
Víctor Cantillo|DM|33|300|COL|2027||2026-07-18
Fabry Castro|DM|34|100|COL|2027||<2024-01-01
Felix Charrupí|CM|25|450|COL|||<2025-07-01
Kevin Londoño|RW|32|300|COL|2027||<2025-01-08
Nilzo Ramírez|AM|21|200|COL|2027||2026-08-10
Fabián Sambueza|AM|38|100|ARG|2027||<2024-01-01
Omar Albornoz|LW|31|250|COL|2028||<2026-07-01
Freddy Hinestroza|LW|36|100|COL|||<2024-01-01
Emerson Batalla|RW|25|2000|COL|2029||2026-01-22
Jhon Fredy Salazar|RW|31|300|COL|2027||<2026-01-15
Brandon Caicedo|ST|25|200|COL|2028||2026-01-07
Luciano Pons|ST|36|100|ARG|2029||2026-01-05
Adrián Murillo|CM|24|100|COL|||2026-07-01` },
    { id: 'once_caldas', name: 'Онсе Кальдас', city: 'Манисалес', stadium: 'Estadio Palogrande', cap: 42678, colors: ['#ffffff', '#000000'], players: `
Joan Parra|GK|26|800|COL|2029||2026-01-01
Jesús Camargo|GK|28|550|VEN|2027||2026-07-31
Juan Gallego|GK|22|100|COL|||2024-01-01
Jorge Cardona|CB|27|500|COL|2027||2020-01-01
Juan Castaño|CB|28|250|COL|2029||2025-01-01
Daniel Marmolejo|CB|22|150|COL|2027||2026-07-24
Jeider Riquett|CB|36|100|COL|2027||<2022-07-01
Léyder Morán|CB|21|50|COL|||2023-01-01
Juan Patiño|LB|28|500|COL|2027||2026-02-19
Daniel Londoño|LB|31|400|COL|2027||<2026-07-11
Andrés Correa|LB|32|300|COL|2027||<2026-07-01
Juan David Cuesta|RB|28|700|COL|2027||2024-07-01
Efraín Navarro|RB|27|100|COL|2027||<2025-07-01
Jaime Alvarado|DM|27|600|COL|2027||<2026-01-01
Andrés Colorado|DM|27|400|COL|2028||2026-07-19
Jader Quiñónes|CM|25|500|COL|2027||<2026-01-17
Juan Pablo Nieto|CM|33|300|COL|2027||<2026-07-17
Andrés Roa|AM|33|175|COL|||<2026-01-01
Mateo Zuleta|LW|24|800|COL|2029||2026-01-01
Pipe Gómez|LW|27|750|COL|2029||2026-07-01
Edwin Torres|RW|28|500|COL|2027||2026-07-09
Michael Barrios|RW|35|200|COL|2027||<2024-07-05
John Deiby Araujo|RW|24|150|COL|||2022-07-01
Jefry Zapata|ST|26|1000|COL|2027||<2025-07-01
Dayro Moreno|ST|41|50|COL|2027||<2023-01-01` },
    { id: 'aguilas', name: 'Агилас Дорадас', city: 'Рионегро', stadium: 'Estadio Alberto Grisales', cap: 14000, colors: ['#ffd100', '#000000'], players: `
Jorge Soto|GK|33|300|COL|||<2026-07-19
John Ontaneda|CB|30|1000|ECU|2030||2026-07-13
Sebastián Rodríguez|CB|25|200|COL|||<2019-07-01
Andrés Mosquera|CB|36|100|COL|2027||<2026-07-12
Lucho Vásquez|CB|23|100|COL|2027||2026-07-07
John García|CB|37|50|COL|||<2026-01-28
Alberto Higgins|CB|21|50|COL|2027||2026-01-14
Nicolás Lara|CB|23|50|COL|||2022-01-01
Javier Mena|LB|21|1200|COL|2029||2024-01-01
Dylan Lozano|RB|24|300|COL|||2023-07-11
Iván Rojas|DM|29|450|COL|||<2026-07-13
Frank Lozano|DM|33|350|COL|||<2025-07-06
Juan Avalo|CM|25|250|COL|||2022-01-01
Juan Roa|CM|31|250|COL|||<2026-01-14
Andrés Ricaurte|CM|35|150|COL|||<2026-01-01
Matías Ramírez|LW|27|450|ARG|2027||2026-07-23
Junior Noguera|LW|24|200|PAR|2027||2026-07-12
Eduar Arízalas|RW|24|450|COL|||<2026-07-20
Fabián Charales|RW|22|300|COL|||2025-07-01
Jhon Meléndez|RW|24|200|COL|2027||<2026-07-18
Andrés Carreño|ST|23|450|COL|2027||2026-07-28
Antony Vásquez|ST|24|450|COL|2028||2022-01-01
Ricardo Márquez|ST|28|400|COL|2027||2026-07-23
Carlos Rojas|ST|28|25|COL|||2025-04-01` },
    { id: 'inter_bogota', name: 'Интернасьональ Богота', city: 'Богота', stadium: 'Estadio Metropolitano de Techo', cap: 10000, colors: ['#c8102e', '#000000'], players: `
Wuilker Fariñez|GK|28|800|VEN|2027|COL|2026-01-08
Kevin Cataño|GK|23|450|COL|2027||<2026-07-18
Simon Zapata|GK|20|50|COL|||2026-01-01
Juan Carrasco|GK|19|100|COL|2028||2027-12-31
Carlos Vivas|CB|24|1200|VEN|2029|COL|2025-07-01
Agustín Irazoque|CB|26|500|ARG|2028||2026-01-01
Mateo Rodas|CB|28|150|COL|||<2025-07-05
Yulián Gómez|LB|29|350|COL|2027||<2025-07-01
Miguel Pernía|LB|26|200|VEN|2027||2026-07-01
Joan Castro|RB|29|450|COL|2027||<2021-07-01
Ronaldo Junior|RB|21|100|COL|||2026-07-01
Larry Vásquez|DM|34|150|COL|2027|VEN|2026-01-01
Rubén Manjarrés|CM|26|300|COL|2027||<2026-01-01
Dewar Victoria|CM|25|100|COL|2027||<2026-08-01
Facundo Boné|LW|30|500|URU|2028|ITA|<2026-01-01
Cristian Dájome|LW|32|500|COL|2028||2026-07-01
Johan Caballero|LW|28|300|COL|2028||<2026-01-01
Sebastián Girado|RW|22|300|COL|||2026-07-01
Fabián Chaverra|RW|23|100|COL|2027||2024-07-01
Fabricio Sanguinetti|ST|26|1000|URU|2028||2026-01-01
Diego Duarte|ST|24|250|PAR|2027||2026-07-02
Jefferson Asprilla|ST|23|25|COL|2027||2026-07-01
Emilio Gutiérrez|ST|20|100|COL|||2026-01-01` },
    { id: 'cucuta', name: 'Кукута Депортиво', city: 'Кукута', stadium: 'Estadio General Santander', cap: 42901, colors: ['#c8102e', '#000000'], players: `
Federico Abadía|GK|28|300|ARG|||2026-01-07
Juan David Ramírez|GK|29|150|COL||USA|2024-09-06
Johan Velásquez|GK|23|100|COL|||2024-07-01
Diego Calcaterra|CB|25|400|ARG|2027||2025-03-07
Jhon Alexander Quiñones|CB|22|300|COL|2027||<2026-01-10
Brayan Montaño|CB|24|250|COL|2027||<2026-01-10
Hernán Lópes|CB|35|100|ARG|||<2026-07-25
Kevin Tamayo|LB|27|400|COL|2027||2026-08-10
Mauricio Duarte|LB|34|50|COL|||2023-07-01
Joao Abonia|RB|26|350|COL|2027||<2026-02-02
Armando Ballesteros|RB|25|50|COL|||2025-01-25
Samir Mayo|DM|23|400|COL|2027||<2026-07-24
Neneco|DM|31|275|COL|||2026-07-31
Víctor Mejía|DM|33|250|COL|2027||<2026-01-10
Léider Berdugo|CM|24|1000|COL|2027||2026-01-09
Kevin Londoño|CM|26|400|COL|2027||<2026-02-02
Juan Ceballos|CM|27|200|COL|2027||2025-01-28
Sebastián Támara|CM|30|200|COL|||<2025-07-01
Jesús Díaz|AM|27|400|COL|2027||2026-08-08
Lucas Ríos|AM|28|300|ARG|2027||<2022-07-01
Dayan Pérez|AM|18|100|COL
Gustavo Torres|RW|30|175|COL|||2026-07-19
Marlon Carabalí|RW|23|150|COL|||2026-07-01
Jader Manyoma|RW|22|100|COL|||2026-07-24
Jaime Peralta|ST|21|800|COL|2029||2023-07-01
Jhonatan Agudelo|ST|33|100|COL|||2025-07-09` },
    { id: 'fortaleza_col', name: 'Форталеса', city: 'Богота', stadium: 'Estadio Metropolitano de Techo', cap: 10000, colors: ['#ffd100', '#0033a0'], players: `
Williams Barlasina|GK|28|250|ARG|2028||2026-07-22
Cristian Santander|GK|23|150|COL|2027||2025-07-08
Michael Barragán|GK|22|100|COL|||2024-01-01
Yesid Díaz|CB|29|500|COL|||<2024-01-11
Jhon Balanta|CB|28|450|COL|||2025-01-27
Andrés Copete|CB|26|250|COL|||2026-07-16
David Ramírez|CB|24|150|COL|2027||<2026-01-14
Santiago Cuero|LB|22|350|COL|||2023-01-01
Juan Camilo Castillo|LB|24|300|COL|||2026-07-10
Joan Cajares|RB|23|400|COL|||2026-01-13
Jonathan Marulanda|RB|30|100|COL|2027||2025-07-08
Kevin Balanta|DM|22|400|COL|||2023-07-01
Leonardo Pico|DM|35|150|COL|2027||<2023-09-11
Sebastián Navarro|CM|26|700|COL|||<2023-02-24
Jhon Solís|CM|27|200|COL|||2025-07-15
Jerónimo Barrera|CM|22|50|COL|||2023-01-01
Mariano Vázquez|AM|33|200|ARG|||2026-09-01
Jhon Velásquez|AM|31|100|COL|||2025-07-08
Andy Batioja|LW|20|50|COL|2027||<2026-01-29
Andrés Amaya|RW|25|200|COL|||2025-07-08
Richardson Rivas|ST|21|600|COL|||2026-01-13
Teun Wilke|ST|24|500|MEX|2027|NED|2026-01-15
Ítalo Montaño|ST|27|350|COL|2028||<2026-07-06
Sebastián Herrera|ST|31|175|COL|||2026-01-13
Jhonier Blanco|ST|26|150|COL|2028||<2026-07-01
Franco Pulicastro|ST|27|50|ARG|2027||2026-01-12
Jhoiner Salas|ST|23|50|COL|||2023-01-31` },
    { id: 'pasto', name: 'Депортиво Пасто', city: 'Пасто', stadium: 'Estadio Departamental Libertad', cap: 27380, colors: ['#c8102e', '#0033a0'], players: `
Ederson Cabezas|GK|26|250|COL
Geovanni Banguera|GK|30|150|COL|||<2026-01-13
Nicolás Gil|CB|29|500|COL|||2024-01-03
Joyce Ríos|CB|28|400|COL|2027||2026-07-04
Julián Quiñónes|CB|36|50|COL|||<2026-07-07
Fáiner Torijano|CB|38|50|COL|2027||<2026-01-11
Derik Osede|CB|33|25|ESP||NGA|2026-07-01
Hervin Goyes|LB|20|850|COL|2027||2026-01-01
Mateo Garavito|LB|26|450|COL|2027||2026-01-11
Santiago Jiménez|RB|28|250|COL|||<2025-07-14
Enrique Serje|DM|30|300|COL||ESP|2026-01-11
Franco Leys|DM|33|125|ARG|||2026-08-04
Brayan Sánchez|DM|23|50|COL|||2025-01-23
Harrinson Mancilla|DM|34|50|COL|2027||<2026-01-12
David Guerrero|CM|30|100|COL
Yéiler Góez|CM|27|500|COL|||<2026-01-16
Diego Chávez|CM|29|350|ARG|2027||<2026-01-13
Willian Ordóñez|AM|22|50|COL|||2022-01-01
Yeison Tolosa|AM|27|50|COL|||2026-02-01
Mayer Gil|LW|23|350|SLV|2027|COL|<2026-01-12
Joider Micolta|LW|24|200|COL|||<2026-01-10
John Méndez|LW|22|100|COL|2027||2025-08-06
Jonathan Perlaza|LW|25|100|COL|||2026-01-15
Andrés Ibargüen|LW|34|50|COL|||2026-07-15
Matías Pisano|RW|34|150|ARG|2027|ITA|<2026-01-09
Patrick Preciado|RW|21|100|COL|||2025-07-01
Jeirye Caicedo|RW|22|75|COL|2027||2026-07-01
Santiago Córdoba|ST|29|350|COL|||<2026-01-16
Jorge Obregón|ST|29|300|COL|||<2026-07-01` },
    { id: 'llaneros', name: 'Льянерос', city: 'Вильявисенсио', stadium: 'Estadio Bello Horizonte - Rey Pelé', cap: 18000, colors: ['#c8102e', '#ffffff'], players: `
Roameth Romaña|GK|29|100|COL|||2023-07-05
Juan Loaiza|GK|24|50|COL|||2025-07-01
Howell Mena|CB|25|300|COL|2027||<2025-07-20
Alejandro Moralez|CB|25|250|COL|2027||<2026-01-01
Dennys Quintero|CB|29|200|ECU|||2026-01-05
Francisco Meza|CB|35|100|COL|||<2025-07-01
Jimmy Medranda|LB|32|200|COL||USA|2026-01-01
Jhojan Escobar|LB|26|150|COL|2027||2025-07-02
Juan Pertuz|RB|22|250|COL|2030||2026-01-01
Léider Riascos|RB|26|150|COL|||<2026-01-01
Daniel Quiñones|RB|27|100|COL|2027||2026-07-01
Kevin Caicedo|CM|28|200|COL|||2026-01-06
Eyder Restrepo|DM|27|50|COL|2028||2022-07-01
Juan Castilla|CM|22|350|COL|2027|USA|2026-07-01
Marlon Sierra|CM|32|50|COL|||2024-01-03
Brandon Chury|LW|21|100|COL|||2025-09-03
Juan Ramirez|AM|24|400|COL|2027||<2026-01-01
Kelvin Osorio|AM|33|250|COL|||<2026-01-01
Frank Castañeda|LW|32|400|COL|2027||<2026-07-23
Joel Contreras|LW|27|300|COL|2027||2026-07-10
Daniel Mantilla|LW|29|200|COL|2027||<2026-01-01
Néider Ospina|RW|23|450|COL|||2022-01-01
Luis Miranda|RW|29|300|COL|||<2025-07-14
Jhon Vásquez|RW|31|200|COL|||<2026-01-01
Yorleys Mena|ST|35|200|COL|2027|PER|2026-07-13
Luis Marimón|ST|22|200|COL|2027||<2026-01-19` },
    { id: 'alianza_col', name: 'Альянса', city: 'Вальедупар', stadium: 'Estadio Armando Maestre Pavajeau', cap: 11500, colors: ['#ffd100', '#0033a0'], players: `
Juan Camilo Chaverra|GK|33|100|COL|||<2025-01-04
Eduar Esteban|GK|26|100|COL|2027||2026-03-20
Johan Wallens|GK|34|50|COL|2027||2025-01-03
Juan Viveros|CB|22|400|COL|||2026-01-01
Jesús Figueroa|CB|30|150|COL|2028||<2024-01-13
Kevin Moreno|CB|26|100|COL|2027||<2026-01-01
Pedro Franco|CB|35|100|COL|||<2023-01-01
Sebastián Quiñones|CB|20|100|COL|||2026-09-01
Jhildrey Lasso|LB|24|300|COL|2027||2026-01-20
Eduard Banguero|LB|25|100|COL|||<2026-01-01
Leonardo Saldaña|LB|36|50|COL|||<2021-01-01
Yilson Rosales|RB|25|400|COL|2027||<2025-01-03
Israel Alba|RB|31|100|COL|||<2026-07-01
Wiston Fernández|DM|28|400|URU|2027||2025-01-06
Ever Meza|DM|26|150|COL|||2026-01-01
Carlos Esparragoza|CM|27|450|COL|||<2026-01-15
Jair Castillo|CM|29|300|COL|||2021-01-01
Fabián Cantillo|CM|29|300|COL|2027||2026-02-20
Charly Villegas|AM|21|100|COL|||2026-01-01
Yeiner Londoño|LW|25|250|COL|||2026-01-01
Sergio Aponzá|LW|21|100|COL|||2025-01-01
Josy Pérez|LW|27|50|COL|||2025-08-01
Jesús Muñoz|RW|24|300|COL|||2022-01-01
Déinner Quiñones|RW|31|200|COL|2027||<2026-07-01
Leyner Palacios|RW|22|100|COL|||2026-07-01
Felipe Pardo|RW|36|100|COL|||2025-01-24
Cristian Vergara|ST|26|250|COL|||2026-07-01
Misael Martínez|ST|28|150|COL|||<2024-07-01
Ayron del Valle|ST|37|50|COL|||<2025-07-01
Francesco Fiorelli|ST|21|50|URU|||2026-01-15
Diego Torres|ST|22|25|COL` },
    { id: 'pereira', name: 'Депортиво Перейра', city: 'Перейра', stadium: 'Estadio Centenario de Armenia', cap: 20729, colors: ['#ffd100', '#c8102e'], players: `
Jorge Martínez|GK|20|150|COL|||2026-01-01
Yimy Gómez|GK|27|150|COL|2027||<2026-02-05
Juan Betancourth|GK|22|100|COL
Sebastián Urrea|CB|24|200|COL|2027||2024-07-01
Santiago Aguilar|CB|28|150|COL|2027||2024-01-05
Danilo Ortiz|CB|34|100|PAR||ESP|2026-01-15
Richard Rentería|CB|30|50|COL|||<2026-03-09
Fabio Delgado|LB|27|200|COL|2027||2026-01-09
Tobias Bovone|LB|26|200|ARG|||2026-02-06
Eber Moreno|RB|24|400|COL|2027||<2024-01-01
Walmer Pacheco|RB|31|350|COL|2027||<2024-07-11
Джорды Монрой|RB|30|300|ARM||COL|<2026-01-01
Jorge Bermúdez|DM|25|350|COL|2027||2019-01-01
Felipe Mosquera|DM|24|100|COL|2027||<2025-02-06
Nicolás Rengifo|CM|22|200|COL|||2024-01-01
Miguel Aguirre|CM|21|200|COL|||2026-01-01
Ederson Moreno|CM|32|50|COL|||<2023-07-16
Sebastián Acosta|AM|32|100|COL|||<2024-07-01
Jhon Largacha|LW|22|250|COL|2027||<2025-01-14
Jhonny Jordán|LW|25|100|COL|||<2024-01-01
Yuber Quiñones|RW|24|400|COL|2028||<2025-07-01
Ánderson Plata|RW|35|50|COL|||<2026-01-09
Marco Pérez|ST|36|50|COL|||<2025-07-08
Andrés Calderón|ST|18|100|COL|||2026-07-01` },
    { id: 'jaguares', name: 'Хагуарес', city: 'Монтерия', stadium: 'Estadio de Fútbol Jaraguay de Montería', cap: 12000, colors: ['#ffd100', '#00843d'], players: `
Franklin Mosquera|GK|27|250|COL|||<2026-01-06
Diego Martínez|GK|36|50|COL|||<2026-01-01
Jerson Malagón|CB|33|200|COL|||2026-07-09
Jonathan Lovera|CB|21|50|COL|||2025-01-30
Carlos Henao|CB|37|50|COL|||<2026-01-01
Nicolás Giraldo|LB|33|50|COL|2027||<2026-07-01
Juan Pablo Arcila|LB|26|50|COL|||<2026-07-10
Edwin Martínez|RB|22|200|COL|2027||2026-07-01
Luis Jiménez|RB|29|150|COL|||2025-09-01
Andrés Alfonso|RB|21|100|COL|||2026-07-10
Juan Franco|RB|24|50|COL|||2026-07-09
Johan Hinestroza|DM|24|400|COL|||2026-01-10
Royscer Colpa|DM|31|300|COL|2027||<2026-01-15
Rafael Bustamante|DM|27|300|COL|||2026-04-06
Yan Mosquera|DM|31|150|COL|||2025-01-23
Carlos Cantillo|CM|23|50|COL|||2026-07-12
Johan Beltrán|AM|27|200|COL|||<2026-07-11
Cristian Álvarez|AM|34|200|ARG|||<2026-01-01
Jáder Maza|LW|31|200|COL|||<2024-02-20
Faber Gil|RW|31|200|COL|||<2026-07-10
Duván Rodríguez|RW|30|200|COL|||2022-01-21
Wilfrido De la Rosa|RW|33|150|COL|2027||2026-01-04
Andrés Rentería|ST|33|200|COL||MEX|<2025-01-01
Johar Mejía|ST|26|100|COL|||2026-07-01
Darwin López|ST|34|100|COL|2027||2026-01-05
Santiago Cubides|ST|26|50|COL|||<2026-01-06` },
    { id: 'chico', name: 'Бояка Чико', city: 'Тунха', stadium: 'Estadio de La Independencia', cap: 25000, colors: ['#0033a0', '#ffffff'], players: `
David Agudelo|GK|29|150|COL|2027||2026-07-21
Rogerio Caicedo|GK|32|50|COL|||2018-07-01
David Quintero|GK|28|100|COL|2027||2026-07-01
Branndon Zapata|GK|26|100|COL|2027||2025-07-01
Sebastián Palma|CB|27|300|COL|||2026-01-09
Jhonier Alomía|CB|27|250|COL|2027||2026-07-01
Arlen Banguero|CB|26|100|COL|||2025-01-12
Daniel Polanco|CB|27|75|COL|||2026-07-24
Jefferson Mena|CB|37|50|COL|2027||<2026-07-01
Juan Quiceno|LB|22|350|COL|||2024-07-01
Cristian Blanco|LB|27|50|COL|||<2026-07-25
Yaliston Martínez|LB|26|50|COL|2027||2025-01-01
Sander Navarro|RB|23|200|COL|||<2026-07-22
Cristian Mosquera|RB|25|150|COL|2027||2026-07-01
Junior Palacios|RB|30|100|COL|2027||2026-07-01
Juan Díaz|DM|25|350|COL|||<2026-01-15
Jhon Romaña|CM|21|100|COL|||2026-01-01
Delio Ramírez|CM|25|350|COL|||2025-01-15
Sebastián Viveros|CM|29|100|COL|||2026-07-20
Sebastián Salazar|CM|31|100|COL|||2025-01-04
Yesús Cabrera|AM|36|100|COL|2027||<2026-01-01
Jacobo Pimentel|LW|24|50|COL|||2020-01-01
Óscar Caicedo|LW|20|100|COL|||2026-01-01
Santiago Mera|RW|25|150|COL|2028||<2026-01-01
Estiven Sarria|RW|26|100|COL|||2026-07-01
Juan Peñaloza|RW|26|50|COL|||2026-07-01
Isaac Camargo|ST|26|250|COL|2027||2026-07-01
Alejandro Maya|ST|22|50|COL|||2026-08-01
Felipe Cifuentes|ST|24|50|COL|2027||<2026-07-01` },
  ],
});
