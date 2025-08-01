import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Genel Sorular",
      questions: [
        {
          question: "BetterVits ürünleri nasıl kullanılır?",
          answer:
            "Her ürünün ambalajında belirtilen kullanım talimatlarını takip etmenizi öneririz. Genellikle günde 1-2 kapsül, yemeklerle birlikte alınması önerilir. Herhangi bir sağlık sorununuz varsa doktorunuza danışın.",
        },
        {
          question: "Ürünleriniz ne kadar sürede etki gösterir?",
          answer:
            "Etkiler kişiden kişiye değişiklik gösterebilir. Çoğu müşterimiz 2-4 hafta içinde olumlu değişiklikler fark eder. Düzenli kullanım önemlidir.",
        },
        {
          question: "Ürünleriniz vegan/vejetaryen dostu mu?",
          answer:
            "Evet, ürünlerimizin çoğu vegan ve vejetaryen dostudur. Her ürünün etiketinde bu bilgiyi bulabilirsiniz.",
        },
        {
          question: "Hamilelik döneminde kullanılabilir mi?",
          answer:
            "Hamilelik ve emzirme döneminde herhangi bir takviye kullanmadan önce mutlaka doktorunuza danışmanızı öneririz.",
        },
      ],
    },
    {
      title: "Sipariş ve Teslimat",
      questions: [
        {
          question: "Kargo ücreti ne kadar?",
          answer: "Tüm siparişlerde ücretsiz kargo sunuyoruz. Minimum sipariş tutarı yoktur.",
        },
        {
          question: "Siparişim ne kadar sürede gelir?",
          answer: "Siparişleriniz 1-3 iş günü içinde kargoya verilir ve 2-5 iş günü içinde adresinize ulaşır.",
        },
        {
          question: "Sipariş iptali yapabilir miyim?",
          answer: "Siparişiniz kargoya verilmeden önce iptal edebilirsiniz. Müşteri hizmetlerimizle iletişime geçin.",
        },
        {
          question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          answer: "Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kabul ediyoruz.",
        },
      ],
    },
    {
      title: "İade ve Değişim",
      questions: [
        {
          question: "İade politikanız nedir?",
          answer: "60 günlük para iade garantimiz vardır. Memnun kalmazsanız ürünü iade edebilirsiniz.",
        },
        {
          question: "Açılmış ürünleri iade edebilir miyim?",
          answer:
            "Evet, açılmış ürünleri de iade edebilirsiniz. Sağlık ve hijyen nedeniyle sadece para iadesi yapılır.",
        },
        {
          question: "İade süreci nasıl işler?",
          answer: "Müşteri hizmetlerimizle iletişime geçin, iade kodunuzu alın ve ürünü ücretsiz kargo ile gönderin.",
        },
      ],
    },
    {
      title: "Ürün Bilgileri",
      questions: [
        {
          question: "Ürünlerinizde yan etki var mı?",
          answer:
            "Ürünlerimiz doğal bileşenlerden üretilir ve genellikle yan etki göstermez. Ancak alerjiniz varsa içerik listesini kontrol edin.",
        },
        {
          question: "Ürünleriniz laboratuvar testinden geçiyor mu?",
          answer: "Evet, tüm ürünlerimiz üçüncü taraf laboratuvarlarda test edilir ve kalite sertifikalarına sahiptir.",
        },
        {
          question: "Son kullanma tarihi ne kadar?",
          answer:
            "Ürünlerimizin son kullanma tarihi genellikle üretim tarihinden itibaren 2-3 yıldır. Her üründe belirtilmiştir.",
        },
        {
          question: "Çocuklar kullanabilir mi?",
          answer: "18 yaş altı çocuklar için özel formüllerimiz mevcuttur. Genel ürünler yetişkinler içindir.",
        },
      ],
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
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 sm:mb-12">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="bg-secondary text-primary text-lg sm:text-xl md:text-2xl font-semibold py-3 px-4 sm:px-6 rounded-lg inline-block">
                  {category.title}
                </h2>
              </div>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline text-sm sm:text-base py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed text-sm sm:text-base pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
            Aradığınız Cevabı Bulamadınız mı?
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyar
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">E-posta</h3>
                <p className="text-gray-600 text-sm sm:text-base">info@bettervits.com</p>
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">Telefon</h3>
                <p className="text-gray-600 text-sm sm:text-base">0850 123 45 67</p>
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">Çalışma Saatleri</h3>
                <p className="text-gray-600 text-sm sm:text-base">Pzt-Cum 09:00-18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
