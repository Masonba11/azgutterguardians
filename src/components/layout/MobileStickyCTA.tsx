import { business } from "@/config/business";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={business.phoneTel}
          className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-3 py-3 text-sm font-semibold uppercase tracking-wide text-primary"
        >
          Call Now
        </a>
        <a
          href="/get-a-quote/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
