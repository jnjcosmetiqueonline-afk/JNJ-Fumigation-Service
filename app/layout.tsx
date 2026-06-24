import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteBackground } from "@/components/site-background";
import { COMPANY } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "JNJ Fumigation Service | Professional Pest Control & Fumigation",
    template: "%s | JNJ Fumigation Service",
  },
  description:
    "JNJ Fumigation Services provides safe, effective and guaranteed pest control and fumigation for homes, offices, restaurants, warehouses and industries. Book a free inspection today.",
  keywords: [
    "pest control",
    "fumigation services",
    "cockroach control",
    "bed bug treatment",
    "termite treatment",
    "rodent control",
    "mosquito control",
    "commercial fumigation",
    "JNJ Fumigation",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: "JNJ Fumigation Service | Professional Pest Control & Fumigation",
    description:
      "Safe, effective and guaranteed pest control & fumigation for homes and businesses. Certified experts, eco-friendly chemicals, 24/7 support.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "JNJ Fumigation Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JNJ Fumigation Service | Professional Pest Control & Fumigation",
    description:
      "Safe, effective and guaranteed pest control & fumigation for homes and businesses.",
    images: ["https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=75"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: COMPANY.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  name: COMPANY.name,
  image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=75",
  url: COMPANY.url,
  telephone: COMPANY.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "City",
    name: "Karachi",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
