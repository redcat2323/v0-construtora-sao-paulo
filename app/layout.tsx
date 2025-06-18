import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Construtora São Paulo | Construção de Alto Padrão e Reformas",
  description:
    "Especialistas em construção residencial de alto padrão, muros estruturais, concretagem, contrapisos, telhados e trabalhos com gesso. Transformamos seu sonho em realidade com qualidade e confiança. Solicite um orçamento!",
  keywords:
    "construtora em são paulo, construção de casas de luxo, reforma alto padrão, construção residencial, muro de arrimo, concretagem, contrapiso, telhados, gesso, construtora sp",
  authors: [{ name: "Construtora São Paulo" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Construtora São Paulo | Construção de Alto Padrão e Reformas",
    description:
      "Realize o sonho da casa própria com a Construtora São Paulo. Qualidade, confiança e projetos personalizados.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.construtorasaopaulo.com.br", // Substituir pela URL real
    siteName: "Construtora São Paulo",
    images: [
      {
        url: "/placeholder.svg?width=1200&height=630", // Substituir por uma imagem de Open Graph real
        width: 1200,
        height: 630,
        alt: "Casa moderna de alto padrão - Construtora São Paulo",
      },
    ],
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
