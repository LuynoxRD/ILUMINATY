# Sanity Template Package

Esta carpeta deja el repositorio listo para usar Sanity como CMS principal del template sin forzar su instalación dentro del frontend.

## Qué Incluye

- schemas base para artistas, eventos, blog, legal y contenido global
- estructura de singletons para home, about, artists, legal pages y settings
- modelos que reflejan la forma actual del frontend

## Flujo Recomendado

1. Crear un proyecto nuevo de Sanity.
2. Instalar Sanity Studio en una carpeta separada o dentro de un monorepo.
3. Copiar estas definiciones de schema a tu Studio.
4. Configurar las variables del frontend usando `.env.example`.
5. Cambiar `VITE_CONTENT_SOURCE=sanity`.

## Nota

El frontend ya tiene un `sanityAdapter` preparado en:

- `src/services/content/sanityAdapter.ts`

Ese adapter espera estos tipos documentales:

- `siteSettings`
- `homePage`
- `aboutPage`
- `artistsPage`
- `brandLogo`
- `artist`
- `testimonial`
- `teamMember`
- `termsPage`
- `privacyPage`
- `cookiesPage`
- `post`
- `event`

Los nombres de campo también están alineados con esas definiciones.
