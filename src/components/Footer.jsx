export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-mark">E</div>
            <div className="logo-text-wrap">
              <strong>Espaço Encanto</strong>
              <small>Festas infantis</small>
            </div>
          </div>

          <p>
            Um espaço preparado para transformar aniversários em experiências
            inesquecíveis, com conforto, charme e praticidade para toda a
            família.
          </p>
        </div>

        <div className="footer-column">
          <strong>Navegação</strong>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/servicos">Serviços</a>
          <a href="/galeria">Galeria</a>
          <a href="/blog">Blog</a>
        </div>

        <div className="footer-column">
          <strong>Contato</strong>
          <p>WhatsApp: (11) 97020-7381</p>
          <p>São Paulo - SP</p>
          <p>Atendimento com horário agendado</p>
        </div>
      </div>
    </footer>
  )
}