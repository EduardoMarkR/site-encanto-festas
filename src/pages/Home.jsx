import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'

export default function Home() {
  return (
    <>
      <Seo
        title="Espaço Encanto | Festas infantis e aluguel de espaço"
        description="Espaço para festas infantis com ambiente encantador, estrutura completa e experiência inesquecível para toda a família."
        keywords="festa infantil, aluguel de espaço, salão de festas infantil, aniversário infantil, espaço para eventos"
        url="https://www.espacoencanto.com.br/"
      />

      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Cta />
    </>
  )
}