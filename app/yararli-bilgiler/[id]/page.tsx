import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { articlesData, type ArticleContentBlock } from "../articles-data" // Güncellenmiş veri yolu
import { Calendar, User, Edit3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ArticleDetailPageProps {
  params: {
    // Dinamik rota segmenti string olmalı, bu yüzden id'yi string olarak alıyoruz.
    // Veri kaynağımızda id number olduğu için parse etmemiz gerekecek.
    id: string
  }
}

const renderContentBlock = (block: ArticleContentBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {block.text}
        </p>
      )
    case "heading":
      const HeadingTag = `h${block.level || 2}` as keyof (keyof React.JSX.IntrinsicElements)
      const textSize =
        block.level === 2 ? "text-2xl sm:text-3xl" : block.level === 3 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
      return (
        <HeadingTag key={index} className={`text-primary font-semibold mb-3 mt-6 ${textSize}`}>
          {block.text}
        </HeadingTag>
      )
    case "list":
      return (
        <ul key={index} className="list-disc list-inside mb-4 text-gray-700 space-y-2 pl-4">
          {block.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case "image":
      return (
        <div key={index} className="my-8 flex justify-center">
          <Image
            src={block.src || "/placeholder.svg"}
            alt={block.alt || "Makale içi görsel"}
            width={700}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      )
    default:
      return null
  }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const articleId = Number.parseInt(params.id, 10) // ID'yi integer'a çevir
  const article = articlesData.find((a) => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Makale Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız makale mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/yararli-bilgiler" className="text-primary hover:underline font-semibold">
            Tüm Makalelere Göz Atın
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <p className="text-sm font-medium text-secondary mb-2 uppercase tracking-wide">{article.category}</p> */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">{article.title}</h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Main Image */}
      {article.image && (
        <section className="py-8 sm:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={1000}
              height={600}
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl"
              priority // Öne çıkan resim olduğu için priority
            />
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-indigo">
          {/* Giriş/Özet Paragrafı (isteğe bağlı, eğer content içinde yoksa) */}
          {/* <p className="lead text-xl text-gray-600 mb-8">{article.excerpt}</p> */}
          {article.content.map((block, index) => renderContentBlock(block, index))}
        </div>
      </section>

      {/* Author Bio / Related Articles (Optional) */}
      <section className="py-12 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Edit3 className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-primary mb-2">Yazar Hakkında</h3>
          <p className="text-gray-700 mb-1">
            Bu makale <span className="font-medium">{article.author}</span> tarafından kaleme alınmıştır.
          </p>
          <p className="text-sm text-gray-500">Yayın Tarihi: {article.date}</p>
          <div className="mt-6">
            <Link href="/yararli-bilgiler" className="text-primary hover:underline font-semibold">
              &larr; Diğer Makalelere Göz Atın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
