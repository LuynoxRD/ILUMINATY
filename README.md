# ILUMINATY Template

Template editorial y promocional para artistas, eventos y comunidad creativa. Esta construido con Vue 3, Vite, TypeScript, Tailwind y Vite SSG.

## Quick Start

```bash
npm install
npm run dev
```

Build de produccion:

```bash
npm run build
```

## Estado del Template

- `local` es el proveedor de contenido por defecto
- `sanity` ya funciona como path real cuando se agregan credenciales
- formularios y newsletter ya consumen un provider layer desacoplado
- las vistas ya no leen `src/data/*.ts` directo; consumen la capa de contenido

## Arquitectura

Entrada de contenido:

- [`src/composables/useContent.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\composables\useContent.ts)
- [`src/services/content/index.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\services\content\index.ts)
- [`src/services/content/localAdapter.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\services\content\localAdapter.ts)
- [`src/services/content/sanityAdapter.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\services\content\sanityAdapter.ts)
- [`src/types/content.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\types\content.ts)

Entrada de formularios:

- [`src/config/forms.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\config\forms.ts)
- [`src/services/forms/index.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\services\forms\index.ts)
- [`src/types/forms.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\types\forms.ts)

Contenido demo local:

- copy global y singletons de paginas: [`src/data/pageContent.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\pageContent.ts)
- artistas: [`src/data/artists.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\artists.ts)
- eventos: [`src/data/events.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\events.ts)
- blog: [`src/data/blogPosts.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\blogPosts.ts)
- about y equipo: [`src/data/about.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\about.ts)
- testimonios: [`src/data/followers.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\followers.ts)
- assets: [`src/data/assets.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\data\assets.ts)

## Variables de Entorno

Consulta [`.env.example`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\.env.example).

Variables principales:

- `VITE_SITE_URL`: URL canonica del sitio
- `VITE_CONTENT_SOURCE`: `local` o `sanity`
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `VITE_SANITY_USE_CDN`
- `VITE_SANITY_TOKEN`
- `VITE_FORM_PROVIDER`: `mock`, `webhook`, `custom`, `brevo`, `mailchimp`
- `VITE_FORM_ENDPOINT`
- `VITE_NEWSLETTER_PROVIDER`
- `VITE_NEWSLETTER_ENDPOINT`

## Sanity

Sanity es el CMS principal del template. El frontend ya esta preparado para leer desde:

- `siteSettings`
- `homePage`
- `aboutPage`
- `contactPage`
- `eventsPage`
- `blogPage`
- `artist`
- `event`
- `post`
- `brandLogo`
- `testimonial`
- `teamMember`

Schemas incluidos:

- [`sanity-template/README.md`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\sanity-template\README.md)
- [`sanity-template/schemaTypes/index.ts`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\sanity-template\schemaTypes\index.ts)

Con `VITE_CONTENT_SOURCE=local`, el sitio usa seed demo. Con `VITE_CONTENT_SOURCE=sanity`, el adapter consulta Sanity y Vite SSG genera tambien las rutas del blog desde ese contenido.

## Formularios

Los formularios de estas vistas ya estan conectados al provider layer:

- [`src/views/Contact.vue`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\views\Contact.vue)
- [`src/views/Home.vue`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\views\Home.vue)
- [`src/views/Blog.vue`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\views\Blog.vue)
- [`src/views/BlogPost.vue`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\views\BlogPost.vue)
- [`src/views/Events.vue`](C:\Users\Luis Castillo\Documents\Primer proyecto\Portafolio\src\views\Events.vue)

Providers recomendados hoy:

- `mock` para demo
- `webhook` para Brevo, Mailchimp, Zapier, Make o un endpoint propio
- `custom` para una API propia o serverless bridge

`brevo` y `mailchimp` quedan reservados como adapters dedicados si se quieren implementar dentro del repo.

## Ticketing

Estado actual:

- compra de tickets sigue siendo CTA visual
- no hay checkout ni metodo de pago integrado
- el punto correcto para evolucionarlo es el modelo de `event` mas un adapter de checkout externo

## Deploy

Puede desplegarse como sitio estatico en GitHub Pages, Netlify o Vercel despues de configurar `VITE_SITE_URL` y el `base` correspondiente.
