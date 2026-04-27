import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://alugraph.ge";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AluGraph — ალუმინის ფასადები და მინის კონსტრუქციები | რუსთავი",
    template: "%s | AluGraph",
  },
  description:
    "AluGraph — ალუმინის ფასადები, მინის სისტემები, კარ-ფანჯრები, ვიტრაჟები და სლაიდერული სისტემები. 20+ წლის გამოცდილება, 100+ დასრულებული პროექტი საქართველოში.",
  applicationName: "AluGraph",
  authors: [{ name: "AluGraph", url: SITE_URL }],
  creator: "AluGraph",
  publisher: "AluGraph",
  generator: "Next.js",
  keywords: [
    "ალუმინის ფასადები",
    "მინის ფასადები",
    "ალუმინის კარ-ფანჯრები",
    "ვიტრაჟები",
    "მინის ტიხრები",
    "სლაიდერული სისტემები",
    "Lift and Slide",
    "თერმო ალუმინი",
    "ფასადის სისტემები",
    "AluGraph",
    "ალუგრაფი",
    "რუსთავი",
    "საქართველო",
    "aluminum facade Georgia",
    "glass facade Tbilisi",
    "aluminum windows Georgia",
    "curtain wall Rustavi",
  ],
  category: "Construction",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "ka-GE": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: SITE_URL,
    siteName: "AluGraph",
    title: "AluGraph — ალუმინის ფასადები და მინის კონსტრუქციები",
    description:
      "პრემიუმ ხარისხის ალუმინის და მინის კონსტრუქციები. ფასადის სისტემები, კარ-ფანჯრები, ვიტრაჟები. 20+ წლის გამოცდილება.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AluGraph — Aluminum & Glass Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AluGraph — ალუმინის ფასადები და მინის კონსტრუქციები",
    description:
      "პრემიუმ ხარისხის ალუმინის და მინის კონსტრუქციები. ფასადის სისტემები, კარ-ფანჯრები, ვიტრაჟები.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#080c14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "AluGraph",
  alternateName: "ალუგრაფი",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description:
    "ალუმინის ფასადები, მინის სისტემები, კარ-ფანჯრები, ვიტრაჟები და სლაიდერული სისტემები. 20+ წლის გამოცდილება.",
  telephone: ["+995597977833", "+995500502029"],
  email: "alugraphcontact@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "მშვიდობის ქუჩა",
    addressLocality: "რუსთავი",
    addressRegion: "ქვემო ქართლი",
    addressCountry: "GE",
  },
  areaServed: {
    "@type": "Country",
    name: "Georgia",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587741965966",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AluGraph Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ფასადის სისტემები",
          description:
            "თანამედროვე შენობების სრული შემინვა და ალუმინის ფასადებით მოპირკეთება.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ალუმინის კარ-ფანჯრები",
          description:
            "თერმო და არათერმო ალუმინის კარ-ფანჯრების დამზადება და მონტაჟი.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "სლაიდერული სისტემები",
          description:
            "სივრცის დამზოგავი გასაწევი სისტემები. Lift & Slide ტექნოლოგია.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "მინის ტიხრები",
          description:
            "საოფისე და კომერციული სივრცეების თანამედროვე ზონირება.",
        },
      },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "AluGraph",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+995597977833",
    contactType: "customer service",
    areaServed: "GE",
    availableLanguage: ["Georgian", "English"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "AluGraph",
  inLanguage: "ka-GE",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#projects`,
  name: "AluGraph-ის დასრულებული პროექტები",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "სავაჭრო ქალაქი Eastpoint",
        description:
          "ღია კონცეფციის სავაჭრო ცენტრი — კომპლექსური ფასადური სისტემები და კომერციული ვიტრაჟები.",
        dateCreated: "2013",
        image: `${SITE_URL}/images/eastpoint.png`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Mate Motors",
        description:
          "ავტოსალონი და სერვის ცენტრი — ფასადის შემინვა და ალუმინის ვიტრაჟები.",
        dateCreated: "2012",
        image: `${SITE_URL}/images/5.jpg`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Panorama Kvariati",
        description:
          "ზღვისპირა პრემიუმ კომპლექსი — აივნების მინის მოაჯირები და პანორამული ვიტრაჟები.",
        dateCreated: "2018",
        image: `${SITE_URL}/images/4.jpeg`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "სასტუმრო Tbilisi Tower",
        description:
          "მასშტაბური კომერციული პროექტი — ფასადის სრული შემინვა და ალუმინის კონსტრუქციები.",
        dateCreated: "2014",
        image: `${SITE_URL}/images/7.jpeg`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${inter.variable} ${notoGeorgian.variable}`}>
      <body className="antialiased bg-[#080c14] text-[#f8fafc] overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">
          მთავარ შინაარსზე გადასვლა
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
        />
      </body>
    </html>
  );
}
