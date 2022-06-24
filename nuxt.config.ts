import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/fonts.css'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/index.scss";`
        }
      }
    },
  },
})
