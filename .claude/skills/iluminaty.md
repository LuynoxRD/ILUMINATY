---
name: iluminaty
description: Skill para desarrollar en el proyecto ILUMINATY. Cúbrelo ANTES de tocar cualquier archivo. Stack: Vue 3.5 + Vite 8 + Tailwind 3.4 + TypeScript 5.9 + vite-ssg + Vitest 5.
whenToUse: Cuando se trabaje en cualquier tarea del proyecto ILUMINATY — componentes Vue, composables, estilos, tipos, datos, rutas, dependencias, seguridad o build.
---

# ILUMINATY — Guía de desarrollo

## Documentación de referencia (consúltala antes de implementar algo nuevo)

- **Vite**: https://vite.dev/guide/
- **Vue 3**: https://vuejs.org/guide/introduction.html
- **Tailwind + Vite**: https://tailwindcss.com/docs/installation/using-vite
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Vitest**: https://vitest.dev/guide/

Usa `mcp__claude_ai_Context7__resolve-library-id` + `mcp__claude_ai_Context7__query-docs` para consultar estas librerías si necesitas verificar APIs actualizadas.

---

## Stack y versiones

| Paquete | Instalado | Rango | Rol |
|---|---|---|---|
| `vue` | 3.5.44 | ^3.5.44 | Framework UI |
| `vue-router` | 4.6.4 | ^4.4.0 | Routing SPA/SSG |
| `vite` | 8.3.5 | ^8.3.5 | Build tool / dev server |
| `vite-ssg` | 28.3.0 | ^28.3.0 | Static Site Generation |
| `tailwindcss` | 3.4.19 | ^3.4.0 | Estilos utilitarios |
| `typescript` | 5.9.3 | ^5.6.0 | Tipado estático |
| `@vueuse/core` | 14.3.0 | ^14.2.1 | Composables utilitarios |
| `gsap` | 3.15.0 | ^3.12.0 | Animaciones |
| `zod` | 4.6.7 | ^4.6.7 | Validación de schemas en runtime |
| `@unhead/vue` | 2.1.15 | ^2.1.13 | Meta tags SEO (SSG-compatible) |
| `dompurify` | 3.4.17 | ^3.4.17 | Sanitización de HTML (solo si es imprescindible) |
| `vitest` | 5.0.5 | ^5.0.5 | Test runner |
| `@vitest/coverage-v8` | 5.0.5 | ^5.0.5 | Cobertura (debe ir SIEMPRE con vitest) |
| `happy-dom` | 21.0.4 | ^21.0.4 | Entorno DOM de tests |
| `eslint` | 10.6.0 | ^10.6.0 | Linter (flat config) |

