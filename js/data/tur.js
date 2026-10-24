// Суперлига 2026/27. Составы и рыночная стоимость — Transfermarkt (октябрь 2026), стадионы — FotMob.
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'tur', name: 'Суперлига', short: 'Турция', country: 'TUR', tier: 1, weekday: 0,
  autumn: { from: '08-09', rounds: 17 }, spring: { from: '01-17', rounds: 17 },
  ticket: 15, prize: [15000, 14300, 13600, 12900, 12200, 11450, 10750, 10050, 9350, 8650, 7950, 7250, 6550, 5800, 5100, 4400, 3700, 3000],
  teams: [
    { id: 'galatasaray', name: 'Галатасарай', city: 'Стамбул', stadium: 'RAMS Park', cap: 53798, colors: ['#a90432', '#fdb912'], players: `
Uğurcan Çakır|GK|30|13000|TUR|2030
Jankat Yılmaz|GK|22|2000|TUR|2027
Günay Güvenç|GK|35|200|TUR|2028
Enes Emre Büyük|GK|20|500|TUR|2028
El Chadaille Bitshiabu|CB|21|18000|FRA|2027
Davinson Sánchez|CB|30|16000|COL|2029
Ismail Jakobs|LB|27|8000|SEN|2027
Eren Elmalı|LB|26|5000|TUR|2028
Wilfried Singo|RB|25|20000|CIV|2030
Roland Sallai|RB|29|12000|HUN|2028
Lesley Ugochukwu|DM|22|22000|FRA|2027
Lucas Torreira|DM|30|9000|URU|2028
Mario Lemina|DM|33|3500|GAB|2028
Gabriel Sara|CM|27|27000|BRA|2029
Renato Nhaga|CM|19|6000|GNB|2030
İlkay Gündoğan|CM|36|1500|GER|2027
Алексей Батраков|AM|21|28000|RUS|2031
Barış Alper Yılmaz|LW|26|30000|TUR|2028
Berat Luş|LW|19|1000|TUR|2029
Yunus Akgün|RW|26|18000|TUR|2029
Leroy Sané|RW|30|15000|GER|2028
Victor Osimhen|ST|27|65000|NGA|2029
Deniz Gül|ST|22|10000|TUR|2031
Ada Yüzgeç|ST|17|100|TUR|2029` },
    { id: 'fenerbahce', name: 'Фенербахче', city: 'Стамбул', stadium: 'Şükrü Saracoğlu', cap: 47834, colors: ['#ffed00', '#002d72'], players: `
Ederson|GK|33|8000|BRA|2028
Tarık Çetin|GK|29|600|TUR|2029
Mert Günok|GK|37|300|TUR|2028
Kuzey Sapaz|GK|18|500|TUR|2028
Kojo Oppong|CB|22|12000|GHA|2030
Milan Škriniar|CB|31|8000|SVK|2029
Yiğit Efe Demir|CB|22|4000|TUR|2029
Archie Brown|LB|24|18000|ENG|2028
Levent Mercan|LB|25|5000|TUR|2028
Mert Müldür|RB|27|7000|TUR|2027
Nélson Semedo|RB|32|4000|POR|2027
Ognjen Mimović|RB|22|2500|SRB|2029
İsmail Yüksek|DM|27|15000|TUR|2028
N'Golo Kanté|DM|35|4000|FRA|2028
Bartuğ Elmaz|DM|23|3000|TUR|2028
Mattéo Guendouzi|CM|27|27000|FRA|2030
İrfan Can Kahveci|AM|31|2500|TUR|2028
Kerem Aktürkoğlu|LW|28|18000|TUR|2029
Oğuz Aydın|LW|25|9000|TUR|2028
Alaettin Ekici|LW|17|300|TUR|2028
Mason Greenwood|RW|25|40000|ENG|2030
Dorgeles Nene|RW|23|20000|MLI|2030
Vedat Muriqi|ST|32|7000|KVX|2029
Romelu Lukaku|ST|33|6000|BEL|2027
Çağrı Balta|ST|18|500|TUR|2031` },
    { id: 'trabzonspor', name: 'Трабзонспор', city: 'Трабзон', stadium: 'Papara Park', cap: 41513, colors: ['#800020', '#4fb3e8'], players: `
André Onana|GK|30|8000|CMR|2027
Onuralp Çevikkan|GK|20|800|TUR|2028
Ahmet Yıldırım|GK|19|500|TUR|2029
Erol Can Çolak|GK|20|500|TUR|2028
Chibuike Nwaiwu|CB|23|18000|NGA|2030
Cenk Özkacar|CB|26|3000|TUR|2029
Samet Akaydin|CB|32|1000|TUR|2028
Mustafa Eskihellaç|LB|29|4000|TUR|2029
Wagner Pina|RB|23|12000|CPV|2029
Fabinho|DM|33|8000|BRA|2028
Melih Kabasakal|DM|30|1000|TUR|2028
Tim Jabol-Folcarelli|CM|26|7000|FRA|2029
Ozan Tufan|CM|31|1500|TUR|2027
Ernest Muci|AM|25|11000|ALB|2029
Aral Şimşir|LW|24|15000|TUR|2030
Noah Saviolo|LW|22|12000|POR|2031
Mohamed Salah|RW|34|17000|EGY|2028
Franculino|ST|22|22000|GNB|2030` },
    { id: 'besiktas', name: 'Бешикташ', city: 'Стамбул', stadium: 'Tüpraş Stadyumu', cap: 43500, colors: ['#000000', '#ffffff'], players: `
Alexander Nübel|GK|30|10000|GER|2029
Doğan Alemdar|GK|23|2000|TUR|2030
Emir Yaşar|GK|20|100|TUR|2029
Emmanuel Agbadou|CB|29|14000|CIV|2030
Emirhan Topçu|CB|26|9000|TUR|2028
Tiago Djaló|CB|26|8000|POR|2028
Yasin Özcan|CB|20|5000|TUR|2027
Azem Yortaç|CB|18|500|TUR|2028
Kassoum Ouattara|LB|22|12000|CIV|2030
Rıdvan Yılmaz|LB|25|7000|TUR|2028
Amir Murillo|RB|30|7000|PAN|2028
Taylan Bulut|RB|20|5000|GER|2030
Wilfred Ndidi|DM|29|6000|NGA|2028
Salih Özcan|DM|28|6000|TUR|2029
Kartal Yılmaz|DM|25|2000|TUR|2028
Junior Olaitan|CM|24|12000|BEN|2029
Leandro Trossard|LW|31|18000|BEL|2029
İlhan Fakılı|LW|20|7000|TUR|2030
Ozan Sevim|LW|19|500|TUR|2028
Ernest Poku|RW|22|22000|NED|2027
Vaclav Cerny|RW|29|7000|CZE|2028
Dušan Vlahović|ST|26|32000|SRB|2029
Hyeon-gyu Oh|ST|25|15000|KOR|2029
Semih Kılıçsoy|ST|21|8000|TUR|2028
Mustafa Hekimoğlu|ST|19|5000|TUR|2028
Ahmet Sami Bircan|ST|19|100|TUR|2028` },
    { id: 'basaksehir', name: 'Истанбул Башакшехир', city: 'Стамбул', stadium: 'Başakşehir Fatih Terim Stadyumu', cap: 17319, colors: ['#f26522', '#1d3c8f'], players: `
Muhammed Şengezer|GK|29|3500|TUR|2028
Deniz Dilmen|GK|21|1500|TUR|2029
Volkan Babacan|GK|38|50|TUR|2027
Ege Öztürk|GK|18|500|TUR
Emin Bayram|CB|23|4000|TUR|2030
Hamza Güreler|CB|20|1500|TUR|2028
Ousseynou Ba|CB|30|1000|SEN|2027
Саба Харебашвили|LB|18|2500|GEO|2030
Michal Karbownik|RB|25|1800|POL|2029
Onur Bulut|RB|32|400|TUR|2027
Jakub Kaluzinski|DM|23|2500|POL|2029
Onur Ergün|DM|33|150|TUR|2027
Umut Güneş|CM|26|3000|TUR|2028
Olivier Kemen|CM|30|2000|CMR|2027
Berkay Özcan|CM|28|1000|TUR|2027
Аббосбек Файзуллаев|LW|23|7000|UZB|2030
Ivan Brnic|LW|25|2000|CRO|2028
Andreas Skov Olsen|RW|26|5000|DEN|2027
Yusuf Sarı|RW|27|4000|TUR|2028
Edin Visca|RW|36|100|BIH|2027
Bertuğ Yıldırım|ST|24|8000|TUR|2029
Елдор Шомуродов|ST|31|7000|UZB|2028
Davie Selke|ST|31|1500|GER|2027
Umut Bozok|ST|30|1500|TUR|2028` },
    { id: 'goztepe', name: 'Гёзтепе', city: 'Измир', stadium: 'ISONEM Park Gürsel Aksel Stadyumu', cap: 30035, colors: ['#ffd700', '#e30613'], players: `
Arda Özçimen|GK|24|800|TUR|2027
Şamil Öztürk|GK|21|100|TUR|2028
Nevzat Üzel|GK|19|500|TUR|2030
Malcom Bokele|CB|26|5000|CMR|2027
Taha Altıkardeş|CB|23|4000|TUR|2028
Ege Yıldırım|CB|19|1000|TUR|2029
Noah Sonko Sundberg|CB|30|900|GAM|2028
Allan Godói|CB|33|100|BRA|2027
Novatus Miroshi|DM|24|5000|TAN|2028
Tino Anjorin|CM|24|4000|ENG|2027
Alex Matos|CM|22|1500|ENG|2027
Rhaldney|CM|27|1000|BRA|2028
Arda Okan Kurtulan|RW|23|8000|TUR|2029
Richard Akonnor|LW|22|1500|UAE|2027
Alexis Antunes|AM|26|1500|SUI|2029
Efkan Bekiroğlu|AM|31|800|TUR|2027
Juan|ST|24|12000|BRA|2029
Janderson|ST|27|6000|BRA|2028
André Henrique|ST|24|3000|BRA|2030
Sinclair Armstrong|ST|23|2500|IRL|2030
Bekir Turaç Böke|ST|27|1000|TUR|2029
Gökdeniz Bayrakdar|ST|24|700|TUR|2029` },
    { id: 'samsunspor', name: 'Самсунспор', city: 'Самсун', stadium: 'Samsun Yeni 19 Mayıs Stadyumu', cap: 34658, colors: ['#e30613', '#ffffff'], players: `
Okan Kocuk|GK|31|2000|TUR|2028
Bilal Bayazıt|GK|27|1800|TUR|2030
Efe Yiğit Üstün|GK|18|500|TUR|2028
Efe Berat Töruz|GK|20|500|TUR|2029
Strahinja Erakovic|CB|25|6000|SRB|2027
Gabriele Guarino|CB|22|4000|ITA|2031
Igor Drapiński|CB|22|2500|POL|2031
Yunus Emre Çift|CB|23|600|TUR|2027
Bedirhan Çetin|CB|20|100|TUR|2030
Logi Tómasson|LB|26|4000|ISL|2029
Enes Albak|LB|21|150|TUR|2027
Joe Mendes|RB|23|4000|SWE|2030
Mustafa Tan|RB|21|200|TUR|2028
Elliot Watt|DM|26|2500|SCO|2030
Antoine Sekongo|CM|22|4000|MLI|2031
Oskar Øhlenschlæger|CM|22|3500|DEN|2031
Yalçın Kayan|CM|27|1200|TUR|2028
Samed Onur|CM|24|1000|TUR|2029
Afonso Sousa|AM|26|2000|POR|2030
Jaurès Assoumou|LW|24|2000|CIV|2030
Elayis Tavsan|RW|25|1500|TUR|2030
Saikuba Jarju|RW|18|1500|GAM|2029
Tanguy Coulibaly|RW|25|1200|FRA|2028
Mohamed Bayo|ST|28|4500|GUI|2030` },
    { id: 'rizespor', name: 'Ризеспор', city: 'Ризе', stadium: 'Çaykur Didi Stadyumu', cap: 15332, colors: ['#00a650', '#0055a4'], players: `
Yahia Fofana|GK|26|6000|CIV|2028
Zafer Görgen|GK|26|800|TUR|2027
Efe Doğan|GK|22|150|TUR|2029
Hasan Yağız Döne|GK|16|500|TUR
Siaka Bakayoko|CB|21|2500|FRA|2029
Attila Mocsi|CB|26|2000|HUN|2027
Modibo Sagnan|CB|27|2000|MLI|2028
Tayyip Talha Sanuç|CB|26|1000|TUR|2028
Yakup Ayan|CB|18|500|TUR|2028
Zakaria Ariss|LB|22|2000|MAR|2030
Umut Erdem|LB|22|600|TUR|2029
Mithat Pala|RB|26|4000|TUR|2028
Taha Şahin|RB|26|3000|TUR|2028
Qazim Laci|CM|30|2500|ALB|2028
Ibrahim Olawoyin|CM|28|2000|NGA|2027
Can Bozdogan|CM|25|2000|GER|2028
Moussa Diakité|CM|22|1000|MLI|2027
Emirhan Yılmaz|CM|22|50|TUR|2028
Dal Varesanovic|AM|25|1200|BIH|2027
Valentin Mihăilă|LW|26|3500|ROU|2029
Emrecan Bulut|LW|23|1200|TUR|2028
Adedire Mebude|RW|22|1500|SCO|2030
Iustin Doicaru|RW|19|1500|ROU|2031
Gennaro Borrelli|ST|26|3000|ITA|2027
Ali Sowe|ST|32|1000|GAM|2028
Mustafa Coşkun Tosun|ST|17|150|TUR|2029` },
    { id: 'konyaspor', name: 'Коньяспор', city: 'Конья', stadium: 'Medaş Konya Büyükşehir Stadyumu', cap: 42276, colors: ['#00a650', '#ffffff'], players: `
Deniz Ertaş|GK|21|3500|TUR|2027
Bahadır Güngördü|GK|30|700|TUR|2027
Egemen Aydın|GK|19|50|TUR|2027
Emir Gündoğdu|GK|17|500|TUR|2029
Uğurcan Yazğılı|CB|27|2000|TUR|2027
Chidozie Awaziem|CB|29|2000|NGA|2028
Rayyan Baniya|CB|27|1000|TUR|2030
Ata Yanık|CB|17|50|TUR|2028
Da Mata|CB|20|500|BRA|2029
Arthur Masuaku|LB|32|1500|COD|2028
Arif Boşluk|LB|23|800|TUR|2029
Yhoan Andzouana|RB|29|800|CGO|2028
Ahmet Oğuz|RB|33|200|TUR|2027
Rajmund Tóth|DM|22|2500|HUN|2030
Marko Jevtović|DM|33|400|SRB|2027
Mücahit Ibrahimoglu|DM|21|150|AUT|2028
Ömer Çobanoğlu|DM|19|500|TUR|2030
Melih İbrahimoğlu|CM|26|2500|TUR|2027
Diogo Gonçalves|AM|29|2000|POR|2028
Enis Bardhi|AM|31|1500|MKD|2027
Jean-Luc Dompé|LW|31|1500|FRA|2028
Ebrima Colley|LW|26|1000|GAM|2027
Emir Bars|LW|21|450|TUR|2029
Deniz Türüç|RW|33|400|TUR|2028
Jackson Muleka|ST|27|2800|COD|2027
Mostafa Mohamed|ST|28|2000|EGY|2029
Enis Destan|ST|24|1800|TUR|2029` },
    { id: 'kocaelispor', name: 'Коджаэлиспор', city: 'Измит', stadium: 'Turka Arac Muayene Kocaeli Stadyumu', cap: 35000, colors: ['#00a650', '#000000'], players: `
Serhat Öztaşdelen|GK|21|1000|TUR|2030
Aleksandar Jovanović|GK|33|400|SRB|2027
Onurcan Piri|GK|32|200|TUR|2027
Talha Polat|GK|19|500|TUR|2027
Matej Maglica|CB|28|1200|CRO|2028
Emir Ortakaya|CB|22|600|TUR|2028
Onur Öztonga|CB|26|300|TUR|2027
Muharrem Cinan|LB|28|300|TUR|2027
Anfernee Dijksteel|RB|29|1200|SUR|2027
Uğur Kaan Yıldız|RB|24|600|TUR|2028
Show|DM|27|1500|ANG|2029
Mahamadou Susoho|DM|21|1000|ESP|2028
Hulusi Destici|DM|18|500|TUR|2030
Berkan Kutlu|CM|28|2500|TUR|2027
Tayfur Bingöl|CM|33|200|TUR|2027
Ege Bilim|CM|20|50|TUR|2030
Tobias Gulliksen|AM|23|2200|NOR|2027
Rigoberto Rivas|LW|28|1000|HON|2027
Makana Baku|LW|28|800|GER|2028
Haydar Karataş|LW|19|100|TUR|2030
Gonçalo Sousa|RW|20|3000|POR|2027
Dan Agyei|RW|29|1200|GHA|2027
Bedirhan Yıldız|RW|21|50|TUR|2027
Metehan Altunbaş|ST|23|2000|TUR|2029
Florian Ayé|ST|29|1000|FRA|2028
Arda Özyar|ST|19|100|TUR|2031` },
    { id: 'alanyaspor', name: 'Аланьяспор', city: 'Аланья', stadium: 'GAIN Park Stadium', cap: 15000, colors: ['#f26522', '#00a650'], players: `
Mert Bayram|GK|21|300|TUR|2029
Paulo Victor|GK|39|50|BRA|2027
Mahmut Can Kara|GK|20|500|TUR|2028
Nuno Lima|CB|25|3000|POR|2029
Fidan Aliti|CB|33|900|KVX|2028
Bilal Demirağ|CB|17|250|TUR|2029
Bedirhan Özyurt|CB|23|200|TUR|2030
Maestro|DM|23|6000|ANG|2029
Gaius Makouta|DM|29|2000|CGO|2027
Baran Gezek|DM|21|1500|TUR|2030
İzzet Çelik|CM|22|250|TUR|2029
Florent Hadergjonaj|RW|32|1800|KVX|2027
Enes Keskin|RW|25|350|TUR|2029
Ruan|LW|21|4000|BRA|2030
Yusuf Özdemir|LW|25|2000|TUR|2028
Şahin Dik|LW|22|200|TUR|2031
Ianis Hagi|AM|28|1800|ROU|2027
İbrahim Kaya|AM|25|1500|TUR|2029
Meschack Elia|AM|29|1500|COD|2028
Emre Demir|AM|22|500|TUR|2029
Ui-jo Hwang|AM|34|400|KOR|2027
Arouna Soro|AM|19|500|CIV|2031
Arda Usluoğlu|ST|20|2000|TUR|2029
Iván Cédric|ST|24|1500|CMR|2030
Omar Ben Ali|ST|21|1200|TUN|2030` },
    { id: 'gaziantep', name: 'Газиантеп', city: 'Газиантеп', stadium: 'Gaziantep Stadyumu', cap: 35558, colors: ['#e30613', '#000000'], players: `
Kacper Tobiasz|GK|23|1000|POL|2029
Ataberk Dadakdeniz|GK|27|250|TUR|2027
Cemilhan Aslan|GK|18|500|TUR|2027
İbrahim Kağan Alkış|GK|20|500|TUR|2027
Abakar Sylla|CB|23|2500|CIV|2028
Arda Kızıldağ|CB|28|800|TUR|2027
Myenty Abena|CB|31|600|SUR|2027
Efe Sarıkaya|CB|20|250|TUR|2028
Kerim Çalhanoğlu|LB|24|700|GER|2028
Luis Pérez|RB|31|800|ESP|2027
Sabahattin Destici|RB|26|250|TUR|2028
Ogün Özçiçek|DM|27|500|TUR|2027
Drissa Camara|CM|24|4000|CIV|2028
Juninho Bacuna|CM|29|1500|CUW|2027
Karamba Gassama|CM|21|500|GAM|2029
Kacper Kozłowski|AM|23|7000|POL|2027
Victor Gidado|AM|22|800|NGA|2029
Mirza Cihan|LW|25|200|TUR|2028
Ali Osman Kalın|LW|18|50|TUR|2027
Sontje Hansen|RW|24|3000|CUW|2027
Deian Sorescu|RW|29|1500|ROU|2027
Enver Kulasin|RW|23|600|BIH|2028
Trivante Stewart|ST|26|1500|JAM|2027
Halil Dervişoğlu|ST|26|700|TUR|2027
Serdar Dursun|ST|35|200|TUR|2027` },
    { id: 'kasimpasa', name: 'Касымпаша', city: 'Стамбул', stadium: 'Recep Tayyip Erdoğan Stadyumu', cap: 14234, colors: ['#0055a4', '#ffffff'], players: `
Andreas Gianniotis|GK|33|200|GRE|2027
Ali Emre Yanar|GK|28|100|TUR|2027
Ege Albayrak|GK|19|500|TUR|2028
Adem Arous|CB|22|4000|TUN|2028
Matei Ilie|CB|23|2500|ROU|2030
Ahmet Taha Dağbaşı|CB|21|50|TUR|2030
Salih Arıcı|CB|18|500|TUR
Jakob Jessen|LB|22|1000|DEN|2030
Ömer Bayram|LB|35|50|TUR|2027
Ayberk Karapo|RB|22|2500|TUR|2030
Cláudio Winck|RB|32|700|BRA|2027
Andri Fannar Baldursson|DM|24|3000|ISL|2028
Elson Mendes|DM|21|1800|CPV|2030
Emirhan Boz|DM|20|700|TUR|2030
Atakan Müjde|DM|22|150|TUR|2027
Kerem Demirbay|CM|33|800|GER|2029
Thiemoko Diarra|LW|23|2000|MLI|2030
Marcus Rafferty|LW|22|1800|SWE|2030
Ali Yavuz Kol|LW|25|500|TUR|2027
Sercan Deniz|LW|19|300|TUR|2030
Jesurun Rak-Sakyi|RW|24|5000|GHA|2027
Emirhan Yiğit|RW|20|100|TUR|2028
Adrian Benedyczak|ST|25|7000|POL|2030
Güven Yalçın|ST|27|1000|TUR|2028
Muhammed Emin Bektaş|ST|20|200|TUR|2030
Sinan Alkaş|ST|19|150|TUR|2028` },
    { id: 'genclerbirligi', name: 'Генчлербирлиги', city: 'Анкара', stadium: 'Eryaman Stadyumu', cap: 20560, colors: ['#e30613', '#000000'], players: `
İrfan Can Eğribayat|GK|28|1200|TUR|2028
Gökhan Akkan|GK|31|200|TUR|2027
Berk Deniz Çukurcu|GK|18|500|TUR|2027
Metehan Baltacı|CB|23|1500|TUR|2027
Thalisson|CB|28|700|BRA|2027
Dimitrios Goutas|CB|32|500|GRE|2027
Ensar Çavuşoğlu|CB|24|400|TUR|2029
Arda Çağan Çelik|CB|21|500|TUR|2028
Abdurrahim Dursun|LB|27|300|TUR|2027
Hamza Aydar|LB|18|100|TUR|2028
Fıratcan Üzüm|RB|27|200|TUR|2027
Rafael Luís|DM|21|5000|POR|2028
Ousmane Diabate|DM|19|3000|GUI|2027
Cheikh Niasse|DM|26|2000|SEN|2027
Franco Tongya|CM|24|3000|ITA|2027
Oğulcan Ülgün|CM|28|1200|TUR|2027
Salih Uçan|CM|32|500|TUR|2028
Göktuğ Erdem|CM|23|50|TUR|2027
Victor Orakpo|LW|20|400|NGA|2027
Erk Aslan|LW|17|500|TUR
Tiago Gouveia|RW|25|3500|POR|2027
Adama Traoré|RW|31|1200|MLI|2027
Prince Martor Jr.|RW|19|100|LBR|2028
Sékou Koïta|ST|26|2500|MLI|2028
Pedro Mendes|ST|27|1200|POR|2028
Ayaz Özcan|ST|17|50|TUR|2028
Arda Akgül|ST|21|500|TUR|2027` },
    { id: 'eyupspor', name: 'Эюпспор', city: 'Стамбул', stadium: 'Esenyurt Necmi Kadıoğlu Stadyumu', cap: 4274, colors: ['#5b2b82', '#ffd700'], players: `
Horațiu Moldovan|GK|28|1500|ROU|2027
Emre Bilgin|GK|22|400|TUR|2028
Umut Keseci|GK|22|200|TUR|2029
Anıl Yaşar|CB|24|300|TUR|2027
Jawad El Yamiq|CB|34|300|MAR|2027
Zak Jules|CB|29|300|SCO|2028
Yiğit Demir|CB|23|150|TUR|2029
Berhan Kutlay Şatlı|CB|20|500|TUR|2029
Simone Giordano|LB|24|700|ITA|2028
Arda Yavuz|LB|20|50|TUR|2030
Talha Ülvan|RB|25|800|TUR|2028
Ömer Ahmet Ceyhan|RB|19|500|TUR|2029
Chandrel Massanga|DM|27|500|CGO|2027
Charles-André Raux-Yao|CM|24|2000|CIV|2028
Hamza Akman|CM|22|400|TUR|2028
David Costa|AM|22|800|CPV|2029
Abdelhamid Sabiri|AM|29|700|MAR|2027
Konrad Michalak|LW|29|500|POL|2028
Lenny Pintor|LW|26|200|FRA|2027
Bilal Boutobba|RW|28|1200|FRA|2027
Mete Demir|RW|28|300|TUR|2027
Christ Sadia|RW|19|100|CIV|2028
Musa Eren Karakaş|RW|22|500|TUR|2029
Yusuf Barası|ST|23|800|TUR|2027
Abdou Khadre Sy|ST|18|100|SEN|2028` },
    { id: 'erzurumspor', name: 'Эрзурумспор', city: 'Эрзурум', stadium: 'Kazım Karabekir Stadyumu', cap: 23700, colors: ['#0055a4', '#ffffff'], players: `
Matija Orbanic|GK|26|1200|CRO|2027
Ertuğrul Taşkıran|GK|36|100|TUR|2027
Erkan Anapa|GK|28|50|TUR|2027
Yakup Kırtay|CB|23|1500|TUR|2027
Nihad Mujakic|CB|28|1000|BIH|2029
Amar Gerxhaliu|CB|24|900|KVX|2027
Ömer Arda Kara|CB|18|150|TUR|2027
Emre Erdem|CB|24|100|TUR|2028
Taha Rençber|CB|18|50|TUR|2027
Yiğit Baran Karaoğlan|CB|20|500|TUR|2028
Гурам Гиорбелидзе|LB|30|350|GEO|2027
Cengizhan Bayrak|LB|26|100|TUR|2027
Festy Ebosele|RB|24|1500|IRL|2027
Orhan Ovacıklı|RB|37|50|TUR|2027
Elisha Owusu|DM|28|2500|GHA|2028
Brandon Baiye|DM|25|1500|BEL|2027
Lawrence Agyekum|CM|22|1500|GHA|2027
Sefa Akgün|CM|26|1000|TUR|2027
Emirhan Acar|CM|21|700|TUR|2029
Martín Rodríguez|AM|32|400|CHI|2027
Mustafa Fettahoğlu|LW|25|1500|TUR|2027
Miguel Cardoso|LW|32|800|POR|2028
Gyrano Kerk|RW|30|2500|SUR|2029
Нариман Ахундзада|ST|22|2000|AZE|2027
Ibrahim Diabate|ST|26|1500|CIV|2027
Eren Tozlu|ST|35|100|TUR|2027` },
    { id: 'amed', name: 'Амед', city: 'Диярбакыр', stadium: 'Diyarbakır Stadyumu', cap: 33000, colors: ['#00a650', '#e30613'], players: `
Alban Lafont|GK|27|3000|CIV|2029
Burak Bozan|GK|26|600|TUR|2029
Yakup Girişen|GK|18|500|TUR|2029
David Bates|CB|30|1500|SCO|2028
Mehmet Yeşil|CB|28|900|TUR|2028
Amadou Cissé|CB|20|800|GUI|2029
Miraç Acer|CB|30|100|TUR|2027
Kahraman Demirtaş|CB|32|50|TUR|2027
Umut Meraş|LB|30|400|TUR|2028
Ermal Krasniqi|RB|28|1000|KVX|2028
Ali Turap Bülbül|RB|21|600|TUR|2028
Gökhan Gül|DM|28|1500|GER|2028
Rayan Raveloson|DM|29|1200|MAD|2029
Cem Üstündag|CM|25|700|AUT|2028
Furkan Soyalp|CM|31|400|TUR|2027
Rayan Lutin|AM|23|800|COM|2028
Dia Saba|AM|33|700|ISR|2027
Mohamed Khalil|LW|25|250|SYR|2029
Hasan Yıldırım|LW|21|500|TUR|2029
Samuel Ballet|RW|25|3500|SUI|2029
Berk Kızıldemir|RW|19|500|TUR|2029
Gift Orban|ST|24|7000|NGA|2027` },
    { id: 'corum', name: 'Чорум', city: 'Чорум', stadium: 'Çorum Şehir Stadyumu', cap: 15000, colors: ['#e30613', '#000000'], players: `
Marcos Felipe|GK|30|1000|BRA|2028
Arif Şimşir|GK|21|800|TUR|2029
Erhan Erentürk|GK|31|200|TUR|2028
Alexandre Penetra|CB|25|8000|POR|2027
Çağlar Söyüncü|CB|30|2500|TUR|2028
Hrvoje Smolcic|CB|26|2000|CRO|2028
Serdar Saatçı|CB|23|1500|TUR|2029
Arda Şengül|CB|27|700|TUR|2028
Andrei Borza|LB|20|2500|ROU|2030
Cemali Sertel|LB|26|500|TUR|2028
Gökhan Sazdağı|RB|32|800|TUR|2028
Hüseyin Bulut|RB|27|450|TUR|2028
Berat Özdemir|DM|28|2000|TUR|2028
Ylber Ramadani|DM|30|1800|ALB|2028
Mohamed Diomandé|CM|24|7000|CIV|2029
Markus Karlsbakk|CM|26|1800|NOR|2029
Atakan Akkaynak|CM|27|400|TUR|2028
Ahmed Ildız|CM|29|350|TUR|2027
Ermin Mahmic|AM|21|7000|BIH|2029
Göktan Gürpüz|AM|23|2000|TUR|2027
Furkan Çetinkaya|AM|17|500|TUR|2028
Alexandros Kyziridis|LW|26|3000|GRE|2029
Emircan Gürlük|LW|23|1200|TUR|2028
Cengiz Ünder|RW|29|3000|TUR|2027
Jesús Ramírez|ST|28|6000|VEN|2029
Youssoufa Moukoko|ST|21|4000|GER|2027
Mame Thiam|ST|34|700|SEN|2027
Hasanege Akdoğan|ST|18|400|TUR|2027` },
  ],
});
