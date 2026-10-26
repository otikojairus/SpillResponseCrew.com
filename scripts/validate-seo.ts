#!/usr/bin/env npx tsx
/**
 * Automated checks for programmatic SEO standards (uniqueness, linking, on-page, technical).
 * Manual pre-launch: Rich Results Test, PageSpeed ≥70 mobile per template, touch-target audit.
 */
import { wordCount } from "../lib/content-utils";
import { factsForPage } from "../lib/location-facts";
import { getPhoto, nationalServiceImageKeys, type ImageKey } from "../lib/images";
import { faqsFor, h1For, introFor, internalLinksFor, isCityPageSlug, pageSeoMeta, sectionsFor } from "../lib/seo-content";
import { CITY_PAGES, PAGES, PILLAR_SLUG, type SeoPage, serviceBaseSlug } from "../lib/pages";

const FORBIDDEN_ANCHORS = [/click here/i, /read more/i, /learn more/i];
const IMAGE_KEYS: ImageKey[] = [
  "hero-home",
  "hero-service",
  "hero-local",
  "emergency-spill",
  "hazardous-waste",
  "oil-spill",
  "industrial-chemical",
  "hazmat-waste",
  "soil-remediation",
  "fuel-spill",
  "industrial-spill",
  "chemical-spill",
  "environmental",
  "mercury-spill",
  "hydraulic-oil",
  "gasoline-spill",
  "diesel-spill",
];

function metroHubSlug(area: string) {
  return CITY_PAGES.find((p) => p.area === area && p.slug.startsWith(`${PILLAR_SLUG}-`))?.slug;
}

const errors: string[] = [];
const h1Set = new Set<string>();
const introHashes = new Map<string, string>();

function bodyWords(page: SeoPage) {
  const intro = introFor(page);
  const sections = sectionsFor(page);
  const sectionText = sections.flatMap((s) => s.paragraphs).join(" ");
  return wordCount(`${intro} ${sectionText}`);
}

function minWords(page: SeoPage) {
  if (page.kind === "national") {
    const base = serviceBaseSlug(page.slug);
    if (
      base === PILLAR_SLUG ||
      base.includes("emergency") ||
      base.includes("hazmat") ||
      base.includes("fuel") ||
      base.includes("industrial")
    ) {
      return 500;
    }
    return 800;
  }
  return 400;
}

const inbound = new Map<string, number>();
for (const p of PAGES) inbound.set(p.slug, 0);

function markLink(from: string, to: string) {
  if (from !== to) inbound.set(to, (inbound.get(to) ?? 0) + 1);
}

