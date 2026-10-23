/**
 * Tire-specific SVG illustrations (no stock photos — avoids stale WebP / house images).
 * Run: npm run generate:images
 */
import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "public/images");
const W = 1400;
const H = 1050;

const c = {
  asphalt: "#0c0e14",
  card: "#1a1f2b",
  fog: "#eef1f6",
  paper: "#e8ecf1",
  ink: "#1c2433",
  beacon: "#ffb020",
  beaconHot: "#ff6b2c",
  reflector: "#5eead4",
  rubber: "#2a2f3a",
  tread: "#3d4556",
  danger: "#ff4533",
  line: "#4a5568",
};

function svgWrap(body, bg = c.paper) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2030"/>
      <stop offset="100%" stop-color="${c.asphalt}"/>
    </linearGradient>
    <linearGradient id="beacon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.beacon}"/>
      <stop offset="100%" stop-color="${c.beaconHot}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="${bg}"/>
  ${body}
</svg>`;
}

function tire(cx, cy, outerR, innerR = outerR * 0.55) {
  const tread = [];
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * (outerR - 8);
    const y1 = cy + Math.sin(a) * (outerR - 8);
    const x2 = cx + Math.cos(a) * outerR;
    const y2 = cy + Math.sin(a) * outerR;
    tread.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c.tread}" stroke-width="5"/>`);
  }
  return `
    <circle cx="${cx}" cy="${cy}" r="${outerR}" fill="${c.rubber}"/>
    ${tread.join("")}
    <circle cx="${cx}" cy="${cy}" r="${outerR - 14}" fill="none" stroke="${c.tread}" stroke-width="3"/>
    <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="${c.card}"/>
    <circle cx="${cx}" cy="${cy}" r="${innerR - 18}" fill="none" stroke="${c.line}" stroke-width="6"/>
  `;
}

function highway(y = 720) {
  return `
    <rect x="0" y="${y}" width="${W}" height="${H - y}" fill="${c.asphalt}"/>
    <rect x="0" y="${y}" width="${W}" height="8" fill="${c.line}"/>
    <rect x="120" y="${y + 120}" width="180" height="12" fill="${c.beacon}" opacity="0.9"/>
    <rect x="420" y="${y + 120}" width="120" height="12" fill="${c.beacon}" opacity="0.9"/>
    <rect x="620" y="${y + 120}" width="200" height="12" fill="${c.beacon}" opacity="0.9"/>
    <rect x="920" y="${y + 120}" width="140" height="12" fill="${c.beacon}" opacity="0.9"/>
  `;
}

function label(title, sub, x = 80, y = 100) {
  return `
    <text x="${x}" y="${y}" fill="${c.ink}" font-family="system-ui,sans-serif" font-size="52" font-weight="800">${title}</text>
    <text x="${x}" y="${y + 52}" fill="${c.beaconHot}" font-family="system-ui,sans-serif" font-size="30" font-weight="600">${sub}</text>
  `;
}

function cone(x, y, scale = 1) {
  const s = scale;
  return `
    <polygon points="${x},${y} ${x + 28 * s},${y + 70 * s} ${x - 28 * s},${y + 70 * s}" fill="${c.beacon}"/>
    <rect x="${x - 32 * s}" y="${y + 68 * s}" width="${64 * s}" height="${10 * s}" fill="${c.ink}"/>
    <rect x="${x - 18 * s}" y="${y + 22 * s}" width="${36 * s}" height="${8 * s}" fill="${c.fog}" opacity="0.9"/>
  `;
}

