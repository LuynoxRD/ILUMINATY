# Informe de Auditoría de Seguridad - ILUMINATY

**Fecha:** 2026-07-12 (última actualización: 2026-08-07)
**Proyecto:** ILUMINATY (Vue 3 + Vite + Tailwind + TypeScript + vite-ssg)
**Auditor:** Mavis Agent Team

---

## Estado Dependabot / PRs — 2026-08-07

### Alertas Dependabot abiertas (10)

| # | Severidad | Paquete | Instalado | Vulnerable | Corregido | Origen (transitiva de) | Runtime? |
|---|---|---|---|---|---|---|---|
| 36 | HIGH | fast-uri | 3.1.3 | <3.1.5 | 3.1.5 | ajv (commitlint) | No (dev) |
| 26 | HIGH | fast-uri | 3.1.3 | <=3.1.3 | 3.1.4 | ajv (commitlint) | No (dev) |
| 32 | HIGH | undici | 7.28.0 | <7.29.0 | 7.29.0 | jsdom (tests) | No (dev) |
| 35 | MED | undici | 7.28.0 | <7.29.0 | 7.29.0 | jsdom (tests) | No (dev) |
| 34 | MED | undici | 7.28.0 | <7.29.0 | 7.29.0 | jsdom (tests) | No (dev) |
| 33 | MED | undici | 7.28.0 | <7.29.0 | 7.29.0 | jsdom (tests) | No (dev) |
| 31 | MED | undici | 7.28.0 | <7.29.0 | 7.29.0 | jsdom (tests) | No (dev) |
| 28 | HIGH | postcss | 8.5.15 | <=8.5.17 | 8.5.18 | @vue/compiler-sfc, tailwind, vite | No (build) |
| 24 | HIGH | brace-expansion | 5.0.6 | <5.0.7 | 5.0.7 | minimatch (glob/editorconfig) | No (dev) |
| 25 | LOW | dompurify | 3.4.11 | <=3.4.11 | 3.4.12 | dependencia directa | **Sí** |

**Análisis de impacto:** 9 de 10 alertas son de dependencias transitivas **dev/build** (commitlint, jsdom para tests, tooling de build). Ninguna llega al bundle de producción. La única alerta con impacto en runtime es **dompurify (LOW)**, ya cubierta por el PR #117.

- **Code scanning:** 0 alertas abiertas.
- **Security advisories:** 0.

### PRs abiertos (8, todos Dependabot)

| PR | Cambio | Estado CI | Veredicto |
|---|---|---|---|
| **#117** | dompurify 3.4.11 → 3.4.12 | CLEAN ✓ | ✅ **Merge** — cierra alerta LOW #25 (única runtime) |
| #120 | @vitejs/plugin-vue 6.0.7 → 6.0.8 | CLEAN ✓ | ✅ Merge — patch dev |
| #121 | happy-dom 20.10.5 → 20.11.1 | CLEAN ✓ | ✅ Merge — patch dev |
| #123 | @vueuse/core 14.3.0 → 14.4.0 | CLEAN ✓ | ✅ Merge — minor |
| #124 | github/codeql-action 4 → 4.37.3 | CLEAN ✓ | ✅ Merge — Action CI |
| #119 | qodo-ai/pr-agent 0.38.0 → 0.41.0 | CLEAN ✓ | ✅ Merge — Action CI |
| #118 | actions/setup-node 4 → 7 | CLEAN ✓ | ✅ Merge — Action CI (Node 24, ESM; rompe solo runners <20) |
| #122 | tailwindcss 3.4.19 → 4.3.3 | CLEAN ✓ | ⚠️ **NO mergear** — major 3→4. Requiere migración: config CSS-first, plugin `@tailwindcss/vite`, `darkMode` class y tokens custom (`bg-page`, `bg-light`, `accent`) se pierden. Solo toca package.json/lock, el build fallaría. |

### Plan de remediación para alertas sin PR

