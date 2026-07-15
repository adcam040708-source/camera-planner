import ae, { useRef as ee, useState as oe, useEffect as Q, useCallback as it } from "react";
import * as m from "three";
import { Controls as rt, Vector3 as J, MOUSE as re, TOUCH as ie, Quaternion as Ae, Spherical as ke, Vector2 as q, Ray as at, Plane as ct, MathUtils as lt } from "three";
function pt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var we = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function ht() {
  if (Ie) return ce;
  Ie = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, o, r) {
    var l = null;
    if (r !== void 0 && (l = "" + r), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      r = {};
      for (var c in o)
        c !== "key" && (r[c] = o[c]);
    } else r = o;
    return o = r.ref, {
      $$typeof: n,
      type: s,
      key: l,
      ref: o !== void 0 ? o : null,
      props: r
    };
  }
  return ce.Fragment = e, ce.jsx = t, ce.jsxs = t, ce;
}
var le = {};
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
function dt() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    function n(_) {
      if (_ == null) return null;
      if (typeof _ == "function")
        return _.$$typeof === se ? null : _.displayName || _.name || null;
      if (typeof _ == "string") return _;
      switch (_) {
        case C:
          return "Fragment";
        case w:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case M:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof _ == "object")
        switch (typeof _.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), _.$$typeof) {
          case x:
            return "Portal";
          case D:
            return _.displayName || "Context";
          case I:
            return (_._context.displayName || "Context") + ".Consumer";
          case F:
            var T = _.render;
            return _ = _.displayName, _ || (_ = T.displayName || T.name || "", _ = _ !== "" ? "ForwardRef(" + _ + ")" : "ForwardRef"), _;
          case A:
            return T = _.displayName || null, T !== null ? T : n(_.type) || "Memo";
          case P:
            T = _._payload, _ = _._init;
            try {
              return n(_(T));
            } catch {
            }
        }
      return null;
    }
    function e(_) {
      return "" + _;
    }
    function t(_) {
      try {
        e(_);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var k = T.error, z = typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return k.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), e(_);
      }
    }
    function s(_) {
      if (_ === C) return "<>";
      if (typeof _ == "object" && _ !== null && _.$$typeof === P)
        return "<...>";
      try {
        var T = n(_);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var _ = H.A;
      return _ === null ? null : _.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function l(_) {
      if (K.call(_, "key")) {
        var T = Object.getOwnPropertyDescriptor(_, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return _.key !== void 0;
    }
    function c(_, T) {
      function k() {
        b || (b = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(_, "key", {
        get: k,
        configurable: !0
      });
    }
    function d() {
      var _ = n(this.type);
      return S[_] || (S[_] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), _ = this.props.ref, _ !== void 0 ? _ : null;
    }
    function f(_, T, k, z, de, ye) {
      var V = k.ref;
      return _ = {
        $$typeof: j,
        type: _,
        key: T,
        props: k,
        _owner: z
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(_, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(_, "ref", { enumerable: !1, value: null }), _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(_, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(_, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.defineProperty(_, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ye
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    }
    function u(_, T, k, z, de, ye) {
      var V = T.children;
      if (V !== void 0)
        if (z)
          if (X(V)) {
            for (z = 0; z < V.length; z++)
              p(V[z]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(V);
      if (K.call(T, "key")) {
        V = n(_);
        var ne = Object.keys(T).filter(function(nt) {
          return nt !== "key";
        });
        z = 0 < ne.length ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}", Oe[V + z] || (ne = 0 < ne.length ? "{" + ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          V,
          ne,
          V
        ), Oe[V + z] = !0);
      }
      if (V = null, k !== void 0 && (t(k), V = "" + k), l(T) && (t(T.key), V = "" + T.key), "key" in T) {
        k = {};
        for (var be in T)
          be !== "key" && (k[be] = T[be]);
      } else k = T;
      return V && c(
        k,
        typeof _ == "function" ? _.displayName || _.name || "Unknown" : _
      ), f(
        _,
        V,
        k,
        o(),
        de,
        ye
      );
    }
    function p(_) {
      g(_) ? _._store && (_._store.validated = 1) : typeof _ == "object" && _ !== null && _.$$typeof === P && (_._payload.status === "fulfilled" ? g(_._payload.value) && _._payload.value._store && (_._payload.value._store.validated = 1) : _._store && (_._store.validated = 1));
    }
    function g(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === j;
    }
    var h = ae, j = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), D = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), H = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, X = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(_) {
        return _();
      }
    };
    var b, S = {}, pe = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), he = W(s(r)), Oe = {};
    le.Fragment = C, le.jsx = function(_, T, k) {
      var z = 1e4 > H.recentlyCreatedOwnerStacks++;
      return u(
        _,
        T,
        k,
        !1,
        z ? Error("react-stack-top-frame") : pe,
        z ? W(s(_)) : he
      );
    }, le.jsxs = function(_, T, k) {
      var z = 1e4 > H.recentlyCreatedOwnerStacks++;
      return u(
        _,
        T,
        k,
        !0,
        z ? Error("react-stack-top-frame") : pe,
        z ? W(s(_)) : he
      );
    };
  }()), le;
}
process.env.NODE_ENV === "production" ? we.exports = ht() : we.exports = dt();
var i = we.exports;
const Re = { type: "change" }, Ne = { type: "start" }, qe = { type: "end" }, ue = new at(), Le = new ct(), ut = Math.cos(70 * lt.DEG2RAD), B = new J(), U = 2 * Math.PI, N = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, je = 1e-6;
class mt extends rt {
  constructor(e, t = null) {
    super(e, t), this.state = N.NONE, this.enabled = !0, this.target = new J(), this.cursor = new J(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: re.ROTATE, MIDDLE: re.DOLLY, RIGHT: re.PAN }, this.touches = { ONE: ie.ROTATE, TWO: ie.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new J(), this._lastQuaternion = new Ae(), this._lastTargetPosition = new J(), this._quat = new Ae().setFromUnitVectors(e.up, new J(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ke(), this._sphericalDelta = new ke(), this._scale = 1, this._panOffset = new J(), this._rotateStart = new q(), this._rotateEnd = new q(), this._rotateDelta = new q(), this._panStart = new q(), this._panEnd = new q(), this._panDelta = new q(), this._dollyStart = new q(), this._dollyEnd = new q(), this._dollyDelta = new q(), this._dollyDirection = new J(), this._mouse = new q(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = _t.bind(this), this._onPointerDown = ft.bind(this), this._onPointerUp = gt.bind(this), this._onContextMenu = St.bind(this), this._onMouseWheel = jt.bind(this), this._onKeyDown = xt.bind(this), this._onTouchStart = vt.bind(this), this._onTouchMove = Ct.bind(this), this._onMouseDown = yt.bind(this), this._onMouseMove = bt.bind(this), this._interceptControlDown = Tt.bind(this), this._interceptControlUp = wt.bind(this), this.domElement !== null && this.connect(), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Re), this.update(), this.state = N.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    B.copy(t).sub(this.target), B.applyQuaternion(this._quat), this._spherical.setFromVector3(B), this.autoRotate && this.state === N.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, o = this.maxAzimuthAngle;
    isFinite(s) && isFinite(o) && (s < -Math.PI ? s += U : s > Math.PI && (s -= U), o < -Math.PI ? o += U : o > Math.PI && (o -= U), s <= o ? this._spherical.theta = Math.max(s, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + o) / 2 ? Math.max(s, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const l = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = l != this._spherical.radius;
    }
    if (B.setFromSpherical(this._spherical), B.applyQuaternion(this._quatInverse), t.copy(this.target).add(B), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let l = null;
      if (this.object.isPerspectiveCamera) {
        const c = B.length();
        l = this._clampDistance(c * this._scale);
        const d = c - l;
        this.object.position.addScaledVector(this._dollyDirection, d), this.object.updateMatrixWorld(), r = !!d;
      } else if (this.object.isOrthographicCamera) {
        const c = new J(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object);
        const d = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = d !== this.object.zoom;
        const f = new J(this._mouse.x, this._mouse.y, 0);
        f.unproject(this.object), this.object.position.sub(f).add(c), this.object.updateMatrixWorld(), l = B.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      l !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position) : (ue.origin.copy(this.object.position), ue.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ue.direction)) < ut ? this.object.lookAt(this.target) : (Le.setFromNormalAndCoplanarPoint(this.object.up, this.target), ue.intersectPlane(Le, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const l = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), l !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > je || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > je || this._lastTargetPosition.distanceToSquared(this.target) > je ? (this.dispatchEvent(Re), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? U / 60 * this.autoRotateSpeed * e : U / 60 / 60 * this.autoRotateSpeed;
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
    B.setFromMatrixColumn(t, 0), B.multiplyScalar(-e), this._panOffset.add(B);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? B.setFromMatrixColumn(t, 1) : (B.setFromMatrixColumn(t, 0), B.crossVectors(this.object.up, B)), B.multiplyScalar(e), this._panOffset.add(B);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const o = this.object.position;
      B.copy(o).sub(this.target);
      let r = B.length();
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
    const s = this.domElement.getBoundingClientRect(), o = e - s.left, r = t - s.top, l = s.width, c = s.height;
    this._mouse.x = o / l * 2 - 1, this._mouse.y = -(r / c) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(U * this._rotateDelta.x / t.clientHeight), this._rotateUp(U * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(U * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-U * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(U * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-U * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), o = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(s, o);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), o = 0.5 * (e.pageY + t.y);
      this._panStart.set(s, o);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, o = e.pageY - t.y, r = Math.sqrt(s * s + o * o);
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
      const s = this._getSecondPointerPosition(e), o = 0.5 * (e.pageX + s.x), r = 0.5 * (e.pageY + s.y);
      this._rotateEnd.set(o, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(U * this._rotateDelta.x / t.clientHeight), this._rotateUp(U * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), o = 0.5 * (e.pageY + t.y);
      this._panEnd.set(s, o);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, o = e.pageY - t.y, r = Math.sqrt(s * s + o * o);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const l = (e.pageX + t.x) * 0.5, c = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(l, c);
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
    t === void 0 && (t = new q(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
function ft(n) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(n) && (this._addPointer(n), n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n)));
}
function _t(n) {
  this.enabled !== !1 && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n));
}
function gt(n) {
  switch (this._removePointer(n), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(qe), this.state = N.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function yt(n) {
  let e;
  switch (n.button) {
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
    case re.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(n), this.state = N.DOLLY;
      break;
    case re.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(n), this.state = N.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(n), this.state = N.ROTATE;
      }
      break;
    case re.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(n), this.state = N.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(n), this.state = N.PAN;
      }
      break;
    default:
      this.state = N.NONE;
  }
  this.state !== N.NONE && this.dispatchEvent(Ne);
}
function bt(n) {
  switch (this.state) {
    case N.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(n);
      break;
    case N.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(n);
      break;
    case N.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function jt(n) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== N.NONE || (n.preventDefault(), this.dispatchEvent(Ne), this._handleMouseWheel(this._customWheelEvent(n)), this.dispatchEvent(qe));
}
function xt(n) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(n);
}
function vt(n) {
  switch (this._trackPointer(n), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ie.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(n), this.state = N.TOUCH_ROTATE;
          break;
        case ie.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(n), this.state = N.TOUCH_PAN;
          break;
        default:
          this.state = N.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ie.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(n), this.state = N.TOUCH_DOLLY_PAN;
          break;
        case ie.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(n), this.state = N.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = N.NONE;
      }
      break;
    default:
      this.state = N.NONE;
  }
  this.state !== N.NONE && this.dispatchEvent(Ne);
}
function Ct(n) {
  switch (this._trackPointer(n), this.state) {
    case N.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case N.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case N.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case N.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = N.NONE;
  }
}
function St(n) {
  this.enabled !== !1 && n.preventDefault();
}
function Tt(n) {
  n.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function wt(n) {
  n.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class Pt {
  constructor(e) {
    this.animationId = null, this.gridHelper = null, this.axesHelper = null, this.frameCallbacks = [];
    const {
      container: t,
      antialias: s = !0,
      shadows: o = !0,
      backgroundColor: r = 657940,
      gridSize: l = 20,
      showGrid: c = !0,
      showAxes: d = !0
    } = e;
    this.container = t, this.clock = new m.Clock(), this.scene = new m.Scene(), this.scene.background = new m.Color(r), this.scene.fog = new m.FogExp2(r, 0.015);
    const f = t.clientWidth / t.clientHeight || 1;
    this.camera = new m.PerspectiveCamera(55, f, 0.1, 500), this.camera.position.set(12, 10, 12), this.camera.lookAt(0, 0, 0), this.renderer = new m.WebGLRenderer({
      antialias: s,
      preserveDrawingBuffer: !0
      // needed for PNG export
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(t.clientWidth, t.clientHeight), o && (this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = m.PCFSoftShadowMap), t.appendChild(this.renderer.domElement), this.controls = new mt(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.08, this.controls.maxPolarAngle = Math.PI * 0.48, this.controls.minDistance = 2, this.controls.maxDistance = 80, c && (this.gridHelper = new m.GridHelper(l, l, 1973816, 1315882), this.scene.add(this.gridHelper)), d && (this.axesHelper = new m.AxesHelper(3), this.scene.add(this.axesHelper));
    const u = new m.AmbientLight(4210784, 0.3);
    this.scene.add(u), this.resizeObserver = new ResizeObserver(() => this.onResize()), this.resizeObserver.observe(t);
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
  /** Helper objects for aux views (viewfinder) to temporarily hide */
  getHelperObjects() {
    const e = [];
    return this.gridHelper && e.push(this.gridHelper), this.axesHelper && e.push(this.axesHelper), e;
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
const Me = [
  { name: "full_frame", label: "全画幅 (Full Frame)", w: 36, h: 24 },
  { name: "arri_alexa35", label: "ARRI Alexa 35", w: 29.9, h: 22.2 },
  { name: "red_raptor", label: "RED V-Raptor", w: 40.96, h: 21.6 },
  { name: "sony_fx6", label: "Sony FX6", w: 35.7, h: 23.8 },
  { name: "canon_c70", label: "Canon C70 (Super35)", w: 26.2, h: 13.8 },
  { name: "bmpcc_6k", label: "BMPCC 6K (Super35)", w: 23.1, h: 12.95 },
  { name: "mft", label: "MFT (Micro Four Thirds)", w: 17.3, h: 13 }
];
function _e(n, e) {
  return e <= 0 || n <= 0 ? 0 : 2 * Math.atan(n / (2 * e)) * (180 / Math.PI);
}
function Pe(n, e, t, s, o = 0.03) {
  if (n <= 0 || e <= 0 || t <= 0 || s <= 0)
    return { near: 0, far: 1 / 0, range: 1 / 0 };
  const r = 24 / s, l = o / r, c = n * n / (e * l * 1e3), d = n / 1e3, f = t * (c - d) / (c + t - 2 * d), u = t * (c - d) / (c - t);
  return {
    near: Math.max(0, f),
    far: u < 0 ? 1 / 0 : u,
    // negative means beyond hyperfocal
    range: u < 0 ? 1 / 0 : u - f
  };
}
function Dn(n, e) {
  const t = Me.find((s) => s.name === n);
  return t ? _e(t.h, e) : 0;
}
function $(n) {
  return n * (Math.PI / 180);
}
function xe(n) {
  return n * (180 / Math.PI);
}
function Z() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}
function Je(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function O(n, e, t) {
  return n + (e - n) * Je(t, 0, 1);
}
function ge(n) {
  return n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
}
function Qe(n, e) {
  if (n.length === 0) return null;
  if (n.length === 1)
    return {
      position: { ...n[0].position },
      rotation: { ...n[0].rotation },
      action: n[0].action
    };
  let t = 0;
  for (; t < n.length - 1 && !(n[t + 1].time >= e); t++)
    ;
  t = Math.min(t, n.length - 2);
  const s = n[t], o = n[t + 1], r = o.time - s.time, l = r > 0 ? (e - s.time) / r : 0, c = ge(l);
  return {
    position: {
      x: O(s.position.x, o.position.x, c),
      y: O(s.position.y, o.position.y, c),
      z: O(s.position.z, o.position.z, c)
    },
    rotation: {
      yaw: O(s.rotation.yaw, o.rotation.yaw, c),
      pitch: O(s.rotation.pitch, o.rotation.pitch, c),
      roll: O(s.rotation.roll, o.rotation.roll, c)
    },
    action: l < 0.5 ? s.action : o.action
  };
}
function et(n, e, t) {
  const s = n.filter((g) => g.cameraId === e).sort((g, h) => g.t - h.t);
  if (s.length === 0) return null;
  if (s.length === 1)
    return {
      position: { ...s[0].position },
      rotation: { ...s[0].rotation }
    };
  const o = Je(t, 0, 1);
  if (o <= s[0].t)
    return {
      position: { ...s[0].position },
      rotation: { ...s[0].rotation }
    };
  const r = s[s.length - 1];
  if (o >= r.t)
    return {
      position: { ...r.position },
      rotation: { ...r.rotation }
    };
  let l = 0;
  for (; l < s.length - 1 && !(s[l + 1].t >= o); l++)
    ;
  l = Math.min(l, s.length - 2);
  const c = s[l], d = s[l + 1], f = d.t - c.t, u = f > 0 ? (o - c.t) / f : 0, p = ge(u);
  return {
    position: {
      x: O(c.position.x, d.position.x, p),
      y: O(c.position.y, d.position.y, p),
      z: O(c.position.z, d.position.z, p)
    },
    rotation: {
      yaw: O(c.rotation.yaw, d.rotation.yaw, p),
      pitch: O(c.rotation.pitch, d.rotation.pitch, p),
      roll: O(c.rotation.roll, d.rotation.roll, p)
    }
  };
}
const Et = 8160255, Nt = 16767293;
class Mt {
  constructor(e) {
    this.cameras = /* @__PURE__ */ new Map(), this.selectedId = null, this.scene = e;
  }
  /** Add a new camera to the scene */
  addCamera(e = {}) {
    const t = e.id || Z(), s = Me.find((l) => l.name === "full_frame"), o = {
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
      color: e.color || Et,
      movement: e.movement,
      script: e.script
    };
    o.fov = _e(o.sensorH, o.focal), o.dof = Pe(o.focal, o.fstop, o.focusDist, o.sensorH);
    const r = this.createCameraMesh(o);
    return this.scene.add(r), this.cameras.set(t, { camera: o, group: r }), o;
  }
  /** Update camera parameters and refresh 3D visualization */
  updateCamera(e, t) {
    const s = this.cameras.get(e);
    return s ? (Object.assign(s.camera, t), s.camera.fov = _e(s.camera.sensorH, s.camera.focal), s.camera.dof = Pe(
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
      s instanceof m.Mesh && (s.geometry.dispose(), Array.isArray(s.material) ? s.material.forEach((o) => o.dispose()) : s.material.dispose());
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
    s && (s.camera.rotation = t, s.group.rotation.order = "YXZ", s.group.rotation.set(
      $(t.pitch),
      $(t.yaw),
      $(t.roll)
    ));
  }
  /** Timeline playback: move cameras along their path keyframes */
  updatePlayback(e, t) {
    for (const [s] of this.cameras) {
      const o = et(e, s, t);
      o && (this.setCameraPosition(s, o.position), this.setCameraRotation(s, o.rotation));
    }
  }
  /** Clear all cameras */
  clearAll() {
    for (const [e] of this.cameras)
      this.deleteCamera(e);
  }
  // --- Private helpers ---
  createCameraMesh(e) {
    const t = new m.Group();
    t.userData = { cameraId: e.id }, t.rotation.order = "YXZ";
    const s = new m.BoxGeometry(0.3, 0.2, 0.4), o = new m.MeshStandardMaterial({
      color: e.color,
      metalness: 0.6,
      roughness: 0.3
    }), r = new m.Mesh(s, o);
    r.castShadow = !0, r.userData = { cameraId: e.id, part: "body" }, t.add(r);
    const l = new m.CylinderGeometry(0.08, 0.12, 0.2, 16), c = new m.MeshStandardMaterial({
      color: 2236962,
      metalness: 0.8,
      roughness: 0.2
    }), d = new m.Mesh(l, c);
    return d.rotation.x = Math.PI / 2, d.position.z = -0.3, d.userData = { cameraId: e.id, part: "lens" }, t.add(d), t.position.set(e.position.x, e.position.y, e.position.z), t.rotation.set(
      $(e.rotation.pitch),
      $(e.rotation.yaw),
      $(e.rotation.roll)
    ), t;
  }
  highlightCamera(e, t = !0) {
    const s = this.cameras.get(e);
    if (!s) return;
    const o = t ? Nt : s.camera.color;
    s.group.traverse((r) => {
      r instanceof m.Mesh && r.userData.part === "body" && r.material.color.setHex(o);
    });
  }
}
class Ot {
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
    }, o = this.createMesh(s);
    return this.tagObjectId(o, t, s.type), this.scene.add(o), this.objects.set(t, { data: s, mesh: o }), s;
  }
  /** Update an existing object */
  updateObject(e, t) {
    const s = this.objects.get(e);
    if (!s) return null;
    Object.assign(s.data, t), this.scene.remove(s.mesh);
    const o = this.createMesh(s.data);
    return this.tagObjectId(o, e, s.data.type), this.scene.add(o), s.mesh = o, s.data;
  }
  /** Tag root + child meshes so RayPicker can resolve objectId on hit */
  tagObjectId(e, t, s) {
    e.userData = { ...e.userData, objectId: t, objectType: s }, e.traverse((o) => {
      o !== e && (o.userData = { ...o.userData, objectId: t, objectType: s });
    });
  }
  /** Delete an object */
  deleteObject(e) {
    const t = this.objects.get(e);
    return t ? (this.scene.remove(t.mesh), t.mesh.traverse((s) => {
      s instanceof m.Mesh && (s.geometry.dispose(), Array.isArray(s.material) ? s.material.forEach((o) => o.dispose()) : s.material.dispose());
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
    const o = new m.Mesh(s, t);
    return o.castShadow = !0, o.receiveShadow = !0, this.applyTransform(o, e), o;
  }
  createPerson(e, t) {
    const s = new m.Group(), o = new m.CylinderGeometry(0.25, 0.2, 1.2, 8), r = new m.Mesh(o, t);
    r.position.y = 0.6, r.castShadow = !0, s.add(r);
    const l = new m.MeshStandardMaterial({ color: 14731424, roughness: 0.8 }), c = new m.SphereGeometry(0.15, 16, 16), d = new m.Mesh(c, l);
    return d.position.y = 1.35, d.castShadow = !0, s.add(d), this.applyTransform(s, e), s;
  }
  createBuilding(e, t) {
    const s = new m.Group(), o = new m.BoxGeometry(1, 1, 1), r = new m.Mesh(o, t);
    r.position.y = 0.5, r.castShadow = !0, r.receiveShadow = !0, s.add(r);
    const l = new m.MeshStandardMaterial({ color: 3359829, metalness: 0.5 });
    for (let c = 0; c < 3; c++)
      for (let d = 0; d < 2; d++) {
        const f = new m.BoxGeometry(0.2, 0.15, 0.02), u = new m.Mesh(f, l);
        u.position.set(-0.15 + d * 0.3, 0.2 + c * 0.25, 0.51), s.add(u);
      }
    return this.applyTransform(s, e), s;
  }
  createCar(e, t) {
    const s = new m.Group(), o = new m.BoxGeometry(2, 0.6, 1), r = new m.Mesh(o, t);
    r.position.y = 0.4, r.castShadow = !0, s.add(r);
    const l = new m.BoxGeometry(1.2, 0.5, 0.9), c = new m.MeshStandardMaterial({ color: 8956620, metalness: 0.3, roughness: 0.2 }), d = new m.Mesh(l, c);
    d.position.set(-0.1, 0.9, 0), s.add(d);
    const f = new m.MeshStandardMaterial({ color: 2236962 }), u = new m.CylinderGeometry(0.2, 0.2, 0.1, 16), p = [
      [-0.6, 0.2, 0.55],
      [0.6, 0.2, 0.55],
      [-0.6, 0.2, -0.55],
      [0.6, 0.2, -0.55]
    ];
    for (const [g, h, j] of p) {
      const x = new m.Mesh(u, f);
      x.position.set(g, h, j), x.rotation.x = Math.PI / 2, s.add(x);
    }
    return this.applyTransform(s, e), s;
  }
  createTree(e, t) {
    const s = new m.Group(), o = new m.MeshStandardMaterial({ color: 7029286, roughness: 0.9 }), r = new m.CylinderGeometry(0.1, 0.15, 1.5, 8), l = new m.Mesh(r, o);
    l.position.y = 0.75, l.castShadow = !0, s.add(l);
    const c = new m.SphereGeometry(0.8, 12, 12), d = new m.Mesh(c, t);
    return d.position.y = 2, d.castShadow = !0, s.add(d), this.applyTransform(s, e), s;
  }
  createChair(e, t) {
    const s = new m.Group(), o = new m.MeshStandardMaterial({ color: 3811866, roughness: 0.9 }), r = new m.BoxGeometry(0.5, 0.05, 0.5), l = new m.Mesh(r, t);
    l.position.y = 0.45, l.castShadow = !0, s.add(l);
    const c = new m.BoxGeometry(0.5, 0.5, 0.05), d = new m.Mesh(c, t);
    d.position.set(0, 0.7, -0.225), d.castShadow = !0, s.add(d);
    const f = new m.CylinderGeometry(0.02, 0.02, 0.45, 6), u = [
      [-0.2, 0.225, -0.2],
      [0.2, 0.225, -0.2],
      [-0.2, 0.225, 0.2],
      [0.2, 0.225, 0.2]
    ];
    for (const [p, g, h] of u) {
      const j = new m.Mesh(f, o);
      j.position.set(p, g, h), j.castShadow = !0, s.add(j);
    }
    return this.applyTransform(s, e), s;
  }
  applyTransform(e, t) {
    e.position.set(t.position.x, t.position.y, t.position.z), e.rotation.set(
      $(t.rotation.pitch),
      $(t.rotation.yaw),
      $(t.rotation.roll)
    ), e.scale.set(t.scale.x, t.scale.y, t.scale.z);
  }
}
const At = [
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
class kt {
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
    const t = At.find((s) => s.name === e);
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
class It {
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
    return t < 0 ? !1 : (this.keyframes.splice(t, 1), this.refreshVisualization(), !0);
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
    const t = ge(e);
    let s = 0;
    for (; s < this.keyframes.length - 1 && !(this.keyframes[s + 1].t >= t); s++)
      ;
    s = Math.min(s, this.keyframes.length - 2);
    const o = this.keyframes[s], r = this.keyframes[s + 1], l = r.t - o.t > 0 ? (t - o.t) / (r.t - o.t) : 0;
    return {
      position: {
        x: O(o.position.x, r.position.x, l),
        y: O(o.position.y, r.position.y, l),
        z: O(o.position.z, r.position.z, l)
      },
      rotation: {
        yaw: O(o.rotation.yaw, r.rotation.yaw, l),
        pitch: O(o.rotation.pitch, r.rotation.pitch, l),
        roll: O(o.rotation.roll, r.rotation.roll, l)
      }
    };
  }
  /** Import keyframes from array */
  importKeyframes(e, t) {
    const s = t ? e.filter((o) => o.cameraId === t) : e;
    this.keyframes = s.map((o) => ({ ...o })).sort((o, r) => o.t - r.t), this.refreshVisualization();
  }
  // --- Private ---
  recalcT() {
    const e = this.keyframes.length;
    this.keyframes.forEach((t, s) => {
      t.t = e > 1 ? s / (e - 1) : 0;
    });
  }
  refreshVisualization() {
    var s, o;
    if (this.line) {
      this.scene.remove(this.line), (s = this.line.geometry) == null || s.dispose();
      const r = this.line.material;
      Array.isArray(r) ? r.forEach((l) => l.dispose()) : r == null || r.dispose(), this.line = null;
    }
    for (const r of this.markers) {
      this.scene.remove(r), (o = r.geometry) == null || o.dispose();
      const l = r.material;
      Array.isArray(l) ? l.forEach((c) => c.dispose()) : l == null || l.dispose();
    }
    if (this.markers = [], this.keyframes.length < 1) return;
    const e = new m.SphereGeometry(0.12, 8, 8), t = new m.MeshBasicMaterial({ color: 16739125 });
    for (const r of this.keyframes) {
      const l = new m.Mesh(e, t);
      l.position.set(r.position.x, r.position.y, r.position.z), this.scene.add(l), this.markers.push(l);
    }
    if (this.keyframes.length >= 2) {
      const r = this.keyframes.map(
        (d) => new m.Vector3(d.position.x, d.position.y, d.position.z)
      ), l = new m.BufferGeometry().setFromPoints(r), c = new m.LineBasicMaterial({
        color: 16739125,
        linewidth: 2
      });
      this.line = new m.Line(l, c), this.scene.add(this.line);
    }
  }
  /** Visual objects to hide in viewfinder */
  getVisualObjects() {
    const e = [...this.markers];
    return this.line && e.push(this.line), e;
  }
  /** Clean up */
  dispose() {
    this.clearAll();
  }
}
class Dt {
  constructor(e, t) {
    this.onPickCallback = null, this.onHoverCallback = null, this.isDragging = !1, this.dragTarget = null, this.cameraGroups = [], this.objectMeshes = [], this.actorGroups = [], this.onPointerDown = (s) => {
      this.updateMouse(s);
      const o = this.raycast();
      if (o.target === "camera" || o.target === "object" || o.target === "actor") {
        this.isDragging = !0, this.dragTarget = {
          type: o.target,
          id: o.id
        };
        const r = this.getWorldPosition(o.target, o.id);
        if (r) {
          this.dragPlane.set(new m.Vector3(0, 1, 0), -r.y);
          const l = new m.Vector3();
          this.raycaster.ray.intersectPlane(this.dragPlane, l), this.dragOffset.copy(r).sub(l);
        }
      }
      this.onPickCallback && this.onPickCallback(o);
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
      const o = this.raycast();
      this.onHoverCallback && this.onHoverCallback(o.target ? o : null);
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
    var s, o;
    const t = (o = (s = e.target).getBoundingClientRect) == null ? void 0 : o.call(s);
    t && (this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera));
  }
  raycast() {
    const e = {
      target: null,
      id: null,
      point: new m.Vector3(),
      groundPoint: null
    }, t = [];
    for (const l of this.cameraGroups)
      l.traverse((c) => {
        c instanceof m.Mesh && t.push(c);
      });
    for (const l of this.objectMeshes)
      l.traverse((c) => {
        c instanceof m.Mesh && t.push(c);
      });
    for (const l of this.actorGroups)
      l.traverse((c) => {
        c instanceof m.Mesh && t.push(c);
      });
    const s = this.raycaster.intersectObjects(t, !1);
    if (s.length > 0) {
      const l = s[0], c = l.object.userData, d = new m.Vector3();
      if (this.raycaster.ray.intersectPlane(this.groundPlane, d), c.cameraId)
        return {
          target: "camera",
          id: c.cameraId,
          point: l.point.clone(),
          groundPoint: d
        };
      if (c.objectId)
        return {
          target: "object",
          id: c.objectId,
          point: l.point.clone(),
          groundPoint: d
        };
      if (c.actorId)
        return {
          target: "actor",
          id: c.actorId,
          point: l.point.clone(),
          groundPoint: d
        };
    }
    const o = new m.Vector3();
    return this.raycaster.ray.intersectPlane(this.groundPlane, o) ? {
      target: "ground",
      id: null,
      point: o.clone(),
      groundPoint: o.clone()
    } : e;
  }
  getWorldPosition(e, t) {
    if (e === "camera") {
      const o = this.cameraGroups.find((r) => r.userData.cameraId === t);
      return o ? o.position.clone() : null;
    }
    if (e === "actor") {
      const o = this.actorGroups.find((r) => r.userData.actorId === t);
      return o ? o.position.clone() : null;
    }
    const s = this.objectMeshes.find((o) => o.userData.objectId === t);
    return s ? s.position.clone() : null;
  }
}
const Rt = 5164484, Lt = 16767293;
class Gt {
  constructor(e) {
    this.actors = /* @__PURE__ */ new Map(), this.selectedId = null, this.scene = e;
  }
  /** 添加角色 */
  addActor(e = {}) {
    const t = e.id || Z(), s = {
      id: t,
      name: e.name || `角色${this.actors.size + 1}`,
      role: e.role || "principal",
      position: e.position || { x: 0, y: 0, z: 0 },
      rotation: e.rotation || { yaw: 0, pitch: 0, roll: 0 },
      height: e.height || 1.7,
      color: e.color ?? Rt,
      keyframes: e.keyframes || []
    }, o = this.createActorMesh(s);
    this.scene.add(o);
    const r = { actor: s, group: o, pathLine: null, pathMarkers: [] };
    return this.actors.set(t, r), this.refreshPath(t), s;
  }
  /** 更新角色 */
  updateActor(e, t) {
    const s = this.actors.get(e);
    if (!s) return null;
    const o = t.height !== void 0 && t.height !== s.actor.height, r = t.color !== void 0 && t.color !== s.actor.color, l = t.position !== void 0, c = t.rotation !== void 0, d = t.keyframes !== void 0;
    return Object.assign(s.actor, t), o || r ? (this.disposeGroup(s.group), this.scene.remove(s.group), s.group = this.createActorMesh(s.actor), this.scene.add(s.group)) : (l && s.group.position.set(s.actor.position.x, s.actor.position.y, s.actor.position.z), c && s.group.rotation.set(0, $(s.actor.rotation.yaw), 0)), (d || l || c) && this.refreshPath(e), e === this.selectedId && this.highlightActor(e, !0), s.actor;
  }
  /** 时间轴播放：更新所有角色在指定时间的位置 */
  updatePlayback(e) {
    for (const [t, s] of this.actors) {
      const o = this.sampleAtTime(t, e);
      o && (s.group.position.set(o.position.x, o.position.y, o.position.z), s.group.rotation.set(0, $(o.rotation.yaw), 0));
    }
  }
  /** 释放Group内所有Mesh的geometry和material */
  disposeGroup(e) {
    e.traverse((t) => {
      var s;
      if (t instanceof m.Mesh) {
        (s = t.geometry) == null || s.dispose();
        const o = t.material;
        Array.isArray(o) ? o.forEach((r) => r.dispose()) : o == null || o.dispose();
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
  /** 路径线 / 路点标记 / 骨骼锚点 — 取景器渲染时临时隐藏 */
  getHelperObjects() {
    const e = [];
    for (const t of this.actors.values())
      t.pathLine && e.push(t.pathLine), e.push(...t.pathMarkers), t.group.traverse((s) => {
        s.name && s.name.startsWith("bone_") && e.push(s);
      });
    return e;
  }
  /** 添加关键帧 */
  addKeyframe(e, t) {
    const s = this.actors.get(e);
    if (!s) return null;
    const o = {
      id: t.id || Z(),
      time: t.time ?? 0,
      position: t.position,
      rotation: t.rotation || { yaw: 0, pitch: 0, roll: 0 },
      action: t.action || "stand"
    };
    return s.actor.keyframes.push(o), s.actor.keyframes.sort((r, l) => r.time - l.time), this.refreshPath(e), o;
  }
  /** 删除关键帧 */
  removeKeyframe(e, t) {
    const s = this.actors.get(e);
    if (!s) return !1;
    const o = s.actor.keyframes.length;
    return s.actor.keyframes = s.actor.keyframes.filter((r) => r.id !== t), s.actor.keyframes.length === o ? !1 : (this.refreshPath(e), !0);
  }
  /** 获取某时间点的插值位置（播放用） */
  sampleAtTime(e, t) {
    const s = this.actors.get(e);
    if (!s || s.actor.keyframes.length === 0) return null;
    const o = s.actor.keyframes;
    if (o.length === 1)
      return {
        position: o[0].position,
        rotation: o[0].rotation,
        action: o[0].action
      };
    let r = 0;
    for (; r < o.length - 1 && !(o[r + 1].time >= t); r++)
      ;
    r = Math.min(r, o.length - 2);
    const l = o[r], c = o[r + 1], d = c.time - l.time, f = d > 0 ? (t - l.time) / d : 0, u = ge(f);
    return {
      position: {
        x: O(l.position.x, c.position.x, u),
        y: O(l.position.y, c.position.y, u),
        z: O(l.position.z, c.position.z, u)
      },
      rotation: {
        yaw: O(l.rotation.yaw, c.rotation.yaw, u),
        pitch: O(l.rotation.pitch, c.rotation.pitch, u),
        roll: O(l.rotation.roll, c.rotation.roll, u)
      },
      action: f < 0.5 ? l.action : c.action
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
    const s = e.height, o = e.color, r = new m.CapsuleGeometry(0.25, s * 0.5, 4, 8), l = new m.MeshStandardMaterial({
      color: o,
      metalness: 0.1,
      roughness: 0.7
    }), c = new m.Mesh(r, l);
    c.position.y = s * 0.4, c.castShadow = !0, c.userData = { actorId: e.id, part: "body" }, t.add(c);
    const d = new m.SphereGeometry(0.18, 16, 16), f = new m.MeshStandardMaterial({
      color: 16767916,
      roughness: 0.6
    }), u = new m.Mesh(d, f);
    u.position.y = s - 0.15, u.castShadow = !0, u.userData = { actorId: e.id, part: "head" }, t.add(u);
    const p = new m.ConeGeometry(0.08, 0.25, 4), g = new m.MeshBasicMaterial({ color: o }), h = new m.Mesh(p, g);
    return h.rotation.x = Math.PI / 2, h.position.set(0, s * 0.4, 0.3), h.userData = { actorId: e.id, part: "arrow" }, t.add(h), t.position.set(e.position.x, e.position.y, e.position.z), t.rotation.set(0, $(e.rotation.yaw), 0), t;
  }
  /** 刷新路径可视化 */
  refreshPath(e) {
    const t = this.actors.get(e);
    if (!t) return;
    this.clearPath(t);
    const s = t.actor.keyframes;
    if (s.length === 0) return;
    const o = new m.SphereGeometry(0.1, 8, 8), r = new m.MeshBasicMaterial({ color: t.actor.color });
    for (const l of s) {
      const c = new m.Mesh(o, r);
      c.position.set(l.position.x, l.position.y, l.position.z), c.userData = { actorId: e, keyframeId: l.id, type: "actor-keyframe" }, this.scene.add(c), t.pathMarkers.push(c);
    }
    if (s.length >= 2) {
      const l = s.map((u) => new m.Vector3(u.position.x, u.position.y, u.position.z)), c = new m.BufferGeometry().setFromPoints(l), d = new m.LineDashedMaterial({
        color: t.actor.color,
        dashSize: 0.3,
        gapSize: 0.2
      }), f = new m.Line(c, d);
      f.computeLineDistances(), this.scene.add(f), t.pathLine = f;
    }
  }
  /** 清除路径可视化 */
  clearPath(e) {
    var t;
    if (e.pathLine) {
      this.scene.remove(e.pathLine), (t = e.pathLine.geometry) == null || t.dispose();
      const s = e.pathLine.material;
      Array.isArray(s) ? s.forEach((o) => o.dispose()) : s == null || s.dispose(), e.pathLine = null;
    }
    if (e.pathMarkers.length > 0) {
      const s = e.pathMarkers[0].geometry, o = e.pathMarkers[0].material;
      for (const r of e.pathMarkers)
        this.scene.remove(r);
      s == null || s.dispose(), Array.isArray(o) ? o.forEach((r) => r.dispose()) : o == null || o.dispose(), e.pathMarkers = [];
    }
  }
  /** 高亮角色 */
  highlightActor(e, t) {
    const s = this.actors.get(e);
    if (!s) return;
    const o = t ? Lt : s.actor.color;
    s.group.traverse((r) => {
      r instanceof m.Mesh && r.userData.part === "body" && r.material.color.setHex(o), r instanceof m.Mesh && r.userData.part === "arrow" && r.material.color.setHex(o);
    });
  }
  /** 释放资源 */
  dispose() {
    this.clearAll();
  }
}
class zt {
  constructor(e, t) {
    this.mode = "rgb", this.lastInfo = "未选择机位", this.scene = e, this.camera = new m.PerspectiveCamera(50, 16 / 9, 0.1, 200), this.camera.rotation.order = "YXZ", this.renderer = new m.WebGLRenderer({ canvas: t, antialias: !0, alpha: !1 }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(256, 144, !1), this.renderer.setClearColor(0, 1), this.depthMaterial = new m.MeshDepthMaterial();
  }
  setMode(e) {
    this.mode = e;
  }
  getMode() {
    return this.mode;
  }
  getLastInfo() {
    return this.lastInfo;
  }
  render(e) {
    if (!e.selectedCamera)
      return this.renderer.clear(), this.lastInfo = "未选择机位", this.lastInfo;
    const t = e.selectedCamera;
    this.syncCamera(t), this.lastInfo = this.buildInfo(t, e.actorPosition);
    const s = e.helpers.map((c) => {
      const d = c.visible;
      return c.visible = !1, { obj: c, prev: d };
    }), o = this.scene.overrideMaterial, r = this.scene.background, l = this.scene.fog;
    try {
      this.mode === "depth" && (this.scene.overrideMaterial = this.depthMaterial, this.scene.background = new m.Color(0), this.scene.fog = null), this.renderer.render(this.scene, this.camera);
    } finally {
      this.scene.overrideMaterial = o, this.scene.background = r, this.scene.fog = l;
      for (const { obj: c, prev: d } of s) c.visible = d;
    }
    return this.lastInfo;
  }
  dispose() {
    this.depthMaterial.dispose(), this.renderer.dispose();
  }
  syncCamera(e) {
    this.camera.fov = e.fov || 50, this.camera.aspect = 16 / 9, this.camera.near = 0.1, this.camera.far = 200, this.camera.position.set(e.position.x, e.position.y, e.position.z), this.camera.rotation.set(
      $(e.rotation.pitch),
      $(e.rotation.yaw),
      $(e.rotation.roll)
    ), this.camera.updateProjectionMatrix();
  }
  buildInfo(e, t) {
    var l, c;
    let s = `${e.name} | 焦距: ${e.focal}mm`;
    const o = ((l = e.script) == null ? void 0 : l.description) || ((c = e.script) == null ? void 0 : c.shotId), r = Vt(o);
    if (r && (s += ` | 景别: ${r}`), t) {
      const d = e.position.x - t.x, f = e.position.y - t.y, u = e.position.z - t.z, p = Math.sqrt(d * d + f * f + u * u);
      s += ` | 距角色: ${p.toFixed(1)}m`;
    }
    return s;
  }
}
function Vt(n) {
  if (!n) return "WS";
  const e = String(n).match(/\(([A-Z]+)\)/);
  return e ? e[1] : /特写|ECU/i.test(n) ? "ECU" : /近景|CU/i.test(n) ? "CU" : /中景|MS/i.test(n) ? "MS" : /全景|WS/i.test(n) ? "WS" : "";
}
const Bt = {}, Ge = (n) => {
  let e;
  const t = /* @__PURE__ */ new Set(), s = (u, p) => {
    const g = typeof u == "function" ? u(e) : u;
    if (!Object.is(g, e)) {
      const h = e;
      e = p ?? (typeof g != "object" || g === null) ? g : Object.assign({}, e, g), t.forEach((j) => j(e, h));
    }
  }, o = () => e, d = { setState: s, getState: o, getInitialState: () => f, subscribe: (u) => (t.add(u), () => t.delete(u)), destroy: () => {
    (Bt ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), t.clear();
  } }, f = e = n(s, o, d);
  return d;
}, Ft = (n) => n ? Ge(n) : Ge;
var Ee = { exports: {} }, ve = {}, me = { exports: {} }, Ce = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Ht() {
  if (ze) return Ce;
  ze = 1;
  var n = ae;
  function e(p, g) {
    return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
  }
  var t = typeof Object.is == "function" ? Object.is : e, s = n.useState, o = n.useEffect, r = n.useLayoutEffect, l = n.useDebugValue;
  function c(p, g) {
    var h = g(), j = s({ inst: { value: h, getSnapshot: g } }), x = j[0].inst, C = j[1];
    return r(
      function() {
        x.value = h, x.getSnapshot = g, d(x) && C({ inst: x });
      },
      [p, h, g]
    ), o(
      function() {
        return d(x) && C({ inst: x }), p(function() {
          d(x) && C({ inst: x });
        });
      },
      [p]
    ), l(h), h;
  }
  function d(p) {
    var g = p.getSnapshot;
    p = p.value;
    try {
      var h = g();
      return !t(p, h);
    } catch {
      return !0;
    }
  }
  function f(p, g) {
    return g();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : c;
  return Ce.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : u, Ce;
}
var Se = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Kt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    function n(h, j) {
      return h === j && (h !== 0 || 1 / h === 1 / j) || h !== h && j !== j;
    }
    function e(h, j) {
      u || o.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var x = j();
      if (!p) {
        var C = j();
        r(x, C) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      C = l({
        inst: { value: x, getSnapshot: j }
      });
      var y = C[0].inst, w = C[1];
      return d(
        function() {
          y.value = x, y.getSnapshot = j, t(y) && w({ inst: y });
        },
        [h, x, j]
      ), c(
        function() {
          return t(y) && w({ inst: y }), h(function() {
            t(y) && w({ inst: y });
          });
        },
        [h]
      ), f(x), x;
    }
    function t(h) {
      var j = h.getSnapshot;
      h = h.value;
      try {
        var x = j();
        return !r(h, x);
      } catch {
        return !0;
      }
    }
    function s(h, j) {
      return j();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = ae, r = typeof Object.is == "function" ? Object.is : n, l = o.useState, c = o.useEffect, d = o.useLayoutEffect, f = o.useDebugValue, u = !1, p = !1, g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : e;
    Se.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Se;
}
var Be;
function tt() {
  return Be || (Be = 1, process.env.NODE_ENV === "production" ? me.exports = Ht() : me.exports = Kt()), me.exports;
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
var Fe;
function $t() {
  if (Fe) return ve;
  Fe = 1;
  var n = ae, e = tt();
  function t(f, u) {
    return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
  }
  var s = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, r = n.useRef, l = n.useEffect, c = n.useMemo, d = n.useDebugValue;
  return ve.useSyncExternalStoreWithSelector = function(f, u, p, g, h) {
    var j = r(null);
    if (j.current === null) {
      var x = { hasValue: !1, value: null };
      j.current = x;
    } else x = j.current;
    j = c(
      function() {
        function y(E) {
          if (!w) {
            if (w = !0, I = E, E = g(E), h !== void 0 && x.hasValue) {
              var M = x.value;
              if (h(M, E))
                return D = M;
            }
            return D = E;
          }
          if (M = D, s(I, E)) return M;
          var A = g(E);
          return h !== void 0 && h(M, A) ? (I = E, M) : (I = E, D = A);
        }
        var w = !1, I, D, F = p === void 0 ? null : p;
        return [
          function() {
            return y(u());
          },
          F === null ? void 0 : function() {
            return y(F());
          }
        ];
      },
      [u, p, g, h]
    );
    var C = o(f, j[0], j[1]);
    return l(
      function() {
        x.hasValue = !0, x.value = C;
      },
      [C]
    ), d(C), C;
  }, ve;
}
var Te = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Ut() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = ae, t = tt(), s = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, r = e.useRef, l = e.useEffect, c = e.useMemo, d = e.useDebugValue;
    Te.useSyncExternalStoreWithSelector = function(f, u, p, g, h) {
      var j = r(null);
      if (j.current === null) {
        var x = { hasValue: !1, value: null };
        j.current = x;
      } else x = j.current;
      j = c(
        function() {
          function y(E) {
            if (!w) {
              if (w = !0, I = E, E = g(E), h !== void 0 && x.hasValue) {
                var M = x.value;
                if (h(M, E))
                  return D = M;
              }
              return D = E;
            }
            if (M = D, s(I, E))
              return M;
            var A = g(E);
            return h !== void 0 && h(M, A) ? (I = E, M) : (I = E, D = A);
          }
          var w = !1, I, D, F = p === void 0 ? null : p;
          return [
            function() {
              return y(u());
            },
            F === null ? void 0 : function() {
              return y(F());
            }
          ];
        },
        [u, p, g, h]
      );
      var C = o(f, j[0], j[1]);
      return l(
        function() {
          x.hasValue = !0, x.value = C;
        },
        [C]
      ), d(C), C;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Te;
}
process.env.NODE_ENV === "production" ? Ee.exports = $t() : Ee.exports = Ut();
var Yt = Ee.exports;
const Wt = /* @__PURE__ */ pt(Yt), st = {}, { useDebugValue: Zt } = ae, { useSyncExternalStoreWithSelector: Xt } = Wt;
let Ke = !1;
const qt = (n) => n;
function Jt(n, e = qt, t) {
  (st ? "production" : void 0) !== "production" && t && !Ke && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ke = !0);
  const s = Xt(
    n.subscribe,
    n.getState,
    n.getServerState || n.getInitialState,
    e,
    t
  );
  return Zt(s), s;
}
const $e = (n) => {
  (st ? "production" : void 0) !== "production" && typeof n != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof n == "function" ? Ft(n) : n, t = (s, o) => Jt(e, s, o);
  return Object.assign(t, e), t;
}, Qt = (n) => n ? $e(n) : $e;
function es() {
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
const te = [], fe = [], ot = 50, v = Qt((n, e) => ({
  // Initial state
  project: es(),
  mode: "select",
  tool: "camera",
  sideTab: "cameras",
  bottomTab: "timeline",
  selectedCameraId: null,
  selectedObjectId: null,
  selectedActorId: null,
  pendingObjectType: null,
  showGrid: !0,
  showAxes: !0,
  showFovCones: !0,
  // --- Camera actions ---
  addCamera: (t) => n((s) => (Y(s.project), {
    project: {
      ...s.project,
      cameras: [...s.project.cameras, t]
    }
  })),
  updateCamera: (t, s) => n((o) => (Y(o.project), {
    project: {
      ...o.project,
      cameras: o.project.cameras.map(
        (r) => r.id === t ? { ...r, ...s } : r
      )
    }
  })),
  deleteCamera: (t) => n((s) => (Y(s.project), {
    project: {
      ...s.project,
      cameras: s.project.cameras.filter((o) => o.id !== t)
    },
    selectedCameraId: s.selectedCameraId === t ? null : s.selectedCameraId
  })),
  selectCamera: (t) => n({ selectedCameraId: t, selectedObjectId: null }),
  setCameraMovement: (t, s) => n((o) => ({
    project: {
      ...o.project,
      cameras: o.project.cameras.map(
        (r) => r.id === t ? { ...r, movement: s } : r
      )
    }
  })),
  setCameraTransform: (t, s, o) => n((r) => ({
    project: {
      ...r.project,
      cameras: r.project.cameras.map(
        (l) => l.id === t ? { ...l, position: s, rotation: o } : l
      )
    }
  })),
  // --- Object actions ---
  addObject: (t) => n((s) => (Y(s.project), {
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: [...s.project.scene.objects, t]
      }
    }
  })),
  updateObject: (t, s) => n((o) => ({
    project: {
      ...o.project,
      scene: {
        ...o.project.scene,
        objects: o.project.scene.objects.map(
          (r) => r.id === t ? { ...r, ...s } : r
        )
      }
    }
  })),
  deleteObject: (t) => n((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: s.project.scene.objects.filter((o) => o.id !== t)
      }
    },
    selectedObjectId: s.selectedObjectId === t ? null : s.selectedObjectId
  })),
  selectObject: (t) => n({
    selectedObjectId: t,
    selectedCameraId: null,
    selectedActorId: null
  }),
  setPendingObjectType: (t) => n({ pendingObjectType: t }),
  // --- Scene actions ---
  setSceneConfig: (t) => n((s) => ({
    project: {
      ...s.project,
      scene: { ...s.project.scene, ...t }
    }
  })),
  setLighting: (t) => n((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        lighting: { ...s.project.scene.lighting, ...t }
      }
    }
  })),
  // --- Actor actions ---
  addActor: (t) => n((s) => (Y(s.project), {
    project: { ...s.project, actors: [...s.project.actors, t] }
  })),
  updateActor: (t, s) => n((o) => (Y(o.project), {
    project: {
      ...o.project,
      actors: o.project.actors.map((r) => r.id === t ? { ...r, ...s } : r)
    }
  })),
  deleteActor: (t) => n((s) => (Y(s.project), {
    project: {
      ...s.project,
      actors: s.project.actors.filter((o) => o.id !== t)
    },
    selectedActorId: s.selectedActorId === t ? null : s.selectedActorId
  })),
  selectActor: (t) => n({ selectedActorId: t, selectedCameraId: null, selectedObjectId: null }),
  addActorKeyframe: (t, s) => n((o) => (Y(o.project), {
    project: {
      ...o.project,
      actors: o.project.actors.map(
        (r) => r.id === t ? { ...r, keyframes: [...r.keyframes, s].sort((l, c) => l.time - c.time) } : r
      )
    }
  })),
  updateActorKeyframe: (t, s, o) => n((r) => (Y(r.project), {
    project: {
      ...r.project,
      actors: r.project.actors.map(
        (l) => l.id === t ? {
          ...l,
          keyframes: l.keyframes.map(
            (c) => c.id === s ? { ...c, ...o } : c
          ).sort((c, d) => c.time - d.time)
        } : l
      )
    }
  })),
  removeActorKeyframe: (t, s) => n((o) => (Y(o.project), {
    project: {
      ...o.project,
      actors: o.project.actors.map(
        (r) => r.id === t ? { ...r, keyframes: r.keyframes.filter((l) => l.id !== s) } : r
      )
    }
  })),
  setActorPosition: (t, s) => n((o) => ({
    project: {
      ...o.project,
      actors: o.project.actors.map((r) => r.id === t ? { ...r, position: s } : r)
    }
  })),
  snapshot: () => {
    Y(e().project);
  },
  // --- Path actions ---
  setPath: (t) => n((s) => (Y(s.project), { project: { ...s.project, path: t } })),
  addPathPoint: (t) => n((s) => (Y(s.project), { project: { ...s.project, path: [...s.project.path, t] } })),
  removePathPoint: (t) => n((s) => (Y(s.project), { project: { ...s.project, path: s.project.path.filter((o) => o.id !== t) } })),
  // --- Timeline actions ---
  setTimelineTime: (t) => n((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, currentTime: t }
    }
  })),
  setTimelinePlaying: (t) => n((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, playing: t }
    }
  })),
  // --- Storyboard actions ---
  setStoryboardGrid: (t) => n((s) => ({
    project: {
      ...s.project,
      storyboard: { ...s.project.storyboard, grid: t }
    }
  })),
  setStoryboardCell: (t, s) => n((o) => {
    const r = [...o.project.storyboard.cells], l = r.findIndex((c) => c.index === t);
    return l >= 0 ? r[l] = { ...r[l], cameraId: s ?? void 0 } : r.push({ index: t, cameraId: s ?? void 0 }), {
      project: {
        ...o.project,
        storyboard: { ...o.project.storyboard, cells: r }
      }
    };
  }),
  // --- Editor actions ---
  setMode: (t) => n({ mode: t }),
  setTool: (t) => n({ tool: t }),
  setSideTab: (t) => n({ sideTab: t }),
  setBottomTab: (t) => n({ bottomTab: t }),
  toggleGrid: () => n((t) => ({ showGrid: !t.showGrid })),
  toggleAxes: () => n((t) => ({ showAxes: !t.showAxes })),
  toggleFovCones: () => n((t) => ({ showFovCones: !t.showFovCones })),
  // --- Project actions ---
  loadProject: (t) => n({
    project: t,
    selectedCameraId: null,
    selectedObjectId: null,
    selectedActorId: null
  }),
  getProjectData: () => e().project,
  // --- Undo/Redo ---
  undo: () => {
    if (te.length === 0) return;
    const t = te.pop();
    fe.push(structuredClone(e().project)), n({ project: t });
  },
  redo: () => {
    if (fe.length === 0) return;
    const t = fe.pop();
    te.push(structuredClone(e().project)), te.length > ot && te.shift(), n({ project: t });
  }
}));
function Y(n) {
  te.push(structuredClone(n)), te.length > ot && te.shift(), fe.length = 0;
}
const ts = "_cameraPlanner_9pj73_5", ss = "_cpMain_9pj73_20", os = "_cpViewportWrapper_9pj73_26", ns = "_cpViewportInner_9pj73_32", is = "_cameraPlannerViewport_9pj73_39", rs = "_cpToolbar_9pj73_51", as = "_cpVfWindow_9pj73_63", cs = "_cpVfToolbar_9pj73_78", ls = "_cpVfTitle_9pj73_90", ps = "_cpVfModes_9pj73_97", hs = "_cpVfModeBtn_9pj73_102", ds = "_active_9pj73_119", us = "_cpVfCanvas_9pj73_125", ms = "_cpVfInfo_9pj73_132", fs = "_cpToolbarGroup_9pj73_146", _s = "_cpToolbarLabel_9pj73_152", gs = "_cpToolbarBtn_9pj73_160", ys = "_cpToolbarSep_9pj73_186", bs = "_cpToolbarSpacer_9pj73_193", js = "_cpToolbarExport_9pj73_197", xs = "_cpIcon_9pj73_212", vs = "_cpIconLg_9pj73_217", Cs = "_cpIconXl_9pj73_222", Ss = "_cpSidebar_9pj73_229", Ts = "_cpSidebarTabs_9pj73_239", ws = "_cpTabBtn_9pj73_245", Ps = "_cpTabLabel_9pj73_271", Es = "_cpSidebarContent_9pj73_275", Ns = "_cpCameraListHeader_9pj73_283", Ms = "_cpCameraListItems_9pj73_292", Os = "_cpCameraItem_9pj73_298", As = "_selected_9pj73_313", ks = "_cpCameraColor_9pj73_318", Is = "_cpCameraInfo_9pj73_325", Ds = "_cpCameraName_9pj73_330", Rs = "_cpCameraMeta_9pj73_336", Ls = "_cpCameraDelete_9pj73_342", Gs = "_cpPaletteHeader_9pj73_369", zs = "_cpTemplatesHeader_9pj73_370", Vs = "_cpPaletteHint_9pj73_376", Bs = "_cpPaletteGrid_9pj73_387", Fs = "_cpPaletteItem_9pj73_393", Hs = "_cpPaletteLabel_9pj73_416", Ks = "_cpTemplatesGrid_9pj73_427", $s = "_cpTemplateCard_9pj73_433", Us = "_cpTemplateName_9pj73_451", Ys = "_cpTemplateEn_9pj73_457", Ws = "_cpTemplateCount_9pj73_462", Zs = "_cpPropertyPanel_9pj73_473", Xs = "_cpPanelSection_9pj73_482", qs = "_cpSectionTitle_9pj73_486", Js = "_cpField_9pj73_497", Qs = "_cpFieldValue_9pj73_543", eo = "_cpFieldRow_9pj73_551", to = "_cpCalcRow_9pj73_555", so = "_cpCalcValue_9pj73_563", oo = "_cpMono_9pj73_568", no = "_cpBottomPanel_9pj73_575", io = "_cpBottomTabs_9pj73_584", ro = "_cpBottomContent_9pj73_597", ao = "_cpTimeline_9pj73_605", co = "_cpTimelineControls_9pj73_611", lo = "_cpPlayBtn_9pj73_617", po = "_cpTimelineBtn_9pj73_637", ho = "_cpTimelineTime_9pj73_656", uo = "_cpTimelineTrack_9pj73_662", mo = "_cpTimelineSlider_9pj73_666", fo = "_cpTimelineMarkers_9pj73_671", _o = "_cpTimelineMark_9pj73_671", go = "_cpStoryboard_9pj73_686", yo = "_cpStoryboardHeader_9pj73_692", bo = "_cpStoryboardToggle_9pj73_701", jo = "_cpStoryboardGrid_9pj73_706", xo = "_cpStoryboardCell_9pj73_712", vo = "_hasCamera_9pj73_731", Co = "_cpCellNumber_9pj73_736", So = "_cpCellCamera_9pj73_744", To = "_cpCellCamName_9pj73_748", wo = "_cpCellCamMeta_9pj73_754", Po = "_cpCellEmpty_9pj73_759", Eo = "_cpKeyframesHeader_9pj73_771", No = "_cpKeyframesList_9pj73_777", Mo = "_cpKeyframeItem_9pj73_783", Oo = "_cpKfIndex_9pj73_793", Ao = "_cpKfPos_9pj73_798", ko = "_cpKfTime_9pj73_803", Io = "_cpPlaceholder_9pj73_809", Do = "_cpEmpty_9pj73_822", Ro = "_cpBtnSm_9pj73_829", Lo = "_cpBtn_9pj73_829", Go = "_cpBtnPrimary_9pj73_866", zo = "_cpDialogOverlay_9pj73_879", Vo = "_cpDialog_9pj73_879", Bo = "_cpDialogHeader_9pj73_903", Fo = "_cpDialogClose_9pj73_913", Ho = "_cpDialogTabs_9pj73_932", Ko = "_cpDialogBody_9pj73_938", $o = "_cpDialogActions_9pj73_943", Uo = "_cpExportInfo_9pj73_950", Yo = "_cpExportJson_9pj73_961", Wo = "_cpPropsSection_9pj73_997", Zo = "_cpLabel_9pj73_1004", Xo = "_cpInput_9pj73_1011", qo = "_cpSelect_9pj73_1026", Jo = "_cpActorProps_9pj73_1038", Qo = "_cpKeyframeSection_9pj73_1046", en = "_cpKeyframeList_9pj73_1052", tn = "_cpKfAction_9pj73_1060", sn = "_cpKfLabel_9pj73_1072", a = {
  cameraPlanner: ts,
  cpMain: ss,
  cpViewportWrapper: os,
  cpViewportInner: ns,
  cameraPlannerViewport: is,
  cpToolbar: rs,
  cpVfWindow: as,
  cpVfToolbar: cs,
  cpVfTitle: ls,
  cpVfModes: ps,
  cpVfModeBtn: hs,
  active: ds,
  cpVfCanvas: us,
  cpVfInfo: ms,
  cpToolbarGroup: fs,
  cpToolbarLabel: _s,
  cpToolbarBtn: gs,
  cpToolbarSep: ys,
  cpToolbarSpacer: bs,
  cpToolbarExport: js,
  cpIcon: xs,
  cpIconLg: vs,
  cpIconXl: Cs,
  cpSidebar: Ss,
  cpSidebarTabs: Ts,
  cpTabBtn: ws,
  cpTabLabel: Ps,
  cpSidebarContent: Es,
  cpCameraListHeader: Ns,
  cpCameraListItems: Ms,
  cpCameraItem: Os,
  selected: As,
  cpCameraColor: ks,
  cpCameraInfo: Is,
  cpCameraName: Ds,
  cpCameraMeta: Rs,
  cpCameraDelete: Ls,
  cpPaletteHeader: Gs,
  cpTemplatesHeader: zs,
  cpPaletteHint: Vs,
  cpPaletteGrid: Bs,
  cpPaletteItem: Fs,
  cpPaletteLabel: Hs,
  cpTemplatesGrid: Ks,
  cpTemplateCard: $s,
  cpTemplateName: Us,
  cpTemplateEn: Ys,
  cpTemplateCount: Ws,
  cpPropertyPanel: Zs,
  cpPanelSection: Xs,
  cpSectionTitle: qs,
  cpField: Js,
  cpFieldValue: Qs,
  cpFieldRow: eo,
  cpCalcRow: to,
  cpCalcValue: so,
  cpMono: oo,
  cpBottomPanel: no,
  cpBottomTabs: io,
  cpBottomContent: ro,
  cpTimeline: ao,
  cpTimelineControls: co,
  cpPlayBtn: lo,
  cpTimelineBtn: po,
  cpTimelineTime: ho,
  cpTimelineTrack: uo,
  cpTimelineSlider: mo,
  cpTimelineMarkers: fo,
  cpTimelineMark: _o,
  cpStoryboard: go,
  cpStoryboardHeader: yo,
  cpStoryboardToggle: bo,
  cpStoryboardGrid: jo,
  cpStoryboardCell: xo,
  hasCamera: vo,
  cpCellNumber: Co,
  cpCellCamera: So,
  cpCellCamName: To,
  cpCellCamMeta: wo,
  cpCellEmpty: Po,
  cpKeyframesHeader: Eo,
  cpKeyframesList: No,
  cpKeyframeItem: Mo,
  cpKfIndex: Oo,
  cpKfPos: Ao,
  cpKfTime: ko,
  cpPlaceholder: Io,
  cpEmpty: Do,
  cpBtnSm: Ro,
  cpBtn: Lo,
  cpBtnPrimary: Go,
  cpDialogOverlay: zo,
  cpDialog: Vo,
  cpDialogHeader: Bo,
  cpDialogClose: Fo,
  cpDialogTabs: Ho,
  cpDialogBody: Ko,
  cpDialogActions: $o,
  cpExportInfo: Uo,
  cpExportJson: Yo,
  cpPropsSection: Wo,
  cpLabel: Zo,
  cpInput: Xo,
  cpSelect: qo,
  cpActorProps: Jo,
  cpKeyframeSection: Qo,
  cpKeyframeList: en,
  cpKfAction: tn,
  cpKfLabel: sn
}, Ue = [
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
];
function on(n) {
  switch (n) {
    case "box":
    case "sphere":
    case "cone":
    case "cylinder":
      return 0.5;
    case "torus":
      return 0.15;
    case "plane":
      return 0.01;
    case "prop":
      return 0.15;
    default:
      return 0;
  }
}
const nn = () => {
  var l;
  const n = v((c) => c.pendingObjectType), e = v((c) => c.setPendingObjectType), t = v((c) => c.setTool), s = v((c) => c.setMode), o = (c) => {
    e(c), t("object"), s("place");
  }, r = (l = Ue.find((c) => c.type === n)) == null ? void 0 : l.label;
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpObjectPalette, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpPaletteHeader, children: "物体库" }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpPaletteHint, children: n ? `已选「${r}」→ 在场景地面点击放置` : "先点选类型，再在场景地面点击放置" }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpPaletteGrid, children: Ue.map((c) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: `${a.cpPaletteItem} ${n === c.type ? a.active : ""}`,
        onClick: () => o(c.type),
        title: c.label,
        children: [
          /* @__PURE__ */ i.jsx("span", { className: a.cpIconLg, children: c.icon }),
          /* @__PURE__ */ i.jsx("span", { className: a.cpPaletteLabel, children: c.label })
        ]
      },
      c.type
    )) })
  ] });
};
function rn(n, e) {
  const t = e.getMeshGroup(n.id);
  return t ? {
    ...n,
    position: {
      x: t.position.x,
      y: t.position.y,
      z: t.position.z
    },
    rotation: {
      pitch: xe(t.rotation.x),
      yaw: xe(t.rotation.y),
      roll: xe(t.rotation.z)
    }
  } : n;
}
const an = ({
  scene: n,
  cameraRig: e,
  actorRig: t,
  pathSystem: s
}) => {
  const o = ee(null), r = ee(null), l = ee("rgb"), [c, d] = oe("rgb"), [f, u] = oe("未选择机位");
  return l.current = c, Q(() => {
    const p = o.current;
    if (!p) return;
    const g = new zt(n.scene, p);
    r.current = g;
    const h = () => {
      const x = [
        ...n.getHelperObjects(),
        ...e.getAllMeshGroups(),
        ...s.getVisualObjects(),
        ...t.getHelperObjects()
      ];
      return Array.from(new Set(x));
    }, j = n.onFrame(() => {
      const x = v.getState(), { cameras: C, actors: y, timeline: w } = x.project, I = x.selectedCameraId ? C.find((A) => A.id === x.selectedCameraId) ?? null : null, D = I ? rn(I, e) : null;
      let F = null;
      const E = y[0];
      if (E) {
        const A = Qe(E.keyframes, w.currentTime);
        F = (A == null ? void 0 : A.position) ?? E.position;
      }
      g.setMode(l.current);
      const M = g.render({
        selectedCamera: D,
        helpers: h(),
        actorPosition: F
      });
      u((A) => A === M ? A : M);
    });
    return () => {
      j(), g.dispose(), r.current = null;
    };
  }, [n, e, t, s]), /* @__PURE__ */ i.jsxs("div", { className: a.cpVfWindow, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpVfToolbar, children: [
      /* @__PURE__ */ i.jsx("span", { className: a.cpVfTitle, children: "📷 取景监视器" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpVfModes, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `${a.cpVfModeBtn} ${c === "rgb" ? a.active : ""}`,
            onClick: () => d("rgb"),
            children: "彩图"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `${a.cpVfModeBtn} ${c === "depth" ? a.active : ""}`,
            onClick: () => d("depth"),
            children: "深度"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("canvas", { ref: o, className: a.cpVfCanvas, width: 256, height: 144 }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpVfInfo, children: f })
  ] });
}, cn = ({ outputManager: n }) => {
  const e = ee(null), t = ee(null), s = ee(null), [o, r] = oe(!1), l = v;
  Q(() => {
    const y = e.current;
    if (!y) return;
    const w = new Pt({
      container: y,
      antialias: !0,
      shadows: !0,
      showGrid: !0,
      showAxes: !0
    }), I = new Mt(w.scene), D = new Ot(w.scene), F = new kt(w.scene), E = new It(w.scene), M = new Dt(w.camera, w.scene), A = new Gt(w.scene);
    return M.setCameraGroups(I.getAllMeshGroups()), M.setObjectMeshes(D.getAllMeshes()), M.setActorGroups(A.getAllMeshGroups()), M.enable(w.getCanvas()), n.setPNGExporter(() => w.exportPNGBlob()), M.onPick((P) => {
      const R = l.getState(), se = R.tool;
      if (se === "object" && R.pendingObjectType && P.target === "ground" && P.groundPoint) {
        const H = R.pendingObjectType, K = {
          id: Z(),
          type: H,
          position: {
            x: P.groundPoint.x,
            y: on(H),
            z: P.groundPoint.z
          },
          rotation: {
            yaw: 0,
            pitch: H === "plane" ? -90 : 0,
            roll: 0
          },
          scale: { x: 1, y: 1, z: 1 },
          color: 8947848
        };
        R.addObject(K), R.selectObject(K.id), n.emit("object:add", K.id);
        return;
      }
      if (se === "path" && P.target === "ground" && P.groundPoint) {
        const H = R.selectedCameraId, K = R.selectedActorId;
        if (K) {
          const X = R.project.actors.find((W) => W.id === K);
          X && R.addActorKeyframe(K, {
            id: Z(),
            time: R.project.timeline.currentTime,
            position: { x: P.groundPoint.x, y: 0, z: P.groundPoint.z },
            rotation: { ...X.rotation },
            action: "stand"
          });
        } else if (H) {
          const X = R.project.cameras.find((S) => S.id === H), W = R.project.timeline.duration, b = W > 0 ? R.project.timeline.currentTime / W : 0;
          R.addPathPoint({
            id: Z(),
            position: { x: P.groundPoint.x, y: 1.6, z: P.groundPoint.z },
            rotation: X ? { ...X.rotation } : { yaw: 0, pitch: 0, roll: 0 },
            cameraId: H,
            t: b
          });
        }
        return;
      }
      if (P.target === "camera" && P.id)
        l.getState().selectCamera(P.id), n.emit("camera:select", P.id);
      else if (P.target === "object" && P.id)
        l.getState().selectObject(P.id);
      else if (P.target === "actor" && P.id) {
        if (!s.current || s.current.id !== P.id)
          s.current = { id: P.id, historyPushed: !1 }, l.getState().selectActor(P.id);
        else if (P.groundPoint) {
          const H = l.getState().project.actors.find((K) => K.id === P.id);
          if (H) {
            const K = P.groundPoint.x - H.position.x, X = P.groundPoint.z - H.position.z;
            (Math.abs(K) > 0.01 || Math.abs(X) > 0.01) && (s.current.historyPushed || (l.getState().snapshot(), s.current.historyPushed = !0), l.getState().setActorPosition(P.id, {
              x: P.groundPoint.x,
              y: 0,
              z: P.groundPoint.z
            }));
          }
        }
      } else
        s.current = null;
    }), w.start(), t.current = {
      scene: w,
      cameraRig: I,
      objectLib: D,
      lightSystem: F,
      pathSystem: E,
      rayPicker: M,
      actorRig: A
    }, r(!0), () => {
      r(!1), w.dispose(), t.current = null;
    };
  }, [n]);
  const c = l((y) => y.project), d = l((y) => y.selectedCameraId), f = l((y) => y.selectedActorId);
  Q(() => {
    const y = t.current;
    if (!y) return;
    const w = c.cameras, I = y.cameraRig.getAllCameras(), D = new Set(I.map((b) => b.id)), F = new Set(w.map((b) => b.id));
    for (const b of w)
      D.has(b.id) || y.cameraRig.addCamera(b);
    for (const b of D)
      F.has(b) || y.cameraRig.deleteCamera(b);
    for (const b of w) {
      const S = y.cameraRig.getCamera(b.id);
      if (!S) continue;
      const pe = S.focal !== b.focal || S.sensorW !== b.sensorW || S.sensorH !== b.sensorH || S.fstop !== b.fstop || S.focusDist !== b.focusDist, he = S.position.x !== b.position.x || S.position.y !== b.position.y || S.position.z !== b.position.z || S.rotation.yaw !== b.rotation.yaw || S.rotation.pitch !== b.rotation.pitch || S.rotation.roll !== b.rotation.roll;
      pe ? y.cameraRig.updateCamera(b.id, b) : he && (y.cameraRig.setCameraPosition(b.id, b.position), y.cameraRig.setCameraRotation(b.id, b.rotation));
    }
    y.cameraRig.selectCamera(d);
    const E = c.actors, M = y.actorRig.getAllActors(), A = new Set(M.map((b) => b.id)), P = new Set(E.map((b) => b.id));
    let R = !1;
    for (const b of E)
      if (!A.has(b.id))
        y.actorRig.addActor(b), R = !0;
      else {
        const S = y.actorRig.getActor(b.id);
        S && (S.name !== b.name || S.role !== b.role || S.height !== b.height || S.color !== b.color || S.position.x !== b.position.x || S.position.y !== b.position.y || S.position.z !== b.position.z || S.rotation.yaw !== b.rotation.yaw || S.keyframes.length !== b.keyframes.length) && (y.actorRig.updateActor(b.id, b), R = !0);
      }
    for (const b of A)
      P.has(b) || (y.actorRig.deleteActor(b), R = !0);
    R && y.rayPicker.setActorGroups(y.actorRig.getAllMeshGroups()), y.actorRig.selectActor(f);
    const se = c.scene.objects, H = y.objectLib.getAllObjects(), K = new Set(H.map((b) => b.id)), X = new Set(se.map((b) => b.id));
    let W = !1;
    for (const b of se)
      if (!K.has(b.id))
        y.objectLib.addObject(b), W = !0;
      else {
        const S = y.objectLib.getObject(b.id);
        S && (S.type !== b.type || S.color !== b.color || S.position.x !== b.position.x || S.position.y !== b.position.y || S.position.z !== b.position.z || S.rotation.yaw !== b.rotation.yaw || S.rotation.pitch !== b.rotation.pitch || S.rotation.roll !== b.rotation.roll || S.scale.x !== b.scale.x || S.scale.y !== b.scale.y || S.scale.z !== b.scale.z) && (y.objectLib.updateObject(b.id, b), W = !0);
      }
    for (const b of K)
      X.has(b) || (y.objectLib.deleteObject(b), W = !0);
    W && y.rayPicker.setObjectMeshes(y.objectLib.getAllMeshes()), y.pathSystem.importKeyframes(c.path, d), y.lightSystem.update(c.scene.lighting);
  }, [c.cameras, c.actors, c.path, c.scene.objects, c.scene.lighting, d, f]);
  const u = l((y) => y.showGrid), p = l((y) => y.showAxes);
  Q(() => {
    var y;
    (y = t.current) == null || y.scene.setGridVisible(u);
  }, [u]), Q(() => {
    var y;
    (y = t.current) == null || y.scene.setAxesVisible(p);
  }, [p]);
  const g = l((y) => y.project.timeline.currentTime), h = l((y) => y.project.timeline.duration), j = l((y) => y.project.path);
  Q(() => {
    const y = t.current;
    if (!y) return;
    y.actorRig.updatePlayback(g);
    const w = h > 0 ? g / h : 0;
    y.cameraRig.updatePlayback(j, w);
    const I = l.getState().project.cameras, D = l.getState().setCameraTransform;
    for (const F of I) {
      const E = et(j, F.id, w);
      E && D(F.id, E.position, E.rotation);
    }
  }, [g, h, j]);
  const x = l((y) => y.tool), C = t.current;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: a.cpViewportInner,
      style: {
        width: "100%",
        height: "100%",
        minHeight: "400px",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: e,
            className: a.cameraPlannerViewport,
            style: {
              width: "100%",
              height: "100%",
              cursor: x === "path" || x === "object" ? "crosshair" : "default"
            }
          }
        ),
        o && C && /* @__PURE__ */ i.jsx(
          an,
          {
            scene: C.scene,
            cameraRig: C.cameraRig,
            actorRig: C.actorRig,
            pathSystem: C.pathSystem
          }
        )
      ]
    }
  );
}, ln = [
  { value: "select", label: "选择", icon: "↖" },
  { value: "place", label: "放置", icon: "⊕" },
  { value: "move", label: "移动", icon: "✥" },
  { value: "rotate", label: "旋转", icon: "↻" }
], pn = [
  { value: "camera", label: "摄像机", icon: "📷" },
  { value: "object", label: "物体", icon: "📦" },
  { value: "light", label: "灯光", icon: "💡" },
  { value: "path", label: "路径", icon: "〰" }
], hn = ({ onExport: n }) => {
  const e = v((p) => p.mode), t = v((p) => p.tool), s = v((p) => p.showGrid), o = v((p) => p.showAxes), r = v((p) => p.setMode), l = v((p) => p.setTool), c = v((p) => p.toggleGrid), d = v((p) => p.toggleAxes), f = v((p) => p.undo), u = v((p) => p.redo);
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbar, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx("span", { className: a.cpToolbarLabel, children: "模式" }),
      ln.map((p) => /* @__PURE__ */ i.jsx(
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
      pn.map((p) => /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${t === p.value ? a.active : ""}`,
          onClick: () => l(p.value),
          title: p.label,
          children: /* @__PURE__ */ i.jsx("span", { className: a.cpIcon, children: p.icon })
        },
        p.value
      ))
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx("button", { className: a.cpToolbarBtn, onClick: f, title: "撤销 (Ctrl+Z)", children: "↩" }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpToolbarBtn, onClick: u, title: "重做 (Ctrl+Y)", children: "↪" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSep }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpToolbarGroup, children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${s ? a.active : ""}`,
          onClick: c,
          title: "网格",
          children: "#"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${a.cpToolbarBtn} ${o ? a.active : ""}`,
          onClick: d,
          title: "坐标轴",
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpToolbarSpacer }),
    n && /* @__PURE__ */ i.jsx("button", { className: [a.cpToolbarBtn, a.cpToolbarExport].join(" "), onClick: n, children: "导出" })
  ] });
}, dn = () => {
  const n = v((c) => c.project.cameras), e = v((c) => c.selectedCameraId), t = v((c) => c.selectCamera), s = v((c) => c.addCamera), o = v((c) => c.deleteCamera), r = () => {
    const c = Me[0], d = 50, f = _e(c.h, d), u = Pe(d, 2.8, 5, c.h), p = {
      id: Z(),
      name: `CAM-${n.length + 1}`,
      focal: d,
      sensorW: c.w,
      sensorH: c.h,
      fstop: 2.8,
      focusDist: 5,
      height: 1.6,
      position: { x: Math.random() * 4 - 2, y: 1.6, z: Math.random() * 4 - 2 },
      rotation: { yaw: Math.random() * 360 - 180, pitch: 0, roll: 0 },
      fov: f,
      dof: u,
      color: 8160255
    };
    s(p), G.emit("camera:add", p), t(p.id);
  }, l = (c) => {
    o(c), G.emit("camera:delete", c);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraList, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListHeader, children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        "摄像机 (",
        n.length,
        ")"
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpBtnSm, onClick: r, children: "+ 添加" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListItems, children: [
      n.length === 0 && /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: '暂无摄像机，点击"添加"创建' }),
      n.map((c) => /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: `${a.cpCameraItem} ${e === c.id ? a.selected : ""}`,
          onClick: () => t(c.id),
          children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: a.cpCameraColor,
                style: { backgroundColor: `#${c.color.toString(16).padStart(6, "0")}` }
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraInfo, children: [
              /* @__PURE__ */ i.jsx("div", { className: a.cpCameraName, children: c.name }),
              /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraMeta, children: [
                c.focal,
                "mm · f/",
                c.fstop,
                " · FOV ",
                c.fov.toFixed(1),
                "°"
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: a.cpCameraDelete,
                onClick: (d) => {
                  d.stopPropagation(), l(c.id);
                },
                title: "删除",
                children: "×"
              }
            )
          ]
        },
        c.id
      ))
    ] })
  ] });
};
function L(n, e, t, s, o = 1, r = 1, l = 1, c = 8947848) {
  return {
    type: n,
    position: { x: e, y: t, z: s },
    rotation: { yaw: 0, pitch: 0, roll: 0 },
    scale: { x: o, y: r, z: l },
    color: c
  };
}
const un = [
  {
    template: "studio",
    label: "摄影棚",
    labelEn: "Studio",
    icon: "🎬",
    objects: [
      L("plane", 0, 0, 0, 20, 1, 20, 2763306),
      L("box", -6, 1.5, -8, 3, 3, 0.3, 3355443),
      // backdrop
      L("cylinder", -3, 0.5, 0, 0.3, 1, 0.3, 4473924),
      // light stand
      L("cylinder", 3, 0.5, 0, 0.3, 1, 0.3, 4473924)
      // light stand
    ]
  },
  {
    template: "living_room",
    label: "客厅",
    labelEn: "Living Room",
    icon: "🛋️",
    objects: [
      L("plane", 0, 0, 0, 12, 1, 10, 9139029),
      // floor
      L("box", 0, 0.4, -4, 4, 0.8, 1, 6636321),
      // sofa
      L("box", 0, 0.25, 0, 2, 0.5, 1.2, 4863784),
      // coffee table
      L("box", -5, 1, -4.5, 0.3, 2, 3, 5592405),
      // bookshelf
      L("box", 5, 0.5, -4.5, 2, 1, 0.5, 3355443)
      // TV stand
    ]
  },
  {
    template: "street",
    label: "街道",
    labelEn: "Street",
    icon: "🏙️",
    objects: [
      L("plane", 0, 0, 0, 8, 1, 30, 3815994),
      // road
      L("building", -6, 4, -5, 4, 8, 6, 6710886),
      L("building", 6, 3, -5, 4, 6, 6, 7829367),
      L("building", -6, 5, 10, 4, 10, 6, 5592405),
      L("tree", 4, 2, 5, 1, 4, 1, 2972199),
      L("tree", -4, 2, 12, 1, 4, 1, 2972199)
    ]
  },
  {
    template: "cafe",
    label: "咖啡馆",
    labelEn: "Cafe",
    icon: "☕",
    objects: [
      L("plane", 0, 0, 0, 10, 1, 8, 9139029),
      L("cylinder", -2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      L("cylinder", 2, 0.35, -1, 0.4, 0.7, 0.4, 9127187),
      // table
      L("cylinder", 0, 0.35, 2, 0.5, 0.7, 0.5, 9127187),
      // round table
      L("box", -4, 1, -3.5, 2, 2, 0.5, 6636321),
      // bar counter
      L("box", 4, 1.2, -3.5, 0.3, 2.4, 2, 4473924)
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
], mn = () => {
  const n = v((t) => t.setSceneConfig), e = (t) => {
    const s = t.objects.map((o) => ({
      ...o,
      id: Z()
    }));
    n({
      template: t.template,
      objects: s
    }), G.emit("scene:change", {
      template: t.template,
      objects: s,
      lighting: v.getState().project.scene.lighting
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpSceneTemplates, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpTemplatesHeader, children: "场景模板" }),
    /* @__PURE__ */ i.jsx("div", { className: a.cpTemplatesGrid, children: un.map((t) => /* @__PURE__ */ i.jsxs(
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
}, Ye = {
  principal: "主角",
  supporting: "配角",
  extra: "群众"
}, fn = {
  stand: "站立",
  walk: "行走",
  run: "奔跑",
  sit: "坐",
  turn: "转身",
  gesture: "手势",
  leave: "离场"
}, We = [5164484, 16739125, 10181046, 3066993, 15158332, 15965202], _n = () => {
  const n = v((h) => h.project.actors), e = v((h) => h.selectedActorId), t = v((h) => h.selectActor), s = v((h) => h.addActor), o = v((h) => h.deleteActor), r = v((h) => h.updateActor), l = v((h) => h.addActorKeyframe), c = v((h) => h.removeActorKeyframe), d = v((h) => h.updateActorKeyframe), f = v((h) => h.project.timeline.currentTime), u = n.find((h) => h.id === e), p = () => {
    const h = n.length % We.length, j = {
      id: Z(),
      name: `角色${n.length + 1}`,
      role: "principal",
      position: { x: Math.random() * 4 - 2, y: 0, z: Math.random() * 4 - 2 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      height: 1.7,
      color: We[h],
      keyframes: []
    };
    s(j), t(j.id);
  }, g = () => {
    if (!u) return;
    const h = Qe(u.keyframes, f);
    l(u.id, {
      id: Z(),
      time: f,
      position: (h == null ? void 0 : h.position) ?? { ...u.position },
      rotation: (h == null ? void 0 : h.rotation) ?? { ...u.rotation },
      action: (h == null ? void 0 : h.action) ?? "stand"
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraList, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListHeader, children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        "角色 (",
        n.length,
        ")"
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: a.cpBtnSm, onClick: p, children: "+ 添加" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListItems, children: [
      n.length === 0 && /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: '暂无角色，点击"添加"创建' }),
      n.map((h) => /* @__PURE__ */ i.jsxs(
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
                Ye[h.role],
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
                onClick: (j) => {
                  j.stopPropagation(), o(h.id);
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
    u && /* @__PURE__ */ i.jsxs("div", { className: a.cpActorProps, children: [
      /* @__PURE__ */ i.jsxs("div", { className: a.cpPropsSection, children: [
        /* @__PURE__ */ i.jsx("label", { className: a.cpLabel, children: "名称" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            className: a.cpInput,
            type: "text",
            value: u.name,
            onChange: (h) => r(u.id, { name: h.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpPropsSection, children: [
        /* @__PURE__ */ i.jsx("label", { className: a.cpLabel, children: "类型" }),
        /* @__PURE__ */ i.jsx(
          "select",
          {
            className: a.cpSelect,
            value: u.role,
            onChange: (h) => r(u.id, { role: h.target.value }),
            children: Object.entries(Ye).map(([h, j]) => /* @__PURE__ */ i.jsx("option", { value: h, children: j }, h))
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
            value: u.height,
            onChange: (h) => r(u.id, { height: parseFloat(h.target.value) || 1.7 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeSection, children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpCameraListHeader, children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            "运动关键帧 (",
            u.keyframes.length,
            ")"
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: a.cpBtnSm, onClick: g, children: "+ 关键帧" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeList, children: [
          u.keyframes.map((h, j) => /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeItem, children: [
            /* @__PURE__ */ i.jsx("span", { className: a.cpKfIndex, children: j + 1 }),
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
                  onChange: (x) => d(
                    u.id,
                    h.id,
                    { time: parseFloat(x.target.value) || 0 }
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
                  onChange: (x) => d(
                    u.id,
                    h.id,
                    { position: { ...h.position, x: parseFloat(x.target.value) || 0 } }
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
                  onChange: (x) => d(
                    u.id,
                    h.id,
                    { position: { ...h.position, z: parseFloat(x.target.value) || 0 } }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(
              "select",
              {
                className: a.cpKfAction,
                value: h.action,
                onChange: (x) => d(
                  u.id,
                  h.id,
                  { action: x.target.value }
                ),
                children: Object.entries(fn).map(([x, C]) => /* @__PURE__ */ i.jsx("option", { value: x, children: C }, x))
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: a.cpCameraDelete,
                onClick: () => c(u.id, h.id),
                title: "删除关键帧",
                children: "×"
              }
            )
          ] }, h.id)),
          u.keyframes.length === 0 && /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: '暂无关键帧。移动时间线到目标时间，点击"关键帧"添加。' })
        ] })
      ] })
    ] })
  ] });
}, gn = [
  { value: "cameras", label: "机位", icon: "📷" },
  { value: "objects", label: "物体", icon: "📦" },
  { value: "templates", label: "场景", icon: "🏠" },
  { value: "characters", label: "角色", icon: "👤" }
], yn = () => {
  const n = v((t) => t.sideTab), e = v((t) => t.setSideTab);
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpSidebar, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpSidebarTabs, children: gn.map((t) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: `${a.cpTabBtn} ${n === t.value ? a.active : ""}`,
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
      n === "cameras" && /* @__PURE__ */ i.jsx(dn, {}),
      n === "objects" && /* @__PURE__ */ i.jsx(nn, {}),
      n === "templates" && /* @__PURE__ */ i.jsx(mn, {}),
      n === "characters" && /* @__PURE__ */ i.jsx(_n, {})
    ] })
  ] });
}, Ze = [
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
], bn = {
  principal: "主角",
  supporting: "配角",
  extra: "群众"
}, jn = () => {
  const n = v((g) => g.selectedCameraId), e = v((g) => g.selectedObjectId), t = v((g) => g.selectedActorId), s = v((g) => g.project.cameras), o = v((g) => g.project.scene.objects), r = v((g) => g.project.actors), l = v((g) => g.updateCamera), c = v((g) => g.updateObject), d = v((g) => g.updateActor), f = s.find((g) => g.id === n), u = o.find((g) => g.id === e), p = r.find((g) => g.id === t);
  return f ? /* @__PURE__ */ i.jsx(vn, { camera: f, onUpdate: l }) : p ? /* @__PURE__ */ i.jsx(xn, { actor: p, onUpdate: d }) : u ? /* @__PURE__ */ i.jsx(Cn, { object: u, onUpdate: c }) : /* @__PURE__ */ i.jsx("div", { className: a.cpPropertyPanel, children: /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "选择机位、角色或物体查看属性" }) }) });
}, xn = ({ actor: n, onUpdate: e }) => {
  const t = (o, r) => {
    e(n.id, { position: { ...n.position, [o]: r } });
  }, s = (o, r) => {
    e(n.id, { rotation: { ...n.rotation, [o]: r } });
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
            value: n.name,
            onChange: (o) => e(n.id, { name: o.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "类型" }),
        /* @__PURE__ */ i.jsx(
          "select",
          {
            value: n.role,
            onChange: (o) => e(n.id, { role: o.target.value }),
            children: Object.entries(bn).map(([o, r]) => /* @__PURE__ */ i.jsx("option", { value: o, children: r }, o))
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
            value: n.height,
            onChange: (o) => e(n.id, { height: Number(o.target.value) })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          n.height.toFixed(2),
          "m"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpField, children: [
        /* @__PURE__ */ i.jsx("label", { children: "颜色" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "color",
            value: `#${n.color.toString(16).padStart(6, "0")}`,
            onChange: (o) => e(n.id, { color: parseInt(o.target.value.slice(1), 16) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((o) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: o.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: n.position[o],
            onChange: (r) => t(o, Number(r.target.value))
          }
        )
      ] }, o))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "朝向" }),
      ["yaw", "pitch", "roll"].map((o) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: o }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "-180",
            max: "180",
            step: "1",
            value: n.rotation[o],
            onChange: (r) => s(o, Number(r.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          n.rotation[o],
          "°"
        ] })
      ] }, o))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "关键帧" }),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpCalcValue, children: [
          n.keyframes.length,
          " 个"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "ID" }),
        /* @__PURE__ */ i.jsx("span", { className: [a.cpCalcValue, a.cpMono].join(" "), children: n.id.slice(0, 8) })
      ] })
    ] })
  ] });
}, vn = ({ camera: n, onUpdate: e }) => {
  var r, l, c, d, f, u;
  const t = (p, g) => {
    const h = { [p]: g };
    e(n.id, h), G.emit("camera:change", { ...n, ...h });
  }, s = (p, g) => {
    const h = { ...n.position, [p]: g };
    e(n.id, { position: h }), G.emit("camera:change", { ...n, position: h });
  }, o = (p, g) => {
    const h = { ...n.rotation, [p]: g };
    e(n.id, { rotation: h }), G.emit("camera:change", { ...n, rotation: h });
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
            value: n.name,
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
            value: n.focal,
            onChange: (p) => t("focal", Number(p.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          n.focal,
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
            value: n.fstop,
            onChange: (p) => t("fstop", Number(p.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          "f/",
          n.fstop.toFixed(1)
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
            value: n.focusDist,
            onChange: (p) => t("focusDist", Number(p.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          n.focusDist.toFixed(1),
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
            value: n.position[p],
            onChange: (g) => s(p, Number(g.target.value))
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
            value: n.rotation[p],
            onChange: (g) => o(p, Number(g.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpFieldValue, children: [
          n.rotation[p],
          "°"
        ] })
      ] }, p))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "计算值" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "FOV" }),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpCalcValue, children: [
          n.fov.toFixed(1),
          "°"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "景深范围" }),
        /* @__PURE__ */ i.jsx("span", { className: a.cpCalcValue, children: n.dof.range === 1 / 0 ? "∞" : `${n.dof.range.toFixed(2)}m` })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "近焦" }),
        /* @__PURE__ */ i.jsxs("span", { className: a.cpCalcValue, children: [
          n.dof.near.toFixed(2),
          "m"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "远焦" }),
        /* @__PURE__ */ i.jsx("span", { className: a.cpCalcValue, children: n.dof.far === 1 / 0 ? "∞" : `${n.dof.far.toFixed(2)}m` })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "运镜" }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          value: ((r = n.movement) == null ? void 0 : r.type) || "",
          onChange: (p) => {
            const g = Ze.find((h) => h.type === p.target.value);
            g && e(n.id, {
              movement: { type: g.type, duration: g.defaultDuration }
            });
          },
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: "无" }),
            Ze.map((p) => /* @__PURE__ */ i.jsxs("option", { value: p.type, children: [
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
            value: ((l = n.script) == null ? void 0 : l.sceneId) || "",
            onChange: (p) => e(n.id, {
              script: { ...n.script, sceneId: p.target.value }
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
            value: ((c = n.script) == null ? void 0 : c.shotId) || "",
            onChange: (p) => e(n.id, {
              script: { ...n.script, shotId: p.target.value }
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
            value: ((d = n.script) == null ? void 0 : d.description) || "",
            onChange: (p) => e(n.id, {
              script: { ...n.script, description: p.target.value }
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
            value: ((f = n.script) == null ? void 0 : f.dialogue) || "",
            onChange: (p) => e(n.id, {
              script: { ...n.script, dialogue: p.target.value }
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
            value: ((u = n.script) == null ? void 0 : u.action) || "",
            onChange: (p) => e(n.id, {
              script: { ...n.script, action: p.target.value }
            }),
            placeholder: "转身离开"
          }
        )
      ] })
    ] })
  ] });
}, Cn = ({ object: n, onUpdate: e }) => {
  const t = (o, r) => {
    e(n.id, { position: { ...n.position, [o]: r } });
  }, s = (o, r) => {
    e(n.id, { scale: { ...n.scale, [o]: r } });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpPropertyPanel, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsxs("div", { className: a.cpSectionTitle, children: [
        "物体: ",
        n.type
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpCalcRow, children: [
        /* @__PURE__ */ i.jsx("span", { children: "ID" }),
        /* @__PURE__ */ i.jsx("span", { className: [a.cpCalcValue, a.cpMono].join(" "), children: n.id.slice(0, 8) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "位置" }),
      ["x", "y", "z"].map((o) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: o.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: n.position[o],
            onChange: (r) => t(o, Number(r.target.value))
          }
        )
      ] }, o))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "缩放" }),
      ["x", "y", "z"].map((o) => /* @__PURE__ */ i.jsxs("div", { className: [a.cpField, a.cpFieldRow].join(" "), children: [
        /* @__PURE__ */ i.jsx("label", { children: o.toUpperCase() }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            min: "0.1",
            value: n.scale[o],
            onChange: (r) => s(o, Number(r.target.value))
          }
        )
      ] }, o))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpPanelSection, children: [
      /* @__PURE__ */ i.jsx("div", { className: a.cpSectionTitle, children: "颜色" }),
      /* @__PURE__ */ i.jsx("div", { className: a.cpField, children: /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "color",
          value: `#${n.color.toString(16).padStart(6, "0")}`,
          onChange: (o) => e(n.id, { color: parseInt(o.target.value.slice(1), 16) })
        }
      ) })
    ] })
  ] });
}, Sn = () => {
  const n = v((f) => f.project.timeline), e = v((f) => f.setTimelineTime), t = v((f) => f.setTimelinePlaying), s = ee(null), o = ee(0), r = ee(0), l = () => {
    if (n.playing)
      s.current && cancelAnimationFrame(s.current), s.current = null, t(!1);
    else {
      t(!0), o.current = performance.now(), r.current = n.currentTime;
      const f = (u) => {
        const p = (u - o.current) / 1e3, g = r.current + p;
        if (g >= n.duration) {
          e(0), t(!1);
          return;
        }
        e(g), G.emit("timeline:change", g), s.current = requestAnimationFrame(f);
      };
      s.current = requestAnimationFrame(f);
    }
  }, c = it((f) => {
    const u = Number(f.target.value);
    e(u), G.emit("timeline:change", u);
  }, [e]), d = (f) => {
    const u = Math.floor(f / 60), p = Math.floor(f % 60), g = Math.floor(f % 1 * 10);
    return `${u}:${p.toString().padStart(2, "0")}.${g}`;
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpTimeline, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpTimelineControls, children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: a.cpPlayBtn,
          onClick: l,
          title: n.playing ? "暂停" : "播放",
          children: n.playing ? "⏸" : "▶"
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
        d(n.currentTime),
        " / ",
        d(n.duration)
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpTimelineTrack, children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: n.duration,
          step: "0.1",
          value: n.currentTime,
          onChange: c,
          className: a.cpTimelineSlider
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: a.cpTimelineMarkers, children: Array.from({ length: Math.ceil(n.duration / 5) + 1 }, (f, u) => /* @__PURE__ */ i.jsxs("span", { className: a.cpTimelineMark, style: { left: `${u * 5 / n.duration * 100}%` }, children: [
        u * 5,
        "s"
      ] }, u)) })
    ] })
  ] });
}, Tn = () => {
  const n = v((d) => d.project.storyboard), e = v((d) => d.project.cameras), t = v((d) => d.setStoryboardGrid), s = v((d) => d.setStoryboardCell), o = v((d) => d.selectCamera), r = n.grid === "5x5" ? 5 : 3, l = r * r, c = (d) => {
    const f = n.cells.find((u) => u.index === d);
    return f != null && f.cameraId && e.find((u) => u.id === f.cameraId) || null;
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpStoryboard, children: [
    /* @__PURE__ */ i.jsxs("div", { className: a.cpStoryboardHeader, children: [
      /* @__PURE__ */ i.jsx("span", { children: "分镜表" }),
      /* @__PURE__ */ i.jsxs("div", { className: a.cpStoryboardToggle, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `${a.cpBtnSm} ${n.grid === "3x3" ? a.active : ""}`,
            onClick: () => t("3x3"),
            children: "3×3"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `${a.cpBtnSm} ${n.grid === "5x5" ? a.active : ""}`,
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
        children: Array.from({ length: l }, (d, f) => {
          const u = c(f);
          return /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `${a.cpStoryboardCell} ${u ? a.hasCamera : ""}`,
              onClick: () => {
                u && o(u.id);
              },
              children: [
                /* @__PURE__ */ i.jsx("div", { className: a.cpCellNumber, children: f + 1 }),
                u ? /* @__PURE__ */ i.jsxs("div", { className: a.cpCellCamera, children: [
                  /* @__PURE__ */ i.jsx("div", { className: a.cpCellCamName, children: u.name }),
                  /* @__PURE__ */ i.jsxs("div", { className: a.cpCellCamMeta, children: [
                    u.focal,
                    "mm"
                  ] })
                ] }) : /* @__PURE__ */ i.jsx("div", { className: a.cpCellEmpty, children: /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    value: "",
                    onChange: (p) => {
                      p.target.value && s(f, p.target.value);
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
            f
          );
        })
      }
    )
  ] });
}, wn = [
  { value: "timeline", label: "时间线" },
  { value: "storyboard", label: "分镜表" },
  { value: "keyframes", label: "关键帧" }
], Pn = () => {
  const n = v((s) => s.bottomTab), e = v((s) => s.setBottomTab), t = v((s) => s.project.path);
  return /* @__PURE__ */ i.jsxs("div", { className: a.cpBottomPanel, children: [
    /* @__PURE__ */ i.jsx("div", { className: a.cpBottomTabs, children: wn.map((s) => /* @__PURE__ */ i.jsx(
      "button",
      {
        className: `${a.cpTabBtn} ${n === s.value ? a.active : ""}`,
        onClick: () => e(s.value),
        children: s.label
      },
      s.value
    )) }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpBottomContent, children: [
      n === "timeline" && /* @__PURE__ */ i.jsx(Sn, {}),
      n === "storyboard" && /* @__PURE__ */ i.jsx(Tn, {}),
      n === "keyframes" && /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframes, children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframesHeader, children: [
          "关键帧 (",
          t.length,
          ")"
        ] }),
        t.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: a.cpEmpty, children: "暂无关键帧。在路径工具模式下点击场景添加。" }) : /* @__PURE__ */ i.jsx("div", { className: a.cpKeyframesList, children: t.map((s, o) => /* @__PURE__ */ i.jsxs("div", { className: a.cpKeyframeItem, children: [
          /* @__PURE__ */ i.jsxs("span", { className: a.cpKfIndex, children: [
            "#",
            o + 1
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
class En {
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
      const r = e.path.filter((l) => l.cameraId === s.id).sort((l, c) => l.t - c.t).map((l) => ({
        time: Math.round(l.t * t * 100) / 100,
        position: l.position,
        rotation: l.rotation
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
const Xe = new En(), Nn = ({ open: n, onClose: e }) => {
  const [t, s] = oe("json"), [o, r] = oe(""), [l, c] = oe(""), d = v((j) => j.project);
  if (!n) return null;
  const f = () => {
    const j = G.exportProject(), x = JSON.stringify(j, null, 2);
    r(x), G.emit("project:export", j);
  }, u = () => {
    const j = G.exportProject(), x = Xe.exportString(j);
    c(x);
  }, p = () => {
    const j = G.exportProject(), x = Xe.exportString(j), C = new Blob([x], { type: "application/json" }), y = URL.createObjectURL(C), w = document.createElement("a");
    w.href = y, w.download = `camera-planner-prompt-${Date.now()}.json`, w.click(), URL.revokeObjectURL(y);
  }, g = () => {
    const j = G.exportProject(), x = new Blob([JSON.stringify(j, null, 2)], { type: "application/json" }), C = URL.createObjectURL(x), y = document.createElement("a");
    y.href = C, y.download = `camera-planner-${Date.now()}.json`, y.click(), URL.revokeObjectURL(C);
  }, h = async () => {
    const j = await G.exportStoryboardPNG();
    if (!j) return;
    const x = URL.createObjectURL(j), C = document.createElement("a");
    C.href = x, C.download = `viewport-${Date.now()}.png`, C.click(), URL.revokeObjectURL(x);
  };
  return /* @__PURE__ */ i.jsx("div", { className: a.cpDialogOverlay, onClick: e, children: /* @__PURE__ */ i.jsxs("div", { className: a.cpDialog, onClick: (j) => j.stopPropagation(), children: [
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
            d.cameras.length,
            " 个摄像机"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            d.scene.objects.length,
            " 个场景物体"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            d.path.length,
            " 个路径关键帧"
          ] })
        ] }),
        o ? /* @__PURE__ */ i.jsx("pre", { className: a.cpExportJson, children: o }) : /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "点击下方按钮生成 JSON" }) }),
        /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogActions, children: [
          /* @__PURE__ */ i.jsx("button", { className: a.cpBtn, onClick: f, children: "生成 JSON" }),
          /* @__PURE__ */ i.jsx("button", { className: [a.cpBtn, a.cpBtnPrimary].join(" "), onClick: g, children: "下载文件" })
        ] })
      ] }),
      t === "prompt" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: a.cpExportInfo, children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            d.cameras.length,
            " 个摄像机"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            d.actors.length,
            " 个角色"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            d.scene.objects.length,
            " 个场景物体"
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            d.path.length,
            " 个相机路径点"
          ] })
        ] }),
        l ? /* @__PURE__ */ i.jsx("pre", { className: a.cpExportJson, children: l }) : /* @__PURE__ */ i.jsx("div", { className: a.cpPlaceholder, children: /* @__PURE__ */ i.jsx("p", { children: "生成结构化 JSON Prompt（含相机/角色/物体动态空间数据）" }) }),
        /* @__PURE__ */ i.jsxs("div", { className: a.cpDialogActions, children: [
          /* @__PURE__ */ i.jsx("button", { className: a.cpBtn, onClick: u, children: "生成 Prompt" }),
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
class Mn {
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
class On {
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
      for (const o of s)
        o(t);
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
const An = new Mn(), G = new On(), Rn = ({
  initialData: n,
  onCameraChange: e,
  onCameraSelect: t,
  onCameraAdd: s,
  onCameraDelete: o,
  onSceneChange: r,
  onProjectExport: l
}) => {
  const [c, d] = oe(!1);
  return Q(() => {
    n && An.loadProject(n);
  }, [n]), Q(() => {
    const f = [];
    return e && f.push(G.on("camera:change", e)), t && f.push(G.on("camera:select", t)), s && f.push(G.on("camera:add", s)), o && f.push(G.on("camera:delete", o)), r && f.push(G.on("scene:change", r)), l && f.push(G.on("project:export", l)), () => f.forEach((u) => u());
  }, [e, t, s, o, r, l]), Q(() => {
    const f = (u) => {
      u.ctrlKey && u.key === "z" && (u.preventDefault(), v.getState().undo()), u.ctrlKey && u.key === "y" && (u.preventDefault(), v.getState().redo());
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: a.cameraPlanner, children: [
    /* @__PURE__ */ i.jsx(hn, { onExport: () => d(!0) }),
    /* @__PURE__ */ i.jsxs("div", { className: a.cpMain, children: [
      /* @__PURE__ */ i.jsx(yn, {}),
      /* @__PURE__ */ i.jsx("div", { className: a.cpViewportWrapper, children: /* @__PURE__ */ i.jsx(cn, { outputManager: G }) }),
      /* @__PURE__ */ i.jsx(jn, {})
    ] }),
    /* @__PURE__ */ i.jsx(Pn, {}),
    /* @__PURE__ */ i.jsx(Nn, { open: c, onClose: () => d(!1) })
  ] });
};
class Ln {
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
    const o = `${this.baseUrl}${t}`, r = {
      "Content-Type": "application/json",
      ...this.headers
    };
    this.token && (r.Authorization = `Bearer ${this.token}`);
    const l = await fetch(o, {
      method: e,
      headers: r,
      body: s ? JSON.stringify(s) : void 0
    });
    if (!l.ok)
      throw new Error(`API ${e} ${t} failed: ${l.status} ${l.statusText}`);
    return l.json();
  }
}
export {
  Ln as ApiClient,
  Rn as CameraPlanner,
  Mt as CameraRig,
  Mn as InputManager,
  At as LIGHT_PRESETS,
  kt as LightSystem,
  Ze as MOVEMENT_PRESETS,
  Ot as ObjectLib,
  On as OutputManager,
  It as PathSystem,
  Dt as RayPicker,
  un as SCENE_PRESETS,
  Me as SENSOR_PRESETS,
  Pt as SceneEngine,
  Pe as calcDOF,
  _e as calcFOV,
  Dn as calcFOVByPreset,
  Je as clamp,
  es as createEmptyProject,
  $ as deg2rad,
  ge as easeInOutCubic,
  Z as generateId,
  An as inputManager,
  O as lerp,
  G as outputManager,
  xe as rad2deg,
  v as usePlannerStore
};
