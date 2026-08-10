import Link from "next/link";
import { business } from "@/config/business";
import { Hero } from "@/components/ui/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Arizona Gutter Guardians | White Mountains Gutter Protection",
  description:
    "Learn about Arizona Gutter Guardians—gutter guard installation, cleaning, and repair for Show Low, Pinetop, Lakeside, and the White Mountains.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <Hero
        title="About Arizona Gutter Guardians"
        description="A White Mountains-focused gutter service helping homeowners protect their homes from pine needles, leaves, and clogged drainage."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
        }
      />

      <article className="container-site prose-site max-w-3xl py-14 sm:py-16">
        <h2>Local gutter protection for pine country</h2>
        <p>
          {business.name} helps homeowners across Arizona&apos;s White Mountains
          with{" "}
          <Link href="/gutter-guard-installation/">
            gutter guard installation
          </Link>
          ,{" "}
          <Link href="/gutter-cleaning/">gutter cleaning</Link>, and{" "}
          <Link href="/gutter-repair/">gutter repair</Link>. Our primary
          communities include Show Low, Pinetop, and Lakeside.
        </p>
        <p>
          We built this site—and our service messaging—around the debris and
          weather patterns local roofs actually face. That means practical talk
          about ponderosa needles, seasonal maintenance, and winter drainage
          instead of generic national claims.
        </p>

        <h2>How we work</h2>
        <p>
          Start with a{" "}
          <Link href="/get-a-quote/">free quote</Link>. When needed, we inspect
          and measure, then recommend protection that fits your gutters and tree
          cover. We keep communication clear and avoid inventing credentials,
          review scores, or guarantees that have not been provided.
        </p>

        <h2>Service area, not fake storefronts</h2>
        <p>
          Our city pages describe where we serve homeowners. They are not
          separate branch locations. If you need help near the White Mountains,{" "}
          <Link href="/contact/">contact us</Link> with your address and we will
          confirm coverage.
        </p>
      </article>

      <CTASection />
    </>
  );
}