1. **dompurify** → merge PR #117 (cierra #25).
2. **postcss** → `npm install -D postcss@^8.5.18` (ya declarado `^8.4.0`, cierra #28).
3. **fast-uri** → `overrides: { "fast-uri": "^3.1.5" }` en package.json (cierra #36 y #26).
4. **undici** → `overrides: { "undici": "^7.29.0" }` o bump jsdom a ^30 (cierra #32, #31, #33, #34, #35).
5. **brace-expansion** → `overrides: { "brace-expansion": "^5.0.7" }` (cierra #24).
6. **tailwind** → cerrar PR #122 con `@dependabot ignore this major version` y planificar migración a Tailwind 4 por separado.

---

## Resumen Ejecutivo

El proyecto ILUMINATY tiene una postura de seguridad **razonablemente sólida** con buenas prácticas en varios aspectos como la sanitización de URLs, validación de formularios con Zod, y Content Security Policy. Sin embargo, se identificaron **3 vulnerabilidades** (1 crítica, 2 medias) y **varias áreas de mejora**.

---

## Hallazgos por Severidad

### 🔴 CRÍTICA

#### [C-001] XSS por Bypass de Sanitización en ArtistPopup.vue

**Ubicación:** `src/components/ArtistPopup.vue:198-213`

**Descripción:**
La función `sanitizeHtml` es un bypass de seguridad que retorna el HTML sin ninguna sanitización:

```typescript
const sanitizeHtml = (html: string): string => html
```

Esta función se usa para inyectar SVGs de redes sociales en el componente:

```vue
<span ... v-html="sanitizeHtml(link.iconSvg)" />
```

**Impacto:**
Si un atacante logra modificar los datos del artista (ya sea a través de Sanity CMS o datos locales) para incluir JavaScript malicioso en los SVGs, podría ejecutar código XSS arbitrario en el navegador de la víctima.

**Recomendación:**
Reemplazar con la librería DOMPurify que ya está instalada en el proyecto:

```typescript
import DOMPurify from 'dompurify'

const sanitizeHtml = (html: string): string => DOMPurify.sanitize(html, { USE_PROFILES: { svg: true } })
```

---

### 🟡 MEDIA

#### [M-001] CSP Permite 'unsafe-inline' para Estilos

**Ubicación:** `index.html:5`

**Descripción:**
La política de seguridad de contenido incluye `'unsafe-inline'` para estilos:

```html
<meta http-equiv="Content-Security-Policy" content="... style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ..."
```

**Impacto:**
Permitir `unsafe-inline` para estilos reduce significativamente la protección contra ataques XSS basados en CSS (como CSS injection attacks que pueden exfiltrar datos o modificar la interfaz).

**Recomendación:**
Si es posible, migrar a una CSP más restrictiva usando nonces o hashes:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://*.sanity.io; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'">
```

**Nota:** Si el framework de estilos (Tailwind) requiere inline styles, considera usar nonces generados en el servidor.

---

#### [M-002] Sin Protección CSRF en Formularios

**Ubicación:** `src/services/forms/index.ts`

**Descripción:**
Los formularios de contacto y newsletter envían datos directamente a webhooks sin incluir tokens CSRF:

```typescript
const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})
```

**Impacto:**
Si existe un endpoint webhook vulnerable a CSRF, un atacante podría enviar formularios en nombre del usuario autenticado.

**Recomendación:**
1. Generar un token CSRF en el servidor
2. Incluirlo en los formularios y validarlo en el webhook
3. O usar el header `SameSite=Strict` en cookies si se implementa autenticación

---

### 🟢 MENORES / OBSERVACIONES

#### [L-001] Configuración de Sanity expuesta en frontend
**Ubicación:** `src/config/content.ts:15-20`

El Project ID de Sanity y la configuración del dataset se envían al cliente. Aunque esto es normal para arquitecturas JAMstack, asegúrate de:
- Configurar reglas CORS apropiadas en el dashboard de Sanity
- No exponer tokens de escritura (solo usar tokens de lectura público)

#### [L-002] Fallback inseguro en siteUrl
**Ubicación:** `src/config/site.ts:16`

```typescript
const siteUrl = rawSiteUrl || `http://localhost:5173`
```

En producción esto lanza un error (línea 8-13), lo cual es correcto. El fallback solo aplica en desarrollo, lo cual es aceptable.

#### [L-003] Buen uso de safeUrl.ts
**Ubicación:** `src/lib/safeUrl.ts`

La implementación de sanitización de URLs es sólida:
- Bloquea protocolos peligrosos (javascript:, data:, vbscript:)
- Maneja correctamente URL-encoded attacks
- Rechaza open redirects (protocol-relative URLs)

#### [L-004] Dependencias actualizadas
El `npm audit` reporta **0 vulnerabilidades** en las dependencias, lo cual es excelente.

#### [L-005] .gitignore correctamente configurado
Archivos sensibles como `.env` y `AGENTS.md` están correctamente excluidos.

---

## Buenas Prácticas Observadas

1. ✅ Uso de **DOMPurify** para sanitizar inputs del formulario de contacto
2. ✅ **Validación de esquemas con Zod** para todos los formularios
3. ✅ **CSP implementada** (aunque con unsafe-inline)
4. ✅ Protección contra **open redirect** en safeUrl.ts
5. ✅ Escape de JSON-LD en `serializeJsonLd` (`src/lib/seo.ts:19-25`)
6. ✅ Uso de `rel="noreferrer"` en enlaces externos
7. ✅ Focus trapping en modales para accesibilidad y seguridad

---

## Recomendaciones Adicionales

1. **Habilitar HSTS** (HTTP Strict Transport Security) en producción cuando se configure HTTPS correctamente
2. **Implementar rate limiting** en los endpoints webhook (si es posible a nivel del servidor)
3. **Auditar configuración CORS** de Sanity antes de pasar a producción
4. **Considerar agregar** un archivo `security.txt` para investigadores de seguridad
5. **Revisar regularmente** las actualizaciones de dependencias

---

## Conclusión

El proyecto tiene una base de seguridad sólida. La vulnerabilidad crítica ([C-001]) debe ser corregida inmediatamente ya que permite XSS potencial a través de SVG injection. Las vulnerabilidades medias son de menor riesgo pero deberían ser addressed para una postura de seguridad óptima.

**Prioridad de remediación:**
1. [C-001] - XSS en ArtistPopup.vue (Crítico)
2. [M-001] - CSP unsafe-inline (Deseable)
3. [M-002] - Protección CSRF (Si se implementa servidor)
