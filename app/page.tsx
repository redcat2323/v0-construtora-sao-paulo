import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Home,
  Layers,
  Droplets,
  Square,
  Triangle,
  Paintbrush2,
  Award,
  Users,
  ClipboardCheck,
  Lightbulb,
  MessageCircle,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: <Home className="h-10 w-10 text-orange-500 mb-4" />,
    title: "Construção Residencial Alto Padrão",
    description:
      "Projetos personalizados e execução impecável para residências de luxo, com foco em design, conforto e materiais de primeira linha.",
    keywords: "construção de casas de luxo, projetos personalizados, alto padrão",
  },
  {
    icon: <Layers className="h-10 w-10 text-orange-500 mb-4" />,
    title: "Muros Estruturais e de Arrimo",
    description:
      "Soluções seguras e eficientes em muros de contenção e estruturais, garantindo estabilidade e durabilidade para seu terreno.",
    keywords: "muro de arrimo, muro de contenção, estabilidade de terreno",
  },
  {
    icon: <Droplets className="h-10 w-10 text-orange-500 mb-4" />,
    title: "Concretagem Especializada",
    description:
      "Serviços de concretagem com alta precisão, utilizando materiais de qualidade para fundações, lajes e estruturas robustas.",
    keywords: "concretagem, fundações, lajes de concreto, estruturas de concreto",
  },
  {
    icon: <Square className="h-10 w-10 text-orange-500 mb-4" />,
    title: "Contrapisos Perfeitos",
    description:
      "Preparo de superfícies com contrapisos perfeitamente nivelados, prontos para receber o acabamento dos seus sonhos.",
    keywords: "contrapiso, nivelamento de piso, preparo para acabamento",
  },
  {
    icon: <Triangle className="h-10 w-10 text-orange-500 mb-4" />,
    title: "Telhados Duráveis e Estéticos",
    description:
      "Instalação e reforma de telhados com diversos materiais, assegurando proteção, conforto térmico e estética para sua residência.",
    keywords: "instalação de telhados, reforma de telhados, telhados coloniais, telhados modernos",
  },
  {
    icon: <Paintbrush2 className="h-10 w-10 text-orange-500 mb-4" />,
    title: "Trabalhos com Gesso e Acabamentos",
    description:
      "Acabamentos refinados em gesso, incluindo sancas, rebaixamento de teto, drywall e molduras, agregando elegância aos ambientes.",
    keywords: "gesso, drywall, sanca de gesso, rebaixamento de teto, acabamentos finos",
  },
]

const differentials = [
  { icon: <Award className="h-8 w-8 text-orange-500" />, text: "Qualidade Superior em Cada Detalhe" },
  { icon: <Users className="h-8 w-8 text-orange-500" />, text: "Equipe Experiente e Qualificada" },
  { icon: <ClipboardCheck className="h-8 w-8 text-orange-500" />, text: "Compromisso com Prazos e Orçamentos" },
  { icon: <Lightbulb className="h-8 w-8 text-orange-500" />, text: "Soluções Inovadoras e Sustentáveis" },
  { icon: <MessageCircle className="h-8 w-8 text-orange-500" />, text: "Atendimento Personalizado e Transparente" },
  { icon: <CheckCircle className="h-8 w-8 text-orange-500" />, text: "Satisfação Garantida do Cliente" },
]

const projects = [
  {
    id: 1,
    name: "Residência Alphaville",
    image: "/placeholder.svg?width=600&height=400",
    description: "Casa de luxo com design contemporâneo e acabamentos de alto padrão.",
  },
  {
    id: 2,
    name: "Condomínio Jardins",
    image: "/placeholder.svg?width=600&height=400",
    description: "Projeto e construção de condomínio residencial com foco em conforto e segurança.",
  },
  {
    id: 3,
    name: "Reforma Alto Padrão Itaim",
    image: "/placeholder.svg?width=600&height=400",
    description: "Reforma completa de apartamento, otimizando espaços e utilizando materiais nobres.",
  },
]

