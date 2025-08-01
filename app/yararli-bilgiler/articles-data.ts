// Bu dosyayı app/yararli-bilgiler/articles-data.ts olarak oluşturun

export interface ArticleContentBlock {
  type: "paragraph" | "heading" | "list" | "image"
  text?: string
  level?: number // for heading (e.g., 2 for h2, 3 for h3)
  items?: string[] // for list
  src?: string // for image
  alt?: string // for image
}

export interface Article {
  id: number
  title: string
  excerpt: string // Yararlı bilgiler listeleme sayfasındaki özet
  author: string
  date: string
  category: string // Artık kullanılmıyor olabilir ama veri yapısında kalsın
  image: string // Ana resim (öne çıkan makale ve liste için)
  content: ArticleContentBlock[] // Detaylı içerik
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: "Vitamin D Eksikliği: Belirtileri, Nedenleri ve Çözümleri",
    excerpt:
      "Vitamin D eksikliğinin vücudumuz üzerindeki etkileri, yaygın nedenleri ve bu önemli vitamin eksikliğini nasıl giderebileceğiniz hakkında kapsamlı bilgiler.",
    author: "Dr. Elif Aydın",
    date: "25 Mayıs 2024",
    category: "Vitaminler",
    image: "/placeholder.svg?height=600&width=1000",
    content: [
      {
        type: "paragraph",
        text: "Vitamin D, genellikle 'güneş ışığı vitamini' olarak bilinir çünkü vücudumuz güneş ışığına maruz kaldığında doğal olarak üretebilir. Ancak modern yaşam tarzları, yetersiz güneşlenme ve bazı beslenme alışkanlıkları nedeniyle Vitamin D eksikliği dünya genelinde yaygın bir sorundur. Bu vitamin, kemik sağlığından bağışıklık sistemine, ruh halinden kas fonksiyonlarına kadar pek çok kritik vücut fonksiyonunda rol oynar.",
      },
      {
        type: "heading",
        level: 2,
        text: "Vitamin D Eksikliğinin Yaygın Belirtileri",
      },
      {
        type: "list",
        items: [
          "Sürekli yorgunluk ve halsizlik hissi",
          "Kemik, eklem ve kas ağrıları",
          "Sık sık enfeksiyon geçirme ve bağışıklık sisteminin zayıflaması",
          "Depresif ruh hali ve motivasyon eksikliği",
          "Saç dökülmesinde artış",
          "Yaraların geç iyileşmesi",
        ],
      },
      {
        type: "paragraph",
        text: "Bu belirtiler her zaman doğrudan Vitamin D eksikliğine işaret etmese de, bu tür şikayetleriniz varsa bir sağlık profesyoneline danışmanız ve gerekli testleri yaptırmanız önemlidir.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=700",
        alt: "Doktorla Vitamin D üzerine konuşma",
      },
      {
        type: "heading",
        level: 2,
        text: "Eksikliğin Nedenleri Nelerdir?",
      },
      {
        type: "list",
        items: [
          "Yetersiz Güneş Işığı: Özellikle kış aylarında veya kapalı alanlarda fazla vakit geçirenlerde görülür.",
          "Beslenme: Vitamin D içeren besinlerin (yağlı balıklar, yumurta sarısı, zenginleştirilmiş süt ürünleri) yetersiz tüketimi.",
          "Yaş Faktörü: Yaş ilerledikçe cildin Vitamin D üretme kapasitesi azalır.",
          "Cilt Rengi: Koyu tenli bireylerin cildi daha fazla melanin içerdiği için Vitamin D sentezi daha yavaştır.",
          "Bazı Sağlık Durumları: Çölyak hastalığı, Crohn hastalığı gibi emilim bozuklukları veya obezite Vitamin D eksikliğine yol açabilir.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Vitamin D Seviyelerini Artırmak İçin Neler Yapılabilir?",
      },
      {
        type: "paragraph",
        text: "Vitamin D eksikliğini gidermek ve ideal seviyeleri korumak için birkaç yöntem bulunmaktadır:",
      },
      {
        type: "list",
        items: [
          "Güneşlenme: Güneşin dik olmadığı saatlerde (sabah erken veya akşamüstü) 15-20 dakika korunmasız güneşlenmek faydalı olabilir. Ancak cilt sağlığı için aşırıya kaçmamak önemlidir.",
          "Beslenme: Somon, uskumru, ton balığı gibi yağlı balıklar, yumurta sarısı, karaciğer ve Vitamin D ile zenginleştirilmiş süt, yoğurt, portakal suyu gibi gıdaları diyetinize ekleyin.",
          "Takviyeler: Doktorunuzun önerisiyle Vitamin D takviyeleri kullanabilirsiniz. Takviye dozu, eksikliğinizin seviyesine göre belirlenmelidir.",
        ],
      },
      {
        type: "paragraph",
        text: "Unutmayın, herhangi bir sağlık sorununuz veya endişeniz varsa mutlaka bir doktora danışın. Kendi kendinize yüksek dozda Vitamin D takviyesi almak zararlı olabilir.",
      },
    ],
  },
  // Diğer makaleler için de benzer detaylı içerikler eklenebilir...
  {
    id: 2,
    title: "Magnezyumun Uyku Kalitesi Üzerindeki Şaşırtıcı Etkisi",
    excerpt:
      "Magnezyum takviyesinin uyku kalitesini nasıl iyileştirdiği, bilimsel dayanakları ve doğru kullanım şekli hakkında uzman görüşleri.",
    author: "Uzm. Dyt. Canan Özdemir",
    date: "20 Mayıs 2024",
    category: "Mineraller",
    image: "/placeholder.svg?height=600&width=1000",
    content: [
      {
        type: "paragraph",
        text: "İyi bir gece uykusu, genel sağlık ve zindelik için temel bir ihtiyaçtır. Ancak stres, yoğun yaşam temposu ve bazı beslenme eksiklikleri uyku kalitesini olumsuz etkileyebilir. Son yıllarda yapılan araştırmalar, magnezyum mineralinin uyku düzeni ve kalitesi üzerinde önemli rolleri olduğunu göstermektedir.",
      },
      { type: "heading", level: 2, text: "Magnezyum ve Uyku İlişkisi Nasıl Çalışır?" },
      {
        type: "paragraph",
        text: "Magnezyum, vücutta 300'den fazla enzimatik reaksiyonda görev alan hayati bir mineraldir. Uyku ile ilişkili mekanizmaları şunlardır:",
      },
      {
        type: "list",
        items: [
          "Sinir Sistemini Sakinleştirir: Magnezyum, merkezi sinir sistemini sakinleştiren bir nörotransmitter olan GABA (Gamma-Aminobütirik Asit) seviyelerini düzenlemeye yardımcı olur. Yeterli GABA seviyeleri, rahatlamayı ve uykuya dalmayı kolaylaştırır.",
          "Melatonin Üretimini Destekler: Melatonin, uyku-uyanıklık döngüsünü düzenleyen bir hormondur. Magnezyum, melatonin üretiminde rol oynar.",
          "Kas Gevşemesini Sağlar: Magnezyum eksikliği kas kramplarına ve huzursuz bacak sendromuna yol açabilir, bu da uykuyu bölebilir. Yeterli magnezyum, kasların gevşemesine yardımcı olur.",
          "Stres ve Anksiyeteyi Azaltır: Magnezyum, stres hormonu olan kortizol seviyelerini dengelemeye yardımcı olabilir. Düşük kortizol seviyeleri, daha sakin bir zihin ve daha kolay uyku anlamına gelir.",
        ],
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=700",
        alt: "Yatak başında magnezyum takviyesi",
      },
      { type: "heading", level: 2, text: "Kimler Magnezyum Takviyesinden Fayda Görebilir?" },
      {
        type: "paragraph",
        text: "Özellikle aşağıdaki durumlarda magnezyum takviyesi uyku kalitesini artırmada yardımcı olabilir:",
      },
      {
        type: "list",
        items: [
          "Uykuya dalmakta zorluk çekenler",
          "Gece sık sık uyananlar",
          "Huzursuz bacak sendromu yaşayanlar",
          "Yoğun stres altında olanlar",
          "Magnezyum eksikliği riski taşıyanlar (örneğin, bazı ilaçları kullananlar, sindirim sorunları olanlar)",
        ],
      },
      { type: "heading", level: 2, text: "Doğru Kullanım ve Dikkat Edilmesi Gerekenler" },
      {
        type: "paragraph",
        text: "Magnezyum takviyesi almayı düşünüyorsanız, öncelikle bir sağlık profesyoneline danışmanız önemlidir. Doktorunuz, sizin için uygun magnezyum formunu (sitrat, glisinat, malat vb.) ve dozunu belirleyecektir. Genellikle yatmadan 1-2 saat önce alınması tavsiye edilir. Aşırı magnezyum alımı ishal gibi yan etkilere neden olabilir, bu nedenle önerilen dozu aşmamak önemlidir.",
      },
    ],
  },
]
