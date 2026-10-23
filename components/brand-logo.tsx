import { SITE_NAME } from "@/lib/pages";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  const title = compact ? "CSC" : SITE_NAME;
  return (
    <svg
      className={`brand-logo${compact ? " brand-logo-compact" : ""}`}
      viewBox="0 0 300 44"
      role="img"
      aria-label={SITE_NAME}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="haz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d547" />
          <stop offset="100%" stopColor="#2d8f4e" />
        </linearGradient>
      </defs>
      <rect x="4" y="8" width="36" height="28" rx="6" fill="#141820" stroke="url(#haz-grad)" strokeWidth="2.5" />
      <path d="M14 22 H30 M22 14 V30" stroke="#f5d547" strokeWidth="2.5" strokeLinecap="round" />
      <text
        x="48"
        y="21"
        fill="currentColor"
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontSize="12.5"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        {title}
      </text>
      {!compact && (
        <text
          x="48"
          y="35"
          fill="currentColor"
          opacity="0.5"
          fontFamily="var(--font-body), system-ui, sans-serif"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          CONTAIN · RECOVER · REMEDIATE
        </text>
      )}
    </svg>
  );
}
