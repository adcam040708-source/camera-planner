import oe, { useRef as te, useEffect as W, useCallback as et, useState as de } from "react";
import * as m from "three";
import { Controls as tt, Vector3 as $, MOUSE as se, TOUCH as ee, Quaternion as Me, Spherical as Ae, Vector2 as V, Ray as st, Plane as ot, MathUtils as nt } from "three";
function it(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ve = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function rt() {
  if (Oe) return ae;
  Oe = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, n, r) {
    var c = null;
    if (r !== void 0 && (c = "" + r), n.key !== void 0 && (c = "" + n.key), "key" in n) {
      r = {};
      for (var l in n)
        l !== "key" && (r[l] = n[l]);
    } else r = n;
    return n = r.ref, {
      $$typeof: o,
      type: s,
      key: c,
      ref: n !== void 0 ? n : null,
      props: r
    };
  }
  return ae.Fragment = e, ae.jsx = t, ae.jsxs = t, ae;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function at() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    function o(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === ne ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case C:
          return "Fragment";
        case O:
          return "Profiler";
        case k:
          return "StrictMode";
        case y:
          return "Suspense";
        case S:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case v:
            return "Portal";
          case x:
            return g.displayName || "Context";
          case T:
            return (g._context.displayName || "Context") + ".Consumer";
          case P:
            var w = g.render;
            return g = g.displayName, g || (g = w.displayName || w.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case D:
            return w = g.displayName || null, w !== null ? w : o(g.type) || "Memo";
          case N:
            w = g._payload, g = g._init;
            try {
              return o(g(w));
            } catch {
            }
        }
      return null;
    }
    function e(g) {
      return "" + g;
    }
    function t(g) {
      try {
        e(g);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var M = w.error, R = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return M.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), e(g);
      }
    }
    function s(g) {
      if (g === C) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === N)
        return "<...>";
      try {
        var w = o(g);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var g = Y.A;
      return g === null ? null : g.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function c(g) {
      if (X.call(g, "key")) {
        var w = Object.getOwnPropertyDescriptor(g, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function l(g, w) {
      function M() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: M,
        configurable: !0
      });
    }
    function f() {
      var g = o(this.type);
      return J[g] || (J[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function _(g, w, M, R, le, fe) {
      var L = M.ref;
      return g = {
        $$typeof: b,
        type: g,
        key: w,
        props: M,
        _owner: R
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function d(g, w, M, R, le, fe) {
      var L = w.children;
      if (L !== void 0)
        if (R)
          if (ie(L)) {
            for (R = 0; R < L.length; R++)
              p(L[R]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(L);
      if (X.call(w, "key")) {
        L = o(g);
        var Q = Object.keys(w).filter(function(Qe) {
          return Qe !== "key";
        });
        R = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", Ne[L + R] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          L,
          Q,
          L
        ), Ne[L + R] = !0);
      }
      if (L = null, M !== void 0 && (t(M), L = "" + M), c(w) && (t(w.key), L = "" + w.key), "key" in w) {
        M = {};
        for (var ge in w)
          ge !== "key" && (M[ge] = w[ge]);
      } else M = w;
      return L && l(
        M,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), _(
        g,
        L,
        M,
        n(),
        le,
        fe
      );
    }
    function p(g) {
      u(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === N && (g._payload.status === "fulfilled" ? u(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function u(g) {
      return typeof g == "object" && g !== null && g.$$typeof === b;
    }
    var h = oe, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), x = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), Y = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, ie = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var q, J = {}, Ee = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), ke = re(s(r)), Ne = {};
    ce.Fragment = C, ce.jsx = function(g, w, M) {
      var R = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        g,
        w,
        M,
        !1,
        R ? Error("react-stack-top-frame") : Ee,
        R ? re(s(g)) : ke
      );
    }, ce.jsxs = function(g, w, M) {
      var R = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        g,
        w,
        M,
        !0,
        R ? Error("react-stack-top-frame") : Ee,
        R ? re(s(g)) : ke
      );
    };
  }()), ce;
}
process.env.NODE_ENV === "production" ? ve.exports = rt() : ve.exports = at();
var i = ve.exports;
const Ie = { type: "change" }, we = { type: "start" }, Ze = { type: "end" }, pe = new st(), Re = new ot(), ct = Math.cos(70 * nt.DEG2RAD), G = new $(), F = 2 * Math.PI, E = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, _e = 1e-6;
class lt extends tt {
  constructor(e, t = null) {
    super(e, t), this.state = E.NONE, this.enabled = !0, this.target = new $(), this.cursor = new $(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: se.ROTATE, MIDDLE: se.DOLLY, RIGHT: se.PAN }, this.touches = { ONE: ee.ROTATE, TWO: ee.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new $(), this._lastQuaternion = new Me(), this._lastTargetPosition = new $(), this._quat = new Me().setFromUnitVectors(e.up, new $(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Ae(), this._sphericalDelta = new Ae(), this._scale = 1, this._panOffset = new $(), this._rotateStart = new V(), this._rotateEnd = new V(), this._rotateDelta = new V(), this._panStart = new V(), this._panEnd = new V(), this._panDelta = new V(), this._dollyStart = new V(), this._dollyEnd = new V(), this._dollyDelta = new V(), this._dollyDirection = new $(), this._mouse = new V(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = ht.bind(this), this._onPointerDown = pt.bind(this), this._onPointerUp = dt.bind(this), this._onContextMenu = bt.bind(this), this._onMouseWheel = ft.bind(this), this._onKeyDown = gt.bind(this), this._onTouchStart = _t.bind(this), this._onTouchMove = yt.bind(this), this._onMouseDown = ut.bind(this), this._onMouseMove = mt.bind(this), this._interceptControlDown = jt.bind(this), this._interceptControlUp = xt.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Ie), this.update(), this.state = E.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    G.copy(t).sub(this.target), G.applyQuaternion(this._quat), this._spherical.setFromVector3(G), this.autoRotate && this.state === E.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, n = this.maxAzimuthAngle;
    isFinite(s) && isFinite(n) && (s < -Math.PI ? s += F : s > Math.PI && (s -= F), n < -Math.PI ? n += F : n > Math.PI && (n -= F), s <= n ? this._spherical.theta = Math.max(s, Math.min(n, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + n) / 2 ? Math.max(s, this._spherical.theta) : Math.min(n, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const c = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = c != this._spherical.radius;
    }
    if (G.setFromSpherical(this._spherical), G.applyQuaternion(this._quatInverse), t.copy(this.target).add(G), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let c = null;
      if (this.object.isPerspectiveCamera) {
        const l = G.length();
        c = this._clampDistance(l * this._scale);
        const f = l - c;
        this.object.position.addScaledVector(this._dollyDirection, f), this.object.updateMatrixWorld(), r = !!f;
      } else if (this.object.isOrthographicCamera) {
        const l = new $(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object);
        const f = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = f !== this.object.zoom;
        const _ = new $(this._mouse.x, this._mouse.y, 0);
        _.unproject(this.object), this.object.position.sub(_).add(l), this.object.updateMatrixWorld(), c = G.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      c !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position) : (pe.origin.copy(this.object.position), pe.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(pe.direction)) < ct ? this.object.lookAt(this.target) : (Re.setFromNormalAndCoplanarPoint(this.object.up, this.target), pe.intersectPlane(Re, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const c = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), c !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > _e || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _e || this._lastTargetPosition.distanceToSquared(this.target) > _e ? (this.dispatchEvent(Ie), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? F / 60 * this.autoRotateSpeed * e : F / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    G.setFromMatrixColumn(t, 0), G.multiplyScalar(-e), this._panOffset.add(G);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? G.setFromMatrixColumn(t, 1) : (G.setFromMatrixColumn(t, 0), G.crossVectors(this.object.up, G)), G.multiplyScalar(e), this._panOffset.add(G);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const n = this.object.position;
      G.copy(n).sub(this.target);
      let r = G.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / s.clientHeight, this.object.matrix), this._panUp(2 * t * r / s.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const s = this.domElement.getBoundingClientRect(), n = e - s.left, r = t - s.top, c = s.width, l = s.height;
    this._mouse.x = n / c * 2 - 1, this._mouse.y = -(r / l) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(F * this._rotateDelta.x / t.clientHeight), this._rotateUp(F * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(F * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-F * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(F * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-F * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(s, n);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._panStart.set(s, n);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, n = e.pageY - t.y, r = Math.sqrt(s * s + n * n);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const s = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + s.x), r = 0.5 * (e.pageY + s.y);
      this._rotateEnd.set(n, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(F * this._rotateDelta.x / t.clientHeight), this._rotateUp(F * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._panEnd.set(s, n);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, n = e.pageY - t.y, r = Math.sqrt(s * s + n * n);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const c = (e.pageX + t.x) * 0.5, l = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(c, l);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new V(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, s = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        s.deltaY *= 16;
        break;
      case 2:
        s.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
  }
}
function pt(o) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(o.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(o) && (this._addPointer(o), o.pointerType === "touch" ? this._onTouchStart(o) : this._onMouseDown(o)));
}
function ht(o) {
  this.enabled !== !1 && (o.pointerType === "touch" ? this._onTouchMove(o) : this._onMouseMove(o));
}
function dt(o) {
  switch (this._removePointer(o), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(o.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Ze), this.state = E.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function ut(o) {
  let e;
  switch (o.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case se.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(o), this.state = E.DOLLY;
      break;
    case se.ROTATE:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = E.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = E.ROTATE;
      }
      break;
    case se.PAN:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = E.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = E.PAN;
      }
      break;
    default:
      this.state = E.NONE;
  }
  this.state !== E.NONE && this.dispatchEvent(we);
}
function mt(o) {
  switch (this.state) {
    case E.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(o);
      break;
    case E.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(o);
      break;
    case E.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(o);
      break;
  }
}
function ft(o) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== E.NONE || (o.preventDefault(), this.dispatchEvent(we), this._handleMouseWheel(this._customWheelEvent(o)), this.dispatchEvent(Ze));
}
function gt(o) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(o);
}
function _t(o) {
  switch (this._trackPointer(o), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ee.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(o), this.state = E.TOUCH_ROTATE;
          break;
        case ee.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(o), this.state = E.TOUCH_PAN;
          break;
        default:
          this.state = E.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ee.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(o), this.state = E.TOUCH_DOLLY_PAN;
          break;
        case ee.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(o), this.state = E.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = E.NONE;
      }
      break;
    default:
      this.state = E.NONE;
  }
  this.state !== E.NONE && this.dispatchEvent(we);
}
function yt(o) {
  switch (this._trackPointer(o), this.state) {
    case E.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(o), this.update();
      break;
    case E.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(o), this.update();
      break;
    case E.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(o), this.update();
      break;
    case E.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(o), this.update();
      break;
    default:
      this.state = E.NONE;
  }
}
function bt(o) {
  this.enabled !== !1 && o.preventDefault();
}
function jt(o) {
  o.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function xt(o) {
  o.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class vt {
  constructor(e) {
    this.animationId = null, this.gridHelper = null, this.axesHelper = null, this.frameCallbacks = [];
    const {
      container: t,
      antialias: s = !0,
      shadows: n = !0,
      backgroundColor: r = 657940,
      gridSize: c = 20,
      showGrid: l = !0,
      showAxes: f = !0
    } = e;
    this.container = t, this.clock = new m.Clock(), this.scene = new m.Scene(), this.scene.background = new m.Color(r), this.scene.fog = new m.FogExp2(r, 0.015);
    const _ = t.clientWidth / t.clientHeight || 1;
    this.camera = new m.PerspectiveCamera(55, _, 0.1, 500), this.camera.position.set(12, 10, 12), this.camera.lookAt(0, 0, 0), this.renderer = new m.WebGLRenderer({
      antialias: s,
      preserveDrawingBuffer: !0
      // needed for PNG export
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(t.clientWidth, t.clientHeight), n && (this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = m.PCFSoftShadowMap), t.appendChild(this.renderer.domElement), this.controls = new lt(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.08, this.controls.maxPolarAngle = Math.PI * 0.48, this.controls.minDistance = 2, this.controls.maxDistance = 80, l && (this.gridHelper = new m.GridHelper(c, c, 1973816, 1315882), this.scene.add(this.gridHelper)), f && (this.axesHelper = new m.AxesHelper(3), this.scene.add(this.axesHelper));
    const d = new m.AmbientLight(4210784, 0.3);
    this.scene.add(d), this.resizeObserver = new ResizeObserver(() => this.onResize()), this.resizeObserver.observe(t);
  }
  /** Start the animation loop */
  start() {
    if (this.animationId !== null) return;
    this.clock.start();
    const e = () => {
      this.animationId = requestAnimationFrame(e);
      const t = this.clock.getDelta();
      this.frameCallbacks.forEach((s) => s(t)), this.controls.update(), this.renderer.render(this.scene, this.camera);
    };
    e();
  }
  /** Stop the animation loop */
  stop() {
    this.animationId !== null && (cancelAnimationFrame(this.animationId), this.animationId = null);
  }
  /** Register a callback to run every frame */
  onFrame(e) {
    return this.frameCallbacks.push(e), () => {
      const t = this.frameCallbacks.indexOf(e);
      t >= 0 && this.frameCallbacks.splice(t, 1);
    };
  }
  /** Toggle grid visibility */
  setGridVisible(e) {
    this.gridHelper && (this.gridHelper.visible = e);
  }
  /** Toggle axes visibility */
  setAxesVisible(e) {
    this.axesHelper && (this.axesHelper.visible = e);
  }
  /** Export current viewport as PNG data URL */
  exportPNG() {
    return this.renderer.render(this.scene, this.camera), this.renderer.domElement.toDataURL("image/png");
  }
  /** Export current viewport as PNG Blob */
  exportPNGBlob() {
    return new Promise((e) => {
      this.renderer.render(this.scene, this.camera), this.renderer.domElement.toBlob((t) => e(t), "image/png");
    });
  }
  /** Get the canvas element */
  getCanvas() {
    return this.renderer.domElement;
  }
  /** Clean up all resources */
  dispose() {
    this.stop(), this.resizeObserver.disconnect(), this.controls.dispose(), this.renderer.dispose(), this.frameCallbacks = [], this.renderer.domElement.parentElement && this.renderer.domElement.parentElement.removeChild(this.renderer.domElement), this.scene.traverse((e) => {
      e instanceof m.Mesh && (e.geometry.dispose(), Array.isArray(e.material) ? e.material.forEach((t) => t.dispose()) : e.material.dispose());
    });
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    e === 0 || t === 0 || (this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t));
  }
}
const Te = [
  { name: "full_frame", label: "全画幅 (Full Frame)", w: 36, h: 24 },
  { name: "arri_alexa35", label: "ARRI Alexa 35", w: 29.9, h: 22.2 },
  { name: "red_raptor", label: "RED V-Raptor", w: 40.96, h: 21.6 },
  { name: "sony_fx6", label: "Sony FX6", w: 35.7, h: 23.8 },
  { name: "canon_c70", label: "Canon C70 (Super35)", w: 26.2, h: 13.8 },
  { name: "bmpcc_6k", label: "BMPCC 6K (Super35)", w: 23.1, h: 12.95 },
  { name: "mft", label: "MFT (Micro Four Thirds)", w: 17.3, h: 13 }
];
function me(o, e) {
  return e <= 0 || o <= 0 ? 0 : 2 * Math.atan(o / (2 * e)) * (180 / Math.PI);
}
function Se(o, e, t, s, n = 0.03) {
  if (o <= 0 || e <= 0 || t <= 0 || s <= 0)
    return { near: 0, far: 1 / 0, range: 1 / 0 };
  const r = 24 / s, c = n / r, l = o * o / (e * c * 1e3), f = o / 1e3, _ = t * (l - f) / (l + t - 2 * f), d = t * (l - f) / (l - t);
  return {
    near: Math.max(0, _),
    far: d < 0 ? 1 / 0 : d,
    // negative means beyond hyperfocal
    range: d < 0 ? 1 / 0 : d - _
  };
}
function bn(o, e) {
  const t = Te.find((s) => s.name === o);
  return t ? me(t.h, e) : 0;
}
function H(o) {
  return o * (Math.PI / 180);
}
function jn(o) {
  return o * (180 / Math.PI);
}
function K() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}
function St(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function z(o, e, t) {
  return o + (e - o) * St(t, 0, 1);
}
function Pe(o) {
  return o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2;
}
function Ct(o, e) {
  if (o.length === 0) return null;
  if (o.length === 1)
    return {
      position: { ...o[0].position },
      rotation: { ...o[0].rotation },
      action: o[0].action
    };
  let t = 0;
  for (; t < o.length - 1 && !(o[t + 1].time >= e); t++)
    ;
  t = Math.min(t, o.length - 2);
  const s = o[t], n = o[t + 1], r = n.time - s.time, c = r > 0 ? (e - s.time) / r : 0, l = Pe(c);
  return {
    position: {
      x: z(s.position.x, n.position.x, l),
      y: z(s.position.y, n.position.y, l),
      z: z(s.position.z, n.position.z, l)
    },
    rotation: {
      yaw: z(s.rotation.yaw, n.rotation.yaw, l),
      pitch: z(s.rotation.pitch, n.rotation.pitch, l),
      roll: z(s.rotation.roll, n.rotation.roll, l)
    },
    action: c < 0.5 ? s.action : n.action
  };
}
const wt = 8160255, Tt = 16767293;
class Pt {
  constructor(e) {
    this.cameras = /* @__PURE__ */ new Map(), this.selectedId = null, this.scene = e;
  }
  /** Add a new camera to the scene */
  addCamera(e = {}) {
    const t = e.id || K(), s = Te.find((c) => c.name === "full_frame"), n = {
      id: t,
      name: e.name || `CAM-${this.cameras.size + 1}`,
      focal: e.focal || 50,
      sensorW: e.sensorW || s.w,
      sensorH: e.sensorH || s.h,
      fstop: e.fstop || 2.8,
      focusDist: e.focusDist || 5,
      height: e.height || 1.6,
      position: e.position || { x: 0, y: 1.6, z: 5 },
      rotation: e.rotation || { yaw: 0, pitch: 0, roll: 0 },
      fov: 0,
      dof: { near: 0, far: 1 / 0, range: 1 / 0 },
      color: e.color || wt,
      movement: e.movement,
      script: e.script
    };
    n.fov = me(n.sensorH, n.focal), n.dof = Se(n.focal, n.fstop, n.focusDist, n.sensorH);
    const r = this.createCameraMesh(n);
    return this.scene.add(r), this.cameras.set(t, { camera: n, group: r }), n;
  }
  /** Update camera parameters and refresh 3D visualization */
  updateCamera(e, t) {
    const s = this.cameras.get(e);
    return s ? (Object.assign(s.camera, t), s.camera.fov = me(s.camera.sensorH, s.camera.focal), s.camera.dof = Se(
      s.camera.focal,
      s.camera.fstop,
      s.camera.focusDist,
      s.camera.sensorH
    ), this.scene.remove(s.group), s.group = this.createCameraMesh(s.camera), this.scene.add(s.group), e === this.selectedId && this.highlightCamera(e), s.camera) : null;
  }
  /** Delete a camera */
  deleteCamera(e) {
    const t = this.cameras.get(e);
    return t ? (this.scene.remove(t.group), t.group.traverse((s) => {
      s instanceof m.Mesh && (s.geometry.dispose(), Array.isArray(s.material) ? s.material.forEach((n) => n.dispose()) : s.material.dispose());
    }), this.cameras.delete(e), this.selectedId === e && (this.selectedId = null), !0) : !1;
  }
  /** Select a camera by ID */
  selectCamera(e) {
    this.selectedId && this.highlightCamera(this.selectedId, !1), this.selectedId = e, e && this.highlightCamera(e, !0);
  }
  /** Get selected camera ID */
  getSelectedId() {
    return this.selectedId;
  }
  /** Get camera data by ID */
  getCamera(e) {
    var t;
    return ((t = this.cameras.get(e)) == null ? void 0 : t.camera) || null;
  }
  /** Get all cameras */
  getAllCameras() {
    return Array.from(this.cameras.values()).map((e) => e.camera);
  }
  /** Get 3D group for a camera (used by RayPicker) */
  getMeshGroup(e) {
    var t;
    return ((t = this.cameras.get(e)) == null ? void 0 : t.group) || null;
  }
  /** Get all mesh groups (used by RayPicker) */
  getAllMeshGroups() {
    return Array.from(this.cameras.values()).map((e) => e.group);
  }
  /** Set camera position directly (e.g., from drag) */
  setCameraPosition(e, t) {
    const s = this.cameras.get(e);
    s && (s.camera.position = t, s.group.position.set(t.x, t.y, t.z));
  }
  /** Set camera rotation (e.g., from property panel) */
  setCameraRotation(e, t) {
    const s = this.cameras.get(e);
    s && (s.camera.rotation = t, s.group.rotation.set(
      H(t.pitch),
      H(t.yaw),
      H(t.roll)
    ));
  }
  /** Clear all cameras */
  clearAll() {
    for (const [e] of this.cameras)
      this.deleteCamera(e);
  }
  // --- Private helpers ---
  createCameraMesh(e) {
    const t = new m.Group();
    t.userData = { cameraId: e.id };
    const s = new m.BoxGeometry(0.3, 0.2, 0.4), n = new m.MeshStandardMaterial({
      color: e.color,
      metalness: 0.6,
      roughness: 0.3
    }), r = new m.Mesh(s, n);
    r.castShadow = !0, r.userData = { cameraId: e.id, part: "body" }, t.add(r);
    const c = new m.CylinderGeometry(0.08, 0.12, 0.2, 16), l = new m.MeshStandardMaterial({
      color: 2236962,
      metalness: 0.8,
      roughness: 0.2
    }), f = new m.Mesh(c, l);
    f.rotation.x = Math.PI / 2, f.position.z = 0.3, f.userData = { cameraId: e.id, part: "lens" }, t.add(f);
    const _ = H(e.fov / 2), d = 3, p = d * Math.tan(_), u = new m.ConeGeometry(p, d, 4, 1, !0), h = new m.MeshBasicMaterial({
      color: e.color,
      transparent: !0,
      opacity: 0.08,
      side: m.DoubleSide,
      depthWrite: !1
    }), b = new m.Mesh(u, h);
    b.rotation.x = Math.PI / 2, b.position.z = d / 2 + 0.3, b.userData = { cameraId: e.id, part: "cone" }, t.add(b);
    const v = new m.ConeGeometry(p, d, 4, 1, !0), C = new m.MeshBasicMaterial({
      color: e.color,
      wireframe: !0,
      transparent: !0,
      opacity: 0.3
    }), k = new m.Mesh(v, C);
    return k.rotation.x = Math.PI / 2, k.position.z = d / 2 + 0.3, k.userData = { cameraId: e.id, part: "wire" }, t.add(k), t.position.set(e.position.x, e.position.y, e.position.z), t.rotation.set(
      H(e.rotation.pitch),
      H(e.rotation.yaw),
      H(e.rotation.roll)
    ), t;
  }
  highlightCamera(e, t = !0) {
    const s = this.cameras.get(e);
    if (!s) return;
    const n = t ? Tt : s.camera.color;
    s.group.traverse((r) => {
      r instanceof m.Mesh && r.userData.part === "body" && r.material.color.setHex(n), r instanceof m.Mesh && (r.userData.part === "cone" || r.userData.part === "wire") && r.material.color.setHex(n);
    });
  }
}
class Et {
  constructor(e) {
    this.objects = /* @__PURE__ */ new Map(), this.scene = e;
  }
  /** Add an object to the scene */
  addObject(e) {
    const t = e.id || K(), s = {
      id: t,
      type: e.type,
      position: e.position || { x: 0, y: 0, z: 0 },
      rotation: e.rotation || { yaw: 0, pitch: 0, roll: 0 },
      scale: e.scale || { x: 1, y: 1, z: 1 },
      color: e.color || 8947848
    }, n = this.createMesh(s);
    return n.userData = { objectId: t, objectType: s.type }, this.scene.add(n), this.objects.set(t, { data: s, mesh: n }), s;
  }
  /** Update an existing object */
  updateObject(e, t) {
    const s = this.objects.get(e);
    if (!s) return null;
    Object.assign(s.data, t), this.scene.remove(s.mesh);
    const n = this.createMesh(s.data);
    return n.userData = { objectId: e, objectType: s.data.type }, this.scene.add(n), s.mesh = n, s.data;
  }
  /** Delete an object */
  deleteObject(e) {
    const t = this.objects.get(e);
    return t ? (this.scene.remove(t.mesh), t.mesh.traverse((s) => {
      s instanceof m.Mesh && (s.geometry.dispose(), Array.isArray(s.material) ? s.material.forEach((n) => n.dispose()) : s.material.dispose());
    }), this.objects.delete(e), !0) : !1;
  }
  /** Get all objects */
  getAllObjects() {
    return Array.from(this.objects.values()).map((e) => e.data);
  }
  /** Get object by ID */
  getObject(e) {
    var t;
    return ((t = this.objects.get(e)) == null ? void 0 : t.data) || null;
  }
  /** Get mesh for raycasting */
  getMesh(e) {
    var t;
    return ((t = this.objects.get(e)) == null ? void 0 : t.mesh) || null;
  }
  /** Get all meshes for raycasting */
  getAllMeshes() {
    return Array.from(this.objects.values()).map((e) => e.mesh);
  }
  /** Clear all objects */
  clearAll() {
    for (const [e] of this.objects)
      this.deleteObject(e);
  }
  // --- Private: mesh factory ---
  createMesh(e) {
    const t = new m.MeshStandardMaterial({
      color: e.color,
      roughness: 0.7,
      metalness: 0.1
    });
    let s;
    switch (e.type) {
      case "box":
        s = new m.BoxGeometry(1, 1, 1);
        break;
      case "sphere":
        s = new m.SphereGeometry(0.5, 24, 24);
        break;
      case "cone":
        s = new m.ConeGeometry(0.5, 1, 16);
        break;
      case "cylinder":
        s = new m.CylinderGeometry(0.5, 0.5, 1, 16);
        break;
      case "torus":
        s = new m.TorusGeometry(0.5, 0.15, 12, 32);
        break;
      case "plane":
        s = new m.PlaneGeometry(1, 1);
        break;
      case "person":
        return this.createPerson(e, t);
      case "building":
        return this.createBuilding(e, t);
      case "car":
        return this.createCar(e, t);
      case "tree":
        return this.createTree(e, t);
      case "chair":
        return this.createChair(e, t);
      case "prop":
        s = new m.BoxGeometry(0.3, 0.3, 0.3);
        break;
      default:
        s = new m.BoxGeometry(1, 1, 1);
    }
    const n = new m.Mesh(s, t);
    return n.castShadow = !0, n.receiveShadow = !0, this.applyTransform(n, e), n;
  }
  createPerson(e, t) {
    const s = new m.Group(), n = new m.CylinderGeometry(0.25, 0.2, 1.2, 8), r = new m.Mesh(n, t);
    r.position.y = 0.6, r.castShadow = !0, s.add(r);
    const c = new m.MeshStandardMaterial({ color: 14731424, roughness: 0.8 }), l = new m.SphereGeometry(0.15, 16, 16), f = new m.Mesh(l, c);
    return f.position.y = 1.35, f.castShadow = !0, s.add(f), this.applyTransform(s, e), s;
  }
  createBuilding(e, t) {
    const s = new m.Group(), n = new m.BoxGeometry(1, 1, 1), r = new m.Mesh(n, t);
    r.position.y = 0.5, r.castShadow = !0, r.receiveShadow = !0, s.add(r);
    const c = new m.MeshStandardMaterial({ color: 3359829, metalness: 0.5 });
    for (let l = 0; l < 3; l++)
      for (let f = 0; f < 2; f++) {
        const _ = new m.BoxGeometry(0.2, 0.15, 0.02), d = new m.Mesh(_, c);
        d.position.set(-0.15 + f * 0.3, 0.2 + l * 0.25, 0.51), s.add(d);
      }
    return this.applyTransform(s, e), s;
  }
  createCar(e, t) {
    const s = new m.Group(), n = new m.BoxGeometry(2, 0.6, 1), r = new m.Mesh(n, t);
    r.position.y = 0.4, r.castShadow = !0, s.add(r);
    const c = new m.BoxGeometry(1.2, 0.5, 0.9), l = new m.MeshStandardMaterial({ color: 8956620, metalness: 0.3, roughness: 0.2 }), f = new m.Mesh(c, l);
    f.position.set(-0.1, 0.9, 0), s.add(f);
    const _ = new m.MeshStandardMaterial({ color: 2236962 }), d = new m.CylinderGeometry(0.2, 0.2, 0.1, 16), p = [
      [-0.6, 0.2, 0.55],
      [0.6, 0.2, 0.55],
      [-0.6, 0.2, -0.55],
      [0.6, 0.2, -0.55]
    ];
    for (const [u, h, b] of p) {
      const v = new m.Mesh(d, _);
      v.position.set(u, h, b), v.rotation.x = Math.PI / 2, s.add(v);
    }
    return this.applyTransform(s, e), s;
  }
  createTree(e, t) {
    const s = new m.Group(), n = new m.MeshStandardMaterial({ color: 7029286, roughness: 0.9 }), r = new m.CylinderGeometry(0.1, 0.15, 1.5, 8), c = new m.Mesh(r, n);
    c.position.y = 0.75, c.castShadow = !0, s.add(c);
    const l = new m.SphereGeometry(0.8, 12, 12), f = new m.Mesh(l, t);
    return f.position.y = 2, f.castShadow = !0, s.add(f), this.applyTransform(s, e), s;
  }
  createChair(e, t) {
    const s = new m.Group(), n = new m.MeshStandardMaterial({ color: 3811866, roughness: 0.9 }), r = new m.BoxGeometry(0.5, 0.05, 0.5), c = new m.Mesh(r, t);
    c.position.y = 0.45, c.castShadow = !0, s.add(c);
    const l = new m.BoxGeometry(0.5, 0.5, 0.05), f = new m.Mesh(l, t);
    f.position.set(0, 0.7, -0.225), f.castShadow = !0, s.add(f);
    const _ = new m.CylinderGeometry(0.02, 0.02, 0.45, 6), d = [
      [-0.2, 0.225, -0.2],
      [0.2, 0.225, -0.2],
      [-0.2, 0.225, 0.2],
      [0.2, 0.225, 0.2]
    ];
    for (const [p, u, h] of d) {
      const b = new m.Mesh(_, n);
      b.position.set(p, u, h), b.castShadow = !0, s.add(b);
    }
    return this.applyTransform(s, e), s;
  }
  applyTransform(e, t) {
    e.position.set(t.position.x, t.position.y, t.position.z), e.rotation.set(
      H(t.rotation.pitch),
      H(t.rotation.yaw),
      H(t.rotation.roll)
    ), e.scale.set(t.scale.x, t.scale.y, t.scale.z);
  }
}
const kt = [
  {
    name: "daylight",
    label: "日光",
    color: 16774624,
    intensity: 1.2,
    position: { x: 10, y: 20, z: 10 }
  },
  {
    name: "indoor",
    label: "室内",
    color: 16772829,
    intensity: 0.8,
    position: { x: 0, y: 8, z: 0 }
  },
  {
    name: "night",
    label: "夜景",
    color: 4482730,
    intensity: 0.4,
    position: { x: -5, y: 15, z: -5 }
  },
  {
    name: "soft",
    label: "柔和",
    color: 16777215,
    intensity: 0.6,
    position: { x: 3, y: 12, z: 8 }
  },
  {
    name: "dramatic",
    label: "戏剧",
    color: 16746564,
    intensity: 1.5,
    position: { x: -8, y: 6, z: -3 }
  }
];
class Nt {
  constructor(e) {
    this.helper = null, this.scene = e, this.mainLight = new m.DirectionalLight(16774624, 1.2), this.mainLight.position.set(10, 20, 10), this.mainLight.castShadow = !0, this.mainLight.shadow.mapSize.width = 2048, this.mainLight.shadow.mapSize.height = 2048, this.mainLight.shadow.camera.near = 0.5, this.mainLight.shadow.camera.far = 60, this.mainLight.shadow.camera.left = -20, this.mainLight.shadow.camera.right = 20, this.mainLight.shadow.camera.top = 20, this.mainLight.shadow.camera.bottom = -20, e.add(this.mainLight), this.fillLight = new m.PointLight(6719692, 0.3, 50), this.fillLight.position.set(-8, 8, -8), e.add(this.fillLight), this.config = {
      position: { x: 10, y: 20, z: 10 },
      intensity: 1.2,
      color: 16774624,
      preset: "daylight"
    };
  }
  /** Apply a named preset */
  applyPreset(e) {
    const t = kt.find((s) => s.name === e);
    t && (this.config = {
      position: { ...t.position },
      intensity: t.intensity,
      color: t.color,
      preset: e
    }, this.mainLight.position.set(t.position.x, t.position.y, t.position.z), this.mainLight.intensity = t.intensity, this.mainLight.color.setHex(t.color));
  }
  /** Update lighting config */
  update(e) {
    return e.position && (this.config.position = e.position, this.mainLight.position.set(e.position.x, e.position.y, e.position.z)), e.intensity !== void 0 && (this.config.intensity = e.intensity, this.mainLight.intensity = e.intensity), e.color !== void 0 && (this.config.color = e.color, this.mainLight.color.setHex(e.color)), e.preset && (this.config.preset = e.preset), { ...this.config };
  }
  /** Get current config */
  getConfig() {
    return { ...this.config };
  }
  /** Show/hide light helper in scene */
  setHelperVisible(e) {
    e && !this.helper && (this.helper = new m.DirectionalLightHelper(this.mainLight, 2), this.scene.add(this.helper)), this.helper && (this.helper.visible = e);
  }
  /** Clean up */
  dispose() {
    this.helper && (this.scene.remove(this.helper), this.helper.dispose()), this.scene.remove(this.mainLight), this.scene.remove(this.fillLight);
  }
}
class Mt {
  constructor(e) {
    this.keyframes = [], this.line = null, this.markers = [], this.scene = e;
  }
  /** Add a keyframe */
  addKeyframe(e) {
    const t = {
      id: e.id || K(),
      position: e.position,
      rotation: e.rotation || { yaw: 0, pitch: 0, roll: 0 },
      cameraId: e.cameraId,
      t: e.t ?? this.keyframes.length / Math.max(1, this.keyframes.length)
    };
    return this.keyframes.push(t), this.refreshVisualization(), t;
  }
  /** Remove a keyframe */
  removeKeyframe(e) {
    const t = this.keyframes.findIndex((s) => s.id === e);
    return t < 0 ? !1 : (this.keyframes.splice(t, 1), this.recalcT(), this.refreshVisualization(), !0);
  }
  /** Get all keyframes */
  getKeyframes() {
    return [...this.keyframes];
  }
  /** Clear all keyframes */
  clearAll() {
    this.keyframes = [], this.refreshVisualization();
  }
  /** Get interpolated position and rotation at time t (0-1) */
  sample(e) {
    if (this.keyframes.length < 2) return null;
    const t = Pe(e);
    let s = 0;
    for (; s < this.keyframes.length - 1 && !(this.keyframes[s + 1].t >= t); s++)
      ;
    s = Math.min(s, this.keyframes.length - 2);
    const n = this.keyframes[s], r = this.keyframes[s + 1], c = r.t - n.t > 0 ? (t - n.t) / (r.t - n.t) : 0;
    return {
      position: {
        x: z(n.position.x, r.position.x, c),
        y: z(n.position.y, r.position.y, c),
        z: z(n.position.z, r.position.z, c)
      },
      rotation: {
        yaw: z(n.rotation.yaw, r.rotation.yaw, c),
        pitch: z(n.rotation.pitch, r.rotation.pitch, c),
        roll: z(n.rotation.roll, r.rotation.roll, c)
      }
    };
  }
  /** Import keyframes from array */
  importKeyframes(e) {
    this.keyframes = e.map((t) => ({ ...t })), this.recalcT(), this.refreshVisualization();
  }
  // --- Private ---
  recalcT() {
    const e = this.keyframes.length;
    this.keyframes.forEach((t, s) => {
      t.t = e > 1 ? s / (e - 1) : 0;
    });
  }
  refreshVisualization() {
    var s, n;
    if (this.line) {
      this.scene.remove(this.line), (s = this.line.geometry) == null || s.dispose();
      const r = this.line.material;
      Array.isArray(r) ? r.forEach((c) => c.dispose()) : r == null || r.dispose(), this.line = null;
    }
    for (const r of this.markers) {
      this.scene.remove(r), (n = r.geometry) == null || n.dispose();
      const c = r.material;
      Array.isArray(c) ? c.forEach((l) => l.dispose()) : c == null || c.dispose();
    }
    if (this.markers = [], this.keyframes.length < 1) return;
    const e = new m.SphereGeometry(0.12, 8, 8), t = new m.MeshBasicMaterial({ color: 16739125 });
    for (const r of this.keyframes) {
      const c = new m.Mesh(e, t);
      c.position.set(r.position.x, r.position.y, r.position.z), this.scene.add(c), this.markers.push(c);
    }
    if (this.keyframes.length >= 2) {
      const r = this.keyframes.map(
        (f) => new m.Vector3(f.position.x, f.position.y, f.position.z)
      ), c = new m.BufferGeometry().setFromPoints(r), l = new m.LineBasicMaterial({
        color: 16739125,
        linewidth: 2
      });
      this.line = new m.Line(c, l), this.scene.add(this.line);
    }
  }
  /** Clean up */
  dispose() {
    this.clearAll();
  }
}
class At {
  constructor(e, t) {
    this.onPickCallback = null, this.onHoverCallback = null, this.isDragging = !1, this.dragTarget = null, this.cameraGroups = [], this.objectMeshes = [], this.actorGroups = [], this.onPointerDown = (s) => {
      this.updateMouse(s);
      const n = this.raycast();
      if (n.target === "camera" || n.target === "object" || n.target === "actor") {
        this.isDragging = !0, this.dragTarget = {
          type: n.target,
          id: n.id
        };
        const r = this.getWorldPosition(n.target, n.id);
        if (r) {
          this.dragPlane.set(new m.Vector3(0, 1, 0), -r.y);
          const c = new m.Vector3();
          this.raycaster.ray.intersectPlane(this.dragPlane, c), this.dragOffset.copy(r).sub(c);
        }
      }
      this.onPickCallback && this.onPickCallback(n);
    }, this.onPointerMove = (s) => {
      if (this.updateMouse(s), this.isDragging && this.dragTarget) {
        const r = new m.Vector3();
        this.raycaster.ray.intersectPlane(this.dragPlane, r), r.add(this.dragOffset), this.onPickCallback && this.onPickCallback({
          target: this.dragTarget.type,
          id: this.dragTarget.id,
          point: r.clone(),
          groundPoint: new m.Vector3(r.x, 0, r.z)
        });
        return;
      }
      const n = this.raycast();
      this.onHoverCallback && this.onHoverCallback(n.target ? n : null);
    }, this.onPointerUp = (s) => {
      this.isDragging = !1, this.dragTarget = null;
    }, this.camera = e, this.scene = t, this.raycaster = new m.Raycaster(), this.mouse = new m.Vector2(), this.groundPlane = new m.Plane(new m.Vector3(0, 1, 0), 0), this.dragPlane = new m.Plane(new m.Vector3(0, 1, 0), 0), this.dragOffset = new m.Vector3();
  }
  /** Set the camera groups that can be picked */
  setCameraGroups(e) {
    this.cameraGroups = e;
  }
  /** Set the object meshes that can be picked */
  setObjectMeshes(e) {
    this.objectMeshes = e;
  }
  /** Set the actor groups that can be picked */
  setActorGroups(e) {
    this.actorGroups = e;
  }
  /** Enable picking on a canvas element */
  enable(e) {
    e.addEventListener("pointerdown", this.onPointerDown), e.addEventListener("pointermove", this.onPointerMove), e.addEventListener("pointerup", this.onPointerUp);
  }
  /** Disable picking */
  disable(e) {
    e.removeEventListener("pointerdown", this.onPointerDown), e.removeEventListener("pointermove", this.onPointerMove), e.removeEventListener("pointerup", this.onPointerUp);
  }
  /** Register pick callback */
  onPick(e) {
    this.onPickCallback = e;
  }
  /** Register hover callback */
  onHover(e) {
    this.onHoverCallback = e;
  }
  updateMouse(e) {
    var s, n;
    const t = (n = (s = e.target).getBoundingClientRect) == null ? void 0 : n.call(s);
    t && (this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera));
  }
  raycast() {
    const e = {
      target: null,
      id: null,
      point: new m.Vector3(),
      groundPoint: null
    }, t = [];
    for (const c of this.cameraGroups)
      c.traverse((l) => {
        l instanceof m.Mesh && t.push(l);
      });
    for (const c of this.objectMeshes)
      c.traverse((l) => {
        l instanceof m.Mesh && t.push(l);
      });
    for (const c of this.actorGroups)
      c.traverse((l) => {
        l instanceof m.Mesh && t.push(l);
      });
    const s = this.raycaster.intersectObjects(t, !1);
    if (s.length > 0) {
      const c = s[0], l = c.object.userData, f = new m.Vector3();
      if (this.raycaster.ray.intersectPlane(this.groundPlane, f), l.cameraId)
        return {
          target: "camera",
          id: l.cameraId,
          point: c.point.clone(),
          groundPoint: f
        };
      if (l.objectId)
        return {
          target: "object",
          id: l.objectId,
          point: c.point.clone(),
          groundPoint: f
        };
      if (l.actorId)
        return {
          target: "actor",
          id: l.actorId,
          point: c.point.clone(),
          groundPoint: f
        };
    }
    const n = new m.Vector3();
    return this.raycaster.ray.intersectPlane(this.groundPlane, n) ? {
      target: "ground",
      id: null,
      point: n.clone(),
      groundPoint: n.clone()
    } : e;
  }
  getWorldPosition(e, t) {
    if (e === "camera") {
      const n = this.cameraGroups.find((r) => r.userData.cameraId === t);
      return n ? n.position.clone() : null;
    }
    if (e === "actor") {
      const n = this.actorGroups.find((r) => r.userData.actorId === t);
      return n ? n.position.clone() : null;
    }
    const s = this.objectMeshes.find((n) => n.userData.objectId === t);
    return s ? s.position.clone() : null;
  }
}
const Ot = 5164484, Dt = 16767293;
class It {
  constructor(e) {
    this.actors = /* @__PURE__ */ new Map(), this.selectedId = null, this.scene = e;
  }
  /** 添加角色 */
  addActor(e = {}) {
    const t = e.id || K(), s = {
      id: t,
      name: e.name || `角色${this.actors.size + 1}`,
      role: e.role || "principal",
      position: e.position || { x: 0, y: 0, z: 0 },
      rotation: e.rotation || { yaw: 0, pitch: 0, roll: 0 },
      height: e.height || 1.7,
      color: e.color ?? Ot,
      keyframes: e.keyframes || []
    }, n = this.createActorMesh(s);
    this.scene.add(n);
    const r = { actor: s, group: n, pathLine: null, pathMarkers: [] };
    return this.actors.set(t, r), this.refreshPath(t), s;
  }
  /** 更新角色 */
  updateActor(e, t) {
    const s = this.actors.get(e);
    if (!s) return null;
    const n = t.height !== void 0 && t.height !== s.actor.height, r = t.color !== void 0 && t.color !== s.actor.color, c = t.position !== void 0, l = t.rotation !== void 0, f = t.keyframes !== void 0;
    return Object.assign(s.actor, t), n || r ? (this.disposeGroup(s.group), this.scene.remove(s.group), s.group = this.createActorMesh(s.actor), this.scene.add(s.group)) : (c && s.group.position.set(s.actor.position.x, s.actor.position.y, s.actor.position.z), l && s.group.rotation.set(0, H(s.actor.rotation.yaw), 0)), (f || c || l) && this.refreshPath(e), e === this.selectedId && this.highlightActor(e, !0), s.actor;
  }
  /** 时间轴播放：更新所有角色在指定时间的位置 */
  updatePlayback(e) {
    for (const [t, s] of this.actors) {
      const n = this.sampleAtTime(t, e);
      n && (s.group.position.set(n.position.x, n.position.y, n.position.z), s.group.rotation.set(0, H(n.rotation.yaw), 0));
    }
  }
  /** 释放Group内所有Mesh的geometry和material */
  disposeGroup(e) {
    e.traverse((t) => {
      var s;
      if (t instanceof m.Mesh) {
        (s = t.geometry) == null || s.dispose();
        const n = t.material;
        Array.isArray(n) ? n.forEach((r) => r.dispose()) : n == null || n.dispose();
      }
    });
  }
  /** 删除角色 */
  deleteActor(e) {
    const t = this.actors.get(e);
    return t ? (this.disposeGroup(t.group), this.scene.remove(t.group), this.clearPath(t), this.actors.delete(e), this.selectedId === e && (this.selectedId = null), !0) : !1;
  }
  /** 选中角色 */
  selectActor(e) {
    this.selectedId && this.highlightActor(this.selectedId, !1), this.selectedId = e, e && this.highlightActor(e, !0);
  }
  /** 获取角色数据 */
  getActor(e) {
    var t;
    return ((t = this.actors.get(e)) == null ? void 0 : t.actor) || null;
  }
  /** 获取所有角色 */
  getAllActors() {
    return Array.from(this.actors.values()).map((e) => e.actor);
  }
  /** 获取3D Group（给RayPicker用） */
  getMeshGroup(e) {
    var t;
    return ((t = this.actors.get(e)) == null ? void 0 : t.group) || null;
  }
  /** 获取所有Mesh Groups */
  getAllMeshGroups() {
    return Array.from(this.actors.values()).map((e) => e.group);
  }
  /** 添加关键帧 */
  addKeyframe(e, t) {
    const s = this.actors.get(e);
    if (!s) return null;
    const n = {
      id: t.id || K(),
      time: t.time ?? 0,
      position: t.position,
      rotation: t.rotation || { yaw: 0, pitch: 0, roll: 0 },
      action: t.action || "stand"
    };
    return s.actor.keyframes.push(n), s.actor.keyframes.sort((r, c) => r.time - c.time), this.refreshPath(e), n;
  }
  /** 删除关键帧 */
  removeKeyframe(e, t) {
    const s = this.actors.get(e);
    if (!s) return !1;
    const n = s.actor.keyframes.length;
    return s.actor.keyframes = s.actor.keyframes.filter((r) => r.id !== t), s.actor.keyframes.length === n ? !1 : (this.refreshPath(e), !0);
  }
  /** 获取某时间点的插值位置（播放用） */
  sampleAtTime(e, t) {
    const s = this.actors.get(e);
    if (!s || s.actor.keyframes.length === 0) return null;
    const n = s.actor.keyframes;
    if (n.length === 1)
      return {
        position: n[0].position,
        rotation: n[0].rotation,
        action: n[0].action
      };
    let r = 0;
    for (; r < n.length - 1 && !(n[r + 1].time >= t); r++)
      ;
    r = Math.min(r, n.length - 2);
    const c = n[r], l = n[r + 1], f = l.time - c.time, _ = f > 0 ? (t - c.time) / f : 0, d = Pe(_);
    return {
      position: {
        x: z(c.position.x, l.position.x, d),
        y: z(c.position.y, l.position.y, d),
        z: z(c.position.z, l.position.z, d)
      },
      rotation: {
        yaw: z(c.rotation.yaw, l.rotation.yaw, d),
        pitch: z(c.rotation.pitch, l.rotation.pitch, d),
        roll: z(c.rotation.roll, l.rotation.roll, d)
      },
      action: _ < 0.5 ? c.action : l.action
    };
  }
  /** 导入角色列表（批量） */
  importActors(e) {
    this.clearAll();
    for (const t of e)
      this.addActor(t);
  }
  /** 清空 */
  clearAll() {
    for (const [e] of this.actors)
      this.deleteActor(e);
  }
  // --- Private ---
  /** 创建角色3D实体 */
  createActorMesh(e) {
    const t = new m.Group();
    t.userData = { actorId: e.id, type: "actor" };
    const s = e.height, n = e.color, r = new m.CapsuleGeometry(0.25, s * 0.5, 4, 8), c = new m.MeshStandardMaterial({
      color: n,
      metalness: 0.1,
      roughness: 0.7
    }), l = new m.Mesh(r, c);
    l.position.y = s * 0.4, l.castShadow = !0, l.userData = { actorId: e.id, part: "body" }, t.add(l);
    const f = new m.SphereGeometry(0.18, 16, 16), _ = new m.MeshStandardMaterial({
      color: 16767916,
      roughness: 0.6
    }), d = new m.Mesh(f, _);
    d.position.y = s - 0.15, d.castShadow = !0, d.userData = { actorId: e.id, part: "head" }, t.add(d);
    const p = new m.ConeGeometry(0.08, 0.25, 4), u = new m.MeshBasicMaterial({ color: n }), h = new m.Mesh(p, u);
    return h.rotation.x = Math.PI / 2, h.position.set(0, s * 0.4, 0.3), h.userData = { actorId: e.id, part: "arrow" }, t.add(h), t.position.set(e.position.x, e.position.y, e.position.z), t.rotation.set(0, H(e.rotation.yaw), 0), t;
  }
  /** 刷新路径可视化 */
  refreshPath(e) {
    const t = this.actors.get(e);
    if (!t) return;
    this.clearPath(t);
    const s = t.actor.keyframes;
    if (s.length === 0) return;
    const n = new m.SphereGeometry(0.1, 8, 8), r = new m.MeshBasicMaterial({ color: t.actor.color });
    for (const c of s) {
      const l = new m.Mesh(n, r);
      l.position.set(c.position.x, c.position.y, c.position.z), l.userData = { actorId: e, keyframeId: c.id, type: "actor-keyframe" }, this.scene.add(l), t.pathMarkers.push(l);
    }
    if (s.length >= 2) {
      const c = s.map((d) => new m.Vector3(d.position.x, d.position.y, d.position.z)), l = new m.BufferGeometry().setFromPoints(c), f = new m.LineDashedMaterial({
        color: t.actor.color,
        dashSize: 0.3,
        gapSize: 0.2
      }), _ = new m.Line(l, f);
      _.computeLineDistances(), this.scene.add(_), t.pathLine = _;
    }
  }
  /** 清除路径可视化 */
  clearPath(e) {
    var t;
    if (e.pathLine) {
      this.scene.remove(e.pathLine), (t = e.pathLine.geometry) == null || t.dispose();
      const s = e.pathLine.material;
      Array.isArray(s) ? s.forEach((n) => n.dispose()) : s == null || s.dispose(), e.pathLine = null;
    }
    if (e.pathMarkers.length > 0) {
      const s = e.pathMarkers[0].geometry, n = e.pathMarkers[0].material;
      for (const r of e.pathMarkers)
        this.scene.remove(r);
      s == null || s.dispose(), Array.isArray(n) ? n.forEach((r) => r.dispose()) : n == null || n.dispose(), e.pathMarkers = [];
    }
  }
  /** 高亮角色 */
  highlightActor(e, t) {
    const s = this.actors.get(e);
    if (!s) return;
    const n = t ? Dt : s.actor.color;
    s.group.traverse((r) => {
      r instanceof m.Mesh && r.userData.part === "body" && r.material.color.setHex(n), r instanceof m.Mesh && r.userData.part === "arrow" && r.material.color.setHex(n);
    });
  }
  /** 释放资源 */
  dispose() {
    this.clearAll();
  }
}
const Rt = {}, Le = (o) => {
  let e;
  const t = /* @__PURE__ */ new Set(), s = (d, p) => {
    const u = typeof d == "function" ? d(e) : d;
    if (!Object.is(u, e)) {
      const h = e;
      e = p ?? (typeof u != "object" || u === null) ? u : Object.assign({}, e, u), t.forEach((b) => b(e, h));
    }
  }, n = () => e, f = { setState: s, getState: n, getInitialState: () => _, subscribe: (d) => (t.add(d), () => t.delete(d)), destroy: () => {
    (Rt ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), t.clear();
  } }, _ = e = o(s, n, f);
  return f;
}, Lt = (o) => o ? Le(o) : Le;
var Ce = { exports: {} }, ye = {}, he = { exports: {} }, be = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Gt() {
  if (Ge) return be;
  Ge = 1;
  var o = oe;
  function e(p, u) {
    return p === u && (p !== 0 || 1 / p === 1 / u) || p !== p && u !== u;
  }
  var t = typeof Object.is == "function" ? Object.is : e, s = o.useState, n = o.useEffect, r = o.useLayoutEffect, c = o.useDebugValue;
  function l(p, u) {
    var h = u(), b = s({ inst: { value: h, getSnapshot: u } }), v = b[0].inst, C = b[1];
    return r(function() {
      v.value = h, v.getSnapshot = u, f(v) && C({ inst: v });
    }, [p, h, u]), n(function() {
      return f(v) && C({ inst: v }), p(function() {
        f(v) && C({ inst: v });
      });
    }, [p]), c(h), h;
  }
  function f(p) {
    var u = p.getSnapshot;
    p = p.value;
    try {
      var h = u();
      return !t(p, h);
    } catch {
      return !0;
    }
  }
  function _(p, u) {
    return u();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : l;
  return be.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, be;
}
var je = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function zt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = oe, e = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(T) {
      {
        for (var x = arguments.length, P = new Array(x > 1 ? x - 1 : 0), y = 1; y < x; y++)
          P[y - 1] = arguments[y];
        s("error", T, P);
      }
    }
    function s(T, x, P) {
      {
        var y = e.ReactDebugCurrentFrame, S = y.getStackAddendum();
        S !== "" && (x += "%s", P = P.concat([S]));
        var D = P.map(function(N) {
          return String(N);
        });
        D.unshift("Warning: " + x), Function.prototype.apply.call(console[T], console, D);
      }
    }
    function n(T, x) {
      return T === x && (T !== 0 || 1 / T === 1 / x) || T !== T && x !== x;
    }
    var r = typeof Object.is == "function" ? Object.is : n, c = o.useState, l = o.useEffect, f = o.useLayoutEffect, _ = o.useDebugValue, d = !1, p = !1;
    function u(T, x, P) {
      d || o.startTransition !== void 0 && (d = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var y = x();
      if (!p) {
        var S = x();
        r(y, S) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
      }
      var D = c({
        inst: {
          value: y,
          getSnapshot: x
        }
      }), N = D[0].inst, U = D[1];
      return f(function() {
        N.value = y, N.getSnapshot = x, h(N) && U({
          inst: N
        });
      }, [T, y, x]), l(function() {
        h(N) && U({
          inst: N
        });
        var ne = function() {
          h(N) && U({
            inst: N
          });
        };
        return T(ne);
      }, [T]), _(y), y;
    }
    function h(T) {
      var x = T.getSnapshot, P = T.value;
      try {
        var y = x();
        return !r(P, y);
      } catch {
        return !0;
      }
    }
    function b(T, x, P) {
      return x();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", C = !v, k = C ? b : u, O = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : k;
    je.useSyncExternalStore = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), je;
}
var Fe;
function Xe() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? he.exports = Gt() : he.exports = zt()), he.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Ft() {
  if (Be) return ye;
  Be = 1;
  var o = oe, e = Xe();
  function t(_, d) {
    return _ === d && (_ !== 0 || 1 / _ === 1 / d) || _ !== _ && d !== d;
  }
  var s = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, r = o.useRef, c = o.useEffect, l = o.useMemo, f = o.useDebugValue;
  return ye.useSyncExternalStoreWithSelector = function(_, d, p, u, h) {
    var b = r(null);
    if (b.current === null) {
      var v = { hasValue: !1, value: null };
      b.current = v;
    } else v = b.current;
    b = l(function() {
      function k(y) {
        if (!O) {
          if (O = !0, T = y, y = u(y), h !== void 0 && v.hasValue) {
            var S = v.value;
            if (h(S, y)) return x = S;
          }
          return x = y;
        }
        if (S = x, s(T, y)) return S;
        var D = u(y);
        return h !== void 0 && h(S, D) ? S : (T = y, x = D);
      }
      var O = !1, T, x, P = p === void 0 ? null : p;
      return [function() {
        return k(d());
      }, P === null ? void 0 : function() {
        return k(P());
      }];
    }, [d, p, u, h]);
    var C = n(_, b[0], b[1]);
    return c(function() {
      v.hasValue = !0, v.value = C;
    }, [C]), f(C), C;
  }, ye;
}
var xe = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Bt() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = oe, e = Xe();
    function t(d, p) {
      return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
    }
    var s = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, r = o.useRef, c = o.useEffect, l = o.useMemo, f = o.useDebugValue;
    function _(d, p, u, h, b) {
      var v = r(null), C;
      v.current === null ? (C = {
        hasValue: !1,
        value: null
      }, v.current = C) : C = v.current;
      var k = l(function() {
        var P = !1, y, S, D = function(Y) {
          if (!P) {
            P = !0, y = Y;
            var X = h(Y);
            if (b !== void 0 && C.hasValue) {
              var ie = C.value;
              if (b(ie, X))
                return S = ie, ie;
            }
            return S = X, X;
          }
          var re = y, q = S;
          if (s(re, Y))
            return q;
          var J = h(Y);
          return b !== void 0 && b(q, J) ? q : (y = Y, S = J, J);
        }, N = u === void 0 ? null : u, U = function() {
          return D(p());
        }, ne = N === null ? void 0 : function() {
          return D(N());
        };
        return [U, ne];
      }, [p, u, h, b]), O = k[0], T = k[1], x = n(d, O, T);
      return c(function() {
        C.hasValue = !0, C.value = x;
      }, [x]), f(x), x;
    }
    xe.useSyncExternalStoreWithSelector = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xe;
}
process.env.NODE_ENV === "production" ? Ce.exports = Ft() : Ce.exports = Bt();
var Ht = Ce.exports;
const Kt = /* @__PURE__ */ it(Ht), qe = {}, { useDebugValue: Vt } = oe, { useSyncExternalStoreWithSelector: $t } = Kt;
let Ke = !1;
const Ut = (o) => o;
function Yt(o, e = Ut, t) {
  (qe ? "production" : void 0) !== "production" && t && !Ke && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ke = !0);
  const s = $t(
    o.subscribe,
    o.getState,
    o.getServerState || o.getInitialState,
    e,
    t
  );
  return Vt(s), s;
}
const Ve = (o) => {
  (qe ? "production" : void 0) !== "production" && typeof o != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof o == "function" ? Lt(o) : o, t = (s, n) => Yt(e, s, n);
  return Object.assign(t, e), t;
}, Wt = (o) => o ? Ve(o) : Ve;
function Zt() {
  return {
    version: "4.0",
    cameras: [],
    actors: [],
    scene: {
      template: "empty",
      objects: [],
      lighting: {
        position: { x: 5, y: 10, z: 5 },
        intensity: 1,
        color: 16777215,
        preset: "daylight"
      }
    },
    path: [],
    storyboard: {
      grid: "3x3",
      cells: []
    },
    timeline: {
      duration: 30,
      currentTime: 0,
      playing: !1,
      keyframes: []
    }
  };
}
const Z = [], ue = [], Je = 50, j = Wt((o, e) => ({
  // Initial state
  project: Zt(),
  mode: "select",
  tool: "camera",
  sideTab: "cameras",
  bottomTab: "timeline",
  selectedCameraId: null,
  selectedObjectId: null,
  selectedActorId: null,
  showGrid: !0,
  showAxes: !0,
  showFovCones: !0,
  // --- Camera actions ---
  addCamera: (t) => o((s) => (B(s.project), {
    project: {
      ...s.project,
      cameras: [...s.project.cameras, t]
    }
  })),
  updateCamera: (t, s) => o((n) => (B(n.project), {
    project: {
      ...n.project,
      cameras: n.project.cameras.map(
        (r) => r.id === t ? { ...r, ...s } : r
      )
    }
  })),
  deleteCamera: (t) => o((s) => (B(s.project), {
    project: {
      ...s.project,
      cameras: s.project.cameras.filter((n) => n.id !== t)
    },
    selectedCameraId: s.selectedCameraId === t ? null : s.selectedCameraId
  })),
  selectCamera: (t) => o({ selectedCameraId: t, selectedObjectId: null }),
  setCameraMovement: (t, s) => o((n) => ({
    project: {
      ...n.project,
      cameras: n.project.cameras.map(
        (r) => r.id === t ? { ...r, movement: s } : r
      )
    }
  })),
  // --- Object actions ---
  addObject: (t) => o((s) => (B(s.project), {
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: [...s.project.scene.objects, t]
      }
    }
  })),
  updateObject: (t, s) => o((n) => ({
    project: {
      ...n.project,
      scene: {
        ...n.project.scene,
        objects: n.project.scene.objects.map(
          (r) => r.id === t ? { ...r, ...s } : r
        )
      }
    }
  })),
  deleteObject: (t) => o((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: s.project.scene.objects.filter((n) => n.id !== t)
      }
    },
    selectedObjectId: s.selectedObjectId === t ? null : s.selectedObjectId
  })),
  selectObject: (t) => o({ selectedObjectId: t, selectedCameraId: null }),
  // --- Scene actions ---
  setSceneConfig: (t) => o((s) => ({
    project: {
      ...s.project,
      scene: { ...s.project.scene, ...t }
    }
  })),
  setLighting: (t) => o((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        lighting: { ...s.project.scene.lighting, ...t }
      }
    }
  })),
  // --- Actor actions ---
  addActor: (t) => o((s) => (B(s.project), {
    project: { ...s.project, actors: [...s.project.actors, t] }
  })),
  updateActor: (t, s) => o((n) => (B(n.project), {
    project: {
      ...n.project,
      actors: n.project.actors.map((r) => r.id === t ? { ...r, ...s } : r)
    }
  })),
  deleteActor: (t) => o((s) => (B(s.project), {
    project: {
      ...s.project,
      actors: s.project.actors.filter((n) => n.id !== t)
    },
    selectedActorId: s.selectedActorId === t ? null : s.selectedActorId
  })),
  selectActor: (t) => o({ selectedActorId: t, selectedCameraId: null, selectedObjectId: null }),
  addActorKeyframe: (t, s) => o((n) => (B(n.project), {
    project: {
      ...n.project,
      actors: n.project.actors.map(
        (r) => r.id === t ? { ...r, keyframes: [...r.keyframes, s].sort((c, l) => c.time - l.time) } : r
      )
    }
  })),
  updateActorKeyframe: (t, s, n) => o((r) => (B(r.project), {
    project: {
      ...r.project,
      actors: r.project.actors.map(
        (c) => c.id === t ? {
          ...c,
          keyframes: c.keyframes.map(
            (l) => l.id === s ? { ...l, ...n } : l
          ).sort((l, f) => l.time - f.time)
        } : c
      )
    }
  })),
  removeActorKeyframe: (t, s) => o((n) => (B(n.project), {
    project: {
      ...n.project,
      actors: n.project.actors.map(
        (r) => r.id === t ? { ...r, keyframes: r.keyframes.filter((c) => c.id !== s) } : r
      )
    }
  })),
  setActorPosition: (t, s) => o((n) => ({
    project: {
      ...n.project,
      actors: n.project.actors.map((r) => r.id === t ? { ...r, position: s } : r)
    }
  })),
  snapshot: () => {
    B(e().project);
  },
  // --- Path actions ---
  setPath: (t) => o((s) => (B(s.project), { project: { ...s.project, path: t } })),
  addPathPoint: (t) => o((s) => (B(s.project), { project: { ...s.project, path: [...s.project.path, t] } })),
  removePathPoint: (t) => o((s) => (B(s.project), { project: { ...s.project, path: s.project.path.filter((n) => n.id !== t) } })),
  // --- Timeline actions ---
  setTimelineTime: (t) => o((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, currentTime: t }
    }
  })),
  setTimelinePlaying: (t) => o((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, playing: t }
    }
  })),
  // --- Storyboard actions ---
  setStoryboardGrid: (t) => o((s) => ({
    project: {
      ...s.project,
      storyboard: { ...s.project.storyboard, grid: t }
    }
  })),
  setStoryboardCell: (t, s) => o((n) => {
    const r = [...n.project.storyboard.cells], c = r.findIndex((l) => l.index === t);
    return c >= 0 ? r[c] = { ...r[c], cameraId: s ?? void 0 } : r.push({ index: t, cameraId: s ?? void 0 }), {
      project: {
        ...n.project,
        storyboard: { ...n.project.storyboard, cells: r }
      }
    };
  }),
  // --- Editor actions ---
  setMode: (t) => o({ mode: t }),
  setTool: (t) => o({ tool: t }),
  setSideTab: (t) => o({ sideTab: t }),
  setBottomTab: (t) => o({ bottomTab: t }),
  toggleGrid: () => o((t) => ({ showGrid: !t.showGrid })),
  toggleAxes: () => o((t) => ({ showAxes: !t.showAxes })),
  toggleFovCones: () => o((t) => ({ showFovCones: !t.showFovCones })),
  // --- Project actions ---
  loadProject: (t) => o({
    project: t,
    selectedCameraId: null,
    selectedObjectId: null,
    selectedActorId: null
  }),
  getProjectData: () => e().project,
  // --- Undo/Redo ---
  undo: () => {
    if (Z.length === 0) return;
    const t = Z.pop();
    ue.push(structuredClone(e().project)), o({ project: t });
  },
  redo: () => {
    if (ue.length === 0) return;
    const t = ue.pop();
    Z.push(structuredClone(e().project)), Z.length > Je && Z.shift(), o({ project: t });
  }
}));
function B(o) {
  Z.push(structuredClone(o)), Z.length > Je && Z.shift(), ue.length = 0;
}
const Xt = "_cameraPlanner_1pk1g_5", qt = "_cpMain_1pk1g_20", Jt = "_cpViewportWrapper_1pk1g_26", Qt = "_cameraPlannerViewport_1pk1g_32", es = "_cpToolbar_1pk1g_44", ts = "_cpToolbarGroup_1pk1g_54", ss = "_cpToolbarLabel_1pk1g_60", os = "_cpToolbarBtn_1pk1g_68", ns = "_active_1pk1g_88", is = "_cpToolbarSep_1pk1g_94", rs = "_cpToolbarSpacer_1pk1g_101", as = "_cpToolbarExport_1pk1g_105", cs = "_cpIcon_1pk1g_120", ls = "_cpIconLg_1pk1g_125", ps = "_cpIconXl_1pk1g_130", hs = "_cpSidebar_1pk1g_137", ds = "_cpSidebarTabs_1pk1g_147", us = "_cpTabBtn_1pk1g_153", ms = "_cpTabLabel_1pk1g_179", fs = "_cpSidebarContent_1pk1g_183", gs = "_cpCameraListHeader_1pk1g_191", _s = "_cpCameraListItems_1pk1g_200", ys = "_cpCameraItem_1pk1g_206", bs = "_selected_1pk1g_221", js = "_cpCameraColor_1pk1g_226", xs = "_cpCameraInfo_1pk1g_233", vs = "_cpCameraName_1pk1g_238", Ss = "_cpCameraMeta_1pk1g_244", Cs = "_cpCameraDelete_1pk1g_250", ws = "_cpPaletteHeader_1pk1g_277", Ts = "_cpTemplatesHeader_1pk1g_278", Ps = "_cpPaletteGrid_1pk1g_284", Es = "_cpPaletteItem_1pk1g_290", ks = "_cpPaletteLabel_1pk1g_308", Ns = "_cpTemplatesGrid_1pk1g_315", Ms = "_cpTemplateCard_1pk1g_321", As = "_cpTemplateName_1pk1g_339", Os = "_cpTemplateEn_1pk1g_345", Ds = "_cpTemplateCount_1pk1g_350", Is = "_cpPropertyPanel_1pk1g_361", Rs = "_cpPanelSection_1pk1g_370", Ls = "_cpSectionTitle_1pk1g_374", Gs = "_cpField_1pk1g_385", zs = "_cpFieldValue_1pk1g_431", Fs = "_cpFieldRow_1pk1g_439", Bs = "_cpCalcRow_1pk1g_443", Hs = "_cpCalcValue_1pk1g_451", Ks = "_cpMono_1pk1g_456", Vs = "_cpBottomPanel_1pk1g_463", $s = "_cpBottomTabs_1pk1g_472", Us = "_cpBottomContent_1pk1g_485", Ys = "_cpTimeline_1pk1g_493", Ws = "_cpTimelineControls_1pk1g_499", Zs = "_cpPlayBtn_1pk1g_505", Xs = "_cpTimelineBtn_1pk1g_525", qs = "_cpTimelineTime_1pk1g_544", Js = "_cpTimelineTrack_1pk1g_550", Qs = "_cpTimelineSlider_1pk1g_554", eo = "_cpTimelineMarkers_1pk1g_559", to = "_cpTimelineMark_1pk1g_559", so = "_cpStoryboard_1pk1g_574", oo = "_cpStoryboardHeader_1pk1g_580", no = "_cpStoryboardToggle_1pk1g_589", io = "_cpStoryboardGrid_1pk1g_594", ro = "_cpStoryboardCell_1pk1g_600", ao = "_hasCamera_1pk1g_619", co = "_cpCellNumber_1pk1g_624", lo = "_cpCellCamera_1pk1g_632", po = "_cpCellCamName_1pk1g_636", ho = "_cpCellCamMeta_1pk1g_642", uo = "_cpCellEmpty_1pk1g_647", mo = "_cpKeyframesHeader_1pk1g_659", fo = "_cpKeyframesList_1pk1g_665", go = "_cpKeyframeItem_1pk1g_671", _o = "_cpKfIndex_1pk1g_681", yo = "_cpKfPos_1pk1g_686", bo = "_cpKfTime_1pk1g_691", jo = "_cpPlaceholder_1pk1g_697", xo = "_cpEmpty_1pk1g_710", vo = "_cpBtnSm_1pk1g_717", So = "_cpBtn_1pk1g_717", Co = "_cpBtnPrimary_1pk1g_754", wo = "_cpDialogOverlay_1pk1g_767", To = "_cpDialog_1pk1g_767", Po = "_cpDialogHeader_1pk1g_791", Eo = "_cpDialogClose_1pk1g_801", ko = "_cpDialogTabs_1pk1g_820", No = "_cpDialogBody_1pk1g_826", Mo = "_cpDialogActions_1pk1g_831", Ao = "_cpExportInfo_1pk1g_838", Oo = "_cpExportJson_1pk1g_849", Do = "_cpPropsSection_1pk1g_885", Io = "_cpLabel_1pk1g_892", Ro = "_cpInput_1pk1g_899", Lo = "_cpSelect_1pk1g_914", Go = "_cpActorProps_1pk1g_926", zo = "_cpKeyframeSection_1pk1g_934", Fo = "_cpKeyframeList_1pk1g_940", Bo = "_cpKfAction_1pk1g_948", Ho = "_cpKfLabel_1pk1g_960", a = {
  cameraPlanner: Xt,
  cpMain: qt,
  cpViewportWrapper: Jt,
  cameraPlannerViewport: Qt,
  cpToolbar: es,
  cpToolbarGroup: ts,
  cpToolbarLabel: ss,
  cpToolbarBtn: os,
  active: ns,
  cpToolbarSep: is,
  cpToolbarSpacer: rs,
  cpToolbarExport: as,
  cpIcon: cs,
  cpIconLg: ls,
  cpIconXl: ps,
  cpSidebar: hs,
  cpSidebarTabs: ds,
  cpTabBtn: us,
  cpTabLabel: ms,
  cpSidebarContent: fs,
  cpCameraListHeader: gs,
  cpCameraListItems: _s,
  cpCameraItem: ys,
  selected: bs,
  cpCameraColor: js,
  cpCameraInfo: xs,
  cpCameraName: vs,
  cpCameraMeta: Ss,
  cpCameraDelete: Cs,
  cpPaletteHeader: ws,
  cpTemplatesHeader: Ts,
  cpPaletteGrid: Ps,
  cpPaletteItem: Es,
  cpPaletteLabel: ks,
  cpTemplatesGrid: Ns,
  cpTemplateCard: Ms,
  cpTemplateName: As,
  cpTemplateEn: Os,
  cpTemplateCount: Ds,
  cpPropertyPanel: Is,
  cpPanelSection: Rs,
  cpSectionTitle: Ls,
  cpField: Gs,
  cpFieldValue: zs,
  cpFieldRow: Fs,
  cpCalcRow: Bs,
  cpCalcValue: Hs,
  cpMono: Ks,
  cpBottomPanel: Vs,
  cpBottomTabs: $s,
  cpBottomContent: Us,
  cpTimeline: Ys,
  cpTimelineControls: Ws,
  cpPlayBtn: Zs,
  cpTimelineBtn: Xs,
  cpTimelineTime: qs,
  cpTimelineTrack: Js,
  cpTimelineSlider: Qs,
  cpTimelineMarkers: eo,
  cpTimelineMark: to,
  cpStoryboard: so,
  cpStoryboardHeader: oo,
  cpStoryboardToggle: no,
  cpStoryboardGrid: io,
  cpStoryboardCell: ro,
  hasCamera: ao,
  cpCellNumber: co,
  cpCellCamera: lo,
  cpCellCamName: po,
  cpCellCamMeta: ho,
  cpCellEmpty: uo,
  cpKeyframesHeader: mo,
  cpKeyframesList: fo,
  cpKeyframeItem: go,
  cpKfIndex: _o,
  cpKfPos: yo,
  cpKfTime: bo,
  cpPlaceholder: jo,
  cpEmpty: xo,
  cpBtnSm: vo,
  cpBtn: So,
  cpBtnPrimary: Co,
  cpDialogOverlay: wo,
  cpDialog: To,
  cpDialogHeader: Po,
  cpDialogClose: Eo,
  cpDialogTabs: ko,
  cpDialogBody: No,
  cpDialogActions: Mo,
  cpExportInfo: Ao,
  cpExportJson: Oo,
  cpPropsSection: Do,
  cpLabel: Io,
  cpInput: Ro,
  cpSelect: Lo,
  cpActorProps: Go,
  cpKeyframeSection: zo,
  cpKeyframeList: Fo,
  cpKfAction: Bo,
  cpKfLabel: Ho
}, Ko = ({ outputManager: o }) => {
  const e = te(null), t = te(null), s = te(null), n = j;
  W(() => {
    const u = e.current;
    if (!u) return;
    const h = new vt({
      container: u,
      antialias: !0,
      shadows: !0,
      showGrid: !0,
      showAxes: !0
    }), b = new Pt(h.scene), v = new Et(h.scene), C = new Nt(h.scene), k = new Mt(h.scene), O = new At(h.camera, h.scene), T = new It(h.scene);
    return O.setCameraGroups(b.getAllMeshGroups()), O.setObjectMeshes(v.getAllMeshes()), O.setActorGroups(T.getAllMeshGroups()), O.enable(h.getCanvas()), o.setPNGExporter(() => h.exportPNGBlob()), O.onPick((x) => {
      const P = n.getState();
      if (P.tool === "path" && x.target === "ground" && x.groundPoint) {
        const S = P.selectedCameraId, D = P.selectedActorId;
        if (D) {
          const N = P.project.actors.find((U) => U.id === D);
          N && P.addActorKeyframe(D, {
            id: K(),
            time: P.project.timeline.currentTime,
            position: { x: x.groundPoint.x, y: 0, z: x.groundPoint.z },
            rotation: { ...N.rotation },
            action: "stand"
          });
        } else S && P.addPathPoint({
          id: K(),
          position: { x: x.groundPoint.x, y: 1.6, z: x.groundPoint.z },
          rotation: { yaw: 0, pitch: 0, roll: 0 },
          cameraId: S,
          t: 0
        });
        return;
      }
      if (x.target === "camera" && x.id)
        n.getState().selectCamera(x.id), o.emit("camera:select", x.id);
      else if (x.target === "object" && x.id)
        n.getState().selectObject(x.id);
      else if (x.target === "actor" && x.id) {
        if (!s.current || s.current.id !== x.id)
          s.current = { id: x.id, historyPushed: !1 }, n.getState().selectActor(x.id);
        else if (x.groundPoint) {
          const S = n.getState().project.actors.find((D) => D.id === x.id);
          if (S) {
            const D = x.groundPoint.x - S.position.x, N = x.groundPoint.z - S.position.z;
            (Math.abs(D) > 0.01 || Math.abs(N) > 0.01) && (s.current.historyPushed || (n.getState().snapshot(), s.current.historyPushed = !0), n.getState().setActorPosition(x.id, {
              x: x.groundPoint.x,
              y: 0,
              z: x.groundPoint.z
            }));
          }
        }
      } else
        s.current = null;
    }), h.start(), t.current = {
      scene: h,
      cameraRig: b,
      objectLib: v,
      lightSystem: C,
      pathSystem: k,
      rayPicker: O,
      actorRig: T
    }, () => {
      h.dispose(), t.current = null;
    };
  }, [o]);
  const r = n((u) => u.project), c = n((u) => u.selectedCameraId), l = n((u) => u.selectedActorId);
  W(() => {
    const u = t.current;
    if (!u) return;
    const h = r.cameras, b = u.cameraRig.getAllCameras(), v = new Set(b.map((y) => y.id)), C = new Set(h.map((y) => y.id));
    for (const y of h)
      v.has(y.id) || u.cameraRig.addCamera(y);
    for (const y of v)
      C.has(y) || u.cameraRig.deleteCamera(y);
    for (const y of h) {
      const S = u.cameraRig.getCamera(y.id);
      S && (S.focal !== y.focal || S.position.x !== y.position.x || S.position.y !== y.position.y || S.position.z !== y.position.z) && u.cameraRig.updateCamera(y.id, y);
    }
    u.cameraRig.selectCamera(c);
    const k = r.actors, O = u.actorRig.getAllActors(), T = new Set(O.map((y) => y.id)), x = new Set(k.map((y) => y.id));
    let P = !1;
    for (const y of k)
      if (!T.has(y.id))
        u.actorRig.addActor(y), P = !0;
      else {
        const S = u.actorRig.getActor(y.id);
        S && (S.name !== y.name || S.role !== y.role || S.height !== y.height || S.color !== y.color || S.position.x !== y.position.x || S.position.y !== y.position.y || S.position.z !== y.position.z || S.rotation.yaw !== y.rotation.yaw || S.keyframes.length !== y.keyframes.length) && (u.actorRig.updateActor(y.id, y), P = !0);
      }
    for (const y of T)
      x.has(y) || (u.actorRig.deleteActor(y), P = !0);
    P && u.rayPicker.setActorGroups(u.actorRig.getAllMeshGroups()), u.actorRig.selectActor(l), u.pathSystem.importKeyframes(r.path), u.lightSystem.update(r.scene.lighting);
  }, [r.cameras, r.actors, r.path, r.scene.lighting, c, l]);
  const f = n((u) => u.showGrid), _ = n((u) => u.showAxes);
  W(() => {
    var u;
    (u = t.current) == null || u.scene.setGridVisible(f);
  }, [f]), W(() => {
    var u;
    (u = t.current) == null || u.scene.setAxesVisible(_);
  }, [_]);
  const d = n((u) => u.project.timeline.currentTime);
  W(() => {
    var u;
    (u = t.current) == null || u.actorRig.updatePlayback(d);
  }, [d]);
  const p = n((u) => u.tool);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: e,
      className: a.cameraPlannerViewport,
      style: {
        width: "100%",
        height: "100%",
        minHeight: "400px",
        cursor: p === "path" ? "crosshair" : "default"
      }
    }
  );
}, Vo = [
  { value: "select", label: "选择", icon: "↖" },
  { value: "place", label: "放置", icon: "⊕" },
  { value: "move", label: "移动", icon: "✥" },
  { value: "rotate", label: "旋转", icon: "↻" }
], $o = [
  { value: "camera", label: "摄像机", icon: "📷" },
  { value: "object", label: "物体", icon: "📦" },
  { value: "light", label: "灯光", icon: "💡" },
  { value: "path", label: "路径", icon: "〰" }
], Uo = ({ onExport: o }) => {
  const e = j((p) => p.mode), t = j((p) => p.tool), s = j((p) => p.showGrid), n = j((p) => p.showAxes), r = j((p) => p.setMode), c = j((p) => p.setTool), l = j((p) => p.toggleGrid), f = j((p) => p.toggleAxes), _ = j((p) => p.undo), d = j((p) => p.redo);
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbar, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx("span", { className: a.cpToolbarLabel, children: "模式" }),
      Vo.map((p) => /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${e === p.value ? a.active : ""}`,
          onClick: () => r(p.value),
          title: p.label,
          children: /* @__PURE__ */ i.jsx("span", { className: a.cpIcon, children: p.icon })
        },
        p.value
      ))
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx("span", { className: a.cpToolbarLabel, children: "工具" }),
      $o.map((p) => /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${t === p.value ? a.active : ""}`,
          onClick: () => c(p.value),
          title: p.label,
          children: /* @__PURE__ */ i.jsx("span", { className: a.cpIcon, children: p.icon })
        },
        p.value
      ))
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx("button", { className: a.cpToolbarBtn, onClick: _, title: "撤销 (Ctrl+Z)", children: "↩" }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpToolbarBtn, onClick: d, title: "重做 (Ctrl+Y)", children: "↪" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${s ? a.active : ""}`,
          onClick: l,
          title: "网格",
          children: "#"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${n ? a.active : ""}`,
          onClick: f,
          title: "坐标轴",
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSpacer }),
    o && /* @__PURE__ */ i.jsx("button", { className: [a.cpToolbarBtn, a.cpToolbarExport].join(" "), onClick: o, children: "导出" })
  ] });
}, Yo = () => {
  const o = j((l) => l.project.cameras), e = j((l) => l.selectedCameraId), t = j((l) => l.selectCamera), s = j((l) => l.addCamera), n = j((l) => l.deleteCamera), r = () => {
    const l = Te[0], f = 50, _ = me(l.h, f), d = Se(f, 2.8, 5, l.h), p = {
      id: K(),
      name: `CAM-${o.length + 1}`,
      focal: f,
      sensorW: l.w,
      sensorH: l.h,
      fstop: 2.8,
      focusDist: 5,
      height: 1.6,
      position: { x: Math.random() * 4 - 2, y: 1.6, z: Math.random() * 4 - 2 },
      rotation: { yaw: Math.random() * 360 - 180, pitch: 0, roll: 0 },
      fov: _,
      dof: d,
      color: 8160255
    };
    s(p), A.emit("camera:add", p), t(p.id);
  }, c = (l) => {
    n(l), A.emit("camera:delete", l);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraList, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListHeader, children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        "摄像机 (",
        o.length,
        ")"
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpBtnSm, onClick: r, children: "+ 添加" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListItems, children: [
      o.length === 0 && /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: '暂无摄像机，点击"添加"创建' }),
      o.map((l) => /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: `${a.cpCameraItem} ${e === l.id ? a.selected : ""}`,
          onClick: () => t(l.id),
          children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: a.cpCameraColor,
                style: { backgroundColor: `#${l.color.toString(16).padStart(6, "0")}` }
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraInfo, children: [
              /* @__PURE__ */ i.jsx("div", { className: a.cpCameraName, children: l.name }),
              /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraMeta, children: [
                l.focal,
                "mm · f/",
                l.fstop,
                " · FOV ",
                l.fov.toFixed(1),
                "°"
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: a.cpCameraDelete,
                onClick: (f) => {
                  f.stopPropagation(), c(l.id);
                },
                title: "删除",
                children: "×"
              }
            )
          ]
        },
        l.id
      ))
    ] })
  ] });
}, Wo = [
  { type: "box", label: "方块", icon: "⬜" },
  { type: "sphere", label: "球体", icon: "⚪" },
  { type: "cone", label: "锥体", icon: "△" },
  { type: "cylinder", label: "柱体", icon: "▮" },
  { type: "torus", label: "圆环", icon: "○" },
  { type: "plane", label: "平面", icon: "▬" },
  { type: "person", label: "人物", icon: "🧍" },
  { type: "building", label: "建筑", icon: "🏢" },
  { type: "car", label: "车辆", icon: "🚗" },
  { type: "tree", label: "树木", icon: "🌳" },
  { type: "chair", label: "椅子", icon: "🪑" },
  { type: "prop", label: "道具", icon: "🎭" }
], Zo = () => {
  const o = j((t) => t.addObject), e = (t) => {
    const s = {
      id: K(),
      type: t,
      position: { x: 0, y: 0, z: 0 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: 8947848
    };
    o(s), A.emit("object:add", s.id);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpObjectPalette, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpPaletteHeader, children: "物体库" }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpPaletteGrid, children: Wo.map((t) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: a.cpPaletteItem,
        onClick: () => e(t.type),
        title: t.label,
        children: [
          /* @__PURE__ */ i.jsx("span", { className: a.cpIconLg, children: t.icon }),
          /* @__PURE__ */ i.jsx("span", { className: a.cpPaletteLabel, children: t.label })
        ]
      },
      t.type
    )) })
  ] });
};
function I(o, e, t, s, n = 1, r = 1, c = 1, l = 8947848) {
  return {
    type: o,
    position: { x: e, y: t, z: s },
    rotation: { yaw: 0, pitch: 0, roll: 0 },
    scale: { x: n, y: r, z: c },
    color: l
  };
}
const Xo = [
  {
    template: "studio",
    label: "摄影棚",
    labelEn: "Studio",
    icon: "🎬",
    objects: [
      I("plane", 0, 0, 0, 20, 1, 20, 2763306),
      I("box", -6, 1.5, -8, 3, 3, 0.3, 3355443),
      // backdrop
      I("cylinder", -3, 0.5, 0, 0.3, 1, 0.3, 4473924),
      // light stand
      I("cylinder", 3, 0.5, 0, 0.3, 1, 0.3, 4473924)
      // light stand
    ]
  },
  {
    template: "living_room",
    label: "客厅",
    labelEn: "Living Room",
    icon: "🛋️",
    objects: [
      I("plane", 0, 0, 0, 12, 1, 10, 9139029),
      // floor
      I("box", 0, 0.4, -4, 4, 0.8, 1, 6636321),
      // sofa
      I("box", 0, 0.25, 0, 2, 0.5, 1.2, 4863784),
      // coffee table
      I("box", -5, 1, -4.5, 0.3, 2, 3, 5592405),
      // bookshelf
      I("box", 5, 0.5, -4.5, 2, 1, 0.5, 3355443)
      // TV stand
    ]
  },
  {
    template: "street",
    label: "街道",
    labelEn: "Street",
    icon: "🏙️",
    objects: [
      I("plane", 0, 0, 0, 8, 1, 30, 3815994),
      // road
      I("building", -6, 4, -5, 4, 8, 6, 6710886),
      I("building", 6, 3, -5, 4, 6, 6, 7829367),
      I("building", -6, 5, 10, 4, 10, 6, 5592405),
      I("tree", 4, 2, 5, 1, 4, 1, 2972199),
      I("tree", -4, 2, 12, 1, 4, 1, 2972199)
    ]
  },
  {
    template: "cafe",
    label: "咖啡馆",
    labelEn: "Cafe",
    icon: "☕",
    objects: [
      I("plane", 0, 0, 0, 10, 1, 8, 9139029),
      I("cylinder", -2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      I("cylinder", 2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      I("cylinder", 0, 0.35, 2, 0.5, 0.7, 0.5, 9127187),
      // round table
      I("box", -4, 1, -3.5, 2, 2, 0.5, 6636321),
      // bar counter
      I("box", 4, 1.2, -3.5, 0.3, 2.4, 2, 4473924)
      // shelf
    ]
  },
  {
    template: "empty",
    label: "空白",
    labelEn: "Empty",
    icon: "⬜",
    objects: []
  }
], qo = () => {
  const o = j((t) => t.setSceneConfig), e = (t) => {
    const s = t.objects.map((n) => ({
      ...n,
      id: K()
    }));
    o({
      template: t.template,
      objects: s
    }), A.emit("scene:change", {
      template: t.template,
      objects: s,
      lighting: j.getState().project.scene.lighting
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpSceneTemplates, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpTemplatesHeader, children: "场景模板" }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpTemplatesGrid, children: Xo.map((t) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: a.cpTemplateCard,
        onClick: () => e(t),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: a.cpIconXl, children: t.icon }),
          /* @__PURE__ */ i.jsxs("div", { className: a.cpTemplateInfo, children: [
            /* @__PURE__ */ i.jsx("div", { className: a.cpTemplateName, children: t.label }),
            /* @__PURE__ */ i.jsx("div", { className: a.cpTemplateEn, children: t.labelEn }),
            /* @__PURE__ */ i.jsxs("div", { className: a.cpTemplateCount, children: [
              t.objects.length,
              " 个物体"
            ] })
          ] })
        ]
      },
      t.template
    )) })
  ] });
}, $e = {
  principal: "主角",
  supporting: "配角",
  extra: "群众"
}, Jo = {
  stand: "站立",
  walk: "行走",
  run: "奔跑",
  sit: "坐",
  turn: "转身",
  gesture: "手势",
  leave: "离场"
}, Ue = [5164484, 16739125, 10181046, 3066993, 15158332, 15965202], Qo = () => {
  const o = j((h) => h.project.actors), e = j((h) => h.selectedActorId), t = j((h) => h.selectActor), s = j((h) => h.addActor), n = j((h) => h.deleteActor), r = j((h) => h.updateActor), c = j((h) => h.addActorKeyframe), l = j((h) => h.removeActorKeyframe), f = j((h) => h.updateActorKeyframe), _ = j((h) => h.project.timeline.currentTime), d = o.find((h) => h.id === e), p = () => {
    const h = o.length % Ue.length, b = {
      id: K(),
      name: `角色${o.length + 1}`,
      role: "principal",
      position: { x: Math.random() * 4 - 2, y: 0, z: Math.random() * 4 - 2 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      height: 1.7,
      color: Ue[h],
      keyframes: []
    };
    s(b), t(b.id);
  }, u = () => {
    if (!d) return;
    const h = Ct(d.keyframes, _);
    c(d.id, {
      id: K(),
      time: _,
      position: (h == null ? void 0 : h.position) ?? { ...d.position },
      rotation: (h == null ? void 0 : h.rotation) ?? { ...d.rotation },
      action: (h == null ? void 0 : h.action) ?? "stand"
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraList, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListHeader, children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        "角色 (",
        o.length,
        ")"
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpBtnSm, onClick: p, children: "+ 添加" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListItems, children: [
      o.length === 0 && /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: '暂无角色，点击"添加"创建' }),
      o.map((h) => /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: `${a.cpCameraItem} ${e === h.id ? a.selected : ""}`,
          onClick: () => t(h.id),
          children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: a.cpCameraColor,
                style: { backgroundColor: `#${h.color.toString(16).padStart(6, "0")}` }
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraInfo, children: [
              /* @__PURE__ */ i.jsx("div", { className: a.cpCameraName, children: h.name }),
              /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraMeta, children: [
                $e[h.role],
                " · ",
                h.height,
                "m · ",
                h.keyframes.length,
                "关键帧"
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: a.cpCameraDelete,
                onClick: (b) => {
                  b.stopPropagation(), n(h.id);
                },
                title: "删除",
                children: "×"
              }
            )
          ]
        },
        h.id
      ))
    ] }),
    d && /* @__PURE__ */ i.jsxs("div", { className: a.cpActorProps, children: [
      /* @__PURE__ */ i.jsxs("div", { className: a.cpPropsSection, children: [
        /* @__PURE__ */ i.jsx("label", { className: a.cpLabel, children: "名称" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            className: a.cpInput,
            type: "text",
            value: d.name,
            onChange: (h) => r(d.id, { name: h.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpPropsSection, children: [
        /* @__PURE__ */ i.jsx("label", { className: a.cpLabel, children: "类型" }),
        /* @__PURE__ */ i.jsx(
          "select",
          {
            className: a.cpSelect,
            value: d.role,
            onChange: (h) => r(d.id, { role: h.target.value }),
            children: Object.entries($e).map(([h, b]) => /* @__PURE__ */ i.jsx("option", { value: h, children: b }, h))
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpPropsSection, children: [
        /* @__PURE__ */ i.jsx("label", { className: a.cpLabel, children: "身高 (m)" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            className: a.cpInput,
            type: "number",
            step: "0.1",
            min: "0.5",
            max: "2.5",
            value: d.height,
            onChange: (h) => r(d.id, { height: parseFloat(h.target.value) || 1.7 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeSection, children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListHeader, children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            "运动关键帧 (",
            d.keyframes.length,
            ")"
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: a.cpBtnSm, onClick: u, children: "+ 关键帧" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeList, children: [
          d.keyframes.map((h, b) => /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeItem, children: [
            /* @__PURE__ */ i.jsx("span", { className: a.cpKfIndex, children: b + 1 }),
            /* @__PURE__ */ i.jsxs("label", { className: a.cpKfLabel, children: [
              /* @__PURE__ */ i.jsx("span", { children: "时间" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  className: a.cpInput,
                  type: "number",
                  step: "0.5",
                  min: "0",
                  value: h.time,
                  onChange: (v) => f(
                    d.id,
                    h.id,
                    { time: parseFloat(v.target.value) || 0 }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: a.cpKfLabel, children: [
              /* @__PURE__ */ i.jsx("span", { children: "X" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  className: a.cpInput,
                  type: "number",
                  step: "0.1",
                  value: h.position.x.toFixed(1),
                  onChange: (v) => f(
                    d.id,
                    h.id,
                    { position: { ...h.position, x: parseFloat(v.target.value) || 0 } }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: a.cpKfLabel, children: [
              /* @__PURE__ */ i.jsx("span", { children: "Z" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  className: a.cpInput,
                  type: "number",
                  step: "0.1",
                  value: h.position.z.toFixed(1),
                  onChange: (v) => f(
                    d.id,
                    h.id,
                    { position: { ...h.position, z: parseFloat(v.target.value) || 0 } }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(
              "select",
              {
                className: a.cpKfAction,
                value: h.action,
                onChange: (v) => f(
                  d.id,
                  h.id,
                  { action: v.target.value }
                ),
                children: Object.entries(Jo).map(([v, C]) => /* @__PURE__ */ i.jsx("option", { value: v, children: C }, v))
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: a.cpCameraDelete,
                onClick: () => l(d.id, h.id),
                title: "删除关键帧",
                children: "×"
              }
            )
          ] }, h.id)),
          d.keyframes.length === 0 && /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: '暂无关键帧。移动时间线到目标时间，点击"关键帧"添加。' })
        ] })
      ] })
    ] })
  ] });
}, en = [
  { value: "cameras", label: "机位", icon: "📷" },
  { value: "objects", label: "物体", icon: "📦" },
  { value: "templates", label: "场景", icon: "🏠" },
  { value: "characters", label: "角色", icon: "👤" }
], tn = () => {
  const o = j((t) => t.sideTab), e = j((t) => t.setSideTab);
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpSidebar, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpSidebarTabs, children: en.map((t) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: `${a.cpTabBtn} ${o === t.value ? a.active : ""}`,
        onClick: () => e(t.value),
        title: t.label,
        children: [
          /* @__PURE__ */ i.jsx("span", { className: a.cpIcon, children: t.icon }),
          /* @__PURE__ */ i.jsx("span", { className: a.cpTabLabel, children: t.label })
        ]
      },
      t.value
    )) }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpSidebarContent, children: [
      o === "cameras" && /* @__PURE__ */ i.jsx(Yo, {}),
      o === "objects" && /* @__PURE__ */ i.jsx(Zo, {}),
      o === "templates" && /* @__PURE__ */ i.jsx(qo, {}),
      o === "characters" && /* @__PURE__ */ i.jsx(Qo, {})
    ] })
  ] });
}, Ye = [
  {
    type: "push",
    label: "推进",
    labelEn: "Push In",
    description: "摄像机向前推进，逐渐接近主体",
    defaultDuration: 3
  },
  {
    type: "pull",
    label: "拉出",
    labelEn: "Pull Out",
    description: "摄像机向后拉远，展示更多环境",
    defaultDuration: 3
  },
  {
    type: "pan",
    label: "摇镜",
    labelEn: "Pan",
    description: "摄像机水平旋转，左右扫视",
    defaultDuration: 2
  },
  {
    type: "tilt",
    label: "俯仰",
    labelEn: "Tilt",
    description: "摄像机垂直旋转，上下扫视",
    defaultDuration: 2
  },
  {
    type: "track",
    label: "跟踪",
    labelEn: "Track",
    description: "摄像机平行移动，跟随主体运动",
    defaultDuration: 4
  },
  {
    type: "orbit",
    label: "环绕",
    labelEn: "Orbit",
    description: "摄像机围绕主体做圆弧运动",
    defaultDuration: 5
  },
  {
    type: "crane_up",
    label: "升起",
    labelEn: "Crane Up",
    description: "摄像机垂直升起，俯瞰全景",
    defaultDuration: 3
  },
  {
    type: "crane_down",
    label: "降下",
    labelEn: "Crane Down",
    description: "摄像机垂直降下，接近地面",
    defaultDuration: 3
  }
], sn = {
  principal: "主角",
  supporting: "配角",
  extra: "群众"
}, on = () => {
  const o = j((u) => u.selectedCameraId), e = j((u) => u.selectedObjectId), t = j((u) => u.selectedActorId), s = j((u) => u.project.cameras), n = j((u) => u.project.scene.objects), r = j((u) => u.project.actors), c = j((u) => u.updateCamera), l = j((u) => u.updateObject), f = j((u) => u.updateActor), _ = s.find((u) => u.id === o), d = n.find((u) => u.id === e), p = r.find((u) => u.id === t);
  return _ ? /* @__PURE__ */ i.jsx(rn, { camera: _, onUpdate: c }) : p ? /* @__PURE__ */ i.jsx(nn, { actor: p, onUpdate: f }) : d ? /* @__PURE__ */ i.jsx(an, { object: d, onUpdate: l }) : /* @__PURE__ */ i.jsx("div", { className: a.cpPropertyPanel, children: /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "选择机位、角色或物体查看属性" }) }) });
}, nn = ({ actor: o, onUpdate: e }) => {
  const t = (n, r) => {
    e(o.id, { position: { ...o.position, [n]: r } });
  }, s = (n, r) => {
    e(o.id, { rotation: { ...o.rotation, [n]: r } });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpPropertyPanel, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "角色属性" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "名称" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: o.name,
            onChange: (n) => e(o.id, { name: n.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "类型" }),
        /* @__PURE__ */ i.jsx(
          "select",
          {
            value: o.role,
            onChange: (n) => e(o.id, { role: n.target.value }),
            children: Object.entries(sn).map(([n, r]) => /* @__PURE__ */ i.jsx("option", { value: n, children: r }, n))
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "身高 (m)" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "0.5",
            max: "2.5",
            step: "0.05",
            value: o.height,
            onChange: (n) => e(o.id, { height: Number(n.target.value) })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          o.height.toFixed(2),
          "m"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "颜色" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "color",
            value: `#${o.color.toString(16).padStart(6, "0")}`,
            onChange: (n) => e(o.id, { color: parseInt(n.target.value.slice(1), 16) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((n) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: n.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: o.position[n],
            onChange: (r) => t(n, Number(r.target.value))
          }
        )
      ] }, n))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "朝向" }),
      ["yaw", "pitch", "roll"].map((n) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: n }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "-180",
            max: "180",
            step: "1",
            value: o.rotation[n],
            onChange: (r) => s(n, Number(r.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          o.rotation[n],
          "°"
        ] })
      ] }, n))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "关键帧" }),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpCalcValue, children: [
          o.keyframes.length,
          " 个"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "ID" }),
        /* @__PURE__ */ i.jsx("span", { className: [a.cpCalcValue, a.cpMono].join(" "), children: o.id.slice(0, 8) })
      ] })
    ] })
  ] });
}, rn = ({ camera: o, onUpdate: e }) => {
  var r, c, l, f, _, d;
  const t = (p, u) => {
    const h = { [p]: u };
    e(o.id, h), A.emit("camera:change", { ...o, ...h });
  }, s = (p, u) => {
    const h = { ...o.position, [p]: u };
    e(o.id, { position: h }), A.emit("camera:change", { ...o, position: h });
  }, n = (p, u) => {
    const h = { ...o.rotation, [p]: u };
    e(o.id, { rotation: h }), A.emit("camera:change", { ...o, rotation: h });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpPropertyPanel, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "摄像机参数" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "名称" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: o.name,
            onChange: (p) => t("name", p.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "焦距 (mm)" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "8",
            max: "300",
            step: "1",
            value: o.focal,
            onChange: (p) => t("focal", Number(p.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          o.focal,
          "mm"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "光圈 (f/)" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "1.2",
            max: "22",
            step: "0.1",
            value: o.fstop,
            onChange: (p) => t("fstop", Number(p.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          "f/",
          o.fstop.toFixed(1)
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "对焦距离 (m)" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "0.3",
            max: "100",
            step: "0.1",
            value: o.focusDist,
            onChange: (p) => t("focusDist", Number(p.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          o.focusDist.toFixed(1),
          "m"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((p) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: p.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: o.position[p],
            onChange: (u) => s(p, Number(u.target.value))
          }
        )
      ] }, p))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "旋转" }),
      ["yaw", "pitch", "roll"].map((p) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: p }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "-180",
            max: "180",
            step: "1",
            value: o.rotation[p],
            onChange: (u) => n(p, Number(u.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          o.rotation[p],
          "°"
        ] })
      ] }, p))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "计算值" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "FOV" }),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpCalcValue, children: [
          o.fov.toFixed(1),
          "°"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "景深范围" }),
        /* @__PURE__ */ i.jsx("span", { className: a.cpCalcValue, children: o.dof.range === 1 / 0 ? "∞" : `${o.dof.range.toFixed(2)}m` })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "近焦" }),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpCalcValue, children: [
          o.dof.near.toFixed(2),
          "m"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "远焦" }),
        /* @__PURE__ */ i.jsx("span", { className: a.cpCalcValue, children: o.dof.far === 1 / 0 ? "∞" : `${o.dof.far.toFixed(2)}m` })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "运镜" }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          value: ((r = o.movement) == null ? void 0 : r.type) || "",
          onChange: (p) => {
            const u = Ye.find((h) => h.type === p.target.value);
            u && e(o.id, {
              movement: { type: u.type, duration: u.defaultDuration }
            });
          },
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: "无" }),
            Ye.map((p) => /* @__PURE__ */ i.jsxs("option", { value: p.type, children: [
              p.label,
              " (",
              p.labelEn,
              ")"
            ] }, p.type))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "剧本绑定" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "场景" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: ((c = o.script) == null ? void 0 : c.sceneId) || "",
            onChange: (p) => e(o.id, {
              script: { ...o.script, sceneId: p.target.value }
            }),
            placeholder: "Scene-01"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "镜号" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: ((l = o.script) == null ? void 0 : l.shotId) || "",
            onChange: (p) => e(o.id, {
              script: { ...o.script, shotId: p.target.value }
            }),
            placeholder: "Shot-03"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "描述" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: ((f = o.script) == null ? void 0 : f.description) || "",
            onChange: (p) => e(o.id, {
              script: { ...o.script, description: p.target.value }
            }),
            placeholder: "主角对话近景"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "对白" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: ((_ = o.script) == null ? void 0 : _.dialogue) || "",
            onChange: (p) => e(o.id, {
              script: { ...o.script, dialogue: p.target.value }
            }),
            placeholder: "你怎么来了？"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "动作" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: ((d = o.script) == null ? void 0 : d.action) || "",
            onChange: (p) => e(o.id, {
              script: { ...o.script, action: p.target.value }
            }),
            placeholder: "转身离开"
          }
        )
      ] })
    ] })
  ] });
}, an = ({ object: o, onUpdate: e }) => {
  const t = (n, r) => {
    e(o.id, { position: { ...o.position, [n]: r } });
  }, s = (n, r) => {
    e(o.id, { scale: { ...o.scale, [n]: r } });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpPropertyPanel, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsxs("div", { className: a.cpSectionTitle, children: [
        "物体: ",
        o.type
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "ID" }),
        /* @__PURE__ */ i.jsx("span", { className: [a.cpCalcValue, a.cpMono].join(" "), children: o.id.slice(0, 8) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((n) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: n.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: o.position[n],
            onChange: (r) => t(n, Number(r.target.value))
          }
        )
      ] }, n))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "缩放" }),
      ["x", "y", "z"].map((n) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: n.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            min: "0.1",
            value: o.scale[n],
            onChange: (r) => s(n, Number(r.target.value))
          }
        )
      ] }, n))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "颜色" }),
      /* @__PURE__ */ i.jsx("div", { className: a.cpField, children: /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "color",
          value: `#${o.color.toString(16).padStart(6, "0")}`,
          onChange: (n) => e(o.id, { color: parseInt(n.target.value.slice(1), 16) })
        }
      ) })
    ] })
  ] });
}, cn = () => {
  const o = j((_) => _.project.timeline), e = j((_) => _.setTimelineTime), t = j((_) => _.setTimelinePlaying), s = te(null), n = te(0), r = te(0), c = () => {
    if (o.playing)
      s.current && cancelAnimationFrame(s.current), s.current = null, t(!1);
    else {
      t(!0), n.current = performance.now(), r.current = o.currentTime;
      const _ = (d) => {
        const p = (d - n.current) / 1e3, u = r.current + p;
        if (u >= o.duration) {
          e(0), t(!1);
          return;
        }
        e(u), A.emit("timeline:change", u), s.current = requestAnimationFrame(_);
      };
      s.current = requestAnimationFrame(_);
    }
  }, l = et((_) => {
    const d = Number(_.target.value);
    e(d), A.emit("timeline:change", d);
  }, [e]), f = (_) => {
    const d = Math.floor(_ / 60), p = Math.floor(_ % 60), u = Math.floor(_ % 1 * 10);
    return `${d}:${p.toString().padStart(2, "0")}.${u}`;
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpTimeline, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpTimelineControls, children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: a.cpPlayBtn,
          onClick: c,
          title: o.playing ? "暂停" : "播放",
          children: o.playing ? "⏸" : "▶"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: a.cpTimelineBtn,
          onClick: () => {
            e(0), t(!1);
          },
          title: "重置",
          children: "⏮"
        }
      ),
      /* @__PURE__ */ i.jsxs("span", { className: a.cpTimelineTime, children: [
        f(o.currentTime),
        " / ",
        f(o.duration)
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpTimelineTrack, children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: o.duration,
          step: "0.1",
          value: o.currentTime,
          onChange: l,
          className: a.cpTimelineSlider
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: a.cpTimelineMarkers, children: Array.from({ length: Math.ceil(o.duration / 5) + 1 }, (_, d) => /* @__PURE__ */ i.jsxs("span", { className: a.cpTimelineMark, style: { left: `${d * 5 / o.duration * 100}%` }, children: [
        d * 5,
        "s"
      ] }, d)) })
    ] })
  ] });
}, ln = () => {
  const o = j((f) => f.project.storyboard), e = j((f) => f.project.cameras), t = j((f) => f.setStoryboardGrid), s = j((f) => f.setStoryboardCell), n = j((f) => f.selectCamera), r = o.grid === "5x5" ? 5 : 3, c = r * r, l = (f) => {
    const _ = o.cells.find((d) => d.index === f);
    return _ != null && _.cameraId && e.find((d) => d.id === _.cameraId) || null;
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpStoryboard, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpStoryboardHeader, children: [
      /* @__PURE__ */ i.jsx("span", { children: "分镜表" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpStoryboardToggle, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `${a.cpBtnSm} ${o.grid === "3x3" ? a.active : ""}`,
            onClick: () => t("3x3"),
            children: "3×3"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `${a.cpBtnSm} ${o.grid === "5x5" ? a.active : ""}`,
            onClick: () => t("5x5"),
            children: "5×5"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: a.cpStoryboardGrid,
        style: {
          gridTemplateColumns: `repeat(${r}, 1fr)`
        },
        children: Array.from({ length: c }, (f, _) => {
          const d = l(_);
          return /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `${a.cpStoryboardCell} ${d ? a.hasCamera : ""}`,
              onClick: () => {
                d && n(d.id);
              },
              children: [
                /* @__PURE__ */ i.jsx("div", { className: a.cpCellNumber, children: _ + 1 }),
                d ? /* @__PURE__ */ i.jsxs("div", { className: a.cpCellCamera, children: [
                  /* @__PURE__ */ i.jsx("div", { className: a.cpCellCamName, children: d.name }),
                  /* @__PURE__ */ i.jsxs("div", { className: a.cpCellCamMeta, children: [
                    d.focal,
                    "mm"
                  ] })
                ] }) : /* @__PURE__ */ i.jsx("div", { className: a.cpCellEmpty, children: /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    value: "",
                    onChange: (p) => {
                      p.target.value && s(_, p.target.value);
                    },
                    onClick: (p) => p.stopPropagation(),
                    children: [
                      /* @__PURE__ */ i.jsx("option", { value: "", children: "分配机位..." }),
                      e.map((p) => /* @__PURE__ */ i.jsx("option", { value: p.id, children: p.name }, p.id))
                    ]
                  }
                ) })
              ]
            },
            _
          );
        })
      }
    )
  ] });
}, pn = [
  { value: "timeline", label: "时间线" },
  { value: "storyboard", label: "分镜表" },
  { value: "keyframes", label: "关键帧" }
], hn = () => {
  const o = j((s) => s.bottomTab), e = j((s) => s.setBottomTab), t = j((s) => s.project.path);
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpBottomPanel, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpBottomTabs, children: pn.map((s) => /* @__PURE__ */ i.jsx(
      "button",
      {
        className: `${a.cpTabBtn} ${o === s.value ? a.active : ""}`,
        onClick: () => e(s.value),
        children: s.label
      },
      s.value
    )) }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpBottomContent, children: [
      o === "timeline" && /* @__PURE__ */ i.jsx(cn, {}),
      o === "storyboard" && /* @__PURE__ */ i.jsx(ln, {}),
      o === "keyframes" && /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframes, children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframesHeader, children: [
          "关键帧 (",
          t.length,
          ")"
        ] }),
        t.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: "暂无关键帧。在路径工具模式下点击场景添加。" }) : /* @__PURE__ */ i.jsx("div", { className: a.cpKeyframesList, children: t.map((s, n) => /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeItem, children: [
          /* @__PURE__ */ i.jsxs("span", { className: a.cpKfIndex, children: [
            "#",
            n + 1
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: a.cpKfPos, children: [
            "(",
            s.position.x.toFixed(1),
            ", ",
            s.position.y.toFixed(1),
            ", ",
            s.position.z.toFixed(1),
            ")"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: a.cpKfTime, children: [
            "t=",
            s.t.toFixed(2)
          ] })
        ] }, s.id)) })
      ] })
    ] })
  ] });
};
class dn {
  /**
   * 把完整项目数据转成 JSON Prompt
   */
  export(e) {
    return {
      version: e.version,
      scene: this.exportScene(e),
      cameras: this.exportCameras(e),
      actors: this.exportActors(e),
      timeline: this.exportTimeline(e)
    };
  }
  /**
   * 导出为 JSON 字符串（带缩进）
   */
  exportString(e) {
    return JSON.stringify(this.export(e), null, 2);
  }
  /** 场景块：环境+物体 */
  exportScene(e) {
    return {
      template: e.scene.template,
      lighting: {
        position: e.scene.lighting.position,
        intensity: e.scene.lighting.intensity,
        color: e.scene.lighting.color,
        preset: e.scene.lighting.preset
      },
      objects: e.scene.objects.map((t) => ({
        id: t.id,
        type: t.type,
        position: t.position,
        rotation: t.rotation,
        scale: t.scale,
        color: t.color
      }))
    };
  }
  /** 相机块：光学参数+运动轨迹 */
  exportCameras(e) {
    const t = e.timeline.duration || 1;
    return e.cameras.map((s) => {
      const r = e.path.filter((c) => c.cameraId === s.id).sort((c, l) => c.t - l.t).map((c) => ({
        time: Math.round(c.t * t * 100) / 100,
        position: c.position,
        rotation: c.rotation
      }));
      return {
        id: s.id,
        name: s.name,
        optical: {
          focal: s.focal,
          sensorW: s.sensorW,
          sensorH: s.sensorH,
          fstop: s.fstop,
          focusDist: s.focusDist,
          fov: s.fov,
          dof: s.dof
        },
        movement: s.movement ? {
          type: s.movement.type,
          duration: s.movement.duration
        } : void 0,
        keyframes: r
      };
    });
  }
  /** 角色块：身份+运动轨迹 */
  exportActors(e) {
    return e.actors.map((t) => ({
      id: t.id,
      name: t.name,
      role: t.role,
      height: t.height,
      keyframes: t.keyframes.map((s) => ({
        time: s.time,
        position: s.position,
        rotation: s.rotation,
        action: s.action
      }))
    }));
  }
  /** 时间线块 */
  exportTimeline(e) {
    return {
      duration: e.timeline.duration,
      fps: 24
    };
  }
}
const We = new dn(), un = ({ open: o, onClose: e }) => {
  const [t, s] = de("json"), [n, r] = de(""), [c, l] = de(""), f = j((b) => b.project);
  if (!o) return null;
  const _ = () => {
    const b = A.exportProject(), v = JSON.stringify(b, null, 2);
    r(v), A.emit("project:export", b);
  }, d = () => {
    const b = A.exportProject(), v = We.exportString(b);
    l(v);
  }, p = () => {
    const b = A.exportProject(), v = We.exportString(b), C = new Blob([v], { type: "application/json" }), k = URL.createObjectURL(C), O = document.createElement("a");
    O.href = k, O.download = `camera-planner-prompt-${Date.now()}.json`, O.click(), URL.revokeObjectURL(k);
  }, u = () => {
    const b = A.exportProject(), v = new Blob([JSON.stringify(b, null, 2)], { type: "application/json" }), C = URL.createObjectURL(v), k = document.createElement("a");
    k.href = C, k.download = `camera-planner-${Date.now()}.json`, k.click(), URL.revokeObjectURL(C);
  }, h = async () => {
    const b = await A.exportStoryboardPNG();
    if (!b) return;
    const v = URL.createObjectURL(b), C = document.createElement("a");
    C.href = v, C.download = `viewport-${Date.now()}.png`, C.click(), URL.revokeObjectURL(v);
  };
  return /* @__PURE__ */ i.jsx("div", { className: a.cpDialogOverlay, onClick: e, children: /* @__PURE__ */ i.jsxs("div", { className: a.cpDialog, onClick: (b) => b.stopPropagation(), children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogHeader, children: [
      /* @__PURE__ */ i.jsx("span", { children: "导出" }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpDialogClose, onClick: e, children: "×" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogTabs, children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpTabBtn} ${t === "json" ? a.active : ""}`,
          onClick: () => s("json"),
          children: "JSON 数据"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpTabBtn} ${t === "prompt" ? a.active : ""}`,
          onClick: () => s("prompt"),
          children: "JSON Prompt"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpTabBtn} ${t === "png" ? a.active : ""}`,
          onClick: () => s("png"),
          children: "PNG 截图"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogBody, children: [
      t === "json" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpExportInfo, children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.cameras.length,
            " 个摄像机"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.scene.objects.length,
            " 个场景物体"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.path.length,
            " 个路径关键帧"
          ] })
        ] }),
        n ? /* @__PURE__ */ i.jsx("pre", { className: a.cpExportJson, children: n }) : /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "点击下方按钮生成 JSON" }) }),
        /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogActions, children: [
          /* @__PURE__ */ i.jsx("button", { className: a.cpBtn, onClick: _, children: "生成 JSON" }),
          /* @__PURE__ */ i.jsx("button", { className: [a.cpBtn, a.cpBtnPrimary].join(" "), onClick: u, children: "下载文件" })
        ] })
      ] }),
      t === "prompt" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpExportInfo, children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.cameras.length,
            " 个摄像机"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.actors.length,
            " 个角色"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.scene.objects.length,
            " 个场景物体"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            f.path.length,
            " 个相机路径点"
          ] })
        ] }),
        c ? /* @__PURE__ */ i.jsx("pre", { className: a.cpExportJson, children: c }) : /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "生成结构化 JSON Prompt（含相机/角色/物体动态空间数据）" }) }),
        /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogActions, children: [
          /* @__PURE__ */ i.jsx("button", { className: a.cpBtn, onClick: d, children: "生成 Prompt" }),
          /* @__PURE__ */ i.jsx("button", { className: [a.cpBtn, a.cpBtnPrimary].join(" "), onClick: p, children: "下载文件" })
        ] })
      ] }),
      t === "png" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "导出当前 3D 视口截图" }) }),
        /* @__PURE__ */ i.jsx("div", { className: a.cpDialogActions, children: /* @__PURE__ */ i.jsx("button", { className: [a.cpBtn, a.cpBtnPrimary].join(" "), onClick: h, children: "导出 PNG" }) })
      ] })
    ] })
  ] }) });
};
class mn {
  /** Load a complete project */
  loadProject(e) {
    j.getState().loadProject(e);
  }
  /** Load only cameras (replace all) */
  loadCameras(e) {
    const t = j.getState(), s = t.getProjectData();
    t.loadProject({ ...s, cameras: e });
  }
  /** Load only scene config */
  loadScene(e) {
    j.getState().setSceneConfig(e);
  }
  /** Load script binding for a specific camera */
  loadScript(e, t) {
    j.getState().updateCamera(e, { script: t });
  }
  /** Update a single camera's params */
  updateCamera(e, t) {
    j.getState().updateCamera(e, t);
  }
  /** Update scene config partially */
  updateScene(e) {
    j.getState().setSceneConfig(e);
  }
  /** Select a camera (from external control) */
  selectCamera(e) {
    j.getState().selectCamera(e);
  }
  /** Trigger a movement animation on a camera */
  playMovement(e, t) {
    const s = j.getState();
    s.project.cameras.find((r) => r.id === e) && s.updateCamera(e, {
      movement: { type: t, duration: 3 }
    });
  }
}
class fn {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.pngExporter = null;
  }
  /** Subscribe to an event */
  on(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set());
    const s = this.listeners.get(e);
    return s.add(t), () => s.delete(t);
  }
  /** Emit an event */
  emit(e, t) {
    const s = this.listeners.get(e);
    if (s)
      for (const n of s)
        n(t);
  }
  /** Export current project data */
  exportProject() {
    return j.getState().getProjectData();
  }
  /** Export cameras only */
  exportCameras() {
    return j.getState().getProjectData().cameras;
  }
  setPNGExporter(e) {
    this.pngExporter = e;
  }
  async exportStoryboardPNG() {
    var e;
    return ((e = this.pngExporter) == null ? void 0 : e.call(this)) ?? null;
  }
}
const gn = new mn(), A = new fn(), xn = ({
  initialData: o,
  onCameraChange: e,
  onCameraSelect: t,
  onCameraAdd: s,
  onCameraDelete: n,
  onSceneChange: r,
  onProjectExport: c
}) => {
  const [l, f] = de(!1);
  return W(() => {
    o && gn.loadProject(o);
  }, [o]), W(() => {
    const _ = [];
    return e && _.push(A.on("camera:change", e)), t && _.push(A.on("camera:select", t)), s && _.push(A.on("camera:add", s)), n && _.push(A.on("camera:delete", n)), r && _.push(A.on("scene:change", r)), c && _.push(A.on("project:export", c)), () => _.forEach((d) => d());
  }, [e, t, s, n, r, c]), W(() => {
    const _ = (d) => {
      d.ctrlKey && d.key === "z" && (d.preventDefault(), j.getState().undo()), d.ctrlKey && d.key === "y" && (d.preventDefault(), j.getState().redo());
    };
    return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: a.cameraPlanner, children: [
    /* @__PURE__ */ i.jsx(Uo, { onExport: () => f(!0) }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpMain, children: [
      /* @__PURE__ */ i.jsx(tn, {}),
      /* @__PURE__ */ i.jsx("div", { className: a.cpViewportWrapper, children: /* @__PURE__ */ i.jsx(Ko, { outputManager: A }) }),
      /* @__PURE__ */ i.jsx(on, {})
    ] }),
    /* @__PURE__ */ i.jsx(hn, {}),
    /* @__PURE__ */ i.jsx(un, { open: l, onClose: () => f(!1) })
  ] });
};
class vn {
  constructor(e) {
    this.baseUrl = e.baseUrl.replace(/\/$/, ""), this.token = e.token || "", this.headers = e.headers || {};
  }
  /** Set auth token */
  setToken(e) {
    this.token = e;
  }
  /** GET request */
  async get(e) {
    return this.request("GET", e);
  }
  /** POST request */
  async post(e, t) {
    return this.request("POST", e, t);
  }
  /** PUT request */
  async put(e, t) {
    return this.request("PUT", e, t);
  }
  /** DELETE request */
  async delete(e) {
    return this.request("DELETE", e);
  }
  // --- Convenience methods ---
  async getProject(e) {
    return this.get(`/projects/${e}`);
  }
  async saveProject(e, t) {
    return this.put(`/projects/${e}`, t);
  }
  async saveCamera(e, t, s) {
    return this.put(`/projects/${e}/cameras/${t}`, s);
  }
  async deleteCamera(e, t) {
    return this.delete(`/projects/${e}/cameras/${t}`);
  }
  async saveScene(e, t) {
    return this.put(`/projects/${e}/scene`, t);
  }
  // --- Private ---
  async request(e, t, s) {
    const n = `${this.baseUrl}${t}`, r = {
      "Content-Type": "application/json",
      ...this.headers
    };
    this.token && (r.Authorization = `Bearer ${this.token}`);
    const c = await fetch(n, {
      method: e,
      headers: r,
      body: s ? JSON.stringify(s) : void 0
    });
    if (!c.ok)
      throw new Error(`API ${e} ${t} failed: ${c.status} ${c.statusText}`);
    return c.json();
  }
}
export {
  vn as ApiClient,
  xn as CameraPlanner,
  Pt as CameraRig,
  mn as InputManager,
  kt as LIGHT_PRESETS,
  Nt as LightSystem,
  Ye as MOVEMENT_PRESETS,
  Et as ObjectLib,
  fn as OutputManager,
  Mt as PathSystem,
  At as RayPicker,
  Xo as SCENE_PRESETS,
  Te as SENSOR_PRESETS,
  vt as SceneEngine,
  Se as calcDOF,
  me as calcFOV,
  bn as calcFOVByPreset,
  St as clamp,
  Zt as createEmptyProject,
  H as deg2rad,
  Pe as easeInOutCubic,
  K as generateId,
  gn as inputManager,
  z as lerp,
  A as outputManager,
  jn as rad2deg,
  j as usePlannerStore
};
