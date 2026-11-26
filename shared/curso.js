// Lógica compartida del curso: la usa el servidor (SQLite) y el modo estático (GitHub Pages).
// Mantiene un solo origen para módulos, insignias y el parseo de las sesiones.

export const moduleNames = {
  1: 'Conozco mi herramienta', 2: 'Conozco mi herramienta', 3: 'Conozco mi herramienta',
  4: 'Construyo mi mundo', 5: 'Construyo mi mundo', 6: 'Construyo mi mundo',
  7: 'Pruebo y mejoro', 8: 'Pruebo y mejoro', 9: 'Aprendo a dar instrucciones',
  10: 'Aprendo a dar instrucciones', 11: 'Aprendo a dar instrucciones',
  12: 'Objetos mágicos', 13: 'Objetos mágicos', 14: 'Objetos mágicos',
  15: 'Retos y reglas', 16: 'Retos y reglas', 17: 'Retos y reglas',
  18: 'Mi gran videojuego', 19: 'Mi gran videojuego', 20: 'Mi gran videojuego'
};

export const badges = [
  ['idea', '🎨', 'Creador de ideas', 1], ['explorer', '🔍', 'Explorador', 2],
  ['builder', '🧱', 'Constructor', 6], ['tester', '🏃', 'Probador', 8],
  ['coder', '💻', 'Programador novato', 10], ['star', '⭐', 'Cazador de estrellas', 13],
  ['rules', '🛡', 'Guardián de reglas', 17], ['master', '🏆', 'Maestro del Obby', 20]
].map(([key, icon, name, session]) => ({ key, icon, name, session }));

// Extrae título, misión, objetivo y conceptos del Markdown de una sesión.
export function parseSession(id, markdown) {
  const title = markdown.match(/^# Sesión \d+\. (.+)$/m)?.[1] ?? `Sesión ${id}`;
  const mission = markdown.match(/## 2\. Nombre de la misión\n\n([^\n]+)/)?.[1]?.replaceAll('**', '') ?? '';
  const objective = markdown.match(/## 4\. Objetivo de aprendizaje\n\n([\s\S]*?)(?=\n## )/)?.[1]?.trim() ?? '';
  const concepts = markdown.match(/## 8\. Conceptos nuevos\n\n([\s\S]*?)(?=\n## )/)?.[1]?.trim() ?? '';
  return { id, title, module: moduleNames[id], mission, objective, concepts, markdown };
}
