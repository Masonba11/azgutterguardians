"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/config/business";
import { mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-charcoal">
      <div className="container-site flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo
          priority
          height={68}
          className="max-h-[calc(var(--header-height)-0.75rem)]"
          onClick={() => setOpen(false)}
        />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:text-white"
                  aria-expanded={openDropdown === item.label}
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                </button>
                {openDropdown === item.label ? (
                  <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-md border border-border bg-white py-2 shadow-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-light hover:text-primary-dark"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href={business.phoneTel}
            variant="phone"
            size="sm"
          >
            Call Now
          </Button>
          <Button href="/get-a-quote/" size="sm" className="uppercase">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/25 px-3 py-2 text-sm font-semibold text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-charcoal lg:hidden"
        >
          <nav className="container-site space-y-1 py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-2">
                <Link
                  href={item.href}
                  className="block py-2 font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <div className="mb-2 ml-3 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-white/70 hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button href={business.phoneTel} variant="phone" size="lg">
                Call Now
              </Button>
              <Link
                href="/get-a-quote/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-base font-semibold uppercase tracking-wide text-white hover:bg-primary-dark"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
