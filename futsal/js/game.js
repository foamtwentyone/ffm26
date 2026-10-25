// Игровой мир: клубы, игроки, календарь, кубок, переходы между лигами, трансферы, финансы.
(function () {
  const SQUAD_NEED = { GK: 2, DF: 2, UN: 4, FW: 2 };
  const SLOT_ORDER = ['GK', 'FW', 'DF', 'UN'];
  const MAX_SQUAD = 24;
  const MIN_SQUAD = 16;
  // плей-офф Кубка (3-й этап) — по вторникам; групповые этапы — со вторника на четверг в начале сентября и в конце октября
  const CUP_ROUNDS = [
    { name: '1/8 финала', date: '11-17', y: 0 },
    { name: '1/4 финала', date: '12-08', y: 0 },
    { name: '1/2 финала', date: '02-23', y: 1 },
    { name: 'Финал', date: '03-24', y: 1 },
  ];
  // Плей-офф: число побед в серии и хозяева матчей серии (hi — клуб выше по посеву, lo — ниже)
  const SERIES = { 1: ['hi'], 3: ['lo', 'hi', 'hi'], 5: ['hi', 'hi', 'lo', 'lo', 'hi'] };

  // туры общего этапа еврокубков (ближайший нужный день недели не раньше этой даты)
  const EURO_MD = ['09-15', '09-29', '10-20', '11-03', '11-24', '12-08', '01-19', '01-26'];

  const PLAYER_DEFAULTS = { fit: 100, morale: 60, inj: 0, sus: 0, ycAcc: 0, gen: false, listed: false };

  class Game {
    constructor(state) {
      this.s = state;
      // сохранение хранит игроков без значений по умолчанию (см. packState) — восстанавливаем их
      for (const id in state.players) Game.unpackPlayer(state.players[id]);
      this.players = state.players;
      this.teams = state.teams;
      this._tables = {};
    }

    static unpackPlayer(p) {
      for (const k in PLAYER_DEFAULTS) if (p[k] === undefined) p[k] = PLAYER_DEFAULTS[k];
      if (p.club === undefined) p.club = null;
      p.st = Object.assign({ apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 }, p.st);
      p.cst = Object.assign({ apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 }, p.cst);
      p.car = Object.assign({ apps: 0, g: 0, a: 0 }, p.car);
      return p;
    }

    // Академии: { клуб: [{ name, pos, born, ovr, pot, year }] }, year — сезон, в котором записан рейтинг
    static parseAcademy(src, season) {
      const out = {};
      for (const club in src) {
        out[club] = src[club].split('\n').map((x) => x.trim()).filter(Boolean).map((line) => {
          const [name, pos, age, ovr, pot] = line.split('|');
          return { name, pos, born: season - +age, ovr: +ovr, pot: +pot, year: season };
        });
      }
      return out;
    }

    // Компактная копия состояния для сохранения: у ~18 тыс. игроков опускаются нули и значения по умолчанию.
    packState() {
      const s = this.s;
      const players = {};
      for (const id in s.players) {
        const p = s.players[id], q = {};
        for (const k in p) {
          const v = p[k];
          if (v === null || v === undefined || (k in PLAYER_DEFAULTS && v === PLAYER_DEFAULTS[k])) continue;
          if (k === 'st' || k === 'cst' || k === 'car') {
            const x = {};
            for (const j in v) if (v[j]) x[j] = v[j];
            if (Object.keys(x).length) q[k] = x;
          } else q[k] = k === 'vmul' ? Math.round(v * 1000) / 1000 : v;
        }
        players[id] = q;
      }
      return Object.assign({}, s, { players });
    }

    // ================== создание мира ==================
    static newGame(teamId, manager, db, opts = {}) {
      const s = {
        v: 1, manager, user: teamId, season: 2026, date: '2026-06-25',
        leagues: {}, order: [], teams: {}, players: {}, nextPid: 1, matches: {}, nextMid: 1,
        cup: null, playoff: null, inbox: [], news: [], freeAgents: [], history: [], nextMsg: 1,
        board: { conf: 60, expect: 8 }, settings: { autoSubs: false, ruEuro: opts.ruEuro !== false }, sacked: false,
        seasonLog: [], records: {},
      };
      const g = new Game(s);
      g.buildWorld(db || FM.leagues);
      s.academy = Game.parseAcademy(FM.ACADEMY || {}, s.season);
      g.newSeason(true);
      const t = g.teams[teamId];
      g.msg('Добро пожаловать!', `Совет директоров клуба «${t.name}» утвердил вас главным тренером. Задача на сезон: ${g.expectText()}. Трансферное окно открыто до 7 сентября.`, 'board');
      return g;
    }

    buildWorld(leagues) {
      const s = this.s;
      for (const L of leagues) {
        s.order.push(L.id);
        s.leagues[L.id] = {
          id: L.id, name: L.name, short: L.short, tier: L.tier, weekday: L.weekday, country: L.country || 'RUS',
          autumn: L.autumn, spring: L.spring, ticket: L.ticket, prize: L.prize, single: !!L.single, double: !!L.double, conf: L.conf || null, finalQuota: L.finalQuota || 0, teams: [],
        };
        for (const T of L.teams) {
          const team = {
            id: T.id, name: T.name, city: T.city, stadium: T.stadium, cap: T.cap, colors: T.colors,
            rep: T.rep || 50, money: T.money, league: L.id, zone: L.tier === 3 ? L.id : T.zone || null, reserveOf: T.reserveOf || null, logoData: T.logoData || undefined,
            players: [], formation: '1-2-1', lineup: [], bench: [], tactics: { ment: 0, press: 1, tempo: 1 },
            form: [], sponsor: 0, fin: { income: 0, expense: 0, log: [] },
          };
          s.teams[T.id] = team;
          s.leagues[L.id].teams.push(T.id);
          const lines = (T.players || '').split('\n').map((x) => x.trim()).filter(Boolean);
          for (const line of lines) {
            // Имя|Поз|Возраст|Стоимость|Гражданство[|Контракт] или, из редактора, ...|Рейтинг|Потенциал|g|Контракт;
            // «Контракт» — год, летом которого он истекает (как на Transfermarkt)
            const f = line.split('|');
            const [name, pos, age, value, nat] = f;
            const short = /^\d{4}$/.test(f[5] || '');
            const [ovr, pot, gen, until] = short ? [null, null, '', f[5]] : f.slice(5);
            this.createPlayer({ name, pos, age: +age, value: +value, nat: nat || 'RUS', ovr: ovr ? +ovr : null, pot: pot ? +pot : null, gen: gen === 'g', until: until ? +until : null }, team);
          }
          // у клубов без заданной репутации (европейские лиги) она считается по стоимости состава
          if (T.rep == null) team.rep = FM.repFromValue(this.squadValue(team));
          if (T.money == null) team.money = Math.round(this.squadValue(team) * 0.12);
          this.fillSquad(team);
        }
      }
      for (const id in s.teams) {
        const t = s.teams[id];
        t.sponsor = Math.round(this.wageBill(t) * 0.97 * 10) / 10;
        this.pickFormation(t);
      }
      for (let i = 0; i < 45; i++) {
        const tier = FM.pick([1, 2, 2, 3, 3, 3]);
        const base = [0, 64, 54, 50][tier];
        const p = this.genPlayer(FM.pick(FM.POS), base + FM.ri(-4, 3), FM.ri(19, 33), null);
        s.freeAgents.push(p.id);
      }
    }

    createPlayer(d, team) {
      const s = this.s;
      const id = s.nextPid++;
      const ovr = d.ovr || FM.ovrFromValue(d.value, d.age);
      const pot = d.pot || FM.potFor(ovr, d.age);
      const base = FM.baseValue(ovr, d.age, pot);
      const vmul = d.value ? FM.clamp(d.value / base, 0.4, 3) : 1;
      const tier = team ? this.tierOf(team) : 2;
      const p = {
        id, name: d.name, pos: d.pos, age: d.age, nat: d.nat || 'RUS', ovr, pot, vmul,
        value: d.value || FM.roundValue(base), club: team ? team.id : null,
        wage: 0, contract: d.until ? Math.max(s.season, d.until - 1) : s.season + (d.gen ? FM.ri(1, 4) : FM.ri(0, 3)), fit: 100, morale: 60, inj: 0, sus: 0, ycAcc: 0,
        gen: !!d.gen, listed: false,
        st: { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 },
        cst: { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 },
        car: { apps: 0, g: 0, a: 0 },
      };
      p.wage = Math.round(FM.wageFor(p.value, tier) * 10) / 10;
      s.players[id] = p;
      if (team) team.players.push(id);
      return p;
    }

    genPlayer(pos, ovr, age, team) {
      ovr = Math.round(FM.clamp(ovr, 35, 88));
      const c = team ? this.countryOf(team.league) : 'RUS';
      return this.createPlayer({ name: FM.genName(c), pos, age, ovr, nat: c, gen: true }, team);
    }

    teamBaseOvr(team) {
      // уровень сгенерированных игроков: ориентир — реальные игроки клуба, иначе репутация
      const real = team.players.map((id) => this.players[id]).filter((p) => !p.gen).map((p) => p.ovr).sort((a, b) => b - a);
      const byRep = 30 + team.rep * 0.5;
      if (real.length >= 8) return real[Math.floor(real.length * 0.6)];
      if (real.length >= 3) return (real[Math.floor(real.length / 2)] + byRep) / 2 - 1;
      return byRep;
    }

    fillSquad(team) {
      const base = this.teamBaseOvr(team);
      const count = {};
      for (const id of team.players) {
        const p = this.players[id];
        count[p.pos] = (count[p.pos] || 0) + 1;
      }
      for (const pos of FM.POS) {
        for (let i = count[pos] || 0; i < SQUAD_NEED[pos]; i++) {
          const age = FM.ri(18, 33);
          const o = base + FM.gauss(-2, 3.5) - (age < 21 ? 3 : 0);
          this.genPlayer(pos, o, age, team);
        }
      }
      while (team.players.length < MIN_SQUAD) {
        const age = FM.ri(17, 23);
        this.genPlayer(FM.pick(['UN', 'UN', 'DF', 'FW']), base + FM.gauss(-6, 3), age, team);
      }
    }

    tierOf(team) { return this.s.leagues[team.league].tier; }
    countryOf(lid) { return this.s.leagues[lid].country || 'RUS'; }
    // лига нужного уровня в той же стране (повышение, вылет, стыки)
    leagueAt(country, tier) { return this.s.order.find((id) => this.countryOf(id) === country && this.s.leagues[id].tier === tier); }
    isRussian(team) { return this.countryOf(team.league) === 'RUS'; }
    userTeam() { return this.teams[this.s.user]; }
    squad(team) { return team.players.map((id) => this.players[id]); }
    // Арендованный игрок: часть зарплаты (loan.wagePct) платит взявший клуб, остальное — владелец.
    wageBill(team) {
      let w = this.squad(team).reduce((a, p) => a + (p.loan ? p.wage * p.loan.wagePct / 100 : p.wage), 0);
      for (const pid of this.s.loans || []) {
        const p = this.players[pid];
        if (p && p.loan && p.loan.from === team.id) w += p.wage * (100 - p.loan.wagePct) / 100;
      }
      return w;
    }
    squadValue(team) { return this.squad(team).reduce((a, p) => a + p.value, 0); }
    isAvailable(p) { return !p.inj && !p.sus; }

    msg(title, text, type = 'info', data = null) {
      this.s.inbox.unshift({ id: this.s.nextMsg++, date: this.s.date, title, text, type, data, read: false });
      if (this.s.inbox.length > 120) this.s.inbox.length = 120;
    }

    news(text) {
      this.s.news.unshift({ date: this.s.date, text });
      if (this.s.news.length > 150) this.s.news.length = 150;
    }

    // ================== составы ==================
    autoPick(team, formation, opts = {}) {
      const slots = FM.FORMATIONS[formation];
      const pool = this.squad(team).filter((p) => this.isAvailable(p));
      const res = new Array(slots.length).fill(null);
      const order = slots.map((s, i) => i).sort((a, b) => SLOT_ORDER.indexOf(slots[a][0]) - SLOT_ORDER.indexOf(slots[b][0]));
      const used = new Set();
      const cond = (p) => (opts.ignoreFitness ? 1 : 0.7 + 0.3 * Math.min(p.fit, 100) / 100);
      for (const i of order) {
        const slot = slots[i][0];
        let best = null, bv = -1;
        for (const p of pool) {
          if (used.has(p.id)) continue;
          const v = p.ovr * FM.pfit(p, slot) * cond(p);
          if (v > bv) { bv = v; best = p; }
        }
        if (best) { res[i] = best.id; used.add(best.id); }
      }
      const rest = pool.filter((p) => !used.has(p.id)).sort((a, b) => b.ovr * cond(b) - a.ovr * cond(a));
      const bench = [];
      const gk = rest.find((p) => p.pos === 'GK');
      if (gk) bench.push(gk.id);
      for (const p of rest) if (bench.length < 9 && p.pos !== 'GK' && !bench.includes(p.id)) bench.push(p.id);
      const total = res.reduce((a, id, i) => a + (id ? this.players[id].ovr * FM.pfit(this.players[id], slots[i][0]) : 0), 0);
      return { lineup: res, bench, total };
    }

    pickFormation(team) {
      let best = null, bv = -1;
      for (const f of Object.keys(FM.FORMATIONS)) {
        const v = this.autoPick(team, f, { ignoreFitness: true }).total * (1 + Math.random() * 0.015);
        if (v > bv) { bv = v; best = f; }
      }
      team.formation = best;
      const r = this.autoPick(team, best);
      team.lineup = r.lineup;
      team.bench = r.bench;
    }

    // состав на конкретный матч: ИИ всегда выбирает заново, у пользователя недоступные заменяются
    matchLineup(team) {
      const slots = FM.FORMATIONS[team.formation];
      if (team.id !== this.s.user || !team.lineup.length) {
        const r = this.autoPick(team, team.formation);
        if (team.id !== this.s.user) { team.lineup = r.lineup; team.bench = r.bench; }
        return { xi: r.lineup.map((pid, i) => ({ pid, slot: slots[i][0] })).filter((x) => x.pid), bench: r.bench };
      }
      const fixed = this.fixUserLineup(team);
      return { xi: fixed.lineup.map((pid, i) => ({ pid, slot: slots[i][0] })).filter((x) => x.pid), bench: fixed.bench };
    }

    fixUserLineup(team) {
      const slots = FM.FORMATIONS[team.formation];
      const lineup = team.lineup.slice(0, slots.length);
      while (lineup.length < slots.length) lineup.push(null);
      const ok = (id) => id && this.players[id] && this.players[id].club === team.id && this.isAvailable(this.players[id]);
      const used = new Set(lineup.filter(ok));
      for (let i = 0; i < slots.length; i++) {
        if (ok(lineup[i])) continue;
        const slot = slots[i][0];
        const cand = this.squad(team).filter((p) => this.isAvailable(p) && !used.has(p.id))
          .sort((a, b) => b.ovr * FM.pfit(b, slot) - a.ovr * FM.pfit(a, slot))[0];
        lineup[i] = cand ? cand.id : null;
        if (cand) used.add(cand.id);
      }
      let bench = team.bench.filter((id) => ok(id) && !used.has(id));
      if (bench.length < 7) {
        const extra = this.squad(team).filter((p) => this.isAvailable(p) && !used.has(p.id) && !bench.includes(p.id))
          .sort((a, b) => b.ovr - a.ovr);
        if (!bench.some((id) => this.players[id].pos === 'GK')) {
          const gk = extra.find((p) => p.pos === 'GK');
          if (gk) bench.push(gk.id);
        }
        for (const p of extra) if (bench.length < 9 && !bench.includes(p.id)) bench.push(p.id);
      }
      return { lineup, bench: bench.slice(0, 9) };
    }

    lineupProblems(team) {
      const slots = FM.FORMATIONS[team.formation];
      const out = [];
      for (let i = 0; i < slots.length; i++) {
        const p = this.players[team.lineup[i]];
        if (!p || p.club !== team.id) out.push(`Позиция ${FM.POS_RU[slots[i][0]]} не заполнена`);
        else if (p.inj) out.push(`${p.name} травмирован`);
        else if (p.sus) out.push(`${p.name} дисквалифицирован`);
      }
      return out;
    }

    // ================== сезон и календарь ==================
    newSeason(first) {
      const s = this.s;
      const y = s.season;
      s.matches = {};
      for (const lid of s.order) {
        const L = s.leagues[lid];
        L.rounds = this.makeFixtures(L, y);
      }
      this._tables = {};
      this.setupCup();
      this.setupEuro();
      s.playoff = null;
      s.window = { from: `${y}-06-20`, to: `${y}-09-07`, from2: `${y + 1}-01-20`, to2: `${y + 1}-02-25` };
      for (const id in this.teams) {
        const t = this.teams[id];
        t.form = [];
        if (id !== s.user) this.pickFormation(t);
      }
      this.setExpectation();
      s.board.conf = first ? 60 : FM.clamp(s.board.conf, 35, 80);
    }

    makeFixtures(L, year) {
      const ids = FM.shuffle(L.teams.slice());
      if (ids.length % 2) ids.push(null);
      const n = ids.length;
      const half = [];
      const arr = ids.slice();
      for (let r = 0; r < n - 1; r++) {
        const round = [];
        for (let i = 0; i < n / 2; i++) {
          let h = arr[i], a = arr[n - 1 - i];
          if ((i === 0 && r % 2 === 1) || (i > 0 && i % 2 === 1)) [h, a] = [a, h];
          if (h && a) round.push([h, a]);
        }
        half.push(round);
        arr.splice(1, 0, arr.pop());
      }
      // однокруговой турнир (MLS, Аргентина): каждый играет с каждым один раз
      const all = L.single ? half : half.concat(half.map((r) => r.map(([h, a]) => [a, h])));
      const dates = [];
      let d = FM.nextWeekday(`${year}-${L.autumn.from}`, L.weekday);
      for (let i = 0; i < L.autumn.rounds; i++) { dates.push(d); d = FM.addDays(d, 7); }
      d = FM.nextWeekday(`${year + 1}-${L.spring.from}`, L.weekday);
      while (dates.length < all.length) { dates.push(d); d = FM.addDays(d, 7); }
      // Суперлига играет двойными турами: два матча с одним соперником на одной площадке в соседние дни
      if (L.double) return all.map((round, ri) => round.flatMap(([h, a]) => [0, 1].map((k) => this.addMatch({ comp: L.id, round: ri + 1, date: FM.addDays(dates[ri], k), h, a }))));
      return all.map((round, ri) => round.map(([h, a]) => this.addMatch({ comp: L.id, round: ri + 1, date: dates[ri], h, a })));
    }

    addMatch(m) {
      const id = this.s.nextMid++;
      this.s.matches[id] = Object.assign({ id, played: false, hg: null, ag: null }, m);
      return id;
    }

    leagueOf(teamId) { return this.s.leagues[this.teams[teamId].league]; }

    // Ничьих нет: при равенстве после основного времени — серия 6-метровых. Победа — 3 очка,
    // победа в серии — 2, поражение в серии — 1.
    table(lid) {
      if (this._tables[lid]) return this._tables[lid];
      const L = this.s.leagues[lid];
      this._tables[lid] = this.tableFrom(L.teams, L.rounds.flat());
      return this._tables[lid];
    }

    positionOf(teamId) {
      const t = this.table(this.teams[teamId].league);
      return t.find((r) => r.id === teamId).pos;
    }

    // зоны таблицы: плей-офф, стыковой турнир, вылет
    zones(lid) {
      const L = this.s.leagues[lid];
      const n = L.teams.length;
      const z = {};
      if (this.countryOf(lid) !== 'RUS') {
        // иностранные лиги — без плей-офф и вылета; подсвечены места в Лиге чемпионов
        const q = FM.EURO[0] ? FM.EURO[0].quota[this.countryOf(lid)] || 0 : 0;
        for (let i = 1; i <= Math.max(1, q); i++) z[i] = 'up';
      } else if (L.tier === 1) {
        for (let i = 1; i <= 6; i++) z[i] = 'up';
        for (let i = 7; i <= 10 && i <= n; i++) z[i] = 'po';
        if (this.lowerLeagues().length) z[n] = 'down';
      } else if (L.tier === 2) {
        for (let i = 1; i <= 8 && i <= n; i++) z[i] = 'up';
        if (this.thirdLeagues().some((id) => this.s.leagues[id].conf === L.conf)) z[n] = 'down';
      } else { z[1] = 'up'; z[2] = 'up'; }
      return z;
    }

    // уровни российского футзала (у иностранных лиг — только свой чемпионат, без переходов)
    topLeague() { return this.s.order.find((id) => this.s.leagues[id].tier === 1 && this.countryOf(id) === 'RUS'); }
    lowerLeagues() { return this.s.order.filter((id) => this.s.leagues[id].tier === 2 && this.countryOf(id) === 'RUS'); }
    thirdLeagues() { return this.s.order.filter((id) => this.s.leagues[id].tier === 3 && this.countryOf(id) === 'RUS'); }

    setExpectation() {
      const t = this.userTeam();
      const L = this.s.leagues[t.league];
      const byRep = L.teams.slice().sort((a, b) => this.teams[b].rep - this.teams[a].rep);
      this.s.board.expect = byRep.indexOf(t.id) + 1;
    }

    expectText() {
      const e = this.s.board.expect;
      const t = this.userTeam();
      const L = this.s.leagues[t.league];
      const n = L.teams.length;
      if (this.countryOf(t.league) !== 'RUS') {
        const q = FM.EURO[0] ? FM.EURO[0].quota[this.countryOf(t.league)] || 0 : 0;
        if (e === 1) return 'чемпионство';
        if (e <= 3) return 'медали чемпионата';
        if (e <= q) return 'место в Лиге чемпионов';
        if (e <= n / 2) return 'место в верхней половине таблицы';
        return 'избежать последнего места';
      }
      if (L.tier === 3) {
        if (e <= 2) return 'победа в зоне и выход в Высшую лигу';
        if (e <= 5) return 'место в верхней половине таблицы';
        return 'достойно провести сезон';
      }
      if (L.tier > 1) {
        if (e <= 2) return 'победа в Высшей лиге и выход в Суперлигу';
        if (e <= 4) return 'выход в 1/4 финала плей-офф';
        if (e <= 8) return 'попадание в плей-офф';
        return 'достойно провести сезон';
      }
      if (e === 1) return 'чемпионство';
      if (e <= 3) return 'медали чемпионата';
      if (e <= 6) return 'прямой выход в плей-офф (топ-6)';
      if (e <= 10) return 'попадание в плей-офф';
      return 'избежать последнего места';
    }

    // ================== кубок России ==================
    // 1-й этап: 8 групп по 4 (4 на Западе, 4 на Востоке) — все клубы Высшей лиги, кроме дублей, и сильнейшие клубы
    // Первой лиги; группа играет турниром в один круг, дальше проходит победитель. 2-й этап: две группы по 4
    // (Запад и Восток), выходят по двое. 3-й этап: эти 4 клуба и все 12 клубов Суперлиги, жеребьёвка — 1/8, 1/4, 1/2, финал.
    setupCup() {
      const s = this.s;
      const y = s.season;
      const elig = Object.values(this.teams).filter((t) => !t.reserveOf && this.isRussian(t));
      const top = elig.filter((t) => this.tierOf(t) === 1).map((t) => t.id);
      const lower = elig.filter((t) => this.tierOf(t) > 1).sort((a, b) => this.tierOf(a) - this.tierOf(b) || b.rep - a.rep);
      // по 16 клубов на Запад и Восток; если на одной стороне клубов не хватает, места добирают с другой
      const W = [], E = [];
      for (const t of lower) { const L = s.leagues[t.league].conf === 'E' ? E : W; if (L.length < 16) L.push(t); }
      for (const t of lower) if (!W.includes(t) && !E.includes(t)) { if (W.length < 16) W.push(t); else if (E.length < 16) E.push(t); }
      const start = FM.nextWeekday(`${y}-09-01`, 2);
      const groups = [];
      [W, E].forEach((list, si) => {
        list.sort((a, b) => this.tierOf(a) - this.tierOf(b) || b.rep - a.rep);
        // посев «змейкой»: клубы Высшей лиги разводятся по разным группам
        const g4 = [[], [], [], []];
        list.forEach((t, i) => { const r = Math.floor(i / 4), k = i % 4; g4[r % 2 ? 3 - k : k].push(t.id); });
        g4.forEach((g, gi) => groups.push(this.cupGroup('ABCDEFGH'[si * 4 + gi], g, start, '1-й этап')));
      });
      s.cup = {
        stage: 1, groups, groups2: [],
        rounds: CUP_ROUNDS.map((r) => ({ name: r.name, date: FM.nextWeekday(`${y + r.y}-${r.date}`, 2), matches: [] })),
        cur: 0, byes: top, alive: W.concat(E).map((t) => t.id).concat(top), winner: null,
      };
    }

    // группа Кубка: турнир в один круг на одной площадке, три дня подряд; ничья — серия 6-метровых
    cupGroup(name, teams, start, stage) {
      const s = this.s;
      const days = [[[0, 3], [1, 2]], [[0, 2], [3, 1]], [[0, 1], [2, 3]]];
      const mids = [];
      days.forEach((pairs, di) => pairs.forEach(([x, y]) => {
        if (teams[x] == null || teams[y] == null) return;
        mids.push(this.addMatch({ comp: 'cup', label: `${stage}, группа ${name}`, date: FM.addDays(start, di), h: teams[x], a: teams[y], neutral: true, shootout: true }));
      }));
      if (teams.includes(s.user)) this.msg(`Кубок России: ${stage}`, `Группа ${name}: ${teams.filter((id) => id !== s.user).map((id) => `«${this.teams[id].name}»`).join(', ')}. Турнир в один круг, начало ${FM.fmtDate(start)}.`, 'cup');
      return { name, teams, mids };
    }

    drawCup(teamIds, ri) {
      const s = this.s;
      const R = s.cup.rounds[ri];
      const list = FM.shuffle(teamIds.slice());
      const final = ri === s.cup.rounds.length - 1;
      for (let i = 0; i + 1 < list.length; i += 2) {
        let h = list[i], a = list[i + 1];
        const th = this.tierOf(this.teams[h]), ta = this.tierOf(this.teams[a]);
        if (ta > th || (ta === th && Math.random() < 0.5)) [h, a] = [a, h];
        R.matches.push(this.addMatch({ comp: 'cup', round: ri + 1, date: R.date, h, a, ko: true, neutral: final }));
      }
      if (teamIds.includes(s.user)) {
        const mid = R.matches.find((id) => [s.matches[id].h, s.matches[id].a].includes(s.user));
        if (mid) {
          const m = s.matches[mid];
          const opp = this.teams[m.h === s.user ? m.a : m.h];
          this.msg(`Кубок России: ${R.name}`, `Жеребьёвка: ваш соперник — «${opp.name}» (${m.h === s.user ? 'дома' : 'в гостях'}), ${FM.fmtDate(R.date)}.`, 'cup');
        }
      }
    }

    progressCup() {
      const s = this.s;
      const c = s.cup;
      if (!c || c.winner) return;
      const done = (gs) => gs.every((g) => g.mids.every((id) => s.matches[id].played));
      const table = (g) => this.tableFrom(g.teams, g.mids).map((r) => r.id);
      const outMsg = (gs, n, stage) => {
        for (const g of gs) {
          const pos = table(g).indexOf(s.user);
          if (pos >= n) this.msg('Вылет из Кубка', `Команда заняла ${pos + 1}-е место в группе ${g.name} (${stage}) и выбыла из Кубка России.`, 'cup');
        }
      };
      if (c.stage === 1) {
        if (!done(c.groups)) return;
        outMsg(c.groups, 1, '1-й этап');
        const win = c.groups.map((g) => table(g)[0]);
        const start = FM.nextWeekday(`${s.season}-10-20`, 2);
        c.groups2 = [this.cupGroup('Запад', win.slice(0, 4), start, '2-й этап'), this.cupGroup('Восток', win.slice(4), start, '2-й этап')];
        c.alive = win.concat(c.byes);
        c.stage = 2;
        this.news(`Кубок России: 1-й этап завершён, во 2-й этап вышли ${win.map((id) => `«${this.teams[id].name}»`).join(', ')}.`);
        return;
      }
      if (c.stage === 2) {
        if (!done(c.groups2)) return;
        outMsg(c.groups2, 2, '2-й этап');
        const adv = c.groups2.flatMap((g) => table(g).slice(0, 2));
        c.alive = adv.concat(c.byes);
        c.stage = 3;
        this.news(`Кубок России: к клубам Суперлиги присоединяются ${adv.map((id) => `«${this.teams[id].name}»`).join(', ')}. Жеребьёвка 1/8 финала.`);
        this.drawCup(c.alive, 0);
        return;
      }
      const R = c.rounds[c.cur];
      if (!R.matches.length || !R.matches.every((id) => s.matches[id].played)) return;
      const winners = R.matches.map((id) => s.matches[id].winner);
      if (c.cur === c.rounds.length - 1) {
        c.winner = winners[0];
        const w = this.teams[c.winner];
        this.news(`«${w.name}» — обладатель Кубка России!`);
        if (c.winner === s.user) {
          this.msg('Кубок России наш!', 'Команда выиграла Кубок России! Руководство в восторге.', 'board');
          s.board.conf = Math.min(100, s.board.conf + 20);
          this.userTeam().money += 1200;
        }
        return;
      }
      const losers = R.matches.map((id) => { const m = s.matches[id]; return m.winner === m.h ? m.a : m.h; });
      if (losers.includes(s.user)) this.msg('Вылет из Кубка', `Команда выбыла из Кубка России (${R.name}).`, 'cup');
      let next = winners;
      if (c.cur === 0 && !c.stage) next = winners.concat(c.byes); // сохранения со старым форматом Кубка
      c.alive = next;
      c.cur++;
      this.drawCup(next, c.cur);
    }

    // ================== Лига чемпионов УЕФА по футзалу ==================
    // Как элит-раунд УЕФА: 16 клубов по квотам стран (E.quota), 4 группы по 4 — турнир в один круг на одной площадке
    // в начале декабря (ничья — серия 6-метровых), победители групп играют Финал четырёх в конце мая на нейтральном поле:
    // 1/2 финала, матч за 3-е место и финал. s.euro[id] = { teams, groups: [{ name, teams, mids }], sf, third, final, winner }.
    setupEuro() {
      const s = this.s;
      s.euro = {};
      const ranked = {};
      for (const lid of s.order) {
        const L = s.leagues[lid];
        if (L.tier !== 1) continue;
        const prev = (s.lastTables && s.lastTables[lid] || []).filter((id) => this.teams[id] && this.teams[id].league === lid);
        const rest = L.teams.filter((id) => !prev.includes(id)).sort((a, b) => this.teams[b].rep - this.teams[a].rep);
        ranked[this.countryOf(lid)] = prev.concat(rest).filter((id) => !this.teams[id].reserveOf);
      }
      for (const E of FM.EURO) {
        // места стран, которых нет в игре (или российские при выключенной настройке), по очереди отдаются сильнейшим лигам
        const quota = Object.assign({}, E.quota);
        let extra = 0;
        for (const c in quota) {
          if (!ranked[c] || (c === 'RUS' && s.settings.ruEuro === false)) { extra += quota[c]; delete quota[c]; }
        }
        const order = Object.keys(E.quota).filter((c) => quota[c]);
        for (let i = 0; extra > 0 && order.length; i++, extra--) quota[order[i % order.length]]++;
        const teams = [];
        for (const c in quota) teams.push(...ranked[c].slice(0, quota[c]));
        if (teams.length !== 16) continue;
        const e = { id: E.id, teams, groups: [], sf: [], third: null, final: null, winner: null };
        s.euro[E.id] = e;
        // посев: 4 корзины по репутации, в группе по клубу из каждой корзины, по возможности — из разных стран
        const pots = [0, 1, 2, 3].map((i) => teams.slice().sort((a, b) => this.teams[b].rep - this.teams[a].rep).slice(i * 4, i * 4 + 4));
        let best = null, bestCost = Infinity;
        for (let t = 0; t < 200 && bestCost > 0; t++) {
          const g = [[], [], [], []];
          for (const pot of pots) FM.shuffle(pot.slice()).forEach((id, k) => g[k].push(id));
          const cost = g.reduce((c, x) => c + x.length - new Set(x.map((id) => this.countryOf(this.teams[id].league))).size, 0);
          if (cost < bestCost) { best = g; bestCost = cost; }
        }
        const start = FM.nextWeekday(`${s.season}-12-01`, 2);
        best.forEach((g, gi) => {
          const name = 'ABCD'[gi];
          const days = [[[0, 3], [1, 2]], [[0, 2], [3, 1]], [[0, 1], [2, 3]]];
          const mids = [];
          days.forEach((pairs, di) => pairs.forEach(([x, y]) => mids.push(this.addMatch({ comp: E.id, label: `группа ${name}`, date: FM.addDays(start, di), h: g[x], a: g[y], neutral: true, shootout: true }))));
          e.groups.push({ name, teams: g, mids });
          if (g.includes(s.user)) this.msg(E.name, `Команда сыграет в Лиге чемпионов, группа ${name}: ${g.filter((id) => id !== s.user).map((id) => `«${this.teams[id].name}»`).join(', ')}. Турнир в один круг, начало ${FM.fmtDate(start)}.`, 'cup');
        });
        this.euroReward(E, teams, E.fee, 'участие');
      }
    }

    // таблица по матчам из списка (группы Кубка, Лиги чемпионов, Всероссийского финала)
    tableFrom(teamIds, mids) {
      const rows = {};
      for (const id of teamIds) rows[id] = { id, p: 0, w: 0, ow: 0, ol: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, form: [] };
      for (const mid of mids) {
        const m = this.s.matches[mid];
        if (!m.played) continue;
        const h = rows[m.h], a = rows[m.a];
        if (!h || !a) continue;
        h.p++; a.p++; h.gf += m.hg; h.ga += m.ag; a.gf += m.ag; a.ga += m.hg;
        if (m.hg > m.ag) { h.w++; a.l++; h.pts += 3; h.form.push('W'); a.form.push('L'); }
        else if (m.hg < m.ag) { a.w++; h.l++; a.pts += 3; h.form.push('L'); a.form.push('W'); }
        else if (m.pens) {
          const [w, l] = m.pens[0] > m.pens[1] ? [h, a] : [a, h];
          w.ow++; l.ol++; w.pts += 2; l.pts += 1; w.form.push('D'); l.form.push('D');
        } else { h.d++; a.d++; h.pts++; a.pts++; h.form.push('D'); a.form.push('D'); }
      }
      const list = Object.values(rows).sort((x, y) => y.pts - x.pts || (y.w - x.w) || (y.gf - y.ga) - (x.gf - x.ga) || y.gf - x.gf || this.teams[x.id].name.localeCompare(this.teams[y.id].name));
      list.forEach((r, i) => { r.pos = i + 1; r.form = r.form.slice(-5); });
      return list;
    }

    // таблица Лиги чемпионов: все группы подряд, pos — место в своей группе
    euroTable(id) {
      const e = this.s.euro && this.s.euro[id];
      if (!e) return [];
      return e.groups.flatMap((g) => this.tableFrom(g.teams, g.mids).map((r) => Object.assign(r, { group: g.name })));
    }

    euroReward(E, ids, amount, what) {
      for (const id of ids) {
        this.teams[id].money += amount;
        if (id === this.s.user) this.finLog(this.teams[id], `${E.name}: ${what}`, amount);
      }
    }

    progressEuro() {
      const s = this.s;
      if (!s.euro) return;
      for (const E of FM.EURO) {
        const e = s.euro[E.id];
        if (!e || e.winner) continue;
        const done = (ids) => ids.every((mid) => s.matches[mid].played);
        if (!e.sf.length) {
          if (!done(e.groups.flatMap((g) => g.mids))) continue;
          const tabs = e.groups.map((g) => this.tableFrom(g.teams, g.mids).map((r) => r.id));
          const win = tabs.map((t) => t[0]);
          // премия за каждую победу в группе (в том числе по 6-метровым)
          for (const g of e.groups) {
            for (const mid of g.mids) {
              const m = s.matches[mid];
              this.euroReward(E, [m.hg > m.ag || (m.hg === m.ag && m.pens && m.pens[0] > m.pens[1]) ? m.h : m.a], E.win, 'победа в группе');
            }
          }
          this.euroReward(E, win, E.ko[0], 'выход в Финал четырёх');
          tabs.forEach((t, gi) => {
            const pos = t.indexOf(s.user);
            if (pos === 0) this.msg(E.name, `Команда выиграла группу ${e.groups[gi].name} и сыграет в Финале четырёх!`, 'board');
            else if (pos > 0) this.msg(E.name, `Команда заняла ${pos + 1}-е место в группе ${e.groups[gi].name} и выбыла из Лиги чемпионов.`, 'cup');
          });
          // жеребьёвка полуфиналов; Финал четырёх — в конце мая на нейтральной площадке
          const w = FM.shuffle(win.slice());
          const d = FM.nextWeekday(`${s.season + 1}-${E.final}`, 5);
          e.sf = [[w[0], w[1]], [w[2], w[3]]].map(([h, a]) => this.addMatch({ comp: E.id, label: 'Финал четырёх, 1/2 финала', date: d, h, a, ko: true, neutral: true }));
          this.news(`${E.name}: в Финал четырёх вышли ${win.map((id) => `«${this.teams[id].name}»`).join(', ')}.`);
          continue;
        }
        if (!e.final) {
          if (!done(e.sf)) continue;
          const sf = e.sf.map((mid) => s.matches[mid]);
          const w = sf.map((m) => m.winner), l = sf.map((m) => (m.winner === m.h ? m.a : m.h));
          if (l.includes(s.user)) this.msg(E.name, 'Команда проиграла в полуфинале Лиги чемпионов и сыграет за 3-е место.', 'cup');
          this.euroReward(E, w, E.ko[1], 'выход в финал');
          const d = FM.addDays(sf[0].date, 2);
          e.third = this.addMatch({ comp: E.id, label: 'Финал четырёх, матч за 3-е место', date: d, h: l[0], a: l[1], ko: true, neutral: true });
          e.final = this.addMatch({ comp: E.id, label: 'Финал четырёх, финал', date: d, h: w[0], a: w[1], ko: true, neutral: true });
          if (w.includes(s.user)) this.msg(`Финал: ${E.name}`, `Команда сыграет в финале Лиги чемпионов против «${this.teams[w[0] === s.user ? w[1] : w[0]].name}», ${FM.fmtDate(d)}.`, 'board');
          this.news(`Финал Лиги чемпионов: «${this.teams[w[0]].name}» — «${this.teams[w[1]].name}».`);
          continue;
        }
        if (!done([e.final, e.third])) continue;
        e.winner = s.matches[e.final].winner;
        this.euroReward(E, [e.winner], E.ko[2], 'победа в турнире');
        this.news(`«${this.teams[e.winner].name}» — победитель турнира «${E.name}»!`);
        if (e.winner === s.user) {
          this.msg(`${E.name} наша!`, `Команда выиграла «${E.name}»! Это историческая победа.`, 'board');
          s.board.conf = Math.min(100, s.board.conf + 30);
          this.userTeam().rep = Math.min(99, this.userTeam().rep + 3);
        }
      }
    }

    // ================== стыковые матчи и конец сезона ==================
    leagueFinished(lid) {
      return this.s.leagues[lid].rounds.every((r) => r.every((id) => this.s.matches[id].played));
    }

    eligibleUp(teamId) {
      const t = this.teams[teamId];
      return !t.reserveOf;
    }

    // ================== плей-офф ==================
    // s.playoff = { sl: сетка Суперлиги, vl: сетка Высшей лиги }. Сетка — раунды серий:
    // { name, best (1, 3 или 5 матчей), ties: [{ hi, lo, games: [mid], wins: {id: n}, winner }] }.
    // Матчи серии создаются по одному: следующий — на следующий день после сыгранного, если победитель не определён.
    setupPlayoff() {
      const s = this.s;
      s.playoff = s.playoff || {};
      const top = this.topLeague();
      if (top && !s.playoff.sl && this.leagueFinished(top)) {
        const tab = this.table(top);
        const ids = tab.map((r) => r.id);
        const B = { lid: top, name: s.leagues[top].name, seed: ids, rounds: [], winner: null, start: this.lastDate([top]) };
        s.playoff.sl = B;
        if (ids.length >= 10) {
          // стыковой турнир: 7–10 места разыгрывают две путёвки в 1/4 финала
          this.addRound(B, 'Стыковой турнир', 1, [[ids[6], ids[9]], [ids[7], ids[8]]]);
        } else this.addRound(B, '1/4 финала', 3, [[ids[0], ids[7]], [ids[3], ids[4]], [ids[1], ids[6]], [ids[2], ids[5]]]);
        this.news(`${s.leagues[top].name}: регулярный чемпионат завершён, первое место — «${this.teams[ids[0]].name}». Начинается плей-офф.`);
      }
      const low = this.lowerLeagues();
      if (low.length && !s.playoff.vl && low.every((lid) => this.leagueFinished(lid))) {
        const confs = low.map((lid) => this.table(lid).slice(0, 8).map((r) => r.id));
        const B = { lid: 'vl', name: 'Высшая лига', confs: low, seed: confs, rounds: [], winner: null, start: this.lastDate(low) };
        s.playoff.vl = B;
        const pairs = [];
        for (const c of confs) if (c.length === 8) pairs.push([c[0], c[7]], [c[3], c[4]], [c[1], c[6]], [c[2], c[5]]);
        this.addRound(B, '1/8 финала', 3, pairs);
        this.news('Высшая лига: регулярный чемпионат завершён, начинается плей-офф.');
      }
      // Первая лига: Всероссийский финал по регламенту РФС — 16 команд (лучшие команды зон по квотам finalQuota,
      // недостающие места — лучшим из оставшихся), 4 группы по 4 в один круг, затем 1/4 (1A–2B, 2A–1B, 1C–2D, 2C–1D),
      // 1/2, матч за 3-е место и финал. Все матчи — на нейтральной площадке, по дням подряд, ничьи — серия 6-метровых.
      const third = this.thirdLeagues();
      if (third.length && !s.playoff.pl && third.every((lid) => this.leagueFinished(lid))) {
        const tabs = third.map((lid) => this.table(lid).filter((r) => this.eligibleUp(r.id)).map((r) => r.id));
        const picked = [];
        third.forEach((lid, i) => picked.push(...tabs[i].slice(0, s.leagues[lid].finalQuota || 2)));
        const rest = tabs.flatMap((t) => t.filter((id) => !picked.includes(id))).sort((a, b) => this.ppg(b) - this.ppg(a));
        while (picked.length < 16 && rest.length) picked.push(rest.shift());
        // посев: сначала победители зон, затем остальные по очкам за матч; группы — «змейкой»
        const place = (id) => tabs.find((t) => t.includes(id)).indexOf(id);
        const seed = picked.slice(0, 16).sort((a, b) => place(a) - place(b) || this.ppg(b) - this.ppg(a));
        const start = FM.addDays(this.lastDate(third), 7);
        const B = { lid: 'pl', name: 'Первая лига · Всероссийский финал', seed, rounds: [], groups: [], winner: null, start, gap: 1, neutral: true };
        s.playoff.pl = B;
        const n = Math.max(1, Math.min(4, Math.floor(seed.length / 2)));
        const groups = Array.from({ length: n }, () => []);
        seed.forEach((id, i) => { const r = Math.floor(i / n), k = i % n; groups[r % 2 ? n - 1 - k : k].push(id); });
        groups.forEach((g, gi) => {
          const name = 'ABCD'[gi];
          const mids = [];
          // круговая система: при 4 командах — три игровых дня по два матча
          const days = g.length === 4 ? [[[0, 3], [1, 2]], [[0, 2], [3, 1]], [[0, 1], [2, 3]]] : g.length === 3 ? [[[0, 1]], [[1, 2]], [[2, 0]]] : [[[0, 1]]];
          days.forEach((pairs, di) => pairs.forEach(([x, y]) => mids.push(this.addMatch({ comp: 'po', po: 'pl', label: `Всероссийский финал, группа ${name}`, date: FM.addDays(start, di), h: g[x], a: g[y], neutral: true, shootout: true }))));
          B.groups.push({ name, teams: g, mids });
          if (g.includes(s.user)) this.msg('Всероссийский финал', `Команда сыграет во Всероссийском финале Первой лиги, группа ${name}: ${g.filter((id) => id !== s.user).map((id) => `«${this.teams[id].name}»`).join(', ')}. Начало ${FM.fmtDate(start)}.`, 'cup');
        });
        this.news('Первая лига: зональные турниры завершены, 16 команд разыграют Всероссийский финал.');
      }
    }

    // таблица группы Всероссийского финала
    groupTable(g) { return this.tableFrom(g.teams, g.mids); }

    // очки за матч в своей лиге — для посева в финальных турнирах
    ppg(id) {
      const r = this.table(this.teams[id].league).find((x) => x.id === id);
      return r && r.p ? r.pts / r.p : 0;
    }

    lastDate(lids) {
      let d = '';
      for (const lid of lids) for (const r of this.s.leagues[lid].rounds) for (const id of r) if (this.s.matches[id].date > d) d = this.s.matches[id].date;
      return d;
    }

    addRound(B, name, best, pairs) {
      const start = FM.addDays(B.rounds.length ? this.lastSeriesDate(B) : B.start, B.gap || 6);
      const R = { name, best, ties: pairs.map(([hi, lo]) => ({ hi, lo, games: [], wins: { [hi]: 0, [lo]: 0 }, winner: null })) };
      B.rounds.push(R);
      for (const t of R.ties) this.nextSeriesGame(B, R, t, start);
      const mine = R.ties.find((t) => [t.hi, t.lo].includes(this.s.user));
      if (mine) {
        const opp = this.teams[mine.hi === this.s.user ? mine.lo : mine.hi];
        const len = best === 1 ? 'один матч' : `серия до ${(best + 1) / 2} побед`;
        this.msg(`Плей-офф: ${name}`, `${B.name}, ${name.toLowerCase()}: соперник — «${opp.name}» (${len}). Первая игра ${FM.fmtDate(start)}.`, 'cup');
      }
    }

    lastSeriesDate(B) {
      let d = B.start;
      for (const R of B.rounds) for (const t of R.ties) for (const id of t.games) if (this.s.matches[id].date > d) d = this.s.matches[id].date;
      return d;
    }

    nextSeriesGame(B, R, t, date) {
      const i = t.games.length;
      const host = SERIES[R.best][i] === 'hi' ? t.hi : t.lo;
      const g = R.best === 1 ? '' : `, ${i + 1}-й матч`;
      const stage = R.name === 'Финал' && R.ties.indexOf(t) === 1 ? 'матч за 3-е место' : R.name.toLowerCase();
      t.games.push(this.addMatch({ comp: 'po', po: B.lid, label: `${B.lid === 'pl' ? 'Всероссийский финал' : 'плей-офф'}, ${stage}${g}`, date, h: host, a: host === t.hi ? t.lo : t.hi, ko: true, neutral: !!B.neutral }));
    }

    progressPlayoff() {
      const s = this.s;
      if (!s.playoff) return;
      for (const key of ['sl', 'vl', 'pl']) {
        const B = s.playoff[key];
        if (!B || B.winner) continue;
        if (B.groups && !B.rounds.length) {
          if (!B.groups.every((g) => g.mids.every((id) => s.matches[id].played))) continue;
          const t = B.groups.map((g) => this.groupTable(g).map((r) => r.id));
          for (const g of B.groups) {
            const pos = this.groupTable(g).findIndex((r) => r.id === s.user);
            if (pos >= 2) this.msg('Всероссийский финал', `Команда заняла ${pos + 1}-е место в группе ${g.name} и не вышла в плей-офф.`, 'cup');
          }
          B.start = B.groups.flatMap((g) => g.mids).reduce((d, id) => (s.matches[id].date > d ? s.matches[id].date : d), B.start);
          const pairs = t.length === 4 ? [[t[0][0], t[1][1]], [t[0][1], t[1][0]], [t[2][0], t[3][1]], [t[2][1], t[3][0]]]
            : t.length === 2 ? [[t[0][0], t[1][1]], [t[1][0], t[0][1]]] : [[t[0][0], t[0][1]]];
          this.addRound(B, pairs.length === 4 ? '1/4 финала' : pairs.length === 2 ? '1/2 финала' : 'Финал', 1, pairs);
          continue;
        }
        const R = B.rounds[B.rounds.length - 1];
        const need = (R.best + 1) / 2;
        for (const t of R.ties) {
          if (t.winner) continue;
          const last = s.matches[t.games[t.games.length - 1]];
          if (!last.played) continue;
          if (!t.counted || t.counted < t.games.length) {
            t.wins[last.winner] = (t.wins[last.winner] || 0) + 1;
            t.counted = t.games.length;
          }
          if (t.wins[t.hi] >= need || t.wins[t.lo] >= need) {
            t.winner = t.wins[t.hi] >= need ? t.hi : t.lo;
            const loser = t.winner === t.hi ? t.lo : t.hi;
            if (loser === s.user) this.msg('Вылет из плей-офф', `Команда выбыла из борьбы: ${B.name}, ${R.name.toLowerCase()} (${t.wins[loser]}:${t.wins[t.winner]} в серии).`, 'cup');
            if (t.winner === s.user && R.best > 1) this.msg('Серия выиграна', `«${this.teams[s.user].name}» проходит дальше: ${R.name.toLowerCase()}, ${t.wins[t.winner]}:${t.wins[loser]} в серии.`, 'cup');
          } else this.nextSeriesGame(B, R, t, FM.addDays(last.date, 1));
        }
        if (!R.ties.every((t) => t.winner)) continue;
        const w = R.ties.map((t) => t.winner);
        const better = (a, b) => (this.seedOf(B, a) <= this.seedOf(B, b) ? [a, b] : [b, a]);
        if (R.name === 'Стыковой турнир') {
          const ids = B.seed;
          const [s7, s8] = better(w[0], w[1]);
          this.addRound(B, '1/4 финала', 3, [[ids[0], s8], [ids[3], ids[4]], [ids[1], s7], [ids[2], ids[5]]]);
        } else if (R.name === '1/8 финала') {
          this.addRound(B, '1/4 финала', 3, [better(w[0], w[1]), better(w[2], w[3]), better(w[4], w[5]), better(w[6], w[7])]);
        } else if (R.name === '1/4 финала') {
          // в Высшей лиге полуфиналы перекрёстные: победитель одной половины конференции «Запад» против другой половины «Востока»
          if (key === 'pl') { this.addRound(B, '1/2 финала', 1, [[w[0], w[2]], [w[1], w[3]]]); continue; }
          this.addRound(B, '1/2 финала', 5, key === 'vl' ? [better(w[0], w[3]), better(w[2], w[1])] : [better(w[0], w[1]), better(w[2], w[3])]);
        } else if (R.name === '1/2 финала') {
          // в Первой лиге проигравшие в полуфиналах играют матч за 3-е место (вторая пара раунда)
          const losers = R.ties.map((t) => (t.winner === t.hi ? t.lo : t.hi));
          this.addRound(B, 'Финал', key === 'pl' ? 1 : 5, key === 'pl' ? [better(w[0], w[1]), better(losers[0], losers[1])] : [better(w[0], w[1])]);
          this.news(`${B.name}, финал: «${this.teams[w[0]].name}» — «${this.teams[w[1]].name}».`);
        } else {
          B.winner = w[0];
          const champ = this.teams[B.winner];
          champ.rep = Math.min(99, champ.rep + (key === 'sl' ? 3 : 2));
          const title = { sl: 'чемпион России по футзалу', vl: 'победитель Высшей лиги', pl: 'победитель Первой лиги' }[key];
          this.news(`«${champ.name}» — ${title}!`);
          if (B.winner === s.user) {
            this.msg(key === 'sl' ? 'Чемпионы России!' : key === 'vl' ? 'Победа в Высшей лиге!' : 'Победа в Первой лиге!', key === 'sl' ? 'Команда выиграла чемпионат России! Руководство в восторге.' : `Команда выиграла ${key === 'vl' ? 'Высшую' : 'Первую'} лигу!`, 'board');
            s.board.conf = Math.min(100, s.board.conf + 25);
          }
        }
      }
    }

    // место в посеве: для Высшей лиги — по очкам за матч в своей конференции (при равенстве — «Запад»)
    seedOf(B, id) {
      if (B.lid === 'pl') return -this.ppg(id);
      if (B.lid !== 'vl') return B.seed.indexOf(id);
      for (let c = 0; c < B.seed.length; c++) {
        const i = B.seed[c].indexOf(id);
        if (i >= 0) {
          const r = this.table(B.confs[c]).find((x) => x.id === id);
          return i * 10 - (r.p ? r.pts / r.p : 0) + c * 0.01;
        }
      }
      return 99;
    }

    // Итоговое место клуба: в плей-офф — по стадии вылета (1 — чемпион, 2 — финалист, 3–4 — полуфиналисты…),
    // остальные — по регулярному чемпионату.
    finalPlace(teamId) {
      const t = this.teams[teamId];
      const L = this.s.leagues[t.league];
      const B = this.s.playoff && this.s.playoff[L.tier === 1 ? 'sl' : 'vl'];
      const reg = this.positionOf(teamId);
      if (!B || !B.winner || L.tier !== 1 || this.countryOf(t.league) !== 'RUS') return reg;
      if (B.winner === teamId) return 1;
      const ko = B.rounds.filter((R) => R.best > 1);
      const size = { 'Финал': 2, '1/2 финала': 4, '1/4 финала': 8 };
      for (let i = ko.length - 1; i >= 0; i--) {
        const R = ko[i];
        const tie = R.ties.find((x) => [x.hi, x.lo].includes(teamId));
        if (tie) {
          // среди выбывших на одной стадии выше тот, кто был выше в регулярке
          const out = R.ties.map((x) => (x.winner === x.hi ? x.lo : x.hi)).sort((a, b) => this.positionOf(a) - this.positionOf(b));
          return size[R.name] / 2 + 1 + out.indexOf(teamId);
        }
      }
      return reg;
    }

    leagueFinished(lid) {
      return this.s.leagues[lid].rounds.every((r) => r.every((id) => this.s.matches[id].played));
    }

    eligibleUp(teamId) {
      const t = this.teams[teamId];
      return !t.reserveOf;
    }

    seasonEndDate() {
      const s = this.s;
      let last = `${s.season + 1}-05-15`;
      for (const id in s.matches) if (s.matches[id].date > last) last = s.matches[id].date;
      return FM.addDays(last, 3);
    }

    allDone() {
      const s = this.s;
      for (const id in s.matches) if (!s.matches[id].played) return false;
      const p = s.playoff || {};
      return (!this.topLeague() || (p.sl && p.sl.winner)) && (!this.lowerLeagues().length || (p.vl && p.vl.winner))
        && (!this.thirdLeagues().length || (p.pl && p.pl.winner));
    }

    // Повышение и вылет: [teamId, новая лига]. Победитель Высшей лиги (если он не резервная команда; иначе —
    // лучший по итогам плей-офф среди основных команд) меняется местами с последней командой Суперлиги.
    seasonMoves() {
      const s = this.s, moves = [];
      const top = this.topLeague(), low = this.lowerLeagues();
      const B = s.playoff && s.playoff.vl;
      if (!top || !low.length || !B || !B.winner) return moves;
      const order = [B.winner];
      for (let i = B.rounds.length - 1; i >= 0; i--) {
        for (const t of B.rounds[i].ties) for (const id of [t.winner, t.hi, t.lo]) if (!order.includes(id)) order.push(id);
      }
      const up = order.find((id) => this.eligibleUp(id));
      if (!up) return moves;
      const tab = this.table(top);
      const down = tab[tab.length - 1].id;
      // вылетевший клуб попадает в конференцию, где стало на одну команду меньше
      moves.push([up, top], [down, this.teams[up].league]);
      // Первая лига: финалисты Всероссийского финала выходят в конференцию Высшей лиги своей стороны, на их место
      // опускается последняя команда этой конференции — в зону своей стороны, где после переходов меньше всего клубов
      const P = s.playoff && s.playoff.pl;
      if (P && P.winner) {
        const order = [P.winner];
        for (let i = P.rounds.length - 1; i >= 0; i--) for (const t of P.rounds[i].ties) for (const id of [t.winner, t.hi, t.lo]) if (!order.includes(id)) order.push(id);
        const size = (lid) => s.leagues[lid].teams.length - moves.filter(([id]) => this.teams[id].league === lid).length + moves.filter(([, l]) => l === lid).length;
        for (const id of order.filter((x) => this.eligibleUp(x)).slice(0, 2)) {
          const side = s.leagues[this.teams[id].league].conf;
          const vl = low.find((lid) => s.leagues[lid].conf === side);
          if (!vl) continue;
          const last = this.table(vl).slice().reverse().find((r) => !moves.some(([m]) => m === r.id));
          if (!last) continue;
          // клуб уходит в свою зону (откуда поднимался или по городу); без неё — в зону своей стороны, где меньше клубов
          const home = this.teams[last.id].zone;
          const zone = home && s.leagues[home] && s.leagues[home].tier === 3 ? home
            : this.thirdLeagues().filter((lid) => s.leagues[lid].conf === side).sort((a, b) => size(a) - size(b))[0] || this.teams[id].league;
          moves.push([id, vl], [last.id, zone]);
        }
      }
      return moves;
    }

    // Итоги сезона до перехода в новый: ничего не меняет, всё ещё можно посмотреть таблицы и статистику.
    seasonReview() {
      const s = this.s, u = this.userTeam();
      const leagues = s.order.map((lid) => {
        const tab = this.table(lid);
        const rated = [];
        for (const tid of s.leagues[lid].teams) for (const pid of this.teams[tid].players) {
          const p = this.players[pid];
          if (p.st.apps >= Math.max(8, tab[0].p * 0.5)) rated.push([p, p.st.rsum / p.st.apps]);
        }
        rated.sort((a, b) => b[1] - a[1]);
        const top = lid === this.topLeague() && s.playoff && s.playoff.sl && s.playoff.sl.winner
          ? s.leagues[lid].teams.map((id) => ({ id, place: this.finalPlace(id) })).sort((a, b) => a.place - b.place).slice(0, 3).map((x) => tab.find((r) => r.id === x.id))
          : tab.slice(0, 3);
        return { lid, top, playoff: lid === this.topLeague(), scorer: this.leaders(lid, 'g', 1)[0] || null, assist: this.leaders(lid, 'a', 1)[0] || null, best: rated[0] || null };
      });
      const fin = (m) => (m ? { h: m.h, a: m.a, hg: m.hg, ag: m.ag, pens: m.pens } : null);
      const euro = FM.EURO.filter((E) => s.euro && s.euro[E.id] && s.euro[E.id].winner).map((E) => ({ id: E.id, name: E.name, winner: s.euro[E.id].winner, final: fin(s.euro[E.id].final && s.matches[s.euro[E.id].final]) }));
      const lastR = s.cup && s.cup.rounds[s.cup.rounds.length - 1];
      const cupFinal = s.cup && s.cup.winner && lastR && lastR.matches.length ? fin(s.matches[lastR.matches[0]]) : null;
      const moves = this.seasonMoves().filter(([tid, lid]) => this.teams[tid].league !== lid)
        .map(([tid, lid]) => ({ id: tid, to: lid, from: this.teams[tid].league, up: s.leagues[lid].tier < s.leagues[this.teams[tid].league].tier }));
      const row = this.table(u.league).find((r) => r.id === u.id);
      const all = (p) => ({ apps: p.st.apps + p.cst.apps, g: p.st.g + p.cst.g, a: p.st.a + p.cst.a, r: p.st.apps + p.cst.apps ? (p.st.rsum + p.cst.rsum) / (p.st.apps + p.cst.apps) : 0 });
      const top = (f) => this.squad(u).map((p) => [p, f(all(p))]).filter((x) => x[1] > 0).sort((a, b) => b[1] - a[1])[0] || null;
      return {
        year: s.season, leagues, euro, cup: s.cup && s.cup.winner || null, cupFinal, moves,
        user: { team: u.id, league: u.league, pos: row.pos, row, expect: s.board.expect, coach: this.coachSeason(),
          scorer: top((x) => x.g), assist: top((x) => x.a), best: top((x) => (x.apps >= 8 ? x.r : 0)) },
      };
    }

    endSeason() {
      const s = this.s;
      const y = s.season;
      s.lastCupWinner = s.cup && s.cup.winner || null;
      const summary = { year: y, tables: {}, cup: s.cup && s.cup.winner, userPos: null, userLeague: null, moves: [], euro: {} };
      for (const E of FM.EURO) if (s.euro && s.euro[E.id] && s.euro[E.id].winner) summary.euro[E.id] = s.euro[E.id].winner;
      s.lastTables = {};
      // итоговые места (в Суперлиге — с учётом плей-офф): по ним раздаются путёвки в Лигу чемпионов
      for (const lid of s.order) s.lastTables[lid] = this.table(lid).map((r) => r.id).sort((a, b) => this.finalPlace(a) - this.finalPlace(b));
      const moves = this.seasonMoves(); // [teamId, newLeague]

      // итоговые таблицы, призовые, репутация
      for (const lid of s.order) {
        const L = s.leagues[lid];
        const tab = this.table(lid);
        summary.tables[lid] = tab.slice(0, 3).map((r) => r.id);
        tab.forEach((r) => {
          const t = this.teams[r.id];
          const place = this.finalPlace(r.id);
          t.money += L.prize[place - 1] || 0;
          if (r.id === s.user) { summary.userPos = place; summary.userLeague = lid; }
        });
        if (lid !== this.topLeague()) this.news(`«${this.teams[tab[0].id].name}» — ${this.countryOf(lid) === 'RUS' ? 'победитель регулярного чемпионата' : 'чемпион'}: ${L.name}, ${y}/${String(y + 1).slice(2)}.`);
      }
      // резервные команды в переходах не участвуют: eligibleUp отсекает их от повышения
      for (const [tid, lid] of moves) {
        const t = this.teams[tid];
        const from = t.league;
        if (from === lid) continue;
        const up = s.leagues[lid].tier < s.leagues[from].tier;
        s.leagues[from].teams = s.leagues[from].teams.filter((x) => x !== tid);
        s.leagues[lid].teams.push(tid);
        t.league = lid;
        if (s.leagues[lid].tier === 3) t.zone = lid;
        t.rep = FM.clamp(t.rep + (up ? 4 : -4), 35, 99);
        summary.moves.push({ id: tid, up, to: lid });
        this.news(`«${t.name}» ${up ? 'повышается' : 'понижается'} в классе: ${s.leagues[lid].name}.`);
      }

      // оценка работы тренера
      const u = this.userTeam();
      const pos = summary.userPos;
      const exp = s.board.expect;
      const moved = summary.moves.find((m) => m.id === u.id);
      let verdict = '';
      if (moved && moved.up) { s.board.conf = Math.min(100, s.board.conf + 30); verdict = 'Руководство благодарит за повышение в классе!'; }
      else if (moved && !moved.up) { s.board.conf -= 35; verdict = 'Вылет — тяжёлый удар для клуба.'; }
      else if (pos <= exp) { s.board.conf = Math.min(100, s.board.conf + 10 + (exp - pos) * 4); verdict = 'Задача на сезон выполнена.'; }
      else { s.board.conf -= (pos - exp) * 5; verdict = `Команда финишировала ниже ожиданий (${exp}-е место).`; }
      this.coachSeasonRep(pos, exp, moved, (s.cup && s.cup.winner === u.id ? 1 : 0) + Object.keys(summary.euro).filter((id) => summary.euro[id] === u.id).length * 1.5);
      if (pos < exp - 1) u.rep = Math.min(99, u.rep + 1);
      if (pos > exp + 3) u.rep = Math.max(35, u.rep - 1);
      const ce = this.coachSeason(y);
      // место на общем этапе еврокубка (если дальше клуб не прошёл, стадия покажет вылет с этим местом)
      for (const E of FM.EURO) {
        const c = ce.comps[E.id];
        if (c && c.md && s.euro && s.euro[E.id]) { const row = this.euroTable(E.id).find((r) => r.id === u.id); if (row) c.pos = row.pos; }
      }
      ce.final = { league: summary.userLeague, pos, cup: s.cup && s.cup.winner === u.id, euro: Object.keys(summary.euro).filter((id) => summary.euro[id] === u.id) };
      s.history.unshift({ year: y, league: summary.userLeague, pos, team: u.id, cup: s.cup && s.cup.winner === u.id, moved: moved ? (moved.up ? 'up' : 'down') : null,
        euro: Object.keys(summary.euro).filter((id) => summary.euro[id] === u.id) });
      this.msg(`Итоги сезона ${y}/${String(y + 1).slice(2)}`, `«${u.name}» занимает ${pos}-е место (${s.leagues[summary.userLeague].name}). ${verdict}`, 'board');

      // предложения о работе после удачного сезона
      if (pos <= exp - 3 || (moved && moved.up)) {
        const cands = Object.values(this.teams).filter((t) => t.id !== u.id && t.rep > u.rep + 2 && t.rep <= u.rep + 16 && !t.reserveOf);
        FM.shuffle(cands).slice(0, 2).forEach((t) => {
          this.msg(`Предложение от «${t.name}»`, `«${t.name}» (${s.leagues[t.league].name}) предлагает вам возглавить команду.`, 'job', { team: t.id });
        });
      }

      // игроки: возраст, развитие, контракты, завершение карьеры
      for (const id in this.players) {
        const p = this.players[id];
        p.car.apps += p.st.apps + p.cst.apps; p.car.g += p.st.g + p.cst.g; p.car.a += p.st.a + p.cst.a;
        p.st = { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 };
        p.cst = { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 };
        p.ycAcc = 0;
        p.sus = 0;
        p.age++;
        if (p.age >= 31) p.ovr = Math.max(35, p.ovr - FM.ri(0, Math.min(4, p.age - 30)));
        p.pot = Math.max(p.pot, p.ovr);
        this.revalue(p);
      }
      this.returnLoans();
      for (const tid in this.teams) {
        const t = this.teams[tid];
        for (const pid of t.players.slice()) {
          const p = this.players[pid];
          const retire = p.age >= 34 && Math.random() < (p.age - 33) * 0.22;
          if (retire) {
            this.removeFromTeam(p);
            delete this.players[pid];
            if (tid === s.user) this.msg('Завершение карьеры', `${p.name} (${p.age}) завершает карьеру игрока.`, 'squad');
            continue;
          }
          if (p.contract <= y && p.pre && this.teams[p.pre.team]) {
            const to = this.teams[p.pre.team];
            const pre = p.pre;
            this.transfer(p, to, 0, pre.wage, pre.years, { role: pre.role, release: pre.release });
            if (to.id === s.user) this.msg('Пополнение', `${p.name} перешёл в клуб по предварительному контракту.`, 'transfer');
            continue;
          }
          if (p.contract <= y) {
            if (tid === s.user) {
              this.removeFromTeam(p);
              s.freeAgents.push(p.id);
              p.listed = false;
              this.msg('Контракт истёк', `${p.name} покидает клуб свободным агентом.`, 'squad');
            } else if (Math.random() < this.keepChance(p)) {
              p.contract = y + FM.ri(1, 3);
            } else {
              this.removeFromTeam(p);
              s.freeAgents.push(p.id);
            }
          }
        }
      }
      // воспитанники: сначала реальные игроки из академии клуба (ЮФЛ), старшие первыми; когда академия пуста — сгенерированные
      for (const tid in this.teams) {
        const t = this.teams[tid];
        const n = FM.ri(1, 3);
        const base = this.teamBaseOvr(t) - 12;
        const pool = s.academy && s.academy[tid];
        for (let i = 0; i < n; i++) {
          let p;
          if (pool && pool.length) {
            pool.sort((a, b) => a.born - b.born || b.pot - a.pot);
            const a = pool.shift();
            // за каждый год в академии воспитанник прибавляет около 3 единиц рейтинга
            p = this.createPlayer({ name: a.name, pos: a.pos, age: y + 1 - a.born, ovr: Math.min(a.pot, a.ovr + 3 * (y + 1 - a.year)), pot: a.pot, nat: 'RUS' }, t);
          } else {
            p = this.genPlayer(FM.pick(FM.POS), base + FM.gauss(0, 4), FM.ri(16, 18), t);
            p.pot = Math.min(92, p.ovr + FM.ri(10, 24));
          }
          p.contract = y + 1 + FM.ri(2, 3);
          this.revalue(p);
          if (tid === s.user) this.msg('Воспитанник академии', `В основную команду переведён ${p.name} (${p.age}, ${FM.POS_NAME[p.pos].toLowerCase()}), потенциал ${this.potLabel(p)}.`, 'squad');
        }
        this.fillSquad(t);
        // спонсорский контракт пересматривается
        const bill = this.wageBill(t);
        if (tid !== s.user) t.sponsor = Math.round(Math.max(bill * 0.97, t.sponsor * 0.9) * 10) / 10;
        else t.sponsor = Math.round(Math.max(t.sponsor * (1 + (exp - pos) * 0.03 + (moved ? (moved.up ? 0.25 : -0.2) : 0)), bill * 0.6) * 10) / 10;
      }
      s.freeAgents = s.freeAgents.filter((id) => this.players[id] && this.players[id].age < 36).slice(-120);

      s.season++;
      s.date = `${s.season}-06-20`;
      this.newSeason(false);
      if (s.board.conf <= 0) this.sack('Руководство приняло решение расстаться с вами по итогам сезона.');
      else this.msg('Новый сезон', `Задача на сезон ${s.season}/${String(s.season + 1).slice(2)}: ${this.expectText()}. Трансферное окно открыто до 7 сентября.`, 'board');
      return summary;
    }

    removeFromTeam(p) {
      if (!p.club) return;
      const t = this.teams[p.club];
      p.lastTier = this.tierOf(t);  // уровень последнего клуба — свободный агент не опустится намного ниже
      t.players = t.players.filter((x) => x !== p.id);
      t.lineup = t.lineup.map((x) => (x === p.id ? null : x));
      t.bench = t.bench.filter((x) => x !== p.id);
      p.club = null;
    }

    potLabel(p) {
      const d = p.pot;
      if (d >= 85) return 'звёздный';
      if (d >= 78) return 'очень высокий';
      if (d >= 72) return 'высокий';
      if (d >= 65) return 'средний';
      return 'невысокий';
    }

    revalue(p) {
      p.value = FM.roundValue(FM.baseValue(p.ovr, p.age, p.pot) * (p.vmul || 1));
    }

    sack(text) {
      const s = this.s;
      s.sacked = true;
      s.coachRep = FM.clamp(this.coachRep() - 6, 30, 99);
      this.msg('Вы уволены', text, 'board');
    }

    jobOffers() {
      // клубы, готовые взять тренера после увольнения
      const prev = this.teams[this.s.user];
      return FM.shuffle(Object.values(this.teams).filter((t) => t.id !== prev.id && !t.reserveOf && t.rep <= prev.rep - 3)).slice(0, 5)
        .sort((a, b) => b.rep - a.rep);
    }

    // ================== статистика тренера ==================
    // По сезону: клубы, последний матч в каждом турнире (по нему видна стадия), баланс матчей,
    // крупнейшие победа и поражение, бомбардиры. Старые сохранения без этих данных просто начинают с нуля.
    coachSeason(year = this.s.season) {
      const s = this.s;
      s.coach = s.coach || { seasons: [] };
      let e = s.coach.seasons.find((x) => x.year === year);
      if (!e) {
        e = { year, clubs: [], comps: {}, rec: { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 }, bigWin: null, bigLoss: null, scorers: {} };
        s.coach.seasons.unshift(e);
      }
      return e;
    }

    recordCoach(m) {
      const s = this.s, uid = s.user;
      const e = this.coachSeason();
      const name = this.teams[uid].name;
      if (!e.clubs.includes(name)) e.clubs.push(name);
      const home = m.h === uid;
      const gf = home ? m.hg : m.ag, ga = home ? m.ag : m.hg;
      const r = e.rec;
      r.p++; r.gf += gf; r.ga += ga;
      if (gf > ga) r.w++; else if (gf < ga) r.l++; else r.d++;
      const res = { h: this.teams[m.h].name, a: this.teams[m.a].name, hg: m.hg, ag: m.ag, diff: gf - ga, gf, date: m.date };
      if (gf > ga && (!e.bigWin || res.diff > e.bigWin.diff || (res.diff === e.bigWin.diff && gf > e.bigWin.gf))) e.bigWin = res;
      if (gf < ga && (!e.bigLoss || res.diff < e.bigLoss.diff || (res.diff === e.bigLoss.diff && ga > e.bigLoss.hg + e.bigLoss.ag - e.bigLoss.gf))) e.bigLoss = res;
      for (const g of m.goals || []) {
        if ((g.side === 'h') !== home || g.og) continue;
        const p = this.players[g.scorer];
        if (!p) continue;
        const k = e.scorers[g.scorer] || (e.scorers[g.scorer] = { name: p.name, g: 0 });
        k.g++;
      }
      const label = m.label || (m.comp === 'cup' && s.cup && s.cup.rounds[m.round - 1] ? s.cup.rounds[m.round - 1].name : '');
      e.comps[m.comp] = { label: label.replace(/, (1-й|ответный) матч$/, ''), md: !!m.md, ko: !!m.winner, won: m.winner === uid, final: /^финал$/i.test(label) };
    }

    // ================== рынок тренеров ==================
    // Репутация тренера растёт от трофеев и выполненных задач, падает от провалов и увольнений.
    coachRep() {
      const s = this.s;
      if (s.coachRep == null) s.coachRep = this.userTeam().rep;
      return Math.round(s.coachRep);
    }

    // Клубы, которые могут взять тренера: интерес зависит от разницы репутаций,
    // клуб, который сильно отстаёт от ожиданий, «ищет тренера» и охотнее соглашается.
    coachMarket() {
      const s = this.s, cr = this.coachRep();
      const out = [];
      for (const t of Object.values(this.teams)) {
        if (t.id === s.user || t.reserveOf || t.rep > cr + 12 || t.rep < cr - 28) continue;
        const L = s.leagues[t.league];
        const row = this.table(t.league).find((r) => r.id === t.id);
        const expect = L.teams.slice().sort((a, b) => this.teams[b].rep - this.teams[a].rep).indexOf(t.id) + 1;
        const vacancy = row.p >= 6 && row.pos >= expect + 4;
        const fit = cr - t.rep + (vacancy ? 4 : 0);
        const lvl = fit >= 3 ? 3 : fit >= -3 ? 2 : fit >= -8 ? 1 : 0;
        const refused = s.jobRefused && s.jobRefused[t.id] === s.season;
        out.push({ id: t.id, rep: t.rep, league: t.league, pos: row.pos, played: row.p, expect, vacancy, level: refused ? 0 : lvl, refused });
      }
      return out.sort((a, b) => b.rep - a.rep);
    }

    applyJob(teamId) {
      const s = this.s, t = this.teams[teamId];
      const m = this.coachMarket().find((x) => x.id === teamId);
      if (!m) return { ok: false, text: `«${t.name}» не рассматривает вашу кандидатуру.` };
      if (m.refused) return { ok: false, text: `«${t.name}» уже отказал вам в этом сезоне.` };
      if (m.level < 2) {
        s.jobRefused = s.jobRefused || {};
        s.jobRefused[teamId] = s.season;
        return { ok: false, text: `«${t.name}» благодарит за интерес, но выбирает другого кандидата. Поднимите репутацию — выигрывайте трофеи и выполняйте задачи.` };
      }
      const from = this.userTeam();
      this.news(`${s.manager} покидает «${from.name}» и возглавляет «${t.name}».`);
      this.takeJob(teamId);
      return { ok: true, text: `Вы — главный тренер «${t.name}»!` };
    }

    // по ходу сезона клубы, недовольные своим тренером, иногда сами зовут пользователя
    jobOfferWeek() {
      const s = this.s, u = this.userTeam();
      if (s.sacked || s.seasonOver || !FM.chance(0.04)) return;
      if (s.inbox.some((m) => m.type === 'job' && m.data && !m.data.closed)) return;
      const c = this.coachMarket().filter((x) => x.vacancy && x.level >= 2 && x.rep >= u.rep - 2);
      if (!c.length) return;
      const t = this.teams[FM.pick(c.slice(0, 5)).id];
      this.msg(`Предложение от «${t.name}»`, `«${t.name}» (${s.leagues[t.league].name}) недоволен результатами и предлагает вам возглавить команду. Решение за вами — можно остаться.`, 'job', { team: t.id });
    }

    // репутация по итогам сезона
    coachSeasonRep(pos, exp, moved, trophies) {
      const s = this.s, L = s.leagues[this.userTeam().league];
      let d = pos <= exp ? 2 + (exp - pos) * 0.6 : -Math.min(6, (pos - exp) * 0.8);
      if (pos === 1 && L.tier === 1) d += 5;
      if (moved) d += moved.up ? 4 : -4;
      d += trophies * 4;
      s.coachRep = FM.clamp(this.coachRep() + d, 30, 99);
    }

    takeJob(teamId) {
      const s = this.s;
      const t = this.teams[teamId];
      s.user = teamId;
      s.sacked = false;
      s.board.conf = 55;
      this.setExpectation();
      this.msg('Новый клуб', `Вы возглавили «${t.name}». Задача: ${this.expectText()}.`, 'board');
    }

    // ================== матчи ==================
    todayMatches() {
      const s = this.s;
      return Object.values(s.matches).filter((m) => m.date === s.date && !m.played);
    }

    userMatchToday() {
      return this.todayMatches().find((m) => m.h === this.s.user || m.a === this.s.user) || null;
    }

    nextUserMatch() {
      const s = this.s;
      let best = null;
      for (const id in s.matches) {
        const m = s.matches[id];
        if (m.played || (m.h !== s.user && m.a !== s.user)) continue;
        if (!best || m.date < best.date) best = m;
      }
      return best;
    }

    createMatch(m, live) {
      const opts = { comp: m.comp, knockout: !!m.ko, shootout: !m.ko && (!!this.s.leagues[m.comp] || !!m.shootout), userTeam: this.s.user, autoSubsUser: !live || this.s.settings.autoSubs };
      if (m.firstLeg) {
        const f = this.s.matches[m.firstLeg];
        // счёт первого матча с точки зрения нынешних хозяев (в первом они были гостями)
        opts.firstLeg = { homeGoals: f.hg, awayGoals: f.ag };
      }
      return new FM.Match(this, this.teams[m.h], this.teams[m.a], opts);
    }

    playMatch(m) {
      const sim = this.createMatch(m, false).runToEnd();
      this.applyMatch(m, sim);
      return sim;
    }

    applyMatch(m, sim) {
      const s = this.s;
      m.played = true;
      m.hg = sim.home.goals;
      m.ag = sim.away.goals;
      if (sim.pens) m.pens = [sim.pens.h, sim.pens.a];
      m.goals = sim.goalsList;
      m.reds = sim.events.filter((e) => e.type === 'red').map((e) => ({ pid: e.pid, side: e.side, min: e.min }));
      m.stats = ['shots', 'sot', 'corners', 'yc', 'rc', 'poss'].reduce((o, k) => { o[k] = [sim.home.stats[k], sim.away.stats[k]]; return o; }, {});
      m.stats.xg = [Math.round(sim.home.stats.xg * 100) / 100, Math.round(sim.away.stats.xg * 100) / 100];
      const isLeague = !!s.leagues[m.comp] || m.comp === 'po';
      const euro = FM.EURO.find((E) => E.id === m.comp);
      if (m.ko || m.comp === 'cup') m.winner = sim.winner();
      if (m.comp === 'cup' && !m.winner) m.winner = m.hg >= m.ag ? m.h : m.a;
      if (m.h === s.user || m.a === s.user) this.recordCoach(m);
      const ratings = {};
      for (const side of [sim.home, sim.away]) {
        const t = side.team;
        const playedIds = new Set(Object.keys(side.mins).map(Number));
        for (const pid of playedIds) {
          const p = this.players[pid];
          if (!p) continue;
          const r = side.rating[pid];
          ratings[pid] = r;
          const st = isLeague ? p.st : p.cst;
          st.apps++;
          st.mins += side.mins[pid] || 0;
          st.rsum += r;
          p.fit = Math.round(side.fitness[pid]);
          p.morale = FM.clamp(p.morale + (r >= 7.5 ? 4 : r < 6 ? -3 : 0), 10, 100);
          // сухой матч — вратарю и защитникам, сыгравшим от 60 минут
          const conceded = side === sim.home ? sim.away.goals : sim.home.goals;
          if (!conceded && (side.mins[pid] || 0) >= 20 && (FM.GROUP[p.pos] === 'G' || FM.GROUP[p.pos] === 'D')) st.cs = (st.cs || 0) + 1;
        }
        for (const pid in side.yellows) {
          const p = this.players[pid];
          (isLeague ? p.st : p.cst).yc++;
          if (side.yellows[pid] < 2 && isLeague) {
            p.ycAcc++;
            if (p.ycAcc % 4 === 0) {
              p.sus++;
              if (t.id === s.user) this.msg('Дисквалификация', `${p.name} пропустит следующий матч из-за перебора жёлтых карточек.`, 'squad');
            }
          }
        }
        for (const pid of side.redCards || []) {
          const p = this.players[pid];
          (isLeague ? p.st : p.cst).rc++;
          p.sus += side.yellows[pid] >= 2 ? 1 : FM.ri(2, 3);
          if (t.id === s.user) this.msg('Удаление', `${p.name} дисквалифицирован на ${p.sus} матч(а).`, 'squad');
        }
        for (const pid in side.injured || {}) {
          const p = this.players[pid];
          p.inj = Math.max(p.inj, side.injured[pid]);
          if (t.id === s.user) this.msg('Травма', `${p.name} получил травму и выбыл примерно на ${this.injText(p.inj)}.`, 'squad');
        }
        // отбывшие дисквалификацию
        for (const pid of t.players) {
          const p = this.players[pid];
          if (p.sus > 0 && !playedIds.has(pid) && !(side.redCards || []).includes(pid)) p.sus--;
        }
        const res = Math.sign(side.goals - sim.other(side).goals);
        t.form.push(res > 0 ? 'W' : res < 0 ? 'L' : 'D');
        if (t.form.length > 10) t.form.shift();
      }
      const key = isLeague ? 'st' : 'cst';
      for (const g of sim.goalsList) {
        const p = this.players[g.scorer];
        if (p) p[key].g++;
        const a = g.assist && this.players[g.assist];
        if (a) a[key].a++;
      }
      // оценки храним только для матчей своей команды, чтобы сохранение не разрасталось
      if (m.h === s.user || m.a === s.user) m.ratings = ratings;
      const best = Object.entries(ratings).sort((a, b) => b[1] - a[1])[0];
      m.mvp = best ? +best[0] : null;

      // выручка от билетов
      const home = this.teams[m.h];
      if (!m.neutral) {
        const away = this.teams[m.a];
        const fill = FM.clamp(0.12 + home.rep / 160 + (away.rep - 60) / 250 + (m.comp === 'cup' ? 0.05 : euro ? 0.15 : 0) + FM.gauss(0, 0.05), 0.08, 0.98);
        m.att = Math.round(home.cap * fill);
        const price = (s.leagues[home.league].ticket || 2) * (m.comp === 'po' ? 1.5 : euro ? 2 : 1);
        const inc = Math.round((m.att * price) / 100) / 10;
        home.money += inc;
        if (home.id === s.user) this.finLog(home, 'Билеты', inc);
      }
      if (euro && m.md) {
        // премия за результат в общем этапе
        if (m.hg !== m.ag) this.euroReward(euro, [m.hg > m.ag ? m.h : m.a], euro.win, 'победа в общем этапе');
        else this.euroReward(euro, [m.h, m.a], euro.draw, 'ничья в общем этапе');
      }
      if (m.comp === 'cup') {
        for (const id of [m.h, m.a]) {
          const bonus = [0, 15, 6, 2][this.tierOf(this.teams[id])] || 2;
          this.teams[id].money += bonus;
        }
      }

      // доверие руководства
      if (m.h === s.user || m.a === s.user) {
        const my = m.h === s.user ? m.hg : m.ag, op = m.h === s.user ? m.ag : m.hg;
        const opp = this.teams[m.h === s.user ? m.a : m.h];
        const repDiff = (opp.rep - this.userTeam().rep) / 10;
        let d = my > op ? 2 + Math.max(0, repDiff) : my < op ? -2.5 + Math.max(0, repDiff) * 0.8 : 0.3 * repDiff;
        if (!isLeague) d *= 0.6;
        s.board.conf = FM.clamp(s.board.conf + d, 0, 100);
      }

      this._tables = {};
    }

    injText(days) {
      if (days <= 7) return `${days} дн.`;
      if (days <= 35) return `${Math.round(days / 7)} нед.`;
      return `${Math.round(days / 30)} мес.`;
    }

    // ================== течение времени ==================
    // Сыграть все сегодняшние матчи без участия пользователя и перейти к следующему дню.
    simulateToday() {
      for (const m of this.todayMatches()) this.playMatch(m);
      this.progressCup();
      this.progressEuro();
      this.setupPlayoff();
      this.progressPlayoff();
    }

    nextDay() {
      const s = this.s;
      s.date = FM.addDays(s.date, 1);
      const monday = FM.weekday(s.date) === 1;
      for (const id in this.players) {
        const p = this.players[id];
        if (p.inj > 0) {
          p.inj--;
          if (p.inj === 0 && p.club === s.user) this.msg('Восстановление', `${p.name} восстановился после травмы.`, 'squad');
        }
        p.fit = Math.min(100, p.fit + (p.inj ? 4 : 13));
      }
      if (monday) this.weekly();
      if (s.payments && s.payments.length) {
        for (const pay of s.payments.filter((x) => x.date <= s.date)) {
          const from = this.teams[pay.from], to = this.teams[pay.to];
          if (from) { from.money -= pay.amount; if (from.id === s.user) this.finLog(from, `Рассрочка: ${pay.what}`, -pay.amount); }
          if (to) { to.money += pay.amount; if (to.id === s.user) this.finLog(to, `Рассрочка: ${pay.what}`, pay.amount); }
        }
        s.payments = s.payments.filter((x) => x.date > s.date);
      }
      if (this.inWindow()) this.transferDay();
      this.expireOffers();
      if (s.date.endsWith('-03-01')) this.contractReminder();
    }

    // true — остановка (матч пользователя, важное сообщение, конец сезона)
    advance() {
      const s = this.s;
      if (s.sacked) return 'sacked';
      if (this.userMatchToday()) return 'match';
      this.simulateToday();
      if (this.allDone() && s.date >= this.seasonEndDate()) return 'season_end';
      const unreadBefore = s.inbox.filter((x) => !x.read && x.type === 'offer').length;
      this.nextDay();
      if (s.sacked) return 'sacked';
      if (this.userMatchToday()) return 'match';
      const unreadAfter = s.inbox.filter((x) => !x.read && x.type === 'offer').length;
      if (unreadAfter > unreadBefore) return 'offer';
      return 'day';
    }

    // ================== аренда ==================
    // p.club — клуб, где игрок сейчас играет; p.loan = { from: владелец, wagePct: доля зарплаты арендатора,
    // fee: плата за аренду, buy: цена опции выкупа или 0 }. Все аренды — до конца сезона.
    loanMove(p, to, terms) {
      const from = this.teams[p.club];
      this.removeFromTeam(p);
      p.club = to.id;
      to.players.push(p.id);
      p.loan = Object.assign({ from: from.id, start: this.s.date }, terms);
      p.listed = false;
      p.train = null;
      this.s.loans = (this.s.loans || []).concat(p.id);
      if (terms.fee) {
        to.money -= terms.fee; from.money += terms.fee;
        if (to.id === this.s.user) this.finLog(to, `Аренда: ${p.name}`, -terms.fee);
        if (from.id === this.s.user) this.finLog(from, `Аренда: ${p.name}`, terms.fee);
      }
      this.news(`${p.name} отправляется в аренду: «${from.name}» → «${to.name}» до конца сезона.`);
    }

    // Что клуб-владелец хочет за аренду своего игрока
    loanAsk(p) {
      const rank = this.squadRank(p);
      const owner = this.teams[p.club];
      const key = rank <= 11 && !p.listed;
      return {
        refuse: key && !(p.age <= 21 && rank > 6) ? `«${owner.name}» не отдаёт в аренду игроков основы.` : null,
        minPct: rank > 16 || p.listed ? 50 : rank > 12 ? 75 : 100,
        fee: FM.roundValue(p.value * (key ? 0.12 : rank > 16 ? 0.03 : 0.06)),
        buyMin: FM.roundValue(p.value * 1.15),
      };
    }

    loanIn(pid, t) {
      const s = this.s, p = this.players[pid], u = this.userTeam();
      if (!p || !p.club || p.club === u.id) return { ok: false, text: 'Этого игрока нельзя взять в аренду.' };
      if (p.loan) return { ok: false, text: `${p.name} уже играет в аренде.` };
      if (p.pre) return { ok: false, text: `${p.name} уже подписал предварительный контракт.` };
      if (!this.inWindow()) return { ok: false, text: 'Трансферное окно закрыто — арендовать можно только в окно.' };
      if (u.players.length >= MAX_SQUAD) return { ok: false, text: `В заявке уже ${MAX_SQUAD} игроков.` };
      if (this.teams[p.club].players.length <= 18) return { ok: false, text: `«${this.teams[p.club].name}» не готов сокращать короткий состав.` };
      if ((t.fee || 0) > u.money) return { ok: false, text: `Не хватает денег: на счёте ${FM.money(u.money)}.` };
      const a = this.loanAsk(p);
      if (a.refuse) return { ok: false, text: a.refuse };
      if (t.wagePct < a.minPct) return { ok: false, text: `Клуб хочет, чтобы вы платили не меньше ${a.minPct}% зарплаты игрока.` };
      const need = Math.round(a.fee * (t.buy ? 0.7 : 1) * (t.wagePct > a.minPct ? 0.7 : 1));
      if ((t.fee || 0) < need) return { ok: false, text: `Клуб просит за аренду не меньше ${FM.money(need)}.` };
      if (t.buy && t.buy < a.buyMin) return { ok: false, text: `Опция выкупа слишком дешёвая: клуб согласен от ${FM.money(a.buyMin)}.` };
      const it = this.playerInterest(p, u);
      if (it.score < 30 && !it.starter) return { ok: false, text: `${p.name} не хочет переходить в ваш клуб даже в аренду.` };
      this.loanMove(p, u, { wagePct: t.wagePct, fee: t.fee || 0, buy: t.buy || 0 });
      this.msg('Аренда', `${p.name} будет играть за «${u.name}» до конца сезона. Вы платите ${t.wagePct}% зарплаты (${FM.money(p.wage * t.wagePct / 100)}/нед)${t.buy ? `, опция выкупа — ${FM.money(t.buy)}` : ''}.`, 'transfer');
      return { ok: true, text: `${p.name} — ваш игрок до конца сезона!` };
    }

    // Клубы, готовые взять игрока пользователя в аренду: те, где он будет играть
    loanOffers(pid) {
      const p = this.players[pid], u = this.userTeam();
      const out = [];
      for (const t of Object.values(this.teams)) {
        if (t.id === u.id || t.reserveOf || t.players.length >= MAX_SQUAD - 1 || t.rep > u.rep + 4 || t.rep < u.rep - 30) continue;
        const better = this.squad(t).filter((x) => FM.GROUP[x.pos] === FM.GROUP[p.pos] && x.ovr >= p.ovr).length;
        if (better >= { G: 1, D: 3, M: 3, F: 2 }[FM.GROUP[p.pos]]) continue;
        out.push(t);
      }
      return FM.shuffle(out).slice(0, 4).sort((a, b) => b.rep - a.rep).map((t) => {
        const wagePct = t.money > p.wage * 60 ? 100 : t.money > p.wage * 30 ? 75 : 50;
        return { club: t.id, wagePct, fee: FM.roundValue(p.value * (wagePct === 100 ? 0.04 : 0.02)) };
      });
    }

    loanOut(pid, offer) {
      const p = this.players[pid], t = this.teams[offer.club];
      if (!this.inWindow()) return 'Трансферное окно закрыто.';
      if (p.loan) return 'Игрок уже в аренде.';
      this.loanMove(p, t, { wagePct: offer.wagePct, fee: Math.min(offer.fee, t.money), buy: 0 });
      return `${p.name} уходит в аренду в «${t.name}» до конца сезона.`;
    }

    // выкуп арендованного игрока по опции
    loanBuy(pid) {
      const p = this.players[pid], u = this.userTeam();
      if (!p.loan || p.club !== u.id || !p.loan.buy) return 'Опции выкупа нет.';
      if (u.money < p.loan.buy) return `Не хватает денег: нужно ${FM.money(p.loan.buy)}.`;
      const from = this.teams[p.loan.from], price = p.loan.buy, wage = p.wage;
      // вернуть игрока владельцу и сразу оформить трансфер
      this.removeFromTeam(p);
      p.club = from.id; from.players.push(p.id);
      this.s.loans = (this.s.loans || []).filter((x) => x !== p.id);
      p.loan = null;
      this.transfer(p, u, price, wage, Math.max(2, p.contract - this.s.season));
      return `${p.name} выкуплен у «${from.name}» за ${FM.money(price)}.`;
    }

    returnLoans() {
      const s = this.s;
      for (const pid of s.loans || []) {
        const p = this.players[pid];
        if (!p || !p.loan) continue;
        const owner = this.teams[p.loan.from];
        const was = this.teams[p.club];
        this.removeFromTeam(p);
        p.club = owner.id;
        owner.players.push(p.id);
        if (owner.id === s.user) this.msg('Возвращение из аренды', `${p.name} вернулся из аренды в «${was.name}».`, 'squad');
        if (was && was.id === s.user) this.msg('Аренда закончилась', `${p.name} вернулся в «${owner.name}».`, 'squad');
        p.loan = null;
      }
      s.loans = [];
    }

    // ================== переучивание на другую позицию ==================
    retrain(pid, to) {
      const p = this.players[pid];
      if (!p || p.club !== this.s.user || p.loan) return 'Переучивать можно только своих игроков (не арендованных).';
      if (to === p.pos || (p.alt || []).includes(to)) return 'Игрок уже умеет играть на этой позиции.';
      if ((to === 'GK') !== (p.pos === 'GK')) return 'Полевого игрока нельзя переучить во вратаря и наоборот.';
      p.train = { to, from: FM.pfit(p, to), done: 0, need: FM.retrainWeeks(p, to) };
      return `${p.name} начал переучиваться на позицию «${FM.POS_NAME[to]}». Это займёт около ${p.train.need} нед.`;
    }

    cancelRetrain(pid) {
      const p = this.players[pid];
      if (p) p.train = null;
    }

    trainWeek() {
      for (const p of this.squad(this.userTeam())) {
        const t = p.train;
        if (!t) continue;
        // травмированный игрок не тренируется
        if (!p.inj) t.done++;
        if (t.done < t.need) continue;
        p.alt = [p.pos].concat((p.alt || []).filter((x) => x !== t.to && x !== p.pos)).slice(0, 3);
        p.pos = t.to;
        p.train = null;
        this.msg('Переучивание завершено', `${p.name} освоил позицию «${FM.POS_NAME[p.pos]}» — теперь это его основная позиция. Прежняя (${FM.POS_NAME[p.alt[0]]}) остаётся запасной.`, 'squad');
      }
    }

    weekly() {
      this.trainWeek();
      this.jobOfferWeek();
      const s = this.s;
      for (const id in this.teams) {
        const t = this.teams[id];
        const wages = this.wageBill(t);
        t.money += t.sponsor - wages;
        if (id === s.user) {
          this.finLog(t, 'Спонсоры', t.sponsor);
          this.finLog(t, 'Зарплаты', -wages);
        }
      }
      for (const id in this.players) {
        const p = this.players[id];
        const young = p.age <= 23 && p.ovr < p.pot;
        const playing = p.st.mins + p.cst.mins > 0;
        if (young && Math.random() < (playing ? 0.09 : 0.045) * (p.age <= 20 ? 1.3 : 1)) { p.ovr++; this.revalue(p); }
        else if (p.age >= 31 && Math.random() < 0.006 * (p.age - 30)) { p.ovr--; this.revalue(p); }
        p.morale += (60 - p.morale) * 0.1;
      }
      // доверие: положение в таблице против ожиданий
      const u = this.userTeam();
      const tab = this.table(u.league);
      const row = tab.find((r) => r.id === u.id);
      // обещанная при подписании роль: если игрок почти не играет, он недоволен
      if (row.p >= 6) {
        for (const p of this.squad(u)) {
          const need = { key: 0.6, starter: 0.4 }[p.role];
          if (!need || p.st.apps >= row.p * need) continue;
          p.morale = Math.max(10, p.morale - 4);
          if (!p.roleWarned) {
            p.roleWarned = true;
            this.msg(`${p.name} недоволен`, `${p.name} напоминает, что ему обещали роль ${p.role === 'key' ? 'ключевого игрока' : 'игрока основы'}, но он редко выходит на поле.`, 'squad');
          }
        }
      }
      if (row.p >= 5) {
        const diff = s.board.expect - row.pos;
        s.board.conf = FM.clamp(s.board.conf + FM.clamp(diff * 0.25, -1.5, 1.5), 0, 100);
      }
      if (u.money < -300) s.board.conf = Math.max(0, s.board.conf - 2);
      if (s.board.conf < 8 && row.p >= 8) this.sack('Руководство недовольно результатами и расторгает с вами контракт.');
    }

    finLog(t, what, amount) {
      t.fin.log.unshift({ date: this.s.date, what, amount: Math.round(amount * 10) / 10 });
      if (t.fin.log.length > 80) t.fin.log.length = 80;
      if (amount > 0) t.fin.income += amount;
      else t.fin.expense -= amount;
    }

    contractReminder() {
      const u = this.userTeam();
      const exp = this.squad(u).filter((p) => p.contract <= this.s.season);
      if (exp.length) this.msg('Истекающие контракты', `Летом истекают контракты: ${exp.map((p) => p.name).join(', ')}. Продлите их в карточке игрока, иначе они уйдут свободными агентами.`, 'squad');
    }

    // ================== трансферы ==================
    inWindow() {
      const s = this.s, d = s.date, w = s.window;
      return (d >= w.from && d <= w.to) || (d >= w.from2 && d <= w.to2);
    }

    windowText() {
      const s = this.s, d = s.date, w = s.window;
      if (d >= w.from && d <= w.to) return `открыто до ${FM.fmtDate(w.to)}`;
      if (d >= w.from2 && d <= w.to2) return `открыто до ${FM.fmtDate(w.to2)}`;
      if (d < w.from2) return `закрыто, откроется ${FM.fmtDate(w.from2)}`;
      return 'закрыто до лета';
    }

    // клуб ИИ продлевает контракт: основу (8 лучших полевых и 2 лучших вратаря) до 33 лет — всегда,
    // остальных — с вероятностью 75%, игроков от 35 лет — 50%
    keepChance(p) {
      const t = this.teams[p.club];
      const key = p.pos === 'GK'
        ? this.squad(t).filter((x) => x.pos === 'GK').sort((a, b) => b.ovr - a.ovr).findIndex((x) => x.id === p.id) < 2
        : this.squadRank(p) <= 8;
      if (key && p.age < 33) return 1;
      return p.age >= 35 ? 0.5 : 0.75;
    }

    squadRank(p) {
      const t = this.teams[p.club];
      if (!t) return 99;
      return this.squad(t).filter((x) => x.pos !== 'GK' || p.pos === 'GK').sort((a, b) => b.ovr - a.ovr).findIndex((x) => x.id === p.id) + 1;
    }

    askingPrice(p) {
      if (!p.club) return 0;
      const rank = this.squadRank(p);
      let k = 1.05 + (rank <= 3 ? 0.4 : rank <= 11 ? 0.2 : 0);
      if (p.listed) k = 0.9;
      if (p.contract <= this.s.season) k *= 0.6;
      return FM.roundValue(p.value * k);
    }

    wageDemand(p, team) {
      const tier = this.tierOf(team);
      const cur = p.club ? this.teams[p.club] : null;
      let w = Math.max(FM.wageFor(p.value, tier), p.wage * 1.1);
      if (cur && team.rep < cur.rep) w *= 1 + (cur.rep - team.rep) * 0.04;
      return Math.round(w * 10) / 10;
    }

    // ---------- переговоры о покупке ----------
    // Цена, которую клуб-продавец считает справедливой, и причины, которые он называет.
    clubAsk(p, buyer) {
      const s = this.s, seller = this.teams[p.club];
      if (p.release) return { ask: p.release, notes: ['в контракте прописаны отступные — клуб обязан отпустить игрока за эту сумму'], untouchable: false, release: true };
      const rank = this.squadRank(p);
      let k = 1.1;
      const notes = [];
      if (rank <= 3) { k += 0.45; notes.push('один из лидеров команды'); } else if (rank <= 11) { k += 0.2; notes.push('игрок основы'); } else notes.push('не основной игрок');
      const left = p.contract - s.season;
      if (left <= 0) { k -= 0.4; notes.push('контракт истекает летом'); } else if (left === 1) { k -= 0.15; notes.push('контракт заканчивается через год'); } else if (left >= 3) k += 0.1;
      if (p.age <= 22 && p.pot - p.ovr >= 8) { k += 0.15; notes.push('высокий потенциал'); }
      if (seller.money < 0) { k -= 0.15; notes.push('клубу нужны деньги'); } else if (seller.money > p.value * 4) k += 0.08;
      if (seller.league === buyer.league) { k += 0.1; notes.push('не хочет усиливать соперника'); }
      if (p.listed) { k -= 0.25; notes.push('выставлен на трансфер'); }
      const end = s.date <= s.window.to ? s.window.to : s.window.to2;
      if (this.inWindow() && FM.addDays(s.date, 7) >= end && rank > 3) { k -= 0.08; notes.push('окно скоро закроется'); }
      const sameGroup = this.squad(seller).filter((x) => FM.GROUP[x.pos] === FM.GROUP[p.pos]).length;
      if (sameGroup <= (p.pos === 'GK' ? 2 : 5)) { k += 0.15; notes.push('замены на позиции нет'); }
      const untouchable = rank <= 2 && seller.rep >= buyer.rep && !p.listed;
      if (untouchable) { k += 0.35; notes.unshift('не продаётся'); }
      return { ask: FM.roundValue(p.value * Math.max(0.4, k)), notes, untouchable };
    }

    canPrecontract(p) {
      const s = this.s;
      return !!p.club && p.club !== s.user && p.contract <= s.season && s.date >= `${s.season + 1}-01-01` && !p.pre && !p.loan;
    }

    // Состояние переговоров по игроку: начинаются с клуба, потом — с игроком и его агентом.
    nego(pid) {
      const s = this.s;
      s.nego = s.nego || {};
      const p = this.players[pid];
      let n = s.nego[pid];
      if (n && (n.club !== p.club || n.season !== s.season)) n = null;
      if (!n) {
        const pre = this.canPrecontract(p);
        n = { pid, club: p.club, season: s.season, stage: !p.club || pre ? 'player' : 'club', precontract: pre, log: [], patience: p.listed ? 6 : 5, pPatience: 4, deal: null, terms: null, until: null };
        if (n.stage === 'club') Object.assign(n, this.clubAsk(p, this.userTeam()));
        s.nego[pid] = n;
      }
      return n;
    }

    negoSay(n, who, text) {
      n.log.push({ who, text, date: this.s.date });
      if (n.log.length > 30) n.log.shift();
    }

    negoBlocked(n) {
      return n.until && this.s.date < n.until ? `Переговоры прерваны. Вернуться к ним можно с ${FM.fmtDate(n.until)}.` : null;
    }

    // Чем выгоднее для продавца условия оплаты, тем меньше сумма: рассрочка дешевле для покупателя,
    // процент с будущей продажи — бонус для продавца.
    dealFactor(inst, sellOn) {
      return (inst ? 0.9 : 1) * (1 + (sellOn || 0) / 100 * 0.5);
    }

    bidClub(pid, fee, inst, sellOn) {
      const s = this.s, p = this.players[pid], u = this.userTeam();
      const n = this.nego(pid);
      const seller = this.teams[p.club];
      const blocked = this.negoBlocked(n);
      if (blocked) return { status: 'blocked', text: blocked };
      if (n.stage !== 'club') return { status: 'blocked', text: 'С клубом уже есть договорённость.' };
      if (p.loan) return { status: 'blocked', text: `${p.name} сейчас в аренде — купить его можно после её окончания.` };
      if (!this.inWindow()) return { status: 'blocked', text: 'Трансферное окно закрыто. Покупать игроков можно летом (до 7 сентября) и зимой (20 января — 25 февраля).' };
      if (u.players.length >= MAX_SQUAD) return { status: 'blocked', text: `В заявке уже ${MAX_SQUAD} игроков. Сначала кого-нибудь продайте или отпустите.` };
      if ((inst ? fee * 0.4 : fee) > u.money) return { status: 'blocked', text: `Не хватает денег: на счёте ${FM.money(u.money)}.` };
      if (seller.players.length <= 18) return { status: 'blocked', text: `«${seller.name}» не готов ослаблять и без того короткий состав.` };
      this.negoSay(n, 'you', `Предлагаем ${FM.money(fee)}${inst ? ', рассрочка: 40% сразу и по 30% в следующие два лета' : ''}${sellOn ? `, ${sellOn}% от будущей продажи` : ''}.`);
      const k = this.dealFactor(inst, sellOn);
      const eff = fee * k;
      const res = (status, text, extra = {}) => { this.negoSay(n, 'club', text); return Object.assign({ status, text }, extra); };
      if (eff >= n.ask) {
        n.stage = 'player';
        n.deal = { fee, inst: !!inst, sellOn: sellOn || 0 };
        return res('accept', n.release ? `Отступные выплачены — «${seller.name}» не может отказать. Можно договариваться с игроком.` : `«${seller.name}» принимает предложение. Теперь нужно договориться с игроком.`);
      }
      const r = eff / n.ask;
      let out;
      if (n.untouchable && r < 0.9) {
        n.patience--;
        out = res('reject', `${p.name} не продаётся. Обсуждать можно только сумму около ${FM.money(FM.roundValue(n.ask / k))}.`);
      } else if (r >= 0.8) {
        n.ask = FM.roundValue(n.ask - (n.ask - eff) * 0.3);
        // встречное предложение не обрывает переговоры: клуб сам назвал цену
        n.patience = Math.max(1, n.patience - 1);
        out = res('counter', `«${seller.name}» готов уступить: ${FM.money(FM.roundValue(n.ask / k))} на тех же условиях оплаты.`, { fee: FM.roundValue(n.ask / k) });
      } else if (r >= 0.6) {
        n.patience--;
        out = res('reject', `Слишком мало. «${seller.name}» рассчитывает на сумму около ${FM.money(FM.roundValue(n.ask / k))}.`);
      } else {
        n.patience -= 2;
        out = res('reject', 'Такое предложение клуб считает несерьёзным.');
      }
      if (n.patience <= 0) {
        n.until = FM.addDays(s.date, 14);
        n.patience = 4;
        this.negoSay(n, 'club', 'Клуб прекращает переговоры на две недели.');
        return { status: 'broken', text: out.text + ' Клуб прекращает переговоры на две недели.' };
      }
      return out;
    }

    // Игрок опускается не больше чем на уровень: из Суперлиги — максимум в Высшую лигу, из Высшей — в Первую;
    // ветераны от 33 лет — на два уровня. Иностранные лиги считаются высшим уровнем.
    willJoin(p, team) {
      const from = p.club ? this.tierOf(this.teams[p.club]) : p.lastTier;
      return !from || this.tierOf(team) - from <= (p.age >= 33 ? 2 : 1);
    }

    playerInterest(p, team) {
      const s = this.s;
      if (!this.willJoin(p, team)) return { score: 0, label: 'Не хочет переходить', why: ['не пойдёт в лигу так низко'], starter: false };
      const cur = p.club ? this.teams[p.club] : null;
      let sc = 55;
      const why = [];
      if (cur) {
        const gap = cur.rep - team.rep;
        sc -= gap * 2.2;
        if (gap >= 8) why.push('шаг вниз по уровню клуба');
        else if (gap <= -8) why.push('шаг вперёд в карьере');
      } else {
        sc += 12;
        why.push('ищет клуб');
      }
      const euro = s.euro && FM.EURO.find((E) => s.euro[E.id] && s.euro[E.id].teams.includes(team.id));
      if (euro) { sc += euro.id === 'ucl' ? 12 : 6; why.push(euro.name); }
      const better = this.squad(team).filter((x) => x.id !== p.id && FM.GROUP[x.pos] === FM.GROUP[p.pos] && x.ovr > p.ovr).length;
      const starter = better < { G: 1, D: 4, M: 3, F: 3 }[FM.GROUP[p.pos]];
      if (starter) { sc += 8; why.push('будет игроком основы'); } else { sc -= 8; why.push('придётся бороться за место'); }
      if (cur && p.morale < 45) { sc += 10; why.push('недоволен в нынешнем клубе'); }
      if (p.age >= 31) sc += 5;
      if (p.nat === this.countryOf(team.league)) { sc += 5; why.push('родная страна'); }
      sc = Math.round(FM.clamp(sc, 0, 100));
      const label = sc >= 70 ? 'Очень заинтересован' : sc >= 50 ? 'Заинтересован' : sc >= 30 ? 'Сомневается' : sc >= 15 ? 'Почти не заинтересован' : 'Не хочет переходить';
      return { score: sc, label, why, starter };
    }

    playerDemand(p, team, role) {
      const it = this.playerInterest(p, team);
      let w = Math.max(FM.wageFor(p.value, this.tierOf(team)), p.wage * (p.club ? 1.15 : 0.9));
      w *= 1 + Math.max(0, 55 - it.score) * 0.015;
      w *= { key: 0.92, starter: 1, rotation: 1.1, backup: 1.25 }[role] || 1;
      if (role === 'key' && !it.starter) w *= 1.08;
      const prefYears = p.age < 24 ? [4, 5] : p.age < 30 ? [3, 4] : p.age < 33 ? [2, 3] : [1, 2];
      return { wage: Math.round(w * 10) / 10, prefYears, interest: it, bonus: FM.roundValue(w * 8) };
    }

    agentFee(p, fee, wage) {
      return FM.roundValue(Math.max(fee * 0.05, wage * 4));
    }

    offerPlayer(pid, t) {
      const s = this.s, p = this.players[pid], u = this.userTeam();
      const n = this.nego(pid);
      const blocked = this.negoBlocked(n);
      if (blocked) return { status: 'blocked', text: blocked };
      if (n.stage !== 'player') return { status: 'blocked', text: n.stage === 'club' ? 'Сначала договоритесь с клубом.' : 'Условия уже согласованы.' };
      const ROLE = { key: 'ключевой игрок', starter: 'игрок основы', rotation: 'ротация', backup: 'запасной' };
      this.negoSay(n, 'you', `Контракт на ${t.years} г.: ${FM.money(t.wage)}/нед, подъёмные ${FM.money(t.bonus || 0)}, роль — ${ROLE[t.role]}${t.release ? `, отступные ${FM.money(t.release)}` : ''}.`);
      const d = this.playerDemand(p, u, t.role);
      const res = (status, text, extra = {}) => { this.negoSay(n, 'player', text); return Object.assign({ status, text }, extra); };
      if (d.interest.score < 15) {
        n.until = FM.addDays(s.date, 30);
        return res('broken', `Агент: «${p.name} не рассматривает переход в ваш клуб». Переговоры закрыты на месяц.`);
      }
      let need = d.wage;
      if (!d.prefYears.includes(t.years)) need *= 1.05;
      if (t.release) need *= t.release < p.value * 1.5 ? 0.93 : 0.97;
      const got = t.wage + (t.bonus || 0) / (t.years * 52);
      if (got >= need) {
        n.stage = 'done';
        n.terms = Object.assign({}, t);
        return res('accept', `Агент: «Условия устраивают, ${p.name} готов подписать контракт».`);
      }
      let out;
      const ask = Math.ceil(Math.max(need - (t.bonus || 0) / (t.years * 52), need * 0.9) * 10) / 10;
      if (got >= need * 0.85) {
        n.pPatience = Math.max(1, n.pPatience - 1);
        out = res('counter', `Агент: «Нужна зарплата хотя бы ${FM.money(ask)}/нед${d.prefYears.includes(t.years) ? '' : `, а срок лучше ${d.prefYears.join(' или ')} г.`}».`, { wage: ask });
      } else {
        n.pPatience -= 2;
        out = res('reject', `Агент: «Это намного ниже ожиданий. Ориентир — ${FM.money(ask)}/нед».`, { wage: ask });
      }
      if (n.pPatience <= 0) {
        n.until = FM.addDays(s.date, 14);
        n.pPatience = 4;
        return { status: 'broken', text: out.text + ' Игрок прерывает переговоры на две недели.' };
      }
      return out;
    }

    // Итоговая стоимость сделки сейчас: первый платёж, агент, подъёмные.
    dealCost(n) {
      const p = this.players[n.pid];
      const fee = n.deal ? n.deal.fee : 0;
      const first = n.deal ? (n.deal.inst ? Math.round(fee * 0.4) : fee) : 0;
      const agent = this.agentFee(p, fee, n.terms.wage);
      return { fee, first, agent, bonus: n.terms.bonus || 0, now: first + agent + (n.terms.bonus || 0) };
    }

    completeDeal(pid) {
      const s = this.s, p = this.players[pid], u = this.userTeam();
      const n = this.nego(pid);
      if (n.stage !== 'done') return { ok: false, text: 'Условия ещё не согласованы.' };
      const c = this.dealCost(n);
      if (c.now > u.money) return { ok: false, text: `Не хватает денег: нужно ${FM.money(c.now)}, на счёте ${FM.money(u.money)}.` };
      if (n.precontract) {
        p.pre = Object.assign({ team: u.id }, n.terms);
        u.money -= c.agent + c.bonus;
        this.finLog(u, `Агент и подъёмные: ${p.name}`, -(c.agent + c.bonus));
        delete s.nego[pid];
        this.msg('Предварительный контракт', `${p.name} подписал предварительный контракт и перейдёт в клуб летом бесплатно.`, 'transfer');
        return { ok: true, text: `${p.name} перейдёт в «${u.name}» летом.` };
      }
      if (p.club && !this.inWindow()) return { ok: false, text: 'Трансферное окно закрыто.' };
      this.transfer(p, u, c.fee, n.terms.wage, n.terms.years, { inst: n.deal && n.deal.inst, sellOn: n.deal && n.deal.sellOn, role: n.terms.role, release: n.terms.release, agent: c.agent, bonus: c.bonus });
      delete s.nego[pid];
      return { ok: true, text: `${p.name} — ваш игрок!` };
    }

    // opts: inst (рассрочка 40/30/30), sellOn (% продавцу с будущей продажи), role, release, agent, bonus
    transfer(p, to, fee, wage, years, opts = {}) {
      const s = this.s;
      const from = p.club ? this.teams[p.club] : null;
      const now = opts.inst ? Math.round(fee * 0.4) : fee;
      if (from) {
        from.money += now;
        this.removeFromTeam(p);
        if (from.id === s.user) this.finLog(from, `Продажа: ${p.name}`, now);
        // процент с перепродажи, обещанный прежнему клубу
        if (fee && p.sellOn && p.sellOn.club !== to.id && this.teams[p.sellOn.club]) {
          const cut = Math.round(fee * p.sellOn.pct / 100);
          from.money -= cut;
          this.teams[p.sellOn.club].money += cut;
          if (from.id === s.user) this.finLog(from, `${p.sellOn.pct}% с перепродажи: ${p.name}`, -cut);
          if (p.sellOn.club === s.user) this.finLog(this.teams[s.user], `${p.sellOn.pct}% с перепродажи: ${p.name}`, cut);
        }
      } else {
        s.freeAgents = s.freeAgents.filter((x) => x !== p.id);
      }
      to.money -= now;
      if (to.id === s.user && fee) this.finLog(to, `Покупка: ${p.name}${opts.inst ? ' (первый платёж)' : ''}`, -now);
      if (opts.inst && from) {
        s.payments = s.payments || [];
        for (const y of [1, 2]) s.payments.push({ from: to.id, to: from.id, amount: Math.round(fee * 0.3), date: `${s.season + y}-07-01`, what: p.name });
      }
      const extra = (opts.agent || 0) + (opts.bonus || 0);
      if (extra) {
        to.money -= extra;
        if (to.id === s.user) this.finLog(to, `Агент и подъёмные: ${p.name}`, -extra);
      }
      p.sellOn = opts.sellOn && from ? { club: from.id, pct: opts.sellOn } : null;
      p.role = opts.role || null;
      p.release = opts.release || 0;
      p.pre = null;
      p.train = null;
      if (p.loan) { s.loans = (s.loans || []).filter((x) => x !== p.id); p.loan = null; }
      p.club = to.id;
      to.players.push(p.id);
      p.wage = wage || this.wageDemand(p, to);
      p.contract = s.season + (years || FM.ri(2, 4));
      p.listed = false;
      p.morale = 70;
      p.fit = Math.max(p.fit, 80);
      const txt = from ? `${p.name}: «${from.name}» → «${to.name}» за ${fee ? FM.money(fee) : 'бесплатно'}` : `${p.name} подписал контракт с «${to.name}» как свободный агент`;
      this.news(txt);
      s.seasonLog.unshift({ date: s.date, pid: p.id, name: p.name, from: from ? from.id : null, to: to.id, fee });
      if (s.seasonLog.length > 200) s.seasonLog.length = 200;
      if (to.id !== s.user && (!from || from.id !== s.user)) return;
      if (to.id === s.user) this.msg('Трансфер завершён', `${p.name} — игрок «${to.name}». ${fee ? 'Сумма: ' + FM.money(fee) + '.' : ''} Зарплата ${FM.money(p.wage)}/нед.`, 'transfer');
      // пользователь сам выбирает состав: если в старте была дыра, не трогаем
    }

    release(pid) {
      const s = this.s;
      const p = this.players[pid];
      const u = this.userTeam();
      const years = Math.max(0, p.contract - s.season);
      const comp = Math.round(p.wage * 52 * Math.max(years, 0.5) * 0.5);
      u.money -= comp;
      this.finLog(u, `Расторжение: ${p.name}`, -comp);
      this.removeFromTeam(p);
      s.freeAgents.push(p.id);
      p.listed = false;
      this.news(`«${u.name}» расторг контракт с ${p.name}`);
      return comp;
    }

    renewCost(p) {
      const u = this.userTeam();
      return Math.round(Math.max(p.wage * 1.08, FM.wageFor(p.value, this.tierOf(u))) * 10) / 10;
    }

    renew(pid, years) {
      const p = this.players[pid];
      const w = this.renewCost(p);
      if (p.age >= 33 && years > 2) years = 2;
      p.wage = w;
      p.contract = Math.max(p.contract, this.s.season) + years;
      p.morale = Math.min(100, p.morale + 8);
      return w;
    }

    transferDay() {
      const s = this.s;
      const u = this.userTeam();
      // предложения за игроков пользователя
      for (const pid of u.players) {
        const p = this.players[pid];
        if (p.loan || s.inbox.some((x) => x.type === 'offer' && x.data && x.data.pid === pid && !x.data.closed)) continue;
        const rank = this.squadRank(p);
        let pr = 0.0018 * Math.pow(p.ovr / 65, 4) * (rank <= 5 ? 1.4 : 1);
        if (p.listed) pr = 0.06;
        if (!FM.chance(pr)) continue;
        const buyers = Object.values(this.teams).filter((t) => t.id !== u.id && !t.reserveOf && t.rep >= u.rep - 12 && t.money > p.value * 0.9 && t.players.length < MAX_SQUAD - 1 && this.willJoin(p, t));
        if (!buyers.length) continue;
        const b = FM.pick(buyers);
        const fee = FM.roundValue(p.value * (p.listed ? FM.rnd() * 0.3 + 0.75 : FM.rnd() * 0.45 + 0.9));
        if (fee > b.money) continue;
        this.msg(`Предложение за ${p.name}`, `«${b.name}» предлагает ${FM.money(fee)} за ${p.name}. Ответить нужно в течение 5 дней.`, 'offer', { pid, from: b.id, fee, until: FM.addDays(s.date, 5) });
      }
      // отступные в контрактах игроков пользователя
      for (const pid of u.players.slice()) {
        const p = this.players[pid];
        if (!p.release || p.release > p.value * 1.6 || !FM.chance(0.004)) continue;
        const b = Object.values(this.teams).find((t) => t.id !== u.id && !t.reserveOf && t.rep >= u.rep - 5 && t.money > p.release * 1.5 && this.willJoin(p, t));
        if (!b) continue;
        this.msg('Отступные активированы', `«${b.name}» выплатил отступные ${FM.money(p.release)} — ${p.name} уходит из клуба.`, 'transfer');
        this.transfer(p, b, p.release, null, FM.ri(3, 5));
      }
      // трансферы между клубами ИИ
      const ai = Object.values(this.teams).filter((t) => t.id !== u.id && !t.reserveOf);
      for (let k = 0; k < 3; k++) {
        if (!FM.chance(0.6)) continue;
        const buyer = FM.pick(ai);
        this.aiBuy(buyer);
      }
      // подписание свободных агентов и разгрузка составов
      for (const t of ai) {
        if (t.players.length < 21 && s.freeAgents.length) {
          const best = s.freeAgents.map((id) => this.players[id]).filter((p) => p && p.ovr <= this.teamBaseOvr(t) + 4 && this.willJoin(p, t))
            .sort((a, b) => b.ovr - a.ovr)[0];
          if (best) this.transfer(best, t, 0, null, FM.ri(1, 2));
        }
        if (t.players.length > 29) {
          const worst = this.squad(t).sort((a, b) => a.ovr - b.ovr)[0];
          this.removeFromTeam(worst);
          s.freeAgents.push(worst.id);
        }
      }
    }

    aiBuy(buyer) {
      const s = this.s;
      if (buyer.players.length >= MAX_SQUAD - 2) return;
      const r = this.autoPick(buyer, buyer.formation, { ignoreFitness: true });
      const slots = FM.FORMATIONS[buyer.formation];
      let weakest = -1, wv = 999;
      r.lineup.forEach((pid, i) => {
        const v = pid ? this.players[pid].ovr * FM.pfit(this.players[pid], slots[i][0]) : 0;
        if (v < wv) { wv = v; weakest = i; }
      });
      if (weakest < 0) return;
      const pos = slots[weakest][0];
      const budget = buyer.money * 0.45;
      const cands = [];
      for (const tid in this.teams) {
        const t = this.teams[tid];
        if (t.id === buyer.id || t.id === s.user || t.reserveOf === buyer.id || t.players.length <= 20) continue;
        if (t.rep > buyer.rep + 3) continue;
        for (const pid of t.players) {
          const p = this.players[pid];
          if (p.pos !== pos || p.ovr < wv + 2 || p.inj || p.pre || p.loan || !this.willJoin(p, buyer)) continue;
          const fee = this.askingPrice(p);
          if (fee > budget) continue;
          cands.push([p, fee]);
        }
      }
      for (const pid of s.freeAgents) {
        const p = this.players[pid];
        if (p && p.pos === pos && p.ovr >= wv + 2 && this.willJoin(p, buyer)) cands.push([p, 0]);
      }
      if (!cands.length) return;
      cands.sort((a, b) => b[0].ovr - a[0].ovr);
      const [p, fee] = FM.pick(cands.slice(0, 4));
      this.transfer(p, buyer, fee, null, FM.ri(2, 4));
    }

    // Торг за своего игрока: у клуба-покупателя есть скрытый потолок, выше которого он не пойдёт.
    counterOffer(msgId, ask) {
      const s = this.s;
      const m = s.inbox.find((x) => x.id === msgId);
      if (!m || !m.data || m.data.closed) return 'Предложение уже неактуально.';
      const d = m.data;
      const p = this.players[d.pid], b = this.teams[d.from];
      if (!p || p.club !== s.user) { d.closed = true; d.result = 'Неактуально'; return 'Игрок уже не в клубе.'; }
      d.max = d.max || FM.roundValue(d.fee * (1.08 + Math.random() * 0.27));
      d.rounds = (d.rounds || 0) + 1;
      if (ask <= d.max && ask <= b.money) {
        d.fee = ask;
        return this.answerOffer(msgId, true);
      }
      if (d.rounds <= 2 && ask <= d.max * 1.25) {
        d.fee = Math.min(FM.roundValue((d.fee + d.max) / 2 + (d.max - d.fee) * 0.25), d.max, b.money);
        m.text = `«${b.name}» повышает предложение за ${p.name}: ${FM.money(d.fee)}. Ответить нужно до ${FM.fmtDate(d.until)}.`;
        return `«${b.name}» поднимает сумму до ${FM.money(d.fee)}, но ${FM.money(ask)} для них слишком много.`;
      }
      d.closed = true;
      d.result = 'Клуб отказался от сделки';
      return `«${b.name}» считает запрос завышенным и выходит из переговоров.`;
    }

    answerOffer(msgId, accept) {
      const s = this.s;
      const m = s.inbox.find((x) => x.id === msgId);
      if (!m || !m.data || m.data.closed) return 'Предложение уже неактуально.';
      m.data.closed = true;
      m.read = true;
      const p = this.players[m.data.pid];
      const b = this.teams[m.data.from];
      if (!accept) { m.data.result = 'Отклонено'; return 'Предложение отклонено.'; }
      if (!p || p.club !== s.user) { m.data.result = 'Неактуально'; return 'Игрок уже не в клубе.'; }
      if (!this.inWindow()) { m.data.result = 'Окно закрыто'; return 'Трансферное окно закрыто.'; }
      if (b.money < m.data.fee) { m.data.result = 'Сорвалось'; return `«${b.name}» больше не может позволить себе эту сумму.`; }
      this.transfer(p, b, m.data.fee, null, FM.ri(2, 4));
      m.data.result = 'Продан';
      return `${p.name} продан в «${b.name}» за ${FM.money(m.data.fee)}.`;
    }

    expireOffers() {
      for (const m of this.s.inbox) {
        if (m.type === 'offer' && m.data && !m.data.closed && m.data.until < this.s.date) {
          m.data.closed = true;
          m.data.result = 'Истекло';
        }
      }
    }

    // ================== статистика ==================
    leaders(lid, key, n = 20) {
      const L = this.s.leagues[lid];
      const list = [];
      for (const tid of L.teams) for (const pid of this.teams[tid].players) {
        const p = this.players[pid];
        if (key === 'rating') { if (p.st.apps >= 5) list.push([p, p.st.rsum / p.st.apps]); }
        else if (p.st[key] > 0) list.push([p, p.st[key]]);
      }
      return list.sort((a, b) => b[1] - a[1] || a[0].st.apps - b[0].st.apps).slice(0, n);
    }
  }

  FM.Game = Game;
})();
