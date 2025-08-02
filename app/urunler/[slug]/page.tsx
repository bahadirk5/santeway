import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { productsData } from "../products-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Wheat, Shield, Candy, Leaf, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

  // Ürün görselleri - ana görsel ve farklı açılardan görüntüler
  const productImages = [
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
      <Navbar />

      {/* Product Header */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-primary text-white mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Images Carousel */}
            <div className="relative">
              <div className="bg-secondary/10 p-8 rounded-xl shadow-lg flex justify-center items-center">
                <Carousel className="w-full max-w-md">
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
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-12 bg-[#C1A667] hover:bg-[#C1A667]/90 text-white border-[#C1A667]" />
                  <CarouselNext className="-right-12 bg-[#C1A667] hover:bg-[#C1A667]/90 text-white border-[#C1A667]" />
                </Carousel>
              </div>
            </div>

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
                <div className="space-y-3">
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
                        >
                          <span>Trendyol</span>
                          <ExternalLink className="h-4 w-4" />
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
                        >
                          <span>Hepsiburada</span>
                          <ExternalLink className="h-4 w-4" />
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
                        >
                          <span>Amazon</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
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
              <Tabs defaultValue="ingredients" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-gray-100 p-1 rounded-md">
                  <TabsTrigger
                    value="ingredients"
                    className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                  >
                    İçindekiler
                  </TabsTrigger>
                  <TabsTrigger
                    value="product-features"
                    className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                  >
                    Özellikler
                  </TabsTrigger>
                  {product.netQuantity && (
                    <TabsTrigger
                      value="net-quantity"
                      className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      Net Miktar
                    </TabsTrigger>
                  )}
                  {product.storageConditions && (
                    <TabsTrigger
                      value="storage-conditions"
                      className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      Muhafaza
                    </TabsTrigger>
                  )}
                  {product.usageRecommendation && (
                    <TabsTrigger
                      value="usage-recommendation"
                      className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      Kullanım
                    </TabsTrigger>
                  )}
                  {product.additionalInfo && (
                    <TabsTrigger
                      value="additional-info"
                      className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      Ek Bilgi
                    </TabsTrigger>
                  )}
                </TabsList>

                {/* İçindekiler Tab Content */}
                <TabsContent value="ingredients" className="mt-6">
                  <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-white p-6">
                      <Tabs defaultValue="active-ingredients" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-md">
                          <TabsTrigger
                            value="active-ingredients"
                            className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                          >
                            Etken Maddeler
                          </TabsTrigger>
                          <TabsTrigger
                            value="content-info"
                            className="px-3 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all"
                          >
                            İçerik Bilgisi
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent
                          value="active-ingredients"
                          className="mt-4 p-4 border bg-white rounded-md min-h-[120px]"
                        >
                          {product.activeIngredients &&
                          product.activeIngredients.length > 0 ? (
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                              {product.activeIngredients.map(
                                (ingredient, index) => (
                                  <li key={index}>{ingredient}</li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p className="text-gray-500 text-sm">
                              Bu ürün için etken madde bilgisi bulunmamaktadır.
                            </p>
                          )}
                        </TabsContent>
                        <TabsContent
                          value="content-info"
                          className="mt-4 p-4 border bg-white rounded-md min-h-[120px]"
                        >
                          {product.ingredients &&
                          product.ingredients.length > 0 ? (
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                              {product.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-500 text-sm">
                              Bu ürün için içerik bilgisi bulunmamaktadır.
                            </p>
                          )}
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </TabsContent>

                {/* Ürün Özellikleri Tab Content */}
                <TabsContent value="product-features" className="mt-6">
                  <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-white p-6">
                      <div className="p-4 border bg-gray-50 rounded-md">
                        <ul className="list-disc list-inside text-gray-700 space-y-3 text-sm">
                          {[
                            {
                              key: "glutenFree",
                              label: "Gluten İçermez",
                              icon: <Wheat className="h-4 w-4" />,
                            },
                            {
                              key: "preservativeFree",
                              label: "Koruyucu İçermez",
                              icon: <Shield className="h-4 w-4" />,
                            },
                            {
                              key: "colorantFree",
                              label: "Renklendirici İçermez",
                              icon: null,
                            },
                            {
                              key: "sugarFree",
                              label: "Şeker İçermez",
                              icon: <Candy className="h-4 w-4" />,
                            },
                            {
                              key: "vegan",
                              label: "Vegan",
                              icon: <Leaf className="h-4 w-4" />,
                            },
                          ].map((feature) => {
                            const value =
                              product.features?.[
                                feature.key as keyof typeof product.features
                              ];
                            return (
                              <li
                                key={feature.key}
                                className="text-gray-700 text-sm"
                              >
                                <span>
                                  {feature.label}:{" "}
                                  <span className="text-gray-700">
                                    {value === true
                                      ? "Evet"
                                      : value === false
                                      ? "Hayır"
                                      : "Belirtilmemiş"}
                                  </span>
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Diğer Tab Contents */}
                {product.netQuantity && (
                  <TabsContent value="net-quantity" className="mt-6">
                    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="bg-white p-6">
                        <div className="p-4 border bg-gray-50 rounded-md">
                          <p className="text-gray-700 text-sm">
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
                      <div className="bg-white p-6">
                        <div className="p-4 border bg-gray-50 rounded-md">
                          <p className="text-gray-700 text-sm">
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
                      <div className="bg-white p-6">
                        <div className="p-4 border bg-gray-50 rounded-md">
                          <p className="text-gray-700 text-sm">
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
                      <div className="bg-white p-6">
                        <div className="p-4 border bg-gray-50 rounded-md">
                          <p className="text-gray-700 text-sm">
                            {product.additionalInfo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </div>

          {product.warnings && product.warnings.length > 0 && (
            <div className="mt-12 sm:mt-16 bg-yellow-50 border-l-4 border-[#C1A667] p-6 rounded-md shadow-sm">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-[#C1A667] mr-3 flex-shrink-0" />
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
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
