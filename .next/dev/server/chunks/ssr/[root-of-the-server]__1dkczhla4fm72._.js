module.exports = [
(()=>{"use strict";return[
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeoPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/page-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/seo-content.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/page-copy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGES"].map((page)=>({
            slug: page.slug
        }));
}
async function generateMetadata({ params }) {
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])((await params).slug);
    if (!page) return {};
    const { title, description } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pageSeoMeta"])(page);
    return {
        title,
        description,
        alternates: {
            canonical: `/${page.slug}`
        },
        openGraph: {
            title,
            description,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug),
            type: "website"
        }
    };
}
async function SeoPage({ params }) {
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])((await params).slug);
    if (!page) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const faqs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqsFor"])(page);
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sectionsFor"])(page);
    const { locations: locationLinks, services: serviceLinks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internalLinkGroupsFor"])(page);
    const isPillar = page.slug === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"];
    const isLocal = page.kind === "city";
    const isNational = page.kind === "national";
    const fullIntro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["introFor"])(page);
    const crumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["breadcrumbLabels"])(page);
    const imageKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug);
    const inline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(imageKey);
    const breadcrumbSchema = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
        },
        {
            "@type": "ListItem",
            position: 2,
            name: crumbs.hub,
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(crumbs.hubPath.replace(/^\//, ""))
        }
    ];
    if (isLocal) {
        breadcrumbSchema.push({
            "@type": "ListItem",
            position: 3,
            name: crumbs.current,
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug)
        });
    } else {
        breadcrumbSchema.push({
            "@type": "ListItem",
            position: 3,
            name: crumbs.current,
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug)
        });
    }
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h1For"])(page),
            serviceType: page.keyword || "spill cleanup",
            provider: {
                "@type": "Organization",
                name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
                telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"],
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
            },
            areaServed: page.area,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug),
            description: fullIntro
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbSchema
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq)=>({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.a
                    }
                }))
        }
    ];
    if (isLocal) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"],
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug),
            areaServed: {
                "@type": "City",
                name: place
            },
            description: fullIntro
        });
    }
    const kicker = isLocal ? place : page.area.replace(" (National)", "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: schemas
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "breadcrumb wrap",
                "aria-label": "Breadcrumb",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: " / "
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: crumbs.hubPath,
                        children: crumbs.hub
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: " / "
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-current": "page",
                        children: crumbs.current
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHero"], {
                slug: page.slug,
                kicker: kicker,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h1For"])(page),
                lead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroLeadFor"])(page)
                }, void 0, false, {
                    fileName: "[project]/app/[slug]/page.tsx",
                    lineNumber: 139,
                    columnNumber: 15
                }, this),
                ctaLabel: "Call now",
                imageKey: isLocal ? "hero-local" : imageKey,
                secondaryHref: isPillar ? "/services" : isLocal ? "/locations" : `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
                secondaryLabel: isPillar ? "All services" : isLocal ? "More cities" : "Emergency line"
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap article-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "article-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "intro-line",
                                children: fullIntro
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-photo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: inline.src,
                                            alt: inline.alt,
                                            fill: true,
                                            sizes: "(max-width: 900px) 100vw, 720px",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[slug]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: "figure-caption",
                                        children: [
                                            inline.caption,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "figure-credit",
                                                children: [
                                                    " (",
                                                    inline.credit,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "content-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: section.h2
                                        }, void 0, false, {
                                            fileName: "[project]/app/[slug]/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        section.paragraphs.map((para)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: para
                                            }, para.slice(0, 48), false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, section.h2, true, {
                                    fileName: "[project]/app/[slug]/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)),
                            locationLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "content-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-title__mark",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            isLocal ? "Other cities" : "Locations"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "city-grid city-grid--inline",
                                        children: locationLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    children: link.anchor
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[slug]/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            serviceLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "content-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-title__mark",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            isLocal ? `More help in ${place}` : "Related services"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "link-row",
                                        children: serviceLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    children: link.anchor
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[slug]/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "faq-block",
                                "aria-labelledby": "faq-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "faq-heading",
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-title__mark",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqHeadingFor"])(page)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-stack",
                                        children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "faq-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "faq-item__num",
                                                        "aria-hidden": "true",
                                                        children: String(i + 1).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[slug]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: faq.q
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[slug]/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: faq.a
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[slug]/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[slug]/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, faq.q, true, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "side-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Call dispatch"
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Share your location, tire size, photos, and whether you are on a highway shoulder."
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn btn-beacon btn-block",
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-label",
                                        children: "Call"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-value",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[slug]/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/page-hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2d$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hero-gallery.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function PageHero({ kicker, title, lead, ctaLabel = "Call now", secondaryHref, secondaryLabel, variant = "page", imageKey = "hero-service", slug }) {
    const mainKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2d$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroMainImageKey"])(slug, variant, imageKey);
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(mainKey);
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2d$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroTilesFor"])(slug, variant);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `runway-hero runway-hero--${variant}`,
        "aria-labelledby": "runway-hero-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "runway-hero__bg",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: photo.src,
                        alt: "",
                        fill: true,
                        priority: true,
                        sizes: "100vw",
                        className: "runway-hero__bg-img"
                    }, void 0, false, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "runway-hero__bg-shade"
                    }, void 0, false, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap runway-hero__layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "runway-hero__copy",
                        children: [
                            kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "runway-kicker",
                                children: kicker
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 45,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "runway-hero-title",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "runway-lead",
                                children: lead
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "runway-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-beacon btn-beacon--lg",
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-label",
                                                children: ctaLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-value",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    secondaryHref && secondaryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "btn btn-outline-light",
                                        href: secondaryHref,
                                        children: secondaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "runway-trust",
                                "aria-label": "Service highlights",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-trust__icon",
                                                "aria-hidden": "true",
                                                children: "◎"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            "Live dispatch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-trust__icon",
                                                "aria-hidden": "true",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            "Mobile to you"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-trust__icon",
                                                "aria-hidden": "true",
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            "Canada-wide"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "runway-mosaic",
                        "aria-label": "Related spill services",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "runway-mosaic__featured",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                        src: photo.src,
                                        alt: photo.alt,
                                        fill: true,
                                        priority: true,
                                        sizes: "(max-width: 900px) 92vw, 42vw",
                                        className: "runway-mosaic__img"
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "runway-mosaic__featured-cap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-mosaic__tag",
                                                children: variant === "home" ? "24/7 response" : "On-site cleanup"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: photo.caption
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "runway-mosaic__tiles",
                                children: tiles.map((tile)=>{
                                    const thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(tile.key);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: tile.href,
                                            className: "runway-tile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "runway-tile__thumb",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                        src: thumb.src,
                                                        alt: "",
                                                        fill: true,
                                                        sizes: "120px",
                                                        className: "runway-mosaic__img"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/page-hero.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/page-hero.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "runway-tile__label",
                                                    children: tile.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/page-hero.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/page-hero.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, tile.href + tile.key, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/page-hero.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/visuals.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/components/visuals.tsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/content-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalizeSentence",
    ()=>capitalizeSentence,
    "hashSlug",
    ()=>hashSlug,
    "pick",
    ()=>pick,
    "wordCount",
    ()=>wordCount
]);
function hashSlug(slug) {
    let h = 0;
    for(let i = 0; i < slug.length; i++)h = h * 31 + slug.charCodeAt(i) >>> 0;
    return h;
}
function pick(slug, salt, options) {
    const h = hashSlug(`${slug}:${salt}`);
    return options[h % options.length];
}
function wordCount(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}
function capitalizeSentence(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
}
}),
"[project]/lib/hero-gallery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_HOME_TILES",
    ()=>HERO_HOME_TILES,
    "heroMainImageKey",
    ()=>heroMainImageKey,
    "heroTilesFor",
    ()=>heroTilesFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
const HERO_HOME_TILES = [
    {
        key: "emergency-spill",
        href: "/emergency-spill-response",
        label: "Emergency"
    },
    {
        key: "oil-spill",
        href: "/oil-spill-cleanup",
        label: "Oil spills"
    },
    {
        key: "hazmat-waste",
        href: "/hazmat-cleanup",
        label: "Hazmat"
    },
    {
        key: "industrial-spill",
        href: "/industrial-spill-cleanup",
        label: "Industrial"
    }
];
const PAGE_TILE_PRESETS = {
    "emergency-spill-response": [
        {
            key: "hazardous-waste",
            href: "/hazardous-waste-cleanup",
            label: "Haz waste"
        },
        {
            key: "fuel-spill",
            href: "/fuel-spill-cleanup",
            label: "Fuel"
        },
        {
            key: "industrial-chemical",
            href: "/industrial-spill-cleanup",
            label: "Industrial"
        }
    ],
    "chemical-spill-cleanup": [
        {
            key: "emergency-spill",
            href: "/emergency-spill-response",
            label: "Emergency"
        },
        {
            key: "hazmat-waste",
            href: "/hazmat-cleanup",
            label: "Hazmat"
        },
        {
            key: "industrial-chemical",
            href: "/industrial-chemical-spill-cleanup",
            label: "Plant chemical"
        }
    ],
    "oil-spill-cleanup": [
        {
            key: "fuel-spill",
            href: "/fuel-spill-cleanup",
            label: "Fuel"
        },
        {
            key: "diesel-spill",
            href: "/diesel-spill-cleanup",
            label: "Diesel"
        },
        {
            key: "hydraulic-oil",
            href: "/hydraulic-oil-spill-cleanup",
            label: "Hydraulic"
        }
    ],
    "hazmat-cleanup": [
        {
            key: "emergency-spill",
            href: "/emergency-spill-response",
            label: "Emergency"
        },
        {
            key: "hazmat-waste",
            href: "/hazardous-waste-cleanup",
            label: "Haz waste"
        },
        {
            key: "chemical-spill",
            href: "/chemical-spill-cleanup",
            label: "Chemical"
        }
    ],
    "soil-remediation-services": [
        {
            key: "soil-remediation",
            href: "/contaminated-soil-removal",
            label: "Soil removal"
        },
        {
            key: "environmental",
            href: `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
            label: "Environmental"
        },
        {
            key: "industrial-chemical",
            href: "/industrial-spill-cleanup",
            label: "Industrial"
        }
    ],
    "contaminated-soil-removal": [
        {
            key: "soil-remediation",
            href: "/soil-remediation-services",
            label: "Remediation"
        },
        {
            key: "environmental",
            href: `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
            label: "Environmental"
        },
        {
            key: "emergency-spill",
            href: "/emergency-spill-response",
            label: "Emergency"
        }
    ],
    "environmental-spill-response": [
        {
            key: "emergency-spill",
            href: "/emergency-spill-response",
            label: "Emergency"
        },
        {
            key: "oil-spill",
            href: "/oil-spill-cleanup",
            label: "Oil"
        },
        {
            key: "hazmat-waste",
            href: "/hazmat-cleanup",
            label: "Hazmat"
        }
    ],
    "fuel-spill-cleanup": [
        {
            key: "gasoline-spill",
            href: "/gasoline-spill-cleanup",
            label: "Gasoline"
        },
        {
            key: "diesel-spill",
            href: "/diesel-spill-cleanup",
            label: "Diesel"
        },
        {
            key: "emergency-spill",
            href: "/emergency-spill-response",
            label: "Emergency"
        }
    ],
    "industrial-spill-cleanup": [
        {
            key: "industrial-spill",
            href: "/industrial-chemical-spill-cleanup",
            label: "Chemical plant"
        },
        {
            key: "emergency-spill",
            href: "/emergency-spill-response",
            label: "Emergency"
        },
        {
            key: "hazmat-waste",
            href: "/hazmat-cleanup",
            label: "Hazmat"
        }
    ]
};
const CITY_TILES = [
    {
        key: "emergency-spill",
        href: "/emergency-spill-response",
        label: "Emergency"
    },
    {
        key: "hazmat-waste",
        href: "/hazmat-cleanup",
        label: "Hazmat"
    },
    {
        key: "oil-spill",
        href: "/oil-spill-cleanup",
        label: "Oil"
    }
];
function heroTilesFor(slug, variant) {
    if (variant === "home") return HERO_HOME_TILES;
    if (!slug) return HERO_HOME_TILES.slice(0, 3);
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(slug);
    if (PAGE_TILE_PRESETS[base]) return PAGE_TILE_PRESETS[base];
    if (slug.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}-`)) return CITY_TILES;
    const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(slug);
    return [
        {
            key: main,
            href: `/${slug}`,
            label: "This service"
        },
        ...HERO_HOME_TILES.filter((t)=>t.key !== main).slice(0, 2)
    ];
}
function heroMainImageKey(slug, variant, fallback) {
    if (variant === "home") return "hero-home";
    if (!slug) return fallback;
    if (slug.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}-`)) return "hero-local";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(slug);
}
}),
"[project]/lib/images.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPhoto",
    ()=>getPhoto,
    "imageForServiceSlug",
    ()=>imageForServiceSlug,
    "nationalServiceImageKeys",
    ()=>nationalServiceImageKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
/** Bump when WebP files change so Next/image and browsers drop stale optimized cache. */ const IMAGE_VERSION = "4";
function imageSrc(filename) {
    return `/images/${filename}?v=${IMAGE_VERSION}`;
}
const photos = {
    "hero-home": {
        src: imageSrc("spill-hero-home.webp"),
        alt: "Rainbow oil sheen spread across an asphalt spill site",
        caption: "Oil and fuel spills—contain sheen, recover product, and protect drains.",
        credit: "Pexels"
    },
    "hero-service": {
        src: imageSrc("spill-hero-service.webp"),
        alt: "Responders in protective gear cleaning petroleum from a shoreline",
        caption: "On-water and shoreline oil response with booms and recovery gear.",
        credit: "Pexels"
    },
    "hero-local": {
        src: imageSrc("spill-hero-local.webp"),
        alt: "Gasoline and fuel rainbow sheen on pavement near a local site",
        caption: "Local teams coordinate regulators, disposal, and receptor protection.",
        credit: "Pexels"
    },
    "emergency-spill": {
        src: imageSrc("spill-emergency-spill.webp"),
        alt: "Hazmat responders securing a roadside chemical spill at night",
        caption: "Active releases—secure drains and vapour zones before cleanup starts.",
        credit: "Pexels"
    },
    "hazardous-waste": {
        src: imageSrc("spill-hazardous-waste.webp"),
        alt: "Worker in a protective suit handling a chemical container in a warehouse",
        caption: "After-hours industrial and transport spills across Canada.",
        credit: "Pexels"
    },
    "oil-spill": {
        src: imageSrc("spill-oil-spill.webp"),
        alt: "Oil sheen and debris on a polluted water surface",
        caption: "Oil spill cleanup on pads, pits, and loading docks.",
        credit: "Pexels"
    },
    "industrial-chemical": {
        src: imageSrc("spill-industrial-chemical.webp"),
        alt: "Plant workers in protective clothing near industrial smoke and vapour",
        caption: "Plant chemical spills—coordinate with production and EHS contacts.",
        credit: "Pexels"
    },
    "hazmat-waste": {
        src: imageSrc("spill-hazmat-waste.webp"),
        alt: "Responder in protective suit handling a hazardous waste container",
        caption: "Hazardous waste packaging, labelling, and manifest support.",
        credit: "Pexels"
    },
    "soil-remediation": {
        src: imageSrc("spill-soil-remediation.webp"),
        alt: "Excavator working on a soil remediation and excavation site",
        caption: "Soil remediation and delineation before excavation.",
        credit: "Pexels"
    },
    "fuel-spill": {
        src: imageSrc("spill-fuel-spill.webp"),
        alt: "Fuel storage tanks and pipelines at a refinery yard",
        caption: "Fuel and diesel spills—vapour control and product recovery.",
        credit: "Pexels"
    },
    "industrial-spill": {
        src: imageSrc("spill-industrial-spill.webp"),
        alt: "Mechanic servicing a truck in an industrial repair bay",
        caption: "Industrial spill cleanup inside busy production areas.",
        credit: "Pexels"
    },
    "chemical-spill": {
        src: imageSrc("spill-chemical-spill.webp"),
        alt: "Laboratory glassware and chemical containers on a bench",
        caption: "Chemical spill cleanup matched to SDS guidance.",
        credit: "Pexels"
    },
    environmental: {
        src: imageSrc("spill-environmental.webp"),
        alt: "Environmental cleanup equipment working on a waterway",
        caption: "Environmental spill response—document receptors and pathways.",
        credit: "Pexels"
    },
    "mercury-spill": {
        src: imageSrc("spill-mercury-spill.webp"),
        alt: "Laboratory researcher in PPE handling glass test tubes",
        caption: "Mercury spill cleanup with specialized kits and air monitoring.",
        credit: "Pexels"
    },
    "hydraulic-oil": {
        src: imageSrc("spill-hydraulic-oil.webp"),
        alt: "Technician servicing heavy equipment with hydraulic systems",
        caption: "Hydraulic oil spills in shops and on heavy equipment.",
        credit: "Pexels"
    },
    "gasoline-spill": {
        src: imageSrc("spill-gasoline-spill.webp"),
        alt: "Dark petroleum liquid pooling on an industrial surface",
        caption: "Gasoline spill cleanup at forecourts and fleet yards.",
        credit: "Pexels"
    },
    "diesel-spill": {
        src: imageSrc("spill-diesel-spill.webp"),
        alt: "Heavy-duty truck in an industrial fleet yard",
        caption: "Diesel spill cleanup on roads, yards, and parking lots.",
        credit: "Pexels"
    }
};
const NATIONAL_SLUG_IMAGE = {
    "emergency-spill-response": "emergency-spill",
    "chemical-spill-cleanup": "chemical-spill",
    "oil-spill-cleanup": "oil-spill",
    "hazmat-cleanup": "hazmat-waste",
    "soil-remediation-services": "soil-remediation",
    "contaminated-soil-removal": "environmental",
    "hazardous-waste-cleanup": "hazardous-waste",
    "industrial-spill-cleanup": "industrial-spill",
    "industrial-chemical-spill-cleanup": "industrial-chemical",
    "environmental-spill-response": "hero-service",
    "fuel-spill-cleanup": "fuel-spill",
    "gasoline-spill-cleanup": "gasoline-spill",
    "diesel-spill-cleanup": "diesel-spill",
    "hydraulic-oil-spill-cleanup": "hydraulic-oil",
    "mercury-spill-cleanup": "mercury-spill"
};
const CITY_ROTATION = [
    "soil-remediation",
    "environmental",
    "industrial-spill",
    "gasoline-spill",
    "emergency-spill"
];
function imageForServiceSlug(slug) {
    const national = NATIONAL_SLUG_IMAGE[slug];
    if (national) return national;
    if (slug.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}-`)) {
        let hash = 0;
        for(let i = 0; i < slug.length; i++)hash = (hash + slug.charCodeAt(i)) % CITY_ROTATION.length;
        return CITY_ROTATION[hash];
    }
    if (slug.includes("emergency") || slug.includes("hazmat") || slug.includes("fuel")) return "emergency-spill";
    return "hero-service";
}
function getPhoto(key) {
    return photos[key];
}
function nationalServiceImageKeys() {
    return Object.values(NATIONAL_SLUG_IMAGE);
}
}),
"[project]/lib/link-labels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageLinkLabel",
    ()=>pageLinkLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/service-labels.ts [app-rsc] (ecmascript)");
