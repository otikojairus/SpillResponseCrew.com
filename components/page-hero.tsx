import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageKey } from "@/lib/images";
import { getPhoto } from "@/lib/images";
import { heroMainImageKey, heroTilesFor } from "@/lib/hero-gallery";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

type PageHeroProps = {
  kicker?: string;
  title: string;
  lead: ReactNode;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "home" | "page";
  imageKey?: ImageKey;
  slug?: string;
};

export function PageHero({
  kicker,
  title,
  lead,
  ctaLabel = "Call now",
  secondaryHref,
  secondaryLabel,
  variant = "page",
  imageKey = "hero-service",
  slug,
}: PageHeroProps) {
  const mainKey = heroMainImageKey(slug, variant, imageKey);
  const photo = getPhoto(mainKey);
  const tiles = heroTilesFor(slug, variant);

  return (
    <section className={`runway-hero runway-hero--${variant}`} aria-labelledby="runway-hero-title">
      <div className="runway-hero__bg" aria-hidden="true">
        <Image src={photo.src} alt="" fill priority sizes="100vw" className="runway-hero__bg-img" />
        <div className="runway-hero__bg-shade" />
      </div>

      <div className="wrap runway-hero__layout">
        <div className="runway-hero__copy">
          {kicker && <p className="runway-kicker">{kicker}</p>}
          <h1 id="runway-hero-title">{title}</h1>
          <div className="runway-lead">{lead}</div>
          <div className="runway-actions">
            <a className="btn btn-beacon btn-beacon--lg" href={`tel:${PHONE_E164}`}>
              <span className="btn-label">{ctaLabel}</span>
              <span className="btn-value">{PHONE_DISPLAY}</span>
            </a>
            {secondaryHref && secondaryLabel && (
              <Link className="btn btn-outline-light" href={secondaryHref}>{secondaryLabel}</Link>
            )}
          </div>
          <ul className="runway-trust" aria-label="Service highlights">
            <li>
              <span className="runway-trust__icon" aria-hidden="true">◎</span>
              Live dispatch
            </li>
            <li>
              <span className="runway-trust__icon" aria-hidden="true">↗</span>
              Mobile to you
            </li>
            <li>
              <span className="runway-trust__icon" aria-hidden="true">✦</span>
              Canada-wide
            </li>
          </ul>
        </div>

        <div className="runway-mosaic" aria-label="Related spill services">
          <div className="runway-mosaic__featured">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(max-width: 900px) 92vw, 42vw"
              className="runway-mosaic__img"
            />
            <div className="runway-mosaic__featured-cap">
              <span className="runway-mosaic__tag">{variant === "home" ? "24/7 response" : "On-site cleanup"}</span>
              <p>{photo.caption}</p>
            </div>
          </div>
          <ul className="runway-mosaic__tiles">
            {tiles.map((tile) => {
              const thumb = getPhoto(tile.key);
              return (
                <li key={tile.href + tile.key}>
                  <Link href={tile.href} className="runway-tile">
                    <span className="runway-tile__thumb">
                      <Image src={thumb.src} alt="" fill sizes="120px" className="runway-mosaic__img" />
                    </span>
                    <span className="runway-tile__label">{tile.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
