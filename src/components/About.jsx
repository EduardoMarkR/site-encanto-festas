import aboutImg1 from '../assets/galeria/sobre/sobre-1.webp'
import aboutImg2 from '../assets/galeria/sobre/sobre-2.jpg'

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-shell">
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutImg1} alt="Festa infantil no espaço" />

              <img
                src={aboutImg2}
                alt="Ambiente do espaço"
                className="about-image-secondary"
              />
            </div>

            <div className="about-content">
              <span className="section-badge">Sobre o espaço</span>

              <h2>Um lugar encantador para celebrar com beleza, conforto e praticidade</h2>

              <p>
                O Espaço Encanto foi pensado para receber festas infantis de forma
                acolhedora, organizada e especial, criando um ambiente bonito e
                leve para crianças, famílias e convidados.
              </p>

              <p>
                Cada detalhe do espaço contribui para uma comemoração mais
                tranquila, funcional e memorável, com estrutura preparada para
                valorizar cada momento da celebração.
              </p>

              <div className="about-points">
                <article className="about-point">
                  <strong>Ambiente acolhedor</strong>
                  <span>Conforto para crianças, famílias e convidados.</span>
                </article>

                <article className="about-point">
                  <strong>Mais praticidade</strong>
                  <span>Um espaço bonito e funcional para comemorar com tranquilidade.</span>
                </article>
              </div>

              <div className="about-actions">
                <a href="/sobre" className="btn-secondary about-btn-secondary">
                  Conhecer mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}