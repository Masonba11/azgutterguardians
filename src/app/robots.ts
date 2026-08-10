import type { MetadataRoute } from "next";
import { absoluteUrl, business } from "@/config/business";

/**
 * Production robots.txt for Arizona Gutter Guardians.
 * Allows crawling of public pages and assets; blocks API routes only.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: business.siteUrl,
  };
}
