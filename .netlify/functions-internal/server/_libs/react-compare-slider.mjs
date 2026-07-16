import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/react-compare-slider/dist/consts.mjs
var e$1 = {
	all: `all`,
	itemOne: `itemOne`,
	itemTwo: `itemTwo`
};
var t$1 = {
	rawPosition: `--rcs-raw-position`,
	currentPosition: `--rcs-current-position`,
	boundsPadding: `--rcs-bounds-padding`,
	handleColor: `--rcs-handle-color`
};
//#endregion
//#region node_modules/react-compare-slider/dist/internal-hooks-DCZzlIVu.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var n = {
	capture: !1,
	passive: !0
};
var r$1 = {
	capture: !0,
	passive: !1
};
var i$1 = function(e) {
	return e.ARROW_LEFT = `ArrowLeft`, e.ARROW_RIGHT = `ArrowRight`, e.ARROW_UP = `ArrowUp`, e.ARROW_DOWN = `ArrowDown`, e;
}({});
var a$2 = (n, r, i, a) => {
	let o = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		o.current = r;
	}, [r]), (0, import_react.useEffect)(() => {
		if (!i?.addEventListener) return;
		let e = (e) => o.current?.(e);
		return i.addEventListener(n, e, a), () => {
			i.removeEventListener(n, e, a);
		};
	}, [
		n,
		i,
		a
	]);
};
//#endregion
//#region node_modules/react-compare-slider/dist/root-DkZVJzK1.mjs
var import_jsx_runtime = require_jsx_runtime();
var u$1 = (0, import_react.createContext)(null);
var d$1 = ({ children: e, ...t }) => (0, import_jsx_runtime.jsx)(u$1.Provider, {
	value: t,
	children: e
});
var f$1 = () => {
	let e = (0, import_react.useContext)(u$1);
	if (!e) throw Error(`useReactCompareSliderContext must be used within the Provider component`);
	return e;
};
var p$1 = ({ flip: e }) => {
	return (0, import_jsx_runtime.jsx)(`div`, {
		"aria-hidden": `true`,
		className: `__rcs-handle-arrow`,
		style: {
			width: `0.85rem`,
			height: `0.85rem`,
			clipPath: `polygon(100% 0%, 100% 100%, 30% 50%)`,
			rotate: e ? `180deg` : `0deg`,
			outline: `0.5rem solid var(${t$1.handleColor})`,
			outlineOffset: `-0.5rem`
		}
	});
};
var m = ({ className: e = `__rcs-handle-root`, buttonStyle: n, linesStyle: r, style: i, ...a }) => {
	let { disabled: o, portrait: s } = f$1(), u = {
		boxSizing: `border-box`,
		position: `relative`,
		display: `inline-flex`,
		flexDirection: s ? `row` : `column`,
		placeItems: `center`,
		width: s ? `100%` : void 0,
		height: s ? void 0 : `100%`,
		cursor: o ? `not-allowed` : s ? `ns-resize` : `ew-resize`,
		pointerEvents: `none`,
		[t$1.handleColor]: `rgba(255, 255, 255, 1)`,
		...i
	}, d = {
		flexGrow: 1,
		height: s ? 2 : `100%`,
		width: s ? `100%` : 2,
		outline: `1px solid var(${t$1.handleColor})`,
		outlineOffset: -1,
		pointerEvents: `auto`,
		boxShadow: `0 0 4px rgba(0,0,0,.5)`,
		...r
	}, m = {
		direction: `ltr`,
		display: `grid`,
		gridAutoFlow: `column`,
		gap: `0.5rem`,
		placeContent: `center`,
		flexShrink: 0,
		width: `3.5rem`,
		height: `3.5rem`,
		borderRadius: `50%`,
		border: `2px solid var(${t$1.handleColor})`,
		color: `inherit`,
		pointerEvents: `auto`,
		backdropFilter: `blur(0.5rem)`,
		WebkitBackdropFilter: `blur(0.5rem)`,
		backgroundColor: `rgba(0, 0, 0, 0.125)`,
		boxShadow: `0 0 4px rgba(0,0,0,.35)`,
		transform: s ? `rotate(90deg)` : void 0,
		...n
	};
	return (0, import_jsx_runtime.jsxs)(`div`, {
		"data-rcs": `handle`,
		...a,
		className: e,
		style: u,
		children: [
			(0, import_jsx_runtime.jsx)(`div`, {
				className: `__rcs-handle-line`,
				style: d
			}),
			(0, import_jsx_runtime.jsxs)(`div`, {
				className: `__rcs-handle-button`,
				style: m,
				children: [(0, import_jsx_runtime.jsx)(p$1, {}), (0, import_jsx_runtime.jsx)(p$1, { flip: !0 })]
			}),
			(0, import_jsx_runtime.jsx)(`div`, {
				className: `__rcs-handle-line`,
				style: d
			})
		]
	});
};
var h = ({ display: e = `block`, width: t = `100%`, height: n = `100%`, maxWidth: r = `100%`, boxSizing: i = `border-box`, objectFit: a = `cover`, objectPosition: o = `center center`, ...s } = {}) => ({
	display: e,
	width: t,
	height: n,
	maxWidth: r,
	boxSizing: i,
	objectFit: a,
	objectPosition: o,
	...s
});
var g = ({ alt: e, style: t, ...n }) => {
	let r = h(t);
	return (0, import_jsx_runtime.jsx)(`img`, {
		"data-rcs": `image`,
		...n,
		alt: e,
		style: r
	});
};
var _ = ({ style: e, ...r }) => {
	let { disabled: a, portrait: o, position: s, handleRootRef: l, onHandleRootClick: u, onHandleRootKeyDown: d } = f$1(), p = {
		WebkitAppearance: `none`,
		MozAppearance: `none`,
		WebkitTapHighlightColor: `transparent`,
		boxSizing: `border-box`,
		position: `absolute`,
		display: `flex`,
		flexDirection: o ? `row` : `column`,
		placeItems: `center`,
		contain: `layout`,
		top: o ? `-50%` : void 0,
		left: o ? void 0 : `-50%`,
		width: `100%`,
		height: `100%`,
		background: `none`,
		border: 0,
		padding: 0,
		pointerEvents: `none`,
		appearance: `none`,
		outline: 0,
		zIndex: 1,
		translate: o ? `0 var(${t$1.currentPosition}) 0` : `var(${t$1.currentPosition}) 0 0`,
		backfaceVisibility: `hidden`,
		willChange: `translate`,
		...e
	};
	return a$2(`keydown`, d, l.current, r$1), a$2(`click`, u, l.current, r$1), (0, import_jsx_runtime.jsx)(`div`, {
		ref: l,
		tabIndex: 0,
		"aria-label": `Click and drag or focus and use arrow keys to change the position of the slider`,
		"aria-orientation": o ? `vertical` : `horizontal`,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": s.current,
		"aria-disabled": a,
		"data-rcs": `handle-root`,
		role: `slider`,
		style: p,
		...r
	});
};
var v = ({ itemClip: n, portrait: r }) => n === e$1.itemOne ? r ? `inset(0px 0px calc(100% - var(${t$1.currentPosition})) 0px)` : `inset(0px calc(100% - var(${t$1.currentPosition})) 0px 0px)` : n === e$1.itemTwo ? r ? `inset(var(${t$1.currentPosition}) 0px 0px 0px)` : `inset(0px 0px 0px var(${t$1.currentPosition}))` : `none`;
var y = ({ item: t, style: n, ...r }) => {
	let { clip: i, portrait: a } = f$1(), o = {
		KhtmlUserSelect: `none`,
		MozUserSelect: `none`,
		WebkitUserSelect: `none`,
		backfaceVisibility: `hidden`,
		WebkitBackfaceVisibility: `hidden`,
		gridArea: `1 / 1`,
		maxWidth: `100%`,
		overflow: `hidden`,
		clipPath: v({
			itemClip: i === e$1.all || i === t ? t : void 0,
			portrait: a
		}),
		boxSizing: `border-box`,
		transform: `translateZ(0)`,
		userSelect: `none`,
		zIndex: t === e$1.itemOne ? 1 : void 0,
		willChange: `clip-path`,
		...n
	};
	return (0, import_jsx_runtime.jsx)(`div`, {
		"data-rcs": `item`,
		"data-rcs-item": t,
		...r,
		style: o
	});
};
var b = `clamp(var(${t$1.boundsPadding}), var(${t$1.rawPosition}) - var(${t$1.boundsPadding}) + var(${t$1.boundsPadding}), calc(100% - var(${t$1.boundsPadding})))`;
var x = ({ style: e, ...a }) => {
	let { browsingContext: o, boundsPadding: l, changePositionOnHover: u, clip: d, isDragging: p, portrait: m, position: h, onTouchEnd: g, onPointerDown: _, onPointerMove: v, onPointerUp: y, interactiveTarget: x, rootRef: S, transition: C, canTransition: w } = f$1(), T = {
		position: `relative`,
		boxSizing: `border-box`,
		display: `grid`,
		maxWidth: `100%`,
		maxHeight: `100%`,
		overflow: `hidden`,
		cursor: p ? m ? `ns-resize` : `ew-resize` : void 0,
		touchAction: `pan-y`,
		userSelect: `none`,
		KhtmlUserSelect: `none`,
		msUserSelect: `none`,
		MozUserSelect: `none`,
		WebkitUserSelect: `none`,
		transition: w && C ? `${t$1.rawPosition} ${C}` : `none`,
		[t$1.rawPosition]: `${h.current}%`,
		[t$1.boundsPadding]: l,
		[t$1.currentPosition]: b,
		...e
	};
	return a$2(`touchend`, g, x, r$1), a$2(`pointerdown`, _, x, r$1), (0, import_react.useEffect)(() => {
		let e = S.current, t = (e) => {
			p || y(e);
		};
		return u && (e.addEventListener(`pointermove`, v, n), e.addEventListener(`pointerleave`, t, n)), () => {
			e.removeEventListener(`pointermove`, v), e.removeEventListener(`pointerleave`, t);
		};
	}, [
		u,
		v,
		y,
		p,
		S
	]), (0, import_react.useEffect)(() => {
		if (p) return o.addEventListener(`pointermove`, v, n), o.addEventListener(`pointerup`, y, n), () => {
			o?.removeEventListener(`pointermove`, v), o?.removeEventListener(`pointerup`, y);
		};
	}, [
		v,
		y,
		p,
		o
	]), (0, import_jsx_runtime.jsx)(`div`, {
		ref: S,
		style: T,
		"data-rcs": `root`,
		"data-rcs-clip": d,
		...a
	});
};
//#endregion
//#region node_modules/react-compare-slider/dist/hooks-Ca9jngmy.mjs
(() => {
	try {
		typeof CSS < `u` && CSS.registerProperty({
			name: t$1.rawPosition,
			syntax: `<percentage>`,
			inherits: !0,
			initialValue: `50%`
		});
	} catch (e) {
		console.debug(`[react-compare-slider] register CSS property:`, e);
	}
})();
var c = () => globalThis.matchMedia?.(`(prefers-reduced-motion: no-preference)`)?.matches ? `0.15s ease-out` : `none`;
var l = () => !!globalThis.matchMedia?.(`(pointer: coarse)`)?.matches;
var u = ({ boundsPadding: u = `0px`, browsingContext: d = globalThis, changePositionOnHover: f = !1, clip: p = e$1.all, defaultPosition: m = 50, disabled: h = !1, keyboardIncrement: g = `5%`, onlyHandleDraggable: _ = l(), onPositionChange: v, portrait: y = !1, transition: b = c() } = {}) => {
	let x = (0, import_react.useRef)(null), S = (0, import_react.useRef)(null), C = (0, import_react.useRef)(m), [w, T] = (0, import_react.useState)(!1), [E, D] = (0, import_react.useState)(!0), [O, k] = (0, import_react.useState)(null), A = (0, import_react.useCallback)((e) => {
		let n = Math.min(Math.max(e, 0), 100);
		x.current?.style.setProperty(t$1.rawPosition, `${n}%`), S.current?.setAttribute(`aria-valuenow`, `${Math.round(n)}`), C.current = n, v?.(n);
	}, [v]), j = (0, import_react.useCallback)(function({ x: e, y: t }) {
		let { width: n, height: r, top: i, left: a } = x.current.getBoundingClientRect();
		n === 0 || r === 0 || A((y ? t - i - d.scrollY : e - a - d.scrollX) / (y ? r : n) * 100);
	}, [
		d,
		y,
		A
	]), M = (0, import_react.useCallback)((e) => {
		e.preventDefault(), !(h || e.button !== 0) && (j({
			x: e.pageX,
			y: e.pageY
		}), T(!0), D(!0));
	}, [h, j]), N = (0, import_react.useCallback)(function(e) {
		D(!1), j({
			x: e.pageX,
			y: e.pageY
		});
	}, [j]), P = (0, import_react.useCallback)((e) => {
		T(!1), D(!0);
	}, []), F = (0, import_react.useCallback)((e) => {
		T(!1), D(!0);
	}, []), I = (0, import_react.useCallback)((e) => {
		e.preventDefault(), e.currentTarget?.focus();
	}, []), L = (0, import_react.useCallback)((e) => {
		if (!Object.values(i$1).includes(e.key)) return;
		e.preventDefault(), D(!0);
		let t = typeof g == `string` ? Number.parseFloat(g) : g / x.current?.getBoundingClientRect().width * 100;
		A((y ? e.key === i$1.ARROW_LEFT || e.key === i$1.ARROW_DOWN : e.key === i$1.ARROW_RIGHT || e.key === i$1.ARROW_UP) ? C.current + t : C.current - t);
	}, [
		g,
		y,
		A
	]);
	return (0, import_react.useLayoutEffect)(() => {
		k(_ ? S.current : x.current);
	}, [_]), (0, import_react.useEffect)(() => {
		A(m);
	}, [m, A]), {
		boundsPadding: u,
		browsingContext: d,
		changePositionOnHover: f,
		clip: p,
		defaultPosition: m,
		disabled: h,
		keyboardIncrement: g,
		onlyHandleDraggable: _,
		portrait: y,
		transition: b,
		onHandleRootKeyDown: L,
		onPointerDown: M,
		onPointerMove: N,
		onPointerUp: P,
		onTouchEnd: F,
		onHandleRootClick: I,
		canTransition: E,
		isDragging: w,
		position: C,
		setPosition: A,
		setPositionFromBounds: j,
		rootRef: x,
		handleRootRef: S,
		interactiveTarget: O
	};
};
//#endregion
//#region node_modules/react-compare-slider/dist/index.mjs
var p = ({ boundsPadding: e, browsingContext: t, changePositionOnHover: n, clip: c, defaultPosition: l, disabled: p, handle: m$1, itemOne: h, itemTwo: g, keyboardIncrement: _$1, onPositionChange: v, onlyHandleDraggable: y$1, portrait: b, transition: x$1, ...S }) => (0, import_jsx_runtime.jsx)(d$1, {
	...u({
		boundsPadding: e,
		browsingContext: t,
		changePositionOnHover: n,
		clip: c,
		defaultPosition: l,
		disabled: p,
		keyboardIncrement: _$1,
		onPositionChange: v,
		onlyHandleDraggable: y$1,
		portrait: b,
		transition: x$1
	}),
	children: (0, import_jsx_runtime.jsxs)(x, {
		...S,
		children: [
			(0, import_jsx_runtime.jsx)(y, {
				item: `itemOne`,
				children: h
			}),
			(0, import_jsx_runtime.jsx)(y, {
				item: `itemTwo`,
				children: g
			}),
			(0, import_jsx_runtime.jsx)(_, { children: m$1 || (0, import_jsx_runtime.jsx)(m, {}) })
		]
	})
});
//#endregion
export { g as n, p as t };
