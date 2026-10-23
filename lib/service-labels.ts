export const SERVICE_LABELS: Record<string, string> = {
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
  "mercury-spill-cleanup": "Mercury spill cleanup",
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
  "abbotsford",
];

export function serviceLabelFromSlug(slug: string) {
  let base = slug;
  for (const city of CITY_SUFFIXES) {
    if (base.endsWith(`-${city}`)) {
      base = base.slice(0, -(city.length + 1));
      break;
    }
  }
  return SERVICE_LABELS[base] ?? base.replace(/-/g, " ");
}
