import Seo from '../components/Seo'

export default function Sobre() {
  return (
    <main className="page-section about-page">
      <Seo
        title="Sobre o Espaço Encanto"
        description="Conheça o Espaço Encanto, um ambiente preparado para festas infantis com conforto, beleza e praticidade."
        keywords="sobre salão de festas, espaço infantil, festas para crianças, aluguel de espaço infantil"
        url="https://www.espacoencanto.com.br/sobre"
      />

      <div className="container">
        <header className="page-header">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-separator">/</li>
              <li className="breadcrumb-item breadcrumb-current">Sobre</li>
            </ol>
          </nav>

          <span className="section-badge">Sobre nós</span>

          <h1>Um espaço pensado para festas infantis memoráveis</h1>

          <p>
            O Espaço Encanto foi criado para oferecer conforto, beleza e
            praticidade em comemorações especiais, com ambiente acolhedor para
            crianças e famílias.
          </p>
        </header>

        <div className="page-content">
          <p>
            Nosso objetivo é proporcionar uma experiência leve e inesquecível,
            reunindo estrutura, charme e um ambiente preparado para aniversários
            e eventos infantis.
          </p>

          <p>
            Cada detalhe do espaço foi pensado para facilitar a organização da
            festa e tornar o dia ainda mais especial para anfitriões e
            convidados.
          </p>
        </div>
      </div>
    </main>
  )
}