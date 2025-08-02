import { MetadataRoute } from 'next'

// Articles data'yı buraya kopyalayalım sitemap'te kullanmak için
const articlesData = [
  {
    id: "l-carnitine-nedir",
    title: "L-Carnitine Nedir ve Faydaları",
    excerpt: "L-Carnitine'in vücuttaki rolü ve sağlık faydaları hakkında bilmeniz gerekenler.",
    date: "2024-01-15",
    image: "/images/lcarnitine1.webp"
  },
  {
    id: "vitamin-eksikligi-belirtileri",
    title: "Vitamin Eksikliği Belirtileri",
    excerpt: "Vitamin eksikliğinin vücudunuza olan etkilerini ve belirtilerini keşfedin.",
    date: "2024-01-10",
    image: "/images/ingredients.png"
  },
  {
    id: "metabolizma-hizlandirma",
    title: "Metabolizmayı Hızlandırmanın Doğal Yolları",
    excerpt: "Metabolizmanızı doğal yollarla hızlandırmak için pratik öneriler.",
    date: "2024-01-05",
    image: "/images/benefits.png"
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://santeway.com'
  
  // Ana sayfalar
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/yararli-bilgiler`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sss`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Ürün sayfaları
  const productPages = [
    {
      url: `${baseUrl}/urunler/l-carnitine-carnipure`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Blog makaleleri
  const articlePages = articlesData.map((article) => ({
    url: `${baseUrl}/yararli-bilgiler/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...productPages, ...articlePages]
}
