import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { posts } from '../data/posts'
import Breadcrumb from '../components/Breadcrumb'

function getReadingTime(content) {
  const text = content.join(' ')
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 180))
  return `${minutes} min de leitura`
}

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main className="page-section">
        <Seo
          title="Post não encontrado | Espaço Encanto"
          description="O conteúdo que você tentou acessar não foi encontrado."
          url="https://www.espacoencanto.com.br/blog"
        />

        <div className="container not-found">
          <h1>Post não encontrado</h1>
          <p>O conteúdo que você tentou acessar não existe.</p>
          <Link to="/blog" className="btn-primary">
            Voltar para o blog
          </Link>
        </div>
      </main>
    )
  }

  const relatedPosts = posts
    .filter(
      (item) => item.slug !== post.slug && item.category === post.category
    )
    .slice(0, 3)

  return (
    <main className="post-page">
      <Seo
        title={`${post.title} | Espaço Encanto`}
        description={post.description}
        keywords={`${post.category.toLowerCase()}, festa infantil, espaço para aniversário infantil`}
        image={post.image}
        url={`https://www.espacoencanto.com.br/blog/${post.slug}`}
      />

      <div className="container">
        <Breadcrumb
          items={[
          { label: 'Blog', to: '/blog' },
          { label: post.title }
        ]}
      />
      
        <article className="post-article">
          <span className="blog-meta">
            {post.category} • {post.date} • {getReadingTime(post.content)}
          </span>

          <h1>{post.title}</h1>
          <p className="post-description">{post.description}</p>

          <img src={post.image} alt={post.title} className="post-image" />

          <div className="post-content">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Link to="/blog" className="service-link">
            ← Voltar para o blog
          </Link>
        </article>

        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="section-heading">
              <span className="section-badge">Posts relacionados</span>
              <h2>Continue explorando</h2>
              <p>
                Outros conteúdos da mesma categoria para ajudar no planejamento
                da sua festa.
              </p>
            </div>

            <div className="blog-list">
              {relatedPosts.map((item) => (
                <article className="blog-card" key={item.slug}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="blog-card-image"
                  />

                  <div className="blog-card-content">
                    <span className="blog-meta">
                      {item.category} • {item.date}
                    </span>

                    <h2>{item.title}</h2>
                    <p>{item.description}</p>

                    <div className="blog-card-footer">
                      <span className="reading-time">
                        {getReadingTime(item.content)}
                      </span>

                      <Link
                        to={`/blog/${item.slug}`}
                        className="service-link"
                      >
                        Ler artigo
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}