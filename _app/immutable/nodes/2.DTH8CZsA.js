import {
    r as Ie,
    s as A,
    w as Ne,
    x as Se,
    y as Ee,
    z as Le,
    b as oe,
    n as M,
    A as ce,
    u as Te,
    o as De,
    d as re,
    B as Oe
} from "../chunks/scheduler.xpoOBZsC.js";
import {
    m as L,
    o as C,
    S as W,
    i as z,
    e as b,
    c as w,
    b as S,
    d as _,
    p as m,
    a as E,
    C as j,
    g as B,
    q as ee,
    j as g,
    s as T,
    t as G,
    l as U,
    h as D,
    f as Y,
    k as se,
    r as X,
    n as Z,
    v as O,
    w as P,
    x as R,
    y as V,
    D as te,
    E as Pe,
    F as Re,
    B as ue,
    G as fe,
    H as Ve
} from "../chunks/index.Dy8Pv0LY.js";

function Q(r) {
    return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r)
}

function Me(r, e) {
    r.d(1), e.delete(r.key)
}

function Ae(r, e) {
    L(r, 1, 1, () => {
        e.delete(r.key)
    })
}

function ie(r, e, t, l, o, n, s, i, c, f, p, d) {
    let a = r.length,
        u = n.length,
        $ = a;
    const k = {};
    for (; $--;) k[r[$].key] = $;
    const y = [],
        x = new Map,
        q = new Map,
        K = [];
    for ($ = u; $--;) {
        const h = d(o, n, $),
            v = t(h);
        let N = s.get(v);
        N ? K.push(() => N.p(h, e)) : (N = f(v, h), N.c()), x.set(v, y[$] = N), v in k && q.set(v, Math.abs($ - k[v]))
    }
    const H = new Set,
        J = new Set;

    function I(h) {
        C(h, 1), h.m(i, p), s.set(h.key, h), p = h.first, u--
    }
    for (; a && u;) {
        const h = y[u - 1],
            v = r[a - 1],
            N = h.key,
            F = v.key;
        h === v ? (p = h.first, a--, u--) : x.has(F) ? !s.has(N) || H.has(N) ? I(h) : J.has(F) ? a-- : q.get(N) > q.get(F) ? (J.add(N), I(h)) : (H.add(F), a--) : (c(v, s), a--)
    }
    for (; a--;) {
        const h = r[a];
        x.has(h.key) || c(h, s)
    }
    for (; u;) I(y[u - 1]);
    return Ie(K), y
}

function We(r) {
    let e, t, l, o;
    const n = r[3].default,
        s = Ne(n, r, r[2], null);
    return {
        c() {
            e = b("div"), s && s.c(), this.h()
        },
        l(i) {
            e = w(i, "DIV", {
                class: !0
            });
            var c = S(e);
            s && s.l(c), c.forEach(_), this.h()
        },
        h() {
            m(e, "class", "svelte-pxykfy")
        },
        m(i, c) {
            E(i, e, c), s && s.m(e, null), r[4](e), t = !0, l || (o = j(e, "wheel", r[1]), l = !0)
        },
        p(i, [c]) {
            s && s.p && (!t || c & 4) && Se(s, n, i, i[2], t ? Le(n, i[2], c, null) : Ee(i[2]), null)
        },
        i(i) {
            t || (C(s, i), t = !0)
        },
        o(i) {
            L(s, i), t = !1
        },
        d(i) {
            i && _(e), s && s.d(i), r[4](null), l = !1, o()
        }
    }
}

function ze(r, e, t) {
    let {
        $$slots: l = {},
        $$scope: o
    } = e, n;
    async function s(c) {
        const f = n.offsetWidth;
        if (!f || f <= 768 || c.deltaY == 0) return;
        c.preventDefault();
        const p = Math.sign(c.deltaY);
        n.scrollBy({
            left: p * f,
            behavior: "smooth"
        })
    }

    function i(c) {
        oe[c ? "unshift" : "push"](() => {
            n = c, t(0, n)
        })
    }
    return r.$$set = c => {
        "$$scope" in c && t(2, o = c.$$scope)
    }, [n, s, o, l, i]
}
class Ue extends W {
    constructor(e) {
        super(), z(this, e, ze, We, A, {})
    }
}

function Fe(r) {
    let e, t;
    const l = r[1].default,
        o = Ne(l, r, r[0], null);
    return {
        c() {
            e = b("section"), o && o.c(), this.h()
        },
        l(n) {
            e = w(n, "SECTION", {
                class: !0
            });
            var s = S(e);
            o && o.l(s), s.forEach(_), this.h()
        },
        h() {
            m(e, "class", "scroll-section svelte-vxuwbk")
        },
        m(n, s) {
            E(n, e, s), o && o.m(e, null), t = !0
        },
        p(n, [s]) {
            o && o.p && (!t || s & 1) && Se(o, l, n, n[0], t ? Le(l, n[0], s, null) : Ee(n[0]), null)
        },
        i(n) {
            t || (C(o, n), t = !0)
        },
        o(n) {
            L(o, n), t = !1
        },
        d(n) {
            n && _(e), o && o.d(n)
        }
    }
}

