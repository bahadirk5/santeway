// Bu dosyayı app/urunler/products-data.ts olarak oluşturun
// veya doğrudan page.tsx içinde kullanabilirsiniz.
// Şimdilik ayrı bir dosyada tutmak daha düzenli olacaktır.

export interface ProductFeatures {
  glutenFree?: boolean // Gluten İçermez
  preservativeFree?: boolean // Koruyucu İçermez
  colorantFree?: boolean // Renklendirici İçermez
  sugarFree?: boolean // Şeker İçermez
  vegan?: boolean // Vegan
}

export interface Product {
  id: number
  slug: string
  name: string
  shortDescription: string // Ürün listeleme sayfasındaki açıklama
  longDescription: string // Ürün detay sayfasındaki uzun açıklama
  image: string
  category: string
  // Ürün özellikleri
  features?: ProductFeatures
  // Accordion için alanlar
  activeIngredients?: string[] // Etken Maddeler sekmesi için
  ingredients?: string[] // İçerik Bilgisi sekmesi için (eski ingredients alanı)
  netQuantity?: string // Net Miktar
  storageConditions?: string // Muhafaza Koşulları
  usageRecommendation?: string // Kullanım Önerisi (eski usage alanının yerini alacak)
  additionalInfo?: string // Ek Bilgi
  warnings?: string[]
}

