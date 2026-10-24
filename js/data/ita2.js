// Серия B 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'ita2', name: 'Серия B', short: 'Серия B', country: 'ITA', tier: 2, weekday: 6,
  autumn: { from: '08-22', rounds: 19 }, spring: { from: '01-09', rounds: 19 },
  ticket: 15, prize: [4000, 3850, 3700, 3550, 3400, 3250, 3100, 2950, 2800, 2650, 2550, 2400, 2250, 2100, 1950, 1800, 1650, 1500, 1350, 1200],
  teams: [
    { id: 'palermo', name: 'Палермо', city: 'Палермо', stadium: 'Stadio Renzo Barbera', cap: 36349, colors: ['#f8a1c4', '#000000'], players: `
Alfred Gomis|GK|33|142|SEN
Mattia Perin|GK|33|1156|ITA
Manfredi Nespola|GK|21|332|ITA
Mattia Fortin|GK|23|1910|ITA
Nils Balagušs|GK|18|150|LVA
Jesse Joronen|GK|33|327|FIN
Mattia Bani|CB|32|1177|ITA
Ettore Karol Nicolosi|CB|20|150|ITA
Patryk Peda|CB|24|1671|POL
Pietro Ceccaroni|CB|30|875|ITA
Tommaso Cassandro|CB|26|1675|ITA
Federico Barba|CB|33|195|ITA
Giangiacomo Magnani|CB|31|838|ITA
Valerio Brutto|CM|19|150|ITA
Tommaso Augello|LB|32|706|ITA
Antonio Palumbo|AM|30|1434|ITA
Claudio Gomes|DM|26|861|FRA
Jacopo Segre|DM|29|1187|ITA
Filippo Ranocchia|DM|25|2747|ITA
Emmanuel Quartsin Gyasi|RB|32|403|GHA
Pietro Avena|CM|19|150|ITA
Hernani|AM|32|843|BRA
Nahuel Estévez|CM|30|1147|ARG
Niccolò Pierozzi|RB|25|2775|ITA
Andrea Bozzolan|LB|22|1852|ITA
Luca Mazzitelli|CM|30|668|ITA
Salvatore Squillacioti|CM|18|150|ITA
Gabriel Strefezza|ST|29|5835|BRA
Dominic Vavassori|RW|20|4435|ITA
Dennis Tørset Johnsen|LW|28|1864|NOR
Joel Pohjanpalo|ST|32|2310|FIN
Alessandro Gabrielloni|ST|32|573|ITA` },
    { id: 'mantova', name: 'Мантова', city: 'Мантуя', stadium: 'Stadio Danilo Martelli – Pata Stadium', cap: 14854, colors: ['#e30613', '#ffffff'], players: `
Luca Gemello|GK|26|395|ITA
Manuel Gasparini|GK|24|259|ITA
Francesco Bardi|GK|34|233|ITA
Erik Panizzi|LB|32|137|ITA
Bodin Tomašević|CB|20|443|MNE
Andrea Meroni|CB|29|387|ITA
Alessio Castellini|CB|23|2113|ITA
Stefano Cella|CB|25|1243|ITA
Cristian Marai|CB|18|150|ITA
Tommaso Del Lungo|CB|22|257|ITA
Eman Košpo|CB|19|3164|BIH
Filippo Vesentini|CB|24|385|ITA
Giacomo Fedel|LB|24|262|ITA
Jean-Pierre Longonda|DM|24|388|BEL
Rareş Ilie|AM|23|874|ROU
David Wieser|DM|24|262|ITA
Nicolò Radaelli|RB|23|426|ITA
Sambaly Keita|CM|25|381|FRA
Francesco Ruocco|AM|25|1090|ITA
Flavio Paoletti|DM|23|647|ITA
Simone Trimboli|DM|24|1563|ITA
Lorenzo Ignacchiti|DM|22|1494|ITA
Davide Bragantini|AM|23|1797|ITA
Stefano Baraldi|CM|19|150|ITA
Jonathan Silva|RB|22|700|BRA
Fahem Benaïssa-Yahia|LB|24|643|FRA
Rachid Kouda|DM|24|1858|BFA
Matteo Spinaccè|ST|20|1601|ITA
Ettore Gliozzi|ST|31|710|ITA
Ismale Cajazzo|RB|22|406|FRA
Mattia Bellini|ST|18|150|ITA
Federico Chinetti|AM|20|632|ITA
Vanja Vlahović|ST|22|4390|SRB` },
    { id: 'modena', name: 'Модена', city: 'Модена', stadium: 'Stadio Alberto Braglia', cap: 21151, colors: ['#ffd700', '#0055a4'], players: `
Leandro Chichizola|GK|36|296|ARG
Andrea Maran|GK|18|150|ITA
Leonardo Consiglio|GK|20|860|ITA
Abdullah Laidani|GK|23|575|SUI
Steven Nador|CB|24|727|TOG
Martino Odero|CB|19|150|ITA
Bryant Nieling|CB|23|2910|NED
Francesco Folino|CB|24|789|ITA
Davide Adorni|CB|34|173|ITA
Diego Ronco|CB|22|470|ITA
Daniel Tonoli|CB|24|2644|ITA
Alessandro Sersanti|CM|24|1410|ITA
Tito Fabbri|CM|17|150|ITA
Francesco Zampano|LW|33|712|ITA
Simone Santoro|CM|27|1385|ITA
Gastón Brugman|DM|34|354|URU
Kleis Bozhanaj|AM|25|242|ALB
Antonio Imputato|RW|22|469|ITA
Paulo Azzi|LB|32|712|BRA
Wisdom Acquah|CM|19|627|GHA
Stênio|AM|23|559|BRA
Treasure Egharevba|CM|18|150|ITA
Alessandro Bianco|CM|24|3858|ITA
Giacomo Olzer|CM|25|534|ITA
Pietro Arnaboldi|CM|18|842|ITA
Joris Manquant|ST|21|510|FRA
Daniele Montevago|ST|23|644|ITA
Giuseppe Caso|LW|27|861|ITA
Andrea Belotti|ST|32|896|ITA
Edward Colpo|ST|17|150|ITA
Luca Bacchin|ST|22|397|ITA
Giuseppe Ambrosino|ST|23|1996|ITA` },
    { id: 'ascoli', name: 'Асколи', city: 'Асколи-Пичено', stadium: 'Stadio Cino e Lillo Del Duca', cap: 20853, colors: ['#000000', '#ffffff'], players: `
Samuele Vitale|GK|24|984|ITA
Rocco Dente|GK|18|150|ITA
Matteo Raffaelli|GK|21|515|ITA
Rok Brzan|GK|22|282|SVN
Gian Crespi|GK|25|264|ITA
Damiano Menna|CB|31|153|ITA
Manuel Nicoletti|LW|27|214|ITA
Lorenzo Venuti|CB|31|154|ITA
Filippo Diamanti|CB|17|150|ITA
Abdoul Guiébré|LB|29|424|BFA
Manuel Alagna|CB|24|504|ITA
Marcos Curado|CB|31|218|ARG
Federico Gattoni|CB|27|426|ARG
Nicholas Rizzo|CB|26|349|ITA
Tommaso Milanese|RB|24|659|ITA
Samuele Damiani|DM|28|459|ITA
Giovanni Corradini|DM|23|324|ITA
Сергиу Перциун|CM|20|1761|MDA
Gennaro Acampora|DM|32|268|ITA
Andrea Oliveri|RW|23|484|ITA
Antonio Russo|CM|18|150|ITA
Luca Lo Scalzo|AM|19|150|ITA
Giacomo De Pieri|AM|19|1635|ITA
Matteo Ricci|CM|32|290|ITA
Don Bolsius|AM|27|325|NED
Andrea Silipo|RW|25|406|ITA
Amine Chakir|ST|25|150|ITA
Simone D'Uffizi|LW|22|983|ITA
Gabriele Gori|ST|27|559|ITA
Matteo Brunori|ST|31|998|ITA` },
    { id: 'pisa', name: 'Пиза', city: 'Пиза', stadium: 'Arena Garibaldi - Stadio Romeo Anconetani', cap: 17500, colors: ['#000000', '#0055a4'], players: `
Simone Scuffet|GK|30|705|ITA
Leonardo Loria|GK|27|161|ITA
Alessandro Confente|GK|28|705|ITA
Mateus Lusuardi|CB|22|795|BRA
Rosen Bozhinov|CB|21|4973|BUL
Antonio Caracciolo|CB|36|485|ITA
Simone Canestrelli|CB|26|3831|ITA
Andrea Primasso|CB|21|364|ITA
Francesco Coppola|CB|21|4190|ITA
Arturo Calabresi|CB|30|406|ITA
Samuele Angori|LW|23|4187|ITA
Mehdi Léris|RW|28|1256|ALG
Felipe Loyola|DM|25|6551|CHI
Emanuele Rao|AM|20|3866|ITA
Tomás Esteves|AM|24|1051|POR
İsak Vural|CM|20|6545|TUR
Tommaso Marras|AM|22|1350|ITA
Jacopo Frosali|CM|20|296|ITA
Omar Correia|CM|26|1326|FRA
Gabriele Piccinini|CM|25|2160|ITA
Daniel Battistella|CM|19|150|ITA
Giuseppe Leone|CM|25|1731|ITA
Simone Zanon|RW|25|1668|ITA
Elia Giani|ST|25|274|ITA
Filippo Pittarello|ST|30|810|ITA
Mattéo Tramoni|AM|26|2718|FRA
Ichem Ferrah|RW|21|2097|FRA
Louis Buffon|ST|18|1087|ITA
Stefano Moreo|ST|33|854|ITA
Andrea Petagna|ST|31|420|ITA
Daniel Denoon|CB|22|685|SUI` },
    { id: 'sudtirol', name: 'Зюдтироль', city: 'Больцано', stadium: 'Stadio Marco Druso', cap: 5600, colors: ['#ffffff', '#e30613'], players: `
Daniele Borra|GK|31|139|ITA
Lukas Ploner|GK|24|150|ITA
Rok Vadjunec|GK|20|150|SVN
Alessandro Plizzari|GK|26|776|ITA
Lorenzo Bonifacio|GK|19|150|ITA
Marius Adamonis|GK|29|600|LTU
Tommaso Laureti|GK|17|150|ITA
Davide Veroli|CB|23|959|ITA
Riccardo Stivanello|CB|22|693|ITA
Andrea Masiello|CB|40|159|ITA
Carlo Sabatini|CB|20|150|ITA
Marco Varnier|CB|28|284|ITA
Mattia Pellini|CB|19|458|ITA
Federico Davi|CB|24|389|ITA
Giacomo Stabile|CB|21|1263|ITA
Marco Iuliano|CB|18|150|ITA
Andrea Giorgini|CB|24|1992|ITA
Hamza El Kaouakibi|CB|28|550|MAR
Simone Tronchin|CM|24|1375|ITA
Niklas Pyyhtiä|CM|23|1337|FIN
Fabio Rispoli|CM|20|4976|ITA
Aljoša Vasić|AM|24|701|ITA
Lorenzo Anghelè|CM|21|589|ITA
Kevin Zeroli|CM|21|2291|ITA
Bjarki Steinn Bjarkason|LB|26|533|ISL
Fabian Tait|CM|33|173|ITA
Simone Davì|LW|27|341|ITA
Dhirar Brik|CM|19|573|TUN
Salvatore Molina|RW|34|251|ITA
Elias Schrott|CM|17|150|ITA
Rareş Burnete|ST|22|496|ROU
Vasco Lopes|RW|27|356|CPV
Kenny Mixtur|ST|23|391|GLP
Alvin Okoro|ST|21|2103|ITA` },
    { id: 'avellino', name: 'Авеллино', city: 'Авеллино', stadium: 'Stadio Partenio-Adriano Lombardi', cap: 26308, colors: ['#00a650', '#ffffff'], players: `
Antony Iannarilli|GK|35|277|ITA
Jacopo Sassi|GK|23|465|ITA
Tommaso Martinelli|GK|20|5806|ITA
Armando Izzo|CB|34|943|ITA
Alessandro Di Bitonto|CB|21|655|ITA
Michael Venturi|CB|27|183|ITA
Tommaso Cancellotti|RB|34|355|ITA
Lorenco Šimić|CB|30|327|CRO
Patrick Enrici|CB|25|656|ITA
Carlo Mellino|CB|20|150|ITA
António Aloisi|CB|18|150|ITA
Umberto Volpe|CB|20|150|ITA
Filippo Missori|RW|22|1904|ITA
Marco Sala|LW|27|302|ITA
Luca Palmiero|DM|30|451|ITA
Luca Di Maggio|CM|21|1240|ITA
Giacomo Faticanti|CM|22|2721|ITA
Thomas Berenbruch|CM|21|1147|ITA
Martin Palumbo|CM|24|932|NOR
Dimitrios Sounas|DM|32|432|GRE
Brando Moruzzi|LB|22|1056|ITA
Emanuele Adamo|LW|28|294|ITA
Michele Besaggio|CM|24|1024|ITA
Luca Pandolfi|ST|28|335|ITA
Walid Cheddira|ST|28|1675|MAR
Raffaele Russo|ST|27|403|ITA
Daniel Fila|ST|24|1585|CZE
Tommaso Biasci|ST|31|471|ITA
Sebastiano Di Paolo|ST|20|1060|ITA
Andrea Favilli|ST|29|222|ITA` },
    { id: 'benevento', name: 'Беневенто', city: 'Беневенто', stadium: 'Stadio Ciro Vigorito', cap: 17554, colors: ['#ffd700', '#e30613'], players: `
Manuel Esposito|GK|21|372|ITA
Gianmarco Vannucchi|GK|31|434|ITA
Alioune Sylla|GK|23|290|SEN
Luca Caldirola|CB|35|159|ITA
Raffaele Celia|LW|27|182|ITA
Stefano Scognamillo|CB|32|440|ITA
Christian Dalle Mura|CB|24|510|ITA
Pietro Beruatto|CB|27|544|ITA
Pietro Saio|CB|23|652|ITA
Giacomo Ricci|LW|30|295|ITA
Edoardo Pierozzi|RB|25|612|ITA
Antonio Prisco|DM|22|773|ITA
Antonis Siatounis|DM|24|381|GRE
Mattia Maita|AM|32|451|ITA
Luigi Cherubini|AM|22|2331|ITA
Davide Lamesta|AM|26|656|ITA
Mattia Mannini|RW|20|1141|ITA
Leonardo Sernicola|RW|29|470|ITA
Pier Luigi Simonetti|CM|25|307|ITA
Emanuele Schimmenti|CM|24|385|ITA
Raffaele Romano|CM|21|703|ITA
Christian Kouan|DM|26|446|CIV
Angelo Talia|AM|23|315|ITA
Matteo Donatiello|CM|20|387|ITA
Francesco Paolo Salvemini|ST|30|411|ITA
Marco Giugliano|LW|18|150|ITA
David Okereke|ST|29|897|NGA
Logan|ST|20|150|BRA
Guglielmo Mignani|ST|24|423|ITA
Simone Verdi|ST|34|161|ITA
Marco Tumminello|ST|27|399|ITA` },
    { id: 'padova', name: 'Падова', city: 'Падуя', stadium: 'Stadio Comunale Euganeo', cap: 32420, colors: ['#ffffff', '#e30613'], players: `
Louis Mouquet|GK|22|323|FRA
Simone Scaglia|GK|22|233|ITA
Alessandro Sorrentino|GK|24|1225|ITA
Matteo Lovato|CB|26|1417|ITA
Enrico Silletti|CB|28|300|ITA
Alessandro Dellavalle|CB|22|2055|ITA
Filippo Sgarbi|CB|28|254|ITA
Christian Pastina|CB|25|363|ITA
Carlo Faedo|CB|27|376|ITA
Edoardo Caporello|CM|20|150|ITA
Antonio Barreca|LW|31|186|ITA
Giovanni Giunti|CM|21|1240|ITA
Kevin Varas|CM|33|193|ECU
Pietro Fusi|CM|28|383|ITA
Marco Pompetti|CM|26|1483|ITA
Alessandro Capelli|RW|29|449|ITA
Emanuele Zuelli|CM|24|1539|ITA
Francesco Di Mariano|LW|30|319|ITA
Lorenzo Carissoni|RW|29|443|ITA
Matteo Cocchi|LW|19|2711|ITA
Diego Marcolini|CM|21|401|ITA
Luca Zanimacchia|LW|28|1147|ITA
Luca Moro|ST|25|1351|ITA
Gianluca Caprari|ST|33|226|ITA
Alessandro Seghetti|ST|22|456|ITA
Kevin Lasagna|ST|34|256|ITA
Mattia Bortolussi|ST|30|813|ITA
Nicolas Galazzi|AM|25|774|ITA
Gabriele Artistico|ST|24|1774|ITA
Cristian Buonaiuto|ST|33|192|ITA` },
    { id: 'arezzo', name: 'Ареццо', city: 'Ареццо', stadium: 'Stadio Città di Arezzo', cap: 13128, colors: ['#800020', '#ffffff'], players: `
Luca Trombini|GK|25|270|ITA
Alessandro Nunziante|GK|19|2002|ITA
Francesco Serban|GK|18|150|ROU
Andrea Seculin|GK|36|156|ITA
Marlon Mena|CB|20|150|DOM
Mauro Coppolaro|CB|29|167|ITA
Julián Illanes|CB|29|841|ARG
Alessandro Renzi|RB|22|456|ITA
Matteo Gilli|CB|29|195|ITA
Marco Chiosa|CB|32|174|ITA
Filippo De Col|RB|32|168|ITA
Andrea Cagnano|LB|28|301|ITA
Davide Mancini|CB|21|195|ITA
Samuele Righetti|LB|25|644|ITA
Gian Marco Ferrari|CB|34|119|ITA
Kevin Leone|CM|21|708|ITA
Shaka Mawuli|CM|28|304|GHA
Mattia Sala|CM|21|662|ITA
Артур Ионита|CM|36|327|MDA
Mattia Viviani|CM|26|355|ITA
Luca Chierico|DM|25|527|ITA
Aleandro Manes|CM|20|150|ITA
Gennaro Iaccarino|CM|23|389|ITA
Alberto Cerri|ST|30|433|ITA
Emiliano Pattarello|RW|27|900|ITA
Leonardo Mancuso|ST|34|270|ITA
Camillo Tavernelli|LW|27|642|ITA
Alessandro Arena|RW|26|233|ITA
Pietro Cianci|ST|30|488|ITA
Marco Olivieri|LW|27|338|ITA` },
    { id: 'entella', name: 'Виртус Энтелла', city: 'Кьявари', stadium: 'Stadio Enrico Sannazzari', cap: 6113, colors: ['#8ac3ee', '#ffffff'], players: `
Matteo Tassara|GK|17|150|PER
Edoardo Torrielli|GK|20|150|ITA
Federico Del Frate|GK|30|287|ITA
Simone Colombi|GK|35|212|ITA
Nicolas Previtali|RB|21|518|ITA
Andrea Tiritiello|CB|31|359|ITA
Ivan Marconi|CB|36|348|ITA
Luca Parodi|CB|31|150|ITA
Mattia Alborghetti|CB|28|286|ITA
Mattia Motolese|CB|22|270|ITA
Marwane Kritta|CB|24|162|ITA
Niccolò Squizzato|CM|24|582|ITA
Davide Bariti|RB|35|318|ITA
Luca Vignali|RW|30|157|ITA
Riccardo Turicchia|LW|23|364|ITA
Tommaso Annoni|CM|18|150|ITA
Andrea Franzoni|CM|29|451|ITA
Stefano Di Mario|LB|22|2167|ITA
Mattia Valori|CM|21|150|ITA
Gabriele Costa|CM|21|301|ITA
Lucas Felippe|DM|26|148|BRA
Leonardo Benedetti|CM|26|540|ITA
Francesco Mezzoni|RB|26|284|ITA
Emanuele Banfi|ST|22|150|ITA
Giacomo Corona|ST|22|449|ITA
Luigi Cuppone|ST|29|336|ITA
Bernat Guiu|ST|26|558|ESP
Mattia Tirelli|ST|24|344|ITA
Andrea Traniello|ST|19|150|ITA
Francesco Forte|ST|33|218|ITA` },
    { id: 'vicenza', name: 'Виченца', city: 'Виченца', stadium: 'Stadio Comunale Rino Mercante', cap: 2952, colors: ['#e30613', '#ffffff'], players: `
Fabrizio Bagheria|GK|25|191|ITA
Riccardo Gagno|GK|29|478|ITA
Elia Tantalocchi|GK|22|649|ITA
Riccardo Marchizza|LB|28|842|ITA
Maxime Leverbe|CB|29|232|FRA
Giuseppe Cuomo|CB|28|442|ITA
Ettore Broggian|RB|18|150|ITA
Nicolò Brighenti|CB|37|337|ITA
Thomas Sandon|CB|23|769|ITA
Matteo Vescovi|CB|21|438|ITA
Andrea Papetti|CB|24|649|ITA
Marco Carraro|CM|28|457|ITA
Alessandro Bellemo|CM|31|169|ITA
Mattia Valoti|CM|33|290|ITA
Tommaso Corazza|LW|22|1493|ITA
Giulio Pellizzari|CM|22|543|ITA
Lorenzo Caferri|RW|27|310|ITA
Loris Zonta|CM|29|292|ITA
Filippo Costa|LW|31|289|ITA
Raul Talarico|CM|24|275|ITA
Armand Rada|CM|27|183|ALB
Alessandro Pietrelli|RW|23|527|ITA
Nicola Rauti|ST|26|274|ITA
Claudio Morra|ST|31|336|ITA
Gabriele Moncini|ST|30|593|ITA
Filippo Alessio|ST|21|519|ITA
Silvio Merkaj|ST|28|795|ALB
Frank Tsadjout|ST|27|415|ITA` },
    { id: 'verona', name: 'Эллас Верона', city: 'Верона', stadium: 'Stadio Marcantonio Bentegodi', cap: 39211, colors: ['#002f6c', '#ffd700'], players: `
Nicola Leali|GK|33|1030|ITA
Giacomo Toniolo|GK|22|270|ITA
Simone Perilli|GK|31|127|ITA
Arthur Borghi|GK|19|150|BRA
Gabriele Zappa|CB|26|2388|ITA
Andrias Edmundsson|CB|25|1925|FRO
Paweł Dawidowicz|CB|31|284|POL
Tobias Slotsager|CB|20|3833|DEN
Noe Tagne|CB|18|150|FRA
Nicolò Calabrese|CB|21|1647|ITA
Seid Korač|CB|25|1161|LUX
Fallou Cham|RW|20|1138|GAM
Davide De Battisti|LB|20|336|ITA
Martin Frese|LW|28|1709|DEN
Domagoj Bradarić|LW|26|1509|CRO
Suat Serdar|CM|29|1739|GER
Tomás Suslov|CM|24|3728|SVK
Andréa Le Borgne|CM|20|2378|FRA
Leorat Bega|CM|23|340|SUI
Grigoris Kastanos|DM|28|654|CYP
Abdou Harroui|CM|28|1144|NED
Nunzio Lella|CM|26|354|ITA
Antoine Bernede|CM|27|2555|FRA
Edoardo Iannoni|CM|25|829|ITA
Kacper Sezonienko|AM|23|639|POL
Juan Manuel Cruz|ST|27|240|ARG
Amin Sarr|LW|25|2086|SWE
Mattia Compagnon|RW|24|974|ITA
Dailon Livramento|ST|25|895|CPV
Samuele Mulattieri|ST|26|1697|ITA
Daniel Mosquera|ST|27|1303|COL
Salvatore Cerbone|ST|19|753|ITA
Rubén Akalé|ST|19|542|FRA
Caleb Ekuban|ST|32|730|GHA` },
    { id: 'juve_stabia', name: 'Юве Стабия', city: 'Кастелламмаре-ди-Стабия', stadium: 'Stadio Comunale Romeo Menti', cap: 7642, colors: ['#ffd700', '#0055a4'], players: `
Ante Vuković|GK|22|734|CRO
Alessandro Signorini|GK|27|123|ITA
Antonio Vetrò|GK|19|150|ITA
Pietro Boer|GK|24|257|ITA
Paolo Vismara|GK|23|1067|ITA
Marco Bellich|CB|27|1051|ITA
Nicola Pietrangeli|CB|26|721|ITA
Terrence Douglas|LB|25|385|NED
Giulio Scuderi|LB|20|539|ITA
Davide Bettella|CB|26|477|ITA
Francesco Gallea|CB|21|450|MLI
Tommaso Maggioni|RB|25|305|ITA
Manuel Ricciardi|RW|26|525|ITA
Thomas Battistella|CM|25|315|ITA
Davide Buglio|CM|28|237|ITA
Christian Pierobon|CM|24|416|ITA
Kevin Piscopo|LB|28|195|ITA
Nermin Karić|CM|27|536|SWE
Daniel Perin|CM|19|150|ITA
Justin Kumi|DM|22|849|ITA
Fabio Maistro|AM|28|418|ITA
Saná Fernandes|RW|20|445|POR
Federico Artioli|DM|25|385|ITA
Edoardo Lonardo|ST|21|269|ITA
Nicola Patanè|RW|22|397|ITA
Antonio Di Nardo|ST|28|1202|ITA
Luigi Caccavo|ST|22|573|ITA
Leonardo Candellone|ST|29|354|ITA
Romeo Sandrucci|ST|19|150|ITA
Giuseppe Sibilli|LW|30|249|ITA` },
    { id: 'cesena', name: 'Чезена', city: 'Чезена', stadium: 'Orogel Stadium - Dino Manuzzi', cap: 23860, colors: ['#ffffff', '#000000'], players: `
Alessandro Siano|GK|25|242|ITA
Luca Ferretti|GK|22|150|ITA
Jonathan Klinsmann|GK|29|1616|USA
Niccolò Fontana|GK|19|150|ITA
Simone Gianfanti|GK|19|150|ITA
Tommaso Mazzi|GK|17|150|ITA
Mark Natta|CB|23|530|AUS
Antonio David|LB|22|287|ROU
Jacopo Gelli|CB|25|818|ITA
Mihajlo Ilić|CB|23|1889|SRB
Andrea Ciofi|CB|27|1221|ITA
Vittorio Magni|LW|20|1008|ITA
Massimiliano Mangraviti|CB|28|629|ITA
Matteo Piacentini|CB|27|183|ITA
Luca Schirone|CM|23|262|ITA
Gianluca Frabotta|LW|27|1094|ITA
Matteo Francesconi|CM|22|1513|ITA
Riccardo Pagano|AM|21|1665|ITA
Matteo Guidi|CB|23|402|ITA
Matteo Casadei|CM|17|150|ITA
Dimitri Bisoli|CM|32|298|ITA
Marco Dalla Vecchia|CM|21|557|ITA
Emil Bohinen|CM|27|619|NOR
Matteo Lontani|CM|19|439|ITA
Filippo Bertaccini|CM|19|526|ITA
Cristian Shpendi|ST|23|4867|ALB
Maat Caprini|LW|20|1609|ITA
Xavello Druiventak|RW|22|150|NED
Luca D'Andrea|RW|22|638|ITA
Maurizio Rossetti|ST|19|150|ITA
Antonio Fiori|LW|23|1191|ITA
Alessandro Debenedetti|ST|23|710|ITA` },
    { id: 'carrarese', name: 'Каррарезе', city: 'Каррара', stadium: 'Stadio dei Marmi - IV Olimpionici Azzurri', cap: 5220, colors: ['#ffd700', '#0055a4'], players: `
Semuel Pizzignacco|GK|25|515|ITA
Giovanni Garofani|GK|24|258|ITA
Mattia Bencaster|GK|18|150|ITA
Stefano Mazzini|GK|27|169|ITA
Nicola Ravaglia|GK|37|89|ITA
Colin Dagba|RB|28|202|FRA
David Vujevic|CB|20|1794|SUI
Tommaso Macchioni|CB|20|810|ITA
Filippo Oliana|CB|27|701|ITA
Fabio Ruggeri|CB|21|1238|ITA
Filippo Reale|CB|20|1015|ITA
Lorenzo Romani|CB|21|496|ITA
Niccolo Romagnoli|CB|17|150|ITA
Tommaso Guercio|RB|21|257|POL
Niccolò Belloni|RW|32|166|ITA
Yanis Khafi|CM|20|150|MAR
Luka Topalović|CM|20|2835|SVN
Nicolás Schiavi|CM|31|190|ARG
Gonçalo Esteves|RB|22|526|POR
Matthias Braunöder|DM|24|541|AUT
Jacopo Martini|CM|21|1202|ITA
Pietro Pinelli|CM|20|253|ITA
Giulio Baroncelli|CM|18|150|ITA
Jonas Rouhi|LW|22|1732|SWE
Gabriele Parlanti|CM|22|934|ITA
Fabio Abiuso|ST|23|2162|ITA
Tommaso Rubino|ST|19|2218|ITA
Moustapha Cissé|ST|23|599|GUI
Nicholas Bonfanti|ST|24|524|ITA
Mattia Finotto|ST|33|270|ITA
Nicolo Cudrig|LB|24|156|ITA
Giacomo Marconi|ST|21|470|ITA` },
    { id: 'empoli', name: 'Эмполи', city: 'Эмполи', stadium: 'Stadio Carlo Castellani – Computer Gross Arena', cap: 16284, colors: ['#0055a4', '#ffffff'], players: `
Samuele Perisan|GK|29|156|ITA
Jacopo Seghetti|GK|21|150|ITA
Emiliano Filippis|GK|22|632|ITA
Simone Romagnoli|CB|36|159|ITA
Marco Curto|CB|27|435|ITA
Gabriele Indragoli|CB|22|275|ITA
Samsondeen Babalola|CB|18|150|GER
Cristian Cauz|CB|30|184|ITA
Dawid Bembnista|CB|19|150|POL
Roberto Berizzi|CB|19|150|ITA
Duccio Degli Innocenti|CM|23|1121|ITA
Luca Magnino|CM|29|358|ITA
Edoardo Saporiti|AM|25|613|ITA
Joseph Ceesay|AM|28|248|GAM
Gerard Yepes|DM|24|836|ESP
Filippo Bandinelli|CM|31|291|ITA
Matteo Egan|RB|18|609|IRL
Mattia Huqi|CM|19|150|ALB
Edoardo Biondini|DM|17|150|ITA
Lapo Deli|CM|20|324|ITA
Danilo Busiello|CM|18|886|ITA
Luca Belardinelli|DM|25|257|ITA
Niccolò Corrado|LW|26|406|ITA
Andrea Orlandi|CM|19|324|ITA
Karim Zedadka|LW|26|386|ALG
Salvatore Monaco|ST|19|367|ITA
Stiven Shpendi|ST|23|4747|ALB
Florijan Meznar|ST|18|569|SVN
Filippo Distefano|ST|23|1127|ITA
Богдан Попов|ST|19|4302|UKR` },
    { id: 'cremonese', name: 'Кремонезе', city: 'Кремона', stadium: 'Stadio Giovanni Zini', cap: 14834, colors: ['#e30613', '#808080'], players: `
Andrea Fulignati|GK|31|637|ITA
Marco Festa|GK|34|189|ITA
Federico Agazzi|GK|21|780|ITA
Riccardo Liberal|GK|18|150|ITA
Sebastiano Luperto|CB|30|2553|ITA
Federico Baschirotto|CB|30|2657|ITA
Fellipe Jack|CB|20|2291|BRA
Matteo Bianchetti|CB|33|585|ITA
Yuri Rocchetti|LB|23|391|ITA
Filippo Rino Bignamini|CB|17|150|ITA
Simone Marsi|CB|18|150|ITA
Riccardo Villa|CB|17|150|ITA
Alessandro Vogliacco|CB|28|1408|ITA
Alessio Brambilla|CM|25|150|ITA
Morten Thorsby|CM|30|1867|NOR
Giuseppe Pezzella|LW|28|1628|ITA
Tommaso Barbieri|RW|24|4080|ITA
Simone Lottici Tessadri|DM|20|430|ITA
Tommaso Berti|CM|22|6320|ITA
Fabio Gerli|CM|29|833|ITA
Adrian Lickūnas|RW|20|273|LTU
Simone Pontisso|DM|29|904|ITA
Ronie Barros Cabezas|CM|17|150|ITA
Дачи Лордкипанидзе|CM|21|377|GEO
Jari Vandeputte|CM|30|2042|BEL
Alberto Grassi|CM|31|916|ITA
Salvatore Elia|RB|27|1182|ITA
Nouroudine Faye|ST|19|150|ITA
David Stückler|ST|22|885|DEN
Manuel De Luca|ST|28|1096|ITA
Adin Ličina|RW|19|1714|GER
Milan Djuric|ST|36|673|BIH
Michele Collocolo|RW|26|1642|ITA
Marco Nasti|ST|23|1626|ITA
Gabriel Herzuah|ST|18|150|GHA
Federico Bonazzoli|ST|29|1922|ITA` },
    { id: 'sampdoria', name: 'Сампдория', city: 'Генуя', stadium: 'Stadio Comunale Luigi Ferraris', cap: 36703, colors: ['#1b5faa', '#ffffff'], players: `
Nicholas Scardigno|GK|20|285|ITA
Peter Vindahl Jensen|GK|28|1101|DEN
Andrey Krastev|GK|18|150|BUL
Samuelle Massolo|GK|30|125|ITA
Bjorn Meijer|LB|23|2438|NED
Mattia Viti|CB|24|4023|ITA
Stefan Gartenmann|CB|29|1064|SUI
Luca Ravanelli|CB|29|1325|ITA
Filippo Delli Carri|CB|27|1247|ITA
Alex Ferrari|CB|32|166|ITA
Oliver Abildgaard|CB|30|230|DEN
Alessandro Di Pardo|RB|27|870|ITA
Karim Diop|CB|17|150|ITA
Federico Piermattei|CB|18|150|ITA
Noah Mondani|CB|17|150|ITA
Liam Henderson|CM|30|600|SCO
Manuel Cicconi|LB|29|670|ITA
Lorenzo Insigne|AM|35|775|ITA
Tjaš Begić|AM|23|1387|SVN
Yari Verschaeren|AM|25|2373|BEL
Danel Sinani|AM|29|1904|LUX
Fabio Depaoli|RB|29|601|ITA
Francesco Conti|CM|22|1446|ITA
Leo Rodella|CM|18|150|ITA
Leonardo Cosi|CM|17|150|ITA
Kevin Mbabu|RB|31|1103|SUI
Antoine Makoumbou|DM|28|2087|CGO
Salvatore Esposito|CM|26|2765|ITA
Nikola Sekulov|ST|24|389|ITA
Tobias Lauritsen|ST|29|2485|NOR
Yann Karamoh|RW|28|618|FRA
Giuseppe Forte|LW|18|150|ITA
Lorenzo Mezzotero|ST|18|150|ITA
Gennaro Tutino|ST|30|694|ITA` },
    { id: 'catanzaro', name: 'Катандзаро', city: 'Катандзаро', stadium: 'Stadio Nicola Ceravolo', cap: 14650, colors: ['#ffd700', '#e30613'], players: `
Christian Marietta|GK|24|348|ITA
Mirko Pigliacelli|GK|33|248|ITA
Edoardo Borrelli|GK|22|150|ITA
Marcello Piras|CB|22|206|ITA
Raul Tassoni|CB|19|150|ITA
Marco Imperiale|CB|27|854|ITA
Matias Antonini Lui|CB|28|966|BRA
Niccolò Postiglione|CB|21|889|ITA
Marco Ruggero|CB|26|805|ITA
Bruno Verrengia|CB|23|408|ITA
Nicolò Buso|AM|26|668|ITA
Pietro Iemmello|AM|34|584|ITA
Jacopo Petriccione|DM|31|272|ITA
Samuel Giovane|AM|23|1108|ITA
Simone Pafundi|AM|20|4902|ITA
Federico Cassa|CM|20|570|ITA
Antonio Candela|RW|26|643|ITA
Franky Tchaouna|CM|21|344|CHA
Federico Di Francesco|LB|32|252|ITA
Gabriele Alesi|LB|22|1339|ITA
Ruggero Frosinini|CB|25|489|ITA
Marco D'Alessandro|LB|35|277|ITA
Francesco Reita|CM|18|150|ITA
Mehdi Dorval|LB|25|1454|ALG
Nicola Mosti|CM|28|577|ITA
Andrej Pogacar|ST|24|169|SVN
Solomon Loubao|ST|20|150|FRA
Alejo Garnica|ST|22|150|ARG
N'Dri Koffi|ST|24|280|CIV
Franck Tchaouna|ST|21|242|CHA
Emanuele Pecorino|ST|25|388|ITA
Gabriel Arditi|ST|20|631|ITA` },
  ],
});
