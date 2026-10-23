import { PILLAR_SLUG } from "./pages";

export type ImageKey =
  | "hero-home"
  | "hero-service"
  | "hero-local"
  | "emergency-spill"
  | "hazardous-waste"
  | "oil-spill"
  | "industrial-chemical"
  | "hazmat-waste"
  | "soil-remediation"
  | "fuel-spill"
  | "industrial-spill"
  | "chemical-spill"
  | "environmental"
  | "mercury-spill"
  | "hydraulic-oil"
  | "gasoline-spill"
  | "diesel-spill";

type Photo = { src: string; alt: string; caption: string; credit: string };

/** Paths must not include search params — Next.js 16 `images.localPatterns` blocks unknown `?v=` on `next/image`. */
function imageSrc(filename: string): string {
  return `/images/${filename}`;
}

const photos: Record<ImageKey, Photo> = {
  "hero-home": {
    src: imageSrc("spill-hero-home.webp"),
    alt: "Rainbow oil sheen spread across an asphalt spill site",
    caption: "Oil and fuel spills—contain sheen, recover product, and protect drains.",
    credit: "Pexels",
  },
  "hero-service": {
    src: imageSrc("spill-hero-service.webp"),
    alt: "Responders in protective gear cleaning petroleum from a shoreline",
    caption: "On-water and shoreline oil response with booms and recovery gear.",
    credit: "Pexels",
  },
  "hero-local": {
    src: imageSrc("spill-hero-local.webp"),
    alt: "Gasoline and fuel rainbow sheen on pavement near a local site",
    caption: "Local teams coordinate regulators, disposal, and receptor protection.",
    credit: "Pexels",
  },
  "emergency-spill": {
    src: imageSrc("spill-emergency-spill.webp"),
    alt: "Hazmat responders securing a roadside chemical spill at night",
    caption: "Active releases—secure drains and vapour zones before cleanup starts.",
    credit: "Pexels",
  },
  "hazardous-waste": {
    src: imageSrc("spill-hazardous-waste.webp"),
    alt: "Worker in a protective suit handling a chemical container in a warehouse",
    caption: "After-hours industrial and transport spills across Canada.",
    credit: "Pexels",
  },
  "oil-spill": {
    src: imageSrc("spill-oil-spill.webp"),
    alt: "Oil sheen and debris on a polluted water surface",
    caption: "Oil spill cleanup on pads, pits, and loading docks.",
    credit: "Pexels",
  },
  "industrial-chemical": {
    src: imageSrc("spill-industrial-chemical.webp"),
    alt: "Plant workers in protective clothing near industrial smoke and vapour",
    caption: "Plant chemical spills—coordinate with production and EHS contacts.",
    credit: "Pexels",
  },
  "hazmat-waste": {
    src: imageSrc("spill-hazmat-waste.webp"),
    alt: "Responder in protective suit handling a hazardous waste container",
    caption: "Hazardous waste packaging, labelling, and manifest support.",
    credit: "Pexels",
  },
  "soil-remediation": {
    src: imageSrc("spill-soil-remediation.webp"),
    alt: "Excavator working on a soil remediation and excavation site",
    caption: "Soil remediation and delineation before excavation.",
    credit: "Pexels",
  },
  "fuel-spill": {
    src: imageSrc("spill-fuel-spill.webp"),
    alt: "Fuel storage tanks and pipelines at a refinery yard",
    caption: "Fuel and diesel spills—vapour control and product recovery.",
    credit: "Pexels",
  },
  "industrial-spill": {
    src: imageSrc("spill-industrial-spill.webp"),
    alt: "Mechanic servicing a truck in an industrial repair bay",
    caption: "Industrial spill cleanup inside busy production areas.",
    credit: "Pexels",
  },
  "chemical-spill": {
    src: imageSrc("spill-chemical-spill.webp"),
    alt: "Laboratory glassware and chemical containers on a bench",
    caption: "Chemical spill cleanup matched to SDS guidance.",
    credit: "Pexels",
  },
  environmental: {
    src: imageSrc("spill-environmental.webp"),
    alt: "Environmental cleanup equipment working on a waterway",
    caption: "Environmental spill response—document receptors and pathways.",
    credit: "Pexels",
  },
  "mercury-spill": {
    src: imageSrc("spill-mercury-spill.webp"),
    alt: "Laboratory researcher in PPE handling glass test tubes",
    caption: "Mercury spill cleanup with specialized kits and air monitoring.",
    credit: "Pexels",
  },
  "hydraulic-oil": {
    src: imageSrc("spill-hydraulic-oil.webp"),
    alt: "Technician servicing heavy equipment with hydraulic systems",
    caption: "Hydraulic oil spills in shops and on heavy equipment.",
    credit: "Pexels",
  },
  "gasoline-spill": {
    src: imageSrc("spill-gasoline-spill.webp"),
    alt: "Dark petroleum liquid pooling on an industrial surface",
    caption: "Gasoline spill cleanup at forecourts and fleet yards.",
    credit: "Pexels",
  },
  "diesel-spill": {
    src: imageSrc("spill-diesel-spill.webp"),
    alt: "Heavy-duty truck in an industrial fleet yard",
    caption: "Diesel spill cleanup on roads, yards, and parking lots.",
    credit: "Pexels",
  },
};

const NATIONAL_SLUG_IMAGE: Record<string, ImageKey> = {
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
  "mercury-spill-cleanup": "mercury-spill",
};

const CITY_ROTATION: ImageKey[] = [
  "soil-remediation",
  "environmental",
  "industrial-spill",
  "gasoline-spill",
  "emergency-spill",
];

export function imageForServiceSlug(slug: string): ImageKey {
  const national = NATIONAL_SLUG_IMAGE[slug];
  if (national) return national;
  if (slug.startsWith(`${PILLAR_SLUG}-`)) {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i)) % CITY_ROTATION.length;
    return CITY_ROTATION[hash]!;
  }
  if (slug.includes("emergency") || slug.includes("hazmat") || slug.includes("fuel")) return "emergency-spill";
  return "hero-service";
}

export function getPhoto(key: ImageKey): Photo {
  return photos[key];
}

export function nationalServiceImageKeys(): ImageKey[] {
  return Object.values(NATIONAL_SLUG_IMAGE);
}