for (const page of PAGES) {
  for (const link of internalLinksFor(page)) {
    markLink(page.slug, link.href.replace(/^\//, ""));
  }
}
markLink("home", "services");
for (const p of PAGES.filter((p) => p.kind === "national")) markLink("services", p.slug);
markLink("home", "locations");
for (const p of PAGES.filter((p) => p.kind === "city")) markLink("locations", p.slug);
markLink("home", PILLAR_SLUG);

function cityLinksForService(page: SeoPage, base: string) {
  return internalLinksFor(page).filter((l) => {
    const slug = l.href.replace(/^\//, "");
    return isCityPageSlug(slug) && serviceBaseSlug(slug) === base;
  });
}

function isEmergencyStyleNational(page: SeoPage) {
  if (page.kind !== "national") return false;
  const base = serviceBaseSlug(page.slug);
  return (
    base.includes("emergency") ||
    base.includes("hazmat") ||
    base.includes("fuel") ||
    base.includes("industrial")
  );
}

for (const page of PAGES) {
  const h1 = h1For(page);
  const intro = introFor(page);
  const faqs = faqsFor(page);
  const { title, description } = pageSeoMeta(page);

  if (h1Set.has(h1)) errors.push(`Duplicate H1: ${page.slug} -> ${h1}`);
  h1Set.add(h1);

  const introHash = intro.replace(/\s+/g, " ").trim();
  const prior = introHashes.get(introHash);
  if (prior) errors.push(`Duplicate intro: ${page.slug} matches ${prior}`);
  introHashes.set(introHash, page.slug);

  if (wordCount(intro) < 80) errors.push(`Intro < 80 words: ${page.slug} (${wordCount(intro)})`);
  if (faqs.length < 3) errors.push(`FAQ < 3: ${page.slug}`);

  if (title.length < 50 || title.length > 60) errors.push(`Title length 50–60: ${page.slug} (${title.length}) "${title}"`);
  if (description.length < 150 || description.length > 160) {
    errors.push(`Meta description 150–160: ${page.slug} (${description.length})`);
  }

  const words = bodyWords(page);
  if (words < minWords(page)) errors.push(`Body < ${minWords(page)} words: ${page.slug} (${words})`);

  if ((inbound.get(page.slug) ?? 0) < 1) errors.push(`Orphan (no internal inlinks counted): ${page.slug}`);

  if (page.kind === "city") {
    const facts = factsForPage(page.area, "city");
    if (!facts) errors.push(`Missing city facts: ${page.slug}`);
    else {
      const body = `${intro} ${sectionsFor(page).flatMap((s) => s.paragraphs).join(" ")}`;
      const factHits = [facts.landmark, facts.neighbourhood, facts.population, facts.climate].filter((f) =>
        body.includes(f.split(" ")[0] ?? ""),
      );
      if (factHits.length < 2) errors.push(`City page needs 2+ local facts in copy: ${page.slug}`);
    }
    const hubSlug = metroHubSlug(page.area);
    const hasParent =
      internalLinksFor(page).some((l) => l.href === `/${PILLAR_SLUG}`) ||
      (hubSlug ? internalLinksFor(page).some((l) => l.href === `/${hubSlug}`) : false);
    if (!hasParent) {
      errors.push(`City page missing parent link (pillar or metro hub): ${page.slug}`);
    }
  }

  if (page.kind === "national") {
    const base = serviceBaseSlug(page.slug);
    const expectedCities = CITY_PAGES.filter((p) => serviceBaseSlug(p.slug) === base).length;
    const cityLinks = cityLinksForService(page, base).length;
    if (cityLinks < expectedCities) {
      errors.push(`National service must link all city pages (${cityLinks}/${expectedCities}): ${page.slug}`);
    }
    if (page.slug !== PILLAR_SLUG) {
      const hasPillar = internalLinksFor(page).some((l) => l.href === `/${PILLAR_SLUG}`);
      if (!hasPillar) errors.push(`National page missing pillar link: ${page.slug}`);
    }
    if (isEmergencyStyleNational(page) && page.slug !== PILLAR_SLUG) {
      const metroExtras = cityLinksForService(page, base).length;
      if (metroExtras < 2) {
        errors.push(`Emergency-style national needs city coverage: ${page.slug}`);
      }
    }
  }

  for (const link of internalLinksFor(page)) {
    if (FORBIDDEN_ANCHORS.some((re) => re.test(link.anchor))) {
      errors.push(`Weak anchor on ${page.slug}: "${link.anchor}"`);
    }
    if (link.anchor.trim().length < 8) {
      errors.push(`Anchor too short on ${page.slug}: "${link.anchor}"`);
    }
  }
}

for (const key of IMAGE_KEYS) {
  const photo = getPhoto(key);
  if (!photo.alt.trim()) errors.push(`Missing image alt: ${key}`);
}

const serviceKeys = nationalServiceImageKeys();
const uniqueKeys = new Set(serviceKeys);
if (uniqueKeys.size !== serviceKeys.length) {
  errors.push("National services must not share the same image key");
}

if (errors.length) {
  console.error(`SEO validation failed (${errors.length} issues):\n`);
  for (const e of errors.slice(0, 50)) console.error(" -", e);
  if (errors.length > 50) console.error(` ... and ${errors.length - 50} more`);
  process.exit(1);
}

console.log(`OK: ${PAGES.length} pages passed SEO validation.`);