;
function pageLinkLabel(page) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLabelFromSlug"])(page.slug);
}
}),
"[project]/lib/location-facts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "factsForPage",
    ()=>factsForPage
]);
const CITY_FACTS = {
    Calgary: {
        population: "1.3M in the metro",
        landmark: "Stephen Avenue walk",
        neighbourhood: "Beltline shops and industrial bays",
        climate: "Chinook swings can stress old storefront seals after hail."
    },
    Winnipeg: {
        population: "750k metro",
        landmark: "The Exchange District",
        neighbourhood: "Portage Avenue retail and St. Boniface strips",
        climate: "Deep freezes make tempered glass failures more common in January."
    },
    Edmonton: {
        population: "1M metro",
        landmark: "Whyte Avenue",
        neighbourhood: "Ice District towers and suburban power centres",
        climate: "Dry cold plus gravel spray chips exterior glazing on plazas."
    },
    Ottawa: {
        population: "1M metro",
        landmark: "ByWard Market",
        neighbourhood: "Sparks Street corridors and Kanata business parks",
        climate: "Freeze-thaw cycles loosen door closers on aluminum entries."
    },
    Montreal: {
        population: "4M metro",
        landmark: "Saint-Laurent Boulevard",
        neighbourhood: "Plateau boutiques and Griffintown lofts",
        climate: "Heavy snow loads on awnings sometimes snap adjacent glass."
    },
    Laval: {
        population: "440k city",
        landmark: "Carrefour Laval retail ring",
        neighbourhood: "Chomedey plazas and industrial flex space",
        climate: "Lake-effect gusts hit corner units on exposed boulevards."
    },
    Hamilton: {
        population: "770k metro",
        landmark: "James Street North",
        neighbourhood: "Ancaster power centres and waterfront conversions",
        climate: "Escarpment winds drive debris into low-rise storefronts."
    },
    "St Catharines": {
        population: "140k city",
        landmark: "Port Dalhousie waterfront",
        neighbourhood: "Glendale retail and QEW corridor plazas",
        climate: "Lake Ontario squalls stress older single-pane units."
    },
    Markham: {
        population: "340k city",
        landmark: "Pacific Mall district",
        neighbourhood: "Downtown Markham towers and Highway 7 retail",
        climate: "Busy parking lots mean more vehicle contact with curbside glass."
    },
    "North York": {
        population: "Toronto district",
        landmark: "Yonge and Sheppard cluster",
        neighbourhood: "Finch corridor shops and office podiums",
        climate: "High-rise wind tunnels crack spandrel panels near transit hubs."
    },
    "London, Ontario": {
        population: "430k metro",
        landmark: "Richmond Row",
        neighbourhood: "Masonville retail and industrial parks",
        climate: "Spring thunderstorms bring flying branches into corner windows."
    },
    "Surrey, BC": {
        population: "620k city",
        landmark: "City Centre SkyTrain hub",
        neighbourhood: "Whalley storefronts and South Surrey strip malls",
        climate: "Coastal moisture swells door frames if sealant is aged."
    },
    Mississauga: {
        population: "770k city",
        landmark: "Square One district",
        neighbourhood: "Airport corporate parks and Erin Mills plazas",
        climate: "Gusts off the lake hit east-facing curtain walls."
    },
    Toronto: {
        population: "6.7M metro",
        landmark: "Queen Street West",
        neighbourhood: "Financial core towers and neighbourhood main streets",
        climate: "Dense sidewalks mean vandalism and impact calls spike overnight."
    },
    Halifax: {
        population: "480k metro",
        landmark: "Barrington Street",
        neighbourhood: "Dartmouth crossings and Bayers Lake retail",
        climate: "Nor'easters hurl salt and grit into harbor-facing glass."
    },
    Regina: {
        population: "260k metro",
        landmark: "Victoria Avenue",
        neighbourhood: "East end plazas and warehouse showrooms",
        climate: "Flat prairie wind drives gravel into low commercial glazing."
    },
    Vancouver: {
        population: "2.6M metro",
        landmark: "Gastown heritage fronts",
        neighbourhood: "Broadway medical rows and Marine Drive shops",
        climate: "Seismic codes matter when replacing large tempered panels."
    },
    Vaughan: {
        population: "330k city",
        landmark: "Vaughan Mills corridor",
        neighbourhood: "Maple main street and industrial flex near the 400",
        climate: "Truck traffic vibrates older aluminum storefront systems."
    },
    Etobicoke: {
        population: "Toronto district",
        landmark: "The Kingsway village",
        neighbourhood: "Islington Village and Queensway plazas",
        climate: "Lake breezes corrode exterior door hardware faster near the water."
    },
    Barrie: {
        population: "150k city",
        landmark: "Downtown Dunlop Street",
        neighbourhood: "Big Box strips on Mapleview and industrial bays",
        climate: "Snowplow spray chips glazing on plaza entries each winter."
    },
    Woodbridge: {
        population: "Vaughan community",
        landmark: "Woodbridge Avenue shops",
        neighbourhood: "Highway 7 retail and auto row glass fronts",
        climate: "Loading bays see forklift strikes on door glass weekly."
    },
    Thornhill: {
        population: "Markham/Vaughan border",
        landmark: "Yonge Street strip",
        neighbourhood: "Promenade-adjacent plazas and medical offices",
        climate: "Busy arterials mean more after-hours board-up requests."
    },
    Abbotsford: {
        population: "160k city",
        landmark: "Historic downtown Montrose",
        neighbourhood: "Sumas Way retail and airport road warehouses",
        climate: "Valley fog plus frost cycles fog insulated glass units."
    }
};
const AREA_ALIASES = {
    "London Ontario": "London, Ontario",
    "Surrey BC": "Surrey, BC"
};
function factsForPage(area, kind) {
    if (kind !== "city") return undefined;
    const key = AREA_ALIASES[area] ?? area;
    return CITY_FACTS[key];
}
}),
"[project]/lib/locations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cityLocationEntries",
    ()=>cityLocationEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
