// Genera GUIA_USUARIO_NINO.pdf (raíz del proyecto) desde RECURSOS/GUIA_USUARIO_NINO.html
// Usa Edge/Chrome del sistema vía playwright-core (sin descargar navegadores).
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'GUIA_USUARIO_NINO.pdf');

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage();
await page.goto(new URL('../RECURSOS/GUIA_USUARIO_NINO.html', import.meta.url).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: output,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' }
});
await browser.close();

const size = fs.statSync(output).size;
console.log(`PDF generado: ${output}`);
console.log(`Tamaño: ${(size / 1024).toFixed(1)} KB`);
