import { defineNuxtPlugin } from '#app'
import { svgSpritePlugin } from 'vue-svg-sprite'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(svgSpritePlugin, {
    url: '/svg/sprite.svg'
  })
})