function Be(r, e, t) {
    let {
        $$slots: l = {},
        $$scope: o
    } = e;
    return r.$$set = n => {
        "$$scope" in n && t(0, o = n.$$scope)
    }, [o, l]
}
class de extends W {
    constructor(e) {
        super(), z(this, e, Be, Fe, A, {})
    }
}
const qe = "" + new URL("../assets/norisk_logo_color.DT8vq64y.png",
    import.meta.url).href;

function He(r) {
    let e, t = '<span class="download-arrow svelte-lg28vz">↓</span> <span class="label svelte-lg28vz">Start<br/>download</span>';
    return {
        c() {
            e = b("button"), e.innerHTML = t, this.h()
        },
        l(l) {
            e = w(l, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), B(e) !== "svelte-1wyptin" && (e.innerHTML = t), this.h()
        },
        h() {
            m(e, "class", "download-button svelte-lg28vz")
        },
        m(l, o) {
            E(l, e, o)
        },
        p: M,
        i: M,
        o: M,
        d(l) {
            l && _(e)
        }
    }
}

function je(r, e, t) {
    let {
        os: l
    } = e;
    return r.$$set = o => {
        "os" in o && t(0, l = o.os)
    }, [l]
}
class Ge extends W {
    constructor(e) {
        super(), z(this, e, je, He, A, {
            os: 0
        })
    }
}

function ae(r) {
    const e = r - 1;
    return e * e * e + 1
}

function ne(r) {
    return --r * r * r * r * r + 1
}

function he(r, {
    delay: e = 0,
    duration: t = 400,
    easing: l = ae,
    x: o = 0,
    y: n = 0,
    opacity: s = 0
} = {}) {
    const i = getComputedStyle(r),
        c = +i.opacity,
        f = i.transform === "none" ? "" : i.transform,
        p = c * (1 - s),
        [d, a] = ce(o),
        [u, $] = ce(n);
    return {
        delay: e,
        duration: t,
        easing: l,
        css: (k, y) => `
			transform: ${f} translate(${(1-k)*d}${a}, ${(1-k)*u}${$});
			opacity: ${c-p*y}`
    }
}

function pe(r, {
    delay: e = 0,
    duration: t = 400,
    easing: l = ae,
    axis: o = "y"
} = {}) {
    const n = getComputedStyle(r),
        s = +n.opacity,
        i = o === "y" ? "height" : "width",
        c = parseFloat(n[i]),
        f = o === "y" ? ["top", "bottom"] : ["left", "right"],
        p = f.map(x => `${x[0].toUpperCase()}${x.slice(1)}`),
        d = parseFloat(n[`padding${p[0]}`]),
        a = parseFloat(n[`padding${p[1]}`]),
        u = parseFloat(n[`margin${p[0]}`]),
        $ = parseFloat(n[`margin${p[1]}`]),
        k = parseFloat(n[`border${p[0]}Width`]),
        y = parseFloat(n[`border${p[1]}Width`]);
    return {
        delay: e,
        duration: t,
        easing: l,
        css: x => `overflow: hidden;opacity: ${Math.min(x*20,1)*s};${i}: ${x*c}px;padding-${f[0]}: ${x*d}px;padding-${f[1]}: ${x*a}px;margin-${f[0]}: ${x*u}px;margin-${f[1]}: ${x*$}px;border-${f[0]}-width: ${x*k}px;border-${f[1]}-width: ${x*y}px;`
    }
}

function me(r, {
    delay: e = 0,
    duration: t = 400,
    easing: l = ae,
    start: o = 0,
    opacity: n = 0
} = {}) {
    const s = getComputedStyle(r),
        i = +s.opacity,
        c = s.transform === "none" ? "" : s.transform,
        f = 1 - o,
        p = i * (1 - n);
    return {
        delay: e,
        duration: t,
        easing: l,
        css: (d, a) => `
			transform: ${c} scale(${1-f*a});
			opacity: ${i-p*a}
		`
    }
}
const Ye = "" + new URL("../assets/norisk_pixelart.BWlf2spf.png",
    import.meta.url).href;

function Qe(r) {
    let e, t, l, o;
    return {
        c() {
            e = b("div"), t = b("div"), l = b("img"), this.h()
        },
        l(n) {
            e = w(n, "DIV", {
                class: !0,
                style: !0
            });
            var s = S(e);
            t = w(s, "DIV", {
                class: !0,
                style: !0
            });
            var i = S(t);
            l = w(i, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), i.forEach(_), s.forEach(_), this.h()
        },
        h() {
            Te(l.src, o = Ye) || m(l, "src", o), m(l, "alt", "Pixelart"), m(l, "class", "svelte-mu19hs"), m(t, "class", "image-wrapper svelte-mu19hs"), ee(t, "margin-left", r[1] * .9 + "px"), m(e, "class", "player-pixelart svelte-mu19hs"), ee(e, "width", r[1] + "px")
        },
        m(n, s) {
            E(n, e, s), g(e, t), g(t, l), r[2](e)
        },
        p(n, [s]) {
            s & 2 && ee(t, "margin-left", n[1] * .9 + "px"), s & 2 && ee(e, "width", n[1] + "px")
        },
        i: M,
        o: M,
        d(n) {
            n && _(e), r[2](null)
        }
    }
}

