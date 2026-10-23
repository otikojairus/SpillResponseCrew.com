import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PhotoCard } from "@/components/photo-card";
import { JsonLd } from "@/components/visuals";
import { getPhoto, imageForServiceSlug } from "@/lib/images";
import { cityLocationEntries } from "@/lib/locations";
import { NATIONAL_PAGES, PHONE_DISPLAY, PHONE_E164, PILLAR_SLUG, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { pageLinkLabel } from "@/lib/link-labels";
import { FaqSection } from "@/components/faq-section";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle(`Canada Spill Cleanup | 24/7 Response`),
  description: trimDescription(
    `Fuel, chemical, or oil release? Emergency spill response, hazmat cleanup, and soil remediation across Canada. Call ${PHONE_DISPLAY} any time.`,
  ),
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Do you respond to active leaks and historical contamination?",
    a: "Yes—emergency releases get containment first; remediation projects are scoped after delineation. Share whether product is still flowing when you call.",
  },
  {
    q: "Which cities do you cover?",
    a: "Major metros from Toronto and Vancouver to Calgary and Halifax. Open the Cities page or call " + PHONE_DISPLAY + " with your site address.",
  },
  {
    q: "What should I send when I call?",
    a: "GPS or street address, product type, estimated volume, photos, SDS if available, and nearest storm drain or waterway.",
  },
];

const featured = NATIONAL_PAGES.filter((p) => p.slug === PILLAR_SLUG || p.priority === "High" || p.priority === "Top Priority").slice(0, 6);

export default function HomePage() {
  const cities = cityLocationEntries();

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: absoluteUrl(),
            telephone: PHONE_E164,
            areaServed: "Canada",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <PageHero
        variant="home"
        kicker="Canada · 24/7"
        title="Spill on site? Contain it before it spreads."
        lead={
          <p>
            Fuel, chemical, oil, and hazmat releases—we dispatch trained crews for emergency spill response, industrial cleanup, and soil remediation across Canada.
          </p>
        }
        ctaLabel="Call now"
        secondaryHref="/locations"
        secondaryLabel="Pick your city"
      />

      <section className="panel panel--ice">
        <div className="wrap">
          <h2 className="section-title">
            <span className="section-title__mark" aria-hidden="true" />
            What we handle
          </h2>
          <p className="lede">Start with the closest service. If you need emergency response plus soil remediation, mention both on the same call.</p>
          <ul className="tile-grid">
            {featured.map((page) => {
              const photo = getPhoto(imageForServiceSlug(page.slug));
              return (
                <li key={page.slug}>
                  <PhotoCard
                    href={`/${page.slug}`}
                    title={pageLinkLabel(page)}
                    subtitle={photo.caption}
                    imageKey={imageForServiceSlug(page.slug)}
                  />
                </li>
              );
            })}
            <li>
              <PhotoCard href="/services" title="All services" subtitle="Full list" imageKey="hero-service" />
            </li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="wrap">
          <h2 className="section-title">
            <span className="section-title__mark" aria-hidden="true" />
            Locations
          </h2>
          <p className="lede">Pick your city for local dispatch notes and a direct line to help.</p>
          <ul className="city-grid">
            {cities.slice(0, 12).map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/locations">All cities</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="panel panel--ice">
        <div className="wrap">
          <FaqSection title="Quick answers" items={homeFaqs} />
        </div>
      </section>
    </main>
  );
}
