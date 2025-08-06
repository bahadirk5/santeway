import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) | Santeway",
  description:
    "Gıda takviyeleri hakkında merak ettiğiniz tüm soruların cevapları burada. L-Carnitine, genel sağlık soruları ve ürün bilgileri için SSS sayfamızı ziyaret edin.",
  keywords: [
    "santeway sss",
    "gıda takviyesi sorular",
    "l-carnitine sorular",
    "vitamin soruları",
    "sağlık soruları",
    "ürün bilgileri",
    "müşteri hizmetleri",
    "santeway müşteri destek",
    "gıda takviyesi nasıl kullanılır",
    "yan etki",
    "saklama koşulları",
  ],
  openGraph: {
    title: "Sıkça Sorulan Sorular | Santeway",
    description:
      "Gıda takviyeleri ve sağlık hakkında merak ettiğiniz tüm soruların cevapları burada.",
    type: "website",
    url: "https://santeway.com/sss",
    images: [
      {
        url: "/images/santeway-logo.png",
        width: 1200,
        height: 630,
        alt: "Santeway SSS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sıkça Sorulan Sorular | Santeway",
    description:
      "Gıda takviyeleri ve sağlık hakkında merak ettiğiniz tüm soruların cevapları burada.",
    images: ["/images/santeway-logo.png"],
  },
  alternates: {
    canonical: "https://santeway.com/sss",
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Genel Sorular",
      questions: [
        {
          question: "Gıda takviyesi nedir?",
          answer: `Türk Gıda Kodeksi ve Takviye Edici Gıdalar
            Tebliğinde geçen tanımı ile takviye edici gıda: Normal beslenmeyi takviye etmek
            amacıyla, vitamin, mineral, protein, karbonhidrat, lif, yağ asidi, amino asit gibi besin
            öğelerinin veya bunların dışında besleyici veya fizyolojik etkileri bulunan bitki,
            bitkisel ve hayvansal kaynaklı maddeler, biyoaktif maddeler ve benzeri maddelerin
            konsantre veya ekstraktlarının tek başına veya karışımlarının kapsül, tablet, pastil, tek
            kullanımlık toz paket, sıvı ampul, damlalıklı şişe ve diğer benzeri sıvı veya toz
            formlarda hazırlanarak günlük alım dozu belirlenmiş ürünleri” ifade eder.`,
        },
        {
          question: "Gıda takviyelerini günün hangi saatinde almalıyım?",
          answer: `Her gıda takviyesinin etkisi,
            içeriğine ve kullanım şekline göre değişir. Bazı vitamin ve mineraller aç karnına
            alındığında daha iyi emilirken, bazıları tok karnına kullanıldığında daha faydalı
            olabilir. Enerji veren takviyeler (örneğin kafein veya ginseng içerenler) akşam
            saatlerinde alındığında uykuyu zorlaştırabilir. Uykuya yardımcı olan takviyeler
            (örneğin melatonin ya da magnezyum) ise gündüz alındığında yorgunluk ve dalgınlığa
            yol açabilir. Bu nedenle, her takviyenin ne zaman ve nasıl kullanılacağı içeriğine ve
            kişinin ihtiyacına göre belirlenmelidir.`,
        },
        {
          question: "Gıda takviyelerini nasıl saklamalıyım?",
          answer:
            "Gıda takviyeleri serin, kuru ve güneş ışığından uzak bir yerde, orijinal ambalajında ve ağzı kapalı olarak saklanmalıdır.",
        },
        {
          question: "Sağlık Bakanlığını onayınız var mı?",
          answer:
            "Gıda takviyesi kategorisinde yer alan tüm ürünlerin onayları yalnızca T.C. Tarım ve Orman Bakanlığı tarafından verilmektedir. Ürünlerimiz T.C. Tarım ve Orman Bakanlığı onaylıdır.",
        },
        {
          question:
            "Kullandığınız kapsüllerin Kosher ve Helal sertifikaları var mı?",
          answer:
            "Ürünlerimizde kullandığımız kapsüllerin; Kosher ve Helal sertifikaları mevcuttur.",
        },
        {
          question: "Kullandığınız kapsüllerin kaynağı nedir?",
          answer:
            "Kapsül şeklinde formüle edilmiş ürünlerimiz vejetaryen ve vegan kullanımına uygun olup, kapsüller tamamen bitkisel selülozdan (hidroksipropil metil selüloz) elde edilmektedir.",
        },
        {
          question: "Kapsülleri açarak kullanabilir miyim?",
          answer:
            "Kapsülleri yutmakta sorun yaşıyorsanız kapsülleri açarak bol su ile kullanabilirsiniz.",
        },
      ],
    },
    {
      title: "Ürün Bilgileri",
      questions: [
        {
          question:
            "L-Carnitine Carnipure hangi formdadır ve emilimi nasıldır?",
          answer: `Ürünümüzde kullanılan L-Carnitine,
            İsviçre üretimi Carnipure® markalı ham maddeden elde edilmektedir. L-Carnitine
            Tartarat, L-Carnitine’in stabilize edilmiş tuz formudur ve gıda takviyelerinde yaygın
            olarak tercih edilir. Formülasyonda 750 mg L-Carnitine Tartarat kullanılmış olup, bu
            miktar yaklaşık 510 mg saf L-Carnitine’e karşılık gelir. Yüksek saflık ve
            biyoyararlanım sunan Carnipure®, bağırsaklardan hızlı ve etkili emilim sağlar.`,
        },
        {
          question:
            "Ürünlerin tavsiye edilen tüketim tarihini nereden görebilirim?",
          answer: `Tavsiye edilen tüketim tarihi ürünler uygun şekilde muhafaza edildiğinde,
            gıdanın kendine has özelliklerini koruduğu süreyi gösterir. Ürünlerimizin etiketi
            üzerinde “Tavsiye Edilen Tüketim Tarihi (TETT)” şeklinde görebilirsiniz. Tavsiye
            edilen tüketim tarihi ay ve yıl olarak belirtilmektedir.`,
        },
        {
          question: "Ürünlerinizin onaylı olduğunu nasıl anlarız?",
          answer: `Gıda Güvenliği Bilgi Sistemi - GGBS (ggbs.tarim.gov.tr)
            Santeway ürünlerinin GGBS numaraları ürün etiketlerinde bulunmaktadır. Takviye
            Edici Gıda Onay Numarası ve ilgili ürünü kontrol etmek için https://ggbs.tarim.gov.tr
            adresinden "Onaylı Takviye Edici Gıdalar Listesi" linkine tıklayarak işlem
            yapabilirsiniz.`,
        },
        {
          question: "Ürünlerinizin yan etkisi var mıdır?",
          answer: `Santeway ürünleri takviye edici gıda ürünleridir. Belirli bir yan etkisi
            bulunmamaktadır. Ürünlerin içindeki bileşenler T.C. Tarım ve Orman Bakanlığı’nın
            belirlediği günlük kullanım sınırları içerisindedir. Özel bir durumunuz veya
            hastalığınız var ise doktorunuza danışmanız gerekir.`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              }))
            ),
          }),
        }}
      />

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
                      <AccordionItem
                        key={index}
                        value={`item-${categoryIndex}-${index}`}
                      >
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
                <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">
                  E-posta
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  info@santeway.com
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">
                  Telefon
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  +90 0507 292 88 67
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">
                  Çalışma Saatleri
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Pzt-Cum 09:00-18:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
