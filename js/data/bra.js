// Серия А (Бразилия) 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'bra', name: 'Серия А (Бразилия)', short: 'Бразилия', country: 'BRA', tier: 1, weekday: 0,
  autumn: { from: '08-01', rounds: 19 }, spring: { from: '01-24', rounds: 19 },
  ticket: 10, prize: [12000, 11550, 11050, 10600, 10100, 9650, 9150, 8700, 8200, 7750, 7250, 6800, 6300, 5850, 5350, 4900, 4400, 3950, 3450, 3000],
  teams: [
    { id: 'flamengo', name: 'Фламенго', city: 'Рио-де-Жанейро', stadium: 'Estadio Jornalista Mário Filho (Maracanã)', cap: 78838, colors: ['#e30613', '#000000'], players: `
Agustín Rossi|GK|31|10302|ARG
Andrew|GK|25|5527|BRA
Dyogo Alves|GK|22|373|BRA
Gabriel Werneck|GK|17|300|BRA
Guillermo Varela|RB|33|1112|URU
Léo Ortiz|CB|30|10670|BRA
Léo Pereira|CB|30|9014|BRA
Ayrton Lucas|LB|29|2614|BRA
Danilo|CB|35|1435|BRA
Emerson Royal|RB|27|5113|BRA
Alex Sandro|LB|35|1146|BRA
Vitão|CB|26|11202|BRA
Daniel Sales|RB|20|300|BRA
João Victor|CB|19|300|BRA
Johnny Góes|LB|19|300|BRA
Erick Pulgar|DM|32|2546|CHI
Saúl|DM|31|1101|ESP
Giorgian de Arrascaeta|AM|32|13852|URU
Anthony Valencia|AM|23|1256|ECU
Nicolás de la Cruz|DM|29|6555|URU
Lucas Paquetá|AM|29|36543|BRA
Jorginho|DM|34|2631|ITA
Juan Sayago|CM|19|300|ARG
Evertton Araújo|DM|23|11693|BRA
Gabriel Amancio|CM|18|300|BRA
Jheferson Medino|CM|18|300|BRA
Luiz Araújo|RW|30|4885|BRA
Pedro|ST|29|17596|BRA
Jorge Carrascal|RW|28|13591|COL
Samuel Lino|LW|26|16513|BRA
Gonzalo Plata|RW|25|6918|ECU
Bruno Henrique|ST|35|1017|BRA
Joaquín Freitas|ST|19|1698|ARG
Diego Reyes|ST|19|300|MEX
Joshua|LW|19|300|BRA
Douglas Telles|RW|19|300|BRA
Ryan Roberto|ST|18|300|BRA` },
    { id: 'palmeiras', name: 'Палмейрас', city: 'Сан-Паулу', stadium: 'Nubank Parque', cap: 43713, colors: ['#006437', '#ffffff'], players: `
Carlos Miguel|GK|28|8389|BRA
Marcelo Lomba|GK|39|326|BRA
Bruno|GK|28|298|BRA
Luiz Fernando|GK|18|300|BRA
Alexander Barboza|CB|31|3949|ARG
Bruno Fuchs|CB|27|3558|BRA
Agustín Giay|RB|22|14147|ARG
Jefté|LB|22|5178|BRA
Khellven|RB|25|7097|BRA
Gustavo Gómez|CB|33|2897|PAR
Joaquín Piquerez|LB|28|13241|URU
Murilo|CB|29|5619|BRA
Benedetti|CB|20|300|BRA
Derick|CB|18|300|BRA
Luccas Ramon|CB|18|300|BRA
Arthur|LB|21|5167|BRA
Andreas Pereira|DM|30|16279|BRA
Jhon Arias|AM|29|18388|COL
Marlon Freitas|DM|31|5170|BRA
Mauricio|AM|25|16727|PAR
Lucas Evangelista|DM|31|2194|BRA
Emiliano Martínez|DM|27|6672|URU
Fabiano|CM|20|463|BRA
Larson|DM|21|300|BRA
Luis Pacheco|DM|18|1005|BRA
Isaac|CM|19|300|BRA
João Paulo|CM|19|300|BRA
Felipe Anderson|LW|33|1365|BRA
Vitor Roque|ST|21|42103|BRA
Paulinho|ST|26|10281|BRA
Ramón Sosa|ST|27|10902|PAR
Miguel Bilong|ST|18|300|CMR
José Manuel López|ST|25|25781|ARG
Juan Gabriel|ST|18|300|BRA
Kauã|ST|17|300|BRA` },
    { id: 'cruzeiro', name: 'Крузейро', city: 'Белу-Оризонти', stadium: 'Estádio Governador Magalhães Pinto', cap: 62170, colors: ['#0055a4', '#ffffff'], players: `
Cássio|GK|39|483|BRA
Marcelo|GK|20|300|BRA
Léo Aragão|GK|24|851|BRA
Vitor Lamounier|GK|19|300|BRA
Otávio|GK|20|1538|BRA
Kauã Moraes|RB|20|300|BRA
Matías Viña|LB|28|1820|URU
William|RB|31|1649|BRA
Fabrício Bruno|CB|30|10874|BRA
Fágner|RB|37|400|BRA
Lucas Villalba|CB|32|1010|ARG
Gabriel Rojas|LB|29|2491|ARG
Jonathan Jesus|CB|22|8704|BRA
Nicolas|CB|20|300|BRA
João Marcelo|CB|26|2186|BRA
Gustavo Carvalho|CB|19|300|BRA
Vitor Hugo|CB|18|300|BRA
Kelvin Coutinho|CB|20|300|BRA
Zé Lucas|DM|18|11513|BRA
Matheus Henrique|DM|28|2537|BRA
Matheus Pereira|AM|30|11932|BRA
Gerson|DM|29|18295|BRA
Lucas Silva|DM|33|630|BRA
Lucas Romero|DM|32|1958|ARG
Felipe Morais|AM|18|300|BRA
Rhuan Gabriel|CM|20|300|BRA
André Balbino|CM|19|300|BRA
Alessandro|CM|19|300|BRA
Eduardo Pape|CM|17|300|BRA
João Costa|RW|21|300|POR
Marquinhos|RW|23|2045|BRA
Bruno Rodrigues|ST|29|1085|BRA
Luis Sinisterra|LW|27|11053|COL
Kaio Jorge|ST|24|25291|BRA
Wesley|LW|21|300|BRA
Néiser Villarreal|ST|21|300|COL
Rayan Lelis|RW|19|300|BRA
Danilo Gimenes|ST|19|300|BRA
Kaique Kenji|LW|20|300|BRA
Gabriel Pec|RW|25|8245|BRA
Pietro Tavares|ST|17|300|BRA
Wanderson|LW|32|1949|BRA
Luciano Rodríguez|ST|23|11452|URU
Keny Arroyo|RW|20|13697|ECU` },
    { id: 'athletico_pr', name: 'Атлетико Паранаэнсе', city: 'Куритиба', stadium: 'Estádio Mário Celso Petraglia', cap: 43981, colors: ['#e30613', '#000000'], players: `
Mycael|GK|22|300|BRA
Santos|GK|36|458|BRA
Matheus Soares|GK|21|300|BRA
Максым Воронов|GK|20|300|UKR
Carlos Eduardo|GK|20|300|BRA
Murilo Camargo|CB|17|300|BRA
Léo|CB|30|930|BRA
Carlos Terán|CB|26|1265|COL
Gustavo Veiga|CB|20|300|BRA
Dantas|CB|22|300|BRA
Gastón Benavídez|CB|31|2315|ARG
Vitinho|CB|19|300|BRA
Juan Aguirre|CB|30|1227|COL
Arthur Monteiro|CB|17|300|BRA
Lucas Esquivel|CB|25|7427|ARG
Bruno Baldini|CB|19|300|BRA
Arthur Dias|CB|19|5852|BRA
Benjamín Brito|CM|19|300|ARG
Guilherme Back|CM|20|300|BRA
Kauan Stabelini|CM|19|300|BRA
Lucas Marezi|CM|20|300|BRA
Gilberto|RB|21|1977|BRA
Felipinho|CM|25|1122|BRA
Steven Mendoza|LB|34|683|COL
Bruno Zapelli|CM|24|4286|ARG
Gilberto|RB|33|1547|BRA
Luiz Gustavo|DM|39|447|BRA
Jádson|DM|33|746|BRA
Alejandro García|AM|25|682|COL
Leozinho|AM|27|854|BRA
Claudinho|LB|20|300|BRA
Juan Portilla|DM|28|4569|COL
Leonardo Cerci|CM|17|300|BRA
Chiqueti|CM|21|300|BRA
Dudu Kogitzki|AM|20|300|BRA
João Cruz|AM|20|4378|BRA
Léo Derik|LW|21|2687|BRA
Diogo Riquelme|CB|21|948|BRA
Daniel Troiano|ST|21|300|BRA
Juliano Santini|ST|19|300|BRA
Nicolás Azambuja|ST|18|300|URU
Kevin Viveros|ST|26|8625|COL
Kerwin Vargas|RW|24|3562|COL
Jorge Rivaldo|ST|23|1184|COL
Lucas Amorim|ST|20|300|BRA
Renan Viana|ST|23|300|BRA
Renan Peixoto|ST|26|1254|BRA` },
    { id: 'fluminense', name: 'Флуминенсе', city: 'Рио-де-Жанейро', stadium: 'Estadio Jornalista Mário Filho (Maracanã)', cap: 78838, colors: ['#7a1a33', '#00613c'], players: `
Fábio|GK|46|1196|BRA
Gustavo Félix|GK|19|300|BRA
Marcelo Pitaluga|GK|23|868|BRA
Vitor Eudes|GK|28|453|BRA
Jhonny|RB|24|577|BRA
Léo Jance|RB|21|300|BRA
Samuel Xavier|RB|36|879|BRA
Jemmes|CB|26|2525|BRA
Thiago Silva|CB|42|803|BRA
Ignácio|CB|29|1487|BRA
Renê|LB|34|922|BRA
Guilherme Arana|LB|29|5521|BRA
Igor Rabello|CB|31|1117|BRA
Juan Pablo Freytes|CB|26|6055|ARG
Guga|RB|28|1645|BRA
Julián Millán|CB|28|2232|COL
Gorgulho|CB|19|300|BRA
Júlio Fidelis|RB|19|718|BRA
Kaio Borges|CB|19|300|BRA
Breno|CB|19|300|BRA
Stiven Jimenez|CM|19|667|USA
Martinelli|DM|25|16806|BRA
Ganso|AM|37|293|BRA
Nonato|DM|28|1555|BRA
Alisson|DM|33|714|BRA
Lucho Acosta|AM|32|3779|ARG
Hércules|DM|26|16676|BRA
Vagno|LB|19|300|BRA
Ruan Sales|CM|18|300|BRA
Paulo Guilherme|CM|18|300|BRA
Peter|CM|18|300|BRA
Naarã|CM|18|300|BRA
Otávio|DM|32|896|BRA
Hulk|ST|40|1183|BRA
John Kennedy|ST|24|10366|BRA
Jefferson Savarino|LW|29|6332|VEN
Germán Cano|ST|38|364|ARG
Matheus Reis|LW|19|300|MEX
Agustín Canobbio|RW|28|8520|URU
Rodrigo Castillo|ST|27|5452|ARG
Riquelme|RW|19|300|BRA
Yeferson Soteldo|LW|29|2299|VEN
Wesley Natã|ST|18|300|BRA
Isack Gabriel|ST|19|300|BRA
Keven Samuel|ST|19|300|BRA
João Lourenço|ST|21|300|BRA
Enzo|ST|21|300|BRA
Kevin Serna|LW|28|4747|COL` },
    { id: 'atletico_mg', name: 'Атлетико Минейро', city: 'Белу-Оризонти', stadium: 'Arena MRV', cap: 44892, colors: ['#000000', '#ffffff'], players: `
Gabriel Delfim|GK|24|609|BRA
Everson|GK|36|1101|BRA
Robert|GK|21|300|BRA
Kaio|GK|18|300|BRA
Pedro Cobra|GK|20|300|BRA
Guilherme Pires|GK|17|300|BRA
Natanael|RB|24|5016|BRA
Léo Duarte|CB|30|1838|BRA
Ruan Tressoldi|CB|27|3271|BRA
Lyanco|CB|29|2482|BRA
Vitor Hugo|CB|35|630|BRA
Renan Lodi|LB|28|10675|BRA
Ángelo Preciado|RB|28|2271|ECU
Luís Gustavo|CB|20|300|BRA
Samuel Lima|CB|20|300|BRA
Kauã Pascini|LB|18|300|BRA
Vitão|CB|18|300|BRA
Wanderson|CB|19|300|BRA
Pedro Fachineti|CB|18|300|BRA
Pedro Lemos|CB|20|300|BRA
Alexsander|DM|23|6493|BRA
Fred|AM|33|2125|BRA
Maycon|DM|29|1554|BRA
Gustavo Scarpa|AM|32|2470|BRA
Bernard|AM|34|683|BRA
Kevin Castaño|DM|26|5101|COL
Igor Gomes|DM|27|1393|BRA
Alan Franco|DM|28|2691|ECU
Tomás Pérez|DM|21|5346|ARG
Victor Hugo|AM|22|9321|BRA
Hendel Índio|CM|18|300|BRA
Mamady Cissé|DM|19|1947|GUI
Mateus Romero|CM|20|300|BRA
Gutte|CM|18|300|BRA
Eric|CM|20|300|BRA
Dudu|AM|34|855|BRA
Mateo Cassierra|ST|29|8297|COL
Thiago Borbas|ST|24|4207|URU
Reinier|ST|24|1861|BRA
Alan Minda|AM|23|4320|ECU
Tomás Cuello|RW|26|6386|ARG
Cauã Soares|ST|18|1135|BRA
Gabriel Veneno|ST|17|300|BRA
Mosquito|ST|18|300|BRA
Murillo Fernandes|ST|20|300|BRA
Riquelme Henrique|ST|17|300|BRA
João Teixeira|ST|18|300|BRA` },
    { id: 'bahia', name: 'Баия', city: 'Салвадор', stadium: 'Casa de Apostas Arena Fonte Nova', cap: 48661, colors: ['#0055a4', '#e30613'], players: `
Guido Herrera|GK|34|1366|ARG
Léo Vieira|GK|36|336|BRA
Victor|GK|20|300|BRA
Fabio|GK|18|300|BRA
Iuri Jean|GK|19|300|BRA
Ronaldo|GK|30|1626|BRA
Marco Moreno|CB|25|1025|ESP
Kanu|CB|29|1959|BRA
Román Gómez|RB|22|1770|ARG
David Duarte|CB|31|1208|BRA
Luiz Gustavo|CB|20|908|BRA
Marcos Victor|CB|24|801|BRA
Luciano Juba|LB|27|15350|BRA
Gerald|CB|18|300|BRA
Zé Guilherme|LB|21|868|BRA
Fred|RB|20|300|BRA
Jean Lucas|CM|28|14928|BRA
Éverton Ribeiro|CM|37|720|BRA
Rodrigo Nestor|CM|26|6821|BRA
Erick|CM|28|2369|BRA
Michel Araújo|CM|30|1666|URU
Lautaro López|CM|21|690|ARG
Caio Alexandre|CM|27|6500|BRA
Nicolás Acevedo|CM|27|6702|URU
Sidney|DM|20|300|BRA
Pedrinho|CM|20|300|BRA
David Martins|CM|19|300|BRA
Wendel|CM|20|300|BRA
Roger|CM|19|300|BRA
Ademir|RW|31|740|BRA
Alejo Véliz|ST|23|6666|ARG
Willian José|ST|34|977|BRA
Erick Pulga|LW|26|11115|BRA
Mateo Sanabria|RW|22|1987|ARG
Everaldo|ST|35|431|BRA
Kauê Furquim|RW|17|2281|BRA
Lyan|ST|17|300|BRA
Ryan Nascimento|ST|18|300|BRA
Ruan Pablo|RW|18|6535|BRA
Dell|ST|18|6168|BRA
Cristian Olivera|RW|24|5165|URU` },
    { id: 'santos', name: 'Сантос', city: 'Сантус', stadium: 'Estádio Urbano Caldeira', cap: 17923, colors: ['#ffffff', '#000000'], players: `
Diógenes|GK|25|643|BRA
João Paulo|GK|31|1403|BRA
Rodrigo Falcão|GK|21|300|BRA
Gabriel Brazão|GK|26|14991|BRA
João Pedro|GK|18|300|BRA
Arthur Vale|GK|17|300|BRA
Vinicius Lira|LB|19|300|BRA
Lucas Veríssimo|CB|31|2345|BRA
Luan Peres|CB|32|653|BRA
Igor Vinícius|RB|29|1606|BRA
Rodinei|RB|34|351|BRA
João Ananias|CB|19|300|BRA
Gonzalo Escobar|LB|29|972|ARG
Rafael Gonzaga|LB|18|300|BRA
João Alencar|CB|19|300|BRA
Marcelo Tórrez|CB|20|300|BOL
João Schmidt|DM|33|638|BRA
Arthur|DM|30|1994|BRA
Neymar|AM|34|3165|BRA
Philippe Coutinho|AM|34|1380|BRA
Willian Arão|DM|34|559|BRA
Pepê Fermino|CM|19|300|BRA
Gabriel Menino|RB|26|6955|BRA
Christian Oliva|DM|30|1146|URU
Benjamín Rollheiser|AM|26|10499|ARG
Lima|AM|30|1427|BRA
Gustavo Henrique|DM|21|300|BRA
Vinícius Rocha|CM|17|300|BRA
Nicola Profeta|DM|20|300|VEN
Vinicius Fabri|CM|18|300|BRA
Kauan Barreto|CM|19|300|BRA
Samuel Mendes|CM|18|300|BRA
Everton|LW|30|3334|BRA
Gabriel Barbosa|ST|30|3898|BRA
Thaciano|ST|31|1093|BRA
Gustavo Caballero|RW|25|1247|PAR
Moisés|LW|30|1500|BRA
Álvaro Barreal|LW|26|8430|ARG
Davizinho|RB|18|300|BRA
Kaio Ganga|ST|19|300|BRA
Miguel Terceros|RW|22|300|BOL
Rony|ST|31|3943|BRA
Pedro Assis|ST|19|300|BRA
João Victor|ST|19|300|BRA
Mateus Xavier|ST|19|300|BRA
Gabriel Bontempo|RW|21|11510|BRA
Fernando Pradella|ST|18|300|BRA
Nadson|ST|17|300|BRA
David Nogueira|ST|17|300|BRA
Gabriel Follmer|ST|19|300|BRA` },
    { id: 'sao_paulo', name: 'Сан-Паулу', city: 'Сан-Паулу', stadium: 'MorumBIS', cap: 66795, colors: ['#ffffff', '#e30613'], players: `
Rafael|GK|37|941|BRA
Carlos Coronel|GK|29|1145|PAR
João Pedro|GK|20|300|BRA
Young|GK|24|300|BRA
Felipe Preis|GK|20|300|BRA
Rafael Tolói|CB|36|424|ITA
Robert Arboleda|CB|35|633|ECU
Iago Borduchi|LB|29|2300|BRA
Enzo Díaz|LB|30|1978|ARG
Wendell|LB|33|1214|BRA
Lucas Ramon|RB|32|814|BRA
Aurélio Buta|RB|29|1151|POR
Domingos Duarte|CB|31|1278|POR
Newton|CB|26|2225|BRA
Pedro Lima|RB|20|5921|BRA
Igão|CB|19|300|BRA
Sabino|CB|29|1178|BRA
Igor Felisberto|RB|19|300|BRA
Guilherme Reis|CB|20|300|BRA
Matheus Belém|CB|23|575|BRA
Isac|CB|20|300|BRA
Luis Osorio|CB|20|300|BRA
Felipe Oliveira|CB|20|300|BRA
Cédric Soares|RB|35|545|POR
Lucas Moura|AM|34|1106|BRA
Marcos Antônio|DM|26|13690|BRA
Damián Bobadilla|DM|25|9312|PAR
Pablo Maia|DM|24|5583|BRA
Gustavo Santana|AM|21|300|BRA
Pedro Ferreira|CM|19|300|BRA
Djhordney|DM|19|300|BRA
Matheus Ferreira|CM|20|300|BRA
Nicolas|LB|19|300|BRA
Pedro Bezerra|CM|19|300|BRA
Robert William|CM|16|300|BRA
Danielzinho|DM|31|1084|BRA
Jonathan Calleri|ST|33|1045|ARG
Luciano|ST|33|1071|BRA
Ferreira|LW|28|2454|BRA
André Silva|ST|29|2084|BRA
Victor Sá|LW|32|1708|BRA
Tetê|ST|19|300|BRA
Artur|RW|28|8260|BRA
Paulinho|ST|21|300|BRA
Lucca Marques|LW|19|300|BRA
Brenno Junqueira|ST|17|300|BRA
Ryan Francisco|LW|19|6672|BRA
Juan Potes|CB|19|300|COL
Cauly|LW|31|1964|BRA` },
    { id: 'bragantino', name: 'Ред Булл Брагантино', city: 'Браганса-Паулиста', stadium: 'Estádio Municipal Cícero de Souza Marques', cap: 12000, colors: ['#ffffff', '#e30613'], players: `
Cleiton|GK|29|3646|BRA
Tiago Volpi|GK|35|660|BRA
Fabrício|GK|26|632|BRA
Guzmán Rodríguez|CB|26|2343|URU
Eduardo Santos|CB|28|755|BRA
Alix|CB|26|3643|BRA
Vanderlan|LB|24|3927|BRA
Gustavo Marques|CB|25|3516|BRA
Agustín Sant'Anna|RB|29|2268|URU
Juninho Capixaba|LB|29|7150|BRA
José Hurtado|RB|24|2774|ECU
Breno de Moraes|RB|18|300|BRA
Cauê Santos|LB|19|300|BRA
Ryan Augusto|RB|19|300|BRA
Weimar Vivas|CB|20|300|COL
Fabinho|DM|24|5824|BRA
Gabriel|DM|34|637|BRA
Eric Ramires|DM|26|2080|BRA
Ignacio Sosa|DM|23|6225|URU
Rodriguinho|DM|22|7046|BRA
Gustavinho|CM|22|5377|BRA
Praxedes|LW|24|804|BRA
Davi Gomes|RW|21|300|BRA
Patrick|DM|22|1553|BRA
Matheus Fernandes|DM|28|971|BRA
Luis Gustavo|CM|18|300|BRA
Chrystian Delfino|CM|19|300|BRA
Gabriel Lopes|CM|20|300|BRA
Marquinhos|CM|22|300|BRA
Vini Krygsman|CM|18|300|BRA
Eduardo Sasha|ST|34|918|BRA
Isidro Pitta|ST|27|9027|PAR
Fernando|LW|27|1188|BRA
Vinicinho|LW|22|5065|BRA
Bruninho|CM|23|1131|BRA
Lucas Barbosa|RW|25|5899|BRA
Henry Mosquera|LW|24|2698|COL
José Herrera|RW|23|300|ARG
Yuri|LW|20|300|BRA
Wallace Yan|ST|21|6703|BRA
Jhuan Nunes|ST|19|300|BRA` },
    { id: 'botafogo', name: 'Ботафого', city: 'Рио-де-Жанейро', stadium: 'Estádio Olímpico Nilton Santos', cap: 46931, colors: ['#000000', '#ffffff'], players: `
Gabriel Batista|GK|28|3567|BRA
Warleson|GK|30|1460|BRA
Rhyan Luca|GK|20|300|BRA
Cristhian Loor|GK|20|749|ECU
Cléber Lucas|GK|19|300|BRA
Vitinho|RB|27|10703|BRA
Arthur Chaves|CB|25|5208|BRA
Mateo Ponte|CB|23|1981|URU
Nahuel Ferraresi|CB|27|2654|VEN
Alex Telles|LB|33|1979|BRA
Marçal|CB|37|295|BRA
Anthony|CB|21|300|BRA
Kaio Pantaleão|CB|31|1221|BRA
Lucas Monzón|CB|25|769|URU
Gabriel Justino|CB|20|946|BRA
Gabriel|LB|20|300|BRA
Kadu|RB|21|300|BRA
Riquelme|CB|19|300|BRA
Kauã Serafim|CB|19|300|BRA
Herick|CB|17|300|BRA
Jhoan Hernández|LB|20|300|COL
Cristian Medina|DM|24|10945|ARG
Álvaro Montoro|AM|19|14200|ARG
Jordan Barrera|LW|20|4668|COL
Allan|DM|35|588|BRA
Paulinho|LB|31|517|BRA
Danilo Santos|DM|25|36153|BRA
Victor Hugo|CM|17|300|BRA
Caio Valle|AM|19|300|BRA
Miguel Caldas|CM|18|300|BRA
Arthur Novaes|DM|18|300|BRA
Wallace Davi|CM|19|300|BRA
Cauã Zappelini|CM|19|300|BRA
Marquinhos|DM|19|300|BRA
Huguinho|CM|19|300|BRA
Lucas Villalba|RW|25|1403|URU
Bernardo Valim|CM|20|300|BRA
Edenílson|AM|36|351|BRA
Domingos Andrade|CM|23|1465|ANG
Júnior Santos|RW|32|2090|BRA
Tiquinho Soares|ST|35|402|BRA
Matheus Martins|LW|23|5268|BRA
Arthur Cabral|ST|28|10053|BRA
Hakim Ziyech|RW|33|1242|MAR
Kadir Barría|ST|19|5524|PAN
Arthur Izaque|ST|19|300|BRA
Felipe Januário|ST|19|300|BRA
Kauan Toledo|LW|20|300|BRA
Matheusinho|ST|19|300|BRA
Lucas Emanuel|ST|17|300|BRA
Danilo|ST|27|1991|BRA` },
    { id: 'coritiba', name: 'Коритиба', city: 'Куритиба', stadium: 'Estádio Major Antônio Couto Pereira', cap: 45563, colors: ['#00a650', '#ffffff'], players: `
Pedro Morisco|GK|22|4994|BRA
Keiller|GK|29|286|BRA
Pedro Rangel|GK|26|1049|BRA
Benassi|GK|22|580|BRA
Gabriel Leite|GK|38|123|BRA
Gabriel Ibson|CB|18|300|BRA
Tinga|RB|33|304|BRA
Maicon|CB|38|406|BRA
Rodrigo Moledo|CB|38|276|BRA
Felipe Jonatan|LB|28|1470|BRA
Fabricio Bustos|RB|30|1104|ARG
Tiago Cóser|CB|22|1272|BRA
Bruno Melo|LB|33|384|BRA
Jacy|CB|29|1743|BRA
Rodrigo Gelado|LB|23|437|BRA
Lucas Taverna|RB|19|300|BRA
Miguel Silva|CM|19|300|BRA
Nicolás Fonseca|DM|28|2081|URU
Josué|AM|36|369|POR
Alejandro Ararat|CM|20|718|COL
Brian Ocampo|LW|27|987|URU
Sebastián Gómez|DM|30|1318|COL
Thiago Santos|DM|37|303|BRA
Richard|DM|32|282|BRA
Fabinho|AM|26|948|BRA
Khensane|CM|17|300|BRA
Vini Paulista|DM|25|1041|BRA
Gustavo|CM|24|654|BRA
Tissi|DM|19|300|BRA
Thiago Azaf|CM|19|300|BRA
Éberth|ST|23|392|BRA
Joaquín Lavega|RW|21|5662|URU
Lucas Ronier|RW|21|300|BRA
Paulo Roberto|ST|21|300|BRA
Keno|LW|37|300|BRA
Pedro Rocha|ST|32|1087|BRA
David Alves|ST|18|300|BRA
Lucas Crepaldi|ST|19|300|BRA
Breno Lopes|LW|30|2170|BRA
Renato Marques|ST|22|1307|BRA
Matheus Dias|ST|19|300|BRA
Rodrigo Rodrigues|ST|30|323|BRA` },
    { id: 'vitoria_ba', name: 'Витория', city: 'Салвадор', stadium: 'Estádio Manoel Barradas', cap: 35980, colors: ['#e30613', '#000000'], players: `
Lucas Arcanjo|GK|28|2044|BRA
Fintelman|GK|25|517|BRA
Yuri Sena|GK|25|429|BRA
Guilherme Inácio|CB|18|300|BRA
Emanuel Brítez|CB|34|464|ARG
Darlan|CB|23|300|BRA
Camutanga|CB|33|351|BRA
Riccieli|CB|28|888|BRA
Ramon|LB|25|2081|BRA
Kauan|CB|19|300|BRA
Cacá|CB|27|1468|BRA
Edenilson|RB|21|940|BRA
Luan Cândido|CB|25|2027|BRA
Hiago Costa|CB|20|300|BRA
Edu|CB|26|1165|BRA
Nathan Mendes|RB|24|1645|BRA
Ivan|CB|20|300|BRA
Gean|CB|19|300|BRA
Wanderson|CB|18|300|BRA
Fabiano Souza|RB|26|1145|BRA
Jamerson|LB|28|423|BRA
Mateus Silva|RB|28|300|BRA
Tomás Pochettino|AM|30|2140|ARG
Walace|DM|31|1689|BRA
Rúben Ismael|DM|27|916|POR
Kike Saverio|RW|27|185|ECU
Lucas Silva|LW|27|343|BRA
Dudu|CM|27|300|BRA
Emmanuel Martínez|CM|32|902|ARG
Wendell Sacramento|DM|21|300|BRA
Gabriel Baralhas|CM|28|1865|BRA
Alejandro Almaraz|CM|19|300|ARG
Lucas Lohan|CM|20|300|BRA
Nicolas Celis|CM|19|300|COL
Zé Vitor|CM|26|300|BRA
Caíque Gonçalves|CM|31|680|BRA
Marinho|RW|36|311|BRA
Alex Bruno|ST|27|583|BRA
Matheuzinho|LW|29|2046|BRA
Osvaldo|LW|39|413|BRA
Diego Tarzia|LW|23|1994|ARG
Fabrício|ST|26|630|BRA
Anderson Pato|ST|24|300|BRA
Erick|RW|28|1878|BRA
Marquinhos|ST|19|300|BRA
Ignacio Laquintana|RW|27|946|URU
Renato Kayzer|ST|30|866|BRA
Renê|ST|23|300|BRA` },
    { id: 'mirassol', name: 'Мирасол', city: 'Мирасол', stadium: 'Estádio José Maria de Campos Maia', cap: 14534, colors: ['#ffd700', '#00a650'], players: `
Georgemy|GK|31|313|BRA
Walter|GK|38|714|BRA
Alex Muralha|GK|36|340|BRA
Thomazella|GK|36|300|BRA
Lucas Oliveira|CB|30|603|BRA
Willian Machado|CB|29|1594|BRA
Reinaldo|LB|37|570|BRA
Victor Luís|LB|33|282|BRA
Elias|RB|27|349|BRA
Daniel Borges|RB|33|327|BRA
Igor Formiga|RB|27|1393|BRA
João Victor|CB|29|909|BRA
Gabriel Knesowitsch|CB|23|300|BRA
Marcelinho|CB|18|300|BRA
Japa|CM|22|1241|BRA
Shaylon|AM|29|788|BRA
Denilson|DM|25|1780|BRA
Chico|CM|35|297|BRA
José Aldo|DM|28|1176|BRA
Neto Moura|DM|30|1227|BRA
Eduardo|AM|37|351|BRA
Gustavo Cazonatti|DM|30|319|BRA
Wallisson|DM|29|823|BRA
André Luís|ST|32|810|BRA
Negueba|RW|26|2010|BRA
Fernandinho|LW|29|462|BRA
Gustavo Silva|ST|29|931|BRA
Bruno Santos|ST|29|1010|BRA
Felipinho|ST|19|300|BRA
Alesson|LW|27|1550|BRA
Edson Carioca|RW|29|1197|BRA
Carlos Eduardo|RW|30|440|BRA
Zé Roberto|ST|33|232|BRA` },
    { id: 'vasco', name: 'Васко да Гама', city: 'Рио-де-Жанейро', stadium: 'Estádio São Januário', cap: 24584, colors: ['#000000', '#ffffff'], players: `
Léo Jardim|GK|31|5348|BRA
Daniel Fuzato|GK|29|480|BRA
Pablo|GK|23|300|BRA
Phillipe Gabriel|GK|20|300|BRA
Marcão|GK|20|300|BRA
Riquelme|LB|24|429|BRA
José Rodríguez|RB|29|1126|URU
Alan Saldivia|CB|24|1232|URU
Lucas Piton|LB|26|6776|ITA
Paulinho|LB|22|932|BRA
Robert Renan|CB|23|13632|BRA
Lucas Freitas|CB|25|1094|BRA
Carlos Cuesta|CB|27|7595|COL
Alison|CB|19|300|BRA
Gabriel Pereira|CB|26|5969|BRA
Jotavve Fonseca|RB|21|300|BRA
Walace Falcão|CB|21|300|BRA
Cuiabano|LB|23|12877|BRA
Breno Vereza|CB|19|300|BRA
Bruno André|CB|19|300|BRA
Melim|CB|18|300|BRA
Paulo Henrique|RB|30|4279|BRA
Guilherme Estrella|CM|21|300|BRA
Tchê Tchê|DM|34|544|BRA
Santiago Sosa|DM|27|9117|ARG
Jair|DM|32|392|BRA
Johan Rojas|AM|24|4139|COL
Alan Lescano|CM|24|8469|ARG
Thiago Mendes|DM|34|974|BRA
Gustavo Guimarães|CM|20|300|BRA
Lucca Guima|CM|20|300|BRA
Léo Félix|CM|18|300|BRA
Euder|CM|21|300|BRA
Avellar|LW|20|300|BRA
Ramon Rique|AM|19|1413|BRA
Mateus Carvalho|CM|24|300|BRA
Lukas Zuccarello|RW|19|300|BRA
Cauan Barros|DM|22|4744|BRA
David|ST|31|1221|BRA
Facundo Colidio|LW|26|5929|ARG
Andrés Gómez|LW|24|11600|COL
Nuno Moreira|RW|27|6178|POR
Marino Hinestroza|RW|24|6152|COL
Bruno Duarte|ST|30|3649|BRA
Brenner|ST|26|3969|BRA
Adson|RW|26|1891|BRA
Loide Augusto|RW|26|1002|ANG
Luiz Lócio|ST|20|300|BRA
João Vitor|ST|17|300|BRA
Alex Bruno|ST|18|300|BRA
Bruno Lopes|ST|19|300|BRA
Andrey Fernandes|ST|18|300|BRA
Claudio Spinelli|ST|29|1478|ARG
Anderson Felix|ST|19|300|BRA
Diego Minete|ST|17|300|BRA` },
    { id: 'corinthians', name: 'Коринтианс', city: 'Сан-Паулу', stadium: 'Neo Química Arena', cap: 49205, colors: ['#ffffff', '#000000'], players: `
Hugo Souza|GK|27|13060|BRA
Felipe Longo|GK|21|937|BRA
Matheus Corrêa|GK|20|300|BRA
Kauê Camargo|GK|22|300|BRA
Gustavo Milani|GK|17|300|BRA
Matheuzinho|RB|26|11036|BRA
Gabriel Paulista|CB|35|952|BRA
André Ramalho|CB|34|583|BRA
Gustavo Henrique|CB|33|1036|BRA
Pedro Milans|RB|24|1357|URU
Matheus Bidu|LB|27|6742|BRA
Fabrizio Angileri|LB|32|288|ARG
Hugo|LB|29|302|BRA
João Pedro|CB|22|3723|BRA
Iago Machado|CB|17|300|BRA
João Jacaré|RB|19|300|BRA
Guilherme Pellegrin|CB|20|300|BRA
Yago Melo|CB|19|300|BRA
Levi Dias|CB|18|300|BRA
João Vitor|CB|18|300|BRA
Rodrigo Garro|AM|28|12932|ARG
Raniele|DM|29|2469|BRA
André Carrillo|DM|35|452|PER
Matheus Pereira|DM|28|1701|BRA
Allan|DM|29|1771|BRA
Charles|DM|30|841|BRA
Guilherme Amorim|CM|18|300|BRA
André|DM|20|300|BRA
Bahia|DM|20|300|BRA
Pedro Thomas|CM|18|300|BRA
Guilherme Caraguá|CM|19|300|BRA
Alex Santana|CM|31|858|BRA
Luiz Fabio|CM|19|300|BRA
Breno Bidon|RW|21|24141|BRA
Yuri Alberto|ST|25|22854|BRA
Memphis Depay|ST|32|3430|NED
Vitinho|LW|33|416|BRA
Pedro Raul|ST|29|1937|BRA
Kayke|LW|22|1184|BRA
Kaio César|RW|22|4351|BRA
Zakaria Labyad|LW|33|320|MAR
Gui Negão|ST|19|10001|BRA
Nicolas Araújo|ST|19|300|BRA
Dieguinho|RW|19|4560|BRA
Luiz Fernando|ST|19|300|BRA
Nícollas|ST|18|300|BRA
Jesse Lingard|ST|33|1175|ENG
Christian Santos|ST|19|300|BRA
Kayque|ST|17|300|BRA` },
    { id: 'internacional', name: 'Интернасьонал', city: 'Порту-Алегри', stadium: 'Estádio José Pinheiro Borda', cap: 51300, colors: ['#e30613', '#ffffff'], players: `
Henrique Menke|GK|19|300|BRA
Sergio Rochet|GK|33|933|URU
Anthoni|GK|24|3404|BRA
Kauan Jesus|GK|23|300|BRA
Matheus Cunha|GK|25|2283|BRA
Filipe	Sirio|GK|19|300|BRA
Diego Esser|GK|21|300|BRA
Guillermo Maripán|CB|32|1635|CHI
Félix Torres|CB|29|1387|ECU
Matheus Bahia|LB|27|2227|BRA
Bruno Gomes|CB|25|6578|BRA
Juninho|CB|31|579|BRA
Gabriel Mercado|CB|39|466|ARG
Alisson|LB|18|300|BRA
Braian Aguirre|RB|26|1918|ARG
Victor Gabriel|CB|22|6864|BRA
Denis Marfo|CB|20|300|GHA
Pedro Kauã|CB|20|300|BRA
Luiz Felipe|LB|20|300|BRA
Rodrigo Villagra|DM|25|3938|ARG
Bruno Henrique|DM|37|515|BRA
Alan Patrick|AM|35|1506|BRA
Ronaldo|DM|30|1106|BRA
Alexandro Bernabéi|LB|26|9121|ARG
Paulinho Paula|DM|29|896|BRA
Vitinho|RW|27|5570|BRA
Thiago Maia|DM|29|1333|BRA
Calebe|RW|26|1452|BRA
Allex|AM|20|300|BRA
Benjamin Arhin|DM|20|300|GHA
João Kempes|CM|17|300|BRA
Gabriel Vinicius|CM|18|300|BRA
Johan Carbonero|LW|27|6532|COL
Alerrandro|ST|26|2262|BRA
Kayky|LW|23|6212|BRA
Niclas Eliasson|RW|30|1766|SWE
Antonio Sanabria|ST|30|2159|PAR
Yago Noal|AM|19|300|BRA
João Victor|RW|19|300|BRA
Raykkonen|RW|18|300|BRA
João Bezerra|ST|17|300|BRA
Fabricio Prado|ST|17|300|BRA` },
    { id: 'gremio', name: 'Гремио', city: 'Порту-Алегри', stadium: 'Arena do Grêmio', cap: 60540, colors: ['#0d80bf', '#000000'], players: `
Weverton|GK|38|974|BRA
Gabriel Grando|GK|26|1286|BRA
Thiago Beltrame|GK|23|300|BRA
Gabriel Menegon|GK|18|300|BRA
João Victor|GK|20|300|BRA
Fabián Balbuena|CB|35|482|PAR
Wagner Leonardo|CB|27|2154|BRA
Walter Kannemann|CB|35|484|ARG
Cristian Pavón|RB|30|1054|ARG
Marcos Rocha|RB|37|278|BRA
João Pedro|RB|29|1116|BRA
Marlon|LB|29|2424|BRA
Diego Caito|RB|22|300|BRA
Vitor Ribeiro|CB|18|300|BRA
Caio Paulista|LB|28|1521|BRA
Luis Eduardo|CB|18|300|BRA
Vagner|CB|18|300|BRA
Gustavo Martins|CB|24|4544|BRA
Pedro Gabriel|LB|19|300|BRA
Emanuel Mariano|CB|17|300|BRA
Wallace|CB|21|481|BRA
Juan Nardoni|AM|24|11641|ARG
Filip Krovinović|DM|31|1179|CRO
Danilo Barbosa|DM|30|1472|BRA
Dodi|DM|30|383|BRA
Erick Noriega|DM|25|6051|PER
Mathías Villasanti|AM|29|2324|PAR
Tiaguinho|DM|18|300|BRA
Jeferson Forneck|CM|19|300|BRA
João Borne|CM|18|300|BRA
Bernardo Zortea|DM|19|300|BRA
Danillo|CM|18|300|BRA
Harlley|CM|18|300|BRA
Artur Junior|CM|20|300|BRA
Lago Menezes|CM|18|300|BRA
Adrielson|CM|18|300|BRA
Riquelme|CM|20|1985|BRA
Francis Amuzu|LW|27|6004|GHA
Tetê|RW|26|10062|BRA
Martin Braithwaite|ST|35|1025|DEN
Matheus Nascimento|ST|22|1908|BRA
Roger|RW|18|300|BRA
Lucca|ST|18|300|BRA
Benjamin|ST|17|300|BRA
Fellipe Magalhães|ST|19|300|BRA
Arnaldo|ST|19|300|BRA
Jovane Cabral|LW|28|1004|CPV
Carlos Vinícius|ST|31|4045|BRA
José Enamorado|RW|27|3203|COL` },
    { id: 'remo', name: 'Ремо', city: 'Белен', stadium: 'Estádio Evandro Almeida', cap: 17518, colors: ['#002d72', '#ffffff'], players: `
Alexandre|GK|19|300|BRA
João Victor|GK|21|300|BRA
Marcelo Rangel|GK|38|443|BRA
Ygor Vinhas|GK|32|279|BRA
Ivan|GK|29|300|BRA
João Lucas|RB|28|1155|BRA
Kauan|CB|19|300|BRA
Kerlon|CB|20|300|BRA
Matheus Alexandre|RB|27|885|BRA
Matheus Felipe|CB|27|604|BRA
Léo Andrade|CB|28|315|BRA
Marlon|LB|32|239|BRA
Marllon|CB|34|548|BRA
Cristian Tassano|CB|30|274|URU
Duplexe Tchamba|CB|28|513|CMR
Zé Ivaldo|CB|29|1546|BRA
Rafael|CB|20|300|BRA
Marcelinho|RB|28|271|BRA
Mayk|LB|27|856|BRA
Patrick|DM|34|365|BRA
Leonel Picco|DM|28|2496|ARG
Vitor Bueno|AM|32|896|BRA
Franco Catarozzi|DM|26|359|URU
David Braga|AM|24|300|BRA
Zé Welison|DM|31|663|BRA
Edson Fernando|DM|28|302|BRA
Zé Ricardo|AM|27|519|BRA
Tico|CM|20|300|BRA
Miguel|CM|20|300|BRA
Jáderson|RW|26|787|BRA
Gabriel Taliari|ST|29|300|BRA
Antonio Galeano|RW|26|3511|PAR
Yago Pikachu|RW|34|452|BRA
Jája Silva|LW|27|942|BRA
Eduardo Melo|ST|25|404|BRA
Andrés González|ST|20|300|COL
Paulo Henrique|ST|19|300|BRA
Gabriel Poveda|ST|28|414|BRA` },
    { id: 'chapecoense', name: 'Шапекоэнсе', city: 'Шапеку', stadium: 'Arena Condá', cap: 20089, colors: ['#00a650', '#ffffff'], players: `
Rafael Santos|GK|37|327|BRA
Gabriel Werner|GK|23|300|BRA
Matheus|GK|27|300|BRA
Wellington|GK|19|300|BRA
Kainã|GK|21|300|BRA
Anderson|GK|28|518|BRA
Da Silva|CB|26|300|BRA
Eduardo|CB|20|300|BRA
Iago|CB|19|300|BRA
Igor|CB|19|300|BRA
Márcio Kalebe|CB|19|300|BRA
Yago|CB|20|300|BRA
Doma|CB|28|1143|BRA
João Paulo|CB|29|304|BRA
Heitor|RB|25|300|BRA
Mancha|LB|25|388|BRA
Fernando|LB|27|669|BRA
Felipe|CB|18|300|BRA
Rafael Thyere|CB|33|307|BRA
Bruno Tubarão|RB|31|300|BRA
Gustavo Talles|RB|23|440|BRA
Kauan Faria|CB|23|300|BRA
Dudu|RB|29|197|BRA
Victor Caetano|CB|29|562|BRA
Vinicius|CB|21|300|BRA
Bruno Pacheco|LB|34|366|BRA
Bernardo|CM|19|300|BRA
Kauan Godoy|CM|19|300|BRA
Kauê Arno|CM|18|300|BRA
Miguel|CM|20|300|BRA
Robert|CM|23|1205|BRA
Giovanni Augusto|AM|37|542|BRA
Bruno Matias|DM|27|336|BRA
Vinícius Balieiro|CM|27|306|BRA
David|AM|21|705|BRA
Max|CM|25|727|BRA
Everton|RB|31|300|BRA
Camilo|DM|27|1446|BRA
Rosivan|CM|26|300|BRA
Juan|CM|20|300|BRA
Dylan Borrero|RW|24|1059|COL
Miguel Carvalho|AM|21|300|ESP
Yago Felipe|DM|31|641|BRA
Rafael Carvalheira|DM|27|300|BRA
Alberto|ST|20|300|BRA
Gleidson|ST|19|300|BRA
Matheus Milani|ST|20|300|BRA
Talison|ST|19|300|BRA
Marcinho|LW|31|464|BRA
Túlio|ST|21|300|BRA
Yannick Bolasie|ST|37|435|COD
Franco Rossi|ST|24|1121|URU
Maurício Garcez|LW|29|770|BRA
Rodrigo Endrio|ST|19|300|BRA
Luciano|ST|19|300|BRA
Kássio|ST|20|300|BRA
Rubens|RW|23|587|BRA
Kevin Ramírez|ST|32|320|URU` },
  ],
});
