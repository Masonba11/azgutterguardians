import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Gutter Guard Blog & Resources | Arizona Gutter Guardians",
  description:
    "Practical guides on gutter guards for pine needles, cost factors, screens vs. guards, and snow—written for White Mountains homeowners.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ])}
      />

      <section className="border-b border-border bg-light py-10 sm:py-14">
        <div className="container-site">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <h1 className="mt-6 text-4xl sm:text-5xl">Blog & resources</h1>
          <p className="mt-4 max-w-2xl text-lg text-medium leading-relaxed">
            Straightforward answers for White Mountains homeowners researching
            gutter guards, pine needles, cost, and winter performance.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-lg border border-border bg-white p-6"
            >
              <p className="text-sm text-medium">
                {post.datePublished} · {post.readingTime}
              </p>
              <h2 className="mt-3 text-2xl">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="hover:text-primary-dark"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-medium">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}/`}
                className="mt-5 text-sm font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
