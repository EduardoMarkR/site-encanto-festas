import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import { galleryData } from '../data/galleryData'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [slides, setSlides] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCategoryGallery = (category, startIndex = 0) => {
    setSlides(category.images)
    setCurrentIndex(startIndex)
    setOpen(true)
  }

  return (
    <section className="gallery gallery-home" id="galeria">
      <div className="container">
        <div className="section-heading section-heading-center">
          <span className="section-badge">Nossa galeria</span>
          <h2>Ambientes que inspiram celebrações inesquecíveis</h2>
          <p>
            Conheça alguns dos cenários, composições e detalhes que tornam cada
            evento mais bonito, acolhedor e memorável para crianças e famílias.
          </p>
        </div>

        <div className="gallery-airbnb-grid">
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

        <div className="gallery-footer-action">
          <Link to="/galeria" className="btn-secondary">
            Explorar galeria completa
          </Link>
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