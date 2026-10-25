# Шаг 2 из 3: собирает файлы лиг js/data/sl.js, vlw.js, vle.js, pl1–pl4.js и академии js/data/academy.js
# из скачанных заявок РФС (scrape.py).
# Рейтинг игрока = уровень клуба + роль в команде (доля сыгранных матчей сезона, опыт, результативность) − поправка на возраст.
import json, math, os, random, sys

D = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.abspath(__file__)) + '/../js/data'
os.makedirs(OUT, exist_ok=True)
teams = json.load(open(D + '/teams.json', encoding='utf8'))
pinfo = json.load(open(D + '/pinfo.json', encoding='utf8'))

POS = {'Вр.': 'GK', 'Зщ.': 'DF', 'Ун..': 'UN', 'Нп.': 'FW'}

# Легионеры: имя, под которым игрок известен, и гражданство (на сайте РФС гражданства нет; у россиян в карточке
# есть отчество, у иностранцев — нет). Поцман и Витама — бразильцы (уточнено), Акбаликов (Казахстан) и Гавтадзе (Грузия) —
# по onefutsal.com. Помеченные «?» определены по имени: на onefutsal.com их нет.
FOREIGN = {
    'Дуду Фильо': ('Дуду', 'BRA'), 'Щимба Валерио': ('Щимба', 'BRA'), 'Катата Рафаэл': ('Рафаэл Катата', 'BRA'),
    'Эдсон Гомес Дос Сантос': ('Эдсон', 'BRA'), 'Берим Виейра': ('Берим', 'BRA'), 'Акбаликов Альберт': ('Альберт Акбаликов', 'KAZ'),
    'Поцман Алекс': ('Алекс Поцман', 'BRA'),
    'Нандо Леандро Энрике': ('Нандо', 'BRA'), 'Кайо Фелипе Феликс': ('Кайо Фелипе', 'BRA'), 'Шимбинья Чавес': ('Шимбинья', 'BRA'),
    'Гилерме Жуау': ('Жуау Гилерме', 'BRA'), 'Мота Игор Даниэл': ('Игор Мота', 'BRA'), 'Тьяго Энрике Да Силва': ('Тьяго Энрике', 'BRA'),
    'Дорн Виллиан': ('Виллиан Дорн', 'BRA'), 'Парадински Фелипе': ('Фелипе Парадински', 'BRA'), 'Фабиано Да Силва': ('Фабиано', 'BRA'),
    'Тейшейра Гилерме': ('Гилерме Тейшейра', 'BRA'), 'Боливар Лопес Дос Сантос': ('Боливар', 'BRA'), 'Гавтадзе Гиорги': ('Гиорги Гавтадзе', 'GEO'),
    'Нунес Да Силва Витор Энрике': ('Витор Нунес', 'BRA'), 'Винициус Габриэль': ('Винициус', 'BRA'), 'Энри Кардозо': ('Энри', 'BRA'),
    'Витама Нилтон': ('Нилтон Витама', 'BRA'),
    'Аугусто Карлос': ('Карлос Аугусто', 'BRA'), 'Куватбек Адил': ('Адил Куватбек', 'KGZ'),
    'Лович Ален': ('Ален Лович', 'RUS'),
    'Медетбеков Архат': ('Архат Медетбеков', 'KGZ'),
}
# граждане других стран с отчеством в карточке (по составам из Википедии)
NAT_BY_NAME = {'Шведко Дмитрий': 'BLR', 'Крыкун Сергей': 'BLR'}

