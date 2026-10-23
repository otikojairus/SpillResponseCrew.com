import type { ImageKey } from "./images";
import { imageForServiceSlug } from "./images";
import { PILLAR_SLUG, serviceBaseSlug } from "./pages";

export type HeroTile = { key: ImageKey; href: string; label: string };

export const HERO_HOME_TILES: HeroTile[] = [
  { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
  { key: "oil-spill", href: "/oil-spill-cleanup", label: "Oil spills" },
  { key: "hazmat-waste", href: "/hazmat-cleanup", label: "Hazmat" },
  { key: "industrial-spill", href: "/industrial-spill-cleanup", label: "Industrial" },
];

const PAGE_TILE_PRESETS: Record<string, HeroTile[]> = {
  "emergency-spill-response": [
    { key: "hazardous-waste", href: "/hazardous-waste-cleanup", label: "Haz waste" },
    { key: "fuel-spill", href: "/fuel-spill-cleanup", label: "Fuel" },
    { key: "industrial-chemical", href: "/industrial-spill-cleanup", label: "Industrial" },
  ],
  "chemical-spill-cleanup": [
    { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
    { key: "hazmat-waste", href: "/hazmat-cleanup", label: "Hazmat" },
    { key: "industrial-chemical", href: "/industrial-chemical-spill-cleanup", label: "Plant chemical" },
  ],
  "oil-spill-cleanup": [
    { key: "fuel-spill", href: "/fuel-spill-cleanup", label: "Fuel" },
    { key: "diesel-spill", href: "/diesel-spill-cleanup", label: "Diesel" },
    { key: "hydraulic-oil", href: "/hydraulic-oil-spill-cleanup", label: "Hydraulic" },
  ],
  "hazmat-cleanup": [
    { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
    { key: "hazmat-waste", href: "/hazardous-waste-cleanup", label: "Haz waste" },
    { key: "chemical-spill", href: "/chemical-spill-cleanup", label: "Chemical" },
  ],
  "soil-remediation-services": [
    { key: "soil-remediation", href: "/contaminated-soil-removal", label: "Soil removal" },
    { key: "environmental", href: `/${PILLAR_SLUG}`, label: "Environmental" },
    { key: "industrial-chemical", href: "/industrial-spill-cleanup", label: "Industrial" },
  ],
  "contaminated-soil-removal": [
    { key: "soil-remediation", href: "/soil-remediation-services", label: "Remediation" },
    { key: "environmental", href: `/${PILLAR_SLUG}`, label: "Environmental" },
    { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
  ],
  "environmental-spill-response": [
    { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
    { key: "oil-spill", href: "/oil-spill-cleanup", label: "Oil" },
    { key: "hazmat-waste", href: "/hazmat-cleanup", label: "Hazmat" },
  ],
  "fuel-spill-cleanup": [
    { key: "gasoline-spill", href: "/gasoline-spill-cleanup", label: "Gasoline" },
    { key: "diesel-spill", href: "/diesel-spill-cleanup", label: "Diesel" },
    { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
  ],
  "industrial-spill-cleanup": [
    { key: "industrial-spill", href: "/industrial-chemical-spill-cleanup", label: "Chemical plant" },
    { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
    { key: "hazmat-waste", href: "/hazmat-cleanup", label: "Hazmat" },
  ],
};

const CITY_TILES: HeroTile[] = [
  { key: "emergency-spill", href: "/emergency-spill-response", label: "Emergency" },
  { key: "hazmat-waste", href: "/hazmat-cleanup", label: "Hazmat" },
  { key: "oil-spill", href: "/oil-spill-cleanup", label: "Oil" },
];

export function heroTilesFor(slug: string | undefined, variant: "home" | "page"): HeroTile[] {
  if (variant === "home") return HERO_HOME_TILES;
  if (!slug) return HERO_HOME_TILES.slice(0, 3);

  const base = serviceBaseSlug(slug);
  if (PAGE_TILE_PRESETS[base]) return PAGE_TILE_PRESETS[base]!;

  if (slug.startsWith(`${PILLAR_SLUG}-`)) return CITY_TILES;

  const main = imageForServiceSlug(slug);
  return [
    { key: main, href: `/${slug}`, label: "This service" },
    ...HERO_HOME_TILES.filter((t) => t.key !== main).slice(0, 2),
  ];
}

export function heroMainImageKey(slug: string | undefined, variant: "home" | "page", fallback: ImageKey): ImageKey {
  if (variant === "home") return "hero-home";
  if (!slug) return fallback;
  if (slug.startsWith(`${PILLAR_SLUG}-`)) return "hero-local";
  return imageForServiceSlug(slug);
}
