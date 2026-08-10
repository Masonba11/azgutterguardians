import Link from "next/link";
import { business } from "@/config/business";
import { lakesideFaqs } from "@/content/faqs";
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
  title: "Gutter Guard Installation Lakeside, AZ | Arizona Gutter Guardians",
  description:
    "Professional gutter guard installation in Lakeside, Arizona. Protect residential gutters from pine needles, leaves, and White Mountains weather. Free quote.",
  path: "/service-areas/lakeside/",
});

export default function LakesidePage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas/" },
            { name: "Lakeside", path: "/service-areas/lakeside/" },
          ]),
          buildServiceSchema({
            name: "Gutter Guard Installation in Lakeside, Arizona",
            description:
              "Gutter guard installation for Lakeside, AZ homes dealing with pine needles, leaves, and seasonal mountain weather.",
            url: `${business.url}/service-areas/lakeside/`,
            areaServed: [{ name: "Lakeside" }],
          }),
          buildFaqSchema(lakesideFaqs),
        ]}
      />

      <Hero
        title="Gutter Guard Installation in Lakeside, Arizona"
        description="Help Lakeside gutters stay clearer through pine needle drop, leaf litter, and White Mountains weather with professional gutter protection."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Lakeside" },
            ]}
          />
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>Residential gutter protection in Lakeside</h2>
          <p>
            Lakeside homeowners share the White Mountains challenge: organic
            debris arrives steadily, not just once a year. Pine needles mix with
            leaves and roof grit, and gutters that looked fine in spring can be
            restricted by fall.
          </p>
          <p>
            Arizona Gutter Guardians offers{" "}
            <Link href="/gutter-guard-installation/">
              professional gutter guard installation
            </Link>{" "}
            for Lakeside properties as part of our broader White Mountains
            service area—not as a fake standalone Lakeside office.
          </p>
        </div>
      </section>

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Pine needles, leaves, and debris" />
            <p className="mt-4 leading-relaxed text-medium">
              Mixed debris is common on Lakeside roofs. Needles work into
              corners and outlets while larger leaves mat on top. Protection
              that accounts for both water flow and fine debris tends to
              outperform wide-gap screens alone.
            </p>
          </div>
          <div>
            <SectionHeading title="Seasonal gutter concerns" />
            <p className="mt-4 leading-relaxed text-medium">
              Storms, wind events, and temperature swings all affect how debris
              moves. A seasonal maintenance mindset—inspection after heavy drop,
              lighter checks before winter—pairs well with guards. Cleaning is
              still available when you need a reset via{" "}
              <Link
                href="/gutter-cleaning/"
                className="font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                gutter cleaning
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>White Mountains weather and gutter maintenance</h2>
          <p>
            Elevation weather means rain, melt, and occasional heavy debris
            loads in short windows. When gutters cannot drain, water finds the
            next available path—often against wood trim or into soil next to the
            foundation. Guards help keep the intended path open more of the
            year.
          </p>
          <p>
            If hangers are loose or joints leak, ask about{" "}
            <Link href="/gutter-repair/">gutter repair</Link> before or with
            your installation plan. For cost factors, see{" "}
            <Link href="/blog/gutter-guard-cost/">
              how much gutter guards cost in Arizona
            </Link>
            .
          </p>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why choose Arizona Gutter Guardians" />
            <p className="mt-4 leading-relaxed text-medium">
              Straightforward quotes, local service-area focus, and
              recommendations grounded in what Lakeside roofs actually collect.
              We keep claims honest and content useful.
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
                  href="/service-areas/pinetop/"
                  className="font-semibold text-primary-dark underline-offset-2 hover:underline"
                >
                  Pinetop
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

      <FAQ items={lakesideFaqs} />
      <CTASection
        title="Get a free Lakeside gutter quote"
        description="Request a quote online or call—tell us about needle drop, overflow, or maintenance goals for your home."
      />
    </>
  );
}
