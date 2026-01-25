export const siteName = "Vet Gang";
export const siteDescription = "Veteran-owned exclusive network and business ecosystem.";
export const siteKeywords = [
  "veteran-owned",
  "exclusive network",
  "business ecosystem",
  "verified businesses",
  "veteran entrepreneurs",
  "partnerships",
  "procurement",
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vetgang.com";

export const ogImageForTitle = (title: string) => `/og?title=${encodeURIComponent(title)}`;
