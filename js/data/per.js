// Лига 1 (Перу) 2026/27. Составы и рыночная стоимость — Transfermarkt (ноябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'per', name: 'Лига 1 (Перу)', short: 'Перу', country: 'PER', tier: 1, weekday: 0,
  autumn: { from: '08-01', rounds: 17 }, spring: { from: '02-06', rounds: 17 },
  ticket: 3, prize: [1000, 950, 900, 900, 850, 800, 750, 700, 650, 650, 600, 550, 500, 450, 400, 400, 350, 300],
  teams: [
    { id: 'universitario', name: 'Университарио', city: 'Лима', stadium: 'Estadio Monumental U Marathon', cap: 80093, colors: ['#f5e6c8', '#8a1538'], players: `
Diego Romero|GK|25|1000|PER|2028||2020-01-01
Miguel Vargas|GK|30|450|CHI|2027|PER|<2025-01-01
Jhefferson Rodríguez|GK|20|75|PER|2027||2024-01-01
Anderson Santamaría|CB|34|450|PER|2028||2025-06-24
Williams Riveros|CB|33|350|PAR|2028||2024-01-01
Caín Fara|CB|32|250|ARG|2027||2026-01-01
Matías Di Benedetto|CB|33|250|ARG|2028|PER|2023-01-01
Aldo Corzo|CB|37|125|PER|2027||2017-01-01
César Inga|LB|24|1200|PER|2028||<2025-01-01
Jorge Gutiérrez|LB|28|800|PAN|2027||2026-08-11
Jorge Murrugarra|DM|29|500|PER|2027||2021-01-04
Juan Manuel Requena|DM|27|450|ARG|||2026-07-14
Diogo Vásquez|DM|19|100|PER|||2026-01-24
Sebastian Flores|DM|21|100|PER|2028||2025-01-01
Jairo Concha|CM|27|1500|PER|2027||<2024-01-10
Adrián Quiroz|CM|27|500|PER|2029||<2026-07-01
Jordan Guivin|CM|28|400|PER|2029||<2026-07-01
Horacio Calcaterra|CM|37|150|PER|2027|ARG|<2023-01-01
Andy Polo|RW|32|700|PER|2027||2022-03-21
Piero Quispe|AM|25|1600|PER|2028||2026-07-28
Fabián Cabanillas|AM|21|100|PER|2027||2026-01-24
Bryan Reyna|LW|28|500|PER|2027||2026-03-12
Héctor Fértoli|LW|31|350|ARG|2027|ITA|2026-01-01
Christopher Loayza|LW|19|100|PER|||2026-01-24
Lisandro Alzugaray|RW|36|150|ARG|2028||2026-01-16
Álex Valera|ST|30|1000|PER|2030||2023-01-11
José Rivera|ST|29|750|PER|2027||2023-01-01
Edison Flores|ST|32|500|PER|2029||2025-01-01
Gianluca Lapadula|ST|36|400|PER|2028|ITA|2026-07-01
Nicolás Rengifo|ST|19|25|PER|||<2025-01-01
Jhon Guzmán|ST|16|100|PER|||2026-01-24` },
    { id: 'alianza_lima', name: 'Альянса Лима', city: 'Лима', stadium: 'Estadio Campeones del \'36', cap: 12000, colors: ['#002d72', '#ffffff'], players: `
Alejandro Duarte|GK|32|325|PER|2029|GER|<2026-01-01
Ángel de la Cruz|GK|24|100|PER|2027||2024-01-01
Fabrisio Mesías|GK|19|100|PER|2028||2024-01-01
Nicolás Díaz|CB|27|1300|CHI|2027||2026-07-21
Renzo Garcés|CB|30|1300|PER|2029||2024-01-01
Mateo Antoni|CB|23|650|URU|2027||2026-01-03
Gianfranco Chávez|CB|28|600|PER|2028||<2025-08-07
Jhoao Velásquez|CB|21|125|PER|2027||2025-01-01
Jonathan García|CB|19|25|PER|2028||2026-01-26
Cristian Carbajal|LB|27|400|PER|2029||<2026-01-01
Marco Huamán|RB|24|600|PER|||<2024-01-04
D'Alessandro Montenegro|RB|23|450|PER|2029||<2026-01-01
Josué Estrada|RB|32|350|PER|2027||<2025-07-08
Luis Advíncula|RB|36|150|PER|2028|ESP|2026-01-09
Jesús Castillo|DM|30|450|PER|2027||2023-01-01
Jean Pierre Archimbaud|DM|32|275|PER|2027||<2025-01-01
Esteban Pavez|DM|36|150|CHI|2027||2026-01-29
Piero Cari|CM|19|450|PER|2028||2025-01-01
Alessandro Burlamaqui|CM|24|400|PER|2029|ESP|2025-07-10
Fernando Gaibor|CM|35|250|ECU|2027||2025-01-04
Jairo Vélez|AM|31|700|PER|2029|ECU|2026-01-01
Cristian Neira|AM|25|400|PER|2028||<2024-02-26
Alan Cantero|LW|28|750|ARG|2029||2026-01-04
Eryc Castillo|LW|31|550|ECU|2029||2025-01-07
Gaspar Gentile|LW|31|350|ARG|2028|PER|<2025-06-24
Kevin Quevedo|RW|29|500|PER|2028||2024-07-25
Federico Girotti|ST|27|1200|ARG|2029|ITA|2026-01-01
Luis Ramos|ST|26|750|PER|2029||<2026-01-01
Paolo Guerrero|ST|42|50|PER|2027||2024-08-31
Geray Motta|ST|17|25|PER|2029|VEN|2026-01-10` },
    { id: 'cristal', name: 'Спортинг Кристал', city: 'Лима', stadium: 'Estadio Alberto Gallardo', cap: 20000, colors: ['#6cace4', '#ffffff'], players: `
Diego Enríquez|GK|24|1000|PER|2028||2022-01-01
Renato Solís|GK|28|300|PER|2027||2019-01-01
César Bautista|GK|19|25|PER|||2025-01-01
Tomás Dulanto|GK|18|100|PER|||2026-01-25
Rafael Lutiger|CB|25|900|PER|2029|SUI|2019-01-01
Luis Abram|CB|30|900|PER|2028|ITA|2025-08-07
Miguel Araujo|CB|32|550|PER|||2025-07-07
Anderson Villacorta|CB|21|300|PER|2027||2026-07-20
Leonardo Díaz|CB|22|175|PER|||2022-01-01
Carlos Salgado|CB|18|100|PER|||2026-01-25
Cristiano|LB|33|225|BRA|2027||2026-01-01
Fabrizio Lora|LB|21|50|PER|||2025-01-01
Leandro Sosa|RB|32|400|URU|2027|PER|2022-01-01
Juan González|RB|30|325|ARG|2027||2026-01-01
Joao Cuenca|RB|19|50|PER|||2026-01-25
Duham Ballumbrosio|RB|19|25|PER|2030||2025-07-01
Agustín Álvarez|DM|25|500|URU|2027||2026-08-11
Gerson Castillo|DM|18|100|PER|||2026-01-25
Martín Távara|CM|27|800|PER|2027||2016-01-01
Ian Wisdom|CM|21|800|PER|2027|ARG|2024-01-01
Catriel Cabellos|CM|22|700|PER|2029|ARG|2025-01-16
Yoshimar Yotún|CM|36|225|PER|2027||2022-03-08
Lionel Herrera|CM|18|25|PER|||2026-01-25
Christofer Gonzales|AM|34|250|PER|2027||<2024-08-02
Gabriel|AM|36|225|BRA|2027||2026-01-01
Cristian Benavente|AM|32|200|ESP|2027|PER|2025-08-08
Yamir del Valle|AM|20|100|PER|||2025-01-01
Maxloren Castro|LW|18|1200|PER|2029||2024-01-01
Juan Manuel Cuesta|LW|24|850|COL|2028||2026-07-01
Josemaría Mellán|LW|19|100|PER|||2025-01-25
Santiago González|RW|27|1500|ARG|2027||2024-01-01
Jair Moretti|RW|19|75|PER|2027||2025-06-24
Luis Iberico|ST|28|350|PER|2027||2024-08-02
Michael Hoyos|ST|35|200|ARG|2028|ECU|2026-07-07
Írven Ávila|ST|36|100|PER|2027||<2021-01-01
Hernán Barcos|ST|42|50|ARG|2027|PER|<2026-07-01` },
    { id: 'melgar', name: 'Мельгар', city: 'Арекипа', stadium: 'Estadio de la Universidad Nacional San Agustín', cap: 40217, colors: ['#c8102e', '#000000'], players: `
Jorge Cabezudo|GK|25|400|PER|2028||2020-01-01
Carlos Cáceda|GK|35|250|PER|2027||2020-01-01
Ricardo Farro|GK|41|10|PER|2027||<2021-01-01
Facundo de la Cruz|GK|19|100|PER|2032||2026-01-25
Matías Lazo|CB|23|1200|PER|2029||2021-01-01
Juan Escobar|CB|31|600|PAR|2028||2026-02-28
Jesús Alcántar|CB|23|500|MEX|2027||2026-01-01
Alec Deneumostier|CB|27|450|PER|2027|BEL|2018-01-13
Leonel González|CB|32|225|ARG|2028||2025-01-01
Ian Arróspide|CB|17|100|PER|||2026-01-25
Nelson Cabanillas|LB|26|400|PER|2028||<2025-01-01
Ángel Obando|LB|20|100|PER|||2026-01-01
Walter Tandazo|DM|26|600|PER|2028||2019-02-22
Kevin Minda|DM|27|600|ECU|2027||2026-07-01
Horacio Orzán|DM|38|50|ARG|2028|PER|2021-01-01
Keith Yáñez|DM|17|100|PER|||2026-01-25
Marcos Portillo|CM|26|300|ARG|2028||2026-07-02
Gian García|CM|21|100|PER|2029||2024-01-01
Nicolás Quagliata|AM|27|800|URU|2030|ITA|2025-07-19
Abraham Aguinaga|AM|24|200|PER|2027||2023-07-01
Matias Zegarra|LW|19|800|PER|2031|ESP|2026-01-01
Jefferson Cáceres|LW|24|700|PER|2027||2026-02-22
Jhamir D'Arrigo|LW|26|450|PER|2029||<2025-08-09
Lautaro Guzmán|RW|26|500|ARG|2027||2025-01-29
Franco Zanelatto|RW|26|450|PER|2027|PAR|2026-01-01
Cristian Bordacahar|RW|35|250|ARG|2027|PER|2021-01-27
Patricio Núñez|RW|19|100|PER|||2025-01-01
Jhonny Vidales|ST|34|225|PER|2027||<2025-07-05
Bernardo Cuesta|ST|37|125|ARG|2027|PER|2021-01-01
Ryu Yabiku|ST|20|25|PER|2030||2025-01-01` },
    { id: 'cusco', name: 'Куско', city: 'Куско', stadium: 'Estadio Túpac Amaru', cap: 15230, colors: ['#ffd100', '#000000'], players: `
Pedro Díaz|GK|28|550|PER|2029||<2025-01-01
Andy Vidal|GK|32|250|PER|2027||2024-01-01
Alessandro Cavagna|GK|22|175|PER|||2026-01-06
Rodolfo Anderson|GK|30|100|PER|||<2024-02-15
Carlos Gamarra|CB|26|550|PER|2028||<2025-01-01
Gu-rum Choi|CB|28|500|PER|||<2026-01-01
Aldair Fuentes|CB|28|350|PER|2027||<2025-01-01
Alex Custodio|CB|22|300|VEN|2027|PER|2026-01-04
Álvaro Ampuero|CB|34|175|PER|2027|ITA|<2025-01-01
Ricardo Lagos|LB|30|350|PER|2027||<2026-07-07
Marlon Ruidías|RB|27|550|PER|2028||<2025-01-01
José Zevallos|RB|27|250|PER|2027||2024-01-01
Oswaldo Valenzuela|DM|25|450|PER|2027||<2024-01-01
Miguel Aucca|DM|28|400|PER|2027||2018-01-01
Carlo Diez|DM|30|325|PER|2028||<2025-01-01
Carlos Montaño|DM|27|300|ECU|2029||2026-07-06
Diego Soto|CM|25|550|PER|||<2026-01-01
Iván Colman|AM|31|500|ARG|2028||2024-01-01
Miguel Silveira|AM|23|300|BRA|2027||<2026-07-08
Sergio Quillahuaman|AM|19|50|PER|2028||2025-09-02
Lucas Colitto|LW|32|375|ARG|2028|ITA|2024-01-01
José Manzaneda|LW|32|325|PER|||<2026-01-01
José Alí|LW|21|175|PER||BOL|2026-01-06
Joel Herrera|RW|22|200|PER|2027||2026-01-06
Nicolás Silva|RW|36|100|ARG|2027||2024-01-01
Facundo Callejo|ST|34|375|ARG|2028||2025-02-08
Juan Manuel Tévez|ST|39|50|ARG|2027|ECU|2024-01-01` },
    { id: 'cienciano', name: 'Сьенсьяно', city: 'Куско', stadium: 'Estadio Inca Garcilaso de la Vega', cap: 42056, colors: ['#c8102e', '#ffffff'], players: `
Ítalo Espinoza|GK|30|275|PER|2028||2026-01-01
Gonzalo Falcón|GK|29|250|URU|2027||2026-01-01
Jean Franco Roncal|GK|21|100|PER|2027||2026-02-16
Kevin Becerra|CB|30|500|ECU|2027||2026-01-01
Claudio Nuñez|CB|30|350|PAR|2027||2026-01-01
Rotceh Aguilar|CB|25|300|PER|2027||<2026-01-01
Maximiliano Amondarain|CB|33|250|URU|2027|ESP|<2025-01-01
Alonso Yovera|LB|25|350|PER|2027||2026-01-01
Sebastián Cavero|LB|24|275|PER|2027||<2025-01-01
Marcos Martinich|LB|30|250|ARG||CRO|2026-02-03
Renzo Salazar|RB|23|275|PER|2027||<2026-03-13
Santiago Arias|DM|31|400|URU|2027|PER|<2025-01-01
Henry Caparó|DM|21|300|PER|2027||<2026-01-07
Gonzalo Aguirre|CM|23|300|PER|2027|ARG|2025-07-26
Gerson Barreto|CM|31|300|PER|2027||<2026-01-01
Ademar Robles|CM|31|250|PER|2027||<2026-01-01
Alejandro Hohberg|LW|35|325|PER|2028|URU|<2025-07-23
Ray Sandoval|LW|31|275|PER|2027||<2025-08-05
Yván Rojas|LW|18|100|PER|||2026-04-01
Carlos Cabello|RW|29|500|PER|2028||<2026-07-01
Juan Romagnoli|RW|30|300|ARG|2027|ITA|2023-01-17
Didier La Torre|RW|24|250|PER|2027||2026-04-02
Cristian Souza|RW|31|200|URU|2027|ITA|2025-07-16
Matías Succar|ST|27|350|PER|2027|USA|<2026-01-01
Carlos Garcés|ST|36|150|ECU|2028||2023-01-02
Neri Bandiera|ST|37|125|ARG|2027||<2026-01-13
Nadhir Colunga|ST|22|25|PER|||2023-01-01` },
    { id: 'comerciantes', name: 'Комерсиантес Унидос', city: 'Кутерво', stadium: 'Estadio Juan Maldonado Gamarra', cap: 8000, colors: ['#0033a0', '#ffffff'], players: `
Matías Córdova|GK|24|350|PER|2028||<2026-01-05
José Charún|GK|29|25|PER|2027||2025-08-12
Diego López|GK|25|100|PER|||2026-08-11
Juan Cubas|GK|18|100|PER|2027||2026-01-19
Paolo Fuentes|CB|30|350|PER|||2026-08-12
Piero Guzmán|CB|26|300|PER|2027||<2026-01-01
Flavio Alcedo|CB|23|250|PER|2027||<2025-07-24
Juan Rodríguez|CB|29|225|URU|2027|ARG|2026-01-05
Miguel Hilario|CB|20|100|PER|2027||2026-01-19
Daniel Lino|LB|24|325|BOL|2027||2026-01-05
Alexis Cossio|LB|31|250|PER|2027||<2026-01-05
Fabio Rojas|RB|27|275|PER|2027||<2026-01-05
Yimy Gamero|DM|24|325|PER|||<2026-08-12
Agustín Rodríguez|DM|26|300|URU|2027||2026-01-05
José Parodi|DM|29|250|PER|2027||<2024-01-01
Alexis Arias|CM|30|400|PER|||<2026-01-21
Thiago Salinas|CM|20|175|PER|2027||2026-01-05
Rodrigo Vilca|AM|27|400|PER|2028|ESP|<2026-01-05
Óscar Pinto|LW|24|325|PER|||<2026-01-19
Josuee Herrera|LW|27|300|PER|2027||<2026-01-05
Mathías Carpio|LW|23|250|PER|2027||<2025-01-22
Marco Guevara|LW|20|100|PER|||2026-07-01
Jhon Sánchez|RW|27|500|ECU|||2026-08-11
Wilter Ayoví|RW|29|450|ECU|2027||2026-01-19
Fabrizzio Cubas|RW|19|100|PER|||2026-01-19
Matías Sen|ST|35|275|ARG|2028||2022-02-01
Maximiliano Pérez|ST|31|200|URU|2027||2026-01-19
Jean Carlo Olivares|ST|24|200|PER|2027|USA|2026-01-19` },
    { id: 'sport_boys', name: 'Спорт Бойз', city: 'Кальяо', stadium: 'Estadio Miguel Grau del Callao', cap: 17000, colors: ['#ff8fb1', '#000000'], players: `
Diego Melián|GK|34|225|URU|2028|PER|<2026-01-01
Jeferson Nolasco|GK|24|225|PER|2027||2025-01-01
Sebastian Oblitas|GK|19|100|PER|2027||2026-02-01
Gustavo Dulanto|CB|31|400|PER|2027|ITA|<2026-01-01
Renzo Alfani|CB|30|225|ARG|2027||<2026-01-01
Carlos Zambrano|CB|37|100|PER|2027||2026-04-06
Hansell Riojas|CB|35|100|PER|2028||2025-01-01
Evanz Cruz|CB|18|100|PER|||2026-01-25
Mathías Llontop|LB|24|500|PER|2027||<2026-01-01
Nilson Loyola|LB|32|250|PER|2027||<2026-03-13
Miguel Trauco|LB|34|175|PER|2027||2026-04-06
Nicolás Valencia|LB|18|100|PER|2028||2026-01-25
Emilio Saba|RB|25|400|PLE|2027|PER|<2025-07-22
Oslimg Mora|RB|27|400|PER|2028||<2025-01-01
Erick Gonzales|DM|30|325|PER|2027||<2025-01-01
Federico Illanes|DM|32|275|ARG|2027||<2026-01-01
Leonel Solís|DM|30|250|PER|2028||<2025-07-15
Nicolas Paz|DM|21|25|PER|2027|USA|2025-01-01
Hernán Da Campo|CM|32|200|ARG|2028||2025-01-01
André Vasquez|AM|23|375|PER|2028||<2026-01-01
Yuriel Celi|AM|24|275|PER|2027||<2026-03-15
Christian Cueva|AM|34|125|PER|2027||<2026-07-01
Jostin Alarcón|LW|24|500|PER|2028||<2025-07-28
Luis Urruti|LW|34|275|URU|2027|PER|2025-01-01
Alexis Huamán|RW|22|75|PER|2027||2023-06-20
José Davey|RW|18|25|PER|||2025-01-01
Pablo Erustes|ST|32|350|ARG|2027||<2026-07-01
Percy Liza|ST|26|225|PER|2027||<2026-01-01
Rolando Díaz|ST|27|200|PER|2027|CUB|<2026-01-01` },
    { id: 'garcilaso', name: 'Депортиво Гарсиласо', city: 'Куско', stadium: 'Estadio Inca Garcilaso de la Vega', cap: 42056, colors: ['#6cace4', '#ffffff'], players: `
Patrick Zubczuk|GK|31|400|PER|2028|ARG|<2025-01-01
Juniors Barbieri|GK|30|125|PER|2027||2025-01-01
Mallki Marmanillo|GK|22|25|PER|2027||2024-01-01
Agustín Gómez|CB|30|750|ARG|2027|ITA|2026-01-01
Jefferson Portales|CB|28|250|PER|2027||2025-07-21
Xavi Moreno|CB|23|250|PER|2028||2025-01-10
Aldair Salazar|CB|32|225|PER|2027||2023-01-01
Anthony Rosell|LB|31|225|PER|2027||<2026-07-11
Erick Canales|RB|25|500|PER|2027||<2024-01-01
Samir Villacorta|RB|22|50|PER|2027||2024-01-01
Claudio Torrejón|DM|33|225|PER|2028|USA|<2026-01-01
César Flores|DM|18|100|PER|||2026-07-01
Carlos Ramos|CM|27|325|VEN|2027|POR|2026-01-01
Agustín González|CM|29|300|URU|2027||2026-01-01
Kevin Sandoval|AM|29|500|PER|2027||<2025-01-01
Adrián Ascues|AM|23|325|PER|2028||<2026-01-01
Sharif Ramírez|AM|23|150|PER|2027||<2026-01-01
Beto da Silva|LW|29|350|PER|2028|BRA|<2026-01-01
Fernando Pacheco|LW|27|300|PER|||2026-08-25
Lucas Ríos|LW|24|200|ARG|2027||2026-07-01
Francisco Arancibia|RW|29|325|CHI|2027||2025-07-21
Joao Mendoza|RW|19|50|PER|2027||2025-01-01
Christopher Olivares|ST|27|350|PER|2028|GRE|<2026-01-01
Facundo Castelli|ST|31|250|ARG|2027||2026-07-01
Bryan Yupanqui|ST|19|100|PER|2027||2026-01-01` },
    { id: 'alianza_atl', name: 'Альянса Атлетико', city: 'Сульяна', stadium: 'Estadio Campeones del \'36', cap: 12000, colors: ['#ffffff', '#002d72'], players: `
Steven Rivadeneyra|GK|31|300|PER|2027||<2026-07-06
Daniel Prieto|GK|31|150|PER|2027||2024-01-01
Jesus Rossi|GK|23|25|PER|2027||2026-01-08
Román Suárez|CB|25|300|ARG|||2026-01-01
José Villegas|CB|30|250|ARG|2028||2024-01-01
José Luján|CB|29|250|PER|||<2026-01-05
Williams Guzmán|CB|26|200|PER|2027||<2026-01-07
Juan Quiñones|CB|25|200|PER|2027||2025-09-01
Jesús Mendieta|LB|28|300|PER|||2026-01-08
Anthony Gordillo|LB|32|250|PER|2027||<2025-01-01
Erick Perleche|RB|26|350|PER|2027||<2025-01-01
Hernan Lupu|DM|22|500|PER|2027||2024-01-17
Stefano Fernández|DM|24|250|PER|2027||2023-06-16
Juan Delgado|DM|21|175|PER|2027||<2026-01-10
Jimmy Pérez|CM|25|350|PER|2027||<2025-01-01
Ariel Muñoz|CM|26|350|ARG|||2026-01-09
Germán Díaz|CM|30|325|ARG|||2026-01-05
Joaquín Revilla|CM|22|100|PER|||2026-07-04
Jorge del Castillo|LW|22|300|PER|2027||<2024-01-10
Cristian Penilla|LW|35|125|ECU|2027||2026-01-16
Guillermo Larios|RW|24|350|PER|2027|CHI|<2023-01-01
Franchesco Flores|RW|25|250|PER|2027||2025-09-08
Cristhian Valladolid|RW|22|225|PER|||2026-01-08
Valentín Robaldo|ST|26|250|ARG|||2026-01-06
José María Ingratti|ST|26|200|ARG|2027||2026-07-04
Jairo Molina|ST|33|50|COL|||2026-07-02` },
    { id: 'huancayo', name: 'Спорт Уанкайо', city: 'Уанкайо', stadium: 'Estadio Huancayo', cap: 24000, colors: ['#c8102e', '#ffffff'], players: `
Ángel Zamudio|GK|29|450|PER|2028||2021-01-01
Diego Campos|GK|30|300|PER|||<2026-01-08
Massimo Sandi|GK|24|125|PER|||<2026-01-23
Aldair Ccorahua|GK|25|125|PER|2027||2024-01-01
Marcelo Gaona|CB|27|400|PER|2029||2025-01-01
Juan Barreda|CB|33|150|PER|2027||2024-07-01
Yonatan Murillo|CB|34|100|COL|2027||2025-01-09
Jimmy Valoyes|CB|39|25|COL|2027|PER|<2026-01-08
Hugo Ángeles|LB|32|250|PER|2028||2020-01-05
Jean Franco Falconí|RB|30|275|PER|||2026-01-08
Jeremy Rostaing|RB|31|250|PER|||<2026-01-08
Ronaldo Andía|RB|29|150|PER|||2026-07-01
Edu Villar|DM|22|500|PER|2028||2024-08-01
Leonardo Villar|DM|26|175|PER|2027||2019-07-01
Ricardo Salcedo|DM|35|100|PER|2027||2016-01-01
Diego Carabaño|CM|29|400|PER|2028||<2025-01-01
Aldo Quiñónez|CM|35|25|PAR|2027||2026-07-19
Nahuel Luján|AM|31|225|ARG|2029||2025-01-01
Javier Sanguinetti|AM|36|100|ARG|2028||2025-01-01
Rick Campodónico|LW|30|250|PER|||2026-01-08
Piero Magallanes|RW|25|450|PER|2028||<2025-01-01
Juan Giménez|RW|23|275|PAR|||2026-07-07
Daniel Porozo|ST|29|325|ECU|||2026-07-15
Ronal Huaccha|ST|32|250|PER|2027||<2020-01-01
Juan Martínez|ST|21|150|PER|2028||2024-01-01
Franco Caballero|ST|33|100|ARG|||2026-01-08` },
    { id: 'jp2_college', name: 'Хуан Пабло II Колледж', city: 'Чонгоян', stadium: 'Estadio de la Juventud', cap: 2000, colors: ['#ffd100', '#002d72'], players: `
Ismael Quispe|GK|27|150|PER|2027||<2025-01-01
Jorge Stucchi|GK|24|50|PER|2027|ITA|<2025-01-25
Matías Vega|GK|40|25|ARG|2027||2024-02-19
Arón Sánchez|CB|23|325|PER|2027||2025-01-20
Matías Almirón|CB|31|175|URU|2027||<2026-07-01
Pablo Míguez|CB|39|25|URU|2027|PER|<2026-07-01
Paolo Reyna|LB|25|450|PER|2027||<2026-07-01
Piero Antón|LB|26|175|PER|||2026-01-01
Hugo Ancajima|RB|28|350|PER|2027||<2026-07-01
Fabio Agurto|RB|21|275|PER|2027||2024-02-20
Jorge Toledo|RB|30|225|PER|2028||<2025-01-01
Christian Flores|DM|25|300|PER|2028||<2025-01-01
Jack Carhuallanqui|DM|22|125|PER|2029||2026-07-01
Bairon Puño|DM|17|100|PER|2029||2026-01-24
Álvaro Rojas|CM|21|400|PER|2027||<2026-07-01
Nilton Ramirez|AM|21|400|PER|2028||2026-01-01
Erinson Ramírez|AM|28|300|PER|||<2026-01-01
Martín Alaníz|AM|33|225|URU|2027||2026-01-01
Diego Lozano|AM|17|100|PER|||2026-01-24
Josué Torres|LW|22|250|PER|2028||<2026-07-01
Chase Villanueva|RW|24|275|PER||USA|2026-07-28
Jack Durán|RW|34|100|PER|||2026-01-01
Jorge Barreto|RW|18|25|PER|||2026-01-24
Adán Henricks|ST|22|175|PAN|2027||2026-01-01
Juan Pablo Goicochea|ST|21|175|PER|2027||2026-08-12
Héctor Bazán|ST|24|150|PER||ITA|2026-01-01
Nicolás Leguizamón|ST|31|125|ARG|||2026-07-16
Janio Pósito|ST|37|75|PER|2027||<2026-07-01
Mateo Rodríguez|ST|20|75|PER|||<2026-08-11` },
    { id: 'tarma', name: 'Депортива Тарма', city: 'Тарма', stadium: 'Estadio Municipal Unión de Tarma', cap: 10000, colors: ['#0033a0', '#ffffff'], players: `
Juan Valencia|GK|33|150|COL|2027||2026-01-03
Carlos Solís|GK|36|100|PER|2027||<2026-01-01
Enzo Mori|GK|20|100|PER||USA|2026-02-13
Jhair Soto|CB|23|600|PER|2028||2024-01-01
Joaquín Pereyra|CB|32|300|URU|||2026-07-25
Leonardo Rugel|CB|25|275|PER|||2026-03-16
Horacio Benincasa|CB|32|250|PER|2027|ARG|<2026-07-01
John Narváez|CB|35|150|ECU|2027||2024-01-20
Orlando Núñez|LB|26|400|PER|||<2026-07-01
Alejandro Ramos|RB|28|400|PER|||<2026-08-12
Jerry Navarro|RB|24|250|PER|||2026-01-18
Luis Pérez|DM|30|300|COL|2027||2026-01-02
Ángel Ojeda|DM|34|100|PER|||2026-01-25
Josue Alvino|CM|23|225|PER|||2024-04-01
Jair Reyes|CM|22|75|PER|||2025-04-01
Emerson García|CM|18|25|PER|||2026-01-25
Víctor Cedrón|AM|33|275|PER|2027||<2023-02-01
Joao Rojas|AM|37|100|ECU|2027|MEX|<2024-01-01
Alexander Hidalgo|AM|23|75|PER|2027||2024-01-03
Sinclair García|AM|33|50|PER|||2026-01-01
Aylton Mazzo|LW|23|100|PER|2027||2026-01-16
Jeremy Canela|RW|28|325|PER|2028||<2026-07-01
Juan Lucumí|RW|27|225|COL|||2026-08-11
Jhojan Garcilazo|RW|21|100|PER|||2025-07-19
Aldair Rodríguez|ST|32|200|PER|2027||2026-01-12
Said Peralta|ST|22|125|PER|2027||<2026-07-01
Jonatan Bauman|ST|35|75|ARG|2027||2026-01-27
Hernán Rengifo|ST|43|10|PER|2027||2022-01-01` },
    { id: 'grau', name: 'Атлетико Грау', city: 'Пьюра', stadium: 'Estadio Municipal Ambrosio Maco Arroyo', cap: 5000, colors: ['#ffd100', '#ffffff'], players: `
Patricio Álvarez|GK|32|325|PER|2027||<2023-06-27
Aarom Fuentes|GK|24|50|PER|2027||2024-07-01
Aamet Calderón|GK|28|50|PER|2027||<2026-01-12
Breyner Vilela|GK|18|100|PER
Ignacio Tapia|CB|27|300|CHI|||2026-01-10
Rodrigo Tapia|CB|32|300|ARG|2027||2024-01-01
José Ataupillco|CB|25|150|PER|||2026-01-06
Lucas Acevedo|CB|34|50|ARG|2027||2026-01-07
Elsar Rodas|LB|32|250|PER|2027||2023-01-01
Gabriel Alfaro|LB|23|250|PER|||<2026-01-05
Arnold Flores|LB|22|25|PER|||2024-01-01
Christian Vásquez|RB|27|275|PER|||<2026-07-01
Diego Rodríguez|RB|24|100|PER|2027||<2026-03-14
Rafael Guarderas|DM|33|225|PER|2027||2024-01-01
Freddy Oncoy|CM|26|350|PER|||<2026-01-01
Adrián de la Cruz|CM|23|225|PER|||2026-01-06
Eslyn Correa|CM|21|50|PER|||<2026-01-09
Aldair Vásquez|AM|23|400|PER|2027||<2024-01-08
Pablo Lavandeira|AM|36|100|URU||PER|<2026-07-01
Diego Barreto|AM|33|50|PAR||ITA|2026-01-02
Luis Benites|LW|30|350|PER|||<2026-07-01
Nicolás Delgadillo|LW|29|200|ARG|||2026-01-29
Paulo de la Cruz|RW|27|400|PER|2027||<2021-02-05
Mauro Da Luz|RW|32|275|URU|2027||2026-07-01
Henri Espinoza|RW|19|25|PER|||2026-01-29
Raúl Ruidíaz|ST|36|200|PER|2030|CRO|2025-04-03
Adrián Fernández|ST|34|175|PAR|||2026-07-01
Yamir Ruidíaz|ST|24|75|PER|2027|CRO|2025-07-24` },
    { id: 'cajamarca', name: 'Кахамарка', city: 'Кахамарка', stadium: 'Estadio Héroes de San Ramón', cap: 18000, colors: ['#c8102e', '#ffffff'], players: `
Samuel Aspajo|GK|21|350|VEN|2027|PER|2026-01-01
Jonathan Medina|GK|33|50|PER|2027||<2025-01-14
Yordi Vílchez|CB|31|375|PER|2027||<2026-07-03
Alejandro Pósito|CB|21|325|PER|2027||<2026-07-08
Hairo Timaná|CB|26|250|PER|2027||2025-07-02
José Soto|LB|24|175|PER|2027||2026-07-01
Arthur Gutiérrez|LB|25|150|PER|2028||<2026-07-09
Carlos Gómez|RB|21|200|PER|2027||<2026-07-01
José Gallardo|RB|25|175|PER|2027||<2026-01-03
Renato Suárez|RB|22|100|PER|||2026-07-01
Jhan Vega|RB|24|75|PER|2027||2024-07-01
Jhon Vega|DM|31|175|PER|||<2026-07-01
Jefferson Orejuela|DM|33|50|ECU|||2026-02-13
Paulo Goyoneche|DM|33|25|PER|2027||2026-08-05
Edson Aubert|DM|37|25|PER|2027||2026-08-06
Carlos Correa|CM|31|275|PER|||<2026-07-13
Mauricio Arrasco|AM|22|300|PER|2027||<2026-01-03
Valentino Sandoval|AM|23|125|PER|||2026-07-01
Patrick Alegría|AM|22|100|PER|2027|USA|2025-07-01
Brandon Palacios|LW|28|325|PER|2027|MEX|<2026-01-03
Jonathan Betancourt|LW|31|100|ECU|2027||2026-01-01
Fernando Ocas|LW|26|75|PER|2027||2023-01-01
Sebastián Enciso|RW|24|300|PER|2027||2026-01-03
Michel Rasmussen|RW|27|175|PER|2027|DEN|<2026-07-21
Carlos Meza|RW|24|175|PER|2027||2025-07-18
Pedro Cejas|ST|25|350|ARG||ITA|2026-07-01
José Lugo|ST|33|125|ECU|||2026-08-15
Sebastien Pineau|ST|23|100|PER||FRA|2026-01-06
Rodrigo Dioses|ST|21|100|PER|||<2026-07-10` },
    { id: 'utc', name: 'УТК Кахамарка', city: 'Кахамарка', stadium: 'Estadio Héroes de San Ramón', cap: 18000, colors: ['#ffd100', '#00843d'], players: `
Ángelo Campos|GK|33|275|PER|||<2026-01-01
Ignacio Barrios|GK|34|225|URU|2027|PER|<2026-01-01
Ricardo Bettocchi|GK|24|125|PER||ITA|2026-01-13
Manuel Ganoza|CB|27|300|PER|2027||2026-01-01
Bruno Duarte|CB|31|275|ARG|2027||2026-01-12
Francesco Cavagna|CB|26|250|PER|2027||<2026-01-06
Dylan Caro|LB|27|250|PER|2027||2026-01-01
Junior Huerto|LB|27|175|PER|2027||2026-01-01
Luis Garro|RB|30|275|PER|2027||<2025-01-01
Gilmar Paredes|RB|23|275|PER|||<2026-01-02
David Dioses|DM|30|225|PER|2027||<2026-01-09
Luis Arce|DM|32|225|ECU|2027||2026-01-06
Joshua Cantt|DM|23|125|PER|2027||<2025-07-18
Arquímedes Figuera|DM|37|50|VEN|2027||2026-01-12
Marcos Lliuya|AM|34|200|PER|2027||2026-01-01
Adolfo Muñoz|LW|28|350|ECU|||2026-01-02
Jhosep Núñez|LW|22|275|PER|||<2026-01-09
David Camacho|RW|29|350|COL|2027||2026-01-02
Santiago Gálvez|RW|22|150|PER|||<2026-01-02
Marlon de Jesús|ST|35|175|ECU|2027||<2026-01-01
Abdiel Arroyo|ST|32|100|PAN|2027||2026-01-29` },
    { id: 'chankas', name: 'Лос Чанкас', city: 'Андауайлас', stadium: 'Estadio Los Chankas', cap: 10000, colors: ['#00843d', '#ffffff'], players: `
Hairo Camacho|GK|32|175|PER|2027||2025-01-01
Luis Pretel|GK|24|125|PER|||2026-01-25
Gonzalo Rizzo|CB|30|275|URU|2027|PER|2026-01-01
Michael Kaufman|CB|24|250|PER|2027|USA|2026-01-01
Héctor González|CB|34|100|ARG|2027||2025-01-01
Carlos Pimienta|CB|34|100|URU|2027||2025-02-11
José Cárdenas|CB|20|50|PER|||2026-01-25
Brayan Guevara|LB|28|300|PER|2027||2026-01-01
Axel Chávez|LB|28|250|PER|||<2026-07-01
David Gonzáles|LB|29|250|PER|2027||2025-01-01
Kelvin Sánchez|DM|27|300|PER|2027||2025-07-16
Jorge Palomino|DM|31|200|PER|2027||<2025-01-26
Christian Velarde|DM|28|200|PER|2027||2025-01-01
Abdiel Ayarza|CM|34|100|PAN|2027||2026-01-01
Sebastián Zarabia|CM|21|50|PER|||<2026-01-25
Franco Torres|AM|30|300|ARG|2027||2025-01-02
Oshiro Takeuchi|RW|32|275|PER|2028||2023-01-01
Accel Campos|RW|29|225|PER|||2026-07-04
Kenyi Barrios|RW|30|225|PER|||2026-01-01
Félix Espinoza|RW|27|175|PER|2027||2025-07-22
Juan Diego Ospina|RW|25|150|COL|||2026-01-01
Jarlín Quintero|ST|33|300|COL|2027|PER|<2026-01-01
Marlon Torres|ST|24|225|COL|||2026-01-25` },
    { id: 'moquegua', name: 'Депортиво Мокегуа', city: 'Мокегуа', stadium: 'Estadio 25 de Noviembre', cap: 21000, colors: ['#00843d', '#ffffff'], players: `
Carlos Grados|GK|31|400|PER|2027||<2026-01-01
Renzo Figueroa|GK|28|225|PER|2027||2025-01-05
Thiago Bedoya|GK|17|100|PER|2027||2026-01-01
Junior Sandoval|GK|19|100|PER|||2026-07-08
Cristian Enciso|CB|35|75|PAR|2027||2026-01-01
José Luis Granda|CB|34|75|PER|2027||2025-01-01
Juan Diego Lojas|CB|37|50|PER|2027||<2026-01-01
Mathias Panizo|CB|19|25|PER|2027||2025-09-01
Nicolás Amasifuén|LB|21|250|PER|2027||<2026-01-01
Jimmy Jiménez|LB|23|150|PER|2027||<2023-01-01
Aldair Perleche|RB|31|250|PER|2027||2026-01-01
Eros Montenegro|RB|24|200|PER|2027||2025-01-02
Ricardo Chipao|DM|29|250|PER|2027||<2026-01-01
Claudio Ramírez|DM|26|150|PER|2027||2025-01-05
Diego Ramírez|CM|31|250|PER|2027||2026-01-01
Cristian Mejía|CM|33|175|PER|2027||<2026-01-01
Nicolás Chávez|CM|33|150|PAR|2027|ITA|2025-01-02
Yorman Zapata|LW|26|350|COL|2027||2026-01-02
Alexander Lecaros|LW|27|175|PER|||2026-07-01
Kevin Ferreyra|LW|27|50|PER|2027||2026-07-06
Yhonier López|LW|22|25|COL|2027||2026-08-11
Edgar Lastre|RW|27|300|ECU|2027||2026-01-01
Allonso Dávila|RW|24|225|PER|2027||2025-01-01
Kevin Ruiz|RW|31|175|PER|2027||2025-08-07
Edgar Santillán|RW|30|125|PER|||2026-07-22
Juan Vilela|RW|19|100|PER|||2026-01-26
Marcello Negrón|ST|21|125|PER|2027|ITA|2026-01-01
Bryan Angulo|ST|30|100|ECU|2027||2026-01-01
Jeferson Collazos|ST|35|50|COL|2027||2024-08-02` },
  ],
});
