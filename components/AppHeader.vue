<template>
  <header>
    <app-notification theme="pink">
      {{ title }}
    </app-notification>
    <app-navigation />
  </header>
</template>

<script setup>
import AppNotification from '@/components/AppNotification.vue'
import AppNavigation from '@/components/AppNavigation.vue'

const title = ref('Flowers will stand for 5 days or we’ll replace the bouquet!')
</script>

<style lang="scss" scoped>
</style>
