export default function Cta() {
  return (
    <section className="cta" id="contato">
      <div className="container">
        <div className="cta-box">
          <div className="cta-text">
            <span className="section-badge">Reserve sua data</span>
            <h2>Vamos criar uma festa infantil linda, leve e inesquecível?</h2>
            <p>
              Conheça o espaço, tire suas dúvidas e receba um orçamento
              personalizado para planejar uma celebração especial com mais
              conforto, encanto e praticidade.
            </p>
          </div>

          <div className="cta-actions">
            <a
              href="https://wa.me/5511970207381"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>

            <a href="/contato" className="btn-secondary">
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}