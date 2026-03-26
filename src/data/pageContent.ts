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
        { label: 'Terminos', href: '/terminos' },
        { label: 'Cookies', href: '/cookies' },
      ],
    },
  ],
  footerFollowLabel: 'Siguenos',
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
  featuredArtistsSection: {
    title: 'Artistas Destacados',
    description: 'Destaca hasta 10 perfiles para dar contexto visual inmediato desde la portada.',
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

export const artistsPage: ArtistsPageContent = {
  heroTitle: 'Directorio de Artistas',
  heroDescription:
    'Explora los perfiles de artistas urbanos, visuales y productores. Filtra por genero, barrio o nombre y abre un perfil corto sin sacar al usuario del flujo.',
  filters: {
    genreLabel: 'Genero',
    allGenresLabel: 'Todos los generos',
    neighborhoodLabel: 'Barrio',
    allNeighborhoodsLabel: 'Todos los barrios',
    searchLabel: 'Buscar',
    searchPlaceholder: 'Nombre del artista...',
  },
  genreOptions: [
    { value: 'hip-hop', label: 'Hip-Hop / Rap' },
    { value: 'electronic', label: 'Electronico' },
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
    musicTitle: 'Musica',
    socialTitle: 'Redes',
    spotifyMeta: 'Escuchar catalogo',
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
    description: 'Intenta cambiar los filtros para ver mas resultados.',
  },
}

export const termsPage: LegalPageContent = {
  heroTitle: 'Terminos y Condiciones',
  heroDescription: 'Por favor, lee detenidamente estos terminos antes de utilizar nuestros servicios.',
  sections: [
    {
      title: '1. Aceptacion de los Terminos',
      paragraphs: [
        'Al acceder y utilizar ILUMINATY, aceptas cumplir con estos terminos y condiciones. Si no estas de acuerdo con alguna parte, no debes utilizar el servicio.',
      ],
    },
    {
      title: '2. Descripcion del Servicio',
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
        'Debes proporcionar informacion precisa y completa.',
        'No puedes compartir tu cuenta con terceros.',
        'Debes notificarnos inmediatamente de cualquier uso no autorizado.',
      ],
    },
    {
      title: '4. Propiedad Intelectual',
      paragraphs: [
        'Todo el contenido disponible en ILUMINATY, incluyendo textos, graficos, logos, imagenes y software, es propiedad de ILUMINATY o de sus licenciantes y esta protegido por leyes de propiedad intelectual.',
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
        'Tu privacidad es importante para nosotros. Consulta nuestra politica relacionada para entender como recopilamos, usamos y protegemos tu informacion personal.',
      ],
      links: [{ label: 'Politica de Privacidad', href: '/privacidad' }],
    },
    {
      title: '7. Modificaciones del Servicio',
      paragraphs: [
        'Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento, con o sin previo aviso. No seremos responsables por cambios, suspensiones o discontinuaciones del servicio.',
      ],
    },
    {
      title: '8. Limitacion de Responsabilidad',
      paragraphs: [
        'ILUMINATY no sera responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar el servicio.',
      ],
    },
    {
      title: '9. Ley Aplicable',
      paragraphs: [
        'Estos terminos se regiran e interpretaran de acuerdo con las leyes del Estado de Nueva York, Estados Unidos, sin tener en cuenta disposiciones sobre conflictos de leyes.',
      ],
    },
    {
      title: '10. Cambios a los Terminos',
      paragraphs: [
        'Podemos actualizar estos terminos periodicamente. Publicaremos la version mas reciente en esta pagina. El uso continuado del servicio despues de dichos cambios constituye tu aceptacion de los nuevos terminos.',
      ],
    },
  ],
  contactCard: {
    title: '11. Contacto',
    description: 'Si tienes preguntas sobre estos terminos, puedes contactarnos en:',
    details: [
      { label: 'Email', value: 'legal@iluminaty.com' },
      { label: 'Direccion', value: '123 Calle del Arte, Brooklyn, NY 11201' },
    ],
  },
  footerNote: 'Ultima actualizacion: Febrero 2026',
  ctaTitle: '¿Tienes Preguntas?',
  ctaDescription: 'Nuestro equipo esta aqui para ayudarte. Contactanos si necesitas aclaraciones sobre nuestros terminos.',
  ctaLink: { label: 'Contactar Soporte', href: '/contacto' },
}

