import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of use placeholder for Arizona Gutter Guardians. Replace with counsel-approved language before launch.",
  path: "/terms/",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="container-site max-w-3xl py-14 prose-site">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <h1 className="mt-6 text-4xl text-charcoal">Terms of Use</h1>
      <p>
        This is a placeholder terms page. Replace with counsel-approved terms
        covering website use, quote requests, and service limitations before
        public launch.
      </p>
      <p>
        Website content is provided for general information about gutter
        services in Arizona&apos;s White Mountains and does not create a service
        contract until work is agreed in writing.
      </p>
    </section>
  );
}
