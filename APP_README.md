# Chip Obby — aplicación web del curso

Aplicación local para que un niño de 8 años siga las 20 misiones del curso, mientras un adulto consulta el progreso.

## Tecnología

- **React 19 + Vite:** interfaz interactiva.
- **Express:** API local.
- **SQLite integrado de Node (`node:sqlite`):** perfiles y progreso persistente en `server/chip-obby.sqlite`.
- **Marked:** muestra la guía Markdown completa de cada sesión.

## Requisitos

- Node.js 22.5 o superior. Se recomienda Node 24/26.
- No se necesita una cuenta externa ni un servicio de pago.

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

Después abre:

- Interfaz: `http://localhost:5173`
- API: `http://localhost:3001/api/course`

También puede ejecutarse por separado:

```bash
npm run server
npm run build
npm run preview
```

## Qué guarda

La aplicación crea automáticamente la base de datos SQLite en:

```text
server/chip-obby.sqlite
```

Guarda únicamente:

- apodo del explorador;
- estado de cada misión: pendiente, en curso o lista;
- fecha de actualización;
- nota breve opcional.

No se solicitan nombres completos, contraseñas, fotos ni datos personales.

## Funciones implementadas

- Creación de perfil infantil con apodo.
- Continuación de una aventura guardada.
- 20 sesiones cargadas desde `MODULOS/SESION_01.md` a `SESION_20.md`.
- Resumen amigable de cada misión.
- Acceso a la guía completa de cada sesión.
- Botones **Empezar misión** y **Marcar como lista**.
- Barra de progreso y mapa visual.
- Ocho insignias desbloqueables.
- Zona de adulto para revisar exploradores y progreso por sesión.
- Diseño responsive para computador y tablet.

## Seguridad de uso

La zona de adulto no reemplaza controles de cuenta, privacidad ni acompañamiento. El curso debe seguir ejecutándose en un entorno supervisado y sin publicación del juego, chat pública o compras.
