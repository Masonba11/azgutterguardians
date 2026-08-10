import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { JsonLd, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";
import { business } from "@/config/business";
import { analytics } from "@/config/analytics";
import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body-family",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Source_Serif_4({
  variable: "--font-display-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Gutter Guard Installation White Mountains AZ`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  applicationName: business.name,
  verification: {
    ...(analytics.googleSiteVerification
      ? { google: analytics.googleSiteVerification }
      : {}),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={[buildOrganizationSchema(), buildWebsiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-sticky-cta">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        {analytics.ga4MeasurementId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4MeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${analytics.ga4MeasurementId}');`,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
