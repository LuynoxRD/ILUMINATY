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
