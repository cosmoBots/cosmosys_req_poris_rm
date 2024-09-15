var xf = Object.defineProperty;
var Sf = (e, t, n) => t in e ? xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fe = (e, t, n) => Sf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xs(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Qe = {}, wr = [], It = () => {
}, Tf = () => !1, co = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qs = (e) => e.startsWith("onUpdate:"), vt = Object.assign, Js = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mf = Object.prototype.hasOwnProperty, He = (e, t) => Mf.call(e, t), we = Array.isArray, xr = (e) => ga(e) === "[object Map]", fo = (e) => ga(e) === "[object Set]", Qi = (e) => ga(e) === "[object Date]", Ee = (e) => typeof e == "function", nt = (e) => typeof e == "string", Ln = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", Cu = (e) => (Ke(e) || Ee(e)) && Ee(e.then) && Ee(e.catch), Ru = Object.prototype.toString, ga = (e) => Ru.call(e), kf = (e) => ga(e).slice(8, -1), Nu = (e) => ga(e) === "[object Object]", Zs = (e) => nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zr = /* @__PURE__ */ Xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), po = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ef = /-(\w)/g, Xt = po((e) => e.replace(Ef, (t, n) => n ? n.toUpperCase() : "")), Df = /\B([A-Z])/g, Hn = po(
  (e) => e.replace(Df, "-$1").toLowerCase()
), mo = po((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wo = po((e) => e ? `on${mo(e)}` : ""), fn = (e, t) => !Object.is(e, t), La = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ua = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ia = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Of = (e) => {
  const t = nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ji;
const $u = () => Ji || (Ji = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = nt(r) ? Rf(r) : Ot(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (nt(e) || Ke(e))
    return e;
}
const Af = /;(?![^(]*\))/g, Pf = /:([^]+)/, Cf = /\/\*[^]*?\*\//g;
function Rf(e) {
  const t = {};
  return e.replace(Cf, "").split(Af).forEach((n) => {
    if (n) {
      const r = n.split(Pf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if (nt(e))
    t = e;
  else if (we(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ve(e[n]);
      r && (t += r + " ");
    }
  else if (Ke(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function mt(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !nt(t) && (e.class = Ve(t)), n && (e.style = Ot(n)), e;
}
const Nf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $f = /* @__PURE__ */ Xs(Nf);
function Iu(e) {
  return !!e || e === "";
}
function If(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = ho(e[r], t[r]);
  return n;
}
function ho(e, t) {
  if (e === t)
    return !0;
  let n = Qi(e), r = Qi(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ln(e), r = Ln(t), n || r)
    return e === t;
  if (n = we(e), r = we(t), n || r)
    return n && r ? If(e, t) : !1;
  if (n = Ke(e), r = Ke(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const s in e) {
      const i = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (i && !l || !i && l || !ho(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Vf(e, t) {
  return e.findIndex((n) => ho(n, t));
}
const lt = (e) => nt(e) ? e : e == null ? "" : we(e) || Ke(e) && (e.toString === Ru || !Ee(e.toString)) ? JSON.stringify(e, Vu, 2) : String(e), Vu = (e, t) => t && t.__v_isRef ? Vu(e, t.value) : xr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[qo(r, o) + " =>"] = a, n),
    {}
  )
} : fo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qo(n))
} : Ln(t) ? qo(t) : Ke(t) && !we(t) && !Nu(t) ? String(t) : t, qo = (e, t = "") => {
  var n;
  return Ln(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let $t;
class Lu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = $t, !t && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = $t;
      try {
        return $t = this, t();
      } finally {
        $t = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $t = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $t = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Fu(e) {
  return new Lu(e);
}
function Lf(e, t = $t) {
  t && t.active && t.effects.push(e);
}
function ei() {
  return $t;
}
function Bu(e) {
  $t && $t.cleanups.push(e);
}
let sr;
class ti {
  constructor(t, n, r, a) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Lf(this, a);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Yn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ff(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), jn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Rn, n = sr;
    try {
      return Rn = !0, sr = this, this._runnings++, Zi(this), this.fn();
    } finally {
      el(this), this._runnings--, sr = n, Rn = t;
    }
  }
  stop() {
    var t;
    this.active && (Zi(this), el(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Ff(e) {
  return e.value;
}
function Zi(e) {
  e._trackId++, e._depsLength = 0;
}
function el(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Hu(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Hu(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Rn = !0, xs = 0;
const Yu = [];
function Yn() {
  Yu.push(Rn), Rn = !1;
}
function jn() {
  const e = Yu.pop();
  Rn = e === void 0 ? !0 : e;
}
function ni() {
  xs++;
}
function ri() {
  for (xs--; !xs && Ss.length; )
    Ss.shift()();
}
function ju(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Hu(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Ss = [];
function Uu(e, t, n) {
  ni();
  for (const r of e.keys()) {
    let a;
    r._dirtyLevel < t && (a ?? (a = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (a ?? (a = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Ss.push(r.scheduler)));
  }
  ri();
}
const Wu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Wa = /* @__PURE__ */ new WeakMap(), ir = Symbol(""), Ts = Symbol("");
function Nt(e, t, n) {
  if (Rn && sr) {
    let r = Wa.get(e);
    r || Wa.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || r.set(n, a = Wu(() => r.delete(n))), ju(
      sr,
      a
    );
  }
}
function vn(e, t, n, r, a, o) {
  const s = Wa.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (n === "length" && we(e)) {
    const l = Number(r);
    s.forEach((c, u) => {
      (u === "length" || !Ln(u) && u >= l) && i.push(c);
    });
  } else
    switch (n !== void 0 && i.push(s.get(n)), t) {
      case "add":
        we(e) ? Zs(n) && i.push(s.get("length")) : (i.push(s.get(ir)), xr(e) && i.push(s.get(Ts)));
        break;
      case "delete":
        we(e) || (i.push(s.get(ir)), xr(e) && i.push(s.get(Ts)));
        break;
      case "set":
        xr(e) && i.push(s.get(ir));
        break;
    }
  ni();
  for (const l of i)
    l && Uu(
      l,
      4
    );
  ri();
}
function Bf(e, t) {
  var n;
  return (n = Wa.get(e)) == null ? void 0 : n.get(t);
}
const Hf = /* @__PURE__ */ Xs("__proto__,__v_isRef,__isVue"), qu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ln)
), tl = /* @__PURE__ */ Yf();
function Yf() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Le(this);
      for (let o = 0, s = this.length; o < s; o++)
        Nt(r, "get", o + "");
      const a = r[t](...n);
      return a === -1 || a === !1 ? r[t](...n.map(Le)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Yn(), ni();
      const r = Le(this)[t].apply(this, n);
      return ri(), jn(), r;
    };
  }), e;
}
function jf(e) {
  const t = Le(this);
  return Nt(t, "has", e), t.hasOwnProperty(e);
}
class Gu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const a = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (a ? o ? np : Qu : o ? Xu : Ku).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = we(t);
    if (!a) {
      if (s && He(tl, n))
        return Reflect.get(tl, n, r);
      if (n === "hasOwnProperty")
        return jf;
    }
    const i = Reflect.get(t, n, r);
    return (Ln(n) ? qu.has(n) : Hf(n)) || (a || Nt(t, "get", n), o) ? i : at(i) ? s && Zs(n) ? i : i.value : Ke(i) ? a ? Ju(i) : gn(i) : i;
  }
}
class zu extends Gu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    if (!this._isShallow) {
      const l = kr(o);
      if (!qa(r) && !kr(r) && (o = Le(o), r = Le(r)), !we(t) && at(o) && !at(r))
        return l ? !1 : (o.value = r, !0);
    }
    const s = we(t) && Zs(n) ? Number(n) < t.length : He(t, n), i = Reflect.set(t, n, r, a);
    return t === Le(a) && (s ? fn(r, o) && vn(t, "set", n, r) : vn(t, "add", n, r)), i;
  }
  deleteProperty(t, n) {
    const r = He(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && vn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ln(n) || !qu.has(n)) && Nt(t, "has", n), r;
  }
  ownKeys(t) {
    return Nt(
      t,
      "iterate",
      we(t) ? "length" : ir
    ), Reflect.ownKeys(t);
  }
}
class Uf extends Gu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Wf = /* @__PURE__ */ new zu(), qf = /* @__PURE__ */ new Uf(), Gf = /* @__PURE__ */ new zu(
  !0
), ai = (e) => e, vo = (e) => Reflect.getPrototypeOf(e);
function Da(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const a = Le(e), o = Le(t);
  n || (fn(t, o) && Nt(a, "get", t), Nt(a, "get", o));
  const { has: s } = vo(a), i = r ? ai : n ? ii : la;
  if (s.call(a, t))
    return i(e.get(t));
  if (s.call(a, o))
    return i(e.get(o));
  e !== a && e.get(t);
}
function Oa(e, t = !1) {
  const n = this.__v_raw, r = Le(n), a = Le(e);
  return t || (fn(e, a) && Nt(r, "has", e), Nt(r, "has", a)), e === a ? n.has(e) : n.has(e) || n.has(a);
}
function Aa(e, t = !1) {
  return e = e.__v_raw, !t && Nt(Le(e), "iterate", ir), Reflect.get(e, "size", e);
}
function nl(e) {
  e = Le(e);
  const t = Le(this);
  return vo(t).has.call(t, e) || (t.add(e), vn(t, "add", e, e)), this;
}
function rl(e, t) {
  t = Le(t);
  const n = Le(this), { has: r, get: a } = vo(n);
  let o = r.call(n, e);
  o || (e = Le(e), o = r.call(n, e));
  const s = a.call(n, e);
  return n.set(e, t), o ? fn(t, s) && vn(n, "set", e, t) : vn(n, "add", e, t), this;
}
function al(e) {
  const t = Le(this), { has: n, get: r } = vo(t);
  let a = n.call(t, e);
  a || (e = Le(e), a = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return a && vn(t, "delete", e, void 0), o;
}
function ol() {
  const e = Le(this), t = e.size !== 0, n = e.clear();
  return t && vn(e, "clear", void 0, void 0), n;
}
function Pa(e, t) {
  return function(r, a) {
    const o = this, s = o.__v_raw, i = Le(s), l = t ? ai : e ? ii : la;
    return !e && Nt(i, "iterate", ir), s.forEach((c, u) => r.call(a, l(c), l(u), o));
  };
}
function Ca(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = Le(a), s = xr(o), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = a[e](...r), u = n ? ai : t ? ii : la;
    return !t && Nt(
      o,
      "iterate",
      l ? Ts : ir
    ), {
      // iterator protocol
      next() {
        const { value: d, done: h } = c.next();
        return h ? { value: d, done: h } : {
          value: i ? [u(d[0]), u(d[1])] : u(d),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function wn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zf() {
  const e = {
    get(o) {
      return Da(this, o);
    },
    get size() {
      return Aa(this);
    },
    has: Oa,
    add: nl,
    set: rl,
    delete: al,
    clear: ol,
    forEach: Pa(!1, !1)
  }, t = {
    get(o) {
      return Da(this, o, !1, !0);
    },
    get size() {
      return Aa(this);
    },
    has: Oa,
    add: nl,
    set: rl,
    delete: al,
    clear: ol,
    forEach: Pa(!1, !0)
  }, n = {
    get(o) {
      return Da(this, o, !0);
    },
    get size() {
      return Aa(this, !0);
    },
    has(o) {
      return Oa.call(this, o, !0);
    },
    add: wn("add"),
    set: wn("set"),
    delete: wn("delete"),
    clear: wn("clear"),
    forEach: Pa(!0, !1)
  }, r = {
    get(o) {
      return Da(this, o, !0, !0);
    },
    get size() {
      return Aa(this, !0);
    },
    has(o) {
      return Oa.call(this, o, !0);
    },
    add: wn("add"),
    set: wn("set"),
    delete: wn("delete"),
    clear: wn("clear"),
    forEach: Pa(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Ca(
      o,
      !1,
      !1
    ), n[o] = Ca(
      o,
      !0,
      !1
    ), t[o] = Ca(
      o,
      !1,
      !0
    ), r[o] = Ca(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Kf,
  Xf,
  Qf,
  Jf
] = /* @__PURE__ */ zf();
function oi(e, t) {
  const n = t ? e ? Jf : Qf : e ? Xf : Kf;
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    He(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Zf = {
  get: /* @__PURE__ */ oi(!1, !1)
}, ep = {
  get: /* @__PURE__ */ oi(!1, !0)
}, tp = {
  get: /* @__PURE__ */ oi(!0, !1)
}, Ku = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Qu = /* @__PURE__ */ new WeakMap(), np = /* @__PURE__ */ new WeakMap();
function rp(e) {
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
function ap(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rp(kf(e));
}
function gn(e) {
  return kr(e) ? e : si(
    e,
    !1,
    Wf,
    Zf,
    Ku
  );
}
function op(e) {
  return si(
    e,
    !1,
    Gf,
    ep,
    Xu
  );
}
function Ju(e) {
  return si(
    e,
    !0,
    qf,
    tp,
    Qu
  );
}
function si(e, t, n, r, a) {
  if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const s = ap(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? r : n
  );
  return a.set(e, i), i;
}
function Nn(e) {
  return kr(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function kr(e) {
  return !!(e && e.__v_isReadonly);
}
function qa(e) {
  return !!(e && e.__v_isShallow);
}
function Zu(e) {
  return Nn(e) || kr(e);
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function yo(e) {
  return Object.isExtensible(e) && Ua(e, "__v_skip", !0), e;
}
const la = (e) => Ke(e) ? gn(e) : e, ii = (e) => Ke(e) ? Ju(e) : e;
class ec {
  constructor(t, n, r, a) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ti(
      () => t(this._value),
      () => Kr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = r;
  }
  get value() {
    const t = Le(this);
    return (!t._cacheable || t.effect.dirty) && fn(t._value, t._value = t.effect.run()) && Kr(t, 4), li(t), t.effect._dirtyLevel >= 2 && Kr(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function sp(e, t, n = !1) {
  let r, a;
  const o = Ee(e);
  return o ? (r = e, a = It) : (r = e.get, a = e.set), new ec(r, a, o || !a, n);
}
function li(e) {
  var t;
  Rn && sr && (e = Le(e), ju(
    sr,
    (t = e.dep) != null ? t : e.dep = Wu(
      () => e.dep = void 0,
      e instanceof ec ? e : void 0
    )
  ));
}
function Kr(e, t = 4, n) {
  e = Le(e);
  const r = e.dep;
  r && Uu(
    r,
    t
  );
}
function at(e) {
  return !!(e && e.__v_isRef === !0);
}
function oe(e) {
  return ip(e, !1);
}
function ip(e, t) {
  return at(e) ? e : new lp(e, t);
}
class lp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Le(t), this._value = n ? t : la(t);
  }
  get value() {
    return li(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || qa(t) || kr(t);
    t = n ? t : Le(t), fn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : la(t), Kr(this, 4));
  }
}
function T(e) {
  return at(e) ? e.value : e;
}
const up = {
  get: (e, t, n) => T(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return at(a) && !at(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function tc(e) {
  return Nn(e) ? e : new Proxy(e, up);
}
class cp {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => li(this),
      () => Kr(this)
    );
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function dp(e) {
  return new cp(e);
}
function fp(e) {
  const t = we(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = nc(e, n);
  return t;
}
class pp {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Bf(Le(this._object), this._key);
  }
}
class mp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ga(e, t, n) {
  return at(e) ? e : Ee(e) ? new mp(e) : Ke(e) && arguments.length > 1 ? nc(e, t, n) : oe(e);
}
function nc(e, t, n) {
  const r = e[t];
  return at(r) ? r : new pp(e, t, n);
}
var Xr = { GJS_DEBUG_TOPICS: "JS ERROR;JS LOG", LESSOPEN: "| /usr/bin/lesspipe %s", USER: "txinto", npm_config_user_agent: "npm/10.8.2 node/v20.17.0 linux x64 workspaces/false", XDG_SESSION_TYPE: "wayland", GIT_ASKPASS: "/usr/share/code/resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/home/txinto/.nvm/versions/node/v20.17.0/bin/node", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/txinto", CHROME_DESKTOP: "code-url-handler.desktop", TERM_PROGRAM_VERSION: "1.93.1", DESKTOP_SESSION: "ubuntu", NVM_BIN: "/home/txinto/.nvm/versions/node/v20.17.0/bin", npm_package_json: "/home/txinto/repos/cbots/porisViewer/package.json", NVM_INC: "/home/txinto/.nvm/versions/node/v20.17.0/include/node", GIO_LAUNCHED_DESKTOP_FILE: "/usr/share/applications/code.desktop", GNOME_SHELL_SESSION_MODE: "ubuntu", GTK_MODULES: "gail:atk-bridge", VSCODE_GIT_ASKPASS_MAIN: "/usr/share/code/resources/app/extensions/git/dist/askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "/usr/share/code/code", MANAGERPID: "1872", npm_config_userconfig: "/home/txinto/.npmrc", npm_config_local_prefix: "/home/txinto/repos/cbots/porisViewer", SYSTEMD_EXEC_PID: "2043", IM_CONFIG_CHECK_ENV: "1", DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus", COLORTERM: "truecolor", GIO_LAUNCHED_DESKTOP_FILE_PID: "6959", COLOR: "1", NVM_DIR: "/home/txinto/.nvm", IM_CONFIG_PHASE: "1", WAYLAND_DISPLAY: "wayland-0", LOGNAME: "txinto", JOURNAL_STREAM: "8:27472", _: "/home/txinto/.nvm/versions/node/v20.17.0/bin/npm", npm_config_prefix: "/home/txinto/.nvm/versions/node/v20.17.0", npm_config_npm_version: "10.8.2", XDG_SESSION_CLASS: "user", USERNAME: "txinto", TERM: "xterm-256color", npm_config_cache: "/home/txinto/.npm", GNOME_DESKTOP_SESSION_ID: "this-is-deprecated", npm_config_node_gyp: "/home/txinto/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/txinto/repos/cbots/porisViewer/node_modules/.bin:/home/txinto/repos/cbots/node_modules/.bin:/home/txinto/repos/node_modules/.bin:/home/txinto/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/txinto/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/txinto/.local/bin:/home/txinto/.nvm/versions/node/v20.17.0/bin:/home/txinto/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin", SESSION_MANAGER: "local/txintosafe:@/tmp/.ICE-unix/2020,unix/txintosafe:/tmp/.ICE-unix/2020", INVOCATION_ID: "278edb087c2f4c00bb2b97be876045da", NODE: "/home/txinto/.nvm/versions/node/v20.17.0/bin/node", npm_package_name: "porisviewer", XDG_MENU_PREFIX: "gnome-", GNOME_SETUP_DISPLAY: ":1", XDG_RUNTIME_DIR: "/run/user/1000", GDK_BACKEND: "x11", DISPLAY: ":0", LANG: "es_ES.UTF-8", XDG_CURRENT_DESKTOP: "Unity", XMODIFIERS: "@im=ibus", XDG_SESSION_DESKTOP: "ubuntu", XAUTHORITY: "/run/user/1000/.mutter-Xwaylandauth.KOQ9T2", LS_COLORS: "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", VSCODE_GIT_IPC_HANDLE: "/run/user/1000/vscode-git-5ac4e7b89b.sock", TERM_PROGRAM: "vscode", npm_lifecycle_script: "vite build", SSH_AGENT_LAUNCHER: "gnome-keyring", SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh", ORIGINAL_XDG_CURRENT_DESKTOP: "ubuntu:GNOME", SHELL: "/bin/bash", npm_package_version: "0.0.0", npm_lifecycle_event: "build", QT_ACCESSIBILITY: "1", GDMSESSION: "ubuntu", LESSCLOSE: "/usr/bin/lesspipe %s %s", GJS_DEBUG_OUTPUT: "stderr", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", QT_IM_MODULE: "ibus", npm_config_globalconfig: "/home/txinto/.nvm/versions/node/v20.17.0/etc/npmrc", npm_config_init_module: "/home/txinto/.npm-init.js", PWD: "/home/txinto/repos/cbots/porisViewer", npm_execpath: "/home/txinto/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/npm-cli.js", XDG_CONFIG_DIRS: "/etc/xdg/xdg-ubuntu:/etc/xdg", NVM_CD_FLAGS: "", XDG_DATA_DIRS: "/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop", npm_config_global_prefix: "/home/txinto/.nvm/versions/node/v20.17.0", npm_command: "run-script", INIT_CWD: "/home/txinto/repos/cbots/porisViewer", EDITOR: "vi", NODE_ENV: "production" };
const Qr = [];
function hp(e, ...t) {
  Yn();
  const n = Qr.length ? Qr[Qr.length - 1].component : null, r = n && n.appContext.config.warnHandler, a = vp();
  if (r)
    yn(
      r,
      n,
      11,
      [
        e + t.map((o) => {
          var s, i;
          return (i = (s = o.toString) == null ? void 0 : s.call(o)) != null ? i : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        a.map(
          ({ vnode: o }) => `at <${Ic(n, o.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    a.length && o.push(`
`, ...yp(a)), console.warn(...o);
  }
  jn();
}
function vp() {
  let e = Qr[Qr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function yp(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...gp(n));
  }), t;
}
function gp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, a = ` at <${Ic(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [a, ...bp(e.props), o] : [a + o];
}
function bp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...rc(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function rc(e, t, n) {
  return nt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : at(t) ? (t = rc(e, Le(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Ee(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Le(t), n ? t : [`${e}=`, t]);
}
function yn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    go(a, t, n);
  }
}
function Yt(e, t, n, r) {
  if (Ee(e)) {
    const o = yn(e, t, n, r);
    return o && Cu(o) && o.catch((s) => {
      go(s, t, n);
    }), o;
  }
  const a = [];
  for (let o = 0; o < e.length; o++)
    a.push(Yt(e[o], t, n, r));
  return a;
}
function go(e, t, n, r = !0) {
  const a = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const s = t.proxy, i = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, i) === !1)
            return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      yn(
        l,
        null,
        10,
        [e, s, i]
      );
      return;
    }
  }
  _p(e, n, a, r);
}
function _p(e, t, n, r = !0) {
  console.error(e);
}
let ua = !1, Ms = !1;
const Mt = [];
let on = 0;
const Sr = [];
let Dn = null, er = 0;
const ac = /* @__PURE__ */ Promise.resolve();
let ui = null;
function Qt(e) {
  const t = ui || ac;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wp(e) {
  let t = on + 1, n = Mt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Mt[r], o = ca(a);
    o < e || o === e && a.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ci(e) {
  (!Mt.length || !Mt.includes(
    e,
    ua && e.allowRecurse ? on + 1 : on
  )) && (e.id == null ? Mt.push(e) : Mt.splice(wp(e.id), 0, e), oc());
}
function oc() {
  !ua && !Ms && (Ms = !0, ui = ac.then(ic));
}
function xp(e) {
  const t = Mt.indexOf(e);
  t > on && Mt.splice(t, 1);
}
function Sp(e) {
  we(e) ? Sr.push(...e) : (!Dn || !Dn.includes(
    e,
    e.allowRecurse ? er + 1 : er
  )) && Sr.push(e), oc();
}
function sl(e, t, n = ua ? on + 1 : 0) {
  for (; n < Mt.length; n++) {
    const r = Mt[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      Mt.splice(n, 1), n--, r();
    }
  }
}
function sc(e) {
  if (Sr.length) {
    const t = [...new Set(Sr)].sort(
      (n, r) => ca(n) - ca(r)
    );
    if (Sr.length = 0, Dn) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, er = 0; er < Dn.length; er++)
      Dn[er]();
    Dn = null, er = 0;
  }
}
const ca = (e) => e.id == null ? 1 / 0 : e.id, Tp = (e, t) => {
  const n = ca(e) - ca(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ic(e) {
  Ms = !1, ua = !0, Mt.sort(Tp);
  const t = It;
  try {
    for (on = 0; on < Mt.length; on++) {
      const n = Mt[on];
      n && n.active !== !1 && (Xr.NODE_ENV !== "production" && t(n), yn(n, null, 14));
    }
  } finally {
    on = 0, Mt.length = 0, sc(), ua = !1, ui = null, (Mt.length || Sr.length) && ic();
  }
}
function Mp(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Qe;
  let a = n;
  const o = t.startsWith("update:"), s = o && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: h } = r[u] || Qe;
    h && (a = n.map((v) => nt(v) ? v.trim() : v)), d && (a = n.map(ia));
  }
  let i, l = r[i = Wo(t)] || // also try camelCase event handler (#2249)
  r[i = Wo(Xt(t))];
  !l && o && (l = r[i = Wo(Hn(t))]), l && Yt(
    l,
    e,
    6,
    a
  );
  const c = r[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Yt(
      c,
      e,
      6,
      a
    );
  }
}
function lc(e, t, n = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let s = {}, i = !1;
  if (!Ee(e)) {
    const l = (c) => {
      const u = lc(c, t, !0);
      u && (i = !0, vt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !i ? (Ke(e) && r.set(e, null), null) : (we(o) ? o.forEach((l) => s[l] = null) : vt(s, o), Ke(e) && r.set(e, s), s);
}
function bo(e, t) {
  return !e || !co(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), He(e, t[0].toLowerCase() + t.slice(1)) || He(e, Hn(t)) || He(e, t));
}
let ht = null, uc = null;
function za(e) {
  const t = ht;
  return ht = e, uc = e && e.type.__scopeId || null, t;
}
function $e(e, t = ht, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && bl(-1);
    const o = za(t);
    let s;
    try {
      s = e(...a);
    } finally {
      za(o), r._d && bl(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Go(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    props: o,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: d,
    data: h,
    setupState: v,
    ctx: y,
    inheritAttrs: _
  } = e;
  let A, Y;
  const j = za(e);
  try {
    if (n.shapeFlag & 4) {
      const b = a || r, S = Xr.NODE_ENV !== "production" && v.__isScriptSetup ? new Proxy(b, {
        get(k, P, C) {
          return hp(
            `Property '${String(
              P
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(k, P, C);
        }
      }) : b;
      A = an(
        u.call(
          S,
          b,
          d,
          o,
          v,
          h,
          y
        )
      ), Y = l;
    } else {
      const b = t;
      Xr.NODE_ENV, A = an(
        b.length > 1 ? b(
          o,
          Xr.NODE_ENV !== "production" ? {
            get attrs() {
              return l;
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : b(
          o,
          null
          /* we know it doesn't need it */
        )
      ), Y = t.props ? l : kp(l);
    }
  } catch (b) {
    na.length = 0, go(b, e, 1), A = ze(jt);
  }
  let g = A;
  if (Y && _ !== !1) {
    const b = Object.keys(Y), { shapeFlag: S } = g;
    b.length && S & 7 && (s && b.some(Qs) && (Y = Ep(
      Y,
      s
    )), g = Fn(g, Y));
  }
  return n.dirs && (g = Fn(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (g.transition = n.transition), A = g, za(j), A;
}
const kp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || co(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ep = (e, t) => {
  const n = {};
  for (const r in e)
    (!Qs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Dp(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: s, children: i, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? il(r, s, c) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (s[h] !== r[h] && !bo(c, h))
          return !0;
      }
    }
  } else
    return (a || i) && (!i || !i.$stable) ? !0 : r === s ? !1 : r ? s ? il(r, s, c) : !0 : !!s;
  return !1;
}
function il(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (t[o] !== e[o] && !bo(n, o))
      return !0;
  }
  return !1;
}
function Op({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const cc = "components";
function Ap(e, t) {
  return fc(cc, e, !0, t) || e;
}
const dc = Symbol.for("v-ndc");
function _o(e) {
  return nt(e) ? fc(cc, e, !1) || e : e || dc;
}
function fc(e, t, n = !0, r = !1) {
  const a = ht || pt;
  if (a) {
    const o = a.type;
    {
      const i = $c(
        o,
        !1
      );
      if (i && (i === t || i === Xt(t) || i === mo(Xt(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ll(a[e] || o[e], t) || // global registration
      ll(a.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function ll(e, t) {
  return e && (e[t] || e[Xt(t)] || e[mo(Xt(t))]);
}
const Pp = (e) => e.__isSuspense;
function Cp(e, t) {
  t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : Sp(e);
}
const Rp = Symbol.for("v-scx"), Np = () => ea(Rp);
function $p(e, t) {
  return di(
    e,
    null,
    { flush: "sync" }
  );
}
const Ra = {};
function bt(e, t, n) {
  return di(e, t, n);
}
function di(e, t, {
  immediate: n,
  deep: r,
  flush: a,
  once: o,
  onTrack: s,
  onTrigger: i
} = Qe) {
  if (t && o) {
    const k = t;
    t = (...P) => {
      k(...P), S();
    };
  }
  const l = pt, c = (k) => r === !0 ? k : (
    // for deep: false, only traverse root-level properties
    rr(k, r === !1 ? 1 : void 0)
  );
  let u, d = !1, h = !1;
  if (at(e) ? (u = () => e.value, d = qa(e)) : Nn(e) ? (u = () => c(e), d = !0) : we(e) ? (h = !0, d = e.some((k) => Nn(k) || qa(k)), u = () => e.map((k) => {
    if (at(k))
      return k.value;
    if (Nn(k))
      return c(k);
    if (Ee(k))
      return yn(k, l, 2);
  })) : Ee(e) ? t ? u = () => yn(e, l, 2) : u = () => (v && v(), Yt(
    e,
    l,
    3,
    [y]
  )) : u = It, t && r) {
    const k = u;
    u = () => rr(k());
  }
  let v, y = (k) => {
    v = g.onStop = () => {
      yn(k, l, 4), v = g.onStop = void 0;
    };
  }, _;
  if (Mo)
    if (y = It, t ? n && Yt(t, l, 3, [
      u(),
      h ? [] : void 0,
      y
    ]) : u(), a === "sync") {
      const k = Np();
      _ = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return It;
  let A = h ? new Array(e.length).fill(Ra) : Ra;
  const Y = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const k = g.run();
        (r || d || (h ? k.some((P, C) => fn(P, A[C])) : fn(k, A))) && (v && v(), Yt(t, l, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          A === Ra ? void 0 : h && A[0] === Ra ? [] : A,
          y
        ]), A = k);
      } else
        g.run();
  };
  Y.allowRecurse = !!t;
  let j;
  a === "sync" ? j = Y : a === "post" ? j = () => Pt(Y, l && l.suspense) : (Y.pre = !0, l && (Y.id = l.uid), j = () => ci(Y));
  const g = new ti(u, It, j), b = ei(), S = () => {
    g.stop(), b && Js(b.effects, g);
  };
  return t ? n ? Y() : A = g.run() : a === "post" ? Pt(
    g.run.bind(g),
    l && l.suspense
  ) : g.run(), _ && _.push(S), S;
}
function Ip(e, t, n) {
  const r = this.proxy, a = nt(e) ? e.includes(".") ? pc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ee(t) ? o = t : (o = t.handler, n = t);
  const s = ba(this), i = di(a, o.bind(r), n);
  return s(), i;
}
function pc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
function rr(e, t, n = 0, r) {
  if (!Ke(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), at(e))
    rr(e.value, t, n, r);
  else if (we(e))
    for (let a = 0; a < e.length; a++)
      rr(e[a], t, n, r);
  else if (fo(e) || xr(e))
    e.forEach((a) => {
      rr(a, t, n, r);
    });
  else if (Nu(e))
    for (const a in e)
      rr(e[a], t, n, r);
  return e;
}
function $n(e, t) {
  if (ht === null)
    return e;
  const n = ko(ht) || ht.proxy, r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, s, i, l = Qe] = t[a];
    o && (Ee(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && rr(s), r.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function zn(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const i = a[s];
    o && (i.oldValue = o[s].value);
    let l = i.dir[r];
    l && (Yn(), Yt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), jn());
  }
}
const On = Symbol("_leaveCb"), Na = Symbol("_enterCb");
function Vp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tt(() => {
    e.isMounted = !0;
  }), bc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ht = [Function, Array], mc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ht,
  onEnter: Ht,
  onAfterEnter: Ht,
  onEnterCancelled: Ht,
  // leave
  onBeforeLeave: Ht,
  onLeave: Ht,
  onAfterLeave: Ht,
  onLeaveCancelled: Ht,
  // appear
  onBeforeAppear: Ht,
  onAppear: Ht,
  onAfterAppear: Ht,
  onAppearCancelled: Ht
}, Lp = {
  name: "BaseTransition",
  props: mc,
  setup(e, { slots: t }) {
    const n = yi(), r = Vp();
    return () => {
      const a = t.default && vc(t.default(), !0);
      if (!a || !a.length)
        return;
      let o = a[0];
      if (a.length > 1) {
        for (const h of a)
          if (h.type !== jt) {
            o = h;
            break;
          }
      }
      const s = Le(e), { mode: i } = s;
      if (r.isLeaving)
        return zo(o);
      const l = ul(o);
      if (!l)
        return zo(o);
      const c = ks(
        l,
        s,
        r,
        n
      );
      Es(l, c);
      const u = n.subTree, d = u && ul(u);
      if (d && d.type !== jt && !tr(l, d)) {
        const h = ks(
          d,
          s,
          r,
          n
        );
        if (Es(d, h), i === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, zo(o);
        i === "in-out" && l.type !== jt && (h.delayLeave = (v, y, _) => {
          const A = hc(
            r,
            d
          );
          A[String(d.key)] = d, v[On] = () => {
            y(), v[On] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = _;
        });
      }
      return o;
    };
  }
}, Fp = Lp;
function hc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ks(e, t, n, r) {
  const {
    appear: a,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: i,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: v,
    onLeaveCancelled: y,
    onBeforeAppear: _,
    onAppear: A,
    onAfterAppear: Y,
    onAppearCancelled: j
  } = t, g = String(e.key), b = hc(n, e), S = (C, F) => {
    C && Yt(
      C,
      r,
      9,
      F
    );
  }, k = (C, F) => {
    const X = F[1];
    S(C, F), we(C) ? C.every((B) => B.length <= 1) && X() : C.length <= 1 && X();
  }, P = {
    mode: o,
    persisted: s,
    beforeEnter(C) {
      let F = i;
      if (!n.isMounted)
        if (a)
          F = _ || i;
        else
          return;
      C[On] && C[On](
        !0
        /* cancelled */
      );
      const X = b[g];
      X && tr(e, X) && X.el[On] && X.el[On](), S(F, [C]);
    },
    enter(C) {
      let F = l, X = c, B = u;
      if (!n.isMounted)
        if (a)
          F = A || l, X = Y || c, B = j || u;
        else
          return;
      let R = !1;
      const U = C[Na] = (H) => {
        R || (R = !0, H ? S(B, [C]) : S(X, [C]), P.delayedLeave && P.delayedLeave(), C[Na] = void 0);
      };
      F ? k(F, [C, U]) : U();
    },
    leave(C, F) {
      const X = String(e.key);
      if (C[Na] && C[Na](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      S(d, [C]);
      let B = !1;
      const R = C[On] = (U) => {
        B || (B = !0, F(), U ? S(y, [C]) : S(v, [C]), C[On] = void 0, b[X] === e && delete b[X]);
      };
      b[X] = e, h ? k(h, [C, R]) : R();
    },
    clone(C) {
      return ks(C, t, n, r);
    }
  };
  return P;
}
function zo(e) {
  if (wo(e))
    return e = Fn(e), e.children = null, e;
}
function ul(e) {
  return wo(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function Es(e, t) {
  e.shapeFlag & 6 && e.component ? Es(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function vc(e, t = !1, n) {
  let r = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const i = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === xe ? (s.patchFlag & 128 && a++, r = r.concat(
      vc(s.children, t, i)
    )) : (t || s.type !== jt) && r.push(i != null ? Fn(s, { key: i }) : s);
  }
  if (a > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function St(e, t) {
  return Ee(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    vt({ name: e.name }, t, { setup: e })
  ) : e;
}
const Jr = (e) => !!e.type.__asyncLoader, wo = (e) => e.type.__isKeepAlive;
function Bp(e, t) {
  yc(e, "a", t);
}
function Hp(e, t) {
  yc(e, "da", t);
}
function yc(e, t, n = pt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (xo(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      wo(a.parent.vnode) && Yp(r, t, n, a), a = a.parent;
  }
}
function Yp(e, t, n, r) {
  const a = xo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Rr(() => {
    Js(r[t], a);
  }, n);
}
function xo(e, t, n = pt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Yn();
      const i = ba(n), l = Yt(t, n, e, s);
      return i(), jn(), l;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const bn = (e) => (t, n = pt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Mo || e === "sp") && xo(e, (...r) => t(...r), n)
), jp = bn("bm"), Tt = bn("m"), gc = bn("bu"), Up = bn("u"), bc = bn("bum"), Rr = bn("um"), Wp = bn("sp"), qp = bn(
  "rtg"
), Gp = bn(
  "rtc"
);
function zp(e, t = pt) {
  xo("ec", e, t);
}
function Xe(e, t, n, r) {
  let a;
  const o = n;
  if (we(e) || nt(e)) {
    a = new Array(e.length);
    for (let s = 0, i = e.length; s < i; s++)
      a[s] = t(e[s], s, void 0, o);
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let s = 0; s < e; s++)
      a[s] = t(s + 1, s, void 0, o);
  } else if (Ke(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (s, i) => t(s, i, void 0, o)
      );
    else {
      const s = Object.keys(e);
      a = new Array(s.length);
      for (let i = 0, l = s.length; i < l; i++) {
        const c = s[i];
        a[i] = t(e[c], c, i, o);
      }
    }
  else
    a = [];
  return a;
}
function At(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (we(r))
      for (let a = 0; a < r.length; a++)
        e[r[a].name] = r[a].fn;
    else r && (e[r.name] = r.key ? (...a) => {
      const o = r.fn(...a);
      return o && (o.key = r.key), o;
    } : r.fn);
  }
  return e;
}
function ge(e, t, n = {}, r, a) {
  if (ht.isCE || ht.parent && Jr(ht.parent) && ht.parent.isCE)
    return t !== "default" && (n.name = t), ze("slot", n, r);
  let o = e[t];
  o && o._c && (o._d = !1), V();
  const s = o && _c(o(n)), i = Ae(
    xe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), o && o._c && (o._d = !0), i;
}
function _c(e) {
  return e.some((t) => Qa(t) ? !(t.type === jt || t.type === xe && !_c(t.children)) : !0) ? e : null;
}
const Ds = (e) => e ? Cc(e) ? ko(e) || e.proxy : Ds(e.parent) : null, Zr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ds(e.parent),
    $root: (e) => Ds(e.root),
    $emit: (e) => e.emit,
    $options: (e) => pi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ci(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qt.bind(e.proxy)),
    $watch: (e) => Ip.bind(e)
  })
), Ko = (e, t) => e !== Qe && !e.__isScriptSetup && He(e, t), Kp = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: a, props: o, accessCache: s, type: i, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const v = s[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ko(r, t))
          return s[t] = 1, r[t];
        if (a !== Qe && He(a, t))
          return s[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && He(c, t)
        )
          return s[t] = 3, o[t];
        if (n !== Qe && He(n, t))
          return s[t] = 4, n[t];
        Os && (s[t] = 0);
      }
    }
    const u = Zr[t];
    let d, h;
    if (u)
      return t === "$attrs" && Nt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = i.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Qe && He(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, He(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return Ko(a, t) ? (a[t] = n, !0) : r !== Qe && He(r, t) ? (r[t] = n, !0) : He(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: o }
  }, s) {
    let i;
    return !!n[s] || e !== Qe && He(e, s) || Ko(t, s) || (i = o[0]) && He(i, s) || He(r, s) || He(Zr, s) || He(a.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : He(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mr() {
  return Xp().slots;
}
function Xp() {
  const e = yi();
  return e.setupContext || (e.setupContext = Nc(e));
}
function Ka(e) {
  return we(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function fi(e, t) {
  return !e || !t ? e || t : we(e) && we(t) ? e.concat(t) : vt({}, Ka(e), Ka(t));
}
let Os = !0;
function Qp(e) {
  const t = pi(e), n = e.proxy, r = e.ctx;
  Os = !1, t.beforeCreate && cl(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: s,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: v,
    updated: y,
    activated: _,
    deactivated: A,
    beforeDestroy: Y,
    beforeUnmount: j,
    destroyed: g,
    unmounted: b,
    render: S,
    renderTracked: k,
    renderTriggered: P,
    errorCaptured: C,
    serverPrefetch: F,
    // public API
    expose: X,
    inheritAttrs: B,
    // assets
    components: R,
    directives: U,
    filters: H
  } = t;
  if (c && Jp(c, r, null), s)
    for (const q in s) {
      const se = s[q];
      Ee(se) && (r[q] = se.bind(n));
    }
  if (a) {
    const q = a.call(n, n);
    Ke(q) && (e.data = gn(q));
  }
  if (Os = !0, o)
    for (const q in o) {
      const se = o[q], pe = Ee(se) ? se.bind(n, n) : Ee(se.get) ? se.get.bind(n, n) : It, J = !Ee(se) && Ee(se.set) ? se.set.bind(n) : It, p = ne({
        get: pe,
        set: J
      });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => p.value,
        set: (f) => p.value = f
      });
    }
  if (i)
    for (const q in i)
      wc(i[q], r, n, q);
  if (l) {
    const q = Ee(l) ? l.call(n) : l;
    Reflect.ownKeys(q).forEach((se) => {
      am(se, q[se]);
    });
  }
  u && cl(u, e, "c");
  function M(q, se) {
    we(se) ? se.forEach((pe) => q(pe.bind(n))) : se && q(se.bind(n));
  }
  if (M(jp, d), M(Tt, h), M(gc, v), M(Up, y), M(Bp, _), M(Hp, A), M(zp, C), M(Gp, k), M(qp, P), M(bc, j), M(Rr, b), M(Wp, F), we(X))
    if (X.length) {
      const q = e.exposed || (e.exposed = {});
      X.forEach((se) => {
        Object.defineProperty(q, se, {
          get: () => n[se],
          set: (pe) => n[se] = pe
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === It && (e.render = S), B != null && (e.inheritAttrs = B), R && (e.components = R), U && (e.directives = U);
}
function Jp(e, t, n = It) {
  we(e) && (e = As(e));
  for (const r in e) {
    const a = e[r];
    let o;
    Ke(a) ? "default" in a ? o = ea(
      a.from || r,
      a.default,
      !0
    ) : o = ea(a.from || r) : o = ea(a), at(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function cl(e, t, n) {
  Yt(
    we(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wc(e, t, n, r) {
  const a = r.includes(".") ? pc(n, r) : () => n[r];
  if (nt(e)) {
    const o = t[e];
    Ee(o) && bt(a, o);
  } else if (Ee(e))
    bt(a, e.bind(n));
  else if (Ke(e))
    if (we(e))
      e.forEach((o) => wc(o, t, n, r));
    else {
      const o = Ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ee(o) && bt(a, o, e);
    }
}
function pi(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = o.get(t);
  let l;
  return i ? l = i : !a.length && !n && !r ? l = t : (l = {}, a.length && a.forEach(
    (c) => Xa(l, c, s, !0)
  ), Xa(l, t, s)), Ke(t) && o.set(t, l), l;
}
function Xa(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Xa(e, o, n, !0), a && a.forEach(
    (s) => Xa(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const i = Zp[s] || n && n[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const Zp = {
  data: dl,
  props: fl,
  emits: fl,
  // objects
  methods: Gr,
  computed: Gr,
  // lifecycle
  beforeCreate: Dt,
  created: Dt,
  beforeMount: Dt,
  mounted: Dt,
  beforeUpdate: Dt,
  updated: Dt,
  beforeDestroy: Dt,
  beforeUnmount: Dt,
  destroyed: Dt,
  unmounted: Dt,
  activated: Dt,
  deactivated: Dt,
  errorCaptured: Dt,
  serverPrefetch: Dt,
  // assets
  components: Gr,
  directives: Gr,
  // watch
  watch: tm,
  // provide / inject
  provide: dl,
  inject: em
};
function dl(e, t) {
  return t ? e ? function() {
    return vt(
      Ee(e) ? e.call(this, this) : e,
      Ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function em(e, t) {
  return Gr(As(e), As(t));
}
function As(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Dt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gr(e, t) {
  return e ? vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fl(e, t) {
  return e ? we(e) && we(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : vt(
    /* @__PURE__ */ Object.create(null),
    Ka(e),
    Ka(t ?? {})
  ) : t;
}
function tm(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = vt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Dt(e[r], t[r]);
  return n;
}
function xc() {
  return {
    app: null,
    config: {
      isNativeTag: Tf,
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
let nm = 0;
function rm(e, t) {
  return function(r, a = null) {
    Ee(r) || (r = vt({}, r)), a != null && !Ke(a) && (a = null);
    const o = xc(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = o.app = {
      _uid: nm++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: Am,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && Ee(c.install) ? (s.add(c), c.install(l, ...u)) : Ee(c) && (s.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (o.components[c] = u, l) : o.components[c];
      },
      directive(c, u) {
        return u ? (o.directives[c] = u, l) : o.directives[c];
      },
      mount(c, u, d) {
        if (!i) {
          const h = ze(r, a);
          return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(h, c) : e(h, c, d), i = !0, l._container = c, c.__vue_app__ = l, ko(h.component) || h.component.proxy;
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return o.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = Tr;
        Tr = l;
        try {
          return c();
        } finally {
          Tr = u;
        }
      }
    };
    return l;
  };
}
let Tr = null;
function am(e, t) {
  if (pt) {
    let n = pt.provides;
    const r = pt.parent && pt.parent.provides;
    r === n && (n = pt.provides = Object.create(r)), n[e] = t;
  }
}
function ea(e, t, n = !1) {
  const r = pt || ht;
  if (r || Tr) {
    const a = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Tr._context.provides;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ee(t) ? t.call(r && r.proxy) : t;
  }
}
function om() {
  return !!(pt || ht || Tr);
}
function sm(e, t, n, r = !1) {
  const a = {}, o = {};
  Ua(o, To, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Sc(e, t, a, o);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = r ? a : op(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function im(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, i = Le(a), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (bo(e.emitsOptions, h))
          continue;
        const v = t[h];
        if (l)
          if (He(o, h))
            v !== o[h] && (o[h] = v, c = !0);
          else {
            const y = Xt(h);
            a[y] = Ps(
              l,
              i,
              y,
              v,
              e,
              !1
            );
          }
        else
          v !== o[h] && (o[h] = v, c = !0);
      }
    }
  } else {
    Sc(e, t, a, o) && (c = !0);
    let u;
    for (const d in i)
      (!t || // for camelCase
      !He(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Hn(d)) === d || !He(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[d] = Ps(
        l,
        i,
        d,
        void 0,
        e,
        !0
      )) : delete a[d]);
    if (o !== i)
      for (const d in o)
        (!t || !He(t, d)) && (delete o[d], c = !0);
  }
  c && vn(e, "set", "$attrs");
}
function Sc(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (zr(l))
        continue;
      const c = t[l];
      let u;
      a && He(a, u = Xt(l)) ? !o || !o.includes(u) ? n[u] = c : (i || (i = {}))[u] = c : bo(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (o) {
    const l = Le(n), c = i || Qe;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Ps(
        a,
        l,
        d,
        c[d],
        e,
        !He(c, d)
      );
    }
  }
  return s;
}
function Ps(e, t, n, r, a, o) {
  const s = e[n];
  if (s != null) {
    const i = He(s, "default");
    if (i && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && Ee(l)) {
        const { propsDefaults: c } = a;
        if (n in c)
          r = c[n];
        else {
          const u = ba(a);
          r = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
    }
    s[
      0
      /* shouldCast */
    ] && (o && !i ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Hn(n)) && (r = !0));
  }
  return r;
}
function Tc(e, t, n = !1) {
  const r = t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, s = {}, i = [];
  let l = !1;
  if (!Ee(e)) {
    const u = (d) => {
      l = !0;
      const [h, v] = Tc(d, t, !0);
      vt(s, h), v && i.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Ke(e) && r.set(e, wr), wr;
  if (we(o))
    for (let u = 0; u < o.length; u++) {
      const d = Xt(o[u]);
      pl(d) && (s[d] = Qe);
    }
  else if (o)
    for (const u in o) {
      const d = Xt(u);
      if (pl(d)) {
        const h = o[u], v = s[d] = we(h) || Ee(h) ? { type: h } : vt({}, h);
        if (v) {
          const y = vl(Boolean, v.type), _ = vl(String, v.type);
          v[
            0
            /* shouldCast */
          ] = y > -1, v[
            1
            /* shouldCastTrue */
          ] = _ < 0 || y < _, (y > -1 || He(v, "default")) && i.push(d);
        }
      }
    }
  const c = [s, i];
  return Ke(e) && r.set(e, c), c;
}
function pl(e) {
  return e[0] !== "$" && !zr(e);
}
function ml(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function hl(e, t) {
  return ml(e) === ml(t);
}
function vl(e, t) {
  return we(t) ? t.findIndex((n) => hl(n, e)) : Ee(t) && hl(t, e) ? 0 : -1;
}
const Mc = (e) => e[0] === "_" || e === "$stable", mi = (e) => we(e) ? e.map(an) : [an(e)], lm = (e, t, n) => {
  if (t._n)
    return t;
  const r = $e((...a) => (Xr.NODE_ENV !== "production" && pt && (!n || (n.root, pt.root)), mi(t(...a))), n);
  return r._c = !1, r;
}, kc = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (Mc(a))
      continue;
    const o = e[a];
    if (Ee(o))
      t[a] = lm(a, o, r);
    else if (o != null) {
      const s = mi(o);
      t[a] = () => s;
    }
  }
}, Ec = (e, t) => {
  const n = mi(t);
  e.slots.default = () => n;
}, um = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Le(t), Ua(t, "_", n)) : kc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ec(e, t);
  Ua(e.slots, To, 1);
}, cm = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, s = Qe;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? o = !1 : (vt(a, t), !n && i === 1 && delete a._) : (o = !t.$stable, kc(t, a)), s = t;
  } else t && (Ec(e, t), s = { default: 1 });
  if (o)
    for (const i in a)
      !Mc(i) && s[i] == null && delete a[i];
};
function Cs(e, t, n, r, a = !1) {
  if (we(e)) {
    e.forEach(
      (h, v) => Cs(
        h,
        t && (we(t) ? t[v] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Jr(r) && !a)
    return;
  const o = r.shapeFlag & 4 ? ko(r.component) || r.component.proxy : r.el, s = a ? null : o, { i, r: l } = e, c = t && t.r, u = i.refs === Qe ? i.refs = {} : i.refs, d = i.setupState;
  if (c != null && c !== l && (nt(c) ? (u[c] = null, He(d, c) && (d[c] = null)) : at(c) && (c.value = null)), Ee(l))
    yn(l, i, 12, [s, u]);
  else {
    const h = nt(l), v = at(l);
    if (h || v) {
      const y = () => {
        if (e.f) {
          const _ = h ? He(d, l) ? d[l] : u[l] : l.value;
          a ? we(_) && Js(_, o) : we(_) ? _.includes(o) || _.push(o) : h ? (u[l] = [o], He(d, l) && (d[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value));
        } else h ? (u[l] = s, He(d, l) && (d[l] = s)) : v && (l.value = s, e.k && (u[e.k] = s));
      };
      s ? (y.id = -1, Pt(y, n)) : y();
    }
  }
}
const Pt = Cp;
function dm(e) {
  return fm(e);
}
function fm(e, t) {
  const n = $u();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: s,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: h,
    setScopeId: v = It,
    insertStaticContent: y
  } = e, _ = (m, w, N, G = null, D = null, re = null, le = void 0, ie = null, ue = !!w.dynamicChildren) => {
    if (m === w)
      return;
    m && !tr(m, w) && (G = Pe(m), f(m, D, re, !0), m = null), w.patchFlag === -2 && (ue = !1, w.dynamicChildren = null);
    const { type: ee, ref: de, shapeFlag: me } = w;
    switch (ee) {
      case So:
        A(m, w, N, G);
        break;
      case jt:
        Y(m, w, N, G);
        break;
      case Qo:
        m == null && j(w, N, G, le);
        break;
      case xe:
        R(
          m,
          w,
          N,
          G,
          D,
          re,
          le,
          ie,
          ue
        );
        break;
      default:
        me & 1 ? S(
          m,
          w,
          N,
          G,
          D,
          re,
          le,
          ie,
          ue
        ) : me & 6 ? U(
          m,
          w,
          N,
          G,
          D,
          re,
          le,
          ie,
          ue
        ) : (me & 64 || me & 128) && ee.process(
          m,
          w,
          N,
          G,
          D,
          re,
          le,
          ie,
          ue,
          ve
        );
    }
    de != null && D && Cs(de, m && m.ref, re, w || m, !w);
  }, A = (m, w, N, G) => {
    if (m == null)
      r(
        w.el = i(w.children),
        N,
        G
      );
    else {
      const D = w.el = m.el;
      w.children !== m.children && c(D, w.children);
    }
  }, Y = (m, w, N, G) => {
    m == null ? r(
      w.el = l(w.children || ""),
      N,
      G
    ) : w.el = m.el;
  }, j = (m, w, N, G) => {
    [m.el, m.anchor] = y(
      m.children,
      w,
      N,
      G,
      m.el,
      m.anchor
    );
  }, g = ({ el: m, anchor: w }, N, G) => {
    let D;
    for (; m && m !== w; )
      D = h(m), r(m, N, G), m = D;
    r(w, N, G);
  }, b = ({ el: m, anchor: w }) => {
    let N;
    for (; m && m !== w; )
      N = h(m), a(m), m = N;
    a(w);
  }, S = (m, w, N, G, D, re, le, ie, ue) => {
    w.type === "svg" ? le = "svg" : w.type === "math" && (le = "mathml"), m == null ? k(
      w,
      N,
      G,
      D,
      re,
      le,
      ie,
      ue
    ) : F(
      m,
      w,
      D,
      re,
      le,
      ie,
      ue
    );
  }, k = (m, w, N, G, D, re, le, ie) => {
    let ue, ee;
    const { props: de, shapeFlag: me, transition: be, dirs: Me } = m;
    if (ue = m.el = s(
      m.type,
      re,
      de && de.is,
      de
    ), me & 8 ? u(ue, m.children) : me & 16 && C(
      m.children,
      ue,
      null,
      G,
      D,
      Xo(m, re),
      le,
      ie
    ), Me && zn(m, null, G, "created"), P(ue, m, m.scopeId, le, G), de) {
      for (const Ye in de)
        Ye !== "value" && !zr(Ye) && o(
          ue,
          Ye,
          null,
          de[Ye],
          re,
          m.children,
          G,
          D,
          $
        );
      "value" in de && o(ue, "value", null, de.value, re), (ee = de.onVnodeBeforeMount) && nn(ee, G, m);
    }
    Me && zn(m, null, G, "beforeMount");
    const Re = pm(D, be);
    Re && be.beforeEnter(ue), r(ue, w, N), ((ee = de && de.onVnodeMounted) || Re || Me) && Pt(() => {
      ee && nn(ee, G, m), Re && be.enter(ue), Me && zn(m, null, G, "mounted");
    }, D);
  }, P = (m, w, N, G, D) => {
    if (N && v(m, N), G)
      for (let re = 0; re < G.length; re++)
        v(m, G[re]);
    if (D) {
      let re = D.subTree;
      if (w === re) {
        const le = D.vnode;
        P(
          m,
          le,
          le.scopeId,
          le.slotScopeIds,
          D.parent
        );
      }
    }
  }, C = (m, w, N, G, D, re, le, ie, ue = 0) => {
    for (let ee = ue; ee < m.length; ee++) {
      const de = m[ee] = ie ? An(m[ee]) : an(m[ee]);
      _(
        null,
        de,
        w,
        N,
        G,
        D,
        re,
        le,
        ie
      );
    }
  }, F = (m, w, N, G, D, re, le) => {
    const ie = w.el = m.el;
    let { patchFlag: ue, dynamicChildren: ee, dirs: de } = w;
    ue |= m.patchFlag & 16;
    const me = m.props || Qe, be = w.props || Qe;
    let Me;
    if (N && Kn(N, !1), (Me = be.onVnodeBeforeUpdate) && nn(Me, N, w, m), de && zn(w, m, N, "beforeUpdate"), N && Kn(N, !0), ee ? X(
      m.dynamicChildren,
      ee,
      ie,
      N,
      G,
      Xo(w, D),
      re
    ) : le || se(
      m,
      w,
      ie,
      null,
      N,
      G,
      Xo(w, D),
      re,
      !1
    ), ue > 0) {
      if (ue & 16)
        B(
          ie,
          w,
          me,
          be,
          N,
          G,
          D
        );
      else if (ue & 2 && me.class !== be.class && o(ie, "class", null, be.class, D), ue & 4 && o(ie, "style", me.style, be.style, D), ue & 8) {
        const Re = w.dynamicProps;
        for (let Ye = 0; Ye < Re.length; Ye++) {
          const qe = Re[Ye], st = me[qe], I = be[qe];
          (I !== st || qe === "value") && o(
            ie,
            qe,
            st,
            I,
            D,
            m.children,
            N,
            G,
            $
          );
        }
      }
      ue & 1 && m.children !== w.children && u(ie, w.children);
    } else !le && ee == null && B(
      ie,
      w,
      me,
      be,
      N,
      G,
      D
    );
    ((Me = be.onVnodeUpdated) || de) && Pt(() => {
      Me && nn(Me, N, w, m), de && zn(w, m, N, "updated");
    }, G);
  }, X = (m, w, N, G, D, re, le) => {
    for (let ie = 0; ie < w.length; ie++) {
      const ue = m[ie], ee = w[ie], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tr(ue, ee) || // - In the case of a component, it could contain anything.
        ue.shapeFlag & 70) ? d(ue.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          N
        )
      );
      _(
        ue,
        ee,
        de,
        null,
        G,
        D,
        re,
        le,
        !0
      );
    }
  }, B = (m, w, N, G, D, re, le) => {
    if (N !== G) {
      if (N !== Qe)
        for (const ie in N)
          !zr(ie) && !(ie in G) && o(
            m,
            ie,
            N[ie],
            null,
            le,
            w.children,
            D,
            re,
            $
          );
      for (const ie in G) {
        if (zr(ie))
          continue;
        const ue = G[ie], ee = N[ie];
        ue !== ee && ie !== "value" && o(
          m,
          ie,
          ee,
          ue,
          le,
          w.children,
          D,
          re,
          $
        );
      }
      "value" in G && o(m, "value", N.value, G.value, le);
    }
  }, R = (m, w, N, G, D, re, le, ie, ue) => {
    const ee = w.el = m ? m.el : i(""), de = w.anchor = m ? m.anchor : i("");
    let { patchFlag: me, dynamicChildren: be, slotScopeIds: Me } = w;
    Me && (ie = ie ? ie.concat(Me) : Me), m == null ? (r(ee, N, G), r(de, N, G), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      N,
      de,
      D,
      re,
      le,
      ie,
      ue
    )) : me > 0 && me & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren ? (X(
      m.dynamicChildren,
      be,
      N,
      D,
      re,
      le,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || D && w === D.subTree) && hi(
      m,
      w,
      !0
      /* shallow */
    )) : se(
      m,
      w,
      N,
      de,
      D,
      re,
      le,
      ie,
      ue
    );
  }, U = (m, w, N, G, D, re, le, ie, ue) => {
    w.slotScopeIds = ie, m == null ? w.shapeFlag & 512 ? D.ctx.activate(
      w,
      N,
      G,
      le,
      ue
    ) : H(
      w,
      N,
      G,
      D,
      re,
      le,
      ue
    ) : x(m, w, ue);
  }, H = (m, w, N, G, D, re, le) => {
    const ie = m.component = Sm(
      m,
      G,
      D
    );
    if (wo(m) && (ie.ctx.renderer = ve), Tm(ie), ie.asyncDep) {
      if (D && D.registerDep(ie, M), !m.el) {
        const ue = ie.subTree = ze(jt);
        Y(null, ue, w, N);
      }
    } else
      M(
        ie,
        m,
        w,
        N,
        D,
        re,
        le
      );
  }, x = (m, w, N) => {
    const G = w.component = m.component;
    if (Dp(m, w, N))
      if (G.asyncDep && !G.asyncResolved) {
        q(G, w, N);
        return;
      } else
        G.next = w, xp(G.update), G.effect.dirty = !0, G.update();
    else
      w.el = m.el, G.vnode = w;
  }, M = (m, w, N, G, D, re, le) => {
    const ie = () => {
      if (m.isMounted) {
        let { next: de, bu: me, u: be, parent: Me, vnode: Re } = m;
        {
          const ae = Dc(m);
          if (ae) {
            de && (de.el = Re.el, q(m, de, le)), ae.asyncDep.then(() => {
              m.isUnmounted || ie();
            });
            return;
          }
        }
        let Ye = de, qe;
        Kn(m, !1), de ? (de.el = Re.el, q(m, de, le)) : de = Re, me && La(me), (qe = de.props && de.props.onVnodeBeforeUpdate) && nn(qe, Me, de, Re), Kn(m, !0);
        const st = Go(m), I = m.subTree;
        m.subTree = st, _(
          I,
          st,
          // parent may have changed if it's in a teleport
          d(I.el),
          // anchor may have changed if it's in a fragment
          Pe(I),
          m,
          D,
          re
        ), de.el = st.el, Ye === null && Op(m, st.el), be && Pt(be, D), (qe = de.props && de.props.onVnodeUpdated) && Pt(
          () => nn(qe, Me, de, Re),
          D
        );
      } else {
        let de;
        const { el: me, props: be } = w, { bm: Me, m: Re, parent: Ye } = m, qe = Jr(w);
        if (Kn(m, !1), Me && La(Me), !qe && (de = be && be.onVnodeBeforeMount) && nn(de, Ye, w), Kn(m, !0), me && E) {
          const st = () => {
            m.subTree = Go(m), E(
              me,
              m.subTree,
              m,
              D,
              null
            );
          };
          qe ? w.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !m.isUnmounted && st()
          ) : st();
        } else {
          const st = m.subTree = Go(m);
          _(
            null,
            st,
            N,
            G,
            m,
            D,
            re
          ), w.el = st.el;
        }
        if (Re && Pt(Re, D), !qe && (de = be && be.onVnodeMounted)) {
          const st = w;
          Pt(
            () => nn(de, Ye, st),
            D
          );
        }
        (w.shapeFlag & 256 || Ye && Jr(Ye.vnode) && Ye.vnode.shapeFlag & 256) && m.a && Pt(m.a, D), m.isMounted = !0, w = N = G = null;
      }
    }, ue = m.effect = new ti(
      ie,
      It,
      () => ci(ee),
      m.scope
      // track it in component's effect scope
    ), ee = m.update = () => {
      ue.dirty && ue.run();
    };
    ee.id = m.uid, Kn(m, !0), ee();
  }, q = (m, w, N) => {
    w.component = m;
    const G = m.vnode.props;
    m.vnode = w, m.next = null, im(m, w.props, G, N), cm(m, w.children, N), Yn(), sl(m), jn();
  }, se = (m, w, N, G, D, re, le, ie, ue = !1) => {
    const ee = m && m.children, de = m ? m.shapeFlag : 0, me = w.children, { patchFlag: be, shapeFlag: Me } = w;
    if (be > 0) {
      if (be & 128) {
        J(
          ee,
          me,
          N,
          G,
          D,
          re,
          le,
          ie,
          ue
        );
        return;
      } else if (be & 256) {
        pe(
          ee,
          me,
          N,
          G,
          D,
          re,
          le,
          ie,
          ue
        );
        return;
      }
    }
    Me & 8 ? (de & 16 && $(ee, D, re), me !== ee && u(N, me)) : de & 16 ? Me & 16 ? J(
      ee,
      me,
      N,
      G,
      D,
      re,
      le,
      ie,
      ue
    ) : $(ee, D, re, !0) : (de & 8 && u(N, ""), Me & 16 && C(
      me,
      N,
      G,
      D,
      re,
      le,
      ie,
      ue
    ));
  }, pe = (m, w, N, G, D, re, le, ie, ue) => {
    m = m || wr, w = w || wr;
    const ee = m.length, de = w.length, me = Math.min(ee, de);
    let be;
    for (be = 0; be < me; be++) {
      const Me = w[be] = ue ? An(w[be]) : an(w[be]);
      _(
        m[be],
        Me,
        N,
        null,
        D,
        re,
        le,
        ie,
        ue
      );
    }
    ee > de ? $(
      m,
      D,
      re,
      !0,
      !1,
      me
    ) : C(
      w,
      N,
      G,
      D,
      re,
      le,
      ie,
      ue,
      me
    );
  }, J = (m, w, N, G, D, re, le, ie, ue) => {
    let ee = 0;
    const de = w.length;
    let me = m.length - 1, be = de - 1;
    for (; ee <= me && ee <= be; ) {
      const Me = m[ee], Re = w[ee] = ue ? An(w[ee]) : an(w[ee]);
      if (tr(Me, Re))
        _(
          Me,
          Re,
          N,
          null,
          D,
          re,
          le,
          ie,
          ue
        );
      else
        break;
      ee++;
    }
    for (; ee <= me && ee <= be; ) {
      const Me = m[me], Re = w[be] = ue ? An(w[be]) : an(w[be]);
      if (tr(Me, Re))
        _(
          Me,
          Re,
          N,
          null,
          D,
          re,
          le,
          ie,
          ue
        );
      else
        break;
      me--, be--;
    }
    if (ee > me) {
      if (ee <= be) {
        const Me = be + 1, Re = Me < de ? w[Me].el : G;
        for (; ee <= be; )
          _(
            null,
            w[ee] = ue ? An(w[ee]) : an(w[ee]),
            N,
            Re,
            D,
            re,
            le,
            ie,
            ue
          ), ee++;
      }
    } else if (ee > be)
      for (; ee <= me; )
        f(m[ee], D, re, !0), ee++;
    else {
      const Me = ee, Re = ee, Ye = /* @__PURE__ */ new Map();
      for (ee = Re; ee <= be; ee++) {
        const he = w[ee] = ue ? An(w[ee]) : an(w[ee]);
        he.key != null && Ye.set(he.key, ee);
      }
      let qe, st = 0;
      const I = be - Re + 1;
      let ae = !1, _e = 0;
      const ke = new Array(I);
      for (ee = 0; ee < I; ee++)
        ke[ee] = 0;
      for (ee = Me; ee <= me; ee++) {
        const he = m[ee];
        if (st >= I) {
          f(he, D, re, !0);
          continue;
        }
        let ye;
        if (he.key != null)
          ye = Ye.get(he.key);
        else
          for (qe = Re; qe <= be; qe++)
            if (ke[qe - Re] === 0 && tr(he, w[qe])) {
              ye = qe;
              break;
            }
        ye === void 0 ? f(he, D, re, !0) : (ke[ye - Re] = ee + 1, ye >= _e ? _e = ye : ae = !0, _(
          he,
          w[ye],
          N,
          null,
          D,
          re,
          le,
          ie,
          ue
        ), st++);
      }
      const Z = ae ? mm(ke) : wr;
      for (qe = Z.length - 1, ee = I - 1; ee >= 0; ee--) {
        const he = Re + ee, ye = w[he], Bt = he + 1 < de ? w[he + 1].el : G;
        ke[ee] === 0 ? _(
          null,
          ye,
          N,
          Bt,
          D,
          re,
          le,
          ie,
          ue
        ) : ae && (qe < 0 || ee !== Z[qe] ? p(ye, N, Bt, 2) : qe--);
      }
    }
  }, p = (m, w, N, G, D = null) => {
    const { el: re, type: le, transition: ie, children: ue, shapeFlag: ee } = m;
    if (ee & 6) {
      p(m.component.subTree, w, N, G);
      return;
    }
    if (ee & 128) {
      m.suspense.move(w, N, G);
      return;
    }
    if (ee & 64) {
      le.move(m, w, N, ve);
      return;
    }
    if (le === xe) {
      r(re, w, N);
      for (let me = 0; me < ue.length; me++)
        p(ue[me], w, N, G);
      r(m.anchor, w, N);
      return;
    }
    if (le === Qo) {
      g(m, w, N);
      return;
    }
    if (G !== 2 && ee & 1 && ie)
      if (G === 0)
        ie.beforeEnter(re), r(re, w, N), Pt(() => ie.enter(re), D);
      else {
        const { leave: me, delayLeave: be, afterLeave: Me } = ie, Re = () => r(re, w, N), Ye = () => {
          me(re, () => {
            Re(), Me && Me();
          });
        };
        be ? be(re, Re, Ye) : Ye();
      }
    else
      r(re, w, N);
  }, f = (m, w, N, G = !1, D = !1) => {
    const {
      type: re,
      props: le,
      ref: ie,
      children: ue,
      dynamicChildren: ee,
      shapeFlag: de,
      patchFlag: me,
      dirs: be
    } = m;
    if (ie != null && Cs(ie, null, N, m, !0), de & 256) {
      w.ctx.deactivate(m);
      return;
    }
    const Me = de & 1 && be, Re = !Jr(m);
    let Ye;
    if (Re && (Ye = le && le.onVnodeBeforeUnmount) && nn(Ye, w, m), de & 6)
      ce(m.component, N, G);
    else {
      if (de & 128) {
        m.suspense.unmount(N, G);
        return;
      }
      Me && zn(m, null, w, "beforeUnmount"), de & 64 ? m.type.remove(
        m,
        w,
        N,
        D,
        ve,
        G
      ) : ee && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== xe || me > 0 && me & 64) ? $(
        ee,
        w,
        N,
        !1,
        !0
      ) : (re === xe && me & 384 || !D && de & 16) && $(ue, w, N), G && O(m);
    }
    (Re && (Ye = le && le.onVnodeUnmounted) || Me) && Pt(() => {
      Ye && nn(Ye, w, m), Me && zn(m, null, w, "unmounted");
    }, N);
  }, O = (m) => {
    const { type: w, el: N, anchor: G, transition: D } = m;
    if (w === xe) {
      z(N, G);
      return;
    }
    if (w === Qo) {
      b(m);
      return;
    }
    const re = () => {
      a(N), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (m.shapeFlag & 1 && D && !D.persisted) {
      const { leave: le, delayLeave: ie } = D, ue = () => le(N, re);
      ie ? ie(m.el, re, ue) : ue();
    } else
      re();
  }, z = (m, w) => {
    let N;
    for (; m !== w; )
      N = h(m), a(m), m = N;
    a(w);
  }, ce = (m, w, N) => {
    const { bum: G, scope: D, update: re, subTree: le, um: ie } = m;
    G && La(G), D.stop(), re && (re.active = !1, f(le, m, w, N)), ie && Pt(ie, w), Pt(() => {
      m.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, $ = (m, w, N, G = !1, D = !1, re = 0) => {
    for (let le = re; le < m.length; le++)
      f(m[le], w, N, G, D);
  }, Pe = (m) => m.shapeFlag & 6 ? Pe(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : h(m.anchor || m.el);
  let Ie = !1;
  const L = (m, w, N) => {
    m == null ? w._vnode && f(w._vnode, null, null, !0) : _(
      w._vnode || null,
      m,
      w,
      null,
      null,
      null,
      N
    ), Ie || (Ie = !0, sl(), sc(), Ie = !1), w._vnode = m;
  }, ve = {
    p: _,
    um: f,
    m: p,
    r: O,
    mt: H,
    mc: C,
    pc: se,
    pbc: X,
    n: Pe,
    o: e
  };
  let Ce, E;
  return {
    render: L,
    hydrate: Ce,
    createApp: rm(L, Ce)
  };
}
function Xo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Kn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function pm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (we(r) && we(a))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let i = a[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[o] = An(a[o]), i.el = s.el), n || hi(s, i)), i.type === So && (i.el = s.el);
    }
}
function mm(e) {
  const t = e.slice(), n = [0];
  let r, a, o, s, i;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (a = n[n.length - 1], e[a] < c) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        i = o + s >> 1, e[n[i]] < c ? o = i + 1 : s = i;
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function Dc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dc(t);
}
const hm = (e) => e.__isTeleport, ta = (e) => e && (e.disabled || e.disabled === ""), yl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Rs = (e, t) => {
  const n = e && e.to;
  return nt(n) ? t ? t(n) : null : n;
}, vm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, o, s, i, l, c) {
    const {
      mc: u,
      pc: d,
      pbc: h,
      o: { insert: v, querySelector: y, createText: _, createComment: A }
    } = c, Y = ta(t.props);
    let { shapeFlag: j, children: g, dynamicChildren: b } = t;
    if (e == null) {
      const S = t.el = _(""), k = t.anchor = _("");
      v(S, n, r), v(k, n, r);
      const P = t.target = Rs(t.props, y), C = t.targetAnchor = _("");
      P && (v(C, P), s === "svg" || yl(P) ? s = "svg" : (s === "mathml" || gl(P)) && (s = "mathml"));
      const F = (X, B) => {
        j & 16 && u(
          g,
          X,
          B,
          a,
          o,
          s,
          i,
          l
        );
      };
      Y ? F(n, k) : P && F(P, C);
    } else {
      t.el = e.el;
      const S = t.anchor = e.anchor, k = t.target = e.target, P = t.targetAnchor = e.targetAnchor, C = ta(e.props), F = C ? n : k, X = C ? S : P;
      if (s === "svg" || yl(k) ? s = "svg" : (s === "mathml" || gl(k)) && (s = "mathml"), b ? (h(
        e.dynamicChildren,
        b,
        F,
        a,
        o,
        s,
        i
      ), hi(e, t, !0)) : l || d(
        e,
        t,
        F,
        X,
        a,
        o,
        s,
        i,
        !1
      ), Y)
        C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $a(
          t,
          n,
          S,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = Rs(
          t.props,
          y
        );
        B && $a(
          t,
          B,
          null,
          c,
          0
        );
      } else C && $a(
        t,
        k,
        P,
        c,
        1
      );
    }
    Oc(t);
  },
  remove(e, t, n, r, { um: a, o: { remove: o } }, s) {
    const { shapeFlag: i, children: l, anchor: c, targetAnchor: u, target: d, props: h } = e;
    if (d && o(u), s && o(c), i & 16) {
      const v = s || !ta(h);
      for (let y = 0; y < l.length; y++) {
        const _ = l[y];
        a(
          _,
          t,
          n,
          v,
          !!_.dynamicChildren
        );
      }
    }
  },
  move: $a,
  hydrate: ym
};
function $a(e, t, n, { o: { insert: r }, m: a }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: i, shapeFlag: l, children: c, props: u } = e, d = o === 2;
  if (d && r(s, t, n), (!d || ta(u)) && l & 16)
    for (let h = 0; h < c.length; h++)
      a(
        c[h],
        t,
        n,
        2
      );
  d && r(i, t, n);
}
function ym(e, t, n, r, a, o, {
  o: { nextSibling: s, parentNode: i, querySelector: l }
}, c) {
  const u = t.target = Rs(
    t.props,
    l
  );
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (ta(t.props))
        t.anchor = c(
          s(e),
          t,
          i(e),
          n,
          r,
          a,
          o
        ), t.targetAnchor = d;
      else {
        t.anchor = s(e);
        let h = d;
        for (; h; )
          if (h = s(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
            t.targetAnchor = h, u._lpa = t.targetAnchor && s(t.targetAnchor);
            break;
          }
        c(
          d,
          t,
          u,
          n,
          r,
          a,
          o
        );
      }
    Oc(t);
  }
  return t.anchor && s(t.anchor);
}
const gm = vm;
function Oc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const xe = Symbol.for("v-fgt"), So = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), Qo = Symbol.for("v-stc"), na = [];
let Gt = null;
function V(e = !1) {
  na.push(Gt = e ? null : []);
}
function bm() {
  na.pop(), Gt = na[na.length - 1] || null;
}
let da = 1;
function bl(e) {
  da += e;
}
function Ac(e) {
  return e.dynamicChildren = da > 0 ? Gt || wr : null, bm(), da > 0 && Gt && Gt.push(e), e;
}
function K(e, t, n, r, a, o) {
  return Ac(
    Te(
      e,
      t,
      n,
      r,
      a,
      o,
      !0
    )
  );
}
function Ae(e, t, n, r, a) {
  return Ac(
    ze(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Qa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const To = "__vInternal", Pc = ({ key: e }) => e ?? null, Fa = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nt(e) || at(e) || Ee(e) ? { i: ht, r: e, k: t, f: !!n } : e : null);
function Te(e, t = null, n = null, r = 0, a = null, o = e === xe ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pc(t),
    ref: t && Fa(t),
    scopeId: uc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: ht
  };
  return i ? (vi(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= nt(n) ? 8 : 16), da > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Gt.push(l), l;
}
const ze = _m;
function _m(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === dc) && (e = jt), Qa(e)) {
    const i = Fn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vi(i, n), da > 0 && !o && Gt && (i.shapeFlag & 6 ? Gt[Gt.indexOf(e)] = i : Gt.push(i)), i.patchFlag |= -2, i;
  }
  if (Om(e) && (e = e.__vccOpts), t) {
    t = kt(t);
    let { class: i, style: l } = t;
    i && !nt(i) && (t.class = Ve(i)), Ke(l) && (Zu(l) && !we(l) && (l = vt({}, l)), t.style = Ot(l));
  }
  const s = nt(e) ? 1 : Pp(e) ? 128 : hm(e) ? 64 : Ke(e) ? 4 : Ee(e) ? 2 : 0;
  return Te(
    e,
    t,
    n,
    r,
    a,
    s,
    o,
    !0
  );
}
function kt(e) {
  return e ? Zu(e) || To in e ? vt({}, e) : e : null;
}
function Fn(e, t, n = !1) {
  const { props: r, ref: a, patchFlag: o, children: s } = e, i = t ? wt(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && Pc(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? we(a) ? a.concat(Fa(t)) : [a, Fa(t)] : Fa(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Fn(e.ssContent),
    ssFallback: e.ssFallback && Fn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Jt(e = " ", t = 0) {
  return ze(So, null, e, t);
}
function te(e = "", t = !1) {
  return t ? (V(), Ae(jt, null, e)) : ze(jt, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? ze(jt) : we(e) ? ze(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? An(e) : ze(So, null, String(e));
}
function An(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fn(e);
}
function vi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (we(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), vi(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !(To in t) ? t._ctx = ht : a === 3 && ht && (ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ee(t) ? (t = { default: t, _ctx: ht }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = Ve([t.class, r.class]));
      else if (a === "style")
        t.style = Ot([t.style, r.style]);
      else if (co(a)) {
        const o = t[a], s = r[a];
        s && o !== s && !(we(o) && o.includes(s)) && (t[a] = o ? [].concat(o, s) : s);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function nn(e, t, n, r = null) {
  Yt(e, t, 7, [
    n,
    r
  ]);
}
const wm = xc();
let xm = 0;
function Sm(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || wm, o = {
    uid: xm++,
    vnode: e,
    type: r,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Lu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Tc(r, a),
    emitsOptions: lc(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Qe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Qe,
    data: Qe,
    props: Qe,
    attrs: Qe,
    slots: Qe,
    refs: Qe,
    setupState: Qe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Mp.bind(null, o), e.ce && e.ce(o), o;
}
let pt = null;
const yi = () => pt || ht;
let Ja, Ns;
{
  const e = $u(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((s) => s(o)) : a[0](o);
    };
  };
  Ja = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pt = n
  ), Ns = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mo = n
  );
}
const ba = (e) => {
  const t = pt;
  return Ja(e), e.scope.on(), () => {
    e.scope.off(), Ja(t);
  };
}, _l = () => {
  pt && pt.scope.off(), Ja(null);
};
function Cc(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = !1;
function Tm(e, t = !1) {
  t && Ns(t);
  const { props: n, children: r } = e.vnode, a = Cc(e);
  sm(e, n, a, t), um(e, r);
  const o = a ? Mm(e, t) : void 0;
  return t && Ns(!1), o;
}
function Mm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = yo(new Proxy(e.ctx, Kp));
  const { setup: r } = n;
  if (r) {
    const a = e.setupContext = r.length > 1 ? Nc(e) : null, o = ba(e);
    Yn();
    const s = yn(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    );
    if (jn(), o(), Cu(s)) {
      if (s.then(_l, _l), t)
        return s.then((i) => {
          wl(e, i, t);
        }).catch((i) => {
          go(i, e, 0);
        });
      e.asyncDep = s;
    } else
      wl(e, s, t);
  } else
    Rc(e, t);
}
function wl(e, t, n) {
  Ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = tc(t)), Rc(e, n);
}
let xl;
function Rc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && xl && !r.render) {
      const a = r.template || pi(e).template;
      if (a) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: l } = r, c = vt(
          vt(
            {
              isCustomElement: o,
              delimiters: i
            },
            s
          ),
          l
        );
        r.render = xl(a, c);
      }
    }
    e.render = r.render || It;
  }
  {
    const a = ba(e);
    Yn();
    try {
      Qp(e);
    } finally {
      jn(), a();
    }
  }
}
function km(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return Nt(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return km(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ko(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(tc(yo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Zr)
          return Zr[n](e);
      },
      has(t, n) {
        return n in t || n in Zr;
      }
    }));
}
const Em = /(?:^|[-_])(\w)/g, Dm = (e) => e.replace(Em, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function $c(e, t = !0) {
  return Ee(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ic(e, t, n = !1) {
  let r = $c(t);
  if (!r && t.__file) {
    const a = t.__file.match(/([^/\\]+)\.\w+$/);
    a && (r = a[1]);
  }
  if (!r && e && e.parent) {
    const a = (o) => {
      for (const s in o)
        if (o[s] === t)
          return s;
    };
    r = a(
      e.components || e.parent.type.components
    ) || a(e.appContext.components);
  }
  return r ? Dm(r) : n ? "App" : "Anonymous";
}
function Om(e) {
  return Ee(e) && "__vccOpts" in e;
}
const ne = (e, t) => sp(e, t, Mo);
function gi(e, t, n = Qe) {
  const r = yi(), a = Xt(t), o = Hn(t), s = dp((l, c) => {
    let u;
    return $p(() => {
      const d = e[t];
      fn(u, d) && (u = d, c());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(d) {
        const h = r.vnode.props;
        !(h && // check if parent has passed v-model
        (t in h || a in h || o in h) && (`onUpdate:${t}` in h || `onUpdate:${a}` in h || `onUpdate:${o}` in h)) && fn(d, u) && (u = d, c()), r.emit(`update:${t}`, n.set ? n.set(d) : d);
      }
    };
  }), i = "modelModifiers";
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? e[i] || {} : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
function Vc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Ke(t) && !we(t) ? Qa(t) ? ze(e, null, [t]) : ze(e, t) : ze(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Qa(n) && (n = [n]), ze(e, t, n));
}
const Am = "3.4.21", Pm = "http://www.w3.org/2000/svg", Cm = "http://www.w3.org/1998/Math/MathML", Pn = typeof document < "u" ? document : null, Sl = Pn && /* @__PURE__ */ Pn.createElement("template"), Rm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Pn.createElementNS(Pm, e) : t === "mathml" ? Pn.createElementNS(Cm, e) : Pn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Pn.createTextNode(e),
  createComment: (e) => Pn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (a && (a === o || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === o || !(a = a.nextSibling)); )
        ;
    else {
      Sl.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const i = Sl.content;
      if (r === "svg" || r === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, xn = "transition", Fr = "animation", fa = Symbol("_vtc"), Un = (e, { slots: t }) => Vc(Fp, Nm(e), t);
Un.displayName = "Transition";
const Lc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Un.props = /* @__PURE__ */ vt(
  {},
  mc,
  Lc
);
const Xn = (e, t = []) => {
  we(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Tl = (e) => e ? we(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Nm(e) {
  const t = {};
  for (const R in e)
    R in Lc || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: a,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: c = s,
    appearToClass: u = i,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, y = $m(a), _ = y && y[0], A = y && y[1], {
    onBeforeEnter: Y,
    onEnter: j,
    onEnterCancelled: g,
    onLeave: b,
    onLeaveCancelled: S,
    onBeforeAppear: k = Y,
    onAppear: P = j,
    onAppearCancelled: C = g
  } = t, F = (R, U, H) => {
    Qn(R, U ? u : i), Qn(R, U ? c : s), H && H();
  }, X = (R, U) => {
    R._isLeaving = !1, Qn(R, d), Qn(R, v), Qn(R, h), U && U();
  }, B = (R) => (U, H) => {
    const x = R ? P : j, M = () => F(U, R, H);
    Xn(x, [U, M]), Ml(() => {
      Qn(U, R ? l : o), Sn(U, R ? u : i), Tl(x) || kl(U, r, _, M);
    });
  };
  return vt(t, {
    onBeforeEnter(R) {
      Xn(Y, [R]), Sn(R, o), Sn(R, s);
    },
    onBeforeAppear(R) {
      Xn(k, [R]), Sn(R, l), Sn(R, c);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(R, U) {
      R._isLeaving = !0;
      const H = () => X(R, U);
      Sn(R, d), Lm(), Sn(R, h), Ml(() => {
        R._isLeaving && (Qn(R, d), Sn(R, v), Tl(b) || kl(R, r, A, H));
      }), Xn(b, [R, H]);
    },
    onEnterCancelled(R) {
      F(R, !1), Xn(g, [R]);
    },
    onAppearCancelled(R) {
      F(R, !0), Xn(C, [R]);
    },
    onLeaveCancelled(R) {
      X(R), Xn(S, [R]);
    }
  });
}
function $m(e) {
  if (e == null)
    return null;
  if (Ke(e))
    return [Jo(e.enter), Jo(e.leave)];
  {
    const t = Jo(e);
    return [t, t];
  }
}
function Jo(e) {
  return Of(e);
}
function Sn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[fa] || (e[fa] = /* @__PURE__ */ new Set())).add(t);
}
function Qn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[fa];
  n && (n.delete(t), n.size || (e[fa] = void 0));
}
function Ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Im = 0;
function kl(e, t, n, r) {
  const a = e._endId = ++Im, o = () => {
    a === e._endId && r();
  };
  if (n)
    return setTimeout(o, n);
  const { type: s, timeout: i, propCount: l } = Vm(e, t);
  if (!s)
    return r();
  const c = s + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, h), o();
  }, h = (v) => {
    v.target === e && ++u >= l && d();
  };
  setTimeout(() => {
    u < l && d();
  }, i + 1), e.addEventListener(c, h);
}
function Vm(e, t) {
  const n = window.getComputedStyle(e), r = (y) => (n[y] || "").split(", "), a = r(`${xn}Delay`), o = r(`${xn}Duration`), s = El(a, o), i = r(`${Fr}Delay`), l = r(`${Fr}Duration`), c = El(i, l);
  let u = null, d = 0, h = 0;
  t === xn ? s > 0 && (u = xn, d = s, h = o.length) : t === Fr ? c > 0 && (u = Fr, d = c, h = l.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? xn : Fr : null, h = u ? u === xn ? o.length : l.length : 0);
  const v = u === xn && /\b(transform|all)(,|$)/.test(
    r(`${xn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: h,
    hasTransform: v
  };
}
function El(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Dl(n) + Dl(e[r])));
}
function Dl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Lm() {
  return document.body.offsetHeight;
}
function Fm(e, t, n) {
  const r = e[fa];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Za = Symbol("_vod"), Fc = Symbol("_vsh"), Ba = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Za] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Br(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Br(e, !0), r.enter(e)) : r.leave(e, () => {
      Br(e, !1);
    }) : Br(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Br(e, t);
  }
};
function Br(e, t) {
  e.style.display = t ? e[Za] : "none", e[Fc] = !t;
}
const Bm = Symbol(""), Hm = /(^|;)\s*display\s*:/;
function Ym(e, t, n) {
  const r = e.style, a = nt(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (nt(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          n[i] == null && Ha(r, i, "");
        }
      else
        for (const s in t)
          n[s] == null && Ha(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), Ha(r, s, n[s]);
  } else if (a) {
    if (t !== n) {
      const s = r[Bm];
      s && (n += ";" + s), r.cssText = n, o = Hm.test(n);
    }
  } else t && e.removeAttribute("style");
  Za in e && (e[Za] = o ? r.display : "", e[Fc] && (r.display = "none"));
}
const Ol = /\s*!important$/;
function Ha(e, t, n) {
  if (we(n))
    n.forEach((r) => Ha(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = jm(e, t);
    Ol.test(n) ? e.setProperty(
      Hn(r),
      n.replace(Ol, ""),
      "important"
    ) : e[r] = n;
  }
}
const Al = ["Webkit", "Moz", "ms"], Zo = {};
function jm(e, t) {
  const n = Zo[t];
  if (n)
    return n;
  let r = Xt(t);
  if (r !== "filter" && r in e)
    return Zo[t] = r;
  r = mo(r);
  for (let a = 0; a < Al.length; a++) {
    const o = Al[a] + r;
    if (o in e)
      return Zo[t] = o;
  }
  return t;
}
const Pl = "http://www.w3.org/1999/xlink";
function Um(e, t, n, r, a) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Pl, t.slice(6, t.length)) : e.setAttributeNS(Pl, t, n);
  else {
    const o = $f(t);
    n == null || o && !Iu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Wm(e, t, n, r, a, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, a, o), e[t] = n ?? "";
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n ?? "";
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Iu(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function nr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function qm(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cl = Symbol("_vei");
function Gm(e, t, n, r, a = null) {
  const o = e[Cl] || (e[Cl] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [i, l] = zm(t);
    if (r) {
      const c = o[t] = Qm(r, a);
      nr(e, i, c, l);
    } else s && (qm(e, i, s, l), o[t] = void 0);
  }
}
const Rl = /(?:Once|Passive|Capture)$/;
function zm(e) {
  let t;
  if (Rl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Rl); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Hn(e.slice(2)), t];
}
let es = 0;
const Km = /* @__PURE__ */ Promise.resolve(), Xm = () => es || (Km.then(() => es = 0), es = Date.now());
function Qm(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Yt(
      Jm(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Xm(), n;
}
function Jm(e, t) {
  if (we(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (a) => !a._stopped && r && r(a));
  } else
    return t;
}
const Nl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zm = (e, t, n, r, a, o, s, i, l) => {
  const c = a === "svg";
  t === "class" ? Fm(e, r, c) : t === "style" ? Ym(e, n, r) : co(t) ? Qs(t) || Gm(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : eh(e, t, r, c)) ? Wm(
    e,
    t,
    r,
    o,
    s,
    i,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Um(e, t, r, c));
};
function eh(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nl(t) && Ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Nl(t) && nt(n) ? !1 : t in e;
}
const eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return we(t) ? (n) => La(t, n) : t;
};
function th(e) {
  e.target.composing = !0;
}
function $l(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Mr = Symbol("_assign"), Il = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[Mr] = eo(a);
    const o = r || a.props && a.props.type === "number";
    nr(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), o && (i = ia(i)), e[Mr](i);
    }), n && nr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (nr(e, "compositionstart", th), nr(e, "compositionend", $l), nr(e, "change", $l));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: a } }, o) {
    if (e[Mr] = eo(o), e.composing)
      return;
    const s = a || e.type === "number" ? ia(e.value) : e.value, i = t ?? "";
    s !== i && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === i) || (e.value = i));
  }
}, Bc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const a = fo(t);
    nr(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? ia(to(s)) : to(s)
      );
      e[Mr](
        e.multiple ? a ? new Set(o) : o : o[0]
      ), e._assigning = !0, Qt(() => {
        e._assigning = !1;
      });
    }), e[Mr] = eo(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Vl(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[Mr] = eo(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Vl(e, t, n);
  }
};
function Vl(e, t, n) {
  const r = e.multiple, a = we(t);
  if (!(r && !a && !fo(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const i = e.options[o], l = to(i);
      if (r)
        if (a) {
          const c = typeof l;
          c === "string" || c === "number" ? i.selected = t.includes(
            n ? ia(l) : l
          ) : i.selected = Vf(t, l) > -1;
        } else
          i.selected = t.has(l);
      else if (ho(to(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function to(e) {
  return "_value" in e ? e._value : e.value;
}
const nh = ["ctrl", "shift", "alt", "meta"], rh = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => nh.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ge = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (a, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const i = rh[t[s]];
      if (i && i(a, t))
        return;
    }
    return e(a, ...o);
  });
}, ah = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, De = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (a) => {
    if (!("key" in a))
      return;
    const o = Hn(a.key);
    if (t.some((s) => s === o || ah[s] === o))
      return e(a);
  });
}, oh = /* @__PURE__ */ vt({ patchProp: Zm }, Rm);
let Ll;
function Hc() {
  return Ll || (Ll = dm(oh));
}
const Fl = (...e) => {
  Hc().render(...e);
}, sh = (...e) => {
  const t = Hc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = lh(r);
    if (!a)
      return;
    const o = t._component;
    !Ee(o) && !o.render && !o.template && (o.template = a.innerHTML), a.innerHTML = "";
    const s = n(a, !1, ih(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
};
function ih(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lh(e) {
  return nt(e) ? document.querySelector(e) : e;
}
var uh = !1, Yc = { GJS_DEBUG_TOPICS: "JS ERROR;JS LOG", LESSOPEN: "| /usr/bin/lesspipe %s", USER: "txinto", npm_config_user_agent: "npm/10.8.2 node/v20.17.0 linux x64 workspaces/false", XDG_SESSION_TYPE: "wayland", GIT_ASKPASS: "/usr/share/code/resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/home/txinto/.nvm/versions/node/v20.17.0/bin/node", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/txinto", CHROME_DESKTOP: "code-url-handler.desktop", TERM_PROGRAM_VERSION: "1.93.1", DESKTOP_SESSION: "ubuntu", NVM_BIN: "/home/txinto/.nvm/versions/node/v20.17.0/bin", npm_package_json: "/home/txinto/repos/cbots/porisViewer/package.json", NVM_INC: "/home/txinto/.nvm/versions/node/v20.17.0/include/node", GIO_LAUNCHED_DESKTOP_FILE: "/usr/share/applications/code.desktop", GNOME_SHELL_SESSION_MODE: "ubuntu", GTK_MODULES: "gail:atk-bridge", VSCODE_GIT_ASKPASS_MAIN: "/usr/share/code/resources/app/extensions/git/dist/askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "/usr/share/code/code", MANAGERPID: "1872", npm_config_userconfig: "/home/txinto/.npmrc", npm_config_local_prefix: "/home/txinto/repos/cbots/porisViewer", SYSTEMD_EXEC_PID: "2043", IM_CONFIG_CHECK_ENV: "1", DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus", COLORTERM: "truecolor", GIO_LAUNCHED_DESKTOP_FILE_PID: "6959", COLOR: "1", NVM_DIR: "/home/txinto/.nvm", IM_CONFIG_PHASE: "1", WAYLAND_DISPLAY: "wayland-0", LOGNAME: "txinto", JOURNAL_STREAM: "8:27472", _: "/home/txinto/.nvm/versions/node/v20.17.0/bin/npm", npm_config_prefix: "/home/txinto/.nvm/versions/node/v20.17.0", npm_config_npm_version: "10.8.2", XDG_SESSION_CLASS: "user", USERNAME: "txinto", TERM: "xterm-256color", npm_config_cache: "/home/txinto/.npm", GNOME_DESKTOP_SESSION_ID: "this-is-deprecated", npm_config_node_gyp: "/home/txinto/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/txinto/repos/cbots/porisViewer/node_modules/.bin:/home/txinto/repos/cbots/node_modules/.bin:/home/txinto/repos/node_modules/.bin:/home/txinto/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/txinto/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/txinto/.local/bin:/home/txinto/.nvm/versions/node/v20.17.0/bin:/home/txinto/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin", SESSION_MANAGER: "local/txintosafe:@/tmp/.ICE-unix/2020,unix/txintosafe:/tmp/.ICE-unix/2020", INVOCATION_ID: "278edb087c2f4c00bb2b97be876045da", NODE: "/home/txinto/.nvm/versions/node/v20.17.0/bin/node", npm_package_name: "porisviewer", XDG_MENU_PREFIX: "gnome-", GNOME_SETUP_DISPLAY: ":1", XDG_RUNTIME_DIR: "/run/user/1000", GDK_BACKEND: "x11", DISPLAY: ":0", LANG: "es_ES.UTF-8", XDG_CURRENT_DESKTOP: "Unity", XMODIFIERS: "@im=ibus", XDG_SESSION_DESKTOP: "ubuntu", XAUTHORITY: "/run/user/1000/.mutter-Xwaylandauth.KOQ9T2", LS_COLORS: "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", VSCODE_GIT_IPC_HANDLE: "/run/user/1000/vscode-git-5ac4e7b89b.sock", TERM_PROGRAM: "vscode", npm_lifecycle_script: "vite build", SSH_AGENT_LAUNCHER: "gnome-keyring", SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh", ORIGINAL_XDG_CURRENT_DESKTOP: "ubuntu:GNOME", SHELL: "/bin/bash", npm_package_version: "0.0.0", npm_lifecycle_event: "build", QT_ACCESSIBILITY: "1", GDMSESSION: "ubuntu", LESSCLOSE: "/usr/bin/lesspipe %s %s", GJS_DEBUG_OUTPUT: "stderr", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", QT_IM_MODULE: "ibus", npm_config_globalconfig: "/home/txinto/.nvm/versions/node/v20.17.0/etc/npmrc", npm_config_init_module: "/home/txinto/.npm-init.js", PWD: "/home/txinto/repos/cbots/porisViewer", npm_execpath: "/home/txinto/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/npm-cli.js", XDG_CONFIG_DIRS: "/etc/xdg/xdg-ubuntu:/etc/xdg", NVM_CD_FLAGS: "", XDG_DATA_DIRS: "/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop", npm_config_global_prefix: "/home/txinto/.nvm/versions/node/v20.17.0", npm_command: "run-script", INIT_CWD: "/home/txinto/repos/cbots/porisViewer", EDITOR: "vi", NODE_ENV: "production" };
let jc;
const Eo = (e) => jc = e, Uc = (
  /* istanbul ignore next */
  Symbol()
);
function $s(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ra;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ra || (ra = {}));
function ch() {
  const e = Fu(!0), t = e.run(() => oe({}));
  let n = [], r = [];
  const a = yo({
    install(o) {
      Eo(a), a._a = o, o.provide(Uc, a), o.config.globalProperties.$pinia = a, r.forEach((s) => n.push(s)), r = [];
    },
    use(o) {
      return !this._a && !uh ? r.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return a;
}
const Wc = () => {
};
function Bl(e, t, n, r = Wc) {
  e.push(t);
  const a = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && ei() && Bu(a), a;
}
function vr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const dh = (e) => e();
function Is(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    $s(a) && $s(r) && e.hasOwnProperty(n) && !at(r) && !Nn(r) ? e[n] = Is(a, r) : e[n] = r;
  }
  return e;
}
const fh = (
  /* istanbul ignore next */
  Symbol()
);
function ph(e) {
  return !$s(e) || !e.hasOwnProperty(fh);
}
const { assign: En } = Object;
function mh(e) {
  return !!(at(e) && e.effect);
}
function hh(e, t, n, r) {
  const { state: a, actions: o, getters: s } = t, i = n.state.value[e];
  let l;
  function c() {
    !i && Yc.NODE_ENV === "production" && (n.state.value[e] = a ? a() : {});
    const u = fp(n.state.value[e]);
    return En(u, o, Object.keys(s || {}).reduce((d, h) => (d[h] = yo(ne(() => {
      Eo(n);
      const v = n._s.get(e);
      return s[h].call(v, v);
    })), d), {}));
  }
  return l = qc(e, c, t, n, r, !0), l;
}
function qc(e, t, n = {}, r, a, o) {
  let s;
  const i = En({ actions: {} }, n), l = {
    deep: !0
    // flush: 'post',
  };
  let c, u, d = [], h = [], v;
  const y = r.state.value[e];
  !o && !y && Yc.NODE_ENV === "production" && (r.state.value[e] = {}), oe({});
  let _;
  function A(C) {
    let F;
    c = u = !1, typeof C == "function" ? (C(r.state.value[e]), F = {
      type: ra.patchFunction,
      storeId: e,
      events: v
    }) : (Is(r.state.value[e], C), F = {
      type: ra.patchObject,
      payload: C,
      storeId: e,
      events: v
    });
    const X = _ = Symbol();
    Qt().then(() => {
      _ === X && (c = !0);
    }), u = !0, vr(d, F, r.state.value[e]);
  }
  const Y = o ? function() {
    const { state: F } = n, X = F ? F() : {};
    this.$patch((B) => {
      En(B, X);
    });
  } : (
    /* istanbul ignore next */
    Wc
  );
  function j() {
    s.stop(), d = [], h = [], r._s.delete(e);
  }
  function g(C, F) {
    return function() {
      Eo(r);
      const X = Array.from(arguments), B = [], R = [];
      function U(M) {
        B.push(M);
      }
      function H(M) {
        R.push(M);
      }
      vr(h, {
        args: X,
        name: C,
        store: S,
        after: U,
        onError: H
      });
      let x;
      try {
        x = F.apply(this && this.$id === e ? this : S, X);
      } catch (M) {
        throw vr(R, M), M;
      }
      return x instanceof Promise ? x.then((M) => (vr(B, M), M)).catch((M) => (vr(R, M), Promise.reject(M))) : (vr(B, x), x);
    };
  }
  const b = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Bl.bind(null, h),
    $patch: A,
    $reset: Y,
    $subscribe(C, F = {}) {
      const X = Bl(d, C, F.detached, () => B()), B = s.run(() => bt(() => r.state.value[e], (R) => {
        (F.flush === "sync" ? u : c) && C({
          storeId: e,
          type: ra.direct,
          events: v
        }, R);
      }, En({}, l, F)));
      return X;
    },
    $dispose: j
  }, S = gn(b);
  r._s.set(e, S);
  const P = (r._a && r._a.runWithContext || dh)(() => r._e.run(() => (s = Fu()).run(t)));
  for (const C in P) {
    const F = P[C];
    if (at(F) && !mh(F) || Nn(F))
      o || (y && ph(F) && (at(F) ? F.value = y[C] : Is(F, y[C])), r.state.value[e][C] = F);
    else if (typeof F == "function") {
      const X = g(C, F);
      P[C] = X, i.actions[C] = F;
    }
  }
  return En(S, P), En(Le(S), P), Object.defineProperty(S, "$state", {
    get: () => r.state.value[e],
    set: (C) => {
      A((F) => {
        En(F, C);
      });
    }
  }), r._p.forEach((C) => {
    En(S, s.run(() => C({
      store: S,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), y && o && n.hydrate && n.hydrate(S.$state, y), c = !0, u = !0, S;
}
function vh(e, t, n) {
  let r, a;
  const o = typeof t == "function";
  r = e, a = o ? n : t;
  function s(i, l) {
    const c = om();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (c ? ea(Uc, null) : null), i && Eo(i), i = jc, i._s.has(r) || (o ? qc(r, t, a, i) : hh(r, a, i)), i._s.get(r);
  }
  return s.$id = r, s;
}
var Gc = typeof global == "object" && global && global.Object === Object && global, yh = typeof self == "object" && self && self.Object === Object && self, Do = Gc || yh || Function("return this")(), no = Do.Symbol, zc = Object.prototype, gh = zc.hasOwnProperty, bh = zc.toString, Hr = no ? no.toStringTag : void 0;
function _h(e) {
  var t = gh.call(e, Hr), n = e[Hr];
  try {
    e[Hr] = void 0;
    var r = !0;
  } catch {
  }
  var a = bh.call(e);
  return r && (t ? e[Hr] = n : delete e[Hr]), a;
}
var wh = Object.prototype, xh = wh.toString;
function Sh(e) {
  return xh.call(e);
}
var Th = "[object Null]", Mh = "[object Undefined]", Hl = no ? no.toStringTag : void 0;
function bi(e) {
  return e == null ? e === void 0 ? Mh : Th : Hl && Hl in Object(e) ? _h(e) : Sh(e);
}
function Oo(e) {
  return e != null && typeof e == "object";
}
function Kc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Xc = Array.isArray;
function _i(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Qc(e) {
  return e;
}
var kh = "[object AsyncFunction]", Eh = "[object Function]", Dh = "[object GeneratorFunction]", Oh = "[object Proxy]";
function Jc(e) {
  if (!_i(e))
    return !1;
  var t = bi(e);
  return t == Eh || t == Dh || t == kh || t == Oh;
}
var ts = Do["__core-js_shared__"], Yl = function() {
  var e = /[^.]+$/.exec(ts && ts.keys && ts.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ah(e) {
  return !!Yl && Yl in e;
}
var Ph = Function.prototype, Ch = Ph.toString;
function Rh(e) {
  if (e != null) {
    try {
      return Ch.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nh = /[\\^$.*+?()[\]{}|]/g, $h = /^\[object .+?Constructor\]$/, Ih = Function.prototype, Vh = Object.prototype, Lh = Ih.toString, Fh = Vh.hasOwnProperty, Bh = RegExp(
  "^" + Lh.call(Fh).replace(Nh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hh(e) {
  if (!_i(e) || Ah(e))
    return !1;
  var t = Jc(e) ? Bh : $h;
  return t.test(Rh(e));
}
function Yh(e, t) {
  return e == null ? void 0 : e[t];
}
function wi(e, t) {
  var n = Yh(e, t);
  return Hh(n) ? n : void 0;
}
function jh(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Uh = 800, Wh = 16, qh = Date.now;
function Gh(e) {
  var t = 0, n = 0;
  return function() {
    var r = qh(), a = Wh - (r - n);
    if (n = r, a > 0) {
      if (++t >= Uh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function zh(e) {
  return function() {
    return e;
  };
}
var ro = function() {
  try {
    var e = wi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Kh = ro ? function(e, t) {
  return ro(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zh(t),
    writable: !0
  });
} : Qc, Xh = Gh(Kh);
function Qh(e, t, n, r) {
  for (var a = e.length, o = n + -1; ++o < a; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function Jh(e) {
  return e !== e;
}
function Zh(e, t, n) {
  for (var r = n - 1, a = e.length; ++r < a; )
    if (e[r] === t)
      return r;
  return -1;
}
function ev(e, t, n) {
  return t === t ? Zh(e, t, n) : Qh(e, Jh, n);
}
function tv(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && ev(e, t, 0) > -1;
}
var nv = 9007199254740991, rv = /^(?:0|[1-9]\d*)$/;
function Zc(e, t) {
  var n = typeof e;
  return t = t ?? nv, !!t && (n == "number" || n != "symbol" && rv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ed(e, t, n) {
  t == "__proto__" && ro ? ro(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function xi(e, t) {
  return e === t || e !== e && t !== t;
}
var av = Object.prototype, ov = av.hasOwnProperty;
function td(e, t, n) {
  var r = e[t];
  (!(ov.call(e, t) && xi(r, n)) || n === void 0 && !(t in e)) && ed(e, t, n);
}
function sv(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var i = t[o], l = void 0;
    l === void 0 && (l = e[i]), a ? ed(n, i, l) : td(n, i, l);
  }
  return n;
}
var jl = Math.max;
function iv(e, t, n) {
  return t = jl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = jl(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(s), jh(e, this, i);
  };
}
function nd(e, t) {
  return Xh(iv(e, t, Qc), e + "");
}
var lv = 9007199254740991;
function rd(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lv;
}
function Ao(e) {
  return e != null && rd(e.length) && !Jc(e);
}
function uv(e, t, n) {
  if (!_i(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ao(n) && Zc(t, n.length) : r == "string" && t in n) ? xi(n[t], e) : !1;
}
function cv(e) {
  return nd(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && uv(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, o);
    }
    return t;
  });
}
var dv = Object.prototype;
function ad(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || dv;
  return e === n;
}
function fv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var pv = "[object Arguments]";
function Ul(e) {
  return Oo(e) && bi(e) == pv;
}
var od = Object.prototype, mv = od.hasOwnProperty, hv = od.propertyIsEnumerable, vv = Ul(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ul : function(e) {
  return Oo(e) && mv.call(e, "callee") && !hv.call(e, "callee");
};
function yv() {
  return !1;
}
var sd = typeof exports == "object" && exports && !exports.nodeType && exports, Wl = sd && typeof module == "object" && module && !module.nodeType && module, gv = Wl && Wl.exports === sd, ql = gv ? Do.Buffer : void 0, bv = ql ? ql.isBuffer : void 0, _v = bv || yv, wv = "[object Arguments]", xv = "[object Array]", Sv = "[object Boolean]", Tv = "[object Date]", Mv = "[object Error]", kv = "[object Function]", Ev = "[object Map]", Dv = "[object Number]", Ov = "[object Object]", Av = "[object RegExp]", Pv = "[object Set]", Cv = "[object String]", Rv = "[object WeakMap]", Nv = "[object ArrayBuffer]", $v = "[object DataView]", Iv = "[object Float32Array]", Vv = "[object Float64Array]", Lv = "[object Int8Array]", Fv = "[object Int16Array]", Bv = "[object Int32Array]", Hv = "[object Uint8Array]", Yv = "[object Uint8ClampedArray]", jv = "[object Uint16Array]", Uv = "[object Uint32Array]", et = {};
et[Iv] = et[Vv] = et[Lv] = et[Fv] = et[Bv] = et[Hv] = et[Yv] = et[jv] = et[Uv] = !0;
et[wv] = et[xv] = et[Nv] = et[Sv] = et[$v] = et[Tv] = et[Mv] = et[kv] = et[Ev] = et[Dv] = et[Ov] = et[Av] = et[Pv] = et[Cv] = et[Rv] = !1;
function Wv(e) {
  return Oo(e) && rd(e.length) && !!et[bi(e)];
}
function id(e) {
  return function(t) {
    return e(t);
  };
}
var ld = typeof exports == "object" && exports && !exports.nodeType && exports, aa = ld && typeof module == "object" && module && !module.nodeType && module, qv = aa && aa.exports === ld, ns = qv && Gc.process, Gl = function() {
  try {
    var e = aa && aa.require && aa.require("util").types;
    return e || ns && ns.binding && ns.binding("util");
  } catch {
  }
}(), zl = Gl && Gl.isTypedArray, Gv = zl ? id(zl) : Wv, zv = Object.prototype, Kv = zv.hasOwnProperty;
function Xv(e, t) {
  var n = Xc(e), r = !n && vv(e), a = !n && !r && _v(e), o = !n && !r && !a && Gv(e), s = n || r || a || o, i = s ? fv(e.length, String) : [], l = i.length;
  for (var c in e)
    Kv.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Zc(c, l))) && i.push(c);
  return i;
}
function Qv(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Jv = Qv(Object.keys, Object), Zv = Object.prototype, e0 = Zv.hasOwnProperty;
function t0(e) {
  if (!ad(e))
    return Jv(e);
  var t = [];
  for (var n in Object(e))
    e0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function n0(e) {
  return Ao(e) ? Xv(e) : t0(e);
}
var r0 = Object.prototype, a0 = r0.hasOwnProperty, o0 = cv(function(e, t) {
  if (ad(t) || Ao(t)) {
    sv(t, n0(t), e);
    return;
  }
  for (var n in t)
    a0.call(t, n) && td(e, n, t[n]);
}), pa = wi(Object, "create");
function s0() {
  this.__data__ = pa ? pa(null) : {}, this.size = 0;
}
function i0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var l0 = "__lodash_hash_undefined__", u0 = Object.prototype, c0 = u0.hasOwnProperty;
function d0(e) {
  var t = this.__data__;
  if (pa) {
    var n = t[e];
    return n === l0 ? void 0 : n;
  }
  return c0.call(t, e) ? t[e] : void 0;
}
var f0 = Object.prototype, p0 = f0.hasOwnProperty;
function m0(e) {
  var t = this.__data__;
  return pa ? t[e] !== void 0 : p0.call(t, e);
}
var h0 = "__lodash_hash_undefined__";
function v0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pa && t === void 0 ? h0 : t, this;
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dr.prototype.clear = s0;
dr.prototype.delete = i0;
dr.prototype.get = d0;
dr.prototype.has = m0;
dr.prototype.set = v0;
function y0() {
  this.__data__ = [], this.size = 0;
}
function Po(e, t) {
  for (var n = e.length; n--; )
    if (xi(e[n][0], t))
      return n;
  return -1;
}
var g0 = Array.prototype, b0 = g0.splice;
function _0(e) {
  var t = this.__data__, n = Po(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : b0.call(t, n, 1), --this.size, !0;
}
function w0(e) {
  var t = this.__data__, n = Po(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function x0(e) {
  return Po(this.__data__, e) > -1;
}
function S0(e, t) {
  var n = this.__data__, r = Po(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Nr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Nr.prototype.clear = y0;
Nr.prototype.delete = _0;
Nr.prototype.get = w0;
Nr.prototype.has = x0;
Nr.prototype.set = S0;
var T0 = wi(Do, "Map");
function M0() {
  this.size = 0, this.__data__ = {
    hash: new dr(),
    map: new (T0 || Nr)(),
    string: new dr()
  };
}
function k0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Co(e, t) {
  var n = e.__data__;
  return k0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function E0(e) {
  var t = Co(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function D0(e) {
  return Co(this, e).get(e);
}
function O0(e) {
  return Co(this, e).has(e);
}
function A0(e, t) {
  var n = Co(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function $r(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
$r.prototype.clear = M0;
$r.prototype.delete = E0;
$r.prototype.get = D0;
$r.prototype.has = O0;
$r.prototype.set = A0;
var P0 = "__lodash_hash_undefined__";
function C0(e) {
  return this.__data__.set(e, P0), this;
}
function R0(e) {
  return this.__data__.has(e);
}
function ao(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new $r(); ++t < n; )
    this.add(e[t]);
}
ao.prototype.add = ao.prototype.push = C0;
ao.prototype.has = R0;
function Kl(e, t) {
  return e.has(t);
}
function N0(e) {
  return Oo(e) && Ao(e);
}
var $0 = Math.min;
function I0(e, t, n) {
  for (var r = tv, a = e[0].length, o = e.length, s = o, i = Array(o), l = 1 / 0, c = []; s--; ) {
    var u = e[s];
    s && t && (u = Kc(u, id(t))), l = $0(u.length, l), i[s] = a >= 120 && u.length >= 120 ? new ao(s && u) : void 0;
  }
  u = e[0];
  var d = -1, h = i[0];
  e:
    for (; ++d < a && c.length < l; ) {
      var v = u[d], y = v;
      if (v = v !== 0 ? v : 0, !(h ? Kl(h, y) : r(c, y))) {
        for (s = o; --s; ) {
          var _ = i[s];
          if (!(_ ? Kl(_, y) : r(e[s], y)))
            continue e;
        }
        h && h.push(y), c.push(v);
      }
    }
  return c;
}
function V0(e) {
  return N0(e) ? e : [];
}
var Xl = nd(function(e) {
  var t = Kc(e, V0);
  return t.length && t[0] === e[0] ? I0(t) : [];
});
function Yr(e) {
  return e === void 0;
}
const Si = "Value", _a = "ValueString", wa = "ValueFloat", Ro = "ValueDate", xa = "ValueFilePath", Er = "Mode", fr = "SubSystem", ud = "Command", Vs = [
  Si,
  _a,
  wa,
  Ro,
  xa
];
class rs {
  constructor(t) {
    o0(this, t);
  }
  getDestinations(t) {
    const n = Xc(t) ? t : [t];
    return this.destinations.reduce((a, o) => (n.includes(o.type) && a.push(o), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Vs) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(Er) : [];
  }
  getSubsystems() {
    return this.getDestinations(fr);
  }
  getValidModes() {
    return this.validModes == null && (this.validModes = []), this.validModes;
  }
  getActiveSubnodes() {
    let t = [];
    return this.subsystemsNodes.forEach((r) => {
      r.getValidModes().length > 0 && t.push(r);
    }), t;
  }
}
function cd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: L0 } = Object.prototype, { getPrototypeOf: Ti } = Object, No = /* @__PURE__ */ ((e) => (t) => {
  const n = L0.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Zt = (e) => (e = e.toLowerCase(), (t) => No(t) === e), $o = (e) => (t) => typeof t === e, { isArray: Ir } = Array, ma = $o("undefined");
function F0(e) {
  return e !== null && !ma(e) && e.constructor !== null && !ma(e.constructor) && Lt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dd = Zt("ArrayBuffer");
function B0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dd(e.buffer), t;
}
const H0 = $o("string"), Lt = $o("function"), fd = $o("number"), Io = (e) => e !== null && typeof e == "object", Y0 = (e) => e === !0 || e === !1, Ya = (e) => {
  if (No(e) !== "object")
    return !1;
  const t = Ti(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, j0 = Zt("Date"), U0 = Zt("File"), W0 = Zt("Blob"), q0 = Zt("FileList"), G0 = (e) => Io(e) && Lt(e.pipe), z0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Lt(e.append) && ((t = No(e)) === "formdata" || // detect form-data instance
  t === "object" && Lt(e.toString) && e.toString() === "[object FormData]"));
}, K0 = Zt("URLSearchParams"), [X0, Q0, J0, Z0] = ["ReadableStream", "Request", "Response", "Headers"].map(Zt), ey = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Sa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Ir(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let i;
    for (r = 0; r < s; r++)
      i = o[r], t.call(null, e[i], i, e);
  }
}
function pd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const ar = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, md = (e) => !ma(e) && e !== ar;
function Ls() {
  const { caseless: e } = md(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && pd(t, a) || a;
    Ya(t[o]) && Ya(r) ? t[o] = Ls(t[o], r) : Ya(r) ? t[o] = Ls({}, r) : Ir(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Sa(arguments[r], n);
  return t;
}
const ty = (e, t, n, { allOwnKeys: r } = {}) => (Sa(t, (a, o) => {
  n && Lt(a) ? e[o] = cd(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), ny = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ry = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ay = (e, t, n, r) => {
  let a, o, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && Ti(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, oy = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, sy = (e) => {
  if (!e) return null;
  if (Ir(e)) return e;
  let t = e.length;
  if (!fd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, iy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ti(Uint8Array)), ly = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, uy = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, cy = Zt("HTMLFormElement"), dy = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Ql = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), fy = Zt("RegExp"), hd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Sa(n, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (r[o] = s || a);
  }), Object.defineProperties(e, r);
}, py = (e) => {
  hd(e, (t, n) => {
    if (Lt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Lt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, my = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return Ir(e) ? r(e) : r(String(e).split(t)), n;
}, hy = () => {
}, vy = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, as = "abcdefghijklmnopqrstuvwxyz", Jl = "0123456789", vd = {
  DIGIT: Jl,
  ALPHA: as,
  ALPHA_DIGIT: as + as.toUpperCase() + Jl
}, yy = (e = 16, t = vd.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function gy(e) {
  return !!(e && Lt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const by = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (Io(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = Ir(r) ? [] : {};
        return Sa(r, (s, i) => {
          const l = n(s, a + 1);
          !ma(l) && (o[i] = l);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, _y = Zt("AsyncFunction"), wy = (e) => e && (Io(e) || Lt(e)) && Lt(e.then) && Lt(e.catch), yd = ((e, t) => e ? setImmediate : t ? ((n, r) => (ar.addEventListener("message", ({ source: a, data: o }) => {
  a === ar && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), ar.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Lt(ar.postMessage)
), xy = typeof queueMicrotask < "u" ? queueMicrotask.bind(ar) : typeof process < "u" && process.nextTick || yd, W = {
  isArray: Ir,
  isArrayBuffer: dd,
  isBuffer: F0,
  isFormData: z0,
  isArrayBufferView: B0,
  isString: H0,
  isNumber: fd,
  isBoolean: Y0,
  isObject: Io,
  isPlainObject: Ya,
  isReadableStream: X0,
  isRequest: Q0,
  isResponse: J0,
  isHeaders: Z0,
  isUndefined: ma,
  isDate: j0,
  isFile: U0,
  isBlob: W0,
  isRegExp: fy,
  isFunction: Lt,
  isStream: G0,
  isURLSearchParams: K0,
  isTypedArray: iy,
  isFileList: q0,
  forEach: Sa,
  merge: Ls,
  extend: ty,
  trim: ey,
  stripBOM: ny,
  inherits: ry,
  toFlatObject: ay,
  kindOf: No,
  kindOfTest: Zt,
  endsWith: oy,
  toArray: sy,
  forEachEntry: ly,
  matchAll: uy,
  isHTMLForm: cy,
  hasOwnProperty: Ql,
  hasOwnProp: Ql,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hd,
  freezeMethods: py,
  toObjectSet: my,
  toCamelCase: dy,
  noop: hy,
  toFiniteNumber: vy,
  findKey: pd,
  global: ar,
  isContextDefined: md,
  ALPHABET: vd,
  generateString: yy,
  isSpecCompliantForm: gy,
  toJSONObject: by,
  isAsyncFn: _y,
  isThenable: wy,
  setImmediate: yd,
  asap: xy
};
function Oe(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
W.inherits(Oe, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const gd = Oe.prototype, bd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  bd[e] = { value: e };
});
Object.defineProperties(Oe, bd);
Object.defineProperty(gd, "isAxiosError", { value: !0 });
Oe.from = (e, t, n, r, a, o) => {
  const s = Object.create(gd);
  return W.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Oe.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const Sy = null;
function Fs(e) {
  return W.isPlainObject(e) || W.isArray(e);
}
function _d(e) {
  return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zl(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = _d(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Ty(e) {
  return W.isArray(e) && !e.some(Fs);
}
const My = W.toFlatObject(W, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vo(e, t, n) {
  if (!W.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = W.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, A) {
    return !W.isUndefined(A[_]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && W.isSpecCompliantForm(t);
  if (!W.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (W.isDate(y))
      return y.toISOString();
    if (!l && W.isBlob(y))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(y) || W.isTypedArray(y) ? l && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, _, A) {
    let Y = y;
    if (y && !A && typeof y == "object") {
      if (W.endsWith(_, "{}"))
        _ = r ? _ : _.slice(0, -2), y = JSON.stringify(y);
      else if (W.isArray(y) && Ty(y) || (W.isFileList(y) || W.endsWith(_, "[]")) && (Y = W.toArray(y)))
        return _ = _d(_), Y.forEach(function(g, b) {
          !(W.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Zl([_], b, o) : s === null ? _ : _ + "[]",
            c(g)
          );
        }), !1;
    }
    return Fs(y) ? !0 : (t.append(Zl(A, _, o), c(y)), !1);
  }
  const d = [], h = Object.assign(My, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Fs
  });
  function v(y, _) {
    if (!W.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      d.push(y), W.forEach(y, function(Y, j) {
        (!(W.isUndefined(Y) || Y === null) && a.call(
          t,
          Y,
          W.isString(j) ? j.trim() : j,
          _,
          h
        )) === !0 && v(Y, _ ? _.concat(j) : [j]);
      }), d.pop();
    }
  }
  if (!W.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function eu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Mi(e, t) {
  this._pairs = [], e && Vo(e, this, t);
}
const wd = Mi.prototype;
wd.append = function(t, n) {
  this._pairs.push([t, n]);
};
wd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, eu);
  } : eu;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function ky(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ky, a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = W.isURLSearchParams(t) ? t.toString() : new Mi(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class tu {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    W.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Sd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ey = typeof URLSearchParams < "u" ? URLSearchParams : Mi, Dy = typeof FormData < "u" ? FormData : null, Oy = typeof Blob < "u" ? Blob : null, Ay = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ey,
    FormData: Dy,
    Blob: Oy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ki = typeof window < "u" && typeof document < "u", Bs = typeof navigator == "object" && navigator || void 0, Py = ki && (!Bs || ["ReactNative", "NativeScript", "NS"].indexOf(Bs.product) < 0), Cy = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ry = ki && window.location.href || "http://localhost", Ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ki,
  hasStandardBrowserEnv: Py,
  hasStandardBrowserWebWorkerEnv: Cy,
  navigator: Bs,
  origin: Ry
}, Symbol.toStringTag, { value: "Module" })), Ct = {
  ...Ny,
  ...Ay
};
function $y(e, t) {
  return Vo(e, new Ct.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, o) {
      return Ct.isNode && W.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Iy(e) {
  return W.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Vy(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Td(e) {
  function t(n, r, a, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), l = o >= n.length;
    return s = !s && W.isArray(a) ? a.length : s, l ? (W.hasOwnProp(a, s) ? a[s] = [a[s], r] : a[s] = r, !i) : ((!a[s] || !W.isObject(a[s])) && (a[s] = []), t(n, r, a[s], o) && W.isArray(a[s]) && (a[s] = Vy(a[s])), !i);
  }
  if (W.isFormData(e) && W.isFunction(e.entries)) {
    const n = {};
    return W.forEachEntry(e, (r, a) => {
      t(Iy(r), a, n, 0);
    }), n;
  }
  return null;
}
function Ly(e, t, n) {
  if (W.isString(e))
    try {
      return (t || JSON.parse)(e), W.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ta = {
  transitional: Sd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = W.isObject(t);
    if (o && W.isHTMLForm(t) && (t = new FormData(t)), W.isFormData(t))
      return a ? JSON.stringify(Td(t)) : t;
    if (W.isArrayBuffer(t) || W.isBuffer(t) || W.isStream(t) || W.isFile(t) || W.isBlob(t) || W.isReadableStream(t))
      return t;
    if (W.isArrayBufferView(t))
      return t.buffer;
    if (W.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return $y(t, this.formSerializer).toString();
      if ((i = W.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Vo(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), Ly(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ta.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (W.isResponse(t) || W.isReadableStream(t))
      return t;
    if (t && W.isString(t) && (r && !this.responseType || a)) {
      const s = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? Oe.from(i, Oe.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ct.classes.FormData,
    Blob: Ct.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ta.headers[e] = {};
});
const Fy = W.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), By = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), n = s.substring(0, a).trim().toLowerCase(), r = s.substring(a + 1).trim(), !(!n || t[n] && Fy[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, nu = Symbol("internals");
function jr(e) {
  return e && String(e).trim().toLowerCase();
}
function ja(e) {
  return e === !1 || e == null ? e : W.isArray(e) ? e.map(ja) : String(e);
}
function Hy(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Yy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function os(e, t, n, r, a) {
  if (W.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!W.isString(t)) {
    if (W.isString(r))
      return t.indexOf(r) !== -1;
    if (W.isRegExp(r))
      return r.test(t);
  }
}
function jy(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Uy(e, t) {
  const n = W.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, o, s) {
        return this[r].call(this, t, a, o, s);
      },
      configurable: !0
    });
  });
}
class Rt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(i, l, c) {
      const u = jr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = W.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = ja(i));
    }
    const s = (i, l) => W.forEach(i, (c, u) => o(c, u, l));
    if (W.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (W.isString(t) && (t = t.trim()) && !Yy(t))
      s(By(t), n);
    else if (W.isHeaders(t))
      for (const [i, l] of t.entries())
        o(l, i, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = jr(t), t) {
      const r = W.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Hy(a);
        if (W.isFunction(n))
          return n.call(this, a, r);
        if (W.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = jr(t), t) {
      const r = W.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || os(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(s) {
      if (s = jr(s), s) {
        const i = W.findKey(r, s);
        i && (!n || os(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return W.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || os(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return W.forEach(this, (a, o) => {
      const s = W.findKey(r, o);
      if (s) {
        n[s] = ja(a), delete n[o];
        return;
      }
      const i = t ? jy(o) : String(o).trim();
      i !== o && delete n[o], n[i] = ja(a), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return W.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && W.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[nu] = this[nu] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(s) {
      const i = jr(s);
      r[i] || (Uy(a, s), r[i] = !0);
    }
    return W.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
W.reduceDescriptors(Rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
W.freezeMethods(Rt);
function ss(e, t) {
  const n = this || Ta, r = t || n, a = Rt.from(r.headers);
  let o = r.data;
  return W.forEach(e, function(i) {
    o = i.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Md(e) {
  return !!(e && e.__CANCEL__);
}
function Vr(e, t, n) {
  Oe.call(this, e ?? "canceled", Oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
W.inherits(Vr, Oe, {
  __CANCEL__: !0
});
function kd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Oe(
    "Request failed with status code " + n.status,
    [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Wy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qy(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[o];
    s || (s = c), n[a] = l, r[a] = c;
    let d = o, h = 0;
    for (; d !== a; )
      h += n[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - s < t)
      return;
    const v = u && c - u;
    return v ? Math.round(h * 1e3 / v) : void 0;
  };
}
function Gy(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const s = (c, u = Date.now()) => {
    n = u, a = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? s(c, u) : (a = c, o || (o = setTimeout(() => {
      o = null, s(a);
    }, r - d)));
  }, () => a && s(a)];
}
const oo = (e, t, n = 3) => {
  let r = 0;
  const a = qy(50, 250);
  return Gy((o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, l = s - r, c = a(l), u = s <= i;
    r = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && u ? (i - s) / c : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, ru = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, au = (e) => (...t) => W.asap(() => e(...t)), zy = Ct.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Ct.navigator && /(msie|trident)/i.test(Ct.navigator.userAgent), n = document.createElement("a");
    let r;
    function a(o) {
      let s = o;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = a(window.location.href), function(s) {
      const i = W.isString(s) ? a(s) : s;
      return i.protocol === r.protocol && i.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Ky = Ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, o) {
      const s = [e + "=" + encodeURIComponent(t)];
      W.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), W.isString(r) && s.push("path=" + r), W.isString(a) && s.push("domain=" + a), o === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Xy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qy(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ed(e, t) {
  return e && !Xy(t) ? Qy(e, t) : t;
}
const ou = (e) => e instanceof Rt ? { ...e } : e;
function pr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return W.isPlainObject(c) && W.isPlainObject(u) ? W.merge.call({ caseless: d }, c, u) : W.isPlainObject(u) ? W.merge({}, u) : W.isArray(u) ? u.slice() : u;
  }
  function a(c, u, d) {
    if (W.isUndefined(u)) {
      if (!W.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function o(c, u) {
    if (!W.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (W.isUndefined(u)) {
      if (!W.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function i(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
      return r(void 0, c);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: i,
    headers: (c, u) => a(ou(c), ou(u), !0)
  };
  return W.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || a, h = d(e[u], t[u], u);
    W.isUndefined(h) && d !== i || (n[u] = h);
  }), n;
}
const Dd = (e) => {
  const t = pr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: s, auth: i } = t;
  t.headers = s = Rt.from(s), t.url = xd(Ed(t.baseURL, t.url), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let l;
  if (W.isFormData(n)) {
    if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [c, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ct.hasStandardBrowserEnv && (r && W.isFunction(r) && (r = r(t)), r || r !== !1 && zy(t.url))) {
    const c = a && o && Ky.read(o);
    c && s.set(a, c);
  }
  return t;
}, Jy = typeof XMLHttpRequest < "u", Zy = Jy && function(e) {
  return new Promise(function(n, r) {
    const a = Dd(e);
    let o = a.data;
    const s = Rt.from(a.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: c } = a, u, d, h, v, y;
    function _() {
      v && v(), y && y(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let A = new XMLHttpRequest();
    A.open(a.method.toUpperCase(), a.url, !0), A.timeout = a.timeout;
    function Y() {
      if (!A)
        return;
      const g = Rt.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), S = {
        data: !i || i === "text" || i === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: g,
        config: e,
        request: A
      };
      kd(function(P) {
        n(P), _();
      }, function(P) {
        r(P), _();
      }, S), A = null;
    }
    "onloadend" in A ? A.onloadend = Y : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(Y);
    }, A.onabort = function() {
      A && (r(new Oe("Request aborted", Oe.ECONNABORTED, e, A)), A = null);
    }, A.onerror = function() {
      r(new Oe("Network Error", Oe.ERR_NETWORK, e, A)), A = null;
    }, A.ontimeout = function() {
      let b = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const S = a.transitional || Sd;
      a.timeoutErrorMessage && (b = a.timeoutErrorMessage), r(new Oe(
        b,
        S.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
        e,
        A
      )), A = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in A && W.forEach(s.toJSON(), function(b, S) {
      A.setRequestHeader(S, b);
    }), W.isUndefined(a.withCredentials) || (A.withCredentials = !!a.withCredentials), i && i !== "json" && (A.responseType = a.responseType), c && ([h, y] = oo(c, !0), A.addEventListener("progress", h)), l && A.upload && ([d, v] = oo(l), A.upload.addEventListener("progress", d), A.upload.addEventListener("loadend", v)), (a.cancelToken || a.signal) && (u = (g) => {
      A && (r(!g || g.type ? new Vr(null, e, A) : g), A.abort(), A = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const j = Wy(a.url);
    if (j && Ct.protocols.indexOf(j) === -1) {
      r(new Oe("Unsupported protocol " + j + ":", Oe.ERR_BAD_REQUEST, e));
      return;
    }
    A.send(o || null);
  });
}, eg = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, i();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof Oe ? u : new Vr(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new Oe(`timeout ${t} of ms exceeded`, Oe.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: l } = r;
    return l.unsubscribe = () => W.asap(i), l;
  }
}, tg = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, ng = async function* (e, t) {
  for await (const n of rg(e))
    yield* tg(n, t);
}, rg = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, su = (e, t, n, r) => {
  const a = ng(e, t);
  let o = 0, s, i = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await a.next();
        if (c) {
          i(), l.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let h = o += d;
          n(h);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw i(c), c;
      }
    },
    cancel(l) {
      return i(l), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, Lo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Od = Lo && typeof ReadableStream == "function", ag = Lo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ad = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, og = Od && Ad(() => {
  let e = !1;
  const t = new Request(Ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), iu = 64 * 1024, Hs = Od && Ad(() => W.isReadableStream(new Response("").body)), so = {
  stream: Hs && ((e) => e.body)
};
Lo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !so[t] && (so[t] = W.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Oe(`Response type '${t}' is not supported`, Oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const sg = async (e) => {
  if (e == null)
    return 0;
  if (W.isBlob(e))
    return e.size;
  if (W.isSpecCompliantForm(e))
    return (await new Request(Ct.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (W.isArrayBufferView(e) || W.isArrayBuffer(e))
    return e.byteLength;
  if (W.isURLSearchParams(e) && (e = e + ""), W.isString(e))
    return (await ag(e)).byteLength;
}, ig = async (e, t) => {
  const n = W.toFiniteNumber(e.getContentLength());
  return n ?? sg(t);
}, lg = Lo && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: i,
    onUploadProgress: l,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = Dd(e);
  c = c ? (c + "").toLowerCase() : "text";
  let v = eg([a, o && o.toAbortSignal()], s), y;
  const _ = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let A;
  try {
    if (l && og && n !== "get" && n !== "head" && (A = await ig(u, r)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (W.isFormData(r) && (k = S.headers.get("content-type")) && u.setContentType(k), S.body) {
        const [P, C] = ru(
          A,
          oo(au(l))
        );
        r = su(S.body, iu, P, C);
      }
    }
    W.isString(d) || (d = d ? "include" : "omit");
    const Y = "credentials" in Request.prototype;
    y = new Request(t, {
      ...h,
      signal: v,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: Y ? d : void 0
    });
    let j = await fetch(y);
    const g = Hs && (c === "stream" || c === "response");
    if (Hs && (i || g && _)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((F) => {
        S[F] = j[F];
      });
      const k = W.toFiniteNumber(j.headers.get("content-length")), [P, C] = i && ru(
        k,
        oo(au(i), !0)
      ) || [];
      j = new Response(
        su(j.body, iu, P, () => {
          C && C(), _ && _();
        }),
        S
      );
    }
    c = c || "text";
    let b = await so[W.findKey(so, c) || "text"](j, e);
    return !g && _ && _(), await new Promise((S, k) => {
      kd(S, k, {
        data: b,
        headers: Rt.from(j.headers),
        status: j.status,
        statusText: j.statusText,
        config: e,
        request: y
      });
    });
  } catch (Y) {
    throw _ && _(), Y && Y.name === "TypeError" && /fetch/i.test(Y.message) ? Object.assign(
      new Oe("Network Error", Oe.ERR_NETWORK, e, y),
      {
        cause: Y.cause || Y
      }
    ) : Oe.from(Y, Y && Y.code, e, y);
  }
}), Ys = {
  http: Sy,
  xhr: Zy,
  fetch: lg
};
W.forEach(Ys, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const lu = (e) => `- ${e}`, ug = (e) => W.isFunction(e) || e === null || e === !1, Pd = {
  getAdapter: (e) => {
    e = W.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !ug(n) && (r = Ys[(s = String(n)).toLowerCase()], r === void 0))
        throw new Oe(`Unknown adapter '${s}'`);
      if (r)
        break;
      a[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(a).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(lu).join(`
`) : " " + lu(o[0]) : "as no adapter specified";
      throw new Oe(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ys
};
function is(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Vr(null, e);
}
function uu(e) {
  return is(e), e.headers = Rt.from(e.headers), e.data = ss.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pd.getAdapter(e.adapter || Ta.adapter)(e).then(function(r) {
    return is(e), r.data = ss.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Rt.from(r.headers), r;
  }, function(r) {
    return Md(r) || (is(e), r && r.response && (r.response.data = ss.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Rt.from(r.response.headers))), Promise.reject(r);
  });
}
const Cd = "1.7.7", Ei = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ei[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cu = {};
Ei.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + Cd + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, i) => {
    if (t === !1)
      throw new Oe(
        a(s, " has been removed" + (n ? " in " + n : "")),
        Oe.ERR_DEPRECATED
      );
    return n && !cu[s] && (cu[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, i) : !0;
  };
};
function cg(e, t, n) {
  if (typeof e != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], s = t[o];
    if (s) {
      const i = e[o], l = i === void 0 || s(i, o, e);
      if (l !== !0)
        throw new Oe("option " + o + " must be " + l, Oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Oe("Unknown option " + o, Oe.ERR_BAD_OPTION);
  }
}
const js = {
  assertOptions: cg,
  validators: Ei
}, Tn = js.validators;
class lr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new tu(),
      response: new tu()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = pr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && js.assertOptions(r, {
      silentJSONParsing: Tn.transitional(Tn.boolean),
      forcedJSONParsing: Tn.transitional(Tn.boolean),
      clarifyTimeoutError: Tn.transitional(Tn.boolean)
    }, !1), a != null && (W.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : js.assertOptions(a, {
      encode: Tn.function,
      serialize: Tn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && W.merge(
      o.common,
      o[n.method]
    );
    o && W.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete o[y];
      }
    ), n.headers = Rt.concat(s, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(n) === !1 || (l = l && _.synchronous, i.unshift(_.fulfilled, _.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let u, d = 0, h;
    if (!l) {
      const y = [uu.bind(this), void 0];
      for (y.unshift.apply(y, i), y.push.apply(y, c), h = y.length, u = Promise.resolve(n); d < h; )
        u = u.then(y[d++], y[d++]);
      return u;
    }
    h = i.length;
    let v = n;
    for (d = 0; d < h; ) {
      const y = i[d++], _ = i[d++];
      try {
        v = y(v);
      } catch (A) {
        _.call(this, A);
        break;
      }
    }
    try {
      u = uu.call(this, v);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, h = c.length; d < h; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = pr(this.defaults, t);
    const n = Ed(t.baseURL, t.url);
    return xd(n, t.params, t.paramsSerializer);
  }
}
W.forEach(["delete", "get", "head", "options"], function(t) {
  lr.prototype[t] = function(n, r) {
    return this.request(pr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
W.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, i) {
      return this.request(pr(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  lr.prototype[t] = n(), lr.prototype[t + "Form"] = n(!0);
});
class Di {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const s = new Promise((i) => {
        r.subscribe(i), o = i;
      }).then(a);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, i) {
      r.reason || (r.reason = new Vr(o, s, i), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Di(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function dg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function fg(e) {
  return W.isObject(e) && e.isAxiosError === !0;
}
const Us = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Us).forEach(([e, t]) => {
  Us[t] = e;
});
function Rd(e) {
  const t = new lr(e), n = cd(lr.prototype.request, t);
  return W.extend(n, lr.prototype, t, { allOwnKeys: !0 }), W.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Rd(pr(e, a));
  }, n;
}
const yt = Rd(Ta);
yt.Axios = lr;
yt.CanceledError = Vr;
yt.CancelToken = Di;
yt.isCancel = Md;
yt.VERSION = Cd;
yt.toFormData = Vo;
yt.AxiosError = Oe;
yt.Cancel = yt.CanceledError;
yt.all = function(t) {
  return Promise.all(t);
};
yt.spread = dg;
yt.isAxiosError = fg;
yt.mergeConfig = pr;
yt.AxiosHeaders = Rt;
yt.formToJSON = (e) => Td(W.isHTMLForm(e) ? new FormData(e) : e);
yt.getAdapter = Pd.getAdapter;
yt.HttpStatusCode = Us;
yt.default = yt;
function du(e) {
  return yt.get(e).then((t) => t.data);
}
const Nd = {
  PORISValue: Si,
  PORISValueString: _a,
  PORISValueFloat: wa,
  PORISValueDate: Ro,
  PORISValueFilePath: xa,
  PORISMode: Er,
  PORISNode: fr,
  PORISCmd: ud
}, pg = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], mg = "mode", hg = "sub-system";
function tt(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function vg(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const a = e.getElementsByTagName("destination");
    if (a.length > 0)
      for (const o of a) {
        const s = Nd[o.getAttribute("type")], i = tt(o, "id");
        s != ud && (s == fr && (t.find((l) => {
        }) || t.push(i)), r.push({ type: s, id: i }));
      }
  }
  return r.length > 0 ? r : null;
}
function yg(e) {
  const t = e.getElementsByTagName("node-attributes"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("node-attribute");
    if (r.length > 0)
      for (const a of r) {
        const o = tt(a, "content"), s = tt(a, "name");
        tt(a, "visibility") && n.push({ name: s, content: o });
      }
  }
  return n.length > 0 ? n : null;
}
function gg(e) {
  const t = e.getElementsByTagName("labels"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("label");
    if (r.length > 0)
      for (const a of r) {
        const o = tt(a, "name");
        n.push(o);
      }
  }
  return n.length > 0 ? n[0] : null;
}
function ls(e, t) {
  let n = tt(e, "id"), r = tt(e, "ident"), a = tt(e, "name"), o = tt(e, "node-type-id"), s = Nd[tt(e, "type")], i = vg(e, t), l = yg(e), c = gg(e), u = !!(i != null && i.find((y) => Vs.includes(y.type) && y.id > 0)), d = !!(i != null && i.find((y) => Vs.includes(y.type))), h = !!(i != null && i.find((y) => y.type == Er)), v = !!(i != null && i.find((y) => y.type == fr));
  return {
    id: n,
    ident: r,
    name: a,
    nodeTypeId: o,
    type: s,
    destinations: i,
    nodeAttributes: l,
    label: c,
    hasValues: d,
    hasRealValues: u,
    hasModes: h,
    hasSubsystems: v
  };
}
function us(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((a) => e.findNode(a.type, a.id));
      n.valuesNodes = r.filter((a) => a.type != Er && a.type != fr), n.modesNodes = r.filter((a) => a.type === Er), n.subsystemsNodes = r.filter((a) => a.type === fr), n.modesNodes.forEach((a) => {
        a.parent = n;
      }), n.subsystemsNodes.forEach((a) => {
        a.parent = n;
      });
    }
  });
}
function fu(e) {
  e.forEach((t) => {
    let n = null;
    t.modesNodes && t.modesNodes.length > 0 && (t.defaultModeId ? n = t.modesNodes.find((r) => r.id === t.defaultModeId) : n = t.modesNodes[0]), t.defaultMode = n;
  });
}
function pu(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    findNode: function(l, c) {
      let u = null;
      return l == Er ? u = this.modes : l == fr ? u = this.subsystems : u = this.values, u.find((d) => d.id === c);
    }
  };
  var r = [];
  const o = new DOMParser().parseFromString(t, "text/xml");
  for (const l of pg) {
    let c = o.getElementsByTagName(l);
    for (const u of c) {
      const d = ls(u, r);
      d.parent = null;
      let h = tt(u, "value-formatter-id");
      d[h] = h;
      const v = d.type;
      if (v == wa) {
        let y = tt(u, "default-float"), _ = tt(u, "rangemax"), A = tt(u, "rangemin");
        d.defaultFloat = y, d.rangemax = _, d.rangemin = A;
      } else if (v == _a) {
        let y = tt(u, "default-string");
        d.defaultString = y;
      } else if (v == Ro) {
        let y = tt(u, "default-date"), _ = tt(u, "date-max"), A = tt(u, "date-min");
        d.defaultDate = y, d.datemax = _, d.datemin = A;
      } else if (v == xa) {
        let y = tt(u, "default-string"), _ = tt(u, "file-description"), A = tt(u, "file-extension");
        d.defaultString = y, d.fileDescription = _, d.fileExtension = A;
      }
      n.values.push(new rs(d));
    }
  }
  const s = o.getElementsByTagName(mg);
  for (const l of s) {
    const c = ls(l, r);
    let u = tt(l, "default-mode-id"), d = tt(l, "default-value-id");
    c.defaultModeId = u, c.defaultValueId = d, n.modes.push(new rs(c));
  }
  const i = o.getElementsByTagName(hg);
  for (const l of i) {
    const c = ls(l, r);
    let u = tt(l, "default-mode-id");
    c.defaultModeId = u, n.subsystems.push(new rs(c));
  }
  return n.rootSubsystem = n.subsystems.find((l) => !r.includes(l.id)), us(n, n.modes), us(n, n.params), us(n, n.subsystems), fu(n.modes), fu(n.subsystems), n;
}
const Oi = vh("model", () => {
  const e = oe(null), t = oe([]), n = oe([]), r = oe([]), a = oe(), o = oe([]), s = oe({});
  function i(b) {
    du(`/models/${b}.xml`).then((k) => {
      e.value = k;
      let P = pu(this, k);
      t.value = P.values, n.value = P.modes, r.value = P.subsystems, a.value = P.rootSubsystem, o.value = [], s.value = {}, v(P.rootSubsystem);
    });
  }
  function l(b) {
    du(`${b}`).then((k) => {
      e.value = k;
      let P = pu(this, k);
      t.value = P.values, n.value = P.modes, r.value = P.subsystems, a.value = P.rootSubsystem, o.value = [], s.value = {}, v(P.rootSubsystem);
    });
  }
  function c(b) {
    return t.value.find((S) => S.id == b);
  }
  function u(b) {
    return n.value.find((S) => S.id == b);
  }
  function d(b) {
    return r.value.find((S) => S.id == b);
  }
  function h(b, S, k) {
    if (b.validModes = k, k.length > 0) {
      let P = b.currentMode, C = null;
      return k.length > 0 ? S != null && k.includes(S) ? C = S : k.includes(b.defaultMode) ? C = b.defaultMode : C = k[0] : C = b.defaultMode, P != C && (b.currentMode = C, b.candidateMode = C, o.value[`${b.id}`] = C, b.hasValues && g(b, b.currentMode), b.hasSubsystems && b.subsystemsNodes.forEach((F) => {
        y(F, F.currentMode, b.currentMode);
      })), C;
    } else
      return b.currentMode = null, b.candidateMode = null, null;
  }
  function v(b, S) {
    let k = A(b);
    return h(b, S, k);
  }
  function y(b, S, k) {
    let P = Xl(b.modesNodes, k.modesNodes);
    return h(b, S, P);
  }
  function _(b) {
    const S = o.value.reduce((k, P) => b.includes(P.id) ? P : k, null);
    return S || b[0];
  }
  function A(b) {
    return b.parent != null ? Xl(b.modesNodes, b.parent.currentMode.modesNodes) : b.modesNodes;
  }
  function Y(b) {
    return A(b).length > 0;
  }
  function j(b, S) {
    s.value[`${b.id}`] = S;
  }
  function g(b, S) {
    let k = s.value[`${b.id}`];
    if (!S.hasValues)
      return null;
    let P = S.valuesNodes;
    return k != null && !Yr(k) && P.find((C) => {
      C.id, k.id;
    }) === null && (k = void 0), P[0].type == _a ? Yr(k) && (k = P[0].defaultString) : P[0].type == wa ? (Yr(k) || P[0].rangemin > k || P[0].rangemax < k) && (k = P[0].defaultFloat) : P[0].type == xa ? Yr(k) && (k = P[0].defaultString) : (Yr(k) || !P.includes(k)) && (k = P[0]), j(b, k), k;
  }
  return {
    xmlModel: e,
    rootSubsystem: a,
    currentModes: o,
    systemValues: s,
    loadModel: i,
    loadModelURL: l,
    getValue: c,
    getMode: u,
    getSubsystem: d,
    getCurrentMode: _,
    setValidMode: v,
    getValidObjModes: A,
    hasValidObjModes: Y,
    getSystemValue: g,
    setSystemValue: j
  };
}), bg = ["disabled"], _g = ["value"], $d = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ fi({
    modes: {
      type: Array,
      required: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = gi(e, "modelValue"), n = e, r = oe(n.modes);
    return bt(
      () => n.modes,
      (a, o) => {
        r.value = a;
      }
    ), (a, o) => $n((V(), K("select", {
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (V(!0), K(xe, null, Xe(r.value, (s) => (V(), K("option", {
        key: s.id,
        value: s
      }, lt(s.label || s.name), 9, _g))), 128))
    ], 8, bg)), [
      [Bc, t.value]
    ]);
  }
};
function Se(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ue(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Wt(e, t) {
  const n = Se(e);
  return isNaN(t) ? Ue(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function zt(e, t) {
  const n = Se(e);
  if (isNaN(t)) return Ue(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = Ue(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
function Id(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0
  } = t, c = Se(e), u = r || n ? zt(c, r + n * 12) : c, d = o || a ? Wt(u, o + a * 7) : u, h = i + s * 60, y = (l + h * 60) * 1e3;
  return Ue(e, d.getTime() + y);
}
const Vd = 6048e5, wg = 864e5, xg = 6e4, Sg = 36e5, Tg = 1e3;
let Mg = {};
function hr() {
  return Mg;
}
function pn(e, t) {
  var i, l, c, u;
  const n = hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Se(e), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Dr(e) {
  return pn(e, { weekStartsOn: 1 });
}
function Ld(e) {
  const t = Se(e), n = t.getFullYear(), r = Ue(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Dr(r), o = Ue(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Dr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function mu(e) {
  const t = Se(e);
  return t.setHours(0, 0, 0, 0), t;
}
function io(e) {
  const t = Se(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Fd(e, t) {
  const n = mu(e), r = mu(t), a = +n - io(n), o = +r - io(r);
  return Math.round((a - o) / wg);
}
function kg(e) {
  const t = Ld(e), n = Ue(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Dr(n);
}
function Eg(e, t) {
  const n = t * 3;
  return zt(e, n);
}
function Ai(e, t) {
  return zt(e, t * 12);
}
function Bd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function oa(e) {
  if (!Bd(e) && typeof e != "number")
    return !1;
  const t = Se(e);
  return !isNaN(Number(t));
}
function hu(e) {
  const t = Se(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Hd(e, t) {
  const n = Se(e.start), r = Se(e.end);
  let a = +n > +r;
  const o = a ? +n : +r, s = a ? r : n;
  s.setHours(0, 0, 0, 0);
  let i = 1;
  const l = [];
  for (; +s <= o; )
    l.push(Se(s)), s.setDate(s.getDate() + i), s.setHours(0, 0, 0, 0);
  return a ? l.reverse() : l;
}
function or(e) {
  const t = Se(e), n = t.getMonth(), r = n - n % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function Dg(e, t) {
  const n = Se(e.start), r = Se(e.end);
  let a = +n > +r;
  const o = a ? +or(n) : +or(r);
  let s = or(a ? r : n), i = 1;
  const l = [];
  for (; +s <= o; )
    l.push(Se(s)), s = Eg(s, i);
  return a ? l.reverse() : l;
}
function Og(e) {
  const t = Se(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Yd(e) {
  const t = Se(e), n = Ue(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ag(e, t) {
  var i, l, c, u;
  const n = hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Se(e), o = a.getDay(), s = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function vu(e) {
  const t = Se(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const Pg = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Cg = (e, t, n) => {
  let r;
  const a = Pg[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function cs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Rg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ng = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $g = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ig = {
  date: cs({
    formats: Rg,
    defaultWidth: "full"
  }),
  time: cs({
    formats: Ng,
    defaultWidth: "full"
  }),
  dateTime: cs({
    formats: $g,
    defaultWidth: "full"
  })
}, Vg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Lg = (e, t, n, r) => Vg[e];
function Ur(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      a = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[i] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const Fg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Bg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Hg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Yg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, jg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ug = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Wg = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, qg = {
  ordinalNumber: Wg,
  era: Ur({
    values: Fg,
    defaultWidth: "wide"
  }),
  quarter: Ur({
    values: Bg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ur({
    values: Hg,
    defaultWidth: "wide"
  }),
  day: Ur({
    values: Yg,
    defaultWidth: "wide"
  }),
  dayPeriod: Ur({
    values: jg,
    defaultWidth: "wide",
    formattingValues: Ug,
    defaultFormattingWidth: "wide"
  })
};
function Wr(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const s = o[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? zg(i, (d) => d.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Gg(i, (d) => d.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(s.length);
    return { value: c, rest: u };
  };
}
function Gg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function zg(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Kg(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(a.length);
    return { value: s, rest: i };
  };
}
const Xg = /^(\d+)(th|st|nd|rd)?/i, Qg = /\d+/i, Jg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Zg = {
  any: [/^b/i, /^(a|c)/i]
}, eb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, tb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, nb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, rb = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ab = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ob = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, sb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ib = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, lb = {
  ordinalNumber: Kg({
    matchPattern: Xg,
    parsePattern: Qg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Wr({
    matchPatterns: Jg,
    defaultMatchWidth: "wide",
    parsePatterns: Zg,
    defaultParseWidth: "any"
  }),
  quarter: Wr({
    matchPatterns: eb,
    defaultMatchWidth: "wide",
    parsePatterns: tb,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Wr({
    matchPatterns: nb,
    defaultMatchWidth: "wide",
    parsePatterns: rb,
    defaultParseWidth: "any"
  }),
  day: Wr({
    matchPatterns: ab,
    defaultMatchWidth: "wide",
    parsePatterns: ob,
    defaultParseWidth: "any"
  }),
  dayPeriod: Wr({
    matchPatterns: sb,
    defaultMatchWidth: "any",
    parsePatterns: ib,
    defaultParseWidth: "any"
  })
}, jd = {
  code: "en-US",
  formatDistance: Cg,
  formatLong: Ig,
  formatRelative: Lg,
  localize: qg,
  match: lb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ub(e) {
  const t = Se(e);
  return Fd(t, Yd(t)) + 1;
}
function Pi(e) {
  const t = Se(e), n = +Dr(t) - +kg(t);
  return Math.round(n / Vd) + 1;
}
function Ci(e, t) {
  var u, d, h, v;
  const n = Se(e), r = n.getFullYear(), a = hr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((v = (h = a.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Ue(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const i = pn(s, t), l = Ue(e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const c = pn(l, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function cb(e, t) {
  var i, l, c, u;
  const n = hr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Ci(e, t), o = Ue(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), pn(o, t);
}
function Ri(e, t) {
  const n = Se(e), r = +pn(n, t) - +cb(n, t);
  return Math.round(r / Vd) + 1;
}
function We(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Mn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return We(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : We(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return We(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return We(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return We(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return We(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return We(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return We(a, t.length);
  }
}, yr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, yu = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return Mn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Ci(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = o % 100;
      return We(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : We(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Ld(e);
    return We(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return We(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return We(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return We(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Mn.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return We(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Ri(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : We(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Pi(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : We(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Mn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ub(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : We(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return We(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return We(o, t.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return We(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = yr.noon : r === 0 ? a = yr.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = yr.evening : r >= 12 ? a = yr.afternoon : r >= 4 ? a = yr.morning : a = yr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Mn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Mn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : We(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : We(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Mn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Mn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Mn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return bu(r);
      case "XXXX":
      case "XX":
        return Jn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Jn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return bu(r);
      case "xxxx":
      case "xx":
        return Jn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Jn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + gu(r, ":");
      case "OOOO":
      default:
        return "GMT" + Jn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + gu(r, ":");
      case "zzzz":
      default:
        return "GMT" + Jn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return We(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return We(r, t.length);
  }
};
function gu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + We(o, 2);
}
function bu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + We(Math.abs(e) / 60, 2) : Jn(e, t);
}
function Jn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = We(Math.trunc(r / 60), 2), o = We(r % 60, 2);
  return n + a + t + o;
}
const _u = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Ud = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, db = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return _u(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", _u(r, t)).replace("{{time}}", Ud(a, t));
}, Ws = {
  p: Ud,
  P: db
}, fb = /^D+$/, pb = /^Y+$/, mb = ["D", "DD", "YY", "YYYY"];
function Wd(e) {
  return fb.test(e);
}
function qd(e) {
  return pb.test(e);
}
function qs(e, t, n) {
  const r = hb(e, t, n);
  if (console.warn(r), mb.includes(e)) throw new RangeError(r);
}
function hb(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const vb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, yb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gb = /^'([^]*?)'?$/, bb = /''/g, _b = /[a-zA-Z]/;
function cn(e, t, n) {
  var u, d, h, v, y, _, A, Y;
  const r = hr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? jd, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((_ = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : _.weekStartsOn) ?? r.weekStartsOn ?? ((Y = (A = r.locale) == null ? void 0 : A.options) == null ? void 0 : Y.weekStartsOn) ?? 0, i = Se(e);
  if (!oa(i))
    throw new RangeError("Invalid time value");
  let l = t.match(yb).map((j) => {
    const g = j[0];
    if (g === "p" || g === "P") {
      const b = Ws[g];
      return b(j, a.formatLong);
    }
    return j;
  }).join("").match(vb).map((j) => {
    if (j === "''")
      return { isToken: !1, value: "'" };
    const g = j[0];
    if (g === "'")
      return { isToken: !1, value: wb(j) };
    if (yu[g])
      return { isToken: !0, value: j };
    if (g.match(_b))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: j };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(i, l));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return l.map((j) => {
    if (!j.isToken) return j.value;
    const g = j.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && qd(g) || !(n != null && n.useAdditionalDayOfYearTokens) && Wd(g)) && qs(g, t, String(e));
    const b = yu[g[0]];
    return b(i, g, a.localize, c);
  }).join("");
}
function wb(e) {
  const t = e.match(gb);
  return t ? t[1].replace(bb, "'") : e;
}
function xb(e) {
  return Se(e).getDay();
}
function Sb(e) {
  const t = Se(e), n = t.getFullYear(), r = t.getMonth(), a = Ue(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Tb() {
  return Object.assign({}, hr());
}
function Kt(e) {
  return Se(e).getHours();
}
function Mb(e) {
  let n = Se(e).getDay();
  return n === 0 && (n = 7), n;
}
function dn(e) {
  return Se(e).getMinutes();
}
function Fe(e) {
  return Se(e).getMonth();
}
function Or(e) {
  return Se(e).getSeconds();
}
function Ne(e) {
  return Se(e).getFullYear();
}
function ha(e, t) {
  const n = Se(e), r = Se(t);
  return n.getTime() > r.getTime();
}
function va(e, t) {
  const n = Se(e), r = Se(t);
  return +n < +r;
}
function _r(e, t) {
  const n = Se(e), r = Se(t);
  return +n == +r;
}
function kb(e, t) {
  const n = t instanceof Date ? Ue(t, 0) : new t(0);
  return n.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
const Eb = 10;
class Gd {
  constructor() {
    fe(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class Db extends Gd {
  constructor(t, n, r, a, o) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = a, o && (this.subPriority = o);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class Ob extends Gd {
  constructor() {
    super(...arguments);
    fe(this, "priority", Eb);
    fe(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : Ue(n, kb(n, Date));
  }
}
class je {
  run(t, n, r, a) {
    const o = this.parse(t, n, r, a);
    return o ? {
      setter: new Db(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class Ab extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 140);
    fe(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
      case "GGGGG":
        return a.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(n, { width: "wide" }) || a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
    }
  }
  set(n, r, a) {
    return r.era = a, n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const dt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, sn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ft(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function rt(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function ln(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, s = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * Sg + o * xg + s * Tg),
    rest: t.slice(n[0].length)
  };
}
function zd(e) {
  return rt(dt.anyDigitsSigned, e);
}
function ut(e, t) {
  switch (e) {
    case 1:
      return rt(dt.singleDigit, t);
    case 2:
      return rt(dt.twoDigits, t);
    case 3:
      return rt(dt.threeDigits, t);
    case 4:
      return rt(dt.fourDigits, t);
    default:
      return rt(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function lo(e, t) {
  switch (e) {
    case 1:
      return rt(dt.singleDigitSigned, t);
    case 2:
      return rt(dt.twoDigitsSigned, t);
    case 3:
      return rt(dt.threeDigitsSigned, t);
    case 4:
      return rt(dt.fourDigitsSigned, t);
    default:
      return rt(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Ni(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Kd(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let a;
  if (r <= 50)
    a = e || 100;
  else {
    const o = r + 50, s = Math.trunc(o / 100) * 100, i = e >= o % 100;
    a = e + s - (i ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Xd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class Pb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return ft(ut(4, n), o);
      case "yo":
        return ft(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          o
        );
      default:
        return ft(ut(r.length, n), o);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a) {
    const o = n.getFullYear();
    if (a.isTwoDigitYear) {
      const i = Kd(
        a.year,
        o
      );
      return n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class Cb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return ft(ut(4, n), o);
      case "Yo":
        return ft(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          o
        );
      default:
        return ft(ut(r.length, n), o);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a, o) {
    const s = Ci(n, o);
    if (a.isTwoDigitYear) {
      const l = Kd(
        a.year,
        s
      );
      return n.setFullYear(
        l,
        0,
        o.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), pn(n, o);
    }
    const i = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(i, 0, o.firstWeekContainsDate), n.setHours(0, 0, 0, 0), pn(n, o);
  }
}
class Rb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r) {
    return lo(r === "R" ? 4 : r.length, n);
  }
  set(n, r, a) {
    const o = Ue(n, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), Dr(o);
  }
}
class Nb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return lo(r === "u" ? 4 : r.length, n);
  }
  set(n, r, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class $b extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 120);
    fe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "Q":
      case "QQ":
        return ut(r.length, n);
      case "Qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class Ib extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 120);
    fe(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "q":
      case "qq":
        return ut(r.length, n);
      case "qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class Vb extends je {
  constructor() {
    super(...arguments);
    fe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    fe(this, "priority", 110);
  }
  parse(n, r, a) {
    const o = (s) => s - 1;
    switch (r) {
      case "M":
        return ft(
          rt(dt.month, n),
          o
        );
      case "MM":
        return ft(ut(2, n), o);
      case "Mo":
        return ft(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(n, { width: "wide", context: "formatting" }) || a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class Lb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 110);
    fe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const o = (s) => s - 1;
    switch (r) {
      case "L":
        return ft(
          rt(dt.month, n),
          o
        );
      case "LL":
        return ft(ut(2, n), o);
      case "Lo":
        return ft(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(n, { width: "wide", context: "standalone" }) || a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function Fb(e, t, n) {
  const r = Se(e), a = Ri(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class Bb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 100);
    fe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "w":
        return rt(dt.week, n);
      case "wo":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a, o) {
    return pn(Fb(n, a, o), o);
  }
}
function Hb(e, t) {
  const n = Se(e), r = Pi(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class Yb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 100);
    fe(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "I":
        return rt(dt.week, n);
      case "Io":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a) {
    return Dr(Hb(n, a));
  }
}
const jb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ub = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Wb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "subPriority", 1);
    fe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "d":
        return rt(dt.date, n);
      case "do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear(), o = Xd(a), s = n.getMonth();
    return o ? r >= 1 && r <= Ub[s] : r >= 1 && r <= jb[s];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class qb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "subpriority", 1);
    fe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "D":
      case "DD":
        return rt(dt.dayOfYear, n);
      case "Do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear();
    return Xd(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function $i(e, t, n) {
  var d, h, v, y;
  const r = hr(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((y = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : y.weekStartsOn) ?? 0, o = Se(e), s = o.getDay(), l = (t % 7 + 7) % 7, c = 7 - a, u = t < 0 || t > 6 ? t - (s + c) % 7 : (l + c) % 7 - (s + c) % 7;
  return Wt(o, u);
}
class Gb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, o) {
    return n = $i(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class zb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a, o) {
    const s = (i) => {
      const l = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return ft(ut(r.length, n), s);
      case "eo":
        return ft(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, o) {
    return n = $i(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class Kb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(n, r, a, o) {
    const s = (i) => {
      const l = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return ft(ut(r.length, n), s);
      case "co":
        return ft(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(n, { width: "wide", context: "standalone" }) || a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, o) {
    return n = $i(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
function Xb(e, t) {
  const n = Se(e), r = Mb(n), a = t - r;
  return Wt(n, a);
}
class Qb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const o = (s) => s === 0 ? 7 : s;
    switch (r) {
      case "i":
      case "ii":
        return ut(r.length, n);
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      case "iii":
        return ft(
          a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return ft(
          a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return ft(
          a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return ft(
          a.day(n, {
            width: "wide",
            context: "formatting"
          }) || a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, a) {
    return n = Xb(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class Jb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 80);
    fe(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(Ni(a), 0, 0, 0), n;
  }
}
class Zb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 80);
    fe(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(Ni(a), 0, 0, 0), n;
  }
}
class e_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 80);
    fe(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(Ni(a), 0, 0, 0), n;
  }
}
class t_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "h":
        return rt(dt.hour12h, n);
      case "ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 12;
  }
  set(n, r, a) {
    const o = n.getHours() >= 12;
    return o && a < 12 ? n.setHours(a + 12, 0, 0, 0) : !o && a === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class n_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "H":
        return rt(dt.hour23h, n);
      case "Ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, a) {
    return n.setHours(a, 0, 0, 0), n;
  }
}
class r_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "K":
        return rt(dt.hour11h, n);
      case "Ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.getHours() >= 12 && a < 12 ? n.setHours(a + 12, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class a_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "k":
        return rt(dt.hour24h, n);
      case "ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 24;
  }
  set(n, r, a) {
    const o = a <= 24 ? a % 24 : a;
    return n.setHours(o, 0, 0, 0), n;
  }
}
class o_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 60);
    fe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "m":
        return rt(dt.minute, n);
      case "mo":
        return a.ordinalNumber(n, { unit: "minute" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setMinutes(a, 0, 0), n;
  }
}
class s_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 50);
    fe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "s":
        return rt(dt.second, n);
      case "so":
        return a.ordinalNumber(n, { unit: "second" });
      default:
        return ut(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setSeconds(a, 0), n;
  }
}
class i_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 30);
    fe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const a = (o) => Math.trunc(o * Math.pow(10, -r.length + 3));
    return ft(ut(r.length, n), a);
  }
  set(n, r, a) {
    return n.setMilliseconds(a), n;
  }
}
class l_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 10);
    fe(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return ln(
          sn.basicOptionalMinutes,
          n
        );
      case "XX":
        return ln(sn.basic, n);
      case "XXXX":
        return ln(
          sn.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return ln(
          sn.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return ln(sn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : Ue(
      n,
      n.getTime() - io(n) - a
    );
  }
}
class u_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 10);
    fe(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return ln(
          sn.basicOptionalMinutes,
          n
        );
      case "xx":
        return ln(sn.basic, n);
      case "xxxx":
        return ln(
          sn.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return ln(
          sn.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return ln(sn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : Ue(
      n,
      n.getTime() - io(n) - a
    );
  }
}
class c_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 40);
    fe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return zd(n);
  }
  set(n, r, a) {
    return [Ue(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class d_ extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 20);
    fe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return zd(n);
  }
  set(n, r, a) {
    return [Ue(n, a), { timestampIsSet: !0 }];
  }
}
const f_ = {
  G: new Ab(),
  y: new Pb(),
  Y: new Cb(),
  R: new Rb(),
  u: new Nb(),
  Q: new $b(),
  q: new Ib(),
  M: new Vb(),
  L: new Lb(),
  w: new Bb(),
  I: new Yb(),
  d: new Wb(),
  D: new qb(),
  E: new Gb(),
  e: new zb(),
  c: new Kb(),
  i: new Qb(),
  a: new Jb(),
  b: new Zb(),
  B: new e_(),
  h: new t_(),
  H: new n_(),
  K: new r_(),
  k: new a_(),
  m: new o_(),
  s: new s_(),
  S: new i_(),
  X: new l_(),
  x: new u_(),
  t: new c_(),
  T: new d_()
}, p_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, m_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, h_ = /^'([^]*?)'?$/, v_ = /''/g, y_ = /\S/, g_ = /[a-zA-Z]/;
function Gs(e, t, n, r) {
  var _, A, Y, j;
  const a = Tb(), o = a.locale ?? jd, s = a.firstWeekContainsDate ?? ((A = (_ = a.locale) == null ? void 0 : _.options) == null ? void 0 : A.firstWeekContainsDate) ?? 1, i = a.weekStartsOn ?? ((j = (Y = a.locale) == null ? void 0 : Y.options) == null ? void 0 : j.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? Se(n) : Ue(n, NaN);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  }, c = [new Ob()], u = t.match(m_).map((g) => {
    const b = g[0];
    if (b in Ws) {
      const S = Ws[b];
      return S(g, o.formatLong);
    }
    return g;
  }).join("").match(p_), d = [];
  for (let g of u) {
    qd(g) && qs(g, t, e), Wd(g) && qs(g, t, e);
    const b = g[0], S = f_[b];
    if (S) {
      const { incompatibleTokens: k } = S;
      if (Array.isArray(k)) {
        const C = d.find(
          (F) => k.includes(F.token) || F.token === b
        );
        if (C)
          throw new RangeError(
            `The format string mustn't contain \`${C.fullToken}\` and \`${g}\` at the same time`
          );
      } else if (S.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${g}\` and any other token at the same time`
        );
      d.push({ token: b, fullToken: g });
      const P = S.run(
        e,
        g,
        o.match,
        l
      );
      if (!P)
        return Ue(n, NaN);
      c.push(P.setter), e = P.rest;
    } else {
      if (b.match(g_))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + b + "`"
        );
      if (g === "''" ? g = "'" : b === "'" && (g = b_(g)), e.indexOf(g) === 0)
        e = e.slice(g.length);
      else
        return Ue(n, NaN);
    }
  }
  if (e.length > 0 && y_.test(e))
    return Ue(n, NaN);
  const h = c.map((g) => g.priority).sort((g, b) => b - g).filter((g, b, S) => S.indexOf(g) === b).map(
    (g) => c.filter((b) => b.priority === g).sort((b, S) => S.subPriority - b.subPriority)
  ).map((g) => g[0]);
  let v = Se(n);
  if (isNaN(v.getTime()))
    return Ue(n, NaN);
  const y = {};
  for (const g of h) {
    if (!g.validate(v, l))
      return Ue(n, NaN);
    const b = g.set(v, y, l);
    Array.isArray(b) ? (v = b[0], Object.assign(y, b[1])) : v = b;
  }
  return Ue(n, v);
}
function b_(e) {
  return e.match(h_)[1].replace(v_, "'");
}
function wu(e, t) {
  const n = or(e), r = or(t);
  return +n == +r;
}
function __(e, t) {
  return Wt(e, -t);
}
function Qd(e, t) {
  const n = Se(e), r = n.getFullYear(), a = n.getDate(), o = Ue(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const s = Sb(o);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Je(e, t) {
  let n = Se(e);
  return isNaN(+n) ? Ue(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Qd(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Jd(e, t) {
  const n = Se(e);
  return n.setHours(t), n;
}
function Ii(e, t) {
  const n = Se(e);
  return n.setMilliseconds(t), n;
}
function Zd(e, t) {
  const n = Se(e);
  return n.setMinutes(t), n;
}
function Vi(e, t) {
  const n = Se(e);
  return n.setSeconds(t), n;
}
function un(e, t) {
  const n = Se(e);
  return isNaN(+n) ? Ue(e, NaN) : (n.setFullYear(t), n);
}
function Ar(e, t) {
  return zt(e, -t);
}
function w_(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0
  } = t, c = Ar(e, r + n * 12), u = __(c, o + a * 7), d = i + s * 60, v = (l + d * 60) * 1e3;
  return Ue(e, u.getTime() - v);
}
function ef(e, t) {
  return Ai(e, -t);
}
function Lr() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Te("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Te("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Te("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Lr.compatConfig = {
  MODE: 3
};
function tf() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Te("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
tf.compatConfig = {
  MODE: 3
};
function Li() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Li.compatConfig = {
  MODE: 3
};
function Fi() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Fi.compatConfig = {
  MODE: 3
};
function Bi() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Te("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Bi.compatConfig = {
  MODE: 3
};
function Hi() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Hi.compatConfig = {
  MODE: 3
};
function Yi() {
  return V(), K(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Te("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Yi.compatConfig = {
  MODE: 3
};
function xu(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function x_(e) {
  return (t) => cn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const S_ = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(x_(e));
    } catch {
      a = r.map(xu(t));
    }
  else
    a = r.map(xu(t));
  const o = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...o);
}, ji = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, nf = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const s = o < 10 ? `0${o}` : o;
    return /* @__PURE__ */ new Date(`2017-${s}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const o = n === "long" ? "MMMM" : "MMM";
      return r.map((s, i) => {
        const l = cn(s, o, { locale: e });
        return {
          text: l.charAt(0).toUpperCase() + l.substring(1),
          value: i
        };
      });
    } catch {
    }
  const a = new Intl.DateTimeFormat(t, { month: n, timeZone: "UTC" });
  return r.map((o, s) => {
    const i = a.format(o);
    return {
      text: i.charAt(0).toUpperCase() + i.substring(1),
      value: s
    };
  });
}, T_ = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], gt = (e) => {
  const t = T(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, M_ = (e) => ({ type: "dot", ...e ?? {} }), rf = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ui = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, _t = (e) => e, Su = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Tu = (e) => e === null, af = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, k_ = (e) => {
  const t = [], n = (r) => r.filter((a) => a);
  for (let r = 0; r < e.length; r += 3) {
    const a = [e[r], e[r + 1], e[r + 2]];
    t.push(n(a));
  }
  return t;
}, ya = (e, t, n) => {
  const r = n != null, a = t != null;
  if (!r && !a)
    return !1;
  const o = +n, s = +t;
  return r && a ? +e > o || +e < s : r ? +e > o : a ? +e < s : !1;
}, Pr = (e, t) => k_(e).map((n) => n.map((r) => {
  const { active: a, disabled: o, isBetween: s, highlighted: i } = t(r);
  return {
    ...r,
    active: a,
    disabled: o,
    className: {
      dp__overlay_cell_active: a,
      dp__overlay_cell: !a,
      dp__overlay_cell_disabled: o,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: o && a,
      dp__cell_in_between: s,
      "dp--highlighted": i
    }
  };
})), In = (e, t, n = !1) => {
  e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, E_ = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function D_(e, t) {
  let n = [...document.querySelectorAll(E_())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const O_ = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Wi = (e) => cn(e, "dd-MM-yyyy"), ds = (e) => Array.isArray(e), uo = (e, t) => t.get(Wi(e)), A_ = (e, t) => e ? t ? t instanceof Map ? !!uo(e, t) : t(Q(e)) : !1 : !0, Mu = (e, t, n, r, a) => {
  const o = Gs(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return oa(o) && Bd(o) ? r || a ? o : Je(o, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, P_ = (e, t, n, r, a) => {
  const o = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return Mu(e, t, o, r, a);
  if (Array.isArray(t)) {
    let s = null;
    for (const i of t)
      if (s = Mu(e, i, o, r, a), s)
        break;
    return s;
  }
  return typeof t == "function" ? t(e) : null;
}, Q = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), C_ = (e, t, n) => {
  if (t) {
    const a = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), s = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0"), l = n ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${a}-${o}T${s}:${i}:${l}.000Z`;
  }
  const r = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(r).toISOString();
}, Ft = (e) => {
  let t = Q(JSON.parse(JSON.stringify(e)));
  return t = Jd(t, 0), t = Zd(t, 0), t = Vi(t, 0), t = Ii(t, 0), t;
}, Vn = (e, t, n, r) => {
  let a = e ? Q(e) : Q();
  return (t || t === 0) && (a = Jd(a, +t)), (n || n === 0) && (a = Zd(a, +n)), (r || r === 0) && (a = Vi(a, +r)), Ii(a, 0);
}, it = (e, t) => !e || !t ? !1 : va(Ft(e), Ft(t)), Be = (e, t) => !e || !t ? !1 : _r(Ft(e), Ft(t)), ct = (e, t) => !e || !t ? !1 : ha(Ft(e), Ft(t)), Fo = (e, t, n) => e != null && e[0] && e != null && e[1] ? ct(n, e[0]) && it(n, e[1]) : e != null && e[0] && t ? ct(n, e[0]) && it(n, t) || it(n, e[0]) && ct(n, t) : !1, qt = (e) => {
  const t = Je(new Date(e), { date: 1 });
  return Ft(t);
}, fs = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, ur = (e) => ({
  hours: Kt(e),
  minutes: dn(e),
  seconds: Or(e)
}), of = (e, t) => {
  if (t) {
    const n = Ne(Q(t));
    if (n > e)
      return 12;
    if (n === e)
      return Fe(Q(t));
  }
}, sf = (e, t) => {
  if (t) {
    const n = Ne(Q(t));
    return n < e ? -1 : n === e ? Fe(Q(t)) : void 0;
  }
}, Cr = (e) => {
  if (e)
    return Ne(Q(e));
}, lf = (e, t) => {
  const n = ct(e, t) ? t : e, r = ct(t, e) ? t : e;
  return Hd({ start: n, end: r });
}, R_ = (e) => {
  const t = zt(e, 1);
  return { month: Fe(t), year: Ne(t) };
}, mn = (e, t) => {
  const n = pn(e, { weekStartsOn: +t }), r = Ag(e, { weekStartsOn: +t });
  return [n, r];
}, uf = (e, t) => {
  const n = {
    hours: Kt(Q()),
    minutes: dn(Q()),
    seconds: t ? Or(Q()) : 0
  };
  return Object.assign(n, e);
}, Cn = (e, t, n) => [Je(Q(e), { date: 1 }), Je(Q(), { month: t, year: n, date: 1 })], hn = (e, t, n) => {
  let r = e ? Q(e) : Q();
  return (t || t === 0) && (r = Qd(r, t)), n && (r = un(r, n)), r;
}, cf = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n)
    return !1;
  const o = a ? zt(e, 1) : Ar(e, 1), s = [Fe(o), Ne(o)];
  return a ? !$_(...s, t) : !N_(...s, n);
}, N_ = (e, t, n) => it(...Cn(n, e, t)) || Be(...Cn(n, e, t)), $_ = (e, t, n) => ct(...Cn(n, e, t)) || Be(...Cn(n, e, t)), df = (e, t, n, r, a, o, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const i = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${cn(e[0], o, i)}${a && !e[1] ? "" : r}${e[1] ? cn(e[1], o, i) : ""}` : cn(e, o, i);
}, gr = (e) => {
  if (e)
    return null;
  throw new Error(Ui.prop("partial-range"));
}, Ia = (e, t) => {
  if (t)
    return e();
  throw new Error(Ui.prop("range"));
}, zs = (e) => Array.isArray(e) ? oa(e[0]) && (e[1] ? oa(e[1]) : !0) : e ? oa(e) : !1, I_ = (e, t) => Je(t ?? Q(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ps = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const a = n === "max" ? va(e, t) : ha(e, t), o = { seconds: 0, milliseconds: 0 };
    return a || _r(Je(e, o), Je(t, o));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ms = (e, t, n) => e ? I_(e, t) : Q(n ?? t), ku = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const s = ms(e, r[0], t), i = ms(e, r[1], t);
    return ps(r[0], s, n, !!t) && ps(r[1], i, n, !!t) && a;
  }
  const o = ms(e, r, t);
  return ps(r, o, n, !!t) && a;
}, hs = (e) => Je(Q(), ur(e)), V_ = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => Ne(Q(n)) === t).map((n) => Fe(n)) : [], ff = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), qi = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), qr = gn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), pf = () => {
  const e = (n) => {
    qr.menuFocused = n;
  }, t = (n) => {
    qr.shiftKeyInMenu !== n && (qr.shiftKeyInMenu = n);
  };
  return {
    control: ne(() => ({ shiftKeyInMenu: qr.shiftKeyInMenu, menuFocused: qr.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Ze = gn({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), vs = oe(null), Va = oe(!1), ys = oe(!1), gs = oe(!1), bs = oe(!1), Et = oe(0), xt = oe(0), Wn = () => {
  const e = ne(() => Va.value ? [...Ze.selectionGrid, Ze.actionRow].filter((d) => d.length) : ys.value ? [
    ...Ze.timePicker[0],
    ...Ze.timePicker[1],
    bs.value ? [] : [vs.value],
    Ze.actionRow
  ].filter((d) => d.length) : gs.value ? [...Ze.monthPicker, Ze.actionRow] : [Ze.monthYear, ...Ze.calendar, Ze.time, Ze.actionRow].filter((d) => d.length)), t = (d) => {
    Et.value = d ? Et.value + 1 : Et.value - 1;
    let h = null;
    e.value[xt.value] && (h = e.value[xt.value][Et.value]), h || (Et.value = d ? Et.value - 1 : Et.value + 1);
  }, n = (d) => {
    xt.value === 0 && !d || xt.value === e.value.length && d || (xt.value = d ? xt.value + 1 : xt.value - 1, e.value[xt.value] ? e.value[xt.value] && !e.value[xt.value][Et.value] && Et.value !== 0 && (Et.value = e.value[xt.value].length - 1) : xt.value = d ? xt.value - 1 : xt.value + 1);
  }, r = (d) => {
    let h = null;
    e.value[xt.value] && (h = e.value[xt.value][Et.value]), h ? h.focus({ preventScroll: !Va.value }) : Et.value = d ? Et.value - 1 : Et.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, s = () => {
    n(!1), r(!0);
  }, i = () => {
    n(!0), r(!0);
  }, l = (d, h) => {
    Ze[h] = d;
  }, c = (d, h) => {
    Ze[h] = d;
  }, u = () => {
    Et.value = 0, xt.value = 0;
  };
  return {
    buildMatrix: l,
    buildMultiLevelMatrix: c,
    setTimePickerBackRef: (d) => {
      vs.value = d;
    },
    setSelectionGrid: (d) => {
      Va.value = d, u(), d || (Ze.selectionGrid = []);
    },
    setTimePicker: (d, h = !1) => {
      ys.value = d, bs.value = h, u(), d || (Ze.timePicker[0] = [], Ze.timePicker[1] = []);
    },
    setTimePickerElements: (d, h = 0) => {
      Ze.timePicker[h] = d;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: s,
    arrowDown: i,
    clearArrowNav: () => {
      Ze.monthYear = [], Ze.calendar = [], Ze.time = [], Ze.actionRow = [], Ze.selectionGrid = [], Ze.timePicker[0] = [], Ze.timePicker[1] = [], Va.value = !1, ys.value = !1, bs.value = !1, gs.value = !1, u(), vs.value = null;
    },
    setMonthPicker: (d) => {
      gs.value = d, u();
    },
    refSets: Ze
    // exposed for testing
  };
}, Bn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), mf = (e, t) => Ks(e, t) || Q(), L_ = (e, t) => t.dateInTz ? Bn(new Date(e), t.dateInTz) : Q(e), Ks = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return Q(e);
  const n = Q(e);
  return t.exactMatch ? L_(e, t) : Bn(n, t.timezone);
}, Eu = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), F_ = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), Du = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, B_ = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: Du(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, o = Du(a);
  return Object.assign(n, r, { count: o });
}, H_ = (e, t, n) => e || (typeof n == "string" ? n : t), Y_ = (e) => typeof e == "boolean" ? e ? Eu({}) : !1 : Eu(e), j_ = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, U_ = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), W_ = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), q_ = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, G_ = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), z_ = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => Q(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, K_ = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, X_ = (e, t) => typeof e == "object" ? { enabled: !0, ...{
  noDisabledRange: !1,
  showLastInRange: !0,
  minMaxRawRange: !1,
  partialRange: !0,
  disableTimeRangeValidation: !1,
  maxRange: void 0,
  minRange: void 0,
  autoRange: void 0,
  fixedStart: !1,
  fixedEnd: !1
}, ...e } : {
  enabled: e,
  noDisabledRange: t.noDisabledRange,
  showLastInRange: t.showLastInRange,
  minMaxRawRange: t.minMaxRawRange,
  partialRange: t.partialRange,
  disableTimeRangeValidation: t.disableTimeRangeValidation,
  maxRange: t.maxRange,
  minRange: t.minRange,
  autoRange: t.autoRange,
  fixedStart: t.fixedStart,
  fixedEnd: t.fixedEnd
}, Q_ = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, _s = (e, t) => new Map(
  e.map((n) => {
    const r = mf(n, t);
    return [Wi(r), r];
  })
), J_ = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = mf(n.date, t);
    return [Wi(r), n];
  })
) : null, Z_ = (e, t, n, r, a, o, s) => ({
  minDate: Ks(e, s),
  maxDate: Ks(t, s),
  disabledDates: ds(n) ? _s(n, s) : n,
  allowedDates: ds(r) ? _s(r, s) : null,
  highlight: typeof a == "object" && ds(a == null ? void 0 : a.dates) ? _s(a.dates, s) : a,
  markers: J_(o, s)
}), ot = (e) => {
  const t = () => {
    const b = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${b}` : `hh:mm${b} aa`;
  }, n = () => {
    var b;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((b = A.value) == null ? void 0 : b.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (b) => uf(b, e.enableSeconds), a = () => g.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, o = ne(() => B_(e.multiCalendars)), s = ne(() => a()), i = ne(() => F_(e.ariaLabels)), l = ne(() => U_(e.filters)), c = ne(() => Y_(e.transitions)), u = ne(() => W_(e.actionRow)), d = ne(
    () => H_(e.previewFormat, e.format, n())
  ), h = ne(() => j_(e.textInput)), v = ne(() => q_(e.inline)), y = ne(() => G_(e.config)), _ = ne(() => z_(e.highlight)), A = ne(() => K_(e.weekNumbers)), Y = ne(() => Q_(e.timezone, e.emitTimezone)), j = ne(
    () => Z_(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      _.value,
      e.markers,
      Y.value
    )
  ), g = ne(
    () => X_(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: c,
    defaultedMultiCalendars: o,
    defaultedStartTime: s,
    defaultedAriaLabels: i,
    defaultedFilters: l,
    defaultedActionRow: u,
    defaultedPreviewFormat: d,
    defaultedTextInput: h,
    defaultedInline: v,
    defaultedConfig: y,
    defaultedHighlight: _,
    defaultedWeekNumbers: A,
    defaultedRange: g,
    propDates: j,
    defaultedTz: Y,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, e1 = (e, t, n) => {
  const r = oe(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, getDefaultPattern: i } = ot(t), l = oe(""), c = Ga(t, "format");
  bt(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), bt(c, () => {
    H();
  });
  const u = (p, f, O = !1) => df(
    p,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    f ?? i(),
    O
  ), d = (p) => p ? t.modelType ? M(p) : {
    hours: Kt(p),
    minutes: dn(p),
    seconds: t.enableSeconds ? Or(p) : 0
  } : null, h = (p) => t.modelType ? M(p) : { month: Fe(p), year: Ne(p) }, v = (p) => Array.isArray(p) ? t.multiDates ? p.map((f) => y(f, un(Q(), f))) : Ia(
    () => [
      un(Q(), p[0]),
      p[1] ? un(Q(), p[1]) : gr(o.value.partialRange)
    ],
    o.value.enabled
  ) : un(Q(), +p), y = (p, f) => (typeof p == "string" || typeof p == "number") && t.modelType ? x(p) : f, _ = (p) => Array.isArray(p) ? [
    y(
      p[0],
      Vn(null, +p[0].hours, +p[0].minutes, p[0].seconds)
    ),
    y(
      p[1],
      Vn(null, +p[1].hours, +p[1].minutes, p[1].seconds)
    )
  ] : y(p, Vn(null, p.hours, p.minutes, p.seconds)), A = (p) => {
    const f = Je(Q(), { date: 1 });
    return Array.isArray(p) ? t.multiDates ? p.map((O) => y(O, hn(f, +O.month, +O.year))) : Ia(
      () => [
        y(p[0], hn(f, +p[0].month, +p[0].year)),
        y(
          p[1],
          p[1] ? hn(f, +p[1].month, +p[1].year) : gr(o.value.partialRange)
        )
      ],
      o.value.enabled
    ) : y(p, hn(f, +p.month, +p.year));
  }, Y = (p) => {
    if (Array.isArray(p))
      return p.map((f) => x(f));
    throw new Error(Ui.dateArr("multi-dates"));
  }, j = (p) => {
    if (Array.isArray(p) && o.value.enabled) {
      const f = p[0], O = p[1];
      return [
        Q(Array.isArray(f) ? f[0] : null),
        Q(Array.isArray(O) ? O[0] : null)
      ];
    }
    return Q(p[0]);
  }, g = (p) => t.modelAuto ? Array.isArray(p) ? [x(p[0]), x(p[1])] : t.autoApply ? [x(p)] : [x(p), null] : Array.isArray(p) ? Ia(
    () => p[1] ? [
      x(p[0]),
      p[1] ? x(p[1]) : gr(o.value.partialRange)
    ] : [x(p[0])],
    o.value.enabled
  ) : x(p), b = () => {
    Array.isArray(r.value) && o.value.enabled && r.value.length === 1 && r.value.push(gr(o.value.partialRange));
  }, S = () => {
    const p = r.value;
    return [
      M(p[0]),
      p[1] ? M(p[1]) : gr(o.value.partialRange)
    ];
  }, k = () => r.value[1] ? S() : M(_t(r.value[0])), P = () => (r.value || []).map((p) => M(p)), C = () => (b(), t.modelAuto ? k() : t.multiDates ? P() : Array.isArray(r.value) ? Ia(() => S(), o.value.enabled) : M(_t(r.value))), F = (p) => !p || Array.isArray(p) && !p.length ? null : t.timePicker ? _(_t(p)) : t.monthPicker ? A(_t(p)) : t.yearPicker ? v(_t(p)) : t.multiDates ? Y(_t(p)) : t.weekPicker ? j(_t(p)) : g(_t(p)), X = (p) => {
    const f = F(p);
    zs(_t(f)) ? (r.value = _t(f), H()) : (r.value = null, l.value = "");
  }, B = () => {
    const p = (f) => cn(f, a.value.format);
    return `${p(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? p(r.value[1]) : ""}`;
  }, R = () => n.value && r.value ? Array.isArray(r.value) ? B() : cn(r.value, a.value.format) : u(r.value), U = () => r.value ? t.multiDates ? r.value.map((p) => u(p)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? R() : u(r.value) : "", H = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? l.value = U() : l.value = t.format(r.value);
  }, x = (p) => {
    if (t.utc) {
      const f = new Date(p);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(p) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Gs(p, i(), /* @__PURE__ */ new Date()) : Gs(p, t.modelType, /* @__PURE__ */ new Date()) : new Date(p);
  }, M = (p) => p ? t.utc ? C_(p, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +p : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? u(p) : u(p, t.modelType, !0) : p : "", q = (p, f = !1) => {
    if (e("update:model-value", p), s.value.emitTimezone && f) {
      const O = Array.isArray(p) ? p.map((z) => Bn(_t(z), s.value.emitTimezone)) : Bn(_t(p), s.value.emitTimezone);
      e("update:model-timezone-value", O);
    }
  }, se = (p) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => p(f)) : [
    p(r.value[0]),
    r.value[1] ? p(r.value[1]) : gr(o.value.partialRange)
  ] : p(_t(r.value)), pe = () => {
    if (Array.isArray(r.value)) {
      const p = mn(r.value[0], t.weekStart), f = r.value[1] ? mn(r.value[1], t.weekStart) : [];
      return [p.map((O) => Q(O)), f.map((O) => Q(O))];
    }
    return mn(r.value, t.weekStart).map((p) => Q(p));
  }, J = (p) => q(_t(se(p)));
  return {
    inputValue: l,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? o.value.enabled ? o.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: X,
    formatInputValue: H,
    emitModelValue: () => (H(), t.monthPicker ? J(h) : t.timePicker ? J(d) : t.yearPicker ? J(Ne) : t.weekPicker ? e("update:model-value", pe()) : q(C(), !0))
  };
}, t1 = (e, t) => {
  const { defaultedFilters: n, propDates: r } = ot(e), { validateMonthYearInRange: a } = qn(e), o = (u, d) => {
    let h = u;
    return n.value.months.includes(Fe(h)) ? (h = d ? zt(u, 1) : Ar(u, 1), o(h, d)) : h;
  }, s = (u, d) => {
    let h = u;
    return n.value.years.includes(Ne(h)) ? (h = d ? Ai(u, 1) : ef(u, 1), s(h, d)) : h;
  }, i = (u, d = !1) => {
    const h = Je(Q(), { month: e.month, year: e.year });
    let v = u ? zt(h, 1) : Ar(h, 1);
    e.disableYearSelect && (v = un(v, e.year));
    let y = Fe(v), _ = Ne(v);
    n.value.months.includes(y) && (v = o(v, u), y = Fe(v), _ = Ne(v)), n.value.years.includes(_) && (v = s(v, u), _ = Ne(v)), a(y, _, u, e.preventMinMaxNavigation) && l(y, _, d);
  }, l = (u, d, h) => {
    t("update-month-year", { month: u, year: d, fromNav: h });
  }, c = ne(() => (u) => cf(
    Je(Q(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: i, isDisabled: c, updateMonthYear: l };
};
var br = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(br || {}), Ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ut || {}), Zn = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Zn || {}), cr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(cr || {}), rn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(rn || {});
const n1 = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: a,
  emit: o,
  props: s,
  slots: i
}) => {
  const l = oe({}), c = oe(!1), u = oe({
    top: "0",
    left: "0"
  }), d = oe(!1), h = Ga(s, "teleportCenter");
  bt(h, () => {
    u.value = JSON.parse(JSON.stringify({})), b();
  });
  const v = (x) => {
    if (s.teleport) {
      const M = x.getBoundingClientRect();
      return {
        left: M.left + window.scrollX,
        top: M.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, y = (x, M) => {
    u.value.left = `${x + M - l.value.width}px`;
  }, _ = (x) => {
    u.value.left = `${x}px`;
  }, A = (x, M) => {
    s.position === br.left && _(x), s.position === br.right && y(x, M), s.position === br.center && (u.value.left = `${x + M / 2 - l.value.width / 2}px`);
  }, Y = (x) => {
    const { width: M, height: q } = x.getBoundingClientRect(), { top: se, left: pe } = s.altPosition ? s.altPosition(x) : v(x);
    return { top: +se, left: +pe, width: M, height: q };
  }, j = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, g = () => {
    const x = gt(n), { top: M, left: q, transform: se } = s.altPosition(x);
    u.value = { top: `${M}px`, left: `${q}px`, transform: se ?? "" };
  }, b = (x = !0) => {
    var M;
    if (!a.value.enabled) {
      if (h.value)
        return j();
      if (s.altPosition !== null)
        return g();
      if (x) {
        const q = s.teleport ? (M = t.value) == null ? void 0 : M.$el : e.value;
        q && (l.value = q.getBoundingClientRect()), o("recalculate-position");
      }
      return B();
    }
  }, S = ({ inputEl: x, left: M, width: q }) => {
    window.screen.width > 768 && !c.value && A(M, q), C(x);
  }, k = (x) => {
    const { top: M, left: q, height: se, width: pe } = Y(x);
    u.value.top = `${se + M + +s.offset}px`, d.value = !1, c.value || (u.value.left = `${q + pe / 2 - l.value.width / 2}px`), S({ inputEl: x, left: q, width: pe });
  }, P = (x) => {
    const { top: M, left: q, width: se } = Y(x);
    u.value.top = `${M - +s.offset - l.value.height}px`, d.value = !0, S({ inputEl: x, left: q, width: se });
  }, C = (x) => {
    if (s.autoPosition) {
      const { left: M, width: q } = Y(x), { left: se, right: pe } = l.value;
      if (!c.value) {
        if (Math.abs(se) !== Math.abs(pe)) {
          if (se <= 0)
            return c.value = !0, _(M);
          if (pe >= document.documentElement.clientWidth)
            return c.value = !0, y(M, q);
        }
        return A(M, q);
      }
    }
  }, F = () => {
    const x = gt(n);
    if (x) {
      const { height: M } = l.value, { top: q, height: se } = x.getBoundingClientRect(), pe = window.innerHeight - q - se, J = q;
      return M <= pe ? Zn.bottom : M > pe && M <= J ? Zn.top : pe >= J ? Zn.bottom : Zn.top;
    }
    return Zn.bottom;
  }, X = (x) => F() === Zn.bottom ? k(x) : P(x), B = () => {
    const x = gt(n);
    if (x)
      return s.autoPosition ? X(x) : k(x);
  }, R = function(x) {
    if (x) {
      const M = x.scrollHeight > x.clientHeight, q = window.getComputedStyle(x).overflowY.indexOf("hidden") !== -1;
      return M && !q;
    }
    return !0;
  }, U = function(x) {
    return !x || x === document.body || x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : R(x) ? x : U(x.parentNode);
  }, H = (x) => {
    if (x)
      switch (s.position) {
        case br.left:
          return { left: 0, transform: "translateX(0)" };
        case br.right:
          return { left: `${x.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${x.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: d,
    menuStyle: u,
    xCorrect: c,
    setMenuPosition: b,
    getScrollableParent: U,
    shadowRender: (x, M) => {
      var q, se, pe;
      const J = document.createElement("div"), p = (q = gt(n)) == null ? void 0 : q.getBoundingClientRect();
      J.setAttribute("id", "dp--temp-container");
      const f = (se = r.value) != null && se.clientWidth ? r.value : document.body;
      f.append(J);
      const O = H(p), z = Vc(
        x,
        {
          ...M,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...O }
        },
        Object.fromEntries(
          Object.keys(i).filter((ce) => ["right-sidebar", "left-sidebar"].includes(ce)).map((ce) => [ce, i[ce]])
        )
      );
      Fl(z, J), l.value = (pe = z.el) == null ? void 0 : pe.getBoundingClientRect(), Fl(null, J), f.removeChild(J);
    }
  };
}, kn = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], r1 = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], a1 = {
  all: () => kn,
  monthYear: () => kn.filter((e) => e.use.includes("month-year")),
  input: () => r1,
  timePicker: () => kn.filter((e) => e.use.includes("time")),
  action: () => kn.filter((e) => e.use.includes("action")),
  calendar: () => kn.filter((e) => e.use.includes("calendar")),
  menu: () => kn.filter((e) => e.use.includes("menu")),
  shared: () => kn.filter((e) => e.use.includes("shared")),
  yearMode: () => kn.filter((e) => e.use.includes("year-mode"))
}, Vt = (e, t, n) => {
  const r = [];
  return a1[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Ma = (e) => {
  const t = ne(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = ne(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ka = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = ot(e), a = Q(Bn(Q(), r.value.timezone)), o = oe([{ month: Fe(a), year: Ne(a) }]), s = gn({
    hours: n.value.enabled ? [Kt(a), Kt(a)] : Kt(a),
    minutes: n.value.enabled ? [dn(a), dn(a)] : dn(a),
    seconds: n.value.enabled ? [0, 0] : 0
  }), i = ne({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", u);
    }
  }), l = ne(
    () => (u) => o.value[u] ? o.value[u].month : 0
  ), c = ne(
    () => (u) => o.value[u] ? o.value[u].year : 0
  );
  return {
    calendars: o,
    time: s,
    modelValue: i,
    month: l,
    year: c
  };
}, o1 = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: a, propDates: o, defaultedRange: s } = ot(t), { isDisabled: i } = qn(t), l = oe(null), c = oe(Bn(/* @__PURE__ */ new Date(), a.value.timezone)), u = (f) => {
    !f.current && t.hideOffsetDates || (l.value = f.value);
  }, d = () => {
    l.value = null;
  }, h = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && l.value ? f ? ct(l.value, e.value[0]) : it(l.value, e.value[0]) : !0, v = (f, O) => {
    const z = () => e.value ? O ? e.value[0] || null : e.value[1] : null, ce = e.value && Array.isArray(e.value) ? z() : null;
    return Be(Q(f.value), ce);
  }, y = (f) => {
    const O = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !it(l.value ?? null, O) : !0;
  }, _ = (f, O = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Be(Q(f.value), e.value[O ? 0 : 1]) : s.value.enabled ? v(f, O) && y(O) || Be(f.value, Array.isArray(e.value) ? e.value[0] : null) && h(O) : !1, A = (f, O, z) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : z ? ct(e.value[0], O.value) : it(e.value[0], O.value) : !1, Y = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Be(f.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((O) => Be(O, f.value)) : Be(f.value, e.value ? e.value : c.value), j = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const O = Wt(l.value, +s.value.autoRange), z = mn(Q(l.value), t.weekStart);
        return t.weekPicker ? Be(z[1], Q(f.value)) : Be(O, Q(f.value));
      }
      return !1;
    }
    return !1;
  }, g = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        const O = Wt(l.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const z = mn(Q(l.value), t.weekStart);
        return t.weekPicker ? ct(f.value, z[0]) && it(f.value, z[1]) : ct(f.value, l.value) && it(f.value, O);
      }
      return !1;
    }
    return !1;
  }, b = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const O = mn(Q(l.value), t.weekStart);
        return t.weekPicker ? Be(O[0], f.value) : Be(l.value, f.value);
      }
      return !1;
    }
    return !1;
  }, S = (f) => Fo(e.value, l.value, f.value), k = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, P = () => t.modelAuto ? rf(t.internalModelValue) : !0, C = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const O = s.value.enabled ? !_(f) && !_(f, !1) : !0;
    return !i(f.value) && !Y(f) && !(!f.current && t.hideOffsetDates) && O;
  }, F = (f) => s.value.enabled ? t.modelAuto ? k() && Y(f) : !1 : Y(f), X = (f) => r.value ? A_(f.value, o.value.highlight) : !1, B = (f) => {
    const O = i(f.value);
    return O && (typeof r.value == "function" ? !r.value(f.value, O) : !r.value.options.highlightDisabled);
  }, R = (f) => {
    var O;
    return typeof r.value == "function" ? r.value(f.value) : (O = r.value.weekdays) == null ? void 0 : O.includes(f.value.getDay());
  }, U = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && P() && !(!f.current && t.hideOffsetDates) && !Y(f) ? S(f) : !1, H = (f) => {
    const { isRangeStart: O, isRangeEnd: z } = se(f), ce = s.value.enabled ? O || z : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !i(f.value),
      dp__cell_disabled: i(f.value),
      dp__cell_highlight: !B(f) && (X(f) || R(f)) && !F(f) && !ce && !b(f) && !(U(f) && t.weekPicker) && !z,
      dp__cell_highlight_active: !B(f) && (X(f) || R(f)) && F(f),
      dp__today: !t.noToday && Be(f.value, c.value) && f.current,
      "dp--past": it(f.value, c.value),
      "dp--future": ct(f.value, c.value)
    };
  }, x = (f) => ({
    dp__active_date: F(f),
    dp__date_hover: C(f)
  }), M = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const O = mn(e.value, t.weekStart);
      return {
        ...J(f),
        dp__range_start: Be(O[0], f.value),
        dp__range_end: Be(O[1], f.value),
        dp__range_between_week: ct(f.value, O[0]) && it(f.value, O[1])
      };
    }
    return {
      ...J(f)
    };
  }, q = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const O = mn(e.value[0], t.weekStart), z = e.value[1] ? mn(e.value[1], t.weekStart) : [];
      return {
        ...J(f),
        dp__range_start: Be(O[0], f.value) || Be(z[0], f.value),
        dp__range_end: Be(O[1], f.value) || Be(z[1], f.value),
        dp__range_between_week: ct(f.value, O[0]) && it(f.value, O[1]) || ct(f.value, z[0]) && it(f.value, z[1]),
        dp__range_between: ct(f.value, O[1]) && it(f.value, z[0])
      };
    }
    return {
      ...J(f)
    };
  }, se = (f) => {
    const O = n.value.count > 0 ? f.current && _(f) && P() : _(f) && P(), z = n.value.count > 0 ? f.current && _(f, !1) && P() : _(f, !1) && P();
    return { isRangeStart: O, isRangeEnd: z };
  }, pe = (f) => {
    const { isRangeStart: O, isRangeEnd: z } = se(f);
    return {
      dp__range_start: O,
      dp__range_end: z,
      dp__range_between: U(f),
      dp__date_hover_start: A(C(f), f, !0),
      dp__date_hover_end: A(C(f), f, !1)
    };
  }, J = (f) => ({
    ...pe(f),
    dp__cell_auto_range: g(f),
    dp__cell_auto_range_start: b(f),
    dp__cell_auto_range_end: j(f)
  }), p = (f) => s.value.enabled ? s.value.autoRange ? J(f) : t.modelAuto ? { ...x(f), ...pe(f) } : t.weekPicker ? q(f) : pe(f) : t.weekPicker ? M(f) : x(f);
  return {
    setHoverDate: u,
    clearHoverDate: d,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...H(f),
      ...p(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, qn = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = ot(e), a = (B) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Q(B)) : !!uo(B, r.value.disabledDates) : !1, o = (B) => {
    const R = r.value.maxDate ? ct(B, r.value.maxDate) : !1, U = r.value.minDate ? it(B, r.value.minDate) : !1, H = a(B), x = t.value.months.map((J) => +J).includes(Fe(B)), M = e.disabledWeekDays.length ? e.disabledWeekDays.some((J) => +J === xb(B)) : !1, q = u(B), se = Ne(B), pe = se < +e.yearRange[0] || se > +e.yearRange[1];
    return !(R || U || H || x || pe || M || q);
  }, s = (B, R) => it(...Cn(r.value.minDate, B, R)) || Be(...Cn(r.value.minDate, B, R)), i = (B, R) => ct(...Cn(r.value.maxDate, B, R)) || Be(...Cn(r.value.maxDate, B, R)), l = (B, R, U) => {
    let H = !1;
    return r.value.maxDate && U && i(B, R) && (H = !0), r.value.minDate && !U && s(B, R) && (H = !0), H;
  }, c = (B, R, U, H) => {
    let x = !1;
    return H ? r.value.minDate && r.value.maxDate ? x = l(B, R, U) : (r.value.minDate && s(B, R) || r.value.maxDate && i(B, R)) && (x = !0) : x = !0, x;
  }, u = (B) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !uo(B, r.value.allowedDates) : !1, d = (B) => !o(B), h = (B) => n.value.noDisabledRange ? !Hd({ start: B[0], end: B[1] }).some((R) => d(R)) : !0, v = (B) => {
    if (B) {
      const R = Ne(B);
      return R >= +e.yearRange[0] && R <= e.yearRange[1];
    }
    return !0;
  }, y = (B, R) => !!(Array.isArray(B) && B[R] && (n.value.maxRange || n.value.minRange) && v(B[R])), _ = (B, R, U = 0) => {
    if (y(R, U) && v(B)) {
      const H = Fd(B, R[U]), x = lf(R[U], B), M = x.length === 1 ? 0 : x.filter((se) => d(se)).length, q = Math.abs(H) - (n.value.minMaxRawRange ? 0 : M);
      if (n.value.minRange && n.value.maxRange)
        return q >= +n.value.minRange && q <= +n.value.maxRange;
      if (n.value.minRange)
        return q >= +n.value.minRange;
      if (n.value.maxRange)
        return q <= +n.value.maxRange;
    }
    return !0;
  }, A = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, Y = (B) => Array.isArray(B) ? [B[0] ? hs(B[0]) : null, B[1] ? hs(B[1]) : null] : hs(B), j = (B, R, U) => B.find(
    (H) => +H.hours === Kt(R) && H.minutes === "*" ? !0 : +H.minutes === dn(R) && +H.hours === Kt(R)
  ) && U, g = (B, R, U) => {
    const [H, x] = B, [M, q] = R;
    return !j(H, M, U) && !j(x, q, U) && U;
  }, b = (B, R) => {
    const U = Array.isArray(R) ? R : [R];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? g(e.disabledTimes, U, B) : !U.some((H) => j(e.disabledTimes, H, B)) : B;
  }, S = (B, R) => {
    const U = Array.isArray(R) ? [ur(R[0]), R[1] ? ur(R[1]) : void 0] : ur(R), H = !e.disabledTimes(U);
    return B && H;
  }, k = (B, R) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? b(R, B) : S(R, B) : R, P = (B) => {
    let R = !0;
    if (!B || A())
      return !0;
    const U = !r.value.minDate && !r.value.maxDate ? Y(B) : B;
    return (e.maxTime || r.value.maxDate) && (R = ku(
      e.maxTime,
      r.value.maxDate,
      "max",
      _t(U),
      R
    )), (e.minTime || r.value.minDate) && (R = ku(
      e.minTime,
      r.value.minDate,
      "min",
      _t(U),
      R
    )), k(B, R);
  }, C = (B) => {
    if (!e.monthPicker)
      return !0;
    let R = !0;
    const U = Q(qt(B));
    if (r.value.minDate && r.value.maxDate) {
      const H = Q(qt(r.value.minDate)), x = Q(qt(r.value.maxDate));
      return ct(U, H) && it(U, x) || Be(U, H) || Be(U, x);
    }
    if (r.value.minDate) {
      const H = Q(qt(r.value.minDate));
      R = ct(U, H) || Be(U, H);
    }
    if (r.value.maxDate) {
      const H = Q(qt(r.value.maxDate));
      R = it(U, H) || Be(U, H);
    }
    return R;
  }, F = ne(() => (B) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : P(B)), X = ne(() => (B) => e.monthPicker ? Array.isArray(B) && (n.value.enabled || e.multiDates) ? !B.filter((R) => !C(R)).length : C(B) : !0);
  return {
    isDisabled: d,
    validateDate: o,
    validateMonthYearInRange: c,
    isDateRangeAllowed: h,
    checkMinMaxRange: _,
    isValidTime: P,
    isTimeValid: F,
    isMonthValid: X
  };
}, Bo = () => {
  const e = ne(() => (r, a) => r == null ? void 0 : r.includes(a)), t = ne(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = ne(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, s1 = (e, t, n) => {
  const r = oe(0), a = gn({
    [cr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [cr.calendar]: !1,
    [cr.header]: !1
  }), o = ne(() => e.monthPicker), s = (d) => {
    var h;
    if ((h = e.flow) != null && h.length) {
      if (!d && o.value)
        return u();
      a[d] = !0, Object.keys(a).filter((v) => !a[v]).length || u();
    }
  }, i = () => {
    var d;
    (d = e.flow) != null && d.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u());
  }, l = () => {
    r.value = -1;
  }, c = (d, h, ...v) => {
    var y, _;
    e.flow[r.value] === d && n.value && ((_ = (y = n.value)[h]) == null || _.call(y, ...v));
  }, u = () => {
    c(rn.month, "toggleMonthPicker", !0), c(rn.year, "toggleYearPicker", !0), c(rn.calendar, "toggleTimePicker", !1, !0), c(rn.time, "toggleTimePicker", !0, !0);
    const d = e.flow[r.value];
    (d === rn.hours || d === rn.minutes || d === rn.seconds) && c(d, "toggleTimePicker", !0, !0, d);
  };
  return { childMount: s, updateFlowStep: i, resetFlow: l, flowStep: r };
}, Ho = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, en = {
  ...Ho,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, i1 = {
  key: 1,
  class: "dp__input_wrap"
}, l1 = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], u1 = {
  key: 2,
  class: "dp__clear_icon"
}, c1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Ho
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTextInput: o,
      defaultedAriaLabels: s,
      defaultedInline: i,
      defaultedConfig: l,
      defaultedRange: c,
      getDefaultPattern: u,
      getDefaultStartTime: d
    } = ot(a), { checkMinMaxRange: h } = qn(a), v = oe(), y = oe(null), _ = oe(!1), A = oe(!1), Y = ne(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !o.value.enabled,
        dp__disabled: a.disabled,
        dp__input_readonly: !o.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: !!a.state,
        dp__input_invalid: a.state === !1,
        dp__input_focus: _.value || a.isMenuOpen,
        dp__input_reg: !o.value.enabled,
        [a.inputClassName]: !!a.inputClassName
      })
    ), j = () => {
      r("set-input-date", null), a.autoApply && (r("set-empty-date"), v.value = null);
    }, g = (x) => {
      const M = d();
      return P_(
        x,
        o.value.format ?? u(),
        M ?? uf({}, a.enableSeconds),
        a.inputValue,
        A.value
      );
    }, b = (x) => {
      const { rangeSeparator: M } = o.value, [q, se] = x.split(`${M}`);
      if (q) {
        const pe = g(q.trim()), J = se ? g(se.trim()) : null, p = pe && J ? [pe, J] : [pe];
        h(J, p, 0) && (v.value = pe ? p : null);
      }
    }, S = () => {
      A.value = !0;
    }, k = (x) => {
      if (c.value.enabled)
        b(x);
      else if (a.multiDates) {
        const M = x.split(";");
        v.value = M.map((q) => g(q.trim())).filter((q) => q);
      } else
        v.value = g(x);
    }, P = (x) => {
      var M;
      const q = typeof x == "string" ? x : (M = x.target) == null ? void 0 : M.value;
      q !== "" ? (o.value.openMenu && !a.isMenuOpen && r("open"), k(q), r("set-input-date", v.value)) : j(), A.value = !1, r("update:input-value", q);
    }, C = (x) => {
      o.value.enabled ? (k(x.target.value), o.value.enterSubmit && zs(v.value) && a.inputValue !== "" ? (r("set-input-date", v.value, !0), v.value = null) : o.value.enterSubmit && a.inputValue === "" && (v.value = null, r("clear"))) : B(x);
    }, F = (x) => {
      o.value.enabled && o.value.tabSubmit && k(x.target.value), o.value.tabSubmit && zs(v.value) && a.inputValue !== "" ? (r("set-input-date", v.value, !0, !0), v.value = null) : o.value.tabSubmit && a.inputValue === "" && (v.value = null, r("clear", !0));
    }, X = () => {
      var x;
      _.value = !0, r("focus"), o.value.enabled && o.value.selectOnFocus && ((x = y.value) == null || x.select());
    }, B = (x) => {
      x.preventDefault(), In(x, l.value, !0), o.value.enabled && o.value.openMenu && !i.value.input && !a.isMenuOpen ? r("open") : o.value.enabled || r("toggle");
    }, R = () => {
      r("real-blur"), _.value = !1, (!a.isMenuOpen || i.value.enabled && i.value.input) && r("blur"), a.autoApply && o.value.enabled && v.value && !a.isMenuOpen && (r("set-input-date", v.value), r("select-date"), v.value = null);
    }, U = (x) => {
      In(x, l.value, !0), r("clear");
    }, H = (x) => {
      if (!o.value.enabled) {
        if (x.code === "Tab")
          return;
        x.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var x;
        (x = y.value) == null || x.focus({ preventScroll: !0 });
      },
      setParsedDate: (x) => {
        v.value = x;
      }
    }), (x, M) => {
      var q;
      return V(), K("div", { onClick: B }, [
        x.$slots.trigger && !x.$slots["dp-input"] && !T(i).enabled ? ge(x.$slots, "trigger", { key: 0 }) : te("", !0),
        !x.$slots.trigger && (!T(i).enabled || T(i).input) ? (V(), K("div", i1, [
          x.$slots["dp-input"] && !x.$slots.trigger && (!T(i).enabled || T(i).enabled && T(i).input) ? ge(x.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: P,
            onEnter: C,
            onTab: F,
            onClear: U,
            onBlur: R,
            onKeypress: H,
            onPaste: S,
            openMenu: () => x.$emit("open"),
            closeMenu: () => x.$emit("close"),
            toggleMenu: () => x.$emit("toggle")
          }) : te("", !0),
          x.$slots["dp-input"] ? te("", !0) : (V(), K("input", {
            key: 1,
            id: x.uid ? `dp-input-${x.uid}` : void 0,
            ref_key: "inputRef",
            ref: y,
            name: x.name,
            class: Ve(Y.value),
            inputmode: T(o).enabled ? "text" : "none",
            placeholder: x.placeholder,
            disabled: x.disabled,
            readonly: x.readonly,
            required: x.required,
            value: e.inputValue,
            autocomplete: x.autocomplete,
            "aria-label": (q = T(s)) == null ? void 0 : q.input,
            "aria-disabled": x.disabled || void 0,
            "aria-invalid": x.state === !1 ? !0 : void 0,
            onInput: P,
            onKeydown: [
              De(C, ["enter"]),
              De(F, ["tab"]),
              H
            ],
            onBlur: R,
            onFocus: X,
            onKeypress: H,
            onPaste: S
          }, null, 42, l1)),
          Te("div", {
            onClick: M[2] || (M[2] = (se) => r("toggle"))
          }, [
            x.$slots["input-icon"] && !x.hideInputIcon ? (V(), K("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: M[0] || (M[0] = (se) => r("toggle"))
            }, [
              ge(x.$slots, "input-icon")
            ])) : te("", !0),
            !x.$slots["input-icon"] && !x.hideInputIcon && !x.$slots["dp-input"] ? (V(), Ae(T(Lr), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: M[1] || (M[1] = (se) => r("toggle"))
            })) : te("", !0)
          ]),
          x.$slots["clear-icon"] && e.inputValue && x.clearable && !x.disabled && !x.readonly ? (V(), K("span", u1, [
            ge(x.$slots, "clear-icon", { clear: U })
          ])) : te("", !0),
          x.clearable && !x.$slots["clear-icon"] && e.inputValue && !x.disabled && !x.readonly ? (V(), Ae(T(tf), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: M[3] || (M[3] = Ge((se) => U(se), ["prevent"]))
          })) : te("", !0)
        ])) : te("", !0)
      ]);
    };
  }
}), d1 = ["title"], f1 = ["disabled"], p1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...en
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const n = t, r = e, {
      defaultedActionRow: a,
      defaultedPreviewFormat: o,
      defaultedMultiCalendars: s,
      defaultedTextInput: i,
      defaultedInline: l,
      defaultedRange: c,
      getDefaultPattern: u
    } = ot(r), { isTimeValid: d, isMonthValid: h } = qn(r), { buildMatrix: v } = Wn(), y = oe(null), _ = oe(null), A = oe(!1), Y = oe({}), j = oe(null), g = oe(null);
    Tt(() => {
      r.arrowNavigation && v([gt(y), gt(_)], "actionRow"), b(), window.addEventListener("resize", b);
    }), Rr(() => {
      window.removeEventListener("resize", b);
    });
    const b = () => {
      A.value = !1, setTimeout(() => {
        var H, x;
        const M = (H = j.value) == null ? void 0 : H.getBoundingClientRect(), q = (x = g.value) == null ? void 0 : x.getBoundingClientRect();
        M && q && (Y.value.maxWidth = `${q.width - M.width - 20}px`), A.value = !0;
      }, 0);
    }, S = ne(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), k = ne(
      () => !d.value(r.internalModelValue) || !h.value(r.internalModelValue) || !S.value
    ), P = () => {
      const H = o.value;
      return r.timePicker || r.monthPicker, H(_t(r.internalModelValue));
    }, C = () => {
      const H = r.internalModelValue;
      return s.value.count > 0 ? `${F(H[0])} - ${F(H[1])}` : [F(H[0]), F(H[1])];
    }, F = (H) => df(
      H,
      o.value,
      r.formatLocale,
      i.value.rangeSeparator,
      r.modelAuto,
      u()
    ), X = ne(() => !r.internalModelValue || !r.menuMount ? "" : typeof o.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? C() : r.multiDates ? r.internalModelValue.map((H) => `${F(H)}`) : r.modelAuto ? `${F(r.internalModelValue[0])}` : `${F(r.internalModelValue[0])} -` : F(r.internalModelValue) : P()), B = () => r.multiDates ? "; " : " - ", R = ne(
      () => Array.isArray(X.value) ? X.value.join(B()) : X.value
    ), U = () => {
      d.value(r.internalModelValue) && h.value(r.internalModelValue) && S.value ? n("select-date") : n("invalid-select");
    };
    return (H, x) => (V(), K("div", {
      ref_key: "actionRowRef",
      ref: g,
      class: "dp__action_row"
    }, [
      H.$slots["action-row"] ? ge(H.$slots, "action-row", mt(wt({ key: 0 }, {
        internalModelValue: H.internalModelValue,
        disabled: k.value,
        selectDate: () => H.$emit("select-date"),
        closePicker: () => H.$emit("close-picker")
      }))) : (V(), K(xe, { key: 1 }, [
        T(a).showPreview ? (V(), K("div", {
          key: 0,
          class: "dp__selection_preview",
          title: R.value,
          style: Ot(Y.value)
        }, [
          H.$slots["action-preview"] && A.value ? ge(H.$slots, "action-preview", {
            key: 0,
            value: H.internalModelValue
          }) : te("", !0),
          !H.$slots["action-preview"] && A.value ? (V(), K(xe, { key: 1 }, [
            Jt(lt(R.value), 1)
          ], 64)) : te("", !0)
        ], 12, d1)) : te("", !0),
        Te("div", {
          ref_key: "actionBtnContainer",
          ref: j,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          H.$slots["action-buttons"] ? ge(H.$slots, "action-buttons", {
            key: 0,
            value: H.internalModelValue
          }) : te("", !0),
          H.$slots["action-buttons"] ? te("", !0) : (V(), K(xe, { key: 1 }, [
            !T(l).enabled && T(a).showCancel ? (V(), K("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: y,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: x[0] || (x[0] = (M) => H.$emit("close-picker")),
              onKeydown: [
                x[1] || (x[1] = De((M) => H.$emit("close-picker"), ["enter"])),
                x[2] || (x[2] = De((M) => H.$emit("close-picker"), ["space"]))
              ]
            }, lt(H.cancelText), 545)) : te("", !0),
            T(a).showNow ? (V(), K("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: x[3] || (x[3] = (M) => H.$emit("select-now")),
              onKeydown: [
                x[4] || (x[4] = De((M) => H.$emit("select-now"), ["enter"])),
                x[5] || (x[5] = De((M) => H.$emit("select-now"), ["space"]))
              ]
            }, lt(H.nowButtonLabel), 33)) : te("", !0),
            T(a).showSelect ? (V(), K("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: _,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: k.value,
              onKeydown: [
                De(U, ["enter"]),
                De(U, ["space"])
              ],
              onClick: U
            }, lt(H.selectText), 41, f1)) : te("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), m1 = ["onKeydown"], h1 = { class: "dp__selection_grid_header" }, v1 = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], y1 = ["aria-label"], Ea = /* @__PURE__ */ St({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: n }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: o } = Wn(), s = n, i = e, { defaultedAriaLabels: l, defaultedTextInput: c, defaultedConfig: u } = ot(
      i
    ), { hideNavigationButtons: d } = Bo(), h = oe(!1), v = oe(null), y = oe(null), _ = oe([]), A = oe(), Y = oe(null), j = oe(0), g = oe(null);
    gc(() => {
      v.value = null;
    }), Tt(() => {
      Qt().then(() => B()), i.noOverlayFocus || S(), b(!0);
    }), Rr(() => b(!1));
    const b = (J) => {
      var p;
      i.arrowNavigation && ((p = i.headerRefs) != null && p.length ? o(J) : r(J));
    }, S = () => {
      var J;
      const p = gt(y);
      p && (c.value.enabled || (v.value ? (J = v.value) == null || J.focus({ preventScroll: !0 }) : p.focus({ preventScroll: !0 })), h.value = p.clientHeight < p.scrollHeight);
    }, k = ne(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !i.useRelative,
        "dp--overlay-relative": i.useRelative
      })
    ), P = ne(
      () => i.useRelative ? { height: `${i.height}px`, width: "260px" } : void 0
    ), C = ne(() => ({
      dp__overlay_col: !0
    })), F = ne(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: h.value,
        dp__button_bottom: i.isLast
      })
    ), X = ne(() => {
      var J, p;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((J = i.items) == null ? void 0 : J.length) <= 6,
        dp__container_block: ((p = i.items) == null ? void 0 : p.length) > 6
      };
    });
    bt(
      () => i.items,
      () => B(!1),
      { deep: !0 }
    );
    const B = (J = !0) => {
      Qt().then(() => {
        const p = gt(v), f = gt(y), O = gt(Y), z = gt(g), ce = O ? O.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? j.value = f.getBoundingClientRect().height - ce : j.value = u.value.modeHeight - ce), p && z && J && (z.scrollTop = p.offsetTop - z.offsetTop - (j.value / 2 - p.getBoundingClientRect().height) - ce);
      });
    }, R = (J) => {
      J.disabled || s("selected", J.value);
    }, U = () => {
      s("toggle"), s("reset-flow");
    }, H = () => {
      i.escClose && U();
    }, x = (J, p, f, O) => {
      J && ((p.active || p.value === i.focusValue) && (v.value = J), i.arrowNavigation && (Array.isArray(_.value[f]) ? _.value[f][O] = J : _.value[f] = [J], M()));
    }, M = () => {
      var J, p;
      const f = (J = i.headerRefs) != null && J.length ? [i.headerRefs].concat(_.value) : _.value.concat([i.skipButtonRef ? [] : [Y.value]]);
      a(_t(f), (p = i.headerRefs) != null && p.length ? "monthPicker" : "selectionGrid");
    }, q = (J) => {
      i.arrowNavigation || In(J, u.value, !0);
    }, se = (J) => {
      A.value = J, s("hover-value", J);
    }, pe = () => {
      if (U(), !i.isLast) {
        const J = O_(i.menuWrapRef ?? null, "action-row");
        if (J) {
          const p = af(J);
          p == null || p.focus();
        }
      }
    };
    return t({ focusGrid: S }), (J, p) => {
      var f;
      return V(), K("div", {
        ref_key: "gridWrapRef",
        ref: y,
        class: Ve(k.value),
        style: Ot(P.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          De(Ge(H, ["prevent"]), ["esc"]),
          p[0] || (p[0] = De(Ge((O) => q(O), ["prevent"]), ["left"])),
          p[1] || (p[1] = De(Ge((O) => q(O), ["prevent"]), ["up"])),
          p[2] || (p[2] = De(Ge((O) => q(O), ["prevent"]), ["down"])),
          p[3] || (p[3] = De(Ge((O) => q(O), ["prevent"]), ["right"]))
        ]
      }, [
        Te("div", {
          ref_key: "containerRef",
          ref: g,
          class: Ve(X.value),
          role: "grid",
          style: Ot({ height: `${j.value}px` })
        }, [
          Te("div", h1, [
            ge(J.$slots, "header")
          ]),
          J.$slots.overlay ? ge(J.$slots, "overlay", { key: 0 }) : (V(!0), K(xe, { key: 1 }, Xe(J.items, (O, z) => (V(), K("div", {
            key: z,
            class: Ve(["dp__overlay_row", { dp__flex_row: J.items.length >= 3 }]),
            role: "row"
          }, [
            (V(!0), K(xe, null, Xe(O, (ce, $) => (V(), K("div", {
              key: ce.value,
              ref_for: !0,
              ref: (Pe) => x(Pe, ce, z, $),
              role: "gridcell",
              class: Ve(C.value),
              "aria-selected": ce.active || void 0,
              "aria-disabled": ce.disabled || void 0,
              tabindex: "0",
              onClick: (Pe) => R(ce),
              onKeydown: [
                De(Ge((Pe) => R(ce), ["prevent"]), ["enter"]),
                De(Ge((Pe) => R(ce), ["prevent"]), ["space"])
              ],
              onMouseover: (Pe) => se(ce.value)
            }, [
              Te("div", {
                class: Ve(ce.className)
              }, [
                J.$slots.item ? ge(J.$slots, "item", {
                  key: 0,
                  item: ce
                }) : te("", !0),
                J.$slots.item ? te("", !0) : (V(), K(xe, { key: 1 }, [
                  Jt(lt(ce.text), 1)
                ], 64))
              ], 2)
            ], 42, v1))), 128))
          ], 2))), 128))
        ], 6),
        J.$slots["button-icon"] ? $n((V(), K("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: Y,
          type: "button",
          "aria-label": (f = T(l)) == null ? void 0 : f.toggleOverlay,
          class: Ve(F.value),
          tabindex: "0",
          onClick: U,
          onKeydown: [
            De(U, ["enter"]),
            De(pe, ["tab"])
          ]
        }, [
          ge(J.$slots, "button-icon")
        ], 42, y1)), [
          [Ba, !T(d)(J.hideNavigation, J.type)]
        ]) : te("", !0)
      ], 46, m1);
    };
  }
}), Yo = /* @__PURE__ */ St({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = ne(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = ne(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, o) => (V(), K("div", {
      class: Ve({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (V(!0), K(xe, null, Xe(n.value, (s, i) => (V(), K("div", {
        key: s,
        class: Ve(r.value)
      }, [
        ge(a.$slots, "default", {
          instance: s,
          index: i
        })
      ], 2))), 128))
    ], 2));
  }
}), g1 = ["aria-label", "aria-disabled"], sa = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = t, r = oe(null);
    return Tt(() => n("set-ref", r)), (a, o) => (V(), K("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": a.ariaLabel,
      "aria-disabled": a.disabled || void 0,
      onClick: o[0] || (o[0] = (s) => a.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = De(Ge((s) => a.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = De(Ge((s) => a.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      Te("span", {
        class: Ve(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        ge(a.$slots, "default")
      ], 2)
    ], 40, g1));
  }
}), b1 = { class: "dp--year-mode-picker" }, _1 = ["aria-label"], hf = /* @__PURE__ */ St({
  __name: "YearModePicker",
  props: {
    ...en,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const n = t, r = e, { showRightIcon: a, showLeftIcon: o } = Bo(), { defaultedConfig: s, defaultedMultiCalendars: i, defaultedAriaLabels: l, defaultedTransitions: c } = ot(r), { showTransition: u, transitionName: d } = Ma(c), h = (_ = !1, A) => {
      n("toggle-year-picker", { flow: _, show: A });
    }, v = (_) => {
      n("year-select", _);
    }, y = (_ = !1) => {
      n("handle-year", _);
    };
    return (_, A) => {
      var Y, j, g;
      return V(), K("div", b1, [
        T(o)(T(i), e.instance) ? (V(), Ae(sa, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (Y = T(l)) == null ? void 0 : Y.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: A[0] || (A[0] = (b) => y(!1))
        }, {
          default: $e(() => [
            _.$slots["arrow-left"] ? ge(_.$slots, "arrow-left", { key: 0 }) : te("", !0),
            _.$slots["arrow-left"] ? te("", !0) : (V(), Ae(T(Li), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : te("", !0),
        Te("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (j = T(l)) == null ? void 0 : j.openYearsOverlay,
          onClick: A[1] || (A[1] = () => h(!1)),
          onKeydown: A[2] || (A[2] = De(() => h(!1), ["enter"]))
        }, [
          _.$slots.year ? ge(_.$slots, "year", {
            key: 0,
            year: e.year
          }) : te("", !0),
          _.$slots.year ? te("", !0) : (V(), K(xe, { key: 1 }, [
            Jt(lt(e.year), 1)
          ], 64))
        ], 40, _1),
        T(a)(T(i), e.instance) ? (V(), Ae(sa, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (g = T(l)) == null ? void 0 : g.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: A[3] || (A[3] = (b) => y(!0))
        }, {
          default: $e(() => [
            _.$slots["arrow-right"] ? ge(_.$slots, "arrow-right", { key: 0 }) : te("", !0),
            _.$slots["arrow-right"] ? te("", !0) : (V(), Ae(T(Fi), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : te("", !0),
        ze(Un, {
          name: T(d)(e.showYearPicker),
          css: T(u)
        }, {
          default: $e(() => [
            e.showYearPicker ? (V(), Ae(Ea, {
              key: 0,
              items: e.items,
              "text-input": _.textInput,
              "esc-close": _.escClose,
              config: _.config,
              "is-last": _.autoApply && !T(s).keepActionRow,
              "hide-navigation": _.hideNavigation,
              "aria-labels": _.ariaLabels,
              type: "year",
              onToggle: h,
              onSelected: A[4] || (A[4] = (b) => v(b))
            }, At({
              "button-icon": $e(() => [
                _.$slots["calendar-icon"] ? ge(_.$slots, "calendar-icon", { key: 0 }) : te("", !0),
                _.$slots["calendar-icon"] ? te("", !0) : (V(), Ae(T(Lr), { key: 1 }))
              ]),
              _: 2
            }, [
              _.$slots["year-overlay-value"] ? {
                name: "item",
                fn: $e(({ item: b }) => [
                  ge(_.$slots, "year-overlay-value", {
                    text: b.text,
                    value: b.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : te("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Gi = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Be(e, r))) {
      const r = t.value.filter((a) => !Be(a, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, zi = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? it(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, jo = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, vf = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Bn(Q(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Bn(Q(e.value), e.timezone));
}, yf = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (ct(e, t.value[0]) || Be(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (it(e, t.value[1]) || Be(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], gf = ({
  multiCalendars: e,
  highlight: t,
  propDates: n,
  calendars: r,
  modelValue: a,
  props: o,
  year: s,
  month: i,
  emit: l
}) => {
  const c = ne(() => ji(o.yearRange, o.reverseYears)), u = oe([!1]), d = ne(() => (S, k) => {
    const P = Je(qt(/* @__PURE__ */ new Date()), {
      month: i.value(S),
      year: s.value(S)
    });
    return cf(
      P,
      n.value.maxDate,
      n.value.minDate,
      o.preventMinMaxNavigation,
      k
    );
  }), h = () => {
    for (let S = 0; S < e.value.count; S++)
      if (S === 0)
        r.value[S] = r.value[0];
      else {
        const k = Je(Q(), r.value[S - 1]);
        r.value[S] = { month: Fe(k), year: Ne(Ai(k, 1)) };
      }
  }, v = (S) => {
    if (!S)
      return h();
    const k = Je(Q(), r.value[S]);
    return r.value[0].year = Ne(ef(k, e.value.count - 1)), h();
  }, y = (S) => o.focusStartDate ? S[0] : S[1] ? S[1] : S[0], _ = () => {
    if (a.value) {
      const S = Array.isArray(a.value) ? y(a.value) : a.value;
      r.value[0] = { month: Fe(S), year: Ne(S) };
    }
  };
  Tt(() => {
    _(), e.value.count && h();
  });
  const A = (S, k) => {
    r.value[k].year = S, e.value.count && !e.value.solo && v(k);
  }, Y = ne(() => (S) => Pr(c.value, (k) => {
    const P = s.value(S) === k.value, C = ya(
      k.value,
      Cr(n.value.minDate),
      Cr(n.value.maxDate)
    ), F = qi(t.value, k.value);
    return { active: P, disabled: C, highlighted: F };
  })), j = (S, k) => {
    A(S, k), b(k);
  }, g = (S, k = !1) => {
    if (!d.value(S, k)) {
      const P = k ? s.value(S) + 1 : s.value(S) - 1;
      A(P, S);
    }
  }, b = (S, k = !1, P) => {
    k || l("reset-flow"), P !== void 0 ? u.value[S] = P : u.value[S] = !u.value[S], u.value || l("overlay-closed");
  };
  return {
    isDisabled: d,
    groupedYears: Y,
    showYearPicker: u,
    selectYear: A,
    toggleYearPicker: b,
    handleYearSelect: j,
    handleYear: g
  };
}, w1 = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    defaultedRange: s,
    defaultedHighlight: i,
    propDates: l,
    defaultedTz: c
  } = ot(e), { modelValue: u, year: d, month: h, calendars: v } = ka(e, t), y = ne(() => nf(e.formatLocale, e.locale, e.monthNameFormat)), _ = oe(null), { checkMinMaxRange: A } = qn(e), {
    selectYear: Y,
    groupedYears: j,
    showYearPicker: g,
    toggleYearPicker: b,
    handleYearSelect: S,
    handleYear: k,
    isDisabled: P
  } = gf({
    modelValue: u,
    multiCalendars: n,
    highlight: i,
    calendars: v,
    year: d,
    propDates: l,
    month: h,
    props: e,
    emit: t
  });
  Tt(() => {
    e.startDate && (u.value && e.focusStartDate || !u.value) && Y(Ne(Q(e.startDate)), 0);
  });
  const C = (p) => p ? { month: Fe(p), year: Ne(p) } : { month: null, year: null }, F = () => u.value ? Array.isArray(u.value) ? u.value.map((p) => C(p)) : C(u.value) : C(), X = (p, f) => {
    const O = v.value[p], z = F();
    return Array.isArray(z) ? z.some((ce) => ce.year === (O == null ? void 0 : O.year) && ce.month === f) : (O == null ? void 0 : O.year) === z.year && f === z.month;
  }, B = (p, f, O) => {
    var z, ce;
    const $ = F();
    return Array.isArray($) ? d.value(f) === ((z = $[O]) == null ? void 0 : z.year) && p === ((ce = $[O]) == null ? void 0 : ce.month) : !1;
  }, R = (p, f) => {
    if (s.value.enabled) {
      const O = F();
      if (Array.isArray(u.value) && Array.isArray(O)) {
        const z = B(p, f, 0) || B(p, f, 1), ce = hn(qt(Q()), p, d.value(f));
        return Fo(u.value, _.value, ce) && !z;
      }
      return !1;
    }
    return !1;
  }, U = ne(() => (p) => Pr(y.value, (f) => {
    const O = X(p, f.value), z = ya(
      f.value,
      of(d.value(p), l.value.minDate),
      sf(d.value(p), l.value.maxDate)
    ) || V_(l.value.disabledDates, d.value(p)).includes(f.value), ce = R(f.value, p), $ = ff(i.value, f.value, d.value(p));
    return { active: O, disabled: z, isBetween: ce, highlighted: $ };
  })), H = (p, f) => hn(qt(Q()), p, d.value(f)), x = (p, f) => {
    const O = u.value ? u.value : qt(/* @__PURE__ */ new Date());
    u.value = hn(O, p, d.value(f)), t("auto-apply"), t("update-flow-step");
  }, M = (p, f) => {
    const O = H(p, f);
    s.value.fixedEnd || s.value.fixedStart ? u.value = yf(O, u, t, s) : u.value ? A(O, u.value) && (u.value = zi(u, H(p, f), t)) : u.value = [H(p, f)], jo(u.value, t, e.autoApply, e.modelAuto);
  }, q = (p, f) => {
    Gi(H(p, f), u, e.multiDatesLimit), t("auto-apply", !0);
  }, se = (p, f) => (v.value[f].month = p, J(f, v.value[f].year, p), e.multiDates ? q(p, f) : s.value.enabled ? M(p, f) : x(p, f)), pe = (p, f) => {
    Y(p, f), J(f, p, null);
  }, J = (p, f, O) => {
    let z = O;
    if (!z && z !== 0) {
      const ce = F();
      z = Array.isArray(ce) ? ce[p].month : ce.month;
    }
    t("update-month-year", { instance: p, year: f, month: z });
  };
  return {
    groupedMonths: U,
    groupedYears: j,
    year: d,
    isDisabled: P,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    showYearPicker: g,
    modelValue: u,
    presetDate: (p, f) => {
      vf({
        value: p,
        modelValue: u,
        range: s.value.enabled,
        timezone: f ? void 0 : c.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (p, f) => {
      _.value = H(p, f);
    },
    selectMonth: se,
    selectYear: pe,
    toggleYearPicker: b,
    handleYearSelect: S,
    handleYear: k,
    getModelMonthYear: F
  };
}, x1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...en
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = mr(), o = Vt(a, "yearMode"), s = e;
    Tt(() => {
      s.shadow || r("mount", null);
    });
    const {
      groupedMonths: i,
      groupedYears: l,
      year: c,
      isDisabled: u,
      defaultedMultiCalendars: d,
      defaultedConfig: h,
      showYearPicker: v,
      modelValue: y,
      presetDate: _,
      setHoverDate: A,
      selectMonth: Y,
      selectYear: j,
      toggleYearPicker: g,
      handleYearSelect: b,
      handleYear: S,
      getModelMonthYear: k
    } = w1(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: y,
      year: c,
      getModelMonthYear: k,
      selectMonth: Y,
      selectYear: j,
      handleYear: S
    }), presetDate: _, toggleYearPicker: (P) => g(0, P) }), (P, C) => (V(), Ae(Yo, {
      "multi-calendars": T(d).count,
      collapse: P.collapse,
      stretch: ""
    }, {
      default: $e(({ instance: F }) => [
        P.$slots["month-year"] ? ge(P.$slots, "month-year", mt(wt({ key: 0 }, {
          year: T(c),
          months: T(i)(F),
          years: T(l)(F),
          selectMonth: T(Y),
          selectYear: T(j),
          instance: F
        }))) : (V(), Ae(Ea, {
          key: 1,
          items: T(i)(F),
          "arrow-navigation": P.arrowNavigation,
          "is-last": P.autoApply && !T(h).keepActionRow,
          "esc-close": P.escClose,
          height: T(h).modeHeight,
          config: P.config,
          "no-overlay-focus": !!(P.noOverlayFocus || P.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (X) => T(Y)(X, F),
          onHoverValue: (X) => T(A)(X, F)
        }, {
          header: $e(() => [
            ze(hf, wt(P.$props, {
              items: T(l)(F),
              instance: F,
              "show-year-picker": T(v)[F],
              year: T(c)(F),
              "is-disabled": (X) => T(u)(F, X),
              onHandleYear: (X) => T(S)(F, X),
              onYearSelect: (X) => T(b)(X, F),
              onToggleYearPicker: (X) => T(g)(F, X == null ? void 0 : X.flow, X == null ? void 0 : X.show)
            }), At({ _: 2 }, [
              Xe(T(o), (X, B) => ({
                name: X,
                fn: $e((R) => [
                  ge(P.$slots, X, mt(kt(R)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), S1 = (e, t) => {
  const { modelValue: n } = ka(e, t), r = oe(null), { defaultedHighlight: a, defaultedFilters: o, defaultedRange: s, propDates: i } = ot(e), l = oe();
  Tt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (l.value = Ne(Q(e.startDate)));
  });
  const c = (v) => Array.isArray(n.value) ? n.value.some((y) => Ne(y) === v) : n.value ? Ne(n.value) === v : !1, u = (v) => s.value.enabled && Array.isArray(n.value) ? Fo(n.value, r.value, h(v)) : !1, d = ne(() => Pr(ji(e.yearRange, e.reverseYears), (v) => {
    const y = c(v.value), _ = ya(
      v.value,
      Cr(i.value.minDate),
      Cr(i.value.maxDate)
    ) || o.value.years.includes(v.value), A = u(v.value) && !y, Y = qi(a.value, v.value);
    return { active: y, disabled: _, isBetween: A, highlighted: Y };
  })), h = (v) => un(qt(/* @__PURE__ */ new Date()), v);
  return {
    groupedYears: d,
    modelValue: n,
    focusYear: l,
    setHoverValue: (v) => {
      r.value = un(qt(/* @__PURE__ */ new Date()), v);
    },
    selectYear: (v) => {
      var y;
      if (t("update-month-year", { instance: 0, year: v }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((y = n.value) == null ? void 0 : y.map((_) => Ne(_))).includes(v) ? n.value = n.value.filter((_) => Ne(_) !== v) : n.value.push(un(Ft(Q()), v))) : n.value = [un(Ft(Q()), v)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = zi(n, h(v), t), jo(n.value, t, e.autoApply, e.modelAuto);
      n.value = h(v), t("auto-apply");
    }
  };
}, T1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...en
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { groupedYears: o, modelValue: s, focusYear: i, selectYear: l, setHoverValue: c } = S1(a, r), { defaultedConfig: u } = ot(a);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: l
    }) }), (d, h) => (V(), K("div", null, [
      d.$slots["month-year"] ? ge(d.$slots, "month-year", mt(wt({ key: 0 }, {
        years: T(o),
        selectYear: T(l)
      }))) : (V(), Ae(Ea, {
        key: 1,
        items: T(o),
        "is-last": d.autoApply && !T(u).keepActionRow,
        height: T(u).modeHeight,
        config: d.config,
        "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
        "focus-value": T(i),
        type: "year",
        "use-relative": "",
        onSelected: T(l),
        onHoverValue: T(c)
      }, At({ _: 2 }, [
        d.$slots["year-overlay-value"] ? {
          name: "item",
          fn: $e(({ item: v }) => [
            ge(d.$slots, "year-overlay-value", {
              text: v.text,
              value: v.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), M1 = {
  key: 0,
  class: "dp__time_input"
}, k1 = ["aria-label", "onKeydown", "onClick"], E1 = /* @__PURE__ */ Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), D1 = /* @__PURE__ */ Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), O1 = ["aria-label", "disabled", "onKeydown", "onClick"], A1 = ["aria-label", "onKeydown", "onClick"], P1 = /* @__PURE__ */ Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), C1 = /* @__PURE__ */ Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), R1 = { key: 0 }, N1 = ["aria-label", "onKeydown"], $1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...en
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { setTimePickerElements: o, setTimePickerBackRef: s } = Wn(), { defaultedAriaLabels: i, defaultedTransitions: l, defaultedFilters: c, defaultedConfig: u, defaultedRange: d } = ot(a), { transitionName: h, showTransition: v } = Ma(l), y = gn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), _ = oe("AM"), A = oe(null), Y = oe([]);
    Tt(() => {
      r("mounted");
    });
    const j = (L) => Je(/* @__PURE__ */ new Date(), {
      hours: L.hours,
      minutes: L.minutes,
      seconds: a.enableSeconds ? L.seconds : 0,
      milliseconds: 0
    }), g = ne(
      () => (L) => x(L, a[L]) || S(L, a[L])
    ), b = ne(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), S = (L, ve) => d.value.enabled && !d.value.disableTimeRangeValidation ? !a.validateTime(L, ve) : !1, k = (L, ve) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const Ce = ve ? +a[`${L}Increment`] : -+a[`${L}Increment`], E = a[L] + Ce;
        return !a.validateTime(L, E);
      }
      return !1;
    }, P = ne(() => (L) => !pe(+a[L] + +a[`${L}Increment`], L) || k(L, !0)), C = ne(() => (L) => !pe(+a[L] - +a[`${L}Increment`], L) || k(L, !1)), F = (L, ve) => Id(Je(Q(), L), ve), X = (L, ve) => w_(Je(Q(), L), ve), B = ne(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), R = ne(() => {
      const L = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? L.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : L;
    }), U = ne(() => R.value.filter((L) => !L.separator)), H = ne(() => (L) => {
      if (L === "hours") {
        const ve = z(+a.hours);
        return { text: ve < 10 ? `0${ve}` : `${ve}`, value: ve };
      }
      return { text: a[L] < 10 ? `0${a[L]}` : `${a[L]}`, value: a[L] };
    }), x = (L, ve) => {
      var Ce;
      if (!a.disabledTimesConfig)
        return !1;
      const E = a.disabledTimesConfig(a.order, L === "hours" ? ve : void 0);
      return E[L] ? !!((Ce = E[L]) != null && Ce.includes(ve)) : !0;
    }, M = (L) => {
      const ve = a.is24 ? 24 : 12, Ce = L === "hours" ? ve : 60, E = +a[`${L}GridIncrement`], m = L === "hours" && !a.is24 ? E : 0, w = [];
      for (let N = m; N < Ce; N += E)
        w.push({ value: N, text: N < 10 ? `0${N}` : `${N}` });
      return L === "hours" && !a.is24 && w.push({ value: 0, text: "12" }), Pr(w, (N) => ({ active: !1, disabled: c.value.times[L].includes(N.value) || !pe(N.value, L) || x(L, N.value) || S(L, N.value) }));
    }, q = (L) => L >= 0 ? L : 59, se = (L) => L >= 0 ? L : 23, pe = (L, ve) => {
      const Ce = a.minTime ? j(fs(a.minTime)) : null, E = a.maxTime ? j(fs(a.maxTime)) : null, m = j(
        fs(
          b.value,
          ve,
          ve === "minutes" || ve === "seconds" ? q(L) : se(L)
        )
      );
      return Ce && E ? (va(m, E) || _r(m, E)) && (ha(m, Ce) || _r(m, Ce)) : Ce ? ha(m, Ce) || _r(m, Ce) : E ? va(m, E) || _r(m, E) : !0;
    }, J = (L) => a[`no${L[0].toUpperCase() + L.slice(1)}Overlay`], p = (L) => {
      J(L) || (y[L] = !y[L], y[L] || r("overlay-closed"));
    }, f = (L) => L === "hours" ? Kt : L === "minutes" ? dn : Or, O = (L, ve = !0) => {
      const Ce = ve ? F : X, E = ve ? +a[`${L}Increment`] : -+a[`${L}Increment`];
      pe(+a[L] + E, L) && r(
        `update:${L}`,
        f(L)(Ce({ [L]: +a[L] }, { [L]: +a[`${L}Increment`] }))
      );
    }, z = (L) => a.is24 ? L : (L >= 12 ? _.value = "PM" : _.value = "AM", T_(L)), ce = () => {
      _.value === "PM" ? (_.value = "AM", r("update:hours", a.hours - 12)) : (_.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", _.value);
    }, $ = (L) => {
      y[L] = !0;
    }, Pe = (L, ve, Ce) => {
      if (L && a.arrowNavigation) {
        Array.isArray(Y.value[ve]) ? Y.value[ve][Ce] = L : Y.value[ve] = [L];
        const E = Y.value.reduce(
          (m, w) => w.map((N, G) => [...m[G] || [], w[G]]),
          []
        );
        s(a.closeTimePickerBtn), A.value && (E[1] = E[1].concat(A.value)), o(E, a.order);
      }
    }, Ie = (L, ve) => (p(L), L === "hours" && !a.is24 ? r(`update:${L}`, _.value === "PM" ? ve + 12 : ve) : r(`update:${L}`, ve));
    return t({ openChildCmp: $ }), (L, ve) => {
      var Ce;
      return L.disabled ? te("", !0) : (V(), K("div", M1, [
        (V(!0), K(xe, null, Xe(R.value, (E, m) => {
          var w, N, G;
          return V(), K("div", {
            key: m,
            class: Ve(B.value)
          }, [
            E.separator ? (V(), K(xe, { key: 0 }, [
              Jt(" : ")
            ], 64)) : (V(), K(xe, { key: 1 }, [
              Te("button", {
                ref_for: !0,
                ref: (D) => Pe(D, m, 0),
                type: "button",
                class: Ve({
                  dp__btn: !0,
                  dp__inc_dec_button: !L.timePickerInline,
                  dp__inc_dec_button_inline: L.timePickerInline,
                  dp__tp_inline_btn_top: L.timePickerInline,
                  dp__inc_dec_button_disabled: P.value(E.type)
                }),
                "aria-label": (w = T(i)) == null ? void 0 : w.incrementValue(E.type),
                tabindex: "0",
                onKeydown: [
                  De(Ge((D) => O(E.type), ["prevent"]), ["enter"]),
                  De(Ge((D) => O(E.type), ["prevent"]), ["space"])
                ],
                onClick: (D) => O(E.type)
              }, [
                a.timePickerInline ? (V(), K(xe, { key: 1 }, [
                  E1,
                  D1
                ], 64)) : (V(), K(xe, { key: 0 }, [
                  L.$slots["arrow-up"] ? ge(L.$slots, "arrow-up", { key: 0 }) : te("", !0),
                  L.$slots["arrow-up"] ? te("", !0) : (V(), Ae(T(Hi), { key: 1 }))
                ], 64))
              ], 42, k1),
              Te("button", {
                ref_for: !0,
                ref: (D) => Pe(D, m, 1),
                type: "button",
                "aria-label": (N = T(i)) == null ? void 0 : N.openTpOverlay(E.type),
                class: Ve({
                  dp__time_display: !0,
                  dp__time_display_block: !L.timePickerInline,
                  dp__time_display_inline: L.timePickerInline,
                  "dp--time-invalid": g.value(E.type),
                  "dp--time-overlay-btn": !g.value(E.type)
                }),
                disabled: J(E.type),
                tabindex: "0",
                onKeydown: [
                  De(Ge((D) => p(E.type), ["prevent"]), ["enter"]),
                  De(Ge((D) => p(E.type), ["prevent"]), ["space"])
                ],
                onClick: (D) => p(E.type)
              }, [
                L.$slots[E.type] ? ge(L.$slots, E.type, {
                  key: 0,
                  text: H.value(E.type).text,
                  value: H.value(E.type).value
                }) : te("", !0),
                L.$slots[E.type] ? te("", !0) : (V(), K(xe, { key: 1 }, [
                  Jt(lt(H.value(E.type).text), 1)
                ], 64))
              ], 42, O1),
              Te("button", {
                ref_for: !0,
                ref: (D) => Pe(D, m, 2),
                type: "button",
                class: Ve({
                  dp__btn: !0,
                  dp__inc_dec_button: !L.timePickerInline,
                  dp__inc_dec_button_inline: L.timePickerInline,
                  dp__tp_inline_btn_bottom: L.timePickerInline,
                  dp__inc_dec_button_disabled: C.value(E.type)
                }),
                "aria-label": (G = T(i)) == null ? void 0 : G.decrementValue(E.type),
                tabindex: "0",
                onKeydown: [
                  De(Ge((D) => O(E.type, !1), ["prevent"]), ["enter"]),
                  De(Ge((D) => O(E.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (D) => O(E.type, !1)
              }, [
                a.timePickerInline ? (V(), K(xe, { key: 1 }, [
                  P1,
                  C1
                ], 64)) : (V(), K(xe, { key: 0 }, [
                  L.$slots["arrow-down"] ? ge(L.$slots, "arrow-down", { key: 0 }) : te("", !0),
                  L.$slots["arrow-down"] ? te("", !0) : (V(), Ae(T(Yi), { key: 1 }))
                ], 64))
              ], 42, A1)
            ], 64))
          ], 2);
        }), 128)),
        L.is24 ? te("", !0) : (V(), K("div", R1, [
          L.$slots["am-pm-button"] ? ge(L.$slots, "am-pm-button", {
            key: 0,
            toggle: ce,
            value: _.value
          }) : te("", !0),
          L.$slots["am-pm-button"] ? te("", !0) : (V(), K("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: A,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Ce = T(i)) == null ? void 0 : Ce.amPmButton,
            tabindex: "0",
            onClick: ce,
            onKeydown: [
              De(Ge(ce, ["prevent"]), ["enter"]),
              De(Ge(ce, ["prevent"]), ["space"])
            ]
          }, lt(_.value), 41, N1))
        ])),
        (V(!0), K(xe, null, Xe(U.value, (E, m) => (V(), Ae(Un, {
          key: m,
          name: T(h)(y[E.type]),
          css: T(v)
        }, {
          default: $e(() => [
            y[E.type] ? (V(), Ae(Ea, {
              key: 0,
              items: M(E.type),
              "is-last": L.autoApply && !T(u).keepActionRow,
              "esc-close": L.escClose,
              type: E.type,
              "text-input": L.textInput,
              config: L.config,
              "arrow-navigation": L.arrowNavigation,
              "aria-labels": L.ariaLabels,
              onSelected: (w) => Ie(E.type, w),
              onToggle: (w) => p(E.type),
              onResetFlow: ve[0] || (ve[0] = (w) => L.$emit("reset-flow"))
            }, At({
              "button-icon": $e(() => [
                L.$slots["clock-icon"] ? ge(L.$slots, "clock-icon", { key: 0 }) : te("", !0),
                L.$slots["clock-icon"] ? te("", !0) : (V(), Ae(_o(L.timePickerInline ? T(Lr) : T(Bi)), { key: 1 }))
              ]),
              _: 2
            }, [
              L.$slots[`${E.type}-overlay-value`] ? {
                name: "item",
                fn: $e(({ item: w }) => [
                  ge(L.$slots, `${E.type}-overlay-value`, {
                    text: w.text,
                    value: w.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : te("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), I1 = { class: "dp--tp-wrap" }, V1 = ["aria-label", "tabindex"], L1 = ["tabindex"], F1 = ["aria-label"], bf = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...en
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { buildMatrix: o, setTimePicker: s } = Wn(), i = mr(), { defaultedTransitions: l, defaultedAriaLabels: c, defaultedTextInput: u, defaultedConfig: d, defaultedRange: h } = ot(a), { transitionName: v, showTransition: y } = Ma(l), { hideNavigationButtons: _ } = Bo(), A = oe(null), Y = oe(null), j = oe([]), g = oe(null);
    Tt(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? o([gt(A.value)], "time") : s(!0, a.timePicker);
    });
    const b = ne(() => h.value.enabled && a.modelAuto ? rf(a.internalModelValue) : !0), S = oe(!1), k = (M) => ({
      hours: Array.isArray(a.hours) ? a.hours[M] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[M] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[M] : a.seconds
    }), P = ne(() => {
      const M = [];
      if (h.value.enabled)
        for (let q = 0; q < 2; q++)
          M.push(k(q));
      else
        M.push(k(0));
      return M;
    }), C = (M, q = !1, se = "") => {
      q || r("reset-flow"), S.value = M, r(M ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && s(M), Qt(() => {
        se !== "" && j.value[0] && j.value[0].openChildCmp(se);
      });
    }, F = ne(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !d.value.keepActionRow
    })), X = Vt(i, "timePicker"), B = (M, q, se) => h.value.enabled ? q === 0 ? [M, P.value[1][se]] : [P.value[0][se], M] : M, R = (M) => {
      r("update:hours", M);
    }, U = (M) => {
      r("update:minutes", M);
    }, H = (M) => {
      r("update:seconds", M);
    }, x = () => {
      if (g.value && !u.value.enabled && !a.noOverlayFocus) {
        const M = af(g.value);
        M && M.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: C }), (M, q) => {
      var se;
      return V(), K("div", I1, [
        !M.timePicker && !M.timePickerInline ? $n((V(), K("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: A,
          type: "button",
          class: Ve(F.value),
          "aria-label": (se = T(c)) == null ? void 0 : se.openTimePicker,
          tabindex: M.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            q[0] || (q[0] = De((pe) => C(!0), ["enter"])),
            q[1] || (q[1] = De((pe) => C(!0), ["space"]))
          ],
          onClick: q[2] || (q[2] = (pe) => C(!0))
        }, [
          M.$slots["clock-icon"] ? ge(M.$slots, "clock-icon", { key: 0 }) : te("", !0),
          M.$slots["clock-icon"] ? te("", !0) : (V(), Ae(T(Bi), { key: 1 }))
        ], 42, V1)), [
          [Ba, !T(_)(M.hideNavigation, "time")]
        ]) : te("", !0),
        ze(Un, {
          name: T(v)(S.value),
          css: T(y) && !M.timePickerInline
        }, {
          default: $e(() => {
            var pe;
            return [
              S.value || M.timePicker || M.timePickerInline ? (V(), K("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: g,
                class: Ve({
                  dp__overlay: !M.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !M.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Ot(M.timePicker ? { height: `${T(d).modeHeight}px` } : void 0),
                tabindex: M.timePickerInline ? void 0 : 0
              }, [
                Te("div", {
                  class: Ve(
                    M.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  M.$slots["time-picker-overlay"] ? ge(M.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: R,
                    setMinutes: U,
                    setSeconds: H
                  }) : te("", !0),
                  M.$slots["time-picker-overlay"] ? te("", !0) : (V(), K("div", {
                    key: 1,
                    class: Ve(M.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (V(!0), K(xe, null, Xe(P.value, (J, p) => $n((V(), Ae($1, wt({ key: p }, {
                      ...M.$props,
                      order: p,
                      hours: J.hours,
                      minutes: J.minutes,
                      seconds: J.seconds,
                      closeTimePickerBtn: Y.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: p === 0 ? M.fixedStart : M.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: j,
                      "validate-time": (f, O) => e.validateTime(f, B(O, p, f)),
                      "onUpdate:hours": (f) => R(B(f, p, "hours")),
                      "onUpdate:minutes": (f) => U(B(f, p, "minutes")),
                      "onUpdate:seconds": (f) => H(B(f, p, "seconds")),
                      onMounted: x,
                      onOverlayClosed: x,
                      onAmPmChange: q[3] || (q[3] = (f) => M.$emit("am-pm-change", f))
                    }), At({ _: 2 }, [
                      Xe(T(X), (f, O) => ({
                        name: f,
                        fn: $e((z) => [
                          ge(M.$slots, f, mt(kt(z)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ba, p === 0 ? !0 : b.value]
                    ])), 128))
                  ], 2)),
                  !M.timePicker && !M.timePickerInline ? $n((V(), K("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: Y,
                    type: "button",
                    class: Ve(F.value),
                    "aria-label": (pe = T(c)) == null ? void 0 : pe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      q[4] || (q[4] = De((J) => C(!1), ["enter"])),
                      q[5] || (q[5] = De((J) => C(!1), ["space"]))
                    ],
                    onClick: q[6] || (q[6] = (J) => C(!1))
                  }, [
                    M.$slots["calendar-icon"] ? ge(M.$slots, "calendar-icon", { key: 0 }) : te("", !0),
                    M.$slots["calendar-icon"] ? te("", !0) : (V(), Ae(T(Lr), { key: 1 }))
                  ], 42, F1)), [
                    [Ba, !T(_)(M.hideNavigation, "time")]
                  ]) : te("", !0)
                ], 2)
              ], 14, L1)) : te("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), _f = (e, t, n, r) => {
  const { defaultedRange: a } = ot(e), o = (g, b) => Array.isArray(t[g]) ? t[g][b] : t[g], s = (g) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[g] : t.seconds : 0, i = (g, b) => g ? b !== void 0 ? Vn(g, o("hours", b), o("minutes", b), s(b)) : Vn(g, t.hours, t.minutes, s()) : Vi(Q(), s(b)), l = (g, b) => {
    t[g] = b;
  }, c = ne(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (g, b) => {
    const S = Object.fromEntries(
      Object.keys(t).map((k) => k === g ? [k, b] : [k, t[k]].slice())
    );
    if (c.value && !a.value.disableTimeRangeValidation) {
      const k = (C) => n.value ? Vn(
        n.value[C],
        S.hours[C],
        S.minutes[C],
        S.seconds[C]
      ) : null, P = (C) => Ii(n.value[C], 0);
      return !(Be(k(0), k(1)) && (ha(k(0), P(1)) || va(k(1), P(0))));
    }
    return !0;
  }, d = (g, b) => {
    u(g, b) && (l(g, b), r && r());
  }, h = (g) => {
    d("hours", g);
  }, v = (g) => {
    d("minutes", g);
  }, y = (g) => {
    d("seconds", g);
  }, _ = (g, b, S, k) => {
    b && h(g), !b && !S && v(g), S && y(g), n.value && k(n.value);
  }, A = (g) => {
    if (g) {
      const b = Array.isArray(g), S = b ? [+g[0].hours, +g[1].hours] : +g.hours, k = b ? [+g[0].minutes, +g[1].minutes] : +g.minutes, P = b ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      l("hours", S), l("minutes", k), e.enableSeconds && l("seconds", P);
    }
  }, Y = (g, b) => {
    const S = {
      hours: Array.isArray(t.hours) ? t.hours[g] : t.hours,
      disabledArr: []
    };
    return (b || b === 0) && (S.hours = b), Array.isArray(e.disabledTimes) && (S.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[g]) ? e.disabledTimes[g] : e.disabledTimes), S;
  }, j = ne(() => (g, b) => {
    var S;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: P } = Y(g, b), C = k.filter((F) => +F.hours === P);
      return ((S = C[0]) == null ? void 0 : S.minutes) === "*" ? { hours: [P], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (C == null ? void 0 : C.map((F) => +F.minutes)) ?? [],
        seconds: (C == null ? void 0 : C.map((F) => F.seconds ? +F.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: l,
    updateHours: h,
    updateMinutes: v,
    updateSeconds: y,
    getSetDateTime: i,
    updateTimeValues: _,
    getSecondsValue: s,
    assignStartTime: A,
    validateTime: u,
    disabledTimesConfig: j
  };
}, B1 = (e, t) => {
  const { modelValue: n, time: r } = ka(e, t), { defaultedStartTime: a, defaultedRange: o } = ot(e), { updateTimeValues: s, getSetDateTime: i, setTime: l, assignStartTime: c, disabledTimesConfig: u, validateTime: d } = _f(e, r, n), h = (g) => {
    const { hours: b, minutes: S, seconds: k } = g;
    return { hours: +b, minutes: +S, seconds: k ? +k : 0 };
  }, v = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const b = h(e.startTime[0]), S = h(e.startTime[1]);
        return [Je(Q(), b), Je(Q(), S)];
      }
      const g = h(e.startTime);
      return Je(Q(), g);
    }
    return o.value.enabled ? [null, null] : null;
  }, y = () => {
    if (o.value.enabled) {
      const [g, b] = v();
      n.value = [i(g, 0), i(b, 1)];
    } else
      n.value = i(v());
  }, _ = (g) => Array.isArray(g) ? [ur(Q(g[0])), ur(Q(g[1]))] : [ur(g ?? Q())], A = (g, b, S) => {
    l("hours", g), l("minutes", b), l("seconds", e.enableSeconds ? S : 0);
  }, Y = () => {
    const [g, b] = _(n.value);
    return o.value.enabled ? A(
      [g.hours, b.hours],
      [g.minutes, b.minutes],
      [g.seconds, b.seconds]
    ) : A(g.hours, g.minutes, g.seconds);
  };
  Tt(() => {
    if (!e.shadow)
      return c(a.value), n.value ? Y() : y();
  });
  const j = () => {
    Array.isArray(n.value) ? n.value = n.value.map((g, b) => g && i(g, b)) : n.value = i(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: u,
    updateTime: (g, b = !0, S = !1) => {
      s(g, b, S, j);
    },
    validateTime: d
  };
}, H1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...en
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = mr(), s = Vt(o, "timePicker"), { time: i, modelValue: l, disabledTimesConfig: c, updateTime: u, validateTime: d } = B1(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: l,
      time: i,
      updateTime: u
    }) }), (h, v) => (V(), Ae(Yo, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: $e(() => [
        ze(bf, wt(h.$props, {
          hours: T(i).hours,
          minutes: T(i).minutes,
          seconds: T(i).seconds,
          "internal-model-value": h.internalModelValue,
          "disabled-times-config": T(c),
          "validate-time": T(d),
          "onUpdate:hours": v[0] || (v[0] = (y) => T(u)(y)),
          "onUpdate:minutes": v[1] || (v[1] = (y) => T(u)(y, !1)),
          "onUpdate:seconds": v[2] || (v[2] = (y) => T(u)(y, !1, !0)),
          onAmPmChange: v[3] || (v[3] = (y) => h.$emit("am-pm-change", y))
        }), At({ _: 2 }, [
          Xe(T(s), (y, _) => ({
            name: y,
            fn: $e((A) => [
              ge(h.$slots, y, mt(kt(A)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Y1 = { class: "dp__month_year_row" }, j1 = ["aria-label", "onClick", "onKeydown"], U1 = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...en
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTransitions: o,
      defaultedAriaLabels: s,
      defaultedMultiCalendars: i,
      defaultedFilters: l,
      defaultedConfig: c,
      defaultedHighlight: u,
      propDates: d
    } = ot(a), { transitionName: h, showTransition: v } = Ma(o), { buildMatrix: y } = Wn(), { handleMonthYearChange: _, isDisabled: A, updateMonthYear: Y } = t1(a, r), { showLeftIcon: j, showRightIcon: g } = Bo(), b = oe(!1), S = oe(!1), k = oe([null, null, null, null]);
    Tt(() => {
      r("mount");
    });
    const P = (p) => ({
      get: () => a[p],
      set: (f) => {
        const O = p === Ut.month ? Ut.year : Ut.month;
        r("update-month-year", { [p]: f, [O]: a[O] }), p === Ut.month ? x(!0) : M(!0);
      }
    }), C = ne(P(Ut.month)), F = ne(P(Ut.year)), X = ne(() => (p) => ({
      month: a.month,
      year: a.year,
      items: p === Ut.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: Y,
      toggle: p === Ut.month ? x : M
    })), B = ne(() => a.months.find((f) => f.value === a.month) || { text: "", value: 0 }), R = ne(() => Pr(a.months, (p) => {
      const f = a.month === p.value, O = ya(
        p.value,
        of(a.year, d.value.minDate),
        sf(a.year, d.value.maxDate)
      ) || l.value.months.includes(p.value), z = ff(u.value, p.value, a.year);
      return { active: f, disabled: O, highlighted: z };
    })), U = ne(() => Pr(a.years, (p) => {
      const f = a.year === p.value, O = ya(
        p.value,
        Cr(d.value.minDate),
        Cr(d.value.maxDate)
      ) || l.value.years.includes(p.value), z = qi(u.value, p.value);
      return { active: f, disabled: O, highlighted: z };
    })), H = (p, f) => {
      f !== void 0 ? p.value = f : p.value = !p.value, p.value || r("overlay-closed");
    }, x = (p = !1, f) => {
      q(p), H(b, f);
    }, M = (p = !1, f) => {
      q(p), H(S, f);
    }, q = (p) => {
      p || r("reset-flow");
    }, se = (p, f) => {
      a.arrowNavigation && (k.value[f] = gt(p), y(k.value, "monthYear"));
    }, pe = ne(() => {
      var p, f;
      return [
        {
          type: Ut.month,
          index: 1,
          toggle: x,
          modelValue: C.value,
          updateModelValue: (O) => C.value = O,
          text: B.value.text,
          showSelectionGrid: b.value,
          items: R.value,
          ariaLabel: (p = s.value) == null ? void 0 : p.openMonthsOverlay
        },
        {
          type: Ut.year,
          index: 2,
          toggle: M,
          modelValue: F.value,
          updateModelValue: (O) => F.value = O,
          text: a.year,
          showSelectionGrid: S.value,
          items: U.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), J = ne(() => a.disableYearSelect ? [pe.value[0]] : a.yearFirst ? [...pe.value].reverse() : pe.value);
    return t({
      toggleMonthPicker: x,
      toggleYearPicker: M,
      handleMonthYearChange: _
    }), (p, f) => {
      var O, z, ce;
      return V(), K("div", Y1, [
        p.$slots["month-year"] ? ge(p.$slots, "month-year", mt(wt({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: T(Y), handleMonthYearChange: T(_), instance: e.instance }))) : (V(), K(xe, { key: 1 }, [
          T(j)(T(i), e.instance) && !p.vertical ? (V(), Ae(sa, {
            key: 0,
            "aria-label": (O = T(s)) == null ? void 0 : O.prevMonth,
            disabled: T(A)(!1),
            onActivate: f[0] || (f[0] = ($) => T(_)(!1, !0)),
            onSetRef: f[1] || (f[1] = ($) => se($, 0))
          }, {
            default: $e(() => [
              p.$slots["arrow-left"] ? ge(p.$slots, "arrow-left", { key: 0 }) : te("", !0),
              p.$slots["arrow-left"] ? te("", !0) : (V(), Ae(T(Li), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : te("", !0),
          Te("div", {
            class: Ve(["dp__month_year_wrap", {
              dp__year_disable_select: p.disableYearSelect
            }])
          }, [
            (V(!0), K(xe, null, Xe(J.value, ($, Pe) => (V(), K(xe, {
              key: $.type
            }, [
              Te("button", {
                ref_for: !0,
                ref: (Ie) => se(Ie, Pe + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": $.ariaLabel,
                onClick: $.toggle,
                onKeydown: [
                  De(Ge($.toggle, ["prevent"]), ["enter"]),
                  De(Ge($.toggle, ["prevent"]), ["space"])
                ]
              }, [
                p.$slots[$.type] ? ge(p.$slots, $.type, {
                  key: 0,
                  text: $.text,
                  value: a[$.type]
                }) : te("", !0),
                p.$slots[$.type] ? te("", !0) : (V(), K(xe, { key: 1 }, [
                  Jt(lt($.text), 1)
                ], 64))
              ], 40, j1),
              ze(Un, {
                name: T(h)($.showSelectionGrid),
                css: T(v)
              }, {
                default: $e(() => [
                  $.showSelectionGrid ? (V(), Ae(Ea, {
                    key: 0,
                    items: $.items,
                    "arrow-navigation": p.arrowNavigation,
                    "hide-navigation": p.hideNavigation,
                    "is-last": p.autoApply && !T(c).keepActionRow,
                    "skip-button-ref": !1,
                    config: p.config,
                    type: $.type,
                    "header-refs": [],
                    "esc-close": p.escClose,
                    "menu-wrap-ref": p.menuWrapRef,
                    "text-input": p.textInput,
                    "aria-labels": p.ariaLabels,
                    onSelected: $.updateModelValue,
                    onToggle: $.toggle
                  }, At({
                    "button-icon": $e(() => [
                      p.$slots["calendar-icon"] ? ge(p.$slots, "calendar-icon", { key: 0 }) : te("", !0),
                      p.$slots["calendar-icon"] ? te("", !0) : (V(), Ae(T(Lr), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    p.$slots[`${$.type}-overlay-value`] ? {
                      name: "item",
                      fn: $e(({ item: Ie }) => [
                        ge(p.$slots, `${$.type}-overlay-value`, {
                          text: Ie.text,
                          value: Ie.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    p.$slots[`${$.type}-overlay`] ? {
                      name: "overlay",
                      fn: $e(() => [
                        ge(p.$slots, `${$.type}-overlay`, mt(kt(X.value($.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    p.$slots[`${$.type}-overlay-header`] ? {
                      name: "header",
                      fn: $e(() => [
                        ge(p.$slots, `${$.type}-overlay-header`, {
                          toggle: $.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : te("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          T(j)(T(i), e.instance) && p.vertical ? (V(), Ae(sa, {
            key: 1,
            "aria-label": (z = T(s)) == null ? void 0 : z.prevMonth,
            disabled: T(A)(!1),
            onActivate: f[2] || (f[2] = ($) => T(_)(!1, !0))
          }, {
            default: $e(() => [
              p.$slots["arrow-up"] ? ge(p.$slots, "arrow-up", { key: 0 }) : te("", !0),
              p.$slots["arrow-up"] ? te("", !0) : (V(), Ae(T(Hi), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : te("", !0),
          T(g)(T(i), e.instance) ? (V(), Ae(sa, {
            key: 2,
            ref: "rightIcon",
            disabled: T(A)(!0),
            "aria-label": (ce = T(s)) == null ? void 0 : ce.nextMonth,
            onActivate: f[3] || (f[3] = ($) => T(_)(!0, !0)),
            onSetRef: f[4] || (f[4] = ($) => se($, p.disableYearSelect ? 2 : 3))
          }, {
            default: $e(() => [
              p.$slots[p.vertical ? "arrow-down" : "arrow-right"] ? ge(p.$slots, p.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : te("", !0),
              p.$slots[p.vertical ? "arrow-down" : "arrow-right"] ? te("", !0) : (V(), Ae(_o(p.vertical ? T(Yi) : T(Fi)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : te("", !0)
        ], 64))
      ]);
    };
  }
}), W1 = ["aria-label"], q1 = {
  class: "dp__calendar_header",
  role: "row"
}, G1 = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, z1 = ["aria-label"], K1 = /* @__PURE__ */ Te("div", { class: "dp__calendar_header_separator" }, null, -1), X1 = ["aria-label"], Q1 = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, J1 = { class: "dp__cell_inner" }, Z1 = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], ew = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...en
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { buildMultiLevelMatrix: o } = Wn(), {
      defaultedTransitions: s,
      defaultedConfig: i,
      defaultedAriaLabels: l,
      defaultedMultiCalendars: c,
      defaultedWeekNumbers: u
    } = ot(a), d = oe(null), h = oe({
      bottom: "",
      left: "",
      transform: ""
    }), v = oe([]), y = oe(null), _ = oe(!0), A = oe(""), Y = oe({ startX: 0, endX: 0, startY: 0, endY: 0 }), j = oe([]), g = oe({ left: "50%" }), b = ne(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), S = ne(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : S_(a.formatLocale, a.locale, +a.weekStart));
    Tt(() => {
      r("mount", { cmp: "calendar", refs: v }), i.value.noSwipe || y.value && (y.value.addEventListener("touchstart", M, { passive: !1 }), y.value.addEventListener("touchend", q, { passive: !1 }), y.value.addEventListener("touchmove", se, { passive: !1 })), a.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", p, { passive: !1 });
    });
    const k = ($) => $ ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", P = ($, Pe) => {
      if (a.transitions) {
        const Ie = Ft(hn(Q(), a.month, a.year));
        A.value = ct(Ft(hn(Q(), $, Pe)), Ie) ? s.value[k(!0)] : s.value[k(!1)], _.value = !1, Qt(() => {
          _.value = !0;
        });
      }
    }, C = ne(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), F = ne(() => ($) => {
      const Pe = M_($);
      return {
        dp__marker_dot: Pe.type === "dot",
        dp__marker_line: Pe.type === "line"
      };
    }), X = ne(() => ($) => Be($, d.value)), B = ne(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && a.instance !== 0
    })), R = ne(() => ($) => a.hideOffsetDates ? $.current : !0), U = ($) => cn($, "yyyy-MM-dd"), H = async ($, Pe, Ie) => {
      var L, ve;
      if (r("set-hover-date", $), (ve = (L = $.marker) == null ? void 0 : L.tooltip) != null && ve.length) {
        const Ce = gt(v.value[Pe][Ie]);
        if (Ce) {
          const { width: E, height: m } = Ce.getBoundingClientRect();
          d.value = $.value;
          let w = { left: `${E / 2}px` }, N = -50;
          if (await Qt(), j.value[0]) {
            const { left: G, width: D } = j.value[0].getBoundingClientRect();
            G < 0 && (w = { left: "0" }, N = 0, g.value.left = `${E / 2}px`), window.innerWidth < G + D && (w = { right: "0" }, N = 0, g.value.left = `${D - E / 2}px`);
          }
          h.value = {
            bottom: `${m}px`,
            ...w,
            transform: `translateX(${N}%)`
          }, r("tooltip-open", $.marker);
        }
      }
    }, x = ($) => {
      d.value && (d.value = null, h.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", $.marker));
    }, M = ($) => {
      Y.value.startX = $.changedTouches[0].screenX, Y.value.startY = $.changedTouches[0].screenY;
    }, q = ($) => {
      Y.value.endX = $.changedTouches[0].screenX, Y.value.endY = $.changedTouches[0].screenY, pe();
    }, se = ($) => {
      a.vertical && !a.inline && $.preventDefault();
    }, pe = () => {
      const $ = a.vertical ? "Y" : "X";
      Math.abs(Y.value[`start${$}`] - Y.value[`end${$}`]) > 10 && r("handle-swipe", Y.value[`start${$}`] > Y.value[`end${$}`] ? "right" : "left");
    }, J = ($, Pe, Ie) => {
      $ && (Array.isArray(v.value[Pe]) ? v.value[Pe][Ie] = $ : v.value[Pe] = [$]), a.arrowNavigation && o(v.value, "calendar");
    }, p = ($) => {
      a.monthChangeOnScroll && ($.preventDefault(), r("handle-scroll", $));
    }, f = ($) => u.value.type === "local" ? Ri($.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Pi($.value) : typeof u.value.type == "function" ? u.value.type($.value) : "", O = ($) => {
      const Pe = $[0];
      return u.value.hideOnOffsetDates ? $.some((Ie) => Ie.current) ? f(Pe) : "" : f(Pe);
    }, z = ($, Pe) => {
      In($, i.value), r("select-date", Pe);
    }, ce = ($) => {
      In($, i.value);
    };
    return t({ triggerTransition: P }), ($, Pe) => {
      var Ie;
      return V(), K("div", {
        class: Ve(B.value)
      }, [
        Te("div", {
          ref_key: "calendarWrapRef",
          ref: y,
          role: "grid",
          class: Ve(C.value),
          "aria-label": (Ie = T(l)) == null ? void 0 : Ie.calendarWrap
        }, [
          Te("div", q1, [
            $.weekNumbers ? (V(), K("div", G1, lt($.weekNumName), 1)) : te("", !0),
            (V(!0), K(xe, null, Xe(S.value, (L, ve) => {
              var Ce, E;
              return V(), K("div", {
                key: ve,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (E = (Ce = T(l)) == null ? void 0 : Ce.weekDay) == null ? void 0 : E.call(Ce, ve)
              }, [
                $.$slots["calendar-header"] ? ge($.$slots, "calendar-header", {
                  key: 0,
                  day: L,
                  index: ve
                }) : te("", !0),
                $.$slots["calendar-header"] ? te("", !0) : (V(), K(xe, { key: 1 }, [
                  Jt(lt(L), 1)
                ], 64))
              ], 8, z1);
            }), 128))
          ]),
          K1,
          ze(Un, {
            name: A.value,
            css: !!$.transitions
          }, {
            default: $e(() => {
              var L;
              return [
                _.value ? (V(), K("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((L = T(l)) == null ? void 0 : L.calendarDays) || void 0
                }, [
                  (V(!0), K(xe, null, Xe(b.value, (ve, Ce) => (V(), K("div", {
                    key: Ce,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    $.weekNumbers ? (V(), K("div", Q1, [
                      Te("div", J1, lt(O(ve.days)), 1)
                    ])) : te("", !0),
                    (V(!0), K(xe, null, Xe(ve.days, (E, m) => {
                      var w, N, G;
                      return V(), K("div", {
                        id: U(E.value),
                        ref_for: !0,
                        ref: (D) => J(D, Ce, m),
                        key: m + Ce,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (E.classData.dp__active_date || E.classData.dp__range_start || E.classData.dp__range_start) ?? void 0,
                        "aria-disabled": E.classData.dp__cell_disabled || void 0,
                        "aria-label": (N = (w = T(l)) == null ? void 0 : w.day) == null ? void 0 : N.call(w, E),
                        tabindex: "0",
                        onClick: Ge((D) => z(D, E), ["prevent"]),
                        onKeydown: [
                          De((D) => $.$emit("select-date", E), ["enter"]),
                          De((D) => $.$emit("handle-space", E), ["space"])
                        ],
                        onMouseenter: (D) => H(E, Ce, m),
                        onMouseleave: (D) => x(E)
                      }, [
                        Te("div", {
                          class: Ve(["dp__cell_inner", E.classData])
                        }, [
                          $.$slots.day && R.value(E) ? ge($.$slots, "day", {
                            key: 0,
                            day: +E.text,
                            date: E.value
                          }) : te("", !0),
                          $.$slots.day ? te("", !0) : (V(), K(xe, { key: 1 }, [
                            Jt(lt(E.text), 1)
                          ], 64)),
                          E.marker && R.value(E) ? (V(), K(xe, { key: 2 }, [
                            $.$slots.marker ? ge($.$slots, "marker", {
                              key: 0,
                              marker: E.marker,
                              day: +E.text,
                              date: E.value
                            }) : (V(), K("div", {
                              key: 1,
                              class: Ve(F.value(E.marker)),
                              style: Ot(E.marker.color ? { backgroundColor: E.marker.color } : {})
                            }, null, 6))
                          ], 64)) : te("", !0),
                          X.value(E.value) ? (V(), K("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: j,
                            class: "dp__marker_tooltip",
                            style: Ot(h.value)
                          }, [
                            (G = E.marker) != null && G.tooltip ? (V(), K("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ce
                            }, [
                              (V(!0), K(xe, null, Xe(E.marker.tooltip, (D, re) => (V(), K("div", {
                                key: re,
                                class: "dp__tooltip_text"
                              }, [
                                $.$slots["marker-tooltip"] ? ge($.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: D,
                                  day: E.value
                                }) : te("", !0),
                                $.$slots["marker-tooltip"] ? te("", !0) : (V(), K(xe, { key: 1 }, [
                                  Te("div", {
                                    class: "dp__tooltip_mark",
                                    style: Ot(D.color ? { backgroundColor: D.color } : {})
                                  }, null, 4),
                                  Te("div", null, lt(D.text), 1)
                                ], 64))
                              ]))), 128)),
                              Te("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Ot(g.value)
                              }, null, 4)
                            ])) : te("", !0)
                          ], 4)) : te("", !0)
                        ], 2)
                      ], 40, Z1);
                    }), 128))
                  ]))), 128))
                ], 8, X1)) : te("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, W1)
      ], 2);
    };
  }
}), Ou = (e) => Array.isArray(e), tw = (e, t, n, r) => {
  const a = oe([]), o = oe(/* @__PURE__ */ new Date()), { modelValue: s, calendars: i, time: l } = ka(e, t), { defaultedMultiCalendars: c, defaultedStartTime: u, defaultedRange: d, defaultedTz: h, propDates: v } = ot(e), { validateMonthYearInRange: y, isDisabled: _, isDateRangeAllowed: A, checkMinMaxRange: Y } = qn(e), { updateTimeValues: j, getSetDateTime: g, setTime: b, assignStartTime: S, validateTime: k, disabledTimesConfig: P } = _f(e, l, s, r), C = ne(
    () => (I) => i.value[I] ? i.value[I].month : 0
  ), F = ne(
    () => (I) => i.value[I] ? i.value[I].year : 0
  ), X = (I, ae, _e) => {
    var ke, Z;
    i.value[I] || (i.value[I] = { month: 0, year: 0 }), i.value[I].month = Tu(ae) ? (ke = i.value[I]) == null ? void 0 : ke.month : ae, i.value[I].year = Tu(_e) ? (Z = i.value[I]) == null ? void 0 : Z.year : _e;
  }, B = () => {
    e.autoApply && t("select-date");
  };
  bt(
    s,
    (I, ae) => {
      JSON.stringify(I) !== JSON.stringify(ae) && H();
    },
    { deep: !0 }
  ), Tt(() => {
    e.shadow || (s.value || (ce(), u.value && S(u.value)), H(!0), e.focusStartDate && e.startDate && ce());
  });
  const R = ne(() => {
    var I;
    return (I = e.flow) != null && I.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), U = () => {
    e.autoApply && R.value && t("auto-apply");
  }, H = (I = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (a.value = s.value, p(I)) : q(s.value, I);
    if (c.value.count && I && !e.startDate)
      return M(Q(), I);
  }, x = () => Array.isArray(s.value) && d.value.enabled ? Fe(s.value[0]) === Fe(s.value[1] ?? s.value[0]) : !1, M = (I, ae = !1) => {
    if ((!c.value.count || !c.value.static || ae) && X(0, Fe(I), Ne(I)), c.value.count && (!c.value.solo || !s.value || x()))
      for (let _e = 1; _e < c.value.count; _e++) {
        const ke = Je(Q(), { month: C.value(_e - 1), year: F.value(_e - 1) }), Z = Id(ke, { months: 1 });
        i.value[_e] = { month: Fe(Z), year: Ne(Z) };
      }
  }, q = (I, ae) => {
    M(I), b("hours", Kt(I)), b("minutes", dn(I)), b("seconds", Or(I)), c.value.count && ae && z();
  }, se = (I) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const ae = Fe(I[0]), _e = Fe(I[1]);
      return Math.abs(_e - ae) < c.value.count ? 0 : 1;
    }
    return 1;
  }, pe = (I, ae) => {
    I[1] && d.value.showLastInRange ? M(I[se(I)], ae) : M(I[0], ae);
    const _e = (ke, Z) => [
      ke(I[0]),
      I[1] ? ke(I[1]) : l[Z][1]
    ];
    b("hours", _e(Kt, "hours")), b("minutes", _e(dn, "minutes")), b("seconds", _e(Or, "seconds"));
  }, J = (I, ae) => {
    if ((d.value.enabled || e.weekPicker) && !e.multiDates)
      return pe(I, ae);
    if (e.multiDates && ae) {
      const _e = I[I.length - 1];
      return q(_e, ae);
    }
  }, p = (I) => {
    const ae = s.value;
    J(ae, I), c.value.count && c.value.solo && z();
  }, f = (I, ae) => {
    const _e = Je(Q(), { month: C.value(ae), year: F.value(ae) }), ke = I < 0 ? zt(_e, 1) : Ar(_e, 1);
    y(Fe(ke), Ne(ke), I < 0, e.preventMinMaxNavigation) && (X(ae, Fe(ke), Ne(ke)), t("update-month-year", { instance: ae, month: Fe(ke), year: Ne(ke) }), c.value.count && !c.value.solo && O(ae), n());
  }, O = (I) => {
    for (let ae = I - 1; ae >= 0; ae--) {
      const _e = Ar(Je(Q(), { month: C.value(ae + 1), year: F.value(ae + 1) }), 1);
      X(ae, Fe(_e), Ne(_e));
    }
    for (let ae = I + 1; ae <= c.value.count - 1; ae++) {
      const _e = zt(Je(Q(), { month: C.value(ae - 1), year: F.value(ae - 1) }), 1);
      X(ae, Fe(_e), Ne(_e));
    }
  }, z = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const I = Q(
        Q(s.value[1] ? s.value[1] : zt(s.value[0], 1))
      ), [ae, _e] = [Fe(s.value[0]), Ne(s.value[0])], [ke, Z] = [Fe(s.value[1]), Ne(s.value[1])];
      (ae !== ke || ae === ke && _e !== Z) && c.value.solo && X(1, Fe(I), Ne(I));
    } else
      s.value && !Array.isArray(s.value) && (X(0, Fe(s.value), Ne(s.value)), M(Q()));
  }, ce = () => {
    e.startDate && (X(0, Fe(Q(e.startDate)), Ne(Q(e.startDate))), c.value.count && O(0));
  }, $ = (I, ae) => {
    if (e.monthChangeOnScroll) {
      const _e = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), ke = Math.abs(I.deltaY);
      let Z = 500;
      ke > 1 && (Z = 100), ke > 100 && (Z = 0), _e > Z && (o.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -I.deltaY : I.deltaY, ae));
    }
  }, Pe = (I, ae, _e = !1) => {
    e.monthChangeOnArrows && e.vertical === _e && Ie(I, ae);
  }, Ie = (I, ae) => {
    f(I === "right" ? -1 : 1, ae);
  }, L = (I) => {
    if (v.value.markers)
      return uo(I.value, v.value.markers);
  }, ve = (I, ae) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [I == 0, !0];
      case "fair":
        return [I == 0 || ae > I, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Ce = (I, ae, _e, ke) => {
    if (e.sixWeeks && I.length < 6) {
      const Z = 6 - I.length, he = (ae.getDay() + 7 - ke) % 7, ye = 6 - (_e.getDay() + 7 - ke) % 7, [Bt, tn] = ve(he, ye);
      for (let Gn = 1; Gn <= Z; Gn++)
        if (tn ? !!(Gn % 2) == Bt : Bt) {
          const _n = I[0].days[0], Uo = E(Wt(_n.value, -7), Fe(ae));
          I.unshift({ days: Uo });
        } else {
          const _n = I[I.length - 1], Uo = _n.days[_n.days.length - 1], wf = E(Wt(Uo.value, 1), Fe(ae));
          I.push({ days: wf });
        }
    }
    return I;
  }, E = (I, ae) => {
    const _e = Q(I), ke = [];
    for (let Z = 0; Z < 7; Z++) {
      const he = Wt(_e, Z), ye = Fe(he) !== ae;
      ke.push({
        text: e.hideOffsetDates && ye ? "" : he.getDate(),
        value: he,
        current: !ye,
        classData: {}
      });
    }
    return ke;
  }, m = (I, ae) => {
    const _e = [], ke = new Date(ae, I), Z = new Date(ae, I + 1, 0), he = e.weekStart, ye = pn(ke, { weekStartsOn: he }), Bt = (tn) => {
      const Gn = E(tn, I);
      if (_e.push({ days: Gn }), !_e[_e.length - 1].days.some(
        (_n) => Be(Ft(_n.value), Ft(Z))
      )) {
        const _n = Wt(tn, 7);
        Bt(_n);
      }
    };
    return Bt(ye), Ce(_e, ke, Z, he);
  }, w = (I) => {
    const ae = Vn(Q(I.value), l.hours, l.minutes, ue());
    t("date-update", ae), e.multiDates ? Gi(ae, s, e.multiDatesLimit) : s.value = ae, r(), Qt().then(() => {
      U();
    });
  }, N = (I) => d.value.noDisabledRange ? lf(a.value[0], I).some((ae) => _(ae)) : !1, G = () => {
    a.value = s.value ? s.value.slice() : [], a.value.length === 2 && !(d.value.fixedStart || d.value.fixedEnd) && (a.value = []);
  }, D = (I, ae) => {
    const _e = [
      Q(I.value),
      Wt(Q(I.value), +d.value.autoRange)
    ];
    A(_e) ? (ae && re(I.value), a.value = _e) : t("invalid-date", I.value);
  }, re = (I) => {
    const ae = Fe(Q(I)), _e = Ne(Q(I));
    if (X(0, ae, _e), c.value.count > 0)
      for (let ke = 1; ke < c.value.count; ke++) {
        const Z = R_(
          Je(Q(I), { year: C.value(ke - 1), month: F.value(ke - 1) })
        );
        X(ke, Z.month, Z.year);
      }
  }, le = (I) => {
    if (N(I.value) || !Y(I.value, s.value, d.value.fixedStart ? 0 : 1))
      return t("invalid-date", I.value);
    a.value = yf(Q(I.value), s, t, d);
  }, ie = (I, ae) => {
    if (G(), d.value.autoRange)
      return D(I, ae);
    if (d.value.fixedStart || d.value.fixedEnd)
      return le(I);
    a.value[0] ? Y(Q(I.value), s.value) && !N(I.value) ? it(Q(I.value), Q(a.value[0])) ? (a.value.unshift(Q(I.value)), t("range-end", a.value[0])) : (a.value[1] = Q(I.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", I.value), t("invalid-date", I.value)) : (a.value[0] = Q(I.value), t("range-start", a.value[0]));
  }, ue = (I = !0) => e.enableSeconds ? Array.isArray(l.seconds) ? I ? l.seconds[0] : l.seconds[1] : l.seconds : 0, ee = (I) => {
    a.value[I] = Vn(
      a.value[I],
      l.hours[I],
      l.minutes[I],
      ue(I !== 1)
    );
  }, de = () => {
    var I, ae;
    a.value[0] && a.value[1] && +((I = a.value) == null ? void 0 : I[0]) > +((ae = a.value) == null ? void 0 : ae[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, me = () => {
    a.value.length && (a.value[0] && !a.value[1] ? ee(0) : (ee(0), ee(1), r()), de(), s.value = a.value.slice(), jo(a.value, t, e.autoApply, e.modelAuto));
  }, be = (I, ae = !1) => {
    if (_(I.value) || !I.current && e.hideOffsetDates)
      return t("invalid-date", I.value);
    if (!d.value.enabled)
      return w(I);
    Ou(l.hours) && Ou(l.minutes) && !e.multiDates && (ie(I, ae), me());
  }, Me = (I, ae) => {
    var _e;
    X(I, ae.month, ae.year), c.value.count && !c.value.solo && O(I), t("update-month-year", { instance: I, month: ae.month, year: ae.year }), n(c.value.solo ? I : void 0);
    const ke = (_e = e.flow) != null && _e.length ? e.flow[e.flowStep] : void 0;
    !ae.fromNav && (ke === rn.month || ke === rn.year) && r();
  }, Re = (I, ae) => {
    vf({
      value: I,
      modelValue: s,
      range: d.value.enabled,
      timezone: ae ? void 0 : h.value.timezone
    }), B(), e.multiCalendars && Qt().then(() => H(!0));
  }, Ye = () => {
    d.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = it(Q(), s.value[0]) ? [Q(), s.value[0]] : [s.value[0], Q()] : s.value = [Q()] : s.value = Q(), B();
  }, qe = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const I = st();
        s.value[s.value.length - 1] = g(I);
      } else
        s.value = s.value.map((I, ae) => I && g(I, ae));
    else
      s.value = g(s.value);
    t("time-update");
  }, st = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: i,
    modelValue: s,
    month: C,
    year: F,
    time: l,
    disabledTimesConfig: P,
    validateTime: k,
    getCalendarDays: m,
    getMarker: L,
    handleScroll: $,
    handleSwipe: Ie,
    handleArrow: Pe,
    selectDate: be,
    updateMonthYear: Me,
    presetDate: Re,
    selectCurrentDate: Ye,
    updateTime: (I, ae = !0, _e = !1) => {
      j(I, ae, _e, qe);
    }
  };
}, nw = { key: 0 }, rw = /* @__PURE__ */ St({
  __name: "DatePicker",
  props: {
    ...en
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      calendars: o,
      month: s,
      year: i,
      modelValue: l,
      time: c,
      disabledTimesConfig: u,
      validateTime: d,
      getCalendarDays: h,
      getMarker: v,
      handleArrow: y,
      handleScroll: _,
      handleSwipe: A,
      selectDate: Y,
      updateMonthYear: j,
      presetDate: g,
      selectCurrentDate: b,
      updateTime: S
    } = tw(a, r, pe, J), k = mr(), { setHoverDate: P, getDayClassData: C, clearHoverDate: F } = o1(l, a), { defaultedMultiCalendars: X } = ot(a), B = oe([]), R = oe([]), U = oe(null), H = Vt(k, "calendar"), x = Vt(k, "monthYear"), M = Vt(k, "timePicker"), q = (f) => {
      a.shadow || r("mount", f);
    };
    bt(
      o,
      () => {
        a.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const se = ne(() => (f) => h(s.value(f), i.value(f)).map((O) => ({
      ...O,
      days: O.days.map((z) => (z.marker = v(z), z.classData = C(z), z))
    })));
    function pe(f) {
      var O;
      f || f === 0 ? (O = R.value[f]) == null || O.triggerTransition(s.value(f), i.value(f)) : R.value.forEach((z, ce) => z.triggerTransition(s.value(ce), i.value(ce)));
    }
    function J() {
      r("update-flow-step");
    }
    const p = (f, O = !1) => {
      Y(f, O), a.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: F,
      presetDate: g,
      selectCurrentDate: b,
      toggleMonthPicker: (f, O, z = 0) => {
        var ce;
        (ce = B.value[z]) == null || ce.toggleMonthPicker(f, O);
      },
      toggleYearPicker: (f, O, z = 0) => {
        var ce;
        (ce = B.value[z]) == null || ce.toggleYearPicker(f, O);
      },
      toggleTimePicker: (f, O, z) => {
        var ce;
        (ce = U.value) == null || ce.toggleTimePicker(f, O, z);
      },
      handleArrow: y,
      updateMonthYear: j,
      getSidebarProps: () => ({
        modelValue: l,
        month: s,
        year: i,
        time: c,
        updateTime: S,
        updateMonthYear: j,
        selectDate: Y,
        presetDate: g
      })
    }), (f, O) => (V(), K(xe, null, [
      ze(Yo, {
        "multi-calendars": T(X).count,
        collapse: f.collapse
      }, {
        default: $e(({ instance: z, index: ce }) => [
          f.disableMonthYearSelect ? te("", !0) : (V(), Ae(U1, wt({
            key: 0,
            ref: ($) => {
              $ && (B.value[ce] = $);
            },
            months: T(nf)(f.formatLocale, f.locale, f.monthNameFormat),
            years: T(ji)(f.yearRange, f.reverseYears),
            month: T(s)(z),
            year: T(i)(z),
            instance: z
          }, f.$props, {
            onMount: O[0] || (O[0] = ($) => q(T(cr).header)),
            onResetFlow: O[1] || (O[1] = ($) => f.$emit("reset-flow")),
            onUpdateMonthYear: ($) => T(j)(z, $),
            onOverlayClosed: O[2] || (O[2] = ($) => f.$emit("focus-menu"))
          }), At({ _: 2 }, [
            Xe(T(x), ($, Pe) => ({
              name: $,
              fn: $e((Ie) => [
                ge(f.$slots, $, mt(kt(Ie)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          ze(ew, wt({
            ref: ($) => {
              $ && (R.value[ce] = $);
            },
            "mapped-dates": se.value(z),
            month: T(s)(z),
            year: T(i)(z),
            instance: z
          }, f.$props, {
            onSelectDate: ($) => T(Y)($, z !== 1),
            onHandleSpace: ($) => p($, z !== 1),
            onSetHoverDate: O[3] || (O[3] = ($) => T(P)($)),
            onHandleScroll: ($) => T(_)($, z),
            onHandleSwipe: ($) => T(A)($, z),
            onMount: O[4] || (O[4] = ($) => q(T(cr).calendar)),
            onResetFlow: O[5] || (O[5] = ($) => f.$emit("reset-flow")),
            onTooltipOpen: O[6] || (O[6] = ($) => f.$emit("tooltip-open", $)),
            onTooltipClose: O[7] || (O[7] = ($) => f.$emit("tooltip-close", $))
          }), At({ _: 2 }, [
            Xe(T(H), ($, Pe) => ({
              name: $,
              fn: $e((Ie) => [
                ge(f.$slots, $, mt(kt({ ...Ie })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (V(), K("div", nw, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", mt(wt({ key: 0 }, { time: T(c), updateTime: T(S) }))) : (V(), Ae(bf, wt({
          key: 1,
          ref_key: "timePickerRef",
          ref: U
        }, f.$props, {
          hours: T(c).hours,
          minutes: T(c).minutes,
          seconds: T(c).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": T(u),
          "validate-time": T(d),
          onMount: O[8] || (O[8] = (z) => q(T(cr).timePicker)),
          "onUpdate:hours": O[9] || (O[9] = (z) => T(S)(z)),
          "onUpdate:minutes": O[10] || (O[10] = (z) => T(S)(z, !1)),
          "onUpdate:seconds": O[11] || (O[11] = (z) => T(S)(z, !1, !0)),
          onResetFlow: O[12] || (O[12] = (z) => f.$emit("reset-flow")),
          onOverlayClosed: O[13] || (O[13] = (z) => f.$emit("time-picker-close")),
          onOverlayOpened: O[14] || (O[14] = (z) => f.$emit("time-picker-open", z)),
          onAmPmChange: O[15] || (O[15] = (z) => f.$emit("am-pm-change", z))
        }), At({ _: 2 }, [
          Xe(T(M), (z, ce) => ({
            name: z,
            fn: $e(($) => [
              ge(f.$slots, z, mt(kt($)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : te("", !0)
    ], 64));
  }
}), aw = (e, t) => {
  const n = oe(), { defaultedMultiCalendars: r, defaultedConfig: a, defaultedHighlight: o, defaultedRange: s, propDates: i } = ot(e), { modelValue: l, year: c, month: u, calendars: d } = ka(e, t), { isDisabled: h } = qn(e), { selectYear: v, groupedYears: y, showYearPicker: _, isDisabled: A, toggleYearPicker: Y, handleYearSelect: j, handleYear: g } = gf({
    modelValue: l,
    multiCalendars: r,
    highlight: o,
    calendars: d,
    propDates: i,
    month: u,
    year: c,
    props: e,
    emit: t
  }), b = (U, H) => [U, H].map((x) => cn(x, "MMMM", { locale: e.formatLocale })).join("-"), S = ne(() => (U) => l.value ? Array.isArray(l.value) ? l.value.some((H) => wu(U, H)) : wu(l.value, U) : !1), k = (U) => {
    if (s.value.enabled) {
      if (Array.isArray(l.value)) {
        const H = Be(U, l.value[0]) || Be(U, l.value[1]);
        return Fo(l.value, n.value, U) && !H;
      }
      return !1;
    }
    return !1;
  }, P = (U, H) => U.quarter === hu(H) && U.year === Ne(H), C = (U) => typeof o.value == "function" ? o.value({ quarter: hu(U), year: Ne(U) }) : !!o.value.quarters.find((H) => P(H, U)), F = ne(() => (U) => {
    const H = Je(/* @__PURE__ */ new Date(), { year: c.value(U) });
    return Dg({
      start: Yd(H),
      end: Og(H)
    }).map((x) => {
      const M = or(x), q = vu(x), se = h(x), pe = k(M), J = C(M);
      return {
        text: b(M, q),
        value: M,
        active: S.value(M),
        highlighted: J,
        disabled: se,
        isBetween: pe
      };
    });
  }), X = (U) => {
    Gi(U, l, e.multiDatesLimit), t("auto-apply", !0);
  }, B = (U) => {
    l.value = zi(l, U, t), jo(l.value, t, e.autoApply, e.modelAuto);
  }, R = (U) => {
    l.value = U, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: y,
    year: c,
    isDisabled: A,
    quarters: F,
    showYearPicker: _,
    modelValue: l,
    setHoverDate: (U) => {
      n.value = U;
    },
    selectYear: v,
    selectQuarter: (U, H, x) => {
      if (!x)
        return d.value[H].month = Fe(vu(U)), e.multiDates ? X(U) : s.value.enabled ? B(U) : R(U);
    },
    toggleYearPicker: Y,
    handleYearSelect: j,
    handleYear: g
  };
}, ow = { class: "dp--quarter-items" }, sw = ["disabled", "onClick", "onMouseover"], iw = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...en
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = mr(), s = Vt(o, "yearMode"), {
      defaultedMultiCalendars: i,
      defaultedConfig: l,
      groupedYears: c,
      year: u,
      isDisabled: d,
      quarters: h,
      modelValue: v,
      showYearPicker: y,
      setHoverDate: _,
      selectQuarter: A,
      toggleYearPicker: Y,
      handleYearSelect: j,
      handleYear: g
    } = aw(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      year: u,
      selectQuarter: A,
      handleYearSelect: j,
      handleYear: g
    }) }), (b, S) => (V(), Ae(Yo, {
      "multi-calendars": T(i).count,
      collapse: b.collapse,
      stretch: ""
    }, {
      default: $e(({ instance: k }) => [
        Te("div", {
          class: "dp-quarter-picker-wrap",
          style: Ot({ minHeight: `${T(l).modeHeight}px` })
        }, [
          Te("div", null, [
            ze(hf, wt(b.$props, {
              items: T(c)(k),
              instance: k,
              "show-year-picker": T(y)[k],
              year: T(u)(k),
              "is-disabled": (P) => T(d)(k, P),
              onHandleYear: (P) => T(g)(k, P),
              onYearSelect: (P) => T(j)(P, k),
              onToggleYearPicker: (P) => T(Y)(k, P == null ? void 0 : P.flow, P == null ? void 0 : P.show)
            }), At({ _: 2 }, [
              Xe(T(s), (P, C) => ({
                name: P,
                fn: $e((F) => [
                  ge(b.$slots, P, mt(kt(F)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          Te("div", ow, [
            (V(!0), K(xe, null, Xe(T(h)(k), (P, C) => (V(), K("div", { key: C }, [
              Te("button", {
                type: "button",
                class: Ve(["dp--qr-btn", {
                  "dp--qr-btn-active": P.active,
                  "dp--qr-btn-between": P.isBetween,
                  "dp--qr-btn-disabled": P.disabled,
                  "dp--highlighted": P.highlighted
                }]),
                disabled: P.disabled,
                onClick: (F) => T(A)(P.value, k, P.disabled),
                onMouseover: (F) => T(_)(P.value)
              }, [
                b.$slots.quarter ? ge(b.$slots, "quarter", {
                  key: 0,
                  value: P.value,
                  text: P.text
                }) : (V(), K(xe, { key: 1 }, [
                  Jt(lt(P.text), 1)
                ], 64))
              ], 42, sw)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), lw = ["id", "aria-label"], uw = {
  key: 0,
  class: "dp--menu-load-container"
}, cw = /* @__PURE__ */ Te("span", { class: "dp--menu-loader" }, null, -1), dw = [
  cw
], fw = {
  key: 0,
  class: "dp__sidebar_left"
}, pw = ["onClick", "onKeydown"], mw = {
  key: 2,
  class: "dp__sidebar_right"
}, hw = {
  key: 3,
  class: "dp__action_extra"
}, Au = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Ho,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = oe(null), s = ne(() => {
      const { openOnTop: E, ...m } = a;
      return {
        ...m,
        flowStep: C.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: o.value
      };
    }), { setMenuFocused: i, setShiftKey: l, control: c } = pf(), u = mr(), { defaultedTextInput: d, defaultedInline: h, defaultedConfig: v } = ot(a), y = oe(null), _ = oe(0), A = oe(null), Y = oe(!1), j = oe(null);
    Tt(() => {
      if (!a.shadow) {
        Y.value = !0, g(), window.addEventListener("resize", g);
        const E = gt(o);
        if (E && !d.value.enabled && !h.value.enabled && (i(!0), U()), E) {
          const m = (w) => {
            v.value.allowPreventDefault && w.preventDefault(), In(w, v.value, !0);
          };
          E.addEventListener("pointerdown", m), E.addEventListener("mousedown", m);
        }
      }
    }), Rr(() => {
      window.removeEventListener("resize", g);
    });
    const g = () => {
      const E = gt(A);
      E && (_.value = E.getBoundingClientRect().width);
    }, { arrowRight: b, arrowLeft: S, arrowDown: k, arrowUp: P } = Wn(), { flowStep: C, updateFlowStep: F, childMount: X, resetFlow: B } = s1(a, r, j), R = ne(() => a.monthPicker ? x1 : a.yearPicker ? T1 : a.timePicker ? H1 : a.quarterPicker ? iw : rw), U = () => {
      const E = gt(o);
      E && E.focus({ preventScroll: !0 });
    }, H = ne(() => {
      var E;
      return ((E = j.value) == null ? void 0 : E.getSidebarProps()) || {};
    }), x = () => {
      a.openOnTop && r("recalculate-position");
    }, M = Vt(u, "action"), q = ne(() => a.monthPicker || a.yearPicker ? Vt(u, "monthYear") : a.timePicker ? Vt(u, "timePicker") : Vt(u, "shared")), se = ne(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), pe = ne(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), J = ne(
      () => ({
        dp__menu: !0,
        dp__menu_index: !h.value.enabled,
        dp__relative: h.value.enabled,
        [a.menuClassName]: !!a.menuClassName
      })
    ), p = (E) => {
      In(E, v.value, !0);
    }, f = () => {
      a.escClose && r("close-picker");
    }, O = (E) => {
      if (a.arrowNavigation) {
        if (E === "up")
          return P();
        if (E === "down")
          return k();
        if (E === "left")
          return S();
        if (E === "right")
          return b();
      } else
        E === "left" || E === "up" ? Ie("handleArrow", "left", 0, E === "up") : Ie("handleArrow", "right", 0, E === "down");
    }, z = (E) => {
      l(E.shiftKey), !a.disableMonthYearSelect && E.code === "Tab" && E.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (E.preventDefault(), In(E, v.value, !0), r("close-picker"));
    }, ce = () => {
      U(), r("time-picker-close");
    }, $ = (E) => {
      var m, w, N;
      (m = j.value) == null || m.toggleTimePicker(!1, !1), (w = j.value) == null || w.toggleMonthPicker(!1, !1, E), (N = j.value) == null || N.toggleYearPicker(!1, !1, E);
    }, Pe = (E, m = 0) => {
      var w, N, G;
      return E === "month" ? (w = j.value) == null ? void 0 : w.toggleMonthPicker(!1, !0, m) : E === "year" ? (N = j.value) == null ? void 0 : N.toggleYearPicker(!1, !0, m) : E === "time" ? (G = j.value) == null ? void 0 : G.toggleTimePicker(!0, !1) : $(m);
    }, Ie = (E, ...m) => {
      var w, N;
      (w = j.value) != null && w[E] && ((N = j.value) == null || N[E](...m));
    }, L = () => {
      Ie("selectCurrentDate");
    }, ve = (E, m) => {
      Ie("presetDate", E, m);
    }, Ce = () => {
      Ie("clearHoverDate");
    };
    return t({
      updateMonthYear: (E, m) => {
        Ie("updateMonthYear", E, m);
      },
      switchView: Pe
    }), (E, m) => {
      var w, N, G;
      return V(), K("div", {
        id: E.uid ? `dp-menu-${E.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: o,
        tabindex: "0",
        role: "dialog",
        "aria-label": (w = E.ariaLabels) == null ? void 0 : w.menu,
        class: Ve(J.value),
        onMouseleave: Ce,
        onClick: p,
        onKeydown: [
          De(f, ["esc"]),
          m[18] || (m[18] = De(Ge((D) => O("left"), ["prevent"]), ["left"])),
          m[19] || (m[19] = De(Ge((D) => O("up"), ["prevent"]), ["up"])),
          m[20] || (m[20] = De(Ge((D) => O("down"), ["prevent"]), ["down"])),
          m[21] || (m[21] = De(Ge((D) => O("right"), ["prevent"]), ["right"])),
          z
        ]
      }, [
        (E.disabled || E.readonly) && T(h).enabled || E.loading ? (V(), K("div", {
          key: 0,
          class: Ve(pe.value)
        }, [
          E.loading ? (V(), K("div", uw, dw)) : te("", !0)
        ], 2)) : te("", !0),
        !T(h).enabled && !E.teleportCenter ? (V(), K("div", {
          key: 1,
          class: Ve(se.value)
        }, null, 2)) : te("", !0),
        Te("div", {
          ref_key: "innerMenuRef",
          ref: A,
          class: Ve({
            dp__menu_content_wrapper: ((N = E.presetDates) == null ? void 0 : N.length) || !!E.$slots["left-sidebar"] || !!E.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((G = E.presetDates) == null ? void 0 : G.length) || !!E.$slots["left-sidebar"] || !!E.$slots["right-sidebar"]
          }),
          style: Ot({ "--dp-menu-width": `${_.value}px` })
        }, [
          E.$slots["left-sidebar"] ? (V(), K("div", fw, [
            ge(E.$slots, "left-sidebar", mt(kt(H.value)))
          ])) : te("", !0),
          E.presetDates.length ? (V(), K("div", {
            key: 1,
            class: Ve({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (V(!0), K(xe, null, Xe(E.presetDates, (D, re) => (V(), K(xe, { key: re }, [
              D.slot ? ge(E.$slots, D.slot, {
                key: 0,
                presetDate: ve,
                label: D.label,
                value: D.value
              }) : (V(), K("button", {
                key: 1,
                type: "button",
                style: Ot(D.style || {}),
                class: Ve(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ge((le) => ve(D.value, D.noTz), ["prevent"]),
                onKeydown: [
                  De(Ge((le) => ve(D.value, D.noTz), ["prevent"]), ["enter"]),
                  De(Ge((le) => ve(D.value, D.noTz), ["prevent"]), ["space"])
                ]
              }, lt(D.label), 47, pw))
            ], 64))), 128))
          ], 2)) : te("", !0),
          Te("div", {
            ref_key: "calendarWrapperRef",
            ref: y,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (V(), Ae(_o(R.value), wt({
              ref_key: "dynCmpRef",
              ref: j
            }, s.value, {
              "flow-step": T(C),
              onMount: T(X),
              onUpdateFlowStep: T(F),
              onResetFlow: T(B),
              onFocusMenu: U,
              onSelectDate: m[0] || (m[0] = (D) => E.$emit("select-date")),
              onDateUpdate: m[1] || (m[1] = (D) => E.$emit("date-update", D)),
              onTooltipOpen: m[2] || (m[2] = (D) => E.$emit("tooltip-open", D)),
              onTooltipClose: m[3] || (m[3] = (D) => E.$emit("tooltip-close", D)),
              onAutoApply: m[4] || (m[4] = (D) => E.$emit("auto-apply", D)),
              onRangeStart: m[5] || (m[5] = (D) => E.$emit("range-start", D)),
              onRangeEnd: m[6] || (m[6] = (D) => E.$emit("range-end", D)),
              onInvalidFixedRange: m[7] || (m[7] = (D) => E.$emit("invalid-fixed-range", D)),
              onTimeUpdate: m[8] || (m[8] = (D) => E.$emit("time-update")),
              onAmPmChange: m[9] || (m[9] = (D) => E.$emit("am-pm-change", D)),
              onTimePickerOpen: m[10] || (m[10] = (D) => E.$emit("time-picker-open", D)),
              onTimePickerClose: ce,
              onRecalculatePosition: x,
              onUpdateMonthYear: m[11] || (m[11] = (D) => E.$emit("update-month-year", D)),
              onAutoApplyInvalid: m[12] || (m[12] = (D) => E.$emit("auto-apply-invalid", D)),
              onInvalidDate: m[13] || (m[13] = (D) => E.$emit("invalid-date", D)),
              "onUpdate:internalModelValue": m[14] || (m[14] = (D) => E.$emit("update:internal-model-value", D))
            }), At({ _: 2 }, [
              Xe(q.value, (D, re) => ({
                name: D,
                fn: $e((le) => [
                  ge(E.$slots, D, mt(kt({ ...le })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          E.$slots["right-sidebar"] ? (V(), K("div", mw, [
            ge(E.$slots, "right-sidebar", mt(kt(H.value)))
          ])) : te("", !0),
          E.$slots["action-extra"] ? (V(), K("div", hw, [
            E.$slots["action-extra"] ? ge(E.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: L
            }) : te("", !0)
          ])) : te("", !0)
        ], 6),
        !E.autoApply || T(v).keepActionRow ? (V(), Ae(p1, wt({
          key: 2,
          "menu-mount": Y.value
        }, s.value, {
          "calendar-width": _.value,
          onClosePicker: m[15] || (m[15] = (D) => E.$emit("close-picker")),
          onSelectDate: m[16] || (m[16] = (D) => E.$emit("select-date")),
          onInvalidSelect: m[17] || (m[17] = (D) => E.$emit("invalid-select")),
          onSelectNow: L
        }), At({ _: 2 }, [
          Xe(T(M), (D, re) => ({
            name: D,
            fn: $e((le) => [
              ge(E.$slots, D, mt(kt({ ...le })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : te("", !0)
      ], 42, lw);
    };
  }
}), vw = typeof window < "u" ? window : void 0, ws = () => {
}, yw = (e) => ei() ? (Bu(e), !0) : !1, gw = (e, t, n, r) => {
  if (!e)
    return ws;
  let a = ws;
  const o = bt(
    () => T(e),
    (i) => {
      a(), i && (i.addEventListener(t, n, r), a = () => {
        i.removeEventListener(t, n, r), a = ws;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    o(), a();
  };
  return yw(s), s;
}, bw = (e, t, n, r = {}) => {
  const { window: a = vw, event: o = "pointerdown" } = r;
  return a ? gw(a, o, (s) => {
    const i = gt(e), l = gt(t);
    !i || !l || i === s.target || s.composedPath().includes(i) || s.composedPath().includes(l) || n(s);
  }, { passive: !0 }) : void 0;
}, _w = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Ho
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = mr(), s = oe(!1), i = Ga(a, "modelValue"), l = Ga(a, "timezone"), c = oe(null), u = oe(null), d = oe(null), h = oe(!1), v = oe(null), y = oe(!1), _ = oe(!1), A = oe(!1), { setMenuFocused: Y, setShiftKey: j } = pf(), { clearArrowNav: g } = Wn(), { validateDate: b, isValidTime: S } = qn(a), { defaultedTransitions: k, defaultedTextInput: P, defaultedInline: C, defaultedConfig: F, defaultedRange: X } = ot(a), { menuTransition: B, showTransition: R } = Ma(k);
    Tt(() => {
      O(a.modelValue), Qt().then(() => {
        if (!C.value.enabled) {
          const Z = pe(v.value);
          Z == null || Z.addEventListener("scroll", E), window == null || window.addEventListener("resize", m);
        }
      }), C.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", w), window == null || window.addEventListener("keydown", N);
    }), Rr(() => {
      if (!C.value.enabled) {
        const Z = pe(v.value);
        Z == null || Z.removeEventListener("scroll", E), window == null || window.removeEventListener("resize", m);
      }
      window == null || window.removeEventListener("keyup", w), window == null || window.removeEventListener("keydown", N);
    });
    const U = Vt(o, "all", a.presetDates), H = Vt(o, "input");
    bt(
      [i, l],
      () => {
        O(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: x, menuStyle: M, xCorrect: q, setMenuPosition: se, getScrollableParent: pe, shadowRender: J } = n1({
      menuRef: c,
      menuRefInner: u,
      inputRef: d,
      pickerWrapperRef: v,
      inline: C,
      emit: r,
      props: a,
      slots: o
    }), {
      inputValue: p,
      internalModelValue: f,
      parseExternalModelValue: O,
      emitModelValue: z,
      formatInputValue: ce,
      checkBeforeEmit: $
    } = e1(r, a, h), Pe = ne(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: C.value.enabled,
        "dp--flex-display-collapsed": A.value,
        dp__flex_display_with_input: C.value.input
      })
    ), Ie = ne(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), L = ne(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || C.value.enabled
    })), ve = ne(() => ({ class: "dp__outer_menu_wrap" })), Ce = ne(() => C.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), E = () => {
      s.value && (F.value.closeOnScroll ? me() : se());
    }, m = () => {
      var Z;
      s.value && se();
      const he = (Z = u.value) == null ? void 0 : Z.$el.getBoundingClientRect().width;
      A.value = document.body.offsetWidth <= he;
    }, w = (Z) => {
      Z.key === "Tab" && !C.value.enabled && !a.teleport && F.value.tabOutClosesMenu && (v.value.contains(document.activeElement) || me()), _.value = Z.shiftKey;
    }, N = (Z) => {
      _.value = Z.shiftKey;
    }, G = () => {
      !a.disabled && !a.readonly && (J(Au, a), se(!1), s.value = !0, s.value && r("open"), s.value || de(), O(a.modelValue));
    }, D = () => {
      var Z;
      p.value = "", de(), (Z = d.value) == null || Z.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), F.value.closeOnClearValue && me();
    }, re = () => {
      const Z = f.value;
      return !Z || !Array.isArray(Z) && b(Z) ? !0 : Array.isArray(Z) ? a.multiDates || Z.length === 2 && b(Z[0]) && b(Z[1]) ? !0 : X.value.partialRange && !a.timePicker ? b(Z[0]) : !1 : !1;
    }, le = () => {
      $() && re() ? (z(), me()) : r("invalid-select", f.value);
    }, ie = (Z) => {
      ue(), z(), F.value.closeOnAutoApply && !Z && me();
    }, ue = () => {
      d.value && P.value.enabled && d.value.setParsedDate(f.value);
    }, ee = (Z = !1) => {
      a.autoApply && S(f.value) && re() && (X.value.enabled && Array.isArray(f.value) ? (X.value.partialRange || f.value.length === 2) && ie(Z) : ie(Z));
    }, de = () => {
      P.value.enabled || (f.value = null);
    }, me = () => {
      C.value.enabled || (s.value && (s.value = !1, q.value = !1, Y(!1), j(!1), g(), r("closed"), p.value && O(i.value)), de(), r("blur"));
    }, be = (Z, he, ye = !1) => {
      if (!Z) {
        f.value = null;
        return;
      }
      const Bt = Array.isArray(Z) ? !Z.some((Gn) => !b(Gn)) : b(Z), tn = S(Z);
      Bt && tn && (f.value = Z, he && (y.value = ye, le(), r("text-submit")));
    }, Me = () => {
      a.autoApply && S(f.value) && z(), ue();
    }, Re = () => s.value ? me() : G(), Ye = (Z) => {
      f.value = Z;
    }, qe = () => {
      P.value.enabled && (h.value = !0, ce()), r("focus");
    }, st = () => {
      if (P.value.enabled && (h.value = !1, O(a.modelValue), y.value)) {
        const Z = D_(v.value, _.value);
        Z == null || Z.focus();
      }
      r("blur");
    }, I = (Z) => {
      u.value && u.value.updateMonthYear(0, {
        month: Su(Z.month),
        year: Su(Z.year)
      });
    }, ae = (Z) => {
      O(Z ?? a.modelValue);
    }, _e = (Z, he) => {
      var ye;
      (ye = u.value) == null || ye.switchView(Z, he);
    }, ke = (Z) => F.value.onClickOutside ? F.value.onClickOutside(Z) : me();
    return bw(c, d, () => ke(re)), t({
      closeMenu: me,
      selectDate: le,
      clearValue: D,
      openMenu: G,
      onScroll: E,
      formatInputValue: ce,
      // exposed for testing purposes
      updateInternalModelValue: Ye,
      // modify internal modelValue
      setMonthYear: I,
      parseModel: ae,
      switchView: _e,
      toggleMenu: Re
    }), (Z, he) => (V(), K("div", {
      ref_key: "pickerWrapperRef",
      ref: v,
      class: Ve(Pe.value),
      "data-datepicker-instance": ""
    }, [
      ze(c1, wt({
        ref_key: "inputRef",
        ref: d,
        "input-value": T(p),
        "onUpdate:inputValue": he[0] || (he[0] = (ye) => at(p) ? p.value = ye : null),
        "is-menu-open": s.value
      }, Z.$props, {
        onClear: D,
        onOpen: G,
        onSetInputDate: be,
        onSetEmptyDate: T(z),
        onSelectDate: le,
        onToggle: Re,
        onClose: me,
        onFocus: qe,
        onBlur: st,
        onRealBlur: he[1] || (he[1] = (ye) => h.value = !1)
      }), At({ _: 2 }, [
        Xe(T(H), (ye, Bt) => ({
          name: ye,
          fn: $e((tn) => [
            ge(Z.$slots, ye, mt(kt(tn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (V(), Ae(_o(Z.teleport ? gm : "div"), mt(kt(L.value)), {
        default: $e(() => [
          ze(Un, {
            name: T(B)(T(x)),
            css: T(R) && !T(C).enabled
          }, {
            default: $e(() => [
              s.value ? (V(), K("div", wt({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, ve.value, {
                class: { "dp--menu-wrapper": !T(C).enabled },
                style: T(C).enabled ? void 0 : T(M)
              }), [
                ze(Au, wt({
                  ref_key: "dpMenuRef",
                  ref: u
                }, Z.$props, {
                  "internal-model-value": T(f),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ye) => at(f) ? f.value = ye : null),
                  class: { [Ie.value]: !0, "dp--menu-wrapper": Z.teleport },
                  "open-on-top": T(x),
                  "no-overlay-focus": Ce.value,
                  collapse: A.value,
                  onClosePicker: me,
                  onSelectDate: le,
                  onAutoApply: ee,
                  onTimeUpdate: Me,
                  onFlowStep: he[3] || (he[3] = (ye) => Z.$emit("flow-step", ye)),
                  onUpdateMonthYear: he[4] || (he[4] = (ye) => Z.$emit("update-month-year", ye)),
                  onInvalidSelect: he[5] || (he[5] = (ye) => Z.$emit("invalid-select", T(f))),
                  onAutoApplyInvalid: he[6] || (he[6] = (ye) => Z.$emit("invalid-select", ye)),
                  onInvalidFixedRange: he[7] || (he[7] = (ye) => Z.$emit("invalid-fixed-range", ye)),
                  onRecalculatePosition: T(se),
                  onTooltipOpen: he[8] || (he[8] = (ye) => Z.$emit("tooltip-open", ye)),
                  onTooltipClose: he[9] || (he[9] = (ye) => Z.$emit("tooltip-close", ye)),
                  onTimePickerOpen: he[10] || (he[10] = (ye) => Z.$emit("time-picker-open", ye)),
                  onTimePickerClose: he[11] || (he[11] = (ye) => Z.$emit("time-picker-close", ye)),
                  onAmPmChange: he[12] || (he[12] = (ye) => Z.$emit("am-pm-change", ye)),
                  onRangeStart: he[13] || (he[13] = (ye) => Z.$emit("range-start", ye)),
                  onRangeEnd: he[14] || (he[14] = (ye) => Z.$emit("range-end", ye)),
                  onDateUpdate: he[15] || (he[15] = (ye) => Z.$emit("date-update", ye)),
                  onInvalidDate: he[16] || (he[16] = (ye) => Z.$emit("invalid-date", ye))
                }), At({ _: 2 }, [
                  Xe(T(U), (ye, Bt) => ({
                    name: ye,
                    fn: $e((tn) => [
                      ge(Z.$slots, ye, mt(kt({ ...tn })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : te("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Ki = /* @__PURE__ */ (() => {
  const e = _w;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), ww = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ki
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ww).forEach(([e, t]) => {
  e !== "default" && (Ki[e] = t);
});
const Xi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, xw = { class: "input" }, Sw = ["min", "max"], Tw = ["accept"], Mw = ["disabled"], kw = ["value"], Ew = { key: 5 }, Dw = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ fi({
    mode: {
      type: Object,
      required: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = gi(e, "modelValue");
    function r(d) {
      n.value = d;
    }
    const a = oe(t.mode), o = ne(() => a.value.hasValues ? a.value.valuesNodes : []), s = () => o.value.length && o.value[0].type === _a, i = () => o.value.length && o.value[0].type === wa, l = () => o.value.length && o.value[0].type === xa, c = () => o.value.length && o.value[0].type === Ro, u = () => o.value.length && o.value[0].type === Si;
    return bt(
      () => t.mode,
      (d) => {
        console.log("watch.mode", d), a.value = d;
      }
    ), bt(o, (d, h) => {
      console.log(`values mode: ${a.value.id}, changed/oldVal:`, d, h);
    }), (d, h) => (V(), K("div", xw, [
      s() ? $n((V(), K("input", {
        key: 0,
        "onUpdate:modelValue": h[0] || (h[0] = (v) => n.value = v),
        type: "text"
      }, null, 512)), [
        [Il, n.value]
      ]) : i() ? $n((V(), K("input", {
        key: 1,
        class: "numberPicker",
        "onUpdate:modelValue": h[1] || (h[1] = (v) => n.value = v),
        type: "number",
        step: ".01",
        min: o.value[0].rangemin,
        max: o.value[0].rangemax
      }, null, 8, Sw)), [
        [
          Il,
          n.value,
          void 0,
          { number: !0 }
        ]
      ]) : c() ? (V(), Ae(T(Ki), {
        key: 2,
        modelValue: n.value,
        "onUpdate:modelValue": h[2] || (h[2] = (v) => n.value = v),
        min: o.value[0].datemin,
        max: o.value[0].datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : l() ? (V(), K("input", {
        key: 3,
        type: "file",
        accept: o.value[0].fileExtension
      }, null, 8, Tw)) : u() ? $n((V(), K("select", {
        key: 4,
        "onUpdate:modelValue": h[3] || (h[3] = (v) => n.value = v),
        disabled: o.value.length < 2,
        "on:update:modelValue": r
      }, [
        (V(!0), K(xe, null, Xe(o.value, (v) => (V(), K("option", {
          key: v.id,
          value: v
        }, lt(v.name), 9, kw))), 128))
      ], 40, Mw)), [
        [Bc, n.value]
      ]) : (V(), K("span", Ew, "No values!")),
      Jt(" " + lt(" "))
    ]));
  }
}, Ow = /* @__PURE__ */ Xi(Dw, [["__scopeId", "data-v-4d6e64fe"]]), Aw = { class: "inputsystem-panel" }, Pw = { class: "input-mode-panel" }, Cw = { class: "title" }, Rw = { class: "value-selector" }, Nw = {
  __name: "InputSystemPanel",
  props: /* @__PURE__ */ fi({
    subsystem: {
      type: Object,
      required: !0
    },
    modes: {
      type: Array,
      required: !0
    },
    mode: {
      type: Object,
      required: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    function t(c) {
      return !c.hasSubsystems && !c.hasRealValues && c.hasValues && c.currentMode.hasValues;
    }
    function n(c) {
      return !c.hasRealValues && !c.currentMode.hasValues && !c.currentMode.hasModes;
    }
    function r(c) {
      return !t(c) && !n(c);
    }
    function a(c, u) {
      return u.length > 1 || t(c) || n(c);
    }
    const o = Oi(), s = e, i = oe(s.mode), l = gi(e, "modelValue");
    return l.value = o.getSystemValue(s.subsystem, i.value), bt(l, async (c) => {
      o.setSystemValue(s.subsystem, c);
    }), bt(i, (c) => {
      console.log("watch_input: currentMode.set() mode:", c), l.value = o.getSystemValue(s.subsystem, c), console.log("currentMode.set() value:", l.value);
    }), bt(
      () => s.mode,
      (c) => {
        console.log("new props.mode:", c), i.value = c;
      }
    ), (c, u) => (V(), K("div", Aw, [
      Te("div", Pw, [
        Te("span", Cw, lt(e.subsystem.label || e.subsystem.name), 1),
        Te("span", Rw, [
          a(e.subsystem, e.modes) ? (V(), Ae($d, {
            key: 0,
            class: "mode-selector",
            modelValue: i.value,
            "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value = d),
            modes: e.modes
          }, null, 8, ["modelValue", "modes"])) : te("", !0),
          r(e.subsystem) ? (V(), Ae(Ow, {
            key: 1,
            mode: i.value,
            modelValue: l.value,
            "onUpdate:modelValue": u[1] || (u[1] = (d) => l.value = d)
          }, null, 8, ["mode", "modelValue"])) : te("", !0)
        ])
      ])
    ]));
  }
}, Pu = /* @__PURE__ */ Xi(Nw, [["__scopeId", "data-v-c9c9e321"]]), $w = {
  key: 0,
  class: "subsystem-panel"
}, Iw = {
  key: 0,
  class: "title"
}, Vw = {
  key: 1,
  class: "mode-selector"
}, Lw = {
  __name: "SubSystemPanel",
  props: {
    system: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    function t(d) {
      return !d.hasRealValues && d.hasValues && d.currentMode.hasValues;
    }
    function n(d) {
      return !d.hasRealValues && !d.currentMode.hasValues && !d.currentMode.hasModes && !d.hasSubsystems;
    }
    function r(d) {
      return !a(d);
      //!s0.hasRealValues && !(s1.hasRealValues || fakeParam(s1)) && !fakeParamWithNoValue(s0)
    }
    function a(d) {
      return d.hasRealValues || t(d) || n(d);
    }
    function o(d) {
      return !d.currentMode.hasValues && !d.currentMode.hasModes || d.getValidModes().length > 1;
    }
    function s(d) {
      return d.getValidModes().length > 0 && !d.hasRealValues;
    }
    const i = Oi(), u = oe(e.system).value;
    return u.candidateMode = u.currentMode, ne(() => u.getValidModes()), bt(u.candidateMode, (d) => {
      var h, v;
      console.log(
        `watch.mode. mode ${(h = u.currentMode) == null ? void 0 : h.name}, newMode :${(v = u.candidateMode) == null ? void 0 : v.name}`
      ), u.candidateMode != null && u.candidateMode != u.currentMode && i.setValidMode(u, u.candidateMode);
    }), (d, h) => {
      const v = Ap("SubSystemPanel", !0);
      return V(), K(xe, null, [
        s(T(u)) ? (V(), K("div", $w, [
          T(u).label != "-" ? (V(), K("h3", Iw, lt(T(u).label || T(u).name), 1)) : te("", !0),
          o(T(u)) ? (V(), K("div", Vw, [
            ze($d, {
              modelValue: T(u).candidateMode,
              "onUpdate:modelValue": h[0] || (h[0] = (y) => T(u).candidateMode = y),
              modes: T(u).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : te("", !0),
          (V(!0), K(xe, null, Xe(T(u).getActiveSubnodes(), (y) => (V(), K(xe, {
            key: y.id
          }, [
            r(y) ? (V(), Ae(v, {
              key: 0,
              system: y
            }, null, 8, ["system"])) : te("", !0),
            a(y) ? (V(), Ae(Pu, {
              key: 1,
              subsystem: y,
              modes: y.getValidModes(),
              mode: y.currentMode
            }, null, 8, ["subsystem", "modes", "mode"])) : te("", !0)
          ], 64))), 128))
        ])) : te("", !0),
        a(T(u)) ? (V(), Ae(Pu, {
          key: 1,
          subsystem: T(u),
          modes: T(u).getValidModes(),
          mode: T(u).currentMode
        }, null, 8, ["subsystem", "modes", "mode"])) : te("", !0)
      ], 64);
    };
  }
}, Fw = { class: "poris-main" }, Bw = {
  key: 0,
  class: "panel"
}, Hw = { class: "title" }, Yw = {
  __name: "ConfigPanelView",
  props: {
    modelPath: {
      type: String
    }
  },
  setup(e) {
    const t = Oi(), n = ne(() => t.rootSubsystem), r = e;
    return r.modelPath && t.loadModelURL(r.modelPath), (a, o) => (V(), K("div", Fw, [
      n.value ? (V(), K("div", Bw, [
        Te("h2", Hw, lt(n.value.name) + " Panel", 1),
        ze(Lw, { system: n.value }, null, 8, ["system"])
      ])) : te("", !0)
    ]));
  }
}, jw = /* @__PURE__ */ Xi(Yw, [["__scopeId", "data-v-bfff9864"]]);
function Ww(e, t) {
  const r = sh(jw, { modelPath: e });
  r.use(ch()), r.mount(t);
}
export {
  Ww as createPorisViewerPanel
};
//# sourceMappingURL=prod.js.map
