import { business, absoluteUrl } from "@/config/business";
import type { FaqItem } from "@/content/faqs";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": business.schemaId,
    name: business.name,
    url: business.url,
    logo: absoluteUrl(business.logoPath),
    image: absoluteUrl(business.ogImagePath),
    telephone: business.phoneDisplay,
    description: business.description,
    areaServed: business.primaryCities.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    })),
    knowsAbout: [...business.knowsAbout],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.url}/#website`,
    url: business.url,
    name: business.name,
    publisher: { "@id": business.schemaId },
    inLanguage: "en-US",
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  areaServed?: { name: string }[];
}) {
  const areaServed =
    options.areaServed?.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    })) ??
    business.primaryCities.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: options.url,
    provider: { "@id": business.schemaId },
    areaServed,
    serviceType: "Gutter Guard Installation",
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(options: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    author: {
      "@type": "Organization",
      name: business.name,
      "@id": business.schemaId,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      "@id": business.schemaId,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(business.logoPath),
      },
    },
    mainEntityOfPage: options.url,
  };
}
