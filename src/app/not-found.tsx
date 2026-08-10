import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";

export default function NotFound() {
  return (
    <section className="container-site py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
        404
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-lg text-medium leading-relaxed">
        That page does not exist or may have moved. Head home or request a quote
        for gutter services in the White Mountains.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/get-a-quote/" variant="outline">
          Get a Free Quote
        </Button>
        <Button href={business.phoneTel} variant="phone">
          Call Now
        </Button>
      </div>
      <p className="mt-8 text-sm text-medium">
        Looking for services?{" "}
        <Link
          href="/gutter-guard-installation/"
          className="font-semibold text-primary-dark underline-offset-2 hover:underline"
        >
          Gutter guard installation
        </Link>
        {" · "}
        <Link
          href="/service-areas/"
          className="font-semibold text-primary-dark underline-offset-2 hover:underline"
        >
          Service areas
        </Link>
      </p>
    </section>
  );
}
