import Seo from '../components/Seo'
import { CalendarDays, Clock3, MapPin, MessageCircleHeart } from 'lucide-react'

const contactHighlights = [
  {
    icon: CalendarDays,
    title: 'Consulta de datas',
    text: 'Veja disponibilidade e encontre o melhor dia para a sua comemoração.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Atendimento próximo',
    text: 'Nossa equipe ajuda você a entender valores, estrutura e possibilidades do evento.',
  },
  {
    icon: Clock3,
    title: 'Planejamento mais leve',
    text: 'Organize sua festa com mais praticidade, clareza e tranquilidade.',
  },
]

export default function Contato() {
  return (
    <main className="contact-page-premium">
      <Seo
        title="Contato | Espaço Encanto"
        description="Solicite um orçamento para festas infantis e eventos especiais no Espaço Encanto."
        keywords="contato festa infantil, orçamento salão de festas, aluguel de espaço infantil"
        url="https://www.espacoencanto.com.br/contato"
      />

      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-shell">
            <div className="contact-hero-header">
              <span className="section-badge">Contato</span>
              <h1>Solicite um orçamento</h1>
              <p>
                Fale com nossa equipe para consultar datas, valores e detalhes
                do seu evento. Vamos te ajudar a planejar uma comemoração linda,
                confortável e inesquecível.
              </p>
            </div>

            <div className="contact-premium-grid">
              <div className="contact-form-card">
                <div className="contact-form-card-header">
                  <h2>Conte pra gente como será sua festa</h2>
                  <p>
                    Preencha os dados abaixo e entraremos em contato com você.
                  </p>
                </div>

                <form className="contact-form-premium">
                  <div className="contact-form-row">
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder="Seu e-mail" />
                  </div>

                  <div className="contact-form-row single">
                    <input type="text" placeholder="Seu telefone" />
                  </div>

                  <div className="contact-form-row single">
                    <textarea
                      rows="7"
                      placeholder="Conte um pouco sobre a sua festa"
                    />
                  </div>

                  <button type="submit" className="btn-primary contact-submit-btn">
                    Enviar contato
                  </button>
                  <div className="contact-quick-actions">
                <a
                  href="https://wa.me/5511970207381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Falar no WhatsApp
                </a>
              </div>
                </form>
              </div>

              <aside className="contact-info-card">
                <div className="contact-info-top">
                  <span className="contact-info-kicker">Atendimento</span>
                  <h3>Um atendimento acolhedor para planejar seu evento</h3>
                  <p>
                    Cada festa é única. Por isso, nosso contato é pensado para
                    entender sua necessidade com atenção e leveza.
                  </p>
                </div>

                <div className="contact-highlights-list">
                  {contactHighlights.map((item) => {
                    const Icon = item.icon

                    return (
                      <article key={item.title} className="contact-highlight-item">
                        <div className="contact-highlight-icon" aria-hidden="true">
                          <Icon size={20} strokeWidth={2.2} />
                        </div>

                        <div className="contact-highlight-text">
                          <strong>{item.title}</strong>
                          <span>{item.text}</span>
                        </div>
                      </article>
                    )
                  })}
                </div>

                <div className="contact-mini-card">
                  <div className="contact-mini-item">
                    <MapPin size={18} strokeWidth={2.1} />
                    <span>São Paulo - SP</span>
                  </div>

                  <div className="contact-mini-item">
                    <MessageCircleHeart size={18} strokeWidth={2.1} />
                    <span>Atendimento com horário agendado</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}