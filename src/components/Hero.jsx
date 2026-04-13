import heroBg from '../assets/hero-festa.png'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(18, 12, 17, 0.70) 0%, rgba(18, 12, 17, 0.46) 42%, rgba(18, 12, 17, 0.18) 100%), url(${heroBg})`,
      }}
    >
      <div className="hero-overlay">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">
              Eventos infantis com charme, conforto e estrutura completa
            </span>

            <h1>
              O cenário perfeito para festas infantis
              <span> inesquecíveis</span>
            </h1>

            <p className="hero-description">
              Um espaço encantador para celebrar grandes momentos com leveza,
              beleza e praticidade. Criamos o ambiente ideal para que crianças,
              famílias e convidados vivam uma experiência especial do começo ao fim.
            </p>

            <div className="hero-buttons">
              <a href="/contato" className="btn-primary">
                Solicitar orçamento
              </a>

              <a href="/galeria" className="btn-secondary">
                Ver galeria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}