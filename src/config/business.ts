/**
 * Central business configuration.
 * Update phone, analytics, and social links here — not in page components.
 */

export const business = {
  name: "Arizona Gutter Guardians",
  legalName: "Arizona Gutter Guardians",
  domain: "azgutterguardians.com",
  /** Canonical production origin (non-www). Use for robots, sitemap, canonicals, OG. */
  siteUrl: "https://azgutterguardians.com",
  /** Alias of siteUrl — kept for existing imports */
  url: "https://azgutterguardians.com",
  /** Stable schema.org entity ID */
  schemaId: "https://azgutterguardians.com/#business",

  phoneDisplay: "(XXX) XXX-XXXX",
  phoneTel: "tel:+1XXXXXXXXXX",

  email: "info@azgutterguardians.com",

  /** Set when a physical mailing/office address is available */
  address: null as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  },

  description:
    "Professional gutter guard installation, gutter cleaning, and gutter repair serving Show Low, Pinetop, Lakeside, and Arizona's White Mountains.",

  tagline: "Gutter protection for Arizona's White Mountains",

  logoPath: "/images/logo.png",
  ogImagePath: "/images/og-default.jpg",

  serviceRegion: "Arizona White Mountains",
  primaryCities: [
    {
      name: "Show Low",
      slug: "show-low",
      state: "Arizona",
      stateAbbr: "AZ",
      path: "/service-areas/show-low/",
    },
    {
      name: "Lakeside",
      slug: "lakeside",
      state: "Arizona",
      stateAbbr: "AZ",
      path: "/service-areas/lakeside/",
    },
    {
      name: "Pinetop",
      slug: "pinetop",
      state: "Arizona",
      stateAbbr: "AZ",
      path: "/service-areas/pinetop/",
    },
  ],

  services: [
    {
      name: "Gutter Guard Installation",
      slug: "gutter-guard-installation",
      path: "/gutter-guard-installation/",
      shortDescription:
        "Protect your gutters from pine needles, leaves, and debris with professional gutter guard installation.",
      primary: true,
    },
    {
      name: "Gutter Cleaning",
      slug: "gutter-cleaning",
      path: "/gutter-cleaning/",
      shortDescription:
        "Clear pine needles, leaves, and roof debris so water flows freely again.",
      primary: false,
    },
    {
      name: "Gutter Repair",
      slug: "gutter-repair",
      path: "/gutter-repair/",
      shortDescription:
        "Fix loose sections, leaking joints, sagging runs, and downspout issues.",
      primary: false,
    },
  ],

  knowsAbout: [
    "Gutter guard installation",
    "Gutter protection",
    "Pine needle gutter guards",
    "Gutter cleaning",
    "Gutter repair",
    "Gutter covers",
    "Gutter screens",
  ],

  social: {
    facebook: "",
    instagram: "",
    yelp: "",
    nextdoor: "",
  },

  hoursNote:
    "Serving homeowners across the White Mountains by appointment.",
} as const;

export type CitySlug = (typeof business.primaryCities)[number]["slug"];

export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") {
    return `${business.siteUrl}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${business.siteUrl}${normalized}`;
}
