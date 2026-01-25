import { siteDescription, siteName, siteUrl } from "@/lib/seo";

type Schema = Record<string, unknown>;

export const getOrganizationSchema = (): Schema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  description: "Veteran-owned exclusive network and business ecosystem",
  url: siteUrl,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "partnerships",
      url: `${siteUrl}/contact`,
    },
    {
      "@type": "ContactPoint",
      contactType: "onboarding",
      url: `${siteUrl}/join`,
    },
  ],
});

export const getWebSiteSchema = (): Schema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
});
