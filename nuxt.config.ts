import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'App',
      titleTemplate: 'App',
      meta: [
        {
          hid: 'hid',
          name: 'name',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200;0,7..72,300;0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;0,7..72,800;0,7..72,900;1,7..72,200;1,7..72,300;1,7..72,400;1,7..72,500;1,7..72,600;1,7..72,700;1,7..72,800;1,7..72,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet'
        }
      ]
    }
  },

  css: ['@/assets/css/normalize.css', '@/assets/css/fonts.css'],

  // build modules
  buildModules: [
    '@pinia/nuxt',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/index.scss";'
        }
      }
    }
  }
})
