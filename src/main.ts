import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
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

const routes = [
  { path: '/', component: Home, meta: { title: 'Inicio' } },
  { path: '/artistas', component: Artists, meta: { title: 'Artistas' } },
  { path: '/sobre-nosotros', component: About, meta: { title: 'Sobre Nosotros' } },
  { path: '/blog', component: Blog, meta: { title: 'Blog' } },
  { path: '/blog/:id', component: BlogPost, meta: { title: 'Post' } },
  { path: '/eventos', component: Events, meta: { title: 'Eventos' } },
  { path: '/contacto', component: Contact, meta: { title: 'Contacto' } },
]

const router = createRouter({
  history: createWebHistory(),
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
