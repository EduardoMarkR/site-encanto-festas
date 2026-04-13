import Seo from '../components/Seo'

export default function Servicos() {
  return (
    <main className="page-section services-page">
      <Seo
        title="Serviços | Espaço Encanto"
        description="Conheça os serviços do Espaço Encanto para festas infantis, aluguel de espaço e eventos especiais."
        keywords="serviços festa infantil, aluguel de espaço, salão para aniversário, festa temática infantil"
        url="https://www.espacoencanto.com.br/servicos"
      />

      <div className="container">
        <header className="page-header">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-separator">/</li>

              <li className="breadcrumb-item breadcrumb-current">
                Serviços
              </li>
            </ol>
          </nav>

          <span className="section-badge">Serviços</span>

          <h1>Estrutura completa para festas infantis</h1>

          <p>
            Conheça os principais serviços e diferenciais do nosso espaço para
            eventos.
          </p>
        </header>

        <div className="page-cards">
          <article className="service-card">
            <div className="service-card-body">
              <h3>Aluguel do espaço</h3>
              <p>
                Ambiente confortável, organizado e ideal para aniversários
                infantis e comemorações especiais.
              </p>
            </div>
          </article>

          <article className="service-card">
            <div className="service-card-body">
              <h3>Eventos temáticos</h3>
              <p>
                Perfeito para festas personalizadas com decoração especial e clima
                encantador.
              </p>
            </div>
          </article>

          <article className="service-card">
            <div className="service-card-body">
              <h3>Conforto para a família</h3>
              <p>
                Um lugar agradável para crianças, pais e convidados aproveitarem
                cada momento.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}