> Regla: `vitest` y `@vitest/coverage-v8` se actualizan **juntos y en la misma versión**. Un bump aislado de coverage rompe `npm install` por peer dependency (pasó en el PR #143).

---

## Comandos esenciales

```bash
npm ci             # Instalación reproducible (lo que usa CI)
npm run dev        # Dev server en http://localhost:5173
npm run build      # Genera sitemap + build SSG → dist/
npm run preview    # Preview del build estático
npm run lint       # ESLint sobre todo el proyecto
npm run lint:fix   # Auto-fix ESLint
npm run test       # Vitest en watch
npm run test:run   # Vitest una vez (93 tests)
npm run test:coverage
npm run commitlint # Valida el mensaje de commit
```

**Verificación mínima antes de abrir PR:**

```bash
npm ci && npm run lint && npm run test:run && npm run build
npm audit --audit-level=low   # debe decir: found 0 vulnerabilities
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

### Render de datos estructurados (iconos, SVG, HTML)
**Prohibido `v-html`.** ESLint lo bloquea con `vue/no-v-html: error`.

- Los iconos se modelan como datos tipados (`IconName` + array de `{ d, fillRule }`) y se pintan con `<path v-for>`. Ver `ArtistPopup.vue`.
- Si algún día llega HTML de una fuente externa: sanitízalo con DOMPurify **solo en cliente** (DOMPurify necesita `window`; en SSG/Node no funciona sin jsdom) y justifica la excepción con un comentario `eslint-disable` puntual.
- Nunca interpoles URLs sin pasar por `toSafeHref()` (`src/lib/safeUrl.ts`).

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

- **Base URL dinámica:** se calcula desde `VITE_SITE_URL`. Importante para GitHub Pages (el repo está en una subruta).
- **Code splitting manual:**
  - `framework` chunk → Vue core + Vue Router
  - `motion` chunk → GSAP
- **Puerto dev:** 5173 (fijo).
- Variables de entorno deben empezar con `VITE_` para ser accesibles en el cliente.
- En `vite.config.ts` y `vitest.config.ts` usa `fileURLToPath(new URL('./src', import.meta.url))`. **No uses `__dirname`**: Vite 8 emite warning porque el cargador nativo de configs no lo soporta.

---

## Seguridad — Invariantes del proyecto

1. **Cero `v-html`.** Regla ESLint activa. El único sink histórico (iconos de `ArtistPopup.vue`) se eliminó el 2026-10-28.
2. **URLs externas siempre por `toSafeHref()`** — bloquea `javascript:`, `data:`, `vbscript:`, protocol-relative y payloads URL-encoded.
3. **JSON-LD solo por `serializeJsonLd()`** — escapa `<`, `>`, `&` para no cerrar el `<script>`.
4. **CSP en `src/App.vue`** (meta tag, compatible SSG):
   - `script-src 'self'` — no inline scripts.
   - `style-src 'self' 'unsafe-inline'` — necesario hoy por estilos scoped/inline; es la deuda pendiente [M-001].
   - `connect-src 'self'` — si activas Sanity o webhooks externos, **amplía este directive** o las peticiones se bloquean.
   - `object-src 'none'`, `base-uri 'self'`, `frame-src 'none'`, `form-action 'self'`.
5. **Sanity:** solo dataset público y token de lectura. Nunca metas tokens en variables `VITE_` (van al bundle).
6. **Formularios:** validación Zod en cliente **y** validación/rate-limit en el webhook. El cliente no es confiable.
7. **Secretos:** `.env` está gitignored; `gitleaks` corre en CI. No pegues claves en issues, PRs ni logs.

> Auditoría completa y estado de remediación: `security-audit-report.md`.

---

## Dependencias y política de actualización

- **`npm audit` debe quedar en 0** antes de mergear. Revisa también las alertas de Dependabot (pueden ir por delante o por detrás del audit local).
- **Overrides de seguridad activos** en `package.json` (no quitar sin re-auditar):
  - `fast-uri ^3.1.9`
  - `undici ^7.30.1`
  - `brace-expansion ^5.0.12`
  - `js-yaml ^5.4.1`
  - `source-map-js 1.2.2`
  - `postcss-selector-parser`: `6.1.5` bajo `tailwindcss`/`postcss-nested`, `7.1.7` bajo `eslint-plugin-vue`
  - `picomatch` bajo `anymatch`/`micromatch`/`readdirp`/`tinyglobby`
- **Antes de mergear un PR de Dependabot:**
  1. `npm ci` en local (detecta lock inconsistente y peer conflicts).
  2. Si es un **major**, revisa `npm view <pkg> peerDependencies` y busca el bump coordinado.
  3. `npm run lint && npm run test:run && npm run build`.
  4. Smoke test visual si tocó runtime (Vue, Vite, Tailwind, DOMPurify).
- **Un PR verde en GitHub no basta:** hasta 2026-10-28 los PRs no ejecutaban lint/test/build (solo CodeQL/gitleaks/Qodo). El workflow `ci.yml` cierra ese hueco.
- Si un advisory no tiene fix, documenta el riesgo residual y el workaround en `security-audit-report.md`.

---

## CI y flujo de PR

| Workflow | Trigger | Qué hace |
|---|---|---|
| `.github/workflows/ci.yml` | `pull_request` → `main` | `npm ci` → lint → test → build SSG |
| `.github/workflows/main.yml` | `push` → `main` | Build + deploy a GitHub Pages |
| `.github/workflows/codeql.yml` | PR/push/schedule | Análisis CodeQL |
| `.github/workflows/gitleaks.yml` | PR/push | Escaneo de secretos |
| `.github/workflows/qodo-review.yml` | PR | Review automático de Qodo |

- **`main` está protegida: no hay push directo.** Todo va por rama + PR + squash merge.
- Mensajes de commit con Conventional Commits (`commitlint`): `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `ci:`.
- Abrir PR: `gh pr create --base main --head <rama> --title "..." --body "..."`.
- No mergear con CI rojo ni con conflictos de lockfile.

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

## Trampas conocidas

- **`npm run build` modifica archivos trackeados**: regenera `public/robots.txt` y `public/sitemap.xml` con el `VITE_SITE_URL` del entorno. Si no quieres commitear ese cambio: `git checkout -- public/robots.txt public/sitemap.xml`.
- **`VITE_SITE_URL` es obligatoria en producción**: `src/config/site.ts` lanza error si falta en build de producción; en dev cae a `http://localhost:5173`.
- **Major de Vitest**: `vitest@5` exige `@vitest/coverage-v8@5` y `@vitest/mocker@5`. Nunca actualices coverage por separado.
- **`__dirname` en configs**: usar `fileURLToPath(new URL(...))` (Vite 8 native config loader).
- **DOMPurify en SSG**: el import por defecto en Node es la factory, no una instancia con `.sanitize`. No lo llames durante el render del servidor.
- **CSP `connect-src 'self'`**: cualquier API externa nueva (Sanity, webhook, analytics) necesita añadirse o fallará silenciosamente en el navegador.
- **Qodo review puede fallar sin ser culpa del código**: si el log muestra `AuthenticationError ... dummy_key` o `Missing Anthropic API Key`, faltan secretos del workflow. Revisa el log antes de bloquear el merge; el check `verify` (lint/test/build) es el que valida el cambio.

---

## Checklist antes de hacer build / abrir PR

- [ ] `npm ci` sin errores (lockfile consistente y sin peer conflicts)
- [ ] `npm run lint` sin errores
- [ ] `npm run test:run` verde (93 tests)
- [ ] `npm run build` SSG OK
- [ ] `npm audit` = 0 vulnerabilidades
- [ ] No hay `v-html` (regla ESLint activa)
- [ ] No hay `window`/`document` sin guard SSR
- [ ] Tipos nuevos en `src/types/`, no inline
- [ ] Variables de entorno nuevas tienen prefijo `VITE_`
- [ ] Tokens de color nuevos en `tailwind.config.js`, no hardcodeados
- [ ] Si tocaste CSP o formularios, probaste el flujo en navegador
- [ ] `public/robots.txt` y `public/sitemap.xml` sin cambios accidentales
- [ ] PR con CI verde antes de mergear
