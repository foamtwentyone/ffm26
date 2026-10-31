// Лига Португалии 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'por', name: 'Лига Португалии', short: 'Португалия', country: 'POR', tier: 1, weekday: 0,
  autumn: { from: '08-09', rounds: 17 }, spring: { from: '01-03', rounds: 17 },
  ticket: 15, prize: [15000, 14300, 13600, 12900, 12200, 11450, 10750, 10050, 9350, 8650, 7950, 7250, 6550, 5800, 5100, 4400, 3700, 3000],
  teams: [
    { id: 'porto', name: 'Порту', city: 'Порту', stadium: 'Estádio Do Dragão', cap: 50399, colors: ['#004b9b', '#ffffff'], players: `
Diogo Costa|GK|27|40000|POR|2030|SUI|2019-07-01
Cláudio Ramos|GK|34|500|POR|2027||2020-08-14
João Costa|GK|30|500|POR|2030||<2025-07-09
Jakub Kiwior|CB|26|40000|POL|2030||2026-07-01
Jan Bednarek|CB|30|11000|POL|2029||2025-07-28
Nehuén Pérez|CB|26|10000|ARG|2029||2025-07-01
Dominik Prpić|CB|22|4000|CRO|2030||2025-07-10
Chris Smalling|CB|36|1000|ENG|2027|JAM|2026-09-30
Souza|LB|20|12000|BRA|2027||2026-08-31
Francisco Moura|LB|27|7000|POR|2029||<2024-09-02
Zaidu Sanusi|LB|29|3000|NGA|2027||<2020-08-30
Alberto Costa|RB|23|18000|POR|2030||2025-07-24
Martim Fernandes|RB|20|12000|POR|2030||2024-04-17
Alan Varela|DM|25|28000|ARG|2030||2023-08-16
Pablo Rosario|DM|29|10000|DOM|2029|NED|2025-08-28
Victor Froholdt|CM|20|50000|DEN|2030||2025-07-23
Seko Fofana|CM|31|8000|CIV|2027|FRA|2026-08-26
In-beom Hwang|CM|30|7000|KOR|2029||2026-07-20
Vasco Sousa|CM|23|2000|POR|2030||<2024-07-01
Gabri Veiga|AM|24|35000|ESP|2030||2025-06-05
Oskar Pietuszewski|LW|18|25000|POL|2031||2026-01-07
Borja Sainz|LW|25|20000|ESP|2030||2025-07-13
William Gomes|RW|20|30000|BRA|2031||2025-01-31
Pepê|RW|29|17000|BRA|2028|ITA|2021-07-01
Gabriel Mec|RW|18|16000|BRA|2031||2026-09-02
Duarte Cunha|RW|18|1500|POR|2031||2031-06-30
Samu Aghehowa|ST|22|40000|ESP|2029|NGA|2024-08-23
Santiago Gimenez|ST|25|18000|MEX|2027|ITA|2026-08-31
André Silva|ST|30|5000|POR|2027||2026-07-01` },
    { id: 'sporting', name: 'Спортинг', city: 'Лиссабон', stadium: 'Estádio José Alvalade', cap: 52095, colors: ['#008057', '#ffffff'], players: `
Rui Silva|GK|32|5000|POR|2028||2025-07-01
Kaique Pereira|GK|23|4000|BRA|2031||2026-08-29
Diego Callai|GK|22|1500|BRA|2030|POR|2026-07-01
Gonçalo Inácio|CB|25|35000|POR|2030||2020-07-01
Zeno Debast|CB|23|25000|BEL|2029||2024-07-04
Ibrahima Ba|CB|21|20000|SEN|2031||<2026-07-22
Eduardo Quaresma|CB|24|17000|POR|2031||2020-03-01
Maxi Araújo|LB|26|40000|URU|2030||2024-08-27
Moncef Zekri|LB|18|4000|MAR|2031|BEL|2026-08-25
Nuno Santos|LB|31|2000|POR|2027||<2020-08-21
Rodrigo Dias|LB|21|1500|POR|2028||2026-07-01
Iván Fresneda|RB|22|20000|ESP|2028||2023-08-30
Georgios Vagiannidis|RB|25|6000|GRE|2030||2025-08-06
Salvador Blopa|RB|19|2500|POR|2030||2030-06-30
Sergi Altimira|DM|25|25000|ESP|2031||2026-07-01
Silas Andersen|DM|22|7000|DEN|2031||2026-07-01
Issa Doumbia|CM|23|20000|ITA|2031|CIV|2026-07-01
João Simões|CM|19|15000|POR|2030||2024-11-01
Pedro Lima|CM|23|3000|BRA|2031||2026-07-01
Sotiris Alexandropoulos|CM|24|1200|GRE|2027||2022-08-29
Rodrigo Zalazar|AM|27|30000|URU|2031|ESP|<2026-07-01
Nestory Irankunda|LW|20|15000|AUS|2031|TAN|2026-08-15
Flávio Gonçalves|LW|19|15000|POR|2030|FRA|2026-07-01
Jesse Derry|LW|19|2000|ENG|2027||2026-07-11
Geny Catamo|RW|25|35000|MOZ|2029||2023-07-01
Luís Guilherme|RW|20|12000|BRA|2030||2026-01-04
Luis Suárez|ST|28|30000|COL|2030|ESP|2025-07-28
Fotis Ioannidis|ST|26|16000|GRE|2030||2025-09-01
Rafael Nel|ST|21|4000|POR|2029||2026-03-22` },
    { id: 'benfica', name: 'Бенфика', city: 'Лиссабон', stadium: 'Estádio da Luz', cap: 68100, colors: ['#e30613', '#ffffff'], players: `
Анатолий Трубин|GK|25|20000|UKR|2028||2023-08-10
Samuel Soares|GK|24|10000|POR|2028|GNB|2023-01-01
Tomás Araújo|CB|24|35000|POR|2031||2022-07-01
Alessandro Circati|CB|23|18000|AUS|2031|ITA|2026-08-19
Clément Lenglet|CB|31|4000|FRA|2027||2026-07-01
Gabriel Índio|CB|18|4000|BRA|2031||2026-07-28
Souffian El Karouani|LB|26|15000|MAR|2027|NED|2026-09-01
Samuel Dahl|LB|23|13000|SWE|2029||2025-07-01
José Neto|LB|18|3000|POR|2031||2031-06-30
Alexander Bah|RB|28|10000|DEN|2029|GAM|2022-07-01
Daniel Banjaqui|RB|18|10000|POR|2031|GNB|2026-07-01
João Palhinha|DM|31|15000|POR|2030||2026-08-26
Enzo Barrenechea|DM|25|14000|ARG|2030||2026-07-01
Manu Silva|DM|25|6000|POR|2030||<2025-01-20
Leandro Barreiro|CM|26|20000|LUX|2029||2024-07-02
Fredrik Aursnes|CM|30|15000|NOR|2029||2022-08-24
Георгий Судаков|AM|24|25000|UKR|2029||2026-07-01
Claudio Echeverri|AM|20|15000|ARG|2027||2026-09-02
Andreas Schjelderup|LW|22|40000|NOR|2028||2023-01-12
Jakub Kamiński|LW|24|17000|POL|2031||2026-07-07
Gianluca Prestianni|RW|20|40000|ARG|2029|ITA|2024-01-31
Dodi Lukébakio|RW|29|15000|BEL|2030|COD|2025-09-01
Rafa Silva|RW|33|3000|POR|2028||2026-01-22
Vangelis Pavlidis|ST|27|35000|GRE|2029||2024-07-01
Jhon Durán|ST|22|15000|COL|2027||2026-07-20
Anísio Cabral|ST|18|5000|POR|2031|GNB|2026-01-25` },
    { id: 'braga', name: 'Брага', city: 'Брага', stadium: 'Estádio Municipal de Braga', cap: 30286, colors: ['#e30613', '#ffffff'], players: `
Bernardo|GK|24|5000|BRA|2030|ITA|2026-07-01
João Carvalho|GK|22|1500|POR|2028||2026-07-01
Tiago Sá|GK|31|300|POR|2027||2015-07-01
Gustaf Lagerbielke|CB|26|10000|SWE|2030||2025-07-08
Bright Arrey-Mbi|CB|23|9000|GER|2029|ENG|2024-07-17
Sikou Niakaté|CB|27|5000|MLI|2030|FRA|2023-07-01
Vítor Carvalho|CB|29|4000|BRA|2028||<2023-07-01
Adrian Barisic|CB|25|4000|BIH|2030|CRO|2026-07-01
Adrian Bajrami|CB|24|3000|SUI|2031|ALB|2026-07-01
Sergio Barcia|CB|25|1500|ESP|2030||2026-07-01
Víctor Gómez|RB|26|10000|ESP|2030||2023-07-01
Diogo Travassos|RB|22|6000|POR|2031||<2026-07-01
Tommy Marqués|DM|19|10000|ESP|2031||2026-08-21
Demir Ege Tıknaz|DM|22|10000|TUR|2031||2026-01-21
Gorby|CM|24|9000|FRA|2028|HAI|2021-12-01
Diego Rodrigues|CM|21|5000|POR|2030|BEL|2025-01-01
Denis Huseinbasic|CM|25|2000|BIH|2031|GER|2026-07-01
João Moutinho|CM|40|300|POR|2027||2023-08-25
Mario Dorgeles|RW|22|10000|CIV|2030||2025-07-04
Gabriel Silva|LW|24|7000|BRA|2031||<2026-07-01
Gabri Martínez|LW|23|7000|ESP|2029||2024-07-01
Ricardo Horta|AM|32|9000|POR|2028||2017-07-18
João Trovisco|AM|19|500|POR|2029||2029-06-30
Pau Víctor|ST|24|15000|ESP|2030||2025-07-25
Jovan Milosevic|ST|21|7000|SRB|2031||2026-08-19
Fran Navarro|ST|28|4000|ESP|2029||<2025-07-01
Jonas Wind|ST|27|4000|DEN|2029||2026-07-01` },
    { id: 'famalicao', name: 'Фамаликан', city: 'Вила-Нова-ди-Фамаликан', stadium: 'Estádio Municipal 22 de Junho', cap: 8000, colors: ['#1d3c8f', '#ffffff'], players: `
Lazar Carević|GK|27|5000|MNE|2028||2024-08-21
Иван Злобин|GK|29|1000|RUS|2027|POR|<2020-08-22
Gabriel Cabral|GK|23|500|BRA|2029||2026-07-01
Léo Realpe|CB|25|5000|ECU|2029||2025-07-01
Finn van Breemen|CB|23|2000|NED|2030||2026-07-01
Víctor Rofino|CB|24|1500|GNB|2031|ESP|2026-08-31
Vojin Serafimovic|CB|21|400|SRB|2031||2026-07-01
Matheus Mattara|CB|20|500|BRA|2031|ITA|2031-06-30
Pedro Bondo|LB|21|2000|ANG|2029||2025-01-21
Leny Meyer|LB|22|600|SUI|2030||2026-07-01
Rodrigo Pinheiro|RB|24|5000|POR|2028||2024-07-01
Garcia|RB|24|1500|BRA|2029||2025-07-06
Tom van de Looi|DM|27|4000|NED|2027||2024-07-01
Mathias de Amorim|CM|21|12000|POR|2028|FRA|2024-08-08
Tamás Szűcs|CM|21|2500|HUN|2031||2026-07-01
Marcos Peña|CM|21|1500|ESP|2029||2025-08-01
Paulo Moreira|CM|26|1500|POR|2029||<2026-07-01
Mathis Jangéal|AM|18|1000|FRA|2031|MTQ|2026-07-01
Sorriso|LW|25|6000|BRA|2029||2025-07-01
Óscar Aranda|LW|24|3000|ESP|2028||2023-08-08
Roméo Beney|LW|21|1500|SUI|2030|BRA|2025-07-25
Gil Dias|RW|30|2000|POR|2027||2024-07-02
Pedro Santos|RW|23|600|POR|2028||2025-07-11
Georgios Koutsias|ST|22|5000|GRE|2031||2026-07-24
Pato|ST|22|4000|MEX|2027||2026-09-02
Umar Abubakar|ST|20|1000|NGA|2030||2025-07-14` },
    { id: 'gil_vicente', name: 'Жил Висенте', city: 'Барселуш', stadium: 'Estádio Cidade de Barcelos', cap: 12046, colors: ['#e30613', '#1d3c8f'], players: `
Lucão|GK|25|1500|BRA|2028||2026-01-16
Samuel Portugal|GK|32|500|BRA|2028||<2026-08-11
André Picornell|GK|22|500|SWE|2029|ESP|2026-07-01
Tiago Ferreira|GK|17|500|POR|2028||2028-06-30
Marvin Elimbi|CB|23|4000|FRA|2029|CMR|2024-08-29
David Moreira|CB|22|1700|CPV|2029|POR|2026-07-07
Buatu|CB|33|600|ANG|2028|BEL|2024-01-25
Antonio Espigares|CB|22|500|ESP|2029||2025-07-01
Weverson|LB|26|800|BRA|2028||2026-01-29
José Silva|RB|21|500|POR|2029||2026-07-07
Ricardo Esgaio|RB|33|500|POR|2028||2026-07-01
Mohamed Bamba|DM|22|1500|CIV|2027||2025-02-03
Diogo Prioste|CM|22|2000|POR|2027||2026-07-03
Zé Carlos|CM|24|800|POR|2028||<2025-07-23
Andreas Lausen|CM|24|700|DEN|2030||2026-07-02
Gonçalo Maia|CM|20|100|POR|2028||2026-07-01
Santi García|AM|25|4000|ESP|2028||2024-07-05
Gil Martins|AM|20|1500|POR|2028||2026-02-02
Martín Fernández|AM|23|450|URU|2029||2026-07-01
Guilherme Gomes|AM|20|300|BRA|2030||2026-09-04
Joelson Fernandes|LW|23|1000|POR|2029|GNB|2025-08-30
Tidjany Touré|LW|24|500|FRA|2029|CIV|2024-07-01
Agustín Moreira|RW|25|800|URU|2029||2026-07-01
Murilo|RW|31|800|BRA|2028||2025-08-21
Sergio Bermejo|RW|29|500|ESP|2027||2025-01-24
Héctor Hernández|ST|31|800|ESP|2027||2026-01-27
Walace França|ST|21|500|BRA|2027||2026-07-06
Mohamed Kaba|ST|24|100|MLI|2028||2026-07-01` },
    { id: 'moreirense', name: 'Морейренсе', city: 'Морейра-де-Конегуш', stadium: 'Parque Joaquim de Almeida Freitas', cap: 13000, colors: ['#00a650', '#ffffff'], players: `
André Ferreira|GK|30|600|POR|2028||2025-07-21
Aranha|GK|21|500|BRA|2027||2026-07-01
Gilberto Batista|CB|22|2000|GNB|2029|POR|2023-07-01
Kevyn|CB|21|500|BRA|2030||2026-07-01
Maracás|CB|32|500|BRA|2029||2023-07-01
Janderson|CB|21|500|BRA|2031||2026-07-02
Kiko|LB|24|2500|POR|2029||2025-07-02
Álvaro Martínez|LB|24|400|ESP|2028||2025-07-01
Dinis Pinto|RB|26|3500|POR|2027||2023-07-01
Leandro Santos|RB|21|1000|POR|2030||2026-01-23
Mateja Stjepanović|DM|22|3000|SRB|2029||2025-07-08
Guilherme Liberato|DM|25|800|BRA|2028||2024-07-01
Afonso Assis|DM|20|500|POR|2030||2025-07-01
Miguel Silva|DM|18|100|POR|2030||2030-06-30
Rodri Alonso|CM|23|2000|ESP|2028||2025-07-01
João Veloso|CM|21|1500|POR|2027||<2026-07-13
Nile John|CM|23|700|ENG|2029||2026-01-29
Manuel Mendonça|AM|21|2000|POR|2030||2026-08-21
Chipyoka Songa|AM|22|800|ZAM|2031||2026-09-04
Tiago Andrade|LW|21|1500|POR|2030||2026-08-26
Landerson|LW|19|1000|BRA|2030||2025-08-14
Kiko Bondoso|LW|30|800|POR|2027||2025-07-01
Afonso Vieira|LW|19|100|POR|2027||2027-06-30
Michael Dacosta|RW|21|150|ESP|2029|EQG|2029-06-30
Leonardo Vonić|ST|23|900|CRO|2027|GER|2026-09-01
Alexandre Parsemain|ST|23|700|MTQ|2030|FRA|2026-07-02
Yan Maranhão|ST|24|600|BRA|2029||2025-02-02` },
    { id: 'arouca', name: 'Арока', city: 'Арока', stadium: 'Estádio Municipal de Arouca', cap: 7000, colors: ['#ffd700', '#1d3c8f'], players: `
Ignacio de Arruabarrena|GK|29|1500|URU|2028|ESP|2026-01-13
Jakub Vinarčík|GK|21|300|SVK|2028||2025-07-01
Martim Duarte|GK|23|500|POR|2028||2026-07-01
José Fontán|CB|26|2500|ESP|2027||2024-07-03
Boris Popović|CB|26|1000|SRB|2028|FRA|2025-07-01
Javi Sánchez|CB|29|1000|ESP|2027||2026-01-05
Diogo Monteiro|CB|21|300|POR|2028|SUI|2025-08-11
Орест Лебеденко|LB|28|500|UKR|2028||<2026-08-07
Mario Climent|LB|24|500|ESP|2028||2026-08-03
Tiago Esgaio|RB|31|1000|POR|2027||<2024-07-01
Leo Shahar|RB|19|500|ENG|2027|ISR|2026-09-04
Taichi Fukui|CM|22|6000|JPN|2028||2025-02-03
Espen van Ee|CM|23|1500|NED|2029||2025-08-31
Mateo Flores|CM|22|1200|ESP|2029||2026-07-01
Pedro Santos|CM|26|600|POR|2028|KOR|2025-07-23
Pablo Gozálbez|AM|25|700|ESP|2029||2024-07-01
Naïs Djouahra|LW|26|2000|FRA|2027|ALG|2025-07-02
Brian Mansilla|LW|24|800|URU|2028||2025-07-01
Gabriel Rukavina|LW|22|500|CRO|2029||2026-09-04
Si-hoo Park|LW|19|400|KOR|2031||2026-07-04
Miguel Puche|LW|25|300|ESP|2028||2023-08-06
Alfonso Trezza|RW|27|1500|URU|2027|ITA|2023-08-16
Costinha|RW|18|500|POR|2027||2027-06-30
Iván Barbero|ST|28|2500|ESP|2028||2025-07-16
Fally Mayulu|ST|24|1200|FRA|2029|COD|2026-02-02
Dylan Nandín|ST|24|1000|URU|2028||2025-07-01` },
    { id: 'vitoria', name: 'Витория Гимарайнш', city: 'Гимарайнш', stadium: 'Estádio D. Afonso Henriques', cap: 30000, colors: ['#ffffff', '#000000'], players: `
Oliwier Zych|GK|22|2000|POL|2027||2026-07-15
Juan Castillo|GK|23|500|COL|2029||2025-07-01
Lucas Furtado|GK|21|100|BRA|2028||2026-07-01
Toni Borevković|CB|29|3000|CRO|2027||2026-09-04
Thiago Balieiro|CB|23|2000|BRA|2029||2025-07-01
Óscar Rivas|CB|26|1000|ESP|2028||2024-07-02
Ahmed Sidibé|CB|24|600|FRA|2027|CIV|2026-08-06
Yeimar Mosquera|CB|21|400|COL|2030||2026-07-16
João Mendes|LB|26|2500|POR|2028||2024-07-01
Francisco Dias|LB|24|200|POR|2029||2029-06-30
Tony Strata|RB|22|4000|ROU|2029|FRA|2025-08-27
Maga|RB|23|1500|POR|2027||2022-01-01
Lohann Doucet|DM|24|1000|BFA|2028|FRA|2026-07-14
Rica Rocha|DM|23|200|POR|2028||2028-06-30
Gonçalo Nogueira|CM|22|5000|POR|2028||2023-01-01
Beni Mukendi|CM|24|4000|ANG|2029||<2025-02-03
Matija Mitrović|CM|21|2000|SRB|2029|USA|2025-07-01
Marco Cruz|CM|22|400|POR|2028||<2024-07-01
Santi Verdi|CM|18|300|POR|2031||2026-07-01
Alan|AM|26|5000|BRA|2028||<2026-09-04
Samu|AM|30|2500|POR|2027||2024-07-01
Oumar Camara|LW|19|8000|FRA|2029|MLI|2025-07-01
Fabio Blanco|LW|22|800|ESP|2029||<2025-07-01
Victor Andersson|LW|22|800|SWE|2030|GUA|2026-08-21
Gustavo Silva|RW|27|4000|BRA|2028||2024-08-07
Telmo Arcanjo|RW|25|3000|CPV|2027|POR|2023-07-01
Miguel Nogueira|RW|21|2500|POR|2029||2025-07-01
Alioune Ndoye|ST|25|1000|SEN|2029||2025-08-04
Arnel Jakupovic|ST|28|800|AUT|2029|BIH|2026-09-02
Patrick Ouotro|ST|21|300|CIV|2030||2026-07-28` },
    { id: 'estoril', name: 'Эшторил', city: 'Эшторил', stadium: 'Estádio António Coimbra da Mota', cap: 5100, colors: ['#ffd700', '#1d3c8f'], players: `
Martin Turk|GK|23|300|SVN|2028||2025-07-24
Joel Robles|GK|36|200|ESP|2028||2024-07-31
Diogo Dias|GK|23|200|POR|2027||2025-07-01
Stelios Andreou|CB|24|2000|CYP|2027|BEL|2026-08-06
Ferro|CB|29|1000|POR|2027||<2025-07-31
Ismael Sierra|CB|23|1000|ESP|2027||2024-08-17
Xavi Sintes|CB|25|400|ESP|2027||2026-08-26
Jordan Arnolin|CB|18|300|POR|2029|FRA|2026-07-01
Sam Amissah|CB|19|500|ENG|2027|GHA|2026-08-30
Roko Jurisic|LB|25|650|CRO|2029||2026-09-04
Fernando Medrano|LB|26|500|ESP|2028||2026-07-01
Tiago Parente|LB|22|500|POR|2029||2025-07-01
Ricard Sánchez|RB|26|3000|ESP|2027||2025-08-12
Pedro Carvalho|RB|23|800|POR|2028||2024-07-24
Jordan Holsgrove|DM|27|5000|SCO|2028|ENG|2024-08-13
Antef Tsoungui|DM|23|1000|BEL|2029|ENG|2025-09-01
Tiago Brito|DM|22|300|POR|2029||2025-07-01
Milan Robin|CM|26|1000|FRA|2029||2026-09-04
Xeka|CM|31|600|POR|2028||2024-08-15
João Carvalho|AM|29|5000|POR|2027||2024-08-16
Luís Gomes|AM|22|500|POR|2028||2026-07-01
Nail Omerovic|LW|24|2000|BIH|2029||2026-09-04
André Lacximicant|LW|25|800|POR|2028||2024-07-25
Rafik Guitane|RW|27|4000|ALG|2027|FRA|2023-07-23
Axel Camblan|RW|23|600|FRA|2029||2026-09-03
Fabrício Garcia|RW|25|400|CPV|2028||<2024-07-01
Peixinho|RW|22|200|POR|2028||2026-01-01
Yanis Begraoui|ST|25|12000|MAR|2028|FRA|2024-07-01
Israel Salazar|ST|23|100|ESP|2028||2024-08-15` },
    { id: 'alverca', name: 'Алверка', city: 'Алверка-ду-Рибатежу', stadium: 'Complexo Desportivo FC Alverca', cap: 7705, colors: ['#e30613', '#ffffff'], players: `
Noah Raveyre|GK|21|1500|FRA|2030||2026-07-03
Matheus Mendes|GK|27|600|BRA|2028||2025-08-20
Jhonatan|GK|35|100|BRA|2027||2026-07-23
Bastien Meupiyou|CB|20|7000|FRA|2028|CMR|2025-07-21
Yaya Bojang|CB|22|1500|GAM|2030||2026-07-21
Steven Baseya|CB|21|700|FRA|2028|COD|2025-07-05
Julián Martínez|CB|22|500|HON|2029||2025-08-13
Sergi Gómez|CB|34|200|ESP|2027||2025-08-07
Mofe Jemide|CB|19|500|ENG|2030|NGA|2026-08-20
Chissumba|LB|21|5000|POR|2027|MOZ|<2025-08-13
Isaac James|LB|22|1000|NGA|2027||2025-07-02
Diogo Spencer|RB|22|2000|POR|2028||2026-01-30
Toni Tamarit|RB|20|500|ESP|2030||2026-07-04
Vasco Moreira|DM|25|1000|POR|2028||2026-01-13
Ian Luccas|DM|23|1000|BRA|2030||2026-08-05
Rayan Lucas|DM|21|900|BRA|2030||2026-08-05
Sabit Abdulai|DM|27|500|GHA|2028||2025-08-02
Davy Gui|CM|20|800|CIV|2030|FRA|2025-07-08
Zé Rafael|CM|33|800|BRA|2027|ITA|2026-08-24
Zakaria Kessary|CM|20|150|MAR|2027||2026-01-16
Tiago Octávio|CM|22|500|POR
Nabil Touaizi|RW|25|800|MAR|2028|ESP|2025-08-05
Ikker Julian|LW|21|500|BEL|2028|BRA|2026-07-01
Lucca Giuntini|AM|20|500|ITA|2029|BRA|2029-06-30
Chiquinho|LW|26|5000|POR|2028|CPV|2025-07-09
Figueiredo|LW|25|5000|BRA|2028||2025-09-01
André Vidigal|LW|28|800|ANG|2029|POR|2026-08-21
Cédric Nuozzi|LW|20|800|BEL|2028||2025-07-02
Rodrigo Catraio|RW|21|500|POR|2028||2028-06-30
Matheus França|ST|22|6000|BRA|2027||2026-09-04
Vivaldo Semedo|ST|21|2000|POR|2027|ANG|2026-07-16
Dawda Camara|ST|23|2000|MTN|2030|ESP|2026-09-01
Samy Merheg|ST|19|1000|LBN|2029|COL|2026-07-18` },
    { id: 'rio_ave', name: 'Риу Ави', city: 'Вила-ду-Конди', stadium: 'Estádio do Rio Ave Futebol Clube', cap: 5300, colors: ['#00a650', '#ffffff'], players: `
Cezary Miszta|GK|24|5000|POL|2027||2024-07-01
Vítor Hugo|GK|25|800|BRA|2030||2026-09-04
Ennio van der Gouw|GK|26|600|NED|2029||2026-07-01
Kevin Chamorro|GK|26|300|CRC|2029|NCA|2025-07-21
Antzelo Sina|GK|22|150|ALB|2027|GRE|2025-07-01
Andreas Ntoi|CB|23|5000|GRE|2028|ALB|2025-07-01
Simón García|CB|21|2000|COL|2031||2026-09-04
Nelson Abbey|CB|23|1500|ENG|2028|NGA|2025-07-01
Francisco Petrasso|CB|24|1500|ARG|2028||2024-08-26
Gustavo Mancha|CB|22|1500|BRA|2027||2026-02-02
Julien Lomboto|CB|24|300|FRA|2029|COD|2025-07-01
Jakub Brabec|CB|34|200|CZE|2027||2025-09-08
Caike|CB|21|100|BRA|2027||2026-07-01
Pedro Amaral|LB|29|1500|POR|2028||<2026-08-25
Marios Vrousai|RB|28|3000|GRE|2027|ALB|2024-07-06
Zé Carlos|RB|28|1500|POR|2028||2026-09-10
João Tomé|RB|23|600|POR|2027||2024-07-01
Tamás Nikitscher|DM|26|800|HUN|2029||2025-09-01
Georgios Liavas|DM|25|700|GRE|2029||2025-08-12
Diogo Nascimento|CM|23|3000|POR|2027||2026-07-15
Brandon Aguilera|CM|23|1500|CRC|2027||2024-07-02
Ryan Guilherme|CM|23|900|BRA|2030||2026-02-01
Antoine Wenck|CM|20|100|SEN|2027||2026-07-01
Malik Sellouki|AM|26|900|FRA|2029|MAR|2026-08-26
Miguel Patricío|AM|19|300|POR|2027||2026-07-01
Tobías Medina|LW|22|500|ARG|2028||2024-08-12
Diogo Bezerra|RW|24|2000|BRA|2030||2026-01-13
Dario Špikić|RW|27|1000|CRO|2028||2025-08-15
Sebastian Clemmensen|RW|23|1000|DEN|2030|TOG|2026-09-03
Roland Galcik|RW|25|500|SVK|2030||2026-07-16
Jalen Blesa|ST|25|2200|ESP|2030|USA|2026-02-02
Radek Siler|ST|22|1200|CZE|2031||2026-09-04
Tamble|ST|25|1000|GNB|2030|POR|2026-02-02
Samuel Alves|ST|18|400|BRA|2030||2026-07-03` },
    { id: 'santa_clara', name: 'Санта-Клара', city: 'Понта-Делгада', stadium: 'Estádio de São Miguel', cap: 13277, colors: ['#e30613', '#ffffff'], players: `
Lucas França|GK|30|800|BRA|2028||<2026-07-22
Neneca|GK|23|300|BRA|2030||2026-07-01
MT|CB|25|3000|BRA|2028||2024-07-01
Emanuel Moreira|CB|23|800|POR|2029||2026-07-01
Henrique Silva|CB|21|500|BRA|2027||2025-11-01
Pedro Pacheco|CB|29|500|POR|2028|SUI|2023-07-01
Ythallo|CB|22|300|BRA|2029||2026-09-02
Guilherme Romão|LB|29|600|BRA|2027||2026-01-31
Lucas Soares|RB|28|1500|BRA|2029||<2023-07-06
Pedro Ferreira|DM|28|3000|POR|2028||2024-01-03
Dani Borges|DM|23|700|BRA|2030||2024-01-31
Djé|CM|23|1000|CPV|2030||2025-07-01
Tiago Ribeiro|CM|24|600|POR|2029||2026-07-03
Vitinho|CM|22|500|BRA|2029||2026-07-13
Kamika|LW|22|500|POR|2028||2028-06-30
Vasconcelos|AM|21|1000|POR|2029||2026-07-24
Fredy|AM|20|100|POR|2029|GNB|2026-07-05
Sorriso|LW|20|800|BRA|2029||2026-07-10
Afonso Duarte|LW|21|100|POR|2028||2026-07-16
Vinícius Lopes|RW|27|2500|BRA|2028||2024-07-02
Brenner|RW|24|1500|BRA|2028||<2025-07-01
Welinton Torrão|RW|27|400|BRA|2028||2026-01-01
Gonçalo Paciência|ST|32|700|POR|2028||2026-01-27
Fernando|ST|21|400|BRA|2029||2026-02-02
Léo Jacó|ST|21|400|BRA|2030||2026-08-11` },
    { id: 'nacional', name: 'Насьонал', city: 'Фуншал', stadium: 'Estádio da Madeira', cap: 5200, colors: ['#000000', '#ffffff'], players: `
Renato Marin|GK|20|1500|ITA|2027|BRA|2026-07-06
João Gonçalves|GK|25|500|POR|2028||2026-07-06
Kevyn|GK|21|200|BRA|2030||2025-07-02
Zé Vítor|CB|25|2500|BRA|2027||2024-07-04
Léo Santos|CB|27|1500|BRA|2027||2024-08-27
Ulisses|CB|27|1000|BRA|2028||2024-07-16
Ivanildo Fernandes|CB|30|200|CPV|2027|POR|2025-01-22
Chico Gonçalves|CB|22|200|POR|2029||2023-07-01
José Gomes|LB|30|600|POR|2027||2021-07-07
Matias Silva|LB|17|500|POR|2027||2027-06-30
Wesley Gasolina|RB|26|700|BRA|2028||2026-07-22
Daniel de la Cruz|RB|22|500|ECU|2027||2026-07-08
Matheus Dias|DM|24|1500|BRA|2030||2025-07-11
Liziero|CM|28|1500|BRA|2028|ITA|2025-07-25
Chiheb Labidi|CM|25|500|TUN|2027||2024-09-02
Joel Silva|CM|23|400|POR|2029||2025-07-30
Danel Dongmo|CM|25|350|CMR|2029||2026-07-07
Deivison|CM|20|200|BRA|2030||2025-07-03
Josué Souza|CM|21|100|BRA|2030||2025-07-10
William Kokolo|LW|26|500|FRA|2027|COD|2026-08-20
Daniel Jr|AM|24|700|BRA|2030||2025-08-28
Matchoi Djaló|AM|23|500|POR|2028|GNB|2026-08-13
Filipe Soares|AM|27|500|POR|2027||2025-07-22
Miguel Baeza|AM|26|400|ESP|2027||2024-07-16
Mateus Iseppe|AM|20|400|BRA|2027||2026-07-02
Min-kyu Song|LW|27|1000|KOR|2028||2026-08-30
Fernando Nava|LW|22|500|BOL|2030||2026-08-11
Markus Jensen|LW|21|400|DEN|2030||2026-07-19
Stavros Gavriel|RW|24|600|CYP|2029|GRE|2026-07-02
Pablo Ruan|RW|23|500|BRA|2030||2025-07-02
Allen Obando|ST|20|900|ECU|2027||2026-08-13
Njoya Abdel|ST|23|900|CMR|2031||2026-09-04` },
    { id: 'estrela', name: 'Эштрела Амадора', city: 'Амадора', stadium: 'Estádio José Gomes', cap: 9000, colors: ['#e30613', '#00a650'], players: `
Léo Linck|GK|25|2500|BRA|2027||2026-07-21
Diogo Pinto|GK|22|300|POR|2028||<2025-07-01
David Grilo|GK|30|100|POR|2028||2025-07-02
Stefan Lekovic|CB|22|2500|SRB|2029||2026-07-01
Luan Patrick|CB|24|2000|BRA|2028||2025-07-10
Bernardo Schappo|CB|27|600|BRA|2028|LUX|2025-07-09
Atanas Chernev|CB|24|600|BUL|2028||2025-07-02
Rafa Soares|LB|31|1000|POR|2028||<2026-07-23
Lucas Mincarelli|LB|22|800|FRA|2029||2026-07-31
Max Scholze|RB|21|3000|GER|2028||2026-01-28
Jefferson Encada|RB|28|400|GNB|2028|POR|2025-07-04
Eddy Doué|DM|20|5000|CIV|2028|FRA|2026-01-23
Santiago Serra|DM|19|3000|POR|2027||2026-08-02
Kevin Höög Jansson|DM|26|400|SWE|2028||2026-01-01
Vuk Pavicevic|DM|18|500|MNE|2029||2026-09-04
Joan Jordán|CM|32|800|ESP|2028||2026-08-10
Robinho|CM|24|600|BRA|2028||2025-07-14
Tom Moustier|CM|24|400|FRA|2028|SWE|2026-01-20
Lovro Zvonarek|AM|21|1800|CRO|2029||2026-07-16
Emerson Vanga|AM|20|100|FRA|2027|ANG|2026-07-01
Ianis Stoica|LW|23|4000|ROU|2028||2025-07-28
Bénito|LW|23|300|FRA|2029|CGO|2026-07-01
Rodrigo Dudok|LW|19|100|URU|2027||2026-09-02
Alisson Souza|LW|21|100|BRA|2028||2026-01-01
Abraham Marcus|RW|26|3000|NGA|2028||2025-07-08
Jeremy Arévalo|ST|21|7000|ECU|2027|ESP|2026-09-04
Leandro Antonetti|ST|23|4000|PUR|2028|ESP|2025-09-01
René Mitongo|ST|18|1000|BEL|2027||2026-09-04
Henrique Poniewas|ST|20|500|BRA|2027|GER|2027-06-30` },
    { id: 'casa_pia', name: 'Каза Пия', city: 'Лиссабон', stadium: 'Estádio Pina Manique', cap: 3000, colors: ['#000000', '#ffffff'], players: `
Patrick Sequeira|GK|27|3000|CRC|2027|ESP|2024-07-25
André Gomes|GK|22|2500|POR|2030||2026-07-20
Ivan Mandić|GK|23|300|CRO|2029||2025-07-20
Daniel Azevedo|GK|28|200|POR|2027||2024-01-15
João Goulart|CB|26|1500|POR|2027||2024-07-05
David Sousa|CB|25|1500|BRA|2028||2025-08-07
Kaique Rocha|CB|25|1000|BRA|2028||2025-07-28
Felipe Silva|CB|24|1000|BRA|2027||2026-09-04
Kaly|CB|22|400|ANG|2027||2025-01-31
Abdu Conté|LB|28|700|POR|2028|GNB|2025-08-29
Pedro Rosas|LB|25|500|POR|2029||2026-02-02
André Geraldes|RB|35|100|POR|2027||2023-07-01
Selvi Clua|DM|21|500|ESP|2027||2026-07-25
Seba Pérez|DM|33|300|COL|2027||2025-07-30
JP|CM|21|2000|BRA|2030||2026-08-19
Lawrence Ofori|CM|28|1500|GHA|2027||<2026-01-18
Gabi|CM|26|550|POR|2029||2026-07-10
Abdu Dafé|CM|18|200|POR|2028||2026-07-01
Kevin Prieto|RW|23|500|URU|2029||2025-08-08
João Rego|AM|21|3000|POR|2027||<2026-08-22
Benjamin Pauwels|LW|21|800|BEL|2027||2026-08-28
Rochinha|LW|31|500|POR|2027||<2026-07-16
Aymen Zouin|LW|19|250|MAR|2027|ITA|2026-08-21
Jérémy Livolant|RW|28|2500|FRA|2027||2024-09-17
Mohamed Salah|RW|22|900|BEL|2030|MAR|2026-09-04
Henrique Araújo|ST|24|1000|POR|2029||<2026-07-28
Alassana Jatta|ST|27|600|GAM|2030||2026-07-29
Evans Maurin|ST|25|300|FRA|2029|MTQ|2026-08-29
Cassiano|ST|37|100|BRA|2028||2024-09-01` },
    { id: 'maritimo', name: 'Маритиму', city: 'Фуншал', stadium: 'Estádio do Marítimo', cap: 10932, colors: ['#e30613', '#00a650'], players: `
Fran Vieites|GK|27|1200|ESP|2028||2026-08-09
Gonçalo Tabuaço|GK|25|250|POR|2027||2024-07-05
Alfonso Pastor|GK|26|125|ESP|2027||<2026-02-02
Romain Correia|CB|27|1500|POR|2027|FRA|2024-07-04
Gábor Szalai|CB|26|1000|HUN|2027||2026-07-24
Rafael Fernandes|CB|24|500|POR|2027||2026-07-02
Nilton|LB|25|800|POR|2028|CPV|2026-08-26
Paulo Henrique|LB|30|700|POR|2027||2025-07-01
Nathanael Ogbeta|LB|25|400|ENG|2028|NGA|2026-07-13
Tomás Tavares|RB|25|300|POR|2029|CPV|2026-07-25
Igor Julião|RB|32|100|BRA|2027||2023-07-01
Vladan Danilović|DM|27|800|BIH|2027||<2024-08-27
Rodri Andrade|DM|24|500|POR|2027||2024-07-01
Francisco Silva|DM|19|500|POR|2027||2027-06-30
Yellu Santiago|CM|22|700|ESP|2027||2026-07-31
Ibrahim Alani|CM|20|500|NGA|2029||2026-08-12
Raphael Guzzo|CM|31|300|POR|2027|BRA|2025-08-13
Israel Isaac Ayuma|CM|21|300|NGA|2027||2026-08-02
Nélio Batista|CM|17|500|POR|2028||2028-06-30
Maxime Dominguez|AM|30|400|SUI|2027|ESP|2026-07-01
Martín Tejón|LW|22|2500|ESP|2027||2025-07-15
Simo Bouzaidi|LW|26|1200|MAR|2028|ESP|2025-08-14
Enrique Peña Zauner|LW|26|250|VEN|2027|GER|2025-01-23
Bryan Limbombe|RW|25|400|BEL|2028|COD|2026-08-06
Samuel Bamba|RW|22|350|GER|2029|COD|2026-07-30
Xiko Gomes|RW|22|200|POR|2027|VEN|2024-07-01
Adrián Butzke|ST|27|800|ESP|2027||<2025-09-01
Maurice Boakye|ST|22|400|GER|2029|GHA|2026-07-07
José Melro|ST|22|350|POR|2027||2026-02-02
Mons Bassouamina|ST|28|300|CGO|2027|FRA|2026-09-03` },
    { id: 'viseu', name: 'Академику Визеу', city: 'Визеу', stadium: 'Estádio Municipal do Fontelo', cap: 14368, colors: ['#000000', '#ffffff'], players: `
Juan Soriano|GK|29|600|ESP|2028||2026-08-19
Ewerton|GK|28|500|BRA|2027||2026-07-23
Marcos Lavín|GK|30|200|ESP|2027||2026-07-08
Matheus Sampaio|GK|22|100|BRA|2027||2024-07-01
Anthony Correia|CB|27|1500|FRA|2027|POR|2025-07-01
Hugo Gambor|CB|23|1200|CTA|2027|FRA|2026-09-04
Nikolaos Michelis|CB|25|1200|GRE|2028||2024-08-15
Rúben Pereira|CB|28|300|POR|2027||2025-07-01
Pedro Barcelos|CB|30|200|BRA|2027||2025-07-08
Gu Costa|LB|21|1400|POR|2029||2025-07-01
Miguel Ángel Brau|LB|24|1000|ESP|2027||2026-08-28
Igor Milioransa|LB|30|200|BRA|2027||2021-07-01
Robinho|RB|29|700|POR|2027||2025-07-09
Tomás Domingos|RB|27|200|POR|2027||<2025-07-01
Andro Babic|DM|22|400|CRO|2030||2026-08-03
André Ceitil|DM|31|150|POR|2027||2026-01-26
Soufiane Messeguem|CM|25|1500|GER|2028|ALG|2022-07-22
Cristian Ferreira|CM|27|200|ARG|2027||2026-07-07
Luís Silva|CM|34|75|POR|2027||2025-01-22
Cihan Kahraman|AM|28|1000|TUR|2027|GER|2023-09-01
Alejandro Mestanza|AM|21|250|ESP|2029||2026-07-22
Álvaro Zamora|LW|24|1600|CRC|2027||2025-08-21
Lorougnon Gohi|LW|22|350|CIV|2030||2025-07-05
João Guilherme|RW|25|700|BRA|2029||2026-07-10
Valery Fernández|RW|26|400|ESP|2027||2026-09-01
Nils Mortimer|RW|25|250|ESP|2028||2024-07-30
André Clóvis|ST|28|3500|BRA|2028||<2023-07-01
Mohamed Bouldini|ST|30|300|MAR|2027||2026-08-05
Paulinho|ST|27|300|POR|2027||2026-08-21` },
  ],
});
