"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  slug: string;
  image?: string;
}

interface ProductsClientProps {
  products: Product[];
}

export function ProductsClient({ products }: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  // Kategorileri dinamik olarak oluştur
  const categories = ["Tümü", ...Array.from(new Set(products.map(product => product.category)))];

  const filteredProducts =
    activeCategory === "Tümü"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
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
            <p className="text-gray-600 text-sm text-center sm:text-right">
              {filteredProducts.length} ürün bulundu
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/urunler/${product.slug}`}
                className="block group h-full"
              >
                <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    {/* Product Image */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-white">
                      <div className="relative overflow-hidden aspect-square flex items-center justify-center p-4 sm:p-6">
                        <img
                          src={
                            product.image ||
                            `/placeholder.svg?height=300&width=250&query=${product.slug}`
                          }
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between bg-white">
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
