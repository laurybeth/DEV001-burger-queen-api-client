import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DEV001-burger-queen-api-client/',
  server: {
    host: '127.0.0.1'
  }
})
