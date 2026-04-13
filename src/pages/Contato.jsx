import Seo from '../components/Seo'

export default function Contato() {
  return (
    <main className="page-section">
      <Seo
        title="Contato | Espaço Encanto"
        description="Solicite um orçamento para festas infantis e eventos especiais no Espaço Encanto."
        keywords="contato festa infantil, orçamento salão de festas, aluguel de espaço infantil"
        url="https://www.espacoencanto.com.br/contato"
      />

      <div className="container">
        <div className="page-header">
          <span className="section-badge">Contato</span>
          <h1>Solicite um orçamento</h1>
          <p>
            Fale com nossa equipe para consultar datas, valores e detalhes do
            seu evento.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <input type="text" placeholder="Seu telefone" />
          <textarea rows="6" placeholder="Conte um pouco sobre a sua festa" />
          <button type="submit" className="btn-primary">
            Enviar contato
          </button>
        </form>
      </div>
    </main>
  )
}