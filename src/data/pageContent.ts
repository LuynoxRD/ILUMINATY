import type {
  AboutPageContent,
  ArtistsPageContent,
  BlogPageContent,
  ContactPageContent,
  EventsPageContent,
  HomePageContent,
  LegalPageContent,
  SiteSettings,
} from '@/types/content'

export const siteSettings: SiteSettings = {
  brandName: 'ILUMINATY',
  footerDescription:
    'La plataforma definitiva para el arte urbano de Nueva York. Descubre, conecta y apoya artistas revolucionarios.',
  footerLinkGroups: [
    {
      title: 'Explorar',
      links: [
        { label: 'Artistas', href: '/artistas' },
        { label: 'Blog', href: '/blog' },
        { label: 'Eventos', href: '/eventos' },
        { label: 'Contacto', href: '/contacto' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
        { label: 'Privacidad', href: '/privacidad' },
        { label: 'Términos', href: '/terminos' },
        { label: 'Cookies', href: '/cookies' },
      ],
    },
  ],
  footerFollowLabel: 'Síguenos',
  footerCopyright: '© 2026 Iluminaty. Todos los derechos reservados. Potencia el arte urbano de NYC.',
  footerCreditPrefix: 'Powered by',
  footerCreditName: 'LuynoxRD',
  footerCreditHref: 'https://github.com/LuynoxRD',
  footerCreditConnector: 'and',
  footerTechnologyName: 'Vue.js',
  footerTechnologyHref: 'https://vuejs.org',
  footerRepositoryLink: {
    label: 'View Repository',
    href: 'https://github.com/LuynoxRD/ILUMINATY',
  },
  socialProfiles: {
    instagram: 'https://instagram.com/luynoxrd',
    facebook: 'https://www.facebook.com/luynoxrd',
    youtube: 'https://youtube.com/@LuynoxRD',
    tiktok: 'https://tiktok.com/@luynoxrd',
    github: 'https://github.com/LuynoxRD',
  },
}

export const homePage: HomePageContent = {
  hero: {
    highlightedWord: 'Descubre',
    titleRemainder: 'el talento más revolucionario de NYC',
    description:
      'La plataforma definitiva para conectar con artistas urbanos, raperos, productores y creadores visuales de Nueva York. Exploración sin límites.',
    primaryCta: { label: 'Explorar Artistas', href: '/artistas' },
    secondaryCta: { label: 'Ver Eventos', href: '/eventos' },
    stats: [
      { label: 'Artistas', value: 500, suffix: '+', format: 'plain' },
      { label: 'Seguidores', value: 1200000, format: 'millions' },
      { label: 'Eventos/Año', value: 85, suffix: '+', format: 'plain' },
    ],
  },
  labelsSection: {
    title: 'El futuro del arte urbano está aquí',
    description: 'Trabajamos con los mejores sellos discográficos',
  },
  highlightCard: {
    title: '500+ Artistas',
    description: 'Conectados y creando arte urbano de clase mundial',
  },
  featuredArtistsSection: {
    title: 'Artistas Destacados',
    description: 'Destaca hasta 10 perfiles para dar contexto visual inmediato desde la portada.',
  },
  communitySection: {
    title: 'Una Comunidad que Crece',
    description:
      'ILUMINATY es más que una plataforma. Es un movimiento de artistas urbanos, productores y creadores que comparten una visión: democratizar el arte sin límites.',
    benefits: [
      'Acceso a oportunidades de booking y colaboraciones',
      'Herramientas para gestionar tu carrera artística',
      'Eventos exclusivos y mentorías de expertos',
      'Visibilidad global para tu arte',
    ],
    cta: {
      label: 'Solicitar Acceso',
      href: '/contacto',
    },
  },
  faqSection: {
    title: 'Preguntas frecuentes',
    description: 'Si tienes alguna otra pregunta,',
    contactLink: {
      label: 'no dudes en escribirnos',
      href: '/contacto',
    },
    items: [
      {
        question: '¿Cómo sé que la comunidad es segura?',
        answer: 'Moderamos perfiles, revisamos solicitudes y mantenemos controles básicos para cuidar la comunidad.',
      },
      {
        question: '¿Dónde está basada ILUMINATY?',
        answer: 'La plataforma se enfoca en Nueva York y en la escena urbana que une artistas, fans y promotores.',
      },
      {
        question: '¿Cómo protegen mis datos?',
        answer: 'Aplicamos buenas prácticas de manejo de información y evitamos exponer datos innecesarios.',
      },
      {
        question: '¿Es ILUMINATY una red social?',
        answer: 'Es una plataforma para descubrir artistas, conectar creadores y dar visibilidad a proyectos urbanos.',
      },
      {
        question: '¿Cómo me uno a la comunidad?',
        answer: 'Puedes solicitar acceso desde el CTA final y completar el formulario con tus datos y tu proyecto.',
      },
      {
        question: '¿Puedo invitar amigos?',
        answer: 'Sí. Puedes compartir la plataforma con otros artistas, colaboradores o promotores de tu red.',
      },
      {
        question: '¿Cuál es el límite de edad?',
        answer: 'Debes ser mayor de 18 años para registrarte y solicitar acceso a la comunidad.',
      },
      {
        question: '¿Puedo eliminar mi cuenta?',
        answer: 'Sí. Puedes solicitar la eliminación de tu cuenta y de tus datos cuando lo necesites.',
      },
      {
        question: '¿ILUMINATY es gratis?',
        answer: 'Sí. El acceso base puede solicitarse sin costo y luego se evalúa según el perfil del proyecto.',
      },
    ],
  },
  featuredBlogSection: {
    eyebrow: 'Blog destacado',
    title: 'Tres entradas para leer lo que mueve la escena urbana',
    description:
      'Historias, análisis y colaboraciones para que el visitante entienda que ILUMINATY también tiene profundidad editorial.',
    ctaLabel: 'Ver todo el blog',
  },
  newsletterSection: {
    title: 'Suscríbete al Blog',
    description: 'Recibe las últimas historias, análisis y tendencias del arte urbano directamente en tu inbox.',
    inputPlaceholder: 'Tu email',
    buttonLabel: 'Suscribirse',
    invalidMessage: 'Por favor ingresa un email válido.',
    successMessage: 'Suscripción activada. Pronto recibirás nuevas historias en tu inbox.',
    errorMessage: 'No pudimos procesar tu suscripción. Revisa la configuración del provider.',
  },
  appCta: {
    title: 'Descarga la app y sigue el pulso de la escena urbana',
    description: 'Descubre artistas, revisa eventos y conecta con la comunidad ILUMINATY desde tu teléfono.',
    iosButton: { label: 'Descargar para iOS', href: '#' },
    androidButton: { label: 'Descargar para Android', href: '#' },
  },
}

export const aboutPage: AboutPageContent = {
  heroTitle: 'Sobre ILUMINATY',
  heroDescription:
    'Somos más que una plataforma. Somos un movimiento que amplifica las voces de artistas urbanos de Nueva York.',
  missionSection: {
    subtitle: 'Propósito',
    title: 'Nuestra Misión',
    description: 'Crear un ecosistema donde el talento urbano prospera sin límites',
    heading: 'Democratizar la Visibilidad',
    body:
      'En ILUMINATY creemos que cada artista merece ser descubierto. No importa si estás comenzando en un sótano de Brooklyn o si ya eres una leyenda del Bronx. Nuestra plataforma reduce barreras y abre un espacio más claro para mostrar trabajo, conectar comunidad y activar oportunidades reales.',
    bullets: [
      'Conexión directa entre artistas y audiencia',
      'Promoción igualitaria sin sesgos corporativos',
      'Comunidad segura y colaborativa',
    ],
  },
  valuesSection: {
    eyebrow: 'Valores Core',
    title: 'Lo que nos Define',
    items: [
      {
        icon: 'A',
        title: 'Autenticidad',
        description: 'Celebramos el arte genuino, sin filtros ni compromisos comerciales forzados.',
      },
      {
        icon: 'C',
        title: 'Comunidad',
        description: 'Somos una red creativa. Los avances de cada artista elevan a todo el ecosistema.',
      },
      {
        icon: 'I',
        title: 'Innovación',
        description: 'Impulsamos nuevos sonidos, formatos y cruces entre música, visuales y comunidad.',
      },
      {
        icon: 'G',
        title: 'Inclusión',
        description: 'Todos los géneros, barrios y voces tienen lugar dentro de la plataforma.',
      },
    ],
  },
  teamSection: {
    subtitle: 'Las Mentes',
    title: 'Nuestro Equipo',
    description: 'Personas que mezclan cultura urbana, producto y tecnología',
  },
  manifestoSection: {
    title: 'El Manifiesto ILUMINATY',
    entries: [
      {
        accentLabel: 'Creemos',
        accentClass: 'text-neon-lime',
        body: 'que el arte urbano es la voz más honesta de Nueva York. Cada beat, cada letra y cada trazo registra una realidad que merece archivo y visibilidad.',
      },
      {
        accentLabel: 'Rechazamos',
        accentClass: 'text-neon-violet',
        body: 'la lógica de puertas cerradas que decide quién merece ser visto. ILUMINATY está diseñado para reducir fricción y abrir contexto.',
      },
      {
        accentLabel: 'Promovemos',
        accentClass: 'text-neon-cyan',
        body: 'colaboraciones sin ego entre artistas, productores, promotores y públicos que sí entienden la escena.',
      },
      {
        accentLabel: 'Protegemos',
        accentClass: 'text-neon-lime',
        body: 'la libertad creativa, la privacidad y el trabajo intelectual de cada creador que usa la plataforma.',
      },
      {
        accentLabel: 'Soñamos',
        accentClass: 'text-neon-violet',
        body: 'con una industria donde el talento y la constancia pesen más que la fricción de acceso.',
      },
    ],
  },
}

export const contactPage: ContactPageContent = {
  heroTitle: 'Contacto & Booking',
  heroDescription: 'Preguntas, booking o colaboraciones. Estamos aquí para escucharte.',
  infoTitle: 'Información de Contacto',
  socialTitle: 'Síguenos en Redes',
  formTitle: 'Envía un Mensaje',
  methods: [
    {
      title: 'Email',
      value: 'info@iluminaty.nyc',
      href: 'mailto:info@iluminaty.nyc',
      description: 'Respuesta en 24 horas hábiles',
      accentClass: 'text-neon-lime',
      icon: 'Email',
    },
    {
      title: 'Booking & Partnership',
      value: 'booking@iluminaty.nyc',
      href: 'mailto:booking@iluminaty.nyc',
      description: 'Colaboraciones, eventos y features',
      accentClass: 'text-neon-violet',
      icon: 'Booking',
    },
    {
      title: 'Soporte Técnico',
      value: 'support@iluminaty.nyc',
      href: 'mailto:support@iluminaty.nyc',
      description: 'Problemas con la plataforma',
      accentClass: 'text-neon-cyan',
      icon: 'Soporte',
    },
  ],
  office: {
    title: 'Oficina',
    lines: ['325 Lafayette Street', 'New York, NY 10012', 'USA'],
    hours: 'Abierto: Lunes - Viernes, 10am-6pm EST',
  },
  form: {
    nameLabel: 'Nombre Completo *',
    emailLabel: 'Email *',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'Selecciona un tema...',
    subjectOptions: [
      { value: 'booking', label: 'Booking / Partnership' },
      { value: 'artist', label: 'Registro como Artista' },
      { value: 'technical', label: 'Soporte Técnico' },
      { value: 'feedback', label: 'Feedback y Sugerencias' },
      { value: 'press', label: 'Prensa / Media' },
      { value: 'other', label: 'Otro' },
    ],
    phoneLabel: 'Teléfono (Opcional)',
    artistNameLabel: 'Nombre Artístico',
    artistNamePlaceholder: 'Tu nombre artístico...',
    genreLabel: 'Género/Disciplina',
    genrePlaceholder: 'Selecciona un género...',
    genreOptions: [
      { value: 'hip-hop', label: 'Hip-Hop / Rap' },
      { value: 'electronic', label: 'Electrónico' },
      { value: 'r-b', label: 'R&B / Soul' },
      { value: 'reggaeton', label: 'Reggaeton' },
      { value: 'visual', label: 'Arte Visual / Graffiti' },
      { value: 'production', label: 'Producción Musical' },
      { value: 'other', label: 'Otro' },
    ],
    messageLabel: 'Mensaje *',
    messagePlaceholder: 'Cuéntanos más sobre ti o tu propuesta...',
    messageLimit: 1000,
    privacyPrefix: 'He leído y acepto los',
    termsLabel: 'Términos y Condiciones',
    privacyLabel: 'Política de Privacidad',
    privacySuffix: 'Deseo recibir comunicaciones de ILUMINATY *',
    loadingMessage: 'Enviando tu mensaje...',
    successMessage: 'Mensaje enviado correctamente. Te contactaremos pronto.',
    errorMessage: 'Error al enviar. Intenta de nuevo o escribe directamente a info@iluminaty.nyc.',
    submitLabel: 'Enviar Mensaje',
    submitLoadingLabel: 'Enviando...',
  },
  faqTitle: 'Preguntas Frecuentes',
  faqs: [
    {
      question: '¿Cómo me registro como artista?',
      answer: 'Rellena el formulario de contacto seleccionando "Registro como Artista" como asunto. Nos pondremos en contacto en 24-48 horas. Necesitamos información sobre tu género musical, barrio y portfolio de trabajo.',
    },
    {
      question: '¿Cuál es el proceso de booking?',
      answer: 'Contáctanos en booking@iluminaty.nyc con detalles de tu propuesta. Nuestro equipo de eventos evaluará y responderá en 3-5 días hábiles.',
    },
    {
      question: '¿Es gratis unirse a ILUMINATY?',
      answer: 'Sí, el registro es completamente gratuito. Los artistas no pagan comisión por ventas de tickets de eventos que promovemos.',
    },
    {
      question: '¿Qué barrios de NYC cubren?',
      answer: 'Cubrimos los 5 condados y tenemos especial enfoque en comunidades de East Side, Harlem, Williamsburg y Jamaica Queens.',
    },
    {
      question: '¿Cómo protegen mis derechos de autor?',
      answer: 'Toda la música y contenido visual sube bajo licencia del artista. ILUMINATY no reclama derechos sobre tu trabajo.',
    },
    {
      question: '¿Hay membership premium?',
      answer: 'Actualmente ofrecemos cuenta gratuita para todos. Estamos desarrollando tiers premium con estadísticas, marketing avanzado y herramientas de colaboración.',
    },
  ],
}

export const artistsPage: ArtistsPageContent = {
  heroTitle: 'Directorio de Artistas',
  heroDescription:
    'Explora los perfiles de artistas urbanos, visuales y productores. Filtra por género, barrio o nombre y abre un perfil corto sin sacar al usuario del flujo.',
  filters: {
    genreLabel: 'Género',
    allGenresLabel: 'Todos los géneros',
    neighborhoodLabel: 'Barrio',
    allNeighborhoodsLabel: 'Todos los barrios',
    searchLabel: 'Buscar',
    searchPlaceholder: 'Nombre del artista...',
  },
  genreOptions: [
    { value: 'hip-hop', label: 'Hip-Hop / Rap' },
    { value: 'electronic', label: 'Electrónico' },
    { value: 'visual', label: 'Arte Visual' },
    { value: 'r-b', label: 'R&B / Soul' },
    { value: 'reggaeton', label: 'Reggaeton' },
  ],
  neighborhoodOptions: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Harlem', 'Williamsburg'],
  resultsSection: {
    subtitle: 'Comunidad Urbana',
    countSuffix: 'Artistas Encontrados',
  },
  actions: {
    viewProfileLabel: 'Ver Perfil',
  },
  popup: {
    musicTitle: 'Música',
    socialTitle: 'Redes',
    spotifyMeta: 'Escuchar catálogo',
    youtubeMeta: 'Ver canal oficial',
    appleMusicMeta: 'Abrir perfil musical',
    soundcloudMeta: 'Explorar lanzamientos',
    instagramMeta: 'Seguir contenido visual',
    tiktokMeta: 'Ver clips y highlights',
    xMeta: 'Leer novedades y anuncios',
  },
  emptyState: {
    icon: '🔍',
    title: 'No se encontraron artistas',
    description: 'Intenta cambiar los filtros para ver más resultados.',
  },
}

export const termsPage: LegalPageContent = {
  heroTitle: 'Términos y Condiciones',
  heroDescription: 'Por favor, lee detenidamente estos términos antes de utilizar nuestros servicios.',
  sections: [
    {
      title: '1. Aceptación de los Términos',
      paragraphs: [
        'Al acceder y utilizar ILUMINATY, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte, no debes utilizar el servicio.',
      ],
    },
    {
      title: '2. Descripción del Servicio',
      paragraphs: [
        'ILUMINATY es una plataforma que conecta artistas urbanos con audiencias. Proporcionamos herramientas para descubrir, promover y conectar artistas con fans, comunidades y oportunidades.',
      ],
    },
    {
      title: '3. Cuentas de Usuario',
      paragraphs: [
        'Para acceder a ciertas funciones, debes crear una cuenta. Eres responsable de mantener la confidencialidad de tu acceso y de las actividades que ocurran bajo tu perfil.',
      ],
      bullets: [
        'Debes proporcionar información precisa y completa.',
        'No puedes compartir tu cuenta con terceros.',
        'Debes notificarnos inmediatamente de cualquier uso no autorizado.',
      ],
    },
    {
      title: '4. Propiedad Intelectual',
      paragraphs: [
        'Todo el contenido disponible en ILUMINATY, incluyendo textos, gráficos, logos, imágenes y software, es propiedad de ILUMINATY o de sus licenciantes y está protegido por leyes de propiedad intelectual.',
      ],
    },
    {
      title: '5. Contenido del Usuario',
      paragraphs: [
        'Al subir contenido a ILUMINATY, garantizas que tienes los derechos necesarios para hacerlo. No puedes subir contenido que:',
      ],
      bullets: [
        'Infrinja derechos de autor o propiedad intelectual.',
        'Sea ilegal, ofensivo o difamatorio.',
        'Contenga malware o software dañino.',
        'Viole la privacidad de terceros.',
      ],
    },
    {
      title: '6. Privacidad',
      paragraphs: [
        'Tu privacidad es importante para nosotros. Consulta nuestra política relacionada para entender cómo recopilamos, usamos y protegemos tu información personal.',
      ],
      links: [{ label: 'Política de Privacidad', href: '/privacidad' }],
    },
    {
      title: '7. Modificaciones del Servicio',
      paragraphs: [
        'Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento, con o sin previo aviso. No seremos responsables por cambios, suspensiones o discontinuaciones del servicio.',
      ],
    },
    {
      title: '8. Limitación de Responsabilidad',
      paragraphs: [
        'ILUMINATY no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar el servicio.',
      ],
    },
    {
      title: '9. Ley Aplicable',
      paragraphs: [
        'Estos términos se regirán e interpretarán de acuerdo con las leyes del Estado de Nueva York, Estados Unidos, sin tener en cuenta disposiciones sobre conflictos de leyes.',
      ],
    },
    {
      title: '10. Cambios a los Términos',
      paragraphs: [
        'Podemos actualizar estos términos periódicamente. Publicaremos la versión más reciente en esta página. El uso continuado del servicio después de dichos cambios constituye tu aceptación de los nuevos términos.',
      ],
    },
  ],
  contactCard: {
    title: '11. Contacto',
    description: 'Si tienes preguntas sobre estos términos, puedes contactarnos en:',
    details: [
      { label: 'Email', value: 'legal@iluminaty.com' },
      { label: 'Dirección', value: '123 Calle del Arte, Brooklyn, NY 11201' },
    ],
  },
  footerNote: 'Última actualización: Febrero 2026',
  ctaTitle: '¿Tienes Preguntas?',
  ctaDescription: 'Nuestro equipo está aquí para ayudarte. Contáctanos si necesitas aclaraciones sobre nuestros términos.',
  ctaLink: { label: 'Contactar Soporte', href: '/contacto' },
}

export const privacyPage: LegalPageContent = {
  heroTitle: 'Política de Privacidad',
  heroDescription: 'Tu privacidad es nuestra prioridad. Conoce cómo protegemos y utilizamos tu información personal.',
  sections: [
    {
      title: '1. Información que Recopilamos',
      paragraphs: [
        'En ILUMINATY recopilamos información necesaria para proporcionar nuestros servicios. Esto incluye:',
      ],
      bullets: [
        'Información de registro: nombre, email y credenciales de acceso.',
        'Información de perfil: foto, biografía y redes sociales.',
        'Información de uso: cómo interactúas con la plataforma.',
        'Información técnica: dirección IP, navegador y dispositivo.',
      ],
    },
    {
      title: '2. Cómo Usamos tu Información',
      paragraphs: [
        'Utilizamos tu información para los siguientes propósitos:',
      ],
      bullets: [
        'Proporcionar y mantener nuestros servicios.',
        'Personalizar tu experiencia en la plataforma.',
        'Comunicarnos contigo sobre actualizaciones y promociones.',
        'Mejorar nuestros servicios mediante análisis de uso.',
        'Prevenir fraudes y proteger la seguridad.',
        'Cumplir con obligaciones legales.',
      ],
    },
    {
      title: '3. Compartir Información',
      paragraphs: [
        'No vendemos tu información personal a terceros. Solo compartimos información cuando:',
      ],
      bullets: [
        'Tú das consentimiento explícito.',
        'Es necesario para proveedores de servicios que nos ayudan a operar.',
        'Es requerido por ley o proceso legal.',
        'Es necesario para proteger nuestros derechos o seguridad.',
      ],
    },
    {
      title: '4. Seguridad de Datos',
      paragraphs: [
        'Implementamos medidas técnicas y organizativas para proteger tu información:',
      ],
      bullets: [
        'Encriptación SSL/TLS para transmisiones de datos.',
        'Almacenamiento seguro en servidores protegidos.',
        'Acceso restringido solo a personal autorizado.',
        'Monitoreo continuo y actualizaciones regulares de seguridad.',
      ],
    },
    {
      title: '5. Tus Derechos',
      paragraphs: [
        'Tienes los siguientes derechos respecto a tu información personal:',
      ],
      bullets: [
        'Acceso: solicitar una copia de tus datos.',
        'Rectificación: corregir información inexacta.',
        'Eliminación: solicitar la eliminación de tus datos.',
        'Portabilidad: recibir tus datos en formato legible.',
        'Restricción: limitar el procesamiento de tus datos.',
        'Oposición: oponerte al procesamiento de tus datos.',
      ],
    },
    {
      title: '6. Cookies y Tecnologías Similares',
      paragraphs: [
        'Utilizamos cookies para mejorar tu experiencia. Para más información, consulta nuestra política de cookies.',
      ],
      links: [{ label: 'Política de Cookies', href: '/cookies' }],
    },
    {
      title: '7. Retención de Datos',
      paragraphs: [
        'Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política o según lo requiera la ley. Cuando ya no sea necesaria, eliminaremos o anonimizaremos tus datos de manera segura.',
      ],
    },
    {
      title: '8. Cambios a esta Política',
      paragraphs: [
        'Podemos actualizar esta política periódicamente. Te notificaremos de cambios significativos mediante un aviso en la plataforma o por email. El uso continuado de nuestros servicios después de dichos cambios constituye tu aceptación de la política actualizada.',
      ],
    },
  ],
  contactCard: {
    title: '9. Contacto',
    description: 'Si tienes preguntas, inquietudes o deseas ejercer tus derechos de privacidad, contáctanos:',
    details: [
      { label: 'Email', value: 'privacy@iluminaty.com' },
      { label: 'Dirección', value: '123 Calle del Arte, Brooklyn, NY 11201' },
      { label: 'Teléfono', value: '+1 (555) 123-4567' },
    ],
  },
  footerNote: 'Última actualización: Febrero 2026',
  ctaTitle: '¿Tienes Preguntas sobre Privacidad?',
  ctaDescription: 'Nuestro equipo de privacidad está aquí para ayudarte. No dudes en contactarnos.',
  ctaLink: { label: 'Contactar Equipo de Privacidad', href: '/contacto' },
}

export const cookiesPage: LegalPageContent = {
  heroTitle: 'Política de Cookies',
  heroDescription: 'Información sobre cómo utilizamos cookies para mejorar tu experiencia en ILUMINATY.',
  sections: [
    {
      title: '1. ¿Qué son las Cookies?',
      paragraphs: [
        'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a hacer que ILUMINATY funcione correctamente, a mejorar tu experiencia y a entender cómo interactúas con la plataforma.',
      ],
    },
    {
      title: '2. Tipos de Cookies que Utilizamos',
      paragraphs: [],
      cards: [
        {
          title: 'Cookies Esenciales',
          description: 'Estas cookies son necesarias para el funcionamiento básico del sitio. No pueden desactivarse en nuestros sistemas.',
          bullets: [
            'Autenticación de usuarios.',
            'Seguridad del sitio.',
            'Preferencias básicas de usuario.',
          ],
          accentClass: 'border-neon-lime/20 bg-neon-lime/10',
        },
        {
          title: 'Cookies de Rendimiento',
          description: 'Permiten medir y mejorar el rendimiento de nuestro sitio.',
          bullets: [
            'Análisis de tráfico web.',
            'Identificación de páginas más populares.',
            'Detección de errores técnicos.',
          ],
          accentClass: 'border-neon-violet/20 bg-neon-violet/10',
        },
        {
          title: 'Cookies Funcionales',
          description: 'Permiten recordar tus preferencias para ofrecer funcionalidades mejoradas y más personales.',
          bullets: [
            'Preferencias de idioma.',
            'Configuración de tema oscuro o claro.',
            'Información de formularios guardada.',
          ],
          accentClass: 'border-neon-cyan/20 bg-neon-cyan/10',
        },
        {
          title: 'Cookies de Publicidad',
          description: 'Se utilizan para mostrar anuncios más relevantes y medir la efectividad de campañas publicitarias.',
          bullets: [
            'Personalización de anuncios.',
            'Medición de campañas.',
            'Evitar mostrar anuncios repetidos.',
          ],
          accentClass: 'border-gray-200 bg-gray-50',
        },
      ],
    },
    {
      title: '3. Cookies de Terceros',
      paragraphs: [
        'Además de nuestras propias cookies, también utilizamos cookies de terceros confiables para diversos propósitos:',
      ],
      bullets: [
        'Google Analytics para análisis de uso del sitio.',
        'Redes sociales para botones de compartir y widgets.',
        'Servicios de pago para transacciones seguras.',
        'Proveedores de contenido para videos y multimedia embebidos.',
      ],
    },
    {
      title: '4. Gestión de Cookies',
      paragraphs: [
        'Puedes controlar y gestionar las cookies de diversas formas:',
      ],
      cards: [
        {
          title: 'Configuración del Navegador',
          description: 'La mayoría de los navegadores te permiten ver, gestionar, eliminar y bloquear cookies. Consulta la configuración de privacidad de tu navegador para más información.',
          accentClass: 'border-neon-lime/20 bg-neon-lime/10',
        },
        {
          title: 'Panel de Preferencias',
          description: 'Puedes actualizar tus preferencias de cookies en cualquier momento desde tu panel de configuración de cuenta en ILUMINATY.',
          accentClass: 'border-neon-violet/20 bg-neon-violet/10',
        },
      ],
    },
    {
      title: '5. Duración de las Cookies',
      paragraphs: [
        'Las cookies pueden clasificarse según su duración:',
      ],
      bullets: [
        'Cookies de sesión: se eliminan cuando cierras el navegador.',
        'Cookies persistentes: permanecen en tu dispositivo por un periodo específico.',
      ],
    },
    {
      title: '6. Impacto de Desactivar Cookies',
      paragraphs: [
        'Si decides desactivar ciertas cookies, algunas funciones de ILUMINATY pueden no funcionar correctamente:',
      ],
      bullets: [
        'No podrás mantener tu sesión iniciada.',
        'Las preferencias personalizadas no se guardarán.',
        'Algunas funcionalidades pueden estar limitadas.',
        'La experiencia de usuario puede verse afectada.',
      ],
    },
    {
      title: '7. Actualizaciones de esta Política',
      paragraphs: [
        'Podemos actualizar esta política para reflejar cambios en las tecnologías que utilizamos o requisitos legales. Te notificaremos de cambios significativos mediante un aviso visible en la plataforma.',
      ],
    },
    {
      title: '8. Más Información',
      paragraphs: [
        'Para más información sobre cómo protegemos tu privacidad, consulta nuestra política relacionada.',
      ],
      links: [{ label: 'Política de Privacidad', href: '/privacidad' }],
    },
  ],
  contactCard: {
    title: '9. Contacto',
    description: 'Si tienes preguntas sobre nuestra política de cookies, contáctanos:',
    details: [
      { label: 'Email', value: 'cookies@iluminaty.com' },
      { label: 'Dirección', value: '123 Calle del Arte, Brooklyn, NY 11201' },
    ],
  },
  footerNote: 'Última actualización: Febrero 2026',
  ctaTitle: '¿Necesitas Ayuda?',
  ctaDescription: 'Estamos aquí para responder tus preguntas sobre cookies y privacidad.',
  ctaLink: { label: 'Contactar Soporte', href: '/contacto' },
}

export const eventsPage: EventsPageContent = {
  heroTitle: 'Calendario de Eventos',
  heroDescription: 'Descubre los shows, festivales y experiencias urbanas más esperadas de Nueva York.',
  statsLabels: {
    total: 'Eventos Totales',
    upcoming: 'Próximos',
    soldOut: 'Sold Out',
    available: 'Disponibles',
  },
  filters: {
    allMonthsLabel: 'Todos los meses',
    allVenuesLabel: 'Todos los lugares',
    availableOnlyLabel: 'Solo disponibles',
  },
  resultsSubtitle: 'Experiencias Urbanas',
  resultsTitleSuffix: 'Eventos Encontrados',
  emptyState: {
    icon: '📅',
    title: 'No hay eventos disponibles',
    description: 'Intenta cambiar los filtros.',
  },
  purchaseStepsTitle: 'Cómo Conseguir Tickets',
  purchaseSteps: [
    {
      icon: '1',
      title: 'Busca tu Evento',
      description: 'Explora nuestro calendario y encuentra el show que quieres ver.',
    },
    {
      icon: '2',
      title: 'Selecciona Entradas',
      description: 'Elige cantidad y tipo de entrada general, VIP o acceso anticipado.',
    },
    {
      icon: '3',
      title: 'Completa Compra',
      description: 'Pago seguro y ticket digital directo en tu correo.',
    },
  ],
  notificationSection: {
    title: 'Notificaciones de Eventos',
    description: 'Sé el primero en conocer nuevos eventos y dropeos de tickets.',
    inputPlaceholder: 'tu@email.com',
    buttonLabel: 'Alertas',
    invalidMessage: 'Por favor ingresa un email válido.',
    successMessage: 'Alertas activadas. Recibirás notificaciones de nuevos eventos.',
    errorMessage: 'No pudimos activar las alertas. Revisa la configuración del provider.',
  },
  cardLabels: {
    artists: 'Artistas:',
    available: 'DISPONIBLE',
    soldOut: 'SOLD OUT',
    buyTickets: 'Comprar Tickets',
    comingSoon: 'Próximamente',
    doorsOpenPrefix: 'Puertas abren a las',
  },
}

export const blogPage: BlogPageContent = {
  heroTitle: 'Blog ILUMINATY',
  heroDescription:
    'Historias, tendencias y perspectivas del arte urbano de Nueva York. Todo sale desde una única fuente editorial para que el template se mantenga fácil de actualizar.',
  newsletterSection: {
    title: 'Suscríbete al Blog',
    description: 'Recibe las últimas historias, análisis y tendencias del arte urbano directamente en tu inbox.',
    inputPlaceholder: 'Tu email',
    buttonLabel: 'Suscribirse',
    invalidMessage: 'Por favor ingresa un email válido.',
    successMessage: 'Suscripción activada. Ya estás dentro del pulso editorial de ILUMINATY.',
    errorMessage: 'No pudimos procesar tu suscripción. Revisa la configuración del provider.',
  },
  post: {
    backLabel: 'Volver al blog',
    shareLabel: 'Compartir',
    authorLabel: 'Autor',
    tocLabel: 'Tabla de contenido',
    relatedEyebrow: 'Sigue leyendo',
    relatedTitle: 'Entradas relacionadas',
    relatedLinkLabel: 'Ver todo el blog',
    newsletterEyebrow: 'Suscríbete al Blog',
    newsletterTitle: 'Recibe nuevas historias en tu inbox',
    newsletterDescription: 'Recibe las últimas historias, análisis y tendencias del arte urbano directamente en tu inbox.',
  },
}
