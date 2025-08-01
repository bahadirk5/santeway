import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Sütun 1: Takip Edin */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">Takip Edin</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-gray-700 hover:text-primary group transition-colors"
                  >
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700 group-hover:text-primary transition-colors" />
                    <span className="text-sm sm:text-base">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-gray-700 hover:text-primary group transition-colors"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700 group-hover:text-primary transition-colors" />
                    <span className="text-sm sm:text-base">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-gray-700 hover:text-primary group transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700 group-hover:text-primary transition-colors" />
                    <span className="text-sm sm:text-base">LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sütun 2: Keşfet */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">Keşfet</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>
                  <Link href="/urunler" className="hover:text-primary transition-colors">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="hover:text-primary transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/yararli-bilgiler" className="hover:text-primary transition-colors">
                    Yararlı Bilgiler
                  </Link>
                </li>
                <li>
                  <Link href="/sss" className="hover:text-primary transition-colors">
                    SSS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sütun 3: Kurumsal */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">Kurumsal</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>
                  <Link href="/iletisim" className="hover:text-primary transition-colors">
                    İletişim
                  </Link>
                </li>
                <li>
                  <Link href="/gizlilik" className="hover:text-primary transition-colors">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/kullanim-kosullari" className="hover:text-primary transition-colors">
                    Kullanım Koşulları
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sütun 4: Logo ve İletişim - Versiyon 72'deki gibi hizalama */}
            <div className="flex flex-col items-center sm:items-start lg:items-end text-center sm:text-left lg:text-right">
              <Link href="/" className="flex items-center mb-3 sm:mb-4">
                <Image
                  src="/images/santeway-logo.png"
                  alt="Santeway Logo"
                  width={160}
                  height={40}
                  className="object-contain w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14"
                />
              </Link>
              <a
                href="mailto:info@santeway.com"
                className="flex items-center text-gray-700 hover:text-primary group transition-colors text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700 group-hover:text-primary transition-colors" />
                info@santeway.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <p className="text-center text-gray-500 text-xs sm:text-sm">Tüm Hakları Saklıdır. © Santeway 2025.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
