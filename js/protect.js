!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).DisableDevtool = t();
  }(this, function () {
    "use strict";
    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
      }
    }
    function c(e, t, n) {
      t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {writable: false});
    }
    function e(e, t, n) {
      t in e ? Object.defineProperty(e, t, {value: n, enumerable: true, configurable: true, writable: true}) : e[t] = n;
    }
    function n(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: true, configurable: true}}), Object.defineProperty(e, "prototype", {writable: false}), t && a(e, t);
    }
    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function C(e, t) {
      if (t && ("object" == typeof t || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      t = e;
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function l(n) {
      var i = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var e, t = u(n);
        return C(this, i ? (e = u(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
      };
    }
    var f = false, t = {};
    function s(e) {
      t[e] = false;
    }
    function W() {
      for (var e in t) if (t[e]) return f = true;
      return f = false;
    }
    function H(e) {
      var t = (new Date).getTime();
      return e(), (new Date).getTime() - t;
    }
    function K(n, i) {
      function e(t) {
        return function () {
          n && n();
          var e = t.apply(void 0, arguments);
          return i && i(), e;
        };
      }
      var t = window.alert, o = window.confirm, r = window.prompt;
      try {
        window.alert = e(t), window.confirm = e(o), window.prompt = e(r);
      } catch (e) {}
    }
    var U = function () {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }(), V = !/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase()), q = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("qqbrowser"), F = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("firefox"), X = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("macintosh"), B = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("edge"), h = B && !(-1 !== navigator.userAgent.toLocaleLowerCase().indexOf("chrome")) || -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("trident") || -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("msie"), p = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("crios"), M = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("edgios"), N = -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("chrome") || p;
    function G() {
      for (var e = function () {
        for (var e = {}, t = 0; t < 500; t++) e["".concat(t)] = "".concat(t);
        return e;
      }(), t = [], n = 0; n < 50; n++) t.push(e);
      return t;
    }
    var Y = 0, $ = 0, J = [], Q = 0;
    function Z() {
      function e() {
        a = true;
      }
      function t() {
        a = false;
      }
      var n, i, o, r, c, u, a = false;
      function l() {
        (u[r] === o ? i : n)();
      }
      K(e, t), n = t, i = e, void 0 !== (u = document).hidden ? (o = "hidden", c = "visibilitychange", r = "visibilityState") : void 0 !== u.mozHidden ? (o = "mozHidden", c = "mozvisibilitychange", r = "mozVisibilityState") : void 0 !== u.msHidden ? (o = "msHidden", c = "msvisibilitychange", r = "msVisibilityState") : void 0 !== u.webkitHidden && (o = "webkitHidden", c = "webkitvisibilitychange", r = "webkitVisibilityState"), u.removeEventListener(c, l, false), u.addEventListener(c, l, false), Y = window.setInterval(function () {
        var e;
        a || (J.forEach(function (e) {
          s(e.type), e.detect(Q++);
        }), m(), "function" == typeof w.ondevtoolclose && (e = f, !W() && e && w.ondevtoolclose()));
      }, w.interval), $ = setTimeout(function () {
        V || y();
      }, w.stopIntervalTime);
    }
    function y() {
      window.clearInterval(Y);
    }
    function ee() {
      if (y(), w.url) window.location.href = w.url; else {
        try {
          window.opener = null, window.open("", "_self"), window.close(), window.history.back();
        } catch (e) {
          console.log(e);
        }
        setTimeout(function () {
          window.location.href = "https://tackchen.gitee.io/404.html?h=".concat(encodeURIComponent(location.host));
        }, 500);
      }
    }
    var w = {md5: "", ondevtoolopen: ee, ondevtoolclose: null, url: "", tkName: "ddtk", interval: 200, disableMenu: true, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: false, detectors: "all", clearLog: true, disableSelect: false, disableCopy: false, disableCut: false, disablePaste: false}, te = ["detectors", "ondevtoolclose"];
    function ne(e) {
      var t, n = 0 < arguments.length && void 0 !== e ? e : {};
      for (t in w) {
        var i = t;
        void 0 === n[i] || o(w[i]) !== o(n[i]) && -1 === te.indexOf(i) || (w[i] = n[i]);
      }
      "function" == typeof w.ondevtoolclose && true === w.clearIntervalWhenDevOpenTrigger && (w.clearIntervalWhenDevOpenTrigger = false, console.warn("Ä‚ÅÃ¢Â‚Å¹Ã‚ÂDISABLE-DEVTOOLÄ‚ÅÃ¢Â‚Å¹Ã¢Â€Â˜clearIntervalWhenDevOpenTrigger Ä‚Ä½Ä¹Â“Ã‚Â¨Ä‚Â¤Ã‚ËÃ‚Å¼Ä‚Â§Ã¢Â€ÂÃ‚Â¨ ondevtoolclose Ä‚ÅšÃ¢Â€Â”Ã‚Å›Ä‚ÅšÃ¢Â€Â” Ä‚ÅšÃ¢Â€Ë˜Ã‹Â†"));
    }
    var b = window.console || {log: function () {}, table: function () {}, clear: function () {}}, g = h ? function () {
      return b.log.apply(b, arguments);
    } : b.log, ie = h ? function () {
      return b.table.apply(b, arguments);
    } : b.table, oe = h ? function () {
      return b.clear();
    } : b.clear;
    function m() {
      w.clearLog && oe();
    }
    function re() {
      var n = 74, i = 73, o = 85, r = 83, c = 123, u = X ? function (e, t) {
        return e.metaKey && e.altKey && (t === i || t === n);
      } : function (e, t) {
        return e.ctrlKey && e.shiftKey && (t === i || t === n);
      }, a = X ? function (e, t) {
        return e.metaKey && e.altKey && t === o || e.metaKey && t === r;
      } : function (e, t) {
        return e.ctrlKey && (t === r || t === o);
      };
      window.addEventListener("keydown", function (e) {
        var t = (e = e || window.event).keyCode || e.which;
        if (t === c || u(e, t) || a(e, t)) return e.returnValue = false, e.preventDefault(), false;
      }, true), w.disableMenu && T(window, "contextmenu"), w.disableSelect && T(window, "selectstart"), w.disableCopy && T(window, "copy"), w.disableCut && T(window, "cut"), w.disablePaste && T(window, "paste");
    }
    function T(e, t) {
      e.addEventListener(t, function (e) {
        return (e = e || window.event).returnValue = false, e.preventDefault(), false;
      });
    }
    var D = 8;
    function ce(e) {
      for (var t = function (e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, c = 0; c < e.length; c += 16) {
          var u = n, a = i, l = o, f = r;
          n = I((n = I(I(n, i & o | ~i & r), I(e[c + 0], -680876936))) << 7 | n >>> 25, i), r = I((r = I(I(r, n & i | ~n & o), I(e[c + 1], -389564586))) << 12 | r >>> 20, n), o = I((o = I(I(o, r & n | ~r & i), I(e[c + 2], 606105819))) << 17 | o >>> 15, r), i = I((i = I(I(i, o & r | ~o & n), I(e[c + 3], -1044525330))) << 22 | i >>> 10, o), n = I((n = I(I(n, i & o | ~i & r), I(e[c + 4], -176418897))) << 7 | n >>> 25, i), r = I((r = I(I(r, n & i | ~n & o), I(e[c + 5], 1200080426))) << 12 | r >>> 20, n), o = I((o = I(I(o, r & n | ~r & i), I(e[c + 6], -1473231341))) << 17 | o >>> 15, r), i = I((i = I(I(i, o & r | ~o & n), I(e[c + 7], -45705983))) << 22 | i >>> 10, o), n = I((n = I(I(n, i & o | ~i & r), I(e[c + 8], 1770035416))) << 7 | n >>> 25, i), r = I((r = I(I(r, n & i | ~n & o), I(e[c + 9], -1958414417))) << 12 | r >>> 20, n), o = I((o = I(I(o, r & n | ~r & i), I(e[c + 10], -42063))) << 17 | o >>> 15, r), i = I((i = I(I(i, o & r | ~o & n), I(e[c + 11], -1990404162))) << 22 | i >>> 10, o), n = I((n = I(I(n, i & o | ~i & r), I(e[c + 12], 1804603682))) << 7 | n >>> 25, i), r = I((r = I(I(r, n & i | ~n & o), I(e[c + 13], -40341101))) << 12 | r >>> 20, n), o = I((o = I(I(o, r & n | ~r & i), I(e[c + 14], -1502002290))) << 17 | o >>> 15, r), i = I((i = I(I(i, o & r | ~o & n), I(e[c + 15], 1236535329))) << 22 | i >>> 10, o), n = I((n = I(I(n, i & r | o & ~r), I(e[c + 1], -165796510))) << 5 | n >>> 27, i), r = I((r = I(I(r, n & o | i & ~o), I(e[c + 6], -1069501632))) << 9 | r >>> 23, n), o = I((o = I(I(o, r & i | n & ~i), I(e[c + 11], 643717713))) << 14 | o >>> 18, r), i = I((i = I(I(i, o & n | r & ~n), I(e[c + 0], -373897302))) << 20 | i >>> 12, o), n = I((n = I(I(n, i & r | o & ~r), I(e[c + 5], -701558691))) << 5 | n >>> 27, i), r = I((r = I(I(r, n & o | i & ~o), I(e[c + 10], 38016083))) << 9 | r >>> 23, n), o = I((o = I(I(o, r & i | n & ~i), I(e[c + 15], -660478335))) << 14 | o >>> 18, r), i = I((i = I(I(i, o & n | r & ~n), I(e[c + 4], -405537848))) << 20 | i >>> 12, o), n = I((n = I(I(n, i & r | o & ~r), I(e[c + 9], 568446438))) << 5 | n >>> 27, i), r = I((r = I(I(r, n & o | i & ~o), I(e[c + 14], -1019803690))) << 9 | r >>> 23, n), o = I((o = I(I(o, r & i | n & ~i), I(e[c + 3], -187363961))) << 14 | o >>> 18, r), i = I((i = I(I(i, o & n | r & ~n), I(e[c + 8], 1163531501))) << 20 | i >>> 12, o), n = I((n = I(I(n, i & r | o & ~r), I(e[c + 13], -1444681467))) << 5 | n >>> 27, i), r = I((r = I(I(r, n & o | i & ~o), I(e[c + 2], -51403784))) << 9 | r >>> 23, n), o = I((o = I(I(o, r & i | n & ~i), I(e[c + 7], 1735328473))) << 14 | o >>> 18, r), i = I((i = I(I(i, o & n | r & ~n), I(e[c + 12], -1926607734))) << 20 | i >>> 12, o), n = I((n = I(I(n, i ^ o ^ r), I(e[c + 5], -378558))) << 4 | n >>> 28, i), r = I((r = I(I(r, n ^ i ^ o), I(e[c + 8], -2022574463))) << 11 | r >>> 21, n), o = I((o = I(I(o, r ^ n ^ i), I(e[c + 11], 1839030562))) << 16 | o >>> 16, r), i = I((i = I(I(i, o ^ r ^ n), I(e[c + 14], -35309556))) << 23 | i >>> 9, o), n = I((n = I(I(n, i ^ o ^ r), I(e[c + 1], -1530992060))) << 4 | n >>> 28, i), r = I((r = I(I(r, n ^ i ^ o), I(e[c + 4], 1272893353))) << 11 | r >>> 21, n), o = I((o = I(I(o, r ^ n ^ i), I(e[c + 7], -155497632))) << 16 | o >>> 16, r), i = I((i = I(I(i, o ^ r ^ n), I(e[c + 10], -1094730640))) << 23 | i >>> 9, o), n = I((n = I(I(n, i ^ o ^ r), I(e[c + 13], 681279174))) << 4 | n >>> 28, i), r = I((r = I(I(r, n ^ i ^ o), I(e[c + 0], -358537222))) << 11 | r >>> 21, n), o = I((o = I(I(o, r ^ n ^ i), I(e[c + 3], -722521979))) << 16 | o >>> 16, r), i = I((i = I(I(i, o ^ r ^ n), I(e[c + 6], 76029189))) << 23 | i >>> 9, o), n = I((n = I(I(n, i ^ o ^ r), I(e[c + 9], -640364487))) << 4 | n >>> 28, i), r = I((r = I(I(r, n ^ i ^ o), I(e[c + 12], -421815835))) << 11 | r >>> 21, n), o = I((o = I(I(o, r ^ n ^ i), I(e[c + 15], 530742520))) << 16 | o >>> 16, r), i = I((i = I(I(i, o ^ r ^ n), I(e[c + 2], -995338651))) << 23 | i >>> 9, o), n = I((n = I(I(n, o ^ (i | ~r)), I(e[c + 0], -198630844))) << 6 | n >>> 26, i), r = I((r = I(I(r, i ^ (n | ~o)), I(e[c + 7], 1126891415))) << 10 | r >>> 22, n), o = I((o = I(I(o, n ^ (r | ~i)), I(e[c + 14], -1416354905))) << 15 | o >>> 17, r), i = I((i = I(I(i, r ^ (o | ~n)), I(e[c + 5], -57434055))) << 21 | i >>> 11, o), n = I((n = I(I(n, o ^ (i | ~r)), I(e[c + 12], 1700485571))) << 6 | n >>> 26, i), r = I((r = I(I(r, i ^ (n | ~o)), I(e[c + 3], -1894986606))) << 10 | r >>> 22, n), o = I((o = I(I(o, n ^ (r | ~i)), I(e[c + 10], -1051523))) << 15 | o >>> 17, r), i = I((i = I(I(i, r ^ (o | ~n)), I(e[c + 1], -2054922799))) << 21 | i >>> 11, o), n = I((n = I(I(n, o ^ (i | ~r)), I(e[c + 8], 1873313359))) << 6 | n >>> 26, i), r = I((r = I(I(r, i ^ (n | ~o)), I(e[c + 15], -30611744))) << 10 | r >>> 22, n), o = I((o = I(I(o, n ^ (r | ~i)), I(e[c + 6], -1560198380))) << 15 | o >>> 17, r), i = I((i = I(I(i, r ^ (o | ~n)), I(e[c + 13], 1309151649))) << 21 | i >>> 11, o), n = I((n = I(I(n, o ^ (i | ~r)), I(e[c + 4], -145523070))) << 6 | n >>> 26, i), r = I((r = I(I(r, i ^ (n | ~o)), I(e[c + 11], -1120210379))) << 10 | r >>> 22, n), o = I((o = I(I(o, n ^ (r | ~i)), I(e[c + 2], 718787259))) << 15 | o >>> 17, r), i = I((i = I(I(i, r ^ (o | ~n)), I(e[c + 9], -343485551))) << 21 | i >>> 11, o), n = I(n, u), i = I(i, a), o = I(o, l), r = I(r, f);
        }
        return Array(n, i, o, r);
      }(function (e) {
        for (var t = Array(), n = (1 << D) - 1, i = 0; i < e.length * D; i += D) t[i >> 5] |= (e.charCodeAt(i / D) & n) << i % 32;
        return t;
      }(e), e.length * D), n = "0123456789abcdef", i = "", o = 0; o < 4 * t.length; o++) i += n.charAt(t[o >> 2] >> o % 4 * 8 + 4 & 15) + n.charAt(t[o >> 2] >> o % 4 * 8 & 15);
      return i;
    }
    function I(e, t) {
      var n = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
    }
    (h = j = j || {})[h.Unknown = -1] = "Unknown", h[h.RegToString = 0] = "RegToString", h[h.DefineId = 1] = "DefineId", h[h.Size = 2] = "Size", h[h.DateToString = 3] = "DateToString", h[h.FuncToString = 4] = "FuncToString", h[h.Debugger = 5] = "Debugger", h[h.Performance = 6] = "Performance", h[h.DebugLib = 7] = "DebugLib";
    var j, _ = function () {
      function n(e) {
        var t = e.type, e = e.enabled, e = void 0 === e || e;
        i(this, n), this.type = j.Unknown, this.enabled = true, this.type = t, this.enabled = e, this.enabled && (t = this, J.push(t), this.init());
      }
      return c(n, [{key: "onDevToolOpen", value: function () {
        var e;
        console.warn("You ar not allow to use DEVTOOL! Ä‚ÅÃ¢Â‚Å¹Ã‚Âtype = ".concat(this.type, "Ä‚ÅÃ¢Â‚Å¹Ã¢Â€Â˜")), w.clearIntervalWhenDevOpenTrigger && y(), window.clearTimeout($), w.ondevtoolopen(this.type, ee), e = this.type, t[e] = true;
      }}, {key: "init", value: function () {}}]), n;
    }(), h = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {
        var t = this;
        this.lastTime = 0, this.reg = /./, g(this.reg), this.reg.toString = function () {
          var e;
          return q ? (e = (new Date).getTime(), t.lastTime && e - t.lastTime < 100 ? t.onDevToolOpen() : t.lastTime = e) : F && t.onDevToolOpen(), "";
        };
      }}, {key: "detect", value: function () {
        g(this.reg);
      }}]), t;
    }(), ue = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {
        var e = this;
        this.div = document.createElement("div"), this.div.__defineGetter__("id", function () {
          e.onDevToolOpen();
        }), Object.defineProperty(this.div, "id", {get: function () {
          e.onDevToolOpen();
        }});
      }}, {key: "detect", value: function () {
        g(this.div);
      }}]), t;
    }(), ae = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {
        var e = this;
        this.checkWindowSizeUneven(), window.addEventListener("resize", function () {
          setTimeout(function () {
            e.checkWindowSizeUneven();
          }, 100);
        }, true);
      }}, {key: "detect", value: function () {}}, {key: "checkWindowSizeUneven", value: function () {
        var e = function () {
          if (null != window.devicePixelRatio) return window.devicePixelRatio;
          var e = window.screen;
          return !(null != e || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI;
        }();
        if (false !== e) {
          var t = 200 < window.outerWidth - window.innerWidth * e, e = 300 < window.outerHeight - window.innerHeight * e;
          if (t || e) return this.onDevToolOpen(), false;
          s(this.type);
        }
        return true;
      }}]), t;
    }();
    var E, fe = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {
        var e = this;
        this.count = 0, this.date = new Date, this.date.toString = function () {
          return e.count++, "";
        };
      }}, {key: "detect", value: function () {
        this.count = 0, g(this.date), m(), 2 <= this.count && this.onDevToolOpen();
      }}]), t;
    }(), se = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {
        var e = this;
        this.count = 0, this.func = function () {}, this.func.toString = function () {
          return e.count++, "";
        };
      }}, {key: "detect", value: function () {
        this.count = 0, g(this.func), m(), 2 <= this.count && this.onDevToolOpen();
      }}]), t;
    }(), de = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "detect", value: function () {
        var e = (new Date).getTime();
        100 < (new Date).getTime() - e && this.onDevToolOpen();
      }}]), t;
    }(), ve = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {
        this.maxPrintTime = 0, this.largeObjectArray = G();
      }}, {key: "detect", value: function () {
        var e = this, t = H(function () {
          ie(e.largeObjectArray);
        }), n = H(function () {
          g(e.largeObjectArray);
        });
        if (this.maxPrintTime = Math.max(this.maxPrintTime, n), m(), 0 === t || 0 === this.maxPrintTime) return false;
        t > 10 * this.maxPrintTime && this.onDevToolOpen();
      }}]), t;
    }(), he = function () {
      n(t, _);
      var e = l(t);
      return c(t, [{key: "init", value: function () {}}, {key: "detect", value: function () {
        var e;
        (true === (null == (e = null == (e = window.eruda) ? void 0 : e._devTools) ? void 0 : e._isShow) || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
      }}]), t;
    }(), pe = (e(E = {}, j.RegToString, h), e(E, j.DefineId, ue), e(E, j.Size, ae), e(E, j.DateToString, fe), e(E, j.FuncToString, se), e(E, j.Debugger, de), e(E, j.Performance, ve), e(E, j.DebugLib, he), E);
    function L(e) {
      ne(e), function () {
        if (w.md5) if (ce(function (e) {
          var t = window.location.search, n = window.location.hash;
          if ("" !== (t = "" === t && "" !== n ? "?".concat(n.split("?")[1]) : t) && void 0 !== t) {
            n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), e = t.substr(1).match(n);
            if (null != e) return unescape(e[2]);
          }
          return "";
        }(w.tkName)) === w.md5) return 1;
        return;
      }() || (Z(), re(), ("all" === w.detectors ? Object.keys(pe) : w.detectors).forEach(function (e) {
        new pe[e];
      }));
    }
    var ye, R, z, A;
    return L.md5 = ce, L.version = "0.3.1", L.DetectorType = j, L.isDevToolOpened = W, "undefined" != typeof document && (ye = document.querySelector("[protect]")) && (R = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], z = ["interval"], A = {}, ["md5", "url", "tk-name", "detectors"].concat(R, z).forEach(function (e) {
      var t = ye.getAttribute(e);
      null !== t && (-1 !== z.indexOf(e) ? t = parseInt(t) : -1 !== R.indexOf(e) ? t = "false" !== t : "detector" === e && "all" !== t && (t = t.split(" ")), A[function (e) {
        if (-1 === e.indexOf("-")) return e;
        var t = false;
        return e.split("").map(function (e) {
          return "-" === e ? (t = true, "") : t ? (t = false, e.toUpperCase()) : e;
        }).join("");
      }(e)] = t);
    }), L(A)), L;
  });
  