const testimonials = [
  {
    quote:
      "A Construtora São Paulo transformou nosso sonho em realidade. Profissionalismo e qualidade do início ao fim! Cada detalhe foi pensado com carinho e expertise.",
    name: "Família Silva",
    location: "São Paulo, SP",
  },
  {
    quote:
      "Excelente atendimento e cumprimento rigoroso dos prazos. A equipe é muito atenciosa e competente. Recomendo de olhos fechados!",
    name: "João P. Almeida",
    location: "Campinas, SP",
  },
  {
    quote:
      "Ficamos impressionados com a qualidade da construção e o acabamento impecável. A Construtora São Paulo superou nossas expectativas!",
    name: "Mariana Costa",
    location: "Jundiaí, SP",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative h-[calc(100vh-5rem)] min-h-[500px] w-full flex items-center justify-center text-center text-white scroll-mt-20"
        >
          <Image
            src="/placeholder.svg?width=1920&height=1080"
            alt="Fachada de casa moderna de alto padrão ao pôr do sol"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Construtora São Paulo
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200">
              Edificando Sonhos, Construindo o Futuro com Alto Padrão em Cada Detalhe.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Link href="#contato">Solicite um Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sobre Nós Section */}
        <section id="sobre" className="py-16 md:py-24 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Nossa Essência: Qualidade e Confiança que Constroem Lares
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Na Construtora São Paulo, unimos tradição e inovação para entregar projetos residenciais de alto
                  padrão que superam as expectativas dos casais brasileiros entre 30 e 55 anos que buscam realizar o
                  sonho da casa própria com sofisticação e segurança.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Com anos de experiência e uma equipe apaixonada pelo que faz, transformamos ideias em lares únicos e
                  duradouros. Nosso compromisso é com a excelência, transparência em cada etapa e a satisfação total dos
                  nossos clientes.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white mt-4"
                >
                  <Link href="#servicos">Conheça Nossos Serviços</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?width=600&height=450"
                  alt="Equipe da Construtora São Paulo analisando projeto"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-16 md:py-24 bg-gray-100 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Serviços Especializados para Sua Obra
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Oferecemos soluções completas e personalizadas para cada etapa do seu projeto, com a qualidade que você
                merece.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="py-16 md:py-24 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Por Que Escolher a Construtora São Paulo?
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Nossos diferenciais garantem a tranquilidade e a certeza de um investimento seguro e um resultado
                impecável.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentials.map((item) => (
                <div key={item.text} className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="py-16 md:py-24 bg-gray-100 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Conheça Nossos Projetos Realizados
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Inspire-se com alguns dos nossos trabalhos que combinam design inovador e execução de alta qualidade.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{project.name}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm">{project.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Link href="#contato">Ver Mais Projetos e Falar Conosco</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="py-16 md:py-24 bg-orange-500 text-white scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A Confiança que Constrói: O Que Nossos Clientes Dizem
              </h2>
              <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
                A satisfação dos nossos clientes é o nosso maior orgulho e a prova da nossa dedicação.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white text-gray-800 p-6 shadow-lg">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-16 md:py-24 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vamos Construir Seu Sonho Juntos?
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Entre em contato para um orçamento sem compromisso ou para saber mais sobre nossos serviços. Nossa
                equipe está pronta para te atender!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Card className="p-6 md:p-8 shadow-lg">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">
                      Nome Completo
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      E-mail
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      Telefone (com DDD)
                    </Label>
                    <Input type="tel" name="phone" id="phone" required className="mt-1" placeholder="(XX) XXXXX-XXXX" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Mensagem
                    </Label>
                    <Textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="mt-1"
                      placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </Card>
              <div className="space-y-8 pt-4 md:pt-0">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Informações de Contato</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="h-6 w-6 text-orange-500" />
                    <span className="text-gray-700">(XX) XXXXX-XXXX / (XX) YYYYY-YYYY</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="h-6 w-6 text-orange-500" />
                    <span className="text-gray-700">contato@construtorasaopaulo.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-orange-500" />
                    <span className="text-gray-700">Endereço da Construtora, Cidade, Estado - CEP</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Horário de Atendimento</h3>
                  <p className="text-gray-700">Segunda a Sexta: 8:00 - 18:00</p>
                  <p className="text-gray-700">Sábado: 8:00 - 12:00</p>
                </div>
                <div>
                  {/* Placeholder para mapa, se desejar adicionar */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Aqui pode ir um mapa do Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
