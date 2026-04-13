import { Helmet } from 'react-helmet-async'

export default function Seo({
  title,
  description,
  keywords = '',
  image = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  url = 'https://www.espacoencanto.com.br',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Espaço Encanto" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}