import Seo from '../components/Seo'
import Breadcrumb from '../components/Breadcrumb'

import espaco1 from '../assets/galeria/espacos/espaco-1.jpg'
import espaco2 from '../assets/galeria/espacos/espaco-2.jpg'
import espaco3 from '../assets/galeria/espacos/espaco-3.jpg'
import espaco4 from '../assets/galeria/espacos/espaco-4.jpg'
import espaco5 from '../assets/galeria/espacos/espaco-5.jpg'

const spaces = [
  {
    id: 1,
    name: 'Espaço Encanto Mooca',
    address: 'Rua dos Sonhos, 120 - Mooca, São Paulo - SP',
    phone: '(11) 97020-7381',
    whatsapp: '5511970207381',
    capacity: 'Até 120 convidados',
    hours: 'Seg a Sáb, das 9h às 19h',
    image: espaco1,
    highlights: [
      'Área kids integrada',
      'Espaço climatizado',
      'Ambiente para decoração temática',
    ],
    map:
      'https://www.google.com/maps?q=Rua%20da%20Mooca%2C%20S%C3%A3o%20Paulo&output=embed',
  },
  {
    id: 2,
    name: 'Espaço Encanto Tatuapé',
    address: 'Rua Alegre, 245 - Tatuapé, São Paulo - SP',
    phone: '(11) 97020-7382',
    whatsapp: '5511970207382',
    capacity: 'Até 100 convidados',
    hours: 'Seg a Sáb, das 9h às 19h',
    image: espaco2,
    highlights: [
      'Salão versátil',
      'Excelente localização',
      'Ambiente acolhedor para famílias',
    ],
    map:
      'https://www.google.com/maps?q=Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo&output=embed',
  },
  {
    id: 3,
    name: 'Espaço Encanto Santana',
    address: 'Av. Encantada, 88 - Santana, São Paulo - SP',
    phone: '(11) 97020-7383',
    whatsapp: '5511970207383',
    capacity: 'Até 140 convidados',
    hours: 'Seg a Sáb, das 9h às 20h',
    image: espaco3,
    highlights: [
      'Espaço amplo',
      'Ideal para grandes comemorações',
      'Estrutura elegante e funcional',
    ],
    map:
      'https://www.google.com/maps?q=Santana%2C%20S%C3%A3o%20Paulo&output=embed',
  },
  {
    id: 4,
    name: 'Espaço Encanto Santo André',
    address: 'Rua das Flores, 310 - Centro, Santo André - SP',
    phone: '(11) 97020-7384',
    whatsapp: '5511970207384',
    capacity: 'Até 110 convidados',
    hours: 'Seg a Sáb, das 9h às 19h',
    image: espaco4,
    highlights: [
      'Decoração com ótimo impacto visual',
      'Estrutura pronta para buffet',
      'Espaço confortável para adultos e crianças',
    ],
    map:
      'https://www.google.com/maps?q=Centro%20Santo%20Andr%C3%A9%20SP&output=embed',
  },
  {
    id: 5,
    name: 'Espaço Encanto Osasco',
    address: 'Av. das Crianças, 455 - Centro, Osasco - SP',
    phone: '(11) 97020-7385',
    whatsapp: '5511970207385',
    capacity: 'Até 90 convidados',
    hours: 'Seg a Sáb, das 9h às 18h',
    image: espaco5,
    highlights: [
      'Unidade compacta e charmosa',
      'Ótima para festas intimistas',
      'Atendimento personalizado',
    ],
    map:
      'https://www.google.com/maps?q=Centro%20Osasco%20SP&output=embed',
  },
]

export default function Espacos() {
  return (
    <main className="page-section">
      <Seo
        title="Conheça nossos espaços | Espaço Encanto"
        description="Conheça nossas unidades para festas infantis, com endereço, telefone, mapa e diferenciais de cada espaço."
        keywords="espaços para festas infantis, unidades, salão de festas, endereços, mapa, capacidade"
        url="https://www.espacoencanto.com.br/espacos"
      />

      <div className="container">
        <Breadcrumb items={[{ label: 'Conheça nossos espaços' }]} />

        <div className="page-header">
          <span className="section-badge">Nossas unidades</span>
          <h1>Conheça nossos espaços</h1>
          <p>
            Encontre a unidade ideal para sua festa infantil. Veja endereço,
            telefone, mapa e os principais diferenciais de cada espaço.
          </p>
        </div>

        <div className="spaces-list">
          {spaces.map((space) => (
            <section className="space-card-v2" key={space.id}>
              <div className="space-card-v2-image">
                <img src={space.image} alt={space.name} />
              </div>

              <div className="space-card-v2-content">
                <div className="space-card-v2-top">
                  <span className="space-label">Unidade {space.id}</span>
                  <h2>{space.name}</h2>
                  <p className="space-address">{space.address}</p>
                  <p className="space-phone">Telefone: {space.phone}</p>
                </div>

                <div className="space-meta-grid">
                  <div className="space-meta-item">
                    <strong>Capacidade</strong>
                    <span>{space.capacity}</span>
                  </div>

                  <div className="space-meta-item">
                    <strong>Atendimento</strong>
                    <span>{space.hours}</span>
                  </div>
                </div>

                <div className="space-highlights">
                  {space.highlights.map((highlight) => (
                    <span className="space-highlight-tag" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="space-actions">
                  <a
                    href={`https://wa.me/${space.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Falar no WhatsApp
                  </a>

                  <a
                    href={space.map.replace('&output=embed', '')}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    Abrir no mapa
                  </a>
                </div>
              </div>

              <div className="space-map">
                <iframe
                  src={space.map}
                  title={space.name}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}