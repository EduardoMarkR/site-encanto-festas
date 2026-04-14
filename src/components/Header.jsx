import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleCloseMenu = () => setMenuOpen(false)

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo" onClick={handleCloseMenu}>
          <div className="logo-mark">E</div>
          <div className="logo-text-wrap">
            <strong>Espaço Encanto</strong>
            <small>Festas infantis</small>
          </div>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="main-menu" className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleCloseMenu}>
            Home
          </Link>

          <Link to="/sobre" onClick={handleCloseMenu}>
            Sobre
          </Link>

          <Link to="/servicos" onClick={handleCloseMenu}>
            Serviços
          </Link>

          <Link to="/galeria" onClick={handleCloseMenu}>
            Galeria
          </Link>

          <Link to="/espacos" onClick={handleCloseMenu}>
            Conheça nossos espaços
          </Link>

          <Link to="/blog" onClick={handleCloseMenu}>
            Blog
          </Link>

          <Link to="/contato" className="btn-nav" onClick={handleCloseMenu}>
            Orçamento
          </Link>
        </nav>
      </div>
    </header>
  )
}