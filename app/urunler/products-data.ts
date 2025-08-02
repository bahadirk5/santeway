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

export interface SaleLinks {
  trendyol?: string;
  hepsiburada?: string;
  amazon?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string; // Ürün listeleme sayfasındaki açıklama
  longDescription: string; // Ürün detay sayfasındaki uzun açıklama
  image: string;
  category: string;
  // Satış linkleri
  saleLinks?: SaleLinks;
  // Ürün özellikleri
  features?: ProductFeatures;
  // Accordion için alanlar
  activeIngredients?: string[]; // Etken Maddeler sekmesi için
  ingredients?: string; // İçerik Bilgisi sekmesi için (string olarak)
  netQuantity?: string; // Net Miktar
  storageConditions?: string; // Muhafaza Koşulları
  usageRecommendation?: string; // Kullanım Önerisi (eski usage alanının yerini alacak)
  additionalInfo?: string; // Ek Bilgi
  warnings?: string[];
  // Etken madde miktarları
  activeIngredientAmounts?: { [key: string]: string }; // Etken madde miktarları
  // Ürün özellikleri açıklamaları
  productFeatureDescriptions?: string[]; // Özellikler sekmesi için açıklamalar
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
    saleLinks: {
      trendyol: "https://www.trendyol.com/santeway/l-carnitine-carnipure-60-kapsul-p-951850283?boutiqueId=61&merchantId=1137807",
      hepsiburada: "https://www.hepsiburada.com/l-carnitine-carnipure-60-kapsul-pm-HBC000096L99X?magaza=Santeway",
      amazon: "https://www.amazon.com.tr/Santeway-L-Carnitine-Carnipure-60-Kaps%C3%BCl/dp/B0FJM4TWSD/ref=sr_1_1?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1L95BPGLUNHCV&dib=eyJ2IjoiMSJ9.baWslxbCoCUBqBPkhzBr7Q.wxKkX-KDOMIEDDsDriPDm--0XIXJOB1N2yjdN2KS95c&dib_tag=se&keywords=santeway&qid=1754132690&sprefix=santeway%2Caps%2C769&sr=8-1",
    },
    features: {
      glutenFree: true,
      preservativeFree: true,
      colorantFree: true,
      sugarFree: true,
      vegan: true,
    },
    activeIngredients: [
      "L-Karnitin",
    ],
    ingredients: "L-Karnitin, L-Tartarik asit, hidroksipropil metil selüloz (bitkisel kapsül), topaklanma önleyici: magnezyum stearat (yağ asitlerinin magnezyum tuzları).",
    activeIngredientAmounts: {
      "L-Karnitin": "510 mg"
    },
    productFeatureDescriptions: [
      "Her 2 kapsülde 1020 mg L-Carnitine bulunur.",
      "Yüksek biyoyararlanım imkanı sunan Carnipure® marka ham madde kullanılarak formüle edilmiştir.",
      "Ham madde Kosher ve Helal sertifikalarına sahiptir.",
      "Vcaps® marka bitkisel kapsül Kosher ve Helal sertifikalarına sahiptir.",
      "Vegan ve vejetaryen bireylerin kullanımına uygundur.",
      "Kalorisiz içeriğe sahiptir."
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
