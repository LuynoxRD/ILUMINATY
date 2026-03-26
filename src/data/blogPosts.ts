import { imageAssets } from '@/data/assets'

export type BlogCategory =
  | 'Noticias'
  | 'Análisis'
  | 'Tutoriales'
  | 'Entrevistas'
  | 'Tendencias'
  | 'Colaboraciones'

export interface BlogSection {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  category: BlogCategory
  date: string
  author: string
  authorBio: string
  image: string
  imageAlt: string
  readTime: number
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'king-cipher-anuncia-concreto-puro',
    title: 'King Cipher anuncia nuevo álbum "Concreto Puro"',
    excerpt:
      'Tras meses de especulación, el rapero de Harlem revela los detalles de su próxima obra y confirma una gira de presentación.',
    metaDescription:
      'Conoce las claves del nuevo álbum de King Cipher, sus colaboraciones principales y la estrategia de lanzamiento de Concreto Puro.',
    category: 'Noticias',
    date: '2026-02-12',
    author: 'Marcus Jay',
    authorBio:
      'Crítico musical con 10 años de experiencia en la escena hip-hop de Nueva York. Cubre noticias, lanzamientos y tendencias urbanas.',
    image: imageAssets.blog.kingCipherAlbum,
    imageAlt: 'King Cipher presentando la dirección visual de su nuevo álbum',
    readTime: 5,
    sections: [
      {
        title: 'Un álbum pensado como documento urbano',
        paragraphs: [
          'Tras meses de especulación y adelantos medidos, King Cipher confirmó que su próximo álbum se titulará Concreto Puro. El proyecto reúne una narrativa centrada en la vida cotidiana del Harlem contemporáneo y en la evolución personal del artista.',
          'Según su equipo, el disco fue diseñado para funcionar como un retrato sonoro de la ciudad: más introspectivo que sus trabajos anteriores, pero con la misma agresividad lírica que lo convirtió en una referencia del circuito neoyorquino.',
        ],
      },
      {
        title: 'Catorce tracks con un enfoque más cinematográfico',
        paragraphs: [
          'El álbum incluirá 14 canciones que alternan piezas de alto impacto con momentos más íntimos. En los adelantos ya publicados se percibe una producción más amplia, con arreglos que priorizan atmósfera, textura y detalle.',
          'Asfalto y Sueños, el primer single, ya se convirtió en una señal clara del tono del proyecto: percusión seca, bajos profundos y un relato muy visual sobre la presión de crecer dentro de la ciudad.',
        ],
        bullets: [
          'Producción ejecutiva de Sofia Records.',
          'Colaboración de Luna Vibe Collective en un corte atmosférico.',
          'Participación especial de DJ Premier en el cierre del álbum.',
        ],
      },
      {
        title: 'Lanzamiento, preventa y gira',
        paragraphs: [
          'Concreto Puro estará disponible el 28 de marzo de 2026 en plataformas de streaming y en la experiencia editorial de ILUMINATY. La preventa incluirá contenido exclusivo, acceso anticipado y material detrás de cámaras.',
          'King Cipher también confirmó una gira de presentación con arranque en Nueva York, antes de pasar por otras ciudades clave del circuito urbano norteamericano.',
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'la-escena-urbana-de-nyc-explota-en-2026',
    title: 'La escena urbana de NYC explota en 2026',
    excerpt:
      'Con más de 85 eventos confirmados, Nueva York se consolida como el epicentro global del arte urbano y la música de vanguardia.',
    metaDescription:
      'Analizamos por qué 2026 está marcando un punto de inflexión para la escena urbana de Nueva York y qué rol juega ILUMINATY en ese crecimiento.',
    category: 'Análisis',
    date: '2026-02-10',
    author: 'DJ Remix',
    authorBio:
      'Productor, DJ y analista de tendencias musicales con 15 años dentro del circuito electrónico y urbano de Nueva York.',
    image: imageAssets.blog.nycUrbanScene,
    imageAlt: 'Panorámica de un evento urbano masivo en Nueva York',
    readTime: 7,
    sections: [
      {
        title: 'Una densidad de eventos que no existía hace dos años',
        paragraphs: [
          'El calendario 2026 marca un salto claro frente a temporadas anteriores. Hay más eventos, más formatos híbridos y una mejor articulación entre música, arte visual y comunidad.',
          'Festivales, showcases, listening sessions, laboratorios creativos y encuentros de promotores conviven ahora dentro de una misma conversación cultural.',
        ],
      },
      {
        title: 'Más inversión y mejores oportunidades para artistas emergentes',
        paragraphs: [
          'La escena crece no solo por cantidad, sino por estructura. Marcas, colectivos y gestores están apostando por propuestas que antes eran vistas como nicho.',
          'Ese movimiento mejora los honorarios, amplía el rango de colaboraciones y permite que artistas emergentes entren a circuitos profesionales sin depender tanto de intermediarios cerrados.',
        ],
        bullets: [
          'Más cachets para actos emergentes.',
          'Mayor presencia de patrocinio cultural en barrios periféricos.',
          'Mejor conexión entre promotores, artistas y públicos especializados.',
        ],
      },
      {
        title: 'ILUMINATY como capa editorial y de descubrimiento',
        paragraphs: [
          'La plataforma juega un rol concreto dentro de este crecimiento: ordenar el flujo de artistas, eventos y contexto cultural en un mismo espacio.',
          'Ese valor editorial es lo que convierte a ILUMINATY en algo más que un directorio. Funciona como una capa de lectura para entender lo que está pasando en la escena y anticipar hacia dónde se mueve.',
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'luna-vibe-collective-colabora-con-productor-japones',
    title: 'Luna Vibe Collective colabora con productor japonés',
    excerpt:
      'El colectivo de Brooklyn se une a Takeshi Nakamura para desarrollar una experiencia audiovisual con proyección internacional.',
    metaDescription:
      'Detalles de la colaboración entre Luna Vibe Collective y Takeshi Nakamura, una alianza que expande la lectura global del arte urbano neoyorquino.',
    category: 'Colaboraciones',
    date: '2026-02-08',
    author: 'Sofia Records',
    authorBio:
      'Productora de música electrónica y curadora de experiencias culturales. Su trabajo conecta sonido, dirección creativa y narrativa inmersiva.',
    image: imageAssets.blog.lunaVibeJapan,
    imageAlt: 'Escena visual que representa la colaboración internacional de Luna Vibe Collective',
    readTime: 4,
    sections: [
      {
        title: 'Una alianza que expande el lenguaje del colectivo',
        paragraphs: [
          'Luna Vibe Collective confirmó su nueva colaboración con Takeshi Nakamura, productor japonés reconocido por sus instalaciones sonoras y propuestas inmersivas.',
          'El objetivo no es sumar un featuring puntual, sino construir una pieza integral que dialogue con sonido, espacio, performance y visualidad.',
        ],
      },
      {
        title: 'Nueva York y Tokio en un mismo relato',
        paragraphs: [
          'La colaboración trabaja sobre dos impulsos distintos: la urgencia cruda de Brooklyn y el minimalismo tecnológico asociado a Tokio. Esa tensión es precisamente lo que vuelve atractivo el proyecto.',
          'El equipo creativo describe la obra como una experiencia de club expandido, donde el público no solo escucha, sino que también recorre y activa distintas capas del montaje.',
        ],
      },
      {
        title: 'Debut internacional y gira posterior',
        paragraphs: [
          'El estreno está previsto para Art Basel Miami Week 2026, con una versión posterior adaptada a salas en Tokio, Berlín y Nueva York.',
          'Para ILUMINATY, esta alianza también funciona como prueba editorial de que la escena urbana local puede operar como exportadora de lenguaje cultural y no solo de talento individual.',
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'guia-como-comenzar-tu-carrera-en-el-graffiti-urbano',
    title: 'Guía: cómo comenzar tu carrera en el graffiti urbano',
    excerpt:
      'Spray Angel comparte bases prácticas para empezar con criterio: técnica, espacios legales y desarrollo de estilo propio.',
    metaDescription:
      'Una guía clara para artistas que quieren empezar en el graffiti urbano con respeto por la cultura y una ruta de aprendizaje sostenible.',
    category: 'Tutoriales',
    date: '2026-02-05',
    author: 'Spray Angel',
    authorBio:
      'Artista de graffiti con murales en Nueva York, Londres y Barcelona. Trabaja entre espacio público, exhibición y formación comunitaria.',
    image: imageAssets.blog.graffitiGuide,
    imageAlt: 'Mural urbano usado como referencia para una guía de graffiti',
    readTime: 6,
    sections: [
      {
        title: 'Empieza por entender el lenguaje visual',
        paragraphs: [
          'Antes de tocar una lata, conviene estudiar la cultura: tags, throw-ups, pieces, wildstyle y la historia social detrás de cada código.',
          'Dibujar en papel sigue siendo una de las mejores formas de construir memoria visual y aprender proporción, ritmo y firma.',
        ],
      },
      {
        title: 'Invierte en herramientas y práctica controlada',
        paragraphs: [
          'El salto entre materiales genéricos y materiales correctos es enorme. Una buena selección de latas, caps y soportes cambia por completo la curva de aprendizaje.',
          'También es importante entender desde el inicio qué tipo de superficie vas a intervenir y cómo cambia el comportamiento de la pintura según el contexto.',
        ],
        bullets: [
          'Practica primero en soportes controlados.',
          'Aprende presión, distancia y lectura de color.',
          'Crea una firma coherente antes de escalar piezas complejas.',
        ],
      },
      {
        title: 'La comunidad es parte del oficio',
        paragraphs: [
          'El graffiti no existe sin contexto. Conocer espacios legales, crews, referentes y códigos de respeto evita errores frecuentes y acelera el crecimiento.',
          'En ILUMINATY, ese aprendizaje puede conectarse además con oportunidades de exhibición, workshops y encargos que convierten una práctica personal en carrera sostenible.',
        ],
      },
    ],
  },
  {
    id: '5',
    slug: 'entrevista-exclusiva-luna-vibe-collective',
    title: 'Entrevista exclusiva: Luna Vibe Collective',
    excerpt:
      'Una conversación sobre proceso creativo, referencias visuales y la forma en que entienden el futuro de la música electrónica urbana.',
    metaDescription:
      'Luna Vibe Collective explica su proceso creativo, sus influencias y la manera en que construyen experiencias inmersivas dentro de la escena urbana.',
    category: 'Entrevistas',
    date: '2026-02-03',
    author: 'Marcus Jay',
    authorBio:
      'Periodista especializado en música experimental. Ha publicado entrevistas y perfiles en medios de cultura, sonido y arte contemporáneo.',
    image: imageAssets.blog.lunaVibeInterview,
    imageAlt: 'Luna Vibe Collective en una sesión de estudio',
    readTime: 8,
    sections: [
      {
        title: 'El origen del colectivo',
        paragraphs: [
          'Luna Vibe Collective nació como respuesta a una limitación concreta: la falta de espacios donde sonido, visualidad y performance pudieran dialogar sin tener que adaptarse a formatos más tradicionales.',
          'Desde el inicio, su trabajo estuvo pensado para ocupar salas, clubes, pantallas y plataformas digitales con el mismo nivel de intención.',
        ],
      },
      {
        title: 'Cómo construyen una pieza',
        paragraphs: [
          'El colectivo trabaja desde referencias compartidas, moodboards, texturas y conversaciones largas antes de producir un solo beat. Esa metodología explica por qué sus lanzamientos tienen una identidad tan reconocible.',
          'Su proceso no separa lo musical de lo visual. Cada track se evalúa también por su capacidad de abrir un universo de color, movimiento y puesta en escena.',
        ],
      },
      {
        title: 'El siguiente paso de la electrónica urbana',
        paragraphs: [
          'Para Luna Vibe, la siguiente frontera no está solo en el sonido sino en la capacidad de crear contextos inmersivos alrededor de la música.',
          'Eso implica pensar plataformas, contenidos y presentaciones en vivo como una misma conversación. Ahí es donde ILUMINATY les sirve como escaparate y archivo de proceso.',
        ],
      },
    ],
  },
  {
    id: '6',
    slug: 'tendencias-clave-en-arte-urbano-y-hip-hop-2026',
    title: '2026: tendencias clave en arte urbano y hip-hop',
    excerpt:
      'Sonidos híbridos, narrativas más visuales y una escena que se apoya cada vez más en comunidad y documentación editorial.',
    metaDescription:
      'Estas son las tendencias que están moldeando el arte urbano y el hip-hop en 2026, desde nuevos formatos visuales hasta modelos de circulación cultural.',
    category: 'Tendencias',
    date: '2026-02-01',
    author: 'Sofia Records',
    authorBio:
      'Productora y observadora de tendencias en música urbana. Investiga cómo cambian los formatos de lanzamiento, colaboración y visibilidad.',
    image: imageAssets.blog.trends2026,
    imageAlt: 'Escena urbana representando tendencias creativas para 2026',
    readTime: 10,
    sections: [
      {
        title: 'Menos géneros puros, más mezclas con criterio',
        paragraphs: [
          'La escena ya no se organiza solo por etiquetas clásicas. En 2026 es más común ver proyectos que mezclan rap, electrónica, ambient, spoken word y performance visual dentro de una misma pieza.',
          'La diferencia está en que ahora esas mezclas no son accesorias: forman parte del centro conceptual del proyecto.',
        ],
      },
      {
        title: 'La identidad visual pesa tanto como el single',
        paragraphs: [
          'Los artistas ya no compiten solo por escucha. Compiten también por construir universos reconocibles: portadas, motion, fotografía, teaser y presencia editorial.',
          'Eso favorece a plataformas capaces de ordenar relato, archivo y descubrimiento, no solo reproducción.',
        ],
      },
      {
        title: 'Comunidad, archivo y relación directa',
        paragraphs: [
          'Los proyectos que mejor crecen son los que entienden comunidad y contenido como partes del mismo sistema.',
          'Por eso herramientas como directorios, blog, suscripciones y cobertura editorial ya no son extras. Son infraestructura de carrera.',
        ],
      },
    ],
  },
  {
    id: '7',
    slug: 'del-bronx-al-mundo-la-historia-de-king-cipher',
    title: 'Del Bronx al mundo: la historia de King Cipher',
    excerpt:
      'Un recorrido por la carrera del rapero que pasó de los freestyles barriales a convertirse en una referencia internacional.',
    metaDescription:
      'La historia de King Cipher, desde sus primeras batallas en el Bronx hasta su consolidación como voz central del rap urbano contemporáneo.',
    category: 'Entrevistas',
    date: '2026-01-28',
    author: 'DJ Remix',
    authorBio:
      'Analista cultural y DJ. Se especializa en perfilar artistas que marcan cambios reales dentro del ecosistema urbano.',
    image: imageAssets.blog.kingCipherStory,
    imageAlt: 'Portada visual sobre la trayectoria de King Cipher',
    readTime: 9,
    sections: [
      {
        title: 'Las primeras batallas y el oído de barrio',
        paragraphs: [
          'King Cipher se formó en el circuito de freestyle, donde la respuesta del público es inmediata y la credibilidad no puede fingirse.',
          'Ese origen sigue siendo visible en su manera de escribir: frases cortantes, imágenes directas y una necesidad constante de sostener peso verbal.',
        ],
      },
      {
        title: 'Cómo convirtió esa energía en obra consistente',
        paragraphs: [
          'El salto importante no fue firmar o sonar más grande. Fue aprender a transformar esa intensidad inicial en discos con estructura, narrativa y largo aliento.',
          'Esa transición es la que hoy lo vuelve una figura sólida: no depende solo del momento, sino de una obra cada vez más reconocible.',
        ],
      },
      {
        title: 'Una carrera que también enseña modelo',
        paragraphs: [
          'La historia de King Cipher también sirve para entender cómo crece una carrera urbana cuando logra equilibrar comunidad, catálogo y visibilidad.',
          'ILUMINATY utiliza perfiles como el suyo para mostrar que el desarrollo artístico no ocurre por azar, sino por acumulación de decisiones correctas.',
        ],
      },
    ],
  },
  {
    id: '8',
    slug: 'produccion-de-musica-electronica-herramientas-esenciales',
    title: 'Producción de música electrónica: herramientas esenciales',
    excerpt:
      'Una guía clara sobre software, hardware y decisiones de flujo de trabajo para producir con criterio profesional.',
    metaDescription:
      'Qué herramientas conviene priorizar al empezar o escalar en producción electrónica: DAWs, monitores, controladores y flujo de trabajo.',
    category: 'Tutoriales',
    date: '2026-01-25',
    author: 'Sofia Records',
    authorBio:
      'Productora y directora creativa. Trabaja entre sets en vivo, diseño de sonido y formación para artistas emergentes.',
    image: imageAssets.blog.productionTools,
    imageAlt: 'Setup de producción musical con herramientas electrónicas',
    readTime: 11,
    sections: [
      {
        title: 'El software es importante, pero el flujo importa más',
        paragraphs: [
          'Elegir DAW, plugins y plantillas es relevante, pero lo verdaderamente decisivo es construir un flujo sostenible que te permita terminar ideas.',
          'Muchos productores acumulan herramientas antes de dominar una sola. El resultado suele ser más fricción que libertad.',
        ],
      },
      {
        title: 'Qué equipo conviene priorizar primero',
        paragraphs: [
          'Cuando el presupuesto es limitado, conviene priorizar lo que más impacto tiene en escucha y control: buenos monitores o audífonos, interfaz confiable y un entorno mínimo bien calibrado.',
          'El resto puede crecer por capas según el tipo de proyecto que quieras construir.',
        ],
        bullets: [
          'Un DAW principal bien dominado.',
          'Monitoreo estable y escucha crítica.',
          'Biblioteca de sonidos pequeña pero útil.',
        ],
      },
      {
        title: 'De la idea al lanzamiento',
        paragraphs: [
          'La producción profesional ya no termina en bounce final. También incluye organización de stems, arte visual, metadata y estrategia de publicación.',
          'Por eso es importante pensar la música dentro de un sistema más amplio donde la pieza, su historia y su distribución conviven desde el inicio.',
        ],
      },
    ],
  },
]

export const sortedBlogPosts = [...blogPosts].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
)

export const blogPostPaths = sortedBlogPosts.map(post => `/blog/${post.slug}`)

export const getBlogPostBySlug = (slug: string) =>
  sortedBlogPosts.find(post => post.slug === slug)

export const getBlogPostById = (id: string) =>
  sortedBlogPosts.find(post => post.id === id)
