<template>
  <div>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
</script>
