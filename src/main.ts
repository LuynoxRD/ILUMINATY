const router = createRouter({
  history: createWebHashHistory(), // <-- Vacío, apuntando a la raíz
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})