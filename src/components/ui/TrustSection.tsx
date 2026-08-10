import { SectionHeading } from "./SectionHeading";

const trustPoints = [
  {
    title: "Built for pine country",
    description:
      "White Mountains homes face ponderosa needles, seasonal leaves, and winter melt. Our recommendations reflect that reality—not desert-only assumptions.",
  },
  {
    title: "Clear recommendations",
    description:
      "We explain how each gutter protection option handles debris and water so you can choose with confidence.",
  },
  {
    title: "Local service focus",
    description:
      "We serve Show Low, Pinetop, Lakeside, and surrounding White Mountains communities with straightforward communication.",
  },
  {
    title: "Quote-first approach",
    description:
      "Start with a free quote. We inspect when needed, then outline options before any work begins.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-light py-14 sm:py-16">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why homeowners call us"
          title="Trusted gutter protection for Arizona's White Mountains"
          description="Arizona Gutter Guardians helps homeowners reduce clogged gutters, overflow risk, and constant ladder work—with professional installation and practical advice."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-lg bg-white p-5 border border-border">
              <h3 className="text-lg text-charcoal">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-medium">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
