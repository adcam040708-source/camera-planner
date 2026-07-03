import W, { useRef as Q, useEffect as z, useCallback as Ze, useState as _e } from "react";
import * as _ from "three";
import { Controls as Xe, Vector3 as G, MOUSE as U, TOUCH as $, Quaternion as Ee, Spherical as Pe, Vector2 as L, Ray as Je, Plane as Qe, MathUtils as et } from "three";
function tt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var be = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function st() {
  if (Ne) return X;
  Ne = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, i, r) {
    var h = null;
    if (r !== void 0 && (h = "" + r), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      r = {};
      for (var p in i)
        p !== "key" && (r[p] = i[p]);
    } else r = i;
    return i = r.ref, {
      $$typeof: o,
      type: s,
      key: h,
      ref: i !== void 0 ? i : null,
      props: r
    };
  }
  return X.Fragment = e, X.jsx = t, X.jsxs = t, X;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function ot() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    function o(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === Ue ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case T:
          return "Fragment";
        case R:
          return "Profiler";
        case C:
          return "StrictMode";
        case w:
          return "Suspense";
        case D:
          return "SuspenseList";
        case $e:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case y:
            return "Portal";
          case A:
            return f.displayName || "Context";
          case I:
            return (f._context.displayName || "Context") + ".Consumer";
          case H:
            var j = f.render;
            return f = f.displayName, f || (f = j.displayName || j.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case F:
            return j = f.displayName || null, j !== null ? j : o(f.type) || "Memo";
          case ae:
            j = f._payload, f = f._init;
            try {
              return o(f(j));
            } catch {
            }
        }
      return null;
    }
    function e(f) {
      return "" + f;
    }
    function t(f) {
      try {
        e(f);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var S = j.error, N = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(f);
      }
    }
    function s(f) {
      if (f === T) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === ae)
        return "<...>";
      try {
        var j = o(f);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var f = re.A;
      return f === null ? null : f.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function h(f) {
      if (je.call(f, "key")) {
        var j = Object.getOwnPropertyDescriptor(f, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function p(f, j) {
      function S() {
        xe || (xe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: S,
        configurable: !0
      });
    }
    function c() {
      var f = o(this.type);
      return Te[f] || (Te[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function m(f, j, S, N, ee, le) {
      var M = S.ref;
      return f = {
        $$typeof: b,
        type: f,
        key: j,
        props: S,
        _owner: N
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, j, S, N, ee, le) {
      var M = j.children;
      if (M !== void 0)
        if (N)
          if (Ye(M)) {
            for (N = 0; N < M.length; N++)
              u(M[N]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(M);
      if (je.call(j, "key")) {
        M = o(f);
        var V = Object.keys(j).filter(function(We) {
          return We !== "key";
        });
        N = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", we[M + N] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          M,
          V,
          M
        ), we[M + N] = !0);
      }
      if (M = null, S !== void 0 && (t(S), M = "" + S), h(j) && (t(j.key), M = "" + j.key), "key" in j) {
        S = {};
        for (var he in j)
          he !== "key" && (S[he] = j[he]);
      } else S = j;
      return M && p(
        S,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), m(
        f,
        M,
        S,
        i(),
        ee,
        le
      );
    }
    function u(f) {
      g(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === ae && (f._payload.status === "fulfilled" ? g(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function g(f) {
      return typeof f == "object" && f !== null && f.$$typeof === b;
    }
    var l = W, b = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), A = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), $e = Symbol.for("react.activity"), Ue = Symbol.for("react.client.reference"), re = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = Object.prototype.hasOwnProperty, Ye = Array.isArray, ce = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var xe, Te = {}, Se = l.react_stack_bottom_frame.bind(
      l,
      r
    )(), Ce = ce(s(r)), we = {};
    J.Fragment = T, J.jsx = function(f, j, S) {
      var N = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        f,
        j,
        S,
        !1,
        N ? Error("react-stack-top-frame") : Se,
        N ? ce(s(f)) : Ce
      );
    }, J.jsxs = function(f, j, S) {
      var N = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        f,
        j,
        S,
        !0,
        N ? Error("react-stack-top-frame") : Se,
        N ? ce(s(f)) : Ce
      );
    };
  }()), J;
}
process.env.NODE_ENV === "production" ? be.exports = st() : be.exports = ot();
var n = be.exports;
const Oe = { type: "change" }, ve = { type: "start" }, Fe = { type: "end" }, te = new Je(), De = new Qe(), nt = Math.cos(70 * et.DEG2RAD), O = new G(), k = 2 * Math.PI, x = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, pe = 1e-6;
class it extends Xe {
  constructor(e, t = null) {
    super(e, t), this.state = x.NONE, this.enabled = !0, this.target = new G(), this.cursor = new G(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: U.ROTATE, MIDDLE: U.DOLLY, RIGHT: U.PAN }, this.touches = { ONE: $.ROTATE, TWO: $.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new G(), this._lastQuaternion = new Ee(), this._lastTargetPosition = new G(), this._quat = new Ee().setFromUnitVectors(e.up, new G(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Pe(), this._sphericalDelta = new Pe(), this._scale = 1, this._panOffset = new G(), this._rotateStart = new L(), this._rotateEnd = new L(), this._rotateDelta = new L(), this._panStart = new L(), this._panEnd = new L(), this._panDelta = new L(), this._dollyStart = new L(), this._dollyEnd = new L(), this._dollyDelta = new L(), this._dollyDirection = new G(), this._mouse = new L(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = rt.bind(this), this._onPointerDown = at.bind(this), this._onPointerUp = ct.bind(this), this._onContextMenu = ft.bind(this), this._onMouseWheel = pt.bind(this), this._onKeyDown = dt.bind(this), this._onTouchStart = ut.bind(this), this._onTouchMove = mt.bind(this), this._onMouseDown = lt.bind(this), this._onMouseMove = ht.bind(this), this._interceptControlDown = _t.bind(this), this._interceptControlUp = bt.bind(this), this.domElement !== null && this.connect(), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Oe), this.update(), this.state = x.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    O.copy(t).sub(this.target), O.applyQuaternion(this._quat), this._spherical.setFromVector3(O), this.autoRotate && this.state === x.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(s) && isFinite(i) && (s < -Math.PI ? s += k : s > Math.PI && (s -= k), i < -Math.PI ? i += k : i > Math.PI && (i -= k), s <= i ? this._spherical.theta = Math.max(s, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + i) / 2 ? Math.max(s, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const h = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = h != this._spherical.radius;
    }
    if (O.setFromSpherical(this._spherical), O.applyQuaternion(this._quatInverse), t.copy(this.target).add(O), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let h = null;
      if (this.object.isPerspectiveCamera) {
        const p = O.length();
        h = this._clampDistance(p * this._scale);
        const c = p - h;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const p = new G(this._mouse.x, this._mouse.y, 0);
        p.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const m = new G(this._mouse.x, this._mouse.y, 0);
        m.unproject(this.object), this.object.position.sub(m).add(p), this.object.updateMatrixWorld(), h = O.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      h !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position) : (te.origin.copy(this.object.position), te.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(te.direction)) < nt ? this.object.lookAt(this.target) : (De.setFromNormalAndCoplanarPoint(this.object.up, this.target), te.intersectPlane(De, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const h = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), h !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > pe || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > pe || this._lastTargetPosition.distanceToSquared(this.target) > pe ? (this.dispatchEvent(Oe), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? k / 60 * this.autoRotateSpeed * e : k / 60 / 60 * this.autoRotateSpeed;
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
    O.setFromMatrixColumn(t, 0), O.multiplyScalar(-e), this._panOffset.add(O);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? O.setFromMatrixColumn(t, 1) : (O.setFromMatrixColumn(t, 0), O.crossVectors(this.object.up, O)), O.multiplyScalar(e), this._panOffset.add(O);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      O.copy(i).sub(this.target);
      let r = O.length();
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
    const s = this.domElement.getBoundingClientRect(), i = e - s.left, r = t - s.top, h = s.width, p = s.height;
    this._mouse.x = i / h * 2 - 1, this._mouse.y = -(r / p) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(k * this._rotateDelta.x / t.clientHeight), this._rotateUp(k * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(k * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-k * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(k * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-k * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(s, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(s, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(s * s + i * i);
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
      const s = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + s.x), r = 0.5 * (e.pageY + s.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(k * this._rotateDelta.x / t.clientHeight), this._rotateUp(k * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(s, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(s * s + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const h = (e.pageX + t.x) * 0.5, p = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(h, p);
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
    t === void 0 && (t = new L(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
function at(o) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(o.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(o) && (this._addPointer(o), o.pointerType === "touch" ? this._onTouchStart(o) : this._onMouseDown(o)));
}
function rt(o) {
  this.enabled !== !1 && (o.pointerType === "touch" ? this._onTouchMove(o) : this._onMouseMove(o));
}
function ct(o) {
  switch (this._removePointer(o), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(o.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Fe), this.state = x.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function lt(o) {
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
    case U.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(o), this.state = x.DOLLY;
      break;
    case U.ROTATE:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = x.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = x.ROTATE;
      }
      break;
    case U.PAN:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = x.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = x.PAN;
      }
      break;
    default:
      this.state = x.NONE;
  }
  this.state !== x.NONE && this.dispatchEvent(ve);
}
function ht(o) {
  switch (this.state) {
    case x.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(o);
      break;
    case x.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(o);
      break;
    case x.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(o);
      break;
  }
}
function pt(o) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== x.NONE || (o.preventDefault(), this.dispatchEvent(ve), this._handleMouseWheel(this._customWheelEvent(o)), this.dispatchEvent(Fe));
}
function dt(o) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(o);
}
function ut(o) {
  switch (this._trackPointer(o), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case $.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(o), this.state = x.TOUCH_ROTATE;
          break;
        case $.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(o), this.state = x.TOUCH_PAN;
          break;
        default:
          this.state = x.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case $.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(o), this.state = x.TOUCH_DOLLY_PAN;
          break;
        case $.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(o), this.state = x.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = x.NONE;
      }
      break;
    default:
      this.state = x.NONE;
  }
  this.state !== x.NONE && this.dispatchEvent(ve);
}
function mt(o) {
  switch (this._trackPointer(o), this.state) {
    case x.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(o), this.update();
      break;
    case x.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(o), this.update();
      break;
    case x.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(o), this.update();
      break;
    case x.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(o), this.update();
      break;
    default:
      this.state = x.NONE;
  }
}
function ft(o) {
  this.enabled !== !1 && o.preventDefault();
}
function _t(o) {
  o.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function bt(o) {
  o.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class yt {
  constructor(e) {
    this.animationId = null, this.gridHelper = null, this.axesHelper = null, this.frameCallbacks = [];
    const {
      container: t,
      antialias: s = !0,
      shadows: i = !0,
      backgroundColor: r = 657940,
      gridSize: h = 20,
      showGrid: p = !0,
      showAxes: c = !0
    } = e;
    this.container = t, this.clock = new _.Clock(), this.scene = new _.Scene(), this.scene.background = new _.Color(r), this.scene.fog = new _.FogExp2(r, 0.015);
    const m = t.clientWidth / t.clientHeight || 1;
    this.camera = new _.PerspectiveCamera(55, m, 0.1, 500), this.camera.position.set(12, 10, 12), this.camera.lookAt(0, 0, 0), this.renderer = new _.WebGLRenderer({
      antialias: s,
      preserveDrawingBuffer: !0
      // needed for PNG export
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(t.clientWidth, t.clientHeight), i && (this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = _.PCFSoftShadowMap), t.appendChild(this.renderer.domElement), this.controls = new it(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.08, this.controls.maxPolarAngle = Math.PI * 0.48, this.controls.minDistance = 2, this.controls.maxDistance = 80, p && (this.gridHelper = new _.GridHelper(h, h, 1973816, 1315882), this.scene.add(this.gridHelper)), c && (this.axesHelper = new _.AxesHelper(3), this.scene.add(this.axesHelper));
    const d = new _.AmbientLight(4210784, 0.3);
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
      e instanceof _.Mesh && (e.geometry.dispose(), Array.isArray(e.material) ? e.material.forEach((t) => t.dispose()) : e.material.dispose());
    });
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    e === 0 || t === 0 || (this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t));
  }
}
const Y = [
  { name: "full_frame", label: "全画幅 (Full Frame)", w: 36, h: 24 },
  { name: "arri_alexa35", label: "ARRI Alexa 35", w: 29.9, h: 22.2 },
  { name: "red_raptor", label: "RED V-Raptor", w: 40.96, h: 21.6 },
  { name: "sony_fx6", label: "Sony FX6", w: 35.7, h: 23.8 },
  { name: "canon_c70", label: "Canon C70 (Super35)", w: 26.2, h: 13.8 },
  { name: "bmpcc_6k", label: "BMPCC 6K (Super35)", w: 23.1, h: 12.95 },
  { name: "mft", label: "MFT (Micro Four Thirds)", w: 17.3, h: 13 }
];
function ie(o, e) {
  return e <= 0 || o <= 0 ? 0 : 2 * Math.atan(o / (2 * e)) * (180 / Math.PI);
}
function ye(o, e, t, s, i = 0.03) {
  if (o <= 0 || e <= 0 || t <= 0 || s <= 0)
    return { near: 0, far: 1 / 0, range: 1 / 0 };
  const r = 24 / s, h = i / r, p = o * o / (e * h * 1e3), c = o / 1e3, m = t * (p - c) / (p + t - 2 * c), d = t * (p - c) / (p - t);
  return {
    near: Math.max(0, m),
    far: d < 0 ? 1 / 0 : d,
    // negative means beyond hyperfocal
    range: d < 0 ? 1 / 0 : d - m
  };
}
function Jo(o, e) {
  const t = Y.find((s) => s.name === o);
  return t ? ie(t.h, e) : 0;
}
function q(o) {
  return o * (Math.PI / 180);
}
function Qo(o) {
  return o * (180 / Math.PI);
}
function Z() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}
function gt(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function K(o, e, t) {
  return o + (e - o) * gt(t, 0, 1);
}
function vt(o) {
  return o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2;
}
const jt = 8160255, xt = 16767293;
class Tt {
  constructor(e) {
    this.cameras = /* @__PURE__ */ new Map(), this.selectedId = null, this.scene = e;
  }
  /** Add a new camera to the scene */
  addCamera(e = {}) {
    const t = e.id || Z(), s = Y.find((h) => h.name === "full_frame"), i = {
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
      color: e.color || jt,
      movement: e.movement,
      script: e.script
    };
    i.fov = ie(i.sensorH, i.focal), i.dof = ye(i.focal, i.fstop, i.focusDist, i.sensorH);
    const r = this.createCameraMesh(i);
    return this.scene.add(r), this.cameras.set(t, { camera: i, group: r }), i;
  }
  /** Update camera parameters and refresh 3D visualization */
  updateCamera(e, t) {
    const s = this.cameras.get(e);
    return s ? (Object.assign(s.camera, t), s.camera.fov = ie(s.camera.sensorH, s.camera.focal), s.camera.dof = ye(
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
      s instanceof _.Mesh && (s.geometry.dispose(), Array.isArray(s.material) ? s.material.forEach((i) => i.dispose()) : s.material.dispose());
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
      q(t.pitch),
      q(t.yaw),
      q(t.roll)
    ));
  }
  /** Clear all cameras */
  clearAll() {
    for (const [e] of this.cameras)
      this.deleteCamera(e);
  }
  // --- Private helpers ---
  createCameraMesh(e) {
    const t = new _.Group();
    t.userData = { cameraId: e.id };
    const s = new _.BoxGeometry(0.3, 0.2, 0.4), i = new _.MeshStandardMaterial({
      color: e.color,
      metalness: 0.6,
      roughness: 0.3
    }), r = new _.Mesh(s, i);
    r.castShadow = !0, r.userData = { cameraId: e.id, part: "body" }, t.add(r);
    const h = new _.CylinderGeometry(0.08, 0.12, 0.2, 16), p = new _.MeshStandardMaterial({
      color: 2236962,
      metalness: 0.8,
      roughness: 0.2
    }), c = new _.Mesh(h, p);
    c.rotation.x = Math.PI / 2, c.position.z = 0.3, c.userData = { cameraId: e.id, part: "lens" }, t.add(c);
    const m = q(e.fov / 2), d = 3, u = d * Math.tan(m), g = new _.ConeGeometry(u, d, 4, 1, !0), l = new _.MeshBasicMaterial({
      color: e.color,
      transparent: !0,
      opacity: 0.08,
      side: _.DoubleSide,
      depthWrite: !1
    }), b = new _.Mesh(g, l);
    b.rotation.x = Math.PI / 2, b.position.z = d / 2 + 0.3, b.userData = { cameraId: e.id, part: "cone" }, t.add(b);
    const y = new _.ConeGeometry(u, d, 4, 1, !0), T = new _.MeshBasicMaterial({
      color: e.color,
      wireframe: !0,
      transparent: !0,
      opacity: 0.3
    }), C = new _.Mesh(y, T);
    return C.rotation.x = Math.PI / 2, C.position.z = d / 2 + 0.3, C.userData = { cameraId: e.id, part: "wire" }, t.add(C), t.position.set(e.position.x, e.position.y, e.position.z), t.rotation.set(
      q(e.rotation.pitch),
      q(e.rotation.yaw),
      q(e.rotation.roll)
    ), t;
  }
  highlightCamera(e, t = !0) {
    const s = this.cameras.get(e);
    if (!s) return;
    const i = t ? xt : s.camera.color;
    s.group.traverse((r) => {
      r instanceof _.Mesh && r.userData.part === "body" && r.material.color.setHex(i), r instanceof _.Mesh && (r.userData.part === "cone" || r.userData.part === "wire") && r.material.color.setHex(i);
    });
  }
}
class St {
  constructor(e) {
    this.objects = /* @__PURE__ */ new Map(), this.scene = e;
  }
  /** Add an object to the scene */
  addObject(e) {
    const t = e.id || Z(), s = {
      id: t,
      type: e.type,
      position: e.position || { x: 0, y: 0, z: 0 },
      rotation: e.rotation || { yaw: 0, pitch: 0, roll: 0 },
      scale: e.scale || { x: 1, y: 1, z: 1 },
      color: e.color || 8947848
    }, i = this.createMesh(s);
    return i.userData = { objectId: t, objectType: s.type }, this.scene.add(i), this.objects.set(t, { data: s, mesh: i }), s;
  }
  /** Update an existing object */
  updateObject(e, t) {
    const s = this.objects.get(e);
    if (!s) return null;
    Object.assign(s.data, t), this.scene.remove(s.mesh);
    const i = this.createMesh(s.data);
    return i.userData = { objectId: e, objectType: s.data.type }, this.scene.add(i), s.mesh = i, s.data;
  }
  /** Delete an object */
  deleteObject(e) {
    const t = this.objects.get(e);
    return t ? (this.scene.remove(t.mesh), t.mesh.traverse((s) => {
      s instanceof _.Mesh && (s.geometry.dispose(), Array.isArray(s.material) ? s.material.forEach((i) => i.dispose()) : s.material.dispose());
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
    const t = new _.MeshStandardMaterial({
      color: e.color,
      roughness: 0.7,
      metalness: 0.1
    });
    let s;
    switch (e.type) {
      case "box":
        s = new _.BoxGeometry(1, 1, 1);
        break;
      case "sphere":
        s = new _.SphereGeometry(0.5, 24, 24);
        break;
      case "cone":
        s = new _.ConeGeometry(0.5, 1, 16);
        break;
      case "cylinder":
        s = new _.CylinderGeometry(0.5, 0.5, 1, 16);
        break;
      case "torus":
        s = new _.TorusGeometry(0.5, 0.15, 12, 32);
        break;
      case "plane":
        s = new _.PlaneGeometry(1, 1);
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
        s = new _.BoxGeometry(0.3, 0.3, 0.3);
        break;
      default:
        s = new _.BoxGeometry(1, 1, 1);
    }
    const i = new _.Mesh(s, t);
    return i.castShadow = !0, i.receiveShadow = !0, this.applyTransform(i, e), i;
  }
  createPerson(e, t) {
    const s = new _.Group(), i = new _.CylinderGeometry(0.25, 0.2, 1.2, 8), r = new _.Mesh(i, t);
    r.position.y = 0.6, r.castShadow = !0, s.add(r);
    const h = new _.MeshStandardMaterial({ color: 14731424, roughness: 0.8 }), p = new _.SphereGeometry(0.15, 16, 16), c = new _.Mesh(p, h);
    return c.position.y = 1.35, c.castShadow = !0, s.add(c), this.applyTransform(s, e), s;
  }
  createBuilding(e, t) {
    const s = new _.Group(), i = new _.BoxGeometry(1, 1, 1), r = new _.Mesh(i, t);
    r.position.y = 0.5, r.castShadow = !0, r.receiveShadow = !0, s.add(r);
    const h = new _.MeshStandardMaterial({ color: 3359829, metalness: 0.5 });
    for (let p = 0; p < 3; p++)
      for (let c = 0; c < 2; c++) {
        const m = new _.BoxGeometry(0.2, 0.15, 0.02), d = new _.Mesh(m, h);
        d.position.set(-0.15 + c * 0.3, 0.2 + p * 0.25, 0.51), s.add(d);
      }
    return this.applyTransform(s, e), s;
  }
  createCar(e, t) {
    const s = new _.Group(), i = new _.BoxGeometry(2, 0.6, 1), r = new _.Mesh(i, t);
    r.position.y = 0.4, r.castShadow = !0, s.add(r);
    const h = new _.BoxGeometry(1.2, 0.5, 0.9), p = new _.MeshStandardMaterial({ color: 8956620, metalness: 0.3, roughness: 0.2 }), c = new _.Mesh(h, p);
    c.position.set(-0.1, 0.9, 0), s.add(c);
    const m = new _.MeshStandardMaterial({ color: 2236962 }), d = new _.CylinderGeometry(0.2, 0.2, 0.1, 16), u = [
      [-0.6, 0.2, 0.55],
      [0.6, 0.2, 0.55],
      [-0.6, 0.2, -0.55],
      [0.6, 0.2, -0.55]
    ];
    for (const [g, l, b] of u) {
      const y = new _.Mesh(d, m);
      y.position.set(g, l, b), y.rotation.x = Math.PI / 2, s.add(y);
    }
    return this.applyTransform(s, e), s;
  }
  createTree(e, t) {
    const s = new _.Group(), i = new _.MeshStandardMaterial({ color: 7029286, roughness: 0.9 }), r = new _.CylinderGeometry(0.1, 0.15, 1.5, 8), h = new _.Mesh(r, i);
    h.position.y = 0.75, h.castShadow = !0, s.add(h);
    const p = new _.SphereGeometry(0.8, 12, 12), c = new _.Mesh(p, t);
    return c.position.y = 2, c.castShadow = !0, s.add(c), this.applyTransform(s, e), s;
  }
  createChair(e, t) {
    const s = new _.Group(), i = new _.MeshStandardMaterial({ color: 3811866, roughness: 0.9 }), r = new _.BoxGeometry(0.5, 0.05, 0.5), h = new _.Mesh(r, t);
    h.position.y = 0.45, h.castShadow = !0, s.add(h);
    const p = new _.BoxGeometry(0.5, 0.5, 0.05), c = new _.Mesh(p, t);
    c.position.set(0, 0.7, -0.225), c.castShadow = !0, s.add(c);
    const m = new _.CylinderGeometry(0.02, 0.02, 0.45, 6), d = [
      [-0.2, 0.225, -0.2],
      [0.2, 0.225, -0.2],
      [-0.2, 0.225, 0.2],
      [0.2, 0.225, 0.2]
    ];
    for (const [u, g, l] of d) {
      const b = new _.Mesh(m, i);
      b.position.set(u, g, l), b.castShadow = !0, s.add(b);
    }
    return this.applyTransform(s, e), s;
  }
  applyTransform(e, t) {
    e.position.set(t.position.x, t.position.y, t.position.z), e.rotation.set(
      q(t.rotation.pitch),
      q(t.rotation.yaw),
      q(t.rotation.roll)
    ), e.scale.set(t.scale.x, t.scale.y, t.scale.z);
  }
}
const Ct = [
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
class wt {
  constructor(e) {
    this.helper = null, this.scene = e, this.mainLight = new _.DirectionalLight(16774624, 1.2), this.mainLight.position.set(10, 20, 10), this.mainLight.castShadow = !0, this.mainLight.shadow.mapSize.width = 2048, this.mainLight.shadow.mapSize.height = 2048, this.mainLight.shadow.camera.near = 0.5, this.mainLight.shadow.camera.far = 60, this.mainLight.shadow.camera.left = -20, this.mainLight.shadow.camera.right = 20, this.mainLight.shadow.camera.top = 20, this.mainLight.shadow.camera.bottom = -20, e.add(this.mainLight), this.fillLight = new _.PointLight(6719692, 0.3, 50), this.fillLight.position.set(-8, 8, -8), e.add(this.fillLight), this.config = {
      position: { x: 10, y: 20, z: 10 },
      intensity: 1.2,
      color: 16774624,
      preset: "daylight"
    };
  }
  /** Apply a named preset */
  applyPreset(e) {
    const t = Ct.find((s) => s.name === e);
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
    e && !this.helper && (this.helper = new _.DirectionalLightHelper(this.mainLight, 2), this.scene.add(this.helper)), this.helper && (this.helper.visible = e);
  }
  /** Clean up */
  dispose() {
    this.helper && (this.scene.remove(this.helper), this.helper.dispose()), this.scene.remove(this.mainLight), this.scene.remove(this.fillLight);
  }
}
class Et {
  constructor(e) {
    this.keyframes = [], this.line = null, this.markers = [], this.scene = e;
  }
  /** Add a keyframe */
  addKeyframe(e) {
    const t = {
      id: e.id || Z(),
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
    const t = vt(e);
    let s = 0;
    for (; s < this.keyframes.length - 1 && !(this.keyframes[s + 1].t >= t); s++)
      ;
    s = Math.min(s, this.keyframes.length - 2);
    const i = this.keyframes[s], r = this.keyframes[s + 1], h = r.t - i.t > 0 ? (t - i.t) / (r.t - i.t) : 0;
    return {
      position: {
        x: K(i.position.x, r.position.x, h),
        y: K(i.position.y, r.position.y, h),
        z: K(i.position.z, r.position.z, h)
      },
      rotation: {
        yaw: K(i.rotation.yaw, r.rotation.yaw, h),
        pitch: K(i.rotation.pitch, r.rotation.pitch, h),
        roll: K(i.rotation.roll, r.rotation.roll, h)
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
    var s, i;
    if (this.line) {
      this.scene.remove(this.line), (s = this.line.geometry) == null || s.dispose();
      const r = this.line.material;
      Array.isArray(r) ? r.forEach((h) => h.dispose()) : r == null || r.dispose(), this.line = null;
    }
    for (const r of this.markers) {
      this.scene.remove(r), (i = r.geometry) == null || i.dispose();
      const h = r.material;
      Array.isArray(h) ? h.forEach((p) => p.dispose()) : h == null || h.dispose();
    }
    if (this.markers = [], this.keyframes.length < 1) return;
    const e = new _.SphereGeometry(0.12, 8, 8), t = new _.MeshBasicMaterial({ color: 16739125 });
    for (const r of this.keyframes) {
      const h = new _.Mesh(e, t);
      h.position.set(r.position.x, r.position.y, r.position.z), this.scene.add(h), this.markers.push(h);
    }
    if (this.keyframes.length >= 2) {
      const r = this.keyframes.map(
        (c) => new _.Vector3(c.position.x, c.position.y, c.position.z)
      ), h = new _.BufferGeometry().setFromPoints(r), p = new _.LineBasicMaterial({
        color: 16739125,
        linewidth: 2
      });
      this.line = new _.Line(h, p), this.scene.add(this.line);
    }
  }
  /** Clean up */
  dispose() {
    this.clearAll();
  }
}
class Pt {
  constructor(e, t) {
    this.onPickCallback = null, this.onHoverCallback = null, this.isDragging = !1, this.dragTarget = null, this.cameraGroups = [], this.objectMeshes = [], this.onPointerDown = (s) => {
      this.updateMouse(s);
      const i = this.raycast();
      if (i.target === "camera" || i.target === "object") {
        this.isDragging = !0, this.dragTarget = {
          type: i.target,
          id: i.id
        };
        const r = this.getWorldPosition(i.target, i.id);
        if (r) {
          this.dragPlane.set(new _.Vector3(0, 1, 0), -r.y);
          const h = new _.Vector3();
          this.raycaster.ray.intersectPlane(this.dragPlane, h), this.dragOffset.copy(r).sub(h);
        }
      }
      this.onPickCallback && this.onPickCallback(i);
    }, this.onPointerMove = (s) => {
      if (this.updateMouse(s), this.isDragging && this.dragTarget) {
        const r = new _.Vector3();
        this.raycaster.ray.intersectPlane(this.dragPlane, r), r.add(this.dragOffset), this.onPickCallback && this.onPickCallback({
          target: this.dragTarget.type,
          id: this.dragTarget.id,
          point: r.clone(),
          groundPoint: new _.Vector3(r.x, 0, r.z)
        });
        return;
      }
      const i = this.raycast();
      this.onHoverCallback && this.onHoverCallback(i.target ? i : null);
    }, this.onPointerUp = (s) => {
      this.isDragging = !1, this.dragTarget = null;
    }, this.camera = e, this.scene = t, this.raycaster = new _.Raycaster(), this.mouse = new _.Vector2(), this.groundPlane = new _.Plane(new _.Vector3(0, 1, 0), 0), this.dragPlane = new _.Plane(new _.Vector3(0, 1, 0), 0), this.dragOffset = new _.Vector3();
  }
  /** Set the camera groups that can be picked */
  setCameraGroups(e) {
    this.cameraGroups = e;
  }
  /** Set the object meshes that can be picked */
  setObjectMeshes(e) {
    this.objectMeshes = e;
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
    var s, i;
    const t = (i = (s = e.target).getBoundingClientRect) == null ? void 0 : i.call(s);
    t && (this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera));
  }
  raycast() {
    const e = {
      target: null,
      id: null,
      point: new _.Vector3(),
      groundPoint: null
    }, t = [];
    for (const h of this.cameraGroups)
      h.traverse((p) => {
        p instanceof _.Mesh && t.push(p);
      });
    for (const h of this.objectMeshes)
      h.traverse((p) => {
        p instanceof _.Mesh && t.push(p);
      });
    const s = this.raycaster.intersectObjects(t, !1);
    if (s.length > 0) {
      const h = s[0], p = h.object.userData, c = new _.Vector3();
      if (this.raycaster.ray.intersectPlane(this.groundPlane, c), p.cameraId)
        return {
          target: "camera",
          id: p.cameraId,
          point: h.point.clone(),
          groundPoint: c
        };
      if (p.objectId)
        return {
          target: "object",
          id: p.objectId,
          point: h.point.clone(),
          groundPoint: c
        };
    }
    const i = new _.Vector3();
    return this.raycaster.ray.intersectPlane(this.groundPlane, i) ? {
      target: "ground",
      id: null,
      point: i.clone(),
      groundPoint: i.clone()
    } : e;
  }
  getWorldPosition(e, t) {
    if (e === "camera") {
      const i = this.cameraGroups.find((r) => r.userData.cameraId === t);
      return i ? i.position.clone() : null;
    }
    const s = this.objectMeshes.find((i) => i.userData.objectId === t);
    return s ? s.position.clone() : null;
  }
}
const Nt = {}, ke = (o) => {
  let e;
  const t = /* @__PURE__ */ new Set(), s = (d, u) => {
    const g = typeof d == "function" ? d(e) : d;
    if (!Object.is(g, e)) {
      const l = e;
      e = u ?? (typeof g != "object" || g === null) ? g : Object.assign({}, e, g), t.forEach((b) => b(e, l));
    }
  }, i = () => e, c = { setState: s, getState: i, getInitialState: () => m, subscribe: (d) => (t.add(d), () => t.delete(d)), destroy: () => {
    (Nt ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), t.clear();
  } }, m = e = o(s, i, c);
  return c;
}, Mt = (o) => o ? ke(o) : ke;
var ge = { exports: {} }, de = {}, se = { exports: {} }, ue = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Ot() {
  if (Re) return ue;
  Re = 1;
  var o = W;
  function e(u, g) {
    return u === g && (u !== 0 || 1 / u === 1 / g) || u !== u && g !== g;
  }
  var t = typeof Object.is == "function" ? Object.is : e, s = o.useState, i = o.useEffect, r = o.useLayoutEffect, h = o.useDebugValue;
  function p(u, g) {
    var l = g(), b = s({ inst: { value: l, getSnapshot: g } }), y = b[0].inst, T = b[1];
    return r(
      function() {
        y.value = l, y.getSnapshot = g, c(y) && T({ inst: y });
      },
      [u, l, g]
    ), i(
      function() {
        return c(y) && T({ inst: y }), u(function() {
          c(y) && T({ inst: y });
        });
      },
      [u]
    ), h(l), l;
  }
  function c(u) {
    var g = u.getSnapshot;
    u = u.value;
    try {
      var l = g();
      return !t(u, l);
    } catch {
      return !0;
    }
  }
  function m(u, g) {
    return g();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : p;
  return ue.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, ue;
}
var me = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Dt() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    function o(l, b) {
      return l === b && (l !== 0 || 1 / l === 1 / b) || l !== l && b !== b;
    }
    function e(l, b) {
      d || i.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var y = b();
      if (!u) {
        var T = b();
        r(y, T) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), u = !0);
      }
      T = h({
        inst: { value: y, getSnapshot: b }
      });
      var C = T[0].inst, R = T[1];
      return c(
        function() {
          C.value = y, C.getSnapshot = b, t(C) && R({ inst: C });
        },
        [l, y, b]
      ), p(
        function() {
          return t(C) && R({ inst: C }), l(function() {
            t(C) && R({ inst: C });
          });
        },
        [l]
      ), m(y), y;
    }
    function t(l) {
      var b = l.getSnapshot;
      l = l.value;
      try {
        var y = b();
        return !r(l, y);
      } catch {
        return !0;
      }
    }
    function s(l, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = W, r = typeof Object.is == "function" ? Object.is : o, h = i.useState, p = i.useEffect, c = i.useLayoutEffect, m = i.useDebugValue, d = !1, u = !1, g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : e;
    me.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), me;
}
var Ae;
function ze() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? se.exports = Ot() : se.exports = Dt()), se.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function kt() {
  if (Le) return de;
  Le = 1;
  var o = W, e = ze();
  function t(m, d) {
    return m === d && (m !== 0 || 1 / m === 1 / d) || m !== m && d !== d;
  }
  var s = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, r = o.useRef, h = o.useEffect, p = o.useMemo, c = o.useDebugValue;
  return de.useSyncExternalStoreWithSelector = function(m, d, u, g, l) {
    var b = r(null);
    if (b.current === null) {
      var y = { hasValue: !1, value: null };
      b.current = y;
    } else y = b.current;
    b = p(
      function() {
        function C(w) {
          if (!R) {
            if (R = !0, I = w, w = g(w), l !== void 0 && y.hasValue) {
              var D = y.value;
              if (l(D, w))
                return A = D;
            }
            return A = w;
          }
          if (D = A, s(I, w)) return D;
          var F = g(w);
          return l !== void 0 && l(D, F) ? (I = w, D) : (I = w, A = F);
        }
        var R = !1, I, A, H = u === void 0 ? null : u;
        return [
          function() {
            return C(d());
          },
          H === null ? void 0 : function() {
            return C(H());
          }
        ];
      },
      [d, u, g, l]
    );
    var T = i(m, b[0], b[1]);
    return h(
      function() {
        y.hasValue = !0, y.value = T;
      },
      [T]
    ), c(T), T;
  }, de;
}
var fe = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Rt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    function o(m, d) {
      return m === d && (m !== 0 || 1 / m === 1 / d) || m !== m && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = W, t = ze(), s = typeof Object.is == "function" ? Object.is : o, i = t.useSyncExternalStore, r = e.useRef, h = e.useEffect, p = e.useMemo, c = e.useDebugValue;
    fe.useSyncExternalStoreWithSelector = function(m, d, u, g, l) {
      var b = r(null);
      if (b.current === null) {
        var y = { hasValue: !1, value: null };
        b.current = y;
      } else y = b.current;
      b = p(
        function() {
          function C(w) {
            if (!R) {
              if (R = !0, I = w, w = g(w), l !== void 0 && y.hasValue) {
                var D = y.value;
                if (l(D, w))
                  return A = D;
              }
              return A = w;
            }
            if (D = A, s(I, w))
              return D;
            var F = g(w);
            return l !== void 0 && l(D, F) ? (I = w, D) : (I = w, A = F);
          }
          var R = !1, I, A, H = u === void 0 ? null : u;
          return [
            function() {
              return C(d());
            },
            H === null ? void 0 : function() {
              return C(H());
            }
          ];
        },
        [d, u, g, l]
      );
      var T = i(m, b[0], b[1]);
      return h(
        function() {
          y.hasValue = !0, y.value = T;
        },
        [T]
      ), c(T), T;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), fe;
}
process.env.NODE_ENV === "production" ? ge.exports = kt() : ge.exports = Rt();
var It = ge.exports;
const At = /* @__PURE__ */ tt(It), Ve = {}, { useDebugValue: Lt } = W, { useSyncExternalStoreWithSelector: Gt } = At;
let qe = !1;
const qt = (o) => o;
function Bt(o, e = qt, t) {
  (Ve ? "production" : void 0) !== "production" && t && !qe && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), qe = !0);
  const s = Gt(
    o.subscribe,
    o.getState,
    o.getServerState || o.getInitialState,
    e,
    t
  );
  return Lt(s), s;
}
const Be = (o) => {
  (Ve ? "production" : void 0) !== "production" && typeof o != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof o == "function" ? Mt(o) : o, t = (s, i) => Bt(e, s, i);
  return Object.assign(t, e), t;
}, Ht = (o) => o ? Be(o) : Be;
function Ft() {
  return {
    version: "3.0",
    cameras: [],
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
const B = [], ne = [], Ke = 50, v = Ht((o, e) => ({
  // Initial state
  project: Ft(),
  mode: "select",
  tool: "camera",
  sideTab: "cameras",
  bottomTab: "timeline",
  selectedCameraId: null,
  selectedObjectId: null,
  showGrid: !0,
  showAxes: !0,
  showFovCones: !0,
  // --- Camera actions ---
  addCamera: (t) => o((s) => (oe(s.project), {
    project: {
      ...s.project,
      cameras: [...s.project.cameras, t]
    }
  })),
  updateCamera: (t, s) => o((i) => (oe(i.project), {
    project: {
      ...i.project,
      cameras: i.project.cameras.map(
        (r) => r.id === t ? { ...r, ...s } : r
      )
    }
  })),
  deleteCamera: (t) => o((s) => (oe(s.project), {
    project: {
      ...s.project,
      cameras: s.project.cameras.filter((i) => i.id !== t)
    },
    selectedCameraId: s.selectedCameraId === t ? null : s.selectedCameraId
  })),
  selectCamera: (t) => o({ selectedCameraId: t, selectedObjectId: null }),
  setCameraMovement: (t, s) => o((i) => ({
    project: {
      ...i.project,
      cameras: i.project.cameras.map(
        (r) => r.id === t ? { ...r, movement: s } : r
      )
    }
  })),
  // --- Object actions ---
  addObject: (t) => o((s) => (oe(s.project), {
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: [...s.project.scene.objects, t]
      }
    }
  })),
  updateObject: (t, s) => o((i) => ({
    project: {
      ...i.project,
      scene: {
        ...i.project.scene,
        objects: i.project.scene.objects.map(
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
        objects: s.project.scene.objects.filter((i) => i.id !== t)
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
  // --- Path actions ---
  setPath: (t) => o((s) => ({
    project: { ...s.project, path: t }
  })),
  addPathPoint: (t) => o((s) => ({
    project: { ...s.project, path: [...s.project.path, t] }
  })),
  removePathPoint: (t) => o((s) => ({
    project: { ...s.project, path: s.project.path.filter((i) => i.id !== t) }
  })),
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
  setStoryboardCell: (t, s) => o((i) => {
    const r = [...i.project.storyboard.cells], h = r.findIndex((p) => p.index === t);
    return h >= 0 ? r[h] = { ...r[h], cameraId: s ?? void 0 } : r.push({ index: t, cameraId: s ?? void 0 }), {
      project: {
        ...i.project,
        storyboard: { ...i.project.storyboard, cells: r }
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
    selectedObjectId: null
  }),
  getProjectData: () => e().project,
  // --- Undo/Redo ---
  undo: () => {
    if (B.length === 0) return;
    const t = B.pop();
    ne.push(structuredClone(e().project)), o({ project: t });
  },
  redo: () => {
    if (ne.length === 0) return;
    const t = ne.pop();
    B.push(structuredClone(e().project)), B.length > Ke && B.shift(), o({ project: t });
  }
}));
function oe(o) {
  B.push(structuredClone(o)), B.length > Ke && B.shift(), ne.length = 0;
}
const zt = "_cameraPlanner_vqps8_9", Vt = "_cpMain_vqps8_39", Kt = "_cpViewportWrapper_vqps8_51", $t = "_cameraPlannerViewport_vqps8_63", Ut = "_cpToolbar_vqps8_87", Yt = "_cpToolbarGroup_vqps8_107", Wt = "_cpToolbarLabel_vqps8_119", Zt = "_cpToolbarBtn_vqps8_135", Xt = "_active_vqps8_175", Jt = "_cpToolbarSep_vqps8_187", Qt = "_cpToolbarSpacer_vqps8_201", es = "_cpToolbarExport_vqps8_209", ts = "_cpIcon_vqps8_239", ss = "_cpIconLg_vqps8_249", os = "_cpIconXl_vqps8_259", ns = "_cpSidebar_vqps8_273", is = "_cpSidebarTabs_vqps8_293", as = "_cpTabBtn_vqps8_305", rs = "_cpTabLabel_vqps8_357", cs = "_cpSidebarContent_vqps8_365", ls = "_cpCameraListHeader_vqps8_381", hs = "_cpCameraListItems_vqps8_399", ps = "_cpCameraItem_vqps8_411", ds = "_selected_vqps8_441", us = "_cpCameraColor_vqps8_451", ms = "_cpCameraInfo_vqps8_465", fs = "_cpCameraName_vqps8_475", _s = "_cpCameraMeta_vqps8_487", bs = "_cpCameraDelete_vqps8_499", ys = "_cpPaletteHeader_vqps8_553", gs = "_cpTemplatesHeader_vqps8_555", vs = "_cpPaletteGrid_vqps8_567", js = "_cpPaletteItem_vqps8_579", xs = "_cpPaletteLabel_vqps8_615", Ts = "_cpTemplatesGrid_vqps8_629", Ss = "_cpTemplateCard_vqps8_641", Cs = "_cpTemplateName_vqps8_677", ws = "_cpTemplateEn_vqps8_689", Es = "_cpTemplateCount_vqps8_699", Ps = "_cpPropertyPanel_vqps8_721", Ns = "_cpPanelSection_vqps8_739", Ms = "_cpSectionTitle_vqps8_747", Os = "_cpField_vqps8_769", Ds = "_cpFieldValue_vqps8_861", ks = "_cpFieldRow_vqps8_877", Rs = "_cpCalcRow_vqps8_885", Is = "_cpCalcValue_vqps8_901", As = "_cpMono_vqps8_911", Ls = "_cpBottomPanel_vqps8_925", Gs = "_cpBottomTabs_vqps8_943", qs = "_cpBottomContent_vqps8_969", Bs = "_cpTimeline_vqps8_985", Hs = "_cpTimelineControls_vqps8_997", Fs = "_cpPlayBtn_vqps8_1009", zs = "_cpTimelineBtn_vqps8_1049", Vs = "_cpTimelineTime_vqps8_1087", Ks = "_cpTimelineTrack_vqps8_1099", $s = "_cpTimelineSlider_vqps8_1107", Us = "_cpTimelineMarkers_vqps8_1117", Ys = "_cpTimelineMark_vqps8_1117", Ws = "_cpStoryboard_vqps8_1147", Zs = "_cpStoryboardHeader_vqps8_1159", Xs = "_cpStoryboardToggle_vqps8_1177", Js = "_cpStoryboardGrid_vqps8_1187", Qs = "_cpStoryboardCell_vqps8_1199", eo = "_hasCamera_vqps8_1237", to = "_cpCellNumber_vqps8_1247", so = "_cpCellCamera_vqps8_1263", oo = "_cpCellCamName_vqps8_1271", no = "_cpCellCamMeta_vqps8_1283", io = "_cpCellEmpty_vqps8_1293", ao = "_cpKeyframesHeader_vqps8_1317", ro = "_cpKeyframesList_vqps8_1329", co = "_cpKeyframeItem_vqps8_1341", lo = "_cpKfIndex_vqps8_1361", ho = "_cpKfPos_vqps8_1371", po = "_cpKfTime_vqps8_1381", uo = "_cpPlaceholder_vqps8_1393", mo = "_cpHint_vqps8_1407", fo = "_cpEmpty_vqps8_1419", _o = "_cpBtnSm_vqps8_1433", bo = "_cpBtn_vqps8_1433", yo = "_cpBtnPrimary_vqps8_1507", go = "_cpDialogOverlay_vqps8_1533", vo = "_cpDialog_vqps8_1533", jo = "_cpDialogHeader_vqps8_1581", xo = "_cpDialogClose_vqps8_1601", To = "_cpDialogTabs_vqps8_1639", So = "_cpDialogBody_vqps8_1651", Co = "_cpDialogActions_vqps8_1661", wo = "_cpExportInfo_vqps8_1675", Eo = "_cpExportJson_vqps8_1697", a = {
  cameraPlanner: zt,
  cpMain: Vt,
  cpViewportWrapper: Kt,
  cameraPlannerViewport: $t,
  cpToolbar: Ut,
  cpToolbarGroup: Yt,
  cpToolbarLabel: Wt,
  cpToolbarBtn: Zt,
  active: Xt,
  cpToolbarSep: Jt,
  cpToolbarSpacer: Qt,
  cpToolbarExport: es,
  cpIcon: ts,
  cpIconLg: ss,
  cpIconXl: os,
  cpSidebar: ns,
  cpSidebarTabs: is,
  cpTabBtn: as,
  cpTabLabel: rs,
  cpSidebarContent: cs,
  cpCameraListHeader: ls,
  cpCameraListItems: hs,
  cpCameraItem: ps,
  selected: ds,
  cpCameraColor: us,
  cpCameraInfo: ms,
  cpCameraName: fs,
  cpCameraMeta: _s,
  cpCameraDelete: bs,
  cpPaletteHeader: ys,
  cpTemplatesHeader: gs,
  cpPaletteGrid: vs,
  cpPaletteItem: js,
  cpPaletteLabel: xs,
  cpTemplatesGrid: Ts,
  cpTemplateCard: Ss,
  cpTemplateName: Cs,
  cpTemplateEn: ws,
  cpTemplateCount: Es,
  cpPropertyPanel: Ps,
  cpPanelSection: Ns,
  cpSectionTitle: Ms,
  cpField: Os,
  cpFieldValue: Ds,
  cpFieldRow: ks,
  cpCalcRow: Rs,
  cpCalcValue: Is,
  cpMono: As,
  cpBottomPanel: Ls,
  cpBottomTabs: Gs,
  cpBottomContent: qs,
  cpTimeline: Bs,
  cpTimelineControls: Hs,
  cpPlayBtn: Fs,
  cpTimelineBtn: zs,
  cpTimelineTime: Vs,
  cpTimelineTrack: Ks,
  cpTimelineSlider: $s,
  cpTimelineMarkers: Us,
  cpTimelineMark: Ys,
  cpStoryboard: Ws,
  cpStoryboardHeader: Zs,
  cpStoryboardToggle: Xs,
  cpStoryboardGrid: Js,
  cpStoryboardCell: Qs,
  hasCamera: eo,
  cpCellNumber: to,
  cpCellCamera: so,
  cpCellCamName: oo,
  cpCellCamMeta: no,
  cpCellEmpty: io,
  cpKeyframesHeader: ao,
  cpKeyframesList: ro,
  cpKeyframeItem: co,
  cpKfIndex: lo,
  cpKfPos: ho,
  cpKfTime: po,
  cpPlaceholder: uo,
  cpHint: mo,
  cpEmpty: fo,
  cpBtnSm: _o,
  cpBtn: bo,
  cpBtnPrimary: yo,
  cpDialogOverlay: go,
  cpDialog: vo,
  cpDialogHeader: jo,
  cpDialogClose: xo,
  cpDialogTabs: To,
  cpDialogBody: So,
  cpDialogActions: Co,
  cpExportInfo: wo,
  cpExportJson: Eo
}, Po = ({ outputManager: o }) => {
  const e = Q(null), t = Q(null), s = v;
  z(() => {
    const c = e.current;
    if (!c) return;
    const m = new yt({
      container: c,
      antialias: !0,
      shadows: !0,
      showGrid: !0,
      showAxes: !0
    }), d = new Tt(m.scene), u = new St(m.scene), g = new wt(m.scene), l = new Et(m.scene), b = new Pt(m.camera, m.scene);
    return b.setCameraGroups(d.getAllMeshGroups()), b.setObjectMeshes(u.getAllMeshes()), b.enable(m.getCanvas()), o.setPNGExporter(() => m.exportPNGBlob()), b.onPick((y) => {
      y.target === "camera" && y.id ? (s.getState().selectCamera(y.id), o.emit("camera:select", y.id)) : y.target === "object" && y.id && s.getState().selectObject(y.id);
    }), m.start(), t.current = {
      scene: m,
      cameraRig: d,
      objectLib: u,
      lightSystem: g,
      pathSystem: l,
      rayPicker: b
    }, () => {
      m.dispose(), t.current = null;
    };
  }, [o]);
  const i = s((c) => c.project), r = s((c) => c.selectedCameraId);
  z(() => {
    const c = t.current;
    if (!c) return;
    const m = i.cameras, d = c.cameraRig.getAllCameras(), u = new Set(d.map((l) => l.id)), g = new Set(m.map((l) => l.id));
    for (const l of m)
      u.has(l.id) || c.cameraRig.addCamera(l);
    for (const l of u)
      g.has(l) || c.cameraRig.deleteCamera(l);
    for (const l of m) {
      const b = c.cameraRig.getCamera(l.id);
      b && (b.focal !== l.focal || b.position.x !== l.position.x || b.position.y !== l.position.y || b.position.z !== l.position.z) && c.cameraRig.updateCamera(l.id, l);
    }
    c.cameraRig.selectCamera(r), c.lightSystem.update(i.scene.lighting);
  }, [i.cameras, i.scene.lighting, r]);
  const h = s((c) => c.showGrid), p = s((c) => c.showAxes);
  return z(() => {
    var c;
    (c = t.current) == null || c.scene.setGridVisible(h);
  }, [h]), z(() => {
    var c;
    (c = t.current) == null || c.scene.setAxesVisible(p);
  }, [p]), /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: e,
      className: a.cameraPlannerViewport,
      style: { width: "100%", height: "100%", minHeight: "400px" }
    }
  );
}, No = [
  { value: "select", label: "选择", icon: "↖" },
  { value: "place", label: "放置", icon: "⊕" },
  { value: "move", label: "移动", icon: "✥" },
  { value: "rotate", label: "旋转", icon: "↻" }
], Mo = [
  { value: "camera", label: "摄像机", icon: "📷" },
  { value: "object", label: "物体", icon: "📦" },
  { value: "light", label: "灯光", icon: "💡" },
  { value: "path", label: "路径", icon: "〰" }
], Oo = ({ onExport: o }) => {
  const e = v((u) => u.mode), t = v((u) => u.tool), s = v((u) => u.showGrid), i = v((u) => u.showAxes), r = v((u) => u.setMode), h = v((u) => u.setTool), p = v((u) => u.toggleGrid), c = v((u) => u.toggleAxes), m = v((u) => u.undo), d = v((u) => u.redo);
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpToolbar, children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ n.jsx("span", { className: a.cpToolbarLabel, children: "模式" }),
      No.map((u) => /* @__PURE__ */ n.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${e === u.value ? a.active : ""}`,
          onClick: () => r(u.value),
          title: u.label,
          children: /* @__PURE__ */ n.jsx("span", { className: a.cpIcon, children: u.icon })
        },
        u.value
      ))
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ n.jsx("span", { className: a.cpToolbarLabel, children: "工具" }),
      Mo.map((u) => /* @__PURE__ */ n.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${t === u.value ? a.active : ""}`,
          onClick: () => h(u.value),
          title: u.label,
          children: /* @__PURE__ */ n.jsx("span", { className: a.cpIcon, children: u.icon })
        },
        u.value
      ))
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ n.jsx("button", { className: a.cpToolbarBtn, onClick: m, title: "撤销 (Ctrl+Z)", children: "↩" }),
      /* @__PURE__ */ n.jsx("button", { className: a.cpToolbarBtn, onClick: d, title: "重做 (Ctrl+Y)", children: "↪" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${s ? a.active : ""}`,
          onClick: p,
          title: "网格",
          children: "#"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${i ? a.active : ""}`,
          onClick: c,
          title: "坐标轴",
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: a.cpToolbarSpacer }),
    o && /* @__PURE__ */ n.jsx("button", { className: [a.cpToolbarBtn, a.cpToolbarExport].join(" "), onClick: o, children: "导出" })
  ] });
}, Do = () => {
  const o = v((p) => p.project.cameras), e = v((p) => p.selectedCameraId), t = v((p) => p.selectCamera), s = v((p) => p.addCamera), i = v((p) => p.deleteCamera), r = () => {
    const p = Y[0], c = 50, m = ie(p.h, c), d = ye(c, 2.8, 5, p.h), u = {
      id: Z(),
      name: `CAM-${o.length + 1}`,
      focal: c,
      sensorW: p.w,
      sensorH: p.h,
      fstop: 2.8,
      focusDist: 5,
      height: 1.6,
      position: { x: Math.random() * 4 - 2, y: 1.6, z: Math.random() * 4 - 2 },
      rotation: { yaw: Math.random() * 360 - 180, pitch: 0, roll: 0 },
      fov: m,
      dof: d,
      color: 8160255
    };
    s(u), P.emit("camera:add", u), t(u.id);
  }, h = (p) => {
    i(p), P.emit("camera:delete", p);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpCameraList, children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpCameraListHeader, children: [
      /* @__PURE__ */ n.jsxs("span", { children: [
        "摄像机 (",
        o.length,
        ")"
      ] }),
      /* @__PURE__ */ n.jsx("button", { className: a.cpBtnSm, onClick: r, children: "+ 添加" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpCameraListItems, children: [
      o.length === 0 && /* @__PURE__ */ n.jsx("div", { className: a.cpEmpty, children: '暂无摄像机，点击"添加"创建' }),
      o.map((p) => /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: `${a.cpCameraItem} ${e === p.id ? a.selected : ""}`,
          onClick: () => t(p.id),
          children: [
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: a.cpCameraColor,
                style: { backgroundColor: `#${p.color.toString(16).padStart(6, "0")}` }
              }
            ),
            /* @__PURE__ */ n.jsxs("div", { className: a.cpCameraInfo, children: [
              /* @__PURE__ */ n.jsx("div", { className: a.cpCameraName, children: p.name }),
              /* @__PURE__ */ n.jsxs("div", { className: a.cpCameraMeta, children: [
                p.focal,
                "mm · f/",
                p.fstop,
                " · FOV ",
                p.fov.toFixed(1),
                "°"
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                className: a.cpCameraDelete,
                onClick: (c) => {
                  c.stopPropagation(), h(p.id);
                },
                title: "删除",
                children: "×"
              }
            )
          ]
        },
        p.id
      ))
    ] })
  ] });
}, ko = [
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
], Ro = () => {
  const o = v((t) => t.addObject), e = (t) => {
    const s = {
      id: Z(),
      type: t,
      position: { x: 0, y: 0, z: 0 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: 8947848
    };
    o(s), P.emit("object:add", s.id);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpObjectPalette, children: [
    /* @__PURE__ */ n.jsx("div", { className: a.cpPaletteHeader, children: "物体库" }),
    /* @__PURE__ */ n.jsx("div", { className: a.cpPaletteGrid, children: ko.map((t) => /* @__PURE__ */ n.jsxs(
      "button",
      {
        className: a.cpPaletteItem,
        onClick: () => e(t.type),
        title: t.label,
        children: [
          /* @__PURE__ */ n.jsx("span", { className: a.cpIconLg, children: t.icon }),
          /* @__PURE__ */ n.jsx("span", { className: a.cpPaletteLabel, children: t.label })
        ]
      },
      t.type
    )) })
  ] });
};
function E(o, e, t, s, i = 1, r = 1, h = 1, p = 8947848) {
  return {
    type: o,
    position: { x: e, y: t, z: s },
    rotation: { yaw: 0, pitch: 0, roll: 0 },
    scale: { x: i, y: r, z: h },
    color: p
  };
}
const Io = [
  {
    template: "studio",
    label: "摄影棚",
    labelEn: "Studio",
    icon: "🎬",
    objects: [
      E("plane", 0, 0, 0, 20, 1, 20, 2763306),
      E("box", -6, 1.5, -8, 3, 3, 0.3, 3355443),
      // backdrop
      E("cylinder", -3, 0.5, 0, 0.3, 1, 0.3, 4473924),
      // light stand
      E("cylinder", 3, 0.5, 0, 0.3, 1, 0.3, 4473924)
      // light stand
    ]
  },
  {
    template: "living_room",
    label: "客厅",
    labelEn: "Living Room",
    icon: "🛋️",
    objects: [
      E("plane", 0, 0, 0, 12, 1, 10, 9139029),
      // floor
      E("box", 0, 0.4, -4, 4, 0.8, 1, 6636321),
      // sofa
      E("box", 0, 0.25, 0, 2, 0.5, 1.2, 4863784),
      // coffee table
      E("box", -5, 1, -4.5, 0.3, 2, 3, 5592405),
      // bookshelf
      E("box", 5, 0.5, -4.5, 2, 1, 0.5, 3355443)
      // TV stand
    ]
  },
  {
    template: "street",
    label: "街道",
    labelEn: "Street",
    icon: "🏙️",
    objects: [
      E("plane", 0, 0, 0, 8, 1, 30, 3815994),
      // road
      E("building", -6, 4, -5, 4, 8, 6, 6710886),
      E("building", 6, 3, -5, 4, 6, 6, 7829367),
      E("building", -6, 5, 10, 4, 10, 6, 5592405),
      E("tree", 4, 2, 5, 1, 4, 1, 2972199),
      E("tree", -4, 2, 12, 1, 4, 1, 2972199)
    ]
  },
  {
    template: "cafe",
    label: "咖啡馆",
    labelEn: "Cafe",
    icon: "☕",
    objects: [
      E("plane", 0, 0, 0, 10, 1, 8, 9139029),
      E("cylinder", -2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      E("cylinder", 2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      E("cylinder", 0, 0.35, 2, 0.5, 0.7, 0.5, 9127187),
      // round table
      E("box", -4, 1, -3.5, 2, 2, 0.5, 6636321),
      // bar counter
      E("box", 4, 1.2, -3.5, 0.3, 2.4, 2, 4473924)
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
], Ao = () => {
  const o = v((t) => t.setSceneConfig), e = (t) => {
    const s = t.objects.map((i) => ({
      ...i,
      id: Z()
    }));
    o({
      template: t.template,
      objects: s
    }), P.emit("scene:change", {
      template: t.template,
      objects: s,
      lighting: v.getState().project.scene.lighting
    });
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpSceneTemplates, children: [
    /* @__PURE__ */ n.jsx("div", { className: a.cpTemplatesHeader, children: "场景模板" }),
    /* @__PURE__ */ n.jsx("div", { className: a.cpTemplatesGrid, children: Io.map((t) => /* @__PURE__ */ n.jsxs(
      "button",
      {
        className: a.cpTemplateCard,
        onClick: () => e(t),
        children: [
          /* @__PURE__ */ n.jsx("span", { className: a.cpIconXl, children: t.icon }),
          /* @__PURE__ */ n.jsxs("div", { className: a.cpTemplateInfo, children: [
            /* @__PURE__ */ n.jsx("div", { className: a.cpTemplateName, children: t.label }),
            /* @__PURE__ */ n.jsx("div", { className: a.cpTemplateEn, children: t.labelEn }),
            /* @__PURE__ */ n.jsxs("div", { className: a.cpTemplateCount, children: [
              t.objects.length,
              " 个物体"
            ] })
          ] })
        ]
      },
      t.template
    )) })
  ] });
}, Lo = [
  { value: "cameras", label: "机位", icon: "📷" },
  { value: "objects", label: "物体", icon: "📦" },
  { value: "templates", label: "场景", icon: "🏠" },
  { value: "characters", label: "角色", icon: "👤" }
], Go = () => {
  const o = v((t) => t.sideTab), e = v((t) => t.setSideTab);
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpSidebar, children: [
    /* @__PURE__ */ n.jsx("div", { className: a.cpSidebarTabs, children: Lo.map((t) => /* @__PURE__ */ n.jsxs(
      "button",
      {
        className: `${a.cpTabBtn} ${o === t.value ? a.active : ""}`,
        onClick: () => e(t.value),
        title: t.label,
        children: [
          /* @__PURE__ */ n.jsx("span", { className: a.cpIcon, children: t.icon }),
          /* @__PURE__ */ n.jsx("span", { className: a.cpTabLabel, children: t.label })
        ]
      },
      t.value
    )) }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpSidebarContent, children: [
      o === "cameras" && /* @__PURE__ */ n.jsx(Do, {}),
      o === "objects" && /* @__PURE__ */ n.jsx(Ro, {}),
      o === "templates" && /* @__PURE__ */ n.jsx(Ao, {}),
      o === "characters" && /* @__PURE__ */ n.jsxs("div", { className: a.cpPlaceholder, children: [
        /* @__PURE__ */ n.jsx("p", { children: "角色面板（待开发）" }),
        /* @__PURE__ */ n.jsx("p", { className: a.cpHint, children: "从剧本导入角色，自动分配位置" })
      ] })
    ] })
  ] });
}, He = [
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
], qo = () => {
  const o = v((c) => c.selectedCameraId), e = v((c) => c.selectedObjectId), t = v((c) => c.project.cameras), s = v((c) => c.project.scene.objects), i = v((c) => c.updateCamera), r = v((c) => c.updateObject), h = t.find((c) => c.id === o), p = s.find((c) => c.id === e);
  return !h && !p ? /* @__PURE__ */ n.jsx("div", { className: a.cpPropertyPanel, children: /* @__PURE__ */ n.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ n.jsx("p", { children: "选择机位或物体查看属性" }) }) }) : h ? /* @__PURE__ */ n.jsx(Bo, { camera: h, onUpdate: i }) : p ? /* @__PURE__ */ n.jsx(Ho, { object: p, onUpdate: r }) : null;
}, Bo = ({ camera: o, onUpdate: e }) => {
  var h, p, c, m, d, u, g;
  const t = (l, b) => {
    const y = { [l]: b };
    e(o.id, y), P.emit("camera:change", { ...o, ...y });
  }, s = (l, b) => {
    const y = { ...o.position, [l]: b };
    e(o.id, { position: y }), P.emit("camera:change", { ...o, position: y });
  }, i = (l, b) => {
    const y = { ...o.rotation, [l]: b };
    e(o.id, { rotation: y }), P.emit("camera:change", { ...o, rotation: y });
  }, r = (l) => {
    const b = Y.find((y) => y.name === l);
    b && e(o.id, { sensorW: b.w, sensorH: b.h });
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpPropertyPanel, children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "摄像机参数" }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "名称" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: o.name,
            onChange: (l) => t("name", l.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "焦距 (mm)" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "8",
            max: "300",
            step: "1",
            value: o.focal,
            onChange: (l) => t("focal", Number(l.target.value))
          }
        ),
        /* @__PURE__ */ n.jsxs("span", { className: a.cpFieldValue, children: [
          o.focal,
          "mm"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "传感器" }),
        /* @__PURE__ */ n.jsx(
          "select",
          {
            value: ((h = Y.find(
              (l) => Math.abs(l.w - o.sensorW) < 0.1 && Math.abs(l.h - o.sensorH) < 0.1
            )) == null ? void 0 : h.name) || "",
            onChange: (l) => r(l.target.value),
            children: Y.map((l) => /* @__PURE__ */ n.jsx("option", { value: l.name, children: l.label }, l.name))
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "光圈 (f/)" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "1.2",
            max: "22",
            step: "0.1",
            value: o.fstop,
            onChange: (l) => t("fstop", Number(l.target.value))
          }
        ),
        /* @__PURE__ */ n.jsxs("span", { className: a.cpFieldValue, children: [
          "f/",
          o.fstop.toFixed(1)
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "对焦距离 (m)" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "0.3",
            max: "100",
            step: "0.1",
            value: o.focusDist,
            onChange: (l) => t("focusDist", Number(l.target.value))
          }
        ),
        /* @__PURE__ */ n.jsxs("span", { className: a.cpFieldValue, children: [
          o.focusDist.toFixed(1),
          "m"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((l) => /* @__PURE__ */ n.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ n.jsx("label", { children: l.toUpperCase() }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: o.position[l],
            onChange: (b) => s(l, Number(b.target.value))
          }
        )
      ] }, l))
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "旋转" }),
      ["yaw", "pitch", "roll"].map((l) => /* @__PURE__ */ n.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ n.jsx("label", { children: l }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "-180",
            max: "180",
            step: "1",
            value: o.rotation[l],
            onChange: (b) => i(l, Number(b.target.value))
          }
        ),
        /* @__PURE__ */ n.jsxs("span", { className: a.cpFieldValue, children: [
          o.rotation[l],
          "°"
        ] })
      ] }, l))
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "计算值" }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ n.jsx("span", { children: "FOV" }),
        /* @__PURE__ */ n.jsxs("span", { className: a.cpCalcValue, children: [
          o.fov.toFixed(1),
          "°"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ n.jsx("span", { children: "景深范围" }),
        /* @__PURE__ */ n.jsx("span", { className: a.cpCalcValue, children: o.dof.range === 1 / 0 ? "∞" : `${o.dof.range.toFixed(2)}m` })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ n.jsx("span", { children: "近焦" }),
        /* @__PURE__ */ n.jsxs("span", { className: a.cpCalcValue, children: [
          o.dof.near.toFixed(2),
          "m"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ n.jsx("span", { children: "远焦" }),
        /* @__PURE__ */ n.jsx("span", { className: a.cpCalcValue, children: o.dof.far === 1 / 0 ? "∞" : `${o.dof.far.toFixed(2)}m` })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "运镜" }),
      /* @__PURE__ */ n.jsxs(
        "select",
        {
          value: ((p = o.movement) == null ? void 0 : p.type) || "",
          onChange: (l) => {
            const b = He.find((y) => y.type === l.target.value);
            b && e(o.id, {
              movement: { type: b.type, duration: b.defaultDuration }
            });
          },
          children: [
            /* @__PURE__ */ n.jsx("option", { value: "", children: "无" }),
            He.map((l) => /* @__PURE__ */ n.jsxs("option", { value: l.type, children: [
              l.label,
              " (",
              l.labelEn,
              ")"
            ] }, l.type))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "剧本绑定" }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "场景" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: ((c = o.script) == null ? void 0 : c.sceneId) || "",
            onChange: (l) => e(o.id, {
              script: { ...o.script, sceneId: l.target.value }
            }),
            placeholder: "Scene-01"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "镜号" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: ((m = o.script) == null ? void 0 : m.shotId) || "",
            onChange: (l) => e(o.id, {
              script: { ...o.script, shotId: l.target.value }
            }),
            placeholder: "Shot-03"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "描述" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: ((d = o.script) == null ? void 0 : d.description) || "",
            onChange: (l) => e(o.id, {
              script: { ...o.script, description: l.target.value }
            }),
            placeholder: "主角对话近景"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "对白" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: ((u = o.script) == null ? void 0 : u.dialogue) || "",
            onChange: (l) => e(o.id, {
              script: { ...o.script, dialogue: l.target.value }
            }),
            placeholder: "你怎么来了？"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ n.jsx("label", { children: "动作" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: ((g = o.script) == null ? void 0 : g.action) || "",
            onChange: (l) => e(o.id, {
              script: { ...o.script, action: l.target.value }
            }),
            placeholder: "转身离开"
          }
        )
      ] })
    ] })
  ] });
}, Ho = ({ object: o, onUpdate: e }) => {
  const t = (i, r) => {
    e(o.id, { position: { ...o.position, [i]: r } });
  }, s = (i, r) => {
    e(o.id, { scale: { ...o.scale, [i]: r } });
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpPropertyPanel, children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsxs("div", { className: a.cpSectionTitle, children: [
        "物体: ",
        o.type
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ n.jsx("span", { children: "ID" }),
        /* @__PURE__ */ n.jsx("span", { className: [a.cpCalcValue, a.cpMono].join(" "), children: o.id.slice(0, 8) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((i) => /* @__PURE__ */ n.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ n.jsx("label", { children: i.toUpperCase() }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: o.position[i],
            onChange: (r) => t(i, Number(r.target.value))
          }
        )
      ] }, i))
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "缩放" }),
      ["x", "y", "z"].map((i) => /* @__PURE__ */ n.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ n.jsx("label", { children: i.toUpperCase() }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            min: "0.1",
            value: o.scale[i],
            onChange: (r) => s(i, Number(r.target.value))
          }
        )
      ] }, i))
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ n.jsx("div", { className: a.cpSectionTitle, children: "颜色" }),
      /* @__PURE__ */ n.jsx("div", { className: a.cpField, children: /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "color",
          value: `#${o.color.toString(16).padStart(6, "0")}`,
          onChange: (i) => e(o.id, { color: parseInt(i.target.value.slice(1), 16) })
        }
      ) })
    ] })
  ] });
}, Fo = () => {
  const o = v((m) => m.project.timeline), e = v((m) => m.setTimelineTime), t = v((m) => m.setTimelinePlaying), s = Q(null), i = Q(0), r = Q(0), h = () => {
    if (o.playing)
      s.current && cancelAnimationFrame(s.current), s.current = null, t(!1);
    else {
      t(!0), i.current = performance.now(), r.current = o.currentTime;
      const m = (d) => {
        const u = (d - i.current) / 1e3, g = r.current + u;
        if (g >= o.duration) {
          e(0), t(!1);
          return;
        }
        e(g), P.emit("timeline:change", g), s.current = requestAnimationFrame(m);
      };
      s.current = requestAnimationFrame(m);
    }
  }, p = Ze((m) => {
    const d = Number(m.target.value);
    e(d), P.emit("timeline:change", d);
  }, [e]), c = (m) => {
    const d = Math.floor(m / 60), u = Math.floor(m % 60), g = Math.floor(m % 1 * 10);
    return `${d}:${u.toString().padStart(2, "0")}.${g}`;
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpTimeline, children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpTimelineControls, children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          className: a.cpPlayBtn,
          onClick: h,
          title: o.playing ? "暂停" : "播放",
          children: o.playing ? "⏸" : "▶"
        }
      ),
      /* @__PURE__ */ n.jsx(
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
      /* @__PURE__ */ n.jsxs("span", { className: a.cpTimelineTime, children: [
        c(o.currentTime),
        " / ",
        c(o.duration)
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpTimelineTrack, children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: o.duration,
          step: "0.1",
          value: o.currentTime,
          onChange: p,
          className: a.cpTimelineSlider
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: a.cpTimelineMarkers, children: Array.from({ length: Math.ceil(o.duration / 5) + 1 }, (m, d) => /* @__PURE__ */ n.jsxs("span", { className: a.cpTimelineMark, style: { left: `${d * 5 / o.duration * 100}%` }, children: [
        d * 5,
        "s"
      ] }, d)) })
    ] })
  ] });
}, zo = () => {
  const o = v((c) => c.project.storyboard), e = v((c) => c.project.cameras), t = v((c) => c.setStoryboardGrid), s = v((c) => c.setStoryboardCell), i = v((c) => c.selectCamera), r = o.grid === "5x5" ? 5 : 3, h = r * r, p = (c) => {
    const m = o.cells.find((d) => d.index === c);
    return m != null && m.cameraId && e.find((d) => d.id === m.cameraId) || null;
  };
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpStoryboard, children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpStoryboardHeader, children: [
      /* @__PURE__ */ n.jsx("span", { children: "分镜表" }),
      /* @__PURE__ */ n.jsxs("div", { className: a.cpStoryboardToggle, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            className: `${a.cpBtnSm} ${o.grid === "3x3" ? a.active : ""}`,
            onClick: () => t("3x3"),
            children: "3×3"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            className: `${a.cpBtnSm} ${o.grid === "5x5" ? a.active : ""}`,
            onClick: () => t("5x5"),
            children: "5×5"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: a.cpStoryboardGrid,
        style: {
          gridTemplateColumns: `repeat(${r}, 1fr)`
        },
        children: Array.from({ length: h }, (c, m) => {
          const d = p(m);
          return /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: `${a.cpStoryboardCell} ${d ? a.hasCamera : ""}`,
              onClick: () => {
                d && i(d.id);
              },
              children: [
                /* @__PURE__ */ n.jsx("div", { className: a.cpCellNumber, children: m + 1 }),
                d ? /* @__PURE__ */ n.jsxs("div", { className: a.cpCellCamera, children: [
                  /* @__PURE__ */ n.jsx("div", { className: a.cpCellCamName, children: d.name }),
                  /* @__PURE__ */ n.jsxs("div", { className: a.cpCellCamMeta, children: [
                    d.focal,
                    "mm"
                  ] })
                ] }) : /* @__PURE__ */ n.jsx("div", { className: a.cpCellEmpty, children: /* @__PURE__ */ n.jsxs(
                  "select",
                  {
                    value: "",
                    onChange: (u) => {
                      u.target.value && s(m, u.target.value);
                    },
                    onClick: (u) => u.stopPropagation(),
                    children: [
                      /* @__PURE__ */ n.jsx("option", { value: "", children: "分配机位..." }),
                      e.map((u) => /* @__PURE__ */ n.jsx("option", { value: u.id, children: u.name }, u.id))
                    ]
                  }
                ) })
              ]
            },
            m
          );
        })
      }
    )
  ] });
}, Vo = [
  { value: "timeline", label: "时间线" },
  { value: "storyboard", label: "分镜表" },
  { value: "keyframes", label: "关键帧" }
], Ko = () => {
  const o = v((s) => s.bottomTab), e = v((s) => s.setBottomTab), t = v((s) => s.project.path);
  return /* @__PURE__ */ n.jsxs("div", { className: a.cpBottomPanel, children: [
    /* @__PURE__ */ n.jsx("div", { className: a.cpBottomTabs, children: Vo.map((s) => /* @__PURE__ */ n.jsx(
      "button",
      {
        className: `${a.cpTabBtn} ${o === s.value ? a.active : ""}`,
        onClick: () => e(s.value),
        children: s.label
      },
      s.value
    )) }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpBottomContent, children: [
      o === "timeline" && /* @__PURE__ */ n.jsx(Fo, {}),
      o === "storyboard" && /* @__PURE__ */ n.jsx(zo, {}),
      o === "keyframes" && /* @__PURE__ */ n.jsxs("div", { className: a.cpKeyframes, children: [
        /* @__PURE__ */ n.jsxs("div", { className: a.cpKeyframesHeader, children: [
          "关键帧 (",
          t.length,
          ")"
        ] }),
        t.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: a.cpEmpty, children: "暂无关键帧。在路径工具模式下点击场景添加。" }) : /* @__PURE__ */ n.jsx("div", { className: a.cpKeyframesList, children: t.map((s, i) => /* @__PURE__ */ n.jsxs("div", { className: a.cpKeyframeItem, children: [
          /* @__PURE__ */ n.jsxs("span", { className: a.cpKfIndex, children: [
            "#",
            i + 1
          ] }),
          /* @__PURE__ */ n.jsxs("span", { className: a.cpKfPos, children: [
            "(",
            s.position.x.toFixed(1),
            ", ",
            s.position.y.toFixed(1),
            ", ",
            s.position.z.toFixed(1),
            ")"
          ] }),
          /* @__PURE__ */ n.jsxs("span", { className: a.cpKfTime, children: [
            "t=",
            s.t.toFixed(2)
          ] })
        ] }, s.id)) })
      ] })
    ] })
  ] });
}, $o = ({ open: o, onClose: e }) => {
  const [t, s] = _e("json"), [i, r] = _e(""), h = v((d) => d.project);
  if (!o) return null;
  const p = () => {
    const d = P.exportProject(), u = JSON.stringify(d, null, 2);
    r(u), P.emit("project:export", d);
  }, c = () => {
    const d = P.exportProject(), u = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }), g = URL.createObjectURL(u), l = document.createElement("a");
    l.href = g, l.download = `camera-planner-${Date.now()}.json`, l.click(), URL.revokeObjectURL(g);
  }, m = async () => {
    const d = await P.exportStoryboardPNG();
    if (!d) return;
    const u = URL.createObjectURL(d), g = document.createElement("a");
    g.href = u, g.download = `viewport-${Date.now()}.png`, g.click(), URL.revokeObjectURL(u);
  };
  return /* @__PURE__ */ n.jsx("div", { className: a.cpDialogOverlay, onClick: e, children: /* @__PURE__ */ n.jsxs("div", { className: a.cpDialog, onClick: (d) => d.stopPropagation(), children: [
    /* @__PURE__ */ n.jsxs("div", { className: a.cpDialogHeader, children: [
      /* @__PURE__ */ n.jsx("span", { children: "导出" }),
      /* @__PURE__ */ n.jsx("button", { className: a.cpDialogClose, onClick: e, children: "×" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpDialogTabs, children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          className: `${a.cpTabBtn} ${t === "json" ? a.active : ""}`,
          onClick: () => s("json"),
          children: "JSON 数据"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          className: `${a.cpTabBtn} ${t === "png" ? a.active : ""}`,
          onClick: () => s("png"),
          children: "PNG 截图"
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpDialogBody, children: [
      t === "json" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsxs("div", { className: a.cpExportInfo, children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            h.cameras.length,
            " 个摄像机"
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            h.scene.objects.length,
            " 个场景物体"
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            h.path.length,
            " 个路径关键帧"
          ] })
        ] }),
        i ? /* @__PURE__ */ n.jsx("pre", { className: a.cpExportJson, children: i }) : /* @__PURE__ */ n.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ n.jsx("p", { children: "点击下方按钮生成 JSON" }) }),
        /* @__PURE__ */ n.jsxs("div", { className: a.cpDialogActions, children: [
          /* @__PURE__ */ n.jsx("button", { className: a.cpBtn, onClick: p, children: "生成 JSON" }),
          /* @__PURE__ */ n.jsx("button", { className: [a.cpBtn, a.cpBtnPrimary].join(" "), onClick: c, children: "下载文件" })
        ] })
      ] }),
      t === "png" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ n.jsx("p", { children: "导出当前 3D 视口截图" }) }),
        /* @__PURE__ */ n.jsx("div", { className: a.cpDialogActions, children: /* @__PURE__ */ n.jsx("button", { className: [a.cpBtn, a.cpBtnPrimary].join(" "), onClick: m, children: "导出 PNG" }) })
      ] })
    ] })
  ] }) });
};
class Uo {
  /** Load a complete project */
  loadProject(e) {
    v.getState().loadProject(e);
  }
  /** Load only cameras (replace all) */
  loadCameras(e) {
    const t = v.getState(), s = t.getProjectData();
    t.loadProject({ ...s, cameras: e });
  }
  /** Load only scene config */
  loadScene(e) {
    v.getState().setSceneConfig(e);
  }
  /** Load script binding for a specific camera */
  loadScript(e, t) {
    v.getState().updateCamera(e, { script: t });
  }
  /** Update a single camera's params */
  updateCamera(e, t) {
    v.getState().updateCamera(e, t);
  }
  /** Update scene config partially */
  updateScene(e) {
    v.getState().setSceneConfig(e);
  }
  /** Select a camera (from external control) */
  selectCamera(e) {
    v.getState().selectCamera(e);
  }
  /** Trigger a movement animation on a camera */
  playMovement(e, t) {
    const s = v.getState();
    s.project.cameras.find((r) => r.id === e) && s.updateCamera(e, {
      movement: { type: t, duration: 3 }
    });
  }
}
class Yo {
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
      for (const i of s)
        i(t);
  }
  /** Export current project data */
  exportProject() {
    return v.getState().getProjectData();
  }
  /** Export cameras only */
  exportCameras() {
    return v.getState().getProjectData().cameras;
  }
  setPNGExporter(e) {
    this.pngExporter = e;
  }
  async exportStoryboardPNG() {
    var e;
    return ((e = this.pngExporter) == null ? void 0 : e.call(this)) ?? null;
  }
}
const Wo = new Uo(), P = new Yo(), en = ({
  initialData: o,
  onCameraChange: e,
  onCameraSelect: t,
  onCameraAdd: s,
  onCameraDelete: i,
  onSceneChange: r,
  onProjectExport: h
}) => {
  const [p, c] = _e(!1);
  return z(() => {
    o && Wo.loadProject(o);
  }, [o]), z(() => {
    const m = [];
    return e && m.push(P.on("camera:change", e)), t && m.push(P.on("camera:select", t)), s && m.push(P.on("camera:add", s)), i && m.push(P.on("camera:delete", i)), r && m.push(P.on("scene:change", r)), h && m.push(P.on("project:export", h)), () => m.forEach((d) => d());
  }, [e, t, s, i, r, h]), z(() => {
    const m = (d) => {
      d.ctrlKey && d.key === "z" && (d.preventDefault(), v.getState().undo()), d.ctrlKey && d.key === "y" && (d.preventDefault(), v.getState().redo());
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, []), /* @__PURE__ */ n.jsxs("div", { className: a.cameraPlanner, children: [
    /* @__PURE__ */ n.jsx(Oo, { onExport: () => c(!0) }),
    /* @__PURE__ */ n.jsxs("div", { className: a.cpMain, children: [
      /* @__PURE__ */ n.jsx(Go, {}),
      /* @__PURE__ */ n.jsx("div", { className: a.cpViewportWrapper, children: /* @__PURE__ */ n.jsx(Po, { outputManager: P }) }),
      /* @__PURE__ */ n.jsx(qo, {})
    ] }),
    /* @__PURE__ */ n.jsx(Ko, {}),
    /* @__PURE__ */ n.jsx($o, { open: p, onClose: () => c(!1) })
  ] });
};
class tn {
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
    const i = `${this.baseUrl}${t}`, r = {
      "Content-Type": "application/json",
      ...this.headers
    };
    this.token && (r.Authorization = `Bearer ${this.token}`);
    const h = await fetch(i, {
      method: e,
      headers: r,
      body: s ? JSON.stringify(s) : void 0
    });
    if (!h.ok)
      throw new Error(`API ${e} ${t} failed: ${h.status} ${h.statusText}`);
    return h.json();
  }
}
export {
  tn as ApiClient,
  en as CameraPlanner,
  Tt as CameraRig,
  Uo as InputManager,
  Ct as LIGHT_PRESETS,
  wt as LightSystem,
  He as MOVEMENT_PRESETS,
  St as ObjectLib,
  Yo as OutputManager,
  Et as PathSystem,
  Pt as RayPicker,
  Io as SCENE_PRESETS,
  Y as SENSOR_PRESETS,
  yt as SceneEngine,
  ye as calcDOF,
  ie as calcFOV,
  Jo as calcFOVByPreset,
  gt as clamp,
  Ft as createEmptyProject,
  q as deg2rad,
  vt as easeInOutCubic,
  Z as generateId,
  Wo as inputManager,
  K as lerp,
  P as outputManager,
  Qo as rad2deg,
  v as usePlannerStore
};
