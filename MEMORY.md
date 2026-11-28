# MEMORY.md — Memoria del proyecto «Curso de Programación con Roblox / Chip Obby»

> ⚠️ **Instrucción obligatoria:** leer este archivo **ANTES** de realizar cualquier cambio en el
> repositorio (ver `AGENT.md`). Después de cada cambio relevante, **actualizar** este archivo con
> lo nuevo. Última actualización: **27 de noviembre de 2026**.

---

## 1. Qué es este proyecto

- **Curso:** «Curso de Programación con Roblox» — Obby para niñas y niños de **6 a 8 años**,
  30 horas, **20 sesiones × 90 min**, organizado en **7 fases**.
- **App web «Chip Obby»:** React 19 + Vite + Express + SQLite para que el niño siga el curso
  con progreso guardado, insignias, mapa, zona de adulto y guía completa por misión.
- **Sitio en vivo (GitHub Pages):** https://chipobby.github.io/chipobby/
- **Repositorio:** https://github.com/chipobby/chipobby.git (público; admin vía `gh` como `JZGSena`).

---

## 2. Resumen histórico de lo realizado

### 2.1 Curso (Fases 1–7, completadas y aprobadas)
- `DOCUMENTACION/DIAGNOSTICO_INICIAL.md`, `DISENO_PEDAGOGICO.md`, `CONTROL_CALIDAD_FINAL.md`.
- `MODULOS/SESION_01.md` … `SESION_20.md` — cada sesión con **20 secciones obligatorias**.
- `DOCUMENTACION/VERIFICACION_TECNICA.md`, docs de evaluación (`EVALUACION/`), recursos de
  instructor/participante (`RECURSOS/`), `GUIA_USUARIO_NINO.pdf` (6 páginas, en la raíz).
- Contenido Luau verificado contra documentación oficial (**nunca inventar APIs**).
- Fase 7: bullet de seguridad en §20 de las 20 sesiones (sin publicar + sin Robux + revisión adulta).
- Correcciones Luau Fase 7: S16 necesita `end` + `end)`; S17 un solo `end`; líneas S16=8, S17=7.

### 2.2 App web
- **Stack:** React 19 + Vite 6 + Express + `node:sqlite` + `marked` (Markdown).
  `better-sqlite3` fue **eliminado** (falla el build nativo en Node 26).
- El contenido del curso **no se duplica**: se lee de `MODULOS/SESION_*.md` mediante
  `shared/curso.js` (única fuente: `moduleNames`, `badges`, `parseSession()`), usada por el
  servidor y —vía bundle— por el frontend.
- **Modo doble (auto-detección):** en `localhost` usa Express + SQLite; en cualquier otro
  host (GitHub Pages) usa curso empaquetado + `localStorage`. El flag es `EN_LOCAL`/`modoLocal`
  en `src/main.jsx`; `api()` cae a `apiLocal` ante un `TypeError` de fetch.
- Bugs funcionales corregidos; suite e2e `test/e2e.mjs` = 16/16 PASS.
- **Modo estático:** curso empaquetado en `src/curso-estatico.js` (`import.meta.glob` raw) y
  progreso en `src/api-local.js` (localStorage). `vite.config.js` usa `base: './'` (rutas
  relativas → funciona bajo `/chipobby/`).

### 2.3 Despliegue
- Workflow `.github/workflows/deploy-pages.yml`: push a `main` → `npm ci` → `vite build` →
  `upload-pages-artifact` → `deploy-pages@v4` (rama `gh-pages`).
- GitHub Pages habilitado; environment `github-pages` con política de rama
  (`protected_branches: true, custom_branch_policies: false`) para que `main` pueda desplegar.
- Historial de fixes del workflow: bash expandía `${...}` dentro de `node -e` → se reemplazaron
  template literals por concatenación de strings.

### 2.4 Últimos cambios (commits `eb3bf21` y `7d37cb1`, desplegados y verificados en vivo)
1. **Barra de menú:** el indicador dice **`● Guardado en tu navegador`** (antes «Guardado local»;
   requisito explícito del usuario — **no volver a cambiarlo** a «local»).
2. **Menú ⚙️ Configuración** (`ConfigPanel` en `src/main.jsx`):
   - Info del explorador, misiones completadas y porcentaje.
   - **📤 Exportar todo mi progreso (JSON)** — formato **versión 2**:
     `{ exportado, version: 2, learner, nickname, progress, done, percent, selected, view, almacen }`
     donde `almacen` contiene **TODAS** las claves `chip-*` del `localStorage`.
   - **📥 Restablecer en este dispositivo (importar JSON)** — fusiona sin perder nada:
     función `fusionarRegistros(previo, importado)` → gana `done` si uno de los dos lo tiene,
     se conserva la nota no vacía, la lista de exploradores se **une** (nunca se borra la previa),
     se restauran `selected`/`view` y se refresca la lista de exploradores. El panel se cierra
     solo tras importar.
