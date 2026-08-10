import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { FAQ } from "@/components/ui/FAQ";
import { buildMetadata } from "@/lib/seo";
import {
  JsonLd,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";
import { absoluteUrl } from "@/config/business";
import { getBlogContent } from "@/content/blog-bodies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Arizona Gutter Guardians`,
    description: post.description,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = getBlogContent(slug);
  if (!content) notFound();

  const url = absoluteUrl(`/blog/${post.slug}/`);

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
          buildArticleSchema({
            title: post.title,
            description: post.description,
            url,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          ...(content.faqs ? [buildFaqSchema(content.faqs)] : []),
        ]}
      />

      <article>
        <header className="border-b border-border bg-light py-10 sm:py-12">
          <div className="container-site max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: post.title },
              ]}
            />
            <p className="mt-6 text-sm text-medium">
              <time dateTime={post.datePublished}>{post.datePublished}</time>
              {" · "}
              {post.readingTime}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-medium">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="container-site prose-site max-w-3xl py-12 sm:py-14">
          {content.body}
          <p className="mt-10">
            Ready for protection on your White Mountains home?{" "}
            <Link href="/gutter-guard-installation/">
              Learn about gutter guard installation
            </Link>{" "}
            or{" "}
            <Link href="/get-a-quote/">get a free quote</Link>.
          </p>
        </div>
      </article>

      {content.faqs ? (
        <div className="bg-light">
          <FAQ items={content.faqs} title="Article FAQs" />
        </div>
      ) : null}

      <CTASection />
    </>
  );
}
