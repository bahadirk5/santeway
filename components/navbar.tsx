"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Instagram, Mail, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünler", href: "/urunler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Yararlı Bilgiler", href: "/yararli-bilgiler" },
    { name: "SSS", href: "/sss" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      {/* Top Info Bar - Responsive */}
      <div className="bg-[#C1A667] text-white py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Sol taraf - Mail - Hidden on very small screens */}
            <div className="hidden xs:flex items-center">
              <a
                href="mailto:info@santeway.com"
                className="flex items-center text-white hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">info@santeway.com</span>
              </a>
            </div>

            {/* Orta - Mobilde email göster */}
            <div className="flex xs:hidden items-center">
              <a
                href="mailto:info@santeway.com"
                className="flex items-center text-white hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-3 w-3 mr-1" />
                <span className="text-xs">info@santeway.com</span>
              </a>
            </div>

            {/* Sağ taraf - Sosyal medya ikonları */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#191970] transition-colors duration-200"
              >
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/santewayturkiye?igsh=MWJiYzQ2aTlrY2Jsbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#191970] transition-colors duration-200"
              >
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#191970] transition-colors duration-200"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Responsive */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo - Responsive sizing */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/santeway-logo.png"
                  alt="Santeway Logo"
                  width={160} // Increased from 120
                  height={40} // Increased from 32
                  className="object-contain w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14 lg:w-56 lg:h-16" // Increased sizes
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden lg:flex flex-grow justify-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Sağ taraf - Boş alan (denge için) */}
            <div className="hidden lg:flex items-center space-x-4 w-32 sm:w-40 md:w-48 lg:w-56">
              {/* Boş alan - denge için */}
            </div>

            {/* Mobile Menu - Responsive button */}
            <div className="lg:hidden flex items-center">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="default" // Changed from ghost
                    size="icon"
                    className="h-8 w-8 sm:h-10 sm:w-10 bg-secondary text-white hover:bg-secondary/90" // Added background and text color
                  >
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-[#EEE7D8]"
                >
                  {" "}
                  {/* Changed background to #EEE7D8 */}
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base sm:text-lg font-medium text-primary hover:text-secondary transition-colors duration-200 py-2" // Changed text color to primary, hover to secondary
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