# id, название, город, площадка, вместимость (примерно), цвета, репутация, бюджет на трансферы (тыс. €), уровень игроков
META = {
    'Газпром-Югра': ('gazprom', 'Югорск', 'КСК «Норд»', 2500, ['#0057a8', '#ffffff'], 82, 900, 76),
    'Тюмень': ('tyumen', 'Тюмень', 'СК «Центральный»', 3000, ['#0d4ea1', '#ffffff'], 77, 600, 73),
    'КПРФ': ('kprf', 'Москва', 'СК «Юность» (Климовск)', 1000, ['#d71920', '#ffffff'], 76, 600, 73),
    'Синара': ('sinara', 'Екатеринбург', 'ДИВС', 5000, ['#e30613', '#ffffff'], 76, 500, 72),
    'Норильск': ('norilsk', 'Норильск', 'Спорт-холл «Айка»', 1200, ['#f39200', '#1d1d1b'], 72, 450, 71),
    'ИрАэро': ('iraero', 'Иркутск', 'ДС «Труд»', 2000, ['#003f87', '#e30613'], 70, 400, 70),
    'Сургут': ('surgut', 'Сургут', 'СОК «Энергетик»', 1200, ['#ff6600', '#003399'], 68, 350, 69),
    'Торпедо': ('torpedo', 'Нижний Новгород', 'ФОК «Мещерский»', 1000, ['#111111', '#ffffff'], 68, 350, 69),
    'ТЗМС': ('tzms', 'Тула', 'МСК «Тулица»', 2000, ['#f5c400', '#003c71'], 66, 300, 68),
    'Кристалл': ('kristall', 'Санкт-Петербург', 'Nova Arena', 3000, ['#1b75bb', '#ffffff'], 66, 300, 67),
    'Сибиряк': ('sibiryak', 'Новосибирск', 'ФСК «Сибиряк»', 1000, ['#e30613', '#ffffff'], 66, 250, 67),
    'Новая генерация': ('newgen', 'Сыктывкар', 'СК «Орбита»', 1000, ['#00a651', '#ffffff'], 64, 250, 66),
    # Высшая лига, «Запад»
    'КПРФ-2': ('kprf2', 'Москва', 'СК «Старт» (Реутов)', 500, ['#d71920', '#ffffff'], 50, 60, 59),
    'Металлург': ('metallurg', 'Медногорск', 'ФОК «Сокол»', 800, ['#1c3f94', '#f7a600'], 50, 80, 58),
    'Факел ЯМАЛ': ('fakel_yamal', 'Новый Уренгой', '«Факел Арена»', 1000, ['#0072bc', '#ffffff'], 52, 120, 58),
    'Ухта': ('ukhta', 'Ухта', 'УСК «Ухта»', 1500, ['#0a3d91', '#ffffff'], 54, 80, 57),
    'Саратов-Волга': ('saratov', 'Саратов', 'ФОК «Юбилейный»', 800, ['#0b4ea2', '#ffffff'], 48, 80, 57),
    'Волга Ульяновск': ('volga', 'Ульяновск', 'УСК «Новое поколение»', 1000, ['#005bab', '#ffffff'], 48, 80, 56),
    'Газпром-Югра-2': ('gazprom2', 'Югорск', 'ДС «Триумф» (Люберцы)', 500, ['#0057a8', '#ffffff'], 50, 60, 57),
    'Заря Луганск': ('zarya', 'Ростов-на-Дону', 'СШОР № 13 (Таганрог)', 800, ['#000000', '#f7d117'], 45, 60, 54),
    'ТЗМС-2': ('tzms2', 'Тула', 'УСК «Новое поколение»', 500, ['#f5c400', '#003c71'], 44, 40, 54),
    'Водник': ('vodnik', 'Архангельск', 'ЦРС «Норд Арена»', 1000, ['#0072ce', '#ffffff'], 42, 40, 50),
    # Высшая лига, «Восток»
    'Синара-2': ('sinara2', 'Екатеринбург', 'Манеж «ВИЗ-Синара»', 500, ['#e30613', '#ffffff'], 50, 60, 58),
    'Тюмень-д': ('tyumen2', 'Тюмень', 'ДС «Партиком»', 500, ['#0d4ea1', '#ffffff'], 50, 60, 58),
    'Прогресс': ('progress', 'Глазов', 'ФОК «Прогресс»', 1000, ['#00843d', '#ffffff'], 48, 80, 57),
    'Сургут-ЮКИОР': ('surgut2', 'Ханты-Мансийск', 'УСК-1', 500, ['#ff6600', '#003399'], 46, 50, 56),
    'Южный Урал': ('yuzhural', 'Челябинск', 'СК «Метар-Спорт»', 800, ['#ffcc00', '#0033a0'], 46, 70, 55),
    'Новая генерация-2': ('newgen2', 'Сыктывкар', 'СК «Орбита»', 500, ['#00a651', '#ffffff'], 44, 40, 54),
    'Оптимум': ('optimum', 'Первоуральск', 'Манеж «ВИЗ-Синара» (Екатеринбург)', 500, ['#6a1b9a', '#ffffff'], 44, 50, 54),
    'Норильск-2': ('norilsk2', 'Норильск', 'МСК «Сопка» (Красноярск)', 500, ['#f39200', '#1d1d1b'], 44, 40, 53),
    'София': ('sofia', 'Тюмень', 'СК «Софи-Лэнд»', 500, ['#c2185b', '#ffffff'], 42, 50, 52),
}
# Первая лига: зоны — по Территориальному зонированию из регламента Первой лиги 2025–2028 (РФС). Участники:
# московская зона — заявки «Чемпионата г. Москвы по футзалу "Первая лига"» (mosff.ru, tools/mosff.py); остальные —
# любительские клубы из заявок Кубка России 2026/27, а если клуб в него не заявился — Кубка 2025/26. Сайты других
# зон (nagradion.ru, ffmo.ru, ffspb.org) недоступны, а СФФ «Сибирь» публикует только таблицы, поэтому зоны «Центр»,
# «Золотое кольцо», «Северо-Запад», «Юг» и Московская область в игре объединены с соседними или не представлены.
# Зона клуба без указанного города определена по группе Кубка, в которой он играл. Цвета — по эмблемам.
# Зоны: (название, сторона — конференция Высшей лиги, куда выходят клубы зоны, мест во Всероссийском финале)
PL_ZONES = {'pl1': ('Москва', 'W', 1), 'pl2': ('Приволжье', 'W', 3), 'pl3': ('Урал — Западная Сибирь', 'E', 3),
            'pl4': ('Сибирь', 'E', 1), 'pl5': ('Санкт-Петербург', 'W', 2), 'pl6': ('Золотое кольцо', 'W', 1),
            'pl7': ('Северо-Запад', 'W', 1), 'pl8': ('Юг и Северный Кавказ', 'W', 1),
            'pl9': ('Центр', 'W', 1), 'pl10': ('Московская область', 'W', 1),
            'pl11': ('Дальний Восток', 'E', 1)}
