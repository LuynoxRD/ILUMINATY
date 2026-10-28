# ILUMINATY

Proyecto web estático: Vue 3.5 + Vite 8.3 + Tailwind 3.4 + TypeScript 5.9 + vite-ssg + Vitest 5.

## Skill del proyecto

Antes de tocar cualquier archivo, invoca la skill del proyecto:

```
/iluminaty
```

La skill cubre: stack, convenciones TypeScript, patrones Vue 3, seguridad, dependencias, CI/PR, configuración Tailwind/Vite, arquitectura de carpetas y checklist de build.

## Memoria — Seguridad (2026-10-28)

- **`npm audit` = 0** y **Dependabot = 0** alertas abiertas tras la remediación de octubre.
- **8 PRs revisadas:** 7 mergeadas, #143 cerrada (coverage-v8 5.0.2 rompía `npm install` por peer `vitest@5`). Reemplazada por bump coordinado `vitest 5.0.5` + `@vitest/coverage-v8 5.0.5`.
- **CI en PRs activo:** `.github/workflows/ci.yml` ejecuta `npm ci` → lint → test → build. Antes solo corrían CodeQL/gitleaks/Qodo en PRs; por eso #143 pasó verde.
- **`v-html` prohibido:** regla `vue/no-v-html: error` en `eslint.config.js`. [C-001] corregido eliminando el sink de `ArtistPopup.vue` (iconos como `ICON_PATHS` tipados).
- **Sensibilidad:** el repo NO permite push directo a `main` (GH013). Todo cambio va por PR + squash merge.
- **Overrides de seguridad activos** en `package.json`: `fast-uri ^3.1.9`, `undici ^7.30.1`, `brace-expansion ^5.0.12`, `js-yaml ^5.4.1`, `source-map-js 1.2.2`, `postcss-selector-parser` (6.1.5 / 7.1.7). No removerlos sin re-ejecutar `npm audit`.
- **Versiones clave:** vue 3.5.44, vite 8.3.5, dompurify 3.4.17, zod 4.6.7, vitest 5.0.5, happy-dom 21.0.4.
- **Tailwind 3→4 pendiente:** PR #122 cerrado con ignore. Migración requiere config CSS-first, plugin `@tailwindcss/vite`, revisar `darkMode` class y tokens custom (`bg-page`, `bg-light`, `accent`).
- **Verificación post-deps:** `npm ci` + `npm run lint` + `npm run test:run` (93 tests) + `npm run build` (SSG, 17 páginas) + `npm audit`.
- **Trampa:** `npm run build` reescribe `public/robots.txt` y `public/sitemap.xml` con `VITE_SITE_URL`; revertirlos si el cambio no es intencional.
- Reporte completo en `security-audit-report.md`; guía operativa en `.opencode/skills/iluminaty-dev/SKILL.md`.

## Memoria — Sesión 2026-10-28

**Objetivo:** revisar las 8 PRs de Dependabot y las 21 alertas de seguridad, remediar y actualizar la skill.

**Qué se hizo:**
- Revisadas #138–#145: 7 mergeadas; **#143 cerrada** porque `@vitest/coverage-v8@5.0.2` exige peer `vitest@5` y rompía `npm install` (ERESOLVE reproducido con `npm install --package-lock-only`).
- **#146 cerrada** por superseded: duplicaba bumps y regresaba overrides de seguridad.
- **PR #147 mergeada** con la remediación: 31 alertas Dependabot → **0**, `npm audit` → **0**.
- **C-001 corregido:** eliminado `v-html` de `ArtistPopup.vue`; iconos como `ICON_PATHS` tipados con `<path v-for>`; `vue/no-v-html: error`; verificado visualmente en navegador.
- **CI en PRs:** nuevo `.github/workflows/ci.yml` (`npm ci` → lint → 93 tests → build SSG). Antes solo corrían CodeQL/gitleaks/Qodo, por eso #143 pasó "CLEAN".
- **Pre-commit arreglado:** los hooks usaban `language: node` sin instalar eslint/commitlint y bloqueaban todos los commits; ahora `language: system` + `npx --no-install`.
- **Dependencias:** vite 8.3.5, vue 3.5.44, zod 4.6.7, dompurify 3.4.17, vitest 5.0.5 + coverage 5.0.5, happy-dom 21.0.4; overrides al día.
- **Docs:** `security-audit-report.md` y `.opencode/skills/iluminaty-dev/SKILL.md` actualizados; `.claude/skills/iluminaty.md` sincronizada.
- **Verificación:** `npm ci`, lint, 93/93 tests, build SSG 17 páginas, `npm audit` 0, deploy a Pages ✅.

**Decisiones:**
- Para los iconos se eliminó el sink en vez de sanear con DOMPurify: el componente se renderiza en SSG (Node) y DOMPurify necesita `window`; además el conjunto de iconos es cerrado y tipado.
- `vitest` y `@vitest/coverage-v8` se actualizan siempre juntos y en la misma versión.
- Los `overrides` de `package.json` son pins de seguridad: no se quitan sin re-ejecutar `npm audit`.

**Pendiente / follow-ups:**
- [M-001] CSP `style-src 'unsafe-inline'` — deuda aceptada (GitHub Pages estático).
- [M-002] Rate limiting en webhooks — responsabilidad del receptor.
- Tailwind 3→4 — tarea separada.
- **Qodo no aplica todavía:** el plan gratuito OSS exige 200+ estrellas (el repo tiene 3). La app puede quedar instalada, pero no revisa. Se eliminó `.github/workflows/qodo-review.yml` porque fallaba en cada PR por falta de `OPENAI_KEY`. Reinstalar solo al cumplir el requisito o con una key de LLM propia.
- **Revisar override `unhead`/`@unhead/dom` 2.1.13** mientras `@unhead/vue` está en 2.1.15 (posible desalineación de versión).
