// Bu dosyayı app/urunler/products-data.ts olarak oluşturun
// veya doğrudan page.tsx içinde kullanabilirsiniz.
// Şimdilik ayrı bir dosyada tutmak daha düzenli olacaktır.

export interface ProductFeatures {
  glutenFree?: boolean; // Gluten İçermez
  preservativeFree?: boolean; // Koruyucu İçermez
  colorantFree?: boolean; // Renklendirici İçermez
  sugarFree?: boolean; // Şeker İçermez
  vegan?: boolean; // Vegan
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string; // Ürün listeleme sayfasındaki açıklama
  longDescription: string; // Ürün detay sayfasındaki uzun açıklama
  image: string;
  category: string;
  // Ürün özellikleri
  features?: ProductFeatures;
  // Accordion için alanlar
  activeIngredients?: string[]; // Etken Maddeler sekmesi için
  ingredients?: string[]; // İçerik Bilgisi sekmesi için (eski ingredients alanı)
  netQuantity?: string; // Net Miktar
  storageConditions?: string; // Muhafaza Koşulları
  usageRecommendation?: string; // Kullanım Önerisi (eski usage alanının yerini alacak)
  additionalInfo?: string; // Ek Bilgi
  warnings?: string[];
}

export const productsData: Product[] = [
  {
    id: 1,
    slug: "l-carnitine-carnipure",
    name: "L-Carnitine Carnipure",
    shortDescription:
      "Santeway L-Carnitine Carnipure, vücutta doğal olarak üretilen bir amino asit türevidir. Yağ asitlerinin enerjiye dönüştürülmesine yardımcı olur.",
    longDescription: `Santeway L-Carnitine Carnipure, vücutta doğal olarak üretilen bir
      amino asit olan karnitini vücuduna düzenli olarak kazandırmak isteyenler için geliştirilmiş bir
      gıda takviyesidir. Düzenli kullanımı, fiziksel performansın artmasına, egzersiz sonrası
      toparlanmanın hızlanmasına ve kas yorgunluğunun azalmasına katkı sağlar. Aynı zamanda
      enerji metabolizmasını destekleyerek hem fiziksel hem de zihinsel enerjinin korunmasına
      yardımcı olur.
      Her serviste (2 kapsül) 1020 mg L-Carnitine içerir. Yüksek saflıktaki içeriği sayesinde hızlı
      emilim ve yüksek biyoyararlanım sunan Carnipure® marka ham madde ile formüle
      edilmiştir. Bitkisel kapsül (Vcaps®) kullanılarak üretilen bu ürün, vegan ve vejetaryen
      kullanıma uygundur. Kalorisiz içeriği, gluten ve koruyucu içermeyen formülü sayesinde
      güvenle tüketilebilir.`,
    image: "/placeholder.svg?height=400&width=300",
    category: "Özel Takviyeler",
    features: {
      glutenFree: true,
      preservativeFree: true,
      colorantFree: true,
      sugarFree: true,
      vegan: true,
    },
    activeIngredients: [
      "Magnezyum Bisglisinat 200mg",
      "Magnezyum Sitrat 150mg",
      "Magnezyum Malat 100mg",
      "Vitamin B6 (P5P) 5mg",
    ],
    ingredients: [
      "Magnezyum Bisglisinat",
      "Magnezyum Sitrat",
      "Magnezyum Malat",
      "Vitamin B6 (P5P)",
      "Mikrokristal Selüloz",
      "Magnezyum Stearat",
      "Silisyum Dioksit",
    ],
    netQuantity: "60 tablet (30 günlük kullanım)",
    storageConditions:
      "Serin ve kuru yerde, direkt güneş ışığından uzak tutunuz. Oda sıcaklığında (15-25°C) saklayınız.",
    usageRecommendation:
      "Yetişkinler için günde 1 tablet, tercihen yemek zamanı bol su ile alınması tavsiye edilir. Doktorunuzun önerisi olmadıkça günlük dozu aşmayınız.",
    additionalInfo:
      "Bu ürün takviye edici gıda olup, ilaç yerine geçmez. Dengeli ve çeşitli beslenmenin yerine geçmez. Çocukların ulaşamayacağı yerde saklayınız.",
    warnings: [
      "Tavsiye edilen günlük porsiyonu aşmayın.",
      "Takviye edici gıdalar normal beslenmenin yerine geçemez.",
      "Çocukların ulaşamayacağı yerde saklayın.",
      "Hamilelik ve emzirme dönemi ile hastalık veya ilaç kullanılması durumlarında doktorunuza danışın.",
    ],
  },
];