function Ke(r, e, t) {
    let l, o;
    De(() => {
        t(1, o = l.offsetHeight)
    });

    function n(s) {
        oe[s ? "unshift" : "push"](() => {
            l = s, t(0, l)
        })
    }
    return [l, o, n]
}
class Je extends W {
    constructor(e) {
        super(), z(this, e, Ke, Qe, A, {})
    }
}

function _e(r, e, t) {
    const l = r.slice();
    return l[10] = e[t], l[12] = t, l
}

function ge(r, e, t) {
    const l = r.slice();
    return l[10] = e[t], l[12] = t, l
}

function ve(r) {
    let e, t = r[10] + "",
        l, o, n, s;
    return {
        c() {
            e = b("p"), l = G(t), o = G(" Version"), this.h()
        },
        l(i) {
            e = w(i, "P", {
                class: !0
            });
            var c = S(e);
            l = Y(c, t), o = Y(c, " Version"), c.forEach(_), this.h()
        },
        h() {
            m(e, "class", "os-name current svelte-cpd2h3")
        },
        m(i, c) {
            E(i, e, c), g(e, l), g(e, o), s = !0
        },
        p: M,
        i(i) {
            s || (i && re(() => {
                s && (n || (n = te(e, me, {
                    duration: 300,
                    easing: ne
                }, !0)), n.run(1))
            }), s = !0)
        },
        o(i) {
            i && (n || (n = te(e, me, {
                duration: 300,
                easing: ne
            }, !1)), n.run(0)), s = !1
        },
        d(i) {
            i && _(e), i && n && n.end()
        }
    }
}

function $e(r, e) {
    let t, l, o = e[1] === e[12] && ve(e);
    return {
        key: r,
        first: null,
        c() {
            t = U(), o && o.c(), l = U(), this.h()
        },
        l(n) {
            t = U(), o && o.l(n), l = U(), this.h()
        },
        h() {
            this.first = t
        },
        m(n, s) {
            E(n, t, s), o && o.m(n, s), E(n, l, s)
        },
        p(n, s) {
            e = n, e[1] === e[12] ? o ? (o.p(e, s), s & 2 && C(o, 1)) : (o = ve(e), o.c(), C(o, 1), o.m(l.parentNode, l)) : o && (X(), L(o, 1, 1, () => {
                o = null
            }), Z())
        },
        d(n) {
            n && (_(t), _(l)), o && o.d(n)
        }
    }
}

function be(r) {
    let e, t = [],
        l = new Map,
        o, n, s, i, c, f = Q(r[3]);
    const p = d => d[10];
    for (let d = 0; d < f.length; d += 1) {
        let a = _e(r, f, d),
            u = p(a);
        l.set(u, t[d] = ye(u, a))
    }
    return n = new Je({}), {
        c() {
            e = b("button");
            for (let d = 0; d < t.length; d += 1) t[d].c();
            o = T(), O(n.$$.fragment), this.h()
        },
        l(d) {
            e = w(d, "BUTTON", {
                class: !0
            });
            var a = S(e);
            for (let u = 0; u < t.length; u += 1) t[u].l(a);
            o = D(a), P(n.$$.fragment, a), a.forEach(_), this.h()
        },
        h() {
            m(e, "class", "download-wrapper svelte-cpd2h3")
        },
        m(d, a) {
            E(d, e, a);
            for (let u = 0; u < t.length; u += 1) t[u] && t[u].m(e, null);
            g(e, o), R(n, e, null), s = !0, i || (c = j(e, "click", r[4]), i = !0)
        },
        p(d, a) {
            a & 10 && (f = Q(d[3]), X(), t = ie(t, a, p, 1, d, f, l, e, Ae, ye, o, _e), Z())
        },
        i(d) {
            if (!s) {
                for (let a = 0; a < f.length; a += 1) C(t[a]);
                C(n.$$.fragment, d), s = !0
            }
        },
        o(d) {
            for (let a = 0; a < t.length; a += 1) L(t[a]);
            L(n.$$.fragment, d), s = !1
        },
        d(d) {
            d && _(e);
            for (let a = 0; a < t.length; a += 1) t[a].d();
            V(n), i = !1, c()
        }
    }
}

