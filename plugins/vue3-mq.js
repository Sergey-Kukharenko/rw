import { defineNuxtPlugin } from '#app'
import { Vue3Mq } from 'vue3-mq'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 599,
      md: 959,
      lg: 1279,
      xl: 1919,
      xxl: 5000
    }
  })
})
