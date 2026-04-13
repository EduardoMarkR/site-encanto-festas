
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { posts } from '../data/posts'
import Breadcrumb from '../components/Breadcrumb'   

function getReadingTime(content) {
  const text = content.join(' ')
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 180))
  return `${minutes} min de leitura`
}

export default function Blog() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(posts.map((post) => post.category))]
    return ['Todos', ...uniqueCategories]
  }, [])

  const featuredPost = posts.find((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'Todos' || post.category === selectedCategory

    const term = search.toLowerCase().trim()

    const matchesSearch =
      term === '' ||
      post.title.toLowerCase().includes(term) ||
      post.description.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)

    return matchesCategory && matchesSearch
  })

  return (
    <main className="page-section">
      <Seo
        title="Blog | Espaço Encanto"
        description="Dicas, inspirações e conteúdos para ajudar na organização de festas infantis inesquecíveis."
        keywords="blog festa infantil, dicas de aniversário infantil, organização de festas infantis"
        url="https://www.espacoencanto.com.br/blog"
      />

        <div className="container">
            <Breadcrumb
                items={[
                    { label: 'Blog' }
                ]}
        />

            <div className="page-header">
            <span className="section-badge">Blog</span>
            <h1>Dicas, inspirações e conteúdos para festas infantis</h1>
            <p>
                Um blog pensado para ajudar famílias a organizarem eventos mais
                bonitos, leves e bem planejados.
            </p>
            </div>

        {featuredPost && (
          <article className="featured-post">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="featured-post-image"
            />

            <div className="featured-post-content">
              <span className="blog-meta">
                Destaque • {featuredPost.category} • {featuredPost.date}
              </span>

              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.description}</p>

              <div className="featured-post-footer">
                <span className="reading-time">
                  {getReadingTime(featuredPost.content)}
                </span>

                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary">
                  Ler destaque
                </Link>
              </div>
            </div>
          </article>
        )}

        <div className="blog-toolbar">
          <div className="blog-search">
            <input
              type="text"
              placeholder="Buscar artigo por título, tema ou categoria..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="blog-tags">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? 'blog-tag active'
                    : 'blog-tag'
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="blog-results-count">
            {filteredPosts.length} artigo
            {filteredPosts.length !== 1 ? 's encontrados' : ' encontrado'}
          </p>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="blog-list">
            {filteredPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />

                <div className="blog-card-content">
                  <span className="blog-meta">
                    {post.category} • {post.date}
                  </span>

                  <h2>{post.title}</h2>
                  <p>{post.description}</p>

                  <div className="blog-card-footer">
                    <span className="reading-time">
                      {getReadingTime(post.content)}
                    </span>

                    <Link to={`/blog/${post.slug}`} className="service-link">
                      Ler artigo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <h2>Nenhum artigo encontrado</h2>
            <p>
              Tente buscar outro termo ou selecione uma categoria diferente.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}