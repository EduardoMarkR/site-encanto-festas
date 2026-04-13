import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Galeria from './pages/Galeria'
import Espacos from './pages/Espacos'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'



export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/espacos" element={<Espacos />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}