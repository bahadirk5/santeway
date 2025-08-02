import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { productsData } from "../products-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  Wheat,
  Shield,
  Candy,
  Leaf,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
      description: "Aradığınız ürün bulunamadı veya mevcut değil.",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    keywords: [
      product.name.toLowerCase(),
      "gıda takviyesi",
      "santeway",
      product.category.toLowerCase(),
      "sağlıklı yaşam",
      "vitamin",
      "mineral",
      ...(product.features?.vegan ? ["vegan"] : []),
      ...(product.features?.glutenFree ? ["gluten free"] : []),
      ...(product.features?.preservativeFree ? ["koruyucu içermez"] : []),
    ],
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: "website",
      url: `https://santeway.com/urunler/${product.slug}`,
      images: [
        {
          url: product.image || "/placeholder.svg",
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [product.image || "/placeholder.svg"],
    },
    alternates: {
      canonical: `https://santeway.com/urunler/${product.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Ürün Bulunamadı
          </h1>
          <p className="text-gray-600 mb-8">
            Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            href="/urunler"
            className="text-primary hover:underline font-semibold"
          >
            Tüm Ürünlere Göz Atın
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Ürün özelliklerini tanımla - sadece true olanları göster
  const productFeatures = [
    {
      key: "glutenFree",
      label: "Gluten İçermez",
      value: product.features?.glutenFree,
      icon: <Wheat className="h-4 w-4 text-primary" />,
    },
    {
      key: "preservativeFree",
      label: "Koruyucu İçermez",
      value: product.features?.preservativeFree,
      icon: <Shield className="h-4 w-4 text-primary" />,
    },
    {
      key: "sugarFree",
      label: "Şeker İçermez",
      value: product.features?.sugarFree,
      icon: <Candy className="h-4 w-4 text-primary" />,
    },
    {
      key: "vegan",
      label: "Vegan",
      value: product.features?.vegan,
      icon: <Leaf className="h-4 w-4 text-primary" />,
    },
  ].filter((feature) => feature.value === true); // Sadece true olanları göster

  // Ürün görselleri - products-data.ts'den gelen resimler veya fallback
  const productImages =
    product.images && product.images.length > 0
      ? product.images.map((img, index) => ({
          src: img,
          alt: `${product.name} - Görsel ${index + 1}`,
        }))
      : [
          {
            src:
              product.image ||
              `/placeholder.svg?height=500&width=400&query=${product.slug}`,
            alt: `${product.name} - Ana Görsel`,
          },
          {
            src: `/placeholder.svg?height=500&width=400&query=${product.slug}+side+view`,
            alt: `${product.name} - Yan Görünüm`,
          },
          {
            src: `/placeholder.svg?height=500&width=400&query=${product.slug}+ingredients`,
            alt: `${product.name} - İçerik Bilgisi`,
          },
          {
            src: `/placeholder.svg?height=500&width=400&query=${product.slug}+packaging`,
            alt: `${product.name} - Ambalaj`,
          },
        ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for Product SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.longDescription,
            brand: {
              "@type": "Brand",
              name: "Santeway",
            },
            category: product.category,
            sku: product.slug,
            gtin: product.id.toString(),
            image: product.image || "/placeholder.svg",
            offers: {
              "@type": "AggregateOffer",
              availability: "https://schema.org/InStock",
              priceCurrency: "TRY",
              seller: {
                "@type": "Organization",
                name: "Santeway",
              },
              ...(product.saleLinks && {
                offers: [
                  ...(product.saleLinks.trendyol
                    ? [
                        {
                          "@type": "Offer",
                          url: product.saleLinks.trendyol,
                          seller: { "@type": "Organization", name: "Trendyol" },
                        },
                      ]
                    : []),
                  ...(product.saleLinks.hepsiburada
                    ? [
                        {
                          "@type": "Offer",
                          url: product.saleLinks.hepsiburada,
                          seller: {
                            "@type": "Organization",
                            name: "Hepsiburada",
                          },
                        },
                      ]
                    : []),
                  ...(product.saleLinks.amazon
                    ? [
                        {
                          "@type": "Offer",
                          url: product.saleLinks.amazon,
                          seller: { "@type": "Organization", name: "Amazon" },
                        },
                      ]
                    : []),
                ],
              }),
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
            additionalProperty: [
              ...(product.features?.glutenFree
                ? [
                    {
                      "@type": "PropertyValue",
                      name: "Gluten Free",
                      value: "Yes",
                    },
                  ]
                : []),
              ...(product.features?.vegan
                ? [
                    {
                      "@type": "PropertyValue",
                      name: "Vegan",
                      value: "Yes",
                    },
                  ]
                : []),
              ...(product.features?.preservativeFree
                ? [
                    {
                      "@type": "PropertyValue",
                      name: "Preservative Free",
                      value: "Yes",
                    },
                  ]
                : []),
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://santeway.com/urunler/${product.slug}`,
              },
            ],
          }),
        }}
      />

      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Ana sayfaya git"
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link
                href="/urunler"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Ürünler sayfasına git"
              >
                Ürünler
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                {product.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Header */}
      <header className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-primary text-white mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </header>

      {/* Product Details */}
      <main className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Images Carousel */}
            <section aria-label="Ürün görselleri">
              <div className="relative">
                <div className="bg-secondary/10 p-8 rounded-xl shadow-lg flex justify-center items-center">
                  <Carousel
                    className="w-full max-w-md"
                    aria-label="Ürün resim galerisi"
                  >
                    <CarouselContent>
                      {productImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="bg-white rounded-lg p-6 flex items-center justify-center">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                width={400}
                                height={500}
                                className="object-contain rounded-lg max-h-[400px]"
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="-left-12 bg-[#C1A667] hover:bg-[#C1A667]/90 text-white border-[#C1A667]"
                      aria-label="Önceki resim"
                    />
                    <CarouselNext
                      className="-right-12 bg-[#C1A667] hover:bg-[#C1A667]/90 text-white border-[#C1A667]"
                      aria-label="Sonraki resim"
                    />
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Product Info: Description + Features + Accordion */}
            <div className="w-full space-y-6">
              {/* Product Description (Always Visible) */}
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Ürün Açıklaması
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify break-words hyphens-auto">
                  {product.longDescription}
                </p>
              </div>

              {/* Sale Links Buttons */}
              {product.saleLinks && (
                <section
                  className="space-y-3"
                  aria-label="Satın alma seçenekleri"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    Satın Al
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.saleLinks.trendyol && (
                      <Button
                        asChild
                        className="bg-[#F27A1A] hover:bg-[#F27A1A]/90 text-white flex items-center gap-2"
                      >
                        <a
                          href={product.saleLinks.trendyol}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${product.name} ürününü Trendyol'da satın al`}
                        >
                          <span>Trendyol</span>
                          <ExternalLink
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                    )}
                    {product.saleLinks.hepsiburada && (
                      <Button
                        asChild
                        className="bg-[#FF6000] hover:bg-[#FF6000]/90 text-white flex items-center gap-2"
                      >
                        <a
                          href={product.saleLinks.hepsiburada}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${product.name} ürününü Hepsiburada'da satın al`}
                        >
                          <span>Hepsiburada</span>
                          <ExternalLink
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                    )}
                    {product.saleLinks.amazon && (
                      <Button
                        asChild
                        className="bg-[#232F3E] hover:bg-[#232F3E]/90 text-white flex items-center gap-2"
                      >
                        <a
                          href={product.saleLinks.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${product.name} ürününü Amazon'da satın al`}
                        >
                          <span>Amazon</span>
                          <ExternalLink
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                    )}
                  </div>
                </section>
              )}

              {/* Product Features - Sadece true olanları göster */}
              {productFeatures.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {productFeatures.map((feature) => (
                    <div
                      key={feature.key}
                      className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex-shrink-0 pr-3 border-r border-gray-300">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-semibold text-primary pl-3 flex-1">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tabs for Product Details */}
              <section aria-label="Ürün detay bilgileri">
                <Tabs defaultValue="ingredients" className="w-full">
                  <TabsList
                    className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-100 p-1 rounded-md gap-1 h-auto"
                    aria-label="Ürün bilgi kategorileri"
                  >
                    <TabsTrigger
                      value="ingredients"
                      className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                      aria-label="İçindekiler bilgisi"
                    >
                      İçindekiler
                    </TabsTrigger>
                    <TabsTrigger
                      value="product-features"
                      className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                      aria-label="Ürün özellikleri"
                    >
                      Özellikler
                    </TabsTrigger>
                    {product.netQuantity && (
                      <TabsTrigger
                        value="net-quantity"
                        className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                      >
                        Net Miktar
                      </TabsTrigger>
                    )}
                    {product.storageConditions && (
                      <TabsTrigger
                        value="storage-conditions"
                        className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                      >
                        Muhafaza
                      </TabsTrigger>
                    )}
                    {product.usageRecommendation && (
                      <TabsTrigger
                        value="usage-recommendation"
                        className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                      >
                        Kullanım
                      </TabsTrigger>
                    )}
                    {product.additionalInfo && (
                      <TabsTrigger
                        value="additional-info"
                        className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                      >
                        Ek Bilgi
                      </TabsTrigger>
                    )}
                  </TabsList>

                  {/* İçindekiler Tab Content */}
                  <TabsContent value="ingredients" className="mt-6">
                    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="bg-white p-4 sm:p-6">
                        <Tabs
                          defaultValue="active-ingredients"
                          className="w-full"
                        >
                          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 bg-gray-100 p-1 rounded-md gap-1 h-auto">
                            <TabsTrigger
                              value="active-ingredients"
                              className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                            >
                              Etken Maddeler
                            </TabsTrigger>
                            <TabsTrigger
                              value="content-info"
                              className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all min-h-[40px] flex items-center justify-center"
                            >
                              İçerik Bilgisi
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent
                            value="active-ingredients"
                            className="mt-4 p-3 sm:p-4 border bg-white rounded-md min-h-[120px]"
                          >
                            <h3 className="text-lg font-semibold text-primary mb-4">
                              Her kapsülde
                            </h3>
                            {product.activeIngredients &&
                              product.activeIngredients.map(
                                (ingredient, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2 last:mb-0 last:border-b-0"
                                  >
                                    <span className="text-gray-700 text-sm font-medium">
                                      {ingredient}
                                    </span>
                                    <span className="text-gray-700 text-sm font-semibold">
                                      {product.activeIngredientAmounts?.[
                                        ingredient
                                      ] || ""}
                                    </span>
                                  </div>
                                )
                              )}
                          </TabsContent>
                          <TabsContent
                            value="content-info"
                            className="mt-4 p-3 sm:p-4 border bg-white rounded-md min-h-[120px]"
                          >
                            <p className="text-gray-600 text-sm break-words">
                              {product.ingredients ||
                                "Bu ürün için içerik bilgisi bulunmamaktadır."}
                            </p>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Ürün Özellikleri Tab Content */}
                  <TabsContent value="product-features" className="mt-6">
                    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="bg-white p-4 sm:p-6">
                        <div className="p-3 sm:p-4 border bg-gray-50 rounded-md">
                          {product.productFeatureDescriptions &&
                          product.productFeatureDescriptions.length > 0 ? (
                            <ul className="list-disc list-inside text-gray-700 space-y-3 text-sm">
                              {product.productFeatureDescriptions.map(
                                (description, index) => (
                                  <li
                                    key={index}
                                    className="text-gray-700 text-sm break-words"
                                  >
                                    {description}
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p className="text-gray-500 text-sm">
                              Bu ürün için özellik bilgisi bulunmamaktadır.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Diğer Tab Contents */}
                  {product.netQuantity && (
                    <TabsContent value="net-quantity" className="mt-6">
                      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-white p-4 sm:p-6">
                          <div className="p-3 sm:p-4 border bg-gray-50 rounded-md">
                            <p className="text-gray-700 text-sm break-words">
                              {product.netQuantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )}

                  {product.storageConditions && (
                    <TabsContent value="storage-conditions" className="mt-6">
                      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-white p-4 sm:p-6">
                          <div className="p-3 sm:p-4 border bg-gray-50 rounded-md">
                            <p className="text-gray-700 text-sm break-words">
                              {product.storageConditions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )}

                  {product.usageRecommendation && (
                    <TabsContent value="usage-recommendation" className="mt-6">
                      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-white p-4 sm:p-6">
                          <div className="p-3 sm:p-4 border bg-gray-50 rounded-md">
                            <p className="text-gray-700 text-sm break-words">
                              {product.usageRecommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )}

                  {product.additionalInfo && (
                    <TabsContent value="additional-info" className="mt-6">
                      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-white p-4 sm:p-6">
                          <div className="p-3 sm:p-4 border bg-gray-50 rounded-md">
                            <p className="text-gray-700 text-sm break-words">
                              {product.additionalInfo}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              </section>
            </div>
          </article>

          {/* Product Warnings */}
          {product.warnings && product.warnings.length > 0 && (
            <aside
              className="mt-12 sm:mt-16 bg-yellow-50 border-l-4 border-[#C1A667] p-6 rounded-md shadow-sm"
              aria-label="Ürün uyarıları"
            >
              <div className="flex items-start">
                <AlertTriangle
                  className="h-6 w-6 text-[#C1A667] mr-3 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Önemli Uyarılar
                  </h3>
                  <ul className="list-disc list-inside text-yellow-700 space-y-1">
                    {product.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
