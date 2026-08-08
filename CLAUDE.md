# ILUMINATY

Proyecto web estático: Vue 3.5 + Vite 8 + Tailwind 3.4 + TypeScript 5.6 + vite-ssg.

## Skill del proyecto

Antes de tocar cualquier archivo, invoca la skill del proyecto:

```
/iluminaty
```

La skill cubre: stack, convenciones TypeScript, patrones Vue 3, configuración Tailwind/Vite, arquitectura de carpetas y checklist de build.

## Memoria — Seguridad (2026-08-07)

- **Dependabot: 0 alertas abiertas** (`npm audit` = 0 vulnerabilidades). Remedición completa en PR #126 + #127.
- **Sensibilidad:** el repo NO permite push directo a `main` — todo cambio va por PR (regla GH013). Usar `gh pr create` + merge.
- **Overrides de seguridad activos** en `package.json` (sección `overrides`): `fast-uri ^3.1.5`, `undici ^7.29.0`, `brace-expansion ^5.0.7`, `js-yaml ^5.2.3`. No removerlos sin re-ejecutar `npm audit`.
- **dompurify** y **postcss** quedaron en 3.4.13 / 8.5.26 (pinned vía dependencia directa).
- **Tailwind 3→4 pendiente:** PR #122 cerrado con `@dependabot ignore this major version`. Migración requiere config CSS-first, plugin `@tailwindcss/vite`, revisar `darkMode` class y tokens custom (`bg-page`, `bg-light`, `accent`).
- **Verificación post-deps:** `npm run lint` + `npm run test:run` (93 tests) + `npm run build` (SSG).
- Reporte completo en `security-audit-report.md`.
