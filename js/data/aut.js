// Австрийская Бундеслига 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'aut', name: 'Австрийская Бундеслига', short: 'Австрия', country: 'AUT', tier: 1, weekday: 6,
  autumn: { from: '08-01', rounds: 11 }, spring: { from: '02-06', rounds: 11 },
  ticket: 12, prize: [4000, 3750, 3450, 3200, 2900, 2650, 2350, 2100, 1800, 1550, 1250, 1000],
  teams: [
    { id: 'rapid', name: 'Рапид', city: 'Вена', stadium: 'Allianz Stadion', cap: 28345, colors: ['#00a650', '#ffffff'], players: `
Niklas Hedl|GK|25|914|AUT
Paul Gartler|GK|29|116|AUT
Benjamin Göschl|GK|20|261|AUT
Eaden Roka|RB|19|864|AUT
Jakob Schöller|CB|20|1987|AUT
Serge Raux Yao|CB|27|2316|FRA
Jonas Auer|LB|26|223|AUT
Jannes-Kilian Horn|LB|29|535|GER
Dominic Vincze|CB|22|947|AUT
Nenad Cvetković|CB|30|793|SRB
Furkan Demir|RB|21|832|AUT
Bendegúz Bolla|RB|26|1594|HUN
Martin Ndzie|DM|23|932|CMR
Matthias Seidl|DM|25|1622|AUT
Nicolas Bajlicz|DM|22|915|AUT
Lorenz Szladits|CM|19|283|AUT
Marco Tilio|RW|25|399|AUS
Tonni Adamsen|ST|31|1193|DEN
Ercan Kara|ST|30|615|AUT
Petter Nosakhare Dahl|LW|23|1970|NOR
Nikolaus Wurmbrand|AM|20|5361|AUT
Louis Schaub|LW|31|228|AUT
Yusuf Demir|RW|23|957|AUT
Moulaye Haïdara|RW|20|627|MLI
Daniel Nunoo|ST|20|666|GHA
Claudy M'Buyi|ST|27|858|FRA` },
    { id: 'salzburg', name: 'Ред Булл Зальцбург', city: 'Зальцбург', stadium: 'Red Bull Arena', cap: 31895, colors: ['#e30613', '#ffffff'], players: `
Christian Früchtl|GK|26|824|GER
Nikola Šarčević|GK|19|621|AUT
Christian Zawieschitzky|GK|19|300|AUT
John Mellberg|RB|20|2009|SWE
Frans Krätzig|LB|23|2080|GER
Nikolas Veratschnig|RB|23|1915|AUT
Tim Drexler|CB|21|3690|GER
Stefan Lainer|RB|34|328|AUT
Dominik Schmid|LB|28|1907|SUI
Leandro Morgalla|RB|22|2380|GER
Kévin Boma|CB|23|5940|TOG
Valentin Zabransky|CB|19|842|AUT
Anrie Chase|CB|22|1707|JPN
Soumaïla Diabaté|CM|21|6100|MLI
Umut Tohumcu|CM|22|4271|GER
Sota Kitano|AM|22|5624|JPN
Bartosz Mazurek|DM|19|2672|POL
Abubakr Barry|DM|26|2166|GAM
Jesper Lindstrøm|AM|26|2831|DEN
Justin Omoregie|CB|23|485|AUT
Haris Tabaković|ST|32|2466|BIH
Yorbe Vertessen|ST|25|5152|BEL
Karim Konaté|ST|22|13380|CIV
Edmund Baidoo|RW|20|9167|GHA
Damir Redzic|RW|23|3621|HUN
Gaoussou Diakite|ST|21|4150|MLI
Aboubacar Camara|ST|20|1215|BFA
Enrique Aguilar|LW|19|1521|SUI` },
    { id: 'lask', name: 'ЛАСК', city: 'Линц', stadium: 'Raiffeisen Arena', cap: 19080, colors: ['#000000', '#ffffff'], players: `
Lukas Jungwirth|GK|22|3986|AUT
Tobias Schützenauer|GK|29|65|AUT
Christof Katzmayr|GK|18|300|AUT
Fabian Schillinger|GK|19|300|AUT
Miguel Freckleton|CB|23|541|ENG
Xavier Mbuyamba|CB|24|1246|NED
Andrés Andrade|CB|28|1359|PAN
Manoël Verhaeghe|CB|18|1831|BEL
Daniel Elfadli|CB|29|1958|GER
Yvan Dibango|LB|24|1162|CMR
Alemão|CB|23|1203|BRA
Cheikne Kébé|CB|20|300|MLI
George Bello|LB|24|1934|USA
Art Smakaj|DM|23|634|KVX
Melayro Bogarde|DM|24|2496|SUR
Kryštof Daněk|AM|23|1696|CZE
Robert Ljubičić|CM|27|1805|AUT
Alessandro Schöpf|DM|32|533|AUT
Kasper Jørgensen|RB|26|2283|DEN
Florian Flecker|RB|30|151|AUT
Sascha Horvath|DM|30|1309|AUT
Jonas Ilk|DM|19|300|AUT
Samuel Adeniran|ST|28|2040|USA
Moses Usor|ST|24|3994|NGA
Saša Kalajdžić|ST|29|2516|AUT
Ramiz Harakaté|ST|24|1210|FRA
Christoph Lang|ST|24|689|AUT
Naël Kane|RW|20|149|CAN` },
    { id: 'sturm', name: 'Штурм', city: 'Грац', stadium: 'Stadion Graz-Liebenau', cap: 17425, colors: ['#000000', '#ffffff'], players: `
Ammar Helac|GK|28|99|AUT
Elias Lorenz|GK|20|285|AUT
Даниил Худяков|GK|22|1452|RUS
Joshua Quarshie|CB|22|4112|GER
Albert Vallci|CB|31|366|AUT
Petar Petrović|CB|21|1264|SRB
Arjan Malić|RB|21|1500|BIH
Luís Balbo|LB|20|1165|VEN
Jürgen Heil|RB|29|349|AUT
Paul-Friedrich Koller|CB|24|1145|AUT
Jon Gorenc Stankovič|DM|30|1299|SVN
Filip Rózga|LW|20|2409|POL
Отар Китеишвили|AM|30|1866|GEO
Гизо Мамагеишвили|AM|23|686|GEO
Emran Soglo|LB|21|535|FRA
Simon Seidl|AM|24|854|AUT
Luca Weinhandl|DM|17|2755|AUT
Julian Halwachs|CM|23|142|AUT
Jacob Hödl|RB|19|1724|AUT
Valmir Matoshi|LW|23|1173|KVX
Leon Grgić|ST|20|2177|CRO
Axel Kayombo|ST|20|1696|COD
Oumar Diakité|ST|22|3959|CIV
Szymon Włodarczyk|ST|23|559|POL
Seedy Jatta|ST|23|1206|NOR
Belmin Beganović|ST|22|1177|BIH
Nelson Weiper|ST|21|10183|GER` },
    { id: 'ried', name: 'Рид', city: 'Рид-им-Иннкрайс', stadium: 'BWT X Oberösterreichische Arena', cap: 7334, colors: ['#000000', '#00a650'], players: `
Andreas Leitner|GK|32|275|AUT
Hidajet Hankić|GK|32|120|BIH
Dominik Stoger|GK|20|314|AUT
Felix Wimmer|GK|28|169|AUT
Dejan Radonjić|CB|21|641|AUT
Oliver Sorg|LB|19|874|AUT
Samuel Chukwudi|CB|23|279|FRO
Luka Capan|CB|31|155|CRO
Oliver Steurer|CB|31|192|GER
Alessandro Goiginger|CB|17|300|AUT
Fabian Lechner|LB|20|257|AUT
Lukas Malicsek|CM|27|233|AUT
Yusuf Maart|DM|31|228|RSA
Martin Rasner|CM|31|117|AUT
Jussef Nasrawe|AM|19|775|IRQ
Ante Bajić|RW|31|269|AUT
Joris Boguo|RW|19|813|AUT
Philipp Pomer|LB|29|227|AUT
Fabian Rossdorfer|RB|20|731|AUT
Stefan Schwab|DM|36|110|AUT
Nermin Mesic|CM|20|300|GER
Leonit Zeqiri|CM|18|300|KVX
Conrad Scholl|CM|19|300|GER
Niama Sissoko|ST|20|415|MLI
Jaedin Rhodes|LW|23|251|RSA
Tobias Lund Jensen|RW|20|566|DEN
Tino Kusanović|ST|18|727|CRO
Sefiwu Abubakar|ST|22|300|AUT
Evan Eghosa Aisowieren|ST|21|388|AUT
Raphael Pesu|ST|18|300|AUT
Isaac Kiese Thelin|ST|34|511|SWE` },
    { id: 'hartberg', name: 'Хартберг', city: 'Хартберг', stadium: 'PROfertil ARENA', cap: 5420, colors: ['#00a650', '#ffffff'], players: `
Luka Marić|GK|24|358|AUT
Harald Postl|GK|21|300|AUT
Ármin Pécsi|GK|21|959|HUN
Luca Pazourek|LB|21|679|AUT
Simon Freund|CB|21|300|AUT
Habib Coulibaly|CB|22|220|CIV
Manuel Pfeifer|LB|27|195|AUT
Paul Komposch|CB|25|418|AUT
Magnus Dalpiaz|LB|19|799|AUT
Fabian Wilfinger|CB|23|926|AUT
Lukas Spendlhofer|CB|33|254|AUT
Konstantin Schopp|CB|20|778|AUT
Benjamin Markuš|CM|25|773|SVN
Youba Diarra|CM|28|128|MLI
Jonas Karner|RB|22|315|AUT
Paul Bratschko|CM|21|75|AUT
Tobias Kainz|CM|33|282|AUT
Florian Gerstl|RW|23|207|AUS
Chilohem Onuoha|ST|21|243|GER
Nikolaus Feldhofer|LW|19|300|AUT
Angelo Gattermayer|ST|24|398|AUT
Matthias Postl|ST|21|200|AUT
Agustin Urrutia|ST|22|300|ARG
Oliver Lukić|LW|20|1295|CRO
Jed Drew|ST|23|382|AUS
Marco Hoffmann|ST|22|596|AUT
Lukas Fridrikas|ST|28|188|AUT
Andrija Radulović|RW|24|776|MNE
David Korherr|ST|24|144|AUT` },
    { id: 'gak', name: 'ГАК', city: 'Грац', stadium: 'Stadion Graz-Liebenau', cap: 17425, colors: ['#e30613', '#ffffff'], players: `
Jakob Meierhofer|GK|28|122|AUT
Cican Stanković|GK|33|123|AUT
Christoph Nicht|GK|32|81|AUT
Donovan Pines|CB|28|272|USA
Ludwig Vraa-Jensen|CB|21|334|DEN
Michael Sollbauer|CB|36|163|AUT
Yannick Oberleitner|CB|24|207|GER
Christoph Hasenhuettl|CB|16|300|AUT
Tim Trummer|RB|20|1785|AUT
Petar Marković|CB|20|304|AUT
Beres Owusu|CB|23|962|FRA
Liam Hermesh|DM|22|319|ISR
Tobias Koch|AM|25|202|AUT
Christian Lichtenberger|AM|30|213|AUT
Jacob Italiano|AM|25|269|AUS
Souleyman Mandey|AM|20|305|AUT
Christopher Cvetko|DM|29|145|AUT
Anderson|RB|28|314|BRA
Peter Michorl|AM|31|336|AUT
Matthias Gragger|LW|24|292|AUT
Julian Rumpl|CM|18|300|AUS
Anthony Smits|RW|21|349|NED
Daniel Maderner|ST|31|167|AUT
Mark Grosse|ST|27|142|AUT
Alexander Hofleitner|ST|26|362|AUT
Ismaël Guerti|ST|22|273|MAR
Leon Klassen|LW|26|422|GER
Maximilian Jus|ST|21|117|AUT` },
    { id: 'tirol', name: 'Тироль', city: 'Ваттенс', stadium: 'Tivoli Stadion Tirol', cap: 17000, colors: ['#00a650', '#ffffff'], players: `
Salko Hamzić|GK|20|731|BIH
Alexander Eckmayr|GK|27|114|AUT
Felix Libiseller|GK|19|300|AUT
Julian Margreiter|GK|16|300|AUT
David Gugganig|CB|29|129|AUT
Drew Murray|RB|20|260|USA
David Kubatta|CB|22|168|GER
Marco Boras|CB|25|579|CRO
David Jaunegg|CB|23|198|AUT
Moritz Oswald|LB|24|297|AUT
Гиорги Бедианашвили|CB|19|300|GEO
Nemanja Čelić|CB|27|135|AUT
Marc Striednig|DM|20|243|AUT
Murat Şatin|AM|30|215|AUT
Mazou Bambara|CM|21|200|BFA
David Falkner|CM|19|436|AUT
Matthäus Taferner|DM|25|415|AUT
Michael Neuner|CM|20|300|AUT
Raphael Gschösser|CM|20|238|AUT
Thomas Goiginger|AM|33|127|AUT
Moritz Wels|AM|22|640|AUT
Simon Wieser|CM|19|300|AUT
Quincy Butler|RW|25|235|USA
Nikolai Baden|AM|26|766|DEN
Thomas Sabitzer|ST|26|233|AUT
Lukas Hinterseer|ST|35|141|AUT
Michael Olakigbe|LW|22|413|NGA
Husein Balić|RW|30|116|AUT` },
    { id: 'altach', name: 'Альтах', city: 'Альтах', stadium: 'Stadion Schnabelholz', cap: 8500, colors: ['#000000', '#ffd700'], players: `
Dejan Stojanović|GK|33|334|AUT
Elias Scherf|GK|23|209|AUT
Daniel Antosch|GK|26|216|AUT
Paul Piffer|GK|20|166|AUT
Halil Basar|CB|18|300|TUR
Henrique Bell|CB|19|300|BRA
Rassa Rahmani|CB|26|262|SWE
Lukas Jäger|CB|32|157|AUT
Jakob Brandtner|LB|20|539|AUT
Benedikt Zech|CB|35|161|AUT
Filip Milojević|CB|21|898|AUT
Vesel Demaku|CM|26|234|KVX
Denizcan Cosgun|CM|24|298|AUT
Mike-Steven Bähre|CM|31|221|GER
Johannes Naschberger|RB|26|265|AUT
Erkin Yalcin|LB|22|243|AUT
Yanis Eisschill|CM|21|475|AUT
Salif Tietietta|CM|21|300|BFA
Niklas Niehoff|RW|22|682|GER
Nemanja Krstovic|CM|18|300|AUT
Adrian Vonbrül|CM|18|300|AUT
Benjamin Böckle|LW|24|584|AUT
Marko Raguž|ST|28|259|AUT
Ousmane Diawara|ST|27|294|MLI
Shingo Nakano|ST|21|300|JPN
Patrick Greil|LW|30|581|AUT
Srdjan Hrstić|ST|23|589|SRB
Yann Massombo|RW|26|367|FRA
Rodney Elongo-Yombo|LW|25|306|GER` },
    { id: 'lustenau', name: 'Аустрия Лустенау', city: 'Лустенау', stadium: 'SUN MINIMEAL Arena', cap: 5138, colors: ['#00a650', '#ffffff'], players: `
Domenik Schierl|GK|32|126|AUT
Phillip Böhm|GK|24|140|GER
Frederic Flatz|GK|20|300|AUT
Danilo Soares|LB|34|198|BRA
Fabian Gmeiner|RB|29|165|AUT
Novak Rajic|CB|18|300|AUT
Emmanuel Chukwu|CB|19|339|NGA
Robin Voisine|CB|24|247|FRA
Anilson|RB|25|293|BRA
Lukas Ibertsberger|LB|23|215|AUT
Niklas Pertlwieser|CB|22|322|AUT
Matthias Maak|CB|34|113|AUT
Dion Kacuri|DM|22|510|KVX
Ibrahim Ouattara|CM|22|283|CIV
Sacha Delaye|CM|24|207|FRA
Lord Afrifa|AM|20|417|GHA
Pius Grabher|DM|33|117|AUT
Lenn Jastremski|ST|25|238|GER
Alieu Conateh|RW|19|628|GAM
Dominik Weixelbraun|RW|22|244|AUT
Precious Benjamin|ST|20|307|NGA
Albin Gashi|LW|29|215|AUT
Seydou Diarra|LW|22|264|MLI
Antonio Verinac|ST|21|376|CRO
Melih Akbulut|ST|20|258|AUT
Haris Ismailcebioglu|LW|23|243|AUT` },
    { id: 'austria_wien', name: 'Аустрия', city: 'Вена', stadium: 'Generali Arena', cap: 18944, colors: ['#5b2b82', '#ffffff'], players: `
Samuel Şahin-Radlinger|GK|33|204|AUT
Lukas Wedl|GK|31|65|AUT
Kenan Jusic|GK|21|362|AUT
Mirko Kos|GK|29|181|AUT
Ibrahim Buhari|CB|25|1186|NGA
Jonas Feddersen|CB|19|706|GER
Aleksandar Dragović|CB|35|431|AUT
Matteo Schablas|LB|21|473|AUT
Philipp Wiesinger|CB|32|273|AUT
Johannes Handl|CB|28|229|AUT
Valentino Müller|DM|27|495|AUT
Philipp Maybach|DM|18|2478|AUT
Vasilije Markovic|DM|18|2708|AUT
Sanel Šaljić|AM|20|1844|AUT
Kang-Hee Lee|DM|25|481|KOR
Tae-Seok Lee|LB|24|1885|KOR
Julian Hettwer|AM|23|838|GER
Florian Wustinger|DM|23|201|AUT
Reinhold Ranftl|RB|34|203|AUT
Manfred Fischer|AM|31|291|AUT
Noah Botić|ST|24|504|AUS
Manprit Sarkaria|LW|30|402|AUT
Kelvin Boateng|ST|26|444|UGA
Johannes Eggestein|ST|28|1713|GER
Abdoulaye Kanté|ST|21|251|CIV
Hasan Deshishku|ST|18|639|AUT` },
    { id: 'wolfsberger', name: 'Вольфсберг', city: 'Вольфсберг', stadium: 'Lavanttal Arena', cap: 9000, colors: ['#000000', '#ffffff'], players: `
Lukas Gütlbauer|GK|25|239|AUT
Lior Gliklich|GK|23|351|ISR
David Skubl|GK|25|149|AUT
Austin Uzondu|CB|20|300|NGA
Raffael Behounek|CB|29|395|AUT
Cheick Diabaté|CB|22|1103|CIV
Adama Dramé|CB|21|378|CIV
Matteo Kitz|CB|19|538|AUT
Nicolas Wimmer|CB|31|419|AUT
David Djuric|CB|20|242|SRB
Boris Matić|RB|22|1098|SRB
Simon Piesinger|CB|34|143|AUT
Aaron Schwarz|LW|22|300|AUT
Michael Schweiger|CM|21|300|GER
Отар Мамагеишвили|DM|23|498|GEO
Veljko Vukojević|CM|20|329|SRB
Mickael Dosso|AM|21|284|CIV
Marco Sulzner|DM|23|336|AUT
Fabian Wohlmuth|RB|24|575|AUT
Emmanuel Agyemang|DM|22|757|GHA
Dominik Fitz|CM|27|954|AUT
René Renner|LB|32|135|AUT
Luca Hassler|ST|22|316|AUT
Giacomo Vrioni|ST|28|425|ALB
Donis Avdijaj|LW|30|209|KVX
Marco Schabauer|RW|21|478|AUT
Thorsten Schriebl|RW|27|234|AUT
Phillip Verhounig|ST|20|501|AUT
Markus Pink|ST|35|151|AUT
Sankara Karamoko|ST|22|749|CIV` },
  ],
});
