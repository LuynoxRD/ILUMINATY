<template>
  <footer class="border-t border-gray-300 bg-dark-secondary/50 backdrop-blur-xl mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold mb-4 neon-text">ILUMINATY</h3>
          <p class="text-gray-600 text-sm">La plataforma definitiva para el arte urbano de Nueva York. Descubre, conecta y apoya artistas revolucionarios.</p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold mb-4">Explorar</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><RouterLink to="/artistas" class="hover:text-neon-lime transition-colors">Artistas</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:text-neon-lime transition-colors">Blog</RouterLink></li>
            <li><RouterLink to="/eventos" class="hover:text-neon-lime transition-colors">Eventos</RouterLink></li>
            <li><RouterLink to="/contacto" class="hover:text-neon-lime transition-colors">Contacto</RouterLink></li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h4 class="font-semibold mb-4">Empresa</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><RouterLink to="/sobre-nosotros" class="hover:text-neon-lime transition-colors">Sobre Nosotros</RouterLink></li>
            <li><a href="#" class="hover:text-neon-lime transition-colors">Privacidad</a></li>
            <li><a href="#" class="hover:text-neon-lime transition-colors">Términos</a></li>
            <li><a href="#" class="hover:text-neon-lime transition-colors">Cookies</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold mb-4">Síguenos</h4>
          <div class="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass-hover flex items-center justify-center" aria-label="Instagram">
              <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Descripción visual" class="w-6 h-6 object-contain" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass-hover flex items-center justify-center" aria-label="Twitter">
              <span class="text-lg">𝕏</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass-hover flex items-center justify-center" aria-label="YouTube">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Descripción visual" class="w-6 h-6 object-contain" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass-hover flex items-center justify-center" aria-label="TikTok">
              <img src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png" alt="Descripción visual" class="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-300 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Iluminaty. Todos los derechos reservados. Potencia el arte urbano de NYC.</p>
          <p>Hecho con <span class="text-neon-lime">⚡</span> por LuynoxRD</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
