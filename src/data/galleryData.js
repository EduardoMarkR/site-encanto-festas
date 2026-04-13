import decoracao1 from '../assets/galeria/decoracao/decoracao-1.jpg'
import decoracao2 from '../assets/galeria/decoracao/decoracao-2.png'
import decoracao3 from '../assets/galeria/decoracao/decoracao-3.jpg'

import convidados1 from '../assets/galeria/convidados/convidados-1.webp'
import convidados2 from '../assets/galeria/convidados/convidados-2.jpg'

import infantil1 from '../assets/galeria/infantil/infantil-1.jpg'
import infantil2 from '../assets/galeria/infantil/infantil-2.jpg'

import mesa1 from '../assets/galeria/mesa/mesa-1.png'
import mesa2 from '../assets/galeria/mesa/mesa-2.jpg'

export const galleryData = [
  {
    title: 'Decoração encantadora',
    subtitle: 'Cenários temáticos pensados para surpreender em cada detalhe',
    cover: decoracao1,
    images: [
      { src: decoracao1 },
      { src: decoracao2 },
      { src: decoracao3 },
    ],
  },
  {
    title: 'Espaço para receber com conforto',
    subtitle: 'Ambientes acolhedores para famílias e convidados aproveitarem cada momento',
    cover: convidados1,
    images: [
      { src: convidados1 },
      { src: convidados2 },
    ],
  },
  {
    title: 'Universo infantil',
    subtitle: 'Um ambiente leve, divertido e preparado para a alegria das crianças',
    cover: infantil1,
    images: [
      { src: infantil1 },
      { src: infantil2 },
    ],
  },
  {
    title: 'Mesa principal em destaque',
    subtitle: 'Composições que valorizam a decoração e tornam a festa ainda mais especial',
    cover: mesa1,
    images: [
      { src: mesa1 },
      { src: mesa2 },
    ],
  },
]