function cityLocationEntries() {
    const byArea = new Map();
    for (const page of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"]){
        if (byArea.has(page.area)) continue;
        const pillarCity = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].find((p)=>p.area === page.area && p.slug.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}-`));
        const target = pillarCity ?? page;
        byArea.set(page.area, {
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(target),
            href: `/${target.slug}`
        });
    }
    return [
        ...byArea.values()
    ].sort((a, b)=>a.name.localeCompare(b.name));
}
}),
"[project]/lib/page-copy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "breadcrumbLabels",
    ()=>breadcrumbLabels,
    "faqHeadingFor",
    ()=>faqHeadingFor,
    "faqsFor",
    ()=>faqsFor,
    "h1For",
    ()=>h1For,
    "heroLeadFor",
    ()=>heroLeadFor,
    "introFor",
    ()=>introFor,
    "sectionsFor",
    ()=>sectionsFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/location-facts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/service-labels.ts [app-rsc] (ecmascript)");
;
;
;
;
function isUrgent(page) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    return base.includes("emergency") || base.includes("spill") || base.includes("hazmat") || base === "environmental-spill-response";
}
function wordTarget(page) {
    if (page.kind === "national") return 800;
    if (isUrgent(page)) return 500;
    return 400;
}
function keywordPhrase(page) {
    return page.keyword.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLabelFromSlug"])(page.slug).toLowerCase();
}
function h1For(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    if (page.kind === "city") return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} in ${place}`;
    if (page.kind === "national") return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} in Canada`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw);
}
const serviceHooks = {
    "emergency-spill-response": [
        "Active releases need containment before they reach drains, soil, or storm sewers.",
        "Emergency dispatch prioritizes volume, product SDS, and whether vapours are present."
    ],
    "chemical-spill-cleanup": [
        "Chemical spills need compatible absorbents and PPE matched to the SDS.",
        "We isolate the area, label waste, and document chain-of-custody for disposal."
    ],
    "oil-spill-cleanup": [
        "Oil on concrete, gravel, or soil needs different recovery methods—photos help us stage.",
        "We recover free product, treat stained media, and advise on reporting thresholds."
    ],
    "hazmat-cleanup": [
        "Hazmat calls require trained responders, air monitoring, and decon plans.",
        "Tell us UN numbers, container size, and whether the release is still flowing."
    ],
    "soil-remediation-services": [
        "Soil remediation starts with delineation—how deep and how far the plume travelled.",
        "We coordinate sampling, excavation, and off-site disposal with your environmental consultant."
    ],
    "contaminated-soil-removal": [
        "Excavation schedules depend on utilities, frost, and disposal facility acceptance.",
        "We profile soil, load out, and leave a clean confirmation for your records."
    ],
    "hazardous-waste-cleanup": [
        "Hazardous waste must be packaged, labelled, and manifested before it leaves site.",
        "Mixed wastes need segregation—describe every container when you call."
    ],
    "industrial-spill-cleanup": [
        "Plant spills often involve forklifts, pits, and busy aisles—access maps speed setup.",
        "We work around production windows when a full shutdown is not possible."
    ],
    "industrial-chemical-spill-cleanup": [
        "Bench and bulk chemical spills in plants need neutralization or absorption per SDS.",
        "We coordinate with your EHS lead and lock out adjacent equipment when needed."
    ],
    "environmental-spill-response": [
        "Environmental spill response covers soil, water, and air pathways—not just the puddle you see.",
        "We document receptors nearby: creeks, catch basins, and neighbouring properties."
    ],
    "fuel-spill-cleanup": [
        "Fuel spreads fast on asphalt—containments and vapour control come first.",
        "Gasoline and diesel need different absorbents; say which product and how much."
    ],
    "gasoline-spill-cleanup": [
        "Gasoline vapours are flammable—evacuate the area and kill ignition sources before we arrive.",
        "We use conductive tools and grounded recovery where static is a risk."
    ],
    "diesel-spill-cleanup": [
        "Diesel soaks into porous asphalt—expect recovery plus media replacement options.",
        "Winter cold affects viscosity—mention if product is gelled or on ice."
    ],
    "hydraulic-oil-spill-cleanup": [
        "Hydraulic oil on shop floors is a slip and environmental hazard—note nearby drains.",
        "We recover oil and clean residues so regulators see a completed response."
    ],
    "mercury-spill-cleanup": [
        "Mercury demands specialized kits—do not vacuum or wash into drains.",
        "Small bead releases still need air monitoring and proper amalgam waste handling."
    ]
};
function hookFor(page) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    const hooks = serviceHooks[base] ?? [
        "Commercial spill work needs straight talk on timing, security, and code—not a vague callback window.",
        "We explain what we can do tonight versus what waits on a measured order."
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "hook", hooks);
}
function localDemographicsSentence(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factsForPage"])(page.area, "city");
    if (!f) return `In ${place}, loading zones and yard parking rules shape how fast we can stage spill and drain hardware.`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "demo", [
        `${place} (${f.population}) mixes high-footfall strips such as ${f.neighbourhood} with landmark retail near ${f.landmark}.`,
        `Dispatch for ${place}—about ${f.population}—often stages trucks along ${f.neighbourhood} before rolling to sites by ${f.landmark}.`,
        `Property managers in ${place} (${f.population}) know ${f.landmark}; our crews plan parking around ${f.neighbourhood} yards.`
    ]);
}
function localClimateSentence(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factsForPage"])(page.area, "city");
    if (!f) return `Seasonal weather in ${place} can stress older tank seals—mention recent storms when you call.`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "climate", [
        `Local climate note for ${place}: ${f.climate}`,
        `Around ${f.landmark}, ${f.climate.toLowerCase()}`,
        `${place} weather patterns matter—${f.climate}`
    ]);
}
const closings = [
    `Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} with the address, photos of the break, and whether the spill zone is exposed to weather.`,
    `Reach us at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}—tell us if you need on-site tonight and permanent spill later.`,
    `Dial ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} for a clear timeline on security, measurement, and install.`
];
function introFor(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const parts = [];
    parts.push(hookFor(page));
    if (page.kind === "national") {
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "nat1", [
            `This page is for anyone searching ${kw} across Canada—drivers, fleets, and owner-operators, and fleet managers with a broken spill zone.`,
            `We coordinate ${kw} from coast to coast, pairing emergency on-site with proper spill orders.`,
            `National ${kw} routing covers every province—share your postal code so we assign the nearest metro crew.`
        ]));
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "nat2", [
            `Canadian winters, vandalism, and vehicle strikes all show up on our dispatch board—tell us which scenario you are in.`,
            `Ceiling height, drain hardware, and whether the berm is correct size and load rating help us quote accurately.`,
            `Franchise and multi-site managers use this line for ${kw}—note brand standards if fleet numbering or DOT stickers matter.`
        ]));
        if (page.volume) {
            parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "vol", [
                `Search demand for ${kw} stays high year-round—volume in the hundreds of monthly lookups reflects how often fleets fail without warning.`,
                `When ${kw} spikes after holidays, early calls secure on-site slots before supplier queues grow.`
            ]));
        }
    } else if (page.kind === "city") {
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "city-book", [
            `You are booking ${kw} in ${place}—crews know local parking bylaws and after-hours access for yards.`,
            `This ${kw} visit in ${place} often means securing a corner unit before morning foot traffic.`
        ]));
        parts.push(localDemographicsSentence(page));
        parts.push(localClimateSentence(page));
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "city-extra", [
            `If the break is on a drain with manifest paperwork spec, mention it—we bring torque sticks when needed.`,
            `Photos of the spill size stamping and any remaining debris help us order the right thickness.`,
            `Night calls in ${place} need a site contact with keys—security desks at ${place} towers often require COI paperwork.`
        ]));
    }
    if (page.secondary.length) {
        parts.push(`Related searches such as ${page.secondary[0]} are handled on the same line.`);
    }
    parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "close", closings));
    let text = parts.join(" ");
    const fillers = [
        ` We document measurements, on-site method, and install date in plain language.`,
        ` If you are unsure whether you need repair or full replacement, describe the crack pattern when you call.`,
        ` Insurance claims move faster when you have timestamps and photos—we can note them on the work order.`
    ];
    let i = 0;
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(text) < 80 && i < fillers.length){
        text += fillers[i++] ?? "";
    }
    return text;
}
function extraParagraph(page, salt) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, salt, [
        `Before we arrive for ${kw}, clear flat spill only if it is safe—leave sharp shards for the crew when possible.`,
        `Photos of the full spill zone from inside and outside help when ${place} addresses share a yard sign.`,
        `If you are leasing in ${place || "Canada"}, notify your landlord—many require approved vendors for fleet work.`,
        `Keep customers away from hanging spill—rated spillls can collapse without warning.`,
        `Winter storms in Canada push more on-site calls; mention if heat is off in the space overnight.`
    ]);
}
function padSections(page, sections, intro) {
    const target = wordTarget(page);
    const out = sections.map((s)=>({
            ...s,
            paragraphs: [
                ...s.paragraphs
            ]
        }));
    let total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(intro) + out.reduce((n, s)=>n + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(s.paragraphs.join(" ")), 0);
    let salt = 0;
    while(total < target && salt < 60){
        const idx = salt % out.length;
        out[idx].paragraphs.push(extraParagraph(page, `pad-${salt}`));
        total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(intro) + out.reduce((n, s)=>n + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(s.paragraphs.join(" ")), 0);
        salt++;
    }
    return out;
}
function sectionsFor(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const kw = keywordPhrase(page);
    const intro = introFor(page);
    const sections = [];
    if (page.kind === "city") {
        sections.push({
            h2: `Why ${place} fleets need a local plan for ${kw}`,
            paragraphs: [
                localDemographicsSentence(page),
                localClimateSentence(page),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "local2", [
                    `Plaza landlords often require COI and after-hours rules—share contact info for security or property management.`,
                    `Corner units see more wind-driven debris; mention exposure when you book ${kw}.`,
                    `Alley deliveries in ${place} can block shoulder space—tell us if the spill zone faces a laneway.`
                ])
            ]
        });
    } else {
        sections.push({
            h2: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} routes we run weekly`,
            paragraphs: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "routes1", [
                    `Dispatch groups ${kw} by metro so measurement and install crews are not crossing provinces unnecessarily.`,
                    `We batch ${kw} on-sites at night when retail strips are quiet and parking is available.`
                ]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "routes2", [
                    `Holiday weekends spike break-in calls for ${kw}—book security spill or overpack drum if you are closed several days.`,
                    `Construction sites nearby sometimes vibrate older tank seals—mention recent work next drain.`
                ])
            ]
        });
        sections.push({
            h2: `How ${kw} works in Canada`,
            paragraphs: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "how1", [
                    `Safety spill markings, wind load, and local bylaws matter—we confirm before ordering custom rated sheets.`,
                    `Property managers often need photos for insurance—we provide them after on-site and after install.`
                ]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "how2", [
                    `We do not remove the last stable berm without a plan to secure the spill zone the same day.`,
                    `If replacement makes more sense than a risky repair, we say so before you pay for a short-term fix.`
                ])
            ]
        });
    }
    if (isUrgent(page)) {
        sections.push({
            h2: "When to call immediately",
            paragraphs: [
                `A shredded spill, exposed spill zones to weather, or a containment area about to come loose are urgent—say so on ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`,
                `If anyone is injured, seek medical help first, then cordon off the area until the spill zone is secured.`
            ]
        });
    }
    sections.push({
        h2: "What to tell us on the phone",
        paragraphs: [
            `Street address, unit or suite, ${kw} needs, and whether you need on-site before you drive on a damaged spill.`,
            `Access notes for ${place || "your yard"}—loading docks, elevator sizes, and security codes all affect routing.`
        ]
    });
    sections.push({
        h2: "On site",
        paragraphs: [
            `We remove loose shards safely, berm and vacuum temporarily, and measure for ${kw} where permanent spill is required.`,
            `You get a verbal summary suitable for insurers, landlords, or fleet compliance teams.`
        ]
    });
    sections.push({
        h2: "After the visit",
        paragraphs: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "after1", [
                `We confirm lead time on rated orders and whether heat-soak or all-season spill is required.`,
                `If you need a different service in ${place || "Canada"}, ask on the call—we can often combine drain and window work.`
            ]),
            extraParagraph(page, "after2")
        ]
    });
    return padSections(page, sections, intro);
}
function faqsFor(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const areaLabel = place || "Canada";
    const base = [
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq1", [
                `How much does ${kw} cost in ${areaLabel}?`,
                `What affects the price of ${kw} in ${areaLabel}?`,
                `Is ${kw} in ${areaLabel} priced per spill or per spill zone?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa1", [
                `Price depends on spill type, size, access, and whether on-site is needed tonight. Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} with photos for a range before we book.`,
                `We do not publish one national price because drain hardware and rated thickness vary. ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} outlines typical costs for ${areaLabel}.`
            ])
        },
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq2", [
                `How soon can you do ${kw} in ${areaLabel}?`,
                `What is the lead time for ${kw} near ${areaLabel}?`,
                `Can you prioritize ${kw} if the spill zone is exposed in ${areaLabel}?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa2", [
                `Board-up can often happen the same night; custom spill depends on supplier lead times. Share urgency when you dial ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`,
                `Exposed spill zones and security risks move you up the queue—say so clearly when you call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`
            ])
        },
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq3", [
                `Do I need to be on site for ${kw} in ${areaLabel}?`,
                `Can you work with my property manager for ${kw} in ${areaLabel}?`,
                `What should I prepare before ${kw} in ${areaLabel}?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa3", [
                `Someone with keys and authority to approve on-site saves time. If you are remote, send a site contact—call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} either way.`,
                `Clear a path to the spill zone and note ceiling height limits for long spillls.`
            ])
        },
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq4", [
                `Is ${kw} in ${areaLabel} the same line as the rest of Canada?`,
                `Does this page change the phone number for ${kw}?`,
                `Can I book ${kw} for a fleet location in ${areaLabel}?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa4", [
                `Yes—${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} is the same nationwide. This page adds local context for ${areaLabel}.`,
                `Franchise and multi-site managers can book; tell us brand standards if spill tint or logo placement matters.`
            ])
        }
    ];
    if (page.kind === "city") {
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factsForPage"])(page.area, "city");
        if (f) {
            base.push({
                q: `Does weather around ${f.landmark} affect spills on Canadian roads?`,
                a: `Yes—${f.climate} Mention recent storms or vandalism when you call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`
            });
        }
    }
    return base.slice(0, Math.max(3, 4 + page.id % 2));
}
function faqHeadingFor(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    if (page.kind === "city") return `FAQs about ${keywordPhrase(page)} in ${place}`;
    return `FAQs about ${keywordPhrase(page)} in Canada`;
}
function heroLeadFor(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    if (page.kind === "city") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "hero-lead", [
            `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} in ${place}—on-site tonight, proper spill when the spilll is ready.`,
            `Broken spill zone in ${place}? We secure the site first, then order correct size and load rating ${kw} spill.`,
            `${place} crews for ${kw}: photos, access notes, and manifest paperwork spec details speed dispatch.`
        ]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "hero-lead", [
        `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} across Canada—retail, restaurants, and offices on one emergency line.`,
        `National ${kw}: security first, then field measurements for code-compliant replacement spill.`,
        `From coast to coast, ${kw} dispatch pairs spare containment area or plug kit with permanent berms.`
    ]);
}
function breadcrumbLabels(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const kw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(keywordPhrase(page));
    if (page.kind === "national") {
        return {
            hub: "Services",
            hubPath: "/services",
            parent: null,
            current: `${kw} Canada`
        };
    }
    return {
        hub: "Cities",
        hubPath: "/locations",
        parent: place,
        current: `${kw} ${place}`
    };
}
}),
"[project]/lib/seo-content.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allSlugsLinkedFromPillar",
    ()=>allSlugsLinkedFromPillar,
    "internalLinkGroupsFor",
    ()=>internalLinkGroupsFor,
    "internalLinksFor",
    ()=>internalLinksFor,
    "isCityPageSlug",
    ()=>isCityPageSlug,
    "pageSeoMeta",
    ()=>pageSeoMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/link-labels.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/page-copy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/seo-meta.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const CITY_SERVICE_SLUGS = [
    "emergency-spill-response",
    "hazmat-cleanup",
    "oil-spill-cleanup",
    "chemical-spill-cleanup",
    "fuel-spill-cleanup",
    "industrial-spill-cleanup"
];
const citySlugSet = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].map((p)=>p.slug));
function metroHubFor(area) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].find((p)=>p.area === area && p.slug.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}-`));
}
function metroLinksFromPages(pages) {
    const byArea = new Map();
    for (const p of pages){
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(p);
        if (byArea.has(name)) continue;
        const hub = metroHubFor(p.area) ?? p;
        byArea.set(name, {
            href: `/${hub.slug}`,
            anchor: name
        });
    }
    return [
        ...byArea.values()
    ].sort((a, b)=>a.anchor.localeCompare(b.anchor));
}
function pickMetroLinks(page, min, max, pool) {
    const metros = metroLinksFromPages(pool ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"]);
    if (!metros.length) return [];
    const span = max - min + 1;
    const count = Math.min(min + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % span, metros.length);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(`${page.slug}:cities`) % metros.length;
    const out = [];
    for(let i = 0; i < count; i++){
        out.push(metros[(start + i) % metros.length]);
    }
    return out;
}
function pushLinks(links, seen, batch) {
    for (const link of batch){
        if (seen.has(link.href)) continue;
        seen.add(link.href);
        links.push(link);
    }
}
function isPriorityNational(page) {
    if (page.kind !== "national") return false;
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    return base === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"] || base.includes("emergency") || base.includes("hazmat") || base.includes("fuel") || base.includes("industrial");
}
function internalLinksFor(page) {
    const { locations, services } = internalLinkGroupsFor(page);
    return [
        ...locations,
        ...services
    ];
}
function internalLinkGroupsFor(page) {
    const locations = [];
    const services = [];
    const seenLoc = new Set();
    const seenSvc = new Set();
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    const pillar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]);
    const emergency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])("emergency-spill-response");
    const hazmat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])("hazmat-cleanup");
    const addService = (target, anchor)=>{
        if (!target) return;
        const href = `/${target.slug}`;
        if (href === `/${page.slug}` || seenSvc.has(href)) return;
        seenSvc.add(href);
        services.push({
            href,
            anchor: anchor ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(target)
        });
    };
    if (page.kind === "national") {
        if (page.slug !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]) {
            addService(pillar, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(pillar));
        }
        if (base === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]) {
            pushLinks(locations, seenLoc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cityLocationEntries"])().map((c)=>({
                    href: c.href,
                    anchor: c.name
                })));
        } else if (isPriorityNational(page)) {
            pushLinks(locations, seenLoc, pickMetroLinks(page, 2, 5));
        } else {
            pushLinks(locations, seenLoc, pickMetroLinks(page, 2, 4));
        }
        if (emergency && page.slug !== "emergency-spill-response") addService(emergency);
        if (hazmat && page.slug !== "hazmat-cleanup") addService(hazmat);
        const siblings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NATIONAL_PAGES"].filter((p)=>p.slug !== page.slug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(p.slug) !== base);
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % Math.max(1, siblings.length);
        for (const s of siblings.slice(start, start + 3))addService(s);
        return {
            locations,
            services
        };
    }
    if (page.kind === "city") {
        const localHub = metroHubFor(page.area);
        if (localHub && localHub.slug !== page.slug) {
            addService(localHub, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(localHub));
        } else {
            addService(pillar, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(pillar));
        }
        const localServices = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].filter((p)=>p.area === page.area && p.slug !== page.slug);
        const localStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % Math.max(1, localServices.length);
        for (const s of localServices.slice(localStart, localStart + 4)){
            const href = `/${s.slug}`;
            if (href === `/${page.slug}` || seenSvc.has(href)) continue;
            seenSvc.add(href);
            services.push({
                href,
                anchor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(s)
            });
        }
        const serviceStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % CITY_SERVICE_SLUGS.length;
        for(let i = 0; i < 3; i++){
            const slug = CITY_SERVICE_SLUGS[(serviceStart + i) % CITY_SERVICE_SLUGS.length];
            addService((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])(slug));
        }
        addService(emergency);
        pushLinks(locations, seenLoc, pickMetroLinks(page, 3, 3, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].filter((c)=>c.area !== page.area)));
        return {
            locations,
            services
        };
    }
    addService(pillar);
    return {
        locations,
        services
    };
}
function pageSeoMeta(page) {
    const intro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["introFor"])(page);
    return {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["metaTitleFor"])(page),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["metaDescriptionFor"])(page, intro, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"])
    };
}
function allSlugsLinkedFromPillar() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGES"].map((p)=>p.slug);
}
function isCityPageSlug(slug) {
    return citySlugSet.has(slug);
}
}),
"[project]/lib/seo-meta.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metaDescriptionFor",
    ()=>metaDescriptionFor,
    "metaTitleFor",
    ()=>metaTitleFor,
    "trimDescription",
    ()=>trimDescription,
    "trimTitle",
    ()=>trimTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
function trimTitle(title, min = 50, max = 60) {
    let t = title.trim();
    if (t.length > max) {
        const cut = t.slice(0, max - 1);
        const lastSpace = cut.lastIndexOf(" ");
        t = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
    }
    if (t.length < min && t.length + 3 <= max) {
        t = `${t} | CA`;
    }
    return t;
}
function trimDescription(text, min = 150, max = 160) {
    let clean = text.replace(/\s+/g, " ").trim();
    const suffix = " Call now for emergency spill response and hazmat cleanup.";
    if (clean.length < min) {
        clean = `${clean}${clean.endsWith(".") ? "" : "."}${suffix}`;
    }
    if (clean.length > max) {
        const cut = clean.slice(0, max - 1);
        const lastSpace = cut.lastIndexOf(" ");
        clean = (lastSpace >= min ? cut.slice(0, lastSpace) : cut).trim() + "…";
    }
    return clean.slice(0, max);
}
function titleCaseKeyword(keyword) {
    return keyword.trim().replace(/\b\w/g, (c)=>c.toUpperCase());
}
function metaTitleFor(page) {
    const kw = titleCaseKeyword(page.keyword || page.slug.replace(/-/g, " "));
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    let title;
    if (page.kind === "city") {
        title = `${kw} ${place} | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`;
    } else {
        title = `${kw} Canada | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`;
    }
    return trimTitle(title);
}
function metaDescriptionFor(page, introLead, phone) {
    const kw = page.keyword.trim();
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const cta = `Call ${phone} now.`;
    const variants = [
        `${kw} in ${place || "Canada"}—containment, recovery, and disposal support. ${cta}`,
        `Need ${kw}${place ? ` in ${place}` : " across Canada"}? Share location, product, volume, and photos to dispatch. ${cta}`,
        `${titleCaseKeyword(kw)}${place ? ` near ${place}` : ""}. Industrial and fuel releases need fast berming—call early. ${cta}`,
        `Trusted ${kw} help${place ? ` for ${place}` : ""}. We secure drains and document waste before cleanup finishes. ${cta}`
    ];
    const chosen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "meta", variants);
    const introSnippet = introLead.split(/\s+/).slice(0, 22).join(" ");
    const blended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(chosen) < 18 ? `${introSnippet}. ${cta}` : chosen;
    return trimDescription(blended);
}
;
}),
"[project]/lib/service-labels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SERVICE_LABELS",
    ()=>SERVICE_LABELS,
    "serviceLabelFromSlug",
    ()=>serviceLabelFromSlug
]);
const SERVICE_LABELS = {
    "emergency-spill-response": "Emergency spill response",
    "chemical-spill-cleanup": "Chemical spill cleanup",
    "oil-spill-cleanup": "Oil spill cleanup",
    "hazmat-cleanup": "Hazmat cleanup",
    "soil-remediation-services": "Soil remediation services",
    "contaminated-soil-removal": "Contaminated soil removal",
    "hazardous-waste-cleanup": "Hazardous waste cleanup",
    "industrial-spill-cleanup": "Industrial spill cleanup",
    "industrial-chemical-spill-cleanup": "Industrial chemical spill cleanup",
    "environmental-spill-response": "Environmental spill response",
    "fuel-spill-cleanup": "Fuel spill cleanup",
    "gasoline-spill-cleanup": "Gasoline spill cleanup",
    "diesel-spill-cleanup": "Diesel spill cleanup",
    "hydraulic-oil-spill-cleanup": "Hydraulic oil spill cleanup",
    "mercury-spill-cleanup": "Mercury spill cleanup"
};
const CITY_SUFFIXES = [
    "calgary",
    "winnipeg",
    "edmonton",
    "ottawa",
    "montreal",
    "laval",
    "hamilton",
    "st-catharines",
    "markham",
    "north-york",
    "london-ontario",
    "surrey-bc",
    "mississauga",
    "toronto",
    "halifax",
    "regina",
    "vancouver",
    "vaughan",
    "etobicoke",
    "barrie",
    "woodbridge",
    "thornhill",
    "abbotsford"
];
function serviceLabelFromSlug(slug) {
    let base = slug;
    for (const city of CITY_SUFFIXES){
        if (base.endsWith(`-${city}`)) {
            base = base.slice(0, -(city.length + 1));
            break;
        }
    }
    return SERVICE_LABELS[base] ?? base.replace(/-/g, " ");
}
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dkczhla4fm72._.js.map