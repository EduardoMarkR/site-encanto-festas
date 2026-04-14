export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand-column">
              <div className="footer-logo">
                <div className="logo-mark">E</div>
                <div className="logo-text-wrap">
                  <strong>Espaço Encanto</strong>
                  <small>Festas infantis</small>
                </div>
              </div>

              <p className="footer-description">
                Um espaço preparado para transformar aniversários em experiências
                inesquecíveis, com conforto, charme e praticidade para toda a
                família.
              </p>
            </div>

            <div className="footer-right">
              <div className="footer-links-column">
                <h3>Navegação</h3>
                <nav className="footer-nav">
                  <a href="/">Home</a>
                  <a href="/sobre">Sobre</a>
                  <a href="/servicos">Serviços</a>
                  <a href="/galeria">Galeria</a>
                  <a href="/blog">Blog</a>
                </nav>
              </div>

              <div className="footer-contact-column">
                <h3>Contato</h3>
                <div className="footer-contact-list">
                  <div className="footer-contact-item">WhatsApp: (11) 97020-7381</div>
                  <div className="footer-contact-item">São Paulo - SP</div>
                  <div className="footer-contact-item">Atendimento com horário agendado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}