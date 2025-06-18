"use client"

import type React from "react"

import Link from "next/link"
import { Building, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    } else if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-1">
            <Link
              href="#inicio"
              className="flex items-center gap-2 mb-4"
              onClick={(e) => handleLinkClick(e, "#inicio")}
            >
              <Building className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Construtora São Paulo</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Edificando sonhos e construindo o futuro com qualidade, confiança e projetos que inspiram.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#sobre"
                  onClick={(e) => handleLinkClick(e, "#sobre")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  onClick={(e) => handleLinkClick(e, "#servicos")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  onClick={(e) => handleLinkClick(e, "#projetos")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Projetos Realizados
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  onClick={(e) => handleLinkClick(e, "#contato")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Telefone:</span> (XX) XXXXX-XXXX
              </li>
              <li>
                <span className="font-medium">Email:</span> contato@construtorasaopaulo.com.br
              </li>
              <li>
                <span className="font-medium">Endereço:</span> Rua Exemplo, 123, São Paulo - SP
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook size={22} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram size={22} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Linkedin size={22} />
              </Link>
              <Link href="#" aria-label="Youtube" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Youtube size={22} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Construtora São Paulo. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido com paixão por{" "}
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              v0.dev AI
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
