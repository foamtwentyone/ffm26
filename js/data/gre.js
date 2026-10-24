// Греческая Суперлига 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'gre', name: 'Греческая Суперлига', short: 'Греция', country: 'GRE', tier: 1, weekday: 0,
  autumn: { from: '08-22', rounds: 13 }, spring: { from: '01-10', rounds: 13 },
  ticket: 10, prize: [5000, 4700, 4400, 4100, 3750, 3450, 3150, 2850, 2550, 2250, 1900, 1600, 1300, 1000],
  teams: [
    { id: 'panathinaikos', name: 'Панатинаикос', city: 'Афины', stadium: 'Olympiako Stadio Spyros Louis', cap: 69618, colors: ['#00a650', '#ffffff'], players: `
Iñaki Peña|GK|27|2154|ESP
Lucas Abraham Chávez|GK|31|300|ARG
Kostas Kotsaris|GK|30|160|GRE
Christos Geitonas|GK|17|300|GRE
Davide Calabria|RB|29|2516|ITA
Georgios Katris|CB|21|1023|GRE
Anass Salah-Eddine|LB|24|12540|MAR
Stefan de Vrij|CB|34|1777|NED
Erik Palmer-Brown|CB|29|658|USA
Sverrir Ingi Ingason|CB|33|1045|ISL
Triantafyllos Tsapras|RB|25|1224|GRE
Victor Kristiansen|LB|23|10468|DEN
Rick van Drongelen|CB|27|5381|NED
Vasileios Lavdas|CB|17|300|GRE
Giorgos Kyriakopoulos|LB|30|1319|GRE
Moussa Sissoko|DM|37|160|FRA
Pedro Chirivella|DM|29|1862|ESP
Adriano Jagušić|CM|21|6410|CRO
Sotiris Kontouris|DM|21|1510|GRE
Vicente Taborda|RW|25|560|ARG
Azzedine Ounahi|AM|26|16215|MAR
Étienne Camara|DM|23|3898|FRA
Imrân Louza|CM|27|11189|MAR
Kings Kangwa|CM|27|2269|ZAM
Panagiotis Biniaris|RW|17|300|GRE
Andrews Tetteh|ST|25|300|GRE
Cyriel Dessers|ST|31|1708|NGA
Santino Andino Valencia|LW|20|8119|ARG
Pavlos Pantelidis|RW|24|931|GRE
Facundo Pellistri|RW|24|4429|URU
Giannis Bokos|LW|19|323|GRE
Iason Nempis|ST|17|300|GRE
Elmin Rastoder|ST|25|3778|MKD
Levi García|ST|28|6037|TRI` },
    { id: 'olympiacos', name: 'Олимпиакос', city: 'Пирей', stadium: 'Stadio Georgios Karaiskákis', cap: 33505, colors: ['#e30613', '#ffffff'], players: `
Stefan Ortega|GK|33|1765|GER
Balša Popović|GK|26|804|MNE
Dimitrios Stournaras|GK|25|230|GRE
Zinedin Smajlović|CB|22|2282|BIH
Lorenzo Pirola|CB|24|10802|ITA
David Carmo|CB|27|4801|ANG
Panagiotis Retsos|CB|28|5714|GRE
Bruno Onyemaechi|LB|27|1485|NGA
Наир Тикнизян|LB|27|6212|ARM
Athanasios Koutsogoulas|RB|22|257|GRE
Manolis Saliakas|RB|30|1126|GRE
Gustavo Sá|AM|21|18905|POR
Gustavo Puerta|DM|23|10287|COL
Lorenzo Scipioni|DM|21|4270|ARG
Remo Freuler|DM|34|1843|SUI
Theofanis Bakoulas|CM|21|995|GRE
Chiquinho|AM|31|2351|POR
Marcus Holmgren Pedersen|RB|26|2786|NOR
Santiago Hezze|DM|25|13292|ARG
Christos Filis|CM|19|374|GRE
Konstantinos Fortounis|ST|34|1031|GRE
Ayoub El Kaabi|ST|33|2341|MAR
Gelson Martins|RW|31|1576|POR
Роман Яремчук|ST|30|1718|UKR
Leon Bailey|RW|29|13061|JAM
Jota Silva|RW|27|10070|POR
Armando González|ST|23|6645|MEX
Joel Roca|LW|21|8933|ESP
Clayton|ST|27|5485|BRA
Yusuf Yazıcı|RW|29|1621|TUR
Marius Mouandilmadji|ST|28|6006|CHA` },
    { id: 'paok', name: 'ПАОК', city: 'Салоники', stadium: 'Stadio Toumbas', cap: 28803, colors: ['#000000', '#ffffff'], players: `
Jirí Pavlenka|GK|34|263|CZE
Dimitrios Monastirlis|GK|22|343|GRE
Konstantinos Balomenos|GK|24|159|GRE
Vasilios Nikolakoulis|GK|21|225|GRE
Antonis Tsiftsis|GK|27|725|GRE
Jonjoe Kenny|RB|29|1445|ENG
Pantelis Hatzidiakos|CB|29|1764|GRE
Giannis Michailidis|CB|26|1965|GRE
Aritz Elustondo|CB|32|999|ESP
Diego Costa|CB|27|13595|BRA
Abdul Rahman Baba|LB|32|1001|GHA
Greg Taylor|LB|28|2190|SCO
Giorgos Kosidis|CB|19|300|GRE
Dimitrios Bataoulas|CB|19|300|GRE
Mohamed Mady Camara|DM|29|1847|GUI
Baptiste Santamaría|DM|31|1274|FRA
Soualiho Meité|DM|32|668|FRA
Dimitrios Pelkas|AM|32|465|GRE
Dimitrios Giannoulis|LB|31|2111|GRE
Ognjen Ugrešić|AM|20|4330|SRB
Kristijan Jakić|DM|29|4779|CRO
Christos Zafeiris|DM|23|12181|GRE
Taha Abdi Ali|RW|28|986|SWE
Tom Louchet|CM|23|7500|FRA
Dimitrios Tsopouroglou|CM|24|161|GRE
Фёдор Чалов|ST|28|2521|RUS
Taison|LW|38|171|BRA
Andrija Živković|RW|30|3358|SRB
Simon Banza|ST|30|9779|COD
Cherif Ndiaye|ST|30|2181|SEN
Dimitrios Berdos|LW|18|300|GRE
Shola Shoretire|LW|22|1782|ENG
Dimitrios Chatsidis|RW|20|1048|GRE
Anestis Mythou|ST|19|1873|GRE
Kiril Despodov|RW|29|1880|BUL` },
    { id: 'aek', name: 'АЕК', city: 'Афины', stadium: 'ALLWYN Arena', cap: 31100, colors: ['#ffd700', '#000000'], players: `
Thomas Strakosha|GK|31|1874|ALB
Georgios Sarakasidis|GK|15|300|GRE
Marios Balamotis|GK|21|300|GRE
Alberto Brignoli|GK|35|181|ITA
Harold Moukoudi|CB|28|4614|CMR
Stavros Pilios|LB|25|1765|ALB
Christos Alexiou|CB|21|1169|GRE
Lazaros Rota|RB|29|2316|GRE
Martin Georgiev|RB|21|300|BUL
Domagoj Vida|CB|37|86|CRO
Charalambos Lykogiannis|LB|33|572|GRE
Filipe Relvas|CB|27|2431|POR
Spyros Christakopoulos|CB|20|300|GRE
Kaan Kairinen|CM|27|5146|FIN
Dereck Kutesa|LW|28|2024|SUI
Mijat Gaćinović|LW|31|982|SRB
Aboubakary Koïta|LW|28|4055|MTN
Lovro Majer|AM|28|13283|CRO
Kervin Arriaga|DM|28|1444|HON
Răzvan Marin|CM|30|2213|ROU
Petros Mantalos|AM|35|285|GRE
Milán Vitális|DM|24|1548|HUN
Hakim Sahabo|DM|21|1610|RWA
Frantzdy Pierrot|ST|31|776|HAI
Luka Jović|ST|28|5676|SRB
Олександр Зубков|RW|30|4162|UKR
Dimitrios Kaloskamis|RW|21|1632|GRE
Barnabás Varga|ST|31|2184|HUN
Joao Mário|LW|33|919|POR
Zois Karagyris|ST|19|300|GRE
Zine|ST|24|1894|ANG` },
    { id: 'aris', name: 'Арис', city: 'Салоники', stadium: 'Stadio Harilaou Kleánthis Vikelídis', cap: 22800, colors: ['#ffd700', '#000000'], players: `
Sokratis Dioudis|GK|33|66|GRE
Lovro Majkić|GK|27|295|CRO
Apostolos Barbopoulos|GK|25|80|GRE
Ricardo Velho|GK|28|1849|POR
Jeremy Petris|RB|28|1099|FRA
Omar Richards|LB|28|1254|ENG
Fabiano Leismann|CB|34|106|BRA
Noah Fadiga|LB|26|1335|SEN
Christos Kamtsis|CB|19|300|GRE
Konstantinos Charoupas|LB|19|300|GRE
Boško Šutalo|CB|26|1353|CRO
Matar Thiam|CB|18|300|SEN
Manu García|AM|28|2099|ESP
Konstantinos Galanopoulos|DM|28|355|GRE
Benjamín Garré|RW|26|2289|ARG
Uroš Račić|DM|28|1796|SRB
Diallo Sanoussi|CM|20|300|CIV
Martin Hongla|DM|28|719|CMR
Tom Dele-Bashiru|DM|27|1264|NGA
Michalis Voriazidis|DM|22|227|GRE
Mamadou Gning|AM|19|277|SEN
Sarafianos Papasarafianos|CM|17|300|GRE
Bruma|LW|32|1861|POR
Fredrik Jensen|AM|29|1252|FIN
Christian Kouamé|ST|28|944|CIV
Tino Kadewere|ST|30|1037|ZIM
Rafa Mir|ST|29|2261|ESP
Migouel Alfarela|LW|28|353|FRA
Sebastián Palacios|RW|34|371|ARG
Othman Boussaid|LW|26|876|BEL
Giannis Gianniotas|LW|33|50|GRE
Loren Morón|ST|32|1099|ESP` },
    { id: 'kifisia', name: 'Кифисия', city: 'Кифисия', stadium: 'Stadio Apóstolos Nikolaidis', cap: 16620, colors: ['#0055a4', '#ffffff'], players: `
Loukas Stamellos|GK|18|300|GRE
Filippos Roberts|GK|21|300|GRE
Alexandros Anagnostopoulos|GK|32|50|GRE
Moisés Ramirez|GK|26|667|ECU
Konstantinos Apostolakis|RB|27|66|GRE
Jon De Luis|CB|23|260|ESP
Alex Petkov|CB|27|325|BUL
Nektarios Kaloskamis|CB|19|300|GRE
Leroy Abanda|LB|26|117|FRA
Roshon van Eijma|CB|28|61|CUW
Konstantinos Polykratis|LB|20|263|GRE
Georgios Zygouras|CB|19|300|GRE
Hugo Sousa|CB|34|85|POR
Clément Jolibois|CB|29|178|FRA
Tiago Manso|RB|26|378|POR
Konstantinos Lampsias|CB|24|137|GRE
Pavlos Mavroudis|CM|25|159|GRE
Giannis Doiranlis|CM|24|264|GRE
Jorge Pombo|AM|32|221|ESP
Bernardo Martins|CM|28|282|POR
Gerson Sousa|RW|24|494|POR
Alexandros Pothas|CM|19|277|GRE
Konstantinos Roukounakis|CM|25|257|GRE
Imam Jagne|CM|23|289|SWE
Michalis Patiras|RW|22|172|GRE
Ioannis Kousoulos|DM|30|145|CYP
Vangelis Manganas|ST|23|300|GRE
Jeremy Antonisse|LW|24|481|CUW
Dimitrios Theodoridis|ST|24|287|GRE
Jordi Mboula|LW|27|135|CGO
Georgios Kyriopoulos|RW|22|300|GRE
Ángelo Sagal|ST|33|109|CHI
Apostolos Christopoulos|ST|23|301|GRE` },
    { id: 'kalamata', name: 'Каламата', city: 'Каламата', stadium: 'Dimotiko Stadio Kalamatas', cap: 4367, colors: ['#000000', '#ffffff'], players: `
Ioannis Gelios|GK|34|51|GRE
Panagiotis Ginis|GK|27|81|GRE
Nikola Vasiljević|GK|30|79|SRB
Pavlos Varelas|GK|18|300|GRE
Dimitrios Naoumis|CB|22|181|GRE
Alex Perez|CB|20|300|ESP
Stefanos Stroungis|CB|29|156|GRE
Julio Alonso|LB|27|350|ESP
Panagiotis Panagiotou|CB|24|232|GRE
Messemo Junior Bakayoko|CB|31|300|FRA
Petros Kaloutsikidis|RB|25|248|GRE
Uroš Ignjatović|RB|25|390|SRB
Axel Guessand|CB|21|320|FRA
Rodrigues|CB|29|160|BRA
Aarón Martín|CM|19|1246|ESP
Djibril Diarra|DM|22|152|SEN
Juan Cataldi|CM|27|188|ARG
Argyrios Liatsikouras|CM|19|345|GRE
Arnór Sigurðsson|LW|27|721|ISL
Ilias Chatzitheodoridis|LB|28|93|GRE
Ben Zidane|AM|21|300|CIV
Eugene Frimpong|CM|23|139|GHA
Marcelino Carreazo|CM|27|756|VEN
Gonzalo Piñeiro|DM|26|152|ARG
Erik Hamza|AM|19|300|GRE
Jovanny Bolívar|ST|24|531|VEN
Josete Miranda|LW|28|66|EQG
Ahmad Mendes Moreira|LW|31|99|GUI
Julián Bonetto|RW|32|50|ARG
Savvas Mouzakis|ST|21|300|GRE
Kenneth Vargas|ST|24|464|CRC
Dawid Kurminowski|ST|27|140|POL
Stavros Angelis|LW|26|300|GRE` },
    { id: 'ofi', name: 'ОФИ', city: 'Ираклион', stadium: 'Pankritio Stadio', cap: 26240, colors: ['#000000', '#ffffff'], players: `
Klidman Lilo|GK|23|421|GRE
Panagiotis Katsikas|GK|27|62|GRE
Manouel Kalafatis|GK|21|300|GRE
Nikos Christogeorgos|GK|26|792|GRE
Konstantinos Papadakis|CB|17|300|GRE
Krešimir Krizmanić|CB|26|809|CRO
Nikos Marinakis|RB|33|63|GRE
Konstantinos Kostoulas|CB|21|1040|GRE
Achilleas Poungouras|CB|30|71|GRE
Christos Sielis|CB|26|542|CYP
Dimitrios Nikolaou|CB|28|375|GRE
Lefteris Kontekas|CB|17|300|GRE
Konstantinos Lagoudakis|CB|18|300|GRE
Pavlos Kenourgiakis|LB|18|440|GRE
Nikolaos Athanasiou|LW|25|870|GRE
Zisis Karachalios|DM|30|118|GRE
Giorgios Kanellopoulos|CM|26|219|GRE
Aitor Cantalapiedra|AM|30|1047|ESP
Thanasis Androutsos|CM|29|391|GRE
Borja González|RB|30|109|ESP
Giannis Apostolakis|CM|22|1146|GRE
Lorenzo Dickmann|RB|30|305|ITA
Thiago Romano|CM|20|294|ARG
Andreas Bouchalakis|DM|33|223|GRE
Athanasios Sitmalidis|CM|18|300|GRE
Fotis Koutsoupias|CM|20|300|GRE
Emmanouil Chnaris|CM|18|300|GRE
Anastasios Chatzigiovanis|LW|29|354|GRE
Aaron Iseka|ST|28|103|BEL
Taxiarchis Fountas|RW|31|1007|GRE
Thiago Nuss|LW|25|1095|ARG
Kenan Kodro|ST|33|250|BIH
Giannis Theodosoulakis|ST|22|436|GRE` },
    { id: 'iraklis', name: 'Ираклис', city: 'Салоники', stadium: 'Kaftanzoglio Ethniko Stadio', cap: 27560, colors: ['#0055a4', '#ffffff'], players: `
Georgios Karakasidis|GK|21|300|GRE
Panagiotis Tsintotas|GK|33|104|GRE
Georgios Athanasiadis|GK|33|110|GRE
Nikolaos Tsiligeridis|CB|24|300|GRE
Stelios Karagogos|CB|18|300|GRE
Praxitelis Vouros|CB|31|158|GRE
Vitor Meer|LB|22|180|BRA
Soufiane Chakla|CB|33|73|MAR
Piña|CB|31|223|ESP
Kylian Kaiboué|CB|28|570|FRA
Daniel Muñoz|LB|20|300|ESP
Carles Soria|RB|30|94|ESP
Nanú|RB|32|54|GNB
Rasmus Lauritsen|CB|30|643|DEN
Yohan Roche|CB|29|156|BEN
Giorgos Giannoutsos|CB|28|81|GRE
Christos Papazoglou|CM|24|300|GRE
Efstratios Tachmetzidis|CM|19|300|GRE
Georgios Konstantakopoulos|LB|21|262|GRE
Orestis Tsintonis|CM|27|70|GRE
Carlos Rodriguez|CM|22|300|ESP
Nemanja Radoja|CM|33|151|SRB
Yoel Bárcenas|CM|33|408|PAN
Ivi López|AM|32|133|ESP
Jakub Hromada|CM|30|126|SVK
Nikolaos Anastasiadis|CM|23|300|GRE
Rob Nizet|RW|24|140|BEL
Panagiotis Panagiotidis|DM|28|63|GRE
Marco Krainz|CM|29|65|AUT
Vasilios Sourlis|CM|23|147|GRE
Georgios Simseropoulos|ST|19|300|GRE
Elvir Koljić|ST|31|261|BIH
Kristian Kushta|ST|28|50|ALB
Xande Silva|LW|29|249|POR
Pedro Marques|ST|28|368|POR
Adam Žulevič|ST|19|537|SVK` },
    { id: 'panetolikos', name: 'Панэтоликос', city: 'Агринион', stadium: 'Gipedo Panetolikou', cap: 7321, colors: ['#ffd700', '#0055a4'], players: `
Michalis Pardalos|GK|25|117|GRE
Efthymios Papazois|GK|19|300|GRE
Vasilios Xenopoulos|GK|28|120|GRE
Евхении Кучеренко|GK|27|361|UKR
Gustav Granath|CB|29|108|SWE
Elias Olsson|CB|23|166|SWE
Athanasios Prodromitis|CB|22|226|GRE
Konstantinos Thimianis|CB|25|133|GRE
Christian Manrique|LB|28|100|ESP
Lazar Kojić|CB|26|195|SRB
Charalampos Mavrias|RB|32|103|GRE
David Galiatsos|RB|20|268|GRE
Nikola Stajić|CB|25|149|SRB
Apostolos Apostolopoulos|LB|23|203|GRE
Vasilios Rados|DM|21|224|GRE
Marvelous Nakamba|DM|32|233|ZIM
Giannis Satsias|RB|23|207|CYP
Adriano Bregu|AM|20|564|GRE
Diego Esteban|AM|26|344|ESP
Novica Eraković|AM|26|209|MNE
Vangelis Nikolaou|CM|22|281|GRE
Lampros Smyrlis|LW|22|285|GRE
Mateo Mejía|ST|23|274|COL
Amine Bassi|RW|28|1470|FRA
Salifou Soumah|ST|23|935|GUI
Moussa Djenepo|LW|28|617|MLI
Kosta Aleksić|ST|28|174|SRB
Youssouph Badji|ST|24|946|SEN
Aristidis Albanis|ST|19|300|GRE
Kwadwo Opoku|RW|25|331|GHA` },
    { id: 'asteras', name: 'Астерас', city: 'Триполи', stadium: 'Stadio Theodoros Kolokotronis', cap: 7423, colors: ['#ffd700', '#0055a4'], players: `
Nikos Papadopoulos|GK|36|99|GRE
Giannis Kriaras|GK|18|300|GRE
Vasilios Archontakakis|GK|20|300|GRE
Vasilios Chatziemmanouil|GK|27|118|GRE
Spyros Angelidis|GK|21|693|GER
Theofilos Kakadiaris|GK|19|300|GRE
Nikola Šipčić|CB|31|82|MNE
Issiaga Sylla|LB|32|216|GUI
Konstantinos Chrysopoulos|CB|23|327|GRE
Franz Brorsson|CB|30|482|SWE
Giannis Kotsiras|RB|33|168|GRE
Alex Méndez|LB|25|254|ESP
Konstantinos Pomonis|LB|24|140|GRE
Jordan Silva|CB|32|157|MEX
Dimitrios Laskaris|CB|21|354|GRE
Евгений Яблонски|CM|31|106|BLR
Giannis Bouzoukis|CM|28|180|GRE
Eder González|CM|29|159|ESP
Julián Chicco|CM|28|111|ARG
Alexandros Tereziou|LW|26|66|GRE
Nikolaos Kaltsas|RW|36|62|GRE
Dimitrios Kourbelis|CM|32|649|GRE
Adrián Riera|CM|30|54|ESP
Panagiotis Deligiannidis|LW|30|131|GRE
Matias Zogu|CM|17|300|ALB
Bruno Pérez|RW|24|179|ARG
Chrysanthos Gezos|LW|21|300|GRE
Julián Bartolo|RW|30|280|ARG
Federico Macheda|ST|35|159|ITA
Ketu Jih Kalvin|LW|29|272|CMR
Franco Orozco|RW|24|406|ARG
Giannis Gitersos|ST|21|300|GRE
Ricardinho|ST|25|392|BRA
Antonis Papakanellos|RW|21|469|GRE
Benjamin Mbunga Kimpioka|ST|26|235|SWE` },
    { id: 'atromitos', name: 'Атромитос', city: 'Перистери', stadium: 'Dimotiko Stadio Peristeriou', cap: 8969, colors: ['#0055a4', '#ffffff'], players: `
Lefteris Choutesiotis|GK|32|183|GRE
Vasilios Athanasiou|GK|27|73|GRE
Seny Dieng|GK|31|574|SEN
Lefteris Lyratzis|RB|26|637|GRE
Dimitrios Stavropoulos|CB|29|299|GRE
Mattheos Mountes|RB|22|484|GRE
Georgios Papadopoulos|LB|24|142|GRE
Jere Uronen|LB|32|198|FIN
Gerasimos Mitoglou|CB|27|152|GRE
Petros Tsagdis|CB|18|300|GRE
Hördur Magnusson|CB|33|176|ISL
Dimitrios Tsakmakis|CB|27|80|GRE
Spiros Ampartzidis|CM|21|300|GRE
Theocharis Tsingaras|DM|26|504|GRE
Thanasis Karamanis|DM|23|341|GRE
Steven Zuber|AM|35|421|SUI
Samuel Moutoussamy|DM|30|511|COD
Cristopher Núnez|CM|28|277|CRC
Dani García|DM|36|443|ESP
Elton Hoxha|CM|20|300|ALB
Spyros Abartzidis|CM|21|226|GRE
Anastasios Kotsis|CM|19|300|GRE
Konstantinos Batos|CM|20|300|GRE
Argyris Marnezos|ST|20|300|GRE
Juan Perea|ST|26|509|COL
Stavros Pnevmonidis|RW|20|1408|GRE
Panagiotis Tsantilas|ST|22|606|GRE
Sotiris Tsiloulis|RW|31|81|GRE
Vangelis Paliouras|ST|17|300|GRE
Serginho|ST|31|297|BRA
Kelvin Ofori|RW|25|601|GHA
Georgios Tzovaras|LW|26|226|GRE` },
    { id: 'levadiakos', name: 'Левадиакос', city: 'Левадия', stadium: 'Dimotiko Stadio Levadias Lambros Katsonis', cap: 5915, colors: ['#00a650', '#ffffff'], players: `
Lucas Anacker|GK|30|50|BRA
Stelios Vallindras|GK|21|300|GRE
Niv Eliasi|GK|24|852|ISR
Giannis Poulos|CB|20|300|GRE
Norbert Gyömbér|CB|34|352|SVK
Alexandru Pantea|RB|23|783|ROU
Marios Vichos|LB|26|832|GRE
Jonathan Panzo|CB|25|888|ENG
Taxiarchis Filon|CB|21|297|GRE
Georgios Kornezos|CB|28|60|GRE
Panagiotis Liagas|CB|26|828|GRE
Giannis Tsivelekidis|CB|27|79|GRE
Nikolaos Tsaras|CB|20|232|GRE
Mohamed Elneny|DM|34|552|EGY
Juan Bauza|AM|30|198|ARG
Georgios Nikas|DM|27|101|GRE
Adrian Șut|DM|27|2029|ROU
Ioannis Kosti|DM|26|802|CYP
Lamarana Jallow|DM|24|263|GAM
Konstantinos Goumas|CM|21|439|GRE
Gregorio Rodríguez|LW|26|424|ARG
Panagiotis Simelidis|AM|33|159|GRE
Mohamed Ndiaye|DM|19|300|SEN
Christos Papadopoulos|RW|21|388|GRE
Georgios Vrakas|RW|25|261|GRE
Vasilios Tzebelikos|ST|20|300|GRE
Ognjen Ožegović|ST|32|123|SRB
Agustín Urzi|RW|26|606|ARG
Georgios Manthatis|LW|29|66|GRE
Dimitrios Emmanouilidis|LW|26|353|GRE
Mahamadou Balde|LW|19|300|ESP
Aliou Badji|ST|29|208|SEN
Octavian Popescu|LW|23|497|ROU
David Cobnan|ST|24|579|NGA` },
    { id: 'volos', name: 'Волос', city: 'Волос', stadium: 'Panthessaliko Stadio', cap: 22189, colors: ['#0055a4', '#ffffff'], players: `
Marios Siabanis|GK|27|243|GRE
Юрий Лодыгин|GK|36|148|RUS
Алексеи Коселев|GK|32|50|MDA
Athanasios Papathanasiou-Gerofokas|GK|20|155|GRE
Giannis Kargas|CB|31|206|GRE
Anastasios Tsokanis|CB|35|64|GRE
Hatim Essaoubi|CB|25|300|MAR
Ronaël Pierre-Gabriel|RB|28|513|FRA
Georgios Mygas|CB|32|66|GRE
Konstantinos Lykourinos|LB|20|197|GRE
Stefanos Katsikas|RB|24|188|GRE
Hamza Mendyl|LB|29|227|MAR
Lefteris Tasiouras|RB|22|287|GRE
Derek Agyakwa|CB|24|236|NED
Maximiliano Comba|DM|32|82|ARG
Quentin Lecoeuche|LW|32|90|FRA
Vasilios Grosdis|DM|24|256|GRE
Xesc Regis|RB|30|136|ESP
Matías González|RW|24|275|ARG
Dženis Burnić|CM|28|599|BIH
Klearchos Vainopoulos|CM|21|300|GRE
Georgios Charalampoglou|ST|21|254|GRE
Keidi Bare|DM|29|290|ALB
Fabio Refatllari|DM|17|300|GRE
Yvan Neyou Noupa|CM|29|1433|CMR
Rémy Cabella|LW|36|427|FRA
Lazaros Lamprou|LW|28|393|GRE
Jan Hurtado|ST|26|252|VEN
Joca|RW|30|161|POR
Gustavo Furtado|ST|25|407|BRA
Alexandros Garavelas|ST|18|300|GRE` },
  ],
});
