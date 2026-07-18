import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as SERVICES, t as PageShell } from "./Chrome-MLMWrdt2.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { t as hero_cleaner_default } from "./hero-cleaner-B992rBzi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CQdxhlPp.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = {
	commercial: "/assets/commercial-BFjaLsme.jpg",
	industrial: "/assets/industrial-9LCLIySd.jpg",
	window: "/assets/window-gOUNxVha.jpg",
	upholstery: "/assets/upholstery-wOT8BRxq.jpg",
	domestic: "/assets/domestic-C144EY_I.jpg",
	fumigation: "/assets/fumigation-y3-pgKKD.jpg"
};
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-deep-blue py-32 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_cleaner_default,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-deep-blue/95 to-accent-dark/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-7xl mx-auto px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sky-brand text-xs uppercase tracking-wider",
						children: "Home → Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-h text-white text-4xl md:text-6xl mt-4 max-w-3xl",
						children: [
							"Six Services.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-brand",
								children: "One Trusted Team."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-1 bg-sky-brand mt-6" })
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white",
		children: SERVICES.map((s, i) => {
			const reverse = i % 2 === 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: `py-20 md:py-28 ${i % 2 === 1 ? "bg-off-white" : "bg-white"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								x: reverse ? 30 : -30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { duration: .6 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMG[s.image],
								alt: s.name,
								className: "w-full h-[440px] object-cover shadow-2xl",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: reverse ? -30 : 30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { duration: .6 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "display-h text-sky-brand text-6xl opacity-40",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-h text-deep-blue text-3xl md:text-4xl uppercase mt-2",
									children: [
										s.icon,
										" ",
										s.name
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-steel mt-4 leading-relaxed",
									children: s.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-steel mt-3 leading-relaxed",
									children: "Our team brings the equipment, the products, and the discipline — so you get consistent, professional results every single time."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "label-caps text-sky-brand mb-3",
										children: "What's Included"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: s.included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2 text-deep-blue",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
												size: 18,
												className: "text-sky-brand shrink-0 mt-0.5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, item))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "label-caps text-sky-brand mb-2",
										children: "Ideal For"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-deep-blue",
										children: s.idealFor
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: s.equipment.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs bg-sky-brand/10 text-sky-dark border border-sky-brand/30 px-3 py-1 font-semibold",
										children: e
									}, e))
								}),
								s.slug === "fumigation" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 bg-sky-brand/10 border-l-4 border-sky-brand p-5 text-deep-blue text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Safety note:" }), " All our fumigation chemicals are approved and safe for use around children and pets after the recommended 24 hours re-entry period."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/book",
									className: "mt-8 inline-flex bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm",
									children: "Book This Service"
								})
							]
						})]
					})
				})
			}, s.slug);
		})
	})] });
}
//#endregion
export { Services as component };
