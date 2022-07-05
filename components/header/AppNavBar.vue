<template>
  <div class="navbar">
    <div class="layout layout--horizontal-dt">
      <div class="navbar__group">
        <app-navigation-list :list="navBar" :options="{ theme: 'full' }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import dataNavBar from '@/data/nav-bar'
import AppNavigationList from '@/components/header/AppNavigationList.vue'

const navBar = ref(dataNavBar)
</script>

<style lang="scss" scoped>
.navbar {
  &__group {
    @include gt-sm {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
