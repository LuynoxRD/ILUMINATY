import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // ✅ createWebHistory, NO Hash
import App from './App.vue'
import './style.css'

// Views
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

const routes = [
  { path: '/', component: Home, meta: { title: 'Inicio' } },
  { path: '/artistas', component: Artists, meta: { title: 'Artistas' } },
  { path: '/sobre-nosotros', component: About, meta: { title: 'Sobre Nosotros' } },
  { path: '/blog', component: Blog, meta: { title: 'Blog' } },
  { path: '/blog/:id', component: BlogPost, meta: { title: 'Post' } },
  { path: '/eventos', component: Events, meta: { title: 'Eventos' } },
  { path: '/contacto', component: Contact, meta: { title: 'Contacto' } },
  { path: '/terminos', component: Terms, meta: { title: 'Términos y Condiciones' } },
  { path: '/privacidad', component: Privacy, meta: { title: 'Política de Privacidad' } },
  { path: '/cookies', component: Cookies, meta: { title: 'Política de Cookies' } },
]

const router = createRouter({
  history: createWebHistory('/ILUMINATY/'), // ✅ DEBE COINCIDIR CON base EN vite.config
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Página'} | Iluminaty`
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')