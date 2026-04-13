const services = [
  {
    number: '01',
    title: 'Aluguel do espaço',
    description:
      'Um ambiente elegante, acolhedor e funcional para realizar festas infantis com conforto, segurança e excelente experiência para todos os convidados.',
  },
  {
    number: '02',
    title: 'Festas temáticas',
    description:
      'O espaço ideal para aniversários personalizados, com atmosfera encantadora e cenários que valorizam cada detalhe da comemoração.',
  },
  {
    number: '03',
    title: 'Experiência para a família',
    description:
      'Mais do que uma festa: oferecemos um ambiente pensado para unir diversão, praticidade e bem-estar para crianças, adultos e toda a família.',
  },
]

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-heading section-heading-center">
          <span className="section-badge">Nossos serviços</span>
          <h2>Tudo o que você precisa para uma comemoração encantadora</h2>
          <p>
            Cada detalhe do espaço foi pensado para oferecer uma experiência
            mais bonita, confortável e tranquila, valorizando o momento e
            tornando a celebração ainda mais especial.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-card-footer">
                <a href="/contato" className="service-link">
                  Solicitar informações
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}