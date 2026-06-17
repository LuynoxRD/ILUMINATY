---
name: iluminaty-dev
description: Skill para desarrollar en el proyecto ILUMINATY. Cúbrelo ANTES de tocar cualquier archivo. Stack: Vue 3.5 + Vite 8 + Tailwind 3.4 + TypeScript 5.6 + vite-ssg.
whenToUse: Cuando se trabaje en cualquier tarea del proyecto ILUMINATY — componentes Vue, composables, estilos, tipos, datos, rutas o build.
---

# ILUMINATY — Guía de desarrollo

## Documentación de referencia (consúltala antes de implementar algo nuevo)

- **Vite**: https://vite.dev/guide/
- **Vue 3**: https://vuejs.org/guide/introduction.html
- **Tailwind + Vite**: https://tailwindcss.com/docs/installation/using-vite
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## Stack y versiones

| Paquete | Versión | Rol |
|---|---|---|
| `vue` | ^3.5.0 | Framework UI |
| `vue-router` | ^4.4.0 | Routing SPA/SSG |
| `vite` | ^8.0.8 | Build tool / dev server |
| `vite-ssg` | ^28.3.0 | Static Site Generation |
| `tailwindcss` | ^3.4.0 | Estilos utilitarios |
| `typescript` | ^5.6.0 | Tipado estático |
| `@vueuse/core` | ^14.2.1 | Composables utilitarios |
| `gsap` | ^3.12.0 | Animaciones |
| `zod` | ^4.3.6 | Validación de schemas en runtime |
| `@unhead/vue` | ^2.1.13 | Meta tags SEO (SSG-compatible) |
| `dompurify` | ^3.4.1 | Sanitización de HTML |

---

## Comandos esenciales

```bash
npm run dev        # Dev server en http://localhost:5173
npm run build      # Genera sitemap + build SSG → dist/
npm run preview    # Preview del build estático
npm run lint       # ESLint sobre todo el proyecto
npm run lint:fix   # Auto-fix ESLint
```

---

## Arquitectura del proyecto

```
src/
├── components/    # Componentes Vue reutilizables (PascalCase.vue)
├── composables/   # useX.ts — lógica reactiva reutilizable
├── config/        # Constantes globales (site.ts, content.ts, forms.ts)
├── data/          # Datos locales/mock (arrays y objetos tipados)
├── lib/           # Utilidades puras (no reactivas, sin side effects)
├── schemas/       # Schemas Zod para validación en runtime
├── services/      # Adaptadores de datos (localAdapter / sanityAdapter)
│   ├── content/   # Dual adapter: local (demo) vs Sanity CMS
│   └── forms/     # Lógica de envío de formularios
├── types/         # Tipos TypeScript globales (.ts, no interfaces en .vue)
└── views/         # Páginas = rutas Vue Router (PascalCase.vue)
```

**Regla clave:** `data/` es solo mock estático. La lógica real va en `services/`, los tipos en `types/`, la validación en `schemas/`.

---

## TypeScript — Convenciones del proyecto

El proyecto usa **strict mode completo**. Todas estas reglas están activas:

```json
"strict": true,
"noImplicitAny": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitReturns": true
```

**Reglas prácticas:**
- Siempre tipar el valor de retorno de funciones no triviales.
- No dejar variables o parámetros sin usar — el build falla.
- Usar el alias `@/` en vez de rutas relativas largas (`@/components/Navbar.vue`).
- Los tipos globales van en `src/types/`, no inline en los componentes.
- Usar `zod` + `schemas/` para validar datos externos (API, formularios).

---

## Vue 3 — Patrones del proyecto

### Composables (`src/composables/useX.ts`)
Usan `<script setup>` y Composition API. Patrón de los existentes:
```ts
// useTheme.ts — ejemplo de patrón
export function useTheme() {
  const theme = ref<'light' | 'dark'>('light')
  // lógica reactiva...
  return { theme, toggleTheme }
}
```

- Normaliza entradas `MaybeRef` con `toValue()` cuando el composable debe ser flexible.
- Retorna solo lo que el llamador necesita (no exponer estado interno).

### Componentes (`src/components/`)
- Siempre `<script setup lang="ts">`.
- Props con `defineProps<{ prop: Tipo }>()` — no `defineProps({ prop: { type: ... } })`.
- Emits con `defineEmits<{ eventName: [payload: Tipo] }>()`.
- No usar `Options API`.

### SSG con vite-ssg
- El entry point es `src/main.ts` usando `ViteSSG` en vez de `createApp`.
- Para meta tags usar `@unhead/vue` (`useHead`, `useSeoMeta`) — es SSG-compatible.
- Evitar APIs solo-browser (`window`, `document`, `localStorage`) sin guard `if (typeof window !== 'undefined')` o `onMounted`.

---

## Tailwind — Convenciones del proyecto

- **Dark mode:** activado con estrategia `class` → toggling con `useTheme.ts`.
- **Color accent:** `#D7263D` (rojo carmesí) — usa `bg-accent`, `text-accent`, `border-accent`.
- **Fuente base:** Inter / Roboto → clases `font-sans`.
- **Colores semánticos definidos en config:**
  - `bg-page` → fondo principal (`#ffffff`)
  - `bg-light` → fondo alternativo (`#f9fafb`)
  - `text-primary` → texto principal (`#1a202c`)
- No añadir colores hardcodeados en los componentes; extender `tailwind.config.js` si se necesita un nuevo token.

---

## Vite — Notas de configuración

- **Base URL dinámica:** se calcula desde `VITE_SITE_URL` en el env. Importante para GitHub Pages (el repo está en una subruta).
- **Code splitting manual:**
  - `framework` chunk → Vue core + Vue Router
  - `motion` chunk → GSAP
- **Puerto dev:** 5173 (fijo).
- Variables de entorno deben empezar con `VITE_` para ser accesibles en el cliente.

---

## Patrones de datos / contenido

- **Dual adapter:** `services/content/localAdapter.ts` (datos de `data/`) vs `services/content/sanityAdapter.ts` (Sanity CMS). El `index.ts` elige cuál usar.
- Para añadir datos en modo local: editar archivos en `src/data/` con tipos de `src/types/content.ts`.
- Para añadir un schema de validación: crear/extender en `src/schemas/` usando Zod.

---

## Rutas disponibles

| Path | Vista |
|---|---|
| `/` | `Home.vue` |
| `/artistas` | `Artists.vue` |
| `/sobre-nosotros` | `About.vue` |
| `/blog` | `Blog.vue` |
| `/blog/:slug` | `BlogPost.vue` |
| `/eventos` | `Events.vue` |
| `/contacto` | `Contact.vue` |
| `/terminos` `/privacidad` `/cookies` | `Terms/Privacy/Cookies.vue` |

---

## Checklist antes de hacer build

- [ ] `npm run lint` sin errores
- [ ] No hay `window`/`document` sin guard SSR
- [ ] Tipos nuevos en `src/types/`, no inline
- [ ] Variables de entorno nuevas tienen `VITE_` prefix
- [ ] Tokens de color nuevos en `tailwind.config.js`, no hardcodeados
