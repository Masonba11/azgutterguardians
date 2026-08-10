import { business } from "@/config/business";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Get a Free Quote | Arizona Gutter Guardians",
  description:
    "Request a free quote for gutter guard installation, cleaning, or repair in Show Low, Pinetop, Lakeside, and the White Mountains.",
  path: "/get-a-quote/",
});

export default function GetAQuotePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Get a Quote", path: "/get-a-quote/" },
        ])}
      />

      <section className="border-b border-border bg-light py-10 sm:py-12">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Get a Free Quote" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl">
            Get a Free Quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-medium">
            Tell us about your property and the service you need. We will follow
            up with clear next steps for Show Low, Pinetop, Lakeside, and nearby
            White Mountains homes.
          </p>
          <div className="mt-6">
            <Button href={business.phoneTel} variant="phone" size="lg">
              Prefer to call? {business.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-2xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
