/**
 * Downloads spill / hazmat / environmental cleanup stock photos → WebP (Pexels).
 * IDs are checked against Pexels page titles before being added here.
 * Run: npm run fetch:images
 */
import { createHash } from "node:crypto";
import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public/images");
const UA = "canadaspillcleanup-image-fetch/1.0";

/** @type {Record<string, { id: number; label: string }>} */
const assets = {
  "hero-home": { id: 36759207, label: "Iridescent oil spill on asphalt surface" },
  "hero-service": { id: 9620528, label: "Volunteers in PPE cleaning oil from a coastline" },
  "hero-local": { id: 6110109, label: "Gasoline spill rainbow sheen on asphalt" },
  "emergency-spill": { id: 19375362, label: "Hazmat responders securing roadside chemical spill" },
  "hazardous-waste": { id: 209230, label: "Worker in protective suit handling chemical container" },
  "oil-spill": { id: 6196280, label: "River surface with oil pollution and debris" },
  "industrial-chemical": { id: 6804263, label: "Workers in protective clothing near industrial smoke" },
  "hazmat-waste": { id: 8722722, label: "Responder handling hazardous waste container" },
  "soil-remediation": { id: 13350163, label: "Excavator on soil remediation site" },
  "fuel-spill": { id: 15978384, label: "Fuel storage tanks and refinery pipelines" },
  "industrial-spill": { id: 7564858, label: "Mechanic servicing truck in industrial shop" },
  "chemical-spill": { id: 2280549, label: "Laboratory test tubes with chemical liquids" },
  environmental: { id: 33124151, label: "River cleanup machine on water" },
  "mercury-spill": { id: 7231419, label: "Researcher in PPE with test tubes in laboratory" },
  "hydraulic-oil": { id: 6720537, label: "Mechanic inspecting truck wheel in garage" },
  "gasoline-spill": { id: 3760263, label: "Close-up of dark petroleum liquid texture" },
  "diesel-spill": { id: 7019607, label: "Close-up of heavy truck chassis and tires" },
};

await mkdir(outDir, { recursive: true });
for (const file of await readdir(outDir)) {
  if (file.endsWith(".svg") || file.endsWith(".webp")) await unlink(path.join(outDir, file));
}

const hashes = new Map();
for (const [name, asset] of Object.entries(assets)) {
  const url = `https://images.pexels.com/photos/${asset.id}/pexels-photo-${asset.id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  const res = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(25000) });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status} pexels ${asset.id}`);
  let pipeline = sharp(Buffer.from(await res.arrayBuffer()));
  const webp = await pipeline.resize(1400, null, { withoutEnlargement: true }).webp({ quality: 86 }).toBuffer();
  const hash = createHash("sha256").update(webp).digest("hex");
  if (hashes.has(hash)) throw new Error(`${name} duplicates ${hashes.get(hash)}`);
  hashes.set(hash, name);
  await writeFile(path.join(outDir, `spill-${name}.webp`), webp);
  console.log(`wrote spill-${name}.webp ← ${asset.id}`);
}

const attribution = `# Images\n\nPexels stock photos for spill / environmental cleanup themes. Refresh: \`npm run fetch:images\`\n\n| File | Source |\n|------|--------|\n${Object.entries(assets)
  .map(([k, v]) => `| spill-${k}.webp | [pexels ${v.id}](https://www.pexels.com/photo/${v.id}/) — ${v.label} |`)
  .join("\n")}\n`;
await writeFile(path.join(outDir, "ATTRIBUTION.md"), attribution);
console.log(`done — ${hashes.size} spill images`);
