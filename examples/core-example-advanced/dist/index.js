var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a4, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp.call(b3, prop))
      __defNormalProp(a4, prop, b3[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b3)) {
      if (__propIsEnum.call(b3, prop))
        __defNormalProp(a4, prop, b3[prop]);
    }
  return a4;
};
var __spreadProps = (a4, b3) => __defProps(a4, __getOwnPropDescs(b3));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
          return test2[n3];
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
      for (var s3 = 1; s3 < arguments.length; s3++) {
        from = Object(arguments[s3]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols.length; i3++) {
            if (propIsEnumerable.call(from, symbols[i3])) {
              to[symbols[i3]] = from[symbols[i3]];
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
    var l4 = require_object_assign();
    var n3 = 60103;
    var p3 = 60106;
    exports2.Fragment = 60107;
    exports2.StrictMode = 60108;
    exports2.Profiler = 60114;
    var q3 = 60109;
    var r3 = 60110;
    var t3 = 60112;
    exports2.Suspense = 60113;
    var u3 = 60115;
    var v3 = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      w3 = Symbol.for;
      n3 = w3("react.element");
      p3 = w3("react.portal");
      exports2.Fragment = w3("react.fragment");
      exports2.StrictMode = w3("react.strict_mode");
      exports2.Profiler = w3("react.profiler");
      q3 = w3("react.provider");
      r3 = w3("react.context");
      t3 = w3("react.forward_ref");
      exports2.Suspense = w3("react.suspense");
      u3 = w3("react.memo");
      v3 = w3("react.lazy");
    }
    var w3;
    var x3 = typeof Symbol === "function" && Symbol.iterator;
    function y3(a4) {
      if (a4 === null || typeof a4 !== "object")
        return null;
      a4 = x3 && a4[x3] || a4["@@iterator"];
      return typeof a4 === "function" ? a4 : null;
    }
    function z3(a4) {
      for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a4, c3 = 1; c3 < arguments.length; c3++)
        b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
      return "Minified React error #" + a4 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A3 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var B3 = {};
    function C3(a4, b3, c3) {
      this.props = a4;
      this.context = b3;
      this.refs = B3;
      this.updater = c3 || A3;
    }
    C3.prototype.isReactComponent = {};
    C3.prototype.setState = function(a4, b3) {
      if (typeof a4 !== "object" && typeof a4 !== "function" && a4 != null)
        throw Error(z3(85));
      this.updater.enqueueSetState(this, a4, b3, "setState");
    };
    C3.prototype.forceUpdate = function(a4) {
      this.updater.enqueueForceUpdate(this, a4, "forceUpdate");
    };
    function D3() {
    }
    D3.prototype = C3.prototype;
    function E3(a4, b3, c3) {
      this.props = a4;
      this.context = b3;
      this.refs = B3;
      this.updater = c3 || A3;
    }
    var F3 = E3.prototype = new D3();
    F3.constructor = E3;
    l4(F3, C3.prototype);
    F3.isPureReactComponent = true;
    var G4 = { current: null };
    var H3 = Object.prototype.hasOwnProperty;
    var I3 = { key: true, ref: true, __self: true, __source: true };
    function J2(a4, b3, c3) {
      var e2, d3 = {}, k3 = null, h3 = null;
      if (b3 != null)
        for (e2 in b3.ref !== void 0 && (h3 = b3.ref), b3.key !== void 0 && (k3 = "" + b3.key), b3)
          H3.call(b3, e2) && !I3.hasOwnProperty(e2) && (d3[e2] = b3[e2]);
      var g3 = arguments.length - 2;
      if (g3 === 1)
        d3.children = c3;
      else if (1 < g3) {
        for (var f4 = Array(g3), m3 = 0; m3 < g3; m3++)
          f4[m3] = arguments[m3 + 2];
        d3.children = f4;
      }
      if (a4 && a4.defaultProps)
        for (e2 in g3 = a4.defaultProps, g3)
          d3[e2] === void 0 && (d3[e2] = g3[e2]);
      return { $$typeof: n3, type: a4, key: k3, ref: h3, props: d3, _owner: G4.current };
    }
    function K(a4, b3) {
      return { $$typeof: n3, type: a4.type, key: b3, ref: a4.ref, props: a4.props, _owner: a4._owner };
    }
    function L4(a4) {
      return typeof a4 === "object" && a4 !== null && a4.$$typeof === n3;
    }
    function escape(a4) {
      var b3 = { "=": "=0", ":": "=2" };
      return "$" + a4.replace(/[=:]/g, function(a5) {
        return b3[a5];
      });
    }
    var M3 = /\/+/g;
    function N2(a4, b3) {
      return typeof a4 === "object" && a4 !== null && a4.key != null ? escape("" + a4.key) : b3.toString(36);
    }
    function O3(a4, b3, c3, e2, d3) {
      var k3 = typeof a4;
      if (k3 === "undefined" || k3 === "boolean")
        a4 = null;
      var h3 = false;
      if (a4 === null)
        h3 = true;
      else
        switch (k3) {
          case "string":
          case "number":
            h3 = true;
            break;
          case "object":
            switch (a4.$$typeof) {
              case n3:
              case p3:
                h3 = true;
            }
        }
      if (h3)
        return h3 = a4, d3 = d3(h3), a4 = e2 === "" ? "." + N2(h3, 0) : e2, Array.isArray(d3) ? (c3 = "", a4 != null && (c3 = a4.replace(M3, "$&/") + "/"), O3(d3, b3, c3, "", function(a5) {
          return a5;
        })) : d3 != null && (L4(d3) && (d3 = K(d3, c3 + (!d3.key || h3 && h3.key === d3.key ? "" : ("" + d3.key).replace(M3, "$&/") + "/") + a4)), b3.push(d3)), 1;
      h3 = 0;
      e2 = e2 === "" ? "." : e2 + ":";
      if (Array.isArray(a4))
        for (var g3 = 0; g3 < a4.length; g3++) {
          k3 = a4[g3];
          var f4 = e2 + N2(k3, g3);
          h3 += O3(k3, b3, c3, f4, d3);
        }
      else if (f4 = y3(a4), typeof f4 === "function")
        for (a4 = f4.call(a4), g3 = 0; !(k3 = a4.next()).done; )
          k3 = k3.value, f4 = e2 + N2(k3, g3++), h3 += O3(k3, b3, c3, f4, d3);
      else if (k3 === "object")
        throw b3 = "" + a4, Error(z3(31, b3 === "[object Object]" ? "object with keys {" + Object.keys(a4).join(", ") + "}" : b3));
      return h3;
    }
    function P3(a4, b3, c3) {
      if (a4 == null)
        return a4;
      var e2 = [], d3 = 0;
      O3(a4, e2, "", "", function(a5) {
        return b3.call(c3, a5, d3++);
      });
      return e2;
    }
    function Q2(a4) {
      if (a4._status === -1) {
        var b3 = a4._result;
        b3 = b3();
        a4._status = 0;
        a4._result = b3;
        b3.then(function(b4) {
          a4._status === 0 && (b4 = b4.default, a4._status = 1, a4._result = b4);
        }, function(b4) {
          a4._status === 0 && (a4._status = 2, a4._result = b4);
        });
      }
      if (a4._status === 1)
        return a4._result;
      throw a4._result;
    }
    var R3 = { current: null };
    function S3() {
      var a4 = R3.current;
      if (a4 === null)
        throw Error(z3(321));
      return a4;
    }
    var T3 = { ReactCurrentDispatcher: R3, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G4, IsSomeRendererActing: { current: false }, assign: l4 };
    exports2.Children = { map: P3, forEach: function(a4, b3, c3) {
      P3(a4, function() {
        b3.apply(this, arguments);
      }, c3);
    }, count: function(a4) {
      var b3 = 0;
      P3(a4, function() {
        b3++;
      });
      return b3;
    }, toArray: function(a4) {
      return P3(a4, function(a5) {
        return a5;
      }) || [];
    }, only: function(a4) {
      if (!L4(a4))
        throw Error(z3(143));
      return a4;
    } };
    exports2.Component = C3;
    exports2.PureComponent = E3;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T3;
    exports2.cloneElement = function(a4, b3, c3) {
      if (a4 === null || a4 === void 0)
        throw Error(z3(267, a4));
      var e2 = l4({}, a4.props), d3 = a4.key, k3 = a4.ref, h3 = a4._owner;
      if (b3 != null) {
        b3.ref !== void 0 && (k3 = b3.ref, h3 = G4.current);
        b3.key !== void 0 && (d3 = "" + b3.key);
        if (a4.type && a4.type.defaultProps)
          var g3 = a4.type.defaultProps;
        for (f4 in b3)
          H3.call(b3, f4) && !I3.hasOwnProperty(f4) && (e2[f4] = b3[f4] === void 0 && g3 !== void 0 ? g3[f4] : b3[f4]);
      }
      var f4 = arguments.length - 2;
      if (f4 === 1)
        e2.children = c3;
      else if (1 < f4) {
        g3 = Array(f4);
        for (var m3 = 0; m3 < f4; m3++)
          g3[m3] = arguments[m3 + 2];
        e2.children = g3;
      }
      return {
        $$typeof: n3,
        type: a4.type,
        key: d3,
        ref: k3,
        props: e2,
        _owner: h3
      };
    };
    exports2.createContext = function(a4, b3) {
      b3 === void 0 && (b3 = null);
      a4 = { $$typeof: r3, _calculateChangedBits: b3, _currentValue: a4, _currentValue2: a4, _threadCount: 0, Provider: null, Consumer: null };
      a4.Provider = { $$typeof: q3, _context: a4 };
      return a4.Consumer = a4;
    };
    exports2.createElement = J2;
    exports2.createFactory = function(a4) {
      var b3 = J2.bind(null, a4);
      b3.type = a4;
      return b3;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a4) {
      return { $$typeof: t3, render: a4 };
    };
    exports2.isValidElement = L4;
    exports2.lazy = function(a4) {
      return { $$typeof: v3, _payload: { _status: -1, _result: a4 }, _init: Q2 };
    };
    exports2.memo = function(a4, b3) {
      return { $$typeof: u3, type: a4, compare: b3 === void 0 ? null : b3 };
    };
    exports2.useCallback = function(a4, b3) {
      return S3().useCallback(a4, b3);
    };
    exports2.useContext = function(a4, b3) {
      return S3().useContext(a4, b3);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useEffect = function(a4, b3) {
      return S3().useEffect(a4, b3);
    };
    exports2.useImperativeHandle = function(a4, b3, c3) {
      return S3().useImperativeHandle(a4, b3, c3);
    };
    exports2.useLayoutEffect = function(a4, b3) {
      return S3().useLayoutEffect(a4, b3);
    };
    exports2.useMemo = function(a4, b3) {
      return S3().useMemo(a4, b3);
    };
    exports2.useReducer = function(a4, b3, c3) {
      return S3().useReducer(a4, b3, c3);
    };
    exports2.useRef = function(a4) {
      return S3().useRef(a4);
    };
    exports2.useState = function(a4) {
      return S3().useState(a4);
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
    var f4;
    var g3;
    var h3;
    var k3;
    if (typeof performance === "object" && typeof performance.now === "function") {
      l4 = performance;
      exports2.unstable_now = function() {
        return l4.now();
      };
    } else {
      p3 = Date, q3 = p3.now();
      exports2.unstable_now = function() {
        return p3.now() - q3;
      };
    }
    var l4;
    var p3;
    var q3;
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      t3 = null, u3 = null, w3 = function() {
        if (t3 !== null)
          try {
            var a4 = exports2.unstable_now();
            t3(true, a4);
            t3 = null;
          } catch (b3) {
            throw setTimeout(w3, 0), b3;
          }
      };
      f4 = function(a4) {
        t3 !== null ? setTimeout(f4, 0, a4) : (t3 = a4, setTimeout(w3, 0));
      };
      g3 = function(a4, b3) {
        u3 = setTimeout(a4, b3);
      };
      h3 = function() {
        clearTimeout(u3);
      };
      exports2.unstable_shouldYield = function() {
        return false;
      };
      k3 = exports2.unstable_forceFrameRate = function() {
      };
    } else {
      x3 = window.setTimeout, y3 = window.clearTimeout;
      if (typeof console !== "undefined") {
        z3 = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      A3 = false, B3 = null, C3 = -1, D3 = 5, E3 = 0;
      exports2.unstable_shouldYield = function() {
        return exports2.unstable_now() >= E3;
      };
      k3 = function() {
      };
      exports2.unstable_forceFrameRate = function(a4) {
        0 > a4 || 125 < a4 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D3 = 0 < a4 ? Math.floor(1e3 / a4) : 5;
      };
      F3 = new MessageChannel(), G4 = F3.port2;
      F3.port1.onmessage = function() {
        if (B3 !== null) {
          var a4 = exports2.unstable_now();
          E3 = a4 + D3;
          try {
            B3(true, a4) ? G4.postMessage(null) : (A3 = false, B3 = null);
          } catch (b3) {
            throw G4.postMessage(null), b3;
          }
        } else
          A3 = false;
      };
      f4 = function(a4) {
        B3 = a4;
        A3 || (A3 = true, G4.postMessage(null));
      };
      g3 = function(a4, b3) {
        C3 = x3(function() {
          a4(exports2.unstable_now());
        }, b3);
      };
      h3 = function() {
        y3(C3);
        C3 = -1;
      };
    }
    var t3;
    var u3;
    var w3;
    var x3;
    var y3;
    var z3;
    var A3;
    var B3;
    var C3;
    var D3;
    var E3;
    var F3;
    var G4;
    function H3(a4, b3) {
      var c3 = a4.length;
      a4.push(b3);
      a:
        for (; ; ) {
          var d3 = c3 - 1 >>> 1, e2 = a4[d3];
          if (e2 !== void 0 && 0 < I3(e2, b3))
            a4[d3] = b3, a4[c3] = e2, c3 = d3;
          else
            break a;
        }
    }
    function J2(a4) {
      a4 = a4[0];
      return a4 === void 0 ? null : a4;
    }
    function K(a4) {
      var b3 = a4[0];
      if (b3 !== void 0) {
        var c3 = a4.pop();
        if (c3 !== b3) {
          a4[0] = c3;
          a:
            for (var d3 = 0, e2 = a4.length; d3 < e2; ) {
              var m3 = 2 * (d3 + 1) - 1, n3 = a4[m3], v3 = m3 + 1, r3 = a4[v3];
              if (n3 !== void 0 && 0 > I3(n3, c3))
                r3 !== void 0 && 0 > I3(r3, n3) ? (a4[d3] = r3, a4[v3] = c3, d3 = v3) : (a4[d3] = n3, a4[m3] = c3, d3 = m3);
              else if (r3 !== void 0 && 0 > I3(r3, c3))
                a4[d3] = r3, a4[v3] = c3, d3 = v3;
              else
                break a;
            }
        }
        return b3;
      }
      return null;
    }
    function I3(a4, b3) {
      var c3 = a4.sortIndex - b3.sortIndex;
      return c3 !== 0 ? c3 : a4.id - b3.id;
    }
    var L4 = [];
    var M3 = [];
    var N2 = 1;
    var O3 = null;
    var P3 = 3;
    var Q2 = false;
    var R3 = false;
    var S3 = false;
    function T3(a4) {
      for (var b3 = J2(M3); b3 !== null; ) {
        if (b3.callback === null)
          K(M3);
        else if (b3.startTime <= a4)
          K(M3), b3.sortIndex = b3.expirationTime, H3(L4, b3);
        else
          break;
        b3 = J2(M3);
      }
    }
    function U3(a4) {
      S3 = false;
      T3(a4);
      if (!R3)
        if (J2(L4) !== null)
          R3 = true, f4(V5);
        else {
          var b3 = J2(M3);
          b3 !== null && g3(U3, b3.startTime - a4);
        }
    }
    function V5(a4, b3) {
      R3 = false;
      S3 && (S3 = false, h3());
      Q2 = true;
      var c3 = P3;
      try {
        T3(b3);
        for (O3 = J2(L4); O3 !== null && (!(O3.expirationTime > b3) || a4 && !exports2.unstable_shouldYield()); ) {
          var d3 = O3.callback;
          if (typeof d3 === "function") {
            O3.callback = null;
            P3 = O3.priorityLevel;
            var e2 = d3(O3.expirationTime <= b3);
            b3 = exports2.unstable_now();
            typeof e2 === "function" ? O3.callback = e2 : O3 === J2(L4) && K(L4);
            T3(b3);
          } else
            K(L4);
          O3 = J2(L4);
        }
        if (O3 !== null)
          var m3 = true;
        else {
          var n3 = J2(M3);
          n3 !== null && g3(U3, n3.startTime - b3);
          m3 = false;
        }
        return m3;
      } finally {
        O3 = null, P3 = c3, Q2 = false;
      }
    }
    var W4 = k3;
    exports2.unstable_IdlePriority = 5;
    exports2.unstable_ImmediatePriority = 1;
    exports2.unstable_LowPriority = 4;
    exports2.unstable_NormalPriority = 3;
    exports2.unstable_Profiling = null;
    exports2.unstable_UserBlockingPriority = 2;
    exports2.unstable_cancelCallback = function(a4) {
      a4.callback = null;
    };
    exports2.unstable_continueExecution = function() {
      R3 || Q2 || (R3 = true, f4(V5));
    };
    exports2.unstable_getCurrentPriorityLevel = function() {
      return P3;
    };
    exports2.unstable_getFirstCallbackNode = function() {
      return J2(L4);
    };
    exports2.unstable_next = function(a4) {
      switch (P3) {
        case 1:
        case 2:
        case 3:
          var b3 = 3;
          break;
        default:
          b3 = P3;
      }
      var c3 = P3;
      P3 = b3;
      try {
        return a4();
      } finally {
        P3 = c3;
      }
    };
    exports2.unstable_pauseExecution = function() {
    };
    exports2.unstable_requestPaint = W4;
    exports2.unstable_runWithPriority = function(a4, b3) {
      switch (a4) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a4 = 3;
      }
      var c3 = P3;
      P3 = a4;
      try {
        return b3();
      } finally {
        P3 = c3;
      }
    };
    exports2.unstable_scheduleCallback = function(a4, b3, c3) {
      var d3 = exports2.unstable_now();
      typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d3 + c3 : d3) : c3 = d3;
      switch (a4) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c3 + e2;
      a4 = { id: N2++, callback: b3, priorityLevel: a4, startTime: c3, expirationTime: e2, sortIndex: -1 };
      c3 > d3 ? (a4.sortIndex = c3, H3(M3, a4), J2(L4) === null && a4 === J2(M3) && (S3 ? h3() : S3 = true, g3(U3, c3 - d3))) : (a4.sortIndex = e2, H3(L4, a4), R3 || Q2 || (R3 = true, f4(V5)));
      return a4;
    };
    exports2.unstable_wrapCallback = function(a4) {
      var b3 = P3;
      return function() {
        var c3 = P3;
        P3 = b3;
        try {
          return a4.apply(this, arguments);
        } finally {
          P3 = c3;
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
    var m3 = require_object_assign();
    var r3 = require_scheduler();
    function y3(a4) {
      for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a4, c3 = 1; c3 < arguments.length; c3++)
        b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
      return "Minified React error #" + a4 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!aa)
      throw Error(y3(227));
    var ba = new Set();
    var ca = {};
    function da(a4, b3) {
      ea(a4, b3);
      ea(a4 + "Capture", b3);
    }
    function ea(a4, b3) {
      ca[a4] = b3;
      for (a4 = 0; a4 < b3.length; a4++)
        ba.add(b3[a4]);
    }
    var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = Object.prototype.hasOwnProperty;
    var ja = {};
    var ka = {};
    function la(a4) {
      if (ia.call(ka, a4))
        return true;
      if (ia.call(ja, a4))
        return false;
      if (ha.test(a4))
        return ka[a4] = true;
      ja[a4] = true;
      return false;
    }
    function ma(a4, b3, c3, d3) {
      if (c3 !== null && c3.type === 0)
        return false;
      switch (typeof b3) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d3)
            return false;
          if (c3 !== null)
            return !c3.acceptsBooleans;
          a4 = a4.toLowerCase().slice(0, 5);
          return a4 !== "data-" && a4 !== "aria-";
        default:
          return false;
      }
    }
    function na(a4, b3, c3, d3) {
      if (b3 === null || typeof b3 === "undefined" || ma(a4, b3, c3, d3))
        return true;
      if (d3)
        return false;
      if (c3 !== null)
        switch (c3.type) {
          case 3:
            return !b3;
          case 4:
            return b3 === false;
          case 5:
            return isNaN(b3);
          case 6:
            return isNaN(b3) || 1 > b3;
        }
      return false;
    }
    function B3(a4, b3, c3, d3, e2, f4, g3) {
      this.acceptsBooleans = b3 === 2 || b3 === 3 || b3 === 4;
      this.attributeName = d3;
      this.attributeNamespace = e2;
      this.mustUseProperty = c3;
      this.propertyName = a4;
      this.type = b3;
      this.sanitizeURL = f4;
      this.removeEmptyString = g3;
    }
    var D3 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a4) {
      D3[a4] = new B3(a4, 0, false, a4, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a4) {
      var b3 = a4[0];
      D3[b3] = new B3(b3, 1, false, a4[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a4) {
      D3[a4] = new B3(a4, 2, false, a4.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a4) {
      D3[a4] = new B3(a4, 2, false, a4, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a4) {
      D3[a4] = new B3(a4, 3, false, a4.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a4) {
      D3[a4] = new B3(a4, 3, true, a4, null, false, false);
    });
    ["capture", "download"].forEach(function(a4) {
      D3[a4] = new B3(a4, 4, false, a4, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a4) {
      D3[a4] = new B3(a4, 6, false, a4, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a4) {
      D3[a4] = new B3(a4, 5, false, a4.toLowerCase(), null, false, false);
    });
    var oa = /[\-:]([a-z])/g;
    function pa(a4) {
      return a4[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a4) {
      var b3 = a4.replace(oa, pa);
      D3[b3] = new B3(b3, 1, false, a4, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a4) {
      var b3 = a4.replace(oa, pa);
      D3[b3] = new B3(b3, 1, false, a4, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a4) {
      var b3 = a4.replace(oa, pa);
      D3[b3] = new B3(b3, 1, false, a4, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a4) {
      D3[a4] = new B3(a4, 1, false, a4.toLowerCase(), null, false, false);
    });
    D3.xlinkHref = new B3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a4) {
      D3[a4] = new B3(a4, 1, false, a4.toLowerCase(), null, true, true);
    });
    function qa(a4, b3, c3, d3) {
      var e2 = D3.hasOwnProperty(b3) ? D3[b3] : null;
      var f4 = e2 !== null ? e2.type === 0 : d3 ? false : !(2 < b3.length) || b3[0] !== "o" && b3[0] !== "O" || b3[1] !== "n" && b3[1] !== "N" ? false : true;
      f4 || (na(b3, c3, e2, d3) && (c3 = null), d3 || e2 === null ? la(b3) && (c3 === null ? a4.removeAttribute(b3) : a4.setAttribute(b3, "" + c3)) : e2.mustUseProperty ? a4[e2.propertyName] = c3 === null ? e2.type === 3 ? false : "" : c3 : (b3 = e2.attributeName, d3 = e2.attributeNamespace, c3 === null ? a4.removeAttribute(b3) : (e2 = e2.type, c3 = e2 === 3 || e2 === 4 && c3 === true ? "" : "" + c3, d3 ? a4.setAttributeNS(d3, b3, c3) : a4.setAttribute(b3, c3))));
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
      E3 = Symbol.for;
      sa = E3("react.element");
      ta = E3("react.portal");
      ua = E3("react.fragment");
      wa = E3("react.strict_mode");
      xa = E3("react.profiler");
      ya = E3("react.provider");
      za = E3("react.context");
      Aa = E3("react.forward_ref");
      Ba = E3("react.suspense");
      Ca = E3("react.suspense_list");
      Da = E3("react.memo");
      Ea = E3("react.lazy");
      Fa = E3("react.block");
      E3("react.scope");
      Ga = E3("react.opaque.id");
      Ha = E3("react.debug_trace_mode");
      Ia = E3("react.offscreen");
      Ja = E3("react.legacy_hidden");
    }
    var E3;
    var Ka = typeof Symbol === "function" && Symbol.iterator;
    function La(a4) {
      if (a4 === null || typeof a4 !== "object")
        return null;
      a4 = Ka && a4[Ka] || a4["@@iterator"];
      return typeof a4 === "function" ? a4 : null;
    }
    var Ma;
    function Na(a4) {
      if (Ma === void 0)
        try {
          throw Error();
        } catch (c3) {
          var b3 = c3.stack.trim().match(/\n( *(at )?)/);
          Ma = b3 && b3[1] || "";
        }
      return "\n" + Ma + a4;
    }
    var Oa = false;
    function Pa(a4, b3) {
      if (!a4 || Oa)
        return "";
      Oa = true;
      var c3 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b3)
          if (b3 = function() {
            throw Error();
          }, Object.defineProperty(b3.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(b3, []);
            } catch (k3) {
              var d3 = k3;
            }
            Reflect.construct(a4, [], b3);
          } else {
            try {
              b3.call();
            } catch (k3) {
              d3 = k3;
            }
            a4.call(b3.prototype);
          }
        else {
          try {
            throw Error();
          } catch (k3) {
            d3 = k3;
          }
          a4();
        }
      } catch (k3) {
        if (k3 && d3 && typeof k3.stack === "string") {
          for (var e2 = k3.stack.split("\n"), f4 = d3.stack.split("\n"), g3 = e2.length - 1, h3 = f4.length - 1; 1 <= g3 && 0 <= h3 && e2[g3] !== f4[h3]; )
            h3--;
          for (; 1 <= g3 && 0 <= h3; g3--, h3--)
            if (e2[g3] !== f4[h3]) {
              if (g3 !== 1 || h3 !== 1) {
                do
                  if (g3--, h3--, 0 > h3 || e2[g3] !== f4[h3])
                    return "\n" + e2[g3].replace(" at new ", " at ");
                while (1 <= g3 && 0 <= h3);
              }
              break;
            }
        }
      } finally {
        Oa = false, Error.prepareStackTrace = c3;
      }
      return (a4 = a4 ? a4.displayName || a4.name : "") ? Na(a4) : "";
    }
    function Qa(a4) {
      switch (a4.tag) {
        case 5:
          return Na(a4.type);
        case 16:
          return Na("Lazy");
        case 13:
          return Na("Suspense");
        case 19:
          return Na("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a4 = Pa(a4.type, false), a4;
        case 11:
          return a4 = Pa(a4.type.render, false), a4;
        case 22:
          return a4 = Pa(a4.type._render, false), a4;
        case 1:
          return a4 = Pa(a4.type, true), a4;
        default:
          return "";
      }
    }
    function Ra(a4) {
      if (a4 == null)
        return null;
      if (typeof a4 === "function")
        return a4.displayName || a4.name || null;
      if (typeof a4 === "string")
        return a4;
      switch (a4) {
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
      if (typeof a4 === "object")
        switch (a4.$$typeof) {
          case za:
            return (a4.displayName || "Context") + ".Consumer";
          case ya:
            return (a4._context.displayName || "Context") + ".Provider";
          case Aa:
            var b3 = a4.render;
            b3 = b3.displayName || b3.name || "";
            return a4.displayName || (b3 !== "" ? "ForwardRef(" + b3 + ")" : "ForwardRef");
          case Da:
            return Ra(a4.type);
          case Fa:
            return Ra(a4._render);
          case Ea:
            b3 = a4._payload;
            a4 = a4._init;
            try {
              return Ra(a4(b3));
            } catch (c3) {
            }
        }
      return null;
    }
    function Sa(a4) {
      switch (typeof a4) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return a4;
        default:
          return "";
      }
    }
    function Ta(a4) {
      var b3 = a4.type;
      return (a4 = a4.nodeName) && a4.toLowerCase() === "input" && (b3 === "checkbox" || b3 === "radio");
    }
    function Ua(a4) {
      var b3 = Ta(a4) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a4.constructor.prototype, b3), d3 = "" + a4[b3];
      if (!a4.hasOwnProperty(b3) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
        var e2 = c3.get, f4 = c3.set;
        Object.defineProperty(a4, b3, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a5) {
          d3 = "" + a5;
          f4.call(this, a5);
        } });
        Object.defineProperty(a4, b3, { enumerable: c3.enumerable });
        return { getValue: function() {
          return d3;
        }, setValue: function(a5) {
          d3 = "" + a5;
        }, stopTracking: function() {
          a4._valueTracker = null;
          delete a4[b3];
        } };
      }
    }
    function Va(a4) {
      a4._valueTracker || (a4._valueTracker = Ua(a4));
    }
    function Wa(a4) {
      if (!a4)
        return false;
      var b3 = a4._valueTracker;
      if (!b3)
        return true;
      var c3 = b3.getValue();
      var d3 = "";
      a4 && (d3 = Ta(a4) ? a4.checked ? "true" : "false" : a4.value);
      a4 = d3;
      return a4 !== c3 ? (b3.setValue(a4), true) : false;
    }
    function Xa(a4) {
      a4 = a4 || (typeof document !== "undefined" ? document : void 0);
      if (typeof a4 === "undefined")
        return null;
      try {
        return a4.activeElement || a4.body;
      } catch (b3) {
        return a4.body;
      }
    }
    function Ya(a4, b3) {
      var c3 = b3.checked;
      return m3({}, b3, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c3 != null ? c3 : a4._wrapperState.initialChecked });
    }
    function Za(a4, b3) {
      var c3 = b3.defaultValue == null ? "" : b3.defaultValue, d3 = b3.checked != null ? b3.checked : b3.defaultChecked;
      c3 = Sa(b3.value != null ? b3.value : c3);
      a4._wrapperState = { initialChecked: d3, initialValue: c3, controlled: b3.type === "checkbox" || b3.type === "radio" ? b3.checked != null : b3.value != null };
    }
    function $a(a4, b3) {
      b3 = b3.checked;
      b3 != null && qa(a4, "checked", b3, false);
    }
    function ab(a4, b3) {
      $a(a4, b3);
      var c3 = Sa(b3.value), d3 = b3.type;
      if (c3 != null)
        if (d3 === "number") {
          if (c3 === 0 && a4.value === "" || a4.value != c3)
            a4.value = "" + c3;
        } else
          a4.value !== "" + c3 && (a4.value = "" + c3);
      else if (d3 === "submit" || d3 === "reset") {
        a4.removeAttribute("value");
        return;
      }
      b3.hasOwnProperty("value") ? bb(a4, b3.type, c3) : b3.hasOwnProperty("defaultValue") && bb(a4, b3.type, Sa(b3.defaultValue));
      b3.checked == null && b3.defaultChecked != null && (a4.defaultChecked = !!b3.defaultChecked);
    }
    function cb(a4, b3, c3) {
      if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
        var d3 = b3.type;
        if (!(d3 !== "submit" && d3 !== "reset" || b3.value !== void 0 && b3.value !== null))
          return;
        b3 = "" + a4._wrapperState.initialValue;
        c3 || b3 === a4.value || (a4.value = b3);
        a4.defaultValue = b3;
      }
      c3 = a4.name;
      c3 !== "" && (a4.name = "");
      a4.defaultChecked = !!a4._wrapperState.initialChecked;
      c3 !== "" && (a4.name = c3);
    }
    function bb(a4, b3, c3) {
      if (b3 !== "number" || Xa(a4.ownerDocument) !== a4)
        c3 == null ? a4.defaultValue = "" + a4._wrapperState.initialValue : a4.defaultValue !== "" + c3 && (a4.defaultValue = "" + c3);
    }
    function db(a4) {
      var b3 = "";
      aa.Children.forEach(a4, function(a5) {
        a5 != null && (b3 += a5);
      });
      return b3;
    }
    function eb(a4, b3) {
      a4 = m3({ children: void 0 }, b3);
      if (b3 = db(b3.children))
        a4.children = b3;
      return a4;
    }
    function fb(a4, b3, c3, d3) {
      a4 = a4.options;
      if (b3) {
        b3 = {};
        for (var e2 = 0; e2 < c3.length; e2++)
          b3["$" + c3[e2]] = true;
        for (c3 = 0; c3 < a4.length; c3++)
          e2 = b3.hasOwnProperty("$" + a4[c3].value), a4[c3].selected !== e2 && (a4[c3].selected = e2), e2 && d3 && (a4[c3].defaultSelected = true);
      } else {
        c3 = "" + Sa(c3);
        b3 = null;
        for (e2 = 0; e2 < a4.length; e2++) {
          if (a4[e2].value === c3) {
            a4[e2].selected = true;
            d3 && (a4[e2].defaultSelected = true);
            return;
          }
          b3 !== null || a4[e2].disabled || (b3 = a4[e2]);
        }
        b3 !== null && (b3.selected = true);
      }
    }
    function gb(a4, b3) {
      if (b3.dangerouslySetInnerHTML != null)
        throw Error(y3(91));
      return m3({}, b3, { value: void 0, defaultValue: void 0, children: "" + a4._wrapperState.initialValue });
    }
    function hb(a4, b3) {
      var c3 = b3.value;
      if (c3 == null) {
        c3 = b3.children;
        b3 = b3.defaultValue;
        if (c3 != null) {
          if (b3 != null)
            throw Error(y3(92));
          if (Array.isArray(c3)) {
            if (!(1 >= c3.length))
              throw Error(y3(93));
            c3 = c3[0];
          }
          b3 = c3;
        }
        b3 == null && (b3 = "");
        c3 = b3;
      }
      a4._wrapperState = { initialValue: Sa(c3) };
    }
    function ib(a4, b3) {
      var c3 = Sa(b3.value), d3 = Sa(b3.defaultValue);
      c3 != null && (c3 = "" + c3, c3 !== a4.value && (a4.value = c3), b3.defaultValue == null && a4.defaultValue !== c3 && (a4.defaultValue = c3));
      d3 != null && (a4.defaultValue = "" + d3);
    }
    function jb(a4) {
      var b3 = a4.textContent;
      b3 === a4._wrapperState.initialValue && b3 !== "" && b3 !== null && (a4.value = b3);
    }
    var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
    function lb(a4) {
      switch (a4) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function mb(a4, b3) {
      return a4 == null || a4 === "http://www.w3.org/1999/xhtml" ? lb(b3) : a4 === "http://www.w3.org/2000/svg" && b3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a4;
    }
    var nb;
    var ob = function(a4) {
      return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b3, c3, d3, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a4(b3, c3, d3, e2);
        });
      } : a4;
    }(function(a4, b3) {
      if (a4.namespaceURI !== kb.svg || "innerHTML" in a4)
        a4.innerHTML = b3;
      else {
        nb = nb || document.createElement("div");
        nb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
        for (b3 = nb.firstChild; a4.firstChild; )
          a4.removeChild(a4.firstChild);
        for (; b3.firstChild; )
          a4.appendChild(b3.firstChild);
      }
    });
    function pb(a4, b3) {
      if (b3) {
        var c3 = a4.firstChild;
        if (c3 && c3 === a4.lastChild && c3.nodeType === 3) {
          c3.nodeValue = b3;
          return;
        }
      }
      a4.textContent = b3;
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
    Object.keys(qb).forEach(function(a4) {
      rb.forEach(function(b3) {
        b3 = b3 + a4.charAt(0).toUpperCase() + a4.substring(1);
        qb[b3] = qb[a4];
      });
    });
    function sb(a4, b3, c3) {
      return b3 == null || typeof b3 === "boolean" || b3 === "" ? "" : c3 || typeof b3 !== "number" || b3 === 0 || qb.hasOwnProperty(a4) && qb[a4] ? ("" + b3).trim() : b3 + "px";
    }
    function tb(a4, b3) {
      a4 = a4.style;
      for (var c3 in b3)
        if (b3.hasOwnProperty(c3)) {
          var d3 = c3.indexOf("--") === 0, e2 = sb(c3, b3[c3], d3);
          c3 === "float" && (c3 = "cssFloat");
          d3 ? a4.setProperty(c3, e2) : a4[c3] = e2;
        }
    }
    var ub = m3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function vb(a4, b3) {
      if (b3) {
        if (ub[a4] && (b3.children != null || b3.dangerouslySetInnerHTML != null))
          throw Error(y3(137, a4));
        if (b3.dangerouslySetInnerHTML != null) {
          if (b3.children != null)
            throw Error(y3(60));
          if (!(typeof b3.dangerouslySetInnerHTML === "object" && "__html" in b3.dangerouslySetInnerHTML))
            throw Error(y3(61));
        }
        if (b3.style != null && typeof b3.style !== "object")
          throw Error(y3(62));
      }
    }
    function wb(a4, b3) {
      if (a4.indexOf("-") === -1)
        return typeof b3.is === "string";
      switch (a4) {
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
    function xb(a4) {
      a4 = a4.target || a4.srcElement || window;
      a4.correspondingUseElement && (a4 = a4.correspondingUseElement);
      return a4.nodeType === 3 ? a4.parentNode : a4;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a4) {
      if (a4 = Cb(a4)) {
        if (typeof yb !== "function")
          throw Error(y3(280));
        var b3 = a4.stateNode;
        b3 && (b3 = Db(b3), yb(a4.stateNode, a4.type, b3));
      }
    }
    function Eb(a4) {
      zb ? Ab ? Ab.push(a4) : Ab = [a4] : zb = a4;
    }
    function Fb() {
      if (zb) {
        var a4 = zb, b3 = Ab;
        Ab = zb = null;
        Bb(a4);
        if (b3)
          for (a4 = 0; a4 < b3.length; a4++)
            Bb(b3[a4]);
      }
    }
    function Gb(a4, b3) {
      return a4(b3);
    }
    function Hb(a4, b3, c3, d3, e2) {
      return a4(b3, c3, d3, e2);
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
    function Nb(a4, b3, c3) {
      if (Lb)
        return a4(b3, c3);
      Lb = true;
      try {
        return Jb(a4, b3, c3);
      } finally {
        Lb = false, Mb();
      }
    }
    function Ob(a4, b3) {
      var c3 = a4.stateNode;
      if (c3 === null)
        return null;
      var d3 = Db(c3);
      if (d3 === null)
        return null;
      c3 = d3[b3];
      a:
        switch (b3) {
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
            (d3 = !d3.disabled) || (a4 = a4.type, d3 = !(a4 === "button" || a4 === "input" || a4 === "select" || a4 === "textarea"));
            a4 = !d3;
            break a;
          default:
            a4 = false;
        }
      if (a4)
        return null;
      if (c3 && typeof c3 !== "function")
        throw Error(y3(231, b3, typeof c3));
      return c3;
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
      } catch (a4) {
        Pb = false;
      }
    var Qb;
    function Rb(a4, b3, c3, d3, e2, f4, g3, h3, k3) {
      var l4 = Array.prototype.slice.call(arguments, 3);
      try {
        b3.apply(c3, l4);
      } catch (n3) {
        this.onError(n3);
      }
    }
    var Sb = false;
    var Tb = null;
    var Ub = false;
    var Vb = null;
    var Wb = { onError: function(a4) {
      Sb = true;
      Tb = a4;
    } };
    function Xb(a4, b3, c3, d3, e2, f4, g3, h3, k3) {
      Sb = false;
      Tb = null;
      Rb.apply(Wb, arguments);
    }
    function Yb(a4, b3, c3, d3, e2, f4, g3, h3, k3) {
      Xb.apply(this, arguments);
      if (Sb) {
        if (Sb) {
          var l4 = Tb;
          Sb = false;
          Tb = null;
        } else
          throw Error(y3(198));
        Ub || (Ub = true, Vb = l4);
      }
    }
    function Zb(a4) {
      var b3 = a4, c3 = a4;
      if (a4.alternate)
        for (; b3.return; )
          b3 = b3.return;
      else {
        a4 = b3;
        do
          b3 = a4, (b3.flags & 1026) !== 0 && (c3 = b3.return), a4 = b3.return;
        while (a4);
      }
      return b3.tag === 3 ? c3 : null;
    }
    function $b(a4) {
      if (a4.tag === 13) {
        var b3 = a4.memoizedState;
        b3 === null && (a4 = a4.alternate, a4 !== null && (b3 = a4.memoizedState));
        if (b3 !== null)
          return b3.dehydrated;
      }
      return null;
    }
    function ac(a4) {
      if (Zb(a4) !== a4)
        throw Error(y3(188));
    }
    function bc(a4) {
      var b3 = a4.alternate;
      if (!b3) {
        b3 = Zb(a4);
        if (b3 === null)
          throw Error(y3(188));
        return b3 !== a4 ? null : a4;
      }
      for (var c3 = a4, d3 = b3; ; ) {
        var e2 = c3.return;
        if (e2 === null)
          break;
        var f4 = e2.alternate;
        if (f4 === null) {
          d3 = e2.return;
          if (d3 !== null) {
            c3 = d3;
            continue;
          }
          break;
        }
        if (e2.child === f4.child) {
          for (f4 = e2.child; f4; ) {
            if (f4 === c3)
              return ac(e2), a4;
            if (f4 === d3)
              return ac(e2), b3;
            f4 = f4.sibling;
          }
          throw Error(y3(188));
        }
        if (c3.return !== d3.return)
          c3 = e2, d3 = f4;
        else {
          for (var g3 = false, h3 = e2.child; h3; ) {
            if (h3 === c3) {
              g3 = true;
              c3 = e2;
              d3 = f4;
              break;
            }
            if (h3 === d3) {
              g3 = true;
              d3 = e2;
              c3 = f4;
              break;
            }
            h3 = h3.sibling;
          }
          if (!g3) {
            for (h3 = f4.child; h3; ) {
              if (h3 === c3) {
                g3 = true;
                c3 = f4;
                d3 = e2;
                break;
              }
              if (h3 === d3) {
                g3 = true;
                d3 = f4;
                c3 = e2;
                break;
              }
              h3 = h3.sibling;
            }
            if (!g3)
              throw Error(y3(189));
          }
        }
        if (c3.alternate !== d3)
          throw Error(y3(190));
      }
      if (c3.tag !== 3)
        throw Error(y3(188));
      return c3.stateNode.current === c3 ? a4 : b3;
    }
    function cc(a4) {
      a4 = bc(a4);
      if (!a4)
        return null;
      for (var b3 = a4; ; ) {
        if (b3.tag === 5 || b3.tag === 6)
          return b3;
        if (b3.child)
          b3.child.return = b3, b3 = b3.child;
        else {
          if (b3 === a4)
            break;
          for (; !b3.sibling; ) {
            if (!b3.return || b3.return === a4)
              return null;
            b3 = b3.return;
          }
          b3.sibling.return = b3.return;
          b3 = b3.sibling;
        }
      }
      return null;
    }
    function dc(a4, b3) {
      for (var c3 = a4.alternate; b3 !== null; ) {
        if (b3 === a4 || b3 === c3)
          return true;
        b3 = b3.return;
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
    function rc(a4, b3, c3, d3, e2) {
      return { blockedOn: a4, domEventName: b3, eventSystemFlags: c3 | 16, nativeEvent: e2, targetContainers: [d3] };
    }
    function sc(a4, b3) {
      switch (a4) {
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
          nc.delete(b3.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          oc.delete(b3.pointerId);
      }
    }
    function tc(a4, b3, c3, d3, e2, f4) {
      if (a4 === null || a4.nativeEvent !== f4)
        return a4 = rc(b3, c3, d3, e2, f4), b3 !== null && (b3 = Cb(b3), b3 !== null && fc(b3)), a4;
      a4.eventSystemFlags |= d3;
      b3 = a4.targetContainers;
      e2 !== null && b3.indexOf(e2) === -1 && b3.push(e2);
      return a4;
    }
    function uc(a4, b3, c3, d3, e2) {
      switch (b3) {
        case "focusin":
          return kc = tc(kc, a4, b3, c3, d3, e2), true;
        case "dragenter":
          return lc = tc(lc, a4, b3, c3, d3, e2), true;
        case "mouseover":
          return mc = tc(mc, a4, b3, c3, d3, e2), true;
        case "pointerover":
          var f4 = e2.pointerId;
          nc.set(f4, tc(nc.get(f4) || null, a4, b3, c3, d3, e2));
          return true;
        case "gotpointercapture":
          return f4 = e2.pointerId, oc.set(f4, tc(oc.get(f4) || null, a4, b3, c3, d3, e2)), true;
      }
      return false;
    }
    function vc(a4) {
      var b3 = wc(a4.target);
      if (b3 !== null) {
        var c3 = Zb(b3);
        if (c3 !== null) {
          if (b3 = c3.tag, b3 === 13) {
            if (b3 = $b(c3), b3 !== null) {
              a4.blockedOn = b3;
              hc(a4.lanePriority, function() {
                r3.unstable_runWithPriority(a4.priority, function() {
                  gc(c3);
                });
              });
              return;
            }
          } else if (b3 === 3 && c3.stateNode.hydrate) {
            a4.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a4.blockedOn = null;
    }
    function xc(a4) {
      if (a4.blockedOn !== null)
        return false;
      for (var b3 = a4.targetContainers; 0 < b3.length; ) {
        var c3 = yc(a4.domEventName, a4.eventSystemFlags, b3[0], a4.nativeEvent);
        if (c3 !== null)
          return b3 = Cb(c3), b3 !== null && fc(b3), a4.blockedOn = c3, false;
        b3.shift();
      }
      return true;
    }
    function zc(a4, b3, c3) {
      xc(a4) && c3.delete(b3);
    }
    function Ac() {
      for (ic = false; 0 < jc.length; ) {
        var a4 = jc[0];
        if (a4.blockedOn !== null) {
          a4 = Cb(a4.blockedOn);
          a4 !== null && ec(a4);
          break;
        }
        for (var b3 = a4.targetContainers; 0 < b3.length; ) {
          var c3 = yc(a4.domEventName, a4.eventSystemFlags, b3[0], a4.nativeEvent);
          if (c3 !== null) {
            a4.blockedOn = c3;
            break;
          }
          b3.shift();
        }
        a4.blockedOn === null && jc.shift();
      }
      kc !== null && xc(kc) && (kc = null);
      lc !== null && xc(lc) && (lc = null);
      mc !== null && xc(mc) && (mc = null);
      nc.forEach(zc);
      oc.forEach(zc);
    }
    function Bc(a4, b3) {
      a4.blockedOn === b3 && (a4.blockedOn = null, ic || (ic = true, r3.unstable_scheduleCallback(r3.unstable_NormalPriority, Ac)));
    }
    function Cc(a4) {
      function b3(b4) {
        return Bc(b4, a4);
      }
      if (0 < jc.length) {
        Bc(jc[0], a4);
        for (var c3 = 1; c3 < jc.length; c3++) {
          var d3 = jc[c3];
          d3.blockedOn === a4 && (d3.blockedOn = null);
        }
      }
      kc !== null && Bc(kc, a4);
      lc !== null && Bc(lc, a4);
      mc !== null && Bc(mc, a4);
      nc.forEach(b3);
      oc.forEach(b3);
      for (c3 = 0; c3 < pc.length; c3++)
        d3 = pc[c3], d3.blockedOn === a4 && (d3.blockedOn = null);
      for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
        vc(c3), c3.blockedOn === null && pc.shift();
    }
    function Dc(a4, b3) {
      var c3 = {};
      c3[a4.toLowerCase()] = b3.toLowerCase();
      c3["Webkit" + a4] = "webkit" + b3;
      c3["Moz" + a4] = "moz" + b3;
      return c3;
    }
    var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") };
    var Fc = {};
    var Gc = {};
    fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
    function Hc(a4) {
      if (Fc[a4])
        return Fc[a4];
      if (!Ec[a4])
        return a4;
      var b3 = Ec[a4], c3;
      for (c3 in b3)
        if (b3.hasOwnProperty(c3) && c3 in Gc)
          return Fc[a4] = b3[c3];
      return a4;
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
    function Pc(a4, b3) {
      for (var c3 = 0; c3 < a4.length; c3 += 2) {
        var d3 = a4[c3], e2 = a4[c3 + 1];
        e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
        Nc.set(d3, b3);
        Mc.set(d3, e2);
        da(e2, [d3]);
      }
    }
    var Qc = r3.unstable_now;
    Qc();
    var F3 = 8;
    function Rc(a4) {
      if ((1 & a4) !== 0)
        return F3 = 15, 1;
      if ((2 & a4) !== 0)
        return F3 = 14, 2;
      if ((4 & a4) !== 0)
        return F3 = 13, 4;
      var b3 = 24 & a4;
      if (b3 !== 0)
        return F3 = 12, b3;
      if ((a4 & 32) !== 0)
        return F3 = 11, 32;
      b3 = 192 & a4;
      if (b3 !== 0)
        return F3 = 10, b3;
      if ((a4 & 256) !== 0)
        return F3 = 9, 256;
      b3 = 3584 & a4;
      if (b3 !== 0)
        return F3 = 8, b3;
      if ((a4 & 4096) !== 0)
        return F3 = 7, 4096;
      b3 = 4186112 & a4;
      if (b3 !== 0)
        return F3 = 6, b3;
      b3 = 62914560 & a4;
      if (b3 !== 0)
        return F3 = 5, b3;
      if (a4 & 67108864)
        return F3 = 4, 67108864;
      if ((a4 & 134217728) !== 0)
        return F3 = 3, 134217728;
      b3 = 805306368 & a4;
      if (b3 !== 0)
        return F3 = 2, b3;
      if ((1073741824 & a4) !== 0)
        return F3 = 1, 1073741824;
      F3 = 8;
      return a4;
    }
    function Sc(a4) {
      switch (a4) {
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
    function Tc(a4) {
      switch (a4) {
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
          throw Error(y3(358, a4));
      }
    }
    function Uc(a4, b3) {
      var c3 = a4.pendingLanes;
      if (c3 === 0)
        return F3 = 0;
      var d3 = 0, e2 = 0, f4 = a4.expiredLanes, g3 = a4.suspendedLanes, h3 = a4.pingedLanes;
      if (f4 !== 0)
        d3 = f4, e2 = F3 = 15;
      else if (f4 = c3 & 134217727, f4 !== 0) {
        var k3 = f4 & ~g3;
        k3 !== 0 ? (d3 = Rc(k3), e2 = F3) : (h3 &= f4, h3 !== 0 && (d3 = Rc(h3), e2 = F3));
      } else
        f4 = c3 & ~g3, f4 !== 0 ? (d3 = Rc(f4), e2 = F3) : h3 !== 0 && (d3 = Rc(h3), e2 = F3);
      if (d3 === 0)
        return 0;
      d3 = 31 - Vc(d3);
      d3 = c3 & ((0 > d3 ? 0 : 1 << d3) << 1) - 1;
      if (b3 !== 0 && b3 !== d3 && (b3 & g3) === 0) {
        Rc(b3);
        if (e2 <= F3)
          return b3;
        F3 = e2;
      }
      b3 = a4.entangledLanes;
      if (b3 !== 0)
        for (a4 = a4.entanglements, b3 &= d3; 0 < b3; )
          c3 = 31 - Vc(b3), e2 = 1 << c3, d3 |= a4[c3], b3 &= ~e2;
      return d3;
    }
    function Wc(a4) {
      a4 = a4.pendingLanes & -1073741825;
      return a4 !== 0 ? a4 : a4 & 1073741824 ? 1073741824 : 0;
    }
    function Xc(a4, b3) {
      switch (a4) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return a4 = Yc(24 & ~b3), a4 === 0 ? Xc(10, b3) : a4;
        case 10:
          return a4 = Yc(192 & ~b3), a4 === 0 ? Xc(8, b3) : a4;
        case 8:
          return a4 = Yc(3584 & ~b3), a4 === 0 && (a4 = Yc(4186112 & ~b3), a4 === 0 && (a4 = 512)), a4;
        case 2:
          return b3 = Yc(805306368 & ~b3), b3 === 0 && (b3 = 268435456), b3;
      }
      throw Error(y3(358, a4));
    }
    function Yc(a4) {
      return a4 & -a4;
    }
    function Zc(a4) {
      for (var b3 = [], c3 = 0; 31 > c3; c3++)
        b3.push(a4);
      return b3;
    }
    function $c(a4, b3, c3) {
      a4.pendingLanes |= b3;
      var d3 = b3 - 1;
      a4.suspendedLanes &= d3;
      a4.pingedLanes &= d3;
      a4 = a4.eventTimes;
      b3 = 31 - Vc(b3);
      a4[b3] = c3;
    }
    var Vc = Math.clz32 ? Math.clz32 : ad;
    var bd = Math.log;
    var cd = Math.LN2;
    function ad(a4) {
      return a4 === 0 ? 32 : 31 - (bd(a4) / cd | 0) | 0;
    }
    var dd = r3.unstable_UserBlockingPriority;
    var ed = r3.unstable_runWithPriority;
    var fd = true;
    function gd(a4, b3, c3, d3) {
      Kb || Ib();
      var e2 = hd, f4 = Kb;
      Kb = true;
      try {
        Hb(e2, a4, b3, c3, d3);
      } finally {
        (Kb = f4) || Mb();
      }
    }
    function id(a4, b3, c3, d3) {
      ed(dd, hd.bind(null, a4, b3, c3, d3));
    }
    function hd(a4, b3, c3, d3) {
      if (fd) {
        var e2;
        if ((e2 = (b3 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a4))
          a4 = rc(null, a4, b3, c3, d3), jc.push(a4);
        else {
          var f4 = yc(a4, b3, c3, d3);
          if (f4 === null)
            e2 && sc(a4, d3);
          else {
            if (e2) {
              if (-1 < qc.indexOf(a4)) {
                a4 = rc(f4, a4, b3, c3, d3);
                jc.push(a4);
                return;
              }
              if (uc(f4, a4, b3, c3, d3))
                return;
              sc(a4, d3);
            }
            jd(a4, b3, d3, null, c3);
          }
        }
      }
    }
    function yc(a4, b3, c3, d3) {
      var e2 = xb(d3);
      e2 = wc(e2);
      if (e2 !== null) {
        var f4 = Zb(e2);
        if (f4 === null)
          e2 = null;
        else {
          var g3 = f4.tag;
          if (g3 === 13) {
            e2 = $b(f4);
            if (e2 !== null)
              return e2;
            e2 = null;
          } else if (g3 === 3) {
            if (f4.stateNode.hydrate)
              return f4.tag === 3 ? f4.stateNode.containerInfo : null;
            e2 = null;
          } else
            f4 !== e2 && (e2 = null);
        }
      }
      jd(a4, b3, d3, e2, c3);
      return null;
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md)
        return md;
      var a4, b3 = ld, c3 = b3.length, d3, e2 = "value" in kd ? kd.value : kd.textContent, f4 = e2.length;
      for (a4 = 0; a4 < c3 && b3[a4] === e2[a4]; a4++)
        ;
      var g3 = c3 - a4;
      for (d3 = 1; d3 <= g3 && b3[c3 - d3] === e2[f4 - d3]; d3++)
        ;
      return md = e2.slice(a4, 1 < d3 ? 1 - d3 : void 0);
    }
    function od(a4) {
      var b3 = a4.keyCode;
      "charCode" in a4 ? (a4 = a4.charCode, a4 === 0 && b3 === 13 && (a4 = 13)) : a4 = b3;
      a4 === 10 && (a4 = 13);
      return 32 <= a4 || a4 === 13 ? a4 : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a4) {
      function b3(b4, d3, e2, f4, g3) {
        this._reactName = b4;
        this._targetInst = e2;
        this.type = d3;
        this.nativeEvent = f4;
        this.target = g3;
        this.currentTarget = null;
        for (var c3 in a4)
          a4.hasOwnProperty(c3) && (b4 = a4[c3], this[c3] = b4 ? b4(f4) : f4[c3]);
        this.isDefaultPrevented = (f4.defaultPrevented != null ? f4.defaultPrevented : f4.returnValue === false) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      m3(b3.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a5 = this.nativeEvent;
        a5 && (a5.preventDefault ? a5.preventDefault() : typeof a5.returnValue !== "unknown" && (a5.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a5 = this.nativeEvent;
        a5 && (a5.stopPropagation ? a5.stopPropagation() : typeof a5.cancelBubble !== "unknown" && (a5.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b3;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a4) {
      return a4.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = m3({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = m3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a4) {
      return a4.relatedTarget === void 0 ? a4.fromElement === a4.srcElement ? a4.toElement : a4.fromElement : a4.relatedTarget;
    }, movementX: function(a4) {
      if ("movementX" in a4)
        return a4.movementX;
      a4 !== yd && (yd && a4.type === "mousemove" ? (wd = a4.screenX - yd.screenX, xd = a4.screenY - yd.screenY) : xd = wd = 0, yd = a4);
      return wd;
    }, movementY: function(a4) {
      return "movementY" in a4 ? a4.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = m3({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = m3({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = m3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = m3({}, sd, { clipboardData: function(a4) {
      return "clipboardData" in a4 ? a4.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = m3({}, sd, { data: 0 });
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
    function Pd(a4) {
      var b3 = this.nativeEvent;
      return b3.getModifierState ? b3.getModifierState(a4) : (a4 = Od[a4]) ? !!b3[a4] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = m3({}, ud, { key: function(a4) {
      if (a4.key) {
        var b3 = Md[a4.key] || a4.key;
        if (b3 !== "Unidentified")
          return b3;
      }
      return a4.type === "keypress" ? (a4 = od(a4), a4 === 13 ? "Enter" : String.fromCharCode(a4)) : a4.type === "keydown" || a4.type === "keyup" ? Nd[a4.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a4) {
      return a4.type === "keypress" ? od(a4) : 0;
    }, keyCode: function(a4) {
      return a4.type === "keydown" || a4.type === "keyup" ? a4.keyCode : 0;
    }, which: function(a4) {
      return a4.type === "keypress" ? od(a4) : a4.type === "keydown" || a4.type === "keyup" ? a4.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = m3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = m3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = m3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = m3({}, Ad, {
      deltaX: function(a4) {
        return "deltaX" in a4 ? a4.deltaX : "wheelDeltaX" in a4 ? -a4.wheelDeltaX : 0;
      },
      deltaY: function(a4) {
        return "deltaY" in a4 ? a4.deltaY : "wheelDeltaY" in a4 ? -a4.wheelDeltaY : "wheelDelta" in a4 ? -a4.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = fa && "CompositionEvent" in window;
    var be2 = null;
    fa && "documentMode" in document && (be2 = document.documentMode);
    var ce2 = fa && "TextEvent" in window && !be2;
    var de = fa && (!ae || be2 && 8 < be2 && 11 >= be2);
    var ee = String.fromCharCode(32);
    var fe2 = false;
    function ge2(a4, b3) {
      switch (a4) {
        case "keyup":
          return $d.indexOf(b3.keyCode) !== -1;
        case "keydown":
          return b3.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a4) {
      a4 = a4.detail;
      return typeof a4 === "object" && "data" in a4 ? a4.data : null;
    }
    var ie2 = false;
    function je(a4, b3) {
      switch (a4) {
        case "compositionend":
          return he(b3);
        case "keypress":
          if (b3.which !== 32)
            return null;
          fe2 = true;
          return ee;
        case "textInput":
          return a4 = b3.data, a4 === ee && fe2 ? null : a4;
        default:
          return null;
      }
    }
    function ke(a4, b3) {
      if (ie2)
        return a4 === "compositionend" || !ae && ge2(a4, b3) ? (a4 = nd(), md = ld = kd = null, ie2 = false, a4) : null;
      switch (a4) {
        case "paste":
          return null;
        case "keypress":
          if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
            if (b3.char && 1 < b3.char.length)
              return b3.char;
            if (b3.which)
              return String.fromCharCode(b3.which);
          }
          return null;
        case "compositionend":
          return de && b3.locale !== "ko" ? null : b3.data;
        default:
          return null;
      }
    }
    var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me2(a4) {
      var b3 = a4 && a4.nodeName && a4.nodeName.toLowerCase();
      return b3 === "input" ? !!le2[a4.type] : b3 === "textarea" ? true : false;
    }
    function ne2(a4, b3, c3, d3) {
      Eb(d3);
      b3 = oe2(b3, "onChange");
      0 < b3.length && (c3 = new td("onChange", "change", null, c3, d3), a4.push({ event: c3, listeners: b3 }));
    }
    var pe = null;
    var qe = null;
    function re2(a4) {
      se2(a4, 0);
    }
    function te(a4) {
      var b3 = ue2(a4);
      if (Wa(b3))
        return a4;
    }
    function ve(a4, b3) {
      if (a4 === "change")
        return b3;
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
    function Be(a4) {
      if (a4.propertyName === "value" && te(qe)) {
        var b3 = [];
        ne2(b3, qe, a4, xb(a4));
        a4 = re2;
        if (Kb)
          a4(b3);
        else {
          Kb = true;
          try {
            Gb(a4, b3);
          } finally {
            Kb = false, Mb();
          }
        }
      }
    }
    function Ce(a4, b3, c3) {
      a4 === "focusin" ? (Ae(), pe = b3, qe = c3, pe.attachEvent("onpropertychange", Be)) : a4 === "focusout" && Ae();
    }
    function De(a4) {
      if (a4 === "selectionchange" || a4 === "keyup" || a4 === "keydown")
        return te(qe);
    }
    function Ee(a4, b3) {
      if (a4 === "click")
        return te(b3);
    }
    function Fe(a4, b3) {
      if (a4 === "input" || a4 === "change")
        return te(b3);
    }
    function Ge(a4, b3) {
      return a4 === b3 && (a4 !== 0 || 1 / a4 === 1 / b3) || a4 !== a4 && b3 !== b3;
    }
    var He = typeof Object.is === "function" ? Object.is : Ge;
    var Ie = Object.prototype.hasOwnProperty;
    function Je(a4, b3) {
      if (He(a4, b3))
        return true;
      if (typeof a4 !== "object" || a4 === null || typeof b3 !== "object" || b3 === null)
        return false;
      var c3 = Object.keys(a4), d3 = Object.keys(b3);
      if (c3.length !== d3.length)
        return false;
      for (d3 = 0; d3 < c3.length; d3++)
        if (!Ie.call(b3, c3[d3]) || !He(a4[c3[d3]], b3[c3[d3]]))
          return false;
      return true;
    }
    function Ke(a4) {
      for (; a4 && a4.firstChild; )
        a4 = a4.firstChild;
      return a4;
    }
    function Le(a4, b3) {
      var c3 = Ke(a4);
      a4 = 0;
      for (var d3; c3; ) {
        if (c3.nodeType === 3) {
          d3 = a4 + c3.textContent.length;
          if (a4 <= b3 && d3 >= b3)
            return { node: c3, offset: b3 - a4 };
          a4 = d3;
        }
        a: {
          for (; c3; ) {
            if (c3.nextSibling) {
              c3 = c3.nextSibling;
              break a;
            }
            c3 = c3.parentNode;
          }
          c3 = void 0;
        }
        c3 = Ke(c3);
      }
    }
    function Me(a4, b3) {
      return a4 && b3 ? a4 === b3 ? true : a4 && a4.nodeType === 3 ? false : b3 && b3.nodeType === 3 ? Me(a4, b3.parentNode) : "contains" in a4 ? a4.contains(b3) : a4.compareDocumentPosition ? !!(a4.compareDocumentPosition(b3) & 16) : false : false;
    }
    function Ne() {
      for (var a4 = window, b3 = Xa(); b3 instanceof a4.HTMLIFrameElement; ) {
        try {
          var c3 = typeof b3.contentWindow.location.href === "string";
        } catch (d3) {
          c3 = false;
        }
        if (c3)
          a4 = b3.contentWindow;
        else
          break;
        b3 = Xa(a4.document);
      }
      return b3;
    }
    function Oe(a4) {
      var b3 = a4 && a4.nodeName && a4.nodeName.toLowerCase();
      return b3 && (b3 === "input" && (a4.type === "text" || a4.type === "search" || a4.type === "tel" || a4.type === "url" || a4.type === "password") || b3 === "textarea" || a4.contentEditable === "true");
    }
    var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a4, b3, c3) {
      var d3 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
      Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Oe(d3) ? d3 = { start: d3.selectionStart, end: d3.selectionEnd } : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = { anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset }), Se && Je(Se, d3) || (Se = d3, d3 = oe2(Re, "onSelect"), 0 < d3.length && (b3 = new td("onSelect", "select", null, b3, c3), a4.push({ event: b3, listeners: d3 }), b3.target = Qe)));
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
    function Ze(a4, b3, c3) {
      var d3 = a4.type || "unknown-event";
      a4.currentTarget = c3;
      Yb(d3, b3, void 0, a4);
      a4.currentTarget = null;
    }
    function se2(a4, b3) {
      b3 = (b3 & 4) !== 0;
      for (var c3 = 0; c3 < a4.length; c3++) {
        var d3 = a4[c3], e2 = d3.event;
        d3 = d3.listeners;
        a: {
          var f4 = void 0;
          if (b3)
            for (var g3 = d3.length - 1; 0 <= g3; g3--) {
              var h3 = d3[g3], k3 = h3.instance, l4 = h3.currentTarget;
              h3 = h3.listener;
              if (k3 !== f4 && e2.isPropagationStopped())
                break a;
              Ze(e2, h3, l4);
              f4 = k3;
            }
          else
            for (g3 = 0; g3 < d3.length; g3++) {
              h3 = d3[g3];
              k3 = h3.instance;
              l4 = h3.currentTarget;
              h3 = h3.listener;
              if (k3 !== f4 && e2.isPropagationStopped())
                break a;
              Ze(e2, h3, l4);
              f4 = k3;
            }
        }
      }
      if (Ub)
        throw a4 = Vb, Ub = false, Vb = null, a4;
    }
    function G4(a4, b3) {
      var c3 = $e(b3), d3 = a4 + "__bubble";
      c3.has(d3) || (af(b3, a4, 2, false), c3.add(d3));
    }
    var bf = "_reactListening" + Math.random().toString(36).slice(2);
    function cf(a4) {
      a4[bf] || (a4[bf] = true, ba.forEach(function(b3) {
        Ye.has(b3) || df(b3, false, a4, null);
        df(b3, true, a4, null);
      }));
    }
    function df(a4, b3, c3, d3) {
      var e2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f4 = c3;
      a4 === "selectionchange" && c3.nodeType !== 9 && (f4 = c3.ownerDocument);
      if (d3 !== null && !b3 && Ye.has(a4)) {
        if (a4 !== "scroll")
          return;
        e2 |= 2;
        f4 = d3;
      }
      var g3 = $e(f4), h3 = a4 + "__" + (b3 ? "capture" : "bubble");
      g3.has(h3) || (b3 && (e2 |= 4), af(f4, a4, e2, b3), g3.add(h3));
    }
    function af(a4, b3, c3, d3) {
      var e2 = Nc.get(b3);
      switch (e2 === void 0 ? 2 : e2) {
        case 0:
          e2 = gd;
          break;
        case 1:
          e2 = id;
          break;
        default:
          e2 = hd;
      }
      c3 = e2.bind(null, b3, c3, a4);
      e2 = void 0;
      !Pb || b3 !== "touchstart" && b3 !== "touchmove" && b3 !== "wheel" || (e2 = true);
      d3 ? e2 !== void 0 ? a4.addEventListener(b3, c3, { capture: true, passive: e2 }) : a4.addEventListener(b3, c3, true) : e2 !== void 0 ? a4.addEventListener(b3, c3, { passive: e2 }) : a4.addEventListener(b3, c3, false);
    }
    function jd(a4, b3, c3, d3, e2) {
      var f4 = d3;
      if ((b3 & 1) === 0 && (b3 & 2) === 0 && d3 !== null)
        a:
          for (; ; ) {
            if (d3 === null)
              return;
            var g3 = d3.tag;
            if (g3 === 3 || g3 === 4) {
              var h3 = d3.stateNode.containerInfo;
              if (h3 === e2 || h3.nodeType === 8 && h3.parentNode === e2)
                break;
              if (g3 === 4)
                for (g3 = d3.return; g3 !== null; ) {
                  var k3 = g3.tag;
                  if (k3 === 3 || k3 === 4) {
                    if (k3 = g3.stateNode.containerInfo, k3 === e2 || k3.nodeType === 8 && k3.parentNode === e2)
                      return;
                  }
                  g3 = g3.return;
                }
              for (; h3 !== null; ) {
                g3 = wc(h3);
                if (g3 === null)
                  return;
                k3 = g3.tag;
                if (k3 === 5 || k3 === 6) {
                  d3 = f4 = g3;
                  continue a;
                }
                h3 = h3.parentNode;
              }
            }
            d3 = d3.return;
          }
      Nb(function() {
        var d4 = f4, e3 = xb(c3), g4 = [];
        a: {
          var h4 = Mc.get(a4);
          if (h4 !== void 0) {
            var k4 = td, x3 = a4;
            switch (a4) {
              case "keypress":
                if (od(c3) === 0)
                  break a;
              case "keydown":
              case "keyup":
                k4 = Rd;
                break;
              case "focusin":
                x3 = "focus";
                k4 = Fd;
                break;
              case "focusout":
                x3 = "blur";
                k4 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k4 = Fd;
                break;
              case "click":
                if (c3.button === 2)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k4 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k4 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k4 = Vd;
                break;
              case Ic:
              case Jc:
              case Kc:
                k4 = Hd;
                break;
              case Lc:
                k4 = Xd;
                break;
              case "scroll":
                k4 = vd;
                break;
              case "wheel":
                k4 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k4 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k4 = Td;
            }
            var w3 = (b3 & 4) !== 0, z3 = !w3 && a4 === "scroll", u3 = w3 ? h4 !== null ? h4 + "Capture" : null : h4;
            w3 = [];
            for (var t3 = d4, q3; t3 !== null; ) {
              q3 = t3;
              var v3 = q3.stateNode;
              q3.tag === 5 && v3 !== null && (q3 = v3, u3 !== null && (v3 = Ob(t3, u3), v3 != null && w3.push(ef(t3, v3, q3))));
              if (z3)
                break;
              t3 = t3.return;
            }
            0 < w3.length && (h4 = new k4(h4, x3, null, c3, e3), g4.push({ event: h4, listeners: w3 }));
          }
        }
        if ((b3 & 7) === 0) {
          a: {
            h4 = a4 === "mouseover" || a4 === "pointerover";
            k4 = a4 === "mouseout" || a4 === "pointerout";
            if (h4 && (b3 & 16) === 0 && (x3 = c3.relatedTarget || c3.fromElement) && (wc(x3) || x3[ff]))
              break a;
            if (k4 || h4) {
              h4 = e3.window === e3 ? e3 : (h4 = e3.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
              if (k4) {
                if (x3 = c3.relatedTarget || c3.toElement, k4 = d4, x3 = x3 ? wc(x3) : null, x3 !== null && (z3 = Zb(x3), x3 !== z3 || x3.tag !== 5 && x3.tag !== 6))
                  x3 = null;
              } else
                k4 = null, x3 = d4;
              if (k4 !== x3) {
                w3 = Bd;
                v3 = "onMouseLeave";
                u3 = "onMouseEnter";
                t3 = "mouse";
                if (a4 === "pointerout" || a4 === "pointerover")
                  w3 = Td, v3 = "onPointerLeave", u3 = "onPointerEnter", t3 = "pointer";
                z3 = k4 == null ? h4 : ue2(k4);
                q3 = x3 == null ? h4 : ue2(x3);
                h4 = new w3(v3, t3 + "leave", k4, c3, e3);
                h4.target = z3;
                h4.relatedTarget = q3;
                v3 = null;
                wc(e3) === d4 && (w3 = new w3(u3, t3 + "enter", x3, c3, e3), w3.target = q3, w3.relatedTarget = z3, v3 = w3);
                z3 = v3;
                if (k4 && x3)
                  b: {
                    w3 = k4;
                    u3 = x3;
                    t3 = 0;
                    for (q3 = w3; q3; q3 = gf(q3))
                      t3++;
                    q3 = 0;
                    for (v3 = u3; v3; v3 = gf(v3))
                      q3++;
                    for (; 0 < t3 - q3; )
                      w3 = gf(w3), t3--;
                    for (; 0 < q3 - t3; )
                      u3 = gf(u3), q3--;
                    for (; t3--; ) {
                      if (w3 === u3 || u3 !== null && w3 === u3.alternate)
                        break b;
                      w3 = gf(w3);
                      u3 = gf(u3);
                    }
                    w3 = null;
                  }
                else
                  w3 = null;
                k4 !== null && hf(g4, h4, k4, w3, false);
                x3 !== null && z3 !== null && hf(g4, z3, x3, w3, true);
              }
            }
          }
          a: {
            h4 = d4 ? ue2(d4) : window;
            k4 = h4.nodeName && h4.nodeName.toLowerCase();
            if (k4 === "select" || k4 === "input" && h4.type === "file")
              var J2 = ve;
            else if (me2(h4))
              if (we)
                J2 = Fe;
              else {
                J2 = De;
                var K = Ce;
              }
            else
              (k4 = h4.nodeName) && k4.toLowerCase() === "input" && (h4.type === "checkbox" || h4.type === "radio") && (J2 = Ee);
            if (J2 && (J2 = J2(a4, d4))) {
              ne2(g4, J2, c3, e3);
              break a;
            }
            K && K(a4, h4, d4);
            a4 === "focusout" && (K = h4._wrapperState) && K.controlled && h4.type === "number" && bb(h4, "number", h4.value);
          }
          K = d4 ? ue2(d4) : window;
          switch (a4) {
            case "focusin":
              if (me2(K) || K.contentEditable === "true")
                Qe = K, Re = d4, Se = null;
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
              Ue(g4, c3, e3);
              break;
            case "selectionchange":
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g4, c3, e3);
          }
          var Q2;
          if (ae)
            b: {
              switch (a4) {
                case "compositionstart":
                  var L4 = "onCompositionStart";
                  break b;
                case "compositionend":
                  L4 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  L4 = "onCompositionUpdate";
                  break b;
              }
              L4 = void 0;
            }
          else
            ie2 ? ge2(a4, c3) && (L4 = "onCompositionEnd") : a4 === "keydown" && c3.keyCode === 229 && (L4 = "onCompositionStart");
          L4 && (de && c3.locale !== "ko" && (ie2 || L4 !== "onCompositionStart" ? L4 === "onCompositionEnd" && ie2 && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), K = oe2(d4, L4), 0 < K.length && (L4 = new Ld(L4, a4, null, c3, e3), g4.push({ event: L4, listeners: K }), Q2 ? L4.data = Q2 : (Q2 = he(c3), Q2 !== null && (L4.data = Q2))));
          if (Q2 = ce2 ? je(a4, c3) : ke(a4, c3))
            d4 = oe2(d4, "onBeforeInput"), 0 < d4.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c3, e3), g4.push({ event: e3, listeners: d4 }), e3.data = Q2);
        }
        se2(g4, b3);
      });
    }
    function ef(a4, b3, c3) {
      return { instance: a4, listener: b3, currentTarget: c3 };
    }
    function oe2(a4, b3) {
      for (var c3 = b3 + "Capture", d3 = []; a4 !== null; ) {
        var e2 = a4, f4 = e2.stateNode;
        e2.tag === 5 && f4 !== null && (e2 = f4, f4 = Ob(a4, c3), f4 != null && d3.unshift(ef(a4, f4, e2)), f4 = Ob(a4, b3), f4 != null && d3.push(ef(a4, f4, e2)));
        a4 = a4.return;
      }
      return d3;
    }
    function gf(a4) {
      if (a4 === null)
        return null;
      do
        a4 = a4.return;
      while (a4 && a4.tag !== 5);
      return a4 ? a4 : null;
    }
    function hf(a4, b3, c3, d3, e2) {
      for (var f4 = b3._reactName, g3 = []; c3 !== null && c3 !== d3; ) {
        var h3 = c3, k3 = h3.alternate, l4 = h3.stateNode;
        if (k3 !== null && k3 === d3)
          break;
        h3.tag === 5 && l4 !== null && (h3 = l4, e2 ? (k3 = Ob(c3, f4), k3 != null && g3.unshift(ef(c3, k3, h3))) : e2 || (k3 = Ob(c3, f4), k3 != null && g3.push(ef(c3, k3, h3))));
        c3 = c3.return;
      }
      g3.length !== 0 && a4.push({ event: b3, listeners: g3 });
    }
    function jf() {
    }
    var kf = null;
    var lf = null;
    function mf(a4, b3) {
      switch (a4) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!b3.autoFocus;
      }
      return false;
    }
    function nf(a4, b3) {
      return a4 === "textarea" || a4 === "option" || a4 === "noscript" || typeof b3.children === "string" || typeof b3.children === "number" || typeof b3.dangerouslySetInnerHTML === "object" && b3.dangerouslySetInnerHTML !== null && b3.dangerouslySetInnerHTML.__html != null;
    }
    var of = typeof setTimeout === "function" ? setTimeout : void 0;
    var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
    function qf(a4) {
      a4.nodeType === 1 ? a4.textContent = "" : a4.nodeType === 9 && (a4 = a4.body, a4 != null && (a4.textContent = ""));
    }
    function rf(a4) {
      for (; a4 != null; a4 = a4.nextSibling) {
        var b3 = a4.nodeType;
        if (b3 === 1 || b3 === 3)
          break;
      }
      return a4;
    }
    function sf(a4) {
      a4 = a4.previousSibling;
      for (var b3 = 0; a4; ) {
        if (a4.nodeType === 8) {
          var c3 = a4.data;
          if (c3 === "$" || c3 === "$!" || c3 === "$?") {
            if (b3 === 0)
              return a4;
            b3--;
          } else
            c3 === "/$" && b3++;
        }
        a4 = a4.previousSibling;
      }
      return null;
    }
    var tf = 0;
    function uf(a4) {
      return { $$typeof: Ga, toString: a4, valueOf: a4 };
    }
    var vf = Math.random().toString(36).slice(2);
    var wf = "__reactFiber$" + vf;
    var xf = "__reactProps$" + vf;
    var ff = "__reactContainer$" + vf;
    var yf = "__reactEvents$" + vf;
    function wc(a4) {
      var b3 = a4[wf];
      if (b3)
        return b3;
      for (var c3 = a4.parentNode; c3; ) {
        if (b3 = c3[ff] || c3[wf]) {
          c3 = b3.alternate;
          if (b3.child !== null || c3 !== null && c3.child !== null)
            for (a4 = sf(a4); a4 !== null; ) {
              if (c3 = a4[wf])
                return c3;
              a4 = sf(a4);
            }
          return b3;
        }
        a4 = c3;
        c3 = a4.parentNode;
      }
      return null;
    }
    function Cb(a4) {
      a4 = a4[wf] || a4[ff];
      return !a4 || a4.tag !== 5 && a4.tag !== 6 && a4.tag !== 13 && a4.tag !== 3 ? null : a4;
    }
    function ue2(a4) {
      if (a4.tag === 5 || a4.tag === 6)
        return a4.stateNode;
      throw Error(y3(33));
    }
    function Db(a4) {
      return a4[xf] || null;
    }
    function $e(a4) {
      var b3 = a4[yf];
      b3 === void 0 && (b3 = a4[yf] = new Set());
      return b3;
    }
    var zf = [];
    var Af = -1;
    function Bf(a4) {
      return { current: a4 };
    }
    function H3(a4) {
      0 > Af || (a4.current = zf[Af], zf[Af] = null, Af--);
    }
    function I3(a4, b3) {
      Af++;
      zf[Af] = a4.current;
      a4.current = b3;
    }
    var Cf = {};
    var M3 = Bf(Cf);
    var N2 = Bf(false);
    var Df = Cf;
    function Ef(a4, b3) {
      var c3 = a4.type.contextTypes;
      if (!c3)
        return Cf;
      var d3 = a4.stateNode;
      if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b3)
        return d3.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f4;
      for (f4 in c3)
        e2[f4] = b3[f4];
      d3 && (a4 = a4.stateNode, a4.__reactInternalMemoizedUnmaskedChildContext = b3, a4.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Ff(a4) {
      a4 = a4.childContextTypes;
      return a4 !== null && a4 !== void 0;
    }
    function Gf() {
      H3(N2);
      H3(M3);
    }
    function Hf(a4, b3, c3) {
      if (M3.current !== Cf)
        throw Error(y3(168));
      I3(M3, b3);
      I3(N2, c3);
    }
    function If(a4, b3, c3) {
      var d3 = a4.stateNode;
      a4 = b3.childContextTypes;
      if (typeof d3.getChildContext !== "function")
        return c3;
      d3 = d3.getChildContext();
      for (var e2 in d3)
        if (!(e2 in a4))
          throw Error(y3(108, Ra(b3) || "Unknown", e2));
      return m3({}, c3, d3);
    }
    function Jf(a4) {
      a4 = (a4 = a4.stateNode) && a4.__reactInternalMemoizedMergedChildContext || Cf;
      Df = M3.current;
      I3(M3, a4);
      I3(N2, N2.current);
      return true;
    }
    function Kf(a4, b3, c3) {
      var d3 = a4.stateNode;
      if (!d3)
        throw Error(y3(169));
      c3 ? (a4 = If(a4, b3, Df), d3.__reactInternalMemoizedMergedChildContext = a4, H3(N2), H3(M3), I3(M3, a4)) : H3(N2);
      I3(N2, c3);
    }
    var Lf = null;
    var Mf = null;
    var Nf = r3.unstable_runWithPriority;
    var Of = r3.unstable_scheduleCallback;
    var Pf = r3.unstable_cancelCallback;
    var Qf = r3.unstable_shouldYield;
    var Rf = r3.unstable_requestPaint;
    var Sf = r3.unstable_now;
    var Tf = r3.unstable_getCurrentPriorityLevel;
    var Uf = r3.unstable_ImmediatePriority;
    var Vf = r3.unstable_UserBlockingPriority;
    var Wf = r3.unstable_NormalPriority;
    var Xf = r3.unstable_LowPriority;
    var Yf = r3.unstable_IdlePriority;
    var Zf = {};
    var $f = Rf !== void 0 ? Rf : function() {
    };
    var ag = null;
    var bg = null;
    var cg = false;
    var dg = Sf();
    var O3 = 1e4 > dg ? Sf : function() {
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
          throw Error(y3(332));
      }
    }
    function fg(a4) {
      switch (a4) {
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
          throw Error(y3(332));
      }
    }
    function gg(a4, b3) {
      a4 = fg(a4);
      return Nf(a4, b3);
    }
    function hg(a4, b3, c3) {
      a4 = fg(a4);
      return Of(a4, b3, c3);
    }
    function ig() {
      if (bg !== null) {
        var a4 = bg;
        bg = null;
        Pf(a4);
      }
      jg();
    }
    function jg() {
      if (!cg && ag !== null) {
        cg = true;
        var a4 = 0;
        try {
          var b3 = ag;
          gg(99, function() {
            for (; a4 < b3.length; a4++) {
              var c3 = b3[a4];
              do
                c3 = c3(true);
              while (c3 !== null);
            }
          });
          ag = null;
        } catch (c3) {
          throw ag !== null && (ag = ag.slice(a4 + 1)), Of(Uf, ig), c3;
        } finally {
          cg = false;
        }
      }
    }
    var kg = ra.ReactCurrentBatchConfig;
    function lg(a4, b3) {
      if (a4 && a4.defaultProps) {
        b3 = m3({}, b3);
        a4 = a4.defaultProps;
        for (var c3 in a4)
          b3[c3] === void 0 && (b3[c3] = a4[c3]);
        return b3;
      }
      return b3;
    }
    var mg = Bf(null);
    var ng = null;
    var og = null;
    var pg = null;
    function qg() {
      pg = og = ng = null;
    }
    function rg(a4) {
      var b3 = mg.current;
      H3(mg);
      a4.type._context._currentValue = b3;
    }
    function sg(a4, b3) {
      for (; a4 !== null; ) {
        var c3 = a4.alternate;
        if ((a4.childLanes & b3) === b3)
          if (c3 === null || (c3.childLanes & b3) === b3)
            break;
          else
            c3.childLanes |= b3;
        else
          a4.childLanes |= b3, c3 !== null && (c3.childLanes |= b3);
        a4 = a4.return;
      }
    }
    function tg(a4, b3) {
      ng = a4;
      pg = og = null;
      a4 = a4.dependencies;
      a4 !== null && a4.firstContext !== null && ((a4.lanes & b3) !== 0 && (ug = true), a4.firstContext = null);
    }
    function vg(a4, b3) {
      if (pg !== a4 && b3 !== false && b3 !== 0) {
        if (typeof b3 !== "number" || b3 === 1073741823)
          pg = a4, b3 = 1073741823;
        b3 = { context: a4, observedBits: b3, next: null };
        if (og === null) {
          if (ng === null)
            throw Error(y3(308));
          og = b3;
          ng.dependencies = { lanes: 0, firstContext: b3, responders: null };
        } else
          og = og.next = b3;
      }
      return a4._currentValue;
    }
    var wg = false;
    function xg(a4) {
      a4.updateQueue = { baseState: a4.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function yg(a4, b3) {
      a4 = a4.updateQueue;
      b3.updateQueue === a4 && (b3.updateQueue = { baseState: a4.baseState, firstBaseUpdate: a4.firstBaseUpdate, lastBaseUpdate: a4.lastBaseUpdate, shared: a4.shared, effects: a4.effects });
    }
    function zg(a4, b3) {
      return { eventTime: a4, lane: b3, tag: 0, payload: null, callback: null, next: null };
    }
    function Ag(a4, b3) {
      a4 = a4.updateQueue;
      if (a4 !== null) {
        a4 = a4.shared;
        var c3 = a4.pending;
        c3 === null ? b3.next = b3 : (b3.next = c3.next, c3.next = b3);
        a4.pending = b3;
      }
    }
    function Bg(a4, b3) {
      var c3 = a4.updateQueue, d3 = a4.alternate;
      if (d3 !== null && (d3 = d3.updateQueue, c3 === d3)) {
        var e2 = null, f4 = null;
        c3 = c3.firstBaseUpdate;
        if (c3 !== null) {
          do {
            var g3 = { eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null };
            f4 === null ? e2 = f4 = g3 : f4 = f4.next = g3;
            c3 = c3.next;
          } while (c3 !== null);
          f4 === null ? e2 = f4 = b3 : f4 = f4.next = b3;
        } else
          e2 = f4 = b3;
        c3 = { baseState: d3.baseState, firstBaseUpdate: e2, lastBaseUpdate: f4, shared: d3.shared, effects: d3.effects };
        a4.updateQueue = c3;
        return;
      }
      a4 = c3.lastBaseUpdate;
      a4 === null ? c3.firstBaseUpdate = b3 : a4.next = b3;
      c3.lastBaseUpdate = b3;
    }
    function Cg(a4, b3, c3, d3) {
      var e2 = a4.updateQueue;
      wg = false;
      var f4 = e2.firstBaseUpdate, g3 = e2.lastBaseUpdate, h3 = e2.shared.pending;
      if (h3 !== null) {
        e2.shared.pending = null;
        var k3 = h3, l4 = k3.next;
        k3.next = null;
        g3 === null ? f4 = l4 : g3.next = l4;
        g3 = k3;
        var n3 = a4.alternate;
        if (n3 !== null) {
          n3 = n3.updateQueue;
          var A3 = n3.lastBaseUpdate;
          A3 !== g3 && (A3 === null ? n3.firstBaseUpdate = l4 : A3.next = l4, n3.lastBaseUpdate = k3);
        }
      }
      if (f4 !== null) {
        A3 = e2.baseState;
        g3 = 0;
        n3 = l4 = k3 = null;
        do {
          h3 = f4.lane;
          var p3 = f4.eventTime;
          if ((d3 & h3) === h3) {
            n3 !== null && (n3 = n3.next = {
              eventTime: p3,
              lane: 0,
              tag: f4.tag,
              payload: f4.payload,
              callback: f4.callback,
              next: null
            });
            a: {
              var C3 = a4, x3 = f4;
              h3 = b3;
              p3 = c3;
              switch (x3.tag) {
                case 1:
                  C3 = x3.payload;
                  if (typeof C3 === "function") {
                    A3 = C3.call(p3, A3, h3);
                    break a;
                  }
                  A3 = C3;
                  break a;
                case 3:
                  C3.flags = C3.flags & -4097 | 64;
                case 0:
                  C3 = x3.payload;
                  h3 = typeof C3 === "function" ? C3.call(p3, A3, h3) : C3;
                  if (h3 === null || h3 === void 0)
                    break a;
                  A3 = m3({}, A3, h3);
                  break a;
                case 2:
                  wg = true;
              }
            }
            f4.callback !== null && (a4.flags |= 32, h3 = e2.effects, h3 === null ? e2.effects = [f4] : h3.push(f4));
          } else
            p3 = { eventTime: p3, lane: h3, tag: f4.tag, payload: f4.payload, callback: f4.callback, next: null }, n3 === null ? (l4 = n3 = p3, k3 = A3) : n3 = n3.next = p3, g3 |= h3;
          f4 = f4.next;
          if (f4 === null)
            if (h3 = e2.shared.pending, h3 === null)
              break;
            else
              f4 = h3.next, h3.next = null, e2.lastBaseUpdate = h3, e2.shared.pending = null;
        } while (1);
        n3 === null && (k3 = A3);
        e2.baseState = k3;
        e2.firstBaseUpdate = l4;
        e2.lastBaseUpdate = n3;
        Dg |= g3;
        a4.lanes = g3;
        a4.memoizedState = A3;
      }
    }
    function Eg(a4, b3, c3) {
      a4 = b3.effects;
      b3.effects = null;
      if (a4 !== null)
        for (b3 = 0; b3 < a4.length; b3++) {
          var d3 = a4[b3], e2 = d3.callback;
          if (e2 !== null) {
            d3.callback = null;
            d3 = c3;
            if (typeof e2 !== "function")
              throw Error(y3(191, e2));
            e2.call(d3);
          }
        }
    }
    var Fg = new aa.Component().refs;
    function Gg(a4, b3, c3, d3) {
      b3 = a4.memoizedState;
      c3 = c3(d3, b3);
      c3 = c3 === null || c3 === void 0 ? b3 : m3({}, b3, c3);
      a4.memoizedState = c3;
      a4.lanes === 0 && (a4.updateQueue.baseState = c3);
    }
    var Kg = { isMounted: function(a4) {
      return (a4 = a4._reactInternals) ? Zb(a4) === a4 : false;
    }, enqueueSetState: function(a4, b3, c3) {
      a4 = a4._reactInternals;
      var d3 = Hg(), e2 = Ig(a4), f4 = zg(d3, e2);
      f4.payload = b3;
      c3 !== void 0 && c3 !== null && (f4.callback = c3);
      Ag(a4, f4);
      Jg(a4, e2, d3);
    }, enqueueReplaceState: function(a4, b3, c3) {
      a4 = a4._reactInternals;
      var d3 = Hg(), e2 = Ig(a4), f4 = zg(d3, e2);
      f4.tag = 1;
      f4.payload = b3;
      c3 !== void 0 && c3 !== null && (f4.callback = c3);
      Ag(a4, f4);
      Jg(a4, e2, d3);
    }, enqueueForceUpdate: function(a4, b3) {
      a4 = a4._reactInternals;
      var c3 = Hg(), d3 = Ig(a4), e2 = zg(c3, d3);
      e2.tag = 2;
      b3 !== void 0 && b3 !== null && (e2.callback = b3);
      Ag(a4, e2);
      Jg(a4, d3, c3);
    } };
    function Lg(a4, b3, c3, d3, e2, f4, g3) {
      a4 = a4.stateNode;
      return typeof a4.shouldComponentUpdate === "function" ? a4.shouldComponentUpdate(d3, f4, g3) : b3.prototype && b3.prototype.isPureReactComponent ? !Je(c3, d3) || !Je(e2, f4) : true;
    }
    function Mg(a4, b3, c3) {
      var d3 = false, e2 = Cf;
      var f4 = b3.contextType;
      typeof f4 === "object" && f4 !== null ? f4 = vg(f4) : (e2 = Ff(b3) ? Df : M3.current, d3 = b3.contextTypes, f4 = (d3 = d3 !== null && d3 !== void 0) ? Ef(a4, e2) : Cf);
      b3 = new b3(c3, f4);
      a4.memoizedState = b3.state !== null && b3.state !== void 0 ? b3.state : null;
      b3.updater = Kg;
      a4.stateNode = b3;
      b3._reactInternals = a4;
      d3 && (a4 = a4.stateNode, a4.__reactInternalMemoizedUnmaskedChildContext = e2, a4.__reactInternalMemoizedMaskedChildContext = f4);
      return b3;
    }
    function Ng(a4, b3, c3, d3) {
      a4 = b3.state;
      typeof b3.componentWillReceiveProps === "function" && b3.componentWillReceiveProps(c3, d3);
      typeof b3.UNSAFE_componentWillReceiveProps === "function" && b3.UNSAFE_componentWillReceiveProps(c3, d3);
      b3.state !== a4 && Kg.enqueueReplaceState(b3, b3.state, null);
    }
    function Og(a4, b3, c3, d3) {
      var e2 = a4.stateNode;
      e2.props = c3;
      e2.state = a4.memoizedState;
      e2.refs = Fg;
      xg(a4);
      var f4 = b3.contextType;
      typeof f4 === "object" && f4 !== null ? e2.context = vg(f4) : (f4 = Ff(b3) ? Df : M3.current, e2.context = Ef(a4, f4));
      Cg(a4, c3, e2, d3);
      e2.state = a4.memoizedState;
      f4 = b3.getDerivedStateFromProps;
      typeof f4 === "function" && (Gg(a4, b3, f4, c3), e2.state = a4.memoizedState);
      typeof b3.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b3 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b3 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a4, c3, e2, d3), e2.state = a4.memoizedState);
      typeof e2.componentDidMount === "function" && (a4.flags |= 4);
    }
    var Pg = Array.isArray;
    function Qg(a4, b3, c3) {
      a4 = c3.ref;
      if (a4 !== null && typeof a4 !== "function" && typeof a4 !== "object") {
        if (c3._owner) {
          c3 = c3._owner;
          if (c3) {
            if (c3.tag !== 1)
              throw Error(y3(309));
            var d3 = c3.stateNode;
          }
          if (!d3)
            throw Error(y3(147, a4));
          var e2 = "" + a4;
          if (b3 !== null && b3.ref !== null && typeof b3.ref === "function" && b3.ref._stringRef === e2)
            return b3.ref;
          b3 = function(a5) {
            var b4 = d3.refs;
            b4 === Fg && (b4 = d3.refs = {});
            a5 === null ? delete b4[e2] : b4[e2] = a5;
          };
          b3._stringRef = e2;
          return b3;
        }
        if (typeof a4 !== "string")
          throw Error(y3(284));
        if (!c3._owner)
          throw Error(y3(290, a4));
      }
      return a4;
    }
    function Rg(a4, b3) {
      if (a4.type !== "textarea")
        throw Error(y3(31, Object.prototype.toString.call(b3) === "[object Object]" ? "object with keys {" + Object.keys(b3).join(", ") + "}" : b3));
    }
    function Sg(a4) {
      function b3(b4, c4) {
        if (a4) {
          var d4 = b4.lastEffect;
          d4 !== null ? (d4.nextEffect = c4, b4.lastEffect = c4) : b4.firstEffect = b4.lastEffect = c4;
          c4.nextEffect = null;
          c4.flags = 8;
        }
      }
      function c3(c4, d4) {
        if (!a4)
          return null;
        for (; d4 !== null; )
          b3(c4, d4), d4 = d4.sibling;
        return null;
      }
      function d3(a5, b4) {
        for (a5 = new Map(); b4 !== null; )
          b4.key !== null ? a5.set(b4.key, b4) : a5.set(b4.index, b4), b4 = b4.sibling;
        return a5;
      }
      function e2(a5, b4) {
        a5 = Tg(a5, b4);
        a5.index = 0;
        a5.sibling = null;
        return a5;
      }
      function f4(b4, c4, d4) {
        b4.index = d4;
        if (!a4)
          return c4;
        d4 = b4.alternate;
        if (d4 !== null)
          return d4 = d4.index, d4 < c4 ? (b4.flags = 2, c4) : d4;
        b4.flags = 2;
        return c4;
      }
      function g3(b4) {
        a4 && b4.alternate === null && (b4.flags = 2);
        return b4;
      }
      function h3(a5, b4, c4, d4) {
        if (b4 === null || b4.tag !== 6)
          return b4 = Ug(c4, a5.mode, d4), b4.return = a5, b4;
        b4 = e2(b4, c4);
        b4.return = a5;
        return b4;
      }
      function k3(a5, b4, c4, d4) {
        if (b4 !== null && b4.elementType === c4.type)
          return d4 = e2(b4, c4.props), d4.ref = Qg(a5, b4, c4), d4.return = a5, d4;
        d4 = Vg(c4.type, c4.key, c4.props, null, a5.mode, d4);
        d4.ref = Qg(a5, b4, c4);
        d4.return = a5;
        return d4;
      }
      function l4(a5, b4, c4, d4) {
        if (b4 === null || b4.tag !== 4 || b4.stateNode.containerInfo !== c4.containerInfo || b4.stateNode.implementation !== c4.implementation)
          return b4 = Wg(c4, a5.mode, d4), b4.return = a5, b4;
        b4 = e2(b4, c4.children || []);
        b4.return = a5;
        return b4;
      }
      function n3(a5, b4, c4, d4, f5) {
        if (b4 === null || b4.tag !== 7)
          return b4 = Xg(c4, a5.mode, d4, f5), b4.return = a5, b4;
        b4 = e2(b4, c4);
        b4.return = a5;
        return b4;
      }
      function A3(a5, b4, c4) {
        if (typeof b4 === "string" || typeof b4 === "number")
          return b4 = Ug("" + b4, a5.mode, c4), b4.return = a5, b4;
        if (typeof b4 === "object" && b4 !== null) {
          switch (b4.$$typeof) {
            case sa:
              return c4 = Vg(b4.type, b4.key, b4.props, null, a5.mode, c4), c4.ref = Qg(a5, null, b4), c4.return = a5, c4;
            case ta:
              return b4 = Wg(b4, a5.mode, c4), b4.return = a5, b4;
          }
          if (Pg(b4) || La(b4))
            return b4 = Xg(b4, a5.mode, c4, null), b4.return = a5, b4;
          Rg(a5, b4);
        }
        return null;
      }
      function p3(a5, b4, c4, d4) {
        var e3 = b4 !== null ? b4.key : null;
        if (typeof c4 === "string" || typeof c4 === "number")
          return e3 !== null ? null : h3(a5, b4, "" + c4, d4);
        if (typeof c4 === "object" && c4 !== null) {
          switch (c4.$$typeof) {
            case sa:
              return c4.key === e3 ? c4.type === ua ? n3(a5, b4, c4.props.children, d4, e3) : k3(a5, b4, c4, d4) : null;
            case ta:
              return c4.key === e3 ? l4(a5, b4, c4, d4) : null;
          }
          if (Pg(c4) || La(c4))
            return e3 !== null ? null : n3(a5, b4, c4, d4, null);
          Rg(a5, c4);
        }
        return null;
      }
      function C3(a5, b4, c4, d4, e3) {
        if (typeof d4 === "string" || typeof d4 === "number")
          return a5 = a5.get(c4) || null, h3(b4, a5, "" + d4, e3);
        if (typeof d4 === "object" && d4 !== null) {
          switch (d4.$$typeof) {
            case sa:
              return a5 = a5.get(d4.key === null ? c4 : d4.key) || null, d4.type === ua ? n3(b4, a5, d4.props.children, e3, d4.key) : k3(b4, a5, d4, e3);
            case ta:
              return a5 = a5.get(d4.key === null ? c4 : d4.key) || null, l4(b4, a5, d4, e3);
          }
          if (Pg(d4) || La(d4))
            return a5 = a5.get(c4) || null, n3(b4, a5, d4, e3, null);
          Rg(b4, d4);
        }
        return null;
      }
      function x3(e3, g4, h4, k4) {
        for (var l5 = null, t3 = null, u3 = g4, z3 = g4 = 0, q3 = null; u3 !== null && z3 < h4.length; z3++) {
          u3.index > z3 ? (q3 = u3, u3 = null) : q3 = u3.sibling;
          var n4 = p3(e3, u3, h4[z3], k4);
          if (n4 === null) {
            u3 === null && (u3 = q3);
            break;
          }
          a4 && u3 && n4.alternate === null && b3(e3, u3);
          g4 = f4(n4, g4, z3);
          t3 === null ? l5 = n4 : t3.sibling = n4;
          t3 = n4;
          u3 = q3;
        }
        if (z3 === h4.length)
          return c3(e3, u3), l5;
        if (u3 === null) {
          for (; z3 < h4.length; z3++)
            u3 = A3(e3, h4[z3], k4), u3 !== null && (g4 = f4(u3, g4, z3), t3 === null ? l5 = u3 : t3.sibling = u3, t3 = u3);
          return l5;
        }
        for (u3 = d3(e3, u3); z3 < h4.length; z3++)
          q3 = C3(u3, e3, z3, h4[z3], k4), q3 !== null && (a4 && q3.alternate !== null && u3.delete(q3.key === null ? z3 : q3.key), g4 = f4(q3, g4, z3), t3 === null ? l5 = q3 : t3.sibling = q3, t3 = q3);
        a4 && u3.forEach(function(a5) {
          return b3(e3, a5);
        });
        return l5;
      }
      function w3(e3, g4, h4, k4) {
        var l5 = La(h4);
        if (typeof l5 !== "function")
          throw Error(y3(150));
        h4 = l5.call(h4);
        if (h4 == null)
          throw Error(y3(151));
        for (var t3 = l5 = null, u3 = g4, z3 = g4 = 0, q3 = null, n4 = h4.next(); u3 !== null && !n4.done; z3++, n4 = h4.next()) {
          u3.index > z3 ? (q3 = u3, u3 = null) : q3 = u3.sibling;
          var w4 = p3(e3, u3, n4.value, k4);
          if (w4 === null) {
            u3 === null && (u3 = q3);
            break;
          }
          a4 && u3 && w4.alternate === null && b3(e3, u3);
          g4 = f4(w4, g4, z3);
          t3 === null ? l5 = w4 : t3.sibling = w4;
          t3 = w4;
          u3 = q3;
        }
        if (n4.done)
          return c3(e3, u3), l5;
        if (u3 === null) {
          for (; !n4.done; z3++, n4 = h4.next())
            n4 = A3(e3, n4.value, k4), n4 !== null && (g4 = f4(n4, g4, z3), t3 === null ? l5 = n4 : t3.sibling = n4, t3 = n4);
          return l5;
        }
        for (u3 = d3(e3, u3); !n4.done; z3++, n4 = h4.next())
          n4 = C3(u3, e3, z3, n4.value, k4), n4 !== null && (a4 && n4.alternate !== null && u3.delete(n4.key === null ? z3 : n4.key), g4 = f4(n4, g4, z3), t3 === null ? l5 = n4 : t3.sibling = n4, t3 = n4);
        a4 && u3.forEach(function(a5) {
          return b3(e3, a5);
        });
        return l5;
      }
      return function(a5, d4, f5, h4) {
        var k4 = typeof f5 === "object" && f5 !== null && f5.type === ua && f5.key === null;
        k4 && (f5 = f5.props.children);
        var l5 = typeof f5 === "object" && f5 !== null;
        if (l5)
          switch (f5.$$typeof) {
            case sa:
              a: {
                l5 = f5.key;
                for (k4 = d4; k4 !== null; ) {
                  if (k4.key === l5) {
                    switch (k4.tag) {
                      case 7:
                        if (f5.type === ua) {
                          c3(a5, k4.sibling);
                          d4 = e2(k4, f5.props.children);
                          d4.return = a5;
                          a5 = d4;
                          break a;
                        }
                        break;
                      default:
                        if (k4.elementType === f5.type) {
                          c3(a5, k4.sibling);
                          d4 = e2(k4, f5.props);
                          d4.ref = Qg(a5, k4, f5);
                          d4.return = a5;
                          a5 = d4;
                          break a;
                        }
                    }
                    c3(a5, k4);
                    break;
                  } else
                    b3(a5, k4);
                  k4 = k4.sibling;
                }
                f5.type === ua ? (d4 = Xg(f5.props.children, a5.mode, h4, f5.key), d4.return = a5, a5 = d4) : (h4 = Vg(f5.type, f5.key, f5.props, null, a5.mode, h4), h4.ref = Qg(a5, d4, f5), h4.return = a5, a5 = h4);
              }
              return g3(a5);
            case ta:
              a: {
                for (k4 = f5.key; d4 !== null; ) {
                  if (d4.key === k4)
                    if (d4.tag === 4 && d4.stateNode.containerInfo === f5.containerInfo && d4.stateNode.implementation === f5.implementation) {
                      c3(a5, d4.sibling);
                      d4 = e2(d4, f5.children || []);
                      d4.return = a5;
                      a5 = d4;
                      break a;
                    } else {
                      c3(a5, d4);
                      break;
                    }
                  else
                    b3(a5, d4);
                  d4 = d4.sibling;
                }
                d4 = Wg(f5, a5.mode, h4);
                d4.return = a5;
                a5 = d4;
              }
              return g3(a5);
          }
        if (typeof f5 === "string" || typeof f5 === "number")
          return f5 = "" + f5, d4 !== null && d4.tag === 6 ? (c3(a5, d4.sibling), d4 = e2(d4, f5), d4.return = a5, a5 = d4) : (c3(a5, d4), d4 = Ug(f5, a5.mode, h4), d4.return = a5, a5 = d4), g3(a5);
        if (Pg(f5))
          return x3(a5, d4, f5, h4);
        if (La(f5))
          return w3(a5, d4, f5, h4);
        l5 && Rg(a5, f5);
        if (typeof f5 === "undefined" && !k4)
          switch (a5.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(y3(152, Ra(a5.type) || "Component"));
          }
        return c3(a5, d4);
      };
    }
    var Yg = Sg(true);
    var Zg = Sg(false);
    var $g = {};
    var ah = Bf($g);
    var bh = Bf($g);
    var ch = Bf($g);
    function dh(a4) {
      if (a4 === $g)
        throw Error(y3(174));
      return a4;
    }
    function eh(a4, b3) {
      I3(ch, b3);
      I3(bh, a4);
      I3(ah, $g);
      a4 = b3.nodeType;
      switch (a4) {
        case 9:
        case 11:
          b3 = (b3 = b3.documentElement) ? b3.namespaceURI : mb(null, "");
          break;
        default:
          a4 = a4 === 8 ? b3.parentNode : b3, b3 = a4.namespaceURI || null, a4 = a4.tagName, b3 = mb(b3, a4);
      }
      H3(ah);
      I3(ah, b3);
    }
    function fh() {
      H3(ah);
      H3(bh);
      H3(ch);
    }
    function gh(a4) {
      dh(ch.current);
      var b3 = dh(ah.current);
      var c3 = mb(b3, a4.type);
      b3 !== c3 && (I3(bh, a4), I3(ah, c3));
    }
    function hh(a4) {
      bh.current === a4 && (H3(ah), H3(bh));
    }
    var P3 = Bf(0);
    function ih(a4) {
      for (var b3 = a4; b3 !== null; ) {
        if (b3.tag === 13) {
          var c3 = b3.memoizedState;
          if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
            return b3;
        } else if (b3.tag === 19 && b3.memoizedProps.revealOrder !== void 0) {
          if ((b3.flags & 64) !== 0)
            return b3;
        } else if (b3.child !== null) {
          b3.child.return = b3;
          b3 = b3.child;
          continue;
        }
        if (b3 === a4)
          break;
        for (; b3.sibling === null; ) {
          if (b3.return === null || b3.return === a4)
            return null;
          b3 = b3.return;
        }
        b3.sibling.return = b3.return;
        b3 = b3.sibling;
      }
      return null;
    }
    var jh = null;
    var kh = null;
    var lh = false;
    function mh(a4, b3) {
      var c3 = nh(5, null, null, 0);
      c3.elementType = "DELETED";
      c3.type = "DELETED";
      c3.stateNode = b3;
      c3.return = a4;
      c3.flags = 8;
      a4.lastEffect !== null ? (a4.lastEffect.nextEffect = c3, a4.lastEffect = c3) : a4.firstEffect = a4.lastEffect = c3;
    }
    function oh(a4, b3) {
      switch (a4.tag) {
        case 5:
          var c3 = a4.type;
          b3 = b3.nodeType !== 1 || c3.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
          return b3 !== null ? (a4.stateNode = b3, true) : false;
        case 6:
          return b3 = a4.pendingProps === "" || b3.nodeType !== 3 ? null : b3, b3 !== null ? (a4.stateNode = b3, true) : false;
        case 13:
          return false;
        default:
          return false;
      }
    }
    function ph(a4) {
      if (lh) {
        var b3 = kh;
        if (b3) {
          var c3 = b3;
          if (!oh(a4, b3)) {
            b3 = rf(c3.nextSibling);
            if (!b3 || !oh(a4, b3)) {
              a4.flags = a4.flags & -1025 | 2;
              lh = false;
              jh = a4;
              return;
            }
            mh(jh, c3);
          }
          jh = a4;
          kh = rf(b3.firstChild);
        } else
          a4.flags = a4.flags & -1025 | 2, lh = false, jh = a4;
      }
    }
    function qh(a4) {
      for (a4 = a4.return; a4 !== null && a4.tag !== 5 && a4.tag !== 3 && a4.tag !== 13; )
        a4 = a4.return;
      jh = a4;
    }
    function rh(a4) {
      if (a4 !== jh)
        return false;
      if (!lh)
        return qh(a4), lh = true, false;
      var b3 = a4.type;
      if (a4.tag !== 5 || b3 !== "head" && b3 !== "body" && !nf(b3, a4.memoizedProps))
        for (b3 = kh; b3; )
          mh(a4, b3), b3 = rf(b3.nextSibling);
      qh(a4);
      if (a4.tag === 13) {
        a4 = a4.memoizedState;
        a4 = a4 !== null ? a4.dehydrated : null;
        if (!a4)
          throw Error(y3(317));
        a: {
          a4 = a4.nextSibling;
          for (b3 = 0; a4; ) {
            if (a4.nodeType === 8) {
              var c3 = a4.data;
              if (c3 === "/$") {
                if (b3 === 0) {
                  kh = rf(a4.nextSibling);
                  break a;
                }
                b3--;
              } else
                c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b3++;
            }
            a4 = a4.nextSibling;
          }
          kh = null;
        }
      } else
        kh = jh ? rf(a4.stateNode.nextSibling) : null;
      return true;
    }
    function sh() {
      kh = jh = null;
      lh = false;
    }
    var th = [];
    function uh() {
      for (var a4 = 0; a4 < th.length; a4++)
        th[a4]._workInProgressVersionPrimary = null;
      th.length = 0;
    }
    var vh = ra.ReactCurrentDispatcher;
    var wh = ra.ReactCurrentBatchConfig;
    var xh = 0;
    var R3 = null;
    var S3 = null;
    var T3 = null;
    var yh = false;
    var zh = false;
    function Ah() {
      throw Error(y3(321));
    }
    function Bh(a4, b3) {
      if (b3 === null)
        return false;
      for (var c3 = 0; c3 < b3.length && c3 < a4.length; c3++)
        if (!He(a4[c3], b3[c3]))
          return false;
      return true;
    }
    function Ch(a4, b3, c3, d3, e2, f4) {
      xh = f4;
      R3 = b3;
      b3.memoizedState = null;
      b3.updateQueue = null;
      b3.lanes = 0;
      vh.current = a4 === null || a4.memoizedState === null ? Dh : Eh;
      a4 = c3(d3, e2);
      if (zh) {
        f4 = 0;
        do {
          zh = false;
          if (!(25 > f4))
            throw Error(y3(301));
          f4 += 1;
          T3 = S3 = null;
          b3.updateQueue = null;
          vh.current = Fh;
          a4 = c3(d3, e2);
        } while (zh);
      }
      vh.current = Gh;
      b3 = S3 !== null && S3.next !== null;
      xh = 0;
      T3 = S3 = R3 = null;
      yh = false;
      if (b3)
        throw Error(y3(300));
      return a4;
    }
    function Hh() {
      var a4 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      T3 === null ? R3.memoizedState = T3 = a4 : T3 = T3.next = a4;
      return T3;
    }
    function Ih() {
      if (S3 === null) {
        var a4 = R3.alternate;
        a4 = a4 !== null ? a4.memoizedState : null;
      } else
        a4 = S3.next;
      var b3 = T3 === null ? R3.memoizedState : T3.next;
      if (b3 !== null)
        T3 = b3, S3 = a4;
      else {
        if (a4 === null)
          throw Error(y3(310));
        S3 = a4;
        a4 = { memoizedState: S3.memoizedState, baseState: S3.baseState, baseQueue: S3.baseQueue, queue: S3.queue, next: null };
        T3 === null ? R3.memoizedState = T3 = a4 : T3 = T3.next = a4;
      }
      return T3;
    }
    function Jh(a4, b3) {
      return typeof b3 === "function" ? b3(a4) : b3;
    }
    function Kh(a4) {
      var b3 = Ih(), c3 = b3.queue;
      if (c3 === null)
        throw Error(y3(311));
      c3.lastRenderedReducer = a4;
      var d3 = S3, e2 = d3.baseQueue, f4 = c3.pending;
      if (f4 !== null) {
        if (e2 !== null) {
          var g3 = e2.next;
          e2.next = f4.next;
          f4.next = g3;
        }
        d3.baseQueue = e2 = f4;
        c3.pending = null;
      }
      if (e2 !== null) {
        e2 = e2.next;
        d3 = d3.baseState;
        var h3 = g3 = f4 = null, k3 = e2;
        do {
          var l4 = k3.lane;
          if ((xh & l4) === l4)
            h3 !== null && (h3 = h3.next = { lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null }), d3 = k3.eagerReducer === a4 ? k3.eagerState : a4(d3, k3.action);
          else {
            var n3 = {
              lane: l4,
              action: k3.action,
              eagerReducer: k3.eagerReducer,
              eagerState: k3.eagerState,
              next: null
            };
            h3 === null ? (g3 = h3 = n3, f4 = d3) : h3 = h3.next = n3;
            R3.lanes |= l4;
            Dg |= l4;
          }
          k3 = k3.next;
        } while (k3 !== null && k3 !== e2);
        h3 === null ? f4 = d3 : h3.next = g3;
        He(d3, b3.memoizedState) || (ug = true);
        b3.memoizedState = d3;
        b3.baseState = f4;
        b3.baseQueue = h3;
        c3.lastRenderedState = d3;
      }
      return [b3.memoizedState, c3.dispatch];
    }
    function Lh(a4) {
      var b3 = Ih(), c3 = b3.queue;
      if (c3 === null)
        throw Error(y3(311));
      c3.lastRenderedReducer = a4;
      var d3 = c3.dispatch, e2 = c3.pending, f4 = b3.memoizedState;
      if (e2 !== null) {
        c3.pending = null;
        var g3 = e2 = e2.next;
        do
          f4 = a4(f4, g3.action), g3 = g3.next;
        while (g3 !== e2);
        He(f4, b3.memoizedState) || (ug = true);
        b3.memoizedState = f4;
        b3.baseQueue === null && (b3.baseState = f4);
        c3.lastRenderedState = f4;
      }
      return [f4, d3];
    }
    function Mh(a4, b3, c3) {
      var d3 = b3._getVersion;
      d3 = d3(b3._source);
      var e2 = b3._workInProgressVersionPrimary;
      if (e2 !== null)
        a4 = e2 === d3;
      else if (a4 = a4.mutableReadLanes, a4 = (xh & a4) === a4)
        b3._workInProgressVersionPrimary = d3, th.push(b3);
      if (a4)
        return c3(b3._source);
      th.push(b3);
      throw Error(y3(350));
    }
    function Nh(a4, b3, c3, d3) {
      var e2 = U3;
      if (e2 === null)
        throw Error(y3(349));
      var f4 = b3._getVersion, g3 = f4(b3._source), h3 = vh.current, k3 = h3.useState(function() {
        return Mh(e2, b3, c3);
      }), l4 = k3[1], n3 = k3[0];
      k3 = T3;
      var A3 = a4.memoizedState, p3 = A3.refs, C3 = p3.getSnapshot, x3 = A3.source;
      A3 = A3.subscribe;
      var w3 = R3;
      a4.memoizedState = { refs: p3, source: b3, subscribe: d3 };
      h3.useEffect(function() {
        p3.getSnapshot = c3;
        p3.setSnapshot = l4;
        var a5 = f4(b3._source);
        if (!He(g3, a5)) {
          a5 = c3(b3._source);
          He(n3, a5) || (l4(a5), a5 = Ig(w3), e2.mutableReadLanes |= a5 & e2.pendingLanes);
          a5 = e2.mutableReadLanes;
          e2.entangledLanes |= a5;
          for (var d4 = e2.entanglements, h4 = a5; 0 < h4; ) {
            var k4 = 31 - Vc(h4), v3 = 1 << k4;
            d4[k4] |= a5;
            h4 &= ~v3;
          }
        }
      }, [c3, b3, d3]);
      h3.useEffect(function() {
        return d3(b3._source, function() {
          var a5 = p3.getSnapshot, c4 = p3.setSnapshot;
          try {
            c4(a5(b3._source));
            var d4 = Ig(w3);
            e2.mutableReadLanes |= d4 & e2.pendingLanes;
          } catch (q3) {
            c4(function() {
              throw q3;
            });
          }
        });
      }, [b3, d3]);
      He(C3, c3) && He(x3, b3) && He(A3, d3) || (a4 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n3 }, a4.dispatch = l4 = Oh.bind(null, R3, a4), k3.queue = a4, k3.baseQueue = null, n3 = Mh(e2, b3, c3), k3.memoizedState = k3.baseState = n3);
      return n3;
    }
    function Ph(a4, b3, c3) {
      var d3 = Ih();
      return Nh(d3, a4, b3, c3);
    }
    function Qh(a4) {
      var b3 = Hh();
      typeof a4 === "function" && (a4 = a4());
      b3.memoizedState = b3.baseState = a4;
      a4 = b3.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a4 };
      a4 = a4.dispatch = Oh.bind(null, R3, a4);
      return [b3.memoizedState, a4];
    }
    function Rh(a4, b3, c3, d3) {
      a4 = { tag: a4, create: b3, destroy: c3, deps: d3, next: null };
      b3 = R3.updateQueue;
      b3 === null ? (b3 = { lastEffect: null }, R3.updateQueue = b3, b3.lastEffect = a4.next = a4) : (c3 = b3.lastEffect, c3 === null ? b3.lastEffect = a4.next = a4 : (d3 = c3.next, c3.next = a4, a4.next = d3, b3.lastEffect = a4));
      return a4;
    }
    function Sh(a4) {
      var b3 = Hh();
      a4 = { current: a4 };
      return b3.memoizedState = a4;
    }
    function Th() {
      return Ih().memoizedState;
    }
    function Uh(a4, b3, c3, d3) {
      var e2 = Hh();
      R3.flags |= a4;
      e2.memoizedState = Rh(1 | b3, c3, void 0, d3 === void 0 ? null : d3);
    }
    function Vh(a4, b3, c3, d3) {
      var e2 = Ih();
      d3 = d3 === void 0 ? null : d3;
      var f4 = void 0;
      if (S3 !== null) {
        var g3 = S3.memoizedState;
        f4 = g3.destroy;
        if (d3 !== null && Bh(d3, g3.deps)) {
          Rh(b3, c3, f4, d3);
          return;
        }
      }
      R3.flags |= a4;
      e2.memoizedState = Rh(1 | b3, c3, f4, d3);
    }
    function Wh(a4, b3) {
      return Uh(516, 4, a4, b3);
    }
    function Xh(a4, b3) {
      return Vh(516, 4, a4, b3);
    }
    function Yh(a4, b3) {
      return Vh(4, 2, a4, b3);
    }
    function Zh(a4, b3) {
      if (typeof b3 === "function")
        return a4 = a4(), b3(a4), function() {
          b3(null);
        };
      if (b3 !== null && b3 !== void 0)
        return a4 = a4(), b3.current = a4, function() {
          b3.current = null;
        };
    }
    function $h(a4, b3, c3) {
      c3 = c3 !== null && c3 !== void 0 ? c3.concat([a4]) : null;
      return Vh(4, 2, Zh.bind(null, b3, a4), c3);
    }
    function ai() {
    }
    function bi(a4, b3) {
      var c3 = Ih();
      b3 = b3 === void 0 ? null : b3;
      var d3 = c3.memoizedState;
      if (d3 !== null && b3 !== null && Bh(b3, d3[1]))
        return d3[0];
      c3.memoizedState = [a4, b3];
      return a4;
    }
    function ci(a4, b3) {
      var c3 = Ih();
      b3 = b3 === void 0 ? null : b3;
      var d3 = c3.memoizedState;
      if (d3 !== null && b3 !== null && Bh(b3, d3[1]))
        return d3[0];
      a4 = a4();
      c3.memoizedState = [a4, b3];
      return a4;
    }
    function di(a4, b3) {
      var c3 = eg();
      gg(98 > c3 ? 98 : c3, function() {
        a4(true);
      });
      gg(97 < c3 ? 97 : c3, function() {
        var c4 = wh.transition;
        wh.transition = 1;
        try {
          a4(false), b3();
        } finally {
          wh.transition = c4;
        }
      });
    }
    function Oh(a4, b3, c3) {
      var d3 = Hg(), e2 = Ig(a4), f4 = { lane: e2, action: c3, eagerReducer: null, eagerState: null, next: null }, g3 = b3.pending;
      g3 === null ? f4.next = f4 : (f4.next = g3.next, g3.next = f4);
      b3.pending = f4;
      g3 = a4.alternate;
      if (a4 === R3 || g3 !== null && g3 === R3)
        zh = yh = true;
      else {
        if (a4.lanes === 0 && (g3 === null || g3.lanes === 0) && (g3 = b3.lastRenderedReducer, g3 !== null))
          try {
            var h3 = b3.lastRenderedState, k3 = g3(h3, c3);
            f4.eagerReducer = g3;
            f4.eagerState = k3;
            if (He(k3, h3))
              return;
          } catch (l4) {
          } finally {
          }
        Jg(a4, e2, d3);
      }
    }
    var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false };
    var Dh = { readContext: vg, useCallback: function(a4, b3) {
      Hh().memoizedState = [a4, b3 === void 0 ? null : b3];
      return a4;
    }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a4, b3, c3) {
      c3 = c3 !== null && c3 !== void 0 ? c3.concat([a4]) : null;
      return Uh(4, 2, Zh.bind(null, b3, a4), c3);
    }, useLayoutEffect: function(a4, b3) {
      return Uh(4, 2, a4, b3);
    }, useMemo: function(a4, b3) {
      var c3 = Hh();
      b3 = b3 === void 0 ? null : b3;
      a4 = a4();
      c3.memoizedState = [a4, b3];
      return a4;
    }, useReducer: function(a4, b3, c3) {
      var d3 = Hh();
      b3 = c3 !== void 0 ? c3(b3) : b3;
      d3.memoizedState = d3.baseState = b3;
      a4 = d3.queue = { pending: null, dispatch: null, lastRenderedReducer: a4, lastRenderedState: b3 };
      a4 = a4.dispatch = Oh.bind(null, R3, a4);
      return [d3.memoizedState, a4];
    }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a4) {
      var b3 = Qh(a4), c3 = b3[0], d3 = b3[1];
      Wh(function() {
        var b4 = wh.transition;
        wh.transition = 1;
        try {
          d3(a4);
        } finally {
          wh.transition = b4;
        }
      }, [a4]);
      return c3;
    }, useTransition: function() {
      var a4 = Qh(false), b3 = a4[0];
      a4 = di.bind(null, a4[1]);
      Sh(a4);
      return [a4, b3];
    }, useMutableSource: function(a4, b3, c3) {
      var d3 = Hh();
      d3.memoizedState = { refs: { getSnapshot: b3, setSnapshot: null }, source: a4, subscribe: c3 };
      return Nh(d3, a4, b3, c3);
    }, useOpaqueIdentifier: function() {
      if (lh) {
        var a4 = false, b3 = uf(function() {
          a4 || (a4 = true, c3("r:" + (tf++).toString(36)));
          throw Error(y3(355));
        }), c3 = Qh(b3)[1];
        (R3.mode & 2) === 0 && (R3.flags |= 516, Rh(5, function() {
          c3("r:" + (tf++).toString(36));
        }, void 0, null));
        return b3;
      }
      b3 = "r:" + (tf++).toString(36);
      Qh(b3);
      return b3;
    }, unstable_isNewReconciler: false };
    var Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
      return Kh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a4) {
      var b3 = Kh(Jh), c3 = b3[0], d3 = b3[1];
      Xh(function() {
        var b4 = wh.transition;
        wh.transition = 1;
        try {
          d3(a4);
        } finally {
          wh.transition = b4;
        }
      }, [a4]);
      return c3;
    }, useTransition: function() {
      var a4 = Kh(Jh)[0];
      return [
        Th().current,
        a4
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Kh(Jh)[0];
    }, unstable_isNewReconciler: false };
    var Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
      return Lh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a4) {
      var b3 = Lh(Jh), c3 = b3[0], d3 = b3[1];
      Xh(function() {
        var b4 = wh.transition;
        wh.transition = 1;
        try {
          d3(a4);
        } finally {
          wh.transition = b4;
        }
      }, [a4]);
      return c3;
    }, useTransition: function() {
      var a4 = Lh(Jh)[0];
      return [
        Th().current,
        a4
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Lh(Jh)[0];
    }, unstable_isNewReconciler: false };
    var ei = ra.ReactCurrentOwner;
    var ug = false;
    function fi(a4, b3, c3, d3) {
      b3.child = a4 === null ? Zg(b3, null, c3, d3) : Yg(b3, a4.child, c3, d3);
    }
    function gi(a4, b3, c3, d3, e2) {
      c3 = c3.render;
      var f4 = b3.ref;
      tg(b3, e2);
      d3 = Ch(a4, b3, c3, d3, f4, e2);
      if (a4 !== null && !ug)
        return b3.updateQueue = a4.updateQueue, b3.flags &= -517, a4.lanes &= ~e2, hi(a4, b3, e2);
      b3.flags |= 1;
      fi(a4, b3, d3, e2);
      return b3.child;
    }
    function ii(a4, b3, c3, d3, e2, f4) {
      if (a4 === null) {
        var g3 = c3.type;
        if (typeof g3 === "function" && !ji(g3) && g3.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
          return b3.tag = 15, b3.type = g3, ki(a4, b3, g3, d3, e2, f4);
        a4 = Vg(c3.type, null, d3, b3, b3.mode, f4);
        a4.ref = b3.ref;
        a4.return = b3;
        return b3.child = a4;
      }
      g3 = a4.child;
      if ((e2 & f4) === 0 && (e2 = g3.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e2, d3) && a4.ref === b3.ref))
        return hi(a4, b3, f4);
      b3.flags |= 1;
      a4 = Tg(g3, d3);
      a4.ref = b3.ref;
      a4.return = b3;
      return b3.child = a4;
    }
    function ki(a4, b3, c3, d3, e2, f4) {
      if (a4 !== null && Je(a4.memoizedProps, d3) && a4.ref === b3.ref)
        if (ug = false, (f4 & e2) !== 0)
          (a4.flags & 16384) !== 0 && (ug = true);
        else
          return b3.lanes = a4.lanes, hi(a4, b3, f4);
      return li(a4, b3, c3, d3, f4);
    }
    function mi(a4, b3, c3) {
      var d3 = b3.pendingProps, e2 = d3.children, f4 = a4 !== null ? a4.memoizedState : null;
      if (d3.mode === "hidden" || d3.mode === "unstable-defer-without-hiding")
        if ((b3.mode & 4) === 0)
          b3.memoizedState = { baseLanes: 0 }, ni(b3, c3);
        else if ((c3 & 1073741824) !== 0)
          b3.memoizedState = { baseLanes: 0 }, ni(b3, f4 !== null ? f4.baseLanes : c3);
        else
          return a4 = f4 !== null ? f4.baseLanes | c3 : c3, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = { baseLanes: a4 }, ni(b3, a4), null;
      else
        f4 !== null ? (d3 = f4.baseLanes | c3, b3.memoizedState = null) : d3 = c3, ni(b3, d3);
      fi(a4, b3, e2, c3);
      return b3.child;
    }
    function oi(a4, b3) {
      var c3 = b3.ref;
      if (a4 === null && c3 !== null || a4 !== null && a4.ref !== c3)
        b3.flags |= 128;
    }
    function li(a4, b3, c3, d3, e2) {
      var f4 = Ff(c3) ? Df : M3.current;
      f4 = Ef(b3, f4);
      tg(b3, e2);
      c3 = Ch(a4, b3, c3, d3, f4, e2);
      if (a4 !== null && !ug)
        return b3.updateQueue = a4.updateQueue, b3.flags &= -517, a4.lanes &= ~e2, hi(a4, b3, e2);
      b3.flags |= 1;
      fi(a4, b3, c3, e2);
      return b3.child;
    }
    function pi(a4, b3, c3, d3, e2) {
      if (Ff(c3)) {
        var f4 = true;
        Jf(b3);
      } else
        f4 = false;
      tg(b3, e2);
      if (b3.stateNode === null)
        a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2), Mg(b3, c3, d3), Og(b3, c3, d3, e2), d3 = true;
      else if (a4 === null) {
        var g3 = b3.stateNode, h3 = b3.memoizedProps;
        g3.props = h3;
        var k3 = g3.context, l4 = c3.contextType;
        typeof l4 === "object" && l4 !== null ? l4 = vg(l4) : (l4 = Ff(c3) ? Df : M3.current, l4 = Ef(b3, l4));
        var n3 = c3.getDerivedStateFromProps, A3 = typeof n3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function";
        A3 || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h3 !== d3 || k3 !== l4) && Ng(b3, g3, d3, l4);
        wg = false;
        var p3 = b3.memoizedState;
        g3.state = p3;
        Cg(b3, d3, g3, e2);
        k3 = b3.memoizedState;
        h3 !== d3 || p3 !== k3 || N2.current || wg ? (typeof n3 === "function" && (Gg(b3, c3, n3, d3), k3 = b3.memoizedState), (h3 = wg || Lg(b3, c3, h3, d3, p3, k3, l4)) ? (A3 || typeof g3.UNSAFE_componentWillMount !== "function" && typeof g3.componentWillMount !== "function" || (typeof g3.componentWillMount === "function" && g3.componentWillMount(), typeof g3.UNSAFE_componentWillMount === "function" && g3.UNSAFE_componentWillMount()), typeof g3.componentDidMount === "function" && (b3.flags |= 4)) : (typeof g3.componentDidMount === "function" && (b3.flags |= 4), b3.memoizedProps = d3, b3.memoizedState = k3), g3.props = d3, g3.state = k3, g3.context = l4, d3 = h3) : (typeof g3.componentDidMount === "function" && (b3.flags |= 4), d3 = false);
      } else {
        g3 = b3.stateNode;
        yg(a4, b3);
        h3 = b3.memoizedProps;
        l4 = b3.type === b3.elementType ? h3 : lg(b3.type, h3);
        g3.props = l4;
        A3 = b3.pendingProps;
        p3 = g3.context;
        k3 = c3.contextType;
        typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c3) ? Df : M3.current, k3 = Ef(b3, k3));
        var C3 = c3.getDerivedStateFromProps;
        (n3 = typeof C3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function") || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h3 !== A3 || p3 !== k3) && Ng(b3, g3, d3, k3);
        wg = false;
        p3 = b3.memoizedState;
        g3.state = p3;
        Cg(b3, d3, g3, e2);
        var x3 = b3.memoizedState;
        h3 !== A3 || p3 !== x3 || N2.current || wg ? (typeof C3 === "function" && (Gg(b3, c3, C3, d3), x3 = b3.memoizedState), (l4 = wg || Lg(b3, c3, l4, d3, p3, x3, k3)) ? (n3 || typeof g3.UNSAFE_componentWillUpdate !== "function" && typeof g3.componentWillUpdate !== "function" || (typeof g3.componentWillUpdate === "function" && g3.componentWillUpdate(d3, x3, k3), typeof g3.UNSAFE_componentWillUpdate === "function" && g3.UNSAFE_componentWillUpdate(d3, x3, k3)), typeof g3.componentDidUpdate === "function" && (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate === "function" && (b3.flags |= 256)) : (typeof g3.componentDidUpdate !== "function" || h3 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h3 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 256), b3.memoizedProps = d3, b3.memoizedState = x3), g3.props = d3, g3.state = x3, g3.context = k3, d3 = l4) : (typeof g3.componentDidUpdate !== "function" || h3 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h3 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 256), d3 = false);
      }
      return qi(a4, b3, c3, d3, f4, e2);
    }
    function qi(a4, b3, c3, d3, e2, f4) {
      oi(a4, b3);
      var g3 = (b3.flags & 64) !== 0;
      if (!d3 && !g3)
        return e2 && Kf(b3, c3, false), hi(a4, b3, f4);
      d3 = b3.stateNode;
      ei.current = b3;
      var h3 = g3 && typeof c3.getDerivedStateFromError !== "function" ? null : d3.render();
      b3.flags |= 1;
      a4 !== null && g3 ? (b3.child = Yg(b3, a4.child, null, f4), b3.child = Yg(b3, null, h3, f4)) : fi(a4, b3, h3, f4);
      b3.memoizedState = d3.state;
      e2 && Kf(b3, c3, true);
      return b3.child;
    }
    function ri(a4) {
      var b3 = a4.stateNode;
      b3.pendingContext ? Hf(a4, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && Hf(a4, b3.context, false);
      eh(a4, b3.containerInfo);
    }
    var si = { dehydrated: null, retryLane: 0 };
    function ti(a4, b3, c3) {
      var d3 = b3.pendingProps, e2 = P3.current, f4 = false, g3;
      (g3 = (b3.flags & 64) !== 0) || (g3 = a4 !== null && a4.memoizedState === null ? false : (e2 & 2) !== 0);
      g3 ? (f4 = true, b3.flags &= -65) : a4 !== null && a4.memoizedState === null || d3.fallback === void 0 || d3.unstable_avoidThisFallback === true || (e2 |= 1);
      I3(P3, e2 & 1);
      if (a4 === null) {
        d3.fallback !== void 0 && ph(b3);
        a4 = d3.children;
        e2 = d3.fallback;
        if (f4)
          return a4 = ui(b3, a4, e2, c3), b3.child.memoizedState = { baseLanes: c3 }, b3.memoizedState = si, a4;
        if (typeof d3.unstable_expectedLoadTime === "number")
          return a4 = ui(b3, a4, e2, c3), b3.child.memoizedState = { baseLanes: c3 }, b3.memoizedState = si, b3.lanes = 33554432, a4;
        c3 = vi({ mode: "visible", children: a4 }, b3.mode, c3, null);
        c3.return = b3;
        return b3.child = c3;
      }
      if (a4.memoizedState !== null) {
        if (f4)
          return d3 = wi(a4, b3, d3.children, d3.fallback, c3), f4 = b3.child, e2 = a4.child.memoizedState, f4.memoizedState = e2 === null ? { baseLanes: c3 } : { baseLanes: e2.baseLanes | c3 }, f4.childLanes = a4.childLanes & ~c3, b3.memoizedState = si, d3;
        c3 = xi(a4, b3, d3.children, c3);
        b3.memoizedState = null;
        return c3;
      }
      if (f4)
        return d3 = wi(a4, b3, d3.children, d3.fallback, c3), f4 = b3.child, e2 = a4.child.memoizedState, f4.memoizedState = e2 === null ? { baseLanes: c3 } : { baseLanes: e2.baseLanes | c3 }, f4.childLanes = a4.childLanes & ~c3, b3.memoizedState = si, d3;
      c3 = xi(a4, b3, d3.children, c3);
      b3.memoizedState = null;
      return c3;
    }
    function ui(a4, b3, c3, d3) {
      var e2 = a4.mode, f4 = a4.child;
      b3 = { mode: "hidden", children: b3 };
      (e2 & 2) === 0 && f4 !== null ? (f4.childLanes = 0, f4.pendingProps = b3) : f4 = vi(b3, e2, 0, null);
      c3 = Xg(c3, e2, d3, null);
      f4.return = a4;
      c3.return = a4;
      f4.sibling = c3;
      a4.child = f4;
      return c3;
    }
    function xi(a4, b3, c3, d3) {
      var e2 = a4.child;
      a4 = e2.sibling;
      c3 = Tg(e2, { mode: "visible", children: c3 });
      (b3.mode & 2) === 0 && (c3.lanes = d3);
      c3.return = b3;
      c3.sibling = null;
      a4 !== null && (a4.nextEffect = null, a4.flags = 8, b3.firstEffect = b3.lastEffect = a4);
      return b3.child = c3;
    }
    function wi(a4, b3, c3, d3, e2) {
      var f4 = b3.mode, g3 = a4.child;
      a4 = g3.sibling;
      var h3 = { mode: "hidden", children: c3 };
      (f4 & 2) === 0 && b3.child !== g3 ? (c3 = b3.child, c3.childLanes = 0, c3.pendingProps = h3, g3 = c3.lastEffect, g3 !== null ? (b3.firstEffect = c3.firstEffect, b3.lastEffect = g3, g3.nextEffect = null) : b3.firstEffect = b3.lastEffect = null) : c3 = Tg(g3, h3);
      a4 !== null ? d3 = Tg(a4, d3) : (d3 = Xg(d3, f4, e2, null), d3.flags |= 2);
      d3.return = b3;
      c3.return = b3;
      c3.sibling = d3;
      b3.child = c3;
      return d3;
    }
    function yi(a4, b3) {
      a4.lanes |= b3;
      var c3 = a4.alternate;
      c3 !== null && (c3.lanes |= b3);
      sg(a4.return, b3);
    }
    function zi(a4, b3, c3, d3, e2, f4) {
      var g3 = a4.memoizedState;
      g3 === null ? a4.memoizedState = { isBackwards: b3, rendering: null, renderingStartTime: 0, last: d3, tail: c3, tailMode: e2, lastEffect: f4 } : (g3.isBackwards = b3, g3.rendering = null, g3.renderingStartTime = 0, g3.last = d3, g3.tail = c3, g3.tailMode = e2, g3.lastEffect = f4);
    }
    function Ai(a4, b3, c3) {
      var d3 = b3.pendingProps, e2 = d3.revealOrder, f4 = d3.tail;
      fi(a4, b3, d3.children, c3);
      d3 = P3.current;
      if ((d3 & 2) !== 0)
        d3 = d3 & 1 | 2, b3.flags |= 64;
      else {
        if (a4 !== null && (a4.flags & 64) !== 0)
          a:
            for (a4 = b3.child; a4 !== null; ) {
              if (a4.tag === 13)
                a4.memoizedState !== null && yi(a4, c3);
              else if (a4.tag === 19)
                yi(a4, c3);
              else if (a4.child !== null) {
                a4.child.return = a4;
                a4 = a4.child;
                continue;
              }
              if (a4 === b3)
                break a;
              for (; a4.sibling === null; ) {
                if (a4.return === null || a4.return === b3)
                  break a;
                a4 = a4.return;
              }
              a4.sibling.return = a4.return;
              a4 = a4.sibling;
            }
        d3 &= 1;
      }
      I3(P3, d3);
      if ((b3.mode & 2) === 0)
        b3.memoizedState = null;
      else
        switch (e2) {
          case "forwards":
            c3 = b3.child;
            for (e2 = null; c3 !== null; )
              a4 = c3.alternate, a4 !== null && ih(a4) === null && (e2 = c3), c3 = c3.sibling;
            c3 = e2;
            c3 === null ? (e2 = b3.child, b3.child = null) : (e2 = c3.sibling, c3.sibling = null);
            zi(b3, false, e2, c3, f4, b3.lastEffect);
            break;
          case "backwards":
            c3 = null;
            e2 = b3.child;
            for (b3.child = null; e2 !== null; ) {
              a4 = e2.alternate;
              if (a4 !== null && ih(a4) === null) {
                b3.child = e2;
                break;
              }
              a4 = e2.sibling;
              e2.sibling = c3;
              c3 = e2;
              e2 = a4;
            }
            zi(b3, true, c3, null, f4, b3.lastEffect);
            break;
          case "together":
            zi(b3, false, null, null, void 0, b3.lastEffect);
            break;
          default:
            b3.memoizedState = null;
        }
      return b3.child;
    }
    function hi(a4, b3, c3) {
      a4 !== null && (b3.dependencies = a4.dependencies);
      Dg |= b3.lanes;
      if ((c3 & b3.childLanes) !== 0) {
        if (a4 !== null && b3.child !== a4.child)
          throw Error(y3(153));
        if (b3.child !== null) {
          a4 = b3.child;
          c3 = Tg(a4, a4.pendingProps);
          b3.child = c3;
          for (c3.return = b3; a4.sibling !== null; )
            a4 = a4.sibling, c3 = c3.sibling = Tg(a4, a4.pendingProps), c3.return = b3;
          c3.sibling = null;
        }
        return b3.child;
      }
      return null;
    }
    var Bi;
    var Ci;
    var Di;
    var Ei;
    Bi = function(a4, b3) {
      for (var c3 = b3.child; c3 !== null; ) {
        if (c3.tag === 5 || c3.tag === 6)
          a4.appendChild(c3.stateNode);
        else if (c3.tag !== 4 && c3.child !== null) {
          c3.child.return = c3;
          c3 = c3.child;
          continue;
        }
        if (c3 === b3)
          break;
        for (; c3.sibling === null; ) {
          if (c3.return === null || c3.return === b3)
            return;
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        c3 = c3.sibling;
      }
    };
    Ci = function() {
    };
    Di = function(a4, b3, c3, d3) {
      var e2 = a4.memoizedProps;
      if (e2 !== d3) {
        a4 = b3.stateNode;
        dh(ah.current);
        var f4 = null;
        switch (c3) {
          case "input":
            e2 = Ya(a4, e2);
            d3 = Ya(a4, d3);
            f4 = [];
            break;
          case "option":
            e2 = eb(a4, e2);
            d3 = eb(a4, d3);
            f4 = [];
            break;
          case "select":
            e2 = m3({}, e2, { value: void 0 });
            d3 = m3({}, d3, { value: void 0 });
            f4 = [];
            break;
          case "textarea":
            e2 = gb(a4, e2);
            d3 = gb(a4, d3);
            f4 = [];
            break;
          default:
            typeof e2.onClick !== "function" && typeof d3.onClick === "function" && (a4.onclick = jf);
        }
        vb(c3, d3);
        var g3;
        c3 = null;
        for (l4 in e2)
          if (!d3.hasOwnProperty(l4) && e2.hasOwnProperty(l4) && e2[l4] != null)
            if (l4 === "style") {
              var h3 = e2[l4];
              for (g3 in h3)
                h3.hasOwnProperty(g3) && (c3 || (c3 = {}), c3[g3] = "");
            } else
              l4 !== "dangerouslySetInnerHTML" && l4 !== "children" && l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && l4 !== "autoFocus" && (ca.hasOwnProperty(l4) ? f4 || (f4 = []) : (f4 = f4 || []).push(l4, null));
        for (l4 in d3) {
          var k3 = d3[l4];
          h3 = e2 != null ? e2[l4] : void 0;
          if (d3.hasOwnProperty(l4) && k3 !== h3 && (k3 != null || h3 != null))
            if (l4 === "style")
              if (h3) {
                for (g3 in h3)
                  !h3.hasOwnProperty(g3) || k3 && k3.hasOwnProperty(g3) || (c3 || (c3 = {}), c3[g3] = "");
                for (g3 in k3)
                  k3.hasOwnProperty(g3) && h3[g3] !== k3[g3] && (c3 || (c3 = {}), c3[g3] = k3[g3]);
              } else
                c3 || (f4 || (f4 = []), f4.push(l4, c3)), c3 = k3;
            else
              l4 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h3 = h3 ? h3.__html : void 0, k3 != null && h3 !== k3 && (f4 = f4 || []).push(l4, k3)) : l4 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f4 = f4 || []).push(l4, "" + k3) : l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l4) ? (k3 != null && l4 === "onScroll" && G4("scroll", a4), f4 || h3 === k3 || (f4 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f4 = f4 || []).push(l4, k3));
        }
        c3 && (f4 = f4 || []).push("style", c3);
        var l4 = f4;
        if (b3.updateQueue = l4)
          b3.flags |= 4;
      }
    };
    Ei = function(a4, b3, c3, d3) {
      c3 !== d3 && (b3.flags |= 4);
    };
    function Fi(a4, b3) {
      if (!lh)
        switch (a4.tailMode) {
          case "hidden":
            b3 = a4.tail;
            for (var c3 = null; b3 !== null; )
              b3.alternate !== null && (c3 = b3), b3 = b3.sibling;
            c3 === null ? a4.tail = null : c3.sibling = null;
            break;
          case "collapsed":
            c3 = a4.tail;
            for (var d3 = null; c3 !== null; )
              c3.alternate !== null && (d3 = c3), c3 = c3.sibling;
            d3 === null ? b3 || a4.tail === null ? a4.tail = null : a4.tail.sibling = null : d3.sibling = null;
        }
    }
    function Gi(a4, b3, c3) {
      var d3 = b3.pendingProps;
      switch (b3.tag) {
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
          return Ff(b3.type) && Gf(), null;
        case 3:
          fh();
          H3(N2);
          H3(M3);
          uh();
          d3 = b3.stateNode;
          d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
          if (a4 === null || a4.child === null)
            rh(b3) ? b3.flags |= 4 : d3.hydrate || (b3.flags |= 256);
          Ci(b3);
          return null;
        case 5:
          hh(b3);
          var e2 = dh(ch.current);
          c3 = b3.type;
          if (a4 !== null && b3.stateNode != null)
            Di(a4, b3, c3, d3, e2), a4.ref !== b3.ref && (b3.flags |= 128);
          else {
            if (!d3) {
              if (b3.stateNode === null)
                throw Error(y3(166));
              return null;
            }
            a4 = dh(ah.current);
            if (rh(b3)) {
              d3 = b3.stateNode;
              c3 = b3.type;
              var f4 = b3.memoizedProps;
              d3[wf] = b3;
              d3[xf] = f4;
              switch (c3) {
                case "dialog":
                  G4("cancel", d3);
                  G4("close", d3);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G4("load", d3);
                  break;
                case "video":
                case "audio":
                  for (a4 = 0; a4 < Xe.length; a4++)
                    G4(Xe[a4], d3);
                  break;
                case "source":
                  G4("error", d3);
                  break;
                case "img":
                case "image":
                case "link":
                  G4("error", d3);
                  G4("load", d3);
                  break;
                case "details":
                  G4("toggle", d3);
                  break;
                case "input":
                  Za(d3, f4);
                  G4("invalid", d3);
                  break;
                case "select":
                  d3._wrapperState = { wasMultiple: !!f4.multiple };
                  G4("invalid", d3);
                  break;
                case "textarea":
                  hb(d3, f4), G4("invalid", d3);
              }
              vb(c3, f4);
              a4 = null;
              for (var g3 in f4)
                f4.hasOwnProperty(g3) && (e2 = f4[g3], g3 === "children" ? typeof e2 === "string" ? d3.textContent !== e2 && (a4 = ["children", e2]) : typeof e2 === "number" && d3.textContent !== "" + e2 && (a4 = ["children", "" + e2]) : ca.hasOwnProperty(g3) && e2 != null && g3 === "onScroll" && G4("scroll", d3));
              switch (c3) {
                case "input":
                  Va(d3);
                  cb(d3, f4, true);
                  break;
                case "textarea":
                  Va(d3);
                  jb(d3);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof f4.onClick === "function" && (d3.onclick = jf);
              }
              d3 = a4;
              b3.updateQueue = d3;
              d3 !== null && (b3.flags |= 4);
            } else {
              g3 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
              a4 === kb.html && (a4 = lb(c3));
              a4 === kb.html ? c3 === "script" ? (a4 = g3.createElement("div"), a4.innerHTML = "<script><\/script>", a4 = a4.removeChild(a4.firstChild)) : typeof d3.is === "string" ? a4 = g3.createElement(c3, { is: d3.is }) : (a4 = g3.createElement(c3), c3 === "select" && (g3 = a4, d3.multiple ? g3.multiple = true : d3.size && (g3.size = d3.size))) : a4 = g3.createElementNS(a4, c3);
              a4[wf] = b3;
              a4[xf] = d3;
              Bi(a4, b3, false, false);
              b3.stateNode = a4;
              g3 = wb(c3, d3);
              switch (c3) {
                case "dialog":
                  G4("cancel", a4);
                  G4("close", a4);
                  e2 = d3;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G4("load", a4);
                  e2 = d3;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < Xe.length; e2++)
                    G4(Xe[e2], a4);
                  e2 = d3;
                  break;
                case "source":
                  G4("error", a4);
                  e2 = d3;
                  break;
                case "img":
                case "image":
                case "link":
                  G4("error", a4);
                  G4("load", a4);
                  e2 = d3;
                  break;
                case "details":
                  G4("toggle", a4);
                  e2 = d3;
                  break;
                case "input":
                  Za(a4, d3);
                  e2 = Ya(a4, d3);
                  G4("invalid", a4);
                  break;
                case "option":
                  e2 = eb(a4, d3);
                  break;
                case "select":
                  a4._wrapperState = { wasMultiple: !!d3.multiple };
                  e2 = m3({}, d3, { value: void 0 });
                  G4("invalid", a4);
                  break;
                case "textarea":
                  hb(a4, d3);
                  e2 = gb(a4, d3);
                  G4("invalid", a4);
                  break;
                default:
                  e2 = d3;
              }
              vb(c3, e2);
              var h3 = e2;
              for (f4 in h3)
                if (h3.hasOwnProperty(f4)) {
                  var k3 = h3[f4];
                  f4 === "style" ? tb(a4, k3) : f4 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a4, k3)) : f4 === "children" ? typeof k3 === "string" ? (c3 !== "textarea" || k3 !== "") && pb(a4, k3) : typeof k3 === "number" && pb(a4, "" + k3) : f4 !== "suppressContentEditableWarning" && f4 !== "suppressHydrationWarning" && f4 !== "autoFocus" && (ca.hasOwnProperty(f4) ? k3 != null && f4 === "onScroll" && G4("scroll", a4) : k3 != null && qa(a4, f4, k3, g3));
                }
              switch (c3) {
                case "input":
                  Va(a4);
                  cb(a4, d3, false);
                  break;
                case "textarea":
                  Va(a4);
                  jb(a4);
                  break;
                case "option":
                  d3.value != null && a4.setAttribute("value", "" + Sa(d3.value));
                  break;
                case "select":
                  a4.multiple = !!d3.multiple;
                  f4 = d3.value;
                  f4 != null ? fb(a4, !!d3.multiple, f4, false) : d3.defaultValue != null && fb(a4, !!d3.multiple, d3.defaultValue, true);
                  break;
                default:
                  typeof e2.onClick === "function" && (a4.onclick = jf);
              }
              mf(c3, d3) && (b3.flags |= 4);
            }
            b3.ref !== null && (b3.flags |= 128);
          }
          return null;
        case 6:
          if (a4 && b3.stateNode != null)
            Ei(a4, b3, a4.memoizedProps, d3);
          else {
            if (typeof d3 !== "string" && b3.stateNode === null)
              throw Error(y3(166));
            c3 = dh(ch.current);
            dh(ah.current);
            rh(b3) ? (d3 = b3.stateNode, c3 = b3.memoizedProps, d3[wf] = b3, d3.nodeValue !== c3 && (b3.flags |= 4)) : (d3 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d3), d3[wf] = b3, b3.stateNode = d3);
          }
          return null;
        case 13:
          H3(P3);
          d3 = b3.memoizedState;
          if ((b3.flags & 64) !== 0)
            return b3.lanes = c3, b3;
          d3 = d3 !== null;
          c3 = false;
          a4 === null ? b3.memoizedProps.fallback !== void 0 && rh(b3) : c3 = a4.memoizedState !== null;
          if (d3 && !c3 && (b3.mode & 2) !== 0)
            if (a4 === null && b3.memoizedProps.unstable_avoidThisFallback !== true || (P3.current & 1) !== 0)
              V5 === 0 && (V5 = 3);
            else {
              if (V5 === 0 || V5 === 3)
                V5 = 4;
              U3 === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U3, W4);
            }
          if (d3 || c3)
            b3.flags |= 4;
          return null;
        case 4:
          return fh(), Ci(b3), a4 === null && cf(b3.stateNode.containerInfo), null;
        case 10:
          return rg(b3), null;
        case 17:
          return Ff(b3.type) && Gf(), null;
        case 19:
          H3(P3);
          d3 = b3.memoizedState;
          if (d3 === null)
            return null;
          f4 = (b3.flags & 64) !== 0;
          g3 = d3.rendering;
          if (g3 === null)
            if (f4)
              Fi(d3, false);
            else {
              if (V5 !== 0 || a4 !== null && (a4.flags & 64) !== 0)
                for (a4 = b3.child; a4 !== null; ) {
                  g3 = ih(a4);
                  if (g3 !== null) {
                    b3.flags |= 64;
                    Fi(d3, false);
                    f4 = g3.updateQueue;
                    f4 !== null && (b3.updateQueue = f4, b3.flags |= 4);
                    d3.lastEffect === null && (b3.firstEffect = null);
                    b3.lastEffect = d3.lastEffect;
                    d3 = c3;
                    for (c3 = b3.child; c3 !== null; )
                      f4 = c3, a4 = d3, f4.flags &= 2, f4.nextEffect = null, f4.firstEffect = null, f4.lastEffect = null, g3 = f4.alternate, g3 === null ? (f4.childLanes = 0, f4.lanes = a4, f4.child = null, f4.memoizedProps = null, f4.memoizedState = null, f4.updateQueue = null, f4.dependencies = null, f4.stateNode = null) : (f4.childLanes = g3.childLanes, f4.lanes = g3.lanes, f4.child = g3.child, f4.memoizedProps = g3.memoizedProps, f4.memoizedState = g3.memoizedState, f4.updateQueue = g3.updateQueue, f4.type = g3.type, a4 = g3.dependencies, f4.dependencies = a4 === null ? null : { lanes: a4.lanes, firstContext: a4.firstContext }), c3 = c3.sibling;
                    I3(P3, P3.current & 1 | 2);
                    return b3.child;
                  }
                  a4 = a4.sibling;
                }
              d3.tail !== null && O3() > Ji && (b3.flags |= 64, f4 = true, Fi(d3, false), b3.lanes = 33554432);
            }
          else {
            if (!f4)
              if (a4 = ih(g3), a4 !== null) {
                if (b3.flags |= 64, f4 = true, c3 = a4.updateQueue, c3 !== null && (b3.updateQueue = c3, b3.flags |= 4), Fi(d3, true), d3.tail === null && d3.tailMode === "hidden" && !g3.alternate && !lh)
                  return b3 = b3.lastEffect = d3.lastEffect, b3 !== null && (b3.nextEffect = null), null;
              } else
                2 * O3() - d3.renderingStartTime > Ji && c3 !== 1073741824 && (b3.flags |= 64, f4 = true, Fi(d3, false), b3.lanes = 33554432);
            d3.isBackwards ? (g3.sibling = b3.child, b3.child = g3) : (c3 = d3.last, c3 !== null ? c3.sibling = g3 : b3.child = g3, d3.last = g3);
          }
          return d3.tail !== null ? (c3 = d3.tail, d3.rendering = c3, d3.tail = c3.sibling, d3.lastEffect = b3.lastEffect, d3.renderingStartTime = O3(), c3.sibling = null, b3 = P3.current, I3(P3, f4 ? b3 & 1 | 2 : b3 & 1), c3) : null;
        case 23:
        case 24:
          return Ki(), a4 !== null && a4.memoizedState !== null !== (b3.memoizedState !== null) && d3.mode !== "unstable-defer-without-hiding" && (b3.flags |= 4), null;
      }
      throw Error(y3(156, b3.tag));
    }
    function Li(a4) {
      switch (a4.tag) {
        case 1:
          Ff(a4.type) && Gf();
          var b3 = a4.flags;
          return b3 & 4096 ? (a4.flags = b3 & -4097 | 64, a4) : null;
        case 3:
          fh();
          H3(N2);
          H3(M3);
          uh();
          b3 = a4.flags;
          if ((b3 & 64) !== 0)
            throw Error(y3(285));
          a4.flags = b3 & -4097 | 64;
          return a4;
        case 5:
          return hh(a4), null;
        case 13:
          return H3(P3), b3 = a4.flags, b3 & 4096 ? (a4.flags = b3 & -4097 | 64, a4) : null;
        case 19:
          return H3(P3), null;
        case 4:
          return fh(), null;
        case 10:
          return rg(a4), null;
        case 23:
        case 24:
          return Ki(), null;
        default:
          return null;
      }
    }
    function Mi(a4, b3) {
      try {
        var c3 = "", d3 = b3;
        do
          c3 += Qa(d3), d3 = d3.return;
        while (d3);
        var e2 = c3;
      } catch (f4) {
        e2 = "\nError generating stack: " + f4.message + "\n" + f4.stack;
      }
      return { value: a4, source: b3, stack: e2 };
    }
    function Ni(a4, b3) {
      try {
        console.error(b3.value);
      } catch (c3) {
        setTimeout(function() {
          throw c3;
        });
      }
    }
    var Oi = typeof WeakMap === "function" ? WeakMap : Map;
    function Pi(a4, b3, c3) {
      c3 = zg(-1, c3);
      c3.tag = 3;
      c3.payload = { element: null };
      var d3 = b3.value;
      c3.callback = function() {
        Qi || (Qi = true, Ri = d3);
        Ni(a4, b3);
      };
      return c3;
    }
    function Si(a4, b3, c3) {
      c3 = zg(-1, c3);
      c3.tag = 3;
      var d3 = a4.type.getDerivedStateFromError;
      if (typeof d3 === "function") {
        var e2 = b3.value;
        c3.payload = function() {
          Ni(a4, b3);
          return d3(e2);
        };
      }
      var f4 = a4.stateNode;
      f4 !== null && typeof f4.componentDidCatch === "function" && (c3.callback = function() {
        typeof d3 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a4, b3));
        var c4 = b3.stack;
        this.componentDidCatch(b3.value, { componentStack: c4 !== null ? c4 : "" });
      });
      return c3;
    }
    var Ui = typeof WeakSet === "function" ? WeakSet : Set;
    function Vi(a4) {
      var b3 = a4.ref;
      if (b3 !== null)
        if (typeof b3 === "function")
          try {
            b3(null);
          } catch (c3) {
            Wi(a4, c3);
          }
        else
          b3.current = null;
    }
    function Xi(a4, b3) {
      switch (b3.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (b3.flags & 256 && a4 !== null) {
            var c3 = a4.memoizedProps, d3 = a4.memoizedState;
            a4 = b3.stateNode;
            b3 = a4.getSnapshotBeforeUpdate(b3.elementType === b3.type ? c3 : lg(b3.type, c3), d3);
            a4.__reactInternalSnapshotBeforeUpdate = b3;
          }
          return;
        case 3:
          b3.flags & 256 && qf(b3.stateNode.containerInfo);
          return;
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(y3(163));
    }
    function Yi(a4, b3, c3) {
      switch (c3.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          b3 = c3.updateQueue;
          b3 = b3 !== null ? b3.lastEffect : null;
          if (b3 !== null) {
            a4 = b3 = b3.next;
            do {
              if ((a4.tag & 3) === 3) {
                var d3 = a4.create;
                a4.destroy = d3();
              }
              a4 = a4.next;
            } while (a4 !== b3);
          }
          b3 = c3.updateQueue;
          b3 = b3 !== null ? b3.lastEffect : null;
          if (b3 !== null) {
            a4 = b3 = b3.next;
            do {
              var e2 = a4;
              d3 = e2.next;
              e2 = e2.tag;
              (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Zi(c3, a4), $i(c3, a4));
              a4 = d3;
            } while (a4 !== b3);
          }
          return;
        case 1:
          a4 = c3.stateNode;
          c3.flags & 4 && (b3 === null ? a4.componentDidMount() : (d3 = c3.elementType === c3.type ? b3.memoizedProps : lg(c3.type, b3.memoizedProps), a4.componentDidUpdate(d3, b3.memoizedState, a4.__reactInternalSnapshotBeforeUpdate)));
          b3 = c3.updateQueue;
          b3 !== null && Eg(c3, b3, a4);
          return;
        case 3:
          b3 = c3.updateQueue;
          if (b3 !== null) {
            a4 = null;
            if (c3.child !== null)
              switch (c3.child.tag) {
                case 5:
                  a4 = c3.child.stateNode;
                  break;
                case 1:
                  a4 = c3.child.stateNode;
              }
            Eg(c3, b3, a4);
          }
          return;
        case 5:
          a4 = c3.stateNode;
          b3 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a4.focus();
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          c3.memoizedState === null && (c3 = c3.alternate, c3 !== null && (c3 = c3.memoizedState, c3 !== null && (c3 = c3.dehydrated, c3 !== null && Cc(c3))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(y3(163));
    }
    function aj(a4, b3) {
      for (var c3 = a4; ; ) {
        if (c3.tag === 5) {
          var d3 = c3.stateNode;
          if (b3)
            d3 = d3.style, typeof d3.setProperty === "function" ? d3.setProperty("display", "none", "important") : d3.display = "none";
          else {
            d3 = c3.stateNode;
            var e2 = c3.memoizedProps.style;
            e2 = e2 !== void 0 && e2 !== null && e2.hasOwnProperty("display") ? e2.display : null;
            d3.style.display = sb("display", e2);
          }
        } else if (c3.tag === 6)
          c3.stateNode.nodeValue = b3 ? "" : c3.memoizedProps;
        else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a4) && c3.child !== null) {
          c3.child.return = c3;
          c3 = c3.child;
          continue;
        }
        if (c3 === a4)
          break;
        for (; c3.sibling === null; ) {
          if (c3.return === null || c3.return === a4)
            return;
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        c3 = c3.sibling;
      }
    }
    function bj(a4, b3) {
      if (Mf && typeof Mf.onCommitFiberUnmount === "function")
        try {
          Mf.onCommitFiberUnmount(Lf, b3);
        } catch (f4) {
        }
      switch (b3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          a4 = b3.updateQueue;
          if (a4 !== null && (a4 = a4.lastEffect, a4 !== null)) {
            var c3 = a4 = a4.next;
            do {
              var d3 = c3, e2 = d3.destroy;
              d3 = d3.tag;
              if (e2 !== void 0)
                if ((d3 & 4) !== 0)
                  Zi(b3, c3);
                else {
                  d3 = b3;
                  try {
                    e2();
                  } catch (f4) {
                    Wi(d3, f4);
                  }
                }
              c3 = c3.next;
            } while (c3 !== a4);
          }
          break;
        case 1:
          Vi(b3);
          a4 = b3.stateNode;
          if (typeof a4.componentWillUnmount === "function")
            try {
              a4.props = b3.memoizedProps, a4.state = b3.memoizedState, a4.componentWillUnmount();
            } catch (f4) {
              Wi(b3, f4);
            }
          break;
        case 5:
          Vi(b3);
          break;
        case 4:
          cj(a4, b3);
      }
    }
    function dj(a4) {
      a4.alternate = null;
      a4.child = null;
      a4.dependencies = null;
      a4.firstEffect = null;
      a4.lastEffect = null;
      a4.memoizedProps = null;
      a4.memoizedState = null;
      a4.pendingProps = null;
      a4.return = null;
      a4.updateQueue = null;
    }
    function ej(a4) {
      return a4.tag === 5 || a4.tag === 3 || a4.tag === 4;
    }
    function fj(a4) {
      a: {
        for (var b3 = a4.return; b3 !== null; ) {
          if (ej(b3))
            break a;
          b3 = b3.return;
        }
        throw Error(y3(160));
      }
      var c3 = b3;
      b3 = c3.stateNode;
      switch (c3.tag) {
        case 5:
          var d3 = false;
          break;
        case 3:
          b3 = b3.containerInfo;
          d3 = true;
          break;
        case 4:
          b3 = b3.containerInfo;
          d3 = true;
          break;
        default:
          throw Error(y3(161));
      }
      c3.flags & 16 && (pb(b3, ""), c3.flags &= -17);
      a:
        b:
          for (c3 = a4; ; ) {
            for (; c3.sibling === null; ) {
              if (c3.return === null || ej(c3.return)) {
                c3 = null;
                break a;
              }
              c3 = c3.return;
            }
            c3.sibling.return = c3.return;
            for (c3 = c3.sibling; c3.tag !== 5 && c3.tag !== 6 && c3.tag !== 18; ) {
              if (c3.flags & 2)
                continue b;
              if (c3.child === null || c3.tag === 4)
                continue b;
              else
                c3.child.return = c3, c3 = c3.child;
            }
            if (!(c3.flags & 2)) {
              c3 = c3.stateNode;
              break a;
            }
          }
      d3 ? gj(a4, c3, b3) : hj(a4, c3, b3);
    }
    function gj(a4, b3, c3) {
      var d3 = a4.tag, e2 = d3 === 5 || d3 === 6;
      if (e2)
        a4 = e2 ? a4.stateNode : a4.stateNode.instance, b3 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a4, b3) : c3.insertBefore(a4, b3) : (c3.nodeType === 8 ? (b3 = c3.parentNode, b3.insertBefore(a4, c3)) : (b3 = c3, b3.appendChild(a4)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b3.onclick !== null || (b3.onclick = jf));
      else if (d3 !== 4 && (a4 = a4.child, a4 !== null))
        for (gj(a4, b3, c3), a4 = a4.sibling; a4 !== null; )
          gj(a4, b3, c3), a4 = a4.sibling;
    }
    function hj(a4, b3, c3) {
      var d3 = a4.tag, e2 = d3 === 5 || d3 === 6;
      if (e2)
        a4 = e2 ? a4.stateNode : a4.stateNode.instance, b3 ? c3.insertBefore(a4, b3) : c3.appendChild(a4);
      else if (d3 !== 4 && (a4 = a4.child, a4 !== null))
        for (hj(a4, b3, c3), a4 = a4.sibling; a4 !== null; )
          hj(a4, b3, c3), a4 = a4.sibling;
    }
    function cj(a4, b3) {
      for (var c3 = b3, d3 = false, e2, f4; ; ) {
        if (!d3) {
          d3 = c3.return;
          a:
            for (; ; ) {
              if (d3 === null)
                throw Error(y3(160));
              e2 = d3.stateNode;
              switch (d3.tag) {
                case 5:
                  f4 = false;
                  break a;
                case 3:
                  e2 = e2.containerInfo;
                  f4 = true;
                  break a;
                case 4:
                  e2 = e2.containerInfo;
                  f4 = true;
                  break a;
              }
              d3 = d3.return;
            }
          d3 = true;
        }
        if (c3.tag === 5 || c3.tag === 6) {
          a:
            for (var g3 = a4, h3 = c3, k3 = h3; ; )
              if (bj(g3, k3), k3.child !== null && k3.tag !== 4)
                k3.child.return = k3, k3 = k3.child;
              else {
                if (k3 === h3)
                  break a;
                for (; k3.sibling === null; ) {
                  if (k3.return === null || k3.return === h3)
                    break a;
                  k3 = k3.return;
                }
                k3.sibling.return = k3.return;
                k3 = k3.sibling;
              }
          f4 ? (g3 = e2, h3 = c3.stateNode, g3.nodeType === 8 ? g3.parentNode.removeChild(h3) : g3.removeChild(h3)) : e2.removeChild(c3.stateNode);
        } else if (c3.tag === 4) {
          if (c3.child !== null) {
            e2 = c3.stateNode.containerInfo;
            f4 = true;
            c3.child.return = c3;
            c3 = c3.child;
            continue;
          }
        } else if (bj(a4, c3), c3.child !== null) {
          c3.child.return = c3;
          c3 = c3.child;
          continue;
        }
        if (c3 === b3)
          break;
        for (; c3.sibling === null; ) {
          if (c3.return === null || c3.return === b3)
            return;
          c3 = c3.return;
          c3.tag === 4 && (d3 = false);
        }
        c3.sibling.return = c3.return;
        c3 = c3.sibling;
      }
    }
    function ij(a4, b3) {
      switch (b3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var c3 = b3.updateQueue;
          c3 = c3 !== null ? c3.lastEffect : null;
          if (c3 !== null) {
            var d3 = c3 = c3.next;
            do
              (d3.tag & 3) === 3 && (a4 = d3.destroy, d3.destroy = void 0, a4 !== void 0 && a4()), d3 = d3.next;
            while (d3 !== c3);
          }
          return;
        case 1:
          return;
        case 5:
          c3 = b3.stateNode;
          if (c3 != null) {
            d3 = b3.memoizedProps;
            var e2 = a4 !== null ? a4.memoizedProps : d3;
            a4 = b3.type;
            var f4 = b3.updateQueue;
            b3.updateQueue = null;
            if (f4 !== null) {
              c3[xf] = d3;
              a4 === "input" && d3.type === "radio" && d3.name != null && $a(c3, d3);
              wb(a4, e2);
              b3 = wb(a4, d3);
              for (e2 = 0; e2 < f4.length; e2 += 2) {
                var g3 = f4[e2], h3 = f4[e2 + 1];
                g3 === "style" ? tb(c3, h3) : g3 === "dangerouslySetInnerHTML" ? ob(c3, h3) : g3 === "children" ? pb(c3, h3) : qa(c3, g3, h3, b3);
              }
              switch (a4) {
                case "input":
                  ab(c3, d3);
                  break;
                case "textarea":
                  ib(c3, d3);
                  break;
                case "select":
                  a4 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d3.multiple, f4 = d3.value, f4 != null ? fb(c3, !!d3.multiple, f4, false) : a4 !== !!d3.multiple && (d3.defaultValue != null ? fb(c3, !!d3.multiple, d3.defaultValue, true) : fb(c3, !!d3.multiple, d3.multiple ? [] : "", false));
              }
            }
          }
          return;
        case 6:
          if (b3.stateNode === null)
            throw Error(y3(162));
          b3.stateNode.nodeValue = b3.memoizedProps;
          return;
        case 3:
          c3 = b3.stateNode;
          c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
          return;
        case 12:
          return;
        case 13:
          b3.memoizedState !== null && (jj = O3(), aj(b3.child, true));
          kj(b3);
          return;
        case 19:
          kj(b3);
          return;
        case 17:
          return;
        case 23:
        case 24:
          aj(b3, b3.memoizedState !== null);
          return;
      }
      throw Error(y3(163));
    }
    function kj(a4) {
      var b3 = a4.updateQueue;
      if (b3 !== null) {
        a4.updateQueue = null;
        var c3 = a4.stateNode;
        c3 === null && (c3 = a4.stateNode = new Ui());
        b3.forEach(function(b4) {
          var d3 = lj.bind(null, a4, b4);
          c3.has(b4) || (c3.add(b4), b4.then(d3, d3));
        });
      }
    }
    function mj(a4, b3) {
      return a4 !== null && (a4 = a4.memoizedState, a4 === null || a4.dehydrated !== null) ? (b3 = b3.memoizedState, b3 !== null && b3.dehydrated === null) : false;
    }
    var nj = Math.ceil;
    var oj = ra.ReactCurrentDispatcher;
    var pj = ra.ReactCurrentOwner;
    var X3 = 0;
    var U3 = null;
    var Y3 = null;
    var W4 = 0;
    var qj = 0;
    var rj = Bf(0);
    var V5 = 0;
    var sj = null;
    var tj = 0;
    var Dg = 0;
    var Hi = 0;
    var uj = 0;
    var vj = null;
    var jj = 0;
    var Ji = Infinity;
    function wj() {
      Ji = O3() + 500;
    }
    var Z4 = null;
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
      return (X3 & 48) !== 0 ? O3() : Fj !== -1 ? Fj : Fj = O3();
    }
    function Ig(a4) {
      a4 = a4.mode;
      if ((a4 & 2) === 0)
        return 1;
      if ((a4 & 4) === 0)
        return eg() === 99 ? 1 : 2;
      Gj === 0 && (Gj = tj);
      if (kg.transition !== 0) {
        Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
        a4 = Gj;
        var b3 = 4186112 & ~Hj;
        b3 &= -b3;
        b3 === 0 && (a4 = 4186112 & ~a4, b3 = a4 & -a4, b3 === 0 && (b3 = 8192));
        return b3;
      }
      a4 = eg();
      (X3 & 4) !== 0 && a4 === 98 ? a4 = Xc(12, Gj) : (a4 = Sc(a4), a4 = Xc(a4, Gj));
      return a4;
    }
    function Jg(a4, b3, c3) {
      if (50 < Dj)
        throw Dj = 0, Ej = null, Error(y3(185));
      a4 = Kj(a4, b3);
      if (a4 === null)
        return null;
      $c(a4, b3, c3);
      a4 === U3 && (Hi |= b3, V5 === 4 && Ii(a4, W4));
      var d3 = eg();
      b3 === 1 ? (X3 & 8) !== 0 && (X3 & 48) === 0 ? Lj(a4) : (Mj(a4, c3), X3 === 0 && (wj(), ig())) : ((X3 & 4) === 0 || d3 !== 98 && d3 !== 99 || (Cj === null ? Cj = new Set([a4]) : Cj.add(a4)), Mj(a4, c3));
      vj = a4;
    }
    function Kj(a4, b3) {
      a4.lanes |= b3;
      var c3 = a4.alternate;
      c3 !== null && (c3.lanes |= b3);
      c3 = a4;
      for (a4 = a4.return; a4 !== null; )
        a4.childLanes |= b3, c3 = a4.alternate, c3 !== null && (c3.childLanes |= b3), c3 = a4, a4 = a4.return;
      return c3.tag === 3 ? c3.stateNode : null;
    }
    function Mj(a4, b3) {
      for (var c3 = a4.callbackNode, d3 = a4.suspendedLanes, e2 = a4.pingedLanes, f4 = a4.expirationTimes, g3 = a4.pendingLanes; 0 < g3; ) {
        var h3 = 31 - Vc(g3), k3 = 1 << h3, l4 = f4[h3];
        if (l4 === -1) {
          if ((k3 & d3) === 0 || (k3 & e2) !== 0) {
            l4 = b3;
            Rc(k3);
            var n3 = F3;
            f4[h3] = 10 <= n3 ? l4 + 250 : 6 <= n3 ? l4 + 5e3 : -1;
          }
        } else
          l4 <= b3 && (a4.expiredLanes |= k3);
        g3 &= ~k3;
      }
      d3 = Uc(a4, a4 === U3 ? W4 : 0);
      b3 = F3;
      if (d3 === 0)
        c3 !== null && (c3 !== Zf && Pf(c3), a4.callbackNode = null, a4.callbackPriority = 0);
      else {
        if (c3 !== null) {
          if (a4.callbackPriority === b3)
            return;
          c3 !== Zf && Pf(c3);
        }
        b3 === 15 ? (c3 = Lj.bind(null, a4), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b3 === 14 ? c3 = hg(99, Lj.bind(null, a4)) : (c3 = Tc(b3), c3 = hg(c3, Nj.bind(null, a4)));
        a4.callbackPriority = b3;
        a4.callbackNode = c3;
      }
    }
    function Nj(a4) {
      Fj = -1;
      Hj = Gj = 0;
      if ((X3 & 48) !== 0)
        throw Error(y3(327));
      var b3 = a4.callbackNode;
      if (Oj() && a4.callbackNode !== b3)
        return null;
      var c3 = Uc(a4, a4 === U3 ? W4 : 0);
      if (c3 === 0)
        return null;
      var d3 = c3;
      var e2 = X3;
      X3 |= 16;
      var f4 = Pj();
      if (U3 !== a4 || W4 !== d3)
        wj(), Qj(a4, d3);
      do
        try {
          Rj();
          break;
        } catch (h3) {
          Sj(a4, h3);
        }
      while (1);
      qg();
      oj.current = f4;
      X3 = e2;
      Y3 !== null ? d3 = 0 : (U3 = null, W4 = 0, d3 = V5);
      if ((tj & Hi) !== 0)
        Qj(a4, 0);
      else if (d3 !== 0) {
        d3 === 2 && (X3 |= 64, a4.hydrate && (a4.hydrate = false, qf(a4.containerInfo)), c3 = Wc(a4), c3 !== 0 && (d3 = Tj(a4, c3)));
        if (d3 === 1)
          throw b3 = sj, Qj(a4, 0), Ii(a4, c3), Mj(a4, O3()), b3;
        a4.finishedWork = a4.current.alternate;
        a4.finishedLanes = c3;
        switch (d3) {
          case 0:
          case 1:
            throw Error(y3(345));
          case 2:
            Uj(a4);
            break;
          case 3:
            Ii(a4, c3);
            if ((c3 & 62914560) === c3 && (d3 = jj + 500 - O3(), 10 < d3)) {
              if (Uc(a4, 0) !== 0)
                break;
              e2 = a4.suspendedLanes;
              if ((e2 & c3) !== c3) {
                Hg();
                a4.pingedLanes |= a4.suspendedLanes & e2;
                break;
              }
              a4.timeoutHandle = of(Uj.bind(null, a4), d3);
              break;
            }
            Uj(a4);
            break;
          case 4:
            Ii(a4, c3);
            if ((c3 & 4186112) === c3)
              break;
            d3 = a4.eventTimes;
            for (e2 = -1; 0 < c3; ) {
              var g3 = 31 - Vc(c3);
              f4 = 1 << g3;
              g3 = d3[g3];
              g3 > e2 && (e2 = g3);
              c3 &= ~f4;
            }
            c3 = e2;
            c3 = O3() - c3;
            c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
            if (10 < c3) {
              a4.timeoutHandle = of(Uj.bind(null, a4), c3);
              break;
            }
            Uj(a4);
            break;
          case 5:
            Uj(a4);
            break;
          default:
            throw Error(y3(329));
        }
      }
      Mj(a4, O3());
      return a4.callbackNode === b3 ? Nj.bind(null, a4) : null;
    }
    function Ii(a4, b3) {
      b3 &= ~uj;
      b3 &= ~Hi;
      a4.suspendedLanes |= b3;
      a4.pingedLanes &= ~b3;
      for (a4 = a4.expirationTimes; 0 < b3; ) {
        var c3 = 31 - Vc(b3), d3 = 1 << c3;
        a4[c3] = -1;
        b3 &= ~d3;
      }
    }
    function Lj(a4) {
      if ((X3 & 48) !== 0)
        throw Error(y3(327));
      Oj();
      if (a4 === U3 && (a4.expiredLanes & W4) !== 0) {
        var b3 = W4;
        var c3 = Tj(a4, b3);
        (tj & Hi) !== 0 && (b3 = Uc(a4, b3), c3 = Tj(a4, b3));
      } else
        b3 = Uc(a4, 0), c3 = Tj(a4, b3);
      a4.tag !== 0 && c3 === 2 && (X3 |= 64, a4.hydrate && (a4.hydrate = false, qf(a4.containerInfo)), b3 = Wc(a4), b3 !== 0 && (c3 = Tj(a4, b3)));
      if (c3 === 1)
        throw c3 = sj, Qj(a4, 0), Ii(a4, b3), Mj(a4, O3()), c3;
      a4.finishedWork = a4.current.alternate;
      a4.finishedLanes = b3;
      Uj(a4);
      Mj(a4, O3());
      return null;
    }
    function Vj() {
      if (Cj !== null) {
        var a4 = Cj;
        Cj = null;
        a4.forEach(function(a5) {
          a5.expiredLanes |= 24 & a5.pendingLanes;
          Mj(a5, O3());
        });
      }
      ig();
    }
    function Wj(a4, b3) {
      var c3 = X3;
      X3 |= 1;
      try {
        return a4(b3);
      } finally {
        X3 = c3, X3 === 0 && (wj(), ig());
      }
    }
    function Xj(a4, b3) {
      var c3 = X3;
      X3 &= -2;
      X3 |= 8;
      try {
        return a4(b3);
      } finally {
        X3 = c3, X3 === 0 && (wj(), ig());
      }
    }
    function ni(a4, b3) {
      I3(rj, qj);
      qj |= b3;
      tj |= b3;
    }
    function Ki() {
      qj = rj.current;
      H3(rj);
    }
    function Qj(a4, b3) {
      a4.finishedWork = null;
      a4.finishedLanes = 0;
      var c3 = a4.timeoutHandle;
      c3 !== -1 && (a4.timeoutHandle = -1, pf(c3));
      if (Y3 !== null)
        for (c3 = Y3.return; c3 !== null; ) {
          var d3 = c3;
          switch (d3.tag) {
            case 1:
              d3 = d3.type.childContextTypes;
              d3 !== null && d3 !== void 0 && Gf();
              break;
            case 3:
              fh();
              H3(N2);
              H3(M3);
              uh();
              break;
            case 5:
              hh(d3);
              break;
            case 4:
              fh();
              break;
            case 13:
              H3(P3);
              break;
            case 19:
              H3(P3);
              break;
            case 10:
              rg(d3);
              break;
            case 23:
            case 24:
              Ki();
          }
          c3 = c3.return;
        }
      U3 = a4;
      Y3 = Tg(a4.current, null);
      W4 = qj = tj = b3;
      V5 = 0;
      sj = null;
      uj = Hi = Dg = 0;
    }
    function Sj(a4, b3) {
      do {
        var c3 = Y3;
        try {
          qg();
          vh.current = Gh;
          if (yh) {
            for (var d3 = R3.memoizedState; d3 !== null; ) {
              var e2 = d3.queue;
              e2 !== null && (e2.pending = null);
              d3 = d3.next;
            }
            yh = false;
          }
          xh = 0;
          T3 = S3 = R3 = null;
          zh = false;
          pj.current = null;
          if (c3 === null || c3.return === null) {
            V5 = 1;
            sj = b3;
            Y3 = null;
            break;
          }
          a: {
            var f4 = a4, g3 = c3.return, h3 = c3, k3 = b3;
            b3 = W4;
            h3.flags |= 2048;
            h3.firstEffect = h3.lastEffect = null;
            if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
              var l4 = k3;
              if ((h3.mode & 2) === 0) {
                var n3 = h3.alternate;
                n3 ? (h3.updateQueue = n3.updateQueue, h3.memoizedState = n3.memoizedState, h3.lanes = n3.lanes) : (h3.updateQueue = null, h3.memoizedState = null);
              }
              var A3 = (P3.current & 1) !== 0, p3 = g3;
              do {
                var C3;
                if (C3 = p3.tag === 13) {
                  var x3 = p3.memoizedState;
                  if (x3 !== null)
                    C3 = x3.dehydrated !== null ? true : false;
                  else {
                    var w3 = p3.memoizedProps;
                    C3 = w3.fallback === void 0 ? false : w3.unstable_avoidThisFallback !== true ? true : A3 ? false : true;
                  }
                }
                if (C3) {
                  var z3 = p3.updateQueue;
                  if (z3 === null) {
                    var u3 = new Set();
                    u3.add(l4);
                    p3.updateQueue = u3;
                  } else
                    z3.add(l4);
                  if ((p3.mode & 2) === 0) {
                    p3.flags |= 64;
                    h3.flags |= 16384;
                    h3.flags &= -2981;
                    if (h3.tag === 1)
                      if (h3.alternate === null)
                        h3.tag = 17;
                      else {
                        var t3 = zg(-1, 1);
                        t3.tag = 2;
                        Ag(h3, t3);
                      }
                    h3.lanes |= 1;
                    break a;
                  }
                  k3 = void 0;
                  h3 = b3;
                  var q3 = f4.pingCache;
                  q3 === null ? (q3 = f4.pingCache = new Oi(), k3 = new Set(), q3.set(l4, k3)) : (k3 = q3.get(l4), k3 === void 0 && (k3 = new Set(), q3.set(l4, k3)));
                  if (!k3.has(h3)) {
                    k3.add(h3);
                    var v3 = Yj.bind(null, f4, l4, h3);
                    l4.then(v3, v3);
                  }
                  p3.flags |= 4096;
                  p3.lanes = b3;
                  break a;
                }
                p3 = p3.return;
              } while (p3 !== null);
              k3 = Error((Ra(h3.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
            }
            V5 !== 5 && (V5 = 2);
            k3 = Mi(k3, h3);
            p3 = g3;
            do {
              switch (p3.tag) {
                case 3:
                  f4 = k3;
                  p3.flags |= 4096;
                  b3 &= -b3;
                  p3.lanes |= b3;
                  var J2 = Pi(p3, f4, b3);
                  Bg(p3, J2);
                  break a;
                case 1:
                  f4 = k3;
                  var K = p3.type, Q2 = p3.stateNode;
                  if ((p3.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                    p3.flags |= 4096;
                    b3 &= -b3;
                    p3.lanes |= b3;
                    var L4 = Si(p3, f4, b3);
                    Bg(p3, L4);
                    break a;
                  }
              }
              p3 = p3.return;
            } while (p3 !== null);
          }
          Zj(c3);
        } catch (va) {
          b3 = va;
          Y3 === c3 && c3 !== null && (Y3 = c3 = c3.return);
          continue;
        }
        break;
      } while (1);
    }
    function Pj() {
      var a4 = oj.current;
      oj.current = Gh;
      return a4 === null ? Gh : a4;
    }
    function Tj(a4, b3) {
      var c3 = X3;
      X3 |= 16;
      var d3 = Pj();
      U3 === a4 && W4 === b3 || Qj(a4, b3);
      do
        try {
          ak();
          break;
        } catch (e2) {
          Sj(a4, e2);
        }
      while (1);
      qg();
      X3 = c3;
      oj.current = d3;
      if (Y3 !== null)
        throw Error(y3(261));
      U3 = null;
      W4 = 0;
      return V5;
    }
    function ak() {
      for (; Y3 !== null; )
        bk(Y3);
    }
    function Rj() {
      for (; Y3 !== null && !Qf(); )
        bk(Y3);
    }
    function bk(a4) {
      var b3 = ck(a4.alternate, a4, qj);
      a4.memoizedProps = a4.pendingProps;
      b3 === null ? Zj(a4) : Y3 = b3;
      pj.current = null;
    }
    function Zj(a4) {
      var b3 = a4;
      do {
        var c3 = b3.alternate;
        a4 = b3.return;
        if ((b3.flags & 2048) === 0) {
          c3 = Gi(c3, b3, qj);
          if (c3 !== null) {
            Y3 = c3;
            return;
          }
          c3 = b3;
          if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
            for (var d3 = 0, e2 = c3.child; e2 !== null; )
              d3 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
            c3.childLanes = d3;
          }
          a4 !== null && (a4.flags & 2048) === 0 && (a4.firstEffect === null && (a4.firstEffect = b3.firstEffect), b3.lastEffect !== null && (a4.lastEffect !== null && (a4.lastEffect.nextEffect = b3.firstEffect), a4.lastEffect = b3.lastEffect), 1 < b3.flags && (a4.lastEffect !== null ? a4.lastEffect.nextEffect = b3 : a4.firstEffect = b3, a4.lastEffect = b3));
        } else {
          c3 = Li(b3);
          if (c3 !== null) {
            c3.flags &= 2047;
            Y3 = c3;
            return;
          }
          a4 !== null && (a4.firstEffect = a4.lastEffect = null, a4.flags |= 2048);
        }
        b3 = b3.sibling;
        if (b3 !== null) {
          Y3 = b3;
          return;
        }
        Y3 = b3 = a4;
      } while (b3 !== null);
      V5 === 0 && (V5 = 5);
    }
    function Uj(a4) {
      var b3 = eg();
      gg(99, dk.bind(null, a4, b3));
      return null;
    }
    function dk(a4, b3) {
      do
        Oj();
      while (yj !== null);
      if ((X3 & 48) !== 0)
        throw Error(y3(327));
      var c3 = a4.finishedWork;
      if (c3 === null)
        return null;
      a4.finishedWork = null;
      a4.finishedLanes = 0;
      if (c3 === a4.current)
        throw Error(y3(177));
      a4.callbackNode = null;
      var d3 = c3.lanes | c3.childLanes, e2 = d3, f4 = a4.pendingLanes & ~e2;
      a4.pendingLanes = e2;
      a4.suspendedLanes = 0;
      a4.pingedLanes = 0;
      a4.expiredLanes &= e2;
      a4.mutableReadLanes &= e2;
      a4.entangledLanes &= e2;
      e2 = a4.entanglements;
      for (var g3 = a4.eventTimes, h3 = a4.expirationTimes; 0 < f4; ) {
        var k3 = 31 - Vc(f4), l4 = 1 << k3;
        e2[k3] = 0;
        g3[k3] = -1;
        h3[k3] = -1;
        f4 &= ~l4;
      }
      Cj !== null && (d3 & 24) === 0 && Cj.has(a4) && Cj.delete(a4);
      a4 === U3 && (Y3 = U3 = null, W4 = 0);
      1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d3 = c3.firstEffect) : d3 = c3 : d3 = c3.firstEffect;
      if (d3 !== null) {
        e2 = X3;
        X3 |= 32;
        pj.current = null;
        kf = fd;
        g3 = Ne();
        if (Oe(g3)) {
          if ("selectionStart" in g3)
            h3 = { start: g3.selectionStart, end: g3.selectionEnd };
          else
            a:
              if (h3 = (h3 = g3.ownerDocument) && h3.defaultView || window, (l4 = h3.getSelection && h3.getSelection()) && l4.rangeCount !== 0) {
                h3 = l4.anchorNode;
                f4 = l4.anchorOffset;
                k3 = l4.focusNode;
                l4 = l4.focusOffset;
                try {
                  h3.nodeType, k3.nodeType;
                } catch (va) {
                  h3 = null;
                  break a;
                }
                var n3 = 0, A3 = -1, p3 = -1, C3 = 0, x3 = 0, w3 = g3, z3 = null;
                b:
                  for (; ; ) {
                    for (var u3; ; ) {
                      w3 !== h3 || f4 !== 0 && w3.nodeType !== 3 || (A3 = n3 + f4);
                      w3 !== k3 || l4 !== 0 && w3.nodeType !== 3 || (p3 = n3 + l4);
                      w3.nodeType === 3 && (n3 += w3.nodeValue.length);
                      if ((u3 = w3.firstChild) === null)
                        break;
                      z3 = w3;
                      w3 = u3;
                    }
                    for (; ; ) {
                      if (w3 === g3)
                        break b;
                      z3 === h3 && ++C3 === f4 && (A3 = n3);
                      z3 === k3 && ++x3 === l4 && (p3 = n3);
                      if ((u3 = w3.nextSibling) !== null)
                        break;
                      w3 = z3;
                      z3 = w3.parentNode;
                    }
                    w3 = u3;
                  }
                h3 = A3 === -1 || p3 === -1 ? null : { start: A3, end: p3 };
              } else
                h3 = null;
          h3 = h3 || { start: 0, end: 0 };
        } else
          h3 = null;
        lf = { focusedElem: g3, selectionRange: h3 };
        fd = false;
        Ij = null;
        Jj = false;
        Z4 = d3;
        do
          try {
            ek();
          } catch (va) {
            if (Z4 === null)
              throw Error(y3(330));
            Wi(Z4, va);
            Z4 = Z4.nextEffect;
          }
        while (Z4 !== null);
        Ij = null;
        Z4 = d3;
        do
          try {
            for (g3 = a4; Z4 !== null; ) {
              var t3 = Z4.flags;
              t3 & 16 && pb(Z4.stateNode, "");
              if (t3 & 128) {
                var q3 = Z4.alternate;
                if (q3 !== null) {
                  var v3 = q3.ref;
                  v3 !== null && (typeof v3 === "function" ? v3(null) : v3.current = null);
                }
              }
              switch (t3 & 1038) {
                case 2:
                  fj(Z4);
                  Z4.flags &= -3;
                  break;
                case 6:
                  fj(Z4);
                  Z4.flags &= -3;
                  ij(Z4.alternate, Z4);
                  break;
                case 1024:
                  Z4.flags &= -1025;
                  break;
                case 1028:
                  Z4.flags &= -1025;
                  ij(Z4.alternate, Z4);
                  break;
                case 4:
                  ij(Z4.alternate, Z4);
                  break;
                case 8:
                  h3 = Z4;
                  cj(g3, h3);
                  var J2 = h3.alternate;
                  dj(h3);
                  J2 !== null && dj(J2);
              }
              Z4 = Z4.nextEffect;
            }
          } catch (va) {
            if (Z4 === null)
              throw Error(y3(330));
            Wi(Z4, va);
            Z4 = Z4.nextEffect;
          }
        while (Z4 !== null);
        v3 = lf;
        q3 = Ne();
        t3 = v3.focusedElem;
        g3 = v3.selectionRange;
        if (q3 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
          g3 !== null && Oe(t3) && (q3 = g3.start, v3 = g3.end, v3 === void 0 && (v3 = q3), "selectionStart" in t3 ? (t3.selectionStart = q3, t3.selectionEnd = Math.min(v3, t3.value.length)) : (v3 = (q3 = t3.ownerDocument || document) && q3.defaultView || window, v3.getSelection && (v3 = v3.getSelection(), h3 = t3.textContent.length, J2 = Math.min(g3.start, h3), g3 = g3.end === void 0 ? J2 : Math.min(g3.end, h3), !v3.extend && J2 > g3 && (h3 = g3, g3 = J2, J2 = h3), h3 = Le(t3, J2), f4 = Le(t3, g3), h3 && f4 && (v3.rangeCount !== 1 || v3.anchorNode !== h3.node || v3.anchorOffset !== h3.offset || v3.focusNode !== f4.node || v3.focusOffset !== f4.offset) && (q3 = q3.createRange(), q3.setStart(h3.node, h3.offset), v3.removeAllRanges(), J2 > g3 ? (v3.addRange(q3), v3.extend(f4.node, f4.offset)) : (q3.setEnd(f4.node, f4.offset), v3.addRange(q3))))));
          q3 = [];
          for (v3 = t3; v3 = v3.parentNode; )
            v3.nodeType === 1 && q3.push({ element: v3, left: v3.scrollLeft, top: v3.scrollTop });
          typeof t3.focus === "function" && t3.focus();
          for (t3 = 0; t3 < q3.length; t3++)
            v3 = q3[t3], v3.element.scrollLeft = v3.left, v3.element.scrollTop = v3.top;
        }
        fd = !!kf;
        lf = kf = null;
        a4.current = c3;
        Z4 = d3;
        do
          try {
            for (t3 = a4; Z4 !== null; ) {
              var K = Z4.flags;
              K & 36 && Yi(t3, Z4.alternate, Z4);
              if (K & 128) {
                q3 = void 0;
                var Q2 = Z4.ref;
                if (Q2 !== null) {
                  var L4 = Z4.stateNode;
                  switch (Z4.tag) {
                    case 5:
                      q3 = L4;
                      break;
                    default:
                      q3 = L4;
                  }
                  typeof Q2 === "function" ? Q2(q3) : Q2.current = q3;
                }
              }
              Z4 = Z4.nextEffect;
            }
          } catch (va) {
            if (Z4 === null)
              throw Error(y3(330));
            Wi(Z4, va);
            Z4 = Z4.nextEffect;
          }
        while (Z4 !== null);
        Z4 = null;
        $f();
        X3 = e2;
      } else
        a4.current = c3;
      if (xj)
        xj = false, yj = a4, zj = b3;
      else
        for (Z4 = d3; Z4 !== null; )
          b3 = Z4.nextEffect, Z4.nextEffect = null, Z4.flags & 8 && (K = Z4, K.sibling = null, K.stateNode = null), Z4 = b3;
      d3 = a4.pendingLanes;
      d3 === 0 && (Ti = null);
      d3 === 1 ? a4 === Ej ? Dj++ : (Dj = 0, Ej = a4) : Dj = 0;
      c3 = c3.stateNode;
      if (Mf && typeof Mf.onCommitFiberRoot === "function")
        try {
          Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
        } catch (va) {
        }
      Mj(a4, O3());
      if (Qi)
        throw Qi = false, a4 = Ri, Ri = null, a4;
      if ((X3 & 8) !== 0)
        return null;
      ig();
      return null;
    }
    function ek() {
      for (; Z4 !== null; ) {
        var a4 = Z4.alternate;
        Jj || Ij === null || ((Z4.flags & 8) !== 0 ? dc(Z4, Ij) && (Jj = true) : Z4.tag === 13 && mj(a4, Z4) && dc(Z4, Ij) && (Jj = true));
        var b3 = Z4.flags;
        (b3 & 256) !== 0 && Xi(a4, Z4);
        (b3 & 512) === 0 || xj || (xj = true, hg(97, function() {
          Oj();
          return null;
        }));
        Z4 = Z4.nextEffect;
      }
    }
    function Oj() {
      if (zj !== 90) {
        var a4 = 97 < zj ? 97 : zj;
        zj = 90;
        return gg(a4, fk);
      }
      return false;
    }
    function $i(a4, b3) {
      Aj.push(b3, a4);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function Zi(a4, b3) {
      Bj.push(b3, a4);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function fk() {
      if (yj === null)
        return false;
      var a4 = yj;
      yj = null;
      if ((X3 & 48) !== 0)
        throw Error(y3(331));
      var b3 = X3;
      X3 |= 32;
      var c3 = Bj;
      Bj = [];
      for (var d3 = 0; d3 < c3.length; d3 += 2) {
        var e2 = c3[d3], f4 = c3[d3 + 1], g3 = e2.destroy;
        e2.destroy = void 0;
        if (typeof g3 === "function")
          try {
            g3();
          } catch (k3) {
            if (f4 === null)
              throw Error(y3(330));
            Wi(f4, k3);
          }
      }
      c3 = Aj;
      Aj = [];
      for (d3 = 0; d3 < c3.length; d3 += 2) {
        e2 = c3[d3];
        f4 = c3[d3 + 1];
        try {
          var h3 = e2.create;
          e2.destroy = h3();
        } catch (k3) {
          if (f4 === null)
            throw Error(y3(330));
          Wi(f4, k3);
        }
      }
      for (h3 = a4.current.firstEffect; h3 !== null; )
        a4 = h3.nextEffect, h3.nextEffect = null, h3.flags & 8 && (h3.sibling = null, h3.stateNode = null), h3 = a4;
      X3 = b3;
      ig();
      return true;
    }
    function gk(a4, b3, c3) {
      b3 = Mi(c3, b3);
      b3 = Pi(a4, b3, 1);
      Ag(a4, b3);
      b3 = Hg();
      a4 = Kj(a4, 1);
      a4 !== null && ($c(a4, 1, b3), Mj(a4, b3));
    }
    function Wi(a4, b3) {
      if (a4.tag === 3)
        gk(a4, a4, b3);
      else
        for (var c3 = a4.return; c3 !== null; ) {
          if (c3.tag === 3) {
            gk(c3, a4, b3);
            break;
          } else if (c3.tag === 1) {
            var d3 = c3.stateNode;
            if (typeof c3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3))) {
              a4 = Mi(b3, a4);
              var e2 = Si(c3, a4, 1);
              Ag(c3, e2);
              e2 = Hg();
              c3 = Kj(c3, 1);
              if (c3 !== null)
                $c(c3, 1, e2), Mj(c3, e2);
              else if (typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3)))
                try {
                  d3.componentDidCatch(b3, a4);
                } catch (f4) {
                }
              break;
            }
          }
          c3 = c3.return;
        }
    }
    function Yj(a4, b3, c3) {
      var d3 = a4.pingCache;
      d3 !== null && d3.delete(b3);
      b3 = Hg();
      a4.pingedLanes |= a4.suspendedLanes & c3;
      U3 === a4 && (W4 & c3) === c3 && (V5 === 4 || V5 === 3 && (W4 & 62914560) === W4 && 500 > O3() - jj ? Qj(a4, 0) : uj |= c3);
      Mj(a4, b3);
    }
    function lj(a4, b3) {
      var c3 = a4.stateNode;
      c3 !== null && c3.delete(b3);
      b3 = 0;
      b3 === 0 && (b3 = a4.mode, (b3 & 2) === 0 ? b3 = 1 : (b3 & 4) === 0 ? b3 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b3 = Yc(62914560 & ~Gj), b3 === 0 && (b3 = 4194304)));
      c3 = Hg();
      a4 = Kj(a4, b3);
      a4 !== null && ($c(a4, b3, c3), Mj(a4, c3));
    }
    var ck;
    ck = function(a4, b3, c3) {
      var d3 = b3.lanes;
      if (a4 !== null)
        if (a4.memoizedProps !== b3.pendingProps || N2.current)
          ug = true;
        else if ((c3 & d3) !== 0)
          ug = (a4.flags & 16384) !== 0 ? true : false;
        else {
          ug = false;
          switch (b3.tag) {
            case 3:
              ri(b3);
              sh();
              break;
            case 5:
              gh(b3);
              break;
            case 1:
              Ff(b3.type) && Jf(b3);
              break;
            case 4:
              eh(b3, b3.stateNode.containerInfo);
              break;
            case 10:
              d3 = b3.memoizedProps.value;
              var e2 = b3.type._context;
              I3(mg, e2._currentValue);
              e2._currentValue = d3;
              break;
            case 13:
              if (b3.memoizedState !== null) {
                if ((c3 & b3.child.childLanes) !== 0)
                  return ti(a4, b3, c3);
                I3(P3, P3.current & 1);
                b3 = hi(a4, b3, c3);
                return b3 !== null ? b3.sibling : null;
              }
              I3(P3, P3.current & 1);
              break;
            case 19:
              d3 = (c3 & b3.childLanes) !== 0;
              if ((a4.flags & 64) !== 0) {
                if (d3)
                  return Ai(a4, b3, c3);
                b3.flags |= 64;
              }
              e2 = b3.memoizedState;
              e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
              I3(P3, P3.current);
              if (d3)
                break;
              else
                return null;
            case 23:
            case 24:
              return b3.lanes = 0, mi(a4, b3, c3);
          }
          return hi(a4, b3, c3);
        }
      else
        ug = false;
      b3.lanes = 0;
      switch (b3.tag) {
        case 2:
          d3 = b3.type;
          a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2);
          a4 = b3.pendingProps;
          e2 = Ef(b3, M3.current);
          tg(b3, c3);
          e2 = Ch(null, b3, d3, a4, e2, c3);
          b3.flags |= 1;
          if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
            b3.tag = 1;
            b3.memoizedState = null;
            b3.updateQueue = null;
            if (Ff(d3)) {
              var f4 = true;
              Jf(b3);
            } else
              f4 = false;
            b3.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
            xg(b3);
            var g3 = d3.getDerivedStateFromProps;
            typeof g3 === "function" && Gg(b3, d3, g3, a4);
            e2.updater = Kg;
            b3.stateNode = e2;
            e2._reactInternals = b3;
            Og(b3, d3, a4, c3);
            b3 = qi(null, b3, d3, true, f4, c3);
          } else
            b3.tag = 0, fi(null, b3, e2, c3), b3 = b3.child;
          return b3;
        case 16:
          e2 = b3.elementType;
          a: {
            a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2);
            a4 = b3.pendingProps;
            f4 = e2._init;
            e2 = f4(e2._payload);
            b3.type = e2;
            f4 = b3.tag = hk(e2);
            a4 = lg(e2, a4);
            switch (f4) {
              case 0:
                b3 = li(null, b3, e2, a4, c3);
                break a;
              case 1:
                b3 = pi(null, b3, e2, a4, c3);
                break a;
              case 11:
                b3 = gi(null, b3, e2, a4, c3);
                break a;
              case 14:
                b3 = ii(null, b3, e2, lg(e2.type, a4), d3, c3);
                break a;
            }
            throw Error(y3(306, e2, ""));
          }
          return b3;
        case 0:
          return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : lg(d3, e2), li(a4, b3, d3, e2, c3);
        case 1:
          return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : lg(d3, e2), pi(a4, b3, d3, e2, c3);
        case 3:
          ri(b3);
          d3 = b3.updateQueue;
          if (a4 === null || d3 === null)
            throw Error(y3(282));
          d3 = b3.pendingProps;
          e2 = b3.memoizedState;
          e2 = e2 !== null ? e2.element : null;
          yg(a4, b3);
          Cg(b3, d3, null, c3);
          d3 = b3.memoizedState.element;
          if (d3 === e2)
            sh(), b3 = hi(a4, b3, c3);
          else {
            e2 = b3.stateNode;
            if (f4 = e2.hydrate)
              kh = rf(b3.stateNode.containerInfo.firstChild), jh = b3, f4 = lh = true;
            if (f4) {
              a4 = e2.mutableSourceEagerHydrationData;
              if (a4 != null)
                for (e2 = 0; e2 < a4.length; e2 += 2)
                  f4 = a4[e2], f4._workInProgressVersionPrimary = a4[e2 + 1], th.push(f4);
              c3 = Zg(b3, null, d3, c3);
              for (b3.child = c3; c3; )
                c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
            } else
              fi(a4, b3, d3, c3), sh();
            b3 = b3.child;
          }
          return b3;
        case 5:
          return gh(b3), a4 === null && ph(b3), d3 = b3.type, e2 = b3.pendingProps, f4 = a4 !== null ? a4.memoizedProps : null, g3 = e2.children, nf(d3, e2) ? g3 = null : f4 !== null && nf(d3, f4) && (b3.flags |= 16), oi(a4, b3), fi(a4, b3, g3, c3), b3.child;
        case 6:
          return a4 === null && ph(b3), null;
        case 13:
          return ti(a4, b3, c3);
        case 4:
          return eh(b3, b3.stateNode.containerInfo), d3 = b3.pendingProps, a4 === null ? b3.child = Yg(b3, null, d3, c3) : fi(a4, b3, d3, c3), b3.child;
        case 11:
          return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : lg(d3, e2), gi(a4, b3, d3, e2, c3);
        case 7:
          return fi(a4, b3, b3.pendingProps, c3), b3.child;
        case 8:
          return fi(a4, b3, b3.pendingProps.children, c3), b3.child;
        case 12:
          return fi(a4, b3, b3.pendingProps.children, c3), b3.child;
        case 10:
          a: {
            d3 = b3.type._context;
            e2 = b3.pendingProps;
            g3 = b3.memoizedProps;
            f4 = e2.value;
            var h3 = b3.type._context;
            I3(mg, h3._currentValue);
            h3._currentValue = f4;
            if (g3 !== null)
              if (h3 = g3.value, f4 = He(h3, f4) ? 0 : (typeof d3._calculateChangedBits === "function" ? d3._calculateChangedBits(h3, f4) : 1073741823) | 0, f4 === 0) {
                if (g3.children === e2.children && !N2.current) {
                  b3 = hi(a4, b3, c3);
                  break a;
                }
              } else
                for (h3 = b3.child, h3 !== null && (h3.return = b3); h3 !== null; ) {
                  var k3 = h3.dependencies;
                  if (k3 !== null) {
                    g3 = h3.child;
                    for (var l4 = k3.firstContext; l4 !== null; ) {
                      if (l4.context === d3 && (l4.observedBits & f4) !== 0) {
                        h3.tag === 1 && (l4 = zg(-1, c3 & -c3), l4.tag = 2, Ag(h3, l4));
                        h3.lanes |= c3;
                        l4 = h3.alternate;
                        l4 !== null && (l4.lanes |= c3);
                        sg(h3.return, c3);
                        k3.lanes |= c3;
                        break;
                      }
                      l4 = l4.next;
                    }
                  } else
                    g3 = h3.tag === 10 ? h3.type === b3.type ? null : h3.child : h3.child;
                  if (g3 !== null)
                    g3.return = h3;
                  else
                    for (g3 = h3; g3 !== null; ) {
                      if (g3 === b3) {
                        g3 = null;
                        break;
                      }
                      h3 = g3.sibling;
                      if (h3 !== null) {
                        h3.return = g3.return;
                        g3 = h3;
                        break;
                      }
                      g3 = g3.return;
                    }
                  h3 = g3;
                }
            fi(a4, b3, e2.children, c3);
            b3 = b3.child;
          }
          return b3;
        case 9:
          return e2 = b3.type, f4 = b3.pendingProps, d3 = f4.children, tg(b3, c3), e2 = vg(e2, f4.unstable_observedBits), d3 = d3(e2), b3.flags |= 1, fi(a4, b3, d3, c3), b3.child;
        case 14:
          return e2 = b3.type, f4 = lg(e2, b3.pendingProps), f4 = lg(e2.type, f4), ii(a4, b3, e2, f4, d3, c3);
        case 15:
          return ki(a4, b3, b3.type, b3.pendingProps, d3, c3);
        case 17:
          return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : lg(d3, e2), a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2), b3.tag = 1, Ff(d3) ? (a4 = true, Jf(b3)) : a4 = false, tg(b3, c3), Mg(b3, d3, e2), Og(b3, d3, e2, c3), qi(null, b3, d3, true, a4, c3);
        case 19:
          return Ai(a4, b3, c3);
        case 23:
          return mi(a4, b3, c3);
        case 24:
          return mi(a4, b3, c3);
      }
      throw Error(y3(156, b3.tag));
    };
    function ik(a4, b3, c3, d3) {
      this.tag = a4;
      this.key = c3;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b3;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d3;
      this.flags = 0;
      this.lastEffect = this.firstEffect = this.nextEffect = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function nh(a4, b3, c3, d3) {
      return new ik(a4, b3, c3, d3);
    }
    function ji(a4) {
      a4 = a4.prototype;
      return !(!a4 || !a4.isReactComponent);
    }
    function hk(a4) {
      if (typeof a4 === "function")
        return ji(a4) ? 1 : 0;
      if (a4 !== void 0 && a4 !== null) {
        a4 = a4.$$typeof;
        if (a4 === Aa)
          return 11;
        if (a4 === Da)
          return 14;
      }
      return 2;
    }
    function Tg(a4, b3) {
      var c3 = a4.alternate;
      c3 === null ? (c3 = nh(a4.tag, b3, a4.key, a4.mode), c3.elementType = a4.elementType, c3.type = a4.type, c3.stateNode = a4.stateNode, c3.alternate = a4, a4.alternate = c3) : (c3.pendingProps = b3, c3.type = a4.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
      c3.childLanes = a4.childLanes;
      c3.lanes = a4.lanes;
      c3.child = a4.child;
      c3.memoizedProps = a4.memoizedProps;
      c3.memoizedState = a4.memoizedState;
      c3.updateQueue = a4.updateQueue;
      b3 = a4.dependencies;
      c3.dependencies = b3 === null ? null : { lanes: b3.lanes, firstContext: b3.firstContext };
      c3.sibling = a4.sibling;
      c3.index = a4.index;
      c3.ref = a4.ref;
      return c3;
    }
    function Vg(a4, b3, c3, d3, e2, f4) {
      var g3 = 2;
      d3 = a4;
      if (typeof a4 === "function")
        ji(a4) && (g3 = 1);
      else if (typeof a4 === "string")
        g3 = 5;
      else
        a:
          switch (a4) {
            case ua:
              return Xg(c3.children, e2, f4, b3);
            case Ha:
              g3 = 8;
              e2 |= 16;
              break;
            case wa:
              g3 = 8;
              e2 |= 1;
              break;
            case xa:
              return a4 = nh(12, c3, b3, e2 | 8), a4.elementType = xa, a4.type = xa, a4.lanes = f4, a4;
            case Ba:
              return a4 = nh(13, c3, b3, e2), a4.type = Ba, a4.elementType = Ba, a4.lanes = f4, a4;
            case Ca:
              return a4 = nh(19, c3, b3, e2), a4.elementType = Ca, a4.lanes = f4, a4;
            case Ia:
              return vi(c3, e2, f4, b3);
            case Ja:
              return a4 = nh(24, c3, b3, e2), a4.elementType = Ja, a4.lanes = f4, a4;
            default:
              if (typeof a4 === "object" && a4 !== null)
                switch (a4.$$typeof) {
                  case ya:
                    g3 = 10;
                    break a;
                  case za:
                    g3 = 9;
                    break a;
                  case Aa:
                    g3 = 11;
                    break a;
                  case Da:
                    g3 = 14;
                    break a;
                  case Ea:
                    g3 = 16;
                    d3 = null;
                    break a;
                  case Fa:
                    g3 = 22;
                    break a;
                }
              throw Error(y3(130, a4 == null ? a4 : typeof a4, ""));
          }
      b3 = nh(g3, c3, b3, e2);
      b3.elementType = a4;
      b3.type = d3;
      b3.lanes = f4;
      return b3;
    }
    function Xg(a4, b3, c3, d3) {
      a4 = nh(7, a4, d3, b3);
      a4.lanes = c3;
      return a4;
    }
    function vi(a4, b3, c3, d3) {
      a4 = nh(23, a4, d3, b3);
      a4.elementType = Ia;
      a4.lanes = c3;
      return a4;
    }
    function Ug(a4, b3, c3) {
      a4 = nh(6, a4, null, b3);
      a4.lanes = c3;
      return a4;
    }
    function Wg(a4, b3, c3) {
      b3 = nh(4, a4.children !== null ? a4.children : [], a4.key, b3);
      b3.lanes = c3;
      b3.stateNode = { containerInfo: a4.containerInfo, pendingChildren: null, implementation: a4.implementation };
      return b3;
    }
    function jk(a4, b3, c3) {
      this.tag = b3;
      this.containerInfo = a4;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.pendingContext = this.context = null;
      this.hydrate = c3;
      this.callbackNode = null;
      this.callbackPriority = 0;
      this.eventTimes = Zc(0);
      this.expirationTimes = Zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = Zc(0);
      this.mutableSourceEagerHydrationData = null;
    }
    function kk(a4, b3, c3) {
      var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: ta, key: d3 == null ? null : "" + d3, children: a4, containerInfo: b3, implementation: c3 };
    }
    function lk(a4, b3, c3, d3) {
      var e2 = b3.current, f4 = Hg(), g3 = Ig(e2);
      a:
        if (c3) {
          c3 = c3._reactInternals;
          b: {
            if (Zb(c3) !== c3 || c3.tag !== 1)
              throw Error(y3(170));
            var h3 = c3;
            do {
              switch (h3.tag) {
                case 3:
                  h3 = h3.stateNode.context;
                  break b;
                case 1:
                  if (Ff(h3.type)) {
                    h3 = h3.stateNode.__reactInternalMemoizedMergedChildContext;
                    break b;
                  }
              }
              h3 = h3.return;
            } while (h3 !== null);
            throw Error(y3(171));
          }
          if (c3.tag === 1) {
            var k3 = c3.type;
            if (Ff(k3)) {
              c3 = If(c3, k3, h3);
              break a;
            }
          }
          c3 = h3;
        } else
          c3 = Cf;
      b3.context === null ? b3.context = c3 : b3.pendingContext = c3;
      b3 = zg(f4, g3);
      b3.payload = { element: a4 };
      d3 = d3 === void 0 ? null : d3;
      d3 !== null && (b3.callback = d3);
      Ag(e2, b3);
      Jg(e2, g3, f4);
      return g3;
    }
    function mk(a4) {
      a4 = a4.current;
      if (!a4.child)
        return null;
      switch (a4.child.tag) {
        case 5:
          return a4.child.stateNode;
        default:
          return a4.child.stateNode;
      }
    }
    function nk(a4, b3) {
      a4 = a4.memoizedState;
      if (a4 !== null && a4.dehydrated !== null) {
        var c3 = a4.retryLane;
        a4.retryLane = c3 !== 0 && c3 < b3 ? c3 : b3;
      }
    }
    function ok(a4, b3) {
      nk(a4, b3);
      (a4 = a4.alternate) && nk(a4, b3);
    }
    function pk() {
      return null;
    }
    function qk(a4, b3, c3) {
      var d3 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
      c3 = new jk(a4, b3, c3 != null && c3.hydrate === true);
      b3 = nh(3, null, null, b3 === 2 ? 7 : b3 === 1 ? 3 : 0);
      c3.current = b3;
      b3.stateNode = c3;
      xg(b3);
      a4[ff] = c3.current;
      cf(a4.nodeType === 8 ? a4.parentNode : a4);
      if (d3)
        for (a4 = 0; a4 < d3.length; a4++) {
          b3 = d3[a4];
          var e2 = b3._getVersion;
          e2 = e2(b3._source);
          c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b3, e2] : c3.mutableSourceEagerHydrationData.push(b3, e2);
        }
      this._internalRoot = c3;
    }
    qk.prototype.render = function(a4) {
      lk(a4, this._internalRoot, null, null);
    };
    qk.prototype.unmount = function() {
      var a4 = this._internalRoot, b3 = a4.containerInfo;
      lk(null, a4, null, function() {
        b3[ff] = null;
      });
    };
    function rk(a4) {
      return !(!a4 || a4.nodeType !== 1 && a4.nodeType !== 9 && a4.nodeType !== 11 && (a4.nodeType !== 8 || a4.nodeValue !== " react-mount-point-unstable "));
    }
    function sk(a4, b3) {
      b3 || (b3 = a4 ? a4.nodeType === 9 ? a4.documentElement : a4.firstChild : null, b3 = !(!b3 || b3.nodeType !== 1 || !b3.hasAttribute("data-reactroot")));
      if (!b3)
        for (var c3; c3 = a4.lastChild; )
          a4.removeChild(c3);
      return new qk(a4, 0, b3 ? { hydrate: true } : void 0);
    }
    function tk(a4, b3, c3, d3, e2) {
      var f4 = c3._reactRootContainer;
      if (f4) {
        var g3 = f4._internalRoot;
        if (typeof e2 === "function") {
          var h3 = e2;
          e2 = function() {
            var a5 = mk(g3);
            h3.call(a5);
          };
        }
        lk(b3, g3, a4, e2);
      } else {
        f4 = c3._reactRootContainer = sk(c3, d3);
        g3 = f4._internalRoot;
        if (typeof e2 === "function") {
          var k3 = e2;
          e2 = function() {
            var a5 = mk(g3);
            k3.call(a5);
          };
        }
        Xj(function() {
          lk(b3, g3, a4, e2);
        });
      }
      return mk(g3);
    }
    ec = function(a4) {
      if (a4.tag === 13) {
        var b3 = Hg();
        Jg(a4, 4, b3);
        ok(a4, 4);
      }
    };
    fc = function(a4) {
      if (a4.tag === 13) {
        var b3 = Hg();
        Jg(a4, 67108864, b3);
        ok(a4, 67108864);
      }
    };
    gc = function(a4) {
      if (a4.tag === 13) {
        var b3 = Hg(), c3 = Ig(a4);
        Jg(a4, c3, b3);
        ok(a4, c3);
      }
    };
    hc = function(a4, b3) {
      return b3();
    };
    yb = function(a4, b3, c3) {
      switch (b3) {
        case "input":
          ab(a4, c3);
          b3 = c3.name;
          if (c3.type === "radio" && b3 != null) {
            for (c3 = a4; c3.parentNode; )
              c3 = c3.parentNode;
            c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
            for (b3 = 0; b3 < c3.length; b3++) {
              var d3 = c3[b3];
              if (d3 !== a4 && d3.form === a4.form) {
                var e2 = Db(d3);
                if (!e2)
                  throw Error(y3(90));
                Wa(d3);
                ab(d3, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a4, c3);
          break;
        case "select":
          b3 = c3.value, b3 != null && fb(a4, !!c3.multiple, b3, false);
      }
    };
    Gb = Wj;
    Hb = function(a4, b3, c3, d3, e2) {
      var f4 = X3;
      X3 |= 4;
      try {
        return gg(98, a4.bind(null, b3, c3, d3, e2));
      } finally {
        X3 = f4, X3 === 0 && (wj(), ig());
      }
    };
    Ib = function() {
      (X3 & 49) === 0 && (Vj(), Oj());
    };
    Jb = function(a4, b3) {
      var c3 = X3;
      X3 |= 2;
      try {
        return a4(b3);
      } finally {
        X3 = c3, X3 === 0 && (wj(), ig());
      }
    };
    function uk(a4, b3) {
      var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rk(b3))
        throw Error(y3(200));
      return kk(a4, b3, null, c3);
    }
    var vk = { Events: [Cb, ue2, Db, Eb, Fb, Oj, { current: false }] };
    var wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
    var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a4) {
      a4 = cc(a4);
      return a4 === null ? null : a4.stateNode;
    }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
      yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!yk.isDisabled && yk.supportsFiber)
        try {
          Lf = yk.inject(xk), Mf = yk;
        } catch (a4) {
        }
    }
    var yk;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
    exports2.createPortal = uk;
    exports2.findDOMNode = function(a4) {
      if (a4 == null)
        return null;
      if (a4.nodeType === 1)
        return a4;
      var b3 = a4._reactInternals;
      if (b3 === void 0) {
        if (typeof a4.render === "function")
          throw Error(y3(188));
        throw Error(y3(268, Object.keys(a4)));
      }
      a4 = cc(b3);
      a4 = a4 === null ? null : a4.stateNode;
      return a4;
    };
    exports2.flushSync = function(a4, b3) {
      var c3 = X3;
      if ((c3 & 48) !== 0)
        return a4(b3);
      X3 |= 1;
      try {
        if (a4)
          return gg(99, a4.bind(null, b3));
      } finally {
        X3 = c3, ig();
      }
    };
    exports2.hydrate = function(a4, b3, c3) {
      if (!rk(b3))
        throw Error(y3(200));
      return tk(null, a4, b3, true, c3);
    };
    exports2.render = function(a4, b3, c3) {
      if (!rk(b3))
        throw Error(y3(200));
      return tk(null, a4, b3, false, c3);
    };
    exports2.unmountComponentAtNode = function(a4) {
      if (!rk(a4))
        throw Error(y3(40));
      return a4._reactRootContainer ? (Xj(function() {
        tk(null, null, a4, false, function() {
          a4._reactRootContainer = null;
          a4[ff] = null;
        });
      }), true) : false;
    };
    exports2.unstable_batchedUpdates = Wj;
    exports2.unstable_createPortal = function(a4, b3) {
      return uk(a4, b3, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    exports2.unstable_renderSubtreeIntoContainer = function(a4, b3, c3, d3) {
      if (!rk(c3))
        throw Error(y3(200));
      if (a4 == null || a4._reactInternals === void 0)
        throw Error(y3(38));
      return tk(a4, b3, c3, false, d3);
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

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "../../node_modules/prop-types/factoryWithThrowingShims.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module2.exports = function() {
      function shim(props, propName, componentName, location2, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports2, module2) {
    if (false) {
      ReactIs = null;
      throwOnDirectAccess = true;
      module2.exports = null(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// src/index.tsx
var import_react69 = __toModule(require_react());
var import_react_dom2 = __toModule(require_react_dom());

// src/app.tsx
var React16 = __toModule(require_react());

// ../../node_modules/mobx/dist/mobx.esm.js
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (false) {
    var e2 = typeof error === "string" ? error : errors[error];
    if (typeof e2 === "function")
      e2 = e2.apply(null, args);
    throw new Error("[MobX] " + e2);
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
function isFunction(fn2) {
  return typeof fn2 === "function";
}
function isStringish(value) {
  var t3 = typeof value;
  switch (t3) {
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
  return function(x3) {
    return isObject(x3) && x3[propName] === true;
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
  return [].concat(keys, symbols.filter(function(s3) {
    return objectPrototype.propertyIsEnumerable.call(object3, s3);
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
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
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
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
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
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n3 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n3 === "Object" && o3.constructor)
    n3 = o3.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o3);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o3, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++)
    arr2[i3] = arr[i3];
  return arr2;
}
function _createForOfIteratorHelperLoose(o3, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o3[Symbol.iterator] == null) {
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o3[i3++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o3[Symbol.iterator]();
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
function identityComparer(a4, b3) {
  return a4 === b3;
}
function structuralComparer(a4, b3) {
  return deepEqual(a4, b3);
}
function shallowComparer(a4, b3) {
  return deepEqual(a4, b3, 1);
}
function defaultComparer(a4, b3) {
  if (Object.is)
    return Object.is(a4, b3);
  return a4 === b3 ? a4 !== 0 || 1 / a4 === 1 / b3 : a4 !== a4 && b3 !== b3;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};
function deepEnhancer(v3, _16, name) {
  if (isObservable(v3))
    return v3;
  if (Array.isArray(v3))
    return observable.array(v3, {
      name
    });
  if (isPlainObject(v3))
    return observable.object(v3, void 0, {
      name
    });
  if (isES6Map(v3))
    return observable.map(v3, {
      name
    });
  if (isES6Set(v3))
    return observable.set(v3, {
      name
    });
  if (typeof v3 === "function" && !isAction(v3) && !isFlow(v3)) {
    if (isGenerator(v3)) {
      return flow(v3);
    } else {
      return autoAction(name, v3);
    }
  }
  return v3;
}
function shallowEnhancer(v3, _16, name) {
  if (v3 === void 0 || v3 === null)
    return v3;
  if (isObservableObject(v3) || isObservableArray(v3) || isObservableMap(v3) || isObservableSet(v3))
    return v3;
  if (Array.isArray(v3))
    return observable.array(v3, {
      name,
      deep: false
    });
  if (isPlainObject(v3))
    return observable.object(v3, void 0, {
      name,
      deep: false
    });
  if (isES6Map(v3))
    return observable.map(v3, {
      name,
      deep: false
    });
  if (isES6Set(v3))
    return observable.set(v3, {
      name,
      deep: false
    });
  if (false)
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v3, oldValue) {
  if (false)
    die("observable.struct should not be used with observable values");
  if (deepEqual(v3, oldValue))
    return oldValue;
  return v3;
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
function createObservable(v3, arg2, arg3) {
  if (isStringish(arg2)) {
    storeAnnotation(v3, arg2, observableAnnotation);
    return;
  }
  if (isObservable(v3))
    return v3;
  if (isPlainObject(v3))
    return observable.object(v3, arg2, arg3);
  if (Array.isArray(v3))
    return observable.array(v3, arg2);
  if (isES6Map(v3))
    return observable.map(v3, arg2);
  if (isES6Set(v3))
    return observable.set(v3, arg2);
  if (typeof v3 === "object" && v3 !== null)
    return v3;
  return observable.box(v3, arg2);
}
Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o3 = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o3), o3.name, true, o3.equals);
  },
  array: function array(initialValues, options) {
    var o3 = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o3.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o3), o3.name);
  },
  map: function map(initialValues, options) {
    var o3 = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o3), o3.name);
  },
  set: function set(initialValues, options) {
    var o3 = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o3), o3.name);
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
function createAction(actionName, fn2, autoAction3, ref) {
  if (autoAction3 === void 0) {
    autoAction3 = false;
  }
  if (false) {
    if (!isFunction(fn2))
      die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName)
      die("actions should have valid names, got: '" + actionName + "'");
  }
  function res() {
    return executeAction(actionName, autoAction3, fn2, ref || this, arguments);
  }
  res.isMobxAction = true;
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn2, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
  try {
    return fn2.apply(scope, args);
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
        } catch (e2) {
          res = new CaughtException(e2);
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
function isCaughtException(e2) {
  return e2 instanceof CaughtException;
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
      var obs = derivation.observing_, l4 = obs.length;
      for (var i3 = 0; i3 < l4; i3++) {
        var obj = obs[i3];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e2) {
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
function trackDerivedFunction(derivation, f4, context) {
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
    result = f4.call(context);
  } else {
    try {
      result = f4.call(context);
    } catch (e2) {
      result = new CaughtException(e2);
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
  var i0 = 0, l4 = derivation.unboundDepsCount_;
  for (var i3 = 0; i3 < l4; i3++) {
    var dep = observing[i3];
    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i3)
        observing[i0] = dep;
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l4 = prevObserving.length;
  while (l4--) {
    var _dep = prevObserving[l4];
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
  var i3 = obs.length;
  while (i3--) {
    removeObserver(obs[i3], derivation);
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
  var i3 = obs.length;
  while (i3--) {
    obs[i3].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
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
    for (var i3 = 0; i3 < list.length; i3++) {
      var observable3 = list[i3];
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
  observable3.observers_.forEach(function(d3) {
    if (d3.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (false) {
        logTraceInfo(d3, observable3);
      }
      d3.onBecomeStale_();
    }
    d3.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable3) {
  if (observable3.lowestObserverState_ === IDerivationState_.STALE_)
    return;
  observable3.lowestObserverState_ = IDerivationState_.STALE_;
  observable3.observers_.forEach(function(d3) {
    if (d3.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d3.dependenciesState_ = IDerivationState_.STALE_;
      if (false) {
        logTraceInfo(d3, observable3);
      }
    } else if (d3.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable3.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable3) {
  if (observable3.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_)
    return;
  observable3.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable3.observers_.forEach(function(d3) {
    if (d3.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d3.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d3.onBecomeStale_();
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
        } catch (e2) {
          this.reportExceptionInDerivation_(e2);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn2) {
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
    var result = trackDerivedFunction(this, fn2, void 0);
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
    globalState.globalReactionErrorHandlers.forEach(function(f4) {
      return f4(error, _this);
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
    var r3 = this.dispose.bind(this);
    r3[$mobx] = this;
    return r3;
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
var reactionScheduler = function reactionScheduler2(f4) {
  return f4();
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
    for (var i3 = 0, l4 = remainingReactions.length; i3 < l4; i3++) {
      remainingReactions[i3].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn2) {
  var baseScheduler = reactionScheduler;
  reactionScheduler = function reactionScheduler4(f4) {
    return fn2(function() {
      return baseScheduler(f4);
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
      globalState.spyListeners = globalState.spyListeners.filter(function(l4) {
        return l4 !== listener;
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
var run = function run2(f4) {
  return f4();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f4) {
    return setTimeout(f4, opts.delay);
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
        } catch (e2) {
          return reject(e2);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e2) {
          return reject(e2);
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
      } catch (e2) {
        rejector(e2);
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
function isFlow(fn2) {
  return (fn2 == null ? void 0 : fn2.isMobXFlow) === true;
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
    for (var i3 = 0, l4 = interceptors.length; i3 < l4; i3++) {
      change = interceptors[i3](change);
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
  for (var i3 = 0, l4 = listeners.length; i3 < l4; i3++) {
    listeners[i3](change);
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
      for (var i3 = 0; i3 < newLength - currentLength; i3++) {
        newItems[i3] = void 0;
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
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v3) {
      return _this.enhancer_(v3, void 0);
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
      for (var i3 = 0; i3 < newItems.length; i3++) {
        this.values_[index + i3] = newItems[i3];
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
    return Array.prototype.concat.apply(this.slice(), arrays.map(function(a4) {
      return isObservableArray(a4) ? a4.slice() : a4;
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
  var prop = _ref[0], fn2 = _ref[1];
  if (prop !== "concat")
    addHiddenProp(LegacyObservableArray.prototype, prop, fn2);
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
function deepEqual(a4, b3, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a4, b3, depth);
}
function eq(a4, b3, depth, aStack, bStack) {
  if (a4 === b3)
    return a4 !== 0 || 1 / a4 === 1 / b3;
  if (a4 == null || b3 == null)
    return false;
  if (a4 !== a4)
    return b3 !== b3;
  var type = typeof a4;
  if (!isFunction(type) && type !== "object" && typeof b3 != "object")
    return false;
  var className = toString.call(a4);
  if (className !== toString.call(b3))
    return false;
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a4 === "" + b3;
    case "[object Number]":
      if (+a4 !== +a4)
        return +b3 !== +b3;
      return +a4 === 0 ? 1 / +a4 === 1 / b3 : +a4 === +b3;
    case "[object Date]":
    case "[object Boolean]":
      return +a4 === +b3;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a4) === Symbol.valueOf.call(b3);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a4 = unwrap(a4);
  b3 = unwrap(b3);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a4 != "object" || typeof b3 != "object")
      return false;
    var aCtor = a4.constructor, bCtor = b3.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a4 && "constructor" in b3) {
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
    if (aStack[length] === a4)
      return bStack[length] === b3;
  }
  aStack.push(a4);
  bStack.push(b3);
  if (areArrays) {
    length = a4.length;
    if (length !== b3.length)
      return false;
    while (length--) {
      if (!eq(a4[length], b3[length], depth - 1, aStack, bStack))
        return false;
    }
  } else {
    var keys = Object.keys(a4);
    var key;
    length = keys.length;
    if (Object.keys(b3).length !== length)
      return false;
    while (length--) {
      key = keys[length];
      if (!(hasProp(b3, key) && eq(a4[key], b3[key], depth - 1, aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a4) {
  if (isObservableArray(a4))
    return a4.slice();
  if (isES6Map(a4) || isObservableMap(a4))
    return Array.from(a4.entries());
  if (isES6Set(a4) || isObservableSet(a4))
    return Array.from(a4.entries());
  return a4;
}
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}
function getSelf() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(m3) {
  var g3 = getGlobal();
  if (typeof g3[m3] === "undefined") {
    die("MobX requires global '" + m3 + "' to be available or polyfilled");
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
function printDebugValue(v3) {
  return getDependencyTree(v3);
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
var __values = function(o3) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
  if (m3)
    return m3.call(o3);
  if (o3 && typeof o3.length === "number")
    return {
      next: function() {
        if (o3 && i3 >= o3.length)
          o3 = void 0;
        return { value: o3 && o3[i3++], done: !o3 };
      }
    };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var __read = function(o3, n3) {
  var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m3)
    return o3;
  var i3 = m3.call(o3), r3, ar = [], e2;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done)
      ar.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m3 = i3["return"]))
        m3.call(i3);
    } finally {
      if (e2)
        throw e2.error;
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
function useObserver(fn2, baseComponentName) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }
  if (isUsingStaticRendering()) {
    return fn2();
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
      rendering = fn2();
    } catch (e2) {
      exception = e2;
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
  __assign = Object.assign || function(t3) {
    for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
      s3 = arguments[i3];
      for (var p3 in s3)
        if (Object.prototype.hasOwnProperty.call(s3, p3))
          t3[p3] = s3[p3];
    }
    return t3;
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
function clamp(v3, min, max) {
  return Math.max(min, Math.min(v3, max));
}
var V = {
  toVector(v3, fallback) {
    if (v3 === void 0)
      v3 = fallback;
    return Array.isArray(v3) ? v3 : [v3, v3];
  },
  add(v1, v22) {
    return [v1[0] + v22[0], v1[1] + v22[1]];
  },
  sub(v1, v22) {
    return [v1[0] - v22[0], v1[1] - v22[1]];
  },
  addTo(v1, v22) {
    v1[0] += v22[0];
    v1[1] += v22[1];
  },
  subTo(v1, v22) {
    v1[0] -= v22[0];
    v1[1] -= v22[1];
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
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
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
  return Array.from(event.touches).filter((e2) => {
    var _event$currentTarget, _event$currentTarget$;
    return e2.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e2.target));
  });
}
function getTouchList(event) {
  return event.type === "touchend" ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function distanceAngle(P1, P22) {
  const dx = P22.clientX - P1.clientX;
  const dy = P22.clientY - P1.clientY;
  const cx = (P22.clientX + P1.clientX) / 2;
  const cy = (P22.clientY + P1.clientY) / 2;
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
  const [P1, P22] = Array.from(event.touches).filter((touch) => ids.includes(touch.identifier));
  return distanceAngle(P1, P22);
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
function call(v3, ...args) {
  if (typeof v3 === "function") {
    return v3(...args);
  } else {
    return v3;
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
    for (const fn2 of fns) {
      result = fn2.apply(this, arguments) || result;
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
  const d3 = Math.abs(dx) - Math.abs(dy);
  if (d3 > 0)
    return "x";
  if (d3 < 0)
    return "y";
  return void 0;
}
function restrictVectorToAxis(v3, axis) {
  switch (axis) {
    case "x":
      v3[1] = 0;
      break;
    case "y":
      v3[0] = 0;
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
  intent(v3) {
    this.state.axis = this.state.axis || selectAxis(v3);
    this.state._blocked = (this.config.lockDirection || !!this.config.axis) && !this.state.axis || !!this.config.axis && this.config.axis !== this.state.axis;
    if (this.state._blocked)
      return;
    if (this.config.axis || this.config.lockDirection) {
      restrictVectorToAxis(v3, this.state.axis);
    }
  }
};
var identity = (v3) => v3;
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
      return (v3) => {
        const r3 = originalTransform(v3);
        if (!isFinite(r3[0]) || !isFinite(r3[1])) {
          console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r3[0]},${[1]}]`);
        }
        return r3;
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
  } catch (e2) {
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
  intent(v3) {
    const state = this.state;
    if (!state.axis) {
      const axisMovementDifference = Math.abs(v3[0]) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(v3[1]);
      if (axisMovementDifference < 0)
        state.axis = "angle";
      else if (axisMovementDifference > 0)
        state.axis = "scale";
    }
    if (this.config.lockDirection) {
      if (state.axis === "scale")
        v3[1] = 0;
      else if (state.axis === "angle")
        v3[0] = 0;
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
      const D3 = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D3.min, D3.max];
    };
    const _angleBounds = (state) => {
      const A3 = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A3.min, A3.max];
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
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
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
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
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
  const fn2 = (state) => {
    let memo3 = void 0;
    if (state.first && startKey in handlers)
      handlers[startKey](state);
    if (handlerKey in handlers)
      memo3 = handlers[handlerKey](state);
    if (state.last && endKey in handlers)
      handlers[endKey](state);
    return memo3;
  };
  internalHandlers[key] = fn2;
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
  static clamp(n3, min, max) {
    return Math.max(min, typeof max !== "undefined" ? Math.min(n3, max) : n3);
  }
  static clampV(A3, min, max) {
    return A3.map((n3) => max ? _Vec.clamp(n3, min, max) : _Vec.clamp(n3, min));
  }
  static cross(x3, y3, z3) {
    return (y3[0] - x3[0]) * (z3[1] - x3[1]) - (z3[0] - x3[0]) * (y3[1] - x3[1]);
  }
  static snap(a4, step = 1) {
    return [Math.round(a4[0] / step) * step, Math.round(a4[1] / step) * step];
  }
};
var Vec = _Vec;
Vec.neg = (A3) => {
  return [-A3[0], -A3[1]];
};
Vec.add = (A3, B3) => {
  return [A3[0] + B3[0], A3[1] + B3[1]];
};
Vec.addScalar = (A3, n3) => {
  return [A3[0] + n3, A3[1] + n3];
};
Vec.sub = (A3, B3) => {
  return [A3[0] - B3[0], A3[1] - B3[1]];
};
Vec.subScalar = (A3, n3) => {
  return [A3[0] - n3, A3[1] - n3];
};
Vec.vec = (A3, B3) => {
  return [B3[0] - A3[0], B3[1] - A3[1]];
};
Vec.mul = (A3, n3) => {
  return [A3[0] * n3, A3[1] * n3];
};
Vec.mulV = (A3, B3) => {
  return [A3[0] * B3[0], A3[1] * B3[1]];
};
Vec.div = (A3, n3) => {
  return [A3[0] / n3, A3[1] / n3];
};
Vec.divV = (A3, B3) => {
  return [A3[0] / B3[0], A3[1] / B3[1]];
};
Vec.per = (A3) => {
  return [A3[1], -A3[0]];
};
Vec.dpr = (A3, B3) => {
  return A3[0] * B3[0] + A3[1] * B3[1];
};
Vec.cpr = (A3, B3) => {
  return A3[0] * B3[1] - B3[0] * A3[1];
};
Vec.len2 = (A3) => {
  return A3[0] * A3[0] + A3[1] * A3[1];
};
Vec.len = (A3) => {
  return Math.hypot(A3[0], A3[1]);
};
Vec.pry = (A3, B3) => {
  return _Vec.dpr(A3, B3) / _Vec.len(B3);
};
Vec.uni = (A3) => {
  return _Vec.div(A3, _Vec.len(A3));
};
Vec.normalize = (A3) => {
  return _Vec.uni(A3);
};
Vec.tangent = (A3, B3) => {
  return _Vec.uni(_Vec.sub(A3, B3));
};
Vec.dist2 = (A3, B3) => {
  return _Vec.len2(_Vec.sub(A3, B3));
};
Vec.dist = (A3, B3) => {
  return Math.hypot(A3[1] - B3[1], A3[0] - B3[0]);
};
Vec.fastDist = (A3, B3) => {
  const V5 = [B3[0] - A3[0], B3[1] - A3[1]];
  const aV = [Math.abs(V5[0]), Math.abs(V5[1])];
  let r3 = 1 / Math.max(aV[0], aV[1]);
  r3 = r3 * (1.29289 - (aV[0] + aV[1]) * r3 * 0.29289);
  return [V5[0] * r3, V5[1] * r3];
};
Vec.ang = (A3, B3) => {
  return Math.atan2(_Vec.cpr(A3, B3), _Vec.dpr(A3, B3));
};
Vec.angle = (A3, B3) => {
  return Math.atan2(B3[1] - A3[1], B3[0] - A3[0]);
};
Vec.med = (A3, B3) => {
  return _Vec.mul(_Vec.add(A3, B3), 0.5);
};
Vec.rot = (A3, r3 = 0) => {
  return [A3[0] * Math.cos(r3) - A3[1] * Math.sin(r3), A3[0] * Math.sin(r3) + A3[1] * Math.cos(r3)];
};
Vec.rotWith = (A3, C3, r3 = 0) => {
  if (r3 === 0)
    return A3;
  const s3 = Math.sin(r3);
  const c3 = Math.cos(r3);
  const px = A3[0] - C3[0];
  const py = A3[1] - C3[1];
  const nx = px * c3 - py * s3;
  const ny = px * s3 + py * c3;
  return [nx + C3[0], ny + C3[1]];
};
Vec.isEqual = (A3, B3) => {
  return A3[0] === B3[0] && A3[1] === B3[1];
};
Vec.lrp = (A3, B3, t3) => {
  return _Vec.add(A3, _Vec.mul(_Vec.sub(B3, A3), t3));
};
Vec.int = (A3, B3, from, to, s3 = 1) => {
  const t3 = (_Vec.clamp(from, to) - from) / (to - from);
  return _Vec.add(_Vec.mul(A3, 1 - t3), _Vec.mul(B3, s3));
};
Vec.ang3 = (p1, pc, p22) => {
  const v1 = _Vec.vec(pc, p1);
  const v22 = _Vec.vec(pc, p22);
  return _Vec.ang(v1, v22);
};
Vec.abs = (A3) => {
  return [Math.abs(A3[0]), Math.abs(A3[1])];
};
Vec.rescale = (a4, n3) => {
  const l4 = _Vec.len(a4);
  return [n3 * a4[0] / l4, n3 * a4[1] / l4];
};
Vec.isLeft = (p1, pc, p22) => {
  return (pc[0] - p1[0]) * (p22[1] - p1[1]) - (p22[0] - p1[0]) * (pc[1] - p1[1]);
};
Vec.clockwise = (p1, pc, p22) => {
  return _Vec.isLeft(p1, pc, p22) > 0;
};
Vec.toFixed = (a4, d3 = 2) => {
  return a4.map((v3) => +v3.toFixed(d3));
};
Vec.nearestPointOnLineThroughPoint = (A3, u3, P3) => {
  return _Vec.add(A3, _Vec.mul(u3, _Vec.pry(_Vec.sub(P3, A3), u3)));
};
Vec.distanceToLineThroughPoint = (A3, u3, P3) => {
  return _Vec.dist(P3, _Vec.nearestPointOnLineThroughPoint(A3, u3, P3));
};
Vec.nearestPointOnLineSegment = (A3, B3, P3, clamp2 = true) => {
  const u3 = _Vec.uni(_Vec.sub(B3, A3));
  const C3 = _Vec.add(A3, _Vec.mul(u3, _Vec.pry(_Vec.sub(P3, A3), u3)));
  if (clamp2) {
    if (C3[0] < Math.min(A3[0], B3[0]))
      return A3[0] < B3[0] ? A3 : B3;
    if (C3[0] > Math.max(A3[0], B3[0]))
      return A3[0] > B3[0] ? A3 : B3;
    if (C3[1] < Math.min(A3[1], B3[1]))
      return A3[1] < B3[1] ? A3 : B3;
    if (C3[1] > Math.max(A3[1], B3[1]))
      return A3[1] > B3[1] ? A3 : B3;
  }
  return C3;
};
Vec.distanceToLineSegment = (A3, B3, P3, clamp2 = true) => {
  return _Vec.dist(P3, _Vec.nearestPointOnLineSegment(A3, B3, P3, clamp2));
};
Vec.nudge = (A3, B3, d3) => {
  if (_Vec.isEqual(A3, B3))
    return A3;
  return _Vec.add(A3, _Vec.mul(_Vec.uni(_Vec.sub(B3, A3)), d3));
};
Vec.nudgeAtAngle = (A3, a4, d3) => {
  return [Math.cos(a4) * d3 + A3[0], Math.sin(a4) * d3 + A3[1]];
};
Vec.toPrecision = (a4, n3 = 4) => {
  return [+a4[0].toPrecision(n3), +a4[1].toPrecision(n3)];
};
Vec.pointsBetween = (A3, B3, steps = 6) => {
  return Array.from(Array(steps)).map((_16, i3) => {
    const t3 = i3 / (steps - 1);
    const k3 = Math.min(1, 0.5 + Math.abs(0.5 - t3));
    return [..._Vec.lrp(A3, B3, t3), k3];
  });
};
Vec.slope = (A3, B3) => {
  if (A3[0] === B3[0])
    return NaN;
  return (A3[1] - B3[1]) / (A3[0] - B3[0]);
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
function intersectLineSegmentLineSegment(a1, a22, b1, b22) {
  const AB = Vec.sub(a1, b1);
  const BV = Vec.sub(b22, b1);
  const AV = Vec.sub(a22, a1);
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
function intersectLineSegmentRectangle(a1, a22, point, size) {
  return intersectRectangleLineSegment(point, size, a1, a22);
}
function intersectLineSegmentBounds(a1, a22, bounds) {
  return intersectBoundsLineSegment(bounds, a1, a22);
}
function intersectLineSegmentPolyline(a1, a22, points) {
  const pts = [];
  for (let i3 = 1; i3 < points.length; i3++) {
    const int = intersectLineSegmentLineSegment(a1, a22, points[i3 - 1], points[i3]);
    if (int) {
      pts.push(...int.points);
    }
  }
  if (pts.length === 0) {
    return createIntersection("no intersection");
  }
  return createIntersection("intersection", ...points);
}
function intersectLineSegmentPolygon(a1, a22, points) {
  const pts = [];
  for (let i3 = 1; i3 < points.length + 1; i3++) {
    const int = intersectLineSegmentLineSegment(a1, a22, points[i3 - 1], points[i3 % points.length]);
    if (int) {
      pts.push(...int.points);
    }
  }
  if (pts.length === 0) {
    return createIntersection("no intersection");
  }
  return createIntersection("intersection", ...points);
}
function intersectRectangleLineSegment(point, size, a1, a22) {
  const sideIntersections = getRectangleSides(point, size).reduce((acc, [message, [b1, b22]]) => {
    const intersection = intersectLineSegmentLineSegment(a1, a22, b1, b22);
    if (intersection) {
      acc.push(createIntersection(message, ...intersection.points));
    }
    return acc;
  }, []);
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleRectangle(point1, size1, point2, size2) {
  const sideIntersections = getRectangleSides(point1, size1).reduce((acc, [message, [a1, a22]]) => {
    const intersections = intersectRectangleLineSegment(point2, size2, a1, a22);
    acc.push(...intersections.map((int) => createIntersection(`${message} ${int.message}`, ...int.points)));
    return acc;
  }, []);
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectanglePolyline(point, size, points) {
  const sideIntersections = getRectangleSides(point, size).reduce((acc, [message, [a1, a22]]) => {
    const intersection = intersectLineSegmentPolyline(a1, a22, points);
    if (intersection.didIntersect) {
      acc.push(createIntersection(message, ...intersection.points));
    }
    return acc;
  }, []);
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectanglePolygon(point, size, points) {
  const sideIntersections = getRectangleSides(point, size).reduce((acc, [message, [a1, a22]]) => {
    const intersection = intersectLineSegmentPolygon(a1, a22, points);
    if (intersection.didIntersect) {
      acc.push(createIntersection(message, ...intersection.points));
    }
    return acc;
  }, []);
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectBoundsLineSegment(bounds, a1, a22) {
  const { minX, minY, width, height } = bounds;
  return intersectLineSegmentRectangle(a1, a22, [minX, minY], [width, height]);
}
function intersectBoundsBounds(bounds1, bounds2) {
  return intersectRectangleRectangle([bounds1.minX, bounds1.minY], [bounds1.width, bounds1.height], [bounds2.minX, bounds2.minY], [bounds2.width, bounds2.height]);
}
function intersectBoundsPolyline(bounds, points) {
  return intersectPolylineBounds(points, bounds);
}
function intersectPolylineBounds(points, bounds) {
  return intersectRectanglePolyline([bounds.minX, bounds.minY], [bounds.width, bounds.height], points);
}
function intersectPolygonBounds(points, bounds) {
  return intersectRectanglePolygon([bounds.minX, bounds.minY], [bounds.width, bounds.height], points);
}

// ../../packages/core/dist/esm/index.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a4, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp2.call(b3, prop))
      __defNormalProp2(a4, prop, b3[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b3)) {
      if (__propIsEnum2.call(b3, prop))
        __defNormalProp2(a4, prop, b3[prop]);
    }
  return a4;
};
var __spreadProps2 = (a4, b3) => __defProps2(a4, __getOwnPropDescs2(b3));
var __objRest2 = (source, exclude) => {
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
var __publicField = (obj, key, value) => {
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
    onWheel: ({ delta, event: e2 }) => {
      var _a2, _b, _c, _d;
      return;
      if (e2.altKey && e2.buttons === 0) {
        const point = (_b = (_a2 = inputs2.pointer) == null ? void 0 : _a2.point) != null ? _b : [bounds.width / 2, bounds.height / 2];
        const info2 = inputs2.pinch(point, point);
        (_c = callbacks.onZoom) == null ? void 0 : _c.call(callbacks, __spreadProps2(__spreadValues2({}, info2), { delta: [...point, -e2.deltaY] }), e2);
        return;
      }
      if (inputs2.isPinching)
        return;
      if (Vec.isEqual(delta, [0, 0]))
        return;
      const info = inputs2.pan(delta, e2);
      (_d = callbacks.onPan) == null ? void 0 : _d.call(callbacks, info, e2);
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
      (_a2 = callbacks.onPinch) == null ? void 0 : _a2.call(callbacks, __spreadProps2(__spreadValues2({}, info), {
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
(function(TLBoundsEdge22) {
  TLBoundsEdge22["Top"] = "top_edge";
  TLBoundsEdge22["Right"] = "right_edge";
  TLBoundsEdge22["Bottom"] = "bottom_edge";
  TLBoundsEdge22["Left"] = "left_edge";
})(TLBoundsEdge || (TLBoundsEdge = {}));
var TLBoundsCorner;
(function(TLBoundsCorner22) {
  TLBoundsCorner22["TopLeft"] = "top_left_corner";
  TLBoundsCorner22["TopRight"] = "top_right_corner";
  TLBoundsCorner22["BottomRight"] = "bottom_right_corner";
  TLBoundsCorner22["BottomLeft"] = "bottom_left_corner";
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
  static lerp(y1, y22, mu) {
    mu = _Utils.clamp(mu, 0, 1);
    return y1 * (1 - mu) + y22 * mu;
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
    const c22 = h2r(color2) || [0, 0, 0];
    const result = c1.slice();
    for (let i3 = 0; i3 < 3; i3++) {
      result[i3] = Math.round(result[i3] + factor * (c22[i3] - c1[i3]));
    }
    return r2h(result);
  }
  static modulate(value, rangeA, rangeB, clamp2 = false) {
    const [fromLow, fromHigh] = rangeA;
    const [v0, v1] = rangeB;
    const result = v0 + (value - fromLow) / (fromHigh - fromLow) * (v1 - v0);
    return clamp2 ? v0 < v1 ? Math.max(Math.min(result, v1), v0) : Math.max(Math.min(result, v0), v1) : result;
  }
  static clamp(n3, min, max) {
    return Math.max(min, typeof max !== "undefined" ? Math.min(n3, max) : n3);
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
    let x3 = 0;
    let y3 = 0;
    let z3 = 0;
    let w3 = 0;
    function next() {
      const t3 = x3 ^ x3 << 11;
      x3 = y3;
      y3 = z3;
      z3 = w3;
      w3 ^= (w3 >>> 19 ^ t3 ^ t3 >>> 8) >>> 0;
      return w3 / 4294967296;
    }
    for (let k3 = 0; k3 < seed.length + 64; k3++) {
      x3 ^= seed.charCodeAt(k3) | 0;
      next();
    }
    return next;
  }
  static pointsToLineSegments(points, closed = false) {
    const segments = [];
    for (let i3 = 1; i3 < points.length; i3++)
      segments.push([points[i3 - 1], points[i3]]);
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
  static circleFromThreePoints(A3, B3, C3) {
    const [x1, y1] = A3;
    const [x22, y22] = B3;
    const [x3, y3] = C3;
    const a4 = x1 * (y22 - y3) - y1 * (x22 - x3) + x22 * y3 - x3 * y22;
    const b3 = (x1 * x1 + y1 * y1) * (y3 - y22) + (x22 * x22 + y22 * y22) * (y1 - y3) + (x3 * x3 + y3 * y3) * (y22 - y1);
    const c3 = (x1 * x1 + y1 * y1) * (x22 - x3) + (x22 * x22 + y22 * y22) * (x3 - x1) + (x3 * x3 + y3 * y3) * (x1 - x22);
    const x4 = -b3 / (2 * a4);
    const y4 = -c3 / (2 * a4);
    return [x4, y4, Math.hypot(x4 - x1, y4 - y1)];
  }
  static perimeterOfEllipse(rx, ry) {
    const h3 = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
    const p3 = Math.PI * (rx + ry) * (1 + 3 * h3 / (10 + Math.sqrt(4 - 3 * h3)));
    return p3;
  }
  static shortAngleDist(a0, a1) {
    const max = Math.PI * 2;
    const da = (a1 - a0) % max;
    return 2 * da % max - da;
  }
  static longAngleDist(a0, a1) {
    return Math.PI * 2 - _Utils.shortAngleDist(a0, a1);
  }
  static lerpAngles(a0, a1, t3) {
    return a0 + _Utils.shortAngleDist(a0, a1) * t3;
  }
  static angleDelta(a0, a1) {
    return _Utils.shortAngleDist(a0, a1);
  }
  static getSweep(C3, A3, B3) {
    return _Utils.angleDelta(Vec.angle(C3, A3), Vec.angle(C3, B3));
  }
  static clampRadians(r3) {
    return (Math.PI * 2 + r3) % (Math.PI * 2);
  }
  static snapAngleToSegments(r3, segments) {
    const seg = Math.PI * 2 / segments;
    return Math.floor((_Utils.clampRadians(r3) + seg / 2) / seg) * seg;
  }
  static isAngleBetween(a4, b3, c3) {
    if (c3 === a4 || c3 === b3)
      return true;
    const AB = (b3 - a4 + TAU) % TAU;
    const AC = (c3 - a4 + TAU) % TAU;
    return AB <= Math.PI !== AC > AB;
  }
  static degreesToRadians(d3) {
    return d3 * Math.PI / 180;
  }
  static radiansToDegrees(r3) {
    return r3 * 180 / Math.PI;
  }
  static getArcLength(C3, r3, A3, B3) {
    const sweep = _Utils.getSweep(C3, A3, B3);
    return r3 * (2 * Math.PI) * (sweep / (2 * Math.PI));
  }
  static getSweepFlag(A3, B3, C3) {
    const angleAC = Vec.angle(A3, C3);
    const angleAB = Vec.angle(A3, B3);
    const angleCAB = (angleAB - angleAC + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return angleCAB > 0 ? 0 : 1;
  }
  static getLargeArcFlag(A3, C3, P3) {
    const anglePA = Vec.angle(P3, A3);
    const anglePC = Vec.angle(P3, C3);
    const angleAPC = (anglePC - anglePA + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return Math.abs(angleAPC) > Math.PI / 2 ? 0 : 1;
  }
  static getArcDashOffset(C3, r3, A3, B3, step) {
    const del0 = _Utils.getSweepFlag(C3, A3, B3);
    const len0 = _Utils.getArcLength(C3, r3, A3, B3);
    const off0 = del0 < 0 ? len0 : 2 * Math.PI * C3[2] - len0;
    return -off0 / 2 + step;
  }
  static getEllipseDashOffset(A3, step) {
    const c3 = 2 * Math.PI * A3[2];
    return -c3 / 2 + -step;
  }
  static pointInCircle(A3, C3, r3) {
    return Vec.dist(A3, C3) <= r3;
  }
  static pointInEllipse(A3, C3, rx, ry, rotation = 0) {
    rotation = rotation || 0;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    const delta = Vec.sub(A3, C3);
    const tdx = cos * delta[0] + sin * delta[1];
    const tdy = sin * delta[0] - cos * delta[1];
    return tdx * tdx / (rx * rx) + tdy * tdy / (ry * ry) <= 1;
  }
  static pointInRect(point, size) {
    return !(point[0] < size[0] || point[0] > point[0] + size[0] || point[1] < size[1] || point[1] > point[1] + size[1]);
  }
  static pointInPolygon(p3, points) {
    let wn = 0;
    points.forEach((a4, i3) => {
      const b3 = points[(i3 + 1) % points.length];
      if (a4[1] <= p3[1]) {
        if (b3[1] > p3[1] && Vec.cross(a4, b3, p3) > 0) {
          wn += 1;
        }
      } else if (b3[1] <= p3[1] && Vec.cross(a4, b3, p3) < 0) {
        wn -= 1;
      }
    });
    return wn !== 0;
  }
  static pointInBounds(A3, b3) {
    return !(A3[0] < b3.minX || A3[0] > b3.maxX || A3[1] < b3.minY || A3[1] > b3.maxY);
  }
  static pointInPolyline(A3, points, distance = 3) {
    for (let i3 = 1; i3 < points.length; i3++) {
      if (Vec.distanceToLineSegment(points[i3 - 1], points[i3], A3) < distance) {
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
  static boundsCollide(a4, b3) {
    return !(a4.maxX < b3.minX || a4.minX > b3.maxX || a4.maxY < b3.minY || a4.minY > b3.maxY);
  }
  static boundsContain(a4, b3) {
    return a4.minX < b3.minX && a4.minY < b3.minY && a4.maxY > b3.maxY && a4.maxX > b3.maxX;
  }
  static boundsContained(a4, b3) {
    return _Utils.boundsContain(b3, a4);
  }
  static boundsAreEqual(a4, b3) {
    return !(b3.maxX !== a4.maxX || b3.minX !== a4.minX || b3.maxY !== a4.maxY || b3.minY !== a4.minY);
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
      for (const [x3, y3] of points) {
        minX = Math.min(x3, minX);
        minY = Math.min(y3, minY);
        maxX = Math.max(x3, maxX);
        maxY = Math.max(y3, maxY);
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
  static getRotatedEllipseBounds(x3, y3, rx, ry, rotation = 0) {
    const c3 = Math.cos(rotation);
    const s3 = Math.sin(rotation);
    const w3 = Math.hypot(rx * c3, ry * s3);
    const h3 = Math.hypot(rx * s3, ry * c3);
    return {
      minX: x3 + rx - w3,
      minY: y3 + ry - h3,
      maxX: x3 + rx + w3,
      maxY: y3 + ry + h3,
      width: w3 * 2,
      height: h3 * 2
    };
  }
  static getExpandedBounds(a4, b3) {
    const minX = Math.min(a4.minX, b3.minX);
    const minY = Math.min(a4.minY, b3.minY);
    const maxX = Math.max(a4.maxX, b3.maxX);
    const maxY = Math.max(a4.maxY, b3.maxY);
    const width = Math.abs(maxX - minX);
    const height = Math.abs(maxY - minY);
    return { minX, minY, maxX, maxY, width, height };
  }
  static getCommonBounds(bounds) {
    if (bounds.length < 2)
      return bounds[0];
    let result = bounds[0];
    for (let i3 = 1; i3 < bounds.length; i3++) {
      result = _Utils.getExpandedBounds(result, bounds[i3]);
    }
    return result;
  }
  static getRotatedCorners(b3, rotation = 0) {
    const center = [b3.minX + b3.width / 2, b3.minY + b3.height / 2];
    return [
      [b3.minX, b3.minY],
      [b3.maxX, b3.minY],
      [b3.maxX, b3.maxY],
      [b3.minX, b3.maxY]
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
          const m3 = (bx0 + bx1) / 2;
          const w3 = bh * ar;
          bx0 = m3 - w3 / 2;
          bx1 = m3 + w3 / 2;
          break;
        }
        case TLBoundsEdge.Left:
        case TLBoundsEdge.Right: {
          const m3 = (by0 + by1) / 2;
          const h3 = bw / ar;
          by0 = m3 - h3 / 2;
          by1 = m3 + h3 / 2;
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
    return __spreadProps2(__spreadValues2({}, bounds), {
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
  static uniqueId(a4 = "") {
    return a4 ? ((Number(a4) ^ Math.random() * 16) >> Number(a4) / 4).toString(16) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, _Utils.uniqueId);
  }
  static rotateArray(arr, offset) {
    return arr.map((_142, i3) => arr[(i3 + offset) % arr.length]);
  }
  static debounce(fn2, ms = 0) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn2.apply(args), ms);
    };
  }
  static getSvgPathFromStroke(points, closed = true) {
    if (!points.length) {
      return "";
    }
    const max = points.length - 1;
    return points.reduce((acc, point, i3, arr) => {
      if (i3 === max) {
        if (closed) {
          acc.push("Z");
        }
      } else {
        acc.push(point, Vec.med(point, arr[i3 + 1]));
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
  static metaKey(e2) {
    return _Utils.isDarwin() ? e2.metaKey : e2.ctrlKey;
  }
};
var Utils = _Utils;
__publicField(Utils, "getSnapPoints", (bounds, others, snapDistance) => {
  const A3 = __spreadValues2({}, bounds);
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
  const snapResults = others.map((B3) => {
    const rx = xs.flatMap((f4, i3) => xs.map((t3, k3) => {
      const gap = A3[f4] - B3[t3];
      const distance = Math.abs(gap);
      return {
        f: f4,
        t: t3,
        gap,
        distance,
        isCareful: i3 === 0 || i3 + k3 === 3
      };
    }));
    const ry = ys.flatMap((f4, i3) => ys.map((t3, k3) => {
      const gap = A3[f4] - B3[t3];
      const distance = Math.abs(gap);
      return {
        f: f4,
        t: t3,
        gap,
        distance,
        isCareful: i3 === 0 || i3 + k3 === 3
      };
    }));
    return [B3, rx, ry];
  });
  let gapX = Infinity;
  let gapY = Infinity;
  let minX = Infinity;
  let minY = Infinity;
  snapResults.forEach(([_142, rx, ry]) => {
    rx.forEach((r3) => {
      if (r3.distance < snapDistance && r3.distance < minX) {
        minX = r3.distance;
        gapX = r3.gap;
      }
    });
    ry.forEach((r3) => {
      if (r3.distance < snapDistance && r3.distance < minY) {
        minY = r3.distance;
        gapY = r3.gap;
      }
    });
  });
  snapResults.forEach(([B3, rx, ry]) => {
    if (gapX !== Infinity) {
      rx.forEach((r3) => {
        if (Math.abs(r3.gap - gapX) < 2) {
          snaps[r3.f] = __spreadProps2(__spreadValues2({}, snaps[r3.f]), {
            isSnapped: true,
            to: B3[r3.t],
            B: B3,
            distance: r3.distance
          });
        }
      });
    }
    if (gapY !== Infinity) {
      ry.forEach((r3) => {
        if (Math.abs(r3.gap - gapY) < 2) {
          snaps[r3.f] = __spreadProps2(__spreadValues2({}, snaps[r3.f]), {
            isSnapped: true,
            to: B3[r3.t],
            B: B3,
            distance: r3.distance
          });
        }
      });
    }
  });
  offset[0] = gapX === Infinity ? 0 : gapX;
  offset[1] = gapY === Infinity ? 0 : gapY;
  A3.minX -= offset[0];
  A3.midX -= offset[0];
  A3.maxX -= offset[0];
  A3.minY -= offset[1];
  A3.midY -= offset[1];
  A3.maxY -= offset[1];
  xs.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B: B3 } = snap;
    const x3 = A3[id];
    snapLines.push(id === SnapPoints.minX ? [
      [x3, A3.midY],
      [x3, B3.minY],
      [x3, B3.maxY]
    ] : [
      [x3, A3.minY],
      [x3, A3.maxY],
      [x3, B3.minY],
      [x3, B3.maxY]
    ]);
  });
  ys.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B: B3 } = snap;
    const y3 = A3[id];
    snapLines.push(id === SnapPoints.midY ? [
      [A3.midX, y3],
      [B3.minX, y3],
      [B3.maxX, y3]
    ] : [
      [A3.minX, y3],
      [A3.maxX, y3],
      [B3.minX, y3],
      [B3.maxX, y3]
    ]);
  });
  return { offset, snapLines };
});
__publicField(Utils, "deepMerge", (target, patch) => {
  const result = __spreadValues2({}, target);
  const entries = Object.entries(patch);
  for (const [key, value] of entries)
    result[key] = value === Object(value) && !Array.isArray(value) ? _Utils.deepMerge(result[key], value) : value;
  return result;
});
__publicField(Utils, "TRIM_NUMBERS", /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g);
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
  const onPointerDown2 = (0, import_react14.useCallback)((e2) => {
    var _a2, _b;
    if (e2.button !== 0 && e2.button !== 1)
      return;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.currentTarget.setPointerCapture(e2.pointerId);
    const info = inputs2.pointerDown(e2, "canvas");
    if (e2.button === 0 || e2.button === 1) {
      (_a2 = callbacks.onPointCanvas) == null ? void 0 : _a2.call(callbacks, info, e2);
      (_b = callbacks.onPointerDown) == null ? void 0 : _b.call(callbacks, info, e2);
    }
  }, [callbacks, inputs2]);
  const onPointerMove2 = (0, import_react14.useCallback)((e2) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e2))
      return;
    const info = inputs2.pointerMove(e2, "canvas");
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = callbacks.onDragCanvas) == null ? void 0 : _a2.call(callbacks, info, e2);
    }
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e2);
  }, [callbacks, inputs2]);
  const onPointerUp2 = (0, import_react14.useCallback)((e2) => {
    var _a2, _b, _c, _d;
    if (e2.button !== 0 && e2.button !== 1)
      return;
    inputs2.activePointer = void 0;
    if (!inputs2.pointerIsValid(e2))
      return;
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e2, "canvas");
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = e2.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e2.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickCanvas) == null ? void 0 : _b.call(callbacks, info, e2);
    }
    (_c = callbacks.onReleaseCanvas) == null ? void 0 : _c.call(callbacks, info, e2);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e2);
  }, [callbacks, inputs2]);
  return {
    onPointerDown: onPointerDown2,
    onPointerMove: onPointerMove2,
    onPointerUp: onPointerUp2
  };
}
function useShapeEvents(id) {
  const { rPageState, rSelectionBounds, callbacks, inputs: inputs2 } = (0, import_react15.useContext)(TLContext);
  return (0, import_react15.useMemo)(() => ({
    onPointerDown: (e2) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (!inputs2.pointerIsValid(e2))
        return;
      if (e2.button === 2) {
        (_a2 = callbacks.onRightPointShape) == null ? void 0 : _a2.call(callbacks, inputs2.pointerDown(e2, id), e2);
        return;
      }
      if (e2.button !== 0)
        return;
      const info = inputs2.pointerDown(e2, id);
      e2.stopPropagation();
      (_b = e2.currentTarget) == null ? void 0 : _b.setPointerCapture(e2.pointerId);
      if (rSelectionBounds.current && Utils.pointInBounds(info.point, rSelectionBounds.current) && !rPageState.current.selectedIds.includes(id)) {
        (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, inputs2.pointerDown(e2, "bounds"), e2);
        (_d = callbacks.onPointShape) == null ? void 0 : _d.call(callbacks, info, e2);
        (_e = callbacks.onPointerDown) == null ? void 0 : _e.call(callbacks, info, e2);
        return;
      }
      (_f = callbacks.onPointShape) == null ? void 0 : _f.call(callbacks, info, e2);
      (_g = callbacks.onPointerDown) == null ? void 0 : _g.call(callbacks, info, e2);
    },
    onPointerUp: (e2) => {
      var _a2, _b, _c, _d;
      if (e2.button !== 0)
        return;
      inputs2.activePointer = void 0;
      if (!inputs2.pointerIsValid(e2))
        return;
      e2.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e2, id);
      if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
        (_a2 = e2.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e2.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickShape) == null ? void 0 : _b.call(callbacks, info, e2);
      }
      (_c = callbacks.onReleaseShape) == null ? void 0 : _c.call(callbacks, info, e2);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e2);
    },
    onPointerEnter: (e2) => {
      var _a2, _b;
      if (!inputs2.pointerIsValid(e2))
        return;
      e2.stopPropagation();
      if (inputs2.pointer && e2.pointerId !== inputs2.pointer.pointerId)
        return;
      const info = inputs2.pointerMove(e2, id);
      if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
        (_a2 = callbacks.onDragShape) == null ? void 0 : _a2.call(callbacks, info, e2);
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e2);
    },
    onPointerMove: (e2) => {
      var _a2;
      if (!inputs2.pointerIsValid(e2))
        return;
      const info = inputs2.pointerEnter(e2, id);
      (_a2 = callbacks.onHoverShape) == null ? void 0 : _a2.call(callbacks, info, e2);
    },
    onPointerLeave: (e2) => {
      var _a2;
      if (!inputs2.pointerIsValid(e2))
        return;
      const info = inputs2.pointerEnter(e2, id);
      (_a2 = callbacks.onUnhoverShape) == null ? void 0 : _a2.call(callbacks, info, e2);
    }
  }), [inputs2, callbacks, id]);
}
function addToShapeTree(shape, branch, shapes, pageState, isChildOfGhost = false, isChildOfSelected = false, meta) {
  const node = {
    shape,
    meta,
    isChildOfSelected,
    isGhost: shape.isGhost || isChildOfGhost,
    isEditing: pageState.editingId === shape.id,
    isBinding: pageState.bindingTargetId === shape.id,
    isSelected: pageState.selectedIds.includes(shape.id),
    isHovered: pageState.hoveredId === shape.id || shape.children !== void 0 && (pageState.hoveredId && shape.children.includes(pageState.hoveredId) || shape.children.some((childId) => pageState.selectedIds.includes(childId)))
  };
  branch.push(node);
  if (shape.children) {
    node.children = [];
    shape.children.map((id) => shapes[id]).sort((a4, b3) => a4.childIndex - b3.childIndex).forEach((childShape) => addToShapeTree(childShape, node.children, shapes, pageState, node.isGhost, node.isSelected || node.isChildOfSelected, meta));
  }
}
function shapeIsInViewport(bounds, viewport) {
  return Utils.boundsContain(viewport, bounds) || Utils.boundsCollide(viewport, bounds);
}
function useShapeTree(page, pageState, meta) {
  const { callbacks, shapeUtils: shapeUtils4, bounds } = useTLContext();
  const rTimeout = (0, import_react16.useRef)();
  const rPreviousCount = (0, import_react16.useRef)(0);
  const rShapesIdsToRender = (0, import_react16.useRef)(new Set());
  const rShapesToRender = (0, import_react16.useRef)(new Set());
  const { selectedIds, camera } = pageState;
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
  Object.values(page.shapes).filter((shape) => shapeUtils4[shape.type].isStateful || selectedIds.includes(shape.id) || shapeIsInViewport(shapeUtils4[shape.type].getBounds(shape), viewport)).forEach((shape) => {
    if (shape.parentId === page.id) {
      shapesIdsToRender.add(shape.id);
      shapesToRender.add(shape);
      return;
    }
    shapesIdsToRender.add(shape.parentId);
    shapesToRender.add(page.shapes[shape.parentId]);
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
  const bindingTargetId = pageState.bindingId ? page.bindings[pageState.bindingId].toId : void 0;
  const tree = [];
  shapesToRender.forEach((shape) => addToShapeTree(shape, tree, page.shapes, __spreadProps2(__spreadValues2({}, pageState), { bindingTargetId }), shape.isGhost, false, meta));
  tree.sort((a4, b3) => a4.shape.childIndex - b3.shape.childIndex);
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
  const onPointerDown2 = (0, import_react18.useCallback)((e2) => {
    var _a2, _b, _c;
    if (e2.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    (_a2 = e2.currentTarget) == null ? void 0 : _a2.setPointerCapture(e2.pointerId);
    const info = inputs2.pointerDown(e2, id);
    (_b = callbacks.onPointBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e2);
    (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  const onPointerUp2 = (0, import_react18.useCallback)((e2) => {
    var _a2, _b, _c, _d;
    if (e2.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e2, id);
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = e2.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e2.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e2);
    }
    (_c = callbacks.onReleaseBoundsHandle) == null ? void 0 : _c.call(callbacks, info, e2);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  const onPointerMove2 = (0, import_react18.useCallback)((e2) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = callbacks.onDragBoundsHandle) == null ? void 0 : _a2.call(callbacks, inputs2.pointerMove(e2, id), e2);
    }
    const info = inputs2.pointerMove(e2, id);
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  const onPointerEnter = (0, import_react18.useCallback)((e2) => {
    var _a2;
    if (!inputs2.pointerIsValid(e2))
      return;
    (_a2 = callbacks.onHoverBoundsHandle) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e2, id), e2);
  }, [inputs2, callbacks, id]);
  const onPointerLeave = (0, import_react18.useCallback)((e2) => {
    var _a2;
    if (!inputs2.pointerIsValid(e2))
      return;
    (_a2 = callbacks.onUnhoverBoundsHandle) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e2, id), e2);
  }, [inputs2, callbacks, id]);
  return {
    onPointerDown: onPointerDown2,
    onPointerUp: onPointerUp2,
    onPointerEnter,
    onPointerMove: onPointerMove2,
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
    var e2 = typeof error === "string" ? error : errors[error];
    if (typeof e2 === "function")
      e2 = e2.apply(null, args);
    throw new Error("[MobX] " + e2);
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
function isFunction2(fn2) {
  return typeof fn2 === "function";
}
function isStringish2(value) {
  var t3 = typeof value;
  switch (t3) {
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
  return function(x3) {
    return isObject2(x3) && x3[propName] === true;
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
  return [].concat(keys, symbols.filter(function(s3) {
    return objectPrototype2.propertyIsEnumerable.call(object22, s3);
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
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
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
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
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
function _unsupportedIterableToArray2(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray2(o3, minLen);
  var n3 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n3 === "Object" && o3.constructor)
    n3 = o3.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o3);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray2(o3, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++)
    arr2[i3] = arr[i3];
  return arr2;
}
function _createForOfIteratorHelperLoose2(o3, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o3[Symbol.iterator] == null) {
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray2(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o3[i3++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o3[Symbol.iterator]();
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
function identityComparer2(a4, b3) {
  return a4 === b3;
}
function structuralComparer2(a4, b3) {
  return deepEqual2(a4, b3);
}
function shallowComparer2(a4, b3) {
  return deepEqual2(a4, b3, 1);
}
function defaultComparer2(a4, b3) {
  if (Object.is)
    return Object.is(a4, b3);
  return a4 === b3 ? a4 !== 0 || 1 / a4 === 1 / b3 : a4 !== a4 && b3 !== b3;
}
var comparer2 = {
  identity: identityComparer2,
  structural: structuralComparer2,
  "default": defaultComparer2,
  shallow: shallowComparer2
};
function deepEnhancer2(v3, _142, name) {
  if (isObservable2(v3))
    return v3;
  if (Array.isArray(v3))
    return observable2.array(v3, {
      name
    });
  if (isPlainObject2(v3))
    return observable2.object(v3, void 0, {
      name
    });
  if (isES6Map2(v3))
    return observable2.map(v3, {
      name
    });
  if (isES6Set2(v3))
    return observable2.set(v3, {
      name
    });
  if (typeof v3 === "function" && !isAction2(v3) && !isFlow2(v3)) {
    if (isGenerator2(v3)) {
      return flow3(v3);
    } else {
      return autoAction2(name, v3);
    }
  }
  return v3;
}
function shallowEnhancer2(v3, _142, name) {
  if (v3 === void 0 || v3 === null)
    return v3;
  if (isObservableObject2(v3) || isObservableArray2(v3) || isObservableMap2(v3) || isObservableSet2(v3))
    return v3;
  if (Array.isArray(v3))
    return observable2.array(v3, {
      name,
      deep: false
    });
  if (isPlainObject2(v3))
    return observable2.object(v3, void 0, {
      name,
      deep: false
    });
  if (isES6Map2(v3))
    return observable2.map(v3, {
      name,
      deep: false
    });
  if (isES6Set2(v3))
    return observable2.set(v3, {
      name,
      deep: false
    });
  if (true)
    die2("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer2(newValue) {
  return newValue;
}
function refStructEnhancer2(v3, oldValue) {
  if (isObservable2(v3))
    die2("observable.struct should not be used with observable values");
  if (deepEqual2(v3, oldValue))
    return oldValue;
  return v3;
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
function createObservable2(v3, arg2, arg3) {
  if (isStringish2(arg2)) {
    storeAnnotation2(v3, arg2, observableAnnotation2);
    return;
  }
  if (isObservable2(v3))
    return v3;
  if (isPlainObject2(v3))
    return observable2.object(v3, arg2, arg3);
  if (Array.isArray(v3))
    return observable2.array(v3, arg2);
  if (isES6Map2(v3))
    return observable2.map(v3, arg2);
  if (isES6Set2(v3))
    return observable2.set(v3, arg2);
  if (typeof v3 === "object" && v3 !== null)
    return v3;
  return observable2.box(v3, arg2);
}
Object.assign(createObservable2, observableDecoratorAnnotation2);
var observableFactories2 = {
  box: function box2(value, options) {
    var o3 = asCreateObservableOptions2(options);
    return new ObservableValue2(value, getEnhancerFromOptions2(o3), o3.name, true, o3.equals);
  },
  array: function array2(initialValues, options) {
    var o3 = asCreateObservableOptions2(options);
    return (globalState2.useProxies === false || o3.proxy === false ? createLegacyArray2 : createObservableArray2)(initialValues, getEnhancerFromOptions2(o3), o3.name);
  },
  map: function map2(initialValues, options) {
    var o3 = asCreateObservableOptions2(options);
    return new ObservableMap2(initialValues, getEnhancerFromOptions2(o3), o3.name);
  },
  set: function set4(initialValues, options) {
    var o3 = asCreateObservableOptions2(options);
    return new ObservableSet2(initialValues, getEnhancerFromOptions2(o3), o3.name);
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
function createAction2(actionName, fn2, autoAction22, ref) {
  if (autoAction22 === void 0) {
    autoAction22 = false;
  }
  if (true) {
    if (!isFunction2(fn2))
      die2("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName)
      die2("actions should have valid names, got: '" + actionName + "'");
  }
  function res() {
    return executeAction2(actionName, autoAction22, fn2, ref || this, arguments);
  }
  res.isMobxAction = true;
  if (isFunctionNameConfigurable2) {
    tmpNameDescriptor2.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor2);
  }
  return res;
}
function executeAction2(actionName, canRunAsDerivation, fn2, scope, args) {
  var runInfo = _startAction2(actionName, canRunAsDerivation, scope, args);
  try {
    return fn2.apply(scope, args);
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
        } catch (e2) {
          res = new CaughtException3(e2);
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
function isCaughtException2(e2) {
  return e2 instanceof CaughtException3;
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
      var obs = derivation.observing_, l4 = obs.length;
      for (var i3 = 0; i3 < l4; i3++) {
        var obj = obs[i3];
        if (isComputedValue2(obj)) {
          if (globalState2.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e2) {
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
function trackDerivedFunction2(derivation, f4, context) {
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
    result = f4.call(context);
  } else {
    try {
      result = f4.call(context);
    } catch (e2) {
      result = new CaughtException3(e2);
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
  var i0 = 0, l4 = derivation.unboundDepsCount_;
  for (var i3 = 0; i3 < l4; i3++) {
    var dep = observing[i3];
    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i3)
        observing[i0] = dep;
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l4 = prevObserving.length;
  while (l4--) {
    var _dep = prevObserving[l4];
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
  var i3 = obs.length;
  while (i3--) {
    removeObserver2(obs[i3], derivation);
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
  var i3 = obs.length;
  while (i3--) {
    obs[i3].lowestObserverState_ = IDerivationState_2.UP_TO_DATE_;
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
    for (var i3 = 0; i3 < list.length; i3++) {
      var observable22 = list[i3];
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
  observable22.observers_.forEach(function(d3) {
    if (d3.dependenciesState_ === IDerivationState_2.UP_TO_DATE_) {
      if (d3.isTracing_ !== TraceMode2.NONE) {
        logTraceInfo(d3, observable22);
      }
      d3.onBecomeStale_();
    }
    d3.dependenciesState_ = IDerivationState_2.STALE_;
  });
}
function propagateChangeConfirmed2(observable22) {
  if (observable22.lowestObserverState_ === IDerivationState_2.STALE_)
    return;
  observable22.lowestObserverState_ = IDerivationState_2.STALE_;
  observable22.observers_.forEach(function(d3) {
    if (d3.dependenciesState_ === IDerivationState_2.POSSIBLY_STALE_) {
      d3.dependenciesState_ = IDerivationState_2.STALE_;
      if (d3.isTracing_ !== TraceMode2.NONE) {
        logTraceInfo(d3, observable22);
      }
    } else if (d3.dependenciesState_ === IDerivationState_2.UP_TO_DATE_) {
      observable22.lowestObserverState_ = IDerivationState_2.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged2(observable22) {
  if (observable22.lowestObserverState_ !== IDerivationState_2.UP_TO_DATE_)
    return;
  observable22.lowestObserverState_ = IDerivationState_2.POSSIBLY_STALE_;
  observable22.observers_.forEach(function(d3) {
    if (d3.dependenciesState_ === IDerivationState_2.UP_TO_DATE_) {
      d3.dependenciesState_ = IDerivationState_2.POSSIBLY_STALE_;
      d3.onBecomeStale_();
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
        } catch (e2) {
          this.reportExceptionInDerivation_(e2);
        }
      }
      globalState2.trackingContext = prev;
      endBatch2();
    }
  };
  _proto.track = function track(fn2) {
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
    var result = trackDerivedFunction2(this, fn2, void 0);
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
    globalState2.globalReactionErrorHandlers.forEach(function(f4) {
      return f4(error, _this);
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
    var r3 = this.dispose.bind(this);
    r3[$mobx2] = this;
    return r3;
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
var reactionScheduler3 = function reactionScheduler22(f4) {
  return f4();
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
    for (var i3 = 0, l4 = remainingReactions.length; i3 < l4; i3++) {
      remainingReactions[i3].runReaction_();
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
  for (var i3 = 0, l4 = listeners.length; i3 < l4; i3++) {
    listeners[i3](event);
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
      globalState2.spyListeners = globalState2.spyListeners.filter(function(l4) {
        return l4 !== listener;
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
var run3 = function run22(f4) {
  return f4();
};
function createSchedulerFromOptions2(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f4) {
    return setTimeout(f4, opts.delay);
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
        } catch (e2) {
          return reject(e2);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action2(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e2) {
          return reject(e2);
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
      } catch (e2) {
        rejector(e2);
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
function isFlow2(fn2) {
  return (fn2 == null ? void 0 : fn2.isMobXFlow) === true;
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
    for (var i3 = 0, l4 = interceptors.length; i3 < l4; i3++) {
      change = interceptors[i3](change);
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
  for (var i3 = 0, l4 = listeners.length; i3 < l4; i3++) {
    listeners[i3](change);
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
      for (var i3 = 0; i3 < newLength - currentLength; i3++) {
        newItems[i3] = void 0;
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
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v3) {
      return _this.enhancer_(v3, void 0);
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
      for (var i3 = 0; i3 < newItems.length; i3++) {
        this.values_[index + i3] = newItems[i3];
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
    return Array.prototype.concat.apply(this.slice(), arrays.map(function(a4) {
      return isObservableArray2(a4) ? a4.slice() : a4;
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
  var prop = _ref[0], fn2 = _ref[1];
  if (prop !== "concat")
    addHiddenProp2(LegacyObservableArray2.prototype, prop, fn2);
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
function deepEqual2(a4, b3, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq2(a4, b3, depth);
}
function eq2(a4, b3, depth, aStack, bStack) {
  if (a4 === b3)
    return a4 !== 0 || 1 / a4 === 1 / b3;
  if (a4 == null || b3 == null)
    return false;
  if (a4 !== a4)
    return b3 !== b3;
  var type = typeof a4;
  if (!isFunction2(type) && type !== "object" && typeof b3 != "object")
    return false;
  var className = toString2.call(a4);
  if (className !== toString2.call(b3))
    return false;
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a4 === "" + b3;
    case "[object Number]":
      if (+a4 !== +a4)
        return +b3 !== +b3;
      return +a4 === 0 ? 1 / +a4 === 1 / b3 : +a4 === +b3;
    case "[object Date]":
    case "[object Boolean]":
      return +a4 === +b3;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a4) === Symbol.valueOf.call(b3);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a4 = unwrap2(a4);
  b3 = unwrap2(b3);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a4 != "object" || typeof b3 != "object")
      return false;
    var aCtor = a4.constructor, bCtor = b3.constructor;
    if (aCtor !== bCtor && !(isFunction2(aCtor) && aCtor instanceof aCtor && isFunction2(bCtor) && bCtor instanceof bCtor) && "constructor" in a4 && "constructor" in b3) {
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
    if (aStack[length] === a4)
      return bStack[length] === b3;
  }
  aStack.push(a4);
  bStack.push(b3);
  if (areArrays) {
    length = a4.length;
    if (length !== b3.length)
      return false;
    while (length--) {
      if (!eq2(a4[length], b3[length], depth - 1, aStack, bStack))
        return false;
    }
  } else {
    var keys = Object.keys(a4);
    var key;
    length = keys.length;
    if (Object.keys(b3).length !== length)
      return false;
    while (length--) {
      key = keys[length];
      if (!(hasProp2(b3, key) && eq2(a4[key], b3[key], depth - 1, aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap2(a4) {
  if (isObservableArray2(a4))
    return a4.slice();
  if (isES6Map2(a4) || isObservableMap2(a4))
    return Array.from(a4.entries());
  if (isES6Set2(a4) || isObservableSet2(a4))
    return Array.from(a4.entries());
  return a4;
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
["Symbol", "Map", "Set"].forEach(function(m3) {
  var g3 = getGlobal2();
  if (typeof g3[m3] === "undefined") {
    die2("MobX requires global '" + m3 + "' to be available or polyfilled");
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
function useCameraCss(layerRef, containerRef, pageState) {
  const rZoom = (0, import_react19.useRef)();
  const rPoint = (0, import_react19.useRef)();
  (0, import_react19.useLayoutEffect)(() => {
    return autorun2(() => {
      const { zoom, point } = pageState.camera;
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
  }, [pageState]);
}
function canvasToScreen(point, camera) {
  return [(point[0] + camera.point[0]) * camera.zoom, (point[1] + camera.point[1]) * camera.zoom];
}
function getShapeUtils(shapeUtils4, shape) {
  return shapeUtils4[shape.type];
}
function useSelection(page, pageState, shapeUtils4) {
  const { rSelectionBounds } = useTLContext();
  const { selectedIds } = pageState;
  const rPrevBounds = (0, import_react20.useRef)();
  let bounds = void 0;
  let rotation = 0;
  let isLocked = false;
  let isLinked = false;
  if (selectedIds.length === 1) {
    const id = selectedIds[0];
    const shape = page.shapes[id];
    rotation = shape.rotation || 0;
    isLocked = shape.isLocked || false;
    const utils = getShapeUtils(shapeUtils4, shape);
    bounds = utils.hideBounds ? void 0 : utils.getBounds(shape);
  } else if (selectedIds.length > 1) {
    const selectedShapes = selectedIds.map((id) => page.shapes[id]);
    rotation = 0;
    isLocked = selectedShapes.every((shape) => shape.isLocked);
    bounds = selectedShapes.reduce((acc, shape, i3) => {
      if (i3 === 0) {
        return getShapeUtils(shapeUtils4, shape).getRotatedBounds(shape);
      }
      return utils_default.getExpandedBounds(acc, getShapeUtils(shapeUtils4, shape).getRotatedBounds(shape));
    }, {});
  }
  if (bounds) {
    const [minX, minY] = canvasToScreen([bounds.minX, bounds.minY], pageState.camera);
    const [maxX, maxY] = canvasToScreen([bounds.maxX, bounds.maxY], pageState.camera);
    isLinked = !!Object.values(page.bindings).find((binding) => selectedIds.includes(binding.toId) || selectedIds.includes(binding.fromId));
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
  const onPointerDown2 = (0, import_react21.useCallback)((e2) => {
    var _a2, _b, _c;
    if (e2.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    (_a2 = e2.currentTarget) == null ? void 0 : _a2.setPointerCapture(e2.pointerId);
    const info = inputs2.pointerDown(e2, id);
    (_b = callbacks.onPointHandle) == null ? void 0 : _b.call(callbacks, info, e2);
    (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  const onPointerUp2 = (0, import_react21.useCallback)((e2) => {
    var _a2, _b, _c, _d;
    if (e2.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e2, id);
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = e2.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e2.pointerId);
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickHandle) == null ? void 0 : _b.call(callbacks, info, e2);
      }
      (_c = callbacks.onReleaseHandle) == null ? void 0 : _c.call(callbacks, info, e2);
    }
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e2);
  }, [inputs2, callbacks]);
  const onPointerMove2 = (0, import_react21.useCallback)((e2) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    const info = inputs2.pointerMove(e2, id);
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = callbacks.onDragHandle) == null ? void 0 : _a2.call(callbacks, info, e2);
    }
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  const onPointerEnter = (0, import_react21.useCallback)((e2) => {
    var _a2;
    if (!inputs2.pointerIsValid(e2))
      return;
    const info = inputs2.pointerEnter(e2, id);
    (_a2 = callbacks.onHoverHandle) == null ? void 0 : _a2.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  const onPointerLeave = (0, import_react21.useCallback)((e2) => {
    var _a2;
    if (!inputs2.pointerIsValid(e2))
      return;
    const info = inputs2.pointerEnter(e2, id);
    (_a2 = callbacks.onUnhoverHandle) == null ? void 0 : _a2.call(callbacks, info, e2);
  }, [inputs2, callbacks, id]);
  return {
    onPointerDown: onPointerDown2,
    onPointerUp: onPointerUp2,
    onPointerEnter,
    onPointerMove: onPointerMove2,
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
  const onPointerDown2 = (0, import_react23.useCallback)((e2) => {
    var _a2, _b, _c, _d;
    if (!inputs2.pointerIsValid(e2))
      return;
    if (e2.button === 2) {
      (_a2 = callbacks.onRightPointBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerDown(e2, "bounds"), e2);
      return;
    }
    if (e2.button !== 0)
      return;
    e2.stopPropagation();
    (_b = e2.currentTarget) == null ? void 0 : _b.setPointerCapture(e2.pointerId);
    const info = inputs2.pointerDown(e2, "bounds");
    (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, info, e2);
    (_d = callbacks.onPointerDown) == null ? void 0 : _d.call(callbacks, info, e2);
  }, [callbacks, inputs2]);
  const onPointerUp2 = (0, import_react23.useCallback)((e2) => {
    var _a2, _b, _c, _d;
    if (e2.button !== 0)
      return;
    inputs2.activePointer = void 0;
    if (!inputs2.pointerIsValid(e2))
      return;
    e2.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e2, "bounds");
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = e2.currentTarget) == null ? void 0 : _a2.releasePointerCapture(e2.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickBounds) == null ? void 0 : _b.call(callbacks, info, e2);
    }
    (_c = callbacks.onReleaseBounds) == null ? void 0 : _c.call(callbacks, info, e2);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e2);
  }, [callbacks, inputs2]);
  const onPointerMove2 = (0, import_react23.useCallback)((e2) => {
    var _a2, _b;
    if (!inputs2.pointerIsValid(e2))
      return;
    if (e2.currentTarget.hasPointerCapture(e2.pointerId)) {
      (_a2 = callbacks.onDragBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerMove(e2, "bounds"), e2);
    }
    const info = inputs2.pointerMove(e2, "bounds");
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e2);
  }, [callbacks, inputs2]);
  const onPointerEnter = (0, import_react23.useCallback)((e2) => {
    var _a2;
    if (!inputs2.pointerIsValid(e2))
      return;
    (_a2 = callbacks.onHoverBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e2, "bounds"), e2);
  }, [callbacks, inputs2]);
  const onPointerLeave = (0, import_react23.useCallback)((e2) => {
    var _a2;
    if (!inputs2.pointerIsValid(e2))
      return;
    (_a2 = callbacks.onUnhoverBounds) == null ? void 0 : _a2.call(callbacks, inputs2.pointerEnter(e2, "bounds"), e2);
  }, [callbacks, inputs2]);
  return {
    onPointerDown: onPointerDown2,
    onPointerUp: onPointerUp2,
    onPointerEnter,
    onPointerMove: onPointerMove2,
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
    const handleKeyDown = (e2) => {
      var _a2;
      (_a2 = callbacks.onKeyDown) == null ? void 0 : _a2.call(callbacks, e2.key, inputs2.keydown(e2), e2);
    };
    const handleKeyUp = (e2) => {
      var _a2;
      inputs2.keyup(e2);
      (_a2 = callbacks.onKeyUp) == null ? void 0 : _a2.call(callbacks, e2.key, inputs2.keyup(e2), e2);
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
  } = _b, props = __objRest2(_b, [
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
  const x3 = {
    left: -44,
    topLeft: -44,
    bottomLeft: -44,
    right: bounds.width + 44,
    topRight: bounds.width + 44,
    bottomRight: bounds.width + 44,
    top: bounds.width / 2,
    bottom: bounds.width / 2
  }[side];
  const y3 = {
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
  const handleClick = (0, import_react36.useCallback)((e2) => {
    var _a2;
    e2.stopPropagation();
    const info = inputs2.pointerDown(e2, side);
    (_a2 = callbacks.onShapeClone) == null ? void 0 : _a2.call(callbacks, info, e2);
  }, [callbacks.onShapeClone]);
  return /* @__PURE__ */ (0, import_react36.createElement)("g", {
    className: "tl-clone-target",
    transform: `translate(${x3}, ${y3})`,
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
  var _b = _a2, { id, className = "", children } = _b, rest = __objRest2(_b, ["id", "className", "children"]);
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
  } = _b, rest = __objRest2(_b, [
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
  } = _b, rest = __objRest2(_b, [
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
  const { shapeUtils: shapeUtils4 } = useTLContext();
  const utils = shapeUtils4[shape.type];
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
  page,
  pageState,
  hideBounds,
  hideHandles,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideRotateHandle,
  hideResizeHandles,
  meta
}) {
  const { bounds: rendererBounds, shapeUtils: shapeUtils4 } = useTLContext();
  const shapeTree = useShapeTree(page, pageState, meta);
  const { bounds, isLinked, isLocked, rotation } = useSelection(page, pageState, shapeUtils4);
  const {
    selectedIds,
    hoveredId,
    camera: { zoom }
  } = pageState;
  let _hideCloneHandles = true;
  let shapeWithHandles = void 0;
  const selectedShapes = selectedIds.map((id) => page.shapes[id]);
  if (selectedShapes.length === 1) {
    const shape = selectedShapes[0];
    const utils = shapeUtils4[shape.type];
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
    utils: shapeUtils4
  }, node))), !hideIndicators && selectedShapes.map((shape) => /* @__PURE__ */ (0, import_react28.createElement)(ShapeIndicator, {
    key: "selected_" + shape.id,
    shape,
    meta,
    isSelected: true
  })), !hideIndicators && hoveredId && /* @__PURE__ */ (0, import_react28.createElement)(ShapeIndicator, {
    key: "hovered_" + hoveredId,
    shape: page.shapes[hoveredId],
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
function useResizeObserver(ref, onBoundsChange2) {
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
        onBoundsChange2(bounds);
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
    __publicField(this, "pointer");
    __publicField(this, "keyboard");
    __publicField(this, "keys", {});
    __publicField(this, "isPinching", false);
    __publicField(this, "bounds", {
      minX: 0,
      maxX: 640,
      minY: 0,
      maxY: 480,
      width: 640,
      height: 480
    });
    __publicField(this, "zoom", 1);
    __publicField(this, "pointerUpTime", 0);
    __publicField(this, "activePointer");
    __publicField(this, "panStart", (e2) => {
      var _a2, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e2;
      const info = {
        target: "wheel",
        pointerId: ((_a2 = this.pointer) == null ? void 0 : _a2.pointerId) || 0,
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        delta: [0, 0],
        pressure: 0.5,
        point: Inputs.getPoint(e2, this.bounds),
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    });
    __publicField(this, "pan", (delta, e2) => {
      if (!this.pointer || this.pointer.target !== "wheel") {
        return this.panStart(e2);
      }
      const { shiftKey, ctrlKey, metaKey, altKey } = e2;
      const prev = this.pointer;
      const point = Inputs.getPoint(e2, this.bounds);
      const info = __spreadProps2(__spreadValues2({}, prev), {
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
    __publicField(this, "keydown", (e2) => {
      var _a2, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e2;
      this.keys[e2.key] = true;
      return {
        point: ((_a2 = this.pointer) == null ? void 0 : _a2.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e2.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
    __publicField(this, "keyup", (e2) => {
      var _a2, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e2;
      delete this.keys[e2.key];
      return {
        point: ((_a2 = this.pointer) == null ? void 0 : _a2.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e2.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
  }
  pointerIsValid(e2) {
    if ("pointerId" in e2) {
      if (this.activePointer && this.activePointer !== e2.pointerId) {
        return false;
      }
    }
    if ("touches" in e2) {
      const touch = e2.changedTouches[0];
      if (this.activePointer && this.activePointer !== touch.identifier) {
        return false;
      }
    }
    return true;
  }
  touchStart(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const touch = e2.changedTouches[0];
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
  touchEnd(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const touch = e2.changedTouches[0];
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
  touchMove(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const touch = e2.changedTouches[0];
    const prev = this.pointer;
    const point = Inputs.getPoint(touch, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec.sub(point, prev.point) : [0, 0];
    const info = __spreadProps2(__spreadValues2({
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
  pointerDown(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const point = Inputs.getPoint(e2, this.bounds);
    this.activePointer = e2.pointerId;
    const info = {
      target,
      pointerId: e2.pointerId,
      origin: point,
      point,
      delta: [0, 0],
      pressure: Inputs.getPressure(e2),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerEnter(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const point = Inputs.getPoint(e2, this.bounds);
    const info = {
      target,
      pointerId: e2.pointerId,
      origin: point,
      delta: [0, 0],
      point,
      pressure: Inputs.getPressure(e2),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerMove(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const prev = this.pointer;
    const point = Inputs.getPoint(e2, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec.sub(point, prev.point) : [0, 0];
    const info = __spreadProps2(__spreadValues2({
      origin: point
    }, prev), {
      target,
      pointerId: e2.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e2),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerUp(e2, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e2;
    const prev = this.pointer;
    const point = Inputs.getPoint(e2, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec.sub(point, prev.point) : [0, 0];
    this.activePointer = void 0;
    const info = __spreadProps2(__spreadValues2({
      origin: point
    }, prev), {
      target,
      pointerId: e2.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e2),
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
  static getPoint(e2, bounds) {
    return [+e2.clientX.toFixed(2) + window.scrollX, +e2.clientY.toFixed(2) + window.scrollY];
  }
  static getPressure(e2) {
    return "pressure" in e2 ? +e2.pressure.toFixed(2) || 0.5 : 0.5;
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
  page
}) {
  const { shapeUtils: shapeUtils4 } = useTLContext();
  return /* @__PURE__ */ (0, import_react48.createElement)(import_react48.Fragment, null, Object.values(users).filter(Boolean).filter((user) => user.id !== userId && user.selectedIds.length > 0).map((user) => {
    const shapes = user.selectedIds.map((id) => page.shapes[id]).filter(Boolean);
    if (shapes.length === 0)
      return null;
    const bounds = utils_default.getCommonBounds(shapes.map((shape) => shapeUtils4[shape.type].getBounds(shape)));
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
  return /* @__PURE__ */ (0, import_react49.createElement)(import_react49.Fragment, null, snapLines.map((snapLine, i3) => /* @__PURE__ */ (0, import_react49.createElement)(SnapLine, {
    key: i3,
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
  }), snapLine.map(([x3, y3], i3) => /* @__PURE__ */ (0, import_react49.createElement)("use", {
    key: i3,
    href: "#tl-snap-point",
    x: x3,
    y: y3
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
  }, /* @__PURE__ */ (0, import_react50.createElement)("defs", null, STEPS.map(([min, mid, size], i3) => {
    const s3 = size * grid * camera.zoom;
    const xo = camera.point[0] * camera.zoom;
    const yo = camera.point[1] * camera.zoom;
    const gxo = xo > 0 ? xo % s3 : s3 + xo % s3;
    const gyo = yo > 0 ? yo % s3 : s3 + yo % s3;
    const opacity = camera.zoom < mid ? utils_default.modulate(camera.zoom, [min, mid], [0, 1]) : 1;
    return /* @__PURE__ */ (0, import_react50.createElement)("pattern", {
      key: `grid-pattern-${i3}`,
      id: `grid-${i3}`,
      width: s3,
      height: s3,
      patternUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ (0, import_react50.createElement)("circle", {
      className: `tl-grid-dot`,
      cx: gxo,
      cy: gyo,
      r: 1,
      opacity
    }));
  })), STEPS.map((_142, i3) => /* @__PURE__ */ (0, import_react50.createElement)("rect", {
    key: `grid-rect-${i3}`,
    width: "100%",
    height: "100%",
    fill: `url(#grid-${i3})`
  })));
}
var Overlay = observer(function Overlay2({ camera: { zoom, point }, children }) {
  const l4 = 2.5 / zoom;
  return /* @__PURE__ */ (0, import_react51.createElement)("svg", {
    className: "tl-overlay"
  }, /* @__PURE__ */ (0, import_react51.createElement)("defs", null, /* @__PURE__ */ (0, import_react51.createElement)("g", {
    id: "tl-snap-point"
  }, /* @__PURE__ */ (0, import_react51.createElement)("path", {
    className: "tl-snap-point",
    d: `M ${-l4},${-l4} L ${l4},${l4} M ${-l4},${l4} L ${l4},${-l4}`
  }))), /* @__PURE__ */ (0, import_react51.createElement)("g", {
    transform: `scale(${zoom}) translate(${point})`
  }, children));
});
var Canvas = observer(function _Canvas({
  id,
  page,
  pageState,
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
  onBoundsChange: onBoundsChange2
}) {
  const rCanvas = (0, import_react9.useRef)(null);
  const rContainer = (0, import_react9.useRef)(null);
  const rLayer = (0, import_react9.useRef)(null);
  inputs.zoom = pageState.camera.zoom;
  useResizeObserver(rCanvas, onBoundsChange2);
  useZoomEvents(pageState.camera.zoom, externalContainerRef || rCanvas);
  useSafariFocusOutFix();
  usePreventNavigation(rCanvas);
  useCameraCss(rLayer, rContainer, pageState);
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
    camera: pageState.camera
  }), /* @__PURE__ */ (0, import_react9.createElement)("div", {
    ref: rLayer,
    className: "tl-absolute tl-layer",
    "data-testid": "layer"
  }, /* @__PURE__ */ (0, import_react9.createElement)(Page, {
    page,
    pageState,
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
    page,
    meta
  }), pageState.brush && /* @__PURE__ */ (0, import_react9.createElement)(Brush, {
    brush: pageState.brush
  }), users && /* @__PURE__ */ (0, import_react9.createElement)(Users, {
    userId,
    users
  })), /* @__PURE__ */ (0, import_react9.createElement)(Overlay, {
    camera: pageState.camera
  }, snapLines && /* @__PURE__ */ (0, import_react9.createElement)(SnapLines, {
    snapLines
  }))));
});
var Renderer = observer(function _Renderer(_a2) {
  var _b = _a2, {
    id = "tl",
    shapeUtils: shapeUtils4,
    page,
    pageState,
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
  } = _b, rest = __objRest2(_b, [
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
  const rPageState = (0, import_react8.useRef)(pageState);
  (0, import_react8.useEffect)(() => {
    rPageState.current = pageState;
  }, [pageState]);
  const [context, setContext] = (0, import_react8.useState)(() => ({
    callbacks: rest,
    shapeUtils: shapeUtils4,
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
  const onBoundsChange2 = (0, import_react8.useCallback)((bounds) => {
    setContext((context2) => __spreadProps2(__spreadValues2({}, context2), {
      bounds
    }));
  }, []);
  return /* @__PURE__ */ (0, import_react8.createElement)(TLContext.Provider, {
    value: context
  }, /* @__PURE__ */ (0, import_react8.createElement)(Canvas, {
    id,
    page,
    pageState,
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
    onBoundsChange: onBoundsChange2,
    meta
  }));
});
var HTMLContainer = (0, import_react52.forwardRef)(function HTMLContainer2(_a2, ref) {
  var _b = _a2, { children, className = "" } = _b, rest = __objRest2(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_react52.createElement)(ObserverComponent, null, () => /* @__PURE__ */ (0, import_react52.createElement)("div", __spreadValues2({
    ref,
    className: `tl-positioned-div ${className}`
  }, rest), children));
});
var TLShapeUtil = class {
  constructor() {
    __publicField(this, "refMap", new Map());
    __publicField(this, "boundsCache", new WeakMap());
    __publicField(this, "showCloneHandles", false);
    __publicField(this, "hideBounds", false);
    __publicField(this, "isStateful", false);
    __publicField(this, "shouldRender", (prev, next) => true);
    __publicField(this, "getRef", (shape) => {
      if (!this.refMap.has(shape.id)) {
        this.refMap.set(shape.id, (0, import_react53.createRef)());
      }
      return this.refMap.get(shape.id);
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      const corners = utils_default.getRotatedCorners(shapeBounds, shape.rotation);
      return corners.every((point) => utils_default.pointInBounds(point, bounds)) || intersectPolygonBounds(corners, bounds).length > 0;
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      return utils_default.getBoundsFromPoints(utils_default.getRotatedCorners(this.getBounds(shape), shape.rotation));
    });
  }
};
__publicField(TLShapeUtil, "Component", (component) => {
  return (0, import_react53.forwardRef)(component);
});
__publicField(TLShapeUtil, "Indicator", (component) => component);

// ../../node_modules/@state-designer/react/dist/esm/index.js
var import_react54 = __toModule(require_react());

// ../../node_modules/nanoid/index.prod.js
if (false) {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative" && typeof crypto === "undefined") {
    throw new Error("React Native does not have a built-in secure random generator. If you don\u2019t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID.");
  }
  if (typeof msCrypto !== "undefined" && typeof crypto === "undefined") {
    throw new Error("Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support");
  }
  if (typeof crypto === "undefined") {
    throw new Error("Your browser does not have secure random generator. If you don\u2019t need unpredictable IDs, you can use nanoid/non-secure.");
  }
}
var nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += "_";
    } else {
      id += "-";
    }
  }
  return id;
};

// ../../node_modules/immer/dist/immer.esm.js
function n(n3) {
  for (var t3 = arguments.length, r3 = Array(t3 > 1 ? t3 - 1 : 0), e2 = 1; e2 < t3; e2++)
    r3[e2 - 1] = arguments[e2];
  if (false) {
    var i3 = Y[n3], o3 = i3 ? typeof i3 == "function" ? i3.apply(null, r3) : i3 : "unknown error nr: " + n3;
    throw Error("[Immer] " + o3);
  }
  throw Error("[Immer] minified error nr: " + n3 + (r3.length ? " " + r3.map(function(n4) {
    return "'" + n4 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function t(n3) {
  return !!n3 && !!n3[Q];
}
function r(n3) {
  return !!n3 && (function(n4) {
    if (!n4 || typeof n4 != "object")
      return false;
    var t3 = Object.getPrototypeOf(n4);
    if (t3 === null)
      return true;
    var r3 = Object.hasOwnProperty.call(t3, "constructor") && t3.constructor;
    return r3 === Object || typeof r3 == "function" && Function.toString.call(r3) === Z;
  }(n3) || Array.isArray(n3) || !!n3[L] || !!n3.constructor[L] || s(n3) || v(n3));
}
function i(n3, t3, r3) {
  r3 === void 0 && (r3 = false), o(n3) === 0 ? (r3 ? Object.keys : nn)(n3).forEach(function(e2) {
    r3 && typeof e2 == "symbol" || t3(e2, n3[e2], n3);
  }) : n3.forEach(function(r4, e2) {
    return t3(e2, r4, n3);
  });
}
function o(n3) {
  var t3 = n3[Q];
  return t3 ? t3.i > 3 ? t3.i - 4 : t3.i : Array.isArray(n3) ? 1 : s(n3) ? 2 : v(n3) ? 3 : 0;
}
function u(n3, t3) {
  return o(n3) === 2 ? n3.has(t3) : Object.prototype.hasOwnProperty.call(n3, t3);
}
function a(n3, t3) {
  return o(n3) === 2 ? n3.get(t3) : n3[t3];
}
function f(n3, t3, r3) {
  var e2 = o(n3);
  e2 === 2 ? n3.set(t3, r3) : e2 === 3 ? (n3.delete(t3), n3.add(r3)) : n3[t3] = r3;
}
function c(n3, t3) {
  return n3 === t3 ? n3 !== 0 || 1 / n3 == 1 / t3 : n3 != n3 && t3 != t3;
}
function s(n3) {
  return X && n3 instanceof Map;
}
function v(n3) {
  return q && n3 instanceof Set;
}
function p(n3) {
  return n3.o || n3.t;
}
function l(n3) {
  if (Array.isArray(n3))
    return Array.prototype.slice.call(n3);
  var t3 = tn(n3);
  delete t3[Q];
  for (var r3 = nn(t3), e2 = 0; e2 < r3.length; e2++) {
    var i3 = r3[e2], o3 = t3[i3];
    o3.writable === false && (o3.writable = true, o3.configurable = true), (o3.get || o3.set) && (t3[i3] = { configurable: true, writable: true, enumerable: o3.enumerable, value: n3[i3] });
  }
  return Object.create(Object.getPrototypeOf(n3), t3);
}
function d(n3, e2) {
  return e2 === void 0 && (e2 = false), y(n3) || t(n3) || !r(n3) ? n3 : (o(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = h), Object.freeze(n3), e2 && i(n3, function(n4, t3) {
    return d(t3, true);
  }, true), n3);
}
function h() {
  n(2);
}
function y(n3) {
  return n3 == null || typeof n3 != "object" || Object.isFrozen(n3);
}
function b(t3) {
  var r3 = rn[t3];
  return r3 || n(18, t3), r3;
}
function m(n3, t3) {
  rn[n3] || (rn[n3] = t3);
}
function _14() {
  return true, U;
}
function j(n3, t3) {
  t3 && (b("Patches"), n3.u = [], n3.s = [], n3.v = t3);
}
function O(n3) {
  g(n3), n3.p.forEach(S), n3.p = null;
}
function g(n3) {
  n3 === U && (U = n3.l);
}
function w(n3) {
  return U = { p: [], l: U, h: n3, m: true, _: 0 };
}
function S(n3) {
  var t3 = n3[Q];
  t3.i === 0 || t3.i === 1 ? t3.j() : t3.O = true;
}
function P(t3, e2) {
  e2._ = e2.p.length;
  var i3 = e2.p[0], o3 = t3 !== void 0 && t3 !== i3;
  return e2.h.g || b("ES5").S(e2, t3, o3), o3 ? (i3[Q].P && (O(e2), n(4)), r(t3) && (t3 = M(e2, t3), e2.l || x(e2, t3)), e2.u && b("Patches").M(i3[Q], t3, e2.u, e2.s)) : t3 = M(e2, i3, []), O(e2), e2.u && e2.v(e2.u, e2.s), t3 !== H ? t3 : void 0;
}
function M(n3, t3, r3) {
  if (y(t3))
    return t3;
  var e2 = t3[Q];
  if (!e2)
    return i(t3, function(i3, o4) {
      return A(n3, e2, t3, i3, o4, r3);
    }, true), t3;
  if (e2.A !== n3)
    return t3;
  if (!e2.P)
    return x(n3, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o3 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o3) : o3, function(t4, i3) {
      return A(n3, e2, o3, t4, i3, r3);
    }), x(n3, o3, false), r3 && n3.u && b("Patches").R(e2, r3, n3.u, n3.s);
  }
  return e2.o;
}
function A(e2, i3, o3, a4, c3, s3) {
  if (false, t(c3)) {
    var v3 = M(e2, c3, s3 && i3 && i3.i !== 3 && !u(i3.D, a4) ? s3.concat(a4) : void 0);
    if (f(o3, a4, v3), !t(v3))
      return;
    e2.m = false;
  }
  if (r(c3) && !y(c3)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M(e2, c3), i3 && i3.A.l || x(e2, c3);
  }
}
function x(n3, t3, r3) {
  r3 === void 0 && (r3 = false), n3.h.F && n3.m && d(t3, r3);
}
function z(n3, t3) {
  var r3 = n3[Q];
  return (r3 ? p(r3) : n3)[t3];
}
function I(n3, t3) {
  if (t3 in n3)
    for (var r3 = Object.getPrototypeOf(n3); r3; ) {
      var e2 = Object.getOwnPropertyDescriptor(r3, t3);
      if (e2)
        return e2;
      r3 = Object.getPrototypeOf(r3);
    }
}
function k(n3) {
  n3.P || (n3.P = true, n3.l && k(n3.l));
}
function E(n3) {
  n3.o || (n3.o = l(n3.t));
}
function R(n3, t3, r3) {
  var e2 = s(t3) ? b("MapSet").N(t3, r3) : v(t3) ? b("MapSet").T(t3, r3) : n3.g ? function(n4, t4) {
    var r4 = Array.isArray(n4), e3 = { i: r4 ? 1 : 0, A: t4 ? t4.A : _14(), P: false, I: false, D: {}, l: t4, t: n4, k: null, o: null, j: null, C: false }, i3 = e3, o3 = en;
    r4 && (i3 = [e3], o3 = on);
    var u3 = Proxy.revocable(i3, o3), a4 = u3.revoke, f4 = u3.proxy;
    return e3.k = f4, e3.j = a4, f4;
  }(t3, r3) : b("ES5").J(t3, r3);
  return (r3 ? r3.A : _14()).p.push(e2), e2;
}
function D(e2) {
  return t(e2) || n(22, e2), function n3(t3) {
    if (!r(t3))
      return t3;
    var e3, u3 = t3[Q], c3 = o(t3);
    if (u3) {
      if (!u3.P && (u3.i < 4 || !b("ES5").K(u3)))
        return u3.t;
      u3.I = true, e3 = F(t3, c3), u3.I = false;
    } else
      e3 = F(t3, c3);
    return i(e3, function(t4, r3) {
      u3 && a(u3.t, t4) === r3 || f(e3, t4, n3(r3));
    }), c3 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F(n3, t3) {
  switch (t3) {
    case 2:
      return new Map(n3);
    case 3:
      return Array.from(n3);
  }
  return l(n3);
}
function C() {
  function t3(n3, t4) {
    function r3() {
      this.constructor = n3;
    }
    a4(n3, t4), n3.prototype = (r3.prototype = t4.prototype, new r3());
  }
  function e2(n3) {
    n3.o || (n3.D = new Map(), n3.o = new Map(n3.t));
  }
  function o3(n3) {
    n3.o || (n3.o = new Set(), n3.t.forEach(function(t4) {
      if (r(t4)) {
        var e3 = R(n3.A.h, t4, n3);
        n3.p.set(t4, e3), n3.o.add(e3);
      } else
        n3.o.add(t4);
    }));
  }
  function u3(t4) {
    t4.O && n(3, JSON.stringify(p(t4)));
  }
  var a4 = function(n3, t4) {
    return (a4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n4, t5) {
      n4.__proto__ = t5;
    } || function(n4, t5) {
      for (var r3 in t5)
        t5.hasOwnProperty(r3) && (n4[r3] = t5[r3]);
    })(n3, t4);
  }, f4 = function() {
    function n3(n4, t4) {
      return this[Q] = { i: 2, l: t4, A: t4 ? t4.A : _14(), P: false, I: false, o: void 0, D: void 0, t: n4, k: this, C: false, O: false }, this;
    }
    t3(n3, Map);
    var o4 = n3.prototype;
    return Object.defineProperty(o4, "size", { get: function() {
      return p(this[Q]).size;
    } }), o4.has = function(n4) {
      return p(this[Q]).has(n4);
    }, o4.set = function(n4, t4) {
      var r3 = this[Q];
      return u3(r3), p(r3).has(n4) && p(r3).get(n4) === t4 || (e2(r3), k(r3), r3.D.set(n4, true), r3.o.set(n4, t4), r3.D.set(n4, true)), this;
    }, o4.delete = function(n4) {
      if (!this.has(n4))
        return false;
      var t4 = this[Q];
      return u3(t4), e2(t4), k(t4), t4.D.set(n4, false), t4.o.delete(n4), true;
    }, o4.clear = function() {
      var n4 = this[Q];
      u3(n4), p(n4).size && (e2(n4), k(n4), n4.D = new Map(), i(n4.t, function(t4) {
        n4.D.set(t4, false);
      }), n4.o.clear());
    }, o4.forEach = function(n4, t4) {
      var r3 = this;
      p(this[Q]).forEach(function(e3, i3) {
        n4.call(t4, r3.get(i3), i3, r3);
      });
    }, o4.get = function(n4) {
      var t4 = this[Q];
      u3(t4);
      var i3 = p(t4).get(n4);
      if (t4.I || !r(i3))
        return i3;
      if (i3 !== t4.t.get(n4))
        return i3;
      var o5 = R(t4.A.h, i3, t4);
      return e2(t4), t4.o.set(n4, o5), o5;
    }, o4.keys = function() {
      return p(this[Q]).keys();
    }, o4.values = function() {
      var n4, t4 = this, r3 = this.keys();
      return (n4 = {})[V2] = function() {
        return t4.values();
      }, n4.next = function() {
        var n5 = r3.next();
        return n5.done ? n5 : { done: false, value: t4.get(n5.value) };
      }, n4;
    }, o4.entries = function() {
      var n4, t4 = this, r3 = this.keys();
      return (n4 = {})[V2] = function() {
        return t4.entries();
      }, n4.next = function() {
        var n5 = r3.next();
        if (n5.done)
          return n5;
        var e3 = t4.get(n5.value);
        return { done: false, value: [n5.value, e3] };
      }, n4;
    }, o4[V2] = function() {
      return this.entries();
    }, n3;
  }(), c3 = function() {
    function n3(n4, t4) {
      return this[Q] = { i: 3, l: t4, A: t4 ? t4.A : _14(), P: false, I: false, o: void 0, t: n4, k: this, p: new Map(), O: false, C: false }, this;
    }
    t3(n3, Set);
    var r3 = n3.prototype;
    return Object.defineProperty(r3, "size", { get: function() {
      return p(this[Q]).size;
    } }), r3.has = function(n4) {
      var t4 = this[Q];
      return u3(t4), t4.o ? !!t4.o.has(n4) || !(!t4.p.has(n4) || !t4.o.has(t4.p.get(n4))) : t4.t.has(n4);
    }, r3.add = function(n4) {
      var t4 = this[Q];
      return u3(t4), this.has(n4) || (o3(t4), k(t4), t4.o.add(n4)), this;
    }, r3.delete = function(n4) {
      if (!this.has(n4))
        return false;
      var t4 = this[Q];
      return u3(t4), o3(t4), k(t4), t4.o.delete(n4) || !!t4.p.has(n4) && t4.o.delete(t4.p.get(n4));
    }, r3.clear = function() {
      var n4 = this[Q];
      u3(n4), p(n4).size && (o3(n4), k(n4), n4.o.clear());
    }, r3.values = function() {
      var n4 = this[Q];
      return u3(n4), o3(n4), n4.o.values();
    }, r3.entries = function() {
      var n4 = this[Q];
      return u3(n4), o3(n4), n4.o.entries();
    }, r3.keys = function() {
      return this.values();
    }, r3[V2] = function() {
      return this.values();
    }, r3.forEach = function(n4, t4) {
      for (var r4 = this.values(), e3 = r4.next(); !e3.done; )
        n4.call(t4, e3.value, e3.value, this), e3 = r4.next();
    }, n3;
  }();
  m("MapSet", { N: function(n3, t4) {
    return new f4(n3, t4);
  }, T: function(n3, t4) {
    return new c3(n3, t4);
  } });
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V2 = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n3) {
  return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
} : Object.getOwnPropertyNames;
var tn = Object.getOwnPropertyDescriptors || function(n3) {
  var t3 = {};
  return nn(n3).forEach(function(r3) {
    t3[r3] = Object.getOwnPropertyDescriptor(n3, r3);
  }), t3;
};
var rn = {};
var en = { get: function(n3, t3) {
  if (t3 === Q)
    return n3;
  var e2 = p(n3);
  if (!u(e2, t3))
    return function(n4, t4, r3) {
      var e3, i4 = I(t4, r3);
      return i4 ? "value" in i4 ? i4.value : (e3 = i4.get) === null || e3 === void 0 ? void 0 : e3.call(n4.k) : void 0;
    }(n3, e2, t3);
  var i3 = e2[t3];
  return n3.I || !r(i3) ? i3 : i3 === z(n3.t, t3) ? (E(n3), n3.o[t3] = R(n3.A.h, i3, n3)) : i3;
}, has: function(n3, t3) {
  return t3 in p(n3);
}, ownKeys: function(n3) {
  return Reflect.ownKeys(p(n3));
}, set: function(n3, t3, r3) {
  var e2 = I(p(n3), t3);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n3.k, r3), true;
  if (!n3.P) {
    var i3 = z(p(n3), t3), o3 = i3 == null ? void 0 : i3[Q];
    if (o3 && o3.t === r3)
      return n3.o[t3] = r3, n3.D[t3] = false, true;
    if (c(r3, i3) && (r3 !== void 0 || u(n3.t, t3)))
      return true;
    E(n3), k(n3);
  }
  return n3.o[t3] === r3 && typeof r3 != "number" && (r3 !== void 0 || t3 in n3.o) || (n3.o[t3] = r3, n3.D[t3] = true, true);
}, deleteProperty: function(n3, t3) {
  return z(n3.t, t3) !== void 0 || t3 in n3.t ? (n3.D[t3] = false, E(n3), k(n3)) : delete n3.D[t3], n3.o && delete n3.o[t3], true;
}, getOwnPropertyDescriptor: function(n3, t3) {
  var r3 = p(n3), e2 = Reflect.getOwnPropertyDescriptor(r3, t3);
  return e2 ? { writable: true, configurable: n3.i !== 1 || t3 !== "length", enumerable: e2.enumerable, value: r3[t3] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n3) {
  return Object.getPrototypeOf(n3.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n3, t3) {
  on[n3] = function() {
    return arguments[0] = arguments[0][0], t3.apply(this, arguments);
  };
}), on.deleteProperty = function(t3, r3) {
  return false, en.deleteProperty.call(this, t3[0], r3);
}, on.set = function(t3, r3, e2) {
  return false, en.set.call(this, t3[0], r3, e2, t3[0]);
};
var un = function() {
  function e2(t3) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(t4, i4, o3) {
      if (typeof t4 == "function" && typeof i4 != "function") {
        var u3 = i4;
        i4 = t4;
        var a4 = e3;
        return function(n3) {
          var t5 = this;
          n3 === void 0 && (n3 = u3);
          for (var r3 = arguments.length, e4 = Array(r3 > 1 ? r3 - 1 : 0), o4 = 1; o4 < r3; o4++)
            e4[o4 - 1] = arguments[o4];
          return a4.produce(n3, function(n4) {
            var r4;
            return (r4 = i4).call.apply(r4, [t5, n4].concat(e4));
          });
        };
      }
      var f4;
      if (typeof i4 != "function" && n(6), o3 !== void 0 && typeof o3 != "function" && n(7), r(t4)) {
        var c3 = w(e3), s3 = R(e3, t4, void 0), v3 = true;
        try {
          f4 = i4(s3), v3 = false;
        } finally {
          v3 ? O(c3) : g(c3);
        }
        return typeof Promise != "undefined" && f4 instanceof Promise ? f4.then(function(n3) {
          return j(c3, o3), P(n3, c3);
        }, function(n3) {
          throw O(c3), n3;
        }) : (j(c3, o3), P(f4, c3));
      }
      if (!t4 || typeof t4 != "object") {
        if ((f4 = i4(t4)) === H)
          return;
        return f4 === void 0 && (f4 = t4), e3.F && d(f4, true), f4;
      }
      n(21, t4);
    }, this.produceWithPatches = function(n3, t4) {
      return typeof n3 == "function" ? function(t5) {
        for (var r4 = arguments.length, i5 = Array(r4 > 1 ? r4 - 1 : 0), o3 = 1; o3 < r4; o3++)
          i5[o3 - 1] = arguments[o3];
        return e3.produceWithPatches(t5, function(t6) {
          return n3.apply(void 0, [t6].concat(i5));
        });
      } : [e3.produce(n3, t4, function(n4, t5) {
        r3 = n4, i4 = t5;
      }), r3, i4];
      var r3, i4;
    }, typeof (t3 == null ? void 0 : t3.useProxies) == "boolean" && this.setUseProxies(t3.useProxies), typeof (t3 == null ? void 0 : t3.autoFreeze) == "boolean" && this.setAutoFreeze(t3.autoFreeze);
  }
  var i3 = e2.prototype;
  return i3.createDraft = function(e3) {
    r(e3) || n(8), t(e3) && (e3 = D(e3));
    var i4 = w(this), o3 = R(this, e3, void 0);
    return o3[Q].C = true, g(i4), o3;
  }, i3.finishDraft = function(t3, r3) {
    var e3 = t3 && t3[Q];
    false;
    var i4 = e3.A;
    return j(i4, r3), P(void 0, i4);
  }, i3.setAutoFreeze = function(n3) {
    this.F = n3;
  }, i3.setUseProxies = function(t3) {
    t3 && !B && n(20), this.g = t3;
  }, i3.applyPatches = function(n3, r3) {
    var e3;
    for (e3 = r3.length - 1; e3 >= 0; e3--) {
      var i4 = r3[e3];
      if (i4.path.length === 0 && i4.op === "replace") {
        n3 = i4.value;
        break;
      }
    }
    e3 > -1 && (r3 = r3.slice(e3 + 1));
    var o3 = b("Patches").$;
    return t(n3) ? o3(n3, r3) : this.produce(n3, function(n4) {
      return o3(n4, r3);
    });
  }, e2;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// ../../node_modules/@state-designer/core/dist/esm/index.js
var __defProp3 = Object.defineProperty;
var __defProps3 = Object.defineProperties;
var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a4, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp3.call(b3, prop))
      __defNormalProp3(a4, prop, b3[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b3)) {
      if (__propIsEnum3.call(b3, prop))
        __defNormalProp3(a4, prop, b3[prop]);
    }
  return a4;
};
var __spreadProps3 = (a4, b3) => __defProps3(a4, __getOwnPropDescs3(b3));
var __markAsModule2 = (target) => __defProp3(target, "__esModule", { value: true });
var __export2 = (target, all) => {
  __markAsModule2(target);
  for (var name in all)
    __defProp3(target, name, { get: all[name], enumerable: true });
};
function testEventHandlerConditions(h3, d3, p3, r3) {
  try {
    if (h3.if[0] && !h3.if.every((c3) => c3(d3, p3, r3)))
      return false;
    if (h3.ifAny[0] && !h3.ifAny.some((c3) => c3(d3, p3, r3)))
      return false;
    if (h3.unless[0] && !h3.unless.every((c3) => !c3(d3, p3, r3)))
      return false;
    if (h3.unlessAny[0] && !h3.unlessAny.some((c3) => !c3(d3, p3, r3)))
      return false;
    return true;
  } catch (e2) {
    throw Error(`Error while testing conditions! ` + e2.message);
  }
}
function customError(message, error) {
  const err = new Error(message + " " + error.message);
  err.stack = error.stack;
  return err;
}
function createEventChain(options) {
  const { state, onDelayedOutcome, getFreshDataAfterWait } = options;
  const handlers = [...options.handler];
  const { payload } = options;
  let waiting = false;
  let core = {
    data: options.data,
    payload: options.payload,
    result: options.result
  };
  const finalOutcome = __spreadProps3(__spreadValues3({}, core), {
    shouldBreak: false,
    shouldNotify: false,
    pendingTransition: []
  });
  let draftCore = ln(core);
  let tResult = options.result;
  function complete(draft) {
    core = dn(draft);
    finalOutcome.result = core.result;
    finalOutcome.data = core.data;
  }
  function processHandlerObject(handler, draft) {
    if (handler.get.length > 0) {
      let fnName = "";
      try {
        for (const result of handler.get) {
          fnName = result.name;
          tResult = result(draft.data, payload, tResult);
        }
      } catch (e2) {
        throw customError(`Error in result (${fnName})!`, e2);
      }
      draft.result = tResult;
    }
    const passedConditions = testEventHandlerConditions(handler, draft.data, draft.payload, draft.result);
    if (passedConditions) {
      if (handler.do.length > 0) {
        finalOutcome.shouldNotify = true;
        let fnName = "";
        try {
          for (const action3 of handler.do) {
            fnName = action3.name;
            const result = action3(draft.data, draft.payload, draft.result);
            if (result) {
              Object.assign(draft.data, Object.freeze(result));
            }
          }
        } catch (e2) {
          throw customError(`Error in action (${fnName})!`, e2);
        }
      }
      if (handler.secretlyDo.length > 0) {
        let fnName = "";
        try {
          for (const action3 of handler.secretlyDo) {
            fnName = action3.name;
            const result = action3(draft.data, draft.payload, draft.result);
            if (result) {
              Object.assign(draft.data, Object.freeze(result));
            }
          }
        } catch (e2) {
          throw customError(`Error in secret action (${fnName})!`, e2);
        }
      }
      if (handler.to.length > 0) {
        let fnName = "";
        try {
          for (const fn2 of handler.to) {
            fnName = fn2.name;
            finalOutcome.pendingTransition.push(fn2(draft.data, draft.payload, draft.result));
          }
          finalOutcome.shouldBreak = true;
          finalOutcome.shouldNotify = true;
          return { shouldBreak: true };
        } catch (e2) {
          throw customError(`Error computing transition (${fnName})!`, e2);
        }
      }
      if (handler.secretlyTo.length > 0) {
        let fnName = "";
        try {
          for (const fn2 of handler.secretlyTo) {
            fnName = fn2.name;
            finalOutcome.pendingTransition.push(fn2(draft.data, draft.payload, draft.result));
          }
          finalOutcome.shouldBreak = true;
          return { shouldBreak: true };
        } catch (e2) {
          throw customError(`Error computing secret transition (${fnName})!`, e2);
        }
      }
      if (handler.then !== void 0) {
        processEventHandler([...handler.then], draft);
      }
      if (handler.break !== void 0) {
        try {
          if (handler.break(draft.data, draft.payload, draft.result)) {
            return { shouldBreak: true };
          }
        } catch (e2) {
          throw customError(`Error computing break (${handler.break.name})!`, e2);
        }
      }
    } else {
      if (handler.else !== void 0) {
        processEventHandler([...handler.else], draft);
      }
    }
    return { shouldBreak: false };
  }
  function processEventHandler(eventHandler, draft) {
    if (finalOutcome.shouldBreak) {
      return { shouldBreakDueToWait: false };
    }
    const nextHandlerObject = eventHandler.shift();
    if (nextHandlerObject === void 0) {
      return { shouldBreakDueToWait: false };
    } else if (nextHandlerObject.wait !== void 0) {
      const waitTime = nextHandlerObject.wait(draft.data, payload, draft.result) * 1e3;
      if (waiting && finalOutcome.shouldNotify) {
        complete(draftCore);
        onDelayedOutcome(finalOutcome);
      }
      waiting = true;
      state.times.timeouts[0] = setTimeout(() => {
        core.data = getFreshDataAfterWait();
        core.result = void 0;
        draftCore = ln(core);
        const { shouldBreak } = processHandlerObject(nextHandlerObject, draftCore);
        if (!shouldBreak) {
          const { shouldBreakDueToWait } = processEventHandler(handlers, draftCore);
          if (shouldBreakDueToWait) {
            return;
          }
        }
        complete(draftCore);
        onDelayedOutcome(finalOutcome);
      }, waitTime);
      return { shouldBreakDueToWait: true };
    } else {
      const { shouldBreak } = processHandlerObject(nextHandlerObject, draft);
      if (!shouldBreak) {
        return processEventHandler(eventHandler, draft);
      }
      return { shouldBreakDueToWait: false };
    }
  }
  processEventHandler(handlers, draftCore);
  complete(draftCore);
  return finalOutcome;
}
function last(array3) {
  const length = array3 == null ? 0 : array3.length;
  return array3[length - 1];
}
function castArray(a4) {
  return Array.isArray(a4) ? a4 : [a4];
}
function deactivateState(state) {
  state.active = false;
  for (const childState of Object.values(state.states)) {
    deactivateState(childState);
  }
}
function getActiveStates(state) {
  const acc = [];
  if (state.active) {
    acc.push(state);
    for (const childState of Object.values(state.states)) {
      acc.push(...getActiveStates(childState));
    }
  }
  return acc;
}
function activateState(state, path, before, prev, deep) {
  let isTarget = false;
  state.active = true;
  if (state.name === path[0]) {
    path.shift();
    if (path.length === 0) {
      isTarget = true;
    }
  }
  if (state.initial === void 0) {
    Object.values(state.states).forEach((c3) => activateState(c3, path, before, prev, deep));
  } else if (prev && path.length === 0) {
    const c3 = state.states[last(state.history) || state.initial];
    activateState(c3, path, before, deep, deep);
  } else if (state.states[path[0]] !== void 0) {
    const c3 = state.states[path[0]];
    state.history.push(c3.name);
    activateState(c3, path, before, prev, deep);
  } else if (!isTarget && before.includes(state)) {
    const c3 = state.states[last(state.history) || state.initial];
    activateState(c3, path, before, false, false);
  } else {
    const c3 = state.states[state.initial];
    state.history.push(c3.name);
    activateState(c3, path, before, false, false);
  }
}
function findTransitionTargets(state, path) {
  const acc = [];
  const safePath = path.startsWith(".") ? path : "." + path;
  if (state.path.endsWith(safePath)) {
    acc.push(state);
  }
  for (const childState of Object.values(state.states)) {
    acc.push(...findTransitionTargets(childState, path));
  }
  return acc;
}
function getInitialState(initial, payload, data) {
  if (initial.else !== void 0) {
    let result = void 0;
    for (const resu of initial.get) {
      result = resu(data, payload, result);
    }
    if (testEventHandlerConditions(initial, data, payload, result)) {
      if (initial.then !== void 0) {
        return getInitialState(initial.then, payload, data);
      } else {
        return initial.to(data, payload, result);
      }
    } else {
      return getInitialState(initial.else, payload, data);
    }
  } else {
    return initial.to(data, payload, void 0);
  }
}
function setIntitialStates(state, payload, data) {
  if (state.initialFn !== void 0) {
    state.initial = getInitialState(state.initialFn, payload, data);
  }
  if (state.states !== void 0) {
    for (const child of Object.values(state.states)) {
      setIntitialStates(child, payload, data);
    }
  }
}
function endStateIntervals(state) {
  const { cancelAsync, timeouts, interval, animationFrame } = state.times;
  if (cancelAsync !== void 0) {
    cancelAsync();
    state.times.cancelAsync = void 0;
  }
  for (const timeout of timeouts) {
    clearTimeout(timeout);
  }
  state.times.timeouts = [];
  if (interval !== void 0) {
    clearInterval(interval);
    state.times.interval = void 0;
  }
  if (animationFrame !== void 0) {
    cancelAnimationFrame(animationFrame);
    state.times.animationFrame = void 0;
  }
}
function recursivelyEndStateIntervals(state) {
  endStateIntervals(state);
  for (const child of Object.values(state.states)) {
    recursivelyEndStateIntervals(child);
  }
}
function getStateTreeFromDesign(config, id) {
  const times = Object.fromEntries(Object.entries(config.times || {}).map(([k3, v3]) => {
    return [k3, castToFunction(v3)];
  }));
  function getEventFn(item, collection, collectionName) {
    if (typeof item === "string") {
      if (!collection) {
        throw Error(`No ${collectionName} in config!`);
      } else {
        const itemFromCollection = collection[item];
        if (typeof itemFromCollection === "undefined") {
          throw Error(`No item in ${collectionName} named ${item}!`);
        }
        return itemFromCollection;
      }
    } else {
      return item;
    }
  }
  function castToNamedFunction(item) {
    const fn2 = () => item;
    Object.defineProperty(fn2, "name", { value: item, writable: false });
    return fn2;
  }
  function castToFunction(item) {
    if (typeof item === "undefined")
      return void 0;
    return typeof item === "function" ? item : castToNamedFunction(item);
  }
  function getTransitions(items) {
    if (typeof items === "undefined")
      return [];
    return castArray(items).map((item) => typeof item === "function" ? item : castToNamedFunction(item));
  }
  function getResults(items) {
    if (typeof items === "undefined")
      return [];
    return castArray(items).map((item) => getEventFn(item, config.results, "results"));
  }
  function getConditions(items) {
    if (typeof items === "undefined")
      return [];
    return castArray(items).map((item) => getEventFn(item, config.conditions, "conditions"));
  }
  function getActions(items) {
    if (typeof items === "undefined")
      return [];
    return castArray(items).map((item) => getEventFn(item, config.actions, "actions"));
  }
  function getAsync(item) {
    return getEventFn(item, config.asyncs, "asyncs");
  }
  function getTime(item) {
    if (typeof item === "undefined")
      return void 0;
    return typeof item === "number" ? castToNamedFunction(item) : getEventFn(item, times, "times");
  }
  function getEventHandlerObject(itemCfg) {
    return {
      get: getResults(itemCfg.get),
      if: getConditions(itemCfg.if),
      ifAny: getConditions(itemCfg.ifAny),
      unless: getConditions(itemCfg.unless),
      unlessAny: getConditions(itemCfg.unlessAny),
      do: getActions(itemCfg.do),
      secretlyDo: getActions(itemCfg.secretlyDo),
      to: getTransitions(itemCfg.to),
      secretlyTo: getTransitions(itemCfg.secretlyTo),
      wait: getTime(itemCfg.wait),
      break: castToFunction(itemCfg.break),
      then: itemCfg.then ? getEventHandler(itemCfg.then) : void 0,
      else: itemCfg.else ? getEventHandler(itemCfg.else) : void 0
    };
  }
  function getEventHandler(event) {
    return castArray(event).map((eventHandler) => {
      switch (typeof eventHandler) {
        case "string": {
          if (typeof config.actions === "undefined") {
            throw new Error("Actions is undefined!");
          } else {
            const eventFn = config.actions && config.actions[eventHandler];
            return getEventHandlerObject({ do: eventFn });
          }
        }
        case "function": {
          return getEventHandlerObject({ do: eventHandler });
        }
        default: {
          return getEventHandlerObject(eventHandler);
        }
      }
    });
  }
  function getInitialState2(initial) {
    if (typeof initial === "undefined") {
      return;
    }
    if (typeof initial === "string" || !("else" in initial)) {
      const target = typeof initial === "string" ? initial : initial.to;
      return {
        get: [],
        if: [],
        unless: [],
        ifAny: [],
        unlessAny: [],
        to: typeof target === "function" ? target : castToNamedFunction(target)
      };
    } else {
      return {
        get: getResults(initial.get),
        if: getConditions(initial.if),
        unless: getConditions(initial.unless),
        ifAny: getConditions(initial.ifAny),
        unlessAny: getConditions(initial.unlessAny),
        to: typeof initial.to === "function" ? initial.to : castToNamedFunction(initial.to),
        then: getInitialState2(initial.then),
        else: getInitialState2(initial.else)
      };
    }
  }
  function createState2(state, name, path, active, depth, isInitial, parentType) {
    if (state.initial !== void 0 && state.states === void 0) {
      throw Error(`In ${path + name}, you've provided an initial state but no states!`);
    }
    const type = state.states ? state.initial ? "branch" : "parallel" : "leaf";
    return {
      name,
      type,
      isInitial,
      parentType,
      depth,
      path: path + name,
      active,
      activeId: 0,
      history: [],
      times: {
        timeouts: [],
        interval: void 0,
        animationFrame: void 0
      },
      initialFn: getInitialState2(state.initial),
      initial: void 0,
      onEnter: state.onEnter ? getEventHandler(state.onEnter) : void 0,
      onExit: state.onExit ? getEventHandler(state.onExit) : void 0,
      onEvent: state.onEvent ? getEventHandler(state.onEvent) : void 0,
      async: state.async ? {
        await: getAsync(state.async.await),
        onResolve: getEventHandler(state.async.onResolve),
        onReject: state.async.onReject ? getEventHandler(state.async.onReject) : void 0
      } : void 0,
      repeat: state.repeat ? {
        onRepeat: getEventHandler(state.repeat.onRepeat),
        delay: state.repeat.delay ? getTime(state.repeat.delay) : void 0
      } : void 0,
      on: Object.fromEntries(state.on ? Object.entries(state.on).map(([name2, event]) => [name2, getEventHandler(event)]) : []),
      states: Object.fromEntries(state.states ? Object.entries(state.states).map(([childName, childState]) => {
        return [
          childName,
          createState2(childState, childName, path + name + ".", false, depth + 1, state.initial === childName, type)
        ];
      }) : [])
    };
  }
  return createState2(config, "root", id + ".", true, 0, true, null);
}
C();
sn(false);
function createState(design) {
  var _a2;
  const { options = {} } = design;
  const { suppressErrors = false, onSend } = options;
  let logEnabled = (_a2 = design.options) == null ? void 0 : _a2.enableLog;
  function handleError(err, prefix) {
    var _a22;
    if (prefix) {
      err.message = prefix + ": " + err.message;
    }
    if ((_a22 = design.options) == null ? void 0 : _a22.onError) {
      design.options.onError(err);
    }
    if (suppressErrors) {
      throw err;
    } else {
      throw err;
    }
  }
  const subscribers = new Set([]);
  function subscribe(callbackFn) {
    subscribers.add(callbackFn);
  }
  function unsubscribe(callbackFn) {
    if (subscribers.has(callbackFn)) {
      subscribers.delete(callbackFn);
    }
    if (subscribers.size === 0) {
      stopLoop();
      recursivelyEndStateIntervals(snapshot.stateTree);
    }
  }
  function notifySubscribers() {
    setValues();
    setLog();
    setActiveStates();
    subscribers.forEach((subscriber) => subscriber(snapshot));
  }
  function handleEventHandlerChainOutcome(outcome, payload) {
    snapshot.data = outcome.data;
    for (const transition of outcome.pendingTransition) {
      runTransition(transition, payload, outcome.result);
    }
  }
  function runEventHandlerChain(state, eventHandler, payload, result) {
    const outcome = createEventChain({
      state,
      data: snapshot.data,
      result,
      payload,
      handler: eventHandler,
      onDelayedOutcome: (outcome2) => {
        handleEventHandlerChainOutcome(outcome2, payload);
        if (outcome2.shouldNotify) {
          notifySubscribers();
        }
      },
      getFreshDataAfterWait: () => snapshot.data
    });
    handleEventHandlerChainOutcome(outcome, payload);
    return outcome;
  }
  function handleEventOnState(state, sent) {
    const record = { shouldHalt: false, shouldNotify: false };
    if (!state.active)
      return record;
    const activeChildren = Object.values(state.states).filter((state2) => state2.active);
    const eventHandler = state.on[sent.event];
    let outcome = void 0;
    if (typeof eventHandler !== "undefined") {
      outcome = runEventHandlerChain(state, eventHandler, sent.payload, void 0);
      if (outcome.shouldNotify) {
        record.shouldNotify = true;
      }
      if (outcome.shouldBreak) {
        record.shouldNotify = true;
        record.shouldHalt = true;
        return record;
      }
    }
    if (typeof state.onEvent !== "undefined") {
      outcome = runEventHandlerChain(state, state.onEvent, sent.payload, outcome == null ? void 0 : outcome.result);
      if (outcome.shouldNotify) {
        record.shouldNotify = true;
      }
      if (outcome.shouldBreak) {
        record.shouldNotify = true;
        record.shouldHalt = true;
        return record;
      }
    }
    for (const childState of activeChildren) {
      const childRecord = handleEventOnState(childState, sent);
      if (childRecord.shouldNotify) {
        record.shouldNotify = true;
      }
      if (childRecord.shouldHalt) {
        record.shouldNotify = true;
        record.shouldHalt = true;
        return record;
      }
    }
    return record;
  }
  function runTransition(path, payload, result) {
    const isPreviousTransition = path.endsWith(".previous");
    const isRestoreTransition = path.endsWith(".restore");
    if (isPreviousTransition) {
      path = path.slice(0, path.length - 9);
    } else if (isRestoreTransition) {
      path = path.slice(0, path.length - 8);
    }
    const targets = findTransitionTargets(snapshot.stateTree, path);
    const target = last(targets);
    if (typeof target === "undefined") {
      throw Error(`Error in transition (${path})! Could not find that state.`);
    }
    const pathDown = target.path.split(".").slice(1);
    const beforeActive = getActiveStates(snapshot.stateTree);
    deactivateState(snapshot.stateTree);
    setIntitialStates(snapshot.stateTree, payload, snapshot.data);
    activateState(snapshot.stateTree, pathDown, beforeActive, isPreviousTransition || isRestoreTransition, isRestoreTransition);
    const afterActive = getActiveStates(snapshot.stateTree);
    const deactivatedStates = beforeActive.filter((state) => !afterActive.includes(state));
    const newlyActivatedStates = afterActive.filter((state) => !beforeActive.includes(state));
    deactivatedStates.forEach((state) => {
      endStateIntervals(state);
      removeOnFrameEventHandler(state);
    });
    for (const state of deactivatedStates) {
      const { onExit } = state;
      state.activeId++;
      if (typeof onExit !== "undefined") {
        const onExitOutcome = runEventHandlerChain(state, onExit, payload, result);
        if (onExitOutcome.shouldBreak)
          return;
      }
    }
    for (const state of newlyActivatedStates) {
      const { async, repeat, onEnter } = state;
      if (typeof repeat !== "undefined") {
        const { onRepeat, delay } = repeat;
        let now = performance.now();
        let elapsed = 0;
        let realInterval = 0;
        if (delay === void 0) {
          addOnFrameState(state, { payload, start: now });
        } else {
          let lastTime2 = performance.now();
          const s3 = delay(snapshot.data, payload, result);
          state.times.interval = setInterval(() => {
            now = performance.now();
            realInterval = now - lastTime2;
            elapsed += realInterval;
            lastTime2 = now;
            const outcome = runEventHandlerChain(state, onRepeat, payload, {
              interval: realInterval,
              elapsed
            });
            if (outcome.shouldNotify)
              notifySubscribers();
          }, Math.max(1 / 60, s3 * 1e3));
        }
      }
      if (typeof onEnter !== "undefined") {
        const onEnterOutcome = runEventHandlerChain(state, onEnter, payload, result);
        if (onEnterOutcome.shouldBreak)
          return;
      }
      if (typeof async !== "undefined") {
        let finished = false;
        state.times.cancelAsync = () => finished = true;
        async.await(snapshot.data, payload, result).then((resolved) => {
          if (finished)
            return;
          const localUpdate = runEventHandlerChain(state, async.onResolve, payload, resolved);
          if (localUpdate.shouldNotify)
            notifySubscribers();
        }, (rejected) => {
          if (typeof async.onReject !== "undefined") {
            if (finished)
              return;
            const localUpdate = runEventHandlerChain(state, async.onReject, payload, rejected);
            if (localUpdate.shouldNotify)
              notifySubscribers();
          }
        });
      }
    }
  }
  function enableLog(enabled) {
    logEnabled = enabled;
  }
  function logEvent(event) {
    if (logEnabled) {
      _log.unshift(event);
    } else {
      _log = [event];
    }
  }
  function setLog() {
    snapshot.index++;
    snapshot.log = [..._log];
  }
  function setValues() {
    snapshot.values = getValues(snapshot.data, design.values);
  }
  function setActiveStates() {
    _activeStates = getActiveStates(snapshot.stateTree);
    snapshot.active = getPaths(_activeStates);
  }
  let lastTime = -1;
  let interval = -1;
  let frameInterval = void 0;
  const onFrameStates = new Map([]);
  function loop(ms) {
    var _a22;
    let shouldNotify = false;
    if (lastTime < 0)
      lastTime = ms;
    interval = ms - lastTime;
    lastTime = ms;
    const states = Array.from(onFrameStates.entries());
    for (const [state, info] of states) {
      if (((_a22 = state.repeat) == null ? void 0 : _a22.onRepeat) !== void 0) {
        const outcome = runEventHandlerChain(state, state.repeat.onRepeat, info.payload, {
          interval,
          elapsed: ms - info.start
        });
        if (outcome.shouldNotify) {
          shouldNotify = true;
        }
        if (outcome.shouldBreak) {
          break;
        }
      }
    }
    if (shouldNotify)
      notifySubscribers();
    if (frameInterval === void 0)
      return;
    frameInterval = requestAnimationFrame(loop);
  }
  function stopLoop() {
    if (frameInterval !== void 0) {
      cancelAnimationFrame(frameInterval);
      frameInterval = void 0;
      lastTime = -1;
      interval = -1;
    }
  }
  function startLoop() {
    frameInterval = requestAnimationFrame(loop);
  }
  function addOnFrameState(state, info) {
    onFrameStates.set(state, info);
    if (frameInterval === void 0) {
      startLoop();
    }
  }
  function removeOnFrameEventHandler(state) {
    if (onFrameStates.has(state)) {
      onFrameStates.delete(state);
      if (onFrameStates.size === 0) {
        stopLoop();
      }
    }
  }
  function onUpdate(callbackFn) {
    subscribe(callbackFn);
    return () => unsubscribe(callbackFn);
  }
  function getUpdate(callbackFn) {
    setValues();
    setActiveStates();
    setLog();
    callbackFn(snapshot);
  }
  function send(eventName, payload, onSettle) {
    try {
      const { shouldNotify } = handleEventOnState(snapshot.stateTree, {
        event: eventName,
        payload
      });
      logEvent(eventName);
      if (shouldNotify)
        notifySubscribers();
      onSettle == null ? void 0 : onSettle(snapshot);
      onSend == null ? void 0 : onSend(eventName, payload, shouldNotify);
    } catch (e2) {
      handleError(e2, eventName);
    }
    return snapshot;
  }
  const sendCache = new Map([]);
  function thenSend(eventName) {
    let cached = sendCache.get(eventName);
    if (!cached) {
      cached = () => send(eventName);
      sendCache.set(eventName, cached);
    }
    return cached;
  }
  function isIn(...paths) {
    try {
      return castArray(paths).map((path) => path.startsWith(".") ? path : "." + path).every((path) => _activeStates.find((state) => state.path.endsWith(path)) !== void 0);
    } catch (e2) {
      handleError(customError(`Error testing isIn(${paths.join()})!`, e2));
      return false;
    }
  }
  function isInAny(...paths) {
    try {
      return castArray(paths).map((path) => path.startsWith(".") ? path : "." + path).some((path) => _activeStates.find((state) => state.path.endsWith(path)) !== void 0);
    } catch (e2) {
      handleError(customError(`Error testing isInAny(${paths.join()})!`, e2));
      return false;
    }
  }
  function can(eventName, payload, result) {
    return typeof _activeStates.find((state) => {
      const eventHandler = state.on[eventName];
      if (typeof eventHandler === "undefined")
        return;
      try {
        return eventHandler.some((handler) => {
          result = void 0;
          for (const resu of handler.get) {
            result = resu(snapshot.data, payload, result);
          }
          return testEventHandlerConditions(handler, snapshot.data, payload, result);
        });
      } catch (e2) {
        handleError(customError(`Error testing can(${eventName})!`, e2));
        return false;
      }
    }) !== "undefined";
  }
  function whenIn(paths, reducer = "value", initialValue) {
    const entries = [];
    Object.entries(paths).forEach(([key, value]) => {
      const v3 = typeof value === "function" ? value() : value;
      if (key === "root") {
        entries.push([key, v3]);
      } else {
        if (_activeStates.find((v22) => {
          const safeKey = key.startsWith(".") ? key : "." + key;
          return v22.path.endsWith(safeKey);
        })) {
          entries.push([key, v3]);
        }
      }
    });
    if (entries.length === 0) {
      if (typeof paths.default !== "undefined") {
        entries.push(["default", paths.default]);
      }
    }
    let returnValue;
    let rdcr;
    if (reducer === "array") {
      returnValue = [];
      rdcr = (a4, [_16, v3]) => [...a4, v3];
    } else if (reducer === "value") {
      returnValue = void 0;
      rdcr = (_16, [__, v3]) => v3;
    } else {
      returnValue = initialValue;
      rdcr = reducer;
    }
    entries.forEach((entry, i3) => returnValue = rdcr(returnValue, entry, i3, entries));
    return returnValue;
  }
  function getDesign() {
    return design;
  }
  function clone() {
    return createState(design);
  }
  function forceTransition(target, payload) {
    logEvent(`Forced transition to: ${target}`);
    runTransition(target, payload, void 0);
    notifySubscribers();
    return snapshot;
  }
  function forceData(data) {
    snapshot.data = data;
    logEvent("Forced data.");
    notifySubscribers();
    return snapshot;
  }
  function reset() {
    stopLoop();
    recursivelyEndStateIntervals(snapshot.stateTree);
    _log = [];
    Object.assign(snapshot, {
      data: fn(design.data, (d3) => d3),
      stateTree: getStateTreeFromDesign(design, id),
      log: []
    });
    deactivateState(snapshot.stateTree);
    runTransition("root", void 0, void 0);
    notifySubscribers();
    return snapshot;
  }
  const id = "#" + (typeof design.id !== "undefined" ? `state_${nanoid()}` : design.id);
  const initialStateTree = getStateTreeFromDesign(design, id);
  let _log = [];
  let _activeStates = getActiveStates(initialStateTree);
  const snapshot = {
    id,
    data: fn(design.data, (d3) => d3),
    active: getPaths(_activeStates),
    values: getValues(design.data, design.values),
    stateTree: initialStateTree,
    log: _log,
    index: 0,
    send,
    thenSend,
    isIn,
    isInAny,
    can,
    whenIn,
    getDesign,
    onUpdate,
    getUpdate,
    enableLog,
    forceData,
    forceTransition,
    clone,
    reset
  };
  deactivateState(snapshot.stateTree);
  runTransition("root", void 0, void 0);
  setValues();
  setActiveStates();
  setLog();
  return snapshot;
}
function getPaths(states) {
  return states.map((state) => state.path);
}
function getValues(data, values) {
  return Object.entries(values || {}).reduce((acc, [key, fn2]) => {
    acc[key] = fn2(data);
    return acc;
  }, {});
}
var types_exports = {};
__export2(types_exports, {
  VerboseType: () => VerboseType
});
var VerboseType;
(function(VerboseType2) {
  VerboseType2["Condition"] = "condition";
  VerboseType2["Action"] = "action";
  VerboseType2["SecretAction"] = "secretAction";
  VerboseType2["Event"] = "event";
  VerboseType2["State"] = "state";
  VerboseType2["AsyncEvent"] = "asyncEvent";
  VerboseType2["TransitionEvent"] = "transitionEvent";
  VerboseType2["RepeatEvent"] = "repeatEvent";
  VerboseType2["Transition"] = "transition";
  VerboseType2["Notification"] = "notification";
  VerboseType2["EventHandler"] = "eventHandler";
  VerboseType2["Queue"] = "queue";
})(VerboseType || (VerboseType = {}));

// ../../node_modules/@state-designer/react/dist/esm/index.js
var import_react55 = __toModule(require_react());
var import_react56 = __toModule(require_react());
var import_react57 = __toModule(require_react());
var import_react58 = __toModule(require_react());
var import_react59 = __toModule(require_react());
var __defProp4 = Object.defineProperty;
var __defProps4 = Object.defineProperties;
var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a4, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp4.call(b3, prop))
      __defNormalProp4(a4, prop, b3[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b3)) {
      if (__propIsEnum4.call(b3, prop))
        __defNormalProp4(a4, prop, b3[prop]);
    }
  return a4;
};
var __spreadProps4 = (a4, b3) => __defProps4(a4, __getOwnPropDescs4(b3));
var emptyArray = [];
function useStateDesigner(design, dependencies = emptyArray) {
  const rFirstMount = (0, import_react56.useRef)(true);
  const [current, setCurrent] = (0, import_react56.useState)(() => "active" in design ? design : createState(design));
  (0, import_react56.useEffect)(() => {
    if (!("active" in design))
      return;
    setCurrent(design);
    return design.onUpdate((update) => setCurrent((current2) => __spreadProps4(__spreadValues4({}, current2), {
      index: update.index,
      data: update.data,
      active: update.active,
      stateTree: update.stateTree,
      values: update.values,
      log: update.log
    })));
  }, [design]);
  (0, import_react56.useEffect)(() => {
    if ("active" in design)
      return;
    function handleUpdate(update) {
      setCurrent((current2) => __spreadProps4(__spreadValues4({}, current2), {
        index: update.index,
        data: update.data,
        active: update.active,
        stateTree: update.stateTree,
        values: update.values,
        log: update.log
      }));
    }
    if (!rFirstMount.current) {
      const next = createState(design);
      setCurrent(next);
      return next.onUpdate(handleUpdate);
    }
    rFirstMount.current = false;
    return current.onUpdate(handleUpdate);
  }, [...dependencies]);
  return current;
}

// src/shapes/CustomShapeUtil.ts
var CustomShapeUtil = class extends TLShapeUtil {
  constructor() {
    super(...arguments);
    this.canBind = false;
    this.hideBounds = false;
  }
};

// src/shapes/arrow/ArrowComponent.tsx
var React3 = __toModule(require_react());
var ArrowComponent = TLShapeUtil.Component(({ shape, events, isGhost, meta }, ref) => {
  const color = meta.isDarkMode ? "white" : "black";
  const { start, end } = shape.handles;
  const u3 = src_default.uni(src_default.sub(end.point, start.point));
  const dist = src_default.dist(end.point, start.point);
  const length = Math.min(18, dist / 2);
  const ahLeft = src_default.rotWith(src_default.sub(end.point, src_default.mul(u3, length)), end.point, -Math.PI / 6);
  const ahRight = src_default.rotWith(src_default.sub(end.point, src_default.mul(u3, length)), end.point, Math.PI / 6);
  return /* @__PURE__ */ React3.createElement(SVGContainer, __spreadValues({
    ref
  }, events), /* @__PURE__ */ React3.createElement("path", {
    d: `M ${start.point} L ${end.point} M ${ahLeft} L ${end.point} ${ahRight}`,
    strokeWidth: 8,
    stroke: "none",
    fill: "none",
    pointerEvents: "all"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: `M ${start.point} L ${end.point} M ${ahLeft} L ${end.point} ${ahRight}`,
    stroke: color,
    strokeWidth: 3,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    fill: "none",
    pointerEvents: "none",
    opacity: isGhost ? 0.3 : 1
  }));
});

// src/shapes/arrow/ArrowIndicator.tsx
var React4 = __toModule(require_react());
var ArrowIndicator = TLShapeUtil.Indicator(({ shape }) => {
  const { start, end } = shape.handles;
  const u3 = src_default.uni(src_default.sub(end.point, start.point));
  const dist = src_default.dist(end.point, start.point);
  const length = Math.min(18, dist / 2);
  const ahLeft = src_default.rotWith(src_default.sub(end.point, src_default.mul(u3, length)), end.point, -Math.PI / 6);
  const ahRight = src_default.rotWith(src_default.sub(end.point, src_default.mul(u3, length)), end.point, Math.PI / 6);
  return /* @__PURE__ */ React4.createElement("path", {
    d: `M ${start.point} L ${end.point} M ${ahLeft} L ${end.point} ${ahRight}`,
    stroke: "tl-selectedStroke",
    strokeWidth: 2,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    fill: "none"
  });
});

// src/shapes/arrow/ArrowUtil.ts
var ArrowUtil = class extends CustomShapeUtil {
  constructor() {
    super(...arguments);
    this.Component = ArrowComponent;
    this.Indicator = ArrowIndicator;
    this.hideResizeHandles = true;
    this.hideBounds = true;
    this.getBounds = (shape) => {
      const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
        const { start, end } = shape.handles;
        return Utils.getBoundsFromPoints([start.point, end.point]);
      });
      return Utils.translateBounds(bounds, shape.point);
    };
    this.canBind = false;
    this.getShape = (props) => {
      return __spreadValues({
        id: nanoid(),
        type: "arrow",
        name: "arrow",
        parentId: "page1",
        point: [0, 0],
        handles: {
          start: {
            id: "start",
            index: 1,
            point: [0, 0]
          },
          end: {
            id: "end",
            index: 2,
            point: [100, 100]
          }
        },
        childIndex: 1
      }, props);
    };
    this.shouldRender = (prev, next) => {
      return true;
    };
    this.getCenter = (shape) => {
      return Utils.getBoundsCenter(this.getBounds(shape));
    };
    this.hitTestPoint = (shape, point) => {
      const { start, end } = shape.handles;
      return src_default.distanceToLineSegment(src_default.add(shape.point, start.point), src_default.add(shape.point, end.point), point) < 4;
    };
    this.hitTestLineSegment = (shape, A3, B3) => {
      const { start, end } = shape.handles;
      return intersectLineSegmentLineSegment(src_default.add(shape.point, start.point), src_default.add(shape.point, end.point), A3, B3).didIntersect;
    };
    this.hitTestBounds = (shape, bounds) => {
      const { start, end } = shape.handles;
      return Utils.boundsContain(bounds, this.getBounds(shape)) || intersectBoundsLineSegment(Utils.translateBounds(bounds, src_default.neg(shape.point)), start.point, end.point).length > 0;
    };
    this.transform = (shape, bounds, initialShape, scale) => {
      const { start, end } = initialShape.handles;
      const initialBounds = this.getBounds(initialShape);
      const nStart = src_default.divV(start.point, [initialBounds.width, initialBounds.height]);
      const nEnd = src_default.divV(end.point, [initialBounds.width, initialBounds.height]);
      if (scale[0] < 0) {
        const t3 = nStart[0];
        nStart[0] = nEnd[0];
        nEnd[0] = t3;
      }
      if (scale[1] < 0) {
        const t3 = nStart[1];
        nStart[1] = nEnd[1];
        nEnd[1] = t3;
      }
      shape.point = [bounds.minX, bounds.minY];
      shape.handles.start.point = src_default.mulV([bounds.width, bounds.height], nStart);
      shape.handles.end.point = src_default.mulV([bounds.width, bounds.height], nEnd);
    };
  }
};

// src/shapes/box/BoxComponent.tsx
var React5 = __toModule(require_react());
var BoxComponent = TLShapeUtil.Component(({ shape, events, isGhost, meta }, ref) => {
  const color = meta.isDarkMode ? "white" : "black";
  return /* @__PURE__ */ React5.createElement(SVGContainer, __spreadValues({
    ref
  }, events), /* @__PURE__ */ React5.createElement("rect", {
    width: shape.size[0],
    height: shape.size[1],
    stroke: color,
    strokeWidth: 3,
    strokeLinejoin: "round",
    fill: "none",
    rx: 4,
    opacity: isGhost ? 0.3 : 1,
    pointerEvents: "all"
  }));
});

// src/shapes/box/BoxIndicator.tsx
var React6 = __toModule(require_react());
var BoxIndicator = TLShapeUtil.Indicator(({ shape }) => {
  return /* @__PURE__ */ React6.createElement("rect", {
    pointerEvents: "none",
    width: shape.size[0],
    height: shape.size[1],
    fill: "none",
    stroke: "tl-selectedStroke",
    strokeWidth: 1,
    rx: 4
  });
});

// src/shapes/box/BoxUtil.ts
var BoxUtil = class extends CustomShapeUtil {
  constructor() {
    super(...arguments);
    this.Component = BoxComponent;
    this.Indicator = BoxIndicator;
    this.hideResizeHandles = false;
    this.getBounds = (shape) => {
      const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
        const [width, height] = shape.size;
        return {
          minX: 0,
          maxX: width,
          minY: 0,
          maxY: height,
          width,
          height
        };
      });
      return Utils.translateBounds(bounds, shape.point);
    };
    this.canBind = true;
    this.getShape = (props) => {
      return __spreadValues({
        id: nanoid(),
        type: "box",
        name: "Box",
        parentId: "page1",
        point: [0, 0],
        size: [100, 100],
        childIndex: 1
      }, props);
    };
    this.shouldRender = (prev, next) => {
      return next.size !== prev.size;
    };
    this.getCenter = (shape) => {
      return Utils.getBoundsCenter(this.getBounds(shape));
    };
    this.hitTestPoint = (shape, point) => {
      return Utils.pointInBounds(point, this.getBounds(shape));
    };
    this.hitTestLineSegment = (shape, A3, B3) => {
      return intersectLineSegmentBounds(A3, B3, this.getBounds(shape)).length > 0;
    };
    this.transform = (shape, bounds, initialShape, scale) => {
      shape.point = [bounds.minX, bounds.minY];
      shape.size = [bounds.width, bounds.height];
    };
  }
};

// src/shapes/pencil/PencilComponent.tsx
var React7 = __toModule(require_react());

// ../../node_modules/perfect-freehand/dist/esm/index.js
function W2(e2, t3, s3, h3 = (b3) => b3) {
  return e2 * h3(0.5 - t3 * (0.5 - s3));
}
function re(e2) {
  return [-e2[0], -e2[1]];
}
function l2(e2, t3) {
  return [e2[0] + t3[0], e2[1] + t3[1]];
}
function a2(e2, t3) {
  return [e2[0] - t3[0], e2[1] - t3[1]];
}
function f2(e2, t3) {
  return [e2[0] * t3, e2[1] * t3];
}
function le(e2, t3) {
  return [e2[0] / t3, e2[1] / t3];
}
function L2(e2) {
  return [e2[1], -e2[0]];
}
function ne(e2, t3) {
  return e2[0] * t3[0] + e2[1] * t3[1];
}
function oe(e2, t3) {
  return e2[0] === t3[0] && e2[1] === t3[1];
}
function fe(e2) {
  return Math.hypot(e2[0], e2[1]);
}
function be(e2) {
  return e2[0] * e2[0] + e2[1] * e2[1];
}
function Y(e2, t3) {
  return be(a2(e2, t3));
}
function G2(e2) {
  return le(e2, fe(e2));
}
function ue(e2, t3) {
  return Math.hypot(e2[1] - t3[1], e2[0] - t3[0]);
}
function T(e2, t3, s3) {
  let h3 = Math.sin(s3), b3 = Math.cos(s3), v3 = e2[0] - t3[0], n3 = e2[1] - t3[1], g3 = v3 * b3 - n3 * h3, E3 = v3 * h3 + n3 * b3;
  return [g3 + t3[0], E3 + t3[1]];
}
function V3(e2, t3, s3) {
  return l2(e2, f2(a2(t3, e2), s3));
}
function Z2(e2, t3, s3) {
  return l2(e2, f2(t3, s3));
}
var { min: _15, PI: ge } = Math;
var se = 0.275;
var j2 = ge + 1e-4;
function ie(e2, t3 = {}) {
  let { size: s3 = 16, smoothing: h3 = 0.5, thinning: b3 = 0.5, simulatePressure: v3 = true, easing: n3 = (r3) => r3, start: g3 = {}, end: E3 = {}, last: z3 = false } = t3, { cap: d3 = true, taper: x3 = 0, easing: q3 = (r3) => r3 * (2 - r3) } = g3, { cap: m3 = true, taper: c3 = 0, easing: M3 = (r3) => --r3 * r3 * r3 + 1 } = E3;
  if (e2.length === 0 || s3 <= 0)
    return [];
  let H3 = e2[e2.length - 1].runningLength, $2 = Math.pow(s3 * h3, 2), D3 = [], R3 = [], N2 = e2.slice(0, 10).reduce((r3, i3) => {
    let o3 = i3.pressure;
    if (v3) {
      let u3 = _15(1, i3.distance / s3), J2 = _15(1, 1 - u3);
      o3 = _15(1, r3 + (J2 - r3) * (u3 * se));
    }
    return (r3 + o3) / 2;
  }, e2[0].pressure), p3 = W2(s3, b3, e2[e2.length - 1].pressure, n3), U3, B3 = e2[0].vector, I3 = e2[0].point, C3 = I3, y3 = I3, O3 = C3;
  for (let r3 = 0; r3 < e2.length; r3++) {
    let { pressure: i3 } = e2[r3], { point: o3, vector: u3, distance: J2, runningLength: K } = e2[r3];
    if (r3 < e2.length - 1 && H3 - K < 3)
      continue;
    if (b3) {
      if (v3) {
        let P3 = _15(1, J2 / s3), Q2 = _15(1, 1 - P3);
        i3 = _15(1, N2 + (Q2 - N2) * (P3 * se));
      }
      p3 = W2(s3, b3, i3, n3);
    } else
      p3 = s3 / 2;
    U3 === void 0 && (U3 = p3);
    let pe = K < x3 ? q3(K / x3) : 1, ae = H3 - K < c3 ? M3((H3 - K) / c3) : 1;
    if (p3 = Math.max(0.01, p3 * Math.min(pe, ae)), r3 === e2.length - 1) {
      let P3 = f2(L2(u3), p3);
      D3.push(a2(o3, P3)), R3.push(l2(o3, P3));
      continue;
    }
    let A3 = e2[r3 + 1].vector, ee = ne(u3, A3);
    if (ee < 0) {
      let P3 = f2(L2(B3), p3);
      for (let Q2 = 1 / 13, w3 = 0; w3 <= 1; w3 += Q2)
        y3 = T(a2(o3, P3), o3, j2 * w3), D3.push(y3), O3 = T(l2(o3, P3), o3, j2 * -w3), R3.push(O3);
      I3 = y3, C3 = O3;
      continue;
    }
    let te = f2(L2(V3(A3, u3, ee)), p3);
    y3 = a2(o3, te), (r3 <= 1 || Y(I3, y3) > $2) && (D3.push(y3), I3 = y3), O3 = l2(o3, te), (r3 <= 1 || Y(C3, O3) > $2) && (R3.push(O3), C3 = O3), N2 = i3, B3 = u3;
  }
  let S3 = e2[0].point.slice(0, 2), k3 = e2.length > 1 ? e2[e2.length - 1].point.slice(0, 2) : l2(e2[0].point, [1, 1]), X3 = [], F3 = [];
  if (e2.length === 1) {
    if (!(x3 || c3) || z3) {
      let r3 = Z2(S3, G2(L2(a2(S3, k3))), -(U3 || p3)), i3 = [];
      for (let o3 = 1 / 13, u3 = o3; u3 <= 1; u3 += o3)
        i3.push(T(r3, S3, j2 * 2 * u3));
      return i3;
    }
  } else {
    if (!(x3 || c3 && e2.length === 1))
      if (d3)
        for (let i3 = 1 / 13, o3 = i3; o3 <= 1; o3 += i3) {
          let u3 = T(R3[0], S3, j2 * o3);
          X3.push(u3);
        }
      else {
        let i3 = a2(D3[0], R3[0]), o3 = f2(i3, 0.5), u3 = f2(i3, 0.51);
        X3.push(a2(S3, o3), a2(S3, u3), l2(S3, u3), l2(S3, o3));
      }
    let r3 = L2(re(e2[e2.length - 1].vector));
    if (c3 || x3 && e2.length === 1)
      F3.push(k3);
    else if (m3) {
      let i3 = Z2(k3, r3, p3);
      for (let o3 = 1 / 29, u3 = o3; u3 < 1; u3 += o3)
        F3.push(T(i3, k3, j2 * 3 * u3));
    } else
      F3.push(l2(k3, f2(r3, p3)), l2(k3, f2(r3, p3 * 0.99)), a2(k3, f2(r3, p3 * 0.99)), a2(k3, f2(r3, p3)));
  }
  return D3.concat(F3, R3.reverse(), X3);
}
function ce(e2, t3 = {}) {
  var q3;
  let { streamline: s3 = 0.5, size: h3 = 16, last: b3 = false } = t3;
  if (e2.length === 0)
    return [];
  let v3 = 0.15 + (1 - s3) * 0.85, n3 = Array.isArray(e2[0]) ? e2 : e2.map(({ x: m3, y: c3, pressure: M3 = 0.5 }) => [m3, c3, M3]);
  if (n3.length === 2) {
    let m3 = n3[1];
    n3 = n3.slice(0, -1);
    for (let c3 = 1; c3 < 5; c3++)
      n3.push(V3(n3[0], m3, c3 / 4));
  }
  n3.length === 1 && (n3 = [...n3, [...l2(n3[0], [1, 1]), ...n3[0].slice(2)]]);
  let g3 = [{ point: [n3[0][0], n3[0][1]], pressure: n3[0][2] >= 0 ? n3[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], E3 = false, z3 = 0, d3 = g3[0], x3 = n3.length - 1;
  for (let m3 = 1; m3 < n3.length; m3++) {
    let c3 = b3 && m3 === x3 ? n3[m3].slice(0, 2) : V3(d3.point, n3[m3], v3);
    if (oe(d3.point, c3))
      continue;
    let M3 = ue(c3, d3.point);
    if (z3 += M3, m3 < x3 && !E3) {
      if (z3 < h3)
        continue;
      E3 = true;
    }
    d3 = { point: c3, pressure: n3[m3][2] >= 0 ? n3[m3][2] : 0.5, vector: G2(a2(d3.point, c3)), distance: M3, runningLength: z3 }, g3.push(d3);
  }
  return g3[0].vector = ((q3 = g3[1]) == null ? void 0 : q3.vector) || [0, 0], g3;
}
function me(e2, t3 = {}) {
  return ie(ce(e2, t3), t3);
}

// src/shapes/pencil/pencil-helpers.ts
function getComponentSvgPath(points) {
  const stroke = me(points, {
    size: 8
  });
  if (!stroke.length)
    return "";
  const d3 = stroke.reduce((acc, [x0, y0], i3, arr) => {
    const [x1, y1] = arr[(i3 + 1) % arr.length];
    acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
    return acc;
  }, ["M", ...stroke[0], "Q"]);
  d3.push("Z");
  return d3.join(" ");
}
function getIndicatorSvgPath(points) {
  const strokePoints = ce(points).map((strokePoint) => strokePoint.point);
  if (!strokePoints.length)
    return "";
  const d3 = strokePoints.reduce((acc, [x0, y0], i3, arr) => {
    if (!arr[i3 + 1])
      return acc;
    const [x1, y1] = arr[i3 + 1];
    acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
    return acc;
  }, ["M", ...strokePoints[0], "Q"]);
  return d3.join(" ");
}

// src/shapes/pencil/PencilComponent.tsx
var PencilComponent = TLShapeUtil.Component(({ shape, events, isGhost, meta }, ref) => {
  const color = meta.isDarkMode ? "white" : "black";
  const pathData = getComponentSvgPath(shape.points);
  return /* @__PURE__ */ React7.createElement(SVGContainer, __spreadValues({
    ref
  }, events), /* @__PURE__ */ React7.createElement("path", {
    d: pathData,
    stroke: "transparent",
    strokeWidth: 6,
    opacity: 0,
    pointerEvents: "all"
  }), /* @__PURE__ */ React7.createElement("path", {
    d: pathData,
    fill: color,
    opacity: isGhost ? 0.3 : 1
  }));
});

// src/shapes/pencil/PenclIndicator.tsx
var React8 = __toModule(require_react());
var PencilIndicator = TLShapeUtil.Indicator(({ shape }) => {
  return /* @__PURE__ */ React8.createElement("path", {
    d: getIndicatorSvgPath(shape.points),
    pointerEvents: "none",
    fill: "none",
    stroke: "tl-selectedStroke",
    strokeWidth: 1,
    rx: 4
  });
});

// src/shapes/pencil/PencilUtil.ts
var PencilUtil = class extends CustomShapeUtil {
  constructor() {
    super(...arguments);
    this.Component = PencilComponent;
    this.Indicator = PencilIndicator;
    this.hideResizeHandles = true;
    this.hideBounds = false;
    this.getBounds = (shape) => {
      const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
        return Utils.getBoundsFromPoints(shape.points);
      });
      return Utils.translateBounds(bounds, shape.point);
    };
    this.canBind = false;
    this.getShape = (props) => {
      return __spreadValues({
        id: nanoid(),
        type: "pencil",
        name: "Pencil",
        parentId: "page1",
        point: [0, 0],
        points: [[0, 0]],
        childIndex: 1
      }, props);
    };
    this.shouldRender = (prev, next) => {
      return prev.points !== next.points;
    };
    this.getCenter = (shape) => {
      return Utils.getBoundsCenter(this.getBounds(shape));
    };
    this.hitTestPoint = (shape, point) => {
      const ptA = src_default.sub(point, shape.point);
      return Utils.pointInPolyline(ptA, shape.points);
    };
    this.hitTestLineSegment = (shape, A3, B3) => {
      const ptA = src_default.sub(A3, shape.point);
      const ptB = src_default.sub(B3, shape.point);
      return intersectLineSegmentPolyline(ptA, ptB, shape.points).didIntersect;
    };
    this.hitTestBounds = (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      return Utils.boundsContain(bounds, shapeBounds) || intersectBoundsBounds(bounds, shapeBounds) && intersectBoundsPolyline(Utils.translateBounds(bounds, src_default.neg(shape.point)), shape.points).length > 0;
    };
    this.transform = (shape, bounds, initialShape, scale) => {
      shape.point = [bounds.minX, bounds.minY];
    };
  }
};

// src/shapes/index.ts
var shapeUtils = {
  box: new BoxUtil(),
  arrow: new ArrowUtil(),
  pencil: new PencilUtil()
};
var getShapeUtils2 = (shape) => {
  if (typeof shape === "string")
    return shapeUtils[shape];
  return shapeUtils[shape.type];
};

// src/state/constants.ts
var VERSION = 1;
var PERSIST_DATA = true;
var FIT_TO_SCREEN_PADDING = 100;
var BINDING_PADDING = 12;
var SNAP_DISTANCE = 5;
var INITIAL_PAGE = {
  id: "page1",
  shapes: {
    box1: {
      id: "box1",
      type: "box",
      parentId: "page1",
      name: "Box",
      childIndex: 1,
      point: [100, 100],
      size: [100, 100]
    },
    box2: {
      id: "box2",
      type: "box",
      parentId: "page1",
      name: "Box",
      childIndex: 2,
      point: [250, 200],
      size: [100, 100]
    },
    box3: {
      id: "box3",
      type: "box",
      parentId: "page1",
      name: "Box",
      childIndex: 3,
      point: [150, 400],
      size: [100, 100]
    },
    arrow1: {
      id: "arrow1",
      type: "arrow",
      parentId: "page1",
      name: "Arrow",
      childIndex: 3,
      point: [231, 312],
      handles: {
        start: {
          id: "start",
          index: 1,
          point: [38, 0]
        },
        end: {
          id: "end",
          index: 2,
          point: [0, 76]
        }
      }
    }
  },
  bindings: {
    binding1: {
      id: "binding1",
      fromId: "arrow1",
      toId: "box2",
      handleId: "start"
    },
    binding2: {
      id: "binding2",
      fromId: "arrow1",
      toId: "box3",
      handleId: "end"
    }
  }
};
var INITIAL_PAGE_STATE = {
  id: "page1",
  selectedIds: [],
  camera: {
    point: [0, 0],
    zoom: 1
  },
  brush: null,
  pointedId: null,
  hoveredId: null,
  editingId: null,
  bindingId: null
};
var INITIAL_DATA = {
  id: "myDocument",
  version: VERSION,
  page: INITIAL_PAGE,
  pageState: INITIAL_PAGE_STATE,
  overlays: {
    snapLines: []
  },
  meta: {
    isDarkMode: false
  }
};

// src/state/helpers.ts
function getPagePoint(point, pageState) {
  return src_default.sub(src_default.div(point, pageState.camera.zoom), pageState.camera.point);
}

// src/state/actions/index.ts
var actions_exports = {};
__export(actions_exports, {
  addToHistory: () => addToHistory,
  clearBrush: () => clearBrush,
  clearHoveredShape: () => clearHoveredShape,
  clearIsCloning: () => clearIsCloning,
  clearPointedBoundsHandle: () => clearPointedBoundsHandle,
  clearPointedHandle: () => clearPointedHandle,
  clearPointedShape: () => clearPointedShape,
  clearSnapInfo: () => clearSnapInfo,
  clearSnapLines: () => clearSnapLines,
  createArrowShape: () => createArrowShape,
  createBindings: () => createBindings,
  createBoxShape: () => createBoxShape,
  createPencilShape: () => createPencilShape,
  createShapes: () => createShapes,
  deleteBindings: () => deleteBindings,
  deleteSelectedShapes: () => deleteSelectedShapes,
  deleteShapes: () => deleteShapes,
  deselectAllShapes: () => deselectAllShapes,
  eraseGhostShapes: () => eraseGhostShapes,
  eraseShapes: () => eraseShapes,
  eraseShapesAtPoint: () => eraseShapesAtPoint,
  extendPencilShape: () => extendPencilShape,
  loadDocument: () => loadDocument,
  loadNewDocument: () => loadNewDocument,
  panCamera: () => panCamera,
  pinchCamera: () => pinchCamera,
  redo: () => redo,
  removePartialBindings: () => removePartialBindings,
  restoreSavedDocument: () => restoreSavedDocument,
  restoreSnapshot: () => restoreSnapshot,
  selectAllShapes: () => selectAllShapes,
  selectShape: () => selectShape,
  setHoveredShape: () => setHoveredShape,
  setInitialCommonBounds: () => setInitialCommonBounds,
  setInitialPoint: () => setInitialPoint,
  setPointedBoundsHandle: () => setPointedBoundsHandle,
  setPointedHandle: () => setPointedHandle,
  setSnapInfo: () => setSnapInfo,
  setSnapshot: () => setSnapshot,
  setViewport: () => setViewport,
  transformSelectedShapes: () => transformSelectedShapes,
  translateHandle: () => translateHandle,
  translateSelectedShapes: () => translateSelectedShapes,
  undo: () => undo,
  updateBindings: () => updateBindings,
  updateBoundShapes: () => updateBoundShapes,
  updateBrush: () => updateBrush,
  updatePointer: () => updatePointer,
  updateShapes: () => updateShapes,
  zoomIn: () => zoomIn,
  zoomOut: () => zoomOut,
  zoomToFit: () => zoomToFit,
  zoomToSelection: () => zoomToSelection
});

// src/state/actions/bindings/getBoundHandlePoint.ts
function getBoundHandlePoint(data, fromShape, toShape, handleId) {
  var _a2, _b;
  const utils = getShapeUtils2(toShape);
  const toShapeBounds = utils.getBounds(toShape);
  const toShapeCenter = utils.getCenter(toShape);
  const oppositeHandleId = handleId === "start" ? "end" : "start";
  const oppositeHandle = fromShape.handles[oppositeHandleId];
  const oppositeBinding = Object.values(data.page.bindings).find((binding) => binding.fromId === fromShape.id && binding.handleId === oppositeHandleId);
  let oppositePoint;
  if (oppositeBinding) {
    const otherToShape = data.page.shapes[oppositeBinding.toId];
    if (!otherToShape)
      return;
    oppositePoint = getShapeUtils2(otherToShape).getCenter(otherToShape);
  } else {
    oppositePoint = src_default.add(fromShape.point, oppositeHandle.point);
  }
  const intersection = (_b = (_a2 = intersectLineSegmentBounds(oppositePoint, toShapeCenter, Utils.expandBounds(toShapeBounds, BINDING_PADDING))[0]) == null ? void 0 : _a2.points[0]) != null ? _b : toShapeCenter;
  return intersection;
}

// src/state/actions/bindings/updateBoundShapes.ts
var updateBoundShapes = (data) => {
  const bindings = Object.values(data.page.bindings);
  const bindingsToUpdate = [...bindings];
  const bindingsToDelete = new Set();
  while (bindingsToUpdate.length > 0) {
    const binding = bindingsToUpdate.pop();
    if (!binding)
      break;
    const toShape = data.page.shapes[binding.toId];
    const fromShape = data.page.shapes[binding.fromId];
    if (!(toShape && fromShape)) {
      bindingsToDelete.add(binding);
      break;
    }
    const boundHandle = fromShape.handles[binding.handleId];
    const intersection = getBoundHandlePoint(data, fromShape, toShape, boundHandle.id);
    if (intersection) {
      if (!src_default.isEqual(boundHandle.point, intersection)) {
        boundHandle.point = src_default.sub(intersection, fromShape.point);
        const handles = Object.values(fromShape.handles);
        const offset = Utils.getCommonTopLeft(handles.map((handle) => handle.point));
        fromShape.point = src_default.add(fromShape.point, offset);
        handles.forEach((handle) => handle.point = src_default.sub(handle.point, offset));
      }
    }
  }
  bindingsToDelete.forEach((binding) => delete data.page.bindings[binding.id]);
};

// src/state/actions/bindings/createBindings.ts
var createBindings = (data, payload) => {
  payload.bindings.forEach((partial) => {
    const binding = __spreadValues({
      id: nanoid()
    }, partial);
    data.page.bindings[binding.id] = binding;
  });
};

// src/state/actions/bindings/removePartialBindings.ts
var removePartialBindings = (data) => {
  const { selectedIds } = data.pageState;
  const bindings = Object.values(data.page.bindings);
  bindings.filter((binding) => selectedIds.includes(binding.fromId)).forEach((binding) => {
    if (!selectedIds.includes(binding.toId)) {
      delete data.page.bindings[binding.id];
    }
  });
};

// src/state/actions/bindings/updateBindings.ts
var updateBindings = (data, payload) => {
  try {
    payload.bindings.forEach((partial, i3) => {
      Object.assign(data.page.bindings[partial.id], partial);
    });
  } catch (e2) {
    e2.message = "Could not update shapes: " + e2.message;
    console.error(e2);
  }
};

// src/state/actions/bindings/deleteBindings.ts
var deleteBindings = (data, payload) => {
  try {
    payload.ids.forEach((id, i3) => {
      delete data.page.bindings[id];
    });
  } catch (e2) {
    e2.message = "Could not delete bindings: " + e2.message;
    console.error(e2);
  }
};

// src/state/actions/camera/panCamera.ts
var panCamera = (data, payload) => {
  const { point, zoom } = data.pageState.camera;
  data.pageState.camera.point = src_default.sub(point, src_default.div(payload.delta, zoom));
};

// src/state/actions/camera/pinchCamera.ts
var pinchCamera = (data, payload) => {
  const { camera } = data.pageState;
  const nextZoom = payload.delta[2];
  const nextPoint = src_default.sub(camera.point, src_default.div(payload.delta, camera.zoom));
  const p0 = src_default.sub(src_default.div(payload.point, camera.zoom), nextPoint);
  const p1 = src_default.sub(src_default.div(payload.point, nextZoom), nextPoint);
  data.pageState.camera.point = src_default.toFixed(src_default.add(nextPoint, src_default.sub(p1, p0)));
  data.pageState.camera.zoom = nextZoom;
};

// src/state/history.ts
function makeHistory(ID = "@tldraw/core_advanced_example") {
  let initialData = INITIAL_DATA;
  const saved = localStorage.getItem(ID);
  if (PERSIST_DATA && saved !== null) {
    let restoredData = JSON.parse(saved);
    if (restoredData.version < INITIAL_DATA.version) {
      restoredData = INITIAL_DATA;
    }
    initialData = restoredData;
  }
  let stack = [initialData];
  let pointer = 0;
  function persist(data) {
    delete data.pageState.hoveredId;
    data.overlays.snapLines = [];
    localStorage.setItem(ID, JSON.stringify(data));
  }
  function push3(data) {
    if (pointer < stack.length - 1) {
      stack = stack.slice(0, pointer + 1);
    }
    const serialized = D(data);
    stack.push(serialized);
    pointer = stack.length - 1;
    persist(serialized);
    return true;
  }
  function undo2() {
    if (pointer <= 0)
      return false;
    pointer--;
    const data = stack[pointer];
    persist(data);
    return data;
  }
  function redo2() {
    if (pointer >= stack.length - 1)
      return false;
    pointer++;
    const data = stack[pointer];
    persist(data);
    return data;
  }
  function reset(data = INITIAL_DATA) {
    stack = [data];
    pointer = 0;
    localStorage.setItem(ID, JSON.stringify(data));
    persist(data);
    return data;
  }
  function restore() {
    return initialData;
  }
  return { push: push3, undo: undo2, redo: redo2, reset, restore };
}

// src/state/mutables.ts
var mutables = {
  snapshot: INITIAL_DATA,
  initialPoint: [0, 0],
  currentPoint: [0, 0],
  previousPoint: [0, 0],
  history: makeHistory(),
  rendererBounds: Utils.getBoundsFromPoints([
    [0, 0],
    [100, 100]
  ]),
  viewport: Utils.getBoundsFromPoints([
    [0, 0],
    [100, 100]
  ]),
  rawPoints: [],
  isCloning: false,
  pointedShapeId: void 0,
  pointedHandleId: void 0,
  pointedBoundsHandleId: void 0,
  initialCommonBounds: void 0,
  snapInfo: void 0
};

// src/state/actions/camera/zoomIn.ts
var zoomIn = (data) => {
  const { camera } = data.pageState;
  const i3 = Math.round(data.pageState.camera.zoom * 100 / 25);
  const zoom = Math.min(5, (i3 + 1) * 0.25);
  const center = [mutables.rendererBounds.width / 2, mutables.rendererBounds.height / 2];
  const p0 = src_default.sub(src_default.div(center, camera.zoom), center);
  const p1 = src_default.sub(src_default.div(center, zoom), center);
  const point = src_default.toFixed(src_default.add(camera.point, src_default.sub(p1, p0)));
  data.pageState.camera.zoom = zoom;
  data.pageState.camera.point = point;
};

// src/state/actions/camera/zoomOut.ts
var zoomOut = (data) => {
  const { camera } = data.pageState;
  const i3 = Math.round(data.pageState.camera.zoom * 100 / 25);
  const zoom = Math.max(0.25, (i3 - 1) * 0.25);
  const center = [mutables.rendererBounds.width / 2, mutables.rendererBounds.height / 2];
  const p0 = src_default.sub(src_default.div(center, camera.zoom), center);
  const p1 = src_default.sub(src_default.div(center, zoom), center);
  const point = src_default.toFixed(src_default.add(camera.point, src_default.sub(p1, p0)));
  data.pageState.camera.zoom = zoom;
  data.pageState.camera.point = point;
};

// src/state/actions/camera/zoomToSelection.ts
var zoomToSelection = (data) => {
  const { camera, selectedIds } = data.pageState;
  const { viewport } = mutables;
  if (selectedIds.length === 0)
    return;
  const commonBounds = Utils.getCommonBounds(selectedIds.map((id) => data.page.shapes[id]).map((shape) => getShapeUtils2(shape).getBounds(shape)));
  let zoom = Math.min((viewport.width - FIT_TO_SCREEN_PADDING) / commonBounds.width, (viewport.height - FIT_TO_SCREEN_PADDING) / commonBounds.height);
  zoom = camera.zoom === zoom || camera.zoom < 1 ? Math.min(1, zoom) : zoom;
  const delta = [
    (viewport.width - commonBounds.width * zoom) / 2 / zoom,
    (viewport.height - commonBounds.height * zoom) / 2 / zoom
  ];
  camera.zoom = zoom;
  camera.point = src_default.add([-commonBounds.minX, -commonBounds.minY], delta);
};

// src/state/actions/camera/zoomToFit.ts
var zoomToFit = (data) => {
  const { camera } = data.pageState;
  const { viewport } = mutables;
  const shapes = Object.values(data.page.shapes);
  if (shapes.length === 0)
    return;
  const commonBounds = Utils.getCommonBounds(shapes.map((shape) => getShapeUtils2(shape).getBounds(shape)));
  let zoom = Math.min((viewport.width - FIT_TO_SCREEN_PADDING) / commonBounds.width, (viewport.height - FIT_TO_SCREEN_PADDING) / commonBounds.height);
  zoom = camera.zoom === zoom || camera.zoom < 1 ? Math.min(1, zoom) : zoom;
  const delta = [
    (viewport.width - commonBounds.width * zoom) / 2 / zoom,
    (viewport.height - commonBounds.height * zoom) / 2 / zoom
  ];
  camera.zoom = zoom;
  camera.point = src_default.add([-commonBounds.minX, -commonBounds.minY], delta);
};

// src/state/actions/data/loadDocument.ts
var loadDocument = (data, payload) => {
  Object.assign(data, payload.doc);
  const snapshot = D(data);
  mutables.history.reset(snapshot);
  Object.assign(mutables, {
    snapshot,
    initialPoint: [0, 0],
    isCloning: false,
    pointedShapeId: void 0,
    pointedHandleId: void 0,
    pointedBoundsHandleId: void 0,
    initialCommonBounds: void 0,
    snapInfo: void 0
  });
};

// src/state/actions/data/restoreSavedDocument.ts
var restoreSavedDocument = (data) => {
  const snapshot = mutables.history.restore();
  Object.assign(data, snapshot);
};

// src/state/actions/data/loadNewDocument.ts
var loadNewDocument = (data) => {
  const newData = __spreadProps(__spreadValues({}, data), {
    id: nanoid(),
    page: {
      id: "page1",
      shapes: {},
      bindings: {}
    },
    pageState: {
      id: "page1",
      camera: {
        point: [0, 0],
        zoom: 1
      },
      selectedIds: [],
      brush: null,
      pointedId: null,
      hoveredId: null,
      editingId: null,
      bindingId: null
    },
    overlays: {
      snapLines: []
    }
  });
  Object.assign(data, newData);
  const snapshot = D(data);
  mutables.history.reset(snapshot);
  Object.assign(mutables, {
    snapshot,
    initialPoint: [0, 0],
    isCloning: false,
    pointedShapeId: void 0,
    pointedHandleId: void 0,
    pointedBoundsHandleId: void 0,
    initialCommonBounds: void 0,
    snapInfo: void 0
  });
};

// src/state/actions/erase/eraseShapes.ts
var eraseShapes = (data, payload) => {
  const { previousPoint } = mutables;
  Object.values(data.page.shapes).filter((shape) => !shape.isGhost).forEach((shape) => {
    if (getShapeUtils2(shape).hitTestLineSegment(shape, previousPoint, mutables.currentPoint)) {
      shape.isGhost = true;
    }
  });
};

// src/state/actions/erase/eraseShapesAtPoint.ts
var eraseShapesAtPoint = (data) => {
  const { currentPoint } = mutables;
  Object.values(data.page.shapes).forEach((shape) => {
    if (getShapeUtils2(shape).hitTestPoint(shape, currentPoint)) {
      delete data.page.shapes[shape.id];
    }
  });
  const { shapes } = data.page;
  const { selectedIds, hoveredId } = data.pageState;
  data.pageState.selectedIds = selectedIds.filter((id) => {
    return shapes[id] !== void 0;
  });
  if (hoveredId && !shapes[hoveredId]) {
    data.pageState.hoveredId = void 0;
  }
};

// src/state/actions/erase/eraseGhostShapes.ts
var eraseGhostShapes = (data) => {
  const idsToDelete = Object.values(data.page.shapes).filter((shape) => shape.isGhost).map((shape) => shape.id);
  idsToDelete.forEach((id) => delete data.page.shapes[id]);
  data.pageState.selectedIds = data.pageState.selectedIds.filter((id) => !idsToDelete.includes(id));
  if (data.pageState.hoveredId && idsToDelete.includes(data.pageState.hoveredId)) {
    data.pageState.hoveredId = void 0;
  }
};

// src/state/actions/handles/setPointedHandle.ts
var setPointedHandle = (data, payload) => {
  mutables.pointedHandleId = payload.target;
};

// src/state/actions/handles/clearPointedHandle.ts
var clearPointedHandle = () => {
  mutables.pointedHandleId = void 0;
};

// src/state/actions/handles/translateHandle.ts
var translateHandle = (data, payload) => {
  const { initialPoint, snapshot, pointedHandleId } = mutables;
  if (!pointedHandleId)
    return;
  let delta = src_default.sub(mutables.currentPoint, initialPoint);
  data.pageState.selectedIds.forEach((id) => {
    var _a2;
    const initialShape = snapshot.page.shapes[id];
    const shape = data.page.shapes[id];
    if (payload.shiftKey) {
      const A3 = initialShape.handles[pointedHandleId === "start" ? "end" : "start"].point;
      const B3 = initialShape.handles[pointedHandleId].point;
      const C3 = src_default.add(B3, delta);
      const angle = src_default.angle(A3, C3);
      const adjusted = src_default.rotWith(C3, A3, Utils.snapAngleToSegments(angle, 24) - angle);
      delta = src_default.add(delta, src_default.sub(adjusted, C3));
    }
    const handlePoints = {
      start: [...initialShape.handles.start.point],
      end: [...initialShape.handles.end.point]
    };
    handlePoints[pointedHandleId] = src_default.add(handlePoints[pointedHandleId], delta);
    const oppositeHandleId = pointedHandleId === "start" ? "end" : "start";
    const oppositeHandle = shape.handles[oppositeHandleId];
    const handlePoint = src_default.add(handlePoints[pointedHandleId], initialShape.point);
    let minDistance = Infinity;
    let toShape;
    const oppositeBindingTargetId = (_a2 = Object.values(data.page.bindings).find((binding) => binding.fromId === shape.id && binding.handleId === oppositeHandleId)) == null ? void 0 : _a2.toId;
    if (!payload.metaKey) {
      Object.values(data.page.shapes).filter((shape2) => !data.pageState.selectedIds.includes(shape2.id) && shape2.id !== oppositeBindingTargetId).forEach((potentialTarget) => {
        const utils = getShapeUtils2(potentialTarget);
        if (!utils.canBind)
          return;
        const bounds = utils.getBounds(potentialTarget);
        if (Utils.pointInBounds(handlePoint, bounds)) {
          const dist = src_default.dist(handlePoint, utils.getCenter(potentialTarget));
          if (dist < minDistance) {
            minDistance = dist;
            toShape = potentialTarget;
          }
        }
      });
    }
    const oldBinding = Object.values(data.page.bindings).find((binding) => binding.fromId === shape.id && binding.handleId === pointedHandleId);
    if (toShape) {
      if (!oldBinding || oldBinding.toId !== toShape.id) {
        if (oldBinding) {
          delete data.page.bindings[oldBinding.id];
        }
        const binding = {
          id: nanoid(),
          fromId: shape.id,
          toId: toShape.id,
          handleId: pointedHandleId
        };
        data.page.bindings[binding.id] = binding;
      }
      return;
    }
    if (oldBinding) {
      delete data.page.bindings[oldBinding.id];
    }
    const offset = Utils.getCommonTopLeft([handlePoints.start, handlePoints.end]);
    shape.handles.start.point = src_default.sub(handlePoints.start, offset);
    shape.handles.end.point = src_default.sub(handlePoints.end, offset);
    shape.point = src_default.add(initialShape.point, offset);
  });
};

// src/state/actions/history/addToHistory.ts
var addToHistory = (data) => {
  mutables.history.push(data);
};

// src/state/actions/history/redo.ts
var redo = (data) => {
  const snapshot = mutables.history.redo();
  Object.assign(data, snapshot);
};

// src/state/actions/history/undo.ts
var undo = (data) => {
  const snapshot = mutables.history.undo();
  Object.assign(data, snapshot);
};

// src/state/actions/mutables/restoreSnapshot.ts
var restoreSnapshot = (data) => {
  Object.assign(data, mutables.snapshot);
};

// src/state/actions/selection/clearBrush.ts
var clearBrush = (data) => {
  data.pageState.brush = void 0;
};

// src/state/actions/selection/clearHoveredShape.ts
var clearHoveredShape = (data) => {
  data.pageState.hoveredId = void 0;
};

// src/state/actions/selection/clearPointedShape.ts
var clearPointedShape = () => {
  mutables.pointedShapeId = void 0;
};

// src/state/actions/selection/deselectAllShapes.ts
var deselectAllShapes = (data) => {
  data.pageState.selectedIds = [];
};

// src/state/actions/selection/selectShape.ts
var selectShape = (data, payload) => {
  const { selectedIds } = data.pageState;
  if (payload.shiftKey) {
    if (selectedIds.includes(payload.target) && mutables.pointedShapeId !== payload.target) {
      selectedIds.splice(selectedIds.indexOf(payload.target), 1);
    } else {
      mutables.pointedShapeId = payload.target;
      selectedIds.push(payload.target);
    }
  } else {
    data.pageState.selectedIds = [payload.target];
  }
};

// src/state/actions/selection/setHoveredShape.ts
var setHoveredShape = (data, payload) => {
  data.pageState.hoveredId = payload.target;
};

// src/state/actions/selection/updateBrush.ts
var updateBrush = (data, payload) => {
  const { initialPoint, snapshot } = mutables;
  const brushBounds = Utils.getBoundsFromPoints([mutables.currentPoint, initialPoint]);
  data.pageState.brush = brushBounds;
  const initialSelectedIds = snapshot.pageState.selectedIds;
  const hits = Object.values(snapshot.page.shapes).filter((shape) => payload.metaKey || payload.ctrlKey ? Utils.boundsContain(brushBounds, getShapeUtils2(shape).getBounds(shape)) : getShapeUtils2(shape).hitTestBounds(shape, brushBounds)).map((shape) => shape.id);
  data.pageState.selectedIds = payload.shiftKey ? Array.from(new Set([...initialSelectedIds, ...hits]).values()) : hits;
};

// src/state/actions/selection/selectAllShapes.ts
var selectAllShapes = (data) => {
  data.pageState.selectedIds = Object.keys(data.page.shapes);
};

// src/state/actions/shapes/createPencilShape.ts
var createPencilShape = (data, payload) => {
  const shape = shapeUtils.pencil.getShape({
    parentId: "page1",
    point: mutables.currentPoint,
    points: [[0, 0]],
    childIndex: Object.values(data.page.shapes).length
  });
  data.page.shapes[shape.id] = shape;
  data.pageState.selectedIds = [shape.id];
  mutables.rawPoints = [[0, 0]];
  mutables.pointedShapeId = shape.id;
};

// src/state/actions/shapes/createArrowShape.ts
var createArrowShape = (data, payload) => {
  const shape = shapeUtils.arrow.getShape({
    parentId: "page1",
    point: mutables.currentPoint,
    handles: {
      start: {
        id: "start",
        index: 1,
        point: [0, 0]
      },
      end: {
        id: "end",
        index: 2,
        point: [1, 1]
      }
    },
    childIndex: Object.values(data.page.shapes).length
  });
  const handle = shape.handles.start;
  const handlePoint = src_default.add(handle.point, shape.point);
  let minDistance = Infinity;
  let toShape;
  if (!payload.metaKey) {
    Object.values(data.page.shapes).filter((shape2) => !data.pageState.selectedIds.includes(shape2.id)).forEach((potentialTarget) => {
      const utils = getShapeUtils2(potentialTarget);
      if (!utils.canBind)
        return;
      const bounds = utils.getBounds(potentialTarget);
      if (Utils.pointInBounds(handlePoint, bounds)) {
        const dist = src_default.dist(handlePoint, utils.getCenter(potentialTarget));
        if (dist < minDistance) {
          minDistance = dist;
          toShape = potentialTarget;
        }
      }
    });
  }
  if (toShape) {
    const binding = {
      id: nanoid(),
      fromId: shape.id,
      toId: toShape.id,
      handleId: "start"
    };
    data.page.bindings[binding.id] = binding;
  }
  mutables.pointedHandleId = "end";
  data.page.shapes[shape.id] = shape;
  data.pageState.selectedIds = [shape.id];
};

// src/state/actions/shapes/createBoxShape.ts
var createBoxShape = (data, payload) => {
  const shape = shapeUtils.box.getShape({
    parentId: "page1",
    point: mutables.currentPoint,
    size: [1, 1],
    childIndex: Object.values(data.page.shapes).length
  });
  data.page.shapes[shape.id] = shape;
  data.pageState.selectedIds = [shape.id];
  mutables.pointedBoundsHandleId = TLBoundsCorner.BottomRight;
};

// src/state/actions/shapes/deleteSelectedShapes.ts
var deleteSelectedShapes = (data) => {
  const { page, pageState } = data;
  if (pageState.hoveredId && pageState.selectedIds.includes(pageState.hoveredId)) {
    pageState.hoveredId = void 0;
  }
  pageState.selectedIds.forEach((id) => delete page.shapes[id]);
  pageState.selectedIds = [];
};

// src/state/actions/shapes/createShapes.ts
var createShapes = (data, payload) => {
  try {
    payload.shapes.forEach((partial, i3) => {
      const shape = getShapeUtils2(partial.type).getShape(__spreadProps(__spreadValues({
        id: nanoid(),
        childIndex: Object.values(data.page.shapes).length
      }, partial), {
        parentId: "page1"
      }));
      data.page.shapes[shape.id] = shape;
    });
  } catch (e2) {
    e2.message = "Could not create shapes: " + e2.message;
    console.error(e2);
  }
};

// src/state/actions/shapes/updateShapes.ts
var updateShapes = (data, payload) => {
  try {
    payload.shapes.forEach((partial, i3) => {
      Object.assign(data.page.shapes[partial.id], partial);
    });
  } catch (e2) {
    e2.message = "Could not update shapes: " + e2.message;
    console.error(e2);
  }
};

// src/state/actions/shapes/deleteShapes.ts
var deleteShapes = (data, payload) => {
  try {
    data.pageState.selectedIds = data.pageState.selectedIds.filter((id) => !payload.ids.includes(id));
    payload.ids.forEach((id) => {
      delete data.page.shapes[id];
    });
  } catch (e2) {
    e2.message = "Could not delete shapes: " + e2.message;
    console.error(e2);
  }
};

// src/state/actions/shapes/extendPencilShape.ts
var extendPencilShape = (data, payload) => {
  const { initialPoint, previousPoint, rawPoints, pointedShapeId } = mutables;
  if (src_default.isEqual(previousPoint, mutables.currentPoint))
    return;
  const shape = data.page.shapes[pointedShapeId];
  if (!shape || shape.type !== "pencil") {
    throw Error("We should have a selected pencil shape.");
  }
  const relativePoint = src_default.sub(mutables.currentPoint, initialPoint);
  rawPoints.push(relativePoint);
  const offset = Utils.getCommonTopLeft(rawPoints);
  shape.point = src_default.add(initialPoint, offset);
  shape.points = rawPoints.map((point) => src_default.sub(point, offset));
};

// src/state/actions/snaps/clearSnapLines.ts
var clearSnapLines = (data) => {
  data.overlays.snapLines = [];
};

// src/state/actions/snaps/setSnapInfo.ts
var setSnapInfo = (data, payload) => {
  const all = [];
  const others = [];
  Object.values(data.page.shapes).forEach((shape) => {
    const bounds = Utils.getBoundsWithCenter(getShapeUtils2(shape).getRotatedBounds(shape));
    all.push(bounds);
    if (!(data.pageState.selectedIds.includes(shape.id) || shape.type === "arrow")) {
      others.push(bounds);
    }
  });
  const initialBounds = Utils.getBoundsWithCenter(Utils.getCommonBounds(data.pageState.selectedIds.map((id) => data.page.shapes[id]).map((shape) => getShapeUtils2(shape).getBounds(shape))));
  mutables.snapInfo = {
    initialBounds,
    all,
    others
  };
};

// src/state/actions/snaps/clearSnapInfo.ts
var clearSnapInfo = () => {
  mutables.snapInfo = void 0;
};

// src/state/actions/transform/resizeSelectedShapes.ts
var resizeSelectedShapes = (data, payload) => {
  const { pointedBoundsHandleId, initialPoint, snapshot } = mutables;
  const { selectedIds } = data.pageState;
  const initialCommonBounds = Utils.getCommonBounds(selectedIds.map((id) => snapshot.page.shapes[id]).map((shape) => getShapeUtils2(shape).getBounds(shape)));
  let rotation = 0;
  let delta = src_default.sub(mutables.currentPoint, initialPoint);
  if (selectedIds.length === 1) {
    rotation = snapshot.page.shapes[selectedIds[0]].rotation || 0;
  }
  let nextCommonBounds = Utils.getTransformedBoundingBox(initialCommonBounds, pointedBoundsHandleId, delta, rotation, payload.shiftKey);
  const { scaleX, scaleY } = nextCommonBounds;
  selectedIds.forEach((id) => {
    const initialShape = snapshot.page.shapes[id];
    const shape = data.page.shapes[id];
    const relativeBoundingBox = Utils.getRelativeTransformedBoundingBox(nextCommonBounds, initialCommonBounds, getShapeUtils2(initialShape).getBounds(initialShape), scaleX < 0, scaleY < 0);
    getShapeUtils2(shape).transform(shape, relativeBoundingBox, initialShape, [scaleX, scaleY]);
  });
};

// src/state/actions/transform/rotateSelectedShapes.ts
var rotateSelectedShapes = (data, payload) => {
  const { initialPoint, snapshot } = mutables;
  const { selectedIds } = data.pageState;
  const initialCommonCenter = Utils.getBoundsCenter(Utils.getCommonBounds(selectedIds.map((id) => snapshot.page.shapes[id]).map((shape) => getShapeUtils2(shape).getBounds(shape))));
  const initialAngle = src_default.angle(initialCommonCenter, initialPoint);
  const currentAngle = src_default.angle(initialCommonCenter, mutables.currentPoint);
  let angleDelta = currentAngle - initialAngle;
  if (payload.shiftKey) {
    angleDelta = Utils.snapAngleToSegments(angleDelta, 24);
  }
  selectedIds.forEach((id) => {
    const initialShape = snapshot.page.shapes[id];
    let initialAngle2 = 0;
    if (payload.shiftKey) {
      const { rotation = 0 } = initialShape;
      initialAngle2 = Utils.snapAngleToSegments(rotation, 24) - rotation;
    }
    const shape = data.page.shapes[id];
    const utils = getShapeUtils2(initialShape);
    const initialShapeCenter = utils.getCenter(initialShape);
    const relativeCenter = src_default.sub(initialShapeCenter, initialShape.point);
    const rotatedCenter = src_default.rotWith(initialShapeCenter, initialCommonCenter, angleDelta);
    if (shape.handles) {
      Object.values(shape.handles).forEach((handle) => {
        handle.point = src_default.rotWith(initialShape.handles[handle.id].point, relativeCenter, angleDelta);
      });
      const handlePoints = {
        start: [...shape.handles.start.point],
        end: [...shape.handles.end.point]
      };
      const offset = Utils.getCommonTopLeft([handlePoints.start, handlePoints.end]);
      shape.handles.start.point = src_default.sub(handlePoints.start, offset);
      shape.handles.end.point = src_default.sub(handlePoints.end, offset);
      shape.point = src_default.add(src_default.sub(rotatedCenter, relativeCenter), offset);
    } else {
      shape.point = src_default.sub(rotatedCenter, relativeCenter);
      shape.rotation = (initialShape.rotation || 0) + angleDelta + initialAngle2;
    }
  });
};

// src/state/actions/transform/transformSelectedShapes.ts
var transformSelectedShapes = (data, payload) => {
  const { pointedBoundsHandleId } = mutables;
  if (pointedBoundsHandleId === "rotate") {
    rotateSelectedShapes(data, payload);
  } else {
    resizeSelectedShapes(data, payload);
  }
};

// src/state/actions/transform/setPointedBoundsHandle.ts
var setPointedBoundsHandle = (data, payload) => {
  mutables.pointedBoundsHandleId = payload.target;
};

// src/state/actions/transform/setInitialCommonBounds.ts
var setInitialCommonBounds = (data) => {
  const { snapshot } = mutables;
  const { selectedIds } = data.pageState;
  const initialCommonBounds = Utils.getCommonBounds(selectedIds.map((id) => snapshot.page.shapes[id]).map((shape) => getShapeUtils2(shape).getBounds(shape)));
  mutables.initialCommonBounds = initialCommonBounds;
};

// src/state/actions/transform/clearPointedBoundsHandle.ts
var clearPointedBoundsHandle = (data, payload) => {
  mutables.pointedBoundsHandleId = void 0;
};

// src/state/actions/translate/clearIsCloning.ts
var clearIsCloning = () => {
  mutables.isCloning = false;
};

// src/state/actions/translate/translateSelectedShapes.ts
var translateSelectedShapes = (data, payload) => {
  const { initialPoint, currentPoint, previousPoint, viewport, snapshot, snapInfo } = mutables;
  const { selectedIds } = data.pageState;
  let delta = src_default.sub(currentPoint, initialPoint);
  if (payload.shiftKey) {
    if (Math.abs(delta[0]) > Math.abs(delta[1])) {
      delta[1] = 0;
    } else {
      delta[0] = 0;
    }
  }
  if (payload.altKey && !mutables.isCloning) {
    mutables.isCloning = true;
    data.page.bindings = snapshot.page.bindings;
    const bindings = Object.values(data.page.bindings);
    const cloneMap = {};
    const cloneIds = selectedIds.map((id) => {
      const initialShape = snapshot.page.shapes[id];
      data.page.shapes[initialShape.id] = initialShape;
      const clone = __spreadProps(__spreadValues({}, initialShape), { id: nanoid() });
      cloneMap[initialShape.id] = clone.id;
      data.page.shapes[clone.id] = clone;
      snapshot.page.shapes[clone.id] = __spreadValues({}, clone);
      return clone.id;
    });
    selectedIds.forEach((id) => {
      bindings.filter((binding) => binding.fromId === id || binding.toId === id).forEach((binding) => {
        if (cloneMap[binding.fromId] && cloneMap[binding.toId]) {
          const newBinding = {
            id: nanoid(),
            fromId: cloneMap[binding.fromId],
            toId: cloneMap[binding.toId],
            handleId: binding.handleId
          };
          data.page.bindings[newBinding.id] = newBinding;
        }
      });
    });
    data.pageState.selectedIds = cloneIds;
  } else if (!payload.altKey && mutables.isCloning) {
    mutables.isCloning = false;
    selectedIds.forEach((id) => delete data.page.shapes[id]);
    data.pageState.selectedIds = [...snapshot.pageState.selectedIds];
  }
  let snapLines = [];
  const speed = src_default.len2(src_default.sub(currentPoint, previousPoint)) / data.pageState.camera.zoom;
  if (snapInfo && !payload.metaKey && speed < 5) {
    const snappingBounds = Utils.getBoundsWithCenter(Utils.translateBounds(snapInfo.initialBounds, delta));
    const snappableBounds = (mutables.isCloning ? snapInfo.all : snapInfo.others).filter((bounds) => Utils.boundsContain(viewport, bounds) || Utils.boundsCollide(viewport, bounds));
    const snapResult = Utils.getSnapPoints(snappingBounds, snappableBounds, SNAP_DISTANCE / data.pageState.camera.zoom);
    if (snapResult) {
      snapLines = snapResult.snapLines;
      delta = src_default.sub(delta, snapResult.offset);
    }
  }
  data.overlays.snapLines = snapLines;
  data.pageState.selectedIds.forEach((id) => {
    const initialShape = snapshot.page.shapes[id];
    const shape = data.page.shapes[id];
    shape.point = src_default.add(initialShape.point, delta);
  });
};

// src/state/actions/mutables/setInitialPoint.ts
var setInitialPoint = (data, payload) => {
  mutables.initialPoint = getPagePoint(payload.origin, data.pageState);
  mutables.previousPoint = [...mutables.initialPoint];
};

// src/state/actions/mutables/setSnapshot.ts
var setSnapshot = (data) => {
  mutables.snapshot = D(data);
};

// src/state/actions/mutables/setViewport.ts
var setViewport = (data, payload) => {
  const { camera } = data.pageState;
  const { width, height } = payload.bounds;
  const [minX, minY] = src_default.sub(src_default.div([0, 0], camera.zoom), camera.point);
  const [maxX, maxY] = src_default.sub(src_default.div([width, height], camera.zoom), camera.point);
  mutables.rendererBounds = __spreadValues({}, payload.bounds);
  mutables.viewport = {
    minX,
    minY,
    maxX,
    maxY,
    height: maxX - minX,
    width: maxY - minY
  };
};

// src/state/actions/mutables/updatePointer.ts
var updatePointer = (data, payload) => {
  mutables.previousPoint = [...mutables.currentPoint];
  mutables.currentPoint = getPagePoint(payload.point, data.pageState);
};

// src/state/machine.ts
var machine = createState({
  data: INITIAL_DATA,
  onEnter: ["restoreSavedDocument", "updateBoundShapes"],
  on: {
    MOVED_POINTER: "updatePointer",
    SELECTED_TOOL: { to: (_16, payload) => payload.name },
    STARTED_POINTING: ["setInitialPoint", "setSnapshot"],
    PANNED: "panCamera",
    PINCHED: "pinchCamera",
    ZOOMED_TO_SELECTION: "zoomToSelection",
    ZOOMED_TO_FIT: "zoomToFit",
    ZOOMED_IN: "zoomIn",
    ZOOMED_OUT: "zoomOut",
    RESIZED: "setViewport",
    RESET: {
      do: "loadNewDocument",
      to: "select.idle"
    },
    LOADED_DOCUMENT: {
      do: "loadDocument",
      to: "select.idle"
    },
    CREATED_SHAPES: ["createShapes", "addToHistory"],
    UPDATED_SHAPES: ["updateShapes", "updateBoundShapes", "addToHistory"],
    DELETED_SHAPES: ["deleteShapes", "updateBoundShapes", "addToHistory"],
    CREATED_BINDINGS: ["createBindings", "addToHistory"],
    UPDATED_BINDINGS: ["updateBindings", "updateBoundShapes", "addToHistory"],
    DELETED_BINDINGS: ["deleteBindings", "updateBoundShapes", "addToHistory"]
  },
  initial: "select",
  states: {
    select: {
      initial: "idle",
      states: {
        idle: {
          onEnter: ["clearPointedShape"],
          on: {
            SELECTED_ALL: "selectAllShapes",
            DESELECTED_ALL: "deselectAllShapes",
            CANCELLED: ["deselectAllShapes", "updateBoundShapes"],
            DELETED: ["deleteSelectedShapes", "updateBoundShapes", "addToHistory"],
            UNDO: "undo",
            REDO: "redo",
            HOVERED_SHAPE: "setHoveredShape",
            UNHOVERED_SHAPE: "clearHoveredShape",
            POINTED_CANVAS: [
              {
                unless: "isPressingShiftKey",
                do: "deselectAllShapes"
              },
              {
                to: "pointing.canvas"
              }
            ],
            POINTED_SHAPE: [
              {
                unless: "shapeIsSelected",
                do: "selectShape"
              },
              { to: "pointing.shape" }
            ],
            POINTED_BOUNDS: {
              to: "pointing.bounds"
            },
            POINTED_HANDLE: {
              do: "setPointedHandle",
              to: "pointing.handle"
            },
            POINTED_BOUNDS_HANDLE: {
              do: "setPointedBoundsHandle",
              to: "pointing.boundsHandle"
            }
          }
        },
        pointing: {
          initial: "canvas",
          states: {
            canvas: {
              on: {
                STOPPED_POINTING: {
                  to: "select.idle"
                },
                MOVED_POINTER: {
                  to: "brushSelecting"
                }
              }
            },
            boundsHandle: {
              on: {
                MOVED_POINTER: {
                  if: "hasLeftDeadZone",
                  to: "transforming"
                },
                STOPPED_POINTING: {
                  to: "select.idle"
                }
              }
            },
            bounds: {
              on: {
                MOVED_POINTER: {
                  if: "hasLeftDeadZone",
                  to: "translating.shapes"
                },
                STOPPED_POINTING: {
                  do: "deselectAllShapes",
                  to: "select.idle"
                }
              }
            },
            shape: {
              on: {
                MOVED_POINTER: {
                  if: "hasLeftDeadZone",
                  to: "translating.shapes"
                },
                STOPPED_POINTING: [
                  {
                    if: "shapeIsSelected",
                    do: "selectShape"
                  },
                  {
                    to: "select.idle"
                  }
                ]
              }
            },
            handle: {
              on: {
                MOVED_POINTER: {
                  if: "hasLeftDeadZone",
                  to: "translating.handle"
                },
                STOPPED_POINTING: {
                  do: "clearPointedHandle",
                  to: "select.idle"
                }
              }
            }
          }
        },
        translating: {
          onEnter: "setSnapInfo",
          onExit: ["clearSnapInfo", "clearSnapLines", "clearIsCloning"],
          on: {
            CANCELLED: {
              do: "restoreSnapshot",
              to: "select.idle"
            },
            STOPPED_POINTING: {
              do: "addToHistory",
              to: "select.idle"
            }
          },
          initial: "shapes",
          states: {
            shapes: {
              onEnter: "removePartialBindings",
              on: {
                TOGGLED_MODIFIER: ["translateSelectedShapes", "updateBoundShapes"],
                MOVED_POINTER: ["translateSelectedShapes", "updateBoundShapes"],
                PANNED: ["translateSelectedShapes", "updateBoundShapes"]
              }
            },
            handle: {
              on: {
                TOGGLED_MODIFIER: ["translateHandle", "updateBoundShapes"],
                MOVED_POINTER: ["translateHandle", "updateBoundShapes"],
                PANNED: ["translateHandle", "updateBoundShapes"]
              }
            }
          }
        },
        transforming: {
          onEnter: ["setSnapInfo", "setInitialCommonBounds"],
          onExit: ["clearSnapInfo", "clearSnapLines", "clearPointedBoundsHandle"],
          on: {
            TOGGLED_MODIFIER: ["transformSelectedShapes", "updateBoundShapes"],
            MOVED_POINTER: ["transformSelectedShapes", "updateBoundShapes"],
            PANNED: ["transformSelectedShapes", "updateBoundShapes"],
            CANCELLED: {
              do: "restoreSnapshot",
              to: "select.idle"
            },
            STOPPED_POINTING: {
              do: "addToHistory",
              to: "select.idle"
            }
          }
        },
        brushSelecting: {
          onExit: "clearBrush",
          on: {
            TOGGLED_MODIFIER: "updateBrush",
            MOVED_POINTER: "updateBrush",
            PANNED: "updateBrush",
            CANCELLED: {
              to: "select.idle"
            },
            STOPPED_POINTING: {
              to: "select.idle"
            }
          }
        }
      }
    },
    eraser: {
      initial: "idle",
      states: {
        idle: {
          on: {
            UNDO: "undo",
            REDO: "redo",
            SELECTED_ALL: { do: "selectAllShapes", to: "select" },
            STARTED_POINTING: {
              do: "setInitialPoint",
              to: "eraser.pointing"
            },
            CANCELLED: {
              to: "select"
            }
          }
        },
        pointing: {
          on: {
            MOVED_POINTER: {
              if: "hasLeftDeadZone",
              to: "eraser.erasing"
            },
            STOPPED_POINTING: {
              do: ["eraseShapesAtPoint", "updateBoundShapes", "addToHistory"],
              to: "select"
            }
          }
        },
        erasing: {
          onEnter: ["setSnapshot"],
          on: {
            MOVED_POINTER: "eraseShapes",
            PANNED: "eraseShapes",
            CANCELLED: {
              do: "restoreSnapshot",
              to: "select"
            },
            STOPPED_POINTING: {
              do: ["eraseGhostShapes", "updateBoundShapes", "addToHistory"],
              to: "eraser.idle"
            }
          }
        }
      }
    },
    pencil: {
      initial: "idle",
      states: {
        idle: {
          on: {
            UNDO: "undo",
            REDO: "redo",
            SELECTED_ALL: { do: "selectAllShapes", to: "select" },
            STARTED_POINTING: {
              do: "setInitialPoint",
              to: "pencil.creating"
            },
            CANCELLED: {
              to: "select"
            }
          }
        },
        creating: {
          onEnter: ["createPencilShape", "setSnapshot"],
          on: {
            TOGGLED_MODIFIER: "extendPencilShape",
            MOVED_POINTER: "extendPencilShape",
            PANNED: "extendPencilShape",
            CANCELLED: {
              do: "deleteSelectedShapes"
            },
            STOPPED_POINTING: {
              do: ["deselectAllShapes", "addToHistory"],
              to: "pencil.idle"
            }
          }
        }
      }
    },
    box: {
      initial: "idle",
      states: {
        idle: {
          on: {
            STARTED_POINTING: {
              do: "setInitialPoint",
              to: "box.pointing"
            }
          }
        },
        pointing: {
          on: {
            MOVED_POINTER: {
              if: "hasLeftDeadZone",
              to: "box.creating"
            },
            STOPPED_POINTING: {
              to: "box.idle"
            }
          }
        },
        creating: {
          onEnter: ["createBoxShape", "setSnapshot"],
          on: {
            TOGGLED_MODIFIER: "transformSelectedShapes",
            MOVED_POINTER: "transformSelectedShapes",
            PANNED: "transformSelectedShapes",
            CANCELLED: {
              do: "deleteSelectedShapes",
              to: "select"
            },
            STOPPED_POINTING: {
              do: "addToHistory",
              to: "select"
            }
          }
        }
      }
    },
    arrow: {
      initial: "idle",
      states: {
        idle: {
          on: {
            STARTED_POINTING: {
              to: "arrow.pointing"
            },
            CANCELLED: {
              to: "select"
            }
          }
        },
        pointing: {
          onEnter: "setInitialPoint",
          on: {
            MOVED_POINTER: {
              if: "hasLeftDeadZone",
              to: "arrow.creating"
            },
            STOPPED_POINTING: {
              do: "deleteSelectedShapes",
              to: "arrow.idle"
            }
          }
        },
        creating: {
          onEnter: ["createArrowShape", "updateBoundShapes", "setSnapshot"],
          on: {
            TOGGLED_MODIFIER: ["translateHandle", "updateBoundShapes"],
            MOVED_POINTER: ["translateHandle", "updateBoundShapes"],
            PANNED: ["translateHandle", "updateBoundShapes"],
            CANCELLED: {
              do: "deleteSelectedShapes",
              to: "select"
            },
            STOPPED_POINTING: {
              do: "addToHistory",
              to: "select"
            }
          }
        }
      }
    }
  },
  conditions: {
    hasLeftDeadZone(data, payload) {
      return src_default.dist(mutables.currentPoint, mutables.initialPoint) > 2;
    },
    shapeIsSelected(data, payload) {
      return data.pageState.selectedIds.includes(payload.target);
    },
    shapeIsPointed(data, payload) {
      return mutables.pointedShapeId === payload.target;
    },
    isPressingShiftKey(data, payload) {
      return payload.shiftKey;
    }
  },
  actions: actions_exports
});

// src/components/Toolbar.tsx
var React14 = __toModule(require_react());

// ../../node_modules/react-feather/dist/icons/arrow-up-right.js
var import_react61 = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowUpRight = (0, import_react61.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties2(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react61.default.createElement("svg", _extends3({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react61.default.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /* @__PURE__ */ import_react61.default.createElement("polyline", {
    points: "7 7 17 7 17 17"
  }));
});
ArrowUpRight.propTypes = {
  color: import_prop_types.default.string,
  size: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
};
ArrowUpRight.displayName = "ArrowUpRight";
var arrow_up_right_default = ArrowUpRight;

// ../../node_modules/react-feather/dist/icons/edit-2.js
var import_react62 = __toModule(require_react());
var import_prop_types2 = __toModule(require_prop_types());
function _extends4() {
  _extends4 = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Edit2 = (0, import_react62.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties3(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react62.default.createElement("svg", _extends4({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react62.default.createElement("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  }));
});
Edit2.propTypes = {
  color: import_prop_types2.default.string,
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.number])
};
Edit2.displayName = "Edit2";
var edit_2_default = Edit2;

// ../../node_modules/react-feather/dist/icons/mouse-pointer.js
var import_react63 = __toModule(require_react());
var import_prop_types3 = __toModule(require_prop_types());
function _extends5() {
  _extends5 = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var MousePointer = (0, import_react63.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties4(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react63.default.createElement("svg", _extends5({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react63.default.createElement("path", {
    d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
  }), /* @__PURE__ */ import_react63.default.createElement("path", {
    d: "M13 13l6 6"
  }));
});
MousePointer.propTypes = {
  color: import_prop_types3.default.string,
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.number])
};
MousePointer.displayName = "MousePointer";
var mouse_pointer_default = MousePointer;

// ../../node_modules/react-feather/dist/icons/square.js
var import_react64 = __toModule(require_react());
var import_prop_types4 = __toModule(require_prop_types());
function _extends6() {
  _extends6 = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Square = (0, import_react64.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties5(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react64.default.createElement("svg", _extends6({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react64.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }));
});
Square.propTypes = {
  color: import_prop_types4.default.string,
  size: import_prop_types4.default.oneOfType([import_prop_types4.default.string, import_prop_types4.default.number])
};
Square.displayName = "Square";
var square_default = Square;

// ../../node_modules/react-feather/dist/icons/x.js
var import_react65 = __toModule(require_react());
var import_prop_types5 = __toModule(require_prop_types());
function _extends7() {
  _extends7 = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties6(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var X2 = (0, import_react65.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties6(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react65.default.createElement("svg", _extends7({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react65.default.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ import_react65.default.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X2.propTypes = {
  color: import_prop_types5.default.string,
  size: import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.number])
};
X2.displayName = "X";
var x_default = X2;

// ../../node_modules/@stitches/react/dist/index.mjs
var import_react66 = __toModule(require_react());
var e = "colors";
var t2 = "sizes";
var r2 = "space";
var n2 = { gap: r2, gridGap: r2, columnGap: r2, gridColumnGap: r2, rowGap: r2, gridRowGap: r2, inset: r2, insetBlock: r2, insetBlockEnd: r2, insetBlockStart: r2, insetInline: r2, insetInlineEnd: r2, insetInlineStart: r2, margin: r2, marginTop: r2, marginRight: r2, marginBottom: r2, marginLeft: r2, marginBlock: r2, marginBlockEnd: r2, marginBlockStart: r2, marginInline: r2, marginInlineEnd: r2, marginInlineStart: r2, padding: r2, paddingTop: r2, paddingRight: r2, paddingBottom: r2, paddingLeft: r2, paddingBlock: r2, paddingBlockEnd: r2, paddingBlockStart: r2, paddingInline: r2, paddingInlineEnd: r2, paddingInlineStart: r2, top: r2, right: r2, bottom: r2, left: r2, scrollMargin: r2, scrollMarginTop: r2, scrollMarginRight: r2, scrollMarginBottom: r2, scrollMarginLeft: r2, scrollMarginX: r2, scrollMarginY: r2, scrollMarginBlock: r2, scrollMarginBlockEnd: r2, scrollMarginBlockStart: r2, scrollMarginInline: r2, scrollMarginInlineEnd: r2, scrollMarginInlineStart: r2, scrollPadding: r2, scrollPaddingTop: r2, scrollPaddingRight: r2, scrollPaddingBottom: r2, scrollPaddingLeft: r2, scrollPaddingX: r2, scrollPaddingY: r2, scrollPaddingBlock: r2, scrollPaddingBlockEnd: r2, scrollPaddingBlockStart: r2, scrollPaddingInline: r2, scrollPaddingInlineEnd: r2, scrollPaddingInlineStart: r2, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t2, minBlockSize: t2, maxBlockSize: t2, inlineSize: t2, minInlineSize: t2, maxInlineSize: t2, width: t2, minWidth: t2, maxWidth: t2, height: t2, minHeight: t2, maxHeight: t2, flexBasis: t2, gridTemplateColumns: t2, gridTemplateRows: t2, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i2 = (e2, t3) => typeof t3 == "function" ? { "()": Function.prototype.toString.call(t3) } : t3;
var o2 = () => {
  const e2 = Object.create(null);
  return (t3, r3, ...n3) => {
    const o3 = ((e3) => JSON.stringify(e3, i2))(t3);
    return o3 in e2 ? e2[o3] : e2[o3] = r3(t3, ...n3);
  };
};
var l3 = Symbol.for("sxs.internal");
var s2 = (e2, t3) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t3));
var a3 = (e2) => {
  for (const t3 in e2)
    return true;
  return false;
};
var { hasOwnProperty: c2 } = Object.prototype;
var d2 = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, (e3) => "-" + e3.toLowerCase());
var g2 = /\s+(?![^()]*\))/;
var p2 = (e2) => (t3) => e2(...typeof t3 == "string" ? String(t3).split(g2) : [t3]);
var u2 = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"` }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p2((e2, t3) => ({ marginBlockStart: e2, marginBlockEnd: t3 || e2 })), marginInline: p2((e2, t3) => ({ marginInlineStart: e2, marginInlineEnd: t3 || e2 })), maxSize: p2((e2, t3) => ({ maxBlockSize: e2, maxInlineSize: t3 || e2 })), minSize: p2((e2, t3) => ({ minBlockSize: e2, minInlineSize: t3 || e2 })), paddingBlock: p2((e2, t3) => ({ paddingBlockStart: e2, paddingBlockEnd: t3 || e2 })), paddingInline: p2((e2, t3) => ({ paddingInlineStart: e2, paddingInlineEnd: t3 || e2 })) };
var h2 = /([\d.]+)([^]*)/;
var f3 = (e2, t3) => e2.length ? e2.reduce((e3, r3) => (e3.push(...t3.map((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r3) && /&.*&/.test(e4) ? `:is(${r3})` : r3) : r3 + " " + e4)), e3), []) : t3;
var m2 = (e2, t3) => e2 in b2 && typeof t3 == "string" ? t3.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t4, r3, n3, i3) => r3 + (n3 === "stretch" ? `-moz-available${i3};${d2(e2)}:${r3}-webkit-fill-available` : `-moz-fit-content${i3};${d2(e2)}:${r3}fit-content`) + i3) : String(t3);
var b2 = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S2 = (e2) => e2 ? e2 + "-" : "";
var k2 = (e2, t3, r3) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e3, n3, i3, o3, l4) => o3 == "$" == !!i3 ? e3 : (n3 || o3 == "--" ? "calc(" : "") + "var(--" + (o3 === "$" ? S2(t3) + (l4.includes("$") ? "" : S2(r3)) + l4.replace(/\$/g, "-") : l4) + ")" + (n3 || o3 == "--" ? "*" + (n3 || "") + (i3 || "1") + ")" : ""));
var y2 = /\s*,\s*(?![^()]*\))/;
var B2 = Object.prototype.toString;
var $ = (e2, t3, r3, n3, i3) => {
  let o3, l4, s3;
  const a4 = (e3, t4, r4) => {
    let c3, g3;
    const p3 = (e4) => {
      for (c3 in e4) {
        const R3 = c3.charCodeAt(0) === 64, z3 = R3 && Array.isArray(e4[c3]) ? e4[c3] : [e4[c3]];
        for (g3 of z3) {
          const e5 = /[A-Z]/.test($2 = c3) ? $2 : $2.replace(/-[^]/g, (e6) => e6[1].toUpperCase()), z4 = typeof g3 == "object" && g3 && g3.toString === B2 && (!n3.utils[e5] || !t4.length);
          if (e5 in n3.utils && !z4) {
            const t5 = n3.utils[e5];
            if (t5 !== l4) {
              l4 = t5, p3(t5(g3)), l4 = null;
              continue;
            }
          } else if (e5 in u2) {
            const t5 = u2[e5];
            if (t5 !== s3) {
              s3 = t5, p3(t5(g3)), s3 = null;
              continue;
            }
          }
          if (R3 && (b3 = c3.slice(1) in n3.media ? "@media " + n3.media[c3.slice(1)] : c3, c3 = b3.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e6, t5, r5, n4, i4, o4) => {
            const l5 = h2.test(t5), s4 = 0.0625 * (l5 ? -1 : 1), [a5, c4] = l5 ? [n4, t5] : [t5, n4];
            return "(" + (r5[0] === "=" ? "" : r5[0] === ">" === l5 ? "max-" : "min-") + a5 + ":" + (r5[0] !== "=" && r5.length === 1 ? c4.replace(h2, (e7, t6, n5) => Number(t6) + s4 * (r5 === ">" ? 1 : -1) + n5) : c4) + (i4 ? ") and (" + (i4[0] === ">" ? "min-" : "max-") + a5 + ":" + (i4.length === 1 ? o4.replace(h2, (e7, t6, r6) => Number(t6) + s4 * (i4 === ">" ? -1 : 1) + r6) : o4) : "") + ")";
          })), z4) {
            const e6 = R3 ? r4.concat(c3) : [...r4], n4 = R3 ? [...t4] : f3(t4, c3.split(y2));
            o3 !== void 0 && i3(x2(...o3)), o3 = void 0, a4(g3, n4, e6);
          } else
            o3 === void 0 && (o3 = [[], t4, r4]), c3 = R3 || c3.charCodeAt(0) !== 36 ? c3 : `--${S2(n3.prefix)}${c3.slice(1).replace(/\$/g, "-")}`, g3 = z4 ? g3 : typeof g3 == "number" ? g3 && e5 in I2 ? String(g3) + "px" : String(g3) : k2(m2(e5, g3 == null ? "" : g3), n3.prefix, n3.themeMap[e5]), o3[0].push(`${R3 ? `${c3} ` : `${d2(c3)}:`}${g3}`);
        }
      }
      var b3, $2;
    };
    p3(e3), o3 !== void 0 && i3(x2(...o3)), o3 = void 0;
  };
  a4(e2, t3, r3);
};
var x2 = (e2, t3, r3) => `${r3.map((e3) => `${e3}{`).join("")}${t3.length ? `${t3.join(",")}{` : ""}${e2.join(";")}${t3.length ? "}" : ""}${Array(r3.length ? r3.length + 1 : 0).join("}")}`;
var I2 = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R2 = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
var z2 = (e2) => ((e3) => {
  let t3, r3 = "";
  for (t3 = Math.abs(e3); t3 > 52; t3 = t3 / 52 | 0)
    r3 = R2(t3 % 52) + r3;
  return R2(t3 % 52) + r3;
})(((e3, t3) => {
  let r3 = t3.length;
  for (; r3; )
    e3 = 33 * e3 ^ t3.charCodeAt(--r3);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0);
var W3 = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j3 = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin))
    return false;
  try {
    return e2.cssRules, true;
  } catch (e3) {
    return false;
  }
};
var E2 = (e2) => {
  let t3;
  const r3 = () => {
    if (t3) {
      const { rules: e3, sheet: r4 } = t3;
      if (!r4.deleteRule) {
        for (; Object(Object(r4.cssRules)[0]).type === 3; )
          r4.cssRules.splice(0, 1);
        r4.cssRules = [];
      }
      for (const t4 in e3)
        delete e3[t4];
    }
    const n3 = Object(e2).styleSheets || [];
    for (const e3 of n3)
      if (j3(e3)) {
        for (let n4 = 0, i4 = e3.cssRules; i4[n4]; ++n4) {
          const o4 = Object(i4[n4]);
          if (o4.type !== 1)
            continue;
          const l4 = Object(i4[n4 + 1]);
          if (l4.type !== 4)
            continue;
          ++n4;
          const { cssText: s3 } = o4;
          if (!s3.startsWith("--sxs"))
            continue;
          const a4 = s3.slice(14, -3).trim().split(/\s+/), c3 = W3[a4[0]];
          c3 && (t3 || (t3 = { sheet: e3, reset: r3, rules: {} }), t3.rules[c3] = { group: l4, index: n4, cache: new Set(a4) });
        }
        if (t3)
          break;
      }
    if (!t3) {
      const n4 = (e3, t4) => ({ type: t4, cssRules: [], insertRule(e4, t5) {
        this.cssRules.splice(t5, 0, n4(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return e3 === "@media{}" ? `@media{${[].map.call(this.cssRules, (e4) => e4.cssText).join("")}}` : e3;
      } });
      t3 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : n4("", "text/css"), rules: {}, reset: r3, toString() {
        const { cssRules: e3 } = t3.sheet;
        return [].map.call(e3, (r4, n5) => {
          const { cssText: i4 } = r4;
          let o4 = "";
          if (i4.startsWith("--sxs"))
            return "";
          if (e3[n5 - 1] && (o4 = e3[n5 - 1].cssText).startsWith("--sxs")) {
            if (!r4.cssRules.length)
              return "";
            for (const e4 in t3.rules)
              if (t3.rules[e4].group === r4)
                return `--sxs{--sxs:${[...t3.rules[e4].cache].join(" ")}}${i4}`;
            return r4.cssRules.length ? `${o4}${i4}` : "";
          }
          return i4;
        }).join("");
      } };
    }
    const { sheet: i3, rules: o3 } = t3;
    for (let e3 = W3.length - 1; e3 >= 0; --e3) {
      const t4 = W3[e3];
      if (!o3[t4]) {
        const r4 = W3[e3 + 1], n4 = o3[r4] ? o3[r4].index : i3.cssRules.length;
        i3.insertRule("@media{}", n4), i3.insertRule(`--sxs{--sxs:${e3}}`, n4), o3[t4] = { group: i3.cssRules[n4 + 1], index: n4, cache: new Set([e3]) };
      }
      v2(o3[t4]);
    }
  };
  return r3(), t3;
};
var v2 = (e2) => {
  const t3 = e2.group;
  let r3 = t3.cssRules.length;
  e2.apply = (e3) => {
    try {
      t3.insertRule(e3, r3), ++r3;
    } catch (e4) {
    }
  };
};
var T2 = Symbol();
var w2 = o2();
var M2 = (e2, t3) => w2(e2, () => (...r3) => {
  let n3 = { type: null, composers: new Set() };
  for (const t4 of r3)
    if (t4 != null)
      if (t4[l3]) {
        n3.type == null && (n3.type = t4[l3].type);
        for (const e3 of t4[l3].composers)
          n3.composers.add(e3);
      } else
        t4.constructor !== Object || t4.$$typeof ? n3.type == null && (n3.type = t4) : n3.composers.add(C2(t4, e2));
  return n3.type == null && (n3.type = "span"), n3.composers.size || n3.composers.add(["PJLV", {}, [], [], {}, []]), P2(e2, n3, t3);
});
var C2 = (_a2, i3) => {
  var _b = _a2, { variants: e2, compoundVariants: t3, defaultVariants: r3 } = _b, n3 = __objRest(_b, ["variants", "compoundVariants", "defaultVariants"]);
  const o3 = `${S2(i3.prefix)}c-${z2(n3)}`, l4 = [], s3 = [], d3 = Object.create(null), g3 = [];
  for (const e3 in r3)
    d3[e3] = String(r3[e3]);
  if (typeof e2 == "object" && e2)
    for (const t4 in e2) {
      p3 = d3, u3 = t4, c2.call(p3, u3) || (d3[t4] = "undefined");
      const r4 = e2[t4];
      for (const e3 in r4) {
        const n4 = { [t4]: String(e3) };
        String(e3) === "undefined" && g3.push(t4);
        const i4 = r4[e3], o4 = [n4, i4, !a3(i4)];
        l4.push(o4);
      }
    }
  var p3, u3;
  if (typeof t3 == "object" && t3)
    for (const e3 of t3) {
      let _a3 = e3, { css: t4 } = _a3, r4 = __objRest(_a3, ["css"]);
      t4 = typeof t4 == "object" && t4 || {};
      for (const e4 in r4)
        r4[e4] = String(r4[e4]);
      const n4 = [r4, t4, !a3(t4)];
      s3.push(n4);
    }
  return [o3, n3, l4, s3, d3, g3];
};
var P2 = (e2, t3, r3) => {
  const [n3, i3, o3, a4] = L3(t3.composers), c3 = typeof t3.type == "function" || t3.type.$$typeof ? ((e3) => {
    function t4() {
      for (let r4 = 0; r4 < t4[T2].length; r4++) {
        const [n4, i4] = t4[T2][r4];
        e3.rules[n4].apply(i4);
      }
      return t4[T2] = [], null;
    }
    return t4[T2] = [], t4.rules = {}, W3.forEach((e4) => t4.rules[e4] = { apply: (r4) => t4[T2].push([e4, r4]) }), t4;
  })(r3) : null, d3 = (c3 || r3).rules, g3 = `.${n3}${i3.length > 1 ? `:where(.${i3.slice(1).join(".")})` : ""}`, p3 = (l4) => {
    l4 = typeof l4 == "object" && l4 || A2;
    const _a2 = l4, { css: s3 } = _a2, p4 = __objRest(_a2, ["css"]), u3 = {};
    for (const e3 in o3)
      if (delete p4[e3], e3 in l4) {
        let t4 = l4[e3];
        typeof t4 == "object" && t4 ? u3[e3] = __spreadValues({ "@initial": o3[e3] }, t4) : (t4 = String(t4), u3[e3] = t4 !== "undefined" || a4.has(e3) ? t4 : o3[e3]);
      } else
        u3[e3] = o3[e3];
    const h3 = new Set([...i3]);
    for (const [n4, i4, o4, l5] of t3.composers) {
      r3.rules.styled.cache.has(n4) || (r3.rules.styled.cache.add(n4), $(i4, [`.${n4}`], [], e2, (e3) => {
        d3.styled.apply(e3);
      }));
      const t4 = O2(o4, u3, e2.media), s4 = O2(l5, u3, e2.media, true);
      for (const i5 of t4)
        if (i5 !== void 0)
          for (const [t5, o5, l6] of i5) {
            const i6 = `${n4}-${z2(o5)}-${t5}`;
            h3.add(i6);
            const s5 = (l6 ? r3.rules.resonevar : r3.rules.onevar).cache, a5 = l6 ? d3.resonevar : d3.onevar;
            s5.has(i6) || (s5.add(i6), $(o5, [`.${i6}`], [], e2, (e3) => {
              a5.apply(e3);
            }));
          }
      for (const t5 of s4)
        if (t5 !== void 0)
          for (const [i5, o5] of t5) {
            const t6 = `${n4}-${z2(o5)}-${i5}`;
            h3.add(t6), r3.rules.allvar.cache.has(t6) || (r3.rules.allvar.cache.add(t6), $(o5, [`.${t6}`], [], e2, (e3) => {
              d3.allvar.apply(e3);
            }));
          }
    }
    if (typeof s3 == "object" && s3) {
      const t4 = `${n3}-i${z2(s3)}-css`;
      h3.add(t4), r3.rules.inline.cache.has(t4) || (r3.rules.inline.cache.add(t4), $(s3, [`.${t4}`], [], e2, (e3) => {
        d3.inline.apply(e3);
      }));
    }
    for (const e3 of String(l4.className || "").trim().split(/\s+/))
      e3 && h3.add(e3);
    const f4 = p4.className = [...h3].join(" ");
    return { type: t3.type, className: f4, selector: g3, props: p4, toString: () => f4, deferredInjector: c3 };
  };
  return s2(p3, { className: n3, selector: g3, [l3]: t3, toString: () => (r3.rules.styled.cache.has(n3) || p3(), n3) });
};
var L3 = (e2) => {
  let t3 = "";
  const r3 = [], n3 = {}, i3 = [];
  for (const [o3, , , , l4, s3] of e2) {
    t3 === "" && (t3 = o3), r3.push(o3), i3.push(...s3);
    for (const e3 in l4) {
      const t4 = l4[e3];
      (n3[e3] === void 0 || t4 !== "undefined" || s3.includes(t4)) && (n3[e3] = t4);
    }
  }
  return [t3, r3, n3, new Set(i3)];
};
var O2 = (e2, t3, r3, n3) => {
  const i3 = [];
  e:
    for (let [o3, l4, s3] of e2) {
      if (s3)
        continue;
      let e3, a4 = 0, c3 = false;
      for (e3 in o3) {
        const n4 = o3[e3];
        let i4 = t3[e3];
        if (i4 !== n4) {
          if (typeof i4 != "object" || !i4)
            continue e;
          {
            let e4, t4, o4 = 0;
            for (const l5 in i4) {
              if (n4 === String(i4[l5])) {
                if (l5 !== "@initial") {
                  const e5 = l5.slice(1);
                  (t4 = t4 || []).push(e5 in r3 ? r3[e5] : l5.replace(/^@media ?/, "")), c3 = true;
                }
                a4 += o4, e4 = true;
              }
              ++o4;
            }
            if (t4 && t4.length && (l4 = { ["@media " + t4.join(", ")]: l4 }), !e4)
              continue e;
          }
        }
      }
      (i3[a4] = i3[a4] || []).push([n3 ? "cv" : `${e3}-${o3[e3]}`, l4, c3]);
    }
  return i3;
};
var A2 = {};
var N = o2();
var D2 = (e2, t3) => N(e2, () => (...r3) => {
  const n3 = () => {
    for (let n4 of r3) {
      n4 = typeof n4 == "object" && n4 || {};
      let r4 = z2(n4);
      if (!t3.rules.global.cache.has(r4)) {
        if (t3.rules.global.cache.add(r4), "@import" in n4) {
          let e3 = [].indexOf.call(t3.sheet.cssRules, t3.rules.themed.group) - 1;
          for (let r5 of [].concat(n4["@import"]))
            r5 = r5.includes('"') || r5.includes("'") ? r5 : `"${r5}"`, t3.sheet.insertRule(`@import ${r5};`, e3++);
          delete n4["@import"];
        }
        $(n4, [], [], e2, (e3) => {
          t3.rules.global.apply(e3);
        });
      }
    }
    return "";
  };
  return s2(n3, { toString: n3 });
});
var H2 = o2();
var V4 = (e2, t3) => H2(e2, () => (r3) => {
  const n3 = `${S2(e2.prefix)}k-${z2(r3)}`, i3 = () => {
    if (!t3.rules.global.cache.has(n3)) {
      t3.rules.global.cache.add(n3);
      const i4 = [];
      $(r3, [], [], e2, (e3) => i4.push(e3));
      const o3 = `@keyframes ${n3}{${i4.join("")}}`;
      t3.rules.global.apply(o3);
    }
    return n3;
  };
  return s2(i3, { get name() {
    return i3();
  }, toString: i3 });
});
var G3 = class {
  constructor(e2, t3, r3, n3) {
    this.token = e2 == null ? "" : String(e2), this.value = t3 == null ? "" : String(t3), this.scale = r3 == null ? "" : String(r3), this.prefix = n3 == null ? "" : String(n3);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S2(this.prefix) + S2(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F2 = o2();
var J = (e2, t3) => F2(e2, () => (r3, n3) => {
  n3 = typeof r3 == "object" && r3 || Object(n3);
  const i3 = `.${r3 = (r3 = typeof r3 == "string" ? r3 : "") || `${S2(e2.prefix)}t-${z2(n3)}`}`, o3 = {}, l4 = [];
  for (const t4 in n3) {
    o3[t4] = {};
    for (const r4 in n3[t4]) {
      const i4 = `--${S2(e2.prefix)}${t4}-${r4}`, s4 = k2(String(n3[t4][r4]), e2.prefix, t4);
      o3[t4][r4] = new G3(r4, s4, t4, e2.prefix), l4.push(`${i4}:${s4}`);
    }
  }
  const s3 = () => {
    if (l4.length && !t3.rules.themed.cache.has(r3)) {
      t3.rules.themed.cache.add(r3);
      const i4 = `${n3 === e2.theme ? ":root," : ""}.${r3}{${l4.join(";")}}`;
      t3.rules.themed.apply(i4);
    }
    return r3;
  };
  return __spreadProps(__spreadValues({}, o3), { get className() {
    return s3();
  }, selector: i3, toString: s3 });
});
var U2 = o2();
var Y2 = o2();
var q2 = (e2) => {
  const t3 = ((e3) => {
    let t4 = false;
    const r3 = U2(e3, (e4) => {
      t4 = true;
      const r4 = "prefix" in (e4 = typeof e4 == "object" && e4 || {}) ? String(e4.prefix) : "", i3 = typeof e4.media == "object" && e4.media || {}, o3 = typeof e4.root == "object" ? e4.root || null : globalThis.document || null, l4 = typeof e4.theme == "object" && e4.theme || {}, s3 = { prefix: r4, media: i3, theme: l4, themeMap: typeof e4.themeMap == "object" && e4.themeMap || __spreadValues({}, n2), utils: typeof e4.utils == "object" && e4.utils || {} }, a4 = E2(o3), c3 = { css: M2(s3, a4), globalCss: D2(s3, a4), keyframes: V4(s3, a4), createTheme: J(s3, a4), reset() {
        a4.reset(), c3.theme.toString();
      }, theme: {}, sheet: a4, config: s3, prefix: r4, getCssText: a4.toString, toString: a4.toString };
      return String(c3.theme = c3.createTheme(l4)), c3;
    });
    return t4 || r3.reset(), r3;
  })(e2);
  return t3.styled = (({ config: e3, sheet: t4 }) => Y2(e3, () => {
    const r3 = M2(e3, t4);
    return (...e4) => {
      const t5 = r3(...e4), n3 = t5[l3].type, i3 = import_react66.default.forwardRef((e5, r4) => {
        const i4 = e5 && e5.as || n3, { props: o3, deferredInjector: l4 } = t5(e5);
        return delete o3.as, o3.ref = r4, l4 ? import_react66.default.createElement(import_react66.default.Fragment, null, import_react66.default.createElement(i4, o3), import_react66.default.createElement(l4, null)) : import_react66.default.createElement(i4, o3);
      });
      return i3.className = t5.className, i3.displayName = `Styled.${n3.displayName || n3.name || n3}`, i3.selector = t5.selector, i3.toString = () => t5.selector, i3[l3] = t5[l3], i3;
    };
  }))(t3), t3;
};

// src/stitches.config.ts
var { styled } = q2({
  themeMap: __spreadValues({}, n2),
  theme: {
    colors: {
      text: "black",
      background: "white",
      hover: "rgba(144, 144, 144, .1)",
      border: "rgba(144, 144, 144, .32)",
      active: "dodgerblue"
    },
    space: {
      0: "2px",
      1: "3px",
      2: "4px",
      3: "8px",
      4: "12px",
      5: "16px"
    },
    fontSizes: {
      0: "10px",
      1: "12px",
      2: "13px",
      3: "16px",
      4: "18px"
    },
    fonts: {
      ui: '"Inter", system-ui, sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"Roboto Mono", monospace'
    },
    fontWeights: {
      0: "400",
      1: "500",
      2: "700"
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      0: "$1"
    },
    borderStyles: {},
    radii: {
      0: "2px",
      1: "4px",
      2: "8px"
    },
    zIndices: {},
    transitions: {}
  },
  media: {
    micro: "(max-width: 370px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)"
  },
  utils: {
    zStrokeWidth: () => (value) => ({
      strokeWidth: `calc(${value}px / var(--camera-zoom))`
    })
  }
});
var stitches_config_default = styled;

// src/components/Toolbar.tsx
var onToolSelect = (e2) => {
  machine.send("SELECTED_TOOL", { name: e2.currentTarget.id });
};
var onReset = () => {
  machine.send("RESET");
};
function Toolbar({ activeStates, lastEvent }) {
  return /* @__PURE__ */ React14.createElement(ToolbarContainer, null, /* @__PURE__ */ React14.createElement(PrimaryTools, null, /* @__PURE__ */ React14.createElement(PrimaryToolButton, {
    id: "select",
    isActive: machine.isIn("select"),
    onClick: onToolSelect
  }, /* @__PURE__ */ React14.createElement(Highlight, null, /* @__PURE__ */ React14.createElement(mouse_pointer_default, null))), /* @__PURE__ */ React14.createElement(PrimaryToolButton, {
    id: "eraser",
    isActive: machine.isIn("eraser"),
    onClick: onToolSelect
  }, /* @__PURE__ */ React14.createElement(Highlight, null, /* @__PURE__ */ React14.createElement(x_default, null))), /* @__PURE__ */ React14.createElement(PrimaryToolButton, {
    id: "pencil",
    isActive: machine.isIn("pencil"),
    onClick: onToolSelect
  }, /* @__PURE__ */ React14.createElement(Highlight, null, /* @__PURE__ */ React14.createElement(edit_2_default, null))), /* @__PURE__ */ React14.createElement(PrimaryToolButton, {
    id: "box",
    isActive: machine.isIn("box"),
    onClick: onToolSelect
  }, /* @__PURE__ */ React14.createElement(Highlight, null, /* @__PURE__ */ React14.createElement(square_default, null))), /* @__PURE__ */ React14.createElement(PrimaryToolButton, {
    id: "arrow",
    isActive: machine.isIn("arrow"),
    onClick: onToolSelect
  }, /* @__PURE__ */ React14.createElement(Highlight, null, /* @__PURE__ */ React14.createElement(arrow_up_right_default, null)))), /* @__PURE__ */ React14.createElement(StatusBar, null, /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("button", {
    onClick: onReset
  }, "Reset"), activeStates.slice(1).map((name) => {
    const state = name.split(".");
    return state[state.length - 1];
  }).join(" - ")), /* @__PURE__ */ React14.createElement("div", null, lastEvent)));
}
var ToolbarContainer = stitches_config_default("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  gridRowGap: "$5",
  position: "fixed",
  bottom: "0",
  width: "100%",
  zIndex: "100"
});
var PrimaryTools = stitches_config_default("div", {
  display: "flex",
  width: "fit-content",
  borderRadius: "100px",
  border: "1px solid $border",
  overflow: "hidden",
  padding: "$2",
  justifySelf: "center",
  backgroundColor: "$background"
});
var Highlight = stitches_config_default("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: 10,
  borderRadius: "100%",
  transition: "background-color .025s"
});
var PrimaryToolButton = stitches_config_default("button", {
  cursor: "pointer",
  width: "40px",
  height: "40px",
  padding: 2,
  margin: 0,
  background: "none",
  backgroundColor: "none",
  border: "none",
  color: "$text",
  variants: {
    isActive: {
      true: {
        color: "$background",
        [`& > ${Highlight}`]: {
          backgroundColor: "$text"
        }
      },
      false: {
        [`&:hover > ${Highlight}`]: {
          backgroundColor: "$hover"
        },
        "&:active": {
          color: "$background"
        },
        [`&:active > ${Highlight}`]: {
          backgroundColor: "$text"
        }
      }
    }
  }
});
var StatusBar = stitches_config_default("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 12px",
  borderTop: "1px solid $border",
  fontSize: "$1",
  fontWeight: "$1",
  backgroundColor: "$background",
  overflow: "hidden",
  whiteSpace: "nowrap",
  "& button": {
    background: "none",
    border: "1px solid $text",
    borderRadius: 3,
    marginRight: "$3",
    fontFamily: "inherit",
    fontSize: "inherit",
    cursor: "pointer"
  }
});

// src/components/TitleLinks.tsx
var React15 = __toModule(require_react());
function TitleLinks() {
  return /* @__PURE__ */ React15.createElement(TitleLinksContainer, null, /* @__PURE__ */ React15.createElement("a", {
    href: "https://github.com/tldraw/core"
  }, "@tldraw/core"));
}
var TitleLinksContainer = stitches_config_default("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
  fontSize: "$3",
  "& > a": {
    color: "$text",
    textDecoration: "none",
    padding: "$2 $4",
    fontWeight: "$2",
    pointerEvents: "all",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

// src/state/api.ts
var Api = class {
  constructor(_machine) {
    this._machine = _machine;
    this.reset = () => {
      this.machine.send("RESET");
      return this;
    };
    this.cancel = () => {
      this.machine.send("CANCELLED");
      return this;
    };
    this.delete = () => {
      this.machine.send("DELETED");
      return this;
    };
    this.selectAll = () => {
      this.machine.send("SELECTED_ALL");
      return this;
    };
    this.deselectAll = () => {
      this.machine.send("DESELECTED_ALL");
      return this;
    };
    this.zoomToFit = () => {
      this.machine.send("ZOOMED_TO_FIT");
      return this;
    };
    this.zoomToSelection = () => {
      this.machine.send("ZOOMED_TO_SELECTION");
      return this;
    };
    this.zoomIn = () => {
      this.machine.send("ZOOMED_IN");
      return this;
    };
    this.zoomOut = () => {
      this.machine.send("ZOOMED_OUT");
      return this;
    };
    this.undo = () => {
      this.machine.send("UNDO");
      return this;
    };
    this.redo = () => {
      this.machine.send("REDO");
      return this;
    };
    this.selectTool = (name) => {
      this.machine.send("SELECTED_TOOL", { name });
      return this;
    };
    this.createShapes = (...shapes) => {
      this.machine.send("CREATED_SHAPES", { shapes });
      return this;
    };
    this.updateShapes = (...shapes) => {
      this.machine.send("UPDATED_SHAPES", { shapes });
      return this;
    };
    this.deleteShapes = (...ids) => {
      this.machine.send("DELETED_SHAPES", { ids });
      return this;
    };
    this.createBindings = (...bindings) => {
      this.machine.send("CREATED_BINDINGS", { bindings });
      return this;
    };
    this.updateBindings = (...bindings) => {
      this.machine.send("UPDATED_BINDINGS", { bindings });
      return this;
    };
    this.deleteBindings = (...ids) => {
      this.machine.send("DELETED_BINDINGS", { ids });
      return this;
    };
    this.getShape = (id) => {
      return this.machine.data.page.shapes[id];
    };
    this.getBinding = (id) => {
      return this.machine.data.page.bindings[id];
    };
    this.createArrowBetweenShapes = (startId, endId) => {
      const arrowId = nanoid();
      const startBindingId = nanoid();
      const endBindingId = nanoid();
      this.createShapes({ id: arrowId, type: "arrow" });
      this.createBindings({ id: startBindingId, fromId: arrowId, toId: startId, handleId: "start" }, { id: endBindingId, fromId: arrowId, toId: endId, handleId: "end" });
      return this;
    };
    this.send = this._machine.send;
    this.isIn = this._machine.isIn;
    this.isInAny = this._machine.isInAny;
    this.log = this._machine.log;
  }
  get machine() {
    return this._machine;
  }
  get state() {
    return this.machine.data;
  }
  get page() {
    return this.machine.data.page;
  }
  get pageState() {
    return this.machine.data.pageState;
  }
  get selectedIds() {
    return this.machine.data.pageState.selectedIds;
  }
  get lastEvent() {
    return this.log[0];
  }
};

// src/app.tsx
var onHoverShape = (info, e2) => {
  machine.send("HOVERED_SHAPE", info);
};
var onUnhoverShape = (info, e2) => {
  machine.send("UNHOVERED_SHAPE", info);
};
var onPointShape = (info, e2) => {
  machine.send("POINTED_SHAPE", info);
};
var onPointCanvas = (info, e2) => {
  machine.send("POINTED_CANVAS", info);
};
var onPointBounds = (info, e2) => {
  machine.send("POINTED_BOUNDS", info);
};
var onPointHandle = (info, e2) => {
  machine.send("POINTED_HANDLE", info);
};
var onPointerDown = (info, e2) => {
  machine.send("STARTED_POINTING", info);
};
var onPointerUp = (info, e2) => {
  machine.send("STOPPED_POINTING", info);
};
var onPointerMove = (info, e2) => {
  machine.send("MOVED_POINTER", info);
};
var onPan = (info, e2) => {
  machine.send("PANNED", info);
};
var onPinchStart = (info, e2) => {
  machine.send("STARTED_PINCHING", info);
};
var onPinch = (info, e2) => {
  machine.send("PINCHED", info);
};
var onPinchEnd = (info, e2) => {
  machine.send("STOPPED_PINCHING", info);
};
var onPointBoundsHandle = (info, e2) => {
  machine.send("POINTED_BOUNDS_HANDLE", info);
};
var onBoundsChange = (bounds) => {
  machine.send("RESIZED", { bounds });
};
var onKeyDown = (key, info, e2) => {
  switch (key) {
    case "Alt":
    case "Meta":
    case "Control":
    case "Shift": {
      machine.send("TOGGLED_MODIFIER", info);
      break;
    }
    case "Backspace": {
      machine.send("DELETED", info);
      break;
    }
    case "Escape": {
      machine.send("CANCELLED", info);
      break;
    }
    case "0": {
      machine.send("ZOOMED_TO_ACTUAL", info);
      break;
    }
    case "1": {
      machine.send("ZOOMED_TO_FIT", info);
      break;
    }
    case "2": {
      machine.send("ZOOMED_TO_SELECTION", info);
      break;
    }
    case "=": {
      if (info.metaKey || info.ctrlKey) {
        e2.preventDefault();
        machine.send("ZOOMED_IN", info);
      }
      break;
    }
    case "-": {
      if (info.metaKey || info.ctrlKey) {
        e2.preventDefault();
        machine.send("ZOOMED_OUT", info);
      }
      break;
    }
    case "s":
    case "v": {
      machine.send("SELECTED_TOOL", { name: "select" });
      break;
    }
    case "r":
    case "b": {
      machine.send("SELECTED_TOOL", { name: "box" });
      break;
    }
    case "d": {
      machine.send("SELECTED_TOOL", { name: "pencil" });
      break;
    }
    case "e": {
      machine.send("SELECTED_TOOL", { name: "eraser" });
      break;
    }
    case "a": {
      if (info.metaKey || info.ctrlKey) {
        machine.send("SELECTED_ALL");
        e2.preventDefault();
      } else {
        machine.send("SELECTED_TOOL", { name: "arrow" });
      }
      break;
    }
    case "z": {
      if (info.metaKey || info.ctrlKey) {
        if (info.shiftKey) {
          machine.send("REDO");
        } else {
          machine.send("UNDO");
        }
      }
      break;
    }
  }
};
var onKeyUp = (key, info, e2) => {
  switch (key) {
    case "Alt":
    case "Meta":
    case "Control":
    case "Shift": {
      machine.send("TOGGLED_MODIFIER", info);
      break;
    }
  }
};
function App({ onMount }) {
  const appState = useStateDesigner(machine);
  React16.useEffect(() => {
    const api = new Api(appState);
    onMount == null ? void 0 : onMount(api);
    window["api"] = api;
  }, []);
  const hideBounds = appState.isInAny("transformingSelection", "translating", "creating");
  const firstShapeId = appState.data.pageState.selectedIds[0];
  const firstShape = firstShapeId ? appState.data.page.shapes[firstShapeId] : null;
  const hideResizeHandles = firstShape ? appState.data.pageState.selectedIds.length === 1 && shapeUtils[firstShape.type].hideResizeHandles : false;
  return /* @__PURE__ */ React16.createElement(AppContainer, null, /* @__PURE__ */ React16.createElement(Renderer, {
    shapeUtils,
    page: appState.data.page,
    pageState: appState.data.pageState,
    meta: appState.data.meta,
    snapLines: appState.data.overlays.snapLines,
    onPointShape,
    onPointBounds,
    onPointCanvas,
    onPointerDown,
    onPointerMove,
    onHoverShape,
    onUnhoverShape,
    onPointBoundsHandle,
    onPointHandle,
    onPan,
    onPinchStart,
    onPinchEnd,
    onPinch,
    onPointerUp,
    onBoundsChange,
    onKeyDown,
    onKeyUp,
    hideBounds,
    hideHandles: hideBounds,
    hideResizeHandles,
    hideIndicators: hideBounds,
    hideBindingHandles: true
  }), /* @__PURE__ */ React16.createElement(Toolbar, {
    activeStates: appState.active,
    lastEvent: appState.log[0]
  }), /* @__PURE__ */ React16.createElement(TitleLinks, null));
}
var AppContainer = stitches_config_default("div", {
  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  width: "100%",
  height: "100%",
  zIndex: 101
});

// src/index.tsx
import_react_dom2.default.render(/* @__PURE__ */ import_react69.default.createElement(import_react69.default.StrictMode, null, /* @__PURE__ */ import_react69.default.createElement(App, null)), document.getElementById("root"));
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