3. **20 ilustraciones** en `public/imagenes-misiones/mision-01…20.webp` (robot Chip, estilo
   infantil sin texto), mostradas al inicio de la «📖 Guía completa» de cada misión.
   Generadas con `openrouter/recraft/recraft-v4.1-flash-v2:free` (~1 MB c/u, ~20 MB total).

### 2.5 Estado de las pruebas (3 suites, todas en verde)
| Suite | Comando | Resultado | Requisito |
|---|---|---|---|
| Servidor (SQLite) | `npm run test:servidor` | 16/16 | API en :3001 |
| Estático (Pages) | `npm run test:estatico` | 16/16 | `npm run build` + `npm run preview` (:4173) |
| Configuración JSON | `npm run test:config` | 17/17 | `npm run build` + `preview` (:4173) |

`test/e2e-config.mjs` cubre: exportar → **borrar todo el localStorage** (simula otro navegador/PC)
→ crear otro explorador → importar → verificar apodo, misiones, porcentaje, claves restauradas
y **fusión** con lo previo (nada se pierde).

---

## 3. Estructura clave del repositorio

```
AGENT.md                     # Guía para agentes (debe mandar a leer MEMORY.md)
MEMORY.md                    # Este archivo (memoria del proyecto)
MODULOS/SESION_01..20.md     # Contenido del curso (fuente única, 20 secciones c/u)
shared/curso.js              # Parseo compartido (servidor + frontend)
server/index.js              # Express API en :3001 con node:sqlite
server/chip-obby.sqlite      # BD viva del progreso (GIT-IGNORADA; contiene learner "Matthew")
src/main.jsx                 # Toda la UI: App, Welcome, MissionView, AdultPanel, ConfigPanel
src/api-local.js             # Implementación REST sobre localStorage (modo Pages)
src/curso-estatico.js        # Bundle del curso (import.meta.glob raw)
src/styles.css               # Estilos (incluye .config-* y .guia-imagen*)
public/imagenes-misiones/    # 20 imágenes .webp de las guías
public/favicon.svg
test/e2e.mjs | e2e-estatico.mjs | e2e-config.mjs
.github/workflows/deploy-pages.yml
vite.config.js               # base:'./' solo en build; outDir dist/
RECURSOS/GUIA_USUARIO_NINO.html + scripts/generar-guia-pdf.mjs → GUIA_USUARIO_NINO.pdf
```

---

## 4. Consideraciones OBLIGATORIAS para próximas modificaciones

### 4.1 Contenido del curso
- **No duplicar** el contenido de las sesiones: léelo de `MODULOS/SESION_*.md` con `shared/curso.js`.
- Mantener las **20 secciones obligatorias** por sesión y la estructura original del repo.
- Luau: solo APIs verificadas en la documentación oficial de Roblox; **nunca inventar**.
- Si se edita una sesión, respetar las correcciones ya aplicadas (S16/S17, §20 seguridad).

### 4.2 Seguridad (menores de edad — prioridad)
- **Nunca** solicitar datos personales, contraseñas, fotos ni contacto.
- **Nunca** publicar experiencias ni interactuar con desconocidos; **sin Robux**.
- Revisar todo asset externo con un adulto; insignias = Chip + 8 badges, sin dinero real.
- El usuario es un niño de 8 años: frases cortas, sin tecnicismos, un paso a la vez.

### 4.3 Frontend (React/Vite)
- El indicador de la barra debe seguir diciendo **`● Guardado en tu navegador`**.
- **Rutas de imágenes relativas SIN barra inicial** (`imagenes-misiones/mision-XX.webp`):
  `base:'./'` hace que `/imagenes-...` falle en Pages (404) porque el sitio vive en `/chipobby/`.
- Clases usadas por los tests: **`.guia-texto`** (contenido Markdown de la guía) y
  `.guia-imagen`/`.guia-imagen-contenedor` (ilustración). No renombrar sin actualizar los tests.
- `ConfigPanel` se cierra solo tras importar (el test lo verifica).
- `marked` parsea el Markdown; `dangerouslySetInnerHTML` solo con contenido propio del repo.
- Fuentes externas: Google Fonts (DM Sans, Space Grotesk) en `styles.css`.
- API base hardcodeada: `http://localhost:3001/api` en `src/main.jsx`.

### 4.4 Persistencia / Configuración JSON
- Claves `localStorage`: `chip-learner` (activo), `chip-learners-local` (lista),
  `chip-progress-local` (mapo `id → registros`). Todo empieza por **`chip-`**.
