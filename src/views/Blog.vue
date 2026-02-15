<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="py-20 bg-gradient-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 -z-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-neon-lime/20 rounded-full blur-3xl"></div>
      </div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h1 class="mb-4 text-black text-4xl md:text-5xl font-bold">Blog Ilumitaty</h1>
  <p class="text-black-100 max-w-2xl mx-auto text-lg">
          Historias, tendencias y perspectivas del arte urbano de Nueva York. Descubre las voces que están transformando la escena.
        </p>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RouterLink
            v-for="post in posts"
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="block"
          >
            <article class="glass rounded-xl overflow-hidden card-hover flex flex-col h-full transition-transform duration-300 hover:scale-105">
              <!-- Post Image -->
              <div class="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              <!-- Post Content -->
              <div class="p-6 flex-1 flex flex-col">
                <!-- Category Badge -->
                <div class="mb-3">
                  <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold" :class="getCategoryColor(post.category)">
                    {{ post.category }}
                  </span>
                </div>

                <!-- Title -->
                <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-neon-lime transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>

                <!-- Excerpt -->
                <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {{ post.excerpt }}
                </p>

                <!-- Meta -->
                <div class="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-4">
                  <div class="flex items-center gap-2">
                    <span>✍️ {{ post.author }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span>📅 {{ formatDate(post.date) }}</span>
                  </div>
                </div>
                <div class="text-xs text-gray-500 mt-2">
                  ⏱️ {{ post.readTime }} min lectura
                </div>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>

  <!-- Newsletter Subscription -->
<section class="py-20 bg-gradient-dark">
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-gray mb-4">Suscríbete al Blog</h2>
    <p class="text-gray-500 mb-8">
      Recibe las últimas historias, análisis y tendencias del arte urbano directamente en tu inbox.
    </p>
    <div class="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Tu email"
        class="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-gray/20 focus:border-neon-lime outline-none transition-colors"
      />
      <button class="btn-primary whitespace-nowrap">
        Suscribirse
      </button>
    </div>
  </div>
</section>
<!-- Asegúrate que después de esto esté el </div> que cierra <div class="bg-white"> -->
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: 'Noticias' | 'Análisis' | 'Tutoriales' | 'Entrevistas' | 'Tendencias'
  date: string
  author: string
  image: string
  readTime: number
}

const posts = ref<BlogPost[]>([
  {
    id: '1',
    title: 'King Cipher Anuncia Nuevo Álbum "Concreto Puro"',
    excerpt: 'Tras meses de especulación, el rapero de Harlem revela los detalles de su próxima obra maestra. Un viaje sonoro de 14 tracks que promete redefinir el hip-hop urbano contemporáneo.',
    category: 'Noticias',
    date: '2026-02-12',
    author: 'Marcus Jay',
    image: 'https://musicgenreslist.com/music/wp-content/uploads/hip-hop.jpeg',
    readTime: 5,
  },
  {
    id: '2',
    title: 'La Escena Urbana de NYC Explota en 2026',
    excerpt: 'Con más de 85 eventos confirmados para este año, Nueva York se posiciona como epicentro global del arte urbano. Las entradas para los festivales más esperados ya están agotadas.',
    category: 'Análisis',
    date: '2026-02-10',
    author: 'DJ Remix',
    image: 'https://magazine-resources.tidal.com/uploads/2016/09/Magazine_image_1200x720-1-1.jpg',
    readTime: 7,
  },
  {
    id: '3',
    title: 'Luna Vibe Collective Colabora con Productor Japonés',
    excerpt: 'El colectivo de Brooklyn se une a Takeshi Nakamura para crear una experiencia audiovisual sin precedentes. El proyecto se estrenará en Art Basel Miami Week.',
    category: 'Colaboraciones',
    date: '2026-02-08',
    author: 'Sofia Records',
    image: 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2019/03/15/4e2638cc-3c74-4ab4-abb7-5b9cb5aa8b7e/gravediggaz-horrorcore-hip-hop',
    readTime: 4,
  },
  {
    id: '4',
    title: 'Guía: Cómo Comenzar tu Carrera en el Graffiti Urbano',
    excerpt: 'Spray Angel comparte sus mejores consejos y técnicas para principiantes que quieren explorar el arte del graffiti en Nueva York.',
    category: 'Tutoriales',
    date: '2026-02-05',
    author: 'Spray Angel',
    image: 'https://www.traverse-blog.com/wp-content/uploads/2024/11/Street-Art-Downtown-Reykjavik-Iceland-11.jpg',
    readTime: 6,
  },
  {
    id: '5',
    title: 'Entrevista Exclusiva: Luna Vibe Collective',
    excerpt: 'Conversamos con los miembros del colectivo sobre su proceso creativo, inspiraciones y visión para el futuro de la música electrónica urbana.',
    category: 'Entrevistas',
    date: '2026-02-03',
    author: 'Marcus Jay',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/200506145004-01-new-york-artist-studios.jpg?q=w_2000,c_fill',
    readTime: 8,
  },
  {
    id: '6',
    title: '2026: Tendencias Clave en Arte Urbano y Hip-Hop',
    excerpt: 'Analizamos los principales movimientos, sonidos y tendencias que dominarán la escena del arte urbano en Nueva York este año.',
    category: 'Tendencias',
    date: '2026-02-01',
    author: 'Sofia Records',
    image: 'https://tecache.cl/wp-content/uploads/2022/04/272190621_237760698514185_8101544741089932644_n-1024x650.jpg',
    readTime: 10,
  },
  {
    id: '7',
    title: 'Del Bronx al Mundo: La Historia de King Cipher',
    excerpt: 'Un recorrido por la carrera del rapero que comenzó en los freestyles del Bronx y ahora es celebrado internacionalmente.',
    category: 'Entrevistas',
    date: '2026-01-28',
    author: 'DJ Remix',
    image: 'https://m.media-amazon.com/images/I/81x1YwSgayL.png',
    readTime: 9,
  },
  {
    id: '8',
    title: 'Producción de Música Electrónica: Herramientas Esenciales',
    excerpt: 'Una guía completa sobre el software, hardware y técnicas necesarias para producir música electrónica de calidad profesional.',
    category: 'Tutoriales',
    date: '2026-01-25',
    author: 'Sofia Records',
    image: 'https://www.corazon.cl/wp-content/uploads/2022/06/Dainesitta-768x480.jpg',
    readTime: 11,
  },
  {
    id: '9',
    title: 'Cómo Monetizar tu Arte en ILUMINATY',
    excerpt: 'Estrategias prácticas para artistas urbanos: desde sponsorships hasta distribución digital y oportunidades de booking.',
    category: 'Tutoriales',
    date: '2026-01-22',
    author: 'Marcus Jay',
    image: 'https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/1586/content_andrew-neel-218073.jpg',
    readTime: 7,
  },
])

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Noticias': 'bg-neon-lime/20 text-neon-lime border border-neon-lime/30',
    'Análisis': 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
    'Tutoriales': 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
    'Entrevistas': 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
    'Tendencias': 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30',
    'Colaboraciones': 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
  }
  return colors[category] || 'bg-gray-200 text-gray-700'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
