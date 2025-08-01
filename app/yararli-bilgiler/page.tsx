import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Vitamin D Eksikliği: Belirtileri ve Çözümleri",
      excerpt:
        "Vitamin D eksikliğinin vücudumuz üzerindeki etkileri ve bu eksikliği nasıl giderebileceğiniz hakkında bilmeniz gerekenler.",
      author: "Dr. Ayşe Yılmaz",
      date: "15 Mayıs 2024",
      category: "Vitaminler",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Magnezyumun Uyku Kalitesi Üzerindeki Etkisi",
      excerpt:
        "Magnezyum takviyesinin uyku kalitesini nasıl iyileştirdiği ve doğru kullanım şekli hakkında uzman görüşleri.",
      author: "Dr. Mehmet Kaya",
      date: "12 Mayıs 2024",
      category: "Mineraller",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Probiyotiklerin Bağışıklık Sistemi Üzerindeki Faydaları",
      excerpt: "Bağırsak sağlığı ve bağışıklık sistemi arasındaki bağlantı ve probiyotiklerin rolü.",
      author: "Zeynep Demir",
      date: "10 Mayıs 2024",
      category: "Probiyotikler",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Omega-3 Yağ Asitlerinin Kalp Sağlığına Etkisi",
      excerpt: "Omega-3 yağ asitlerinin kardiyovasküler sistem üzerindeki koruyucu etkileri ve günlük alım önerileri.",
      author: "Dr. Ayşe Yılmaz",
      date: "8 Mayıs 2024",
      category: "Yağ Asitleri",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Antioxidanların Yaşlanma Karşıtı Etkileri",
      excerpt: "Serbest radikallerle mücadelede antioxidanların rolü ve hangi besinlerde bulunduğu.",
      author: "Dr. Mehmet Kaya",
      date: "5 Mayıs 2024",
      category: "Antioxidanlar",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "B Vitaminlerinin Enerji Metabolizmasındaki Rolü",
      excerpt: "B vitamin kompleksinin enerji üretimi ve sinir sistemi sağlığı üzerindeki kritik etkileri.",
      author: "Zeynep Demir",
      date: "3 Mayıs 2024",
      category: "Vitaminler",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section - Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Yararlı Bilgiler
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sağlıklı yaşam için uzman görüşleri, araştırmalar ve pratik öneriler
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center lg:text-left">
              Öne Çıkan Makale
            </h2>
            <Link href={`/yararli-bilgiler/${articles[0].id}`} className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Featured Article Image */}
                    <img
                      src={articles[0].image || "/placeholder.svg"}
                      alt={articles[0].title}
                      className="w-full h-64 sm:h-80 lg:h-full object-cover"
                    />

                    {/* Featured Article Content */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-secondary transition-colors leading-tight">
                        {articles[0].title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-4">
                        {articles[0].excerpt}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>{articles[0].author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>{articles[0].date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary mb-8 sm:mb-12 text-center">
            Diğer Makaleler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.slice(1).map((article) => (
              <Link key={article.id} href={`/yararli-bilgiler/${article.id}`} className="block group h-full">
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
                          <User className="h-3 w-3 mr-1" />
                          <span>{article.author}</span>
                        </div>
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
  )
}
