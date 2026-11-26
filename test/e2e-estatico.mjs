// Prueba del modo estático (GitHub Pages): sirve dist/ sin API Express.
// Se bloquea todo acceso a localhost:3001 para simular que no hay servidor;
// la app debe funcionar con curso empaquetado + localStorage.
import { chromium } from 'playwright-core';

const BASE = 'http://localhost:4173';
const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'} - ${name}${detail ? ` :: ${detail}` : ''}`);
}

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await (await browser.newContext()).newPage();
const consoleErrors = [];
let apiAttempts = 0;
page.on('console', (msg) => {
  if (msg.type() !== 'error') return;
  // Los fallos de carga hacia localhost:3001 son esperados: son las peticiones
  // bloqueadas por esta prueba para simular que no hay servidor (GitHub Pages).
  if (/Failed to load resource/.test(msg.text()) && /localhost:3001/.test(msg.location()?.url || '')) return;
  consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
// Simular GitHub Pages: nada de servidor en el puerto 3001.
await page.route('**localhost:3001**', (route) => { apiAttempts++; route.abort(); });

try {
  await page.goto(BASE, { waitUntil: 'networkidle' });

  // --- Registro en modo navegador ---
  const nick = `EST${Date.now().toString().slice(-6)}`;
  await page.fill('#nickname', nick);
  await page.click('button.primary.wide');
  await page.waitForSelector('.mission-detail', { timeout: 8000 });
  check('Registro funciona sin servidor (localStorage)', true, nick);

  // --- Las 20 misiones con guía completa ---
  const rows = page.locator('.mission-row');
  const rowCount = await rows.count();
  check('20 misiones visibles', rowCount === 20, `encontradas: ${rowCount}`);

  await rows.nth(0).click();
  await page.locator('.full-guide summary').click();
  await page.waitForTimeout(150);
  const guideLen = await page.locator('.full-guide > div').evaluate((el) => el.textContent.trim().length);
  check('Guía completa de la misión 1 con contenido empaquetado', guideLen > 500, `${guideLen} chars`);

  // Guía de la última misión también
  await rows.nth(19).click();
  await page.locator('.full-guide summary').click();
  await page.waitForTimeout(150);
  const guide20 = await page.locator('.full-guide > div').evaluate((el) => el.textContent.trim().length);
  check('Guía completa de la misión 20', guide20 > 500, `${guide20} chars`);

  // --- Acciones ---
  await rows.nth(0).click();
  await page.click('button.secondary:has-text("Empezar")');
  await page.waitForSelector('.toast:has-text("Guardamos tu misión")', { timeout: 5000 });
  check('"Empezar misión" guarda en localStorage', true);
  await page.locator('.toast').click();

  await page.click('button.primary:has-text("Marcar como lista")');
  await page.waitForSelector('.toast:has-text("Misión guardada")', { timeout: 5000 });
  check('"Marcar como lista" guarda en localStorage', true);
  await page.locator('.toast').click();

  // --- Persistencia tras recargar ---
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('.mission-detail', { timeout: 8000 });
  const persisted = await page.locator('.mission-row').first().locator('.mission-status').getAttribute('class');
  check('Progreso persiste tras recargar (localStorage)', persisted?.includes('done'), persisted || '');

  // El explorador también persiste (no vuelve a pedir apodo)
  const stillLogged = await page.locator('.profile strong').textContent();
  check('Explorador persiste tras recargar', stillLogged === nick, stillLogged || '');

  // --- Insignias y mapa ---
  await page.click('.nav button:has-text("insignias")');
  await page.waitForSelector('.badge-grid', { timeout: 5000 });
  const badges = await page.locator('.badge-card').count();
  const earned = await page.locator('.badge-card.earned').count();
  check('Insignias: 8 tarjetas y 1 ganada', badges === 8 && earned === 1, `tarjetas: ${badges}, ganadas: ${earned}`);

  await page.click('.nav button:has-text("mapa")');
  await page.waitForSelector('.map-path', { timeout: 5000 });
  const nodes = await page.locator('.map-node').count();
  check('Mapa: 20 nodos', nodes === 20, `nodos: ${nodes}`);

  // --- Zona de adulto ---
  await page.click('button.adult-link');
  await page.waitForSelector('.adult-panel', { timeout: 5000 });
  await page.locator(`.learner-list button:has-text("${nick}")`).click();
  await page.waitForSelector('.report-grid', { timeout: 5000 });
  const doneCells = await page.locator('.report-grid > div.done').count();
  check('Reporte del adulto con progreso local', doneCells === 1, `celdas listas: ${doneCells}`);
  const storageLabel = await page.locator('.report-head p').textContent();
  check('Etiqueta indica almacenamiento del navegador', /navegador/i.test(storageLabel || ''), storageLabel || '');

  // --- Recorrido completo: marcar las 20 misiones ---
  await page.click('button.adult-link:has-text("misiones")');
  await page.waitForSelector('.content', { timeout: 5000 });
  await page.click('.nav button:has-text("misiones")');
  await page.waitForSelector('.mission-row');
  for (let i = 0; i < 20; i++) {
    await rows.nth(i).click();
    const cls = await rows.nth(i).locator('.mission-status').getAttribute('class');
    if (!cls?.includes('done')) {
      await page.click('button.primary:has-text("Marcar como lista")');
      await page.waitForSelector('.toast:has-text("Misión guardada")', { timeout: 5000 });
      await page.locator('.toast').click();
    }
  }
  const percent = await page.locator('.progress-label b').textContent();
  check('Las 20 misiones completan el 100%', percent?.trim() === '100%', percent || '');

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('.mission-detail', { timeout: 8000 });
  const percent2 = await page.locator('.progress-label b').textContent();
  check('100% persiste tras recargar', percent2?.trim() === '100%', percent2 || '');

  // --- La app nunca logró (ni necesitó) hablar con el servidor ---
  check('Sin dependencia del servidor Express', apiAttempts >= 1, `intentos bloqueados: ${apiAttempts}`);
  check('Sin errores de consola', consoleErrors.length === 0, consoleErrors.slice(0, 5).join(' | '));
} catch (err) {
  check('Ejecución completa de la prueba', false, err.message);
} finally {
  await browser.close();
}

const fails = results.filter((r) => !r.ok);
console.log(`\n=== RESUMEN MODO ESTÁTICO: ${results.length - fails.length}/${results.length} verificaciones OK ===`);
if (fails.length) { console.log('FALLAS:'); fails.forEach((f) => console.log(` - ${f.name}: ${f.detail}`)); process.exit(1); }