# название: (id, зона, город, площадка, цвета, уровень игроков)
PL = {
    'СВОК': ('svok', 'pl1', 'Чехов', '—', ['#1d5fa8', '#ffffff'], 48),
    'Алар': ('alar', 'pl1', 'Москва', '—', ['#1d1d1b', '#c9a24b'], 47),
    'Сквадра': ('squadra', 'pl1', 'Москва', '—', ['#e8a0b4', '#1d1d1b'], 47),
    'ХПСС': ('hpss', 'pl1', 'Москва', '—', ['#1d1d1b', '#e30613'], 45),
    'РостАгроЭкспорт': ('rostagro', 'pl10', 'Пушкино', '—', ['#f5c400', '#1d1d1b'], 50),
    'Элемент': ('element', 'pl10', 'Дубна', '—', ['#e8542f', '#2e3b8f'], 46),
    'Меридиан-Север': ('meridian', 'pl10', 'Талдом', '—', ['#1d1d1b', '#5cb85c'], 45),
    'СШОР Метеор': ('meteor', 'pl10', 'Балашиха', '—', ['#2e8b3a', '#f5c400'], 41),
    'Петербург 04': ('peterburg04', 'pl5', 'Санкт-Петербург', '—', ['#1f6fd1', '#ffffff'], 49),
    'СТД Петрович': ('std_petrovich', 'pl5', 'Санкт-Петербург', '—', ['#1d1d1b', '#e30613'], 49),
    'Ажио': ('azhio', 'pl5', 'Санкт-Петербург', '—', ['#1d1d1b', '#ffffff'], 48),
    'Кристалл-М': ('kristall_m', 'pl5', 'Санкт-Петербург', '—', ['#f26c21', '#4a4a4a'], 48),
    'АвтоТрансИнфо': ('ati', 'pl5', 'Санкт-Петербург', '—', ['#3d4a57', '#ffffff'], 46),
    'Митрополия': ('mitropoliya', 'pl5', 'Санкт-Петербург', '—', ['#1d3557', '#c9a24b'], 45),
    'Кредо-Транс': ('kredo', 'pl5', 'Санкт-Петербург', '—', ['#1d4f91', '#3aa935'], 45),
    'Петергоф': ('petergof', 'pl5', 'Петергоф', '—', ['#d71920', '#f5c400'], 44),
    'Невская Ко': ('nevskaya', 'pl5', 'Санкт-Петербург', '—', ['#f07c32', '#1d4f91'], 43),
    'Универсал': ('universal', 'pl5', 'Санкт-Петербург', '—', ['#1f7a3a', '#f5c400'], 41),
    'Финиш': ('finish', 'pl1', 'Москва', '—', ['#1f6fd1', '#ffffff'], 46),
    'Столица': ('stolitsa', 'pl1', 'Видное', '—', ['#1d4f91', '#d71920'], 49),
    'ЛКС': ('lks', 'pl9', 'Липецк', '—', ['#1d5e2f', '#ffffff'], 46),
    'Старт Алюмика': ('start_alumika', 'pl2', 'Нижний Новгород', '—', ['#c9a24b', '#1d1d1b'], 49),
    'Волна-ФФК': ('volna', 'pl2', 'Нижний Новгород', '—', ['#39b54a', '#1d1d1b'], 47),
    'Платон': ('platon', 'pl2', 'Ульяновск', '—', ['#1d1d1b', '#ffffff'], 47),
    'Витязь': ('vityaz', 'pl2', 'Маркс', '—', ['#1d2a5b', '#c8102e'], 47),
    'МБЛ': ('mbl', 'pl2', 'Саратов', '—', ['#4fb6e3', '#ffffff'], 47),
    'Капкан': ('kapkan', 'pl2', 'Балаково', '—', ['#1d1d1b', '#ffffff'], 45),
    'Сотранс': ('sotrans', 'pl2', '—', '—', ['#e8542f', '#1d1d1b'], 45),
    'Доминанта': ('dominanta', 'pl2', 'Оренбург', '—', ['#1d1d1b', '#c9a24b'], 46),
    'Механический завод': ('mehzavod', 'pl2', 'Переволоцкий', '—', ['#2a6ebb', '#ffffff'], 45),
    'СтройПутьСервис': ('stroyput', 'pl2', '—', '—', ['#1d1d1b', '#f2c500'], 44),
    'Прогресс-КПРФ': ('progress_kprf', 'pl3', '—', '—', ['#d71920', '#ffffff'], 45),
    'Лига': ('liga', 'pl3', 'Нефтекамск', '—', ['#f5e400', '#1d1d1b'], 45),
    'Прогресс-Бионорд': ('bionord', 'pl3', 'Пермь', '—', ['#1d5fa8', '#e30613'], 46),
    'Красноусольская премиум': ('krasnousol', 'pl3', 'Красноусольский', '—', ['#1d1d1b', '#ffffff'], 45),
    'Мир': ('mir', 'pl3', 'Челябинск', '—', ['#e30613', '#ffffff'], 47),
    'Сигма-К': ('sigma', 'pl3', 'Копейск', '—', ['#1d1d1b', '#f2e600'], 46),
    'СБЕР': ('sber', 'pl3', 'Курган', '—', ['#21a038', '#ffffff'], 46),
    'Спарта': ('sparta', 'pl3', 'Талица', '—', ['#c8102e', '#1d1d1b'], 48),
    'Штурм': ('sturm', 'pl3', 'Сургут', '—', ['#f5d000', '#1d1d1b'], 47),
    'ЧелГУ': ('chelgu', 'pl3', 'Челябинск', '—', ['#d71920', '#ffffff'], 45),
    'Вектор': ('vektor', 'pl3', 'Тюмень', '—', ['#1d2a5b', '#c8102e'], 47),
    'Факел-Динамо': ('fakel_dinamo', 'pl3', 'Тюмень', '—', ['#1d1d1b', '#ffffff'], 47),
    'Трейд': ('treid', 'pl3', 'Курган', '—', ['#1f5aa6', '#ffffff'], 45),
    'Газпромнефть – СШ им. К. Еременко': ('gpn_noyabrsk', 'pl3', 'Ноябрьск', '—', ['#0072bc', '#f58220'], 47),
    'Нефтяник': ('neftyanik', 'pl3', 'Сургут', '—', ['#1f9ad6', '#ffffff'], 47),
    'РН-Ремонт НПО': ('rn_remont', 'pl3', 'Губкинский', '—', ['#1d1d1b', '#ffd100'], 46),
    'Газпром СУМУО': ('sumuo', 'pl3', 'Новый Уренгой', '—', ['#1f5aa6', '#ffffff'], 47),
    'Север': ('sever', 'pl3', '—', '—', ['#1d2a5b', '#ffffff'], 45),
    'АлтПолитех': ('altpoliteh', 'pl4', 'Барнаул', '—', ['#e8542f', '#ffffff'], 47),
    'Виджей спортс': ('vj_sports', 'pl4', 'Барнаул', '—', ['#1d1d1b', '#c9a24b'], 46),
    'Сибирьэнергосервис': ('sibenergo', 'pl4', 'Новосибирск', '—', ['#1d5fa8', '#f39200'], 47),
    'Кузбасс': ('kuzbass', 'pl4', 'Кемерово', '—', ['#1d1d1b', '#3fae49'], 50),
    'Кемерово': ('kemerovo', 'pl4', 'Кемерово', '—', ['#f5c400', '#d71920'], 46),
    'Провинция': ('provintsiya', 'pl4', 'Кемерово', '—', ['#1d1d1b', '#f5c400'], 46),
    'АЯН': ('ayan', 'pl4', 'Чита', '—', ['#d71920', '#1d1d1b'], 44),
    # «Золотое кольцо» — Межрегиональная мини-футбольная лига 2025/26 (mini-football76.ru, tools/goldring.py)
    'Академия LS': ('akademia_ls', 'pl6', 'Ярославль', '—', ['#1d5fa8', '#ffffff'], 47),
    'Локомотив': ('lokomotiv_yar', 'pl6', 'Ярославль', '—', ['#d71920', '#ffffff'], 47),
    'Авангард': ('avangard_teik', 'pl6', 'Тейково', '—', ['#d71920', '#1d1d1b'], 46),
    'ВоГУ': ('vogu', 'pl6', 'Вологда', '—', ['#1d5fa8', '#f5c400'], 46),
    'СК Шинник': ('shinnik_sk', 'pl6', 'Ярославль', '—', ['#1d5fa8', '#1d1d1b'], 45),
    'Барс': ('bars_ivanovo', 'pl6', 'Иваново', '—', ['#1d1d1b', '#f39200'], 45),
    'Метэл': ('metel', 'pl6', 'Кострома', '—', ['#6b6b6b', '#1d5fa8'], 44),
    'Грань - Декостек': ('gran', 'pl6', 'Гусь-Хрустальный', '—', ['#3fae49', '#ffffff'], 44),
    'МФК Князь Владимир': ('knyaz_vladimir', 'pl6', 'Владимир', '—', ['#c9a24b', '#d71920'], 44),
    'СШ №13': ('sh13_yar', 'pl6', 'Ярославль', '—', ['#1d5fa8', '#d71920'], 43),
    'Звезда - BigTech': ('zvezda_bigtech', 'pl6', 'Ярославль', '—', ['#1d1d1b', '#d71920'], 43),
    # «Северо-Запад» — Чемпионат СЗФО по футзалу 2024/25 (nwfootball.ru, tools/nwfutsal.py); уровень — по итоговым местам
    'Армида': ('armida', 'pl7', 'Архангельск', '—', ['#1d5fa8', '#ffffff'], 47),
    'Новгородский водоканал': ('vodokanal_nov', 'pl7', 'Великий Новгород', '—', ['#1d9bd7', '#ffffff'], 47),
    'САФУ': ('safu', 'pl7', 'Архангельск', '—', ['#1d3f8f', '#c9a24b'], 46),
    'НПК-ГРУПП': ('npk_group', 'pl7', '—', '—', ['#e8542f', '#1d1d1b'], 45),
    'ПетрГУ-Альфа': ('petrsu_alfa', 'pl7', 'Петрозаводск', '—', ['#1d5fa8', '#d71920'], 45),
    'Альянс': ('alyans_ptz', 'pl7', 'Петрозаводск', '—', ['#3fae49', '#ffffff'], 45),
    'Интер': ('inter_nw', 'pl7', 'Псков', '—', ['#1d1d1b', '#1d5fa8'], 44),
    'ФК Сиверский-СГМО': ('siversky', 'pl7', 'Сиверский', '—', ['#f5c400', '#1d5fa8'], 43),
    # «Юг и Северный Кавказ» — участники Чемпионата ЮФО и СКФО; составы со страниц, сохранённых вручную (tools/south.py)
    'Гвардеец': ('gvardeets', 'pl8', 'Донецк', '—', ['#1d5fa8', '#d71920'], 47),
    'Альфа': ('alfa', 'pl8', 'Краснодар', '—', ['#1d5fa8', '#ffffff'], 46),
    'РСШ': ('rsh', 'pl8', 'Грозный', '—', ['#3fae49', '#d71920'], 46),
    'Шахтёр Донбасс': ('shakhter', 'pl8', 'Донецк', '—', ['#f39200', '#1d1d1b'], 45),
    'Капитан': ('kapitan', 'pl8', 'Севастополь', '—', ['#1d3f8f', '#ffffff'], 45),
    'Спортинг': ('sporting', 'pl8', 'Ростов-на-Дону', '—', ['#3fae49', '#ffffff'], 45),
    'Гагаринг': ('gagaring', 'pl8', 'Краснодар', '—', ['#1d1d1b', '#c9a24b'], 45),
    'Собер': ('sober', 'pl8', 'Северская', '—', ['#d71920', '#1d1d1b'], 44),
    'Юнити': ('unity', 'pl8', 'Абинск', '—', ['#6a1b9a', '#ffffff'], 44),
    'Авиатор': ('aviator', 'pl8', 'Ростов-на-Дону', '—', ['#1d9bd7', '#ffffff'], 44),
    # «Центр» — первая лига СФФ «Центр» 2025/26 (junior.uffc.ru, страницы сохранены вручную — tools/nagradion.py)
    'Конфеста': ('konfesta', 'pl9', 'Касимов', '—', ['#1d5fa8', '#ffffff'], 46),
    'Конфеста-2': ('konfesta2', 'pl9', 'Касимов', '—', ['#1d5fa8', '#ffffff'], 43),
    'Хлебороб': ('khleborob', 'pl9', 'Хохольский', '—', ['#f5c400', '#3fae49'], 44),
    'Энергетик': ('energetik_kur', 'pl9', 'Курчатов', '—', ['#1d9bd7', '#f39200'], 43),
    # «Дальний Восток» — участники Чемпионата ДФО «Первая лига»; составы — чемпионат Сахалинской области по футзалу
    # 2025/26 (sakhfootball.nagradion.ru, страницы сохранены вручную — tools/nagradion.py)
    'Меркурий': ('merkuriy', 'pl11', 'Южно-Сахалинск', '—', ['#1d5fa8', '#f5c400'], 46),
    'Сахалин': ('sakhalin', 'pl11', 'Южно-Сахалинск', '—', ['#1d9bd7', '#ffffff'], 45),
    'Поронайск': ('poronaysk', 'pl11', 'Поронайск', '—', ['#d71920', '#ffffff'], 44),
    # остальные участники Чемпионата ДФО: составов в открытом доступе нет — игроки вымышленные (FICTIONAL ниже)
    'Волат': ('volat', 'pl11', 'Хабаровск', '—', ['#d71920', '#1d1d1b'], 46),  # состав — ГорЛига АМФР, Хабаровск (amfr.ru)
    'Амур': ('amur', 'pl11', 'Хабаровск', '—', ['#1d5fa8', '#ffffff'], 45),
    'ММК': ('mmk_vl', 'pl11', 'Владивосток', '—', ['#1d3f8f', '#ffffff'], 45),
    'Камчатка': ('kamchatka', 'pl11', 'Петропавловск-Камчатский', '—', ['#f39200', '#1d1d1b'], 44),
    'ДЮСШ Камчатка': ('kamchatka_dyussh', 'pl11', 'Петропавловск-Камчатский', '—', ['#f39200', '#ffffff'], 43),
    'Маяк': ('mayak_vanino', 'pl11', 'Ванино', '—', ['#1d9bd7', '#ffffff'], 43),
    'Анадырь': ('anadyr', 'pl11', 'Анадырь', '—', ['#ffffff', '#1d5fa8'], 43),
}
# Клубы без доступных составов: игроки вымышленные, но стабильные (генератор с зерном по id клуба).
# Значение — возрастной диапазон (у спортшколы — молодёжь).
FICTIONAL = {'volat': (19, 36), 'amur': (19, 36), 'mmk_vl': (19, 36), 'kamchatka': (19, 36), 'kamchatka_dyussh': (16, 21),
             'mayak_vanino': (19, 38), 'anadyr': (19, 38)}
