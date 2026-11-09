import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vancouver Cleaning Services | Janitorial & Commercial Cleaners",
  description: "Specialized office cleaning Vancouver & restaurant cleaning Vancouver. Trusted commercial janitorial, strata & facility sanitation with fast free quotes.",
  keywords: [
    "office cleaning vancouver",
    "restaurant cleaning vancouver",
    "cleaning services vancouver",
    "cleaning company vancouver",
    "janitorial services vancouver",
    "cleaning services vancouver prices",
    "cleaning services vancouver bc",
    "commercial cleaning services vancouver bc",
    "best cleaning company vancouver"
  ],
  alternates: {
    canonical: "https://vancouvercleaningservices.ca",
  },
  openGraph: {
    title: "Vancouver Cleaning Services | Janitorial & Commercial Cleaners",
    description: "Specialized office cleaning Vancouver & restaurant cleaning Vancouver. Trusted commercial janitorial, strata & facility sanitation with fast free quotes.",
    url: "https://vancouvercleaningservices.ca",
    siteName: "Vancouver Cleaning Services",
    images: [
      {
        url: "https://vancouvercleaningservices.ca/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vancouver Cleaning Services",
    "url": "https://vancouvercleaningservices.ca",
    "telephone": "+1-604-555-0199",
    "priceRange": "$$",
    "description": "Leading office cleaning Vancouver & restaurant cleaning Vancouver specialists. Trusted commercial janitorial, strata sanitation, and healthcare facility maintenance.",
    "image": "https://vancouvercleaningservices.ca/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2827,
      "longitude": -123.1207
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "23:00"
      }
    ],
    "areaServed": [
      "Vancouver", "North Vancouver", "West Vancouver", "Burnaby", "Richmond", "Surrey", "Coquitlam"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
