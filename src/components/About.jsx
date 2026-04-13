import { Link } from 'react-router-dom'
import aboutImg1 from '../assets/galeria/sobre/sobre-1.webp'
import aboutImg2 from '../assets/galeria/sobre/sobre-2.jpg'

const points = [
  {
    title: 'Ambiente acolhedor',
    text: 'Conforto para crianças, famílias e convidados em um espaço bonito e preparado.',
  },
  {
    title: 'Mais praticidade',
    text: 'Estrutura funcional para tornar a organização da festa mais leve e tranquila.',
  },
  {
    title: 'Momentos especiais',
    text: 'Um cenário encantador para transformar cada comemoração em uma lembrança inesquecível.',
  },
]

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="about-shell">
          <div className="about-grid">
            <div className="about-image-stack">
              <div className="about-image about-image-primary">
                <img src={aboutImg1} alt="Festa infantil no Espaço Encanto" />
              </div>

              <div className="about-image about-image-secondary">
                <img src={aboutImg2} alt="Ambiente decorado do Espaço Encanto" />
              </div>

              <div className="about-image-badge">
                <strong>Espaço completo</strong>
                <span>Beleza, conforto e praticidade para celebrar</span>
              </div>
            </div>

            <div className="about-content">
              <span className="section-badge">Sobre o espaço</span>

              <h2>
                Um lugar encantador para celebrar com beleza, conforto e
                praticidade
              </h2>

              <p>
                O Espaço Encanto foi pensado para receber festas infantis de
                forma acolhedora, organizada e especial, criando um ambiente
                bonito e leve para crianças, famílias e convidados.
              </p>

              <p>
                Cada detalhe do espaço contribui para uma comemoração mais
                tranquila, funcional e memorável, com estrutura preparada para
                valorizar cada momento da celebração.
              </p>

              <div className="about-actions">
                <Link to="/sobre" className="btn-secondary about-btn-secondary">
                  Conhecer mais
                </Link>

                <Link to="/orcamento" className="btn-primary">
                  Solicitar orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}