FIRST = ('Александр Алексей Андрей Антон Артём Богдан Вадим Виктор Виталий Владимир Владислав Глеб Даниил Денис Дмитрий '
         'Евгений Егор Иван Игорь Илья Кирилл Константин Максим Матвей Михаил Никита Николай Олег Павел Роман Руслан '
         'Сергей Степан Тимур Фёдор Юрий Ярослав').split()
LAST = ('Абрамов Белов Беляев Борисов Васильев Виноградов Волков Воробьёв Гаврилов Голубев Горбунов Гусев Давыдов Данилов '
        'Дмитриев Егоров Ершов Жуков Зайцев Зуев Иванов Ильин Калинин Карпов Киселёв Ковалёв Козлов Комаров Корнилов '
        'Крылов Кудрявцев Кузнецов Лебедев Логинов Макаров Максимов Медведев Мельников Миронов Морозов Назаров Никитин '
        'Новиков Орлов Осипов Павлов Панов Петров Поляков Попов Романов Рябов Савельев Семёнов Сергеев Сидоров Смирнов '
        'Соболев Соколов Соловьёв Степанов Субботин Тарасов Титов Тихонов Фёдоров Филиппов Фролов Харитонов Чернов '
        'Шестаков Широков Щербаков Юдин Яковлев').split()


