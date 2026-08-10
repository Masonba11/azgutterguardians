import Link from "next/link";
import { cleaningFaqs } from "@/content/faqs";
import { Hero } from "@/components/ui/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import {
  JsonLd,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Gutter Cleaning White Mountains AZ | Arizona Gutter Guardians",
  description:
    "Professional gutter cleaning in Show Low, Pinetop, and Lakeside. Clear pine needles, leaves, roof debris, and downspouts. Get a free quote.",
  path: "/gutter-cleaning/",
});

export default function GutterCleaningPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gutter Cleaning", path: "/gutter-cleaning/" },
          ]),
          buildFaqSchema(cleaningFaqs),
        ]}
      />

      <Hero
        title="Professional Gutter Cleaning in Arizona's White Mountains"
        description="Clear pine needles, leaves, and roof debris so your gutters and downspouts can move water again—serving Show Low, Pinetop, Lakeside, and nearby."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Gutter Cleaning" },
            ]}
          />
        }
      />

      <article className="container-site prose-site max-w-3xl py-14 sm:py-16">
        <h2>Gutter cleaning for pine needles and mountain debris</h2>
        <p>
          Open gutters in the White Mountains collect more than the occasional
          leaf. Ponderosa needles sift into troughs and pack downspouts. Combine
          that with twigs, shingle grit, and seasonal leaves, and water has
          nowhere to go—often overflowing near fascia, siding, and foundations.
        </p>

        <h2>What we clear</h2>
        <ul>
          <li>Pine needles packed into gutters and outlets</li>
          <li>Leaves and organic debris after seasonal drop</li>
          <li>Roof grit and small twigs</li>
          <li>Downspouts that no longer drain freely</li>
        </ul>

        <h2>Preventing gutter overflow</h2>
        <p>
          Cleaning restores flow for the season. If overflow has already stained
          siding or saturated soil near the foundation, clearing the system is
          the first step. We also look for obvious pitch or joint issues that
          may need{" "}
          <Link href="/gutter-repair/">gutter repair</Link> attention.
        </p>

        <h2>Seasonal gutter maintenance</h2>
        <p>
          Many White Mountains homeowners schedule cleaning after major needle
          drop and again before winter. Heavily wooded lots may need more
          frequent visits until longer-term protection is in place.
        </p>

        <h2>Longer-term prevention: gutter guards</h2>
        <p>
          Cleaning solves today&apos;s clog.{" "}
          <Link href="/gutter-guard-installation/">
            Gutter guard installation
          </Link>{" "}
          reduces how often that clog returns—especially valuable for homes
          surrounded by pines or for cabins that sit vacant part of the year.
          Ask about both services when you{" "}
          <Link href="/get-a-quote/">request a free quote</Link>.
        </p>
      </article>

      <div className="bg-light">
        <FAQ items={cleaningFaqs} />
      </div>
      <CTASection
        title="Schedule gutter cleaning"
        description="Tell us about your property and debris concerns. We will follow up with clear next steps."
      />
    </>
  );
}
