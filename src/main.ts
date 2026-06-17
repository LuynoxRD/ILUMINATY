import { nextTick } from 'vue'
import { ViteSSG } from 'vite-ssg'
import type { RouteLocationNormalized } from 'vue-router'
import App from './App.vue'
import './style.css'
import { getContent, loadContent } from './services/content'

const staticRoutes = [
  { path: '/', component: () => import('./views/Home.vue'), meta: { title: 'Inicio' } },
  { path: '/artistas', component: () => import('./views/Artists.vue'), meta: { title: 'Artistas' } },
  { path: '/sobre-nosotros', component: () => import('./views/About.vue'), meta: { title: 'Sobre Nosotros' } },
  { path: '/blog', component: () => import('./views/Blog.vue'), meta: { title: 'Blog' } },
  {
    path: '/blog/:slug',
    component: () => import('./views/BlogPost.vue'),
    props: (route: RouteLocationNormalized) => ({ initialSlug: String(route.params.slug || '') }),
    meta: { title: 'Blog' },
  },
  { path: '/eventos', component: () => import('./views/Events.vue'), meta: { title: 'Eventos' } },
  { path: '/contacto', component: () => import('./views/Contact.vue'), meta: { title: 'Contacto' } },
  { path: '/terminos', component: () => import('./views/Terms.vue'), meta: { title: 'Terminos y Condiciones' } },
  { path: '/privacidad', component: () => import('./views/Privacy.vue'), meta: { title: 'Politica de Privacidad' } },
  { path: '/cookies', component: () => import('./views/Cookies.vue'), meta: { title: 'Politica de Cookies' } },
]

export const includedRoutes = async (paths: string[]) => {
  const content = await loadContent()
  return Array.from(new Set([...paths.filter(path => !path.includes(':') && !path.includes('*')), ...content.blogPostPaths]))
}

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes: staticRoutes,
    scrollBehavior() {
      return false
    },
  },
  async ({ router, isClient }) => {
    if (isClient)
      await loadContent()

    router.beforeEach((to, _from, next) => {
      if (isClient && to.meta.title) {
        const blogPost = to.path.startsWith('/blog/') ? getContent().getBlogPostBySlug(String(to.params.slug || '')) : undefined
        document.title = `${blogPost?.title || to.meta.title} | ILUMINATY`
      }
      next()
    })

    if (!isClient)
      return

    const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ])

    gsap.registerPlugin(ScrollTrigger)

    const cleanup = () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      ScrollTrigger.clearScrollMemory()
    }

    if (typeof window !== 'undefined')
      window.addEventListener('beforeunload', cleanup)

    router.afterEach(async (to, from) => {
      await nextTick()

      if (to.hash) {
        let el: Element | null = null
        try {
          el = document.querySelector(to.hash)
        }
        catch {
          // selector inválido (ej. #123-titulo) — ignorar y dejar que el bloque de abajo maneje
        }
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top, behavior: 'smooth' })
          return
        }
      }

      if (to.path !== from.path) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    })
  },
  {
    useHead: true,
  },
)
