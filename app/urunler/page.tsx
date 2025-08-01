"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Filter } from "lucide-react"
import Link from "next/link"

const toSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü")

  const products = [
    {
      id: 1,
      name: "Magnezyum Kompleksi",
      description: "Kas ve sinir fonksiyonları için şelatlı magnezyum.",
      image: "/placeholder.svg?height=300&width=250",
      category: "Mineraller",
    },
    {
      id: 2,
      name: "Multivitamin",
      description: "Günlük vitamin ve mineral ihtiyacınız için kapsamlı destek.",
      image: "/placeholder.svg?height=300&width=250",
      category: "Vitaminler",
    },
    {
      id: 3,
      name: "Glukozamin",
      description: "Eklem sağlığı ve hareket kabiliyetini destekler.",
      image: "/placeholder.svg?height=300&width=250",
      category: "Diğer",
    },
    {
      id: 4,
      name: "Omega-3",
      description: "Kalp ve beyin sağlığı için yüksek kaliteli balık yağı.",
      image: "/placeholder.svg?height=300&width=250",
      category: "Yağ Asitleri",
    },
    {
      id: 5,
      name: "Vitamin D3",
      description: "Kemik sağlığı ve bağışıklık sistemi için önemli bir vitamin.",
      image: "/placeholder.svg?height=300&width=250",
      category: "Vitaminler",
    },
    {
      id: 6,
      name: "Probiyotik",
      description: "Bağırsak sağlığını destekleyen faydalı bakteri kültürleri.",
      image: "/placeholder.svg?height=300&width=250",
      category: "Probiyotikler",
    },
  ]

  const categories = ["Tümü", "Vitaminler", "Mineraller", "Probiyotikler", "Yağ Asitleri", "Diğer"]

  const filteredProducts =
    activeCategory === "Tümü" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section - Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Ürünlerimiz
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sağlığınız için özenle seçilmiş, klinik olarak test edilmiş vitamin ve besin takviyeleri
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section - Responsive */}
      <section className="py-6 sm:py-8 border-b bg-white sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            {/* Filter Button and Categories */}
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
              <Button
                variant="outline"
                className="rounded-full hover:bg-secondary hover:text-primary hover:border-secondary transition-colors w-full sm:w-auto bg-transparent"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filtrele
              </Button>

              {/* Category Pills - Responsive */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`cursor-pointer px-3 py-2 rounded-full text-xs sm:text-sm transition-colors border whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-secondary text-primary border-secondary"
                        : "bg-transparent text-gray-700 border-gray-300 hover:bg-secondary/70 hover:text-primary hover:border-secondary/70"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-gray-600 text-sm text-center sm:text-right">{filteredProducts.length} ürün bulundu</p>
          </div>
        </div>
      </section>

      {/* Products Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/urunler/${toSlug(product.name)}`} className="block group h-full">
                <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="bg-secondary/20 p-6 sm:p-8 relative overflow-hidden">
                        <img
                          src={product.image || `/placeholder.svg?height=300&width=250&query=${toSlug(product.name)}`}
                          alt={product.name}
                          className="w-full h-40 sm:h-48 md:h-52 lg:h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-secondary text-primary rounded-full w-full mb-3 sm:mb-4 pointer-events-none text-xs sm:text-sm"
                      >
                        {product.category}
                      </Button>
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
