(() => {
  "use strict";
  var n = {
      314: (n, t, e) => {
        e.d(t, { Z: () => u });
        var r = e(537),
          o = e.n(r),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          "header {\n  display: flex;\n  height: 80px;\n  padding-left: 10%;\n  background-color: #4e5ba6;\n}\n\nheader > p {\n  color: #ffffff;\n  font-size: larger;\n}\n\nfooter {\n  display: flex;\n  height: 80px;\n  border-top: 0.5px solid rgba(0, 0, 0, 0.2);\n}\n\nfooter > p {\n  top: 35%;\n  margin: 0 auto;\n  color: #4e5ba6;\n}\n\n.mainPage {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 40%;\n  height: auto;\n  min-height: 680px;\n  margin: 5% auto;\n  padding: 4%;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\nh1 {\n  text-align: center;\n}\n\np {\n  position: relative;\n  top: 10px;\n}\n\ninput {\n  width: 27px;\n  height: 27px;\n  border: 1px solid rgb(209, 209, 209);\n  border-radius: 4px;\n}\n\n.inputAmountArea,\n.inputLottoBonusArea {\n  position: relative;\n  bottom: 10px;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  gap: 5%;\n}\n\n.inputAmountArea > label {\n  grid-column: 1/3;\n}\n\n#inputAmount {\n  width: 100%;\n  padding-left: 10px;\n}\n\nbutton {\n  color: #ffffff;\n  background-color: #4e5ba6;\n  border: 0;\n  border-radius: 4px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nbutton:focus,\nbutton:hover {\n  font-size: large;\n  border: 3px solid black;\n}\n\n#randomLottoList {\n  height: 300px;\n  overflow: scroll;\n}\n\n.lottoImg {\n  margin-right: 3%;\n  font-size: xx-large;\n}\n\n#randomLottoList > div {\n  display: flex;\n  align-items: center;\n}\n\n#inputLottoBonus {\n  display: grid;\n  grid-template-rows: 30%;\n  grid-template-columns: 2fr 1fr;\n}\n\n#inputLottoBonus > p,\n.inputLottoBonusArea > p,\n.resultButton {\n  grid-column: 1/3;\n}\n\n#inputBonusNumber {\n  float: right;\n  text-align: right;\n}\n\n.eachInputLottoNumber,\n.eachInputBonusNumber {\n  text-align: center;\n}\n\n.resultButton,\n.restartButton {\n  width: 100%;\n  height: 50px;\n  margin-top: 7%;\n}\n\n.resultPage {\n  position: relative;\n  top: 28%;\n  width: 30%;\n  height: 480px;\n  margin: 0 auto;\n  padding: 5%;\n  text-align: center;\n  background-color: #ffffff;\n  border: 0;\n  border-radius: 4px;\n}\n\ntable {\n  width: 90%;\n  height: 50%;\n  margin: 0 auto;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.explainRate {\n  margin: 5% 0 10% 0;\n  font-weight: bold;\n  font-size: larger;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./index.css"],
            names: [],
            mappings:
              "AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,QAAQ;EACR,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,yBAAyB;EACzB,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,OAAO;AACT;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,aAAa;EACb,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,cAAc;EACd,yCAAyC;EACzC,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB",
            sourcesContent: [
              "header {\n  display: flex;\n  height: 80px;\n  padding-left: 10%;\n  background-color: #4e5ba6;\n}\n\nheader > p {\n  color: #ffffff;\n  font-size: larger;\n}\n\nfooter {\n  display: flex;\n  height: 80px;\n  border-top: 0.5px solid rgba(0, 0, 0, 0.2);\n}\n\nfooter > p {\n  top: 35%;\n  margin: 0 auto;\n  color: #4e5ba6;\n}\n\n.mainPage {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 40%;\n  height: auto;\n  min-height: 680px;\n  margin: 5% auto;\n  padding: 4%;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\nh1 {\n  text-align: center;\n}\n\np {\n  position: relative;\n  top: 10px;\n}\n\ninput {\n  width: 27px;\n  height: 27px;\n  border: 1px solid rgb(209, 209, 209);\n  border-radius: 4px;\n}\n\n.inputAmountArea,\n.inputLottoBonusArea {\n  position: relative;\n  bottom: 10px;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  gap: 5%;\n}\n\n.inputAmountArea > label {\n  grid-column: 1/3;\n}\n\n#inputAmount {\n  width: 100%;\n  padding-left: 10px;\n}\n\nbutton {\n  color: #ffffff;\n  background-color: #4e5ba6;\n  border: 0;\n  border-radius: 4px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nbutton:focus,\nbutton:hover {\n  font-size: large;\n  border: 3px solid black;\n}\n\n#randomLottoList {\n  height: 300px;\n  overflow: scroll;\n}\n\n.lottoImg {\n  margin-right: 3%;\n  font-size: xx-large;\n}\n\n#randomLottoList > div {\n  display: flex;\n  align-items: center;\n}\n\n#inputLottoBonus {\n  display: grid;\n  grid-template-rows: 30%;\n  grid-template-columns: 2fr 1fr;\n}\n\n#inputLottoBonus > p,\n.inputLottoBonusArea > p,\n.resultButton {\n  grid-column: 1/3;\n}\n\n#inputBonusNumber {\n  float: right;\n  text-align: right;\n}\n\n.eachInputLottoNumber,\n.eachInputBonusNumber {\n  text-align: center;\n}\n\n.resultButton,\n.restartButton {\n  width: 100%;\n  height: 50px;\n  margin-top: 7%;\n}\n\n.resultPage {\n  position: relative;\n  top: 28%;\n  width: 30%;\n  height: 480px;\n  margin: 0 auto;\n  padding: 5%;\n  text-align: center;\n  background-color: #ffffff;\n  border: 0;\n  border-radius: 4px;\n}\n\ntable {\n  width: 90%;\n  height: 50%;\n  margin: 0 auto;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.explainRate {\n  margin: 5% 0 10% 0;\n  font-weight: bold;\n  font-size: larger;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const u = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  r &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (e += n(t)),
                  r && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var c = this[u][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var A = [].concat(n[l]);
                (r && a[A[0]]) ||
                  (void 0 !== i &&
                    (void 0 === A[5] ||
                      (A[1] = "@layer"
                        .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                        .concat(A[1], "}")),
                    (A[5] = i)),
                  e &&
                    (A[2]
                      ? ((A[1] = "@media "
                          .concat(A[2], " {")
                          .concat(A[1], "}")),
                        (A[2] = e))
                      : (A[2] = e)),
                  o &&
                    (A[4]
                      ? ((A[1] = "@supports ("
                          .concat(A[4], ") {")
                          .concat(A[1], "}")),
                        (A[4] = o))
                      : (A[4] = "".concat(o))),
                  t.push(A));
              }
            }),
            t
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var t = n[1],
            e = n[3];
          if (!e) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              i = "/*# ".concat(o, " */");
            return [t].concat([i]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function r(n, r) {
          for (var i = {}, a = [], u = 0; u < n.length; u++) {
            var c = n[u],
              l = r.base ? c[0] + r.base : c[0],
              A = i[l] || 0,
              s = "".concat(l, " ").concat(A);
            i[l] = A + 1;
            var f = e(s),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var d = o(p, r);
              (r.byIndex = u),
                t.splice(u, 0, { identifier: s, updater: d, references: 1 });
            }
            a.push(s);
          }
          return a;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var u = e(i[a]);
              t[u].references--;
            }
            for (var c = r(n, o), l = 0; l < i.length; l++) {
              var A = e(i[l]);
              0 === t[A].references && (t[A].updater(), t.splice(A, 1));
            }
            i = c;
          };
        };
      },
      569: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = "";
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (r += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (r += e.css),
                  o && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return n[r](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        t = e.n(n),
        r = e(795),
        o = e.n(r),
        i = e(569),
        a = e.n(i),
        u = e(565),
        c = e.n(u),
        l = e(216),
        A = e.n(l),
        s = e(589),
        f = e.n(s),
        p = e(314),
        d = {};
      (d.styleTagTransform = f()),
        (d.setAttributes = c()),
        (d.insert = a().bind(null, "head")),
        (d.domAPI = o()),
        (d.insertStyleElement = A()),
        t()(p.Z, d),
        p.Z && p.Z.locals && p.Z.locals;
      var m = function (n, t) {
          return "innerHTML" === t
            ? (n.innerHTML = "")
            : "value" === t
            ? (n.value = "")
            : void 0;
        },
        b = document.querySelector("#inputAmount"),
        y = document.querySelector("#inputAmountNext"),
        h = document.querySelector("#randomLottoList"),
        g = document.querySelector(".inputAmountArea");
      const E = {
        addEvent: function (n) {
          g.addEventListener("submit", function (t) {
            n(), t.preventDefault();
          });
        },
        getInputAmount: function () {
          return b.value;
        },
        clickInputAmount: function (n) {
          m(b, "value"),
            n && (this.showRandomLottoAmount(n), this.showRandomLottoList(n));
        },
        showRandomLottoAmount: function (n) {
          document.querySelector(".randomLottoAmount").textContent = "".concat(
            n.length
          );
        },
        showRandomLottoList: function (n) {
          m(h, "innerHTML"),
            this.makeRandomLottoList(n),
            (y.style.display = "block");
        },
        makeRandomLottoList: function (n) {
          var t = n.map(function (n) {
            return (function (n) {
              return '<div><span class="lottoImg">🎟</span><span class="randomLottoNumbers">'.concat(
                n,
                "</span></div>"
              );
            })(n);
          });
          h.insertAdjacentHTML("beforeend", t.join(" "));
        },
      };
      var v = document.querySelectorAll(".eachInputLottoNumber"),
        C = document.querySelector(".eachInputBonusNumber"),
        B = document.querySelector("dialog");
      const w = {
        addEvent: function (n) {
          var t = document.querySelector(".inputLottoBonusArea"),
            e = document.querySelector(".restartButton");
          t.addEventListener("submit", function (t) {
            t.preventDefault(), n();
          }),
            e.addEventListener("click", this.clickRestart);
        },
        clickResult: function (n) {
          n && (B.showModal(), this.showResult(n));
        },
        getLottoBonus: function () {
          var n = [];
          v.forEach(function (t) {
            n.push(+t.value), m(t, "value");
          });
          var t = +C.value;
          return m(C, "value"), [n, t];
        },
        showResult: function (n) {
          document.querySelectorAll(".winnerCount").forEach(function (t, e) {
            return (t.textContent = n[e]);
          }),
            (document.querySelector(".rate").textContent = "".concat(
              n[n.length - 1]
            ));
        },
        clickRestart: function () {
          B.close(), (inputAmountNext.style.display = "none");
        },
      };
      function S(n) {
        return (
          (S =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          S(n)
        );
      }
      function x(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return R(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          (function (n, t) {
            if (n) {
              if ("string" == typeof n) return R(n, t);
              var e = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === e && n.constructor && (e = n.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(n)
                  : "Arguments" === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  ? R(n, t)
                  : void 0
              );
            }
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function R(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      function I(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              n,
              (void 0,
              (o = (function (n, t) {
                if ("object" !== S(n) || null === n) return n;
                var e = n[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var r = e.call(n, "string");
                  if ("object" !== S(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(n);
              })(r.key)),
              "symbol" === S(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      function k(n, t) {
        return (function (n, t) {
          return t.get ? t.get.call(n) : t.value;
        })(n, T(n, t, "get"));
      }
      function T(n, t, e) {
        if (!t.has(n))
          throw new TypeError(
            "attempted to " + e + " private field on non-instance"
          );
        return t.get(n);
      }
      var L = new WeakMap();
      const N = (function () {
        function n(t) {
          var e, r, o;
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (o = { writable: !0, value: void 0 }),
            (function (n, t) {
              if (t.has(n))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })((e = this), (r = L)),
            r.set(e, o),
            (function (n, t, e) {
              (function (n, t, e) {
                if (t.set) t.set.call(n, e);
                else {
                  if (!t.writable)
                    throw new TypeError(
                      "attempted to set read only private field"
                    );
                  t.value = e;
                }
              })(n, T(n, t, "set"), e);
            })(
              this,
              L,
              t.sort(function (n, t) {
                return n - t;
              })
            );
        }
        var t, e;
        return (
          (t = n),
          (e = [
            {
              key: "getLottoString",
              value: function () {
                return k(this, L).join(", ");
              },
            },
            {
              key: "matchNumbers",
              value: function (n) {
                return new Set([].concat(x(k(this, L)), x(n))).size;
              },
            },
            {
              key: "matchBonus",
              value: function (n) {
                return k(this, L).includes(n);
              },
            },
          ]) && I(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          n
        );
      })();
      Object.freeze({
        INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
        INPUT_LOTTO_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
        INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
        INPUT_RESTART_COMMAND: "\n다시 시작하시겠습니까? (y/n)\n",
        RESTART: "\n게임을 다시 시작합니다.\n",
        QUIT: "\n게임을 종료합니다.\n",
      }),
        Object.freeze(function (n) {
          return "".concat(n, "개를 구매했습니다.");
        });
      var j = Object.freeze({
          NUMBER: "[ERROR] 숫자를 입력해주세요.",
          OVER_UNIT: "[ERROR] 천 원 이상 입력해주세요.",
          SIZE: "[ERROR] 1 ~ 45 사이의 서로 다른 숫자 6개를 입력해주세요.",
          RANGE: "[ERROR] 1 ~ 45 사이의 값을 입력하세요.",
          DUPLICATED: "[ERROR] 중복된 숫자가 있습니다.",
          DIVIDE:
            "[ERROR] 로또 1매 가격으로 나누어 떨어지는 금액을 입력하세요.",
          RESTART: "[ERROR] y 혹은 n으로 입력해주세요.",
        }),
        O = Object.freeze({
          UNIT: 1e3,
          MIN_RANGE: 1,
          MAX_RANGE: 45,
          SIZE: 6,
          RANK: 5,
        }),
        U = Object.freeze({ RESTART: "y", QUIT: "n" }),
        P = Object.freeze([5e3, 5e4, 15e5, 3e7, 2e9]);
      const M = {
        generateRandomNumbers: function () {
          for (var n = []; n.length < O.SIZE; ) this.generateRandomNumber(n);
          return n;
        },
        generateRandomNumber: function (n) {
          var t =
            Math.floor(Math.random() * (O.MAX_RANGE - O.MIN_RANGE + 1)) +
            O.MIN_RANGE;
          this.isDuplicated(n, t) || n.push(t);
        },
        isDuplicated: function (n, t) {
          return n.includes(t);
        },
      };
      const z = {
        getPrize: function (n) {
          var t = 0;
          return (
            n.forEach(function (e, r) {
              t += P[r] * n[r];
            }),
            t
          );
        },
        getProfit: function (n, t) {
          return ((this.getPrize(n) / (t * O.UNIT)) * 100).toFixed(1);
        },
      };
      function D(n) {
        return (
          (D =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          D(n)
        );
      }
      function _(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      function G(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              n,
              (void 0,
              (o = (function (n, t) {
                if ("object" !== D(n) || null === n) return n;
                var e = n[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var r = e.call(n, "string");
                  if ("object" !== D(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(n);
              })(r.key)),
              "symbol" === D(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      const Z = (function () {
        function n(t) {
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.lotteries = []),
            (this.rank = new Array(O.RANK).fill(0)),
            this.generateLotteries(t / O.UNIT);
        }
        var t, e;
        return (
          (t = n),
          (e = [
            {
              key: "generateLotteries",
              value: function (n) {
                var t = this;
                Array.from({ length: n }, function () {
                  var n = M.generateRandomNumbers();
                  t.lotteries.push(new N(n));
                });
              },
            },
            {
              key: "getLotteries",
              value: function () {
                return this.lotteries.map(function (n) {
                  return n.getLottoString();
                });
              },
            },
            {
              key: "getRankResult",
              value: function (n, t) {
                var e,
                  r = this,
                  o = new Array(O.RANK).fill(0);
                return (
                  this.lotteries.forEach(function (e) {
                    o[r.getRank(e.matchNumbers(n), e.matchBonus(t))]++;
                  }),
                  [].concat(
                    (function (n) {
                      if (Array.isArray(n)) return _(n);
                    })((e = o)) ||
                      (function (n) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != n[Symbol.iterator]) ||
                          null != n["@@iterator"]
                        )
                          return Array.from(n);
                      })(e) ||
                      (function (n, t) {
                        if (n) {
                          if ("string" == typeof n) return _(n, t);
                          var e = Object.prototype.toString
                            .call(n)
                            .slice(8, -1);
                          return (
                            "Object" === e &&
                              n.constructor &&
                              (e = n.constructor.name),
                            "Map" === e || "Set" === e
                              ? Array.from(n)
                              : "Arguments" === e ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  e
                                )
                              ? _(n, t)
                              : void 0
                          );
                        }
                      })(e) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    [z.getProfit(o, this.lotteries.length)]
                  )
                );
              },
            },
            {
              key: "getRank",
              value: function (n, t) {
                if (!(n > 9)) return 6 === n || (7 === n && t) ? 10 - n : 9 - n;
              },
            },
          ]) && G(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          n
        );
      })();
      function q(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      const Y = {
        purchaseAmount: function (n) {
          this.inputIsInteger(n),
            this.purchaseAmountIsOverUnit(n),
            this.purchaseAmountDivideUnit(n);
        },
        inputIsInteger: function (n) {
          if (!Number.isInteger(n)) throw new Error(j.NUMBER);
        },
        purchaseAmountIsOverUnit: function (n) {
          if (!(n >= O.UNIT)) throw new Error(j.OVER_UNIT);
        },
        purchaseAmountDivideUnit: function (n) {
          if (n % O.UNIT != 0) throw new Error(j.DIVIDE);
        },
        lottoNumbers: function (n) {
          var t = this;
          n.forEach(function (n) {
            t.inputIsInteger(n), t.numberInRange(n);
          }),
            this.lottoNumberSize(n),
            this.isDuplicated(n);
        },
        lottoNumberSize: function (n) {
          if (n.length !== O.SIZE) throw new Error(j.SIZE);
        },
        isDuplicated: function (n) {
          var t = new Set(n);
          if (n.length !== t.size) throw new Error(j.DUPLICATED);
        },
        numberInRange: function (n) {
          if (!(n >= O.MIN_RANGE && n <= O.MAX_RANGE)) throw new Error(j.RANGE);
        },
        bonusNumber: function (n, t) {
          var e;
          this.inputIsInteger(t),
            this.numberInRange(t),
            this.isDuplicated(
              [].concat(
                (function (n) {
                  if (Array.isArray(n)) return q(n);
                })((e = n)) ||
                  (function (n) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != n[Symbol.iterator]) ||
                      null != n["@@iterator"]
                    )
                      return Array.from(n);
                  })(e) ||
                  (function (n, t) {
                    if (n) {
                      if ("string" == typeof n) return q(n, t);
                      var e = Object.prototype.toString.call(n).slice(8, -1);
                      return (
                        "Object" === e &&
                          n.constructor &&
                          (e = n.constructor.name),
                        "Map" === e || "Set" === e
                          ? Array.from(n)
                          : "Arguments" === e ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                          ? q(n, t)
                          : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                [t]
              )
            );
        },
        restartCommand: function (n) {
          if (n !== U.RESTART && n !== U.QUIT) throw new Error(j.RESTART);
        },
      };
      function W(n) {
        return (
          (W =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          W(n)
        );
      }
      function X(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      function H(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, Q(r.key), r);
        }
      }
      function Q(n) {
        var t = (function (n, t) {
          if ("object" !== W(n) || null === n) return n;
          var e = n[Symbol.toPrimitive];
          if (void 0 !== e) {
            var r = e.call(n, "string");
            if ("object" !== W(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        })(n);
        return "symbol" === W(t) ? t : String(t);
      }
      const V = (function () {
        function n() {
          var t, e, r;
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (t = this),
            (r = void 0),
            (e = Q((e = "lottoGame"))) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            this.mainPageAddEvent(),
            this.resultAddEvent();
        }
        var t, e;
        return (
          (t = n),
          (e = [
            {
              key: "mainPageAddEvent",
              value: function () {
                var n = this;
                E.addEvent(function () {
                  E.clickInputAmount(n.amountTurnLotteries());
                });
              },
            },
            {
              key: "resultAddEvent",
              value: function () {
                var n = this;
                w.addEvent(function () {
                  var t = n.inputLottoBonus(w.getLottoBonus());
                  w.clickResult(t);
                });
              },
            },
            {
              key: "amountTurnLotteries",
              value: function () {
                var n = +E.getInputAmount();
                try {
                  return Y.purchaseAmount(n), this.makeLottoGame(n);
                } catch (n) {
                  alert(n.message);
                }
              },
            },
            {
              key: "makeLottoGame",
              value: function (n) {
                return (
                  (this.lottoGame = new Z(n)), this.lottoGame.getLotteries()
                );
              },
            },
            {
              key: "inputLottoBonus",
              value: function (n) {
                var t,
                  e,
                  r =
                    ((e = 2),
                    (function (n) {
                      if (Array.isArray(n)) return n;
                    })((t = n)) ||
                      (function (n, t) {
                        var e =
                          null == n
                            ? null
                            : ("undefined" != typeof Symbol &&
                                n[Symbol.iterator]) ||
                              n["@@iterator"];
                        if (null != e) {
                          var r,
                            o,
                            i,
                            a,
                            u = [],
                            c = !0,
                            l = !1;
                          try {
                            if (((i = (e = e.call(n)).next), 0 === t)) {
                              if (Object(e) !== e) return;
                              c = !1;
                            } else
                              for (
                                ;
                                !(c = (r = i.call(e)).done) &&
                                (u.push(r.value), u.length !== t);
                                c = !0
                              );
                          } catch (n) {
                            (l = !0), (o = n);
                          } finally {
                            try {
                              if (
                                !c &&
                                null != e.return &&
                                ((a = e.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw o;
                            }
                          }
                          return u;
                        }
                      })(t, e) ||
                      (function (n, t) {
                        if (n) {
                          if ("string" == typeof n) return X(n, t);
                          var e = Object.prototype.toString
                            .call(n)
                            .slice(8, -1);
                          return (
                            "Object" === e &&
                              n.constructor &&
                              (e = n.constructor.name),
                            "Map" === e || "Set" === e
                              ? Array.from(n)
                              : "Arguments" === e ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  e
                                )
                              ? X(n, t)
                              : void 0
                          );
                        }
                      })(t, e) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()),
                  o = r[0],
                  i = r[1];
                try {
                  return (
                    Y.lottoNumbers(o),
                    Y.bonusNumber(o, i),
                    this.generateLottoGameResult(o, i)
                  );
                } catch (n) {
                  alert(n.message);
                }
              },
            },
            {
              key: "generateLottoGameResult",
              value: function (n, t) {
                return this.lottoGame.getRankResult(n, t);
              },
            },
          ]) && H(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          n
        );
      })();
      function $(n) {
        return (
          ($ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          $(n)
        );
      }
      function F(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              n,
              (void 0,
              (o = (function (n, t) {
                if ("object" !== $(n) || null === n) return n;
                var e = n[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var r = e.call(n, "string");
                  if ("object" !== $(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(n);
              })(r.key)),
              "symbol" === $(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      new ((function () {
        function n() {
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        var t, e;
        return (
          (t = n),
          (e = [
            {
              key: "play",
              value: function () {
                this.controller = new V();
              },
            },
          ]) && F(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          n
        );
      })())().play();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBZSxNQUNQLFdBQ0VuSCxLQUFLMFAsV0FBYSxJQUFJbkIsQ0FDeEIsTSxvRUFBQ2tCLENBQUEsQ0FITSxLQU9MRSxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9pbmRleC5jc3M/ZjE0NiIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3V0aWxzL0NvbnRyb2xFbGVtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3ZpZXcvcmVzdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2RvbWFpbi9Mb3R0by5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3V0aWxzL1JhbmRvbS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3V0aWxzL0NhbGN1bGF0aW9uLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9tYWluL0xvdHRvR2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL1ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9Db250cm9sbGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvc3RlcDItaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTViYTY7XFxufVxcblxcbmhlYWRlciA+IHAge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmZvb3RlciA+IHAge1xcbiAgdG9wOiAzNSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGNvbG9yOiAjNGU1YmE2O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogNjgwcHg7XFxuICBtYXJnaW46IDUlIGF1dG87XFxuICBwYWRkaW5nOiA0JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDksIDIwOSwgMjA5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmlucHV0QW1vdW50QXJlYSxcXG4uaW5wdXRMb3R0b0JvbnVzQXJlYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgZ2FwOiA1JTtcXG59XFxuXFxuLmlucHV0QW1vdW50QXJlYSA+IGxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNpbnB1dEFtb3VudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNWJhNjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLFxcbmJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNyYW5kb21Mb3R0b0xpc3Qge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5sb3R0b0ltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuI3JhbmRvbUxvdHRvTGlzdCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2lucHV0TG90dG9Cb251cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxufVxcblxcbiNpbnB1dExvdHRvQm9udXMgPiBwLFxcbi5pbnB1dExvdHRvQm9udXNBcmVhID4gcCxcXG4ucmVzdWx0QnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNpbnB1dEJvbnVzTnVtYmVyIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZWFjaElucHV0TG90dG9OdW1iZXIsXFxuLmVhY2hJbnB1dEJvbnVzTnVtYmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VsdEJ1dHRvbixcXG4ucmVzdGFydEJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDclO1xcbn1cXG5cXG4ucmVzdWx0UGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDI4JTtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcblxcbi5leHBsYWluUmF0ZSB7XFxuICBtYXJnaW46IDUlIDAgMTAlIDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODBweDtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNWJhNjtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuZm9vdGVyID4gcCB7XFxuICB0b3A6IDM1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgY29sb3I6ICM0ZTViYTY7XFxufVxcblxcbi5tYWluUGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiA2ODBweDtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG4gIHBhZGRpbmc6IDQlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwOSwgMjA5LCAyMDkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uaW5wdXRBbW91bnRBcmVhLFxcbi5pbnB1dExvdHRvQm9udXNBcmVhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG4uaW5wdXRBbW91bnRBcmVhID4gbGFiZWwge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2lucHV0QW1vdW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1YmE2O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246Zm9jdXMsXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3JhbmRvbUxvdHRvTGlzdCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmxvdHRvSW1nIHtcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG4jcmFuZG9tTG90dG9MaXN0ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaW5wdXRMb3R0b0JvbnVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG59XFxuXFxuI2lucHV0TG90dG9Cb251cyA+IHAsXFxuLmlucHV0TG90dG9Cb251c0FyZWEgPiBwLFxcbi5yZXN1bHRCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2lucHV0Qm9udXNOdW1iZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5lYWNoSW5wdXRMb3R0b051bWJlcixcXG4uZWFjaElucHV0Qm9udXNOdW1iZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVzdWx0QnV0dG9uLFxcbi5yZXN0YXJ0QnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogNyU7XFxufVxcblxcbi5yZXN1bHRQYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMjglO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNDgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxudGFibGUge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuXFxuLmV4cGxhaW5SYXRlIHtcXG4gIG1hcmdpbjogNSUgMCAxMCUgMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgY29uc3QgQ29udHJvbEVsZW0gPSB7XG4gIG1ha2VEaXZFbGVtKHRhZywgdGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eSA9IHZhbHVlO1xuICB9LFxuXG4gIHJlc2V0RWxlbShlbGVtLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiaW5uZXJIVE1MXCIpIHJldHVybiAoZWxlbS5pbm5lckhUTUwgPSBcIlwiKTtcbiAgICBpZiAodHlwZSA9PT0gXCJ2YWx1ZVwiKSByZXR1cm4gKGVsZW0udmFsdWUgPSBcIlwiKTtcbiAgfSxcblxuICBtYWtlUmFuZG9tTG90dG8obnVtYmVycykge1xuICAgIHJldHVybiBgPGRpdj48c3BhbiBjbGFzcz1cImxvdHRvSW1nXCI+8J+Onzwvc3Bhbj48c3BhbiBjbGFzcz1cInJhbmRvbUxvdHRvTnVtYmVyc1wiPiR7bnVtYmVyc308L3NwYW4+PC9kaXY+YDtcbiAgfSxcbn07XG4iLCJjb25zdCBpbnB1dEFtb3VudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0QW1vdW50XCIpO1xuY29uc3QgaW5wdXRBbW91bnROZXh0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRBbW91bnROZXh0XCIpO1xuY29uc3QgcmFuZG9tTG90dG9MaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZG9tTG90dG9MaXN0XCIpO1xuY29uc3QgaW5wdXRBbW91bnRBcmVhRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRBbW91bnRBcmVhXCIpO1xuaW1wb3J0IHsgQ29udHJvbEVsZW0gfSBmcm9tIFwiLi4vdXRpbHMvQ29udHJvbEVsZW1cIjtcblxuY29uc3QgbWFpblBhZ2UgPSB7XG4gIGFkZEV2ZW50KGNhbGxiYWNrKSB7XG4gICAgaW5wdXRBbW91bnRBcmVhRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0SW5wdXRBbW91bnQoKSB7XG4gICAgcmV0dXJuIGlucHV0QW1vdW50RWxlbS52YWx1ZTtcbiAgfSxcblxuICBjbGlja0lucHV0QW1vdW50KHJhbmRvbUxvdHRlcmllcykge1xuICAgIENvbnRyb2xFbGVtLnJlc2V0RWxlbShpbnB1dEFtb3VudEVsZW0sIFwidmFsdWVcIik7XG5cbiAgICBpZiAoIXJhbmRvbUxvdHRlcmllcykgcmV0dXJuO1xuXG4gICAgdGhpcy5zaG93UmFuZG9tTG90dG9BbW91bnQocmFuZG9tTG90dGVyaWVzKTtcbiAgICB0aGlzLnNob3dSYW5kb21Mb3R0b0xpc3QocmFuZG9tTG90dGVyaWVzKTtcbiAgfSxcblxuICBzaG93UmFuZG9tTG90dG9BbW91bnQocmFuZG9tTG90dGVyaWVzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnJhbmRvbUxvdHRvQW1vdW50XCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7cmFuZG9tTG90dGVyaWVzLmxlbmd0aH1gO1xuICB9LFxuXG4gIHNob3dSYW5kb21Mb3R0b0xpc3QocmFuZG9tTG90dGVyaWVzKSB7XG4gICAgQ29udHJvbEVsZW0ucmVzZXRFbGVtKHJhbmRvbUxvdHRvTGlzdEVsZW0sIFwiaW5uZXJIVE1MXCIpO1xuXG4gICAgdGhpcy5tYWtlUmFuZG9tTG90dG9MaXN0KHJhbmRvbUxvdHRlcmllcyk7XG5cbiAgICBpbnB1dEFtb3VudE5leHRFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0sXG5cbiAgbWFrZVJhbmRvbUxvdHRvTGlzdChyYW5kb21Mb3R0ZXJpZXMpIHtcbiAgICBjb25zdCBub2RlUmFuZG9tTG90dG8gPSByYW5kb21Mb3R0ZXJpZXMubWFwKChudW1iZXJzKSA9PiB7XG4gICAgICByZXR1cm4gQ29udHJvbEVsZW0ubWFrZVJhbmRvbUxvdHRvKG51bWJlcnMpO1xuICAgIH0pO1xuICAgIHJhbmRvbUxvdHRvTGlzdEVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIG5vZGVSYW5kb21Mb3R0by5qb2luKFwiIFwiKVxuICAgICk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluUGFnZTtcbiIsImNvbnN0IGVhY2hJbnB1dExvdHRvTnVtYmVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIFwiLmVhY2hJbnB1dExvdHRvTnVtYmVyXCJcbik7XG5jb25zdCBlYWNoSW5wdXRCb251c051bWJlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5lYWNoSW5wdXRCb251c051bWJlclwiXG4pO1xuY29uc3QgZGlhbG9nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5pbXBvcnQgeyBDb250cm9sRWxlbSB9IGZyb20gXCIuLi91dGlscy9Db250cm9sRWxlbVwiO1xuXG5jb25zdCByZXN1bHRQYWdlID0ge1xuICBhZGRFdmVudChyZXN1bHRDYWxsYmFjaykge1xuICAgIGNvbnN0IGlucHV0TG90dG9Cb251c0FyZWFFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmlucHV0TG90dG9Cb251c0FyZWFcIlxuICAgICk7XG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRCdXR0b25cIik7XG5cbiAgICBpbnB1dExvdHRvQm9udXNBcmVhRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJlc3VsdENhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgcmVzdGFydEJ1dHRvbkVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2tSZXN0YXJ0KTtcbiAgfSxcblxuICBjbGlja1Jlc3VsdChyZXN1bHQpIHtcbiAgICBpZiAoIXJlc3VsdCkgcmV0dXJuO1xuXG4gICAgZGlhbG9nRWxlbS5zaG93TW9kYWwoKTtcbiAgICB0aGlzLnNob3dSZXN1bHQocmVzdWx0KTtcbiAgfSxcblxuICBnZXRMb3R0b0JvbnVzKCkge1xuICAgIGNvbnN0IGxvdHRvID0gW107XG4gICAgZWFjaElucHV0TG90dG9OdW1iZXJFbGVtLmZvckVhY2goKGVhY2hJbnB1dExvdHRvTnVtYmVyRWxlbSkgPT4ge1xuICAgICAgbG90dG8ucHVzaCgrZWFjaElucHV0TG90dG9OdW1iZXJFbGVtLnZhbHVlKTtcbiAgICAgIENvbnRyb2xFbGVtLnJlc2V0RWxlbShlYWNoSW5wdXRMb3R0b051bWJlckVsZW0sIFwidmFsdWVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib251cyA9ICtlYWNoSW5wdXRCb251c051bWJlckVsZW0udmFsdWU7XG4gICAgQ29udHJvbEVsZW0ucmVzZXRFbGVtKGVhY2hJbnB1dEJvbnVzTnVtYmVyRWxlbSwgXCJ2YWx1ZVwiKTtcblxuICAgIHJldHVybiBbbG90dG8sIGJvbnVzXTtcbiAgfSxcblxuICBzaG93UmVzdWx0KHJlc3VsdCkge1xuICAgIGNvbnN0IHdpbm5lckNvdW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2lubmVyQ291bnRcIik7XG5cbiAgICB3aW5uZXJDb3VudEVsZW0uZm9yRWFjaChcbiAgICAgIChyYW5rLCBpbmRleCkgPT4gKHJhbmsudGV4dENvbnRlbnQgPSByZXN1bHRbaW5kZXhdKVxuICAgICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRlXCIpLnRleHRDb250ZW50ID0gYCR7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdXG4gICAgfWA7XG4gIH0sXG5cbiAgY2xpY2tSZXN0YXJ0KCkge1xuICAgIGRpYWxvZ0VsZW0uY2xvc2UoKTtcbiAgICBpbnB1dEFtb3VudE5leHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0UGFnZTtcbiIsImNsYXNzIExvdHRvIHtcbiAgI251bWJlcnM7XG5cbiAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgIHRoaXMuI251bWJlcnMgPSBudW1iZXJzLnNvcnQoKHByZXYsIG5leHQpID0+IHByZXYgLSBuZXh0KTtcbiAgfVxuXG4gIGdldExvdHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNudW1iZXJzLmpvaW4oXCIsIFwiKTtcbiAgfVxuXG4gIG1hdGNoTnVtYmVycyhsb3R0b051bWJlcnMpIHtcbiAgICBjb25zdCBtZXJnZWROdW1iZXJzID0gbmV3IFNldChbLi4udGhpcy4jbnVtYmVycywgLi4ubG90dG9OdW1iZXJzXSk7XG4gICAgcmV0dXJuIG1lcmdlZE51bWJlcnMuc2l6ZTtcbiAgfVxuXG4gIG1hdGNoQm9udXMoYm9udXNOdW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy4jbnVtYmVycy5pbmNsdWRlcyhib251c051bWJlcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG90dG87XG4iLCJleHBvcnQgY29uc3QgTUVTU0FHRSA9IE9iamVjdC5mcmVlemUoe1xuICBJTlBVVF9QVVJDSEFTRV9BTU9VTlQ6IFwi6rWs7J6F6riI7JWh7J2EIOyeheugpe2VtCDso7zshLjsmpQuXFxuXCIsXG4gIElOUFVUX0xPVFRPX05VTUJFUlM6IFwiXFxu64u57LKoIOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqULlxcblwiLFxuICBJTlBVVF9CT05VU19OVU1CRVI6IFwiXFxu67O064SI7IqkIOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqULlxcblwiLFxuICBJTlBVVF9SRVNUQVJUX0NPTU1BTkQ6IFwiXFxu64uk7IucIOyLnOyeke2VmOyLnOqyoOyKteuLiOq5jD8gKHkvbilcXG5cIixcbiAgUkVTVEFSVDogXCJcXG7qsozsnoTsnYQg64uk7IucIOyLnOyeke2VqeuLiOuLpC5cXG5cIixcbiAgUVVJVDogXCJcXG7qsozsnoTsnYQg7KKF66OM7ZWp64uI64ukLlxcblwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBBTU9VTlRfT0ZfUFVSQ0hBU0UgPSAoYW1vdW50KSA9PiBgJHthbW91bnR96rCc66W8IOq1rOunpO2WiOyKteuLiOuLpC5gO1xuT2JqZWN0LmZyZWV6ZShBTU9VTlRfT0ZfUFVSQ0hBU0UpO1xuXG5leHBvcnQgY29uc3QgRVJST1IgPSBPYmplY3QuZnJlZXplKHtcbiAgTlVNQkVSOiBcIltFUlJPUl0g7Iir7J6Q66W8IOyeheugpe2VtOyjvOyEuOyalC5cIixcbiAgT1ZFUl9VTklUOiBcIltFUlJPUl0g7LKcIOybkCDsnbTsg4Eg7J6F66Cl7ZW07KO87IS47JqULlwiLFxuICBTSVpFOiBcIltFUlJPUl0gMSB+IDQ1IOyCrOydtOydmCDshJzroZwg64uk66W4IOyIq+yekCA26rCc66W8IOyeheugpe2VtOyjvOyEuOyalC5cIixcbiAgUkFOR0U6IFwiW0VSUk9SXSAxIH4gNDUg7IKs7J207J2YIOqwkuydhCDsnoXroKXtlZjshLjsmpQuXCIsXG4gIERVUExJQ0FURUQ6IFwiW0VSUk9SXSDspJHrs7XrkJwg7Iir7J6Q6rCAIOyeiOyKteuLiOuLpC5cIixcbiAgRElWSURFOiBcIltFUlJPUl0g66Gc65iQIDHrp6Qg6rCA6rKp7Jy866GcIOuCmOuIhOyWtCDrlqjslrTsp4DripQg6riI7JWh7J2EIOyeheugpe2VmOyEuOyalC5cIixcbiAgUkVTVEFSVDogXCJbRVJST1JdIHkg7Zi57J2AIG7snLzroZwg7J6F66Cl7ZW07KO87IS47JqULlwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBOVU1CRVIgPSBPYmplY3QuZnJlZXplKHtcbiAgVU5JVDogMV8wMDAsXG4gIE1JTl9SQU5HRTogMSxcbiAgTUFYX1JBTkdFOiA0NSxcbiAgU0laRTogNixcbiAgUkFOSzogNSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ09NTUFORCA9IE9iamVjdC5mcmVlemUoe1xuICBSRVNUQVJUOiBcInlcIixcbiAgUVVJVDogXCJuXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IFBSSVpFID0gT2JqZWN0LmZyZWV6ZShbXG4gIDVfMDAwLCA1MF8wMDAsIDFfNTAwXzAwMCwgMzBfMDAwXzAwMCwgMl8wMDBfMDAwXzAwMCxcbl0pO1xuIiwiaW1wb3J0IHsgTlVNQkVSIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBSYW5kb20gPSB7XG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVycygpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXJzID0gW107XG4gICAgd2hpbGUgKHJhbmRvbU51bWJlcnMubGVuZ3RoIDwgTlVNQkVSLlNJWkUpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21OdW1iZXIocmFuZG9tTnVtYmVycyk7XG4gICAgfVxuICAgIHJldHVybiByYW5kb21OdW1iZXJzO1xuICB9LFxuXG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVyKHJhbmRvbU51bWJlcnMpIHtcbiAgICBjb25zdCBudW1iZXIgPVxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE5VTUJFUi5NQVhfUkFOR0UgLSBOVU1CRVIuTUlOX1JBTkdFICsgMSkpICtcbiAgICAgIE5VTUJFUi5NSU5fUkFOR0U7XG4gICAgaWYgKCF0aGlzLmlzRHVwbGljYXRlZChyYW5kb21OdW1iZXJzLCBudW1iZXIpKSB7XG4gICAgICByYW5kb21OdW1iZXJzLnB1c2gobnVtYmVyKTtcbiAgICB9XG4gIH0sXG5cbiAgaXNEdXBsaWNhdGVkKG51bWJlcnMsIG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXJzLmluY2x1ZGVzKG51bWJlcik7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5kb207XG4iLCJpbXBvcnQgeyBOVU1CRVIsIFBSSVpFIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBDYWxjdWxhdGlvbiA9IHtcbiAgLy9yYW5rID0gWzAsMCwwLDAsMF1cblxuICBnZXRQcml6ZShyYW5rKSB7XG4gICAgbGV0IHByaXplID0gMDtcbiAgICByYW5rLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICBwcml6ZSArPSBQUklaRVtpbmRleF0gKiByYW5rW2luZGV4XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJpemU7XG4gIH0sXG5cbiAgZ2V0UHJvZml0KHJhbmssIGFtb3VudCkge1xuICAgIGNvbnN0IHByaXplID0gdGhpcy5nZXRQcml6ZShyYW5rKTtcbiAgICByZXR1cm4gKChwcml6ZSAvIChhbW91bnQgKiBOVU1CRVIuVU5JVCkpICogMTAwKS50b0ZpeGVkKDEpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRpb247XG4iLCJpbXBvcnQgTG90dG8gZnJvbSBcIi4vTG90dG8uanNcIjtcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWxzL1JhbmRvbS5qc1wiO1xuaW1wb3J0IHsgTlVNQkVSIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IENhbGN1bGF0aW9uIGZyb20gXCIuLi91dGlscy9DYWxjdWxhdGlvbi5qc1wiO1xuXG5jbGFzcyBMb3R0b0dhbWUge1xuICBjb25zdHJ1Y3RvcihhbW91bnQpIHtcbiAgICB0aGlzLmxvdHRlcmllcyA9IFtdO1xuICAgIHRoaXMucmFuayA9IG5ldyBBcnJheShOVU1CRVIuUkFOSykuZmlsbCgwKTtcbiAgICB0aGlzLmdlbmVyYXRlTG90dGVyaWVzKGFtb3VudCAvIE5VTUJFUi5VTklUKTtcbiAgfVxuXG4gIGdlbmVyYXRlTG90dGVyaWVzKGNvdW50KSB7XG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVycyA9IFJhbmRvbS5nZW5lcmF0ZVJhbmRvbU51bWJlcnMoKTtcbiAgICAgIHRoaXMubG90dGVyaWVzLnB1c2gobmV3IExvdHRvKHJhbmRvbU51bWJlcnMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldExvdHRlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb3R0ZXJpZXMubWFwKChsb3R0ZXJ5KSA9PiBsb3R0ZXJ5LmdldExvdHRvU3RyaW5nKCkpO1xuICB9XG5cbiAgZ2V0UmFua1Jlc3VsdChsb3R0b051bSwgYm9udXMpIHtcbiAgICBjb25zdCByYW5rID0gbmV3IEFycmF5KE5VTUJFUi5SQU5LKS5maWxsKDApO1xuICAgIHRoaXMubG90dGVyaWVzLmZvckVhY2goKGxvdHRvKSA9PiB7XG4gICAgICByYW5rW1xuICAgICAgICB0aGlzLmdldFJhbmsobG90dG8ubWF0Y2hOdW1iZXJzKGxvdHRvTnVtKSwgbG90dG8ubWF0Y2hCb251cyhib251cykpXG4gICAgICBdKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5yYW5rLCBDYWxjdWxhdGlvbi5nZXRQcm9maXQocmFuaywgdGhpcy5sb3R0ZXJpZXMubGVuZ3RoKV07XG4gIH1cblxuICBnZXRSYW5rKG1hdGNoTnVtYmVyLCBib251c051bWJlcikge1xuICAgIGlmIChtYXRjaE51bWJlciA+IDkpIHJldHVybjtcbiAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDYgfHwgKG1hdGNoTnVtYmVyID09PSA3ICYmIGJvbnVzTnVtYmVyKSlcbiAgICAgIHJldHVybiAxMCAtIG1hdGNoTnVtYmVyO1xuICAgIHJldHVybiA5IC0gbWF0Y2hOdW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG90dG9HYW1lO1xuIiwiaW1wb3J0IHsgRVJST1IsIE5VTUJFUiwgQ09NTUFORCB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBWYWxpZGF0aW9uID0ge1xuICBwdXJjaGFzZUFtb3VudChhbW91bnQpIHtcbiAgICB0aGlzLmlucHV0SXNJbnRlZ2VyKGFtb3VudCk7XG4gICAgdGhpcy5wdXJjaGFzZUFtb3VudElzT3ZlclVuaXQoYW1vdW50KTtcbiAgICB0aGlzLnB1cmNoYXNlQW1vdW50RGl2aWRlVW5pdChhbW91bnQpO1xuICB9LFxuXG4gIGlucHV0SXNJbnRlZ2VyKGFtb3VudCkge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGFtb3VudCkpIHJldHVybjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IuTlVNQkVSKTtcbiAgfSxcblxuICBwdXJjaGFzZUFtb3VudElzT3ZlclVuaXQoYW1vdW50KSB7XG4gICAgaWYgKGFtb3VudCA+PSBOVU1CRVIuVU5JVCkgcmV0dXJuO1xuICAgIHRocm93IG5ldyBFcnJvcihFUlJPUi5PVkVSX1VOSVQpO1xuICB9LFxuXG4gIHB1cmNoYXNlQW1vdW50RGl2aWRlVW5pdChhbW91bnQpIHtcbiAgICBpZiAoYW1vdW50ICUgTlVNQkVSLlVOSVQgPT09IDApIHJldHVybjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IuRElWSURFKTtcbiAgfSxcblxuICBsb3R0b051bWJlcnMobnVtYmVycykge1xuICAgIG51bWJlcnMuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmlucHV0SXNJbnRlZ2VyKG51bWJlcik7XG4gICAgICB0aGlzLm51bWJlckluUmFuZ2UobnVtYmVyKTtcbiAgICB9KTtcbiAgICB0aGlzLmxvdHRvTnVtYmVyU2l6ZShudW1iZXJzKTtcbiAgICB0aGlzLmlzRHVwbGljYXRlZChudW1iZXJzKTtcbiAgfSxcblxuICBsb3R0b051bWJlclNpemUobnVtYmVycykge1xuICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gTlVNQkVSLlNJWkUpIHJldHVybjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IuU0laRSk7XG4gIH0sXG5cbiAgaXNEdXBsaWNhdGVkKG51bWJlcnMpIHtcbiAgICBjb25zdCBudW1iZXJzU2V0ID0gbmV3IFNldChudW1iZXJzKTtcbiAgICBpZiAobnVtYmVycy5sZW5ndGggPT09IG51bWJlcnNTZXQuc2l6ZSkgcmV0dXJuO1xuICAgIHRocm93IG5ldyBFcnJvcihFUlJPUi5EVVBMSUNBVEVEKTtcbiAgfSxcblxuICBudW1iZXJJblJhbmdlKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPj0gTlVNQkVSLk1JTl9SQU5HRSAmJiBudW1iZXIgPD0gTlVNQkVSLk1BWF9SQU5HRSkgcmV0dXJuO1xuICAgIHRocm93IG5ldyBFcnJvcihFUlJPUi5SQU5HRSk7XG4gIH0sXG5cbiAgYm9udXNOdW1iZXIobG90dG9OdW1iZXJzLCBib251c051bWJlcikge1xuICAgIHRoaXMuaW5wdXRJc0ludGVnZXIoYm9udXNOdW1iZXIpO1xuICAgIHRoaXMubnVtYmVySW5SYW5nZShib251c051bWJlcik7XG4gICAgdGhpcy5pc0R1cGxpY2F0ZWQoWy4uLmxvdHRvTnVtYmVycywgYm9udXNOdW1iZXJdKTtcbiAgfSxcblxuICByZXN0YXJ0Q29tbWFuZChhbnN3ZXIpIHtcbiAgICBpZiAoYW5zd2VyID09PSBDT01NQU5ELlJFU1RBUlQgfHwgYW5zd2VyID09PSBDT01NQU5ELlFVSVQpIHJldHVybjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IuUkVTVEFSVCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uO1xuIiwiaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuL3ZpZXcvbWFpblBhZ2UuanNcIjtcbmltcG9ydCByZXN1bHRQYWdlIGZyb20gXCIuL3ZpZXcvcmVzdWx0UGFnZS5qc1wiO1xuaW1wb3J0IExvdHRvR2FtZSBmcm9tIFwiLi9kb21haW4vTG90dG9HYW1lLmpzXCI7XG5pbXBvcnQgVmFsaWRhdGlvbiBmcm9tIFwiLi9WYWxpZGF0aW9uLmpzXCI7XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBsb3R0b0dhbWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluUGFnZUFkZEV2ZW50KCk7XG4gICAgdGhpcy5yZXN1bHRBZGRFdmVudCgpO1xuICB9XG5cbiAgbWFpblBhZ2VBZGRFdmVudCgpIHtcbiAgICBtYWluUGFnZS5hZGRFdmVudCgoKSA9PiB7XG4gICAgICBtYWluUGFnZS5jbGlja0lucHV0QW1vdW50KHRoaXMuYW1vdW50VHVybkxvdHRlcmllcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc3VsdEFkZEV2ZW50KCkge1xuICAgIHJlc3VsdFBhZ2UuYWRkRXZlbnQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pbnB1dExvdHRvQm9udXMocmVzdWx0UGFnZS5nZXRMb3R0b0JvbnVzKCkpO1xuICAgICAgcmVzdWx0UGFnZS5jbGlja1Jlc3VsdChyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgYW1vdW50VHVybkxvdHRlcmllcygpIHtcbiAgICBjb25zdCBhbW91bnQgPSArbWFpblBhZ2UuZ2V0SW5wdXRBbW91bnQoKTtcbiAgICB0cnkge1xuICAgICAgVmFsaWRhdGlvbi5wdXJjaGFzZUFtb3VudChhbW91bnQpO1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUxvdHRvR2FtZShhbW91bnQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBtYWtlTG90dG9HYW1lKGFtb3VudCkge1xuICAgIHRoaXMubG90dG9HYW1lID0gbmV3IExvdHRvR2FtZShhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmxvdHRvR2FtZS5nZXRMb3R0ZXJpZXMoKTtcbiAgfVxuXG4gIGlucHV0TG90dG9Cb251cyhbbG90dG8sIGJvbnVzXSkge1xuICAgIHRyeSB7XG4gICAgICBWYWxpZGF0aW9uLmxvdHRvTnVtYmVycyhsb3R0byk7XG4gICAgICBWYWxpZGF0aW9uLmJvbnVzTnVtYmVyKGxvdHRvLCBib251cyk7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUxvdHRvR2FtZVJlc3VsdChsb3R0bywgYm9udXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICAvL05vdGU6IGxvdHRvUmVzdWx0ID0gWzAsMCwwLDAsMCwwXSA9IDXrk7F+MeuTsSwg7IiY7J2166WgXG4gIGdlbmVyYXRlTG90dG9HYW1lUmVzdWx0KGxvdHRvLCBib251cykge1xuICAgIHJldHVybiB0aGlzLmxvdHRvR2FtZS5nZXRSYW5rUmVzdWx0KGxvdHRvLCBib251cyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsIi8qKlxuICogc3RlcCAy7J2YIOyLnOyekeygkOydtCDrkJjripQg7YyM7J287J6F64uI64ukLlxuICog64W465OcIO2ZmOqyveyXkOyEnCDsgqzsmqntlZjripQgcmVhZGxpbmUg65Ox7J2EIOu2iOufrOyYrCDqsr3smrAg7KCV7IOB7KCB7Jy866GcIOu5jOuTnO2VoCDsiJgg7JeG7Iq164uI64ukLlxuICovXG5cbmltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlci5qc1wiO1xuXG5jbGFzcyBBcHAge1xuICBwbGF5KCkge1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnBsYXkoKTtcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmMiLCJDb250cm9sRWxlbSIsImVsZW0iLCJ0eXBlIiwiaW5uZXJIVE1MIiwidmFsdWUiLCJpbnB1dEFtb3VudEVsZW0iLCJpbnB1dEFtb3VudE5leHRFbGVtIiwicmFuZG9tTG90dG9MaXN0RWxlbSIsImlucHV0QW1vdW50QXJlYUVsZW0iLCJhZGRFdmVudCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnZXRJbnB1dEFtb3VudCIsImNsaWNrSW5wdXRBbW91bnQiLCJyYW5kb21Mb3R0ZXJpZXMiLCJzaG93UmFuZG9tTG90dG9BbW91bnQiLCJzaG93UmFuZG9tTG90dG9MaXN0IiwidGV4dENvbnRlbnQiLCJtYWtlUmFuZG9tTG90dG9MaXN0IiwiZGlzcGxheSIsIm5vZGVSYW5kb21Mb3R0byIsIm51bWJlcnMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJlYWNoSW5wdXRMb3R0b051bWJlckVsZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaElucHV0Qm9udXNOdW1iZXJFbGVtIiwiZGlhbG9nRWxlbSIsInJlc3VsdENhbGxiYWNrIiwiaW5wdXRMb3R0b0JvbnVzQXJlYUVsZW0iLCJyZXN0YXJ0QnV0dG9uRWxlbSIsImNsaWNrUmVzdGFydCIsImNsaWNrUmVzdWx0Iiwic2hvd01vZGFsIiwic2hvd1Jlc3VsdCIsImdldExvdHRvQm9udXMiLCJsb3R0byIsImZvckVhY2giLCJib251cyIsInJhbmsiLCJjbG9zZSIsImlucHV0QW1vdW50TmV4dCIsIkxvdHRvIiwiX2NsYXNzQ2FsbENoZWNrIiwid3JpdGFibGUiLCJfbnVtYmVycyIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsInNvcnQiLCJwcmV2IiwibmV4dCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImxvdHRvTnVtYmVycyIsIlNldCIsIl90b0NvbnN1bWFibGVBcnJheSIsInNpemUiLCJib251c051bWJlciIsImluY2x1ZGVzIiwiZnJlZXplIiwiSU5QVVRfUFVSQ0hBU0VfQU1PVU5UIiwiSU5QVVRfTE9UVE9fTlVNQkVSUyIsIklOUFVUX0JPTlVTX05VTUJFUiIsIklOUFVUX1JFU1RBUlRfQ09NTUFORCIsIlJFU1RBUlQiLCJRVUlUIiwiYW1vdW50IiwiRVJST1IiLCJOVU1CRVIiLCJPVkVSX1VOSVQiLCJTSVpFIiwiUkFOR0UiLCJEVVBMSUNBVEVEIiwiRElWSURFIiwiVU5JVCIsIk1JTl9SQU5HRSIsIk1BWF9SQU5HRSIsIlJBTksiLCJDT01NQU5EIiwiUFJJWkUiLCJnZW5lcmF0ZVJhbmRvbU51bWJlcnMiLCJyYW5kb21OdW1iZXJzIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJudW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpc0R1cGxpY2F0ZWQiLCJnZXRQcml6ZSIsInByaXplIiwiXyIsImdldFByb2ZpdCIsInRvRml4ZWQiLCJMb3R0b0dhbWUiLCJsb3R0ZXJpZXMiLCJBcnJheSIsImZpbGwiLCJnZW5lcmF0ZUxvdHRlcmllcyIsIl90aGlzIiwiZnJvbSIsIlJhbmRvbSIsImxvdHRlcnkiLCJnZXRMb3R0b1N0cmluZyIsImxvdHRvTnVtIiwiX3RoaXMyIiwiZ2V0UmFuayIsIm1hdGNoTnVtYmVycyIsIm1hdGNoQm9udXMiLCJDYWxjdWxhdGlvbiIsIm1hdGNoTnVtYmVyIiwicHVyY2hhc2VBbW91bnQiLCJpbnB1dElzSW50ZWdlciIsInB1cmNoYXNlQW1vdW50SXNPdmVyVW5pdCIsInB1cmNoYXNlQW1vdW50RGl2aWRlVW5pdCIsIk51bWJlciIsImlzSW50ZWdlciIsIm51bWJlckluUmFuZ2UiLCJsb3R0b051bWJlclNpemUiLCJudW1iZXJzU2V0IiwicmVzdGFydENvbW1hbmQiLCJhbnN3ZXIiLCJDb250cm9sbGVyIiwibWFpblBhZ2VBZGRFdmVudCIsInJlc3VsdEFkZEV2ZW50IiwibWFpblBhZ2UiLCJhbW91bnRUdXJuTG90dGVyaWVzIiwicmVzdWx0UGFnZSIsImlucHV0TG90dG9Cb251cyIsIlZhbGlkYXRpb24iLCJtYWtlTG90dG9HYW1lIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJsb3R0b0dhbWUiLCJnZXRMb3R0ZXJpZXMiLCJfcmVmIiwiX3JlZjIiLCJnZW5lcmF0ZUxvdHRvR2FtZVJlc3VsdCIsImdldFJhbmtSZXN1bHQiLCJBcHAiLCJjb250cm9sbGVyIiwicGxheSJdLCJzb3VyY2VSb290IjoiIn0=