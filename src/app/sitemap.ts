import { business } from "@/config/business";
import { blogPosts } from "@/content/blog";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/gutter-guard-installation/",
    "/gutter-cleaning/",
    "/gutter-repair/",
    "/service-areas/",
    "/service-areas/show-low/",
    "/service-areas/lakeside/",
    "/service-areas/pinetop/",
    "/about/",
    "/contact/",
    "/get-a-quote/",
    "/blog/",
    "/privacy/",
    "/terms/",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${business.url}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === "/"
          ? 1
          : path.includes("gutter-guard") || path.includes("service-areas/")
            ? 0.9
            : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${business.url}/blog/${post.slug}/`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
