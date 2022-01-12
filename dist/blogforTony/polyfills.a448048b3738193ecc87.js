(self.webpackChunkblogfor_tony = self.webpackChunkblogfor_tony || []).push([
  [429],
  {
    7277: () => {
      "use strict";
      !(function (s) {
        const l = s.performance;
        function y(pe) {
          l && l.mark && l.mark(pe);
        }
        function h(pe, j) {
          l && l.measure && l.measure(pe, j);
        }
        y("Zone");
        const R = s.__Zone_symbol_prefix || "__zone_symbol__";
        function O(pe) {
          return R + pe;
        }
        const L = !0 === s[O("forceDuplicateZoneCheck")];
        if (s.Zone) {
          if (L || "function" != typeof s.Zone.__symbol__)
            throw new Error("Zone already loaded.");
          return s.Zone;
        }
        let W = (() => {
          class pe {
            constructor(a, d) {
              (this._parent = a),
                (this._name = d ? d.name || "unnamed" : "<root>"),
                (this._properties = (d && d.properties) || {}),
                (this._zoneDelegate = new G(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  d
                ));
            }
            static assertZonePatched() {
              if (s.Promise !== Fe.ZoneAwarePromise)
                throw new Error(
                  "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                );
            }
            static get root() {
              let a = pe.current;
              for (; a.parent; ) a = a.parent;
              return a;
            }
            static get current() {
              return we.zone;
            }
            static get currentTask() {
              return Ue;
            }
            static __load_patch(a, d, X = !1) {
              if (Fe.hasOwnProperty(a)) {
                if (!X && L) throw Error("Already loaded patch: " + a);
              } else if (!s["__Zone_disable_" + a]) {
                const re = "Zone:" + a;
                y(re), (Fe[a] = d(s, pe, Ye)), h(re, re);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            get(a) {
              const d = this.getZoneWith(a);
              if (d) return d._properties[a];
            }
            getZoneWith(a) {
              let d = this;
              for (; d; ) {
                if (d._properties.hasOwnProperty(a)) return d;
                d = d._parent;
              }
              return null;
            }
            fork(a) {
              if (!a) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, a);
            }
            wrap(a, d) {
              if ("function" != typeof a)
                throw new Error("Expecting function got: " + a);
              const X = this._zoneDelegate.intercept(this, a, d),
                re = this;
              return function () {
                return re.runGuarded(X, this, arguments, d);
              };
            }
            run(a, d, X, re) {
              we = { parent: we, zone: this };
              try {
                return this._zoneDelegate.invoke(this, a, d, X, re);
              } finally {
                we = we.parent;
              }
            }
            runGuarded(a, d = null, X, re) {
              we = { parent: we, zone: this };
              try {
                try {
                  return this._zoneDelegate.invoke(this, a, d, X, re);
                } catch (Ze) {
                  if (this._zoneDelegate.handleError(this, Ze)) throw Ze;
                }
              } finally {
                we = we.parent;
              }
            }
            runTask(a, d, X) {
              if (a.zone != this)
                throw new Error(
                  "A task can only be run in the zone of creation! (Creation: " +
                    (a.zone || be).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              if (a.state === ye && (a.type === oe || a.type === ge)) return;
              const re = a.state != Le;
              re && a._transitionTo(Le, fe), a.runCount++;
              const Ze = Ue;
              (Ue = a), (we = { parent: we, zone: this });
              try {
                a.type == ge &&
                  a.data &&
                  !a.data.isPeriodic &&
                  (a.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, a, d, X);
                } catch (C) {
                  if (this._zoneDelegate.handleError(this, C)) throw C;
                }
              } finally {
                a.state !== ye &&
                  a.state !== Ie &&
                  (a.type == oe || (a.data && a.data.isPeriodic)
                    ? re && a._transitionTo(fe, Le)
                    : ((a.runCount = 0),
                      this._updateTaskCount(a, -1),
                      re && a._transitionTo(ye, Le, ye))),
                  (we = we.parent),
                  (Ue = Ze);
              }
            }
            scheduleTask(a) {
              if (a.zone && a.zone !== this) {
                let X = this;
                for (; X; ) {
                  if (X === a.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${a.zone.name}`
                    );
                  X = X.parent;
                }
              }
              a._transitionTo(Ae, ye);
              const d = [];
              (a._zoneDelegates = d), (a._zone = this);
              try {
                a = this._zoneDelegate.scheduleTask(this, a);
              } catch (X) {
                throw (
                  (a._transitionTo(Ie, Ae, ye),
                  this._zoneDelegate.handleError(this, X),
                  X)
                );
              }
              return (
                a._zoneDelegates === d && this._updateTaskCount(a, 1),
                a.state == Ae && a._transitionTo(fe, Ae),
                a
              );
            }
            scheduleMicroTask(a, d, X, re) {
              return this.scheduleTask(new B(Q, a, d, X, re, void 0));
            }
            scheduleMacroTask(a, d, X, re, Ze) {
              return this.scheduleTask(new B(ge, a, d, X, re, Ze));
            }
            scheduleEventTask(a, d, X, re, Ze) {
              return this.scheduleTask(new B(oe, a, d, X, re, Ze));
            }
            cancelTask(a) {
              if (a.zone != this)
                throw new Error(
                  "A task can only be cancelled in the zone of creation! (Creation: " +
                    (a.zone || be).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              a._transitionTo(ve, fe, Le);
              try {
                this._zoneDelegate.cancelTask(this, a);
              } catch (d) {
                throw (
                  (a._transitionTo(Ie, ve),
                  this._zoneDelegate.handleError(this, d),
                  d)
                );
              }
              return (
                this._updateTaskCount(a, -1),
                a._transitionTo(ye, ve),
                (a.runCount = 0),
                a
              );
            }
            _updateTaskCount(a, d) {
              const X = a._zoneDelegates;
              -1 == d && (a._zoneDelegates = null);
              for (let re = 0; re < X.length; re++)
                X[re]._updateTaskCount(a.type, d);
            }
          }
          return (pe.__symbol__ = O), pe;
        })();
        const Y = {
          name: "",
          onHasTask: (pe, j, a, d) => pe.hasTask(a, d),
          onScheduleTask: (pe, j, a, d) => pe.scheduleTask(a, d),
          onInvokeTask: (pe, j, a, d, X, re) => pe.invokeTask(a, d, X, re),
          onCancelTask: (pe, j, a, d) => pe.cancelTask(a, d),
        };
        class G {
          constructor(j, a, d) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = j),
              (this._parentDelegate = a),
              (this._forkZS = d && (d && d.onFork ? d : a._forkZS)),
              (this._forkDlgt = d && (d.onFork ? a : a._forkDlgt)),
              (this._forkCurrZone =
                d && (d.onFork ? this.zone : a._forkCurrZone)),
              (this._interceptZS = d && (d.onIntercept ? d : a._interceptZS)),
              (this._interceptDlgt =
                d && (d.onIntercept ? a : a._interceptDlgt)),
              (this._interceptCurrZone =
                d && (d.onIntercept ? this.zone : a._interceptCurrZone)),
              (this._invokeZS = d && (d.onInvoke ? d : a._invokeZS)),
              (this._invokeDlgt = d && (d.onInvoke ? a : a._invokeDlgt)),
              (this._invokeCurrZone =
                d && (d.onInvoke ? this.zone : a._invokeCurrZone)),
              (this._handleErrorZS =
                d && (d.onHandleError ? d : a._handleErrorZS)),
              (this._handleErrorDlgt =
                d && (d.onHandleError ? a : a._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                d && (d.onHandleError ? this.zone : a._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                d && (d.onScheduleTask ? d : a._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                d && (d.onScheduleTask ? a : a._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                d && (d.onScheduleTask ? this.zone : a._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                d && (d.onInvokeTask ? d : a._invokeTaskZS)),
              (this._invokeTaskDlgt =
                d && (d.onInvokeTask ? a : a._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                d && (d.onInvokeTask ? this.zone : a._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                d && (d.onCancelTask ? d : a._cancelTaskZS)),
              (this._cancelTaskDlgt =
                d && (d.onCancelTask ? a : a._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                d && (d.onCancelTask ? this.zone : a._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const X = d && d.onHasTask;
            (X || (a && a._hasTaskZS)) &&
              ((this._hasTaskZS = X ? d : Y),
              (this._hasTaskDlgt = a),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = j),
              d.onScheduleTask ||
                ((this._scheduleTaskZS = Y),
                (this._scheduleTaskDlgt = a),
                (this._scheduleTaskCurrZone = this.zone)),
              d.onInvokeTask ||
                ((this._invokeTaskZS = Y),
                (this._invokeTaskDlgt = a),
                (this._invokeTaskCurrZone = this.zone)),
              d.onCancelTask ||
                ((this._cancelTaskZS = Y),
                (this._cancelTaskDlgt = a),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(j, a) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, j, a)
              : new W(j, a);
          }
          intercept(j, a, d) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  j,
                  a,
                  d
                )
              : a;
          }
          invoke(j, a, d, X, re) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  j,
                  a,
                  d,
                  X,
                  re
                )
              : a.apply(d, X);
          }
          handleError(j, a) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                j,
                a
              )
            );
          }
          scheduleTask(j, a) {
            let d = a;
            if (this._scheduleTaskZS)
              this._hasTaskZS && d._zoneDelegates.push(this._hasTaskDlgtOwner),
                (d = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  j,
                  a
                )),
                d || (d = a);
            else if (a.scheduleFn) a.scheduleFn(a);
            else {
              if (a.type != Q) throw new Error("Task is missing scheduleFn.");
              H(a);
            }
            return d;
          }
          invokeTask(j, a, d, X) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  j,
                  a,
                  d,
                  X
                )
              : a.callback.apply(d, X);
          }
          cancelTask(j, a) {
            let d;
            if (this._cancelTaskZS)
              d = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                j,
                a
              );
            else {
              if (!a.cancelFn) throw Error("Task is not cancelable");
              d = a.cancelFn(a);
            }
            return d;
          }
          hasTask(j, a) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  j,
                  a
                );
            } catch (d) {
              this.handleError(j, d);
            }
          }
          _updateTaskCount(j, a) {
            const d = this._taskCounts,
              X = d[j],
              re = (d[j] = X + a);
            if (re < 0)
              throw new Error("More tasks executed then were scheduled.");
            (0 != X && 0 != re) ||
              this.hasTask(this.zone, {
                microTask: d.microTask > 0,
                macroTask: d.macroTask > 0,
                eventTask: d.eventTask > 0,
                change: j,
              });
          }
        }
        class B {
          constructor(j, a, d, X, re, Ze) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = "notScheduled"),
              (this.type = j),
              (this.source = a),
              (this.data = X),
              (this.scheduleFn = re),
              (this.cancelFn = Ze),
              !d)
            )
              throw new Error("callback is not defined");
            this.callback = d;
            const C = this;
            this.invoke =
              j === oe && X && X.useG
                ? B.invokeTask
                : function () {
                    return B.invokeTask.call(s, C, this, arguments);
                  };
          }
          static invokeTask(j, a, d) {
            j || (j = this), Ve++;
            try {
              return j.runCount++, j.zone.runTask(j, a, d);
            } finally {
              1 == Ve && me(), Ve--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(ye, Ae);
          }
          _transitionTo(j, a, d) {
            if (this._state !== a && this._state !== d)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${j}', expecting state '${a}'${
                  d ? " or '" + d + "'" : ""
                }, was '${this._state}'.`
              );
            (this._state = j), j == ye && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && void 0 !== this.data.handleId
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const le = O("setTimeout"),
          ce = O("Promise"),
          de = O("then");
        let U,
          Ne = [],
          ke = !1;
        function H(pe) {
          if (0 === Ve && 0 === Ne.length)
            if ((U || (s[ce] && (U = s[ce].resolve(0))), U)) {
              let j = U[de];
              j || (j = U.then), j.call(U, me);
            } else s[le](me, 0);
          pe && Ne.push(pe);
        }
        function me() {
          if (!ke) {
            for (ke = !0; Ne.length; ) {
              const pe = Ne;
              Ne = [];
              for (let j = 0; j < pe.length; j++) {
                const a = pe[j];
                try {
                  a.zone.runTask(a, null, null);
                } catch (d) {
                  Ye.onUnhandledError(d);
                }
              }
            }
            Ye.microtaskDrainDone(), (ke = !1);
          }
        }
        const be = { name: "NO ZONE" },
          ye = "notScheduled",
          Ae = "scheduling",
          fe = "scheduled",
          Le = "running",
          ve = "canceling",
          Ie = "unknown",
          Q = "microTask",
          ge = "macroTask",
          oe = "eventTask",
          Fe = {},
          Ye = {
            symbol: O,
            currentZoneFrame: () => we,
            onUnhandledError: xe,
            microtaskDrainDone: xe,
            scheduleMicroTask: H,
            showUncaughtError: () => !W[O("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: xe,
            patchMethod: () => xe,
            bindArguments: () => [],
            patchThen: () => xe,
            patchMacroTask: () => xe,
            patchEventPrototype: () => xe,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => xe,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => xe,
            wrapWithCurrentZone: () => xe,
            filterProperties: () => [],
            attachOriginToPatched: () => xe,
            _redefineProperty: () => xe,
            patchCallbacks: () => xe,
          };
        let we = { parent: null, zone: new W(null, null) },
          Ue = null,
          Ve = 0;
        function xe() {}
        h("Zone", "Zone"), (s.Zone = W);
      })(
        ("undefined" != typeof window && window) ||
          ("undefined" != typeof self && self) ||
          global
      );
      const _e = Object.getOwnPropertyDescriptor,
        ie = Object.defineProperty,
        De = Object.getPrototypeOf,
        r = Object.create,
        M = Array.prototype.slice,
        S = "addEventListener",
        N = "removeEventListener",
        f = Zone.__symbol__(S),
        m = Zone.__symbol__(N),
        T = "true",
        p = "false",
        g = Zone.__symbol__("");
      function e(s, l) {
        return Zone.current.wrap(s, l);
      }
      function n(s, l, y, h, R) {
        return Zone.current.scheduleMacroTask(s, l, y, h, R);
      }
      const i = Zone.__symbol__,
        t = "undefined" != typeof window,
        o = t ? window : void 0,
        u = (t && o) || ("object" == typeof self && self) || global,
        b = [null];
      function E(s, l) {
        for (let y = s.length - 1; y >= 0; y--)
          "function" == typeof s[y] && (s[y] = e(s[y], l + "_" + y));
        return s;
      }
      function k(s) {
        return (
          !s ||
          (!1 !== s.writable &&
            !("function" == typeof s.get && void 0 === s.set))
        );
      }
      const A =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        D =
          !("nw" in u) &&
          void 0 !== u.process &&
          "[object process]" === {}.toString.call(u.process),
        q = !D && !A && !(!t || !o.HTMLElement),
        K =
          void 0 !== u.process &&
          "[object process]" === {}.toString.call(u.process) &&
          !A &&
          !(!t || !o.HTMLElement),
        Z = {},
        P = function (s) {
          if (!(s = s || u.event)) return;
          let l = Z[s.type];
          l || (l = Z[s.type] = i("ON_PROPERTY" + s.type));
          const y = this || s.target || u,
            h = y[l];
          let R;
          if (q && y === o && "error" === s.type) {
            const O = s;
            (R =
              h &&
              h.call(this, O.message, O.filename, O.lineno, O.colno, O.error)),
              !0 === R && s.preventDefault();
          } else
            (R = h && h.apply(this, arguments)),
              null != R && !R && s.preventDefault();
          return R;
        };
      function $(s, l, y) {
        let h = _e(s, l);
        if (
          (!h && y && _e(y, l) && (h = { enumerable: !0, configurable: !0 }),
          !h || !h.configurable)
        )
          return;
        const R = i("on" + l + "patched");
        if (s.hasOwnProperty(R) && s[R]) return;
        delete h.writable, delete h.value;
        const O = h.get,
          L = h.set,
          W = l.substr(2);
        let Y = Z[W];
        Y || (Y = Z[W] = i("ON_PROPERTY" + W)),
          (h.set = function (G) {
            let B = this;
            !B && s === u && (B = u),
              B &&
                (B[Y] && B.removeEventListener(W, P),
                L && L.apply(B, b),
                "function" == typeof G
                  ? ((B[Y] = G), B.addEventListener(W, P, !1))
                  : (B[Y] = null));
          }),
          (h.get = function () {
            let G = this;
            if ((!G && s === u && (G = u), !G)) return null;
            const B = G[Y];
            if (B) return B;
            if (O) {
              let le = O && O.call(this);
              if (le)
                return (
                  h.set.call(this, le),
                  "function" == typeof G.removeAttribute &&
                    G.removeAttribute(l),
                  le
                );
            }
            return null;
          }),
          ie(s, l, h),
          (s[R] = !0);
      }
      function he(s, l, y) {
        if (l) for (let h = 0; h < l.length; h++) $(s, "on" + l[h], y);
        else {
          const h = [];
          for (const R in s) "on" == R.substr(0, 2) && h.push(R);
          for (let R = 0; R < h.length; R++) $(s, h[R], y);
        }
      }
      const Ee = i("originalInstance");
      function ae(s) {
        const l = u[s];
        if (!l) return;
        (u[i(s)] = l),
          (u[s] = function () {
            const R = E(arguments, s);
            switch (R.length) {
              case 0:
                this[Ee] = new l();
                break;
              case 1:
                this[Ee] = new l(R[0]);
                break;
              case 2:
                this[Ee] = new l(R[0], R[1]);
                break;
              case 3:
                this[Ee] = new l(R[0], R[1], R[2]);
                break;
              case 4:
                this[Ee] = new l(R[0], R[1], R[2], R[3]);
                break;
              default:
                throw new Error("Arg list too long.");
            }
          }),
          Ce(u[s], l);
        const y = new l(function () {});
        let h;
        for (h in y)
          ("XMLHttpRequest" === s && "responseBlob" === h) ||
            (function (R) {
              "function" == typeof y[R]
                ? (u[s].prototype[R] = function () {
                    return this[Ee][R].apply(this[Ee], arguments);
                  })
                : ie(u[s].prototype, R, {
                    set: function (O) {
                      "function" == typeof O
                        ? ((this[Ee][R] = e(O, s + "." + R)),
                          Ce(this[Ee][R], O))
                        : (this[Ee][R] = O);
                    },
                    get: function () {
                      return this[Ee][R];
                    },
                  });
            })(h);
        for (h in l)
          "prototype" !== h && l.hasOwnProperty(h) && (u[s][h] = l[h]);
      }
      function Pe(s, l, y) {
        let h = s;
        for (; h && !h.hasOwnProperty(l); ) h = De(h);
        !h && s[l] && (h = s);
        const R = i(l);
        let O = null;
        if (
          h &&
          (!(O = h[R]) || !h.hasOwnProperty(R)) &&
          ((O = h[R] = h[l]), k(h && _e(h, l)))
        ) {
          const W = y(O, R, l);
          (h[l] = function () {
            return W(this, arguments);
          }),
            Ce(h[l], O);
        }
        return O;
      }
      function He(s, l, y) {
        let h = null;
        function R(O) {
          const L = O.data;
          return (
            (L.args[L.cbIdx] = function () {
              O.invoke.apply(this, arguments);
            }),
            h.apply(L.target, L.args),
            O
          );
        }
        h = Pe(
          s,
          l,
          (O) =>
            function (L, W) {
              const Y = y(L, W);
              return Y.cbIdx >= 0 && "function" == typeof W[Y.cbIdx]
                ? n(Y.name, W[Y.cbIdx], Y, R)
                : O.apply(L, W);
            }
        );
      }
      function Ce(s, l) {
        s[i("OriginalDelegate")] = l;
      }
      let We = !1,
        Ke = !1;
      function V() {
        if (We) return Ke;
        We = !0;
        try {
          const s = o.navigator.userAgent;
          (-1 !== s.indexOf("MSIE ") ||
            -1 !== s.indexOf("Trident/") ||
            -1 !== s.indexOf("Edge/")) &&
            (Ke = !0);
        } catch (s) {}
        return Ke;
      }
      Zone.__load_patch("ZoneAwarePromise", (s, l, y) => {
        const h = Object.getOwnPropertyDescriptor,
          R = Object.defineProperty,
          L = y.symbol,
          W = [],
          Y = !0 === s[L("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          G = L("Promise"),
          B = L("then");
        (y.onUnhandledError = (C) => {
          if (y.showUncaughtError()) {
            const _ = C && C.rejection;
            _
              ? console.error(
                  "Unhandled Promise rejection:",
                  _ instanceof Error ? _.message : _,
                  "; Zone:",
                  C.zone.name,
                  "; Task:",
                  C.task && C.task.source,
                  "; Value:",
                  _,
                  _ instanceof Error ? _.stack : void 0
                )
              : console.error(C);
          }
        }),
          (y.microtaskDrainDone = () => {
            for (; W.length; ) {
              const C = W.shift();
              try {
                C.zone.runGuarded(() => {
                  throw C.throwOriginal ? C.rejection : C;
                });
              } catch (_) {
                de(_);
              }
            }
          });
        const ce = L("unhandledPromiseRejectionHandler");
        function de(C) {
          y.onUnhandledError(C);
          try {
            const _ = l[ce];
            "function" == typeof _ && _.call(this, C);
          } catch (_) {}
        }
        function Ne(C) {
          return C && C.then;
        }
        function ke(C) {
          return C;
        }
        function U(C) {
          return a.reject(C);
        }
        const H = L("state"),
          me = L("value"),
          be = L("finally"),
          ye = L("parentPromiseValue"),
          Ae = L("parentPromiseState"),
          Le = null,
          Ie = !1;
        function ge(C, _) {
          return (x) => {
            try {
              we(C, _, x);
            } catch (I) {
              we(C, !1, I);
            }
          };
        }
        const Ye = L("currentTaskTrace");
        function we(C, _, x) {
          const I = (function () {
            let C = !1;
            return function (x) {
              return function () {
                C || ((C = !0), x.apply(null, arguments));
              };
            };
          })();
          if (C === x) throw new TypeError("Promise resolved with itself");
          if (C[H] === Le) {
            let ne = null;
            try {
              ("object" == typeof x || "function" == typeof x) &&
                (ne = x && x.then);
            } catch (se) {
              return (
                I(() => {
                  we(C, !1, se);
                })(),
                C
              );
            }
            if (
              _ !== Ie &&
              x instanceof a &&
              x.hasOwnProperty(H) &&
              x.hasOwnProperty(me) &&
              x[H] !== Le
            )
              Ve(x), we(C, x[H], x[me]);
            else if (_ !== Ie && "function" == typeof ne)
              try {
                ne.call(x, I(ge(C, _)), I(ge(C, !1)));
              } catch (se) {
                I(() => {
                  we(C, !1, se);
                })();
              }
            else {
              C[H] = _;
              const se = C[me];
              if (
                ((C[me] = x),
                C[be] === be && !0 === _ && ((C[H] = C[Ae]), (C[me] = C[ye])),
                _ === Ie && x instanceof Error)
              ) {
                const J =
                  l.currentTask &&
                  l.currentTask.data &&
                  l.currentTask.data.__creationTrace__;
                J &&
                  R(x, Ye, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: J,
                  });
              }
              for (let J = 0; J < se.length; )
                xe(C, se[J++], se[J++], se[J++], se[J++]);
              if (0 == se.length && _ == Ie) {
                C[H] = 0;
                let J = x;
                try {
                  throw new Error(
                    "Uncaught (in promise): " +
                      (function (C) {
                        return C && C.toString === Object.prototype.toString
                          ? ((C.constructor && C.constructor.name) || "") +
                              ": " +
                              JSON.stringify(C)
                          : C
                          ? C.toString()
                          : Object.prototype.toString.call(C);
                      })(x) +
                      (x && x.stack ? "\n" + x.stack : "")
                  );
                } catch (ee) {
                  J = ee;
                }
                Y && (J.throwOriginal = !0),
                  (J.rejection = x),
                  (J.promise = C),
                  (J.zone = l.current),
                  (J.task = l.currentTask),
                  W.push(J),
                  y.scheduleMicroTask();
              }
            }
          }
          return C;
        }
        const Ue = L("rejectionHandledHandler");
        function Ve(C) {
          if (0 === C[H]) {
            try {
              const _ = l[Ue];
              _ &&
                "function" == typeof _ &&
                _.call(this, { rejection: C[me], promise: C });
            } catch (_) {}
            C[H] = Ie;
            for (let _ = 0; _ < W.length; _++)
              C === W[_].promise && W.splice(_, 1);
          }
        }
        function xe(C, _, x, I, ne) {
          Ve(C);
          const se = C[H],
            J = se
              ? "function" == typeof I
                ? I
                : ke
              : "function" == typeof ne
              ? ne
              : U;
          _.scheduleMicroTask(
            "Promise.then",
            () => {
              try {
                const ee = C[me],
                  ue = !!x && be === x[be];
                ue && ((x[ye] = ee), (x[Ae] = se));
                const Te = _.run(
                  J,
                  void 0,
                  ue && J !== U && J !== ke ? [] : [ee]
                );
                we(x, !0, Te);
              } catch (ee) {
                we(x, !1, ee);
              }
            },
            x
          );
        }
        const j = function () {};
        class a {
          static toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
          static resolve(_) {
            return we(new this(null), !0, _);
          }
          static reject(_) {
            return we(new this(null), Ie, _);
          }
          static race(_) {
            let x,
              I,
              ne = new this((ee, ue) => {
                (x = ee), (I = ue);
              });
            function se(ee) {
              x(ee);
            }
            function J(ee) {
              I(ee);
            }
            for (let ee of _) Ne(ee) || (ee = this.resolve(ee)), ee.then(se, J);
            return ne;
          }
          static all(_) {
            return a.allWithCallback(_);
          }
          static allSettled(_) {
            return (
              this && this.prototype instanceof a ? this : a
            ).allWithCallback(_, {
              thenCallback: (I) => ({ status: "fulfilled", value: I }),
              errorCallback: (I) => ({ status: "rejected", reason: I }),
            });
          }
          static allWithCallback(_, x) {
            let I,
              ne,
              se = new this((Te, Se) => {
                (I = Te), (ne = Se);
              }),
              J = 2,
              ee = 0;
            const ue = [];
            for (let Te of _) {
              Ne(Te) || (Te = this.resolve(Te));
              const Se = ee;
              try {
                Te.then(
                  (ze) => {
                    (ue[Se] = x ? x.thenCallback(ze) : ze),
                      J--,
                      0 === J && I(ue);
                  },
                  (ze) => {
                    x
                      ? ((ue[Se] = x.errorCallback(ze)), J--, 0 === J && I(ue))
                      : ne(ze);
                  }
                );
              } catch (ze) {
                ne(ze);
              }
              J++, ee++;
            }
            return (J -= 2), 0 === J && I(ue), se;
          }
          constructor(_) {
            const x = this;
            if (!(x instanceof a))
              throw new Error("Must be an instanceof Promise.");
            (x[H] = Le), (x[me] = []);
            try {
              _ && _(ge(x, !0), ge(x, Ie));
            } catch (I) {
              we(x, !1, I);
            }
          }
          get [Symbol.toStringTag]() {
            return "Promise";
          }
          get [Symbol.species]() {
            return a;
          }
          then(_, x) {
            let I = this.constructor[Symbol.species];
            (!I || "function" != typeof I) && (I = this.constructor || a);
            const ne = new I(j),
              se = l.current;
            return (
              this[H] == Le
                ? this[me].push(se, ne, _, x)
                : xe(this, se, ne, _, x),
              ne
            );
          }
          catch(_) {
            return this.then(null, _);
          }
          finally(_) {
            let x = this.constructor[Symbol.species];
            (!x || "function" != typeof x) && (x = a);
            const I = new x(j);
            I[be] = be;
            const ne = l.current;
            return (
              this[H] == Le
                ? this[me].push(ne, I, _, _)
                : xe(this, ne, I, _, _),
              I
            );
          }
        }
        (a.resolve = a.resolve),
          (a.reject = a.reject),
          (a.race = a.race),
          (a.all = a.all);
        const d = (s[G] = s.Promise);
        s.Promise = a;
        const X = L("thenPatched");
        function re(C) {
          const _ = C.prototype,
            x = h(_, "then");
          if (x && (!1 === x.writable || !x.configurable)) return;
          const I = _.then;
          (_[B] = I),
            (C.prototype.then = function (ne, se) {
              return new a((ee, ue) => {
                I.call(this, ee, ue);
              }).then(ne, se);
            }),
            (C[X] = !0);
        }
        return (
          (y.patchThen = re),
          d &&
            (re(d),
            Pe(s, "fetch", (C) =>
              (function (C) {
                return function (_, x) {
                  let I = C.apply(_, x);
                  if (I instanceof a) return I;
                  let ne = I.constructor;
                  return ne[X] || re(ne), I;
                };
              })(C)
            )),
          (Promise[l.__symbol__("uncaughtPromiseErrors")] = W),
          a
        );
      }),
        Zone.__load_patch("toString", (s) => {
          const l = Function.prototype.toString,
            y = i("OriginalDelegate"),
            h = i("Promise"),
            R = i("Error"),
            O = function () {
              if ("function" == typeof this) {
                const G = this[y];
                if (G)
                  return "function" == typeof G
                    ? l.call(G)
                    : Object.prototype.toString.call(G);
                if (this === Promise) {
                  const B = s[h];
                  if (B) return l.call(B);
                }
                if (this === Error) {
                  const B = s[R];
                  if (B) return l.call(B);
                }
              }
              return l.call(this);
            };
          (O[y] = l), (Function.prototype.toString = O);
          const L = Object.prototype.toString;
          Object.prototype.toString = function () {
            return "function" == typeof Promise && this instanceof Promise
              ? "[object Promise]"
              : L.call(this);
          };
        });
      let F = !1;
      if ("undefined" != typeof window)
        try {
          const s = Object.defineProperty({}, "passive", {
            get: function () {
              F = !0;
            },
          });
          window.addEventListener("test", s, s),
            window.removeEventListener("test", s, s);
        } catch (s) {
          F = !1;
        }
      const te = { useG: !0 },
        z = {},
        Re = {},
        Me = new RegExp("^" + g + "(\\w+)(true|false)$"),
        Be = i("propagationStopped");
      function Ge(s, l) {
        const y = (l ? l(s) : s) + p,
          h = (l ? l(s) : s) + T,
          R = g + y,
          O = g + h;
        (z[s] = {}), (z[s][p] = R), (z[s][T] = O);
      }
      function Qe(s, l, y) {
        const h = (y && y.add) || S,
          R = (y && y.rm) || N,
          O = (y && y.listeners) || "eventListeners",
          L = (y && y.rmAll) || "removeAllListeners",
          W = i(h),
          Y = "." + h + ":",
          le = function (U, H, me) {
            if (U.isRemoved) return;
            const be = U.callback;
            "object" == typeof be &&
              be.handleEvent &&
              ((U.callback = (Ae) => be.handleEvent(Ae)),
              (U.originalDelegate = be)),
              U.invoke(U, H, [me]);
            const ye = U.options;
            ye &&
              "object" == typeof ye &&
              ye.once &&
              H[R].call(
                H,
                me.type,
                U.originalDelegate ? U.originalDelegate : U.callback,
                ye
              );
          },
          ce = function (U) {
            if (!(U = U || s.event)) return;
            const H = this || U.target || s,
              me = H[z[U.type][p]];
            if (me)
              if (1 === me.length) le(me[0], H, U);
              else {
                const be = me.slice();
                for (let ye = 0; ye < be.length && (!U || !0 !== U[Be]); ye++)
                  le(be[ye], H, U);
              }
          },
          de = function (U) {
            if (!(U = U || s.event)) return;
            const H = this || U.target || s,
              me = H[z[U.type][T]];
            if (me)
              if (1 === me.length) le(me[0], H, U);
              else {
                const be = me.slice();
                for (let ye = 0; ye < be.length && (!U || !0 !== U[Be]); ye++)
                  le(be[ye], H, U);
              }
          };
        function Ne(U, H) {
          if (!U) return !1;
          let me = !0;
          H && void 0 !== H.useG && (me = H.useG);
          const be = H && H.vh;
          let ye = !0;
          H && void 0 !== H.chkDup && (ye = H.chkDup);
          let Ae = !1;
          H && void 0 !== H.rt && (Ae = H.rt);
          let fe = U;
          for (; fe && !fe.hasOwnProperty(h); ) fe = De(fe);
          if ((!fe && U[h] && (fe = U), !fe || fe[W])) return !1;
          const Le = H && H.eventNameToString,
            ve = {},
            Ie = (fe[W] = fe[h]),
            Q = (fe[i(R)] = fe[R]),
            ge = (fe[i(O)] = fe[O]),
            oe = (fe[i(L)] = fe[L]);
          let Fe;
          function Ye(_, x) {
            return !F && "object" == typeof _ && _
              ? !!_.capture
              : F && x
              ? "boolean" == typeof _
                ? { capture: _, passive: !0 }
                : _
                ? "object" == typeof _ && !1 !== _.passive
                  ? Object.assign(Object.assign({}, _), { passive: !0 })
                  : _
                : { passive: !0 }
              : _;
          }
          H && H.prepend && (Fe = fe[i(H.prepend)] = fe[H.prepend]);
          const j = me
              ? function (_) {
                  if (!ve.isExisting)
                    return Ie.call(
                      ve.target,
                      ve.eventName,
                      ve.capture ? de : ce,
                      ve.options
                    );
                }
              : function (_) {
                  return Ie.call(ve.target, ve.eventName, _.invoke, ve.options);
                },
            a = me
              ? function (_) {
                  if (!_.isRemoved) {
                    const x = z[_.eventName];
                    let I;
                    x && (I = x[_.capture ? T : p]);
                    const ne = I && _.target[I];
                    if (ne)
                      for (let se = 0; se < ne.length; se++)
                        if (ne[se] === _) {
                          ne.splice(se, 1),
                            (_.isRemoved = !0),
                            0 === ne.length &&
                              ((_.allRemoved = !0), (_.target[I] = null));
                          break;
                        }
                  }
                  if (_.allRemoved)
                    return Q.call(
                      _.target,
                      _.eventName,
                      _.capture ? de : ce,
                      _.options
                    );
                }
              : function (_) {
                  return Q.call(_.target, _.eventName, _.invoke, _.options);
                },
            X =
              H && H.diff
                ? H.diff
                : function (_, x) {
                    const I = typeof x;
                    return (
                      ("function" === I && _.callback === x) ||
                      ("object" === I && _.originalDelegate === x)
                    );
                  },
            re = Zone[i("UNPATCHED_EVENTS")],
            Ze = s[i("PASSIVE_EVENTS")],
            C = function (_, x, I, ne, se = !1, J = !1) {
              return function () {
                const ee = this || s;
                let ue = arguments[0];
                H && H.transferEventName && (ue = H.transferEventName(ue));
                let Te = arguments[1];
                if (!Te) return _.apply(this, arguments);
                if (D && "uncaughtException" === ue)
                  return _.apply(this, arguments);
                let Se = !1;
                if ("function" != typeof Te) {
                  if (!Te.handleEvent) return _.apply(this, arguments);
                  Se = !0;
                }
                if (be && !be(_, Te, ee, arguments)) return;
                const ze = F && !!Ze && -1 !== Ze.indexOf(ue),
                  Xe = Ye(arguments[2], ze);
                if (re)
                  for (let et = 0; et < re.length; et++)
                    if (ue === re[et])
                      return ze
                        ? _.call(ee, ue, Te, Xe)
                        : _.apply(this, arguments);
                const ht = !!Xe && ("boolean" == typeof Xe || Xe.capture),
                  vt = !(!Xe || "object" != typeof Xe) && Xe.once,
                  It = Zone.current;
                let dt = z[ue];
                dt || (Ge(ue, Le), (dt = z[ue]));
                const yt = dt[ht ? T : p];
                let ut,
                  it = ee[yt],
                  Tt = !1;
                if (it) {
                  if (((Tt = !0), ye))
                    for (let et = 0; et < it.length; et++)
                      if (X(it[et], Te)) return;
                } else it = ee[yt] = [];
                const Et = ee.constructor.name,
                  kt = Re[Et];
                kt && (ut = kt[ue]),
                  ut || (ut = Et + x + (Le ? Le(ue) : ue)),
                  (ve.options = Xe),
                  vt && (ve.options.once = !1),
                  (ve.target = ee),
                  (ve.capture = ht),
                  (ve.eventName = ue),
                  (ve.isExisting = Tt);
                const ot = me ? te : void 0;
                ot && (ot.taskData = ve);
                const Je = It.scheduleEventTask(ut, Te, ot, I, ne);
                return (
                  (ve.target = null),
                  ot && (ot.taskData = null),
                  vt && (Xe.once = !0),
                  (!F && "boolean" == typeof Je.options) || (Je.options = Xe),
                  (Je.target = ee),
                  (Je.capture = ht),
                  (Je.eventName = ue),
                  Se && (Je.originalDelegate = Te),
                  J ? it.unshift(Je) : it.push(Je),
                  se ? ee : void 0
                );
              };
            };
          return (
            (fe[h] = C(Ie, Y, j, a, Ae)),
            Fe &&
              (fe.prependListener = C(
                Fe,
                ".prependListener:",
                function (_) {
                  return Fe.call(ve.target, ve.eventName, _.invoke, ve.options);
                },
                a,
                Ae,
                !0
              )),
            (fe[R] = function () {
              const _ = this || s;
              let x = arguments[0];
              H && H.transferEventName && (x = H.transferEventName(x));
              const I = arguments[2],
                ne = !!I && ("boolean" == typeof I || I.capture),
                se = arguments[1];
              if (!se) return Q.apply(this, arguments);
              if (be && !be(Q, se, _, arguments)) return;
              const J = z[x];
              let ee;
              J && (ee = J[ne ? T : p]);
              const ue = ee && _[ee];
              if (ue)
                for (let Te = 0; Te < ue.length; Te++) {
                  const Se = ue[Te];
                  if (X(Se, se))
                    return (
                      ue.splice(Te, 1),
                      (Se.isRemoved = !0),
                      0 === ue.length &&
                        ((Se.allRemoved = !0),
                        (_[ee] = null),
                        "string" == typeof x) &&
                        (_[g + "ON_PROPERTY" + x] = null),
                      Se.zone.cancelTask(Se),
                      Ae ? _ : void 0
                    );
                }
              return Q.apply(this, arguments);
            }),
            (fe[O] = function () {
              const _ = this || s;
              let x = arguments[0];
              H && H.transferEventName && (x = H.transferEventName(x));
              const I = [],
                ne = $e(_, Le ? Le(x) : x);
              for (let se = 0; se < ne.length; se++) {
                const J = ne[se];
                I.push(J.originalDelegate ? J.originalDelegate : J.callback);
              }
              return I;
            }),
            (fe[L] = function () {
              const _ = this || s;
              let x = arguments[0];
              if (x) {
                H && H.transferEventName && (x = H.transferEventName(x));
                const I = z[x];
                if (I) {
                  const J = _[I[p]],
                    ee = _[I[T]];
                  if (J) {
                    const ue = J.slice();
                    for (let Te = 0; Te < ue.length; Te++) {
                      const Se = ue[Te];
                      this[R].call(
                        this,
                        x,
                        Se.originalDelegate ? Se.originalDelegate : Se.callback,
                        Se.options
                      );
                    }
                  }
                  if (ee) {
                    const ue = ee.slice();
                    for (let Te = 0; Te < ue.length; Te++) {
                      const Se = ue[Te];
                      this[R].call(
                        this,
                        x,
                        Se.originalDelegate ? Se.originalDelegate : Se.callback,
                        Se.options
                      );
                    }
                  }
                }
              } else {
                const I = Object.keys(_);
                for (let ne = 0; ne < I.length; ne++) {
                  const J = Me.exec(I[ne]);
                  let ee = J && J[1];
                  ee && "removeListener" !== ee && this[L].call(this, ee);
                }
                this[L].call(this, "removeListener");
              }
              if (Ae) return this;
            }),
            Ce(fe[h], Ie),
            Ce(fe[R], Q),
            oe && Ce(fe[L], oe),
            ge && Ce(fe[O], ge),
            !0
          );
        }
        let ke = [];
        for (let U = 0; U < l.length; U++) ke[U] = Ne(l[U], y);
        return ke;
      }
      function $e(s, l) {
        if (!l) {
          const O = [];
          for (let L in s) {
            const W = Me.exec(L);
            let Y = W && W[1];
            if (Y && (!l || Y === l)) {
              const G = s[L];
              if (G) for (let B = 0; B < G.length; B++) O.push(G[B]);
            }
          }
          return O;
        }
        let y = z[l];
        y || (Ge(l), (y = z[l]));
        const h = s[y[p]],
          R = s[y[T]];
        return h ? (R ? h.concat(R) : h.slice()) : R ? R.slice() : [];
      }
      function st(s, l) {
        const y = s.Event;
        y &&
          y.prototype &&
          l.patchMethod(
            y.prototype,
            "stopImmediatePropagation",
            (h) =>
              function (R, O) {
                (R[Be] = !0), h && h.apply(R, O);
              }
          );
      }
      function ct(s, l, y, h, R) {
        const O = Zone.__symbol__(h);
        if (l[O]) return;
        const L = (l[O] = l[h]);
        (l[h] = function (W, Y, G) {
          return (
            Y &&
              Y.prototype &&
              R.forEach(function (B) {
                const le = `${y}.${h}::` + B,
                  ce = Y.prototype;
                if (ce.hasOwnProperty(B)) {
                  const de = s.ObjectGetOwnPropertyDescriptor(ce, B);
                  de && de.value
                    ? ((de.value = s.wrapWithCurrentZone(de.value, le)),
                      s._redefineProperty(Y.prototype, B, de))
                    : ce[B] && (ce[B] = s.wrapWithCurrentZone(ce[B], le));
                } else ce[B] && (ce[B] = s.wrapWithCurrentZone(ce[B], le));
              }),
            L.call(l, W, Y, G)
          );
        }),
          s.attachOriginToPatched(l[h], L);
      }
      const ft = [
          "absolutedeviceorientation",
          "afterinput",
          "afterprint",
          "appinstalled",
          "beforeinstallprompt",
          "beforeprint",
          "beforeunload",
          "devicelight",
          "devicemotion",
          "deviceorientation",
          "deviceorientationabsolute",
          "deviceproximity",
          "hashchange",
          "languagechange",
          "message",
          "mozbeforepaint",
          "offline",
          "online",
          "paint",
          "pageshow",
          "pagehide",
          "popstate",
          "rejectionhandled",
          "storage",
          "unhandledrejection",
          "unload",
          "userproximity",
          "vrdisplayconnected",
          "vrdisplaydisconnected",
          "vrdisplaypresentchange",
        ],
        Pt = [
          "encrypted",
          "waitingforkey",
          "msneedkey",
          "mozinterruptbegin",
          "mozinterruptend",
        ],
        pt = ["load"],
        mt = [
          "blur",
          "error",
          "focus",
          "load",
          "resize",
          "scroll",
          "messageerror",
        ],
        St = ["bounce", "finish", "start"],
        gt = [
          "loadstart",
          "progress",
          "abort",
          "error",
          "load",
          "progress",
          "timeout",
          "loadend",
          "readystatechange",
        ],
        tt = [
          "upgradeneeded",
          "complete",
          "abort",
          "success",
          "error",
          "blocked",
          "versionchange",
          "close",
        ],
        Dt = ["close", "error", "open", "message"],
        Ct = ["error", "message"],
        nt = [
          "abort",
          "animationcancel",
          "animationend",
          "animationiteration",
          "auxclick",
          "beforeinput",
          "blur",
          "cancel",
          "canplay",
          "canplaythrough",
          "change",
          "compositionstart",
          "compositionupdate",
          "compositionend",
          "cuechange",
          "click",
          "close",
          "contextmenu",
          "curechange",
          "dblclick",
          "drag",
          "dragend",
          "dragenter",
          "dragexit",
          "dragleave",
          "dragover",
          "drop",
          "durationchange",
          "emptied",
          "ended",
          "error",
          "focus",
          "focusin",
          "focusout",
          "gotpointercapture",
          "input",
          "invalid",
          "keydown",
          "keypress",
          "keyup",
          "load",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "lostpointercapture",
          "mousedown",
          "mouseenter",
          "mouseleave",
          "mousemove",
          "mouseout",
          "mouseover",
          "mouseup",
          "mousewheel",
          "orientationchange",
          "pause",
          "play",
          "playing",
          "pointercancel",
          "pointerdown",
          "pointerenter",
          "pointerleave",
          "pointerlockchange",
          "mozpointerlockchange",
          "webkitpointerlockerchange",
          "pointerlockerror",
          "mozpointerlockerror",
          "webkitpointerlockerror",
          "pointermove",
          "pointout",
          "pointerover",
          "pointerup",
          "progress",
          "ratechange",
          "reset",
          "resize",
          "scroll",
          "seeked",
          "seeking",
          "select",
          "selectionchange",
          "selectstart",
          "show",
          "sort",
          "stalled",
          "submit",
          "suspend",
          "timeupdate",
          "volumechange",
          "touchcancel",
          "touchmove",
          "touchstart",
          "touchend",
          "transitioncancel",
          "transitionend",
          "waiting",
          "wheel",
        ].concat(
          [
            "webglcontextrestored",
            "webglcontextlost",
            "webglcontextcreationerror",
          ],
          ["autocomplete", "autocompleteerror"],
          ["toggle"],
          [
            "afterscriptexecute",
            "beforescriptexecute",
            "DOMContentLoaded",
            "freeze",
            "fullscreenchange",
            "mozfullscreenchange",
            "webkitfullscreenchange",
            "msfullscreenchange",
            "fullscreenerror",
            "mozfullscreenerror",
            "webkitfullscreenerror",
            "msfullscreenerror",
            "readystatechange",
            "visibilitychange",
            "resume",
          ],
          ft,
          [
            "beforecopy",
            "beforecut",
            "beforepaste",
            "copy",
            "cut",
            "paste",
            "dragstart",
            "loadend",
            "animationstart",
            "search",
            "transitionrun",
            "transitionstart",
            "webkitanimationend",
            "webkitanimationiteration",
            "webkitanimationstart",
            "webkittransitionend",
          ],
          [
            "activate",
            "afterupdate",
            "ariarequest",
            "beforeactivate",
            "beforedeactivate",
            "beforeeditfocus",
            "beforeupdate",
            "cellchange",
            "controlselect",
            "dataavailable",
            "datasetchanged",
            "datasetcomplete",
            "errorupdate",
            "filterchange",
            "layoutcomplete",
            "losecapture",
            "move",
            "moveend",
            "movestart",
            "propertychange",
            "resizeend",
            "resizestart",
            "rowenter",
            "rowexit",
            "rowsdelete",
            "rowsinserted",
            "command",
            "compassneedscalibration",
            "deactivate",
            "help",
            "mscontentzoom",
            "msmanipulationstatechanged",
            "msgesturechange",
            "msgesturedoubletap",
            "msgestureend",
            "msgesturehold",
            "msgesturestart",
            "msgesturetap",
            "msgotpointercapture",
            "msinertiastart",
            "mslostpointercapture",
            "mspointercancel",
            "mspointerdown",
            "mspointerenter",
            "mspointerhover",
            "mspointerleave",
            "mspointermove",
            "mspointerout",
            "mspointerover",
            "mspointerup",
            "pointerout",
            "mssitemodejumplistitemremoved",
            "msthumbnailclick",
            "stop",
            "storagecommit",
          ]
        );
      function _t(s, l, y) {
        if (!y || 0 === y.length) return l;
        const h = y.filter((O) => O.target === s);
        if (!h || 0 === h.length) return l;
        const R = h[0].ignoreProperties;
        return l.filter((O) => -1 === R.indexOf(O));
      }
      function Oe(s, l, y, h) {
        s && he(s, _t(s, l, y), h);
      }
      Zone.__load_patch("util", (s, l, y) => {
        (y.patchOnProperties = he),
          (y.patchMethod = Pe),
          (y.bindArguments = E),
          (y.patchMacroTask = He);
        const h = l.__symbol__("BLACK_LISTED_EVENTS"),
          R = l.__symbol__("UNPATCHED_EVENTS");
        s[R] && (s[h] = s[R]),
          s[h] && (l[h] = l[R] = s[h]),
          (y.patchEventPrototype = st),
          (y.patchEventTarget = Qe),
          (y.isIEOrEdge = V),
          (y.ObjectDefineProperty = ie),
          (y.ObjectGetOwnPropertyDescriptor = _e),
          (y.ObjectCreate = r),
          (y.ArraySlice = M),
          (y.patchClass = ae),
          (y.wrapWithCurrentZone = e),
          (y.filterProperties = _t),
          (y.attachOriginToPatched = Ce),
          (y._redefineProperty = Object.defineProperty),
          (y.patchCallbacks = ct),
          (y.getGlobalObjects = () => ({
            globalSources: Re,
            zoneSymbolEventNames: z,
            eventNames: nt,
            isBrowser: q,
            isMix: K,
            isNode: D,
            TRUE_STR: T,
            FALSE_STR: p,
            ZONE_SYMBOL_PREFIX: g,
            ADD_EVENT_LISTENER_STR: S,
            REMOVE_EVENT_LISTENER_STR: N,
          }));
      });
      const at = i("zoneTask");
      function rt(s, l, y, h) {
        let R = null,
          O = null;
        y += h;
        const L = {};
        function W(G) {
          const B = G.data;
          return (
            (B.args[0] = function () {
              return G.invoke.apply(this, arguments);
            }),
            (B.handleId = R.apply(s, B.args)),
            G
          );
        }
        function Y(G) {
          return O.call(s, G.data.handleId);
        }
        (R = Pe(
          s,
          (l += h),
          (G) =>
            function (B, le) {
              if ("function" == typeof le[0]) {
                const ce = {
                    isPeriodic: "Interval" === h,
                    delay:
                      "Timeout" === h || "Interval" === h ? le[1] || 0 : void 0,
                    args: le,
                  },
                  de = le[0];
                le[0] = function () {
                  try {
                    return de.apply(this, arguments);
                  } finally {
                    ce.isPeriodic ||
                      ("number" == typeof ce.handleId
                        ? delete L[ce.handleId]
                        : ce.handleId && (ce.handleId[at] = null));
                  }
                };
                const Ne = n(l, le[0], ce, W, Y);
                if (!Ne) return Ne;
                const ke = Ne.data.handleId;
                return (
                  "number" == typeof ke ? (L[ke] = Ne) : ke && (ke[at] = Ne),
                  ke &&
                    ke.ref &&
                    ke.unref &&
                    "function" == typeof ke.ref &&
                    "function" == typeof ke.unref &&
                    ((Ne.ref = ke.ref.bind(ke)),
                    (Ne.unref = ke.unref.bind(ke))),
                  "number" == typeof ke || ke ? ke : Ne
                );
              }
              return G.apply(s, le);
            }
        )),
          (O = Pe(
            s,
            y,
            (G) =>
              function (B, le) {
                const ce = le[0];
                let de;
                "number" == typeof ce
                  ? (de = L[ce])
                  : ((de = ce && ce[at]), de || (de = ce)),
                  de && "string" == typeof de.type
                    ? "notScheduled" !== de.state &&
                      ((de.cancelFn && de.data.isPeriodic) ||
                        0 === de.runCount) &&
                      ("number" == typeof ce
                        ? delete L[ce]
                        : ce && (ce[at] = null),
                      de.zone.cancelTask(de))
                    : G.apply(s, le);
              }
          ));
      }
      Zone.__load_patch("legacy", (s) => {
        const l = s[Zone.__symbol__("legacyPatch")];
        l && l();
      }),
        Zone.__load_patch("queueMicrotask", (s, l, y) => {
          y.patchMethod(
            s,
            "queueMicrotask",
            (h) =>
              function (R, O) {
                l.current.scheduleMicroTask("queueMicrotask", O[0]);
              }
          );
        }),
        Zone.__load_patch("timers", (s) => {
          const l = "set",
            y = "clear";
          rt(s, l, y, "Timeout"),
            rt(s, l, y, "Interval"),
            rt(s, l, y, "Immediate");
        }),
        Zone.__load_patch("requestAnimationFrame", (s) => {
          rt(s, "request", "cancel", "AnimationFrame"),
            rt(s, "mozRequest", "mozCancel", "AnimationFrame"),
            rt(s, "webkitRequest", "webkitCancel", "AnimationFrame");
        }),
        Zone.__load_patch("blocking", (s, l) => {
          const y = ["alert", "prompt", "confirm"];
          for (let h = 0; h < y.length; h++)
            Pe(
              s,
              y[h],
              (O, L, W) =>
                function (Y, G) {
                  return l.current.run(O, s, G, W);
                }
            );
        }),
        Zone.__load_patch("EventTarget", (s, l, y) => {
          (function (s, l) {
            l.patchEventPrototype(s, l);
          })(s, y),
            (function (s, l) {
              if (Zone[l.symbol("patchEventTarget")]) return;
              const {
                eventNames: y,
                zoneSymbolEventNames: h,
                TRUE_STR: R,
                FALSE_STR: O,
                ZONE_SYMBOL_PREFIX: L,
              } = l.getGlobalObjects();
              for (let Y = 0; Y < y.length; Y++) {
                const G = y[Y],
                  ce = L + (G + O),
                  de = L + (G + R);
                (h[G] = {}), (h[G][O] = ce), (h[G][R] = de);
              }
              const W = s.EventTarget;
              W && W.prototype && l.patchEventTarget(s, [W && W.prototype]);
            })(s, y);
          const h = s.XMLHttpRequestEventTarget;
          h && h.prototype && y.patchEventTarget(s, [h.prototype]);
        }),
        Zone.__load_patch("MutationObserver", (s, l, y) => {
          ae("MutationObserver"), ae("WebKitMutationObserver");
        }),
        Zone.__load_patch("IntersectionObserver", (s, l, y) => {
          ae("IntersectionObserver");
        }),
        Zone.__load_patch("FileReader", (s, l, y) => {
          ae("FileReader");
        }),
        Zone.__load_patch("on_property", (s, l, y) => {
          !(function (s, l) {
            if ((D && !K) || Zone[s.symbol("patchEvents")]) return;
            const y = "undefined" != typeof WebSocket,
              h = l.__Zone_ignore_on_properties;
            if (q) {
              const L = window,
                W = (function () {
                  try {
                    const s = o.navigator.userAgent;
                    if (
                      -1 !== s.indexOf("MSIE ") ||
                      -1 !== s.indexOf("Trident/")
                    )
                      return !0;
                  } catch (s) {}
                  return !1;
                })()
                  ? [{ target: L, ignoreProperties: ["error"] }]
                  : [];
              Oe(L, nt.concat(["messageerror"]), h && h.concat(W), De(L)),
                Oe(Document.prototype, nt, h),
                void 0 !== L.SVGElement && Oe(L.SVGElement.prototype, nt, h),
                Oe(Element.prototype, nt, h),
                Oe(HTMLElement.prototype, nt, h),
                Oe(HTMLMediaElement.prototype, Pt, h),
                Oe(HTMLFrameSetElement.prototype, ft.concat(mt), h),
                Oe(HTMLBodyElement.prototype, ft.concat(mt), h),
                Oe(HTMLFrameElement.prototype, pt, h),
                Oe(HTMLIFrameElement.prototype, pt, h);
              const Y = L.HTMLMarqueeElement;
              Y && Oe(Y.prototype, St, h);
              const G = L.Worker;
              G && Oe(G.prototype, Ct, h);
            }
            const R = l.XMLHttpRequest;
            R && Oe(R.prototype, gt, h);
            const O = l.XMLHttpRequestEventTarget;
            O && Oe(O && O.prototype, gt, h),
              "undefined" != typeof IDBIndex &&
                (Oe(IDBIndex.prototype, tt, h),
                Oe(IDBRequest.prototype, tt, h),
                Oe(IDBOpenDBRequest.prototype, tt, h),
                Oe(IDBDatabase.prototype, tt, h),
                Oe(IDBTransaction.prototype, tt, h),
                Oe(IDBCursor.prototype, tt, h)),
              y && Oe(WebSocket.prototype, Dt, h);
          })(y, s);
        }),
        Zone.__load_patch("customElements", (s, l, y) => {
          !(function (s, l) {
            const { isBrowser: y, isMix: h } = l.getGlobalObjects();
            (y || h) &&
              s.customElements &&
              "customElements" in s &&
              l.patchCallbacks(
                l,
                s.customElements,
                "customElements",
                "define",
                [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback",
                ]
              );
          })(s, y);
        }),
        Zone.__load_patch("XHR", (s, l) => {
          !(function (G) {
            const B = G.XMLHttpRequest;
            if (!B) return;
            const le = B.prototype;
            let de = le[f],
              Ne = le[m];
            if (!de) {
              const Q = G.XMLHttpRequestEventTarget;
              if (Q) {
                const ge = Q.prototype;
                (de = ge[f]), (Ne = ge[m]);
              }
            }
            const ke = "readystatechange",
              U = "scheduled";
            function H(Q) {
              const ge = Q.data,
                oe = ge.target;
              (oe[O] = !1), (oe[W] = !1);
              const Fe = oe[R];
              de || ((de = oe[f]), (Ne = oe[m])), Fe && Ne.call(oe, ke, Fe);
              const Ye = (oe[R] = () => {
                if (oe.readyState === oe.DONE)
                  if (!ge.aborted && oe[O] && Q.state === U) {
                    const Ue = oe[l.__symbol__("loadfalse")];
                    if (0 !== oe.status && Ue && Ue.length > 0) {
                      const Ve = Q.invoke;
                      (Q.invoke = function () {
                        const xe = oe[l.__symbol__("loadfalse")];
                        for (let pe = 0; pe < xe.length; pe++)
                          xe[pe] === Q && xe.splice(pe, 1);
                        !ge.aborted && Q.state === U && Ve.call(Q);
                      }),
                        Ue.push(Q);
                    } else Q.invoke();
                  } else !ge.aborted && !1 === oe[O] && (oe[W] = !0);
              });
              return (
                de.call(oe, ke, Ye),
                oe[y] || (oe[y] = Q),
                ve.apply(oe, ge.args),
                (oe[O] = !0),
                Q
              );
            }
            function me() {}
            function be(Q) {
              const ge = Q.data;
              return (ge.aborted = !0), Ie.apply(ge.target, ge.args);
            }
            const ye = Pe(
                le,
                "open",
                () =>
                  function (Q, ge) {
                    return (Q[h] = 0 == ge[2]), (Q[L] = ge[1]), ye.apply(Q, ge);
                  }
              ),
              fe = i("fetchTaskAborting"),
              Le = i("fetchTaskScheduling"),
              ve = Pe(
                le,
                "send",
                () =>
                  function (Q, ge) {
                    if (!0 === l.current[Le] || Q[h]) return ve.apply(Q, ge);
                    {
                      const oe = {
                          target: Q,
                          url: Q[L],
                          isPeriodic: !1,
                          args: ge,
                          aborted: !1,
                        },
                        Fe = n("XMLHttpRequest.send", me, oe, H, be);
                      Q &&
                        !0 === Q[W] &&
                        !oe.aborted &&
                        Fe.state === U &&
                        Fe.invoke();
                    }
                  }
              ),
              Ie = Pe(
                le,
                "abort",
                () =>
                  function (Q, ge) {
                    const oe = (function (Q) {
                      return Q[y];
                    })(Q);
                    if (oe && "string" == typeof oe.type) {
                      if (null == oe.cancelFn || (oe.data && oe.data.aborted))
                        return;
                      oe.zone.cancelTask(oe);
                    } else if (!0 === l.current[fe]) return Ie.apply(Q, ge);
                  }
              );
          })(s);
          const y = i("xhrTask"),
            h = i("xhrSync"),
            R = i("xhrListener"),
            O = i("xhrScheduled"),
            L = i("xhrURL"),
            W = i("xhrErrorBeforeScheduled");
        }),
        Zone.__load_patch("geolocation", (s) => {
          s.navigator &&
            s.navigator.geolocation &&
            (function (s, l) {
              const y = s.constructor.name;
              for (let h = 0; h < l.length; h++) {
                const R = l[h],
                  O = s[R];
                if (O) {
                  if (!k(_e(s, R))) continue;
                  s[R] = ((W) => {
                    const Y = function () {
                      return W.apply(this, E(arguments, y + "." + R));
                    };
                    return Ce(Y, W), Y;
                  })(O);
                }
              }
            })(s.navigator.geolocation, [
              "getCurrentPosition",
              "watchPosition",
            ]);
        }),
        Zone.__load_patch("PromiseRejectionEvent", (s, l) => {
          function y(h) {
            return function (R) {
              $e(s, h).forEach((L) => {
                const W = s.PromiseRejectionEvent;
                if (W) {
                  const Y = new W(h, {
                    promise: R.promise,
                    reason: R.rejection,
                  });
                  L.invoke(Y);
                }
              });
            };
          }
          s.PromiseRejectionEvent &&
            ((l[i("unhandledPromiseRejectionHandler")] =
              y("unhandledrejection")),
            (l[i("rejectionHandledHandler")] = y("rejectionhandled")));
        });
    },
    7435: (je, _e, ie) => {
      "use strict";
      ie(6799), ie(7277);
    },
    6799: () => {
      var ie, De, je, _e;
      (_e = {}),
        (function (ie, De) {
          function M() {
            (this._delay = 0),
              (this._endDelay = 0),
              (this._fill = "none"),
              (this._iterationStart = 0),
              (this._iterations = 1),
              (this._duration = 0),
              (this._playbackRate = 1),
              (this._direction = "normal"),
              (this._easing = "linear"),
              (this._easingFunction = D);
          }
          function S() {
            return ie.isDeprecated(
              "Invalid timing inputs",
              "2016-03-02",
              "TypeError exceptions will be thrown instead.",
              !0
            );
          }
          function N(w, V, F) {
            var te = new M();
            return (
              V && ((te.fill = "both"), (te.duration = "auto")),
              "number" != typeof w || isNaN(w)
                ? void 0 !== w &&
                  Object.getOwnPropertyNames(w).forEach(function (z) {
                    if ("auto" != w[z]) {
                      if (
                        (("number" == typeof te[z] || "duration" == z) &&
                          ("number" != typeof w[z] || isNaN(w[z]))) ||
                        ("fill" == z && -1 == k.indexOf(w[z])) ||
                        ("direction" == z && -1 == A.indexOf(w[z])) ||
                        ("playbackRate" == z &&
                          1 !== w[z] &&
                          ie.isDeprecated(
                            "AnimationEffectTiming.playbackRate",
                            "2014-11-28",
                            "Use Animation.playbackRate instead."
                          ))
                      )
                        return;
                      te[z] = w[z];
                    }
                  })
                : (te.duration = w),
              te
            );
          }
          function T(w, V, F, te) {
            return w < 0 || w > 1 || F < 0 || F > 1
              ? D
              : function (z) {
                  function Re(ct, lt, qe) {
                    return (
                      3 * ct * (1 - qe) * (1 - qe) * qe +
                      3 * lt * (1 - qe) * qe * qe +
                      qe * qe * qe
                    );
                  }
                  if (z <= 0) {
                    var Me = 0;
                    return (
                      w > 0 ? (Me = V / w) : !V && F > 0 && (Me = te / F),
                      Me * z
                    );
                  }
                  if (z >= 1) {
                    var Be = 0;
                    return (
                      F < 1
                        ? (Be = (te - 1) / (F - 1))
                        : 1 == F && w < 1 && (Be = (V - 1) / (w - 1)),
                      1 + Be * (z - 1)
                    );
                  }
                  for (var Ge = 0, Qe = 1; Ge < Qe; ) {
                    var $e = (Ge + Qe) / 2,
                      st = Re(w, F, $e);
                    if (Math.abs(z - st) < 1e-5) return Re(V, te, $e);
                    st < z ? (Ge = $e) : (Qe = $e);
                  }
                  return Re(V, te, $e);
                };
          }
          function p(w, V) {
            return function (F) {
              if (F >= 1) return 1;
              var te = 1 / w;
              return (F += V * te) - (F % te);
            };
          }
          function g(w) {
            $ || ($ = document.createElement("div").style),
              ($.animationTimingFunction = ""),
              ($.animationTimingFunction = w);
            var V = $.animationTimingFunction;
            if ("" == V && S())
              throw new TypeError(w + " is not a valid value for easing");
            return V;
          }
          function e(w) {
            if ("linear" == w) return D;
            var V = Ee.exec(w);
            if (V) return T.apply(this, V.slice(1).map(Number));
            var F = ae.exec(w);
            if (F) return p(Number(F[1]), Z);
            var te = Pe.exec(w);
            return te
              ? p(Number(te[1]), { start: q, middle: K, end: Z }[te[2]])
              : P[w] || D;
          }
          function t(w, V, F) {
            if (null == V) return He;
            var te = F.delay + w + F.endDelay;
            return V < Math.min(F.delay, te)
              ? Ce
              : V >= Math.min(F.delay + w, te)
              ? We
              : Ke;
          }
          var k = "backwards|forwards|both|none".split("|"),
            A = "reverse|alternate|alternate-reverse".split("|"),
            D = function (w) {
              return w;
            };
          M.prototype = {
            _setMember: function (w, V) {
              (this["_" + w] = V),
                this._effect &&
                  ((this._effect._timingInput[w] = V),
                  (this._effect._timing = ie.normalizeTimingInput(
                    this._effect._timingInput
                  )),
                  (this._effect.activeDuration = ie.calculateActiveDuration(
                    this._effect._timing
                  )),
                  this._effect._animation &&
                    this._effect._animation._rebuildUnderlyingAnimation());
            },
            get playbackRate() {
              return this._playbackRate;
            },
            set delay(w) {
              this._setMember("delay", w);
            },
            get delay() {
              return this._delay;
            },
            set endDelay(w) {
              this._setMember("endDelay", w);
            },
            get endDelay() {
              return this._endDelay;
            },
            set fill(w) {
              this._setMember("fill", w);
            },
            get fill() {
              return this._fill;
            },
            set iterationStart(w) {
              if ((isNaN(w) || w < 0) && S())
                throw new TypeError(
                  "iterationStart must be a non-negative number, received: " + w
                );
              this._setMember("iterationStart", w);
            },
            get iterationStart() {
              return this._iterationStart;
            },
            set duration(w) {
              if ("auto" != w && (isNaN(w) || w < 0) && S())
                throw new TypeError(
                  "duration must be non-negative or auto, received: " + w
                );
              this._setMember("duration", w);
            },
            get duration() {
              return this._duration;
            },
            set direction(w) {
              this._setMember("direction", w);
            },
            get direction() {
              return this._direction;
            },
            set easing(w) {
              (this._easingFunction = e(g(w))), this._setMember("easing", w);
            },
            get easing() {
              return this._easing;
            },
            set iterations(w) {
              if ((isNaN(w) || w < 0) && S())
                throw new TypeError(
                  "iterations must be non-negative, received: " + w
                );
              this._setMember("iterations", w);
            },
            get iterations() {
              return this._iterations;
            },
          };
          var q = 1,
            K = 0.5,
            Z = 0,
            P = {
              ease: T(0.25, 0.1, 0.25, 1),
              "ease-in": T(0.42, 0, 1, 1),
              "ease-out": T(0, 0, 0.58, 1),
              "ease-in-out": T(0.42, 0, 0.58, 1),
              "step-start": p(1, q),
              "step-middle": p(1, K),
              "step-end": p(1, Z),
            },
            $ = null,
            he = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
            Ee = new RegExp(
              "cubic-bezier\\(" + he + "," + he + "," + he + "," + he + "\\)"
            ),
            ae = /steps\(\s*(\d+)\s*\)/,
            Pe = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
            He = 0,
            Ce = 1,
            We = 2,
            Ke = 3;
          (ie.cloneTimingInput = function (w) {
            if ("number" == typeof w) return w;
            var V = {};
            for (var F in w) V[F] = w[F];
            return V;
          }),
            (ie.makeTiming = N),
            (ie.numericTimingToObject = function (w) {
              return (
                "number" == typeof w &&
                  (w = isNaN(w) ? { duration: 0 } : { duration: w }),
                w
              );
            }),
            (ie.normalizeTimingInput = function (w, V) {
              return N((w = ie.numericTimingToObject(w)), V);
            }),
            (ie.calculateActiveDuration = function (w) {
              return Math.abs(
                (function (w) {
                  return 0 === w.duration || 0 === w.iterations
                    ? 0
                    : w.duration * w.iterations;
                })(w) / w.playbackRate
              );
            }),
            (ie.calculateIterationProgress = function (w, V, F) {
              var te = t(w, V, F),
                z = (function (w, V, F, te, z) {
                  switch (te) {
                    case Ce:
                      return "backwards" == V || "both" == V ? 0 : null;
                    case Ke:
                      return F - z;
                    case We:
                      return "forwards" == V || "both" == V ? w : null;
                    case He:
                      return null;
                  }
                })(w, F.fill, V, te, F.delay);
              if (null === z) return null;
              var Re = (function (w, V, F, te, z) {
                  var Re = z;
                  return 0 === w ? V !== Ce && (Re += F) : (Re += te / w), Re;
                })(F.duration, te, F.iterations, z, F.iterationStart),
                Me = (function (w, V, F, te, z, Re) {
                  var Me = w === 1 / 0 ? V % 1 : w % 1;
                  return (
                    0 !== Me ||
                      F !== We ||
                      0 === te ||
                      (0 === z && 0 !== Re) ||
                      (Me = 1),
                    Me
                  );
                })(Re, F.iterationStart, te, F.iterations, z, F.duration),
                Be = (function (w, V, F, te) {
                  return w === We && V === 1 / 0
                    ? 1 / 0
                    : 1 === F
                    ? Math.floor(te) - 1
                    : Math.floor(te);
                })(te, F.iterations, Me, Re),
                Ge = (function (w, V, F) {
                  var te = w;
                  if ("normal" !== w && "reverse" !== w) {
                    var z = V;
                    "alternate-reverse" === w && (z += 1),
                      (te = "normal"),
                      z !== 1 / 0 && z % 2 != 0 && (te = "reverse");
                  }
                  return "normal" === te ? F : 1 - F;
                })(F.direction, Be, Me);
              return F._easingFunction(Ge);
            }),
            (ie.calculatePhase = t),
            (ie.normalizeEasing = g),
            (ie.parseEasingFunction = e);
        })((je = {})),
        (function (ie, De) {
          function r(e, n) {
            return (e in g && g[e][n]) || n;
          }
          function S(e, n, i) {
            if (
              !(function (e) {
                return (
                  "display" === e ||
                  0 === e.lastIndexOf("animation", 0) ||
                  0 === e.lastIndexOf("transition", 0)
                );
              })(e)
            ) {
              var t = m[e];
              if (t)
                for (var o in ((T.style[e] = n), t)) {
                  var u = t[o];
                  i[u] = r(u, T.style[u]);
                }
              else i[e] = r(e, n);
            }
          }
          function N(e) {
            var n = [];
            for (var i in e)
              if (!(i in ["easing", "offset", "composite"])) {
                var t = e[i];
                Array.isArray(t) || (t = [t]);
                for (var o, u = t.length, v = 0; v < u; v++)
                  ((o = {}).offset =
                    "offset" in e ? e.offset : 1 == u ? 1 : v / (u - 1)),
                    "easing" in e && (o.easing = e.easing),
                    "composite" in e && (o.composite = e.composite),
                    (o[i] = t[v]),
                    n.push(o);
              }
            return (
              n.sort(function (b, E) {
                return b.offset - E.offset;
              }),
              n
            );
          }
          var m = {
              background: [
                "backgroundImage",
                "backgroundPosition",
                "backgroundSize",
                "backgroundRepeat",
                "backgroundAttachment",
                "backgroundOrigin",
                "backgroundClip",
                "backgroundColor",
              ],
              border: [
                "borderTopColor",
                "borderTopStyle",
                "borderTopWidth",
                "borderRightColor",
                "borderRightStyle",
                "borderRightWidth",
                "borderBottomColor",
                "borderBottomStyle",
                "borderBottomWidth",
                "borderLeftColor",
                "borderLeftStyle",
                "borderLeftWidth",
              ],
              borderBottom: [
                "borderBottomWidth",
                "borderBottomStyle",
                "borderBottomColor",
              ],
              borderColor: [
                "borderTopColor",
                "borderRightColor",
                "borderBottomColor",
                "borderLeftColor",
              ],
              borderLeft: [
                "borderLeftWidth",
                "borderLeftStyle",
                "borderLeftColor",
              ],
              borderRadius: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomRightRadius",
                "borderBottomLeftRadius",
              ],
              borderRight: [
                "borderRightWidth",
                "borderRightStyle",
                "borderRightColor",
              ],
              borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
              borderWidth: [
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth",
              ],
              flex: ["flexGrow", "flexShrink", "flexBasis"],
              font: [
                "fontFamily",
                "fontSize",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "lineHeight",
              ],
              margin: [
                "marginTop",
                "marginRight",
                "marginBottom",
                "marginLeft",
              ],
              outline: ["outlineColor", "outlineStyle", "outlineWidth"],
              padding: [
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
              ],
            },
            T = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            p = { thin: "1px", medium: "3px", thick: "5px" },
            g = {
              borderBottomWidth: p,
              borderLeftWidth: p,
              borderRightWidth: p,
              borderTopWidth: p,
              fontSize: {
                "xx-small": "60%",
                "x-small": "75%",
                small: "89%",
                medium: "100%",
                large: "120%",
                "x-large": "150%",
                "xx-large": "200%",
              },
              fontWeight: { normal: "400", bold: "700" },
              outlineWidth: p,
              textShadow: { none: "0px 0px 0px transparent" },
              boxShadow: { none: "0px 0px 0px 0px transparent" },
            };
          (ie.convertToArrayForm = N),
            (ie.normalizeKeyframes = function (e) {
              if (null == e) return [];
              window.Symbol &&
                Symbol.iterator &&
                Array.prototype.from &&
                e[Symbol.iterator] &&
                (e = Array.from(e)),
                Array.isArray(e) || (e = N(e));
              for (
                var i = e.map(function (b) {
                    var E = {};
                    for (var c in b) {
                      var k = b[c];
                      if ("offset" == c) {
                        if (null != k) {
                          if (((k = Number(k)), !isFinite(k)))
                            throw new TypeError(
                              "Keyframe offsets must be numbers."
                            );
                          if (k < 0 || k > 1)
                            throw new TypeError(
                              "Keyframe offsets must be between 0 and 1."
                            );
                        }
                      } else if ("composite" == c) {
                        if ("add" == k || "accumulate" == k)
                          throw {
                            type: DOMException.NOT_SUPPORTED_ERR,
                            name: "NotSupportedError",
                            message: "add compositing is not supported",
                          };
                        if ("replace" != k)
                          throw new TypeError(
                            "Invalid composite mode " + k + "."
                          );
                      } else k = "easing" == c ? ie.normalizeEasing(k) : "" + k;
                      S(c, k, E);
                    }
                    return (
                      null == E.offset && (E.offset = null),
                      null == E.easing && (E.easing = "linear"),
                      E
                    );
                  }),
                  t = !0,
                  o = -1 / 0,
                  u = 0;
                u < i.length;
                u++
              ) {
                var v = i[u].offset;
                if (null != v) {
                  if (v < o)
                    throw new TypeError(
                      "Keyframes are not loosely sorted by offset. Sort or specify offsets."
                    );
                  o = v;
                } else t = !1;
              }
              return (
                (i = i.filter(function (b) {
                  return b.offset >= 0 && b.offset <= 1;
                })),
                t ||
                  (function () {
                    var b = i.length;
                    null == i[b - 1].offset && (i[b - 1].offset = 1),
                      b > 1 && null == i[0].offset && (i[0].offset = 0);
                    for (var E = 0, c = i[0].offset, k = 1; k < b; k++) {
                      var A = i[k].offset;
                      if (null != A) {
                        for (var D = 1; D < k - E; D++)
                          i[E + D].offset = c + ((A - c) * D) / (k - E);
                        (E = k), (c = A);
                      }
                    }
                  })(),
                i
              );
            });
        })(je),
        (De = {}),
        ((ie = je).isDeprecated = function (r, M, S, N) {
          var f = N ? "are" : "is",
            m = new Date(),
            T = new Date(M);
          return (
            T.setMonth(T.getMonth() + 3),
            !(
              m < T &&
              (r in De ||
                console.warn(
                  "Web Animations: " +
                    r +
                    " " +
                    f +
                    " deprecated and will stop working on " +
                    T.toDateString() +
                    ". " +
                    S
                ),
              (De[r] = !0),
              1)
            )
          );
        }),
        (ie.deprecated = function (r, M, S, N) {
          var f = N ? "are" : "is";
          if (ie.isDeprecated(r, M, S, N))
            throw new Error(r + " " + f + " no longer supported. " + S);
        }),
        (function () {
          if (document.documentElement.animate) {
            var ie = document.documentElement.animate([], 0),
              De = !0;
            if (
              (ie &&
                ((De = !1),
                "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState"
                  .split("|")
                  .forEach(function (r) {
                    void 0 === ie[r] && (De = !0);
                  })),
              !De)
            )
              return;
          }
          var r, M;
          (r = je),
            ((M = _e).convertEffectInput = function (m) {
              var p = (function (m) {
                  for (var T = {}, p = 0; p < m.length; p++)
                    for (var g in m[p])
                      if ("offset" != g && "easing" != g && "composite" != g) {
                        var e = {
                          offset: m[p].offset,
                          easing: m[p].easing,
                          value: m[p][g],
                        };
                        (T[g] = T[g] || []), T[g].push(e);
                      }
                  for (var n in T) {
                    var i = T[n];
                    if (0 != i[0].offset || 1 != i[i.length - 1].offset)
                      throw {
                        type: DOMException.NOT_SUPPORTED_ERR,
                        name: "NotSupportedError",
                        message: "Partial keyframes are not supported",
                      };
                  }
                  return T;
                })(r.normalizeKeyframes(m)),
                g = (function (m) {
                  var T = [];
                  for (var p in m)
                    for (var g = m[p], e = 0; e < g.length - 1; e++) {
                      var n = e,
                        i = e + 1,
                        t = g[n].offset,
                        o = g[i].offset,
                        u = t,
                        v = o;
                      0 == e && ((u = -1 / 0), 0 == o && (i = n)),
                        e == g.length - 2 && ((v = 1 / 0), 1 == t && (n = i)),
                        T.push({
                          applyFrom: u,
                          applyTo: v,
                          startOffset: g[n].offset,
                          endOffset: g[i].offset,
                          easingFunction: r.parseEasingFunction(g[n].easing),
                          property: p,
                          interpolation: M.propertyInterpolation(
                            p,
                            g[n].value,
                            g[i].value
                          ),
                        });
                    }
                  return (
                    T.sort(function (b, E) {
                      return b.startOffset - E.startOffset;
                    }),
                    T
                  );
                })(p);
              return function (e, n) {
                if (null != n)
                  g.filter(function (t) {
                    return n >= t.applyFrom && n < t.applyTo;
                  }).forEach(function (t) {
                    var u = t.endOffset - t.startOffset,
                      v =
                        0 == u ? 0 : t.easingFunction((n - t.startOffset) / u);
                    M.apply(e, t.property, t.interpolation(v));
                  });
                else
                  for (var i in p)
                    "offset" != i &&
                      "easing" != i &&
                      "composite" != i &&
                      M.clear(e, i);
              };
            }),
            (function (r, M, S) {
              function N(e) {
                return e.replace(/-(.)/g, function (n, i) {
                  return i.toUpperCase();
                });
              }
              function f(e, n, i) {
                (p[i] = p[i] || []), p[i].push([e, n]);
              }
              var p = {};
              M.addPropertiesHandler = function (e, n, i) {
                for (var t = 0; t < i.length; t++) f(e, n, N(i[t]));
              };
              var g = {
                backgroundColor: "transparent",
                backgroundPosition: "0% 0%",
                borderBottomColor: "currentColor",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderBottomWidth: "3px",
                borderLeftColor: "currentColor",
                borderLeftWidth: "3px",
                borderRightColor: "currentColor",
                borderRightWidth: "3px",
                borderSpacing: "2px",
                borderTopColor: "currentColor",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderTopWidth: "3px",
                bottom: "auto",
                clip: "rect(0px, 0px, 0px, 0px)",
                color: "black",
                fontSize: "100%",
                fontWeight: "400",
                height: "auto",
                left: "auto",
                letterSpacing: "normal",
                lineHeight: "120%",
                marginBottom: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                marginTop: "0px",
                maxHeight: "none",
                maxWidth: "none",
                minHeight: "0px",
                minWidth: "0px",
                opacity: "1.0",
                outlineColor: "invert",
                outlineOffset: "0px",
                outlineWidth: "3px",
                paddingBottom: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "0px",
                right: "auto",
                strokeDasharray: "none",
                strokeDashoffset: "0px",
                textIndent: "0px",
                textShadow: "0px 0px 0px transparent",
                top: "auto",
                transform: "",
                verticalAlign: "0px",
                visibility: "visible",
                width: "auto",
                wordSpacing: "normal",
                zIndex: "auto",
              };
              M.propertyInterpolation = function (e, n, i) {
                var t = e;
                /-/.test(e) &&
                  !r.isDeprecated(
                    "Hyphenated property names",
                    "2016-03-22",
                    "Use camelCase instead.",
                    !0
                  ) &&
                  (t = N(e)),
                  ("initial" != n && "initial" != i) ||
                    ("initial" == n && (n = g[t]),
                    "initial" == i && (i = g[t]));
                for (
                  var o = n == i ? [] : p[t], u = 0;
                  o && u < o.length;
                  u++
                ) {
                  var v = o[u][0](n),
                    b = o[u][0](i);
                  if (void 0 !== v && void 0 !== b) {
                    var E = o[u][1](v, b);
                    if (E) {
                      var c = M.Interpolation.apply(null, E);
                      return function (k) {
                        return 0 == k ? n : 1 == k ? i : c(k);
                      };
                    }
                  }
                }
                return M.Interpolation(!1, !0, function (k) {
                  return k ? i : n;
                });
              };
            })(je, _e),
            (function (r, M, S) {
              M.KeyframeEffect = function (f, m, T, p) {
                var g,
                  e = (function (f) {
                    var m = r.calculateActiveDuration(f),
                      T = function (p) {
                        return r.calculateIterationProgress(m, p, f);
                      };
                    return (T._totalDuration = f.delay + m + f.endDelay), T;
                  })(r.normalizeTimingInput(T)),
                  n = M.convertEffectInput(m),
                  i = function () {
                    n(f, g);
                  };
                return (
                  (i._update = function (t) {
                    return null !== (g = e(t));
                  }),
                  (i._clear = function () {
                    n(f, null);
                  }),
                  (i._hasSameTarget = function (t) {
                    return f === t;
                  }),
                  (i._target = f),
                  (i._totalDuration = e._totalDuration),
                  (i._id = p),
                  i
                );
              };
            })(je, _e),
            (function (r, M) {
              function N(t, o, u) {
                (u.enumerable = !0),
                  (u.configurable = !0),
                  Object.defineProperty(t, o, u);
              }
              function f(t) {
                (this._element = t),
                  (this._surrogateStyle = document.createElementNS(
                    "http://www.w3.org/1999/xhtml",
                    "div"
                  ).style),
                  (this._style = t.style),
                  (this._length = 0),
                  (this._isAnimatedProperty = {}),
                  (this._updateSvgTransformAttr = (function (t, o) {
                    return (
                      !(
                        !o.namespaceURI || -1 == o.namespaceURI.indexOf("/svg")
                      ) &&
                      (T in t ||
                        (t[T] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(
                          t.navigator.userAgent
                        )),
                      t[T])
                    );
                  })(window, t)),
                  (this._savedTransformAttr = null);
                for (var o = 0; o < this._style.length; o++) {
                  var u = this._style[o];
                  this._surrogateStyle[u] = this._style[u];
                }
                this._updateIndices();
              }
              var T = "_webAnimationsUpdateSvgTransformAttr",
                p = { cssText: 1, length: 1, parentRule: 1 },
                g = {
                  getPropertyCSSValue: 1,
                  getPropertyPriority: 1,
                  getPropertyValue: 1,
                  item: 1,
                  removeProperty: 1,
                  setProperty: 1,
                },
                e = { removeProperty: 1, setProperty: 1 };
              for (var n in ((f.prototype = {
                get cssText() {
                  return this._surrogateStyle.cssText;
                },
                set cssText(t) {
                  for (var o = {}, u = 0; u < this._surrogateStyle.length; u++)
                    o[this._surrogateStyle[u]] = !0;
                  for (
                    this._surrogateStyle.cssText = t,
                      this._updateIndices(),
                      u = 0;
                    u < this._surrogateStyle.length;
                    u++
                  )
                    o[this._surrogateStyle[u]] = !0;
                  for (var v in o)
                    this._isAnimatedProperty[v] ||
                      this._style.setProperty(
                        v,
                        this._surrogateStyle.getPropertyValue(v)
                      );
                },
                get length() {
                  return this._surrogateStyle.length;
                },
                get parentRule() {
                  return this._style.parentRule;
                },
                _updateIndices: function () {
                  for (; this._length < this._surrogateStyle.length; )
                    Object.defineProperty(this, this._length, {
                      configurable: !0,
                      enumerable: !1,
                      get: (function (t) {
                        return function () {
                          return this._surrogateStyle[t];
                        };
                      })(this._length),
                    }),
                      this._length++;
                  for (; this._length > this._surrogateStyle.length; )
                    this._length--,
                      Object.defineProperty(this, this._length, {
                        configurable: !0,
                        enumerable: !1,
                        value: void 0,
                      });
                },
                _set: function (t, o) {
                  (this._style[t] = o),
                    (this._isAnimatedProperty[t] = !0),
                    this._updateSvgTransformAttr &&
                      "transform" == r.unprefixedPropertyName(t) &&
                      (null == this._savedTransformAttr &&
                        (this._savedTransformAttr =
                          this._element.getAttribute("transform")),
                      this._element.setAttribute(
                        "transform",
                        r.transformToSvgMatrix(o)
                      ));
                },
                _clear: function (t) {
                  (this._style[t] = this._surrogateStyle[t]),
                    this._updateSvgTransformAttr &&
                      "transform" == r.unprefixedPropertyName(t) &&
                      (this._savedTransformAttr
                        ? this._element.setAttribute(
                            "transform",
                            this._savedTransformAttr
                          )
                        : this._element.removeAttribute("transform"),
                      (this._savedTransformAttr = null)),
                    delete this._isAnimatedProperty[t];
                },
              }),
              g))
                f.prototype[n] = (function (t, o) {
                  return function () {
                    var u = this._surrogateStyle[t].apply(
                      this._surrogateStyle,
                      arguments
                    );
                    return (
                      o &&
                        (this._isAnimatedProperty[arguments[0]] ||
                          this._style[t].apply(this._style, arguments),
                        this._updateIndices()),
                      u
                    );
                  };
                })(n, n in e);
              for (var i in document.documentElement.style)
                i in p ||
                  i in g ||
                  (function (t) {
                    N(f.prototype, t, {
                      get: function () {
                        return this._surrogateStyle[t];
                      },
                      set: function (o) {
                        (this._surrogateStyle[t] = o),
                          this._updateIndices(),
                          this._isAnimatedProperty[t] || (this._style[t] = o);
                      },
                    });
                  })(i);
              (r.apply = function (t, o, u) {
                (function (t) {
                  if (!t._webAnimationsPatchedStyle) {
                    var o = new f(t);
                    try {
                      N(t, "style", {
                        get: function () {
                          return o;
                        },
                      });
                    } catch (u) {
                      (t.style._set = function (v, b) {
                        t.style[v] = b;
                      }),
                        (t.style._clear = function (v) {
                          t.style[v] = "";
                        });
                    }
                    t._webAnimationsPatchedStyle = t.style;
                  }
                })(t),
                  t.style._set(r.propertyName(o), u);
              }),
                (r.clear = function (t, o) {
                  t._webAnimationsPatchedStyle &&
                    t.style._clear(r.propertyName(o));
                });
            })(_e),
            (function (r) {
              window.Element.prototype.animate = function (M, S) {
                var N = "";
                return (
                  S && S.id && (N = S.id),
                  r.timeline._play(r.KeyframeEffect(this, M, S, N))
                );
              };
            })(_e),
            (function (r, M) {
              function S(N, f, m) {
                if ("number" == typeof N && "number" == typeof f)
                  return N * (1 - m) + f * m;
                if ("boolean" == typeof N && "boolean" == typeof f)
                  return m < 0.5 ? N : f;
                if (N.length == f.length) {
                  for (var T = [], p = 0; p < N.length; p++)
                    T.push(S(N[p], f[p], m));
                  return T;
                }
                throw "Mismatched interpolation arguments " + N + ":" + f;
              }
              r.Interpolation = function (N, f, m) {
                return function (T) {
                  return m(S(N, f, T));
                };
              };
            })(_e),
            (function (r, M) {
              var f = (function () {
                function m(g, e) {
                  for (
                    var n = [
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                      ],
                      i = 0;
                    i < 4;
                    i++
                  )
                    for (var t = 0; t < 4; t++)
                      for (var o = 0; o < 4; o++) n[i][t] += e[i][o] * g[o][t];
                  return n;
                }
                return function (g, e, n, i, t) {
                  for (
                    var o = [
                        [1, 0, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0, 1],
                      ],
                      u = 0;
                    u < 4;
                    u++
                  )
                    o[u][3] = t[u];
                  for (u = 0; u < 3; u++)
                    for (var v = 0; v < 3; v++) o[3][u] += g[v] * o[v][u];
                  var b = i[0],
                    E = i[1],
                    c = i[2],
                    k = i[3],
                    A = [
                      [1, 0, 0, 0],
                      [0, 1, 0, 0],
                      [0, 0, 1, 0],
                      [0, 0, 0, 1],
                    ];
                  (A[0][0] = 1 - 2 * (E * E + c * c)),
                    (A[0][1] = 2 * (b * E - c * k)),
                    (A[0][2] = 2 * (b * c + E * k)),
                    (A[1][0] = 2 * (b * E + c * k)),
                    (A[1][1] = 1 - 2 * (b * b + c * c)),
                    (A[1][2] = 2 * (E * c - b * k)),
                    (A[2][0] = 2 * (b * c - E * k)),
                    (A[2][1] = 2 * (E * c + b * k)),
                    (A[2][2] = 1 - 2 * (b * b + E * E)),
                    (o = m(o, A));
                  var D = [
                    [1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1],
                  ];
                  for (
                    n[2] && ((D[2][1] = n[2]), (o = m(o, D))),
                      n[1] && ((D[2][1] = 0), (D[2][0] = n[0]), (o = m(o, D))),
                      n[0] && ((D[2][0] = 0), (D[1][0] = n[0]), (o = m(o, D))),
                      u = 0;
                    u < 3;
                    u++
                  )
                    for (v = 0; v < 3; v++) o[u][v] *= e[u];
                  return (function (g) {
                    return (
                      0 == g[0][2] &&
                      0 == g[0][3] &&
                      0 == g[1][2] &&
                      0 == g[1][3] &&
                      0 == g[2][0] &&
                      0 == g[2][1] &&
                      1 == g[2][2] &&
                      0 == g[2][3] &&
                      0 == g[3][2] &&
                      1 == g[3][3]
                    );
                  })(o)
                    ? [o[0][0], o[0][1], o[1][0], o[1][1], o[3][0], o[3][1]]
                    : o[0].concat(o[1], o[2], o[3]);
                };
              })();
              (r.composeMatrix = f),
                (r.quat = function (m, T, p) {
                  var g = r.dot(m, T),
                    e = [];
                  if (
                    1 ===
                    (g = (function (m, T, p) {
                      return Math.max(Math.min(m, 1), -1);
                    })(g))
                  )
                    e = m;
                  else
                    for (
                      var n = Math.acos(g),
                        i = (1 * Math.sin(p * n)) / Math.sqrt(1 - g * g),
                        t = 0;
                      t < 4;
                      t++
                    )
                      e.push(m[t] * (Math.cos(p * n) - g * i) + T[t] * i);
                  return e;
                });
            })(_e),
            (function (r, M, S) {
              r.sequenceNumber = 0;
              var N = function (f, m, T) {
                (this.target = f),
                  (this.currentTime = m),
                  (this.timelineTime = T),
                  (this.type = "finish"),
                  (this.bubbles = !1),
                  (this.cancelable = !1),
                  (this.currentTarget = f),
                  (this.defaultPrevented = !1),
                  (this.eventPhase = Event.AT_TARGET),
                  (this.timeStamp = Date.now());
              };
              (M.Animation = function (f) {
                (this.id = ""),
                  f && f._id && (this.id = f._id),
                  (this._sequenceNumber = r.sequenceNumber++),
                  (this._currentTime = 0),
                  (this._startTime = null),
                  (this._paused = !1),
                  (this._playbackRate = 1),
                  (this._inTimeline = !0),
                  (this._finishedFlag = !0),
                  (this.onfinish = null),
                  (this._finishHandlers = []),
                  (this._effect = f),
                  (this._inEffect = this._effect._update(0)),
                  (this._idle = !0),
                  (this._currentTimePending = !1);
              }),
                (M.Animation.prototype = {
                  _ensureAlive: function () {
                    (this._inEffect = this._effect._update(
                      this.playbackRate < 0 && 0 === this.currentTime
                        ? -1
                        : this.currentTime
                    )),
                      this._inTimeline ||
                        (!this._inEffect && this._finishedFlag) ||
                        ((this._inTimeline = !0),
                        M.timeline._animations.push(this));
                  },
                  _tickCurrentTime: function (f, m) {
                    f != this._currentTime &&
                      ((this._currentTime = f),
                      this._isFinished &&
                        !m &&
                        (this._currentTime =
                          this._playbackRate > 0 ? this._totalDuration : 0),
                      this._ensureAlive());
                  },
                  get currentTime() {
                    return this._idle || this._currentTimePending
                      ? null
                      : this._currentTime;
                  },
                  set currentTime(f) {
                    (f = +f),
                      isNaN(f) ||
                        (M.restart(),
                        this._paused ||
                          null == this._startTime ||
                          (this._startTime =
                            this._timeline.currentTime -
                            f / this._playbackRate),
                        (this._currentTimePending = !1),
                        this._currentTime != f &&
                          (this._idle &&
                            ((this._idle = !1), (this._paused = !0)),
                          this._tickCurrentTime(f, !0),
                          M.applyDirtiedAnimation(this)));
                  },
                  get startTime() {
                    return this._startTime;
                  },
                  set startTime(f) {
                    (f = +f),
                      isNaN(f) ||
                        this._paused ||
                        this._idle ||
                        ((this._startTime = f),
                        this._tickCurrentTime(
                          (this._timeline.currentTime - this._startTime) *
                            this.playbackRate
                        ),
                        M.applyDirtiedAnimation(this));
                  },
                  get playbackRate() {
                    return this._playbackRate;
                  },
                  set playbackRate(f) {
                    if (f != this._playbackRate) {
                      var m = this.currentTime;
                      (this._playbackRate = f),
                        (this._startTime = null),
                        "paused" != this.playState &&
                          "idle" != this.playState &&
                          ((this._finishedFlag = !1),
                          (this._idle = !1),
                          this._ensureAlive(),
                          M.applyDirtiedAnimation(this)),
                        null != m && (this.currentTime = m);
                    }
                  },
                  get _isFinished() {
                    return (
                      !this._idle &&
                      ((this._playbackRate > 0 &&
                        this._currentTime >= this._totalDuration) ||
                        (this._playbackRate < 0 && this._currentTime <= 0))
                    );
                  },
                  get _totalDuration() {
                    return this._effect._totalDuration;
                  },
                  get playState() {
                    return this._idle
                      ? "idle"
                      : (null == this._startTime &&
                          !this._paused &&
                          0 != this.playbackRate) ||
                        this._currentTimePending
                      ? "pending"
                      : this._paused
                      ? "paused"
                      : this._isFinished
                      ? "finished"
                      : "running";
                  },
                  _rewind: function () {
                    if (this._playbackRate >= 0) this._currentTime = 0;
                    else {
                      if (!(this._totalDuration < 1 / 0))
                        throw new DOMException(
                          "Unable to rewind negative playback rate animation with infinite duration",
                          "InvalidStateError"
                        );
                      this._currentTime = this._totalDuration;
                    }
                  },
                  play: function () {
                    (this._paused = !1),
                      (this._isFinished || this._idle) &&
                        (this._rewind(), (this._startTime = null)),
                      (this._finishedFlag = !1),
                      (this._idle = !1),
                      this._ensureAlive(),
                      M.applyDirtiedAnimation(this);
                  },
                  pause: function () {
                    this._isFinished || this._paused || this._idle
                      ? this._idle && (this._rewind(), (this._idle = !1))
                      : (this._currentTimePending = !0),
                      (this._startTime = null),
                      (this._paused = !0);
                  },
                  finish: function () {
                    this._idle ||
                      ((this.currentTime =
                        this._playbackRate > 0 ? this._totalDuration : 0),
                      (this._startTime =
                        this._totalDuration - this.currentTime),
                      (this._currentTimePending = !1),
                      M.applyDirtiedAnimation(this));
                  },
                  cancel: function () {
                    this._inEffect &&
                      ((this._inEffect = !1),
                      (this._idle = !0),
                      (this._paused = !1),
                      (this._finishedFlag = !0),
                      (this._currentTime = 0),
                      (this._startTime = null),
                      this._effect._update(null),
                      M.applyDirtiedAnimation(this));
                  },
                  reverse: function () {
                    (this.playbackRate *= -1), this.play();
                  },
                  addEventListener: function (f, m) {
                    "function" == typeof m &&
                      "finish" == f &&
                      this._finishHandlers.push(m);
                  },
                  removeEventListener: function (f, m) {
                    if ("finish" == f) {
                      var T = this._finishHandlers.indexOf(m);
                      T >= 0 && this._finishHandlers.splice(T, 1);
                    }
                  },
                  _fireEvents: function (f) {
                    if (this._isFinished) {
                      if (!this._finishedFlag) {
                        var m = new N(this, this._currentTime, f),
                          T = this._finishHandlers.concat(
                            this.onfinish ? [this.onfinish] : []
                          );
                        setTimeout(function () {
                          T.forEach(function (p) {
                            p.call(m.target, m);
                          });
                        }, 0),
                          (this._finishedFlag = !0);
                      }
                    } else this._finishedFlag = !1;
                  },
                  _tick: function (f, m) {
                    this._idle ||
                      this._paused ||
                      (null == this._startTime
                        ? m &&
                          (this.startTime =
                            f - this._currentTime / this.playbackRate)
                        : this._isFinished ||
                          this._tickCurrentTime(
                            (f - this._startTime) * this.playbackRate
                          )),
                      m &&
                        ((this._currentTimePending = !1), this._fireEvents(f));
                  },
                  get _needsTick() {
                    return (
                      this.playState in { pending: 1, running: 1 } ||
                      !this._finishedFlag
                    );
                  },
                  _targetAnimations: function () {
                    var f = this._effect._target;
                    return (
                      f._activeAnimations || (f._activeAnimations = []),
                      f._activeAnimations
                    );
                  },
                  _markTarget: function () {
                    var f = this._targetAnimations();
                    -1 === f.indexOf(this) && f.push(this);
                  },
                  _unmarkTarget: function () {
                    var f = this._targetAnimations(),
                      m = f.indexOf(this);
                    -1 !== m && f.splice(m, 1);
                  },
                });
            })(je, _e),
            (function (r, M, S) {
              function N(E) {
                var c = e;
                (e = []),
                  E < b.currentTime && (E = b.currentTime),
                  b._animations.sort(f),
                  (b._animations = p(E, !0, b._animations)[0]),
                  c.forEach(function (k) {
                    k[1](E);
                  }),
                  T();
              }
              function f(E, c) {
                return E._sequenceNumber - c._sequenceNumber;
              }
              function m() {
                (this._animations = []),
                  (this.currentTime =
                    window.performance && performance.now
                      ? performance.now()
                      : 0);
              }
              function T() {
                u.forEach(function (E) {
                  E();
                }),
                  (u.length = 0);
              }
              function p(E, c, k) {
                (v = !0), (o = !1), (M.timeline.currentTime = E), (t = !1);
                var A = [],
                  D = [],
                  q = [],
                  K = [];
                return (
                  k.forEach(function (Z) {
                    Z._tick(E, c),
                      Z._inEffect
                        ? (D.push(Z._effect), Z._markTarget())
                        : (A.push(Z._effect), Z._unmarkTarget()),
                      Z._needsTick && (t = !0);
                    var P = Z._inEffect || Z._needsTick;
                    (Z._inTimeline = P), P ? q.push(Z) : K.push(Z);
                  }),
                  u.push.apply(u, A),
                  u.push.apply(u, D),
                  t && requestAnimationFrame(function () {}),
                  (v = !1),
                  [q, K]
                );
              }
              var g = window.requestAnimationFrame,
                e = [],
                n = 0;
              (window.requestAnimationFrame = function (E) {
                var c = n++;
                return 0 == e.length && g(N), e.push([c, E]), c;
              }),
                (window.cancelAnimationFrame = function (E) {
                  e.forEach(function (c) {
                    c[0] == E && (c[1] = function () {});
                  });
                }),
                (m.prototype = {
                  _play: function (E) {
                    E._timing = r.normalizeTimingInput(E.timing);
                    var c = new M.Animation(E);
                    return (
                      (c._idle = !1),
                      (c._timeline = this),
                      this._animations.push(c),
                      M.restart(),
                      M.applyDirtiedAnimation(c),
                      c
                    );
                  },
                });
              var t = !1,
                o = !1;
              (M.restart = function () {
                return (
                  t ||
                    ((t = !0), requestAnimationFrame(function () {}), (o = !0)),
                  o
                );
              }),
                (M.applyDirtiedAnimation = function (E) {
                  if (!v) {
                    E._markTarget();
                    var c = E._targetAnimations();
                    c.sort(f),
                      p(M.timeline.currentTime, !1, c.slice())[1].forEach(
                        function (k) {
                          var A = b._animations.indexOf(k);
                          -1 !== A && b._animations.splice(A, 1);
                        }
                      ),
                      T();
                  }
                });
              var u = [],
                v = !1,
                b = new m();
              M.timeline = b;
            })(je, _e),
            (function (r, M) {
              function S(e, n) {
                for (var i = 0, t = 0; t < e.length; t++) i += e[t] * n[t];
                return i;
              }
              function N(e, n) {
                return [
                  e[0] * n[0] + e[4] * n[1] + e[8] * n[2] + e[12] * n[3],
                  e[1] * n[0] + e[5] * n[1] + e[9] * n[2] + e[13] * n[3],
                  e[2] * n[0] + e[6] * n[1] + e[10] * n[2] + e[14] * n[3],
                  e[3] * n[0] + e[7] * n[1] + e[11] * n[2] + e[15] * n[3],
                  e[0] * n[4] + e[4] * n[5] + e[8] * n[6] + e[12] * n[7],
                  e[1] * n[4] + e[5] * n[5] + e[9] * n[6] + e[13] * n[7],
                  e[2] * n[4] + e[6] * n[5] + e[10] * n[6] + e[14] * n[7],
                  e[3] * n[4] + e[7] * n[5] + e[11] * n[6] + e[15] * n[7],
                  e[0] * n[8] + e[4] * n[9] + e[8] * n[10] + e[12] * n[11],
                  e[1] * n[8] + e[5] * n[9] + e[9] * n[10] + e[13] * n[11],
                  e[2] * n[8] + e[6] * n[9] + e[10] * n[10] + e[14] * n[11],
                  e[3] * n[8] + e[7] * n[9] + e[11] * n[10] + e[15] * n[11],
                  e[0] * n[12] + e[4] * n[13] + e[8] * n[14] + e[12] * n[15],
                  e[1] * n[12] + e[5] * n[13] + e[9] * n[14] + e[13] * n[15],
                  e[2] * n[12] + e[6] * n[13] + e[10] * n[14] + e[14] * n[15],
                  e[3] * n[12] + e[7] * n[13] + e[11] * n[14] + e[15] * n[15],
                ];
              }
              function f(e) {
                return (
                  ((e.deg || 0) / 360 + (e.grad || 0) / 400 + (e.turn || 0)) *
                    (2 * Math.PI) +
                  (e.rad || 0)
                );
              }
              function m(e) {
                switch (e.t) {
                  case "rotatex":
                    var n = f(e.d[0]);
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      Math.cos(n),
                      Math.sin(n),
                      0,
                      0,
                      -Math.sin(n),
                      Math.cos(n),
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "rotatey":
                    return (
                      (n = f(e.d[0])),
                      [
                        Math.cos(n),
                        0,
                        -Math.sin(n),
                        0,
                        0,
                        1,
                        0,
                        0,
                        Math.sin(n),
                        0,
                        Math.cos(n),
                        0,
                        0,
                        0,
                        0,
                        1,
                      ]
                    );
                  case "rotate":
                  case "rotatez":
                    return (
                      (n = f(e.d[0])),
                      [
                        Math.cos(n),
                        Math.sin(n),
                        0,
                        0,
                        -Math.sin(n),
                        Math.cos(n),
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                      ]
                    );
                  case "rotate3d":
                    var i = e.d[0],
                      t = e.d[1],
                      o = e.d[2],
                      u = ((n = f(e.d[3])), i * i + t * t + o * o);
                    if (0 === u) (i = 1), (t = 0), (o = 0);
                    else if (1 !== u) {
                      var v = Math.sqrt(u);
                      (i /= v), (t /= v), (o /= v);
                    }
                    var b = Math.sin(n / 2),
                      E = b * Math.cos(n / 2),
                      c = b * b;
                    return [
                      1 - 2 * (t * t + o * o) * c,
                      2 * (i * t * c + o * E),
                      2 * (i * o * c - t * E),
                      0,
                      2 * (i * t * c - o * E),
                      1 - 2 * (i * i + o * o) * c,
                      2 * (t * o * c + i * E),
                      0,
                      2 * (i * o * c + t * E),
                      2 * (t * o * c - i * E),
                      1 - 2 * (i * i + t * t) * c,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "scale":
                    return [
                      e.d[0],
                      0,
                      0,
                      0,
                      0,
                      e.d[1],
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "scalex":
                    return [
                      e.d[0],
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "scaley":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      e.d[0],
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "scalez":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      e.d[0],
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "scale3d":
                    return [
                      e.d[0],
                      0,
                      0,
                      0,
                      0,
                      e.d[1],
                      0,
                      0,
                      0,
                      0,
                      e.d[2],
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "skew":
                    var k = f(e.d[0]),
                      A = f(e.d[1]);
                    return [
                      1,
                      Math.tan(A),
                      0,
                      0,
                      Math.tan(k),
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "skewx":
                    return (
                      (n = f(e.d[0])),
                      [1, 0, 0, 0, Math.tan(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                    );
                  case "skewy":
                    return (
                      (n = f(e.d[0])),
                      [1, Math.tan(n), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                    );
                  case "translate":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      (i = e.d[0].px || 0),
                      (t = e.d[1].px || 0),
                      0,
                      1,
                    ];
                  case "translatex":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      (i = e.d[0].px || 0),
                      0,
                      0,
                      1,
                    ];
                  case "translatey":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      (t = e.d[0].px || 0),
                      0,
                      1,
                    ];
                  case "translatez":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      (o = e.d[0].px || 0),
                      1,
                    ];
                  case "translate3d":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      (i = e.d[0].px || 0),
                      (t = e.d[1].px || 0),
                      (o = e.d[2].px || 0),
                      1,
                    ];
                  case "perspective":
                    return [
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      e.d[0].px ? -1 / e.d[0].px : 0,
                      0,
                      0,
                      0,
                      1,
                    ];
                  case "matrix":
                    return [
                      e.d[0],
                      e.d[1],
                      0,
                      0,
                      e.d[2],
                      e.d[3],
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      e.d[4],
                      e.d[5],
                      0,
                      1,
                    ];
                  case "matrix3d":
                    return e.d;
                }
              }
              function T(e) {
                return 0 === e.length
                  ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                  : e.map(m).reduce(N);
              }
              var g = (function () {
                function e(c) {
                  return (
                    c[0][0] * c[1][1] * c[2][2] +
                    c[1][0] * c[2][1] * c[0][2] +
                    c[2][0] * c[0][1] * c[1][2] -
                    c[0][2] * c[1][1] * c[2][0] -
                    c[1][2] * c[2][1] * c[0][0] -
                    c[2][2] * c[0][1] * c[1][0]
                  );
                }
                function o(c) {
                  var k = u(c);
                  return [c[0] / k, c[1] / k, c[2] / k];
                }
                function u(c) {
                  return Math.sqrt(c[0] * c[0] + c[1] * c[1] + c[2] * c[2]);
                }
                function v(c, k, A, D) {
                  return [
                    A * c[0] + D * k[0],
                    A * c[1] + D * k[1],
                    A * c[2] + D * k[2],
                  ];
                }
                return function (c) {
                  var k = [
                    c.slice(0, 4),
                    c.slice(4, 8),
                    c.slice(8, 12),
                    c.slice(12, 16),
                  ];
                  if (1 !== k[3][3]) return null;
                  for (var A = [], D = 0; D < 4; D++) A.push(k[D].slice());
                  for (D = 0; D < 3; D++) A[D][3] = 0;
                  if (0 === e(A)) return null;
                  var q,
                    K = [];
                  k[0][3] || k[1][3] || k[2][3]
                    ? (K.push(k[0][3]),
                      K.push(k[1][3]),
                      K.push(k[2][3]),
                      K.push(k[3][3]),
                      (q = (function (c, k) {
                        for (var A = [], D = 0; D < 4; D++) {
                          for (var q = 0, K = 0; K < 4; K++)
                            q += c[K] * k[K][D];
                          A.push(q);
                        }
                        return A;
                      })(
                        K,
                        (function (c) {
                          return [
                            [c[0][0], c[1][0], c[2][0], c[3][0]],
                            [c[0][1], c[1][1], c[2][1], c[3][1]],
                            [c[0][2], c[1][2], c[2][2], c[3][2]],
                            [c[0][3], c[1][3], c[2][3], c[3][3]],
                          ];
                        })(
                          (function (c) {
                            for (
                              var k = 1 / e(c),
                                A = c[0][0],
                                D = c[0][1],
                                q = c[0][2],
                                K = c[1][0],
                                Z = c[1][1],
                                P = c[1][2],
                                $ = c[2][0],
                                he = c[2][1],
                                Ee = c[2][2],
                                ae = [
                                  [
                                    (Z * Ee - P * he) * k,
                                    (q * he - D * Ee) * k,
                                    (D * P - q * Z) * k,
                                    0,
                                  ],
                                  [
                                    (P * $ - K * Ee) * k,
                                    (A * Ee - q * $) * k,
                                    (q * K - A * P) * k,
                                    0,
                                  ],
                                  [
                                    (K * he - Z * $) * k,
                                    ($ * D - A * he) * k,
                                    (A * Z - D * K) * k,
                                    0,
                                  ],
                                ],
                                Pe = [],
                                He = 0;
                              He < 3;
                              He++
                            ) {
                              for (var Ce = 0, We = 0; We < 3; We++)
                                Ce += c[3][We] * ae[We][He];
                              Pe.push(Ce);
                            }
                            return Pe.push(1), ae.push(Pe), ae;
                          })(A)
                        )
                      )))
                    : (q = [0, 0, 0, 1]);
                  var Z = k[3].slice(0, 3),
                    P = [];
                  P.push(k[0].slice(0, 3));
                  var $ = [];
                  $.push(u(P[0])), (P[0] = o(P[0]));
                  var he = [];
                  P.push(k[1].slice(0, 3)),
                    he.push(S(P[0], P[1])),
                    (P[1] = v(P[1], P[0], 1, -he[0])),
                    $.push(u(P[1])),
                    (P[1] = o(P[1])),
                    (he[0] /= $[1]),
                    P.push(k[2].slice(0, 3)),
                    he.push(S(P[0], P[2])),
                    (P[2] = v(P[2], P[0], 1, -he[1])),
                    he.push(S(P[1], P[2])),
                    (P[2] = v(P[2], P[1], 1, -he[2])),
                    $.push(u(P[2])),
                    (P[2] = o(P[2])),
                    (he[1] /= $[2]),
                    (he[2] /= $[2]);
                  var Ee = (function (c, k) {
                    return [
                      c[1] * k[2] - c[2] * k[1],
                      c[2] * k[0] - c[0] * k[2],
                      c[0] * k[1] - c[1] * k[0],
                    ];
                  })(P[1], P[2]);
                  if (S(P[0], Ee) < 0)
                    for (D = 0; D < 3; D++)
                      ($[D] *= -1),
                        (P[D][0] *= -1),
                        (P[D][1] *= -1),
                        (P[D][2] *= -1);
                  var ae,
                    Pe,
                    He = P[0][0] + P[1][1] + P[2][2] + 1;
                  return (
                    He > 1e-4
                      ? ((ae = 0.5 / Math.sqrt(He)),
                        (Pe = [
                          (P[2][1] - P[1][2]) * ae,
                          (P[0][2] - P[2][0]) * ae,
                          (P[1][0] - P[0][1]) * ae,
                          0.25 / ae,
                        ]))
                      : P[0][0] > P[1][1] && P[0][0] > P[2][2]
                      ? (Pe = [
                          0.25 *
                            (ae =
                              2 * Math.sqrt(1 + P[0][0] - P[1][1] - P[2][2])),
                          (P[0][1] + P[1][0]) / ae,
                          (P[0][2] + P[2][0]) / ae,
                          (P[2][1] - P[1][2]) / ae,
                        ])
                      : P[1][1] > P[2][2]
                      ? ((ae = 2 * Math.sqrt(1 + P[1][1] - P[0][0] - P[2][2])),
                        (Pe = [
                          (P[0][1] + P[1][0]) / ae,
                          0.25 * ae,
                          (P[1][2] + P[2][1]) / ae,
                          (P[0][2] - P[2][0]) / ae,
                        ]))
                      : ((ae = 2 * Math.sqrt(1 + P[2][2] - P[0][0] - P[1][1])),
                        (Pe = [
                          (P[0][2] + P[2][0]) / ae,
                          (P[1][2] + P[2][1]) / ae,
                          0.25 * ae,
                          (P[1][0] - P[0][1]) / ae,
                        ])),
                    [Z, $, he, Pe, q]
                  );
                };
              })();
              (r.dot = S),
                (r.makeMatrixDecomposition = function (e) {
                  return [g(T(e))];
                }),
                (r.transformListToMatrix = T);
            })(_e),
            (function (r) {
              function M(i, t) {
                var o = i.exec(t);
                if (o)
                  return [
                    (o = i.ignoreCase ? o[0].toLowerCase() : o[0]),
                    t.substr(o.length),
                  ];
              }
              function S(i, t) {
                var o = i((t = t.replace(/^\s*/, "")));
                if (o) return [o[0], o[1].replace(/^\s*/, "")];
              }
              function e(i, t, o, u, v) {
                for (
                  var b = [],
                    E = [],
                    c = [],
                    k = (function (i, t) {
                      for (var o = i, u = t; o && u; )
                        o > u ? (o %= u) : (u %= o);
                      return (i * t) / (o + u);
                    })(u.length, v.length),
                    A = 0;
                  A < k;
                  A++
                ) {
                  var D = t(u[A % u.length], v[A % v.length]);
                  if (!D) return;
                  b.push(D[0]), E.push(D[1]), c.push(D[2]);
                }
                return [
                  b,
                  E,
                  function (q) {
                    var K = q
                      .map(function (Z, P) {
                        return c[P](Z);
                      })
                      .join(o);
                    return i ? i(K) : K;
                  },
                ];
              }
              (r.consumeToken = M),
                (r.consumeTrimmed = S),
                (r.consumeRepeated = function (i, t, o) {
                  i = S.bind(null, i);
                  for (var u = []; ; ) {
                    var v = i(o);
                    if (!v) return [u, o];
                    if ((u.push(v[0]), !(v = M(t, (o = v[1]))) || "" == v[1]))
                      return [u, o];
                    o = v[1];
                  }
                }),
                (r.consumeParenthesised = function (i, t) {
                  for (
                    var o = 0, u = 0;
                    u < t.length && (!/\s|,/.test(t[u]) || 0 != o);
                    u++
                  )
                    if ("(" == t[u]) o++;
                    else if (")" == t[u] && (0 == --o && u++, o <= 0)) break;
                  var v = i(t.substr(0, u));
                  return null == v ? void 0 : [v, t.substr(u)];
                }),
                (r.ignore = function (i) {
                  return function (t) {
                    var o = i(t);
                    return o && (o[0] = void 0), o;
                  };
                }),
                (r.optional = function (i, t) {
                  return function (o) {
                    return i(o) || [t, o];
                  };
                }),
                (r.consumeList = function (i, t) {
                  for (var o = [], u = 0; u < i.length; u++) {
                    var v = r.consumeTrimmed(i[u], t);
                    if (!v || "" == v[0]) return;
                    void 0 !== v[0] && o.push(v[0]), (t = v[1]);
                  }
                  if ("" == t) return o;
                }),
                (r.mergeNestedRepeated = e.bind(null, null)),
                (r.mergeWrappedNestedRepeated = e),
                (r.mergeList = function (i, t, o) {
                  for (
                    var u = [], v = [], b = [], E = 0, c = 0;
                    c < o.length;
                    c++
                  )
                    if ("function" == typeof o[c]) {
                      var k = o[c](i[E], t[E++]);
                      u.push(k[0]), v.push(k[1]), b.push(k[2]);
                    } else
                      !(function (A) {
                        u.push(!1),
                          v.push(!1),
                          b.push(function () {
                            return o[A];
                          });
                      })(c);
                  return [
                    u,
                    v,
                    function (A) {
                      for (var D = "", q = 0; q < A.length; q++)
                        D += b[q](A[q]);
                      return D;
                    },
                  ];
                });
            })(_e),
            (function (r) {
              function M(T) {
                var g = { inset: !1, lengths: [], color: null },
                  e = r.consumeRepeated(
                    function (n) {
                      var i = r.consumeToken(/^inset/i, n);
                      return i
                        ? ((g.inset = !0), i)
                        : (i = r.consumeLengthOrPercent(n))
                        ? (g.lengths.push(i[0]), i)
                        : (i = r.consumeColor(n))
                        ? ((g.color = i[0]), i)
                        : void 0;
                    },
                    /^/,
                    T
                  );
                if (e && e[0].length) return [g, e[1]];
              }
              var m = function (T, p, g, e) {
                function n(b) {
                  return {
                    inset: b,
                    color: [0, 0, 0, 0],
                    lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }],
                  };
                }
                for (
                  var i = [], t = [], o = 0;
                  o < g.length || o < e.length;
                  o++
                ) {
                  var u = g[o] || n(e[o].inset),
                    v = e[o] || n(g[o].inset);
                  i.push(u), t.push(v);
                }
                return r.mergeNestedRepeated(T, p, i, t);
              }.bind(
                null,
                function (T, p) {
                  for (
                    ;
                    T.lengths.length <
                    Math.max(T.lengths.length, p.lengths.length);

                  )
                    T.lengths.push({ px: 0 });
                  for (
                    ;
                    p.lengths.length <
                    Math.max(T.lengths.length, p.lengths.length);

                  )
                    p.lengths.push({ px: 0 });
                  if (T.inset == p.inset && !!T.color == !!p.color) {
                    for (
                      var g, e = [], n = [[], 0], i = [[], 0], t = 0;
                      t < T.lengths.length;
                      t++
                    ) {
                      var o = r.mergeDimensions(
                        T.lengths[t],
                        p.lengths[t],
                        2 == t
                      );
                      n[0].push(o[0]), i[0].push(o[1]), e.push(o[2]);
                    }
                    if (T.color && p.color) {
                      var u = r.mergeColors(T.color, p.color);
                      (n[1] = u[0]), (i[1] = u[1]), (g = u[2]);
                    }
                    return [
                      n,
                      i,
                      function (v) {
                        for (
                          var b = T.inset ? "inset " : " ", E = 0;
                          E < e.length;
                          E++
                        )
                          b += e[E](v[0][E]) + " ";
                        return g && (b += g(v[1])), b;
                      },
                    ];
                  }
                },
                ", "
              );
              r.addPropertiesHandler(
                function (T) {
                  var p = r.consumeRepeated(M, /^,/, T);
                  if (p && "" == p[1]) return p[0];
                },
                m,
                ["box-shadow", "text-shadow"]
              );
            })(_e),
            (function (r, M) {
              function S(t) {
                return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
              }
              function N(t, o, u) {
                return Math.min(o, Math.max(t, u));
              }
              function f(t) {
                if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t);
              }
              function g(t, o) {
                return function (u, v) {
                  return [
                    u,
                    v,
                    function (b) {
                      return S(N(t, o, b));
                    },
                  ];
                };
              }
              function e(t) {
                var o = t.trim().split(/\s*[\s,]\s*/);
                if (0 !== o.length) {
                  for (var u = [], v = 0; v < o.length; v++) {
                    var b = f(o[v]);
                    if (void 0 === b) return;
                    u.push(b);
                  }
                  return u;
                }
              }
              (r.clamp = N),
                r.addPropertiesHandler(
                  e,
                  function (t, o) {
                    if (t.length == o.length)
                      return [
                        t,
                        o,
                        function (u) {
                          return u.map(S).join(" ");
                        },
                      ];
                  },
                  ["stroke-dasharray"]
                ),
                r.addPropertiesHandler(f, g(0, 1 / 0), [
                  "border-image-width",
                  "line-height",
                ]),
                r.addPropertiesHandler(f, g(0, 1), [
                  "opacity",
                  "shape-image-threshold",
                ]),
                r.addPropertiesHandler(
                  f,
                  function (t, o) {
                    if (0 != t) return g(0, 1 / 0)(t, o);
                  },
                  ["flex-grow", "flex-shrink"]
                ),
                r.addPropertiesHandler(
                  f,
                  function (t, o) {
                    return [
                      t,
                      o,
                      function (u) {
                        return Math.round(N(1, 1 / 0, u));
                      },
                    ];
                  },
                  ["orphans", "widows"]
                ),
                r.addPropertiesHandler(
                  f,
                  function (t, o) {
                    return [t, o, Math.round];
                  },
                  ["z-index"]
                ),
                (r.parseNumber = f),
                (r.parseNumberList = e),
                (r.mergeNumbers = function (t, o) {
                  return [t, o, S];
                }),
                (r.numberToString = S);
            })(_e),
            (function (r, M) {
              r.addPropertiesHandler(
                String,
                function (N, f) {
                  if ("visible" == N || "visible" == f)
                    return [
                      0,
                      1,
                      function (m) {
                        return m <= 0 ? N : m >= 1 ? f : "visible";
                      },
                    ];
                },
                ["visibility"]
              );
            })(_e),
            (function (r, M) {
              function S(T) {
                (T = T.trim()), (m.fillStyle = "#000"), (m.fillStyle = T);
                var p = m.fillStyle;
                if (
                  ((m.fillStyle = "#fff"), (m.fillStyle = T), p == m.fillStyle)
                ) {
                  m.fillRect(0, 0, 1, 1);
                  var g = m.getImageData(0, 0, 1, 1).data;
                  m.clearRect(0, 0, 1, 1);
                  var e = g[3] / 255;
                  return [g[0] * e, g[1] * e, g[2] * e, e];
                }
              }
              function N(T, p) {
                return [
                  T,
                  p,
                  function (g) {
                    if (g[3])
                      for (var n = 0; n < 3; n++)
                        g[n] = Math.round(
                          Math.max(0, Math.min(255, g[n] / g[3]))
                        );
                    return (
                      (g[3] = r.numberToString(r.clamp(0, 1, g[3]))),
                      "rgba(" + g.join(",") + ")"
                    );
                  },
                ];
              }
              var f = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "canvas"
              );
              f.width = f.height = 1;
              var m = f.getContext("2d");
              r.addPropertiesHandler(S, N, [
                "background-color",
                "border-bottom-color",
                "border-left-color",
                "border-right-color",
                "border-top-color",
                "color",
                "fill",
                "flood-color",
                "lighting-color",
                "outline-color",
                "stop-color",
                "stroke",
                "text-decoration-color",
              ]),
                (r.consumeColor = r.consumeParenthesised.bind(null, S)),
                (r.mergeColors = N);
            })(_e),
            (function (r, M) {
              function S(b) {
                function E() {
                  var Z = K.exec(b);
                  q = Z ? Z[0] : void 0;
                }
                function k() {
                  if ("(" !== q)
                    return (function () {
                      var Z = Number(q);
                      return E(), Z;
                    })();
                  E();
                  var Z = D();
                  return ")" !== q ? NaN : (E(), Z);
                }
                function A() {
                  for (var Z = k(); "*" === q || "/" === q; ) {
                    var P = q;
                    E();
                    var $ = k();
                    "*" === P ? (Z *= $) : (Z /= $);
                  }
                  return Z;
                }
                function D() {
                  for (var Z = A(); "+" === q || "-" === q; ) {
                    var P = q;
                    E();
                    var $ = A();
                    "+" === P ? (Z += $) : (Z -= $);
                  }
                  return Z;
                }
                var q,
                  K = /([\+\-\w\.]+|[\(\)\*\/])/g;
                return E(), D();
              }
              function N(b, E) {
                if ("0" == (E = E.trim().toLowerCase()) && "px".search(b) >= 0)
                  return { px: 0 };
                if (/^[^(]*$|^calc/.test(E)) {
                  E = E.replace(/calc\(/g, "(");
                  var c = {};
                  E = E.replace(b, function (P) {
                    return (c[P] = null), "U" + P;
                  });
                  for (
                    var k = "U(" + b.source + ")",
                      A = E.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N")
                        .replace(new RegExp("N" + k, "g"), "D")
                        .replace(/\s[+-]\s/g, "O")
                        .replace(/\s/g, ""),
                      D = [
                        /N\*(D)/g,
                        /(N|D)[*\/]N/g,
                        /(N|D)O\1/g,
                        /\((N|D)\)/g,
                      ],
                      q = 0;
                    q < D.length;

                  )
                    D[q].test(A) ? ((A = A.replace(D[q], "$1")), (q = 0)) : q++;
                  if ("D" == A) {
                    for (var K in c) {
                      var Z = S(
                        E.replace(new RegExp("U" + K, "g"), "").replace(
                          new RegExp(k, "g"),
                          "*0"
                        )
                      );
                      if (!isFinite(Z)) return;
                      c[K] = Z;
                    }
                    return c;
                  }
                }
              }
              function f(b, E) {
                return m(b, E, !0);
              }
              function m(b, E, c) {
                var k,
                  A = [];
                for (k in b) A.push(k);
                for (k in E) A.indexOf(k) < 0 && A.push(k);
                return (
                  (b = A.map(function (D) {
                    return b[D] || 0;
                  })),
                  (E = A.map(function (D) {
                    return E[D] || 0;
                  })),
                  [
                    b,
                    E,
                    function (D) {
                      var q = D.map(function (K, Z) {
                        return (
                          1 == D.length && c && (K = Math.max(K, 0)),
                          r.numberToString(K) + A[Z]
                        );
                      }).join(" + ");
                      return D.length > 1 ? "calc(" + q + ")" : q;
                    },
                  ]
                );
              }
              var T = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
                p = N.bind(null, new RegExp(T, "g")),
                g = N.bind(null, new RegExp(T + "|%", "g")),
                e = N.bind(null, /deg|rad|grad|turn/g);
              (r.parseLength = p),
                (r.parseLengthOrPercent = g),
                (r.consumeLengthOrPercent = r.consumeParenthesised.bind(
                  null,
                  g
                )),
                (r.parseAngle = e),
                (r.mergeDimensions = m);
              var n = r.consumeParenthesised.bind(null, p),
                i = r.consumeRepeated.bind(void 0, n, /^/),
                t = r.consumeRepeated.bind(void 0, i, /^,/);
              r.consumeSizePairList = t;
              var u = r.mergeNestedRepeated.bind(void 0, f, " "),
                v = r.mergeNestedRepeated.bind(void 0, u, ",");
              (r.mergeNonNegativeSizePair = u),
                r.addPropertiesHandler(
                  function (b) {
                    var E = t(b);
                    if (E && "" == E[1]) return E[0];
                  },
                  v,
                  ["background-size"]
                ),
                r.addPropertiesHandler(g, f, [
                  "border-bottom-width",
                  "border-image-width",
                  "border-left-width",
                  "border-right-width",
                  "border-top-width",
                  "flex-basis",
                  "font-size",
                  "height",
                  "line-height",
                  "max-height",
                  "max-width",
                  "outline-width",
                  "width",
                ]),
                r.addPropertiesHandler(g, m, [
                  "border-bottom-left-radius",
                  "border-bottom-right-radius",
                  "border-top-left-radius",
                  "border-top-right-radius",
                  "bottom",
                  "left",
                  "letter-spacing",
                  "margin-bottom",
                  "margin-left",
                  "margin-right",
                  "margin-top",
                  "min-height",
                  "min-width",
                  "outline-offset",
                  "padding-bottom",
                  "padding-left",
                  "padding-right",
                  "padding-top",
                  "perspective",
                  "right",
                  "shape-margin",
                  "stroke-dashoffset",
                  "text-indent",
                  "top",
                  "vertical-align",
                  "word-spacing",
                ]);
            })(_e),
            (function (r, M) {
              function S(p) {
                return (
                  r.consumeLengthOrPercent(p) || r.consumeToken(/^auto/, p)
                );
              }
              function N(p) {
                var g = r.consumeList(
                  [
                    r.ignore(r.consumeToken.bind(null, /^rect/)),
                    r.ignore(r.consumeToken.bind(null, /^\(/)),
                    r.consumeRepeated.bind(null, S, /^,/),
                    r.ignore(r.consumeToken.bind(null, /^\)/)),
                  ],
                  p
                );
                if (g && 4 == g[0].length) return g[0];
              }
              var T = r.mergeWrappedNestedRepeated.bind(
                null,
                function (p) {
                  return "rect(" + p + ")";
                },
                function (p, g) {
                  return "auto" == p || "auto" == g
                    ? [
                        !0,
                        !1,
                        function (e) {
                          var n = e ? p : g;
                          if ("auto" == n) return "auto";
                          var i = r.mergeDimensions(n, n);
                          return i[2](i[0]);
                        },
                      ]
                    : r.mergeDimensions(p, g);
                },
                ", "
              );
              (r.parseBox = N),
                (r.mergeBoxes = T),
                r.addPropertiesHandler(N, T, ["clip"]);
            })(_e),
            (function (r, M) {
              function S(u) {
                return function (v) {
                  var b = 0;
                  return u.map(function (E) {
                    return E === n ? v[b++] : E;
                  });
                };
              }
              function N(u) {
                return u;
              }
              function f(u) {
                if ("none" == (u = u.toLowerCase().trim())) return [];
                for (
                  var v, b = /\s*(\w+)\(([^)]*)\)/g, E = [], c = 0;
                  (v = b.exec(u));

                ) {
                  if (v.index != c) return;
                  c = v.index + v[0].length;
                  var k = v[1],
                    A = o[k];
                  if (!A) return;
                  var D = v[2].split(","),
                    q = A[0];
                  if (q.length < D.length) return;
                  for (var K = [], Z = 0; Z < q.length; Z++) {
                    var P,
                      $ = D[Z],
                      he = q[Z];
                    if (
                      void 0 ===
                      (P = $
                        ? {
                            A: function (Ee) {
                              return "0" == Ee.trim() ? t : r.parseAngle(Ee);
                            },
                            N: r.parseNumber,
                            T: r.parseLengthOrPercent,
                            L: r.parseLength,
                          }[he.toUpperCase()]($)
                        : { a: t, n: K[0], t: i }[he])
                    )
                      return;
                    K.push(P);
                  }
                  if ((E.push({ t: k, d: K }), b.lastIndex == u.length))
                    return E;
                }
              }
              function m(u) {
                return u.toFixed(6).replace(".000000", "");
              }
              function T(u, v) {
                if (u.decompositionPair !== v) {
                  u.decompositionPair = v;
                  var b = r.makeMatrixDecomposition(u);
                }
                if (v.decompositionPair !== u) {
                  v.decompositionPair = u;
                  var E = r.makeMatrixDecomposition(v);
                }
                return null == b[0] || null == E[0]
                  ? [
                      [!1],
                      [!0],
                      function (c) {
                        return c ? v[0].d : u[0].d;
                      },
                    ]
                  : (b[0].push(0),
                    E[0].push(1),
                    [
                      b,
                      E,
                      function (c) {
                        var k = r.quat(b[0][3], E[0][3], c[5]);
                        return r
                          .composeMatrix(c[0], c[1], c[2], k, c[4])
                          .map(m)
                          .join(",");
                      },
                    ]);
              }
              function p(u) {
                return u.replace(/[xy]/, "");
              }
              function g(u) {
                return u.replace(/(x|y|z|3d)?$/, "3d");
              }
              var n = null,
                i = { px: 0 },
                t = { deg: 0 },
                o = {
                  matrix: [
                    "NNNNNN",
                    [n, n, 0, 0, n, n, 0, 0, 0, 0, 1, 0, n, n, 0, 1],
                    N,
                  ],
                  matrix3d: ["NNNNNNNNNNNNNNNN", N],
                  rotate: ["A"],
                  rotatex: ["A"],
                  rotatey: ["A"],
                  rotatez: ["A"],
                  rotate3d: ["NNNA"],
                  perspective: ["L"],
                  scale: ["Nn", S([n, n, 1]), N],
                  scalex: ["N", S([n, 1, 1]), S([n, 1])],
                  scaley: ["N", S([1, n, 1]), S([1, n])],
                  scalez: ["N", S([1, 1, n])],
                  scale3d: ["NNN", N],
                  skew: ["Aa", null, N],
                  skewx: ["A", null, S([n, t])],
                  skewy: ["A", null, S([t, n])],
                  translate: ["Tt", S([n, n, i]), N],
                  translatex: ["T", S([n, i, i]), S([n, i])],
                  translatey: ["T", S([i, n, i]), S([i, n])],
                  translatez: ["L", S([i, i, n])],
                  translate3d: ["TTL", N],
                };
              r.addPropertiesHandler(
                f,
                function (u, v) {
                  var b = r.makeMatrixDecomposition && !0,
                    E = !1;
                  if (!u.length || !v.length) {
                    u.length || ((E = !0), (u = v), (v = []));
                    for (var c = 0; c < u.length; c++) {
                      var A = u[c].d,
                        D = "scale" == (k = u[c].t).substr(0, 5) ? 1 : 0;
                      v.push({
                        t: k,
                        d: A.map(function (z) {
                          if ("number" == typeof z) return D;
                          var Re = {};
                          for (var Me in z) Re[Me] = D;
                          return Re;
                        }),
                      });
                    }
                  }
                  var z,
                    Re,
                    K = [],
                    Z = [],
                    P = [];
                  if (u.length != v.length) {
                    if (!b) return;
                    (K = [($ = T(u, v))[0]]),
                      (Z = [$[1]]),
                      (P = [["matrix", [$[2]]]]);
                  } else
                    for (c = 0; c < u.length; c++) {
                      var k,
                        he = u[c].t,
                        Ee = v[c].t,
                        ae = u[c].d,
                        Pe = v[c].d,
                        He = o[he],
                        Ce = o[Ee];
                      if (
                        ((Re = Ee),
                        ("perspective" == (z = he) && "perspective" == Re) ||
                          (("matrix" == z || "matrix3d" == z) &&
                            ("matrix" == Re || "matrix3d" == Re)))
                      ) {
                        if (!b) return;
                        var $ = T([u[c]], [v[c]]);
                        K.push($[0]), Z.push($[1]), P.push(["matrix", [$[2]]]);
                      } else {
                        if (he == Ee) k = he;
                        else if (He[2] && Ce[2] && p(he) == p(Ee))
                          (k = p(he)), (ae = He[2](ae)), (Pe = Ce[2](Pe));
                        else {
                          if (!He[1] || !Ce[1] || g(he) != g(Ee)) {
                            if (!b) return;
                            (K = [($ = T(u, v))[0]]),
                              (Z = [$[1]]),
                              (P = [["matrix", [$[2]]]]);
                            break;
                          }
                          (k = g(he)), (ae = He[1](ae)), (Pe = Ce[1](Pe));
                        }
                        for (
                          var We = [], Ke = [], w = [], V = 0;
                          V < ae.length;
                          V++
                        )
                          ($ = (
                            "number" == typeof ae[V]
                              ? r.mergeNumbers
                              : r.mergeDimensions
                          )(ae[V], Pe[V])),
                            (We[V] = $[0]),
                            (Ke[V] = $[1]),
                            w.push($[2]);
                        K.push(We), Z.push(Ke), P.push([k, w]);
                      }
                    }
                  if (E) {
                    var te = K;
                    (K = Z), (Z = te);
                  }
                  return [
                    K,
                    Z,
                    function (z) {
                      return z
                        .map(function (Re, Me) {
                          var Be = Re.map(function (Ge, Qe) {
                            return P[Me][1][Qe](Ge);
                          }).join(",");
                          return (
                            "matrix" == P[Me][0] &&
                              16 == Be.split(",").length &&
                              (P[Me][0] = "matrix3d"),
                            P[Me][0] + "(" + Be + ")"
                          );
                        })
                        .join(" ");
                    },
                  ];
                },
                ["transform"]
              ),
                (r.transformToSvgMatrix = function (u) {
                  var v = r.transformListToMatrix(f(u));
                  return (
                    "matrix(" +
                    m(v[0]) +
                    " " +
                    m(v[1]) +
                    " " +
                    m(v[4]) +
                    " " +
                    m(v[5]) +
                    " " +
                    m(v[12]) +
                    " " +
                    m(v[13]) +
                    ")"
                  );
                });
            })(_e),
            (function (r) {
              function S(f) {
                return (
                  (f = 100 * Math.round(f / 100)),
                  400 === (f = r.clamp(100, 900, f))
                    ? "normal"
                    : 700 === f
                    ? "bold"
                    : String(f)
                );
              }
              r.addPropertiesHandler(
                function (f) {
                  var m = Number(f);
                  if (!(isNaN(m) || m < 100 || m > 900 || m % 100 != 0))
                    return m;
                },
                function (f, m) {
                  return [f, m, S];
                },
                ["font-weight"]
              );
            })(_e),
            (function (r) {
              function M(e) {
                var n = {};
                for (var i in e) n[i] = -e[i];
                return n;
              }
              function S(e) {
                return (
                  r.consumeToken(/^(left|center|right|top|bottom)\b/i, e) ||
                  r.consumeLengthOrPercent(e)
                );
              }
              function N(e, n) {
                var i = r.consumeRepeated(S, /^/, n);
                if (i && "" == i[1]) {
                  var t = i[0];
                  if (
                    ((t[0] = t[0] || "center"),
                    (t[1] = t[1] || "center"),
                    3 == e && (t[2] = t[2] || { px: 0 }),
                    t.length == e)
                  ) {
                    if (/top|bottom/.test(t[0]) || /left|right/.test(t[1])) {
                      var o = t[0];
                      (t[0] = t[1]), (t[1] = o);
                    }
                    if (
                      /left|right|center|Object/.test(t[0]) &&
                      /top|bottom|center|Object/.test(t[1])
                    )
                      return t.map(function (u) {
                        return "object" == typeof u ? u : T[u];
                      });
                  }
                }
              }
              function f(e) {
                var n = r.consumeRepeated(S, /^/, e);
                if (n) {
                  for (
                    var i = n[0],
                      t = [{ "%": 50 }, { "%": 50 }],
                      o = 0,
                      u = !1,
                      v = 0;
                    v < i.length;
                    v++
                  ) {
                    var b = i[v];
                    "string" == typeof b
                      ? ((u = /bottom|right/.test(b)),
                        (t[
                          (o = {
                            left: 0,
                            right: 0,
                            center: o,
                            top: 1,
                            bottom: 1,
                          }[b])
                        ] = T[b]),
                        "center" == b && o++)
                      : (u && ((b = M(b))["%"] = (b["%"] || 0) + 100),
                        (t[o] = b),
                        o++,
                        (u = !1));
                  }
                  return [t, n[1]];
                }
              }
              var T = {
                  left: { "%": 0 },
                  center: { "%": 50 },
                  right: { "%": 100 },
                  top: { "%": 0 },
                  bottom: { "%": 100 },
                },
                p = r.mergeNestedRepeated.bind(null, r.mergeDimensions, " ");
              r.addPropertiesHandler(N.bind(null, 3), p, ["transform-origin"]),
                r.addPropertiesHandler(N.bind(null, 2), p, [
                  "perspective-origin",
                ]),
                (r.consumePosition = f),
                (r.mergeOffsetList = p);
              var g = r.mergeNestedRepeated.bind(null, p, ", ");
              r.addPropertiesHandler(
                function (e) {
                  var n = r.consumeRepeated(f, /^,/, e);
                  if (n && "" == n[1]) return n[0];
                },
                g,
                ["background-position", "object-position"]
              );
            })(_e),
            (function (r) {
              var N = r.consumeParenthesised.bind(null, r.parseLengthOrPercent),
                f = r.consumeRepeated.bind(void 0, N, /^/),
                m = r.mergeNestedRepeated.bind(void 0, r.mergeDimensions, " "),
                T = r.mergeNestedRepeated.bind(void 0, m, ",");
              r.addPropertiesHandler(
                function (p) {
                  var g = r.consumeToken(/^circle/, p);
                  if (g && g[0])
                    return ["circle"].concat(
                      r.consumeList(
                        [
                          r.ignore(r.consumeToken.bind(void 0, /^\(/)),
                          N,
                          r.ignore(r.consumeToken.bind(void 0, /^at/)),
                          r.consumePosition,
                          r.ignore(r.consumeToken.bind(void 0, /^\)/)),
                        ],
                        g[1]
                      )
                    );
                  var e = r.consumeToken(/^ellipse/, p);
                  if (e && e[0])
                    return ["ellipse"].concat(
                      r.consumeList(
                        [
                          r.ignore(r.consumeToken.bind(void 0, /^\(/)),
                          f,
                          r.ignore(r.consumeToken.bind(void 0, /^at/)),
                          r.consumePosition,
                          r.ignore(r.consumeToken.bind(void 0, /^\)/)),
                        ],
                        e[1]
                      )
                    );
                  var n = r.consumeToken(/^polygon/, p);
                  return n && n[0]
                    ? ["polygon"].concat(
                        r.consumeList(
                          [
                            r.ignore(r.consumeToken.bind(void 0, /^\(/)),
                            r.optional(
                              r.consumeToken.bind(
                                void 0,
                                /^nonzero\s*,|^evenodd\s*,/
                              ),
                              "nonzero,"
                            ),
                            r.consumeSizePairList,
                            r.ignore(r.consumeToken.bind(void 0, /^\)/)),
                          ],
                          n[1]
                        )
                      )
                    : void 0;
                },
                function (p, g) {
                  if (p[0] === g[0])
                    return "circle" == p[0]
                      ? r.mergeList(p.slice(1), g.slice(1), [
                          "circle(",
                          r.mergeDimensions,
                          " at ",
                          r.mergeOffsetList,
                          ")",
                        ])
                      : "ellipse" == p[0]
                      ? r.mergeList(p.slice(1), g.slice(1), [
                          "ellipse(",
                          r.mergeNonNegativeSizePair,
                          " at ",
                          r.mergeOffsetList,
                          ")",
                        ])
                      : "polygon" == p[0] && p[1] == g[1]
                      ? r.mergeList(p.slice(2), g.slice(2), [
                          "polygon(",
                          p[1],
                          T,
                          ")",
                        ])
                      : void 0;
                },
                ["shape-outside"]
              );
            })(_e),
            (function (r, M) {
              function S(m, T) {
                T.concat([m]).forEach(function (p) {
                  p in document.documentElement.style && (N[m] = p), (f[p] = m);
                });
              }
              var N = {},
                f = {};
              S("transform", ["webkitTransform", "msTransform"]),
                S("transformOrigin", ["webkitTransformOrigin"]),
                S("perspective", ["webkitPerspective"]),
                S("perspectiveOrigin", ["webkitPerspectiveOrigin"]),
                (r.propertyName = function (m) {
                  return N[m] || m;
                }),
                (r.unprefixedPropertyName = function (m) {
                  return f[m] || m;
                });
            })(_e);
        })(),
        (function () {
          if (void 0 === document.createElement("div").animate([]).oncancel) {
            if (window.performance && performance.now)
              var ie = function () {
                return performance.now();
              };
            else
              ie = function () {
                return Date.now();
              };
            var De = function (M, S, N) {
                (this.target = M),
                  (this.currentTime = S),
                  (this.timelineTime = N),
                  (this.type = "cancel"),
                  (this.bubbles = !1),
                  (this.cancelable = !1),
                  (this.currentTarget = M),
                  (this.defaultPrevented = !1),
                  (this.eventPhase = Event.AT_TARGET),
                  (this.timeStamp = Date.now());
              },
              r = window.Element.prototype.animate;
            window.Element.prototype.animate = function (M, S) {
              var N = r.call(this, M, S);
              (N._cancelHandlers = []), (N.oncancel = null);
              var f = N.cancel;
              N.cancel = function () {
                f.call(this);
                var p = new De(this, null, ie()),
                  g = this._cancelHandlers.concat(
                    this.oncancel ? [this.oncancel] : []
                  );
                setTimeout(function () {
                  g.forEach(function (e) {
                    e.call(p.target, p);
                  });
                }, 0);
              };
              var m = N.addEventListener;
              N.addEventListener = function (p, g) {
                "function" == typeof g && "cancel" == p
                  ? this._cancelHandlers.push(g)
                  : m.call(this, p, g);
              };
              var T = N.removeEventListener;
              return (
                (N.removeEventListener = function (p, g) {
                  if ("cancel" == p) {
                    var e = this._cancelHandlers.indexOf(g);
                    e >= 0 && this._cancelHandlers.splice(e, 1);
                  } else T.call(this, p, g);
                }),
                N
              );
            };
          }
        })(),
        (function (ie) {
          var De = document.documentElement,
            r = null,
            M = !1;
          try {
            var N =
              "0" == getComputedStyle(De).getPropertyValue("opacity")
                ? "1"
                : "0";
            ((r = De.animate(
              { opacity: [N, N] },
              { duration: 1 }
            )).currentTime = 0),
              (M = getComputedStyle(De).getPropertyValue("opacity") == N);
          } catch (m) {
          } finally {
            r && r.cancel();
          }
          if (!M) {
            var f = window.Element.prototype.animate;
            window.Element.prototype.animate = function (m, T) {
              return (
                window.Symbol &&
                  Symbol.iterator &&
                  Array.prototype.from &&
                  m[Symbol.iterator] &&
                  (m = Array.from(m)),
                Array.isArray(m) ||
                  null === m ||
                  (m = ie.convertToArrayForm(m)),
                f.call(this, m, T)
              );
            };
          }
        })(je);
    },
  },
  (je) => {
    je((je.s = 7435));
  },
]);
