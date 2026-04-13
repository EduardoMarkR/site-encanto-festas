import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo">
          <div className="logo-mark">E</div>
          <div className="logo-text-wrap">
            <strong>Espaço Encanto</strong>
            <small>Festas infantis</small>
          </div>
        </Link>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/espacos">Conheça nossos espaços</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contato" className="btn-nav">
            Orçamento
          </Link>
        </nav>
      </div>
    </header>
  )
}