import { Link } from 'react-router-dom'
import { PartyPopper, Sparkles, HeartHandshake } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <PartyPopper size={28} strokeWidth={2.2} />,
      title: 'Aluguel do espaço',
      description:
        'Um ambiente elegante, acolhedor e funcional para realizar festas infantis com conforto, segurança e excelente experiência para todos os convidados.',
      link: '/contato',
    },
    {
      icon: <Sparkles size={28} strokeWidth={2.2} />,
      title: 'Festas temáticas',
      description:
        'O espaço ideal para aniversários personalizados, com atmosfera encantadora e cenários que valorizam cada detalhe da comemoração.',
      link: '/contato',
    },
    {
      icon: <HeartHandshake size={28} strokeWidth={2.2} />,
      title: 'Experiência para a família',
      description:
        'Mais do que uma festa: oferecemos um ambiente pensado para unir diversão, praticidade e bem-estar para crianças, adultos e toda a família.',
      link: '/contato',
    },
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="section-heading section-heading-center">
          <span className="section-badge">Nossos serviços</span>
          <h2>Tudo o que você precisa para uma comemoração encantadora</h2>
          <p>
            Cada detalhe do espaço foi pensado para oferecer uma experiência mais bonita,
            confortável e tranquila, valorizando o momento e tornando a celebração ainda
            mais especial.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-card-footer">
                <Link to={service.link} className="service-link">
                  Solicitar informações
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}