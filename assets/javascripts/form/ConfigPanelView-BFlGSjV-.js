var eh = Object.defineProperty;
var th = (e, t, n) => t in e ? eh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var me = (e, t, n) => th(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $n(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Ke = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, eo = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], yt = () => {
}, nh = () => !1, ea = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ia = (e) => e.startsWith("onUpdate:"), tt = Object.assign, Ji = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rh = Object.prototype.hasOwnProperty, Be = (e, t) => rh.call(e, t), ye = Array.isArray, xr = (e) => ta(e) === "[object Map]", as = (e) => ta(e) === "[object Set]", nu = (e) => ta(e) === "[object Date]", ke = (e) => typeof e == "function", nt = (e) => typeof e == "string", rr = (e) => typeof e == "symbol", We = (e) => e !== null && typeof e == "object", Zi = (e) => (We(e) || ke(e)) && ke(e.then) && ke(e.catch), qc = Object.prototype.toString, ta = (e) => qc.call(e), el = (e) => ta(e).slice(8, -1), Gc = (e) => ta(e) === "[object Object]", tl = (e) => nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mo = /* @__PURE__ */ $n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), oh = /* @__PURE__ */ $n(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ss = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ah = /-(\w)/g, an = ss((e) => e.replace(ah, (t, n) => n ? n.toUpperCase() : "")), sh = /\B([A-Z])/g, wn = ss(
  (e) => e.replace(sh, "-$1").toLowerCase()
), Rr = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), vr = ss((e) => e ? `on${Rr(e)}` : ""), En = (e, t) => !Object.is(e, t), zr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Fa = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ho = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ih = (e) => {
  const t = nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ru;
const nl = () => ru || (ru = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = nt(r) ? dh(r) : Vt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (nt(e) || We(e))
    return e;
}
const lh = /;(?![^(]*\))/g, uh = /:([^]+)/, ch = /\/\*[^]*?\*\//g;
function dh(e) {
  const t = {};
  return e.replace(ch, "").split(lh).forEach((n) => {
    if (n) {
      const r = n.split(uh);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function je(e) {
  let t = "";
  if (nt(e))
    t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const r = je(e[n]);
      r && (t += r + " ");
    }
  else if (We(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function bt(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !nt(t) && (e.class = je(t)), n && (e.style = Vt(n)), e;
}
const fh = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ph = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hh = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", mh = /* @__PURE__ */ $n(fh), vh = /* @__PURE__ */ $n(ph), yh = /* @__PURE__ */ $n(hh), gh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bh = /* @__PURE__ */ $n(gh);
function zc(e) {
  return !!e || e === "";
}
function _h(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = is(e[r], t[r]);
  return n;
}
function is(e, t) {
  if (e === t)
    return !0;
  let n = nu(e), r = nu(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = rr(e), r = rr(t), n || r)
    return e === t;
  if (n = ye(e), r = ye(t), n || r)
    return n && r ? _h(e, t) : !1;
  if (n = We(e), r = We(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const s in e) {
      const i = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (i && !l || !i && l || !is(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function wh(e, t) {
  return e.findIndex((n) => is(n, t));
}
const ct = (e) => nt(e) ? e : e == null ? "" : ye(e) || We(e) && (e.toString === qc || !ke(e.toString)) ? JSON.stringify(e, Kc, 2) : String(e), Kc = (e, t) => t && t.__v_isRef ? Kc(e, t.value) : xr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Bs(r, a) + " =>"] = o, n),
    {}
  )
} : as(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Bs(n))
} : rr(t) ? Bs(t) : We(t) && !ye(t) && !Gc(t) ? String(t) : t, Bs = (e, t = "") => {
  var n;
  return rr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function On(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ht;
class Qc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ht, !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ht;
      try {
        return Ht = this, t();
      } finally {
        Ht = n;
      }
    } else process.env.NODE_ENV !== "production" && On("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ht = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ht = this.parent;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xc(e) {
  return new Qc(e);
}
function Eh(e, t = Ht) {
  t && t.active && t.effects.push(e);
}
function rl() {
  return Ht;
}
function Jc(e) {
  Ht ? Ht.cleanups.push(e) : process.env.NODE_ENV !== "production" && On(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Dr;
class ol {
  constructor(t, n, r, o) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Eh(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, sr();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Oh(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ir();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Xn, n = Dr;
    try {
      return Xn = !0, Dr = this, this._runnings++, ou(this), this.fn();
    } finally {
      au(this), this._runnings--, Dr = n, Xn = t;
    }
  }
  stop() {
    var t;
    this.active && (ou(this), au(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Oh(e) {
  return e.value;
}
function ou(e) {
  e._trackId++, e._depsLength = 0;
}
function au(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Zc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Zc(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Xn = !0, yi = 0;
const ed = [];
function sr() {
  ed.push(Xn), Xn = !1;
}
function ir() {
  const e = ed.pop();
  Xn = e === void 0 ? !0 : e;
}
function al() {
  yi++;
}
function sl() {
  for (yi--; !yi && gi.length; )
    gi.shift()();
}
function td(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Zc(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, tt({ effect: e }, n)));
  }
}
const gi = [];
function nd(e, t, n) {
  var r;
  al();
  for (const o of e.keys()) {
    let a;
    o._dirtyLevel < t && (a ?? (a = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (a ?? (a = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((r = o.onTrigger) == null || r.call(o, tt({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && gi.push(o.scheduler)));
  }
  sl();
}
const rd = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, La = /* @__PURE__ */ new WeakMap(), Tr = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), bi = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function kt(e, t, n) {
  if (Xn && Dr) {
    let r = La.get(e);
    r || La.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = rd(() => r.delete(n))), td(
      Dr,
      o,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function vn(e, t, n, r, o, a) {
  const s = La.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (n === "length" && ye(e)) {
    const l = Number(r);
    s.forEach((c, d) => {
      (d === "length" || !rr(d) && d >= l) && i.push(c);
    });
  } else
    switch (n !== void 0 && i.push(s.get(n)), t) {
      case "add":
        ye(e) ? tl(n) && i.push(s.get("length")) : (i.push(s.get(Tr)), xr(e) && i.push(s.get(bi)));
        break;
      case "delete":
        ye(e) || (i.push(s.get(Tr)), xr(e) && i.push(s.get(bi)));
        break;
      case "set":
        xr(e) && i.push(s.get(Tr));
        break;
    }
  al();
  for (const l of i)
    l && nd(
      l,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: o,
        oldTarget: a
      } : void 0
    );
  sl();
}
function Nh(e, t) {
  var n;
  return (n = La.get(e)) == null ? void 0 : n.get(t);
}
const xh = /* @__PURE__ */ $n("__proto__,__v_isRef,__isVue"), od = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rr)
), su = /* @__PURE__ */ Dh();
function Dh() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Se(this);
      for (let a = 0, s = this.length; a < s; a++)
        kt(r, "get", a + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(Se)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      sr(), al();
      const r = Se(this)[t].apply(this, n);
      return sl(), ir(), r;
    };
  }), e;
}
function Th(e) {
  const t = Se(this);
  return kt(t, "has", e), t.hasOwnProperty(e);
}
class ad {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (o ? a ? fd : dd : a ? cd : ud).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = ye(t);
    if (!o) {
      if (s && Be(su, n))
        return Reflect.get(su, n, r);
      if (n === "hasOwnProperty")
        return Th;
    }
    const i = Reflect.get(t, n, r);
    return (rr(n) ? od.has(n) : xh(n)) || (o || kt(t, "get", n), a) ? i : rt(i) ? s && tl(n) ? i : i.value : We(i) ? o ? pd(i) : Rn(i) : i;
  }
}
class sd extends ad {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    if (!this._isShallow) {
      const l = or(a);
      if (!kr(r) && !or(r) && (a = Se(a), r = Se(r)), !ye(t) && rt(a) && !rt(r))
        return l ? !1 : (a.value = r, !0);
    }
    const s = ye(t) && tl(n) ? Number(n) < t.length : Be(t, n), i = Reflect.set(t, n, r, o);
    return t === Se(o) && (s ? En(r, a) && vn(t, "set", n, r, a) : vn(t, "add", n, r)), i;
  }
  deleteProperty(t, n) {
    const r = Be(t, n), o = t[n], a = Reflect.deleteProperty(t, n);
    return a && r && vn(t, "delete", n, void 0, o), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!rr(n) || !od.has(n)) && kt(t, "has", n), r;
  }
  ownKeys(t) {
    return kt(
      t,
      "iterate",
      ye(t) ? "length" : Tr
    ), Reflect.ownKeys(t);
  }
}
class id extends ad {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && On(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && On(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const kh = /* @__PURE__ */ new sd(), Sh = /* @__PURE__ */ new id(), Mh = /* @__PURE__ */ new sd(
  !0
), Ph = /* @__PURE__ */ new id(!0), il = (e) => e, ls = (e) => Reflect.getPrototypeOf(e);
function va(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = Se(e), a = Se(t);
  n || (En(t, a) && kt(o, "get", t), kt(o, "get", a));
  const { has: s } = ls(o), i = r ? il : n ? ll : Yo;
  if (s.call(o, t))
    return i(e.get(t));
  if (s.call(o, a))
    return i(e.get(a));
  e !== o && e.get(t);
}
function ya(e, t = !1) {
  const n = this.__v_raw, r = Se(n), o = Se(e);
  return t || (En(e, o) && kt(r, "has", e), kt(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function ga(e, t = !1) {
  return e = e.__v_raw, !t && kt(Se(e), "iterate", Tr), Reflect.get(e, "size", e);
}
function iu(e) {
  e = Se(e);
  const t = Se(this);
  return ls(t).has.call(t, e) || (t.add(e), vn(t, "add", e, e)), this;
}
function lu(e, t) {
  t = Se(t);
  const n = Se(this), { has: r, get: o } = ls(n);
  let a = r.call(n, e);
  a ? process.env.NODE_ENV !== "production" && ld(n, r, e) : (e = Se(e), a = r.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), a ? En(t, s) && vn(n, "set", e, t, s) : vn(n, "add", e, t), this;
}
function uu(e) {
  const t = Se(this), { has: n, get: r } = ls(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && ld(t, n, e) : (e = Se(e), o = n.call(t, e));
  const a = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && vn(t, "delete", e, void 0, a), s;
}
function cu() {
  const e = Se(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? xr(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && vn(e, "clear", void 0, void 0, n), r;
}
function ba(e, t) {
  return function(r, o) {
    const a = this, s = a.__v_raw, i = Se(s), l = t ? il : e ? ll : Yo;
    return !e && kt(i, "iterate", Tr), s.forEach((c, d) => r.call(o, l(c), l(d), a));
  };
}
function _a(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = Se(o), s = xr(a), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = o[e](...r), d = n ? il : t ? ll : Yo;
    return !t && kt(
      a,
      "iterate",
      l ? bi : Tr
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = c.next();
        return p ? { value: u, done: p } : {
          value: i ? [d(u[0]), d(u[1])] : d(u),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Fn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      On(
        `${Rr(e)} operation ${n}failed: target is readonly.`,
        Se(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ah() {
  const e = {
    get(a) {
      return va(this, a);
    },
    get size() {
      return ga(this);
    },
    has: ya,
    add: iu,
    set: lu,
    delete: uu,
    clear: cu,
    forEach: ba(!1, !1)
  }, t = {
    get(a) {
      return va(this, a, !1, !0);
    },
    get size() {
      return ga(this);
    },
    has: ya,
    add: iu,
    set: lu,
    delete: uu,
    clear: cu,
    forEach: ba(!1, !0)
  }, n = {
    get(a) {
      return va(this, a, !0);
    },
    get size() {
      return ga(this, !0);
    },
    has(a) {
      return ya.call(this, a, !0);
    },
    add: Fn("add"),
    set: Fn("set"),
    delete: Fn("delete"),
    clear: Fn("clear"),
    forEach: ba(!0, !1)
  }, r = {
    get(a) {
      return va(this, a, !0, !0);
    },
    get size() {
      return ga(this, !0);
    },
    has(a) {
      return ya.call(this, a, !0);
    },
    add: Fn("add"),
    set: Fn("set"),
    delete: Fn("delete"),
    clear: Fn("clear"),
    forEach: ba(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = _a(
      a,
      !1,
      !1
    ), n[a] = _a(
      a,
      !0,
      !1
    ), t[a] = _a(
      a,
      !1,
      !0
    ), r[a] = _a(
      a,
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
  Ch,
  $h,
  Rh,
  Vh
] = /* @__PURE__ */ Ah();
function us(e, t) {
  const n = t ? e ? Vh : Rh : e ? $h : Ch;
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    Be(n, o) && o in r ? n : r,
    o,
    a
  );
}
const Ih = {
  get: /* @__PURE__ */ us(!1, !1)
}, Fh = {
  get: /* @__PURE__ */ us(!1, !0)
}, Lh = {
  get: /* @__PURE__ */ us(!0, !1)
}, Bh = {
  get: /* @__PURE__ */ us(!0, !0)
};
function ld(e, t, n) {
  const r = Se(n);
  if (r !== n && t.call(e, r)) {
    const o = el(e);
    On(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ud = /* @__PURE__ */ new WeakMap(), cd = /* @__PURE__ */ new WeakMap(), dd = /* @__PURE__ */ new WeakMap(), fd = /* @__PURE__ */ new WeakMap();
function jh(e) {
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
function Hh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jh(el(e));
}
function Rn(e) {
  return or(e) ? e : cs(
    e,
    !1,
    kh,
    Ih,
    ud
  );
}
function Yh(e) {
  return cs(
    e,
    !1,
    Mh,
    Fh,
    cd
  );
}
function pd(e) {
  return cs(
    e,
    !0,
    Sh,
    Lh,
    dd
  );
}
function Xr(e) {
  return cs(
    e,
    !0,
    Ph,
    Bh,
    fd
  );
}
function cs(e, t, n, r, o) {
  if (!We(e))
    return process.env.NODE_ENV !== "production" && On(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = Hh(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, i), i;
}
function yn(e) {
  return or(e) ? yn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function or(e) {
  return !!(e && e.__v_isReadonly);
}
function kr(e) {
  return !!(e && e.__v_isShallow);
}
function Ba(e) {
  return yn(e) || or(e);
}
function Se(e) {
  const t = e && e.__v_raw;
  return t ? Se(t) : e;
}
function Pn(e) {
  return Object.isExtensible(e) && Fa(e, "__v_skip", !0), e;
}
const Yo = (e) => We(e) ? Rn(e) : e, ll = (e) => We(e) ? pd(e) : e, Uh = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class hd {
  constructor(t, n, r, o) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ol(
      () => t(this._value),
      () => Po(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Se(this);
    return (!t._cacheable || t.effect.dirty) && En(t._value, t._value = t.effect.run()) && Po(t, 4), ul(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && On(Uh, `

getter: `, this.getter), Po(t, 2)), t._value;
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
function Wh(e, t, n = !1) {
  let r, o;
  const a = ke(e);
  a ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    On("Write operation failed: computed value is readonly");
  } : yt) : (r = e.get, o = e.set);
  const s = new hd(r, o, a || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function ul(e) {
  var t;
  Xn && Dr && (e = Se(e), td(
    Dr,
    (t = e.dep) != null ? t : e.dep = rd(
      () => e.dep = void 0,
      e instanceof hd ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Po(e, t = 4, n) {
  e = Se(e);
  const r = e.dep;
  r && nd(
    r,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function rt(e) {
  return !!(e && e.__v_isRef === !0);
}
function se(e) {
  return md(e, !1);
}
function bN(e) {
  return md(e, !0);
}
function md(e, t) {
  return rt(e) ? e : new qh(e, t);
}
class qh {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Se(t), this._value = n ? t : Yo(t);
  }
  get value() {
    return ul(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || kr(t) || or(t);
    t = n ? t : Se(t), En(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Yo(t), Po(this, 4, t));
  }
}
function D(e) {
  return rt(e) ? e.value : e;
}
const Gh = {
  get: (e, t, n) => D(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return rt(o) && !rt(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function vd(e) {
  return yn(e) ? e : new Proxy(e, Gh);
}
class zh {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => ul(this),
      () => Po(this)
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
function Kh(e) {
  return new zh(e);
}
function du(e) {
  process.env.NODE_ENV !== "production" && !Ba(e) && On("toRefs() expects a reactive object but received a plain one.");
  const t = ye(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = yd(e, n);
  return t;
}
class Qh {
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
    return Nh(Se(this._object), this._key);
  }
}
class Xh {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Sr(e, t, n) {
  return rt(e) ? e : ke(e) ? new Xh(e) : We(e) && arguments.length > 1 ? yd(e, t, n) : se(e);
}
function yd(e, t, n) {
  const r = e[t];
  return rt(r) ? r : new Qh(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Mr = [];
function Ta(e) {
  Mr.push(e);
}
function ka() {
  Mr.pop();
}
function ue(e, ...t) {
  sr();
  const n = Mr.length ? Mr[Mr.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Jh();
  if (r)
    Cn(
      r,
      n,
      11,
      [
        e + t.map((a) => {
          var s, i;
          return (i = (s = a.toString) == null ? void 0 : s.call(a)) != null ? i : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: a }) => `at <${_s(n, a.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    o.length && a.push(`
`, ...Zh(o)), console.warn(...a);
  }
  ir();
}
function Jh() {
  let e = Mr[Mr.length - 1];
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
function Zh(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...em(n));
  }), t;
}
function em({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${_s(
    e.component,
    e.type,
    r
  )}`, a = ">" + n;
  return e.props ? [o, ...tm(e.props), a] : [o + a];
}
function tm(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...gd(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function gd(e, t, n) {
  return nt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : rt(t) ? (t = gd(e, Se(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ke(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Se(t), n ? t : [`${e}=`, t]);
}
function nm(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? ue(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && ue(`${t} is NaN - the duration expression might be incorrect.`));
}
const cl = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Cn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    na(o, t, n);
  }
}
function zt(e, t, n, r) {
  if (ke(e)) {
    const a = Cn(e, t, n, r);
    return a && Zi(a) && a.catch((s) => {
      na(s, t, n);
    }), a;
  }
  const o = [];
  for (let a = 0; a < e.length; a++)
    o.push(zt(e[a], t, n, r));
  return o;
}
function na(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const s = t.proxy, i = process.env.NODE_ENV !== "production" ? cl[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, s, i) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Cn(
        l,
        null,
        10,
        [e, s, i]
      );
      return;
    }
  }
  rm(e, n, o, r);
}
function rm(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = cl[t];
    if (n && Ta(n), ue(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && ka(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Uo = !1, _i = !1;
const At = [];
let fn = 0;
const to = [];
let Sn = null, Un = 0;
const bd = /* @__PURE__ */ Promise.resolve();
let dl = null;
const om = 100;
function Kt(e) {
  const t = dl || bd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function am(e) {
  let t = fn + 1, n = At.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = At[r], a = Wo(o);
    a < e || a === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ds(e) {
  (!At.length || !At.includes(
    e,
    Uo && e.allowRecurse ? fn + 1 : fn
  )) && (e.id == null ? At.push(e) : At.splice(am(e.id), 0, e), _d());
}
function _d() {
  !Uo && !_i && (_i = !0, dl = bd.then(Od));
}
function sm(e) {
  const t = At.indexOf(e);
  t > fn && At.splice(t, 1);
}
function wd(e) {
  ye(e) ? to.push(...e) : (!Sn || !Sn.includes(
    e,
    e.allowRecurse ? Un + 1 : Un
  )) && to.push(e), _d();
}
function fu(e, t, n = Uo ? fn + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < At.length; n++) {
    const r = At[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && fl(t, r))
        continue;
      At.splice(n, 1), n--, r();
    }
  }
}
function Ed(e) {
  if (to.length) {
    const t = [...new Set(to)].sort(
      (n, r) => Wo(n) - Wo(r)
    );
    if (to.length = 0, Sn) {
      Sn.push(...t);
      return;
    }
    for (Sn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Un = 0; Un < Sn.length; Un++)
      process.env.NODE_ENV !== "production" && fl(e, Sn[Un]) || Sn[Un]();
    Sn = null, Un = 0;
  }
}
const Wo = (e) => e.id == null ? 1 / 0 : e.id, im = (e, t) => {
  const n = Wo(e) - Wo(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Od(e) {
  _i = !1, Uo = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), At.sort(im);
  const t = process.env.NODE_ENV !== "production" ? (n) => fl(e, n) : yt;
  try {
    for (fn = 0; fn < At.length; fn++) {
      const n = At[fn];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Cn(n, null, 14);
      }
    }
  } finally {
    fn = 0, At.length = 0, Ed(e), Uo = !1, dl = null, (At.length || to.length) && Od(e);
  }
}
function fl(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > om) {
      const r = t.ownerInstance, o = r && wl(r.type);
      return na(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Jn = !1;
const Kr = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (nl().__VUE_HMR_RUNTIME__ = {
  createRecord: js(Nd),
  rerender: js(cm),
  reload: js(dm)
});
const Vr = /* @__PURE__ */ new Map();
function lm(e) {
  const t = e.type.__hmrId;
  let n = Vr.get(t);
  n || (Nd(t, e.type), n = Vr.get(t)), n.instances.add(e);
}
function um(e) {
  Vr.get(e.type.__hmrId).instances.delete(e);
}
function Nd(e, t) {
  return Vr.has(e) ? !1 : (Vr.set(e, {
    initialDef: Ao(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ao(e) {
  return af(e) ? e.__vccOpts : e;
}
function cm(e, t) {
  const n = Vr.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Ao(r.type).render = t), r.renderCache = [], Jn = !0, r.effect.dirty = !0, r.update(), Jn = !1;
  }));
}
function dm(e, t) {
  const n = Vr.get(e);
  if (!n)
    return;
  t = Ao(t), pu(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const a = Ao(o.type);
    Kr.has(a) || (a !== n.initialDef && pu(a, t), Kr.add(a)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (Kr.add(a), o.ceReload(t.styles), Kr.delete(a)) : o.parent ? (o.parent.effect.dirty = !0, ds(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  wd(() => {
    for (const o of r)
      Kr.delete(
        Ao(o.type)
      );
  });
}
function pu(e, t) {
  tt(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function js(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Zt, To = [], wi = !1;
function ra(e, ...t) {
  Zt ? Zt.emit(e, ...t) : wi || To.push({ event: e, args: t });
}
function pl(e, t) {
  var n, r;
  Zt = e, Zt ? (Zt.enabled = !0, To.forEach(({ event: o, args: a }) => Zt.emit(o, ...a)), To = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    pl(a, t);
  }), setTimeout(() => {
    Zt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, wi = !0, To = []);
  }, 3e3)) : (wi = !0, To = []);
}
function fm(e, t) {
  ra("app:init", e, t, {
    Fragment: Oe,
    Text: aa,
    Comment: Dt,
    Static: Sa
  });
}
function pm(e) {
  ra("app:unmount", e);
}
const hm = /* @__PURE__ */ hl(
  "component:added"
  /* COMPONENT_ADDED */
), xd = /* @__PURE__ */ hl(
  "component:updated"
  /* COMPONENT_UPDATED */
), mm = /* @__PURE__ */ hl(
  "component:removed"
  /* COMPONENT_REMOVED */
), vm = (e) => {
  Zt && typeof Zt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Zt.cleanupBuffer(e) && mm(e);
};
function hl(e) {
  return (t) => {
    ra(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ym = /* @__PURE__ */ Dd(
  "perf:start"
  /* PERFORMANCE_START */
), gm = /* @__PURE__ */ Dd(
  "perf:end"
  /* PERFORMANCE_END */
);
function Dd(e) {
  return (t, n, r) => {
    ra(e, t.appContext.app, t.uid, t, n, r);
  };
}
function bm(e, t, n) {
  ra(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function _m(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Ke;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(vr(t) in u)) && ue(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${vr(t)}" prop.`
        );
      else {
        const p = d[t];
        ke(p) && (p(...n) || ue(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const a = t.startsWith("update:"), s = a && t.slice(7);
  if (s && s in r) {
    const d = `${s === "modelValue" ? "model" : s}Modifiers`, { number: u, trim: p } = r[d] || Ke;
    p && (o = n.map((m) => nt(m) ? m.trim() : m)), u && (o = n.map(Ho));
  }
  if (process.env.NODE_ENV !== "production" && bm(e, t, o), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[vr(d)] && ue(
      `Event "${d}" is emitted in component ${_s(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${wn(
        t
      )}" instead of "${t}".`
    );
  }
  let i, l = r[i = vr(t)] || // also try camelCase event handler (#2249)
  r[i = vr(an(t))];
  !l && a && (l = r[i = vr(wn(t))]), l && zt(
    l,
    e,
    6,
    o
  );
  const c = r[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, zt(
      c,
      e,
      6,
      o
    );
  }
}
function Td(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let s = {}, i = !1;
  if (!ke(e)) {
    const l = (c) => {
      const d = Td(c, t, !0);
      d && (i = !0, tt(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !i ? (We(e) && r.set(e, null), null) : (ye(a) ? a.forEach((l) => s[l] = null) : tt(s, a), We(e) && r.set(e, s), s);
}
function fs(e, t) {
  return !e || !ea(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, wn(t)) || Be(e, t));
}
let dt = null, ps = null;
function ja(e) {
  const t = dt;
  return dt = e, ps = e && e.type.__scopeId || null, t;
}
function _N(e) {
  ps = e;
}
function wN() {
  ps = null;
}
function Le(e, t = dt, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ku(-1);
    const a = ja(t);
    let s;
    try {
      s = e(...o);
    } finally {
      ja(a), r._d && ku(1);
    }
    return process.env.NODE_ENV !== "production" && xd(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Ei = !1;
function Ha() {
  Ei = !0;
}
function Hs(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: a,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    data: p,
    setupState: m,
    ctx: y,
    inheritAttrs: _
  } = e;
  let P, W;
  const q = ja(e);
  process.env.NODE_ENV !== "production" && (Ei = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = o || r, C = process.env.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(N, {
        get(b, R, j) {
          return ue(
            `Property '${String(
              R
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(b, R, j);
        }
      }) : N;
      P = Jt(
        d.call(
          C,
          N,
          u,
          a,
          m,
          p,
          y
        )
      ), W = l;
    } else {
      const N = t;
      process.env.NODE_ENV !== "production" && l === a && Ha(), P = Jt(
        N.length > 1 ? N(
          a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Ha(), l;
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : N(
          a,
          null
          /* we know it doesn't need it */
        )
      ), W = t.props ? l : wm(l);
    }
  } catch (N) {
    Vo.length = 0, na(N, e, 1), P = Je(Dt);
  }
  let w = P, g;
  if (process.env.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && ([w, g] = kd(P)), W && _ !== !1) {
    const N = Object.keys(W), { shapeFlag: C } = w;
    if (N.length) {
      if (C & 7)
        s && N.some(Ia) && (W = Em(
          W,
          s
        )), w = Nn(w, W);
      else if (process.env.NODE_ENV !== "production" && !Ei && w.type !== Dt) {
        const b = Object.keys(l), R = [], j = [];
        for (let B = 0, x = b.length; B < x; B++) {
          const M = b[B];
          ea(M) ? Ia(M) || R.push(M[2].toLowerCase() + M.slice(3)) : j.push(M);
        }
        j.length && ue(
          `Extraneous non-props attributes (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), R.length && ue(
          `Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !hu(w) && ue(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), w = Nn(w), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !hu(w) && ue(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), w.transition = n.transition), process.env.NODE_ENV !== "production" && g ? g(w) : P = w, ja(q), P;
}
const kd = (e) => {
  const t = e.children, n = e.dynamicChildren, r = ml(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return kd(r);
  } else return [e, void 0];
  const o = t.indexOf(r), a = n ? n.indexOf(r) : -1, s = (i) => {
    t[o] = i, n && (a > -1 ? n[a] = i : i.patchFlag > 0 && (e.dynamicChildren = [...n, i]));
  };
  return [Jt(r), s];
};
function ml(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (ao(o)) {
      if (o.type !== Dt || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ml(n.children);
      }
    } else
      return;
  }
  return n;
}
const wm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ea(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Em = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ia(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, hu = (e) => e.shapeFlag & 7 || e.type === Dt;
function Om(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: s, children: i, patchFlag: l } = t, c = a.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || i) && Jn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? mu(r, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const p = d[u];
        if (s[p] !== r[p] && !fs(c, p))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : r === s ? !1 : r ? s ? mu(r, s, c) : !0 : !!s;
  return !1;
}
function mu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (t[a] !== e[a] && !fs(n, a))
      return !0;
  }
  return !1;
}
function Nm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Sd = "components";
function xm(e, t) {
  return Pd(Sd, e, !0, t) || e;
}
const Md = Symbol.for("v-ndc");
function hs(e) {
  return nt(e) ? Pd(Sd, e, !1) || e : e || Md;
}
function Pd(e, t, n = !0, r = !1) {
  const o = dt || gt;
  if (o) {
    const a = o.type;
    {
      const i = wl(
        a,
        !1
      );
      if (i && (i === t || i === an(t) || i === Rr(an(t))))
        return a;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      vu(o[e] || a[e], t) || // global registration
      vu(o.appContext[e], t)
    );
    return !s && r ? a : (process.env.NODE_ENV !== "production" && n && !s && ue(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), s);
  } else process.env.NODE_ENV !== "production" && ue(
    `resolve${Rr(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function vu(e, t) {
  return e && (e[t] || e[an(t)] || e[Rr(an(t))]);
}
const Dm = (e) => e.__isSuspense;
function Tm(e, t) {
  t && t.pendingBranch ? ye(e) ? t.effects.push(...e) : t.effects.push(e) : wd(e);
}
const km = Symbol.for("v-scx"), Sm = () => {
  {
    const e = $o(km);
    return e || process.env.NODE_ENV !== "production" && ue(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function EN(e, t) {
  return ms(e, null, t);
}
function Mm(e, t) {
  return ms(
    e,
    null,
    process.env.NODE_ENV !== "production" ? tt({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const wa = {};
function _t(e, t, n) {
  return process.env.NODE_ENV !== "production" && !ke(t) && ue(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ms(e, t, n);
}
function ms(e, t, {
  immediate: n,
  deep: r,
  flush: o,
  once: a,
  onTrack: s,
  onTrigger: i
} = Ke) {
  if (t && a) {
    const b = t;
    t = (...R) => {
      b(...R), C();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && ue(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && ue(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && ue(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && ue(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (b) => {
    ue(
      "Invalid watch source: ",
      b,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = gt, d = (b) => r === !0 ? b : (
    // for deep: false, only traverse root-level properties
    Er(b, r === !1 ? 1 : void 0)
  );
  let u, p = !1, m = !1;
  if (rt(e) ? (u = () => e.value, p = kr(e)) : yn(e) ? (u = () => d(e), p = !0) : ye(e) ? (m = !0, p = e.some((b) => yn(b) || kr(b)), u = () => e.map((b) => {
    if (rt(b))
      return b.value;
    if (yn(b))
      return d(b);
    if (ke(b))
      return Cn(b, c, 2);
    process.env.NODE_ENV !== "production" && l(b);
  })) : ke(e) ? t ? u = () => Cn(e, c, 2) : u = () => (y && y(), zt(
    e,
    c,
    3,
    [_]
  )) : (u = yt, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const b = u;
    u = () => Er(b());
  }
  let y, _ = (b) => {
    y = g.onStop = () => {
      Cn(b, c, 4), y = g.onStop = void 0;
    };
  }, P;
  if (gs)
    if (_ = yt, t ? n && zt(t, c, 3, [
      u(),
      m ? [] : void 0,
      _
    ]) : u(), o === "sync") {
      const b = Sm();
      P = b.__watcherHandles || (b.__watcherHandles = []);
    } else
      return yt;
  let W = m ? new Array(e.length).fill(wa) : wa;
  const q = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const b = g.run();
        (r || p || (m ? b.some((R, j) => En(R, W[j])) : En(b, W))) && (y && y(), zt(t, c, 3, [
          b,
          // pass undefined as the old value when it's changed for the first time
          W === wa ? void 0 : m && W[0] === wa ? [] : W,
          _
        ]), W = b);
      } else
        g.run();
  };
  q.allowRecurse = !!t;
  let w;
  o === "sync" ? w = q : o === "post" ? w = () => Ft(q, c && c.suspense) : (q.pre = !0, c && (q.id = c.uid), w = () => ds(q));
  const g = new ol(u, yt, w), N = rl(), C = () => {
    g.stop(), N && Ji(N.effects, g);
  };
  return process.env.NODE_ENV !== "production" && (g.onTrack = s, g.onTrigger = i), t ? n ? q() : W = g.run() : o === "post" ? Ft(
    g.run.bind(g),
    c && c.suspense
  ) : g.run(), P && P.push(C), C;
}
function Pm(e, t, n) {
  const r = this.proxy, o = nt(e) ? e.includes(".") ? Ad(r, e) : () => r[e] : e.bind(r, r);
  let a;
  ke(t) ? a = t : (a = t.handler, n = t);
  const s = ia(this), i = ms(o, a.bind(r), n);
  return s(), i;
}
function Ad(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Er(e, t, n = 0, r) {
  if (!We(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), rt(e))
    Er(e.value, t, n, r);
  else if (ye(e))
    for (let o = 0; o < e.length; o++)
      Er(e[o], t, n, r);
  else if (as(e) || xr(e))
    e.forEach((o) => {
      Er(o, t, n, r);
    });
  else if (Gc(e))
    for (const o in e)
      Er(e[o], t, n, r);
  return e;
}
function Cd(e) {
  oh(e) && ue("Do not use built-in directive ids as custom directive id: " + e);
}
function Zn(e, t) {
  if (dt === null)
    return process.env.NODE_ENV !== "production" && ue("withDirectives can only be used inside render functions."), e;
  const n = bs(dt) || dt.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, s, i, l = Ke] = t[o];
    a && (ke(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Er(s), r.push({
      dir: a,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function fr(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    a && (i.oldValue = a[s].value);
    let l = i.dir[r];
    l && (sr(), zt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), ir());
  }
}
const Wn = Symbol("_leaveCb"), Ea = Symbol("_enterCb");
function Am() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Mt(() => {
    e.isMounted = !0;
  }), Ld(() => {
    e.isUnmounting = !0;
  }), e;
}
const qt = [Function, Array], $d = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: qt,
  onEnter: qt,
  onAfterEnter: qt,
  onEnterCancelled: qt,
  // leave
  onBeforeLeave: qt,
  onLeave: qt,
  onAfterLeave: qt,
  onLeaveCancelled: qt,
  // appear
  onBeforeAppear: qt,
  onAppear: qt,
  onAfterAppear: qt,
  onAppearCancelled: qt
}, Cm = {
  name: "BaseTransition",
  props: $d,
  setup(e, { slots: t }) {
    const n = sa(), r = Am();
    return () => {
      const o = t.default && Vd(t.default(), !0);
      if (!o || !o.length)
        return;
      let a = o[0];
      if (o.length > 1) {
        let p = !1;
        for (const m of o)
          if (m.type !== Dt) {
            if (process.env.NODE_ENV !== "production" && p) {
              ue(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (a = m, p = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const s = Se(e), { mode: i } = s;
      if (process.env.NODE_ENV !== "production" && i && i !== "in-out" && i !== "out-in" && i !== "default" && ue(`invalid <transition> mode: ${i}`), r.isLeaving)
        return Ys(a);
      const l = yu(a);
      if (!l)
        return Ys(a);
      const c = Oi(
        l,
        s,
        r,
        n
      );
      Ni(l, c);
      const d = n.subTree, u = d && yu(d);
      if (u && u.type !== Dt && !_r(l, u)) {
        const p = Oi(
          u,
          s,
          r,
          n
        );
        if (Ni(u, p), i === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Ys(a);
        i === "in-out" && l.type !== Dt && (p.delayLeave = (m, y, _) => {
          const P = Rd(
            r,
            u
          );
          P[String(u.key)] = u, m[Wn] = () => {
            y(), m[Wn] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = _;
        });
      }
      return a;
    };
  }
}, $m = Cm;
function Rd(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Oi(e, t, n, r) {
  const {
    appear: o,
    mode: a,
    persisted: s = !1,
    onBeforeEnter: i,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: u,
    onLeave: p,
    onAfterLeave: m,
    onLeaveCancelled: y,
    onBeforeAppear: _,
    onAppear: P,
    onAfterAppear: W,
    onAppearCancelled: q
  } = t, w = String(e.key), g = Rd(n, e), N = (R, j) => {
    R && zt(
      R,
      r,
      9,
      j
    );
  }, C = (R, j) => {
    const B = j[1];
    N(R, j), ye(R) ? R.every((x) => x.length <= 1) && B() : R.length <= 1 && B();
  }, b = {
    mode: a,
    persisted: s,
    beforeEnter(R) {
      let j = i;
      if (!n.isMounted)
        if (o)
          j = _ || i;
        else
          return;
      R[Wn] && R[Wn](
        !0
        /* cancelled */
      );
      const B = g[w];
      B && _r(e, B) && B.el[Wn] && B.el[Wn](), N(j, [R]);
    },
    enter(R) {
      let j = l, B = c, x = d;
      if (!n.isMounted)
        if (o)
          j = P || l, B = W || c, x = q || d;
        else
          return;
      let M = !1;
      const Y = R[Ea] = (U) => {
        M || (M = !0, U ? N(x, [R]) : N(B, [R]), b.delayedLeave && b.delayedLeave(), R[Ea] = void 0);
      };
      j ? C(j, [R, Y]) : Y();
    },
    leave(R, j) {
      const B = String(e.key);
      if (R[Ea] && R[Ea](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      N(u, [R]);
      let x = !1;
      const M = R[Wn] = (Y) => {
        x || (x = !0, j(), Y ? N(y, [R]) : N(m, [R]), R[Wn] = void 0, g[B] === e && delete g[B]);
      };
      g[B] = e, p ? C(p, [R, M]) : M();
    },
    clone(R) {
      return Oi(R, t, n, r);
    }
  };
  return b;
}
function Ys(e) {
  if (oa(e))
    return e = Nn(e), e.children = null, e;
}
function yu(e) {
  return oa(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function Ni(e, t) {
  e.shapeFlag & 6 && e.component ? Ni(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Vd(e, t = !1, n) {
  let r = [], o = 0;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    const i = n == null ? s.key : String(n) + String(s.key != null ? s.key : a);
    s.type === Oe ? (s.patchFlag & 128 && o++, r = r.concat(
      Vd(s.children, t, i)
    )) : (t || s.type !== Dt) && r.push(i != null ? Nn(s, { key: i }) : s);
  }
  if (o > 1)
    for (let a = 0; a < r.length; a++)
      r[a].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function St(e, t) {
  return ke(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
const Co = (e) => !!e.type.__asyncLoader, oa = (e) => e.type.__isKeepAlive;
function Rm(e, t) {
  Id(e, "a", t);
}
function Vm(e, t) {
  Id(e, "da", t);
}
function Id(e, t, n = gt) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (vs(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      oa(o.parent.vnode) && Im(r, t, n, o), o = o.parent;
  }
}
function Im(e, t, n, r) {
  const o = vs(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  po(() => {
    Ji(r[t], o);
  }, n);
}
function vs(e, t, n = gt, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      sr();
      const i = ia(n), l = zt(t, n, e, s);
      return i(), ir(), l;
    });
    return r ? o.unshift(a) : o.push(a), a;
  } else if (process.env.NODE_ENV !== "production") {
    const o = vr(cl[e].replace(/ hook$/, ""));
    ue(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Vn = (e) => (t, n = gt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!gs || e === "sp") && vs(e, (...r) => t(...r), n)
), Fm = Vn("bm"), Mt = Vn("m"), Fd = Vn("bu"), Lm = Vn("u"), Ld = Vn("bum"), po = Vn("um"), Bm = Vn("sp"), jm = Vn(
  "rtg"
), Hm = Vn(
  "rtc"
);
function Ym(e, t = gt) {
  vs("ec", e, t);
}
function Ze(e, t, n, r) {
  let o;
  const a = n;
  if (ye(e) || nt(e)) {
    o = new Array(e.length);
    for (let s = 0, i = e.length; s < i; s++)
      o[s] = t(e[s], s, void 0, a);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && ue(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let s = 0; s < e; s++)
      o[s] = t(s + 1, s, void 0, a);
  } else if (We(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (s, i) => t(s, i, void 0, a)
      );
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let i = 0, l = s.length; i < l; i++) {
        const c = s[i];
        o[i] = t(e[c], c, i, a);
      }
    }
  else
    o = [];
  return o;
}
function It(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ye(r))
      for (let o = 0; o < r.length; o++)
        e[r[o].name] = r[o].fn;
    else r && (e[r.name] = r.key ? (...o) => {
      const a = r.fn(...o);
      return a && (a.key = r.key), a;
    } : r.fn);
  }
  return e;
}
function ge(e, t, n = {}, r, o) {
  if (dt.isCE || dt.parent && Co(dt.parent) && dt.parent.isCE)
    return t !== "default" && (n.name = t), Je("slot", n, r);
  let a = e[t];
  process.env.NODE_ENV !== "production" && a && a.length > 1 && (ue(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), a = () => []), a && a._c && (a._d = !1), V();
  const s = a && Bd(a(n)), i = Re(
    Oe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), a && a._c && (a._d = !0), i;
}
function Bd(e) {
  return e.some((t) => ao(t) ? !(t.type === Dt || t.type === Oe && !Bd(t.children)) : !0) ? e : null;
}
const xi = (e) => e ? nf(e) ? bs(e) || e.proxy : xi(e.parent) : null, Pr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Xr(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Xr(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Xr(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Xr(e.refs) : e.refs,
    $parent: (e) => xi(e.parent),
    $root: (e) => xi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => gl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kt.bind(e.proxy)),
    $watch: (e) => Pm.bind(e)
  })
), vl = (e) => e === "_" || e === "$", Us = (e, t) => e !== Ke && !e.__isScriptSetup && Be(e, t), jd = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: a, accessCache: s, type: i, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (Us(r, t))
          return s[t] = 1, r[t];
        if (o !== Ke && Be(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && Be(c, t)
        )
          return s[t] = 3, a[t];
        if (n !== Ke && Be(n, t))
          return s[t] = 4, n[t];
        Di && (s[t] = 0);
      }
    }
    const d = Pr[t];
    let u, p;
    if (d)
      return t === "$attrs" ? (kt(e, "get", t), process.env.NODE_ENV !== "production" && Ha()) : process.env.NODE_ENV !== "production" && t === "$slots" && kt(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ke && Be(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, Be(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && dt && (!nt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Ke && vl(t[0]) && Be(o, t) ? ue(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === dt && ue(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Us(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && Be(o, t) ? (ue(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Ke && Be(r, t) ? (r[t] = n, !0) : Be(e.props, t) ? (process.env.NODE_ENV !== "production" && ue(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && ue(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: a }
  }, s) {
    let i;
    return !!n[s] || e !== Ke && Be(e, s) || Us(t, s) || (i = a[0]) && Be(i, s) || Be(r, s) || Be(Pr, s) || Be(o.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (jd.ownKeys = (e) => (ue(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Um(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Pr).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Pr[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: yt
    });
  }), t;
}
function Wm(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: yt
    });
  });
}
function qm(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Se(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (vl(r[0])) {
        ue(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: yt
      });
    }
  });
}
function jr() {
  return Gm().slots;
}
function Gm() {
  const e = sa();
  return process.env.NODE_ENV !== "production" && !e && ue("useContext() called without active instance."), e.setupContext || (e.setupContext = of(e));
}
function Ya(e) {
  return ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function yl(e, t) {
  return !e || !t ? e || t : ye(e) && ye(t) ? e.concat(t) : tt({}, Ya(e), Ya(t));
}
function zm() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? ue(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Di = !0;
function Km(e) {
  const t = gl(e), n = e.proxy, r = e.ctx;
  Di = !1, t.beforeCreate && gu(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: s,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: y,
    activated: _,
    deactivated: P,
    beforeDestroy: W,
    beforeUnmount: q,
    destroyed: w,
    unmounted: g,
    render: N,
    renderTracked: C,
    renderTriggered: b,
    errorCaptured: R,
    serverPrefetch: j,
    // public API
    expose: B,
    inheritAttrs: x,
    // assets
    components: M,
    directives: Y,
    filters: U
  } = t, O = process.env.NODE_ENV !== "production" ? zm() : null;
  if (process.env.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const K in H)
        O("Props", K);
  }
  if (c && Qm(c, r, O), s)
    for (const H in s) {
      const K = s[H];
      ke(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, H, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[H] = K.bind(n), process.env.NODE_ENV !== "production" && O("Methods", H)) : process.env.NODE_ENV !== "production" && ue(
        `Method "${H}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !ke(o) && ue(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const H = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Zi(H) && ue(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !We(H))
      process.env.NODE_ENV !== "production" && ue("data() should return an object.");
    else if (e.data = Rn(H), process.env.NODE_ENV !== "production")
      for (const K in H)
        O("Data", K), vl(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => H[K],
          set: yt
        });
  }
  if (Di = !0, a)
    for (const H in a) {
      const K = a[H], he = ke(K) ? K.bind(n, n) : ke(K.get) ? K.get.bind(n, n) : yt;
      process.env.NODE_ENV !== "production" && he === yt && ue(`Computed property "${H}" has no getter.`);
      const ne = !ke(K) && ke(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        ue(
          `Write operation failed: computed property "${H}" is readonly.`
        );
      } : yt, h = oe({
        get: he,
        set: ne
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => h.value,
        set: (f) => h.value = f
      }), process.env.NODE_ENV !== "production" && O("Computed", H);
    }
  if (i)
    for (const H in i)
      Hd(i[H], r, n, H);
  if (l) {
    const H = ke(l) ? l.call(n) : l;
    Reflect.ownKeys(H).forEach((K) => {
      nv(K, H[K]);
    });
  }
  d && gu(d, e, "c");
  function A(H, K) {
    ye(K) ? K.forEach((he) => H(he.bind(n))) : K && H(K.bind(n));
  }
  if (A(Fm, u), A(Mt, p), A(Fd, m), A(Lm, y), A(Rm, _), A(Vm, P), A(Ym, R), A(Hm, C), A(jm, b), A(Ld, q), A(po, g), A(Bm, j), ye(B))
    if (B.length) {
      const H = e.exposed || (e.exposed = {});
      B.forEach((K) => {
        Object.defineProperty(H, K, {
          get: () => n[K],
          set: (he) => n[K] = he
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === yt && (e.render = N), x != null && (e.inheritAttrs = x), M && (e.components = M), Y && (e.directives = Y);
}
function Qm(e, t, n = yt) {
  ye(e) && (e = Ti(e));
  for (const r in e) {
    const o = e[r];
    let a;
    We(o) ? "default" in o ? a = $o(
      o.from || r,
      o.default,
      !0
    ) : a = $o(o.from || r) : a = $o(o), rt(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function gu(e, t, n) {
  zt(
    ye(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hd(e, t, n, r) {
  const o = r.includes(".") ? Ad(n, r) : () => n[r];
  if (nt(e)) {
    const a = t[e];
    ke(a) ? _t(o, a) : process.env.NODE_ENV !== "production" && ue(`Invalid watch handler specified by key "${e}"`, a);
  } else if (ke(e))
    _t(o, e.bind(n));
  else if (We(e))
    if (ye(e))
      e.forEach((a) => Hd(a, t, n, r));
    else {
      const a = ke(e.handler) ? e.handler.bind(n) : t[e.handler];
      ke(a) ? _t(o, a, e) : process.env.NODE_ENV !== "production" && ue(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else process.env.NODE_ENV !== "production" && ue(`Invalid watch option: "${r}"`, e);
}
function gl(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = a.get(t);
  let l;
  return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (c) => Ua(l, c, s, !0)
  ), Ua(l, t, s)), We(t) && a.set(t, l), l;
}
function Ua(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && Ua(e, a, n, !0), o && o.forEach(
    (s) => Ua(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && ue(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = Xm[s] || n && n[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const Xm = {
  data: bu,
  props: _u,
  emits: _u,
  // objects
  methods: ko,
  computed: ko,
  // lifecycle
  beforeCreate: Rt,
  created: Rt,
  beforeMount: Rt,
  mounted: Rt,
  beforeUpdate: Rt,
  updated: Rt,
  beforeDestroy: Rt,
  beforeUnmount: Rt,
  destroyed: Rt,
  unmounted: Rt,
  activated: Rt,
  deactivated: Rt,
  errorCaptured: Rt,
  serverPrefetch: Rt,
  // assets
  components: ko,
  directives: ko,
  // watch
  watch: Zm,
  // provide / inject
  provide: bu,
  inject: Jm
};
function bu(e, t) {
  return t ? e ? function() {
    return tt(
      ke(e) ? e.call(this, this) : e,
      ke(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Jm(e, t) {
  return ko(Ti(e), Ti(t));
}
function Ti(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ko(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _u(e, t) {
  return e ? ye(e) && ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Ya(e),
    Ya(t ?? {})
  ) : t;
}
function Zm(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = tt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Rt(e[r], t[r]);
  return n;
}
function Yd() {
  return {
    app: null,
    config: {
      isNativeTag: nh,
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
let ev = 0;
function tv(e, t) {
  return function(r, o = null) {
    ke(r) || (r = tt({}, r)), o != null && !We(o) && (process.env.NODE_ENV !== "production" && ue("root props passed to app.mount() must be an object."), o = null);
    const a = Yd(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = a.app = {
      _uid: ev++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: Au,
      get config() {
        return a.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && ue(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return s.has(c) ? process.env.NODE_ENV !== "production" && ue("Plugin has already been applied to target app.") : c && ke(c.install) ? (s.add(c), c.install(l, ...d)) : ke(c) ? (s.add(c), c(l, ...d)) : process.env.NODE_ENV !== "production" && ue(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(c) {
        return a.mixins.includes(c) ? process.env.NODE_ENV !== "production" && ue(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : a.mixins.push(c), l;
      },
      component(c, d) {
        return process.env.NODE_ENV !== "production" && Ci(c, a.config), d ? (process.env.NODE_ENV !== "production" && a.components[c] && ue(`Component "${c}" has already been registered in target app.`), a.components[c] = d, l) : a.components[c];
      },
      directive(c, d) {
        return process.env.NODE_ENV !== "production" && Cd(c), d ? (process.env.NODE_ENV !== "production" && a.directives[c] && ue(`Directive "${c}" has already been registered in target app.`), a.directives[c] = d, l) : a.directives[c];
      },
      mount(c, d, u) {
        if (i)
          process.env.NODE_ENV !== "production" && ue(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && ue(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = Je(r, o);
          return p.appContext = a, u === !0 ? u = "svg" : u === !1 && (u = void 0), process.env.NODE_ENV !== "production" && (a.reload = () => {
            e(
              Nn(p),
              c,
              u
            );
          }), d && t ? t(p, c) : e(p, c, u), i = !0, l._container = c, c.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = p.component, fm(l, Au)), bs(p.component) || p.component.proxy;
        }
      },
      unmount() {
        i ? (e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, pm(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && ue("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return process.env.NODE_ENV !== "production" && c in a.provides && ue(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), a.provides[c] = d, l;
      },
      runWithContext(c) {
        const d = no;
        no = l;
        try {
          return c();
        } finally {
          no = d;
        }
      }
    };
    return l;
  };
}
let no = null;
function nv(e, t) {
  if (!gt)
    process.env.NODE_ENV !== "production" && ue("provide() can only be used inside setup().");
  else {
    let n = gt.provides;
    const r = gt.parent && gt.parent.provides;
    r === n && (n = gt.provides = Object.create(r)), n[e] = t;
  }
}
function $o(e, t, n = !1) {
  const r = gt || dt;
  if (r || no) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : no._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ke(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && ue(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && ue("inject() can only be used inside setup() or functional components.");
}
function rv() {
  return !!(gt || dt || no);
}
function ov(e, t, n, r = !1) {
  const o = {}, a = {};
  Fa(a, ys, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ud(e, t, o, a);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  process.env.NODE_ENV !== "production" && qd(t || {}, o, e), n ? e.props = r ? o : Yh(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function av(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function sv(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, i = Se(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && av(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (fs(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (l)
          if (Be(a, p))
            m !== a[p] && (a[p] = m, c = !0);
          else {
            const y = an(p);
            o[y] = ki(
              l,
              i,
              y,
              m,
              e,
              !1
            );
          }
        else
          m !== a[p] && (a[p] = m, c = !0);
      }
    }
  } else {
    Ud(e, t, o, a) && (c = !0);
    let d;
    for (const u in i)
      (!t || // for camelCase
      !Be(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = wn(u)) === u || !Be(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = ki(
        l,
        i,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (a !== i)
      for (const u in a)
        (!t || !Be(t, u)) && (delete a[u], c = !0);
  }
  c && vn(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && qd(t || {}, o, e);
}
function Ud(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (Mo(l))
        continue;
      const c = t[l];
      let d;
      o && Be(o, d = an(l)) ? !a || !a.includes(d) ? n[d] = c : (i || (i = {}))[d] = c : fs(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (a) {
    const l = Se(n), c = i || Ke;
    for (let d = 0; d < a.length; d++) {
      const u = a[d];
      n[u] = ki(
        o,
        l,
        u,
        c[u],
        e,
        !Be(c, u)
      );
    }
  }
  return s;
}
function ki(e, t, n, r, o, a) {
  const s = e[n];
  if (s != null) {
    const i = Be(s, "default");
    if (i && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ke(l)) {
        const { propsDefaults: c } = o;
        if (n in c)
          r = c[n];
        else {
          const d = ia(o);
          r = c[n] = l.call(
            null,
            t
          ), d();
        }
      } else
        r = l;
    }
    s[
      0
      /* shouldCast */
    ] && (a && !i ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === wn(n)) && (r = !0));
  }
  return r;
}
function Wd(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, s = {}, i = [];
  let l = !1;
  if (!ke(e)) {
    const d = (u) => {
      l = !0;
      const [p, m] = Wd(u, t, !0);
      tt(s, p), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!a && !l)
    return We(e) && r.set(e, eo), eo;
  if (ye(a))
    for (let d = 0; d < a.length; d++) {
      process.env.NODE_ENV !== "production" && !nt(a[d]) && ue("props must be strings when using array syntax.", a[d]);
      const u = an(a[d]);
      wu(u) && (s[u] = Ke);
    }
  else if (a) {
    process.env.NODE_ENV !== "production" && !We(a) && ue("invalid props options", a);
    for (const d in a) {
      const u = an(d);
      if (wu(u)) {
        const p = a[d], m = s[u] = ye(p) || ke(p) ? { type: p } : tt({}, p);
        if (m) {
          const y = Ou(Boolean, m.type), _ = Ou(String, m.type);
          m[
            0
            /* shouldCast */
          ] = y > -1, m[
            1
            /* shouldCastTrue */
          ] = _ < 0 || y < _, (y > -1 || Be(m, "default")) && i.push(u);
        }
      }
    }
  }
  const c = [s, i];
  return We(e) && r.set(e, c), c;
}
function wu(e) {
  return e[0] !== "$" && !Mo(e) ? !0 : (process.env.NODE_ENV !== "production" && ue(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Si(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Eu(e, t) {
  return Si(e) === Si(t);
}
function Ou(e, t) {
  return ye(t) ? t.findIndex((n) => Eu(n, e)) : ke(t) && Eu(t, e) ? 0 : -1;
}
function qd(e, t, n) {
  const r = Se(t), o = n.propsOptions[0];
  for (const a in o) {
    let s = o[a];
    s != null && iv(
      a,
      r[a],
      s,
      process.env.NODE_ENV !== "production" ? Xr(r) : r,
      !Be(e, a) && !Be(e, wn(a))
    );
  }
}
function iv(e, t, n, r, o) {
  const { type: a, required: s, validator: i, skipCheck: l } = n;
  if (s && o) {
    ue('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (a != null && a !== !0 && !l) {
      let c = !1;
      const d = ye(a) ? a : [a], u = [];
      for (let p = 0; p < d.length && !c; p++) {
        const { valid: m, expectedType: y } = uv(t, d[p]);
        u.push(y || ""), c = m;
      }
      if (!c) {
        ue(cv(e, t, u));
        return;
      }
    }
    i && !i(t, r) && ue('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const lv = /* @__PURE__ */ $n(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function uv(e, t) {
  let n;
  const r = Si(t);
  if (lv(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = We(e) : r === "Array" ? n = ye(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function cv(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Rr).join(" | ")}`;
  const o = n[0], a = el(t), s = Nu(t, o), i = Nu(t, a);
  return n.length === 1 && xu(o) && !dv(o, a) && (r += ` with value ${s}`), r += `, got ${a} `, xu(a) && (r += `with value ${i}.`), r;
}
function Nu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function xu(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function dv(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Gd = (e) => e[0] === "_" || e === "$stable", bl = (e) => ye(e) ? e.map(Jt) : [Jt(e)], fv = (e, t, n) => {
  if (t._n)
    return t;
  const r = Le((...o) => (process.env.NODE_ENV !== "production" && gt && (!n || n.root === gt.root) && ue(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), bl(t(...o))), n);
  return r._c = !1, r;
}, zd = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Gd(o))
      continue;
    const a = e[o];
    if (ke(a))
      t[o] = fv(o, a, r);
    else if (a != null) {
      process.env.NODE_ENV !== "production" && ue(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const s = bl(a);
      t[o] = () => s;
    }
  }
}, Kd = (e, t) => {
  process.env.NODE_ENV !== "production" && !oa(e.vnode) && ue(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = bl(t);
  e.slots.default = () => n;
}, pv = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Se(t), Fa(t, "_", n)) : zd(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Kd(e, t);
  Fa(e.slots, ys, 1);
}, hv = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, s = Ke;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? process.env.NODE_ENV !== "production" && Jn ? (tt(o, t), vn(e, "set", "$slots")) : n && i === 1 ? a = !1 : (tt(o, t), !n && i === 1 && delete o._) : (a = !t.$stable, zd(t, o)), s = t;
  } else t && (Kd(e, t), s = { default: 1 });
  if (a)
    for (const i in o)
      !Gd(i) && s[i] == null && delete o[i];
};
function Mi(e, t, n, r, o = !1) {
  if (ye(e)) {
    e.forEach(
      (p, m) => Mi(
        p,
        t && (ye(t) ? t[m] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Co(r) && !o)
    return;
  const a = r.shapeFlag & 4 ? bs(r.component) || r.component.proxy : r.el, s = o ? null : a, { i, r: l } = e;
  if (process.env.NODE_ENV !== "production" && !i) {
    ue(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = i.refs === Ke ? i.refs = {} : i.refs, u = i.setupState;
  if (c != null && c !== l && (nt(c) ? (d[c] = null, Be(u, c) && (u[c] = null)) : rt(c) && (c.value = null)), ke(l))
    Cn(l, i, 12, [s, d]);
  else {
    const p = nt(l), m = rt(l);
    if (p || m) {
      const y = () => {
        if (e.f) {
          const _ = p ? Be(u, l) ? u[l] : d[l] : l.value;
          o ? ye(_) && Ji(_, a) : ye(_) ? _.includes(a) || _.push(a) : p ? (d[l] = [a], Be(u, l) && (u[l] = d[l])) : (l.value = [a], e.k && (d[e.k] = l.value));
        } else p ? (d[l] = s, Be(u, l) && (u[l] = s)) : m ? (l.value = s, e.k && (d[e.k] = s)) : process.env.NODE_ENV !== "production" && ue("Invalid template ref type:", l, `(${typeof l})`);
      };
      s ? (y.id = -1, Ft(y, n)) : y();
    } else process.env.NODE_ENV !== "production" && ue("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let bo, zn;
function Tn(e, t) {
  e.appContext.config.performance && Wa() && zn.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ym(e, t, Wa() ? zn.now() : Date.now());
}
function kn(e, t) {
  if (e.appContext.config.performance && Wa()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    zn.mark(r), zn.measure(
      `<${_s(e, e.type)}> ${t}`,
      n,
      r
    ), zn.clearMarks(n), zn.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && gm(e, t, Wa() ? zn.now() : Date.now());
}
function Wa() {
  return bo !== void 0 || (typeof window < "u" && window.performance ? (bo = !0, zn = window.performance) : bo = !1), bo;
}
function mv() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ft = Tm;
function vv(e) {
  return yv(e);
}
function yv(e, t) {
  mv();
  const n = nl();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && pl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: s,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: p,
    setScopeId: m = yt,
    insertStaticContent: y
  } = e, _ = (v, E, L, T = null, Q = null, te = null, fe = void 0, ie = null, ce = process.env.NODE_ENV !== "production" && Jn ? !1 : !!E.dynamicChildren) => {
    if (v === E)
      return;
    v && !_r(v, E) && (T = Fe(v), k(v, Q, te, !0), v = null), E.patchFlag === -2 && (ce = !1, E.dynamicChildren = null);
    const { type: J, ref: de, shapeFlag: Ee } = E;
    switch (J) {
      case aa:
        P(v, E, L, T);
        break;
      case Dt:
        W(v, E, L, T);
        break;
      case Sa:
        v == null ? q(E, L, T, fe) : process.env.NODE_ENV !== "production" && w(v, E, L, fe);
        break;
      case Oe:
        Y(
          v,
          E,
          L,
          T,
          Q,
          te,
          fe,
          ie,
          ce
        );
        break;
      default:
        Ee & 1 ? C(
          v,
          E,
          L,
          T,
          Q,
          te,
          fe,
          ie,
          ce
        ) : Ee & 6 ? U(
          v,
          E,
          L,
          T,
          Q,
          te,
          fe,
          ie,
          ce
        ) : Ee & 64 || Ee & 128 ? J.process(
          v,
          E,
          L,
          T,
          Q,
          te,
          fe,
          ie,
          ce,
          Pe
        ) : process.env.NODE_ENV !== "production" && ue("Invalid VNode type:", J, `(${typeof J})`);
    }
    de != null && Q && Mi(de, v && v.ref, te, E || v, !E);
  }, P = (v, E, L, T) => {
    if (v == null)
      r(
        E.el = i(E.children),
        L,
        T
      );
    else {
      const Q = E.el = v.el;
      E.children !== v.children && c(Q, E.children);
    }
  }, W = (v, E, L, T) => {
    v == null ? r(
      E.el = l(E.children || ""),
      L,
      T
    ) : E.el = v.el;
  }, q = (v, E, L, T) => {
    [v.el, v.anchor] = y(
      v.children,
      E,
      L,
      T,
      v.el,
      v.anchor
    );
  }, w = (v, E, L, T) => {
    if (E.children !== v.children) {
      const Q = p(v.anchor);
      N(v), [E.el, E.anchor] = y(
        E.children,
        L,
        Q,
        T
      );
    } else
      E.el = v.el, E.anchor = v.anchor;
  }, g = ({ el: v, anchor: E }, L, T) => {
    let Q;
    for (; v && v !== E; )
      Q = p(v), r(v, L, T), v = Q;
    r(E, L, T);
  }, N = ({ el: v, anchor: E }) => {
    let L;
    for (; v && v !== E; )
      L = p(v), o(v), v = L;
    o(E);
  }, C = (v, E, L, T, Q, te, fe, ie, ce) => {
    E.type === "svg" ? fe = "svg" : E.type === "math" && (fe = "mathml"), v == null ? b(
      E,
      L,
      T,
      Q,
      te,
      fe,
      ie,
      ce
    ) : B(
      v,
      E,
      Q,
      te,
      fe,
      ie,
      ce
    );
  }, b = (v, E, L, T, Q, te, fe, ie) => {
    let ce, J;
    const { props: de, shapeFlag: Ee, transition: be, dirs: Te } = v;
    if (ce = v.el = s(
      v.type,
      te,
      de && de.is,
      de
    ), Ee & 8 ? d(ce, v.children) : Ee & 16 && j(
      v.children,
      ce,
      null,
      T,
      Q,
      Ws(v, te),
      fe,
      ie
    ), Te && fr(v, null, T, "created"), R(ce, v, v.scopeId, fe, T), de) {
      for (const Ue in de)
        Ue !== "value" && !Mo(Ue) && a(
          ce,
          Ue,
          null,
          de[Ue],
          te,
          v.children,
          T,
          Q,
          Me
        );
      "value" in de && a(ce, "value", null, de.value, te), (J = de.onVnodeBeforeMount) && cn(J, T, v);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(ce, "__vnode", {
      value: v,
      enumerable: !1
    }), Object.defineProperty(ce, "__vueParentComponent", {
      value: T,
      enumerable: !1
    })), Te && fr(v, null, T, "beforeMount");
    const Ve = gv(Q, be);
    Ve && be.beforeEnter(ce), r(ce, E, L), ((J = de && de.onVnodeMounted) || Ve || Te) && Ft(() => {
      J && cn(J, T, v), Ve && be.enter(ce), Te && fr(v, null, T, "mounted");
    }, Q);
  }, R = (v, E, L, T, Q) => {
    if (L && m(v, L), T)
      for (let te = 0; te < T.length; te++)
        m(v, T[te]);
    if (Q) {
      let te = Q.subTree;
      if (process.env.NODE_ENV !== "production" && te.patchFlag > 0 && te.patchFlag & 2048 && (te = ml(te.children) || te), E === te) {
        const fe = Q.vnode;
        R(
          v,
          fe,
          fe.scopeId,
          fe.slotScopeIds,
          Q.parent
        );
      }
    }
  }, j = (v, E, L, T, Q, te, fe, ie, ce = 0) => {
    for (let J = ce; J < v.length; J++) {
      const de = v[J] = ie ? qn(v[J]) : Jt(v[J]);
      _(
        null,
        de,
        E,
        L,
        T,
        Q,
        te,
        fe,
        ie
      );
    }
  }, B = (v, E, L, T, Q, te, fe) => {
    const ie = E.el = v.el;
    let { patchFlag: ce, dynamicChildren: J, dirs: de } = E;
    ce |= v.patchFlag & 16;
    const Ee = v.props || Ke, be = E.props || Ke;
    let Te;
    if (L && pr(L, !1), (Te = be.onVnodeBeforeUpdate) && cn(Te, L, E, v), de && fr(E, v, L, "beforeUpdate"), L && pr(L, !0), process.env.NODE_ENV !== "production" && Jn && (ce = 0, fe = !1, J = null), J ? (x(
      v.dynamicChildren,
      J,
      ie,
      L,
      T,
      Ws(E, Q),
      te
    ), process.env.NODE_ENV !== "production" && Ro(v, E)) : fe || he(
      v,
      E,
      ie,
      null,
      L,
      T,
      Ws(E, Q),
      te,
      !1
    ), ce > 0) {
      if (ce & 16)
        M(
          ie,
          E,
          Ee,
          be,
          L,
          T,
          Q
        );
      else if (ce & 2 && Ee.class !== be.class && a(ie, "class", null, be.class, Q), ce & 4 && a(ie, "style", Ee.style, be.style, Q), ce & 8) {
        const Ve = E.dynamicProps;
        for (let Ue = 0; Ue < Ve.length; Ue++) {
          const Qe = Ve[Ue], $ = Ee[Qe], re = be[Qe];
          (re !== $ || Qe === "value") && a(
            ie,
            Qe,
            $,
            re,
            Q,
            v.children,
            L,
            T,
            Me
          );
        }
      }
      ce & 1 && v.children !== E.children && d(ie, E.children);
    } else !fe && J == null && M(
      ie,
      E,
      Ee,
      be,
      L,
      T,
      Q
    );
    ((Te = be.onVnodeUpdated) || de) && Ft(() => {
      Te && cn(Te, L, E, v), de && fr(E, v, L, "updated");
    }, T);
  }, x = (v, E, L, T, Q, te, fe) => {
    for (let ie = 0; ie < E.length; ie++) {
      const ce = v[ie], J = E[ie], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ce.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_r(ce, J) || // - In the case of a component, it could contain anything.
        ce.shapeFlag & 70) ? u(ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      _(
        ce,
        J,
        de,
        null,
        T,
        Q,
        te,
        fe,
        !0
      );
    }
  }, M = (v, E, L, T, Q, te, fe) => {
    if (L !== T) {
      if (L !== Ke)
        for (const ie in L)
          !Mo(ie) && !(ie in T) && a(
            v,
            ie,
            L[ie],
            null,
            fe,
            E.children,
            Q,
            te,
            Me
          );
      for (const ie in T) {
        if (Mo(ie))
          continue;
        const ce = T[ie], J = L[ie];
        ce !== J && ie !== "value" && a(
          v,
          ie,
          J,
          ce,
          fe,
          E.children,
          Q,
          te,
          Me
        );
      }
      "value" in T && a(v, "value", L.value, T.value, fe);
    }
  }, Y = (v, E, L, T, Q, te, fe, ie, ce) => {
    const J = E.el = v ? v.el : i(""), de = E.anchor = v ? v.anchor : i("");
    let { patchFlag: Ee, dynamicChildren: be, slotScopeIds: Te } = E;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Jn || Ee & 2048) && (Ee = 0, ce = !1, be = null), Te && (ie = ie ? ie.concat(Te) : Te), v == null ? (r(J, L, T), r(de, L, T), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      L,
      de,
      Q,
      te,
      fe,
      ie,
      ce
    )) : Ee > 0 && Ee & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (x(
      v.dynamicChildren,
      be,
      L,
      Q,
      te,
      fe,
      ie
    ), process.env.NODE_ENV !== "production" ? Ro(v, E) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (E.key != null || Q && E === Q.subTree) && Ro(
        v,
        E,
        !0
        /* shallow */
      )
    )) : he(
      v,
      E,
      L,
      de,
      Q,
      te,
      fe,
      ie,
      ce
    );
  }, U = (v, E, L, T, Q, te, fe, ie, ce) => {
    E.slotScopeIds = ie, v == null ? E.shapeFlag & 512 ? Q.ctx.activate(
      E,
      L,
      T,
      fe,
      ce
    ) : O(
      E,
      L,
      T,
      Q,
      te,
      fe,
      ce
    ) : A(v, E, ce);
  }, O = (v, E, L, T, Q, te, fe) => {
    const ie = v.component = kv(
      v,
      T,
      Q
    );
    if (process.env.NODE_ENV !== "production" && ie.type.__hmrId && lm(ie), process.env.NODE_ENV !== "production" && (Ta(v), Tn(ie, "mount")), oa(v) && (ie.ctx.renderer = Pe), process.env.NODE_ENV !== "production" && Tn(ie, "init"), Mv(ie), process.env.NODE_ENV !== "production" && kn(ie, "init"), ie.asyncDep) {
      if (Q && Q.registerDep(ie, H), !v.el) {
        const ce = ie.subTree = Je(Dt);
        W(null, ce, E, L);
      }
    } else
      H(
        ie,
        v,
        E,
        L,
        Q,
        te,
        fe
      );
    process.env.NODE_ENV !== "production" && (ka(), kn(ie, "mount"));
  }, A = (v, E, L) => {
    const T = E.component = v.component;
    if (Om(v, E, L))
      if (T.asyncDep && !T.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ta(E), K(T, E, L), process.env.NODE_ENV !== "production" && ka();
        return;
      } else
        T.next = E, sm(T.update), T.effect.dirty = !0, T.update();
    else
      E.el = v.el, T.vnode = E;
  }, H = (v, E, L, T, Q, te, fe) => {
    const ie = () => {
      if (v.isMounted) {
        let { next: de, bu: Ee, u: be, parent: Te, vnode: Ve } = v;
        {
          const _e = Qd(v);
          if (_e) {
            de && (de.el = Ve.el, K(v, de, fe)), _e.asyncDep.then(() => {
              v.isUnmounted || ie();
            });
            return;
          }
        }
        let Ue = de, Qe;
        process.env.NODE_ENV !== "production" && Ta(de || v.vnode), pr(v, !1), de ? (de.el = Ve.el, K(v, de, fe)) : de = Ve, Ee && zr(Ee), (Qe = de.props && de.props.onVnodeBeforeUpdate) && cn(Qe, Te, de, Ve), pr(v, !0), process.env.NODE_ENV !== "production" && Tn(v, "render");
        const $ = Hs(v);
        process.env.NODE_ENV !== "production" && kn(v, "render");
        const re = v.subTree;
        v.subTree = $, process.env.NODE_ENV !== "production" && Tn(v, "patch"), _(
          re,
          $,
          // parent may have changed if it's in a teleport
          u(re.el),
          // anchor may have changed if it's in a fragment
          Fe(re),
          v,
          Q,
          te
        ), process.env.NODE_ENV !== "production" && kn(v, "patch"), de.el = $.el, Ue === null && Nm(v, $.el), be && Ft(be, Q), (Qe = de.props && de.props.onVnodeUpdated) && Ft(
          () => cn(Qe, Te, de, Ve),
          Q
        ), process.env.NODE_ENV !== "production" && xd(v), process.env.NODE_ENV !== "production" && ka();
      } else {
        let de;
        const { el: Ee, props: be } = E, { bm: Te, m: Ve, parent: Ue } = v, Qe = Co(E);
        if (pr(v, !1), Te && zr(Te), !Qe && (de = be && be.onVnodeBeforeMount) && cn(de, Ue, E), pr(v, !0), Ee && le) {
          const $ = () => {
            process.env.NODE_ENV !== "production" && Tn(v, "render"), v.subTree = Hs(v), process.env.NODE_ENV !== "production" && kn(v, "render"), process.env.NODE_ENV !== "production" && Tn(v, "hydrate"), le(
              Ee,
              v.subTree,
              v,
              Q,
              null
            ), process.env.NODE_ENV !== "production" && kn(v, "hydrate");
          };
          Qe ? E.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !v.isUnmounted && $()
          ) : $();
        } else {
          process.env.NODE_ENV !== "production" && Tn(v, "render");
          const $ = v.subTree = Hs(v);
          process.env.NODE_ENV !== "production" && kn(v, "render"), process.env.NODE_ENV !== "production" && Tn(v, "patch"), _(
            null,
            $,
            L,
            T,
            v,
            Q,
            te
          ), process.env.NODE_ENV !== "production" && kn(v, "patch"), E.el = $.el;
        }
        if (Ve && Ft(Ve, Q), !Qe && (de = be && be.onVnodeMounted)) {
          const $ = E;
          Ft(
            () => cn(de, Ue, $),
            Q
          );
        }
        (E.shapeFlag & 256 || Ue && Co(Ue.vnode) && Ue.vnode.shapeFlag & 256) && v.a && Ft(v.a, Q), v.isMounted = !0, process.env.NODE_ENV !== "production" && hm(v), E = L = T = null;
      }
    }, ce = v.effect = new ol(
      ie,
      yt,
      () => ds(J),
      v.scope
      // track it in component's effect scope
    ), J = v.update = () => {
      ce.dirty && ce.run();
    };
    J.id = v.uid, pr(v, !0), process.env.NODE_ENV !== "production" && (ce.onTrack = v.rtc ? (de) => zr(v.rtc, de) : void 0, ce.onTrigger = v.rtg ? (de) => zr(v.rtg, de) : void 0, J.ownerInstance = v), J();
  }, K = (v, E, L) => {
    E.component = v;
    const T = v.vnode.props;
    v.vnode = E, v.next = null, sv(v, E.props, T, L), hv(v, E.children, L), sr(), fu(v), ir();
  }, he = (v, E, L, T, Q, te, fe, ie, ce = !1) => {
    const J = v && v.children, de = v ? v.shapeFlag : 0, Ee = E.children, { patchFlag: be, shapeFlag: Te } = E;
    if (be > 0) {
      if (be & 128) {
        h(
          J,
          Ee,
          L,
          T,
          Q,
          te,
          fe,
          ie,
          ce
        );
        return;
      } else if (be & 256) {
        ne(
          J,
          Ee,
          L,
          T,
          Q,
          te,
          fe,
          ie,
          ce
        );
        return;
      }
    }
    Te & 8 ? (de & 16 && Me(J, Q, te), Ee !== J && d(L, Ee)) : de & 16 ? Te & 16 ? h(
      J,
      Ee,
      L,
      T,
      Q,
      te,
      fe,
      ie,
      ce
    ) : Me(J, Q, te, !0) : (de & 8 && d(L, ""), Te & 16 && j(
      Ee,
      L,
      T,
      Q,
      te,
      fe,
      ie,
      ce
    ));
  }, ne = (v, E, L, T, Q, te, fe, ie, ce) => {
    v = v || eo, E = E || eo;
    const J = v.length, de = E.length, Ee = Math.min(J, de);
    let be;
    for (be = 0; be < Ee; be++) {
      const Te = E[be] = ce ? qn(E[be]) : Jt(E[be]);
      _(
        v[be],
        Te,
        L,
        null,
        Q,
        te,
        fe,
        ie,
        ce
      );
    }
    J > de ? Me(
      v,
      Q,
      te,
      !0,
      !1,
      Ee
    ) : j(
      E,
      L,
      T,
      Q,
      te,
      fe,
      ie,
      ce,
      Ee
    );
  }, h = (v, E, L, T, Q, te, fe, ie, ce) => {
    let J = 0;
    const de = E.length;
    let Ee = v.length - 1, be = de - 1;
    for (; J <= Ee && J <= be; ) {
      const Te = v[J], Ve = E[J] = ce ? qn(E[J]) : Jt(E[J]);
      if (_r(Te, Ve))
        _(
          Te,
          Ve,
          L,
          null,
          Q,
          te,
          fe,
          ie,
          ce
        );
      else
        break;
      J++;
    }
    for (; J <= Ee && J <= be; ) {
      const Te = v[Ee], Ve = E[be] = ce ? qn(E[be]) : Jt(E[be]);
      if (_r(Te, Ve))
        _(
          Te,
          Ve,
          L,
          null,
          Q,
          te,
          fe,
          ie,
          ce
        );
      else
        break;
      Ee--, be--;
    }
    if (J > Ee) {
      if (J <= be) {
        const Te = be + 1, Ve = Te < de ? E[Te].el : T;
        for (; J <= be; )
          _(
            null,
            E[J] = ce ? qn(E[J]) : Jt(E[J]),
            L,
            Ve,
            Q,
            te,
            fe,
            ie,
            ce
          ), J++;
      }
    } else if (J > be)
      for (; J <= Ee; )
        k(v[J], Q, te, !0), J++;
    else {
      const Te = J, Ve = J, Ue = /* @__PURE__ */ new Map();
      for (J = Ve; J <= be; J++) {
        const ve = E[J] = ce ? qn(E[J]) : Jt(E[J]);
        ve.key != null && (process.env.NODE_ENV !== "production" && Ue.has(ve.key) && ue(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), Ue.set(ve.key, J));
      }
      let Qe, $ = 0;
      const re = be - Ve + 1;
      let _e = !1, Ae = 0;
      const Z = new Array(re);
      for (J = 0; J < re; J++)
        Z[J] = 0;
      for (J = Te; J <= Ee; J++) {
        const ve = v[J];
        if ($ >= re) {
          k(ve, Q, te, !0);
          continue;
        }
        let vt;
        if (ve.key != null)
          vt = Ue.get(ve.key);
        else
          for (Qe = Ve; Qe <= be; Qe++)
            if (Z[Qe - Ve] === 0 && _r(ve, E[Qe])) {
              vt = Qe;
              break;
            }
        vt === void 0 ? k(ve, Q, te, !0) : (Z[vt - Ve] = J + 1, vt >= Ae ? Ae = vt : _e = !0, _(
          ve,
          E[vt],
          L,
          null,
          Q,
          te,
          fe,
          ie,
          ce
        ), $++);
      }
      const Ne = _e ? bv(Z) : eo;
      for (Qe = Ne.length - 1, J = re - 1; J >= 0; J--) {
        const ve = Ve + J, vt = E[ve], jt = ve + 1 < de ? E[ve + 1].el : T;
        Z[J] === 0 ? _(
          null,
          vt,
          L,
          jt,
          Q,
          te,
          fe,
          ie,
          ce
        ) : _e && (Qe < 0 || J !== Ne[Qe] ? f(vt, L, jt, 2) : Qe--);
      }
    }
  }, f = (v, E, L, T, Q = null) => {
    const { el: te, type: fe, transition: ie, children: ce, shapeFlag: J } = v;
    if (J & 6) {
      f(v.component.subTree, E, L, T);
      return;
    }
    if (J & 128) {
      v.suspense.move(E, L, T);
      return;
    }
    if (J & 64) {
      fe.move(v, E, L, Pe);
      return;
    }
    if (fe === Oe) {
      r(te, E, L);
      for (let Ee = 0; Ee < ce.length; Ee++)
        f(ce[Ee], E, L, T);
      r(v.anchor, E, L);
      return;
    }
    if (fe === Sa) {
      g(v, E, L);
      return;
    }
    if (T !== 2 && J & 1 && ie)
      if (T === 0)
        ie.beforeEnter(te), r(te, E, L), Ft(() => ie.enter(te), Q);
      else {
        const { leave: Ee, delayLeave: be, afterLeave: Te } = ie, Ve = () => r(te, E, L), Ue = () => {
          Ee(te, () => {
            Ve(), Te && Te();
          });
        };
        be ? be(te, Ve, Ue) : Ue();
      }
    else
      r(te, E, L);
  }, k = (v, E, L, T = !1, Q = !1) => {
    const {
      type: te,
      props: fe,
      ref: ie,
      children: ce,
      dynamicChildren: J,
      shapeFlag: de,
      patchFlag: Ee,
      dirs: be
    } = v;
    if (ie != null && Mi(ie, null, L, v, !0), de & 256) {
      E.ctx.deactivate(v);
      return;
    }
    const Te = de & 1 && be, Ve = !Co(v);
    let Ue;
    if (Ve && (Ue = fe && fe.onVnodeBeforeUnmount) && cn(Ue, E, v), de & 6)
      F(v.component, L, T);
    else {
      if (de & 128) {
        v.suspense.unmount(L, T);
        return;
      }
      Te && fr(v, null, E, "beforeUnmount"), de & 64 ? v.type.remove(
        v,
        E,
        L,
        Q,
        Pe,
        T
      ) : J && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (te !== Oe || Ee > 0 && Ee & 64) ? Me(
        J,
        E,
        L,
        !1,
        !0
      ) : (te === Oe && Ee & 384 || !Q && de & 16) && Me(ce, E, L), T && z(v);
    }
    (Ve && (Ue = fe && fe.onVnodeUnmounted) || Te) && Ft(() => {
      Ue && cn(Ue, E, v), Te && fr(v, null, E, "unmounted");
    }, L);
  }, z = (v) => {
    const { type: E, el: L, anchor: T, transition: Q } = v;
    if (E === Oe) {
      process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && Q && !Q.persisted ? v.children.forEach((fe) => {
        fe.type === Dt ? o(fe.el) : z(fe);
      }) : pe(L, T);
      return;
    }
    if (E === Sa) {
      N(v);
      return;
    }
    const te = () => {
      o(L), Q && !Q.persisted && Q.afterLeave && Q.afterLeave();
    };
    if (v.shapeFlag & 1 && Q && !Q.persisted) {
      const { leave: fe, delayLeave: ie } = Q, ce = () => fe(L, te);
      ie ? ie(v.el, te, ce) : ce();
    } else
      te();
  }, pe = (v, E) => {
    let L;
    for (; v !== E; )
      L = p(v), o(v), v = L;
    o(E);
  }, F = (v, E, L) => {
    process.env.NODE_ENV !== "production" && v.type.__hmrId && um(v);
    const { bum: T, scope: Q, update: te, subTree: fe, um: ie } = v;
    T && zr(T), Q.stop(), te && (te.active = !1, k(fe, v, E, L)), ie && Ft(ie, E), Ft(() => {
      v.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), process.env.NODE_ENV !== "production" && vm(v);
  }, Me = (v, E, L, T = !1, Q = !1, te = 0) => {
    for (let fe = te; fe < v.length; fe++)
      k(v[fe], E, L, T, Q);
  }, Fe = (v) => v.shapeFlag & 6 ? Fe(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : p(v.anchor || v.el);
  let I = !1;
  const we = (v, E, L) => {
    v == null ? E._vnode && k(E._vnode, null, null, !0) : _(
      E._vnode || null,
      v,
      E,
      null,
      null,
      null,
      L
    ), I || (I = !0, fu(), Ed(), I = !1), E._vnode = v;
  }, Pe = {
    p: _,
    um: k,
    m: f,
    r: z,
    mt: O,
    mc: j,
    pc: he,
    pbc: x,
    n: Fe,
    o: e
  };
  let S, le;
  return {
    render: we,
    hydrate: S,
    createApp: tv(we, S)
  };
}
function Ws({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pr({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function gv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ro(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (ye(r) && ye(o))
    for (let a = 0; a < r.length; a++) {
      const s = r[a];
      let i = o[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = qn(o[a]), i.el = s.el), n || Ro(s, i)), i.type === aa && (i.el = s.el), process.env.NODE_ENV !== "production" && i.type === Dt && !i.el && (i.el = s.el);
    }
}
function bv(e) {
  const t = e.slice(), n = [0];
  let r, o, a, s, i;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, s = n.length - 1; a < s; )
        i = a + s >> 1, e[n[i]] < c ? a = i + 1 : s = i;
      c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, s = n[a - 1]; a-- > 0; )
    n[a] = s, s = t[s];
  return n;
}
function Qd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qd(t);
}
const _v = (e) => e.__isTeleport, ro = (e) => e && (e.disabled || e.disabled === ""), Du = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Tu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Pi = (e, t) => {
  const n = e && e.to;
  if (nt(n))
    if (t) {
      const r = t(n);
      return r || process.env.NODE_ENV !== "production" && ue(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return process.env.NODE_ENV !== "production" && ue(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !ro(e) && ue(`Invalid Teleport target: ${n}`), n;
}, wv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, a, s, i, l, c) {
    const {
      mc: d,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: y, createText: _, createComment: P }
    } = c, W = ro(t.props);
    let { shapeFlag: q, children: w, dynamicChildren: g } = t;
    if (process.env.NODE_ENV !== "production" && Jn && (l = !1, g = null), e == null) {
      const N = t.el = process.env.NODE_ENV !== "production" ? P("teleport start") : _(""), C = t.anchor = process.env.NODE_ENV !== "production" ? P("teleport end") : _("");
      m(N, n, r), m(C, n, r);
      const b = t.target = Pi(t.props, y), R = t.targetAnchor = _("");
      b ? (m(R, b), s === "svg" || Du(b) ? s = "svg" : (s === "mathml" || Tu(b)) && (s = "mathml")) : process.env.NODE_ENV !== "production" && !W && ue("Invalid Teleport target on mount:", b, `(${typeof b})`);
      const j = (B, x) => {
        q & 16 && d(
          w,
          B,
          x,
          o,
          a,
          s,
          i,
          l
        );
      };
      W ? j(n, C) : b && j(b, R);
    } else {
      t.el = e.el;
      const N = t.anchor = e.anchor, C = t.target = e.target, b = t.targetAnchor = e.targetAnchor, R = ro(e.props), j = R ? n : C, B = R ? N : b;
      if (s === "svg" || Du(C) ? s = "svg" : (s === "mathml" || Tu(C)) && (s = "mathml"), g ? (p(
        e.dynamicChildren,
        g,
        j,
        o,
        a,
        s,
        i
      ), Ro(e, t, !0)) : l || u(
        e,
        t,
        j,
        B,
        o,
        a,
        s,
        i,
        !1
      ), W)
        R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Oa(
          t,
          n,
          N,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const x = t.target = Pi(
          t.props,
          y
        );
        x ? Oa(
          t,
          x,
          null,
          c,
          0
        ) : process.env.NODE_ENV !== "production" && ue(
          "Invalid Teleport target on update:",
          C,
          `(${typeof C})`
        );
      } else R && Oa(
        t,
        C,
        b,
        c,
        1
      );
    }
    Xd(t);
  },
  remove(e, t, n, r, { um: o, o: { remove: a } }, s) {
    const { shapeFlag: i, children: l, anchor: c, targetAnchor: d, target: u, props: p } = e;
    if (u && a(d), s && a(c), i & 16) {
      const m = s || !ro(p);
      for (let y = 0; y < l.length; y++) {
        const _ = l[y];
        o(
          _,
          t,
          n,
          m,
          !!_.dynamicChildren
        );
      }
    }
  },
  move: Oa,
  hydrate: Ev
};
function Oa(e, t, n, { o: { insert: r }, m: o }, a = 2) {
  a === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: i, shapeFlag: l, children: c, props: d } = e, u = a === 2;
  if (u && r(s, t, n), (!u || ro(d)) && l & 16)
    for (let p = 0; p < c.length; p++)
      o(
        c[p],
        t,
        n,
        2
      );
  u && r(i, t, n);
}
function Ev(e, t, n, r, o, a, {
  o: { nextSibling: s, parentNode: i, querySelector: l }
}, c) {
  const d = t.target = Pi(
    t.props,
    l
  );
  if (d) {
    const u = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (ro(t.props))
        t.anchor = c(
          s(e),
          t,
          i(e),
          n,
          r,
          o,
          a
        ), t.targetAnchor = u;
      else {
        t.anchor = s(e);
        let p = u;
        for (; p; )
          if (p = s(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, d._lpa = t.targetAnchor && s(t.targetAnchor);
            break;
          }
        c(
          u,
          t,
          d,
          n,
          r,
          o,
          a
        );
      }
    Xd(t);
  }
  return t.anchor && s(t.anchor);
}
const Ov = wv;
function Xd(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Oe = Symbol.for("v-fgt"), aa = Symbol.for("v-txt"), Dt = Symbol.for("v-cmt"), Sa = Symbol.for("v-stc"), Vo = [];
let nn = null;
function V(e = !1) {
  Vo.push(nn = e ? null : []);
}
function Nv() {
  Vo.pop(), nn = Vo[Vo.length - 1] || null;
}
let qo = 1;
function ku(e) {
  qo += e;
}
function Jd(e) {
  return e.dynamicChildren = qo > 0 ? nn || eo : null, Nv(), qo > 0 && nn && nn.push(e), e;
}
function X(e, t, n, r, o, a) {
  return Jd(
    De(
      e,
      t,
      n,
      r,
      o,
      a,
      !0
    )
  );
}
function Re(e, t, n, r, o) {
  return Jd(
    Je(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _r(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Kr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const xv = (...e) => ef(
  ...e
), ys = "__vInternal", Zd = ({ key: e }) => e ?? null, Ma = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nt(e) || rt(e) || ke(e) ? { i: dt, r: e, k: t, f: !!n } : e : null);
function De(e, t = null, n = null, r = 0, o = null, a = e === Oe ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zd(t),
    ref: t && Ma(t),
    scopeId: ps,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: dt
  };
  return i ? (_l(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= nt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && ue("VNode created with invalid key (NaN). VNode type:", l.type), qo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  nn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && nn.push(l), l;
}
const Je = process.env.NODE_ENV !== "production" ? xv : ef;
function ef(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Md) && (process.env.NODE_ENV !== "production" && !e && ue(`Invalid vnode type when creating vnode: ${e}.`), e = Dt), ao(e)) {
    const i = Nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _l(i, n), qo > 0 && !a && nn && (i.shapeFlag & 6 ? nn[nn.indexOf(e)] = i : nn.push(i)), i.patchFlag |= -2, i;
  }
  if (af(e) && (e = e.__vccOpts), t) {
    t = Ct(t);
    let { class: i, style: l } = t;
    i && !nt(i) && (t.class = je(i)), We(l) && (Ba(l) && !ye(l) && (l = tt({}, l)), t.style = Vt(l));
  }
  const s = nt(e) ? 1 : Dm(e) ? 128 : _v(e) ? 64 : We(e) ? 4 : ke(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Ba(e) && (e = Se(e), ue(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), De(
    e,
    t,
    n,
    r,
    o,
    s,
    a,
    !0
  );
}
function Ct(e) {
  return e ? Ba(e) || ys in e ? tt({}, e) : e : null;
}
function Nn(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: a, children: s } = e, i = t ? xt(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && Zd(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? ye(o) ? o.concat(Ma(t)) : [o, Ma(t)] : Ma(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && ye(s) ? s.map(tf) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Nn(e.ssContent),
    ssFallback: e.ssFallback && Nn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function tf(e) {
  const t = Nn(e);
  return ye(e.children) && (t.children = e.children.map(tf)), t;
}
function sn(e = " ", t = 0) {
  return Je(aa, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (V(), Re(Dt, null, e)) : Je(Dt, null, e);
}
function Jt(e) {
  return e == null || typeof e == "boolean" ? Je(Dt) : ye(e) ? Je(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? qn(e) : Je(aa, null, String(e));
}
function qn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nn(e);
}
function _l(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ye(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), _l(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(ys in t) ? t._ctx = dt : o === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ke(t) ? (t = { default: t, _ctx: dt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [sn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = je([t.class, r.class]));
      else if (o === "style")
        t.style = Vt([t.style, r.style]);
      else if (ea(o)) {
        const a = t[o], s = r[o];
        s && a !== s && !(ye(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function cn(e, t, n, r = null) {
  zt(e, t, 7, [
    n,
    r
  ]);
}
const Dv = Yd();
let Tv = 0;
function kv(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Dv, a = {
    uid: Tv++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Qc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Wd(r, o),
    emitsOptions: Td(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ke,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ke,
    data: Ke,
    props: Ke,
    attrs: Ke,
    slots: Ke,
    refs: Ke,
    setupState: Ke,
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
  return process.env.NODE_ENV !== "production" ? a.ctx = Um(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = _m.bind(null, a), e.ce && e.ce(a), a;
}
let gt = null;
const sa = () => gt || dt;
let qa, Ai;
{
  const e = nl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((s) => s(a)) : o[0](a);
    };
  };
  qa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => gt = n
  ), Ai = t(
    "__VUE_SSR_SETTERS__",
    (n) => gs = n
  );
}
const ia = (e) => {
  const t = gt;
  return qa(e), e.scope.on(), () => {
    e.scope.off(), qa(t);
  };
}, Su = () => {
  gt && gt.scope.off(), qa(null);
}, Sv = /* @__PURE__ */ $n("slot,component");
function Ci(e, { isNativeTag: t }) {
  (Sv(e) || t(e)) && ue(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function nf(e) {
  return e.vnode.shapeFlag & 4;
}
let gs = !1;
function Mv(e, t = !1) {
  t && Ai(t);
  const { props: n, children: r } = e.vnode, o = nf(e);
  ov(e, n, o, t), pv(e, r);
  const a = o ? Pv(e, t) : void 0;
  return t && Ai(!1), a;
}
function Pv(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Ci(r.name, e.appContext.config), r.components) {
      const a = Object.keys(r.components);
      for (let s = 0; s < a.length; s++)
        Ci(a[s], e.appContext.config);
    }
    if (r.directives) {
      const a = Object.keys(r.directives);
      for (let s = 0; s < a.length; s++)
        Cd(a[s]);
    }
    r.compilerOptions && Av() && ue(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Pn(new Proxy(e.ctx, jd)), process.env.NODE_ENV !== "production" && Wm(e);
  const { setup: o } = r;
  if (o) {
    const a = e.setupContext = o.length > 1 ? of(e) : null, s = ia(e);
    sr();
    const i = Cn(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Xr(e.props) : e.props,
        a
      ]
    );
    if (ir(), s(), Zi(i)) {
      if (i.then(Su, Su), t)
        return i.then((l) => {
          Mu(e, l, t);
        }).catch((l) => {
          na(l, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        ue(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Mu(e, i, t);
  } else
    rf(e, t);
}
function Mu(e, t, n) {
  ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : We(t) ? (process.env.NODE_ENV !== "production" && ao(t) && ue(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = vd(t), process.env.NODE_ENV !== "production" && qm(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && ue(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), rf(e, n);
}
let $i;
const Av = () => !$i;
function rf(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && $i && !r.render) {
      const o = r.template || gl(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Tn(e, "compile");
        const { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: l } = r, c = tt(
          tt(
            {
              isCustomElement: a,
              delimiters: i
            },
            s
          ),
          l
        );
        r.render = $i(o, c), process.env.NODE_ENV !== "production" && kn(e, "compile");
      }
    }
    e.render = r.render || yt;
  }
  {
    const o = ia(e);
    sr();
    try {
      Km(e);
    } finally {
      ir(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === yt && !t && (r.template ? ue(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : ue("Component is missing template or render function."));
}
function Pu(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return Ha(), kt(e, "get", "$attrs"), t[n];
      },
      set() {
        return ue("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return ue("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return kt(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Cv(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return kt(e, "get", "$slots"), t[n];
    }
  }));
}
function of(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && ue("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (ye(n) ? r = "array" : rt(n) && (r = "ref")), r !== "object" && ue(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Pu(e);
    },
    get slots() {
      return Cv(e);
    },
    get emit() {
      return (n, ...r) => e.emit(n, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return Pu(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bs(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(vd(Pn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Pr)
          return Pr[n](e);
      },
      has(t, n) {
        return n in t || n in Pr;
      }
    }));
}
const $v = /(?:^|[-_])(\w)/g, Rv = (e) => e.replace($v, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function wl(e, t = !0) {
  return ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _s(e, t, n = !1) {
  let r = wl(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (a) => {
      for (const s in a)
        if (a[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? Rv(r) : n ? "App" : "Anonymous";
}
function af(e) {
  return ke(e) && "__vccOpts" in e;
}
const oe = (e, t) => {
  const n = Wh(e, t, gs);
  if (process.env.NODE_ENV !== "production") {
    const r = sa();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function El(e, t, n = Ke) {
  const r = sa();
  if (process.env.NODE_ENV !== "production" && !r)
    return ue("useModel() called without active instance."), se();
  if (process.env.NODE_ENV !== "production" && !r.propsOptions[0][t])
    return ue(`useModel() called with prop "${t}" which is not declared.`), se();
  const o = an(t), a = wn(t), s = Kh((l, c) => {
    let d;
    return Mm(() => {
      const u = e[t];
      En(d, u) && (d = u, c());
    }), {
      get() {
        return l(), n.get ? n.get(d) : d;
      },
      set(u) {
        const p = r.vnode.props;
        !(p && // check if parent has passed v-model
        (t in p || o in p || a in p) && (`onUpdate:${t}` in p || `onUpdate:${o}` in p || `onUpdate:${a}` in p)) && En(u, d) && (d = u, c()), r.emit(`update:${t}`, n.set ? n.set(u) : u);
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
function sf(e, t, n) {
  const r = arguments.length;
  return r === 2 ? We(t) && !ye(t) ? ao(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ao(n) && (n = [n]), Je(e, t, n));
}
function Vv() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    header(u) {
      return We(u) ? u.__isVue ? ["div", e, "VueInstance"] : rt(u) ? [
        "div",
        {},
        ["span", e, d(u)],
        "<",
        i(u.value),
        ">"
      ] : yn(u) ? [
        "div",
        {},
        ["span", e, kr(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${or(u) ? " (readonly)" : ""}`
      ] : or(u) ? [
        "div",
        {},
        ["span", e, kr(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...a(u.$)
        ];
    }
  };
  function a(u) {
    const p = [];
    u.type.props && u.props && p.push(s("props", Se(u.props))), u.setupState !== Ke && p.push(s("setup", u.setupState)), u.data !== Ke && p.push(s("data", Se(u.data)));
    const m = l(u, "computed");
    m && p.push(s("computed", m));
    const y = l(u, "inject");
    return y && p.push(s("injected", y)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), p;
  }
  function s(u, p) {
    return p = tt({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          i(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, p = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : We(u) ? ["object", { object: p ? Se(u) : u }] : ["span", n, String(u)];
  }
  function l(u, p) {
    const m = u.type;
    if (ke(m))
      return;
    const y = {};
    for (const _ in u.ctx)
      c(m, _, p) && (y[_] = u.ctx[_]);
    return y;
  }
  function c(u, p, m) {
    const y = u[m];
    if (ye(y) && y.includes(p) || We(y) && p in y || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((_) => c(_, p, m)))
      return !0;
  }
  function d(u) {
    return kr(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Au = "3.4.21", er = process.env.NODE_ENV !== "production" ? ue : yt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Iv = "http://www.w3.org/2000/svg", Fv = "http://www.w3.org/1998/Math/MathML", Gn = typeof document < "u" ? document : null, Cu = Gn && /* @__PURE__ */ Gn.createElement("template"), Lv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Gn.createElementNS(Iv, e) : t === "mathml" ? Gn.createElementNS(Fv, e) : Gn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Gn.createTextNode(e),
  createComment: (e) => Gn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Gn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const s = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Cu.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const i = Cu.content;
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
}, Ln = "transition", _o = "animation", Go = Symbol("_vtc"), lr = (e, { slots: t }) => sf($m, Bv(e), t);
lr.displayName = "Transition";
const lf = {
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
lr.props = /* @__PURE__ */ tt(
  {},
  $d,
  lf
);
const hr = (e, t = []) => {
  ye(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, $u = (e) => e ? ye(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Bv(e) {
  const t = {};
  for (const M in e)
    M in lf || (t[M] = e[M]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: c = s,
    appearToClass: d = i,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, y = jv(o), _ = y && y[0], P = y && y[1], {
    onBeforeEnter: W,
    onEnter: q,
    onEnterCancelled: w,
    onLeave: g,
    onLeaveCancelled: N,
    onBeforeAppear: C = W,
    onAppear: b = q,
    onAppearCancelled: R = w
  } = t, j = (M, Y, U) => {
    mr(M, Y ? d : i), mr(M, Y ? c : s), U && U();
  }, B = (M, Y) => {
    M._isLeaving = !1, mr(M, u), mr(M, m), mr(M, p), Y && Y();
  }, x = (M) => (Y, U) => {
    const O = M ? b : q, A = () => j(Y, M, U);
    hr(O, [Y, A]), Ru(() => {
      mr(Y, M ? l : a), Bn(Y, M ? d : i), $u(O) || Vu(Y, r, _, A);
    });
  };
  return tt(t, {
    onBeforeEnter(M) {
      hr(W, [M]), Bn(M, a), Bn(M, s);
    },
    onBeforeAppear(M) {
      hr(C, [M]), Bn(M, l), Bn(M, c);
    },
    onEnter: x(!1),
    onAppear: x(!0),
    onLeave(M, Y) {
      M._isLeaving = !0;
      const U = () => B(M, Y);
      Bn(M, u), Uv(), Bn(M, p), Ru(() => {
        M._isLeaving && (mr(M, u), Bn(M, m), $u(g) || Vu(M, r, P, U));
      }), hr(g, [M, U]);
    },
    onEnterCancelled(M) {
      j(M, !1), hr(w, [M]);
    },
    onAppearCancelled(M) {
      j(M, !0), hr(R, [M]);
    },
    onLeaveCancelled(M) {
      B(M), hr(N, [M]);
    }
  });
}
function jv(e) {
  if (e == null)
    return null;
  if (We(e))
    return [qs(e.enter), qs(e.leave)];
  {
    const t = qs(e);
    return [t, t];
  }
}
function qs(e) {
  const t = ih(e);
  return process.env.NODE_ENV !== "production" && nm(t, "<transition> explicit duration"), t;
}
function Bn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Go] || (e[Go] = /* @__PURE__ */ new Set())).add(t);
}
function mr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Go];
  n && (n.delete(t), n.size || (e[Go] = void 0));
}
function Ru(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Hv = 0;
function Vu(e, t, n, r) {
  const o = e._endId = ++Hv, a = () => {
    o === e._endId && r();
  };
  if (n)
    return setTimeout(a, n);
  const { type: s, timeout: i, propCount: l } = Yv(e, t);
  if (!s)
    return r();
  const c = s + "end";
  let d = 0;
  const u = () => {
    e.removeEventListener(c, p), a();
  }, p = (m) => {
    m.target === e && ++d >= l && u();
  };
  setTimeout(() => {
    d < l && u();
  }, i + 1), e.addEventListener(c, p);
}
function Yv(e, t) {
  const n = window.getComputedStyle(e), r = (y) => (n[y] || "").split(", "), o = r(`${Ln}Delay`), a = r(`${Ln}Duration`), s = Iu(o, a), i = r(`${_o}Delay`), l = r(`${_o}Duration`), c = Iu(i, l);
  let d = null, u = 0, p = 0;
  t === Ln ? s > 0 && (d = Ln, u = s, p = a.length) : t === _o ? c > 0 && (d = _o, u = c, p = l.length) : (u = Math.max(s, c), d = u > 0 ? s > c ? Ln : _o : null, p = d ? d === Ln ? a.length : l.length : 0);
  const m = d === Ln && /\b(transform|all)(,|$)/.test(
    r(`${Ln}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: p,
    hasTransform: m
  };
}
function Iu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Fu(n) + Fu(e[r])));
}
function Fu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Uv() {
  return document.body.offsetHeight;
}
function Wv(e, t, n) {
  const r = e[Go];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ga = Symbol("_vod"), uf = Symbol("_vsh"), Io = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ga] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : wo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), wo(e, !0), r.enter(e)) : r.leave(e, () => {
      wo(e, !1);
    }) : wo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    wo(e, t);
  }
};
process.env.NODE_ENV !== "production" && (Io.name = "show");
function wo(e, t) {
  e.style.display = t ? e[Ga] : "none", e[uf] = !t;
}
const qv = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Gv = /(^|;)\s*display\s*:/;
function zv(e, t, n) {
  const r = e.style, o = nt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (nt(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          n[i] == null && Pa(r, i, "");
        }
      else
        for (const s in t)
          n[s] == null && Pa(r, s, "");
    for (const s in n)
      s === "display" && (a = !0), Pa(r, s, n[s]);
  } else if (o) {
    if (t !== n) {
      const s = r[qv];
      s && (n += ";" + s), r.cssText = n, a = Gv.test(n);
    }
  } else t && e.removeAttribute("style");
  Ga in e && (e[Ga] = a ? r.display : "", e[uf] && (r.display = "none"));
}
const Kv = /[^\\];\s*$/, Lu = /\s*!important$/;
function Pa(e, t, n) {
  if (ye(n))
    n.forEach((r) => Pa(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Kv.test(n) && er(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Qv(e, t);
    Lu.test(n) ? e.setProperty(
      wn(r),
      n.replace(Lu, ""),
      "important"
    ) : e[r] = n;
  }
}
const Bu = ["Webkit", "Moz", "ms"], Gs = {};
function Qv(e, t) {
  const n = Gs[t];
  if (n)
    return n;
  let r = an(t);
  if (r !== "filter" && r in e)
    return Gs[t] = r;
  r = Rr(r);
  for (let o = 0; o < Bu.length; o++) {
    const a = Bu[o] + r;
    if (a in e)
      return Gs[t] = a;
  }
  return t;
}
const ju = "http://www.w3.org/1999/xlink";
function Xv(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ju, t.slice(6, t.length)) : e.setAttributeNS(ju, t, n);
  else {
    const a = bh(t);
    n == null || a && !zc(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function Jv(e, t, n, r, o, a, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, o, a), e[t] = n ?? "";
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n ?? "";
    (c !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = zc(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !l && er(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  l && e.removeAttribute(t);
}
function wr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Zv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Hu = Symbol("_vei");
function ey(e, t, n, r, o = null) {
  const a = e[Hu] || (e[Hu] = {}), s = a[t];
  if (r && s)
    s.value = r;
  else {
    const [i, l] = ty(t);
    if (r) {
      const c = a[t] = oy(r, o);
      wr(e, i, c, l);
    } else s && (Zv(e, i, s, l), a[t] = void 0);
  }
}
const Yu = /(?:Once|Passive|Capture)$/;
function ty(e) {
  let t;
  if (Yu.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Yu); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : wn(e.slice(2)), t];
}
let zs = 0;
const ny = /* @__PURE__ */ Promise.resolve(), ry = () => zs || (ny.then(() => zs = 0), zs = Date.now());
function oy(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    zt(
      ay(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ry(), n;
}
function ay(e, t) {
  if (ye(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const Uu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sy = (e, t, n, r, o, a, s, i, l) => {
  const c = o === "svg";
  t === "class" ? Wv(e, r, c) : t === "style" ? zv(e, n, r) : ea(t) ? Ia(t) || ey(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : iy(e, t, r, c)) ? Jv(
    e,
    t,
    r,
    a,
    s,
    i,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xv(e, t, r, c));
};
function iy(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Uu(t) && ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Uu(t) && nt(n) ? !1 : t in e;
}
const za = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => zr(t, n) : t;
};
function ly(e) {
  e.target.composing = !0;
}
function Wu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const oo = Symbol("_assign"), qu = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[oo] = za(o);
    const a = r || o.props && o.props.type === "number";
    wr(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), a && (i = Ho(i)), e[oo](i);
    }), n && wr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (wr(e, "compositionstart", ly), wr(e, "compositionend", Wu), wr(e, "change", Wu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: o } }, a) {
    if (e[oo] = za(a), e.composing)
      return;
    const s = o || e.type === "number" ? Ho(e.value) : e.value, i = t ?? "";
    s !== i && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === i) || (e.value = i));
  }
}, cf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = as(t);
    wr(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? Ho(Ka(s)) : Ka(s)
      );
      e[oo](
        e.multiple ? o ? new Set(a) : a : a[0]
      ), e._assigning = !0, Kt(() => {
        e._assigning = !1;
      });
    }), e[oo] = za(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Gu(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[oo] = za(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Gu(e, t, n);
  }
};
function Gu(e, t, n) {
  const r = e.multiple, o = ye(t);
  if (r && !o && !as(t)) {
    process.env.NODE_ENV !== "production" && er(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let a = 0, s = e.options.length; a < s; a++) {
    const i = e.options[a], l = Ka(i);
    if (r)
      if (o) {
        const c = typeof l;
        c === "string" || c === "number" ? i.selected = t.includes(
          n ? Ho(l) : l
        ) : i.selected = wh(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (is(Ka(i), t)) {
      e.selectedIndex !== a && (e.selectedIndex = a);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ka(e) {
  return "_value" in e ? e._value : e.value;
}
const uy = ["ctrl", "shift", "alt", "meta"], cy = {
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
  exact: (e, t) => uy.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xe = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const i = cy[t[s]];
      if (i && i(o, t))
        return;
    }
    return e(o, ...a);
  });
}, dy = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ce = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const a = wn(o.key);
    if (t.some((s) => s === a || dy[s] === a))
      return e(o);
  });
}, fy = /* @__PURE__ */ tt({ patchProp: sy }, Lv);
let zu;
function df() {
  return zu || (zu = vv(fy));
}
const Ku = (...e) => {
  df().render(...e);
}, ON = (...e) => {
  const t = df().createApp(...e);
  process.env.NODE_ENV !== "production" && (hy(t), my(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = vy(r);
    if (!o)
      return;
    const a = t._component;
    !ke(a) && !a.render && !a.template && (a.template = o.innerHTML), o.innerHTML = "";
    const s = n(o, !1, py(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function py(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hy(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => mh(t) || vh(t) || yh(t),
    writable: !1
  });
}
function my(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        er(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return er(r), n;
      },
      set() {
        er(r);
      }
    });
  }
}
function vy(e) {
  if (nt(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && er(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && er(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function yy() {
  Vv();
}
process.env.NODE_ENV !== "production" && yy();
var ff = !1;
function Na(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Ks(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function gy() {
  return pf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function pf() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const by = typeof Proxy == "function", _y = "devtools-plugin:setup", wy = "plugin:settings:set";
let Yr, Ri;
function Ey() {
  var e;
  return Yr !== void 0 || (typeof window < "u" && window.performance ? (Yr = !0, Ri = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Yr = !0, Ri = globalThis.perf_hooks.performance) : Yr = !1), Yr;
}
function Oy() {
  return Ey() ? Ri.now() : Date.now();
}
class Ny {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const s in t.settings) {
        const i = t.settings[s];
        r[s] = i.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, r);
    try {
      const s = localStorage.getItem(o), i = JSON.parse(s);
      Object.assign(a, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(s) {
        try {
          localStorage.setItem(o, JSON.stringify(s));
        } catch {
        }
        a = s;
      },
      now() {
        return Oy();
      }
    }, n && n.on(wy, (s, i) => {
      s === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
        method: i,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[i](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: i,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function hf(e, t) {
  const n = e, r = pf(), o = gy(), a = by && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(_y, e, t);
  else {
    const s = a ? new Ny(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let So;
const zo = (e) => So = e, mf = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Ir(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var gn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(gn || (gn = {}));
const ws = typeof window < "u", Fo = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && ws, Qu = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function xy(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ol(e, t, n) {
  const r = new XMLHttpRequest();
  r.open("GET", e), r.responseType = "blob", r.onload = function() {
    gf(r.response, t, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function vf(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Aa(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Ca = typeof navigator == "object" ? navigator : { userAgent: "" }, yf = /Macintosh/.test(Ca.userAgent) && /AppleWebKit/.test(Ca.userAgent) && !/Safari/.test(Ca.userAgent), gf = ws ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !yf ? Dy : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ca ? Ty : (
      // Fallback to using FileReader and a popup
      ky
    )
  )
) : () => {
};
function Dy(e, t = "download", n) {
  const r = document.createElement("a");
  r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? vf(r.href) ? Ol(e, t, n) : (r.target = "_blank", Aa(r)) : Aa(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Aa(r);
  }, 0));
}
function Ty(e, t = "download", n) {
  if (typeof e == "string")
    if (vf(e))
      Ol(e, t, n);
    else {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", setTimeout(function() {
        Aa(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(xy(e, n), t);
}
function ky(e, t, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
    return Ol(e, t, n);
  const o = e.type === "application/octet-stream", a = /constructor/i.test(String(Qu.HTMLElement)) || "safari" in Qu, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || o && a || yf) && typeof FileReader < "u") {
    const i = new FileReader();
    i.onloadend = function() {
      let l = i.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = s ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, i.readAsDataURL(e);
  } else {
    const i = URL.createObjectURL(e);
    r ? r.location.assign(i) : location.href = i, r = null, setTimeout(function() {
      URL.revokeObjectURL(i);
    }, 4e4);
  }
}
function Nt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Nl(e) {
  return "_a" in e && "install" in e;
}
function bf() {
  if (!("clipboard" in navigator))
    return Nt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function _f(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Nt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Sy(e) {
  if (!bf())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Nt("Global state copied to clipboard.");
    } catch (t) {
      if (_f(t))
        return;
      Nt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function My(e) {
  if (!bf())
    try {
      wf(e, JSON.parse(await navigator.clipboard.readText())), Nt("Global state pasted from clipboard.");
    } catch (t) {
      if (_f(t))
        return;
      Nt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Py(e) {
  try {
    gf(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Nt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Dn;
function Ay() {
  Dn || (Dn = document.createElement("input"), Dn.type = "file", Dn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Dn.onchange = async () => {
        const r = Dn.files;
        if (!r)
          return t(null);
        const o = r.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Dn.oncancel = () => t(null), Dn.onerror = n, Dn.click();
    });
  }
  return e;
}
async function Cy(e) {
  try {
    const n = await Ay()();
    if (!n)
      return;
    const { text: r, file: o } = n;
    wf(e, JSON.parse(r)), Nt(`Global state imported from "${o.name}".`);
  } catch (t) {
    Nt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function wf(e, t) {
  for (const n in t) {
    const r = e.state.value[n];
    r ? Object.assign(r, t[n]) : e.state.value[n] = t[n];
  }
}
function Xt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Ef = "🍍 Pinia (root)", Vi = "_root";
function $y(e) {
  return Nl(e) ? {
    id: Vi,
    label: Ef
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Ry(e) {
  if (Nl(e)) {
    const n = Array.from(e._s.keys()), r = e._s;
    return {
      state: n.map((a) => ({
        editable: !0,
        key: a,
        value: e.state.value[a]
      })),
      getters: n.filter((a) => r.get(a)._getters).map((a) => {
        const s = r.get(a);
        return {
          editable: !1,
          key: a,
          value: s._getters.reduce((i, l) => (i[l] = s[l], i), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Vy(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Xt(e.type),
    key: Xt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Iy(e) {
  switch (e) {
    case gn.direct:
      return "mutation";
    case gn.patchFunction:
      return "$patch";
    case gn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Jr = !0;
const $a = [], yr = "pinia:mutations", Pt = "pinia", { assign: Fy } = Object, Qa = (e) => "🍍 " + e;
function Ly(e, t) {
  hf({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: $a,
    app: e
  }, (n) => {
    typeof n.now != "function" && Nt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: yr,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Pt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Sy(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await My(t), n.sendInspectorTree(Pt), n.sendInspectorState(Pt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Py(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Cy(t), n.sendInspectorTree(Pt), n.sendInspectorState(Pt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const o = t._s.get(r);
            o ? typeof o.$reset != "function" ? Nt(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), Nt(`Store "${r}" reset.`)) : Nt(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, o) => {
      const a = r.componentInstance && r.componentInstance.proxy;
      if (a && a._pStores) {
        const s = r.componentInstance.proxy._pStores;
        Object.values(s).forEach((i) => {
          r.instanceData.state.push({
            type: Qa(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: Se(i.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => i.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(i.$state).reduce((l, c) => (l[c] = i.$state[c], l), {})
            )
          }), i._getters && i._getters.length && r.instanceData.state.push({
            type: Qa(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((l, c) => {
              try {
                l[c] = i[c];
              } catch (d) {
                l[c] = d;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === e && r.inspectorId === Pt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? o.filter((a) => "$id" in a ? a.$id.toLowerCase().includes(r.filter.toLowerCase()) : Ef.toLowerCase().includes(r.filter.toLowerCase())) : o).map($y);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === Pt) {
        const o = r.nodeId === Vi ? t : t._s.get(r.nodeId);
        if (!o)
          return;
        o && (r.state = Ry(o));
      }
    }), n.on.editInspectorState((r, o) => {
      if (r.app === e && r.inspectorId === Pt) {
        const a = r.nodeId === Vi ? t : t._s.get(r.nodeId);
        if (!a)
          return Nt(`store "${r.nodeId}" not found`, "error");
        const { path: s } = r;
        Nl(a) ? s.unshift("state") : (s.length !== 1 || !a._customProperties.has(s[0]) || s[0] in a.$state) && s.unshift("$state"), Jr = !1, r.set(a, s, r.state.value), Jr = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("🍍")) {
        const o = r.type.replace(/^🍍\s*/, ""), a = t._s.get(o);
        if (!a)
          return Nt(`store "${o}" not found`, "error");
        const { path: s } = r;
        if (s[0] !== "state")
          return Nt(`Invalid path for store "${o}":
${s}
Only state can be modified.`);
        s[0] = "$state", Jr = !1, r.set(a, s, r.state.value), Jr = !0;
      }
    });
  });
}
function By(e, t) {
  $a.includes(Qa(t.$id)) || $a.push(Qa(t.$id)), hf({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: $a,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: i, name: l, args: c }) => {
      const d = Of++;
      n.addTimelineEvent({
        layerId: yr,
        event: {
          time: r(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: Xt(t.$id),
            action: Xt(l),
            args: c
          },
          groupId: d
        }
      }), s((u) => {
        Kn = void 0, n.addTimelineEvent({
          layerId: yr,
          event: {
            time: r(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: Xt(t.$id),
              action: Xt(l),
              args: c,
              result: u
            },
            groupId: d
          }
        });
      }), i((u) => {
        Kn = void 0, n.addTimelineEvent({
          layerId: yr,
          event: {
            time: r(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: Xt(t.$id),
              action: Xt(l),
              args: c,
              error: u
            },
            groupId: d
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      _t(() => D(t[s]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Pt), Jr && n.addTimelineEvent({
          layerId: yr,
          event: {
            time: r(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: Kn
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Pt), !Jr)
        return;
      const c = {
        time: r(),
        title: Iy(i),
        data: Fy({ store: Xt(t.$id) }, Vy(s)),
        groupId: Kn
      };
      i === gn.patchFunction ? c.subtitle = "⤵️" : i === gn.patchObject ? c.subtitle = "🧩" : s && !Array.isArray(s) && (c.subtitle = s.type), s && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: yr,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = Pn((s) => {
      o(s), n.addTimelineEvent({
        layerId: yr,
        event: {
          time: r(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Xt(t.$id),
            info: Xt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Pt), n.sendInspectorState(Pt);
    });
    const { $dispose: a } = t;
    t.$dispose = () => {
      a(), n.notifyComponentUpdate(), n.sendInspectorTree(Pt), n.sendInspectorState(Pt), n.getSettings().logStoreChanges && Nt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Pt), n.sendInspectorState(Pt), n.getSettings().logStoreChanges && Nt(`"${t.$id}" store installed 🆕`);
  });
}
let Of = 0, Kn;
function Xu(e, t, n) {
  const r = t.reduce((o, a) => (o[a] = Se(e)[a], o), {});
  for (const o in r)
    e[o] = function() {
      const a = Of, s = n ? new Proxy(e, {
        get(...l) {
          return Kn = a, Reflect.get(...l);
        },
        set(...l) {
          return Kn = a, Reflect.set(...l);
        }
      }) : e;
      Kn = a;
      const i = r[o].apply(s, arguments);
      return Kn = void 0, i;
    };
}
function jy({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Xu(t, Object.keys(n.actions), t._isOptionsAPI);
  const r = t._hotUpdate;
  Se(t)._hotUpdate = function(o) {
    r.apply(this, arguments), Xu(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
  }, By(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function NN() {
  const e = Xc(!0), t = e.run(() => se({}));
  let n = [], r = [];
  const o = Pn({
    install(a) {
      zo(o), o._a = a, a.provide(mf, o), a.config.globalProperties.$pinia = o, Fo && Ly(a, o), r.forEach((s) => n.push(s)), r = [];
    },
    use(a) {
      return !this._a && !ff ? r.push(a) : n.push(a), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Fo && typeof Proxy < "u" && o.use(jy), o;
}
function Nf(e, t) {
  for (const n in t) {
    const r = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Ir(o) && Ir(r) && !rt(r) && !yn(r) ? e[n] = Nf(o, r) : e[n] = r;
  }
  return e;
}
const xf = () => {
};
function Ju(e, t, n, r = xf) {
  e.push(t);
  const o = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), r());
  };
  return !n && rl() && Jc(o), o;
}
function Ur(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Hy = (e) => e();
function Ii(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Ir(o) && Ir(r) && e.hasOwnProperty(n) && !rt(r) && !yn(r) ? e[n] = Ii(o, r) : e[n] = r;
  }
  return e;
}
const Yy = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Uy(e) {
  return !Ir(e) || !e.hasOwnProperty(Yy);
}
const { assign: Gt } = Object;
function Zu(e) {
  return !!(rt(e) && e.effect);
}
function ec(e, t, n, r) {
  const { state: o, actions: a, getters: s } = t, i = n.state.value[e];
  let l;
  function c() {
    !i && (process.env.NODE_ENV === "production" || !r) && (n.state.value[e] = o ? o() : {});
    const d = process.env.NODE_ENV !== "production" && r ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      du(se(o ? o() : {}).value)
    ) : du(n.state.value[e]);
    return Gt(d, a, Object.keys(s || {}).reduce((u, p) => (process.env.NODE_ENV !== "production" && p in d && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), u[p] = Pn(oe(() => {
      zo(n);
      const m = n._s.get(e);
      return s[p].call(m, m);
    })), u), {}));
  }
  return l = Fi(e, c, t, n, r, !0), l;
}
function Fi(e, t, n = {}, r, o, a) {
  let s;
  const i = Gt({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !ff && (l.onTrigger = (B) => {
    c ? m = B : c == !1 && !b._hotUpdating && (Array.isArray(m) ? m.push(B) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, d, u = [], p = [], m;
  const y = r.state.value[e];
  !a && !y && (process.env.NODE_ENV === "production" || !o) && (r.state.value[e] = {});
  const _ = se({});
  let P;
  function W(B) {
    let x;
    c = d = !1, process.env.NODE_ENV !== "production" && (m = []), typeof B == "function" ? (B(r.state.value[e]), x = {
      type: gn.patchFunction,
      storeId: e,
      events: m
    }) : (Ii(r.state.value[e], B), x = {
      type: gn.patchObject,
      payload: B,
      storeId: e,
      events: m
    });
    const M = P = Symbol();
    Kt().then(() => {
      P === M && (c = !0);
    }), d = !0, Ur(u, x, r.state.value[e]);
  }
  const q = a ? function() {
    const { state: x } = n, M = x ? x() : {};
    this.$patch((Y) => {
      Gt(Y, M);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : xf
  );
  function w() {
    s.stop(), u = [], p = [], r._s.delete(e);
  }
  function g(B, x) {
    return function() {
      zo(r);
      const M = Array.from(arguments), Y = [], U = [];
      function O(K) {
        Y.push(K);
      }
      function A(K) {
        U.push(K);
      }
      Ur(p, {
        args: M,
        name: B,
        store: b,
        after: O,
        onError: A
      });
      let H;
      try {
        H = x.apply(this && this.$id === e ? this : b, M);
      } catch (K) {
        throw Ur(U, K), K;
      }
      return H instanceof Promise ? H.then((K) => (Ur(Y, K), K)).catch((K) => (Ur(U, K), Promise.reject(K))) : (Ur(Y, H), H);
    };
  }
  const N = /* @__PURE__ */ Pn({
    actions: {},
    getters: {},
    state: [],
    hotState: _
  }), C = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ju.bind(null, p),
    $patch: W,
    $reset: q,
    $subscribe(B, x = {}) {
      const M = Ju(u, B, x.detached, () => Y()), Y = s.run(() => _t(() => r.state.value[e], (U) => {
        (x.flush === "sync" ? d : c) && B({
          storeId: e,
          type: gn.direct,
          events: m
        }, U);
      }, Gt({}, l, x)));
      return M;
    },
    $dispose: w
  }, b = Rn(process.env.NODE_ENV !== "production" || Fo ? Gt(
    {
      _hmrPayload: N,
      _customProperties: Pn(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    C
    // must be added later
    // setupStore
  ) : C);
  r._s.set(e, b);
  const j = (r._a && r._a.runWithContext || Hy)(() => r._e.run(() => (s = Xc()).run(t)));
  for (const B in j) {
    const x = j[B];
    if (rt(x) && !Zu(x) || yn(x))
      process.env.NODE_ENV !== "production" && o ? Na(_.value, B, Sr(j, B)) : a || (y && Uy(x) && (rt(x) ? x.value = y[B] : Ii(x, y[B])), r.state.value[e][B] = x), process.env.NODE_ENV !== "production" && N.state.push(B);
    else if (typeof x == "function") {
      const M = process.env.NODE_ENV !== "production" && o ? x : g(B, x);
      j[B] = M, process.env.NODE_ENV !== "production" && (N.actions[B] = x), i.actions[B] = x;
    } else process.env.NODE_ENV !== "production" && Zu(x) && (N.getters[B] = a ? (
      // @ts-expect-error
      n.getters[B]
    ) : x, ws && (j._getters || // @ts-expect-error: same
    (j._getters = Pn([]))).push(B));
  }
  if (Gt(b, j), Gt(Se(b), j), Object.defineProperty(b, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? _.value : r.state.value[e],
    set: (B) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      W((x) => {
        Gt(x, B);
      });
    }
  }), process.env.NODE_ENV !== "production" && (b._hotUpdate = Pn((B) => {
    b._hotUpdating = !0, B._hmrPayload.state.forEach((x) => {
      if (x in b.$state) {
        const M = B.$state[x], Y = b.$state[x];
        typeof M == "object" && Ir(M) && Ir(Y) ? Nf(M, Y) : B.$state[x] = Y;
      }
      Na(b, x, Sr(B.$state, x));
    }), Object.keys(b.$state).forEach((x) => {
      x in B.$state || Ks(b, x);
    }), c = !1, d = !1, r.state.value[e] = Sr(B._hmrPayload, "hotState"), d = !0, Kt().then(() => {
      c = !0;
    });
    for (const x in B._hmrPayload.actions) {
      const M = B[x];
      Na(b, x, g(x, M));
    }
    for (const x in B._hmrPayload.getters) {
      const M = B._hmrPayload.getters[x], Y = a ? (
        // special handling of options api
        oe(() => (zo(r), M.call(b, b)))
      ) : M;
      Na(b, x, Y);
    }
    Object.keys(b._hmrPayload.getters).forEach((x) => {
      x in B._hmrPayload.getters || Ks(b, x);
    }), Object.keys(b._hmrPayload.actions).forEach((x) => {
      x in B._hmrPayload.actions || Ks(b, x);
    }), b._hmrPayload = B._hmrPayload, b._getters = B._getters, b._hotUpdating = !1;
  })), Fo) {
    const B = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((x) => {
      Object.defineProperty(b, x, Gt({ value: b[x] }, B));
    });
  }
  return r._p.forEach((B) => {
    if (Fo) {
      const x = s.run(() => B({
        store: b,
        app: r._a,
        pinia: r,
        options: i
      }));
      Object.keys(x || {}).forEach((M) => b._customProperties.add(M)), Gt(b, x);
    } else
      Gt(b, s.run(() => B({
        store: b,
        app: r._a,
        pinia: r,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && b.$state && typeof b.$state == "object" && typeof b.$state.constructor == "function" && !b.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${b.$id}".`), y && a && n.hydrate && n.hydrate(b.$state, y), c = !0, d = !0, b;
}
function Wy(e, t, n) {
  let r, o;
  const a = typeof t == "function";
  r = e, o = a ? n : t;
  function s(i, l) {
    const c = rv();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && So && So._testing ? null : i) || (c ? $o(mf, null) : null), i && zo(i), process.env.NODE_ENV !== "production" && !So)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = So, i._s.has(r) || (a ? Fi(r, t, o, i) : ec(r, o, i), process.env.NODE_ENV !== "production" && (s._pinia = i));
    const d = i._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const u = "__hot:" + r, p = a ? Fi(u, t, o, i, !0) : ec(u, Gt({}, o), i, !0);
      l._hotUpdate(p), delete i.state.value[u], i._s.delete(u);
    }
    if (process.env.NODE_ENV !== "production" && ws) {
      const u = sa();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const p = u.proxy, m = "_pStores" in p ? p._pStores : p._pStores = {};
        m[r] = d;
      }
    }
    return d;
  }
  return s.$id = r, s;
}
var Df = typeof global == "object" && global && global.Object === Object && global, qy = typeof self == "object" && self && self.Object === Object && self, Es = Df || qy || Function("return this")(), Xa = Es.Symbol, Tf = Object.prototype, Gy = Tf.hasOwnProperty, zy = Tf.toString, Eo = Xa ? Xa.toStringTag : void 0;
function Ky(e) {
  var t = Gy.call(e, Eo), n = e[Eo];
  try {
    e[Eo] = void 0;
    var r = !0;
  } catch {
  }
  var o = zy.call(e);
  return r && (t ? e[Eo] = n : delete e[Eo]), o;
}
var Qy = Object.prototype, Xy = Qy.toString;
function Jy(e) {
  return Xy.call(e);
}
var Zy = "[object Null]", eg = "[object Undefined]", tc = Xa ? Xa.toStringTag : void 0;
function xl(e) {
  return e == null ? e === void 0 ? eg : Zy : tc && tc in Object(e) ? Ky(e) : Jy(e);
}
function Os(e) {
  return e != null && typeof e == "object";
}
function kf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Sf = Array.isArray;
function Dl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Mf(e) {
  return e;
}
var tg = "[object AsyncFunction]", ng = "[object Function]", rg = "[object GeneratorFunction]", og = "[object Proxy]";
function Pf(e) {
  if (!Dl(e))
    return !1;
  var t = xl(e);
  return t == ng || t == rg || t == tg || t == og;
}
var Qs = Es["__core-js_shared__"], nc = function() {
  var e = /[^.]+$/.exec(Qs && Qs.keys && Qs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ag(e) {
  return !!nc && nc in e;
}
var sg = Function.prototype, ig = sg.toString;
function lg(e) {
  if (e != null) {
    try {
      return ig.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ug = /[\\^$.*+?()[\]{}|]/g, cg = /^\[object .+?Constructor\]$/, dg = Function.prototype, fg = Object.prototype, pg = dg.toString, hg = fg.hasOwnProperty, mg = RegExp(
  "^" + pg.call(hg).replace(ug, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vg(e) {
  if (!Dl(e) || ag(e))
    return !1;
  var t = Pf(e) ? mg : cg;
  return t.test(lg(e));
}
function yg(e, t) {
  return e == null ? void 0 : e[t];
}
function Tl(e, t) {
  var n = yg(e, t);
  return vg(n) ? n : void 0;
}
function gg(e, t, n) {
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
var bg = 800, _g = 16, wg = Date.now;
function Eg(e) {
  var t = 0, n = 0;
  return function() {
    var r = wg(), o = _g - (r - n);
    if (n = r, o > 0) {
      if (++t >= bg)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Og(e) {
  return function() {
    return e;
  };
}
var Ja = function() {
  try {
    var e = Tl(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ng = Ja ? function(e, t) {
  return Ja(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Og(t),
    writable: !0
  });
} : Mf, xg = Eg(Ng);
function Dg(e, t, n, r) {
  for (var o = e.length, a = n + -1; ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
function Tg(e) {
  return e !== e;
}
function kg(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Sg(e, t, n) {
  return t === t ? kg(e, t, n) : Dg(e, Tg, n);
}
function Mg(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Sg(e, t, 0) > -1;
}
var Pg = 9007199254740991, Ag = /^(?:0|[1-9]\d*)$/;
function Af(e, t) {
  var n = typeof e;
  return t = t ?? Pg, !!t && (n == "number" || n != "symbol" && Ag.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Cf(e, t, n) {
  t == "__proto__" && Ja ? Ja(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function kl(e, t) {
  return e === t || e !== e && t !== t;
}
var Cg = Object.prototype, $g = Cg.hasOwnProperty;
function $f(e, t, n) {
  var r = e[t];
  (!($g.call(e, t) && kl(r, n)) || n === void 0 && !(t in e)) && Cf(e, t, n);
}
function Rg(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = void 0;
    l === void 0 && (l = e[i]), o ? Cf(n, i, l) : $f(n, i, l);
  }
  return n;
}
var rc = Math.max;
function Vg(e, t, n) {
  return t = rc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = rc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), gg(e, this, i);
  };
}
function Rf(e, t) {
  return xg(Vg(e, t, Mf), e + "");
}
var Ig = 9007199254740991;
function Vf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ig;
}
function Ns(e) {
  return e != null && Vf(e.length) && !Pf(e);
}
function Fg(e, t, n) {
  if (!Dl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ns(n) && Af(t, n.length) : r == "string" && t in n) ? kl(n[t], e) : !1;
}
function Lg(e) {
  return Rf(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Fg(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var Bg = Object.prototype;
function If(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Bg;
  return e === n;
}
function jg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Hg = "[object Arguments]";
function oc(e) {
  return Os(e) && xl(e) == Hg;
}
var Ff = Object.prototype, Yg = Ff.hasOwnProperty, Ug = Ff.propertyIsEnumerable, Wg = oc(/* @__PURE__ */ function() {
  return arguments;
}()) ? oc : function(e) {
  return Os(e) && Yg.call(e, "callee") && !Ug.call(e, "callee");
};
function qg() {
  return !1;
}
var Lf = typeof exports == "object" && exports && !exports.nodeType && exports, ac = Lf && typeof module == "object" && module && !module.nodeType && module, Gg = ac && ac.exports === Lf, sc = Gg ? Es.Buffer : void 0, zg = sc ? sc.isBuffer : void 0, Kg = zg || qg, Qg = "[object Arguments]", Xg = "[object Array]", Jg = "[object Boolean]", Zg = "[object Date]", e0 = "[object Error]", t0 = "[object Function]", n0 = "[object Map]", r0 = "[object Number]", o0 = "[object Object]", a0 = "[object RegExp]", s0 = "[object Set]", i0 = "[object String]", l0 = "[object WeakMap]", u0 = "[object ArrayBuffer]", c0 = "[object DataView]", d0 = "[object Float32Array]", f0 = "[object Float64Array]", p0 = "[object Int8Array]", h0 = "[object Int16Array]", m0 = "[object Int32Array]", v0 = "[object Uint8Array]", y0 = "[object Uint8ClampedArray]", g0 = "[object Uint16Array]", b0 = "[object Uint32Array]", at = {};
at[d0] = at[f0] = at[p0] = at[h0] = at[m0] = at[v0] = at[y0] = at[g0] = at[b0] = !0;
at[Qg] = at[Xg] = at[u0] = at[Jg] = at[c0] = at[Zg] = at[e0] = at[t0] = at[n0] = at[r0] = at[o0] = at[a0] = at[s0] = at[i0] = at[l0] = !1;
function _0(e) {
  return Os(e) && Vf(e.length) && !!at[xl(e)];
}
function Bf(e) {
  return function(t) {
    return e(t);
  };
}
var jf = typeof exports == "object" && exports && !exports.nodeType && exports, Lo = jf && typeof module == "object" && module && !module.nodeType && module, w0 = Lo && Lo.exports === jf, Xs = w0 && Df.process, ic = function() {
  try {
    var e = Lo && Lo.require && Lo.require("util").types;
    return e || Xs && Xs.binding && Xs.binding("util");
  } catch {
  }
}(), lc = ic && ic.isTypedArray, E0 = lc ? Bf(lc) : _0, O0 = Object.prototype, N0 = O0.hasOwnProperty;
function x0(e, t) {
  var n = Sf(e), r = !n && Wg(e), o = !n && !r && Kg(e), a = !n && !r && !o && E0(e), s = n || r || o || a, i = s ? jg(e.length, String) : [], l = i.length;
  for (var c in e)
    N0.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Af(c, l))) && i.push(c);
  return i;
}
function D0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var T0 = D0(Object.keys, Object), k0 = Object.prototype, S0 = k0.hasOwnProperty;
function M0(e) {
  if (!If(e))
    return T0(e);
  var t = [];
  for (var n in Object(e))
    S0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function P0(e) {
  return Ns(e) ? x0(e) : M0(e);
}
var A0 = Object.prototype, C0 = A0.hasOwnProperty, $0 = Lg(function(e, t) {
  if (If(t) || Ns(t)) {
    Rg(t, P0(t), e);
    return;
  }
  for (var n in t)
    C0.call(t, n) && $f(e, n, t[n]);
}), Ko = Tl(Object, "create");
function R0() {
  this.__data__ = Ko ? Ko(null) : {}, this.size = 0;
}
function V0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var I0 = "__lodash_hash_undefined__", F0 = Object.prototype, L0 = F0.hasOwnProperty;
function B0(e) {
  var t = this.__data__;
  if (Ko) {
    var n = t[e];
    return n === I0 ? void 0 : n;
  }
  return L0.call(t, e) ? t[e] : void 0;
}
var j0 = Object.prototype, H0 = j0.hasOwnProperty;
function Y0(e) {
  var t = this.__data__;
  return Ko ? t[e] !== void 0 : H0.call(t, e);
}
var U0 = "__lodash_hash_undefined__";
function W0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ko && t === void 0 ? U0 : t, this;
}
function Fr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Fr.prototype.clear = R0;
Fr.prototype.delete = V0;
Fr.prototype.get = B0;
Fr.prototype.has = Y0;
Fr.prototype.set = W0;
function q0() {
  this.__data__ = [], this.size = 0;
}
function xs(e, t) {
  for (var n = e.length; n--; )
    if (kl(e[n][0], t))
      return n;
  return -1;
}
var G0 = Array.prototype, z0 = G0.splice;
function K0(e) {
  var t = this.__data__, n = xs(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : z0.call(t, n, 1), --this.size, !0;
}
function Q0(e) {
  var t = this.__data__, n = xs(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function X0(e) {
  return xs(this.__data__, e) > -1;
}
function J0(e, t) {
  var n = this.__data__, r = xs(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ho(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ho.prototype.clear = q0;
ho.prototype.delete = K0;
ho.prototype.get = Q0;
ho.prototype.has = X0;
ho.prototype.set = J0;
var Z0 = Tl(Es, "Map");
function eb() {
  this.size = 0, this.__data__ = {
    hash: new Fr(),
    map: new (Z0 || ho)(),
    string: new Fr()
  };
}
function tb(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ds(e, t) {
  var n = e.__data__;
  return tb(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nb(e) {
  var t = Ds(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rb(e) {
  return Ds(this, e).get(e);
}
function ob(e) {
  return Ds(this, e).has(e);
}
function ab(e, t) {
  var n = Ds(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function mo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mo.prototype.clear = eb;
mo.prototype.delete = nb;
mo.prototype.get = rb;
mo.prototype.has = ob;
mo.prototype.set = ab;
var sb = "__lodash_hash_undefined__";
function ib(e) {
  return this.__data__.set(e, sb), this;
}
function lb(e) {
  return this.__data__.has(e);
}
function Za(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new mo(); ++t < n; )
    this.add(e[t]);
}
Za.prototype.add = Za.prototype.push = ib;
Za.prototype.has = lb;
function uc(e, t) {
  return e.has(t);
}
function ub(e) {
  return Os(e) && Ns(e);
}
var cb = Math.min;
function db(e, t, n) {
  for (var r = Mg, o = e[0].length, a = e.length, s = a, i = Array(a), l = 1 / 0, c = []; s--; ) {
    var d = e[s];
    s && t && (d = kf(d, Bf(t))), l = cb(d.length, l), i[s] = o >= 120 && d.length >= 120 ? new Za(s && d) : void 0;
  }
  d = e[0];
  var u = -1, p = i[0];
  e:
    for (; ++u < o && c.length < l; ) {
      var m = d[u], y = m;
      if (m = m !== 0 ? m : 0, !(p ? uc(p, y) : r(c, y))) {
        for (s = a; --s; ) {
          var _ = i[s];
          if (!(_ ? uc(_, y) : r(e[s], y)))
            continue e;
        }
        p && p.push(y), c.push(m);
      }
    }
  return c;
}
function fb(e) {
  return ub(e) ? e : [];
}
var cc = Rf(function(e) {
  var t = kf(e, fb);
  return t.length && t[0] === e[0] ? db(t) : [];
});
function Wr(e) {
  return e === void 0;
}
const Sl = "Value", la = "ValueString", ua = "ValueFloat", Ts = "ValueDate", ca = "ValueFilePath", so = "Mode", Lr = "SubSystem", Hf = "Command", Li = [
  Sl,
  la,
  ua,
  Ts,
  ca
];
class Js {
  constructor(t) {
    $0(this, t);
  }
  getDestinations(t) {
    const n = Sf(t) ? t : [t];
    return this.destinations.reduce((o, a) => (n.includes(a.type) && o.push(a), o), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Li) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(so) : [];
  }
  getSubsystems() {
    return this.getDestinations(Lr);
  }
  getValidModes() {
    return this.validModes == null && (this.validModes = []), this.validModes;
  }
  getActiveSubnodes() {
    let t = [], n = this.subsystemsNodes;
    return console.log(`${this.name} has subsystems ${n.length}`), n.forEach((r) => {
      console.log(`s is ${typeof r} ${r.name}`), r.getValidModes().length > 0 && t.push(r);
    }), t;
  }
}
function Yf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: pb } = Object.prototype, { getPrototypeOf: Ml } = Object, ks = /* @__PURE__ */ ((e) => (t) => {
  const n = pb.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ln = (e) => (e = e.toLowerCase(), (t) => ks(t) === e), Ss = (e) => (t) => typeof t === e, { isArray: vo } = Array, Qo = Ss("undefined");
function hb(e) {
  return e !== null && !Qo(e) && e.constructor !== null && !Qo(e.constructor) && Ut(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Uf = ln("ArrayBuffer");
function mb(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Uf(e.buffer), t;
}
const vb = Ss("string"), Ut = Ss("function"), Wf = Ss("number"), Ms = (e) => e !== null && typeof e == "object", yb = (e) => e === !0 || e === !1, Ra = (e) => {
  if (ks(e) !== "object")
    return !1;
  const t = Ml(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, gb = ln("Date"), bb = ln("File"), _b = ln("Blob"), wb = ln("FileList"), Eb = (e) => Ms(e) && Ut(e.pipe), Ob = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ut(e.append) && ((t = ks(e)) === "formdata" || // detect form-data instance
  t === "object" && Ut(e.toString) && e.toString() === "[object FormData]"));
}, Nb = ln("URLSearchParams"), [xb, Db, Tb, kb] = ["ReadableStream", "Request", "Response", "Headers"].map(ln), Sb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function da(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), vo(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (r = 0; r < s; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function qf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Or = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Gf = (e) => !Qo(e) && e !== Or;
function Bi() {
  const { caseless: e } = Gf(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && qf(t, o) || o;
    Ra(t[a]) && Ra(r) ? t[a] = Bi(t[a], r) : Ra(r) ? t[a] = Bi({}, r) : vo(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && da(arguments[r], n);
  return t;
}
const Mb = (e, t, n, { allOwnKeys: r } = {}) => (da(t, (o, a) => {
  n && Ut(o) ? e[a] = Yf(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), Pb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ab = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Cb = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && Ml(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, $b = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Rb = (e) => {
  if (!e) return null;
  if (vo(e)) return e;
  let t = e.length;
  if (!Wf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Vb = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ml(Uint8Array)), Ib = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Fb = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Lb = ln("HTMLFormElement"), Bb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), dc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), jb = ln("RegExp"), zf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  da(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, Hb = (e) => {
  zf(e, (t, n) => {
    if (Ut(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ut(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Yb = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return vo(e) ? r(e) : r(String(e).split(t)), n;
}, Ub = () => {
}, Wb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Zs = "abcdefghijklmnopqrstuvwxyz", fc = "0123456789", Kf = {
  DIGIT: fc,
  ALPHA: Zs,
  ALPHA_DIGIT: Zs + Zs.toUpperCase() + fc
}, qb = (e = 16, t = Kf.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Gb(e) {
  return !!(e && Ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const zb = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ms(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = vo(r) ? [] : {};
        return da(r, (s, i) => {
          const l = n(s, o + 1);
          !Qo(l) && (a[i] = l);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, Kb = ln("AsyncFunction"), Qb = (e) => e && (Ms(e) || Ut(e)) && Ut(e.then) && Ut(e.catch), Qf = ((e, t) => e ? setImmediate : t ? ((n, r) => (Or.addEventListener("message", ({ source: o, data: a }) => {
  o === Or && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Or.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ut(Or.postMessage)
), Xb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Or) : typeof process < "u" && process.nextTick || Qf, G = {
  isArray: vo,
  isArrayBuffer: Uf,
  isBuffer: hb,
  isFormData: Ob,
  isArrayBufferView: mb,
  isString: vb,
  isNumber: Wf,
  isBoolean: yb,
  isObject: Ms,
  isPlainObject: Ra,
  isReadableStream: xb,
  isRequest: Db,
  isResponse: Tb,
  isHeaders: kb,
  isUndefined: Qo,
  isDate: gb,
  isFile: bb,
  isBlob: _b,
  isRegExp: jb,
  isFunction: Ut,
  isStream: Eb,
  isURLSearchParams: Nb,
  isTypedArray: Vb,
  isFileList: wb,
  forEach: da,
  merge: Bi,
  extend: Mb,
  trim: Sb,
  stripBOM: Pb,
  inherits: Ab,
  toFlatObject: Cb,
  kindOf: ks,
  kindOfTest: ln,
  endsWith: $b,
  toArray: Rb,
  forEachEntry: Ib,
  matchAll: Fb,
  isHTMLForm: Lb,
  hasOwnProperty: dc,
  hasOwnProp: dc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zf,
  freezeMethods: Hb,
  toObjectSet: Yb,
  toCamelCase: Bb,
  noop: Ub,
  toFiniteNumber: Wb,
  findKey: qf,
  global: Or,
  isContextDefined: Gf,
  ALPHABET: Kf,
  generateString: qb,
  isSpecCompliantForm: Gb,
  toJSONObject: zb,
  isAsyncFn: Kb,
  isThenable: Qb,
  setImmediate: Qf,
  asap: Xb
};
function $e(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
G.inherits($e, Error, {
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
      config: G.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Xf = $e.prototype, Jf = {};
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
  Jf[e] = { value: e };
});
Object.defineProperties($e, Jf);
Object.defineProperty(Xf, "isAxiosError", { value: !0 });
$e.from = (e, t, n, r, o, a) => {
  const s = Object.create(Xf);
  return G.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), $e.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const Jb = null;
function ji(e) {
  return G.isPlainObject(e) || G.isArray(e);
}
function Zf(e) {
  return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pc(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Zf(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Zb(e) {
  return G.isArray(e) && !e.some(ji);
}
const e_ = G.toFlatObject(G, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ps(e, t, n) {
  if (!G.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = G.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, P) {
    return !G.isUndefined(P[_]);
  });
  const r = n.metaTokens, o = n.visitor || d, a = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && G.isSpecCompliantForm(t);
  if (!G.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (G.isDate(y))
      return y.toISOString();
    if (!l && G.isBlob(y))
      throw new $e("Blob is not supported. Use a Buffer instead.");
    return G.isArrayBuffer(y) || G.isTypedArray(y) ? l && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function d(y, _, P) {
    let W = y;
    if (y && !P && typeof y == "object") {
      if (G.endsWith(_, "{}"))
        _ = r ? _ : _.slice(0, -2), y = JSON.stringify(y);
      else if (G.isArray(y) && Zb(y) || (G.isFileList(y) || G.endsWith(_, "[]")) && (W = G.toArray(y)))
        return _ = Zf(_), W.forEach(function(w, g) {
          !(G.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? pc([_], g, a) : s === null ? _ : _ + "[]",
            c(w)
          );
        }), !1;
    }
    return ji(y) ? !0 : (t.append(pc(P, _, a), c(y)), !1);
  }
  const u = [], p = Object.assign(e_, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: ji
  });
  function m(y, _) {
    if (!G.isUndefined(y)) {
      if (u.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      u.push(y), G.forEach(y, function(W, q) {
        (!(G.isUndefined(W) || W === null) && o.call(
          t,
          W,
          G.isString(q) ? q.trim() : q,
          _,
          p
        )) === !0 && m(W, _ ? _.concat(q) : [q]);
      }), u.pop();
    }
  }
  if (!G.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function hc(e) {
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
function Pl(e, t) {
  this._pairs = [], e && Ps(e, this, t);
}
const ep = Pl.prototype;
ep.append = function(t, n) {
  this._pairs.push([t, n]);
};
ep.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, hc);
  } : hc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function t_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tp(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || t_, o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = G.isURLSearchParams(t) ? t.toString() : new Pl(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class mc {
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
    G.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const np = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, n_ = typeof URLSearchParams < "u" ? URLSearchParams : Pl, r_ = typeof FormData < "u" ? FormData : null, o_ = typeof Blob < "u" ? Blob : null, a_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: n_,
    FormData: r_,
    Blob: o_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Al = typeof window < "u" && typeof document < "u", Hi = typeof navigator == "object" && navigator || void 0, s_ = Al && (!Hi || ["ReactNative", "NativeScript", "NS"].indexOf(Hi.product) < 0), i_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", l_ = Al && window.location.href || "http://localhost", u_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Al,
  hasStandardBrowserEnv: s_,
  hasStandardBrowserWebWorkerEnv: i_,
  navigator: Hi,
  origin: l_
}, Symbol.toStringTag, { value: "Module" })), Lt = {
  ...u_,
  ...a_
};
function c_(e, t) {
  return Ps(e, new Lt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Lt.isNode && G.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function d_(e) {
  return G.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function f_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function rp(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), l = a >= n.length;
    return s = !s && G.isArray(o) ? o.length : s, l ? (G.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !G.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && G.isArray(o[s]) && (o[s] = f_(o[s])), !i);
  }
  if (G.isFormData(e) && G.isFunction(e.entries)) {
    const n = {};
    return G.forEachEntry(e, (r, o) => {
      t(d_(r), o, n, 0);
    }), n;
  }
  return null;
}
function p_(e, t, n) {
  if (G.isString(e))
    try {
      return (t || JSON.parse)(e), G.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const fa = {
  transitional: np,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = G.isObject(t);
    if (a && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t))
      return o ? JSON.stringify(rp(t)) : t;
    if (G.isArrayBuffer(t) || G.isBuffer(t) || G.isStream(t) || G.isFile(t) || G.isBlob(t) || G.isReadableStream(t))
      return t;
    if (G.isArrayBufferView(t))
      return t.buffer;
    if (G.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return c_(t, this.formSerializer).toString();
      if ((i = G.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ps(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), p_(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || fa.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (G.isResponse(t) || G.isReadableStream(t))
      return t;
    if (t && G.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? $e.from(i, $e.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: Lt.classes.FormData,
    Blob: Lt.classes.Blob
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
G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  fa.headers[e] = {};
});
const h_ = G.toObjectSet([
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
]), m_ = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && h_[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, vc = Symbol("internals");
function Oo(e) {
  return e && String(e).trim().toLowerCase();
}
function Va(e) {
  return e === !1 || e == null ? e : G.isArray(e) ? e.map(Va) : String(e);
}
function v_(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const y_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ei(e, t, n, r, o) {
  if (G.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!G.isString(t)) {
    if (G.isString(r))
      return t.indexOf(r) !== -1;
    if (G.isRegExp(r))
      return r.test(t);
  }
}
function g_(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function b_(e, t) {
  const n = G.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, s) {
        return this[r].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
class Bt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(i, l, c) {
      const d = Oo(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const u = G.findKey(o, d);
      (!u || o[u] === void 0 || c === !0 || c === void 0 && o[u] !== !1) && (o[u || l] = Va(i));
    }
    const s = (i, l) => G.forEach(i, (c, d) => a(c, d, l));
    if (G.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (G.isString(t) && (t = t.trim()) && !y_(t))
      s(m_(t), n);
    else if (G.isHeaders(t))
      for (const [i, l] of t.entries())
        a(l, i, r);
    else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Oo(t), t) {
      const r = G.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return v_(o);
        if (G.isFunction(n))
          return n.call(this, o, r);
        if (G.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Oo(t), t) {
      const r = G.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ei(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Oo(s), s) {
        const i = G.findKey(r, s);
        i && (!n || ei(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return G.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ei(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return G.forEach(this, (o, a) => {
      const s = G.findKey(r, a);
      if (s) {
        n[s] = Va(o), delete n[a];
        return;
      }
      const i = t ? g_(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Va(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return G.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && G.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[vc] = this[vc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = Oo(s);
      r[i] || (b_(o, s), r[i] = !0);
    }
    return G.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Bt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
G.reduceDescriptors(Bt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
G.freezeMethods(Bt);
function ti(e, t) {
  const n = this || fa, r = t || n, o = Bt.from(r.headers);
  let a = r.data;
  return G.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function op(e) {
  return !!(e && e.__CANCEL__);
}
function yo(e, t, n) {
  $e.call(this, e ?? "canceled", $e.ERR_CANCELED, t, n), this.name = "CanceledError";
}
G.inherits(yo, $e, {
  __CANCEL__: !0
});
function ap(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new $e(
    "Request failed with status code " + n.status,
    [$e.ERR_BAD_REQUEST, $e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function __(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function w_(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), d = r[a];
    s || (s = c), n[o] = l, r[o] = c;
    let u = a, p = 0;
    for (; u !== o; )
      p += n[u++], u = u % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - s < t)
      return;
    const m = d && c - d;
    return m ? Math.round(p * 1e3 / m) : void 0;
  };
}
function E_(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const s = (c, d = Date.now()) => {
    n = d, o = null, a && (clearTimeout(a), a = null), e.apply(null, c);
  };
  return [(...c) => {
    const d = Date.now(), u = d - n;
    u >= r ? s(c, d) : (o = c, a || (a = setTimeout(() => {
      a = null, s(o);
    }, r - u)));
  }, () => o && s(o)];
}
const es = (e, t, n = 3) => {
  let r = 0;
  const o = w_(50, 250);
  return E_((a) => {
    const s = a.loaded, i = a.lengthComputable ? a.total : void 0, l = s - r, c = o(l), d = s <= i;
    r = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && d ? (i - s) / c : void 0,
      event: a,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(u);
  }, n);
}, yc = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, gc = (e) => (...t) => G.asap(() => e(...t)), O_ = Lt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Lt.navigator && /(msie|trident)/i.test(Lt.navigator.userAgent), n = document.createElement("a");
    let r;
    function o(a) {
      let s = a;
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
    return r = o(window.location.href), function(s) {
      const i = G.isString(s) ? o(s) : s;
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
), N_ = Lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      G.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), G.isString(r) && s.push("path=" + r), G.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function x_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function D_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function sp(e, t) {
  return e && !x_(t) ? D_(e, t) : t;
}
const bc = (e) => e instanceof Bt ? { ...e } : e;
function Br(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, u) {
    return G.isPlainObject(c) && G.isPlainObject(d) ? G.merge.call({ caseless: u }, c, d) : G.isPlainObject(d) ? G.merge({}, d) : G.isArray(d) ? d.slice() : d;
  }
  function o(c, d, u) {
    if (G.isUndefined(d)) {
      if (!G.isUndefined(c))
        return r(void 0, c, u);
    } else return r(c, d, u);
  }
  function a(c, d) {
    if (!G.isUndefined(d))
      return r(void 0, d);
  }
  function s(c, d) {
    if (G.isUndefined(d)) {
      if (!G.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, d);
  }
  function i(c, d, u) {
    if (u in t)
      return r(c, d);
    if (u in e)
      return r(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
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
    headers: (c, d) => o(bc(c), bc(d), !0)
  };
  return G.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const u = l[d] || o, p = u(e[d], t[d], d);
    G.isUndefined(p) && u !== i || (n[d] = p);
  }), n;
}
const ip = (e) => {
  const t = Br({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = Bt.from(s), t.url = tp(sp(t.baseURL, t.url), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let l;
  if (G.isFormData(n)) {
    if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [c, ...d] = l ? l.split(";").map((u) => u.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Lt.hasStandardBrowserEnv && (r && G.isFunction(r) && (r = r(t)), r || r !== !1 && O_(t.url))) {
    const c = o && a && N_.read(a);
    c && s.set(o, c);
  }
  return t;
}, T_ = typeof XMLHttpRequest < "u", k_ = T_ && function(e) {
  return new Promise(function(n, r) {
    const o = ip(e);
    let a = o.data;
    const s = Bt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: c } = o, d, u, p, m, y;
    function _() {
      m && m(), y && y(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let P = new XMLHttpRequest();
    P.open(o.method.toUpperCase(), o.url, !0), P.timeout = o.timeout;
    function W() {
      if (!P)
        return;
      const w = Bt.from(
        "getAllResponseHeaders" in P && P.getAllResponseHeaders()
      ), N = {
        data: !i || i === "text" || i === "json" ? P.responseText : P.response,
        status: P.status,
        statusText: P.statusText,
        headers: w,
        config: e,
        request: P
      };
      ap(function(b) {
        n(b), _();
      }, function(b) {
        r(b), _();
      }, N), P = null;
    }
    "onloadend" in P ? P.onloadend = W : P.onreadystatechange = function() {
      !P || P.readyState !== 4 || P.status === 0 && !(P.responseURL && P.responseURL.indexOf("file:") === 0) || setTimeout(W);
    }, P.onabort = function() {
      P && (r(new $e("Request aborted", $e.ECONNABORTED, e, P)), P = null);
    }, P.onerror = function() {
      r(new $e("Network Error", $e.ERR_NETWORK, e, P)), P = null;
    }, P.ontimeout = function() {
      let g = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const N = o.transitional || np;
      o.timeoutErrorMessage && (g = o.timeoutErrorMessage), r(new $e(
        g,
        N.clarifyTimeoutError ? $e.ETIMEDOUT : $e.ECONNABORTED,
        e,
        P
      )), P = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in P && G.forEach(s.toJSON(), function(g, N) {
      P.setRequestHeader(N, g);
    }), G.isUndefined(o.withCredentials) || (P.withCredentials = !!o.withCredentials), i && i !== "json" && (P.responseType = o.responseType), c && ([p, y] = es(c, !0), P.addEventListener("progress", p)), l && P.upload && ([u, m] = es(l), P.upload.addEventListener("progress", u), P.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (d = (w) => {
      P && (r(!w || w.type ? new yo(null, e, P) : w), P.abort(), P = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const q = __(o.url);
    if (q && Lt.protocols.indexOf(q) === -1) {
      r(new $e("Unsupported protocol " + q + ":", $e.ERR_BAD_REQUEST, e));
      return;
    }
    P.send(a || null);
  });
}, S_ = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(c) {
      if (!o) {
        o = !0, i();
        const d = c instanceof Error ? c : this.reason;
        r.abort(d instanceof $e ? d : new yo(d instanceof Error ? d.message : d));
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new $e(`timeout ${t} of ms exceeded`, $e.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", a));
    const { signal: l } = r;
    return l.unsubscribe = () => G.asap(i), l;
  }
}, M_ = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, P_ = async function* (e, t) {
  for await (const n of A_(e))
    yield* M_(n, t);
}, A_ = async function* (e) {
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
}, _c = (e, t, n, r) => {
  const o = P_(e, t);
  let a = 0, s, i = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: d } = await o.next();
        if (c) {
          i(), l.close();
          return;
        }
        let u = d.byteLength;
        if (n) {
          let p = a += u;
          n(p);
        }
        l.enqueue(new Uint8Array(d));
      } catch (c) {
        throw i(c), c;
      }
    },
    cancel(l) {
      return i(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, As = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lp = As && typeof ReadableStream == "function", C_ = As && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), up = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, $_ = lp && up(() => {
  let e = !1;
  const t = new Request(Lt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), wc = 64 * 1024, Yi = lp && up(() => G.isReadableStream(new Response("").body)), ts = {
  stream: Yi && ((e) => e.body)
};
As && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ts[t] && (ts[t] = G.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new $e(`Response type '${t}' is not supported`, $e.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const R_ = async (e) => {
  if (e == null)
    return 0;
  if (G.isBlob(e))
    return e.size;
  if (G.isSpecCompliantForm(e))
    return (await new Request(Lt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (G.isArrayBufferView(e) || G.isArrayBuffer(e))
    return e.byteLength;
  if (G.isURLSearchParams(e) && (e = e + ""), G.isString(e))
    return (await C_(e)).byteLength;
}, V_ = async (e, t) => {
  const n = G.toFiniteNumber(e.getContentLength());
  return n ?? R_(t);
}, I_ = As && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: i,
    onUploadProgress: l,
    responseType: c,
    headers: d,
    withCredentials: u = "same-origin",
    fetchOptions: p
  } = ip(e);
  c = c ? (c + "").toLowerCase() : "text";
  let m = S_([o, a && a.toAbortSignal()], s), y;
  const _ = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let P;
  try {
    if (l && $_ && n !== "get" && n !== "head" && (P = await V_(d, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (G.isFormData(r) && (C = N.headers.get("content-type")) && d.setContentType(C), N.body) {
        const [b, R] = yc(
          P,
          es(gc(l))
        );
        r = _c(N.body, wc, b, R);
      }
    }
    G.isString(u) || (u = u ? "include" : "omit");
    const W = "credentials" in Request.prototype;
    y = new Request(t, {
      ...p,
      signal: m,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: W ? u : void 0
    });
    let q = await fetch(y);
    const w = Yi && (c === "stream" || c === "response");
    if (Yi && (i || w && _)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((j) => {
        N[j] = q[j];
      });
      const C = G.toFiniteNumber(q.headers.get("content-length")), [b, R] = i && yc(
        C,
        es(gc(i), !0)
      ) || [];
      q = new Response(
        _c(q.body, wc, b, () => {
          R && R(), _ && _();
        }),
        N
      );
    }
    c = c || "text";
    let g = await ts[G.findKey(ts, c) || "text"](q, e);
    return !w && _ && _(), await new Promise((N, C) => {
      ap(N, C, {
        data: g,
        headers: Bt.from(q.headers),
        status: q.status,
        statusText: q.statusText,
        config: e,
        request: y
      });
    });
  } catch (W) {
    throw _ && _(), W && W.name === "TypeError" && /fetch/i.test(W.message) ? Object.assign(
      new $e("Network Error", $e.ERR_NETWORK, e, y),
      {
        cause: W.cause || W
      }
    ) : $e.from(W, W && W.code, e, y);
  }
}), Ui = {
  http: Jb,
  xhr: k_,
  fetch: I_
};
G.forEach(Ui, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ec = (e) => `- ${e}`, F_ = (e) => G.isFunction(e) || e === null || e === !1, cp = {
  getAdapter: (e) => {
    e = G.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !F_(n) && (r = Ui[(s = String(n)).toLowerCase()], r === void 0))
        throw new $e(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(o).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(Ec).join(`
`) : " " + Ec(a[0]) : "as no adapter specified";
      throw new $e(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ui
};
function ni(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yo(null, e);
}
function Oc(e) {
  return ni(e), e.headers = Bt.from(e.headers), e.data = ti.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cp.getAdapter(e.adapter || fa.adapter)(e).then(function(r) {
    return ni(e), r.data = ti.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Bt.from(r.headers), r;
  }, function(r) {
    return op(r) || (ni(e), r && r.response && (r.response.data = ti.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Bt.from(r.response.headers))), Promise.reject(r);
  });
}
const dp = "1.7.7", Cl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Cl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nc = {};
Cl.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + dp + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new $e(
        o(s, " has been removed" + (n ? " in " + n : "")),
        $e.ERR_DEPRECATED
      );
    return n && !Nc[s] && (Nc[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
function L_(e, t, n) {
  if (typeof e != "object")
    throw new $e("options must be an object", $e.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const i = e[a], l = i === void 0 || s(i, a, e);
      if (l !== !0)
        throw new $e("option " + a + " must be " + l, $e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new $e("Unknown option " + a, $e.ERR_BAD_OPTION);
  }
}
const Wi = {
  assertOptions: L_,
  validators: Cl
}, jn = Wi.validators;
class Ar {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new mc(),
      response: new mc()
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
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Br(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Wi.assertOptions(r, {
      silentJSONParsing: jn.transitional(jn.boolean),
      forcedJSONParsing: jn.transitional(jn.boolean),
      clarifyTimeoutError: jn.transitional(jn.boolean)
    }, !1), o != null && (G.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Wi.assertOptions(o, {
      encode: jn.function,
      serialize: jn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && G.merge(
      a.common,
      a[n.method]
    );
    a && G.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete a[y];
      }
    ), n.headers = Bt.concat(s, a);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(n) === !1 || (l = l && _.synchronous, i.unshift(_.fulfilled, _.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let d, u = 0, p;
    if (!l) {
      const y = [Oc.bind(this), void 0];
      for (y.unshift.apply(y, i), y.push.apply(y, c), p = y.length, d = Promise.resolve(n); u < p; )
        d = d.then(y[u++], y[u++]);
      return d;
    }
    p = i.length;
    let m = n;
    for (u = 0; u < p; ) {
      const y = i[u++], _ = i[u++];
      try {
        m = y(m);
      } catch (P) {
        _.call(this, P);
        break;
      }
    }
    try {
      d = Oc.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (u = 0, p = c.length; u < p; )
      d = d.then(c[u++], c[u++]);
    return d;
  }
  getUri(t) {
    t = Br(this.defaults, t);
    const n = sp(t.baseURL, t.url);
    return tp(n, t.params, t.paramsSerializer);
  }
}
G.forEach(["delete", "get", "head", "options"], function(t) {
  Ar.prototype[t] = function(n, r) {
    return this.request(Br(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
G.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, i) {
      return this.request(Br(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  Ar.prototype[t] = n(), Ar.prototype[t + "Form"] = n(!0);
});
class $l {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((i) => {
        r.subscribe(i), a = i;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, i) {
      r.reason || (r.reason = new yo(a, s, i), n(r.reason));
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
      token: new $l(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function B_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function j_(e) {
  return G.isObject(e) && e.isAxiosError === !0;
}
const qi = {
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
Object.entries(qi).forEach(([e, t]) => {
  qi[t] = e;
});
function fp(e) {
  const t = new Ar(e), n = Yf(Ar.prototype.request, t);
  return G.extend(n, Ar.prototype, t, { allOwnKeys: !0 }), G.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return fp(Br(e, o));
  }, n;
}
const wt = fp(fa);
wt.Axios = Ar;
wt.CanceledError = yo;
wt.CancelToken = $l;
wt.isCancel = op;
wt.VERSION = dp;
wt.toFormData = Ps;
wt.AxiosError = $e;
wt.Cancel = wt.CanceledError;
wt.all = function(t) {
  return Promise.all(t);
};
wt.spread = B_;
wt.isAxiosError = j_;
wt.mergeConfig = Br;
wt.AxiosHeaders = Bt;
wt.formToJSON = (e) => rp(G.isHTMLForm(e) ? new FormData(e) : e);
wt.getAdapter = cp.getAdapter;
wt.HttpStatusCode = qi;
wt.default = wt;
function xc(e) {
  return wt.get(e).then((t) => t.data);
}
const pp = {
  PORISValue: Sl,
  PORISValueString: la,
  PORISValueFloat: ua,
  PORISValueDate: Ts,
  PORISValueFilePath: ca,
  PORISMode: so,
  PORISNode: Lr,
  PORISCmd: Hf
}, H_ = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], Y_ = "mode", U_ = "sub-system";
function st(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function W_(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const o = e.getElementsByTagName("destination");
    if (o.length > 0)
      for (const a of o) {
        const s = pp[a.getAttribute("type")], i = st(a, "id");
        s != Hf && (s == Lr && (t.find((l) => {
        }) || t.push(i)), r.push({ type: s, id: i }));
      }
  }
  return r.length > 0 ? r : null;
}
function q_(e) {
  const t = e.getElementsByTagName("node-attributes"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("node-attribute");
    if (r.length > 0)
      for (const o of r) {
        const a = st(o, "content"), s = st(o, "name");
        st(o, "visibility") && n.push({ name: s, content: a });
      }
  }
  return n.length > 0 ? n : null;
}
function G_(e) {
  const t = e.getElementsByTagName("labels"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("label");
    if (r.length > 0)
      for (const o of r) {
        const a = st(o, "name");
        n.push(a);
      }
  }
  return n.length > 0 ? n[0] : null;
}
function ri(e, t) {
  let n = st(e, "id"), r = st(e, "ident"), o = st(e, "name"), a = st(e, "node-type-id"), s = pp[st(e, "type")], i = W_(e, t), l = q_(e), c = G_(e), d = !!(i != null && i.find((y) => Li.includes(y.type) && y.id > 0)), u = !!(i != null && i.find((y) => Li.includes(y.type))), p = !!(i != null && i.find((y) => y.type == so)), m = !!(i != null && i.find((y) => y.type == Lr));
  return {
    id: n,
    ident: r,
    name: o,
    nodeTypeId: a,
    type: s,
    destinations: i,
    nodeAttributes: l,
    label: c,
    hasValues: u,
    hasRealValues: d,
    hasModes: p,
    hasSubsystems: m
  };
}
function oi(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((o) => e.findNode(o.type, o.id));
      console.log("DER", n), n.valuesNodes = r.filter(
        (o) => o.type != so && o.type != Lr
      ), n.modesNodes = r.filter((o) => o.type === so), n.subsystemsNodes = r.filter((o) => o.type === Lr), n.modesNodes.forEach((o) => {
        console.log(`setting ${n.name} as parent of mode ${o.name}`), o.parent = n;
      }), n.subsystemsNodes.forEach((o) => {
        console.log(`setting ${n.name} as parent of subsystem ${o.name}`), o.parent = n;
      });
    }
  });
}
function Dc(e) {
  e.forEach((t) => {
    let n = null;
    t.modesNodes && t.modesNodes.length > 0 && (t.defaultModeId ? n = t.modesNodes.find((r) => r.id === t.defaultModeId) : n = t.modesNodes[0]), t.defaultMode = n;
  });
}
function Tc(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    findNode: function(l, c) {
      let d = null;
      return l == so ? d = this.modes : l == Lr ? d = this.subsystems : d = this.values, d.find((u) => u.id === c);
    }
  };
  var r = [];
  const a = new DOMParser().parseFromString(t, "text/xml");
  for (const l of H_) {
    let c = a.getElementsByTagName(l);
    for (const d of c) {
      const u = ri(d, r);
      u.parent = null;
      let p = st(d, "value-formatter-id");
      u[p] = p;
      const m = u.type;
      if (m == ua) {
        let y = st(d, "default-float"), _ = st(d, "rangemax"), P = st(d, "rangemin");
        u.defaultFloat = y, u.rangemax = _, u.rangemin = P;
      } else if (m == la) {
        let y = st(d, "default-string");
        u.defaultString = y;
      } else if (m == Ts) {
        let y = st(d, "default-date"), _ = st(d, "date-max"), P = st(d, "date-min");
        u.defaultDate = y, u.datemax = _, u.datemin = P;
      } else if (m == ca) {
        let y = st(d, "default-string"), _ = st(d, "file-description"), P = st(d, "file-extension");
        u.defaultString = y, u.fileDescription = _, u.fileExtension = P;
      }
      n.values.push(new Js(u));
    }
  }
  const s = a.getElementsByTagName(Y_);
  for (const l of s) {
    const c = ri(l, r);
    let d = st(l, "default-mode-id"), u = st(l, "default-value-id");
    c.defaultModeId = d, c.defaultValueId = u, n.modes.push(new Js(c));
  }
  const i = a.getElementsByTagName(U_);
  for (const l of i) {
    const c = ri(l, r);
    let d = st(l, "default-mode-id");
    c.defaultModeId = d, n.subsystems.push(new Js(c));
  }
  return n.rootSubsystem = n.subsystems.find((l) => !r.includes(l.id)), oi(n, n.modes), oi(n, n.params), oi(n, n.subsystems), Dc(n.modes), Dc(n.subsystems), console.log("Loaded model", n), n;
}
const Rl = Wy("model", () => {
  const e = se(null), t = se([]), n = se([]), r = se([]), o = se(), a = se([]), s = se({});
  function i(g) {
    xc(`/models/${g}.xml`).then((C) => {
      e.value = C;
      let b = Tc(this, C);
      t.value = b.values, n.value = b.modes, r.value = b.subsystems, o.value = b.rootSubsystem, a.value = [], s.value = {}, m(b.rootSubsystem);
    });
  }
  function l(g) {
    xc(`${g}`).then((C) => {
      e.value = C;
      let b = Tc(this, C);
      t.value = b.values, n.value = b.modes, r.value = b.subsystems, o.value = b.rootSubsystem, a.value = [], s.value = {}, m(b.rootSubsystem);
    });
  }
  function c(g) {
    return t.value.find((N) => N.id == g);
  }
  function d(g) {
    return n.value.find((N) => N.id == g);
  }
  function u(g) {
    return r.value.find((N) => N.id == g);
  }
  function p(g, N, C) {
    if (g.validModes = C, C.length > 0) {
      let b = g.currentMode, R = null;
      return C.length > 0 ? N != null && C.includes(N) ? (console.log(`--> setValidMode_ candidate mode ${N.name}`), R = N) : C.includes(g.defaultMode) ? (R = g.defaultMode, console.log(`--> setValidMode_ candidate valid default ${g.defaultMode.name}`)) : (R = C[0], console.log(`--> setValidMode_ candidate first mode ${g.validModes[0].name}`)) : (console.log("--> setValidMode_ candidate default (root)"), R = g.defaultMode), b != R && (g.currentMode = R, g.candidateMode = R, a.value[`${g.id}`] = R, g.hasValues && w(g, g.currentMode), g.hasSubsystems && g.subsystemsNodes.forEach((j) => {
        y(j, j.currentMode, g.currentMode);
      })), R;
    } else
      return g.currentMode = null, g.candidateMode = null, console.log("--> setValidMode_ null (no valid mode available)"), null;
  }
  function m(g, N) {
    console.log(`setValidMode_ ${g.name} ${N == null ? void 0 : N.name}, NOT using supermode`);
    let C = P(g);
    return p(g, N, C);
  }
  function y(g, N, C) {
    console.log(`setValidMode_ ${g.name} ${N == null ? void 0 : N.name}, using supermode`, C.name);
    let b = cc(g.modesNodes, C.modesNodes);
    return p(g, N, b);
  }
  function _(g) {
    const N = a.value.reduce((C, b) => g.includes(b.id) ? b : C, null);
    return N || g[0];
  }
  function P(g) {
    return g.parent != null ? cc(g.modesNodes, g.parent.currentMode.modesNodes) : g.modesNodes;
  }
  function W(g) {
    return P(g).length > 0;
  }
  function q(g, N) {
    console.log(`setSystemValue() system: ${g.id}, value:`, N), s.value[`${g.id}`] = N;
  }
  function w(g, N) {
    let C = s.value[`${g.id}`];
    if (console.log(
      `getSystemValue() system: ${g.id}, _isUndefined(value): ${Wr(C)}, mode / value`,
      N,
      C
    ), !N.hasValues)
      return null;
    let b = N.valuesNodes;
    return C != null && !Wr(C) && b.find((R) => {
      R.id, C.id;
    }) === null && (C = void 0), b[0].type == la ? Wr(C) && (C = b[0].defaultString) : b[0].type == ua ? (Wr(C) || b[0].rangemin > C || b[0].rangemax < C) && (C = b[0].defaultFloat) : b[0].type == ca ? Wr(C) && (C = b[0].defaultString) : (Wr(C) || !b.includes(C)) && (C = b[0]), q(g, C), C;
  }
  return {
    xmlModel: e,
    rootSubsystem: o,
    currentModes: a,
    systemValues: s,
    loadModel: i,
    loadModelURL: l,
    getValue: c,
    getMode: d,
    getSubsystem: u,
    getCurrentMode: _,
    setValidMode: m,
    getValidObjModes: P,
    hasValidObjModes: W,
    getSystemValue: w,
    setSystemValue: q
  };
}), Cs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, z_ = ["disabled"], K_ = ["value"], hp = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ yl({
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
    const t = El(e, "modelValue"), n = e, r = se(n.modes);
    return _t(
      () => n.modes,
      (o, a) => {
        r.value = o;
      }
    ), (o, a) => Zn((V(), X("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (V(!0), X(Oe, null, Ze(r.value, (s) => (V(), X("option", {
        key: s.id,
        value: s
      }, ct(s.label || s.name), 9, K_))), 128))
    ], 8, z_)), [
      [cf, t.value]
    ]);
  }
};
function xe(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ge(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function en(e, t) {
  const n = xe(e);
  return isNaN(t) ? Ge(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function rn(e, t) {
  const n = xe(e);
  if (isNaN(t)) return Ge(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Ge(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
function mp(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: o = 0,
    days: a = 0,
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0
  } = t, c = xe(e), d = r || n ? rn(c, r + n * 12) : c, u = a || o ? en(d, a + o * 7) : d, p = i + s * 60, y = (l + p * 60) * 1e3;
  return Ge(e, u.getTime() + y);
}
const vp = 6048e5, Q_ = 864e5, X_ = 6e4, J_ = 36e5, Z_ = 1e3;
let ew = {};
function Hr() {
  return ew;
}
function xn(e, t) {
  var i, l, c, d;
  const n = Hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = xe(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function io(e) {
  return xn(e, { weekStartsOn: 1 });
}
function yp(e) {
  const t = xe(e), n = t.getFullYear(), r = Ge(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = io(r), a = Ge(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = io(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function kc(e) {
  const t = xe(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ns(e) {
  const t = xe(e), n = new Date(
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
function gp(e, t) {
  const n = kc(e), r = kc(t), o = +n - ns(n), a = +r - ns(r);
  return Math.round((o - a) / Q_);
}
function tw(e) {
  const t = yp(e), n = Ge(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), io(n);
}
function nw(e, t) {
  const n = t * 3;
  return rn(e, n);
}
function Vl(e, t) {
  return rn(e, t * 12);
}
function bp(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Bo(e) {
  if (!bp(e) && typeof e != "number")
    return !1;
  const t = xe(e);
  return !isNaN(Number(t));
}
function Sc(e) {
  const t = xe(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function _p(e, t) {
  const n = xe(e.start), r = xe(e.end);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(xe(s)), s.setDate(s.getDate() + i), s.setHours(0, 0, 0, 0);
  return o ? l.reverse() : l;
}
function Nr(e) {
  const t = xe(e), n = t.getMonth(), r = n - n % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function rw(e, t) {
  const n = xe(e.start), r = xe(e.end);
  let o = +n > +r;
  const a = o ? +Nr(n) : +Nr(r);
  let s = Nr(o ? r : n), i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(xe(s)), s = nw(s, i);
  return o ? l.reverse() : l;
}
function ow(e) {
  const t = xe(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function wp(e) {
  const t = xe(e), n = Ge(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function aw(e, t) {
  var i, l, c, d;
  const n = Hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = xe(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Mc(e) {
  const t = xe(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const sw = {
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
}, iw = (e, t, n) => {
  let r;
  const o = sw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ai(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const lw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, uw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, cw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dw = {
  date: ai({
    formats: lw,
    defaultWidth: "full"
  }),
  time: ai({
    formats: uw,
    defaultWidth: "full"
  }),
  dateTime: ai({
    formats: cw,
    defaultWidth: "full"
  })
}, fw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pw = (e, t, n, r) => fw[e];
function No(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const hw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, mw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, vw = {
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
}, yw = {
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
}, gw = {
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
}, bw = {
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
}, _w = (e, t) => {
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
}, ww = {
  ordinalNumber: _w,
  era: No({
    values: hw,
    defaultWidth: "wide"
  }),
  quarter: No({
    values: mw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: No({
    values: vw,
    defaultWidth: "wide"
  }),
  day: No({
    values: yw,
    defaultWidth: "wide"
  }),
  dayPeriod: No({
    values: gw,
    defaultWidth: "wide",
    formattingValues: bw,
    defaultFormattingWidth: "wide"
  })
};
function xo(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? Ow(i, (u) => u.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Ew(i, (u) => u.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const d = t.slice(s.length);
    return { value: c, rest: d };
  };
}
function Ew(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ow(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Nw(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const xw = /^(\d+)(th|st|nd|rd)?/i, Dw = /\d+/i, Tw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kw = {
  any: [/^b/i, /^(a|c)/i]
}, Sw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Mw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Pw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Aw = {
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
}, Cw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, $w = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Rw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Vw = {
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
}, Iw = {
  ordinalNumber: Nw({
    matchPattern: xw,
    parsePattern: Dw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xo({
    matchPatterns: Tw,
    defaultMatchWidth: "wide",
    parsePatterns: kw,
    defaultParseWidth: "any"
  }),
  quarter: xo({
    matchPatterns: Sw,
    defaultMatchWidth: "wide",
    parsePatterns: Mw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xo({
    matchPatterns: Pw,
    defaultMatchWidth: "wide",
    parsePatterns: Aw,
    defaultParseWidth: "any"
  }),
  day: xo({
    matchPatterns: Cw,
    defaultMatchWidth: "wide",
    parsePatterns: $w,
    defaultParseWidth: "any"
  }),
  dayPeriod: xo({
    matchPatterns: Rw,
    defaultMatchWidth: "any",
    parsePatterns: Vw,
    defaultParseWidth: "any"
  })
}, Ep = {
  code: "en-US",
  formatDistance: iw,
  formatLong: dw,
  formatRelative: pw,
  localize: ww,
  match: Iw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Fw(e) {
  const t = xe(e);
  return gp(t, wp(t)) + 1;
}
function Il(e) {
  const t = xe(e), n = +io(t) - +tw(t);
  return Math.round(n / vp) + 1;
}
function Fl(e, t) {
  var d, u, p, m;
  const n = xe(e), r = n.getFullYear(), o = Hr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = Ge(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = xn(s, t), l = Ge(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = xn(l, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Lw(e, t) {
  var i, l, c, d;
  const n = Hr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Fl(e, t), a = Ge(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), xn(a, t);
}
function Ll(e, t) {
  const n = xe(e), r = +xn(n, t) - +Lw(n, t);
  return Math.round(r / vp) + 1;
}
function ze(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Hn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ze(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ze(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ze(e.getDate(), t.length);
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
    return ze(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ze(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ze(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ze(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ze(o, t.length);
  }
}, qr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Pc = {
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
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Hn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Fl(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return ze(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ze(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = yp(e);
    return ze(n, t.length);
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
    return ze(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ze(r, 2);
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
        return ze(r, 2);
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
        return Hn.M(e, t);
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
        return ze(r + 1, 2);
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
    const o = Ll(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ze(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Il(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ze(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Hn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Fw(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ze(r, t.length);
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
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return ze(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return ze(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return ze(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
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
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = qr.noon : r === 0 ? o = qr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = qr.evening : r >= 12 ? o = qr.afternoon : r >= 4 ? o = qr.morning : o = qr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
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
    return Hn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Hn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ze(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ze(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Hn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Hn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Hn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Cc(r);
      case "XXXX":
      case "XX":
        return gr(r);
      case "XXXXX":
      case "XXX":
      default:
        return gr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Cc(r);
      case "xxxx":
      case "xx":
        return gr(r);
      case "xxxxx":
      case "xxx":
      default:
        return gr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ac(r, ":");
      case "OOOO":
      default:
        return "GMT" + gr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ac(r, ":");
      case "zzzz":
      default:
        return "GMT" + gr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ze(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ze(r, t.length);
  }
};
function Ac(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ze(a, 2);
}
function Cc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ze(Math.abs(e) / 60, 2) : gr(e, t);
}
function gr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ze(Math.trunc(r / 60), 2), a = ze(r % 60, 2);
  return n + o + t + a;
}
const $c = (e, t) => {
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
}, Op = (e, t) => {
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
}, Bw = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return $c(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", $c(r, t)).replace("{{time}}", Op(o, t));
}, Gi = {
  p: Op,
  P: Bw
}, jw = /^D+$/, Hw = /^Y+$/, Yw = ["D", "DD", "YY", "YYYY"];
function Np(e) {
  return jw.test(e);
}
function xp(e) {
  return Hw.test(e);
}
function zi(e, t, n) {
  const r = Uw(e, t, n);
  if (console.warn(r), Yw.includes(e)) throw new RangeError(r);
}
function Uw(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ww = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Gw = /^'([^]*?)'?$/, zw = /''/g, Kw = /[a-zA-Z]/;
function bn(e, t, n) {
  var d, u, p, m, y, _, P, W;
  const r = Hr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Ep, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((_ = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : _.weekStartsOn) ?? r.weekStartsOn ?? ((W = (P = r.locale) == null ? void 0 : P.options) == null ? void 0 : W.weekStartsOn) ?? 0, i = xe(e);
  if (!Bo(i))
    throw new RangeError("Invalid time value");
  let l = t.match(qw).map((q) => {
    const w = q[0];
    if (w === "p" || w === "P") {
      const g = Gi[w];
      return g(q, o.formatLong);
    }
    return q;
  }).join("").match(Ww).map((q) => {
    if (q === "''")
      return { isToken: !1, value: "'" };
    const w = q[0];
    if (w === "'")
      return { isToken: !1, value: Qw(q) };
    if (Pc[w])
      return { isToken: !0, value: q };
    if (w.match(Kw))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: q };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(i, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return l.map((q) => {
    if (!q.isToken) return q.value;
    const w = q.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && xp(w) || !(n != null && n.useAdditionalDayOfYearTokens) && Np(w)) && zi(w, t, String(e));
    const g = Pc[w[0]];
    return g(i, w, o.localize, c);
  }).join("");
}
function Qw(e) {
  const t = e.match(Gw);
  return t ? t[1].replace(zw, "'") : e;
}
function Xw(e) {
  return xe(e).getDay();
}
function Jw(e) {
  const t = xe(e), n = t.getFullYear(), r = t.getMonth(), o = Ge(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Zw() {
  return Object.assign({}, Hr());
}
function on(e) {
  return xe(e).getHours();
}
function e1(e) {
  let n = xe(e).getDay();
  return n === 0 && (n = 7), n;
}
function _n(e) {
  return xe(e).getMinutes();
}
function He(e) {
  return xe(e).getMonth();
}
function lo(e) {
  return xe(e).getSeconds();
}
function Ie(e) {
  return xe(e).getFullYear();
}
function Xo(e, t) {
  const n = xe(e), r = xe(t);
  return n.getTime() > r.getTime();
}
function Jo(e, t) {
  const n = xe(e), r = xe(t);
  return +n < +r;
}
function Zr(e, t) {
  const n = xe(e), r = xe(t);
  return +n == +r;
}
function t1(e, t) {
  const n = t instanceof Date ? Ge(t, 0) : new t(0);
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
const n1 = 10;
class Dp {
  constructor() {
    me(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class r1 extends Dp {
  constructor(t, n, r, o, a) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = o, a && (this.subPriority = a);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class o1 extends Dp {
  constructor() {
    super(...arguments);
    me(this, "priority", n1);
    me(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : Ge(n, t1(n, Date));
  }
}
class qe {
  run(t, n, r, o) {
    const a = this.parse(t, n, r, o);
    return a ? {
      setter: new r1(
        a.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class a1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 140);
    me(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(n, { width: "abbreviated" }) || o.era(n, { width: "narrow" });
      case "GGGGG":
        return o.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return o.era(n, { width: "wide" }) || o.era(n, { width: "abbreviated" }) || o.era(n, { width: "narrow" });
    }
  }
  set(n, r, o) {
    return r.era = o, n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const ht = {
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
}, pn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function mt(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function it(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function hn(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, s = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * J_ + a * X_ + s * Z_),
    rest: t.slice(n[0].length)
  };
}
function Tp(e) {
  return it(ht.anyDigitsSigned, e);
}
function ft(e, t) {
  switch (e) {
    case 1:
      return it(ht.singleDigit, t);
    case 2:
      return it(ht.twoDigits, t);
    case 3:
      return it(ht.threeDigits, t);
    case 4:
      return it(ht.fourDigits, t);
    default:
      return it(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function rs(e, t) {
  switch (e) {
    case 1:
      return it(ht.singleDigitSigned, t);
    case 2:
      return it(ht.twoDigitsSigned, t);
    case 3:
      return it(ht.threeDigitsSigned, t);
    case 4:
      return it(ht.fourDigitsSigned, t);
    default:
      return it(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Bl(e) {
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
function kp(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let o;
  if (r <= 50)
    o = e || 100;
  else {
    const a = r + 50, s = Math.trunc(a / 100) * 100, i = e >= a % 100;
    o = e + s - (i ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function Sp(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class s1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, o) {
    const a = (s) => ({
      year: s,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return mt(ft(4, n), a);
      case "yo":
        return mt(
          o.ordinalNumber(n, {
            unit: "year"
          }),
          a
        );
      default:
        return mt(ft(r.length, n), a);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, o) {
    const a = n.getFullYear();
    if (o.isTwoDigitYear) {
      const i = kp(
        o.year,
        a
      );
      return n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const s = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class i1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    const a = (s) => ({
      year: s,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return mt(ft(4, n), a);
      case "Yo":
        return mt(
          o.ordinalNumber(n, {
            unit: "year"
          }),
          a
        );
      default:
        return mt(ft(r.length, n), a);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, o, a) {
    const s = Fl(n, a);
    if (o.isTwoDigitYear) {
      const l = kp(
        o.year,
        s
      );
      return n.setFullYear(
        l,
        0,
        a.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), xn(n, a);
    }
    const i = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return n.setFullYear(i, 0, a.firstWeekContainsDate), n.setHours(0, 0, 0, 0), xn(n, a);
  }
}
class l1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", [
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
    return rs(r === "R" ? 4 : r.length, n);
  }
  set(n, r, o) {
    const a = Ge(n, 0);
    return a.setFullYear(o, 0, 4), a.setHours(0, 0, 0, 0), io(a);
  }
}
class u1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return rs(r === "u" ? 4 : r.length, n);
  }
  set(n, r, o) {
    return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class c1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 120);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "Q":
      case "QQ":
        return ft(r.length, n);
      case "Qo":
        return o.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return o.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(n, {
          width: "wide",
          context: "formatting"
        }) || o.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, o) {
    return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class d1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 120);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "q":
      case "qq":
        return ft(r.length, n);
      case "qo":
        return o.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return o.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(n, {
          width: "wide",
          context: "standalone"
        }) || o.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, o) {
    return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class f1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "incompatibleTokens", [
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
    me(this, "priority", 110);
  }
  parse(n, r, o) {
    const a = (s) => s - 1;
    switch (r) {
      case "M":
        return mt(
          it(ht.month, n),
          a
        );
      case "MM":
        return mt(ft(2, n), a);
      case "Mo":
        return mt(
          o.ordinalNumber(n, {
            unit: "month"
          }),
          a
        );
      case "MMM":
        return o.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(n, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return o.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(n, { width: "wide", context: "formatting" }) || o.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, o) {
    return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class p1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 110);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    const a = (s) => s - 1;
    switch (r) {
      case "L":
        return mt(
          it(ht.month, n),
          a
        );
      case "LL":
        return mt(ft(2, n), a);
      case "Lo":
        return mt(
          o.ordinalNumber(n, {
            unit: "month"
          }),
          a
        );
      case "LLL":
        return o.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(n, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return o.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(n, { width: "wide", context: "standalone" }) || o.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, o) {
    return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function h1(e, t, n) {
  const r = xe(e), o = Ll(r, n) - t;
  return r.setDate(r.getDate() - o * 7), r;
}
class m1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 100);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "w":
        return it(ht.week, n);
      case "wo":
        return o.ordinalNumber(n, { unit: "week" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, o, a) {
    return xn(h1(n, o, a), a);
  }
}
function v1(e, t) {
  const n = xe(e), r = Il(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class y1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 100);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "I":
        return it(ht.week, n);
      case "Io":
        return o.ordinalNumber(n, { unit: "week" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, o) {
    return io(v1(n, o));
  }
}
const g1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b1 = [
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
class _1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "subPriority", 1);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "d":
        return it(ht.date, n);
      case "do":
        return o.ordinalNumber(n, { unit: "date" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    const o = n.getFullYear(), a = Sp(o), s = n.getMonth();
    return a ? r >= 1 && r <= b1[s] : r >= 1 && r <= g1[s];
  }
  set(n, r, o) {
    return n.setDate(o), n.setHours(0, 0, 0, 0), n;
  }
}
class w1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "subpriority", 1);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "D":
      case "DD":
        return it(ht.dayOfYear, n);
      case "Do":
        return o.ordinalNumber(n, { unit: "date" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    const o = n.getFullYear();
    return Sp(o) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, o) {
    return n.setMonth(0, o), n.setHours(0, 0, 0, 0), n;
  }
}
function jl(e, t, n) {
  var u, p, m, y;
  const r = Hr(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((y = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : y.weekStartsOn) ?? 0, a = xe(e), s = a.getDay(), l = (t % 7 + 7) % 7, c = 7 - o, d = t < 0 || t > 6 ? t - (s + c) % 7 : (l + c) % 7 - (s + c) % 7;
  return en(a, d);
}
class E1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return o.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return o.day(n, { width: "wide", context: "formatting" }) || o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, o, a) {
    return n = jl(n, o, a), n.setHours(0, 0, 0, 0), n;
  }
}
class O1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o, a) {
    const s = (i) => {
      const l = Math.floor((i - 1) / 7) * 7;
      return (i + a.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return mt(ft(r.length, n), s);
      case "eo":
        return mt(
          o.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "eeeee":
        return o.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return o.day(n, { width: "wide", context: "formatting" }) || o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, o, a) {
    return n = jl(n, o, a), n.setHours(0, 0, 0, 0), n;
  }
}
class N1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o, a) {
    const s = (i) => {
      const l = Math.floor((i - 1) / 7) * 7;
      return (i + a.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return mt(ft(r.length, n), s);
      case "co":
        return mt(
          o.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return o.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(n, { width: "short", context: "standalone" }) || o.day(n, { width: "narrow", context: "standalone" });
      case "ccccc":
        return o.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(n, { width: "short", context: "standalone" }) || o.day(n, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return o.day(n, { width: "wide", context: "standalone" }) || o.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(n, { width: "short", context: "standalone" }) || o.day(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, o, a) {
    return n = jl(n, o, a), n.setHours(0, 0, 0, 0), n;
  }
}
function x1(e, t) {
  const n = xe(e), r = e1(n), o = t - r;
  return en(n, o);
}
class D1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    const a = (s) => s === 0 ? 7 : s;
    switch (r) {
      case "i":
      case "ii":
        return ft(r.length, n);
      case "io":
        return o.ordinalNumber(n, { unit: "day" });
      case "iii":
        return mt(
          o.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(n, {
            width: "short",
            context: "formatting"
          }) || o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiii":
        return mt(
          o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return mt(
          o.day(n, {
            width: "short",
            context: "formatting"
          }) || o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiii":
      default:
        return mt(
          o.day(n, {
            width: "wide",
            context: "formatting"
          }) || o.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(n, {
            width: "short",
            context: "formatting"
          }) || o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, o) {
    return n = x1(n, o), n.setHours(0, 0, 0, 0), n;
  }
}
class T1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 80);
    me(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, o) {
    return n.setHours(Bl(o), 0, 0, 0), n;
  }
}
class k1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 80);
    me(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, o) {
    return n.setHours(Bl(o), 0, 0, 0), n;
  }
}
class S1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 80);
    me(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, o) {
    return n.setHours(Bl(o), 0, 0, 0), n;
  }
}
class M1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "h":
        return it(ht.hour12h, n);
      case "ho":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 12;
  }
  set(n, r, o) {
    const a = n.getHours() >= 12;
    return a && o < 12 ? n.setHours(o + 12, 0, 0, 0) : !a && o === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(o, 0, 0, 0), n;
  }
}
class P1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "H":
        return it(ht.hour23h, n);
      case "Ho":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, o) {
    return n.setHours(o, 0, 0, 0), n;
  }
}
class A1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "K":
        return it(ht.hour11h, n);
      case "Ko":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, o) {
    return n.getHours() >= 12 && o < 12 ? n.setHours(o + 12, 0, 0, 0) : n.setHours(o, 0, 0, 0), n;
  }
}
class C1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "k":
        return it(ht.hour24h, n);
      case "ko":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 24;
  }
  set(n, r, o) {
    const a = o <= 24 ? o % 24 : o;
    return n.setHours(a, 0, 0, 0), n;
  }
}
class $1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 60);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "m":
        return it(ht.minute, n);
      case "mo":
        return o.ordinalNumber(n, { unit: "minute" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, o) {
    return n.setMinutes(o, 0, 0), n;
  }
}
class R1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 50);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "s":
        return it(ht.second, n);
      case "so":
        return o.ordinalNumber(n, { unit: "second" });
      default:
        return ft(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, o) {
    return n.setSeconds(o, 0), n;
  }
}
class V1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 30);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const o = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return mt(ft(r.length, n), o);
  }
  set(n, r, o) {
    return n.setMilliseconds(o), n;
  }
}
class I1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 10);
    me(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return hn(
          pn.basicOptionalMinutes,
          n
        );
      case "XX":
        return hn(pn.basic, n);
      case "XXXX":
        return hn(
          pn.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return hn(
          pn.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return hn(pn.extended, n);
    }
  }
  set(n, r, o) {
    return r.timestampIsSet ? n : Ge(
      n,
      n.getTime() - ns(n) - o
    );
  }
}
class F1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 10);
    me(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return hn(
          pn.basicOptionalMinutes,
          n
        );
      case "xx":
        return hn(pn.basic, n);
      case "xxxx":
        return hn(
          pn.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return hn(
          pn.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return hn(pn.extended, n);
    }
  }
  set(n, r, o) {
    return r.timestampIsSet ? n : Ge(
      n,
      n.getTime() - ns(n) - o
    );
  }
}
class L1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 40);
    me(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Tp(n);
  }
  set(n, r, o) {
    return [Ge(n, o * 1e3), { timestampIsSet: !0 }];
  }
}
class B1 extends qe {
  constructor() {
    super(...arguments);
    me(this, "priority", 20);
    me(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Tp(n);
  }
  set(n, r, o) {
    return [Ge(n, o), { timestampIsSet: !0 }];
  }
}
const j1 = {
  G: new a1(),
  y: new s1(),
  Y: new i1(),
  R: new l1(),
  u: new u1(),
  Q: new c1(),
  q: new d1(),
  M: new f1(),
  L: new p1(),
  w: new m1(),
  I: new y1(),
  d: new _1(),
  D: new w1(),
  E: new E1(),
  e: new O1(),
  c: new N1(),
  i: new D1(),
  a: new T1(),
  b: new k1(),
  B: new S1(),
  h: new M1(),
  H: new P1(),
  K: new A1(),
  k: new C1(),
  m: new $1(),
  s: new R1(),
  S: new V1(),
  X: new I1(),
  x: new F1(),
  t: new L1(),
  T: new B1()
}, H1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Y1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, U1 = /^'([^]*?)'?$/, W1 = /''/g, q1 = /\S/, G1 = /[a-zA-Z]/;
function Ki(e, t, n, r) {
  var _, P, W, q;
  const o = Zw(), a = o.locale ?? Ep, s = o.firstWeekContainsDate ?? ((P = (_ = o.locale) == null ? void 0 : _.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, i = o.weekStartsOn ?? ((q = (W = o.locale) == null ? void 0 : W.options) == null ? void 0 : q.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? xe(n) : Ge(n, NaN);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  }, c = [new o1()], d = t.match(Y1).map((w) => {
    const g = w[0];
    if (g in Gi) {
      const N = Gi[g];
      return N(w, a.formatLong);
    }
    return w;
  }).join("").match(H1), u = [];
  for (let w of d) {
    xp(w) && zi(w, t, e), Np(w) && zi(w, t, e);
    const g = w[0], N = j1[g];
    if (N) {
      const { incompatibleTokens: C } = N;
      if (Array.isArray(C)) {
        const R = u.find(
          (j) => C.includes(j.token) || j.token === g
        );
        if (R)
          throw new RangeError(
            `The format string mustn't contain \`${R.fullToken}\` and \`${w}\` at the same time`
          );
      } else if (N.incompatibleTokens === "*" && u.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${w}\` and any other token at the same time`
        );
      u.push({ token: g, fullToken: w });
      const b = N.run(
        e,
        w,
        a.match,
        l
      );
      if (!b)
        return Ge(n, NaN);
      c.push(b.setter), e = b.rest;
    } else {
      if (g.match(G1))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + g + "`"
        );
      if (w === "''" ? w = "'" : g === "'" && (w = z1(w)), e.indexOf(w) === 0)
        e = e.slice(w.length);
      else
        return Ge(n, NaN);
    }
  }
  if (e.length > 0 && q1.test(e))
    return Ge(n, NaN);
  const p = c.map((w) => w.priority).sort((w, g) => g - w).filter((w, g, N) => N.indexOf(w) === g).map(
    (w) => c.filter((g) => g.priority === w).sort((g, N) => N.subPriority - g.subPriority)
  ).map((w) => w[0]);
  let m = xe(n);
  if (isNaN(m.getTime()))
    return Ge(n, NaN);
  const y = {};
  for (const w of p) {
    if (!w.validate(m, l))
      return Ge(n, NaN);
    const g = w.set(m, y, l);
    Array.isArray(g) ? (m = g[0], Object.assign(y, g[1])) : m = g;
  }
  return Ge(n, m);
}
function z1(e) {
  return e.match(U1)[1].replace(W1, "'");
}
function Rc(e, t) {
  const n = Nr(e), r = Nr(t);
  return +n == +r;
}
function K1(e, t) {
  return en(e, -t);
}
function Mp(e, t) {
  const n = xe(e), r = n.getFullYear(), o = n.getDate(), a = Ge(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = Jw(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function et(e, t) {
  let n = xe(e);
  return isNaN(+n) ? Ge(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Mp(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Pp(e, t) {
  const n = xe(e);
  return n.setHours(t), n;
}
function Hl(e, t) {
  const n = xe(e);
  return n.setMilliseconds(t), n;
}
function Ap(e, t) {
  const n = xe(e);
  return n.setMinutes(t), n;
}
function Yl(e, t) {
  const n = xe(e);
  return n.setSeconds(t), n;
}
function mn(e, t) {
  const n = xe(e);
  return isNaN(+n) ? Ge(e, NaN) : (n.setFullYear(t), n);
}
function uo(e, t) {
  return rn(e, -t);
}
function Q1(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: o = 0,
    days: a = 0,
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0
  } = t, c = uo(e, r + n * 12), d = K1(c, a + o * 7), u = i + s * 60, m = (l + u * 60) * 1e3;
  return Ge(e, d.getTime() - m);
}
function Cp(e, t) {
  return Vl(e, -t);
}
function go() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      De("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      De("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      De("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
go.compatConfig = {
  MODE: 3
};
function $p() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      De("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
$p.compatConfig = {
  MODE: 3
};
function Ul() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Ul.compatConfig = {
  MODE: 3
};
function Wl() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Wl.compatConfig = {
  MODE: 3
};
function ql() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      De("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
ql.compatConfig = {
  MODE: 3
};
function Gl() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Gl.compatConfig = {
  MODE: 3
};
function zl() {
  return V(), X(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      De("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
zl.compatConfig = {
  MODE: 3
};
function Vc(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function X1(e) {
  return (t) => bn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const J1 = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let o;
  if (e !== null)
    try {
      o = r.map(X1(e));
    } catch {
      o = r.map(Vc(t));
    }
  else
    o = r.map(Vc(t));
  const a = o.slice(0, n), s = o.slice(n + 1, o.length);
  return [o[n]].concat(...s).concat(...a);
}, Kl = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Rp = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((a) => {
    const s = a < 10 ? `0${a}` : a;
    return /* @__PURE__ */ new Date(`2017-${s}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const a = n === "long" ? "MMMM" : "MMM";
      return r.map((s, i) => {
        const l = bn(s, a, { locale: e });
        return {
          text: l.charAt(0).toUpperCase() + l.substring(1),
          value: i
        };
      });
    } catch {
    }
  const o = new Intl.DateTimeFormat(t, { month: n, timeZone: "UTC" });
  return r.map((a, s) => {
    const i = o.format(a);
    return {
      text: i.charAt(0).toUpperCase() + i.substring(1),
      value: s
    };
  });
}, Z1 = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Et = (e) => {
  const t = D(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, eE = (e) => ({ type: "dot", ...e ?? {} }), Vp = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ql = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ot = (e) => e, Ic = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Fc = (e) => e === null, Ip = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, tE = (e) => {
  const t = [], n = (r) => r.filter((o) => o);
  for (let r = 0; r < e.length; r += 3) {
    const o = [e[r], e[r + 1], e[r + 2]];
    t.push(n(o));
  }
  return t;
}, Zo = (e, t, n) => {
  const r = n != null, o = t != null;
  if (!r && !o)
    return !1;
  const a = +n, s = +t;
  return r && o ? +e > a || +e < s : r ? +e > a : o ? +e < s : !1;
}, co = (e, t) => tE(e).map((n) => n.map((r) => {
  const { active: o, disabled: a, isBetween: s, highlighted: i } = t(r);
  return {
    ...r,
    active: o,
    disabled: a,
    className: {
      dp__overlay_cell_active: o,
      dp__overlay_cell: !o,
      dp__overlay_cell_disabled: a,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: a && o,
      dp__cell_in_between: s,
      "dp--highlighted": i
    }
  };
})), tr = (e, t, n = !1) => {
  e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, nE = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function rE(e, t) {
  let n = [...document.querySelectorAll(nE())];
  n = n.filter((o) => !e.contains(o) || o.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const oE = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Xl = (e) => bn(e, "dd-MM-yyyy"), si = (e) => Array.isArray(e), os = (e, t) => t.get(Xl(e)), aE = (e, t) => e ? t ? t instanceof Map ? !!os(e, t) : t(ee(e)) : !1 : !0, Lc = (e, t, n, r, o) => {
  const a = Ki(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return Bo(a) && bp(a) ? r || o ? a : et(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, sE = (e, t, n, r, o) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return Lc(e, t, a, r, o);
  if (Array.isArray(t)) {
    let s = null;
    for (const i of t)
      if (s = Lc(e, i, a, r, o), s)
        break;
    return s;
  }
  return typeof t == "function" ? t(e) : null;
}, ee = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), iE = (e, t, n) => {
  if (t) {
    const o = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), s = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0"), l = n ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${o}-${a}T${s}:${i}:${l}.000Z`;
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
}, Wt = (e) => {
  let t = ee(JSON.parse(JSON.stringify(e)));
  return t = Pp(t, 0), t = Ap(t, 0), t = Yl(t, 0), t = Hl(t, 0), t;
}, nr = (e, t, n, r) => {
  let o = e ? ee(e) : ee();
  return (t || t === 0) && (o = Pp(o, +t)), (n || n === 0) && (o = Ap(o, +n)), (r || r === 0) && (o = Yl(o, +r)), Hl(o, 0);
}, ut = (e, t) => !e || !t ? !1 : Jo(Wt(e), Wt(t)), Ye = (e, t) => !e || !t ? !1 : Zr(Wt(e), Wt(t)), pt = (e, t) => !e || !t ? !1 : Xo(Wt(e), Wt(t)), $s = (e, t, n) => e != null && e[0] && e != null && e[1] ? pt(n, e[0]) && ut(n, e[1]) : e != null && e[0] && t ? pt(n, e[0]) && ut(n, t) || ut(n, e[0]) && pt(n, t) : !1, tn = (e) => {
  const t = et(new Date(e), { date: 1 });
  return Wt(t);
}, ii = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Cr = (e) => ({
  hours: on(e),
  minutes: _n(e),
  seconds: lo(e)
}), Fp = (e, t) => {
  if (t) {
    const n = Ie(ee(t));
    if (n > e)
      return 12;
    if (n === e)
      return He(ee(t));
  }
}, Lp = (e, t) => {
  if (t) {
    const n = Ie(ee(t));
    return n < e ? -1 : n === e ? He(ee(t)) : void 0;
  }
}, fo = (e) => {
  if (e)
    return Ie(ee(e));
}, Bp = (e, t) => {
  const n = pt(e, t) ? t : e, r = pt(t, e) ? t : e;
  return _p({ start: n, end: r });
}, lE = (e) => {
  const t = rn(e, 1);
  return { month: He(t), year: Ie(t) };
}, Mn = (e, t) => {
  const n = xn(e, { weekStartsOn: +t }), r = aw(e, { weekStartsOn: +t });
  return [n, r];
}, jp = (e, t) => {
  const n = {
    hours: on(ee()),
    minutes: _n(ee()),
    seconds: t ? lo(ee()) : 0
  };
  return Object.assign(n, e);
}, Qn = (e, t, n) => [et(ee(e), { date: 1 }), et(ee(), { month: t, year: n, date: 1 })], An = (e, t, n) => {
  let r = e ? ee(e) : ee();
  return (t || t === 0) && (r = Mp(r, t)), n && (r = mn(r, n)), r;
}, Hp = (e, t, n, r, o) => {
  if (!r || o && !t || !o && !n)
    return !1;
  const a = o ? rn(e, 1) : uo(e, 1), s = [He(a), Ie(a)];
  return o ? !cE(...s, t) : !uE(...s, n);
}, uE = (e, t, n) => ut(...Qn(n, e, t)) || Ye(...Qn(n, e, t)), cE = (e, t, n) => pt(...Qn(n, e, t)) || Ye(...Qn(n, e, t)), Yp = (e, t, n, r, o, a, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const i = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${bn(e[0], a, i)}${o && !e[1] ? "" : r}${e[1] ? bn(e[1], a, i) : ""}` : bn(e, a, i);
}, Gr = (e) => {
  if (e)
    return null;
  throw new Error(Ql.prop("partial-range"));
}, xa = (e, t) => {
  if (t)
    return e();
  throw new Error(Ql.prop("range"));
}, Qi = (e) => Array.isArray(e) ? Bo(e[0]) && (e[1] ? Bo(e[1]) : !0) : e ? Bo(e) : !1, dE = (e, t) => et(t ?? ee(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), li = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const o = n === "max" ? Jo(e, t) : Xo(e, t), a = { seconds: 0, milliseconds: 0 };
    return o || Zr(et(e, a), et(t, a));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ui = (e, t, n) => e ? dE(e, t) : ee(n ?? t), Bc = (e, t, n, r, o) => {
  if (Array.isArray(r)) {
    const s = ui(e, r[0], t), i = ui(e, r[1], t);
    return li(r[0], s, n, !!t) && li(r[1], i, n, !!t) && o;
  }
  const a = ui(e, r, t);
  return li(r, a, n, !!t) && o;
}, ci = (e) => et(ee(), Cr(e)), fE = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => Ie(ee(n)) === t).map((n) => He(n)) : [], Up = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), Jl = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Do = Rn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Wp = () => {
  const e = (n) => {
    Do.menuFocused = n;
  }, t = (n) => {
    Do.shiftKeyInMenu !== n && (Do.shiftKeyInMenu = n);
  };
  return {
    control: oe(() => ({ shiftKeyInMenu: Do.shiftKeyInMenu, menuFocused: Do.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, ot = Rn({
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
}), di = se(null), Da = se(!1), fi = se(!1), pi = se(!1), hi = se(!1), $t = se(0), Tt = se(0), ur = () => {
  const e = oe(() => Da.value ? [...ot.selectionGrid, ot.actionRow].filter((u) => u.length) : fi.value ? [
    ...ot.timePicker[0],
    ...ot.timePicker[1],
    hi.value ? [] : [di.value],
    ot.actionRow
  ].filter((u) => u.length) : pi.value ? [...ot.monthPicker, ot.actionRow] : [ot.monthYear, ...ot.calendar, ot.time, ot.actionRow].filter((u) => u.length)), t = (u) => {
    $t.value = u ? $t.value + 1 : $t.value - 1;
    let p = null;
    e.value[Tt.value] && (p = e.value[Tt.value][$t.value]), p || ($t.value = u ? $t.value - 1 : $t.value + 1);
  }, n = (u) => {
    Tt.value === 0 && !u || Tt.value === e.value.length && u || (Tt.value = u ? Tt.value + 1 : Tt.value - 1, e.value[Tt.value] ? e.value[Tt.value] && !e.value[Tt.value][$t.value] && $t.value !== 0 && ($t.value = e.value[Tt.value].length - 1) : Tt.value = u ? Tt.value - 1 : Tt.value + 1);
  }, r = (u) => {
    let p = null;
    e.value[Tt.value] && (p = e.value[Tt.value][$t.value]), p ? p.focus({ preventScroll: !Da.value }) : $t.value = u ? $t.value - 1 : $t.value + 1;
  }, o = () => {
    t(!0), r(!0);
  }, a = () => {
    t(!1), r(!1);
  }, s = () => {
    n(!1), r(!0);
  }, i = () => {
    n(!0), r(!0);
  }, l = (u, p) => {
    ot[p] = u;
  }, c = (u, p) => {
    ot[p] = u;
  }, d = () => {
    $t.value = 0, Tt.value = 0;
  };
  return {
    buildMatrix: l,
    buildMultiLevelMatrix: c,
    setTimePickerBackRef: (u) => {
      di.value = u;
    },
    setSelectionGrid: (u) => {
      Da.value = u, d(), u || (ot.selectionGrid = []);
    },
    setTimePicker: (u, p = !1) => {
      fi.value = u, hi.value = p, d(), u || (ot.timePicker[0] = [], ot.timePicker[1] = []);
    },
    setTimePickerElements: (u, p = 0) => {
      ot.timePicker[p] = u;
    },
    arrowRight: o,
    arrowLeft: a,
    arrowUp: s,
    arrowDown: i,
    clearArrowNav: () => {
      ot.monthYear = [], ot.calendar = [], ot.time = [], ot.actionRow = [], ot.selectionGrid = [], ot.timePicker[0] = [], ot.timePicker[1] = [], Da.value = !1, fi.value = !1, hi.value = !1, pi.value = !1, d(), di.value = null;
    },
    setMonthPicker: (u) => {
      pi.value = u, d();
    },
    refSets: ot
    // exposed for testing
  };
}, ar = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), qp = (e, t) => Xi(e, t) || ee(), pE = (e, t) => t.dateInTz ? ar(new Date(e), t.dateInTz) : ee(e), Xi = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return ee(e);
  const n = ee(e);
  return t.exactMatch ? pE(e, t) : ar(n, t.timezone);
}, jc = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), hE = (e) => ({
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
}), Hc = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, mE = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: Hc(!1) };
  const r = t ? e : {}, o = t ? r.count ?? !0 : e, a = Hc(o);
  return Object.assign(n, r, { count: a });
}, vE = (e, t, n) => e || (typeof n == "string" ? n : t), yE = (e) => typeof e == "boolean" ? e ? jc({}) : !1 : jc(e), gE = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, bE = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), _E = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), wE = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, EE = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), OE = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => ee(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, NE = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, xE = (e, t) => typeof e == "object" ? { enabled: !0, ...{
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
}, DE = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, mi = (e, t) => new Map(
  e.map((n) => {
    const r = qp(n, t);
    return [Xl(r), r];
  })
), TE = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = qp(n.date, t);
    return [Xl(r), n];
  })
) : null, kE = (e, t, n, r, o, a, s) => ({
  minDate: Xi(e, s),
  maxDate: Xi(t, s),
  disabledDates: si(n) ? mi(n, s) : n,
  allowedDates: si(r) ? mi(r, s) : null,
  highlight: typeof o == "object" && si(o == null ? void 0 : o.dates) ? mi(o.dates, s) : o,
  markers: TE(a, s)
}), lt = (e) => {
  const t = () => {
    const g = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${g}` : `hh:mm${g} aa`;
  }, n = () => {
    var g;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((g = P.value) == null ? void 0 : g.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (g) => jp(g, e.enableSeconds), o = () => w.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, a = oe(() => mE(e.multiCalendars)), s = oe(() => o()), i = oe(() => hE(e.ariaLabels)), l = oe(() => bE(e.filters)), c = oe(() => yE(e.transitions)), d = oe(() => _E(e.actionRow)), u = oe(
    () => vE(e.previewFormat, e.format, n())
  ), p = oe(() => gE(e.textInput)), m = oe(() => wE(e.inline)), y = oe(() => EE(e.config)), _ = oe(() => OE(e.highlight)), P = oe(() => NE(e.weekNumbers)), W = oe(() => DE(e.timezone, e.emitTimezone)), q = oe(
    () => kE(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      _.value,
      e.markers,
      W.value
    )
  ), w = oe(
    () => xE(e.range, {
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
    defaultedMultiCalendars: a,
    defaultedStartTime: s,
    defaultedAriaLabels: i,
    defaultedFilters: l,
    defaultedActionRow: d,
    defaultedPreviewFormat: u,
    defaultedTextInput: p,
    defaultedInline: m,
    defaultedConfig: y,
    defaultedHighlight: _,
    defaultedWeekNumbers: P,
    defaultedRange: w,
    propDates: q,
    defaultedTz: W,
    getDefaultPattern: n,
    getDefaultStartTime: o
  };
}, SE = (e, t, n) => {
  const r = se(), { defaultedTextInput: o, defaultedRange: a, defaultedTz: s, getDefaultPattern: i } = lt(t), l = se(""), c = Sr(t, "format");
  _t(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), _t(c, () => {
    U();
  });
  const d = (h, f, k = !1) => Yp(
    h,
    t.format,
    t.formatLocale,
    o.value.rangeSeparator,
    t.modelAuto,
    f ?? i(),
    k
  ), u = (h) => h ? t.modelType ? A(h) : {
    hours: on(h),
    minutes: _n(h),
    seconds: t.enableSeconds ? lo(h) : 0
  } : null, p = (h) => t.modelType ? A(h) : { month: He(h), year: Ie(h) }, m = (h) => Array.isArray(h) ? t.multiDates ? h.map((f) => y(f, mn(ee(), f))) : xa(
    () => [
      mn(ee(), h[0]),
      h[1] ? mn(ee(), h[1]) : Gr(a.value.partialRange)
    ],
    a.value.enabled
  ) : mn(ee(), +h), y = (h, f) => (typeof h == "string" || typeof h == "number") && t.modelType ? O(h) : f, _ = (h) => Array.isArray(h) ? [
    y(
      h[0],
      nr(null, +h[0].hours, +h[0].minutes, h[0].seconds)
    ),
    y(
      h[1],
      nr(null, +h[1].hours, +h[1].minutes, h[1].seconds)
    )
  ] : y(h, nr(null, h.hours, h.minutes, h.seconds)), P = (h) => {
    const f = et(ee(), { date: 1 });
    return Array.isArray(h) ? t.multiDates ? h.map((k) => y(k, An(f, +k.month, +k.year))) : xa(
      () => [
        y(h[0], An(f, +h[0].month, +h[0].year)),
        y(
          h[1],
          h[1] ? An(f, +h[1].month, +h[1].year) : Gr(a.value.partialRange)
        )
      ],
      a.value.enabled
    ) : y(h, An(f, +h.month, +h.year));
  }, W = (h) => {
    if (Array.isArray(h))
      return h.map((f) => O(f));
    throw new Error(Ql.dateArr("multi-dates"));
  }, q = (h) => {
    if (Array.isArray(h) && a.value.enabled) {
      const f = h[0], k = h[1];
      return [
        ee(Array.isArray(f) ? f[0] : null),
        ee(Array.isArray(k) ? k[0] : null)
      ];
    }
    return ee(h[0]);
  }, w = (h) => t.modelAuto ? Array.isArray(h) ? [O(h[0]), O(h[1])] : t.autoApply ? [O(h)] : [O(h), null] : Array.isArray(h) ? xa(
    () => h[1] ? [
      O(h[0]),
      h[1] ? O(h[1]) : Gr(a.value.partialRange)
    ] : [O(h[0])],
    a.value.enabled
  ) : O(h), g = () => {
    Array.isArray(r.value) && a.value.enabled && r.value.length === 1 && r.value.push(Gr(a.value.partialRange));
  }, N = () => {
    const h = r.value;
    return [
      A(h[0]),
      h[1] ? A(h[1]) : Gr(a.value.partialRange)
    ];
  }, C = () => r.value[1] ? N() : A(Ot(r.value[0])), b = () => (r.value || []).map((h) => A(h)), R = () => (g(), t.modelAuto ? C() : t.multiDates ? b() : Array.isArray(r.value) ? xa(() => N(), a.value.enabled) : A(Ot(r.value))), j = (h) => !h || Array.isArray(h) && !h.length ? null : t.timePicker ? _(Ot(h)) : t.monthPicker ? P(Ot(h)) : t.yearPicker ? m(Ot(h)) : t.multiDates ? W(Ot(h)) : t.weekPicker ? q(Ot(h)) : w(Ot(h)), B = (h) => {
    const f = j(h);
    Qi(Ot(f)) ? (r.value = Ot(f), U()) : (r.value = null, l.value = "");
  }, x = () => {
    const h = (f) => bn(f, o.value.format);
    return `${h(r.value[0])} ${o.value.rangeSeparator} ${r.value[1] ? h(r.value[1]) : ""}`;
  }, M = () => n.value && r.value ? Array.isArray(r.value) ? x() : bn(r.value, o.value.format) : d(r.value), Y = () => r.value ? t.multiDates ? r.value.map((h) => d(h)).join("; ") : o.value.enabled && typeof o.value.format == "string" ? M() : d(r.value) : "", U = () => {
    !t.format || typeof t.format == "string" || o.value.enabled && typeof o.value.format == "string" ? l.value = Y() : l.value = t.format(r.value);
  }, O = (h) => {
    if (t.utc) {
      const f = new Date(h);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(h) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Ki(h, i(), /* @__PURE__ */ new Date()) : Ki(h, t.modelType, /* @__PURE__ */ new Date()) : new Date(h);
  }, A = (h) => h ? t.utc ? iE(h, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +h : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? d(h) : d(h, t.modelType, !0) : h : "", H = (h, f = !1) => {
    if (e("update:model-value", h), s.value.emitTimezone && f) {
      const k = Array.isArray(h) ? h.map((z) => ar(Ot(z), s.value.emitTimezone)) : ar(Ot(h), s.value.emitTimezone);
      e("update:model-timezone-value", k);
    }
  }, K = (h) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => h(f)) : [
    h(r.value[0]),
    r.value[1] ? h(r.value[1]) : Gr(a.value.partialRange)
  ] : h(Ot(r.value)), he = () => {
    if (Array.isArray(r.value)) {
      const h = Mn(r.value[0], t.weekStart), f = r.value[1] ? Mn(r.value[1], t.weekStart) : [];
      return [h.map((k) => ee(k)), f.map((k) => ee(k))];
    }
    return Mn(r.value, t.weekStart).map((h) => ee(h));
  }, ne = (h) => H(Ot(K(h)));
  return {
    inputValue: l,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? a.value.enabled ? a.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: B,
    formatInputValue: U,
    emitModelValue: () => (U(), t.monthPicker ? ne(p) : t.timePicker ? ne(u) : t.yearPicker ? ne(Ie) : t.weekPicker ? e("update:model-value", he()) : H(R(), !0))
  };
}, ME = (e, t) => {
  const { defaultedFilters: n, propDates: r } = lt(e), { validateMonthYearInRange: o } = cr(e), a = (d, u) => {
    let p = d;
    return n.value.months.includes(He(p)) ? (p = u ? rn(d, 1) : uo(d, 1), a(p, u)) : p;
  }, s = (d, u) => {
    let p = d;
    return n.value.years.includes(Ie(p)) ? (p = u ? Vl(d, 1) : Cp(d, 1), s(p, u)) : p;
  }, i = (d, u = !1) => {
    const p = et(ee(), { month: e.month, year: e.year });
    let m = d ? rn(p, 1) : uo(p, 1);
    e.disableYearSelect && (m = mn(m, e.year));
    let y = He(m), _ = Ie(m);
    n.value.months.includes(y) && (m = a(m, d), y = He(m), _ = Ie(m)), n.value.years.includes(_) && (m = s(m, d), _ = Ie(m)), o(y, _, d, e.preventMinMaxNavigation) && l(y, _, u);
  }, l = (d, u, p) => {
    t("update-month-year", { month: d, year: u, fromNav: p });
  }, c = oe(() => (d) => Hp(
    et(ee(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    d
  ));
  return { handleMonthYearChange: i, isDisabled: c, updateMonthYear: l };
};
var Qr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Qr || {}), Qt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Qt || {}), br = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(br || {}), $r = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))($r || {}), dn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(dn || {});
const PE = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: o,
  emit: a,
  props: s,
  slots: i
}) => {
  const l = se({}), c = se(!1), d = se({
    top: "0",
    left: "0"
  }), u = se(!1), p = Sr(s, "teleportCenter");
  _t(p, () => {
    d.value = JSON.parse(JSON.stringify({})), g();
  });
  const m = (O) => {
    if (s.teleport) {
      const A = O.getBoundingClientRect();
      return {
        left: A.left + window.scrollX,
        top: A.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, y = (O, A) => {
    d.value.left = `${O + A - l.value.width}px`;
  }, _ = (O) => {
    d.value.left = `${O}px`;
  }, P = (O, A) => {
    s.position === Qr.left && _(O), s.position === Qr.right && y(O, A), s.position === Qr.center && (d.value.left = `${O + A / 2 - l.value.width / 2}px`);
  }, W = (O) => {
    const { width: A, height: H } = O.getBoundingClientRect(), { top: K, left: he } = s.altPosition ? s.altPosition(O) : m(O);
    return { top: +K, left: +he, width: A, height: H };
  }, q = () => {
    d.value.left = "50%", d.value.top = "50%", d.value.transform = "translate(-50%, -50%)", d.value.position = "fixed", delete d.value.opacity;
  }, w = () => {
    const O = Et(n), { top: A, left: H, transform: K } = s.altPosition(O);
    d.value = { top: `${A}px`, left: `${H}px`, transform: K ?? "" };
  }, g = (O = !0) => {
    var A;
    if (!o.value.enabled) {
      if (p.value)
        return q();
      if (s.altPosition !== null)
        return w();
      if (O) {
        const H = s.teleport ? (A = t.value) == null ? void 0 : A.$el : e.value;
        H && (l.value = H.getBoundingClientRect()), a("recalculate-position");
      }
      return x();
    }
  }, N = ({ inputEl: O, left: A, width: H }) => {
    window.screen.width > 768 && !c.value && P(A, H), R(O);
  }, C = (O) => {
    const { top: A, left: H, height: K, width: he } = W(O);
    d.value.top = `${K + A + +s.offset}px`, u.value = !1, c.value || (d.value.left = `${H + he / 2 - l.value.width / 2}px`), N({ inputEl: O, left: H, width: he });
  }, b = (O) => {
    const { top: A, left: H, width: K } = W(O);
    d.value.top = `${A - +s.offset - l.value.height}px`, u.value = !0, N({ inputEl: O, left: H, width: K });
  }, R = (O) => {
    if (s.autoPosition) {
      const { left: A, width: H } = W(O), { left: K, right: he } = l.value;
      if (!c.value) {
        if (Math.abs(K) !== Math.abs(he)) {
          if (K <= 0)
            return c.value = !0, _(A);
          if (he >= document.documentElement.clientWidth)
            return c.value = !0, y(A, H);
        }
        return P(A, H);
      }
    }
  }, j = () => {
    const O = Et(n);
    if (O) {
      const { height: A } = l.value, { top: H, height: K } = O.getBoundingClientRect(), he = window.innerHeight - H - K, ne = H;
      return A <= he ? br.bottom : A > he && A <= ne ? br.top : he >= ne ? br.bottom : br.top;
    }
    return br.bottom;
  }, B = (O) => j() === br.bottom ? C(O) : b(O), x = () => {
    const O = Et(n);
    if (O)
      return s.autoPosition ? B(O) : C(O);
  }, M = function(O) {
    if (O) {
      const A = O.scrollHeight > O.clientHeight, H = window.getComputedStyle(O).overflowY.indexOf("hidden") !== -1;
      return A && !H;
    }
    return !0;
  }, Y = function(O) {
    return !O || O === document.body || O.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : M(O) ? O : Y(O.parentNode);
  }, U = (O) => {
    if (O)
      switch (s.position) {
        case Qr.left:
          return { left: 0, transform: "translateX(0)" };
        case Qr.right:
          return { left: `${O.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${O.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: u,
    menuStyle: d,
    xCorrect: c,
    setMenuPosition: g,
    getScrollableParent: Y,
    shadowRender: (O, A) => {
      var H, K, he;
      const ne = document.createElement("div"), h = (H = Et(n)) == null ? void 0 : H.getBoundingClientRect();
      ne.setAttribute("id", "dp--temp-container");
      const f = (K = r.value) != null && K.clientWidth ? r.value : document.body;
      f.append(ne);
      const k = U(h), z = sf(
        O,
        {
          ...A,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...k }
        },
        Object.fromEntries(
          Object.keys(i).filter((pe) => ["right-sidebar", "left-sidebar"].includes(pe)).map((pe) => [pe, i[pe]])
        )
      );
      Ku(z, ne), l.value = (he = z.el) == null ? void 0 : he.getBoundingClientRect(), Ku(null, ne), f.removeChild(ne);
    }
  };
}, Yn = [
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
], AE = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], CE = {
  all: () => Yn,
  monthYear: () => Yn.filter((e) => e.use.includes("month-year")),
  input: () => AE,
  timePicker: () => Yn.filter((e) => e.use.includes("time")),
  action: () => Yn.filter((e) => e.use.includes("action")),
  calendar: () => Yn.filter((e) => e.use.includes("calendar")),
  menu: () => Yn.filter((e) => e.use.includes("menu")),
  shared: () => Yn.filter((e) => e.use.includes("shared")),
  yearMode: () => Yn.filter((e) => e.use.includes("year-mode"))
}, Yt = (e, t, n) => {
  const r = [];
  return CE[t]().forEach((o) => {
    e[o.name] && r.push(o.name);
  }), n != null && n.length && n.forEach((o) => {
    o.slot && r.push(o.slot);
  }), r;
}, pa = (e) => {
  const t = oe(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = oe(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ha = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = lt(e), o = ee(ar(ee(), r.value.timezone)), a = se([{ month: He(o), year: Ie(o) }]), s = Rn({
    hours: n.value.enabled ? [on(o), on(o)] : on(o),
    minutes: n.value.enabled ? [_n(o), _n(o)] : _n(o),
    seconds: n.value.enabled ? [0, 0] : 0
  }), i = oe({
    get: () => e.internalModelValue,
    set: (d) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", d);
    }
  }), l = oe(
    () => (d) => a.value[d] ? a.value[d].month : 0
  ), c = oe(
    () => (d) => a.value[d] ? a.value[d].year : 0
  );
  return {
    calendars: a,
    time: s,
    modelValue: i,
    month: l,
    year: c
  };
}, $E = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: o, propDates: a, defaultedRange: s } = lt(t), { isDisabled: i } = cr(t), l = se(null), c = se(ar(/* @__PURE__ */ new Date(), o.value.timezone)), d = (f) => {
    !f.current && t.hideOffsetDates || (l.value = f.value);
  }, u = () => {
    l.value = null;
  }, p = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && l.value ? f ? pt(l.value, e.value[0]) : ut(l.value, e.value[0]) : !0, m = (f, k) => {
    const z = () => e.value ? k ? e.value[0] || null : e.value[1] : null, pe = e.value && Array.isArray(e.value) ? z() : null;
    return Ye(ee(f.value), pe);
  }, y = (f) => {
    const k = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !ut(l.value ?? null, k) : !0;
  }, _ = (f, k = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Ye(ee(f.value), e.value[k ? 0 : 1]) : s.value.enabled ? m(f, k) && y(k) || Ye(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(k) : !1, P = (f, k, z) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : z ? pt(e.value[0], k.value) : ut(e.value[0], k.value) : !1, W = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Ye(f.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((k) => Ye(k, f.value)) : Ye(f.value, e.value ? e.value : c.value), q = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const k = en(l.value, +s.value.autoRange), z = Mn(ee(l.value), t.weekStart);
        return t.weekPicker ? Ye(z[1], ee(f.value)) : Ye(k, ee(f.value));
      }
      return !1;
    }
    return !1;
  }, w = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        const k = en(l.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const z = Mn(ee(l.value), t.weekStart);
        return t.weekPicker ? pt(f.value, z[0]) && ut(f.value, z[1]) : pt(f.value, l.value) && ut(f.value, k);
      }
      return !1;
    }
    return !1;
  }, g = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const k = Mn(ee(l.value), t.weekStart);
        return t.weekPicker ? Ye(k[0], f.value) : Ye(l.value, f.value);
      }
      return !1;
    }
    return !1;
  }, N = (f) => $s(e.value, l.value, f.value), C = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, b = () => t.modelAuto ? Vp(t.internalModelValue) : !0, R = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const k = s.value.enabled ? !_(f) && !_(f, !1) : !0;
    return !i(f.value) && !W(f) && !(!f.current && t.hideOffsetDates) && k;
  }, j = (f) => s.value.enabled ? t.modelAuto ? C() && W(f) : !1 : W(f), B = (f) => r.value ? aE(f.value, a.value.highlight) : !1, x = (f) => {
    const k = i(f.value);
    return k && (typeof r.value == "function" ? !r.value(f.value, k) : !r.value.options.highlightDisabled);
  }, M = (f) => {
    var k;
    return typeof r.value == "function" ? r.value(f.value) : (k = r.value.weekdays) == null ? void 0 : k.includes(f.value.getDay());
  }, Y = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && b() && !(!f.current && t.hideOffsetDates) && !W(f) ? N(f) : !1, U = (f) => {
    const { isRangeStart: k, isRangeEnd: z } = K(f), pe = s.value.enabled ? k || z : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !i(f.value),
      dp__cell_disabled: i(f.value),
      dp__cell_highlight: !x(f) && (B(f) || M(f)) && !j(f) && !pe && !g(f) && !(Y(f) && t.weekPicker) && !z,
      dp__cell_highlight_active: !x(f) && (B(f) || M(f)) && j(f),
      dp__today: !t.noToday && Ye(f.value, c.value) && f.current,
      "dp--past": ut(f.value, c.value),
      "dp--future": pt(f.value, c.value)
    };
  }, O = (f) => ({
    dp__active_date: j(f),
    dp__date_hover: R(f)
  }), A = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const k = Mn(e.value, t.weekStart);
      return {
        ...ne(f),
        dp__range_start: Ye(k[0], f.value),
        dp__range_end: Ye(k[1], f.value),
        dp__range_between_week: pt(f.value, k[0]) && ut(f.value, k[1])
      };
    }
    return {
      ...ne(f)
    };
  }, H = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const k = Mn(e.value[0], t.weekStart), z = e.value[1] ? Mn(e.value[1], t.weekStart) : [];
      return {
        ...ne(f),
        dp__range_start: Ye(k[0], f.value) || Ye(z[0], f.value),
        dp__range_end: Ye(k[1], f.value) || Ye(z[1], f.value),
        dp__range_between_week: pt(f.value, k[0]) && ut(f.value, k[1]) || pt(f.value, z[0]) && ut(f.value, z[1]),
        dp__range_between: pt(f.value, k[1]) && ut(f.value, z[0])
      };
    }
    return {
      ...ne(f)
    };
  }, K = (f) => {
    const k = n.value.count > 0 ? f.current && _(f) && b() : _(f) && b(), z = n.value.count > 0 ? f.current && _(f, !1) && b() : _(f, !1) && b();
    return { isRangeStart: k, isRangeEnd: z };
  }, he = (f) => {
    const { isRangeStart: k, isRangeEnd: z } = K(f);
    return {
      dp__range_start: k,
      dp__range_end: z,
      dp__range_between: Y(f),
      dp__date_hover_start: P(R(f), f, !0),
      dp__date_hover_end: P(R(f), f, !1)
    };
  }, ne = (f) => ({
    ...he(f),
    dp__cell_auto_range: w(f),
    dp__cell_auto_range_start: g(f),
    dp__cell_auto_range_end: q(f)
  }), h = (f) => s.value.enabled ? s.value.autoRange ? ne(f) : t.modelAuto ? { ...O(f), ...he(f) } : t.weekPicker ? H(f) : he(f) : t.weekPicker ? A(f) : O(f);
  return {
    setHoverDate: d,
    clearHoverDate: u,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...U(f),
      ...h(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, cr = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = lt(e), o = (x) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(ee(x)) : !!os(x, r.value.disabledDates) : !1, a = (x) => {
    const M = r.value.maxDate ? pt(x, r.value.maxDate) : !1, Y = r.value.minDate ? ut(x, r.value.minDate) : !1, U = o(x), O = t.value.months.map((ne) => +ne).includes(He(x)), A = e.disabledWeekDays.length ? e.disabledWeekDays.some((ne) => +ne === Xw(x)) : !1, H = d(x), K = Ie(x), he = K < +e.yearRange[0] || K > +e.yearRange[1];
    return !(M || Y || U || O || he || A || H);
  }, s = (x, M) => ut(...Qn(r.value.minDate, x, M)) || Ye(...Qn(r.value.minDate, x, M)), i = (x, M) => pt(...Qn(r.value.maxDate, x, M)) || Ye(...Qn(r.value.maxDate, x, M)), l = (x, M, Y) => {
    let U = !1;
    return r.value.maxDate && Y && i(x, M) && (U = !0), r.value.minDate && !Y && s(x, M) && (U = !0), U;
  }, c = (x, M, Y, U) => {
    let O = !1;
    return U ? r.value.minDate && r.value.maxDate ? O = l(x, M, Y) : (r.value.minDate && s(x, M) || r.value.maxDate && i(x, M)) && (O = !0) : O = !0, O;
  }, d = (x) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !os(x, r.value.allowedDates) : !1, u = (x) => !a(x), p = (x) => n.value.noDisabledRange ? !_p({ start: x[0], end: x[1] }).some((M) => u(M)) : !0, m = (x) => {
    if (x) {
      const M = Ie(x);
      return M >= +e.yearRange[0] && M <= e.yearRange[1];
    }
    return !0;
  }, y = (x, M) => !!(Array.isArray(x) && x[M] && (n.value.maxRange || n.value.minRange) && m(x[M])), _ = (x, M, Y = 0) => {
    if (y(M, Y) && m(x)) {
      const U = gp(x, M[Y]), O = Bp(M[Y], x), A = O.length === 1 ? 0 : O.filter((K) => u(K)).length, H = Math.abs(U) - (n.value.minMaxRawRange ? 0 : A);
      if (n.value.minRange && n.value.maxRange)
        return H >= +n.value.minRange && H <= +n.value.maxRange;
      if (n.value.minRange)
        return H >= +n.value.minRange;
      if (n.value.maxRange)
        return H <= +n.value.maxRange;
    }
    return !0;
  }, P = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, W = (x) => Array.isArray(x) ? [x[0] ? ci(x[0]) : null, x[1] ? ci(x[1]) : null] : ci(x), q = (x, M, Y) => x.find(
    (U) => +U.hours === on(M) && U.minutes === "*" ? !0 : +U.minutes === _n(M) && +U.hours === on(M)
  ) && Y, w = (x, M, Y) => {
    const [U, O] = x, [A, H] = M;
    return !q(U, A, Y) && !q(O, H, Y) && Y;
  }, g = (x, M) => {
    const Y = Array.isArray(M) ? M : [M];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? w(e.disabledTimes, Y, x) : !Y.some((U) => q(e.disabledTimes, U, x)) : x;
  }, N = (x, M) => {
    const Y = Array.isArray(M) ? [Cr(M[0]), M[1] ? Cr(M[1]) : void 0] : Cr(M), U = !e.disabledTimes(Y);
    return x && U;
  }, C = (x, M) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? g(M, x) : N(M, x) : M, b = (x) => {
    let M = !0;
    if (!x || P())
      return !0;
    const Y = !r.value.minDate && !r.value.maxDate ? W(x) : x;
    return (e.maxTime || r.value.maxDate) && (M = Bc(
      e.maxTime,
      r.value.maxDate,
      "max",
      Ot(Y),
      M
    )), (e.minTime || r.value.minDate) && (M = Bc(
      e.minTime,
      r.value.minDate,
      "min",
      Ot(Y),
      M
    )), C(x, M);
  }, R = (x) => {
    if (!e.monthPicker)
      return !0;
    let M = !0;
    const Y = ee(tn(x));
    if (r.value.minDate && r.value.maxDate) {
      const U = ee(tn(r.value.minDate)), O = ee(tn(r.value.maxDate));
      return pt(Y, U) && ut(Y, O) || Ye(Y, U) || Ye(Y, O);
    }
    if (r.value.minDate) {
      const U = ee(tn(r.value.minDate));
      M = pt(Y, U) || Ye(Y, U);
    }
    if (r.value.maxDate) {
      const U = ee(tn(r.value.maxDate));
      M = ut(Y, U) || Ye(Y, U);
    }
    return M;
  }, j = oe(() => (x) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : b(x)), B = oe(() => (x) => e.monthPicker ? Array.isArray(x) && (n.value.enabled || e.multiDates) ? !x.filter((M) => !R(M)).length : R(x) : !0);
  return {
    isDisabled: u,
    validateDate: a,
    validateMonthYearInRange: c,
    isDateRangeAllowed: p,
    checkMinMaxRange: _,
    isValidTime: b,
    isTimeValid: j,
    isMonthValid: B
  };
}, Rs = () => {
  const e = oe(() => (r, o) => r == null ? void 0 : r.includes(o)), t = oe(() => (r, o) => r.count ? r.solo ? !0 : o === 0 : !0), n = oe(() => (r, o) => r.count ? r.solo ? !0 : o === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, RE = (e, t, n) => {
  const r = se(0), o = Rn({
    [$r.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [$r.calendar]: !1,
    [$r.header]: !1
  }), a = oe(() => e.monthPicker), s = (u) => {
    var p;
    if ((p = e.flow) != null && p.length) {
      if (!u && a.value)
        return d();
      o[u] = !0, Object.keys(o).filter((m) => !o[m]).length || d();
    }
  }, i = () => {
    var u;
    (u = e.flow) != null && u.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), d());
  }, l = () => {
    r.value = -1;
  }, c = (u, p, ...m) => {
    var y, _;
    e.flow[r.value] === u && n.value && ((_ = (y = n.value)[p]) == null || _.call(y, ...m));
  }, d = () => {
    c(dn.month, "toggleMonthPicker", !0), c(dn.year, "toggleYearPicker", !0), c(dn.calendar, "toggleTimePicker", !1, !0), c(dn.time, "toggleTimePicker", !0, !0);
    const u = e.flow[r.value];
    (u === dn.hours || u === dn.minutes || u === dn.seconds) && c(u, "toggleTimePicker", !0, !0, u);
  };
  return { childMount: s, updateFlowStep: i, resetFlow: l, flowStep: r };
}, Vs = {
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
}, un = {
  ...Vs,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, VE = {
  key: 1,
  class: "dp__input_wrap"
}, IE = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], FE = {
  key: 2,
  class: "dp__clear_icon"
}, LE = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Vs
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
    const r = n, o = e, {
      defaultedTextInput: a,
      defaultedAriaLabels: s,
      defaultedInline: i,
      defaultedConfig: l,
      defaultedRange: c,
      getDefaultPattern: d,
      getDefaultStartTime: u
    } = lt(o), { checkMinMaxRange: p } = cr(o), m = se(), y = se(null), _ = se(!1), P = se(!1), W = oe(
      () => ({
        dp__pointer: !o.disabled && !o.readonly && !a.value.enabled,
        dp__disabled: o.disabled,
        dp__input_readonly: !a.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !o.hideInputIcon,
        dp__input_valid: !!o.state,
        dp__input_invalid: o.state === !1,
        dp__input_focus: _.value || o.isMenuOpen,
        dp__input_reg: !a.value.enabled,
        [o.inputClassName]: !!o.inputClassName
      })
    ), q = () => {
      r("set-input-date", null), o.autoApply && (r("set-empty-date"), m.value = null);
    }, w = (O) => {
      const A = u();
      return sE(
        O,
        a.value.format ?? d(),
        A ?? jp({}, o.enableSeconds),
        o.inputValue,
        P.value
      );
    }, g = (O) => {
      const { rangeSeparator: A } = a.value, [H, K] = O.split(`${A}`);
      if (H) {
        const he = w(H.trim()), ne = K ? w(K.trim()) : null, h = he && ne ? [he, ne] : [he];
        p(ne, h, 0) && (m.value = he ? h : null);
      }
    }, N = () => {
      P.value = !0;
    }, C = (O) => {
      if (c.value.enabled)
        g(O);
      else if (o.multiDates) {
        const A = O.split(";");
        m.value = A.map((H) => w(H.trim())).filter((H) => H);
      } else
        m.value = w(O);
    }, b = (O) => {
      var A;
      const H = typeof O == "string" ? O : (A = O.target) == null ? void 0 : A.value;
      H !== "" ? (a.value.openMenu && !o.isMenuOpen && r("open"), C(H), r("set-input-date", m.value)) : q(), P.value = !1, r("update:input-value", H);
    }, R = (O) => {
      a.value.enabled ? (C(O.target.value), a.value.enterSubmit && Qi(m.value) && o.inputValue !== "" ? (r("set-input-date", m.value, !0), m.value = null) : a.value.enterSubmit && o.inputValue === "" && (m.value = null, r("clear"))) : x(O);
    }, j = (O) => {
      a.value.enabled && a.value.tabSubmit && C(O.target.value), a.value.tabSubmit && Qi(m.value) && o.inputValue !== "" ? (r("set-input-date", m.value, !0, !0), m.value = null) : a.value.tabSubmit && o.inputValue === "" && (m.value = null, r("clear", !0));
    }, B = () => {
      var O;
      _.value = !0, r("focus"), a.value.enabled && a.value.selectOnFocus && ((O = y.value) == null || O.select());
    }, x = (O) => {
      O.preventDefault(), tr(O, l.value, !0), a.value.enabled && a.value.openMenu && !i.value.input && !o.isMenuOpen ? r("open") : a.value.enabled || r("toggle");
    }, M = () => {
      r("real-blur"), _.value = !1, (!o.isMenuOpen || i.value.enabled && i.value.input) && r("blur"), o.autoApply && a.value.enabled && m.value && !o.isMenuOpen && (r("set-input-date", m.value), r("select-date"), m.value = null);
    }, Y = (O) => {
      tr(O, l.value, !0), r("clear");
    }, U = (O) => {
      if (!a.value.enabled) {
        if (O.code === "Tab")
          return;
        O.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var O;
        (O = y.value) == null || O.focus({ preventScroll: !0 });
      },
      setParsedDate: (O) => {
        m.value = O;
      }
    }), (O, A) => {
      var H;
      return V(), X("div", { onClick: x }, [
        O.$slots.trigger && !O.$slots["dp-input"] && !D(i).enabled ? ge(O.$slots, "trigger", { key: 0 }) : ae("", !0),
        !O.$slots.trigger && (!D(i).enabled || D(i).input) ? (V(), X("div", VE, [
          O.$slots["dp-input"] && !O.$slots.trigger && (!D(i).enabled || D(i).enabled && D(i).input) ? ge(O.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: b,
            onEnter: R,
            onTab: j,
            onClear: Y,
            onBlur: M,
            onKeypress: U,
            onPaste: N,
            openMenu: () => O.$emit("open"),
            closeMenu: () => O.$emit("close"),
            toggleMenu: () => O.$emit("toggle")
          }) : ae("", !0),
          O.$slots["dp-input"] ? ae("", !0) : (V(), X("input", {
            key: 1,
            id: O.uid ? `dp-input-${O.uid}` : void 0,
            ref_key: "inputRef",
            ref: y,
            name: O.name,
            class: je(W.value),
            inputmode: D(a).enabled ? "text" : "none",
            placeholder: O.placeholder,
            disabled: O.disabled,
            readonly: O.readonly,
            required: O.required,
            value: e.inputValue,
            autocomplete: O.autocomplete,
            "aria-label": (H = D(s)) == null ? void 0 : H.input,
            "aria-disabled": O.disabled || void 0,
            "aria-invalid": O.state === !1 ? !0 : void 0,
            onInput: b,
            onKeydown: [
              Ce(R, ["enter"]),
              Ce(j, ["tab"]),
              U
            ],
            onBlur: M,
            onFocus: B,
            onKeypress: U,
            onPaste: N
          }, null, 42, IE)),
          De("div", {
            onClick: A[2] || (A[2] = (K) => r("toggle"))
          }, [
            O.$slots["input-icon"] && !O.hideInputIcon ? (V(), X("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: A[0] || (A[0] = (K) => r("toggle"))
            }, [
              ge(O.$slots, "input-icon")
            ])) : ae("", !0),
            !O.$slots["input-icon"] && !O.hideInputIcon && !O.$slots["dp-input"] ? (V(), Re(D(go), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: A[1] || (A[1] = (K) => r("toggle"))
            })) : ae("", !0)
          ]),
          O.$slots["clear-icon"] && e.inputValue && O.clearable && !O.disabled && !O.readonly ? (V(), X("span", FE, [
            ge(O.$slots, "clear-icon", { clear: Y })
          ])) : ae("", !0),
          O.clearable && !O.$slots["clear-icon"] && e.inputValue && !O.disabled && !O.readonly ? (V(), Re(D($p), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: A[3] || (A[3] = Xe((K) => Y(K), ["prevent"]))
          })) : ae("", !0)
        ])) : ae("", !0)
      ]);
    };
  }
}), BE = ["title"], jE = ["disabled"], HE = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...un
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const n = t, r = e, {
      defaultedActionRow: o,
      defaultedPreviewFormat: a,
      defaultedMultiCalendars: s,
      defaultedTextInput: i,
      defaultedInline: l,
      defaultedRange: c,
      getDefaultPattern: d
    } = lt(r), { isTimeValid: u, isMonthValid: p } = cr(r), { buildMatrix: m } = ur(), y = se(null), _ = se(null), P = se(!1), W = se({}), q = se(null), w = se(null);
    Mt(() => {
      r.arrowNavigation && m([Et(y), Et(_)], "actionRow"), g(), window.addEventListener("resize", g);
    }), po(() => {
      window.removeEventListener("resize", g);
    });
    const g = () => {
      P.value = !1, setTimeout(() => {
        var U, O;
        const A = (U = q.value) == null ? void 0 : U.getBoundingClientRect(), H = (O = w.value) == null ? void 0 : O.getBoundingClientRect();
        A && H && (W.value.maxWidth = `${H.width - A.width - 20}px`), P.value = !0;
      }, 0);
    }, N = oe(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), C = oe(
      () => !u.value(r.internalModelValue) || !p.value(r.internalModelValue) || !N.value
    ), b = () => {
      const U = a.value;
      return r.timePicker || r.monthPicker, U(Ot(r.internalModelValue));
    }, R = () => {
      const U = r.internalModelValue;
      return s.value.count > 0 ? `${j(U[0])} - ${j(U[1])}` : [j(U[0]), j(U[1])];
    }, j = (U) => Yp(
      U,
      a.value,
      r.formatLocale,
      i.value.rangeSeparator,
      r.modelAuto,
      d()
    ), B = oe(() => !r.internalModelValue || !r.menuMount ? "" : typeof a.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? R() : r.multiDates ? r.internalModelValue.map((U) => `${j(U)}`) : r.modelAuto ? `${j(r.internalModelValue[0])}` : `${j(r.internalModelValue[0])} -` : j(r.internalModelValue) : b()), x = () => r.multiDates ? "; " : " - ", M = oe(
      () => Array.isArray(B.value) ? B.value.join(x()) : B.value
    ), Y = () => {
      u.value(r.internalModelValue) && p.value(r.internalModelValue) && N.value ? n("select-date") : n("invalid-select");
    };
    return (U, O) => (V(), X("div", {
      ref_key: "actionRowRef",
      ref: w,
      class: "dp__action_row"
    }, [
      U.$slots["action-row"] ? ge(U.$slots, "action-row", bt(xt({ key: 0 }, {
        internalModelValue: U.internalModelValue,
        disabled: C.value,
        selectDate: () => U.$emit("select-date"),
        closePicker: () => U.$emit("close-picker")
      }))) : (V(), X(Oe, { key: 1 }, [
        D(o).showPreview ? (V(), X("div", {
          key: 0,
          class: "dp__selection_preview",
          title: M.value,
          style: Vt(W.value)
        }, [
          U.$slots["action-preview"] && P.value ? ge(U.$slots, "action-preview", {
            key: 0,
            value: U.internalModelValue
          }) : ae("", !0),
          !U.$slots["action-preview"] && P.value ? (V(), X(Oe, { key: 1 }, [
            sn(ct(M.value), 1)
          ], 64)) : ae("", !0)
        ], 12, BE)) : ae("", !0),
        De("div", {
          ref_key: "actionBtnContainer",
          ref: q,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          U.$slots["action-buttons"] ? ge(U.$slots, "action-buttons", {
            key: 0,
            value: U.internalModelValue
          }) : ae("", !0),
          U.$slots["action-buttons"] ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
            !D(l).enabled && D(o).showCancel ? (V(), X("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: y,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: O[0] || (O[0] = (A) => U.$emit("close-picker")),
              onKeydown: [
                O[1] || (O[1] = Ce((A) => U.$emit("close-picker"), ["enter"])),
                O[2] || (O[2] = Ce((A) => U.$emit("close-picker"), ["space"]))
              ]
            }, ct(U.cancelText), 545)) : ae("", !0),
            D(o).showNow ? (V(), X("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: O[3] || (O[3] = (A) => U.$emit("select-now")),
              onKeydown: [
                O[4] || (O[4] = Ce((A) => U.$emit("select-now"), ["enter"])),
                O[5] || (O[5] = Ce((A) => U.$emit("select-now"), ["space"]))
              ]
            }, ct(U.nowButtonLabel), 33)) : ae("", !0),
            D(o).showSelect ? (V(), X("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: _,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: C.value,
              onKeydown: [
                Ce(Y, ["enter"]),
                Ce(Y, ["space"])
              ],
              onClick: Y
            }, ct(U.selectText), 41, jE)) : ae("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), YE = ["onKeydown"], UE = { class: "dp__selection_grid_header" }, WE = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], qE = ["aria-label"], ma = /* @__PURE__ */ St({
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
    const { setSelectionGrid: r, buildMultiLevelMatrix: o, setMonthPicker: a } = ur(), s = n, i = e, { defaultedAriaLabels: l, defaultedTextInput: c, defaultedConfig: d } = lt(
      i
    ), { hideNavigationButtons: u } = Rs(), p = se(!1), m = se(null), y = se(null), _ = se([]), P = se(), W = se(null), q = se(0), w = se(null);
    Fd(() => {
      m.value = null;
    }), Mt(() => {
      Kt().then(() => x()), i.noOverlayFocus || N(), g(!0);
    }), po(() => g(!1));
    const g = (ne) => {
      var h;
      i.arrowNavigation && ((h = i.headerRefs) != null && h.length ? a(ne) : r(ne));
    }, N = () => {
      var ne;
      const h = Et(y);
      h && (c.value.enabled || (m.value ? (ne = m.value) == null || ne.focus({ preventScroll: !0 }) : h.focus({ preventScroll: !0 })), p.value = h.clientHeight < h.scrollHeight);
    }, C = oe(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !i.useRelative,
        "dp--overlay-relative": i.useRelative
      })
    ), b = oe(
      () => i.useRelative ? { height: `${i.height}px`, width: "260px" } : void 0
    ), R = oe(() => ({
      dp__overlay_col: !0
    })), j = oe(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: i.isLast
      })
    ), B = oe(() => {
      var ne, h;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((ne = i.items) == null ? void 0 : ne.length) <= 6,
        dp__container_block: ((h = i.items) == null ? void 0 : h.length) > 6
      };
    });
    _t(
      () => i.items,
      () => x(!1),
      { deep: !0 }
    );
    const x = (ne = !0) => {
      Kt().then(() => {
        const h = Et(m), f = Et(y), k = Et(W), z = Et(w), pe = k ? k.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? q.value = f.getBoundingClientRect().height - pe : q.value = d.value.modeHeight - pe), h && z && ne && (z.scrollTop = h.offsetTop - z.offsetTop - (q.value / 2 - h.getBoundingClientRect().height) - pe);
      });
    }, M = (ne) => {
      ne.disabled || s("selected", ne.value);
    }, Y = () => {
      s("toggle"), s("reset-flow");
    }, U = () => {
      i.escClose && Y();
    }, O = (ne, h, f, k) => {
      ne && ((h.active || h.value === i.focusValue) && (m.value = ne), i.arrowNavigation && (Array.isArray(_.value[f]) ? _.value[f][k] = ne : _.value[f] = [ne], A()));
    }, A = () => {
      var ne, h;
      const f = (ne = i.headerRefs) != null && ne.length ? [i.headerRefs].concat(_.value) : _.value.concat([i.skipButtonRef ? [] : [W.value]]);
      o(Ot(f), (h = i.headerRefs) != null && h.length ? "monthPicker" : "selectionGrid");
    }, H = (ne) => {
      i.arrowNavigation || tr(ne, d.value, !0);
    }, K = (ne) => {
      P.value = ne, s("hover-value", ne);
    }, he = () => {
      if (Y(), !i.isLast) {
        const ne = oE(i.menuWrapRef ?? null, "action-row");
        if (ne) {
          const h = Ip(ne);
          h == null || h.focus();
        }
      }
    };
    return t({ focusGrid: N }), (ne, h) => {
      var f;
      return V(), X("div", {
        ref_key: "gridWrapRef",
        ref: y,
        class: je(C.value),
        style: Vt(b.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Ce(Xe(U, ["prevent"]), ["esc"]),
          h[0] || (h[0] = Ce(Xe((k) => H(k), ["prevent"]), ["left"])),
          h[1] || (h[1] = Ce(Xe((k) => H(k), ["prevent"]), ["up"])),
          h[2] || (h[2] = Ce(Xe((k) => H(k), ["prevent"]), ["down"])),
          h[3] || (h[3] = Ce(Xe((k) => H(k), ["prevent"]), ["right"]))
        ]
      }, [
        De("div", {
          ref_key: "containerRef",
          ref: w,
          class: je(B.value),
          role: "grid",
          style: Vt({ height: `${q.value}px` })
        }, [
          De("div", UE, [
            ge(ne.$slots, "header")
          ]),
          ne.$slots.overlay ? ge(ne.$slots, "overlay", { key: 0 }) : (V(!0), X(Oe, { key: 1 }, Ze(ne.items, (k, z) => (V(), X("div", {
            key: z,
            class: je(["dp__overlay_row", { dp__flex_row: ne.items.length >= 3 }]),
            role: "row"
          }, [
            (V(!0), X(Oe, null, Ze(k, (pe, F) => (V(), X("div", {
              key: pe.value,
              ref_for: !0,
              ref: (Me) => O(Me, pe, z, F),
              role: "gridcell",
              class: je(R.value),
              "aria-selected": pe.active || void 0,
              "aria-disabled": pe.disabled || void 0,
              tabindex: "0",
              onClick: (Me) => M(pe),
              onKeydown: [
                Ce(Xe((Me) => M(pe), ["prevent"]), ["enter"]),
                Ce(Xe((Me) => M(pe), ["prevent"]), ["space"])
              ],
              onMouseover: (Me) => K(pe.value)
            }, [
              De("div", {
                class: je(pe.className)
              }, [
                ne.$slots.item ? ge(ne.$slots, "item", {
                  key: 0,
                  item: pe
                }) : ae("", !0),
                ne.$slots.item ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
                  sn(ct(pe.text), 1)
                ], 64))
              ], 2)
            ], 42, WE))), 128))
          ], 2))), 128))
        ], 6),
        ne.$slots["button-icon"] ? Zn((V(), X("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: W,
          type: "button",
          "aria-label": (f = D(l)) == null ? void 0 : f.toggleOverlay,
          class: je(j.value),
          tabindex: "0",
          onClick: Y,
          onKeydown: [
            Ce(Y, ["enter"]),
            Ce(he, ["tab"])
          ]
        }, [
          ge(ne.$slots, "button-icon")
        ], 42, qE)), [
          [Io, !D(u)(ne.hideNavigation, ne.type)]
        ]) : ae("", !0)
      ], 46, YE);
    };
  }
}), Is = /* @__PURE__ */ St({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = oe(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = oe(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (o, a) => (V(), X("div", {
      class: je({
        dp__menu_inner: !o.stretch,
        "dp--menu--inner-stretched": o.stretch,
        dp__flex_display: o.multiCalendars > 0,
        "dp--flex-display-collapsed": o.collapse
      })
    }, [
      (V(!0), X(Oe, null, Ze(n.value, (s, i) => (V(), X("div", {
        key: s,
        class: je(r.value)
      }, [
        ge(o.$slots, "default", {
          instance: s,
          index: i
        })
      ], 2))), 128))
    ], 2));
  }
}), GE = ["aria-label", "aria-disabled"], jo = /* @__PURE__ */ St({
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
    const n = t, r = se(null);
    return Mt(() => n("set-ref", r)), (o, a) => (V(), X("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": o.ariaLabel,
      "aria-disabled": o.disabled || void 0,
      onClick: a[0] || (a[0] = (s) => o.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = Ce(Xe((s) => o.$emit("activate"), ["prevent"]), ["enter"])),
        a[2] || (a[2] = Ce(Xe((s) => o.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      De("span", {
        class: je(["dp__inner_nav", { dp__inner_nav_disabled: o.disabled }])
      }, [
        ge(o.$slots, "default")
      ], 2)
    ], 40, GE));
  }
}), zE = { class: "dp--year-mode-picker" }, KE = ["aria-label"], Gp = /* @__PURE__ */ St({
  __name: "YearModePicker",
  props: {
    ...un,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const n = t, r = e, { showRightIcon: o, showLeftIcon: a } = Rs(), { defaultedConfig: s, defaultedMultiCalendars: i, defaultedAriaLabels: l, defaultedTransitions: c } = lt(r), { showTransition: d, transitionName: u } = pa(c), p = (_ = !1, P) => {
      n("toggle-year-picker", { flow: _, show: P });
    }, m = (_) => {
      n("year-select", _);
    }, y = (_ = !1) => {
      n("handle-year", _);
    };
    return (_, P) => {
      var W, q, w;
      return V(), X("div", zE, [
        D(a)(D(i), e.instance) ? (V(), Re(jo, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (W = D(l)) == null ? void 0 : W.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: P[0] || (P[0] = (g) => y(!1))
        }, {
          default: Le(() => [
            _.$slots["arrow-left"] ? ge(_.$slots, "arrow-left", { key: 0 }) : ae("", !0),
            _.$slots["arrow-left"] ? ae("", !0) : (V(), Re(D(Ul), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : ae("", !0),
        De("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (q = D(l)) == null ? void 0 : q.openYearsOverlay,
          onClick: P[1] || (P[1] = () => p(!1)),
          onKeydown: P[2] || (P[2] = Ce(() => p(!1), ["enter"]))
        }, [
          _.$slots.year ? ge(_.$slots, "year", {
            key: 0,
            year: e.year
          }) : ae("", !0),
          _.$slots.year ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
            sn(ct(e.year), 1)
          ], 64))
        ], 40, KE),
        D(o)(D(i), e.instance) ? (V(), Re(jo, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (w = D(l)) == null ? void 0 : w.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: P[3] || (P[3] = (g) => y(!0))
        }, {
          default: Le(() => [
            _.$slots["arrow-right"] ? ge(_.$slots, "arrow-right", { key: 0 }) : ae("", !0),
            _.$slots["arrow-right"] ? ae("", !0) : (V(), Re(D(Wl), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : ae("", !0),
        Je(lr, {
          name: D(u)(e.showYearPicker),
          css: D(d)
        }, {
          default: Le(() => [
            e.showYearPicker ? (V(), Re(ma, {
              key: 0,
              items: e.items,
              "text-input": _.textInput,
              "esc-close": _.escClose,
              config: _.config,
              "is-last": _.autoApply && !D(s).keepActionRow,
              "hide-navigation": _.hideNavigation,
              "aria-labels": _.ariaLabels,
              type: "year",
              onToggle: p,
              onSelected: P[4] || (P[4] = (g) => m(g))
            }, It({
              "button-icon": Le(() => [
                _.$slots["calendar-icon"] ? ge(_.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                _.$slots["calendar-icon"] ? ae("", !0) : (V(), Re(D(go), { key: 1 }))
              ]),
              _: 2
            }, [
              _.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Le(({ item: g }) => [
                  ge(_.$slots, "year-overlay-value", {
                    text: g.text,
                    value: g.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : ae("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Zl = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Ye(e, r))) {
      const r = t.value.filter((o) => !Ye(o, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, eu = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? ut(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, Fs = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, zp = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => ar(ee(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = ar(ee(e.value), e.timezone));
}, Kp = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (pt(e, t.value[0]) || Ye(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (ut(e, t.value[1]) || Ye(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], Qp = ({
  multiCalendars: e,
  highlight: t,
  propDates: n,
  calendars: r,
  modelValue: o,
  props: a,
  year: s,
  month: i,
  emit: l
}) => {
  const c = oe(() => Kl(a.yearRange, a.reverseYears)), d = se([!1]), u = oe(() => (N, C) => {
    const b = et(tn(/* @__PURE__ */ new Date()), {
      month: i.value(N),
      year: s.value(N)
    });
    return Hp(
      b,
      n.value.maxDate,
      n.value.minDate,
      a.preventMinMaxNavigation,
      C
    );
  }), p = () => {
    for (let N = 0; N < e.value.count; N++)
      if (N === 0)
        r.value[N] = r.value[0];
      else {
        const C = et(ee(), r.value[N - 1]);
        r.value[N] = { month: He(C), year: Ie(Vl(C, 1)) };
      }
  }, m = (N) => {
    if (!N)
      return p();
    const C = et(ee(), r.value[N]);
    return r.value[0].year = Ie(Cp(C, e.value.count - 1)), p();
  }, y = (N) => a.focusStartDate ? N[0] : N[1] ? N[1] : N[0], _ = () => {
    if (o.value) {
      const N = Array.isArray(o.value) ? y(o.value) : o.value;
      r.value[0] = { month: He(N), year: Ie(N) };
    }
  };
  Mt(() => {
    _(), e.value.count && p();
  });
  const P = (N, C) => {
    r.value[C].year = N, e.value.count && !e.value.solo && m(C);
  }, W = oe(() => (N) => co(c.value, (C) => {
    const b = s.value(N) === C.value, R = Zo(
      C.value,
      fo(n.value.minDate),
      fo(n.value.maxDate)
    ), j = Jl(t.value, C.value);
    return { active: b, disabled: R, highlighted: j };
  })), q = (N, C) => {
    P(N, C), g(C);
  }, w = (N, C = !1) => {
    if (!u.value(N, C)) {
      const b = C ? s.value(N) + 1 : s.value(N) - 1;
      P(b, N);
    }
  }, g = (N, C = !1, b) => {
    C || l("reset-flow"), b !== void 0 ? d.value[N] = b : d.value[N] = !d.value[N], d.value || l("overlay-closed");
  };
  return {
    isDisabled: u,
    groupedYears: W,
    showYearPicker: d,
    selectYear: P,
    toggleYearPicker: g,
    handleYearSelect: q,
    handleYear: w
  };
}, QE = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: o,
    defaultedConfig: a,
    defaultedRange: s,
    defaultedHighlight: i,
    propDates: l,
    defaultedTz: c
  } = lt(e), { modelValue: d, year: u, month: p, calendars: m } = ha(e, t), y = oe(() => Rp(e.formatLocale, e.locale, e.monthNameFormat)), _ = se(null), { checkMinMaxRange: P } = cr(e), {
    selectYear: W,
    groupedYears: q,
    showYearPicker: w,
    toggleYearPicker: g,
    handleYearSelect: N,
    handleYear: C,
    isDisabled: b
  } = Qp({
    modelValue: d,
    multiCalendars: n,
    highlight: i,
    calendars: m,
    year: u,
    propDates: l,
    month: p,
    props: e,
    emit: t
  });
  Mt(() => {
    e.startDate && (d.value && e.focusStartDate || !d.value) && W(Ie(ee(e.startDate)), 0);
  });
  const R = (h) => h ? { month: He(h), year: Ie(h) } : { month: null, year: null }, j = () => d.value ? Array.isArray(d.value) ? d.value.map((h) => R(h)) : R(d.value) : R(), B = (h, f) => {
    const k = m.value[h], z = j();
    return Array.isArray(z) ? z.some((pe) => pe.year === (k == null ? void 0 : k.year) && pe.month === f) : (k == null ? void 0 : k.year) === z.year && f === z.month;
  }, x = (h, f, k) => {
    var z, pe;
    const F = j();
    return Array.isArray(F) ? u.value(f) === ((z = F[k]) == null ? void 0 : z.year) && h === ((pe = F[k]) == null ? void 0 : pe.month) : !1;
  }, M = (h, f) => {
    if (s.value.enabled) {
      const k = j();
      if (Array.isArray(d.value) && Array.isArray(k)) {
        const z = x(h, f, 0) || x(h, f, 1), pe = An(tn(ee()), h, u.value(f));
        return $s(d.value, _.value, pe) && !z;
      }
      return !1;
    }
    return !1;
  }, Y = oe(() => (h) => co(y.value, (f) => {
    const k = B(h, f.value), z = Zo(
      f.value,
      Fp(u.value(h), l.value.minDate),
      Lp(u.value(h), l.value.maxDate)
    ) || fE(l.value.disabledDates, u.value(h)).includes(f.value), pe = M(f.value, h), F = Up(i.value, f.value, u.value(h));
    return { active: k, disabled: z, isBetween: pe, highlighted: F };
  })), U = (h, f) => An(tn(ee()), h, u.value(f)), O = (h, f) => {
    const k = d.value ? d.value : tn(/* @__PURE__ */ new Date());
    d.value = An(k, h, u.value(f)), t("auto-apply"), t("update-flow-step");
  }, A = (h, f) => {
    const k = U(h, f);
    s.value.fixedEnd || s.value.fixedStart ? d.value = Kp(k, d, t, s) : d.value ? P(k, d.value) && (d.value = eu(d, U(h, f), t)) : d.value = [U(h, f)], Fs(d.value, t, e.autoApply, e.modelAuto);
  }, H = (h, f) => {
    Zl(U(h, f), d, e.multiDatesLimit), t("auto-apply", !0);
  }, K = (h, f) => (m.value[f].month = h, ne(f, m.value[f].year, h), e.multiDates ? H(h, f) : s.value.enabled ? A(h, f) : O(h, f)), he = (h, f) => {
    W(h, f), ne(f, h, null);
  }, ne = (h, f, k) => {
    let z = k;
    if (!z && z !== 0) {
      const pe = j();
      z = Array.isArray(pe) ? pe[h].month : pe.month;
    }
    t("update-month-year", { instance: h, year: f, month: z });
  };
  return {
    groupedMonths: Y,
    groupedYears: q,
    year: u,
    isDisabled: b,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: o,
    defaultedConfig: a,
    showYearPicker: w,
    modelValue: d,
    presetDate: (h, f) => {
      zp({
        value: h,
        modelValue: d,
        range: s.value.enabled,
        timezone: f ? void 0 : c.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (h, f) => {
      _.value = U(h, f);
    },
    selectMonth: K,
    selectYear: he,
    toggleYearPicker: g,
    handleYearSelect: N,
    handleYear: C,
    getModelMonthYear: j
  };
}, XE = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...un
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
    const r = n, o = jr(), a = Yt(o, "yearMode"), s = e;
    Mt(() => {
      s.shadow || r("mount", null);
    });
    const {
      groupedMonths: i,
      groupedYears: l,
      year: c,
      isDisabled: d,
      defaultedMultiCalendars: u,
      defaultedConfig: p,
      showYearPicker: m,
      modelValue: y,
      presetDate: _,
      setHoverDate: P,
      selectMonth: W,
      selectYear: q,
      toggleYearPicker: w,
      handleYearSelect: g,
      handleYear: N,
      getModelMonthYear: C
    } = QE(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: y,
      year: c,
      getModelMonthYear: C,
      selectMonth: W,
      selectYear: q,
      handleYear: N
    }), presetDate: _, toggleYearPicker: (b) => w(0, b) }), (b, R) => (V(), Re(Is, {
      "multi-calendars": D(u).count,
      collapse: b.collapse,
      stretch: ""
    }, {
      default: Le(({ instance: j }) => [
        b.$slots["month-year"] ? ge(b.$slots, "month-year", bt(xt({ key: 0 }, {
          year: D(c),
          months: D(i)(j),
          years: D(l)(j),
          selectMonth: D(W),
          selectYear: D(q),
          instance: j
        }))) : (V(), Re(ma, {
          key: 1,
          items: D(i)(j),
          "arrow-navigation": b.arrowNavigation,
          "is-last": b.autoApply && !D(p).keepActionRow,
          "esc-close": b.escClose,
          height: D(p).modeHeight,
          config: b.config,
          "no-overlay-focus": !!(b.noOverlayFocus || b.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (B) => D(W)(B, j),
          onHoverValue: (B) => D(P)(B, j)
        }, {
          header: Le(() => [
            Je(Gp, xt(b.$props, {
              items: D(l)(j),
              instance: j,
              "show-year-picker": D(m)[j],
              year: D(c)(j),
              "is-disabled": (B) => D(d)(j, B),
              onHandleYear: (B) => D(N)(j, B),
              onYearSelect: (B) => D(g)(B, j),
              onToggleYearPicker: (B) => D(w)(j, B == null ? void 0 : B.flow, B == null ? void 0 : B.show)
            }), It({ _: 2 }, [
              Ze(D(a), (B, x) => ({
                name: B,
                fn: Le((M) => [
                  ge(b.$slots, B, bt(Ct(M)))
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
}), JE = (e, t) => {
  const { modelValue: n } = ha(e, t), r = se(null), { defaultedHighlight: o, defaultedFilters: a, defaultedRange: s, propDates: i } = lt(e), l = se();
  Mt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (l.value = Ie(ee(e.startDate)));
  });
  const c = (m) => Array.isArray(n.value) ? n.value.some((y) => Ie(y) === m) : n.value ? Ie(n.value) === m : !1, d = (m) => s.value.enabled && Array.isArray(n.value) ? $s(n.value, r.value, p(m)) : !1, u = oe(() => co(Kl(e.yearRange, e.reverseYears), (m) => {
    const y = c(m.value), _ = Zo(
      m.value,
      fo(i.value.minDate),
      fo(i.value.maxDate)
    ) || a.value.years.includes(m.value), P = d(m.value) && !y, W = Jl(o.value, m.value);
    return { active: y, disabled: _, isBetween: P, highlighted: W };
  })), p = (m) => mn(tn(/* @__PURE__ */ new Date()), m);
  return {
    groupedYears: u,
    modelValue: n,
    focusYear: l,
    setHoverValue: (m) => {
      r.value = mn(tn(/* @__PURE__ */ new Date()), m);
    },
    selectYear: (m) => {
      var y;
      if (t("update-month-year", { instance: 0, year: m }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((y = n.value) == null ? void 0 : y.map((_) => Ie(_))).includes(m) ? n.value = n.value.filter((_) => Ie(_) !== m) : n.value.push(mn(Wt(ee()), m))) : n.value = [mn(Wt(ee()), m)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = eu(n, p(m), t), Fs(n.value, t, e.autoApply, e.modelAuto);
      n.value = p(m), t("auto-apply");
    }
  };
}, ZE = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...un
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
    const r = n, o = e, { groupedYears: a, modelValue: s, focusYear: i, selectYear: l, setHoverValue: c } = JE(o, r), { defaultedConfig: d } = lt(o);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: l
    }) }), (u, p) => (V(), X("div", null, [
      u.$slots["month-year"] ? ge(u.$slots, "month-year", bt(xt({ key: 0 }, {
        years: D(a),
        selectYear: D(l)
      }))) : (V(), Re(ma, {
        key: 1,
        items: D(a),
        "is-last": u.autoApply && !D(d).keepActionRow,
        height: D(d).modeHeight,
        config: u.config,
        "no-overlay-focus": !!(u.noOverlayFocus || u.textInput),
        "focus-value": D(i),
        type: "year",
        "use-relative": "",
        onSelected: D(l),
        onHoverValue: D(c)
      }, It({ _: 2 }, [
        u.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Le(({ item: m }) => [
            ge(u.$slots, "year-overlay-value", {
              text: m.text,
              value: m.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), eO = {
  key: 0,
  class: "dp__time_input"
}, tO = ["aria-label", "onKeydown", "onClick"], nO = /* @__PURE__ */ De("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), rO = /* @__PURE__ */ De("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), oO = ["aria-label", "disabled", "onKeydown", "onClick"], aO = ["aria-label", "onKeydown", "onClick"], sO = /* @__PURE__ */ De("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), iO = /* @__PURE__ */ De("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), lO = { key: 0 }, uO = ["aria-label", "onKeydown"], cO = /* @__PURE__ */ St({
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
    ...un
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
    const r = n, o = e, { setTimePickerElements: a, setTimePickerBackRef: s } = ur(), { defaultedAriaLabels: i, defaultedTransitions: l, defaultedFilters: c, defaultedConfig: d, defaultedRange: u } = lt(o), { transitionName: p, showTransition: m } = pa(l), y = Rn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), _ = se("AM"), P = se(null), W = se([]);
    Mt(() => {
      r("mounted");
    });
    const q = (I) => et(/* @__PURE__ */ new Date(), {
      hours: I.hours,
      minutes: I.minutes,
      seconds: o.enableSeconds ? I.seconds : 0,
      milliseconds: 0
    }), w = oe(
      () => (I) => O(I, o[I]) || N(I, o[I])
    ), g = oe(() => ({ hours: o.hours, minutes: o.minutes, seconds: o.seconds })), N = (I, we) => u.value.enabled && !u.value.disableTimeRangeValidation ? !o.validateTime(I, we) : !1, C = (I, we) => {
      if (u.value.enabled && !u.value.disableTimeRangeValidation) {
        const Pe = we ? +o[`${I}Increment`] : -+o[`${I}Increment`], S = o[I] + Pe;
        return !o.validateTime(I, S);
      }
      return !1;
    }, b = oe(() => (I) => !he(+o[I] + +o[`${I}Increment`], I) || C(I, !0)), R = oe(() => (I) => !he(+o[I] - +o[`${I}Increment`], I) || C(I, !1)), j = (I, we) => mp(et(ee(), I), we), B = (I, we) => Q1(et(ee(), I), we), x = oe(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !o.timePickerInline,
        dp__time_col_reg_block: !o.enableSeconds && o.is24 && !o.timePickerInline,
        dp__time_col_reg_inline: !o.enableSeconds && o.is24 && o.timePickerInline,
        dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
        dp__time_col_sec: o.enableSeconds && o.is24,
        dp__time_col_sec_with_button: o.enableSeconds && !o.is24
      })
    ), M = oe(() => {
      const I = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return o.enableSeconds ? I.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : I;
    }), Y = oe(() => M.value.filter((I) => !I.separator)), U = oe(() => (I) => {
      if (I === "hours") {
        const we = z(+o.hours);
        return { text: we < 10 ? `0${we}` : `${we}`, value: we };
      }
      return { text: o[I] < 10 ? `0${o[I]}` : `${o[I]}`, value: o[I] };
    }), O = (I, we) => {
      var Pe;
      if (!o.disabledTimesConfig)
        return !1;
      const S = o.disabledTimesConfig(o.order, I === "hours" ? we : void 0);
      return S[I] ? !!((Pe = S[I]) != null && Pe.includes(we)) : !0;
    }, A = (I) => {
      const we = o.is24 ? 24 : 12, Pe = I === "hours" ? we : 60, S = +o[`${I}GridIncrement`], le = I === "hours" && !o.is24 ? S : 0, v = [];
      for (let E = le; E < Pe; E += S)
        v.push({ value: E, text: E < 10 ? `0${E}` : `${E}` });
      return I === "hours" && !o.is24 && v.push({ value: 0, text: "12" }), co(v, (E) => ({ active: !1, disabled: c.value.times[I].includes(E.value) || !he(E.value, I) || O(I, E.value) || N(I, E.value) }));
    }, H = (I) => I >= 0 ? I : 59, K = (I) => I >= 0 ? I : 23, he = (I, we) => {
      const Pe = o.minTime ? q(ii(o.minTime)) : null, S = o.maxTime ? q(ii(o.maxTime)) : null, le = q(
        ii(
          g.value,
          we,
          we === "minutes" || we === "seconds" ? H(I) : K(I)
        )
      );
      return Pe && S ? (Jo(le, S) || Zr(le, S)) && (Xo(le, Pe) || Zr(le, Pe)) : Pe ? Xo(le, Pe) || Zr(le, Pe) : S ? Jo(le, S) || Zr(le, S) : !0;
    }, ne = (I) => o[`no${I[0].toUpperCase() + I.slice(1)}Overlay`], h = (I) => {
      ne(I) || (y[I] = !y[I], y[I] || r("overlay-closed"));
    }, f = (I) => I === "hours" ? on : I === "minutes" ? _n : lo, k = (I, we = !0) => {
      const Pe = we ? j : B, S = we ? +o[`${I}Increment`] : -+o[`${I}Increment`];
      he(+o[I] + S, I) && r(
        `update:${I}`,
        f(I)(Pe({ [I]: +o[I] }, { [I]: +o[`${I}Increment`] }))
      );
    }, z = (I) => o.is24 ? I : (I >= 12 ? _.value = "PM" : _.value = "AM", Z1(I)), pe = () => {
      _.value === "PM" ? (_.value = "AM", r("update:hours", o.hours - 12)) : (_.value = "PM", r("update:hours", o.hours + 12)), r("am-pm-change", _.value);
    }, F = (I) => {
      y[I] = !0;
    }, Me = (I, we, Pe) => {
      if (I && o.arrowNavigation) {
        Array.isArray(W.value[we]) ? W.value[we][Pe] = I : W.value[we] = [I];
        const S = W.value.reduce(
          (le, v) => v.map((E, L) => [...le[L] || [], v[L]]),
          []
        );
        s(o.closeTimePickerBtn), P.value && (S[1] = S[1].concat(P.value)), a(S, o.order);
      }
    }, Fe = (I, we) => (h(I), I === "hours" && !o.is24 ? r(`update:${I}`, _.value === "PM" ? we + 12 : we) : r(`update:${I}`, we));
    return t({ openChildCmp: F }), (I, we) => {
      var Pe;
      return I.disabled ? ae("", !0) : (V(), X("div", eO, [
        (V(!0), X(Oe, null, Ze(M.value, (S, le) => {
          var v, E, L;
          return V(), X("div", {
            key: le,
            class: je(x.value)
          }, [
            S.separator ? (V(), X(Oe, { key: 0 }, [
              sn(" : ")
            ], 64)) : (V(), X(Oe, { key: 1 }, [
              De("button", {
                ref_for: !0,
                ref: (T) => Me(T, le, 0),
                type: "button",
                class: je({
                  dp__btn: !0,
                  dp__inc_dec_button: !I.timePickerInline,
                  dp__inc_dec_button_inline: I.timePickerInline,
                  dp__tp_inline_btn_top: I.timePickerInline,
                  dp__inc_dec_button_disabled: b.value(S.type)
                }),
                "aria-label": (v = D(i)) == null ? void 0 : v.incrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  Ce(Xe((T) => k(S.type), ["prevent"]), ["enter"]),
                  Ce(Xe((T) => k(S.type), ["prevent"]), ["space"])
                ],
                onClick: (T) => k(S.type)
              }, [
                o.timePickerInline ? (V(), X(Oe, { key: 1 }, [
                  nO,
                  rO
                ], 64)) : (V(), X(Oe, { key: 0 }, [
                  I.$slots["arrow-up"] ? ge(I.$slots, "arrow-up", { key: 0 }) : ae("", !0),
                  I.$slots["arrow-up"] ? ae("", !0) : (V(), Re(D(Gl), { key: 1 }))
                ], 64))
              ], 42, tO),
              De("button", {
                ref_for: !0,
                ref: (T) => Me(T, le, 1),
                type: "button",
                "aria-label": (E = D(i)) == null ? void 0 : E.openTpOverlay(S.type),
                class: je({
                  dp__time_display: !0,
                  dp__time_display_block: !I.timePickerInline,
                  dp__time_display_inline: I.timePickerInline,
                  "dp--time-invalid": w.value(S.type),
                  "dp--time-overlay-btn": !w.value(S.type)
                }),
                disabled: ne(S.type),
                tabindex: "0",
                onKeydown: [
                  Ce(Xe((T) => h(S.type), ["prevent"]), ["enter"]),
                  Ce(Xe((T) => h(S.type), ["prevent"]), ["space"])
                ],
                onClick: (T) => h(S.type)
              }, [
                I.$slots[S.type] ? ge(I.$slots, S.type, {
                  key: 0,
                  text: U.value(S.type).text,
                  value: U.value(S.type).value
                }) : ae("", !0),
                I.$slots[S.type] ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
                  sn(ct(U.value(S.type).text), 1)
                ], 64))
              ], 42, oO),
              De("button", {
                ref_for: !0,
                ref: (T) => Me(T, le, 2),
                type: "button",
                class: je({
                  dp__btn: !0,
                  dp__inc_dec_button: !I.timePickerInline,
                  dp__inc_dec_button_inline: I.timePickerInline,
                  dp__tp_inline_btn_bottom: I.timePickerInline,
                  dp__inc_dec_button_disabled: R.value(S.type)
                }),
                "aria-label": (L = D(i)) == null ? void 0 : L.decrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  Ce(Xe((T) => k(S.type, !1), ["prevent"]), ["enter"]),
                  Ce(Xe((T) => k(S.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (T) => k(S.type, !1)
              }, [
                o.timePickerInline ? (V(), X(Oe, { key: 1 }, [
                  sO,
                  iO
                ], 64)) : (V(), X(Oe, { key: 0 }, [
                  I.$slots["arrow-down"] ? ge(I.$slots, "arrow-down", { key: 0 }) : ae("", !0),
                  I.$slots["arrow-down"] ? ae("", !0) : (V(), Re(D(zl), { key: 1 }))
                ], 64))
              ], 42, aO)
            ], 64))
          ], 2);
        }), 128)),
        I.is24 ? ae("", !0) : (V(), X("div", lO, [
          I.$slots["am-pm-button"] ? ge(I.$slots, "am-pm-button", {
            key: 0,
            toggle: pe,
            value: _.value
          }) : ae("", !0),
          I.$slots["am-pm-button"] ? ae("", !0) : (V(), X("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: P,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Pe = D(i)) == null ? void 0 : Pe.amPmButton,
            tabindex: "0",
            onClick: pe,
            onKeydown: [
              Ce(Xe(pe, ["prevent"]), ["enter"]),
              Ce(Xe(pe, ["prevent"]), ["space"])
            ]
          }, ct(_.value), 41, uO))
        ])),
        (V(!0), X(Oe, null, Ze(Y.value, (S, le) => (V(), Re(lr, {
          key: le,
          name: D(p)(y[S.type]),
          css: D(m)
        }, {
          default: Le(() => [
            y[S.type] ? (V(), Re(ma, {
              key: 0,
              items: A(S.type),
              "is-last": I.autoApply && !D(d).keepActionRow,
              "esc-close": I.escClose,
              type: S.type,
              "text-input": I.textInput,
              config: I.config,
              "arrow-navigation": I.arrowNavigation,
              "aria-labels": I.ariaLabels,
              onSelected: (v) => Fe(S.type, v),
              onToggle: (v) => h(S.type),
              onResetFlow: we[0] || (we[0] = (v) => I.$emit("reset-flow"))
            }, It({
              "button-icon": Le(() => [
                I.$slots["clock-icon"] ? ge(I.$slots, "clock-icon", { key: 0 }) : ae("", !0),
                I.$slots["clock-icon"] ? ae("", !0) : (V(), Re(hs(I.timePickerInline ? D(go) : D(ql)), { key: 1 }))
              ]),
              _: 2
            }, [
              I.$slots[`${S.type}-overlay-value`] ? {
                name: "item",
                fn: Le(({ item: v }) => [
                  ge(I.$slots, `${S.type}-overlay-value`, {
                    text: v.text,
                    value: v.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : ae("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), dO = { class: "dp--tp-wrap" }, fO = ["aria-label", "tabindex"], pO = ["tabindex"], hO = ["aria-label"], Xp = /* @__PURE__ */ St({
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
    ...un
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
    const r = n, o = e, { buildMatrix: a, setTimePicker: s } = ur(), i = jr(), { defaultedTransitions: l, defaultedAriaLabels: c, defaultedTextInput: d, defaultedConfig: u, defaultedRange: p } = lt(o), { transitionName: m, showTransition: y } = pa(l), { hideNavigationButtons: _ } = Rs(), P = se(null), W = se(null), q = se([]), w = se(null);
    Mt(() => {
      r("mount"), !o.timePicker && o.arrowNavigation ? a([Et(P.value)], "time") : s(!0, o.timePicker);
    });
    const g = oe(() => p.value.enabled && o.modelAuto ? Vp(o.internalModelValue) : !0), N = se(!1), C = (A) => ({
      hours: Array.isArray(o.hours) ? o.hours[A] : o.hours,
      minutes: Array.isArray(o.minutes) ? o.minutes[A] : o.minutes,
      seconds: Array.isArray(o.seconds) ? o.seconds[A] : o.seconds
    }), b = oe(() => {
      const A = [];
      if (p.value.enabled)
        for (let H = 0; H < 2; H++)
          A.push(C(H));
      else
        A.push(C(0));
      return A;
    }), R = (A, H = !1, K = "") => {
      H || r("reset-flow"), N.value = A, r(A ? "overlay-opened" : "overlay-closed"), o.arrowNavigation && s(A), Kt(() => {
        K !== "" && q.value[0] && q.value[0].openChildCmp(K);
      });
    }, j = oe(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: o.autoApply && !u.value.keepActionRow
    })), B = Yt(i, "timePicker"), x = (A, H, K) => p.value.enabled ? H === 0 ? [A, b.value[1][K]] : [b.value[0][K], A] : A, M = (A) => {
      r("update:hours", A);
    }, Y = (A) => {
      r("update:minutes", A);
    }, U = (A) => {
      r("update:seconds", A);
    }, O = () => {
      if (w.value && !d.value.enabled && !o.noOverlayFocus) {
        const A = Ip(w.value);
        A && A.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: R }), (A, H) => {
      var K;
      return V(), X("div", dO, [
        !A.timePicker && !A.timePickerInline ? Zn((V(), X("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: P,
          type: "button",
          class: je(j.value),
          "aria-label": (K = D(c)) == null ? void 0 : K.openTimePicker,
          tabindex: A.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            H[0] || (H[0] = Ce((he) => R(!0), ["enter"])),
            H[1] || (H[1] = Ce((he) => R(!0), ["space"]))
          ],
          onClick: H[2] || (H[2] = (he) => R(!0))
        }, [
          A.$slots["clock-icon"] ? ge(A.$slots, "clock-icon", { key: 0 }) : ae("", !0),
          A.$slots["clock-icon"] ? ae("", !0) : (V(), Re(D(ql), { key: 1 }))
        ], 42, fO)), [
          [Io, !D(_)(A.hideNavigation, "time")]
        ]) : ae("", !0),
        Je(lr, {
          name: D(m)(N.value),
          css: D(y) && !A.timePickerInline
        }, {
          default: Le(() => {
            var he;
            return [
              N.value || A.timePicker || A.timePickerInline ? (V(), X("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: w,
                class: je({
                  dp__overlay: !A.timePickerInline,
                  "dp--overlay-absolute": !o.timePicker && !A.timePickerInline,
                  "dp--overlay-relative": o.timePicker
                }),
                style: Vt(A.timePicker ? { height: `${D(u).modeHeight}px` } : void 0),
                tabindex: A.timePickerInline ? void 0 : 0
              }, [
                De("div", {
                  class: je(
                    A.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  A.$slots["time-picker-overlay"] ? ge(A.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: M,
                    setMinutes: Y,
                    setSeconds: U
                  }) : ae("", !0),
                  A.$slots["time-picker-overlay"] ? ae("", !0) : (V(), X("div", {
                    key: 1,
                    class: je(A.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (V(!0), X(Oe, null, Ze(b.value, (ne, h) => Zn((V(), Re(cO, xt({ key: h }, {
                      ...A.$props,
                      order: h,
                      hours: ne.hours,
                      minutes: ne.minutes,
                      seconds: ne.seconds,
                      closeTimePickerBtn: W.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: h === 0 ? A.fixedStart : A.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: q,
                      "validate-time": (f, k) => e.validateTime(f, x(k, h, f)),
                      "onUpdate:hours": (f) => M(x(f, h, "hours")),
                      "onUpdate:minutes": (f) => Y(x(f, h, "minutes")),
                      "onUpdate:seconds": (f) => U(x(f, h, "seconds")),
                      onMounted: O,
                      onOverlayClosed: O,
                      onAmPmChange: H[3] || (H[3] = (f) => A.$emit("am-pm-change", f))
                    }), It({ _: 2 }, [
                      Ze(D(B), (f, k) => ({
                        name: f,
                        fn: Le((z) => [
                          ge(A.$slots, f, bt(Ct(z)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Io, h === 0 ? !0 : g.value]
                    ])), 128))
                  ], 2)),
                  !A.timePicker && !A.timePickerInline ? Zn((V(), X("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: W,
                    type: "button",
                    class: je(j.value),
                    "aria-label": (he = D(c)) == null ? void 0 : he.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      H[4] || (H[4] = Ce((ne) => R(!1), ["enter"])),
                      H[5] || (H[5] = Ce((ne) => R(!1), ["space"]))
                    ],
                    onClick: H[6] || (H[6] = (ne) => R(!1))
                  }, [
                    A.$slots["calendar-icon"] ? ge(A.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                    A.$slots["calendar-icon"] ? ae("", !0) : (V(), Re(D(go), { key: 1 }))
                  ], 42, hO)), [
                    [Io, !D(_)(A.hideNavigation, "time")]
                  ]) : ae("", !0)
                ], 2)
              ], 14, pO)) : ae("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Jp = (e, t, n, r) => {
  const { defaultedRange: o } = lt(e), a = (w, g) => Array.isArray(t[w]) ? t[w][g] : t[w], s = (w) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[w] : t.seconds : 0, i = (w, g) => w ? g !== void 0 ? nr(w, a("hours", g), a("minutes", g), s(g)) : nr(w, t.hours, t.minutes, s()) : Yl(ee(), s(g)), l = (w, g) => {
    t[w] = g;
  }, c = oe(() => e.modelAuto && o.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : o.value.enabled), d = (w, g) => {
    const N = Object.fromEntries(
      Object.keys(t).map((C) => C === w ? [C, g] : [C, t[C]].slice())
    );
    if (c.value && !o.value.disableTimeRangeValidation) {
      const C = (R) => n.value ? nr(
        n.value[R],
        N.hours[R],
        N.minutes[R],
        N.seconds[R]
      ) : null, b = (R) => Hl(n.value[R], 0);
      return !(Ye(C(0), C(1)) && (Xo(C(0), b(1)) || Jo(C(1), b(0))));
    }
    return !0;
  }, u = (w, g) => {
    d(w, g) && (l(w, g), r && r());
  }, p = (w) => {
    u("hours", w);
  }, m = (w) => {
    u("minutes", w);
  }, y = (w) => {
    u("seconds", w);
  }, _ = (w, g, N, C) => {
    g && p(w), !g && !N && m(w), N && y(w), n.value && C(n.value);
  }, P = (w) => {
    if (w) {
      const g = Array.isArray(w), N = g ? [+w[0].hours, +w[1].hours] : +w.hours, C = g ? [+w[0].minutes, +w[1].minutes] : +w.minutes, b = g ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
      l("hours", N), l("minutes", C), e.enableSeconds && l("seconds", b);
    }
  }, W = (w, g) => {
    const N = {
      hours: Array.isArray(t.hours) ? t.hours[w] : t.hours,
      disabledArr: []
    };
    return (g || g === 0) && (N.hours = g), Array.isArray(e.disabledTimes) && (N.disabledArr = o.value.enabled && Array.isArray(e.disabledTimes[w]) ? e.disabledTimes[w] : e.disabledTimes), N;
  }, q = oe(() => (w, g) => {
    var N;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: C, hours: b } = W(w, g), R = C.filter((j) => +j.hours === b);
      return ((N = R[0]) == null ? void 0 : N.minutes) === "*" ? { hours: [b], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (R == null ? void 0 : R.map((j) => +j.minutes)) ?? [],
        seconds: (R == null ? void 0 : R.map((j) => j.seconds ? +j.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: l,
    updateHours: p,
    updateMinutes: m,
    updateSeconds: y,
    getSetDateTime: i,
    updateTimeValues: _,
    getSecondsValue: s,
    assignStartTime: P,
    validateTime: d,
    disabledTimesConfig: q
  };
}, mO = (e, t) => {
  const { modelValue: n, time: r } = ha(e, t), { defaultedStartTime: o, defaultedRange: a } = lt(e), { updateTimeValues: s, getSetDateTime: i, setTime: l, assignStartTime: c, disabledTimesConfig: d, validateTime: u } = Jp(e, r, n), p = (w) => {
    const { hours: g, minutes: N, seconds: C } = w;
    return { hours: +g, minutes: +N, seconds: C ? +C : 0 };
  }, m = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const g = p(e.startTime[0]), N = p(e.startTime[1]);
        return [et(ee(), g), et(ee(), N)];
      }
      const w = p(e.startTime);
      return et(ee(), w);
    }
    return a.value.enabled ? [null, null] : null;
  }, y = () => {
    if (a.value.enabled) {
      const [w, g] = m();
      n.value = [i(w, 0), i(g, 1)];
    } else
      n.value = i(m());
  }, _ = (w) => Array.isArray(w) ? [Cr(ee(w[0])), Cr(ee(w[1]))] : [Cr(w ?? ee())], P = (w, g, N) => {
    l("hours", w), l("minutes", g), l("seconds", e.enableSeconds ? N : 0);
  }, W = () => {
    const [w, g] = _(n.value);
    return a.value.enabled ? P(
      [w.hours, g.hours],
      [w.minutes, g.minutes],
      [w.seconds, g.seconds]
    ) : P(w.hours, w.minutes, w.seconds);
  };
  Mt(() => {
    if (!e.shadow)
      return c(o.value), n.value ? W() : y();
  });
  const q = () => {
    Array.isArray(n.value) ? n.value = n.value.map((w, g) => w && i(w, g)) : n.value = i(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: d,
    updateTime: (w, g = !0, N = !1) => {
      s(w, g, N, q);
    },
    validateTime: u
  };
}, vO = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...un
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e, a = jr(), s = Yt(a, "timePicker"), { time: i, modelValue: l, disabledTimesConfig: c, updateTime: d, validateTime: u } = mO(o, r);
    return t({ getSidebarProps: () => ({
      modelValue: l,
      time: i,
      updateTime: d
    }) }), (p, m) => (V(), Re(Is, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Le(() => [
        Je(Xp, xt(p.$props, {
          hours: D(i).hours,
          minutes: D(i).minutes,
          seconds: D(i).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": D(c),
          "validate-time": D(u),
          "onUpdate:hours": m[0] || (m[0] = (y) => D(d)(y)),
          "onUpdate:minutes": m[1] || (m[1] = (y) => D(d)(y, !1)),
          "onUpdate:seconds": m[2] || (m[2] = (y) => D(d)(y, !1, !0)),
          onAmPmChange: m[3] || (m[3] = (y) => p.$emit("am-pm-change", y))
        }), It({ _: 2 }, [
          Ze(D(s), (y, _) => ({
            name: y,
            fn: Le((P) => [
              ge(p.$slots, y, bt(Ct(P)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), yO = { class: "dp__month_year_row" }, gO = ["aria-label", "onClick", "onKeydown"], bO = /* @__PURE__ */ St({
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
    ...un
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e, {
      defaultedTransitions: a,
      defaultedAriaLabels: s,
      defaultedMultiCalendars: i,
      defaultedFilters: l,
      defaultedConfig: c,
      defaultedHighlight: d,
      propDates: u
    } = lt(o), { transitionName: p, showTransition: m } = pa(a), { buildMatrix: y } = ur(), { handleMonthYearChange: _, isDisabled: P, updateMonthYear: W } = ME(o, r), { showLeftIcon: q, showRightIcon: w } = Rs(), g = se(!1), N = se(!1), C = se([null, null, null, null]);
    Mt(() => {
      r("mount");
    });
    const b = (h) => ({
      get: () => o[h],
      set: (f) => {
        const k = h === Qt.month ? Qt.year : Qt.month;
        r("update-month-year", { [h]: f, [k]: o[k] }), h === Qt.month ? O(!0) : A(!0);
      }
    }), R = oe(b(Qt.month)), j = oe(b(Qt.year)), B = oe(() => (h) => ({
      month: o.month,
      year: o.year,
      items: h === Qt.month ? o.months : o.years,
      instance: o.instance,
      updateMonthYear: W,
      toggle: h === Qt.month ? O : A
    })), x = oe(() => o.months.find((f) => f.value === o.month) || { text: "", value: 0 }), M = oe(() => co(o.months, (h) => {
      const f = o.month === h.value, k = Zo(
        h.value,
        Fp(o.year, u.value.minDate),
        Lp(o.year, u.value.maxDate)
      ) || l.value.months.includes(h.value), z = Up(d.value, h.value, o.year);
      return { active: f, disabled: k, highlighted: z };
    })), Y = oe(() => co(o.years, (h) => {
      const f = o.year === h.value, k = Zo(
        h.value,
        fo(u.value.minDate),
        fo(u.value.maxDate)
      ) || l.value.years.includes(h.value), z = Jl(d.value, h.value);
      return { active: f, disabled: k, highlighted: z };
    })), U = (h, f) => {
      f !== void 0 ? h.value = f : h.value = !h.value, h.value || r("overlay-closed");
    }, O = (h = !1, f) => {
      H(h), U(g, f);
    }, A = (h = !1, f) => {
      H(h), U(N, f);
    }, H = (h) => {
      h || r("reset-flow");
    }, K = (h, f) => {
      o.arrowNavigation && (C.value[f] = Et(h), y(C.value, "monthYear"));
    }, he = oe(() => {
      var h, f;
      return [
        {
          type: Qt.month,
          index: 1,
          toggle: O,
          modelValue: R.value,
          updateModelValue: (k) => R.value = k,
          text: x.value.text,
          showSelectionGrid: g.value,
          items: M.value,
          ariaLabel: (h = s.value) == null ? void 0 : h.openMonthsOverlay
        },
        {
          type: Qt.year,
          index: 2,
          toggle: A,
          modelValue: j.value,
          updateModelValue: (k) => j.value = k,
          text: o.year,
          showSelectionGrid: N.value,
          items: Y.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), ne = oe(() => o.disableYearSelect ? [he.value[0]] : o.yearFirst ? [...he.value].reverse() : he.value);
    return t({
      toggleMonthPicker: O,
      toggleYearPicker: A,
      handleMonthYearChange: _
    }), (h, f) => {
      var k, z, pe;
      return V(), X("div", yO, [
        h.$slots["month-year"] ? ge(h.$slots, "month-year", bt(xt({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: D(W), handleMonthYearChange: D(_), instance: e.instance }))) : (V(), X(Oe, { key: 1 }, [
          D(q)(D(i), e.instance) && !h.vertical ? (V(), Re(jo, {
            key: 0,
            "aria-label": (k = D(s)) == null ? void 0 : k.prevMonth,
            disabled: D(P)(!1),
            onActivate: f[0] || (f[0] = (F) => D(_)(!1, !0)),
            onSetRef: f[1] || (f[1] = (F) => K(F, 0))
          }, {
            default: Le(() => [
              h.$slots["arrow-left"] ? ge(h.$slots, "arrow-left", { key: 0 }) : ae("", !0),
              h.$slots["arrow-left"] ? ae("", !0) : (V(), Re(D(Ul), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : ae("", !0),
          De("div", {
            class: je(["dp__month_year_wrap", {
              dp__year_disable_select: h.disableYearSelect
            }])
          }, [
            (V(!0), X(Oe, null, Ze(ne.value, (F, Me) => (V(), X(Oe, {
              key: F.type
            }, [
              De("button", {
                ref_for: !0,
                ref: (Fe) => K(Fe, Me + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": F.ariaLabel,
                onClick: F.toggle,
                onKeydown: [
                  Ce(Xe(F.toggle, ["prevent"]), ["enter"]),
                  Ce(Xe(F.toggle, ["prevent"]), ["space"])
                ]
              }, [
                h.$slots[F.type] ? ge(h.$slots, F.type, {
                  key: 0,
                  text: F.text,
                  value: o[F.type]
                }) : ae("", !0),
                h.$slots[F.type] ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
                  sn(ct(F.text), 1)
                ], 64))
              ], 40, gO),
              Je(lr, {
                name: D(p)(F.showSelectionGrid),
                css: D(m)
              }, {
                default: Le(() => [
                  F.showSelectionGrid ? (V(), Re(ma, {
                    key: 0,
                    items: F.items,
                    "arrow-navigation": h.arrowNavigation,
                    "hide-navigation": h.hideNavigation,
                    "is-last": h.autoApply && !D(c).keepActionRow,
                    "skip-button-ref": !1,
                    config: h.config,
                    type: F.type,
                    "header-refs": [],
                    "esc-close": h.escClose,
                    "menu-wrap-ref": h.menuWrapRef,
                    "text-input": h.textInput,
                    "aria-labels": h.ariaLabels,
                    onSelected: F.updateModelValue,
                    onToggle: F.toggle
                  }, It({
                    "button-icon": Le(() => [
                      h.$slots["calendar-icon"] ? ge(h.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                      h.$slots["calendar-icon"] ? ae("", !0) : (V(), Re(D(go), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    h.$slots[`${F.type}-overlay-value`] ? {
                      name: "item",
                      fn: Le(({ item: Fe }) => [
                        ge(h.$slots, `${F.type}-overlay-value`, {
                          text: Fe.text,
                          value: Fe.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    h.$slots[`${F.type}-overlay`] ? {
                      name: "overlay",
                      fn: Le(() => [
                        ge(h.$slots, `${F.type}-overlay`, bt(Ct(B.value(F.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    h.$slots[`${F.type}-overlay-header`] ? {
                      name: "header",
                      fn: Le(() => [
                        ge(h.$slots, `${F.type}-overlay-header`, {
                          toggle: F.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : ae("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          D(q)(D(i), e.instance) && h.vertical ? (V(), Re(jo, {
            key: 1,
            "aria-label": (z = D(s)) == null ? void 0 : z.prevMonth,
            disabled: D(P)(!1),
            onActivate: f[2] || (f[2] = (F) => D(_)(!1, !0))
          }, {
            default: Le(() => [
              h.$slots["arrow-up"] ? ge(h.$slots, "arrow-up", { key: 0 }) : ae("", !0),
              h.$slots["arrow-up"] ? ae("", !0) : (V(), Re(D(Gl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : ae("", !0),
          D(w)(D(i), e.instance) ? (V(), Re(jo, {
            key: 2,
            ref: "rightIcon",
            disabled: D(P)(!0),
            "aria-label": (pe = D(s)) == null ? void 0 : pe.nextMonth,
            onActivate: f[3] || (f[3] = (F) => D(_)(!0, !0)),
            onSetRef: f[4] || (f[4] = (F) => K(F, h.disableYearSelect ? 2 : 3))
          }, {
            default: Le(() => [
              h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? ge(h.$slots, h.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : ae("", !0),
              h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? ae("", !0) : (V(), Re(hs(h.vertical ? D(zl) : D(Wl)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : ae("", !0)
        ], 64))
      ]);
    };
  }
}), _O = ["aria-label"], wO = {
  class: "dp__calendar_header",
  role: "row"
}, EO = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, OO = ["aria-label"], NO = /* @__PURE__ */ De("div", { class: "dp__calendar_header_separator" }, null, -1), xO = ["aria-label"], DO = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, TO = { class: "dp__cell_inner" }, kO = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], SO = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...un
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
    const r = n, o = e, { buildMultiLevelMatrix: a } = ur(), {
      defaultedTransitions: s,
      defaultedConfig: i,
      defaultedAriaLabels: l,
      defaultedMultiCalendars: c,
      defaultedWeekNumbers: d
    } = lt(o), u = se(null), p = se({
      bottom: "",
      left: "",
      transform: ""
    }), m = se([]), y = se(null), _ = se(!0), P = se(""), W = se({ startX: 0, endX: 0, startY: 0, endY: 0 }), q = se([]), w = se({ left: "50%" }), g = oe(() => o.calendar ? o.calendar(o.mappedDates) : o.mappedDates), N = oe(() => o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames(o.locale, +o.weekStart) : J1(o.formatLocale, o.locale, +o.weekStart));
    Mt(() => {
      r("mount", { cmp: "calendar", refs: m }), i.value.noSwipe || y.value && (y.value.addEventListener("touchstart", A, { passive: !1 }), y.value.addEventListener("touchend", H, { passive: !1 }), y.value.addEventListener("touchmove", K, { passive: !1 })), o.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", h, { passive: !1 });
    });
    const C = (F) => F ? o.vertical ? "vNext" : "next" : o.vertical ? "vPrevious" : "previous", b = (F, Me) => {
      if (o.transitions) {
        const Fe = Wt(An(ee(), o.month, o.year));
        P.value = pt(Wt(An(ee(), F, Me)), Fe) ? s.value[C(!0)] : s.value[C(!1)], _.value = !1, Kt(() => {
          _.value = !0;
        });
      }
    }, R = oe(
      () => ({
        [o.calendarClassName]: !!o.calendarClassName
      })
    ), j = oe(() => (F) => {
      const Me = eE(F);
      return {
        dp__marker_dot: Me.type === "dot",
        dp__marker_line: Me.type === "line"
      };
    }), B = oe(() => (F) => Ye(F, u.value)), x = oe(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && o.instance !== 0
    })), M = oe(() => (F) => o.hideOffsetDates ? F.current : !0), Y = (F) => bn(F, "yyyy-MM-dd"), U = async (F, Me, Fe) => {
      var I, we;
      if (r("set-hover-date", F), (we = (I = F.marker) == null ? void 0 : I.tooltip) != null && we.length) {
        const Pe = Et(m.value[Me][Fe]);
        if (Pe) {
          const { width: S, height: le } = Pe.getBoundingClientRect();
          u.value = F.value;
          let v = { left: `${S / 2}px` }, E = -50;
          if (await Kt(), q.value[0]) {
            const { left: L, width: T } = q.value[0].getBoundingClientRect();
            L < 0 && (v = { left: "0" }, E = 0, w.value.left = `${S / 2}px`), window.innerWidth < L + T && (v = { right: "0" }, E = 0, w.value.left = `${T - S / 2}px`);
          }
          p.value = {
            bottom: `${le}px`,
            ...v,
            transform: `translateX(${E}%)`
          }, r("tooltip-open", F.marker);
        }
      }
    }, O = (F) => {
      u.value && (u.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", F.marker));
    }, A = (F) => {
      W.value.startX = F.changedTouches[0].screenX, W.value.startY = F.changedTouches[0].screenY;
    }, H = (F) => {
      W.value.endX = F.changedTouches[0].screenX, W.value.endY = F.changedTouches[0].screenY, he();
    }, K = (F) => {
      o.vertical && !o.inline && F.preventDefault();
    }, he = () => {
      const F = o.vertical ? "Y" : "X";
      Math.abs(W.value[`start${F}`] - W.value[`end${F}`]) > 10 && r("handle-swipe", W.value[`start${F}`] > W.value[`end${F}`] ? "right" : "left");
    }, ne = (F, Me, Fe) => {
      F && (Array.isArray(m.value[Me]) ? m.value[Me][Fe] = F : m.value[Me] = [F]), o.arrowNavigation && a(m.value, "calendar");
    }, h = (F) => {
      o.monthChangeOnScroll && (F.preventDefault(), r("handle-scroll", F));
    }, f = (F) => d.value.type === "local" ? Ll(F.value, { weekStartsOn: +o.weekStart }) : d.value.type === "iso" ? Il(F.value) : typeof d.value.type == "function" ? d.value.type(F.value) : "", k = (F) => {
      const Me = F[0];
      return d.value.hideOnOffsetDates ? F.some((Fe) => Fe.current) ? f(Me) : "" : f(Me);
    }, z = (F, Me) => {
      tr(F, i.value), r("select-date", Me);
    }, pe = (F) => {
      tr(F, i.value);
    };
    return t({ triggerTransition: b }), (F, Me) => {
      var Fe;
      return V(), X("div", {
        class: je(x.value)
      }, [
        De("div", {
          ref_key: "calendarWrapRef",
          ref: y,
          role: "grid",
          class: je(R.value),
          "aria-label": (Fe = D(l)) == null ? void 0 : Fe.calendarWrap
        }, [
          De("div", wO, [
            F.weekNumbers ? (V(), X("div", EO, ct(F.weekNumName), 1)) : ae("", !0),
            (V(!0), X(Oe, null, Ze(N.value, (I, we) => {
              var Pe, S;
              return V(), X("div", {
                key: we,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (S = (Pe = D(l)) == null ? void 0 : Pe.weekDay) == null ? void 0 : S.call(Pe, we)
              }, [
                F.$slots["calendar-header"] ? ge(F.$slots, "calendar-header", {
                  key: 0,
                  day: I,
                  index: we
                }) : ae("", !0),
                F.$slots["calendar-header"] ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
                  sn(ct(I), 1)
                ], 64))
              ], 8, OO);
            }), 128))
          ]),
          NO,
          Je(lr, {
            name: P.value,
            css: !!F.transitions
          }, {
            default: Le(() => {
              var I;
              return [
                _.value ? (V(), X("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((I = D(l)) == null ? void 0 : I.calendarDays) || void 0
                }, [
                  (V(!0), X(Oe, null, Ze(g.value, (we, Pe) => (V(), X("div", {
                    key: Pe,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    F.weekNumbers ? (V(), X("div", DO, [
                      De("div", TO, ct(k(we.days)), 1)
                    ])) : ae("", !0),
                    (V(!0), X(Oe, null, Ze(we.days, (S, le) => {
                      var v, E, L;
                      return V(), X("div", {
                        id: Y(S.value),
                        ref_for: !0,
                        ref: (T) => ne(T, Pe, le),
                        key: le + Pe,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (S.classData.dp__active_date || S.classData.dp__range_start || S.classData.dp__range_start) ?? void 0,
                        "aria-disabled": S.classData.dp__cell_disabled || void 0,
                        "aria-label": (E = (v = D(l)) == null ? void 0 : v.day) == null ? void 0 : E.call(v, S),
                        tabindex: "0",
                        onClick: Xe((T) => z(T, S), ["prevent"]),
                        onKeydown: [
                          Ce((T) => F.$emit("select-date", S), ["enter"]),
                          Ce((T) => F.$emit("handle-space", S), ["space"])
                        ],
                        onMouseenter: (T) => U(S, Pe, le),
                        onMouseleave: (T) => O(S)
                      }, [
                        De("div", {
                          class: je(["dp__cell_inner", S.classData])
                        }, [
                          F.$slots.day && M.value(S) ? ge(F.$slots, "day", {
                            key: 0,
                            day: +S.text,
                            date: S.value
                          }) : ae("", !0),
                          F.$slots.day ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
                            sn(ct(S.text), 1)
                          ], 64)),
                          S.marker && M.value(S) ? (V(), X(Oe, { key: 2 }, [
                            F.$slots.marker ? ge(F.$slots, "marker", {
                              key: 0,
                              marker: S.marker,
                              day: +S.text,
                              date: S.value
                            }) : (V(), X("div", {
                              key: 1,
                              class: je(j.value(S.marker)),
                              style: Vt(S.marker.color ? { backgroundColor: S.marker.color } : {})
                            }, null, 6))
                          ], 64)) : ae("", !0),
                          B.value(S.value) ? (V(), X("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: q,
                            class: "dp__marker_tooltip",
                            style: Vt(p.value)
                          }, [
                            (L = S.marker) != null && L.tooltip ? (V(), X("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: pe
                            }, [
                              (V(!0), X(Oe, null, Ze(S.marker.tooltip, (T, Q) => (V(), X("div", {
                                key: Q,
                                class: "dp__tooltip_text"
                              }, [
                                F.$slots["marker-tooltip"] ? ge(F.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: T,
                                  day: S.value
                                }) : ae("", !0),
                                F.$slots["marker-tooltip"] ? ae("", !0) : (V(), X(Oe, { key: 1 }, [
                                  De("div", {
                                    class: "dp__tooltip_mark",
                                    style: Vt(T.color ? { backgroundColor: T.color } : {})
                                  }, null, 4),
                                  De("div", null, ct(T.text), 1)
                                ], 64))
                              ]))), 128)),
                              De("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Vt(w.value)
                              }, null, 4)
                            ])) : ae("", !0)
                          ], 4)) : ae("", !0)
                        ], 2)
                      ], 40, kO);
                    }), 128))
                  ]))), 128))
                ], 8, xO)) : ae("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, _O)
      ], 2);
    };
  }
}), Yc = (e) => Array.isArray(e), MO = (e, t, n, r) => {
  const o = se([]), a = se(/* @__PURE__ */ new Date()), { modelValue: s, calendars: i, time: l } = ha(e, t), { defaultedMultiCalendars: c, defaultedStartTime: d, defaultedRange: u, defaultedTz: p, propDates: m } = lt(e), { validateMonthYearInRange: y, isDisabled: _, isDateRangeAllowed: P, checkMinMaxRange: W } = cr(e), { updateTimeValues: q, getSetDateTime: w, setTime: g, assignStartTime: N, validateTime: C, disabledTimesConfig: b } = Jp(e, l, s, r), R = oe(
    () => ($) => i.value[$] ? i.value[$].month : 0
  ), j = oe(
    () => ($) => i.value[$] ? i.value[$].year : 0
  ), B = ($, re, _e) => {
    var Ae, Z;
    i.value[$] || (i.value[$] = { month: 0, year: 0 }), i.value[$].month = Fc(re) ? (Ae = i.value[$]) == null ? void 0 : Ae.month : re, i.value[$].year = Fc(_e) ? (Z = i.value[$]) == null ? void 0 : Z.year : _e;
  }, x = () => {
    e.autoApply && t("select-date");
  };
  _t(
    s,
    ($, re) => {
      JSON.stringify($) !== JSON.stringify(re) && U();
    },
    { deep: !0 }
  ), Mt(() => {
    e.shadow || (s.value || (pe(), d.value && N(d.value)), U(!0), e.focusStartDate && e.startDate && pe());
  });
  const M = oe(() => {
    var $;
    return ($ = e.flow) != null && $.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), Y = () => {
    e.autoApply && M.value && t("auto-apply");
  }, U = ($ = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (o.value = s.value, h($)) : H(s.value, $);
    if (c.value.count && $ && !e.startDate)
      return A(ee(), $);
  }, O = () => Array.isArray(s.value) && u.value.enabled ? He(s.value[0]) === He(s.value[1] ?? s.value[0]) : !1, A = ($, re = !1) => {
    if ((!c.value.count || !c.value.static || re) && B(0, He($), Ie($)), c.value.count && (!c.value.solo || !s.value || O()))
      for (let _e = 1; _e < c.value.count; _e++) {
        const Ae = et(ee(), { month: R.value(_e - 1), year: j.value(_e - 1) }), Z = mp(Ae, { months: 1 });
        i.value[_e] = { month: He(Z), year: Ie(Z) };
      }
  }, H = ($, re) => {
    A($), g("hours", on($)), g("minutes", _n($)), g("seconds", lo($)), c.value.count && re && z();
  }, K = ($) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const re = He($[0]), _e = He($[1]);
      return Math.abs(_e - re) < c.value.count ? 0 : 1;
    }
    return 1;
  }, he = ($, re) => {
    $[1] && u.value.showLastInRange ? A($[K($)], re) : A($[0], re);
    const _e = (Ae, Z) => [
      Ae($[0]),
      $[1] ? Ae($[1]) : l[Z][1]
    ];
    g("hours", _e(on, "hours")), g("minutes", _e(_n, "minutes")), g("seconds", _e(lo, "seconds"));
  }, ne = ($, re) => {
    if ((u.value.enabled || e.weekPicker) && !e.multiDates)
      return he($, re);
    if (e.multiDates && re) {
      const _e = $[$.length - 1];
      return H(_e, re);
    }
  }, h = ($) => {
    const re = s.value;
    ne(re, $), c.value.count && c.value.solo && z();
  }, f = ($, re) => {
    const _e = et(ee(), { month: R.value(re), year: j.value(re) }), Ae = $ < 0 ? rn(_e, 1) : uo(_e, 1);
    y(He(Ae), Ie(Ae), $ < 0, e.preventMinMaxNavigation) && (B(re, He(Ae), Ie(Ae)), t("update-month-year", { instance: re, month: He(Ae), year: Ie(Ae) }), c.value.count && !c.value.solo && k(re), n());
  }, k = ($) => {
    for (let re = $ - 1; re >= 0; re--) {
      const _e = uo(et(ee(), { month: R.value(re + 1), year: j.value(re + 1) }), 1);
      B(re, He(_e), Ie(_e));
    }
    for (let re = $ + 1; re <= c.value.count - 1; re++) {
      const _e = rn(et(ee(), { month: R.value(re - 1), year: j.value(re - 1) }), 1);
      B(re, He(_e), Ie(_e));
    }
  }, z = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const $ = ee(
        ee(s.value[1] ? s.value[1] : rn(s.value[0], 1))
      ), [re, _e] = [He(s.value[0]), Ie(s.value[0])], [Ae, Z] = [He(s.value[1]), Ie(s.value[1])];
      (re !== Ae || re === Ae && _e !== Z) && c.value.solo && B(1, He($), Ie($));
    } else
      s.value && !Array.isArray(s.value) && (B(0, He(s.value), Ie(s.value)), A(ee()));
  }, pe = () => {
    e.startDate && (B(0, He(ee(e.startDate)), Ie(ee(e.startDate))), c.value.count && k(0));
  }, F = ($, re) => {
    if (e.monthChangeOnScroll) {
      const _e = (/* @__PURE__ */ new Date()).getTime() - a.value.getTime(), Ae = Math.abs($.deltaY);
      let Z = 500;
      Ae > 1 && (Z = 100), Ae > 100 && (Z = 0), _e > Z && (a.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -$.deltaY : $.deltaY, re));
    }
  }, Me = ($, re, _e = !1) => {
    e.monthChangeOnArrows && e.vertical === _e && Fe($, re);
  }, Fe = ($, re) => {
    f($ === "right" ? -1 : 1, re);
  }, I = ($) => {
    if (m.value.markers)
      return os($.value, m.value.markers);
  }, we = ($, re) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [$ == 0, !0];
      case "fair":
        return [$ == 0 || re > $, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Pe = ($, re, _e, Ae) => {
    if (e.sixWeeks && $.length < 6) {
      const Z = 6 - $.length, Ne = (re.getDay() + 7 - Ae) % 7, ve = 6 - (_e.getDay() + 7 - Ae) % 7, [vt, jt] = we(Ne, ve);
      for (let dr = 1; dr <= Z; dr++)
        if (jt ? !!(dr % 2) == vt : vt) {
          const In = $[0].days[0], Ls = S(en(In.value, -7), He(re));
          $.unshift({ days: Ls });
        } else {
          const In = $[$.length - 1], Ls = In.days[In.days.length - 1], Zp = S(en(Ls.value, 1), He(re));
          $.push({ days: Zp });
        }
    }
    return $;
  }, S = ($, re) => {
    const _e = ee($), Ae = [];
    for (let Z = 0; Z < 7; Z++) {
      const Ne = en(_e, Z), ve = He(Ne) !== re;
      Ae.push({
        text: e.hideOffsetDates && ve ? "" : Ne.getDate(),
        value: Ne,
        current: !ve,
        classData: {}
      });
    }
    return Ae;
  }, le = ($, re) => {
    const _e = [], Ae = new Date(re, $), Z = new Date(re, $ + 1, 0), Ne = e.weekStart, ve = xn(Ae, { weekStartsOn: Ne }), vt = (jt) => {
      const dr = S(jt, $);
      if (_e.push({ days: dr }), !_e[_e.length - 1].days.some(
        (In) => Ye(Wt(In.value), Wt(Z))
      )) {
        const In = en(jt, 7);
        vt(In);
      }
    };
    return vt(ve), Pe(_e, Ae, Z, Ne);
  }, v = ($) => {
    const re = nr(ee($.value), l.hours, l.minutes, ie());
    t("date-update", re), e.multiDates ? Zl(re, s, e.multiDatesLimit) : s.value = re, r(), Kt().then(() => {
      Y();
    });
  }, E = ($) => u.value.noDisabledRange ? Bp(o.value[0], $).some((re) => _(re)) : !1, L = () => {
    o.value = s.value ? s.value.slice() : [], o.value.length === 2 && !(u.value.fixedStart || u.value.fixedEnd) && (o.value = []);
  }, T = ($, re) => {
    const _e = [
      ee($.value),
      en(ee($.value), +u.value.autoRange)
    ];
    P(_e) ? (re && Q($.value), o.value = _e) : t("invalid-date", $.value);
  }, Q = ($) => {
    const re = He(ee($)), _e = Ie(ee($));
    if (B(0, re, _e), c.value.count > 0)
      for (let Ae = 1; Ae < c.value.count; Ae++) {
        const Z = lE(
          et(ee($), { year: R.value(Ae - 1), month: j.value(Ae - 1) })
        );
        B(Ae, Z.month, Z.year);
      }
  }, te = ($) => {
    if (E($.value) || !W($.value, s.value, u.value.fixedStart ? 0 : 1))
      return t("invalid-date", $.value);
    o.value = Kp(ee($.value), s, t, u);
  }, fe = ($, re) => {
    if (L(), u.value.autoRange)
      return T($, re);
    if (u.value.fixedStart || u.value.fixedEnd)
      return te($);
    o.value[0] ? W(ee($.value), s.value) && !E($.value) ? ut(ee($.value), ee(o.value[0])) ? (o.value.unshift(ee($.value)), t("range-end", o.value[0])) : (o.value[1] = ee($.value), t("range-end", o.value[1])) : (e.autoApply && t("auto-apply-invalid", $.value), t("invalid-date", $.value)) : (o.value[0] = ee($.value), t("range-start", o.value[0]));
  }, ie = ($ = !0) => e.enableSeconds ? Array.isArray(l.seconds) ? $ ? l.seconds[0] : l.seconds[1] : l.seconds : 0, ce = ($) => {
    o.value[$] = nr(
      o.value[$],
      l.hours[$],
      l.minutes[$],
      ie($ !== 1)
    );
  }, J = () => {
    var $, re;
    o.value[0] && o.value[1] && +(($ = o.value) == null ? void 0 : $[0]) > +((re = o.value) == null ? void 0 : re[1]) && (o.value.reverse(), t("range-start", o.value[0]), t("range-end", o.value[1]));
  }, de = () => {
    o.value.length && (o.value[0] && !o.value[1] ? ce(0) : (ce(0), ce(1), r()), J(), s.value = o.value.slice(), Fs(o.value, t, e.autoApply, e.modelAuto));
  }, Ee = ($, re = !1) => {
    if (_($.value) || !$.current && e.hideOffsetDates)
      return t("invalid-date", $.value);
    if (!u.value.enabled)
      return v($);
    Yc(l.hours) && Yc(l.minutes) && !e.multiDates && (fe($, re), de());
  }, be = ($, re) => {
    var _e;
    B($, re.month, re.year), c.value.count && !c.value.solo && k($), t("update-month-year", { instance: $, month: re.month, year: re.year }), n(c.value.solo ? $ : void 0);
    const Ae = (_e = e.flow) != null && _e.length ? e.flow[e.flowStep] : void 0;
    !re.fromNav && (Ae === dn.month || Ae === dn.year) && r();
  }, Te = ($, re) => {
    zp({
      value: $,
      modelValue: s,
      range: u.value.enabled,
      timezone: re ? void 0 : p.value.timezone
    }), x(), e.multiCalendars && Kt().then(() => U(!0));
  }, Ve = () => {
    u.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = ut(ee(), s.value[0]) ? [ee(), s.value[0]] : [s.value[0], ee()] : s.value = [ee()] : s.value = ee(), x();
  }, Ue = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const $ = Qe();
        s.value[s.value.length - 1] = w($);
      } else
        s.value = s.value.map(($, re) => $ && w($, re));
    else
      s.value = w(s.value);
    t("time-update");
  }, Qe = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: i,
    modelValue: s,
    month: R,
    year: j,
    time: l,
    disabledTimesConfig: b,
    validateTime: C,
    getCalendarDays: le,
    getMarker: I,
    handleScroll: F,
    handleSwipe: Fe,
    handleArrow: Me,
    selectDate: Ee,
    updateMonthYear: be,
    presetDate: Te,
    selectCurrentDate: Ve,
    updateTime: ($, re = !0, _e = !1) => {
      q($, re, _e, Ue);
    }
  };
}, PO = { key: 0 }, AO = /* @__PURE__ */ St({
  __name: "DatePicker",
  props: {
    ...un
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
    const r = n, o = e, {
      calendars: a,
      month: s,
      year: i,
      modelValue: l,
      time: c,
      disabledTimesConfig: d,
      validateTime: u,
      getCalendarDays: p,
      getMarker: m,
      handleArrow: y,
      handleScroll: _,
      handleSwipe: P,
      selectDate: W,
      updateMonthYear: q,
      presetDate: w,
      selectCurrentDate: g,
      updateTime: N
    } = MO(o, r, he, ne), C = jr(), { setHoverDate: b, getDayClassData: R, clearHoverDate: j } = $E(l, o), { defaultedMultiCalendars: B } = lt(o), x = se([]), M = se([]), Y = se(null), U = Yt(C, "calendar"), O = Yt(C, "monthYear"), A = Yt(C, "timePicker"), H = (f) => {
      o.shadow || r("mount", f);
    };
    _t(
      a,
      () => {
        o.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const K = oe(() => (f) => p(s.value(f), i.value(f)).map((k) => ({
      ...k,
      days: k.days.map((z) => (z.marker = m(z), z.classData = R(z), z))
    })));
    function he(f) {
      var k;
      f || f === 0 ? (k = M.value[f]) == null || k.triggerTransition(s.value(f), i.value(f)) : M.value.forEach((z, pe) => z.triggerTransition(s.value(pe), i.value(pe)));
    }
    function ne() {
      r("update-flow-step");
    }
    const h = (f, k = !1) => {
      W(f, k), o.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: j,
      presetDate: w,
      selectCurrentDate: g,
      toggleMonthPicker: (f, k, z = 0) => {
        var pe;
        (pe = x.value[z]) == null || pe.toggleMonthPicker(f, k);
      },
      toggleYearPicker: (f, k, z = 0) => {
        var pe;
        (pe = x.value[z]) == null || pe.toggleYearPicker(f, k);
      },
      toggleTimePicker: (f, k, z) => {
        var pe;
        (pe = Y.value) == null || pe.toggleTimePicker(f, k, z);
      },
      handleArrow: y,
      updateMonthYear: q,
      getSidebarProps: () => ({
        modelValue: l,
        month: s,
        year: i,
        time: c,
        updateTime: N,
        updateMonthYear: q,
        selectDate: W,
        presetDate: w
      })
    }), (f, k) => (V(), X(Oe, null, [
      Je(Is, {
        "multi-calendars": D(B).count,
        collapse: f.collapse
      }, {
        default: Le(({ instance: z, index: pe }) => [
          f.disableMonthYearSelect ? ae("", !0) : (V(), Re(bO, xt({
            key: 0,
            ref: (F) => {
              F && (x.value[pe] = F);
            },
            months: D(Rp)(f.formatLocale, f.locale, f.monthNameFormat),
            years: D(Kl)(f.yearRange, f.reverseYears),
            month: D(s)(z),
            year: D(i)(z),
            instance: z
          }, f.$props, {
            onMount: k[0] || (k[0] = (F) => H(D($r).header)),
            onResetFlow: k[1] || (k[1] = (F) => f.$emit("reset-flow")),
            onUpdateMonthYear: (F) => D(q)(z, F),
            onOverlayClosed: k[2] || (k[2] = (F) => f.$emit("focus-menu"))
          }), It({ _: 2 }, [
            Ze(D(O), (F, Me) => ({
              name: F,
              fn: Le((Fe) => [
                ge(f.$slots, F, bt(Ct(Fe)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Je(SO, xt({
            ref: (F) => {
              F && (M.value[pe] = F);
            },
            "mapped-dates": K.value(z),
            month: D(s)(z),
            year: D(i)(z),
            instance: z
          }, f.$props, {
            onSelectDate: (F) => D(W)(F, z !== 1),
            onHandleSpace: (F) => h(F, z !== 1),
            onSetHoverDate: k[3] || (k[3] = (F) => D(b)(F)),
            onHandleScroll: (F) => D(_)(F, z),
            onHandleSwipe: (F) => D(P)(F, z),
            onMount: k[4] || (k[4] = (F) => H(D($r).calendar)),
            onResetFlow: k[5] || (k[5] = (F) => f.$emit("reset-flow")),
            onTooltipOpen: k[6] || (k[6] = (F) => f.$emit("tooltip-open", F)),
            onTooltipClose: k[7] || (k[7] = (F) => f.$emit("tooltip-close", F))
          }), It({ _: 2 }, [
            Ze(D(U), (F, Me) => ({
              name: F,
              fn: Le((Fe) => [
                ge(f.$slots, F, bt(Ct({ ...Fe })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (V(), X("div", PO, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", bt(xt({ key: 0 }, { time: D(c), updateTime: D(N) }))) : (V(), Re(Xp, xt({
          key: 1,
          ref_key: "timePickerRef",
          ref: Y
        }, f.$props, {
          hours: D(c).hours,
          minutes: D(c).minutes,
          seconds: D(c).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": D(d),
          "validate-time": D(u),
          onMount: k[8] || (k[8] = (z) => H(D($r).timePicker)),
          "onUpdate:hours": k[9] || (k[9] = (z) => D(N)(z)),
          "onUpdate:minutes": k[10] || (k[10] = (z) => D(N)(z, !1)),
          "onUpdate:seconds": k[11] || (k[11] = (z) => D(N)(z, !1, !0)),
          onResetFlow: k[12] || (k[12] = (z) => f.$emit("reset-flow")),
          onOverlayClosed: k[13] || (k[13] = (z) => f.$emit("time-picker-close")),
          onOverlayOpened: k[14] || (k[14] = (z) => f.$emit("time-picker-open", z)),
          onAmPmChange: k[15] || (k[15] = (z) => f.$emit("am-pm-change", z))
        }), It({ _: 2 }, [
          Ze(D(A), (z, pe) => ({
            name: z,
            fn: Le((F) => [
              ge(f.$slots, z, bt(Ct(F)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : ae("", !0)
    ], 64));
  }
}), CO = (e, t) => {
  const n = se(), { defaultedMultiCalendars: r, defaultedConfig: o, defaultedHighlight: a, defaultedRange: s, propDates: i } = lt(e), { modelValue: l, year: c, month: d, calendars: u } = ha(e, t), { isDisabled: p } = cr(e), { selectYear: m, groupedYears: y, showYearPicker: _, isDisabled: P, toggleYearPicker: W, handleYearSelect: q, handleYear: w } = Qp({
    modelValue: l,
    multiCalendars: r,
    highlight: a,
    calendars: u,
    propDates: i,
    month: d,
    year: c,
    props: e,
    emit: t
  }), g = (Y, U) => [Y, U].map((O) => bn(O, "MMMM", { locale: e.formatLocale })).join("-"), N = oe(() => (Y) => l.value ? Array.isArray(l.value) ? l.value.some((U) => Rc(Y, U)) : Rc(l.value, Y) : !1), C = (Y) => {
    if (s.value.enabled) {
      if (Array.isArray(l.value)) {
        const U = Ye(Y, l.value[0]) || Ye(Y, l.value[1]);
        return $s(l.value, n.value, Y) && !U;
      }
      return !1;
    }
    return !1;
  }, b = (Y, U) => Y.quarter === Sc(U) && Y.year === Ie(U), R = (Y) => typeof a.value == "function" ? a.value({ quarter: Sc(Y), year: Ie(Y) }) : !!a.value.quarters.find((U) => b(U, Y)), j = oe(() => (Y) => {
    const U = et(/* @__PURE__ */ new Date(), { year: c.value(Y) });
    return rw({
      start: wp(U),
      end: ow(U)
    }).map((O) => {
      const A = Nr(O), H = Mc(O), K = p(O), he = C(A), ne = R(A);
      return {
        text: g(A, H),
        value: A,
        active: N.value(A),
        highlighted: ne,
        disabled: K,
        isBetween: he
      };
    });
  }), B = (Y) => {
    Zl(Y, l, e.multiDatesLimit), t("auto-apply", !0);
  }, x = (Y) => {
    l.value = eu(l, Y, t), Fs(l.value, t, e.autoApply, e.modelAuto);
  }, M = (Y) => {
    l.value = Y, t("auto-apply");
  };
  return {
    defaultedConfig: o,
    defaultedMultiCalendars: r,
    groupedYears: y,
    year: c,
    isDisabled: P,
    quarters: j,
    showYearPicker: _,
    modelValue: l,
    setHoverDate: (Y) => {
      n.value = Y;
    },
    selectYear: m,
    selectQuarter: (Y, U, O) => {
      if (!O)
        return u.value[U].month = He(Mc(Y)), e.multiDates ? B(Y) : s.value.enabled ? x(Y) : M(Y);
    },
    toggleYearPicker: W,
    handleYearSelect: q,
    handleYear: w
  };
}, $O = { class: "dp--quarter-items" }, RO = ["disabled", "onClick", "onMouseover"], VO = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...un
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
    const r = n, o = e, a = jr(), s = Yt(a, "yearMode"), {
      defaultedMultiCalendars: i,
      defaultedConfig: l,
      groupedYears: c,
      year: d,
      isDisabled: u,
      quarters: p,
      modelValue: m,
      showYearPicker: y,
      setHoverDate: _,
      selectQuarter: P,
      toggleYearPicker: W,
      handleYearSelect: q,
      handleYear: w
    } = CO(o, r);
    return t({ getSidebarProps: () => ({
      modelValue: m,
      year: d,
      selectQuarter: P,
      handleYearSelect: q,
      handleYear: w
    }) }), (g, N) => (V(), Re(Is, {
      "multi-calendars": D(i).count,
      collapse: g.collapse,
      stretch: ""
    }, {
      default: Le(({ instance: C }) => [
        De("div", {
          class: "dp-quarter-picker-wrap",
          style: Vt({ minHeight: `${D(l).modeHeight}px` })
        }, [
          De("div", null, [
            Je(Gp, xt(g.$props, {
              items: D(c)(C),
              instance: C,
              "show-year-picker": D(y)[C],
              year: D(d)(C),
              "is-disabled": (b) => D(u)(C, b),
              onHandleYear: (b) => D(w)(C, b),
              onYearSelect: (b) => D(q)(b, C),
              onToggleYearPicker: (b) => D(W)(C, b == null ? void 0 : b.flow, b == null ? void 0 : b.show)
            }), It({ _: 2 }, [
              Ze(D(s), (b, R) => ({
                name: b,
                fn: Le((j) => [
                  ge(g.$slots, b, bt(Ct(j)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          De("div", $O, [
            (V(!0), X(Oe, null, Ze(D(p)(C), (b, R) => (V(), X("div", { key: R }, [
              De("button", {
                type: "button",
                class: je(["dp--qr-btn", {
                  "dp--qr-btn-active": b.active,
                  "dp--qr-btn-between": b.isBetween,
                  "dp--qr-btn-disabled": b.disabled,
                  "dp--highlighted": b.highlighted
                }]),
                disabled: b.disabled,
                onClick: (j) => D(P)(b.value, C, b.disabled),
                onMouseover: (j) => D(_)(b.value)
              }, [
                g.$slots.quarter ? ge(g.$slots, "quarter", {
                  key: 0,
                  value: b.value,
                  text: b.text
                }) : (V(), X(Oe, { key: 1 }, [
                  sn(ct(b.text), 1)
                ], 64))
              ], 42, RO)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), IO = ["id", "aria-label"], FO = {
  key: 0,
  class: "dp--menu-load-container"
}, LO = /* @__PURE__ */ De("span", { class: "dp--menu-loader" }, null, -1), BO = [
  LO
], jO = {
  key: 0,
  class: "dp__sidebar_left"
}, HO = ["onClick", "onKeydown"], YO = {
  key: 2,
  class: "dp__sidebar_right"
}, UO = {
  key: 3,
  class: "dp__action_extra"
}, Uc = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Vs,
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
    const r = n, o = e, a = se(null), s = oe(() => {
      const { openOnTop: S, ...le } = o;
      return {
        ...le,
        flowStep: R.value,
        collapse: o.collapse,
        noOverlayFocus: o.noOverlayFocus,
        menuWrapRef: a.value
      };
    }), { setMenuFocused: i, setShiftKey: l, control: c } = Wp(), d = jr(), { defaultedTextInput: u, defaultedInline: p, defaultedConfig: m } = lt(o), y = se(null), _ = se(0), P = se(null), W = se(!1), q = se(null);
    Mt(() => {
      if (!o.shadow) {
        W.value = !0, w(), window.addEventListener("resize", w);
        const S = Et(a);
        if (S && !u.value.enabled && !p.value.enabled && (i(!0), Y()), S) {
          const le = (v) => {
            m.value.allowPreventDefault && v.preventDefault(), tr(v, m.value, !0);
          };
          S.addEventListener("pointerdown", le), S.addEventListener("mousedown", le);
        }
      }
    }), po(() => {
      window.removeEventListener("resize", w);
    });
    const w = () => {
      const S = Et(P);
      S && (_.value = S.getBoundingClientRect().width);
    }, { arrowRight: g, arrowLeft: N, arrowDown: C, arrowUp: b } = ur(), { flowStep: R, updateFlowStep: j, childMount: B, resetFlow: x } = RE(o, r, q), M = oe(() => o.monthPicker ? XE : o.yearPicker ? ZE : o.timePicker ? vO : o.quarterPicker ? VO : AO), Y = () => {
      const S = Et(a);
      S && S.focus({ preventScroll: !0 });
    }, U = oe(() => {
      var S;
      return ((S = q.value) == null ? void 0 : S.getSidebarProps()) || {};
    }), O = () => {
      o.openOnTop && r("recalculate-position");
    }, A = Yt(d, "action"), H = oe(() => o.monthPicker || o.yearPicker ? Yt(d, "monthYear") : o.timePicker ? Yt(d, "timePicker") : Yt(d, "shared")), K = oe(() => o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), he = oe(() => ({
      dp__menu_disabled: o.disabled,
      dp__menu_readonly: o.readonly,
      "dp-menu-loading": o.loading
    })), ne = oe(
      () => ({
        dp__menu: !0,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [o.menuClassName]: !!o.menuClassName
      })
    ), h = (S) => {
      tr(S, m.value, !0);
    }, f = () => {
      o.escClose && r("close-picker");
    }, k = (S) => {
      if (o.arrowNavigation) {
        if (S === "up")
          return b();
        if (S === "down")
          return C();
        if (S === "left")
          return N();
        if (S === "right")
          return g();
      } else
        S === "left" || S === "up" ? Fe("handleArrow", "left", 0, S === "up") : Fe("handleArrow", "right", 0, S === "down");
    }, z = (S) => {
      l(S.shiftKey), !o.disableMonthYearSelect && S.code === "Tab" && S.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (S.preventDefault(), tr(S, m.value, !0), r("close-picker"));
    }, pe = () => {
      Y(), r("time-picker-close");
    }, F = (S) => {
      var le, v, E;
      (le = q.value) == null || le.toggleTimePicker(!1, !1), (v = q.value) == null || v.toggleMonthPicker(!1, !1, S), (E = q.value) == null || E.toggleYearPicker(!1, !1, S);
    }, Me = (S, le = 0) => {
      var v, E, L;
      return S === "month" ? (v = q.value) == null ? void 0 : v.toggleMonthPicker(!1, !0, le) : S === "year" ? (E = q.value) == null ? void 0 : E.toggleYearPicker(!1, !0, le) : S === "time" ? (L = q.value) == null ? void 0 : L.toggleTimePicker(!0, !1) : F(le);
    }, Fe = (S, ...le) => {
      var v, E;
      (v = q.value) != null && v[S] && ((E = q.value) == null || E[S](...le));
    }, I = () => {
      Fe("selectCurrentDate");
    }, we = (S, le) => {
      Fe("presetDate", S, le);
    }, Pe = () => {
      Fe("clearHoverDate");
    };
    return t({
      updateMonthYear: (S, le) => {
        Fe("updateMonthYear", S, le);
      },
      switchView: Me
    }), (S, le) => {
      var v, E, L;
      return V(), X("div", {
        id: S.uid ? `dp-menu-${S.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: a,
        tabindex: "0",
        role: "dialog",
        "aria-label": (v = S.ariaLabels) == null ? void 0 : v.menu,
        class: je(ne.value),
        onMouseleave: Pe,
        onClick: h,
        onKeydown: [
          Ce(f, ["esc"]),
          le[18] || (le[18] = Ce(Xe((T) => k("left"), ["prevent"]), ["left"])),
          le[19] || (le[19] = Ce(Xe((T) => k("up"), ["prevent"]), ["up"])),
          le[20] || (le[20] = Ce(Xe((T) => k("down"), ["prevent"]), ["down"])),
          le[21] || (le[21] = Ce(Xe((T) => k("right"), ["prevent"]), ["right"])),
          z
        ]
      }, [
        (S.disabled || S.readonly) && D(p).enabled || S.loading ? (V(), X("div", {
          key: 0,
          class: je(he.value)
        }, [
          S.loading ? (V(), X("div", FO, BO)) : ae("", !0)
        ], 2)) : ae("", !0),
        !D(p).enabled && !S.teleportCenter ? (V(), X("div", {
          key: 1,
          class: je(K.value)
        }, null, 2)) : ae("", !0),
        De("div", {
          ref_key: "innerMenuRef",
          ref: P,
          class: je({
            dp__menu_content_wrapper: ((E = S.presetDates) == null ? void 0 : E.length) || !!S.$slots["left-sidebar"] || !!S.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((L = S.presetDates) == null ? void 0 : L.length) || !!S.$slots["left-sidebar"] || !!S.$slots["right-sidebar"]
          }),
          style: Vt({ "--dp-menu-width": `${_.value}px` })
        }, [
          S.$slots["left-sidebar"] ? (V(), X("div", jO, [
            ge(S.$slots, "left-sidebar", bt(Ct(U.value)))
          ])) : ae("", !0),
          S.presetDates.length ? (V(), X("div", {
            key: 1,
            class: je({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (V(!0), X(Oe, null, Ze(S.presetDates, (T, Q) => (V(), X(Oe, { key: Q }, [
              T.slot ? ge(S.$slots, T.slot, {
                key: 0,
                presetDate: we,
                label: T.label,
                value: T.value
              }) : (V(), X("button", {
                key: 1,
                type: "button",
                style: Vt(T.style || {}),
                class: je(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Xe((te) => we(T.value, T.noTz), ["prevent"]),
                onKeydown: [
                  Ce(Xe((te) => we(T.value, T.noTz), ["prevent"]), ["enter"]),
                  Ce(Xe((te) => we(T.value, T.noTz), ["prevent"]), ["space"])
                ]
              }, ct(T.label), 47, HO))
            ], 64))), 128))
          ], 2)) : ae("", !0),
          De("div", {
            ref_key: "calendarWrapperRef",
            ref: y,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (V(), Re(hs(M.value), xt({
              ref_key: "dynCmpRef",
              ref: q
            }, s.value, {
              "flow-step": D(R),
              onMount: D(B),
              onUpdateFlowStep: D(j),
              onResetFlow: D(x),
              onFocusMenu: Y,
              onSelectDate: le[0] || (le[0] = (T) => S.$emit("select-date")),
              onDateUpdate: le[1] || (le[1] = (T) => S.$emit("date-update", T)),
              onTooltipOpen: le[2] || (le[2] = (T) => S.$emit("tooltip-open", T)),
              onTooltipClose: le[3] || (le[3] = (T) => S.$emit("tooltip-close", T)),
              onAutoApply: le[4] || (le[4] = (T) => S.$emit("auto-apply", T)),
              onRangeStart: le[5] || (le[5] = (T) => S.$emit("range-start", T)),
              onRangeEnd: le[6] || (le[6] = (T) => S.$emit("range-end", T)),
              onInvalidFixedRange: le[7] || (le[7] = (T) => S.$emit("invalid-fixed-range", T)),
              onTimeUpdate: le[8] || (le[8] = (T) => S.$emit("time-update")),
              onAmPmChange: le[9] || (le[9] = (T) => S.$emit("am-pm-change", T)),
              onTimePickerOpen: le[10] || (le[10] = (T) => S.$emit("time-picker-open", T)),
              onTimePickerClose: pe,
              onRecalculatePosition: O,
              onUpdateMonthYear: le[11] || (le[11] = (T) => S.$emit("update-month-year", T)),
              onAutoApplyInvalid: le[12] || (le[12] = (T) => S.$emit("auto-apply-invalid", T)),
              onInvalidDate: le[13] || (le[13] = (T) => S.$emit("invalid-date", T)),
              "onUpdate:internalModelValue": le[14] || (le[14] = (T) => S.$emit("update:internal-model-value", T))
            }), It({ _: 2 }, [
              Ze(H.value, (T, Q) => ({
                name: T,
                fn: Le((te) => [
                  ge(S.$slots, T, bt(Ct({ ...te })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          S.$slots["right-sidebar"] ? (V(), X("div", YO, [
            ge(S.$slots, "right-sidebar", bt(Ct(U.value)))
          ])) : ae("", !0),
          S.$slots["action-extra"] ? (V(), X("div", UO, [
            S.$slots["action-extra"] ? ge(S.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: I
            }) : ae("", !0)
          ])) : ae("", !0)
        ], 6),
        !S.autoApply || D(m).keepActionRow ? (V(), Re(HE, xt({
          key: 2,
          "menu-mount": W.value
        }, s.value, {
          "calendar-width": _.value,
          onClosePicker: le[15] || (le[15] = (T) => S.$emit("close-picker")),
          onSelectDate: le[16] || (le[16] = (T) => S.$emit("select-date")),
          onInvalidSelect: le[17] || (le[17] = (T) => S.$emit("invalid-select")),
          onSelectNow: I
        }), It({ _: 2 }, [
          Ze(D(A), (T, Q) => ({
            name: T,
            fn: Le((te) => [
              ge(S.$slots, T, bt(Ct({ ...te })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : ae("", !0)
      ], 42, IO);
    };
  }
}), WO = typeof window < "u" ? window : void 0, vi = () => {
}, qO = (e) => rl() ? (Jc(e), !0) : !1, GO = (e, t, n, r) => {
  if (!e)
    return vi;
  let o = vi;
  const a = _t(
    () => D(e),
    (i) => {
      o(), i && (i.addEventListener(t, n, r), o = () => {
        i.removeEventListener(t, n, r), o = vi;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    a(), o();
  };
  return qO(s), s;
}, zO = (e, t, n, r = {}) => {
  const { window: o = WO, event: a = "pointerdown" } = r;
  return o ? GO(o, a, (s) => {
    const i = Et(e), l = Et(t);
    !i || !l || i === s.target || s.composedPath().includes(i) || s.composedPath().includes(l) || n(s);
  }, { passive: !0 }) : void 0;
}, KO = /* @__PURE__ */ St({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Vs
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
    const r = n, o = e, a = jr(), s = se(!1), i = Sr(o, "modelValue"), l = Sr(o, "timezone"), c = se(null), d = se(null), u = se(null), p = se(!1), m = se(null), y = se(!1), _ = se(!1), P = se(!1), { setMenuFocused: W, setShiftKey: q } = Wp(), { clearArrowNav: w } = ur(), { validateDate: g, isValidTime: N } = cr(o), { defaultedTransitions: C, defaultedTextInput: b, defaultedInline: R, defaultedConfig: j, defaultedRange: B } = lt(o), { menuTransition: x, showTransition: M } = pa(C);
    Mt(() => {
      k(o.modelValue), Kt().then(() => {
        if (!R.value.enabled) {
          const Z = he(m.value);
          Z == null || Z.addEventListener("scroll", S), window == null || window.addEventListener("resize", le);
        }
      }), R.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", v), window == null || window.addEventListener("keydown", E);
    }), po(() => {
      if (!R.value.enabled) {
        const Z = he(m.value);
        Z == null || Z.removeEventListener("scroll", S), window == null || window.removeEventListener("resize", le);
      }
      window == null || window.removeEventListener("keyup", v), window == null || window.removeEventListener("keydown", E);
    });
    const Y = Yt(a, "all", o.presetDates), U = Yt(a, "input");
    _t(
      [i, l],
      () => {
        k(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: O, menuStyle: A, xCorrect: H, setMenuPosition: K, getScrollableParent: he, shadowRender: ne } = PE({
      menuRef: c,
      menuRefInner: d,
      inputRef: u,
      pickerWrapperRef: m,
      inline: R,
      emit: r,
      props: o,
      slots: a
    }), {
      inputValue: h,
      internalModelValue: f,
      parseExternalModelValue: k,
      emitModelValue: z,
      formatInputValue: pe,
      checkBeforeEmit: F
    } = SE(r, o, p), Me = oe(
      () => ({
        dp__main: !0,
        dp__theme_dark: o.dark,
        dp__theme_light: !o.dark,
        dp__flex_display: R.value.enabled,
        "dp--flex-display-collapsed": P.value,
        dp__flex_display_with_input: R.value.input
      })
    ), Fe = oe(() => o.dark ? "dp__theme_dark" : "dp__theme_light"), I = oe(() => ({
      to: typeof o.teleport == "boolean" ? "body" : o.teleport,
      disabled: !o.teleport || R.value.enabled
    })), we = oe(() => ({ class: "dp__outer_menu_wrap" })), Pe = oe(() => R.value.enabled && (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)), S = () => {
      s.value && (j.value.closeOnScroll ? de() : K());
    }, le = () => {
      var Z;
      s.value && K();
      const Ne = (Z = d.value) == null ? void 0 : Z.$el.getBoundingClientRect().width;
      P.value = document.body.offsetWidth <= Ne;
    }, v = (Z) => {
      Z.key === "Tab" && !R.value.enabled && !o.teleport && j.value.tabOutClosesMenu && (m.value.contains(document.activeElement) || de()), _.value = Z.shiftKey;
    }, E = (Z) => {
      _.value = Z.shiftKey;
    }, L = () => {
      !o.disabled && !o.readonly && (ne(Uc, o), K(!1), s.value = !0, s.value && r("open"), s.value || J(), k(o.modelValue));
    }, T = () => {
      var Z;
      h.value = "", J(), (Z = u.value) == null || Z.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), j.value.closeOnClearValue && de();
    }, Q = () => {
      const Z = f.value;
      return !Z || !Array.isArray(Z) && g(Z) ? !0 : Array.isArray(Z) ? o.multiDates || Z.length === 2 && g(Z[0]) && g(Z[1]) ? !0 : B.value.partialRange && !o.timePicker ? g(Z[0]) : !1 : !1;
    }, te = () => {
      F() && Q() ? (z(), de()) : r("invalid-select", f.value);
    }, fe = (Z) => {
      ie(), z(), j.value.closeOnAutoApply && !Z && de();
    }, ie = () => {
      u.value && b.value.enabled && u.value.setParsedDate(f.value);
    }, ce = (Z = !1) => {
      o.autoApply && N(f.value) && Q() && (B.value.enabled && Array.isArray(f.value) ? (B.value.partialRange || f.value.length === 2) && fe(Z) : fe(Z));
    }, J = () => {
      b.value.enabled || (f.value = null);
    }, de = () => {
      R.value.enabled || (s.value && (s.value = !1, H.value = !1, W(!1), q(!1), w(), r("closed"), h.value && k(i.value)), J(), r("blur"));
    }, Ee = (Z, Ne, ve = !1) => {
      if (!Z) {
        f.value = null;
        return;
      }
      const vt = Array.isArray(Z) ? !Z.some((dr) => !g(dr)) : g(Z), jt = N(Z);
      vt && jt && (f.value = Z, Ne && (y.value = ve, te(), r("text-submit")));
    }, be = () => {
      o.autoApply && N(f.value) && z(), ie();
    }, Te = () => s.value ? de() : L(), Ve = (Z) => {
      f.value = Z;
    }, Ue = () => {
      b.value.enabled && (p.value = !0, pe()), r("focus");
    }, Qe = () => {
      if (b.value.enabled && (p.value = !1, k(o.modelValue), y.value)) {
        const Z = rE(m.value, _.value);
        Z == null || Z.focus();
      }
      r("blur");
    }, $ = (Z) => {
      d.value && d.value.updateMonthYear(0, {
        month: Ic(Z.month),
        year: Ic(Z.year)
      });
    }, re = (Z) => {
      k(Z ?? o.modelValue);
    }, _e = (Z, Ne) => {
      var ve;
      (ve = d.value) == null || ve.switchView(Z, Ne);
    }, Ae = (Z) => j.value.onClickOutside ? j.value.onClickOutside(Z) : de();
    return zO(c, u, () => Ae(Q)), t({
      closeMenu: de,
      selectDate: te,
      clearValue: T,
      openMenu: L,
      onScroll: S,
      formatInputValue: pe,
      // exposed for testing purposes
      updateInternalModelValue: Ve,
      // modify internal modelValue
      setMonthYear: $,
      parseModel: re,
      switchView: _e,
      toggleMenu: Te
    }), (Z, Ne) => (V(), X("div", {
      ref_key: "pickerWrapperRef",
      ref: m,
      class: je(Me.value),
      "data-datepicker-instance": ""
    }, [
      Je(LE, xt({
        ref_key: "inputRef",
        ref: u,
        "input-value": D(h),
        "onUpdate:inputValue": Ne[0] || (Ne[0] = (ve) => rt(h) ? h.value = ve : null),
        "is-menu-open": s.value
      }, Z.$props, {
        onClear: T,
        onOpen: L,
        onSetInputDate: Ee,
        onSetEmptyDate: D(z),
        onSelectDate: te,
        onToggle: Te,
        onClose: de,
        onFocus: Ue,
        onBlur: Qe,
        onRealBlur: Ne[1] || (Ne[1] = (ve) => p.value = !1)
      }), It({ _: 2 }, [
        Ze(D(U), (ve, vt) => ({
          name: ve,
          fn: Le((jt) => [
            ge(Z.$slots, ve, bt(Ct(jt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (V(), Re(hs(Z.teleport ? Ov : "div"), bt(Ct(I.value)), {
        default: Le(() => [
          Je(lr, {
            name: D(x)(D(O)),
            css: D(M) && !D(R).enabled
          }, {
            default: Le(() => [
              s.value ? (V(), X("div", xt({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, we.value, {
                class: { "dp--menu-wrapper": !D(R).enabled },
                style: D(R).enabled ? void 0 : D(A)
              }), [
                Je(Uc, xt({
                  ref_key: "dpMenuRef",
                  ref: d
                }, Z.$props, {
                  "internal-model-value": D(f),
                  "onUpdate:internalModelValue": Ne[2] || (Ne[2] = (ve) => rt(f) ? f.value = ve : null),
                  class: { [Fe.value]: !0, "dp--menu-wrapper": Z.teleport },
                  "open-on-top": D(O),
                  "no-overlay-focus": Pe.value,
                  collapse: P.value,
                  onClosePicker: de,
                  onSelectDate: te,
                  onAutoApply: ce,
                  onTimeUpdate: be,
                  onFlowStep: Ne[3] || (Ne[3] = (ve) => Z.$emit("flow-step", ve)),
                  onUpdateMonthYear: Ne[4] || (Ne[4] = (ve) => Z.$emit("update-month-year", ve)),
                  onInvalidSelect: Ne[5] || (Ne[5] = (ve) => Z.$emit("invalid-select", D(f))),
                  onAutoApplyInvalid: Ne[6] || (Ne[6] = (ve) => Z.$emit("invalid-select", ve)),
                  onInvalidFixedRange: Ne[7] || (Ne[7] = (ve) => Z.$emit("invalid-fixed-range", ve)),
                  onRecalculatePosition: D(K),
                  onTooltipOpen: Ne[8] || (Ne[8] = (ve) => Z.$emit("tooltip-open", ve)),
                  onTooltipClose: Ne[9] || (Ne[9] = (ve) => Z.$emit("tooltip-close", ve)),
                  onTimePickerOpen: Ne[10] || (Ne[10] = (ve) => Z.$emit("time-picker-open", ve)),
                  onTimePickerClose: Ne[11] || (Ne[11] = (ve) => Z.$emit("time-picker-close", ve)),
                  onAmPmChange: Ne[12] || (Ne[12] = (ve) => Z.$emit("am-pm-change", ve)),
                  onRangeStart: Ne[13] || (Ne[13] = (ve) => Z.$emit("range-start", ve)),
                  onRangeEnd: Ne[14] || (Ne[14] = (ve) => Z.$emit("range-end", ve)),
                  onDateUpdate: Ne[15] || (Ne[15] = (ve) => Z.$emit("date-update", ve)),
                  onInvalidDate: Ne[16] || (Ne[16] = (ve) => Z.$emit("invalid-date", ve))
                }), It({ _: 2 }, [
                  Ze(D(Y), (ve, vt) => ({
                    name: ve,
                    fn: Le((jt) => [
                      ge(Z.$slots, ve, bt(Ct({ ...jt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : ae("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), tu = /* @__PURE__ */ (() => {
  const e = KO;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), QO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tu
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(QO).forEach(([e, t]) => {
  e !== "default" && (tu[e] = t);
});
const XO = { class: "input" }, JO = ["min", "max"], ZO = ["accept"], eN = ["disabled"], tN = ["value"], nN = { key: 5 }, rN = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ yl({
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
    const t = e, n = El(e, "modelValue");
    function r(u) {
      n.value = u;
    }
    const o = se(t.mode), a = oe(() => o.value.hasValues ? o.value.valuesNodes : []), s = () => a.value.length && a.value[0].type === la, i = () => a.value.length && a.value[0].type === ua, l = () => a.value.length && a.value[0].type === ca, c = () => a.value.length && a.value[0].type === Ts, d = () => a.value.length && a.value[0].type === Sl;
    return _t(
      () => t.mode,
      (u) => {
        console.log("watch.mode", u), o.value = u;
      }
    ), _t(a, (u, p) => {
      console.log(`values mode: ${o.value.id}, changed/oldVal:`, u, p);
    }), (u, p) => (V(), X("div", XO, [
      s() ? Zn((V(), X("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (m) => n.value = m),
        type: "text"
      }, null, 512)), [
        [qu, n.value]
      ]) : i() ? Zn((V(), X("input", {
        key: 1,
        class: "numberPicker",
        "onUpdate:modelValue": p[1] || (p[1] = (m) => n.value = m),
        type: "number",
        step: ".01",
        min: a.value[0].rangemin,
        max: a.value[0].rangemax
      }, null, 8, JO)), [
        [
          qu,
          n.value,
          void 0,
          { number: !0 }
        ]
      ]) : c() ? (V(), Re(D(tu), {
        key: 2,
        modelValue: n.value,
        "onUpdate:modelValue": p[2] || (p[2] = (m) => n.value = m),
        min: a.value[0].datemin,
        max: a.value[0].datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : l() ? (V(), X("input", {
        key: 3,
        type: "file",
        accept: a.value[0].fileExtension
      }, null, 8, ZO)) : d() ? Zn((V(), X("select", {
        key: 4,
        "onUpdate:modelValue": p[3] || (p[3] = (m) => n.value = m),
        disabled: a.value.length < 2,
        "on:update:modelValue": r
      }, [
        (V(!0), X(Oe, null, Ze(a.value, (m) => (V(), X("option", {
          key: m.id,
          value: m
        }, ct(m.name), 9, tN))), 128))
      ], 40, eN)), [
        [cf, n.value]
      ]) : (V(), X("span", nN, "No values!")),
      sn(" " + ct(" "))
    ]));
  }
}, oN = /* @__PURE__ */ Cs(rN, [["__scopeId", "data-v-4d6e64fe"]]), aN = { class: "inputsystem-panel" }, sN = { class: "input-mode-panel" }, iN = { class: "title" }, lN = { class: "value-selector" }, uN = {
  __name: "InputSystemPanel",
  props: /* @__PURE__ */ yl({
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
    function o(c, d) {
      return d.length > 1 || t(c) || n(c);
    }
    const a = Rl(), s = e, i = se(s.mode), l = El(e, "modelValue");
    return l.value = a.getSystemValue(s.subsystem, i.value), _t(l, async (c) => {
      a.setSystemValue(s.subsystem, c);
    }), _t(i, (c) => {
      console.log("watch_input: currentMode.set() mode:", c), l.value = a.getSystemValue(s.subsystem, c), console.log("currentMode.set() value:", l.value);
    }), _t(
      () => s.mode,
      (c) => {
        console.log("new props.mode:", c), i.value = c;
      }
    ), (c, d) => (V(), X("div", aN, [
      De("div", sN, [
        De("span", iN, ct(e.subsystem.label || e.subsystem.name), 1),
        De("span", lN, [
          o(e.subsystem, e.modes) ? (V(), Re(hp, {
            key: 0,
            class: "mode-selector",
            modelValue: i.value,
            "onUpdate:modelValue": d[0] || (d[0] = (u) => i.value = u),
            modes: e.modes
          }, null, 8, ["modelValue", "modes"])) : ae("", !0),
          r(e.subsystem) ? (V(), Re(oN, {
            key: 1,
            mode: i.value,
            modelValue: l.value,
            "onUpdate:modelValue": d[1] || (d[1] = (u) => l.value = u)
          }, null, 8, ["mode", "modelValue"])) : ae("", !0)
        ])
      ])
    ]));
  }
}, Wc = /* @__PURE__ */ Cs(uN, [["__scopeId", "data-v-61fdb9fe"]]), cN = {
  key: 0,
  class: "subsystem-panel"
}, dN = {
  key: 0,
  class: "title"
}, fN = {
  key: 1,
  class: "mode-selector"
}, pN = {
  __name: "SubSystemPanel",
  props: {
    system: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    function t(u) {
      return !u.hasRealValues && u.hasValues && u.currentMode.hasValues;
    }
    function n(u) {
      return !u.hasRealValues && !u.currentMode.hasValues && !u.currentMode.hasModes;
    }
    function r(u) {
      return !o(u);
      //!s0.hasRealValues && !(s1.hasRealValues || fakeParam(s1)) && !fakeParamWithNoValue(s0)
    }
    function o(u) {
      return u.hasRealValues || t(u) || n(u);
    }
    function a(u) {
      return !u.hasRealValues && (u.getValidModes().length > 1 || n(u));
    }
    function s(u) {
      return u.getValidModes().length > 0 && !u.hasRealValues;
    }
    const i = Rl(), d = se(e.system).value;
    return d.candidateMode = d.currentMode, oe(() => d.getValidModes()), _t(d.candidateMode, (u) => {
      var p, m;
      console.log(
        `watch.mode. mode ${(p = d.currentMode) == null ? void 0 : p.name}, newMode :${(m = d.candidateMode) == null ? void 0 : m.name}`
      ), d.candidateMode != null && d.candidateMode != d.currentMode && i.setValidMode(d, d.candidateMode);
    }), (u, p) => {
      const m = xm("SubSystemPanel", !0);
      return V(), X(Oe, null, [
        s(D(d)) ? (V(), X("div", cN, [
          D(d).label != "-" ? (V(), X("h3", dN, ct(D(d).label || D(d).name), 1)) : ae("", !0),
          a(D(d)) ? (V(), X("div", fN, [
            Je(hp, {
              modelValue: D(d).candidateMode,
              "onUpdate:modelValue": p[0] || (p[0] = (y) => D(d).candidateMode = y),
              modes: D(d).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : ae("", !0),
          (V(!0), X(Oe, null, Ze(D(d).getActiveSubnodes(), (y) => (V(), X(Oe, {
            key: y.id
          }, [
            r(y) ? (V(), Re(m, {
              key: 0,
              system: y
            }, null, 8, ["system"])) : ae("", !0),
            o(y) ? (V(), Re(Wc, {
              key: 1,
              subsystem: y,
              modes: y.getValidModes(),
              mode: y.currentMode
            }, null, 8, ["subsystem", "modes", "mode"])) : ae("", !0)
          ], 64))), 128))
        ])) : ae("", !0),
        o(D(d)) ? (V(), Re(Wc, {
          key: 1,
          subsystem: D(d),
          modes: D(d).getValidModes(),
          mode: D(d).currentMode
        }, null, 8, ["subsystem", "modes", "mode"])) : ae("", !0)
      ], 64);
    };
  }
}, hN = /* @__PURE__ */ Cs(pN, [["__scopeId", "data-v-c40e0eba"]]), mN = {
  key: 0,
  class: "panel"
}, vN = { class: "title" }, yN = {
  __name: "ConfigPanelView",
  props: {
    modelPath: {
      type: String
    }
  },
  setup(e) {
    const t = Rl(), n = oe(() => t.rootSubsystem), r = e;
    return r.modelPath && t.loadModelURL(r.modelPath), (o, a) => (V(), X("main", null, [
      n.value ? (V(), X("div", mN, [
        De("h2", vN, ct(n.value.name) + " Panel", 1),
        Je(hN, {
          system: n.value,
          isRoot: !0
        }, null, 8, ["system"])
      ])) : ae("", !0)
    ]));
  }
}, xN = /* @__PURE__ */ Cs(yN, [["__scopeId", "data-v-4ce21a6d"]]);
export {
  Re as A,
  sn as B,
  xN as C,
  ON as D,
  NN as E,
  Oe as F,
  ct as G,
  Cs as _,
  Yh as a,
  hf as b,
  oe as c,
  St as d,
  se as e,
  EN as f,
  sa as g,
  sf as h,
  $o as i,
  Rl as j,
  X as k,
  Zn as l,
  De as m,
  Kt as n,
  V as o,
  nv as p,
  ae as q,
  Rn as r,
  bN as s,
  _N as t,
  D as u,
  qu as v,
  _t as w,
  wN as x,
  Je as y,
  Le as z
};
//# sourceMappingURL=ConfigPanelView-BFlGSjV-.js.map
