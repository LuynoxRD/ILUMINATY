<template>
  <div class="bg-white text-neutral-900 relative overflow-x-clip">
    <!-- Neon Animated Blobs Background (antes en Hero.vue) -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-neon-violet/20 rounded-full mix-blend-color-screen blur-3xl -z-10 animate-float"></div>
    <div class="absolute bottom-20 right-10 w-72 h-72 bg-neon-lime/20 rounded-full mix-blend-color-screen blur-3xl -z-10 animate-float" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full mix-blend-screen blur-3xl -z-10" style="animation: float 4s ease-in-out infinite;"></div>
    <!-- SVG Animation Background -->
    <div class="pointer-events-none select-none absolute inset-0 flex items-center justify-center -z-10">
      <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[800px] h-[800px] animate-[spin_15s_linear_infinite]">
        <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.3"></path>
        <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#grad-outer)" stroke-width="3" stroke-linecap="round"></path>
        <defs><linearGradient id="grad-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
      </svg>
      <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[800px] h-[800px] animate-[spin_20s_linear_infinite_reverse]">
        <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.3"></path>
        <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#grad-inner)" stroke-width="3" stroke-linecap="round"></path>
        <defs><linearGradient id="grad-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
      </svg>
      <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[600px] h-[600px] scale-75 animate-[spin_35s_linear_infinite_reverse]">
        <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.1"></path>
        <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#grad-third)" stroke-width="2" stroke-linecap="round"></path>
        <defs><linearGradient id="grad-third" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
      </svg>
    </div>
    <!-- Hero Section -->
    <Hero />


    <!-- CTA Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-neon opacity-5 -z-10"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center glass rounded-2xl p-12">
        <h2 class="mb-8 text-3xl md:text-4xl font-bold">¿Eres un artista urbano?</h2>
        <p class="text-gray-600 mb-12 text-lg">
          Únete a ILUMINATY y conecta con miles de fans, colaboradores y promotores en Nueva York.
        </p>
        <RouterLink to="/contacto" class="btn-primary mt-6 mb-4">
          Solicitar Acceso
        </RouterLink>
      </div>
    </section>

    <!-- Animated SVG Section -->
    <section class="py-24 relative overflow-hidden bg-gray-50/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- SVG Giratorio -->
          <div class="flex justify-center">
            <div class="relative w-[500px] h-[500px] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_15s_linear_infinite]">
                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.2"></path>
                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#gradient-outer)" stroke-width="2" stroke-linecap="round"></path>
                <defs>
                  <linearGradient id="gradient-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06b6d4"></stop>
                    <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite_reverse]">
                <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.2"></path>
                <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#gradient-inner)" stroke-width="2" stroke-linecap="round"></path>
                <defs>
                  <linearGradient id="gradient-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06b6d4"></stop>
                    <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <div class="relative z-10 w-64 h-auto bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
                <h3 class="text-xl font-bold mb-2">500+ Artistas</h3>
                <p class="text-sm text-gray-300">Conectados y creando arte urbano de clase mundial</p>
              </div>
            </div>
          </div>

          <!-- Contenido -->
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-gray-900">Una Comunidad que Crece</h2>
            <p class="text-lg text-gray-600">
              ILUMINATY es más que una plataforma. Es un movimiento de artistas urbanos, productores y creadores que comparten una visión: democratizar el arte sin límites.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Acceso a oportunidades de booking y colaboraciones</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Herramientas para gestionar tu carrera artística</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Eventos exclusivos y mentorías de expertos</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Visibilidad global para tu arte</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Artistas Destacados -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Artistas Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="relative h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                alt="Lil Flow NYC" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-2xl font-bold mb-1">Lil Flow NYC</h3>
              <p class="text-sm text-gray-200">Rap / Hip-Hop</p>
            </div>
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-300 rounded-2xl pointer-events-none"></div>
          </div>

          <!-- Card 2 -->
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="relative h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop" 
                alt="Mónica Beats" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-2xl font-bold mb-1">Mónica Beats</h3>
              <p class="text-sm text-gray-200">Productora / Beatmaker</p>
            </div>
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-300 rounded-2xl pointer-events-none"></div>
          </div>

          <!-- Card 3 -->
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="relative h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500634148957-331a6199fbc7?w=500&h=500&fit=crop" 
                alt="Grafik Soul" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-2xl font-bold mb-1">Grafik Soul</h3>
              <p class="text-sm text-gray-200">Artista Visual / Pintor</p>
            </div>
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-300 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Hero from '@/components/Hero.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ArtistCard from '@/components/ArtistCard.vue'
import BlogCard from '@/components/BlogCard.vue'
import EventCard from '@/components/EventCard.vue'

