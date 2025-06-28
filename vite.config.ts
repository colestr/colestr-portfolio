import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte()
  ],

  base: process.env.NODE_ENV === 'production' ? '/colestr-portfolio/' : '/',
})
