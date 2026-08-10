import Link from "next/link";
import { business } from "@/config/business";
import { footerNav } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo height={96} className="mb-4" />
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {business.description}
          </p>
          <p className="mt-4 text-sm">
            <a
              href={business.phoneTel}
              className="font-semibold text-white hover:text-green-100"
            >
              {business.phoneDisplay}
            </a>
          </p>
        </div>

        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="Service Areas" links={footerNav.serviceAreas} />
        <FooterColumn title="Company" links={footerNav.company} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Serving Arizona&apos;s White Mountains</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/75 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
