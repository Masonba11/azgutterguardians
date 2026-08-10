import { processSteps } from "@/content/process";
import { SectionHeading } from "./SectionHeading";

export function ProcessSteps({
  title = "How the installation process works",
  description = "A straightforward path from quote to finished gutter protection—designed around your home and debris profile.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-site">
        <SectionHeading title={title} description={description} />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-lg border border-border bg-white p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-medium">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