export const privacyPage: LegalPageContent = {
  heroTitle: 'Politica de Privacidad',
  heroDescription: 'Tu privacidad es nuestra prioridad. Conoce como protegemos y utilizamos tu informacion personal.',
  sections: [
    {
      title: '1. Informacion que Recopilamos',
      paragraphs: [
        'En ILUMINATY recopilamos informacion necesaria para proporcionar nuestros servicios. Esto incluye:',
      ],
      bullets: [
        'Informacion de registro: nombre, email y credenciales de acceso.',
        'Informacion de perfil: foto, biografia y redes sociales.',
        'Informacion de uso: como interactuas con la plataforma.',
        'Informacion tecnica: direccion IP, navegador y dispositivo.',
      ],
    },
    {
      title: '2. Como Usamos tu Informacion',
      paragraphs: [
        'Utilizamos tu informacion para los siguientes propositos:',
      ],
      bullets: [
        'Proporcionar y mantener nuestros servicios.',
        'Personalizar tu experiencia en la plataforma.',
        'Comunicarnos contigo sobre actualizaciones y promociones.',
        'Mejorar nuestros servicios mediante analisis de uso.',
        'Prevenir fraudes y proteger la seguridad.',
        'Cumplir con obligaciones legales.',
      ],
    },
    {
      title: '3. Compartir Informacion',
      paragraphs: [
        'No vendemos tu informacion personal a terceros. Solo compartimos informacion cuando:',
      ],
      bullets: [
        'Tu das consentimiento explicito.',
        'Es necesario para proveedores de servicios que nos ayudan a operar.',
        'Es requerido por ley o proceso legal.',
        'Es necesario para proteger nuestros derechos o seguridad.',
      ],
    },
    {
      title: '4. Seguridad de Datos',
      paragraphs: [
        'Implementamos medidas tecnicas y organizativas para proteger tu informacion:',
      ],
      bullets: [
        'Encriptacion SSL/TLS para transmisiones de datos.',
        'Almacenamiento seguro en servidores protegidos.',
        'Acceso restringido solo a personal autorizado.',
        'Monitoreo continuo y actualizaciones regulares de seguridad.',
      ],
    },
    {
      title: '5. Tus Derechos',
      paragraphs: [
        'Tienes los siguientes derechos respecto a tu informacion personal:',
      ],
      bullets: [
        'Acceso: solicitar una copia de tus datos.',
        'Rectificacion: corregir informacion inexacta.',
        'Eliminacion: solicitar la eliminacion de tus datos.',
        'Portabilidad: recibir tus datos en formato legible.',
        'Restriccion: limitar el procesamiento de tus datos.',
        'Oposicion: oponerte al procesamiento de tus datos.',
      ],
    },
    {
      title: '6. Cookies y Tecnologias Similares',
      paragraphs: [
        'Utilizamos cookies para mejorar tu experiencia. Para mas informacion, consulta nuestra politica de cookies.',
      ],
      links: [{ label: 'Politica de Cookies', href: '/cookies' }],
    },
    {
      title: '7. Retencion de Datos',
      paragraphs: [
        'Conservamos tu informacion personal solo durante el tiempo necesario para cumplir con los propositos descritos en esta politica o segun lo requiera la ley. Cuando ya no sea necesaria, eliminaremos o anonimizaremos tus datos de manera segura.',
      ],
    },
    {
      title: '8. Cambios a esta Politica',
      paragraphs: [
        'Podemos actualizar esta politica periodicamente. Te notificaremos de cambios significativos mediante un aviso en la plataforma o por email. El uso continuado de nuestros servicios despues de dichos cambios constituye tu aceptacion de la politica actualizada.',
      ],
    },
  ],
  contactCard: {
    title: '9. Contacto',
    description: 'Si tienes preguntas, inquietudes o deseas ejercer tus derechos de privacidad, contactanos:',
    details: [
      { label: 'Email', value: 'privacy@iluminaty.com' },
      { label: 'Direccion', value: '123 Calle del Arte, Brooklyn, NY 11201' },
      { label: 'Telefono', value: '+1 (555) 123-4567' },
    ],
  },
  footerNote: 'Ultima actualizacion: Febrero 2026',
  ctaTitle: '¿Tienes Preguntas sobre Privacidad?',
  ctaDescription: 'Nuestro equipo de privacidad esta aqui para ayudarte. No dudes en contactarnos.',
  ctaLink: { label: 'Contactar Equipo de Privacidad', href: '/contacto' },
}

