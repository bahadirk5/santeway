import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { articlesData } from "./articles-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yararlı Bilgiler | Santeway",
  description: "Sağlıklı yaşam için faydalı ipuçları, beslenme önerileri ve gıda takviyeleri hakkında bilgilendirici makaleler. Uzman tavsiyeleri ile sağlığınızı destekleyin.",
  keywords: [
    "sağlık ipuçları",
    "beslenme önerileri", 
    "gıda takviyesi rehberi",
    "sağlıklı yaşam",
    "vitamin bilgileri",
    "mineral faydaları",
    "l-carnitine faydaları",
    "enerji artırma",
    "metabolizma hızlandırma",
    "antioxidant",
    "bağışıklık sistemi",
    "spor beslenme"
  ],
  openGraph: {
    title: "Yararlı Bilgiler | Santeway",
    description: "Sağlıklı yaşam için ipuçları ve pratik öneriler. Uzman tavsiyeleri ile sağlığınızı destekleyin.",
    type: "website",
    url: "https://santeway.com/yararli-bilgiler",
    images: [
      {
        url: "/images/newsletter.png",
        width: 1200,
        height: 630,
        alt: "Santeway Yararlı Bilgiler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yararlı Bilgiler | Santeway",
    description: "Sağlıklı yaşam için ipuçları ve pratik öneriler.",
    images: ["/images/newsletter.png"],
  },
  alternates: {
    canonical: "https://santeway.com/yararli-bilgiler",
  },
};

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for Blog Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Santeway Yararlı Bilgiler",
            "description": "Sağlıklı yaşam için ipuçları ve pratik öneriler",
            "url": "https://santeway.com/yararli-bilgiler",
            "publisher": {
              "@type": "Organization",
              "name": "Santeway",
              "logo": {
                "@type": "ImageObject",
                "url": "https://santeway.com/images/santeway-logo.png"
              }
            },
            "blogPost": articlesData.slice(0, 6).map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.excerpt,
              "url": `https://santeway.com/yararli-bilgiler/${article.id}`,
              "datePublished": article.date,
              "author": {
                "@type": "Organization",
                "name": "Santeway"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Santeway",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://santeway.com/images/santeway-logo.png"
                }
              },
              "image": article.image || "https://santeway.com/images/santeway-logo.png",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://santeway.com/yararli-bilgiler/${article.id}`
              }
            }))
          })
        }}
      />
      
      <Navbar />

      {/* Header Section - Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Yararlı Bilgiler
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sağlıklı yaşam için ipuçları ve pratik öneriler
            </p>
          </div>
        </div>
      </section>
      {/* Articles Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articlesData.map((article) => (
              <Link
                key={article.id}
                href={`/yararli-bilgiler/${article.id}`}
                className="block group h-full"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    {/* Article Image */}
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-40 sm:h-48 md:h-52 object-cover"
                    />

                    {/* Article Content */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2 sm:mb-3 line-clamp-2 group-hover:text-secondary transition-colors flex-grow leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 mt-auto space-y-2 sm:space-y-0">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{article.date}</span>
                        </div>
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
  );
}
