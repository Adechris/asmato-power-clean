import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as MessageCircle, d as Mail, f as Leaf, g as Clock, h as DollarSign, i as Shield, o as Phone, r as Star, s as Pause, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as whatsappUrl, i as Sparkles, n as SERVICES, r as SITE, t as PageShell } from "./Chrome-MLMWrdt2.mjs";
import { t as team_default } from "./team-BZTFgXNw.mjs";
import { a as motion, i as useMotionValue, n as animate, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { t as hero_cleaner_default } from "./hero-cleaner-B992rBzi.mjs";
import { n as g, t as p } from "../_libs/react-compare-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Kw9ceguR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var before_carpet_default = "/assets/before-carpet-IM4-D9M8.jpg";
var after_carpet_default = "/assets/after-carpet-BplRiXxN.jpg";
var before_floor_default = "/assets/before-floor-bghcFFQ-.jpg";
var after_floor_default = "/assets/after-floor-B7dZwnvF.jpg";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coverage, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
function Hero() {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const toggle = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			v.play();
			setPlaying(true);
		} else {
			v.pause();
			setPlaying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[92vh] md:min-h-screen overflow-hidden bg-deep-blue",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						className: "absolute inset-0 w-full h-full object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: hero_cleaner_default,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "https://cdn.pixabay.com/video/2022/12/14/143008-780499660_large.mp4",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_cleaner_default,
						alt: "Professional cleaning team at work",
						className: "absolute inset-0 w-full h-full object-cover ken-burns -z-10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-deep-blue/85 via-deep-blue/75 to-accent-dark/85" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.25),transparent_60%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggle,
				className: "absolute top-24 right-4 md:right-8 z-10 w-10 h-10 border border-white/40 text-white flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-sky-brand",
				"aria-label": playing ? "Pause video" : "Play video",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-32 md:pt-32 md:pb-40 min-h-[92vh] md:min-h-screen flex flex-col justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "label-caps text-sky-brand text-[13px] mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10 h-px bg-sky-brand" }), "Professional Cleaning & Fumigation"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-h text-white text-[54px] leading-[0.98] md:text-[88px] tracking-tight",
							children: [
								"Committed To",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Your Health",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sky-brand",
									children: "And The Environment ."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-white/80 text-base md:text-[17px] leading-relaxed max-w-xl",
							children: "Asmato delivers industrial-grade cleaning and fumigation services for homes, offices, and businesses across Ogbomoso — spotlessly clean, every single time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col sm:flex-row gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book",
								className: "bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm inline-flex items-center gap-2 justify-center",
								children: ["Book a Service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "border-2 border-white/60 hover:border-sky-brand hover:text-sky-brand text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm inline-flex items-center justify-center",
								children: "See Our Services"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-[13px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧹 Certified Cleaners" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sky-brand",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🪲 Licensed Fumigation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sky-brand",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✅ Satisfaction Guaranteed" })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 right-0 h-16 md:h-24 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1440 100",
					preserveAspectRatio: "none",
					className: "w-full h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "0,100 1440,0 1440,100",
						fill: "var(--sky-brand)",
						opacity: "0.9"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "0,100 1440,30 1440,100",
						fill: "white"
					})]
				})
			})
		]
	});
}
function CountUp({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const mv = useMotionValue(0);
	const display = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
	(0, import_react.useEffect)(() => {
		if (inView) animate(mv, to, {
			duration: 1.8,
			ease: "easeOut"
		});
	}, [
		inView,
		mv,
		to
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		ref,
		children: display
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-deep-blue py-16 md:py-20 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8",
			children: [
				{
					icon: "🏢",
					n: 500,
					s: "+",
					label: "Clients Served"
				},
				{
					icon: "📅",
					n: 8,
					s: "+",
					label: "Years Experience"
				},
				{
					icon: "👷",
					n: 12,
					s: "+",
					label: "Trained Cleaners"
				},
				{
					icon: "✅",
					n: 100,
					s: "%",
					label: "Satisfaction Rate"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					delay: i * .1,
					duration: .5
				},
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl mb-2",
						children: s.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "display-h text-white text-5xl md:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: s.n,
							suffix: s.s
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-caps text-sky-brand text-[11px] md:text-xs mt-2",
						children: s.label
					})
				]
			}, s.label))
		})
	});
}
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-off-white py-24 md:py-32 relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-caps text-sky-brand mb-4",
						children: "Our Core Business"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-h text-deep-blue text-4xl md:text-5xl",
						children: [
							"Ogbomoso's Most Trusted",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cleaning Professionals"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-steel leading-relaxed",
						children: "Asmato Laundry and Cleaning Services delivers thorough, reliable, and professionally executed cleaning and fumigation solutions. From residential homes to large industrial facilities — we bring expert hands, professional equipment, and a commitment to perfection to every job."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-8 border-l-4 border-sky-brand bg-white p-6 shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "italic text-deep-blue text-lg leading-relaxed",
							children: "\"We don't just clean surfaces. We sanitize environments and protect the people inside them.\""
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "mt-8 inline-flex items-center gap-2 text-sky-brand font-semibold hover:text-sky-dark",
						children: ["See Our Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: team_default,
						alt: "Asmato professional cleaning team",
						className: "w-full h-[520px] object-cover shadow-2xl",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-4 -right-4 bg-sky-brand text-white px-5 py-3 font-display uppercase text-sm tracking-wider shadow-xl",
						children: "Licensed & Certified ✅"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -left-6 bg-white shadow-2xl p-5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-sky-brand",
							children: [
								0,
								1,
								2,
								3,
								4
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 18,
								fill: "currentColor"
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-deep-blue text-2xl leading-none",
							children: "4.9/5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-steel",
							children: "Client Rating"
						})] })]
					})
				]
			})]
		})
	});
}
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative bg-deep-blue py-24 md:py-32 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-caps text-sky-brand",
						children: "Our Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-h text-white text-4xl md:text-5xl mt-3",
						children: [
							"Everything Clean.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Everything Protected."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/70 mt-5",
						children: "Six specialized services — each delivered with trained professionals, proper equipment, and guaranteed results."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						delay: i % 3 * .1,
						duration: .5
					},
					className: "group bg-[#0D3251] border-t-[3px] border-sky-brand p-8 sky-glow sky-glow-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl mb-4",
							children: s.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-h text-white text-xl uppercase",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/60 text-sm mt-3 leading-relaxed",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 mt-5",
							children: s.badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs bg-sky-brand/15 text-sky-brand px-2.5 py-1 border border-sky-brand/30",
								children: b
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/book",
							className: "mt-6 inline-flex items-center gap-2 text-sky-brand text-sm font-semibold group-hover:gap-3 transition-all",
							children: ["Get a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})
					]
				}, s.slug))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-caps text-sky-brand",
					children: "Our Process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-h text-deep-blue text-4xl md:text-5xl mt-3",
					children: [
						"From Booking to Spotless —",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"We Handle Everything"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-10 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-sky-brand/50" }), [
					{
						icon: "📞",
						title: "Book Your Service",
						body: "Call, WhatsApp, or fill our booking form — tell us what you need and when."
					},
					{
						icon: "📋",
						title: "We Assess & Quote",
						body: "Our team assesses your space and gives you a transparent, no-hidden-fee quote."
					},
					{
						icon: "🧹",
						title: "We Show Up & Clean",
						body: "Trained professionals arrive on time with all equipment — fully uniformed."
					},
					{
						icon: "✅",
						title: "Inspection & Handover",
						body: "We do a final walkthrough with you — not done until you're satisfied."
					}
				].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .15 },
					className: "relative text-center flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-20 rounded-full bg-sky-brand text-white flex items-center justify-center text-3xl shadow-xl shadow-sky-brand/30 relative z-10",
							children: step.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "display-h text-sky-brand text-5xl mt-3 opacity-40",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-h text-deep-blue text-lg uppercase mt-1",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-steel text-sm mt-2 max-w-[240px]",
							children: step.body
						})
					]
				}, i))]
			})]
		})
	});
}
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-sky-brand py-24 md:py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-caps text-white",
					children: "Why Choose Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-h text-white text-4xl md:text-5xl mt-3",
					children: [
						"Built for Cleanliness.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Trusted by Ogbomoso."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: [
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 26 }),
						title: "Certified Professionals",
						body: "All our cleaners are trained, vetted, and uniformed — professionals you can trust in your home or office."
					},
					{
						icon: "🪲",
						title: "Licensed Fumigation",
						body: "Our fumigation team is licensed and uses only approved, safe chemicals — effective without endangering your family."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 26 }),
						title: "Always On Time",
						body: "We respect your schedule. Our teams arrive as booked — no delays, no excuses."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 26 }),
						title: "Eco-Friendly Products",
						body: "We use cleaning agents that are tough on dirt but safe for children, pets, and the environment."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 26 }),
						title: "24/7 Availability",
						body: "Emergency cleaning needed? We're available around the clock — call or WhatsApp anytime."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { size: 26 }),
						title: "Transparent Pricing",
						body: "No hidden charges. You get a full quote before we start — what we quote is what you pay."
					}
				].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i % 3 * .1 },
					className: "bg-sky-dark/70 backdrop-blur-sm border border-white/10 p-8 hover:bg-deep-blue transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/90 text-3xl",
							children: b.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-h text-white text-xl uppercase mt-4",
							children: b.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/80 text-sm mt-3 leading-relaxed",
							children: b.body
						})
					]
				}, b.title))
			})]
		})]
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-off-white py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-caps text-sky-brand",
							children: "Our Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-h text-deep-blue text-4xl md:text-5xl mt-3",
							children: "See the Asmato Difference"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-steel mt-4",
							children: "Drag the handle. See what a proper clean looks like."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							before: before_carpet_default,
							after: after_carpet_default,
							label: "Carpet Deep Clean"
						},
						{
							before: before_floor_default,
							after: after_floor_default,
							label: "Industrial Floor"
						},
						{
							before: before_carpet_default,
							after: after_carpet_default,
							label: "Fabric Restoration"
						}
					].map((p$1, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "shadow-2xl overflow-hidden border-4 border-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, {
							itemOne: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, {
								src: p$1.before,
								alt: "Before"
							}),
							itemTwo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, {
								src: p$1.after,
								alt: "After"
							}),
							className: "h-72",
							style: { height: 288 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-deep-blue text-white p-4 flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display uppercase tracking-wide",
								children: p$1.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-brand text-xs label-caps",
								children: "Before → After"
							})]
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-deep-blue font-display text-xl md:text-2xl uppercase",
						children: "Every job looks like this when we're done."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "mt-6 inline-flex bg-sky-brand hover:bg-sky-dark text-white px-8 py-4 uppercase font-semibold tracking-wider text-sm",
						children: "Book Your Cleaning Today"
					})]
				})
			]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-deep-blue py-24 md:py-32 relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-caps text-sky-brand",
					children: "Client Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-h text-white text-4xl md:text-5xl mt-3",
					children: "What Our Clients Say About Us"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-5",
				children: [
					{
						quote: "Asmato fumigated our entire warehouse and the results were incredible. Not a single pest since. Very professional team.",
						name: "Mr. Adebayo T.",
						role: "Warehouse Owner, Ogbomoso"
					},
					{
						quote: "I called them for deep home cleaning before my daughter's naming ceremony. My house has never looked this good. Highly recommended!",
						name: "Mrs. Folake O.",
						role: "Domestic Client, Ogbomoso"
					},
					{
						quote: "Their upholstery cleaning is top-notch. They removed stains I thought were permanent. Will definitely use again.",
						name: "Pastor Emmanuel A.",
						role: "Church Admin, Ogbomoso"
					}
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .15 },
					className: "bg-[#0D3251] border-l-4 border-sky-brand p-8 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 right-6 text-sky-brand/40 font-display text-7xl leading-none",
							children: "\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/90 italic text-[15px] leading-[1.7] relative",
							children: t.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-sky-brand mt-6 mb-3",
							children: [
								0,
								1,
								2,
								3,
								4
							].map((i2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 14,
								fill: "currentColor"
							}, i2))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white font-semibold",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sky-brand text-xs",
							children: t.role
						})
					]
				}, i))
			})]
		})
	});
}
function Coverage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-caps text-sky-brand",
						children: "Where We Operate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-h text-deep-blue text-4xl md:text-5xl mt-3",
						children: [
							"Based in Ogbomoso.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Serving the Whole Region."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-4 border-sky-brand shadow-2xl overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Ogbomoso Map",
						src: "https://maps.google.com/maps?q=Ogbomoso%2C%20Oyo%20State%2C%20Nigeria&t=&z=12&ie=UTF8&iwloc=&output=embed",
						className: "w-full h-[400px] md:h-[500px]",
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-3 mt-10",
					children: [
						"Ogbomoso North",
						"Ogbomoso South",
						"Surulere LGA",
						"Ogo-Oluwa",
						"Orire LGA",
						"Surrounding Areas"
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-off-white border border-brand-border text-deep-blue px-4 py-2 text-sm font-medium",
						children: a
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-steel mt-6",
					children: [
						"Not sure if we cover your area?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappUrl("Hi Asmato, do you cover my area?"),
							className: "text-sky-brand font-semibold hover:underline",
							children: "WhatsApp us to confirm 💬"
						})
					]
				})
			]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-deep-blue overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				style: { background: "repeating-linear-gradient(135deg, transparent 0 40px, rgba(14,165,233,0.15) 40px 80px)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-2 bg-sky-brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-h text-white text-4xl md:text-6xl",
						children: [
							"Ready for a Spotlessly",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Clean Space?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/70 mt-6 max-w-xl mx-auto",
						children: "Book your service today and experience the Asmato difference. Serving Ogbomoso and beyond."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm",
							children: "Book a Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.phoneHref,
							className: "border-2 border-white/60 hover:border-sky-brand hover:text-sky-brand text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm",
							children: "Call Us Now"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-center gap-6 text-white/70 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "flex items-center gap-2 hover:text-sky-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), " Call"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl("Hello Asmato!"),
								className: "flex items-center gap-2 hover:text-sky-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }), " WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${SITE.email}`,
								className: "flex items-center gap-2 hover:text-sky-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), " Email"]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
