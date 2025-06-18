import Link from "next/link"
import { Building, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Construtora São Paulo</span>
            </Link>
            <p className="text-sm">Edificando sonhos, construindo o futuro com qualidade e confiança.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="hover:text-orange-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-orange-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#projetos" className="hover:text-orange-400 transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-orange-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
            <p className="mt-4 text-sm">contato@construtorasaopaulo.com.br</p>
            <p className="text-sm">(XX) XXXXX-XXXX</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Construtora São Paulo. Todos os direitos reservados.</p>
          <p className="mt-1">
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Política de Privacidade
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
