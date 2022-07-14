<template>
  <AppLoader v-if="isLoading" />
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

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>
