import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CircleCheck, c as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as whatsappUrl, n as SERVICES, r as SITE, t as PageShell } from "./Chrome-io84Y1Vo.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-kKdOj9R6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function genRef() {
	return `ASM-2025-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function Book() {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const [sameWa, setSameWa] = (0, import_react.useState)(true);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setSubmitted({
			name: String(fd.get("name") || "Client"),
			service: String(fd.get("service") || "Cleaning"),
			ref: genRef()
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-to-br from-sky-brand to-sky-dark py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-4 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-h text-white text-4xl md:text-6xl",
				children: "Book Your Cleaning Service"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-white/90 mt-5 max-w-xl mx-auto",
				children: "Fill the form below and we'll contact you within 2 hours to confirm your booking."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-off-white py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-3xl mx-auto px-4",
			children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "bg-white shadow-2xl border-t-4 border-sky-brand p-8 md:p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						transition: {
							type: "spring",
							delay: .1
						},
						className: "mx-auto w-20 h-20 rounded-full bg-sky-brand flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							size: 44,
							className: "text-white"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-h text-deep-blue text-3xl md:text-4xl mt-6",
						children: "Booking Received! 🎉"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-steel mt-4",
						children: [
							"Thank you ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: submitted.name }),
							"! Your booking request for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: submitted.service }),
							" has been received. Our team will call or WhatsApp you within 2 hours to confirm."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-block bg-off-white border border-brand-border px-6 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-caps text-sky-brand text-xs",
							children: "Booking Reference"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "display-h text-deep-blue text-2xl mt-1",
							children: submitted.ref
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col sm:flex-row gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(`Hello Asmato! I just submitted a booking (Ref: ${submitted.ref}) for ${submitted.service}. Please confirm.`),
							target: "_blank",
							rel: "noreferrer",
							className: "bg-[#25D366] hover:opacity-90 text-white font-semibold px-6 py-3 inline-flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }), " Send on WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "border-2 border-deep-blue text-deep-blue px-6 py-3 font-semibold uppercase tracking-wide text-sm",
							children: "Back to Home"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "bg-white shadow-2xl border-t-4 border-sky-brand p-6 md:p-10 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							name: "name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone Number",
							name: "phone",
							type: "tel",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm text-deep-blue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: sameWa,
							onChange: (e) => setSameWa(e.target.checked),
							className: "accent-sky-brand w-4 h-4"
						}), "WhatsApp number same as phone"]
					}), !sameWa && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						className: "mt-3",
						label: "WhatsApp Number",
						name: "whatsapp",
						type: "tel"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email (optional)",
						name: "email",
						type: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Service Type",
							name: "service",
							required: true,
							options: [...SERVICES.map((s) => s.name), "Multiple Services"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Property Type",
							name: "property",
							required: true,
							options: [
								"Home",
								"Office",
								"Factory",
								"Warehouse",
								"School",
								"Church",
								"Other"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preferred Date",
							name: "date",
							type: "date",
							required: true,
							min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Preferred Time Slot",
							name: "time",
							required: true,
							options: [
								"Morning (7AM–12PM)",
								"Afternoon (12PM–4PM)",
								"Evening (4PM–7PM)"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						label: "Location / Address in Ogbomoso",
						name: "address",
						required: true,
						rows: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						label: "Additional details",
						name: "details",
						placeholder: "Tell us more about your space or specific concerns...",
						rows: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "How did you hear about us?",
						name: "referral",
						options: [
							"Google Search",
							"Facebook / Instagram",
							"Friend / Family",
							"Passed by our team",
							"WhatsApp",
							"Other"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full bg-sky-brand hover:bg-sky-dark text-white font-display uppercase tracking-widest py-4 text-sm",
						children: "Submit Booking Request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-steel text-center",
						children: [
							"Prefer to talk? Call ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-sky-brand font-semibold",
								href: SITE.phoneHref,
								children: SITE.phone
							}),
							" or WhatsApp us."
						]
					})
				]
			})
		})
	})] });
}
function Field({ label, name, className = "", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-caps text-deep-blue text-[11px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			...rest,
			className: "mt-2 w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white transition-colors"
		})]
	});
}
function Textarea({ label, name, rows = 3, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-caps text-deep-blue text-[11px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			rows,
			...rest,
			className: "mt-2 w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white transition-colors resize-none"
		})]
	});
}
function Select({ label, name, options, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-caps text-deep-blue text-[11px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			name,
			required,
			className: "mt-2 w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white transition-colors",
			defaultValue: "",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				disabled: true,
				children: "Select…"
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
//#endregion
export { Book as component };
