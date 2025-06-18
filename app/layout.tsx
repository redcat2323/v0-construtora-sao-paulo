import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Assumindo que ThemeProvider existe
import Navbar from "@/components/navbar" // Criaremos este componente
import Footer from "@/components/footer" // Criaremos este componente

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Construtora São Paulo | Construção de Alto Padrão e Reformas",
  description:
    "Especialistas em construção residencial de alto padrão, muros estruturais, concretagem, contrapisos, telhados e trabalhos com gesso. Transformamos seu sonho em realidade com qualidade e confiança. Solicite um orçamento!",
  keywords:
    "construtora em são paulo, construção de casas de luxo, reforma alto padrão, construção residencial, muro de arrimo, concretagem, contrapiso, telhados, gesso, construtora sp, casas de alto padrão, projetos de arquitetura",
  authors: [{ name: "Construtora São Paulo" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Construtora São Paulo | Seu Sonho, Nossa Construção",
    description:
      "Realize o sonho da casa própria com a Construtora São Paulo. Qualidade, confiança e projetos personalizados para casais que buscam o melhor.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.construtorasaopaulo.com.br", // Substituir pela URL real
    siteName: "Construtora São Paulo",
    images: [
      {
        url: "/placeholder.svg?width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Casa moderna de alto padrão - Construtora São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construtora São Paulo | Alto Padrão em Construção",
    description: "Projetos exclusivos e execução impecável para sua residência dos sonhos.",
    images: ["/placeholder.svg?width=1200&height=630"], // Substituir
  },
  icons: {
    icon: "/favicon.ico", // Crie um favicon.ico e coloque na pasta public
    apple: "/apple-touch-icon.png", // Crie um apple-touch-icon.png
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
