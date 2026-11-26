import { defineConfig } from 'vite';

// base './' permite desplegar en GitHub Pages bajo /chipobby/ y también
// en cualquier otro subdirectorio o dominio sin cambiar la configuración.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
}));
