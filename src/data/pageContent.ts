import type {
  AboutPageContent,
  BlogPageContent,
  ContactPageContent,
  EventsPageContent,
  HomePageContent,
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
        { label: 'Terminos', href: '/terminos' },
        { label: 'Cookies', href: '/cookies' },
      ],
    },
  ],
  footerFollowLabel: 'Siguenos',
  footerCopyright: '© 2026 Iluminaty. Todos los derechos reservados. Potencia el arte urbano de NYC.',
  footerCreditPrefix: 'Hecho con',
  footerCreditName: 'LuynoxRD',
  socialProfiles: {
    instagram: 'https://instagram.com',
    x: 'https://twitter.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
  },
}

export const homePage: HomePageContent = {
  hero: {
    highlightedWord: 'Descubre',
    titleRemainder: 'el talento mas revolucionario de NYC',
    description:
      'La plataforma definitiva para conectar con artistas urbanos, raperos, productores y creadores visuales de Nueva York. Exploracion sin limites.',
    primaryCta: { label: 'Explorar Artistas', href: '/artistas' },
    secondaryCta: { label: 'Ver Eventos', href: '/eventos' },
    stats: [
      { label: 'Artistas', value: 500, suffix: '+', format: 'plain' },
      { label: 'Seguidores', value: 1200000, format: 'millions' },
      { label: 'Eventos/Ano', value: 85, suffix: '+', format: 'plain' },
    ],
  },
  labelsSection: {
    title: 'El futuro del arte urbano esta aqui',
    description: 'Trabajamos con los mejores sellos discograficos',
  },
  highlightCard: {
    title: '500+ Artistas',
    description: 'Conectados y creando arte urbano de clase mundial',
  },
  communitySection: {
    title: 'Una Comunidad que Crece',
    description:
      'ILUMINATY es mas que una plataforma. Es un movimiento de artistas urbanos, productores y creadores que comparten una vision: democratizar el arte sin limites.',
    benefits: [
      'Acceso a oportunidades de booking y colaboraciones',
      'Herramientas para gestionar tu carrera artistica',
      'Eventos exclusivos y mentorias de expertos',
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
        question: 'Como se que la comunidad es segura?',
        answer: 'Moderamos perfiles, revisamos solicitudes y mantenemos controles basicos para cuidar la comunidad.',
      },
      {
        question: 'Donde esta basada ILUMINATY?',
        answer: 'La plataforma se enfoca en Nueva York y en la escena urbana que une artistas, fans y promotores.',
      },
      {
        question: 'Como protegen mis datos?',
        answer: 'Aplicamos buenas practicas de manejo de informacion y evitamos exponer datos innecesarios.',
      },
      {
        question: 'Es ILUMINATY una red social?',
        answer: 'Es una plataforma para descubrir artistas, conectar creadores y dar visibilidad a proyectos urbanos.',
      },
      {
        question: 'Como me uno a la comunidad?',
        answer: 'Puedes solicitar acceso desde el CTA final y completar el formulario con tus datos y tu proyecto.',
      },
      {
        question: 'Puedo invitar amigos?',
        answer: 'Si. Puedes compartir la plataforma con otros artistas, colaboradores o promotores de tu red.',
      },
      {
        question: 'Cual es el limite de edad?',
        answer: 'Debes ser mayor de 18 anos para registrarte y solicitar acceso a la comunidad.',
      },
      {
        question: 'Puedo eliminar mi cuenta?',
        answer: 'Si. Puedes solicitar la eliminacion de tu cuenta y de tus datos cuando lo necesites.',
      },
      {
        question: 'ILUMINATY es gratis?',
        answer: 'Si. El acceso base puede solicitarse sin costo y luego se evalua segun el perfil del proyecto.',
      },
    ],
  },
  featuredBlogSection: {
    eyebrow: 'Blog destacado',
    title: 'Tres entradas para leer lo que mueve la escena urbana',
    description:
      'Historias, analisis y colaboraciones para que el visitante entienda que ILUMINATY tambien tiene profundidad editorial.',
    ctaLabel: 'Ver todo el blog',
  },
  newsletterSection: {
    title: 'Suscribete al Blog',
    description: 'Recibe las ultimas historias, analisis y tendencias del arte urbano directamente en tu inbox.',
    inputPlaceholder: 'Tu email',
    buttonLabel: 'Suscribirse',
    invalidMessage: 'Por favor ingresa un email valido.',
    successMessage: 'Suscripcion activada. Pronto recibiras nuevas historias en tu inbox.',
    errorMessage: 'No pudimos procesar tu suscripcion. Revisa la configuracion del provider.',
  },
  appCta: {
    title: 'Descarga la app y sigue el pulso de la escena urbana',
    description: 'Descubre artistas, revisa eventos y conecta con la comunidad ILUMINATY desde tu telefono.',
    iosButton: { label: 'Download for iOS', href: '#' },
    androidButton: { label: 'Download for Android', href: '#' },
  },
}

