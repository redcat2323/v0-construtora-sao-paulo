"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Home,
  Layers,
  Droplets,
  Construction,
  Building2,
  Paintbrush,
  Award,
  Users,
  ClipboardCheck,
  Lightbulb,
  Star,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: <Home className="h-10 w-10 text-orange-500 mb-4 group-hover:text-white transition-colors duration-300" />,
    title: "Construção Residencial Alto Padrão",
    description:
      "Projetos personalizados e execução impecável para residências de luxo, com foco em design, conforto e materiais de primeira linha.",
    keywords: "construção de casas de luxo, projetos personalizados, alto padrão",
  },
  {
    icon: <Layers className="h-10 w-10 text-orange-500 mb-4 group-hover:text-white transition-colors duration-300" />,
    title: "Muros Estruturais e de Arrimo",
    description:
      "Soluções seguras e eficientes em muros de contenção e estruturais, garantindo estabilidade e durabilidade para seu terreno.",
    keywords: "muro de arrimo, muro de contenção, estabilidade de terreno",
  },
  {
    icon: <Droplets className="h-10 w-10 text-orange-500 mb-4 group-hover:text-white transition-colors duration-300" />,
    title: "Concretagem Especializada",
    description:
      "Serviços de concretagem com alta precisão, utilizando materiais de qualidade para fundações, lajes e estruturas robustas.",
    keywords: "concretagem, fundações, lajes de concreto, estruturas de concreto",
  },
  {
    icon: (
      <Construction className="h-10 w-10 text-orange-500 mb-4 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Contrapisos Perfeitos",
    description:
      "Preparo de superfícies com contrapisos perfeitamente nivelados, prontos para receber o acabamento dos seus sonhos.",
    keywords: "contrapiso, nivelamento de piso, preparo para acabamento",
  },
  {
    icon: (
      <Building2 className="h-10 w-10 text-orange-500 mb-4 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Telhados Duráveis e Estéticos",
    description:
      "Instalação e reforma de telhados com diversos materiais, assegurando proteção, conforto térmico e estética para sua residência.",
    keywords: "instalação de telhados, reforma de telhados, telhados coloniais, telhados modernos",
  },
  {
    icon: (
      <Paintbrush className="h-10 w-10 text-orange-500 mb-4 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Trabalhos com Gesso e Acabamentos",
    description:
      "Acabamentos refinados em gesso, incluindo sancas, rebaixamento de teto, drywall e molduras, agregando elegância aos ambientes.",
    keywords: "gesso, drywall, sanca de gesso, rebaixamento de teto, acabamentos finos",
  },
]

const differentials = [
  {
    icon: <Award className="h-8 w-8 text-orange-500" />,
    title: "Qualidade Superior",
    description: "Compromisso com a excelência em cada detalhe construtivo.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Equipe Especializada",
    description: "Profissionais experientes e qualificados para realizar seu projeto.",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-orange-500" />,
    title: "Prazos e Orçamentos",
    description: "Transparência e rigor no cumprimento do combinado.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
    title: "Soluções Inovadoras",
    description: "Utilizamos as melhores tecnologias e materiais do mercado.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-orange-500" />,
    title: "Atendimento Personalizado",
    description: "Foco total nas suas necessidades e satisfação.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
    title: "Segurança e Confiança",
    description: "Construímos relações sólidas baseadas na confiança mútua.",
  },
]

const projects = [
  {
    id: 1,
    name: "Residência Alphaville",
    image: "/placeholder.svg?width=600&height=400",
    description: "Casa de luxo com design contemporâneo e acabamentos de alto padrão.",
    category: "Alto Padrão",
  },
  {
    id: 2,
    name: "Condomínio Jardins",
    image: "/placeholder.svg?width=600&height=400",
    description: "Projeto e construção de condomínio residencial com foco em conforto e segurança.",
    category: "Residencial",
  },
  {
    id: 3,
    name: "Reforma Alto Padrão Itaim",
    image: "/placeholder.svg?width=600&height=400",
    description: "Reforma completa de apartamento, otimizando espaços e utilizando materiais nobres.",
    category: "Reformas",
  },
]

const testimonials = [
  {
    quote:
      "A Construtora São Paulo transformou nosso sonho em realidade. Profissionalismo e qualidade do início ao fim! Cada detalhe foi pensado com carinho e expertise. Estamos muito felizes com nossa nova casa!",
    name: "Família Silva & Oliveira",
    location: "São Paulo, SP",
    project: "Casa Alto Padrão",
  },
  {
    quote:
      "Excelente atendimento e cumprimento rigoroso dos prazos. A equipe é muito atenciosa e competente. Recomendo de olhos fechados para quem busca tranquilidade e um resultado impecável.",
    name: "Carlos e Beatriz Almeida",
    location: "Campinas, SP",
    project: "Reforma Residencial",
  },
  {
    quote:
      "Ficamos impressionados com a qualidade da construção e o acabamento. A Construtora São Paulo superou nossas expectativas em todos os sentidos. Nosso lar ficou perfeito!",
    name: "Mariana e Ricardo Costa",
    location: "Jundiaí, SP",
    project: "Construção de Sobrado",
  },
]

// Função para o smooth scroll, caso o Link do Next.js não funcione como esperado com hashes
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault()
  const section = document.getElementById(sectionId.substring(1)) // Remove #
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

export default function HomePage() {
  return (
    <>
      {" "}
      {/* Removido div desnecessária, pois RootLayout já tem body */}
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center text-white"
      >
        <Image
          src="/placeholder.svg?width=1920&height=1080"
          alt="Fachada de casa moderna de alto padrão ao pôr do sol - Construtora São Paulo"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 md:px-6 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block">Construtora São Paulo</span>
            <span className="block text-orange-400 text-3xl sm:text-4xl md:text-5xl mt-2">
              Edificando Sonhos, Construindo o Futuro.
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200">
            Realize o sonho da casa perfeita com quem entende de alto padrão, qualidade e confiança. Projetos exclusivos
            para você e sua família.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Link href="#contato" onClick={(e) => scrollToSection(e, "#contato")}>
                Solicite um Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Sobre Nós Section */}
      <section id="sobre" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-1">Nossa Essência:</h2>
              <p className="text-orange-500 text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Qualidade e Confiança que Constroem Lares
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Na Construtora São Paulo, unimos tradição e inovação para entregar projetos residenciais de alto padrão
                que superam as expectativas dos casais brasileiros entre 30 e 55 anos. Buscamos realizar o sonho da casa
                própria com sofisticação, segurança e um toque pessoal.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Com anos de experiência e uma equipe apaixonada pelo que faz, transformamos ideias em lares únicos e
                duradouros. Nosso compromisso é com a excelência em cada detalhe, transparência em todas as etapas e a
                satisfação total dos nossos clientes.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold"
              >
                <Link href="#servicos" onClick={(e) => scrollToSection(e, "#servicos")}>
                  Conheça Nossos Serviços
                </Link>
              </Button>
            </div>
            <div className="animate-slideInRight">
              <Image
                src="/placeholder.svg?width=600&height=450"
                alt="Equipe da Construtora São Paulo analisando projeto arquitetônico moderno"
                width={600}
                height={450}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serviços Especializados para Sua Obra
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Oferecemos soluções completas e personalizadas para cada etapa do seu projeto, com a qualidade e a
              expertise que você merece para construir o lar dos seus sonhos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="p-0 mb-2">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription className="text-gray-600 text-sm group-hover:text-orange-100 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Por Que Escolher a Construtora São Paulo?
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Nossos diferenciais garantem a tranquilidade e a certeza de um investimento seguro para a construção do
              seu patrimônio, com um resultado impecável.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="flex items-start space-x-4 p-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projetos Section */}
      <section id="projetos" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Conheça Nossos Projetos Realizados</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Inspire-se com alguns dos nossos trabalhos que combinam design inovador, funcionalidade e execução de alta
              qualidade, refletindo os sonhos de nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-gray-800 border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <Image
                  src={project.image || "/placeholder.svg?width=600&height=400&query=projeto+construcao"}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <CardTitle className="text-xl font-semibold text-white mb-2">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold"
            >
              <Link href="#contato" onClick={(e) => scrollToSection(e, "#contato")}>
                Ver Mais Projetos e Falar Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A Confiança que Constrói: O Que Nossos Clientes Dizem
            </h2>
            <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é o nosso maior orgulho e a prova da nossa dedicação em transformar
              sonhos em lares felizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white text-gray-800 p-6 shadow-xl rounded-lg flex flex-col">
                <CardContent className="flex flex-col items-center text-center flex-grow">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed text-md flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-orange-500 mt-1">Projeto: {testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vamos Construir Seu Sonho Juntos?
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Entre em contato para um orçamento sem compromisso ou para saber mais sobre nossos serviços. Nossa equipe
              está pronta para te atender e transformar seu projeto em realidade!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <Card className="p-6 md:p-8 shadow-xl bg-white rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Envie sua Mensagem</h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Nome Completo
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    E-mail
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Telefone (com DDD)
                  </Label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Mensagem
                  </Label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Conte-nos sobre seu projeto, suas ideias ou dúvidas..."
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 rounded-md font-semibold shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    Enviar Mensagem e Solicitar Orçamento
                  </Button>
                </div>
              </form>
            </Card>
            <div className="space-y-8 pt-4 md:pt-0">
              <Card className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações de Contato Direto</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">(XX) XXXXX-XXXX / (XX) YYYYY-YYYY</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">contato@construtorasaopaulo.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Rua Exemplo, 123, Bairro Modelo
                    <br />
                    São Paulo - SP, CEP 00000-000
                  </span>
                </div>
              </Card>
              <Card className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Horário de Atendimento</h3>
                <p className="text-gray-700">Segunda a Sexta: 8:00 - 18:00</p>
                <p className="text-gray-700">Sábado: 8:00 - 12:00 (Agendamentos)</p>
              </Card>
              <div className="w-full h-64 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/placeholder.svg?width=600&height=400"
                  alt="Mapa da localização da Construtora São Paulo"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
