import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vancouvercleaningservices — Leading Specialists & Solutions | Official",
  description: "Looking for premier solutions from Vancouvercleaningservices? Discover proven results, certified specialists, and fast quotes. Contact us today!",
  alternates: {
    canonical: "https://vancouvercleaningservices.ca",
  },
  openGraph: {
    title: "Vancouvercleaningservices — Leading Specialists & Solutions",
    description: "Looking for premier solutions from Vancouvercleaningservices? Discover proven results, certified specialists, and fast quotes.",
    url: "https://vancouvercleaningservices.ca",
    siteName: "Vancouvercleaningservices",
    images: [
      {
        url: "https://vancouvercleaningservices.ca/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
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
    "name": "Vancouvercleaningservices",
    "url": "https://vancouvercleaningservices.ca",
    "description": "Looking for premier solutions from Vancouvercleaningservices? Discover proven results, certified specialists, and fast quotes. Contact us today!",
    "image": "https://vancouvercleaningservices.ca/logo.jpg"
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
        {children}
      </body>
    </html>
  );
}
