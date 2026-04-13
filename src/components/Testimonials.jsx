const testimonials = [
  {
    name: 'Mariana Souza',
    role: 'Festa de aniversário infantil',
    text: 'O espaço é lindo, organizado e muito acolhedor. A festa do meu filho ficou maravilhosa e todos elogiaram bastante o ambiente.',
  },
  {
    name: 'Carla Mendes',
    role: 'Comemoração em família',
    text: 'Atendimento excelente e ambiente encantador. Foi uma experiência muito mais tranquila do que eu imaginava, do início ao fim.',
  },
  {
    name: 'Juliana Rocha',
    role: 'Evento especial',
    text: 'Gostamos muito da estrutura, da organização e do cuidado com os detalhes. Com certeza escolheríamos o espaço novamente.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading section-heading-center">
          <span className="section-badge">Depoimentos</span>
          <h2>Famílias que celebraram aqui recomendam a experiência</h2>
          <p>
            Cada evento é vivido de forma única, e o carinho de quem já
            comemorou conosco mostra a qualidade da experiência que buscamos
            entregar em cada detalhe.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-header">
                <span className="testimonial-stars">★★★★★</span>
              </div>

              <p className="testimonial-text">“{item.text}”</p>

              <div className="testimonial-footer">
                <strong className="testimonial-name">{item.name}</strong>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}