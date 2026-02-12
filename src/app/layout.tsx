import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI Systems for Palm Beach County Businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AI systems and operational workflows for Palm Beach County businesses. Real estate, law firms, and finance \u2014 built with intention by a West Palm Beach team led by Pierre-Olivier Carles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | AI Systems for Palm Beach County Businesses`,
    description:
      "Operational workflows and intelligent tools for real estate, law firms, and finance in Palm Beach County.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "AI systems consultancy serving Palm Beach County businesses in real estate, legal, and financial services.",
        founder: {
          "@type": "Person",
          name: "Pierre-Olivier Carles",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+15615624300",
          email: "po@centurysync.com",
          contactType: "sales",
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Palm Beach County, FL",
          },
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "100-110 Century Blvd, Suite 202",
          addressLocality: "West Palm Beach",
          addressRegion: "FL",
          postalCode: "33417",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.6647,
          longitude: -80.115,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Palm Beach County",
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      {
        "@type": "ProfessionalService",
        name: SITE_NAME,
        description:
          "We build AI systems that augment your business \u2014 operational workflows, supervised processes, and tools teams actually adopt.",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Palm Beach County, FL",
        },
        serviceType: [
          "AI Systems Development",
          "Business Process Automation",
          "AI Consulting",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
