import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Seo from '../components/Seo'
import { galleryData } from '../data/galleryData'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

export default function GalleryPage() {
  const [open, setOpen] = useState(false)
  const [slides, setSlides] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCategoryGallery = (category, startIndex = 0) => {
    setSlides(category.images)
    setCurrentIndex(startIndex)
    setOpen(true)
  }

  return (
    <main className="gallery-page gallery-page-premium">
      <Seo
        title="Galeria | Espaço Encanto"
        description="Conheça a galeria do Espaço Encanto e veja ambientes, decorações e momentos especiais das nossas festas infantis."
        keywords="galeria festa infantil, decoração festa infantil, espaço para festas, fotos de festas infantis"
        url="https://www.espacoencanto.com.br/galeria"
      />

      <section className="gallery-hero-premium">
        <div className="container">
          <header className="page-header page-header-full gallery-page-header">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>

                <li className="breadcrumb-separator">/</li>

                <li className="breadcrumb-item breadcrumb-current">Galeria</li>
              </ol>
            </nav>

            <span className="section-badge">Galeria</span>

            <div className="gallery-hero-premium-content">
              <h1>Veja um pouco do nosso espaço</h1>

              <p>
                Ambientes reais preparados para receber festas lindas,
                acolhedoras e cheias de alegria, com detalhes que tornam cada
                comemoração ainda mais especial.
              </p>
            </div>
          </header>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <motion.div
            className="gallery-premium-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {galleryData.map((category, index) => (
              <motion.article
                className="gallery-premium-card"
                key={category.title}
                variants={itemVariants}
              >
                <button
                  type="button"
                  className="gallery-premium-card-button"
                  onClick={() => openCategoryGallery(category, 0)}
                  aria-label={`Abrir galeria da categoria ${category.title}`}
                >
                  <div className="gallery-premium-image-wrap">
                    <img src={category.cover} alt={category.title} />
                  </div>

                  <div className="gallery-premium-overlay">
                    <span className="gallery-premium-tag">Ver fotos</span>

                    <div className="gallery-premium-text">
                      <h3>{category.title}</h3>
                      <p>{category.subtitle}</p>
                    </div>

                    <span className="gallery-premium-count">
                      {category.images.length} foto
                      {category.images.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="gallery-cta-premium-section">
        <div className="container">
          <motion.div
            className="gallery-cta-premium-box"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="section-badge">Seu evento pode ser o próximo</span>
            <h2>Vamos criar uma festa linda e inesquecível?</h2>
            <p>
              Fale com a nossa equipe e descubra como transformar sua ideia em
              uma comemoração especial no Espaço Encanto.
            </p>

            <div className="gallery-cta-premium-actions">
              <Link to="/orcamento" className="btn-primary">
                Solicitar orçamento
              </Link>

              <Link to="/servicos" className="btn-secondary">
                Ver serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Thumbnails]}
      />
    </main>
  )
}