import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bnm1MpQ5.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BR0qDLnF.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-deep-blue px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-8xl font-display font-bold text-sky-brand",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-display uppercase tracking-wide text-white",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex bg-sky-brand hover:bg-sky-dark text-white px-6 py-3 font-semibold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-deep-blue px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-display uppercase text-white",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "bg-sky-brand hover:bg-sky-dark text-white px-4 py-2 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "border border-white/40 text-white px-4 py-2 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Asmato Laundry & Cleaning Services — Ogbomoso, Nigeria" },
			{
				name: "description",
				content: "Professional commercial, industrial, window, upholstery, domestic cleaning and licensed fumigation services in Ogbomoso, Oyo State. Trained teams, guaranteed results."
			},
			{
				name: "author",
				content: "Asmato Laundry and Cleaning Services"
			},
			{
				property: "og:title",
				content: "Asmato Laundry & Cleaning Services — Ogbomoso"
			},
			{
				property: "og:description",
				content: "Industrial-grade cleaning and fumigation for homes, offices, and businesses across Ogbomoso."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./services-V1Ac8VwB.mjs");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Our Services — Asmato Cleaning & Fumigation" }, {
		name: "description",
		content: "Commercial, industrial, window, upholstery, domestic cleaning and licensed fumigation services in Ogbomoso, Nigeria."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-BQLDZrPa.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Asmato — Cleaning & Fumigation in Ogbomoso" }, {
		name: "description",
		content: "Call, WhatsApp, email or visit Asmato Laundry and Cleaning Services in Ogbomoso, Oyo State."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./book-kKdOj9R6.mjs");
var Route$2 = createFileRoute("/book")({
	head: () => ({ meta: [{ title: "Book a Service — Asmato Cleaning & Fumigation" }, {
		name: "description",
		content: "Book professional cleaning or fumigation services in Ogbomoso. Fill the form and we'll confirm within 2 hours."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-C-xdbJMU.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Asmato — Cleaning Ogbomoso, One Space at a Time" }, {
		name: "description",
		content: "Learn about Asmato Laundry and Cleaning Services — the story, mission, values and team behind Ogbomoso's most trusted cleaning company."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BqqxRT75.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Asmato Cleaning & Fumigation — Ogbomoso, Nigeria" }, {
		name: "description",
		content: "Ogbomoso's most trusted cleaning and fumigation team. Commercial, industrial, window, upholstery, domestic cleaning and licensed fumigation."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var BookRoute = Route$2.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	BookRoute,
	ContactRoute,
	ServicesRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
