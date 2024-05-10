import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const DEV = true;

export default defineConfig({
  build: {
    sourcemap: DEV,
    outDir: './docs',
  },
  plugins: [
    VitePWA({
      devOptions: {
        enabled: DEV,
      },
      includeAssets: ['*', '*/*', '*/*/*', '*/*/*/*'],
      workbox: {
        sourcemap: DEV,
        cleanupOutdatedCaches: true,
      },
      manifest: {
        id: 'ionalpnavi',
        name: 'Ionic + Alpine.js + Navigo Demo',
        short_name: 'ionalpnavi',
        description: 'Ionic + Alpine.js + Navigo Demo',
        theme_color: '#ffffff',
        display: 'fullscreen',
        orientation: 'natural',
        dir: 'ltr',
        prefer_related_applications: false,
        categories: ['games'],
        launch_handler: {
          client_mode: ['focus-existing', 'auto']
        },
        icons: [
          {
            src: 'assets/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ]
});