def fictional(tid, ages):
    rnd = random.Random(tid)
    names, players = set(), []
    for amp, n in (('Вр.', 2), ('Зщ.', 4), ('Ун..', 4), ('Нп.', 4)):
        for _ in range(n):
            name = f'{rnd.choice(LAST)} {rnd.choice(FIRST)}'
            while name in names: name = f'{rnd.choice(LAST)} {rnd.choice(FIRST)}'
            names.add(name)
            g = rnd.randint(0, 12)
            goals = 0 if amp == 'Вр.' else round(g * rnd.uniform(0, {'Зщ.': 0.3, 'Ун..': 0.5, 'Нп.': 0.9}[amp]))
            players.append({'pid': '', 'name': name, 'amp': amp, 'birth': f'—, {rnd.randint(*ages)} лет', 'stats': [str(g), str(goals)]})
    return players
for name, (tid, zone, city, arena, colors, level) in PL.items():
    META[name] = (tid, city, arena, 300, colors, 35 + (level - 44), 15, level)


# ЮФЛ U-19 и U-17: молодёжные составы — академии основных клубов (Кузбасс, ЦСКА и Ровесник в игре без взрослых команд)
YOUTH = {'Водник': 'vodnik', 'Газпром-Югра': 'gazprom', 'ИрАэро': 'iraero', 'КПРФ': 'kprf', 'Кристалл': 'kristall',
         'Новая генерация': 'newgen', 'Норильск': 'norilsk', 'Синара': 'sinara', 'Торпедо': 'torpedo', 'Тюмень': 'tyumen',
         'Ухта': 'ukhta', 'ЮКИОР': 'surgut'}

# Ручные правки составов: клуб → {игрок в заявке: замена}. Замена — новое имя, словарь с полями name/pos/age/nat
# или None (игрок ушёл из клуба).
EDITS = {
    'kapkan': {'Тагир Карагулов': None, 'Артем Едренкин': {'pos': 'DF'}, 'Максим Пышный': {'pos': 'FW'}, 'Семен Кузнецов': {'pos': 'FW'}},
}
# текущие составы с sefl.ru (tools/sefl.py): игроки, которых нет в заявке Кубка, добавляются в клуб
sefl = {t['team_id']: t['players'] for t in json.load(open(D + '/sefl.json', encoding='utf8'))} if os.path.exists(D + '/sefl.json') else {}

