import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: ['assets/icons/favicon.svg', 'assets/icons/favicon.ico', 'robots.txt', 'assets/icons/apple-touch-icon.png'],
      manifest: {
        name: 'Ionic + Alpine.js + Navigo Demo',
        short_name: 'ionalpnavi',
        description: 'Ionic + Alpine.js + Navigo Demo',
        theme_color: '#ffffff',
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