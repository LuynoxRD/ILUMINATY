# Informe de Auditoría de Seguridad - ILUMINATY

**Fecha:** 2026-07-12 (última actualización: 2026-10-28)
**Proyecto:** ILUMINATY (Vue 3 + Vite + Tailwind + TypeScript + vite-ssg)
**Auditor:** Mavis Agent Team

---

## Estado actual — 2026-10-28

| Métrica | Estado |
|---|---|
| `npm audit` | **0 vulnerabilidades** |
| Alertas Dependabot abiertas | **21 → 0** al mergear la remediación de octubre |
| PRs de dependencias revisadas | 8 (7 mergeadas, 1 cerrada) |
| Lint / Tests / Build | ✅ 93 tests, build SSG de 17 páginas |
| `v-html` en el código | **0** (regla ESLint `vue/no-v-html: error` activa) |
| CI en pull requests | **Activo** (`ci.yml`: `npm ci` + lint + test + build) |
| Code scanning | 0 alertas abiertas |

### Las 21 alertas de Dependabot

| Paquete | # | Severidad | Corregido en | Origen | Estado |
|---|---:|---|---|---|---|
| `undici` | 10 | 2 high, 5 medium, 3 low | 7.29.1 → 7.30.1 | jsdom (vite-ssg) | ✅ resuelto (PR #138 + override) |
| `vite` | 5 | 1 high, 3 medium, 1 low | 8.1.6 | dependencia directa (dev) | ✅ resuelto (8.3.5) |
| `dompurify` | 2 | 1 critical, 1 low | 3.4.17 | dependencia directa (runtime) | ✅ resuelto |
| `@vitest/mocker` | 2 | 2 medium | 4.1.12 (→ 5.0.5) | vitest | ✅ resuelto (vitest 5.0.5) |
| `js-yaml` | 1 | medium | 5.4.1 | commitlint/cosmiconfig | ✅ resuelto (override) |
| `source-map-js` | 1 | high | 1.2.2 | postcss, vue compiler, magicast | ✅ resuelto (override) |

**Análisis de impacto:** de las 21 alertas, solo `dompurify` (runtime, una crítica y una baja) y `vite` (build/dev server) tenían exposición real. `undici`, `js-yaml`, `@vitest/mocker` y `source-map-js` eran transitivas de tooling (jsdom, commitlint, vitest, postcss/compilers) y no llegaban al bundle de producción.

### Advisories adicionales detectados por `npm audit`

La base de datos de npm iba por delante de Dependabot. Se corrigieron también:

| Paquete | Severidad | Corregido en |
|---|---|---|
| `zod` | high | 4.6.7 |
| `vue` / `@vue/server-renderer` | high | 3.5.44 |
| `happy-dom` | high | 21.0.4 |
| `undici` (8 advisories nuevas) | high | 7.30.1 |
| `brace-expansion` | high | 5.0.12 |
| `fast-uri` | moderate | 3.1.9 |
| `postcss-selector-parser` | moderate | 6.1.5 / 7.1.7 |

Resultado verificado: **`npm audit` → `found 0 vulnerabilities`**.

---

## Revisión de las 8 PRs de dependencias

| PR | Cambio | Veredicto | Notas |
|---|---|---|---|
| #138 | `undici` 7.29.0 → 7.30.0 | ✅ Mergeada | Cierra 7 de las 10 alertas de undici; el override subió a `^7.30.1` para cubrir las 8 advisories nuevas |
| #139 | `gacts/gitleaks` 1.3.2 → 1.3.3 | ✅ Mergeada | Acción de CI, sin impacto en runtime |
| #140 | `@commitlint/cli` 21.2.0 → 21.2.3 | ✅ Mergeada | Tooling de commits |
| #141 | `@vue/test-utils` 2.4.11 → 2.5.1 | ✅ Mergeada | Solo tests |
| #142 | `@vitejs/plugin-vue` 6.0.7 → 6.0.9 | ✅ Mergeada | Compatible con Vite 8 |
| #143 | `@vitest/coverage-v8` 4.1.11 → 5.0.2 | ❌ Cerrada | **Rompe `npm install`**: coverage-v8 5.x exige peer `vitest@5.0.2` y el repo tenía vitest 4.1.11. Verificado con `npm install --package-lock-only` → `ERESOLVE`. Se reemplazó por el bump coordinado vitest 5.0.5 + coverage 5.0.5 |
| #144 | `github/codeql-action` 4.37.9 → 4.38.2 | ✅ Mergeada | Acción de CI |
| #145 | `qodo-ai/pr-agent` 0.43.0 → 0.46.0 | ✅ Mergeada | Acción de CI |

**Hallazgo de proceso:** las 8 PRs mostraban checks verdes, pero **ningún workflow ejecutaba lint, tests ni build en pull requests**. `main.yml` solo corre en `push` a `main`. Eso permitió que #143 pasara como "CLEAN" pese a romper la instalación. Se añadió `.github/workflows/ci.yml` para cerrar el hueco.

---

## Hallazgos de código

### 🔴 CRÍTICA — [C-001] XSS por sink `v-html` en ArtistPopup.vue

**Estado: ✅ CORREGIDO (2026-10-28)**

**Ubicación original:** `src/components/ArtistPopup.vue:198-213`

La función `sanitizeHtml` era un bypass que devolvía el HTML sin sanear:

```typescript
const sanitizeHtml = (html: string): string => html
```

Se usaba para inyectar los SVG de redes sociales con `v-html`. Si un futuro adapter (Sanity CMS) hubiera alimentado `iconSvg`, cualquier HTML/JS habría llegado al DOM.

**Remediación aplicada:**
- Se eliminó `v-html` y `sanitizeHtml` por completo.
- Los iconos pasaron a ser datos tipados (`IconName` + `ICON_PATHS: Record<IconName, readonly IconPath[]>`) y se renderizan con `<path v-for>`.
- Se añadió `vue/no-v-html: error` a `eslint.config.js` para impedir regresiones.
- Verificado en navegador: los 7 iconos (Spotify, YouTube, Apple Music, SoundCloud, Instagram, TikTok, X) renderizan igual que antes.

**Por qué no DOMPurify:** el componente se renderiza en SSG (Node) y DOMPurify necesita `window`; una sanitización condicional habría provocado diferencias de hidratación. Para un conjunto cerrado de iconos, eliminar el sink es más simple y más seguro que sanearlo.

---

### 🟡 MEDIA — [M-001] CSP permite `'unsafe-inline'` para estilos

**Estado: abierto (deuda aceptada)**

`src/App.vue` inyecta la CSP como meta tag:

```
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
```

`'unsafe-inline'` es necesario hoy por los estilos scoped de Vue y los estilos inline de GSAP. Migrar a hashes/nonces requiere un servidor que genere la CSP por respuesta (GitHub Pages es estático) o eliminar todo estilo inline. Riesgo residual bajo: `script-src 'self'` sigue bloqueando la ejecución de scripts inline, que es el vector principal de XSS.

**Recomendación:** mantener documentado; reevaluar si se migra a un host con headers dinámicos.

---

### 🟡 MEDIA — [M-002] Sin protección CSRF en formularios

**Estado: abierto (mitigado por diseño)**

Los formularios envían JSON a webhooks sin token CSRF. En un sitio estático sin autenticación ni cookies de sesión, el impacto es limitado: no hay sesión que un atacante pueda reutilizar. El riesgo real es **abuso/spam del webhook**.

**Recomendación:** validar y limitar en el receptor del webhook (rate limit por IP, captcha o firma HMAC compartida). No añadir tokens CSRF al cliente sin un backend que los emita y valide.

---

### 🟢 MENORES / OBSERVACIONES

#### [L-001] Configuración de Sanity expuesta en frontend
`src/config/content.ts` envía project ID y dataset al cliente. Es normal en JAMstack. Mantener:
- CORS restringido en el dashboard de Sanity.
- Solo token de lectura; nunca token de escritura en variables `VITE_`.

#### [L-002] Fallback de `siteUrl`
`src/config/site.ts` lanza error en producción si falta `VITE_SITE_URL` y cae a `http://localhost:5173` en desarrollo. Correcto.

#### [L-003] `safeUrl.ts` sólido
Bloquea protocolos peligrosos, payloads URL-encoded y open redirects. Todos los enlaces externos deben pasar por `toSafeHref()`.

#### [L-004] Dependencias
`npm audit` = 0. Overrides de seguridad activos y documentados en `package.json` y en la skill.

#### [L-005] `.gitignore` correcto
`.env`, `dist/`, `coverage/` y artefactos locales excluidos. `gitleaks` corre en CI.

#### [L-006] `npm run build` muta archivos trackeados
`scripts/generate-sitemap.mjs` reescribe `public/robots.txt` y `public/sitemap.xml` con el `VITE_SITE_URL` del entorno. En PRs hay que revertirlos si el cambio no es intencional (`git checkout -- public/robots.txt public/sitemap.xml`).

---

## Buenas prácticas observadas

1. ✅ **Validación de esquemas con Zod** para todos los formularios.
2. ✅ **CSP implementada** (`script-src 'self'`, `object-src 'none'`, `base-uri 'self'`).
3. ✅ Protección contra **open redirect** en `safeUrl.ts`.
4. ✅ Escape de JSON-LD en `serializeJsonLd` (`src/lib/seo.ts`).
5. ✅ `rel="noreferrer"` en enlaces externos.
6. ✅ Focus trapping y restauración de foco en modales.
7. ✅ CodeQL + gitleaks + Qodo en CI.
8. ✅ Tests (93) y build SSG verificados en cada PR desde octubre de 2026.

---

## Historial — remediación 2026-08-07

| Acción | Resultado |
|---|---|
| Merge PR #117 (dompurify → 3.4.12) | MERGED |
| Merge PRs #118, #119, #120, #121, #123, #124 | MERGED |
| Cierre PR #122 (tailwindcss 3→4, major) | CLOSED + ignore |
| PR #126 (overrides + bumps) | MERGED, CI verde |
| `npm audit` | 0 vulnerabilidades |
| Alertas Dependabot abiertas | 0 |

Alertas cerradas entonces: fast-uri (#36, #26), undici (#35, #34, #33, #32, #31), postcss (#28), brace-expansion (#24), dompurify (#25).

**Tailwind 3→4 sigue pendiente:** PR #122 cerrado con `@dependabot ignore this major version`. La migración requiere config CSS-first, plugin `@tailwindcss/vite`, revisar `darkMode` class y tokens custom (`bg-page`, `bg-light`, `accent`).

---

## Recomendaciones adicionales

1. **HSTS:** habilitar cuando el dominio de producción esté bajo control con HTTPS (GitHub Pages ya fuerza HTTPS, pero no emite HSTS configurable).
2. **Rate limiting** en los receptores de webhooks.
3. **Auditar CORS de Sanity** antes de conectar el CMS en producción.
4. **`security.txt`** para investigadores.
5. **Revisar mensualmente** Dependabot + `npm audit`; no confiar solo en los checks verdes del PR.
6. **No mergear majors de test tooling en aislamiento:** validar peer dependencies y ejecutar `npm ci`.

---

## Conclusión

La postura de seguridad pasó de **21 alertas abiertas y un sink XSS crítico** a **0 vulnerabilidades verificadas y 0 `v-html`**. El cambio más importante no fue el bump de paquetes, sino cerrar el hueco de proceso: los PRs ahora ejecutan `npm ci`, lint, tests y build antes de poder mergearse.

**Prioridad restante:**
1. [M-001] CSP `style-src 'unsafe-inline'` — deuda aceptada, riesgo bajo.
2. [M-002] Rate limiting en webhooks — responsabilidad del receptor.
3. Tailwind 3→4 — tarea separada, no de seguridad.
