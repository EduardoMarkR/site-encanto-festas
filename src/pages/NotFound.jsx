import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <main className="page-section">
      <Seo
        title="Página não encontrada | Espaço Encanto"
        description="A página que você tentou acessar não foi encontrada."
        url="https://www.espacoencanto.com.br/"
      />

      <div className="container not-found">
        <h1>404</h1>
        <p>Página não encontrada.</p>
        <Link to="/" className="btn-primary">
          Voltar para a home
        </Link>
      </div>
    </main>
  )
}