// Лига Португалии 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'por', name: 'Лига Португалии', short: 'Португалия', country: 'POR', tier: 1, weekday: 0,
  autumn: { from: '08-09', rounds: 17 }, spring: { from: '01-03', rounds: 17 },
  ticket: 15, prize: [15000, 14300, 13600, 12900, 12200, 11450, 10750, 10050, 9350, 8650, 7950, 7250, 6550, 5800, 5100, 4400, 3700, 3000],
  teams: [
    { id: 'porto', name: 'Порту', city: 'Порту', stadium: 'Estádio Do Dragão', cap: 50399, colors: ['#004b9b', '#ffffff'], players: `
Cláudio Ramos|GK|34|500|POR|2027
João Costa|GK|30|500|POR|2030
Jakub Kiwior|CB|26|40000|POL|2030
Jan Bednarek|CB|30|11000|POL|2029
Nehuén Pérez|CB|26|10000|ARG|2029
Dominik Prpić|CB|22|4000|CRO|2030
Chris Smalling|CB|36|1000|ENG|2027
Souza|LB|20|12000|BRA|2027
Francisco Moura|LB|27|7000|POR|2029
Zaidu Sanusi|LB|29|3000|NGA|2027
Alberto Costa|RB|23|18000|POR|2030
Martim Fernandes|RB|20|12000|POR|2030
Alan Varela|DM|25|28000|ARG|2030
Pablo Rosario|DM|29|10000|DOM|2029
Victor Froholdt|CM|20|50000|DEN|2030
Seko Fofana|CM|31|8000|CIV|2027
In-beom Hwang|CM|30|7000|KOR|2029
Gabri Veiga|AM|24|35000|ESP|2030
Oskar Pietuszewski|LW|18|25000|POL|2031
Borja Sainz|LW|25|20000|ESP|2030
Pepê|RW|29|17000|BRA|2028
Gabriel Mec|RW|18|16000|BRA|2031
Duarte Cunha|RW|18|1500|POR|2031
Samu Aghehowa|ST|22|40000|ESP|2029
Santiago Gimenez|ST|25|18000|MEX|2027
André Silva|ST|30|5000|POR|2027` },
    { id: 'sporting', name: 'Спортинг', city: 'Лиссабон', stadium: 'Estádio José Alvalade', cap: 52095, colors: ['#008057', '#ffffff'], players: `
Rui Silva|GK|32|5000|POR|2028
Kaique Pereira|GK|23|4000|BRA|2031
Diego Callai|GK|22|1500|BRA|2030
Ibrahima Ba|CB|21|20000|SEN|2031
Eduardo Quaresma|CB|24|17000|POR|2031
Maxi Araújo|LB|26|40000|URU|2030
Moncef Zekri|LB|18|4000|MAR|2031
Rodrigo Dias|LB|21|1500|POR|2028
Iván Fresneda|RB|22|20000|ESP|2028
Georgios Vagiannidis|RB|25|6000|GRE|2030
Salvador Blopa|RB|19|2500|POR|2030
Sergi Altimira|DM|25|25000|ESP|2031
Silas Andersen|DM|22|7000|DEN|2031
Issa Doumbia|CM|23|20000|ITA|2031
João Simões|CM|19|15000|POR|2030
Pedro Lima|CM|23|3000|BRA|2031
Rodrigo Zalazar|AM|27|30000|URU|2031
Nestory Irankunda|LW|20|15000|AUS|2031
Flávio Gonçalves|LW|19|15000|POR|2030
Jesse Derry|LW|19|2000|ENG|2027
Geny Catamo|RW|25|35000|MOZ|2029
Luís Guilherme|RW|20|12000|BRA|2030
Luis Suárez|ST|28|30000|COL|2030
Fotis Ioannidis|ST|26|16000|GRE|2030
Rafael Nel|ST|21|4000|POR|2029` },
    { id: 'benfica', name: 'Бенфика', city: 'Лиссабон', stadium: 'Estádio da Luz', cap: 68100, colors: ['#e30613', '#ffffff'], players: `
Анатолий Трубин|GK|25|20000|UKR|2028
Samuel Soares|GK|24|10000|POR|2028
Tomás Araújo|CB|24|35000|POR|2031
Alessandro Circati|CB|23|18000|AUS|2031
Clément Lenglet|CB|31|4000|FRA|2027
Gabriel Índio|CB|18|4000|BRA|2031
Souffian El Karouani|LB|26|15000|MAR|2027
Samuel Dahl|LB|23|13000|SWE|2029
José Neto|LB|18|3000|POR|2031
Alexander Bah|RB|28|10000|DEN|2029
Daniel Banjaqui|RB|18|10000|POR|2031
João Palhinha|DM|31|15000|POR|2030
Enzo Barrenechea|DM|25|14000|ARG|2030
Manu Silva|DM|25|6000|POR|2030
Leandro Barreiro|CM|26|20000|LUX|2029
Георгий Судаков|AM|24|25000|UKR|2029
Claudio Echeverri|AM|20|15000|ARG|2027
Andreas Schjelderup|LW|22|40000|NOR|2028
Gianluca Prestianni|RW|20|40000|ARG|2029
Dodi Lukébakio|RW|29|15000|BEL|2030
Rafa Silva|RW|33|3000|POR|2028
Vangelis Pavlidis|ST|27|35000|GRE|2029
Jhon Durán|ST|22|15000|COL|2027
Anísio Cabral|ST|18|5000|POR|2031` },
    { id: 'braga', name: 'Брага', city: 'Брага', stadium: 'Estádio Municipal de Braga', cap: 30286, colors: ['#e30613', '#ffffff'], players: `
Bernardo|GK|24|5000|BRA|2030
João Carvalho|GK|22|1500|POR|2028
Tiago Sá|GK|31|300|POR|2027
Gustaf Lagerbielke|CB|26|10000|SWE|2030
Vítor Carvalho|CB|29|4000|BRA|2028
Adrian Barisic|CB|25|4000|BIH|2030
Adrian Bajrami|CB|24|3000|SUI|2031
Sergio Barcia|CB|25|1500|ESP|2030
Víctor Gómez|RB|26|10000|ESP|2030
Diogo Travassos|RB|22|6000|POR|2031
Tommy Marqués|DM|19|10000|ESP|2031
Demir Ege Tıknaz|DM|22|10000|TUR|2031
Gorby|CM|24|9000|FRA|2028
Diego Rodrigues|CM|21|5000|POR|2030
Denis Huseinbasic|CM|25|2000|BIH|2031
João Moutinho|CM|40|300|POR|2027
Mario Dorgeles|RW|22|10000|CIV|2030
Gabriel Silva|LW|24|7000|BRA|2031
Gabri Martínez|LW|23|7000|ESP|2029
João Trovisco|AM|19|500|POR|2029
Pau Víctor|ST|24|15000|ESP|2030
Jovan Milosevic|ST|21|7000|SRB|2031
Fran Navarro|ST|28|4000|ESP|2029
Jonas Wind|ST|27|4000|DEN|2029` },
    { id: 'famalicao', name: 'Фамаликан', city: 'Вила-Нова-ди-Фамаликан', stadium: 'Estádio Municipal 22 de Junho', cap: 8000, colors: ['#1d3c8f', '#ffffff'], players: `
Lazar Carević|GK|27|5000|MNE|2028
Gabriel Cabral|GK|23|500|BRA|2029
Léo Realpe|CB|25|5000|ECU|2029
Finn van Breemen|CB|23|2000|NED|2030
Víctor Rofino|CB|24|1500|GNB|2031
Vojin Serafimovic|CB|21|400|SRB|2031
Matheus Mattara|CB|20|500|BRA|2031
Pedro Bondo|LB|21|2000|ANG|2029
Leny Meyer|LB|22|600|SUI|2030
Rodrigo Pinheiro|RB|24|5000|POR|2028
Garcia|RB|24|1500|BRA|2029
Tom van de Looi|DM|27|4000|NED|2027
Mathias de Amorim|CM|21|12000|POR|2028
Tamás Szűcs|CM|21|2500|HUN|2031
Marcos Peña|CM|21|1500|ESP|2029
Paulo Moreira|CM|26|1500|POR|2029
Mathis Jangéal|AM|18|1000|FRA|2031
Sorriso|LW|25|6000|BRA|2029
Óscar Aranda|LW|24|3000|ESP|2028
Roméo Beney|LW|21|1500|SUI|2030
Gil Dias|RW|30|2000|POR|2027
Pedro Santos|RW|23|600|POR|2028
Georgios Koutsias|ST|22|5000|GRE|2031
Pato|ST|22|4000|MEX|2027
Umar Abubakar|ST|20|1000|NGA|2030` },
    { id: 'gil_vicente', name: 'Жил Висенте', city: 'Барселуш', stadium: 'Estádio Cidade de Barcelos', cap: 12046, colors: ['#e30613', '#1d3c8f'], players: `
Lucão|GK|25|1500|BRA|2028
Samuel Portugal|GK|32|500|BRA|2028
André Picornell|GK|22|500|SWE|2029
Tiago Ferreira|GK|17|500|POR|2028
Marvin Elimbi|CB|23|4000|FRA|2029
David Moreira|CB|22|1700|CPV|2029
Antonio Espigares|CB|22|500|ESP|2029
Weverson|LB|26|800|BRA|2028
José Silva|RB|21|500|POR|2029
Ricardo Esgaio|RB|33|500|POR|2028
Diogo Prioste|CM|22|2000|POR|2027
Zé Carlos|CM|24|800|POR|2028
Andreas Lausen|CM|24|700|DEN|2030
Gonçalo Maia|CM|20|100|POR|2028
Santi García|AM|25|4000|ESP|2028
Gil Martins|AM|20|1500|POR|2028
Martín Fernández|AM|23|450|URU|2029
Guilherme Gomes|AM|20|300|BRA|2030
Joelson Fernandes|LW|23|1000|POR|2029
Tidjany Touré|LW|24|500|FRA|2029
Agustín Moreira|RW|25|800|URU|2029
Murilo|RW|31|800|BRA|2028
Sergio Bermejo|RW|29|500|ESP|2027
Héctor Hernández|ST|31|800|ESP|2027
Walace França|ST|21|500|BRA|2027
Mohamed Kaba|ST|24|100|MLI|2028` },
    { id: 'moreirense', name: 'Морейренсе', city: 'Морейра-де-Конегуш', stadium: 'Parque Joaquim de Almeida Freitas', cap: 13000, colors: ['#00a650', '#ffffff'], players: `
André Ferreira|GK|30|600|POR|2028
Aranha|GK|21|500|BRA|2027
Gilberto Batista|CB|22|2000|GNB|2029
Kevyn|CB|21|500|BRA|2030
Maracás|CB|32|500|BRA|2029
Janderson|CB|21|500|BRA|2031
Kiko|LB|24|2500|POR|2029
Álvaro Martínez|LB|24|400|ESP|2028
Leandro Santos|RB|21|1000|POR|2030
Mateja Stjepanović|DM|22|3000|SRB|2029
Guilherme Liberato|DM|25|800|BRA|2028
Afonso Assis|DM|20|500|POR|2030
Miguel Silva|DM|18|100|POR|2030
Rodri Alonso|CM|23|2000|ESP|2028
João Veloso|CM|21|1500|POR|2027
Nile John|CM|23|700|ENG|2029
Manuel Mendonça|AM|21|2000|POR|2030
Chipyoka Songa|AM|22|800|ZAM|2031
Tiago Andrade|LW|21|1500|POR|2030
Landerson|LW|19|1000|BRA|2030
Kiko Bondoso|LW|30|800|POR|2027
Afonso Vieira|LW|19|100|POR|2027
Michael Dacosta|RW|21|150|ESP|2029
Leonardo Vonić|ST|23|900|CRO|2027
Alexandre Parsemain|ST|23|700|MTQ|2030
Yan Maranhão|ST|24|600|BRA|2029` },
    { id: 'arouca', name: 'Арока', city: 'Арока', stadium: 'Estádio Municipal de Arouca', cap: 7000, colors: ['#ffd700', '#1d3c8f'], players: `
Ignacio de Arruabarrena|GK|29|1500|URU|2028
Jakub Vinarčík|GK|21|300|SVK|2028
Martim Duarte|GK|23|500|POR|2028
José Fontán|CB|26|2500|ESP|2027
Boris Popović|CB|26|1000|SRB|2028
Javi Sánchez|CB|29|1000|ESP|2027
Diogo Monteiro|CB|21|300|POR|2028
Орест Лебеденко|LB|28|500|UKR|2028
Mario Climent|LB|24|500|ESP|2028
Leo Shahar|RB|19|500|ENG|2027
Taichi Fukui|CM|22|6000|JPN|2028
Espen van Ee|CM|23|1500|NED|2029
Mateo Flores|CM|22|1200|ESP|2029
Pedro Santos|CM|26|600|POR|2028
Pablo Gozálbez|AM|25|700|ESP|2029
Naïs Djouahra|LW|26|2000|FRA|2027
Brian Mansilla|LW|24|800|URU|2028
Gabriel Rukavina|LW|22|500|CRO|2029
Si-hoo Park|LW|19|400|KOR|2031
Miguel Puche|LW|25|300|ESP|2028
Alfonso Trezza|RW|27|1500|URU|2027
Costinha|RW|18|500|POR|2027
Iván Barbero|ST|28|2500|ESP|2028
Fally Mayulu|ST|24|1200|FRA|2029
Dylan Nandín|ST|24|1000|URU|2028` },
    { id: 'vitoria', name: 'Витория Гимарайнш', city: 'Гимарайнш', stadium: 'Estádio D. Afonso Henriques', cap: 30000, colors: ['#ffffff', '#000000'], players: `
Oliwier Zych|GK|22|2000|POL|2027
Juan Castillo|GK|23|500|COL|2029
Lucas Furtado|GK|21|100|BRA|2028
Toni Borevković|CB|29|3000|CRO|2027
Thiago Balieiro|CB|23|2000|BRA|2029
Óscar Rivas|CB|26|1000|ESP|2028
Ahmed Sidibé|CB|24|600|FRA|2027
Yeimar Mosquera|CB|21|400|COL|2030
João Mendes|LB|26|2500|POR|2028
Francisco Dias|LB|24|200|POR|2029
Tony Strata|RB|22|4000|ROU|2029
Maga|RB|23|1500|POR|2027
Lohann Doucet|DM|24|1000|BFA|2028
Rica Rocha|DM|23|200|POR|2028
Gonçalo Nogueira|CM|22|5000|POR|2028
Beni Mukendi|CM|24|4000|ANG|2029
Matija Mitrović|CM|21|2000|SRB|2029
Marco Cruz|CM|22|400|POR|2028
Santi Verdi|CM|18|300|POR|2031
Alan|AM|26|5000|BRA|2028
Oumar Camara|LW|19|8000|FRA|2029
Fabio Blanco|LW|22|800|ESP|2029
Victor Andersson|LW|22|800|SWE|2030
Gustavo Silva|RW|27|4000|BRA|2028
Telmo Arcanjo|RW|25|3000|CPV|2027
Miguel Nogueira|RW|21|2500|POR|2029
Arnel Jakupovic|ST|28|800|AUT|2029
Patrick Ouotro|ST|21|300|CIV|2030` },
    { id: 'estoril', name: 'Эшторил', city: 'Эшторил', stadium: 'Estádio António Coimbra da Mota', cap: 5100, colors: ['#ffd700', '#1d3c8f'], players: `
Martin Turk|GK|23|300|SVN|2028
Joel Robles|GK|36|200|ESP|2028
Diogo Dias|GK|23|200|POR|2027
Stelios Andreou|CB|24|2000|CYP|2027
Ferro|CB|29|1000|POR|2027
Ismael Sierra|CB|23|1000|ESP|2027
Xavi Sintes|CB|25|400|ESP|2027
Jordan Arnolin|CB|18|300|POR|2029
Sam Amissah|CB|19|500|ENG|2027
Roko Jurisic|LB|25|650|CRO|2029
Fernando Medrano|LB|26|500|ESP|2028
Tiago Parente|LB|22|500|POR|2029
Ricard Sánchez|RB|26|3000|ESP|2027
Pedro Carvalho|RB|23|800|POR|2028
Jordan Holsgrove|DM|27|5000|SCO|2028
Antef Tsoungui|DM|23|1000|BEL|2029
Tiago Brito|DM|22|300|POR|2029
Milan Robin|CM|26|1000|FRA|2029
Xeka|CM|31|600|POR|2028
Luís Gomes|AM|22|500|POR|2028
Nail Omerovic|LW|24|2000|BIH|2029
André Lacximicant|LW|25|800|POR|2028
Rafik Guitane|RW|27|4000|ALG|2027
Axel Camblan|RW|23|600|FRA|2029
Fabrício Garcia|RW|25|400|CPV|2028
Peixinho|RW|22|200|POR|2028
Yanis Begraoui|ST|25|12000|MAR|2028` },
    { id: 'alverca', name: 'Алверка', city: 'Алверка-ду-Рибатежу', stadium: 'Complexo Desportivo FC Alverca', cap: 7705, colors: ['#e30613', '#ffffff'], players: `
Noah Raveyre|GK|21|1500|FRA|2030
Matheus Mendes|GK|27|600|BRA|2028
Jhonatan|GK|35|100|BRA|2027
Bastien Meupiyou|CB|20|7000|FRA|2028
Yaya Bojang|CB|22|1500|GAM|2030
Steven Baseya|CB|21|700|FRA|2028
Mofe Jemide|CB|19|500|ENG|2030
Chissumba|LB|21|5000|POR|2027
Isaac James|LB|22|1000|NGA|2027
Diogo Spencer|RB|22|2000|POR|2028
Toni Tamarit|RB|20|500|ESP|2030
Vasco Moreira|DM|25|1000|POR|2028
Ian Luccas|DM|23|1000|BRA|2030
Rayan Lucas|DM|21|900|BRA|2030
Davy Gui|CM|20|800|CIV|2030
Zé Rafael|CM|33|800|BRA|2027
Zakaria Kessary|CM|20|150|MAR|2027
Tiago Octávio|CM|22|500|POR
Nabil Touaizi|RW|25|800|MAR|2028
Ikker Julian|LW|21|500|BEL|2028
Lucca Giuntini|AM|20|500|ITA|2029
Chiquinho|LW|26|5000|POR|2028
Figueiredo|LW|25|5000|BRA|2028
André Vidigal|LW|28|800|ANG|2029
Cédric Nuozzi|LW|20|800|BEL|2028
Rodrigo Catraio|RW|21|500|POR|2028
Matheus França|ST|22|6000|BRA|2027
Vivaldo Semedo|ST|21|2000|POR|2027
Dawda Camara|ST|23|2000|MTN|2030
Samy Merheg|ST|19|1000|LBN|2029` },
    { id: 'rio_ave', name: 'Риу Ави', city: 'Вила-ду-Конди', stadium: 'Estádio do Rio Ave Futebol Clube', cap: 5300, colors: ['#00a650', '#ffffff'], players: `
Vítor Hugo|GK|25|800|BRA|2030
Ennio van der Gouw|GK|26|600|NED|2029
Kevin Chamorro|GK|26|300|CRC|2029
Antzelo Sina|GK|22|150|ALB|2027
Andreas Ntoi|CB|23|5000|GRE|2028
Simón García|CB|21|2000|COL|2031
Nelson Abbey|CB|23|1500|ENG|2028
Francisco Petrasso|CB|24|1500|ARG|2028
Gustavo Mancha|CB|22|1500|BRA|2027
Julien Lomboto|CB|24|300|FRA|2029
Jakub Brabec|CB|34|200|CZE|2027
Caike|CB|21|100|BRA|2027
Pedro Amaral|LB|29|1500|POR|2028
Zé Carlos|RB|28|1500|POR|2028
João Tomé|RB|23|600|POR|2027
Tamás Nikitscher|DM|26|800|HUN|2029
Georgios Liavas|DM|25|700|GRE|2029
Diogo Nascimento|CM|23|3000|POR|2027
Ryan Guilherme|CM|23|900|BRA|2030
Antoine Wenck|CM|20|100|SEN|2027
Malik Sellouki|AM|26|900|FRA|2029
Miguel Patricío|AM|19|300|POR|2027
Tobías Medina|LW|22|500|ARG|2028
Diogo Bezerra|RW|24|2000|BRA|2030
Dario Špikić|RW|27|1000|CRO|2028
Sebastian Clemmensen|RW|23|1000|DEN|2030
Roland Galcik|RW|25|500|SVK|2030
Jalen Blesa|ST|25|2200|ESP|2030
Radek Siler|ST|22|1200|CZE|2031
Tamble|ST|25|1000|GNB|2030
Samuel Alves|ST|18|400|BRA|2030` },
    { id: 'santa_clara', name: 'Санта-Клара', city: 'Понта-Делгада', stadium: 'Estádio de São Miguel', cap: 13277, colors: ['#e30613', '#ffffff'], players: `
Lucas França|GK|30|800|BRA|2028
Neneca|GK|23|300|BRA|2030
Emanuel Moreira|CB|23|800|POR|2029
Henrique Silva|CB|21|500|BRA|2027
Pedro Pacheco|CB|29|500|POR|2028
Ythallo|CB|22|300|BRA|2029
Guilherme Romão|LB|29|600|BRA|2027
Lucas Soares|RB|28|1500|BRA|2029
Pedro Ferreira|DM|28|3000|POR|2028
Dani Borges|DM|23|700|BRA|2030
Djé|CM|23|1000|CPV|2030
Tiago Ribeiro|CM|24|600|POR|2029
Vitinho|CM|22|500|BRA|2029
Kamika|LW|22|500|POR|2028
Vasconcelos|AM|21|1000|POR|2029
Fredy|AM|20|100|POR|2029
Sorriso|LW|20|800|BRA|2029
Afonso Duarte|LW|21|100|POR|2028
Vinícius Lopes|RW|27|2500|BRA|2028
Brenner|RW|24|1500|BRA|2028
Welinton Torrão|RW|27|400|BRA|2028
Fernando|ST|21|400|BRA|2029
Léo Jacó|ST|21|400|BRA|2030` },
    { id: 'nacional', name: 'Насьонал', city: 'Фуншал', stadium: 'Estádio da Madeira', cap: 5200, colors: ['#000000', '#ffffff'], players: `
Renato Marin|GK|20|1500|ITA|2027
João Gonçalves|GK|25|500|POR|2028
Kevyn|GK|21|200|BRA|2030
Zé Vítor|CB|25|2500|BRA|2027
Ivanildo Fernandes|CB|30|200|CPV|2027
Chico Gonçalves|CB|22|200|POR|2029
José Gomes|LB|30|600|POR|2027
Matias Silva|LB|17|500|POR|2027
Wesley Gasolina|RB|26|700|BRA|2028
Daniel de la Cruz|RB|22|500|ECU|2027
Liziero|CM|28|1500|BRA|2028
Chiheb Labidi|CM|25|500|TUN|2027
Joel Silva|CM|23|400|POR|2029
Danel Dongmo|CM|25|350|CMR|2029
Deivison|CM|20|200|BRA|2030
Josué Souza|CM|21|100|BRA|2030
William Kokolo|LW|26|500|FRA|2027
Daniel Jr|AM|24|700|BRA|2030
Matchoi Djaló|AM|23|500|POR|2028
Filipe Soares|AM|27|500|POR|2027
Miguel Baeza|AM|26|400|ESP|2027
Mateus Iseppe|AM|20|400|BRA|2027
Min-kyu Song|LW|27|1000|KOR|2028
Fernando Nava|LW|22|500|BOL|2030
Markus Jensen|LW|21|400|DEN|2030
Stavros Gavriel|RW|24|600|CYP|2029
Pablo Ruan|RW|23|500|BRA|2030
Allen Obando|ST|20|900|ECU|2027
Njoya Abdel|ST|23|900|CMR|2031` },
    { id: 'estrela', name: 'Эштрела Амадора', city: 'Амадора', stadium: 'Estádio José Gomes', cap: 9000, colors: ['#e30613', '#00a650'], players: `
Léo Linck|GK|25|2500|BRA|2027
Diogo Pinto|GK|22|300|POR|2028
David Grilo|GK|30|100|POR|2028
Luan Patrick|CB|24|2000|BRA|2028
Bernardo Schappo|CB|27|600|BRA|2028
Atanas Chernev|CB|24|600|BUL|2028
Rafa Soares|LB|31|1000|POR|2028
Lucas Mincarelli|LB|22|800|FRA|2029
Max Scholze|RB|21|3000|GER|2028
Jefferson Encada|RB|28|400|GNB|2028
Eddy Doué|DM|20|5000|CIV|2028
Santiago Serra|DM|19|3000|POR|2027
Kevin Höög Jansson|DM|26|400|SWE|2028
Vuk Pavicevic|DM|18|500|MNE|2029
Joan Jordán|CM|32|800|ESP|2028
Robinho|CM|24|600|BRA|2028
Tom Moustier|CM|24|400|FRA|2028
Lovro Zvonarek|AM|21|1800|CRO|2029
Emerson Vanga|AM|20|100|FRA|2027
Ianis Stoica|LW|23|4000|ROU|2028
Bénito|LW|23|300|FRA|2029
Rodrigo Dudok|LW|19|100|URU|2027
Alisson Souza|LW|21|100|BRA|2028
Abraham Marcus|RW|26|3000|NGA|2028
Leandro Antonetti|ST|23|4000|PUR|2028
René Mitongo|ST|18|1000|BEL|2027
Henrique Poniewas|ST|20|500|BRA|2027` },
    { id: 'casa_pia', name: 'Каза Пия', city: 'Лиссабон', stadium: 'Estádio Pina Manique', cap: 3000, colors: ['#000000', '#ffffff'], players: `
Patrick Sequeira|GK|27|3000|CRC|2027
Ivan Mandić|GK|23|300|CRO|2029
Daniel Azevedo|GK|28|200|POR|2027
João Goulart|CB|26|1500|POR|2027
David Sousa|CB|25|1500|BRA|2028
Kaique Rocha|CB|25|1000|BRA|2028
Felipe Silva|CB|24|1000|BRA|2027
Kaly|CB|22|400|ANG|2027
Abdu Conté|LB|28|700|POR|2028
Pedro Rosas|LB|25|500|POR|2029
Selvi Clua|DM|21|500|ESP|2027
Seba Pérez|DM|33|300|COL|2027
JP|CM|21|2000|BRA|2030
Lawrence Ofori|CM|28|1500|GHA|2027
Gabi|CM|26|550|POR|2029
Abdu Dafé|CM|18|200|POR|2028
Kevin Prieto|RW|23|500|URU|2029
João Rego|AM|21|3000|POR|2027
Benjamin Pauwels|LW|21|800|BEL|2027
Rochinha|LW|31|500|POR|2027
Aymen Zouin|LW|19|250|MAR|2027
Jérémy Livolant|RW|28|2500|FRA|2027
Mohamed Salah|RW|22|900|BEL|2030
Henrique Araújo|ST|24|1000|POR|2029
Alassana Jatta|ST|27|600|GAM|2030
Evans Maurin|ST|25|300|FRA|2029
Cassiano|ST|37|100|BRA|2028` },
    { id: 'maritimo', name: 'Маритиму', city: 'Фуншал', stadium: 'Estádio do Marítimo', cap: 10932, colors: ['#e30613', '#00a650'], players: `
Fran Vieites|GK|27|1200|ESP|2028
Gonçalo Tabuaço|GK|25|250|POR|2027
Alfonso Pastor|GK|26|125|ESP|2027
Gábor Szalai|CB|26|1000|HUN|2027
Rafael Fernandes|CB|24|500|POR|2027
Nilton|LB|25|800|POR|2028
Paulo Henrique|LB|30|700|POR|2027
Nathanael Ogbeta|LB|25|400|ENG|2028
Tomás Tavares|RB|25|300|POR|2029
Igor Julião|RB|32|100|BRA|2027
Vladan Danilović|DM|27|800|BIH|2027
Rodri Andrade|DM|24|500|POR|2027
Francisco Silva|DM|19|500|POR|2027
Yellu Santiago|CM|22|700|ESP|2027
Ibrahim Alani|CM|20|500|NGA|2029
Raphael Guzzo|CM|31|300|POR|2027
Israel Isaac Ayuma|CM|21|300|NGA|2027
Nélio Batista|CM|17|500|POR|2028
Maxime Dominguez|AM|30|400|SUI|2027
Martín Tejón|LW|22|2500|ESP|2027
Simo Bouzaidi|LW|26|1200|MAR|2028
Enrique Peña Zauner|LW|26|250|VEN|2027
Bryan Limbombe|RW|25|400|BEL|2028
Samuel Bamba|RW|22|350|GER|2029
Xiko Gomes|RW|22|200|POR|2027
Adrián Butzke|ST|27|800|ESP|2027
Maurice Boakye|ST|22|400|GER|2029
José Melro|ST|22|350|POR|2027
Mons Bassouamina|ST|28|300|CGO|2027` },
    { id: 'viseu', name: 'Академику Визеу', city: 'Визеу', stadium: 'Estádio Municipal do Fontelo', cap: 14368, colors: ['#000000', '#ffffff'], players: `
Juan Soriano|GK|29|600|ESP|2028
Ewerton|GK|28|500|BRA|2027
Marcos Lavín|GK|30|200|ESP|2027
Matheus Sampaio|GK|22|100|BRA|2027
Anthony Correia|CB|27|1500|FRA|2027
Hugo Gambor|CB|23|1200|CTA|2027
Nikolaos Michelis|CB|25|1200|GRE|2028
Rúben Pereira|CB|28|300|POR|2027
Pedro Barcelos|CB|30|200|BRA|2027
Gu Costa|LB|21|1400|POR|2029
Miguel Ángel Brau|LB|24|1000|ESP|2027
Igor Milioransa|LB|30|200|BRA|2027
Robinho|RB|29|700|POR|2027
Tomás Domingos|RB|27|200|POR|2027
Andro Babic|DM|22|400|CRO|2030
André Ceitil|DM|31|150|POR|2027
Soufiane Messeguem|CM|25|1500|GER|2028
Cristian Ferreira|CM|27|200|ARG|2027
Cihan Kahraman|AM|28|1000|TUR|2027
Alejandro Mestanza|AM|21|250|ESP|2029
Álvaro Zamora|LW|24|1600|CRC|2027
Lorougnon Gohi|LW|22|350|CIV|2030
João Guilherme|RW|25|700|BRA|2029
Valery Fernández|RW|26|400|ESP|2027
Nils Mortimer|RW|25|250|ESP|2028
André Clóvis|ST|28|3500|BRA|2028
Mohamed Bouldini|ST|30|300|MAR|2027
Paulinho|ST|27|300|POR|2027` },
  ],
});
