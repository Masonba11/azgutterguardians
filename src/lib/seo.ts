import type { Metadata } from "next";
import { business, absoluteUrl } from "@/config/business";
import { analytics } from "@/config/analytics";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(ogImage ?? business.ogImagePath);

  const verification: Metadata["verification"] = {};
  if (analytics.googleSiteVerification) {
    verification.google = analytics.googleSiteVerification;
  }
  if (analytics.bingSiteVerification) {
    verification.other = {
      "msvalidate.01": analytics.bingSiteVerification,
    };
  }

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: business.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}

export function cityLabel(name: string): string {
  return `${name}, AZ`;
}
