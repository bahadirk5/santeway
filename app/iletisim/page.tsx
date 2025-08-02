import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section - Responsive */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              İletişim
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sorularınız için bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Adres",
                content: "Burç Mahallesi 681. Sokak Duru Sitesi 2 No:17/12 Yenimahalle/Ankara",
              },
              {
                icon: <Phone className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Telefon",
                content: "+90 0507 292 88 67",
              },
              {
                icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "E-posta",
                content: "info@santeway.com",
              },
              {
                icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Çalışma Saatleri",
                content: "Pazartesi - Cuma: 09:00 - 18:00",
              },
            ].map((info, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{info.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
                Bize Mesaj Gönderin
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Sorularınız, önerileriniz veya geri bildirimleriniz için aşağıdaki formu doldurabilirsiniz. En kısa
                sürede size dönüş yapacağız.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2 text-base sm:text-lg">Müşteri Hizmetleri</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Genel sorular ve sipariş desteği</p>
                  <p className="text-primary font-medium text-sm sm:text-base">info@santeway.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="order-1 lg:order-2">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-4 sm:space-y-6" data-netlify="true">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad
                      </label>
                      <Input id="firstName" placeholder="Adınız" className="text-sm sm:text-base" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Soyad
                      </label>
                      <Input id="lastName" placeholder="Soyadınız" className="text-sm sm:text-base" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <Input id="email" type="email" placeholder="ornek@email.com" className="text-sm sm:text-base" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <Input id="phone" placeholder="0555 123 45 67" className="text-sm sm:text-base" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu
                    </label>
                    <Input id="subject" placeholder="Mesajınızın konusu" className="text-sm sm:text-base" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      className="text-sm sm:text-base resize-none"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-base sm:text-lg py-3 sm:py-4">
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