function we(r) {
    let e, t, l, o, n;
    return t = new Ge({
        props: {
            os: r[10]
        }
    }), {
        c() {
            e = b("div"), O(t.$$.fragment), this.h()
        },
        l(s) {
            e = w(s, "DIV", {
                class: !0
            });
            var i = S(e);
            P(t.$$.fragment, i), i.forEach(_), this.h()
        },
        h() {
            m(e, "class", "download-button-wrapper svelte-cpd2h3")
        },
        m(s, i) {
            E(s, e, i), R(t, e, null), n = !0
        },
        p: M,
        i(s) {
            n || (C(t.$$.fragment, s), s && re(() => {
                n && (o && o.end(1), l = Pe(e, he, {
                    duration: 300,
                    delay: 250,
                    x: "120vh",
                    opacity: 1,
                    easing: ne
                }), l.start())
            }), n = !0)
        },
        o(s) {
            L(t.$$.fragment, s), l && l.invalidate(), s && (o = Re(e, he, {
                duration: 300,
                x: "-120vh",
                easing: ne,
                opacity: 1
            })), n = !1
        },
        d(s) {
            s && _(e), V(t), s && o && o.end()
        }
    }
}

function ye(r, e) {
    let t, l, o, n = e[1] === e[12] && we(e);
    return {
        key: r,
        first: null,
        c() {
            t = U(), n && n.c(), l = U(), this.h()
        },
        l(s) {
            t = U(), n && n.l(s), l = U(), this.h()
        },
        h() {
            this.first = t
        },
        m(s, i) {
            E(s, t, i), n && n.m(s, i), E(s, l, i), o = !0
        },
        p(s, i) {
            e = s, e[1] === e[12] ? n ? (n.p(e, i), i & 2 && C(n, 1)) : (n = we(e), n.c(), C(n, 1), n.m(l.parentNode, l)) : n && (X(), L(n, 1, 1, () => {
                n = null
            }), Z())
        },
        i(s) {
            o || (C(n), o = !0)
        },
        o(s) {
            L(n), o = !1
        },
        d(s) {
            s && (_(t), _(l)), n && n.d(s)
        }
    }
}

function Xe(r) {
    let e, t, l = "<",
        o, n, s, i, c, f, p = [],
        d = new Map,
        a, u, $ = ">",
        k, y, x, q, K, H = Q(r[3]);
    const J = h => h[10];
    for (let h = 0; h < H.length; h += 1) {
        let v = ge(r, H, h),
            N = J(v);
        d.set(N, p[h] = $e(N, v))
    }
    let I = r[0] && be(r);
    return {
        c() {
            e = b("div"), t = b("button"), t.textContent = l, o = T(), n = b("div"), s = b("p"), i = G(r[2]), c = G(" Version"), f = T();
            for (let h = 0; h < p.length; h += 1) p[h].c();
            a = T(), u = b("button"), u.textContent = $, k = T(), I && I.c(), y = U(), this.h()
        },
        l(h) {
            e = w(h, "DIV", {
                class: !0
            });
            var v = S(e);
            t = w(v, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), B(t) !== "svelte-1jf7tzj" && (t.textContent = l), o = D(v), n = w(v, "DIV", {
                class: !0
            });
            var N = S(n);
            s = w(N, "P", {
                class: !0
            });
            var F = S(s);
            i = Y(F, r[2]), c = Y(F, " Version"), F.forEach(_), f = D(N);
            for (let le = 0; le < p.length; le += 1) p[le].l(N);
            N.forEach(_), a = D(v), u = w(v, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), B(u) !== "svelte-hwn0r9" && (u.textContent = $), v.forEach(_), k = D(h), I && I.l(h), y = U(), this.h()
        },
        h() {
            m(t, "class", "switch svelte-cpd2h3"), m(s, "class", "os-name longest svelte-cpd2h3"), m(n, "class", "os-name-container svelte-cpd2h3"), m(u, "class", "switch svelte-cpd2h3"), m(e, "class", "os-selection svelte-cpd2h3")
        },
        m(h, v) {
            E(h, e, v), g(e, t), g(e, o), g(e, n), g(n, s), g(s, i), g(s, c), g(n, f);
            for (let N = 0; N < p.length; N += 1) p[N] && p[N].m(n, null);
            g(e, a), g(e, u), E(h, k, v), I && I.m(h, v), E(h, y, v), x = !0, q || (K = [j(t, "click", r[6]), j(u, "click", r[7])], q = !0)
        },
        p(h, [v]) {
            (!x || v & 4) && se(i, h[2]), v & 10 && (H = Q(h[3]), p = ie(p, v, J, 1, h, H, d, n, Me, $e, null, ge)), h[0] ? I ? (I.p(h, v), v & 1 && C(I, 1)) : (I = be(h), I.c(), C(I, 1), I.m(y.parentNode, y)) : I && (X(), L(I, 1, 1, () => {
                I = null
            }), Z())
        },
        i(h) {
            x || (C(I), x = !0)
        },
        o(h) {
            L(I), x = !1
        },
        d(h) {
            h && (_(e), _(k), _(y));
            for (let v = 0; v < p.length; v += 1) p[v].d();
            I && I.d(h), q = !1, Ie(K)
        }
    }
}
async function Ze() {
    if (typeof window == "object") {
        const r = navigator.platform;
        return r.indexOf("Win") !== -1 ? "Windows" : r.indexOf("Mac") !== -1 ? "MacOs" : (r.indexOf("Linux") !== -1, "Linux")
    }
    return "Linux"
}