export const aboutPage: AboutPageContent = {
  heroTitle: 'Sobre ILUMINATY',
  heroDescription:
    'Somos mas que una plataforma. Somos un movimiento que amplifica las voces de artistas urbanos de Nueva York.',
  missionSection: {
    subtitle: 'Proposito',
    title: 'Nuestra Mision',
    description: 'Crear un ecosistema donde el talento urbano prospera sin limites',
    heading: 'Democratizar la Visibilidad',
    body:
      'En ILUMINATY creemos que cada artista merece ser descubierto. No importa si estas comenzando en un sotano de Brooklyn o si ya eres una leyenda del Bronx. Nuestra plataforma reduce barreras y abre un espacio mas claro para mostrar trabajo, conectar comunidad y activar oportunidades reales.',
    bullets: [
      'Conexion directa entre artistas y audiencia',
      'Promocion igualitaria sin sesgos corporativos',
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
        title: 'Innovacion',
        description: 'Impulsamos nuevos sonidos, formatos y cruces entre musica, visuales y comunidad.',
      },
      {
        icon: 'G',
        title: 'Inclusion',
        description: 'Todos los generos, barrios y voces tienen lugar dentro de la plataforma.',
      },
    ],
  },
  teamSection: {
    subtitle: 'Las Mentes',
    title: 'Nuestro Equipo',
    description: 'Personas que mezclan cultura urbana, producto y tecnologia',
  },
  manifestoSection: {
    title: 'El Manifiesto ILUMINATY',
    entries: [
      {
        accentLabel: 'Creemos',
        accentClass: 'text-neon-lime',
        body: 'que el arte urbano es la voz mas honesta de Nueva York. Cada beat, cada letra y cada trazo registra una realidad que merece archivo y visibilidad.',
      },
      {
        accentLabel: 'Rechazamos',
        accentClass: 'text-neon-violet',
        body: 'la logica de puertas cerradas que decide quien merece ser visto. ILUMINATY esta disenado para reducir friccion y abrir contexto.',
      },
      {
        accentLabel: 'Promovemos',
        accentClass: 'text-neon-cyan',
        body: 'colaboraciones sin ego entre artistas, productores, promotores y publicos que si entienden la escena.',
      },
      {
        accentLabel: 'Protegemos',
        accentClass: 'text-neon-lime',
        body: 'la libertad creativa, la privacidad y el trabajo intelectual de cada creador que usa la plataforma.',
      },
      {
        accentLabel: 'Sonamos',
        accentClass: 'text-neon-violet',
        body: 'con una industria donde el talento y la constancia pesen mas que la friccion de acceso.',
      },
    ],
  },
}

