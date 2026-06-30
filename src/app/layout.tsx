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
  title: "Aquahealth | Premium Water Purifier Service & Sales Chennai",
  description: "Aquahealth offers premium water purifier sales, installation, repair, and AMC services in Chennai. 5 free extra pre-filters, transparent pricing, and trusted technicians. Book today!",
  keywords: [
    "RO Service Chennai",
    "Water Purifier Service Chennai",
    "RO Repair Chennai",
    "Kent Service Chennai",
    "Aquaguard Service Chennai",
    "RO Installation Chennai",
    "RO AMC Chennai",
    "Water Purifier Repair Chennai"
  ],
  authors: [{ name: "Aquahealth" }],
  openGraph: {
    title: "Aquahealth | Premium Water Purifier Service & Sales Chennai",
    description: "Premium water purifier service, installation, and AMC across Chennai. Pure Water. Honest Service.",
    url: "https://aquahealth.in",
    siteName: "Aquahealth",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aquahealth",
    "image": "https://aquahealth.in/hero_purifier.png",
    "@id": "https://aquahealth.in/#localbusiness",
    "url": "https://aquahealth.in",
    "telephone": "+919840275122",
    "priceRange": "₹150 - ₹1500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanganallur",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600061",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9804,
      "longitude": 80.1963
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://wa.me/919840275122"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Nanganallur" },
      { "@type": "AdministrativeArea", "name": "Velachery" },
      { "@type": "AdministrativeArea", "name": "Pallavaram" },
      { "@type": "AdministrativeArea", "name": "Tambaram" },
      { "@type": "AdministrativeArea", "name": "Chromepet" },
      { "@type": "AdministrativeArea", "name": "Adyar" },
      { "@type": "AdministrativeArea", "name": "Guindy" },
      { "@type": "AdministrativeArea", "name": "Porur" },
      { "@type": "AdministrativeArea", "name": "Anna Nagar" },
      { "@type": "AdministrativeArea", "name": "OMR" },
      { "@type": "AdministrativeArea", "name": "ECR" },
      { "@type": "AdministrativeArea", "name": "T Nagar" },
      { "@type": "AdministrativeArea", "name": "Medavakkam" },
      { "@type": "AdministrativeArea", "name": "Chennai" }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-dark-text font-sans">
        {children}
      </body>
    </html>
  );
}
