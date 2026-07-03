import W, { useRef as J, useEffect as V, useCallback as Ke, useState as fe } from "react";
import * as m from "three";
import { Controls as Ze, Vector3 as I, MOUSE as $, TOUCH as Y, Quaternion as Pe, Spherical as Te, Vector2 as L, Ray as Xe, Plane as qe, MathUtils as Je } from "three";
function Qe(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var be = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function et() {
  if (Ce) return Z;
  Ce = 1;
  var i = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, n, r) {
    var c = null;
    if (r !== void 0 && (c = "" + r), n.key !== void 0 && (c = "" + n.key), "key" in n) {
      r = {};
      for (var d in n)
        d !== "key" && (r[d] = n[d]);
    } else r = n;
    return n = r.ref, {
      $$typeof: i,
      type: s,
      key: c,
      ref: n !== void 0 ? n : null,
      props: r
    };
  }
  return Z.Fragment = e, Z.jsx = t, Z.jsxs = t, Z;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function tt() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    function i(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === $e ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case x:
          return "Fragment";
        case D:
          return "Profiler";
        case E:
          return "StrictMode";
        case S:
          return "Suspense";
        case M:
          return "SuspenseList";
        case Ye:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case _:
            return "Portal";
          case A:
            return u.displayName || "Context";
          case R:
            return (u._context.displayName || "Context") + ".Consumer";
          case z:
            var j = u.render;
            return u = u.displayName, u || (u = j.displayName || j.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case H:
            return j = u.displayName || null, j !== null ? j : i(u.type) || "Memo";
          case oe:
            j = u._payload, u = u._init;
            try {
              return i(u(j));
            } catch {
            }
        }
      return null;
    }
    function e(u) {
      return "" + u;
    }
    function t(u) {
      try {
        e(u);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var w = j.error, C = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return w.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(u);
      }
    }
    function s(u) {
      if (u === x) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === oe)
        return "<...>";
      try {
        var j = i(u);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var u = ae.A;
      return u === null ? null : u.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function c(u) {
      if (je.call(u, "key")) {
        var j = Object.getOwnPropertyDescriptor(u, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function d(u, j) {
      function w() {
        ve || (ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: w,
        configurable: !0
      });
    }
    function a() {
      var u = i(this.type);
      return xe[u] || (xe[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function l(u, j, w, C, ee, ce) {
      var O = w.ref;
      return u = {
        $$typeof: b,
        type: u,
        key: j,
        props: w,
        _owner: C
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function h(u, j, w, C, ee, ce) {
      var O = j.children;
      if (O !== void 0)
        if (C)
          if (Be(O)) {
            for (C = 0; C < O.length; C++)
              p(O[C]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(O);
      if (je.call(j, "key")) {
        O = i(u);
        var F = Object.keys(j).filter(function(We) {
          return We !== "key";
        });
        C = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", Se[O + C] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          O,
          F,
          O
        ), Se[O + C] = !0);
      }
      if (O = null, w !== void 0 && (t(w), O = "" + w), c(j) && (t(j.key), O = "" + j.key), "key" in j) {
        w = {};
        for (var le in j)
          le !== "key" && (w[le] = j[le]);
      } else w = j;
      return O && d(
        w,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), l(
        u,
        O,
        w,
        n(),
        ee,
        ce
      );
    }
    function p(u) {
      y(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === oe && (u._payload.status === "fulfilled" ? y(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function y(u) {
      return typeof u == "object" && u !== null && u.$$typeof === b;
    }
    var f = W, b = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), A = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), Ye = Symbol.for("react.activity"), $e = Symbol.for("react.client.reference"), ae = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = Object.prototype.hasOwnProperty, Be = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var ve, xe = {}, we = f.react_stack_bottom_frame.bind(
      f,
      r
    )(), Ee = re(s(r)), Se = {};
    X.Fragment = x, X.jsx = function(u, j, w) {
      var C = 1e4 > ae.recentlyCreatedOwnerStacks++;
      return h(
        u,
        j,
        w,
        !1,
        C ? Error("react-stack-top-frame") : we,
        C ? re(s(u)) : Ee
      );
    }, X.jsxs = function(u, j, w) {
      var C = 1e4 > ae.recentlyCreatedOwnerStacks++;
      return h(
        u,
        j,
        w,
        !0,
        C ? Error("react-stack-top-frame") : we,
        C ? re(s(u)) : Ee
      );
    };
  }()), X;
}
process.env.NODE_ENV === "production" ? be.exports = et() : be.exports = tt();
var o = be.exports;
const Ne = { type: "change" }, _e = { type: "start" }, Ve = { type: "end" }, te = new Xe(), Me = new qe(), st = Math.cos(70 * Je.DEG2RAD), N = new I(), k = 2 * Math.PI, v = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, he = 1e-6;
class it extends Ze {
  constructor(e, t = null) {
    super(e, t), this.state = v.NONE, this.enabled = !0, this.target = new I(), this.cursor = new I(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: $.ROTATE, MIDDLE: $.DOLLY, RIGHT: $.PAN }, this.touches = { ONE: Y.ROTATE, TWO: Y.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new I(), this._lastQuaternion = new Pe(), this._lastTargetPosition = new I(), this._quat = new Pe().setFromUnitVectors(e.up, new I(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Te(), this._sphericalDelta = new Te(), this._scale = 1, this._panOffset = new I(), this._rotateStart = new L(), this._rotateEnd = new L(), this._rotateDelta = new L(), this._panStart = new L(), this._panEnd = new L(), this._panDelta = new L(), this._dollyStart = new L(), this._dollyEnd = new L(), this._dollyDelta = new L(), this._dollyDirection = new I(), this._mouse = new L(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = ot.bind(this), this._onPointerDown = nt.bind(this), this._onPointerUp = at.bind(this), this._onContextMenu = pt.bind(this), this._onMouseWheel = lt.bind(this), this._onKeyDown = ht.bind(this), this._onTouchStart = dt.bind(this), this._onTouchMove = ut.bind(this), this._onMouseDown = rt.bind(this), this._onMouseMove = ct.bind(this), this._interceptControlDown = mt.bind(this), this._interceptControlUp = ft.bind(this), this.domElement !== null && this.connect(), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Ne), this.update(), this.state = v.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    N.copy(t).sub(this.target), N.applyQuaternion(this._quat), this._spherical.setFromVector3(N), this.autoRotate && this.state === v.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, n = this.maxAzimuthAngle;
    isFinite(s) && isFinite(n) && (s < -Math.PI ? s += k : s > Math.PI && (s -= k), n < -Math.PI ? n += k : n > Math.PI && (n -= k), s <= n ? this._spherical.theta = Math.max(s, Math.min(n, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + n) / 2 ? Math.max(s, this._spherical.theta) : Math.min(n, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const c = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = c != this._spherical.radius;
    }
    if (N.setFromSpherical(this._spherical), N.applyQuaternion(this._quatInverse), t.copy(this.target).add(N), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let c = null;
      if (this.object.isPerspectiveCamera) {
        const d = N.length();
        c = this._clampDistance(d * this._scale);
        const a = d - c;
        this.object.position.addScaledVector(this._dollyDirection, a), this.object.updateMatrixWorld(), r = !!a;
      } else if (this.object.isOrthographicCamera) {
        const d = new I(this._mouse.x, this._mouse.y, 0);
        d.unproject(this.object);
        const a = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = a !== this.object.zoom;
        const l = new I(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(d), this.object.updateMatrixWorld(), c = N.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      c !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position) : (te.origin.copy(this.object.position), te.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(te.direction)) < st ? this.object.lookAt(this.target) : (Me.setFromNormalAndCoplanarPoint(this.object.up, this.target), te.intersectPlane(Me, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const c = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), c !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > he || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > he || this._lastTargetPosition.distanceToSquared(this.target) > he ? (this.dispatchEvent(Ne), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
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
    N.setFromMatrixColumn(t, 0), N.multiplyScalar(-e), this._panOffset.add(N);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? N.setFromMatrixColumn(t, 1) : (N.setFromMatrixColumn(t, 0), N.crossVectors(this.object.up, N)), N.multiplyScalar(e), this._panOffset.add(N);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const n = this.object.position;
      N.copy(n).sub(this.target);
      let r = N.length();
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
    const s = this.domElement.getBoundingClientRect(), n = e - s.left, r = t - s.top, c = s.width, d = s.height;
    this._mouse.x = n / c * 2 - 1, this._mouse.y = -(r / d) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(k * this._rotateDelta.x / t.clientHeight), this._rotateUp(k * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    const c = (e.pageX + t.x) * 0.5, d = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(c, d);
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
function nt(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function ot(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function at(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Ve), this.state = v.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function rt(i) {
  let e;
  switch (i.button) {
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
    case $.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = v.DOLLY;
      break;
    case $.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = v.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = v.ROTATE;
      }
      break;
    case $.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = v.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = v.PAN;
      }
      break;
    default:
      this.state = v.NONE;
  }
  this.state !== v.NONE && this.dispatchEvent(_e);
}
function ct(i) {
  switch (this.state) {
    case v.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case v.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case v.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function lt(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== v.NONE || (i.preventDefault(), this.dispatchEvent(_e), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(Ve));
}
function ht(i) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(i);
}
function dt(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Y.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = v.TOUCH_ROTATE;
          break;
        case Y.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = v.TOUCH_PAN;
          break;
        default:
          this.state = v.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Y.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = v.TOUCH_DOLLY_PAN;
          break;
        case Y.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = v.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = v.NONE;
      }
      break;
    default:
      this.state = v.NONE;
  }
  this.state !== v.NONE && this.dispatchEvent(_e);
}
function ut(i) {
  switch (this._trackPointer(i), this.state) {
    case v.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case v.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case v.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case v.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = v.NONE;
  }
}
function pt(i) {
  this.enabled !== !1 && i.preventDefault();
}
function mt(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function ft(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class bt {
  constructor(e) {
    this.animationId = null, this.gridHelper = null, this.axesHelper = null, this.frameCallbacks = [];
    const {
      container: t,
      antialias: s = !0,
      shadows: n = !0,
      backgroundColor: r = 657940,
      gridSize: c = 20,
      showGrid: d = !0,
      showAxes: a = !0
    } = e;
    this.container = t, this.clock = new m.Clock(), this.scene = new m.Scene(), this.scene.background = new m.Color(r), this.scene.fog = new m.FogExp2(r, 0.015);
    const l = t.clientWidth / t.clientHeight || 1;
    this.camera = new m.PerspectiveCamera(55, l, 0.1, 500), this.camera.position.set(12, 10, 12), this.camera.lookAt(0, 0, 0), this.renderer = new m.WebGLRenderer({
      antialias: s,
      preserveDrawingBuffer: !0
      // needed for PNG export
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(t.clientWidth, t.clientHeight), n && (this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = m.PCFSoftShadowMap), t.appendChild(this.renderer.domElement), this.controls = new it(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.08, this.controls.maxPolarAngle = Math.PI * 0.48, this.controls.minDistance = 2, this.controls.maxDistance = 80, d && (this.gridHelper = new m.GridHelper(c, c, 1973816, 1315882), this.scene.add(this.gridHelper)), a && (this.axesHelper = new m.AxesHelper(3), this.scene.add(this.axesHelper));
    const h = new m.AmbientLight(4210784, 0.3);
    this.scene.add(h), this.resizeObserver = new ResizeObserver(() => this.onResize()), this.resizeObserver.observe(t);
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
const B = [
  { name: "full_frame", label: "全画幅 (Full Frame)", w: 36, h: 24 },
  { name: "arri_alexa35", label: "ARRI Alexa 35", w: 29.9, h: 22.2 },
  { name: "red_raptor", label: "RED V-Raptor", w: 40.96, h: 21.6 },
  { name: "sony_fx6", label: "Sony FX6", w: 35.7, h: 23.8 },
  { name: "canon_c70", label: "Canon C70 (Super35)", w: 26.2, h: 13.8 },
  { name: "bmpcc_6k", label: "BMPCC 6K (Super35)", w: 23.1, h: 12.95 },
  { name: "mft", label: "MFT (Micro Four Thirds)", w: 17.3, h: 13 }
];
function ne(i, e) {
  return e <= 0 || i <= 0 ? 0 : 2 * Math.atan(i / (2 * e)) * (180 / Math.PI);
}
function ye(i, e, t, s, n = 0.03) {
  if (i <= 0 || e <= 0 || t <= 0 || s <= 0)
    return { near: 0, far: 1 / 0, range: 1 / 0 };
  const r = 24 / s, c = n / r, d = i * i / (e * c * 1e3), a = i / 1e3, l = t * (d - a) / (d + t - 2 * a), h = t * (d - a) / (d - t);
  return {
    near: Math.max(0, l),
    far: h < 0 ? 1 / 0 : h,
    // negative means beyond hyperfocal
    range: h < 0 ? 1 / 0 : h - l
  };
}
function us(i, e) {
  const t = B.find((s) => s.name === i);
  return t ? ne(t.h, e) : 0;
}
function G(i) {
  return i * (Math.PI / 180);
}
function ps(i) {
  return i * (180 / Math.PI);
}
function K() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}
function yt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function U(i, e, t) {
  return i + (e - i) * yt(t, 0, 1);
}
function gt(i) {
  return i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2;
}
const _t = 8160255, jt = 16767293;
class vt {
  constructor(e) {
    this.cameras = /* @__PURE__ */ new Map(), this.selectedId = null, this.scene = e;
  }
  /** Add a new camera to the scene */
  addCamera(e = {}) {
    const t = e.id || K(), s = B.find((c) => c.name === "full_frame"), n = {
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
      color: e.color || _t,
      movement: e.movement,
      script: e.script
    };
    n.fov = ne(n.sensorH, n.focal), n.dof = ye(n.focal, n.fstop, n.focusDist, n.sensorH);
    const r = this.createCameraMesh(n);
    return this.scene.add(r), this.cameras.set(t, { camera: n, group: r }), n;
  }
  /** Update camera parameters and refresh 3D visualization */
  updateCamera(e, t) {
    const s = this.cameras.get(e);
    return s ? (Object.assign(s.camera, t), s.camera.fov = ne(s.camera.sensorH, s.camera.focal), s.camera.dof = ye(
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
      G(t.pitch),
      G(t.yaw),
      G(t.roll)
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
    const c = new m.CylinderGeometry(0.08, 0.12, 0.2, 16), d = new m.MeshStandardMaterial({
      color: 2236962,
      metalness: 0.8,
      roughness: 0.2
    }), a = new m.Mesh(c, d);
    a.rotation.x = Math.PI / 2, a.position.z = 0.3, a.userData = { cameraId: e.id, part: "lens" }, t.add(a);
    const l = G(e.fov / 2), h = 3, p = h * Math.tan(l), y = new m.ConeGeometry(p, h, 4, 1, !0), f = new m.MeshBasicMaterial({
      color: e.color,
      transparent: !0,
      opacity: 0.08,
      side: m.DoubleSide,
      depthWrite: !1
    }), b = new m.Mesh(y, f);
    b.rotation.x = Math.PI / 2, b.position.z = h / 2 + 0.3, b.userData = { cameraId: e.id, part: "cone" }, t.add(b);
    const _ = new m.ConeGeometry(p, h, 4, 1, !0), x = new m.MeshBasicMaterial({
      color: e.color,
      wireframe: !0,
      transparent: !0,
      opacity: 0.3
    }), E = new m.Mesh(_, x);
    return E.rotation.x = Math.PI / 2, E.position.z = h / 2 + 0.3, E.userData = { cameraId: e.id, part: "wire" }, t.add(E), t.position.set(e.position.x, e.position.y, e.position.z), t.rotation.set(
      G(e.rotation.pitch),
      G(e.rotation.yaw),
      G(e.rotation.roll)
    ), t;
  }
  highlightCamera(e, t = !0) {
    const s = this.cameras.get(e);
    if (!s) return;
    const n = t ? jt : s.camera.color;
    s.group.traverse((r) => {
      r instanceof m.Mesh && r.userData.part === "body" && r.material.color.setHex(n), r instanceof m.Mesh && (r.userData.part === "cone" || r.userData.part === "wire") && r.material.color.setHex(n);
    });
  }
}
class xt {
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
    const c = new m.MeshStandardMaterial({ color: 14731424, roughness: 0.8 }), d = new m.SphereGeometry(0.15, 16, 16), a = new m.Mesh(d, c);
    return a.position.y = 1.35, a.castShadow = !0, s.add(a), this.applyTransform(s, e), s;
  }
  createBuilding(e, t) {
    const s = new m.Group(), n = new m.BoxGeometry(1, 1, 1), r = new m.Mesh(n, t);
    r.position.y = 0.5, r.castShadow = !0, r.receiveShadow = !0, s.add(r);
    const c = new m.MeshStandardMaterial({ color: 3359829, metalness: 0.5 });
    for (let d = 0; d < 3; d++)
      for (let a = 0; a < 2; a++) {
        const l = new m.BoxGeometry(0.2, 0.15, 0.02), h = new m.Mesh(l, c);
        h.position.set(-0.15 + a * 0.3, 0.2 + d * 0.25, 0.51), s.add(h);
      }
    return this.applyTransform(s, e), s;
  }
  createCar(e, t) {
    const s = new m.Group(), n = new m.BoxGeometry(2, 0.6, 1), r = new m.Mesh(n, t);
    r.position.y = 0.4, r.castShadow = !0, s.add(r);
    const c = new m.BoxGeometry(1.2, 0.5, 0.9), d = new m.MeshStandardMaterial({ color: 8956620, metalness: 0.3, roughness: 0.2 }), a = new m.Mesh(c, d);
    a.position.set(-0.1, 0.9, 0), s.add(a);
    const l = new m.MeshStandardMaterial({ color: 2236962 }), h = new m.CylinderGeometry(0.2, 0.2, 0.1, 16), p = [
      [-0.6, 0.2, 0.55],
      [0.6, 0.2, 0.55],
      [-0.6, 0.2, -0.55],
      [0.6, 0.2, -0.55]
    ];
    for (const [y, f, b] of p) {
      const _ = new m.Mesh(h, l);
      _.position.set(y, f, b), _.rotation.x = Math.PI / 2, s.add(_);
    }
    return this.applyTransform(s, e), s;
  }
  createTree(e, t) {
    const s = new m.Group(), n = new m.MeshStandardMaterial({ color: 7029286, roughness: 0.9 }), r = new m.CylinderGeometry(0.1, 0.15, 1.5, 8), c = new m.Mesh(r, n);
    c.position.y = 0.75, c.castShadow = !0, s.add(c);
    const d = new m.SphereGeometry(0.8, 12, 12), a = new m.Mesh(d, t);
    return a.position.y = 2, a.castShadow = !0, s.add(a), this.applyTransform(s, e), s;
  }
  applyTransform(e, t) {
    e.position.set(t.position.x, t.position.y, t.position.z), e.rotation.set(
      G(t.rotation.pitch),
      G(t.rotation.yaw),
      G(t.rotation.roll)
    ), e.scale.set(t.scale.x, t.scale.y, t.scale.z);
  }
}
const wt = [
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
class Et {
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
    const t = wt.find((s) => s.name === e);
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
class St {
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
    const t = gt(e);
    let s = 0;
    for (; s < this.keyframes.length - 1 && !(this.keyframes[s + 1].t >= t); s++)
      ;
    s = Math.min(s, this.keyframes.length - 2);
    const n = this.keyframes[s], r = this.keyframes[s + 1], c = r.t - n.t > 0 ? (t - n.t) / (r.t - n.t) : 0;
    return {
      position: {
        x: U(n.position.x, r.position.x, c),
        y: U(n.position.y, r.position.y, c),
        z: U(n.position.z, r.position.z, c)
      },
      rotation: {
        yaw: U(n.rotation.yaw, r.rotation.yaw, c),
        pitch: U(n.rotation.pitch, r.rotation.pitch, c),
        roll: U(n.rotation.roll, r.rotation.roll, c)
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
      Array.isArray(c) ? c.forEach((d) => d.dispose()) : c == null || c.dispose();
    }
    if (this.markers = [], this.keyframes.length < 1) return;
    const e = new m.SphereGeometry(0.12, 8, 8), t = new m.MeshBasicMaterial({ color: 16739125 });
    for (const r of this.keyframes) {
      const c = new m.Mesh(e, t);
      c.position.set(r.position.x, r.position.y, r.position.z), this.scene.add(c), this.markers.push(c);
    }
    if (this.keyframes.length >= 2) {
      const r = this.keyframes.map(
        (a) => new m.Vector3(a.position.x, a.position.y, a.position.z)
      ), c = new m.BufferGeometry().setFromPoints(r), d = new m.LineBasicMaterial({
        color: 16739125,
        linewidth: 2
      });
      this.line = new m.Line(c, d), this.scene.add(this.line);
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
      const n = this.raycast();
      if (n.target === "camera" || n.target === "object") {
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
      c.traverse((d) => {
        d instanceof m.Mesh && t.push(d);
      });
    for (const c of this.objectMeshes)
      c.traverse((d) => {
        d instanceof m.Mesh && t.push(d);
      });
    const s = this.raycaster.intersectObjects(t, !1);
    if (s.length > 0) {
      const c = s[0], d = c.object.userData, a = new m.Vector3();
      if (this.raycaster.ray.intersectPlane(this.groundPlane, a), d.cameraId)
        return {
          target: "camera",
          id: d.cameraId,
          point: c.point.clone(),
          groundPoint: a
        };
      if (d.objectId)
        return {
          target: "object",
          id: d.objectId,
          point: c.point.clone(),
          groundPoint: a
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
    const s = this.objectMeshes.find((n) => n.userData.objectId === t);
    return s ? s.position.clone() : null;
  }
}
const Tt = {}, ke = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), s = (h, p) => {
    const y = typeof h == "function" ? h(e) : h;
    if (!Object.is(y, e)) {
      const f = e;
      e = p ?? (typeof y != "object" || y === null) ? y : Object.assign({}, e, y), t.forEach((b) => b(e, f));
    }
  }, n = () => e, a = { setState: s, getState: n, getInitialState: () => l, subscribe: (h) => (t.add(h), () => t.delete(h)), destroy: () => {
    (Tt ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), t.clear();
  } }, l = e = i(s, n, a);
  return a;
}, Ct = (i) => i ? ke(i) : ke;
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
var De;
function Ot() {
  if (De) return ue;
  De = 1;
  var i = W;
  function e(p, y) {
    return p === y && (p !== 0 || 1 / p === 1 / y) || p !== p && y !== y;
  }
  var t = typeof Object.is == "function" ? Object.is : e, s = i.useState, n = i.useEffect, r = i.useLayoutEffect, c = i.useDebugValue;
  function d(p, y) {
    var f = y(), b = s({ inst: { value: f, getSnapshot: y } }), _ = b[0].inst, x = b[1];
    return r(
      function() {
        _.value = f, _.getSnapshot = y, a(_) && x({ inst: _ });
      },
      [p, f, y]
    ), n(
      function() {
        return a(_) && x({ inst: _ }), p(function() {
          a(_) && x({ inst: _ });
        });
      },
      [p]
    ), c(f), f;
  }
  function a(p) {
    var y = p.getSnapshot;
    p = p.value;
    try {
      var f = y();
      return !t(p, f);
    } catch {
      return !0;
    }
  }
  function l(p, y) {
    return y();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : d;
  return ue.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : h, ue;
}
var pe = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Nt() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    function i(f, b) {
      return f === b && (f !== 0 || 1 / f === 1 / b) || f !== f && b !== b;
    }
    function e(f, b) {
      h || n.startTransition === void 0 || (h = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var _ = b();
      if (!p) {
        var x = b();
        r(_, x) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      x = c({
        inst: { value: _, getSnapshot: b }
      });
      var E = x[0].inst, D = x[1];
      return a(
        function() {
          E.value = _, E.getSnapshot = b, t(E) && D({ inst: E });
        },
        [f, _, b]
      ), d(
        function() {
          return t(E) && D({ inst: E }), f(function() {
            t(E) && D({ inst: E });
          });
        },
        [f]
      ), l(_), _;
    }
    function t(f) {
      var b = f.getSnapshot;
      f = f.value;
      try {
        var _ = b();
        return !r(f, _);
      } catch {
        return !0;
      }
    }
    function s(f, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = W, r = typeof Object.is == "function" ? Object.is : i, c = n.useState, d = n.useEffect, a = n.useLayoutEffect, l = n.useDebugValue, h = !1, p = !1, y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : e;
    pe.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), pe;
}
var Ae;
function Fe() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? se.exports = Ot() : se.exports = Nt()), se.exports;
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
function Mt() {
  if (Le) return de;
  Le = 1;
  var i = W, e = Fe();
  function t(l, h) {
    return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
  }
  var s = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, r = i.useRef, c = i.useEffect, d = i.useMemo, a = i.useDebugValue;
  return de.useSyncExternalStoreWithSelector = function(l, h, p, y, f) {
    var b = r(null);
    if (b.current === null) {
      var _ = { hasValue: !1, value: null };
      b.current = _;
    } else _ = b.current;
    b = d(
      function() {
        function E(S) {
          if (!D) {
            if (D = !0, R = S, S = y(S), f !== void 0 && _.hasValue) {
              var M = _.value;
              if (f(M, S))
                return A = M;
            }
            return A = S;
          }
          if (M = A, s(R, S)) return M;
          var H = y(S);
          return f !== void 0 && f(M, H) ? (R = S, M) : (R = S, A = H);
        }
        var D = !1, R, A, z = p === void 0 ? null : p;
        return [
          function() {
            return E(h());
          },
          z === null ? void 0 : function() {
            return E(z());
          }
        ];
      },
      [h, p, y, f]
    );
    var x = n(l, b[0], b[1]);
    return c(
      function() {
        _.hasValue = !0, _.value = x;
      },
      [x]
    ), a(x), x;
  }, de;
}
var me = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function kt() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    function i(l, h) {
      return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = W, t = Fe(), s = typeof Object.is == "function" ? Object.is : i, n = t.useSyncExternalStore, r = e.useRef, c = e.useEffect, d = e.useMemo, a = e.useDebugValue;
    me.useSyncExternalStoreWithSelector = function(l, h, p, y, f) {
      var b = r(null);
      if (b.current === null) {
        var _ = { hasValue: !1, value: null };
        b.current = _;
      } else _ = b.current;
      b = d(
        function() {
          function E(S) {
            if (!D) {
              if (D = !0, R = S, S = y(S), f !== void 0 && _.hasValue) {
                var M = _.value;
                if (f(M, S))
                  return A = M;
              }
              return A = S;
            }
            if (M = A, s(R, S))
              return M;
            var H = y(S);
            return f !== void 0 && f(M, H) ? (R = S, M) : (R = S, A = H);
          }
          var D = !1, R, A, z = p === void 0 ? null : p;
          return [
            function() {
              return E(h());
            },
            z === null ? void 0 : function() {
              return E(z());
            }
          ];
        },
        [h, p, y, f]
      );
      var x = n(l, b[0], b[1]);
      return c(
        function() {
          _.hasValue = !0, _.value = x;
        },
        [x]
      ), a(x), x;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), me;
}
process.env.NODE_ENV === "production" ? ge.exports = Mt() : ge.exports = kt();
var Dt = ge.exports;
const Rt = /* @__PURE__ */ Qe(Dt), Ue = {}, { useDebugValue: At } = W, { useSyncExternalStoreWithSelector: Lt } = Rt;
let Ge = !1;
const It = (i) => i;
function Gt(i, e = It, t) {
  (Ue ? "production" : void 0) !== "production" && t && !Ge && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ge = !0);
  const s = Lt(
    i.subscribe,
    i.getState,
    i.getServerState || i.getInitialState,
    e,
    t
  );
  return At(s), s;
}
const ze = (i) => {
  (Ue ? "production" : void 0) !== "production" && typeof i != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof i == "function" ? Ct(i) : i, t = (s, n) => Gt(e, s, n);
  return Object.assign(t, e), t;
}, zt = (i) => i ? ze(i) : ze;
function Ht() {
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
const Q = [], ie = [], Vt = 50, g = zt((i, e) => ({
  // Initial state
  project: Ht(),
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
  addCamera: (t) => i((s) => (q(s.project), {
    project: {
      ...s.project,
      cameras: [...s.project.cameras, t]
    }
  })),
  updateCamera: (t, s) => i((n) => (q(n.project), {
    project: {
      ...n.project,
      cameras: n.project.cameras.map(
        (r) => r.id === t ? { ...r, ...s } : r
      )
    }
  })),
  deleteCamera: (t) => i((s) => (q(s.project), {
    project: {
      ...s.project,
      cameras: s.project.cameras.filter((n) => n.id !== t)
    },
    selectedCameraId: s.selectedCameraId === t ? null : s.selectedCameraId
  })),
  selectCamera: (t) => i({ selectedCameraId: t, selectedObjectId: null }),
  setCameraMovement: (t, s) => i((n) => ({
    project: {
      ...n.project,
      cameras: n.project.cameras.map(
        (r) => r.id === t ? { ...r, movement: s } : r
      )
    }
  })),
  // --- Object actions ---
  addObject: (t) => i((s) => (q(s.project), {
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: [...s.project.scene.objects, t]
      }
    }
  })),
  updateObject: (t, s) => i((n) => ({
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
  deleteObject: (t) => i((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: s.project.scene.objects.filter((n) => n.id !== t)
      }
    },
    selectedObjectId: s.selectedObjectId === t ? null : s.selectedObjectId
  })),
  selectObject: (t) => i({ selectedObjectId: t, selectedCameraId: null }),
  // --- Scene actions ---
  setSceneConfig: (t) => i((s) => ({
    project: {
      ...s.project,
      scene: { ...s.project.scene, ...t }
    }
  })),
  setLighting: (t) => i((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        lighting: { ...s.project.scene.lighting, ...t }
      }
    }
  })),
  // --- Path actions ---
  setPath: (t) => i((s) => ({
    project: { ...s.project, path: t }
  })),
  addPathPoint: (t) => i((s) => ({
    project: { ...s.project, path: [...s.project.path, t] }
  })),
  removePathPoint: (t) => i((s) => ({
    project: { ...s.project, path: s.project.path.filter((n) => n.id !== t) }
  })),
  // --- Timeline actions ---
  setTimelineTime: (t) => i((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, currentTime: t }
    }
  })),
  setTimelinePlaying: (t) => i((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, playing: t }
    }
  })),
  // --- Storyboard actions ---
  setStoryboardGrid: (t) => i((s) => ({
    project: {
      ...s.project,
      storyboard: { ...s.project.storyboard, grid: t }
    }
  })),
  setStoryboardCell: (t, s) => i((n) => {
    const r = [...n.project.storyboard.cells], c = r.findIndex((d) => d.index === t);
    return c >= 0 ? r[c] = { ...r[c], cameraId: s ?? void 0 } : r.push({ index: t, cameraId: s ?? void 0 }), {
      project: {
        ...n.project,
        storyboard: { ...n.project.storyboard, cells: r }
      }
    };
  }),
  // --- Editor actions ---
  setMode: (t) => i({ mode: t }),
  setTool: (t) => i({ tool: t }),
  setSideTab: (t) => i({ sideTab: t }),
  setBottomTab: (t) => i({ bottomTab: t }),
  toggleGrid: () => i((t) => ({ showGrid: !t.showGrid })),
  toggleAxes: () => i((t) => ({ showAxes: !t.showAxes })),
  toggleFovCones: () => i((t) => ({ showFovCones: !t.showFovCones })),
  // --- Project actions ---
  loadProject: (t) => i({
    project: t,
    selectedCameraId: null,
    selectedObjectId: null
  }),
  getProjectData: () => e().project,
  // --- Undo/Redo ---
  undo: () => {
    if (Q.length === 0) return;
    const t = Q.pop();
    ie.push(e().project), i({ project: t });
  },
  redo: () => {
    if (ie.length === 0) return;
    const t = ie.pop();
    q(e().project), i({ project: t });
  }
}));
function q(i) {
  Q.push(structuredClone(i)), Q.length > Vt && Q.shift(), ie.length = 0;
}
const Ft = ({ outputManager: i }) => {
  const e = J(null), t = J(null), s = g;
  V(() => {
    const a = e.current;
    if (!a) return;
    const l = new bt({
      container: a,
      antialias: !0,
      shadows: !0,
      showGrid: !0,
      showAxes: !0
    }), h = new vt(l.scene), p = new xt(l.scene), y = new Et(l.scene), f = new St(l.scene), b = new Pt(l.camera, l.scene);
    return b.setCameraGroups(h.getAllMeshGroups()), b.setObjectMeshes(p.getAllMeshes()), b.enable(l.getCanvas()), i.setPNGExporter(() => l.exportPNGBlob()), b.onPick((_) => {
      _.target === "camera" && _.id ? (s.getState().selectCamera(_.id), i.emit("camera:select", _.id)) : _.target === "object" && _.id && s.getState().selectObject(_.id);
    }), l.start(), t.current = {
      scene: l,
      cameraRig: h,
      objectLib: p,
      lightSystem: y,
      pathSystem: f,
      rayPicker: b
    }, () => {
      l.dispose(), t.current = null;
    };
  }, [i]);
  const n = s((a) => a.project), r = s((a) => a.selectedCameraId);
  V(() => {
    const a = t.current;
    if (!a) return;
    const l = n.cameras, h = a.cameraRig.getAllCameras(), p = new Set(h.map((f) => f.id)), y = new Set(l.map((f) => f.id));
    for (const f of l)
      p.has(f.id) || a.cameraRig.addCamera(f);
    for (const f of p)
      y.has(f) || a.cameraRig.deleteCamera(f);
    for (const f of l) {
      const b = a.cameraRig.getCamera(f.id);
      b && (b.focal !== f.focal || b.position.x !== f.position.x || b.position.y !== f.position.y || b.position.z !== f.position.z) && a.cameraRig.updateCamera(f.id, f);
    }
    a.cameraRig.selectCamera(r), a.lightSystem.update(n.scene.lighting);
  }, [n.cameras, n.scene.lighting, r]);
  const c = s((a) => a.showGrid), d = s((a) => a.showAxes);
  return V(() => {
    var a;
    (a = t.current) == null || a.scene.setGridVisible(c);
  }, [c]), V(() => {
    var a;
    (a = t.current) == null || a.scene.setAxesVisible(d);
  }, [d]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: e,
      className: "camera-planner-viewport",
      style: { width: "100%", height: "100%", minHeight: "400px" }
    }
  );
}, Ut = [
  { value: "select", label: "选择", icon: "↖" },
  { value: "place", label: "放置", icon: "⊕" },
  { value: "move", label: "移动", icon: "✥" },
  { value: "rotate", label: "旋转", icon: "↻" }
], Yt = [
  { value: "camera", label: "摄像机", icon: "📷" },
  { value: "object", label: "物体", icon: "📦" },
  { value: "light", label: "灯光", icon: "💡" },
  { value: "path", label: "路径", icon: "〰" }
], $t = ({ onExport: i }) => {
  const e = g((p) => p.mode), t = g((p) => p.tool), s = g((p) => p.showGrid), n = g((p) => p.showAxes), r = g((p) => p.setMode), c = g((p) => p.setTool), d = g((p) => p.toggleGrid), a = g((p) => p.toggleAxes), l = g((p) => p.undo), h = g((p) => p.redo);
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-toolbar", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-toolbar-group", children: [
      /* @__PURE__ */ o.jsx("span", { className: "cp-toolbar-label", children: "模式" }),
      Ut.map((p) => /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `cp-toolbar-btn ${e === p.value ? "active" : ""}`,
          onClick: () => r(p.value),
          title: p.label,
          children: /* @__PURE__ */ o.jsx("span", { className: "cp-icon", children: p.icon })
        },
        p.value
      ))
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "cp-toolbar-sep" }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-toolbar-group", children: [
      /* @__PURE__ */ o.jsx("span", { className: "cp-toolbar-label", children: "工具" }),
      Yt.map((p) => /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `cp-toolbar-btn ${t === p.value ? "active" : ""}`,
          onClick: () => c(p.value),
          title: p.label,
          children: /* @__PURE__ */ o.jsx("span", { className: "cp-icon", children: p.icon })
        },
        p.value
      ))
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "cp-toolbar-sep" }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-toolbar-group", children: [
      /* @__PURE__ */ o.jsx("button", { className: "cp-toolbar-btn", onClick: l, title: "撤销 (Ctrl+Z)", children: "↩" }),
      /* @__PURE__ */ o.jsx("button", { className: "cp-toolbar-btn", onClick: h, title: "重做 (Ctrl+Y)", children: "↪" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "cp-toolbar-sep" }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-toolbar-group", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `cp-toolbar-btn ${s ? "active" : ""}`,
          onClick: d,
          title: "网格",
          children: "#"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `cp-toolbar-btn ${n ? "active" : ""}`,
          onClick: a,
          title: "坐标轴",
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "cp-toolbar-spacer" }),
    i && /* @__PURE__ */ o.jsx("button", { className: "cp-toolbar-btn cp-toolbar-export", onClick: i, children: "导出" })
  ] });
}, Bt = () => {
  const i = g((d) => d.project.cameras), e = g((d) => d.selectedCameraId), t = g((d) => d.selectCamera), s = g((d) => d.addCamera), n = g((d) => d.deleteCamera), r = () => {
    const d = B[0], a = 50, l = ne(d.h, a), h = ye(a, 2.8, 5, d.h), p = {
      id: K(),
      name: `CAM-${i.length + 1}`,
      focal: a,
      sensorW: d.w,
      sensorH: d.h,
      fstop: 2.8,
      focusDist: 5,
      height: 1.6,
      position: { x: Math.random() * 4 - 2, y: 1.6, z: Math.random() * 4 - 2 },
      rotation: { yaw: Math.random() * 360 - 180, pitch: 0, roll: 0 },
      fov: l,
      dof: h,
      color: 8160255
    };
    s(p), T.emit("camera:add", p), t(p.id);
  }, c = (d) => {
    n(d), T.emit("camera:delete", d);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-camera-list", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-camera-list-header", children: [
      /* @__PURE__ */ o.jsxs("span", { children: [
        "摄像机 (",
        i.length,
        ")"
      ] }),
      /* @__PURE__ */ o.jsx("button", { className: "cp-btn-sm", onClick: r, children: "+ 添加" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-camera-list-items", children: [
      i.length === 0 && /* @__PURE__ */ o.jsx("div", { className: "cp-empty", children: '暂无摄像机，点击"添加"创建' }),
      i.map((d) => /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: `cp-camera-item ${e === d.id ? "selected" : ""}`,
          onClick: () => t(d.id),
          children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "cp-camera-color",
                style: { backgroundColor: `#${d.color.toString(16).padStart(6, "0")}` }
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "cp-camera-info", children: [
              /* @__PURE__ */ o.jsx("div", { className: "cp-camera-name", children: d.name }),
              /* @__PURE__ */ o.jsxs("div", { className: "cp-camera-meta", children: [
                d.focal,
                "mm · f/",
                d.fstop,
                " · FOV ",
                d.fov.toFixed(1),
                "°"
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "cp-camera-delete",
                onClick: (a) => {
                  a.stopPropagation(), c(d.id);
                },
                title: "删除",
                children: "×"
              }
            )
          ]
        },
        d.id
      ))
    ] })
  ] });
}, Wt = [
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
  { type: "prop", label: "道具", icon: "🎭" }
], Kt = () => {
  const i = g((t) => t.addObject), e = (t) => {
    const s = {
      id: K(),
      type: t,
      position: { x: 0, y: 0, z: 0 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: 8947848
    };
    i(s), T.emit("object:add", s.id);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-object-palette", children: [
    /* @__PURE__ */ o.jsx("div", { className: "cp-palette-header", children: "物体库" }),
    /* @__PURE__ */ o.jsx("div", { className: "cp-palette-grid", children: Wt.map((t) => /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: "cp-palette-item",
        onClick: () => e(t.type),
        title: t.label,
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "cp-icon-lg", children: t.icon }),
          /* @__PURE__ */ o.jsx("span", { className: "cp-palette-label", children: t.label })
        ]
      },
      t.type
    )) })
  ] });
};
function P(i, e, t, s, n = 1, r = 1, c = 1, d = 8947848) {
  return {
    type: i,
    position: { x: e, y: t, z: s },
    rotation: { yaw: 0, pitch: 0, roll: 0 },
    scale: { x: n, y: r, z: c },
    color: d
  };
}
const Zt = [
  {
    template: "studio",
    label: "摄影棚",
    labelEn: "Studio",
    icon: "🎬",
    objects: [
      P("plane", 0, 0, 0, 20, 1, 20, 2763306),
      P("box", -6, 1.5, -8, 3, 3, 0.3, 3355443),
      // backdrop
      P("cylinder", -3, 0.5, 0, 0.3, 1, 0.3, 4473924),
      // light stand
      P("cylinder", 3, 0.5, 0, 0.3, 1, 0.3, 4473924)
      // light stand
    ]
  },
  {
    template: "living_room",
    label: "客厅",
    labelEn: "Living Room",
    icon: "🛋️",
    objects: [
      P("plane", 0, 0, 0, 12, 1, 10, 9139029),
      // floor
      P("box", 0, 0.4, -4, 4, 0.8, 1, 6636321),
      // sofa
      P("box", 0, 0.25, 0, 2, 0.5, 1.2, 4863784),
      // coffee table
      P("box", -5, 1, -4.5, 0.3, 2, 3, 5592405),
      // bookshelf
      P("box", 5, 0.5, -4.5, 2, 1, 0.5, 3355443)
      // TV stand
    ]
  },
  {
    template: "street",
    label: "街道",
    labelEn: "Street",
    icon: "🏙️",
    objects: [
      P("plane", 0, 0, 0, 8, 1, 30, 3815994),
      // road
      P("building", -6, 4, -5, 4, 8, 6, 6710886),
      P("building", 6, 3, -5, 4, 6, 6, 7829367),
      P("building", -6, 5, 10, 4, 10, 6, 5592405),
      P("tree", 4, 2, 5, 1, 4, 1, 2972199),
      P("tree", -4, 2, 12, 1, 4, 1, 2972199)
    ]
  },
  {
    template: "cafe",
    label: "咖啡馆",
    labelEn: "Cafe",
    icon: "☕",
    objects: [
      P("plane", 0, 0, 0, 10, 1, 8, 9139029),
      P("cylinder", -2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      P("cylinder", 2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      P("cylinder", 0, 0.35, 2, 0.5, 0.7, 0.5, 9127187),
      // round table
      P("box", -4, 1, -3.5, 2, 2, 0.5, 6636321),
      // bar counter
      P("box", 4, 1.2, -3.5, 0.3, 2.4, 2, 4473924)
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
], Xt = () => {
  const i = g((t) => t.setSceneConfig), e = (t) => {
    const s = t.objects.map((n) => ({
      ...n,
      id: K()
    }));
    i({
      template: t.template,
      objects: s
    }), T.emit("scene:change", {
      template: t.template,
      objects: s,
      lighting: g.getState().project.scene.lighting
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-scene-templates", children: [
    /* @__PURE__ */ o.jsx("div", { className: "cp-templates-header", children: "场景模板" }),
    /* @__PURE__ */ o.jsx("div", { className: "cp-templates-grid", children: Zt.map((t) => /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: "cp-template-card",
        onClick: () => e(t),
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "cp-icon-xl", children: t.icon }),
          /* @__PURE__ */ o.jsxs("div", { className: "cp-template-info", children: [
            /* @__PURE__ */ o.jsx("div", { className: "cp-template-name", children: t.label }),
            /* @__PURE__ */ o.jsx("div", { className: "cp-template-en", children: t.labelEn }),
            /* @__PURE__ */ o.jsxs("div", { className: "cp-template-count", children: [
              t.objects.length,
              " 个物体"
            ] })
          ] })
        ]
      },
      t.template
    )) })
  ] });
}, qt = [
  { value: "cameras", label: "机位", icon: "📷" },
  { value: "objects", label: "物体", icon: "📦" },
  { value: "templates", label: "场景", icon: "🏠" },
  { value: "characters", label: "角色", icon: "👤" }
], Jt = () => {
  const i = g((t) => t.sideTab), e = g((t) => t.setSideTab);
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-sidebar", children: [
    /* @__PURE__ */ o.jsx("div", { className: "cp-sidebar-tabs", children: qt.map((t) => /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: `cp-tab-btn ${i === t.value ? "active" : ""}`,
        onClick: () => e(t.value),
        title: t.label,
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "cp-icon", children: t.icon }),
          /* @__PURE__ */ o.jsx("span", { className: "cp-tab-label", children: t.label })
        ]
      },
      t.value
    )) }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-sidebar-content", children: [
      i === "cameras" && /* @__PURE__ */ o.jsx(Bt, {}),
      i === "objects" && /* @__PURE__ */ o.jsx(Kt, {}),
      i === "templates" && /* @__PURE__ */ o.jsx(Xt, {}),
      i === "characters" && /* @__PURE__ */ o.jsxs("div", { className: "cp-placeholder", children: [
        /* @__PURE__ */ o.jsx("p", { children: "角色面板（待开发）" }),
        /* @__PURE__ */ o.jsx("p", { className: "cp-hint", children: "从剧本导入角色，自动分配位置" })
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
], Qt = () => {
  const i = g((a) => a.selectedCameraId), e = g((a) => a.selectedObjectId), t = g((a) => a.project.cameras), s = g((a) => a.project.scene.objects), n = g((a) => a.updateCamera), r = g((a) => a.updateObject), c = t.find((a) => a.id === i), d = s.find((a) => a.id === e);
  return !c && !d ? /* @__PURE__ */ o.jsx("div", { className: "cp-property-panel", children: /* @__PURE__ */ o.jsx("div", { className: "cp-placeholder", children: /* @__PURE__ */ o.jsx("p", { children: "选择机位或物体查看属性" }) }) }) : c ? /* @__PURE__ */ o.jsx(es, { camera: c, onUpdate: n }) : d ? /* @__PURE__ */ o.jsx(ts, { object: d, onUpdate: r }) : null;
}, es = ({ camera: i, onUpdate: e }) => {
  var c, d;
  const t = (a, l) => {
    const h = { [a]: l };
    e(i.id, h), T.emit("camera:change", { ...i, ...h });
  }, s = (a, l) => {
    const h = { ...i.position, [a]: l };
    e(i.id, { position: h }), T.emit("camera:change", { ...i, position: h });
  }, n = (a, l) => {
    const h = { ...i.rotation, [a]: l };
    e(i.id, { rotation: h }), T.emit("camera:change", { ...i, rotation: h });
  }, r = (a) => {
    const l = B.find((h) => h.name === a);
    l && e(i.id, { sensorW: l.w, sensorH: l.h });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-property-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "摄像机参数" }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-field", children: [
        /* @__PURE__ */ o.jsx("label", { children: "名称" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            value: i.name,
            onChange: (a) => t("name", a.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-field", children: [
        /* @__PURE__ */ o.jsx("label", { children: "焦距 (mm)" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: "8",
            max: "300",
            step: "1",
            value: i.focal,
            onChange: (a) => t("focal", Number(a.target.value))
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "cp-field-value", children: [
          i.focal,
          "mm"
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-field", children: [
        /* @__PURE__ */ o.jsx("label", { children: "传感器" }),
        /* @__PURE__ */ o.jsx(
          "select",
          {
            value: ((c = B.find(
              (a) => Math.abs(a.w - i.sensorW) < 0.1 && Math.abs(a.h - i.sensorH) < 0.1
            )) == null ? void 0 : c.name) || "",
            onChange: (a) => r(a.target.value),
            children: B.map((a) => /* @__PURE__ */ o.jsx("option", { value: a.name, children: a.label }, a.name))
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-field", children: [
        /* @__PURE__ */ o.jsx("label", { children: "光圈 (f/)" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: "1.2",
            max: "22",
            step: "0.1",
            value: i.fstop,
            onChange: (a) => t("fstop", Number(a.target.value))
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "cp-field-value", children: [
          "f/",
          i.fstop.toFixed(1)
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-field", children: [
        /* @__PURE__ */ o.jsx("label", { children: "对焦距离 (m)" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: "0.3",
            max: "100",
            step: "0.1",
            value: i.focusDist,
            onChange: (a) => t("focusDist", Number(a.target.value))
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "cp-field-value", children: [
          i.focusDist.toFixed(1),
          "m"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "位置" }),
      ["x", "y", "z"].map((a) => /* @__PURE__ */ o.jsxs("div", { className: "cp-field cp-field-row", children: [
        /* @__PURE__ */ o.jsx("label", { children: a.toUpperCase() }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: i.position[a],
            onChange: (l) => s(a, Number(l.target.value))
          }
        )
      ] }, a))
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "旋转" }),
      ["yaw", "pitch", "roll"].map((a) => /* @__PURE__ */ o.jsxs("div", { className: "cp-field cp-field-row", children: [
        /* @__PURE__ */ o.jsx("label", { children: a }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: "-180",
            max: "180",
            step: "1",
            value: i.rotation[a],
            onChange: (l) => n(a, Number(l.target.value))
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "cp-field-value", children: [
          i.rotation[a],
          "°"
        ] })
      ] }, a))
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "计算值" }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-calc-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: "FOV" }),
        /* @__PURE__ */ o.jsxs("span", { className: "cp-calc-value", children: [
          i.fov.toFixed(1),
          "°"
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-calc-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: "景深范围" }),
        /* @__PURE__ */ o.jsx("span", { className: "cp-calc-value", children: i.dof.range === 1 / 0 ? "∞" : `${i.dof.range.toFixed(2)}m` })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-calc-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: "近焦" }),
        /* @__PURE__ */ o.jsxs("span", { className: "cp-calc-value", children: [
          i.dof.near.toFixed(2),
          "m"
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-calc-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: "远焦" }),
        /* @__PURE__ */ o.jsx("span", { className: "cp-calc-value", children: i.dof.far === 1 / 0 ? "∞" : `${i.dof.far.toFixed(2)}m` })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "运镜" }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          value: ((d = i.movement) == null ? void 0 : d.type) || "",
          onChange: (a) => {
            const l = He.find((h) => h.type === a.target.value);
            l && e(i.id, {
              movement: { type: l.type, duration: l.defaultDuration }
            });
          },
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: "无" }),
            He.map((a) => /* @__PURE__ */ o.jsxs("option", { value: a.type, children: [
              a.label,
              " (",
              a.labelEn,
              ")"
            ] }, a.type))
          ]
        }
      )
    ] })
  ] });
}, ts = ({ object: i, onUpdate: e }) => {
  const t = (n, r) => {
    e(i.id, { position: { ...i.position, [n]: r } });
  }, s = (n, r) => {
    e(i.id, { scale: { ...i.scale, [n]: r } });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-property-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "cp-section-title", children: [
        "物体: ",
        i.type
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-calc-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: "ID" }),
        /* @__PURE__ */ o.jsx("span", { className: "cp-calc-value cp-mono", children: i.id.slice(0, 8) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "位置" }),
      ["x", "y", "z"].map((n) => /* @__PURE__ */ o.jsxs("div", { className: "cp-field cp-field-row", children: [
        /* @__PURE__ */ o.jsx("label", { children: n.toUpperCase() }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: i.position[n],
            onChange: (r) => t(n, Number(r.target.value))
          }
        )
      ] }, n))
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "缩放" }),
      ["x", "y", "z"].map((n) => /* @__PURE__ */ o.jsxs("div", { className: "cp-field cp-field-row", children: [
        /* @__PURE__ */ o.jsx("label", { children: n.toUpperCase() }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            min: "0.1",
            value: i.scale[n],
            onChange: (r) => s(n, Number(r.target.value))
          }
        )
      ] }, n))
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-panel-section", children: [
      /* @__PURE__ */ o.jsx("div", { className: "cp-section-title", children: "颜色" }),
      /* @__PURE__ */ o.jsx("div", { className: "cp-field", children: /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "color",
          value: `#${i.color.toString(16).padStart(6, "0")}`,
          onChange: (n) => e(i.id, { color: parseInt(n.target.value.slice(1), 16) })
        }
      ) })
    ] })
  ] });
}, ss = () => {
  const i = g((l) => l.project.timeline), e = g((l) => l.setTimelineTime), t = g((l) => l.setTimelinePlaying), s = J(null), n = J(0), r = J(0), c = () => {
    if (i.playing)
      s.current && cancelAnimationFrame(s.current), s.current = null, t(!1);
    else {
      t(!0), n.current = performance.now(), r.current = i.currentTime;
      const l = (h) => {
        const p = (h - n.current) / 1e3, y = r.current + p;
        if (y >= i.duration) {
          e(0), t(!1);
          return;
        }
        e(y), T.emit("timeline:change", y), s.current = requestAnimationFrame(l);
      };
      s.current = requestAnimationFrame(l);
    }
  }, d = Ke((l) => {
    const h = Number(l.target.value);
    e(h), T.emit("timeline:change", h);
  }, [e]), a = (l) => {
    const h = Math.floor(l / 60), p = Math.floor(l % 60), y = Math.floor(l % 1 * 10);
    return `${h}:${p.toString().padStart(2, "0")}.${y}`;
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-timeline", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-timeline-controls", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "cp-play-btn",
          onClick: c,
          title: i.playing ? "暂停" : "播放",
          children: i.playing ? "⏸" : "▶"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "cp-timeline-btn",
          onClick: () => {
            e(0), t(!1);
          },
          title: "重置",
          children: "⏮"
        }
      ),
      /* @__PURE__ */ o.jsxs("span", { className: "cp-timeline-time", children: [
        a(i.currentTime),
        " / ",
        a(i.duration)
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-timeline-track", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: i.duration,
          step: "0.1",
          value: i.currentTime,
          onChange: d,
          className: "cp-timeline-slider"
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "cp-timeline-markers", children: Array.from({ length: Math.ceil(i.duration / 5) + 1 }, (l, h) => /* @__PURE__ */ o.jsxs("span", { className: "cp-timeline-mark", style: { left: `${h * 5 / i.duration * 100}%` }, children: [
        h * 5,
        "s"
      ] }, h)) })
    ] })
  ] });
}, is = () => {
  const i = g((a) => a.project.storyboard), e = g((a) => a.project.cameras), t = g((a) => a.setStoryboardGrid), s = g((a) => a.setStoryboardCell), n = g((a) => a.selectCamera), r = i.grid === "5x5" ? 5 : 3, c = r * r, d = (a) => {
    const l = i.cells.find((h) => h.index === a);
    return l != null && l.cameraId && e.find((h) => h.id === l.cameraId) || null;
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-storyboard", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-storyboard-header", children: [
      /* @__PURE__ */ o.jsx("span", { children: "分镜表" }),
      /* @__PURE__ */ o.jsxs("div", { className: "cp-storyboard-toggle", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `cp-btn-sm ${i.grid === "3x3" ? "active" : ""}`,
            onClick: () => t("3x3"),
            children: "3×3"
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `cp-btn-sm ${i.grid === "5x5" ? "active" : ""}`,
            onClick: () => t("5x5"),
            children: "5×5"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "cp-storyboard-grid",
        style: {
          gridTemplateColumns: `repeat(${r}, 1fr)`
        },
        children: Array.from({ length: c }, (a, l) => {
          const h = d(l);
          return /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: `cp-storyboard-cell ${h ? "has-camera" : ""}`,
              onClick: () => {
                h && n(h.id);
              },
              children: [
                /* @__PURE__ */ o.jsx("div", { className: "cp-cell-number", children: l + 1 }),
                h ? /* @__PURE__ */ o.jsxs("div", { className: "cp-cell-camera", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "cp-cell-cam-name", children: h.name }),
                  /* @__PURE__ */ o.jsxs("div", { className: "cp-cell-cam-meta", children: [
                    h.focal,
                    "mm"
                  ] })
                ] }) : /* @__PURE__ */ o.jsx("div", { className: "cp-cell-empty", children: /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    value: "",
                    onChange: (p) => {
                      p.target.value && s(l, p.target.value);
                    },
                    onClick: (p) => p.stopPropagation(),
                    children: [
                      /* @__PURE__ */ o.jsx("option", { value: "", children: "分配机位..." }),
                      e.map((p) => /* @__PURE__ */ o.jsx("option", { value: p.id, children: p.name }, p.id))
                    ]
                  }
                ) })
              ]
            },
            l
          );
        })
      }
    )
  ] });
}, ns = [
  { value: "timeline", label: "时间线" },
  { value: "storyboard", label: "分镜表" },
  { value: "keyframes", label: "关键帧" }
], os = () => {
  const i = g((s) => s.bottomTab), e = g((s) => s.setBottomTab), t = g((s) => s.project.path);
  return /* @__PURE__ */ o.jsxs("div", { className: "cp-bottom-panel", children: [
    /* @__PURE__ */ o.jsx("div", { className: "cp-bottom-tabs", children: ns.map((s) => /* @__PURE__ */ o.jsx(
      "button",
      {
        className: `cp-tab-btn ${i === s.value ? "active" : ""}`,
        onClick: () => e(s.value),
        children: s.label
      },
      s.value
    )) }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-bottom-content", children: [
      i === "timeline" && /* @__PURE__ */ o.jsx(ss, {}),
      i === "storyboard" && /* @__PURE__ */ o.jsx(is, {}),
      i === "keyframes" && /* @__PURE__ */ o.jsxs("div", { className: "cp-keyframes", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "cp-keyframes-header", children: [
          "关键帧 (",
          t.length,
          ")"
        ] }),
        t.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "cp-empty", children: "暂无关键帧。在路径工具模式下点击场景添加。" }) : /* @__PURE__ */ o.jsx("div", { className: "cp-keyframes-list", children: t.map((s, n) => /* @__PURE__ */ o.jsxs("div", { className: "cp-keyframe-item", children: [
          /* @__PURE__ */ o.jsxs("span", { className: "cp-kf-index", children: [
            "#",
            n + 1
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: "cp-kf-pos", children: [
            "(",
            s.position.x.toFixed(1),
            ", ",
            s.position.y.toFixed(1),
            ", ",
            s.position.z.toFixed(1),
            ")"
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: "cp-kf-time", children: [
            "t=",
            s.t.toFixed(2)
          ] })
        ] }, s.id)) })
      ] })
    ] })
  ] });
}, as = ({ open: i, onClose: e }) => {
  const [t, s] = fe("json"), [n, r] = fe(""), c = g((h) => h.project);
  if (!i) return null;
  const d = () => {
    const h = T.exportProject(), p = JSON.stringify(h, null, 2);
    r(p), T.emit("project:export", h);
  }, a = () => {
    const h = T.exportProject(), p = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), y = URL.createObjectURL(p), f = document.createElement("a");
    f.href = y, f.download = `camera-planner-${Date.now()}.json`, f.click(), URL.revokeObjectURL(y);
  }, l = async () => {
    const h = await T.exportStoryboardPNG();
    if (!h) return;
    const p = URL.createObjectURL(h), y = document.createElement("a");
    y.href = p, y.download = `viewport-${Date.now()}.png`, y.click(), URL.revokeObjectURL(p);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "cp-dialog-overlay", onClick: e, children: /* @__PURE__ */ o.jsxs("div", { className: "cp-dialog", onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ o.jsxs("div", { className: "cp-dialog-header", children: [
      /* @__PURE__ */ o.jsx("span", { children: "导出" }),
      /* @__PURE__ */ o.jsx("button", { className: "cp-dialog-close", onClick: e, children: "×" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-dialog-tabs", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `cp-tab-btn ${t === "json" ? "active" : ""}`,
          onClick: () => s("json"),
          children: "JSON 数据"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `cp-tab-btn ${t === "png" ? "active" : ""}`,
          onClick: () => s("png"),
          children: "PNG 截图"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-dialog-body", children: [
      t === "json" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "cp-export-info", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            c.cameras.length,
            " 个摄像机"
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            c.scene.objects.length,
            " 个场景物体"
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            c.path.length,
            " 个路径关键帧"
          ] })
        ] }),
        n ? /* @__PURE__ */ o.jsx("pre", { className: "cp-export-json", children: n }) : /* @__PURE__ */ o.jsx("div", { className: "cp-placeholder", children: /* @__PURE__ */ o.jsx("p", { children: "点击下方按钮生成 JSON" }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "cp-dialog-actions", children: [
          /* @__PURE__ */ o.jsx("button", { className: "cp-btn", onClick: d, children: "生成 JSON" }),
          /* @__PURE__ */ o.jsx("button", { className: "cp-btn cp-btn-primary", onClick: a, children: "下载文件" })
        ] })
      ] }),
      t === "png" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("div", { className: "cp-placeholder", children: /* @__PURE__ */ o.jsx("p", { children: "导出当前 3D 视口截图" }) }),
        /* @__PURE__ */ o.jsx("div", { className: "cp-dialog-actions", children: /* @__PURE__ */ o.jsx("button", { className: "cp-btn cp-btn-primary", onClick: l, children: "导出 PNG" }) })
      ] })
    ] })
  ] }) });
};
class rs {
  /** Load a complete project */
  loadProject(e) {
    g.getState().loadProject(e);
  }
  /** Load only cameras (replace all) */
  loadCameras(e) {
    const t = g.getState(), s = t.getProjectData();
    t.loadProject({ ...s, cameras: e });
  }
  /** Load only scene config */
  loadScene(e) {
    g.getState().setSceneConfig(e);
  }
  /** Load script binding for a specific camera */
  loadScript(e, t) {
    g.getState().updateCamera(e, { script: t });
  }
  /** Update a single camera's params */
  updateCamera(e, t) {
    g.getState().updateCamera(e, t);
  }
  /** Update scene config partially */
  updateScene(e) {
    g.getState().setSceneConfig(e);
  }
  /** Select a camera (from external control) */
  selectCamera(e) {
    g.getState().selectCamera(e);
  }
}
class cs {
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
    return g.getState().getProjectData();
  }
  /** Export cameras only */
  exportCameras() {
    return g.getState().getProjectData().cameras;
  }
  setPNGExporter(e) {
    this.pngExporter = e;
  }
  async exportStoryboardPNG() {
    var e;
    return ((e = this.pngExporter) == null ? void 0 : e.call(this)) ?? null;
  }
}
const ls = new rs(), T = new cs(), ms = ({
  initialData: i,
  onCameraChange: e,
  onCameraSelect: t,
  onCameraAdd: s,
  onCameraDelete: n,
  onSceneChange: r,
  onProjectExport: c
}) => {
  const [d, a] = fe(!1);
  return V(() => {
    i && ls.loadProject(i);
  }, [i]), V(() => {
    const l = [];
    return e && l.push(T.on("camera:change", e)), t && l.push(T.on("camera:select", t)), s && l.push(T.on("camera:add", s)), n && l.push(T.on("camera:delete", n)), r && l.push(T.on("scene:change", r)), c && l.push(T.on("project:export", c)), () => l.forEach((h) => h());
  }, [e, t, s, n, r, c]), V(() => {
    const l = (h) => {
      h.ctrlKey && h.key === "z" && (h.preventDefault(), g.getState().undo()), h.ctrlKey && h.key === "y" && (h.preventDefault(), g.getState().redo());
    };
    return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "camera-planner", children: [
    /* @__PURE__ */ o.jsx($t, { onExport: () => a(!0) }),
    /* @__PURE__ */ o.jsxs("div", { className: "cp-main", children: [
      /* @__PURE__ */ o.jsx(Jt, {}),
      /* @__PURE__ */ o.jsx("div", { className: "cp-viewport-wrapper", children: /* @__PURE__ */ o.jsx(Ft, { outputManager: T }) }),
      /* @__PURE__ */ o.jsx(Qt, {})
    ] }),
    /* @__PURE__ */ o.jsx(os, {}),
    /* @__PURE__ */ o.jsx(as, { open: d, onClose: () => a(!1) })
  ] });
};
class fs {
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
  fs as ApiClient,
  ms as CameraPlanner,
  vt as CameraRig,
  rs as InputManager,
  wt as LIGHT_PRESETS,
  Et as LightSystem,
  He as MOVEMENT_PRESETS,
  xt as ObjectLib,
  cs as OutputManager,
  St as PathSystem,
  Pt as RayPicker,
  Zt as SCENE_PRESETS,
  B as SENSOR_PRESETS,
  bt as SceneEngine,
  ye as calcDOF,
  ne as calcFOV,
  us as calcFOVByPreset,
  yt as clamp,
  Ht as createEmptyProject,
  G as deg2rad,
  gt as easeInOutCubic,
  K as generateId,
  ls as inputManager,
  U as lerp,
  T as outputManager,
  ps as rad2deg,
  g as usePlannerStore
};
