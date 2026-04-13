export default function About() {
  return (
    <section className="about">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
            alt="Espaço preparado para festas infantis"
          />
        </div>

        <div className="about-content">
          <span className="section-badge">Sobre o espaço</span>

          <h2>Um lugar pensado para celebrar com beleza, conforto e praticidade</h2>

          <p>
            Nosso espaço foi criado para receber festas infantis com uma proposta
            acolhedora, encantadora e funcional. Aqui, cada ambiente contribui
            para uma comemoração mais leve, bonita e especial.
          </p>

          <p>
            Mais do que oferecer estrutura, buscamos proporcionar uma
            experiência completa para crianças, famílias e convidados, com
            conforto, organização e um cenário que valoriza cada momento da
            celebração.
          </p>

          <div className="about-highlights">
            <article className="about-highlight">
              <strong>Ambiente seguro e acolhedor</strong>
              <span>
                Estrutura pensada para receber crianças e adultos com mais
                conforto e tranquilidade.
              </span>
            </article>

            <article className="about-highlight">
              <strong>Visual encantador</strong>
              <span>
                Um espaço que combina charme, leveza e cenários ideais para
                festas temáticas e aniversários especiais.
              </span>
            </article>

            <article className="about-highlight">
              <strong>Experiência mais prática</strong>
              <span>
                Organização, beleza e funcionalidade para que a comemoração seja
                aproveitada com mais tranquilidade.
              </span>
            </article>
          </div>

          <div className="about-actions">
            <a href="/contato" className="btn-primary">
              Agendar visita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}