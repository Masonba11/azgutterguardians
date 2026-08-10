import Link from "next/link";
import { business } from "@/config/business";
import { installationFaqs } from "@/content/faqs";
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
  title:
    "Gutter Guard Installation White Mountains AZ | Arizona Gutter Guardians",
  description:
    "Professional gutter guard installation in the White Mountains. Protect gutters from pine needles, leaves, and debris in Show Low, Pinetop, and Lakeside.",
  path: "/gutter-guard-installation/",
});

export default function GutterGuardInstallationPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Gutter Guard Installation", path: "/gutter-guard-installation/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema(crumbs),
          buildServiceSchema({
            name: "Gutter Guard Installation",
            description:
              "Professional gutter guard installation for pine needles, leaves, and debris across Arizona's White Mountains.",
            url: `${business.url}/gutter-guard-installation/`,
          }),
          buildFaqSchema(installationFaqs),
        ]}
      />

      <Hero
        eyebrow="Primary service"
        title="Professional Gutter Guard Installation in the White Mountains"
        description="Keep pine needles, leaves, and roof debris out of your gutters with protection installed for Show Low, Pinetop, Lakeside, and nearby White Mountains homes."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Gutter Guard Installation" },
            ]}
          />
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container-site prose-site max-w-3xl">
          <h2>Professional gutter guard installation</h2>
          <p>
            Arizona Gutter Guardians installs gutter protection designed for the
            way White Mountains homes actually shed debris. We inspect your
            existing gutters, discuss options, and install a system meant to
            keep water flowing while reducing how often you need a full
            clean-out.
          </p>
          <p>
            Whether you call them gutter guards, gutter covers, leaf guards, or
            gutter screens, the goal is the same: practical protection that fits
            your roof, gutter size, and tree cover.
          </p>
        </div>
      </section>

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Protection against pine needles" />
            <p className="mt-4 leading-relaxed text-medium">
              Ponderosa needles are fine, persistent, and excellent at packing
              downspouts. Wide openings often let needles through. We focus on
              protection styles better suited to that debris—and explain trade-offs
              so you are not guessing. Read our deeper guide on{" "}
              <Link
                href="/blog/gutter-guards-for-pine-needles/"
                className="font-semibold text-primary-dark underline-offset-2 hover:underline"
              >
                gutter guards for pine needles
              </Link>
              .
            </p>
          </div>
          <div>
            <SectionHeading title="Protection against leaves and debris" />
            <p className="mt-4 leading-relaxed text-medium">
              Seasonal leaves, twigs, and roof grit still matter—even on pine
              lots. A well-chosen cover helps keep the trough clearer through
              storm seasons so overflow is less likely along fascias and
              foundations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <SectionHeading
            title="Benefits of gutter guards"
            description="Guards are not magic—but for many White Mountains homeowners they are a meaningful upgrade."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Fewer full gutter clean-outs each year",
              "Less overflow during heavy rain and melt",
              "Better protection when you are away from a cabin or second home",
              "Clearer path for water away from siding and landscaping",
              "Less time on ladders for routine scooping",
              "A system matched to local debris—not one-size-fits-all marketing",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-white px-5 py-4 text-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site max-w-3xl prose-site">
          <h2>How gutter guards work</h2>
          <p>
            Most systems sit over or within the gutter opening. Rainwater passes
            into the trough while larger debris is shed or held on the surface.
            Fine debris still needs occasional attention on top of the guard—but
            far less material ends up packed inside the gutter and downspout.
          </p>
          <p>
            Curious about pricing factors? See{" "}
            <Link href="/blog/gutter-guard-cost/">
              how much gutter guards cost in Arizona
            </Link>
            .
          </p>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-light py-14 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="prose-site">
            <h2>Gutter guard options</h2>
            <p>
              Product names vary—micro-mesh, screens, covers, and hybrid
              designs each handle water and debris differently. During your
              quote we focus on what matters locally: needle size, roof pitch,
              gutter condition, and winter drainage.
            </p>
            <p>
              Compare approaches in{" "}
              <Link href="/blog/gutter-guards-vs-screens/">
                gutter guards vs. gutter screens
              </Link>
              .
            </p>
          </div>
          <div className="prose-site">
            <h2>Maintenance expectations</h2>
            <p>
              Guards reduce maintenance; they do not erase it. Plan for periodic
              inspections, light surface clearing after heavy needle drop, and
              checks before winter. If your gutters need cleaning first, we also
              offer{" "}
              <Link href="/gutter-cleaning/">professional gutter cleaning</Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <SectionHeading
            title="Serving Show Low, Pinetop, and Lakeside"
            description="Explore city pages for local details—or request a quote for your address in the White Mountains."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {business.primaryCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={city.path}
                  className="inline-flex rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-charcoal hover:border-primary hover:text-primary-dark"
                >
                  {city.name}, AZ
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={installationFaqs} />
      <CTASection
        title="Get professional gutter guard installation"
        description="Request a free quote for Show Low, Pinetop, Lakeside, or nearby White Mountains properties."
      />
    </>
  );
}
