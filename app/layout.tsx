import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { SiteFooter, SiteHeader, StickyMobileCta } from "@/components/site-chrome";
import { absoluteUrl, SITE_NAME } from "@/lib/pages";
import "./globals.css";

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: { default: "Canada Spill Cleanup | 24/7 Response", template: "%s" },
  description: "24/7 spill cleanup, hazmat response, and soil remediation across Canada. Call for emergency dispatch.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "National spill cleanup with metro dispatch across Canada.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${body.variable} ${display.variable}`}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <StickyMobileCta />
      </body>
    </html>
  );
}
