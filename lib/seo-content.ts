import { hashSlug } from "./content-utils";
import { cityLocationEntries } from "./locations";
import { pageLinkLabel } from "./link-labels";
import {
  breadcrumbLabels,
  faqHeadingFor,
  faqsFor,
  h1For,
  heroLeadFor,
  introFor,
  sectionsFor,
  type ContentSection,
  type FaqItem,
} from "./page-copy";
import { metaDescriptionFor, metaTitleFor } from "./seo-meta";
import {
  CITY_PAGES,
  NATIONAL_PAGES,
  PILLAR_SLUG,
  type SeoPage,
  PAGES,
  PHONE_DISPLAY,
  getPage,
  locationName,
  serviceBaseSlug,
} from "./pages";

export type { FaqItem, ContentSection };
export type InternalLink = { href: string; anchor: string };

export {
  breadcrumbLabels,
  faqHeadingFor,
  faqsFor,
  h1For,
  heroLeadFor,
  introFor,
  sectionsFor,
};

const CITY_SERVICE_SLUGS = [
  "emergency-spill-response",
  "hazmat-cleanup",
  "oil-spill-cleanup",
  "chemical-spill-cleanup",
  "fuel-spill-cleanup",
  "industrial-spill-cleanup",
] as const;

const citySlugSet = new Set(CITY_PAGES.map((p) => p.slug));

function metroHubFor(area: string): SeoPage | undefined {
  return CITY_PAGES.find((p) => p.area === area && p.slug.startsWith(`${PILLAR_SLUG}-`));
}

function metroLinksFromPages(pages: SeoPage[]): InternalLink[] {
  const byArea = new Map<string, InternalLink>();
  for (const p of pages) {
    const name = locationName(p);
    if (byArea.has(name)) continue;
    const hub = metroHubFor(p.area) ?? p;
    byArea.set(name, { href: `/${hub.slug}`, anchor: name });
  }
  return [...byArea.values()].sort((a, b) => a.anchor.localeCompare(b.anchor));
}

function pickMetroLinks(page: SeoPage, min: number, max: number, pool?: SeoPage[]): InternalLink[] {
  const metros = metroLinksFromPages(pool ?? CITY_PAGES);
  if (!metros.length) return [];
  const span = max - min + 1;
  const count = Math.min(min + (hashSlug(page.slug) % span), metros.length);
  const start = hashSlug(`${page.slug}:cities`) % metros.length;
  const out: InternalLink[] = [];
  for (let i = 0; i < count; i++) {
    out.push(metros[(start + i) % metros.length]!);
  }
  return out;
}

function pushLinks(links: InternalLink[], seen: Set<string>, batch: InternalLink[]) {
  for (const link of batch) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    links.push(link);
  }
}

function isPriorityNational(page: SeoPage) {
  if (page.kind !== "national") return false;
  const base = serviceBaseSlug(page.slug);
  return (
    base === PILLAR_SLUG ||
    base.includes("emergency") ||
    base.includes("hazmat") ||
    base.includes("fuel") ||
    base.includes("industrial")
  );
}

export function internalLinksFor(page: SeoPage): InternalLink[] {
  const { locations, services } = internalLinkGroupsFor(page);
  return [...locations, ...services];
}

export function internalLinkGroupsFor(page: SeoPage): { locations: InternalLink[]; services: InternalLink[] } {
  const locations: InternalLink[] = [];
  const services: InternalLink[] = [];
  const seenLoc = new Set<string>();
  const seenSvc = new Set<string>();
  const base = serviceBaseSlug(page.slug);
  const pillar = getPage(PILLAR_SLUG)!;
  const emergency = getPage("emergency-spill-response");
  const hazmat = getPage("hazmat-cleanup");

  const addService = (target: SeoPage | undefined, anchor?: string) => {
    if (!target) return;
    const href = `/${target.slug}`;
    if (href === `/${page.slug}` || seenSvc.has(href)) return;
    seenSvc.add(href);
    services.push({ href, anchor: anchor ?? pageLinkLabel(target) });
  };

  if (page.kind === "national") {
    if (page.slug !== PILLAR_SLUG) {
      addService(pillar, pageLinkLabel(pillar));
    }

    if (base === PILLAR_SLUG) {
      pushLinks(locations, seenLoc, cityLocationEntries().map((c) => ({ href: c.href, anchor: c.name })));
    } else if (isPriorityNational(page)) {
      pushLinks(locations, seenLoc, pickMetroLinks(page, 2, 5));
    } else {
      pushLinks(locations, seenLoc, pickMetroLinks(page, 2, 4));
    }

    if (emergency && page.slug !== "emergency-spill-response") addService(emergency);
    if (hazmat && page.slug !== "hazmat-cleanup") addService(hazmat);

    const siblings = NATIONAL_PAGES.filter((p) => p.slug !== page.slug && serviceBaseSlug(p.slug) !== base);
    const start = hashSlug(page.slug) % Math.max(1, siblings.length);
    for (const s of siblings.slice(start, start + 3)) addService(s);

    return { locations, services };
  }

  if (page.kind === "city") {
    const localHub = metroHubFor(page.area);
    if (localHub && localHub.slug !== page.slug) {
      addService(localHub, pageLinkLabel(localHub));
    } else {
      addService(pillar, pageLinkLabel(pillar));
    }

    const localServices = CITY_PAGES.filter((p) => p.area === page.area && p.slug !== page.slug);
    const localStart = hashSlug(page.slug) % Math.max(1, localServices.length);
    for (const s of localServices.slice(localStart, localStart + 4)) {
      const href = `/${s.slug}`;
      if (href === `/${page.slug}` || seenSvc.has(href)) continue;
      seenSvc.add(href);
      services.push({ href, anchor: pageLinkLabel(s) });
    }

    const serviceStart = hashSlug(page.slug) % CITY_SERVICE_SLUGS.length;
    for (let i = 0; i < 3; i++) {
      const slug = CITY_SERVICE_SLUGS[(serviceStart + i) % CITY_SERVICE_SLUGS.length]!;
      addService(getPage(slug));
    }
    addService(emergency);

    pushLinks(
      locations,
      seenLoc,
      pickMetroLinks(page, 3, 3, CITY_PAGES.filter((c) => c.area !== page.area)),
    );

    return { locations, services };
  }

  addService(pillar);
  return { locations, services };
}

export function pageSeoMeta(page: SeoPage) {
  const intro = introFor(page);
  return {
    title: metaTitleFor(page),
    description: metaDescriptionFor(page, intro, PHONE_DISPLAY),
  };
}

export function allSlugsLinkedFromPillar() {
  return PAGES.map((p) => p.slug);
}

export function isCityPageSlug(slug: string) {
  return citySlugSet.has(slug);
}
