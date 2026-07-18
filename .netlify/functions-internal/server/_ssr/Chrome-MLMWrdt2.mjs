import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MessageCircle, d as Mail, g as Clock, l as Menu, m as Facebook, o as Phone, p as Instagram, t as X, u as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Chrome-MLMWrdt2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "Asmato Laundry and Cleaning Services",
	shortName: "ASMATO",
	tagline: "Laundry & Cleaning Services",
	phone: "+234 703 643 6146",
	phoneHref: "tel:+2347036436146",
	whatsappNumber: "2347036436146",
	email: "asmatocleaningservices@gmail.com",
	address: "Ogbomoso, Oyo State, Nigeria",
	hoursWeek: "Mon–Sat: 7:00 AM – 7:00 PM",
	hoursSun: ""
};
var whatsappUrl = (message) => `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
var SERVICES = [
	{
		slug: "commercial",
		icon: "🏢",
		name: "Commercial Cleaning",
		short: "Office blocks, retail stores, banks, schools, and commercial spaces — cleaned to the highest standard.",
		badges: [
			"Office",
			"Retail",
			"Schools"
		],
		included: [
			"Office deep cleaning",
			"Floor mopping & polishing",
			"Restroom sanitization",
			"Waste disposal",
			"Reception & common areas"
		],
		idealFor: "Offices, banks, schools, shops, churches",
		equipment: [
			"Industrial mops",
			"Vacuums",
			"Sanitizing sprayers"
		],
		image: "commercial"
	},
	{
		slug: "industrial",
		icon: "🏭",
		name: "Industrial Cleaning",
		short: "Factories, warehouses, production floors, and heavy industrial facilities requiring specialist equipment.",
		badges: [
			"Heavy Duty",
			"Machinery",
			"Warehouse"
		],
		included: [
			"Factory floor scrubbing",
			"Machinery exterior cleaning",
			"Warehouse deep clean",
			"Pressure washing",
			"Hazardous waste handling"
		],
		idealFor: "Factories, production plants, warehouses",
		equipment: [
			"Pressure washers",
			"Industrial scrubbers",
			"PPE"
		],
		image: "industrial"
	},
	{
		slug: "window",
		icon: "🪟",
		name: "Window Cleaning",
		short: "Internal and external window cleaning for residential and commercial buildings — streak-free, crystal clear.",
		badges: [
			"Residential",
			"High-Rise",
			"Streak-Free"
		],
		included: [
			"Internal window cleaning",
			"External window cleaning",
			"Frame and sill cleaning",
			"High-rise window access",
			"Streak-free guarantee"
		],
		idealFor: "Homes, offices, hotels, high-rise buildings",
		equipment: [
			"Water-fed poles",
			"Squeegees",
			"Extension ladders"
		],
		image: "window"
	},
	{
		slug: "upholstery",
		icon: "🛋️",
		name: "Upholstery Cleaning",
		short: "Deep cleaning of sofas, chairs, mattresses, carpets, and fabric surfaces — removing stains, dust, and allergens.",
		badges: [
			"Sofa",
			"Mattress",
			"Carpet"
		],
		included: [
			"Sofa & chair deep cleaning",
			"Mattress sanitization",
			"Carpet & rug cleaning",
			"Stain removal treatment",
			"Deodorizing & freshening"
		],
		idealFor: "Homes, hotels, offices, churches",
		equipment: [
			"Steam cleaners",
			"Extraction machines",
			"Stain treatment products"
		],
		image: "upholstery"
	},
	{
		slug: "domestic",
		icon: "🏠",
		name: "Domestic Cleaning",
		short: "Full home cleaning services — kitchen, bathrooms, bedrooms, and living areas cleaned professionally inside and out.",
		badges: [
			"Deep Clean",
			"Regular",
			"Move-In/Out"
		],
		included: [
			"Full kitchen deep clean",
			"Bathroom & toilet sanitization",
			"Bedroom & living room",
			"Move-in/move-out cleaning",
			"Post-construction cleaning"
		],
		idealFor: "Homes, apartments, rental properties",
		equipment: [
			"Eco-friendly products",
			"Steam mops",
			"HEPA vacuums"
		],
		image: "domestic"
	},
	{
		slug: "fumigation",
		icon: "🪲",
		name: "Fumigation",
		short: "Licensed pest control and fumigation for homes, offices, warehouses, and farms — eliminating termites, cockroaches, rodents, and all pests.",
		badges: [
			"Licensed",
			"All Pests",
			"Residential & Commercial"
		],
		included: [
			"Termite treatment",
			"Cockroach elimination",
			"Rodent control",
			"Mosquito & bedbugs treatment",
			"Farm & warehouse fumigation"
		],
		idealFor: "Homes, offices, warehouses, farms, restaurants",
		equipment: [
			"Licensed chemicals",
			"ULV foggers",
			"Full PPE"
		],
		image: "fumigation"
	}
];
var logo_default = "/assets/logo-CCb9T8_V.jpeg";
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/book",
		label: "Book a Service"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-sky-brand text-white text-xs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
					" ",
					SITE.address
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.phoneHref,
					className: "flex items-center gap-1.5 hover:underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }),
						" ",
						SITE.phone
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappUrl("Hello Asmato! I need cleaning services."),
					target: "_blank",
					rel: "noreferrer",
					className: "flex items-center gap-1.5 hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }), " WhatsApp Us"]
				})]
			})]
		})
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: `sticky top-0 z-40 bg-deep-blue border-b-2 border-sky-brand transition-shadow ${scrolled ? "shadow-2xl shadow-black/40" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center leading-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: SITE.name,
						className: "h-16 md:h-20 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex items-center gap-8",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-white text-sm font-medium hover:text-sky-brand transition-colors",
						activeProps: { className: "text-sky-brand" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "hidden md:inline-flex bg-sky-brand hover:bg-sky-dark text-white font-semibold text-sm px-5 py-2.5 transition-colors",
						children: "Book a Service"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(true),
						className: "lg:hidden text-white p-2",
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 26 })
					})]
				})
			]
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-deep-blue flex flex-col animate-in fade-in duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 h-16 border-b border-sky-brand/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-white font-display text-xl",
				children: "MENU"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen(false),
				className: "text-white p-2",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 26 })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col items-center justify-center gap-6 px-6",
			children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				className: "text-sky-brand font-display text-3xl uppercase tracking-wide",
				children: n.label
			}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/book",
				onClick: () => setOpen(false),
				className: "mt-4 bg-sky-brand text-white font-semibold px-8 py-3",
				children: "Book Now"
			})]
		})]
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-accent-dark text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: SITE.name,
							className: "h-24 md:h-28 w-auto object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/70 mt-6 text-sm italic leading-relaxed",
							children: "Clean Spaces. Safe Environments. Happy Clients."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-3 mt-6",
							children: [
								Facebook,
								Instagram,
								MessageCircle
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "w-10 h-10 border border-sky-brand/30 flex items-center justify-center hover:bg-sky-brand transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 16,
									className: "text-sky-brand hover:text-white"
								})
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "label-caps text-sky-brand mb-4",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm text-white/80",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "hover:text-sky-brand",
							children: n.label
						}) }, n.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "label-caps text-sky-brand mb-4",
						children: "Our Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-white/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Commercial Cleaning" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Industrial Cleaning" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Window Cleaning" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Upholstery Cleaning" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Domestic Cleaning" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fumigation" })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "label-caps text-sky-brand mb-4",
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 16,
											className: "text-sky-brand shrink-0"
										}),
										" ",
										SITE.address
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SITE.phoneHref,
									className: "flex gap-2 hover:text-sky-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											size: 16,
											className: "text-sky-brand shrink-0"
										}),
										" ",
										SITE.phone
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${SITE.email}`,
									className: "flex gap-2 hover:text-sky-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											size: 16,
											className: "text-sky-brand shrink-0"
										}),
										" ",
										SITE.email
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											size: 16,
											className: "text-sky-brand shrink-0"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.hoursWeek })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl("Hello Asmato!"),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 mt-4 bg-sky-brand hover:bg-sky-dark text-white px-4 py-2 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }), " WhatsApp Us"]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-sky-brand/20 mt-12 pt-6 text-center text-xs text-white/50",
				children: "© 2025 Asmato Laundry and Cleaning Services. All rights reserved. Ogbomoso, Nigeria."
			})]
		})
	});
}
function FloatingButtons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappUrl("Hello Asmato! I need cleaning/fumigation services."),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "WhatsApp",
		className: "fixed bottom-5 left-5 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 26 })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/book",
		"aria-label": "Book Now",
		className: "fixed bottom-5 right-5 z-30 bg-sky-brand hover:bg-sky-dark text-white font-display uppercase tracking-wide text-sm px-5 h-14 flex items-center shadow-2xl hover:scale-105 transition-transform",
		children: "Book Now"
	})] });
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingButtons, {})
		]
	});
}
function Sparkles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sparkle absolute w-1 h-1 rounded-full bg-sky-brand/60",
			style: {
				left: `${i * 7.3 % 100}%`,
				top: `${i * 13.7 % 100}%`,
				animationDelay: `${i % 6 * .7}s`
			}
		}, i))
	});
}
//#endregion
export { whatsappUrl as a, Sparkles as i, SERVICES as n, SITE as r, PageShell as t };
