import { defineNuxtPlugin } from '#app'
import { Vue3Mq } from 'vue3-mq'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 5000
    }
  })
})
