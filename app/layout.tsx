import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Santeway - Sağlıklı Yaşama Giden Yol | Kaliteli Gıda Takviyeleri",
    template: "%s | Santeway",
  },
  description:
    "Santeway ile sağlıklı yaşamı keşfedin. L-Carnitine Carnipure ve diğer kaliteli gıda takviyeleri ile enerjinizi artırın, sağlığınızı destekleyin. Bilimsel formüller, doğal içerikler.",
  keywords: [
    "santeway",
    "gıda takviyesi",
    "l-carnitine",
    "carnipure",
    "sağlıklı yaşam",
    "vitamin",
    "mineral",
    "enerji",
    "metabolizma",
    "doğal",
    "kaliteli",
    "bilimsel",
    "helal",
    "kosher",
    "vegan",
  ],
  authors: [{ name: "Santeway" }],
  creator: "Santeway",
  publisher: "Santeway",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://santeway.com",
    title: "Santeway - Sağlıklı Yaşama Giden Yol",
    description:
      "Kaliteli gıda takviyeleri ile sağlıklı yaşamı destekliyoruz. L-Carnitine Carnipure ve diğer premium ürünlerimizi keşfedin.",
    siteName: "Santeway",
    images: [
      {
        url: "/images/santeway-logo.png",
        width: 1200,
        height: 630,
        alt: "Santeway - Sağlıklı Yaşama Giden Yol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santeway - Sağlıklı Yaşama Giden Yol",
    description:
      "Kaliteli gıda takviyeleri ile sağlıklı yaşamı destekliyoruz. L-Carnitine Carnipure ve diğer premium ürünlerimizi keşfedin.",
    images: ["/images/santeway-logo.png"],
    creator: "@santeway",
    site: "@santeway",
  },
  alternates: {
    canonical: "https://santeway.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code", // Google Search Console'dan alınacak
    "msvalidate.01": "your-bing-verification-code", // Bing Webmaster Tools'dan alınacak
    "yandex-verification": "your-yandex-verification-code", // Yandex Webmaster'dan alınacak
  },
  metadataBase: new URL("https://santeway.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1B4332" />
        <meta name="msapplication-TileColor" content="#1B4332" />

        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Geo Tags */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Turkey" />

        {/* Apple Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Santeway" />

        {/* Microsoft Meta Tags */}
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