interface Artist {
  id: string
  name: string
  genre: string
  bio: string
  image: string
  neighborhoods: string[]
  badge: string
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
  readTime: number
}

interface Event {
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

const featuredArtists = ref<Artist[]>([
  {
    id: '1',
    name: 'King Cipher',
    genre: 'Hip-Hop / Rap',
    bio: 'Rapero veterano de Harlem. Sus líricas crudas sobre la realidad urbana lo han convertido en una leyenda del East Side.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/06165055/nicki-minaj1.jpg',
    neighborhoods: ['Harlem', 'East Side'],
    badge: '🎤',
  },
  {
    id: '2',
    name: 'Luna Vibe Collective',
    genre: 'Electronic / Trip-Hop',
    bio: 'Colectivo de Brooklyn especializado en beats experimentales y soundscapes hipnóticos. Perfecto para sesiones nocturnas.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/06164918/50-cent-biggest-beefs-getty-jordan-darville.jpg',
    neighborhoods: ['Brooklyn', 'Williamsburg'],
    badge: '🎧',
  },
  {
    id: '3',
    name: 'Spray Angel',
    genre: 'Graffiti / Visual Art',
    bio: 'Artista visual de Queens. Sus murales han decorado las paredes más icónicas del bajo Manhattan.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/31121053/DJ-Premier-1536x1180.jpg',
    neighborhoods: ['Queens', 'Manhattan'],
    badge: '🎨',
  },
])

const latestPosts = ref<BlogPost[]>([
  {
    id: '1',
    title: 'King Cipher Anuncia Nuevo Álbum "Concreto Puro"',
    excerpt: 'Tras meses de especulación, el rapero de Harlem revela los detalles de su próxima obra. Un viaje sonoro de 14 tracks que promete redefinir el hip-hop urbano.',
    category: 'Noticias',
    date: '2026-02-12',
    author: 'Marcus Jay',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/06165055/nicki-minaj1.jpg',
    readTime: 5,
  },
  {
    id: '2',
    title: 'La Escena Urbana de NYC Explota en 2026',
    excerpt: 'Con más de 85 eventos confirmados para este año, Nueva York se posiciona como epicentro global del arte urbano. Las entradas para los festivales más esperados ya están agotadas.',
    category: 'Análisis',
    date: '2026-02-10',
    author: 'DJ Remix',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/31121202/Mase.jpg',
    readTime: 7,
  },
  {
    id: '3',
    title: 'Luna Vibe Collective Colabora con Productor Japonés',
    excerpt: 'El colectivo de Brooklyn se une a Takeshi Nakamura para crear una experiencia audiovisual sin precedentes. El proyecto se estrenará en Art Basel Miami Week.',
    category: 'Colaboraciones',
    date: '2026-02-08',
    author: 'Sofia Records',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/31121301/Cappadonna.jpg',
    readTime: 4,
  },
])

const upcomingEvents = ref([
  {
    id: '1',
    title: 'ILUMINATY Sessions: King Cipher Live',
    description: 'Concierto íntimo en el corazón de Manhattan. El rapero interpretará clásicos y adelantos de su nuevo álbum "Concreto Puro".',
    date: '2026-02-28',
    time: '21:00',
    doorsOpen: '20:30',
    venue: 'Bowery Ballroom',
    price: '$45 - $75',
    image: 'https://source.unsplash.com/random/800x600/?concert,stage,lights',
    artists: ['King Cipher', 'DJ Remix'],
    isSoldOut: false,
  },
  {
    id: '2',
    title: 'Brooklyn Neon Festival 2026',
    description: 'Festival de 2 días con 40+ artistas. El evento más importante del año reúne a lo mejor de la escena urbana de NYC.',
    date: '2026-03-15',
    time: '18:00',
    doorsOpen: '17:30',
    venue: 'Prospect Park, Brooklyn',
    price: '$85 - $150',
    image: 'https://source.unsplash.com/random/800x600/?festival,neon,night',
    artists: ['Luna Vibe Collective', 'Spray Angel', 'King Cipher', '+37 más'],
    isSoldOut: true,
  },
])


</script>
