import { imageAssets } from '@/data/assets'

export interface EventEntry {
  id: string
  title: string
  description: string
  date: string
  time: string
  doorsOpen: string
  venue: string
  price: string
  image: string
  artists: string[]
  isSoldOut: boolean
}

export const eventEntries: EventEntry[] = [
  {
    id: '1',
    title: 'ILUMINATY Sessions: King Cipher Live',
    description: 'Concierto íntimo en el corazón de Manhattan. King Cipher presenta clásicos y adelantos de Concreto Puro.',
    date: '2026-02-28',
    time: '21:00',
    doorsOpen: '20:30',
    venue: 'Bowery Ballroom',
    price: '$45 - $75',
    image: imageAssets.events.kingCipherLive,
    artists: ['King Cipher', 'DJ Remix'],
    isSoldOut: false,
  },
  {
    id: '2',
    title: 'Brooklyn Neon Festival 2026',
    description: 'Festival de dos días con más de 40 artistas. Una radiografía completa de la escena urbana del año.',
    date: '2026-03-15',
    time: '18:00',
    doorsOpen: '17:30',
    venue: 'Prospect Park',
    price: '$85 - $150',
    image: imageAssets.events.brooklynNeonFestival,
    artists: ['Luna Vibe Collective', 'Spray Angel', 'King Cipher', '+37 más'],
    isSoldOut: true,
  },
  {
    id: '3',
    title: 'Soul Maya - Album Release Show',
    description: 'Soul Maya presenta Midnight Whispers con banda en vivo y dirección visual extendida.',
    date: '2026-03-22',
    time: '20:00',
    doorsOpen: '19:15',
    venue: 'Terminal 5',
    price: '$40 - $85',
    image: imageAssets.events.soulMayaRelease,
    artists: ['Soul Maya', 'Strings Arranged by NYC Philharmonic'],
    isSoldOut: false,
  },
  {
    id: '4',
    title: 'Luna Vibe Collective - Midnight Sessions',
    description: 'Experiencia audiovisual inmersiva con beatmakers y visualistas creando durante seis horas.',
    date: '2026-03-08',
    time: '22:00',
    doorsOpen: '21:30',
    venue: 'Music Hall of Williamsburg',
    price: '$35 - $60',
    image: imageAssets.events.lunaVibeMidnight,
    artists: ['Luna Vibe Collective'],
    isSoldOut: false,
  },
  {
    id: '5',
    title: 'Spray Angel - Street Art Workshop + Gallery',
    description: 'Taller interactivo para aprender técnicas de graffiti y cerrar con una exhibición abierta.',
    date: '2026-02-22',
    time: '14:00',
    doorsOpen: '13:45',
    venue: 'Hammerstein Ballroom',
    price: '$25 - $50',
    image: imageAssets.events.sprayAngelWorkshop,
    artists: ['Spray Angel'],
    isSoldOut: false,
  },
  {
    id: '6',
    title: 'East Village Cypher Battles 2026',
    description: 'Competencia de freestyle y producción en vivo entre MCs y beatmakers de la ciudad.',
    date: '2026-04-05',
    time: '18:00',
    doorsOpen: '17:00',
    venue: 'Bowery Ballroom',
    price: 'Free - $15',
    image: imageAssets.events.cypherBattles,
    artists: ['Street Poets Network'],
    isSoldOut: false,
  },
  {
    id: '7',
    title: 'Reggaeton Fuego - Album Release Party',
    description: 'Fiesta de lanzamiento con DJ set extendido, visuales y una noche completa de baile.',
    date: '2026-04-12',
    time: '22:00',
    doorsOpen: '21:30',
    venue: 'Music Hall of Williamsburg',
    price: '$30 - $70',
    image: imageAssets.events.reggaetonFuegoParty,
    artists: ['Reggaeton Fuego', 'DJ Mambo'],
    isSoldOut: false,
  },
  {
    id: '8',
    title: 'NYC Underground Producers Symposium',
    description: 'Conferencia, paneles y networking con productores de alto nivel y gestores de la escena.',
    date: '2026-04-20',
    time: '09:00',
    doorsOpen: '08:30',
    venue: 'Hammerstein Ballroom',
    price: '$99 - $199',
    image: imageAssets.events.producersSymposium,
    artists: ['Industry Leaders'],
    isSoldOut: false,
  },
  {
    id: '9',
    title: 'Techno Prophet - All Night Set',
    description: 'Un viaje nocturno de ocho horas desde el atardecer hasta el cierre del club.',
    date: '2026-05-03',
    time: '20:00',
    doorsOpen: '19:30',
    venue: 'Terminal 5',
    price: '$40 - $85',
    image: imageAssets.events.technoProphetSet,
    artists: ['Techno Prophet'],
    isSoldOut: false,
  },
]
