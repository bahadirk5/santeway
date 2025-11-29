// Bu dosyayı app/yararli-bilgiler/articles-data.ts olarak oluşturun

export interface ArticleContentBlock {
  type: "paragraph" | "heading" | "list" | "image";
  text?: string;
  level?: number; // for heading (e.g., 2 for h2, 3 for h3)
  items?: string[]; // for list
  src?: string; // for image
  alt?: string; // for image
  bold?: boolean; // for bold text
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
    date: "6 Haziran 2025",
    category: "Amino Asitler",
    image:
      "/l-carnitine.jpg",
    content: [
      {
        type: "paragraph",
        text: "Enerji seviyenizi yükseltmek, yağ yakımını hızlandırmak ve spor performansınızı artırmak istiyorsanız, L-Carnitine hakkında bilgi sahibi olmanızda fayda var. Peki, L-Carnitine nedir? Ne işe yarar? Eksikliğinde ne olur? Bu yazımızda tüm detaylarıyla ele alıyoruz.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Nedir?",
      },
      {
        type: "paragraph",
        text: "L-Carnitine, vücutta doğal olarak üretilen bir amino asit türevidir. Karaciğer ve böbreklerde, lizin ve metiyonin adlı iki amino asitten sentezlenir. Vücuttaki en önemli görevi, yağ asitlerini hücre içindeki enerji üretim merkezlerine (mitokondri) taşıyarak enerjiye dönüştürülmesini sağlamaktır.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Ne İşe Yarar?",
      },
      {
        type: "paragraph",
        text: "L-Carnitine'in temel işlevi, yağ yakımına yardımcı olmak ve enerji üretimini desteklemektir. Bu özelliği sayesinde özellikle sporcular, diyet yapanlar ve enerji düzeyini artırmak isteyenler tarafından sıkça tercih edilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine'in Faydaları Nelerdir?",
      },
      {
        type: "list",
        items: [
          "Yağ Yakımını Destekler: L-Carnitine, vücudun yağları daha verimli yakmasını sağlayarak kilo kontrolüne katkıda bulunur",
          "Enerji Seviyesini Artırır: Hücrelerde enerji üretimini artırarak günlük performansınızı yükseltebilir",
          "Spor Performansını Geliştirir: Egzersiz sırasında yorgunluğu azaltabilir, dayanıklılığı artırabilir",
          "Kas Ağrısını Azaltır: Spor sonrası oluşan kas yorgunluğu ve ağrılarının azalmasına yardımcı olabilir",
          "Kalp ve Damar Sağlığını Destekler: Kalp kası için enerji kaynağı sağlayarak kardiyovasküler sağlığı koruyabilir",
          "Zihinsel Performansa Katkı Sağlar: Özellikle yaşa bağlı bilişsel düşüşü yavaşlatabileceğine dair araştırmalar mevcuttur",
          "Erkeklerde Sperm Kalitesini Artırabilir: Sperm hareketliliğini ve canlılığını artırabilir",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Eksikliğinde Ne Olur?",
      },
      {
        type: "paragraph",
        text: "L-Carnitine eksikliği nadir görülse de, bazı kişilerde veya hastalıklarda ortaya çıkabilir. Eksiklik belirtileri şunlardır:",
      },
      {
        type: "list",
        items: [
          "Kronik yorgunluk ve halsizlik",
          "Kas zayıflığı ve hareket kısıtlılığı",
          "Kilo alma eğilimi",
          "Kalp ritminde düzensizlik",
          "Düşük egzersiz kapasitesi",
        ],
      },
      {
        type: "paragraph",
        text: "Böbrek hastalıkları, bazı genetik rahatsızlıklar ve vegan beslenme tarzı eksikliğe neden olabilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Hangi Besinlerde Bulunur?",
      },
      {
        type: "paragraph",
        text: "L-Carnitine çoğunlukla hayvansal kaynaklı besinlerde bulunur. En zengin kaynaklar şunlardır:",
      },
      {
        type: "list",
        items: [
          "Kırmızı et (özellikle kuzu ve dana eti)",
          "Tavuk ve hindi",
          "Balık çeşitleri",
          "Süt ve süt ürünleri",
          "Yumurta",
        ],
      },
      {
        type: "paragraph",
        text: "Vegan bireyler için doğal kaynaklar sınırlı olduğundan, L-Carnitine takviyeleri tercih edilebilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "L-Carnitine Takviyesi Alınmalı mı?",
      },
      {
        type: "paragraph",
        text: "Eğer dengeli ve hayvansal ağırlıklı besleniyorsanız, L-Carnitine ihtiyacınız genellikle karşılanır. Ancak aşağıdaki durumlarda takviye kullanabilirsiniz:",
      },
      {
        type: "list",
        items: [
          "Yoğun spor yapıyorsanız",
          "Kilo verme sürecindeyseniz",
          "Vegan besleniyorsanız",
          "Enerji düşüklüğü yaşıyorsanız",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "L-Carnitine, yağların enerjiye dönüşmesini sağlayarak hem fiziksel hem zihinsel performansı destekleyen önemli bir bileşiktir. Doğru şekilde ve bilinçli kullanıldığında, sağlığınıza birçok yönden katkı sunabilir. Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
  {
    id: 2,
    title: "Bağışıklık Sistemi Nedir, Nasıl Güçlendirilir?",
    excerpt:
      "Bağışıklık sistemi nedir? Bağışıklık sistemi neden zayıflar? Bağışıklık sistemi nasıl güçlendirilir? Bağışıklık sistemi hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "17 Haziran 2025",
    category: "Bağışıklık",
    image:
      "/immune-system.png",
    content: [
      {
        type: "paragraph",
        text: "Sağlıklı bir yaşamın temel taşlarından biri güçlü bir bağışıklık sistemidir. Vücudumuzu hastalıklara karşı koruyan bu karmaşık sistem, dış tehditlere karşı savunma hattı oluşturur. Peki bağışıklık sistemi tam olarak nedir, ne işe yarar, neden zayıflar ve nasıl güçlendirilir? İşte tüm detaylarıyla bağışıklık sistemi hakkında bilmeniz gerekenler:",
      },
      {
        type: "heading",
        level: 2,
        text: "Bağışıklık Sistemi Nedir?",
      },
      {
        type: "paragraph",
        text: "Bağışıklık sistemi, vücudumuzu virüsler, bakteriler, mantarlar, parazitler gibi zararlı mikroorganizmalara karşı koruyan savunma sistemidir. Lenf bezleri, akyuvarlar (beyaz kan hücreleri), dalak, kemik iliği ve bademcikler gibi organ ve hücrelerin bir araya gelerek oluşturduğu bu sistem, bizi hastalıklara karşı koruyan bir kalkandır.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bağışıklık Sistemi Ne İşe Yarar?",
      },
      {
        type: "paragraph",
        text: "Bağışıklık sisteminin temel görevi, vücudu tanımadığı yabancı maddelere karşı korumaktır. Bunlar arasında mikroplar, toksinler ve mutasyona uğramış hücreler yer alır. Bağışıklık sistemi şu işlevleri yerine getirir:",
      },
      {
        type: "list",
        items: [
          "Zararlı mikroorganizmaları tanır ve etkisiz hale getirir",
          "Vücudu daha önce karşılaştığı patojenlere karşı 'hafıza' oluşturarak ikinci karşılaşmada daha hızlı tepki verir",
          "Hücrelerin sağlıklı çalışmasını destekler",
          "Vücuttaki iltihaplanmalara karşı mücadele eder",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Bağışıklık Sistemi Neden Zayıflar?",
      },
      {
        type: "paragraph",
        text: "Bağışıklık sisteminin zayıflaması, vücudun hastalıklara daha açık hale gelmesine yol açar. İşte bağışıklığı zayıflatan başlıca faktörler:",
      },
      {
        type: "list",
        items: [
          "Dengesiz ve yetersiz beslenme",
          "Yetersiz uyku ve kronik stres",
          "Sigara ve alkol kullanımı",
          "Hareketsiz yaşam tarzı",
          "Çevresel toksinlere maruz kalmak",
          "Bazı kronik hastalıklar (şeker hastalığı, böbrek yetmezliği vb.)",
          "Vitamin ve mineral eksiklikleri (özellikle D vitamini, C vitamini, çinko gibi)",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Bağışıklık Sistemi Nasıl Güçlendirilir?",
      },
      {
        type: "paragraph",
        text: "Bağışıklık sistemini güçlendirmek, sadece hastalıklardan korunmakla kalmaz; aynı zamanda genel yaşam kalitesini de artırır. İşte bağışıklık sisteminizi desteklemek için uygulayabileceğiniz bazı etkili yöntemler:",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Dengeli Beslenin",
      },
      {
        type: "paragraph",
        text: "Bol sebze, meyve, tam tahıllar, sağlıklı yağlar ve protein kaynaklarını içeren bir diyet bağışıklığı destekler. Özellikle C vitamini, D vitamini, çinko ve antioksidanlar bakımından zengin besinler tercih edilmelidir.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Yeterli Uyuyun",
      },
      {
        type: "paragraph",
        text: "Uyku, vücudun kendini yenilediği süreçtir. Günde 7-9 saat uyumak, bağışıklık hücrelerinin aktif kalmasına yardımcı olur.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Stresi Azaltın",
      },
      {
        type: "paragraph",
        text: "Kronik stres, bağışıklık sistemi üzerinde baskı oluşturarak vücudu hastalıklara açık hale getirir. Meditasyon, nefes egzersizleri, yürüyüş gibi aktiviteler stresle başa çıkmaya yardımcı olabilir.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Düzenli Egzersiz Yapın",
      },
      {
        type: "paragraph",
        text: "Hafif ve orta şiddette yapılan egzersizler, bağışıklık hücrelerinin dolaşımını artırır ve vücudu koruyucu hale getirir.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Gıda Takviyesi Kullanın",
      },
      {
        type: "paragraph",
        text: "Besinlerden yeterince vitamin ve mineral alınamadığında, bağışıklık sistemini desteklemek amacıyla gıda takviyeleri devreye girer. Özellikle:",
      },
      {
        type: "list",
        items: [
          "C Vitamini: Antioksidan özelliğiyle bağışıklığı destekler",
          "D Vitamini: Enfeksiyonlara karşı savunma gücünü artırır",
          "Çinko: Hücresel bağışıklık yanıtı için kritik bir mineraldir",
          "Probiyotikler: Bağırsak sağlığı yoluyla bağışıklığı destekler",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "Bağışıklık sistemi, bireyin sağlığını korumakla görevli yaşamsal bir savunma mekanizmasıdır. Bu sistemin güçlü kalabilmesi, büyük ölçüde bireyin yaşam tarzına ve beslenme alışkanlıklarına bağlıdır. Özellikle vitamin ve mineral desteği, bağışıklık hücrelerinin etkinliğini artırmada önemli bir rol oynar. Bu bağlamda, bilimsel olarak formüle edilmiş gıda takviyeleri ile bağışıklık sistemine düzenli destek sağlamak, hem koruyucu sağlık açısından hem de yaşam kalitesini yükseltmek adına etkili bir yöntemdir. Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
  {
    id: 3,
    title: "Takviye Edici Gıdalar Ne İşe Yarar?",
    excerpt:
      "Takviye edici gıdalar ne işe yarar? Nasıl ve ne zaman kullanılır? Takviye edici gıdalar hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "24 Haziran 2025",
    category: "Beslenme",
    image:
      "/supplements.png",
    content: [
      {
        type: "paragraph",
        text: "Modern yaşamın getirdiği yoğun tempo, stres, dengesiz beslenme ve çevresel faktörler, vücudumuzun ihtiyaç duyduğu besin öğelerini yeterince alamamasına neden olabilir. İşte bu noktada takviye edici gıdalar devreye girer. Peki, takviye edici gıdalar nedir, ne işe yarar ve nasıl kullanılmalıdır? Gelin, birlikte inceleyelim.",
      },
      {
        type: "heading",
        level: 2,
        text: "Takviye Edici Gıda Nedir?",
      },
      {
        type: "paragraph",
        text: "Takviye edici gıdalar; vitamin, mineral, amino asit, lif, bitkisel ekstraktlar ve diğer besin öğelerini içeren ürünlerdir. Tablet, kapsül, toz veya sıvı formda olabilirler. İlaç değildirler; hastalıkları tedavi etmezler. Amaçları, günlük beslenmeyi desteklemek ve eksik kalan besin öğelerini tamamlamaktır.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ne İşe Yarar?",
      },
      {
        type: "paragraph",
        text: "Takviye edici gıdalar, vücudun genel sağlığını desteklemek için kullanılır. Başlıca faydaları şunlardır:",
      },
      {
        type: "list",
        items: [
          "Bağışıklık sistemini güçlendirmek",
          "Enerji ve dayanıklılığı artırmak",
          "Cilt, saç ve tırnak sağlığını desteklemek",
          "Kemik ve kas gelişimini desteklemek",
          "Sindirim sistemine yardımcı olmak",
          "Zihinsel odaklanma ve stres yönetimini desteklemek",
        ],
      },
      {
        type: "paragraph",
        text: "Örneğin, D vitamini eksikliği olan bir kişi için D vitamini takviyesi; yoğun tempoda çalışan biri için B kompleks vitaminleri ya da magnezyum takviyesi oldukça faydalı olabilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Nasıl Kullanılır?",
      },
      {
        type: "paragraph",
        text: "Her takviyenin kullanım şekli farklı olabilir. Bu nedenle ürün etiketinde belirtilen dozaj talimatlarına uyulması çok önemlidir. Genel olarak şu şekilde kullanılabilir:",
      },
      {
        type: "list",
        items: [
          "Su ile birlikte alınır",
          "Bazı takviyeler tok, bazıları aç karnına alınmalıdır",
          "Günde 1 veya 2 defa kullanımı yaygındır",
          "Hamilelik, emzirme, kronik hastalık veya ilaç kullanımı varsa mutlaka doktora danışılmalıdır",
        ],
      },
      {
        type: "paragraph",
        text: "Unutmayın, 'daha fazla' kullanmak, 'daha etkili' anlamına gelmez. Aksine, bazı vitamin ve minerallerin fazla alınması vücuda zarar verebilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ne Zaman Kullanılmalı?",
      },
      {
        type: "paragraph",
        text: "Takviye edici gıdalar genellikle şu durumlarda tercih edilir:",
      },
      {
        type: "list",
        items: [
          "Mevsim geçişlerinde (özellikle sonbahar-kış aylarında)",
          "Yoğun iş ve stres dönemlerinde",
          "Dengesiz ve yetersiz beslenme durumlarında",
          "Spor yapanların performans desteği için",
          "Yaşlılık döneminde artan besin ihtiyacını karşılamak için",
        ],
      },
      {
        type: "paragraph",
        text: "Öncelikle bir sağlık uzmanına danışarak, hangi takviyeye ihtiyaç duyduğunuzu öğrenmek en doğrusudur.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "Takviye edici gıdalar, sağlıklı bir yaşam tarzının tamamlayıcısı olabilir. Ancak hiçbir takviye, dengeli ve çeşitli bir beslenmenin yerini tutmaz. Takviyeleri bilinçli, doğru zamanda ve doğru dozda kullanmak, hem sağlığınızı korumanıza hem de yaşam kalitenizi artırmanıza yardımcı olur. Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
  {
    id: 4,
    title: "Dengeli Beslenme Nedir? Neden Önemlidir?",
    excerpt:
      "Dengeli beslenme nedir? Neden önemlidir? Dengeli bir öğün nasıl olmalıdır? Dengeli beslenme hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "3 Temmuz 2025",
    category: "Beslenme",
    image:
      "/balanced-nutrition.png",
    content: [
      {
        type: "paragraph",
        text: "Günümüzde sağlıklı yaşam arayışının artmasıyla birlikte dengeli beslenme, bireylerin hem hastalıkları önleme hem de yaşam kalitesini artırma amacıyla sıklıkla başvurduğu bir yaklaşım haline gelmiştir. Peki, dengeli beslenme nedir ve neden bu kadar önemlidir? Bu yazıda bilimsel temellere dayanan bilgilerle, dengeli beslenmenin ne olduğunu ve günlük yaşamda nasıl uygulanabileceğini ele alıyoruz.",
      },
      {
        type: "heading",
        level: 2,
        text: "Dengeli Beslenme Nedir?",
      },
      {
        type: "paragraph",
        text: "Dengeli beslenme, Dünya Sağlık Örgütü (WHO) ve Avrupa Gıda Güvenliği Otoritesi (EFSA) gibi kuruluşlara göre; vücudun büyüme, gelişme, yenilenme ve sağlıklı işleyişi için gerekli olan makro (karbonhidrat, protein, yağ) ve mikro (vitamin, mineral) besin öğelerinin doğru oranlarda ve yeterli miktarda alınmasıdır.",
      },
      {
        type: "paragraph",
        text: "Bu yaklaşım, her yaş grubunda metabolik ihtiyaçlara uygun enerji alımını desteklerken; kronik hastalıkların (obezite, diyabet, kalp hastalıkları) riskini azaltmayı hedefler.",
      },
      {
        type: "heading",
        level: 2,
        text: "Neden Önemlidir?",
      },
      {
        type: "paragraph",
        text: "Dengeli bir beslenme düzeni:",
      },
      {
        type: "list",
        items: [
          "Enerji dengesini sağlar: Hücrelerin enerji üretimi için temel kaynakları sunar",
          "Bağışıklık sistemini destekler: Özellikle A, C, D vitaminleri ve çinko gibi mikro besinler bağışıklık hücrelerinin etkinliğinde önemli rol oynar",
          "Metabolik sağlığı korur: Glukoz toleransı, insülin hassasiyeti ve lipid profili gibi parametrelerde denge sağlar",
          "Hücre yenilenmesini destekler: Proteinler, amino asitler ve antioksidanlar hücresel onarım süreçlerini kolaylaştırır",
          "Zihinsel performansı iyileştirir: Omega-3 yağ asitleri ve B grubu vitaminler beyin fonksiyonlarını doğrudan etkiler",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Dengeli Bir Öğün Nasıl Olmalı?",
      },
      {
        type: "paragraph",
        text: "Dengeli bir öğün, vücudun temel işlevlerini sürdürebilmesi için gerekli tüm besin ögelerini içermelidir. Bu besin grupları arasında kompleks karbonhidratlar, kaliteli proteinler, sağlıklı yağlar, vitamin ve mineral yönünden zengin sebze ve meyveler ile yeterli sıvı alımı yer alır.",
      },
      {
        type: "heading",
        level: 3,
        text: "Kompleks Karbonhidratlar",
      },
      {
        type: "paragraph",
        text: "İlk olarak, enerji kaynağı olarak öğünlerde mutlaka kompleks karbonhidratlara yer verilmelidir. Tam tahıllar, bulgur, yulaf, kinoa gibi besinler düşük glisemik indekse sahip oldukları için kan şekeri dengesini korur ve uzun süreli tokluk sağlar. Bu da enerji seviyelerinin gün boyunca daha sabit kalmasına yardımcı olur.",
      },
      {
        type: "heading",
        level: 3,
        text: "Kaliteli Proteinler",
      },
      {
        type: "paragraph",
        text: "Öğünün bir diğer temel bileşeni ise protein kaynaklarıdır. Vücut dokularının onarımı, kas gelişimi ve bağışıklık sistemi için protein alımı büyük önem taşır. Yumurta, balık, tavuk gibi hayvansal kaynaklar ile mercimek, nohut, fasulye gibi bitkisel proteinler dengeli bir şekilde tüketilmelidir. Kaliteli protein kaynaklarının, özellikle amino asit profili açısından zengin olması tercih edilmelidir.",
      },
      {
        type: "heading",
        level: 3,
        text: "Sağlıklı Yağlar",
      },
      {
        type: "paragraph",
        text: "Sağlıklı yağlar da öğünlerde mutlaka yer almalıdır. Zeytinyağı, avokado, ceviz, badem gibi besinler tekli ve çoklu doymamış yağ asitleri içerir. Bu yağlar, hücre zarının yapısını korur, yağda çözünen vitaminlerin emilimini destekler ve hormon üretiminde görev alır. Aynı zamanda antiinflamatuvar etkileriyle bilinir.",
      },
      {
        type: "heading",
        level: 3,
        text: "Sebze ve Meyveler",
      },
      {
        type: "paragraph",
        text: "Sebze ve meyveler, vitamin, mineral ve antioksidan içerikleriyle dengeli beslenmenin olmazsa olmazlarındandır. Farklı renklerde sebze ve meyve tüketmek, fitokimyasal çeşitliliği artırarak hücreleri oksidatif strese karşı korur. Aynı zamanda lif içerikleri sayesinde sindirim sistemi sağlığını da destekler.",
      },
      {
        type: "heading",
        level: 3,
        text: "Yeterli Sıvı Alımı",
      },
      {
        type: "paragraph",
        text: "Son olarak, yeterli miktarda sıvı tüketimi, yani özellikle su içmek, tüm bu besin öğelerinin metabolize edilmesi ve vücut fonksiyonlarının sağlıklı bir şekilde sürdürülebilmesi için gereklidir. Günde ortalama 1,5–2,5 litre arası su tüketimi, bireyin yaşına, cinsiyetine, aktivite düzeyine ve çevresel koşullara bağlı olarak değişebilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Günlük Hayatımıza Uygulamak İçin 6 Bilimsel Öneri",
      },
      {
        type: "list",
        items: [
          "Renkli ve çeşitli beslenin: Yapılan çalışmalar, renk çeşitliliğinin farklı antioksidan ve fitokimyasal bileşenleri vücuda kazandırdığını göstermektedir",
          "İşlenmiş ürünleri sınırlayın: Rafine şeker ve trans yağlar içeren gıdalar, sistemik inflamasyonu tetikleyerek kronik hastalık riskini artırır",
          "Ara öğünleri atlamayın ancak planlayın: Düşük glisemik indeksli, yüksek lifli ve protein içeren ara öğünler kan şekeri dengesini korur",
          "Su tüketimini gün içine eşit yayın: Hafif dehidrasyon bile bilişsel performansta azalma ve yorgunluk hissiyle ilişkilendirilmiştir",
          "Haftalık menü planı yapın: Bu yöntem hem zamandan tasarruf sağlar hem de dengesiz veya aceleci besin tercihlerini azaltır",
          "Eksiklikleri izleyin, gerektiğinde destek alın: Kan tahlilleriyle saptanan vitamin ve mineral eksiklikleri için hekim kontrolünde uygun takviyeler değerlendirilebilir",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Gıda Takviyesi ile Dengeli Beslenme Birlikte Olabilir mi?",
      },
      {
        type: "paragraph",
        text: "Bilimsel veriler, bazı besin ögelerinin günlük diyetten yeterli düzeyde alınamaması durumunda, gıda takviyelerinin destekleyici olarak kullanılabileceğini göstermektedir. Özellikle:",
      },
      {
        type: "list",
        items: [
          "B12 vitamini, hayvansal ürün tüketmeyen bireylerde eksik olabilir",
          "D vitamini, yeterli güneş ışığına maruz kalmayan bireylerde düşüktür",
          "Omega-3 yağ asitleri, düzenli balık tüketmeyen bireylerde yetersiz alınabilir",
        ],
      },
      {
        type: "paragraph",
        text: "Bu gibi durumlarda, hekim ya da diyetisyen gözetiminde takviye kullanımı, beslenme planının bir parçası olarak değerlendirilebilir. Ancak, unutulmamalıdır ki takviyeler, yetersiz veya dengesiz bir beslenmenin yerini tutmaz; sadece eksiklikleri tamamlar.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "Dengeli beslenme, bireyin yaşam boyu fiziksel, zihinsel ve metabolik sağlığını koruyabilmesi için temel bir gerekliliktir. Bilimsel verilerle desteklenen bu yaklaşım, sürdürülebilir alışkanlıklarla günlük yaşama entegre edilebilir. Doğru besin seçimleri, yeterli su tüketimi ve gerektiğinde bilinçli takviye kullanımı ile sağlıklı yaşam sadece bir hedef değil, sürdürülebilir bir yaşam tarzı haline gelebilir.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
  {
    id: 5,
    title: "Yorgunluk Nedir? Nedenleri Neler Olabilir?",
    excerpt:
      "Yorgunluk Nedir? Nedenleri neler olabilir? Yorgunlukla nasıl baş edilir? Yorgunluk hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "12 Temmuz 2025",
    category: "Sağlık",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+fatigue+texture",
    content: [
      {
        type: "paragraph",
        text: "Gün içinde kendinizi sürekli bitkin, enerjisiz veya halsiz mi hissediyorsunuz? Uyandığınızda dinlenmiş olmak yerine hâlâ yorgun musunuz? Bu durum, çağımızın en yaygın şikayetlerinden biri olan yorgunluk olabilir. Peki, yorgunluk nedir ve neden ortaya çıkar? Gelin, birlikte inceleyelim.",
      },
      {
        type: "heading",
        level: 2,
        text: "Yorgunluk Nedir?",
      },
      {
        type: "paragraph",
        text: "Yorgunluk; fiziksel ya da zihinsel olarak kendini sürekli tükenmiş hissetme durumudur. Kimi zaman geçici olabilirken, bazı durumlarda uzun süreli hale gelebilir ve yaşam kalitesini ciddi şekilde etkileyebilir.",
      },
      {
        type: "paragraph",
        text: "Yorgunluk bir hastalık değil, bir belirtidir. Altta yatan nedenin bulunması, yorgunlukla etkili şekilde başa çıkabilmenin ilk adımıdır.",
      },
      {
        type: "heading",
        level: 2,
        text: "Yorgunluğun Yaygın Nedenleri Nelerdir?",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Uyku Kalitesizliği",
      },
      {
        type: "paragraph",
        text: "Yeterli uyku almak kadar kesintisiz ve derin uyku da önemlidir. Gece boyunca sık sık uyanmak, geç saatlere kadar ekran başında kalmak ya da düzensiz uyku saatleri yorgunluğa neden olabilir.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Beslenme Eksiklikleri",
      },
      {
        type: "paragraph",
        text: "Yeterli ve dengeli beslenmemek, enerji üretimi için gerekli olan vitamin ve minerallerin eksikliğine yol açar. Özellikle:",
      },
      {
        type: "list",
        items: [
          "B12 vitamini",
          "Demir",
          "Magnezyum",
          "D vitamini eksikliği yorgunluğun başlıca nedenlerindendir",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "3. Stres ve Ruhsal Yük",
      },
      {
        type: "paragraph",
        text: "Yoğun stres, anksiyete ve duygusal baskılar hem zihinsel hem de fiziksel olarak vücudu yorar. Uzun süreli stres hali vücutta kortizol seviyelerini değiştirerek enerji dengesini bozar.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Yetersiz Su Tüketimi",
      },
      {
        type: "paragraph",
        text: "Dehidrasyon (susuz kalma), vücutta birçok sistemin yavaşlamasına neden olur. Su eksikliği kas performansını düşürür, baş ağrısı ve halsizlik yapar.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Tiroid Problemleri",
      },
      {
        type: "paragraph",
        text: "Tiroid bezinin az çalışması (hipotiroidi), metabolizmayı yavaşlatarak yorgunluğa sebep olur. Bu durum genellikle halsizlik, kilo alma ve soğuğa karşı hassasiyetle birlikte görülür.",
      },
      {
        type: "heading",
        level: 3,
        text: "6. Kronik Hastalıklar ve İlaç Kullanımı",
      },
      {
        type: "paragraph",
        text: "Bazı hastalıklar (örneğin: diyabet, anemi, enfeksiyonlar) veya düzenli kullanılan ilaçlar da enerji seviyesini düşürebilir.",
      },
      {
        type: "heading",
        level: 3,
        text: "7. Hareketsizlik",
      },
      {
        type: "paragraph",
        text: "Uzun süreli oturarak çalışma, egzersiz eksikliği ve düşük fiziksel aktivite kasları zayıflatır, kan dolaşımını yavaşlatır ve daha kolay yorulmaya neden olur.",
      },
      {
        type: "heading",
        level: 2,
        text: "Yorgunlukla Nasıl Baş Edilir?",
      },
      {
        type: "list",
        items: [
          "Uyku düzeninizi oluşturun: Aynı saatlerde yatıp kalkmaya özen gösterin",
          "Dengeli beslenin: Vitamin ve mineral açısından zengin besinlere öncelik verin",
          "Hareket edin: Gün içinde kısa yürüyüşler veya hafif egzersizlerle enerjinizi artırabilirsiniz",
          "Su tüketimini ihmal etmeyin: Günde en az 1.5-2 litre su içmeye özen gösterin",
          "Takviye desteği alın: Doktorunuza danışarak B12, demir, magnezyum gibi enerji metabolizmasında önemli rolü olan destekleri kullanabilirsiniz",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "Yorgunluk; yaşam tarzı değişiklikleri, doğru beslenme ve gerektiğinde takviye desteğiyle büyük oranda kontrol altına alınabilir. Sürekli yorgunluk hissi yaşıyorsanız, bunun vücudunuzun size gönderdiği bir uyarı olabileceğini unutmayın.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
  {
    id: 6,
    title: "Nefes Egzersizi Nasıl Yapılır? Doğru Nefes Almak Neden Önemlidir?",
    excerpt:
      "Nefes Egzersizi Nasıl Yapılır? Doğru Nefes Almak Neden Önemlidir? Kimler Nefes Egzersizi Yapabilir? Nefes Egzersizi hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "16 Temmuz 2025",
    category: "Sağlık",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+breathing+exercise+texture",
    content: [
      {
        type: "paragraph",
        text: `Nefes almak hayattaki en temel refleksimiz olsa da, çoğumuz doğru nefes alma alışkanlığına sahip
          değiliz. Oysa ki nefes egzersizleri, hem bedensel hem zihinsel sağlığımızı destekleyen, son derece
          etkili bir yöntemdir. Bu yazımızda, “nefes egzersizi nedir?”, “nefes egzersizi nasıl yapılır?”, “doğru
          nefes almanın faydaları nelerdir?” ve “kolay nefes teknikleri nelerdir?” gibi soruların yanıtlarını
          bulabilirsiniz.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Nefes Egzersizi Nedir?",
      },
      {
        type: "paragraph",
        text: "Nefes egzersizi, bilinçli ve kontrollü şekilde nefes alıp verme pratiğidir. Vücudu ve zihni rahatlatır, oksijen seviyesini dengeler ve sinir sistemini dengeler. Sağlıklı yaşam rutininin bir parçası olarak her yaş grubundan birey rahatlıkla uygulayabilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Doğru Nefes Almanın Faydaları Nelerdir?",
      },
      {
        type: "list",
        items: [
          "Stres ve anksiyeteyi azaltır: Derin ve bilinçli nefesler, vücudun gevşemesine yardımcı olur. Özellikle yoğun iş temposunda stres yönetimi için oldukça etkilidir.",
          "Oksijen alımını artırır: Doğru nefes, hücrelerin daha fazla oksijenle beslenmesini sağlar. Bu da enerji seviyesini yükseltir.",
          "Zihinsel odaklanmayı güçlendirir: Düzenli nefes çalışmaları, dikkat dağınıklığını azaltır, konsantrasyonu artırır.",
          "Bağışıklık sistemini destekler: Vücudun genel dengesini sağlamak için oksijenin yeterli seviyede alınması hayati önem taşır.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Nefes Egzersizi Nasıl Yapılır?",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Diyafram (Karın) Nefesi",
      },
      {
        type: "paragraph",
        text: "Bu egzersiz, en temel ve etkili doğru nefes alma yöntemidir.",
      },
      {
        type: "list",
        items: [
          "Rahat bir pozisyonda oturun veya uzanın",
          "Bir elinizi göğsünüze, diğerini karnınıza yerleştirin",
          "Burnunuzdan derin nefes alın, yalnızca karnınızdaki elin hareket ettiğinden emin olun",
          "Ağzınızdan yavaşça nefes verin",
          "Bu egzersizi günde 5–10 dakika uygulayabilirsiniz",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "2. 4-7-8 Nefes Tekniği",
      },
      {
        type: "paragraph",
        text: "Özellikle uyku öncesi rahatlamak için önerilir.",
      },
      {
        type: "list",
        items: [
          "4 saniye nefes al",
          "7 saniye boyunca tut",
          "8 saniyede yavaşça ver",
          "4 tur tekrarla",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "3. Box Breathing (Kutulu Nefes)",
      },
      {
        type: "paragraph",
        text: "Zihni sakinleştiren ve odaklanmayı artıran etkili bir tekniktir.",
      },
      {
        type: "list",
        items: [
          "4 saniye nefes al",
          "4 saniye tut",
          "4 saniyede nefes ver",
          "4 saniye bekle",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Kimler Nefes Egzersizi Yapabilir?",
      },
      {
        type: "paragraph",
        text: "Her yaştan birey, herhangi bir ekipmana ihtiyaç duymadan nefes egzersizi yapabilir. Özellikle aşağıdaki gruplar için önerilir:",
      },
      {
        type: "list",
        items: [
          "Yoğun tempoda çalışanlar",
          "Sınav veya proje stresi yaşayan öğrenciler",
          "Uyku problemi yaşayan bireyler",
          "Spor yapanlar veya meditasyonla ilgilenenler",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Nefes Egzersizi Ne Zaman Yapılmalı?",
      },
      {
        type: "list",
        items: [
          "Sabah güne zinde başlamak için",
          "Gün ortasında stres anında",
          "Spor öncesi veya sonrası",
          "Uyumadan önce gevşemek için",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "Doğru nefes almak, sağlıklı bir yaşamın temel taşlarından biridir. Günlük rutininize sadece birkaç dakikalık nefes egzersizi ekleyerek, zihinsel ve bedensel olarak fark edilir bir rahatlama sağlayabilirsiniz. Unutmayın; bazen sağlık, sadece bir nefes uzaklıktadır.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
  {
    id: 7,
    title:
      "Güneşin Cildimiz Üzerindeki Etkileri Nelerdir? Güneşin Yararlı ve Zararlı Yönleri Nelerdir?",
    excerpt:
      "Güneşin Cildimiz Üzerindeki Etkileri Nelerdir? Güneşin cilt üzerindeki etkileri hakkında daha detaylı bilgi edinmek için sayfamızı ziyaret edebilirsiniz.",
    date: "29 Temmuz 2025",
    category: "Sağlık",
    image:
      "/placeholder.svg?height=128&width=200&query=abstract+sun+skin+protection+texture",
    content: [
      {
        type: "paragraph",
        text: `Güneş, hayatımızın vazgeçilmez bir kaynağıdır. Hem ruh halimizi hem de fiziksel sağlığımızı
        olumlu etkiler. Ancak cildimiz üzerinde hem yararlı hem de zararlı etkileri bulunmaktadır. Bu
        yazıda, “Güneşin cildimiz üzerindeki etkileri nelerdir?”, “Güneşin yararlı yönleri nelerdir?”,
        “Güneşin zararlı ışınları nelerdir?” ve “Zararlı güneş ışınları hangi sorunlara sebep olur?” gibi
        merak edilen önemli soruları ele alıyoruz.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Güneşin Cildimiz Üzerindeki Etkileri Nelerdir?",
      },
      {
        type: "paragraph",
        text: "Güneş, hayatımızın vazgeçilmez bir parçasıdır. Doğrudan enerjisini bize sunarak birçok fayda sağladığı gibi, cildimiz üzerinde hem olumlu hem de olumsuz etkiler yaratır. Cildimiz, güneş ışınlarına maruz kaldığında, ultraviyole (UV) ışınları sayesinde D vitamini üretir; ancak aynı zamanda UV ışınlarının zararlarına da açıktır.",
      },
      {
        type: "paragraph",
        text: "Güneşin cildimiz üzerindeki etkileri, maruz kalma süresi, kullanılan koruyucu önlemler ve cilt tipine bağlı olarak değişir. Örneğin, açık tenli kişiler güneşe karşı daha hassastır ve daha kolay zarar görebilirler.",
      },
      {
        type: "heading",
        level: 2,
        text: "Güneşin Yararlı Yönleri Nelerdir?",
      },
      {
        type: "paragraph",
        text: "Güneşin cildimiz üzerindeki en bilinen faydası, D vitamini sentezine olan katkısıdır. D vitamini, kemik sağlığı için gerekli kalsiyum emilimini artırır ve bağışıklık sisteminin güçlenmesinde önemli rol oynar.",
      },
      {
        type: "list",
        items: [
          "D Vitamini Üretimi: Kemik sağlığı için gerekli kalsiyum emilimini artırır ve bağışıklık sistemini güçlendirir",
          "Ruh Sağlığı: Serotonin hormonunun üretimini artırarak mutluluk hissi ve zihinsel dinginlik sağlar",
          "Cilt Hastalıkları Tedavisi: Sedef hastalığı ve egzama gibi rahatsızlıklarda cilt hücrelerinin yenilenmesine destek olur",
          "Kalp Sağlığı: Kan basıncını düzenleyen nitrik oksit üretimini tetikleyerek kalp sağlığını destekler",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Güneşin Zararlı Işınları Nelerdir?",
      },
      {
        type: "paragraph",
        text: "Güneşin yaydığı ultraviyole (UV) ışınları cildimiz için hem faydalı hem de zararlı olabilir. UV ışınları üç türde incelenir:",
      },
      {
        type: "list",
        items: [
          "UVA: Dalga boyu uzun olan UVA ışınları cildin derin tabakalarına kadar ulaşabilir. Cilt yaşlanmasına, elastikiyet kaybına ve kırışıklıkların oluşmasına sebep olur.",
          "UVB: Dalga boyu daha kısa olan UVB ışınları, cildin üst tabakasını etkiler ve güneş yanıklarının temel sebebidir. DNA hasarına yol açabilir.",
          "UVC: Normal şartlarda Dünya yüzeyine ulaşmayan UVC ışınları, ozon tabakası tarafından tutulur. Yapay kaynaklarda bulunan UVC ışınları ciddi hasarlara neden olabilir.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Zararlı Güneş Işınları Hangi Sorunlara Sebep Olur?",
      },
      {
        type: "list",
        items: [
          "Güneş Yanıkları: UVB ışınlarının en belirgin etkisi olan güneş yanıkları, cildin kızarması, ağrıması ve kabarması ile kendini gösterir",
          "Erken Cilt Yaşlanması: UVA ışınları, ciltteki kolajen ve elastin liflerini yıkarak cildin esnekliğini kaybetmesine sebep olur",
          "Cilt Kanseri: UV ışınları cilt hücrelerinin DNA'sına zarar verir. Bu zarar melanom ve diğer cilt kanserlerinin oluşmasına zemin hazırlar",
          "Hiperpigmentasyon ve Güneş Lekeleri: Güneş ışığı melanin üretimini artırarak ciltte lekelenmeler ve renk düzensizliklerine yol açar",
          "Bağışıklık Sistemi Zayıflaması: Uzun süreli UV maruziyeti, ciltteki bağışıklık hücrelerinin işlevini azaltır",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Güneşten Korunmak İçin Alınabilecek Önlemler Nelerdir?",
      },
      {
        type: "list",
        items: [
          "Güneş Koruyucu Krem Kullanımı: En az SPF 30 içeren, UVA ve UVB koruması sağlayan güneş kremlerini her gün kullanın",
          "Doğrudan Güneşten Kaçınma: Özellikle 10:00 – 16:00 saatleri arasında gölgede kalın",
          "Koruyucu Giysiler: Geniş kenarlı şapka, UV korumalı gözlük ve hafif, uzun kollu giysiler kullanın",
          "Cilt Bakımı: Güneş sonrası nemlendirici ve yatıştırıcı ürünler kullanarak cildin onarımını destekleyin",
          "Düzenli Cilt Kontrolü: Ciltte oluşan değişiklikleri düzenli olarak kontrol edin, şüpheli durumlarda dermatoloğa başvurun",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Vitamin ve Takviyelerle Güneşin Etkilerine Destek",
      },
      {
        type: "paragraph",
        text: "Güneşin zararlı etkilerine karşı cildinizi sadece dışarıdan korumak yetmeyebilir. İçten destek için antioksidan vitaminler (C vitamini, E vitamini), omega-3 yağ asitleri ve diğer besin takviyeleri cilt sağlığını koruyabilir. Bu takviyeler, serbest radikallerin yol açtığı hücre hasarını azaltır ve cildin yenilenme süreçlerini destekler.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "Güneş, doğru dozda ve bilinçli kullanıldığında sağlığımız için son derece faydalıdır. Ancak aşırı ve korunmasız güneş maruziyeti, cilt sağlığını ciddi şekilde tehdit eder. Bu nedenle, güneşten koruyucu önlemleri almak, cildinizi düzenli olarak nemlendirmek ve gerekirse takviye ürünlerle desteklemek uzun vadeli sağlıklı bir cilt için çok önemlidir.",
      },
      {
        type: "paragraph",
        text: "Herhangi bir takviye kullanmadan önce mutlaka bir uzmana danışmanız gerektiğini unutmayın.",
        bold: true,
      },
    ],
  },
];
