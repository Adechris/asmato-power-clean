import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as CircleCheck, c as MessageCircle, d as Mail, g as Clock, n as TriangleAlert, o as Phone, u as MapPin } from "../_libs/lucide-react.mjs";
import { a as whatsappUrl, r as SITE, t as PageShell } from "./Chrome-MLMWrdt2.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CDQwMK2S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-deep-blue py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sky-brand text-xs uppercase tracking-wider",
					children: "Home → Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display-h text-white text-4xl md:text-6xl mt-4",
					children: ["Get In Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sky-brand",
						children: "With Us"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/70 mt-5 max-w-xl",
					children: "We're always available — call, WhatsApp, or send us a message."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-1 bg-sky-brand mt-6" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-off-white py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white shadow-2xl border-t-4 border-sky-brand p-6 md:p-10",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "text-center py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-20 h-20 rounded-full bg-sky-brand flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								size: 44,
								className: "text-white"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-h text-deep-blue text-2xl mt-6",
							children: "Message Sent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-steel mt-3",
							children: "We'll respond within a few hours!"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-h text-deep-blue text-2xl uppercase",
							children: "Send a Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								placeholder: "Full name",
								className: "w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "email",
								type: "email",
								placeholder: "Email",
								className: "w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "phone",
							type: "tel",
							placeholder: "Phone",
							className: "w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							required: true,
							defaultValue: "",
							className: "w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Subject…"
							}), [
								"General Inquiry",
								"Request a Quote",
								"Complaint",
								"Partnership",
								"Other"
							].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							placeholder: "Your message...",
							className: "w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full bg-sky-brand hover:bg-sky-dark text-white font-display uppercase tracking-widest py-3.5 text-sm",
							children: "Send Message"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 20 }),
						label: "Address",
						value: SITE.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 20 }),
						label: "Phone",
						value: SITE.phone,
						href: SITE.phoneHref
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappUrl("Hello Asmato! I need cleaning/fumigation services."),
						target: "_blank",
						rel: "noreferrer",
						className: "block bg-sky-brand hover:bg-sky-dark text-white p-6 shadow-lg transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 28 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-caps text-white/80 text-[11px]",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl uppercase",
								children: "Chat With Us →"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 }),
						label: "Email",
						value: SITE.email,
						href: `mailto:${SITE.email}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 20 }),
						label: "Working Hours",
						value: `${SITE.hoursWeek}\n${SITE.hoursSun}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-sky-brand border-l-4 border-deep-blue p-6 shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
								size: 26,
								className: "text-deep-blue shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "display-h text-deep-blue text-xl uppercase",
									children: "Need Emergency Cleaning?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-deep-blue/90 text-sm mt-1",
									children: "Call or WhatsApp us NOW — we respond within the hour."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2 mt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: SITE.phoneHref,
										className: "bg-deep-blue text-white px-4 py-2 text-sm font-semibold",
										children: "Call Now"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappUrl("Emergency cleaning needed!"),
										className: "bg-white text-deep-blue px-4 py-2 text-sm font-semibold",
										children: "WhatsApp Now"
									})]
								})
							] })]
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-4 border-sky-brand shadow-2xl overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Ogbomoso Map",
					src: "https://maps.google.com/maps?q=Ogbomoso%2C%20Oyo%20State%2C%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed",
					className: "w-full h-[400px]",
					loading: "lazy"
				})
			})
		})]
	})] });
}
function InfoCard({ icon, label, value, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white p-6 shadow-lg border-l-4 border-sky-brand flex items-start gap-4 hover:shadow-xl transition-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sky-brand mt-1",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "label-caps text-sky-brand text-[11px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-deep-blue font-semibold mt-1 whitespace-pre-line",
			children: value
		})] })]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "block",
		children: inner
	}) : inner;
}
//#endregion
export { Contact as component };