export const contactPage: ContactPageContent = {
  heroTitle: 'Contacto & Booking',
  heroDescription: 'Preguntas, booking o colaboraciones. Estamos aqui para escucharte.',
  infoTitle: 'Informacion de Contacto',
  socialTitle: 'Siguenos en Redes',
  formTitle: 'Envia un Mensaje',
  methods: [
    {
      title: 'Email',
      value: 'info@iluminaty.nyc',
      href: 'mailto:info@iluminaty.nyc',
      description: 'Respuesta en 24 horas habiles',
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
      title: 'Soporte Tecnico',
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
      { value: 'technical', label: 'Soporte Tecnico' },
      { value: 'feedback', label: 'Feedback y Sugerencias' },
      { value: 'press', label: 'Prensa / Media' },
      { value: 'other', label: 'Otro' },
    ],
    phoneLabel: 'Telefono (Opcional)',
    artistNameLabel: 'Nombre Artistico',
    artistNamePlaceholder: 'Tu nombre artistico...',
    genreLabel: 'Genero/Disciplina',
    genrePlaceholder: 'Selecciona un genero...',
    genreOptions: [
      { value: 'hip-hop', label: 'Hip-Hop / Rap' },
      { value: 'electronic', label: 'Electronico' },
      { value: 'r-b', label: 'R&B / Soul' },
      { value: 'reggaeton', label: 'Reggaeton' },
      { value: 'visual', label: 'Arte Visual / Graffiti' },
      { value: 'production', label: 'Produccion Musical' },
      { value: 'other', label: 'Otro' },
    ],
    messageLabel: 'Mensaje *',
    messagePlaceholder: 'Cuentanos mas sobre ti o tu propuesta...',
    messageLimit: 1000,
    privacyPrefix: 'He leido y acepto los',
    termsLabel: 'Terminos y Condiciones',
    privacyLabel: 'Politica de Privacidad',
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
      question: 'Como me registro como artista?',
      answer: 'Rellena el formulario de contacto seleccionando "Registro como Artista" como asunto. Nos pondremos en contacto en 24-48 horas. Necesitamos informacion sobre tu genero musical, barrio y portfolio de trabajo.',
    },
    {
      question: 'Cual es el proceso de booking?',
      answer: 'Contactanos en booking@iluminaty.nyc con detalles de tu propuesta. Nuestro equipo de eventos evaluara y respondera en 3-5 dias habiles.',
    },
    {
      question: 'Es gratis unirse a ILUMINATY?',
      answer: 'Si, el registro es completamente gratuito. Los artistas no pagan comision por ventas de tickets de eventos que promovemos.',
    },
    {
      question: 'Que barrios de NYC cubren?',
      answer: 'Cubrimos los 5 condados y tenemos especial enfoque en comunidades de East Side, Harlem, Williamsburg y Jamaica Queens.',
    },
    {
      question: 'Como protegen mis derechos de autor?',
      answer: 'Toda la musica y contenido visual sube bajo licencia del artista. ILUMINATY no reclama derechos sobre tu trabajo.',
    },
    {
      question: 'Hay membership premium?',
      answer: 'Actualmente ofrecemos cuenta gratuita para todos. Estamos desarrollando tiers premium con estadisticas, marketing avanzado y herramientas de colaboracion.',
    },
  ],
}

export const eventsPage: EventsPageContent = {
  heroTitle: 'Calendario de Eventos',
  heroDescription: 'Descubre los shows, festivales y experiencias urbanas mas esperadas de Nueva York.',
  statsLabels: {
    total: 'Eventos Totales',
    upcoming: 'Proximos',
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
  purchaseStepsTitle: 'Como Conseguir Tickets',
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
    description: 'Se el primero en conocer nuevos eventos y dropeos de tickets.',
    inputPlaceholder: 'tu@email.com',
    buttonLabel: 'Alertas',
    invalidMessage: 'Por favor ingresa un email valido.',
    successMessage: 'Alertas activadas. Recibiras notificaciones de nuevos eventos.',
    errorMessage: 'No pudimos activar las alertas. Revisa la configuracion del provider.',
  },
  cardLabels: {
    artists: 'Artistas:',
    available: 'DISPONIBLE',
    soldOut: 'SOLD OUT',
    buyTickets: 'Comprar Tickets',
    comingSoon: 'Proximamente',
    doorsOpenPrefix: 'Puertas abren a las',
  },
}

export const blogPage: BlogPageContent = {
  heroTitle: 'Blog ILUMINATY',
  heroDescription:
    'Historias, tendencias y perspectivas del arte urbano de Nueva York. Todo sale desde una unica fuente editorial para que el template se mantenga facil de actualizar.',
  newsletterSection: {
    title: 'Suscribete al Blog',
    description: 'Recibe las ultimas historias, analisis y tendencias del arte urbano directamente en tu inbox.',
    inputPlaceholder: 'Tu email',
    buttonLabel: 'Suscribirse',
    invalidMessage: 'Por favor ingresa un email valido.',
    successMessage: 'Suscripcion activada. Ya estas dentro del pulso editorial de ILUMINATY.',
    errorMessage: 'No pudimos procesar tu suscripcion. Revisa la configuracion del provider.',
  },
  post: {
    backLabel: 'Volver al blog',
    shareLabel: 'Compartir',
    authorLabel: 'Autor',
    tocLabel: 'Tabla de contenido',
    relatedEyebrow: 'Sigue leyendo',
    relatedTitle: 'Entradas relacionadas',
    relatedLinkLabel: 'Ver todo el blog',
    newsletterEyebrow: 'Suscribete al Blog',
    newsletterTitle: 'Recibe nuevas historias en tu inbox',
    newsletterDescription: 'Recibe las ultimas historias, analisis y tendencias del arte urbano directamente en tu inbox.',
  },
}
