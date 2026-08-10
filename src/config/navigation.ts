import { business } from "./business";

export const mainNav = [
  {
    label: "Services",
    href: "/gutter-guard-installation/",
    children: business.services.map((s) => ({
      label: s.name,
      href: s.path,
    })),
  },
  {
    label: "Service Areas",
    href: "/service-areas/",
    children: business.primaryCities.map((c) => ({
      label: c.name,
      href: c.path,
    })),
  },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const footerNav = {
  services: business.services.map((s) => ({
    label: s.name,
    href: s.path,
  })),
  serviceAreas: [
    { label: "All Service Areas", href: "/service-areas/" },
    ...business.primaryCities.map((c) => ({
      label: c.name,
      href: c.path,
    })),
  ],
  company: [
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Get a Quote", href: "/get-a-quote/" },
    { label: "Blog", href: "/blog/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" },
  ],
} as const;
