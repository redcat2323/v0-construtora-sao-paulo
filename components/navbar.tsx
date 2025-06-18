"use client"

import type React from "react"

import Link from "next/link"
import { Building, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsSheetOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsSheetOpen(false)
    const targetElement = document.querySelector("#inicio")
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#inicio" className="flex items-center gap-2" onClick={handleLogoClick}>
          <Building className={`h-8 w-8 ${isScrolled ? "text-orange-500" : "text-orange-500"}`} />
          <span className={`text-xl font-bold ${isScrolled ? "text-gray-800" : "text-white md:text-gray-800"}`}>
            Construtora São Paulo
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-700 hover:text-orange-500" : "text-gray-200 hover:text-orange-400 md:text-gray-700 md:hover:text-orange-500"}`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="#contato" onClick={(e) => handleLinkClick(e, "#contato")}>
              Orçamento Gratuito
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`${isScrolled ? "border-gray-300 text-gray-700" : "border-gray-400 text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href="#inicio" className="flex items-center gap-2" onClick={(e) => handleLinkClick(e, "#inicio")}>
                  <Building className="h-7 w-7 text-orange-500" />
                  <span className="text-lg font-bold text-gray-800">Construtora SP</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-md font-medium text-gray-700 hover:text-orange-500 py-2"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="#contato" onClick={(e) => handleLinkClick(e, "#contato")}>
                    Orçamento Gratuito
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
