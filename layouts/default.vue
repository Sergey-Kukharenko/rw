<template>
  <AppLoader v-if="loading" />
  <div v-else>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script setup>
import AppLoader from '@/components/shared/AppLoader.vue'
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from '@/components/footer/AppFooter.vue'

const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>
