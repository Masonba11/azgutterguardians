import { business } from "@/config/business";
import { Button } from "./Button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready for clearer gutters and less maintenance?",
  description = "Request a free quote for gutter guard installation, cleaning, or repair across Show Low, Pinetop, Lakeside, and the White Mountains.",
}: CTASectionProps) {
  return (
    <section className="bg-primary-dark py-14 text-white sm:py-16">
      <div className="container-site flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            href="/get-a-quote/"
            size="lg"
            className="border-white bg-white !text-primary hover:bg-light hover:!text-primary-dark uppercase"
          >
            Get a Free Quote
          </Button>
          <Button
            href={business.phoneTel}
            variant="phone"
            size="lg"
            className="uppercase"
          >
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
