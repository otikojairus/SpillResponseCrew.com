# Canada Spill Cleanup

Next.js 16 programmatic SEO site for **canadaspillcleanup.com**, generated from `scripts/pseo-spill-canada.xlsx` (source: `pSEO - Canada Spill Cleanup.xlsx`).

- **360 pages** — 15 national services × 23 metros (+ pillar hub)
- **Pillar:** `/environmental-spill-response`
- **Stack:** Next.js App Router, static generation, Docker standalone

## Commands

```bash
npm install
npm run generate:pages   # regenerate lib/pages.ts from Excel
npm run fetch:images     # download Pexels hero images
npm run validate:seo     # pre-build SEO checks
npm run dev
npm run build
```

## Docker

```bash
docker compose up -d --build
```

Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE_DISPLAY`, and `NEXT_PUBLIC_PHONE_E164` in `.env` or compose build args.
