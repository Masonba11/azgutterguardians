import type { MetadataRoute } from "next";
import { absoluteUrl, business } from "@/config/business";
import { blogPosts } from "@/content/blog";

type StaticSitemapPage = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

/**
 * Indexable static pages (trailing-slash paths match next.config trailingSlash).
 * Privacy/Terms are intentionally omitted — they are noindex.
 */
const staticPages: StaticSitemapPage[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  {
    path: "/gutter-guard-installation/",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  ...business.services
    .filter((service) => !service.primary)
    .map((service) => ({
      path: service.path,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  { path: "/service-areas/", changeFrequency: "monthly", priority: 0.8 },
  ...business.primaryCities.map((city) => ({
    path: city.path,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  })),
  { path: "/get-a-quote/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about/", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact/", changeFrequency: "yearly", priority: 0.6 },
];

/**
 * Sitemap entries are generated from business config + blog content.
 * Adding a city to business.primaryCities or a post to blogPosts
 * automatically includes it here — no duplicate route lists needed.
 *
 * lastModified is omitted for static marketing pages (no reliable per-page
 * dates). Blog posts use dateModified from content metadata.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}/`),
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