function et(r, e, t) {
    let l = !1;
    const o = ["Windows", "MacOs", "Linux"];
    let n = 0,
        s = o[0];
    for (let a = 1; a < o.length; a++) {
        const u = o[a];
        u.length > s.length && (s = u)
    }
    Ze().then(a => {
        t(1, n = o.indexOf(a)), t(0, l = !0)
    });

    function i() {
        const a = "https://github.com/NoRiskClient/noriskclient-launcher/releases/latest/download/";
        let u;
        switch (o[n]) {
            case "Windows":
                u = "NoRiskClient-Windows-setup.exe";
                break;
            case "MacOs":
                u = "NoRiskClient-MacOS.app.tar.gz";
                break;
            case "Linux":
                u = "NoRiskClient-Linux.AppImage";
                break
        }
        return a + u
    }

    function c() {
        const a = i();
        window.location.href = a
    }

    function f(a) {
        const u = o.length;
        a ? t(1, n = (n - 1 + u) % u) : t(1, n = (n + 1) % u)
    }
    return [l, n, s, o, c, f, () => f(!0), () => f(!1)]
}
class tt extends W {
    constructor(e) {
        super(), z(this, e, et, Xe, A, {})
    }
}

function nt(r) {
    let e, t, l = "DISCORD",
        o, n, s = "GITHUB",
        i, c, f = "STORE",
        p, d, a, u, $;
    return {
        c() {
            e = b("nav"), t = b("a"), t.textContent = l, o = T(), n = b("a"), n.textContent = s, i = T(), c = b("a"), c.textContent = f, p = T(), d = b("button"), a = G(r[0]), this.h()
        },
        l(k) {
            e = w(k, "NAV", {
                class: !0
            });
            var y = S(e);
            t = w(y, "A", {
                href: !0,
                target: !0,
                class: !0,
                "data-svelte-h": !0
            }), B(t) !== "svelte-14w71ku" && (t.textContent = l), o = D(y), n = w(y, "A", {
                href: !0,
                target: !0,
                class: !0,
                "data-svelte-h": !0
            }), B(n) !== "svelte-ptbedz" && (n.textContent = s), i = D(y), c = w(y, "A", {
                href: !0,
                target: !0,
                class: !0,
                "data-svelte-h": !0
            }), B(c) !== "svelte-u68ghw" && (c.textContent = f), p = D(y), d = w(y, "BUTTON", {
                class: !0
            });
            var x = S(d);
            a = Y(x, r[0]), x.forEach(_), y.forEach(_), this.h()
        },
        h() {
            m(t, "href", "https://discord.norisk.gg"), m(t, "target", "_blank"), m(t, "class", "svelte-vbob1"), m(n, "href", "https://github.com/NoriskClient"), m(n, "target", "_blank"), m(n, "class", "svelte-vbob1"), m(c, "href", "https://store.norisk.gg"), m(c, "target", "_blank"), m(c, "class", "svelte-vbob1"), m(d, "class", "svelte-vbob1"), m(e, "class", "navigation-wrapper svelte-vbob1")
        },
        m(k, y) {
            E(k, e, y), g(e, t), g(e, o), g(e, n), g(e, i), g(e, c), g(e, p), g(e, d), g(d, a), u || ($ = j(d, "click", r[1]), u = !0)
        },
        p(k, [y]) {
            y & 1 && se(a, k[0])
        },
        i: M,
        o: M,
        d(k) {
            k && _(e), u = !1, $()
        }
    }
}

function st(r, e, t) {
    var l = "DARK";
    De(() => {
        window.document.body.classList.contains("dark-mode") && t(0, l = "LIGHT")
    });

    function o() {
        window.document.body.classList.contains("dark-mode") ? (window.document.body.classList.remove("dark-mode"), localStorage.setItem("theme", "light"), t(0, l = "DARK")) : (window.document.body.classList.add("dark-mode"), localStorage.setItem("theme", "dark"), t(0, l = "LIGHT"))
    }
    return [l, o]
}
class lt extends W {
    constructor(e) {
        super(), z(this, e, st, nt, A, {})
    }
}

