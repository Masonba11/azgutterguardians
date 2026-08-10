import { business } from "@/config/business";
import { Hero } from "@/components/ui/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LocationCard } from "@/components/ui/LocationCard";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title:
    "Service Areas | Gutter Guards in the White Mountains | Arizona Gutter Guardians",
  description:
    "Arizona Gutter Guardians serves homeowners across the White Mountains—including Show Low, Pinetop, and Lakeside—for gutter guard installation, cleaning, and repair.",
  path: "/service-areas/",
});

const blurbs = {
  "show-low":
    "Gutter guard installation for Show Low homes dealing with ponderosa needles, seasonal debris, and winter conditions.",
  lakeside:
    "Residential gutter protection for Lakeside properties facing pine needles, leaves, and mountain weather.",
  pinetop:
    "Gutter protection for wooded Pinetop lots, cabins, and second homes that need clearer gutters between visits.",
} as const;

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas/" },
        ])}
      />

      <Hero
        title="Gutter Guard Installation Across Arizona's White Mountains"
        description="Arizona Gutter Guardians serves homeowners throughout the White Mountains. Explore our primary city pages for Show Low, Pinetop, and Lakeside—or request a quote for your property."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas" },
            ]}
          />
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <SectionHeading
            title="Primary communities we serve"
            description="These pages describe service coverage for one business—not separate storefronts or fake office locations in each town."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {business.primaryCities.map((city) => (
              <LocationCard
                key={city.slug}
                name={`${city.name}, AZ`}
                href={city.path}
                description={blurbs[city.slug as keyof typeof blurbs]}
              />
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-medium">
            If you live nearby in the White Mountains and need gutter guard
            installation, cleaning, or repair,{" "}
            <a
              href="/get-a-quote/"
              className="font-semibold text-primary-dark underline-offset-2 hover:underline"
            >
              request a free quote
            </a>{" "}
            with your address and we will confirm coverage.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
