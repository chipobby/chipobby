// Curso empaquetado para el modo estático (GitHub Pages).
// Vite incluye los 20 Markdown de MODULOS/ en el bundle; el servidor (SQLite)
// sigue usándolos en tiempo de ejecución. Un solo origen: shared/curso.js.
import { badges, parseSession } from '../shared/curso.js';

const archivos = import.meta.glob('../MODULOS/SESION_*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const sessions = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1;
  const filename = `SESION_${String(id).padStart(2, '0')}.md`;
  const markdown = archivos[`../MODULOS/${filename}`] ?? '';
  return markdown ? parseSession(id, markdown) : { id, title: `Sesión ${id}`, module: '', mission: '', objective: '', concepts: '', markdown: '' };
});

export const cursoEstatico = { sessions, badges };