export const productsData: Product[] = [
  {
    id: 1,
    slug: "magnezyum-kompleksi",
    name: "Magnezyum Kompleksi",
    shortDescription: "Kas ve sinir fonksiyonları için şelatlı magnezyum.",
    longDescription:
      "Santeway Magnezyum Kompleksi, vücudunuzun günlük magnezyum ihtiyacını karşılamak üzere özel olarak formüle edilmiştir. İçeriğindeki şelatlı magnezyum formları (Magnezyum Bisglisinat, Magnezyum Sitrat, Magnezyum Malat) sayesinde yüksek biyoyararlanım sunar. Kas ve sinir fonksiyonlarının normal işleyişine katkıda bulunur, yorgunluk ve bitkinliğin azalmasına yardımcı olur. Aynı zamanda normal enerji oluşum metabolizmasına ve elektrolit dengesine destek olur.",
    image: "/placeholder.svg?height=400&width=300",
    category: "Mineraller",
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
  {
    id: 2,
    slug: "multivitamin",
    name: "Multivitamin",
    shortDescription: "Günlük vitamin ve mineral ihtiyacınız için kapsamlı destek.",
    longDescription:
      "Santeway Multivitamin, modern yaşamın getirdiği zorluklara karşı vücudunuzu desteklemek için tasarlanmış kapsamlı bir formüldür. İçeriğindeki temel vitaminler (A, C, D, E, K ve B kompleks) ve mineraller (Çinko, Selenyum, Demir) ile genel sağlık ve zindeliği hedefler. Bağışıklık sistemini güçlendirmeye, enerji seviyelerini artırmaya ve hücresel sağlığı korumaya yardımcı olur.",
    image: "/placeholder.svg?height=400&width=300",
    category: "Vitaminler",
    features: {
      glutenFree: true,
      preservativeFree: false,
      colorantFree: true,
      sugarFree: true,
      vegan: false, // Jelatin kapsül içerdiği için vegan değil
    },
    activeIngredients: [
      "Vitamin A 800mcg",
      "Vitamin C 80mg",
      "Vitamin D3 20mcg",
      "Vitamin E 12mg",
      "Vitamin K2 75mcg",
      "B1 Tiamin 1.1mg",
      "B2 Riboflavin 1.4mg",
      "B3 Niasin 16mg",
      "B5 Pantotenik Asit 6mg",
      "B6 Piridoksin 1.4mg",
      "B7 Biotin 50mcg",
      "B9 Folat 200mcg",
      "B12 Kobalamin 2.5mcg",
      "Çinko 10mg",
      "Selenyum 55mcg",
      "Demir 14mg",
      "İyot 150mcg",
    ],
    ingredients: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin K2",
      "B Kompleks Vitaminleri",
      "Çinko",
      "Selenyum",
      "Demir",
      "İyot",
      "Mikrokristal Selüloz",
      "Magnezyum Stearat",
      "Silisyum Dioksit",
      "Jelatin Kapsül",
    ],
    netQuantity: "30 kapsül (30 günlük kullanım)",
    storageConditions:
      "Serin ve kuru yerde, direkt güneş ışığından uzak tutunuz. Oda sıcaklığında (15-25°C) saklayınız.",
    usageRecommendation:
      "Yetişkinler için günde 1 kapsül, tercihen sabah kahvaltısından sonra bol su ile alınması tavsiye edilir.",
    additionalInfo:
      "Bu ürün takviye edici gıda olup, ilaç yerine geçmez. Dengeli ve çeşitli beslenmenin yerine geçmez. Çocukların ulaşamayacağı yerde saklayınız.",
  },
  {
    id: 3,
    slug: "glukozamin",
    name: "Glukozamin",
    shortDescription: "Eklem sağlığı ve hareket kabiliyetini destekler.",
    longDescription:
      "Santeway Glukozamin, eklem sağlığını ve hareketliliğini desteklemek için glukozamin sülfat, kondroitin sülfat ve MSM (Metilsülfonilmetan) içeren özel bir formüldür. Eklem kıkırdağının yapı taşlarını sağlayarak eklemlerin esnekliğini ve dayanıklılığını artırmaya yardımcı olur. Özellikle aktif yaşam sürenler ve yaşa bağlı eklem rahatsızlıkları olanlar için idealdir.",
    image: "/placeholder.svg?height=400&width=300",
    category: "Diğer",
    features: {
      glutenFree: true,
      preservativeFree: true,
      colorantFree: true,
      sugarFree: true,
      vegan: false, // Glukozamin genellikle kabuklu deniz ürünlerinden elde edilir
    },
    activeIngredients: [
      "Glukozamin Sülfat 1500mg",
      "Kondroitin Sülfat 800mg",
      "MSM (Metilsülfonilmetan) 500mg",
      "Boswellia Serrata Ekstresi 100mg",
    ],
    ingredients: [
      "Glukozamin Sülfat",
      "Kondroitin Sülfat",
      "MSM",
      "Boswellia Serrata Ekstresi",
      "Mikrokristal Selüloz",
      "Magnezyum Stearat",
    ],
    netQuantity: "60 tablet (30 günlük kullanım)",
    storageConditions:
      "Serin ve kuru yerde, direkt güneş ışığından uzak tutunuz. Oda sıcaklığında (15-25°C) saklayınız.",
    usageRecommendation: "Yetişkinler için günde 2 tablet, yemeklerle birlikte alınması tavsiye edilir.",
    additionalInfo:
      "Bu ürün takviye edici gıda olup, ilaç yerine geçmez. Dengeli ve çeşitli beslenmenin yerine geçmez.",
  },
  {
    id: 4,
    slug: "omega-3",
    name: "Omega-3",
    shortDescription: "Kalp ve beyin sağlığı için yüksek kaliteli balık yağı.",
    longDescription:
      "Santeway Omega-3, kalp, beyin ve göz sağlığını desteklemek için yüksek konsantrasyonlu EPA ve DHA içeren saf balık yağı takviyesidir. Trigliserit formında olması sayesinde yüksek emilim sağlar. Düzenli kullanımda kardiyovasküler sağlığın korunmasına, bilişsel fonksiyonların desteklenmesine ve normal görme yetisinin korunmasına yardımcı olur.",
    image: "/placeholder.svg?height=400&width=300",
    category: "Yağ Asitleri",
    features: {
      glutenFree: true,
      preservativeFree: false, // Doğal tokoferoller antioksidan olarak kullanılıyor
      colorantFree: true,
      sugarFree: true,
      vegan: false, // Balık yağı içerdiği için vegan değil
    },
    activeIngredients: ["EPA (Eikosapentaenoik Asit) 540mg", "DHA (Dokosaheksaenoik Asit) 360mg"],
    ingredients: [
      "Balık Yağı (Hamsi, Sardalya)",
      "EPA",
      "DHA",
      "Doğal Tokoferoller (Antioksidan)",
      "Jelatin Kapsül",
      "Gliserin",
    ],
    netQuantity: "60 yumuşak kapsül (30 günlük kullanım)",
    storageConditions: "Serin ve kuru yerde, direkt güneş ışığından uzak tutunuz. Buzdolabında saklanması önerilir.",
    usageRecommendation: "Yetişkinler için günde 1-2 yumuşak kapsül, yemeklerle birlikte alınması tavsiye edilir.",
    additionalInfo:
      "Bu ürün takviye edici gıda olup, ilaç yerine geçmez. Balık alerjisi olanlar kullanmadan önce doktorlarına danışmalıdır.",
  },
  {
    id: 5,
    slug: "vitamin-d3",
    name: "Vitamin D3",
    shortDescription: "Kemik sağlığı ve bağışıklık sistemi için önemli bir vitamin.",
    longDescription:
      "Santeway Vitamin D3, kemik sağlığının korunması, kalsiyum ve fosforun normal emilimi ve bağışıklık sisteminin normal fonksiyonu için hayati öneme sahip D3 vitamini içerir. Özellikle güneş ışığından yeterince faydalanamayan bireyler için ideal bir takviyedir. Her damlasında yüksek poten D3 vitamini sunar.",
    image: "/placeholder.svg?height=400&width=300",
    category: "Vitaminler",
    features: {
      glutenFree: true,
      preservativeFree: false, // Doğal tokoferoller içeriyor
      colorantFree: true,
      sugarFree: true,
      vegan: true,
    },
    activeIngredients: ["Kolekalsiferol (Vitamin D3) 1000 IU"],
    ingredients: ["Kolekalsiferol (Vitamin D3)", "Zeytinyağı (Taşıyıcı)", "Doğal Tokoferoller"],
    netQuantity: "20ml damla (400 damla - 400 günlük kullanım)",
    storageConditions:
      "Serin ve kuru yerde, direkt güneş ışığından uzak tutunuz. Oda sıcaklığında (15-25°C) saklayınız.",
    usageRecommendation:
      "Yetişkinler için günde 1 damla, doğrudan ağıza damlatılarak veya bir miktar su ile alınması tavsiye edilir.",
    additionalInfo: "Bu ürün takviye edici gıda olup, ilaç yerine geçmez. Yüksek dozda alınmaması önerilir.",
  },
  {
    id: 6,
    slug: "probiyotik",
    name: "Probiyotik",
    shortDescription: "Bağırsak sağlığını destekleyen faydalı bakteri kültürleri.",
    longDescription:
      "Santeway Probiyotik, sindirim sisteminin sağlıklı dengesini desteklemek için çeşitli probiyotik suşları içeren bir formüldür. Bağırsak florasını düzenleyerek sindirimi kolaylaştırmaya, bağışıklık sistemini güçlendirmeye ve genel bağırsak sağlığını iyileştirmeye yardımcı olur. Her kapsülde milyarlarca canlı probiyotik bakteri içerir.",
    image: "/placeholder.svg?height=400&width=300",
    category: "Probiyotikler",
    features: {
      glutenFree: true,
      preservativeFree: true,
      colorantFree: true,
      sugarFree: true,
      vegan: false, // Enterik kaplı kapsül içeriyor
    },
    activeIngredients: [
      "Lactobacillus acidophilus 5 milyar CFU",
      "Bifidobacterium lactis 3 milyar CFU",
      "Lactobacillus rhamnosus 2 milyar CFU",
      "Prebiyotik İnülin 100mg",
    ],
    ingredients: [
      "Lactobacillus acidophilus",
      "Bifidobacterium lactis",
      "Lactobacillus rhamnosus",
      "Prebiyotik Lifler (İnülin)",
      "Mikrokristal Selüloz",
      "Magnezyum Stearat",
      "Enterik Kaplı Kapsül",
    ],
    netQuantity: "30 kapsül (30 günlük kullanım)",
    storageConditions: "Buzdolabında (+2°C ile +8°C arası) saklayınız. Dondurmayınız.",
    usageRecommendation: "Yetişkinler için günde 1 kapsül, aç veya tok karnına alınması tavsiye edilir.",
    additionalInfo:
      "Bu ürün takviye edici gıda olup, ilaç yerine geçmez. Canlı bakteri içerdiği için soğuk zincirde saklanmalıdır.",
  },
]
