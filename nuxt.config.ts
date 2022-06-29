import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3',
      titleTemplate: '%s - Nuxt 3 description',
      meta: [

        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        }
      ],
    },
  },

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
