// Bu dosyayı app/yararli-bilgiler/articles-data.ts olarak oluşturun

export interface ArticleContentBlock {
  type: "paragraph" | "heading" | "list" | "image";
  text?: string;
  level?: number; // for heading (e.g., 2 for h2, 3 for h3)
  items?: string[]; // for list
  src?: string; // for image
  alt?: string; // for image
}

export interface Article {
  id: number;
  title: string;
  excerpt: string; // Yararlı bilgiler listeleme sayfasındaki özet
  date: string;
  category: string; // Artık kullanılmıyor olabilir ama veri yapısında kalsın
  image: string; // Ana resim (öne çıkan makale ve liste için)
  content: ArticleContentBlock[]; // Detaylı içerik
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: "L-Carnitine Nedir, Ne İşe Yarar?",
    excerpt:
      "L-Carnitine nedir? Ne işe yarar? Faydaları nelerdir? L-Carnitine hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "25 Mayıs 2024",
    category: "Amino Asitler",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+L-Carnitine+texture",
    content: [
      {
        type: "paragraph",
        text: "L-Carnitine, vücudumuzda doğal olarak üretilen ve yağ asitlerinin mitokondrilere taşınmasında kritik rol oynayan bir amino asit türevidir. Özellikle enerji metabolizması ve yağ yakımında önemli bir işleve sahiptir.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Nedir?",
      },
      {
        type: "paragraph",
        text: "L-Carnitine, lizin ve metiyonin amino asitlerinden sentezlenen bir bileşiktir. Vücudumuzda karaciğer, böbrek ve beyin tarafından üretilir. Aynı zamanda et, balık ve süt ürünleri gibi hayvansal kaynaklı besinlerde de bulunur.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Ne İşe Yarar?",
      },
      {
        type: "list",
        items: [
          "Yağ Yakımını Destekler: Uzun zincirli yağ asitlerini mitokondrilere taşıyarak enerji üretimini destekler",
          "Egzersiz Performansını Artırabilir: Kas yorgunluğunu azaltarak egzersiz kapasitesini artırabilir",
          "Kas İyileşmesini Destekler: Egzersiz sonrası kas hasarını azaltmaya yardımcı olabilir",
          "Kalp Sağlığını Destekler: Kalp kasının enerji ihtiyacını karşılamada rol oynar",
        ],
      },
      {
        type: "paragraph",
        text: "L-Carnitine takviyesi almadan önce mutlaka bir sağlık profesyoneline danışmanız önemlidir.",
      },
    ],
  },
  {
    id: 2,
    title: "Bağışıklık Sistemi Nedir, Nasıl Güçlendirilir?",
    excerpt:
      "Bağışıklık sistemi nedir? Bağışıklık sistemi neden zayıflar? Bağışıklık sistemi nasıl güçlendirilir? Bağışıklık sistemi hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "20 Mayıs 2024",
    category: "Bağışıklık",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+immune+system+texture",
    content: [
      {
        type: "paragraph",
        text: "Bağışıklık sistemi, vücudumuzun hastalık yapıcı mikroorganizmalara ve zararlı maddelere karşı savunma mekanizmasıdır. Güçlü bir bağışıklık sistemi, sağlıklı yaşamın temelidir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bağışıklık Sistemi Nedir?",
      },
      {
        type: "paragraph",
        text: "Bağışıklık sistemi, vücudumuzu virüs, bakteri, mantar ve diğer zararlı maddelere karşı koruyan karmaşık bir savunma ağıdır. Bu sistem, doğuştan gelen ve kazanılmış bağışıklık olmak üzere iki ana bölümden oluşur.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bağışıklık Sistemini Güçlendirme Yolları",
      },
      {
        type: "list",
        items: [
          "Dengeli Beslenme: Vitamin C, D, çinko ve selenium açısından zengin besinler tüketin",
          "Düzenli Egzersiz: Haftada en az 150 dakika orta şiddetli aktivite yapın",
          "Yeterli Uyku: Günde 7-9 saat kaliteli uyku alın",
          "Stres Yönetimi: Meditasyon, yoga gibi stres azaltıcı aktiviteler yapın",
          "Hijyen: El yıkama gibi temel hijyen kurallarına uyun",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Takviye Edici Gıdalar Ne İşe Yarar?",
    excerpt:
      "Takviye edici gıdalar ne işe yarar? Nasıl ve ne zaman kullanılır? Takviye edici gıdalar hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "18 Mayıs 2024",
    category: "Beslenme",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+supplements+texture",
    content: [
      {
        type: "paragraph",
        text: "Takviye edici gıdalar, normal beslenmeyi tamamlamak amacıyla kullanılan, vitamin, mineral, amino asit gibi besin öğelerini içeren ürünlerdir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Takviye Edici Gıdalar Ne İşe Yarar?",
      },
      {
        type: "list",
        items: [
          "Besin Eksikliklerini Giderme: Diyetle yeterli alınamayan besin öğelerini tamamlar",
          "Özel Durumlarda Destek: Hamilelik, yaşlılık, hastalık gibi durumlarda ek ihtiyaçları karşılar",
          "Performans Desteği: Sporcu beslenmesinde performansı destekleyebilir",
          "Sağlık Korunması: Bazı hastalık risklerini azaltmaya yardımcı olabilir",
        ],
      },
      {
        type: "paragraph",
        text: "Takviye kullanmadan önce mutlaka bir sağlık profesyoneline danışın ve ihtiyacınızı belirleyin.",
      },
    ],
  },
  {
    id: 4,
    title: "Dengeli Beslenme Nedir? Neden Önemlidir?",
    excerpt:
      "Dengeli beslenme nedir? Neden önemlidir? Dengeli bir öğün nasıl olmalıdır? Dengeli beslenme hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "12 Mayıs 2024",
    category: "Beslenme",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+balanced+nutrition+texture",
    content: [
      {
        type: "paragraph",
        text: "Dengeli beslenme, vücudun ihtiyaç duyduğu tüm besin öğelerini yeterli miktarda ve doğru oranlarda almak anlamına gelir. Sağlıklı yaşamın temel taşıdır.",
      },
      {
        type: "heading",
        level: 2,
        text: "Dengeli Beslenmenin Temel İlkeleri",
      },
      {
        type: "list",
        items: [
          "Çeşitlilik: Farklı besin gruplarından yiyecekler tüketin",
          "Denge: Her besin grubundan uygun miktarlarda alın",
          "Ölçülülük: Porsiyon kontrolü yapın",
          "Yeterlilik: Enerji ve besin öğesi ihtiyaçlarınızı karşılayın",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Dengeli Bir Tabak Nasıl Hazırlanır?",
      },
      {
        type: "list",
        items: [
          "Tabağın yarısını sebze ve meyvelerle doldurun",
          "Çeyreğini tam tahıllarla doldurun",
          "Çeyreğini protein kaynaklarıyla doldurun",
          "Sağlıklı yağları dahil edin",
          "Bol su için",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Yorgunluk Nedir? Nedenleri Neler Olabilir?",
    excerpt:
      "Yorgunluk Nedir? Nedenleri neler olabilir? Yorgunlukla nasıl baş edilir? Yorgunluk hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "15 Mayıs 2024",
    category: "Sağlık",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+fatigue+texture",
    content: [
      {
        type: "paragraph",
        text: "Yorgunluk, fiziksel veya zihinsel enerji eksikliği hissi olarak tanımlanabilir. Günlük yaşamı etkileyen bu durum birçok farklı nedene bağlı olabilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Yorgunluğun Yaygın Nedenleri",
      },
      {
        type: "list",
        items: [
          "Yetersiz Uyku: Kalitesiz veya yetersiz uyku en yaygın neden",
          "Beslenme Sorunları: Dengesiz beslenme ve besin eksiklikleri",
          "Stres: Kronik stres yorgunluğa yol açabilir",
          "Sedanter Yaşam: Hareketsizlik paradoks olarak yorgunluk yaratır",
          "Sağlık Sorunları: Anemi, tiroid hastalıkları, diabetes gibi",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Yorgunlukla Başa Çıkma Yolları",
      },
      {
        type: "list",
        items: [
          "Düzenli uyku saatlerine sahip olun",
          "Dengeli beslenin ve yeterli su için",
          "Düzenli egzersiz yapın",
          "Stres yönetimi tekniklerini öğrenin",
          "Gerektiğinde profesyonel yardım alın",
        ],
      },
    ],
  },
];
