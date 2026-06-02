import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages usa: npm run deploy (usa /adat-marc-landing/)
  // Para tu servidor propio usa: npm run build:server
  base: process.env.VITE_BASE_PATH || '/adat-marc-landing/',
})
