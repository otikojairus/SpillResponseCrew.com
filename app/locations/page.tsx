import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/visuals";
import { getPhoto } from "@/lib/images";
import { cityLocationEntries } from "@/lib/locations";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle(`Spill Cleanup Cities | ${SITE_NAME}`),
  description: trimDescription(
    `Emergency spill response in Toronto, Vancouver, Calgary, Montreal, and metros across Canada. Open your city page for local notes, then call ${PHONE_DISPLAY}.`,
  ),
  alternates: { canonical: "/locations" },
};

const locationsIntro =
  "Choose your city below for local dispatch details and a direct number to call. " +
  "If you do not see your suburb, call anyway—most listings cover the wider metro area. " +
  "Have your site address, product type, and photos of the spill handy when you ring.";

const locFaqs = [
  {
    q: "My suburb is not listed—can you still come?",
    a: "Usually yes. Metro pages cover the wider urban area. Call " + PHONE_DISPLAY + " with your street address or plant gate.",
  },
  {
    q: "Why is each city one link?",
    a: "The hub lists one entry per metro. That page links to environmental spill response locally; national service pages cover all of Canada.",
  },
  {
    q: "Do you work after hours?",
    a: "Yes—emergency spill response runs 24/7. Remediation projects may follow disposal facility hours.",
  },
];

const breadcrumbs = [
  { name: "Home", href: absoluteUrl() },
  { name: "Cities", href: absoluteUrl("locations") },
];

export default function LocationsPage() {
  const cities = cityLocationEntries();
  const photo = getPhoto("hero-local");

  return (
    <main>
      <BreadcrumbJsonLd crumbs={breadcrumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: locFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <nav className="breadcrumb wrap" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">Cities</span>
      </nav>

      <header className="page-intro">
        <div className="wrap">
          <div className="inline-photo">
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" priority />
          </div>
          <p className="eyebrow">Cities</p>
          <h1>Spill cleanup by Canadian metro</h1>
          <p className="lede">{locationsIntro}</p>
          <a className="btn btn-beacon" href={`tel:${PHONE_E164}`}>
            <span className="btn-label">Call</span>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      <div className="wrap panel">
        <h2 className="content-section">Choose your city</h2>
        <ul className="city-grid">
          {cities.map((c) => (
            <li key={c.href}>
              <Link href={c.href}>{c.name}</Link>
            </li>
          ))}
        </ul>
        <FaqSection title="Cities FAQ" items={locFaqs} />
      </div>
    </main>
  );
}
