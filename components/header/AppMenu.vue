<template>
  <div class="menu">
    <div class="layout layout--horizontal-dt">
      <div class="menu-list">
        <div class="menu-list__item">
          <div class="logo">FLOR</div>
        </div>
        <div class="menu-list__item">
          <app-location />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLocation from '@/components/header/AppLocation.vue'
</script>

<style lang="scss" scoped>
.menu {
  padding: 24px 0 20px;
  border-bottom: 1px solid #e5e5e5;
}

.menu-list {
  display: flex;
  align-items: center;
  margin: 0 -16px;

  &__item {
    padding: 0 16px;
  }
}

.logo {
  font-family: $lora;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.32em;
  cursor: pointer;
}
</style>
