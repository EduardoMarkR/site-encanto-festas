import { Helmet } from 'react-helmet-async'

export default function Seo({
  title,
  description,
  keywords = '',
  image = 'https://www.espacoencanto.com.br/og-default.jpg',
  url = 'https://www.espacoencanto.com.br',
  type = 'website',
  author = 'Espaço Encanto',
  robots = 'index, follow',
}) {
  const siteName = 'Espaço Encanto'
  const locale = 'pt_BR'

  return (
    <Helmet>
      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Extras úteis */}
      <meta name="theme-color" content="#f44f9c" />
    </Helmet>
  )
}