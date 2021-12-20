var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = require_object_assign();
    var n = 60103;
    var p = 60106;
    exports2.Fragment = 60107;
    exports2.StrictMode = 60108;
    exports2.Profiler = 60114;
    var q = 60109;
    var r = 60110;
    var t = 60112;
    exports2.Suspense = 60113;
    var u = 60115;
    var v = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      w = Symbol.for;
      n = w("react.element");
      p = w("react.portal");
      exports2.Fragment = w("react.fragment");
      exports2.StrictMode = w("react.strict_mode");
      exports2.Profiler = w("react.profiler");
      q = w("react.provider");
      r = w("react.context");
      t = w("react.forward_ref");
      exports2.Suspense = w("react.suspense");
      u = w("react.memo");
      v = w("react.lazy");
    }
    var w;
    var x = typeof Symbol === "function" && Symbol.iterator;
    function y(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = x && a[x] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    function z(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var B = {};
    function C(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = B;
      this.updater = c || A;
    }
    C.prototype.isReactComponent = {};
    C.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error(z(85));
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    C.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function D() {
    }
    D.prototype = C.prototype;
    function E(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = B;
      this.updater = c || A;
    }
    var F = E.prototype = new D();
    F.constructor = E;
    l(F, C.prototype);
    F.isPureReactComponent = true;
    var G = { current: null };
    var H = Object.prototype.hasOwnProperty;
    var I = { key: true, ref: true, __self: true, __source: true };
    function J(a, b, c) {
      var e, d = {}, k = null, h = null;
      if (b != null)
        for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
      var g = arguments.length - 2;
      if (g === 1)
        d.children = c;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        d.children = f;
      }
      if (a && a.defaultProps)
        for (e in g = a.defaultProps, g)
          d[e] === void 0 && (d[e] = g[e]);
      return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
    }
    function K(a, b) {
      return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function L(a) {
      return typeof a === "object" && a !== null && a.$$typeof === n;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var M = /\/+/g;
    function N(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
    }
    function O(a, b, c, e, d) {
      var k = typeof a;
      if (k === "undefined" || k === "boolean")
        a = null;
      var h = false;
      if (a === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case n:
              case p:
                h = true;
            }
        }
      if (h)
        return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
          return a2;
        })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
      h = 0;
      e = e === "" ? "." : e + ":";
      if (Array.isArray(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = e + N(k, g);
          h += O(k, b, c, f, d);
        }
      else if (f = y(a), typeof f === "function")
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
      else if (k === "object")
        throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
      return h;
    }
    function P(a, b, c) {
      if (a == null)
        return a;
      var e = [], d = 0;
      O(a, e, "", "", function(a2) {
        return b.call(c, a2, d++);
      });
      return e;
    }
    function Q(a) {
      if (a._status === -1) {
        var b = a._result;
        b = b();
        a._status = 0;
        a._result = b;
        b.then(function(b2) {
          a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
        }, function(b2) {
          a._status === 0 && (a._status = 2, a._result = b2);
        });
      }
      if (a._status === 1)
        return a._result;
      throw a._result;
    }
    var R = { current: null };
    function S() {
      var a = R.current;
      if (a === null)
        throw Error(z(321));
      return a;
    }
    var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l };
    exports2.Children = { map: P, forEach: function(a, b, c) {
      P(a, function() {
        b.apply(this, arguments);
      }, c);
    }, count: function(a) {
      var b = 0;
      P(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return P(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!L(a))
        throw Error(z(143));
      return a;
    } };
    exports2.Component = C;
    exports2.PureComponent = E;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
    exports2.cloneElement = function(a, b, c) {
      if (a === null || a === void 0)
        throw Error(z(267, a));
      var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = G.current);
        b.key !== void 0 && (d = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        e.children = c;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        e.children = g;
      }
      return {
        $$typeof: n,
        type: a.type,
        key: d,
        ref: k,
        props: e,
        _owner: h
      };
    };
    exports2.createContext = function(a, b) {
      b === void 0 && (b = null);
      a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
      a.Provider = { $$typeof: q, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = J;
    exports2.createFactory = function(a) {
      var b = J.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: t, render: a };
    };
    exports2.isValidElement = L;
    exports2.lazy = function(a) {
      return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
    };
    exports2.useCallback = function(a, b) {
      return S().useCallback(a, b);
    };
    exports2.useContext = function(a, b) {
      return S().useContext(a, b);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useEffect = function(a, b) {
      return S().useEffect(a, b);
    };
    exports2.useImperativeHandle = function(a, b, c) {
      return S().useImperativeHandle(a, b, c);
    };
    exports2.useLayoutEffect = function(a, b) {
      return S().useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return S().useMemo(a, b);
    };
    exports2.useReducer = function(a, b, c) {
      return S().useReducer(a, b, c);
    };
    exports2.useRef = function(a) {
      return S().useRef(a);
    };
    exports2.useState = function(a) {
      return S().useState(a);
    };
    exports2.version = "17.0.2";
  }
});

// ../../node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "../../node_modules/scheduler/cjs/scheduler.production.min.js"(exports2) {
    "use strict";
    var f;
    var g;
    var h;
    var k;
    if (typeof performance === "object" && typeof performance.now === "function") {
      l = performance;
      exports2.unstable_now = function() {
        return l.now();
      };
    } else {
      p = Date, q = p.now();
      exports2.unstable_now = function() {
        return p.now() - q;
      };
    }
    var l;
    var p;
    var q;
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      t = null, u = null, w = function() {
        if (t !== null)
          try {
            var a = exports2.unstable_now();
            t(true, a);
            t = null;
          } catch (b) {
            throw setTimeout(w, 0), b;
          }
      };
      f = function(a) {
        t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
      };
      g = function(a, b) {
        u = setTimeout(a, b);
      };
      h = function() {
        clearTimeout(u);
      };
      exports2.unstable_shouldYield = function() {
        return false;
      };
      k = exports2.unstable_forceFrameRate = function() {
      };
    } else {
      x = window.setTimeout, y = window.clearTimeout;
      if (typeof console !== "undefined") {
        z = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      A = false, B = null, C = -1, D = 5, E = 0;
      exports2.unstable_shouldYield = function() {
        return exports2.unstable_now() >= E;
      };
      k = function() {
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      F = new MessageChannel(), G = F.port2;
      F.port1.onmessage = function() {
        if (B !== null) {
          var a = exports2.unstable_now();
          E = a + D;
          try {
            B(true, a) ? G.postMessage(null) : (A = false, B = null);
          } catch (b) {
            throw G.postMessage(null), b;
          }
        } else
          A = false;
      };
      f = function(a) {
        B = a;
        A || (A = true, G.postMessage(null));
      };
      g = function(a, b) {
        C = x(function() {
          a(exports2.unstable_now());
        }, b);
      };
      h = function() {
        y(C);
        C = -1;
      };
    }
    var t;
    var u;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    function H(a, b) {
      var c = a.length;
      a.push(b);
      a:
        for (; ; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (e !== void 0 && 0 < I(e, b))
            a[d] = b, a[c] = e, c = d;
          else
            break a;
        }
    }
    function J(a) {
      a = a[0];
      return a === void 0 ? null : a;
    }
    function K(a) {
      var b = a[0];
      if (b !== void 0) {
        var c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length; d < e; ) {
              var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
              if (n !== void 0 && 0 > I(n, c))
                r !== void 0 && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
              else if (r !== void 0 && 0 > I(r, c))
                a[d] = r, a[v] = c, d = v;
              else
                break a;
            }
        }
        return b;
      }
      return null;
    }
    function I(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return c !== 0 ? c : a.id - b.id;
    }
    var L = [];
    var M = [];
    var N = 1;
    var O = null;
    var P = 3;
    var Q = false;
    var R = false;
    var S = false;
    function T(a) {
      for (var b = J(M); b !== null; ) {
        if (b.callback === null)
          K(M);
        else if (b.startTime <= a)
          K(M), b.sortIndex = b.expirationTime, H(L, b);
        else
          break;
        b = J(M);
      }
    }
    function U(a) {
      S = false;
      T(a);
      if (!R)
        if (J(L) !== null)
          R = true, f(V2);
        else {
          var b = J(M);
          b !== null && g(U, b.startTime - a);
        }
    }
    function V2(a, b) {
      R = false;
      S && (S = false, h());
      Q = true;
      var c = P;
      try {
        T(b);
        for (O = J(L); O !== null && (!(O.expirationTime > b) || a && !exports2.unstable_shouldYield()); ) {
          var d = O.callback;
          if (typeof d === "function") {
            O.callback = null;
            P = O.priorityLevel;
            var e = d(O.expirationTime <= b);
            b = exports2.unstable_now();
            typeof e === "function" ? O.callback = e : O === J(L) && K(L);
            T(b);
          } else
            K(L);
          O = J(L);
        }
        if (O !== null)
          var m = true;
        else {
          var n = J(M);
          n !== null && g(U, n.startTime - b);
          m = false;
        }
        return m;
      } finally {
        O = null, P = c, Q = false;
      }
    }
    var W = k;
    exports2.unstable_IdlePriority = 5;
    exports2.unstable_ImmediatePriority = 1;
    exports2.unstable_LowPriority = 4;
    exports2.unstable_NormalPriority = 3;
    exports2.unstable_Profiling = null;
    exports2.unstable_UserBlockingPriority = 2;
    exports2.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports2.unstable_continueExecution = function() {
      R || Q || (R = true, f(V2));
    };
    exports2.unstable_getCurrentPriorityLevel = function() {
      return P;
    };
    exports2.unstable_getFirstCallbackNode = function() {
      return J(L);
    };
    exports2.unstable_next = function(a) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = P;
      }
      var c = P;
      P = b;
      try {
        return a();
      } finally {
        P = c;
      }
    };
    exports2.unstable_pauseExecution = function() {
    };
    exports2.unstable_requestPaint = W;
    exports2.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = P;
      P = a;
      try {
        return b();
      } finally {
        P = c;
      }
    };
    exports2.unstable_scheduleCallback = function(a, b, c) {
      var d = exports2.unstable_now();
      typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: N++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, H(M, a), J(L) === null && a === J(M) && (S ? h() : S = true, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = true, f(V2)));
      return a;
    };
    exports2.unstable_wrapCallback = function(a) {
      var b = P;
      return function() {
        var c = P;
        P = b;
        try {
          return a.apply(this, arguments);
        } finally {
          P = c;
        }
      };
    };
  }
});

// ../../node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "../../node_modules/scheduler/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_scheduler_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({
  "../../node_modules/react-dom/cjs/react-dom.production.min.js"(exports2) {
    "use strict";
    var aa = require_react();
    var m = require_object_assign();
    var r = require_scheduler();
    function y(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!aa)
      throw Error(y(227));
    var ba = new Set();
    var ca = {};
    function da(a, b) {
      ea(a, b);
      ea(a + "Capture", b);
    }
    function ea(a, b) {
      ca[a] = b;
      for (a = 0; a < b.length; a++)
        ba.add(b[a]);
    }
    var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = Object.prototype.hasOwnProperty;
    var ja = {};
    var ka = {};
    function la(a) {
      if (ia.call(ka, a))
        return true;
      if (ia.call(ja, a))
        return false;
      if (ha.test(a))
        return ka[a] = true;
      ja[a] = true;
      return false;
    }
    function ma(a, b, c, d) {
      if (c !== null && c.type === 0)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d)
            return false;
          if (c !== null)
            return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return a !== "data-" && a !== "aria-";
        default:
          return false;
      }
    }
    function na(a, b, c, d) {
      if (b === null || typeof b === "undefined" || ma(a, b, c, d))
        return true;
      if (d)
        return false;
      if (c !== null)
        switch (c.type) {
          case 3:
            return !b;
          case 4:
            return b === false;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
      return false;
    }
    function B(a, b, c, d, e, f, g) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var D = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      D[a] = new B(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      D[b] = new B(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      D[a] = new B(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      D[a] = new B(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      D[a] = new B(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      D[a] = new B(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var oa = /[\-:]([a-z])/g;
    function pa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(oa, pa);
      D[b] = new B(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(oa, pa);
      D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(oa, pa);
      D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
    });
    D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function qa(a, b, c, d) {
      var e = D.hasOwnProperty(b) ? D[b] : null;
      var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
      f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
    }
    var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var sa = 60103;
    var ta = 60106;
    var ua = 60107;
    var wa = 60108;
    var xa = 60114;
    var ya = 60109;
    var za = 60110;
    var Aa = 60112;
    var Ba = 60113;
    var Ca = 60120;
    var Da = 60115;
    var Ea = 60116;
    var Fa = 60121;
    var Ga = 60128;
    var Ha = 60129;
    var Ia = 60130;
    var Ja = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
      E = Symbol.for;
      sa = E("react.element");
      ta = E("react.portal");
      ua = E("react.fragment");
      wa = E("react.strict_mode");
      xa = E("react.profiler");
      ya = E("react.provider");
      za = E("react.context");
      Aa = E("react.forward_ref");
      Ba = E("react.suspense");
      Ca = E("react.suspense_list");
      Da = E("react.memo");
      Ea = E("react.lazy");
      Fa = E("react.block");
      E("react.scope");
      Ga = E("react.opaque.id");
      Ha = E("react.debug_trace_mode");
      Ia = E("react.offscreen");
      Ja = E("react.legacy_hidden");
    }
    var E;
    var Ka = typeof Symbol === "function" && Symbol.iterator;
    function La(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = Ka && a[Ka] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    var Ma;
    function Na(a) {
      if (Ma === void 0)
        try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          Ma = b && b[1] || "";
        }
      return "\n" + Ma + a;
    }
    var Oa = false;
    function Pa(a, b) {
      if (!a || Oa)
        return "";
      Oa = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b)
          if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (k) {
              var d = k;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (k) {
              d = k;
            }
            a.call(b.prototype);
          }
        else {
          try {
            throw Error();
          } catch (k) {
            d = k;
          }
          a();
        }
      } catch (k) {
        if (k && d && typeof k.stack === "string") {
          for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
            h--;
          for (; 1 <= g && 0 <= h; g--, h--)
            if (e[g] !== f[h]) {
              if (g !== 1 || h !== 1) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h])
                    return "\n" + e[g].replace(" at new ", " at ");
                while (1 <= g && 0 <= h);
              }
              break;
            }
        }
      } finally {
        Oa = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
    }
    function Qa(a) {
      switch (a.tag) {
        case 5:
          return Na(a.type);
        case 16:
          return Na("Lazy");
        case 13:
          return Na("Suspense");
        case 19:
          return Na("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Pa(a.type, false), a;
        case 11:
          return a = Pa(a.type.render, false), a;
        case 22:
          return a = Pa(a.type._render, false), a;
        case 1:
          return a = Pa(a.type, true), a;
        default:
          return "";
      }
    }
    function Ra(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case ua:
          return "Fragment";
        case ta:
          return "Portal";
        case xa:
          return "Profiler";
        case wa:
          return "StrictMode";
        case Ba:
          return "Suspense";
        case Ca:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case za:
            return (a.displayName || "Context") + ".Consumer";
          case ya:
            return (a._context.displayName || "Context") + ".Provider";
          case Aa:
            var b = a.render;
            b = b.displayName || b.name || "";
            return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
          case Da:
            return Ra(a.type);
          case Fa:
            return Ra(a._render);
          case Ea:
            b = a._payload;
            a = a._init;
            try {
              return Ra(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a)
        return false;
      var b = a._valueTracker;
      if (!b)
        return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || (typeof document !== "undefined" ? document : void 0);
      if (typeof a === "undefined")
        return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
      c = Sa(b.value != null ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
    }
    function $a(a, b) {
      b = b.checked;
      b != null && qa(a, "checked", b, false);
    }
    function ab(a, b) {
      $a(a, b);
      var c = Sa(b.value), d = b.type;
      if (c != null)
        if (d === "number") {
          if (c === 0 && a.value === "" || a.value != c)
            a.value = "" + c;
        } else
          a.value !== "" + c && (a.value = "" + c);
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
      b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
    }
    function cb(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
          return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      c !== "" && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      c !== "" && (a.name = c);
    }
    function bb(a, b, c) {
      if (b !== "number" || Xa(a.ownerDocument) !== a)
        c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    function db(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    function eb(a, b) {
      a = m({ children: void 0 }, b);
      if (b = db(b.children))
        a.children = b;
      return a;
    }
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++)
          b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++)
          e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          b !== null || a[e].disabled || (b = a[e]);
        }
        b !== null && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (b.dangerouslySetInnerHTML != null)
        throw Error(y(91));
      return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (c == null) {
        c = b.children;
        b = b.defaultValue;
        if (c != null) {
          if (b != null)
            throw Error(y(92));
          if (Array.isArray(c)) {
            if (!(1 >= c.length))
              throw Error(y(93));
            c = c[0];
          }
          b = c;
        }
        b == null && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
      d != null && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
    }
    var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
    function lb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function mb(a, b) {
      return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
    }
    var nb;
    var ob = function(a) {
      return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if (a.namespaceURI !== kb.svg || "innerHTML" in a)
        a.innerHTML = b;
      else {
        nb = nb || document.createElement("div");
        nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = nb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b.firstChild; )
          a.appendChild(b.firstChild);
      }
    });
    function pb(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && c.nodeType === 3) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var qb = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var rb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qb).forEach(function(a) {
      rb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        qb[b] = qb[a];
      });
    });
    function sb(a, b, c) {
      return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
    }
    function tb(a, b) {
      a = a.style;
      for (var c in b)
        if (b.hasOwnProperty(c)) {
          var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
          c === "float" && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
    }
    var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function vb(a, b) {
      if (b) {
        if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
          throw Error(y(137, a));
        if (b.dangerouslySetInnerHTML != null) {
          if (b.children != null)
            throw Error(y(60));
          if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
            throw Error(y(61));
        }
        if (b.style != null && typeof b.style !== "object")
          throw Error(y(62));
      }
    }
    function wb(a, b) {
      if (a.indexOf("-") === -1)
        return typeof b.is === "string";
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return a.nodeType === 3 ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if (typeof yb !== "function")
          throw Error(y(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b)
          for (a = 0; a < b.length; a++)
            Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb(a, b, c, d, e) {
      return a(b, c, d, e);
    }
    function Ib() {
    }
    var Jb = Gb;
    var Kb = false;
    var Lb = false;
    function Mb() {
      if (zb !== null || Ab !== null)
        Ib(), Fb();
    }
    function Nb(a, b, c) {
      if (Lb)
        return a(b, c);
      Lb = true;
      try {
        return Jb(a, b, c);
      } finally {
        Lb = false, Mb();
      }
    }
    function Ob(a, b) {
      var c = a.stateNode;
      if (c === null)
        return null;
      var d = Db(c);
      if (d === null)
        return null;
      c = d[b];
      a:
        switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
            a = !d;
            break a;
          default:
            a = false;
        }
      if (a)
        return null;
      if (c && typeof c !== "function")
        throw Error(y(231, b, typeof c));
      return c;
    }
    var Pb = false;
    if (fa)
      try {
        Qb = {};
        Object.defineProperty(Qb, "passive", { get: function() {
          Pb = true;
        } });
        window.addEventListener("test", Qb, Qb);
        window.removeEventListener("test", Qb, Qb);
      } catch (a) {
        Pb = false;
      }
    var Qb;
    function Rb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (n) {
        this.onError(n);
      }
    }
    var Sb = false;
    var Tb = null;
    var Ub = false;
    var Vb = null;
    var Wb = { onError: function(a) {
      Sb = true;
      Tb = a;
    } };
    function Xb(a, b, c, d, e, f, g, h, k) {
      Sb = false;
      Tb = null;
      Rb.apply(Wb, arguments);
    }
    function Yb(a, b, c, d, e, f, g, h, k) {
      Xb.apply(this, arguments);
      if (Sb) {
        if (Sb) {
          var l = Tb;
          Sb = false;
          Tb = null;
        } else
          throw Error(y(198));
        Ub || (Ub = true, Vb = l);
      }
    }
    function Zb(a) {
      var b = a, c = a;
      if (a.alternate)
        for (; b.return; )
          b = b.return;
      else {
        a = b;
        do
          b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
        while (a);
      }
      return b.tag === 3 ? c : null;
    }
    function $b(a) {
      if (a.tag === 13) {
        var b = a.memoizedState;
        b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
        if (b !== null)
          return b.dehydrated;
      }
      return null;
    }
    function ac(a) {
      if (Zb(a) !== a)
        throw Error(y(188));
    }
    function bc(a) {
      var b = a.alternate;
      if (!b) {
        b = Zb(a);
        if (b === null)
          throw Error(y(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (e === null)
          break;
        var f = e.alternate;
        if (f === null) {
          d = e.return;
          if (d !== null) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c)
              return ac(e), a;
            if (f === d)
              return ac(e), b;
            f = f.sibling;
          }
          throw Error(y(188));
        }
        if (c.return !== d.return)
          c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g)
              throw Error(y(189));
          }
        }
        if (c.alternate !== d)
          throw Error(y(190));
      }
      if (c.tag !== 3)
        throw Error(y(188));
      return c.stateNode.current === c ? a : b;
    }
    function cc(a) {
      a = bc(a);
      if (!a)
        return null;
      for (var b = a; ; ) {
        if (b.tag === 5 || b.tag === 6)
          return b;
        if (b.child)
          b.child.return = b, b = b.child;
        else {
          if (b === a)
            break;
          for (; !b.sibling; ) {
            if (!b.return || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return null;
    }
    function dc(a, b) {
      for (var c = a.alternate; b !== null; ) {
        if (b === a || b === c)
          return true;
        b = b.return;
      }
      return false;
    }
    var ec;
    var fc;
    var gc;
    var hc;
    var ic = false;
    var jc = [];
    var kc = null;
    var lc = null;
    var mc = null;
    var nc = new Map();
    var oc = new Map();
    var pc = [];
    var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function rc(a, b, c, d, e) {
      return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
    }
    function sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          kc = null;
          break;
        case "dragenter":
        case "dragleave":
          lc = null;
          break;
        case "mouseover":
        case "mouseout":
          mc = null;
          break;
        case "pointerover":
        case "pointerout":
          nc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          oc.delete(b.pointerId);
      }
    }
    function tc(a, b, c, d, e, f) {
      if (a === null || a.nativeEvent !== f)
        return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      e !== null && b.indexOf(e) === -1 && b.push(e);
      return a;
    }
    function uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return kc = tc(kc, a, b, c, d, e), true;
        case "dragenter":
          return lc = tc(lc, a, b, c, d, e), true;
        case "mouseover":
          return mc = tc(mc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function vc(a) {
      var b = wc(a.target);
      if (b !== null) {
        var c = Zb(b);
        if (c !== null) {
          if (b = c.tag, b === 13) {
            if (b = $b(c), b !== null) {
              a.blockedOn = b;
              hc(a.lanePriority, function() {
                r.unstable_runWithPriority(a.priority, function() {
                  gc(c);
                });
              });
              return;
            }
          } else if (b === 3 && c.stateNode.hydrate) {
            a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function xc(a) {
      if (a.blockedOn !== null)
        return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (c !== null)
          return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function zc(a, b, c) {
      xc(a) && c.delete(b);
    }
    function Ac() {
      for (ic = false; 0 < jc.length; ) {
        var a = jc[0];
        if (a.blockedOn !== null) {
          a = Cb(a.blockedOn);
          a !== null && ec(a);
          break;
        }
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (c !== null) {
            a.blockedOn = c;
            break;
          }
          b.shift();
        }
        a.blockedOn === null && jc.shift();
      }
      kc !== null && xc(kc) && (kc = null);
      lc !== null && xc(lc) && (lc = null);
      mc !== null && xc(mc) && (mc = null);
      nc.forEach(zc);
      oc.forEach(zc);
    }
    function Bc(a, b) {
      a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
    }
    function Cc(a) {
      function b(b2) {
        return Bc(b2, a);
      }
      if (0 < jc.length) {
        Bc(jc[0], a);
        for (var c = 1; c < jc.length; c++) {
          var d = jc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      kc !== null && Bc(kc, a);
      lc !== null && Bc(lc, a);
      mc !== null && Bc(mc, a);
      nc.forEach(b);
      oc.forEach(b);
      for (c = 0; c < pc.length; c++)
        d = pc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
        vc(c), c.blockedOn === null && pc.shift();
    }
    function Dc(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") };
    var Fc = {};
    var Gc = {};
    fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
    function Hc(a) {
      if (Fc[a])
        return Fc[a];
      if (!Ec[a])
        return a;
      var b = Ec[a], c;
      for (c in b)
        if (b.hasOwnProperty(c) && c in Gc)
          return Fc[a] = b[c];
      return a;
    }
    var Ic = Hc("animationend");
    var Jc = Hc("animationiteration");
    var Kc = Hc("animationstart");
    var Lc = Hc("transitionend");
    var Mc = new Map();
    var Nc = new Map();
    var Oc = [
      "abort",
      "abort",
      Ic,
      "animationEnd",
      Jc,
      "animationIteration",
      Kc,
      "animationStart",
      "canplay",
      "canPlay",
      "canplaythrough",
      "canPlayThrough",
      "durationchange",
      "durationChange",
      "emptied",
      "emptied",
      "encrypted",
      "encrypted",
      "ended",
      "ended",
      "error",
      "error",
      "gotpointercapture",
      "gotPointerCapture",
      "load",
      "load",
      "loadeddata",
      "loadedData",
      "loadedmetadata",
      "loadedMetadata",
      "loadstart",
      "loadStart",
      "lostpointercapture",
      "lostPointerCapture",
      "playing",
      "playing",
      "progress",
      "progress",
      "seeking",
      "seeking",
      "stalled",
      "stalled",
      "suspend",
      "suspend",
      "timeupdate",
      "timeUpdate",
      Lc,
      "transitionEnd",
      "waiting",
      "waiting"
    ];
    function Pc(a, b) {
      for (var c = 0; c < a.length; c += 2) {
        var d = a[c], e = a[c + 1];
        e = "on" + (e[0].toUpperCase() + e.slice(1));
        Nc.set(d, b);
        Mc.set(d, e);
        da(e, [d]);
      }
    }
    var Qc = r.unstable_now;
    Qc();
    var F = 8;
    function Rc(a) {
      if ((1 & a) !== 0)
        return F = 15, 1;
      if ((2 & a) !== 0)
        return F = 14, 2;
      if ((4 & a) !== 0)
        return F = 13, 4;
      var b = 24 & a;
      if (b !== 0)
        return F = 12, b;
      if ((a & 32) !== 0)
        return F = 11, 32;
      b = 192 & a;
      if (b !== 0)
        return F = 10, b;
      if ((a & 256) !== 0)
        return F = 9, 256;
      b = 3584 & a;
      if (b !== 0)
        return F = 8, b;
      if ((a & 4096) !== 0)
        return F = 7, 4096;
      b = 4186112 & a;
      if (b !== 0)
        return F = 6, b;
      b = 62914560 & a;
      if (b !== 0)
        return F = 5, b;
      if (a & 67108864)
        return F = 4, 67108864;
      if ((a & 134217728) !== 0)
        return F = 3, 134217728;
      b = 805306368 & a;
      if (b !== 0)
        return F = 2, b;
      if ((1073741824 & a) !== 0)
        return F = 1, 1073741824;
      F = 8;
      return a;
    }
    function Sc(a) {
      switch (a) {
        case 99:
          return 15;
        case 98:
          return 10;
        case 97:
        case 96:
          return 8;
        case 95:
          return 2;
        default:
          return 0;
      }
    }
    function Tc(a) {
      switch (a) {
        case 15:
        case 14:
          return 99;
        case 13:
        case 12:
        case 11:
        case 10:
          return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97;
        case 3:
        case 2:
        case 1:
          return 95;
        case 0:
          return 90;
        default:
          throw Error(y(358, a));
      }
    }
    function Uc(a, b) {
      var c = a.pendingLanes;
      if (c === 0)
        return F = 0;
      var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
      if (f !== 0)
        d = f, e = F = 15;
      else if (f = c & 134217727, f !== 0) {
        var k = f & ~g;
        k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
      } else
        f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
      if (d === 0)
        return 0;
      d = 31 - Vc(d);
      d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
      if (b !== 0 && b !== d && (b & g) === 0) {
        Rc(b);
        if (e <= F)
          return b;
        F = e;
      }
      b = a.entangledLanes;
      if (b !== 0)
        for (a = a.entanglements, b &= d; 0 < b; )
          c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function Wc(a) {
      a = a.pendingLanes & -1073741825;
      return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function Xc(a, b) {
      switch (a) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
        case 10:
          return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
        case 8:
          return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
        case 2:
          return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
      }
      throw Error(y(358, a));
    }
    function Yc(a) {
      return a & -a;
    }
    function Zc(a) {
      for (var b = [], c = 0; 31 > c; c++)
        b.push(a);
      return b;
    }
    function $c(a, b, c) {
      a.pendingLanes |= b;
      var d = b - 1;
      a.suspendedLanes &= d;
      a.pingedLanes &= d;
      a = a.eventTimes;
      b = 31 - Vc(b);
      a[b] = c;
    }
    var Vc = Math.clz32 ? Math.clz32 : ad;
    var bd = Math.log;
    var cd = Math.LN2;
    function ad(a) {
      return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
    }
    var dd = r.unstable_UserBlockingPriority;
    var ed = r.unstable_runWithPriority;
    var fd = true;
    function gd(a, b, c, d) {
      Kb || Ib();
      var e = hd, f = Kb;
      Kb = true;
      try {
        Hb(e, a, b, c, d);
      } finally {
        (Kb = f) || Mb();
      }
    }
    function id(a, b, c, d) {
      ed(dd, hd.bind(null, a, b, c, d));
    }
    function hd(a, b, c, d) {
      if (fd) {
        var e;
        if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
          a = rc(null, a, b, c, d), jc.push(a);
        else {
          var f = yc(a, b, c, d);
          if (f === null)
            e && sc(a, d);
          else {
            if (e) {
              if (-1 < qc.indexOf(a)) {
                a = rc(f, a, b, c, d);
                jc.push(a);
                return;
              }
              if (uc(f, a, b, c, d))
                return;
              sc(a, d);
            }
            jd(a, b, d, null, c);
          }
        }
      }
    }
    function yc(a, b, c, d) {
      var e = xb(d);
      e = wc(e);
      if (e !== null) {
        var f = Zb(e);
        if (f === null)
          e = null;
        else {
          var g = f.tag;
          if (g === 13) {
            e = $b(f);
            if (e !== null)
              return e;
            e = null;
          } else if (g === 3) {
            if (f.stateNode.hydrate)
              return f.tag === 3 ? f.stateNode.containerInfo : null;
            e = null;
          } else
            f !== e && (e = null);
        }
      }
      jd(a, b, d, e, c);
      return null;
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md)
        return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++)
        ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
        ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
      a === 10 && (a = 13);
      return 32 <= a || a === 13 ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a)
          a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      m(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = m({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = m({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = m({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = m({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = m({}, sd, { data: 0 });
    var Ld = rd(Kd);
    var Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = m({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if (b !== "Unidentified")
          return b;
      }
      return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return a.type === "keypress" ? od(a) : 0;
    }, keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }, which: function(a) {
      return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = m({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = fa && "CompositionEvent" in window;
    var be = null;
    fa && "documentMode" in document && (be = document.documentMode);
    var ce = fa && "TextEvent" in window && !be;
    var de = fa && (!ae || be && 8 < be && 11 >= be);
    var ee = String.fromCharCode(32);
    var fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return $d.indexOf(b.keyCode) !== -1;
        case "keydown":
          return b.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return typeof a === "object" && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (b.which !== 32)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie)
        return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length)
              return b.char;
            if (b.which)
              return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && b.locale !== "ko" ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null;
    var qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b))
        return a;
    }
    function ve(a, b) {
      if (a === "change")
        return b;
    }
    var we = false;
    if (fa) {
      if (fa) {
        ye = "oninput" in document;
        if (!ye) {
          ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = typeof ze.oninput === "function";
        }
        xe = ye;
      } else
        xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    var xe;
    var ye;
    var ze;
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if (a.propertyName === "value" && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        a = re;
        if (Kb)
          a(b);
        else {
          Kb = true;
          try {
            Gb(a, b);
          } finally {
            Kb = false, Mb();
          }
        }
      }
    }
    function Ce(a, b, c) {
      a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
    }
    function De(a) {
      if (a === "selectionchange" || a === "keyup" || a === "keydown")
        return te(qe);
    }
    function Ee(a, b) {
      if (a === "click")
        return te(b);
    }
    function Fe(a, b) {
      if (a === "input" || a === "change")
        return te(b);
    }
    function Ge(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = typeof Object.is === "function" ? Object.is : Ge;
    var Ie = Object.prototype.hasOwnProperty;
    function Je(a, b) {
      if (He(a, b))
        return true;
      if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
        return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length)
        return false;
      for (d = 0; d < c.length; d++)
        if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
          return false;
      return true;
    }
    function Ke(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Le(a, b) {
      var c = Ke(a);
      a = 0;
      for (var d; c; ) {
        if (c.nodeType === 3) {
          d = a + c.textContent.length;
          if (a <= b && d >= b)
            return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Ke(c);
      }
    }
    function Me(a, b) {
      return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Ne() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = typeof b.contentWindow.location.href === "string";
        } catch (d) {
          c = false;
        }
        if (c)
          a = b.contentWindow;
        else
          break;
        b = Xa(a.document);
      }
      return b;
    }
    function Oe(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
    }
    var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
      Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    Pc(Oc, 2);
    for (Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
      Nc.set(Ve[We], 0);
    var Ve;
    var We;
    ea("onMouseEnter", ["mouseout", "mouseover"]);
    ea("onMouseLeave", ["mouseout", "mouseover"]);
    ea("onPointerEnter", ["pointerout", "pointerover"]);
    ea("onPointerLeave", ["pointerout", "pointerover"]);
    da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
    function Ze(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Yb(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = (b & 4) !== 0;
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b)
            for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped())
                break a;
              Ze(e, h, l);
              f = k;
            }
          else
            for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped())
                break a;
              Ze(e, h, l);
              f = k;
            }
        }
      }
      if (Ub)
        throw a = Vb, Ub = false, Vb = null, a;
    }
    function G(a, b) {
      var c = $e(b), d = a + "__bubble";
      c.has(d) || (af(b, a, 2, false), c.add(d));
    }
    var bf = "_reactListening" + Math.random().toString(36).slice(2);
    function cf(a) {
      a[bf] || (a[bf] = true, ba.forEach(function(b) {
        Ye.has(b) || df(b, false, a, null);
        df(b, true, a, null);
      }));
    }
    function df(a, b, c, d) {
      var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
      a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
      if (d !== null && !b && Ye.has(a)) {
        if (a !== "scroll")
          return;
        e |= 2;
        f = d;
      }
      var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
      g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
    }
    function af(a, b, c, d) {
      var e = Nc.get(b);
      switch (e === void 0 ? 2 : e) {
        case 0:
          e = gd;
          break;
        case 1:
          e = id;
          break;
        default:
          e = hd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
      d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function jd(a, b, c, d, e) {
      var f = d;
      if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
        a:
          for (; ; ) {
            if (d === null)
              return;
            var g = d.tag;
            if (g === 3 || g === 4) {
              var h = d.stateNode.containerInfo;
              if (h === e || h.nodeType === 8 && h.parentNode === e)
                break;
              if (g === 4)
                for (g = d.return; g !== null; ) {
                  var k = g.tag;
                  if (k === 3 || k === 4) {
                    if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                      return;
                  }
                  g = g.return;
                }
              for (; h !== null; ) {
                g = wc(h);
                if (g === null)
                  return;
                k = g.tag;
                if (k === 5 || k === 6) {
                  d = f = g;
                  continue a;
                }
                h = h.parentNode;
              }
            }
            d = d.return;
          }
      Nb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = Mc.get(a);
          if (h2 !== void 0) {
            var k2 = td, x = a;
            switch (a) {
              case "keypress":
                if (od(c) === 0)
                  break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                x = "focus";
                k2 = Fd;
                break;
              case "focusout":
                x = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (c.button === 2)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case Ic:
              case Jc:
              case Kc:
                k2 = Hd;
                break;
              case Lc:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
            w = [];
            for (var t = d2, q; t !== null; ) {
              q = t;
              var v = q.stateNode;
              q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
              if (z)
                break;
              t = t.return;
            }
            0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({ event: h2, listeners: w }));
          }
        }
        if ((b & 7) === 0) {
          a: {
            h2 = a === "mouseover" || a === "pointerover";
            k2 = a === "mouseout" || a === "pointerout";
            if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
              break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
                  x = null;
              } else
                k2 = null, x = d2;
              if (k2 !== x) {
                w = Bd;
                v = "onMouseLeave";
                u = "onMouseEnter";
                t = "mouse";
                if (a === "pointerout" || a === "pointerover")
                  w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
                z = k2 == null ? h2 : ue(k2);
                q = x == null ? h2 : ue(x);
                h2 = new w(v, t + "leave", k2, c, e2);
                h2.target = z;
                h2.relatedTarget = q;
                v = null;
                wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
                z = v;
                if (k2 && x)
                  b: {
                    w = k2;
                    u = x;
                    t = 0;
                    for (q = w; q; q = gf(q))
                      t++;
                    q = 0;
                    for (v = u; v; v = gf(v))
                      q++;
                    for (; 0 < t - q; )
                      w = gf(w), t--;
                    for (; 0 < q - t; )
                      u = gf(u), q--;
                    for (; t--; ) {
                      if (w === u || u !== null && w === u.alternate)
                        break b;
                      w = gf(w);
                      u = gf(u);
                    }
                    w = null;
                  }
                else
                  w = null;
                k2 !== null && hf(g2, h2, k2, w, false);
                x !== null && z !== null && hf(g2, z, x, w, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if (k2 === "select" || k2 === "input" && h2.type === "file")
              var J = ve;
            else if (me(h2))
              if (we)
                J = Fe;
              else {
                J = De;
                var K = Ce;
              }
            else
              (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
            if (J && (J = J(a, d2))) {
              ne(g2, J, c, e2);
              break a;
            }
            K && K(a, h2, d2);
            a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
          }
          K = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(K) || K.contentEditable === "true")
                Qe = K, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var Q;
          if (ae)
            b: {
              switch (a) {
                case "compositionstart":
                  var L = "onCompositionStart";
                  break b;
                case "compositionend":
                  L = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  L = "onCompositionUpdate";
                  break b;
              }
              L = void 0;
            }
          else
            ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
          L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({ event: L, listeners: K }), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
          if (Q = ce ? je(a, c) : ke(a, c))
            d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = Q);
        }
        se(g2, b);
      });
    }
    function ef(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; a !== null; ) {
        var e = a, f = e.stateNode;
        e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function gf(a) {
      if (a === null)
        return null;
      do
        a = a.return;
      while (a && a.tag !== 5);
      return a ? a : null;
    }
    function hf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; c !== null && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (k !== null && k === d)
          break;
        h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
        c = c.return;
      }
      g.length !== 0 && a.push({ event: b, listeners: g });
    }
    function jf() {
    }
    var kf = null;
    var lf = null;
    function mf(a, b) {
      switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!b.autoFocus;
      }
      return false;
    }
    function nf(a, b) {
      return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
    }
    var of = typeof setTimeout === "function" ? setTimeout : void 0;
    var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
    function qf(a) {
      a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
    }
    function rf(a) {
      for (; a != null; a = a.nextSibling) {
        var b = a.nodeType;
        if (b === 1 || b === 3)
          break;
      }
      return a;
    }
    function sf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "$" || c === "$!" || c === "$?") {
            if (b === 0)
              return a;
            b--;
          } else
            c === "/$" && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var tf = 0;
    function uf(a) {
      return { $$typeof: Ga, toString: a, valueOf: a };
    }
    var vf = Math.random().toString(36).slice(2);
    var wf = "__reactFiber$" + vf;
    var xf = "__reactProps$" + vf;
    var ff = "__reactContainer$" + vf;
    var yf = "__reactEvents$" + vf;
    function wc(a) {
      var b = a[wf];
      if (b)
        return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[ff] || c[wf]) {
          c = b.alternate;
          if (b.child !== null || c !== null && c.child !== null)
            for (a = sf(a); a !== null; ) {
              if (c = a[wf])
                return c;
              a = sf(a);
            }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[wf] || a[ff];
      return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
    }
    function ue(a) {
      if (a.tag === 5 || a.tag === 6)
        return a.stateNode;
      throw Error(y(33));
    }
    function Db(a) {
      return a[xf] || null;
    }
    function $e(a) {
      var b = a[yf];
      b === void 0 && (b = a[yf] = new Set());
      return b;
    }
    var zf = [];
    var Af = -1;
    function Bf(a) {
      return { current: a };
    }
    function H(a) {
      0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
    }
    function I(a, b) {
      Af++;
      zf[Af] = a.current;
      a.current = b;
    }
    var Cf = {};
    var M = Bf(Cf);
    var N = Bf(false);
    var Df = Cf;
    function Ef(a, b) {
      var c = a.type.contextTypes;
      if (!c)
        return Cf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
        return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c)
        e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Ff(a) {
      a = a.childContextTypes;
      return a !== null && a !== void 0;
    }
    function Gf() {
      H(N);
      H(M);
    }
    function Hf(a, b, c) {
      if (M.current !== Cf)
        throw Error(y(168));
      I(M, b);
      I(N, c);
    }
    function If(a, b, c) {
      var d = a.stateNode;
      a = b.childContextTypes;
      if (typeof d.getChildContext !== "function")
        return c;
      d = d.getChildContext();
      for (var e in d)
        if (!(e in a))
          throw Error(y(108, Ra(b) || "Unknown", e));
      return m({}, c, d);
    }
    function Jf(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
      Df = M.current;
      I(M, a);
      I(N, N.current);
      return true;
    }
    function Kf(a, b, c) {
      var d = a.stateNode;
      if (!d)
        throw Error(y(169));
      c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
      I(N, c);
    }
    var Lf = null;
    var Mf = null;
    var Nf = r.unstable_runWithPriority;
    var Of = r.unstable_scheduleCallback;
    var Pf = r.unstable_cancelCallback;
    var Qf = r.unstable_shouldYield;
    var Rf = r.unstable_requestPaint;
    var Sf = r.unstable_now;
    var Tf = r.unstable_getCurrentPriorityLevel;
    var Uf = r.unstable_ImmediatePriority;
    var Vf = r.unstable_UserBlockingPriority;
    var Wf = r.unstable_NormalPriority;
    var Xf = r.unstable_LowPriority;
    var Yf = r.unstable_IdlePriority;
    var Zf = {};
    var $f = Rf !== void 0 ? Rf : function() {
    };
    var ag = null;
    var bg = null;
    var cg = false;
    var dg = Sf();
    var O = 1e4 > dg ? Sf : function() {
      return Sf() - dg;
    };
    function eg() {
      switch (Tf()) {
        case Uf:
          return 99;
        case Vf:
          return 98;
        case Wf:
          return 97;
        case Xf:
          return 96;
        case Yf:
          return 95;
        default:
          throw Error(y(332));
      }
    }
    function fg(a) {
      switch (a) {
        case 99:
          return Uf;
        case 98:
          return Vf;
        case 97:
          return Wf;
        case 96:
          return Xf;
        case 95:
          return Yf;
        default:
          throw Error(y(332));
      }
    }
    function gg(a, b) {
      a = fg(a);
      return Nf(a, b);
    }
    function hg(a, b, c) {
      a = fg(a);
      return Of(a, b, c);
    }
    function ig() {
      if (bg !== null) {
        var a = bg;
        bg = null;
        Pf(a);
      }
      jg();
    }
    function jg() {
      if (!cg && ag !== null) {
        cg = true;
        var a = 0;
        try {
          var b = ag;
          gg(99, function() {
            for (; a < b.length; a++) {
              var c = b[a];
              do
                c = c(true);
              while (c !== null);
            }
          });
          ag = null;
        } catch (c) {
          throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
        } finally {
          cg = false;
        }
      }
    }
    var kg = ra.ReactCurrentBatchConfig;
    function lg(a, b) {
      if (a && a.defaultProps) {
        b = m({}, b);
        a = a.defaultProps;
        for (var c in a)
          b[c] === void 0 && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    var mg = Bf(null);
    var ng = null;
    var og = null;
    var pg = null;
    function qg() {
      pg = og = ng = null;
    }
    function rg(a) {
      var b = mg.current;
      H(mg);
      a.type._context._currentValue = b;
    }
    function sg(a, b) {
      for (; a !== null; ) {
        var c = a.alternate;
        if ((a.childLanes & b) === b)
          if (c === null || (c.childLanes & b) === b)
            break;
          else
            c.childLanes |= b;
        else
          a.childLanes |= b, c !== null && (c.childLanes |= b);
        a = a.return;
      }
    }
    function tg(a, b) {
      ng = a;
      pg = og = null;
      a = a.dependencies;
      a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
    }
    function vg(a, b) {
      if (pg !== a && b !== false && b !== 0) {
        if (typeof b !== "number" || b === 1073741823)
          pg = a, b = 1073741823;
        b = { context: a, observedBits: b, next: null };
        if (og === null) {
          if (ng === null)
            throw Error(y(308));
          og = b;
          ng.dependencies = { lanes: 0, firstContext: b, responders: null };
        } else
          og = og.next = b;
      }
      return a._currentValue;
    }
    var wg = false;
    function xg(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function yg(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function zg(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function Ag(a, b) {
      a = a.updateQueue;
      if (a !== null) {
        a = a.shared;
        var c = a.pending;
        c === null ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
    }
    function Bg(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (d !== null && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (c !== null) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            f === null ? e = f = g : f = f.next = g;
            c = c.next;
          } while (c !== null);
          f === null ? e = f = b : f = f.next = b;
        } else
          e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      a === null ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function Cg(a, b, c, d) {
      var e = a.updateQueue;
      wg = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (h !== null) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        g === null ? f = l : g.next = l;
        g = k;
        var n = a.alternate;
        if (n !== null) {
          n = n.updateQueue;
          var A = n.lastBaseUpdate;
          A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
        }
      }
      if (f !== null) {
        A = e.baseState;
        g = 0;
        n = l = k = null;
        do {
          h = f.lane;
          var p = f.eventTime;
          if ((d & h) === h) {
            n !== null && (n = n.next = {
              eventTime: p,
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null
            });
            a: {
              var C = a, x = f;
              h = b;
              p = c;
              switch (x.tag) {
                case 1:
                  C = x.payload;
                  if (typeof C === "function") {
                    A = C.call(p, A, h);
                    break a;
                  }
                  A = C;
                  break a;
                case 3:
                  C.flags = C.flags & -4097 | 64;
                case 0:
                  C = x.payload;
                  h = typeof C === "function" ? C.call(p, A, h) : C;
                  if (h === null || h === void 0)
                    break a;
                  A = m({}, A, h);
                  break a;
                case 2:
                  wg = true;
              }
            }
            f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
          } else
            p = { eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
          f = f.next;
          if (f === null)
            if (h = e.shared.pending, h === null)
              break;
            else
              f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        } while (1);
        n === null && (k = A);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = n;
        Dg |= g;
        a.lanes = g;
        a.memoizedState = A;
      }
    }
    function Eg(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (a !== null)
        for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (e !== null) {
            d.callback = null;
            d = c;
            if (typeof e !== "function")
              throw Error(y(191, e));
            e.call(d);
          }
        }
    }
    var Fg = new aa.Component().refs;
    function Gg(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = c === null || c === void 0 ? b : m({}, b, c);
      a.memoizedState = c;
      a.lanes === 0 && (a.updateQueue.baseState = c);
    }
    var Kg = { isMounted: function(a) {
      return (a = a._reactInternals) ? Zb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = Hg(), e = Ig(a), f = zg(d, e);
      f.payload = b;
      c !== void 0 && c !== null && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = Hg(), e = Ig(a), f = zg(d, e);
      f.tag = 1;
      f.payload = b;
      c !== void 0 && c !== null && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = Hg(), d = Ig(a), e = zg(c, d);
      e.tag = 2;
      b !== void 0 && b !== null && (e.callback = b);
      Ag(a, e);
      Jg(a, d, c);
    } };
    function Lg(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
    }
    function Mg(a, b, c) {
      var d = false, e = Cf;
      var f = b.contextType;
      typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
      b = new b(c, f);
      a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      b.updater = Kg;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Ng(a, b, c, d) {
      a = b.state;
      typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
      typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
    }
    function Og(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = Fg;
      xg(a);
      var f = b.contextType;
      typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
      Cg(a, c, e, d);
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
      typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
      typeof e.componentDidMount === "function" && (a.flags |= 4);
    }
    var Pg = Array.isArray;
    function Qg(a, b, c) {
      a = c.ref;
      if (a !== null && typeof a !== "function" && typeof a !== "object") {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (c.tag !== 1)
              throw Error(y(309));
            var d = c.stateNode;
          }
          if (!d)
            throw Error(y(147, a));
          var e = "" + a;
          if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
            return b.ref;
          b = function(a2) {
            var b2 = d.refs;
            b2 === Fg && (b2 = d.refs = {});
            a2 === null ? delete b2[e] : b2[e] = a2;
          };
          b._stringRef = e;
          return b;
        }
        if (typeof a !== "string")
          throw Error(y(284));
        if (!c._owner)
          throw Error(y(290, a));
      }
      return a;
    }
    function Rg(a, b) {
      if (a.type !== "textarea")
        throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
    }
    function Sg(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.lastEffect;
          d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
          c2.nextEffect = null;
          c2.flags = 8;
        }
      }
      function c(c2, d2) {
        if (!a)
          return null;
        for (; d2 !== null; )
          b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = new Map(); b2 !== null; )
          b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Tg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a)
          return c2;
        d2 = b2.alternate;
        if (d2 !== null)
          return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
        b2.flags = 2;
        return c2;
      }
      function g(b2) {
        a && b2.alternate === null && (b2.flags = 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (b2 === null || b2.tag !== 6)
          return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        if (b2 !== null && b2.elementType === c2.type)
          return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
        d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Qg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
          return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function n(a2, b2, c2, d2, f2) {
        if (b2 === null || b2.tag !== 7)
          return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function A(a2, b2, c2) {
        if (typeof b2 === "string" || typeof b2 === "number")
          return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
        if (typeof b2 === "object" && b2 !== null) {
          switch (b2.$$typeof) {
            case sa:
              return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
            case ta:
              return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
          }
          if (Pg(b2) || La(b2))
            return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Rg(a2, b2);
        }
        return null;
      }
      function p(a2, b2, c2, d2) {
        var e2 = b2 !== null ? b2.key : null;
        if (typeof c2 === "string" || typeof c2 === "number")
          return e2 !== null ? null : h(a2, b2, "" + c2, d2);
        if (typeof c2 === "object" && c2 !== null) {
          switch (c2.$$typeof) {
            case sa:
              return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
            case ta:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          }
          if (Pg(c2) || La(c2))
            return e2 !== null ? null : n(a2, b2, c2, d2, null);
          Rg(a2, c2);
        }
        return null;
      }
      function C(a2, b2, c2, d2, e2) {
        if (typeof d2 === "string" || typeof d2 === "number")
          return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if (typeof d2 === "object" && d2 !== null) {
          switch (d2.$$typeof) {
            case sa:
              return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
            case ta:
              return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          }
          if (Pg(d2) || La(d2))
            return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
          Rg(b2, d2);
        }
        return null;
      }
      function x(e2, g2, h2, k2) {
        for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
          u.index > z ? (q = u, u = null) : q = u.sibling;
          var n2 = p(e2, u, h2[z], k2);
          if (n2 === null) {
            u === null && (u = q);
            break;
          }
          a && u && n2.alternate === null && b(e2, u);
          g2 = f(n2, g2, z);
          t === null ? l2 = n2 : t.sibling = n2;
          t = n2;
          u = q;
        }
        if (z === h2.length)
          return c(e2, u), l2;
        if (u === null) {
          for (; z < h2.length; z++)
            u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
          return l2;
        }
        for (u = d(e2, u); z < h2.length; z++)
          q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        return l2;
      }
      function w(e2, g2, h2, k2) {
        var l2 = La(h2);
        if (typeof l2 !== "function")
          throw Error(y(150));
        h2 = l2.call(h2);
        if (h2 == null)
          throw Error(y(151));
        for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
          u.index > z ? (q = u, u = null) : q = u.sibling;
          var w2 = p(e2, u, n2.value, k2);
          if (w2 === null) {
            u === null && (u = q);
            break;
          }
          a && u && w2.alternate === null && b(e2, u);
          g2 = f(w2, g2, z);
          t === null ? l2 = w2 : t.sibling = w2;
          t = w2;
          u = q;
        }
        if (n2.done)
          return c(e2, u), l2;
        if (u === null) {
          for (; !n2.done; z++, n2 = h2.next())
            n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
          return l2;
        }
        for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
          n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        return l2;
      }
      return function(a2, d2, f2, h2) {
        var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
        k2 && (f2 = f2.props.children);
        var l2 = typeof f2 === "object" && f2 !== null;
        if (l2)
          switch (f2.$$typeof) {
            case sa:
              a: {
                l2 = f2.key;
                for (k2 = d2; k2 !== null; ) {
                  if (k2.key === l2) {
                    switch (k2.tag) {
                      case 7:
                        if (f2.type === ua) {
                          c(a2, k2.sibling);
                          d2 = e(k2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                        break;
                      default:
                        if (k2.elementType === f2.type) {
                          c(a2, k2.sibling);
                          d2 = e(k2, f2.props);
                          d2.ref = Qg(a2, k2, f2);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                    }
                    c(a2, k2);
                    break;
                  } else
                    b(a2, k2);
                  k2 = k2.sibling;
                }
                f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case ta:
              a: {
                for (k2 = f2.key; d2 !== null; ) {
                  if (d2.key === k2)
                    if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                  else
                    b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Wg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
          }
        if (typeof f2 === "string" || typeof f2 === "number")
          return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
        if (Pg(f2))
          return x(a2, d2, f2, h2);
        if (La(f2))
          return w(a2, d2, f2, h2);
        l2 && Rg(a2, f2);
        if (typeof f2 === "undefined" && !k2)
          switch (a2.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(y(152, Ra(a2.type) || "Component"));
          }
        return c(a2, d2);
      };
    }
    var Yg = Sg(true);
    var Zg = Sg(false);
    var $g = {};
    var ah = Bf($g);
    var bh = Bf($g);
    var ch = Bf($g);
    function dh(a) {
      if (a === $g)
        throw Error(y(174));
      return a;
    }
    function eh(a, b) {
      I(ch, b);
      I(bh, a);
      I(ah, $g);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
          break;
        default:
          a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
      }
      H(ah);
      I(ah, b);
    }
    function fh() {
      H(ah);
      H(bh);
      H(ch);
    }
    function gh(a) {
      dh(ch.current);
      var b = dh(ah.current);
      var c = mb(b, a.type);
      b !== c && (I(bh, a), I(ah, c));
    }
    function hh(a) {
      bh.current === a && (H(ah), H(bh));
    }
    var P = Bf(0);
    function ih(a) {
      for (var b = a; b !== null; ) {
        if (b.tag === 13) {
          var c = b.memoizedState;
          if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
            return b;
        } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
          if ((b.flags & 64) !== 0)
            return b;
        } else if (b.child !== null) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a)
          break;
        for (; b.sibling === null; ) {
          if (b.return === null || b.return === a)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var jh = null;
    var kh = null;
    var lh = false;
    function mh(a, b) {
      var c = nh(5, null, null, 0);
      c.elementType = "DELETED";
      c.type = "DELETED";
      c.stateNode = b;
      c.return = a;
      c.flags = 8;
      a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
    }
    function oh(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return b !== null ? (a.stateNode = b, true) : false;
        case 6:
          return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
        case 13:
          return false;
        default:
          return false;
      }
    }
    function ph(a) {
      if (lh) {
        var b = kh;
        if (b) {
          var c = b;
          if (!oh(a, b)) {
            b = rf(c.nextSibling);
            if (!b || !oh(a, b)) {
              a.flags = a.flags & -1025 | 2;
              lh = false;
              jh = a;
              return;
            }
            mh(jh, c);
          }
          jh = a;
          kh = rf(b.firstChild);
        } else
          a.flags = a.flags & -1025 | 2, lh = false, jh = a;
      }
    }
    function qh(a) {
      for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
        a = a.return;
      jh = a;
    }
    function rh(a) {
      if (a !== jh)
        return false;
      if (!lh)
        return qh(a), lh = true, false;
      var b = a.type;
      if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
        for (b = kh; b; )
          mh(a, b), b = rf(b.nextSibling);
      qh(a);
      if (a.tag === 13) {
        a = a.memoizedState;
        a = a !== null ? a.dehydrated : null;
        if (!a)
          throw Error(y(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (a.nodeType === 8) {
              var c = a.data;
              if (c === "/$") {
                if (b === 0) {
                  kh = rf(a.nextSibling);
                  break a;
                }
                b--;
              } else
                c !== "$" && c !== "$!" && c !== "$?" || b++;
            }
            a = a.nextSibling;
          }
          kh = null;
        }
      } else
        kh = jh ? rf(a.stateNode.nextSibling) : null;
      return true;
    }
    function sh() {
      kh = jh = null;
      lh = false;
    }
    var th = [];
    function uh() {
      for (var a = 0; a < th.length; a++)
        th[a]._workInProgressVersionPrimary = null;
      th.length = 0;
    }
    var vh = ra.ReactCurrentDispatcher;
    var wh = ra.ReactCurrentBatchConfig;
    var xh = 0;
    var R = null;
    var S = null;
    var T = null;
    var yh = false;
    var zh = false;
    function Ah() {
      throw Error(y(321));
    }
    function Bh(a, b) {
      if (b === null)
        return false;
      for (var c = 0; c < b.length && c < a.length; c++)
        if (!He(a[c], b[c]))
          return false;
      return true;
    }
    function Ch(a, b, c, d, e, f) {
      xh = f;
      R = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      vh.current = a === null || a.memoizedState === null ? Dh : Eh;
      a = c(d, e);
      if (zh) {
        f = 0;
        do {
          zh = false;
          if (!(25 > f))
            throw Error(y(301));
          f += 1;
          T = S = null;
          b.updateQueue = null;
          vh.current = Fh;
          a = c(d, e);
        } while (zh);
      }
      vh.current = Gh;
      b = S !== null && S.next !== null;
      xh = 0;
      T = S = R = null;
      yh = false;
      if (b)
        throw Error(y(300));
      return a;
    }
    function Hh() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      T === null ? R.memoizedState = T = a : T = T.next = a;
      return T;
    }
    function Ih() {
      if (S === null) {
        var a = R.alternate;
        a = a !== null ? a.memoizedState : null;
      } else
        a = S.next;
      var b = T === null ? R.memoizedState : T.next;
      if (b !== null)
        T = b, S = a;
      else {
        if (a === null)
          throw Error(y(310));
        S = a;
        a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
        T === null ? R.memoizedState = T = a : T = T.next = a;
      }
      return T;
    }
    function Jh(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function Kh(a) {
      var b = Ih(), c = b.queue;
      if (c === null)
        throw Error(y(311));
      c.lastRenderedReducer = a;
      var d = S, e = d.baseQueue, f = c.pending;
      if (f !== null) {
        if (e !== null) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (e !== null) {
        e = e.next;
        d = d.baseState;
        var h = g = f = null, k = e;
        do {
          var l = k.lane;
          if ((xh & l) === l)
            h !== null && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
          else {
            var n = {
              lane: l,
              action: k.action,
              eagerReducer: k.eagerReducer,
              eagerState: k.eagerState,
              next: null
            };
            h === null ? (g = h = n, f = d) : h = h.next = n;
            R.lanes |= l;
            Dg |= l;
          }
          k = k.next;
        } while (k !== null && k !== e);
        h === null ? f = d : h.next = g;
        He(d, b.memoizedState) || (ug = true);
        b.memoizedState = d;
        b.baseState = f;
        b.baseQueue = h;
        c.lastRenderedState = d;
      }
      return [b.memoizedState, c.dispatch];
    }
    function Lh(a) {
      var b = Ih(), c = b.queue;
      if (c === null)
        throw Error(y(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (e !== null) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (ug = true);
        b.memoizedState = f;
        b.baseQueue === null && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Mh(a, b, c) {
      var d = b._getVersion;
      d = d(b._source);
      var e = b._workInProgressVersionPrimary;
      if (e !== null)
        a = e === d;
      else if (a = a.mutableReadLanes, a = (xh & a) === a)
        b._workInProgressVersionPrimary = d, th.push(b);
      if (a)
        return c(b._source);
      th.push(b);
      throw Error(y(350));
    }
    function Nh(a, b, c, d) {
      var e = U;
      if (e === null)
        throw Error(y(349));
      var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
        return Mh(e, b, c);
      }), l = k[1], n = k[0];
      k = T;
      var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
      A = A.subscribe;
      var w = R;
      a.memoizedState = { refs: p, source: b, subscribe: d };
      h.useEffect(function() {
        p.getSnapshot = c;
        p.setSnapshot = l;
        var a2 = f(b._source);
        if (!He(g, a2)) {
          a2 = c(b._source);
          He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
          a2 = e.mutableReadLanes;
          e.entangledLanes |= a2;
          for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
            var k2 = 31 - Vc(h2), v = 1 << k2;
            d2[k2] |= a2;
            h2 &= ~v;
          }
        }
      }, [c, b, d]);
      h.useEffect(function() {
        return d(b._source, function() {
          var a2 = p.getSnapshot, c2 = p.setSnapshot;
          try {
            c2(a2(b._source));
            var d2 = Ig(w);
            e.mutableReadLanes |= d2 & e.pendingLanes;
          } catch (q) {
            c2(function() {
              throw q;
            });
          }
        });
      }, [b, d]);
      He(C, c) && He(x, b) && He(A, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
      return n;
    }
    function Ph(a, b, c) {
      var d = Ih();
      return Nh(d, a, b, c);
    }
    function Qh(a) {
      var b = Hh();
      typeof a === "function" && (a = a());
      b.memoizedState = b.baseState = a;
      a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
      a = a.dispatch = Oh.bind(null, R, a);
      return [b.memoizedState, a];
    }
    function Rh(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = R.updateQueue;
      b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function Sh(a) {
      var b = Hh();
      a = { current: a };
      return b.memoizedState = a;
    }
    function Th() {
      return Ih().memoizedState;
    }
    function Uh(a, b, c, d) {
      var e = Hh();
      R.flags |= a;
      e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
    }
    function Vh(a, b, c, d) {
      var e = Ih();
      d = d === void 0 ? null : d;
      var f = void 0;
      if (S !== null) {
        var g = S.memoizedState;
        f = g.destroy;
        if (d !== null && Bh(d, g.deps)) {
          Rh(b, c, f, d);
          return;
        }
      }
      R.flags |= a;
      e.memoizedState = Rh(1 | b, c, f, d);
    }
    function Wh(a, b) {
      return Uh(516, 4, a, b);
    }
    function Xh(a, b) {
      return Vh(516, 4, a, b);
    }
    function Yh(a, b) {
      return Vh(4, 2, a, b);
    }
    function Zh(a, b) {
      if (typeof b === "function")
        return a = a(), b(a), function() {
          b(null);
        };
      if (b !== null && b !== void 0)
        return a = a(), b.current = a, function() {
          b.current = null;
        };
    }
    function $h(a, b, c) {
      c = c !== null && c !== void 0 ? c.concat([a]) : null;
      return Vh(4, 2, Zh.bind(null, b, a), c);
    }
    function ai() {
    }
    function bi(a, b) {
      var c = Ih();
      b = b === void 0 ? null : b;
      var d = c.memoizedState;
      if (d !== null && b !== null && Bh(b, d[1]))
        return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ci(a, b) {
      var c = Ih();
      b = b === void 0 ? null : b;
      var d = c.memoizedState;
      if (d !== null && b !== null && Bh(b, d[1]))
        return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function di(a, b) {
      var c = eg();
      gg(98 > c ? 98 : c, function() {
        a(true);
      });
      gg(97 < c ? 97 : c, function() {
        var c2 = wh.transition;
        wh.transition = 1;
        try {
          a(false), b();
        } finally {
          wh.transition = c2;
        }
      });
    }
    function Oh(a, b, c) {
      var d = Hg(), e = Ig(a), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
      g === null ? f.next = f : (f.next = g.next, g.next = f);
      b.pending = f;
      g = a.alternate;
      if (a === R || g !== null && g === R)
        zh = yh = true;
      else {
        if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
          try {
            var h = b.lastRenderedState, k = g(h, c);
            f.eagerReducer = g;
            f.eagerState = k;
            if (He(k, h))
              return;
          } catch (l) {
          } finally {
          }
        Jg(a, e, d);
      }
    }
    var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false };
    var Dh = { readContext: vg, useCallback: function(a, b) {
      Hh().memoizedState = [a, b === void 0 ? null : b];
      return a;
    }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
      c = c !== null && c !== void 0 ? c.concat([a]) : null;
      return Uh(4, 2, Zh.bind(null, b, a), c);
    }, useLayoutEffect: function(a, b) {
      return Uh(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Hh();
      b = b === void 0 ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Hh();
      b = c !== void 0 ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      a = a.dispatch = Oh.bind(null, R, a);
      return [d.memoizedState, a];
    }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
      var b = Qh(a), c = b[0], d = b[1];
      Wh(function() {
        var b2 = wh.transition;
        wh.transition = 1;
        try {
          d(a);
        } finally {
          wh.transition = b2;
        }
      }, [a]);
      return c;
    }, useTransition: function() {
      var a = Qh(false), b = a[0];
      a = di.bind(null, a[1]);
      Sh(a);
      return [a, b];
    }, useMutableSource: function(a, b, c) {
      var d = Hh();
      d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
      return Nh(d, a, b, c);
    }, useOpaqueIdentifier: function() {
      if (lh) {
        var a = false, b = uf(function() {
          a || (a = true, c("r:" + (tf++).toString(36)));
          throw Error(y(355));
        }), c = Qh(b)[1];
        (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
          c("r:" + (tf++).toString(36));
        }, void 0, null));
        return b;
      }
      b = "r:" + (tf++).toString(36);
      Qh(b);
      return b;
    }, unstable_isNewReconciler: false };
    var Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
      return Kh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a) {
      var b = Kh(Jh), c = b[0], d = b[1];
      Xh(function() {
        var b2 = wh.transition;
        wh.transition = 1;
        try {
          d(a);
        } finally {
          wh.transition = b2;
        }
      }, [a]);
      return c;
    }, useTransition: function() {
      var a = Kh(Jh)[0];
      return [
        Th().current,
        a
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Kh(Jh)[0];
    }, unstable_isNewReconciler: false };
    var Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
      return Lh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a) {
      var b = Lh(Jh), c = b[0], d = b[1];
      Xh(function() {
        var b2 = wh.transition;
        wh.transition = 1;
        try {
          d(a);
        } finally {
          wh.transition = b2;
        }
      }, [a]);
      return c;
    }, useTransition: function() {
      var a = Lh(Jh)[0];
      return [
        Th().current,
        a
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Lh(Jh)[0];
    }, unstable_isNewReconciler: false };
    var ei = ra.ReactCurrentOwner;
    var ug = false;
    function fi(a, b, c, d) {
      b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
    }
    function gi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      tg(b, e);
      d = Ch(a, b, c, d, f, e);
      if (a !== null && !ug)
        return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
      b.flags |= 1;
      fi(a, b, d, e);
      return b.child;
    }
    function ii(a, b, c, d, e, f) {
      if (a === null) {
        var g = c.type;
        if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
          return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
        a = Vg(c.type, null, d, b, b.mode, f);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      g = a.child;
      if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
        return hi(a, b, f);
      b.flags |= 1;
      a = Tg(g, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function ki(a, b, c, d, e, f) {
      if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
        if (ug = false, (f & e) !== 0)
          (a.flags & 16384) !== 0 && (ug = true);
        else
          return b.lanes = a.lanes, hi(a, b, f);
      return li(a, b, c, d, f);
    }
    function mi(a, b, c) {
      var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
      if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
        if ((b.mode & 4) === 0)
          b.memoizedState = { baseLanes: 0 }, ni(b, c);
        else if ((c & 1073741824) !== 0)
          b.memoizedState = { baseLanes: 0 }, ni(b, f !== null ? f.baseLanes : c);
        else
          return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
      else
        f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
      fi(a, b, e, c);
      return b.child;
    }
    function oi(a, b) {
      var c = b.ref;
      if (a === null && c !== null || a !== null && a.ref !== c)
        b.flags |= 128;
    }
    function li(a, b, c, d, e) {
      var f = Ff(c) ? Df : M.current;
      f = Ef(b, f);
      tg(b, e);
      c = Ch(a, b, c, d, f, e);
      if (a !== null && !ug)
        return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
      b.flags |= 1;
      fi(a, b, c, e);
      return b.child;
    }
    function pi(a, b, c, d, e) {
      if (Ff(c)) {
        var f = true;
        Jf(b);
      } else
        f = false;
      tg(b, e);
      if (b.stateNode === null)
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
      else if (a === null) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
        var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
        A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
        wg = false;
        var p = b.memoizedState;
        g.state = p;
        Cg(b, d, g, e);
        k = b.memoizedState;
        h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
      } else {
        g = b.stateNode;
        yg(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : lg(b.type, h);
        g.props = l;
        A = b.pendingProps;
        p = g.context;
        k = c.contextType;
        typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
        var C = c.getDerivedStateFromProps;
        (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
        wg = false;
        p = b.memoizedState;
        g.state = p;
        Cg(b, d, g, e);
        var x = b.memoizedState;
        h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
      }
      return qi(a, b, c, d, f, e);
    }
    function qi(a, b, c, d, e, f) {
      oi(a, b);
      var g = (b.flags & 64) !== 0;
      if (!d && !g)
        return e && Kf(b, c, false), hi(a, b, f);
      d = b.stateNode;
      ei.current = b;
      var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
      b.flags |= 1;
      a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
      b.memoizedState = d.state;
      e && Kf(b, c, true);
      return b.child;
    }
    function ri(a) {
      var b = a.stateNode;
      b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
      eh(a, b.containerInfo);
    }
    var si = { dehydrated: null, retryLane: 0 };
    function ti(a, b, c) {
      var d = b.pendingProps, e = P.current, f = false, g;
      (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
      g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
      I(P, e & 1);
      if (a === null) {
        d.fallback !== void 0 && ph(b);
        a = d.children;
        e = d.fallback;
        if (f)
          return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
        if (typeof d.unstable_expectedLoadTime === "number")
          return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
        c = vi({ mode: "visible", children: a }, b.mode, c, null);
        c.return = b;
        return b.child = c;
      }
      if (a.memoizedState !== null) {
        if (f)
          return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
        c = xi(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }
      if (f)
        return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
      c = xi(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    function ui(a, b, c, d) {
      var e = a.mode, f = a.child;
      b = { mode: "hidden", children: b };
      (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
      c = Xg(c, e, d, null);
      f.return = a;
      c.return = a;
      f.sibling = c;
      a.child = f;
      return c;
    }
    function xi(a, b, c, d) {
      var e = a.child;
      a = e.sibling;
      c = Tg(e, { mode: "visible", children: c });
      (b.mode & 2) === 0 && (c.lanes = d);
      c.return = b;
      c.sibling = null;
      a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
      return b.child = c;
    }
    function wi(a, b, c, d, e) {
      var f = b.mode, g = a.child;
      a = g.sibling;
      var h = { mode: "hidden", children: c };
      (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
      a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
      d.return = b;
      c.return = b;
      c.sibling = d;
      b.child = c;
      return d;
    }
    function yi(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      c !== null && (c.lanes |= b);
      sg(a.return, b);
    }
    function zi(a, b, c, d, e, f) {
      var g = a.memoizedState;
      g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
    }
    function Ai(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      fi(a, b, d.children, c);
      d = P.current;
      if ((d & 2) !== 0)
        d = d & 1 | 2, b.flags |= 64;
      else {
        if (a !== null && (a.flags & 64) !== 0)
          a:
            for (a = b.child; a !== null; ) {
              if (a.tag === 13)
                a.memoizedState !== null && yi(a, c);
              else if (a.tag === 19)
                yi(a, c);
              else if (a.child !== null) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b)
                break a;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === b)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d &= 1;
      }
      I(P, d);
      if ((b.mode & 2) === 0)
        b.memoizedState = null;
      else
        switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; c !== null; )
              a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
            c = e;
            c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            zi(b, false, e, c, f, b.lastEffect);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; e !== null; ) {
              a = e.alternate;
              if (a !== null && ih(a) === null) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            zi(b, true, c, null, f, b.lastEffect);
            break;
          case "together":
            zi(b, false, null, null, void 0, b.lastEffect);
            break;
          default:
            b.memoizedState = null;
        }
      return b.child;
    }
    function hi(a, b, c) {
      a !== null && (b.dependencies = a.dependencies);
      Dg |= b.lanes;
      if ((c & b.childLanes) !== 0) {
        if (a !== null && b.child !== a.child)
          throw Error(y(153));
        if (b.child !== null) {
          a = b.child;
          c = Tg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; a.sibling !== null; )
            a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      return null;
    }
    var Bi;
    var Ci;
    var Di;
    var Ei;
    Bi = function(a, b) {
      for (var c = b.child; c !== null; ) {
        if (c.tag === 5 || c.tag === 6)
          a.appendChild(c.stateNode);
        else if (c.tag !== 4 && c.child !== null) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === b)
            return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Ci = function() {
    };
    Di = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        dh(ah.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "option":
            e = eb(a, e);
            d = eb(a, d);
            f = [];
            break;
          case "select":
            e = m({}, e, { value: void 0 });
            d = m({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
        }
        vb(c, d);
        var g;
        c = null;
        for (l in e)
          if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
            if (l === "style") {
              var h = e[l];
              for (g in h)
                h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else
              l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = e != null ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
            if (l === "style")
              if (h) {
                for (g in h)
                  !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                for (g in k)
                  k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
              } else
                c || (f || (f = []), f.push(l, c)), c = k;
            else
              l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l)
          b.flags |= 4;
      }
    };
    Ei = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Fi(a, b) {
      if (!lh)
        switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; b !== null; )
              b.alternate !== null && (c = b), b = b.sibling;
            c === null ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; c !== null; )
              c.alternate !== null && (d = c), c = c.sibling;
            d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
    }
    function Gi(a, b, c) {
      var d = b.pendingProps;
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return Ff(b.type) && Gf(), null;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          d = b.stateNode;
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (a === null || a.child === null)
            rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
          Ci(b);
          return null;
        case 5:
          hh(b);
          var e = dh(ch.current);
          c = b.type;
          if (a !== null && b.stateNode != null)
            Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
          else {
            if (!d) {
              if (b.stateNode === null)
                throw Error(y(166));
              return null;
            }
            a = dh(ah.current);
            if (rh(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[wf] = b;
              d[xf] = f;
              switch (c) {
                case "dialog":
                  G("cancel", d);
                  G("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", d);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Xe.length; a++)
                    G(Xe[a], d);
                  break;
                case "source":
                  G("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", d);
                  G("load", d);
                  break;
                case "details":
                  G("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  G("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f.multiple };
                  G("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), G("invalid", d);
              }
              vb(c, f);
              a = null;
              for (var g in f)
                f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
              switch (c) {
                case "input":
                  Va(d);
                  cb(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof f.onClick === "function" && (d.onclick = jf);
              }
              d = a;
              b.updateQueue = d;
              d !== null && (b.flags |= 4);
            } else {
              g = e.nodeType === 9 ? e : e.ownerDocument;
              a === kb.html && (a = lb(c));
              a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[wf] = b;
              a[xf] = d;
              Bi(a, b, false, false);
              b.stateNode = a;
              g = wb(c, d);
              switch (c) {
                case "dialog":
                  G("cancel", a);
                  G("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < Xe.length; e++)
                    G(Xe[e], a);
                  e = d;
                  break;
                case "source":
                  G("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", a);
                  G("load", a);
                  e = d;
                  break;
                case "details":
                  G("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  G("invalid", a);
                  break;
                case "option":
                  e = eb(a, d);
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = m({}, d, { value: void 0 });
                  G("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  G("invalid", a);
                  break;
                default:
                  e = d;
              }
              vb(c, e);
              var h = e;
              for (f in h)
                if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
                }
              switch (c) {
                case "input":
                  Va(a);
                  cb(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  d.value != null && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                  break;
                default:
                  typeof e.onClick === "function" && (a.onclick = jf);
              }
              mf(c, d) && (b.flags |= 4);
            }
            b.ref !== null && (b.flags |= 128);
          }
          return null;
        case 6:
          if (a && b.stateNode != null)
            Ei(a, b, a.memoizedProps, d);
          else {
            if (typeof d !== "string" && b.stateNode === null)
              throw Error(y(166));
            c = dh(ch.current);
            dh(ah.current);
            rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
          }
          return null;
        case 13:
          H(P);
          d = b.memoizedState;
          if ((b.flags & 64) !== 0)
            return b.lanes = c, b;
          d = d !== null;
          c = false;
          a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
          if (d && !c && (b.mode & 2) !== 0)
            if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
              V2 === 0 && (V2 = 3);
            else {
              if (V2 === 0 || V2 === 3)
                V2 = 4;
              U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
            }
          if (d || c)
            b.flags |= 4;
          return null;
        case 4:
          return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
        case 10:
          return rg(b), null;
        case 17:
          return Ff(b.type) && Gf(), null;
        case 19:
          H(P);
          d = b.memoizedState;
          if (d === null)
            return null;
          f = (b.flags & 64) !== 0;
          g = d.rendering;
          if (g === null)
            if (f)
              Fi(d, false);
            else {
              if (V2 !== 0 || a !== null && (a.flags & 64) !== 0)
                for (a = b.child; a !== null; ) {
                  g = ih(a);
                  if (g !== null) {
                    b.flags |= 64;
                    Fi(d, false);
                    f = g.updateQueue;
                    f !== null && (b.updateQueue = f, b.flags |= 4);
                    d.lastEffect === null && (b.firstEffect = null);
                    b.lastEffect = d.lastEffect;
                    d = c;
                    for (c = b.child; c !== null; )
                      f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                    I(P, P.current & 1 | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
              d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
            }
          else {
            if (!f)
              if (a = ih(g), a !== null) {
                if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
                  return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
              } else
                2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
            d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
          }
          return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
        case 23:
        case 24:
          return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
      }
      throw Error(y(156, b.tag));
    }
    function Li(a) {
      switch (a.tag) {
        case 1:
          Ff(a.type) && Gf();
          var b = a.flags;
          return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          b = a.flags;
          if ((b & 64) !== 0)
            throw Error(y(285));
          a.flags = b & -4097 | 64;
          return a;
        case 5:
          return hh(a), null;
        case 13:
          return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
        case 19:
          return H(P), null;
        case 4:
          return fh(), null;
        case 10:
          return rg(a), null;
        case 23:
        case 24:
          return Ki(), null;
        default:
          return null;
      }
    }
    function Mi(a, b) {
      try {
        var c = "", d = b;
        do
          c += Qa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e };
    }
    function Ni(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Oi = typeof WeakMap === "function" ? WeakMap : Map;
    function Pi(a, b, c) {
      c = zg(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Qi || (Qi = true, Ri = d);
        Ni(a, b);
      };
      return c;
    }
    function Si(a, b, c) {
      c = zg(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if (typeof d === "function") {
        var e = b.value;
        c.payload = function() {
          Ni(a, b);
          return d(e);
        };
      }
      var f = a.stateNode;
      f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
        typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
      });
      return c;
    }
    var Ui = typeof WeakSet === "function" ? WeakSet : Set;
    function Vi(a) {
      var b = a.ref;
      if (b !== null)
        if (typeof b === "function")
          try {
            b(null);
          } catch (c) {
            Wi(a, c);
          }
        else
          b.current = null;
    }
    function Xi(a, b) {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (b.flags & 256 && a !== null) {
            var c = a.memoizedProps, d = a.memoizedState;
            a = b.stateNode;
            b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
            a.__reactInternalSnapshotBeforeUpdate = b;
          }
          return;
        case 3:
          b.flags & 256 && qf(b.stateNode.containerInfo);
          return;
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(y(163));
    }
    function Yi(a, b, c) {
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          b = c.updateQueue;
          b = b !== null ? b.lastEffect : null;
          if (b !== null) {
            a = b = b.next;
            do {
              if ((a.tag & 3) === 3) {
                var d = a.create;
                a.destroy = d();
              }
              a = a.next;
            } while (a !== b);
          }
          b = c.updateQueue;
          b = b !== null ? b.lastEffect : null;
          if (b !== null) {
            a = b = b.next;
            do {
              var e = a;
              d = e.next;
              e = e.tag;
              (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
              a = d;
            } while (a !== b);
          }
          return;
        case 1:
          a = c.stateNode;
          c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
          b = c.updateQueue;
          b !== null && Eg(c, b, a);
          return;
        case 3:
          b = c.updateQueue;
          if (b !== null) {
            a = null;
            if (c.child !== null)
              switch (c.child.tag) {
                case 5:
                  a = c.child.stateNode;
                  break;
                case 1:
                  a = c.child.stateNode;
              }
            Eg(c, b, a);
          }
          return;
        case 5:
          a = c.stateNode;
          b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(y(163));
    }
    function aj(a, b) {
      for (var c = a; ; ) {
        if (c.tag === 5) {
          var d = c.stateNode;
          if (b)
            d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
          else {
            d = c.stateNode;
            var e = c.memoizedProps.style;
            e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
            d.style.display = sb("display", e);
          }
        } else if (c.tag === 6)
          c.stateNode.nodeValue = b ? "" : c.memoizedProps;
        else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === a)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === a)
            return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    }
    function bj(a, b) {
      if (Mf && typeof Mf.onCommitFiberUnmount === "function")
        try {
          Mf.onCommitFiberUnmount(Lf, b);
        } catch (f) {
        }
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          a = b.updateQueue;
          if (a !== null && (a = a.lastEffect, a !== null)) {
            var c = a = a.next;
            do {
              var d = c, e = d.destroy;
              d = d.tag;
              if (e !== void 0)
                if ((d & 4) !== 0)
                  Zi(b, c);
                else {
                  d = b;
                  try {
                    e();
                  } catch (f) {
                    Wi(d, f);
                  }
                }
              c = c.next;
            } while (c !== a);
          }
          break;
        case 1:
          Vi(b);
          a = b.stateNode;
          if (typeof a.componentWillUnmount === "function")
            try {
              a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
            } catch (f) {
              Wi(b, f);
            }
          break;
        case 5:
          Vi(b);
          break;
        case 4:
          cj(a, b);
      }
    }
    function dj(a) {
      a.alternate = null;
      a.child = null;
      a.dependencies = null;
      a.firstEffect = null;
      a.lastEffect = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.return = null;
      a.updateQueue = null;
    }
    function ej(a) {
      return a.tag === 5 || a.tag === 3 || a.tag === 4;
    }
    function fj(a) {
      a: {
        for (var b = a.return; b !== null; ) {
          if (ej(b))
            break a;
          b = b.return;
        }
        throw Error(y(160));
      }
      var c = b;
      b = c.stateNode;
      switch (c.tag) {
        case 5:
          var d = false;
          break;
        case 3:
          b = b.containerInfo;
          d = true;
          break;
        case 4:
          b = b.containerInfo;
          d = true;
          break;
        default:
          throw Error(y(161));
      }
      c.flags & 16 && (pb(b, ""), c.flags &= -17);
      a:
        b:
          for (c = a; ; ) {
            for (; c.sibling === null; ) {
              if (c.return === null || ej(c.return)) {
                c = null;
                break a;
              }
              c = c.return;
            }
            c.sibling.return = c.return;
            for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
              if (c.flags & 2)
                continue b;
              if (c.child === null || c.tag === 4)
                continue b;
              else
                c.child.return = c, c = c.child;
            }
            if (!(c.flags & 2)) {
              c = c.stateNode;
              break a;
            }
          }
      d ? gj(a, c, b) : hj(a, c, b);
    }
    function gj(a, b, c) {
      var d = a.tag, e = d === 5 || d === 6;
      if (e)
        a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
      else if (d !== 4 && (a = a.child, a !== null))
        for (gj(a, b, c), a = a.sibling; a !== null; )
          gj(a, b, c), a = a.sibling;
    }
    function hj(a, b, c) {
      var d = a.tag, e = d === 5 || d === 6;
      if (e)
        a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (d !== 4 && (a = a.child, a !== null))
        for (hj(a, b, c), a = a.sibling; a !== null; )
          hj(a, b, c), a = a.sibling;
    }
    function cj(a, b) {
      for (var c = b, d = false, e, f; ; ) {
        if (!d) {
          d = c.return;
          a:
            for (; ; ) {
              if (d === null)
                throw Error(y(160));
              e = d.stateNode;
              switch (d.tag) {
                case 5:
                  f = false;
                  break a;
                case 3:
                  e = e.containerInfo;
                  f = true;
                  break a;
                case 4:
                  e = e.containerInfo;
                  f = true;
                  break a;
              }
              d = d.return;
            }
          d = true;
        }
        if (c.tag === 5 || c.tag === 6) {
          a:
            for (var g = a, h = c, k = h; ; )
              if (bj(g, k), k.child !== null && k.tag !== 4)
                k.child.return = k, k = k.child;
              else {
                if (k === h)
                  break a;
                for (; k.sibling === null; ) {
                  if (k.return === null || k.return === h)
                    break a;
                  k = k.return;
                }
                k.sibling.return = k.return;
                k = k.sibling;
              }
          f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
        } else if (c.tag === 4) {
          if (c.child !== null) {
            e = c.stateNode.containerInfo;
            f = true;
            c.child.return = c;
            c = c.child;
            continue;
          }
        } else if (bj(a, c), c.child !== null) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === b)
            return;
          c = c.return;
          c.tag === 4 && (d = false);
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    }
    function ij(a, b) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var c = b.updateQueue;
          c = c !== null ? c.lastEffect : null;
          if (c !== null) {
            var d = c = c.next;
            do
              (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
            while (d !== c);
          }
          return;
        case 1:
          return;
        case 5:
          c = b.stateNode;
          if (c != null) {
            d = b.memoizedProps;
            var e = a !== null ? a.memoizedProps : d;
            a = b.type;
            var f = b.updateQueue;
            b.updateQueue = null;
            if (f !== null) {
              c[xf] = d;
              a === "input" && d.type === "radio" && d.name != null && $a(c, d);
              wb(a, e);
              b = wb(a, d);
              for (e = 0; e < f.length; e += 2) {
                var g = f[e], h = f[e + 1];
                g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
              }
              switch (a) {
                case "input":
                  ab(c, d);
                  break;
                case "textarea":
                  ib(c, d);
                  break;
                case "select":
                  a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
              }
            }
          }
          return;
        case 6:
          if (b.stateNode === null)
            throw Error(y(162));
          b.stateNode.nodeValue = b.memoizedProps;
          return;
        case 3:
          c = b.stateNode;
          c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
          return;
        case 12:
          return;
        case 13:
          b.memoizedState !== null && (jj = O(), aj(b.child, true));
          kj(b);
          return;
        case 19:
          kj(b);
          return;
        case 17:
          return;
        case 23:
        case 24:
          aj(b, b.memoizedState !== null);
          return;
      }
      throw Error(y(163));
    }
    function kj(a) {
      var b = a.updateQueue;
      if (b !== null) {
        a.updateQueue = null;
        var c = a.stateNode;
        c === null && (c = a.stateNode = new Ui());
        b.forEach(function(b2) {
          var d = lj.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function mj(a, b) {
      return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
    }
    var nj = Math.ceil;
    var oj = ra.ReactCurrentDispatcher;
    var pj = ra.ReactCurrentOwner;
    var X = 0;
    var U = null;
    var Y = null;
    var W = 0;
    var qj = 0;
    var rj = Bf(0);
    var V2 = 0;
    var sj = null;
    var tj = 0;
    var Dg = 0;
    var Hi = 0;
    var uj = 0;
    var vj = null;
    var jj = 0;
    var Ji = Infinity;
    function wj() {
      Ji = O() + 500;
    }
    var Z = null;
    var Qi = false;
    var Ri = null;
    var Ti = null;
    var xj = false;
    var yj = null;
    var zj = 90;
    var Aj = [];
    var Bj = [];
    var Cj = null;
    var Dj = 0;
    var Ej = null;
    var Fj = -1;
    var Gj = 0;
    var Hj = 0;
    var Ij = null;
    var Jj = false;
    function Hg() {
      return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
    }
    function Ig(a) {
      a = a.mode;
      if ((a & 2) === 0)
        return 1;
      if ((a & 4) === 0)
        return eg() === 99 ? 1 : 2;
      Gj === 0 && (Gj = tj);
      if (kg.transition !== 0) {
        Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
        a = Gj;
        var b = 4186112 & ~Hj;
        b &= -b;
        b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
        return b;
      }
      a = eg();
      (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
      return a;
    }
    function Jg(a, b, c) {
      if (50 < Dj)
        throw Dj = 0, Ej = null, Error(y(185));
      a = Kj(a, b);
      if (a === null)
        return null;
      $c(a, b, c);
      a === U && (Hi |= b, V2 === 4 && Ii(a, W));
      var d = eg();
      b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
      vj = a;
    }
    function Kj(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      c !== null && (c.lanes |= b);
      c = a;
      for (a = a.return; a !== null; )
        a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
      return c.tag === 3 ? c.stateNode : null;
    }
    function Mj(a, b) {
      for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
        var h = 31 - Vc(g), k = 1 << h, l = f[h];
        if (l === -1) {
          if ((k & d) === 0 || (k & e) !== 0) {
            l = b;
            Rc(k);
            var n = F;
            f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
          }
        } else
          l <= b && (a.expiredLanes |= k);
        g &= ~k;
      }
      d = Uc(a, a === U ? W : 0);
      b = F;
      if (d === 0)
        c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
      else {
        if (c !== null) {
          if (a.callbackPriority === b)
            return;
          c !== Zf && Pf(c);
        }
        b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Nj(a) {
      Fj = -1;
      Hj = Gj = 0;
      if ((X & 48) !== 0)
        throw Error(y(327));
      var b = a.callbackNode;
      if (Oj() && a.callbackNode !== b)
        return null;
      var c = Uc(a, a === U ? W : 0);
      if (c === 0)
        return null;
      var d = c;
      var e = X;
      X |= 16;
      var f = Pj();
      if (U !== a || W !== d)
        wj(), Qj(a, d);
      do
        try {
          Rj();
          break;
        } catch (h) {
          Sj(a, h);
        }
      while (1);
      qg();
      oj.current = f;
      X = e;
      Y !== null ? d = 0 : (U = null, W = 0, d = V2);
      if ((tj & Hi) !== 0)
        Qj(a, 0);
      else if (d !== 0) {
        d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
        if (d === 1)
          throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
        a.finishedWork = a.current.alternate;
        a.finishedLanes = c;
        switch (d) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Uj(a);
            break;
          case 3:
            Ii(a, c);
            if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
              if (Uc(a, 0) !== 0)
                break;
              e = a.suspendedLanes;
              if ((e & c) !== c) {
                Hg();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = of(Uj.bind(null, a), d);
              break;
            }
            Uj(a);
            break;
          case 4:
            Ii(a, c);
            if ((c & 4186112) === c)
              break;
            d = a.eventTimes;
            for (e = -1; 0 < c; ) {
              var g = 31 - Vc(c);
              f = 1 << g;
              g = d[g];
              g > e && (e = g);
              c &= ~f;
            }
            c = e;
            c = O() - c;
            c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
            if (10 < c) {
              a.timeoutHandle = of(Uj.bind(null, a), c);
              break;
            }
            Uj(a);
            break;
          case 5:
            Uj(a);
            break;
          default:
            throw Error(y(329));
        }
      }
      Mj(a, O());
      return a.callbackNode === b ? Nj.bind(null, a) : null;
    }
    function Ii(a, b) {
      b &= ~uj;
      b &= ~Hi;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - Vc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Lj(a) {
      if ((X & 48) !== 0)
        throw Error(y(327));
      Oj();
      if (a === U && (a.expiredLanes & W) !== 0) {
        var b = W;
        var c = Tj(a, b);
        (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
      } else
        b = Uc(a, 0), c = Tj(a, b);
      a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
      if (c === 1)
        throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Uj(a);
      Mj(a, O());
      return null;
    }
    function Vj() {
      if (Cj !== null) {
        var a = Cj;
        Cj = null;
        a.forEach(function(a2) {
          a2.expiredLanes |= 24 & a2.pendingLanes;
          Mj(a2, O());
        });
      }
      ig();
    }
    function Wj(a, b) {
      var c = X;
      X |= 1;
      try {
        return a(b);
      } finally {
        X = c, X === 0 && (wj(), ig());
      }
    }
    function Xj(a, b) {
      var c = X;
      X &= -2;
      X |= 8;
      try {
        return a(b);
      } finally {
        X = c, X === 0 && (wj(), ig());
      }
    }
    function ni(a, b) {
      I(rj, qj);
      qj |= b;
      tj |= b;
    }
    function Ki() {
      qj = rj.current;
      H(rj);
    }
    function Qj(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      c !== -1 && (a.timeoutHandle = -1, pf(c));
      if (Y !== null)
        for (c = Y.return; c !== null; ) {
          var d = c;
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              d !== null && d !== void 0 && Gf();
              break;
            case 3:
              fh();
              H(N);
              H(M);
              uh();
              break;
            case 5:
              hh(d);
              break;
            case 4:
              fh();
              break;
            case 13:
              H(P);
              break;
            case 19:
              H(P);
              break;
            case 10:
              rg(d);
              break;
            case 23:
            case 24:
              Ki();
          }
          c = c.return;
        }
      U = a;
      Y = Tg(a.current, null);
      W = qj = tj = b;
      V2 = 0;
      sj = null;
      uj = Hi = Dg = 0;
    }
    function Sj(a, b) {
      do {
        var c = Y;
        try {
          qg();
          vh.current = Gh;
          if (yh) {
            for (var d = R.memoizedState; d !== null; ) {
              var e = d.queue;
              e !== null && (e.pending = null);
              d = d.next;
            }
            yh = false;
          }
          xh = 0;
          T = S = R = null;
          zh = false;
          pj.current = null;
          if (c === null || c.return === null) {
            V2 = 1;
            sj = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = W;
            h.flags |= 2048;
            h.firstEffect = h.lastEffect = null;
            if (k !== null && typeof k === "object" && typeof k.then === "function") {
              var l = k;
              if ((h.mode & 2) === 0) {
                var n = h.alternate;
                n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
              }
              var A = (P.current & 1) !== 0, p = g;
              do {
                var C;
                if (C = p.tag === 13) {
                  var x = p.memoizedState;
                  if (x !== null)
                    C = x.dehydrated !== null ? true : false;
                  else {
                    var w = p.memoizedProps;
                    C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
                  }
                }
                if (C) {
                  var z = p.updateQueue;
                  if (z === null) {
                    var u = new Set();
                    u.add(l);
                    p.updateQueue = u;
                  } else
                    z.add(l);
                  if ((p.mode & 2) === 0) {
                    p.flags |= 64;
                    h.flags |= 16384;
                    h.flags &= -2981;
                    if (h.tag === 1)
                      if (h.alternate === null)
                        h.tag = 17;
                      else {
                        var t = zg(-1, 1);
                        t.tag = 2;
                        Ag(h, t);
                      }
                    h.lanes |= 1;
                    break a;
                  }
                  k = void 0;
                  h = b;
                  var q = f.pingCache;
                  q === null ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = new Set(), q.set(l, k)));
                  if (!k.has(h)) {
                    k.add(h);
                    var v = Yj.bind(null, f, l, h);
                    l.then(v, v);
                  }
                  p.flags |= 4096;
                  p.lanes = b;
                  break a;
                }
                p = p.return;
              } while (p !== null);
              k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
            }
            V2 !== 5 && (V2 = 2);
            k = Mi(k, h);
            p = g;
            do {
              switch (p.tag) {
                case 3:
                  f = k;
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var J = Pi(p, f, b);
                  Bg(p, J);
                  break a;
                case 1:
                  f = k;
                  var K = p.type, Q = p.stateNode;
                  if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                    p.flags |= 4096;
                    b &= -b;
                    p.lanes |= b;
                    var L = Si(p, f, b);
                    Bg(p, L);
                    break a;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          Zj(c);
        } catch (va) {
          b = va;
          Y === c && c !== null && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Pj() {
      var a = oj.current;
      oj.current = Gh;
      return a === null ? Gh : a;
    }
    function Tj(a, b) {
      var c = X;
      X |= 16;
      var d = Pj();
      U === a && W === b || Qj(a, b);
      do
        try {
          ak();
          break;
        } catch (e) {
          Sj(a, e);
        }
      while (1);
      qg();
      X = c;
      oj.current = d;
      if (Y !== null)
        throw Error(y(261));
      U = null;
      W = 0;
      return V2;
    }
    function ak() {
      for (; Y !== null; )
        bk(Y);
    }
    function Rj() {
      for (; Y !== null && !Qf(); )
        bk(Y);
    }
    function bk(a) {
      var b = ck(a.alternate, a, qj);
      a.memoizedProps = a.pendingProps;
      b === null ? Zj(a) : Y = b;
      pj.current = null;
    }
    function Zj(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if ((b.flags & 2048) === 0) {
          c = Gi(c, b, qj);
          if (c !== null) {
            Y = c;
            return;
          }
          c = b;
          if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
            for (var d = 0, e = c.child; e !== null; )
              d |= e.lanes | e.childLanes, e = e.sibling;
            c.childLanes = d;
          }
          a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
        } else {
          c = Li(b);
          if (c !== null) {
            c.flags &= 2047;
            Y = c;
            return;
          }
          a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
        }
        b = b.sibling;
        if (b !== null) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (b !== null);
      V2 === 0 && (V2 = 5);
    }
    function Uj(a) {
      var b = eg();
      gg(99, dk.bind(null, a, b));
      return null;
    }
    function dk(a, b) {
      do
        Oj();
      while (yj !== null);
      if ((X & 48) !== 0)
        throw Error(y(327));
      var c = a.finishedWork;
      if (c === null)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current)
        throw Error(y(177));
      a.callbackNode = null;
      var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
      a.pendingLanes = e;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= e;
      a.mutableReadLanes &= e;
      a.entangledLanes &= e;
      e = a.entanglements;
      for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
        var k = 31 - Vc(f), l = 1 << k;
        e[k] = 0;
        g[k] = -1;
        h[k] = -1;
        f &= ~l;
      }
      Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
      a === U && (Y = U = null, W = 0);
      1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
      if (d !== null) {
        e = X;
        X |= 32;
        pj.current = null;
        kf = fd;
        g = Ne();
        if (Oe(g)) {
          if ("selectionStart" in g)
            h = { start: g.selectionStart, end: g.selectionEnd };
          else
            a:
              if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
                h = l.anchorNode;
                f = l.anchorOffset;
                k = l.focusNode;
                l = l.focusOffset;
                try {
                  h.nodeType, k.nodeType;
                } catch (va) {
                  h = null;
                  break a;
                }
                var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
                b:
                  for (; ; ) {
                    for (var u; ; ) {
                      w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                      w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                      w.nodeType === 3 && (n += w.nodeValue.length);
                      if ((u = w.firstChild) === null)
                        break;
                      z = w;
                      w = u;
                    }
                    for (; ; ) {
                      if (w === g)
                        break b;
                      z === h && ++C === f && (A = n);
                      z === k && ++x === l && (p = n);
                      if ((u = w.nextSibling) !== null)
                        break;
                      w = z;
                      z = w.parentNode;
                    }
                    w = u;
                  }
                h = A === -1 || p === -1 ? null : { start: A, end: p };
              } else
                h = null;
          h = h || { start: 0, end: 0 };
        } else
          h = null;
        lf = { focusedElem: g, selectionRange: h };
        fd = false;
        Ij = null;
        Jj = false;
        Z = d;
        do
          try {
            ek();
          } catch (va) {
            if (Z === null)
              throw Error(y(330));
            Wi(Z, va);
            Z = Z.nextEffect;
          }
        while (Z !== null);
        Ij = null;
        Z = d;
        do
          try {
            for (g = a; Z !== null; ) {
              var t = Z.flags;
              t & 16 && pb(Z.stateNode, "");
              if (t & 128) {
                var q = Z.alternate;
                if (q !== null) {
                  var v = q.ref;
                  v !== null && (typeof v === "function" ? v(null) : v.current = null);
                }
              }
              switch (t & 1038) {
                case 2:
                  fj(Z);
                  Z.flags &= -3;
                  break;
                case 6:
                  fj(Z);
                  Z.flags &= -3;
                  ij(Z.alternate, Z);
                  break;
                case 1024:
                  Z.flags &= -1025;
                  break;
                case 1028:
                  Z.flags &= -1025;
                  ij(Z.alternate, Z);
                  break;
                case 4:
                  ij(Z.alternate, Z);
                  break;
                case 8:
                  h = Z;
                  cj(g, h);
                  var J = h.alternate;
                  dj(h);
                  J !== null && dj(J);
              }
              Z = Z.nextEffect;
            }
          } catch (va) {
            if (Z === null)
              throw Error(y(330));
            Wi(Z, va);
            Z = Z.nextEffect;
          }
        while (Z !== null);
        v = lf;
        q = Ne();
        t = v.focusedElem;
        g = v.selectionRange;
        if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
          g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
          q = [];
          for (v = t; v = v.parentNode; )
            v.nodeType === 1 && q.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
          typeof t.focus === "function" && t.focus();
          for (t = 0; t < q.length; t++)
            v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
        fd = !!kf;
        lf = kf = null;
        a.current = c;
        Z = d;
        do
          try {
            for (t = a; Z !== null; ) {
              var K = Z.flags;
              K & 36 && Yi(t, Z.alternate, Z);
              if (K & 128) {
                q = void 0;
                var Q = Z.ref;
                if (Q !== null) {
                  var L = Z.stateNode;
                  switch (Z.tag) {
                    case 5:
                      q = L;
                      break;
                    default:
                      q = L;
                  }
                  typeof Q === "function" ? Q(q) : Q.current = q;
                }
              }
              Z = Z.nextEffect;
            }
          } catch (va) {
            if (Z === null)
              throw Error(y(330));
            Wi(Z, va);
            Z = Z.nextEffect;
          }
        while (Z !== null);
        Z = null;
        $f();
        X = e;
      } else
        a.current = c;
      if (xj)
        xj = false, yj = a, zj = b;
      else
        for (Z = d; Z !== null; )
          b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
      d = a.pendingLanes;
      d === 0 && (Ti = null);
      d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
      c = c.stateNode;
      if (Mf && typeof Mf.onCommitFiberRoot === "function")
        try {
          Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
        } catch (va) {
        }
      Mj(a, O());
      if (Qi)
        throw Qi = false, a = Ri, Ri = null, a;
      if ((X & 8) !== 0)
        return null;
      ig();
      return null;
    }
    function ek() {
      for (; Z !== null; ) {
        var a = Z.alternate;
        Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
        var b = Z.flags;
        (b & 256) !== 0 && Xi(a, Z);
        (b & 512) === 0 || xj || (xj = true, hg(97, function() {
          Oj();
          return null;
        }));
        Z = Z.nextEffect;
      }
    }
    function Oj() {
      if (zj !== 90) {
        var a = 97 < zj ? 97 : zj;
        zj = 90;
        return gg(a, fk);
      }
      return false;
    }
    function $i(a, b) {
      Aj.push(b, a);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function Zi(a, b) {
      Bj.push(b, a);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function fk() {
      if (yj === null)
        return false;
      var a = yj;
      yj = null;
      if ((X & 48) !== 0)
        throw Error(y(331));
      var b = X;
      X |= 32;
      var c = Bj;
      Bj = [];
      for (var d = 0; d < c.length; d += 2) {
        var e = c[d], f = c[d + 1], g = e.destroy;
        e.destroy = void 0;
        if (typeof g === "function")
          try {
            g();
          } catch (k) {
            if (f === null)
              throw Error(y(330));
            Wi(f, k);
          }
      }
      c = Aj;
      Aj = [];
      for (d = 0; d < c.length; d += 2) {
        e = c[d];
        f = c[d + 1];
        try {
          var h = e.create;
          e.destroy = h();
        } catch (k) {
          if (f === null)
            throw Error(y(330));
          Wi(f, k);
        }
      }
      for (h = a.current.firstEffect; h !== null; )
        a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
      X = b;
      ig();
      return true;
    }
    function gk(a, b, c) {
      b = Mi(c, b);
      b = Pi(a, b, 1);
      Ag(a, b);
      b = Hg();
      a = Kj(a, 1);
      a !== null && ($c(a, 1, b), Mj(a, b));
    }
    function Wi(a, b) {
      if (a.tag === 3)
        gk(a, a, b);
      else
        for (var c = a.return; c !== null; ) {
          if (c.tag === 3) {
            gk(c, a, b);
            break;
          } else if (c.tag === 1) {
            var d = c.stateNode;
            if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
              a = Mi(b, a);
              var e = Si(c, a, 1);
              Ag(c, e);
              e = Hg();
              c = Kj(c, 1);
              if (c !== null)
                $c(c, 1, e), Mj(c, e);
              else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
                try {
                  d.componentDidCatch(b, a);
                } catch (f) {
                }
              break;
            }
          }
          c = c.return;
        }
    }
    function Yj(a, b, c) {
      var d = a.pingCache;
      d !== null && d.delete(b);
      b = Hg();
      a.pingedLanes |= a.suspendedLanes & c;
      U === a && (W & c) === c && (V2 === 4 || V2 === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
      Mj(a, b);
    }
    function lj(a, b) {
      var c = a.stateNode;
      c !== null && c.delete(b);
      b = 0;
      b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
      c = Hg();
      a = Kj(a, b);
      a !== null && ($c(a, b, c), Mj(a, c));
    }
    var ck;
    ck = function(a, b, c) {
      var d = b.lanes;
      if (a !== null)
        if (a.memoizedProps !== b.pendingProps || N.current)
          ug = true;
        else if ((c & d) !== 0)
          ug = (a.flags & 16384) !== 0 ? true : false;
        else {
          ug = false;
          switch (b.tag) {
            case 3:
              ri(b);
              sh();
              break;
            case 5:
              gh(b);
              break;
            case 1:
              Ff(b.type) && Jf(b);
              break;
            case 4:
              eh(b, b.stateNode.containerInfo);
              break;
            case 10:
              d = b.memoizedProps.value;
              var e = b.type._context;
              I(mg, e._currentValue);
              e._currentValue = d;
              break;
            case 13:
              if (b.memoizedState !== null) {
                if ((c & b.child.childLanes) !== 0)
                  return ti(a, b, c);
                I(P, P.current & 1);
                b = hi(a, b, c);
                return b !== null ? b.sibling : null;
              }
              I(P, P.current & 1);
              break;
            case 19:
              d = (c & b.childLanes) !== 0;
              if ((a.flags & 64) !== 0) {
                if (d)
                  return Ai(a, b, c);
                b.flags |= 64;
              }
              e = b.memoizedState;
              e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
              I(P, P.current);
              if (d)
                break;
              else
                return null;
            case 23:
            case 24:
              return b.lanes = 0, mi(a, b, c);
          }
          return hi(a, b, c);
        }
      else
        ug = false;
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          d = b.type;
          a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          e = Ef(b, M.current);
          tg(b, c);
          e = Ch(null, b, d, a, e, c);
          b.flags |= 1;
          if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
            b.tag = 1;
            b.memoizedState = null;
            b.updateQueue = null;
            if (Ff(d)) {
              var f = true;
              Jf(b);
            } else
              f = false;
            b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
            xg(b);
            var g = d.getDerivedStateFromProps;
            typeof g === "function" && Gg(b, d, g, a);
            e.updater = Kg;
            b.stateNode = e;
            e._reactInternals = b;
            Og(b, d, a, c);
            b = qi(null, b, d, true, f, c);
          } else
            b.tag = 0, fi(null, b, e, c), b = b.child;
          return b;
        case 16:
          e = b.elementType;
          a: {
            a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            f = e._init;
            e = f(e._payload);
            b.type = e;
            f = b.tag = hk(e);
            a = lg(e, a);
            switch (f) {
              case 0:
                b = li(null, b, e, a, c);
                break a;
              case 1:
                b = pi(null, b, e, a, c);
                break a;
              case 11:
                b = gi(null, b, e, a, c);
                break a;
              case 14:
                b = ii(null, b, e, lg(e.type, a), d, c);
                break a;
            }
            throw Error(y(306, e, ""));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
        case 3:
          ri(b);
          d = b.updateQueue;
          if (a === null || d === null)
            throw Error(y(282));
          d = b.pendingProps;
          e = b.memoizedState;
          e = e !== null ? e.element : null;
          yg(a, b);
          Cg(b, d, null, c);
          d = b.memoizedState.element;
          if (d === e)
            sh(), b = hi(a, b, c);
          else {
            e = b.stateNode;
            if (f = e.hydrate)
              kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
            if (f) {
              a = e.mutableSourceEagerHydrationData;
              if (a != null)
                for (e = 0; e < a.length; e += 2)
                  f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
              c = Zg(b, null, d, c);
              for (b.child = c; c; )
                c.flags = c.flags & -3 | 1024, c = c.sibling;
            } else
              fi(a, b, d, c), sh();
            b = b.child;
          }
          return b;
        case 5:
          return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
        case 6:
          return a === null && ph(b), null;
        case 13:
          return ti(a, b, c);
        case 4:
          return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
        case 7:
          return fi(a, b, b.pendingProps, c), b.child;
        case 8:
          return fi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return fi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            g = b.memoizedProps;
            f = e.value;
            var h = b.type._context;
            I(mg, h._currentValue);
            h._currentValue = f;
            if (g !== null)
              if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
                if (g.children === e.children && !N.current) {
                  b = hi(a, b, c);
                  break a;
                }
              } else
                for (h = b.child, h !== null && (h.return = b); h !== null; ) {
                  var k = h.dependencies;
                  if (k !== null) {
                    g = h.child;
                    for (var l = k.firstContext; l !== null; ) {
                      if (l.context === d && (l.observedBits & f) !== 0) {
                        h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                        h.lanes |= c;
                        l = h.alternate;
                        l !== null && (l.lanes |= c);
                        sg(h.return, c);
                        k.lanes |= c;
                        break;
                      }
                      l = l.next;
                    }
                  } else
                    g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
                  if (g !== null)
                    g.return = h;
                  else
                    for (g = h; g !== null; ) {
                      if (g === b) {
                        g = null;
                        break;
                      }
                      h = g.sibling;
                      if (h !== null) {
                        h.return = g.return;
                        g = h;
                        break;
                      }
                      g = g.return;
                    }
                  h = g;
                }
            fi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
        case 14:
          return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
        case 15:
          return ki(a, b, b.type, b.pendingProps, d, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
        case 19:
          return Ai(a, b, c);
        case 23:
          return mi(a, b, c);
        case 24:
          return mi(a, b, c);
      }
      throw Error(y(156, b.tag));
    };
    function ik(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.flags = 0;
      this.lastEffect = this.firstEffect = this.nextEffect = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function nh(a, b, c, d) {
      return new ik(a, b, c, d);
    }
    function ji(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function hk(a) {
      if (typeof a === "function")
        return ji(a) ? 1 : 0;
      if (a !== void 0 && a !== null) {
        a = a.$$typeof;
        if (a === Aa)
          return 11;
        if (a === Da)
          return 14;
      }
      return 2;
    }
    function Tg(a, b) {
      var c = a.alternate;
      c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Vg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if (typeof a === "function")
        ji(a) && (g = 1);
      else if (typeof a === "string")
        g = 5;
      else
        a:
          switch (a) {
            case ua:
              return Xg(c.children, e, f, b);
            case Ha:
              g = 8;
              e |= 16;
              break;
            case wa:
              g = 8;
              e |= 1;
              break;
            case xa:
              return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
            case Ba:
              return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
            case Ca:
              return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
            case Ia:
              return vi(c, e, f, b);
            case Ja:
              return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
            default:
              if (typeof a === "object" && a !== null)
                switch (a.$$typeof) {
                  case ya:
                    g = 10;
                    break a;
                  case za:
                    g = 9;
                    break a;
                  case Aa:
                    g = 11;
                    break a;
                  case Da:
                    g = 14;
                    break a;
                  case Ea:
                    g = 16;
                    d = null;
                    break a;
                  case Fa:
                    g = 22;
                    break a;
                }
              throw Error(y(130, a == null ? a : typeof a, ""));
          }
      b = nh(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Xg(a, b, c, d) {
      a = nh(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function vi(a, b, c, d) {
      a = nh(23, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      return a;
    }
    function Ug(a, b, c) {
      a = nh(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Wg(a, b, c) {
      b = nh(4, a.children !== null ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function jk(a, b, c) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.pendingContext = this.context = null;
      this.hydrate = c;
      this.callbackNode = null;
      this.callbackPriority = 0;
      this.eventTimes = Zc(0);
      this.expirationTimes = Zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = Zc(0);
      this.mutableSourceEagerHydrationData = null;
    }
    function kk(a, b, c) {
      var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function lk(a, b, c, d) {
      var e = b.current, f = Hg(), g = Ig(e);
      a:
        if (c) {
          c = c._reactInternals;
          b: {
            if (Zb(c) !== c || c.tag !== 1)
              throw Error(y(170));
            var h = c;
            do {
              switch (h.tag) {
                case 3:
                  h = h.stateNode.context;
                  break b;
                case 1:
                  if (Ff(h.type)) {
                    h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                    break b;
                  }
              }
              h = h.return;
            } while (h !== null);
            throw Error(y(171));
          }
          if (c.tag === 1) {
            var k = c.type;
            if (Ff(k)) {
              c = If(c, k, h);
              break a;
            }
          }
          c = h;
        } else
          c = Cf;
      b.context === null ? b.context = c : b.pendingContext = c;
      b = zg(f, g);
      b.payload = { element: a };
      d = d === void 0 ? null : d;
      d !== null && (b.callback = d);
      Ag(e, b);
      Jg(e, g, f);
      return g;
    }
    function mk(a) {
      a = a.current;
      if (!a.child)
        return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function nk(a, b) {
      a = a.memoizedState;
      if (a !== null && a.dehydrated !== null) {
        var c = a.retryLane;
        a.retryLane = c !== 0 && c < b ? c : b;
      }
    }
    function ok(a, b) {
      nk(a, b);
      (a = a.alternate) && nk(a, b);
    }
    function pk() {
      return null;
    }
    function qk(a, b, c) {
      var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
      c = new jk(a, b, c != null && c.hydrate === true);
      b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
      c.current = b;
      b.stateNode = c;
      xg(b);
      a[ff] = c.current;
      cf(a.nodeType === 8 ? a.parentNode : a);
      if (d)
        for (a = 0; a < d.length; a++) {
          b = d[a];
          var e = b._getVersion;
          e = e(b._source);
          c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
        }
      this._internalRoot = c;
    }
    qk.prototype.render = function(a) {
      lk(a, this._internalRoot, null, null);
    };
    qk.prototype.unmount = function() {
      var a = this._internalRoot, b = a.containerInfo;
      lk(null, a, null, function() {
        b[ff] = null;
      });
    };
    function rk(a) {
      return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
    }
    function sk(a, b) {
      b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
      if (!b)
        for (var c; c = a.lastChild; )
          a.removeChild(c);
      return new qk(a, 0, b ? { hydrate: true } : void 0);
    }
    function tk(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f._internalRoot;
        if (typeof e === "function") {
          var h = e;
          e = function() {
            var a2 = mk(g);
            h.call(a2);
          };
        }
        lk(b, g, a, e);
      } else {
        f = c._reactRootContainer = sk(c, d);
        g = f._internalRoot;
        if (typeof e === "function") {
          var k = e;
          e = function() {
            var a2 = mk(g);
            k.call(a2);
          };
        }
        Xj(function() {
          lk(b, g, a, e);
        });
      }
      return mk(g);
    }
    ec = function(a) {
      if (a.tag === 13) {
        var b = Hg();
        Jg(a, 4, b);
        ok(a, 4);
      }
    };
    fc = function(a) {
      if (a.tag === 13) {
        var b = Hg();
        Jg(a, 67108864, b);
        ok(a, 67108864);
      }
    };
    gc = function(a) {
      if (a.tag === 13) {
        var b = Hg(), c = Ig(a);
        Jg(a, c, b);
        ok(a, c);
      }
    };
    hc = function(a, b) {
      return b();
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          ab(a, c);
          b = c.name;
          if (c.type === "radio" && b != null) {
            for (c = a; c.parentNode; )
              c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e)
                  throw Error(y(90));
                Wa(d);
                ab(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, b != null && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Wj;
    Hb = function(a, b, c, d, e) {
      var f = X;
      X |= 4;
      try {
        return gg(98, a.bind(null, b, c, d, e));
      } finally {
        X = f, X === 0 && (wj(), ig());
      }
    };
    Ib = function() {
      (X & 49) === 0 && (Vj(), Oj());
    };
    Jb = function(a, b) {
      var c = X;
      X |= 2;
      try {
        return a(b);
      } finally {
        X = c, X === 0 && (wj(), ig());
      }
    };
    function uk(a, b) {
      var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rk(b))
        throw Error(y(200));
      return kk(a, b, null, c);
    }
    var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] };
    var wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
    var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = cc(a);
      return a === null ? null : a.stateNode;
    }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
      yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!yk.isDisabled && yk.supportsFiber)
        try {
          Lf = yk.inject(xk), Mf = yk;
        } catch (a) {
        }
    }
    var yk;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
    exports2.createPortal = uk;
    exports2.findDOMNode = function(a) {
      if (a == null)
        return null;
      if (a.nodeType === 1)
        return a;
      var b = a._reactInternals;
      if (b === void 0) {
        if (typeof a.render === "function")
          throw Error(y(188));
        throw Error(y(268, Object.keys(a)));
      }
      a = cc(b);
      a = a === null ? null : a.stateNode;
      return a;
    };
    exports2.flushSync = function(a, b) {
      var c = X;
      if ((c & 48) !== 0)
        return a(b);
      X |= 1;
      try {
        if (a)
          return gg(99, a.bind(null, b));
      } finally {
        X = c, ig();
      }
    };
    exports2.hydrate = function(a, b, c) {
      if (!rk(b))
        throw Error(y(200));
      return tk(null, a, b, true, c);
    };
    exports2.render = function(a, b, c) {
      if (!rk(b))
        throw Error(y(200));
      return tk(null, a, b, false, c);
    };
    exports2.unmountComponentAtNode = function(a) {
      if (!rk(a))
        throw Error(y(40));
      return a._reactRootContainer ? (Xj(function() {
        tk(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[ff] = null;
        });
      }), true) : false;
    };
    exports2.unstable_batchedUpdates = Wj;
    exports2.unstable_createPortal = function(a, b) {
      return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    exports2.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!rk(c))
        throw Error(y(200));
      if (a == null || a._reactInternals === void 0)
        throw Error(y(38));
      return tk(a, b, c, false, d);
    };
    exports2.version = "17.0.2";
  }
});

// ../../node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "../../node_modules/react-dom/index.js"(exports2, module2) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module2.exports = require_react_dom_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// src/index.tsx
var import_react54 = __toModule(require_react());
var import_react_dom2 = __toModule(require_react_dom());

// src/app.tsx
var React5 = __toModule(require_react());

// ../../node_modules/mobx/dist/mobx.esm.js
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (false) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function")
      e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal;
}
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /* @__PURE__ */ Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die(false ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
  }
}
function once(func) {
  var invoked = false;
  return function() {
    if (invoked)
      return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop2() {
};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;
  if (!isObject(value))
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null)
    return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
}
function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor)
    return false;
  if (constructor.name === "GeneratorFunction" || constructor.displayName === "GeneratorFunction")
    return true;
  return false;
}
function addHiddenProp(object3, propName, value) {
  defineProperty(object3, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object3, propName, value) {
  defineProperty(object3, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
function getPlainObjectKeys(object3) {
  var keys = Object.keys(object3);
  if (!hasGetOwnPropertySymbols)
    return keys;
  var symbols = Object.getOwnPropertySymbols(object3);
  if (!symbols.length)
    return keys;
  return [].concat(keys, symbols.filter(function(s) {
    return objectPrototype.propertyIsEnumerable.call(object3, s);
  }));
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
  var res = {};
  ownKeys(target).forEach(function(key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }
  return Object.assign(decorator, annotation);
}
function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  }
  if (false) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  assertNotDecorated(prototype, annotation, key);
  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}
function assertNotDecorated(prototype, annotation, key) {
  if (false) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed.\nUse '@override' decorator for methods overriden by subclass.");
  }
}
function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    if (false) {
      die("No annotations were passed to makeObservable, but no decorated members have been found either");
    }
    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }
  return target[storedAnnotationsSymbol];
}
var $mobx = /* @__PURE__ */ Symbol("mobx administration");
var Atom = /* @__PURE__ */ function() {
  function Atom3(name_) {
    if (name_ === void 0) {
      name_ = false ? "Atom@" + getNextId() : "Atom";
    }
    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  }
  var _proto = Atom3.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  };
  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  _proto.toString = function toString3() {
    return this.name_;
  };
  return Atom3;
}();
var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }
  return atom;
}
function identityComparer(a, b) {
  return a === b;
}
function structuralComparer(a, b) {
  return deepEqual(a, b);
}
function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
  if (Object.is)
    return Object.is(a, b);
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};
function deepEnhancer(v, _14, name) {
  if (isObservable(v))
    return v;
  if (Array.isArray(v))
    return observable.array(v, {
      name
    });
  if (isPlainObject(v))
    return observable.object(v, void 0, {
      name
    });
  if (isES6Map(v))
    return observable.map(v, {
      name
    });
  if (isES6Set(v))
    return observable.set(v, {
      name
    });
  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }
  return v;
}
function shallowEnhancer(v, _14, name) {
  if (v === void 0 || v === null)
    return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
    return v;
  if (Array.isArray(v))
    return observable.array(v, {
      name,
      deep: false
    });
  if (isPlainObject(v))
    return observable.object(v, void 0, {
      name,
      deep: false
    });
  if (isES6Map(v))
    return observable.map(v, {
      name,
      deep: false
    });
  if (isES6Set(v))
    return observable.set(v, {
      name,
      deep: false
    });
  if (false)
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (false)
    die("observable.struct should not be used with observable values");
  if (deepEqual(v, oldValue))
    return oldValue;
  return v;
}
var OVERRIDE = "override";
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}
function make_$1(adm, key, descriptor, source) {
  var _this$options_;
  if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (isAction(descriptor.value)) {
    return 1;
  }
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if (false) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, ((_annotation$options_4 = annotation.options_) == null ? void 0 : _annotation$options_4.bound) ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}
function make_$2(adm, key, descriptor, source) {
  var _this$options_;
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow(adm.target_[key])) {
    if (this.extend_(adm, key, descriptor, false) === null)
      return 0;
  }
  if (isFlow(descriptor.value)) {
    return 1;
  }
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if (false) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if (bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: flow(value),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}
function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get4 = _ref2.get;
  if (false) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}
function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}
function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;
  if (false) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}
var AUTO = "true";
var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}
function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    var set5 = createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set5
      }) === null ? 0 : 2;
    }
    defineProperty(source, key, {
      configurable: true,
      set: set5
    });
    return 2;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator(descriptor.value)) {
      var _this$options_;
      var flowAnnotation3 = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow.bound : flow;
      return flowAnnotation3.make_(adm, key, descriptor, source);
    }
    var actionAnnotation3 = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction.bound : autoAction;
    return actionAnnotation3.make_(adm, key, descriptor, source);
  }
  var observableAnnotation3 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
  if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation3.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation3 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation3.extend_(adm, key, descriptor, proxyTrap);
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
var defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
function createObservable(v, arg2, arg3) {
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  }
  if (isObservable(v))
    return v;
  if (isPlainObject(v))
    return observable.object(v, arg2, arg3);
  if (Array.isArray(v))
    return observable.array(v, arg2);
  if (isES6Map(v))
    return observable.map(v, arg2);
  if (isES6Set(v))
    return observable.set(v, arg2);
  if (typeof v === "object" && v !== null)
    return v;
  return observable.box(v, arg2);
}
Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
  shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
};
var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
var computed = function computed2(arg1, arg2) {
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }
  if (isPlainObject(arg1)) {
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  if (false) {
    if (!isFunction(arg1))
      die("First argument to `computed` should be an expression.");
    if (isFunction(arg2))
      die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
  }
  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config;
var _getDescriptor;
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction3, ref) {
  if (autoAction3 === void 0) {
    autoAction3 = false;
  }
  if (false) {
    if (!isFunction(fn))
      die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName)
      die("actions should have valid names, got: '" + actionName + "'");
  }
  function res() {
    return executeAction(actionName, autoAction3, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, scope, args) {
  var notifySpy_ = false;
  var startTime_ = 0;
  if (false) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }
  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges;
  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_)
    untrackedEnd(runInfo.prevDerivation_);
  if (false) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
var _Symbol$toPrimitive;
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /* @__PURE__ */ function(_Atom) {
  _inheritsLoose(ObservableValue3, _Atom);
  function ObservableValue3(value, enhancer, name_, notifySpy, equals) {
    var _this;
    if (name_ === void 0) {
      name_ = false ? "ObservableValue@" + getNextId() : "ObservableValue";
    }
    if (notifySpy === void 0) {
      notifySpy = true;
    }
    if (equals === void 0) {
      equals = comparer["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, void 0, name_);
    if (false) {
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }
    return _this;
  }
  var _proto = ObservableValue3.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== void 0)
      return this.dehancer(value);
    return value;
  };
  _proto.set = function set5(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      if (false) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue,
          oldValue
        });
      }
      this.setNewValue_(newValue);
      if (false)
        spyReportEnd();
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change)
        return globalState.UNCHANGED;
      newValue = change.newValue;
    }
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  };
  _proto.get = function get4() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately)
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: void 0
      });
    return registerListener(this, listener);
  };
  _proto.raw = function raw() {
    return this.value_;
  };
  _proto.toJSON = function toJSON3() {
    return this.get();
  };
  _proto.toString = function toString3() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[_Symbol$toPrimitive] = function() {
    return this.valueOf();
  };
  return ObservableValue3;
}(Atom);
var _Symbol$toPrimitive$1;
_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /* @__PURE__ */ function() {
  function ComputedValue3(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get)
      die(31);
    this.derivation = options.get;
    this.name_ = options.name || (false ? "ComputedValue@" + getNextId() : "ComputedValue");
    if (options.set) {
      this.setter_ = createAction(false ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue3.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.get = function get4() {
    if (this.isComputing_)
      die(32, this.name_, this.derivation);
    if (globalState.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch();
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext)
          globalState.trackingContext = this;
        if (this.trackAndCompute())
          propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException(result))
      throw result.cause;
    return result;
  };
  _proto.set = function set5(value) {
    if (this.setter_) {
      if (this.isRunningSetter_)
        die(33, this.name_);
      this.isRunningSetter_ = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else
      die(34, this.name_);
  };
  _proto.trackAndCompute = function trackAndCompute() {
    var oldValue = this.value_;
    var wasSuspended = this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
      if (false) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue,
          newValue
        });
      }
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true;
    var prev = allowStateChangesStart(false);
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = void 0;
      if (false) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
      }
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = void 0;
    return autorun(function() {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (true)
      return;
    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
    if (globalState.computedRequiresReaction || this.requiresReaction_) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };
  _proto.toString = function toString3() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[_Symbol$toPrimitive$1] = function() {
    return this.valueOf();
  };
  return ComputedValue3;
}();
var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_3) {
  IDerivationState_3[IDerivationState_3["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_3[IDerivationState_3["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_3[IDerivationState_3["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_3[IDerivationState_3["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode3) {
  TraceMode3[TraceMode3["NONE"] = 0] = "NONE";
  TraceMode3[TraceMode3["LOG"] = 1] = "LOG";
  TraceMode3[TraceMode3["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException2(cause) {
  this.cause = void 0;
  this.cause = cause;
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;
    case IDerivationState_.POSSIBLY_STALE_: {
      var prevAllowStateReads = allowStateReadsStart(true);
      var prevUntracked = untrackedStart();
      var obs = derivation.observing_, l = obs.length;
      for (var i = 0; i < l; i++) {
        var obj = obs[i];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
          if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return true;
          }
        }
      }
      changeDependenciesStateTo0(derivation);
      untrackedEnd(prevUntracked);
      allowStateReadsEnd(prevAllowStateReads);
      return false;
    }
  }
}
function checkIfStateModificationsAreAllowed(atom) {
  if (true) {
    return;
  }
  var hasObservers = atom.observers_.size > 0;
  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always"))
    console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable3) {
  if (false) {
    console.warn("[mobx] Observable '" + observable3.name_ + "' being read outside a reactive context.");
  }
}
function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
  if (true)
    return;
  if (derivation.observing_.length !== 0)
    return;
  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
function bindDependencies(derivation) {
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
  var i0 = 0, l = derivation.unboundDepsCount_;
  for (var i = 0; i < l; i++) {
    var dep = observing[i];
    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i)
        observing[i0] = dep;
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l = prevObserving.length;
  while (l--) {
    var _dep = prevObserving[l];
    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }
    _dep.diffValue_ = 0;
  }
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;
  while (i--) {
    removeObserver(obs[i], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action3) {
  var prev = untrackedStart();
  try {
    return action3();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_)
    return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;
  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
var MobXGlobals = function MobXGlobals2() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /* @__PURE__ */ function() {
  var global2 = /* @__PURE__ */ getGlobal();
  if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals)
    canMergeGlobalState = false;
  if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version)
    canMergeGlobalState = false;
  if (!canMergeGlobalState) {
    setTimeout(function() {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global2.__mobxGlobals) {
    global2.__mobxInstanceCount += 1;
    if (!global2.__mobxGlobals.UNCHANGED)
      global2.__mobxGlobals.UNCHANGED = {};
    return global2.__mobxGlobals;
  } else {
    global2.__mobxInstanceCount = 1;
    return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions)
    die(36);
  isolateCalled = true;
  if (canMergeGlobalState) {
    var global2 = getGlobal();
    if (--global2.__mobxInstanceCount === 0)
      global2.__mobxGlobals = void 0;
    globalState = new MobXGlobals();
  }
}
function addObserver(observable3, node) {
  observable3.observers_.add(node);
  if (observable3.lowestObserverState_ > node.dependenciesState_)
    observable3.lowestObserverState_ = node.dependenciesState_;
}
function removeObserver(observable3, node) {
  observable3.observers_["delete"](node);
  if (observable3.observers_.size === 0) {
    queueForUnobservation(observable3);
  }
}
function queueForUnobservation(observable3) {
  if (observable3.isPendingUnobservation_ === false) {
    observable3.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable3);
  }
}
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    var list = globalState.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable3 = list[i];
      observable3.isPendingUnobservation_ = false;
      if (observable3.observers_.size === 0) {
        if (observable3.isBeingObserved_) {
          observable3.isBeingObserved_ = false;
          observable3.onBUO();
        }
        if (observable3 instanceof ComputedValue) {
          observable3.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable3) {
  checkIfStateReadsAreAllowed(observable3);
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable3.lastAccessedBy_) {
      observable3.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable3;
      if (!observable3.isBeingObserved_ && globalState.trackingContext) {
        observable3.isBeingObserved_ = true;
        observable3.onBO();
      }
    }
    return true;
  } else if (observable3.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable3);
  }
  return false;
}
function propagateChanged(observable3) {
  if (observable3.lowestObserverState_ === IDerivationState_.STALE_)
    return;
  observable3.lowestObserverState_ = IDerivationState_.STALE_;
  observable3.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (false) {
        logTraceInfo(d, observable3);
      }
      d.onBecomeStale_();
    }
    d.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable3) {
  if (observable3.lowestObserverState_ === IDerivationState_.STALE_)
    return;
  observable3.lowestObserverState_ = IDerivationState_.STALE_;
  observable3.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;
      if (false) {
        logTraceInfo(d, observable3);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable3.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable3) {
  if (observable3.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_)
    return;
  observable3.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable3.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  });
}
var Reaction = /* @__PURE__ */ function() {
  function Reaction3(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = false ? "Reaction@" + getNextId() : "Reaction";
    }
    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction3.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  };
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending_ = true;
        try {
          this.onInvalidate_();
          if (false) {
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return;
    }
    startBatch();
    var notify = isSpyEnabled();
    var startTime;
    if (false) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }
    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext;
    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, void 0);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;
    if (this.isDisposed_) {
      clearObserving(this);
    }
    if (isCaughtException(result))
      this.reportExceptionInDerivation_(result.cause);
    if (false) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries)
      throw error;
    var message = false ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
    } else if (false)
      console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
    if (false) {
      spyReport({
        type: "error",
        name: this.name_,
        message,
        error: "" + error
      });
    }
    globalState.globalReactionErrorHandlers.forEach(function(f) {
      return f(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;
      if (!this.isRunning_) {
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };
  _proto.toString = function toString3() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }
    trace(this, enterBreakPoint);
  };
  return Reaction3;
}();
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler2(f) {
  return f();
};
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions)
    return;
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error(false ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0);
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;
  reactionScheduler = function reactionScheduler4(f) {
    return fn(function() {
      return baseScheduler(f);
    });
  };
}
function isSpyEnabled() {
  return false;
}
function spy(listener) {
  if (true) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  } else {
    globalState.spyListeners.push(listener);
    return once(function() {
      globalState.spyListeners = globalState.spyListeners.filter(function(l) {
        return l !== listener;
      });
    });
  }
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionFactory(autoAction3) {
  var res = function action3(arg1, arg2) {
    if (isFunction(arg1))
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction3);
    if (isFunction(arg2))
      return createAction(arg1, arg2, autoAction3);
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction3 ? autoActionAnnotation : actionAnnotation);
    }
    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction3 ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction3
      }));
    }
    if (false)
      die("Invalid arguments for `action`");
  };
  return res;
}
var action = /* @__PURE__ */ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /* @__PURE__ */ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}
function autorun(view, opts) {
  var _opts$name, _opts;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  if (false) {
    if (!isFunction(view))
      die("Autorun expects a function as first argument");
    if (isAction(view))
      die("Autorun does not accept actions since actions are untrackable");
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : false ? view.name || "Autorun@" + getNextId() : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    reaction = new Reaction(name, function() {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts);
    var isScheduled = false;
    reaction = new Reaction(name, function() {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function() {
          isScheduled = false;
          if (!reaction.isDisposed_)
            reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction);
  }
  reaction.schedule_();
  return reaction.getDisposer_();
}
var run = function run2(f) {
  return f();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
    return setTimeout(f, opts.delay);
  } : run;
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }
  return function() {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed";
function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }
  var useProxies = options.useProxies, enforceActions = options.enforceActions;
  if (useProxies !== void 0) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }
  if (useProxies === "ifavailable")
    globalState.verifyProxies = true;
  if (enforceActions !== void 0) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(key) {
    if (key in options)
      globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;
  if (false) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }
  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}
function extendObservable(target, properties, annotations, options) {
  if (false) {
    if (arguments.length > 4)
      die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object")
      die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target))
      die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties))
      die("'extendObservable' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations))
      die("Extending an object with another observable (object) is not supported");
  }
  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();
  try {
    ownKeys(descriptors).forEach(function(key) {
      adm.extend_(key, descriptors[key], !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }
  return target;
}
function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0)
    result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}
function unique(list) {
  return Array.from(new Set(list));
}
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  }
  if (false)
    die("Flow expects single argument with generator function");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  var res = function res2() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = void 0;
    var promise = new Promise(function(resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res3) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          ret.then(next, reject);
          return;
        }
        if (ret.done)
          return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(void 0);
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
      try {
        if (pendingPromise)
          cancelPromise(pendingPromise);
        var _res = gen["return"](void 0);
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise);
        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e);
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel))
    promise.cancel();
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function _isObservable(value, property) {
  if (!value)
    return false;
  if (property !== void 0) {
    if (false)
      return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if (false)
    die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}
function trace() {
  if (true)
    die("trace() is not available in production builds");
  var enterBreakPoint = false;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof args[args.length - 1] === "boolean")
    enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);
  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }
  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }
  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;
    case 1:
      return getAtom(args[0]);
    case 2:
      return getAtom(args[0], args[1]);
  }
}
function transaction(action3, thisArg) {
  if (thisArg === void 0) {
    thisArg = void 0;
  }
  startBatch();
  try {
    return action3.apply(thisArg);
  } finally {
    endBatch();
  }
}
function getAdm(target) {
  return target[$mobx];
}
var objectProxyTraps = {
  has: function has(target, name) {
    if (false)
      warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set2(target, name, value) {
    var _getAdm$set_;
    if (!isStringish(name))
      return false;
    if (false) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    }
    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;
    if (false) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }
    if (!isStringish(name))
      return false;
    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty2(target, name, descriptor) {
    var _getAdm$definePropert;
    if (false) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    }
    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys2(target) {
    if (false)
      warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}
function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function() {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1)
      interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type)
        die(14);
      if (!change)
        break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function() {
    var idx = listeners.indexOf(handler);
    if (idx !== -1)
      listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners)
    return;
  listeners = listeners.slice();
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}
function makeObservable(target, annotations, options) {
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();
  try {
    var _annotations;
    if (false) {
      die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
    }
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
    ownKeys(annotations).forEach(function(key) {
      return adm.make_(key, annotations[key]);
    });
  } finally {
    endBatch();
  }
  return target;
}
var keysSymbol = /* @__PURE__ */ Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (false) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target)))
      die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    if (isObservableObject(target))
      die("makeAutoObservable can only be used on objects not already made observable");
  }
  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }
  var adm = asObservableObject(target, options)[$mobx];
  if (!target[keysSymbol]) {
    var proto = Object.getPrototypeOf(target);
    var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
    keys["delete"]("constructor");
    keys["delete"]($mobx);
    addHiddenProp(proto, keysSymbol, keys);
  }
  startBatch();
  try {
    target[keysSymbol].forEach(function(key) {
      return adm.make_(key, !overrides ? true : key in overrides ? overrides[key] : true);
    });
  } finally {
    endBatch();
  }
  return target;
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 1e4;
var arrayTraps = {
  get: function get2(target, name) {
    var adm = target[$mobx];
    if (name === $mobx)
      return adm;
    if (name === "length")
      return adm.getArrayLength_();
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target[name];
  },
  set: function set3(target, name, value) {
    var adm = target[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions2() {
    die(15);
  }
};
var ObservableArrayAdministration = /* @__PURE__ */ function() {
  function ObservableArrayAdministration3(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = false ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, false ? name + "[..]" : "ObservableArray[..]");
    };
  }
  var _proto = ObservableArrayAdministration3.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0)
      return this.dehancer(value);
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== void 0 && values.length > 0)
      return values.map(this.dehancer);
    return values;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0)
      die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength)
      return;
    else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = void 0;
      }
      this.spliceWithArray_(currentLength, 0, newItems);
    } else
      this.spliceWithArray_(newLength, currentLength - newLength);
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_)
      die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0)
      reserveArrayBuffer(oldLength + delta + 1);
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === void 0)
      index = 0;
    else if (index > length)
      index = length;
    else if (index < 0)
      index = Math.max(0, length + index);
    if (arguments.length === 1)
      deleteCount = length - index;
    else if (deleteCount === void 0 || deleteCount === null)
      deleteCount = 0;
    else
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === void 0)
      newItems = EMPTY_ARRAY;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change)
        return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
      return _this.enhancer_(v, void 0);
    });
    if (this.legacyMode_ || false) {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0)
      this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    if (false)
      spyReportStart(change);
    this.atom_.reportChanged();
    if (notify)
      notifyListeners(this, change);
    if (false)
      spyReportEnd();
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (false)
      spyReportStart(change);
    this.atom_.reportChanged();
    if (notify)
      notifyListeners(this, change);
    if (false)
      spyReportEnd();
  };
  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }
    console.warn(false ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };
  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;
    if (index < values.length) {
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index,
          newValue
        });
        if (!change)
          return;
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      die(17, index, values.length);
    }
  };
  return ObservableArrayAdministration3;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = false ? "ObservableArray@" + getNextId() : "ObservableArray";
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;
  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }
  return proxy;
}
var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  toJSON: function toJSON() {
    return this.slice();
  },
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }
    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
function simpleFunc(funcName) {
  return function() {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc(funcName) {
  return function(callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function(element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
function reduceLikeFunc(funcName) {
  return function() {
    var _this3 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    var callback = arguments[0];
    arguments[0] = function(accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var _Symbol$iterator;
var _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /* @__PURE__ */ function() {
  function ObservableMap3(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = false ? "ObservableMap@" + getNextId() : "ObservableMap";
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction(Map)) {
      die(18);
    }
    this.keysAtom_ = createAtom(false ? this.name_ + ".keys()" : "ObservableMap.keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }
  var _proto = ObservableMap3.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has3(key) {
    var _this = this;
    if (!globalState.trackingDerivation)
      return this.has_(key);
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, false ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function() {
        return _this.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set5(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change)
        return this;
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this2 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change)
        return false;
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      if (false)
        spyReportStart(_change);
      transaction(function() {
        var _this2$hasMap_$get;
        _this2.keysAtom_.reportChanged();
        (_this2$hasMap_$get = _this2.hasMap_.get(key)) == null ? void 0 : _this2$hasMap_$get.setNewValue_(false);
        var observable3 = _this2.data_.get(key);
        observable3.setNewValue_(void 0);
        _this2.data_["delete"](key);
      });
      if (notify)
        notifyListeners(this, _change);
      if (false)
        spyReportEnd();
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable3 = this.data_.get(key);
    newValue = observable3.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable3.value_,
        name: key,
        newValue
      } : null;
      if (false)
        spyReportStart(change);
      observable3.setNewValue_(newValue);
      if (notify)
        notifyListeners(this, change);
      if (false)
        spyReportEnd();
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function() {
      var _this3$hasMap_$get;
      var observable3 = new ObservableValue(newValue, _this3.enhancer_, false ? _this3.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);
      _this3.data_.set(key, observable3);
      newValue = observable3.value_;
      (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(true);
      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue
    } : null;
    if (false)
      spyReportStart(change);
    if (notify)
      notifyListeners(this, change);
    if (false)
      spyReportEnd();
  };
  _proto.get = function get4(key) {
    if (this.has(key))
      return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(void 0);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
        return {
          done,
          value: done ? void 0 : self2.get(value)
        };
      }
    });
  };
  _proto.entries = function entries() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
        return {
          done,
          value: done ? void 0 : [value, self2.get(value)]
        };
      }
    });
  };
  _proto[_Symbol$iterator] = function() {
    return this.entries();
  };
  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  };
  _proto.merge = function merge(other) {
    var _this4 = this;
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(function() {
      if (isPlainObject(other))
        getPlainObjectKeys(other).forEach(function(key) {
          return _this4.set(key, other[key]);
        });
      else if (Array.isArray(other))
        other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this4.set(key, value);
        });
      else if (isES6Map(other)) {
        if (other.constructor !== Map)
          die(19, other);
        other.forEach(function(value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== void 0)
        die(20, other);
    });
    return this;
  };
  _proto.clear = function clear3() {
    var _this5 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done; ) {
          var key = _step2.value;
          _this5["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace3(values) {
    var _this6 = this;
    transaction(function() {
      var replacementMap = convertToMap(values);
      var orderedData = new Map();
      var keysReportChangedCalled = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
        var key = _step3.value;
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            var value = _this6.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
        var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
        var keyExisted = _this6.data_.has(_key);
        _this6.set(_key, _value);
        if (_this6.data_.has(_key)) {
          var _value2 = _this6.data_.get(_key);
          orderedData.set(_key, _value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      _this6.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString3() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON3() {
    return Array.from(this);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (false)
      die("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _createClass(ObservableMap3, [{
    key: "size",
    get: function get4() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get4() {
      return "Map";
    }
  }]);
  return ObservableMap3;
}();
var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map3 = new Map();
    for (var key in dataStructure) {
      map3.set(key, dataStructure[key]);
    }
    return map3;
  } else {
    return die(21, dataStructure);
  }
}
var _Symbol$iterator$1;
var _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /* @__PURE__ */ function() {
  function ObservableSet3(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = false ? "ObservableSet@" + getNextId() : "ObservableSet";
    }
    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction(Set)) {
      die(22);
    }
    this.atom_ = createAtom(this.name_);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    if (initialData) {
      this.replace(initialData);
    }
  }
  var _proto = ObservableSet3.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear3() {
    var _this = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done; ) {
          var value = _step.value;
          _this["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done; ) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add(value) {
    var _this2 = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change)
        return this;
    }
    if (!this.has(value)) {
      transaction(function() {
        _this2.data_.add(_this2.enhancer_(value, void 0));
        _this2.atom_.reportChanged();
      });
      var notifySpy = false;
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notifySpy && false)
        spyReportStart(_change);
      if (notify)
        notifyListeners(this, _change);
      if (notifySpy && false)
        spyReportEnd();
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this3 = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change)
        return false;
    }
    if (this.has(value)) {
      var notifySpy = false;
      var notify = hasListeners(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && false)
        spyReportStart(_change2);
      transaction(function() {
        _this3.atom_.reportChanged();
        _this3.data_["delete"](value);
      });
      if (notify)
        notifyListeners(this, _change2);
      if (notifySpy && false)
        spyReportEnd();
      return true;
    }
    return false;
  };
  _proto.has = function has3(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.keys = function keys() {
    return this.values();
  };
  _proto.values = function values() {
    this.atom_.reportObserved();
    var self2 = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self2.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.replace = function replace3(other) {
    var _this4 = this;
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(function() {
      if (Array.isArray(other)) {
        _this4.clear();
        other.forEach(function(value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();
        other.forEach(function(value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== void 0) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (false)
      die("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.toJSON = function toJSON3() {
    return Array.from(this);
  };
  _proto.toString = function toString3() {
    return "[object ObservableSet]";
  };
  _proto[_Symbol$iterator$1] = function() {
    return this.values();
  };
  _createClass(ObservableSet3, [{
    key: "size",
    get: function get4() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get4() {
      return "Set";
    }
  }]);
  return ObservableSet3;
}();
var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
var descriptorCache = /* @__PURE__ */ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /* @__PURE__ */ function() {
  function ObservableObjectAdministration3(target_, values_, name_, defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom(false ? this.name_ + ".keys" : "ObservableObject.keys");
    this.isPlainObject_ = isPlainObject(this.target_);
    if (false) {
      die("defaultAnnotation must be valid annotation");
    }
    if (false) {
      this.appliedAnnotations_ = {};
    }
  }
  var _proto = ObservableObjectAdministration3.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable3 = this.values_.get(key);
    if (observable3 instanceof ComputedValue) {
      observable3.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change)
        return null;
      newValue = change.newValue;
    }
    newValue = observable3.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = false;
      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable3.value_,
        name: key,
        newValue
      } : null;
      if (false)
        spyReportStart(_change);
      observable3.setNewValue_(newValue);
      if (notify)
        notifyListeners(this, _change);
      if (false)
        spyReportEnd();
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  };
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  };
  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer, false ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  };
  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    assertAnnotable(this, annotation, key);
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
        return;
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0)
          return;
        if (outcome === 1)
          break;
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied(this, annotation, key);
  };
  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  };
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change)
          return null;
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change)
          return null;
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      var observable3 = new ObservableValue(value, enhancer, false ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable3);
      this.notifyPropertyAddition_(key, observable3.value_);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change)
          return null;
      }
      options.name || (options.name = false ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change)
        return null;
    }
    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = false;
      var observable3 = this.values_.get(key);
      var value = void 0;
      if (!observable3 && (notify || notifySpy)) {
        var _getDescriptor3;
        value = (_getDescriptor3 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor3.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (false) {
        delete this.appliedAnnotations_[key];
      }
      if (observable3) {
        this.values_["delete"](key);
        if (observable3 instanceof ObservableValue) {
          value = observable3.value_;
        }
        propagateChanged(observable3);
      }
      this.keysAtom_.reportChanged();
      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (false)
          spyReportStart(_change2);
        if (notify)
          notifyListeners(this, _change2);
        if (false)
          spyReportEnd();
      }
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (false)
      die("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;
    var notify = hasListeners(this);
    var notifySpy = false;
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (false)
        spyReportStart(change);
      if (notify)
        notifyListeners(this, change);
      if (false)
        spyReportEnd();
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };
  _proto.keys_ = function keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration3;
}();
function asObservableObject(target, options) {
  var _options$name;
  if (false) {
    die("Options can't be provided for already observable objects.");
  }
  if (hasProp(target, $mobx)) {
    if (false) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported.");
    }
    return target;
  }
  if (false)
    die("Cannot make the designated object observable; it is not extensible");
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : false ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get4() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set5(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;
  if (false) {
    adm.appliedAnnotations_[key] = annotation;
  }
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}
function assertAnnotable(adm, annotation, key) {
  if (false) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  if (false) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overriden by subclass.");
  }
}
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = function StubArray2() {
};
function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== void 0) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}
inherit(StubArray, Array.prototype);
var LegacyObservableArray = /* @__PURE__ */ function(_StubArray) {
  _inheritsLoose(LegacyObservableArray3, _StubArray);
  function LegacyObservableArray3(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name = false ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      _this.spliceWithArray(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    return _this;
  }
  var _proto = LegacyObservableArray3.prototype;
  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(this.slice(), arrays.map(function(a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };
  _proto[Symbol.iterator] = function() {
    var self2 = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self2.length ? {
          value: self2[nextIndex++],
          done: false
        } : {
          done: true,
          value: void 0
        };
      }
    });
  };
  _createClass(LegacyObservableArray3, [{
    key: "length",
    get: function get4() {
      return this[$mobx].getArrayLength_();
    },
    set: function set5(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get4() {
      return "Array";
    }
  }]);
  return LegacyObservableArray3;
}(StubArray);
Object.entries(arrayExtensions).forEach(function(_ref) {
  var prop = _ref[0], fn = _ref[1];
  if (prop !== "concat")
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get4() {
      return this[$mobx].get_(index);
    },
    set: function set5(value) {
      this[$mobx].set_(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1e3);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== void 0)
        die(23);
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing[$mobx];
    }
    if (isObservableMap(thing)) {
      if (property === void 0)
        return thing.keysAtom_;
      var observable3 = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable3)
        die(25, property, getDebugName(thing));
      return observable3;
    }
    if (isObservableObject(thing)) {
      if (!property)
        return die(26);
      var _observable = thing[$mobx].values_.get(property);
      if (!_observable)
        die(27, property, getDebugName(thing));
      return _observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      return thing[$mobx];
    }
  }
  die(28);
}
function getAdministration(thing, property) {
  if (!thing)
    die(29);
  if (property !== void 0)
    return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
    return thing;
  if (isObservableMap(thing) || isObservableSet(thing))
    return thing;
  if (thing[$mobx])
    return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== void 0) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    named = getAtom(thing);
  }
  return named.name_;
}
var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a, b, depth);
}
function eq(a, b, depth, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object")
    return false;
  var className = toString.call(a);
  if (className !== toString.call(b))
    return false;
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack))
        return false;
    }
  } else {
    var keys = Object.keys(a);
    var key;
    length = keys.length;
    if (Object.keys(b).length !== length)
      return false;
    while (length--) {
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a))
    return a.slice();
  if (isES6Map(a) || isObservableMap(a))
    return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a))
    return Array.from(a.entries());
  return a;
}
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}
function getSelf() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(m) {
  var g = getGlobal();
  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy,
    extras: {
      getDebugName
    },
    $mobx
  });
}

// ../../node_modules/mobx-react-lite/es/utils/assertEnvironment.js
var import_react = __toModule(require_react());
if (!import_react.useState) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!makeObservable) {
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}

// ../../node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js
var import_react_dom = __toModule(require_react_dom());

// ../../node_modules/mobx-react-lite/es/utils/observerBatching.js
function defaultNoopBatch(callback) {
  callback();
}
function observerBatching(reactionScheduler4) {
  if (!reactionScheduler4) {
    reactionScheduler4 = defaultNoopBatch;
    if (false) {
      console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
    }
  }
  configure({ reactionScheduler: reactionScheduler4 });
}

// ../../node_modules/mobx-react-lite/es/useObserver.js
var import_react2 = __toModule(require_react());

// ../../node_modules/mobx-react-lite/es/utils/printDebugValue.js
function printDebugValue(v) {
  return getDependencyTree(v);
}

// ../../node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? void 0 : FinalizationRegistry;

// ../../node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js
function createTrackingData(reaction) {
  var trackingData = {
    reaction,
    mounted: false,
    changedBeforeMount: false,
    cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
  };
  return trackingData;
}
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 1e4;
var CLEANUP_TIMER_LOOP_MILLIS = 1e4;

// ../../node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry2) {
  var cleanupTokenToReactionTrackingMap = new Map();
  var globalCleanupTokensCounter = 1;
  var registry = new FinalizationRegistry2(function cleanupFunction(token) {
    var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
    if (trackedReaction) {
      trackedReaction.reaction.dispose();
      cleanupTokenToReactionTrackingMap.delete(token);
    }
  });
  return {
    addReactionToTrack: function(reactionTrackingRef, reaction, objectRetainedByReact) {
      var token = globalCleanupTokensCounter++;
      registry.register(objectRetainedByReact, token, reactionTrackingRef);
      reactionTrackingRef.current = createTrackingData(reaction);
      reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
      cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
      return reactionTrackingRef.current;
    },
    recordReactionAsCommitted: function(reactionRef) {
      registry.unregister(reactionRef);
      if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
        cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
      }
    },
    forceCleanupTimerToRunNowForTests: function() {
    },
    resetCleanupScheduleForTests: function() {
    }
  };
}

// ../../node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function createTimerBasedReactionCleanupTracking() {
  var uncommittedReactionRefs = new Set();
  var reactionCleanupHandle;
  function forceCleanupTimerToRunNowForTests2() {
    if (reactionCleanupHandle) {
      clearTimeout(reactionCleanupHandle);
      cleanUncommittedReactions();
    }
  }
  function resetCleanupScheduleForTests2() {
    var e_1, _a2;
    if (uncommittedReactionRefs.size > 0) {
      try {
        for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
          var ref = uncommittedReactionRefs_1_1.value;
          var tracking = ref.current;
          if (tracking) {
            tracking.reaction.dispose();
            ref.current = null;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a2 = uncommittedReactionRefs_1.return))
            _a2.call(uncommittedReactionRefs_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      uncommittedReactionRefs.clear();
    }
    if (reactionCleanupHandle) {
      clearTimeout(reactionCleanupHandle);
      reactionCleanupHandle = void 0;
    }
  }
  function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === void 0) {
      reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
  }
  function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
  }
  function recordReactionAsCommitted2(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
  }
  function cleanUncommittedReactions() {
    reactionCleanupHandle = void 0;
    var now = Date.now();
    uncommittedReactionRefs.forEach(function(ref) {
      var tracking = ref.current;
      if (tracking) {
        if (now >= tracking.cleanAt) {
          tracking.reaction.dispose();
          ref.current = null;
          uncommittedReactionRefs.delete(ref);
        }
      }
    });
    if (uncommittedReactionRefs.size > 0) {
      ensureCleanupTimerRunning();
    }
  }
  return {
    addReactionToTrack: function(reactionTrackingRef, reaction, objectRetainedByReact) {
      reactionTrackingRef.current = createTrackingData(reaction);
      scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
      return reactionTrackingRef.current;
    },
    recordReactionAsCommitted: recordReactionAsCommitted2,
    forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests2,
    resetCleanupScheduleForTests: resetCleanupScheduleForTests2
  };
}

// ../../node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js
var _a = FinalizationRegistryLocal ? createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistryLocal) : createTimerBasedReactionCleanupTracking();
var addReactionToTrack = _a.addReactionToTrack;
var recordReactionAsCommitted = _a.recordReactionAsCommitted;
var resetCleanupScheduleForTests = _a.resetCleanupScheduleForTests;
var forceCleanupTimerToRunNowForTests = _a.forceCleanupTimerToRunNowForTests;

// ../../node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function isUsingStaticRendering() {
  return globalIsUsingStaticRendering;
}

// ../../node_modules/mobx-react-lite/es/useObserver.js
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
function observerComponentNameFor(baseComponentName) {
  return "observer" + baseComponentName;
}
var ObjectToBeRetainedByReact = function() {
  function ObjectToBeRetainedByReact2() {
  }
  return ObjectToBeRetainedByReact2;
}();
function objectToBeRetainedByReactFactory() {
  return new ObjectToBeRetainedByReact();
}
function useObserver(fn, baseComponentName) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }
  if (isUsingStaticRendering()) {
    return fn();
  }
  var _a2 = __read(import_react2.default.useState(objectToBeRetainedByReactFactory), 1), objectRetainedByReact = _a2[0];
  var _b = __read(import_react2.default.useState(), 2), setState = _b[1];
  var forceUpdate = function() {
    return setState([]);
  };
  var reactionTrackingRef = import_react2.default.useRef(null);
  if (!reactionTrackingRef.current) {
    var newReaction = new Reaction(observerComponentNameFor(baseComponentName), function() {
      if (trackingData_1.mounted) {
        forceUpdate();
      } else {
        trackingData_1.changedBeforeMount = true;
      }
    });
    var trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
  }
  var reaction = reactionTrackingRef.current.reaction;
  import_react2.default.useDebugValue(reaction, printDebugValue);
  import_react2.default.useEffect(function() {
    recordReactionAsCommitted(reactionTrackingRef);
    if (reactionTrackingRef.current) {
      reactionTrackingRef.current.mounted = true;
      if (reactionTrackingRef.current.changedBeforeMount) {
        reactionTrackingRef.current.changedBeforeMount = false;
        forceUpdate();
      }
    } else {
      reactionTrackingRef.current = {
        reaction: new Reaction(observerComponentNameFor(baseComponentName), function() {
          forceUpdate();
        }),
        mounted: true,
        changedBeforeMount: false,
        cleanAt: Infinity
      };
      forceUpdate();
    }
    return function() {
      reactionTrackingRef.current.reaction.dispose();
      reactionTrackingRef.current = null;
    };
  }, []);
  var rendering;
  var exception;
  reaction.track(function() {
    try {
      rendering = fn();
    } catch (e) {
      exception = e;
    }
  });
  if (exception) {
    throw exception;
  }
  return rendering;
}

// ../../node_modules/mobx-react-lite/es/observer.js
var import_react3 = __toModule(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function observer(baseComponent, options) {
  if (isUsingStaticRendering()) {
    return baseComponent;
  }
  var realOptions = __assign({ forwardRef: false }, options);
  var baseComponentName = baseComponent.displayName || baseComponent.name;
  var wrappedComponent = function(props, ref) {
    return useObserver(function() {
      return baseComponent(props, ref);
    }, baseComponentName);
  };
  wrappedComponent.displayName = baseComponentName;
  if (baseComponent.contextTypes) {
    wrappedComponent.contextTypes = baseComponent.contextTypes;
  }
  var memoComponent;
  if (realOptions.forwardRef) {
    memoComponent = (0, import_react3.memo)((0, import_react3.forwardRef)(wrappedComponent));
  } else {
    memoComponent = (0, import_react3.memo)(wrappedComponent);
  }
  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;
  if (false) {
    Object.defineProperty(memoComponent, "contextTypes", {
      set: function() {
        throw new Error("[mobx-react-lite] `" + (this.displayName || "Component") + ".contextTypes` must be set before applying `observer`.");
      }
    });
  }
  return memoComponent;
}
var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
};
function copyStaticProperties(base, target) {
  Object.keys(base).forEach(function(key) {
    if (!hoistBlackList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}

// ../../node_modules/mobx-react-lite/es/ObserverComponent.js
function ObserverComponent(_a2) {
  var children = _a2.children, render = _a2.render;
  var component = children || render;
  if (typeof component !== "function") {
    return null;
  }
  return useObserver(component);
}
if (false) {
  ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
  };
}
ObserverComponent.displayName = "Observer";

// ../../node_modules/mobx-react-lite/es/useLocalObservable.js
var import_react4 = __toModule(require_react());

// ../../node_modules/mobx-react-lite/es/useLocalStore.js
var import_react6 = __toModule(require_react());

// ../../node_modules/mobx-react-lite/es/useAsObservableSource.js
var import_react5 = __toModule(require_react());

// ../../node_modules/mobx-react-lite/es/index.js
observerBatching(import_react_dom.unstable_batchedUpdates);

// ../../packages/core/dist/esm/index.js
var import_react8 = __toModule(require_react());
var import_react9 = __toModule(require_react());
var import_react10 = __toModule(require_react());
var import_react11 = __toModule(require_react());

// ../../node_modules/@use-gesture/core/dist/maths-b2a210f4.esm.js
function clamp(v, min, max) {
  return Math.max(min, Math.min(v, max));
}
var V = {
  toVector(v, fallback) {
    if (v === void 0)
      v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity)
    return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
  if (constant === 0)
    return clamp(position, min, max);
  if (position < min)
    return -rubberband(min - position, max - min, constant) + min;
  if (position > max)
    return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}

// ../../node_modules/@use-gesture/core/dist/actions-9c309a79.esm.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys3(object3, enumerableOnly) {
  var keys = Object.keys(object3);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object3);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object3, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var EVENT_TYPE_MAP = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function capitalize(string) {
  if (!string)
    return "";
  return string[0].toUpperCase() + string.slice(1);
}
function toHandlerProp(device, action3 = "", capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action3] || action3 : action3;
  return "on" + capitalize(device) + capitalize(actionKey) + (capture ? "Capture" : "");
}
function toDomEventType(device, action3 = "") {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action3] || action3 : action3;
  return device + actionKey;
}
function isTouch(event) {
  return "touches" in event;
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter((e) => {
    var _event$currentTarget, _event$currentTarget$;
    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}
function getTouchList(event) {
  return event.type === "touchend" ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function distanceAngle(P1, P2) {
  const dx = P2.clientX - P1.clientX;
  const dy = P2.clientY - P1.clientY;
  const cx = (P2.clientX + P1.clientX) / 2;
  const cy = (P2.clientY + P1.clientY) / 2;
  const distance = Math.hypot(dx, dy);
  const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
  const origin = [cx, cy];
  return {
    angle,
    distance,
    origin
  };
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
}
function touchDistanceAngle(event, ids) {
  const [P1, P2] = Array.from(event.touches).filter((touch) => ids.includes(touch.identifier));
  return distanceAngle(P1, P2);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
function wheelValues(event) {
  let {
    deltaX,
    deltaY,
    deltaMode
  } = event;
  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }
  return [deltaX, deltaY];
}
function scrollValues(event) {
  var _ref, _ref2;
  const {
    scrollX,
    scrollY,
    scrollLeft,
    scrollTop
  } = event.currentTarget;
  return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
}
function getEventDetails(event) {
  const payload = {};
  if ("buttons" in event)
    payload.buttons = event.buttons;
  if ("shiftKey" in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}
function call(v, ...args) {
  if (typeof v === "function") {
    return v(...args);
  } else {
    return v;
  }
}
function noop3() {
}
function chain(...fns) {
  if (fns.length === 0)
    return noop3;
  if (fns.length === 1)
    return fns[0];
  return function() {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
var BEFORE_LAST_KINEMATICS_DELAY = 32;
var Engine = class {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init)
        this.init();
      this.reset();
    }
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = void 0;
    state.memo = void 0;
    state.elapsedTime = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
    }
    state.startTime = state.timeStamp = event.timeStamp;
  }
  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }
  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }
  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable)
        state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V.addTo(state._distance, _absoluteDelta);
    }
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false)
        _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false)
        _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false)
        _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false)
        _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[0] !== false;
    if (!state.intentional)
      return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.intent)
      this.intent(movement);
    if (state._active && !state._blocked || state.active) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ("bounds" in config)
            state._bounds = call(config.bounds, state);
          if (this.setup)
            this.setup();
        }
        state.movement = movement;
        const previousOffset = state.offset;
        this.computeOffset();
        if (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY) {
          state.delta = V.sub(state.offset, previousOffset);
          const absoluteDelta = state.delta.map(Math.abs);
          V.addTo(state.distance, absoluteDelta);
          state.direction = state.delta.map(Math.sign);
          if (!state.first && dt > 0) {
            state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
          }
        }
      }
    }
    const rubberband2 = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
    this.computeMovement();
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active)
      this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents)
      return;
    const memo3 = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo3 !== void 0)
      state.memo = memo3;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
};
function selectAxis([dx, dy]) {
  const d = Math.abs(dx) - Math.abs(dy);
  if (d > 0)
    return "x";
  if (d < 0)
    return "y";
  return void 0;
}
function restrictVectorToAxis(v, axis) {
  switch (axis) {
    case "x":
      v[1] = 0;
      break;
    case "y":
      v[0] = 0;
      break;
  }
}
var CoordinatesEngine = class extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "aliasKey", "xy");
  }
  reset() {
    super.reset();
    this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
  }
  intent(v) {
    this.state.axis = this.state.axis || selectAxis(v);
    this.state._blocked = (this.config.lockDirection || !!this.config.axis) && !this.state.axis || !!this.config.axis && this.config.axis !== this.state.axis;
    if (this.state._blocked)
      return;
    if (this.config.axis || this.config.lockDirection) {
      restrictVectorToAxis(v, this.state.axis);
    }
  }
};
var identity = (v) => v;
var DEFAULT_RUBBERBAND = 0.15;
var commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V.toVector(value);
    }
  },
  from(value) {
    if (typeof value === "function")
      return value;
    if (value != null)
      return V.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    if (false) {
      const originalTransform = transform || identity;
      return (v) => {
        const r = originalTransform(v);
        if (!isFinite(r[0]) || !isFinite(r[1])) {
          console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`);
        }
        return r;
      };
    }
    return transform || identity;
  },
  threshold(value) {
    return V.toVector(value, 0);
  }
};
if (false) {
  Object.assign(commonConfigResolver, {
    domTarget(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
      }
    },
    lockDirection(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
      }
    },
    initial(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
      }
    }
  });
}
var coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === "lock";
    if (!this.lockDirection)
      return axis;
  },
  bounds(value = {}) {
    if (typeof value === "function") {
      return (state) => coordinatesConfigResolver.bounds(value(state));
    }
    if ("current" in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});
var DISPLACEMENT = 10;
var KEYS_DELTA_MAP = {
  ArrowRight: (factor = 1) => [DISPLACEMENT * factor, 0],
  ArrowLeft: (factor = 1) => [-DISPLACEMENT * factor, 0],
  ArrowUp: (factor = 1) => [0, -DISPLACEMENT * factor],
  ArrowDown: (factor = 1) => [0, DISPLACEMENT * factor]
};
var DragEngine = class extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = void 0;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }
  setup() {
    const state = this.state;
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();
      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled)
      return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }
  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons))
      return;
    this.ctrl.setEventIds(event);
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }
    if (state._pointerActive)
      return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();
    if (config.preventScroll) {
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);
    } else {
      this.startPointerDrag(event);
    }
  }
  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }
  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive)
      return;
    if (state.type === event.type && event.timeStamp === state.timeStamp)
      return;
    const id = pointerId(event);
    if (state._pointerId && id !== state._pointerId)
      return;
    const _values = pointerValues(event);
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = V.sub(_values, state._values);
      this.computeValues(_values);
    }
    V.addTo(state._movement, state._delta);
    this.compute(event);
    if (state._delayed) {
      this.timeoutStore.remove("dragDelay");
      state.active = false;
      this.startPointerDrag(event);
      return;
    }
    if (config.preventScroll && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === "xy") {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag");
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }
    this.emit();
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event);
    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        ;
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
      if (false) {
        console.warn(`[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. 

Please upgrade to the latest version.`);
      }
    }
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive)
      return;
    const id = pointerId(event);
    if (state._pointerId && id !== state._pointerId)
      return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= 3 && dy <= 3;
    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [dirx, diry] = state.direction;
      const [vx, vy] = state.velocity;
      const [mx, my] = state.movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;
      if (state.elapsedTime < sdt) {
        if (Math.abs(vx) > svx && Math.abs(mx) > sx)
          state.swipe[0] = dirx;
        if (Math.abs(vy) > svy && Math.abs(my) > sy)
          state.swipe[1] = diry;
      }
    }
    this.emit();
  }
  pointerClick(event) {
    if (!this.state.tap) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setupPointer(event) {
    const config = this.config;
    let device = config.device;
    if (false) {
      try {
        if (device === "pointer") {
          const currentTarget = "uv" in event ? event.sourceEvent.currentTarget : event.currentTarget;
          const style = window.getComputedStyle(currentTarget);
          if (style.touchAction === "auto") {
            console.warn(`[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.

This message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`, currentTarget);
          }
        }
      } catch (_unused2) {
      }
    }
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }
    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, "change", this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "end", this.pointerUp.bind(this));
    }
  }
  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }
  setupScrollPrevention(event) {
    persistEvent(event);
    this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", this.clean.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "cancel", this.clean.bind(this), {
      passive: false
    });
    this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScroll, event);
  }
  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add("dragDelay", this.startPointerDrag.bind(this), this.config.delay, event);
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];
    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      state._delta = deltaFn(factor);
      this.start(event);
      state._keyboardActive = true;
      V.addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP))
      return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, "start", this.pointerDown.bind(this));
    if (this.config.pointerCapture) {
      bindFunction(device, "change", this.pointerMove.bind(this));
      bindFunction(device, "end", this.pointerUp.bind(this));
      bindFunction(device, "cancel", this.pointerUp.bind(this));
    }
    bindFunction("key", "down", this.keyDown.bind(this));
    bindFunction("key", "up", this.keyUp.bind(this));
    if (this.config.filterTaps) {
      bindFunction("click", "", this.pointerClick.bind(this), {
        capture: true
      });
    }
  }
};
function persistEvent(event) {
  "persist" in event && typeof event.persist === "function" && event.persist();
}
var isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && "ontouchstart" in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && "onpointerdown" in window;
}
function supportsPointerLock() {
  return isBrowser && "exitPointerLock" in window.document;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e) {
    return false;
  }
}
var SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: supportsTouchEvents(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};
var DEFAULT_PREVENT_SCROLL_DELAY = 250;
var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 50;
var DEFAULT_SWIPE_DURATION = 250;
var dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  pointerLock(_v, _k, {
    pointer: {
      lock = false,
      touch = false
    } = {}
  }) {
    this.useTouch = SUPPORT.touch && touch;
    return SUPPORT.pointerLock && lock;
  },
  device(_v, _k) {
    if (this.useTouch)
      return "touch";
    if (this.pointerLock)
      return "mouse";
    if (SUPPORT.pointer)
      return "pointer";
    if (SUPPORT.touch)
      return "touch";
    return "mouse";
  },
  preventScroll(value = false, _k, {
    preventScrollAxis = "y"
  }) {
    if (preventScrollAxis)
      this.preventScrollAxis = preventScrollAxis;
    if (!SUPPORT.touchscreen)
      return false;
    if (typeof value === "number")
      return value;
    return value ? DEFAULT_PREVENT_SCROLL_DELAY : false;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1
    } = {}
  }) {
    this.pointerButtons = buttons;
    return !this.pointerLock && this.device === "pointer" && capture;
  },
  threshold(value, _k, {
    filterTaps = false,
    axis = void 0
  }) {
    const threshold = V.toVector(value, filterTaps ? 3 : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V.toVector(velocity)),
      distance: this.transform(V.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  }
});
if (false) {
  Object.assign(dragConfigResolver, {
    useTouch(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
      }
    },
    experimental_preventWindowScrollY(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
      }
    },
    swipeVelocity(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
      }
    },
    swipeDistance(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
      }
    },
    swipeDuration(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
      }
    }
  });
}
var SCALE_ANGLE_RATIO_INTENT_DEG = 30;
var PINCH_WHEEL_RATIO = 36;
var PinchEngine = class extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "pinching");
    _defineProperty(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0];
    this.state.lastOffset = [1, 0];
    this.state._pointerEvents = new Map();
  }
  reset() {
    super.reset();
    const state = this.state;
    state._touchIds = [];
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
    state.turns = 0;
  }
  computeOffset() {
    const {
      type,
      movement,
      lastOffset
    } = this.state;
    if (type === "wheel") {
      this.state.offset = V.add(movement, lastOffset);
    } else {
      this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
    }
  }
  computeMovement() {
    const {
      offset,
      lastOffset
    } = this.state;
    this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
  }
  intent(v) {
    const state = this.state;
    if (!state.axis) {
      const axisMovementDifference = Math.abs(v[0]) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(v[1]);
      if (axisMovementDifference < 0)
        state.axis = "angle";
      else if (axisMovementDifference > 0)
        state.axis = "scale";
    }
    if (this.config.lockDirection) {
      if (state.axis === "scale")
        v[1] = 0;
      else if (state.axis === "angle")
        v[0] = 0;
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled)
      return;
    setTimeout(() => {
      state.canceled = true;
      state._active = false;
      this.compute();
      this.emit();
    }, 0);
  }
  touchStart(event) {
    this.ctrl.setEventIds(event);
    const state = this.state;
    const ctrlTouchIds = this.ctrl.touchIds;
    if (state._active) {
      if (state._touchIds.every((id) => ctrlTouchIds.has(id)))
        return;
    }
    if (ctrlTouchIds.size < 2)
      return;
    this.start(event);
    state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
    const payload = touchDistanceAngle(event, state._touchIds);
    this.pinchStart(event, payload);
  }
  pointerStart(event) {
    if (event.buttons != null && event.buttons % 2 !== 1)
      return;
    this.ctrl.setEventIds(event);
    event.target.setPointerCapture(event.pointerId);
    const state = this.state;
    const _pointerEvents = state._pointerEvents;
    const ctrlPointerIds = this.ctrl.pointerIds;
    if (state._active) {
      if (Array.from(_pointerEvents.keys()).every((id) => ctrlPointerIds.has(id)))
        return;
    }
    if (_pointerEvents.size < 2) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (state._pointerEvents.size < 2)
      return;
    this.start(event);
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    this.pinchStart(event, payload);
  }
  pinchStart(event, payload) {
    const state = this.state;
    state.origin = payload.origin;
    this.computeValues([payload.distance, payload.angle]);
    this.computeInitial();
    this.compute(event);
    this.emit();
  }
  touchMove(event) {
    if (!this.state._active)
      return;
    const payload = touchDistanceAngle(event, this.state._touchIds);
    this.pinchMove(event, payload);
  }
  pointerMove(event) {
    const _pointerEvents = this.state._pointerEvents;
    if (_pointerEvents.has(event.pointerId)) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (!this.state._active)
      return;
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    this.pinchMove(event, payload);
  }
  pinchMove(event, payload) {
    const state = this.state;
    const prev_a = state._values[1];
    const delta_a = payload.angle - prev_a;
    let delta_turns = 0;
    if (Math.abs(delta_a) > 270)
      delta_turns += Math.sign(delta_a);
    this.computeValues([payload.distance, payload.angle - 360 * delta_turns]);
    state.origin = payload.origin;
    state.turns = delta_turns;
    state._movement = [state._values[0] / state._initial[0] - 1, state._values[1] - state._initial[1]];
    this.compute(event);
    this.emit();
  }
  touchEnd(event) {
    this.ctrl.setEventIds(event);
    if (!this.state._active)
      return;
    if (this.state._touchIds.some((id) => !this.ctrl.touchIds.has(id))) {
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  pointerEnd(event) {
    const state = this.state;
    this.ctrl.setEventIds(event);
    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch (_unused) {
    }
    if (state._pointerEvents.has(event.pointerId)) {
      state._pointerEvents.delete(event.pointerId);
    }
    if (!state._active)
      return;
    if (state._pointerEvents.size < 2) {
      state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  gestureStart(event) {
    if (event.cancelable)
      event.preventDefault();
    const state = this.state;
    if (state._active)
      return;
    this.start(event);
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  gestureMove(event) {
    if (event.cancelable)
      event.preventDefault();
    if (!this.state._active)
      return;
    const state = this.state;
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    const _previousMovement = state._movement;
    state._movement = [event.scale - 1, event.rotation];
    state._delta = V.sub(state._movement, _previousMovement);
    this.compute(event);
    this.emit();
  }
  gestureEnd(event) {
    if (!this.state._active)
      return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  wheel(event) {
    if (!event.ctrlKey)
      return;
    if (!this.state._active)
      this.wheelStart(event);
    else
      this.wheelChange(event);
    this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelStart(event) {
    this.start(event);
    this.wheelChange(event);
  }
  wheelChange(event) {
    const isR3f = "uv" in event;
    if (!isR3f) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (false) {
        console.warn(`[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.

This message will only appear in development mode.`);
      }
    }
    const state = this.state;
    state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
    V.addTo(state._movement, state._delta);
    this.state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active)
      return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    if (!!device) {
      bindFunction(device, "start", this[device + "Start"].bind(this));
      bindFunction(device, "change", this[device + "Move"].bind(this));
      bindFunction(device, "end", this[device + "End"].bind(this));
      bindFunction(device, "cancel", this[device + "End"].bind(this));
    } else {
      bindFunction("wheel", "", this.wheel.bind(this), {
        passive: false
      });
    }
  }
};
var pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  useTouch(_v, _k, {
    pointer: {
      touch = false
    } = {}
  }) {
    return SUPPORT.touch && touch;
  },
  device(_v, _k, config) {
    const sharedConfig = config.shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture)
      return "gesture";
    if (this.useTouch)
      return "touch";
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer)
        return "pointer";
      if (SUPPORT.touch)
        return "touch";
    }
  },
  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = (state) => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };
    const _angleBounds = (state) => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };
    if (typeof scaleBounds !== "function" && typeof angleBounds !== "function")
      return [_scaleBounds(), _angleBounds()];
    return (state) => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === "lock";
    const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  }
});
var MoveEngine = class extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "moving");
  }
  move(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse")
      return;
    if (!this.state._active)
      this.moveStart(event);
    else
      this.moveChange(event);
    this.timeoutStore.add("moveEnd", this.moveEnd.bind(this));
  }
  moveStart(event) {
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.computeInitial();
    this.emit();
  }
  moveChange(event) {
    if (!this.state._active)
      return;
    const values = pointerValues(event);
    const state = this.state;
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  moveEnd(event) {
    if (!this.state._active)
      return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("pointer", "change", this.move.bind(this));
    bindFunction("pointer", "leave", this.moveEnd.bind(this));
  }
};
var moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
var ScrollEngine = class extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "scrolling");
  }
  scroll(event) {
    if (!this.state._active)
      this.start(event);
    this.scrollChange(event);
    this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(event) {
    if (event.cancelable)
      event.preventDefault();
    const state = this.state;
    const values = scrollValues(event);
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  scrollEnd() {
    if (!this.state._active)
      return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("scroll", "", this.scroll.bind(this));
  }
};
var scrollConfigResolver = coordinatesConfigResolver;
var WheelEngine = class extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "wheeling");
  }
  wheel(event) {
    if (!this.state._active)
      this.start(event);
    this.wheelChange(event);
    this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(event) {
    const state = this.state;
    state._delta = wheelValues(event);
    V.addTo(this.state._movement, state._delta);
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active)
      return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("wheel", "", this.wheel.bind(this));
  }
};
var wheelConfigResolver = coordinatesConfigResolver;
var HoverEngine = class extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "hovering");
  }
  enter(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse")
      return;
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.emit();
  }
  leave(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse")
      return;
    const state = this.state;
    if (!state._active)
      return;
    state._active = false;
    const values = pointerValues(event);
    state._movement = state._delta = V.sub(values, state._values);
    this.computeValues(values);
    this.compute(event);
    state.delta = state.movement;
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("pointer", "enter", this.enter.bind(this));
    bindFunction("pointer", "leave", this.leave.bind(this));
  }
};
var hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
var EngineMap = new Map();
var ConfigResolverMap = new Map();
function registerAction(action3) {
  EngineMap.set(action3.key, action3.engine);
  ConfigResolverMap.set(action3.key, action3.resolver);
}
var dragAction = {
  key: "drag",
  engine: DragEngine,
  resolver: dragConfigResolver
};
var hoverAction = {
  key: "hover",
  engine: HoverEngine,
  resolver: hoverConfigResolver
};
var moveAction = {
  key: "move",
  engine: MoveEngine,
  resolver: moveConfigResolver
};
var pinchAction = {
  key: "pinch",
  engine: PinchEngine,
  resolver: pinchConfigResolver
};
var scrollAction = {
  key: "scroll",
  engine: ScrollEngine,
  resolver: scrollConfigResolver
};
var wheelAction = {
  key: "wheel",
  engine: WheelEngine,
  resolver: wheelConfigResolver
};

// ../../node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
var import_react7 = __toModule(require_react());

// ../../node_modules/@use-gesture/core/dist/use-gesture-core.esm.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => "current" in value ? value.current : value;
    }
    return void 0;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : void 0) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};
var _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers))
    switch (typeof resolver) {
      case "function":
        result[key] = resolver.call(result, config[key], key, config);
        break;
      case "object":
        result[key] = resolveWith(config[key], resolver);
        break;
      case "boolean":
        if (resolver)
          result[key] = config[key];
        break;
    }
  return result;
}
function parse(config, gestureKey) {
  const _ref = config, {
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
  const _config = {
    shared: resolveWith({
      target,
      eventOptions,
      window: window2,
      enabled,
      transform
    }, sharedConfigResolver)
  };
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (false) {
        if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(key)) {
          if (key === "domTarget") {
            throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
          }
          console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
        }
      }
    }
  }
  return _config;
}
var EventStore = class {
  constructor(ctrl) {
    _defineProperty(this, "_listeners", []);
    this._ctrl = ctrl;
  }
  add(element, device, action3, handler, options) {
    const type = toDomEventType(device, action3);
    const eventOptions = _objectSpread2(_objectSpread2({}, this._ctrl.config.shared.eventOptions), options);
    element.addEventListener(type, handler, eventOptions);
    this._listeners.push(() => element.removeEventListener(type, handler, eventOptions));
  }
  clean() {
    this._listeners.forEach((remove3) => remove3());
    this._listeners = [];
  }
};
var TimeoutStore = class {
  constructor() {
    _defineProperty(this, "_timeouts", new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout)
      window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
};
var Controller = class {
  constructor(handlers) {
    _defineProperty(this, "gestures", new Set());
    _defineProperty(this, "_targetEventStore", new EventStore(this));
    _defineProperty(this, "gestureEventStores", {});
    _defineProperty(this, "gestureTimeoutStores", {});
    _defineProperty(this, "handlers", {});
    _defineProperty(this, "config", {});
    _defineProperty(this, "pointerIds", new Set());
    _defineProperty(this, "touchIds", new Set());
    _defineProperty(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
    } else if ("pointerId" in event) {
      if (event.type === "pointerup")
        this.pointerIds.delete(event.pointerId);
      else
        this.pointerIds.add(event.pointerId);
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse(config, gestureKey);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target)
      this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const eventOptions = sharedConfig.eventOptions;
    const props = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target)
        return;
    }
    const bindFunction = bindToProps(props, eventOptions, !!target);
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        if (this.config[gestureKey].enabled) {
          const Engine2 = EngineMap.get(gestureKey);
          new Engine2(this, args, gestureKey).bind(bindFunction);
        }
      }
      for (const eventKey in this.nativeHandlers) {
        bindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
          event,
          args
        })), void 0, true);
      }
    }
    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp]);
    }
    if (!target)
      return props;
    for (const handlerProp in props) {
      let eventKey = handlerProp.substr(2).toLowerCase();
      const capture = !!~eventKey.indexOf("capture");
      const passive = !!~eventKey.indexOf("passive");
      if (capture || passive)
        eventKey = eventKey.replace(/capture|passive/g, "");
      this._targetEventStore.add(target, eventKey, "", props[handlerProp], {
        capture,
        passive
      });
    }
  }
};
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag)
    setupGesture(ctrl, "drag");
  if (internalHandlers.wheel)
    setupGesture(ctrl, "wheel");
  if (internalHandlers.scroll)
    setupGesture(ctrl, "scroll");
  if (internalHandlers.move)
    setupGesture(ctrl, "move");
  if (internalHandlers.pinch)
    setupGesture(ctrl, "pinch");
  if (internalHandlers.hover)
    setupGesture(ctrl, "hover");
}
var bindToProps = (props, eventOptions, withPassiveOption) => (device, action3, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action3, capture);
  if (withPassiveOption && passive)
    handlerProp += "Passive";
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};
var RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function sortHandlers(_handlers) {
  const native = {};
  const handlers = {};
  const actions = new Set();
  for (let key in _handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handlers[key] = _handlers[key];
    } else {
      native[key] = _handlers[key];
    }
  }
  return [handlers, native, actions];
}
function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
  if (!actions.has(handlerKey))
    return;
  if (!EngineMap.has(key)) {
    if (false) {
      console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.

Please add \`${key}Action\` when creating your handler.`);
    }
    return;
  }
  const startKey = handlerKey + "Start";
  const endKey = handlerKey + "End";
  const fn = (state) => {
    let memo3 = void 0;
    if (state.first && startKey in handlers)
      handlers[startKey](state);
    if (handlerKey in handlers)
      memo3 = handlers[handlerKey](state);
    if (state.last && endKey in handlers)
      handlers[endKey](state);
    return memo3;
  };
  internalHandlers[key] = fn;
  config[key] = config[key] || {};
}
function parseMergedHandlers(mergedHandlers, mergedConfig) {
  const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
  const internalHandlers = {};
  registerGesture(actions, handlers, "onDrag", "drag", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onWheel", "wheel", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onScroll", "scroll", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onPinch", "pinch", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onMove", "move", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onHover", "hover", internalHandlers, mergedConfig);
  return {
    handlers: internalHandlers,
    config: mergedConfig,
    nativeHandlers
  };
}

// ../../node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = import_react7.default.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  import_react7.default.useEffect(ctrl.effect.bind(ctrl));
  import_react7.default.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);
  if (config.target === void 0) {
    return ctrl.bind.bind(ctrl);
  }
  return void 0;
}
function createUseGesture(actions) {
  actions.forEach(registerAction);
  return function useGesture2(_handlers, _config = {}) {
    const {
      handlers,
      nativeHandlers,
      config
    } = parseMergedHandlers(_handlers, _config);
    return useRecognizers(handlers, config, void 0, nativeHandlers);
  };
}
function useGesture(handlers, config = {}) {
  const hook = createUseGesture([dragAction, pinchAction, scrollAction, wheelAction, moveAction, hoverAction]);
  return hook(handlers, config);
}

// ../../packages/vec/dist/esm/index.js
var _Vec = class {
  static clamp(n, min, max) {
    return Math.max(min, typeof max !== "undefined" ? Math.min(n, max) : n);
  }
  static clampV(A, min, max) {
    return A.map((n) => max ? _Vec.clamp(n, min, max) : _Vec.clamp(n, min));
  }
  static cross(x, y, z) {
    return (y[0] - x[0]) * (z[1] - x[1]) - (z[0] - x[0]) * (y[1] - x[1]);
  }
  static snap(a, step = 1) {
    return [Math.round(a[0] / step) * step, Math.round(a[1] / step) * step];
  }
};
var Vec = _Vec;
Vec.neg = (A) => {
  return [-A[0], -A[1]];
};
Vec.add = (A, B) => {
  return [A[0] + B[0], A[1] + B[1]];
};
Vec.addScalar = (A, n) => {
  return [A[0] + n, A[1] + n];
};
Vec.sub = (A, B) => {
  return [A[0] - B[0], A[1] - B[1]];
};
Vec.subScalar = (A, n) => {
  return [A[0] - n, A[1] - n];
};
Vec.vec = (A, B) => {
  return [B[0] - A[0], B[1] - A[1]];
};
Vec.mul = (A, n) => {
  return [A[0] * n, A[1] * n];
};
Vec.mulV = (A, B) => {
  return [A[0] * B[0], A[1] * B[1]];
};
Vec.div = (A, n) => {
  return [A[0] / n, A[1] / n];
};
Vec.divV = (A, B) => {
  return [A[0] / B[0], A[1] / B[1]];
};
Vec.per = (A) => {
  return [A[1], -A[0]];
};
Vec.dpr = (A, B) => {
  return A[0] * B[0] + A[1] * B[1];
};
Vec.cpr = (A, B) => {
  return A[0] * B[1] - B[0] * A[1];
};
Vec.len2 = (A) => {
  return A[0] * A[0] + A[1] * A[1];
};
Vec.len = (A) => {
  return Math.hypot(A[0], A[1]);
};
Vec.pry = (A, B) => {
  return _Vec.dpr(A, B) / _Vec.len(B);
};
Vec.uni = (A) => {
  return _Vec.div(A, _Vec.len(A));
};
Vec.normalize = (A) => {
  return _Vec.uni(A);
};
Vec.tangent = (A, B) => {
  return _Vec.uni(_Vec.sub(A, B));
};
Vec.dist2 = (A, B) => {
  return _Vec.len2(_Vec.sub(A, B));
};
Vec.dist = (A, B) => {
  return Math.hypot(A[1] - B[1], A[0] - B[0]);
};
Vec.fastDist = (A, B) => {
  const V2 = [B[0] - A[0], B[1] - A[1]];
  const aV = [Math.abs(V2[0]), Math.abs(V2[1])];
  let r = 1 / Math.max(aV[0], aV[1]);
  r = r * (1.29289 - (aV[0] + aV[1]) * r * 0.29289);
  return [V2[0] * r, V2[1] * r];
};
Vec.ang = (A, B) => {
  return Math.atan2(_Vec.cpr(A, B), _Vec.dpr(A, B));
};
Vec.angle = (A, B) => {
  return Math.atan2(B[1] - A[1], B[0] - A[0]);
};
Vec.med = (A, B) => {
  return _Vec.mul(_Vec.add(A, B), 0.5);
};
Vec.rot = (A, r = 0) => {
  return [A[0] * Math.cos(r) - A[1] * Math.sin(r), A[0] * Math.sin(r) + A[1] * Math.cos(r)];
};
Vec.rotWith = (A, C, r = 0) => {
  if (r === 0)
    return A;
  const s = Math.sin(r);
  const c = Math.cos(r);
  const px = A[0] - C[0];
  const py = A[1] - C[1];
  const nx = px * c - py * s;
  const ny = px * s + py * c;
  return [nx + C[0], ny + C[1]];
};
Vec.isEqual = (A, B) => {
  return A[0] === B[0] && A[1] === B[1];
};
Vec.lrp = (A, B, t) => {
  return _Vec.add(A, _Vec.mul(_Vec.sub(B, A), t));
};
Vec.int = (A, B, from, to, s = 1) => {
  const t = (_Vec.clamp(from, to) - from) / (to - from);
  return _Vec.add(_Vec.mul(A, 1 - t), _Vec.mul(B, s));
};
Vec.ang3 = (p1, pc, p2) => {
  const v1 = _Vec.vec(pc, p1);
  const v2 = _Vec.vec(pc, p2);
  return _Vec.ang(v1, v2);
};
Vec.abs = (A) => {
  return [Math.abs(A[0]), Math.abs(A[1])];
};
Vec.rescale = (a, n) => {
  const l = _Vec.len(a);
  return [n * a[0] / l, n * a[1] / l];
};
Vec.isLeft = (p1, pc, p2) => {
  return (pc[0] - p1[0]) * (p2[1] - p1[1]) - (p2[0] - p1[0]) * (pc[1] - p1[1]);
};
Vec.clockwise = (p1, pc, p2) => {
  return _Vec.isLeft(p1, pc, p2) > 0;
};
Vec.toFixed = (a, d = 2) => {
  return a.map((v) => +v.toFixed(d));
};
Vec.nearestPointOnLineThroughPoint = (A, u, P) => {
  return _Vec.add(A, _Vec.mul(u, _Vec.pry(_Vec.sub(P, A), u)));
};
Vec.distanceToLineThroughPoint = (A, u, P) => {
  return _Vec.dist(P, _Vec.nearestPointOnLineThroughPoint(A, u, P));
};
Vec.nearestPointOnLineSegment = (A, B, P, clamp2 = true) => {
  const u = _Vec.uni(_Vec.sub(B, A));
  const C = _Vec.add(A, _Vec.mul(u, _Vec.pry(_Vec.sub(P, A), u)));
  if (clamp2) {
    if (C[0] < Math.min(A[0], B[0]))
      return A[0] < B[0] ? A : B;
    if (C[0] > Math.max(A[0], B[0]))
      return A[0] > B[0] ? A : B;
    if (C[1] < Math.min(A[1], B[1]))
      return A[1] < B[1] ? A : B;
    if (C[1] > Math.max(A[1], B[1]))
      return A[1] > B[1] ? A : B;
  }
  return C;
};
Vec.distanceToLineSegment = (A, B, P, clamp2 = true) => {
  return _Vec.dist(P, _Vec.nearestPointOnLineSegment(A, B, P, clamp2));
};
Vec.nudge = (A, B, d) => {
  if (_Vec.isEqual(A, B))
    return A;
  return _Vec.add(A, _Vec.mul(_Vec.uni(_Vec.sub(B, A)), d));
};
Vec.nudgeAtAngle = (A, a, d) => {
  return [Math.cos(a) * d + A[0], Math.sin(a) * d + A[1]];
};
Vec.toPrecision = (a, n = 4) => {
  return [+a[0].toPrecision(n), +a[1].toPrecision(n)];
};
Vec.pointsBetween = (A, B, steps = 6) => {
  return Array.from(Array(steps)).map((_14, i) => {
    const t = i / (steps - 1);
    const k = Math.min(1, 0.5 + Math.abs(0.5 - t));
    return [..._Vec.lrp(A, B, t), k];
  });
};
Vec.slope = (A, B) => {
  if (A[0] === B[0])
    return NaN;
  return (A[1] - B[1]) / (A[0] - B[0]);
};
var src_default = Vec;

// ../../packages/core/dist/esm/index.js
var import_react13 = __toModule(require_react());
var import_react14 = __toModule(require_react());
var import_react15 = __toModule(require_react());
var import_react16 = __toModule(require_react());
var import_react17 = __toModule(require_react());
var import_react18 = __toModule(require_react());
var import_react19 = __toModule(require_react());
var import_react20 = __toModule(require_react());
var import_react21 = __toModule(require_react());
var import_react22 = __toModule(require_react());
var import_react23 = __toModule(require_react());
var import_react24 = __toModule(require_react());
var import_react25 = __toModule(require_react());
var import_react26 = __toModule(require_react());
var import_react27 = __toModule(require_react());
var import_react28 = __toModule(require_react());
var import_react29 = __toModule(require_react());
var import_react30 = __toModule(require_react());
var import_react31 = __toModule(require_react());
var import_react32 = __toModule(require_react());
var import_react33 = __toModule(require_react());
var import_react34 = __toModule(require_react());
var import_react35 = __toModule(require_react());
var import_react36 = __toModule(require_react());
var import_react37 = __toModule(require_react());
var import_react38 = __toModule(require_react());
var import_react39 = __toModule(require_react());
var import_react40 = __toModule(require_react());
var import_react41 = __toModule(require_react());
var import_react42 = __toModule(require_react());
var import_react43 = __toModule(require_react());
var import_react44 = __toModule(require_react());
var import_react45 = __toModule(require_react());
var import_react46 = __toModule(require_react());
var import_react47 = __toModule(require_react());
var import_react48 = __toModule(require_react());
var import_react49 = __toModule(require_react());
var import_react50 = __toModule(require_react());
var import_react51 = __toModule(require_react());
var import_react52 = __toModule(require_react());
var import_react53 = __toModule(require_react());

// ../../packages/intersect/dist/esm/index.js
function createIntersection(message, ...points) {
  const didIntersect = points.length > 0;
  return { didIntersect, message, points };
}
function getRectangleSides(point, size, rotation = 0) {
  const center = [point[0] + size[0] / 2, point[1] + size[1] / 2];
  const tl = Vec.rotWith(point, center, rotation);
  const tr = Vec.rotWith(Vec.add(point, [size[0], 0]), center, rotation);
  const br = Vec.rotWith(Vec.add(point, size), center, rotation);
  const bl = Vec.rotWith(Vec.add(point, [0, size[1]]), center, rotation);
  return [
    ["top", [tl, tr]],
    ["right", [tr, br]],
    ["bottom", [br, bl]],
    ["left", [bl, tl]]
  ];
}
function intersectLineSegmentLineSegment(a1, a2, b1, b2) {
  const AB = Vec.sub(a1, b1);
  const BV = Vec.sub(b2, b1);
  const AV = Vec.sub(a2, a1);
  const ua_t = BV[0] * AB[1] - BV[1] * AB[0];
  const ub_t = AV[0] * AB[1] - AV[1] * AB[0];
  const u_b = BV[1] * AV[0] - BV[0] * AV[1];
  if (ua_t === 0 || ub_t === 0) {
    return createIntersection("coincident");
  }
  if (u_b === 0) {
    return createIntersection("parallel");
  }
  if (u_b !== 0) {
    const ua = ua_t / u_b;
    const ub = ub_t / u_b;
    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
      return createIntersection("intersection", Vec.add(a1, Vec.mul(AV, ua)));
    }
  }
  return createIntersection("no intersection");
}
function intersectLineSegmentPolygon(a1, a2, points) {
  const pts = [];
  for (let i = 1; i < points.length + 1; i++) {
    const int = intersectLineSegmentLineSegment(a1, a2, points[i - 1], points[i % points.length]);
    if (int) {
      pts.push(...int.points);
    }
  }
  if (pts.length === 0) {
    return createIntersection("no intersection");
  }
  return createIntersection("intersection", ...points);
}
function intersectRectanglePolygon(point, size, points) {
  const sideIntersections = getRectangleSides(point, size).reduce((acc, [message, [a1, a2]]) => {
    const intersection = intersectLineSegmentPolygon(a1, a2, points);
    if (intersection.didIntersect) {
      acc.push(createIntersection(message, ...intersection.points));
    }
    return acc;
  }, []);
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectPolygonBounds(points, bounds) {
  return intersectRectanglePolygon([bounds.minX, bounds.minY], [bounds.width, bounds.height], points);
}

// ../../packages/core/dist/esm/index.js
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var TLContext = (0, import_react10.createContext)({});
function useTLContext() {
  const context = (0, import_react10.useContext)(TLContext);
  return context;
}
function useZoomEvents(zoom, ref) {
  const rOriginPoint = (0, import_react11.useRef)(void 0);
  const rPinchPoint = (0, import_react11.useRef)(void 0);
  const rDelta = (0, import_react11.useRef)([0, 0]);
  const { inputs: inputs2, bounds, callbacks } = useTLContext();
  (0, import_react11.useEffect)(() => {
    const preventGesture = (event) => {
      event.preventDefault();
    };
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);
  useGesture({
    onWheel: ({ delta, event: e }) => {
      var _a2, _b, _c, _d;
      return;
      if (e.altKey && e.buttons === 0) {
        const point = (_b = (_a2 = inputs2.pointer) == null ? void 0 : _a2.point) != null ? _b : [bounds.width / 2, bounds.height / 2];
        const info2 = inputs2.pinch(point, point);
        (_c = callbacks.onZoom) == null ? void 0 : _c.call(callbacks, __spreadProps(__spreadValues2({}, info2), { delta: [...point, -e.deltaY] }), e);
        return;
      }
      if (inputs2.isPinching)
        return;
      if (Vec.isEqual(delta, [0, 0]))
        return;
      const info = inputs2.pan(delta, e);
      (_d = callbacks.onPan) == null ? void 0 : _d.call(callbacks, info, e);
    },
    onPinchStart: ({ origin, event }) => {
      var _a2;
      const elm = ref.current;
      if (!elm || !(event.target === elm || elm.contains(event.target)))
        return;
      const info = inputs2.pinch(origin, origin);
      inputs2.isPinching = true;
      (_a2 = callbacks.onPinchStart) == null ? void 0 : _a2.call(callbacks, info, event);
      rPinchPoint.current = info.point;
      rOriginPoint.current = info.origin;
      rDelta.current = [0, 0];
    },
    onPinchEnd: ({ origin, event }) => {
      var _a2;
      const elm = ref.current;
      if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
        return;
      const info = inputs2.pinch(origin, origin);
      inputs2.isPinching = false;
      (_a2 = callbacks.onPinchEnd) == null ? void 0 : _a2.call(callbacks, info, event);
      rPinchPoint.current = void 0;
      rOriginPoint.current = void 0;
      rDelta.current = [0, 0];
    },
    onPinch: ({ origin, offset, event }) => {
      var _a2;
      const elm = ref.current;
      if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
        return;
      if (!rOriginPoint.current)
        return;
      const info = inputs2.pinch(origin, rOriginPoint.current);
      const trueDelta = Vec.sub(info.delta, rDelta.current);
      rDelta.current = info.delta;
      (_a2 = callbacks.onPinch) == null ? void 0 : _a2.call(callbacks, __spreadProps(__spreadValues2({}, info), {
        point: info.point,
        origin: rOriginPoint.current,
        delta: [...trueDelta, offset[0]]
      }), event);
      rPinchPoint.current = origin;
    }
  }, {
    target: ref,
    eventOptions: { passive: false },
    pinch: {
      from: zoom,
      scaleBounds: () => ({ from: inputs2.zoom, max: 5, min: 0.1 })
    }
  });
}
var TLBoundsEdge;
(function(TLBoundsEdge2) {
  TLBoundsEdge2["Top"] = "top_edge";
  TLBoundsEdge2["Right"] = "right_edge";
  TLBoundsEdge2["Bottom"] = "bottom_edge";
  TLBoundsEdge2["Left"] = "left_edge";
})(TLBoundsEdge || (TLBoundsEdge = {}));
var TLBoundsCorner;
(function(TLBoundsCorner2) {
  TLBoundsCorner2["TopLeft"] = "top_left_corner";
  TLBoundsCorner2["TopRight"] = "top_right_corner";
  TLBoundsCorner2["BottomRight"] = "bottom_right_corner";
  TLBoundsCorner2["BottomLeft"] = "bottom_left_corner";
})(TLBoundsCorner || (TLBoundsCorner = {}));
var SnapPoints;
(function(SnapPoints2) {
  SnapPoints2["minX"] = "minX";
  SnapPoints2["midX"] = "midX";
  SnapPoints2["maxX"] = "maxX";
  SnapPoints2["minY"] = "minY";
  SnapPoints2["midY"] = "midY";
  SnapPoints2["maxY"] = "maxY";
})(SnapPoints || (SnapPoints = {}));
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(str, newStr) {
    if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
      return this.replace(str, newStr);
    }
    return this.replace(new RegExp(str, "g"), newStr);
  };
}
var TAU = Math.PI * 2;
var _Utils = class {
  static lerp(y1, y2, mu) {
    mu = _Utils.clamp(mu, 0, 1);
    return y1 * (1 - mu) + y2 * mu;
  }
  static lerpColor(color1, color2, factor = 0.5) {
    function h2r(hex) {
      const result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return [parseInt(result2[1], 16), parseInt(result2[2], 16), parseInt(result2[3], 16)];
    }
    function r2h(rgb) {
      return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }
    const c1 = h2r(color1) || [0, 0, 0];
    const c2 = h2r(color2) || [0, 0, 0];
    const result = c1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (c2[i] - c1[i]));
    }
    return r2h(result);
  }
  static modulate(value, rangeA, rangeB, clamp2 = false) {
    const [fromLow, fromHigh] = rangeA;
    const [v0, v1] = rangeB;
    const result = v0 + (value - fromLow) / (fromHigh - fromLow) * (v1 - v0);
    return clamp2 ? v0 < v1 ? Math.max(Math.min(result, v1), v0) : Math.max(Math.min(result, v0), v1) : result;
  }
  static clamp(n, min, max) {
    return Math.max(min, typeof max !== "undefined" ? Math.min(n, max) : n);
  }
  static deepClone(obj) {
    if (obj === null)
      return obj;
    if (Array.isArray(obj)) {
      return [...obj];
    }
    if (typeof obj === "object") {
      const clone = __spreadValues2({}, obj);
      Object.keys(clone).forEach((key) => clone[key] = typeof obj[key] === "object" ? _Utils.deepClone(obj[key]) : obj[key]);
      return clone;
    }
    return obj;
  }
  static rng(seed = "") {
    let x = 0;
    let y = 0;
    let z = 0;
    let w = 0;
    function next() {
      const t = x ^ x << 11;
      x = y;
      y = z;
      z = w;
      w ^= (w >>> 19 ^ t ^ t >>> 8) >>> 0;
      return w / 4294967296;
    }
    for (let k = 0; k < seed.length + 64; k++) {
      x ^= seed.charCodeAt(k) | 0;
      next();
    }
    return next;
  }
  static pointsToLineSegments(points, closed = false) {
    const segments = [];
    for (let i = 1; i < points.length; i++)
      segments.push([points[i - 1], points[i]]);
    if (closed)
      segments.push([points[points.length - 1], points[0]]);
    return segments;
  }
  static getRectangleSides(point, size, rotation = 0) {
    const center = [point[0] + size[0] / 2, point[1] + size[1] / 2];
    const tl = Vec.rotWith(point, center, rotation);
    const tr = Vec.rotWith(Vec.add(point, [size[0], 0]), center, rotation);
    const br = Vec.rotWith(Vec.add(point, size), center, rotation);
    const bl = Vec.rotWith(Vec.add(point, [0, size[1]]), center, rotation);
    return [
      ["top", [tl, tr]],
      ["right", [tr, br]],
      ["bottom", [br, bl]],
      ["left", [bl, tl]]
    ];
  }
  static circleFromThreePoints(A, B, C) {
    const [x1, y1] = A;
    const [x2, y2] = B;
    const [x3, y3] = C;
    const a = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;
    const b = (x1 * x1 + y1 * y1) * (y3 - y2) + (x2 * x2 + y2 * y2) * (y1 - y3) + (x3 * x3 + y3 * y3) * (y2 - y1);
    const c = (x1 * x1 + y1 * y1) * (x2 - x3) + (x2 * x2 + y2 * y2) * (x3 - x1) + (x3 * x3 + y3 * y3) * (x1 - x2);
    const x = -b / (2 * a);
    const y = -c / (2 * a);
    return [x, y, Math.hypot(x - x1, y - y1)];
  }
  static perimeterOfEllipse(rx, ry) {
    const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
    const p = Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
    return p;
  }
  static shortAngleDist(a0, a1) {
    const max = Math.PI * 2;
    const da = (a1 - a0) % max;
    return 2 * da % max - da;
  }
  static longAngleDist(a0, a1) {
    return Math.PI * 2 - _Utils.shortAngleDist(a0, a1);
  }
  static lerpAngles(a0, a1, t) {
    return a0 + _Utils.shortAngleDist(a0, a1) * t;
  }
  static angleDelta(a0, a1) {
    return _Utils.shortAngleDist(a0, a1);
  }
  static getSweep(C, A, B) {
    return _Utils.angleDelta(Vec.angle(C, A), Vec.angle(C, B));
  }
  static clampRadians(r) {
    return (Math.PI * 2 + r) % (Math.PI * 2);
  }
  static snapAngleToSegments(r, segments) {
    const seg = Math.PI * 2 / segments;
    return Math.floor((_Utils.clampRadians(r) + seg / 2) / seg) * seg;
  }
  static isAngleBetween(a, b, c) {
    if (c === a || c === b)
      return true;
    const AB = (b - a + TAU) % TAU;
    const AC = (c - a + TAU) % TAU;
    return AB <= Math.PI !== AC > AB;
  }
  static degreesToRadians(d) {
    return d * Math.PI / 180;
  }
  static radiansToDegrees(r) {
    return r * 180 / Math.PI;
  }
  static getArcLength(C, r, A, B) {
    const sweep = _Utils.getSweep(C, A, B);
    return r * (2 * Math.PI) * (sweep / (2 * Math.PI));
  }
  static getSweepFlag(A, B, C) {
    const angleAC = Vec.angle(A, C);
    const angleAB = Vec.angle(A, B);
    const angleCAB = (angleAB - angleAC + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return angleCAB > 0 ? 0 : 1;
  }
  static getLargeArcFlag(A, C, P) {
    const anglePA = Vec.angle(P, A);
    const anglePC = Vec.angle(P, C);
    const angleAPC = (anglePC - anglePA + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return Math.abs(angleAPC) > Math.PI / 2 ? 0 : 1;
  }
  static getArcDashOffset(C, r, A, B, step) {
    const del0 = _Utils.getSweepFlag(C, A, B);
    const len0 = _Utils.getArcLength(C, r, A, B);
    const off0 = del0 < 0 ? len0 : 2 * Math.PI * C[2] - len0;
    return -off0 / 2 + step;
  }
  static getEllipseDashOffset(A, step) {
    const c = 2 * Math.PI * A[2];
    return -c / 2 + -step;
  }
  static pointInCircle(A, C, r) {
    return Vec.dist(A, C) <= r;
  }
  static pointInEllipse(A, C, rx, ry, rotation = 0) {
    rotation = rotation || 0;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    const delta = Vec.sub(A, C);
    const tdx = cos * delta[0] + sin * delta[1];
    const tdy = sin * delta[0] - cos * delta[1];
    return tdx * tdx / (rx * rx) + tdy * tdy / (ry * ry) <= 1;
  }
  static pointInRect(point, size) {
    return !(point[0] < size[0] || point[0] > point[0] + size[0] || point[1] < size[1] || point[1] > point[1] + size[1]);
  }
  static pointInPolygon(p, points) {
    let wn = 0;
    points.forEach((a, i) => {
      const b = points[(i + 1) % points.length];
      if (a[1] <= p[1]) {
        if (b[1] > p[1] && Vec.cross(a, b, p) > 0) {
          wn += 1;
        }
      } else if (b[1] <= p[1] && Vec.cross(a, b, p) < 0) {
        wn -= 1;
      }
    });
    return wn !== 0;
  }
  static pointInBounds(A, b) {
    return !(A[0] < b.minX || A[0] > b.maxX || A[1] < b.minY || A[1] > b.maxY);
  }
  static pointInPolyline(A, points, distance = 3) {
    for (let i = 1; i < points.length; i++) {
      if (Vec.distanceToLineSegment(points[i - 1], points[i], A) < distance) {
        return true;
      }
    }
    return false;
  }
  static getBoundsSides(bounds) {
    return this.getRectangleSides([bounds.minX, bounds.minY], [bounds.width, bounds.height]);
  }
  static expandBounds(bounds, delta) {
    return {
      minX: bounds.minX - delta,
      minY: bounds.minY - delta,
      maxX: bounds.maxX + delta,
      maxY: bounds.maxY + delta,
      width: bounds.width + delta * 2,
      height: bounds.height + delta * 2
    };
  }
  static boundsCollide(a, b) {
    return !(a.maxX < b.minX || a.minX > b.maxX || a.maxY < b.minY || a.minY > b.maxY);
  }
  static boundsContain(a, b) {
    return a.minX < b.minX && a.minY < b.minY && a.maxY > b.maxY && a.maxX > b.maxX;
  }
  static boundsContained(a, b) {
    return _Utils.boundsContain(b, a);
  }
  static boundsAreEqual(a, b) {
    return !(b.maxX !== a.maxX || b.minX !== a.minX || b.maxY !== a.maxY || b.minY !== a.minY);
  }
  static getBoundsFromPoints(points, rotation = 0) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    if (points.length < 2) {
      minX = 0;
      minY = 0;
      maxX = 1;
      maxY = 1;
    } else {
      for (const [x, y] of points) {
        minX = Math.min(x, minX);
        minY = Math.min(y, minY);
        maxX = Math.max(x, maxX);
        maxY = Math.max(y, maxY);
      }
    }
    if (rotation !== 0) {
      return _Utils.getBoundsFromPoints(points.map((pt) => Vec.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], rotation)));
    }
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }
  static centerBounds(bounds, point) {
    const boundsCenter = this.getBoundsCenter(bounds);
    const dx = point[0] - boundsCenter[0];
    const dy = point[1] - boundsCenter[1];
    return this.translateBounds(bounds, [dx, dy]);
  }
  static snapBoundsToGrid(bounds, gridSize) {
    const minX = Math.round(bounds.minX / gridSize) * gridSize;
    const minY = Math.round(bounds.minY / gridSize) * gridSize;
    const maxX = Math.round(bounds.maxX / gridSize) * gridSize;
    const maxY = Math.round(bounds.maxY / gridSize) * gridSize;
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }
  static translateBounds(bounds, delta) {
    return {
      minX: bounds.minX + delta[0],
      minY: bounds.minY + delta[1],
      maxX: bounds.maxX + delta[0],
      maxY: bounds.maxY + delta[1],
      width: bounds.width,
      height: bounds.height
    };
  }
  static rotateBounds(bounds, center, rotation) {
    const [minX, minY] = Vec.rotWith([bounds.minX, bounds.minY], center, rotation);
    const [maxX, maxY] = Vec.rotWith([bounds.maxX, bounds.maxY], center, rotation);
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: bounds.width,
      height: bounds.height
    };
  }
  static getRotatedEllipseBounds(x, y, rx, ry, rotation = 0) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    const w = Math.hypot(rx * c, ry * s);
    const h = Math.hypot(rx * s, ry * c);
    return {
      minX: x + rx - w,
      minY: y + ry - h,
      maxX: x + rx + w,
      maxY: y + ry + h,
      width: w * 2,
      height: h * 2
    };
  }
  static getExpandedBounds(a, b) {
    const minX = Math.min(a.minX, b.minX);
    const minY = Math.min(a.minY, b.minY);
    const maxX = Math.max(a.maxX, b.maxX);
    const maxY = Math.max(a.maxY, b.maxY);
    const width = Math.abs(maxX - minX);
    const height = Math.abs(maxY - minY);
    return { minX, minY, maxX, maxY, width, height };
  }
  static getCommonBounds(bounds) {
    if (bounds.length < 2)
      return bounds[0];
    let result = bounds[0];
    for (let i = 1; i < bounds.length; i++) {
      result = _Utils.getExpandedBounds(result, bounds[i]);
    }
    return result;
  }
  static getRotatedCorners(b, rotation = 0) {
    const center = [b.minX + b.width / 2, b.minY + b.height / 2];
    return [
      [b.minX, b.minY],
      [b.maxX, b.minY],
      [b.maxX, b.maxY],
      [b.minX, b.maxY]
    ].map((point) => Vec.rotWith(point, center, rotation));
  }
  static getTransformedBoundingBox(bounds, handle, delta, rotation = 0, isAspectRatioLocked = false) {
    const [ax0, ay0] = [bounds.minX, bounds.minY];
    const [ax1, ay1] = [bounds.maxX, bounds.maxY];
    let [bx0, by0] = [bounds.minX, bounds.minY];
    let [bx1, by1] = [bounds.maxX, bounds.maxY];
    if (handle === "center") {
      return {
        minX: bx0 + delta[0],
        minY: by0 + delta[1],
        maxX: bx1 + delta[0],
        maxY: by1 + delta[1],
        width: bx1 - bx0,
        height: by1 - by0,
        scaleX: 1,
        scaleY: 1
      };
    }
    const [dx, dy] = Vec.rot(delta, -rotation);
    switch (handle) {
      case TLBoundsEdge.Top:
      case TLBoundsCorner.TopLeft:
      case TLBoundsCorner.TopRight: {
        by0 += dy;
        break;
      }
      case TLBoundsEdge.Bottom:
      case TLBoundsCorner.BottomLeft:
      case TLBoundsCorner.BottomRight: {
        by1 += dy;
        break;
      }
    }
    switch (handle) {
      case TLBoundsEdge.Left:
      case TLBoundsCorner.TopLeft:
      case TLBoundsCorner.BottomLeft: {
        bx0 += dx;
        break;
      }
      case TLBoundsEdge.Right:
      case TLBoundsCorner.TopRight:
      case TLBoundsCorner.BottomRight: {
        bx1 += dx;
        break;
      }
    }
    const aw = ax1 - ax0;
    const ah = ay1 - ay0;
    const scaleX = (bx1 - bx0) / aw;
    const scaleY = (by1 - by0) / ah;
    const flipX = scaleX < 0;
    const flipY = scaleY < 0;
    const bw = Math.abs(bx1 - bx0);
    const bh = Math.abs(by1 - by0);
    if (isAspectRatioLocked) {
      const ar = aw / ah;
      const isTall = ar < bw / bh;
      const tw = bw * (scaleY < 0 ? 1 : -1) * (1 / ar);
      const th = bh * (scaleX < 0 ? 1 : -1) * ar;
      switch (handle) {
        case TLBoundsCorner.TopLeft: {
          if (isTall)
            by0 = by1 + tw;
          else
            bx0 = bx1 + th;
          break;
        }
        case TLBoundsCorner.TopRight: {
          if (isTall)
            by0 = by1 + tw;
          else
            bx1 = bx0 - th;
          break;
        }
        case TLBoundsCorner.BottomRight: {
          if (isTall)
            by1 = by0 - tw;
          else
            bx1 = bx0 - th;
          break;
        }
        case TLBoundsCorner.BottomLeft: {
          if (isTall)
            by1 = by0 - tw;
          else
            bx0 = bx1 + th;
          break;
        }
        case TLBoundsEdge.Bottom:
        case TLBoundsEdge.Top: {
          const m = (bx0 + bx1) / 2;
          const w = bh * ar;
          bx0 = m - w / 2;
          bx1 = m + w / 2;
          break;
        }
        case TLBoundsEdge.Left:
        case TLBoundsEdge.Right: {
          const m = (by0 + by1) / 2;
          const h = bw / ar;
          by0 = m - h / 2;
          by1 = m + h / 2;
          break;
        }
      }
    }
    if (rotation % (Math.PI * 2) !== 0) {
      let cv = [0, 0];
      const c0 = Vec.med([ax0, ay0], [ax1, ay1]);
      const c1 = Vec.med([bx0, by0], [bx1, by1]);
      switch (handle) {
        case TLBoundsCorner.TopLeft: {
          cv = Vec.sub(Vec.rotWith([bx1, by1], c1, rotation), Vec.rotWith([ax1, ay1], c0, rotation));
          break;
        }
        case TLBoundsCorner.TopRight: {
          cv = Vec.sub(Vec.rotWith([bx0, by1], c1, rotation), Vec.rotWith([ax0, ay1], c0, rotation));
          break;
        }
        case TLBoundsCorner.BottomRight: {
          cv = Vec.sub(Vec.rotWith([bx0, by0], c1, rotation), Vec.rotWith([ax0, ay0], c0, rotation));
          break;
        }
        case TLBoundsCorner.BottomLeft: {
          cv = Vec.sub(Vec.rotWith([bx1, by0], c1, rotation), Vec.rotWith([ax1, ay0], c0, rotation));
          break;
        }
        case TLBoundsEdge.Top: {
          cv = Vec.sub(Vec.rotWith(Vec.med([bx0, by1], [bx1, by1]), c1, rotation), Vec.rotWith(Vec.med([ax0, ay1], [ax1, ay1]), c0, rotation));
          break;
        }
        case TLBoundsEdge.Left: {
          cv = Vec.sub(Vec.rotWith(Vec.med([bx1, by0], [bx1, by1]), c1, rotation), Vec.rotWith(Vec.med([ax1, ay0], [ax1, ay1]), c0, rotation));
          break;
        }
        case TLBoundsEdge.Bottom: {
          cv = Vec.sub(Vec.rotWith(Vec.med([bx0, by0], [bx1, by0]), c1, rotation), Vec.rotWith(Vec.med([ax0, ay0], [ax1, ay0]), c0, rotation));
          break;
        }
        case TLBoundsEdge.Right: {
          cv = Vec.sub(Vec.rotWith(Vec.med([bx0, by0], [bx0, by1]), c1, rotation), Vec.rotWith(Vec.med([ax0, ay0], [ax0, ay1]), c0, rotation));
          break;
        }
      }
      ;
      [bx0, by0] = Vec.sub([bx0, by0], cv);
      [bx1, by1] = Vec.sub([bx1, by1], cv);
    }
    if (bx1 < bx0) {
      ;
      [bx1, bx0] = [bx0, bx1];
    }
    if (by1 < by0) {
      ;
      [by1, by0] = [by0, by1];
    }
    return {
      minX: bx0,
      minY: by0,
      maxX: bx1,
      maxY: by1,
      width: bx1 - bx0,
      height: by1 - by0,
      scaleX: (bx1 - bx0) / (ax1 - ax0 || 1) * (flipX ? -1 : 1),
      scaleY: (by1 - by0) / (ay1 - ay0 || 1) * (flipY ? -1 : 1)
    };
  }
  static getTransformAnchor(type, isFlippedX, isFlippedY) {
    let anchor = type;
    switch (type) {
      case TLBoundsCorner.TopLeft: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.BottomRight;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.TopRight;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.BottomLeft;
        } else {
          anchor = TLBoundsCorner.BottomRight;
        }
        break;
      }
      case TLBoundsCorner.TopRight: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.BottomLeft;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.TopLeft;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.BottomRight;
        } else {
          anchor = TLBoundsCorner.BottomLeft;
        }
        break;
      }
      case TLBoundsCorner.BottomRight: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.TopLeft;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.BottomLeft;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.TopRight;
        } else {
          anchor = TLBoundsCorner.TopLeft;
        }
        break;
      }
      case TLBoundsCorner.BottomLeft: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.TopRight;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.BottomRight;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.TopLeft;
        } else {
          anchor = TLBoundsCorner.TopRight;
        }
        break;
      }
    }
    return anchor;
  }
  static getRelativeTransformedBoundingBox(bounds, initialBounds, initialShapeBounds, isFlippedX, isFlippedY) {
    const nx = (isFlippedX ? initialBounds.maxX - initialShapeBounds.maxX : initialShapeBounds.minX - initialBounds.minX) / initialBounds.width;
    const ny = (isFlippedY ? initialBounds.maxY - initialShapeBounds.maxY : initialShapeBounds.minY - initialBounds.minY) / initialBounds.height;
    const nw = initialShapeBounds.width / initialBounds.width;
    const nh = initialShapeBounds.height / initialBounds.height;
    const minX = bounds.minX + bounds.width * nx;
    const minY = bounds.minY + bounds.height * ny;
    const width = bounds.width * nw;
    const height = bounds.height * nh;
    return {
      minX,
      minY,
      maxX: minX + width,
      maxY: minY + height,
      width,
      height
    };
  }
  static getRotatedSize(size, rotation) {
    const center = Vec.div(size, 2);
    const points = [[0, 0], [size[0], 0], size, [0, size[1]]].map((point) => Vec.rotWith(point, center, rotation));
    const bounds = _Utils.getBoundsFromPoints(points);
    return [bounds.width, bounds.height];
  }
  static getBoundsCenter(bounds) {
    return [bounds.minX + bounds.width / 2, bounds.minY + bounds.height / 2];
  }
  static getBoundsWithCenter(bounds) {
    const center = _Utils.getBoundsCenter(bounds);
    return __spreadProps(__spreadValues2({}, bounds), {
      midX: center[0],
      midY: center[1]
    });
  }
  static getCommonTopLeft(points) {
    const min = [Infinity, Infinity];
    points.forEach((point) => {
      min[0] = Math.min(min[0], point[0]);
      min[1] = Math.min(min[1], point[1]);
    });
    return min;
  }
  static getFromCache(cache, item, getNext) {
    let value = cache.get(item);
    if (value === void 0) {
      cache.set(item, getNext());
      value = cache.get(item);
      if (value === void 0) {
        throw Error("Cache did not include item!");
      }
    }
    return value;
  }
  static uniqueId(a = "") {
    return a ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, _Utils.uniqueId);
  }
  static rotateArray(arr, offset) {
    return arr.map((_14, i) => arr[(i + offset) % arr.length]);
  }
  static debounce(fn, ms = 0) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(args), ms);
    };
  }
  static getSvgPathFromStroke(points, closed = true) {
    if (!points.length) {
      return "";
    }
    const max = points.length - 1;
    return points.reduce((acc, point, i, arr) => {
      if (i === max) {
        if (closed) {
          acc.push("Z");
        }
      } else {
        acc.push(point, Vec.med(point, arr[i + 1]));
      }
      return acc;
    }, ["M", points[0], "Q"]).join(" ").replaceAll(this.TRIM_NUMBERS, "$1");
  }
  static getPerfectDashProps(length, strokeWidth, style, snap = 1, outset = true) {
    let dashLength;
    let strokeDashoffset;
    let ratio;
    if (style.toLowerCase() === "dashed") {
      dashLength = strokeWidth * 2;
      ratio = 1;
      strokeDashoffset = outset ? (dashLength / 2).toString() : "0";
    } else if (style.toLowerCase() === "dotted") {
      dashLength = strokeWidth / 100;
      ratio = 100;
      strokeDashoffset = "0";
    } else {
      return {
        strokeDasharray: "none",
        strokeDashoffset: "none"
      };
    }
    let dashes = Math.floor(length / dashLength / (2 * ratio));
    dashes -= dashes % snap;
    dashes = Math.max(dashes, 4);
    const gapLength = Math.max(dashLength, (length - dashes * dashLength) / (outset ? dashes : dashes - 1));
    return {
      strokeDasharray: [dashLength, gapLength].join(" "),
      strokeDashoffset
    };
  }
  static isMobileSize() {
    if (typeof window === "undefined")
      return false;
    return window.innerWidth < 768;
  }
  static isMobileSafari() {
    if (typeof window === "undefined")
      return false;
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i);
  }
  static throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function(...args) {
      if (!inThrottle) {
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
        lastResult = func(...args);
      }
      return lastResult;
    };
  }
  static isDarwin() {
    return /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
  }
  static metaKey(e) {
    return _Utils.isDarwin() ? e.metaKey : e.ctrlKey;
  }
};
var Utils = _Utils;
__publicField2(Utils, "getSnapPoints", (bounds, others, snapDistance) => {
  const A = __spreadValues2({}, bounds);
  const offset = [0, 0];
  const snapLines = [];
  const snaps = {
    [SnapPoints.minX]: { id: SnapPoints.minX, isSnapped: false },
    [SnapPoints.midX]: { id: SnapPoints.midX, isSnapped: false },
    [SnapPoints.maxX]: { id: SnapPoints.maxX, isSnapped: false },
    [SnapPoints.minY]: { id: SnapPoints.minY, isSnapped: false },
    [SnapPoints.midY]: { id: SnapPoints.midY, isSnapped: false },
    [SnapPoints.maxY]: { id: SnapPoints.maxY, isSnapped: false }
  };
  const xs = [SnapPoints.midX, SnapPoints.minX, SnapPoints.maxX];
  const ys = [SnapPoints.midY, SnapPoints.minY, SnapPoints.maxY];
  const snapResults = others.map((B) => {
    const rx = xs.flatMap((f, i) => xs.map((t, k) => {
      const gap = A[f] - B[t];
      const distance = Math.abs(gap);
      return {
        f,
        t,
        gap,
        distance,
        isCareful: i === 0 || i + k === 3
      };
    }));
    const ry = ys.flatMap((f, i) => ys.map((t, k) => {
      const gap = A[f] - B[t];
      const distance = Math.abs(gap);
      return {
        f,
        t,
        gap,
        distance,
        isCareful: i === 0 || i + k === 3
      };
    }));
    return [B, rx, ry];
  });
  let gapX = Infinity;
  let gapY = Infinity;
  let minX = Infinity;
  let minY = Infinity;
  snapResults.forEach(([_14, rx, ry]) => {
    rx.forEach((r) => {
      if (r.distance < snapDistance && r.distance < minX) {
        minX = r.distance;
        gapX = r.gap;
      }
    });
    ry.forEach((r) => {
      if (r.distance < snapDistance && r.distance < minY) {
        minY = r.distance;
        gapY = r.gap;
      }
    });
  });
  snapResults.forEach(([B, rx, ry]) => {
    if (gapX !== Infinity) {
      rx.forEach((r) => {
        if (Math.abs(r.gap - gapX) < 2) {
          snaps[r.f] = __spreadProps(__spreadValues2({}, snaps[r.f]), {
            isSnapped: true,
            to: B[r.t],
            B,
            distance: r.distance
          });
        }
      });
    }
    if (gapY !== Infinity) {
      ry.forEach((r) => {
        if (Math.abs(r.gap - gapY) < 2) {
          snaps[r.f] = __spreadProps(__spreadValues2({}, snaps[r.f]), {
            isSnapped: true,
            to: B[r.t],
            B,
            distance: r.distance
          });
        }
      });
    }
  });
  offset[0] = gapX === Infinity ? 0 : gapX;
  offset[1] = gapY === Infinity ? 0 : gapY;
  A.minX -= offset[0];
  A.midX -= offset[0];
  A.maxX -= offset[0];
  A.minY -= offset[1];
  A.midY -= offset[1];
  A.maxY -= offset[1];
  xs.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B } = snap;
    const x = A[id];
    snapLines.push(id === SnapPoints.minX ? [
      [x, A.midY],
      [x, B.minY],
      [x, B.maxY]
    ] : [
      [x, A.minY],
      [x, A.maxY],
      [x, B.minY],
      [x, B.maxY]
    ]);
  });
  ys.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B } = snap;
    const y = A[id];
    snapLines.push(id === SnapPoints.midY ? [
      [A.midX, y],
      [B.minX, y],
      [B.maxX, y]
    ] : [
      [A.minX, y],
      [A.maxX, y],
      [B.minX, y],
      [B.maxX, y]
    ]);
  });
  return { offset, snapLines };
});
__publicField2(Utils, "deepMerge", (target, patch) => {
  const result = __spreadValues2({}, target);
  const entries = Object.entries(patch);
  for (const [key, value] of entries)
    result[key] = value === Object(value) && !Array.isArray(value) ? _Utils.deepMerge(result[key], value) : value;
  return result;
});
__publicField2(Utils, "TRIM_NUMBERS", /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g);
var utils_default = Utils;
function useSafariFocusOutFix() {
  const { callbacks } = useTLContext();
  (0, import_react13.useEffect)(() => {
    function handleFocusOut() {
      var _a2;
      (_a2 = callbacks.onShapeBlur) == null ? void 0 : _a2.call(callbacks);
    }
    if (utils_default.isMobileSafari()) {
      document.addEventListener("focusout", handleFocusOut);
      return () => document.removeEventListener("focusout", handleFocusOut);
    }
    return () => null;
  }, [callbacks]);
}
function useCanvasEvents() {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = (0, import_react14.useCallback)((e) => {
    var _a2, _b;
    if (e.button !== 0 && e.button !== 1)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, "canvas");
    if (e.button === 0 || e.button === 1) {
      (_a2 = callbacks.onPointCanvas) == null ? void 0 : _a2.call(callbacks, info, e);
      (_b = callbacks.onPointerDown) == null ? void 0 : _b.call(callbacks, info, e);
    }
  }, [callbacks, inputs2]);
  const onPointerMove = (0, import_react14.useCallback)((e) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    const info = inputs2.pointerMove(e, "canvas");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = callbacks.onDragCanvas) == null ? void 0 : _a2.call(callbacks, info, e);
    }
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerUp = (0, import_react14.useCallback)((e) => {
    var _a2, _b, _c, _d;
    if (e.button !== 0 && e.button !== 1)
      return;
    inputs2.activePointer = void 0;
    if (!inputs2.pointerIsValid(e))
      return;
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, "canvas");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = e.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickCanvas) == null ? void 0 : _b.call(callbacks, info, e);
    }
    (_c = callbacks.onReleaseCanvas) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  return {
    onPointerDown,
    onPointerMove,
    onPointerUp
  };
}
function useShapeEvents(id) {
  const { rPageState, rSelectionBounds, callbacks, inputs: inputs2 } = (0, import_react15.useContext)(TLContext);
  return (0, import_react15.useMemo)(() => ({
    onPointerDown: (e) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (!inputs2.pointerIsValid(e))
        return;
      if (e.button === 2) {
        (_a2 = callbacks.onRightPointShape) == null ? void 0 : _a2.call(callbacks, inputs2.pointerDown(e, id), e);
        return;
      }
      if (e.button !== 0)
        return;
      const info = inputs2.pointerDown(e, id);
      e.stopPropagation();
      (_b = e.currentTarget) == null ? void 0 : _b.setPointerCapture(e.pointerId);
      if (rSelectionBounds.current && Utils.pointInBounds(info.point, rSelectionBounds.current) && !rPageState.current.selectedIds.includes(id)) {
        (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, inputs2.pointerDown(e, "bounds"), e);
        (_d = callbacks.onPointShape) == null ? void 0 : _d.call(callbacks, info, e);
        (_e = callbacks.onPointerDown) == null ? void 0 : _e.call(callbacks, info, e);
        return;
      }
      (_f = callbacks.onPointShape) == null ? void 0 : _f.call(callbacks, info, e);
      (_g = callbacks.onPointerDown) == null ? void 0 : _g.call(callbacks, info, e);
    },
    onPointerUp: (e) => {
      var _a2, _b, _c, _d;
      if (e.button !== 0)
        return;
      inputs2.activePointer = void 0;
      if (!inputs2.pointerIsValid(e))
        return;
      e.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e, id);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        (_a2 = e.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickShape) == null ? void 0 : _b.call(callbacks, info, e);
      }
      (_c = callbacks.onReleaseShape) == null ? void 0 : _c.call(callbacks, info, e);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
    },
    onPointerEnter: (e) => {
      var _a2, _b;
      if (!inputs2.pointerIsValid(e))
        return;
      e.stopPropagation();
      if (inputs2.pointer && e.pointerId !== inputs2.pointer.pointerId)
        return;
      const info = inputs2.pointerMove(e, id);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        (_a2 = callbacks.onDragShape) == null ? void 0 : _a2.call(callbacks, info, e);
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
    },
    onPointerMove: (e) => {
      var _a2;
      if (!inputs2.pointerIsValid(e))
        return;
      const info = inputs2.pointerEnter(e, id);
      (_a2 = callbacks.onHoverShape) == null ? void 0 : _a2.call(callbacks, info, e);
    },
    onPointerLeave: (e) => {
      var _a2;
      if (!inputs2.pointerIsValid(e))
        return;
      const info = inputs2.pointerEnter(e, id);
      (_a2 = callbacks.onUnhoverShape) == null ? void 0 : _a2.call(callbacks, info, e);
    }
  }), [inputs2, callbacks, id]);
}
function addToShapeTree(shape, branch, shapes, pageState2, isChildOfGhost = false, isChildOfSelected = false, meta) {
  const node = {
    shape,
    meta,
    isChildOfSelected,
    isGhost: shape.isGhost || isChildOfGhost,
    isEditing: pageState2.editingId === shape.id,
    isBinding: pageState2.bindingTargetId === shape.id,
    isSelected: pageState2.selectedIds.includes(shape.id),
    isHovered: pageState2.hoveredId === shape.id || shape.children !== void 0 && (pageState2.hoveredId && shape.children.includes(pageState2.hoveredId) || shape.children.some((childId) => pageState2.selectedIds.includes(childId)))
  };
  branch.push(node);
  if (shape.children) {
    node.children = [];
    shape.children.map((id) => shapes[id]).sort((a, b) => a.childIndex - b.childIndex).forEach((childShape) => addToShapeTree(childShape, node.children, shapes, pageState2, node.isGhost, node.isSelected || node.isChildOfSelected, meta));
  }
}
function shapeIsInViewport(bounds, viewport) {
  return Utils.boundsContain(viewport, bounds) || Utils.boundsCollide(viewport, bounds);
}
function useShapeTree(page2, pageState2, meta) {
  const { callbacks, shapeUtils: shapeUtils2, bounds } = useTLContext();
  const rTimeout = (0, import_react16.useRef)();
  const rPreviousCount = (0, import_react16.useRef)(0);
  const rShapesIdsToRender = (0, import_react16.useRef)(new Set());
  const rShapesToRender = (0, import_react16.useRef)(new Set());
  const { selectedIds, camera } = pageState2;
  const [minX, minY] = Vec.sub(Vec.div([0, 0], camera.zoom), camera.point);
  const [maxX, maxY] = Vec.sub(Vec.div([bounds.width, bounds.height], camera.zoom), camera.point);
  const viewport = {
    minX,
    minY,
    maxX,
    maxY,
    height: maxX - minX,
    width: maxY - minY
  };
  const shapesToRender = rShapesToRender.current;
  const shapesIdsToRender = rShapesIdsToRender.current;
  shapesToRender.clear();
  shapesIdsToRender.clear();
  Object.values(page2.shapes).filter((shape) => shapeUtils2[shape.type].isStateful || selectedIds.includes(shape.id) || shapeIsInViewport(shapeUtils2[shape.type].getBounds(shape), viewport)).forEach((shape) => {
    if (shape.parentId === page2.id) {
      shapesIdsToRender.add(shape.id);
      shapesToRender.add(shape);
      return;
    }
    shapesIdsToRender.add(shape.parentId);
    shapesToRender.add(page2.shapes[shape.parentId]);
  });
  if (shapesToRender.size !== rPreviousCount.current) {
    if (rTimeout.current) {
      clearTimeout(rTimeout.current);
    }
    rTimeout.current = requestAnimationFrame(() => {
      var _a2;
      (_a2 = callbacks.onRenderCountChange) == null ? void 0 : _a2.call(callbacks, Array.from(shapesIdsToRender.values()));
    });
    rPreviousCount.current = shapesToRender.size;
  }
  const bindingTargetId = pageState2.bindingId ? page2.bindings[pageState2.bindingId].toId : void 0;
  const tree = [];
  shapesToRender.forEach((shape) => addToShapeTree(shape, tree, page2.shapes, __spreadProps(__spreadValues2({}, pageState2), { bindingTargetId }), shape.isGhost, false, meta));
  tree.sort((a, b) => a.shape.childIndex - b.shape.childIndex);
  return tree;
}
var styles = new Map();
function makeCssTheme(prefix, theme) {
  return Object.keys(theme).reduce((acc, key) => {
    const value = theme[key];
    if (value) {
      return acc + `${`--${prefix}-${key}`}: ${value};
`;
    }
    return acc;
  }, "");
}
function useTheme(prefix, theme, selector = ":root") {
  (0, import_react17.useLayoutEffect)(() => {
    const style = document.createElement("style");
    const cssTheme = makeCssTheme(prefix, theme);
    style.setAttribute("id", `${prefix}-theme`);
    style.setAttribute("data-selector", selector);
    style.innerHTML = `
        ${selector} {
          ${cssTheme}
        }
      `;
    document.head.appendChild(style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [prefix, theme, selector]);
}
function useStyle(uid, rules) {
  (0, import_react17.useLayoutEffect)(() => {
    if (styles.get(uid)) {
      return () => void 0;
    }
    const style = document.createElement("style");
    style.innerHTML = rules;
    style.setAttribute("id", uid);
    document.head.appendChild(style);
    styles.set(uid, style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
        styles.delete(uid);
      }
    };
  }, [uid, rules]);
}
var css = (strings, ...args) => strings.reduce((acc, string, index) => acc + string + (index < args.length ? args[index] : ""), "");
var defaultTheme = {
  accent: "rgb(255, 0, 0)",
  brushFill: "rgba(0,0,0,.05)",
  brushStroke: "rgba(0,0,0,.25)",
  selectStroke: "rgb(66, 133, 244)",
  selectFill: "rgba(65, 132, 244, 0.05)",
  binding: "rgba(65, 132, 244, 0.12)",
  background: "rgb(248, 249, 250)",
  foreground: "rgb(51, 51, 51)",
  grid: "rgba(144, 144, 144, 1)"
};
var tlcss = css`
  @font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Recursive Mono';
    font-style: normal;
    font-weight: 420;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImqvTxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  .tl-container {
    --tl-zoom: 1;
    --tl-scale: calc(1 / var(--tl-zoom));
    --tl-padding: calc(64px * max(1, var(--tl-scale)));
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    z-index: 100;
    overflow: hidden;
    touch-action: none;
    overscroll-behavior: none;
    background-color: var(--tl-background);
  }

  .tl-container * {
    box-sizing: border-box;
  }

  .tl-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
  }

  .tl-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
    user-select: none;
  }

  .tl-snap-line {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }

  .tl-snap-point {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }

  .tl-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: all;
    overflow: clip;
  }

  .tl-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 0px;
    width: 0px;
    contain: layout style size;
  }

  .tl-absolute {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    contain: layout style size;
  }

  .tl-positioned {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    contain: layout style size;
  }

  .tl-positioned-svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    contain: layout style size;
  }

  .tl-positioned-div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: var(--tl-padding);
    overflow: hidden;
    contain: layout style size;
  }

  .tl-stroke-hitarea {
    cursor: pointer;
    fill: none;
    stroke: transparent;
    stroke-width: calc(24px * var(--tl-scale));
    pointer-events: stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .tl-fill-hitarea {
    cursor: pointer;
    fill: transparent;
    stroke: transparent;
    stroke-width: calc(24px * var(--tl-scale));
    pointer-events: all;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .tl-counter-scaled {
    transform: scale(var(--tl-scale));
  }

  .tl-dashed {
    stroke-dasharray: calc(2px * var(--tl-scale)), calc(2px * var(--tl-scale));
  }

  .tl-transparent {
    fill: transparent;
    stroke: transparent;
  }

  .tl-cursor-ns {
    cursor: ns-resize;
  }

  .tl-cursor-ew {
    cursor: ew-resize;
  }

  .tl-cursor-nesw {
    cursor: nesw-resize;
  }

  .tl-cursor-nwse {
    cursor: nwse-resize;
  }

  .tl-corner-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
  }

  .tl-rotate-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
    cursor: grab;
  }

  .tl-binding {
    fill: var(--tl-selectFill);
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
  }

  .tl-user {
    left: -4px;
    top: -4px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    pointer-events: none;
  }

  .tl-indicator {
    fill: transparent;
    stroke-width: calc(1.5px * var(--tl-scale));
    pointer-events: none;
  }

  .tl-user-indicator-bounds {
    border-style: solid;
    border-width: calc(1px * var(--tl-scale));
  }

  .tl-selected {
    stroke: var(--tl-selectStroke);
  }

  .tl-hovered {
    stroke: var(--tl-selectStroke);
  }

  .tl-clone-target {
    pointer-events: all;
  }

  .tl-clone-target:hover .tl-clone-button {
    opacity: 1;
  }

  .tl-clone-button-target {
    cursor: pointer;
    pointer-events: all;
  }

  .tl-clone-button-target:hover .tl-clone-button {
    fill: var(--tl-selectStroke);
  }

  .tl-clone-button {
    opacity: 0;
    r: calc(8px * var(--tl-scale));
    stroke-width: calc(1.5px * var(--tl-scale));
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
  }

  .tl-bounds {
    pointer-events: none;
    contain: layout style size;
  }

  .tl-bounds-bg {
    stroke: none;
    fill: var(--tl-selectFill);
    pointer-events: all;
    contain: layout style size;
  }

  .tl-bounds-center {
    fill: transparent;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1.5px * var(--tl-scale));
  }

  .tl-brush {
    fill: var(--tl-brushFill);
    stroke: var(--tl-brushStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
    contain: layout style size;
  }

  .tl-dot {
    fill: var(--tl-background);
    stroke: var(--tl-foreground);
    stroke-width: 2px;
  }

  .tl-handle {
    pointer-events: all;
    cursor: grab;
  }

  .tl-handle:hover .tl-handle-bg {
    fill: var(--tl-selectFill);
  }

  .tl-handle:hover .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }

  .tl-handle:active .tl-handle-bg {
    cursor: grabbing;
    fill: var(--tl-selectFill);
  }

  .tl-handle:active .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }

  .tl-handle {
    fill: var(--tl-background);
    stroke: var(--tl-selectStroke);
    stroke-width: 1.5px;
  }

  .tl-handle-bg {
    fill: transparent;
    stroke: none;
    pointer-events: all;
    r: calc(16px / max(1, var(--tl-zoom)));
  }

  .tl-binding-indicator {
    fill: transparent;
    stroke: var(--tl-binding);
  }

  .tl-centered-g {
    transform: translate(var(--tl-padding), var(--tl-padding));
  }

  .tl-current-parent > *[data-shy='true'] {
    opacity: 1;
  }

  .tl-binding {
    fill: none;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(2px * var(--tl-scale));
  }

  .tl-grid-dot {
    fill: var(--tl-grid);
  }
`;
function useTLTheme(theme, selector) {
  const tltheme = (0, import_react17.useMemo)(() => __spreadValues2(__spreadValues2({}, defaultTheme), theme), [theme]);
  useTheme("tl", tltheme, selector);
  useStyle("tl-canvas", tlcss);
}
function useBoundsHandleEvents(id) {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = (0, import_react18.useCallback)((e) => {
    var _a2, _b, _c;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    (_a2 = e.currentTarget) == null ? void 0 : _a2.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, id);
    (_b = callbacks.onPointBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e);
    (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerUp = (0, import_react18.useCallback)((e) => {
    var _a2, _b, _c, _d;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, id);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = e.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e);
    }
    (_c = callbacks.onReleaseBoundsHandle) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerMove = (0, import_react18.useCallback)((e) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = callbacks.onDragBoundsHandle) == null ? void 0 : _a2.call(callbacks, inputs2.pointerMove(e, id), e);
    }
    const info = inputs2.pointerMove(e, id);
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerEnter = (0, import_react18.useCallback)((e) => {
    var _a2;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a2 = callbacks.onHoverBoundsHandle) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e, id), e);
  }, [inputs2, callbacks, id]);
  const onPointerLeave = (0, import_react18.useCallback)((e) => {
    var _a2;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a2 = callbacks.onUnhoverBoundsHandle) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e, id), e);
  }, [inputs2, callbacks, id]);
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _2(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _3(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _4(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _5(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _6(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _7(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _8(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _9(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _10(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _11(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _12(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _13(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors = true ? niceErrors : {};
function die2(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function")
      e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal2 = {};
function getGlobal2() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal2;
}
var assign2 = Object.assign;
var getDescriptor2 = Object.getOwnPropertyDescriptor;
var defineProperty3 = Object.defineProperty;
var objectPrototype2 = Object.prototype;
var EMPTY_ARRAY2 = [];
Object.freeze(EMPTY_ARRAY2);
var EMPTY_OBJECT2 = {};
Object.freeze(EMPTY_OBJECT2);
var hasProxy2 = typeof Proxy !== "undefined";
var plainObjectString2 = /* @__PURE__ */ Object.toString();
function assertProxies2() {
  if (!hasProxy2) {
    die2(true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
  }
}
function warnAboutProxyRequirement(msg) {
  if (globalState2.verifyProxies) {
    die2("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState2.mobxGuid;
}
function once2(func) {
  var invoked = false;
  return function() {
    if (invoked)
      return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop4 = function noop22() {
};
function isFunction2(fn) {
  return typeof fn === "function";
}
function isStringish2(value) {
  var t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject2(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject2(value) {
  var _proto$constructor;
  if (!isObject2(value))
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null)
    return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString2;
}
function isGenerator2(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor)
    return false;
  if (constructor.name === "GeneratorFunction" || constructor.displayName === "GeneratorFunction")
    return true;
  return false;
}
function addHiddenProp2(object22, propName, value) {
  defineProperty3(object22, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp2(object22, propName, value) {
  defineProperty3(object22, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate2(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject2(x) && x[propName] === true;
  };
}
function isES6Map2(thing) {
  return thing instanceof Map;
}
function isES6Set2(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols2 = typeof Object.getOwnPropertySymbols !== "undefined";
function getPlainObjectKeys2(object22) {
  var keys = Object.keys(object22);
  if (!hasGetOwnPropertySymbols2)
    return keys;
  var symbols = Object.getOwnPropertySymbols(object22);
  if (!symbols.length)
    return keys;
  return [].concat(keys, symbols.filter(function(s) {
    return objectPrototype2.propertyIsEnumerable.call(object22, s);
  }));
}
var ownKeys4 = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols2 ? function(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string")
    return key;
  if (typeof key === "symbol")
    return key.toString();
  return new String(key).toString();
}
function toPrimitive2(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp2(target, prop) {
  return objectPrototype2.hasOwnProperty.call(target, prop);
}
var getOwnPropertyDescriptors3 = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors22(target) {
  var res = {};
  ownKeys4(target).forEach(function(key) {
    res[key] = getDescriptor2(target, key);
  });
  return res;
};
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _inheritsLoose2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
var storedAnnotationsSymbol2 = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function createDecoratorAnnotation2(annotation) {
  function decorator(target, property) {
    storeAnnotation2(target, property, annotation);
  }
  return Object.assign(decorator, annotation);
}
function storeAnnotation2(prototype, key, annotation) {
  if (!hasProp2(prototype, storedAnnotationsSymbol2)) {
    addHiddenProp2(prototype, storedAnnotationsSymbol2, _extends2({}, prototype[storedAnnotationsSymbol2]));
  }
  if (isOverride2(annotation) && !hasProp2(prototype[storedAnnotationsSymbol2], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die2("'" + fieldName + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  assertNotDecorated2(prototype, annotation, key);
  if (!isOverride2(annotation)) {
    prototype[storedAnnotationsSymbol2][key] = annotation;
  }
}
function assertNotDecorated2(prototype, annotation, key) {
  if (!isOverride2(annotation) && hasProp2(prototype[storedAnnotationsSymbol2], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol2][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die2("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed.\nUse '@override' decorator for methods overriden by subclass.");
  }
}
var $mobx2 = /* @__PURE__ */ Symbol("mobx administration");
var Atom2 = /* @__PURE__ */ function() {
  function Atom22(name_) {
    if (name_ === void 0) {
      name_ = true ? "Atom@" + getNextId() : "Atom";
    }
    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_2.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  }
  var _proto = Atom22.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved2(this);
  };
  _proto.reportChanged = function reportChanged() {
    startBatch2();
    propagateChanged2(this);
    endBatch2();
  };
  _proto.toString = function toString22() {
    return this.name_;
  };
  return Atom22;
}();
var isAtom2 = /* @__PURE__ */ createInstanceofPredicate2("Atom", Atom2);
function createAtom2(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop4;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop4;
  }
  var atom = new Atom2(name);
  if (onBecomeObservedHandler !== noop4) {
    onBecomeObserved2(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop4) {
    onBecomeUnobserved2(atom, onBecomeUnobservedHandler);
  }
  return atom;
}
function identityComparer2(a, b) {
  return a === b;
}
function structuralComparer2(a, b) {
  return deepEqual2(a, b);
}
function shallowComparer2(a, b) {
  return deepEqual2(a, b, 1);
}
function defaultComparer2(a, b) {
  if (Object.is)
    return Object.is(a, b);
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer2 = {
  identity: identityComparer2,
  structural: structuralComparer2,
  "default": defaultComparer2,
  shallow: shallowComparer2
};
function deepEnhancer2(v, _14, name) {
  if (isObservable2(v))
    return v;
  if (Array.isArray(v))
    return observable2.array(v, {
      name
    });
  if (isPlainObject2(v))
    return observable2.object(v, void 0, {
      name
    });
  if (isES6Map2(v))
    return observable2.map(v, {
      name
    });
  if (isES6Set2(v))
    return observable2.set(v, {
      name
    });
  if (typeof v === "function" && !isAction2(v) && !isFlow2(v)) {
    if (isGenerator2(v)) {
      return flow3(v);
    } else {
      return autoAction2(name, v);
    }
  }
  return v;
}
function shallowEnhancer2(v, _14, name) {
  if (v === void 0 || v === null)
    return v;
  if (isObservableObject2(v) || isObservableArray2(v) || isObservableMap2(v) || isObservableSet2(v))
    return v;
  if (Array.isArray(v))
    return observable2.array(v, {
      name,
      deep: false
    });
  if (isPlainObject2(v))
    return observable2.object(v, void 0, {
      name,
      deep: false
    });
  if (isES6Map2(v))
    return observable2.map(v, {
      name,
      deep: false
    });
  if (isES6Set2(v))
    return observable2.set(v, {
      name,
      deep: false
    });
  if (true)
    die2("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer2(newValue) {
  return newValue;
}
function refStructEnhancer2(v, oldValue) {
  if (isObservable2(v))
    die2("observable.struct should not be used with observable values");
  if (deepEqual2(v, oldValue))
    return oldValue;
  return v;
}
var OVERRIDE2 = "override";
function isOverride2(annotation) {
  return annotation.annotationType_ === OVERRIDE2;
}
function createActionAnnotation2(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$12,
    extend_: extend_$12
  };
}
function make_$12(adm, key, descriptor, source) {
  var _this$options_;
  if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (isAction2(descriptor.value)) {
    return 1;
  }
  var actionDescriptor = createActionDescriptor2(adm, this, key, descriptor, false);
  defineProperty3(source, key, actionDescriptor);
  return 2;
}
function extend_$12(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor2(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function assertActionDescriptor2(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if (!isFunction2(value)) {
    die2("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}
function createActionDescriptor2(adm, annotation, key, descriptor, safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState2.safeDescriptors;
  }
  assertActionDescriptor2(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction2((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, ((_annotation$options_4 = annotation.options_) == null ? void 0 : _annotation$options_4.bound) ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createFlowAnnotation2(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$22,
    extend_: extend_$22
  };
}
function make_$22(adm, key, descriptor, source) {
  var _this$options_;
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow2(adm.target_[key])) {
    if (this.extend_(adm, key, descriptor, false) === null)
      return 0;
  }
  if (isFlow2(descriptor.value)) {
    return 1;
  }
  var flowDescriptor = createFlowDescriptor2(adm, this, key, descriptor, false, false);
  defineProperty3(source, key, flowDescriptor);
  return 2;
}
function extend_$22(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor2(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function assertFlowDescriptor2(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if (!isFunction2(value)) {
    die2("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}
function createFlowDescriptor2(adm, annotation, key, descriptor, bound, safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState2.safeDescriptors;
  }
  assertFlowDescriptor2(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if (bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: flow3(value),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createComputedAnnotation2(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$32,
    extend_: extend_$32
  };
}
function make_$32(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$32(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor2(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends2({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function assertComputedDescriptor2(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get32 = _ref2.get;
  if (!get32) {
    die2("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}
function createObservableAnnotation2(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$42,
    extend_: extend_$42
  };
}
function make_$42(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$42(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor2(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer2, proxyTrap);
}
function assertObservableDescriptor2(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;
  if (!("value" in descriptor)) {
    die2("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}
var AUTO2 = "true";
var autoAnnotation2 = /* @__PURE__ */ createAutoAnnotation2();
function createAutoAnnotation2(options) {
  return {
    annotationType_: AUTO2,
    options_: options,
    make_: make_$52,
    extend_: extend_$52
  };
}
function make_$52(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  if (descriptor.get) {
    return computed3.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    var set42 = createAction2(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState2.safeDescriptors ? adm.isPlainObject_ : true,
        set: set42
      }) === null ? 0 : 2;
    }
    defineProperty3(source, key, {
      configurable: true,
      set: set42
    });
    return 2;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator2(descriptor.value)) {
      var _this$options_;
      var flowAnnotation22 = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow3.bound : flow3;
      return flowAnnotation22.make_(adm, key, descriptor, source);
    }
    var actionAnnotation22 = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction2.bound : autoAction2;
    return actionAnnotation22.make_(adm, key, descriptor, source);
  }
  var observableAnnotation22 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable2.ref : observable2;
  if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation22.make_(adm, key, descriptor, source);
}
function extend_$52(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  if (descriptor.get) {
    return computed3.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(key, {
      configurable: globalState2.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction2(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation22 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable2.ref : observable2;
  return observableAnnotation22.extend_(adm, key, descriptor, proxyTrap);
}
var OBSERVABLE2 = "observable";
var OBSERVABLE_REF2 = "observable.ref";
var OBSERVABLE_SHALLOW2 = "observable.shallow";
var OBSERVABLE_STRUCT2 = "observable.struct";
var defaultCreateObservableOptions2 = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions2);
function asCreateObservableOptions2(thing) {
  return thing || defaultCreateObservableOptions2;
}
var observableAnnotation2 = /* @__PURE__ */ createObservableAnnotation2(OBSERVABLE2);
var observableRefAnnotation2 = /* @__PURE__ */ createObservableAnnotation2(OBSERVABLE_REF2, {
  enhancer: referenceEnhancer2
});
var observableShallowAnnotation2 = /* @__PURE__ */ createObservableAnnotation2(OBSERVABLE_SHALLOW2, {
  enhancer: shallowEnhancer2
});
var observableStructAnnotation2 = /* @__PURE__ */ createObservableAnnotation2(OBSERVABLE_STRUCT2, {
  enhancer: refStructEnhancer2
});
var observableDecoratorAnnotation2 = /* @__PURE__ */ createDecoratorAnnotation2(observableAnnotation2);
function getEnhancerFromOptions2(options) {
  return options.deep === true ? deepEnhancer2 : options.deep === false ? referenceEnhancer2 : getEnhancerFromAnnotation2(options.defaultDecorator);
}
function getAnnotationFromOptions2(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation2(options) : void 0;
}
function getEnhancerFromAnnotation2(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer2 : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer2;
}
function createObservable2(v, arg2, arg3) {
  if (isStringish2(arg2)) {
    storeAnnotation2(v, arg2, observableAnnotation2);
    return;
  }
  if (isObservable2(v))
    return v;
  if (isPlainObject2(v))
    return observable2.object(v, arg2, arg3);
  if (Array.isArray(v))
    return observable2.array(v, arg2);
  if (isES6Map2(v))
    return observable2.map(v, arg2);
  if (isES6Set2(v))
    return observable2.set(v, arg2);
  if (typeof v === "object" && v !== null)
    return v;
  return observable2.box(v, arg2);
}
Object.assign(createObservable2, observableDecoratorAnnotation2);
var observableFactories2 = {
  box: function box2(value, options) {
    var o = asCreateObservableOptions2(options);
    return new ObservableValue2(value, getEnhancerFromOptions2(o), o.name, true, o.equals);
  },
  array: function array2(initialValues, options) {
    var o = asCreateObservableOptions2(options);
    return (globalState2.useProxies === false || o.proxy === false ? createLegacyArray2 : createObservableArray2)(initialValues, getEnhancerFromOptions2(o), o.name);
  },
  map: function map2(initialValues, options) {
    var o = asCreateObservableOptions2(options);
    return new ObservableMap2(initialValues, getEnhancerFromOptions2(o), o.name);
  },
  set: function set4(initialValues, options) {
    var o = asCreateObservableOptions2(options);
    return new ObservableSet2(initialValues, getEnhancerFromOptions2(o), o.name);
  },
  object: function object2(props, decorators, options) {
    return extendObservable2(globalState2.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject2({}, options) : asDynamicObservableObject2({}, options), props, decorators);
  },
  ref: /* @__PURE__ */ createDecoratorAnnotation2(observableRefAnnotation2),
  shallow: /* @__PURE__ */ createDecoratorAnnotation2(observableShallowAnnotation2),
  deep: observableDecoratorAnnotation2,
  struct: /* @__PURE__ */ createDecoratorAnnotation2(observableStructAnnotation2)
};
var observable2 = /* @__PURE__ */ assign2(createObservable2, observableFactories2);
var COMPUTED2 = "computed";
var COMPUTED_STRUCT2 = "computed.struct";
var computedAnnotation2 = /* @__PURE__ */ createComputedAnnotation2(COMPUTED2);
var computedStructAnnotation2 = /* @__PURE__ */ createComputedAnnotation2(COMPUTED_STRUCT2, {
  equals: comparer2.structural
});
var computed3 = function computed22(arg1, arg2) {
  if (isStringish2(arg2)) {
    return storeAnnotation2(arg1, arg2, computedAnnotation2);
  }
  if (isPlainObject2(arg1)) {
    return createDecoratorAnnotation2(createComputedAnnotation2(COMPUTED2, arg1));
  }
  if (true) {
    if (!isFunction2(arg1))
      die2("First argument to `computed` should be an expression.");
    if (isFunction2(arg2))
      die2("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
  }
  var opts = isPlainObject2(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  return new ComputedValue2(opts);
};
Object.assign(computed3, computedAnnotation2);
computed3.struct = /* @__PURE__ */ createDecoratorAnnotation2(computedStructAnnotation2);
var _getDescriptor$config2;
var _getDescriptor2;
var currentActionId2 = 0;
var nextActionId2 = 1;
var isFunctionNameConfigurable2 = (_getDescriptor$config2 = (_getDescriptor2 = /* @__PURE__ */ getDescriptor2(function() {
}, "name")) == null ? void 0 : _getDescriptor2.configurable) != null ? _getDescriptor$config2 : false;
var tmpNameDescriptor2 = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction2(actionName, fn, autoAction22, ref) {
  if (autoAction22 === void 0) {
    autoAction22 = false;
  }
  if (true) {
    if (!isFunction2(fn))
      die2("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName)
      die2("actions should have valid names, got: '" + actionName + "'");
  }
  function res() {
    return executeAction2(actionName, autoAction22, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  if (isFunctionNameConfigurable2) {
    tmpNameDescriptor2.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor2);
  }
  return res;
}
function executeAction2(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction2(actionName, canRunAsDerivation, scope, args);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction2(runInfo);
  }
}
function _startAction2(actionName, canRunAsDerivation, scope, args) {
  var notifySpy_ = isSpyEnabled2() && !!actionName;
  var startTime_ = 0;
  if (notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY2;
    spyReportStart({
      type: ACTION2,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }
  var prevDerivation_ = globalState2.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch2();
  var prevAllowStateChanges_ = globalState2.allowStateChanges;
  if (runAsAction) {
    untrackedStart2();
    prevAllowStateChanges_ = allowStateChangesStart2(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart2(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId2++,
    parentActionId_: currentActionId2
  };
  currentActionId2 = runInfo.actionId_;
  return runInfo;
}
function _endAction2(runInfo) {
  if (currentActionId2 !== runInfo.actionId_) {
    die2(30);
  }
  currentActionId2 = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState2.suppressReactionErrors = true;
  }
  allowStateChangesEnd2(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd2(runInfo.prevAllowStateReads_);
  endBatch2();
  if (runInfo.runAsAction_)
    untrackedEnd2(runInfo.prevDerivation_);
  if (runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }
  globalState2.suppressReactionErrors = false;
}
function allowStateChangesStart2(allowStateChanges) {
  var prev = globalState2.allowStateChanges;
  globalState2.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd2(prev) {
  globalState2.allowStateChanges = prev;
}
var _Symbol$toPrimitive2;
var CREATE = "create";
_Symbol$toPrimitive2 = Symbol.toPrimitive;
var ObservableValue2 = /* @__PURE__ */ function(_Atom) {
  _inheritsLoose2(ObservableValue22, _Atom);
  function ObservableValue22(value, enhancer, name_, notifySpy, equals) {
    var _this;
    if (name_ === void 0) {
      name_ = true ? "ObservableValue@" + getNextId() : "ObservableValue";
    }
    if (notifySpy === void 0) {
      notifySpy = true;
    }
    if (equals === void 0) {
      equals = comparer2["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, void 0, name_);
    if (notifySpy && isSpyEnabled2()) {
      spyReport({
        type: CREATE,
        object: _assertThisInitialized2(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }
    return _this;
  }
  var _proto = ObservableValue22.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== void 0)
      return this.dehancer(value);
    return value;
  };
  _proto.set = function set42(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState2.UNCHANGED) {
      var notifySpy = isSpyEnabled2();
      if (notifySpy) {
        spyReportStart({
          type: UPDATE2,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue,
          oldValue
        });
      }
      this.setNewValue_(newValue);
      if (notifySpy)
        spyReportEnd();
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed2(this);
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        object: this,
        type: UPDATE2,
        newValue
      });
      if (!change)
        return globalState2.UNCHANGED;
      newValue = change.newValue;
    }
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState2.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners2(this)) {
      notifyListeners2(this, {
        type: UPDATE2,
        object: this,
        newValue,
        oldValue
      });
    }
  };
  _proto.get = function get32() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor2(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately)
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE2,
        newValue: this.value_,
        oldValue: void 0
      });
    return registerListener2(this, listener);
  };
  _proto.raw = function raw() {
    return this.value_;
  };
  _proto.toJSON = function toJSON22() {
    return this.get();
  };
  _proto.toString = function toString22() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive2(this.get());
  };
  _proto[_Symbol$toPrimitive2] = function() {
    return this.valueOf();
  };
  return ObservableValue22;
}(Atom2);
var _Symbol$toPrimitive$12;
_Symbol$toPrimitive$12 = Symbol.toPrimitive;
var ComputedValue2 = /* @__PURE__ */ function() {
  function ComputedValue22(options) {
    this.dependenciesState_ = IDerivationState_2.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_2.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException3(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode2.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get)
      die2(31);
    this.derivation = options.get;
    this.name_ = options.name || (true ? "ComputedValue@" + getNextId() : "ComputedValue");
    if (options.set) {
      this.setter_ = createAction2(true ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer2.structural : comparer2["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue22.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged2(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.get = function get32() {
    if (this.isComputing_)
      die2(32, this.name_, this.derivation);
    if (globalState2.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute2(this)) {
        this.warnAboutUntrackedRead_();
        startBatch2();
        this.value_ = this.computeValue_(false);
        endBatch2();
      }
    } else {
      reportObserved2(this);
      if (shouldCompute2(this)) {
        var prevTrackingContext = globalState2.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext)
          globalState2.trackingContext = this;
        if (this.trackAndCompute())
          propagateChangeConfirmed2(this);
        globalState2.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException2(result))
      throw result.cause;
    return result;
  };
  _proto.set = function set42(value) {
    if (this.setter_) {
      if (this.isRunningSetter_)
        die2(33, this.name_);
      this.isRunningSetter_ = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else
      die2(34, this.name_);
  };
  _proto.trackAndCompute = function trackAndCompute() {
    var oldValue = this.value_;
    var wasSuspended = this.dependenciesState_ === IDerivationState_2.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException2(oldValue) || isCaughtException2(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
      if (isSpyEnabled2()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue,
          newValue
        });
      }
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true;
    var prev = allowStateChangesStart2(false);
    var res;
    if (track) {
      res = trackDerivedFunction2(this, this.derivation, this.scope_);
    } else {
      if (globalState2.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException3(e);
        }
      }
    }
    allowStateChangesEnd2(prev);
    this.isComputing_ = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving2(this);
      this.value_ = void 0;
      if (this.isTracing_ !== TraceMode2.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
      }
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = void 0;
    return autorun2(function() {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart2();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE2,
          object: _this,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd2(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false)
      return;
    if (this.isTracing_ !== TraceMode2.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
    if (globalState2.computedRequiresReaction || this.requiresReaction_) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };
  _proto.toString = function toString22() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive2(this.get());
  };
  _proto[_Symbol$toPrimitive$12] = function() {
    return this.valueOf();
  };
  return ComputedValue22;
}();
var isComputedValue2 = /* @__PURE__ */ createInstanceofPredicate2("ComputedValue", ComputedValue2);
var IDerivationState_2;
(function(IDerivationState_22) {
  IDerivationState_22[IDerivationState_22["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_22[IDerivationState_22["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_22[IDerivationState_22["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_22[IDerivationState_22["STALE_"] = 2] = "STALE_";
})(IDerivationState_2 || (IDerivationState_2 = {}));
var TraceMode2;
(function(TraceMode22) {
  TraceMode22[TraceMode22["NONE"] = 0] = "NONE";
  TraceMode22[TraceMode22["LOG"] = 1] = "LOG";
  TraceMode22[TraceMode22["BREAK"] = 2] = "BREAK";
})(TraceMode2 || (TraceMode2 = {}));
var CaughtException3 = function CaughtException22(cause) {
  this.cause = void 0;
  this.cause = cause;
};
function isCaughtException2(e) {
  return e instanceof CaughtException3;
}
function shouldCompute2(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_2.UP_TO_DATE_:
      return false;
    case IDerivationState_2.NOT_TRACKING_:
    case IDerivationState_2.STALE_:
      return true;
    case IDerivationState_2.POSSIBLY_STALE_: {
      var prevAllowStateReads = allowStateReadsStart2(true);
      var prevUntracked = untrackedStart2();
      var obs = derivation.observing_, l = obs.length;
      for (var i = 0; i < l; i++) {
        var obj = obs[i];
        if (isComputedValue2(obj)) {
          if (globalState2.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e) {
              untrackedEnd2(prevUntracked);
              allowStateReadsEnd2(prevAllowStateReads);
              return true;
            }
          }
          if (derivation.dependenciesState_ === IDerivationState_2.STALE_) {
            untrackedEnd2(prevUntracked);
            allowStateReadsEnd2(prevAllowStateReads);
            return true;
          }
        }
      }
      changeDependenciesStateTo02(derivation);
      untrackedEnd2(prevUntracked);
      allowStateReadsEnd2(prevAllowStateReads);
      return false;
    }
  }
}
function checkIfStateModificationsAreAllowed2(atom) {
  if (false) {
    return;
  }
  var hasObservers = atom.observers_.size > 0;
  if (!globalState2.allowStateChanges && (hasObservers || globalState2.enforceActions === "always"))
    console.warn("[MobX] " + (globalState2.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed2(observable22) {
  if (!globalState2.allowStateReads && globalState2.observableRequiresReaction) {
    console.warn("[mobx] Observable '" + observable22.name_ + "' being read outside a reactive context.");
  }
}
function trackDerivedFunction2(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart2(true);
  changeDependenciesStateTo02(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState2.runId;
  var prevTracking = globalState2.trackingDerivation;
  globalState2.trackingDerivation = derivation;
  globalState2.inBatch++;
  var result;
  if (globalState2.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException3(e);
    }
  }
  globalState2.inBatch--;
  globalState2.trackingDerivation = prevTracking;
  bindDependencies2(derivation);
  warnAboutDerivationWithoutDependencies2(derivation);
  allowStateReadsEnd2(prevAllowStateReads);
  return result;
}
function warnAboutDerivationWithoutDependencies2(derivation) {
  if (false)
    return;
  if (derivation.observing_.length !== 0)
    return;
  if (globalState2.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
function bindDependencies2(derivation) {
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_2.UP_TO_DATE_;
  var i0 = 0, l = derivation.unboundDepsCount_;
  for (var i = 0; i < l; i++) {
    var dep = observing[i];
    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i)
        observing[i0] = dep;
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l = prevObserving.length;
  while (l--) {
    var _dep = prevObserving[l];
    if (_dep.diffValue_ === 0) {
      removeObserver2(_dep, derivation);
    }
    _dep.diffValue_ = 0;
  }
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver2(_dep2, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== IDerivationState_2.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving2(derivation) {
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;
  while (i--) {
    removeObserver2(obs[i], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_2.NOT_TRACKING_;
}
function untracked2(action22) {
  var prev = untrackedStart2();
  try {
    return action22();
  } finally {
    untrackedEnd2(prev);
  }
}
function untrackedStart2() {
  var prev = globalState2.trackingDerivation;
  globalState2.trackingDerivation = null;
  return prev;
}
function untrackedEnd2(prev) {
  globalState2.trackingDerivation = prev;
}
function allowStateReadsStart2(allowStateReads) {
  var prev = globalState2.allowStateReads;
  globalState2.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd2(prev) {
  globalState2.allowStateReads = prev;
}
function changeDependenciesStateTo02(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_2.UP_TO_DATE_)
    return;
  derivation.dependenciesState_ = IDerivationState_2.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;
  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_2.UP_TO_DATE_;
  }
}
var MobXGlobals3 = function MobXGlobals22() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState2 = true;
var isolateCalled2 = false;
var globalState2 = /* @__PURE__ */ function() {
  var global2 = /* @__PURE__ */ getGlobal2();
  if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals)
    canMergeGlobalState2 = false;
  if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals3().version)
    canMergeGlobalState2 = false;
  if (!canMergeGlobalState2) {
    setTimeout(function() {
      if (!isolateCalled2) {
        die2(35);
      }
    }, 1);
    return new MobXGlobals3();
  } else if (global2.__mobxGlobals) {
    global2.__mobxInstanceCount += 1;
    if (!global2.__mobxGlobals.UNCHANGED)
      global2.__mobxGlobals.UNCHANGED = {};
    return global2.__mobxGlobals;
  } else {
    global2.__mobxInstanceCount = 1;
    return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals3();
  }
}();
function addObserver2(observable22, node) {
  observable22.observers_.add(node);
  if (observable22.lowestObserverState_ > node.dependenciesState_)
    observable22.lowestObserverState_ = node.dependenciesState_;
}
function removeObserver2(observable22, node) {
  observable22.observers_["delete"](node);
  if (observable22.observers_.size === 0) {
    queueForUnobservation2(observable22);
  }
}
function queueForUnobservation2(observable22) {
  if (observable22.isPendingUnobservation_ === false) {
    observable22.isPendingUnobservation_ = true;
    globalState2.pendingUnobservations.push(observable22);
  }
}
function startBatch2() {
  globalState2.inBatch++;
}
function endBatch2() {
  if (--globalState2.inBatch === 0) {
    runReactions2();
    var list = globalState2.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable22 = list[i];
      observable22.isPendingUnobservation_ = false;
      if (observable22.observers_.size === 0) {
        if (observable22.isBeingObserved_) {
          observable22.isBeingObserved_ = false;
          observable22.onBUO();
        }
        if (observable22 instanceof ComputedValue2) {
          observable22.suspend_();
        }
      }
    }
    globalState2.pendingUnobservations = [];
  }
}
function reportObserved2(observable22) {
  checkIfStateReadsAreAllowed2(observable22);
  var derivation = globalState2.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable22.lastAccessedBy_) {
      observable22.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable22;
      if (!observable22.isBeingObserved_ && globalState2.trackingContext) {
        observable22.isBeingObserved_ = true;
        observable22.onBO();
      }
    }
    return true;
  } else if (observable22.observers_.size === 0 && globalState2.inBatch > 0) {
    queueForUnobservation2(observable22);
  }
  return false;
}
function propagateChanged2(observable22) {
  if (observable22.lowestObserverState_ === IDerivationState_2.STALE_)
    return;
  observable22.lowestObserverState_ = IDerivationState_2.STALE_;
  observable22.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_2.UP_TO_DATE_) {
      if (d.isTracing_ !== TraceMode2.NONE) {
        logTraceInfo(d, observable22);
      }
      d.onBecomeStale_();
    }
    d.dependenciesState_ = IDerivationState_2.STALE_;
  });
}
function propagateChangeConfirmed2(observable22) {
  if (observable22.lowestObserverState_ === IDerivationState_2.STALE_)
    return;
  observable22.lowestObserverState_ = IDerivationState_2.STALE_;
  observable22.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_2.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_2.STALE_;
      if (d.isTracing_ !== TraceMode2.NONE) {
        logTraceInfo(d, observable22);
      }
    } else if (d.dependenciesState_ === IDerivationState_2.UP_TO_DATE_) {
      observable22.lowestObserverState_ = IDerivationState_2.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged2(observable22) {
  if (observable22.lowestObserverState_ !== IDerivationState_2.UP_TO_DATE_)
    return;
  observable22.lowestObserverState_ = IDerivationState_2.POSSIBLY_STALE_;
  observable22.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_2.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_2.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  });
}
function logTraceInfo(derivation, observable22) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable22.name_ + "'");
  if (derivation.isTracing_ === TraceMode2.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree2(derivation), lines, 1);
    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable22.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue2 ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}
function printDepTree(tree, lines, depth) {
  if (lines.length >= 1e3) {
    lines.push("(and many more)");
    return;
  }
  lines.push("" + "	".repeat(depth - 1) + tree.name);
  if (tree.dependencies)
    tree.dependencies.forEach(function(child) {
      return printDepTree(child, lines, depth + 1);
    });
}
var Reaction2 = /* @__PURE__ */ function() {
  function Reaction22(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = true ? "Reaction@" + getNextId() : "Reaction";
    }
    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_2.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode2.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction22.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState2.pendingReactions.push(this);
      runReactions2();
    }
  };
  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  };
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch2();
      this.isScheduled_ = false;
      var prev = globalState2.trackingContext;
      globalState2.trackingContext = this;
      if (shouldCompute2(this)) {
        this.isTrackPending_ = true;
        try {
          this.onInvalidate_();
          if (this.isTrackPending_ && isSpyEnabled2()) {
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }
      globalState2.trackingContext = prev;
      endBatch2();
    }
  };
  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return;
    }
    startBatch2();
    var notify = isSpyEnabled2();
    var startTime;
    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }
    this.isRunning_ = true;
    var prevReaction = globalState2.trackingContext;
    globalState2.trackingContext = this;
    var result = trackDerivedFunction2(this, fn, void 0);
    globalState2.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;
    if (this.isDisposed_) {
      clearObserving2(this);
    }
    if (isCaughtException2(result))
      this.reportExceptionInDerivation_(result.cause);
    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch2();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState2.disableErrorBoundaries)
      throw error;
    var message = true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    if (!globalState2.suppressReactionErrors) {
      console.error(message, error);
    } else if (true)
      console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
    if (isSpyEnabled2()) {
      spyReport({
        type: "error",
        name: this.name_,
        message,
        error: "" + error
      });
    }
    globalState2.globalReactionErrorHandlers.forEach(function(f) {
      return f(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;
      if (!this.isRunning_) {
        startBatch2();
        clearObserving2(this);
        endBatch2();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx2] = this;
    return r;
  };
  _proto.toString = function toString22() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }
    trace2(this, enterBreakPoint);
  };
  return Reaction22;
}();
var MAX_REACTION_ITERATIONS2 = 100;
var reactionScheduler3 = function reactionScheduler22(f) {
  return f();
};
function runReactions2() {
  if (globalState2.inBatch > 0 || globalState2.isRunningReactions)
    return;
  reactionScheduler3(runReactionsHelper2);
}
function runReactionsHelper2() {
  globalState2.isRunningReactions = true;
  var allReactions = globalState2.pendingReactions;
  var iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS2) {
      console.error(true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS2 + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0);
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }
  globalState2.isRunningReactions = false;
}
var isReaction2 = /* @__PURE__ */ createInstanceofPredicate2("Reaction", Reaction2);
function isSpyEnabled2() {
  return !!globalState2.spyListeners.length;
}
function spyReport(event) {
  if (false)
    return;
  if (!globalState2.spyListeners.length)
    return;
  var listeners = globalState2.spyListeners;
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false)
    return;
  var change = _extends2({}, event, {
    spyReportStart: true
  });
  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false)
    return;
  if (change)
    spyReport(_extends2({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));
  else
    spyReport(END_EVENT);
}
function spy2(listener) {
  if (false) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  } else {
    globalState2.spyListeners.push(listener);
    return once2(function() {
      globalState2.spyListeners = globalState2.spyListeners.filter(function(l) {
        return l !== listener;
      });
    });
  }
}
var ACTION2 = "action";
var ACTION_BOUND2 = "action.bound";
var AUTOACTION2 = "autoAction";
var AUTOACTION_BOUND2 = "autoAction.bound";
var DEFAULT_ACTION_NAME2 = "<unnamed action>";
var actionAnnotation2 = /* @__PURE__ */ createActionAnnotation2(ACTION2);
var actionBoundAnnotation2 = /* @__PURE__ */ createActionAnnotation2(ACTION_BOUND2, {
  bound: true
});
var autoActionAnnotation2 = /* @__PURE__ */ createActionAnnotation2(AUTOACTION2, {
  autoAction: true
});
var autoActionBoundAnnotation2 = /* @__PURE__ */ createActionAnnotation2(AUTOACTION_BOUND2, {
  autoAction: true,
  bound: true
});
function createActionFactory2(autoAction22) {
  var res = function action22(arg1, arg2) {
    if (isFunction2(arg1))
      return createAction2(arg1.name || DEFAULT_ACTION_NAME2, arg1, autoAction22);
    if (isFunction2(arg2))
      return createAction2(arg1, arg2, autoAction22);
    if (isStringish2(arg2)) {
      return storeAnnotation2(arg1, arg2, autoAction22 ? autoActionAnnotation2 : actionAnnotation2);
    }
    if (isStringish2(arg1)) {
      return createDecoratorAnnotation2(createActionAnnotation2(autoAction22 ? AUTOACTION2 : ACTION2, {
        name: arg1,
        autoAction: autoAction22
      }));
    }
    if (true)
      die2("Invalid arguments for `action`");
  };
  return res;
}
var action2 = /* @__PURE__ */ createActionFactory2(false);
Object.assign(action2, actionAnnotation2);
var autoAction2 = /* @__PURE__ */ createActionFactory2(true);
Object.assign(autoAction2, autoActionAnnotation2);
action2.bound = /* @__PURE__ */ createDecoratorAnnotation2(actionBoundAnnotation2);
autoAction2.bound = /* @__PURE__ */ createDecoratorAnnotation2(autoActionBoundAnnotation2);
function isAction2(thing) {
  return isFunction2(thing) && thing.isMobxAction === true;
}
function autorun2(view, opts) {
  var _opts$name, _opts;
  if (opts === void 0) {
    opts = EMPTY_OBJECT2;
  }
  if (true) {
    if (!isFunction2(view))
      die2("Autorun expects a function as first argument");
    if (isAction2(view))
      die2("Autorun does not accept actions since actions are untrackable");
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : true ? view.name || "Autorun@" + getNextId() : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    reaction = new Reaction2(name, function() {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions2(opts);
    var isScheduled = false;
    reaction = new Reaction2(name, function() {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function() {
          isScheduled = false;
          if (!reaction.isDisposed_)
            reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction);
  }
  reaction.schedule_();
  return reaction.getDisposer_();
}
var run3 = function run22(f) {
  return f();
};
function createSchedulerFromOptions2(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
    return setTimeout(f, opts.delay);
  } : run3;
}
var ON_BECOME_OBSERVED2 = "onBO";
var ON_BECOME_UNOBSERVED2 = "onBUO";
function onBecomeObserved2(thing, arg2, arg3) {
  return interceptHook2(ON_BECOME_OBSERVED2, thing, arg2, arg3);
}
function onBecomeUnobserved2(thing, arg2, arg3) {
  return interceptHook2(ON_BECOME_UNOBSERVED2, thing, arg2, arg3);
}
function interceptHook2(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom2(thing, arg2) : getAtom2(thing);
  var cb = isFunction2(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }
  return function() {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
function extendObservable2(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4)
      die2("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object")
      die2("'extendObservable' expects an object as first argument");
    if (isObservableMap2(target))
      die2("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject2(properties))
      die2("'extendObservable' only accepts plain objects as second argument");
    if (isObservable2(properties) || isObservable2(annotations))
      die2("Extending an object with another observable (object) is not supported");
  }
  var descriptors = getOwnPropertyDescriptors3(properties);
  var adm = asObservableObject2(target, options)[$mobx2];
  startBatch2();
  try {
    ownKeys4(descriptors).forEach(function(key) {
      adm.extend_(key, descriptors[key], !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch2();
  }
  return target;
}
function getDependencyTree2(thing, property) {
  return nodeToDependencyTree2(getAtom2(thing, property));
}
function nodeToDependencyTree2(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0)
    result.dependencies = unique2(node.observing_).map(nodeToDependencyTree2);
  return result;
}
function unique2(list) {
  return Array.from(new Set(list));
}
var generatorId2 = 0;
function FlowCancellationError2() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var flowAnnotation2 = /* @__PURE__ */ createFlowAnnotation2("flow");
var flowBoundAnnotation2 = /* @__PURE__ */ createFlowAnnotation2("flow.bound", {
  bound: true
});
var flow3 = /* @__PURE__ */ Object.assign(function flow22(arg1, arg2) {
  if (isStringish2(arg2)) {
    return storeAnnotation2(arg1, arg2, flowAnnotation2);
  }
  if (arguments.length !== 1)
    die2("Flow expects single argument with generator function");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  var res = function res2() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId2;
    var gen = action2(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = void 0;
    var promise = new Promise(function(resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res3) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action2(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action2(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction2(ret == null ? void 0 : ret.then)) {
          ret.then(next, reject);
          return;
        }
        if (ret.done)
          return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(void 0);
    });
    promise.cancel = action2(name + " - runid: " + runId + " - cancel", function() {
      try {
        if (pendingPromise)
          cancelPromise2(pendingPromise);
        var _res = gen["return"](void 0);
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop4, noop4);
        cancelPromise2(yieldedPromise);
        rejector(new FlowCancellationError2());
      } catch (e) {
        rejector(e);
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation2);
flow3.bound = /* @__PURE__ */ createDecoratorAnnotation2(flowBoundAnnotation2);
function cancelPromise2(promise) {
  if (isFunction2(promise.cancel))
    promise.cancel();
}
function isFlow2(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function _isObservable2(value, property) {
  if (!value)
    return false;
  if (property !== void 0) {
    if (isObservableMap2(value) || isObservableArray2(value))
      return die2("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
    if (isObservableObject2(value)) {
      return value[$mobx2].values_.has(property);
    }
    return false;
  }
  return isObservableObject2(value) || !!value[$mobx2] || isAtom2(value) || isReaction2(value) || isComputedValue2(value);
}
function isObservable2(value) {
  if (arguments.length !== 1)
    die2("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable2(value);
}
function trace2() {
  if (false)
    die2("trace() is not available in production builds");
  var enterBreakPoint = false;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof args[args.length - 1] === "boolean")
    enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs2(args);
  if (!derivation) {
    return die2("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }
  if (derivation.isTracing_ === TraceMode2.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }
  derivation.isTracing_ = enterBreakPoint ? TraceMode2.BREAK : TraceMode2.LOG;
}
function getAtomFromArgs2(args) {
  switch (args.length) {
    case 0:
      return globalState2.trackingDerivation;
    case 1:
      return getAtom2(args[0]);
    case 2:
      return getAtom2(args[0], args[1]);
  }
}
function transaction2(action22, thisArg) {
  if (thisArg === void 0) {
    thisArg = void 0;
  }
  startBatch2();
  try {
    return action22.apply(thisArg);
  } finally {
    endBatch2();
  }
}
function getAdm2(target) {
  return target[$mobx2];
}
var objectProxyTraps2 = {
  has: function has2(target, name) {
    if (globalState2.trackingDerivation)
      warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    return getAdm2(target).has_(name);
  },
  get: function get3(target, name) {
    return getAdm2(target).get_(name);
  },
  set: function set22(target, name, value) {
    var _getAdm$set_;
    if (!isStringish2(name))
      return false;
    if (!getAdm2(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    }
    return (_getAdm$set_ = getAdm2(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty2(target, name) {
    var _getAdm$delete_;
    if (true) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }
    if (!isStringish2(name))
      return false;
    return (_getAdm$delete_ = getAdm2(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty22(target, name, descriptor) {
    var _getAdm$definePropert;
    if (true) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    }
    return (_getAdm$definePropert = getAdm2(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys22(target) {
    if (globalState2.trackingDerivation)
      warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    return getAdm2(target).ownKeys_();
  },
  preventExtensions: function preventExtensions3(target) {
    die2(13);
  }
};
function asDynamicObservableObject2(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies2();
  target = asObservableObject2(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx2]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps2);
}
function hasInterceptors2(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function registerInterceptor2(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once2(function() {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1)
      interceptors.splice(idx, 1);
  });
}
function interceptChange2(interceptable, change) {
  var prevU = untrackedStart2();
  try {
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type)
        die2(14);
      if (!change)
        break;
    }
    return change;
  } finally {
    untrackedEnd2(prevU);
  }
}
function hasListeners2(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener2(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once2(function() {
    var idx = listeners.indexOf(handler);
    if (idx !== -1)
      listeners.splice(idx, 1);
  });
}
function notifyListeners2(listenable, change) {
  var prevU = untrackedStart2();
  var listeners = listenable.changeListeners_;
  if (!listeners)
    return;
  listeners = listeners.slice();
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd2(prevU);
}
var SPLICE2 = "splice";
var UPDATE2 = "update";
var MAX_SPLICE_SIZE2 = 1e4;
var arrayTraps2 = {
  get: function get22(target, name) {
    var adm = target[$mobx2];
    if (name === $mobx2)
      return adm;
    if (name === "length")
      return adm.getArrayLength_();
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp2(arrayExtensions2, name)) {
      return arrayExtensions2[name];
    }
    return target[name];
  },
  set: function set32(target, name, value) {
    var adm = target[$mobx2];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions22() {
    die2(15);
  }
};
var ObservableArrayAdministration2 = /* @__PURE__ */ function() {
  function ObservableArrayAdministration22(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom2(name);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, true ? name + "[..]" : "ObservableArray[..]");
    };
  }
  var _proto = ObservableArrayAdministration22.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0)
      return this.dehancer(value);
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== void 0 && values.length > 0)
      return values.map(this.dehancer);
    return values;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor2(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener2(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0)
      die2("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength)
      return;
    else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = void 0;
      }
      this.spliceWithArray_(currentLength, 0, newItems);
    } else
      this.spliceWithArray_(newLength, currentLength - newLength);
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_)
      die2(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0)
      reserveArrayBuffer2(oldLength + delta + 1);
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed2(this.atom_);
    var length = this.values_.length;
    if (index === void 0)
      index = 0;
    else if (index > length)
      index = length;
    else if (index < 0)
      index = Math.max(0, length + index);
    if (arguments.length === 1)
      deleteCount = length - index;
    else if (deleteCount === void 0 || deleteCount === null)
      deleteCount = 0;
    else
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === void 0)
      newItems = EMPTY_ARRAY2;
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        object: this.proxy_,
        type: SPLICE2,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change)
        return EMPTY_ARRAY2;
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
      return _this.enhancer_(v, void 0);
    });
    if (this.legacyMode_ || true) {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0)
      this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE2) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled2();
    var notify = hasListeners2(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE2,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    if (notifySpy)
      spyReportStart(change);
    this.atom_.reportChanged();
    if (notify)
      notifyListeners2(this, change);
    if (notifySpy)
      spyReportEnd();
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled2();
    var notify = hasListeners2(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE2,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy)
      spyReportStart(change);
    this.atom_.reportChanged();
    if (notify)
      notifyListeners2(this, change);
    if (notifySpy)
      spyReportEnd();
  };
  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }
    console.warn(true ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };
  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;
    if (index < values.length) {
      checkIfStateModificationsAreAllowed2(this.atom_);
      var oldValue = values[index];
      if (hasInterceptors2(this)) {
        var change = interceptChange2(this, {
          type: UPDATE2,
          object: this.proxy_,
          index,
          newValue
        });
        if (!change)
          return;
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      die2(17, index, values.length);
    }
  };
  return ObservableArrayAdministration22;
}();
function createObservableArray2(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies2();
  var adm = new ObservableArrayAdministration2(name, enhancer, owned, false);
  addHiddenFinalProp2(adm.values_, $mobx2, adm);
  var proxy = new Proxy(adm.values_, arrayTraps2);
  adm.proxy_ = proxy;
  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart2(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd2(prev);
  }
  return proxy;
}
var arrayExtensions2 = {
  clear: function clear2() {
    return this.splice(0);
  },
  replace: function replace2(newItems) {
    var adm = this[$mobx2];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  toJSON: function toJSON2() {
    return this.slice();
  },
  splice: function splice2(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx2];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray2(index, deleteCount, newItems) {
    return this[$mobx2].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push2() {
    var adm = this[$mobx2];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop2() {
    return this.splice(Math.max(this[$mobx2].values_.length - 1, 0), 1)[0];
  },
  shift: function shift2() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift2() {
    var adm = this[$mobx2];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse2() {
    if (globalState2.trackingDerivation) {
      die2(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort2() {
    if (globalState2.trackingDerivation) {
      die2(37, "sort");
    }
    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove2(value) {
    var adm = this[$mobx2];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension2("concat", simpleFunc2);
addArrayExtension2("flat", simpleFunc2);
addArrayExtension2("includes", simpleFunc2);
addArrayExtension2("indexOf", simpleFunc2);
addArrayExtension2("join", simpleFunc2);
addArrayExtension2("lastIndexOf", simpleFunc2);
addArrayExtension2("slice", simpleFunc2);
addArrayExtension2("toString", simpleFunc2);
addArrayExtension2("toLocaleString", simpleFunc2);
addArrayExtension2("every", mapLikeFunc2);
addArrayExtension2("filter", mapLikeFunc2);
addArrayExtension2("find", mapLikeFunc2);
addArrayExtension2("findIndex", mapLikeFunc2);
addArrayExtension2("flatMap", mapLikeFunc2);
addArrayExtension2("forEach", mapLikeFunc2);
addArrayExtension2("map", mapLikeFunc2);
addArrayExtension2("some", mapLikeFunc2);
addArrayExtension2("reduce", reduceLikeFunc2);
addArrayExtension2("reduceRight", reduceLikeFunc2);
function addArrayExtension2(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions2[funcName] = funcFactory(funcName);
  }
}
function simpleFunc2(funcName) {
  return function() {
    var adm = this[$mobx2];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc2(funcName) {
  return function(callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx2];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function(element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
function reduceLikeFunc2(funcName) {
  return function() {
    var _this3 = this;
    var adm = this[$mobx2];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    var callback = arguments[0];
    arguments[0] = function(accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration2 = /* @__PURE__ */ createInstanceofPredicate2("ObservableArrayAdministration", ObservableArrayAdministration2);
function isObservableArray2(thing) {
  return isObject2(thing) && isObservableArrayAdministration2(thing[$mobx2]);
}
var _Symbol$iterator2;
var _Symbol$toStringTag2;
var ObservableMapMarker2 = {};
var ADD2 = "add";
var DELETE2 = "delete";
_Symbol$iterator2 = Symbol.iterator;
_Symbol$toStringTag2 = Symbol.toStringTag;
var ObservableMap2 = /* @__PURE__ */ function() {
  function ObservableMap22(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer2;
    }
    if (name_ === void 0) {
      name_ = true ? "ObservableMap@" + getNextId() : "ObservableMap";
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx2] = ObservableMapMarker2;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction2(Map)) {
      die2(18);
    }
    this.keysAtom_ = createAtom2(true ? this.name_ + ".keys()" : "ObservableMap.keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }
  var _proto = ObservableMap22.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has22(key) {
    var _this = this;
    if (!globalState2.trackingDerivation)
      return this.has_(key);
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue2(this.has_(key), referenceEnhancer2, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved2(newEntry, function() {
        return _this.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set42(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        type: hasKey ? UPDATE2 : ADD2,
        object: this,
        newValue: value,
        name: key
      });
      if (!change)
        return this;
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this2 = this;
    checkIfStateModificationsAreAllowed2(this.keysAtom_);
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        type: DELETE2,
        object: this,
        name: key
      });
      if (!change)
        return false;
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled2();
      var notify = hasListeners2(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE2,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      if (notifySpy)
        spyReportStart(_change);
      transaction2(function() {
        var _this2$hasMap_$get;
        _this2.keysAtom_.reportChanged();
        (_this2$hasMap_$get = _this2.hasMap_.get(key)) == null ? void 0 : _this2$hasMap_$get.setNewValue_(false);
        var observable22 = _this2.data_.get(key);
        observable22.setNewValue_(void 0);
        _this2.data_["delete"](key);
      });
      if (notify)
        notifyListeners2(this, _change);
      if (notifySpy)
        spyReportEnd();
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable22 = this.data_.get(key);
    newValue = observable22.prepareNewValue_(newValue);
    if (newValue !== globalState2.UNCHANGED) {
      var notifySpy = isSpyEnabled2();
      var notify = hasListeners2(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE2,
        object: this,
        oldValue: observable22.value_,
        name: key,
        newValue
      } : null;
      if (notifySpy)
        spyReportStart(change);
      observable22.setNewValue_(newValue);
      if (notify)
        notifyListeners2(this, change);
      if (notifySpy)
        spyReportEnd();
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed2(this.keysAtom_);
    transaction2(function() {
      var _this3$hasMap_$get;
      var observable22 = new ObservableValue2(newValue, _this3.enhancer_, true ? _this3.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);
      _this3.data_.set(key, observable22);
      newValue = observable22.value_;
      (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(true);
      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled2();
    var notify = hasListeners2(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD2,
      object: this,
      name: key,
      newValue
    } : null;
    if (notifySpy)
      spyReportStart(change);
    if (notify)
      notifyListeners2(this, change);
    if (notifySpy)
      spyReportEnd();
  };
  _proto.get = function get32(key) {
    if (this.has(key))
      return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(void 0);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable2({
      next: function next() {
        var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
        return {
          done,
          value: done ? void 0 : self2.get(value)
        };
      }
    });
  };
  _proto.entries = function entries() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable2({
      next: function next() {
        var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
        return {
          done,
          value: done ? void 0 : [value, self2.get(value)]
        };
      }
    });
  };
  _proto[_Symbol$iterator2] = function() {
    return this.entries();
  };
  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose2(this), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  };
  _proto.merge = function merge(other) {
    var _this4 = this;
    if (isObservableMap2(other)) {
      other = new Map(other);
    }
    transaction2(function() {
      if (isPlainObject2(other))
        getPlainObjectKeys2(other).forEach(function(key) {
          return _this4.set(key, other[key]);
        });
      else if (Array.isArray(other))
        other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this4.set(key, value);
        });
      else if (isES6Map2(other)) {
        if (other.constructor !== Map)
          die2(19, other);
        other.forEach(function(value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== void 0)
        die2(20, other);
    });
    return this;
  };
  _proto.clear = function clear22() {
    var _this5 = this;
    transaction2(function() {
      untracked2(function() {
        for (var _iterator2 = _createForOfIteratorHelperLoose2(_this5.keys()), _step2; !(_step2 = _iterator2()).done; ) {
          var key = _step2.value;
          _this5["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace22(values) {
    var _this6 = this;
    transaction2(function() {
      var replacementMap = convertToMap2(values);
      var orderedData = new Map();
      var keysReportChangedCalled = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose2(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
        var key = _step3.value;
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            var value = _this6.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (var _iterator4 = _createForOfIteratorHelperLoose2(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
        var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
        var keyExisted = _this6.data_.has(_key);
        _this6.set(_key, _value);
        if (_this6.data_.has(_key)) {
          var _value2 = _this6.data_.get(_key);
          orderedData.set(_key, _value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      _this6.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString22() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON22() {
    return Array.from(this);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === true)
      die2("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener2(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor2(this, handler);
  };
  _createClass2(ObservableMap22, [{
    key: "size",
    get: function get32() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag2,
    get: function get32() {
      return "Map";
    }
  }]);
  return ObservableMap22;
}();
var isObservableMap2 = /* @__PURE__ */ createInstanceofPredicate2("ObservableMap", ObservableMap2);
function convertToMap2(dataStructure) {
  if (isES6Map2(dataStructure) || isObservableMap2(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject2(dataStructure)) {
    var map22 = new Map();
    for (var key in dataStructure) {
      map22.set(key, dataStructure[key]);
    }
    return map22;
  } else {
    return die2(21, dataStructure);
  }
}
var _Symbol$iterator$12;
var _Symbol$toStringTag$12;
var ObservableSetMarker2 = {};
_Symbol$iterator$12 = Symbol.iterator;
_Symbol$toStringTag$12 = Symbol.toStringTag;
var ObservableSet2 = /* @__PURE__ */ function() {
  function ObservableSet22(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer2;
    }
    if (name_ === void 0) {
      name_ = true ? "ObservableSet@" + getNextId() : "ObservableSet";
    }
    this.name_ = void 0;
    this[$mobx2] = ObservableSetMarker2;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction2(Set)) {
      die2(22);
    }
    this.atom_ = createAtom2(this.name_);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    if (initialData) {
      this.replace(initialData);
    }
  }
  var _proto = ObservableSet22.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear22() {
    var _this = this;
    transaction2(function() {
      untracked2(function() {
        for (var _iterator = _createForOfIteratorHelperLoose2(_this.data_.values()), _step; !(_step = _iterator()).done; ) {
          var value = _step.value;
          _this["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose2(this), _step2; !(_step2 = _iterator2()).done; ) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add(value) {
    var _this2 = this;
    checkIfStateModificationsAreAllowed2(this.atom_);
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        type: ADD2,
        object: this,
        newValue: value
      });
      if (!change)
        return this;
    }
    if (!this.has(value)) {
      transaction2(function() {
        _this2.data_.add(_this2.enhancer_(value, void 0));
        _this2.atom_.reportChanged();
      });
      var notifySpy = isSpyEnabled2();
      var notify = hasListeners2(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD2,
        object: this,
        newValue: value
      } : null;
      if (notifySpy && true)
        spyReportStart(_change);
      if (notify)
        notifyListeners2(this, _change);
      if (notifySpy && true)
        spyReportEnd();
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this3 = this;
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        type: DELETE2,
        object: this,
        oldValue: value
      });
      if (!change)
        return false;
    }
    if (this.has(value)) {
      var notifySpy = isSpyEnabled2();
      var notify = hasListeners2(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE2,
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && true)
        spyReportStart(_change2);
      transaction2(function() {
        _this3.atom_.reportChanged();
        _this3.data_["delete"](value);
      });
      if (notify)
        notifyListeners2(this, _change2);
      if (notifySpy && true)
        spyReportEnd();
      return true;
    }
    return false;
  };
  _proto.has = function has22(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable2({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.keys = function keys() {
    return this.values();
  };
  _proto.values = function values() {
    this.atom_.reportObserved();
    var self2 = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable2({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self2.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.replace = function replace22(other) {
    var _this4 = this;
    if (isObservableSet2(other)) {
      other = new Set(other);
    }
    transaction2(function() {
      if (Array.isArray(other)) {
        _this4.clear();
        other.forEach(function(value) {
          return _this4.add(value);
        });
      } else if (isES6Set2(other)) {
        _this4.clear();
        other.forEach(function(value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== void 0) {
        die2("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === true)
      die2("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener2(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor2(this, handler);
  };
  _proto.toJSON = function toJSON22() {
    return Array.from(this);
  };
  _proto.toString = function toString22() {
    return "[object ObservableSet]";
  };
  _proto[_Symbol$iterator$12] = function() {
    return this.values();
  };
  _createClass2(ObservableSet22, [{
    key: "size",
    get: function get32() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$12,
    get: function get32() {
      return "Set";
    }
  }]);
  return ObservableSet22;
}();
var isObservableSet2 = /* @__PURE__ */ createInstanceofPredicate2("ObservableSet", ObservableSet2);
var descriptorCache2 = /* @__PURE__ */ Object.create(null);
var REMOVE2 = "remove";
var ObservableObjectAdministration2 = /* @__PURE__ */ function() {
  function ObservableObjectAdministration22(target_, values_, name_, defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation2;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom2(true ? this.name_ + ".keys" : "ObservableObject.keys");
    this.isPlainObject_ = isPlainObject2(this.target_);
    if (!isAnnotation(this.defaultAnnotation_)) {
      die2("defaultAnnotation must be valid annotation");
    }
    if (true) {
      this.appliedAnnotations_ = {};
    }
  }
  var _proto = ObservableObjectAdministration22.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable22 = this.values_.get(key);
    if (observable22 instanceof ComputedValue2) {
      observable22.set(newValue);
      return true;
    }
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        type: UPDATE2,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change)
        return null;
      newValue = change.newValue;
    }
    newValue = observable22.prepareNewValue_(newValue);
    if (newValue !== globalState2.UNCHANGED) {
      var notify = hasListeners2(this);
      var notifySpy = isSpyEnabled2();
      var _change = notify || notifySpy ? {
        type: UPDATE2,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable22.value_,
        name: key,
        newValue
      } : null;
      if (notifySpy)
        spyReportStart(_change);
      observable22.setNewValue_(newValue);
      if (notify)
        notifyListeners2(this, _change);
      if (notifySpy)
        spyReportEnd();
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState2.trackingDerivation && !hasProp2(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  };
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (hasProp2(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  };
  _proto.has_ = function has_(key) {
    if (!globalState2.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue2(key in this.target_, referenceEnhancer2, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  };
  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    assertAnnotable2(this, annotation, key);
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol2]) == null ? void 0 : _this$target_$storedA[key]) {
        return;
      } else {
        die2(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype2) {
      var descriptor = getDescriptor2(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0)
          return;
        if (outcome === 1)
          break;
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied2(this, annotation, key);
  };
  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    assertAnnotable2(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied2(this, annotation, key);
    }
    return outcome;
  };
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch2();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors2(this)) {
        var change = interceptChange2(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD2,
          newValue: descriptor.value
        });
        if (!change)
          return null;
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends2({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty3(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch2();
    }
    return true;
  };
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch2();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors2(this)) {
        var change = interceptChange2(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD2,
          newValue: value
        });
        if (!change)
          return null;
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor2(key);
      var descriptor = {
        configurable: globalState2.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty3(this.target_, key, descriptor);
      }
      var observable22 = new ObservableValue2(value, enhancer, true ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable22);
      this.notifyPropertyAddition_(key, observable22.value_);
    } finally {
      endBatch2();
    }
    return true;
  };
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch2();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors2(this)) {
        var change = interceptChange2(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD2,
          newValue: void 0
        });
        if (!change)
          return null;
      }
      options.name || (options.name = true ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor2(key);
      var descriptor = {
        configurable: globalState2.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty3(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue2(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch2();
    }
    return true;
  };
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (!hasProp2(this.target_, key)) {
      return true;
    }
    if (hasInterceptors2(this)) {
      var change = interceptChange2(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE2
      });
      if (!change)
        return null;
    }
    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;
      startBatch2();
      var notify = hasListeners2(this);
      var notifySpy = isSpyEnabled2();
      var observable22 = this.values_.get(key);
      var value = void 0;
      if (!observable22 && (notify || notifySpy)) {
        var _getDescriptor22;
        value = (_getDescriptor22 = getDescriptor2(this.target_, key)) == null ? void 0 : _getDescriptor22.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (true) {
        delete this.appliedAnnotations_[key];
      }
      if (observable22) {
        this.values_["delete"](key);
        if (observable22 instanceof ObservableValue2) {
          value = observable22.value_;
        }
        propagateChanged2(observable22);
      }
      this.keysAtom_.reportChanged();
      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE2,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (notifySpy)
          spyReportStart(_change2);
        if (notify)
          notifyListeners2(this, _change2);
        if (notifySpy)
          spyReportEnd();
      }
    } finally {
      endBatch2();
    }
    return true;
  };
  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (fireImmediately === true)
      die2("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener2(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor2(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;
    var notify = hasListeners2(this);
    var notifySpy = isSpyEnabled2();
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD2,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (notifySpy)
        spyReportStart(change);
      if (notify)
        notifyListeners2(this, change);
      if (notifySpy)
        spyReportEnd();
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys4(this.target_);
  };
  _proto.keys_ = function keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration22;
}();
function asObservableObject2(target, options) {
  var _options$name;
  if (options && isObservableObject2(target)) {
    die2("Options can't be provided for already observable objects.");
  }
  if (hasProp2(target, $mobx2)) {
    if (!(getAdministration2(target) instanceof ObservableObjectAdministration2)) {
      die2("Cannot convert '" + getDebugName2(target) + "' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported.");
    }
    return target;
  }
  if (!Object.isExtensible(target))
    die2("Cannot make the designated object observable; it is not extensible");
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : true ? (isPlainObject2(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
  var adm = new ObservableObjectAdministration2(target, new Map(), String(name), getAnnotationFromOptions2(options));
  addHiddenProp2(target, $mobx2, adm);
  return target;
}
var isObservableObjectAdministration2 = /* @__PURE__ */ createInstanceofPredicate2("ObservableObjectAdministration", ObservableObjectAdministration2);
function getCachedObservablePropDescriptor2(key) {
  return descriptorCache2[key] || (descriptorCache2[key] = {
    get: function get32() {
      return this[$mobx2].getObservablePropValue_(key);
    },
    set: function set42(value) {
      return this[$mobx2].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject2(thing) {
  if (isObject2(thing)) {
    return isObservableObjectAdministration2(thing[$mobx2]);
  }
  return false;
}
function recordAnnotationApplied2(adm, annotation, key) {
  var _adm$target_$storedAn;
  if (true) {
    adm.appliedAnnotations_[key] = annotation;
  }
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol2]) == null ? true : delete _adm$target_$storedAn[key];
}
function assertAnnotable2(adm, annotation, key) {
  if (!isAnnotation(annotation)) {
    die2("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  if (!isOverride2(annotation) && hasProp2(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die2("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overriden by subclass.");
  }
}
var OBSERVABLE_ARRAY_BUFFER_SIZE2 = 0;
var StubArray3 = function StubArray22() {
};
function inherit2(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== void 0) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}
inherit2(StubArray3, Array.prototype);
var LegacyObservableArray2 = /* @__PURE__ */ function(_StubArray) {
  _inheritsLoose2(LegacyObservableArray22, _StubArray);
  function LegacyObservableArray22(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration2(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized2(_this);
    addHiddenFinalProp2(_assertThisInitialized2(_this), $mobx2, adm);
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart2(true);
      _this.spliceWithArray(0, 0, initialValues);
      allowStateChangesEnd2(prev);
    }
    return _this;
  }
  var _proto = LegacyObservableArray22.prototype;
  _proto.concat = function concat() {
    this[$mobx2].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(this.slice(), arrays.map(function(a) {
      return isObservableArray2(a) ? a.slice() : a;
    }));
  };
  _proto[Symbol.iterator] = function() {
    var self2 = this;
    var nextIndex = 0;
    return makeIterable2({
      next: function next() {
        return nextIndex < self2.length ? {
          value: self2[nextIndex++],
          done: false
        } : {
          done: true,
          value: void 0
        };
      }
    });
  };
  _createClass2(LegacyObservableArray22, [{
    key: "length",
    get: function get32() {
      return this[$mobx2].getArrayLength_();
    },
    set: function set42(newLength) {
      this[$mobx2].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get32() {
      return "Array";
    }
  }]);
  return LegacyObservableArray22;
}(StubArray3);
Object.entries(arrayExtensions2).forEach(function(_ref) {
  var prop = _ref[0], fn = _ref[1];
  if (prop !== "concat")
    addHiddenProp2(LegacyObservableArray2.prototype, prop, fn);
});
function createArrayEntryDescriptor2(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get32() {
      return this[$mobx2].get_(index);
    },
    set: function set42(value) {
      this[$mobx2].set_(index, value);
    }
  };
}
function createArrayBufferItem2(index) {
  defineProperty3(LegacyObservableArray2.prototype, "" + index, createArrayEntryDescriptor2(index));
}
function reserveArrayBuffer2(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE2) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE2; index < max + 100; index++) {
      createArrayBufferItem2(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE2 = max;
  }
}
reserveArrayBuffer2(1e3);
function createLegacyArray2(initialValues, enhancer, name) {
  return new LegacyObservableArray2(initialValues, enhancer, name);
}
function getAtom2(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray2(thing)) {
      if (property !== void 0)
        die2(23);
      return thing[$mobx2].atom_;
    }
    if (isObservableSet2(thing)) {
      return thing[$mobx2];
    }
    if (isObservableMap2(thing)) {
      if (property === void 0)
        return thing.keysAtom_;
      var observable22 = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable22)
        die2(25, property, getDebugName2(thing));
      return observable22;
    }
    if (isObservableObject2(thing)) {
      if (!property)
        return die2(26);
      var _observable = thing[$mobx2].values_.get(property);
      if (!_observable)
        die2(27, property, getDebugName2(thing));
      return _observable;
    }
    if (isAtom2(thing) || isComputedValue2(thing) || isReaction2(thing)) {
      return thing;
    }
  } else if (isFunction2(thing)) {
    if (isReaction2(thing[$mobx2])) {
      return thing[$mobx2];
    }
  }
  die2(28);
}
function getAdministration2(thing, property) {
  if (!thing)
    die2(29);
  if (property !== void 0)
    return getAdministration2(getAtom2(thing, property));
  if (isAtom2(thing) || isComputedValue2(thing) || isReaction2(thing))
    return thing;
  if (isObservableMap2(thing) || isObservableSet2(thing))
    return thing;
  if (thing[$mobx2])
    return thing[$mobx2];
  die2(24, thing);
}
function getDebugName2(thing, property) {
  var named;
  if (property !== void 0) {
    named = getAtom2(thing, property);
  } else if (isAction2(thing)) {
    return thing.name;
  } else if (isObservableObject2(thing) || isObservableMap2(thing) || isObservableSet2(thing)) {
    named = getAdministration2(thing);
  } else {
    named = getAtom2(thing);
  }
  return named.name_;
}
var toString2 = objectPrototype2.toString;
function deepEqual2(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq2(a, b, depth);
}
function eq2(a, b, depth, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (!isFunction2(type) && type !== "object" && typeof b != "object")
    return false;
  var className = toString2.call(a);
  if (className !== toString2.call(b))
    return false;
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a = unwrap2(a);
  b = unwrap2(b);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction2(aCtor) && aCtor instanceof aCtor && isFunction2(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq2(a[length], b[length], depth - 1, aStack, bStack))
        return false;
    }
  } else {
    var keys = Object.keys(a);
    var key;
    length = keys.length;
    if (Object.keys(b).length !== length)
      return false;
    while (length--) {
      key = keys[length];
      if (!(hasProp2(b, key) && eq2(a[key], b[key], depth - 1, aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap2(a) {
  if (isObservableArray2(a))
    return a.slice();
  if (isES6Map2(a) || isObservableMap2(a))
    return Array.from(a.entries());
  if (isES6Set2(a) || isObservableSet2(a))
    return Array.from(a.entries());
  return a;
}
function makeIterable2(iterator) {
  iterator[Symbol.iterator] = getSelf2;
  return iterator;
}
function getSelf2() {
  return this;
}
function isAnnotation(thing) {
  return thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction2(thing.make_) && isFunction2(thing.extend_);
}
["Symbol", "Map", "Set"].forEach(function(m) {
  var g = getGlobal2();
  if (typeof g[m] === "undefined") {
    die2("MobX requires global '" + m + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy2,
    extras: {
      getDebugName: getDebugName2
    },
    $mobx: $mobx2
  });
}
function useCameraCss(layerRef, containerRef, pageState2) {
  const rZoom = (0, import_react19.useRef)();
  const rPoint = (0, import_react19.useRef)();
  (0, import_react19.useLayoutEffect)(() => {
    return autorun2(() => {
      const { zoom, point } = pageState2.camera;
      const didZoom = zoom !== rZoom.current;
      const didPan = point !== rPoint.current;
      rZoom.current = zoom;
      rPoint.current = point;
      if (didZoom || didPan) {
        const layer = layerRef.current;
        if (containerRef && "current" in containerRef) {
          const container = containerRef.current;
          if (didZoom) {
            if (container) {
              container.style.setProperty("--tl-zoom", zoom.toString());
            }
          }
          if (layer) {
            layer.style.setProperty("transform", `scale(${zoom}) translateX(${point[0]}px) translateY(${point[1]}px)`);
          }
        }
      }
    });
  }, [pageState2]);
}
function canvasToScreen(point, camera) {
  return [(point[0] + camera.point[0]) * camera.zoom, (point[1] + camera.point[1]) * camera.zoom];
}
function getShapeUtils(shapeUtils2, shape) {
  return shapeUtils2[shape.type];
}
function useSelection(page2, pageState2, shapeUtils2) {
  const { rSelectionBounds } = useTLContext();
  const { selectedIds } = pageState2;
  const rPrevBounds = (0, import_react20.useRef)();
  let bounds = void 0;
  let rotation = 0;
  let isLocked = false;
  let isLinked = false;
  if (selectedIds.length === 1) {
    const id = selectedIds[0];
    const shape = page2.shapes[id];
    rotation = shape.rotation || 0;
    isLocked = shape.isLocked || false;
    const utils = getShapeUtils(shapeUtils2, shape);
    bounds = utils.hideBounds ? void 0 : utils.getBounds(shape);
  } else if (selectedIds.length > 1) {
    const selectedShapes = selectedIds.map((id) => page2.shapes[id]);
    rotation = 0;
    isLocked = selectedShapes.every((shape) => shape.isLocked);
    bounds = selectedShapes.reduce((acc, shape, i) => {
      if (i === 0) {
        return getShapeUtils(shapeUtils2, shape).getRotatedBounds(shape);
      }
      return utils_default.getExpandedBounds(acc, getShapeUtils(shapeUtils2, shape).getRotatedBounds(shape));
    }, {});
  }
  if (bounds) {
    const [minX, minY] = canvasToScreen([bounds.minX, bounds.minY], pageState2.camera);
    const [maxX, maxY] = canvasToScreen([bounds.maxX, bounds.maxY], pageState2.camera);
    isLinked = !!Object.values(page2.bindings).find((binding) => selectedIds.includes(binding.toId) || selectedIds.includes(binding.fromId));
    rSelectionBounds.current = {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  } else {
    rSelectionBounds.current = null;
  }
  const prevBounds = rPrevBounds.current;
  if (!prevBounds || !bounds) {
    rPrevBounds.current = bounds;
  } else if (bounds) {
    if (prevBounds.minX === bounds.minX && prevBounds.minY === bounds.minY && prevBounds.maxX === bounds.maxX && prevBounds.maxY === bounds.maxY) {
      bounds = rPrevBounds.current;
    }
  }
  return { bounds, rotation, isLocked, isLinked };
}
function useHandleEvents(id) {
  const { inputs: inputs2, callbacks } = useTLContext();
  const onPointerDown = (0, import_react21.useCallback)((e) => {
    var _a2, _b, _c;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    (_a2 = e.currentTarget) == null ? void 0 : _a2.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, id);
    (_b = callbacks.onPointHandle) == null ? void 0 : _b.call(callbacks, info, e);
    (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerUp = (0, import_react21.useCallback)((e) => {
    var _a2, _b, _c, _d;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, id);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = e.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e.pointerId);
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickHandle) == null ? void 0 : _b.call(callbacks, info, e);
      }
      (_c = callbacks.onReleaseHandle) == null ? void 0 : _c.call(callbacks, info, e);
    }
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [inputs2, callbacks]);
  const onPointerMove = (0, import_react21.useCallback)((e) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const info = inputs2.pointerMove(e, id);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = callbacks.onDragHandle) == null ? void 0 : _a2.call(callbacks, info, e);
    }
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerEnter = (0, import_react21.useCallback)((e) => {
    var _a2;
    if (!inputs2.pointerIsValid(e))
      return;
    const info = inputs2.pointerEnter(e, id);
    (_a2 = callbacks.onHoverHandle) == null ? void 0 : _a2.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerLeave = (0, import_react21.useCallback)((e) => {
    var _a2;
    if (!inputs2.pointerIsValid(e))
      return;
    const info = inputs2.pointerEnter(e, id);
    (_a2 = callbacks.onUnhoverHandle) == null ? void 0 : _a2.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}
function usePreventNavigation(rCanvas) {
  const { bounds } = useTLContext();
  (0, import_react22.useEffect)(() => {
    const preventGestureNavigation = (event) => {
      event.preventDefault();
    };
    const preventNavigation = (event) => {
      const touchXPosition = event.touches[0].pageX;
      const touchXRadius = event.touches[0].radiusX || 0;
      if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > bounds.width - 10) {
        event.preventDefault();
      }
    };
    const elm = rCanvas.current;
    if (!elm)
      return () => void 0;
    elm.addEventListener("touchstart", preventGestureNavigation);
    elm.addEventListener("gestureend", preventGestureNavigation);
    elm.addEventListener("gesturechange", preventGestureNavigation);
    elm.addEventListener("gesturestart", preventGestureNavigation);
    elm.addEventListener("touchstart", preventNavigation);
    return () => {
      if (elm) {
        elm.removeEventListener("touchstart", preventGestureNavigation);
        elm.removeEventListener("gestureend", preventGestureNavigation);
        elm.removeEventListener("gesturechange", preventGestureNavigation);
        elm.removeEventListener("gesturestart", preventGestureNavigation);
        elm.removeEventListener("touchstart", preventNavigation);
      }
    };
  }, [rCanvas, bounds.width]);
}
function useBoundsEvents() {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = (0, import_react23.useCallback)((e) => {
    var _a2, _b, _c, _d;
    if (!inputs2.pointerIsValid(e))
      return;
    if (e.button === 2) {
      (_a2 = callbacks.onRightPointBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerDown(e, "bounds"), e);
      return;
    }
    if (e.button !== 0)
      return;
    e.stopPropagation();
    (_b = e.currentTarget) == null ? void 0 : _b.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, "bounds");
    (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerDown) == null ? void 0 : _d.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerUp = (0, import_react23.useCallback)((e) => {
    var _a2, _b, _c, _d;
    if (e.button !== 0)
      return;
    inputs2.activePointer = void 0;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, "bounds");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = e.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickBounds) == null ? void 0 : _b.call(callbacks, info, e);
    }
    (_c = callbacks.onReleaseBounds) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerMove = (0, import_react23.useCallback)((e) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a2 = callbacks.onDragBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerMove(e, "bounds"), e);
    }
    const info = inputs2.pointerMove(e, "bounds");
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerEnter = (0, import_react23.useCallback)((e) => {
    var _a2;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a2 = callbacks.onHoverBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e, "bounds"), e);
  }, [callbacks, inputs2]);
  const onPointerLeave = (0, import_react23.useCallback)((e) => {
    var _a2;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a2 = callbacks.onUnhoverBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e, "bounds"), e);
  }, [callbacks, inputs2]);
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}
function usePosition(bounds, rotation = 0) {
  const rBounds = (0, import_react24.useRef)(null);
  (0, import_react24.useLayoutEffect)(() => {
    return autorun2(() => {
      const elm = rBounds.current;
      const transform = `
    translate(
      calc(${bounds.minX}px - var(--tl-padding)),
      calc(${bounds.minY}px - var(--tl-padding))
    )
    rotate(${rotation + (bounds.rotation || 0)}rad)`;
      elm.style.setProperty("transform", transform);
      elm.style.setProperty("width", `calc(${Math.floor(bounds.width)}px + (var(--tl-padding) * 2))`);
      elm.style.setProperty("height", `calc(${Math.floor(bounds.height)}px + (var(--tl-padding) * 2))`);
    });
  }, [bounds, rotation]);
  return rBounds;
}
function useKeyEvents() {
  const { inputs: inputs2, callbacks } = useTLContext();
  (0, import_react25.useEffect)(() => {
    const handleKeyDown = (e) => {
      var _a2;
      (_a2 = callbacks.onKeyDown) == null ? void 0 : _a2.call(callbacks, e.key, inputs2.keydown(e), e);
    };
    const handleKeyUp = (e) => {
      var _a2;
      inputs2.keyup(e);
      (_a2 = callbacks.onKeyUp) == null ? void 0 : _a2.call(callbacks, e.key, inputs2.keyup(e), e);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [inputs2, callbacks]);
}
var Container = observer(function Container2(_a2) {
  var _b = _a2, {
    id,
    bounds,
    rotation = 0,
    isGhost = false,
    children
  } = _b, props = __objRest(_b, [
    "id",
    "bounds",
    "rotation",
    "isGhost",
    "children"
  ]);
  const rPositioned = usePosition(bounds, rotation);
  return /* @__PURE__ */ (0, import_react26.createElement)("div", __spreadValues2({
    id,
    ref: rPositioned,
    className: isGhost ? "tl-positioned tl-ghost" : "tl-positioned",
    "aria-label": "container",
    "data-testid": "container"
  }, props), children);
});
var Brush = observer(function Brush2({ brush }) {
  return /* @__PURE__ */ (0, import_react27.createElement)(Container, {
    bounds: brush,
    rotation: 0
  }, /* @__PURE__ */ (0, import_react27.createElement)(SVGContainer, null, /* @__PURE__ */ (0, import_react27.createElement)("rect", {
    className: "tl-brush",
    opacity: 1,
    x: 0,
    y: 0,
    width: brush.width,
    height: brush.height,
    "aria-label": "brush"
  })));
});
var CenterHandle = observer(function CenterHandle2({
  bounds,
  isLocked,
  isHidden
}) {
  return /* @__PURE__ */ (0, import_react30.createElement)("rect", {
    className: isLocked ? "tl-bounds-center tl-dashed" : "tl-bounds-center",
    x: -1,
    y: -1,
    width: bounds.width + 2,
    height: bounds.height + 2,
    opacity: isHidden ? 0 : 1,
    pointerEvents: "none",
    "aria-label": "center handle"
  });
});
var RotateHandle = observer(function RotateHandle2({
  bounds,
  targetSize,
  size,
  isHidden
}) {
  const events = useBoundsHandleEvents("rotate");
  return /* @__PURE__ */ (0, import_react31.createElement)("g", {
    cursor: "grab",
    opacity: isHidden ? 0 : 1
  }, /* @__PURE__ */ (0, import_react31.createElement)("circle", __spreadValues2({
    className: "tl-transparent",
    "aria-label": "rotate handle transparent",
    cx: bounds.width / 2,
    cy: size * -2,
    r: targetSize,
    pointerEvents: isHidden ? "none" : "all"
  }, events)), /* @__PURE__ */ (0, import_react31.createElement)("circle", {
    className: "tl-rotate-handle",
    "aria-label": "rotate handle",
    cx: bounds.width / 2,
    cy: size * -2,
    r: size / 2,
    pointerEvents: "none"
  }));
});
var cornerBgClassnames = {
  [TLBoundsCorner.TopLeft]: "tl-cursor-nwse",
  [TLBoundsCorner.TopRight]: "tl-cursor-nesw",
  [TLBoundsCorner.BottomRight]: "tl-cursor-nwse",
  [TLBoundsCorner.BottomLeft]: "tl-cursor-nesw"
};
var CornerHandle = observer(function CornerHandle2({
  size,
  targetSize,
  isHidden,
  corner,
  bounds
}) {
  const events = useBoundsHandleEvents(corner);
  const isTop = corner === TLBoundsCorner.TopLeft || corner === TLBoundsCorner.TopRight;
  const isLeft = corner === TLBoundsCorner.TopLeft || corner === TLBoundsCorner.BottomLeft;
  return /* @__PURE__ */ (0, import_react32.createElement)("g", {
    opacity: isHidden ? 0 : 1
  }, /* @__PURE__ */ (0, import_react32.createElement)("rect", __spreadValues2({
    className: "tl-transparent " + (isHidden ? "" : cornerBgClassnames[corner]),
    "aria-label": "corner transparent",
    x: (isLeft ? -1 : bounds.width + 1) - targetSize,
    y: (isTop ? -1 : bounds.height + 1) - targetSize,
    width: targetSize * 2,
    height: targetSize * 2,
    pointerEvents: isHidden ? "none" : "all"
  }, events)), /* @__PURE__ */ (0, import_react32.createElement)("rect", {
    className: "tl-corner-handle",
    "aria-label": "corner handle",
    x: (isLeft ? -1 : bounds.width + 1) - size / 2,
    y: (isTop ? -1 : bounds.height + 1) - size / 2,
    width: size,
    height: size,
    pointerEvents: "none"
  }));
});
function LinkHandle({ size, bounds, isHidden }) {
  const leftEvents = useBoundsHandleEvents("left");
  const centerEvents = useBoundsHandleEvents("center");
  const rightEvents = useBoundsHandleEvents("right");
  return /* @__PURE__ */ (0, import_react33.createElement)("g", {
    cursor: "grab",
    transform: `translate(${bounds.width / 2 - size * 4}, ${bounds.height + size * 2})`,
    "aria-label": "link handle"
  }, /* @__PURE__ */ (0, import_react33.createElement)("g", {
    className: "tl-transparent",
    pointerEvents: isHidden ? "none" : "all"
  }, /* @__PURE__ */ (0, import_react33.createElement)("rect", __spreadValues2({
    x: 0,
    y: 0,
    width: size * 2,
    height: size * 2
  }, leftEvents)), /* @__PURE__ */ (0, import_react33.createElement)("rect", __spreadValues2({
    x: size * 3,
    y: 0,
    width: size * 2,
    height: size * 2
  }, centerEvents)), /* @__PURE__ */ (0, import_react33.createElement)("rect", __spreadValues2({
    x: size * 6,
    y: 0,
    width: size * 2,
    height: size * 2
  }, rightEvents))), /* @__PURE__ */ (0, import_react33.createElement)("g", {
    className: "tl-rotate-handle",
    transform: `translate(${size / 2}, ${size / 2})`,
    "aria-label": "link rotate handle"
  }, /* @__PURE__ */ (0, import_react33.createElement)("path", {
    d: `M 0,${size / 2} L ${size},${size} ${size},0 Z`,
    pointerEvents: "none",
    opacity: isHidden ? 0 : 1
  }), /* @__PURE__ */ (0, import_react33.createElement)("path", {
    transform: `translate(${size * 3}, 0)`,
    d: `M 0,0 L ${size},0 ${size / 2},${size} Z`,
    pointerEvents: "none",
    opacity: isHidden ? 0 : 1
  }), /* @__PURE__ */ (0, import_react33.createElement)("path", {
    transform: `translate(${size * 6}, 0)`,
    d: `M ${size},${size / 2} L 0,0 0,${size} Z`,
    pointerEvents: "none",
    opacity: isHidden ? 0 : 1
  })));
}
var edgeClassnames = {
  [TLBoundsEdge.Top]: "tl-cursor-ns",
  [TLBoundsEdge.Right]: "tl-cursor-ew",
  [TLBoundsEdge.Bottom]: "tl-cursor-ns",
  [TLBoundsEdge.Left]: "tl-cursor-ew"
};
var EdgeHandle = observer(function EdgeHandle2({
  size,
  isHidden,
  bounds,
  edge
}) {
  const events = useBoundsHandleEvents(edge);
  const isHorizontal = edge === TLBoundsEdge.Top || edge === TLBoundsEdge.Bottom;
  const isFarEdge = edge === TLBoundsEdge.Right || edge === TLBoundsEdge.Bottom;
  const { height, width } = bounds;
  return /* @__PURE__ */ (0, import_react34.createElement)("rect", __spreadValues2({
    pointerEvents: isHidden ? "none" : "all",
    className: "tl-transparent tl-edge-handle " + (isHidden ? "" : edgeClassnames[edge]),
    "aria-label": `${edge} handle`,
    opacity: isHidden ? 0 : 1,
    x: isHorizontal ? size / 2 : (isFarEdge ? width + 1 : -1) - size / 2,
    y: isHorizontal ? (isFarEdge ? height + 1 : -1) - size / 2 : size / 2,
    width: isHorizontal ? Math.max(0, width + 1 - size) : size,
    height: isHorizontal ? size : Math.max(0, height + 1 - size)
  }, events));
});
var ROTATIONS = {
  right: 0,
  bottomRight: 45,
  bottom: 90,
  bottomLeft: 135,
  left: 180,
  topLeft: 225,
  top: 270,
  topRight: 315
};
var CloneButton = observer(function CloneButton2({
  bounds,
  side,
  targetSize,
  size
}) {
  const x = {
    left: -44,
    topLeft: -44,
    bottomLeft: -44,
    right: bounds.width + 44,
    topRight: bounds.width + 44,
    bottomRight: bounds.width + 44,
    top: bounds.width / 2,
    bottom: bounds.width / 2
  }[side];
  const y = {
    left: bounds.height / 2,
    right: bounds.height / 2,
    top: -44,
    topLeft: -44,
    topRight: -44,
    bottom: bounds.height + 44,
    bottomLeft: bounds.height + 44,
    bottomRight: bounds.height + 44
  }[side];
  const { callbacks, inputs: inputs2 } = useTLContext();
  const handleClick = (0, import_react36.useCallback)((e) => {
    var _a2;
    e.stopPropagation();
    const info = inputs2.pointerDown(e, side);
    (_a2 = callbacks.onShapeClone) == null ? void 0 : _a2.call(callbacks, info, e);
  }, [callbacks.onShapeClone]);
  return /* @__PURE__ */ (0, import_react36.createElement)("g", {
    className: "tl-clone-target",
    transform: `translate(${x}, ${y})`,
    "aria-label": "clone button"
  }, /* @__PURE__ */ (0, import_react36.createElement)("rect", {
    className: "tl-transparent",
    width: targetSize * 4,
    height: targetSize * 4,
    x: -targetSize * 2,
    y: -targetSize * 2
  }), /* @__PURE__ */ (0, import_react36.createElement)("g", {
    className: "tl-clone-button-target",
    onPointerDown: handleClick,
    transform: `rotate(${ROTATIONS[side]})`
  }, /* @__PURE__ */ (0, import_react36.createElement)("circle", {
    className: "tl-transparent ",
    r: targetSize
  }), /* @__PURE__ */ (0, import_react36.createElement)("path", {
    className: "tl-clone-button",
    d: `M -${size / 2},-${size / 2} L ${size / 2},0 -${size / 2},${size / 2} Z`,
    strokeLinejoin: "round"
  })));
});
function CloneButtons({ targetSize, size, bounds }) {
  return /* @__PURE__ */ (0, import_react35.createElement)(import_react35.Fragment, null, /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "top"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "right"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "bottom"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "left"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "topLeft"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "topRight"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "bottomLeft"
  }), /* @__PURE__ */ (0, import_react35.createElement)(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "bottomRight"
  }));
}
var SVGContainer = (0, import_react37.forwardRef)(function SVGContainer2(_a2, ref) {
  var _b = _a2, { id, className = "", children } = _b, rest = __objRest(_b, ["id", "className", "children"]);
  return /* @__PURE__ */ (0, import_react37.createElement)(ObserverComponent, null, () => /* @__PURE__ */ (0, import_react37.createElement)("svg", __spreadValues2({
    ref,
    className: `tl-positioned-svg ${className}`
  }, rest), /* @__PURE__ */ (0, import_react37.createElement)("g", {
    id,
    className: "tl-centered-g"
  }, children)));
});
var Bounds = observer(function Bounds2({
  zoom,
  bounds,
  viewportWidth,
  rotation,
  isHidden,
  isLocked,
  hideCloneHandles,
  hideResizeHandles,
  hideRotateHandle,
  hideBindingHandles
}) {
  const targetSize = (viewportWidth < 768 ? 16 : 8) / zoom;
  const size = 8 / zoom;
  const smallDimension = Math.min(bounds.width, bounds.height) * zoom;
  const showRotateHandle = !hideRotateHandle && !isHidden && !isLocked && smallDimension > 32;
  const showEdgeHandles = !isHidden && !isLocked && smallDimension > 24;
  const showCornerHandles = !isHidden && !isLocked && smallDimension > 20;
  const showCloneHandles = !hideCloneHandles && smallDimension > 24;
  const showResizeHandles = !hideResizeHandles && !isLocked;
  return /* @__PURE__ */ (0, import_react29.createElement)(Container, {
    bounds,
    rotation
  }, /* @__PURE__ */ (0, import_react29.createElement)(SVGContainer, null, /* @__PURE__ */ (0, import_react29.createElement)(CenterHandle, {
    bounds,
    isLocked,
    isHidden
  }), showResizeHandles && /* @__PURE__ */ (0, import_react29.createElement)(import_react29.Fragment, null, /* @__PURE__ */ (0, import_react29.createElement)(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Top,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ (0, import_react29.createElement)(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Right,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ (0, import_react29.createElement)(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Bottom,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ (0, import_react29.createElement)(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Left,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ (0, import_react29.createElement)(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.TopLeft
  }), /* @__PURE__ */ (0, import_react29.createElement)(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.TopRight
  }), /* @__PURE__ */ (0, import_react29.createElement)(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.BottomRight
  }), /* @__PURE__ */ (0, import_react29.createElement)(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.BottomLeft
  })), showRotateHandle && /* @__PURE__ */ (0, import_react29.createElement)(RotateHandle, {
    targetSize,
    size,
    bounds,
    isHidden: !showEdgeHandles
  }), showCloneHandles && /* @__PURE__ */ (0, import_react29.createElement)(CloneButtons, {
    bounds,
    targetSize,
    size
  }), !hideBindingHandles && /* @__PURE__ */ (0, import_react29.createElement)(LinkHandle, {
    targetSize,
    size,
    bounds,
    isHidden: !showEdgeHandles
  })));
});
var BoundsBg = observer(function BoundsBg2({
  bounds,
  rotation,
  isHidden
}) {
  const events = useBoundsEvents();
  return /* @__PURE__ */ (0, import_react38.createElement)(Container, {
    bounds,
    rotation
  }, /* @__PURE__ */ (0, import_react38.createElement)(SVGContainer, null, /* @__PURE__ */ (0, import_react38.createElement)("rect", __spreadValues2({
    className: "tl-bounds-bg",
    "aria-label": "bounds bg",
    width: bounds.width,
    height: bounds.height,
    opacity: isHidden ? 0 : 1
  }, events))));
});
var Handle = observer(function Handle2({ id, point }) {
  const events = useHandleEvents(id);
  return /* @__PURE__ */ (0, import_react40.createElement)(Container, {
    bounds: utils_default.translateBounds({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0
    }, point)
  }, /* @__PURE__ */ (0, import_react40.createElement)(SVGContainer, null, /* @__PURE__ */ (0, import_react40.createElement)("g", __spreadValues2({
    className: "tl-handle",
    "aria-label": "handle"
  }, events), /* @__PURE__ */ (0, import_react40.createElement)("circle", {
    className: "tl-handle-bg",
    pointerEvents: "all"
  }), /* @__PURE__ */ (0, import_react40.createElement)("circle", {
    className: "tl-counter-scaled tl-handle",
    pointerEvents: "none",
    r: 4
  }))));
});
var Handles = observer(function Handles2({
  shape,
  zoom
}) {
  if (shape.handles === void 0) {
    return null;
  }
  let prev = null;
  const handlesToShow = Object.values(shape.handles).reduce((acc, cur) => {
    const point = Vec.add(cur.point, shape.point);
    if (!prev || Vec.dist(point, prev) * zoom >= 32) {
      acc.push(cur);
      prev = point;
    }
    return acc;
  }, []);
  if (handlesToShow.length === 1)
    return null;
  return /* @__PURE__ */ (0, import_react39.createElement)(import_react39.Fragment, null, handlesToShow.map((handle) => /* @__PURE__ */ (0, import_react39.createElement)(Handle, {
    key: shape.id + "_" + handle.id,
    id: handle.id,
    point: Vec.add(handle.point, shape.point)
  })));
});
var _RenderedShape = observer(function RenderedShape(props) {
  const ref = props.utils.getRef(props.shape);
  return /* @__PURE__ */ (0, import_react43.createElement)(props.utils.Component, __spreadValues2({
    ref
  }, props));
});
var RenderedShape2 = (0, import_react43.memo)(_RenderedShape, (prev, next) => {
  if (prev.isHovered !== next.isHovered || prev.isSelected !== next.isSelected || prev.isEditing !== next.isEditing || prev.isBinding !== next.isBinding || prev.isGhost !== next.isGhost || prev.meta !== next.meta) {
    return false;
  }
  if (next.shape !== prev.shape) {
    return !next.utils.shouldRender(next.shape, prev.shape);
  }
  return true;
});
var Shape = observer(function Shape2(_a2) {
  var _b = _a2, {
    shape,
    utils,
    meta
  } = _b, rest = __objRest(_b, [
    "shape",
    "utils",
    "meta"
  ]);
  const { callbacks } = useTLContext();
  const bounds = utils.getBounds(shape);
  const events = useShapeEvents(shape.id);
  return /* @__PURE__ */ (0, import_react42.createElement)(Container, {
    id: shape.id,
    bounds,
    rotation: shape.rotation,
    "data-shape": shape.type
  }, /* @__PURE__ */ (0, import_react42.createElement)(RenderedShape2, __spreadValues2({
    shape,
    utils,
    meta,
    events,
    onShapeChange: callbacks.onShapeChange,
    onShapeBlur: callbacks.onShapeBlur
  }, rest)));
});
var ShapeNode = observer(function ShapeNode2(_a2) {
  var _b = _a2, {
    shape,
    utils,
    meta,
    children
  } = _b, rest = __objRest(_b, [
    "shape",
    "utils",
    "meta",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_react41.createElement)(import_react41.Fragment, null, /* @__PURE__ */ (0, import_react41.createElement)(Shape, __spreadValues2({
    shape,
    utils: utils[shape.type],
    meta
  }, rest)), children && children.map((childNode) => /* @__PURE__ */ (0, import_react41.createElement)(ShapeNode2, __spreadValues2({
    key: childNode.shape.id,
    utils
  }, childNode))));
});
var ShapeIndicator = observer(function ShapeIndicator2({
  isHovered = false,
  isSelected = false,
  shape,
  user,
  meta
}) {
  const { shapeUtils: shapeUtils2 } = useTLContext();
  const utils = shapeUtils2[shape.type];
  const bounds = utils.getBounds(shape);
  const rPositioned = usePosition(bounds, shape.rotation);
  return /* @__PURE__ */ (0, import_react44.createElement)("div", {
    ref: rPositioned,
    className: "tl-indicator tl-absolute " + (user ? "" : isSelected ? "tl-selected" : "tl-hovered")
  }, /* @__PURE__ */ (0, import_react44.createElement)("svg", {
    width: "100%",
    height: "100%"
  }, /* @__PURE__ */ (0, import_react44.createElement)("g", {
    className: "tl-centered-g",
    stroke: user == null ? void 0 : user.color
  }, /* @__PURE__ */ (0, import_react44.createElement)(utils.Indicator, {
    shape,
    meta,
    user,
    isSelected,
    isHovered
  }))));
});
var Page = observer(function _Page({
  page: page2,
  pageState: pageState2,
  hideBounds,
  hideHandles,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideRotateHandle,
  hideResizeHandles,
  meta
}) {
  const { bounds: rendererBounds, shapeUtils: shapeUtils2 } = useTLContext();
  const shapeTree = useShapeTree(page2, pageState2, meta);
  const { bounds, isLinked, isLocked, rotation } = useSelection(page2, pageState2, shapeUtils2);
  const {
    selectedIds,
    hoveredId,
    camera: { zoom }
  } = pageState2;
  let _hideCloneHandles = true;
  let shapeWithHandles = void 0;
  const selectedShapes = selectedIds.map((id) => page2.shapes[id]);
  if (selectedShapes.length === 1) {
    const shape = selectedShapes[0];
    const utils = shapeUtils2[shape.type];
    _hideCloneHandles = hideCloneHandles || !utils.showCloneHandles;
    if (shape.handles !== void 0) {
      shapeWithHandles = shape;
    }
  }
  return /* @__PURE__ */ (0, import_react28.createElement)(import_react28.Fragment, null, bounds && /* @__PURE__ */ (0, import_react28.createElement)(BoundsBg, {
    bounds,
    rotation,
    isHidden: hideBounds
  }), shapeTree.map((node) => /* @__PURE__ */ (0, import_react28.createElement)(ShapeNode, __spreadValues2({
    key: node.shape.id,
    utils: shapeUtils2
  }, node))), !hideIndicators && selectedShapes.map((shape) => /* @__PURE__ */ (0, import_react28.createElement)(ShapeIndicator, {
    key: "selected_" + shape.id,
    shape,
    meta,
    isSelected: true
  })), !hideIndicators && hoveredId && /* @__PURE__ */ (0, import_react28.createElement)(ShapeIndicator, {
    key: "hovered_" + hoveredId,
    shape: page2.shapes[hoveredId],
    meta,
    isHovered: true
  }), bounds && /* @__PURE__ */ (0, import_react28.createElement)(Bounds, {
    zoom,
    bounds,
    viewportWidth: rendererBounds.width,
    isLocked,
    rotation,
    isHidden: hideBounds,
    hideRotateHandle,
    hideResizeHandles,
    hideBindingHandles: hideBindingHandles || !isLinked,
    hideCloneHandles: _hideCloneHandles
  }), !hideHandles && shapeWithHandles && /* @__PURE__ */ (0, import_react28.createElement)(Handles, {
    shape: shapeWithHandles,
    zoom
  }));
});
function User({ user }) {
  const rUser = (0, import_react46.useRef)(null);
  return /* @__PURE__ */ (0, import_react46.createElement)("div", {
    ref: rUser,
    className: "tl-absolute tl-user",
    style: {
      backgroundColor: user.color,
      transform: `translate(${user.point[0]}px, ${user.point[1]}px)`
    }
  });
}
function Users({ userId, users }) {
  return /* @__PURE__ */ (0, import_react45.createElement)(import_react45.Fragment, null, Object.values(users).filter((user) => user && user.id !== userId).map((user) => /* @__PURE__ */ (0, import_react45.createElement)(User, {
    key: user.id,
    user
  })));
}
function useResizeObserver(ref, onBoundsChange) {
  const { inputs: inputs2, callbacks } = useTLContext();
  const rIsMounted = (0, import_react47.useRef)(false);
  const updateBounds = (0, import_react47.useCallback)(() => {
    var _a2, _b;
    if (rIsMounted.current) {
      const rect = (_a2 = ref.current) == null ? void 0 : _a2.getBoundingClientRect();
      if (rect) {
        const bounds = {
          minX: rect.left,
          maxX: rect.left + rect.width,
          minY: rect.top,
          maxY: rect.top + rect.height,
          width: rect.width,
          height: rect.height
        };
        inputs2.bounds = bounds;
        onBoundsChange(bounds);
        (_b = callbacks.onBoundsChange) == null ? void 0 : _b.call(callbacks, bounds);
      }
    } else {
      rIsMounted.current = true;
    }
  }, [ref, inputs2, callbacks.onBoundsChange]);
  (0, import_react47.useEffect)(() => {
    const debouncedupdateBounds = Utils.debounce(updateBounds, 100);
    window.addEventListener("scroll", debouncedupdateBounds);
    window.addEventListener("resize", debouncedupdateBounds);
    return () => {
      window.removeEventListener("scroll", debouncedupdateBounds);
      window.removeEventListener("resize", debouncedupdateBounds);
    };
  }, []);
  (0, import_react47.useEffect)(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (inputs2.isPinching) {
        return;
      }
      if (entries[0].contentRect) {
        updateBounds();
      }
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, inputs2]);
  (0, import_react47.useEffect)(() => {
    updateBounds();
  }, [ref]);
}
var DOUBLE_CLICK_DURATION = 250;
var Inputs = class {
  constructor() {
    __publicField2(this, "pointer");
    __publicField2(this, "keyboard");
    __publicField2(this, "keys", {});
    __publicField2(this, "isPinching", false);
    __publicField2(this, "bounds", {
      minX: 0,
      maxX: 640,
      minY: 0,
      maxY: 480,
      width: 640,
      height: 480
    });
    __publicField2(this, "zoom", 1);
    __publicField2(this, "pointerUpTime", 0);
    __publicField2(this, "activePointer");
    __publicField2(this, "panStart", (e) => {
      var _a2, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      const info = {
        target: "wheel",
        pointerId: ((_a2 = this.pointer) == null ? void 0 : _a2.pointerId) || 0,
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        delta: [0, 0],
        pressure: 0.5,
        point: Inputs.getPoint(e, this.bounds),
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    });
    __publicField2(this, "pan", (delta, e) => {
      if (!this.pointer || this.pointer.target !== "wheel") {
        return this.panStart(e);
      }
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      const prev = this.pointer;
      const point = Inputs.getPoint(e, this.bounds);
      const info = __spreadProps(__spreadValues2({}, prev), {
        target: "wheel",
        delta,
        point,
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      });
      this.pointer = info;
      return info;
    });
    __publicField2(this, "keydown", (e) => {
      var _a2, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      this.keys[e.key] = true;
      return {
        point: ((_a2 = this.pointer) == null ? void 0 : _a2.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
    __publicField2(this, "keyup", (e) => {
      var _a2, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      delete this.keys[e.key];
      return {
        point: ((_a2 = this.pointer) == null ? void 0 : _a2.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
  }
  pointerIsValid(e) {
    if ("pointerId" in e) {
      if (this.activePointer && this.activePointer !== e.pointerId) {
        return false;
      }
    }
    if ("touches" in e) {
      const touch = e.changedTouches[0];
      if (this.activePointer && this.activePointer !== touch.identifier) {
        return false;
      }
    }
    return true;
  }
  touchStart(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    this.activePointer = touch.identifier;
    const info = {
      target,
      pointerId: touch.identifier,
      origin: Inputs.getPoint(touch, this.bounds),
      delta: [0, 0],
      point: Inputs.getPoint(touch, this.bounds),
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  touchEnd(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    const info = {
      target,
      pointerId: touch.identifier,
      origin: Inputs.getPoint(touch, this.bounds),
      delta: [0, 0],
      point: Inputs.getPoint(touch, this.bounds),
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    this.activePointer = void 0;
    return info;
  }
  touchMove(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    const prev = this.pointer;
    const point = Inputs.getPoint(touch, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec.sub(point, prev.point) : [0, 0];
    const info = __spreadProps(__spreadValues2({
      origin: point
    }, prev), {
      target,
      pointerId: touch.identifier,
      point,
      delta,
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerDown(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const point = Inputs.getPoint(e, this.bounds);
    this.activePointer = e.pointerId;
    const info = {
      target,
      pointerId: e.pointerId,
      origin: point,
      point,
      delta: [0, 0],
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerEnter(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const point = Inputs.getPoint(e, this.bounds);
    const info = {
      target,
      pointerId: e.pointerId,
      origin: point,
      delta: [0, 0],
      point,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerMove(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const prev = this.pointer;
    const point = Inputs.getPoint(e, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec.sub(point, prev.point) : [0, 0];
    const info = __spreadProps(__spreadValues2({
      origin: point
    }, prev), {
      target,
      pointerId: e.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerUp(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const prev = this.pointer;
    const point = Inputs.getPoint(e, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec.sub(point, prev.point) : [0, 0];
    this.activePointer = void 0;
    const info = __spreadProps(__spreadValues2({
      origin: point
    }, prev), {
      target,
      pointerId: e.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    this.pointerUpTime = Date.now();
    return info;
  }
  isDoubleClick() {
    if (!this.pointer)
      return false;
    const { origin, point } = this.pointer;
    const isDoubleClick = Date.now() - this.pointerUpTime < DOUBLE_CLICK_DURATION && Vec.dist(origin, point) < 4;
    if (isDoubleClick)
      this.activePointer = void 0;
    return isDoubleClick;
  }
  clear() {
    this.pointer = void 0;
  }
  resetDoubleClick() {
    this.pointerUpTime = 0;
  }
  pinch(point, origin) {
    const { shiftKey, ctrlKey, metaKey, altKey } = this.keys;
    const delta = Vec.sub(origin, point);
    const info = {
      pointerId: 0,
      target: "pinch",
      origin,
      delta,
      point: Vec.sub(Vec.toFixed(point), [this.bounds.minX, this.bounds.minY]),
      pressure: 0.5,
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  reset() {
    this.pointerUpTime = 0;
    this.pointer = void 0;
    this.keyboard = void 0;
    this.activePointer = void 0;
    this.keys = {};
  }
  static getPoint(e, bounds) {
    return [+e.clientX.toFixed(2) + window.scrollX, +e.clientY.toFixed(2) + window.scrollY];
  }
  static getPressure(e) {
    return "pressure" in e ? +e.pressure.toFixed(2) || 0.5 : 0.5;
  }
  static commandKey() {
    return Utils.isDarwin() ? "\u2318" : "Ctrl";
  }
};
var inputs = new Inputs();
function UsersIndicators({
  userId,
  users,
  meta,
  page: page2
}) {
  const { shapeUtils: shapeUtils2 } = useTLContext();
  return /* @__PURE__ */ (0, import_react48.createElement)(import_react48.Fragment, null, Object.values(users).filter(Boolean).filter((user) => user.id !== userId && user.selectedIds.length > 0).map((user) => {
    const shapes = user.selectedIds.map((id) => page2.shapes[id]).filter(Boolean);
    if (shapes.length === 0)
      return null;
    const bounds = utils_default.getCommonBounds(shapes.map((shape) => shapeUtils2[shape.type].getBounds(shape)));
    return /* @__PURE__ */ (0, import_react48.createElement)(import_react48.Fragment, {
      key: user.id + "_shapes"
    }, /* @__PURE__ */ (0, import_react48.createElement)("div", {
      className: "tl-absolute tl-user-indicator-bounds",
      style: {
        backgroundColor: user.color + "0d",
        borderColor: user.color + "78",
        transform: `translate(${bounds.minX}px, ${bounds.minY}px)`,
        width: bounds.width,
        height: bounds.height,
        pointerEvents: "none"
      }
    }), shapes.map((shape) => /* @__PURE__ */ (0, import_react48.createElement)(ShapeIndicator, {
      key: `${user.id}_${shape.id}_indicator`,
      shape,
      user,
      meta,
      isHovered: true
    })));
  }));
}
var SnapLines = observer(function SnapLines2({ snapLines }) {
  return /* @__PURE__ */ (0, import_react49.createElement)(import_react49.Fragment, null, snapLines.map((snapLine, i) => /* @__PURE__ */ (0, import_react49.createElement)(SnapLine, {
    key: i,
    snapLine
  })));
});
var SnapLine = observer(function SnapLine2({ snapLine }) {
  const bounds = utils_default.getBoundsFromPoints(snapLine);
  return /* @__PURE__ */ (0, import_react49.createElement)(import_react49.Fragment, null, /* @__PURE__ */ (0, import_react49.createElement)("line", {
    className: "tl-snap-line",
    x1: bounds.minX,
    y1: bounds.minY,
    x2: bounds.maxX,
    y2: bounds.maxY
  }), snapLine.map(([x, y], i) => /* @__PURE__ */ (0, import_react49.createElement)("use", {
    key: i,
    href: "#tl-snap-point",
    x,
    y
  })));
});
var STEPS = [
  [-1, 0.15, 64],
  [0.05, 0.375, 16],
  [0.15, 1, 4],
  [0.7, 2.5, 1]
];
function Grid({ grid, camera }) {
  return /* @__PURE__ */ (0, import_react50.createElement)("svg", {
    className: "tl-grid",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ (0, import_react50.createElement)("defs", null, STEPS.map(([min, mid, size], i) => {
    const s = size * grid * camera.zoom;
    const xo = camera.point[0] * camera.zoom;
    const yo = camera.point[1] * camera.zoom;
    const gxo = xo > 0 ? xo % s : s + xo % s;
    const gyo = yo > 0 ? yo % s : s + yo % s;
    const opacity = camera.zoom < mid ? utils_default.modulate(camera.zoom, [min, mid], [0, 1]) : 1;
    return /* @__PURE__ */ (0, import_react50.createElement)("pattern", {
      key: `grid-pattern-${i}`,
      id: `grid-${i}`,
      width: s,
      height: s,
      patternUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ (0, import_react50.createElement)("circle", {
      className: `tl-grid-dot`,
      cx: gxo,
      cy: gyo,
      r: 1,
      opacity
    }));
  })), STEPS.map((_14, i) => /* @__PURE__ */ (0, import_react50.createElement)("rect", {
    key: `grid-rect-${i}`,
    width: "100%",
    height: "100%",
    fill: `url(#grid-${i})`
  })));
}
var Overlay = observer(function Overlay2({ camera: { zoom, point }, children }) {
  const l = 2.5 / zoom;
  return /* @__PURE__ */ (0, import_react51.createElement)("svg", {
    className: "tl-overlay"
  }, /* @__PURE__ */ (0, import_react51.createElement)("defs", null, /* @__PURE__ */ (0, import_react51.createElement)("g", {
    id: "tl-snap-point"
  }, /* @__PURE__ */ (0, import_react51.createElement)("path", {
    className: "tl-snap-point",
    d: `M ${-l},${-l} L ${l},${l} M ${-l},${l} L ${l},${-l}`
  }))), /* @__PURE__ */ (0, import_react51.createElement)("g", {
    transform: `scale(${zoom}) translate(${point})`
  }, children));
});
var Canvas = observer(function _Canvas({
  id,
  page: page2,
  pageState: pageState2,
  snapLines,
  grid,
  users,
  userId,
  meta,
  externalContainerRef,
  hideHandles,
  hideBounds,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideResizeHandles,
  hideRotateHandle,
  hideGrid,
  onBoundsChange
}) {
  const rCanvas = (0, import_react9.useRef)(null);
  const rContainer = (0, import_react9.useRef)(null);
  const rLayer = (0, import_react9.useRef)(null);
  inputs.zoom = pageState2.camera.zoom;
  useResizeObserver(rCanvas, onBoundsChange);
  useZoomEvents(pageState2.camera.zoom, externalContainerRef || rCanvas);
  useSafariFocusOutFix();
  usePreventNavigation(rCanvas);
  useCameraCss(rLayer, rContainer, pageState2);
  useKeyEvents();
  const events = useCanvasEvents();
  return /* @__PURE__ */ (0, import_react9.createElement)("div", {
    id,
    className: "tl-container",
    ref: rContainer
  }, /* @__PURE__ */ (0, import_react9.createElement)("div", __spreadValues2({
    id: "canvas",
    className: "tl-absolute tl-canvas",
    ref: rCanvas
  }, events), !hideGrid && grid && /* @__PURE__ */ (0, import_react9.createElement)(Grid, {
    grid,
    camera: pageState2.camera
  }), /* @__PURE__ */ (0, import_react9.createElement)("div", {
    ref: rLayer,
    className: "tl-absolute tl-layer",
    "data-testid": "layer"
  }, /* @__PURE__ */ (0, import_react9.createElement)(Page, {
    page: page2,
    pageState: pageState2,
    hideBounds,
    hideIndicators,
    hideHandles,
    hideBindingHandles,
    hideCloneHandles,
    hideResizeHandles,
    hideRotateHandle,
    meta
  }), users && userId && /* @__PURE__ */ (0, import_react9.createElement)(UsersIndicators, {
    userId,
    users,
    page: page2,
    meta
  }), pageState2.brush && /* @__PURE__ */ (0, import_react9.createElement)(Brush, {
    brush: pageState2.brush
  }), users && /* @__PURE__ */ (0, import_react9.createElement)(Users, {
    userId,
    users
  })), /* @__PURE__ */ (0, import_react9.createElement)(Overlay, {
    camera: pageState2.camera
  }, snapLines && /* @__PURE__ */ (0, import_react9.createElement)(SnapLines, {
    snapLines
  }))));
});
var Renderer = observer(function _Renderer(_a2) {
  var _b = _a2, {
    id = "tl",
    shapeUtils: shapeUtils2,
    page: page2,
    pageState: pageState2,
    users,
    userId,
    theme,
    meta,
    snapLines,
    grid,
    containerRef,
    hideHandles = false,
    hideIndicators = false,
    hideCloneHandles = false,
    hideBindingHandles = false,
    hideResizeHandles = false,
    hideRotateHandles = false,
    hideBounds = false,
    hideGrid = true
  } = _b, rest = __objRest(_b, [
    "id",
    "shapeUtils",
    "page",
    "pageState",
    "users",
    "userId",
    "theme",
    "meta",
    "snapLines",
    "grid",
    "containerRef",
    "hideHandles",
    "hideIndicators",
    "hideCloneHandles",
    "hideBindingHandles",
    "hideResizeHandles",
    "hideRotateHandles",
    "hideBounds",
    "hideGrid"
  ]);
  useTLTheme(theme, "#" + id);
  const rSelectionBounds = (0, import_react8.useRef)(null);
  const rPageState = (0, import_react8.useRef)(pageState2);
  (0, import_react8.useEffect)(() => {
    rPageState.current = pageState2;
  }, [pageState2]);
  const [context, setContext] = (0, import_react8.useState)(() => ({
    callbacks: rest,
    shapeUtils: shapeUtils2,
    rSelectionBounds,
    rPageState,
    bounds: {
      minX: 0,
      minY: 0,
      maxX: Infinity,
      maxY: Infinity,
      width: Infinity,
      height: Infinity
    },
    inputs: new Inputs()
  }));
  const onBoundsChange = (0, import_react8.useCallback)((bounds) => {
    setContext((context2) => __spreadProps(__spreadValues2({}, context2), {
      bounds
    }));
  }, []);
  return /* @__PURE__ */ (0, import_react8.createElement)(TLContext.Provider, {
    value: context
  }, /* @__PURE__ */ (0, import_react8.createElement)(Canvas, {
    id,
    page: page2,
    pageState: pageState2,
    snapLines,
    grid,
    users,
    userId,
    externalContainerRef: containerRef,
    hideBounds,
    hideIndicators,
    hideHandles,
    hideCloneHandles,
    hideBindingHandles,
    hideRotateHandle: hideRotateHandles,
    hideResizeHandles,
    hideGrid,
    onBoundsChange,
    meta
  }));
});
var HTMLContainer = (0, import_react52.forwardRef)(function HTMLContainer2(_a2, ref) {
  var _b = _a2, { children, className = "" } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_react52.createElement)(ObserverComponent, null, () => /* @__PURE__ */ (0, import_react52.createElement)("div", __spreadValues2({
    ref,
    className: `tl-positioned-div ${className}`
  }, rest), children));
});
var TLShapeUtil = class {
  constructor() {
    __publicField2(this, "refMap", new Map());
    __publicField2(this, "boundsCache", new WeakMap());
    __publicField2(this, "showCloneHandles", false);
    __publicField2(this, "hideBounds", false);
    __publicField2(this, "isStateful", false);
    __publicField2(this, "shouldRender", (prev, next) => true);
    __publicField2(this, "getRef", (shape) => {
      if (!this.refMap.has(shape.id)) {
        this.refMap.set(shape.id, (0, import_react53.createRef)());
      }
      return this.refMap.get(shape.id);
    });
    __publicField2(this, "hitTestBounds", (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      const corners = utils_default.getRotatedCorners(shapeBounds, shape.rotation);
      return corners.every((point) => utils_default.pointInBounds(point, bounds)) || intersectPolygonBounds(corners, bounds).length > 0;
    });
    __publicField2(this, "getRotatedBounds", (shape) => {
      return utils_default.getBoundsFromPoints(utils_default.getRotatedCorners(this.getBounds(shape), shape.rotation));
    });
  }
};
__publicField2(TLShapeUtil, "Component", (component) => {
  return (0, import_react53.forwardRef)(component);
});
__publicField2(TLShapeUtil, "Indicator", (component) => component);

// src/shapes/rect/RectComponent.tsx
var React3 = __toModule(require_react());
var RectComponent = TLShapeUtil.Component(({ shape, events, meta }, ref) => {
  const color = meta.isDarkMode ? "white" : "black";
  return /* @__PURE__ */ React3.createElement(SVGContainer, __spreadValues({
    ref
  }, events), /* @__PURE__ */ React3.createElement("rect", {
    width: shape.size[0],
    height: shape.size[1],
    stroke: color,
    strokeWidth: 2,
    strokeLinejoin: "round",
    fill: "none",
    pointerEvents: "all"
  }));
});

// src/shapes/rect/RectIndicator.tsx
var React4 = __toModule(require_react());
var RectIndicator = TLShapeUtil.Indicator(({ shape }) => {
  return /* @__PURE__ */ React4.createElement("rect", {
    pointerEvents: "none",
    width: shape.size[0],
    height: shape.size[1],
    fill: "none",
    stroke: "tl-selectedStroke",
    strokeWidth: 1
  });
});

// src/shapes/rect/RectUtil.ts
var RectUtil = class extends TLShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "Component", RectComponent);
    __publicField(this, "Indicator", RectIndicator);
    __publicField(this, "getBounds", (shape) => {
      const [x, y] = shape.point;
      const [width, height] = shape.size;
      const bounds = {
        minX: x,
        maxX: x + width,
        minY: y,
        maxY: y + height,
        width,
        height
      };
      return bounds;
    });
  }
};

// src/stores.ts
var Page2 = class {
  constructor(opts = {}) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "shapes");
    __publicField(this, "bindings");
    const { id = Utils.uniqueId(), name = "page", shapes = {}, bindings = {} } = opts;
    this.id = id;
    this.name = name;
    this.shapes = shapes;
    this.bindings = bindings;
    makeAutoObservable(this);
  }
  dragShape(id, point) {
    const shape = this.shapes[id];
    shape.point = src_default.sub(point, src_default.div(shape.size, 2));
  }
};
__decorateClass([
  action
], Page2.prototype, "dragShape", 1);
var PageState = class {
  constructor(opts = {}) {
    __publicField(this, "id");
    __publicField(this, "selectedIds");
    __publicField(this, "camera");
    __publicField(this, "brush");
    __publicField(this, "pointedId");
    __publicField(this, "hoveredId");
    __publicField(this, "editingId");
    __publicField(this, "bindingId");
    __publicField(this, "setHoveredId", (id) => {
      this.hoveredId = id;
    });
    __publicField(this, "setSelectedIds", (id) => {
      if (!this.selectedIds.includes(id)) {
        this.selectedIds = [id];
      }
    });
    __publicField(this, "clearSelectedIds", () => {
      this.selectedIds = [];
    });
    __publicField(this, "pan", (point) => {
      this.camera.point = src_default.add(this.camera.point, point);
    });
    const {
      id = Utils.uniqueId(),
      selectedIds = [],
      camera = {
        point: [0, 0],
        zoom: 1
      }
    } = opts;
    this.id = id;
    this.camera = camera;
    this.selectedIds = selectedIds;
    makeAutoObservable(this);
  }
};
__decorateClass([
  action
], PageState.prototype, "setHoveredId", 2);
__decorateClass([
  action
], PageState.prototype, "setSelectedIds", 2);
__decorateClass([
  action
], PageState.prototype, "clearSelectedIds", 2);
__decorateClass([
  action
], PageState.prototype, "pan", 2);

// src/app.tsx
var page = new Page2({
  id: "page1",
  shapes: {
    rect1: {
      id: "rect1",
      type: "rect",
      parentId: "page1",
      name: "Rect",
      childIndex: 1,
      rotation: 0,
      point: [0, 0],
      size: [100, 100]
    }
  },
  bindings: {}
});
var pageState = new PageState();
var shapeUtils = {
  rect: new RectUtil()
};
var app_default = observer(function App() {
  const onHoverShape = (e) => {
    pageState.setHoveredId(e.target);
  };
  const onUnhoverShape = () => {
    pageState.setHoveredId(void 0);
  };
  const onPointShape = (info) => {
    pageState.setSelectedIds(info.target);
  };
  const onPointCanvas = () => {
    pageState.clearSelectedIds();
  };
  const onDragShape = (e) => {
    page.dragShape(e.target, e.point);
  };
  const onPointerMove = (info) => {
    if (info.shiftKey) {
      pageState.pan(info.delta);
    }
  };
  const [meta] = React5.useState({
    isDarkMode: false
  });
  const theme = React5.useMemo(() => meta.isDarkMode ? {
    accent: "rgb(255, 0, 0)",
    brushFill: "rgba(0,0,0,.05)",
    brushStroke: "rgba(0,0,0,.25)",
    selectStroke: "rgb(66, 133, 244)",
    selectFill: "rgba(65, 132, 244, 0.05)",
    background: "rgb(248, 249, 250)",
    foreground: "rgb(51, 51, 51)"
  } : {
    accent: "rgb(255, 0, 0)",
    brushFill: "rgba(0,0,0,.05)",
    brushStroke: "rgba(0,0,0,.25)",
    selectStroke: "rgb(66, 133, 244)",
    selectFill: "rgba(65, 132, 244, 0.05)",
    background: "rgb(248, 249, 250)",
    foreground: "rgb(51, 51, 51)"
  }, [meta]);
  return /* @__PURE__ */ React5.createElement("div", {
    className: "tldraw"
  }, /* @__PURE__ */ React5.createElement(Renderer, {
    shapeUtils,
    page,
    pageState,
    onHoverShape,
    onUnhoverShape,
    onPointShape,
    onPointCanvas,
    onPointerMove,
    onDragShape,
    meta,
    theme,
    id: void 0,
    containerRef: void 0,
    hideBounds: false,
    hideIndicators: false,
    hideHandles: false,
    hideCloneHandles: false,
    hideBindingHandles: false,
    hideRotateHandles: false,
    userId: void 0,
    users: void 0,
    snapLines: void 0,
    onBoundsChange: void 0
  }));
});

// src/index.tsx
import_react_dom2.default.render(/* @__PURE__ */ import_react54.default.createElement(import_react54.default.StrictMode, null, /* @__PURE__ */ import_react54.default.createElement(app_default, null)), document.getElementById("root"));
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
