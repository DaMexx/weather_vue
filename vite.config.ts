import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 9010,
    proxy: {
      '/api': {
        target: 'https://api.weather.yandex.ru', // целевой URL
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/v2/forecast/'), // изменяем путь запроса
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Referer': 'http://localhost:9010'
        }
      }
    }
  }
})
