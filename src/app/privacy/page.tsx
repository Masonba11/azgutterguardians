import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy placeholder for Arizona Gutter Guardians. Replace with counsel-approved language before launch.",
  path: "/privacy/",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="container-site max-w-3xl py-14 prose-site">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <h1 className="mt-6 text-4xl text-charcoal">Privacy Policy</h1>
      <p>
        This is a placeholder privacy policy. Before launch, replace this page
        with counsel-approved language covering how quote form submissions,
        analytics, and contact details are handled.
      </p>
      <p>
        We collect information you voluntarily submit through forms or phone
        calls for the purpose of responding to service requests. Do not add
        tracking scripts until you have a corresponding privacy disclosure.
      </p>
    </section>
  );
}
