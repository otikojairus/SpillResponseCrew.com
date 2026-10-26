module.exports = [
(()=>{"use strict";return[
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/page-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/photo-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/link-labels.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/seo-meta.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
const metadata = {
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimTitle"])(`Canada Spill Cleanup | 24/7 Response`),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimDescription"])(`Fuel, chemical, or oil release? Emergency spill response, hazmat cleanup, and soil remediation across Canada. Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} any time.`),
    alternates: {
        canonical: "/"
    }
};
const homeFaqs = [
    {
        q: "Do you respond to active leaks and historical contamination?",
        a: "Yes—emergency releases get containment first; remediation projects are scoped after delineation. Share whether product is still flowing when you call."
    },
    {
        q: "Which cities do you cover?",
        a: "Major metros from Toronto and Vancouver to Calgary and Halifax. Open the Cities page or call " + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"] + " with your site address."
    },
    {
        q: "What should I send when I call?",
        a: "GPS or street address, product type, estimated volume, photos, SDS if available, and nearest storm drain or waterway."
    }
];
const featured = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NATIONAL_PAGES"].filter((p)=>p.slug === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"] || p.priority === "High" || p.priority === "Top Priority").slice(0, 6);
function HomePage() {
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cityLocationEntries"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: [
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(),
                        telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"],
                        areaServed: "Canada"
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: homeFaqs.map((faq)=>({
                                "@type": "Question",
                                name: faq.q,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.a
                                }
                            }))
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHero"], {
                variant: "home",
                kicker: "Canada · 24/7",
                title: "Spill on site? Contain it before it spreads.",
                lead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Fuel, chemical, oil, and hazmat releases—we dispatch trained crews for emergency spill response, industrial cleanup, and soil remediation across Canada."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this),
                ctaLabel: "Call now",
                secondaryHref: "/locations",
                secondaryLabel: "Pick your city"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel panel--ice",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-title__mark",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                "What we handle"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: "Start with the closest service. If you need emergency response plus soil remediation, mention both on the same call."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "tile-grid",
                            children: [
                                featured.map((page)=>{
                                    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhotoCard"], {
                                            href: `/${page.slug}`,
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(page),
                                            subtitle: photo.caption,
                                            imageKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    }, page.slug, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhotoCard"], {
                                        href: "/services",
                                        title: "All services",
                                        subtitle: "Full list",
                                        imageKey: "hero-service"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-title__mark",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                "Locations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: "Pick your city for local dispatch notes and a direct line to help."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "city-grid",
                            children: [
                                cities.slice(0, 12).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: c.href,
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    }, c.href, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/locations",
                                        children: "All cities"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel panel--ice",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaqSection"], {
                        title: "Quick answers",
                        items: homeFaqs
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/faq-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function FaqSection({ title, id = "faq-heading", items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq-block",
        "aria-labelledby": id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: id,
                className: "section-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "section-title__mark",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/components/faq-section.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-stack",
                children: items.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "faq-item__num",
                                "aria-hidden": "true",
                                children: String(i + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, faq.q, true, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/faq-section.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/faq-section.tsx",
        lineNumber: 12,
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
"[project]/components/photo-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoCard",
    ()=>PhotoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
;
;
;
;
function PhotoCard({ href, title, subtitle, imageKey }) {
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(imageKey);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "lane-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lane-card__media",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: photo.src,
                        alt: photo.alt,
                        fill: true,
                        sizes: "(max-width: 700px) 100vw, 33vw",
                        className: "lane-card__img"
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__shine",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/photo-card.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lane-card__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__sub",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 23,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__arrow",
                        "aria-hidden": "true",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/photo-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/photo-card.tsx",
        lineNumber: 16,
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
/** Paths must not include search params — Next.js 16 `images.localPatterns` blocks unknown `?v=` on `next/image`. */ function imageSrc(filename) {
    return `/images/${filename}`;
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
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0msyp2i98wyjb._.js.map