# домашняя зона Первой лиги для клубов Суперлиги и Высшей лиги — по городу (туда клуб уходит при вылете)
HOME_ZONE = {'kprf': 'pl1', 'kprf2': 'pl1', 'kristall': 'pl5', 'newgen': 'pl7', 'newgen2': 'pl7', 'ukhta': 'pl7', 'vodnik': 'pl7',
             'tzms': 'pl9', 'tzms2': 'pl9', 'torpedo': 'pl2', 'volga': 'pl2', 'saratov': 'pl2', 'progress': 'pl2', 'metallurg': 'pl2',
             'zarya': 'pl8', 'gazprom': 'pl3', 'gazprom2': 'pl3', 'surgut': 'pl3', 'surgut2': 'pl3', 'tyumen': 'pl3', 'tyumen2': 'pl3',
             'sofia': 'pl3', 'sinara': 'pl3', 'sinara2': 'pl3', 'optimum': 'pl3', 'yuzhural': 'pl3', 'fakel_yamal': 'pl3',
             'iraero': 'pl4', 'norilsk': 'pl4', 'norilsk2': 'pl4', 'sibiryak': 'pl4'}

RESERVE = {'kristall_m': 'kristall', 'konfesta2': 'konfesta', 'kamchatka_dyussh': 'kamchatka', 'kprf2': 'kprf', 'gazprom2': 'gazprom', 'tzms2': 'tzms', 'sinara2': 'sinara', 'tyumen2': 'tyumen',
           'surgut2': 'surgut', 'newgen2': 'newgen', 'norilsk2': 'norilsk'}
WEST = {'Водник', 'Волга Ульяновск', 'Газпром-Югра-2', 'Заря Луганск', 'КПРФ-2', 'Металлург', 'Саратов-Волга', 'ТЗМС-2', 'Ухта', 'Факел ЯМАЛ'}

def num(x):
    x = (x or '').split(' ')[0]
    return int(x) if x.isdigit() else 0

all_teams = teams
# московская зона (mosff.ru): полные имена и статистика — прямо в заявке
mosff = json.load(open(D + '/mosff.json', encoding='utf8')) if os.path.exists(D + '/mosff.json') else []
for t in mosff:
    for p in t['players']:
        pinfo[f"mosff_{p['pid']}"] = {'full': p['full'], 'games': int(p['stats'][0] or 0), 'goals': int(p['stats'][1] or 0)}
# составы с сайтов «Наградиона», сохранённые вручную (tools/nagradion.py): амплуа и дат рождения там нет
nagr = json.load(open(D + '/nagradion.json', encoding='utf8')) if os.path.exists(D + '/nagradion.json') else []
for t in nagr:
    # дубль суперлигового «Кристалла» в чемпионате Санкт-Петербурга называется просто «Кристалл»
    if t['name'] == 'Кристалл' and t['host'] == 'stat.ffspb.org': t['name'] = 'Кристалл-М'
    if t['name'] == 'Конфеста_2': t['name'] = 'Конфеста-2'
# зона «Золотое кольцо» (tools/goldring.py): амплуа, матчи и голы — из протоколов турнира
zk = json.load(open(D + '/goldring.json', encoding='utf8')) if os.path.exists(D + '/goldring.json') else []
# зона «Северо-Запад» (tools/nwfutsal.py): составы, амплуа и голы — из протоколов чемпионата СЗФО 2024/25
nwf = json.load(open(D + '/nwfutsal.json', encoding='utf8')) if os.path.exists(D + '/nwfutsal.json') else []
# зона «Юг и Северный Кавказ» (tools/south.py): название клуба — по id файла
south = json.load(open(D + '/south.json', encoding='utf8')) if os.path.exists(D + '/south.json') else []
by_id = {v[0]: k for k, v in PL.items()}
for t in south: t['name'] = by_id[t['team_id']]
# вымышленный состав — только пока нет настоящего (сохранённая страница в .cache/saved/south, tools/south.py)
fict = [{'league': 'fict', 'team_id': tid, 'name': next(k for k, v in PL.items() if v[0] == tid), 'players': fictional(tid, ages)}
        for tid, ages in FICTIONAL.items() if tid not in {t['team_id'] for t in south}]
all_teams = all_teams + mosff + nagr + zk + nwf + south + fict
# приоритет источников: заявка Кубка 2026/27, затем московская зона, затем Кубок 2025/26
cup26 = {t['name'] for t in all_teams if t['league'] == 'cup'}
mos = {t['name'] for t in mosff}
teams = [t for t in all_teams if t['league'] in ('sl', 'vl') or (t['league'] == 'cup' and t['name'] in PL)
         or (t['league'] == 'mosff' and t['name'] in PL and t['name'] not in cup26)
         or (t['league'] == 'cup25' and t['name'] in PL and t['name'] not in cup26 | mos)
         or (t['league'] == 'nagr' and t['name'] in PL and t['name'] not in cup26 | mos | {x['name'] for x in all_teams if x['league'] == 'cup25'})
         or (t['league'] in ('zk', 'nwf', 'south', 'fict') and t['name'] in PL)]
missing = set(PL) - {t['name'] for t in teams}
if missing: sys.exit(f'нет заявок: {missing}')