function ot(r) {
    let e, t, l, o, n, s, i, c, f, p = "© 2000-2024 HGLabor/Friends Inc.",
        d;
    return t = new lt({}), i = new tt({}), {
        c() {
            e = b("div"), O(t.$$.fragment), l = T(), o = b("img"), s = T(), O(i.$$.fragment), c = T(), f = b("p"), f.textContent = p, this.h()
        },
        l(a) {
            e = w(a, "DIV", {
                class: !0
            });
            var u = S(e);
            P(t.$$.fragment, u), l = D(u), o = w(u, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), s = D(u), P(i.$$.fragment, u), c = D(u), f = w(u, "P", {
                class: !0,
                "data-svelte-h": !0
            }), B(f) !== "svelte-t3ocr2" && (f.textContent = p), u.forEach(_), this.h()
        },
        h() {
            m(o, "class", "splash-title svelte-cvt8h9"), Te(o.src, n = qe) || m(o, "src", n), m(o, "alt", "NoRisk Client Logo"), m(f, "class", "copyright svelte-cvt8h9"), m(e, "class", "content svelte-cvt8h9")
        },
        m(a, u) {
            E(a, e, u), R(t, e, null), g(e, l), g(e, o), g(e, s), R(i, e, null), g(e, c), g(e, f), d = !0
        },
        p: M,
        i(a) {
            d || (C(t.$$.fragment, a), C(i.$$.fragment, a), d = !0)
        },
        o(a) {
            L(t.$$.fragment, a), L(i.$$.fragment, a), d = !1
        },
        d(a) {
            a && _(e), V(t), V(i)
        }
    }
}
class rt extends W {
    constructor(e) {
        super(), z(this, e, null, ot, A, {})
    }
}

function ke(r, e, t) {
    const l = r.slice();
    return l[3] = e[t], l[5] = t, l
}

function Ce(r) {
    let e, t, l, o = r[3].content + "",
        n, s, i;
    return {
        c() {
            e = b("section"), t = b("div"), l = b("p"), n = G(o), this.h()
        },
        l(c) {
            e = w(c, "SECTION", {
                class: !0
            });
            var f = S(e);
            t = w(f, "DIV", {
                class: !0
            });
            var p = S(t);
            l = w(p, "P", {
                class: !0
            });
            var d = S(l);
            n = Y(d, o), d.forEach(_), p.forEach(_), f.forEach(_), this.h()
        },
        h() {
            m(l, "class", "svelte-t5xuc1"), m(t, "class", "accordion-content svelte-t5xuc1"), m(e, "class", "accordion-content-wrapper svelte-t5xuc1")
        },
        m(c, f) {
            E(c, e, f), g(e, t), g(t, l), g(l, n), i = !0
        },
        p(c, f) {
            (!i || f & 2) && o !== (o = c[3].content + "") && se(n, o)
        },
        i(c) {
            i || (c && re(() => {
                i && (s || (s = te(e, pe, {
                    duration: 300,
                    axis: "y"
                }, !0)), s.run(1))
            }), i = !0)
        },
        o(c) {
            c && (s || (s = te(e, pe, {
                duration: 300,
                axis: "y"
            }, !1)), s.run(0)), i = !1
        },
        d(c) {
            c && _(e), c && s && s.end()
        }
    }
}

function xe(r, e) {
    let t, l, o, n = e[3].label + "",
        s, i, c, f, p;

    function d() {
        return e[2](e[5])
    }
    let a = e[5] === e[0] && Ce(e);
    return {
        key: r,
        first: null,
        c() {
            t = b("div"), l = b("button"), o = b("span"), s = G(n), i = T(), a && a.c(), c = T(), this.h()
        },
        l(u) {
            t = w(u, "DIV", {
                class: !0
            });
            var $ = S(t);
            l = w($, "BUTTON", {
                class: !0
            });
            var k = S(l);
            o = w(k, "SPAN", {
                class: !0
            });
            var y = S(o);
            s = Y(y, n), y.forEach(_), k.forEach(_), i = D($), a && a.l($), c = D($), $.forEach(_), this.h()
        },
        h() {
            m(o, "class", "label svelte-t5xuc1"), m(l, "class", "accordion-header svelte-t5xuc1"), m(t, "class", "accordion svelte-t5xuc1"), ue(t, "is-open", e[5] === e[0]), this.first = t
        },
        m(u, $) {
            E(u, t, $), g(t, l), g(l, o), g(o, s), g(t, i), a && a.m(t, null), g(t, c), f || (p = j(l, "click", d), f = !0)
        },
        p(u, $) {
            e = u, $ & 2 && n !== (n = e[3].label + "") && se(s, n), e[5] === e[0] ? a ? (a.p(e, $), $ & 3 && C(a, 1)) : (a = Ce(e), a.c(), C(a, 1), a.m(t, c)) : a && (X(), L(a, 1, 1, () => {
                a = null
            }), Z()), $ & 3 && ue(t, "is-open", e[5] === e[0])
        },
        d(u) {
            u && _(t), a && a.d(), f = !1, p()
        }
    }
}