- Formato de exportación **v2** con clave `almacen`; al importar debe **fusionarse**
  (`fusionarRegistros`), jamás sobrescribir en bloque: se perdió el explorador previo al hacerlo.
- Cualquier clave nueva que se agregue debe empezar por `chip-` para que viaje en el export.

### 4.5 Backend
- **No reintroducir `better-sqlite3`** (falla en Node 26): usar `node:sqlite`.
- `server/chip-obby.sqlite` está git-ignorada; conservar el learner de prueba «Matthew».
- El parseo de sesiones vive en `shared/curso.js`; el servidor debe seguir importándolo de ahí.

### 4.6 Imágenes
- 20 archivos `.webp` en `public/imagenes-misiones/` (nombres `mision-01…20.webp`).
- Se copian a `dist/` automáticamente (ojo: los tests/glob pueden omitirlas por `.gitignore`).
- Si se regeneran: mismo modelo gratuito `openrouter/recraft/recraft-v4.1-flash-v2:free`,
  estilo infantil, **sin texto**, tema de cada misión; verificar `naturalWidth > 0` después.

### 4.7 Pruebas (ejecutar SIEMPRE después de tocar código)
1. `npm run build` (debe compilar sin errores).
2. Servidores: API `node server/index.js` (:3001) y `npm run preview` (:4173) — ver §6.
3. `npm run test:servidor` · `npm run test:estatico` · `npm run test:config` → todas en 100 %.
4. Los tests usan `playwright-core` con `channel: 'msedge'` y **bloquean `localhost:3001`**
   para simular GitHub Pages; los errores de consola hacia ese puerto son esperados y filtrados.

### 4.8 Despliegue
- Push a `main` dispara el workflow → revisar `gh run list` y confirmar `success`.
- Tras desplegar, verificar en vivo: `https://chipobby.github.io/chipobby/` (bundle nuevo,
  imágenes 200, indicador y panel de configuración presentes, consola limpia).
- La rama `gh-pages` y el environment `github-pages` ya están configurados; no cambiar la
  política de rama del environment sin verificarlo.

### 4.9 Entorno y herramientas (gotchas conocidos)
- Los comandos largos reciben **SIGTERM a los 120 s**: lanzar API/Vite/preview como procesos
  desprendidos (`cmd /c ... > log 2>&1`); logs: `api.log`, `frontend.log`, `preview.log`.
- En el workflow de GitHub Actions, **no usar template literals de JS dentro de `node -e`**
  (bash los expandió históricamente): usar concatenación de strings.
- PowerShell: `gh api --input <archivo>` para cuerpos JSON (no `-F`); rutas con espacios
  entre comillas dobles.
- Al editar `src/main.jsx` con cuidado: los ternarios `<>…</>` del JSX son fáciles de romper
  (ya falló una vez: «Unexpected closing div tag»). Compilar tras cada edición.
- `GUIA_USUARIO_NINO.pdf` se regenera desde `RECURSOS/GUIA_USUARIO_NINO.html` con
  `scripts/generar-guia-pdf.mjs` (no editar el PDF a mano).

---

## 5. Checklist rápido antes de empezar un cambio

1. ✅ Leer este archivo `MEMORY.md` (y `AGENT.md`).
2. ✅ Identificar qué suites afecta tu cambio (§4.7).
3. ✅ Hacer el cambio, compilar (`npm run build`).
4. ✅ Ejecutar las 3 suites de pruebas.
5. ✅ Commit con mensaje descriptivo + push a `main`.
6. ✅ Confirmar workflow `success` y verificar el sitio en vivo.
7. ✅ Actualizar `MEMORY.md` con lo nuevo (decisiones, claves, formatos, gotchas).

---

## 6. Comandos útiles

```bash
npm run dev            # API (:3001) + Vite (:5173) con concurrently
npm run server         # Solo la API
npm run build          # Build de producción a dist/
npm run preview        # Sirve dist/ en :4173
npm run test:servidor  # e2e con servidor (16 checks)
npm run test:estatico  # e2e modo Pages (16 checks)
npm run test:config    # e2e exportar/importar JSON (17 checks)

gh run list            # Estado de los despliegues
gh run watch <id>      # Supervisar un despliegue
node scripts/generar-guia-pdf.mjs   # Regenerar la guía del niño (PDF)
```

---

## 7. Estado actual (27-nov-2026)

- **Curso:** Fases 1–7 completadas y aprobadas (20 sesiones × 20 secciones).
- **App:** funcional en modo servidor y modo estático; 3 suites de pruebas en verde
  (16/16 + 16/16 + 17/17).
- **Despliegue:** último commit `7d37cb1` publicado con éxito en GitHub Pages;
  sitio verificado en vivo (indicador, panel de configuración, imágenes y consola limpia).
- **Pendiente para el usuario:** ninguna tarea abierta.
