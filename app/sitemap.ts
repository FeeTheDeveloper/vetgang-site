import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const publicRoutes = ["", "/join", "/partners", "/network", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