function it(r) {
    let e, t = [],
        l = new Map,
        o = Q(r[1]);
    const n = s => s[3].label;
    for (let s = 0; s < o.length; s += 1) {
        let i = ke(r, o, s),
            c = n(i);
        l.set(c, t[s] = xe(c, i))
    }
    return {
        c() {
            e = b("div");
            for (let s = 0; s < t.length; s += 1) t[s].c();
            this.h()
        },
        l(s) {
            e = w(s, "DIV", {
                class: !0
            });
            var i = S(e);
            for (let c = 0; c < t.length; c += 1) t[c].l(i);
            i.forEach(_), this.h()
        },
        h() {
            m(e, "class", "accordion-list pixel-corners svelte-t5xuc1")
        },
        m(s, i) {
            E(s, e, i);
            for (let c = 0; c < t.length; c += 1) t[c] && t[c].m(e, null)
        },
        p(s, [i]) {
            i & 3 && (o = Q(s[1]), t = ie(t, i, n, 1, s, o, l, e, Me, xe, null, ke))
        },
        i: M,
        o: M,
        d(s) {
            s && _(e);
            for (let i = 0; i < t.length; i += 1) t[i].d()
        }
    }
}

function at(r, e, t) {
    let {
        accordions: l
    } = e, {
        expanded: o = !1
    } = e;
    const n = s => t(0, o = s === o ? !1 : s);
    return r.$$set = s => {
        "accordions" in s && t(1, l = s.accordions), "expanded" in s && t(0, o = s.expanded)
    }, [o, l, n]
}
class ct extends W {
    constructor(e) {
        super(), z(this, e, at, it, A, {
            accordions: 1,
            expanded: 0
        })
    }
}

function ut(r) {
    let e, t, l, o;
    return {
        c() {
            e = b("div"), t = b("input"), this.h()
        },
        l(n) {
            e = w(n, "DIV", {
                class: !0
            });
            var s = S(e);
            t = w(s, "INPUT", {
                class: !0,
                placeholder: !0
            }), s.forEach(_), this.h()
        },
        h() {
            m(t, "class", "input svelte-zoyw4u"), m(t, "placeholder", r[1]), m(e, "class", "textfield svelte-zoyw4u")
        },
        m(n, s) {
            E(n, e, s), g(e, t), fe(t, r[0]), l || (o = j(t, "input", r[2]), l = !0)
        },
        p(n, [s]) {
            s & 2 && m(t, "placeholder", n[1]), s & 1 && t.value !== n[0] && fe(t, n[0])
        },
        i: M,
        o: M,
        d(n) {
            n && _(e), l = !1, o()
        }
    }
}

function ft(r, e, t) {
    let {
        placeholder: l
    } = e, {
        value: o
    } = e;

    function n() {
        o = this.value, t(0, o)
    }
    return r.$$set = s => {
        "placeholder" in s && t(1, l = s.placeholder), "value" in s && t(0, o = s.value)
    }, [o, l, n]
}
class dt extends W {
    constructor(e) {
        super(), z(this, e, ft, ut, A, {
            placeholder: 1,
            value: 0
        })
    }
}

function ht(r) {
    let e, t, l = "FAQ",
        o, n, s, i, c, f;

    function p(a) {
        r[3](a)
    }
    let d = {
        placeholder: "Find your answers"
    };
    return r[0] !== void 0 && (d.value = r[0]), n = new dt({
        props: d
    }), oe.push(() => Ve(n, "value", p)), c = new ct({
        props: {
            accordions: r[1]
        }
    }), {
        c() {
            e = b("div"), t = b("p"), t.textContent = l, o = T(), O(n.$$.fragment), i = T(), O(c.$$.fragment), this.h()
        },
        l(a) {
            e = w(a, "DIV", {
                class: !0
            });
            var u = S(e);
            t = w(u, "P", {
                "data-svelte-h": !0
            }), B(t) !== "svelte-1j2nsz4" && (t.textContent = l), o = D(u), P(n.$$.fragment, u), i = D(u), P(c.$$.fragment, u), u.forEach(_), this.h()
        },
        h() {
            m(e, "class", "faq section container svelte-1fvwfje")
        },
        m(a, u) {
            E(a, e, u), g(e, t), g(e, o), R(n, e, null), g(e, i), R(c, e, null), f = !0
        },
        p(a, [u]) {
            const $ = {};
            !s && u & 1 && (s = !0, $.value = a[0], Oe(() => s = !1)), n.$set($);
            const k = {};
            u & 2 && (k.accordions = a[1]), c.$set(k)
        },
        i(a) {
            f || (C(n.$$.fragment, a), C(c.$$.fragment, a), f = !0)
        },
        o(a) {
            L(n.$$.fragment, a), L(c.$$.fragment, a), f = !1
        },
        d(a) {
            a && _(e), V(n), V(c)
        }
    }
}

