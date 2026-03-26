<template>
  <footer class="border-t border-gray-300 bg-dark-secondary/50 backdrop-blur-xl">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="mb-8">
        <div class="mb-8 md:mb-0 md:grid md:grid-cols-4 md:gap-8">
          <div class="mb-8 md:mb-0">
            <h3 class="neon-text mb-4 flex items-center gap-2 text-2xl font-bold">
              <LogoMark class-name="h-6 w-6 text-[#f90000]" />
              <span>ILUMINATY</span>
            </h3>
            <p class="text-base leading-7 text-gray-600">
              La plataforma definitiva para el arte urbano de Nueva York. Descubre, conecta y apoya artistas revolucionarios.
            </p>
          </div>

          <div class="hidden md:block">
            <h4 class="mb-4 text-lg font-semibold">Explorar</h4>
            <ul class="space-y-3 text-base text-gray-600">
              <li><RouterLink to="/artistas" class="transition-colors hover:text-neon-lime">Artistas</RouterLink></li>
              <li><RouterLink to="/blog" class="transition-colors hover:text-neon-lime">Blog</RouterLink></li>
              <li><RouterLink to="/eventos" class="transition-colors hover:text-neon-lime">Eventos</RouterLink></li>
              <li><RouterLink to="/contacto" class="transition-colors hover:text-neon-lime">Contacto</RouterLink></li>
            </ul>
          </div>

          <div class="hidden md:block">
            <h4 class="mb-4 text-lg font-semibold">Empresa</h4>
            <ul class="space-y-3 text-base text-gray-600">
              <li><RouterLink to="/sobre-nosotros" class="transition-colors hover:text-neon-lime">Sobre Nosotros</RouterLink></li>
              <li><RouterLink to="/privacidad" class="transition-colors hover:text-neon-lime">Privacidad</RouterLink></li>
              <li><RouterLink to="/terminos" class="transition-colors hover:text-neon-lime">Términos</RouterLink></li>
              <li><RouterLink to="/cookies" class="transition-colors hover:text-neon-lime">Cookies</RouterLink></li>
            </ul>
          </div>

          <div class="hidden md:block">
            <h4 class="mb-4 text-lg font-semibold">Síguenos</h4>
            <SocialLinks />
          </div>
        </div>

        <div class="mb-8 grid grid-cols-2 gap-8 md:hidden">
          <div>
            <h4 class="mb-4 text-lg font-semibold">Explorar</h4>
            <ul class="space-y-3 text-base text-gray-600">
              <li><RouterLink to="/artistas" class="transition-colors hover:text-neon-lime">Artistas</RouterLink></li>
              <li><RouterLink to="/blog" class="transition-colors hover:text-neon-lime">Blog</RouterLink></li>
              <li><RouterLink to="/eventos" class="transition-colors hover:text-neon-lime">Eventos</RouterLink></li>
              <li><RouterLink to="/contacto" class="transition-colors hover:text-neon-lime">Contacto</RouterLink></li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 text-lg font-semibold">Empresa</h4>
            <ul class="space-y-3 text-base text-gray-600">
              <li><RouterLink to="/sobre-nosotros" class="transition-colors hover:text-neon-lime">Sobre Nosotros</RouterLink></li>
              <li><RouterLink to="/privacidad" class="transition-colors hover:text-neon-lime">Privacidad</RouterLink></li>
              <li><RouterLink to="/terminos" class="transition-colors hover:text-neon-lime">Términos</RouterLink></li>
              <li><RouterLink to="/cookies" class="transition-colors hover:text-neon-lime">Cookies</RouterLink></li>
            </ul>
          </div>
        </div>

        <div class="md:hidden">
          <h4 class="mb-4 text-lg font-semibold">Síguenos</h4>
          <SocialLinks />
        </div>
      </div>

      <div class="border-t border-gray-300 pt-8">
        <div class="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>&copy; 2026 Iluminaty. Todos los derechos reservados. Potencia el arte urbano de NYC.</p>
          <p class="flex items-center gap-1">
            Hecho con
            <LogoMark class-name="h-4 w-4 text-[#f90000]" />
            por LuynoxRD
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LogoMark from './LogoMark.vue'
import SocialLinks from './SocialLinks.vue'
</script>
