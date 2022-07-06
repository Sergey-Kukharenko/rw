<template>
  <div class="footer">
    <!-- <app-footer-container /> -->
    <app-footer-bottom />
  </div>
</template>

<script setup>
import AppFooterContainer from '@/components/footer/AppFooterContainer.vue'
import AppFooterBottom from '@/components/footer/AppFooterBottom.vue'
</script>

<style lang="scss" scoped>
.footer {
  background: #fafafa;

  @include xs {
    padding: 0 16px;
  }
}
</style>