function pt(r, e, t) {
    let l;
    const o = [{
        label: "Which Minecraft version is supported by the NoRisk Client?",
        content: "NoRisk Client is compatible with the latest Minecraft version, 1.20.4, ensuring you can enjoy all the new features and content while benefiting from our enhancements."
    }, {
        label: "Where can I upload my custom cape?",
        content: "You can easily upload your custom cape within our launcher. We've made it simple and convenient for you to personalize your Minecraft experience with your own unique style."
    }, {
        label: "What mods can I use with NoRisk Client?",
        content: "NoRisk Client comes pre-loaded with a selection of mods that offer various enhancements and features. Additionally, you have the option to easily install Fabric mods directly from Modrinth via our launcher."
    }, {
        label: "Can I expect improved FPS with NoRisk Client?",
        content: "Absolutely! NoRisk Client utilizes a variety of techniques and a set of performance-mods to enhance your frame rates"
    }, {
        label: "Why does it say I'm banned?",
        content: "If you're encountering a ban message, it might be because you've used forbidden mods or engaged in actions like wearing inappropriate capes that violate our fair gameplay standards."
    }, {
        label: "How can I report bugs or make feature requests?",
        content: "If you come across any bugs or have ideas for new features, you can submit them on our GitHub repository or discuss them with our community on Discord."
    }, {
        label: "Which operating systems are supported by NoRisk Client?",
        content: "NoRisk Client is compatible with Windows, Linux, and Mac operating systems, ensuring accessibility and enjoyment across a variety of platforms."
    }, {
        label: "Is there a public API for Minecraft servers?",
        content: "Yes, we provide a public API that introduces custom functionalities into the game, including features like dual sword PvP and 1.7 PvP mechanics within the 1.20 version. This API wrapper enhances your gameplay experience by offering unique capabilities and options."
    }];
    let n = o,
        s = "";

    function i(c) {
        s = c, t(0, s)
    }
    return r.$$.update = () => {
        r.$$.dirty & 1 && t(2, l = o.filter(c => !s || c.label.toLowerCase().includes(s.toLowerCase()) || c.content.toLowerCase().includes(s.toLowerCase()))), r.$$.dirty & 4 && t(1, n = l)
    }, [s, n, l, i]
}
class mt extends W {
    constructor(e) {
        super(), z(this, e, pt, ht, A, {})
    }
}

function _t(r) {
    let e, t;
    return e = new rt({}), {
        c() {
            O(e.$$.fragment)
        },
        l(l) {
            P(e.$$.fragment, l)
        },
        m(l, o) {
            R(e, l, o), t = !0
        },
        i(l) {
            t || (C(e.$$.fragment, l), t = !0)
        },
        o(l) {
            L(e.$$.fragment, l), t = !1
        },
        d(l) {
            V(e, l)
        }
    }
}

function gt(r) {
    let e, t;
    return e = new mt({}), {
        c() {
            O(e.$$.fragment)
        },
        l(l) {
            P(e.$$.fragment, l)
        },
        m(l, o) {
            R(e, l, o), t = !0
        },
        i(l) {
            t || (C(e.$$.fragment, l), t = !0)
        },
        o(l) {
            L(e.$$.fragment, l), t = !1
        },
        d(l) {
            V(e, l)
        }
    }
}

function vt(r) {
    let e, t, l, o;
    return e = new de({
        props: {
            $$slots: {
                default: [_t]
            },
            $$scope: {
                ctx: r
            }
        }
    }), l = new de({
        props: {
            $$slots: {
                default: [gt]
            },
            $$scope: {
                ctx: r
            }
        }
    }), {
        c() {
            O(e.$$.fragment), t = T(), O(l.$$.fragment)
        },
        l(n) {
            P(e.$$.fragment, n), t = D(n), P(l.$$.fragment, n)
        },
        m(n, s) {
            R(e, n, s), E(n, t, s), R(l, n, s), o = !0
        },
        p(n, s) {
            const i = {};
            s & 1 && (i.$$scope = {
                dirty: s,
                ctx: n
            }), e.$set(i);
            const c = {};
            s & 1 && (c.$$scope = {
                dirty: s,
                ctx: n
            }), l.$set(c)
        },
        i(n) {
            o || (C(e.$$.fragment, n), C(l.$$.fragment, n), o = !0)
        },
        o(n) {
            L(e.$$.fragment, n), L(l.$$.fragment, n), o = !1
        },
        d(n) {
            n && _(t), V(e, n), V(l, n)
        }
    }
}

function $t(r) {
    let e, t;
    return e = new Ue({
        props: {
            $$slots: {
                default: [vt]
            },
            $$scope: {
                ctx: r
            }
        }
    }), {
        c() {
            O(e.$$.fragment)
        },
        l(l) {
            P(e.$$.fragment, l)
        },
        m(l, o) {
            R(e, l, o), t = !0
        },
        p(l, [o]) {
            const n = {};
            o & 1 && (n.$$scope = {
                dirty: o,
                ctx: l
            }), e.$set(n)
        },
        i(l) {
            t || (C(e.$$.fragment, l), t = !0)
        },
        o(l) {
            L(e.$$.fragment, l), t = !1
        },
        d(l) {
            V(e, l)
        }
    }
}
class yt extends W {
    constructor(e) {
        super(), z(this, e, null, $t, A, {})
    }
}
export {
    yt as component
};