export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gutter-guards-for-pine-needles",
    title: "Best Gutter Guards for Pine Needles in Arizona",
    description:
      "Learn which gutter protection styles handle ponderosa pine needles in Arizona's White Mountains—and what homeowners in Show Low, Pinetop, and Lakeside should look for.",
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    readingTime: "7 min read",
    excerpt:
      "Pine needles clog gutters faster than most leaves. Here's how to choose protection that actually works in the White Mountains.",
  },
  {
    slug: "gutter-guard-cost",
    title: "How Much Do Gutter Guards Cost in Arizona?",
    description:
      "A practical guide to what influences gutter guard pricing in Arizona—home size, product type, gutter condition, and why quotes vary.",
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
    readingTime: "6 min read",
    excerpt:
      "Gutter guard cost depends on more than square footage. Understand the factors behind a fair Arizona quote.",
  },
  {
    slug: "gutter-guards-vs-screens",
    title: "Gutter Guards vs. Gutter Screens: What's the Difference?",
    description:
      "Compare gutter guards and gutter screens—how they differ, how they handle debris, and which approach fits White Mountains homes.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    readingTime: "6 min read",
    excerpt:
      "Not all gutter covers are the same. Learn the practical differences between guards and screens.",
  },
  {
    slug: "do-gutter-guards-work-with-snow",
    title: "Do Gutter Guards Work With Snow?",
    description:
      "Honest answers about gutter guards and snow for Arizona White Mountains homes—drainage, ice considerations, and realistic expectations.",
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
    readingTime: "5 min read",
    excerpt:
      "Snow changes how gutters behave. Here's what White Mountains homeowners should know before installing guards.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
