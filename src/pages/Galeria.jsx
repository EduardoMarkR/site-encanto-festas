import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import { useState } from 'react'
import { galleryData } from '../data/galleryData'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

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
    <section className="page-section gallery-page">
      <div className="container">
        
    <header className="page-header gallery-page-header">

        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
            <a href="/">Home</a>
            </li>

            <li className="breadcrumb-separator">/</li>

            <li className="breadcrumb-item breadcrumb-current">
            Galeria
            </li>
            </ol>
        </nav>

        <span className="section-badge">Galeria</span>

        <h1>Veja um pouco do nosso espaço</h1>

        <p>
            Ambientes reais preparados para receber festas lindas,
            acolhedoras e cheias de alegria.
        </p>

    </header>

        <div className="gallery-page-grid">
          {galleryData.map((category) => (
            <article
              className="gallery-airbnb-card"
              key={category.title}
              onClick={() => openCategoryGallery(category, 0)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openCategoryGallery(category, 0)
                }
              }}
              aria-label={`Abrir galeria da categoria ${category.title}`}
            >
              <div className="gallery-airbnb-image-wrap">
                <img src={category.cover} alt={category.title} />
                <div className="gallery-airbnb-overlay">
                  <span className="gallery-airbnb-tag">Ver fotos</span>
                </div>
              </div>

              <div className="gallery-airbnb-content">
                <div className="gallery-airbnb-text">
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>

                <span className="gallery-airbnb-count">
                  {category.images.length} foto
                  {category.images.length > 1 ? 's' : ''}
                </span>
              </div>
            </article>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
          plugins={[Thumbnails]}
        />
      </div>
    </section>
  )
}