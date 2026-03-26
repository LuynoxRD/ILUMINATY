import { nextTick } from 'vue'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './style.css'
import 'lenis/dist/lenis.css'
import { getContent, loadContent } from './services/content'

const staticRoutes = [
  { path: '/', component: () => import('./views/Home.vue'), meta: { title: 'Inicio' } },
  { path: '/artistas', component: () => import('./views/Artists.vue'), meta: { title: 'Artistas' } },
  { path: '/sobre-nosotros', component: () => import('./views/About.vue'), meta: { title: 'Sobre Nosotros' } },
  { path: '/blog', component: () => import('./views/Blog.vue'), meta: { title: 'Blog' } },
  {
    path: '/blog/:slug',
    component: () => import('./views/BlogPost.vue'),
    props: route => ({ initialSlug: String(route.params.slug || '') }),
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

    const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('lenis'),
    ])

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
      anchors: {
        offset: 80,
      },
      stopInertiaOnNavigate: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    router.afterEach(async (to) => {
      await nextTick()

      if (to.hash) {
        lenis.scrollTo(to.hash, {
          offset: 80,
          duration: 1.1,
          force: true,
        })
        return
      }

      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      })
    })
  },
  {
    useHead: true,
  },
)
