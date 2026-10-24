// Саудовская Про-лига 2026/27. Составы, позиции и оценка стоимости — FotMob (октябрь 2026).
// Имена игроков в оригинальном написании; репутация и бюджет клуба считаются игрой по стоимости состава.
FM.addLeague({
  id: 'sau', name: 'Саудовская Про-лига', short: 'Саудовская Аравия', country: 'KSA', tier: 1, weekday: 5,
  autumn: { from: '08-29', rounds: 17 }, spring: { from: '01-09', rounds: 17 },
  ticket: 8, prize: [20000, 19100, 18250, 17350, 16450, 15600, 14700, 13800, 12950, 12050, 11200, 10300, 9400, 8550, 7650, 6750, 5900, 5000],
  teams: [
    { id: 'al_hilal', name: 'Аль-Хиляль', city: 'Эр-Рияд', stadium: 'Kingdom Arena', cap: 26000, colors: ['#0055a4', '#ffffff'], players: `
Mohammed Al Yami|GK|29|167|KSA
Mohammed Al Owais|GK|35|262|KSA
Yassine Bounou|GK|35|1782|MAR
Mohammed Mahzari|RB|24|538|KSA
Kalidou Koulibaly|CB|35|1779|SEN
Yusuf Akçiçek|CB|20|16594|TUR
Théo Hernández|LB|29|18625|FRA
Moteb Al Harbi|LB|26|1136|KSA
Saad Al Muthary|CB|19|300|KSA
Meshal Al Dawood|CB|18|300|KSA
Mohammed Al Sarnoukh|RB|19|300|KSA
Ali Lajami|CB|30|572|KSA
Hassan Al Tambakti|CB|27|916|KSA
Hamad Al Yami|RB|27|337|KSA
Nasser Al Dawsari|CM|27|454|KSA
Rúben Neves|DM|29|22230|POR
Murad Al Hawsawi|CM|25|808|KSA
Sergej Milinković-Savić|CM|31|10306|SRB
Mohamed Kanno|CM|32|397|KSA
Saïmon Bouabré|CM|20|2121|FRA
Abdullah Al Anazi|AM|23|249|KSA
Suhayb Al Zaid|RW|22|373|KSA
Gabriel Martinelli|LW|25|38346|BRA
Ollie Watkins|ST|30|32355|ENG
Sultan Mandash|RW|32|281|KSA
Salem Al Dawsari|LW|35|639|KSA
Crysencio Summerville|LW|24|30994|NED
Turki Al Ghumayl|ST|21|300|KSA
Sabri Dahal|RW|18|2671|KSA
Mohamed Meïté|ST|19|17880|CIV
Nawaf Al Habashi|LW|28|282|KSA` },
    { id: 'al_nassr', name: 'Аль-Наср', city: 'Эр-Рияд', stadium: 'Al-Awwal Park', cap: 26100, colors: ['#ffd700', '#0055a4'], players: `
Nawaf Al Aqidi|GK|26|517|KSA
Abdulhadi Al Alwan|GK|24|300|KSA
Bento|GK|27|7914|BRA
Abdulrahman Al Otaibi|GK|18|300|KSA
Mubarak Al Buainain|GK|21|300|KSA
Aser Hawsawi|DM|24|300|KSA
Sultan Al Ghannam|RB|32|1030|KSA
Mohamed Simakan|CB|26|20007|FRA
Nader Al Sharari|CB|30|235|KSA
Abdulelah Al Amri|CB|29|1038|KSA
Saad Al Nasser|LB|25|398|KSA
Nawaf Bu Washl|RB|27|764|KSA
Aiman Yahya|LB|25|300|KSA
Iñigo Martínez|CB|35|1806|ESP
Yassine Sallem|CB|19|300|TUN
Majed Qasheesh|LB|24|235|KSA
Awad Aman|LB|21|352|KSA
Salem Al Najdi|LB|23|465|KSA
Sadio Mané|LW|34|4845|SEN
Samú Costa|DM|25|11224|POR
Sami Al Naji|RW|29|140|KSA
Mohammed Marran|AM|25|258|KSA
Abdullah Al Khaibari|CM|30|578|KSA
Ângelo|CM|21|15564|BRA
Kingsley Coman|RW|30|16970|FRA
Rakan Al Ghamdi|RW|21|300|KSA
Cristiano Ronaldo|ST|41|5777|POR
Abdullah Al Hamddan|ST|27|176|KSA
Abdulrahman Ghareeb|LW|29|455|KSA
Saad Haqawi|LW|21|344|KSA
João Félix|ST|26|19722|POR` },
    { id: 'al_qadsiah', name: 'Аль-Кадисия', city: 'Эль-Хубар', stadium: 'Prince Mohammed Bin Fahd Stadium', cap: 35000, colors: ['#e30613', '#ffd700'], players: `
Koen Casteels|GK|34|1674|BEL
Ahmed Al Kassar|GK|35|190|KSA
Meshari Sunyur|GK|24|300|KSA
Jehad Thakri|CB|25|879|KSA
Nacho|CB|36|741|ESP
Yasser Al Shahrani|LB|34|196|KSA
Gastón Álvarez|CB|26|8899|URU
Waleed Al Ahmad|CB|27|813|KSA
Mohammed Qassim|DM|31|132|KSA
Ali Diabaté|CB|19|300|CIV
Mohammed Abu Al Shamat|RW|24|1537|KSA
Julian Weigl|CM|31|4711|GER
Turki Al Ammar|LW|27|638|KSA
Nahitan Nández|CM|30|1882|URU
Musab Al Juwayr|CM|23|8613|KSA
Ali Hazazi|CM|32|145|KSA
Tijjani Reijnders|CM|28|40631|NED
Mohammed Al Qahtani|LB|24|361|KSA
Abdulmalik Al Jaber|CM|22|300|KSA
Christopher Bonsu Baah|LW|21|16107|GHA
Eyad Houssa|CM|19|306|KSA
Ahmed Al Siyahi|DM|21|402|KSA
Abdulaziz Al Elewai|RW|22|642|KSA
Abdullah Al Salem|ST|33|194|KSA
Haitham Asiri|ST|25|294|KSA
Mahamadou Sangaré|ST|19|300|FRA
Mateo Retegui|ST|27|24923|ITA
Julián Quiñones|ST|29|13658|MEX
Suleman Sani|LW|20|2782|NGA` },
    { id: 'al_ittihad', name: 'Аль-Иттихад', city: 'Джидда', stadium: 'Alinma Bank Stadium at King Abdullah Sport City', cap: 63079, colors: ['#ffd700', '#000000'], players: `
Predrag Rajković|GK|30|4957|SRB
Mohammed Al Absi|GK|24|300|KSA
Osama Al Mermesh|GK|23|300|KSA
Danilo Pereira|CB|35|1675|POR
Jan-Carlo Šimić|CB|21|12338|SRB
Saad Al Mosa|CB|23|705|KSA
Muhannad Al Shanqiti|RB|27|758|KSA
Hassan Kadish|CB|34|326|KSA
Ahmed Sharahili|CB|32|254|KSA
Faris Abdi|LB|27|366|KSA
Ahmed Al Julaydan|RB|22|506|KSA
Muath Fagihy|LB|24|344|KSA
Mohammed Barnawi|CB|21|311|KSA
Richard Ríos|DM|26|15119|COL
Mukhtar Ali|CM|28|436|KSA
Houssem Aouar|AM|28|7578|ALG
Mahamadou Doumbia|DM|22|10814|MLI
Georginio Wijnaldum|ST|35|1067|NED
Farhah Al Shamrani|CM|20|908|KSA
Dion Lopy|DM|24|7581|SEN
Mohammed Fallatah|CM|19|557|KSA
Rakan Kaabi|DM|23|491|KSA
Hamed Al Ghamdi|DM|27|291|KSA
Roger Fernandes|LW|20|20797|POR
George Ilenikhena|ST|20|12457|NGA
Saleh Al Shehri|ST|32|215|KSA
Youssef En-Nesyri|ST|29|10856|MAR
Marwan Al Sahafi|RW|22|1223|KSA
Ahmed Al Ghamdi|RW|25|269|KSA
Steven Bergwijn|LW|29|6569|NED` },
    { id: 'al_ahli', name: 'Аль-Ахли', city: 'Джидда', stadium: 'Alinma Bank Stadium at King Abdullah Sport City', cap: 63079, colors: ['#00a650', '#ffffff'], players: `
Abdulrahman Al Sanbi|GK|25|313|KSA
Édouard Mendy|GK|34|2074|SEN
Abdullah Abdo|GK|24|300|KSA
Zakaria Hawsawi|LB|25|642|KSA
Roger Ibañez|CB|27|16734|BRA
Mohammed Sulaiman|CB|22|493|KSA
Saeed Baattia|RB|26|195|KSA
Abubacarr Kinteh|CB|19|8508|GAM
Ali Majrashi|RB|27|1126|KSA
Merih Demiral|CB|28|12516|TUR
Mohammed Abdulrahman|RB|23|300|KSA
Saad Yaslam|LB|26|438|KSA
Rayan Hamed|CB|24|596|KSA
Ibrahima Diaby|DM|19|2002|FRA
Valentin Atangana|DM|21|15591|FRA
Trincão|AM|26|27692|POR
Эдуард Сперцян|AM|26|21992|ARM
Артём Бондаренко|AM|26|5004|UKR
Ibrahim Azzam|DM|18|300|KSA
Faisal Ibrahim Fallatah|CM|20|300|KSA
Ziyad Al Johani|DM|24|823|KSA
Ziyad Mallah|CM|21|300|KSA
Naif Masoud|DM|25|345|KSA
Ramez Al Attar|RW|20|300|KSA
Feras Al Brikan|ST|26|2683|KSA
Meshal Al Mutairi|LW|27|300|KSA
Galeno|LW|29|16224|BRA
Ivan Toney|ST|30|15038|ENG
Matheus Gonçalves|AM|21|7846|BRA
Abdullah Radif|ST|23|357|KSA
Saleh Abu Al Shamat|LW|24|366|KSA
Salem Abdullah|ST|18|300|KSA` },
    { id: 'neom', name: 'НЕОМ', city: 'Табук', stadium: 'Al-Watani Club Stadium', cap: 5000, colors: ['#000000', '#ffd700'], players: `
Marcin Bułka|GK|27|12767|POL
Abdulrahman Dagriri|GK|36|136|KSA
Luís Maximiano|GK|27|1865|POR
Mohammed Al Burayk|RB|34|145|KSA
Khalifah Al Dawsari|RB|27|278|KSA
Malang Sarr|CB|27|14161|SEN
Abdulmalik Al Oyayari|RB|22|300|KSA
Islam Hawsawi|LB|24|235|KSA
Nathan Zézé|CB|21|20811|FRA
Mohammed Al Dossary|CB|25|300|KSA
Khaled Al Rammah|LB|21|232|KSA
Abbas Al Hassan|CM|22|300|KSA
Giorgos Masouras|LW|32|1088|GRE
Faisal Al Ghamdi|DM|25|902|KSA
Saïd Benrahma|LW|31|4031|ALG
Khalil Al Absi|LW|25|327|KSA
Alaa Al Hejji|CM|30|258|KSA
Mohannad Abu Taha|LB|23|284|JOR
Valentín Vada|CM|30|783|ARG
Abdulaziz Noor|RW|27|292|KSA
Amadou Koné|CM|21|8933|CIV
Muhannad Al Saad|RW|23|360|KSA
Abdulaziz Al Othman|ST|22|300|KSA
Ahmed Al Anazi|ST|22|300|KSA
Haroune Camara|ST|28|281|KSA
Alexandre Lacazette|ST|35|1879|FRA` },
    { id: 'al_ettifaq', name: 'Аль-Иттифак', city: 'Даммам', stadium: 'Al Ettifaq Club Stadium', cap: 15000, colors: ['#00a650', '#e30613'], players: `
Marek Rodák|GK|29|1392|SVK
Ahmad Al Harbi|GK|32|300|KSA
Turki Ba Al Jawsh|GK|22|300|KSA
Abdullah Madu|CB|33|260|KSA
Jack Hendry|CB|31|1598|SCO
Pedro Henrique|CB|31|1792|BRA
Meshal Al Alaeli|LB|22|300|KSA
Madallah Al Olayan|LB|32|252|KSA
Radhi Al Otaibi|RB|26|189|KSA
Abdullah Khateeb|CB|31|174|KSA
Marzouq Tambakti|CB|23|240|KSA
Meshal Sibyani|LB|25|222|KSA
Álvaro Medrán|CM|32|1545|ESP
Ondrej Duda|DM|31|1518|SVK
Mohammed Al Kadi|CM|20|300|KSA
Riyadh Sharahili|CM|33|111|KSA
Abdoulaye Kanté|DM|21|6173|CIV
Yasir Shammari|AM|22|300|KSA
Abdulelah Hawsawi|CM|25|335|KSA
Talal Haji|ST|19|1590|KSA
Khalid Al Ghannam|LW|25|1101|KSA
Moussa Dembélé|ST|30|3511|FRA
Abdullah Al Bishi|ST|19|300|KSA
Jordan Larsson|RW|29|2254|SWE
Abdulhakim Maghfori|ST|20|300|KSA
Jalal Al Salem|RW|21|300|KSA
Ziyad Al Ghamdi|RW|21|300|KSA
Bersant Celina|LW|30|1382|KVX
Matija Gluščević|ST|22|733|SRB
Rayane Messi|RW|19|5475|FRA
Sultan Harun|ST|20|381|KSA` },
    { id: 'al_diriyah', name: 'Ад-Дирия', city: 'Эд-Диръия', stadium: 'Prince Faisal bin Fahd Stadium', cap: 28000, colors: ['#800020', '#ffffff'], players: `
Muteb Sharahili|GK|33|300|KSA
Nikola Vasilj|GK|30|2187|BIH
Waleed Abdullah|GK|40|103|KSA
Mansour Al Sibyani|GK|24|300|KSA
Amin Al Bukhari|GK|29|114|KSA
Abdulaziz Al Faraj|RB|23|300|KSA
Saeed Al Rubaie|CB|32|131|KSA
Taher Wadi|RB|24|300|KSA
Hussain Al Sibyani|LB|25|338|KSA
Berat Djimsiti|CB|33|2668|ALB
Abdulelah Al Jaaferi|CB|21|300|KSA
Mohamed Hameran|LB|29|158|KSA
Fahad Al Obaid|CB|33|106|KSA
Khalid Al Asiri|LB|21|226|KSA
Qasem Lajami|CB|30|151|KSA
Chancel Mbemba|CB|32|1145|COD
Mathys de Carvalho|DM|21|3906|POR
Idrissa Gueye|DM|37|804|SEN
Sultan Farhan|AM|30|149|KSA
Ziyad Al Qahtani|DM|30|111|KSA
Hattan Bahbri|ST|34|183|KSA
Óscar Rodríguez|AM|28|993|ESP
Enzo Millot|AM|24|20204|FRA
Lovro Chelfi|RW|19|300|CRO
Hussain Al Qahtani|DM|31|150|KSA
Abdulelah Al Malki|AM|32|145|KSA
Gaëtan Laborde|ST|32|2099|FRA
Adil Boulbina|LW|23|2329|ALG
Clayton Diandy|RW|20|1299|SEN
Darwin Núñez|ST|27|17492|URU
Abdullah Al Zaid|ST|22|300|KSA
Meshari Al Nemer|ST|23|358|KSA` },
    { id: 'al_kholood', name: 'Аль-Хулуд', city: 'Эр-Расс', stadium: 'Ar-Rass Stadium (Al Hazm Club Stadium)', cap: 8000, colors: ['#e30613', '#ffd700'], players: `
Hamed Al Shanqiti|GK|21|300|KSA
Mohammed Al Shammari|GK|34|112|KSA
Fares Al-Zahrani|GK|24|300|KSA
Muhannad Al Yahya|GK|22|300|KSA
Edgaras Utkus|CB|26|1234|LTU
Sultan Al Shehri|LB|31|160|KSA
Ramzi Solan|RB|28|153|KSA
Yazan Madani|CB|21|360|KSA
Odai Slimani|RB|21|300|KSA
Mansour Camara|CB|19|549|GUI
Shaquille Pinas|CB|28|1375|SUR
Abdulrahman Al Obaid|CB|22|300|KSA
John Buckley|CM|27|1163|ENG
Seydouba Cissé|DM|25|1570|GUI
Iker Kortajarena|AM|26|853|ESP
Ibrahem Barabaa|CM|20|300|KSA
Adam Berry|AM|20|225|ENG
Yaseen Al Zubaidi|RW|23|418|KSA
Abdulrahman Al Dosari|CM|29|252|KSA
Rakan bin Jaman|CM|21|300|KSA
Yousef Al Honaifesh|CM|20|300|KSA
Mohammed Al Rashdi|AM|24|211|KSA
Coba da Costa|LW|24|1433|GNB
Ramiro Enrique|ST|25|3799|ARG
Julien Domingues|ST|30|146|FRA
Abdullah Al Ajyan|ST|22|300|KSA
Abdulmalik Al Harbi|ST|21|300|KSA
Muhammad Sawaan|LW|26|272|KSA
Antoin Essomba|RW|22|258|CMR
Guga|ST|20|300|BRA` },
    { id: 'al_khaleej', name: 'Аль-Халидж', city: 'Сайхат', stadium: 'Prince Mohammed Bin Fahd Stadium', cap: 35000, colors: ['#00a650', '#ffd700'], players: `
Mohammed Ibrahim|GK|21|300|KSA
Anthony Moris|GK|36|526|LUX
Marwan Al Haidari|GK|30|98|KSA
Abdullah Al Ammar|LB|32|442|KSA
Hamad Al Jayzani|RB|33|114|KSA
Mohammed Al Khabrani|CB|33|302|KSA
Kiki Kouyaté|CB|29|1027|MLI
Pedro Rebocho|LB|31|268|POR
Ahmed Asiri|CB|34|146|KSA
Ali Al Shaafi|CB|24|300|KSA
Abdullah Al Hafith|CB|33|249|KSA
Raed Al Shanqiti|LB|20|300|KSA
Fawaz Al Soqoor|RB|30|223|KSA
Saeed Al Hamsal|RB|30|153|KSA
Abdoulie Mboge|CM|22|300|GAM
Omar Mascarell|DM|33|565|EQG
Angelo Fulgini|CM|30|3564|NCL
Saleh Al Amri|LW|33|264|KSA
Majed Kanabah|CM|33|300|KSA
Mansour Hamzi|CM|34|146|KSA
Bader Munshi|CM|27|135|KSA
Nawaf Al Saadi|RW|26|325|KSA
Miguel Crespo|AM|30|1359|POR
Mohammed Al Abdullah|CM|24|300|KSA
Hussain Al Eissa|LW|25|237|KSA
Fahad Al Rashidi|CM|29|215|KSA
Sultan Al Dossari|CM|24|300|KSA
Joshua King|ST|34|704|NOR
Mateo Benegas|ST|20|300|ARG
Witcha|ST|18|300|CPV
Ali Abdoulraouf Alabdrabalnabi|ST|22|300|KSA
Abdulmajeed Al Khathami|ST|21|300|KSA
Thamer Al Khaibri|ST|20|407|KSA
Musa Barrow|ST|27|2190|GAM` },
    { id: 'al_shabab', name: 'Аш-Шабаб', city: 'Эр-Рияд', stadium: 'SHG Arena', cap: 13537, colors: ['#ffffff', '#000000'], players: `
Mishal Saad|GK|20|300|KSA
Mory Diaw|GK|33|680|SEN
Abdulaziz Al Awardi|GK|24|197|KSA
Mohammed Al Mahasnah|GK|29|300|KSA
Muhammad Al Otaibi|GK|18|300|KSA
Ali Al Bulayhi|CB|36|142|KSA
Nasser Ali Al Bishi|CB|19|300|KSA
Mohammed Al Shwirekh|CB|28|206|KSA
Mamadou Barry|CB|21|1249|SEN
Tin Jedvaj|CB|30|1055|CRO
Ali Makki|CB|27|264|KSA
Lazar Stojanovic|LB|21|868|SRB
Mohammed Al Thani|RB|29|300|KSA
Dhari Al Anazi|LB|26|215|KSA
Abdullah Al Hawsawi|RB|30|300|KSA
Sultan|LB|23|300|KSA
Mohammed Essa Hurbush|RB|23|239|KSA
Yazeed Al Dosari|CB|18|300|KSA
Talal Al Shubili|DM|21|214|KSA
Awad Al Nashri|DM|24|347|KSA
Josh Brownhill|DM|30|5075|ENG
Thomas Partey|CM|33|1683|GHA
Hammam Al Hammami|RW|22|363|KSA
Abdulrahman Al Obud|RW|31|279|KSA
Yacine Adli|CM|26|8100|FRA
Adel Qasem|RW|18|300|YEM
Ali Al Asmari|CM|29|145|KSA
Abdullah Matuq|RW|23|261|KSA
Roger Martínez|ST|32|944|COL
Yannick Carrasco|LW|33|1976|BEL
Daniel Podence|LW|31|1775|POR
Ricardo Mathias|ST|20|9460|BRA
Abdulaziz Hadhood|ST|21|300|KSA
Morad Khodari|ST|23|300|KSA
Hamad Al Khorayef|ST|20|300|KSA` },
    { id: 'al_hazem', name: 'Аль-Хазм', city: 'Эр-Расс', stadium: 'Ar-Rass Stadium (Al Hazm Club Stadium)', cap: 8000, colors: ['#e30613', '#ffd700'], players: `
Yazan Al Ruwaili|GK|21|300|KSA
Bruno Varela|GK|31|638|CPV
Ibrahim Zaied|GK|36|120|KSA
Majed Al Ghamdi|GK|28|124|KSA
Jindřich Staněk|GK|30|1287|CZE
Saud Al Rashed|RB|28|300|KSA
Mohamed Amine Ben Hmida|LB|30|552|TUN
Sultan Tanker|CB|28|193|KSA
Mohammed Issa|CB|24|177|KSA
Mory Konaté|CB|32|199|GUI
Farhan Al Azzmi|LB|31|114|KSA
Abdullah Al Shanqiti|CB|27|185|KSA
Ahmed Al Nakhli|LB|24|300|KSA
Abdurahman Al Dakheel|CB|30|120|KSA
Ahmed Al Shamrani|LB|24|229|KSA
Abdulaziz Al Harbi|RB|23|174|KSA
Jaser Ateeq|CB|20|300|KSA
Khalid Al Subaie|CM|26|227|KSA
Bonheur Mugisha|DM|26|247|RWA
Aboubacar Bah|CM|21|867|GUI
Sofiane Bendebka|AM|34|434|ALG
Hassan Idris|CM|21|300|KSA
Elton Acolatse|LW|31|262|NED
Afimico Pululu|ST|27|3708|COD
Amir Sayoud|RW|36|169|ALG
Waleed Al Shanqiti|ST|32|161|KSA
Nawaf Al Bishri|ST|20|300|KSA
Amadou Bamba Dieng|ST|21|300|SEN
Abdulaziz Al Dhuwayhi|RW|26|246|KSA
Aboubacar Diakité|ST|19|360|MLI
Abdulrazzaq Awaji|ST|19|300|KSA
Mohammed Al Hamdani|LW|25|300|KSA
Ayman Al Hujaili|RW|28|272|KSA` },
    { id: 'al_riyadh', name: 'Эр-Рияд', city: 'Эр-Рияд', stadium: 'Prince Faisal bin Fahd Stadium', cap: 28000, colors: ['#000000', '#e30613'], players: `
Jan Petek|GK|20|261|SVN
Milan Borjan|GK|39|167|CAN
Emad Fidaa|GK|29|300|KSA
Sultan Al Essa|RB|21|300|KSA
Yasser Al Musa|LB|23|300|KSA
Hussam Majrashi|CB|22|300|KSA
Sulaiman Hazazi|LB|23|344|KSA
Osama Al Bawardi|RB|27|185|KSA
Abdullah Tarmin|RB|29|112|KSA
Hussain Qassem|LB|29|120|KSA
Rodrigo Abascal|CB|32|220|URU
Awad Dahal|RB|21|321|KSA
Mohammed Al Khaibari|CB|24|300|KSA
Fahad Al Jayzani|RB|22|300|KSA
Kader Keïta|CM|25|862|CIV
Hassan Al Ali|RW|24|314|KSA
Faisal Al Subhi|CM|27|126|KSA
Hussain Al Shurafaa|AM|24|300|KSA
Tozé|AM|33|1078|POR
Victor Lekhal|DM|32|258|ALG
Abdulilah Al Tale|CM|19|300|KSA
Salman Matar|CM|21|300|KSA
Bernard Mensah|CM|32|829|GHA
Majed Nasser Al Qahtani|CM|21|300|KSA
Yahia Al Shehri|LW|36|151|KSA
Cheikh Fall|CM|19|300|SEN
Trezeguet|LW|32|2281|EGY
Teddy Okou|RW|28|623|FRA
Essam Bahri|LW|21|300|KSA
Hussain Al Raqwani|ST|21|300|KSA
Battal Al Harthi|ST|21|300|KSA
Luca Ramirez|ST|20|261|ARG
Leandro Antunes|ST|29|947|POR` },
    { id: 'al_fayha', name: 'Аль-Фейха', city: 'Эль-Маджмаа', stadium: 'Al Majma\'ah Sports City Stadium', cap: 7000, colors: ['#f26522', '#0055a4'], players: `
Abdulraouf Al Duqayl|GK|31|190|KSA
Sattam Al Shammari|GK|22|300|KSA
Osama Al Thumayri|GK|21|300|KSA
Orlando Mosquera|GK|31|499|PAN
Makhir Al Rashidi|CB|27|283|KSA
Turki Al Jaadi|LB|23|300|KSA
Paulo Oliveira|CB|34|572|POR
Ziyad Al Sahafi|CB|32|118|KSA
Mohammed Al Baqawi|RB|31|267|KSA
Ahmed Bamasud|LB|30|424|KSA
Omar Colley|CB|34|589|GAM
Ali Dhafer Al Harshan|CB|20|300|KSA
Mohammed Al Dowaish|RB|22|215|KSA
Rayan Enad|RW|25|345|KSA
Abdulhadi Al Harajin|LW|31|98|KSA
Hugo Moura|DM|28|841|BRA
Al Hussain Boulahrech|CM|21|253|KSA
Nawaf Al Harthi|CM|28|267|KSA
Mansor Al Beshe|AM|26|215|KSA
Abdullah Al Qahtani|LW|27|300|KSA
Al Baraa Adawi|CM|22|300|KSA
Alfa Semedo|DM|29|681|GNB
Yago|CM|20|300|BRA
Fahad Majed Alhubayshi|RW|20|300|KSA
Danyal Aqeel Al Habeeb|CM|20|300|KSA
Malek Al Abadalmanam|ST|28|300|KSA
Fashion Sakala|LW|29|2263|ZAM
Lázaro|ST|24|1493|BRA
Jason|ST|32|1227|ESP
Sultan Al Jabri|RW|26|300|KSA
Ammar Al Khaibari|ST|22|289|KSA` },
    { id: 'al_faisaly', name: 'Аль-Фейсали', city: 'Харма', stadium: 'Al Majma\'ah Sports City Stadium', cap: 7000, colors: ['#ffd700', '#0055a4'], players: `
Fernando Pacheco|GK|34|254|ESP
Abdulelah Nassief|GK|20|300|KSA
Mohammed Al Hasawi|GK|37|141|KSA
Yaseen Barnawi|RB|33|145|KSA
Khalid Al Harbi|RB|24|300|KSA
Abdoulaye Seck|CB|34|159|SEN
Andrei Girotto|CB|34|1070|BRA
Abdulrahman Al Safari|RB|33|145|KSA
Moayad Saleem|LB|18|300|KSA
Mohammed Al Shanqiti|LB|27|140|KSA
Mohammed Jahfali|CB|36|125|KSA
Hussain Al Zarie|AM|21|745|KSA
Abdullah Bin Subayt|CB|22|300|KSA
Saud Haddad|CB|20|300|KSA
Eid Al Muwallad|DM|24|324|KSA
Jaber Issa|CM|29|89|KSA
Flávio|CM|30|1069|BRA
Ibrahima Ndiaye|RW|28|192|SEN
André-Jordy Ella|LW|21|300|GAB
Abdullah Al Mogren|AM|29|300|KSA
Mohammed Al Aqeel|DM|29|300|KSA
Jaime Seoane|DM|29|218|ESP
Abdulrahman Al Sharif|CM|29|300|KSA
Ayman Fallatah|AM|23|346|KSA
Yousef Al Shammari|ST|28|197|KSA
Théo Bongonda|RW|30|1544|COD
Christian Bassogog|RW|31|464|CMR
Alexandre Mendy|ST|32|646|GNB
Abdulaziz Al Bishi|RW|32|280|KSA
Wael Kadan|ST|21|300|KSA
Faisal Al Fahad|ST|25|300|KSA
Ahmed Abdu|ST|30|161|KSA` },
    { id: 'al_fateh', name: 'Аль-Фатех', city: 'Эль-Хуфуф', stadium: 'Maydan Tamweel Aloula', cap: 19096, colors: ['#0055a4', '#ffffff'], players: `
Adrian Šemper|GK|28|1165|CRO
Habib Al Watyan|GK|30|212|KSA
Waleed Al Anzi|GK|30|300|KSA
Kennedy Boateng|CB|29|857|TOG
Ziyad Al Jari|CB|24|371|KSA
Faisal Darisi|CB|29|300|KSA
Abdulelah Al Khaibari|LB|29|255|KSA
Marwane Saadane|CB|34|159|MAR
Robin Kelder|CB|21|300|NED
Abdul Rahman Al Khaibari|RB|26|324|KSA
Ali Alamine Ali|RW|21|300|FRA
Muntathir Al Shaqaq|CB|21|300|KSA
Abdulaziz Al Suwailem|CB|20|300|KSA
Sattam Al Tumbukti|RB|25|300|KSA
Ali Al Hassan|CM|29|262|KSA
Mihai Lixandru|DM|25|893|ROU
Abdulaziz Al Fawaz|AM|18|300|KSA
Hossam Essadak|CM|21|1280|MAR
Mehdi Al Aboud|CM|20|264|KSA
Mohammed Al Sahihi|DM|20|300|KSA
Zaydou Youssouf|DM|27|5033|COM
Jordan Harrison|CM|24|300|AUS
Faisal Al Abdulwahed|AM|21|236|KSA
Othman Al Othman|RW|23|242|KSA
Fahad Al Zubaidi|ST|24|363|KSA
Wilfried Kanga|ST|28|2182|CIV
Lukás Haraslín|LW|30|4451|SVK
Mourad Batna|RW|36|188|MAR
Jefferson Ramos|ST|21|215|CPV
Sorriso|LW|21|300|BRA
Ali Al Masoud|RW|22|249|KSA
Saad Al Sharfa|ST|22|255|KSA` },
    { id: 'al_taawoun', name: 'Ат-Таавун', city: 'Бурайда', stadium: 'Al Taawoun Club Stadium', cap: 10000, colors: ['#ffd700', '#000000'], players: `
Mailson|GK|30|2122|BRA
Abdulrahman Al Senaid|GK|20|300|KSA
Abdullah Al Jadani|GK|35|231|KSA
Abdulrahman Al Ghamdi|GK|20|366|KSA
Zineddine Belaïd|CB|27|1103|ALG
Bassam Al Hurayji|RB|26|324|KSA
Adeeb Al Hassan|CB|21|300|KSA
Muteb Al Mufarrij|CB|30|223|KSA
Ibrahim Mahnashi|CB|26|203|KSA
Nawaf Al Hawairy|CB|17|300|KSA
Nasser Al Haleel|CB|26|302|KSA
Jair Collahuazo|CB|20|528|ECU
Abdulrahman Hindi|RB|23|300|KSA
Marin Petkov|RW|23|2221|BUL
Awn Al Saluli|CB|28|155|KSA
Mustapha Samb|CM|21|381|SEN
Faris Al Ghamdi|CM|23|234|KSA
Aschraf El Mahdioui|CM|30|1835|MAR
Oscar Dorley|DM|28|300|LBR
Bassem Al Arini|AM|22|260|KSA
Rakan Al Tulayhi|AM|23|234|KSA
Mohammed Al Saedi|CM|20|300|KSA
Mohammed Al Kuwaykibi|RW|31|172|KSA
Parfait Guiagon|LW|25|4295|CIV
Abderrazak Hamdallah|ST|35|660|MAR
Nedim Bajrami|ST|27|1549|ALB
Saif Rajab|LW|21|351|KSA
Mohammed Al Aqel|ST|26|217|KSA
Younes El Bahraoui|ST|21|300|MAR
Ibrahim Alzahrani|ST|20|300|KSA
Yousef Saleh Al Salem|ST|18|300|KSA
Luay Al Mohaimeed|ST|18|300|KSA` },
    { id: 'abha', name: 'Абха', city: 'Абха', stadium: 'Prince Sultan bin Abdulaziz Sports City Stadium', cap: 20000, colors: ['#00a650', '#ffffff'], players: `
Donovan Léon|GK|33|584|FGU
Abdulrahman Al Bouq|GK|27|300|KSA
Mustafa Malayekah|GK|40|145|KSA
Juriën Gaari|CB|32|200|CUW
Khaled Al Shamrani|LB|27|300|KSA
Moayad Mohammed|CB|19|300|KSA
Abdullah Al Fahad|CB|32|117|KSA
Abdou Diallo|CB|30|1717|SEN
Mohammed Al Dossary|RB|27|187|KSA
Abdulbasit Hindi|CB|29|154|KSA
Mohammed Al Zaid|RB|22|300|KSA
Nawaf Al Ghulaimish|RB|21|300|KSA
Mateo Borrell|CM|20|328|ARG
Basil Al Sayyali|CM|25|300|KSA
Faisal Al Subiani|DM|23|300|KSA
Feras Al Ghamdi|DM|26|275|KSA
Nasser Al Daajani|DM|29|111|KSA
Nabil Fekir|AM|33|1810|FRA
Abdulkarim Darisi|RB|23|344|KSA
Mohammed Al Hamsal|CM|19|300|KSA
Majed Dawran|RB|23|239|KSA
Loreintz Rosier|DM|28|448|FRA
Safwan Al Johani|LB|23|422|KSA
Amar Al Yuhaybi|LW|20|300|KSA
Mubarak|CM|20|300|KSA
Kamil Boumedmed|LW|19|300|FRA
Alimami Gory|LW|30|806|MLI
Georges-Kévin N'Koudou|LW|31|1411|CMR
Keshim Al Qahtani|ST|26|293|KSA
Bader Al Mutairi|RW|22|300|KSA
Michy Batshuayi|ST|33|1459|BEL` },
  ],
});
