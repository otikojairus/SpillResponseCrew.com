import Image from "next/image";
import Link from "next/link";
import type { ImageKey } from "@/lib/images";
import { getPhoto } from "@/lib/images";

type PhotoCardProps = {
  href: string;
  title: string;
  subtitle?: string;
  imageKey: ImageKey;
};

export function PhotoCard({ href, title, subtitle, imageKey }: PhotoCardProps) {
  const photo = getPhoto(imageKey);
  return (
    <Link href={href} className="lane-card">
      <div className="lane-card__media">
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 33vw" className="lane-card__img" />
        <span className="lane-card__shine" aria-hidden="true" />
      </div>
      <div className="lane-card__body">
        <span className="lane-card__title">{title}</span>
        {subtitle && <span className="lane-card__sub">{subtitle}</span>}
        <span className="lane-card__arrow" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
