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
    default: `${SITE_NAME} | AI Systems That Augment Your Business`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Business-driven workflows, strengthened by intentional AI. Led by Pierre-Olivier Carles, 25 years of real business experience.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | AI Systems That Augment Your Business`,
    description:
      "Business-driven workflows, strengthened by intentional AI.",
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
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "AI systems consultancy specializing in business-driven workflows and intentional AI.",
        founder: {
          "@type": "Person",
          name: "Pierre-Olivier Carles",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+15615624300",
          email: "po@centurysync.com",
          contactType: "sales",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "100-110 Century Blvd, Suite 202",
          addressLocality: "West Palm Beach",
          addressRegion: "FL",
          addressCountry: "US",
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
          "We build AI systems that augment your business — operational workflows, supervised processes, and tools teams actually adopt.",
        areaServed: "Worldwide",
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
