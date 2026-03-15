import type { Metadata } from "next";
import AirspaceBackground from "@/components/background/AirspaceBackground";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { ogImageForTitle, siteDescription, siteKeywords, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: ogImageForTitle(siteName),
        width: 1200,
        height: 630,
        alt: `${siteName} share image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImageForTitle(siteName)],
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AirspaceBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 pt-4 lg:pt-6">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
