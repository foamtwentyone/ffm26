// Движок футзального матча: два тайма по 20 минут «чистого» времени, поминутная симуляция. Один и тот же код
// считает и живой матч с комментарием, и фоновые матчи других клубов (там просто не показываются события).
// Особенности футзала: 4 полевых и вратарь, замены без ограничений (ротация пятёрок), накопление фолов
// (с 6-го фола в тайме — 10-метровый удар), удаление на 2 минуты (или до пропущенного мяча), игра вратарём-игроком.

(function () {
  const HALF = 20, ET = 5;
  const SHOOT_W = { FW: 5, UN: 3, DF: 1.6, GK: 0.05 };
  const ASSIST_W = { UN: 4, DF: 3, FW: 2.5, GK: 0.6 };
  // вклад линии в защиту, контроль мяча и атаку
  const W = { D: [1, 0.6, 0.35], M: [0.6, 1, 0.7], F: [0.25, 0.6, 1] };
  const MINUTE_TEXTS = [
    (s) => `${s.team.name} неторопливо катают мяч у центральной линии.`,
    (s) => `${s.team.name} разыгрывают мяч в квадрате, ищут свободного пивота.`,
    (s) => `Плотная борьба у бортика, аут.`,
    (s) => `${s.team.name} прессингуют всей четвёркой, соперник отдаёт мяч вратарю.`,
    (s) => `Вратарь ${s.team.name} вводит мяч рукой на фланг.`,
    (s) => `${s.team.name} пытаются пройти через фиксо, но мяч уходит за лицевую.`,
  ];

  class Side {
    constructor(game, team, xi, bench, isHome) {
      this.game = game;
      this.team = team;
      this.isHome = isHome;
      this.tactics = Object.assign({ ment: 0, press: 1, tempo: 1 }, team.tactics);
      this.onPitch = xi.map(({ pid, slot }) => ({ p: game.players[pid], slot }));
      this.bench = bench.map((pid) => game.players[pid]);
      this.used = new Set(xi.map((x) => x.pid));
      this.subsLeft = Infinity; // замены в футзале не ограничены
      this.goals = 0;
      this.fouls = 0; // командные фолы в текущем тайме
      this.pp = false; // игра вратарём-игроком
      this.short = null; // { until, slot } — играет в меньшинстве после удаления
      this.stats = { shots: 0, sot: 0, xg: 0, corners: 0, fouls: 0, yc: 0, rc: 0, possTicks: 0 };
      this.rating = {};
      this.mins = {};
      this.yellows = {};
      this.fitness = {};
      this.startFit = {};
      for (const { p } of this.onPitch) {
        this.rating[p.id] = 6.3;
        this.mins[p.id] = 0;
      }
      for (const p of this.onPitch.map((o) => o.p).concat(this.bench)) this.fitness[p.id] = this.startFit[p.id] = p.fit;
      this.recalc();
    }

    eff(o) {
      const fit = this.fitness[o.p.id];
      const morale = 0.97 + (o.p.morale || 50) / 1700;
      return o.p.ovr * FM.pfit(o.p, o.slot) * (0.62 + 0.38 * fit / 100) * morale;
    }

    recalc() {
      const acc = [[0, 0], [0, 0], [0, 0]];
      let gk = 30, field = 0;
      for (const o of this.onPitch) {
        const line = FM.lineOf(o.slot, this.team.formation);
        if (line === 'G') { gk = this.eff(o); continue; }
        field++;
        const e = this.eff(o);
        W[line].forEach((w, i) => { acc[i][0] += w * e; acc[i][1] += w; });
      }
      const avg = (i) => (acc[i][1] ? acc[i][0] / acc[i][1] : 30);
      const lack = Math.pow(field / 4, 0.9);
      const t = this.tactics;
      this.gk = gk;
      this.def = (0.78 * avg(0) + 0.22 * gk) * lack * (1 - 0.04 * t.ment) * (this.pp ? 0.72 : 1);
      this.mid = avg(1) * lack * (1 + 0.025 * (t.press - 1)) * (this.pp ? 1.12 : 1);
      this.att = avg(2) * lack * (1 + 0.05 * t.ment) * (this.pp ? 1.3 : 1);
    }

    gkPlayer() {
      const o = this.onPitch.find((x) => x.slot === 'GK');
      return o ? o.p : this.onPitch[0].p;
    }
  }

  class Match {
    // opts: { comp, knockout, shootout (ничья → серия 6-метровых без овертайма), firstLeg: {homeGoals, awayGoals},
    // userTeam, autoSubsUser }
    constructor(game, home, away, opts = {}) {
      this.game = game;
      this.opts = opts;
      const lh = game.matchLineup(home), la = game.matchLineup(away);
      this.home = new Side(game, home, lh.xi, lh.bench, true);
      this.away = new Side(game, away, la.xi, la.bench, false);
      this.minute = 0;
      this.maxMinute = 2 * HALF;
      this.events = [];
      this.done = false;
      this.phase = 'first';
      this.pens = null;
      this.goalsList = [];
      this.userSide = opts.userTeam === home.id ? this.home : opts.userTeam === away.id ? this.away : null;
    }

    other(s) { return s === this.home ? this.away : this.home; }

    log(type, text, side, extra = {}) {
      const ev = Object.assign({ min: this.minuteLabel(), type, text, side: side ? (side === this.home ? 'h' : 'a') : null }, extra);
      this.events.push(ev);
      return ev;
    }

    minuteLabel() { return String(Math.max(1, this.minute)); }

    // Один шаг — одна минута. Возвращает массив новых событий.
    step() {
      if (this.done) return [];
      const start = this.events.length;
      if (this.minute === 0) {
        this.log('start', `Стартовый свисток! ${this.home.team.name} — ${this.away.team.name}.`);
      }
      this.minute++;
      this.simMinute();
      this.boundaries();
      return this.events.slice(start);
    }

    boundaries() {
      const m = this.minute;
      this.halfTime = false;
      if (this.phase === 'first' && m === HALF) {
        this.log('half', `Перерыв. ${this.home.goals}:${this.away.goals}.`);
        this.phase = 'second';
        for (const s of [this.home, this.away]) {
          s.fouls = 0;
          for (const pid in s.fitness) s.fitness[pid] = Math.min(s.startFit[pid] || 100, s.fitness[pid] + 10);
        }
        this.halfTime = true;
        return;
      }
      if (this.phase === 'second' && m === 2 * HALF) {
        if (this.opts.knockout && this.needsExtra()) {
          this.log('half', `Основное время завершено — ${this.home.goals}:${this.away.goals}. Будет овертайм: два тайма по 5 минут!`);
          this.phase = 'et';
          for (const s of [this.home, this.away]) { s.pp = false; s.recalc(); }
          return;
        }
        if (this.opts.shootout && this.home.goals === this.away.goals) this.penalties();
        this.finish();
        return;
      }
      if (this.phase === 'et' && m === 2 * HALF + 2 * ET) {
        if (this.needsExtra()) this.penalties();
        this.finish();
      }
    }

    needsExtra() {
      if (!this.opts.firstLeg) return this.home.goals === this.away.goals;
      // во втором матче нынешние хозяева в первом были гостями
      const homeAgg = this.home.goals + this.opts.firstLeg.awayGoals;
      const awayAgg = this.away.goals + this.opts.firstLeg.homeGoals;
      return homeAgg === awayAgg;
    }

    simMinute() {
      const H = this.home, A = this.away;
      const mh = H.mid * 1.03, ma = A.mid;
      const possH = Math.pow(mh, 4) / (Math.pow(mh, 4) + Math.pow(ma, 4));
      H.stats.possTicks += possH;
      A.stats.possTicks += 1 - possH;
      let happened = false;
      for (const s of [H, A]) {
        const o = this.other(s);
        const poss = s === H ? possH : 1 - possH;
        const t = s.tactics;
        let rate = 0.46 * Math.pow(2 * poss, 0.5) * Math.pow(s.att / o.def, 2.1);
        rate *= (s.isHome ? 1.05 : 0.96) * (1 + 0.08 * (t.tempo - 1)) * (1 + 0.06 * t.ment) * (1 + 0.03 * o.tactics.ment);
        if (Math.random() < rate) {
          this.chance(s, o);
          happened = true;
        }
        // атака в пустые ворота, пока соперник играет вратарём-игроком
        if (o.pp && Math.random() < 0.12) {
          this.emptyNet(s, o);
          happened = true;
        }
        if (Math.random() < 0.006 * Math.pow(s.att / o.def, 1.5)) {
          this.penalty(s, o, false);
          happened = true;
        }
        this.discipline(s, o);
        if (Math.random() < 0.0012) this.injury(s);
        this.tire(s);
      }
      if (!happened && Math.random() < 0.12) {
        const s = Math.random() < possH ? H : A;
        this.log('info', FM.pick(MINUTE_TEXTS)(s));
      }
      for (const s of [H, A]) if (s.short && this.minute >= s.short.until) this.restore(s, 'истекли две минуты удаления');
      this.aiDecisions();
    }

    pickShooter(s) {
      return FM.weighted(s.onPitch, (o) => (SHOOT_W[o.slot] ?? 1) * Math.pow(o.p.ovr / 60, 3)).p;
    }

    pickAssist(s, shooter) {
      const pool = s.onPitch.filter((o) => o.p !== shooter);
      if (!pool.length || Math.random() < 0.25) return null;
      return FM.weighted(pool, (o) => (ASSIST_W[o.slot] || 1) * Math.pow(o.p.ovr / 60, 2)).p;
    }

    chance(s, o) {
      const shooter = this.pickShooter(s);
      const t = s.tactics;
      const so = s.onPitch.find((x) => x.p === shooter);
      const shooterEff = so ? s.eff(so) : shooter.ovr;
      let xg = (0.03 + 0.34 * Math.pow(Math.random(), 2.3)) * (1 - 0.05 * (t.tempo - 1));
      xg = FM.clamp(xg * Math.pow(shooterEff / o.def, 0.5), 0.01, 0.85);
      s.stats.shots++;
      s.stats.xg += xg;
      const gk = o.gkPlayer();
      const pGoal = FM.clamp(0.95 * xg * Math.pow(shooterEff / Math.max(o.gk, 20), 0.8), 0.005, 0.9);
      const r = Math.random();
      const name = shooter.name;
      if (r < pGoal) {
        s.stats.sot++;
        const how = xg > 0.3 ? FM.pick(['в одно касание у дальней штанги', 'после скидки пивота', '']) : FM.pick(['', 'низом в угол', 'с дальней дистанции', 'носком под перекладину']);
        this.goal(s, shooter, this.pickAssist(s, shooter), xg, how);
      } else if (r < pGoal + 0.35) {
        s.stats.sot++;
        o.rating[gk.id] = (o.rating[gk.id] || 6) + 0.12 + xg * 0.6;
        s.rating[shooter.id] += 0.04;
        const big = xg > 0.25;
        this.log('save', big
          ? FM.pick([`Какой момент! ${name} бьёт в упор — ${gk.name} выручает в шпагате!`, `${name} выходит один на один, но ${gk.name} закрывает угол!`])
          : FM.pick([`${name} пробивает носком — ${gk.name} забирает мяч.`, `Удар ${name} в створ, ${gk.name} на месте.`, `${name} бьёт с разворота, ${gk.name} отбивает на угловой.`]), s, { xg });
        if (Math.random() < 0.35) this.corner(s);
      } else if (r < pGoal + 0.55) {
        this.log('miss', FM.pick([`Удар ${name} блокирует защитник, бросившись под мяч.`, `${name} пытается пробить, но мяч попадает в ногу фиксо.`]), s, { xg });
        if (Math.random() < 0.4) this.corner(s);
      } else {
        if (xg > 0.3 && Math.random() < 0.18) this.log('miss', `${name} попадает в штангу! Как близко!`, s, { xg });
        else this.log('miss', xg > 0.25
          ? FM.pick([`${name} не попадает в пустые ворота с двух метров!`, `Отличный момент! ${name} бьёт выше ворот.`])
          : FM.pick([`${name} бьёт мимо ворот.`, `Удар ${name} — выше перекладины.`, `${name} пробивает с острого угла — мимо.`]), s, { xg });
        s.rating[shooter.id] -= 0.04;
      }
    }

    emptyNet(s, o) {
      const shooter = this.pickShooter(s);
      s.stats.shots++;
      s.stats.xg += 0.45;
      if (Math.random() < 0.45) {
        s.stats.sot++;
        this.goal(s, shooter, null, 0.45, 'в пустые ворота через всю площадку');
      } else {
        this.log('miss', `${shooter.name} перехватывает мяч и бьёт в пустые ворота — мимо!`, s, { xg: 0.45 });
      }
    }

    corner(s) {
      s.stats.corners++;
      if (Math.random() < 0.05) {
        const scorer = FM.weighted(s.onPitch, (o) => (o.slot === 'GK' ? 0 : { FW: 3, DF: 2 }[o.slot] || 1.2)).p;
        const taker = FM.weighted(s.onPitch.filter((o) => o.p !== scorer), (o) => (o.slot === 'GK' ? 0 : { UN: 3 }[o.slot] || 1)).p;
        s.stats.shots++;
        s.stats.sot++;
        s.stats.xg += 0.12;
        this.goal(s, scorer, taker, 0.12, 'после розыгрыша углового');
      }
    }

    // 6-метровый (фол в штрафной) или 10-метровый (с 6-го командного фола в тайме)
    penalty(s, o, ten, fouler) {
      const taker = s.onPitch.filter((x) => x.slot !== 'GK').sort((a, b) => (SHOOT_W[b.slot] || 0) * b.p.ovr - (SHOOT_W[a.slot] || 0) * a.p.ovr)[0].p;
      if (!fouler) fouler = FM.weighted(o.onPitch, (x) => ({ DF: 3, UN: 1.5 }[x.slot] || 0.4)).p;
      const pr = ten ? 0.55 : 0.75;
      if (ten) this.log('pen', `${o.team.name} — шестой фол в тайме! 10-метровый удар. К мячу подходит ${taker.name}…`, s);
      else {
        this.log('pen', `Пенальти! ${fouler.name} фолит в своей штрафной. 6-метровый бьёт ${taker.name}…`, s);
        if (Math.random() < 0.2) this.card(o, fouler, false);
      }
      s.stats.shots++;
      s.stats.xg += pr;
      const gk = o.gkPlayer();
      if (Math.random() < FM.clamp(pr + (taker.ovr - gk.ovr) / 200, pr - 0.15, pr + 0.13)) {
        s.stats.sot++;
        this.goal(s, taker, null, pr, ten ? 'с 10-метровой отметки' : 'с 6-метровой отметки', true);
      } else if (Math.random() < 0.65) {
        s.stats.sot++;
        o.rating[gk.id] += 0.7;
        this.log('save', `${gk.name} отражает ${ten ? '10-метровый' : '6-метровый'}! Герой!`, o);
      } else {
        s.rating[taker.id] -= 0.5;
        this.log('miss', `${taker.name} не забивает — мимо ворот!`, s);
      }
    }

    goal(s, scorer, assist, xg, how, pen) {
      s.goals++;
      s.rating[scorer.id] = (s.rating[scorer.id] || 6) + 0.8;
      if (assist) s.rating[assist.id] = (s.rating[assist.id] || 6) + 0.5;
      const o = this.other(s);
      const gk = o.gkPlayer();
      if (!o.pp) o.rating[gk.id] -= 0.28;
      for (const x of o.onPitch) if (FM.lineOf(x.slot, o.team.formation) === 'D') o.rating[x.p.id] -= 0.08;
      this.goalsList.push({ side: s === this.home ? 'h' : 'a', min: this.minuteLabel(), scorer: scorer.id, assist: assist ? assist.id : null, pen: !!pen });
      const score = `${this.home.goals}:${this.away.goals}`;
      let text = FM.pick([`ГОЛ! ${scorer.name} забивает`, `ГОООЛ! ${scorer.name} отправляет мяч в сетку`, `ГОЛ! ${scorer.name} не оставляет шансов вратарю`]);
      if (how) text += ' ' + how;
      text += assist ? ` после передачи ${assist.name}.` : '.';
      this.log('goal', `${text} ${score}`, s, { scorer: scorer.id, assist: assist ? assist.id : null, xg });
      // команда в меньшинстве после пропущенного мяча восстанавливает состав
      if (o.short) this.restore(o, 'пропущенный мяч');
    }

    discipline(s, o) {
      const press = s.tactics.press;
      if (Math.random() < 0.2 * (1 + 0.15 * (press - 1))) {
        s.stats.fouls++;
        s.fouls++;
        const fouler = FM.weighted(s.onPitch, (x) => ({ DF: 2.5, UN: 1.4, FW: 1, GK: 0.15 }[x.slot] || 1)).p;
        if (s.fouls === 5) this.log('info', `У «${s.team.name}» пятый командный фол в тайме — следующий будет пробиваться с 10 метров.`, s);
        if (s.fouls > 5) { this.penalty(o, s, true, fouler); return; }
        if (Math.random() < 0.12) { this.card(s, fouler, false); return; }
      }
      if (Math.random() < 0.0012) {
        const p = FM.weighted(s.onPitch, (x) => ({ DF: 2, GK: 0.4 }[x.slot] || 1)).p;
        this.card(s, p, true);
      }
    }

    card(s, p, red) {
      if (!s.onPitch.find((o) => o.p === p)) return;
      if (!red) {
        s.yellows[p.id] = (s.yellows[p.id] || 0) + 1;
        s.stats.yc++;
        s.rating[p.id] -= 0.3;
        if (s.yellows[p.id] === 2) {
          s.stats.rc++;
          this.log('red', `Вторая жёлтая — ${p.name} («${s.team.name}») удалён! Две минуты в меньшинстве.`, s, { pid: p.id, second: true });
          this.sendOff(s, p);
        } else {
          this.log('yellow', `Жёлтая карточка: ${p.name} (${s.team.name}).`, s, { pid: p.id });
        }
      } else {
        s.stats.rc++;
        this.log('red', `Прямая красная! ${p.name} («${s.team.name}») удалён — две минуты в меньшинстве.`, s, { pid: p.id });
        this.sendOff(s, p);
      }
    }

    // Удалённый игрок в матче больше не появится; команда играет вчетвером 2 минуты или до пропущенного гола.
    sendOff(s, p) {
      s.rating[p.id] -= 1.5;
      s.redCards = s.redCards || [];
      s.redCards.push(p.id);
      const idx = s.onPitch.findIndex((o) => o.p === p);
      let slot = s.onPitch[idx].slot;
      s.onPitch.splice(idx, 1);
      if (slot === 'GK') {
        // вратаря сразу заменяет запасной вратарь, а площадку покидает полевой
        const gk = s.bench.find((b) => b.pos === 'GK' && this.canEnter(s, b));
        const out = s.onPitch.filter((o) => o.slot !== 'GK').sort((a, b) => s.fitness[a.p.id] - s.fitness[b.p.id])[0];
        if (gk && out) {
          slot = out.slot;
          s.onPitch.splice(s.onPitch.indexOf(out), 1, { p: gk, slot: 'GK' });
          s.bench = s.bench.filter((b) => b !== gk).concat(out.p);
          this.enter(s, gk);
          this.log('sub', `${gk.name} встаёт в ворота «${s.team.name}», площадку покидает ${out.p.name}.`, s, { inId: gk.id, outId: out.p.id });
        } else if (s.onPitch.length) s.onPitch[0].slot = 'GK';
      }
      if (s.pp) s.pp = false;
      s.short = { until: this.minute + 2, slot };
      s.recalc();
    }

    restore(s, why) {
      const slot = s.short.slot;
      s.short = null;
      const inn = this.bestSub(s, slot);
      if (!inn) return;
      s.onPitch.push({ p: inn, slot });
      s.bench = s.bench.filter((b) => b !== inn);
      this.enter(s, inn);
      this.log('sub', `«${s.team.name}» снова в полном составе (${why}): на площадку выходит ${inn.name}.`, s, { inId: inn.id });
      s.recalc();
    }

    injury(s) {
      const o = FM.pick(s.onPitch);
      if (!o) return;
      const days = FM.weighted([[3, 5], [7, 3], [14, 2], [28, 1], [60, 0.4], [150, 0.15]], (x) => x[1])[0];
      const d = FM.ri(Math.ceil(days * 0.6), days);
      s.injured = s.injured || {};
      s.injured[o.p.id] = d;
      this.log('injury', `${o.p.name} получает травму и не может продолжать игру.`, s, { pid: o.p.id, days: d });
      const sub = this.bestSub(s, o.slot);
      if (sub) this.doSub(s, o.p, sub, o.slot);
      else {
        s.onPitch.splice(s.onPitch.indexOf(o), 1);
        this.log('info', `${s.team.name} остаются в меньшинстве — заменить некем.`, s);
      }
      s.recalc();
    }

    tire(s) {
      const k = 2.1 * (1 + 0.22 * (s.tactics.press - 1)) * (1 + 0.1 * (s.tactics.tempo - 1));
      const on = new Set();
      for (const o of s.onPitch) {
        on.add(o.p.id);
        const age = o.p.age;
        const a = age > 31 ? 1.2 : age < 21 ? 0.95 : 1;
        s.fitness[o.p.id] = Math.max(0, s.fitness[o.p.id] - k * a * (o.slot === 'GK' ? 0.12 : 1) * (0.7 + Math.random() * 0.6));
        s.mins[o.p.id] = (s.mins[o.p.id] || 0) + 1;
      }
      // на скамейке игроки восстанавливаются, но не выше уровня, с которым вышли на матч
      for (const p of s.bench) if (!on.has(p.id)) s.fitness[p.id] = Math.min(s.startFit[p.id], s.fitness[p.id] + 1.6);
      s.recalc();
    }

    // выйти может любой запасной, кроме травмированных и удалённых в этом матче
    canEnter(s, p) {
      return this.game.isAvailable(p) && !(s.redCards || []).includes(p.id) && !(s.injured && s.injured[p.id]) && !s.onPitch.some((o) => o.p === p);
    }

    enter(s, p) {
      s.used.add(p.id);
      if (s.rating[p.id] == null) s.rating[p.id] = 6.3;
      if (s.mins[p.id] == null) s.mins[p.id] = 0;
    }

    subValue(s, p, slot) { return p.ovr * FM.pfit(p, slot) * (0.62 + 0.38 * s.fitness[p.id] / 100); }

    bestSub(s, slot) {
      const avail = s.bench.filter((b) => this.canEnter(s, b));
      const cands = slot === 'GK' ? avail.filter((b) => b.pos === 'GK') : avail.filter((b) => b.pos !== 'GK');
      if (!cands.length) return null;
      return cands.sort((a, b) => this.subValue(s, b, slot) - this.subValue(s, a, slot))[0];
    }

    doSub(s, out, inn, slotOverride, quiet) {
      const idx = s.onPitch.findIndex((o) => o.p === out);
      if (idx < 0 || !this.canEnter(s, inn)) return false;
      const slot = slotOverride || s.onPitch[idx].slot;
      s.onPitch[idx] = { p: inn, slot };
      s.bench = s.bench.filter((b) => b !== inn).concat(out);
      this.enter(s, inn);
      s.subbedOff = s.subbedOff || [];
      if (!s.subbedOff.includes(out.id)) s.subbedOff.push(out.id);
      if (this.needUserSub === out.id) this.needUserSub = null;
      this.log('sub', quiet ? `Ротация в «${s.team.name}»: ${inn.name} вместо ${out.name}.` : `Замена в «${s.team.name}»: ${inn.name} вместо ${out.name}.`, s, { inId: inn.id, outId: out.id, rot: !!quiet });
      s.recalc();
      return true;
    }

    // Для живого матча: замена от пользователя
    userSub(outId, inId) {
      const s = this.userSide;
      if (!s) return false;
      return this.doSub(s, this.game.players[outId], this.game.players[inId]);
    }

    setUserTactics(t) {
      const s = this.userSide;
      if (!s) return;
      if ('pp' in t) {
        s.pp = !!t.pp && !s.short;
        this.log('info', s.pp ? `«${s.team.name}» выпускают пятого полевого — игра вратарём-игроком!` : `«${s.team.name}» возвращаются к игре с вратарём.`, s);
        delete t.pp;
      } else this.log('info', `${s.team.name} меняют установку на игру.`, s);
      Object.assign(s.tactics, t);
      s.recalc();
    }

    aiDecisions() {
      const m = this.minute;
      for (const s of [this.home, this.away]) {
        // ротация: уставших полевых меняют свежие запасные (у всех команд, включая команду игрока)
        if (!this.done) {
          const field = s.onPitch.filter((o) => o.slot !== 'GK').sort((a, b) => s.fitness[a.p.id] - s.fitness[b.p.id]);
          let swaps = 0;
          for (const o of field) {
            if (swaps >= 2 || s.fitness[o.p.id] > 82) break;
            const sub = this.bestSub(s, o.slot);
            if (sub && s.fitness[sub.id] > s.fitness[o.p.id] + 12 && this.subValue(s, sub, o.slot) > this.subValue(s, o.p, o.slot) * 0.96) {
              this.doSub(s, o.p, sub, o.slot, true);
              swaps++;
            }
          }
        }
        if (s === this.userSide && !this.opts.autoSubsUser) continue;
        const diff = s.goals - this.other(s).goals;
        if (this.phase === 'second' && m === 30) {
          if (diff < 0 && s.tactics.ment < 2) { s.tactics.ment++; s.recalc(); }
          if (diff > 0 && s.tactics.ment > -1) { s.tactics.ment--; s.recalc(); }
        }
        // игра вратарём-игроком в концовке при счёте −1 или −2
        const wantPP = this.phase === 'second' && m >= 2 * HALF - 4 && diff < 0 && diff >= -2 && !s.short;
        if (wantPP !== s.pp) {
          s.pp = wantPP;
          if (wantPP) this.log('info', `«${s.team.name}» выпускают пятого полевого — игра вратарём-игроком!`, s);
          s.recalc();
        }
      }
    }

    penalties() {
      const order = (s) => s.onPitch.slice().sort((a, b) => b.p.ovr * ((SHOOT_W[b.slot] || 0.3) + 1) - a.p.ovr * ((SHOOT_W[a.slot] || 0.3) + 1)).map((o) => o.p);
      const H = order(this.home), A = order(this.away);
      const res = { h: 0, a: 0, kicks: [] };
      // каждый удар — отдельное событие с текущим счётом серии: в живом матче они показываются по очереди
      const kick = (side, shooters, i, opp) => {
        const p = shooters[i % shooters.length];
        const gk = opp.gkPlayer();
        const ok = Math.random() < FM.clamp(0.72 + (p.ovr - gk.ovr) / 250, 0.58, 0.86);
        if (ok) res[side]++;
        res.kicks.push({ side, pid: p.id, ok });
        const how = ok ? 'гол' : Math.random() < 0.6 ? `${gk.name} отбивает` : 'мимо';
        this.log('pk', `${p.name} — ${how}! ${res.h}:${res.a}`, side === 'h' ? this.home : this.away, { min: '6-м', pk: { ok, h: res.h, a: res.a } });
        return ok;
      };
      this.log('pens', 'Серия 6-метровых ударов!');
      for (let i = 0; i < 5; i++) {
        kick('h', H, i, this.away);
        if (res.h > res.a + (5 - i) || res.a > res.h + (5 - i)) break;
        kick('a', A, i, this.home);
        if (res.h > res.a + (4 - i) || res.a > res.h + (4 - i)) break;
      }
      let i = 5;
      while (res.h === res.a) {
        kick('h', H, i, this.away);
        kick('a', A, i, this.home);
        i++;
      }
      this.pens = res;
      const w = res.h > res.a ? this.home : this.away;
      this.log('pens', `Серия 6-метровых: ${res.h}:${res.a}. Победа ${w.team.name}!`, w);
    }

    finish() {
      if (this.done) return;
      this.done = true;
      const hg = this.home.goals, ag = this.away.goals;
      this.log('end', `Финальная сирена! ${this.home.team.name} ${hg}:${ag} ${this.away.team.name}${this.pens ? ` (6-м. ${this.pens.h}:${this.pens.a})` : ''}.`);
      for (const s of [this.home, this.away]) {
        const o = this.other(s);
        const res = Math.sign(s.goals - o.goals) || (this.pens ? (this.winner() === s.team.id ? 0.5 : -0.5) : 0);
        for (const pid in s.rating) {
          const p = this.game.players[pid];
          let r = s.rating[pid] + res * 0.3 + FM.gauss(0, 0.3);
          if (o.goals === 0 && p && (p.pos === 'GK' || FM.GROUP[p.pos] === 'D') && (s.mins[pid] || 0) >= 20) r += 0.5;
          s.rating[pid] = Math.round(FM.clamp(r, 3, 10) * 10) / 10;
        }
      }
      const total = this.home.stats.possTicks + this.away.stats.possTicks || 1;
      this.home.stats.poss = Math.round((this.home.stats.possTicks / total) * 100);
      this.away.stats.poss = 100 - this.home.stats.poss;
    }

    winner() {
      if (!this.done) return null;
      if (this.pens) return this.pens.h > this.pens.a ? this.home.team.id : this.away.team.id;
      if (this.opts.firstLeg) {
        const h = this.home.goals + this.opts.firstLeg.awayGoals, a = this.away.goals + this.opts.firstLeg.homeGoals;
        if (h !== a) return h > a ? this.home.team.id : this.away.team.id;
      }
      if (this.home.goals === this.away.goals) return null;
      return this.home.goals > this.away.goals ? this.home.team.id : this.away.team.id;
    }

    runToEnd() {
      while (!this.done) this.step();
      return this;
    }
  }

  FM.Match = Match;
  FM.HALF = HALF;
})();
