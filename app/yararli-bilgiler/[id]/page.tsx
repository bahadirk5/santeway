import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articlesData, type ArticleContentBlock } from "../articles-data"; // Güncellenmiş veri yolu
import { Calendar, User, Edit3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface ArticleDetailPageProps {
  params: {
    // Dinamik rota segmenti string olmalı, bu yüzden id'yi string olarak alıyoruz.
    // Veri kaynağımızda id number olduğu için parse etmemiz gerekecek.
    id: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const articleId = Number.parseInt(params.id, 10);
  const article = articlesData.find((a) => a.id === articleId);

  if (!article) {
    return {
      title: "Makale Bulunamadı | Santeway",
      description: "Aradığınız makale bulunamadı veya mevcut değil.",
    };
  }

  return {
    title: `${article.title} | Santeway`,
    description: article.excerpt,
    keywords: [
      article.title.toLowerCase(),
      "sağlık",
      "beslenme",
      "gıda takviyesi",
      "sağlıklı yaşam",
      "vitamin",
      "mineral",
      "santeway blog",
      "yararlı bilgiler",
      ...(article.title.includes("L-Carnitine") ? ["l-carnitine", "enerji", "metabolizma"] : []),
      ...(article.title.includes("vitamin") ? ["vitamin eksikliği", "besin"] : []),
    ],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://santeway.com/yararli-bilgiler/${article.id}`,
      images: [
        {
          url: article.image || "https://santeway.com/images/newsletter.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
      authors: ["Santeway"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image || "https://santeway.com/images/newsletter.png"],
    },
    alternates: {
      canonical: `https://santeway.com/yararli-bilgiler/${article.id}`,
    },
  };
}

const renderContentBlock = (block: ArticleContentBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={`mb-4 text-gray-700 leading-relaxed ${block.bold ? 'font-bold' : ''}`}>
          {block.text}
        </p>
      );
    case "heading":
      const HeadingTag = `h${block.level || 2}` as string;
      const textSize =
        block.level === 2
          ? "text-2xl sm:text-3xl"
          : block.level === 3
          ? "text-xl sm:text-2xl"
          : "text-lg sm:text-xl";
      return React.createElement(
        HeadingTag,
        {
          key: index,
          className: `text-primary font-semibold mb-3 mt-6 ${textSize}`,
        },
        block.text
      );
    case "list":
      return (
        <ul
          key={index}
          className="list-disc list-inside mb-4 text-gray-700 space-y-2 pl-4"
        >
          {block.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
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
      );
    default:
      return null;
  }
};

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const articleId = Number.parseInt(params.id, 10); // ID'yi integer'a çevir
  const article = articlesData.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Makale Bulunamadı
          </h1>
          <p className="text-gray-600 mb-8">
            Aradığınız makale mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            href="/yararli-bilgiler"
            className="text-primary hover:underline font-semibold"
          >
            Tüm Makalelere Göz Atın
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image || "https://santeway.com/images/newsletter.png",
            "datePublished": article.date,
            "dateModified": article.date,
            "author": {
              "@type": "Organization",
              "name": "Santeway",
              "url": "https://santeway.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Santeway",
              "logo": {
                "@type": "ImageObject",
                "url": "https://santeway.com/images/santeway-logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://santeway.com/yararli-bilgiler/${article.id}`
            },
            "url": `https://santeway.com/yararli-bilgiler/${article.id}`,
            "articleSection": "Sağlık ve Beslenme",
            "wordCount": article.content.reduce((count, block) => {
              if (block.type === "paragraph") {
                return count + (block.text?.split(" ").length || 0);
              }
              return count;
            }, 0),
            "keywords": article.title.toLowerCase().split(" ").concat([
              "sağlık", "beslenme", "gıda takviyesi", "santeway"
            ]).join(", ")
          })
        }}
      />
      
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://santeway.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Yararlı Bilgiler",
                "item": "https://santeway.com/yararli-bilgiler"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": `https://santeway.com/yararli-bilgiler/${article.id}`
              }
            ]
          })
        }}
      />
      
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Ana sayfaya git"
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link
                href="/yararli-bilgiler"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Yararlı bilgiler sayfasına git"
              >
                Yararlı Bilgiler
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                {article.title.length > 50 ? `${article.title.substring(0, 50)}...` : article.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-secondary/20 to-secondary/40 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <p className="text-sm font-medium text-secondary mb-2 uppercase tracking-wide">{article.category}</p> */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            {article.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600">
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
          {article.content.map((block, index) =>
            renderContentBlock(block, index)
          )}
        </div>
      </section>

      {/* Author Bio / Related Articles (Optional) */}
      <section className="py-12 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">Yayın Tarihi: {article.date}</p>
          <div className="mt-6">
            <Link
              href="/yararli-bilgiler"
              className="text-primary hover:underline font-semibold"
            >
              &larr; Diğerlerine Göz Atın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
