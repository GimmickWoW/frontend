// _snowpack/pkg/common/index-df124c49.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
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
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
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
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
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
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n3 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q3 = 60109, r3 = 60110, t3 = 60112;
  exports.Suspense = 60113;
  var u = 60115, v2 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w2 = Symbol.for;
    n3 = w2("react.element");
    p3 = w2("react.portal");
    exports.Fragment = w2("react.fragment");
    exports.StrictMode = w2("react.strict_mode");
    exports.Profiler = w2("react.profiler");
    q3 = w2("react.provider");
    r3 = w2("react.context");
    t3 = w2("react.forward_ref");
    exports.Suspense = w2("react.suspense");
    u = w2("react.memo");
    v2 = w2("react.lazy");
  }
  var x3 = typeof Symbol === "function" && Symbol.iterator;
  function y4(a2) {
    if (a2 === null || typeof a2 !== "object")
      return null;
    a2 = x3 && a2[x3] || a2["@@iterator"];
    return typeof a2 === "function" ? a2 : null;
  }
  function z3(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
      b2 += "&args[]=" + encodeURIComponent(arguments[c3]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A3 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B3 = {};
  function C2(a2, b2, c3) {
    this.props = a2;
    this.context = b2;
    this.refs = B3;
    this.updater = c3 || A3;
  }
  C2.prototype.isReactComponent = {};
  C2.prototype.setState = function(a2, b2) {
    if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  C2.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function D3() {
  }
  D3.prototype = C2.prototype;
  function E2(a2, b2, c3) {
    this.props = a2;
    this.context = b2;
    this.refs = B3;
    this.updater = c3 || A3;
  }
  var F3 = E2.prototype = new D3();
  F3.constructor = E2;
  objectAssign(F3, C2.prototype);
  F3.isPureReactComponent = true;
  var G3 = {current: null}, H3 = Object.prototype.hasOwnProperty, I3 = {key: true, ref: true, __self: true, __source: true};
  function J2(a2, b2, c3) {
    var e3, d3 = {}, k3 = null, h2 = null;
    if (b2 != null)
      for (e3 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k3 = "" + b2.key), b2)
        H3.call(b2, e3) && !I3.hasOwnProperty(e3) && (d3[e3] = b2[e3]);
    var g3 = arguments.length - 2;
    if (g3 === 1)
      d3.children = c3;
    else if (1 < g3) {
      for (var f2 = Array(g3), m3 = 0; m3 < g3; m3++)
        f2[m3] = arguments[m3 + 2];
      d3.children = f2;
    }
    if (a2 && a2.defaultProps)
      for (e3 in g3 = a2.defaultProps, g3)
        d3[e3] === void 0 && (d3[e3] = g3[e3]);
    return {$$typeof: n3, type: a2, key: k3, ref: h2, props: d3, _owner: G3.current};
  }
  function K2(a2, b2) {
    return {$$typeof: n3, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner};
  }
  function L2(a2) {
    return typeof a2 === "object" && a2 !== null && a2.$$typeof === n3;
  }
  function escape2(a2) {
    var b2 = {"=": "=0", ":": "=2"};
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var M3 = /\/+/g;
  function N3(a2, b2) {
    return typeof a2 === "object" && a2 !== null && a2.key != null ? escape2("" + a2.key) : b2.toString(36);
  }
  function O3(a2, b2, c3, e3, d3) {
    var k3 = typeof a2;
    if (k3 === "undefined" || k3 === "boolean")
      a2 = null;
    var h2 = false;
    if (a2 === null)
      h2 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a2.$$typeof) {
            case n3:
            case p3:
              h2 = true;
          }
      }
    if (h2)
      return h2 = a2, d3 = d3(h2), a2 = e3 === "" ? "." + N3(h2, 0) : e3, Array.isArray(d3) ? (c3 = "", a2 != null && (c3 = a2.replace(M3, "$&/") + "/"), O3(d3, b2, c3, "", function(a3) {
        return a3;
      })) : d3 != null && (L2(d3) && (d3 = K2(d3, c3 + (!d3.key || h2 && h2.key === d3.key ? "" : ("" + d3.key).replace(M3, "$&/") + "/") + a2)), b2.push(d3)), 1;
    h2 = 0;
    e3 = e3 === "" ? "." : e3 + ":";
    if (Array.isArray(a2))
      for (var g3 = 0; g3 < a2.length; g3++) {
        k3 = a2[g3];
        var f2 = e3 + N3(k3, g3);
        h2 += O3(k3, b2, c3, f2, d3);
      }
    else if (f2 = y4(a2), typeof f2 === "function")
      for (a2 = f2.call(a2), g3 = 0; !(k3 = a2.next()).done; )
        k3 = k3.value, f2 = e3 + N3(k3, g3++), h2 += O3(k3, b2, c3, f2, d3);
    else if (k3 === "object")
      throw b2 = "" + a2, Error(z3(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
    return h2;
  }
  function P3(a2, b2, c3) {
    if (a2 == null)
      return a2;
    var e3 = [], d3 = 0;
    O3(a2, e3, "", "", function(a3) {
      return b2.call(c3, a3, d3++);
    });
    return e3;
  }
  function Q2(a2) {
    if (a2._status === -1) {
      var b2 = a2._result;
      b2 = b2();
      a2._status = 0;
      a2._result = b2;
      b2.then(function(b3) {
        a2._status === 0 && (b3 = b3.default, a2._status = 1, a2._result = b3);
      }, function(b3) {
        a2._status === 0 && (a2._status = 2, a2._result = b3);
      });
    }
    if (a2._status === 1)
      return a2._result;
    throw a2._result;
  }
  var R3 = {current: null};
  function S3() {
    var a2 = R3.current;
    if (a2 === null)
      throw Error(z3(321));
    return a2;
  }
  var T3 = {ReactCurrentDispatcher: R3, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G3, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P3, forEach: function(a2, b2, c3) {
    P3(a2, function() {
      b2.apply(this, arguments);
    }, c3);
  }, count: function(a2) {
    var b2 = 0;
    P3(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return P3(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!L2(a2))
      throw Error(z3(143));
    return a2;
  }};
  exports.Component = C2;
  exports.PureComponent = E2;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T3;
  exports.cloneElement = function(a2, b2, c3) {
    if (a2 === null || a2 === void 0)
      throw Error(z3(267, a2));
    var e3 = objectAssign({}, a2.props), d3 = a2.key, k3 = a2.ref, h2 = a2._owner;
    if (b2 != null) {
      b2.ref !== void 0 && (k3 = b2.ref, h2 = G3.current);
      b2.key !== void 0 && (d3 = "" + b2.key);
      if (a2.type && a2.type.defaultProps)
        var g3 = a2.type.defaultProps;
      for (f2 in b2)
        H3.call(b2, f2) && !I3.hasOwnProperty(f2) && (e3[f2] = b2[f2] === void 0 && g3 !== void 0 ? g3[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (f2 === 1)
      e3.children = c3;
    else if (1 < f2) {
      g3 = Array(f2);
      for (var m3 = 0; m3 < f2; m3++)
        g3[m3] = arguments[m3 + 2];
      e3.children = g3;
    }
    return {
      $$typeof: n3,
      type: a2.type,
      key: d3,
      ref: k3,
      props: e3,
      _owner: h2
    };
  };
  exports.createContext = function(a2, b2) {
    b2 === void 0 && (b2 = null);
    a2 = {$$typeof: r3, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null};
    a2.Provider = {$$typeof: q3, _context: a2};
    return a2.Consumer = a2;
  };
  exports.createElement = J2;
  exports.createFactory = function(a2) {
    var b2 = J2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a2) {
    return {$$typeof: t3, render: a2};
  };
  exports.isValidElement = L2;
  exports.lazy = function(a2) {
    return {$$typeof: v2, _payload: {_status: -1, _result: a2}, _init: Q2};
  };
  exports.memo = function(a2, b2) {
    return {$$typeof: u, type: a2, compare: b2 === void 0 ? null : b2};
  };
  exports.useCallback = function(a2, b2) {
    return S3().useCallback(a2, b2);
  };
  exports.useContext = function(a2, b2) {
    return S3().useContext(a2, b2);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a2, b2) {
    return S3().useEffect(a2, b2);
  };
  exports.useImperativeHandle = function(a2, b2, c3) {
    return S3().useImperativeHandle(a2, b2, c3);
  };
  exports.useLayoutEffect = function(a2, b2) {
    return S3().useLayoutEffect(a2, b2);
  };
  exports.useMemo = function(a2, b2) {
    return S3().useMemo(a2, b2);
  };
  exports.useReducer = function(a2, b2, c3) {
    return S3().useReducer(a2, b2, c3);
  };
  exports.useRef = function(a2) {
    return S3().useRef(a2);
  };
  exports.useState = function(a2) {
    return S3().useState(a2);
  };
  exports.version = "17.0.1";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// _snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f2, g3, h2, k3;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p3 = Date, q3 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q3;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t3 = null, u = null, w2 = function() {
      if (t3 !== null)
        try {
          var a2 = exports.unstable_now();
          t3(true, a2);
          t3 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      t3 !== null ? setTimeout(f2, 0, a2) : (t3 = a2, setTimeout(w2, 0));
    };
    g3 = function(a2, b2) {
      u = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k3 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x3 = window.setTimeout, y4 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A3 = false, B3 = null, C2 = -1, D3 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k3 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D3 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F3 = new MessageChannel(), G3 = F3.port2;
    F3.port1.onmessage = function() {
      if (B3 !== null) {
        var a2 = exports.unstable_now();
        E2 = a2 + D3;
        try {
          B3(true, a2) ? G3.postMessage(null) : (A3 = false, B3 = null);
        } catch (b2) {
          throw G3.postMessage(null), b2;
        }
      } else
        A3 = false;
    };
    f2 = function(a2) {
      B3 = a2;
      A3 || (A3 = true, G3.postMessage(null));
    };
    g3 = function(a2, b2) {
      C2 = x3(function() {
        a2(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y4(C2);
      C2 = -1;
    };
  }
  function H3(a2, b2) {
    var c3 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d3 = c3 - 1 >>> 1, e3 = a2[d3];
        if (e3 !== void 0 && 0 < I3(e3, b2))
          a2[d3] = b2, a2[c3] = e3, c3 = d3;
        else
          break a;
      }
  }
  function J2(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K2(a2) {
    var b2 = a2[0];
    if (b2 !== void 0) {
      var c3 = a2.pop();
      if (c3 !== b2) {
        a2[0] = c3;
        a:
          for (var d3 = 0, e3 = a2.length; d3 < e3; ) {
            var m3 = 2 * (d3 + 1) - 1, n3 = a2[m3], v2 = m3 + 1, r3 = a2[v2];
            if (n3 !== void 0 && 0 > I3(n3, c3))
              r3 !== void 0 && 0 > I3(r3, n3) ? (a2[d3] = r3, a2[v2] = c3, d3 = v2) : (a2[d3] = n3, a2[m3] = c3, d3 = m3);
            else if (r3 !== void 0 && 0 > I3(r3, c3))
              a2[d3] = r3, a2[v2] = c3, d3 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I3(a2, b2) {
    var c3 = a2.sortIndex - b2.sortIndex;
    return c3 !== 0 ? c3 : a2.id - b2.id;
  }
  var L2 = [], M3 = [], N3 = 1, O3 = null, P3 = 3, Q2 = false, R3 = false, S3 = false;
  function T3(a2) {
    for (var b2 = J2(M3); b2 !== null; ) {
      if (b2.callback === null)
        K2(M3);
      else if (b2.startTime <= a2)
        K2(M3), b2.sortIndex = b2.expirationTime, H3(L2, b2);
      else
        break;
      b2 = J2(M3);
    }
  }
  function U3(a2) {
    S3 = false;
    T3(a2);
    if (!R3)
      if (J2(L2) !== null)
        R3 = true, f2(V2);
      else {
        var b2 = J2(M3);
        b2 !== null && g3(U3, b2.startTime - a2);
      }
  }
  function V2(a2, b2) {
    R3 = false;
    S3 && (S3 = false, h2());
    Q2 = true;
    var c3 = P3;
    try {
      T3(b2);
      for (O3 = J2(L2); O3 !== null && (!(O3.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
        var d3 = O3.callback;
        if (typeof d3 === "function") {
          O3.callback = null;
          P3 = O3.priorityLevel;
          var e3 = d3(O3.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e3 === "function" ? O3.callback = e3 : O3 === J2(L2) && K2(L2);
          T3(b2);
        } else
          K2(L2);
        O3 = J2(L2);
      }
      if (O3 !== null)
        var m3 = true;
      else {
        var n3 = J2(M3);
        n3 !== null && g3(U3, n3.startTime - b2);
        m3 = false;
      }
      return m3;
    } finally {
      O3 = null, P3 = c3, Q2 = false;
    }
  }
  var W3 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R3 || Q2 || (R3 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P3;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a2) {
    switch (P3) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P3;
    }
    var c3 = P3;
    P3 = b2;
    try {
      return a2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W3;
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c3 = P3;
    P3 = a2;
    try {
      return b2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c3) {
    var d3 = exports.unstable_now();
    typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d3 + c3 : d3) : c3 = d3;
    switch (a2) {
      case 1:
        var e3 = -1;
        break;
      case 2:
        e3 = 250;
        break;
      case 5:
        e3 = 1073741823;
        break;
      case 4:
        e3 = 1e4;
        break;
      default:
        e3 = 5e3;
    }
    e3 = c3 + e3;
    a2 = {id: N3++, callback: b2, priorityLevel: a2, startTime: c3, expirationTime: e3, sortIndex: -1};
    c3 > d3 ? (a2.sortIndex = c3, H3(M3, a2), J2(L2) === null && a2 === J2(M3) && (S3 ? h2() : S3 = true, g3(U3, c3 - d3))) : (a2.sortIndex = e3, H3(L2, a2), R3 || Q2 || (R3 = true, f2(V2)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b2 = P3;
    return function() {
      var c3 = P3;
      P3 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P3 = c3;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c3]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c3, d3) {
  if (c3 !== null && c3.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3)
        return false;
      if (c3 !== null)
        return !c3.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b2, c3, d3) {
  if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c3, d3))
    return true;
  if (d3)
    return false;
  if (c3 !== null)
    switch (c3.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a2, b2, c3, d3, e3, f2, g3) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d3;
  this.attributeNamespace = e3;
  this.mustUseProperty = c3;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g3;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D[b2] = new B(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D[a2] = new B(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D[a2] = new B(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D[a2] = new B(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c3, d3) {
  var e3 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = e3 !== null ? e3.type === 0 : d3 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c3, e3, d3) && (c3 = null), d3 || e3 === null ? la(b2) && (c3 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c3)) : e3.mustUseProperty ? a2[e3.propertyName] = c3 === null ? e3.type === 3 ? false : "" : c3 : (b2 = e3.attributeName, d3 = e3.attributeNamespace, c3 === null ? a2.removeAttribute(b2) : (e3 = e3.type, c3 = e3 === 3 || e3 === 4 && c3 === true ? "" : "" + c3, d3 ? a2.setAttributeNS(d3, b2, c3) : a2.setAttribute(b2, c3))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
  E2 = Symbol.for;
  sa = E2("react.element");
  ta = E2("react.portal");
  ua = E2("react.fragment");
  wa = E2("react.strict_mode");
  xa = E2("react.profiler");
  ya = E2("react.provider");
  za = E2("react.context");
  Aa = E2("react.forward_ref");
  Ba = E2("react.suspense");
  Ca = E2("react.suspense_list");
  Da = E2("react.memo");
  Ea = E2("react.lazy");
  Fa = E2("react.block");
  E2("react.scope");
  Ga = E2("react.opaque.id");
  Ha = E2("react.debug_trace_mode");
  Ia = E2("react.offscreen");
  Ja = E2("react.legacy_hidden");
}
var E2;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c3) {
      var b2 = c3.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c3 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k3) {
          var d3 = k3;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k3) {
          d3 = k3;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k3) {
        d3 = k3;
      }
      a2();
    }
  } catch (k3) {
    if (k3 && d3 && typeof k3.stack === "string") {
      for (var e3 = k3.stack.split("\n"), f2 = d3.stack.split("\n"), g3 = e3.length - 1, h2 = f2.length - 1; 1 <= g3 && 0 <= h2 && e3[g3] !== f2[h2]; )
        h2--;
      for (; 1 <= g3 && 0 <= h2; g3--, h2--)
        if (e3[g3] !== f2[h2]) {
          if (g3 !== 1 || h2 !== 1) {
            do
              if (g3--, h2--, 0 > h2 || e3[g3] !== f2[h2])
                return "\n" + e3[g3].replace(" at new ", " at ");
            while (1 <= g3 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c3;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
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
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c3) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d3 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
    var e3 = c3.get, f2 = c3.set;
    Object.defineProperty(a2, b2, {configurable: true, get: function() {
      return e3.call(this);
    }, set: function(a3) {
      d3 = "" + a3;
      f2.call(this, a3);
    }});
    Object.defineProperty(a2, b2, {enumerable: c3.enumerable});
    return {getValue: function() {
      return d3;
    }, setValue: function(a3) {
      d3 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    }};
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c3 = b2.getValue();
  var d3 = "";
  a2 && (d3 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d3;
  return a2 !== c3 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c3 = b2.checked;
  return objectAssign({}, b2, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c3 != null ? c3 : a2._wrapperState.initialChecked});
}
function Za(a2, b2) {
  var c3 = b2.defaultValue == null ? "" : b2.defaultValue, d3 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c3 = Sa(b2.value != null ? b2.value : c3);
  a2._wrapperState = {initialChecked: d3, initialValue: c3, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null};
}
function $a(a2, b2) {
  b2 = b2.checked;
  b2 != null && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c3 = Sa(b2.value), d3 = b2.type;
  if (c3 != null)
    if (d3 === "number") {
      if (c3 === 0 && a2.value === "" || a2.value != c3)
        a2.value = "" + c3;
    } else
      a2.value !== "" + c3 && (a2.value = "" + c3);
  else if (d3 === "submit" || d3 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c3) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c3) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d3 = b2.type;
    if (!(d3 !== "submit" && d3 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c3 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c3 = a2.name;
  c3 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c3 !== "" && (a2.name = c3);
}
function bb(a2, b2, c3) {
  if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
    c3 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c3 && (a2.defaultValue = "" + c3);
}
function db(a2) {
  var b2 = "";
  react.Children.forEach(a2, function(a3) {
    a3 != null && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = objectAssign({children: void 0}, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c3, d3) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e3 = 0; e3 < c3.length; e3++)
      b2["$" + c3[e3]] = true;
    for (c3 = 0; c3 < a2.length; c3++)
      e3 = b2.hasOwnProperty("$" + a2[c3].value), a2[c3].selected !== e3 && (a2[c3].selected = e3), e3 && d3 && (a2[c3].defaultSelected = true);
  } else {
    c3 = "" + Sa(c3);
    b2 = null;
    for (e3 = 0; e3 < a2.length; e3++) {
      if (a2[e3].value === c3) {
        a2[e3].selected = true;
        d3 && (a2[e3].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e3].disabled || (b2 = a2[e3]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b2, {value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue});
}
function hb(a2, b2) {
  var c3 = b2.value;
  if (c3 == null) {
    c3 = b2.children;
    b2 = b2.defaultValue;
    if (c3 != null) {
      if (b2 != null)
        throw Error(y(92));
      if (Array.isArray(c3)) {
        if (!(1 >= c3.length))
          throw Error(y(93));
        c3 = c3[0];
      }
      b2 = c3;
    }
    b2 == null && (b2 = "");
    c3 = b2;
  }
  a2._wrapperState = {initialValue: Sa(c3)};
}
function ib(a2, b2) {
  var c3 = Sa(b2.value), d3 = Sa(b2.defaultValue);
  c3 != null && (c3 = "" + c3, c3 !== a2.value && (a2.value = c3), b2.defaultValue == null && a2.defaultValue !== c3 && (a2.defaultValue = c3));
  d3 != null && (a2.defaultValue = "" + d3);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb;
var ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c3, d3, e3) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c3, d3, e3);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c3 = a2.firstChild;
    if (c3 && c3 === a2.lastChild && c3.nodeType === 3) {
      c3.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
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
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c3) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c3 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c3 in b2)
    if (b2.hasOwnProperty(c3)) {
      var d3 = c3.indexOf("--") === 0, e3 = sb(c3, b2[c3], d3);
      c3 === "float" && (c3 = "cssFloat");
      d3 ? a2.setProperty(c3, e3) : a2[c3] = e3;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y(62));
  }
}
function wb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
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
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c3, d3, e3) {
  return a2(b2, c3, d3, e3);
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
function Nb(a2, b2, c3) {
  if (Lb)
    return a2(b2, c3);
  Lb = true;
  try {
    return Jb(a2, b2, c3);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c3 = a2.stateNode;
  if (c3 === null)
    return null;
  var d3 = Db(c3);
  if (d3 === null)
    return null;
  c3 = d3[b2];
  a:
    switch (b2) {
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
        (d3 = !d3.disabled) || (a2 = a2.type, d3 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d3;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c3 && typeof c3 !== "function")
    throw Error(y(231, b2, typeof c3));
  return c3;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
var Qb;
function Rb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c3, l2);
  } catch (n3) {
    this.onError(n3);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a2) {
  Sb = true;
  Tb = a2;
}};
function Xb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c3 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 1026) !== 0 && (c3 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c3 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (b2 === null)
      throw Error(y(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c3 = a2, d3 = b2; ; ) {
    var e3 = c3.return;
    if (e3 === null)
      break;
    var f2 = e3.alternate;
    if (f2 === null) {
      d3 = e3.return;
      if (d3 !== null) {
        c3 = d3;
        continue;
      }
      break;
    }
    if (e3.child === f2.child) {
      for (f2 = e3.child; f2; ) {
        if (f2 === c3)
          return ac(e3), a2;
        if (f2 === d3)
          return ac(e3), b2;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c3.return !== d3.return)
      c3 = e3, d3 = f2;
    else {
      for (var g3 = false, h2 = e3.child; h2; ) {
        if (h2 === c3) {
          g3 = true;
          c3 = e3;
          d3 = f2;
          break;
        }
        if (h2 === d3) {
          g3 = true;
          d3 = e3;
          c3 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g3) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c3) {
            g3 = true;
            c3 = f2;
            d3 = e3;
            break;
          }
          if (h2 === d3) {
            g3 = true;
            d3 = f2;
            c3 = e3;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g3)
          throw Error(y(189));
      }
    }
    if (c3.alternate !== d3)
      throw Error(y(190));
  }
  if (c3.tag !== 3)
    throw Error(y(188));
  return c3.stateNode.current === c3 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c3 = a2.alternate; b2 !== null; ) {
    if (b2 === a2 || b2 === c3)
      return true;
    b2 = b2.return;
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
function rc(a2, b2, c3, d3, e3) {
  return {blockedOn: a2, domEventName: b2, eventSystemFlags: c3 | 16, nativeEvent: e3, targetContainers: [d3]};
}
function sc(a2, b2) {
  switch (a2) {
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
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c3, d3, e3, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = rc(b2, c3, d3, e3, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
  a2.eventSystemFlags |= d3;
  b2 = a2.targetContainers;
  e3 !== null && b2.indexOf(e3) === -1 && b2.push(e3);
  return a2;
}
function uc(a2, b2, c3, d3, e3) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c3, d3, e3), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c3, d3, e3), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c3, d3, e3), true;
    case "pointerover":
      var f2 = e3.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c3, d3, e3));
      return true;
    case "gotpointercapture":
      return f2 = e3.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c3, d3, e3)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (b2 !== null) {
    var c3 = Zb(b2);
    if (c3 !== null) {
      if (b2 = c3.tag, b2 === 13) {
        if (b2 = $b(c3), b2 !== null) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            scheduler.unstable_runWithPriority(a2.priority, function() {
              gc(c3);
            });
          });
          return;
        }
      } else if (b2 === 3 && c3.stateNode.hydrate) {
        a2.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c3 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c3 !== null)
      return b2 = Cb(c3), b2 !== null && fc(b2), a2.blockedOn = c3, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c3) {
  xc(a2) && c3.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c3 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c3 !== null) {
        a2.blockedOn = c3;
        break;
      }
      b2.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c3 = 1; c3 < jc.length; c3++) {
      var d3 = jc[c3];
      d3.blockedOn === a2 && (d3.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c3 = 0; c3 < pc.length; c3++)
    d3 = pc[c3], d3.blockedOn === a2 && (d3.blockedOn = null);
  for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
    vc(c3), c3.blockedOn === null && pc.shift();
}
function Dc(a2, b2) {
  var c3 = {};
  c3[a2.toLowerCase()] = b2.toLowerCase();
  c3["Webkit" + a2] = "webkit" + b2;
  c3["Moz" + a2] = "moz" + b2;
  return c3;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c3;
  for (c3 in b2)
    if (b2.hasOwnProperty(c3) && c3 in Gc)
      return Fc[a2] = b2[c3];
  return a2;
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
function Pc(a2, b2) {
  for (var c3 = 0; c3 < a2.length; c3 += 2) {
    var d3 = a2[c3], e3 = a2[c3 + 1];
    e3 = "on" + (e3[0].toUpperCase() + e3.slice(1));
    Nc.set(d3, b2);
    Mc.set(d3, e3);
    da(e3, [d3]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F = 15, 1;
  if ((2 & a2) !== 0)
    return F = 14, 2;
  if ((4 & a2) !== 0)
    return F = 13, 4;
  var b2 = 24 & a2;
  if (b2 !== 0)
    return F = 12, b2;
  if ((a2 & 32) !== 0)
    return F = 11, 32;
  b2 = 192 & a2;
  if (b2 !== 0)
    return F = 10, b2;
  if ((a2 & 256) !== 0)
    return F = 9, 256;
  b2 = 3584 & a2;
  if (b2 !== 0)
    return F = 8, b2;
  if ((a2 & 4096) !== 0)
    return F = 7, 4096;
  b2 = 4186112 & a2;
  if (b2 !== 0)
    return F = 6, b2;
  b2 = 62914560 & a2;
  if (b2 !== 0)
    return F = 5, b2;
  if (a2 & 67108864)
    return F = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F = 3, 134217728;
  b2 = 805306368 & a2;
  if (b2 !== 0)
    return F = 2, b2;
  if ((1073741824 & a2) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
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
function Tc(a2) {
  switch (a2) {
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
      throw Error(y(358, a2));
  }
}
function Uc(a2, b2) {
  var c3 = a2.pendingLanes;
  if (c3 === 0)
    return F = 0;
  var d3 = 0, e3 = 0, f2 = a2.expiredLanes, g3 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (f2 !== 0)
    d3 = f2, e3 = F = 15;
  else if (f2 = c3 & 134217727, f2 !== 0) {
    var k3 = f2 & ~g3;
    k3 !== 0 ? (d3 = Rc(k3), e3 = F) : (h2 &= f2, h2 !== 0 && (d3 = Rc(h2), e3 = F));
  } else
    f2 = c3 & ~g3, f2 !== 0 ? (d3 = Rc(f2), e3 = F) : h2 !== 0 && (d3 = Rc(h2), e3 = F);
  if (d3 === 0)
    return 0;
  d3 = 31 - Vc(d3);
  d3 = c3 & ((0 > d3 ? 0 : 1 << d3) << 1) - 1;
  if (b2 !== 0 && b2 !== d3 && (b2 & g3) === 0) {
    Rc(b2);
    if (e3 <= F)
      return b2;
    F = e3;
  }
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d3; 0 < b2; )
      c3 = 31 - Vc(b2), e3 = 1 << c3, d3 |= a2[c3], b2 &= ~e3;
  return d3;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c3 = 0; 31 > c3; c3++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c3) {
  a2.pendingLanes |= b2;
  var d3 = b2 - 1;
  a2.suspendedLanes &= d3;
  a2.pingedLanes &= d3;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c3;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a2, b2, c3, d3) {
  Kb || Ib();
  var e3 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e3, a2, b2, c3, d3);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c3, d3) {
  ed(dd, hd.bind(null, a2, b2, c3, d3));
}
function hd(a2, b2, c3, d3) {
  if (fd) {
    var e3;
    if ((e3 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c3, d3), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c3, d3);
      if (f2 === null)
        e3 && sc(a2, d3);
      else {
        if (e3) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c3, d3);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c3, d3))
            return;
          sc(a2, d3);
        }
        jd(a2, b2, d3, null, c3);
      }
    }
  }
}
function yc(a2, b2, c3, d3) {
  var e3 = xb(d3);
  e3 = wc(e3);
  if (e3 !== null) {
    var f2 = Zb(e3);
    if (f2 === null)
      e3 = null;
    else {
      var g3 = f2.tag;
      if (g3 === 13) {
        e3 = $b(f2);
        if (e3 !== null)
          return e3;
        e3 = null;
      } else if (g3 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e3 = null;
      } else
        f2 !== e3 && (e3 = null);
    }
  }
  jd(a2, b2, d3, e3, c3);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c3 = b2.length, d3, e3 = "value" in kd ? kd.value : kd.textContent, f2 = e3.length;
  for (a2 = 0; a2 < c3 && b2[a2] === e3[a2]; a2++)
    ;
  var g3 = c3 - a2;
  for (d3 = 1; d3 <= g3 && b2[c3 - d3] === e3[f2 - d3]; d3++)
    ;
  return md = e3.slice(a2, 1 < d3 ? 1 - d3 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d3, e3, f2, g3) {
    this._reactName = b3;
    this._targetInst = e3;
    this.type = d3;
    this.nativeEvent = f2;
    this.target = g3;
    this.currentTarget = null;
    for (var c3 in a2)
      a2.hasOwnProperty(c3) && (b3 = a2[c3], this[c3] = b3 ? b3(f2) : f2[c3]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b2.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b2;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
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
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
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
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a2.type] : b2 === "textarea" ? true : false;
}
function ne(a2, b2, c3, d3) {
  Eb(d3);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c3 = new td("onChange", "change", null, c3, d3), a2.push({event: c3, listeners: b2}));
}
var pe = null;
var qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if (a2 === "change")
    return b2;
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
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c3) {
  a2 === "focusin" ? (Ae(), pe = b2, qe = c3, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b2) {
  if (a2 === "click")
    return te(b2);
}
function Fe(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c3 = Object.keys(a2), d3 = Object.keys(b2);
  if (c3.length !== d3.length)
    return false;
  for (d3 = 0; d3 < c3.length; d3++)
    if (!Ie.call(b2, c3[d3]) || !He(a2[c3[d3]], b2[c3[d3]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c3 = Ke(a2);
  a2 = 0;
  for (var d3; c3; ) {
    if (c3.nodeType === 3) {
      d3 = a2 + c3.textContent.length;
      if (a2 <= b2 && d3 >= b2)
        return {node: c3, offset: b2 - a2};
      a2 = d3;
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
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c3 = typeof b2.contentWindow.location.href === "string";
    } catch (d3) {
      c3 = false;
    }
    if (c3)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a2, b2, c3) {
  var d3 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
  Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Oe(d3) ? d3 = {start: d3.selectionStart, end: d3.selectionEnd} : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = {anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset}), Se && Je(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b2 = new td("onSelect", "select", null, b2, c3), a2.push({event: b2, listeners: d3}), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
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
function Ze(a2, b2, c3) {
  var d3 = a2.type || "unknown-event";
  a2.currentTarget = c3;
  Yb(d3, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c3 = 0; c3 < a2.length; c3++) {
    var d3 = a2[c3], e3 = d3.event;
    d3 = d3.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g3 = d3.length - 1; 0 <= g3; g3--) {
          var h2 = d3[g3], k3 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k3 !== f2 && e3.isPropagationStopped())
            break a;
          Ze(e3, h2, l2);
          f2 = k3;
        }
      else
        for (g3 = 0; g3 < d3.length; g3++) {
          h2 = d3[g3];
          k3 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k3 !== f2 && e3.isPropagationStopped())
            break a;
          Ze(e3, h2, l2);
          f2 = k3;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G(a2, b2) {
  var c3 = $e(b2), d3 = a2 + "__bubble";
  c3.has(d3) || (af(b2, a2, 2, false), c3.add(d3));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c3, d3) {
  var e3 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c3;
  a2 === "selectionchange" && c3.nodeType !== 9 && (f2 = c3.ownerDocument);
  if (d3 !== null && !b2 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e3 |= 2;
    f2 = d3;
  }
  var g3 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g3.has(h2) || (b2 && (e3 |= 4), af(f2, a2, e3, b2), g3.add(h2));
}
function af(a2, b2, c3, d3) {
  var e3 = Nc.get(b2);
  switch (e3 === void 0 ? 2 : e3) {
    case 0:
      e3 = gd;
      break;
    case 1:
      e3 = id;
      break;
    default:
      e3 = hd;
  }
  c3 = e3.bind(null, b2, c3, a2);
  e3 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e3 = true);
  d3 ? e3 !== void 0 ? a2.addEventListener(b2, c3, {capture: true, passive: e3}) : a2.addEventListener(b2, c3, true) : e3 !== void 0 ? a2.addEventListener(b2, c3, {passive: e3}) : a2.addEventListener(b2, c3, false);
}
function jd(a2, b2, c3, d3, e3) {
  var f2 = d3;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d3 !== null)
    a:
      for (; ; ) {
        if (d3 === null)
          return;
        var g3 = d3.tag;
        if (g3 === 3 || g3 === 4) {
          var h2 = d3.stateNode.containerInfo;
          if (h2 === e3 || h2.nodeType === 8 && h2.parentNode === e3)
            break;
          if (g3 === 4)
            for (g3 = d3.return; g3 !== null; ) {
              var k3 = g3.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g3.stateNode.containerInfo, k3 === e3 || k3.nodeType === 8 && k3.parentNode === e3)
                  return;
              }
              g3 = g3.return;
            }
          for (; h2 !== null; ) {
            g3 = wc(h2);
            if (g3 === null)
              return;
            k3 = g3.tag;
            if (k3 === 5 || k3 === 6) {
              d3 = f2 = g3;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d3 = d3.return;
      }
  Nb(function() {
    var d4 = f2, e4 = xb(c3), g4 = [];
    a: {
      var h3 = Mc.get(a2);
      if (h3 !== void 0) {
        var k4 = td, x3 = a2;
        switch (a2) {
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
        var w2 = (b2 & 4) !== 0, z3 = !w2 && a2 === "scroll", u = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t3 = d4, q3; t3 !== null; ) {
          q3 = t3;
          var v2 = q3.stateNode;
          q3.tag === 5 && v2 !== null && (q3 = v2, u !== null && (v2 = Ob(t3, u), v2 != null && w2.push(ef(t3, v2, q3))));
          if (z3)
            break;
          t3 = t3.return;
        }
        0 < w2.length && (h3 = new k4(h3, x3, null, c3, e4), g4.push({event: h3, listeners: w2}));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k4 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x3 = c3.relatedTarget || c3.fromElement) && (wc(x3) || x3[ff]))
          break a;
        if (k4 || h3) {
          h3 = e4.window === e4 ? e4 : (h3 = e4.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k4) {
            if (x3 = c3.relatedTarget || c3.toElement, k4 = d4, x3 = x3 ? wc(x3) : null, x3 !== null && (z3 = Zb(x3), x3 !== z3 || x3.tag !== 5 && x3.tag !== 6))
              x3 = null;
          } else
            k4 = null, x3 = d4;
          if (k4 !== x3) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u = "onMouseEnter";
            t3 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u = "onPointerEnter", t3 = "pointer";
            z3 = k4 == null ? h3 : ue(k4);
            q3 = x3 == null ? h3 : ue(x3);
            h3 = new w2(v2, t3 + "leave", k4, c3, e4);
            h3.target = z3;
            h3.relatedTarget = q3;
            v2 = null;
            wc(e4) === d4 && (w2 = new w2(u, t3 + "enter", x3, c3, e4), w2.target = q3, w2.relatedTarget = z3, v2 = w2);
            z3 = v2;
            if (k4 && x3)
              b: {
                w2 = k4;
                u = x3;
                t3 = 0;
                for (q3 = w2; q3; q3 = gf(q3))
                  t3++;
                q3 = 0;
                for (v2 = u; v2; v2 = gf(v2))
                  q3++;
                for (; 0 < t3 - q3; )
                  w2 = gf(w2), t3--;
                for (; 0 < q3 - t3; )
                  u = gf(u), q3--;
                for (; t3--; ) {
                  if (w2 === u || u !== null && w2 === u.alternate)
                    break b;
                  w2 = gf(w2);
                  u = gf(u);
                }
                w2 = null;
              }
            else
              w2 = null;
            k4 !== null && hf(g4, h3, k4, w2, false);
            x3 !== null && z3 !== null && hf(g4, z3, x3, w2, true);
          }
        }
      }
      a: {
        h3 = d4 ? ue(d4) : window;
        k4 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k4 = h3.nodeName) && k4.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a2, d4))) {
          ne(g4, J2, c3, e4);
          break a;
        }
        K2 && K2(a2, h3, d4);
        a2 === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d4 ? ue(d4) : window;
      switch (a2) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d4, Se = null;
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
          Ue(g4, c3, e4);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g4, c3, e4);
      }
      var Q2;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a2, c3) && (L2 = "onCompositionEnd") : a2 === "keydown" && c3.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c3.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e4, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d4, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c3, e4), g4.push({event: L2, listeners: K2}), Q2 ? L2.data = Q2 : (Q2 = he(c3), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a2, c3) : ke(a2, c3))
        d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e4 = new Ld("onBeforeInput", "beforeinput", null, c3, e4), g4.push({event: e4, listeners: d4}), e4.data = Q2);
    }
    se(g4, b2);
  });
}
function ef(a2, b2, c3) {
  return {instance: a2, listener: b2, currentTarget: c3};
}
function oe(a2, b2) {
  for (var c3 = b2 + "Capture", d3 = []; a2 !== null; ) {
    var e3 = a2, f2 = e3.stateNode;
    e3.tag === 5 && f2 !== null && (e3 = f2, f2 = Ob(a2, c3), f2 != null && d3.unshift(ef(a2, f2, e3)), f2 = Ob(a2, b2), f2 != null && d3.push(ef(a2, f2, e3)));
    a2 = a2.return;
  }
  return d3;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b2, c3, d3, e3) {
  for (var f2 = b2._reactName, g3 = []; c3 !== null && c3 !== d3; ) {
    var h2 = c3, k3 = h2.alternate, l2 = h2.stateNode;
    if (k3 !== null && k3 === d3)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e3 ? (k3 = Ob(c3, f2), k3 != null && g3.unshift(ef(c3, k3, h2))) : e3 || (k3 = Ob(c3, f2), k3 != null && g3.push(ef(c3, k3, h2))));
    c3 = c3.return;
  }
  g3.length !== 0 && a2.push({event: b2, listeners: g3});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c3 = a2.data;
      if (c3 === "$" || c3 === "$!" || c3 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c3 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return {$$typeof: Ga, toString: a2, valueOf: a2};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c3 = a2.parentNode; c3; ) {
    if (b2 = c3[ff] || c3[wf]) {
      c3 = b2.alternate;
      if (b2.child !== null || c3 !== null && c3.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c3 = a2[wf])
            return c3;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c3;
    c3 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  b2 === void 0 && (b2 = a2[yf] = new Set());
  return b2;
}
var zf = [];
var Af = -1;
function Bf(a2) {
  return {current: a2};
}
function H(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a2, b2) {
  var c3 = a2.type.contextTypes;
  if (!c3)
    return Cf;
  var d3 = a2.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d3.__reactInternalMemoizedMaskedChildContext;
  var e3 = {}, f2;
  for (f2 in c3)
    e3[f2] = b2[f2];
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e3);
  return e3;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a2, b2, c3) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b2);
  I(N, c3);
}
function If(a2, b2, c3) {
  var d3 = a2.stateNode;
  a2 = b2.childContextTypes;
  if (typeof d3.getChildContext !== "function")
    return c3;
  d3 = d3.getChildContext();
  for (var e3 in d3)
    if (!(e3 in a2))
      throw Error(y(108, Ra(b2) || "Unknown", e3));
  return objectAssign({}, c3, d3);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a2);
  I(N, N.current);
  return true;
}
function Kf(a2, b2, c3) {
  var d3 = a2.stateNode;
  if (!d3)
    throw Error(y(169));
  c3 ? (a2 = If(a2, b2, Df), d3.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
  I(N, c3);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
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
function fg(a2) {
  switch (a2) {
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
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c3) {
  a2 = fg(a2);
  return Of(a2, b2, c3);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c3 = b2[a2];
          do
            c3 = c3(true);
          while (c3 !== null);
        }
      });
      ag = null;
    } catch (c3) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c3;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = objectAssign({}, b2);
    a2 = a2.defaultProps;
    for (var c3 in a2)
      b2[c3] === void 0 && (b2[c3] = a2[c3]);
    return b2;
  }
  return b2;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; a2 !== null; ) {
    var c3 = a2.alternate;
    if ((a2.childLanes & b2) === b2)
      if (c3 === null || (c3.childLanes & b2) === b2)
        break;
      else
        c3.childLanes |= b2;
    else
      a2.childLanes |= b2, c3 !== null && (c3.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a2, b2 = 1073741823;
    b2 = {context: a2, observedBits: b2, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b2;
      ng.dependencies = {lanes: 0, firstContext: b2, responders: null};
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = {baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = {baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects});
}
function zg(a2, b2) {
  return {eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c3 = a2.pending;
    c3 === null ? b2.next = b2 : (b2.next = c3.next, c3.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c3 = a2.updateQueue, d3 = a2.alternate;
  if (d3 !== null && (d3 = d3.updateQueue, c3 === d3)) {
    var e3 = null, f2 = null;
    c3 = c3.firstBaseUpdate;
    if (c3 !== null) {
      do {
        var g3 = {eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null};
        f2 === null ? e3 = f2 = g3 : f2 = f2.next = g3;
        c3 = c3.next;
      } while (c3 !== null);
      f2 === null ? e3 = f2 = b2 : f2 = f2.next = b2;
    } else
      e3 = f2 = b2;
    c3 = {baseState: d3.baseState, firstBaseUpdate: e3, lastBaseUpdate: f2, shared: d3.shared, effects: d3.effects};
    a2.updateQueue = c3;
    return;
  }
  a2 = c3.lastBaseUpdate;
  a2 === null ? c3.firstBaseUpdate = b2 : a2.next = b2;
  c3.lastBaseUpdate = b2;
}
function Cg(a2, b2, c3, d3) {
  var e3 = a2.updateQueue;
  wg = false;
  var f2 = e3.firstBaseUpdate, g3 = e3.lastBaseUpdate, h2 = e3.shared.pending;
  if (h2 !== null) {
    e3.shared.pending = null;
    var k3 = h2, l2 = k3.next;
    k3.next = null;
    g3 === null ? f2 = l2 : g3.next = l2;
    g3 = k3;
    var n3 = a2.alternate;
    if (n3 !== null) {
      n3 = n3.updateQueue;
      var A3 = n3.lastBaseUpdate;
      A3 !== g3 && (A3 === null ? n3.firstBaseUpdate = l2 : A3.next = l2, n3.lastBaseUpdate = k3);
    }
  }
  if (f2 !== null) {
    A3 = e3.baseState;
    g3 = 0;
    n3 = l2 = k3 = null;
    do {
      h2 = f2.lane;
      var p3 = f2.eventTime;
      if ((d3 & h2) === h2) {
        n3 !== null && (n3 = n3.next = {
          eventTime: p3,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a2, x3 = f2;
          h2 = b2;
          p3 = c3;
          switch (x3.tag) {
            case 1:
              C2 = x3.payload;
              if (typeof C2 === "function") {
                A3 = C2.call(p3, A3, h2);
                break a;
              }
              A3 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x3.payload;
              h2 = typeof C2 === "function" ? C2.call(p3, A3, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A3 = objectAssign({}, A3, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a2.flags |= 32, h2 = e3.effects, h2 === null ? e3.effects = [f2] : h2.push(f2));
      } else
        p3 = {eventTime: p3, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null}, n3 === null ? (l2 = n3 = p3, k3 = A3) : n3 = n3.next = p3, g3 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e3.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e3.lastBaseUpdate = h2, e3.shared.pending = null;
    } while (1);
    n3 === null && (k3 = A3);
    e3.baseState = k3;
    e3.firstBaseUpdate = l2;
    e3.lastBaseUpdate = n3;
    Dg |= g3;
    a2.lanes = g3;
    a2.memoizedState = A3;
  }
}
function Eg(a2, b2, c3) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d3 = a2[b2], e3 = d3.callback;
      if (e3 !== null) {
        d3.callback = null;
        d3 = c3;
        if (typeof e3 !== "function")
          throw Error(y(191, e3));
        e3.call(d3);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a2, b2, c3, d3) {
  b2 = a2.memoizedState;
  c3 = c3(d3, b2);
  c3 = c3 === null || c3 === void 0 ? b2 : objectAssign({}, b2, c3);
  a2.memoizedState = c3;
  a2.lanes === 0 && (a2.updateQueue.baseState = c3);
}
var Kg = {isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c3) {
  a2 = a2._reactInternals;
  var d3 = Hg(), e3 = Ig(a2), f2 = zg(d3, e3);
  f2.payload = b2;
  c3 !== void 0 && c3 !== null && (f2.callback = c3);
  Ag(a2, f2);
  Jg(a2, e3, d3);
}, enqueueReplaceState: function(a2, b2, c3) {
  a2 = a2._reactInternals;
  var d3 = Hg(), e3 = Ig(a2), f2 = zg(d3, e3);
  f2.tag = 1;
  f2.payload = b2;
  c3 !== void 0 && c3 !== null && (f2.callback = c3);
  Ag(a2, f2);
  Jg(a2, e3, d3);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c3 = Hg(), d3 = Ig(a2), e3 = zg(c3, d3);
  e3.tag = 2;
  b2 !== void 0 && b2 !== null && (e3.callback = b2);
  Ag(a2, e3);
  Jg(a2, d3, c3);
}};
function Lg(a2, b2, c3, d3, e3, f2, g3) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d3, f2, g3) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c3, d3) || !Je(e3, f2) : true;
}
function Mg(a2, b2, c3) {
  var d3 = false, e3 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e3 = Ff(b2) ? Df : M.current, d3 = b2.contextTypes, f2 = (d3 = d3 !== null && d3 !== void 0) ? Ef(a2, e3) : Cf);
  b2 = new b2(c3, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e3, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c3, d3) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c3, d3);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c3, d3);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c3, d3) {
  var e3 = a2.stateNode;
  e3.props = c3;
  e3.state = a2.memoizedState;
  e3.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e3.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e3.context = Ef(a2, f2));
  Cg(a2, c3, e3, d3);
  e3.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a2, b2, f2, c3), e3.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e3.getSnapshotBeforeUpdate === "function" || typeof e3.UNSAFE_componentWillMount !== "function" && typeof e3.componentWillMount !== "function" || (b2 = e3.state, typeof e3.componentWillMount === "function" && e3.componentWillMount(), typeof e3.UNSAFE_componentWillMount === "function" && e3.UNSAFE_componentWillMount(), b2 !== e3.state && Kg.enqueueReplaceState(e3, e3.state, null), Cg(a2, c3, e3, d3), e3.state = a2.memoizedState);
  typeof e3.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c3) {
  a2 = c3.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c3._owner) {
      c3 = c3._owner;
      if (c3) {
        if (c3.tag !== 1)
          throw Error(y(309));
        var d3 = c3.stateNode;
      }
      if (!d3)
        throw Error(y(147, a2));
      var e3 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e3)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d3.refs;
        b3 === Fg && (b3 = d3.refs = {});
        a3 === null ? delete b3[e3] : b3[e3] = a3;
      };
      b2._stringRef = e3;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(y(284));
    if (!c3._owner)
      throw Error(y(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if (a2.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c4) {
    if (a2) {
      var d4 = b3.lastEffect;
      d4 !== null ? (d4.nextEffect = c4, b3.lastEffect = c4) : b3.firstEffect = b3.lastEffect = c4;
      c4.nextEffect = null;
      c4.flags = 8;
    }
  }
  function c3(c4, d4) {
    if (!a2)
      return null;
    for (; d4 !== null; )
      b2(c4, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a3, b3) {
    for (a3 = new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e3(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c4, d4) {
    b3.index = d4;
    if (!a2)
      return c4;
    d4 = b3.alternate;
    if (d4 !== null)
      return d4 = d4.index, d4 < c4 ? (b3.flags = 2, c4) : d4;
    b3.flags = 2;
    return c4;
  }
  function g3(b3) {
    a2 && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c4, d4) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c4, a3.mode, d4), b3.return = a3, b3;
    b3 = e3(b3, c4);
    b3.return = a3;
    return b3;
  }
  function k3(a3, b3, c4, d4) {
    if (b3 !== null && b3.elementType === c4.type)
      return d4 = e3(b3, c4.props), d4.ref = Qg(a3, b3, c4), d4.return = a3, d4;
    d4 = Vg(c4.type, c4.key, c4.props, null, a3.mode, d4);
    d4.ref = Qg(a3, b3, c4);
    d4.return = a3;
    return d4;
  }
  function l2(a3, b3, c4, d4) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c4.containerInfo || b3.stateNode.implementation !== c4.implementation)
      return b3 = Wg(c4, a3.mode, d4), b3.return = a3, b3;
    b3 = e3(b3, c4.children || []);
    b3.return = a3;
    return b3;
  }
  function n3(a3, b3, c4, d4, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c4, a3.mode, d4, f3), b3.return = a3, b3;
    b3 = e3(b3, c4);
    b3.return = a3;
    return b3;
  }
  function A3(a3, b3, c4) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a3.mode, c4), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c4 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c4), c4.ref = Qg(a3, null, b3), c4.return = a3, c4;
        case ta:
          return b3 = Wg(b3, a3.mode, c4), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a3.mode, c4, null), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p3(a3, b3, c4, d4) {
    var e4 = b3 !== null ? b3.key : null;
    if (typeof c4 === "string" || typeof c4 === "number")
      return e4 !== null ? null : h2(a3, b3, "" + c4, d4);
    if (typeof c4 === "object" && c4 !== null) {
      switch (c4.$$typeof) {
        case sa:
          return c4.key === e4 ? c4.type === ua ? n3(a3, b3, c4.props.children, d4, e4) : k3(a3, b3, c4, d4) : null;
        case ta:
          return c4.key === e4 ? l2(a3, b3, c4, d4) : null;
      }
      if (Pg(c4) || La(c4))
        return e4 !== null ? null : n3(a3, b3, c4, d4, null);
      Rg(a3, c4);
    }
    return null;
  }
  function C2(a3, b3, c4, d4, e4) {
    if (typeof d4 === "string" || typeof d4 === "number")
      return a3 = a3.get(c4) || null, h2(b3, a3, "" + d4, e4);
    if (typeof d4 === "object" && d4 !== null) {
      switch (d4.$$typeof) {
        case sa:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, d4.type === ua ? n3(b3, a3, d4.props.children, e4, d4.key) : k3(b3, a3, d4, e4);
        case ta:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, l2(b3, a3, d4, e4);
      }
      if (Pg(d4) || La(d4))
        return a3 = a3.get(c4) || null, n3(b3, a3, d4, e4, null);
      Rg(b3, d4);
    }
    return null;
  }
  function x3(e4, g4, h3, k4) {
    for (var l3 = null, t3 = null, u = g4, z3 = g4 = 0, q3 = null; u !== null && z3 < h3.length; z3++) {
      u.index > z3 ? (q3 = u, u = null) : q3 = u.sibling;
      var n4 = p3(e4, u, h3[z3], k4);
      if (n4 === null) {
        u === null && (u = q3);
        break;
      }
      a2 && u && n4.alternate === null && b2(e4, u);
      g4 = f2(n4, g4, z3);
      t3 === null ? l3 = n4 : t3.sibling = n4;
      t3 = n4;
      u = q3;
    }
    if (z3 === h3.length)
      return c3(e4, u), l3;
    if (u === null) {
      for (; z3 < h3.length; z3++)
        u = A3(e4, h3[z3], k4), u !== null && (g4 = f2(u, g4, z3), t3 === null ? l3 = u : t3.sibling = u, t3 = u);
      return l3;
    }
    for (u = d3(e4, u); z3 < h3.length; z3++)
      q3 = C2(u, e4, z3, h3[z3], k4), q3 !== null && (a2 && q3.alternate !== null && u.delete(q3.key === null ? z3 : q3.key), g4 = f2(q3, g4, z3), t3 === null ? l3 = q3 : t3.sibling = q3, t3 = q3);
    a2 && u.forEach(function(a3) {
      return b2(e4, a3);
    });
    return l3;
  }
  function w2(e4, g4, h3, k4) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t3 = l3 = null, u = g4, z3 = g4 = 0, q3 = null, n4 = h3.next(); u !== null && !n4.done; z3++, n4 = h3.next()) {
      u.index > z3 ? (q3 = u, u = null) : q3 = u.sibling;
      var w3 = p3(e4, u, n4.value, k4);
      if (w3 === null) {
        u === null && (u = q3);
        break;
      }
      a2 && u && w3.alternate === null && b2(e4, u);
      g4 = f2(w3, g4, z3);
      t3 === null ? l3 = w3 : t3.sibling = w3;
      t3 = w3;
      u = q3;
    }
    if (n4.done)
      return c3(e4, u), l3;
    if (u === null) {
      for (; !n4.done; z3++, n4 = h3.next())
        n4 = A3(e4, n4.value, k4), n4 !== null && (g4 = f2(n4, g4, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
      return l3;
    }
    for (u = d3(e4, u); !n4.done; z3++, n4 = h3.next())
      n4 = C2(u, e4, z3, n4.value, k4), n4 !== null && (a2 && n4.alternate !== null && u.delete(n4.key === null ? z3 : n4.key), g4 = f2(n4, g4, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
    a2 && u.forEach(function(a3) {
      return b2(e4, a3);
    });
    return l3;
  }
  return function(a3, d4, f3, h3) {
    var k4 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k4 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k4 = d4; k4 !== null; ) {
              if (k4.key === l3) {
                switch (k4.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c3(a3, k4.sibling);
                      d4 = e3(k4, f3.props.children);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f3.type) {
                      c3(a3, k4.sibling);
                      d4 = e3(k4, f3.props);
                      d4.ref = Qg(a3, k4, f3);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                }
                c3(a3, k4);
                break;
              } else
                b2(a3, k4);
              k4 = k4.sibling;
            }
            f3.type === ua ? (d4 = Xg(f3.props.children, a3.mode, h3, f3.key), d4.return = a3, a3 = d4) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d4, f3), h3.return = a3, a3 = h3);
          }
          return g3(a3);
        case ta:
          a: {
            for (k4 = f3.key; d4 !== null; ) {
              if (d4.key === k4)
                if (d4.tag === 4 && d4.stateNode.containerInfo === f3.containerInfo && d4.stateNode.implementation === f3.implementation) {
                  c3(a3, d4.sibling);
                  d4 = e3(d4, f3.children || []);
                  d4.return = a3;
                  a3 = d4;
                  break a;
                } else {
                  c3(a3, d4);
                  break;
                }
              else
                b2(a3, d4);
              d4 = d4.sibling;
            }
            d4 = Wg(f3, a3.mode, h3);
            d4.return = a3;
            a3 = d4;
          }
          return g3(a3);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d4 !== null && d4.tag === 6 ? (c3(a3, d4.sibling), d4 = e3(d4, f3), d4.return = a3, a3 = d4) : (c3(a3, d4), d4 = Ug(f3, a3.mode, h3), d4.return = a3, a3 = d4), g3(a3);
    if (Pg(f3))
      return x3(a3, d4, f3, h3);
    if (La(f3))
      return w2(a3, d4, f3, h3);
    l3 && Rg(a3, f3);
    if (typeof f3 === "undefined" && !k4)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a3.type) || "Component"));
      }
    return c3(a3, d4);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y(174));
  return a2;
}
function eh(a2, b2) {
  I(ch, b2);
  I(bh, a2);
  I(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c3 = mb(b2, a2.type);
  b2 !== c3 && (I(bh, a2), I(ah, c3));
}
function hh(a2) {
  bh.current === a2 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c3 = b2.memoizedState;
      if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a2, b2) {
  var c3 = nh(5, null, null, 0);
  c3.elementType = "DELETED";
  c3.type = "DELETED";
  c3.stateNode = b2;
  c3.return = a2;
  c3.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c3, a2.lastEffect = c3) : a2.firstEffect = a2.lastEffect = c3;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c3 = a2.type;
      b2 = b2.nodeType !== 1 || c3.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c3 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c3.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c3);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c3 = a2.data;
          if (c3 === "/$") {
            if (b2 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
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
function Bh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c3 = 0; c3 < b2.length && c3 < a2.length; c3++)
    if (!He(a2[c3], b2[c3]))
      return false;
  return true;
}
function Ch(a2, b2, c3, d3, e3, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c3(d3, e3);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c3(d3, e3);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y(300));
  return a2;
}
function Hh() {
  var a2 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (S === null) {
    var a2 = R.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a2;
  else {
    if (a2 === null)
      throw Error(y(310));
    S = a2;
    a2 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c3 = b2.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = S, e3 = d3.baseQueue, f2 = c3.pending;
  if (f2 !== null) {
    if (e3 !== null) {
      var g3 = e3.next;
      e3.next = f2.next;
      f2.next = g3;
    }
    d3.baseQueue = e3 = f2;
    c3.pending = null;
  }
  if (e3 !== null) {
    e3 = e3.next;
    d3 = d3.baseState;
    var h2 = g3 = f2 = null, k3 = e3;
    do {
      var l2 = k3.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = {lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null}), d3 = k3.eagerReducer === a2 ? k3.eagerState : a2(d3, k3.action);
      else {
        var n3 = {
          lane: l2,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h2 === null ? (g3 = h2 = n3, f2 = d3) : h2 = h2.next = n3;
        R.lanes |= l2;
        Dg |= l2;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e3);
    h2 === null ? f2 = d3 : h2.next = g3;
    He(d3, b2.memoizedState) || (ug = true);
    b2.memoizedState = d3;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c3.lastRenderedState = d3;
  }
  return [b2.memoizedState, c3.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c3 = b2.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = c3.dispatch, e3 = c3.pending, f2 = b2.memoizedState;
  if (e3 !== null) {
    c3.pending = null;
    var g3 = e3 = e3.next;
    do
      f2 = a2(f2, g3.action), g3 = g3.next;
    while (g3 !== e3);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c3.lastRenderedState = f2;
  }
  return [f2, d3];
}
function Mh(a2, b2, c3) {
  var d3 = b2._getVersion;
  d3 = d3(b2._source);
  var e3 = b2._workInProgressVersionPrimary;
  if (e3 !== null)
    a2 = e3 === d3;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d3, th.push(b2);
  if (a2)
    return c3(b2._source);
  th.push(b2);
  throw Error(y(350));
}
function Nh(a2, b2, c3, d3) {
  var e3 = U;
  if (e3 === null)
    throw Error(y(349));
  var f2 = b2._getVersion, g3 = f2(b2._source), h2 = vh.current, k3 = h2.useState(function() {
    return Mh(e3, b2, c3);
  }), l2 = k3[1], n3 = k3[0];
  k3 = T;
  var A3 = a2.memoizedState, p3 = A3.refs, C2 = p3.getSnapshot, x3 = A3.source;
  A3 = A3.subscribe;
  var w2 = R;
  a2.memoizedState = {refs: p3, source: b2, subscribe: d3};
  h2.useEffect(function() {
    p3.getSnapshot = c3;
    p3.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g3, a3)) {
      a3 = c3(b2._source);
      He(n3, a3) || (l2(a3), a3 = Ig(w2), e3.mutableReadLanes |= a3 & e3.pendingLanes);
      a3 = e3.mutableReadLanes;
      e3.entangledLanes |= a3;
      for (var d4 = e3.entanglements, h3 = a3; 0 < h3; ) {
        var k4 = 31 - Vc(h3), v2 = 1 << k4;
        d4[k4] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c3, b2, d3]);
  h2.useEffect(function() {
    return d3(b2._source, function() {
      var a3 = p3.getSnapshot, c4 = p3.setSnapshot;
      try {
        c4(a3(b2._source));
        var d4 = Ig(w2);
        e3.mutableReadLanes |= d4 & e3.pendingLanes;
      } catch (q3) {
        c4(function() {
          throw q3;
        });
      }
    });
  }, [b2, d3]);
  He(C2, c3) && He(x3, b2) && He(A3, d3) || (a2 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n3}, a2.dispatch = l2 = Oh.bind(null, R, a2), k3.queue = a2, k3.baseQueue = null, n3 = Mh(e3, b2, c3), k3.memoizedState = k3.baseState = n3);
  return n3;
}
function Ph(a2, b2, c3) {
  var d3 = Ih();
  return Nh(d3, a2, b2, c3);
}
function Qh(a2) {
  var b2 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2};
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c3, d3) {
  a2 = {tag: a2, create: b2, destroy: c3, deps: d3, next: null};
  b2 = R.updateQueue;
  b2 === null ? (b2 = {lastEffect: null}, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c3 = b2.lastEffect, c3 === null ? b2.lastEffect = a2.next = a2 : (d3 = c3.next, c3.next = a2, a2.next = d3, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = {current: a2};
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c3, d3) {
  var e3 = Hh();
  R.flags |= a2;
  e3.memoizedState = Rh(1 | b2, c3, void 0, d3 === void 0 ? null : d3);
}
function Vh(a2, b2, c3, d3) {
  var e3 = Ih();
  d3 = d3 === void 0 ? null : d3;
  var f2 = void 0;
  if (S !== null) {
    var g3 = S.memoizedState;
    f2 = g3.destroy;
    if (d3 !== null && Bh(d3, g3.deps)) {
      Rh(b2, c3, f2, d3);
      return;
    }
  }
  R.flags |= a2;
  e3.memoizedState = Rh(1 | b2, c3, f2, d3);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c3);
}
function ai() {
}
function bi(a2, b2) {
  var c3 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d3 = c3.memoizedState;
  if (d3 !== null && b2 !== null && Bh(b2, d3[1]))
    return d3[0];
  c3.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c3 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d3 = c3.memoizedState;
  if (d3 !== null && b2 !== null && Bh(b2, d3[1]))
    return d3[0];
  a2 = a2();
  c3.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c3 = eg();
  gg(98 > c3 ? 98 : c3, function() {
    a2(true);
  });
  gg(97 < c3 ? 97 : c3, function() {
    var c4 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c4;
    }
  });
}
function Oh(a2, b2, c3) {
  var d3 = Hg(), e3 = Ig(a2), f2 = {lane: e3, action: c3, eagerReducer: null, eagerState: null, next: null}, g3 = b2.pending;
  g3 === null ? f2.next = f2 : (f2.next = g3.next, g3.next = f2);
  b2.pending = f2;
  g3 = a2.alternate;
  if (a2 === R || g3 !== null && g3 === R)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g3 === null || g3.lanes === 0) && (g3 = b2.lastRenderedReducer, g3 !== null))
      try {
        var h2 = b2.lastRenderedState, k3 = g3(h2, c3);
        f2.eagerReducer = g3;
        f2.eagerState = k3;
        if (He(k3, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e3, d3);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a2, b2) {
  Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a2), c3);
}, useLayoutEffect: function(a2, b2) {
  return Uh(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c3 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c3.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c3) {
  var d3 = Hh();
  b2 = c3 !== void 0 ? c3(b2) : b2;
  d3.memoizedState = d3.baseState = b2;
  a2 = d3.queue = {pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2};
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [d3.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Qh(a2), c3 = b2[0], d3 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Qh(false), b2 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b2];
}, useMutableSource: function(a2, b2, c3) {
  var d3 = Hh();
  d3.memoizedState = {refs: {getSnapshot: b2, setSnapshot: null}, source: a2, subscribe: c3};
  return Nh(d3, a2, b2, c3);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b2 = uf(function() {
      a2 || (a2 = true, c3("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c3 = Qh(b2)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c3("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Kh(Jh), c3 = b2[0], d3 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Lh(Jh), c3 = b2[0], d3 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a2, b2, c3, d3) {
  b2.child = a2 === null ? Zg(b2, null, c3, d3) : Yg(b2, a2.child, c3, d3);
}
function gi(a2, b2, c3, d3, e3) {
  c3 = c3.render;
  var f2 = b2.ref;
  tg(b2, e3);
  d3 = Ch(a2, b2, c3, d3, f2, e3);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e3, hi(a2, b2, e3);
  b2.flags |= 1;
  fi(a2, b2, d3, e3);
  return b2.child;
}
function ii(a2, b2, c3, d3, e3, f2) {
  if (a2 === null) {
    var g3 = c3.type;
    if (typeof g3 === "function" && !ji(g3) && g3.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
      return b2.tag = 15, b2.type = g3, ki(a2, b2, g3, d3, e3, f2);
    a2 = Vg(c3.type, null, d3, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g3 = a2.child;
  if ((e3 & f2) === 0 && (e3 = g3.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e3, d3) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g3, d3);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c3, d3, e3, f2) {
  if (a2 !== null && Je(a2.memoizedProps, d3) && a2.ref === b2.ref)
    if (ug = false, (f2 & e3) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c3, d3, f2);
}
function mi(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = d3.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d3.mode === "hidden" || d3.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = {baseLanes: 0}, ni(b2, c3);
    else if ((c3 & 1073741824) !== 0)
      b2.memoizedState = {baseLanes: 0}, ni(b2, f2 !== null ? f2.baseLanes : c3);
    else
      return a2 = f2 !== null ? f2.baseLanes | c3 : c3, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = {baseLanes: a2}, ni(b2, a2), null;
  else
    f2 !== null ? (d3 = f2.baseLanes | c3, b2.memoizedState = null) : d3 = c3, ni(b2, d3);
  fi(a2, b2, e3, c3);
  return b2.child;
}
function oi(a2, b2) {
  var c3 = b2.ref;
  if (a2 === null && c3 !== null || a2 !== null && a2.ref !== c3)
    b2.flags |= 128;
}
function li(a2, b2, c3, d3, e3) {
  var f2 = Ff(c3) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e3);
  c3 = Ch(a2, b2, c3, d3, f2, e3);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e3, hi(a2, b2, e3);
  b2.flags |= 1;
  fi(a2, b2, c3, e3);
  return b2.child;
}
function pi(a2, b2, c3, d3, e3) {
  if (Ff(c3)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e3);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c3, d3), Og(b2, c3, d3, e3), d3 = true;
  else if (a2 === null) {
    var g3 = b2.stateNode, h2 = b2.memoizedProps;
    g3.props = h2;
    var k3 = g3.context, l2 = c3.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c3) ? Df : M.current, l2 = Ef(b2, l2));
    var n3 = c3.getDerivedStateFromProps, A3 = typeof n3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function";
    A3 || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h2 !== d3 || k3 !== l2) && Ng(b2, g3, d3, l2);
    wg = false;
    var p3 = b2.memoizedState;
    g3.state = p3;
    Cg(b2, d3, g3, e3);
    k3 = b2.memoizedState;
    h2 !== d3 || p3 !== k3 || N.current || wg ? (typeof n3 === "function" && (Gg(b2, c3, n3, d3), k3 = b2.memoizedState), (h2 = wg || Lg(b2, c3, h2, d3, p3, k3, l2)) ? (A3 || typeof g3.UNSAFE_componentWillMount !== "function" && typeof g3.componentWillMount !== "function" || (typeof g3.componentWillMount === "function" && g3.componentWillMount(), typeof g3.UNSAFE_componentWillMount === "function" && g3.UNSAFE_componentWillMount()), typeof g3.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g3.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d3, b2.memoizedState = k3), g3.props = d3, g3.state = k3, g3.context = l2, d3 = h2) : (typeof g3.componentDidMount === "function" && (b2.flags |= 4), d3 = false);
  } else {
    g3 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g3.props = l2;
    A3 = b2.pendingProps;
    p3 = g3.context;
    k3 = c3.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c3) ? Df : M.current, k3 = Ef(b2, k3));
    var C2 = c3.getDerivedStateFromProps;
    (n3 = typeof C2 === "function" || typeof g3.getSnapshotBeforeUpdate === "function") || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h2 !== A3 || p3 !== k3) && Ng(b2, g3, d3, k3);
    wg = false;
    p3 = b2.memoizedState;
    g3.state = p3;
    Cg(b2, d3, g3, e3);
    var x3 = b2.memoizedState;
    h2 !== A3 || p3 !== x3 || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c3, C2, d3), x3 = b2.memoizedState), (l2 = wg || Lg(b2, c3, l2, d3, p3, x3, k3)) ? (n3 || typeof g3.UNSAFE_componentWillUpdate !== "function" && typeof g3.componentWillUpdate !== "function" || (typeof g3.componentWillUpdate === "function" && g3.componentWillUpdate(d3, x3, k3), typeof g3.UNSAFE_componentWillUpdate === "function" && g3.UNSAFE_componentWillUpdate(d3, x3, k3)), typeof g3.componentDidUpdate === "function" && (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g3.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d3, b2.memoizedState = x3), g3.props = d3, g3.state = x3, g3.context = k3, d3 = l2) : (typeof g3.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 256), d3 = false);
  }
  return qi(a2, b2, c3, d3, f2, e3);
}
function qi(a2, b2, c3, d3, e3, f2) {
  oi(a2, b2);
  var g3 = (b2.flags & 64) !== 0;
  if (!d3 && !g3)
    return e3 && Kf(b2, c3, false), hi(a2, b2, f2);
  d3 = b2.stateNode;
  ei.current = b2;
  var h2 = g3 && typeof c3.getDerivedStateFromError !== "function" ? null : d3.render();
  b2.flags |= 1;
  a2 !== null && g3 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d3.state;
  e3 && Kf(b2, c3, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = P.current, f2 = false, g3;
  (g3 = (b2.flags & 64) !== 0) || (g3 = a2 !== null && a2.memoizedState === null ? false : (e3 & 2) !== 0);
  g3 ? (f2 = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d3.fallback === void 0 || d3.unstable_avoidThisFallback === true || (e3 |= 1);
  I(P, e3 & 1);
  if (a2 === null) {
    d3.fallback !== void 0 && ph(b2);
    a2 = d3.children;
    e3 = d3.fallback;
    if (f2)
      return a2 = ui(b2, a2, e3, c3), b2.child.memoizedState = {baseLanes: c3}, b2.memoizedState = si, a2;
    if (typeof d3.unstable_expectedLoadTime === "number")
      return a2 = ui(b2, a2, e3, c3), b2.child.memoizedState = {baseLanes: c3}, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c3 = vi({mode: "visible", children: a2}, b2.mode, c3, null);
    c3.return = b2;
    return b2.child = c3;
  }
  if (a2.memoizedState !== null) {
    if (f2)
      return d3 = wi(a2, b2, d3.children, d3.fallback, c3), f2 = b2.child, e3 = a2.child.memoizedState, f2.memoizedState = e3 === null ? {baseLanes: c3} : {baseLanes: e3.baseLanes | c3}, f2.childLanes = a2.childLanes & ~c3, b2.memoizedState = si, d3;
    c3 = xi(a2, b2, d3.children, c3);
    b2.memoizedState = null;
    return c3;
  }
  if (f2)
    return d3 = wi(a2, b2, d3.children, d3.fallback, c3), f2 = b2.child, e3 = a2.child.memoizedState, f2.memoizedState = e3 === null ? {baseLanes: c3} : {baseLanes: e3.baseLanes | c3}, f2.childLanes = a2.childLanes & ~c3, b2.memoizedState = si, d3;
  c3 = xi(a2, b2, d3.children, c3);
  b2.memoizedState = null;
  return c3;
}
function ui(a2, b2, c3, d3) {
  var e3 = a2.mode, f2 = a2.child;
  b2 = {mode: "hidden", children: b2};
  (e3 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e3, 0, null);
  c3 = Xg(c3, e3, d3, null);
  f2.return = a2;
  c3.return = a2;
  f2.sibling = c3;
  a2.child = f2;
  return c3;
}
function xi(a2, b2, c3, d3) {
  var e3 = a2.child;
  a2 = e3.sibling;
  c3 = Tg(e3, {mode: "visible", children: c3});
  (b2.mode & 2) === 0 && (c3.lanes = d3);
  c3.return = b2;
  c3.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c3;
}
function wi(a2, b2, c3, d3, e3) {
  var f2 = b2.mode, g3 = a2.child;
  a2 = g3.sibling;
  var h2 = {mode: "hidden", children: c3};
  (f2 & 2) === 0 && b2.child !== g3 ? (c3 = b2.child, c3.childLanes = 0, c3.pendingProps = h2, g3 = c3.lastEffect, g3 !== null ? (b2.firstEffect = c3.firstEffect, b2.lastEffect = g3, g3.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c3 = Tg(g3, h2);
  a2 !== null ? d3 = Tg(a2, d3) : (d3 = Xg(d3, f2, e3, null), d3.flags |= 2);
  d3.return = b2;
  c3.return = b2;
  c3.sibling = d3;
  b2.child = c3;
  return d3;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c3, d3, e3, f2) {
  var g3 = a2.memoizedState;
  g3 === null ? a2.memoizedState = {isBackwards: b2, rendering: null, renderingStartTime: 0, last: d3, tail: c3, tailMode: e3, lastEffect: f2} : (g3.isBackwards = b2, g3.rendering = null, g3.renderingStartTime = 0, g3.last = d3, g3.tail = c3, g3.tailMode = e3, g3.lastEffect = f2);
}
function Ai(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = d3.revealOrder, f2 = d3.tail;
  fi(a2, b2, d3.children, c3);
  d3 = P.current;
  if ((d3 & 2) !== 0)
    d3 = d3 & 1 | 2, b2.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c3);
          else if (a2.tag === 19)
            yi(a2, c3);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d3 &= 1;
  }
  I(P, d3);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e3) {
      case "forwards":
        c3 = b2.child;
        for (e3 = null; c3 !== null; )
          a2 = c3.alternate, a2 !== null && ih(a2) === null && (e3 = c3), c3 = c3.sibling;
        c3 = e3;
        c3 === null ? (e3 = b2.child, b2.child = null) : (e3 = c3.sibling, c3.sibling = null);
        zi(b2, false, e3, c3, f2, b2.lastEffect);
        break;
      case "backwards":
        c3 = null;
        e3 = b2.child;
        for (b2.child = null; e3 !== null; ) {
          a2 = e3.alternate;
          if (a2 !== null && ih(a2) === null) {
            b2.child = e3;
            break;
          }
          a2 = e3.sibling;
          e3.sibling = c3;
          c3 = e3;
          e3 = a2;
        }
        zi(b2, true, c3, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c3) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if ((c3 & b2.childLanes) !== 0) {
    if (a2 !== null && b2.child !== a2.child)
      throw Error(y(153));
    if (b2.child !== null) {
      a2 = b2.child;
      c3 = Tg(a2, a2.pendingProps);
      b2.child = c3;
      for (c3.return = b2; a2.sibling !== null; )
        a2 = a2.sibling, c3 = c3.sibling = Tg(a2, a2.pendingProps), c3.return = b2;
      c3.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a2, b2) {
  for (var c3 = b2.child; c3 !== null; ) {
    if (c3.tag === 5 || c3.tag === 6)
      a2.appendChild(c3.stateNode);
    else if (c3.tag !== 4 && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c3, d3) {
  var e3 = a2.memoizedProps;
  if (e3 !== d3) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c3) {
      case "input":
        e3 = Ya(a2, e3);
        d3 = Ya(a2, d3);
        f2 = [];
        break;
      case "option":
        e3 = eb(a2, e3);
        d3 = eb(a2, d3);
        f2 = [];
        break;
      case "select":
        e3 = objectAssign({}, e3, {value: void 0});
        d3 = objectAssign({}, d3, {value: void 0});
        f2 = [];
        break;
      case "textarea":
        e3 = gb(a2, e3);
        d3 = gb(a2, d3);
        f2 = [];
        break;
      default:
        typeof e3.onClick !== "function" && typeof d3.onClick === "function" && (a2.onclick = jf);
    }
    vb(c3, d3);
    var g3;
    c3 = null;
    for (l2 in e3)
      if (!d3.hasOwnProperty(l2) && e3.hasOwnProperty(l2) && e3[l2] != null)
        if (l2 === "style") {
          var h2 = e3[l2];
          for (g3 in h2)
            h2.hasOwnProperty(g3) && (c3 || (c3 = {}), c3[g3] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d3) {
      var k3 = d3[l2];
      h2 = e3 != null ? e3[l2] : void 0;
      if (d3.hasOwnProperty(l2) && k3 !== h2 && (k3 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g3 in h2)
              !h2.hasOwnProperty(g3) || k3 && k3.hasOwnProperty(g3) || (c3 || (c3 = {}), c3[g3] = "");
            for (g3 in k3)
              k3.hasOwnProperty(g3) && h2[g3] !== k3[g3] && (c3 || (c3 = {}), c3[g3] = k3[g3]);
          } else
            c3 || (f2 || (f2 = []), f2.push(l2, c3)), c3 = k3;
        else
          l2 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, k3 != null && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : l2 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f2 = f2 || []).push(l2, "" + k3) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k3 != null && l2 === "onScroll" && G("scroll", a2), f2 || h2 === k3 || (f2 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f2 = f2 || []).push(l2, k3));
    }
    c3 && (f2 = f2 || []).push("style", c3);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c3, d3) {
  c3 !== d3 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c3 = null; b2 !== null; )
          b2.alternate !== null && (c3 = b2), b2 = b2.sibling;
        c3 === null ? a2.tail = null : c3.sibling = null;
        break;
      case "collapsed":
        c3 = a2.tail;
        for (var d3 = null; c3 !== null; )
          c3.alternate !== null && (d3 = c3), c3 = c3.sibling;
        d3 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d3.sibling = null;
    }
}
function Gi(a2, b2, c3) {
  var d3 = b2.pendingProps;
  switch (b2.tag) {
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
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d3 = b2.stateNode;
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b2) ? b2.flags |= 4 : d3.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e3 = dh(ch.current);
      c3 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Di(a2, b2, c3, d3, e3), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d3) {
          if (b2.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d3 = b2.stateNode;
          c3 = b2.type;
          var f2 = b2.memoizedProps;
          d3[wf] = b2;
          d3[xf] = f2;
          switch (c3) {
            case "dialog":
              G("cancel", d3);
              G("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d3);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G(Xe[a2], d3);
              break;
            case "source":
              G("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d3);
              G("load", d3);
              break;
            case "details":
              G("toggle", d3);
              break;
            case "input":
              Za(d3, f2);
              G("invalid", d3);
              break;
            case "select":
              d3._wrapperState = {wasMultiple: !!f2.multiple};
              G("invalid", d3);
              break;
            case "textarea":
              hb(d3, f2), G("invalid", d3);
          }
          vb(c3, f2);
          a2 = null;
          for (var g3 in f2)
            f2.hasOwnProperty(g3) && (e3 = f2[g3], g3 === "children" ? typeof e3 === "string" ? d3.textContent !== e3 && (a2 = ["children", e3]) : typeof e3 === "number" && d3.textContent !== "" + e3 && (a2 = ["children", "" + e3]) : ca.hasOwnProperty(g3) && e3 != null && g3 === "onScroll" && G("scroll", d3));
          switch (c3) {
            case "input":
              Va(d3);
              cb(d3, f2, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d3.onclick = jf);
          }
          d3 = a2;
          b2.updateQueue = d3;
          d3 !== null && (b2.flags |= 4);
        } else {
          g3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
          a2 === kb.html && (a2 = lb(c3));
          a2 === kb.html ? c3 === "script" ? (a2 = g3.createElement("div"), a2.innerHTML = "<script></script>", a2 = a2.removeChild(a2.firstChild)) : typeof d3.is === "string" ? a2 = g3.createElement(c3, {is: d3.is}) : (a2 = g3.createElement(c3), c3 === "select" && (g3 = a2, d3.multiple ? g3.multiple = true : d3.size && (g3.size = d3.size))) : a2 = g3.createElementNS(a2, c3);
          a2[wf] = b2;
          a2[xf] = d3;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g3 = wb(c3, d3);
          switch (c3) {
            case "dialog":
              G("cancel", a2);
              G("close", a2);
              e3 = d3;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a2);
              e3 = d3;
              break;
            case "video":
            case "audio":
              for (e3 = 0; e3 < Xe.length; e3++)
                G(Xe[e3], a2);
              e3 = d3;
              break;
            case "source":
              G("error", a2);
              e3 = d3;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a2);
              G("load", a2);
              e3 = d3;
              break;
            case "details":
              G("toggle", a2);
              e3 = d3;
              break;
            case "input":
              Za(a2, d3);
              e3 = Ya(a2, d3);
              G("invalid", a2);
              break;
            case "option":
              e3 = eb(a2, d3);
              break;
            case "select":
              a2._wrapperState = {wasMultiple: !!d3.multiple};
              e3 = objectAssign({}, d3, {value: void 0});
              G("invalid", a2);
              break;
            case "textarea":
              hb(a2, d3);
              e3 = gb(a2, d3);
              G("invalid", a2);
              break;
            default:
              e3 = d3;
          }
          vb(c3, e3);
          var h2 = e3;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k3 = h2[f2];
              f2 === "style" ? tb(a2, k3) : f2 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a2, k3)) : f2 === "children" ? typeof k3 === "string" ? (c3 !== "textarea" || k3 !== "") && pb(a2, k3) : typeof k3 === "number" && pb(a2, "" + k3) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k3 != null && f2 === "onScroll" && G("scroll", a2) : k3 != null && qa(a2, f2, k3, g3));
            }
          switch (c3) {
            case "input":
              Va(a2);
              cb(a2, d3, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d3.value != null && a2.setAttribute("value", "" + Sa(d3.value));
              break;
            case "select":
              a2.multiple = !!d3.multiple;
              f2 = d3.value;
              f2 != null ? fb(a2, !!d3.multiple, f2, false) : d3.defaultValue != null && fb(a2, !!d3.multiple, d3.defaultValue, true);
              break;
            default:
              typeof e3.onClick === "function" && (a2.onclick = jf);
          }
          mf(c3, d3) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Ei(a2, b2, a2.memoizedProps, d3);
      else {
        if (typeof d3 !== "string" && b2.stateNode === null)
          throw Error(y(166));
        c3 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d3 = b2.stateNode, c3 = b2.memoizedProps, d3[wf] = b2, d3.nodeValue !== c3 && (b2.flags |= 4)) : (d3 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d3), d3[wf] = b2, b2.stateNode = d3);
      }
      return null;
    case 13:
      H(P);
      d3 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c3, b2;
      d3 = d3 !== null;
      c3 = false;
      a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c3 = a2.memoizedState !== null;
      if (d3 && !c3 && (b2.mode & 2) !== 0)
        if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d3 || c3)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d3 = b2.memoizedState;
      if (d3 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g3 = d3.rendering;
      if (g3 === null)
        if (f2)
          Fi(d3, false);
        else {
          if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g3 = ih(a2);
              if (g3 !== null) {
                b2.flags |= 64;
                Fi(d3, false);
                f2 = g3.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d3.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d3.lastEffect;
                d3 = c3;
                for (c3 = b2.child; c3 !== null; )
                  f2 = c3, a2 = d3, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g3 = f2.alternate, g3 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g3.childLanes, f2.lanes = g3.lanes, f2.child = g3.child, f2.memoizedProps = g3.memoizedProps, f2.memoizedState = g3.memoizedState, f2.updateQueue = g3.updateQueue, f2.type = g3.type, a2 = g3.dependencies, f2.dependencies = a2 === null ? null : {lanes: a2.lanes, firstContext: a2.firstContext}), c3 = c3.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          d3.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d3, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a2 = ih(g3), a2 !== null) {
            if (b2.flags |= 64, f2 = true, c3 = a2.updateQueue, c3 !== null && (b2.updateQueue = c3, b2.flags |= 4), Fi(d3, true), d3.tail === null && d3.tailMode === "hidden" && !g3.alternate && !lh)
              return b2 = b2.lastEffect = d3.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d3.renderingStartTime > Ji && c3 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d3, false), b2.lanes = 33554432);
        d3.isBackwards ? (g3.sibling = b2.child, b2.child = g3) : (c3 = d3.last, c3 !== null ? c3.sibling = g3 : b2.child = g3, d3.last = g3);
      }
      return d3.tail !== null ? (c3 = d3.tail, d3.rendering = c3, d3.tail = c3.sibling, d3.lastEffect = b2.lastEffect, d3.renderingStartTime = O(), c3.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c3) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d3.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a2.flags;
      if ((b2 & 64) !== 0)
        throw Error(y(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H(P), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c3 = "", d3 = b2;
    do
      c3 += Qa(d3), d3 = d3.return;
    while (d3);
    var e3 = c3;
  } catch (f2) {
    e3 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return {value: a2, source: b2, stack: e3};
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c3) {
    setTimeout(function() {
      throw c3;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b2, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  c3.payload = {element: null};
  var d3 = b2.value;
  c3.callback = function() {
    Qi || (Qi = true, Ri = d3);
    Ni(a2, b2);
  };
  return c3;
}
function Si(a2, b2, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  var d3 = a2.type.getDerivedStateFromError;
  if (typeof d3 === "function") {
    var e3 = b2.value;
    c3.payload = function() {
      Ni(a2, b2);
      return d3(e3);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c3.callback = function() {
    typeof d3 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c4 = b2.stack;
    this.componentDidCatch(b2.value, {componentStack: c4 !== null ? c4 : ""});
  });
  return c3;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c3) {
        Wi(a2, c3);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a2 !== null) {
        var c3 = a2.memoizedProps, d3 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c3 : lg(b2.type, c3), d3);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a2, b2, c3) {
  switch (c3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c3.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d3 = a2.create;
            a2.destroy = d3();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c3.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          var e3 = a2;
          d3 = e3.next;
          e3 = e3.tag;
          (e3 & 4) !== 0 && (e3 & 1) !== 0 && (Zi(c3, a2), $i(c3, a2));
          a2 = d3;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c3.stateNode;
      c3.flags & 4 && (b2 === null ? a2.componentDidMount() : (d3 = c3.elementType === c3.type ? b2.memoizedProps : lg(c3.type, b2.memoizedProps), a2.componentDidUpdate(d3, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b2 = c3.updateQueue;
      b2 !== null && Eg(c3, b2, a2);
      return;
    case 3:
      b2 = c3.updateQueue;
      if (b2 !== null) {
        a2 = null;
        if (c3.child !== null)
          switch (c3.child.tag) {
            case 5:
              a2 = c3.child.stateNode;
              break;
            case 1:
              a2 = c3.child.stateNode;
          }
        Eg(c3, b2, a2);
      }
      return;
    case 5:
      a2 = c3.stateNode;
      b2 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a2.focus();
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
  throw Error(y(163));
}
function aj(a2, b2) {
  for (var c3 = a2; ; ) {
    if (c3.tag === 5) {
      var d3 = c3.stateNode;
      if (b2)
        d3 = d3.style, typeof d3.setProperty === "function" ? d3.setProperty("display", "none", "important") : d3.display = "none";
      else {
        d3 = c3.stateNode;
        var e3 = c3.memoizedProps.style;
        e3 = e3 !== void 0 && e3 !== null && e3.hasOwnProperty("display") ? e3.display : null;
        d3.style.display = sb("display", e3);
      }
    } else if (c3.tag === 6)
      c3.stateNode.nodeValue = b2 ? "" : c3.memoizedProps;
    else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a2) && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === a2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === a2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c3 = a2 = a2.next;
        do {
          var d3 = c3, e3 = d3.destroy;
          d3 = d3.tag;
          if (e3 !== void 0)
            if ((d3 & 4) !== 0)
              Zi(b2, c3);
            else {
              d3 = b2;
              try {
                e3();
              } catch (f2) {
                Wi(d3, f2);
              }
            }
          c3 = c3.next;
        } while (c3 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y(160));
  }
  var c3 = b2;
  b2 = c3.stateNode;
  switch (c3.tag) {
    case 5:
      var d3 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d3 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d3 = true;
      break;
    default:
      throw Error(y(161));
  }
  c3.flags & 16 && (pb(b2, ""), c3.flags &= -17);
  a:
    b:
      for (c3 = a2; ; ) {
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
  d3 ? gj(a2, c3, b2) : hj(a2, c3, b2);
}
function gj(a2, b2, c3) {
  var d3 = a2.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a2 = e3 ? a2.stateNode : a2.stateNode.instance, b2 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a2, b2) : c3.insertBefore(a2, b2) : (c3.nodeType === 8 ? (b2 = c3.parentNode, b2.insertBefore(a2, c3)) : (b2 = c3, b2.appendChild(a2)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b2, c3), a2 = a2.sibling; a2 !== null; )
      gj(a2, b2, c3), a2 = a2.sibling;
}
function hj(a2, b2, c3) {
  var d3 = a2.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a2 = e3 ? a2.stateNode : a2.stateNode.instance, b2 ? c3.insertBefore(a2, b2) : c3.appendChild(a2);
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b2, c3), a2 = a2.sibling; a2 !== null; )
      hj(a2, b2, c3), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c3 = b2, d3 = false, e3, f2; ; ) {
    if (!d3) {
      d3 = c3.return;
      a:
        for (; ; ) {
          if (d3 === null)
            throw Error(y(160));
          e3 = d3.stateNode;
          switch (d3.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e3 = e3.containerInfo;
              f2 = true;
              break a;
            case 4:
              e3 = e3.containerInfo;
              f2 = true;
              break a;
          }
          d3 = d3.return;
        }
      d3 = true;
    }
    if (c3.tag === 5 || c3.tag === 6) {
      a:
        for (var g3 = a2, h2 = c3, k3 = h2; ; )
          if (bj(g3, k3), k3.child !== null && k3.tag !== 4)
            k3.child.return = k3, k3 = k3.child;
          else {
            if (k3 === h2)
              break a;
            for (; k3.sibling === null; ) {
              if (k3.return === null || k3.return === h2)
                break a;
              k3 = k3.return;
            }
            k3.sibling.return = k3.return;
            k3 = k3.sibling;
          }
      f2 ? (g3 = e3, h2 = c3.stateNode, g3.nodeType === 8 ? g3.parentNode.removeChild(h2) : g3.removeChild(h2)) : e3.removeChild(c3.stateNode);
    } else if (c3.tag === 4) {
      if (c3.child !== null) {
        e3 = c3.stateNode.containerInfo;
        f2 = true;
        c3.child.return = c3;
        c3 = c3.child;
        continue;
      }
    } else if (bj(a2, c3), c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b2)
        return;
      c3 = c3.return;
      c3.tag === 4 && (d3 = false);
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c3 = b2.updateQueue;
      c3 = c3 !== null ? c3.lastEffect : null;
      if (c3 !== null) {
        var d3 = c3 = c3.next;
        do
          (d3.tag & 3) === 3 && (a2 = d3.destroy, d3.destroy = void 0, a2 !== void 0 && a2()), d3 = d3.next;
        while (d3 !== c3);
      }
      return;
    case 1:
      return;
    case 5:
      c3 = b2.stateNode;
      if (c3 != null) {
        d3 = b2.memoizedProps;
        var e3 = a2 !== null ? a2.memoizedProps : d3;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c3[xf] = d3;
          a2 === "input" && d3.type === "radio" && d3.name != null && $a(c3, d3);
          wb(a2, e3);
          b2 = wb(a2, d3);
          for (e3 = 0; e3 < f2.length; e3 += 2) {
            var g3 = f2[e3], h2 = f2[e3 + 1];
            g3 === "style" ? tb(c3, h2) : g3 === "dangerouslySetInnerHTML" ? ob(c3, h2) : g3 === "children" ? pb(c3, h2) : qa(c3, g3, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c3, d3);
              break;
            case "textarea":
              ib(c3, d3);
              break;
            case "select":
              a2 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d3.multiple, f2 = d3.value, f2 != null ? fb(c3, !!d3.multiple, f2, false) : a2 !== !!d3.multiple && (d3.defaultValue != null ? fb(c3, !!d3.multiple, d3.defaultValue, true) : fb(c3, !!d3.multiple, d3.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c3 = b2.stateNode;
      c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c3 = a2.stateNode;
    c3 === null && (c3 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d3 = lj.bind(null, a2, b3);
      c3.has(b3) || (c3.add(b3), b3.then(d3, d3));
    });
  }
}
function mj(a2, b2) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
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
var V = 0;
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
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c3) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a2 = Kj(a2, b2);
  if (a2 === null)
    return null;
  $c(a2, b2, c3);
  a2 === U && (Hi |= b2, V === 4 && Ii(a2, W));
  var d3 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c3), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d3 !== 98 && d3 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c3));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b2);
  c3 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c3 = a2.alternate, c3 !== null && (c3.childLanes |= b2), c3 = a2, a2 = a2.return;
  return c3.tag === 3 ? c3.stateNode : null;
}
function Mj(a2, b2) {
  for (var c3 = a2.callbackNode, d3 = a2.suspendedLanes, e3 = a2.pingedLanes, f2 = a2.expirationTimes, g3 = a2.pendingLanes; 0 < g3; ) {
    var h2 = 31 - Vc(g3), k3 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k3 & d3) === 0 || (k3 & e3) !== 0) {
        l2 = b2;
        Rc(k3);
        var n3 = F;
        f2[h2] = 10 <= n3 ? l2 + 250 : 6 <= n3 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k3);
    g3 &= ~k3;
  }
  d3 = Uc(a2, a2 === U ? W : 0);
  b2 = F;
  if (d3 === 0)
    c3 !== null && (c3 !== Zf && Pf(c3), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c3 !== null) {
      if (a2.callbackPriority === b2)
        return;
      c3 !== Zf && Pf(c3);
    }
    b2 === 15 ? (c3 = Lj.bind(null, a2), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b2 === 14 ? c3 = hg(99, Lj.bind(null, a2)) : (c3 = Tc(b2), c3 = hg(c3, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c3;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c3 = Uc(a2, a2 === U ? W : 0);
  if (c3 === 0)
    return null;
  var d3 = c3;
  var e3 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a2 || W !== d3)
    wj(), Qj(a2, d3);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e3;
  Y !== null ? d3 = 0 : (U = null, W = 0, d3 = V);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d3 !== 0) {
    d3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c3 = Wc(a2), c3 !== 0 && (d3 = Tj(a2, c3)));
    if (d3 === 1)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c3), Mj(a2, O()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c3;
    switch (d3) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c3);
        if ((c3 & 62914560) === c3 && (d3 = jj + 500 - O(), 10 < d3)) {
          if (Uc(a2, 0) !== 0)
            break;
          e3 = a2.suspendedLanes;
          if ((e3 & c3) !== c3) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e3;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d3);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c3);
        if ((c3 & 4186112) === c3)
          break;
        d3 = a2.eventTimes;
        for (e3 = -1; 0 < c3; ) {
          var g3 = 31 - Vc(c3);
          f2 = 1 << g3;
          g3 = d3[g3];
          g3 > e3 && (e3 = g3);
          c3 &= ~f2;
        }
        c3 = e3;
        c3 = O() - c3;
        c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
        if (10 < c3) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c3);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a2, O());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c3 = 31 - Vc(b2), d3 = 1 << c3;
    a2[c3] = -1;
    b2 &= ~d3;
  }
}
function Lj(a2) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a2 === U && (a2.expiredLanes & W) !== 0) {
    var b2 = W;
    var c3 = Tj(a2, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c3 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c3 = Tj(a2, b2);
  a2.tag !== 0 && c3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c3 = Tj(a2, b2)));
  if (c3 === 1)
    throw c3 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O()), c3;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c3 = X;
  X |= 1;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c3 = X;
  X &= -2;
  X |= 8;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c3 = a2.timeoutHandle;
  c3 !== -1 && (a2.timeoutHandle = -1, pf(c3));
  if (Y !== null)
    for (c3 = Y.return; c3 !== null; ) {
      var d3 = c3;
      switch (d3.tag) {
        case 1:
          d3 = d3.type.childContextTypes;
          d3 !== null && d3 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d3);
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
          rg(d3);
          break;
        case 23:
        case 24:
          Ki();
      }
      c3 = c3.return;
    }
  U = a2;
  Y = Tg(a2.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c3 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d3 = R.memoizedState; d3 !== null; ) {
          var e3 = d3.queue;
          e3 !== null && (e3.pending = null);
          d3 = d3.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c3 === null || c3.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g3 = c3.return, h2 = c3, k3 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l2 = k3;
          if ((h2.mode & 2) === 0) {
            var n3 = h2.alternate;
            n3 ? (h2.updateQueue = n3.updateQueue, h2.memoizedState = n3.memoizedState, h2.lanes = n3.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A3 = (P.current & 1) !== 0, p3 = g3;
          do {
            var C2;
            if (C2 = p3.tag === 13) {
              var x3 = p3.memoizedState;
              if (x3 !== null)
                C2 = x3.dehydrated !== null ? true : false;
              else {
                var w2 = p3.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A3 ? false : true;
              }
            }
            if (C2) {
              var z3 = p3.updateQueue;
              if (z3 === null) {
                var u = new Set();
                u.add(l2);
                p3.updateQueue = u;
              } else
                z3.add(l2);
              if ((p3.mode & 2) === 0) {
                p3.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t3 = zg(-1, 1);
                    t3.tag = 2;
                    Ag(h2, t3);
                  }
                h2.lanes |= 1;
                break a;
              }
              k3 = void 0;
              h2 = b2;
              var q3 = f2.pingCache;
              q3 === null ? (q3 = f2.pingCache = new Oi(), k3 = new Set(), q3.set(l2, k3)) : (k3 = q3.get(l2), k3 === void 0 && (k3 = new Set(), q3.set(l2, k3)));
              if (!k3.has(h2)) {
                k3.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p3.flags |= 4096;
              p3.lanes = b2;
              break a;
            }
            p3 = p3.return;
          } while (p3 !== null);
          k3 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k3 = Mi(k3, h2);
        p3 = g3;
        do {
          switch (p3.tag) {
            case 3:
              f2 = k3;
              p3.flags |= 4096;
              b2 &= -b2;
              p3.lanes |= b2;
              var J2 = Pi(p3, f2, b2);
              Bg(p3, J2);
              break a;
            case 1:
              f2 = k3;
              var K2 = p3.type, Q2 = p3.stateNode;
              if ((p3.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p3.flags |= 4096;
                b2 &= -b2;
                p3.lanes |= b2;
                var L2 = Si(p3, f2, b2);
                Bg(p3, L2);
                break a;
              }
          }
          p3 = p3.return;
        } while (p3 !== null);
      }
      Zj(c3);
    } catch (va) {
      b2 = va;
      Y === c3 && c3 !== null && (Y = c3 = c3.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b2) {
  var c3 = X;
  X |= 16;
  var d3 = Pj();
  U === a2 && W === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e3) {
      Sj(a2, e3);
    }
  while (1);
  qg();
  X = c3;
  oj.current = d3;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Zj(a2) : Y = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c3 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 2048) === 0) {
      c3 = Gi(c3, b2, qj);
      if (c3 !== null) {
        Y = c3;
        return;
      }
      c3 = b2;
      if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
        for (var d3 = 0, e3 = c3.child; e3 !== null; )
          d3 |= e3.lanes | e3.childLanes, e3 = e3.sibling;
        c3.childLanes = d3;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c3 = Li(b2);
      if (c3 !== null) {
        c3.flags &= 2047;
        Y = c3;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c3 = a2.finishedWork;
  if (c3 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c3 === a2.current)
    throw Error(y(177));
  a2.callbackNode = null;
  var d3 = c3.lanes | c3.childLanes, e3 = d3, f2 = a2.pendingLanes & ~e3;
  a2.pendingLanes = e3;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e3;
  a2.mutableReadLanes &= e3;
  a2.entangledLanes &= e3;
  e3 = a2.entanglements;
  for (var g3 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k3 = 31 - Vc(f2), l2 = 1 << k3;
    e3[k3] = 0;
    g3[k3] = -1;
    h2[k3] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d3 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U && (Y = U = null, W = 0);
  1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d3 = c3.firstEffect) : d3 = c3 : d3 = c3.firstEffect;
  if (d3 !== null) {
    e3 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g3 = Ne();
    if (Oe(g3)) {
      if ("selectionStart" in g3)
        h2 = {start: g3.selectionStart, end: g3.selectionEnd};
      else
        a:
          if (h2 = (h2 = g3.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k3 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k3.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n3 = 0, A3 = -1, p3 = -1, C2 = 0, x3 = 0, w2 = g3, z3 = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A3 = n3 + f2);
                  w2 !== k3 || l2 !== 0 && w2.nodeType !== 3 || (p3 = n3 + l2);
                  w2.nodeType === 3 && (n3 += w2.nodeValue.length);
                  if ((u = w2.firstChild) === null)
                    break;
                  z3 = w2;
                  w2 = u;
                }
                for (; ; ) {
                  if (w2 === g3)
                    break b;
                  z3 === h2 && ++C2 === f2 && (A3 = n3);
                  z3 === k3 && ++x3 === l2 && (p3 = n3);
                  if ((u = w2.nextSibling) !== null)
                    break;
                  w2 = z3;
                  z3 = w2.parentNode;
                }
                w2 = u;
              }
            h2 = A3 === -1 || p3 === -1 ? null : {start: A3, end: p3};
          } else
            h2 = null;
      h2 = h2 || {start: 0, end: 0};
    } else
      h2 = null;
    lf = {focusedElem: g3, selectionRange: h2};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d3;
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
    Z = d3;
    do
      try {
        for (g3 = a2; Z !== null; ) {
          var t3 = Z.flags;
          t3 & 16 && pb(Z.stateNode, "");
          if (t3 & 128) {
            var q3 = Z.alternate;
            if (q3 !== null) {
              var v2 = q3.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t3 & 1038) {
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
              h2 = Z;
              cj(g3, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
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
    v2 = lf;
    q3 = Ne();
    t3 = v2.focusedElem;
    g3 = v2.selectionRange;
    if (q3 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
      g3 !== null && Oe(t3) && (q3 = g3.start, v2 = g3.end, v2 === void 0 && (v2 = q3), "selectionStart" in t3 ? (t3.selectionStart = q3, t3.selectionEnd = Math.min(v2, t3.value.length)) : (v2 = (q3 = t3.ownerDocument || document) && q3.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t3.textContent.length, J2 = Math.min(g3.start, h2), g3 = g3.end === void 0 ? J2 : Math.min(g3.end, h2), !v2.extend && J2 > g3 && (h2 = g3, g3 = J2, J2 = h2), h2 = Le(t3, J2), f2 = Le(t3, g3), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q3 = q3.createRange(), q3.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g3 ? (v2.addRange(q3), v2.extend(f2.node, f2.offset)) : (q3.setEnd(f2.node, f2.offset), v2.addRange(q3))))));
      q3 = [];
      for (v2 = t3; v2 = v2.parentNode; )
        v2.nodeType === 1 && q3.push({element: v2, left: v2.scrollLeft, top: v2.scrollTop});
      typeof t3.focus === "function" && t3.focus();
      for (t3 = 0; t3 < q3.length; t3++)
        v2 = q3[t3], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c3;
    Z = d3;
    do
      try {
        for (t3 = a2; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t3, Z.alternate, Z);
          if (K2 & 128) {
            q3 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q3 = L2;
                  break;
                default:
                  q3 = L2;
              }
              typeof Q2 === "function" ? Q2(q3) : Q2.current = q3;
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
    X = e3;
  } else
    a2.current = c3;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z = d3; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d3 = a2.pendingLanes;
  d3 === 0 && (Ti = null);
  d3 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c3 = c3.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a2 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a2, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b2 = X;
  X |= 32;
  var c3 = Bj;
  Bj = [];
  for (var d3 = 0; d3 < c3.length; d3 += 2) {
    var e3 = c3[d3], f2 = c3[d3 + 1], g3 = e3.destroy;
    e3.destroy = void 0;
    if (typeof g3 === "function")
      try {
        g3();
      } catch (k3) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k3);
      }
  }
  c3 = Aj;
  Aj = [];
  for (d3 = 0; d3 < c3.length; d3 += 2) {
    e3 = c3[d3];
    f2 = c3[d3 + 1];
    try {
      var h2 = e3.create;
      e3.destroy = h2();
    } catch (k3) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k3);
    }
  }
  for (h2 = a2.current.firstEffect; h2 !== null; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X = b2;
  ig();
  return true;
}
function gk(a2, b2, c3) {
  b2 = Mi(c3, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (a2.tag === 3)
    gk(a2, a2, b2);
  else
    for (var c3 = a2.return; c3 !== null; ) {
      if (c3.tag === 3) {
        gk(c3, a2, b2);
        break;
      } else if (c3.tag === 1) {
        var d3 = c3.stateNode;
        if (typeof c3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3))) {
          a2 = Mi(b2, a2);
          var e3 = Si(c3, a2, 1);
          Ag(c3, e3);
          e3 = Hg();
          c3 = Kj(c3, 1);
          if (c3 !== null)
            $c(c3, 1, e3), Mj(c3, e3);
          else if (typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3)))
            try {
              d3.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c3 = c3.return;
    }
}
function Yj(a2, b2, c3) {
  var d3 = a2.pingCache;
  d3 !== null && d3.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c3;
  U === a2 && (W & c3) === c3 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c3);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c3 = a2.stateNode;
  c3 !== null && c3.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c3 = Hg();
  a2 = Kj(a2, b2);
  a2 !== null && ($c(a2, b2, c3), Mj(a2, c3));
}
var ck;
ck = function(a2, b2, c3) {
  var d3 = b2.lanes;
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c3 & d3) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d3 = b2.memoizedProps.value;
          var e3 = b2.type._context;
          I(mg, e3._currentValue);
          e3._currentValue = d3;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c3 & b2.child.childLanes) !== 0)
              return ti(a2, b2, c3);
            I(P, P.current & 1);
            b2 = hi(a2, b2, c3);
            return b2 !== null ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d3 = (c3 & b2.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d3)
              return Ai(a2, b2, c3);
            b2.flags |= 64;
          }
          e3 = b2.memoizedState;
          e3 !== null && (e3.rendering = null, e3.tail = null, e3.lastEffect = null);
          I(P, P.current);
          if (d3)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c3);
      }
      return hi(a2, b2, c3);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d3 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e3 = Ef(b2, M.current);
      tg(b2, c3);
      e3 = Ch(null, b2, d3, a2, e3, c3);
      b2.flags |= 1;
      if (typeof e3 === "object" && e3 !== null && typeof e3.render === "function" && e3.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d3)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e3.state !== null && e3.state !== void 0 ? e3.state : null;
        xg(b2);
        var g3 = d3.getDerivedStateFromProps;
        typeof g3 === "function" && Gg(b2, d3, g3, a2);
        e3.updater = Kg;
        b2.stateNode = e3;
        e3._reactInternals = b2;
        Og(b2, d3, a2, c3);
        b2 = qi(null, b2, d3, true, f2, c3);
      } else
        b2.tag = 0, fi(null, b2, e3, c3), b2 = b2.child;
      return b2;
    case 16:
      e3 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e3._init;
        e3 = f2(e3._payload);
        b2.type = e3;
        f2 = b2.tag = hk(e3);
        a2 = lg(e3, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e3, a2, c3);
            break a;
          case 1:
            b2 = pi(null, b2, e3, a2, c3);
            break a;
          case 11:
            b2 = gi(null, b2, e3, a2, c3);
            break a;
          case 14:
            b2 = ii(null, b2, e3, lg(e3.type, a2), d3, c3);
            break a;
        }
        throw Error(y(306, e3, ""));
      }
      return b2;
    case 0:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), li(a2, b2, d3, e3, c3);
    case 1:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), pi(a2, b2, d3, e3, c3);
    case 3:
      ri(b2);
      d3 = b2.updateQueue;
      if (a2 === null || d3 === null)
        throw Error(y(282));
      d3 = b2.pendingProps;
      e3 = b2.memoizedState;
      e3 = e3 !== null ? e3.element : null;
      yg(a2, b2);
      Cg(b2, d3, null, c3);
      d3 = b2.memoizedState.element;
      if (d3 === e3)
        sh(), b2 = hi(a2, b2, c3);
      else {
        e3 = b2.stateNode;
        if (f2 = e3.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e3.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e3 = 0; e3 < a2.length; e3 += 2)
              f2 = a2[e3], f2._workInProgressVersionPrimary = a2[e3 + 1], th.push(f2);
          c3 = Zg(b2, null, d3, c3);
          for (b2.child = c3; c3; )
            c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
        } else
          fi(a2, b2, d3, c3), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a2 === null && ph(b2), d3 = b2.type, e3 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g3 = e3.children, nf(d3, e3) ? g3 = null : f2 !== null && nf(d3, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g3, c3), b2.child;
    case 6:
      return a2 === null && ph(b2), null;
    case 13:
      return ti(a2, b2, c3);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d3 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d3, c3) : fi(a2, b2, d3, c3), b2.child;
    case 11:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), gi(a2, b2, d3, e3, c3);
    case 7:
      return fi(a2, b2, b2.pendingProps, c3), b2.child;
    case 8:
      return fi(a2, b2, b2.pendingProps.children, c3), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c3), b2.child;
    case 10:
      a: {
        d3 = b2.type._context;
        e3 = b2.pendingProps;
        g3 = b2.memoizedProps;
        f2 = e3.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g3 !== null)
          if (h2 = g3.value, f2 = He(h2, f2) ? 0 : (typeof d3._calculateChangedBits === "function" ? d3._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g3.children === e3.children && !N.current) {
              b2 = hi(a2, b2, c3);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k3 = h2.dependencies;
              if (k3 !== null) {
                g3 = h2.child;
                for (var l2 = k3.firstContext; l2 !== null; ) {
                  if (l2.context === d3 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c3 & -c3), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c3;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c3);
                    sg(h2.return, c3);
                    k3.lanes |= c3;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g3 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g3 !== null)
                g3.return = h2;
              else
                for (g3 = h2; g3 !== null; ) {
                  if (g3 === b2) {
                    g3 = null;
                    break;
                  }
                  h2 = g3.sibling;
                  if (h2 !== null) {
                    h2.return = g3.return;
                    g3 = h2;
                    break;
                  }
                  g3 = g3.return;
                }
              h2 = g3;
            }
        fi(a2, b2, e3.children, c3);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e3 = b2.type, f2 = b2.pendingProps, d3 = f2.children, tg(b2, c3), e3 = vg(e3, f2.unstable_observedBits), d3 = d3(e3), b2.flags |= 1, fi(a2, b2, d3, c3), b2.child;
    case 14:
      return e3 = b2.type, f2 = lg(e3, b2.pendingProps), f2 = lg(e3.type, f2), ii(a2, b2, e3, f2, d3, c3);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d3, c3);
    case 17:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d3) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c3), Mg(b2, d3, e3), Og(b2, d3, e3, c3), qi(null, b2, d3, true, a2, c3);
    case 19:
      return Ai(a2, b2, c3);
    case 23:
      return mi(a2, b2, c3);
    case 24:
      return mi(a2, b2, c3);
  }
  throw Error(y(156, b2.tag));
};
function ik(a2, b2, c3, d3) {
  this.tag = a2;
  this.key = c3;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c3, d3) {
  return new ik(a2, b2, c3, d3);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c3 = a2.alternate;
  c3 === null ? (c3 = nh(a2.tag, b2, a2.key, a2.mode), c3.elementType = a2.elementType, c3.type = a2.type, c3.stateNode = a2.stateNode, c3.alternate = a2, a2.alternate = c3) : (c3.pendingProps = b2, c3.type = a2.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
  c3.childLanes = a2.childLanes;
  c3.lanes = a2.lanes;
  c3.child = a2.child;
  c3.memoizedProps = a2.memoizedProps;
  c3.memoizedState = a2.memoizedState;
  c3.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c3.dependencies = b2 === null ? null : {lanes: b2.lanes, firstContext: b2.firstContext};
  c3.sibling = a2.sibling;
  c3.index = a2.index;
  c3.ref = a2.ref;
  return c3;
}
function Vg(a2, b2, c3, d3, e3, f2) {
  var g3 = 2;
  d3 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g3 = 1);
  else if (typeof a2 === "string")
    g3 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c3.children, e3, f2, b2);
        case Ha:
          g3 = 8;
          e3 |= 16;
          break;
        case wa:
          g3 = 8;
          e3 |= 1;
          break;
        case xa:
          return a2 = nh(12, c3, b2, e3 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c3, b2, e3), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c3, b2, e3), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c3, e3, f2, b2);
        case Ja:
          return a2 = nh(24, c3, b2, e3), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
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
          throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = nh(g3, c3, b2, e3);
  b2.elementType = a2;
  b2.type = d3;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c3, d3) {
  a2 = nh(7, a2, d3, b2);
  a2.lanes = c3;
  return a2;
}
function vi(a2, b2, c3, d3) {
  a2 = nh(23, a2, d3, b2);
  a2.elementType = Ia;
  a2.lanes = c3;
  return a2;
}
function Ug(a2, b2, c3) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c3;
  return a2;
}
function Wg(a2, b2, c3) {
  b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c3;
  b2.stateNode = {containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation};
  return b2;
}
function jk(a2, b2, c3) {
  this.tag = b2;
  this.containerInfo = a2;
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
function kk(a2, b2, c3) {
  var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d3 == null ? null : "" + d3, children: a2, containerInfo: b2, implementation: c3};
}
function lk(a2, b2, c3, d3) {
  var e3 = b2.current, f2 = Hg(), g3 = Ig(e3);
  a:
    if (c3) {
      c3 = c3._reactInternals;
      b: {
        if (Zb(c3) !== c3 || c3.tag !== 1)
          throw Error(y(170));
        var h2 = c3;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c3.tag === 1) {
        var k3 = c3.type;
        if (Ff(k3)) {
          c3 = If(c3, k3, h2);
          break a;
        }
      }
      c3 = h2;
    } else
      c3 = Cf;
  b2.context === null ? b2.context = c3 : b2.pendingContext = c3;
  b2 = zg(f2, g3);
  b2.payload = {element: a2};
  d3 = d3 === void 0 ? null : d3;
  d3 !== null && (b2.callback = d3);
  Ag(e3, b2);
  Jg(e3, g3, f2);
  return g3;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c3 = a2.retryLane;
    a2.retryLane = c3 !== 0 && c3 < b2 ? c3 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c3) {
  var d3 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
  c3 = new jk(a2, b2, c3 != null && c3.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c3.current = b2;
  b2.stateNode = c3;
  xg(b2);
  a2[ff] = c3.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d3)
    for (a2 = 0; a2 < d3.length; a2++) {
      b2 = d3[a2];
      var e3 = b2._getVersion;
      e3 = e3(b2._source);
      c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b2, e3] : c3.mutableSourceEagerHydrationData.push(b2, e3);
    }
  this._internalRoot = c3;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c3; c3 = a2.lastChild; )
      a2.removeChild(c3);
  return new qk(a2, 0, b2 ? {hydrate: true} : void 0);
}
function tk(a2, b2, c3, d3, e3) {
  var f2 = c3._reactRootContainer;
  if (f2) {
    var g3 = f2._internalRoot;
    if (typeof e3 === "function") {
      var h2 = e3;
      e3 = function() {
        var a3 = mk(g3);
        h2.call(a3);
      };
    }
    lk(b2, g3, a2, e3);
  } else {
    f2 = c3._reactRootContainer = sk(c3, d3);
    g3 = f2._internalRoot;
    if (typeof e3 === "function") {
      var k3 = e3;
      e3 = function() {
        var a3 = mk(g3);
        k3.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g3, a2, e3);
    });
  }
  return mk(g3);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg(), c3 = Ig(a2);
    Jg(a2, c3, b2);
    ok(a2, c3);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c3) {
  switch (b2) {
    case "input":
      ab(a2, c3);
      b2 = c3.name;
      if (c3.type === "radio" && b2 != null) {
        for (c3 = a2; c3.parentNode; )
          c3 = c3.parentNode;
        c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c3.length; b2++) {
          var d3 = c3[b2];
          if (d3 !== a2 && d3.form === a2.form) {
            var e3 = Db(d3);
            if (!e3)
              throw Error(y(90));
            Wa(d3);
            ab(d3, e3);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c3);
      break;
    case "select":
      b2 = c3.value, b2 != null && fb(a2, !!c3.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c3, d3, e3) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a2.bind(null, b2, c3, d3, e3));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c3 = X;
  X |= 2;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y(200));
  return kk(a2, b2, null, c3);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.1", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
var flushSync = function(a2, b2) {
  var c3 = X;
  if ((c3 & 48) !== 0)
    return a2(b2);
  X |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X = c3, ig();
  }
};
var hydrate = function(a2, b2, c3) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, true, c3);
};
var render = function(a2, b2, c3) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, false, c3);
};
var unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a2, b2, c3, d3) {
  if (!rk(c3))
    throw Error(y(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y(38));
  return tk(a2, b2, c3, false, d3);
};
var version = "17.0.1";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// _snowpack/pkg/common/hoist-non-react-statics.cjs-0d987a3b.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c = b ? Symbol.for("react.element") : 60103;
var d = b ? Symbol.for("react.portal") : 60106;
var e = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k = b ? Symbol.for("react.context") : 60110;
var l = b ? Symbol.for("react.async_mode") : 60111;
var m = b ? Symbol.for("react.concurrent_mode") : 60111;
var n = b ? Symbol.for("react.forward_ref") : 60112;
var p = b ? Symbol.for("react.suspense") : 60113;
var q = b ? Symbol.for("react.suspense_list") : 60120;
var r = b ? Symbol.for("react.memo") : 60115;
var t = b ? Symbol.for("react.lazy") : 60116;
var v = b ? Symbol.for("react.block") : 60121;
var w = b ? Symbol.for("react.fundamental") : 60117;
var x = b ? Symbol.for("react.responder") : 60118;
var y2 = b ? Symbol.for("react.scope") : 60119;
function z(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u = a2.$$typeof;
    switch (u) {
      case c:
        switch (a2 = a2.type, a2) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a2;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a2) {
  return z(a2) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element2 = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function(a2) {
  return A(a2) || z(a2) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function(a2) {
  return z(a2) === k;
};
var isContextProvider = function(a2) {
  return z(a2) === h;
};
var isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c;
};
var isForwardRef = function(a2) {
  return z(a2) === n;
};
var isFragment = function(a2) {
  return z(a2) === e;
};
var isLazy = function(a2) {
  return z(a2) === t;
};
var isMemo = function(a2) {
  return z(a2) === r;
};
var isPortal = function(a2) {
  return z(a2) === d;
};
var isProfiler = function(a2) {
  return z(a2) === g;
};
var isStrictMode = function(a2) {
  return z(a2) === f;
};
var isSuspense = function(a2) {
  return z(a2) === p;
};
var isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t || a2.$$typeof === r || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n || a2.$$typeof === w || a2.$$typeof === x || a2.$$typeof === y2 || a2.$$typeof === v);
};
var typeOf = z;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element: Element2,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

// _snowpack/pkg/@chakra-ui/react.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e3) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var e2 = "-ms-";
var r2 = "-moz-";
var a = "-webkit-";
var c2 = "comm";
var n2 = "rule";
var t$1 = "decl";
var i = "@import";
var p2 = "@keyframes";
var k2 = Math.abs;
var d2 = String.fromCharCode;
function m2(e3, r3) {
  return (((r3 << 2 ^ z2(e3, 0)) << 2 ^ z2(e3, 1)) << 2 ^ z2(e3, 2)) << 2 ^ z2(e3, 3);
}
function g2(e3) {
  return e3.trim();
}
function x2(e3, r3) {
  return (e3 = r3.exec(e3)) ? e3[0] : e3;
}
function y3(e3, r3, a2) {
  return e3.replace(r3, a2);
}
function j(e3, r3) {
  return e3.indexOf(r3);
}
function z2(e3, r3) {
  return e3.charCodeAt(r3) | 0;
}
function C(e3, r3, a2) {
  return e3.slice(r3, a2);
}
function A2(e3) {
  return e3.length;
}
function M2(e3) {
  return e3.length;
}
function O2(e3, r3) {
  return r3.push(e3), e3;
}
function S2(e3, r3) {
  return e3.map(r3).join("");
}
var q2 = 1;
var B2 = 1;
var D2 = 0;
var E = 0;
var F2 = 0;
var G2 = "";
function H2(e3, r3, a2, c3, n3, t3, s) {
  return {value: e3, root: r3, parent: a2, type: c3, props: n3, children: t3, line: q2, column: B2, length: s, return: ""};
}
function I2(e3, r3, a2) {
  return H2(e3, r3.root, r3.parent, a2, r3.props, r3.children, 0);
}
function J() {
  return F2;
}
function K() {
  F2 = E < D2 ? z2(G2, E++) : 0;
  if (B2++, F2 === 10)
    B2 = 1, q2++;
  return F2;
}
function L() {
  return z2(G2, E);
}
function N2() {
  return E;
}
function P2(e3, r3) {
  return C(G2, e3, r3);
}
function Q(e3) {
  switch (e3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function R2(e3) {
  return q2 = B2 = 1, D2 = A2(G2 = e3), E = 0, [];
}
function T2(e3) {
  return G2 = "", e3;
}
function U2(e3) {
  return g2(P2(E - 1, Y2(e3 === 91 ? e3 + 2 : e3 === 40 ? e3 + 1 : e3)));
}
function W2(e3) {
  while (F2 = L())
    if (F2 < 33)
      K();
    else
      break;
  return Q(e3) > 2 || Q(F2) > 3 ? "" : " ";
}
function Y2(e3) {
  while (K())
    switch (F2) {
      case e3:
        return E;
      case 34:
      case 39:
        return Y2(e3 === 34 || e3 === 39 ? e3 : F2);
      case 40:
        if (e3 === 41)
          Y2(e3);
        break;
      case 92:
        K();
        break;
    }
  return E;
}
function Z2(e3, r3) {
  while (K())
    if (e3 + F2 === 47 + 10)
      break;
    else if (e3 + F2 === 42 + 42 && L() === 47)
      break;
  return "/*" + P2(r3, E - 1) + "*" + d2(e3 === 47 ? e3 : K());
}
function _(e3) {
  while (!Q(L()))
    K();
  return P2(e3, E);
}
function ee2(e3) {
  return T2(re2("", null, null, null, [""], e3 = R2(e3), 0, [0], e3));
}
function re2(e3, r3, a2, c3, n3, t3, s, u, i2) {
  var f2 = 0;
  var o = 0;
  var l2 = s;
  var v2 = 0;
  var h2 = 0;
  var p3 = 0;
  var w2 = 1;
  var b2 = 1;
  var $ = 1;
  var k3 = 0;
  var m3 = "";
  var g3 = n3;
  var x3 = t3;
  var j2 = c3;
  var z3 = m3;
  while (b2)
    switch (p3 = k3, k3 = K()) {
      case 34:
      case 39:
      case 91:
      case 40:
        z3 += U2(k3);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z3 += W2(p3);
        break;
      case 47:
        switch (L()) {
          case 42:
          case 47:
            O2(ce2(Z2(K(), N2()), r3, a2), i2);
            break;
          default:
            z3 += "/";
        }
        break;
      case 123 * w2:
        u[f2++] = A2(z3) * $;
      case 125 * w2:
      case 59:
      case 0:
        switch (k3) {
          case 0:
          case 125:
            b2 = 0;
          case 59 + o:
            if (h2 > 0 && A2(z3) - l2)
              O2(h2 > 32 ? ne2(z3 + ";", c3, a2, l2 - 1) : ne2(y3(z3, " ", "") + ";", c3, a2, l2 - 2), i2);
            break;
          case 59:
            z3 += ";";
          default:
            O2(j2 = ae2(z3, r3, a2, f2, o, n3, u, m3, g3 = [], x3 = [], l2), t3);
            if (k3 === 123)
              if (o === 0)
                re2(z3, r3, j2, j2, g3, t3, l2, u, x3);
              else
                switch (v2) {
                  case 100:
                  case 109:
                  case 115:
                    re2(e3, j2, j2, c3 && O2(ae2(e3, j2, j2, 0, 0, n3, u, m3, n3, g3 = [], l2), x3), n3, x3, l2, u, c3 ? g3 : x3);
                    break;
                  default:
                    re2(z3, j2, j2, j2, [""], x3, l2, u, x3);
                }
        }
        f2 = o = h2 = 0, w2 = $ = 1, m3 = z3 = "", l2 = s;
        break;
      case 58:
        l2 = 1 + A2(z3), h2 = p3;
      default:
        switch (z3 += d2(k3), k3 * w2) {
          case 38:
            $ = o > 0 ? 1 : (z3 += "\f", -1);
            break;
          case 44:
            u[f2++] = (A2(z3) - 1) * $, $ = 1;
            break;
          case 64:
            if (L() === 45)
              z3 += U2(K());
            v2 = L(), o = A2(m3 = z3 += _(N2())), k3++;
            break;
          case 45:
            if (p3 === 45 && A2(z3) == 2)
              w2 = 0;
        }
    }
  return t3;
}
function ae2(e3, r3, a2, c3, t3, s, u, i2, f2, o, l2) {
  var v2 = t3 - 1;
  var h2 = t3 === 0 ? s : [""];
  var p3 = M2(h2);
  for (var w2 = 0, b2 = 0, $ = 0; w2 < c3; ++w2)
    for (var d3 = 0, m3 = C(e3, v2 + 1, v2 = k2(b2 = u[w2])), x3 = e3; d3 < p3; ++d3)
      if (x3 = g2(b2 > 0 ? h2[d3] + " " + m3 : y3(m3, /&\f/g, h2[d3])))
        f2[$++] = x3;
  return H2(e3, r3, a2, t3 === 0 ? n2 : i2, f2, o, l2);
}
function ce2(e3, r3, a2) {
  return H2(e3, r3, a2, c2, d2(J()), C(e3, 2, -2), 0);
}
function ne2(e3, r3, a2, c3) {
  return H2(e3, r3, a2, t$1, C(e3, 0, c3), C(e3, c3 + 1, -1), c3);
}
function te2(c3, n3) {
  switch (m2(c3, n3)) {
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c3 + c3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c3 + r2 + c3 + e2 + c3 + c3;
    case 6828:
    case 4268:
      return a + c3 + e2 + c3 + c3;
    case 6165:
      return a + c3 + e2 + "flex-" + c3 + c3;
    case 5187:
      return a + c3 + y3(c3, /(\w+).+(:[^]+)/, a + "box-$1$2" + e2 + "flex-$1$2") + c3;
    case 5443:
      return a + c3 + e2 + "flex-item-" + y3(c3, /flex-|-self/, "") + c3;
    case 4675:
      return a + c3 + e2 + "flex-line-pack" + y3(c3, /align-content|flex-|-self/, "") + c3;
    case 5548:
      return a + c3 + e2 + y3(c3, "shrink", "negative") + c3;
    case 5292:
      return a + c3 + e2 + y3(c3, "basis", "preferred-size") + c3;
    case 6060:
      return a + "box-" + y3(c3, "-grow", "") + a + c3 + e2 + y3(c3, "grow", "positive") + c3;
    case 4554:
      return a + y3(c3, /([^-])(transform)/g, "$1" + a + "$2") + c3;
    case 6187:
      return y3(y3(y3(c3, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c3, "") + c3;
    case 5495:
    case 3959:
      return y3(c3, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return y3(y3(c3, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e2 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c3 + c3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y3(c3, /(.+)-inline(.+)/, a + "$1$2") + c3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A2(c3) - 1 - n3 > 6)
        switch (z2(c3, n3 + 1)) {
          case 102:
            n3 = z2(c3, n3 + 3);
          case 109:
            return y3(c3, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r2 + (n3 == 108 ? "$3" : "$2-$3")) + c3;
          case 115:
            return ~j(c3, "stretch") ? te2(y3(c3, "stretch", "fill-available"), n3) + c3 : c3;
        }
      break;
    case 4949:
      if (z2(c3, n3 + 1) !== 115)
        break;
    case 6444:
      switch (z2(c3, A2(c3) - 3 - (~j(c3, "!important") && 10))) {
        case 107:
        case 111:
          return y3(c3, c3, a + c3) + c3;
        case 101:
          return y3(c3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z2(c3, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e2 + "$2box$3") + c3;
      }
      break;
    case 5936:
      switch (z2(c3, n3 + 11)) {
        case 114:
          return a + c3 + e2 + y3(c3, /[svh]\w+-[tblr]{2}/, "tb") + c3;
        case 108:
          return a + c3 + e2 + y3(c3, /[svh]\w+-[tblr]{2}/, "tb-rl") + c3;
        case 45:
          return a + c3 + e2 + y3(c3, /[svh]\w+-[tblr]{2}/, "lr") + c3;
      }
      return a + c3 + e2 + c3 + c3;
  }
  return c3;
}
function se2(e3, r3) {
  var a2 = "";
  var c3 = M2(e3);
  for (var n3 = 0; n3 < c3; n3++)
    a2 += r3(e3[n3], n3, e3, r3) || "";
  return a2;
}
function ue2(e3, r3, a2, s) {
  switch (e3.type) {
    case i:
    case t$1:
      return e3.return = e3.return || e3.value;
    case c2:
      return "";
    case n2:
      e3.value = e3.props.join(",");
  }
  return A2(a2 = se2(e3.children, s)) ? e3.return = e3.value + "{" + a2 + "}" : "";
}
function ie2(e3) {
  var r3 = M2(e3);
  return function(a2, c3, n3, t3) {
    var s = "";
    for (var u = 0; u < r3; u++)
      s += e3[u](a2, c3, n3, t3) || "";
    return s;
  };
}
function fe2(e3) {
  return function(r3) {
    if (!r3.root) {
      if (r3 = r3.return)
        e3(r3);
    }
  };
}
function oe2(c3, s, u, i2) {
  if (!c3.return)
    switch (c3.type) {
      case t$1:
        c3.return = te2(c3.value, c3.length);
        break;
      case p2:
        return se2([I2(y3(c3.value, "@", "@" + a), c3, "")], i2);
      case n2:
        if (c3.length)
          return S2(c3.props, function(n3) {
            switch (x2(n3, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return se2([I2(y3(n3, /:(read-\w+)/, ":" + r2 + "$1"), c3, "")], i2);
              case "::placeholder":
                return se2([I2(y3(n3, /:(plac\w+)/, ":" + a + "input-$1"), c3, ""), I2(y3(n3, /:(plac\w+)/, ":" + r2 + "$1"), c3, ""), I2(y3(n3, /:(plac\w+)/, e2 + "input-$1"), c3, "")], i2);
            }
            return "";
          });
    }
}
var weakMemoize = function weakMemoize2(func) {
  var cache = new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
function memoize$1(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character = 44;
  do {
    switch (Q(character)) {
      case 0:
        if (character === 38 && L() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += _(E - 1);
        break;
      case 2:
        parsed[index2] += U2(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index2] = L() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += d2(character);
    }
  } while (character = K());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return T2(toRules(R2(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || !element.length) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k3 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k3++) {
      element.props[k3] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [oe2];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function(node) {
      var attrib = node.getAttribute("data-emotion").split(" ");
      if (attrib[0] !== key) {
        return;
      }
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [ue2, fe2(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = ie2(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return se2(ee2(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k3, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k3 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16);
    k3 ^= k3 >>> 24;
    h2 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
};
var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.forwardRef(function(props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.createContext({});
var getTheme = function getTheme2(outerTheme, theme) {
  if (typeof theme === "function") {
    var mergedTheme = theme(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, {}, theme);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider$1 = function ThemeProvider(props) {
  var theme = react.useContext(ThemeContext);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /* @__PURE__ */ react.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
createCommonjsModule(function(module) {
  function _extends3() {
    module.exports = _extends3 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends3.apply(this, arguments);
  }
  module.exports = _extends3;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles = props.styles;
  var serialized = serializeStyles([styles], void 0, typeof styles === "function" || Array.isArray(styles) ? react.useContext(ThemeContext) : void 0);
  var sheetRef = react.useRef();
  react.useLayoutEffect(function() {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      sheet.hydrate([node]);
    }
    sheetRef.current = sheet;
    return function() {
      sheet.flush();
    };
  }, [cache]);
  react.useLayoutEffect(function() {
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    var sheet = sheetRef.current;
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
var isObject = (value) => {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
};
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
function runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var cx = function cx2() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  return classNames.filter(Boolean).join(" ");
};
function getLastItem(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var lodash_mergewith = createCommonjsModule(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e3) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n3, iteratee) {
    var index2 = -1, result = Array(n3);
    while (++index2 < n3) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function overArg(func, transform2) {
    return function(arg) {
      return func(transform2(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e3) {
    }
  }();
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map2 = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map2 || ListCache)(),
      string: new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeysIn(object) {
    if (!isObject2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject2(objValue) || isFunction2(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant(string),
      writable: true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while (++index2 < length) {
      array[index2] = source[index2];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index2 = -1, length = props.length;
    while (++index2 < length) {
      var key = props[index2];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index2 < length) {
        var source = sources[index2];
        if (source) {
          assigner(object, source, index2, customizer);
        }
      }
      return object;
    });
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index2];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e3) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isIterateeCall(value, index2, object) {
    if (!isObject2(object)) {
      return false;
    }
    var type = typeof index2;
    if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
      return eq(object[index2], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function overRest(func, start, transform2) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform2(array);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e3) {
      }
      try {
        return func + "";
      } catch (e3) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction2(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = mergeWith;
});
function omit(object, keys2) {
  var result = {};
  Object.keys(object).forEach((key) => {
    if (keys2.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function pick(object, keys2) {
  var result = {};
  keys2.forEach((key) => {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
function get(obj, path, fallback, index2) {
  var key = typeof path === "string" ? path.split(".") : [path];
  for (index2 = 0; index2 < key.length; index2 += 1) {
    if (!obj)
      break;
    obj = obj[key[index2]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = (fn) => {
  var cache = new WeakMap();
  var memoizedFn = (obj, path, fallback, index2) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }
    var map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    var value = fn(obj, path, fallback, index2);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach((key) => {
    var value = object[key];
    var shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = (object) => objectFilter(object, (val) => val !== null && val !== void 0);
var objectKeys = (obj) => Object.keys(obj);
var fromEntries = (entries) => entries.reduce((carry, _ref) => {
  var [key, value] = _ref;
  carry[key] = value;
  return carry;
}, {});
function createContext(options) {
  if (options === void 0) {
    options = {};
  }
  var {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  var Context = /* @__PURE__ */ react.createContext(void 0);
  Context.displayName = name;
  function useContext() {
    var context2 = react.useContext(Context);
    if (!context2 && strict) {
      throw new Error(errorMessage);
    }
    return context2;
  }
  return [Context.Provider, useContext, Context];
}
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
var analyzeCSSValue$1 = (value) => {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};
var px$1 = (value) => {
  if (value == null)
    return value;
  var {
    unitless
  } = analyzeCSSValue$1(value);
  return unitless || isNumber(value) ? value + "px" : value;
};
var sortByBreakpointValue = (a2, b2) => parseInt(a2[1], 10) > parseInt(b2[1], 10) ? 1 : -1;
var sortBps = (breakpoints) => fromEntries(Object.entries(breakpoints).sort(sortByBreakpointValue));
function normalize(breakpoints) {
  var sorted = sortBps(breakpoints);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints) {
  var value = Object.keys(sortBps(breakpoints));
  return new Set(value);
}
function subtract(value) {
  if (!value)
    return value;
  value = px$1(value);
  var factor = value.endsWith("px") ? -1 : -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, (m3) => "" + (parseFloat(m3) + factor));
}
function queryString(min, max) {
  var query = [];
  if (min)
    query.push("@media screen and (min-width: " + px$1(min) + ")");
  if (query.length > 0 && max)
    query.push("and");
  if (max)
    query.push("@media screen and (max-width: " + px$1(max) + ")");
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints) {
  var _breakpoints$base;
  if (!breakpoints)
    return null;
  breakpoints.base = (_breakpoints$base = breakpoints.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints);
  var queries = Object.entries(breakpoints).sort(sortByBreakpointValue).map((_ref, index2, entry) => {
    var _entry;
    var [breakpoint, minW] = _ref;
    var [, maxW] = (_entry = entry[index2 + 1]) != null ? _entry : [];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : void 0;
    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });
  var _keys = keys(breakpoints);
  var _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive(test) {
      var keys2 = Object.keys(test);
      return keys2.length > 0 && keys2.every((key) => _keys.has(key));
    },
    asObject: sortBps(breakpoints),
    asArray: normalize(breakpoints),
    details: queries,
    media: [null, ...normalized.map((minW) => queryString(minW)).slice(1)],
    toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      var result = _keysArr.map((bp) => {
        var _test$bp;
        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test.reduce((acc, value, index2) => {
        var key = _keysArr[index2];
        if (key != null && value != null)
          acc[key] = value;
        return acc;
      }, {});
    }
  };
}
var ColorModeContext = /* @__PURE__ */ react.createContext({});
var useColorMode = () => {
  var context2 = react.useContext(ColorModeContext);
  if (context2 === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context2;
};
var analyzeCSSValue = (value) => {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};
var px = (value) => {
  if (value == null)
    return value;
  var {
    unitless
  } = analyzeCSSValue(value);
  return unitless || isNumber(value) ? value + "px" : value;
};
var tokenToCSSVar = (scale, value) => (theme) => {
  var valueStr = String(value);
  var key = scale ? scale + "." + valueStr : valueStr;
  return isObject(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value;
};
function createTransform(options) {
  var {
    scale,
    transform: transform2,
    compose
  } = options;
  var fn = (value, theme) => {
    var _transform;
    var _value = tokenToCSSVar(scale, value)(theme);
    var result = (_transform = transform2 == null ? void 0 : transform2(_value, theme)) != null ? _transform : _value;
    if (compose) {
      result = compose(result, theme);
    }
    return result;
  };
  return fn;
}
function toConfig(scale, transform2) {
  return (property) => {
    var result = {
      property,
      scale
    };
    result.transform = createTransform({
      scale,
      transform: transform2
    });
    return result;
  };
}
var getRtl = (_ref) => {
  var {
    rtl,
    ltr
  } = _ref;
  return (theme) => theme.direction === "rtl" ? rtl : ltr;
};
function logical(options) {
  var {
    property,
    scale,
    transform: transform2
  } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform2
    }) : transform2
  };
}
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function fractionalValue(value) {
  return !isNumber(value) || value > 1 ? value : value * 100 + "%";
}
var t2 = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", px),
  space: toConfig("space", px),
  spaceT: toConfig("space", px),
  prop: (property, scale, transform2) => _extends$5({
    property,
    scale
  }, scale && {
    transform: createTransform({
      scale,
      transform: transform2
    })
  }),
  sizes: toConfig("sizes", px),
  sizesT: toConfig("sizes", fractionalValue),
  shadows: toConfig("shadows"),
  logical
};
function _wrapRegExp(re3, groups) {
  _wrapRegExp = function _wrapRegExp2(re4, groups2) {
    return new BabelRegExp(re4, void 0, groups2);
  };
  var _RegExp = _wrapNativeSuper(RegExp);
  var _super = RegExp.prototype;
  var _groups = new WeakMap();
  function BabelRegExp(re4, flags2, groups2) {
    var _this = _RegExp.call(this, re4, flags2);
    _groups.set(_this, groups2 || _groups.get(re4));
    return _this;
  }
  _inherits(BabelRegExp, _RegExp);
  BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result)
      result.groups = buildGroups(result, this);
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution === "string") {
      var groups2 = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_2, name) {
        return "$" + groups2[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = [];
        args.push.apply(args, arguments);
        if (typeof args[args.length - 1] !== "object") {
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re4) {
    var g3 = _groups.get(re4);
    return Object.keys(g3).reduce(function(groups2, name) {
      groups2[name] = result[g3[name]];
      return groups2;
    }, Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {constructor: {value: Wrapper, enumerable: false, writable: true, configurable: true}});
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e3) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o2, p4) {
    o2.__proto__ = p4;
    return o2;
  };
  return _setPrototypeOf(o, p3);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme) {
  var _regex$exec$groups, _regex$exec;
  if (value == null || globalSet.has(value))
    return value;
  var regex = /* @__PURE__ */ _wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });
  var {
    type,
    values
  } = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {};
  if (!type || !values)
    return value;
  var _type = type.includes("-gradient") ? type : type + "-gradient";
  var [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  var direction = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction);
  var _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    var [_color, _stop] = stop.split(" ");
    var key = "colors." + _color;
    var color2 = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color;
    return _stop ? [color2, _stop].join(" ") : color2;
  });
  return _type + "(" + _values.join(", ") + ")";
}
var gradientTransform = (value, theme) => parseGradient(value, theme != null ? theme : {});
function bgClipTransform(value) {
  return value === "text" ? {
    color: "transparent",
    backgroundClip: "text"
  } : {
    backgroundClip: value
  };
}
var background = {
  bg: t2.colors("background"),
  bgColor: t2.colors("backgroundColor"),
  background: t2.colors("background"),
  backgroundColor: t2.colors("backgroundColor"),
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: {
    transform: bgClipTransform
  },
  bgImage: t2.prop("backgroundImage"),
  bgImg: t2.prop("backgroundImage"),
  bgBlendMode: t2.prop("backgroundBlendMode"),
  bgSize: t2.prop("backgroundSize"),
  bgPosition: t2.prop("backgroundPosition"),
  bgPos: t2.prop("backgroundPosition"),
  bgRepeat: t2.prop("backgroundRepeat"),
  bgAttachment: t2.prop("backgroundAttachment"),
  bgGradient: {
    property: "backgroundImage",
    transform: gradientTransform
  },
  bgClip: {
    transform: bgClipTransform
  }
};
var border = {
  border: t2.borders("border"),
  borderWidth: t2.borderWidths("borderWidth"),
  borderStyle: t2.borderStyles("borderStyle"),
  borderColor: t2.colors("borderColor"),
  borderRadius: t2.radii("borderRadius"),
  borderTop: t2.borders("borderTop"),
  borderBlockStart: t2.borders("borderBlockStart"),
  borderTopLeftRadius: t2.radii("borderTopLeftRadius"),
  borderStartStartRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t2.radii("borderTopRightRadius"),
  borderStartEndRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t2.borders("borderRight"),
  borderInlineEnd: t2.borders("borderInlineEnd"),
  borderBottom: t2.borders("borderBottom"),
  borderBlockEnd: t2.borders("borderBlockEnd"),
  borderBottomLeftRadius: t2.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t2.radii("borderBottomRightRadius"),
  borderLeft: t2.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t2.borders(["borderLeft", "borderRight"]),
  borderInline: t2.borders("borderInline"),
  borderY: t2.borders(["borderTop", "borderBottom"]),
  borderBlock: t2.borders("borderBlock"),
  borderTopWidth: t2.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t2.borderWidths("borderBlockStartWidth"),
  borderTopColor: t2.colors("borderTopColor"),
  borderBlockStartColor: t2.colors("borderBlockStartColor"),
  borderTopStyle: t2.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t2.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t2.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t2.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t2.colors("borderBottomColor"),
  borderBlockEndColor: t2.colors("borderBlockEndColor"),
  borderBottomStyle: t2.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t2.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t2.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t2.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t2.colors("borderLeftColor"),
  borderInlineStartColor: t2.colors("borderInlineStartColor"),
  borderLeftStyle: t2.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t2.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t2.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t2.borderWidths("borderInlineEndWidth"),
  borderRightColor: t2.colors("borderRightColor"),
  borderInlineEndColor: t2.colors("borderInlineEndColor"),
  borderRightStyle: t2.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t2.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t2.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t2.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t2.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t2.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t2.colors("color"),
  textColor: t2.colors("color"),
  opacity: true,
  fill: t2.colors("fill"),
  stroke: t2.colors("stroke")
};
var reverse = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform(value) {
      var _reverse$value;
      var {
        space: space2,
        divide
      } = (_reverse$value = reverse[value]) != null ? _reverse$value : {};
      var result = {
        flexDirection: value
      };
      if (space2)
        result[space2] = 1;
      if (divide)
        result[divide] = 1;
      return result;
    }
  },
  spaceX: {
    static: {
      [owlSelector]: {
        marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
        marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
      }
    },
    transform: createTransform({
      scale: "space",
      transform: (value) => value !== null ? {
        "--chakra-space-x": value
      } : null
    })
  },
  spaceY: {
    static: {
      [owlSelector]: {
        marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
        marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
      }
    },
    transform: createTransform({
      scale: "space",
      transform: (value) => value != null ? {
        "--chakra-space-y": value
      } : null
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t2.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  flexDir: t2.prop("flexDirection")
};
var grid = {
  gridGap: t2.space("gridGap"),
  gridColumnGap: t2.space("gridColumnGap"),
  gridRowGap: t2.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var layout = {
  width: t2.sizesT("width"),
  inlineSize: t2.sizesT("inlineSize"),
  height: t2.sizes("height"),
  blockSize: t2.sizes("blockSize"),
  boxSize: t2.sizes(["width", "height"]),
  minWidth: t2.sizes("minWidth"),
  minInlineSize: t2.sizes("minInlineSize"),
  minHeight: t2.sizes("minHeight"),
  minBlockSize: t2.sizes("minBlockSize"),
  maxWidth: t2.sizes("maxWidth"),
  maxInlineSize: t2.sizes("maxInlineSize"),
  maxHeight: t2.sizes("maxHeight"),
  maxBlockSize: t2.sizes("maxBlockSize"),
  d: t2.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight
});
var floatTransform = (value, theme) => {
  var map = {
    left: "right",
    right: "left"
  };
  return theme.direction === "rtl" ? map[value] : value;
};
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var others = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: {
    property: "float",
    transform: floatTransform
  },
  willChange: true,
  filter: true,
  clipPath: true,
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme) => memoizedGet(theme, "layerStyles." + value, {})
  },
  textStyle: {
    processResult: true,
    transform: (value, theme) => memoizedGet(theme, "textStyles." + value, {})
  },
  apply: {
    processResult: true,
    transform: (value, theme) => memoizedGet(theme, value, {})
  }
};
var position = {
  position: true,
  pos: t2.prop("position"),
  zIndex: t2.prop("zIndex", "zIndices"),
  inset: t2.spaceT(["top", "right", "bottom", "left"]),
  insetX: t2.spaceT(["left", "right"]),
  insetInline: t2.spaceT("insetInline"),
  insetY: t2.spaceT(["top", "bottom"]),
  insetBlock: t2.spaceT("insetBlock"),
  top: t2.spaceT("top"),
  insetBlockStart: t2.spaceT("insetBlockStart"),
  bottom: t2.spaceT("bottom"),
  insetBlockEnd: t2.spaceT("insetBlockEnd"),
  left: t2.spaceT("left"),
  insetInlineStart: t2.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t2.spaceT("right"),
  insetInlineEnd: t2.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var shadow = {
  boxShadow: t2.shadows("boxShadow"),
  textShadow: t2.shadows("textShadow")
};
Object.assign(shadow, {
  shadow: shadow.boxShadow
});
var space = {
  margin: t2.spaceT("margin"),
  marginTop: t2.spaceT("marginTop"),
  marginBlockStart: t2.spaceT("marginBlockStart"),
  marginRight: t2.spaceT("marginRight"),
  marginInlineEnd: t2.spaceT("marginInlineEnd"),
  marginBottom: t2.spaceT("marginBottom"),
  marginBlockEnd: t2.spaceT("marginBlockEnd"),
  marginLeft: t2.spaceT("marginLeft"),
  marginInlineStart: t2.spaceT("marginInlineStart"),
  marginX: t2.spaceT(["marginLeft", "marginRight"]),
  marginInline: t2.spaceT("marginInline"),
  marginY: t2.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t2.spaceT("marginBlock"),
  padding: t2.space("padding"),
  paddingTop: t2.space("paddingTop"),
  paddingBlockStart: t2.space("paddingBlockStart"),
  paddingRight: t2.space("paddingRight"),
  paddingBottom: t2.space("paddingBottom"),
  paddingBlockEnd: t2.space("paddingBlockEnd"),
  paddingLeft: t2.space("paddingLeft"),
  paddingInlineStart: t2.space("paddingInlineStart"),
  paddingInlineEnd: t2.space("paddingInlineEnd"),
  paddingX: t2.space(["paddingLeft", "paddingRight"]),
  paddingInline: t2.space("paddingInline"),
  paddingY: t2.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t2.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var typography = {
  fontFamily: t2.prop("fontFamily", "fonts"),
  fontSize: t2.prop("fontSize", "fontSizes", px),
  fontWeight: t2.prop("fontWeight", "fontWeights"),
  lineHeight: t2.prop("lineHeight", "lineHeights"),
  letterSpacing: t2.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  }
};
var outline = {
  outline: true,
  outlineOffset: true,
  outlineColor: t2.colors("outlineColor"),
  ringColor: t2.prop("--chakra-ring-color", "colors"),
  ringOffsetWidth: t2.prop("--chakra-ring-offset"),
  ringOffsetColor: t2.prop("--chakra-ring-offset-color", "colors"),
  ringWidth: t2.prop("--chakra-ring-offset"),
  ringInset: t2.prop("--chakra-ring-inset")
};
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t2.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t2.prop("listStyleImage")
};
var transition = {
  transition: true,
  transitionDuration: {
    property: "transitionDuration",
    scale: "transition.duration"
  },
  transitionProperty: {
    property: "transitionProperty",
    scale: "transition.property"
  },
  transitionTimingFunction: {
    property: "transitionTimingFunction",
    scale: "transition.easing"
  }
};
var templates = {
  auto: "var(--chakra-transform)",
  "auto-gpu": "var(--chakra-transform-gpu)"
};
var transform = {
  transform: {
    property: "transform",
    transform(value) {
      var _templates$value;
      return (_templates$value = templates[value]) != null ? _templates$value : value;
    }
  },
  transformOrigin: true
};
var group = {
  hover: (selector) => selector + ":hover &, " + selector + "[data-hover] &",
  focus: (selector) => selector + ":focus &, " + selector + "[data-focus] &",
  active: (selector) => selector + ":active &, " + selector + "[data-active] &",
  disabled: (selector) => selector + ":disabled &, " + selector + "[data-disabled] &",
  invalid: (selector) => selector + ":invalid &, " + selector + "[data-invalid] &",
  checked: (selector) => selector + ":checked &, " + selector + "[data-checked] &",
  indeterminate: (selector) => selector + ":indeterminate &, " + selector + "[aria-checked=mixed] &, " + selector + "[data-indeterminate] &",
  readOnly: (selector) => selector + ":read-only &, " + selector + "[readonly] &, " + selector + "[data-read-only] &",
  expanded: (selector) => selector + ":read-only &, " + selector + "[aria-expanded=true] &, " + selector + "[data-expanded] &"
};
var toGroup = (fn) => merge(fn, "[role=group]", "[data-group]", ".group");
var merge = function merge2(fn) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }
  return selectors.map(fn).join(", ");
};
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible",
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(group.hover),
  _groupFocus: toGroup(group.focus),
  _groupActive: toGroup(group.active),
  _groupDisabled: toGroup(group.disabled),
  _groupInvalid: toGroup(group.invalid),
  _groupChecked: toGroup(group.checked),
  _placeholder: "&::placeholder",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _dark: ".dark &, [data-theme=dark] &"
};
var pseudoPropNames = objectKeys(pseudoSelectors);
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var systemProps = lodash_mergewith({}, background, border, color, flexbox, layout, outline, grid, others, position, shadow, space, typography, transform, list, transition);
lodash_mergewith({}, space, layout, flexbox, grid, position);
var propNames = [...objectKeys(systemProps), ...pseudoPropNames];
var styleProps = _extends$4({}, systemProps, pseudoSelectors);
var isStyleProp = (prop) => prop in styleProps;
var expandResponsive = (styles) => (theme) => {
  if (!theme.__breakpoints)
    return styles;
  var {
    isResponsive,
    toArrayValue,
    media: medias
  } = theme.__breakpoints;
  var computedStyles = {};
  for (var key in styles) {
    var value = runIfFn(styles[key], theme);
    if (value == null)
      continue;
    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }
    var queries = value.slice(0, medias.length).length;
    for (var index2 = 0; index2 < queries; index2 += 1) {
      var media = medias == null ? void 0 : medias[index2];
      if (!media) {
        computedStyles[key] = value[index2];
        continue;
      }
      computedStyles[media] = computedStyles[media] || {};
      if (value[index2] == null) {
        continue;
      }
      computedStyles[media][key] = value[index2];
    }
  }
  return computedStyles;
};
function getCss(options) {
  var {
    configs = {},
    pseudos = {},
    theme
  } = options;
  var css2 = function css3(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }
    var _styles = runIfFn(stylesOrFn, theme);
    var styles = expandResponsive(_styles)(theme);
    var computedStyles = {};
    for (var k3 in styles) {
      var _config$transform, _config, _config2, _config3, _config4, _config5, _config6, _config7;
      var valueOrFn = styles[k3];
      var value = runIfFn(valueOrFn, theme);
      var key = k3 in pseudos ? pseudos[k3] : k3;
      var config = configs[key];
      if (config === true) {
        config = {
          property: key
        };
      }
      if (isObject(value)) {
        computedStyles[key] = css3(value, true);
        continue;
      }
      var rawValue = (_config$transform = (_config = config) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme)) != null ? _config$transform : value;
      rawValue = (_config2 = config) != null && _config2.processResult ? css3(rawValue, true) : rawValue;
      if ((_config3 = config) != null && _config3.property) {
        config.property = runIfFn(config.property, theme);
      }
      if (!nested && (_config4 = config) != null && _config4.static) {
        var staticStyles = runIfFn(config.static, theme);
        computedStyles = lodash_mergewith({}, computedStyles, staticStyles);
      }
      if ((_config5 = config) != null && _config5.property && Array.isArray((_config6 = config) == null ? void 0 : _config6.property)) {
        for (var property of config.property) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if ((_config7 = config) != null && _config7.property) {
        if (config.property === "&" && isObject(rawValue)) {
          computedStyles = lodash_mergewith({}, computedStyles, rawValue);
        } else {
          computedStyles[config.property] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = lodash_mergewith({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css2;
}
var css = (styles) => (theme) => {
  var cssFn = getCss({
    theme,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles);
};
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var replaceWhiteSpace = function replaceWhiteSpace2(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
};
var escape = (value) => {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  var isDecimal = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal ? valueStr.replace(".", "\\.") : value;
};
var toVarDefinition = function toVarDefinition2(value, prefix2) {
  if (prefix2 === void 0) {
    prefix2 = "";
  }
  return "--" + [prefix2, escape(value)].filter(Boolean).join("-");
};
var toVarReference = (value) => "var(" + escape(value) + ")";
var toNegativeVar = (value) => "calc(" + escape(value) + " * -1)";
var tokens = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transitions", "transition.duration", "transition.property", "transition.easing"];
function extractTokens(theme) {
  var _tokens = tokens;
  return pick(theme, _tokens);
}
function omitVars(rawTheme) {
  var cleanTheme = _objectWithoutPropertiesLoose$4(rawTheme, ["__cssMap", "__cssVars", "__breakpoints"]);
  return cleanTheme;
}
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...transformTemplate].join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...transformTemplate].join(" ");
}
function toCSSVar(rawTheme) {
  var _theme$config;
  var theme = omitVars(rawTheme);
  var tokens2 = extractTokens(theme);
  var cssVarPrefix = (_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var {
    cssMap,
    cssVars
  } = toProperties(tokens2, {
    cssVarPrefix
  });
  var defaultCssVars = {
    "--chakra-ring-offset": "0px",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-width": "3px",
    "--chakra-ring-inset": "var(--chakra-empty, /*!*/ /*!*/)",
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset) var(--chakra-ring-offset-color, transparent)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset)) var(--chakra-ring-color)",
    "--chakra-ring": "var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), 0 0 transparent",
    "--chakra-transform-gpu": getTransformGpuTemplate(),
    "--chakra-transform": getTransformTemplate(),
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme, {
    __cssVars: _extends$3({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme.breakpoints)
  });
  return theme;
}
function toProperties(target, options, initialContext, prefixes) {
  if (prefixes === void 0) {
    prefixes = [];
  }
  var context2 = {
    cssMap: _extends$3({}, initialContext == null ? void 0 : initialContext.cssMap),
    cssVars: _extends$3({}, initialContext == null ? void 0 : initialContext.cssVars)
  };
  return Object.entries(target).reduce((properties, _ref) => {
    var [key, value] = _ref;
    if (isObject(value) || Array.isArray(value)) {
      var nested = toProperties(value, options, properties, prefixes.concat(key));
      Object.assign(properties.cssVars, nested.cssVars);
      Object.assign(properties.cssMap, nested.cssMap);
    } else {
      var _tokenHandlerMap$firs;
      var finalKey = prefixes.concat(key);
      var [firstKey] = finalKey;
      var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;
      var {
        cssVars,
        cssMap
      } = handler(finalKey, value, options);
      Object.assign(properties.cssVars, cssVars);
      Object.assign(properties.cssMap, cssMap);
    }
    return properties;
  }, context2);
}
var tokenHandlerMap = {
  space: (keys2, value, options) => {
    var properties = tokenHandlerMap.defaultHandler(keys2, value, options);
    var [firstKey, ...referenceKeys] = keys2;
    var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
    var negativeVarKey = keys2.join("-");
    var cssVar = toVarDefinition(negativeVarKey, options.cssVarPrefix);
    var negativeValue = isCssVar(String(value)) ? toNegativeVar(String(value)) : "-" + value;
    var varRef = toNegativeVar(toVarReference(cssVar));
    return {
      cssVars: properties.cssVars,
      cssMap: _extends$3({}, properties.cssMap, {
        [negativeLookupKey]: {
          value: negativeValue,
          var: cssVar,
          varRef
        }
      })
    };
  },
  defaultHandler: (keys2, value, options) => {
    var lookupKey = keys2.join(".");
    var varKey = keys2.join("-");
    var cssVar = toVarDefinition(varKey, options.cssVarPrefix);
    return {
      cssVars: {
        [cssVar]: value
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: cssVar,
          varRef: toVarReference(cssVar)
        }
      }
    };
  }
};
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor)
      return false;
    var length, i2, keys2;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a2 instanceof Map && b2 instanceof Map) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!equal(i2.value[1], b2.get(i2.value[0])))
          return false;
      return true;
    }
    if (hasSet && a2 instanceof Set && b2 instanceof Set) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (a2[i2] !== b2[i2])
          return false;
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b2.toString();
    keys2 = Object.keys(a2);
    length = keys2.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i2 = length; i2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2]))
        return false;
    if (hasElementType && a2 instanceof Element)
      return false;
    for (i2 = length; i2-- !== 0; ) {
      if ((keys2[i2] === "_owner" || keys2[i2] === "__v" || keys2[i2] === "__o") && a2.$$typeof) {
        continue;
      }
      if (!equal(a2[keys2[i2]], b2[keys2[i2]]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
var reactFastCompare = function isEqual(a2, b2) {
  try {
    return equal(a2, b2);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var ThemeProvider2 = (props) => {
  var {
    cssVarsRoot = ":root",
    theme,
    children
  } = props;
  var computedTheme = react.useMemo(() => toCSSVar(theme), [theme]);
  return /* @__PURE__ */ react.createElement(ThemeProvider$1, {
    theme: computedTheme
  }, /* @__PURE__ */ react.createElement(Global, {
    styles: (theme2) => ({
      [cssVarsRoot]: theme2.__cssVars
    })
  }), children);
};
function useTheme() {
  var theme = react.useContext(ThemeContext);
  if (!theme) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }
  return theme;
}
createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function useChakra() {
  var colorModeResult = useColorMode();
  var theme = useTheme();
  return _extends$2({}, colorModeResult, {
    theme
  });
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var createStyled = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles.push.apply(styles, args);
    } else {
      styles.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        styles.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = react.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      insertStyles(cache, serialized, typeof finalTag === "string");
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      var ele = /* @__PURE__ */ react.createElement(finalTag, newProps);
      return ele;
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, {}, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var allPropNames = new Set([...propNames, "textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]);
var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = (prop) => validHTMLProps.has(prop) || !allPropNames.has(prop);
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var toCSSObject = (_ref) => {
  var {
    baseStyle
  } = _ref;
  return (props) => {
    var {
      css: cssProp,
      __css,
      sx
    } = props, rest = _objectWithoutPropertiesLoose$3(props, ["theme", "css", "__css", "sx"]);
    var styleProps2 = objectFilter(rest, (_2, prop) => isStyleProp(prop));
    var finalStyles = Object.assign({}, __css, baseStyle, styleProps2, sx);
    var computedCSS = css(finalStyles)(props.theme);
    return [computedCSS, cssProp];
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {}, {
    baseStyle
  } = _ref2, styledOptions = _objectWithoutPropertiesLoose$3(_ref2, ["baseStyle"]);
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  var styleObject = toCSSObject({
    baseStyle
  });
  return newStyled(component, styledOptions)(styleObject);
}
var chakra = styled;
domElements.forEach((tag) => {
  chakra[tag] = chakra(tag);
});
function forwardRef(component) {
  return /* @__PURE__ */ react.forwardRef(component);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP, _opts2;
  if (props === void 0) {
    props = {};
  }
  if (opts === void 0) {
    opts = {};
  }
  var {
    styleConfig: styleConfigProp
  } = props, rest = _objectWithoutPropertiesLoose$2(props, ["styleConfig"]);
  var {
    theme,
    colorMode
  } = useChakra();
  var themeStyleConfig = memoizedGet(theme, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = lodash_mergewith({
    theme,
    colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  var stylesRef = react.useRef({});
  return react.useMemo(() => {
    if (styleConfig) {
      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;
      var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
      var variants = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
      var sizes = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
      var styles = lodash_mergewith({}, baseStyles, sizes, variants);
      if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
        styleConfig.parts.forEach((part) => {
          var _styles$part;
          styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
        });
      }
      var isStyleEqual = reactFastCompare(stylesRef.current, styles);
      if (!isStyleEqual) {
        stylesRef.current = styles;
      }
    }
    return stylesRef.current;
  }, [styleConfig, mergedProps, (_opts2 = opts) == null ? void 0 : _opts2.isMultiPart]);
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Heading = /* @__PURE__ */ forwardRef((props, ref) => {
  var styles = useStyleConfig("Heading", props);
  var _omitThemingProps = omitThemingProps(props), rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, ["className"]);
  return /* @__PURE__ */ react.createElement(chakra.h2, _extends$1({
    ref,
    className: cx("chakra-heading", props.className)
  }, rest, {
    __css: styles
  }));
});
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Text = /* @__PURE__ */ forwardRef((props, ref) => {
  var styles = useStyleConfig("Text", props);
  var _omitThemingProps = omitThemingProps(props), rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "align", "decoration", "casing"]);
  var aliasedProps = filterUndefined({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ react.createElement(chakra.p, _extends2({
    ref,
    className: cx("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles
  }));
});

// _snowpack/pkg/react-router-dom.js
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new Error(prefix);
  }
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
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
var propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});
function _setPrototypeOf2(o, p3) {
  _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p4) {
    o2.__proto__ = p4;
    return o2;
  };
  return _setPrototypeOf2(o, p3);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf2(subClass, superClass);
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list2, index2) {
  for (var i2 = index2, k3 = i2 + 1, n3 = list2.length; k3 < n3; i2 += 1, k3 += 1) {
    list2[i2] = list2[k3];
  }
  list2.pop();
}
function resolvePathname(to, from) {
  if (from === void 0)
    from = "";
  var toParts = to && to.split("/") || [];
  var fromParts = from && from.split("/") || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length)
    return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i2 = fromParts.length; i2 >= 0; i2--) {
    var part = fromParts[i2];
    if (part === ".") {
      spliceOne(fromParts, i2);
    } else if (part === "..") {
      spliceOne(fromParts, i2);
      up++;
    } else if (up) {
      spliceOne(fromParts, i2);
      up--;
    }
  }
  if (!mustEndAbs)
    for (; up--; up)
      fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/")
    result += "/";
  return result;
}
function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 && "/?#".indexOf(path.charAt(prefix2.length)) !== -1;
}
function stripBasename$1(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}
function createPath(location) {
  var pathname = location.pathname, search = location.search, hash = location.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation(path, state, key, currentLocation) {
  var location;
  if (typeof path === "string") {
    location = parsePath(path);
    location.state = state;
  } else {
    location = _extends({}, path);
    if (location.pathname === void 0)
      location.pathname = "";
    if (location.search) {
      if (location.search.charAt(0) !== "?")
        location.search = "?" + location.search;
    } else {
      location.search = "";
    }
    if (location.hash) {
      if (location.hash.charAt(0) !== "#")
        location.hash = "#" + location.hash;
    } else {
      location.hash = "";
    }
    if (state !== void 0 && location.state === void 0)
      location.state = state;
  }
  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e3) {
    if (e3 instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e3;
    }
  }
  if (key)
    location.key = key;
  if (currentLocation) {
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== "/") {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    if (!location.pathname) {
      location.pathname = "/";
    }
  }
  return location;
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners.push(listener);
    return function() {
      isActive = false;
      listeners = listeners.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function(listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message));
}
function supportsHistory() {
  var ua2 = window.navigator.userAgent;
  if ((ua2.indexOf("Android 2.") !== -1 || ua2.indexOf("Android 4.0") !== -1) && ua2.indexOf("Mobile Safari") !== -1 && ua2.indexOf("Chrome") === -1 && ua2.indexOf("Windows Phone") === -1)
    return false;
  return window.history && "pushState" in window.history;
}
function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function isExtraneousPopstateEvent(event) {
  return event.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var PopStateEvent = "popstate";
var HashChangeEvent = "hashchange";
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e3) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {}, key = _ref.key, state = _ref.state;
    var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename)
      path = stripBasename$1(path, basename);
    return createLocation(path, state, key);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function handlePopState(event) {
    if (isExtraneousPopstateEvent(event))
      return;
    handlePop(getDOMLocation(event.state));
  }
  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }
  var forceNextPop = false;
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];
  function createHref(location) {
    return basename + createPath(location);
  }
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location);
      var key = location.key, state2 = location.state;
      if (canUseHistory) {
        globalHistory.pushState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action,
            location
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location);
      var key = location.key, state2 = location.state;
      if (canUseHistory) {
        globalHistory.replaceState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1)
            allKeys[prevIndex] = location.key;
          setState({
            action,
            location
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }
  function go(n3) {
    globalHistory.go(n3);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash$1
  },
  slash: {
    encodePath: addLeadingSlash$1,
    decodePath: addLeadingSlash$1
  }
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename)
      path2 = stripBasename$1(path2, basename);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a2, b2) {
    return a2.pathname === b2.pathname && a2.search === b2.search && a2.hash === b2.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location))
        return;
      if (ignorePath === createPath(location))
        return;
      ignorePath = null;
      handlePop(location);
    }
  }
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath)
    replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename + createPath(location));
  }
  function push(path2, state) {
    var action = "PUSH";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState({
          action,
          location
        });
      } else {
        setState();
      }
    });
  }
  function replace(path2, state) {
    var action = "REPLACE";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1)
        allPaths[prevIndex] = path3;
      setState({
        action,
        location
      });
    });
  }
  function go(n3) {
    globalHistory.go(n3);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
function clamp(n3, lowerBound, upperBound) {
  return Math.min(Math.max(n3, lowerBound), upperBound);
}
function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? ["/"] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var index2 = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function(entry) {
    return typeof entry === "string" ? createLocation(entry, void 0, createKey()) : createLocation(entry, void 0, entry.key || createKey());
  });
  var createHref = createPath;
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }
      setState({
        action,
        location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      history.entries[history.index] = location;
      setState({
        action,
        location
      });
    });
  }
  function go(n3) {
    var nextIndex = clamp(history.index + n3, 0, history.entries.length - 1);
    var action = "POP";
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (ok2) {
        setState({
          action,
          location,
          index: nextIndex
        });
      } else {
        setState();
      }
    });
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function canGo(n3) {
    var nextIndex = history.index + n3;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    return transitionManager.setPrompt(prompt);
  }
  function listen(listener) {
    return transitionManager.appendListener(listener);
  }
  var history = {
    length: entries.length,
    action: "POP",
    location: entries[index2],
    index: index2,
    entries,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  };
  return history;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal2[key] = (commonjsGlobal2[key] || 0) + 1;
}
function objectIs(x3, y4) {
  if (x3 === y4) {
    return x3 !== 0 || 1 / x3 === 1 / y4;
  } else {
    return x3 !== x3 && y4 !== y4;
  }
}
function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function(h2) {
        return h2 !== handler;
      });
    },
    get: function get2() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function(handler) {
        return handler(value, changedBits);
      });
    }
  };
}
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;
  var contextProp = "__create-react-context-" + getUniqueId() + "__";
  var Provider = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Provider2, _Component);
    function Provider2() {
      var _this;
      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }
    var _proto = Provider2.prototype;
    _proto.getChildContext = function getChildContext() {
      var _ref;
      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };
    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;
        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          changedBits |= 0;
          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };
    _proto.render = function render2() {
      return this.props.children;
    };
    return Provider2;
  }(react.Component);
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);
  var Consumer = /* @__PURE__ */ function(_Component2) {
    _inheritsLoose(Consumer2, _Component2);
    function Consumer2() {
      var _this2;
      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };
      _this2.onUpdate = function(newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };
      return _this2;
    }
    var _proto2 = Consumer2.prototype;
    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };
    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };
    _proto2.render = function render2() {
      return onlyChild(this.props.children)(this.state.value);
    };
    return Consumer2;
  }(react.Component);
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
  return {
    Provider,
    Consumer
  };
}
var index = react.createContext || createReactContext;
var isarray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse(str, options) {
  var tokens2 = [];
  var key = 0;
  var index2 = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m3 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m3.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index2];
    var prefix2 = res[2];
    var name = res[3];
    var capture = res[4];
    var group2 = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens2.push(path);
      path = "";
    }
    var partial = prefix2 != null && next != null && next !== prefix2;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group2;
    tokens2.push({
      name: name || key++,
      prefix: prefix2 || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens2.push(path);
  }
  return tokens2;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c3) {
    return "%" + c3.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c3) {
    return "%" + c3.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens2, options) {
  var matches = new Array(tokens2.length);
  for (var i2 = 0; i2 < tokens2.length; i2++) {
    if (typeof tokens2[i2] === "object") {
      matches[i2] = new RegExp("^(?:" + tokens2[i2].pattern + ")$", flags(options));
    }
  }
  return function(obj, opts) {
    var path = "";
    var data = obj || {};
    var options2 = opts || {};
    var encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i3 = 0; i3 < tokens2.length; i3++) {
      var token = tokens2[i3];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j2 = 0; j2 < value.length; j2++) {
          segment = encode(value[j2]);
          if (!matches[i3].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j2 === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i3].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group2) {
  return group2.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re3, keys2) {
  re3.keys = keys2;
  return re3;
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys2) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i2 = 0; i2 < groups.length; i2++) {
      keys2.push({
        name: i2,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys2);
}
function arrayToRegexp(path, keys2, options) {
  var parts = [];
  for (var i2 = 0; i2 < path.length; i2++) {
    parts.push(pathToRegexp(path[i2], keys2, options).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
  return attachKeys(regexp, keys2);
}
function stringToRegexp(path, keys2, options) {
  return tokensToRegExp(parse(path, options), keys2, options);
}
function tokensToRegExp(tokens2, keys2, options) {
  if (!isarray(keys2)) {
    options = keys2 || options;
    keys2 = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = "";
  for (var i2 = 0; i2 < tokens2.length; i2++) {
    var token = tokens2[i2];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix2 = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys2.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix2 + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix2 + "(" + capture + "))?";
        } else {
          capture = prefix2 + "(" + capture + ")?";
        }
      } else {
        capture = prefix2 + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options)), keys2);
}
function pathToRegexp(path, keys2, options) {
  if (!isarray(keys2)) {
    options = keys2 || options;
    keys2 = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys2);
  }
  if (isarray(path)) {
    return arrayToRegexp(path, keys2, options);
  }
  return stringToRegexp(path, keys2, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
var createNamedContext = function createNamedContext2(name) {
  var context2 = index();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var createNamedContext$1 = function createNamedContext3(name) {
  var context2 = index();
  context2.displayName = name;
  return context2;
};
var context = /* @__PURE__ */ createNamedContext$1("Router");
var Router = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Router2, _React$Component);
  Router2.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };
  function Router2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    };
    _this._isMounted = false;
    _this._pendingLocation = null;
    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function(location) {
        if (_this._isMounted) {
          _this.setState({
            location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten)
      this.unlisten();
  };
  _proto.render = function render2() {
    return react.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router2.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };
  return Router2;
}(react.Component);
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);
  function MemoryRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter.prototype;
  _proto.render = function render2() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return MemoryRouter;
})(react.Component);
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);
  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Lifecycle.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount)
      this.props.onMount.call(this, this);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate)
      this.props.onUpdate.call(this, this, prevProps);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount)
      this.props.onUnmount.call(this, this);
  };
  _proto.render = function render2() {
    return null;
  };
  return Lifecycle;
})(react.Component);
var cache$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path])
    return pathCache[path];
  var keys2 = [];
  var regexp = pathToRegexp_1(path, keys2, options);
  var result = {
    regexp,
    keys: keys2
  };
  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }
  return result;
}
function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }
  var _options = options, path = _options.path, _options$exact = _options.exact, exact = _options$exact === void 0 ? false : _options$exact, _options$strict = _options.strict, strict = _options$strict === void 0 ? false : _options$strict, _options$sensitive = _options.sensitive, sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function(matched, path2) {
    if (!path2 && path2 !== "")
      return null;
    if (matched)
      return matched;
    var _compilePath = compilePath$1(path2, {
      end: exact,
      strict,
      sensitive
    }), regexp = _compilePath.regexp, keys2 = _compilePath.keys;
    var match = regexp.exec(pathname);
    if (!match)
      return null;
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact)
      return null;
    return {
      path: path2,
      url: path2 === "/" && url === "" ? "/" : url,
      isExact,
      params: keys2.reduce(function(memo, key, index2) {
        memo[key.name] = values[index2];
        return memo;
      }, {})
    };
  }, null);
}
var Route = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render2() {
    var _this = this;
    return react.createElement(context.Consumer, null, function(context$1) {
      !context$1 ? invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;
      var props = _extends({}, context$1, {
        location,
        match
      });
      var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render3 = _this$props.render;
      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }
      return react.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? react.createElement(component, props) : render3 ? render3(props) : null : typeof children === "function" ? children(props) : null);
    });
  };
  return Route2;
}(react.Component);
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename, location) {
  if (!basename)
    return location;
  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}
