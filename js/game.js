// Игровой мир: клубы, игроки, календарь, кубок, переходы между лигами, трансферы, финансы.
(function () {
  const SQUAD_NEED = { GK: 3, CB: 4, LB: 2, RB: 2, DM: 2, CM: 3, AM: 1, LW: 1, RW: 1, ST: 3 };
  const SLOT_ORDER = ['GK', 'CB', 'LB', 'RB', 'DM', 'ST', 'CM', 'AM', 'LW', 'RW'];
  const MAX_SQUAD = 32;
  // Раунды кубков — по средам в недели без еврокубков: дата = среда не раньше «date» плюс «plus» дней.
  // 1/16 и 1/8 — через неделю после туров общего этапа, 1/2 — через неделю после ответных 1/4 финала еврокубков.
  // Финал — суббота в конце мая.
  const CUP_ROUNDS = [
    { name: '1/64 финала', date: '08-12', y: 0, day: 3 },
    { name: '1/32 финала', date: '08-19', y: 0, day: 3 },
    { name: '1/16 финала', date: '09-15', y: 0, day: 3, plus: 7 },
    { name: '1/8 финала', date: '10-20', y: 0, day: 3, plus: 7 },
    { name: '1/4 финала', date: '03-10', y: 1, day: 3 },
    { name: '1/2 финала', date: '04-13', y: 1, day: 3, plus: 7 },
    { name: 'Финал', date: '05-22', y: 1, day: 6 },
  ];

  // туры общего этапа еврокубков (ближайший нужный день недели не раньше этой даты)
  const EURO_MD = ['09-15', '09-29', '10-20', '11-03', '11-24', '12-08', '01-19', '01-26'];

  const PLAYER_DEFAULTS = { fit: 100, morale: 60, inj: 0, sus: 0, ycAcc: 0, gen: false, listed: false };

  class Game {
    constructor(state) {
      this.s = state;
      // сохранение хранит игроков без значений по умолчанию (см. packState) — восстанавливаем их
      for (const id in state.players) Game.unpackPlayer(state.players[id]);
      // старые сохранения: потенциал старших игроков был завышен — приводим к возрастному запасу роста
      if (!state.potV2) {
        for (const id in state.players) { const p = state.players[id]; p.pot = FM.clamp(p.pot, p.ovr, p.ovr + FM.potRoom(p.age)); }
        state.potV2 = true;
      }
      // старые сохранения: зарплаты по прежней (завышенной) формуле и стоимость без потолка —
      // стоимость сохраняется (кроме превышения потолка), зарплаты и спонсорские контракты пересчитываются
      if (!state.wageV2) {
        state.wageV2 = true;
        this.migrateMoney = true;
      }
      // старые сохранения: один Кубок России в s.cup
      if (!state.cups) { state.cups = state.cup ? { RUS: state.cup } : {}; delete state.cup; }
      if (state.lastCupWinner !== undefined && !state.lastCupWinners) { state.lastCupWinners = state.lastCupWinner ? { RUS: state.lastCupWinner } : {}; delete state.lastCupWinner; }
      this.players = state.players;
      this.teams = state.teams;
      this._tables = {};
      // старые сохранения: в базе не хватало игроков с отметкой капитана, травмы или дисквалификации (Винисиус, Вальверде,
      // Акинфеев…) — добавляем их в свои клубы; если в заявке нет места — в свободные агенты
      if (!state.dbV2) {
        state.dbV2 = true;
        if (FM.leagues) this.addMissingRealPlayers();
      }
      if (this.migrateMoney) {
        delete this.migrateMoney;
        for (const id in this.players) {
          const p = this.players[id];
          const base = FM.baseValue(p.ovr, p.age, p.pot);
          p.vmul = FM.clamp(Math.min(p.value, FM.VALUE_CAP) / base, 0.2, 5);
          this.revalue(p);
          const t = p.club && this.teams[p.club];
          p.wage = Math.round(FM.wageFor(p.value, t ? this.tierOf(t) : 2, p.age, t ? this.countryOf(t.league) : '') * 10) / 10;
        }
        for (const id in this.teams) { const t = this.teams[id]; t.sponsor = Math.round(this.wageBill(t) * 0.97 * 10) / 10; }
      }
    }

    addMissingRealPlayers() {
      const s = this.s;
      const have = new Set(Object.values(this.players).map((p) => p.name));
      let n = 0;
      for (const L of FM.leagues) for (const T of L.teams) {
        const team = this.teams[T.id];
        if (!team) continue; // лиги, которых ещё нет в карьере, добавятся целиком со следующего сезона
        for (const line of (T.players || '').split('\n').map((x) => x.trim()).filter(Boolean)) {
          const f = line.split('|');
          if (have.has(f[0])) continue;
          const d = { name: f[0], pos: f[1], age: +f[2], value: +f[3], nat: f[4] || 'RUS', until: /^\d{4}$/.test(f[5] || '') ? +f[5] : null };
          const into = team && team.players.length < MAX_SQUAD ? team : null;
          const p = this.createPlayer(d, into);
          if (!into) { p.club = null; s.freeAgents.push(p.id); }
          have.add(f[0]);
          n++;
        }
      }
      if (n) this.news(`В базу добавлены ${n} игроков, которых раньше не хватало в составах клубов.`);
    }

    static unpackPlayer(p) {
      for (const k in PLAYER_DEFAULTS) if (p[k] === undefined) p[k] = PLAYER_DEFAULTS[k];
      if (p.club === undefined) p.club = null;
      p.st = Object.assign({ apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 }, p.st);
      p.cst = Object.assign({ apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 }, p.cst);
      p.car = Object.assign({ apps: 0, g: 0, a: 0 }, p.car);
      return p;
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
        cups: {}, playoff: null, inbox: [], news: [], freeAgents: [], history: [], nextMsg: 1,
        board: { conf: 60, expect: 8 }, settings: { autoSubs: false, ruEuro: opts.ruEuro !== false }, sacked: false,
        seasonLog: [], records: {},
      };
      const g = new Game(s);
      let leagues = db || FM.leagues;
      // свой клуб занимает место выбранного клуба лиги: состав генерируется под уровень (или остаётся от заменённого)
      const c = opts.custom;
      if (c) {
        const id = `my_${Date.now().toString(36)}`;
        leagues = leagues.map((L) => (L.id !== c.league ? L : Object.assign({}, L, {
          teams: L.teams.map((T) => (T.id !== c.replace ? T : {
            id, name: c.name, city: c.city, stadium: c.stadium, cap: c.cap, colors: c.colors, rep: c.rep,
            money: c.keep ? T.money : null, players: c.keep ? T.players : '', logoData: c.logoData || undefined,
          })),
        })));
        teamId = id;
        s.user = id;
      }
      g.buildWorld(leagues);
      if (c && !c.keep) {
        // новый состав — по силе клубов этой лиги: аутсайдер, середняк или лидер
        const t = g.teams[teamId];
        const lv = g.s.leagues[c.league].teams.filter((id) => id !== teamId && !g.teams[id].reserveOf).map((id) => g.teamBaseOvr(g.teams[id])).sort((a, b) => a - b);
        const base = c.level === 'top' ? lv[lv.length - 1] : c.level === 'low' ? lv[0] : lv[Math.floor(lv.length / 2)];
        for (const pid of t.players) delete g.players[pid];
        t.players = [];
        g.fillSquad(t, base, true);
        t.money = Math.round(g.squadValue(t) * 0.12);
        t.sponsor = Math.round(g.wageBill(t) * 0.97 * 10) / 10;
        g.pickFormation(t);
      }
      g.newSeason(true);
      const t = g.teams[teamId];
      g.msg('Добро пожаловать!', `Совет директоров клуба «${t.name}» утвердил вас главным тренером. Задача на сезон: ${g.expectText()}. Трансферное окно открыто до 7 сентября.`, 'board');
      return g;
    }

    // Лиги, добавленные в игру после начала карьеры, подключаются со следующего сезона
    addMissingLeagues() {
      const s = this.s;
      const add = FM.leagues.filter((L) => !s.leagues[L.id] && !L.teams.some((T) => s.teams[T.id]));
      if (!add.length) return [];
      this.buildWorld(add, false);
      return add;
    }

    buildWorld(leagues, fresh = true) {
      const s = this.s;
      const before = new Set(Object.keys(s.teams));
      for (const L of leagues) {
        s.order.push(L.id);
        s.potV2 = true;
        s.wageV2 = true;
        s.leagues[L.id] = {
          id: L.id, name: L.name, short: L.short, tier: L.tier, weekday: L.weekday, country: L.country || 'RUS',
          autumn: L.autumn, spring: L.spring, ticket: L.ticket, prize: L.prize, single: !!L.single, teams: [],
        };
        for (const T of L.teams) {
          const team = {
            id: T.id, name: T.name, city: T.city, stadium: T.stadium, cap: T.cap, colors: T.colors,
            rep: T.rep || 50, money: T.money, league: L.id, reserveOf: T.reserveOf || null, logoData: T.logoData || undefined,
            players: [], formation: '4-3-3', lineup: [], bench: [], tactics: { ment: 0, press: 1, tempo: 1 },
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
        if (before.has(id)) continue;
        const t = s.teams[id];
        t.sponsor = Math.round(this.wageBill(t) * 0.97 * 10) / 10;
        this.pickFormation(t);
      }
      if (!fresh) return;
    }

    createPlayer(d, team) {
      const s = this.s;
      const id = s.nextPid++;
      const ovr = d.ovr || FM.ovrFromValue(d.value, d.age);
      const pot = d.pot || FM.potFor(ovr, d.age);
      const base = FM.baseValue(ovr, d.age, pot);
      const vmul = d.value ? FM.clamp(d.value / base, 0.3, 4) : 1;
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
      p.wage = Math.round(FM.wageFor(p.value, tier, p.age, team ? this.countryOf(team.league) : '') * 10) / 10;
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

    // Добор состава. full — состав своего клуба с нуля (создание клуба): игроки любого возраста.
    // Иначе — только молодёжь из академии (17–19 лет, ниже уровня основы, с запасом роста) и только до минимума:
    // 2 вратаря и 18 игроков (в межсезонье — 21). Реальные составы в начале игры почти никогда не добираются.
    fillSquad(team, baseOvr, full = false) {
      const base = baseOvr || this.teamBaseOvr(team);
      const sq = () => team.players.map((id) => this.players[id]);
      const youth = (pos) => {
        const p = this.genPlayer(pos, base - 9 + FM.gauss(0, 3), FM.ri(17, 19), team);
        p.pot = Math.min(92, p.ovr + FM.ri(8, 20));
        p.contract = this.s.season + FM.ri(2, 4);
        this.revalue(p);
        return p;
      };
      if (full) {
        const count = {};
        for (const p of sq()) count[p.pos] = (count[p.pos] || 0) + 1;
        for (const pos of FM.POS) for (let i = count[pos] || 0; i < SQUAD_NEED[pos]; i++) this.genPlayer(pos, base + FM.gauss(-2, 3.5), FM.ri(18, 33), team);
        while (team.players.length < 23) this.genPlayer(FM.pick(['CB', 'CM', 'ST', 'LW', 'RW', 'DM']), base + FM.gauss(-3, 3.5), FM.ri(17, 32), team);
        return;
      }
      while (sq().filter((p) => p.pos === 'GK').length < 2) youth('GK');
      const min = this.s.matches && Object.keys(this.s.matches).length ? 21 : 18;
      const order = ['CB', 'CM', 'ST', 'LB', 'RB', 'DM', 'LW', 'RW', 'AM'];
      for (let k = 0; team.players.length < min; k++) {
        // недостающая позиция: где игроков меньше всего относительно нужного
        const need = order.slice().sort((a, b) => sq().filter((p) => p.pos === a).length / SQUAD_NEED[a] - sq().filter((p) => p.pos === b).length / SQUAD_NEED[b])[0];
        youth(need);
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
      this.setupCups();
      this.setupEuro();
      this.spreadRounds();
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

    // занятые даты клуба: id клуба → { дата: число матчей }
    busyDates() {
      const busy = {};
      for (const id in this.s.matches) {
        const m = this.s.matches[id];
        this.busyAdd(busy, m, m.date);
      }
      return busy;
    }

    busyAdd(busy, m, d) { for (const t of [m.h, m.a]) { const b = busy[t] = busy[t] || {}; b[d] = (b[d] || 0) + 1; } }
    busyDel(busy, m, d) { for (const t of [m.h, m.a]) { const b = busy[t]; if (b && b[d]) b[d]--; } }

    // нет ли у клуба другого матча ближе чем за gap дней до/после даты
    freeAround(busy, team, date, gap) {
      const b = busy[team];
      if (!b) return true;
      for (let k = -gap; k <= gap; k++) if (b[FM.addDays(date, k)]) return false;
      return true;
    }

    // Тур растягивается на два дня, как в жизни (суббота и воскресенье, воскресенье и понедельник).
    // Последние два тура — в один день. Матч не переносится ближе чем за день до/после еврокубка или Кубка.
    spreadRounds() {
      const s = this.s, busy = this.busyDates();
      for (const lid of s.order) {
        const L = s.leagues[lid];
        const shift = L.weekday === 0 ? -1 : 1;
        const free = (m, d) => this.freeAround(busy, m.h, d, 1) && this.freeAround(busy, m.a, d, 1);
        const move = (m, d) => { this.busyDel(busy, m, m.date); m.date = d; this.busyAdd(busy, m, d); };
        L.rounds.forEach((round, ri) => {
          const ms = round.map((id) => s.matches[id]);
          // матч вплотную к еврокубку или Кубку сдвигается в любом случае
          const clash = (m) => { this.busyDel(busy, m, m.date); const c = !free(m, m.date); this.busyAdd(busy, m, m.date); return c; };
          if (ri >= L.rounds.length - 2) {
            // последние туры — в один день: при совпадении переносится весь тур
            if (!ms.some(clash)) return;
            for (const k of [shift, 2 * shift]) {
              const d = FM.addDays(ms[0].date, k);
              ms.forEach((m) => { this.busyDel(busy, m, m.date); });
              const ok = ms.every((m) => free(m, d));
              ms.forEach((m) => { this.busyAdd(busy, m, m.date); });
              if (ok) { ms.forEach((m) => move(m, d)); return; }
            }
            return;
          }
          for (const m of ms) {
            const forced = clash(m);
            if (!forced && !FM.chance(0.45)) continue;
            this.busyDel(busy, m, m.date);
            const to = [shift, ...(forced ? [2 * shift, -shift] : [])].map((k) => FM.addDays(m.date, k)).find((d) => free(m, d));
            this.busyAdd(busy, m, m.date);
            if (to) move(m, to);
          }
        });
      }
    }

    // плей-офф еврокубков и Кубка жеребьюются по ходу сезона: матч чемпионата вплотную к ним сдвигается на день-два
    fixClashes() {
      const s = this.s, busy = this.busyDates();
      for (const id in s.matches) {
        const m = s.matches[id], L = s.leagues[m.comp];
        if (!L || m.played || m.date <= s.date) continue;
        this.busyDel(busy, m, m.date);
        const free = (d) => this.freeAround(busy, m.h, d, 1) && this.freeAround(busy, m.a, d, 1);
        if (!free(m.date)) {
          const sh = L.weekday === 0 ? -1 : 1;
          const to = [sh, 2 * sh, -sh, -2 * sh].map((k) => FM.addDays(m.date, k)).find((d) => d > s.date && free(d));
          if (to) m.date = to;
        }
        this.busyAdd(busy, m, m.date);
      }
    }

    // Изредка матч чемпионата переносят (погода, состояние поля, совпадение с другими турнирами) —
    // так у клубов появляются игры в запасе. Новая дата — среда, свободная у обоих клубов, до последних туров.
    postponeToday() {
      const s = this.s, month = +s.date.slice(5, 7);
      if (month >= 4 && month <= 7) return;
      let busy = null;
      // будущие туры Кубка и еврокубков ещё не в календаре — их среды не трогаем
      const inEuro = new Set(Object.values(s.euro || {}).flatMap((e) => e.teams));
      const nearCup = (c, d) => ((s.cups[c] && s.cups[c].rounds) || []).map((R) => R.date).some((c) => Math.abs(FM.parseDate(c) - FM.parseDate(d)) <= 2 * 864e5);
      for (const m of this.todayMatches()) {
        const L = s.leagues[m.comp];
        if (!L || inEuro.has(m.h) || inEuro.has(m.a) || !FM.chance(0.025)) continue;
        const lastRounds = s.matches[L.rounds[Math.max(0, L.rounds.length - 3)][0]].date;
        busy = busy || this.busyDates();
        this.busyDel(busy, m, m.date);
        const cand = [];
        for (let d = FM.addDays(s.date, 10); d < FM.addDays(lastRounds, -3) && cand.length < 4; d = FM.addDays(d, 1)) {
          if (FM.weekday(d) === 3 && !nearCup(this.countryOf(m.comp), d) && this.freeAround(busy, m.h, d, 2) && this.freeAround(busy, m.a, d, 2)) cand.push(d);
        }
        if (!cand.length) { this.busyAdd(busy, m, m.date); continue; }
        const to = FM.pick(cand);
        m.date = to;
        this.busyAdd(busy, m, to);
        const why = FM.pick(['из-за непогоды', 'из-за плохого состояния поля', 'по просьбе клуба, у которого несколько игроков вызваны в сборные', 'по решению лиги']);
        if (m.h === s.user || m.a === s.user) {
          const opp = this.teams[m.h === s.user ? m.a : m.h];
          this.msg('Матч перенесён', `Матч с «${opp.name}» перенесён ${why}. Новая дата — ${FM.fmtDate(to)}.`, 'board');
        } else if (FM.chance(0.3)) {
          this.news(`Матч «${this.teams[m.h].name}» — «${this.teams[m.a].name}» перенесён ${why} на ${FM.fmtDate(to)}.`);
        }
      }
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
      // в лигах на 24 команды (46 туров) играют и в будни — тур раз в 6 дней, чтобы плей-офф закончился до июня
      const dates = [], step = all.length > 40 ? 6 : 7;
      let d = FM.nextWeekday(`${year}-${L.autumn.from}`, L.weekday);
      for (let i = 0; i < L.autumn.rounds; i++) { dates.push(d); d = FM.addDays(d, step); }
      d = FM.nextWeekday(`${year + 1}-${L.spring.from}`, L.weekday);
      while (dates.length < all.length) { dates.push(d); d = FM.addDays(d, step); }
      return all.map((round, ri) => round.map(([h, a]) => this.addMatch({ comp: L.id, round: ri + 1, date: dates[ri], h, a })));
    }

    addMatch(m) {
      const id = this.s.nextMid++;
      this.s.matches[id] = Object.assign({ id, played: false, hg: null, ag: null }, m);
      return id;
    }

    leagueOf(teamId) { return this.s.leagues[this.teams[teamId].league]; }

    table(lid) {
      if (this._tables[lid]) return this._tables[lid];
      const L = this.s.leagues[lid];
      const rows = {};
      for (const id of L.teams) rows[id] = { id, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, form: [] };
      for (const round of L.rounds) {
        for (const mid of round) {
          const m = this.s.matches[mid];
          if (!m.played) continue;
          const h = rows[m.h], a = rows[m.a];
          if (!h || !a) continue;
          h.p++; a.p++;
          h.gf += m.hg; h.ga += m.ag; a.gf += m.ag; a.ga += m.hg;
          if (m.hg > m.ag) { h.w++; a.l++; h.pts += 3; h.form.push('W'); a.form.push('L'); }
          else if (m.hg < m.ag) { a.w++; h.l++; a.pts += 3; h.form.push('L'); a.form.push('W'); }
          else { h.d++; a.d++; h.pts++; a.pts++; h.form.push('D'); a.form.push('D'); }
        }
      }
      const list = Object.values(rows).sort((x, y) => y.pts - x.pts || (y.gf - y.ga) - (x.gf - x.ga) || y.gf - x.gf || y.w - x.w || this.teams[x.id].name.localeCompare(this.teams[y.id].name));
      list.forEach((r, i) => { r.pos = i + 1; r.form = r.form.slice(-5); });
      this._tables[lid] = list;
      return list;
    }

    positionOf(teamId) {
      const t = this.table(this.teams[teamId].league);
      return t.find((r) => r.id === teamId).pos;
    }

    zones(lid) {
      // зоны таблицы: повышение, стыки, вылет
      const L = this.s.leagues[lid];
      const n = L.teams.length;
      const c = this.countryOf(lid);
      const hasLower = !!this.leagueAt(c, L.tier + 1);
      const hasUpper = !!this.leagueAt(c, L.tier - 1);
      const z = {};
      if (L.tier === 1) { z[1] = 'champ'; Object.assign(z, this.euroPlaces(c).places); }
      if (hasUpper) {
        const r = FM.promoRule(c, L.tier - 1);
        for (let i = 1; i <= r.up; i++) z[i] = 'up';
        if (r.po && r.po.kind === 'semi') for (let i = r.po.from; i <= r.po.to; i++) z[i] = 'po';
        if (r.po && r.po.kind === 'pair') for (const [, lp] of r.po.pairs) z[lp] = 'po';
      }
      if (hasLower) {
        const r = FM.promoRule(c, L.tier);
        for (let i = 0; i < r.down; i++) z[n - i] = 'down';
        if (r.po && r.po.kind === 'pair') for (const [up] of r.po.pairs) z[n + up + 1] = 'po_down';
      }
      return z;
    }

    // сила состава для оценки клуба: средний рейтинг 14 лучших игроков
    squadStrength(t) {
      const o = this.squad(t).map((p) => p.ovr).sort((a, b) => b - a).slice(0, 14);
      return o.length ? o.reduce((a, b) => a + b, 0) / o.length : 50;
    }

    // «Ожидаемая» репутация по силе состава внутри лиги: средний уровень лиги сохраняется, клубы
    // расставляются по реальной силе (1 пункт среднего рейтинга ≈ 1,6 пункта репутации)
    strengthRep(lid) {
      const ids = this.s.leagues[lid].teams;
      const str = {}, n = ids.length;
      let mr = 0, ms = 0;
      for (const id of ids) { str[id] = this.squadStrength(this.teams[id]); mr += this.teams[id].rep; ms += str[id]; }
      mr /= n; ms /= n;
      const out = {};
      for (const id of ids) out[id] = FM.clamp(mr + (str[id] - ms) * 1.6, 35, 99);
      return out;
    }

    // задача руководства: место клуба в лиге по статусу и реальной силе состава поровну
    setExpectation() {
      const t = this.userTeam();
      const L = this.s.leagues[t.league];
      const sr = this.strengthRep(t.league);
      const score = (id) => this.teams[id].rep * 0.5 + sr[id] * 0.5;
      const order = L.teams.slice().sort((a, b) => score(b) - score(a));
      this.s.board.expect = order.indexOf(t.id) + 1;
    }

    // после закрытия летнего окна руководство пересматривает задачу, если состав заметно изменился
    reviewExpectation() {
      const s = this.s, old = s.board.expect;
      this.setExpectation();
      if (Math.abs(s.board.expect - old) >= 2) {
        this.msg('Задача на сезон скорректирована', `После трансферного окна руководство оценило состав и ${s.board.expect < old ? 'повысило' : 'снизило'} планку: ${this.expectText()}.`, 'board');
      } else s.board.expect = old;
    }

    expectText() {
      const e = this.s.board.expect;
      const t = this.userTeam();
      const L = this.s.leagues[t.league];
      const n = L.teams.length;
      if (L.tier > 1) {
        if (e <= 2) return 'выход в лигу выше';
        if (e <= 5) return 'борьба за повышение';
        if (e <= n / 2) return 'место в верхней половине таблицы';
        if (e <= n - 4) return 'спокойная середина таблицы';
        return 'сохранить место в лиге';
      }
      if (e === 1) return 'чемпионство';
      if (e <= 3) return 'место в тройке призёров';
      if (e <= 6) return 'место в верхней шестёрке';
      if (e <= 10) return 'место в середине таблицы';
      return 'избежать вылета';
    }

    // ================== национальные кубки ==================
    // Олимпийская система: младший по уровню клуб играет дома, сильнейшие стартуют позже (пропускают первый раунд).
    setupCups() {
      const s = this.s;
      s.cups = {};
      const countries = [...new Set(s.order.map((lid) => this.countryOf(lid)))];
      for (const c of countries) this.setupCup(c);
    }

    setupCup(c) {
      const s = this.s;
      const y = s.season;
      const teams = Object.values(this.teams).filter((t) => !t.reserveOf && this.countryOf(t.league) === c)
        .sort((a, b) => this.tierOf(a) - this.tierOf(b) || b.rep - a.rep).map((t) => t.id);
      if (teams.length < 4) return;
      let size = 2;
      while (size < teams.length) size *= 2;
      const byes = Math.max(0, size - teams.length);
      const rounds = CUP_ROUNDS.slice(CUP_ROUNDS.length - Math.log2(size));
      s.cups[c] = {
        country: c, name: FM.cupName(c),
        rounds: rounds.map((r) => ({ name: r.name, date: FM.addDays(FM.nextWeekday(`${y + r.y}-${r.date}`, r.day), r.plus || 0), matches: [] })),
        cur: 0, byes: teams.slice(0, byes), alive: teams.slice(), winner: null,
      };
      this.drawCup(c, teams.slice(byes), 0);
    }

    drawCup(c, teamIds, ri) {
      const s = this.s, cup = s.cups[c];
      const R = cup.rounds[ri];
      const list = FM.shuffle(teamIds.slice());
      const final = ri === cup.rounds.length - 1;
      const busy = this.busyDates();
      for (let i = 0; i + 1 < list.length; i += 2) {
        let h = list[i], a = list[i + 1];
        const th = this.tierOf(this.teams[h]), ta = this.tierOf(this.teams[a]);
        if (ta > th || (ta === th && Math.random() < 0.5)) [h, a] = [a, h];
        // если у клуба рядом другой матч (еврокубок, перенесённая игра) — кубковый сдвигается на день-два
        const date = [0, -1, 1].map((k) => FM.addDays(R.date, k)).find((d) => this.freeAround(busy, h, d, 1) && this.freeAround(busy, a, d, 1)) || R.date;
        R.matches.push(this.addMatch({ comp: FM.cupId(c), round: ri + 1, date, h, a, ko: true, neutral: final }));
      }
      // матчи чемпионата вплотную к кубковым сдвигаются
      this.fixClashes();
      if (teamIds.includes(s.user)) {
        const mid = R.matches.find((id) => [s.matches[id].h, s.matches[id].a].includes(s.user));
        if (mid) {
          const m = s.matches[mid];
          const opp = this.teams[m.h === s.user ? m.a : m.h];
          this.msg(`${cup.name}: ${R.name}`, `Жеребьёвка: ваш соперник — «${opp.name}» (${final ? 'нейтральное поле' : m.h === s.user ? 'дома' : 'в гостях'}), ${FM.fmtDate(m.date)}.`, 'cup');
        }
      }
    }

    cupOf(comp) { return this.s.cups[FM.cupCountry(comp)]; }

    // кубок, в котором играет клуб пользователя
    userCup() { return this.s.cups[this.countryOf(this.userTeam().league)] || null; }

    progressCup() {
      const s = this.s;
      for (const c in s.cups) {
        const cup = s.cups[c];
        if (cup.winner) continue;
        const R = cup.rounds[cup.cur];
        if (!R.matches.length || !R.matches.every((id) => s.matches[id].played)) continue;
        const winners = R.matches.map((id) => s.matches[id].winner);
        if (cup.cur === cup.rounds.length - 1) {
          cup.winner = winners[0];
          const w = this.teams[cup.winner];
          this.news(`«${w.name}» — обладатель трофея «${cup.name}»!`);
          if (cup.winner === s.user) {
            this.msg(`${cup.name} наш!`, `Команда выиграла ${cup.name}! Руководство в восторге.`, 'board');
            s.board.conf = Math.min(100, s.board.conf + 20);
            this.userTeam().money += 1500;
          }
          continue;
        }
        const losers = R.matches.map((id) => { const m = s.matches[id]; return m.winner === m.h ? m.a : m.h; });
        if (losers.includes(s.user)) this.msg('Вылет из Кубка', `Команда выбыла из турнира «${cup.name}» (${R.name}).`, 'cup');
        let next = winners;
        if (cup.cur === 0) next = winners.concat(cup.byes);
        cup.alive = next;
        cup.cur++;
        this.drawCup(c, next, cup.cur);
      }
    }

    // ================== еврокубки ==================
    // 24 клуба в каждом турнире. Общий этап — 8 туров: корзины по 6 клубов, с каждой корзиной по матчу дома
    // и в гостях (со своей — тоже). 1–4 места сразу в 1/4 финала, 5–12 играют стыки, 13–24 выбывают.
    // Места страны в турнире: места стран, которых нет в базе (или российские при выключенной настройке),
    // по очереди отдаются сильнейшим лигам
    euroQuota(E) {
      const s = this.s;
      const have = new Set(s.order.filter((lid) => s.leagues[lid].tier === 1).map((lid) => this.countryOf(lid)));
      const quota = Object.assign({}, E.quota);
      let extra = 0;
      for (const c in quota) {
        if (!have.has(c) || (c === 'RUS' && s.settings.ruEuro === false)) { extra += quota[c]; delete quota[c]; }
      }
      const order = Object.keys(E.quota).filter((c) => quota[c]);
      for (let i = 0; extra > 0 && order.length; i++, extra--) quota[order[i % order.length]]++;
      return quota;
    }

    // Какие места высшей лиги страны ведут в еврокубки: { places: { место: 'ucl' | 'uel' | 'uecl' }, cupTo }.
    // Первая путёвка страны в ЛЕ (или в ЛК, если мест в ЛЕ нет) — у обладателя кубка, поэтому по таблице её нет.
    euroPlaces(c) {
      const places = {};
      let pos = 1, cupTo = null;
      for (const E of FM.EURO) {
        let n = this.euroQuota(E)[c] || 0;
        if (E.id !== 'ucl' && !cupTo && n > 0) { n--; cupTo = E.id; }
        for (let k = 0; k < n; k++) places[pos++] = E.id;
      }
      return { places, cupTo };
    }

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
      // Обладатель национального кубка получает первую путёвку страны в Лигу Европы (если у страны нет мест в ЛЕ —
      // в Лигу конференций). Если он уже попал в ЛЧ по таблице, место переходит следующей команде чемпионата.
      // Россия: чемпион — ЛЧ, обладатель Кубка — ЛЕ, следующие две команды — ЛК.
      const taken = new Set();
      const lcw = s.lastCupWinners || {};
      const cupWOf = (c) => (lcw[c] && this.teams[lcw[c]] && !this.teams[lcw[c]].reserveOf ? lcw[c] : null);
      const cupDone = {};
      const nextOf = (c, E) => ranked[c].find((id) => !taken.has(id) && !(E.id !== 'ucl' && !cupDone[c] && id === cupWOf(c)));
      for (const E of FM.EURO) {
        const quota = this.euroQuota(E);
        const teams = [];
        for (const c in quota) {
          if (!ranked[c]) continue;
          const cupW = cupWOf(c);
          for (let i = 0; i < quota[c]; i++) {
            let id = E.id !== 'ucl' && i === 0 && !cupDone[c] && cupW && !taken.has(cupW) ? cupW : nextOf(c, E);
            if (!id && E.id !== 'ucl' && !cupDone[c] && cupW && !taken.has(cupW)) id = cupW;
            if (id) { teams.push(id); taken.add(id); }
          }
          if (E.id !== 'ucl' && quota[c] > 0) cupDone[c] = true;
        }
        if (teams.length !== 24) continue;
        const e = { id: E.id, teams, md: [], ko: [], final: null, winner: null, phase: 'league' };
        s.euro[E.id] = e;
        this.euroLeaguePhase(E, e);
        for (const id of teams) {
          this.teams[id].money += E.fee;
          if (id === s.user) {
            this.finLog(this.teams[id], `${E.name}: участие`, E.fee);
            this.msg(E.name, `Команда сыграет в общем этапе турнира «${E.name}». Первый матч — ${FM.fmtDate(this.s.matches[e.md[0].find((mid) => [this.s.matches[mid].h, this.s.matches[mid].a].includes(id))].date)}.`, 'cup');
          }
        }
      }
    }

    euroDate(E, md) {
      const y = this.s.season;
      const [mm] = md.split('-');
      const year = +mm < 7 ? y + 1 : y;
      return FM.nextWeekday(`${year}-${md}`, E.day);
    }

    euroLeaguePhase(E, e) {
      const s = this.s;
      const byRep = e.teams.slice().sort((a, b) => this.teams[b].rep - this.teams[a].rep);
      const pots = [0, 1, 2, 3].map((i) => byRep.slice(i * 6, i * 6 + 6));
      const met = new Set();
      const key = (a, b) => (a < b ? a + '|' + b : b + '|' + a);
      const sameC = (a, b) => this.countryOf(this.teams[a].league) === this.countryOf(this.teams[b].league);
      const cost = (pairs) => pairs.reduce((c, [a, b]) => c + (met.has(key(a, b)) ? 100 : 0) + (sameC(a, b) ? 1 : 0), 0);
      const best = (gen) => {
        let bestPairs = null, bc = Infinity;
        for (let t = 0; t < 300 && bc > 0; t++) {
          const pairs = gen();
          const c = cost(pairs);
          if (c < bc) { bc = c; bestPairs = pairs; }
        }
        bestPairs.forEach(([a, b]) => met.add(key(a, b)));
        return bestPairs;
      };
      const mds = [];
      for (const pattern of [[[0, 1], [2, 3]], [[0, 2], [1, 3]], [[0, 3], [1, 2]]]) {
        for (const leg of [0, 1]) {
          const md = [];
          for (const [i, j] of pattern) {
            const pairs = best(() => { const B = FM.shuffle(pots[j].slice()); return pots[i].map((a, k) => [a, B[k]]); });
            for (const [a, b] of pairs) md.push(leg ? [b, a] : [a, b]);
          }
          mds.push(md);
        }
      }
      // матчи внутри корзины: цикл из шести клубов делится на два тура, у каждого по матчу дома и в гостях
      const inner = [[], []];
      for (const P of pots) {
        const cyc = [];
        best(() => { const c = FM.shuffle(P.slice()); cyc.length = 0; cyc.push(...c); return c.map((a, k) => [a, c[(k + 1) % 6]]); });
        for (let k = 0; k < 6; k++) inner[k % 2].push([cyc[k], cyc[(k + 1) % 6]]);
      }
      mds.push(...inner);
      FM.shuffle(mds);
      e.md = mds.map((md, i) => md.map(([h, a]) => this.addMatch({ comp: E.id, md: i + 1, label: `общий этап, ${i + 1}-й тур`, date: this.euroDate(E, EURO_MD[i]), h, a })));
    }

    euroTable(id) {
      const e = this.s.euro[id];
      return this.tableFrom(e.teams, e.md.flat());
    }

    tableFrom(teamIds, mids) {
      const rows = {};
      for (const id of teamIds) rows[id] = { id, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, form: [] };
      for (const mid of mids) {
        const m = this.s.matches[mid];
        if (!m.played) continue;
        const h = rows[m.h], a = rows[m.a];
        if (!h || !a) continue;
        h.p++; a.p++; h.gf += m.hg; h.ga += m.ag; a.gf += m.ag; a.ga += m.hg;
        if (m.hg > m.ag) { h.w++; a.l++; h.pts += 3; h.form.push('W'); a.form.push('L'); }
        else if (m.hg < m.ag) { a.w++; h.l++; a.pts += 3; h.form.push('L'); a.form.push('W'); }
        else { h.d++; a.d++; h.pts++; a.pts++; h.form.push('D'); a.form.push('D'); }
      }
      const list = Object.values(rows).sort((x, y) => y.pts - x.pts || (y.gf - y.ga) - (x.gf - x.ga) || y.gf - x.gf || y.w - x.w || this.teams[y.id].rep - this.teams[x.id].rep);
      list.forEach((r, i) => { r.pos = i + 1; r.form = r.form.slice(-5); });
      return list;
    }

    euroTies(E, name, pairs, d1, d2) {
      const s = this.s;
      return pairs.map(([hi, lo]) => {
        const l1 = this.addMatch({ comp: E.id, label: `${name}, 1-й матч`, date: this.euroDate(E, d1), h: lo, a: hi });
        const l2 = this.addMatch({ comp: E.id, label: `${name}, ответный матч`, date: this.euroDate(E, d2), h: hi, a: lo, ko: true, firstLeg: l1 });
        if ([hi, lo].includes(s.user)) {
          const opp = this.teams[hi === s.user ? lo : hi];
          this.msg(`${E.name}: ${name}`, `Соперник — «${opp.name}». Матчи ${FM.fmtDate(s.matches[l1].date)} и ${FM.fmtDate(s.matches[l2].date)}.`, 'cup');
        }
        return { hi, lo, legs: [l1, l2], winner: null };
      });
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
        if (e.phase === 'league') {
          if (!e.md.flat().every((mid) => s.matches[mid].played)) continue;
          const tab = this.euroTable(E.id);
          e.direct = tab.slice(0, 4).map((r) => r.id);
          const po = tab.slice(4, 12).map((r) => r.id);
          e.ko.push({ name: 'Стыки', ties: this.euroTies(E, 'стыки', [[po[0], po[7]], [po[1], po[6]], [po[2], po[5]], [po[3], po[4]]], '02-16', '02-23') });
          e.phase = 'ko';
          this.euroReward(E, e.direct, E.ko[0], 'выход в 1/4 финала');
          const my = tab.find((r) => r.id === s.user);
          if (my) this.msg(E.name, my.pos <= 4 ? `Общий этап завершён: ${my.pos}-е место, команда сразу вышла в 1/4 финала!` : my.pos <= 12 ? `Общий этап завершён: ${my.pos}-е место, впереди стыковые матчи.` : `Общий этап завершён: ${my.pos}-е место. Команда выбыла из турнира.`, 'cup');
          this.news(`${E.name}: завершён общий этап, первое место — «${this.teams[tab[0].id].name}».`);
          continue;
        }
        if (e.final) {
          const m = s.matches[e.final];
          if (!m.played) continue;
          e.winner = m.winner;
          this.euroReward(E, [e.winner], E.ko[3], 'победа в турнире');
          this.news(`«${this.teams[e.winner].name}» — победитель турнира «${E.name}»!`);
          if (e.winner === s.user) {
            this.msg(`${E.name} наша!`, `Команда выиграла «${E.name}»! Это историческая победа.`, 'board');
            s.board.conf = Math.min(100, s.board.conf + 30);
            this.userTeam().rep = Math.min(99, this.userTeam().rep + 3);
          }
          continue;
        }
        const R = e.ko[e.ko.length - 1];
        for (const t of R.ties) if (!t.winner && s.matches[t.legs[1]].played) t.winner = s.matches[t.legs[1]].winner;
        if (!R.ties.every((t) => t.winner)) continue;
        const winners = R.ties.map((t) => t.winner);
        for (const t of R.ties) {
          const loser = t.winner === t.hi ? t.lo : t.hi;
          if (loser === s.user) this.msg(E.name, `Команда выбыла из турнира «${E.name}» (${R.name}).`, 'cup');
        }
        if (R.name === 'Стыки') {
          // посев: 1-е место против победителя пары 8–9, 2-е — 7–10, 3-е — 6–11, 4-е — 5–12
          this.euroReward(E, winners, E.ko[0], 'выход в 1/4 финала');
          const pairs = e.direct.map((id, k) => [id, winners[3 - k]]);
          e.ko.push({ name: '1/4 финала', ties: this.euroTies(E, '1/4 финала', pairs, '04-06', '04-13') });
        } else if (R.name === '1/4 финала') {
          this.euroReward(E, winners, E.ko[1], 'выход в 1/2 финала');
          const w = FM.shuffle(winners.slice());
          e.ko.push({ name: '1/2 финала', ties: this.euroTies(E, '1/2 финала', [[w[0], w[1]], [w[2], w[3]]], '04-27', '05-04') });
        } else {
          this.euroReward(E, winners, E.ko[2], 'выход в финал');
          const [a, b] = FM.shuffle(winners.slice());
          e.final = this.addMatch({ comp: E.id, label: 'финал', date: `${s.season + 1}-${E.final}`, h: a, a: b, ko: true, neutral: true });
          if ([a, b].includes(s.user)) this.msg(`Финал: ${E.name}`, `Команда сыграет в финале против «${this.teams[a === s.user ? b : a].name}», ${FM.fmtDate(s.matches[e.final].date)}.`, 'board');
          this.news(`Финал турнира «${E.name}»: «${this.teams[a].name}» — «${this.teams[b].name}».`);
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

    // все границы между лигами, где по правилам есть стыки или плей-офф
    playoffSlots() {
      const s = this.s, out = [];
      for (const lid of s.order) {
        const L = s.leagues[lid], c = this.countryOf(lid);
        const lower = this.leagueAt(c, L.tier + 1);
        const r = FM.promoRule(c, L.tier);
        if (lower && r.po) out.push({ key: c + L.tier, c, upper: lid, lower, r });
      }
      return out;
    }

    // Стыки и плей-офф создаются, когда обе лиги доиграны. Для «semi» финал добавляется после полуфиналов.
    setupPlayoff() {
      const s = this.s;
      if (!s.playoff) s.playoff = { ties: [], done: {} };
      // старые сохранения: стыки РПЛ без групп
      if (!s.playoff.done) { s.playoff.done = s.playoff.ties.length ? { RUS1: true } : {}; s.playoff.ties.forEach((t) => { t.grp = t.grp || 'RUS1'; t.stage = t.stage || 'pair'; }); }
      for (const sl of this.playoffSlots()) {
        if (s.playoff.done[sl.key] || !this.leagueFinished(sl.upper) || !this.leagueFinished(sl.lower)) continue;
        s.playoff.done[sl.key] = true;
        const tU = this.table(sl.upper), tL = this.table(sl.lower).filter((r) => this.eligibleUp(r.id));
        const n = tU.length;
        const last = (lid) => s.matches[s.leagues[lid].rounds.at(-1)[0]].date;
        const d1 = FM.addDays(last(sl.lower) > last(sl.upper) ? last(sl.lower) : last(sl.upper), 3);
        const d2 = FM.addDays(d1, 3);
        const pairs = sl.r.po.kind === 'pair'
          ? sl.r.po.pairs.map(([up, lp]) => ({ stage: 'pair', hi: tU[n + up].id, lo: tL[lp - 1].id }))
          : [0, 1].map((k) => ({ stage: 'semi', hi: tL[sl.r.po.from - 1 + k].id, lo: tL[sl.r.po.to - 1 - k].id }));
        for (const p of pairs) {
          const l1 = this.addMatch({ comp: 'po', grp: sl.key, label: p.stage === 'semi' ? 'полуфинал плей-офф, 1-й матч' : 'стыки, 1-й матч', date: d1, h: p.lo, a: p.hi, leg: 1 });
          const l2 = this.addMatch({ comp: 'po', grp: sl.key, label: p.stage === 'semi' ? 'полуфинал плей-офф, ответный матч' : 'стыки, ответный матч', date: d2, h: p.hi, a: p.lo, leg: 2, ko: true, firstLeg: l1 });
          s.playoff.ties.push({ grp: sl.key, stage: p.stage, up: p.hi, low: p.lo, legs: [l1, l2], winner: null });
          if ([p.hi, p.lo].includes(s.user)) {
            const opp = this.teams[p.hi === s.user ? p.lo : p.hi];
            this.msg(p.stage === 'semi' ? 'Плей-офф за повышение' : 'Стыковые матчи', `Команде предстоит ${p.stage === 'semi' ? 'полуфинал плей-офф' : 'стыковые матчи'} с «${opp.name}»: ${FM.fmtDate(d1)} и ${FM.fmtDate(d2)}.`, 'board');
          }
        }
        this.news(sl.r.po.kind === 'semi' ? `Стартует плей-офф за выход в «${s.leagues[sl.upper].name}».` : `Определились участники стыковых матчей за место в «${s.leagues[sl.upper].name}».`);
      }
    }

    // после полуфиналов — финал плей-офф на нейтральном поле
    playoffFinal(grp) {
      const s = this.s;
      const semis = s.playoff.ties.filter((t) => t.grp === grp && t.stage === 'semi');
      if (semis.length !== 2 || semis.some((t) => !t.winner) || s.playoff.ties.some((t) => t.grp === grp && t.stage === 'final')) return;
      const date = FM.addDays(semis.map((t) => s.matches[t.legs[1]].date).sort().at(-1), 5);
      const [a, b] = semis.map((t) => t.winner);
      const mid = this.addMatch({ comp: 'po', grp, label: 'финал плей-офф', date, h: a, a: b, ko: true, neutral: true });
      s.playoff.ties.push({ grp, stage: 'final', up: a, low: b, legs: [mid], winner: null });
      if ([a, b].includes(s.user)) this.msg('Финал плей-офф', `Финал плей-офф за повышение с «${this.teams[a === s.user ? b : a].name}» — ${FM.fmtDate(date)}.`, 'board');
    }

    playoffPending() {
      const s = this.s;
      for (const sl of this.playoffSlots()) {
        if (!s.playoff || !s.playoff.done || !s.playoff.done[sl.key]) return true;
        const ties = s.playoff.ties.filter((t) => t.grp === sl.key);
        if (ties.some((t) => !t.winner)) return true;
        if (sl.r.po.kind === 'semi' && !ties.some((t) => t.stage === 'final')) return true;
      }
      return false;
    }

    seasonEndDate() {
      const s = this.s;
      let last = `${s.season + 1}-06-01`;
      for (const id in s.matches) if (s.matches[id].date > last) last = s.matches[id].date;
      return FM.addDays(last, 3);
    }

    allDone() {
      const s = this.s;
      for (const id in s.matches) if (!s.matches[id].played) return false;
      return !this.playoffPending();
    }

    // Основа клуба: 8 лучших полевых игроков и 2 лучших вратаря
    coreOf(t) {
      const sq = this.squad(t).filter((p) => !p.loan);
      const by = (a, b) => b.ovr - a.ovr;
      return new Set(sq.filter((p) => p.pos !== 'GK').sort(by).slice(0, 8).concat(sq.filter((p) => p.pos === 'GK').sort(by).slice(0, 2)).map((p) => p.id));
    }

    // Клубы ИИ продлевают истекающие контракты: основу младше 33 лет — всегда,
    // ветеранов от 35 — в половине случаев, остальных — с вероятностью 75%.
    renewChance(p, core) {
      if (p.age >= 35) return 0.5;
      if (core && core.has(p.id) && p.age < 33) return 1;
      return 0.75;
    }

    // Повышения и вылеты по итоговым таблицам и стыкам: [teamId, новая лига]
    seasonMoves() {
      const s = this.s, moves = [];
      for (const lid of s.order) {
        const L = s.leagues[lid], c = this.countryOf(lid);
        const lower = this.leagueAt(c, L.tier + 1);
        if (!lower) continue;
        const r = FM.promoRule(c, L.tier);
        const tU = this.table(lid), tL = this.table(lower).filter((x) => this.eligibleUp(x.id));
        for (let i = 0; i < r.down; i++) moves.push([tU[tU.length - 1 - i].id, lower]);
        for (let i = 0; i < r.up && i < tL.length; i++) moves.push([tL[i].id, lid]);
      }
      for (const tie of (s.playoff && s.playoff.ties) || []) {
        if (!tie.winner) continue;
        const grp = tie.grp || 'RUS1';
        const c = grp.replace(/\d+$/, ''), tier = +grp.match(/\d+$/)[0];
        const upper = this.leagueAt(c, tier), lower = this.leagueAt(c, tier + 1);
        if (!upper || !lower) continue;
        if ((tie.stage || 'pair') === 'pair' && tie.winner === tie.low) moves.push([tie.low, upper], [tie.up, lower]);
        if (tie.stage === 'final') moves.push([tie.winner, upper]);
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
        return { lid, top: tab.slice(0, 3), scorer: this.leaders(lid, 'g', 1)[0] || null, assist: this.leaders(lid, 'a', 1)[0] || null, best: rated[0] || null };
      });
      const fin = (m) => (m ? { h: m.h, a: m.a, hg: m.hg, ag: m.ag, pens: m.pens } : null);
      const euro = FM.EURO.filter((E) => s.euro && s.euro[E.id] && s.euro[E.id].winner).map((E) => ({ id: E.id, name: E.name, winner: s.euro[E.id].winner, final: fin(s.euro[E.id].final && s.matches[s.euro[E.id].final]) }));
      const cups = Object.values(s.cups).filter((c) => c.winner).map((c) => {
        const lastR = c.rounds[c.rounds.length - 1];
        return { c: c.country, name: c.name, winner: c.winner, final: lastR.matches.length ? fin(s.matches[lastR.matches[0]]) : null };
      });
      const moves = this.seasonMoves().filter(([tid, lid]) => this.teams[tid].league !== lid)
        .map(([tid, lid]) => ({ id: tid, to: lid, from: this.teams[tid].league, up: s.leagues[lid].tier < s.leagues[this.teams[tid].league].tier }));
      const row = this.table(u.league).find((r) => r.id === u.id);
      const all = (p) => { const x = p.pst || {}; const apps = p.st.apps + p.cst.apps + (x.apps || 0); return { apps, g: p.st.g + p.cst.g + (x.g || 0), a: p.st.a + p.cst.a + (x.a || 0), r: apps ? (p.st.rsum + p.cst.rsum + (x.rsum || 0)) / apps : 0 }; };
      const top = (f) => this.squad(u).map((p) => [p, f(all(p))]).filter((x) => x[1] > 0).sort((a, b) => b[1] - a[1])[0] || null;
      return {
        year: s.season, leagues, euro, cups, moves,
        user: { team: u.id, league: u.league, pos: row.pos, row, expect: s.board.expect, coach: this.coachSeason(),
          scorer: top((x) => x.g), assist: top((x) => x.a), best: top((x) => (x.apps >= 8 ? x.r : 0)) },
      };
    }

    // ================== «Золотой мяч» ==================
    // Итоги сезона для наград: оценки, голы и передачи с поправкой на силу чемпионата, трофеи клуба
    // (чемпионство, еврокубки, кубок страны) и класс игрока. Вручение — осенью следующего сезона.
    computeAwards() {
      const s = this.s, y = s.season;
      const champs = new Set(), cupW = new Set();
      for (const lid of s.order) if (s.leagues[lid].tier === 1 && this.table(lid)[0]) champs.add(this.table(lid)[0].id);
      for (const c in s.cups) if (s.cups[c].winner) cupW.add(s.cups[c].winner);
      const euroBonus = {};
      const EB = { ucl: [26, 10, 5], uel: [10, 4, 2], uecl: [5, 2, 1] };
      for (const E of FM.EURO) {
        const e = s.euro && s.euro[E.id];
        if (!e) continue;
        const add = (id, v) => { euroBonus[id] = (euroBonus[id] || 0) + v; };
        if (e.winner) add(e.winner, EB[E.id][0]);
        if (e.final && s.matches[e.final] && s.matches[e.final].played) { const m = s.matches[e.final]; add(m.winner === m.h ? m.a : m.h, EB[E.id][1]); }
        const semi = e.ko.find((R) => R.name === '1/2 финала');
        if (semi) for (const t of semi.ties) if (t.winner) add(t.hi === t.winner ? t.lo : t.hi, EB[E.id][2]);
      }
      const rows = [];
      for (const id in this.players) {
        const p = this.players[id];
        if (!p.club || !this.teams[p.club]) continue;
        const x = p.pst || {};
        const apps = p.st.apps + p.cst.apps + (x.apps || 0);
        if (apps < 12) continue;
        const t = this.teams[p.club];
        const w = FM.leagueW(this.countryOf(t.league), this.tierOf(t));
        const avg = (p.st.rsum + p.cst.rsum + (x.rsum || 0)) / apps;
        const g = p.st.g + p.cst.g + (x.g || 0), a = p.st.a + p.cst.a + (x.a || 0), cs = p.st.cs + p.cst.cs + (x.cs || 0);
        const gk = p.pos === 'GK';
        let sc = (avg - 6.4) * 30 + Math.min(apps, 50) * 0.25 + (gk ? cs * 1.0 : g * 0.7 + a * 0.6);
        sc = sc * w + (p.ovr - 70) * 2.2;
        if (champs.has(t.id)) sc += 12 * w;
        if (cupW.has(t.id)) sc += 3 * w;
        sc += euroBonus[t.id] || 0;
        rows.push({ id, name: p.name, nat: p.nat, pos: p.pos, age: p.age, club: t.id, clubName: t.name, apps, g, a, cs, r: +avg.toFixed(2), sc: +sc.toFixed(1), gk });
      }
      rows.sort((x, z) => z.sc - x.sc);
      // вратари в общем зачёте ценятся чуть ниже (как в реальности), для Трофея Яшина — свой рейтинг
      const ballon = rows.map((x) => Object.assign({}, x, { sc: x.gk ? x.sc - 8 : x.sc })).sort((x, z) => z.sc - x.sc).slice(0, 30);
      const kopa = rows.filter((x) => x.age <= 21 && !x.gk).slice(0, 5);
      const yashin = rows.filter((x) => x.gk).slice(0, 5);
      return { year: y, ballon, kopa, yashin };
    }

    // день церемонии: результаты переходят в историю наград
    awardsDue() {
      const s = this.s, a = s.awardsPending;
      if (!a || s.date < a.date) return false;
      delete s.awardsPending;
      s.awards = (s.awards || []).concat(a);
      const w = a.ballon[0];
      if (w) this.news(`«Золотой мяч» ${a.year}/${String(a.year + 1).slice(2)} — ${w.name} («${w.clubName}»)!`);
      const mine = a.ballon.filter((x) => x.club === s.user);
      this.msg('Церемония «Золотого мяча»', `В Париже вручили «Золотой мяч» за сезон ${a.year}/${String(a.year + 1).slice(2)}.${mine.length ? ` В списке номинантов игроки вашего клуба: ${mine.map((x) => `${x.name} (${a.ballon.indexOf(x) + 1}-е место)`).join(', ')}.` : ''}`, 'awards', { year: a.year });
      return true;
    }

    endSeason() {
      const s = this.s;
      const y = s.season;
      this.hallSeason();
      // номинанты на награды — по статистике завершённого сезона, вручение в конце октября
      s.awardsPending = Object.assign(this.computeAwards(), { date: `${y + 1}-10-26` });
      s.lastCupWinners = {};
      for (const c in s.cups) if (s.cups[c].winner) s.lastCupWinners[c] = s.cups[c].winner;
      const uc = this.userCup();
      const summary = { year: y, tables: {}, cup: uc && uc.winner, userPos: null, userLeague: null, moves: [], euro: {} };
      for (const E of FM.EURO) if (s.euro && s.euro[E.id] && s.euro[E.id].winner) summary.euro[E.id] = s.euro[E.id].winner;
      s.lastTables = {};
      for (const lid of s.order) s.lastTables[lid] = this.table(lid).map((r) => r.id);
      const moves = this.seasonMoves(); // [teamId, newLeague]

      // итоговые таблицы, призовые, репутация
      for (const lid of s.order) {
        const L = s.leagues[lid];
        const tab = this.table(lid);
        summary.tables[lid] = tab.slice(0, 3).map((r) => r.id);
        tab.forEach((r) => {
          const t = this.teams[r.id];
          t.money += L.prize[r.pos - 1] || 0;
          if (r.id === s.user) { summary.userPos = r.pos; summary.userLeague = lid; }
        });
        const champ = this.teams[tab[0].id];
        champ.rep = Math.min(99, champ.rep + 2);
        this.news(`«${champ.name}» — победитель турнира «${L.name}» сезона ${y}/${String(y + 1).slice(2)}!`);
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
      this.coachSeasonRep(pos, exp, moved, (Object.values(s.cups).some((c) => c.winner === u.id) ? 1 : 0) + Object.keys(summary.euro).filter((id) => summary.euro[id] === u.id).length * 1.5);
      if (pos < exp - 1) u.rep = Math.min(99, u.rep + 1);
      if (pos > exp + 3) u.rep = Math.max(35, u.rep - 1);
      const ce = this.coachSeason(y);
      // место на общем этапе еврокубка (если дальше клуб не прошёл, стадия покажет вылет с этим местом)
      for (const E of FM.EURO) {
        const c = ce.comps[E.id];
        if (c && c.md && s.euro && s.euro[E.id]) { const row = this.euroTable(E.id).find((r) => r.id === u.id); if (row) c.pos = row.pos; }
      }
      ce.final = { league: summary.userLeague, pos, cup: Object.values(s.cups).some((c) => c.winner === u.id), euro: Object.keys(summary.euro).filter((id) => summary.euro[id] === u.id) };
      s.history.unshift({ year: y, league: summary.userLeague, pos, team: u.id, cup: Object.values(s.cups).some((c) => c.winner === u.id), moved: moved ? (moved.up ? 'up' : 'down') : null,
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
        const x = p.pst || {};
        p.car.apps += p.st.apps + p.cst.apps + (x.apps || 0); p.car.g += p.st.g + p.cst.g + (x.g || 0); p.car.a += p.st.a + p.cst.a + (x.a || 0);
        delete p.pst;
        p.st = { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 };
        p.cst = { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 };
        p.ycAcc = 0;
        p.sus = 0;
        p.age++;
        if (p.age >= 31) p.ovr = Math.max(35, p.ovr - FM.ri(0, Math.min(4, p.age - 30)));
        // запас роста не может превышать возрастной: не раскрывшийся к 24–27 годам талант уже не раскроется,
        // а после пика потенциал снижается вместе с рейтингом
        p.pot = FM.clamp(p.pot, p.ovr, p.ovr + FM.potRoom(p.age));
        this.revalue(p, true);
      }
      this.returnLoans();
      for (const tid in this.teams) {
        const t = this.teams[tid];
        const core = tid === s.user ? null : this.coreOf(t);
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
            } else if (!p.leaving && FM.chance(this.renewChance(p, core))) {
              p.contract = y + (p.age >= 33 ? 1 : FM.ri(1, 3));
            } else {
              this.removeFromTeam(p);
              s.freeAgents.push(p.id);
            }
          }
        }
      }
      for (const id in this.players) delete this.players[id].leaving;
      // летом клубы в первую очередь разбирают свободных агентов, недостающих игроков потом добирает академия
      this.aiFreeAgents(true);
      // воспитанники
      for (const tid in this.teams) {
        const t = this.teams[tid];
        // у клуба пользователя воспитанники поднимаются, только если в заявке есть места
        const n = tid === s.user ? Math.min(FM.ri(1, 3), Math.max(0, MAX_SQUAD - 2 - t.players.length)) : FM.ri(1, 3);
        const base = this.teamBaseOvr(t) - 12;
        for (let i = 0; i < n; i++) {
          const p = this.genPlayer(FM.pick(FM.POS), base + FM.gauss(0, 4), FM.ri(16, 18), t);
          p.pot = Math.min(92, p.ovr + FM.ri(10, 24));
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
      // в пуле остаются 300 лучших свободных агентов, остальные завершают карьеру
      const pool = s.freeAgents.map((id) => this.players[id]).filter((p) => p && p.age < 36).sort((a, b) => b.ovr - a.ovr);
      for (const p of pool.slice(300)) delete this.players[p.id];
      for (const id of s.freeAgents) if (this.players[id] && this.players[id].age >= 36) delete this.players[id];
      s.freeAgents = pool.slice(0, 300).map((p) => p.id);

      // репутация клубов за межсезонье на треть подтягивается к реальной силе состава
      for (const lid of s.order) {
        const sr = this.strengthRep(lid);
        for (const id in sr) { const t = this.teams[id]; t.rep = Math.round(FM.clamp(t.rep + (sr[id] - t.rep) / 3, 35, 99)); }
      }

      s.season++;
      s.date = `${s.season}-06-20`;
      const added = this.addMissingLeagues();
      if (added.length) this.news(`В игре новые лиги: ${added.map((L) => L.name).join(', ')}.`);
      this.newSeason(false);
      if (s.board.conf <= 0) this.sack('Руководство приняло решение расстаться с вами по итогам сезона.');
      else this.msg('Новый сезон', `Задача на сезон ${s.season}/${String(s.season + 1).slice(2)}: ${this.expectText()}. Трансферное окно открыто до 7 сентября.`, 'board');
      // летом в заявку приходят игроки по предварительным контрактам и возвращаются арендованные — можно выйти за лимит
      if (!s.sacked && this.userTeam().players.length > MAX_SQUAD) this.msg('Заявка переполнена', `В заявке ${this.userTeam().players.length} игроков при максимуме ${MAX_SQUAD}. Пока лишних не продадите, не отдадите в аренду или не отпустите, покупать новых игроков нельзя.`, 'board');
      return summary;
    }

    removeFromTeam(p) {
      if (!p.club) return;
      const t = this.teams[p.club];
      t.players = t.players.filter((x) => x !== p.id);
      t.lineup = t.lineup.map((x) => (x === p.id ? null : x));
      t.bench = t.bench.filter((x) => x !== p.id);
      p.club = null;
    }

    potLabel(p) {
      const d = p.pot;
      if (d - p.ovr <= 1) return p.age >= 31 ? 'на спаде' : p.age >= 26 ? 'на пике' : 'раскрыт';
      if (d >= 85) return 'звёздный';
      if (d >= 78) return 'очень высокий';
      if (d >= 72) return 'высокий';
      if (d >= 65) return 'средний';
      return 'невысокий';
    }

    // smooth — пересчёт в межсезонье: за год стоимость меняется не больше чем в 1,5 раза вверх и на 40% вниз
    revalue(p, smooth = false) {
      const base = FM.baseValue(p.ovr, p.age, p.pot);
      let v = base * (p.vmul || 1);
      // выше 150 млн цена растёт втрое медленнее — до потолка доходят единицы
      if (v > 150000) v = 150000 + (v - 150000) * 0.35;
      v = Math.min(FM.VALUE_CAP, v);
      if (smooth && p.value) {
        const lim = FM.clamp(v, p.value * 0.6, p.value * 1.5);
        if (lim !== v) { p.vmul = FM.clamp(lim / base, 0.2, 5); v = lim; }
      }
      p.value = FM.roundValue(v);
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
      const label = m.label || (FM.isCup(m.comp) && this.cupOf(m.comp) && this.cupOf(m.comp).rounds[m.round - 1] ? this.cupOf(m.comp).rounds[m.round - 1].name : '');
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
      const c = this.coachMarket().filter((x) => x.vacancy && x.level >= 2 && x.rep >= u.rep - 2 && (s.jobDeclined || {})[x.id] !== s.season);
      if (!c.length) return;
      const t = this.teams[FM.pick(c.slice(0, 5)).id];
      this.msg(`Предложение от «${t.name}»`, `«${t.name}» (${s.leagues[t.league].name}) недоволен результатами и предлагает вам возглавить команду. Решение за вами — можно остаться.`, 'job', { team: t.id });
    }

    // отказ от предложения клуба: клуб больше не зовёт до конца сезона, руководство ценит лояльность
    declineJob(msgId) {
      const s = this.s, m = s.inbox.find((x) => x.id === msgId);
      if (!m || !m.data || m.data.closed) return 'Предложение уже закрыто.';
      const t = this.teams[m.data.team];
      m.data.closed = true;
      m.data.result = 'Вы отказались от предложения.';
      s.jobDeclined = s.jobDeclined || {};
      s.jobDeclined[t.id] = s.season;
      s.board.conf = FM.clamp(s.board.conf + 3, 0, 100);
      this.news(`${s.manager} отказал «${t.name}» и остаётся в «${this.userTeam().name}».`);
      return `Вы отказали «${t.name}». Руководство «${this.userTeam().name}» ценит вашу верность.`;
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

    // ================== дерби и большие матчи ==================
    derbyOf(m) { return m.h && m.a ? FM.derbyName(m.h, m.a) : null; }

    // «матч лидеров»: во второй половине сезона встречаются две команды из тройки лидеров
    bigMatchOf(m) {
      const L = this.s.leagues[m.comp];
      if (!L || m.round < L.rounds.length / 3) return null;
      const t = this.table(m.comp);
      const pos = (id) => t.findIndex((r) => r.id === id) + 1;
      return pos(m.h) <= 3 && pos(m.a) <= 3 ? 'Матч лидеров' : null;
    }

    // личные встречи в дерби за время карьеры: [победы первого, ничьи, победы второго]
    derbyRecord(a, b) {
      const r = (this.s.hall && this.s.hall.derbies || {})[[a, b].sort().join('|')];
      if (!r) return null;
      return a < b ? r : [r[2], r[1], r[0]];
    }

    // ================== зал славы ==================
    hall() {
      const s = this.s;
      s.hall = s.hall || { clubs: {}, leagues: {}, seasons: [], transfers: [], derbies: {} };
      return s.hall;
    }

    // По итогам матча: статистика игроков за клуб и голы в чемпионате (для рекордов всех времён), счёт в дерби
    hallMatch(m, sim, isLeague) {
      const H = this.hall();
      for (const side of [sim.home, sim.away]) {
        const tid = side.team.id;
        const c = H.clubs[tid] = H.clubs[tid] || {};
        for (const pid of Object.keys(side.mins)) {
          const p = this.players[pid];
          if (!p) continue;
          const e = c[pid] = c[pid] || { n: p.name, nat: p.nat, a: 0, g: 0, as: 0 };
          e.a++;
        }
      }
      for (const g of sim.goalsList) {
        const tid = g.side === 'h' ? m.h : m.a;
        const c = H.clubs[tid];
        if (c && c[g.scorer]) c[g.scorer].g++;
        if (g.assist && c && c[g.assist]) c[g.assist].as++;
        if (isLeague) {
          const p = this.players[g.scorer];
          if (!p) continue;
          const L = H.leagues[m.comp] = H.leagues[m.comp] || {};
          const e = L[g.scorer] = L[g.scorer] || { n: p.name, nat: p.nat, g: 0 };
          e.g++;
          e.club = tid;
        }
      }
      const dn = this.derbyOf(m);
      if (dn) {
        const key = [m.h, m.a].sort().join('|');
        const r = H.derbies[key] = H.derbies[key] || [0, 0, 0];
        const first = [m.h, m.a].sort()[0];
        const fg = first === m.h ? m.hg : m.ag, sg = first === m.h ? m.ag : m.hg;
        r[fg > sg ? 0 : fg === sg ? 1 : 2]++;
      }
    }

    // В межсезонье: победители сезона в историю, у клубов остаются лучшие бомбардиры и игроки по числу матчей
    hallSeason() {
      const s = this.s, H = this.hall();
      const managed = new Set((s.history || []).map((h) => h.team).concat(s.user));
      const top = (obj, key, n) => Object.entries(obj).sort((a, b) => b[1][key] - a[1][key]).slice(0, n).map((x) => x[0]);
      for (const tid in H.clubs) {
        const c = H.clubs[tid], n = managed.has(tid) ? 40 : 10;
        const keep = new Set(top(c, 'g', n).concat(top(c, 'a', n)));
        for (const pid in c) if (!keep.has(pid)) delete c[pid];
      }
      for (const lid in H.leagues) {
        const L = H.leagues[lid];
        const keep = new Set(top(L, 'g', 25));
        for (const pid in L) if (!keep.has(pid)) delete L[pid];
      }
      const champs = {}, scorers = {};
      for (const lid of s.order) {
        const t = this.table(lid);
        if (t[0]) champs[lid] = t[0].id;
        const sc = this.leaders(lid, 'g', 1)[0];
        if (sc) scorers[lid] = [sc[0].name, sc[0].club, sc[1]];
      }
      const cups = {};
      for (const c in s.cups) if (s.cups[c].winner) cups[c] = s.cups[c].winner;
      const euro = {};
      for (const E of FM.EURO) if (s.euro && s.euro[E.id] && s.euro[E.id].winner) euro[E.id] = s.euro[E.id].winner;
      H.seasons.unshift({ year: s.season, champs, cups, euro, scorers });
    }

    createMatch(m, live) {
      const opts = { comp: m.comp, knockout: !!m.ko, userTeam: this.s.user, autoSubsUser: !live || this.s.settings.autoSubs, derby: !!this.derbyOf(m) };
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
      const isLeague = !!s.leagues[m.comp];
      const euro = FM.EURO.find((E) => E.id === m.comp);
      if (m.ko || FM.isCup(m.comp)) m.winner = sim.winner();
      if (FM.isCup(m.comp) && !m.winner) m.winner = m.hg >= m.ag ? m.h : m.a;
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
          if (!conceded && (side.mins[pid] || 0) >= 60 && (FM.GROUP[p.pos] === 'G' || FM.GROUP[p.pos] === 'D')) st.cs = (st.cs || 0) + 1;
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
      this.hallMatch(m, sim, isLeague);
      // дерби: громкий результат в новостях, для своей команды — реакция руководства и игроков
      const dn = this.derbyOf(m);
      if (dn) {
        const H = this.teams[m.h], A = this.teams[m.a];
        if (isLeague && s.leagues[m.comp].tier === 1 || m.h === s.user || m.a === s.user) this.news(`${dn}: «${H.name}» — «${A.name}» ${m.hg}:${m.ag}${m.pens ? ` (пен. ${m.pens[0]}:${m.pens[1]})` : ''}.`);
        if (m.h === s.user || m.a === s.user) {
          const mine = m.h === s.user ? m.hg : m.ag, opp = m.h === s.user ? m.ag : m.hg;
          const w = m.winner ? (m.winner === s.user ? 1 : -1) : Math.sign(mine - opp);
          s.board.conf = FM.clamp(s.board.conf + w * 3, 0, 100);
          for (const pid of this.userTeam().players) { const p = this.players[pid]; if (p) p.morale = FM.clamp(p.morale + w * 3, 10, 100); }
        }
      }
      // оценки храним только для матчей своей команды, чтобы сохранение не разрасталось
      if (m.h === s.user || m.a === s.user) m.ratings = ratings;
      const best = Object.entries(ratings).sort((a, b) => b[1] - a[1])[0];
      m.mvp = best ? +best[0] : null;

      // выручка от билетов
      const home = this.teams[m.h];
      if (!m.neutral) {
        const away = this.teams[m.a];
        const derby = !!this.derbyOf(m), big = derby || (s.leagues[m.comp] && !!this.bigMatchOf(m));
        const fill = FM.clamp(0.12 + home.rep / 160 + (away.rep - 60) / 250 + (FM.isCup(m.comp) ? 0.05 : euro ? 0.15 : 0) + (derby ? 0.3 : big ? 0.15 : 0) + FM.gauss(0, 0.05), 0.08, derby ? 1 : 0.98);
        m.att = Math.round(home.cap * fill);
        const price = (s.leagues[home.league].ticket || 2) * (m.comp === 'po' ? 1.5 : euro ? 2 : 1) * (derby ? 1.5 : 1);
        const inc = Math.round((m.att * price) / 100) / 10;
        home.money += inc;
        if (home.id === s.user) this.finLog(home, 'Билеты', inc);
      }
      if (euro && m.md) {
        // премия за результат в общем этапе
        if (m.hg !== m.ag) this.euroReward(euro, [m.hg > m.ag ? m.h : m.a], euro.win, 'победа в общем этапе');
        else this.euroReward(euro, [m.h, m.a], euro.draw, 'ничья в общем этапе');
      }
      if (FM.isCup(m.comp)) {
        for (const id of [m.h, m.a]) {
          const bonus = [0, 30, 15, 8][this.tierOf(this.teams[id])] || 5;
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

      if (m.comp === 'po' && m.ko) {
        const tie = s.playoff.ties.find((t) => t.legs[t.legs.length - 1] === m.id);
        if (tie) {
          tie.winner = m.winner;
          if (tie.stage === 'semi') this.playoffFinal(tie.grp);
        }
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
    }

    nextDay() {
      const s = this.s;
      s.date = FM.addDays(s.date, 1);
      this.postponeToday();
      const monday = FM.weekday(s.date) === 1;
      if (monday) this.fixClashes();
      for (const id in this.players) {
        const p = this.players[id];
        if (p.inj > 0) {
          p.inj--;
          if (p.inj === 0 && p.club === s.user) this.msg('Восстановление', `${p.name} восстановился после травмы.`, 'squad');
        }
        p.fit = Math.min(100, p.fit + (p.inj ? 4 : 13));
      }
      if (monday) this.weekly();
      if (monday) this.aiPreContracts();
      if (FM.weekday(s.date) % 3 === 0) this.aiFreeAgents();
      if (s.payments && s.payments.length) {
        for (const pay of s.payments.filter((x) => x.date <= s.date)) {
          const from = this.teams[pay.from], to = this.teams[pay.to];
          if (from) { from.money -= pay.amount; if (from.id === s.user) this.finLog(from, `Рассрочка: ${pay.what}`, -pay.amount); }
          if (to) { to.money += pay.amount; if (to.id === s.user) this.finLog(to, `Рассрочка: ${pay.what}`, pay.amount); }
        }
        s.payments = s.payments.filter((x) => x.date > s.date);
      }
      if (this.inWindow()) this.transferDay();
      if (s.date === FM.addDays(s.window.to, 1)) this.reviewExpectation();
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
      if (this.awardsDue()) return 'awards';
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
      this.stashStats(p, to);
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
      if (from.id === this.s.user || to.id === this.s.user || p.ovr >= 72) this.news(`${p.name} отправляется в аренду: «${from.name}» → «${to.name}» до конца сезона.`);
      this.s.seasonLog.unshift({ date: this.s.date, pid: p.id, name: p.name, from: from.id, to: to.id, fee: 0, loan: true });
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
      if (u.players.length >= MAX_SQUAD) return { ok: false, text: this.squadFullText() };
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
        // рост к потенциалу: быстрее у самых молодых и у тех, кто играет; к 24–27 годам — понемногу
        const young = p.age <= 27 && p.ovr < p.pot;
        const playing = p.st.mins + p.cst.mins > 0;
        if (young && Math.random() < (playing ? 0.09 : 0.045) * (p.age <= 20 ? 1.3 : p.age >= 24 ? 0.5 : 1)) { p.ovr++; this.revalue(p); }
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
      if (u.money < -3000) s.board.conf = Math.max(0, s.board.conf - 2);
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
      const market = FM.wageFor(p.value, tier, p.age, this.countryOf(team.league));
      let w = p.club ? FM.clamp(market * 0.85, p.wage * 1.1, p.wage * 2) : market * 0.85;
      // за переход в клуб ниже уровнем игрок просит надбавку, но не больше 40%
      if (cur && team.rep < cur.rep) w *= 1 + Math.min(0.4, (cur.rep - team.rep) * 0.025);
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

    // сколько игроков в заявке и сколько мест нужно освободить для новичка
    squadFullText() {
      const n = this.userTeam().players.length, free = n - MAX_SQUAD + 1;
      return `В заявке ${n} игроков при максимуме ${MAX_SQUAD} — чтобы купить кого-то, освободите ${free} ${free === 1 ? 'место' : free < 5 ? 'места' : 'мест'}: продайте, отдайте в аренду или расторгните контракт.`;
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
      if (u.players.length >= MAX_SQUAD) return { status: 'blocked', text: this.squadFullText() };
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

    playerInterest(p, team) {
      const s = this.s;
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
      // запрос отталкивается от нынешней зарплаты: при переходе игрок хочет прибавку (15–30%), а не зарплату «по рыночной
      // цене» — иначе после роста стоимости запрос скачет в разы. Без клуба — ближе к рыночной ставке.
      const market = FM.wageFor(p.value, this.tierOf(team), p.age, this.countryOf(team.league));
      // недоплачиваемый игрок просит ближе к рынку, но не больше чем вдвое к нынешней зарплате
      let w = p.club ? FM.clamp(market * 0.85, p.wage * 1.15, p.wage * 2) : Math.max(market * 0.85, p.wage * 0.9);
      // сомневающийся игрок просит больше, но не больше чем на 30%
      w *= 1 + Math.min(0.3, Math.max(0, 55 - it.score) * 0.008);
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
    // Статистика сезона за прежний клуб уходит в p.pst: в таблицах лидеров новой лиги учитываются только матчи за новый
    // клуб. Внутри одной лиги матчи продолжают идти в зачёт лиги (как в жизни), кубковые — внутри одной страны.
    stashStats(p, to) {
      const fromT = p.club ? this.teams[p.club] : null;
      if (!fromT) return;
      const sameLeague = fromT.league === to.league, sameC = this.countryOf(fromT.league) === this.countryOf(to.league);
      const add = (a, b) => { for (const k in b) a[k] = (a[k] || 0) + (b[k] || 0); };
      p.pst = p.pst || { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 };
      if (!sameLeague && p.st.apps) { add(p.pst, p.st); p.st = { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 }; }
      if (!sameC && p.cst.apps) { add(p.pst, p.cst); p.cst = { apps: 0, g: 0, a: 0, yc: 0, rc: 0, rsum: 0, mins: 0, cs: 0 }; }
      if (!p.pst.apps) delete p.pst;
    }

    transfer(p, to, fee, wage, years, opts = {}) {
      const s = this.s;
      const from = p.club ? this.teams[p.club] : null;
      this.stashStats(p, to);
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
      p.joined = s.date;
      if (fee > 0) {
        const H = this.hall();
        H.transfers.push({ date: s.date, name: p.name, nat: p.nat, from: from ? from.id : null, to: to.id, fee });
        H.transfers.sort((a, b) => b.fee - a.fee);
        if (H.transfers.length > 25) H.transfers.length = 25;
      }
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
      if (s.seasonLog.length > 600) s.seasonLog.length = 600;
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
      return Math.round(Math.max(p.wage * 1.08, FM.wageFor(p.value, this.tierOf(u), p.age, this.countryOf(u.league))) * 10) / 10;
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
        const buyers = Object.values(this.teams).filter((t) => t.id !== u.id && !t.reserveOf && t.rep >= u.rep - 12 && t.money > p.value * 0.9 && t.players.length < MAX_SQUAD - 1);
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
        const b = Object.values(this.teams).find((t) => t.id !== u.id && !t.reserveOf && t.rep >= u.rep - 5 && t.money > p.release * 1.5);
        if (!b) continue;
        this.msg('Отступные активированы', `«${b.name}» выплатил отступные ${FM.money(p.release)} — ${p.name} уходит из клуба.`, 'transfer');
        this.transfer(p, b, p.release, null, FM.ri(3, 5));
      }
      // трансферы между клубами ИИ: летом рынок активнее, чем зимой; топ-клубы иногда охотятся за звёздами,
      // молодёжь больших клубов уходит в аренду туда, где будет играть
      const ai = Object.values(this.teams).filter((t) => t.id !== u.id && !t.reserveOf);
      const summer = s.date >= s.window.from && s.date <= s.window.to;
      const cache = {};
      for (let k = 0; k < (summer ? 12 : 6); k++) this.aiBuy(FM.pick(ai), cache);
      if (FM.chance(summer ? 0.3 : 0.08)) this.aiMarquee(ai, cache);
      for (let k = 0; k < (summer ? 3 : 1); k++) this.aiLoan(ai);
      // подписание свободных агентов и разгрузка составов
      for (const t of ai) {
        if (t.players.length > 29) {
          const worst = this.squad(t).sort((a, b) => a.ovr - b.ovr)[0];
          this.removeFromTeam(worst);
          s.freeAgents.push(worst.id);
        }
      }
    }

    // Готов ли клуб продать игрока и за сколько: ключевых игроков (8 лучших полевых и 2 вратаря) не отдают
    // клубам ниже уровнем и продают только с наценкой; позицию не оголяют.
    sellTerms(p, buyer, cache) {
      const seller = this.teams[p.club];
      if (!seller || seller.id === this.s.user || seller.reserveOf === buyer.id) return null;
      // только что купленного игрока клуб не перепродаёт (полгода)
      if (p.joined && FM.parseDate(this.s.date) - FM.parseDate(p.joined) < 180 * 864e5) return null;
      const c = cache[seller.id] = cache[seller.id] || { core: this.coreOf(seller), pos: {} };
      if (c.pos[p.pos] == null) c.pos[p.pos] = seller.players.filter((id) => this.players[id] && this.players[id].pos === p.pos).length;
      if (c.pos[p.pos] <= Math.max(1, (SQUAD_NEED[p.pos] || 2) - 1) || seller.players.length <= 20) return null;
      let fee = this.askingPrice(p);
      if (c.core.has(p.id)) {
        if (buyer.rep < seller.rep - 2 || p.contract > this.s.season + 2 && FM.chance(0.5)) return null;
        // элитные клубы почти никогда не продают своих звёзд
        if (seller.rep >= 82 && !FM.chance(0.12)) return null;
        fee = fee * 1.3;
      }
      // не дороже полутора стоимостей и рекорда рынка
      fee = FM.roundValue(Math.min(fee, p.value * 1.5, FM.VALUE_CAP * 1.1));
      return { fee, core: c.core.has(p.id) };
    }

    // Клуб ИИ закрывает самое слабое место основы: игрок должен быть заметно сильнее нынешнего, по карману
    // (трансфер + полгода зарплаты) и согласен на переход (не идёт в клуб сильно ниже уровнем).
    aiBuy(buyer, cache = {}) {
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
      const budget = buyer.money * 0.5;
      const cands = [];
      for (const tid in this.teams) {
        const t = this.teams[tid];
        if (t.id === buyer.id || t.id === s.user || t.reserveOf === buyer.id || t.players.length <= 20) continue;
        if (t.rep > buyer.rep + 12) continue;
        for (const pid of t.players) {
          const p = this.players[pid];
          if (p.pos !== pos || p.ovr < wv + 2 || p.ovr > wv + 12 || p.inj || p.pre || p.loan) continue;
          if (t.rep > buyer.rep + 3 && p.age < 30 && p.ovr >= this.teamBaseOvr(t)) continue; // в клубе выше уровнем игрок основы не уйдёт вниз
          cands.push(p);
        }
      }
      for (const pid of s.freeAgents) {
        const p = this.players[pid];
        if (p && p.pos === pos && p.ovr >= wv + 2) cands.push(p);
      }
      if (!cands.length) return;
      cands.sort((a, b) => b.ovr - a.ovr);
      for (const p of cands.slice(0, 6)) {
        const terms = p.club ? this.sellTerms(p, buyer, cache) : { fee: 0 };
        if (!terms) continue;
        const wage = this.wageDemand(p, buyer);
        if (terms.fee > budget || terms.fee + wage * 26 > buyer.money) continue;
        const from = p.club ? this.teams[p.club] : null;
        this.transfer(p, buyer, terms.fee, wage, p.age >= 31 ? FM.ri(1, 2) : FM.ri(2, 5));
        if (terms.fee >= 25000) this.news(`${p.name} переходит из «${from.name}» в «${buyer.name}» за ${FM.money(terms.fee)}.`);
        return;
      }
    }

    // Громкий трансфер: богатый топ-клуб покупает звезду, которая сразу станет игроком основы
    aiMarquee(ai, cache = {}) {
      // не больше трёх громких сделок за окно
      const s = this.s, key = s.date < s.window.from2 ? `${s.season}s` : `${s.season}w`;
      s.marquee = s.marquee && s.marquee.key === key ? s.marquee : { key, n: 0 };
      if (s.marquee.n >= 3) return;
      const rich = ai.filter((t) => t.rep >= 80 && t.money >= 40000 && t.players.length < MAX_SQUAD - 2);
      if (!rich.length) return;
      const buyer = FM.pick(rich.sort((a, b) => b.money - a.money).slice(0, 12));
      const r = this.autoPick(buyer, buyer.formation, { ignoreFitness: true });
      const slots = FM.FORMATIONS[buyer.formation];
      const need = {};
      r.lineup.forEach((pid, i) => { const sp = slots[i][0]; const v = pid ? this.players[pid].ovr : 0; need[sp] = Math.min(need[sp] ?? 999, v); });
      const cands = [];
      for (const id in this.players) {
        const p = this.players[id];
        if (!p.club || p.club === buyer.id || p.club === this.s.user || p.loan || p.pre || p.inj || p.age > 30 || p.ovr < 82) continue;
        const cur = need[p.pos];
        if (cur == null || p.ovr < cur + 3) continue;
        const seller = this.teams[p.club];
        if (seller.rep > buyer.rep + 2) continue;
        cands.push(p);
      }
      cands.sort((a, b) => b.ovr - a.ovr);
      for (const p of cands.slice(0, 5)) {
        const terms = this.sellTerms(p, buyer, cache);
        if (!terms) continue;
        const wage = this.wageDemand(p, buyer);
        if (terms.fee > buyer.money * 0.85 || terms.fee + wage * 26 > buyer.money) continue;
        const from = this.teams[p.club];
        this.transfer(p, buyer, terms.fee, wage, FM.ri(4, 5));
        this.news(`Громкий трансфер: ${p.name} переходит из «${from.name}» в «${buyer.name}» за ${FM.money(terms.fee)}!`);
        s.marquee.n++;
        return;
      }
    }

    // Аренда молодого игрока (до 21 года) из большого клуба, где он не в числе 16 лучших, в клуб, где он будет играть
    aiLoan(ai) {
      const owner = FM.pick(ai.filter((t) => t.rep >= 68));
      if (!owner) return;
      const sq = this.squad(owner).filter((p) => !p.loan).sort((a, b) => b.ovr - a.ovr);
      const young = sq.slice(16).filter((p) => p.age <= 21 && !p.pre && !p.inj && p.ovr >= 55);
      if (!young.length || sq.length <= 22) return;
      const p = FM.pick(young);
      const opts = ai.filter((t) => t.id !== owner.id && t.rep < owner.rep - 4 && t.players.length < MAX_SQUAD - 4 && t.reserveOf !== owner.id && owner.reserveOf !== t.id);
      let best = null, bv = -1;
      for (const t of FM.shuffle(opts).slice(0, 80)) {
        const same = t.players.map((id) => this.players[id]).filter((x) => x && x.pos === p.pos).map((x) => x.ovr).sort((a, b) => b - a);
        if (p.ovr < (same[0] || 0) - 1) continue; // должен сразу бороться за место в основе
        const v = t.rep + (this.countryOf(t.league) === this.countryOf(owner.league) ? 6 : 0) + Math.random() * 4;
        if (v > bv) { bv = v; best = t; }
      }
      if (best) this.loanMove(p, best, { wagePct: 100, fee: 0, buy: 0 });
    }

    // ================== свободные агенты и предварительные контракты (ИИ) ==================
    // Снимок клубов для подбора: уровень состава, рейтинги по позициям (по убыванию), размер, деньги.
    marketInfo() {
      const s = this.s, info = {};
      for (const id in this.teams) {
        const t = this.teams[id];
        if (id === s.user || t.reserveOf) continue;
        const pos = {};
        for (const pid of t.players) { const p = this.players[pid]; if (p) (pos[p.pos] = pos[p.pos] || []).push(p.ovr); }
        for (const k in pos) pos[k].sort((a, b) => b - a);
        info[id] = { t, base: this.teamBaseOvr(t), pos, size: t.players.length, country: this.countryOf(t.league) };
      }
      return info;
    }

    // Лучший клуб для игрока: нужен ли он клубу (дыра в составе или усиление основы), подходит ли уровень
    // (игрок не идёт сильно вниз, клуб не берёт заметно слабее своих), хватает ли денег на зарплату.
    suitorFor(p, info, relax = 0) {
      let best = null, bv = 0;
      const pc = p.club ? this.countryOf(this.teams[p.club].league) : p.nat;
      for (const id in info) {
        const x = info[id];
        if (id === p.club || x.size >= MAX_SQUAD - 3) continue;
        if (p.ovr < x.base - 7 || p.ovr > x.base + 5 + relax) continue;
        const arr = x.pos[p.pos] || [];
        const need = SQUAD_NEED[p.pos] || 2;
        let v = 0;
        if (arr.length < need) v += 6;
        if (p.ovr > (arr[0] || 0)) v += 4 + (p.ovr - (arr[0] || 0));
        else if (arr.length >= 2 && p.ovr > arr[1] + 1) v += 2;
        if (!v) continue;
        if (x.size >= 26) v -= 3;
        const wage = this.wageDemand(p, x.t);
        if (x.t.money < wage * 26) continue;
        v += x.t.rep * 0.12 + (x.country === pc ? 2 : 0) + Math.random() * 2;
        if (v > bv) { bv = v; best = x; }
      }
      return best ? best.t : null;
    }

    // Клубы ИИ подписывают свободных агентов: каждые несколько дней по ходу сезона и массово летом.
    // Чем дольше игрок без клуба, тем ниже его запросы к уровню команды; ветераны без клуба завершают карьеру.
    aiFreeAgents(bulk = false) {
      const s = this.s;
      const days = bulk ? 0 : 3;
      const all = s.freeAgents.map((id) => this.players[id]).filter(Boolean).sort((a, b) => b.ovr - a.ovr);
      for (const p of all) p.faDays = (p.faDays || 0) + days;
      // подбор клуба — для 150 сильнейших (слабые и так подписываются редко), остальные ждут
      const fas = all.slice(0, bulk ? 400 : 150);
      if (!fas.length) return;
      const info = this.marketInfo();
      for (const p of fas) {
        if (!bulk && p.age >= 34 && p.faDays > 150) {
          s.freeAgents = s.freeAgents.filter((x) => x !== p.id);
          delete this.players[p.id];
          continue;
        }
        if (!FM.chance(bulk ? 0.75 : 0.15)) continue;
        const t = this.suitorFor(p, info, Math.min(12, p.faDays / 10));
        if (!t) continue;
        this.transfer(p, t, 0, null, p.age >= 32 ? 1 : FM.ri(1, 3));
        p.faDays = 0;
        const x = info[t.id];
        x.size++;
        (x.pos[p.pos] = x.pos[p.pos] || []).push(p.ovr);
        x.pos[p.pos].sort((a, b) => b - a);
        if (p.ovr >= 74) this.news(`Свободный агент ${p.name} подписал контракт с «${t.name}».`);
      }
    }

    // С 1 января клубы ИИ решают судьбу истекающих контрактов (не сразу — в течение зимы и весны), а игроки,
    // с которыми не продлевают, а иногда и те, по кому решения ещё нет, подписывают предварительные контракты
    // с новыми клубами. Игроки пользователя с непродлённым контрактом тоже могут договориться о переходе.
    aiPreContracts() {
      const s = this.s, y = s.season;
      if (s.date < `${y + 1}-01-01` || s.date > `${y + 1}-05-31`) return;
      let info = null;
      for (const id in this.teams) {
        const t = this.teams[id];
        if (t.reserveOf) continue;
        const mine = id === s.user;
        const core = mine ? null : this.coreOf(t);
        for (const pid of t.players.slice()) {
          const p = this.players[pid];
          if (!p || p.contract > y || p.pre || p.loan) continue;
          if (!mine && !p.leaving && FM.chance(0.12)) {
            if (FM.chance(this.renewChance(p, core))) { p.contract = y + (p.age >= 33 ? 1 : FM.ri(1, 3)); continue; }
            p.leaving = true;
          }
          // ключевых игроков клубы продлевают — к ним до решения клуба не подходят
          if (!mine && !p.leaving && core.has(p.id) && p.age < 33) continue;
          const pr = mine ? 0.05 : p.leaving ? 0.12 : 0.015;
          if (!FM.chance(pr)) continue;
          info = info || this.marketInfo();
          const to = this.suitorFor(p, info);
          if (!to) continue;
          p.pre = { team: to.id, wage: this.wageDemand(p, to), years: p.age >= 32 ? 1 : FM.ri(2, 4) };
          info[to.id].size++;
          if (mine) this.msg('Игрок уходит летом', `${p.name} подписал предварительный контракт с «${to.name}» и летом уйдёт бесплатно — вы не продлили с ним контракт.`, 'squad');
          else if (p.ovr >= 74) this.news(`${p.name} летом бесплатно перейдёт из «${t.name}» в «${to.name}» — подписан предварительный контракт.`);
        }
      }
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
