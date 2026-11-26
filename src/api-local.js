// Respaldo cuando no hay servidor Express (GitHub Pages, vista estática).
// Implementa la misma interfaz que la API REST, guardando en localStorage.
// El curso viene empaquetado desde MODULOS/ vía src/curso-estatico.js.
import { cursoEstatico } from './curso-estatico.js';

const KEY_LEARNERS = 'chip-learners-local';
const KEY_PROGRESS = 'chip-progress-local';

function leer(clave, defecto) {
  try { return JSON.parse(localStorage.getItem(clave)) ?? defecto; } catch { return defecto; }
}
function guardar(clave, valor) { localStorage.setItem(clave, JSON.stringify(valor)); }

function listaLearners() { return leer(KEY_LEARNERS, []); }
function mapaProgreso() { return leer(KEY_PROGRESS, {}); }

export async function apiLocal(url, options = {}) {
  const method = options.method || 'GET';
  const body = options.body ? JSON.parse(options.body) : {};

  if (url === '/course') return cursoEstatico;

  if (url === '/learners' && method === 'GET') return { learners: listaLearners() };

  if (url === '/learners' && method === 'POST') {
    const nickname = String(body.nickname ?? '').trim().slice(0, 24);
    if (!nickname || /[<>]/.test(nickname)) throw new Error('Escribe un apodo sencillo.');
    const lista = listaLearners();
    if (lista.some((item) => item.nickname === nickname)) throw new Error('Ese apodo ya está en uso.');
    const learner = { id: Date.now(), nickname, createdAt: new Date().toISOString() };
    guardar(KEY_LEARNERS, [...lista, learner]);
    return { learner, progress: [] };
  }

  const pedido = url.match(/^\/learners\/(\d+)$/);
  if (pedido && method === 'GET') {
    const learner = listaLearners().find((item) => String(item.id) === pedido[1]);
    if (!learner) throw new Error('No encontramos ese explorador.');
    return { learner, progress: mapaProgreso()[learner.id] || [] };
  }

  const avance = url.match(/^\/learners\/(\d+)\/progress\/(\d+)$/);
  if (avance && method === 'PUT') {
    const learnerId = Number(avance[1]);
    const sessionId = Number(avance[2]);
    const status = ['todo', 'doing', 'done'].includes(body.status) ? body.status : 'todo';
    if (!listaLearners().some((item) => item.id === learnerId) || sessionId < 1 || sessionId > 20) {
      throw new Error('No encontramos esa misión.');
    }
    const mapa = mapaProgreso();
    const lista = mapa[learnerId] || [];
    const indice = lista.findIndex((item) => item.sessionId === sessionId);
    const entrada = { sessionId, status, note: String(body.note ?? '').slice(0, 240), updatedAt: new Date().toISOString() };
    if (indice >= 0) lista[indice] = entrada; else lista.push(entrada);
    mapa[learnerId] = lista;
    guardar(KEY_PROGRESS, mapa);
    return { progress: lista };
  }

  throw new Error('No pudimos guardar el cambio.');
}
