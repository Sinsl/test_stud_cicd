import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra_1-4_forms_steps/',
  // base - базовый урл / часть после https://username.github.io от которой считаются все относительные пути
  plugins: [react()],
})
