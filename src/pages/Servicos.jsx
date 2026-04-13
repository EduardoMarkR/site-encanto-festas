import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  PartyPopper,
  Sparkles,
  HeartHandshake,
  LayoutPanelTop,
  Smile,
  Stars,
  Gem,
  ShieldCheck,
  Clock,
  Heart,
  SearchCheck,
  ClipboardCheck,
  PartyPopper as PartyPopperStep,
} from 'lucide-react'

const services = [
  {
    title: 'Aluguel do espaço',
    text: 'Ambiente confortável, organizado e encantador para aniversários infantis e comemorações especiais.',
    icon: PartyPopper,
  },
  {
    title: 'Eventos temáticos',
    text: 'Perfeito para festas personalizadas com decoração especial, identidade visual e atmosfera memorável.',
    icon: Sparkles,
  },
  {
    title: 'Conforto para a família',
    text: 'Um espaço agradável para crianças, pais e convidados aproveitarem cada momento com mais tranquilidade.',
    icon: HeartHandshake,
  },
  {
    title: 'Estrutura prática',
    text: 'Layout funcional para facilitar a organização da festa e proporcionar uma experiência mais leve.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Ambiente acolhedor',
    text: 'Cada detalhe foi pensado para receber bem e criar um clima especial para todos os presentes.',
    icon: Smile,
  },
  {
    title: 'Celebrações inesquecíveis',
    text: 'Um cenário bonito e bem preparado para transformar datas especiais em lembranças marcantes.',
    icon: Stars,
  },
]

const highlights = [
  'Espaço planejado para festas infantis',
  'Ambiente bonito, funcional e acolhedor',
  'Experiência mais leve para anfitriões e convidados',
]

const benefits = [
  {
    title: 'Beleza e charme',
    text: 'Um ambiente visualmente encantador para valorizar cada detalhe da comemoração.',
    icon: Gem,
  },
  {
    title: 'Mais conforto',
    text: 'Estrutura agradável para receber convidados e aproveitar cada momento com tranquilidade.',
    icon: ShieldCheck,
  },
  {
    title: 'Mais praticidade',
    text: 'Organização facilitada para que a experiência seja mais leve do início ao fim.',
    icon: Clock,
  },
  {
    title: 'Memórias especiais',
    text: 'Um espaço pensado para transformar aniversários em lembranças inesquecíveis.',
    icon: Heart,
  },
]

const steps = [
  {
    title: 'Escolha a experiência',
    text: 'Conheça o espaço, entenda os diferenciais e descubra a melhor proposta para o seu evento.',
    icon: SearchCheck,
  },
  {
    title: 'Planeje com tranquilidade',
    text: 'Organize cada detalhe com mais praticidade em um ambiente pensado para facilitar a comemoração.',
    icon: ClipboardCheck,
  },
  {
    title: 'Celebre momentos especiais',
    text: 'Aproveite uma festa encantadora, confortável e cheia de memórias inesquecíveis.',
    icon: PartyPopperStep,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

export default function Servicos() {
  const playFireSound = () => {
    const audio = new Audio('/sounds/firework.mp3')
    audio.volume = 0.2
    audio.play().catch(() => {})
  }

  return (
    <main className="services-page">
      <Seo
        title="Serviços | Espaço Encanto"
        description="Conheça os serviços e diferenciais do Espaço Encanto para festas infantis com conforto, beleza e praticidade."
        keywords="serviços festa infantil, aluguel de espaço, eventos temáticos, espaço para aniversário infantil"
        url="https://www.espacoencanto.com.br/servicos"
      />

      <section className="services-hero-page">
        <div className="container">
          <header className="page-header page-header-full">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-separator">/</li>
                <li className="breadcrumb-item breadcrumb-current">Serviços</li>
              </ol>
            </nav>

            <span className="section-badge">Serviços</span>

            <div className="services-hero-grid">
              <div className="services-hero-content">
                <h1>Estrutura completa para festas infantis</h1>

                <p className="services-hero-lead">
                  Conheça os principais serviços e diferenciais do nosso espaço
                  para criar comemorações especiais com conforto, beleza e
                  praticidade.
                </p>

                <div className="services-hero-actions">
                  <Link to="/orcamento" className="btn-primary">
                    Solicitar orçamento
                  </Link>

                  <Link to="/galeria" className="btn-secondary">
                    Ver galeria
                  </Link>
                </div>
              </div>

              <motion.div
                className="services-hero-side"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="services-hero-panel">
                  <strong>Uma experiência completa</strong>

                  <ul className="services-hero-highlights">
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </header>
        </div>
      </section>

      <section className="services-cards-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">O que oferecemos</span>
            <h2>Soluções pensadas para tornar sua festa ainda mais especial</h2>
            <p>
              Cada serviço foi pensado para oferecer mais organização, conforto
              e encanto em todos os momentos da celebração.
            </p>
          </div>

          <motion.div
            className="services-page-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => {
              const Icon = service.icon

              return (
                <motion.article
                  className="services-page-card"
                  key={service.title}
                  variants={itemVariants}
                >
                  <div className="services-page-card-top">
                    <div className="services-page-card-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="services-benefits-section">
        <div className="container">
          <div className="services-benefits-box">
            <div className="services-benefits-content">
              <span className="section-badge">Diferenciais</span>
              <h2>Por que o Espaço Encanto faz diferença</h2>
              <p>
                Mais do que oferecer um local para festas, nosso objetivo é
                proporcionar uma experiência leve, bonita e acolhedora para
                crianças, famílias e convidados.
              </p>
            </div>

            <motion.div
              className="services-benefits-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <motion.article
                    className="services-benefit-item"
                    key={benefit.title}
                    variants={itemVariants}
                  >
                    <div className="services-benefit-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <strong>{benefit.title}</strong>
                    <span>{benefit.text}</span>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-process-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">Como funciona</span>
            <h2>Um processo simples para você celebrar com mais tranquilidade</h2>
          </div>

          <motion.div
            className="services-process-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <motion.article
                  className="services-process-card"
                  key={step.title}
                  variants={itemVariants}
                  onMouseEnter={playFireSound}
                >
                  <div className="services-process-icon-wrap">
                    <div className="services-process-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <div className="services-process-fireworks" aria-hidden="true">
                      {[...Array(12)].map((_, index) => (
                        <span key={index}></span>
                      ))}
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="services-cta-section">
        <div className="container">
          <motion.div
            className="services-cta-box"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="section-badge">Vamos planejar sua festa</span>
            <h2>Pronto para criar uma comemoração linda e inesquecível?</h2>
            <p>
              Fale com a nossa equipe e descubra como o Espaço Encanto pode
              tornar seu evento ainda mais especial.
            </p>

            <div className="services-cta-actions">
              <Link to="/orcamento" className="btn-primary">
                Solicitar orçamento
              </Link>

              <Link to="/espacos" className="btn-secondary">
                Conhecer nossos espaços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}