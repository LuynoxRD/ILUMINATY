<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="mb-4 text-center">Sobre ILUMINATY</h1>
        <p class="mx-auto max-w-3xl text-center text-lg text-gray-600">
          Somos más que una plataforma. Somos un movimiento que amplifica las voces de artistas urbanos de Nueva York.
        </p>
      </div>
    </section>

    <SectionTitle
      subtitle="Propósito"
      title="Nuestra Misión"
      description="Crear un ecosistema donde el talento urbano prospera sin límites"
    >
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900">Democratizar la Visibilidad</h2>
          <p class="mb-6 leading-relaxed text-gray-600">
            En ILUMINATY creemos que cada artista merece ser descubierto. No importa si estás comenzando en un sótano de Brooklyn o si ya eres una leyenda del Bronx.
            Nuestra plataforma reduce barreras y abre un espacio más claro para mostrar trabajo, conectar comunidad y activar oportunidades reales.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <span class="mt-1 flex-shrink-0 text-neon-lime">⚡</span>
              <span>Conexión directa entre artistas y audiencia</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 flex-shrink-0 text-neon-lime">⚡</span>
              <span>Promoción igualitaria sin sesgos corporativos</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 flex-shrink-0 text-neon-lime">⚡</span>
              <span>Comunidad segura y colaborativa</span>
            </li>
          </ul>
        </div>
        <div class="glass overflow-hidden rounded-xl">
          <img :src="aboutContent.missionImage" alt="Comunidad ILUMINATY reunida en Nueva York" class="h-full w-full object-cover">
        </div>
      </div>
    </SectionTitle>

    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-neon-lime">Valores Core</span>
          <h2 class="mt-4">Lo que nos Define</h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="mb-4 text-4xl">©️</div>
            <h3 class="mb-3 text-xl font-bold">Autenticidad</h3>
            <p class="text-gray-600">
              Celebramos el arte genuino, sin filtros ni compromisos comerciales forzados.
            </p>
          </div>
          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="mb-4 text-5xl">🗣️</div>
            <h3 class="mb-3 text-xl font-bold">Comunidad</h3>
            <p class="text-gray-600">
              Somos una red creativa. Los avances de cada artista elevan a todo el ecosistema.
            </p>
          </div>
          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="mb-4 text-5xl">🛰️</div>
            <h3 class="mb-3 text-xl font-bold">Innovación</h3>
            <p class="text-gray-600">
              Impulsamos nuevos sonidos, formatos y cruces entre música, visuales y comunidad.
            </p>
          </div>
          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="mb-4 text-5xl">🌐</div>
            <h3 class="mb-3 text-xl font-bold">Inclusión</h3>
            <p class="text-gray-600">
              Todos los géneros, barrios y voces tienen lugar dentro de la plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionTitle
      subtitle="Las Mentes"
      title="Nuestro Equipo"
      description="Personas que mezclan cultura urbana, producto y tecnología"
    >
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="member in aboutContent.team" :key="member.id" class="glass overflow-hidden rounded-xl text-center card-hover">
          <div class="h-48 overflow-hidden bg-gradient-dark">
            <img :src="member.image" :alt="member.name" class="h-full w-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="mb-1 text-xl font-bold text-gray-900">{{ member.name }}</h3>
            <p class="mb-3 text-sm" :class="member.accentClass">{{ member.role }}</p>
            <p class="mb-4 text-gray-600">
              {{ member.bio }}
            </p>
            <div class="flex justify-center gap-2">
              <a :href="member.email" class="glass-hover flex h-10 w-10 items-center justify-center rounded text-lg transition-colors" :class="member.accentClass" title="Email">📧</a>
              <a :href="member.secondaryLink" target="_blank" rel="noopener" class="glass-hover flex h-10 w-10 items-center justify-center rounded text-lg transition-colors" :class="member.accentClass" :title="member.secondaryLabel">🔗</a>
            </div>
          </div>
        </div>
      </div>
    </SectionTitle>

    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 -z-10 bg-gradient-neon opacity-5"></div>
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="glass rounded-2xl p-12 md:p-16">
          <h2 class="mb-8 text-center">El Manifiesto ILUMINATY</h2>
          <div class="space-y-6 leading-relaxed text-gray-700">
            <p><span class="font-bold text-neon-lime">Creemos</span> que el arte urbano es la voz más honesta de Nueva York. Cada beat, cada letra y cada trazo registra una realidad que merece archivo y visibilidad.</p>
            <p><span class="font-bold text-neon-violet">Rechazamos</span> la lógica de puertas cerradas que decide quién merece ser visto. ILUMINATY está diseñado para reducir fricción y abrir contexto.</p>
            <p><span class="font-bold text-neon-cyan">Promovemos</span> colaboraciones sin ego entre artistas, productores, promotores y públicos que sí entienden la escena.</p>
            <p><span class="font-bold text-neon-lime">Protegemos</span> la libertad creativa, la privacidad y el trabajo intelectual de cada creador que usa la plataforma.</p>
            <p><span class="font-bold text-neon-violet">Soñamos</span> con una industria donde el talento y la constancia pesen más que la fricción de acceso.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import { aboutContent } from '@/data/about'
</script>
