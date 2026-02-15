<template>
<div class="bg-gray-50">
  <!-- Post Header -->
  <section class="py-16 bg-gradient-dark relative overflow-hidden">
    <div class="absolute inset-0 opacity-40 -z-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-neon-lime/20 rounded-full blur-3xl"></div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-6">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold" :class="getCategoryColor(post.category)">
          {{ post.category }}
        </span>
      </div>
      <h4 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray mb-4">{{ post.title }}</h4>
      <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-500 text-xs sm:text-sm">
        <div class="flex items-center gap-1.5">
          <span>✍️</span>
          <span>{{ post.author }}</span>
        </div>
        <span class="hidden sm:inline">•</span>
        <div class="flex items-center gap-1.5">
          <span>📅</span>
          <span>{{ formatDate(post.date) }}</span>
        </div>
        <span class="hidden sm:inline">•</span>
        <div class="flex items-center gap-1.5">
          <span>⏱️</span>
          <span>{{ post.readTime }} min</span>
        </div>
      </div>
    </div>
  </section>

    <!-- Featured Image -->
    <section class="py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>

    <!-- Post Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article class="prose prose-lg text-gray-700">
          <div v-html="post.content" class="space-y-6 text-gray-800 leading-relaxed"></div>
        </article>

        <!-- Author Bio -->
        <div class="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-neon-lime/20 flex items-center justify-center text-2xl">
              👨‍🎤
            </div>
            <div>
              <h4 class="font-bold text-black-900">{{ post.author }}</h4>
              <p class="text-sm text-gray-600">Editor de ILUMINATY Blog</p>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            {{ post.authorBio }}
          </p>
        </div>

        <!-- Related Posts -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Posts Relacionados</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article
              v-for="relPost in relatedPosts"
              :key="relPost.id"
              class="glass rounded-xl overflow-hidden card-hover"
              @click="navigateTo(relPost.id)"
            >
              <div class="relative h-40 overflow-hidden bg-gray-200">
                <img 
                  :src="relPost.image" 
                  :alt="relPost.title"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div class="p-4">
                <span class="text-xs font-semibold text-neon-lime">{{ relPost.category }}</span>
                <h4 class="text-lg font-bold text-gray-900 mt-2 line-clamp-2">{{ relPost.title }}</h4>
                <p class="text-sm text-gray-600 mt-2">{{ relPost.author }} • {{ formatDate(relPost.date) }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  <!-- Newsletter Subscription -->
<section class="py-20 bg-gradient-dark">
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-gray mb-4">Suscríbete al Blog</h2>
    <p class="text-gray-500 mb-8">
      Recibe las últimas historias, análisis y tendencias del arte urbano directamente en tu inbox.
    </p>
    <div class="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Tu email"
        class="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-gray/20 focus:border-neon-lime outline-none transition-colors"
      />
      <button class="btn-primary whitespace-nowrap">
        Suscribirse
      </button>
    </div>
  </div>
</section>
<!-- Asegúrate que después de esto esté el </div> que cierra <div class="bg-white"> -->
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const posts: Record<string, any> = {
  '1': {
    id: '1',
    title: 'King Cipher Anuncia Nuevo Álbum "Concreto Puro"',
    excerpt: 'Tras meses de especulación, el rapero de Harlem revela los detalles de su próxima obra maestra.',
    category: 'Noticias',
    date: '2026-02-12',
    author: 'Marcus Jay',
    image: 'https://musicgenreslist.com/music/wp-content/uploads/hip-hop.jpeg',
    readTime: 5,
    authorBio: 'Crítico musical con 10 años de experiencia en la escena hip-hop de Nueva York. Cubre noticias y tendencias de artistas urbanos.',
    content: `
      <p>Tras meses de especulación y rumores en redes sociales, King Cipher finalmente reveló los detalles de su próximo álbum "Concreto Puro", una obra que promete redefinir el hip-hop urbano contemporáneo.</p>
      
      <h3>Un Viaje Sonoro de 14 Tracks</h3>
      <p>El álbum cuenta con 14 tracks que abarcan desde temas introspectivos sobre la vida en el Harlem actual, hasta colaboraciones con productores de renombre internacional. Entre los adelantos ya liberados, destaca "Asfalto y Sueños", un track que ha acumulado más de 2.3 millones de reproducciones en streaming.</p>
      
      <p>"Concreto Puro representa mi madurez como artista", explicó King Cipher en la rueda de prensa virtual. "No es solo un álbum, es un documental sonoro de la realidad urbana. Cada track cuenta una historia que viví o presencié en mis 20 años en el Bronx".</p>
      
      <h3>Colaboraciones de Clase Mundial</h3>
      <p>El álbum incluye colaboraciones con Luna Vibe Collective en el track sensible "Neon Dreams", y una producción especial del legendario DJ Premier para el cierre del álbum. También hay features sorpresa de artistas emergentes de ILUMINATY que traen frescura al proyecto.</p>
      
      <p>La producción ejecutiva estuvo a cargo de Sofia Records, quien garantiza una calidad de sonido impecable con mezcla en estudio de clase mundial.</p>
      
      <h3>Lanzamiento y Disponibilidad</h3>
      <p>"Concreto Puro" estará disponible en todas las plataformas de streaming el 28 de marzo de 2026. Los fans pueden pre-ordenar el álbum en ILUMINATY a través de nuestro sistema exclusivo, que incluye acceso early bird a 48 horas antes del lanzamiento oficial.</p>
      
      <p>King Cipher también anunció una gira de presentación que incluye 15 ciudades, con inicio en Nueva York el 15 de abril en el Barclays Center.</p>
    `,
  },
  '2': {
    id: '2',
    title: 'La Escena Urbana de NYC Explota en 2026',
    excerpt: 'Con más de 85 eventos confirmados, Nueva York es epicentro global del arte urbano.',
    category: 'Análisis',
    date: '2026-02-10',
    author: 'DJ Remix',
    image: 'https://magazine-resources.tidal.com/uploads/2016/09/Magazine_image_1200x720-1-1.jpg',
    readTime: 7,
    authorBio: 'Productor, DJ y analista de tendencias musicales. 15 años en la industria electrónica y urbana de Nueva York.',
    content: `
      <p>2026 marca un hito histórico para la escena urbana de Nueva York. Las cifras hablan por sí solas: 85+ eventos confirmados, millones de dólares en inversión, y participación de artistas de más de 40 países.</p>
      
      <h3>Cifras Récord de Asistencia</h3>
      <p>Los festivales más grandes de este año ya tienen sus entradas agotadas desde hace meses. El Brooklyn Neon Festival, que este año expande su capacidad a 50,000 personas, vendió sus entradas VIP en tan solo 6 horas después de su anunciación.</p>
      
      <p>El fenómeno no es casualidad. La pandemia dejó un hambre por experiencias en vivo, y Nueva York está satisfaciendo esa sed con eventos de calidad mundial.</p>
      
      <h3>Inversión y Patrocinio</h3>
      <p>Marcas internacionales están invirtiendo masivamente en la escena urbanay artistas emergentes de Nueva York. Red Bull, Spotify, y Nike han anunciado acuerdos multimillonarios con promotores locales.</p>
      
      <p>Esta inversión también beneficia directamente a los artistas. Los cachets para actuaciones en festivales han aumentado un 300% en comparación con 2024, permitiendo que artistas emergentes vivan de su arte.</p>
      
      <h3>Diversidad de Géneros</h3>
      <p>Aunque el hip-hop sigue dominando, 2026 trae una explosión de géneros: desde drill hasta música experimental, graffiti-live performances, y colisiones entre arte visual y musical que nunca antes se habían visto.</p>
      
      <h3>El Rol de ILUMINATY</h3>
      <p>ILUMINATY ha sido fundamental en esta explosión. La plataforma ha facilitado conexiones entre 500+ artistas, promotores y fans, creando un ecosistema que antes no existía. Nuestro rol como catalizador ha posicionado a Nueva York como el epicentro indiscutible del arte urbano global.</p>
    `,
  },
  '3': {
    id: '3',
    title: 'Luna Vibe Collective Colabora con Productor Japonés',
    excerpt: 'Experiencia audiovisual sin precedentes en Art Basel Miami Week.',
    category: 'Colaboraciones',
    date: '2026-02-08',
    author: 'Sofia Records',
    image: 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2019/03/15/4e2638cc-3c74-4ab4-abb7-5b9cb5aa8b7e/gravediggaz-horrorcore-hip-hop',
    readTime: 4,
    authorBio: 'Productora de música electrónica, curadora de eventos culturales y pioneer del sonido experimental urbano.',
    content: `
      <p>En una movida que sorprende a la industria, Luna Vibe Collective anuncia su colaboración con Takeshi Nakamura, uno de los productores electrónicos más innovadores de Japón.</p>
      
      <h3>Un Encuentro de Culturas</h3>
      <p>Nakamura, conocido por sus instalaciones sonoras inmersivas en Tokio y Seúl, viaja a Brooklyn para co-producir una experiencia audiovisual que combina la estética urbana de Nueva York con la tecnología y minimalismo japonés.</p>
      
      <p>"Los beats de Luna Vibe tienen ese pulse crudo de Nueva York, pero hay algo más profundo. Queremos explor esa fusión entre la energía urbana y la contemplación", explicó Nakamura en conversación con nosotros.</p>
      
      <h3>Art Basel Miami Week 2026</h3>
      <p>El proyecto debutará en Art Basel Miami Week, uno de los eventos de arte más prestigiosos del mundo. Luna Vibe Collective presentará una instalación interactiva que fusiona música en vivo, visuales proyectados y participación del público.</p>
      
      <p>Será una oportunidad única para la plataforma ILUMINATY de mostrar que el arte urbano de Nueva York está en la vanguardia del arte contemporáneo global.</p>
      
      <h3>Gira Posterior</h3>
      <p>Tras el evento en Miami, la colaboración continuará con presentaciones en Tokio, Berlín y Nueva York como parte de una gira de 8 ciudades.</p>
    `,
  },
  '4': {
    id: '4',
    title: 'Guía: Cómo Comenzar tu Carrera en el Graffiti Urbano',
    excerpt: 'Consejos de Spray Angel para principiantes que quieren explorar el arte del graffiti.',
    category: 'Tutoriales',
    date: '2026-02-05',
    author: 'Spray Angel',
    image: 'https://www.traverse-blog.com/wp-content/uploads/2024/11/Street-Art-Downtown-Reykjavik-Iceland-11.jpg',
    readTime: 6,
    authorBio: 'Artista de graffiti reconocido internacionalmente. Sus murales han transformado barrios de Nueva York, Londres y Barcelona.',
    content: `
      <p>Como artista que ha creado cientos de murales en Nueva York, a menudo me preguntan cómo comenzar en el graffiti. Aquí comparto mi guía definitiva para principiantes.</p>
      
      <h3>Paso 1: Entiende los Estilos</h3>
      <p>Antes de comenzar, estudia los diferentes estilos: Tag, Throw-up, Wildstyle y Piece. Cada uno tiene sus reglas y características. Prefiero comenzar como muchos: dibujando Tags (firmas) en papel antes de tocar una lata.</p>
      
      <h3>Paso 2: Invierte en Herramientas de Calidad</h3>
      <p>Las latas de buena calidad hacen una diferencia enorme. Recomiendo marcas como Montana Black, Molotow y Ironlak. También necesitarás diferentes boquillas (caps) para lograr distintos efectos.</p>
      
      <h3>Paso 3: Encuentra Espacios Legales</h3>
      <p>Nueva York tiene murales legales donde puedes practicar. El Graffiti Hall of Fame en Queens es legendario. También hay paredes comunitarias que permiten expresión artística. Comienza ahí antes de considerar espacios ilegales.</p>
      
      <h3>Paso 4: Desarrolla tu Estilo</h3>
      <p>La paciencia es clave. Dibuja mil veces el mismo diseño antes de perfeccionarlo. Tu firma (tag) es tu marca personal. Hazla distintiva, fluida y propia.</p>
      
      <h3>Paso 5: Únete a la Comunidad</h3>
      <p>En ILUMINATY conectamos artistas de graffiti con oportunidades de proyectos comunitarios, exhibiciones y encargos legales. La comunidad urbana es solidaria cuando ves pasión genuina.</p>
      
      <h3>Respeto por la Cultura</h3>
      <p>El graffiti tiene una historia profunda. Aprende sobre sus orígenes en el movimiento Hip-Hop. Respeta a los veteranos y la comunidad. El arte urbano es sobre expresión auténtica, no solo vandalismo.</p>
    `,
  },
  '5': {
    id: '5',
    title: 'Entrevista Exclusiva: Luna Vibe Collective',
    excerpt: 'Proceso creativo, inspiraciones y visión para el futuro de la música electrónica urbana.',
    category: 'Entrevistas',
    date: '2026-02-03',
    author: 'Marcus Jay',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/200506145004-01-new-york-artist-studios.jpg?q=w_2000,c_fill',
    readTime: 8,
    authorBio: 'Periodista especializado en música experimental. Sus entrevistas han sido publicadas en Wire, Pitchfork y The Guardian.',
    content: `
      <p>Nos sentamos con Luna Vibe Collective en su estudio de Williamsburg para una conversación profunda sobre su proceso creativo, influencias e impacto en la escena electrónica global.</p>
      
      <h3>Orígenes del Colectivo</h3>
      <p><strong>Marcus:</strong> ¿Cómo nació Luna Vibe Collective?</p>
      <p><strong>Luna (Synth/Vocals):</strong> Comenzó como encuentros casuales en fiestas. Compartíamos gustos musicales similares y decidimos hacer algo juntos. Era informal, pero la química fue inmediata.</p>
      
      <h3>Influencias Sonoras</h3>
      <p><strong>Marcus:</strong> ¿Cuáles son tus influencias principales?</p>
      <p><strong>Astro (Productor):</strong> Desde Aphex Twin hasta Burial, pero también mucha música ambiental, jazz experimental... Nueva York es una sinfonia de sonidos. El ruido, el tráfico, las conversaciones en las calles. Eso es inspiración pura.</p>
      
      <h3>Impacto en ILUMINATY</h3>
      <p><strong>Marcus:</strong> ¿Qué significa ser parte de ILUMINATY para ustedes?</p>
      <p><strong>Luna:</strong> ILUMINATY nos dio visibilidad cuando éramos desconocidos. Pero más que eso, nos conectó con una comunidad que valida nuestro arte. Eso es invaluable para artistas emergentes en Nueva York.</p>
      
      <h3>Futuro del Proyecto</h3>
      <p><strong>Marcus:</strong> ¿Qué sigue?</p>
      <p><strong>Astro:</strong> Queremos expandir hacia música visual más experimentada. Instalaciones inmersivas, realidad aumentada, colaboraciones con artistas visuales... el futuro de la música es multimedia.</p>
    `,
  },
  '6': {
    id: '6',
    title: '2026: Tendencias Clave en Arte Urbano y Hip-Hop',
    excerpt: 'Analizamos los principales movimientos, sonidos y tendencias que dominarán la escena del arte urbano en Nueva York este año.',
    category: 'Tendencias',
    date: '2026-02-01',
    author: 'Sofia Records',
    image: 'https://tecache.cl/wp-content/uploads/2022/04/272190621_237760698514185_8101544741089932644_n-1024x650.jpg',
    readTime: 10,
    authorBio: 'Analista de tendencias musicales y productora. Especialista en identificar los próximos grandes movimientos del arte urbano.',
    content: `
      <p>El año 2026 marca un punto de inflexión para el arte urbano de Nueva York. Nuevos sonidos, tecnologías y formas de expresión están redefiniendo lo que significa ser un artista urbano en la capital mundial del hip-hop.</p>
      
      <h3>1. El Resurgimiento del Drill Melódico</h3>
      <p>El drill está evolucionando más allá de sus raíces agresivas. Artistas como King Cipher están incorporando elementos melódicos, creando un subgénero que mantiene la crudeza lírica pero añade capas de complejidad musical. Este "drill melódico" está ganando tracción tanto en el underground como en las listas principales.</p>
      
      <h3>2. NFTs y Arte Digital</h3>
      <p>Los artistas urbanos están adoptando blockchain y NFTs para monetizar su trabajo de nuevas formas. Desde álbumes tokenizados hasta experiencias virtuales exclusivas, la tecnología está democratizando el acceso al mercado del arte.</p>
      
      <h3>3. Colaboraciones Transatlánticas</h3>
      <p>La colaboración entre artistas de NYC y Europa (especialmente Londres y Berlín) está produciendo sonidos híbridos únicos. El intercambio cultural está enriqueciendo ambas escenas.</p>
      
      <h3>4. Arte Urbano como Activismo</h3>
      <p>Cada vez más artistas utilizan su plataforma para abordar temas sociales: justicia racial, desigualdad económica y cambio climático. El arte se ha convertido en un vehículo de concienciación y cambio.</p>
      
      <h3>5. Producción DIY de Alta Calidad</h3>
      <p>Con el acceso a tecnología asequible, artistas independientes están produciendo música de calidad profesional desde sus hogares. Esto está nivelando el campo de juego y permitiendo que el talento brille por encima de los recursos.</p>
      
      <h3>Conclusión</h3>
      <p>2026 es un año de evolución y experimentación. Los artistas que logren adaptarse a estas tendencias mientras mantienen su autenticidad serán los que definan la próxima década del arte urbano.</p>
    `,
  },
  '7': {
    id: '7',
    title: 'Del Bronx al Mundo: La Historia de King Cipher',
    excerpt: 'Un recorrido por la carrera del rapero que comenzó en los freestyles del Bronx y ahora es celebrado internacionalmente.',
    category: 'Entrevistas',
    date: '2026-01-28',
    author: 'DJ Remix',
    image: 'https://m.media-amazon.com/images/I/81x1YwSgayL.png',
    readTime: 9,
    authorBio: 'DJ, productor y periodista musical. Ha seguido la carrera de King Cipher desde sus inicios en el underground del Bronx.',
    content: `
      <p>De los freestyles en las esquinas del Bronx a los escenarios más grandes del mundo, la trayectoria de King Cipher es un testimonio del poder del talento y la perseverancia. En esta entrevista exclusiva, recorremos su historia.</p>
      
      <h3>Los Comienzos (2006-2010)</h3>
      <p>Todo comenzó en las batallas de freestyle del Bronx. Con apenas 16 años, King Cipher (entonces conocido como "Cipha") dominaba los círculos de rima con su aguda inteligencia y flows imparables. "Era el único lugar donde me sentía completo", recuerda.</p>
      
      <p>Sus primeras grabaciones fueron caseras: un micrófono de $20 en el armario de su abuela convertido en estudio. Esas cintas caseras circulaban por el barrio, creando un buzz que pronto llamaría la atención de productores locales.</p>
      
      <h3>La Transición al Estudio (2011-2015)</h3>
      <p>Su EP debut "Concrete Jungle" (2012) marcó un antes y un después. Grabado en estudios improvisados de Brooklyn, el proyecto mostraba un artista que ya había trascendido el formato de batallas. Letras profundas, beats innovadores y una voz única.</p>
      
      <p>"No quería ser solo un MC de batallas. Quería contar historias, crear mundos sonoros", explica King Cipher sobre su evolución.</p>
      
      <h3>El Reconocimiento Internacional (2016-2020)</h3>
      <p>Su álbum "NYC State of Mind" (2017) lo catapultó a la fama internacional. Giras por Europa, Asia y Sudamérica. Colaboraciones con artistas de renombre mundial. De repente, el chico del Bronx estaba vendiendo out shows en Londres y Tokio.</p>
      
      <h3>La Madurez Artística (2021-Presente)</h3>
      <p>Ahora, con 20 años de carrera, King Cipher se siente más creativo que nunca. Su próximo álbum "Concreto Puro" promete ser su trabajo más ambicioso. "He vivido lo suficiente como para saber quién soy como artista. Ahora es sobre perfeccionar esa voz", afirma.</p>
      
      <h3>Legado y Futuro</h3>
      <p>Más allá de la música, King Cipher es un mentor para jóvenes artistas del Bronx. A través de talleres y programas comunitarios, está devolviendo a su comunidad lo que esta le dio. "Si puedo ayudar a un solo chico o chica a evitar los errores que yo cometí, mi trabajo habrá valido la pena", concluye.</p>
    `,
  },
  '8': {
    id: '8',
    title: 'Producción de Música Electrónica: Herramientas Esenciales',
    excerpt: 'Una guía completa sobre el software, hardware y técnicas necesarias para producir música electrónica de calidad profesional.',
    category: 'Tutoriales',
    date: '2026-01-25',
    author: 'Sofia Records',
    image: 'https://www.corazon.cl/wp-content/uploads/2022/06/Dainesitta-768x480.jpg',
    readTime: 11,
    authorBio: 'Productora de música electrónica e ingeniera de sonido. Ha trabajado con artistas de ILUMINATY y enseña producción musical en Brooklyn.',
    content: `
      <p>Producir música electrónica de calidad profesional requiere más que talento: necesitas las herramientas adecuadas. En esta guía completa, cubrimos todo lo que necesitas para comenzar o llevar tu producción al siguiente nivel.</p>
      
      <h3>Software (DAWs)</h3>
      <p>El corazón de tu estudio es el DAW (Digital Audio Workstation). Aquí tus ideas cobran vida. Las opciones principales incluyen:</p>
      
      <p><strong>Ableton Live:</strong> Ideal para producción en vivo y electronic music. Su interfaz de session view es perfecta para improvisar y experimentar.</p>
      
      <p><strong>FL Studio:</strong> Popular entre productores de hip-hop y EDM. Su patrón de step sequencer es intuitivo y potente.</p>
      
      <p><strong>Logic Pro X:</strong> Exclusivo para Mac. Ofrece una biblioteca de sonidos impresionante y es excelente para mezcla.</p>
      
      <h3>Hardware Esencial</h3>
      <p><strong>Interfaz de Audio:</strong> Convierte señales analógicas a digitales. Recomendamos Focusrite Scarlett o Universal Audio para calidad profesional.</p>
      
      <p><strong>Monitores de Estudio:</strong> No uses auriculares de consumo para mezclar. Invierte en monitores planos como KRK Rokit o Yamaha HS.</p>
      
      <p><strong>MIDI Controller:</strong> Un teclado MIDI de 49 teclas es suficiente para empezar. Akai, Novation y Arturia ofrecen excelentes opciones.</p>
      
      <h3>Plugins y Librerías de Sonido</h3>
      <p><strong>Sintetizadores Virtuales:</strong> Serum, Massive y Sylenth1 son estándares de la industria para crear sonidos únicos.</p>
      
      <p><strong>Bibliotecas de Samples:</strong> Splice es una suscripción invaluable. Acceso a millones de samples, loops y one-shots de calidad profesional.</p>
      
      <h3>Técnicas Fundamentales</h3>
      <p><strong>EQ:</strong> Aprende a cortar frecuencias en lugar de solo boostear. Un buen EQ hace que tu mezcla respire.</p>
      
      <p><strong>Compresión:</strong> Controla el rango dinámico. La compresión paralela en drums añade punch sin perder dinámica.</p>
      
      <p><strong>Sidechain:</strong> Técnica esencial en música electrónica. Crea ese efecto de "pumping" que hace que el kick brille.</p>
      
      <h3>El Entorno de Trabajo</h3>
      <p>No subestimes la importancia del tratamiento acústico. Incluso en un dormitorio, paneles de espuma acústica y bass traps pueden mejorar drásticamente la precisión de tu monitoreo.</p>
      
      <h3>Conclusión</h3>
      <p>La mejor herramienta es la que conoces en profundidad. No caigas en la trampa de comprar más gear pensando que mejorará tu música. Domina lo que tienes, entiende cada parámetro, y tu sonido mejorará naturalmente.</p>
    `,
  },
  '9': {
    id: '9',
    title: 'Cómo Monetizar tu Arte en ILUMINATY',
    excerpt: 'Estrategias prácticas para artistas urbanos: desde sponsorships hasta distribución digital y oportunidades de booking.',
    category: 'Tutoriales',
    date: '2026-01-22',
    author: 'Marcus Jay',
    image: 'https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/1586/content_andrew-neel-218073.jpg',
    readTime: 7,
    authorBio: 'Estratega digital especializado en monetización para artistas. Ha ayudado a más de 100 artistas a generar ingresos sostenibles con su arte.',
    content: `
      <p>El arte es pasión, pero también puede ser un negocio sostenible. ILUMINATY ofrece múltiples vías para que los artistas urbanos monetizen su talento. Aquí te presentamos las estrategias más efectivas.</p>
      
      <h3>1. Distribución Digital Directa</h3>
      <p>ILUMINATY permite distribuir tu música directamente a plataformas como Spotify, Apple Music y Tidal. Pero vamos más allá: ofrecemos splits de ingresos más justos que los distribuidores tradicionales, y te mantenemos en control total de tu masters.</p>
      
      <p><strong>Tip:</strong> Usa nuestra herramienta de release planning para sincronizar tus lanzamientos con eventos locales y maximizar el impacto.</p>
      
      <h3>2. Merchandising y Productos Digitales</h3>
      <p>No limites tu merch a camisetas. En ILUMINATY puedes vender:</p>
      <ul>
        <li>Beat packs y sample packs</li>
        <li>Stems de tus canciones para remixes</li>
        <li>Tickets para shows exclusivos</li>
        <li>Experiencias VIP (backstage, estudios)</li>
        <li>Arte digital y NFTs</li>
      </ul>
      
      <h3>3. Oportunidades de Booking</h3>
      <p>Nuestra red de promotores y venues está constantemente buscando talento. Mantén tu perfil actualizado con:</p>
      <ul>
        <li>Videos de performances en vivo</li>
        <li>Press kit profesional</li>
        <li>Rider técnico claro</li>
        <li>Referencias de shows anteriores</li>
      </ul>
      
      <h3>4. Patrocinios y Brand Deals</h3>
      <p>Conectamos artistas con marcas que buscan autenticidad urbana. Desde ropa streetwear hasta tecnología y bebidas, hay oportunidades para todos los niveles de carrera.</p>
      
      <p><strong>Importante:</strong> Solo acepta patrocinios que resonen con tu marca personal. La autenticidad es tu activo más valioso.</p>
      
      <h3>5. Servicios Freelance</h3>
      <p>Muchos artistas generan ingresos estables ofreciendo servicios:</p>
      <ul>
        <li>Producción para otros artistas</li>
        <li>Clases de música o arte</li>
        <li>Diseño gráfico y branding</li>
        <li>Fotografía y videografía</li>
        <li>Ghostwriting</li>
      </ul>
      
      <h3>6. Crowdfunding y Fan Support</h3>
      <p>Plataformas como Patreon integradas en ILUMINATY permiten a tus fans más dedicados apoyarte mensualmente a cambio de contenido exclusivo: demos, behind-the-scenes, Q&As mensuales.</p>
      
      <h3>7. Sincronización y Licencias</h3>
      <p>Tu música en películas, series, videojuegos y comerciales puede generar ingresos significativos. ILUMINATY tiene conexiones directas con music supervisors que buscan sonidos urbanos auténticos.</p>
      
      <h3>Construyendo un Negocio Sostenible</h3>
      <p>La clave es diversificación. No dependas de una sola fuente de ingresos. Comienza con 2-3 estrategias, domínalas, y luego expande. Recuerda: el negocio del arte es un maratón, no un sprint.</p>
      
      <p>En ILUMINATY creemos que los artistas merecen vivir de su arte. Estamos aquí para proporcionarte las herramientas y conexiones que necesitas para hacerlo realidad.</p>
    `,
  },
}

const post = computed(() => {
  const postId = route.params.id as string
  return posts[postId] || posts['1']
})

const relatedPosts = computed(() => {
  const allPosts = Object.values(posts) as any[]
  return allPosts.filter(p => p.id !== post.value.id).slice(0, 2)
})

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Noticias': 'bg-neon-lime/20 text-neon-lime border border-neon-lime/30',
    'Análisis': 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
    'Tutoriales': 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
    'Entrevistas': 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
    'Tendencias': 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30',
    'Colaboraciones': 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
  }
  return colors[category] || 'bg-gray-200 text-gray-700'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const navigateTo = (id: string) => {
  router.push(`/blog/${id}`)
}
</script>
