import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Santeway - Sağlıklı Yaşama Giden Yol | Kaliteli Gıda Takviyeleri",
    template: "%s | Santeway"
  },
  description: "Santeway ile sağlıklı yaşamı keşfedin. L-Carnitine Carnipure ve diğer kaliteli gıda takviyeleri ile enerjinizi artırın, sağlığınızı destekleyin. Bilimsel formüller, doğal içerikler.",
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
    "vegan"
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
    description: "Kaliteli gıda takviyeleri ile sağlıklı yaşamı destekliyoruz. L-Carnitine Carnipure ve diğer premium ürünlerimizi keşfedin.",
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
    description: "Kaliteli gıda takviyeleri ile sağlıklı yaşamı destekliyoruz. L-Carnitine Carnipure ve diğer premium ürünlerimizi keşfedin.",
    images: ["/images/santeway-logo.png"],
    creator: "@santeway",
    site: "@santeway",
  },
  alternates: {
    canonical: "https://santeway.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code", // Google Search Console'dan alınacak
  },
  metadataBase: new URL('https://santeway.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
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
  )
}
