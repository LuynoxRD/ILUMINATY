import { imageAssets } from '@/data/assets'

export interface FollowerCard {
  image: string
  name: string
  handle: string
  date: string
  message: string
}

export const followerTestimonials: FollowerCard[] = [
  {
    image: imageAssets.followers.briarMartin,
    name: 'Briar Martin',
    handle: '@neilstellar',
    date: 'April 20, 2025',
    message: 'Descargué la app y encontré nuevos artistas urbanos en minutos. La experiencia se siente directa y viva.',
  },
  {
    image: imageAssets.followers.averyJohnson,
    name: 'Avery Johnson',
    handle: '@averywrites',
    date: 'May 10, 2025',
    message: 'Seguir a ILUMINATY en Instagram me ayudó a descubrir eventos y lanzamientos antes que en otras plataformas.',
  },
  {
    image: imageAssets.followers.jordanLee,
    name: 'Jordan Lee',
    handle: '@jordantalks',
    date: 'June 5, 2025',
    message: 'La comunidad conecta artistas, fans y promotores de una forma clara. Todo se siente hecho para la escena urbana.',
  },
  {
    image: imageAssets.followers.taylorBrooks,
    name: 'Taylor Brooks',
    handle: '@taylormoves',
    date: 'June 18, 2025',
    message: 'Entre la app y el Instagram, siempre tengo a mano nuevos perfiles, contenido y noticias de la comunidad.',
  },
]
