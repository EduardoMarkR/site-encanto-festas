import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Home, LayoutPanelTop, Sparkles } from 'lucide-react'
import aboutImg1 from '../assets/galeria/sobre/sobre-1.webp'
import aboutImg2 from '../assets/galeria/sobre/sobre-2.jpg'

const stats = [
  { number: '+150', label: 'Festas realizadas' },
  { number: '+120', label: 'Convidados por evento' },
  { number: '100%', label: 'Dedicação em cada detalhe' },
]

const diferenciais = [
  {
    title: 'Ambiente acolhedor',
    text: 'Um espaço pensado para receber crianças, famílias e convidados com conforto, leveza e charme.',
    icon: Home,
  },
  {
    title: 'Estrutura funcional',
    text: 'Organização prática para que cada etapa da festa aconteça de forma mais tranquila e especial.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Experiência memorável',
    text: 'Cada detalhe foi planejado para transformar aniversários em momentos inesquecíveis.',
    icon: Sparkles,
  },
]

export default function Sobre() {
  return (
    <main className="about-page">
      <Seo
        title="Sobre o Espaço Encanto"
        description="Conheça o Espaço Encanto, um ambiente preparado para festas infantis com conforto, beleza e praticidade."
        keywords="sobre salão de festas, espaço infantil, festas para crianças, aluguel de espaço infantil"
        url="https://www.espacoencanto.com.br/sobre"
      />

      <section className="about-hero-page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-separator">/</li>
              <li className="breadcrumb-item breadcrumb-current">Sobre</li>
            </ol>
          </nav>

          <div className="about-hero-page-grid">
            <div className="about-hero-page-content">
              <span className="section-badge">Sobre nós</span>

              <h1>Um espaço pensado para festas infantis memoráveis</h1>

              <p className="about-hero-page-lead">
                O Espaço Encanto foi criado para oferecer conforto, beleza e
                praticidade em comemorações especiais, com ambiente acolhedor
                para crianças, famílias e convidados.
              </p>

              <div className="about-hero-page-actions">
                <Link to="/orcamento" className="btn-primary">
                  Solicitar orçamento
                </Link>

                <Link to="/galeria" className="btn-secondary">
                  Ver galeria
                </Link>
              </div>
            </div>

            <div className="about-hero-page-visual">
              <div className="about-hero-main-image">
                <img
                  src={aboutImg1}
                  alt="Festa infantil realizada no Espaço Encanto"
                />
              </div>

              <div className="about-hero-floating-card">
                <strong>Beleza, conforto e praticidade</strong>
                <span>
                  Um ambiente preparado para tornar cada comemoração mais leve e
                  especial.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-section section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-badge">Nossa essência</span>
              <h2>Mais do que um espaço, uma experiência encantadora</h2>

              <p>
                Nosso objetivo é proporcionar uma experiência leve e
                inesquecível, reunindo estrutura, charme e um ambiente preparado
                para aniversários e eventos infantis.
              </p>

              <p>
                Cada detalhe do espaço foi pensado para facilitar a organização
                da festa e tornar o dia ainda mais especial para anfitriões e
                convidados, valorizando cada momento da celebração.
              </p>
            </div>

            <div className="about-story-image">
              <img
                src={aboutImg2}
                alt="Ambiente interno do Espaço Encanto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-diferenciais-section section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">Diferenciais</span>
            <h2>Por que escolher o Espaço Encanto</h2>
            <p>
              Um ambiente preparado para unir conforto, organização e beleza em
              festas cheias de significado.
            </p>
          </div>

          <div className="about-diferenciais-grid">
            {diferenciais.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="about-diferencial-card">
                  <div className="about-diferencial-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-stats-section section">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="about-stat-card">
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section section">
        <div className="container">
          <div className="about-cta-box">
            <span className="section-badge">Seu evento começa aqui</span>
            <h2>Vamos criar uma comemoração linda e inesquecível?</h2>
            <p>
              Conheça melhor o Espaço Encanto e solicite um orçamento para
              planejar sua festa com mais praticidade, conforto e encanto.
            </p>

            <div className="about-cta-actions">
              <Link to="/orcamento" className="btn-primary">
                Solicitar orçamento
              </Link>
              <Link to="/espacos" className="btn-secondary">
                Conhecer nossos espaços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}