export const cookiesPage: LegalPageContent = {
  heroTitle: 'Politica de Cookies',
  heroDescription: 'Informacion sobre como utilizamos cookies para mejorar tu experiencia en ILUMINATY.',
  sections: [
    {
      title: '1. ¿Que son las Cookies?',
      paragraphs: [
        'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a hacer que ILUMINATY funcione correctamente, a mejorar tu experiencia y a entender como interactuas con la plataforma.',
      ],
    },
    {
      title: '2. Tipos de Cookies que Utilizamos',
      paragraphs: [],
      cards: [
        {
          title: 'Cookies Esenciales',
          description: 'Estas cookies son necesarias para el funcionamiento basico del sitio. No pueden desactivarse en nuestros sistemas.',
          bullets: [
            'Autenticacion de usuarios.',
            'Seguridad del sitio.',
            'Preferencias basicas de usuario.',
          ],
          accentClass: 'border-neon-lime/20 bg-neon-lime/10',
        },
        {
          title: 'Cookies de Rendimiento',
          description: 'Permiten medir y mejorar el rendimiento de nuestro sitio.',
          bullets: [
            'Analisis de trafico web.',
            'Identificacion de paginas mas populares.',
            'Deteccion de errores tecnicos.',
          ],
          accentClass: 'border-neon-violet/20 bg-neon-violet/10',
        },
        {
          title: 'Cookies Funcionales',
          description: 'Permiten recordar tus preferencias para ofrecer funcionalidades mejoradas y mas personales.',
          bullets: [
            'Preferencias de idioma.',
            'Configuracion de tema oscuro o claro.',
            'Informacion de formularios guardada.',
          ],
          accentClass: 'border-neon-cyan/20 bg-neon-cyan/10',
        },
        {
          title: 'Cookies de Publicidad',
          description: 'Se utilizan para mostrar anuncios mas relevantes y medir la efectividad de campañas publicitarias.',
          bullets: [
            'Personalizacion de anuncios.',
            'Medicion de campañas.',
            'Evitar mostrar anuncios repetidos.',
          ],
          accentClass: 'border-gray-200 bg-gray-50',
        },
      ],
    },
    {
      title: '3. Cookies de Terceros',
      paragraphs: [
        'Ademas de nuestras propias cookies, tambien utilizamos cookies de terceros confiables para diversos propositos:',
      ],
      bullets: [
        'Google Analytics para analisis de uso del sitio.',
        'Redes sociales para botones de compartir y widgets.',
        'Servicios de pago para transacciones seguras.',
        'Proveedores de contenido para videos y multimedia embebidos.',
      ],
    },
    {
      title: '4. Gestion de Cookies',
      paragraphs: [
        'Puedes controlar y gestionar las cookies de diversas formas:',
      ],
      cards: [
        {
          title: 'Configuracion del Navegador',
          description: 'La mayoria de los navegadores te permiten ver, gestionar, eliminar y bloquear cookies. Consulta la configuracion de privacidad de tu navegador para mas informacion.',
          accentClass: 'border-neon-lime/20 bg-neon-lime/10',
        },
        {
          title: 'Panel de Preferencias',
          description: 'Puedes actualizar tus preferencias de cookies en cualquier momento desde tu panel de configuracion de cuenta en ILUMINATY.',
          accentClass: 'border-neon-violet/20 bg-neon-violet/10',
        },
      ],
    },
    {
      title: '5. Duracion de las Cookies',
      paragraphs: [
        'Las cookies pueden clasificarse segun su duracion:',
      ],
      bullets: [
        'Cookies de sesion: se eliminan cuando cierras el navegador.',
        'Cookies persistentes: permanecen en tu dispositivo por un periodo especifico.',
      ],
    },
    {
      title: '6. Impacto de Desactivar Cookies',
      paragraphs: [
        'Si decides desactivar ciertas cookies, algunas funciones de ILUMINATY pueden no funcionar correctamente:',
      ],
      bullets: [
        'No podras mantener tu sesion iniciada.',
        'Las preferencias personalizadas no se guardaran.',
        'Algunas funcionalidades pueden estar limitadas.',
        'La experiencia de usuario puede verse afectada.',
      ],
    },
    {
      title: '7. Actualizaciones de esta Politica',
      paragraphs: [
        'Podemos actualizar esta politica para reflejar cambios en las tecnologias que utilizamos o requisitos legales. Te notificaremos de cambios significativos mediante un aviso visible en la plataforma.',
      ],
    },
    {
      title: '8. Mas Informacion',
      paragraphs: [
        'Para mas informacion sobre como protegemos tu privacidad, consulta nuestra politica relacionada.',
      ],
      links: [{ label: 'Politica de Privacidad', href: '/privacidad' }],
    },
  ],
  contactCard: {
    title: '9. Contacto',
    description: 'Si tienes preguntas sobre nuestra politica de cookies, contactanos:',
    details: [
      { label: 'Email', value: 'cookies@iluminaty.com' },
      { label: 'Direccion', value: '123 Calle del Arte, Brooklyn, NY 11201' },
    ],
  },
  footerNote: 'Ultima actualizacion: Febrero 2026',
  ctaTitle: '¿Necesitas Ayuda?',
  ctaDescription: 'Estamos aqui para responder tus preguntas sobre cookies y privacidad.',
  ctaLink: { label: 'Contactar Soporte', href: '/contacto' },
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
