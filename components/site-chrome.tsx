"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { PHONE_DISPLAY, PHONE_E164, PILLAR_SLUG, SITE_NAME } from "@/lib/pages";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Cities" },
  { href: `/${PILLAR_SLUG}`, label: "Environmental" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="dispatch-ticker">
        <div className="dispatch-ticker__track">
          <span className="dispatch-ticker__badge">Live</span>
          <span>24/7 emergency spill response and hazmat cleanup across Canada</span>
          <span className="dispatch-ticker__sep" aria-hidden="true">·</span>
          <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap site-header__row">
          <Link href="/" className="site-header__logo" onClick={() => setOpen(false)} aria-label={`${SITE_NAME} home`}>
            <BrandLogo />
          </Link>
          <nav className={`site-header__nav ${open ? "is-open" : ""}`} aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="site-header__call btn btn-beacon btn--compact" href={`tel:${PHONE_E164}`}>
            <span className="btn-label">Call</span>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="menu-btn__bars" aria-hidden="true" />
            Menu
          </button>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__beacon" aria-hidden="true" />
      <div className="wrap site-footer__grid">
        <div>
          <BrandLogo />
          <p className="site-footer__blurb">
            Mobile spill response, hazmat cleanup, and soil remediation across Canada. One number for industrial sites and emergencies.
          </p>
        </div>
        <div className="site-footer__cols">
          <div>
            <p className="site-footer__label">Urgent</p>
            <Link href="/emergency-spill-response">Emergency spill response</Link>
            <Link href="/hazmat-cleanup">Hazmat cleanup</Link>
          </div>
          <div>
            <p className="site-footer__label">Cities</p>
            <Link href="/locations">All metros</Link>
            <Link href="/environmental-spill-response-toronto">Environmental spill response Toronto</Link>
            <Link href="/environmental-spill-response-vancouver">Environmental spill response Vancouver</Link>
          </div>
        </div>
        <a className="site-footer__call btn btn-beacon btn-block" href={`tel:${PHONE_E164}`}>
          <span className="btn-label">Dispatch</span>
          <span className="btn-value">{PHONE_DISPLAY}</span>
        </a>
      </div>
      <div className="wrap site-footer__meta">
        <span>© {new Date().getFullYear()} {SITE_NAME}</span>
      </div>
    </footer>
  );
}

export function StickyMobileCta() {
  return (
    <div className="mobile-dial">
      <a href={`tel:${PHONE_E164}`}>
        <span className="mobile-dial__pulse" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