function stripBasename(basename, location) {
  if (!basename)
    return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0)
    return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}
function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}
function staticHandler(methodName) {
  return function() {
    invariant(false);
  };
}
function noop() {
}
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);
  function StaticRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handlePush = function(location) {
      return _this.navigateTo(location, "PUSH");
    };
    _this.handleReplace = function(location) {
      return _this.navigateTo(location, "REPLACE");
    };
    _this.handleListen = function() {
      return noop;
    };
    _this.handleBlock = function() {
      return noop;
    };
    return _this;
  }
  var _proto = StaticRouter.prototype;
  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename, createLocation(location));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render2() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose2(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react.createElement(Router, _extends({}, rest, {
      history,
      staticContext: context2
    }));
  };
  return StaticRouter;
})(react.Component);
var Switch = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render2() {
    var _this = this;
    return react.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      var location = _this.props.location || context2.location;
      var element, match;
      react.Children.forEach(_this.props.children, function(child) {
        if (match == null && react.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path
          })) : context2.match;
        }
      });
      return match ? react.cloneElement(element, {
        location,
        computedMatch: match
      }) : null;
    });
  };
  return Switch2;
}(react.Component);
react.useContext;
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);
  function BrowserRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter.prototype;
  _proto.render = function render2() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return BrowserRouter;
})(react.Component);
var HashRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(HashRouter2, _React$Component);
  function HashRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }
  var _proto = HashRouter2.prototype;
  _proto.render = function render2() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return HashRouter2;
}(react.Component);
var resolveToLocation = function resolveToLocation2(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation2(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};
var forwardRefShim = function forwardRefShim2(C2) {
  return C2;
};
var forwardRef2 = react.forwardRef;
if (typeof forwardRef2 === "undefined") {
  forwardRef2 = forwardRefShim;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var LinkAnchor = forwardRef2(function(_ref, forwardedRef) {
  var innerRef = _ref.innerRef, navigate = _ref.navigate, _onClick = _ref.onClick, rest = _objectWithoutPropertiesLoose2(_ref, ["innerRef", "navigate", "onClick"]);
  var target = rest.target;
  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick)
          _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (!event.defaultPrevented && event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();
        navigate();
      }
    }
  });
  if (forwardRefShim !== forwardRef2) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  return react.createElement("a", props);
});
var Link = forwardRef2(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose2(_ref2, ["component", "replace", "to", "innerRef"]);
  return react.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location ? history.createHref(location) : "";
    var props = _extends({}, rest, {
      href,
      navigate: function navigate() {
        var location2 = resolveToLocation(to, context2.location);
        var method = replace ? history.replace : history.push;
        method(location2);
      }
    });
    if (forwardRefShim !== forwardRef2) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return react.createElement(component, props);
  });
});
var forwardRefShim$1 = function forwardRefShim3(C2) {
  return C2;
};
var forwardRef$1 = react.forwardRef;
if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}
function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }
  return classnames.filter(function(i2) {
    return i2;
  }).join(" ");
}
forwardRef$1(function(_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = _objectWithoutPropertiesLoose2(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return react.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var currentLocation = locationProp || context2.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname;
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact,
      sensitive,
      strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;
    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className,
      style,
      to: toLocation
    }, rest);
    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return react.createElement(Link, props);
  });
});

// dist/views/landing.js
function Landing() {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Heading, null, "Hello, Gimmick!"));
}

// dist/views/error-404.js
function Error404() {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Heading, null, "404"), /* @__PURE__ */ react.createElement(Text, {
    color: "gray.500"
  }, "The page you were looking does not exist."));
}

// dist/nav/def.js
function NavDef() {
  return /* @__PURE__ */ react.createElement(Switch, null, /* @__PURE__ */ react.createElement(Route, {
    exact: true,
    path: "/",
    component: Landing
  }), /* @__PURE__ */ react.createElement(Route, {
    component: Error404
  }));
}

// dist/nav/index.js
function Nav() {
  return /* @__PURE__ */ react.createElement(HashRouter, null, /* @__PURE__ */ react.createElement(NavDef, null));
}

// dist/index.js
react_dom_default.render(/* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ThemeProvider2, null, /* @__PURE__ */ react.createElement(Nav, null))), document.getElementById("root"));
