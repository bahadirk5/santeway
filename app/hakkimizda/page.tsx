import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Heart, Target, Lightbulb, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section - Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Hakkımızda
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sağlığınız için en iyisini sunma misyonumuz ve değerlerimiz
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Sağlığınızı Güçlendiriyoruz
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                BetterVits olarak, herkesin en iyi versiyonuna ulaşabilmesi için kaliteli, güvenilir ve etkili besin
                takviyeleri sunuyoruz. Bilimsel araştırmalara dayalı formüllerimizle sağlığınızı destekliyoruz.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Türkiye'de üretilen, uluslararası standartlarda ürünlerimizle sağlıklı yaşam yolculuğunuzda
                yanınızdayız.
              </p>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Laboratuvar Araştırması"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Değerlerimiz
            </h2>
          </div>

          {/* Values Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Kalite",
                description: "En yüksek kalite standartlarında üretim",
              },
              {
                icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Güven",
                description: "Şeffaf ve güvenilir iş anlayışı",
              },
              {
                icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Etkililik",
                description: "Bilimsel olarak kanıtlanmış formüller",
              },
              {
                icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Müşteri Odaklılık",
                description: "Müşteri memnuniyetini esas alan yaklaşım",
              },
              {
                icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "İnovasyon",
                description: "Sürekli gelişen yenilikçi çözümler",
              },
              {
                icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Doğallık",
                description: "Doğadan ilham alan saf içerikler",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
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
