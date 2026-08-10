import Link from "next/link";
import { business } from "@/config/business";
import { showLowFaqs } from "@/content/faqs";
import { Hero } from "@/components/ui/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import {
  JsonLd,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Gutter Guard Installation Show Low, AZ | Arizona Gutter Guardians",
  description:
    "Professional gutter guard installation in Show Low, Arizona. Protect your gutters from pine needles, leaves and debris. Request a free quote from Arizona Gutter Guardians.",
  path: "/service-areas/show-low/",
});

export default function ShowLowPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas/" },
            { name: "Show Low", path: "/service-areas/show-low/" },
          ]),
          buildServiceSchema({
            name: "Gutter Guard Installation in Show Low, Arizona",
            description:
              "Gutter guard installation for Show Low, AZ homes dealing with ponderosa pine needles, seasonal debris, and winter melt.",
            url: `${business.url}/service-areas/show-low/`,
            areaServed: [{ name: "Show Low" }],
          }),
          buildFaqSchema(showLowFaqs),
        ]}
      />

      <Hero
        title="Gutter Guard Installation in Show Low, Arizona"
        description="Protect Show Low homes from ponderosa pine needles, seasonal debris, and clogged gutters with professional gutter protection from Arizona Gutter Guardians."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Show Low" },
            ]}
          />
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>Protect your Show Low home from clogged gutters</h2>
          <p>
            Show Low sits among ponderosa pines that shed fine needles onto
            roofs and into open gutters. Those needles do not behave like large
            leaves—they sift into troughs, pack outlets, and turn a light rain
            into an overflow event along fascia and landscaping.
          </p>
          <p>
            Arizona Gutter Guardians provides{" "}
            <Link href="/gutter-guard-installation/">
              gutter guard installation
            </Link>{" "}
            for Show Low homeowners who want fewer emergency clean-outs and
            more reliable drainage through the seasons.
          </p>
        </div>
      </section>

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Professional gutter guard installation" />
            <p className="mt-4 leading-relaxed text-medium">
              We start by understanding your gutter condition and debris
              pattern. Show Low properties vary—from in-town lots to more wooded
              edges—and the right cover depends on what actually lands on your
              roof, not a one-size brochure.
            </p>
          </div>
          <div>
            <SectionHeading title="Gutter protection for pine needles" />
            <p className="mt-4 leading-relaxed text-medium">
              Needle-heavy roofs need openings fine enough to block debris while
              still passing water. We discuss options suited to that challenge
              and set realistic maintenance expectations. Learn more in our
              article on{" "}
              <Link
                href="/blog/gutter-guards-for-pine-needles/"
                className="font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                gutter guards for pine needles
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>Why gutter guards make sense in Show Low</h2>
          <p>
            Beyond needles, Show Low homes see seasonal debris and winter
            conditions that stress drainage. Snow and meltwater need a clear
            path off the roof. When gutters are packed with organic material,
            melt can spill behind gutters or pool near the foundation instead of
            exiting through downspouts.
          </p>
          <p>
            Residential properties in wooded areas benefit most: less time on
            ladders, fewer surprise overflows after storms, and a simpler
            maintenance routine focused on light surface checks rather than
            scooping out packed troughs.
          </p>
          <h3>Snow and winter considerations</h3>
          <p>
            No product removes every winter concern, but debris-free gutters
            support healthier melt drainage. We talk through snow performance
            honestly during your quote—see also{" "}
            <Link href="/blog/do-gutter-guards-work-with-snow/">
              do gutter guards work with snow?
            </Link>
          </p>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why choose Arizona Gutter Guardians" />
            <p className="mt-4 leading-relaxed text-medium">
              We serve Show Low as part of our White Mountains coverage—one
              business focused on gutter protection, cleaning, and common
              repairs. You get clear recommendations without fabricated claims
              about ratings, warranties, or years in business.
            </p>
          </div>
          <div>
            <SectionHeading title="Nearby service areas" />
            <ul className="mt-4 space-y-2 text-medium">
              <li>
                <Link
                  href="/service-areas/pinetop/"
                  className="font-semibold text-primary-dark underline-offset-2 hover:underline"
                >
                  Pinetop
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/lakeside/"
                  className="font-semibold text-primary-dark underline-offset-2 hover:underline"
                >
                  Lakeside
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/"
                  className="font-semibold text-primary-dark underline-offset-2 hover:underline"
                >
                  All service areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={showLowFaqs} />
      <CTASection
        title="Get a free Show Low gutter quote"
        description="Tell us about your home and debris concerns. Call or request a quote online."
      />
    </>
  );
}
