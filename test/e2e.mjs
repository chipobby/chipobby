// Prueba funcional end-to-end de la interfaz Chip Obby con navegador real (Edge/Chrome del sistema).
import { chromium } from 'playwright-core';

const BASE = 'http://localhost:5173';
const API = 'http://localhost:3001/api';
const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'} - ${name}${detail ? ` :: ${detail}` : ''}`);
}

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const consoleErrors = [];
page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
page.on('response', (res) => { if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()} ${res.url()}`); });

try {
  // --- Registro de un explorador nuevo (nombre aleatorio para no repetir) ---
  await page.goto(BASE, { waitUntil: 'networkidle' });
  const nick = `E2E${Date.now().toString().slice(-6)}`;
  await page.fill('#nickname', nick);
  await page.click('button.primary.wide');
  await page.waitForSelector('.mission-detail', { timeout: 8000 });
  check('Registro de explorador + entrada a misiones', true, nick);

  // --- Recorrer las 20 misiones y validar contenido ---
  const rows = page.locator('.mission-row');
  const rowCount = await rows.count();
  check('Lista muestra 20 misiones', rowCount === 20, `encontradas: ${rowCount}`);
  let titleErrors = 0;
  for (let i = 0; i < rowCount; i++) {
    await rows.nth(i).click();
    await page.waitForTimeout(80);
    const h2 = (await page.locator('.mission-detail > h2').textContent())?.trim();
    const tag = await page.locator('.mission-tag').textContent();
    const expected = String(i + 1).padStart(2, '0');
    if (!h2 || !tag.includes(expected)) { titleErrors++; console.log(`  detalle malo en fila ${i}: h2="${h2}" tag="${tag}"`); }
  }
  check('Cada misión 01-20 abre con título y número correctos', titleErrors === 0, `errores: ${titleErrors}`);

  // --- Guía completa en todas las misiones ---
  let guideErrors = 0;
  for (let i = 0; i < rowCount; i++) {
    await rows.nth(i).click();
    await page.waitForTimeout(60);
    await page.locator('.full-guide summary').click();
    await page.waitForTimeout(80);
    const len = await page.locator('.full-guide > div').evaluate((el) => el.textContent.trim().length);
    if (len < 500) { guideErrors++; console.log(`  guía corta en misión ${i + 1}: ${len} chars`); }
    await page.locator('.full-guide summary').click();
  }
  check('Guía completa con contenido en las 20 misiones', guideErrors === 0, `vacías/cortas: ${guideErrors}`);

  // --- Botón "Empezar misión" en cada misión ---
  await rows.nth(0).click();
  await page.click('button.secondary:has-text("Empezar")');
  await page.waitForSelector('.toast:has-text("Guardamos tu misión")', { timeout: 5000 });
  const toastDoing = await page.locator('.toast').textContent();
  check('Botón "Empezar misión" muestra confirmación', /guard/i.test(toastDoing || ''), toastDoing || '');
  await page.locator('.toast').click();

  // Estado visual "doing" en la lista
  await rows.nth(0).click();
  const statusClass = await rows.nth(0).locator('.mission-status').getAttribute('class');
  check('Estado "en curso" visible en la lista', statusClass?.includes('doing'), statusClass || '');

  // --- Botón "Marcar como lista" ---
  await page.click('button.primary:has-text("Marcar como lista")');
  await page.waitForSelector('.toast:has-text("Misión guardada")', { timeout: 5000 });
  const toastDone = await page.locator('.toast').textContent();
  check('Botón "Marcar como lista" muestra confirmación', /misión guardada/i.test(toastDone || ''), toastDone || '');
  await page.locator('.toast').click();

  // Verificar persistencia recargando la página
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('.mission-detail', { timeout: 8000 });
  const persisted = await page.locator('.mission-row').first().locator('.mission-status').getAttribute('class');
  check('Progreso persiste tras recargar (SQLite)', persisted?.includes('done'), persisted || '');

  // --- Navegación: Insignias ---
  await page.click('.nav button:has-text("insignias")');
  await page.waitForSelector('.badge-grid', { timeout: 5000 });
  const badges = await page.locator('.badge-card').count();
  const earned = await page.locator('.badge-card.earned').count();
  check('Vista Insignias: 8 tarjetas y desbloqueo', badges === 8 && earned >= 1, `tarjetas: ${badges}, ganadas: ${earned}`);

  // --- Navegación: Mapa ---
  await page.click('.nav button:has-text("mapa")');
  await page.waitForSelector('.map-path', { timeout: 5000 });
  const nodes = await page.locator('.map-node').count();
  const doneNodes = await page.locator('.map-node.done').count();
  check('Vista Mapa: 20 nodos y estado correcto', nodes === 20 && doneNodes >= 1, `nodos: ${nodes}, completados: ${doneNodes}`);

  // Nodo del mapa navega a la misión
  await page.locator('.map-node').nth(5).click();
  await page.waitForSelector('.mission-detail', { timeout: 5000 });
  const tag = await page.locator('.mission-tag').textContent();
  check('Clic en nodo del mapa abre la misión', tag?.includes('06'), tag || '');

  // --- Marcar todas las misiones restantes como lista (acciones en las 20) ---
  await page.click('.nav button:has-text("misiones")');
  await page.waitForSelector('.mission-row');
  const allRows = page.locator('.mission-row');
  for (let i = 0; i < 20; i++) {
    await allRows.nth(i).click();
    const cls = await allRows.nth(i).locator('.mission-status').getAttribute('class');
    if (!cls?.includes('done')) {
      await page.click('button.primary:has-text("Marcar como lista")');
      await page.waitForSelector('.toast', { timeout: 5000 });
      await page.locator('.toast').click();
    }
  }
  const finalPercent = await page.locator('.progress-label b').textContent();
  check('Marcar las 20 misiones completa el 100%', finalPercent?.trim() === '100%', finalPercent || '');

  // --- Zona de adulto ---
  await page.click('button.adult-link');
  await page.waitForSelector('.adult-panel', { timeout: 5000 });
  const learnerBtns = await page.locator('.learner-list button').count();
  check('Zona de adulto abre y lista exploradores', learnerBtns >= 1, `exploradores: ${learnerBtns}`);
  await page.locator(`.learner-list button:has-text("${nick}")`).click();
  await page.waitForSelector('.report-grid', { timeout: 5000 });
  const cells = await page.locator('.report-grid > div').count();
  const doneCells = await page.locator('.report-grid > div.done').count();
  check('Reporte adulto: 20 sesiones con progreso', cells === 20 && doneCells === 20, `celdas: ${cells}, listas: ${doneCells}`);
  await page.click('button.adult-link:has-text("misiones")');
  await page.waitForSelector('.mission-detail', { timeout: 5000 });
  check('Volver a misiones desde zona adulto', true);

  // --- Errores de consola ---
  check('Sin errores de consola durante toda la prueba', consoleErrors.length === 0, consoleErrors.slice(0, 5).join(' | '));
} catch (err) {
  check('Ejecución completa de la prueba', false, err.message);
} finally {
  await browser.close();
}

const fails = results.filter((r) => !r.ok);
console.log(`\n=== RESUMEN: ${results.length - fails.length}/${results.length} verificaciones OK ===`);
if (fails.length) { console.log('FALLAS:'); fails.forEach((f) => console.log(` - ${f.name}: ${f.detail}`)); process.exit(1); }
