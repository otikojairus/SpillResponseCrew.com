import { CITY_PAGES, PILLAR_SLUG, locationName } from "./pages";

/** One link per metro — pillar service page for that area when available. */
export function cityLocationEntries(): { name: string; href: string }[] {
  const byArea = new Map<string, { name: string; href: string }>();
  for (const page of CITY_PAGES) {
    if (byArea.has(page.area)) continue;
    const pillarCity = CITY_PAGES.find(
      (p) => p.area === page.area && p.slug.startsWith(`${PILLAR_SLUG}-`),
    );
    const target = pillarCity ?? page;
    byArea.set(page.area, { name: locationName(target), href: `/${target.slug}` });
  }
  return [...byArea.values()].sort((a, b) => a.name.localeCompare(b.name));
}
