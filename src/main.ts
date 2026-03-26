import { nextTick } from 'vue'
import { ViteSSG } from 'vite-ssg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import App from './App.vue'
import './style.css'
import 'lenis/dist/lenis.css'

import Home from './views/Home.vue'
import Artists from './views/Artists.vue'
import About from './views/About.vue'
import Blog from './views/Blog.vue'
import BlogPost from './views/BlogPost.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import Terms from './views/Terms.vue'
import Privacy from './views/Privacy.vue'
import Cookies from './views/Cookies.vue'
import { sortedBlogPosts } from './data/blogPosts'

gsap.registerPlugin(ScrollTrigger)

const staticRoutes = [
  { path: '/', component: Home, meta: { title: 'Inicio' } },
  { path: '/artistas', component: Artists, meta: { title: 'Artistas' } },
  { path: '/sobre-nosotros', component: About, meta: { title: 'Sobre Nosotros' } },
  { path: '/blog', component: Blog, meta: { title: 'Blog' } },
  { path: '/eventos', component: Events, meta: { title: 'Eventos' } },
  { path: '/contacto', component: Contact, meta: { title: 'Contacto' } },
  { path: '/terminos', component: Terms, meta: { title: 'Términos y Condiciones' } },
  { path: '/privacidad', component: Privacy, meta: { title: 'Política de Privacidad' } },
  { path: '/cookies', component: Cookies, meta: { title: 'Política de Cookies' } },
]

const blogRoutes = sortedBlogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  component: BlogPost,
  props: { initialSlug: post.slug },
  meta: {
    title: post.title,
    description: post.metaDescription,
  },
}))

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes: [...staticRoutes, ...blogRoutes],
    scrollBehavior() {
      return false
    },
  },
  ({ router, isClient }) => {
    router.beforeEach((to, _from, next) => {
      if (isClient && to.meta.title) {
        document.title = `${to.meta.title} | ILUMINATY`
      }
      next()
    })

    if (!isClient)
      return

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
