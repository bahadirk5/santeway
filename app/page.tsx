import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

// Helper function to create slugs
const toSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
}

export default function HomePage() {
  // Tek ürün bilgisi
  const featuredProduct = {
    name: "Magnezyum Kompleksi",
    imageQuery: "Magnesium supplement bottle high quality",
    description:
      "Kas ve sinir fonksiyonları için şelatlı magnezyum formülü. Günlük magnezyum ihtiyacınızı karşılar ve enerji metabolizmanızı destekler.",
    features: ["Şelatlı Magnezyum", "Yüksek Emilim", "Doğal İçerik", "Türkiye Üretimi"],
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Fully Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Daha İyi Bir
                <br />
                <span className="relative inline-block mt-2">
                  Sizi Seçin
                  <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-secondary/50 -z-10"></div>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Santeway ile daha iyi hissedin, genel sağlık ve zindelik için ihtiyacınız olan takviyeler.
              </p>
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                HEMEN İNCELE
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </div>

            {/* Image Content */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary/20 rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Vitamin Ürünleri"
                  className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section - "Special Supplements - Magnesium Complex" - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-primary/5 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Product Image - Responsive Sizing */}
            <div className="relative order-1 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-2xl sm:rounded-3xl transform scale-105 rotate-2 transition-all duration-500 hover:scale-110 hover:rotate-3"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100">
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <img
                    src={`/placeholder.svg?height=500&width=400&query=${featuredProduct.imageQuery}`}
                    alt={featuredProduct.name}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] object-contain mx-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Product Information - Responsive Text and Spacing */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-2 text-center lg:text-left">
              <div>
                <p
                  className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wider"
                  style={{ color: "#C1A667" }}
                >
                  Özel Takviyeler
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4 md:mb-5 leading-tight">
                  {featuredProduct.name}
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                  {featuredProduct.description}
                </p>
              </div>

              {/* Product Features - Responsive Grid */}
              <div className="space-y-2 sm:space-y-3">
                {featuredProduct.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 sm:p-4 bg-gray-50/80 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 justify-center lg:justify-start"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-secondary flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - Responsive - Buton yukarı yaklaştırıldı */}
              <div className="pt-0 sm:pt-2">
                <Link href={`/urunler/${toSlug(featuredProduct.name)}`}>
                  <Button className="group bg-primary hover:bg-primary/90 rounded-full text-base sm:text-lg py-4 sm:py-6 shadow-lg hover:shadow-xl transition-shadow px-6 sm:px-8 w-full sm:w-auto">
                    ÜRÜNÜ İNCELE
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - "Boost Your Health" - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Image Grid - Responsive Layout */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="Sağlıklı Yaşam"
                  className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Egzersiz"
                  className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg mt-4 sm:mt-6 md:mt-8 w-full h-40 sm:h-52 md:h-60 lg:h-64 object-cover"
                />
              </div>
              {/* Decorative Elements - Responsive Sizing */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary rounded-full opacity-50"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-full"></div>
            </div>

            {/* Text Content - Responsive Typography */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Sağlığınızı Güçlendirin
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Santeway'de işleri biraz farklı yapıyoruz: sağlığınızı ihtiyacınız olan şekilde hedefleyen dengeli ve
                Türkiye'de üretilmiş takviyeler oluşturmak için titiz bilimsel araştırmalar kullanıyoruz.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Probiyotik Kompleksimizle sağlıklı bir bağırsak mikrobiyomunu desteklemekten Multivitaminimizle günlük
                modern yaşam için sizi güçlendirmeye kadar, ihtiyacınız olan tamamen doğal takviyelere sahibiz.
              </p>
              <Button className="group bg-primary hover:bg-primary/90 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                DEVAMI
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section - Responsive Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Daha İyi İçerikler
            </h2>
            <p className="text-secondary max-w-2xl mx-auto font-medium text-base sm:text-lg">
              Sağlığınız için en kaliteli ve etkili bileşenleri özenle seçiyoruz.
            </p>
          </div>

          {/* Responsive Grid - Adjusts columns based on screen size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {[
              { name: "Vitamin C", subtitle: "Askorbik asit olarak Vitamin C" },
              { name: "Vitamin B3", subtitle: "Niacinamide" },
              { name: "Magnezyum", subtitle: "Şelatlı Magnezyum formu" },
              { name: "Hyaluronik Asit", subtitle: "Hyaluronik Asit %2" },
              { name: "Lactobacillus", subtitle: "Lactobacillus kompleksi" },
            ].map((ingredient, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-secondary/20 h-24 sm:h-28 md:h-32 relative">
                    <img
                      src={`/placeholder.svg?height=128&width=200&query=abstract+${ingredient.name}+texture`}
                      alt={`${ingredient.name} dokusu`}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base">{ingredient.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-tight">{ingredient.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
