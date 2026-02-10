import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project-demo/',
  plugins: [react()],
  server: {
    open: true
  }
})