# Игрок, заявленный и за основу, и за дубль, остаётся там, где сыграл больше матчей в этом сезоне (при равенстве — в основе).
seen = {}
for t in teams:
    for p in t['players']:
        key = (p['name'], p['birth'][:10])
        g = num(p['stats'][0] if p['stats'] else '')
        main = t['league'] == 'sl' or t['name'] in ('Ухта',)
        cur = seen.get(key)
        # заявки текущего сезона важнее прошлогодних (Кубок 2025/26)
        old = t['league'] in ('cup25', 'nagr', 'zk', 'nwf', 'south', 'fict')  # mosff — тоже текущий сезон
        if cur is None or (cur[3] and not old) or (cur[3] == old and (g > cur[0] or (g == cur[0] and main and not cur[2]))):
            seen[key] = (g, t['team_id'], main, old)

leagues = {'sl': [], 'vlw': [], 'vle': [], **{z: [] for z in PL_ZONES}}
for t in teams:
    meta = META[t['name']]
    tid, city, stadium, cap, colors, rep, money, level = meta
    rows = []
    # игроки без даты рождения (бывают в старых заявках) пропускаются
    rel = [p for p in t['players'] if ',' in p.get('birth', '') and p.get('amp') in POS and seen[(p['name'], p['birth'][:10])][1] == t['team_id']]
    gm = max([num(p['stats'][0]) for p in t['players'] if p['stats']] + [1])
    for p in rel:
        info = pinfo.get(t['league'] + '_' + p['pid'], {})
        pos = POS[p['amp']]
        age = int(p['birth'].split(',')[1].split()[0])
        st = p['stats'] + ['0'] * 5
        g, gs = num(st[0]), num(st[1])
        cg = max(info.get('games', 0), g)
        share = min(1, g / gm)
        exp = min(1, math.log10(1 + cg) / math.log10(250))
        if t['league'] == 'nagr' or t.get('nostats'): share, exp = 0.6, 0.4  # статистики нет — средняя роль в команде
        if pos == 'GK':
            adj = -10 + 9 * share + 7 * exp
        else:
            prod = min(1, (gs / max(g, 1)) / 0.7) * min(1, g / 4)
            if t['league'] == 'nagr' or t.get('nostats'): prod = 0.3
            adj = -10 + 7 * share + 6 * exp + 3 * prod
        if age < 20: adj -= (20 - age) * 1.2
        if age > 33: adj -= (age - 33) * 0.8
        ovr = max(35, min(90, round(level + adj)))
        if p['name'] in FOREIGN: name, nat = FOREIGN[p['name']]
        else:
            last, first = p['name'].split(' ', 1)
            name, nat = f'{first} {last}', NAT_BY_NAME.get(p['name'], 'RUS')
        if name in EDITS.get(tid, {}) and EDITS[tid][name] is None: continue
        e = EDITS.get(tid, {}).get(name)
        if e:
            e = {'name': e} if isinstance(e, str) else e
            name, pos, age, nat = e.get('name', name), e.get('pos', pos), e.get('age', age), e.get('nat', nat)
        rows.append((pos, -ovr, f'{name}|{pos}|{age}|0|{nat}|{ovr}'))
    have = {r[2].split('|')[0].replace('ё', 'е') for r in rows}
    sgm = max([p['games'] for p in sefl.get(tid, [])] + [1])
    for p in sefl.get(tid, []):
        if p['name'].replace('ё', 'е') in have: continue
        pos, age, g, gs = p['amp'], p['age'], p['games'], p['goals']
        share, exp = min(1, g / sgm), min(1, math.log10(1 + g) / math.log10(250))
        if pos == 'GK': adj = -10 + 9 * share + 7 * exp
        else: adj = -10 + 7 * share + 6 * exp + 3 * min(1, (gs / max(g, 1)) / 0.7) * min(1, g / 4)
        if age < 20: adj -= (20 - age) * 1.2
        if age > 33: adj -= (age - 33) * 0.8
        ovr = max(35, min(90, round(level + adj)))
        rows.append((pos, -ovr, f"{p['name']}|{pos}|{age}|0|RUS|{ovr}"))
    rows.sort(key=lambda r: (['GK', 'DF', 'UN', 'FW'].index(r[0]), r[1]))
    if t['name'] in PL: lg = PL[t['name']][1]
    else: lg = 'sl' if t['league'] == 'sl' else ('vlw' if t['name'] in WEST else 'vle')
    extra = (f", reserveOf: '{RESERVE[tid]}'" if tid in RESERVE else '') + (f", zone: '{HOME_ZONE[tid]}'" if tid in HOME_ZONE else '')
    leagues[lg].append(f"    {{ id: '{tid}', name: '{t['name']}', city: '{city}', stadium: '{stadium}', cap: {cap}, colors: ['{colors[0]}', '{colors[1]}'], rep: {rep}, money: {money}{extra}, players: `\n" + '\n'.join(r[2] for r in rows) + '` },\n')
    print(t['name'], len(rows), file=sys.stderr)

