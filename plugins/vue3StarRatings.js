import { defineNuxtPlugin } from '#app'
import vue3StarRatings from 'vue3-star-ratings'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3StarRatings, {})
})
