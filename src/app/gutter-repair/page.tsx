import Link from "next/link";
import { repairFaqs } from "@/content/faqs";
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
  title: "Gutter Repair Show Low, Pinetop & Lakeside | Arizona Gutter Guardians",
  description:
    "Gutter repair for loose sections, leaking joints, sagging runs, and downspout issues in Show Low, Pinetop, and Lakeside, AZ. Request a free quote.",
  path: "/gutter-repair/",
});

export default function GutterRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gutter Repair", path: "/gutter-repair/" },
          ]),
          buildFaqSchema(repairFaqs),
        ]}
      />

      <Hero
        title="Gutter Repair in Show Low, Pinetop & Lakeside, AZ"
        description="Address loose gutters, leaking joints, sagging runs, and downspout problems so water can drain the way it should—before or alongside guard installation."
        breadcrumbs={
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Gutter Repair" },
            ]}
          />
        }
      />

      <article className="container-site prose-site max-w-3xl py-14 sm:py-16">
        <h2>Common residential gutter repairs</h2>
        <p>
          Arizona Gutter Guardians helps homeowners with practical, common
          gutter repairs. After inspecting your system, we explain what we find
          and what options make sense—without overstating what a repair can
          fix.
        </p>

        <h3>Loose gutters</h3>
        <p>
          Hangers and fasteners can loosen over time, especially with ice, snow
          load, or ladder stress. Securing sections helps restore alignment and
          safer water flow.
        </p>

        <h3>Leaking joints</h3>
        <p>
          Seams, corners, and end caps can seep when seals fail. We address
          leaking joints when repair is appropriate for the gutter&apos;s overall
          condition.
        </p>

        <h3>Improper drainage</h3>
        <p>
          Gutters need correct pitch toward outlets. Standing water or overflow
          in the middle of a run can signal pitch problems we can often improve.
        </p>

        <h3>Sagging gutters</h3>
        <p>
          Sagging sections collect debris and water. Depending on cause and
          severity, we may re-secure, re-support, or discuss whether a larger
          fix is wiser.
        </p>

        <h3>Downspout issues</h3>
        <p>
          Crushed, disconnected, or poorly aimed downspouts keep water too close
          to the foundation. Clearing and correcting outlets is part of keeping
          the whole system working.
        </p>

        <h3>Minor gutter repairs</h3>
        <p>
          Small fixes can extend the life of an otherwise sound system. If we
          believe replacement is the better path, we will say so after looking
          at the gutters—not promise outcomes we cannot support.
        </p>

        <h2>Repairs and gutter guards</h2>
        <p>
          Sound, well-draining gutters give{" "}
          <Link href="/gutter-guard-installation/">gutter guards</Link> the
          best chance to perform. If you also need a{" "}
          <Link href="/gutter-cleaning/">clean-out</Link>, we can discuss
          bundling services when you{" "}
          <Link href="/get-a-quote/">get a free quote</Link>.
        </p>
      </article>

      <div className="bg-light">
        <FAQ items={repairFaqs} />
      </div>
      <CTASection
        title="Ask about gutter repair"
        description="Describe what you are seeing—leaks, sagging, or overflow—and we will help you plan next steps."
      />
    </>
  );
}
