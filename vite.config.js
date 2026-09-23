import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';
import { defineConfig } from 'vite';

const root = import.meta.dirname;
const workPages = Object.fromEntries(
  readdirSync(resolve(root, 'work'))
    .filter((f) => f.endsWith('.html'))
    .map((f) => [`work/${f.replace('.html', '')}`, resolve(root, 'work', f)])
);

export default defineConfig({
  server: {
    host: true,               // listen on all interfaces so annelynn.local works
    port: 5173,
    strictPort: true,
    allowedHosts: ['annelynn.local', 'localhost'],
  },
  preview: { host: true, port: 4173, allowedHosts: ['annelynn.local', 'localhost'] },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
        contact: resolve(root, 'contact.html'),
        ...workPages,
      },
    },
  },
});
