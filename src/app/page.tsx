import Link from "next/link";
import { business } from "@/config/business";
import { homeFaqs } from "@/content/faqs";
import { Hero } from "@/components/ui/Hero";
import { TrustSection } from "@/components/ui/TrustSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { LocationCard } from "@/components/ui/LocationCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildFaqSchema, buildServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title:
    "Gutter Guard Installation in the White Mountains, AZ | Arizona Gutter Guardians",
  description:
    "Professional gutter guard installation in Show Low, Pinetop and Lakeside, AZ. Protect your gutters from pine needles, leaves and debris. Get a free quote today.",
  path: "/",
});

const locationBlurbs = {
  "show-low":
    "Ponderosa needles, seasonal debris, and winter melt make Show Low gutters a high-maintenance job without protection.",
  lakeside:
    "Lakeside homes deal with pine needles, leaves, and White Mountains weather that quickly fills open gutters.",
  pinetop:
    "Wooded lots, cabins, and second homes in Pinetop benefit from guards that keep working between visits.",
} as const;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            name: "Gutter Guard Installation",
            description:
              "Professional gutter guard installation for homes in Show Low, Pinetop, Lakeside, and Arizona's White Mountains.",
            url: `${business.url}/gutter-guard-installation/`,
          }),
          buildFaqSchema(homeFaqs),
        ]}
      />

      <Hero
        title="Gutter Guard Installation in Arizona's White Mountains"
        description="Protect your home from pine needles, leaves, debris and clogged gutters with professional gutter guard installation throughout Show Low, Pinetop and Lakeside."
        showServingLine
        imageLabel="Protected residential gutters in a wooded White Mountains setting"
      />

      <TrustSection />

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Services"
            title="Gutter protection, cleaning, and repair"
            description="Start with the service you need today—or ask us which option makes the most sense for your property."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {business.services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.shortDescription}
                href={service.path}
                featured={service.primary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Why gutter guards matter in the White Mountains"
            description="Elevation, ponderosa pines, and seasonal weather create debris loads that many standard gutter setups were never designed to handle alone."
          />
          <div className="space-y-4 text-medium leading-relaxed">
            <p>
              Homes around Show Low, Pinetop, and Lakeside sit among trees that
              shed needles year-round. Add autumn leaves, roof grit, and winter
              melt, and open gutters can clog fast—leading to overflow near
              foundations, fascia, and landscaping.
            </p>
            <p>
              Professional{" "}
              <Link
                href="/gutter-guard-installation/"
                className="font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                gutter guard installation
              </Link>{" "}
              helps keep water moving while reducing how often you climb a
              ladder to scoop out debris.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div
            className="min-h-[240px] rounded-lg border border-border bg-[linear-gradient(145deg,#1F4D2A,#2F6B3B,#F3F5F3)]"
            role="img"
            aria-label="Pine needles and forest canopy typical of Arizona White Mountains homes"
          />
          <div>
            <SectionHeading
              title="Pine needle protection for local roofs"
              description="Fine ponderosa needles slip through many wide-gap screens. We recommend protection suited to the debris White Mountains homeowners actually see."
            />
            <p className="mt-4 leading-relaxed text-medium">
              Learn more in our guide on{" "}
              <Link
                href="/blog/gutter-guards-for-pine-needles/"
                className="font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                gutter guards for pine needles
              </Link>
              , or request a quote and we will match options to your roof and
              tree cover.
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Service areas"
            title="Serving Show Low, Pinetop, Lakeside & nearby"
            description="Arizona Gutter Guardians provides gutter services across the White Mountains—without inventing fake storefronts in each town."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {business.primaryCities.map((city) => (
              <LocationCard
                key={city.slug}
                name={city.name}
                href={city.path}
                description={
                  locationBlurbs[city.slug as keyof typeof locationBlurbs]
                }
              />
            ))}
          </div>
          <p className="mt-6 text-sm text-medium">
            <Link
              href="/service-areas/"
              className="font-semibold text-primary-dark underline-offset-2 hover:underline"
            >
              View all service areas →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            title="Why choose Arizona Gutter Guardians"
            description="A local, conversion-focused partner for homeowners who want clearer gutters and practical advice."
          />
          <ul className="space-y-4 text-medium leading-relaxed">
            <li>
              <strong className="text-charcoal">Local focus:</strong> Content,
              recommendations, and scheduling centered on White Mountains
              conditions—not generic national talking points.
            </li>
            <li>
              <strong className="text-charcoal">Honest scope:</strong> We do not
              invent warranties, ratings, or credentials. You get clear options
              based on your property.
            </li>
            <li>
              <strong className="text-charcoal">Full service path:</strong> From{" "}
              <Link
                href="/gutter-cleaning/"
                className="text-primary-dark underline-offset-2 hover:underline"
              >
                cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/gutter-repair/"
                className="text-primary-dark underline-offset-2 hover:underline"
              >
                repair
              </Link>{" "}
              to long-term guard installation.
            </li>
            <li>
              <strong className="text-charcoal">Easy next step:</strong>{" "}
              <Link
                href="/get-a-quote/"
                className="text-primary-dark underline-offset-2 hover:underline"
              >
                Get a free quote
              </Link>{" "}
              or call {business.phoneDisplay}.
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-light">
        <FAQ items={homeFaqs} />
      </div>

      <CTASection />
    </>
  );
}