/** @type {Record<string, string>} */
const scenes = {
  "hero-home": `
    <rect width="100%" height="100%" fill="url(#sky)"/>
    ${highway(680)}
    ${tire(700, 520, 200)}
    ${tire(1050, 560, 120)}
    <rect x="200" y="480" width="320" height="140" rx="12" fill="${c.card}" opacity="0.95"/>
    <text x="240" y="545" fill="${c.fog}" font-family="system-ui,sans-serif" font-size="36" font-weight="800">Canada-wide</text>
    <text x="240" y="590" fill="${c.reflector}" font-family="system-ui,sans-serif" font-size="26">Highway · fleet · driveway</text>
  `,

  "hero-service": `
    ${highway(760)}
    ${tire(520, 580, 160)}
    <rect x="780" y="320" width="480" height="320" rx="16" fill="${c.card}"/>
    <text x="820" y="400" fill="${c.fog}" font-family="system-ui,sans-serif" font-size="40" font-weight="800">Mobile tire tech</text>
    <text x="820" y="455" fill="${c.reflector}" font-family="system-ui,sans-serif" font-size="26">Puncture · flat · swap spare</text>
    <rect x="820" y="500" width="200" height="48" rx="8" fill="url(#beacon)"/>
    <text x="870" y="533" fill="${c.asphalt}" font-family="system-ui,sans-serif" font-size="22" font-weight="800">On-site</text>
  `,

  "hero-local": `
    <rect width="100%" height="100%" fill="url(#sky)"/>
    ${highway(760)}
    ${tire(680, 500, 200)}
    <circle cx="280" cy="320" r="28" fill="url(#beacon)"/>
    <circle cx="480" cy="260" r="22" fill="${c.reflector}"/>
    <circle cx="720" cy="300" r="26" fill="url(#beacon)"/>
    <circle cx="960" cy="280" r="20" fill="${c.reflector}"/>
    <circle cx="1120" cy="340" r="24" fill="url(#beacon)"/>
    <line x1="280" y1="348" x2="650" y2="520" stroke="${c.reflector}" stroke-width="3" opacity="0.5"/>
    <line x1="720" y1="326" x2="680" y2="480" stroke="${c.reflector}" stroke-width="3" opacity="0.5"/>
    ${label("Your city", "Crews en route · local highways", 80, 120)}
  `,

  emergency: `
    <rect width="100%" height="100%" fill="${c.asphalt}"/>
    ${highway(700)}
    ${cone(380, 620, 1.2)}
    ${cone(480, 640, 1)}
    ${tire(720, 560, 150)}
    <polygon points="600,420 640,500 560,500" fill="${c.danger}"/>
    <text x="608" y="488" fill="${c.fog}" font-family="system-ui,sans-serif" font-size="28" font-weight="800">!</text>
    ${label("Emergency tire", "Shoulder safe · call dispatch", 80, 140)}
  `,

  night: `
    <rect width="100%" height="100%" fill="#060810"/>
    ${highway(720)}
    <circle cx="200" cy="180" r="60" fill="${c.beacon}" opacity="0.35"/>
    <circle cx="1180" cy="220" r="40" fill="${c.reflector}" opacity="0.25"/>
    ${tire(620, 540, 170)}
    <rect x="900" y="380" width="360" height="160" rx="12" fill="${c.card}"/>
    <text x="940" y="450" fill="${c.fog}" font-family="system-ui,sans-serif" font-size="48" font-weight="800">24 / 7</text>
    <text x="940" y="500" fill="${c.beacon}" font-family="system-ui,sans-serif" font-size="26">Night roadside</text>
  `,

  storefront: `
    ${highway(780)}
    <rect x="200" y="340" width="520" height="160" rx="12" fill="${c.card}"/>
    <rect x="720" y="380" width="360" height="120" rx="8" fill="#2d3548"/>
    ${tire(300, 620, 130)}
    ${tire(520, 640, 130)}
    ${tire(760, 620, 130)}
    ${tire(980, 640, 110)}
    ${label("Truck tires", "Steer · drive · trailer", 80, 120)}
  `,

  commercial: `
    <rect x="320" y="160" width="760" height="720" rx="24" fill="${c.card}"/>
    <rect x="380" y="220" width="640" height="360" rx="16" fill="#2d3548"/>
    ${tire(700, 680, 200)}
    ${tire(980, 700, 140)}
    ${label("Semi truck tires", "Heavy-duty ply &amp; load rating", 80, 120)}
  `,

  "commercial-replacement": `
    ${tire(280, 520, 150)}
    ${tire(480, 500, 170)}
    ${tire(700, 530, 160)}
    ${tire(920, 510, 175)}
    ${tire(1120, 540, 140)}
    <rect x="80" y="780" width="1240" height="4" fill="${c.line}"/>
    ${label("Fleet tire stock", "Size · position · DOT notes", 80, 120)}
  `,

  replacement: `
    ${highway(760)}
    <ellipse cx="400" cy="480" rx="200" ry="60" fill="${c.card}" opacity="0.9"/>
    ${tire(400, 680, 140)}
    <circle cx="1050" cy="520" r="100" fill="none" stroke="${c.reflector}" stroke-width="8" stroke-dasharray="12 8"/>
    <text x="990" y="530" fill="${c.reflector}" font-family="system-ui,sans-serif" font-size="22" font-weight="700">SPARE</text>
    ${label("Repair or replace", "Swap spare when casing is unsafe", 80, 120)}
  `,

  "board-up": `
    ${highway(740)}
    ${cone(300, 600)}
    ${cone(360, 620)}
    ${cone(900, 610, 1.1)}
    <rect x="480" y="420" width="360" height="120" rx="8" fill="${c.card}"/>
    <text x="520" y="495" fill="${c.fog}" font-family="system-ui,sans-serif" font-size="32" font-weight="800">Roadside assist</text>
    ${tire(640, 620, 120)}
    ${label("Truck roadside", "Cones · air · torque", 80, 120)}
  `,

  "commercial-door": `
    <rect x="240" y="300" width="520" height="280" rx="16" fill="${c.card}"/>
    <rect x="280" y="340" width="440" height="160" rx="8" fill="#2d3548"/>
    <rect x="320" y="520" width="80" height="40" fill="${c.line}"/>
    <rect x="600" y="520" width="80" height="40" fill="${c.line}"/>
    ${tire(980, 580, 160)}
    ${label("Mobile tire service", "Driveway · lot · job site", 80, 120)}
  `,

  "emergency-commercial-door": `
    <rect width="100%" height="100%" fill="${c.asphalt}"/>
    ${tire(700, 520, 280)}
    <rect x="80" y="120" width="420" height="100" rx="12" fill="url(#beacon)"/>
    <text x="120" y="185" fill="${c.asphalt}" font-family="system-ui,sans-serif" font-size="36" font-weight="800">Emergency truck tire</text>
  `,

  door: `
    ${highway(760)}
    ${tire(620, 560, 180)}
    <path d="M520 480 L580 420 L640 500" stroke="${c.danger}" stroke-width="6" fill="none"/>
    <circle cx="580" cy="460" r="14" fill="${c.danger}"/>
    ${label("Flat tire", "Stop driving on zero pressure", 80, 120)}
  `,

  "door-glass-replacement": `
    ${tire(620, 520, 200)}
    <circle cx="580" cy="480" r="22" fill="${c.beacon}"/>
    <rect x="568" y="440" width="24" height="50" rx="4" fill="${c.beaconHot}"/>
    ${label("Puncture repair", "Plug or patch in tread zone", 80, 120)}
  `,

  "door-glass-repair": `
    ${tire(600, 540, 170)}
    <rect x="720" y="380" width="280" height="200" rx="12" fill="${c.card}"/>
    <circle cx="860" cy="480" r="70" fill="none" stroke="${c.reflector}" stroke-width="10"/>
    <text x="835" y="495" fill="${c.reflector}" font-family="system-ui,sans-serif" font-size="36" font-weight="800">PSI</text>
    ${label("Slow leak check", "Valve · bead · rim", 80, 120)}
  `,

  "storefront-window": `
    <rect width="100%" height="100%" fill="url(#sky)"/>
    ${highway(700)}
    ${tire(520, 620, 150)}
    ${cone(380, 640)}
    ${cone(440, 660)}
    ${label("Roadside tire repair", "Shoulder width · traffic", 80, 120)}
  `,

  "aluminum-door": `
    <rect x="0" y="600" width="${W}" height="450" fill="#3d4a2a"/>
    ${tire(620, 520, 200)}
    <ellipse cx="620" cy="720" rx="220" ry="40" fill="#2a3318" opacity="0.6"/>
    ${label("Off-road &amp; equipment", "Mud · job site · fleet yard", 80, 120)}
  `,
};

const keys = Object.keys(scenes);
if (keys.length !== 17) throw new Error(`Expected 17 scenes, got ${keys.length}`);

await mkdir(outDir, { recursive: true });

for (const file of await readdir(outDir)) {
  if (file.endsWith(".webp")) await unlink(path.join(outDir, file));
}

for (const [name, body] of Object.entries(scenes)) {
  const svg = svgWrap(body);
  await writeFile(path.join(outDir, `${name}.svg`), svg);
  console.log(`wrote ${name}.svg`);
}

const attribution = `# Images

Tire-service **SVG** illustrations (\`npm run generate:images\`).
Legacy \`.webp\` stock files are removed on generate — do not use \`fetch:images\` for this site.

Regenerate: \`npm run generate:images\`
`;

await writeFile(path.join(outDir, "ATTRIBUTION.md"), attribution);
console.log("done — 17 tire SVG illustrations");
