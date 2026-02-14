<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 -z-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-neon-lime/20 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-center mb-4">Sobre ILUMINATY</h1>
        <p class="text-center text-gray-600 max-w-3xl mx-auto text-lg">
          Somos más que una plataforma. Somos un movimiento que amplifica las voces de artistas urbanos de Nueva York.
        </p>
      </div>
    </section>

    <!-- Mission -->
    <SectionTitle
      subtitle="Propósito"
      title="Nuestra Misión"
      description="Crear un ecosistema donde el talento urbano prospera sin límites"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="mb-4">Democratizar la Visibilidad</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            En ILUMINATY creemos que cada artista merece ser descubierto. No importa si estás comenzando en un sótano de Brooklyn o ya eres una leyenda del Bronx. 
            Nuestra plataforma elimina las barreras tradicionales de la industria musical y visual.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <span class="text-neon-lime flex-shrink-0 mt-1">⚡</span>
              <span>Conexión directa entre artistas y audiencia</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-neon-lime flex-shrink-0 mt-1">⚡</span>
              <span>Promoción igualitaria sin sesgos corporativos</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-neon-lime flex-shrink-0 mt-1">⚡</span>
              <span>Comunidad segura y colaborativa</span>
            </li>
          </ul>
        </div>
        <div class="rounded-xl overflow-hidden glass">
          <img 
            src="https://img.freepik.com/fotos-premium/dos-raperos-negros-posan-calle-ciudad-noche-rascacielos-artistas-rap-contra-paisaje-urbano-concierto-musica-underground-estilo-urbano_266732-13097.jpg"
            alt="Comunidad"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionTitle>

    <!-- Values -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-neon-lime font-semibold text-sm uppercase tracking-widest">VALORES CORE</span>
          <h2 class="mt-4">Lo que nos Define</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="text-5xl mb-4">🎨</div>
            <h4 class="font-bold mb-3">Autenticidad</h4>
            <p class="text-gray-600 text-sm">
              Celebramos el arte genuino, sin filtros ni compromisos comerciales forzados.
            </p>
          </div>

          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="text-5xl mb-4">🤝</div>
            <h4 class="font-bold mb-3">Comunidad</h4>
            <p class="text-gray-600 text-sm">
              Somos una familia. Los éxitos de cada artista son nuestros éxitos.
            </p>
          </div>

          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="text-5xl mb-4">🚀</div>
            <h4 class="font-bold mb-3">Innovación</h4>
            <p class="text-gray-600 text-sm">
              Impulsamos nuevos sonidos, visiones y formas de expresión urbana.
            </p>
          </div>

          <div class="glass rounded-xl p-8 text-center card-hover">
            <div class="text-5xl mb-4">🌍</div>
            <h4 class="font-bold mb-3">Inclusión</h4>
            <p class="text-gray-600 text-sm">
              Todos los géneros, todos los barrios, todas las voces tienen espacio.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <SectionTitle
      subtitle="Las Mentes"
      title="Nuestro Equipo"
      description="Apasionados por el arte urbano y la tecnología"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="glass rounded-xl overflow-hidden text-center card-hover">
          <div class="h-48 bg-gradient-dark overflow-hidden">
            <img 
              src="https://media.istockphoto.com/id/2218333101/es/foto/hombre-maduro-seguro-de-s%C3%AD-mismo-sonriendo-en-atuendo-profesional-con-un-fondo-tranquilo.jpg?s=612x612&w=0&k=20&c=3WaQoCEcLjUQN-spK2tFP6CkyQ1u0WdHmpE6ScBQ0kU="
              alt="Fundador"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h4 class="font-bold mb-1">Marcus Rivera</h4>
            <p class="text-neon-lime text-sm mb-3">Fundador & CEO</p>
            <p class="text-gray-600 text-sm mb-4">
              Productor de hip-hop de Harlem con 20 años en la industria. Visión: democratizar el arte urbano.
            </p>
            <div class="flex gap-2 justify-center">
              <a href="#" class="w-8 h-8 rounded glass-hover flex items-center justify-center text-xs hover:text-neon-lime">📧</a>
              <a href="#" class="w-8 h-8 rounded glass-hover flex items-center justify-center text-xs hover:text-neon-lime">🔗</a>
            </div>
          </div>
        </div>

        <div class="glass rounded-xl overflow-hidden text-center card-hover">
          <div class="h-48 bg-gradient-dark overflow-hidden">
            <img 
              src="https://media.istockphoto.com/id/2174363314/es/foto/hombre-de-negocios-mirando-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=BLKhpY9mvhD3aI95wdALxIWwQsUlbfEde3gabKz6MY0="
              alt="CTO"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h4 class="font-bold mb-1">Sofia Chen</h4>
            <p class="text-neon-violet text-sm mb-3">CTO & Co-Founder</p>
            <p class="text-gray-600 text-sm mb-4">
              Ingeniera de software de Brooklyn. Experta en infraestructura web escalable y experiencia de usuario.
            </p>
            <div class="flex gap-2 justify-center">
              <a href="#" class="w-8 h-8 rounded glass-hover flex items-center justify-center text-xs hover:text-neon-violet">📧</a>
              <a href="#" class="w-8 h-8 rounded glass-hover flex items-center justify-center text-xs hover:text-neon-violet">🔗</a>
            </div>
          </div>
        </div>

        <div class="glass rounded-xl overflow-hidden text-center card-hover">
          <div class="h-48 bg-gradient-dark overflow-hidden">
            <img 
              src="https://media.istockphoto.com/id/2198763720/es/foto/retrato-de-una-mujer-de-negocios-sonriente-de-pie-en-el-pasillo.jpg?s=612x612&w=0&k=20&c=TZyC54Bw7aMcSRUWnuOp3EZud6kvdTj7d827BO2zQs8="
              alt="Community Manager"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h4 class="font-bold mb-1">James Thompson</h4>
            <p class="text-neon-cyan text-sm mb-3">Community Lead</p>
            <p class="text-gray-600 text-sm mb-4">
              Currador y promotor cultural del Bronx. Conecta artistas con oportunidades autênticas.
            </p>
            <div class="flex gap-2 justify-center">
              <a href="#" class="w-8 h-8 rounded glass-hover flex items-center justify-center text-xs hover:text-neon-cyan">📧</a>
              <a href="#" class="w-8 h-8 rounded glass-hover flex items-center justify-center text-xs hover:text-neon-cyan">🔗</a>
            </div>
          </div>
        </div>
      </div>
    </SectionTitle>

    <!-- Manifesto -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-neon opacity-5 -z-10"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="glass rounded-2xl p-12 md:p-16">
          <h2 class="text-center mb-8">El Manifiesto ILUMINATY</h2>
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <span class="text-neon-lime font-bold">Creemos</span> que el arte urbano es la voz más honesta de Nueva York. Cada beat, cada letra, cada trazo es un grito de autenticidad.
            </p>
            <p>
              <span class="text-neon-violet font-bold">Rechazamos</span> las gatekeepers tradicionales que decidían quién merecía ser escuchado. En ILUMINATY, todos tienen voz.
            </p>
            <p>
              <span class="text-neon-cyan font-bold">Promovemos</span> colaboraciones sin ego, donde artistas de diferentes géneros y barrios forman comunidades creativas.
            </p>
            <p>
              <span class="text-neon-lime font-bold">Protegemos</span> la libertad creativa, la privacidad y los derechos intelectuales de cada creador.
            </p>
            <p>
              <span class="text-neon-violet font-bold">Soñamos</span> con un mundo donde el talento define el éxito, no el conexionismo ni el dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
</script>
