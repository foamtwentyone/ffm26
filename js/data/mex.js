// Лига MX 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'mex', name: 'Лига MX', short: 'Мексика', country: 'MEX', tier: 1, weekday: 6,
  autumn: { from: '07-25', rounds: 17 }, spring: { from: '01-09', rounds: 17 },
  ticket: 12, prize: [8000, 7650, 7300, 6950, 6600, 6250, 5900, 5550, 5200, 4800, 4450, 4100, 3750, 3400, 3050, 2700, 2350, 2000],
  teams: [
    { id: 'america_mex', name: 'Америка', city: 'Мехико', stadium: 'Estadio Banorte', cap: 87523, colors: ['#ffd200', '#002b5c'], players: `
Luis Malagón|GK|29|5000|MEX|2027||<2023-01-01
Fernando Tapia|GK|25|1500|MEX|2029||<2026-01-07
Rodolfo Cota|GK|39|180|MEX|2027||<2026-07-01
César Lugo|GK|23|100|MEX|||2026-07-01
Santiago Ramos Mingo|CB|24|12000|ARG||ITA|2026-09-11
Santiago Bueno|CB|27|10000|URU|2027|ITA|2026-09-11
Israel Reyes|CB|26|6500|MEX|2029||<2023-01-01
Ramón Juárez|CB|25|5500|MEX|2027||2023-07-01
Miguel Vázquez|CB|22|1500|MEX|||2024-07-01
Franco Rossano|LB|21|2000|MEX|||2026-07-01
Cristián Borja|LB|33|1300|COL|2027||2024-07-19
Dagoberto Espinoza|RB|22|4500|MEX|2027||2024-07-01
Kevin Álvarez|RB|27|2500|MEX|2027||<2023-07-01
Emilio Lara|RB|24|1800|MEX|||<2022-07-01
Alan Cervantes|DM|28|4500|MEX|2029||<2024-07-15
Edwin Cerrillo|DM|26|3500|USA|2028|MEX|2026-08-02
Ícaro da Conceição|DM|19|1000|BRA|||2026-07-01
Érick Sánchez|CM|27|6000|MEX|2028||<2024-07-01
Carlos Álvarez|AM|23|15000|ESP|||2026-09-02
Raphael Veiga|AM|31|6000|BRA|2027||2026-02-03
Alexis Gutiérrez|AM|26|4000|MEX|2029||<2025-07-01
Diego Arriaga|AM|22|300|MEX
Brian Rodríguez|LW|26|12000|URU|2030||2022-08-24
Óscar Perea|LW|21|2500|COL|2031||2026-07-28
Álex Zendejas|RW|28|9000|USA|2027|MEX|<2022-01-17
Isaías Violante|RW|23|6000|MEX|2028||<2025-07-08
Víctor Dávila|ST|28|2500|CHI|2027||2024-09-15
Henry Martin|ST|33|1800|MEX|2027||<2018-01-01
Miguel Borja|ST|33|1500|COL|2027||2026-08-20
José Raúl Zúñiga|ST|32|1000|COL|2027||<2025-07-13
Alejandro Cárdenas|ST|20|300|MEX` },
    { id: 'cruz_azul', name: 'Крус Асуль', city: 'Мехико', stadium: 'Estadio Banorte', cap: 87523, colors: ['#0047ab', '#ffffff'], players: `
Kevin Mier|GK|26|7000|COL|2029||2024-01-12
Andrés Gudiño|GK|29|2000|MEX|2027||2020-07-01
Ricardo Rodríguez|GK|25|1000|MEX|||2026-08-28
Emmanuel Ochoa|GK|21|1000|MEX||USA|2025-07-01
Willer Ditta|CB|28|7000|COL|2028||2023-07-06
Jesús Orozco Chiquete|CB|24|6000|MEX|2030||<2025-01-07
Alán Montes|CB|26|2000|MEX|2027||<2026-07-11
Gonzalo Piovi|CB|32|2000|ARG|2029|ESP|2024-01-01
Jorge Rodarte|CB|22|1500|MEX|||2026-01-01
Raymundo Rubio|CB|25|175|MEX|||2026-07-01
Omar Campos|LB|24|5000|MEX|2029||2025-01-05
Ralph Orquin|LB|23|2000|MEX|2029|ESP|<2026-09-10
Alan Mozo|RB|29|2500|MEX|2027||<2026-09-02
Érik Lira|DM|26|14000|MEX|2029||<2022-01-04
Amaury García|DM|24|1500|MEX|2030||2024-07-01
Cristian Jiménez|DM|24|100|MEX|2027||2025-07-01
Jeremy Márquez|CM|26|7000|MEX|2029||<2025-07-10
Carlos Rodríguez|CM|29|6000|MEX|2030||<2022-01-06
Agustín Palavecino|CM|29|4500|ARG|2029|ESP|<2026-01-06
José Paradela|AM|27|9000|ARG|2029||<2025-07-11
Luka Romero|AM|21|4500|ARG|2030|MEX|2025-01-18
Andrés Montaño|AM|24|2000|MEX|2029||2024-07-01
Fernando Sámano|AM|24|150|MEX|||2025-07-01
Carlos Rotondi|LW|29|3000|ARG|2028||2022-07-04
Amaury Morales|RW|20|2500|MEX|2029||2024-01-01
Rogelio González|RW|21|100|MEX
Nicolás Ibáñez|ST|32|2000|ARG|2029|MEX|<2026-02-09
Christian Ebere|ST|28|1500|NGA|2029||2026-02-06
Gabriel Fernández|ST|32|1500|URU|2027||<2024-01-01
Juan Calero|ST|27|1000|COL|2028|MEX|2026-07-10
Mateo Levy|ST|20|1000|MEX|2027|ARG|2026-01-01
Bryan Gamboa|ST|24|100|MEX|||2025-07-01` },
    { id: 'chivas', name: 'Гвадалахара (Чивас)', city: 'Гвадалахара', stadium: 'Estadio Akron', cap: 49813, colors: ['#d50032', '#ffffff'], players: `
Raúl Rangel|GK|26|8000|MEX|2028||2022-01-01
Óscar Whalley|GK|32|300|ESP|2027|MEX|2023-07-01
Sebastián Liceaga|GK|19|200|MEX|||2026-07-01
Diego Campillo|CB|25|6000|MEX|2027||<2025-07-04
José Castillo|CB|24|4000|MEX|2028||<2024-01-01
Daniel Aguirre|CB|27|4000|USA|2030|MEX|2024-07-01
Luis Gabriel Rey|CB|24|2000|MEX|||<2025-01-01
Miguel Tapias|CB|29|1300|MEX|2028||2025-01-02
Bryan González|LB|23|7500|MEX|2029||<2025-07-02
Richard Ledezma|RB|26|6000|MEX|2029|USA|2025-07-01
Miguel Gómez|RB|24|1200|MEX|||2025-07-01
Omar Govea|DM|30|1800|MEX|2027||<2024-07-01
Fernando González|DM|32|1000|MEX|2028||<2022-07-01
Luis Romo|CM|31|2800|MEX|2029||<2025-01-11
Santiago Sandoval|AM|19|6500|MEX|2029||2025-07-01
Efraín Álvarez|AM|24|6000|MEX|2029|USA|<2025-07-01
Brian Gutiérrez|AM|23|6000|MEX|2030|USA|2026-01-01
Jordán Carrillo|AM|24|6000|MEX|2030||<2026-07-01
Kevin Castañeda|AM|27|4500|MEX|2031||<2026-07-01
Jonathan Pérez|LW|23|800|MEX|2030|USA|2026-02-09
Roberto Alvarado|RW|28|12000|MEX|2029||<2022-01-01
Hugo Camberos|RW|19|6500|MEX|2029||2025-01-01
Ricardo Marín|ST|28|3500|MEX|2030||2023-07-01
Ángel Sepúlveda|ST|35|450|MEX|2029||<2026-01-01` },
    { id: 'toluca', name: 'Толука', city: 'Толука', stadium: 'Estadio Nemesio Díez', cap: 30000, colors: ['#d0021b', '#ffffff'], players: `
Hugo González|GK|36|300|MEX|||2026-07-01
Luis García|GK|33|250|MEX|2028||<2017-07-01
Ronaldo Beltrán|GK|24|50|MEX|||<2025-07-01
David Shrem|GK|21|100|MEX||ESP|2026-01-07
Federico Pereira|CB|26|7000|URU|2028|ITA|2024-01-01
Bruno Méndez|CB|27|5000|URU|2027|ESP|2024-07-09
Everardo López|CB|21|4000|MEX|2030||2024-10-01
Luan|CB|33|1000|BRA|||2024-07-01
Antonio Briseño|CB|32|700|MEX||ESP|<2025-01-01
Brian García|LB|29|2500|MEX|2028||<2023-01-01
Jesús Gallardo|LB|32|2500|MEX|2027||<2024-07-01
Santiago Simón|RB|24|4000|ARG|2029||2025-08-16
Diego Barbosa|RB|30|2000|MEX|2029||<2025-01-01
Franco Romero|DM|26|7000|ARG|2028||2025-01-15
Fernando Arce|DM|29|1200|USA|2027|MEX|<2026-07-01
Marcel Ruiz|CM|26|8500|MEX|2027||<2022-07-01
Érick Gutiérrez|CM|31|1300|MEX|2027||<2026-07-01
Nicolás Castro|AM|26|6000|ARG|2029||2025-07-01
Víctor Guzmán|AM|31|1500|MEX|||<2026-07-01
Alexis Vega|LW|28|8000|MEX|2028||<2024-01-18
Pável Pérez|LW|28|2500|MEX|||<2026-01-06
Helinho|RW|26|6500|BRA|2029||2024-09-15
Jesús Angulo|RW|29|5000|MEX|2027||<2023-07-14
Federico Viñas|ST|28|8000|URU|2030||<2026-07-30
Paulinho|ST|33|5000|POR|2027||2024-07-01
Iván López|ST|27|2000|MEX|||<2023-01-01
Jorge Díaz Price|ST|28|2000|MEX|||2026-01-06
Oswaldo Virgen|ST|21|1500|MEX|2027||2025-07-01` },
    { id: 'tigres', name: 'Тигрес', city: 'Монтеррей', stadium: 'Estadio Universitario', cap: 42500, colors: ['#fdb913', '#00539f'], players: `
Nahuel Guzmán|GK|40|175|ARG|2027||2014-07-04
Felipe Rodríguez|GK|37|100|MEX|2027||<2023-07-01
Antonio Carrera|GK|22|25|USA||MEX|2025-07-03
Joaquim|CB|27|7000|BRA|2027||2024-07-27
Alan Franco|CB|30|4000|ARG|2027||2026-07-15
Jesús Angulo|CB|28|3500|MEX|2028||<2022-01-01
Rafael Guerrero|CB|23|1000|MEX|2027||2025-07-01
Marco Farfán|LB|27|2000|USA|2028|MEX|2025-08-06
Osvaldo Rodríguez|LB|30|1300|MEX|2027||<2024-08-20
Francisco Reyes|LB|28|1000|MEX|||<2026-07-01
Fernando Ordóñez|LB|25|200|MEX|2027||2023-07-01
Jesús Garza|RB|26|5000|MEX|2029||2022-07-01
Vladímir Loroña|RB|27|1200|MEX|||<2022-07-13
Rômulo|DM|26|6500|BRA|2028||2025-01-26
César Araújo|DM|25|4000|URU|2029||2026-02-03
Henrique Simeone|DM|19|25|MEX||BRA|2026-07-01
Fernando Gorriarán|CM|31|3000|URU|2027||<2023-01-01
Juan Pablo Vigón|CM|35|400|MEX|||<2021-07-01
Juan Brunetta|AM|29|9000|ARG|2029|ITA|<2024-01-01
Marcelo Flores|LW|23|4000|CAN|2027|MEX|2023-09-10
Emiliano Gómez|LW|25|2500|URU|||<2026-09-09
Diego Sánchez|LW|21|1500|MEX|2028||2025-07-01
Mauro Laínez|LW|30|550|MEX|2028||2026-07-24
Jaidyn Contreras|LW|19|100|USA|2027|HON|2026-09-02
Diego Lainez|RW|26|7000|MEX|2027|ESP|2023-08-01
Ozziel Herrera|RW|25|6500|MEX|2027|CUB|<2023-07-24
Rodrigo Aguirre|ST|32|2000|URU|2030||<2026-02-06
Ricardo Monreal|ST|25|1500|MEX|2030||<2026-08-27
Guillermo Martínez|ST|31|1300|MEX|||<2026-09-09` },
    { id: 'monterrey', name: 'Монтеррей', city: 'Монтеррей', stadium: 'Estadio BBVA', cap: 53529, colors: ['#00205b', '#ffffff'], players: `
Luis Cárdenas|GK|33|200|MEX|2028||2016-07-01
Esteban Andrada|GK|35|150|ARG|2027||2021-07-04
César Ramos|GK|26|150|MEX|2028||<2021-07-01
Víctor Guzmán|CB|24|5500|MEX|2028||<2023-01-11
Carlos Salcedo|CB|33|800|MEX|2028||<2025-01-19
César Bustos|CB|21|100|MEX|2029||2025-07-01
Gerardo Arteaga|LB|28|2000|MEX|2028||2024-01-29
Alonso Aceves|LB|25|2000|MEX|2030||<2026-01-01
Luis Reyes|LB|35|400|MEX|2027||<2025-01-02
Ricardo Chávez|RB|31|1800|MEX|2028||<2025-01-02
Érick Aguirre|RB|29|1500|MEX|2027||<2021-07-03
Stefan Medina|RB|34|800|COL|2028||2014-07-01
Javier Casillas|RB|25|400|MEX|||2026-07-01
Fidel Ambríz|DM|23|3500|MEX|2029||<2024-08-27
César Garza|DM|21|2500|MEX|||<2026-01-01
Jorge Rodríguez|DM|31|2500|ARG|2027||2024-01-05
Orbelín Pineda|CM|30|6500|MEX|||2026-07-18
Iker Fimbres|CM|21|4500|MEX|||2025-01-01
Óliver Torres|CM|31|2500|ESP|2027||2024-07-01
Sebastián Rodríguez|CM|19|25|MEX|2027|USA|2026-02-05
Paxon Ruffin|AM|16|500|USA||MEX
Lucas Ocampos|LW|32|3500|ARG|2027|ESP|2024-09-03
Luca Orellano|RW|26|7500|ARG|2031||2026-01-11
Jesús Corona|RW|33|1300|MEX|2027|POR|2023-09-01
Hugo Cuypers|ST|29|10000|BEL|2029||2026-07-23
Diego Rossi|ST|28|7500|URU|2029|ITA|2026-07-03
Roberto de la Rosa|ST|26|1800|MEX|||<2025-07-01
Uros Djurdjevic|ST|32|1000|MNE|2028|SRB|<2026-02-03` },
    { id: 'tijuana', name: 'Тихуана', city: 'Тихуана', stadium: 'Estadio Caliente', cap: 33333, colors: ['#c8102e', '#000000'], players: `
Antonio Rodríguez|GK|34|550|MEX|2027||<2023-01-01
Salim Hernández|GK|27|450|MEX||PLE|<2025-07-07
Alejandro Gómez|CB|24|3000|MEX|2028||<2024-01-11
Jackson Porozo|CB|26|2500|ECU|2027||2026-01-09
Unai Bilbao|CB|32|1000|ESP|2027||<2024-07-01
Alan Vega|LB|26|1000|MEX|||2023-07-01
Pablo Ortiz|LB|24|1000|MEX|||<2025-07-09
Rafael Fernández|RB|26|2500|MEX|2027||<2023-07-01
Aarón Mejía|RB|25|1800|MEX|||<2023-07-01
Iván Tona|DM|26|2000|MEX|2027||2023-07-01
Ángel Zapata|DM|25|800|MEX|||<2026-01-01
Frank Boya|DM|30|800|CMR|2027|BEL|2025-02-03
Ignacio Rivero|CM|34|1000|URU|2028||<2026-01-06
Ramiro Árciga|RW|22|4000|MEX|2028||2025-01-01
Gilberto Mora|AM|18|25000|MEX|2029||2024-07-01
Aldahir Pérez|AM|22|1000|MEX|2030||<2026-01-09
Yael Padilla|LW|20|1800|MEX|2029||<2026-07-01
Adonis Preciado|LW|29|1200|ECU|2028||<2025-07-03
Francisco González|RW|25|2000|ARG|2029||2026-08-07
Diego Abreu|ST|23|3500|URU|2031|ITA|2026-01-10
Mourad El Ghezouani|ST|28|2500|MAR||ESP|2025-09-09
Shamar Nicholson|ST|29|2000|JAM|||2025-02-02
Elias Manoel|ST|24|1800|BRA|||2026-08-04` },
    { id: 'pumas', name: 'Пумас УНАМ', city: 'Мехико', stadium: 'Estadio Olímpico Universitario', cap: 72449, colors: ['#002855', '#c5a35a'], players: `
Keylor Navas|GK|39|700|CRC|2027|ESP|2025-07-21
Pablo Lara|GK|21|450|MEX|||2025-01-01
Miguel Paul|GK|23|100|MEX|||2026-07-01
Nathan Silva|CB|29|4000|BRA|2027||2023-07-01
Rubén Duarte|CB|31|2000|ESP|2027||2024-07-09
Ángel Azuaje|CB|22|800|VEN|2028|MEX|2025-07-01
Tony Leone|CB|22|500|MEX|2027|USA|<2026-01-01
Álvaro Angulo|LB|29|2500|COL|2028||2025-07-15
Cristian Calderón|LB|29|1300|MEX|||<2026-07-04
Rodrigo López|RB|24|4500|MEX|2027||<2023-08-29
Pablo Bennevendo|RB|26|3000|MEX|2027||2022-07-01
Jesús Rivas|RB|24|1800|MEX|||2024-07-01
Pablo Monroy|RB|24|1000|MEX|||2023-01-01
Santiago Trigos|DM|24|1200|MEX|||2023-07-01
Pedro Vite|CM|24|6500|ECU|2029||2025-07-18
Adalberto Carrasquilla|CM|27|4000|PAN|2028||2025-01-16
Víctor Arteaga|CM|22|1000|MEX|2027||<2026-07-11
Sebastián Córdova|AM|29|2800|MEX|2028||<2026-07-01
Israel Luna|AM|24|750|MEX|||<2026-08-14
Ángel Rico|AM|21|600|MEX|2027||2026-01-01
César Huerta|LW|25|3000|MEX|2029||2026-08-27
Luciano Herrera|LW|30|1000|ARG|2027||2026-07-24
Uriel Antuna|RW|29|2500|MEX|2029||<2026-01-29
Alan Medina|RW|29|1500|MEX|2029||<2026-07-01
Robert Morales|ST|27|7000|PAR|2027||<2026-01-08
Juninho|ST|29|4000|BRA|2029||2026-01-01
José Juan Macías|ST|27|800|MEX|2028||2025-08-20
Santiago López|ST|21|75|CAN||MEX|2025-07-01` },
    { id: 'atlas', name: 'Атлас', city: 'Гвадалахара', stadium: 'Estadio Jalisco', cap: 56713, colors: ['#c8102e', '#000000'], players: `
Camilo Vargas|GK|37|400|COL|2028||2019-07-01
Antonio Sánchez|GK|26|400|MEX|||2022-07-01
Juan José Purata|CB|28|3500|MEX|2027||<2026-07-29
Adonis Frías|CB|28|2500|ARG|2029||2026-08-26
Gaddi Aguirre|CB|30|900|MEX|2027||2016-01-01
Manuel Capasso|CB|30|600|ARG|2029|ITA|2026-01-01
Adrián Mora|CB|29|550|MEX|2027||<2026-05-13
Rivaldo Lozano|LB|28|1200|MEX|||2019-07-01
Jorge Rodríguez|LB|25|800|MEX|||<2025-07-01
Milton Valenzuela|LB|28|550|ARG|2029|USA|2026-07-01
Jorge Sánchez|RB|28|3000|MEX|2030||2026-07-16
Víctor Ríos|DM|22|2500|MEX|2029||2024-01-01
Paulo Ramírez|DM|24|1500|MEX|||2025-01-01
Édgar Zaldívar|DM|30|800|MEX|||2017-07-01
Aldo Rocha|DM|33|700|MEX|2027||2021-01-01
Elías Montiel|CM|21|8000|MEX|2030||<2026-09-10
Luís Esteves|AM|28|6000|POR|2030||2026-07-01
Arturo González|AM|32|1800|MEX|2028||<2025-07-16
Kevin Zenón|LW|25|5000|ARG|2030||2026-09-11
Sergio Hernández|LW|22|1500|MEX|||2025-07-01
Duk|RW|26|2000|CPV||POR|2026-07-01
Luis Gamboa|RW|18|500|MEX|||2026-01-01
Florián Monzón|ST|25|2500|ARG|2029||2026-08-07
Ryan Mmaee|ST|29|2200|MAR||BEL|2026-07-09` },
    { id: 'leon', name: 'Леон', city: 'Леон', stadium: 'Estadio León (Nou Camp)', cap: 33943, colors: ['#00703c', '#ffffff'], players: `
Óscar García|GK|23|4500|MEX|2029||2024-07-01
Julio González|GK|35|400|MEX||ESP|2026-08-01
Jhohan Romaña|CB|28|6000|COL|2030||2026-07-08
Valentín Gauthier|CB|23|1500|URU|2029|ITA|2025-07-01
Juan Guevara|CB|25|1200|COL|2029||2026-07-02
Sebastián Vegas|CB|29|1000|CHI|2027||<2026-01-01
Paul Bellón|CB|29|1000|MEX||FRA|2022-07-01
Salvador Reyes|LB|28|1500|MEX|||<2024-07-01
Abraham Villegas|LB|23|100|MEX|2027||2026-01-01
Iván Moreno|RB|28|1800|MEX|||<2023-07-01
Bryan Colula|RB|30|1000|MEX|2028||2026-01-04
David Ramírez|RB|30|800|MEX|2028||<2020-07-01
Rodrigo Echeverría|DM|31|2000|CHI|2028||2025-01-22
José Rodríguez|DM|30|800|MEX|2028||2017-07-01
Sebastián Fierro|DM|25|650|MEX|||2026-07-01
Fernando Beltrán|CM|28|2500|MEX|2028||<2025-07-01
Ángel Estrada|CM|23|800|MEX|2027||2024-07-01
Luis Valadez|CM|22|25|MEX|||2026-07-01
Ismael Díaz|LW|29|1800|PAN|2028||2025-07-24
Daniel Arcila|LW|24|1500|COL|2027||2025-08-04
Juan Domínguez|RW|28|2500|MEX|||<2025-12-25
Edgar Guerra|RW|25|2000|COL|2028||<2024-02-01
Jordi Cortizo|RW|30|1500|MEX|2028|ESP|<2025-08-09
Díber Cambindo|ST|30|4500|COL|2029||<2026-01-01
Alfonso Alvarado|ST|26|2000|MEX|||<2025-08-06
Santiago Londoño|ST|18|700|COL|||2026-08-21` },
    { id: 'santos_laguna', name: 'Сантос Лагуна', city: 'Торреон', stadium: 'Estadio Corona', cap: 28914, colors: ['#00843d', '#ffffff'], players: `
Carlos Acevedo|GK|30|2800|MEX|2027||2017-07-01
Héctor Holguín|GK|25|350|MEX|2027|USA|2022-02-03
Bruno Amione|CB|24|2500|ARG|2028|ITA|2024-02-01
Franco Pardo|CB|29|2000|ARG|2030||2026-07-01
Efraín Orona|CB|27|1000|MEX|2027||<2026-01-05
Felipe Sánchez|CB|22|800|ARG|2027|ITA|2026-07-05
Geovanni Pérez|CB|21|400|MEX|||2025-07-01
Emmanuel Echeverría|LB|23|1500|MEX|||2024-07-01
Kevin Picón|RB|22|1000|MEX|||2026-01-01
Mauricio Cuevas|RB|23|800|USA|2029|MEX|2026-07-02
José Abella|RB|32|750|MEX|2027|LBN|<2025-01-01
Aldo López|DM|26|2500|MEX|||2022-07-01
Salvador Mariscal|DM|23|1200|MEX|||2024-07-01
Javier Güemez|DM|35|400|MEX|2027||<2025-01-01
Pedro Aquino|DM|31|350|PER|2028||2023-07-01
Facundo Cáseres|CM|25|2500|ARG|2030||2026-09-04
Nelson Cedillo|CM|19|50|MEX
Ezequiel Bullaude|AM|26|5000|ARG|2027|ITA|<2026-01-05
Fran Villalba|AM|28|1500|ESP|2027||2024-07-07
Luis Gómez|AM|19|350|MEX|||2026-01-01
Joshua Mancha|AM|22|100|MEX|||2026-07-01
Kevin Palacios|LW|26|800|COL|2029||2025-07-10
Diego González|RW|23|5500|PAR|||<2026-07-01
Ramiro Sordo|RW|26|2000|ARG|2028||2024-01-18
Diego Medina|RW|25|800|MEX|||2022-01-01
Lucas Di Yorio|ST|29|2000|ARG|2029|ITA|2026-01-01
Eduardo Aguirre|ST|28|2000|MEX|||<2026-07-01
Esteban Lozano|ST|23|2000|MEX|2027|ESP|<2026-08-31
Tahiel Jiménez|ST|20|1000|MEX||ARG|2026-01-01` },
    { id: 'juarez', name: 'Хуарес', city: 'Сьюдад-Хуарес', stadium: 'Estadio Olímpico Benito Juárez', cap: 19703, colors: ['#c8102e', '#00a650'], players: `
Sebastián Jurado|GK|29|1800|MEX|2028||<2025-01-02
Benny Díaz|GK|27|600|USA||MEX|<2024-07-01
Guillermo Ruiz|GK|22|100|ESP|2027|MEX|2025-07-07
Gilberto Sepúlveda|CB|27|2000|MEX|2027||<2026-07-14
Jesús Murillo|CB|32|1500|COL|2028||2025-01-02
Haret Ortega|CB|26|1200|MEX|2027||<2023-07-01
Daniel Piña|CB|24|450|CHI|||2026-09-11
Bryan Romero|CB|23|100|USA|2028|MEX|2024-07-01
Alejandro Mayorga|LB|29|1200|MEX|2029||<2025-07-04
Eder López|LB|20|1000|MEX|2028||2026-01-01
Francisco Nevárez|RB|25|1000|MEX|||2022-01-01
Javier Aquino|RB|36|300|MEX|2027||2026-01-10
Denzell García|DM|23|5500|MEX|2029||2023-01-01
Rodrigo Dourado|DM|32|2000|BRA|2027||<2026-08-08
Lucas Romero|DM|24|350|PAR|2029||2026-07-01
Said Godínez|DM|22|300|MEX|||2026-07-01
Leonardo Rodríguez|DM|22|300|MEX|||2026-09-01
Monchu|CM|27|5000|ESP|2027||2026-02-06
Guilherme Castilho|CM|27|2500|BRA|2028||2025-02-11
Juan Sigala|CM|19|100|MEX|||2026-07-01
José Luis Rodríguez|LW|28|2500|PAN|2028||2025-07-01
Madson|LW|27|2000|BRA|2027||2025-02-03
Raymundo Fulgencio|LW|26|1800|MEX|2028||<2025-07-15
Ricardinho|LW|28|1000|POR|2028||2025-07-01
Jairo Torres|RW|26|3000|MEX|2029||2024-02-21
Óscar Estupiñán|ST|29|2500|COL|2027||2024-08-29
Luca Martínez Dupuy|ST|25|1000|MEX|2027|ARG|2026-01-23
Ettson Ayón|ST|25|1000|MEX|2027||<2026-01-04` },
    { id: 'necaxa', name: 'Некакса', city: 'Агуаскальентес', stadium: 'Estadio Victoria', cap: 25500, colors: ['#e4002b', '#ffffff'], players: `
Javier Orantes|GK|21|300|MEX
Christopher Andrade|GK|25|150|MEX|2027||2026-07-01
Luis Jiménez|GK|22|75|MEX|2031||2025-07-01
Naves|CB|24|4000|BRA|2030||2026-07-21
Agustín Oliveros|CB|28|3500|URU|2027|ESP|2021-07-01
Alexis Peña|CB|30|2000|MEX|2028||<2023-01-01
Raúl Martínez|CB|23|1000|MEX|2029||<2026-01-30
Francisco Méndez|CB|21|500|MEX|2027||<2026-01-07
Diego Ochoa|CB|21|75|MEX|||2026-07-01
Carlos Vargas|LB|27|500|MEX|||2026-07-01
Emilio Martínez|RB|23|1200|MEX|2027||<2023-07-01
Pedro Pedraza|DM|26|2500|MEX|2027||<2026-07-01
Danny Leyva|DM|23|2000|USA|2029||2026-01-01
Lorenzo Faravelli|CM|33|1000|ARG|2027|ECU|<2026-01-08
Kevin Rosero|RW|27|1000|COL|2027||2024-07-01
Mauro Zaleta|LW|24|1000|MEX|2027||<2026-07-02
Javier Ruiz|AM|22|3500|ARG|2031||2026-02-05
Juan Torres|AM|22|1500|COL|2029||2026-07-01
Matías Espíndola|AM|22|1500|ARG|2030||2026-07-09
Israel Tello|AM|20|1000|MEX|||2026-01-01
Rogelio Cortéz|AM|22|600|MEX|||2025-07-01
Emilio Rodríguez|RW|23|2500|MEX|||<2026-07-01
Owen González|RW|23|1000|MEX|2027||<2026-07-28
Julián Carranza|ST|26|5000|ARG||ITA|2026-01-03
Juan Valencia|ST|22|1000|COL|||2026-07-14
Misael Pedroza|ST|23|700|MEX|||2026-07-01` },
    { id: 'san_luis', name: 'Атлетико Сан-Луис', city: 'Сан-Луис-Потоси', stadium: 'Estadio Libertad Financiera', cap: 26400, colors: ['#e4002b', '#002d72'], players: `
Andrés Sánchez|GK|29|2000|MEX|2027||2021-07-01
César López|GK|26|450|MEX|||2023-07-01
Gibrán Lajud|GK|32|300|MEX||LBN|2025-08-21
Eduardo Águila|CB|24|3500|MEX|2028||2022-07-01
Robson Bambu|CB|28|2500|BRA|||2025-09-12
Miguel García|CB|25|2000|MEX|||2025-01-02
Benjamín Galindo|CB|27|800|MEX|||2026-01-01
Juanpe|CB|35|350|ESP|2027||2025-07-03
Lucas Esteves|LB|26|1800|BRA|2030||2026-01-29
Aldo Cruz|LB|29|1000|MEX|2027||<2024-01-01
Román Torres|RB|21|1000|MEX|||2025-01-01
Johan Caicedo|DM|22|2000|COL|2027||2026-07-16
Roberto Meraz|DM|27|1800|MEX|2028||2026-01-08
Sébastien Salles-Lamonge|CM|30|2000|FRA|2028||2023-07-01
Óscar Macías|CM|28|1000|MEX|2027||2024-01-01
Sebastián Pérez-Bouquet|AM|23|1800|MEX|2029||<2025-01-02
David Rodríguez|AM|24|250|USA|2027|MEX|2024-07-01
Rafa Llorente|LW|23|400|ESP|2028||2026-07-01
Benjamín Galdames|RW|25|2500|MEX|2027|CHI|2023-07-01
Anderson Duarte|RW|22|2000|URU|2027||<2026-01-01
Jesús Medina|RW|29|1800|PAR|2027||2026-02-10
João Pedro|ST|34|1500|ITA|2027|BRA|2025-07-01
Santiago Muñóz|ST|24|1500|MEX||USA|<2026-01-07
Leonardo Flores|ST|23|1500|MEX|||<2026-01-01
Felipe Mora|ST|33|1500|CHI|2028||2026-07-30
Ronaldo Nájera|ST|23|500|MEX|||2024-07-01` },
    { id: 'pachuca', name: 'Пачука', city: 'Пачука', stadium: 'Estadio Hidalgo', cap: 25922, colors: ['#002d72', '#ffffff'], players: `
Carlos Moreno|GK|28|3500|MEX|2030||2019-07-01
José Eulogio|GK|22|200|MEX|2030||2022-07-01
Sergio Barreto|CB|27|3000|ARG|2027|PAR|2023-07-01
Jorge Berlanga|CB|23|1500|MEX|2030||2024-01-01
Eduardo Bauermann|CB|30|1300|BRA|||2025-01-01
Pedro Budib|CB|22|100|LBN||MEX|2026-07-01
Francisco Venegas|LB|28|1500|MEX|2027||<2026-07-01
Mauricio Isaís|LB|25|1200|MEX|2027|USA|<2026-07-01
Carlos Sánchez|RB|24|3000|MEX|2030||2024-01-01
Sebastián Santos|RB|23|1500|MEX|2027||<2026-09-09
Christian Rivera|DM|30|1300|COL|2029||2026-01-06
Lenin Rodríguez|DM|22|50|MEX|2029||2026-07-01
Alán Bautista|AM|24|3500|MEX|2030||2023-07-01
Andrés Arroyo|AM|24|1200|COL|||2026-08-28
Rodolfo Pizarro|AM|32|750|MEX|2028||<2026-07-01
Oussama Idrissi|LW|30|5500|MAR|2028|NED|2023-09-18
Kenedy|LW|30|650|BRA|2029||2026-07-10
Alexéi Domínguez|RW|21|4500|MEX|2029||2024-01-01
Nicolás Vallejo|RW|22|1500|ARG|2027||<2026-07-03
Adrián Alcaraz|ST|27|1000|PAR|||2026-07-16
Illian Hernández|ST|26|550|MEX|||<2026-07-01
Salomón Rondón|ST|37|350|VEN|2028||2024-01-01` },
    { id: 'queretaro', name: 'Керетаро', city: 'Керетаро', stadium: 'Estadio Corregidora', cap: 34130, colors: ['#0047ab', '#000000'], players: `
José Hernández|GK|29|300|MEX|||<2025-06-24
Guillermo Allison|GK|36|100|MEX|||2023-07-01
Lucas Abascia|CB|30|1300|ARG|2029|ESP|2026-01-01
Diego Reyes|CB|34|500|MEX|||<2025-08-17
Carlos Villanueva|CB|32|250|MEX|||<2025-07-22
Paulo Victor|LB|25|800|BRA|2030||2026-07-03
Daniel Parra|LB|27|800|MEX|||2026-01-01
Bayron Duarte|RB|23|500|COL|2029||2026-01-01
Sergio Garcia Brothers|RB|19|100|MEX||USA
Santiago Homenchenko|DM|23|4500|URU|2029|UKR|<2026-07-01
Bernardo Parra|DM|21|1500|MEX|2030||<2026-01-13
Carlo García|CM|25|1000|ESP|2029||2025-08-10
Érik Dueñas|CM|22|350|MEX||USA|2026-01-01
Álex Alcalá|AM|21|150|MEX||USA|2026-01-01
Mono Martínez|AM|16|150|MEX||USA|2026-07-01
Jesús Arellano|AM|21|100|MEX|||2026-01-01
Juan Robles|LW|23|650|MEX|||2025-07-01
Denilson Muñoz|LW|22|175|MEX|||2026-08-24
Enzo Giménez|RW|28|2500|PAR|2030||2026-07-11
Iker Benito|RW|24|1500|ESP|||2026-08-14
Waldo Madrid|RW|23|200|MEX|2027||2026-01-07
Alí Ávila|ST|23|3500|MEX|2030||2025-07-22
Mateo Coronel|ST|28|3000|ARG|2027||2025-09-12
Eduardo Pérez|ST|33|50|MEX|2027||2026-01-01` },
    { id: 'puebla', name: 'Пуэбла', city: 'Пуэбла', stadium: 'Estadio Cuauhtémoc', cap: 51726, colors: ['#ffffff', '#002d72'], players: `
Daniel Gutiérrez|GK|29|1000|MEX|2029||2026-01-04
Jesús Rodríguez|GK|33|300|MEX|||2018-07-01
Facundo Almada|CB|28|1500|ARG|||2026-07-01
Eduardo Navarro|CB|22|1500|MEX|||2025-07-01
José Pachuca|CB|21|1000|MEX|2028||2024-07-01
Juan Pablo Vargas|CB|31|800|CRC|2028||2026-01-01
Ángel Leyva|CB|20|100|MEX|||2026-07-01
Fernando Monárrez|LB|27|1000|MEX|||<2025-07-06
Jair Díaz|LB|28|900|MEX|||2026-08-13
Óscar Villa|LB|25|250|MEX|2027||2026-07-01
Íker Moreno|RB|23|1000|MEX|||<2026-07-01
Alberto Herrera|DM|25|800|MEX|||2026-07-01
Alonso Ramírez|DM|25|300|MEX|2028||<2026-01-01
Lucas Camilo|DM|20|150|BRA|||2026-07-01
Eduardo Armenta|CM|24|600|MEX|||<2026-09-10
Sergio Sanabria|CM|27|250|PAR|2027||2026-07-04
Mathías Tomás|AM|25|1300|URU|2028||2026-07-06
Omar Moreno|AM|21|1000|MEX|||2026-07-01
Carlos Baltazar|AM|29|1000|MEX|2029||2025-07-01
Alejandro Organista|AM|26|1000|MEX|||2025-07-06
Raúl Castillo|AM|25|800|MEX|2028||2024-07-01
Heriberto Jurado|LW|21|700|MEX|2027||2026-09-11
Kevin Velasco|RW|29|1000|COL|2028||2024-07-01
Brayan Garnica|RW|30|1000|MEX|2028||<2025-01-02
Eduardo Mustre|ST|23|1500|MEX|||2026-01-04
Ignacio Maestro Puch|ST|23|600|ARG|2027|ITA|2026-01-01
Luifer Hernández|ST|25|550|VEN|2028|COL|2026-07-01` },
    { id: 'atlante', name: 'Атланте', city: 'Мехико', stadium: 'Estadio Banorte', cap: 87523, colors: ['#002d72', '#c8102e'], players: `
Jordan García|GK|21|3000|COL|||<2026-08-10
Óscar Jiménez|GK|38|50|MEX|||<2026-07-01
Roberto Barragán|GK|22|50|MEX|||2025-07-01
Aarón Quirós|CB|25|1800|ARG|2027||2026-07-28
Diogo Bagüí|CB|21|1000|ECU|2027||<2026-07-01
Luis Sánchez|CB|26|800|MEX|2027||<2026-07-13
Nico Carrera|CB|24|500|USA||MEX|2025-07-01
Eduardo Tercero|CB|30|350|MEX|||2026-07-01
Cristóbal Alfaro|CB|19|300|MEX|||2026-07-14
Walter Clar|LB|32|400|PAR|2029||2026-07-11
Armando Escobar|LB|33|225|MEX|||<2021-07-01
Ari Contreras|LB|20|100|MEX|||2026-08-14
Walter Portales|RB|22|500|USA|2028|MEX|2026-07-11
Hardy Meza|DM|26|800|MEX|||2023-07-15
Eugenio Pizzuto|DM|24|500|MEX||ITA|<2026-01-06
Martín Fernández|DM|25|400|URU|||2026-07-14
Leonardo Mejía|CM|25|25|MEX|||2023-07-13
Jhojan Julio|AM|28|1500|ECU|||<2026-07-01
Maximiliano García|AM|26|600|MEX|||2021-07-01
Javier Ibarra|AM|28|300|MEX|||2024-07-01
Octavio Vázquez|AM|21|100|MEX|||2026-07-14
Christian Bermúdez|AM|39|25|MEX|||2021-07-01
Martín Sarrafiore|LW|29|1200|ARG|2029|MEX|2026-08-14
Luis Calzadilla|LW|26|1000|MEX|||2025-07-01
Edgar Jiménez|RW|25|500|MEX|||2022-07-01
Daniel González|RW|21|150|MEX|||2026-01-01
Gilberto Adame|RW|22|50|MEX|||2026-07-14
Luis Puente|ST|23|1000|MEX|||2026-01-01
Jairón Charcopa|ST|22|300|ECU|2027||2026-02-13
Joaquín Moxica|ST|20|50|MEX|2027||2026-07-03` },
  ],
});
