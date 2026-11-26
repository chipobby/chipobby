// Captura cada página de la guía como PNG para revisión visual.
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'test', 'capturas');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 1280 }, deviceScaleFactor: 1.4 });
await page.goto(new URL('../RECURSOS/GUIA_USUARIO_NINO.html', import.meta.url).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const pages = page.locator('.page');
const count = await pages.count();
for (let i = 0; i < count; i++) {
  await pages.nth(i).screenshot({ path: path.join(outDir, `guia-p${i + 1}.png`) });
}
await browser.close();
console.log(`${count} páginas capturadas en ${outDir}`);
