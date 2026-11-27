// Prueba del menú Configuración: exportar progreso a JSON y restablecerlo
// en "otro navegador" (localStorage borrado) sin perder absolutamente nada.
import { chromium } from 'playwright-core';
import { readFile } from 'node:fs/promises';

const BASE = 'http://localhost:4173';
const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'} - ${name}${detail ? ` :: ${detail}` : ''}`);
}

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await (await browser.newContext()).newPage();
const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() !== 'error') return;
  // Fallos esperados hacia localhost:3001 (bloqueado para simular GitHub Pages).
  if (/Failed to load resource/.test(msg.text()) && /localhost:3001/.test(msg.location()?.url || '')) return;
  consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
await page.route('**localhost:3001**', (route) => route.abort());

try {
  await page.goto(BASE, { waitUntil: 'networkidle' });

  // --- 1. Crear explorador y completar 3 misiones ---
  const nick = `CFG${Date.now().toString().slice(-6)}`;
  await page.fill('#nickname', nick);
  await page.click('button.primary.wide');
  await page.waitForSelector('.mission-detail', { timeout: 8000 });

  const rows = page.locator('.mission-row');
  for (let i = 0; i < 3; i++) {
    await rows.nth(i).click();
    await page.click('button.primary:has-text("Marcar como lista")');
    await page.waitForSelector('.toast:has-text("Misión guardada")', { timeout: 5000 });
    await page.locator('.toast').click();
  }
  const doneBefore = await page.locator('.mission-status.done').count();
  check('Preparación: 3 misiones completadas', doneBefore === 3, `listas: ${doneBefore}`);

  // --- 2. Indicador del menú habla del navegador ---
  const saveLabel = await page.locator('.save-dot').textContent();
  check('La barra indica guardado en el navegador', /navegador/i.test(saveLabel || '') && !/local\b/i.test(saveLabel || ''), saveLabel || '');

  // --- 3. Abrir Configuración y exportar a JSON ---
  await page.click('button.config-link');
  await page.waitForSelector('.config-box', { timeout: 5000 });
  check('Menú Configuración abre correctamente', true);

  const downloadPromise = page.waitForEvent('download', { timeout: 10000 });
  await page.click('button:has-text("Exportar")');
  const download = await downloadPromise;
  const exportPath = await download.path();
  const data = JSON.parse(await readFile(exportPath, 'utf8'));

  const claves = Object.keys(data.almacen || {});
  check('Exporta versión 2 con TODAS las claves del navegador', data.version === 2 && claves.includes('chip-learner') && claves.includes('chip-progress-local'), `claves: ${claves.join(', ')}`);
  check('Exporta apodo correcto', data.learner?.nickname === nick, data.learner?.nickname || 'sin apodo');
  check('Exporta las 3 misiones', Array.isArray(data.progress) && data.progress.length === 3, `progreso: ${data.progress?.length}`);
  const mapaAlmacen = JSON.parse(data.almacen['chip-progress-local'] || '{}');
  const guardadas = mapaAlmacen[data.learner.id]?.filter((p) => p.status === 'done').length || 0;
  check('La clave chip-progress-local del archivo trae las 3 misiones', guardadas === 3, `en almacen: ${guardadas}`);
  await page.locator('.config-cerrar').click();

  // --- 4. Simular OTRO navegador/PC: borrar todo el almacenamiento ---
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('.welcome', { timeout: 8000 });
  const welcomeVisible = await page.locator('.login-card').isVisible();
  check('Navegador "nuevo": todo borrado, pide apodo de nuevo', welcomeVisible);

  // En el navegador nuevo se crea OTRO explorador (dato previo que no debe perderse)
  await page.fill('#nickname', `OTRO${Date.now().toString().slice(-6)}`);
  await page.click('button.primary.wide');
  await page.waitForSelector('.mission-detail', { timeout: 8000 });

  // --- 5. Restablecer desde el archivo exportado ---
  await page.click('button.config-link');
  await page.waitForSelector('.config-box', { timeout: 5000 });
  await page.locator('.config-box input[type="file"]').setInputFiles(exportPath);
  await page.waitForSelector('.toast:has-text("Restauramos tu apodo")', { timeout: 8000 });
  check('Importar muestra confirmación de restauración completa', true);

  // --- 6. Verificar que NO se perdió absolutamente nada ---
  const perfil = await page.locator('.profile strong').textContent();
  check('Apodo restaurado', perfil === nick, perfil || '');

  const doneAfter = await page.locator('.mission-status.done').count();
  check('Las 3 misiones restauradas', doneAfter === 3, `listas: ${doneAfter}`);

  const percent = await page.locator('.progress-label b').textContent();
  check('Porcentaje restaurado (15%)', percent?.trim() === '15%', percent || '');

  const clavesTras = await page.evaluate(() => {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); out[k] = localStorage.getItem(k); }
    return out;
  });
  check('Claves del navegador restauradas', ['chip-learner', 'chip-progress-local', 'chip-learners-local'].every((k) => k in clavesTras), Object.keys(clavesTras).join(', '));

  const lista = JSON.parse(clavesTras['chip-learners-local'] || '[]');
  check('El explorador previo del navegador nuevo NO se borra (fusión)', lista.length === 2, `exploradores: ${lista.length}`);

  const mapaTras = JSON.parse(clavesTras['chip-progress-local'] || '{}');
  const idImportado = JSON.parse(clavesTras['chip-learner']).id;
  check('Progreso completo en el navegador tras restaurar', (mapaTras[idImportado] || []).filter((p) => p.status === 'done').length === 3, `misiones: ${(mapaTras[idImportado] || []).length}`);

  const panelCerrado = (await page.locator('.config-box').count()) === 0;
  check('El panel se cierra solo tras restaurar', panelCerrado);
  check('Sin errores de consola', consoleErrors.length === 0, consoleErrors.slice(0, 5).join(' | '));
} catch (err) {
  check('Ejecución completa de la prueba', false, err.message);
} finally {
  await browser.close();
}

const fails = results.filter((r) => !r.ok);
console.log(`\n=== RESUMEN CONFIGURACIÓN/JSON: ${results.length - fails.length}/${results.length} verificaciones OK ===`);
if (fails.length) { console.log('FALLAS:'); fails.forEach((f) => console.log(` - ${f.name}: ${f.detail}`)); process.exit(1); }