HEAD = {
    'sl': ("// БЕТСИТИ Суперлига 2026/27. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг\n"
           "// Заявки, амплуа и возраст — superliga.rfs.ru (октябрь 2026). Рейтинг рассчитан по уровню клуба и роли игрока\n"
           "// в команде (матчи сезона, опыт в лиге, голы). Вместимость арен — приблизительная.\n"
           "FM.addLeague({\n  id: 'sl', name: 'БЕТСИТИ Суперлига', short: 'СЛ', tier: 1, weekday: 5, double: true,\n"
           "  autumn: { from: '08-28', rounds: 14 }, spring: { from: '01-29', rounds: 8 },\n"
           "  playoff: { size: 8, playIn: true },\n"
           "  ticket: 4, prize: [600, 400, 300, 220, 180, 150, 120, 100, 90, 80, 70, 60],\n  teams: [\n"),
    'vlw': ("// Высшая лига 2026/27, конференция «Запад». Заявки — futsal.rfs.ru (октябрь 2026).\n"
            "// Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Резервные команды не повышаются в классе.\n"
            "FM.addLeague({\n  id: 'vlw', name: 'Высшая лига «Запад»', short: 'ВЛ-З', tier: 2, conf: 'W', weekday: 6,\n"
            "  autumn: { from: '09-05', rounds: 12 }, spring: { from: '02-06', rounds: 6 },\n"
            "  ticket: 1.5, prize: [80, 60, 45, 35, 30, 25, 20, 15, 12, 10],\n  teams: [\n"),
    'vle': ("// Высшая лига 2026/27, конференция «Восток». Заявки — futsal.rfs.ru (октябрь 2026).\n"
            "// Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Резервные команды не повышаются в классе.\n"
            "FM.addLeague({\n  id: 'vle', name: 'Высшая лига «Восток»', short: 'ВЛ-В', tier: 2, conf: 'E', weekday: 6,\n"
            "  autumn: { from: '09-05', rounds: 12 }, spring: { from: '02-06', rounds: 6 },\n"
            "  ticket: 1.5, prize: [80, 60, 45, 35, 30, 25, 20, 15, 12],\n  teams: [\n"),
}
for z, (zname, side, quota) in PL_ZONES.items():
    n = len(leagues[z])
    rounds = 2 * (n - 1 + n % 2)
    src = {'pl6': 'составы — Межрегиональная мини-футбольная лига 2025/26 АМФ «Золотое кольцо» (mini-football76.ru)',
           'pl7': 'составы — протоколы чемпионата СЗФО по футзалу 2024/25 (nwfootball.ru)',
           'pl8': 'составы — заявки на Чемпионат ЮФО и СКФО (ingame-sports.ru) и сайты любительских лиг (krasnodarlfl.ru, fmfabinsk.ru)',
           'pl9': 'составы — первая лига СФФ «Центр» 2025/26 (junior.uffc.ru) и Кубок России 2025/26 (ЛКС)',
           'pl10': 'составы — первенство Московской области (ffmo.ru)',
           'pl11': 'составы сахалинских клубов — чемпионат Сахалинской области по футзалу 2025/26 (sakhfootball.nagradion.ru), '
                   'у остальных клубов игроки вымышленные'}.get(
           z, 'заявки — mosff.ru (Москва) и Кубок России 2026/27 или 2025/26 (futsal.rfs.ru)')
    HEAD[z] = (f"// Первая лига 2026/27, зона «{zname}». Любительские клубы; {src}.\n"
               f"// Два круга в зоне; {'победитель зоны играет' if quota == 1 else f'{quota} лучших команды зоны играют'} во Всероссийском финале (16 команд), финалисты выходят в Высшую лигу.\n"
               f"FM.addLeague({{\n  id: '{z}', name: 'Первая лига «{zname}»', short: 'ПЛ-{z[2:]}', tier: 3, conf: '{side}', finalQuota: {quota}, weekday: 0,\n"
               f"  autumn: {{ from: '09-13', rounds: {round(rounds * 0.6)} }}, spring: {{ from: '02-07', rounds: {rounds - round(rounds * 0.6)} }},\n"
               "  ticket: 0.5, prize: [25, 18, 14, 10, 8, 6, 5, 4, 3, 2, 2, 2],\n  teams: [\n")
for lg in ('plw', 'ple'):
    if os.path.exists(f'{OUT}/{lg}.js'): os.remove(f'{OUT}/{lg}.js')
for lg, items in leagues.items():
    open(f'{OUT}/{lg}.js', 'w', encoding='utf8').write(HEAD[lg] + '\n'.join(items) + '  ],\n});\n')

# ---------- академии ----------
# Рейтинг воспитанника = уровень основы клуба − 20 + роль в молодёжной команде − поправка за возраст; потенциал выше
# у тех, кто много играет и забивает. Игроки, уже заявленные за взрослые команды, в академию не попадают.
level_of = {m[0]: m[7] for m in META.values()}
acad = {}
for t in sorted(all_teams, key=lambda t: t['league'] != 'u19'):
    if t['league'] not in ('u19', 'u17'): continue
    club = YOUTH.get(t['name'].replace(' U-19', '').replace(' U-17', ''))
    if not club: continue
    gm = max([num(p['stats'][0]) for p in t['players'] if p['stats']] + [1])
    for p in t['players']:
        if ',' not in p.get('birth', ''): continue  # без даты рождения
        key = (p['name'], p['birth'][:10])
        if key in seen or any(key == k for k, _ in acad.get(club, [])): continue
        age = int(p['birth'].split(',')[1].split()[0])
        st = p['stats'] + ['0'] * 5
        g, gs = num(st[0]), num(st[1])
        share = min(1, g / gm)
        pos = POS.get(p['amp'], 'UN')
        prod = 0 if pos == 'GK' else min(1, (gs / max(g, 1)) / 0.8) * min(1, g / 3)
        ovr = round(level_of[club] - 20 - 4 + 5 * share + 3 * prod - max(0, 18 - age) * 1.5)
        pot = min(88, ovr + 12 + round(5 * prod + 3 * share) + max(0, 18 - age) * 2)
        last, first = p['name'].split(' ', 1)
        acad.setdefault(club, []).append((key, f'{first} {last}|{pos}|{age}|{max(35, ovr)}|{pot}'))
with open(f'{OUT}/academy.js', 'w', encoding='utf8') as f:
    f.write('// Академии клубов: молодёжные составы ЮФЛ U-19 и U-17 2026/27 (futsal.rfs.ru). Строка: Имя|Позиция|Возраст|Рейтинг|Потенциал.\n')
    f.write('// Каждое лето из академии в основу переходят 1–3 старших воспитанника; когда академия пустеет, игра генерирует новых.\n')
    f.write('FM.ACADEMY = {\n' + ''.join(f"  {club}: `\n" + '\n'.join(x[1] for x in rows) + '`,\n' for club, rows in sorted(acad.items())) + '};\n')
print('академии:', {k: len(v) for k, v in acad.items()}, file=sys.stderr)
