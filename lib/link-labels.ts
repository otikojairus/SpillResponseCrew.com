import type { SeoPage } from "./pages";
import { serviceLabelFromSlug } from "./service-labels";

/** Plain-language link text for UI (not SEO keyword stuffing). */
export function pageLinkLabel(page: SeoPage) {
  return serviceLabelFromSlug(page.slug);
}
