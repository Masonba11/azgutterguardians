import Link from "next/link";
import { business } from "@/config/business";
import { Button } from "./Button";

type HeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  showServingLine?: boolean;
  breadcrumbs?: React.ReactNode;
  imageLabel?: string;
};

export function Hero({
  title,
  description,
  eyebrow,
  showServingLine = false,
  breadcrumbs,
  imageLabel = "White Mountains home with protected gutters",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, #2F6B3B 0%, transparent 50%), radial-gradient(ellipse at 80% 0%, #1F4D2A 0%, transparent 45%), linear-gradient(160deg, #292D2B 0%, #1a1f1c 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="container-site relative py-14 sm:py-20 lg:py-24">
        {breadcrumbs ? <div className="mb-6">{breadcrumbs}</div> : null}

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {eyebrow ? (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-200/90">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-3xl font-display text-4xl leading-[1.1] !text-white sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/get-a-quote/" size="lg" className="uppercase">
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

            {showServingLine ? (
              <p className="mt-6 text-sm font-medium tracking-wide text-white/70">
                Serving Show Low • Pinetop • Lakeside
              </p>
            ) : null}
          </div>

          <div
            className="relative hidden min-h-[280px] overflow-hidden rounded-lg border border-white/15 bg-primary-dark/40 lg:block"
            role="img"
            aria-label={imageLabel}
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(47,107,59,0.55),rgba(31,77,42,0.35),rgba(41,45,43,0.8))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {business.name}
              </p>
              <p className="mt-2 text-lg text-white/90">
                Local gutter protection for pine country homes.
              </p>
              <Link
                href="/gutter-guard-installation/"
                className="mt-4 inline-block text-sm font-semibold text-green-100 underline-offset-4 hover:underline"
              >
                Explore gutter guard installation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
