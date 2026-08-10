import { business } from "@/config/business";
import { Hero } from "@/components/ui/Hero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Arizona Gutter Guardians | Show Low, Pinetop, Lakeside",
  description:
    "Contact Arizona Gutter Guardians for gutter guard installation, cleaning, and repair in the White Mountains. Call or request a free quote.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />

      <Hero
        title="Contact Arizona Gutter Guardians"
        description="Reach out for gutter guard installation, cleaning, or repair across Show Low, Pinetop, Lakeside, and the White Mountains."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Get in touch</h2>
            <p className="mt-4 leading-relaxed text-medium">
              The fastest ways to start are a phone call or our free quote form.
              Share your city, property details, and whether you need
              installation, cleaning, repair, or are unsure.
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-medium">
                  Phone
                </dt>
                <dd className="mt-1 text-lg font-semibold text-charcoal">
                  <a href={business.phoneTel} className="hover:text-primary-dark">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-medium">
                  Email
                </dt>
                <dd className="mt-1 text-lg font-semibold text-charcoal">
                  <a
                    href={`mailto:${business.email}`}
                    className="hover:text-primary-dark"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-medium">
                  Service area
                </dt>
                <dd className="mt-1 text-medium leading-relaxed">
                  Show Low, Pinetop, Lakeside, and surrounding White Mountains
                  communities.
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-a-quote/" size="lg" className="uppercase">
                Get a Free Quote
              </Button>
              <Button href={business.phoneTel} variant="phone" size="lg">
                Call Now
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-light p-6 sm:p-8">
            <h2 className="text-2xl">What to include</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-medium">
              <li>City or ZIP</li>
              <li>Approximate home size</li>
              <li>Service needed (guards, cleaning, repair, or not sure)</li>
              <li>Notes about pine needles, leaks, or overflow</li>
            </ul>
            <p className="mt-6 text-sm text-medium">
              We do not list a public storefront address on this site until a
              verified physical location is provided.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
