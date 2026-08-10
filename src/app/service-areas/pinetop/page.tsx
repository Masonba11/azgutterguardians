import Link from "next/link";
import { business } from "@/config/business";
import { pinetopFaqs } from "@/content/faqs";
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
  title: "Gutter Guard Installation Pinetop, AZ | Arizona Gutter Guardians",
  description:
    "Gutter guard installation in Pinetop, Arizona for wooded homes, cabins, and second homes. Reduce pine needle clogs and request a free quote.",
  path: "/service-areas/pinetop/",
});

export default function PinetopPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas/" },
            { name: "Pinetop", path: "/service-areas/pinetop/" },
          ]),
          buildServiceSchema({
            name: "Gutter Guard Installation in Pinetop, Arizona",
            description:
              "Gutter guard installation for Pinetop, AZ cabins, second homes, and wooded residential properties.",
            url: `${business.url}/service-areas/pinetop/`,
            areaServed: [{ name: "Pinetop" }],
          }),
          buildFaqSchema(pinetopFaqs),
        ]}
      />

      <Hero
        title="Gutter Guard Installation in Pinetop, Arizona"
        description="Keep wooded Pinetop roofs draining when pine needles, leaves, and snow season arrive—especially valuable for cabins and second homes between visits."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Pinetop" },
            ]}
          />
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>Gutter protection for heavily wooded Pinetop properties</h2>
          <p>
            Pinetop&apos;s tree canopy is part of what makes the area special—and
            what fills gutters. Needles and small debris accumulate quietly. By
            the time overflow shows up on siding or under eaves, the trough and
            downspouts may already be tightly packed.
          </p>
          <p>
            Arizona Gutter Guardians installs{" "}
            <Link href="/gutter-guard-installation/">gutter guards</Link> for
            Pinetop homeowners who want protection matched to forested lots—not
            desert marketing copy.
          </p>
        </div>
      </section>

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Cabins and second homes" />
            <p className="mt-4 leading-relaxed text-medium">
              Many Pinetop properties are not checked daily. A storm while you
              are away can push water over clogged gutters for days. Guards help
              keep the system clearer between trips so you spend less of a
              weekend visit on ladder work.
            </p>
          </div>
          <div>
            <SectionHeading title="Seasonal maintenance and snow" />
            <p className="mt-4 leading-relaxed text-medium">
              Seasonal needle drop, leaf litter, and snow all affect how gutters
              behave. Clearer troughs give meltwater a better exit path. We set
              honest expectations about winter performance when you{" "}
              <Link
                href="/get-a-quote/"
                className="font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                request a quote
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>Leaves, roof debris, and keeping gutters clear while away</h2>
          <p>
            Even with guards, light surface debris can collect. The difference
            is how much material ends up inside the gutter where it blocks
            outlets. For owners who visit seasonally, that difference can mean
            fewer overflow surprises and less scramble to find emergency
            cleaning.
          </p>
          <p>
            If gutters are already full, start with{" "}
            <Link href="/gutter-cleaning/">professional cleaning</Link>, then
            plan protection. Repair issues like sagging or leaks can be
            discussed through our{" "}
            <Link href="/gutter-repair/">gutter repair</Link> service.
          </p>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why choose Arizona Gutter Guardians" />
            <p className="mt-4 leading-relaxed text-medium">
              We focus on White Mountains conditions—pine needles, wooded lots,
              and part-time occupancy—and we do not invent separate Pinetop
              storefronts. One team, clear communication, local service-area
              coverage.
            </p>
          </div>
          <div>
            <SectionHeading title="Nearby service areas" />
            <ul className="mt-4 space-y-2 text-medium">
              <li>
                <Link
                  href="/service-areas/show-low/"
                  className="font-semibold text-primary-dark underline-offset-2 hover:underline"
                >
                  Show Low
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

      <FAQ items={pinetopFaqs} />
      <CTASection
        title="Get a free Pinetop gutter quote"
        description="Share your property details and whether it is a full-time home or a cabin you visit seasonally."
      />
    </>
  );
}
