<template>
  <div class="layout layout--horizontal-dt">
    <div class="footer-container">
      <app-footer-logo />
    </div>
  </div>
</template>

<script setup>
import AppFooterLogo from '@/components/footer/AppFooterLogo.vue'
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
}
</style>