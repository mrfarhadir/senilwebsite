!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 0));
})([
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n(1);
        var r = n(2);
        (window.Senil = r.default), (e.default = r.default);
    },
    function (t, e, n) {},
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t(t, e) {
                var n = this;
                (this.currentPushItems = []),
                    (this.inputElements = ["INPUT", "TEXTAREA"]),
                    (this.setDefaultConfig = function (t) {
                        t || (t = {}), t.wrapper || (t.wrapper = "body"), (n.config = t);
                    }),
                    (this.init = function () {
                        var t = document.querySelectorAll(n.config.wrapper + " [model]");
                        t.forEach(function (e, r) {
                            var o = e.getAttribute("model"),
                                i = n.getValue(o);
                            n.inputElements.find(function (e) {
                                return e === t[r].nodeName;
                            })
                                ? ((e.value = i),
                                  e.addEventListener("keyup", function (t) {
                                      var e,
                                          r = t.target.value;
                                      Number(r) && (r = parseFloat(r)), n.set((((e = {})[o] = r), e));
                                  }))
                                : (e.innerHTML = i),
                                "string" == typeof t[r].getAttribute("contenteditable") &&
                                    e.addEventListener("input", function (t) {
                                        var r;
                                        n.set((((r = {})[o] = e.innerHTML), r));
                                    });
                        });
                    }),
                    (this.set = function (t) {
                        "object" == typeof t && n.travis(t);
                    }),
                    (this.travis = function (t, e) {
                        if ((void 0 === e && (e = null), "object" == typeof t)) {
                            for (var r in t)
                                if (t.hasOwnProperty(r)) {
                                    var o = t[r],
                                        i = e ? e + "." + r : r;
                                    n.travis(o, i);
                                }
                        } else {
                            var u = !1;
                            if ("string" == typeof t) {
                                var f = t.match(new RegExp("__(.*)__"));
                                if (f && f[0] && f[1]) {
                                    var a = f[1];
                                    n[a] instanceof Function && (n[a](e), (u = !0));
                                }
                            }
                            u || n.setValue(e, t), n.updateDom(e, t);
                        }
                    }),
                    (this.setValue = function (t, e) {
                        for (var r = n.state, o = t.split("."), i = o.length, u = 0; u < i - 1; u++) {
                            var f = o[u];
                            r[f] || (r[f] = {}), (r = r[f]);
                        }
                        r[o[i - 1]] = e;
                    }),
                    (this.getValue = function (t) {
                        for (var e = n.state, r = t.split("."), o = r.length, i = 0; i < o - 1; i++) {
                            var u = r[i];
                            e[u] || (e[u] = {}), (e = e[u]);
                        }
                        return e[r[o - 1]];
                    }),
                    (this.updateDom = function (t, e) {
                        var r = document.querySelectorAll(n.config.wrapper + " [model]");
                        r.forEach(function (o, i) {
                            o.getAttribute("model") === t &&
                                (n.inputElements.find(function (t) {
                                    return t === r[i].nodeName;
                                })
                                    ? (o.value = e)
                                    : (o.innerHTML = e));
                        });
                    }),
                    (this.state = t),
                    this.setDefaultConfig(e),
                    this.init();
            }
            return (
                (t.prototype.$push = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return this.currentPushItems.push(t), "__push__";
                }),
                (t.prototype.push = function (t) {
                    var e = this.currentPushItems.shift(),
                        n = this.getValue(t);
                    e.forEach(function (t) {
                        n.push(t);
                    });
                }),
                (t.prototype.$pop = function () {
                    return "__pop__";
                }),
                (t.prototype.pop = function (t) {
                    this.getValue(t).pop();
                }),
                (t.prototype.$shift = function () {
                    return "__shift__";
                }),
                (t.prototype.shift = function (t) {
                    this.getValue(t).shift();
                }),
                t
            );
        })();
        e.default = r;
    },
]);
