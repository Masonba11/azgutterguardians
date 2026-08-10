/**
 * Analytics & verification placeholders.
 * Replace with real IDs before launch — do not invent values.
 */

export const analytics = {
  /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX */
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",

  /** Google Search Console HTML tag content value */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",

  /** Bing Webmaster Tools verification */
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
} as const;
