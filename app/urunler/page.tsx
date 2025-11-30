import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { productsData } from "./products-data";
import { ProductsClient } from "./products-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler | Santeway",
  description:
    "Sağlığınız için özenle seçilmiş, uluslararası standartlara göre üretilmiş vitamin ve besin takviyeleri. L-Carnitine Carnipure ve diğer kaliteli gıda takviyelerini keşfedin.",
  keywords: [
    "santeway ürünler",
    "gıda takviyeleri",
    "l-carnitine carnipure",
    "vitamin",
    "mineral",
    "besin takviyeleri",
    "sağlıklı yaşam",
    "enerji",
    "metabolizma",
    "antioxidant",
    "protein",
    "amino asit",
    "doğal ürünler",
  ],
  openGraph: {
    title: "Ürünler | Santeway",
    description:
      "Kaliteli gıda takviyeleri ve vitamin ürünleri. Sağlıklı yaşamınızı desteklemek için özenle seçilmiş ürünler.",
    type: "website",
    url: "https://santeway.com/urunler",
    images: [
      {
        url: "/images/featured-product.png",
        width: 1200,
        height: 630,
        alt: "Santeway Ürünler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ürünler | Santeway",
    description: "Kaliteli gıda takviyeleri ve vitamin ürünleri.",
    images: ["/images/featured-product.png"],
  },
  alternates: {
    canonical: "https://santeway.com/urunler",
  },
};

export default function ProductsPage() {
  // productsData'dan ürünleri al
  const products = productsData;

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for Products Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Santeway Ürünler",
            description:
              "Sağlığınız için özenle seçilmiş, uluslararası standartlara göre üretilmiş vitamin ve besin takviyeleri",
            url: "https://santeway.com/urunler",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.name,
                url: `https://santeway.com/urunler/${product.slug}`,
                category: product.category,
                brand: {
                  "@type": "Brand",
                  name: "Santeway",
                },
                image:
                  product.image ||
                  `https://santeway.com/placeholder.svg?query=${product.slug}`,
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "TRY",
                },
              })),
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Ana Sayfa",
                  item: "https://santeway.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Ürünler",
                  item: "https://santeway.com/urunler",
                },
              ],
            },
          }),
        }}
      />

      <Navbar />

      {/* Header Section - Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Ürünlerimiz
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sağlığınız için özenle seçilmiş, uluslararası standartlara göre
              üretilmiş vitamin ve besin takviyeleri
            </p>
          </div>
        </div>
      </section>

      <ProductsClient products={products} />

      <Footer />
    </div>
  );
}
