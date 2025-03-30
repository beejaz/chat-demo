/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const B = {}, ze = [], Se = () => {
}, Ii = () => !1, $t = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xs = (e) => e.startsWith("onUpdate:"), Y = Object.assign, vs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Fi = Object.prototype.hasOwnProperty, N = (e, t) => Fi.call(e, t), O = Array.isArray, Xe = (e) => Vt(e) === "[object Map]", Sn = (e) => Vt(e) === "[object Set]", R = (e) => typeof e == "function", G = (e) => typeof e == "string", He = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", wn = (e) => (q(e) || R(e)) && R(e.then) && R(e.catch), Cn = Object.prototype.toString, Vt = (e) => Cn.call(e), Ni = (e) => Vt(e).slice(8, -1), Bt = (e) => Vt(e) === "[object Object]", Ss = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, lt = /* @__PURE__ */ ys(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ut = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Di = /-(\w)/g, ue = Ut(
  (e) => e.replace(Di, (t, s) => s ? s.toUpperCase() : "")
), Hi = /\B([A-Z])/g, fe = Ut(
  (e) => e.replace(Hi, "-$1").toLowerCase()
), Tn = Ut((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xt = Ut(
  (e) => e ? `on${Tn(e)}` : ""
), Ne = (e, t) => !Object.is(e, t), Zt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, En = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ji = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qs = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gs;
const Kt = () => Gs || (Gs = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function ws(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = G(n) ? Bi(n) : ws(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (G(e) || q(e))
    return e;
}
const Li = /;(?![^(]*\))/g, $i = /:([^]+)/, Vi = /\/\*[^]*?\*\//g;
function Bi(e) {
  const t = {};
  return e.replace(Vi, "").split(Li).forEach((s) => {
    if (s) {
      const n = s.split($i);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Cs(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = Cs(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Ui = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ki = /* @__PURE__ */ ys(Ui);
function An(e) {
  return !!e || e === "";
}
const Pn = (e) => !!(e && e.__v_isRef === !0), On = (e) => G(e) ? e : e == null ? "" : O(e) || q(e) && (e.toString === Cn || !R(e.toString)) ? Pn(e) ? On(e.value) : JSON.stringify(e, Rn, 2) : String(e), Rn = (e, t) => Pn(t) ? Rn(e, t.value) : Xe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Qt(n, r) + " =>"] = i, s),
    {}
  )
} : Sn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Qt(s))
} : He(t) ? Qt(t) : q(t) && !O(t) && !Bt(t) ? String(t) : t, Qt = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let le;
class Wi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = le, !t && le && (this.index = (le.scopes || (le.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = le;
      try {
        return le = this, t();
      } finally {
        le = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    le = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    le = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function qi() {
  return le;
}
let V;
const kt = /* @__PURE__ */ new WeakSet();
class Mn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, le && le.active && le.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, kt.has(this) && (kt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Js(this), Nn(this);
    const t = V, s = ae;
    V = this, ae = !0;
    try {
      return this.fn();
    } finally {
      Dn(this), V = t, ae = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        As(t);
      this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? kt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    cs(this) && this.run();
  }
  get dirty() {
    return cs(this);
  }
}
let In = 0, ct, ft;
function Fn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ft, ft = e;
    return;
  }
  e.next = ct, ct = e;
}
function Ts() {
  In++;
}
function Es() {
  if (--In > 0)
    return;
  if (ft) {
    let t = ft;
    for (ft = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ct; ) {
    let t = ct;
    for (ct = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Nn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Dn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), As(n), Gi(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === pt))
    return;
  e.globalVersion = pt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !cs(e)) {
    e.flags &= -3;
    return;
  }
  const s = V, n = ae;
  V = e, ae = !0;
  try {
    Nn(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ne(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    V = s, ae = n, Dn(e), e.flags &= -3;
  }
}
function As(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      As(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Gi(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ae = !0;
const jn = [];
function je() {
  jn.push(ae), ae = !1;
}
function Le() {
  const e = jn.pop();
  ae = e === void 0 ? !0 : e;
}
function Js(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let pt = 0;
class Ji {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ps {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!V || !ae || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new Ji(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, Ln(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, pt++, this.notify(t);
  }
  notify(t) {
    Ts();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Es();
    }
  }
}
function Ln(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ln(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const fs = /* @__PURE__ */ new WeakMap(), qe = Symbol(
  ""
), us = Symbol(
  ""
), gt = Symbol(
  ""
);
function X(e, t, s) {
  if (ae && V) {
    let n = fs.get(e);
    n || fs.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Ps()), i.map = n, i.key = s), i.track();
  }
}
function Ae(e, t, s, n, i, r) {
  const o = fs.get(e);
  if (!o) {
    pt++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Ts(), t === "clear")
    o.forEach(c);
  else {
    const u = O(e), d = u && Ss(s);
    if (u && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === gt || !He(w) && w >= a) && c(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && c(o.get(s)), d && c(o.get(gt)), t) {
        case "add":
          u ? d && c(o.get("length")) : (c(o.get(qe)), Xe(e) && c(o.get(us)));
          break;
        case "delete":
          u || (c(o.get(qe)), Xe(e) && c(o.get(us)));
          break;
        case "set":
          Xe(e) && c(o.get(qe));
          break;
      }
  }
  Es();
}
function Je(e) {
  const t = D(e);
  return t === e ? t : (X(t, "iterate", gt), he(e) ? t : t.map(ee));
}
function Os(e) {
  return X(e = D(e), "iterate", gt), e;
}
const Yi = {
  __proto__: null,
  [Symbol.iterator]() {
    return es(this, Symbol.iterator, ee);
  },
  concat(...e) {
    return Je(this).concat(
      ...e.map((t) => O(t) ? Je(t) : t)
    );
  },
  entries() {
    return es(this, "entries", (e) => (e[1] = ee(e[1]), e));
  },
  every(e, t) {
    return Ce(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ce(this, "filter", e, t, (s) => s.map(ee), arguments);
  },
  find(e, t) {
    return Ce(this, "find", e, t, ee, arguments);
  },
  findIndex(e, t) {
    return Ce(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ce(this, "findLast", e, t, ee, arguments);
  },
  findLastIndex(e, t) {
    return Ce(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ce(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ts(this, "includes", e);
  },
  indexOf(...e) {
    return ts(this, "indexOf", e);
  },
  join(e) {
    return Je(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ce(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return it(this, "pop");
  },
  push(...e) {
    return it(this, "push", e);
  },
  reduce(e, ...t) {
    return Ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ys(this, "reduceRight", e, t);
  },
  shift() {
    return it(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ce(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return it(this, "splice", e);
  },
  toReversed() {
    return Je(this).toReversed();
  },
  toSorted(e) {
    return Je(this).toSorted(e);
  },
  toSpliced(...e) {
    return Je(this).toSpliced(...e);
  },
  unshift(...e) {
    return it(this, "unshift", e);
  },
  values() {
    return es(this, "values", ee);
  }
};
function es(e, t, s) {
  const n = Os(e), i = n[t]();
  return n !== e && !he(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = s(r.value)), r;
  }), i;
}
const zi = Array.prototype;
function Ce(e, t, s, n, i, r) {
  const o = Os(e), c = o !== e && !he(e), u = o[t];
  if (u !== zi[t]) {
    const p = u.apply(e, r);
    return c ? ee(p) : p;
  }
  let d = s;
  o !== e && (c ? d = function(p, w) {
    return s.call(this, ee(p), w, e);
  } : s.length > 2 && (d = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = u.call(o, d, n);
  return c && i ? i(a) : a;
}
function Ys(e, t, s, n) {
  const i = Os(e);
  let r = s;
  return i !== e && (he(e) ? s.length > 3 && (r = function(o, c, u) {
    return s.call(this, o, c, u, e);
  }) : r = function(o, c, u) {
    return s.call(this, o, ee(c), u, e);
  }), i[t](r, ...n);
}
function ts(e, t, s) {
  const n = D(e);
  X(n, "iterate", gt);
  const i = n[t](...s);
  return (i === -1 || i === !1) && Fs(s[0]) ? (s[0] = D(s[0]), n[t](...s)) : i;
}
function it(e, t, s = []) {
  je(), Ts();
  const n = D(e)[t].apply(e, s);
  return Es(), Le(), n;
}
const Xi = /* @__PURE__ */ ys("__proto__,__v_isRef,__isVue"), $n = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function Zi(e) {
  He(e) || (e = String(e));
  const t = D(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class Vn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? lr : Wn : r ? Kn : Un).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = O(t);
    if (!i) {
      let u;
      if (o && (u = Yi[s]))
        return u;
      if (s === "hasOwnProperty")
        return Zi;
    }
    const c = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Z(t) ? t : n
    );
    return (He(s) ? $n.has(s) : Xi(s)) || (i || X(t, "get", s), r) ? c : Z(c) ? o && Ss(s) ? c : c.value : q(c) ? i ? qn(c) : Ms(c) : c;
  }
}
class Bn extends Vn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    if (!this._isShallow) {
      const u = Ge(r);
      if (!he(n) && !Ge(n) && (r = D(r), n = D(n)), !O(t) && Z(r) && !Z(n))
        return u ? !1 : (r.value = n, !0);
    }
    const o = O(t) && Ss(s) ? Number(s) < t.length : N(t, s), c = Reflect.set(
      t,
      s,
      n,
      Z(t) ? t : i
    );
    return t === D(i) && (o ? Ne(n, r) && Ae(t, "set", s, n) : Ae(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = N(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ae(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!He(s) || !$n.has(s)) && X(t, "has", s), n;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      O(t) ? "length" : qe
    ), Reflect.ownKeys(t);
  }
}
class Qi extends Vn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const ki = /* @__PURE__ */ new Bn(), er = /* @__PURE__ */ new Qi(), tr = /* @__PURE__ */ new Bn(!0);
const as = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function sr(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = D(i), o = Xe(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, d = i[e](...n), a = s ? as : t ? hs : ee;
    return !t && X(
      r,
      "iterate",
      u ? us : qe
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = d.next();
        return w ? { value: p, done: w } : {
          value: c ? [a(p[0]), a(p[1])] : a(p),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function nr(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = D(r), c = D(i);
      e || (Ne(i, c) && X(o, "get", i), X(o, "get", c));
      const { has: u } = At(o), d = t ? as : e ? hs : ee;
      if (u.call(o, i))
        return d(r.get(i));
      if (u.call(o, c))
        return d(r.get(c));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(D(i), "iterate", qe), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, o = D(r), c = D(i);
      return e || (Ne(i, c) && X(o, "has", i), X(o, "has", c)), i === c ? r.has(i) : r.has(i) || r.has(c);
    },
    forEach(i, r) {
      const o = this, c = o.__v_raw, u = D(c), d = t ? as : e ? hs : ee;
      return !e && X(u, "iterate", qe), c.forEach((a, p) => i.call(r, d(a), d(p), o));
    }
  };
  return Y(
    s,
    e ? {
      add: Pt("add"),
      set: Pt("set"),
      delete: Pt("delete"),
      clear: Pt("clear")
    } : {
      add(i) {
        !t && !he(i) && !Ge(i) && (i = D(i));
        const r = D(this);
        return At(r).has.call(r, i) || (r.add(i), Ae(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !he(r) && !Ge(r) && (r = D(r));
        const o = D(this), { has: c, get: u } = At(o);
        let d = c.call(o, i);
        d || (i = D(i), d = c.call(o, i));
        const a = u.call(o, i);
        return o.set(i, r), d ? Ne(r, a) && Ae(o, "set", i, r) : Ae(o, "add", i, r), this;
      },
      delete(i) {
        const r = D(this), { has: o, get: c } = At(r);
        let u = o.call(r, i);
        u || (i = D(i), u = o.call(r, i)), c && c.call(r, i);
        const d = r.delete(i);
        return u && Ae(r, "delete", i, void 0), d;
      },
      clear() {
        const i = D(this), r = i.size !== 0, o = i.clear();
        return r && Ae(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = sr(i, e, t);
  }), s;
}
function Rs(e, t) {
  const s = nr(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    N(s, i) && i in n ? s : n,
    i,
    r
  );
}
const ir = {
  get: /* @__PURE__ */ Rs(!1, !1)
}, rr = {
  get: /* @__PURE__ */ Rs(!1, !0)
}, or = {
  get: /* @__PURE__ */ Rs(!0, !1)
};
const Un = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap();
function cr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function fr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cr(Ni(e));
}
function Ms(e) {
  return Ge(e) ? e : Is(
    e,
    !1,
    ki,
    ir,
    Un
  );
}
function ur(e) {
  return Is(
    e,
    !1,
    tr,
    rr,
    Kn
  );
}
function qn(e) {
  return Is(
    e,
    !0,
    er,
    or,
    Wn
  );
}
function Is(e, t, s, n, i) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = fr(e);
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, c), c;
}
function ut(e) {
  return Ge(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function he(e) {
  return !!(e && e.__v_isShallow);
}
function Fs(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function ar(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && En(e, "__v_skip", !0), e;
}
const ee = (e) => q(e) ? Ms(e) : e, hs = (e) => q(e) ? qn(e) : e;
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function hr(e) {
  return dr(e, !1);
}
function dr(e, t) {
  return Z(e) ? e : new pr(e, t);
}
class pr {
  constructor(t, s) {
    this.dep = new Ps(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : D(t), this._value = s ? t : ee(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || he(t) || Ge(t);
    t = n ? t : D(t), Ne(t, s) && (this._rawValue = t, this._value = n ? t : ee(t), this.dep.trigger());
  }
}
function Gn(e) {
  return Z(e) ? e.value : e;
}
const gr = {
  get: (e, t, s) => t === "__v_raw" ? e : Gn(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return Z(i) && !Z(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Jn(e) {
  return ut(e) ? e : new Proxy(e, gr);
}
class _r {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ps(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return Fn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Hn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function mr(e, t, s = !1) {
  let n, i;
  return R(e) ? n = e : (n = e.get, i = e.set), new _r(n, i, s);
}
const Ot = {}, Ft = /* @__PURE__ */ new WeakMap();
let We;
function br(e, t = !1, s = We) {
  if (s) {
    let n = Ft.get(s);
    n || Ft.set(s, n = []), n.push(e);
  }
}
function yr(e, t, s = B) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: c, call: u } = s, d = (A) => i ? A : he(A) || i === !1 || i === 0 ? Fe(A, 1) : Fe(A);
  let a, p, w, C, F = !1, I = !1;
  if (Z(e) ? (p = () => e.value, F = he(e)) : ut(e) ? (p = () => d(e), F = !0) : O(e) ? (I = !0, F = e.some((A) => ut(A) || he(A)), p = () => e.map((A) => {
    if (Z(A))
      return A.value;
    if (ut(A))
      return d(A);
    if (R(A))
      return u ? u(A, 2) : A();
  })) : R(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (w) {
      je();
      try {
        w();
      } finally {
        Le();
      }
    }
    const A = We;
    We = a;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      We = A;
    }
  } : p = Se, t && i) {
    const A = p, J = i === !0 ? 1 / 0 : i;
    p = () => Fe(A(), J);
  }
  const z = qi(), j = () => {
    a.stop(), z && z.active && vs(z.effects, a);
  };
  if (r && t) {
    const A = t;
    t = (...J) => {
      A(...J), j();
    };
  }
  let K = I ? new Array(e.length).fill(Ot) : Ot;
  const W = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const J = a.run();
        if (i || F || (I ? J.some((Oe, de) => Ne(Oe, K[de])) : Ne(J, K))) {
          w && w();
          const Oe = We;
          We = a;
          try {
            const de = [
              J,
              // pass undefined as the old value when it's changed for the first time
              K === Ot ? void 0 : I && K[0] === Ot ? [] : K,
              C
            ];
            u ? u(t, 3, de) : (
              // @ts-expect-error
              t(...de)
            ), K = J;
          } finally {
            We = Oe;
          }
        }
      } else
        a.run();
  };
  return c && c(W), a = new Mn(p), a.scheduler = o ? () => o(W, !1) : W, C = (A) => br(A, !1, a), w = a.onStop = () => {
    const A = Ft.get(a);
    if (A) {
      if (u)
        u(A, 4);
      else
        for (const J of A) J();
      Ft.delete(a);
    }
  }, t ? n ? W(!0) : K = a.run() : o ? o(W.bind(null, !0), !0) : a.run(), j.pause = a.pause.bind(a), j.resume = a.resume.bind(a), j.stop = j, j;
}
function Fe(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, Z(e))
    Fe(e.value, t, s);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      Fe(e[n], t, s);
  else if (Sn(e) || Xe(e))
    e.forEach((n) => {
      Fe(n, t, s);
    });
  else if (Bt(e)) {
    for (const n in e)
      Fe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Fe(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Wt(i, t, s);
  }
}
function we(e, t, s, n) {
  if (R(e)) {
    const i = xt(e, t, s, n);
    return i && wn(i) && i.catch((r) => {
      Wt(r, t, s);
    }), i;
  }
  if (O(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(we(e[r], t, s, n));
    return i;
  }
}
function Wt(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || B;
  if (t) {
    let c = t.parent;
    const u = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      je(), xt(r, null, 10, [
        e,
        u,
        d
      ]), Le();
      return;
    }
  }
  xr(e, s, i, n, o);
}
function xr(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const te = [];
let ye = -1;
const Ze = [];
let Me = null, Ye = 0;
const Yn = /* @__PURE__ */ Promise.resolve();
let Nt = null;
function zn(e) {
  const t = Nt || Yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vr(e) {
  let t = ye + 1, s = te.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = te[n], r = _t(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ns(e) {
  if (!(e.flags & 1)) {
    const t = _t(e), s = te[te.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _t(s) ? te.push(e) : te.splice(vr(t), 0, e), e.flags |= 1, Xn();
  }
}
function Xn() {
  Nt || (Nt = Yn.then(Qn));
}
function Sr(e) {
  O(e) ? Ze.push(...e) : Me && e.id === -1 ? Me.splice(Ye + 1, 0, e) : e.flags & 1 || (Ze.push(e), e.flags |= 1), Xn();
}
function zs(e, t, s = ye + 1) {
  for (; s < te.length; s++) {
    const n = te[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      te.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zn(e) {
  if (Ze.length) {
    const t = [...new Set(Ze)].sort(
      (s, n) => _t(s) - _t(n)
    );
    if (Ze.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, Ye = 0; Ye < Me.length; Ye++) {
      const s = Me[Ye];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Me = null, Ye = 0;
  }
}
const _t = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qn(e) {
  try {
    for (ye = 0; ye < te.length; ye++) {
      const t = te[ye];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ye < te.length; ye++) {
      const t = te[ye];
      t && (t.flags &= -2);
    }
    ye = -1, te.length = 0, Zn(), Nt = null, (te.length || Ze.length) && Qn();
  }
}
let ve = null, kn = null;
function Dt(e) {
  const t = ve;
  return ve = e, kn = e && e.type.__scopeId || null, t;
}
function wr(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && rn(-1);
    const r = Dt(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Dt(r), n._d && rn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ue(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[n];
    u && (je(), we(u, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Le());
  }
}
const Cr = Symbol("_vte"), Tr = (e) => e.__isTeleport;
function Ds(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ds(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ei(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Y({ name: e.name }, t, { setup: e })
  ) : e;
}
function ti(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ht(e, t, s, n, i = !1) {
  if (O(e)) {
    e.forEach(
      (F, I) => Ht(
        F,
        t && (O(t) ? t[I] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (at(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ht(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Ls(n.component) : n.el, o = i ? null : r, { i: c, r: u } = e, d = t && t.r, a = c.refs === B ? c.refs = {} : c.refs, p = c.setupState, w = D(p), C = p === B ? () => !1 : (F) => N(w, F);
  if (d != null && d !== u && (G(d) ? (a[d] = null, C(d) && (p[d] = null)) : Z(d) && (d.value = null)), R(u))
    xt(u, c, 12, [o, a]);
  else {
    const F = G(u), I = Z(u);
    if (F || I) {
      const z = () => {
        if (e.f) {
          const j = F ? C(u) ? p[u] : a[u] : u.value;
          i ? O(j) && vs(j, r) : O(j) ? j.includes(r) || j.push(r) : F ? (a[u] = [r], C(u) && (p[u] = a[u])) : (u.value = [r], e.k && (a[e.k] = u.value));
        } else F ? (a[u] = o, C(u) && (p[u] = o)) : I && (u.value = o, e.k && (a[e.k] = o));
      };
      o ? (z.id = -1, oe(z, s)) : z();
    }
  }
}
Kt().requestIdleCallback;
Kt().cancelIdleCallback;
const at = (e) => !!e.type.__asyncLoader, si = (e) => e.type.__isKeepAlive;
function Er(e, t) {
  ni(e, "a", t);
}
function Ar(e, t) {
  ni(e, "da", t);
}
function ni(e, t, s = se) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (qt(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      si(i.parent.vnode) && Pr(n, t, s, i), i = i.parent;
  }
}
function Pr(e, t, s, n) {
  const i = qt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ii(() => {
    vs(n[t], i);
  }, s);
}
function qt(e, t, s = se, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      je();
      const c = vt(s), u = we(t, s, e, o);
      return c(), Le(), u;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const Pe = (e) => (t, s = se) => {
  (!yt || e === "sp") && qt(e, (...n) => t(...n), s);
}, Or = Pe("bm"), Rr = Pe("m"), Mr = Pe(
  "bu"
), Ir = Pe("u"), Fr = Pe(
  "bum"
), ii = Pe("um"), Nr = Pe(
  "sp"
), Dr = Pe("rtg"), Hr = Pe("rtc");
function jr(e, t = se) {
  qt("ec", e, t);
}
const Lr = Symbol.for("v-ndc"), ds = (e) => e ? Ei(e) ? Ls(e) : ds(e.parent) : null, ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => oi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ns(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zn.bind(e.proxy)),
    $watch: (e) => oo.bind(e)
  })
), ss = (e, t) => e !== B && !e.__isScriptSetup && N(e, t), $r = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: c, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (ss(n, t))
          return o[t] = 1, n[t];
        if (i !== B && N(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && N(d, t)
        )
          return o[t] = 3, r[t];
        if (s !== B && N(s, t))
          return o[t] = 4, s[t];
        ps && (o[t] = 0);
      }
    }
    const a = ht[t];
    let p, w;
    if (a)
      return t === "$attrs" && X(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== B && N(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      w = u.config.globalProperties, N(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return ss(i, t) ? (i[t] = s, !0) : n !== B && N(n, t) ? (n[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, propsOptions: r }
  }, o) {
    let c;
    return !!s[o] || e !== B && N(e, o) || ss(t, o) || (c = r[0]) && N(c, o) || N(n, o) || N(ht, o) || N(i.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Xs(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ps = !0;
function Vr(e) {
  const t = oi(e), s = e.proxy, n = e.ctx;
  ps = !1, t.beforeCreate && Zs(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: C,
    updated: F,
    activated: I,
    deactivated: z,
    beforeDestroy: j,
    beforeUnmount: K,
    destroyed: W,
    unmounted: A,
    render: J,
    renderTracked: Oe,
    renderTriggered: de,
    errorCaptured: Re,
    serverPrefetch: St,
    // public API
    expose: $e,
    inheritAttrs: et,
    // assets
    components: wt,
    directives: Ct,
    filters: Yt
  } = t;
  if (d && Br(d, n, null), o)
    for (const U in o) {
      const L = o[U];
      R(L) && (n[U] = L.bind(s));
    }
  if (i) {
    const U = i.call(s, s);
    q(U) && (e.data = Ms(U));
  }
  if (ps = !0, r)
    for (const U in r) {
      const L = r[U], Ve = R(L) ? L.bind(s, s) : R(L.get) ? L.get.bind(s, s) : Se, Tt = !R(L) && R(L.set) ? L.set.bind(s) : Se, Be = Mo({
        get: Ve,
        set: Tt
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (pe) => Be.value = pe
      });
    }
  if (c)
    for (const U in c)
      ri(c[U], n, s, U);
  if (u) {
    const U = R(u) ? u.call(s) : u;
    Reflect.ownKeys(U).forEach((L) => {
      Jr(L, U[L]);
    });
  }
  a && Zs(a, e, "c");
  function Q(U, L) {
    O(L) ? L.forEach((Ve) => U(Ve.bind(s))) : L && U(L.bind(s));
  }
  if (Q(Or, p), Q(Rr, w), Q(Mr, C), Q(Ir, F), Q(Er, I), Q(Ar, z), Q(jr, Re), Q(Hr, Oe), Q(Dr, de), Q(Fr, K), Q(ii, A), Q(Nr, St), O($e))
    if ($e.length) {
      const U = e.exposed || (e.exposed = {});
      $e.forEach((L) => {
        Object.defineProperty(U, L, {
          get: () => s[L],
          set: (Ve) => s[L] = Ve
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Se && (e.render = J), et != null && (e.inheritAttrs = et), wt && (e.components = wt), Ct && (e.directives = Ct), St && ti(e);
}
function Br(e, t, s = Se) {
  O(e) && (e = gs(e));
  for (const n in e) {
    const i = e[n];
    let r;
    q(i) ? "default" in i ? r = Rt(
      i.from || n,
      i.default,
      !0
    ) : r = Rt(i.from || n) : r = Rt(i), Z(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Zs(e, t, s) {
  we(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ri(e, t, s, n) {
  let i = n.includes(".") ? xi(s, n) : () => s[n];
  if (G(e)) {
    const r = t[e];
    R(r) && is(i, r);
  } else if (R(e))
    is(i, e.bind(s));
  else if (q(e))
    if (O(e))
      e.forEach((r) => ri(r, t, s, n));
    else {
      const r = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(r) && is(i, r, e);
    }
}
function oi(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !s && !n ? u = t : (u = {}, i.length && i.forEach(
    (d) => jt(u, d, o, !0)
  ), jt(u, t, o)), q(t) && r.set(t, u), u;
}
function jt(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && jt(e, r, s, !0), i && i.forEach(
    (o) => jt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = Ur[o] || s && s[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Ur = {
  data: Qs,
  props: ks,
  emits: ks,
  // objects
  methods: ot,
  computed: ot,
  // lifecycle
  beforeCreate: k,
  created: k,
  beforeMount: k,
  mounted: k,
  beforeUpdate: k,
  updated: k,
  beforeDestroy: k,
  beforeUnmount: k,
  destroyed: k,
  unmounted: k,
  activated: k,
  deactivated: k,
  errorCaptured: k,
  serverPrefetch: k,
  // assets
  components: ot,
  directives: ot,
  // watch
  watch: Wr,
  // provide / inject
  provide: Qs,
  inject: Kr
};
function Qs(e, t) {
  return t ? e ? function() {
    return Y(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kr(e, t) {
  return ot(gs(e), gs(t));
}
function gs(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function k(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ks(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t != null ? t : {})
  ) : t;
}
function Wr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Y(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = k(e[n], t[n]);
  return s;
}
function li() {
  return {
    app: null,
    config: {
      isNativeTag: Ii,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let qr = 0;
function Gr(e, t) {
  return function(n, i = null) {
    R(n) || (n = Y({}, n)), i != null && !q(i) && (i = null);
    const r = li(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const d = r.app = {
      _uid: qr++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Io,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && R(a.install) ? (o.add(a), a.install(d, ...p)) : R(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (r.components[a] = p, d) : r.components[a];
      },
      directive(a, p) {
        return p ? (r.directives[a] = p, d) : r.directives[a];
      },
      mount(a, p, w) {
        if (!u) {
          const C = d._ceVNode || De(n, i);
          return C.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(C, a, w), u = !0, d._container = a, a.__vue_app__ = d, Ls(C.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        u && (we(
          c,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return r.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = Qe;
        Qe = d;
        try {
          return a();
        } finally {
          Qe = p;
        }
      }
    };
    return d;
  };
}
let Qe = null;
function Jr(e, t) {
  if (se) {
    let s = se.provides;
    const n = se.parent && se.parent.provides;
    n === s && (s = se.provides = Object.create(n)), s[e] = t;
  }
}
function Rt(e, t, s = !1) {
  const n = se || ve;
  if (n || Qe) {
    const i = Qe ? Qe._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
const ci = {}, fi = () => Object.create(ci), ui = (e) => Object.getPrototypeOf(e) === ci;
function Yr(e, t, s, n = !1) {
  const i = {}, r = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ai(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : ur(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function zr(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = D(i), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (Gt(e.emitsOptions, w))
          continue;
        const C = t[w];
        if (u)
          if (N(r, w))
            C !== r[w] && (r[w] = C, d = !0);
          else {
            const F = ue(w);
            i[F] = _s(
              u,
              c,
              F,
              C,
              e,
              !1
            );
          }
        else
          C !== r[w] && (r[w] = C, d = !0);
      }
    }
  } else {
    ai(e, t, i, r) && (d = !0);
    let a;
    for (const p in c)
      (!t || // for camelCase
      !N(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = fe(p)) === p || !N(t, a))) && (u ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (i[p] = _s(
        u,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== c)
      for (const p in r)
        (!t || !N(t, p)) && (delete r[p], d = !0);
  }
  d && Ae(e.attrs, "set", "");
}
function ai(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (lt(u))
        continue;
      const d = t[u];
      let a;
      i && N(i, a = ue(u)) ? !r || !r.includes(a) ? s[a] = d : (c || (c = {}))[a] = d : Gt(e.emitsOptions, u) || (!(u in n) || d !== n[u]) && (n[u] = d, o = !0);
    }
  if (r) {
    const u = D(s), d = c || B;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      s[p] = _s(
        i,
        u,
        p,
        d[p],
        e,
        !N(d, p)
      );
    }
  }
  return o;
}
function _s(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const c = N(o, "default");
    if (c && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && R(u)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const a = vt(i);
          n = d[s] = u.call(
            null,
            t
          ), a();
        }
      } else
        n = u;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === fe(s)) && (n = !0));
  }
  return n;
}
const Xr = /* @__PURE__ */ new WeakMap();
function hi(e, t, s = !1) {
  const n = s ? Xr : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const a = (p) => {
      u = !0;
      const [w, C] = hi(p, t, !0);
      Y(o, w), C && c.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !u)
    return q(e) && n.set(e, ze), ze;
  if (O(r))
    for (let a = 0; a < r.length; a++) {
      const p = ue(r[a]);
      en(p) && (o[p] = B);
    }
  else if (r)
    for (const a in r) {
      const p = ue(a);
      if (en(p)) {
        const w = r[a], C = o[p] = O(w) || R(w) ? { type: w } : Y({}, w), F = C.type;
        let I = !1, z = !0;
        if (O(F))
          for (let j = 0; j < F.length; ++j) {
            const K = F[j], W = R(K) && K.name;
            if (W === "Boolean") {
              I = !0;
              break;
            } else W === "String" && (z = !1);
          }
        else
          I = R(F) && F.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = I, C[
          1
          /* shouldCastTrue */
        ] = z, (I || N(C, "default")) && c.push(p);
      }
    }
  const d = [o, c];
  return q(e) && n.set(e, d), d;
}
function en(e) {
  return e[0] !== "$" && !lt(e);
}
const di = (e) => e[0] === "_" || e === "$stable", Hs = (e) => O(e) ? e.map(xe) : [xe(e)], Zr = (e, t, s) => {
  if (t._n)
    return t;
  const n = wr((...i) => Hs(t(...i)), s);
  return n._c = !1, n;
}, pi = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (di(i)) continue;
    const r = e[i];
    if (R(r))
      t[i] = Zr(i, r, n);
    else if (r != null) {
      const o = Hs(r);
      t[i] = () => o;
    }
  }
}, gi = (e, t) => {
  const s = Hs(t);
  e.slots.default = () => s;
}, _i = (e, t, s) => {
  for (const n in t)
    (s || n !== "_") && (e[n] = t[n]);
}, Qr = (e, t, s) => {
  const n = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (_i(n, t, s), s && En(n, "_", i, !0)) : pi(t, n);
  } else t && gi(e, t);
}, kr = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = B;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? r = !1 : _i(i, t, s) : (r = !t.$stable, pi(t, i)), o = t;
  } else t && (gi(e, t), o = { default: 1 });
  if (r)
    for (const c in i)
      !di(c) && o[c] == null && delete i[c];
}, oe = po;
function eo(e) {
  return to(e);
}
function to(e, t) {
  const s = Kt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: C = Se,
    insertStaticContent: F
  } = e, I = (l, f, h, m = null, g = null, _ = null, v = void 0, x = null, y = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !rt(l, f) && (m = Et(l), pe(l, g, _, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: S } = f;
    switch (b) {
      case Jt:
        z(l, f, h, m);
        break;
      case mt:
        j(l, f, h, m);
        break;
      case rs:
        l == null && K(f, h, m, v);
        break;
      case Ee:
        wt(
          l,
          f,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        );
        break;
      default:
        S & 1 ? J(
          l,
          f,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        ) : S & 6 ? Ct(
          l,
          f,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        ) : (S & 64 || S & 128) && b.process(
          l,
          f,
          h,
          m,
          g,
          _,
          v,
          x,
          y,
          st
        );
    }
    E != null && g && Ht(E, l && l.ref, _, f || l, !f);
  }, z = (l, f, h, m) => {
    if (l == null)
      n(
        f.el = c(f.children),
        h,
        m
      );
    else {
      const g = f.el = l.el;
      f.children !== l.children && d(g, f.children);
    }
  }, j = (l, f, h, m) => {
    l == null ? n(
      f.el = u(f.children || ""),
      h,
      m
    ) : f.el = l.el;
  }, K = (l, f, h, m) => {
    [l.el, l.anchor] = F(
      l.children,
      f,
      h,
      m,
      l.el,
      l.anchor
    );
  }, W = ({ el: l, anchor: f }, h, m) => {
    let g;
    for (; l && l !== f; )
      g = w(l), n(l, h, m), l = g;
    n(f, h, m);
  }, A = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = w(l), i(l), l = h;
    i(f);
  }, J = (l, f, h, m, g, _, v, x, y) => {
    f.type === "svg" ? v = "svg" : f.type === "math" && (v = "mathml"), l == null ? Oe(
      f,
      h,
      m,
      g,
      _,
      v,
      x,
      y
    ) : St(
      l,
      f,
      g,
      _,
      v,
      x,
      y
    );
  }, Oe = (l, f, h, m, g, _, v, x) => {
    let y, b;
    const { props: E, shapeFlag: S, transition: T, dirs: P } = l;
    if (y = l.el = o(
      l.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(y, l.children) : S & 16 && Re(
      l.children,
      y,
      null,
      m,
      g,
      ns(l, _),
      v,
      x
    ), P && Ue(l, null, m, "created"), de(y, l, l.scopeId, v, m), E) {
      for (const $ in E)
        $ !== "value" && !lt($) && r(y, $, null, E[$], _, m);
      "value" in E && r(y, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && be(b, m, l);
    }
    P && Ue(l, null, m, "beforeMount");
    const M = so(g, T);
    M && T.beforeEnter(y), n(y, f, h), ((b = E && E.onVnodeMounted) || M || P) && oe(() => {
      b && be(b, m, l), M && T.enter(y), P && Ue(l, null, m, "mounted");
    }, g);
  }, de = (l, f, h, m, g) => {
    if (h && C(l, h), m)
      for (let _ = 0; _ < m.length; _++)
        C(l, m[_]);
    if (g) {
      let _ = g.subTree;
      if (f === _ || Si(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const v = g.vnode;
        de(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, Re = (l, f, h, m, g, _, v, x, y = 0) => {
    for (let b = y; b < l.length; b++) {
      const E = l[b] = x ? Ie(l[b]) : xe(l[b]);
      I(
        null,
        E,
        f,
        h,
        m,
        g,
        _,
        v,
        x
      );
    }
  }, St = (l, f, h, m, g, _, v) => {
    const x = f.el = l.el;
    let { patchFlag: y, dynamicChildren: b, dirs: E } = f;
    y |= l.patchFlag & 16;
    const S = l.props || B, T = f.props || B;
    let P;
    if (h && Ke(h, !1), (P = T.onVnodeBeforeUpdate) && be(P, h, f, l), E && Ue(f, l, h, "beforeUpdate"), h && Ke(h, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(x, ""), b ? $e(
      l.dynamicChildren,
      b,
      x,
      h,
      m,
      ns(f, g),
      _
    ) : v || L(
      l,
      f,
      x,
      null,
      h,
      m,
      ns(f, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        et(x, S, T, h, g);
      else if (y & 2 && S.class !== T.class && r(x, "class", null, T.class, g), y & 4 && r(x, "style", S.style, T.style, g), y & 8) {
        const M = f.dynamicProps;
        for (let $ = 0; $ < M.length; $++) {
          const H = M[$], ie = S[H], ne = T[H];
          (ne !== ie || H === "value") && r(x, H, ie, ne, g, h);
        }
      }
      y & 1 && l.children !== f.children && a(x, f.children);
    } else !v && b == null && et(x, S, T, h, g);
    ((P = T.onVnodeUpdated) || E) && oe(() => {
      P && be(P, h, f, l), E && Ue(f, l, h, "updated");
    }, m);
  }, $e = (l, f, h, m, g, _, v) => {
    for (let x = 0; x < f.length; x++) {
      const y = l[x], b = f[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rt(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      I(
        y,
        b,
        E,
        null,
        m,
        g,
        _,
        v,
        !0
      );
    }
  }, et = (l, f, h, m, g) => {
    if (f !== h) {
      if (f !== B)
        for (const _ in f)
          !lt(_) && !(_ in h) && r(
            l,
            _,
            f[_],
            null,
            g,
            m
          );
      for (const _ in h) {
        if (lt(_)) continue;
        const v = h[_], x = f[_];
        v !== x && _ !== "value" && r(l, _, x, v, g, m);
      }
      "value" in h && r(l, "value", f.value, h.value, g);
    }
  }, wt = (l, f, h, m, g, _, v, x, y) => {
    const b = f.el = l ? l.el : c(""), E = f.anchor = l ? l.anchor : c("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: P } = f;
    P && (x = x ? x.concat(P) : P), l == null ? (n(b, h, m), n(E, h, m), Re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      E,
      g,
      _,
      v,
      x,
      y
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? ($e(
      l.dynamicChildren,
      T,
      h,
      g,
      _,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || g && f === g.subTree) && mi(
      l,
      f,
      !0
      /* shallow */
    )) : L(
      l,
      f,
      h,
      E,
      g,
      _,
      v,
      x,
      y
    );
  }, Ct = (l, f, h, m, g, _, v, x, y) => {
    f.slotScopeIds = x, l == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      h,
      m,
      v,
      y
    ) : Yt(
      f,
      h,
      m,
      g,
      _,
      v,
      y
    ) : Vs(l, f, y);
  }, Yt = (l, f, h, m, g, _, v) => {
    const x = l.component = To(
      l,
      m,
      g
    );
    if (si(l) && (x.ctx.renderer = st), Eo(x, !1, v), x.asyncDep) {
      if (g && g.registerDep(x, Q, v), !l.el) {
        const y = x.subTree = De(mt);
        j(null, y, f, h);
      }
    } else
      Q(
        x,
        l,
        f,
        h,
        g,
        _,
        v
      );
  }, Vs = (l, f, h) => {
    const m = f.component = l.component;
    if (ao(l, f, h))
      if (m.asyncDep && !m.asyncResolved) {
        U(m, f, h);
        return;
      } else
        m.next = f, m.update();
    else
      f.el = l.el, m.vnode = f;
  }, Q = (l, f, h, m, g, _, v) => {
    const x = () => {
      if (l.isMounted) {
        let { next: S, bu: T, u: P, parent: M, vnode: $ } = l;
        {
          const _e = bi(l);
          if (_e) {
            S && (S.el = $.el, U(l, S, v)), _e.asyncDep.then(() => {
              l.isUnmounted || x();
            });
            return;
          }
        }
        let H = S, ie;
        Ke(l, !1), S ? (S.el = $.el, U(l, S, v)) : S = $, T && Zt(T), (ie = S.props && S.props.onVnodeBeforeUpdate) && be(ie, M, S, $), Ke(l, !0);
        const ne = sn(l), ge = l.subTree;
        l.subTree = ne, I(
          ge,
          ne,
          // parent may have changed if it's in a teleport
          p(ge.el),
          // anchor may have changed if it's in a fragment
          Et(ge),
          l,
          g,
          _
        ), S.el = ne.el, H === null && ho(l, ne.el), P && oe(P, g), (ie = S.props && S.props.onVnodeUpdated) && oe(
          () => be(ie, M, S, $),
          g
        );
      } else {
        let S;
        const { el: T, props: P } = f, { bm: M, m: $, parent: H, root: ie, type: ne } = l, ge = at(f);
        Ke(l, !1), M && Zt(M), !ge && (S = P && P.onVnodeBeforeMount) && be(S, H, f), Ke(l, !0);
        {
          ie.ce && ie.ce._injectChildStyle(ne);
          const _e = l.subTree = sn(l);
          I(
            null,
            _e,
            h,
            m,
            l,
            g,
            _
          ), f.el = _e.el;
        }
        if ($ && oe($, g), !ge && (S = P && P.onVnodeMounted)) {
          const _e = f;
          oe(
            () => be(S, H, _e),
            g
          );
        }
        (f.shapeFlag & 256 || H && at(H.vnode) && H.vnode.shapeFlag & 256) && l.a && oe(l.a, g), l.isMounted = !0, f = h = m = null;
      }
    };
    l.scope.on();
    const y = l.effect = new Mn(x);
    l.scope.off();
    const b = l.update = y.run.bind(y), E = l.job = y.runIfDirty.bind(y);
    E.i = l, E.id = l.uid, y.scheduler = () => Ns(E), Ke(l, !0), b();
  }, U = (l, f, h) => {
    f.component = l;
    const m = l.vnode.props;
    l.vnode = f, l.next = null, zr(l, f.props, m, h), kr(l, f.children, h), je(), zs(l), Le();
  }, L = (l, f, h, m, g, _, v, x, y = !1) => {
    const b = l && l.children, E = l ? l.shapeFlag : 0, S = f.children, { patchFlag: T, shapeFlag: P } = f;
    if (T > 0) {
      if (T & 128) {
        Tt(
          b,
          S,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        );
        return;
      } else if (T & 256) {
        Ve(
          b,
          S,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        );
        return;
      }
    }
    P & 8 ? (E & 16 && tt(b, g, _), S !== b && a(h, S)) : E & 16 ? P & 16 ? Tt(
      b,
      S,
      h,
      m,
      g,
      _,
      v,
      x,
      y
    ) : tt(b, g, _, !0) : (E & 8 && a(h, ""), P & 16 && Re(
      S,
      h,
      m,
      g,
      _,
      v,
      x,
      y
    ));
  }, Ve = (l, f, h, m, g, _, v, x, y) => {
    l = l || ze, f = f || ze;
    const b = l.length, E = f.length, S = Math.min(b, E);
    let T;
    for (T = 0; T < S; T++) {
      const P = f[T] = y ? Ie(f[T]) : xe(f[T]);
      I(
        l[T],
        P,
        h,
        null,
        g,
        _,
        v,
        x,
        y
      );
    }
    b > E ? tt(
      l,
      g,
      _,
      !0,
      !1,
      S
    ) : Re(
      f,
      h,
      m,
      g,
      _,
      v,
      x,
      y,
      S
    );
  }, Tt = (l, f, h, m, g, _, v, x, y) => {
    let b = 0;
    const E = f.length;
    let S = l.length - 1, T = E - 1;
    for (; b <= S && b <= T; ) {
      const P = l[b], M = f[b] = y ? Ie(f[b]) : xe(f[b]);
      if (rt(P, M))
        I(
          P,
          M,
          h,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= T; ) {
      const P = l[S], M = f[T] = y ? Ie(f[T]) : xe(f[T]);
      if (rt(P, M))
        I(
          P,
          M,
          h,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      S--, T--;
    }
    if (b > S) {
      if (b <= T) {
        const P = T + 1, M = P < E ? f[P].el : m;
        for (; b <= T; )
          I(
            null,
            f[b] = y ? Ie(f[b]) : xe(f[b]),
            h,
            M,
            g,
            _,
            v,
            x,
            y
          ), b++;
      }
    } else if (b > T)
      for (; b <= S; )
        pe(l[b], g, _, !0), b++;
    else {
      const P = b, M = b, $ = /* @__PURE__ */ new Map();
      for (b = M; b <= T; b++) {
        const re = f[b] = y ? Ie(f[b]) : xe(f[b]);
        re.key != null && $.set(re.key, b);
      }
      let H, ie = 0;
      const ne = T - M + 1;
      let ge = !1, _e = 0;
      const nt = new Array(ne);
      for (b = 0; b < ne; b++) nt[b] = 0;
      for (b = P; b <= S; b++) {
        const re = l[b];
        if (ie >= ne) {
          pe(re, g, _, !0);
          continue;
        }
        let me;
        if (re.key != null)
          me = $.get(re.key);
        else
          for (H = M; H <= T; H++)
            if (nt[H - M] === 0 && rt(re, f[H])) {
              me = H;
              break;
            }
        me === void 0 ? pe(re, g, _, !0) : (nt[me - M] = b + 1, me >= _e ? _e = me : ge = !0, I(
          re,
          f[me],
          h,
          null,
          g,
          _,
          v,
          x,
          y
        ), ie++);
      }
      const Ks = ge ? no(nt) : ze;
      for (H = Ks.length - 1, b = ne - 1; b >= 0; b--) {
        const re = M + b, me = f[re], Ws = re + 1 < E ? f[re + 1].el : m;
        nt[b] === 0 ? I(
          null,
          me,
          h,
          Ws,
          g,
          _,
          v,
          x,
          y
        ) : ge && (H < 0 || b !== Ks[H] ? Be(me, h, Ws, 2) : H--);
      }
    }
  }, Be = (l, f, h, m, g = null) => {
    const { el: _, type: v, transition: x, children: y, shapeFlag: b } = l;
    if (b & 6) {
      Be(l.component.subTree, f, h, m);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, h, m);
      return;
    }
    if (b & 64) {
      v.move(l, f, h, st);
      return;
    }
    if (v === Ee) {
      n(_, f, h);
      for (let S = 0; S < y.length; S++)
        Be(y[S], f, h, m);
      n(l.anchor, f, h);
      return;
    }
    if (v === rs) {
      W(l, f, h);
      return;
    }
    if (m !== 2 && b & 1 && x)
      if (m === 0)
        x.beforeEnter(_), n(_, f, h), oe(() => x.enter(_), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: P } = x, M = () => n(_, f, h), $ = () => {
          S(_, () => {
            M(), P && P();
          });
        };
        T ? T(_, M, $) : $();
      }
    else
      n(_, f, h);
  }, pe = (l, f, h, m = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: x,
      children: y,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: S,
      dirs: T,
      cacheIndex: P
    } = l;
    if (S === -2 && (g = !1), x != null && Ht(x, null, h, l, !0), P != null && (f.renderCache[P] = void 0), E & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const M = E & 1 && T, $ = !at(l);
    let H;
    if ($ && (H = v && v.onVnodeBeforeUnmount) && be(H, f, l), E & 6)
      Mi(l.component, h, m);
    else {
      if (E & 128) {
        l.suspense.unmount(h, m);
        return;
      }
      M && Ue(l, null, f, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        f,
        h,
        st,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ee || S > 0 && S & 64) ? tt(
        b,
        f,
        h,
        !1,
        !0
      ) : (_ === Ee && S & 384 || !g && E & 16) && tt(y, f, h), m && Bs(l);
    }
    ($ && (H = v && v.onVnodeUnmounted) || M) && oe(() => {
      H && be(H, f, l), M && Ue(l, null, f, "unmounted");
    }, h);
  }, Bs = (l) => {
    const { type: f, el: h, anchor: m, transition: g } = l;
    if (f === Ee) {
      Ri(h, m);
      return;
    }
    if (f === rs) {
      A(l);
      return;
    }
    const _ = () => {
      i(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: x } = g, y = () => v(h, _);
      x ? x(l.el, _, y) : y();
    } else
      _();
  }, Ri = (l, f) => {
    let h;
    for (; l !== f; )
      h = w(l), i(l), l = h;
    i(f);
  }, Mi = (l, f, h) => {
    const { bum: m, scope: g, job: _, subTree: v, um: x, m: y, a: b } = l;
    tn(y), tn(b), m && Zt(m), g.stop(), _ && (_.flags |= 8, pe(v, l, f, h)), x && oe(x, f), oe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, tt = (l, f, h, m = !1, g = !1, _ = 0) => {
    for (let v = _; v < l.length; v++)
      pe(l[v], f, h, m, g);
  }, Et = (l) => {
    if (l.shapeFlag & 6)
      return Et(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = w(l.anchor || l.el), h = f && f[Cr];
    return h ? w(h) : f;
  };
  let zt = !1;
  const Us = (l, f, h) => {
    l == null ? f._vnode && pe(f._vnode, null, null, !0) : I(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = l, zt || (zt = !0, zs(), Zn(), zt = !1);
  }, st = {
    p: I,
    um: pe,
    m: Be,
    r: Bs,
    mt: Yt,
    mc: Re,
    pc: L,
    pbc: $e,
    n: Et,
    o: e
  };
  return {
    render: Us,
    hydrate: void 0,
    createApp: Gr(Us)
  };
}
function ns({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ke({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function so(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mi(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (O(n) && O(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = Ie(i[r]), c.el = o.el), !s && c.patchFlag !== -2 && mi(o, c)), c.type === Jt && (c.el = o.el);
    }
}
function no(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        c = r + o >> 1, e[s[c]] < d ? r = c + 1 : o = c;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function bi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bi(t);
}
function tn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const io = Symbol.for("v-scx"), ro = () => Rt(io);
function is(e, t, s) {
  return yi(e, t, s);
}
function yi(e, t, s = B) {
  const { immediate: n, deep: i, flush: r, once: o } = s, c = Y({}, s), u = t && n || !t && r !== "post";
  let d;
  if (yt) {
    if (r === "sync") {
      const C = ro();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = Se, C.resume = Se, C.pause = Se, C;
    }
  }
  const a = se;
  c.call = (C, F, I) => we(C, a, F, I);
  let p = !1;
  r === "post" ? c.scheduler = (C) => {
    oe(C, a && a.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (C, F) => {
    F ? C() : Ns(C);
  }), c.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const w = yr(e, t, c);
  return yt && (d ? d.push(w) : u && w()), w;
}
function oo(e, t, s) {
  const n = this.proxy, i = G(e) ? e.includes(".") ? xi(n, e) : () => n[e] : e.bind(n, n);
  let r;
  R(t) ? r = t : (r = t.handler, s = t);
  const o = vt(this), c = yi(i, r.bind(n), s);
  return o(), c;
}
function xi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const lo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${fe(t)}Modifiers`];
function co(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || B;
  let i = s;
  const r = t.startsWith("update:"), o = r && lo(n, t.slice(7));
  o && (o.trim && (i = s.map((a) => G(a) ? a.trim() : a)), o.number && (i = s.map(ji)));
  let c, u = n[c = Xt(t)] || // also try camelCase event handler (#2249)
  n[c = Xt(ue(t))];
  !u && r && (u = n[c = Xt(fe(t))]), u && we(
    u,
    e,
    6,
    i
  );
  const d = n[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, we(
      d,
      e,
      6,
      i
    );
  }
}
function vi(e, t, s = !1) {
  const n = t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, c = !1;
  if (!R(e)) {
    const u = (d) => {
      const a = vi(d, t, !0);
      a && (c = !0, Y(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (q(e) && n.set(e, null), null) : (O(r) ? r.forEach((u) => o[u] = null) : Y(o, r), q(e) && n.set(e, o), o);
}
function Gt(e, t) {
  return !e || !$t(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, fe(t)) || N(e, t));
}
function sn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: d,
    renderCache: a,
    props: p,
    data: w,
    setupState: C,
    ctx: F,
    inheritAttrs: I
  } = e, z = Dt(e);
  let j, K;
  try {
    if (s.shapeFlag & 4) {
      const A = i || n, J = A;
      j = xe(
        d.call(
          J,
          A,
          a,
          p,
          C,
          w,
          F
        )
      ), K = c;
    } else {
      const A = t;
      j = xe(
        A.length > 1 ? A(
          p,
          { attrs: c, slots: o, emit: u }
        ) : A(
          p,
          null
        )
      ), K = t.props ? c : fo(c);
    }
  } catch (A) {
    dt.length = 0, Wt(A, e, 1), j = De(mt);
  }
  let W = j;
  if (K && I !== !1) {
    const A = Object.keys(K), { shapeFlag: J } = W;
    A.length && J & 7 && (r && A.some(xs) && (K = uo(
      K,
      r
    )), W = ke(W, K, !1, !0));
  }
  return s.dirs && (W = ke(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && Ds(W, s.transition), j = W, Dt(z), j;
}
const fo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || $t(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, uo = (e, t) => {
  const s = {};
  for (const n in e)
    (!xs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function ao(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: c, patchFlag: u } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? nn(n, o, d) : !!o;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (o[w] !== n[w] && !Gt(d, w))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? nn(n, o, d) : !0 : !!o;
  return !1;
}
function nn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (t[r] !== e[r] && !Gt(s, r))
      return !0;
  }
  return !1;
}
function ho({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Si = (e) => e.__isSuspense;
function po(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Sr(e);
}
const Ee = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), mt = Symbol.for("v-cmt"), rs = Symbol.for("v-stc"), dt = [];
let ce = null;
function go(e = !1) {
  dt.push(ce = e ? null : []);
}
function _o() {
  dt.pop(), ce = dt[dt.length - 1] || null;
}
let bt = 1;
function rn(e, t = !1) {
  bt += e, e < 0 && ce && t && (ce.hasOnce = !0);
}
function mo(e) {
  return e.dynamicChildren = bt > 0 ? ce || ze : null, _o(), bt > 0 && ce && ce.push(e), e;
}
function bo(e, t, s, n, i, r) {
  return mo(
    Ti(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function wi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ci = ({ key: e }) => e != null ? e : null, Mt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || Z(e) || R(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function Ti(e, t = null, s = null, n = 0, i = null, r = e === Ee ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ci(t),
    ref: t && Mt(t),
    scopeId: kn,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return c ? (js(u, s), r & 128 && e.normalize(u)) : s && (u.shapeFlag |= G(s) ? 8 : 16), bt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ce.push(u), u;
}
const De = yo;
function yo(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Lr) && (e = mt), wi(e)) {
    const c = ke(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && js(c, s), bt > 0 && !r && ce && (c.shapeFlag & 6 ? ce[ce.indexOf(e)] = c : ce.push(c)), c.patchFlag = -2, c;
  }
  if (Ro(e) && (e = e.__vccOpts), t) {
    t = xo(t);
    let { class: c, style: u } = t;
    c && !G(c) && (t.class = Cs(c)), q(u) && (Fs(u) && !O(u) && (u = Y({}, u)), t.style = ws(u));
  }
  const o = G(e) ? 1 : Si(e) ? 128 : Tr(e) ? 64 : q(e) ? 4 : R(e) ? 2 : 0;
  return Ti(
    e,
    t,
    s,
    n,
    i,
    o,
    r,
    !0
  );
}
function xo(e) {
  return e ? Fs(e) || ui(e) ? Y({}, e) : e : null;
}
function ke(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: c, transition: u } = e, d = t ? So(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ci(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? O(r) ? r.concat(Mt(t)) : [r, Mt(t)] : Mt(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ee ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ke(e.ssContent),
    ssFallback: e.ssFallback && ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && Ds(
    a,
    u.clone(a)
  ), a;
}
function vo(e = " ", t = 0) {
  return De(Jt, null, e, t);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? De(mt) : O(e) ? De(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wi(e) ? Ie(e) : De(Jt, null, String(e));
}
function Ie(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ke(e);
}
function js(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), js(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !ui(t) ? t._ctx = ve : i === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: ve }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [vo(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function So(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Cs([t.class, n.class]));
      else if (i === "style")
        t.style = ws([t.style, n.style]);
      else if ($t(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(O(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function be(e, t, s, n = null) {
  we(e, t, 7, [
    s,
    n
  ]);
}
const wo = li();
let Co = 0;
function To(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || wo, r = {
    uid: Co++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Wi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: hi(n, i),
    emitsOptions: vi(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = co.bind(null, r), e.ce && e.ce(r), r;
}
let se = null, Lt, ms;
{
  const e = Kt(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Lt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => se = s
  ), ms = t(
    "__VUE_SSR_SETTERS__",
    (s) => yt = s
  );
}
const vt = (e) => {
  const t = se;
  return Lt(e), e.scope.on(), () => {
    e.scope.off(), Lt(t);
  };
}, on = () => {
  se && se.scope.off(), Lt(null);
};
function Ei(e) {
  return e.vnode.shapeFlag & 4;
}
let yt = !1;
function Eo(e, t = !1, s = !1) {
  t && ms(t);
  const { props: n, children: i } = e.vnode, r = Ei(e);
  Yr(e, n, r, t), Qr(e, i, s);
  const o = r ? Ao(e, t) : void 0;
  return t && ms(!1), o;
}
function Ao(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $r);
  const { setup: n } = s;
  if (n) {
    je();
    const i = e.setupContext = n.length > 1 ? Oo(e) : null, r = vt(e), o = xt(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = wn(o);
    if (Le(), r(), (c || e.sp) && !at(e) && ti(e), c) {
      if (o.then(on, on), t)
        return o.then((u) => {
          ln(e, u);
        }).catch((u) => {
          Wt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      ln(e, o);
  } else
    Ai(e);
}
function ln(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = Jn(t)), Ai(e);
}
function Ai(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Se);
  {
    const i = vt(e);
    je();
    try {
      Vr(e);
    } finally {
      Le(), i();
    }
  }
}
const Po = {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function Oo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Po),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ls(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Jn(ar(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in ht)
        return ht[s](e);
    },
    has(t, s) {
      return s in t || s in ht;
    }
  })) : e.proxy;
}
function Ro(e) {
  return R(e) && "__vccOpts" in e;
}
const Mo = (e, t) => mr(e, t, yt), Io = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bs;
const cn = typeof window != "undefined" && window.trustedTypes;
if (cn)
  try {
    bs = /* @__PURE__ */ cn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
  }
const Pi = bs ? (e) => bs.createHTML(e) : (e) => e, Fo = "http://www.w3.org/2000/svg", No = "http://www.w3.org/1998/Math/MathML", Te = typeof document != "undefined" ? document : null, fn = Te && /* @__PURE__ */ Te.createElement("template"), Do = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Te.createElementNS(Fo, e) : t === "mathml" ? Te.createElementNS(No, e) : s ? Te.createElement(e, { is: s }) : Te.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Te.createTextNode(e),
  createComment: (e) => Te.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Te.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      fn.innerHTML = Pi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = fn.content;
      if (n === "svg" || n === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Ho = Symbol("_vtc");
function jo(e, t, s) {
  const n = e[Ho];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const un = Symbol("_vod"), Lo = Symbol("_vsh"), $o = Symbol(""), Vo = /(^|;)\s*display\s*:/;
function Bo(e, t, s) {
  const n = e.style, i = G(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (G(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          s[c] == null && It(n, c, "");
        }
      else
        for (const o in t)
          s[o] == null && It(n, o, "");
    for (const o in s)
      o === "display" && (r = !0), It(n, o, s[o]);
  } else if (i) {
    if (t !== s) {
      const o = n[$o];
      o && (s += ";" + o), n.cssText = s, r = Vo.test(s);
    }
  } else t && e.removeAttribute("style");
  un in e && (e[un] = r ? n.display : "", e[Lo] && (n.display = "none"));
}
const an = /\s*!important$/;
function It(e, t, s) {
  if (O(s))
    s.forEach((n) => It(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Uo(e, t);
    an.test(s) ? e.setProperty(
      fe(n),
      s.replace(an, ""),
      "important"
    ) : e[n] = s;
  }
}
const hn = ["Webkit", "Moz", "ms"], os = {};
function Uo(e, t) {
  const s = os[t];
  if (s)
    return s;
  let n = ue(t);
  if (n !== "filter" && n in e)
    return os[t] = n;
  n = Tn(n);
  for (let i = 0; i < hn.length; i++) {
    const r = hn[i] + n;
    if (r in e)
      return os[t] = r;
  }
  return t;
}
const dn = "http://www.w3.org/1999/xlink";
function pn(e, t, s, n, i, r = Ki(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(dn, t.slice(6, t.length)) : e.setAttributeNS(dn, t, s) : s == null || r && !An(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : He(s) ? String(s) : s
  );
}
function gn(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Pi(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (c !== u || !("_value" in e)) && (e.value = u), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const c = typeof e[t];
    c === "boolean" ? s = An(s) : s == null && c === "string" ? (s = "", o = !0) : c === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch (c) {
  }
  o && e.removeAttribute(i || t);
}
function Ko(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Wo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const _n = Symbol("_vei");
function qo(e, t, s, n, i = null) {
  const r = e[_n] || (e[_n] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, u] = Go(t);
    if (n) {
      const d = r[t] = zo(
        n,
        i
      );
      Ko(e, c, d, u);
    } else o && (Wo(e, c, o, u), r[t] = void 0);
  }
}
const mn = /(?:Once|Passive|Capture)$/;
function Go(e) {
  let t;
  if (mn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(mn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : fe(e.slice(2)), t];
}
let ls = 0;
const Jo = /* @__PURE__ */ Promise.resolve(), Yo = () => ls || (Jo.then(() => ls = 0), ls = Date.now());
function zo(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    we(
      Xo(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Yo(), s;
}
function Xo(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zo = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? jo(e, n, o) : t === "style" ? Bo(e, s, n) : $t(t) ? xs(t) || qo(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qo(e, t, n, o)) ? (gn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pn(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(n)) ? gn(e, ue(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), pn(e, t, n, o));
};
function Qo(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bn(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return bn(t) && G(s) ? !1 : t in e;
}
const yn = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ko(e, t, s) {
  const n = /* @__PURE__ */ ei(e, t);
  Bt(n) && Y(n, t);
  class i extends $s {
    constructor(o) {
      super(n, o, s);
    }
  }
  return i.def = n, i;
}
const el = typeof HTMLElement != "undefined" ? HTMLElement : class {
};
class $s extends el {
  constructor(t, s = {}, n = vn) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== vn ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof $s) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, zn(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const i of n)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = n;
      let c;
      if (r && !O(r))
        for (const u in r) {
          const d = r[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = qs(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[ue(u)] = !0);
        }
      this._numberProps = c, i && this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then(
      (n) => t(this._def = n, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        N(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Gn(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i]);
    for (const i of n.map(ue))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let n = s ? this.getAttribute(t) : yn;
    const i = ue(t);
    s && this._numberProps && this._numberProps[i] && (n = qs(n)), this._setProp(i, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, i = !1) {
    if (s !== this._props[t] && (s === yn ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), i && this._instance && this._update(), n)) {
      const r = this._ob;
      r && r.disconnect(), s === !0 ? this.setAttribute(fe(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(fe(t), s + "") : s || this.removeAttribute(fe(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    sl(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = De(this._def, Y(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Bt(o[0]) ? Y({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (r, ...o) => {
        i(r, o), fe(r) !== r && i(fe(r), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      n && r.setAttribute("nonce", n), r.textContent = t[i], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = i.getAttribute("name") || "default", o = this._slots[r], c = i.parentNode;
      if (o)
        for (const u of o) {
          if (s && u.nodeType === 1) {
            const d = s + "-s", a = document.createTreeWalker(u, 1);
            u.setAttribute(d, "");
            let p;
            for (; p = a.nextNode(); )
              p.setAttribute(d, "");
          }
          c.insertBefore(u, i);
        }
      else
        for (; i.firstChild; ) c.insertBefore(i.firstChild, i);
      c.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const tl = /* @__PURE__ */ Y({ patchProp: Zo }, Do);
let xn;
function Oi() {
  return xn || (xn = eo(tl));
}
const sl = (...e) => {
  Oi().render(...e);
}, vn = (...e) => {
  const t = Oi().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = il(n);
    if (!i) return;
    const r = t._component;
    !R(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, nl(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function nl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function il(e) {
  return G(e) ? document.querySelector(e) : e;
}
const rl = /* @__PURE__ */ ei({
  __name: "MyButton.ce",
  setup(e) {
    const t = hr(0), s = () => {
      t.value++, console.log(`Button clicked ${t.value} times`);
    };
    return (n, i) => (go(), bo("button", {
      class: "my-button",
      onClick: s
    }, " Clicked " + On(t.value) + " times ", 1));
  }
}), ol = ".my-button[data-v-857eb0e1]{background-color:#42b883;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:16px}.my-button[data-v-857eb0e1]:hover{background-color:#367a5b}", ll = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, cl = /* @__PURE__ */ ll(rl, [["styles", [ol]], ["__scopeId", "data-v-857eb0e1"]]), fl = /* @__PURE__ */ ko(cl);
customElements.define("my-button", fl);
