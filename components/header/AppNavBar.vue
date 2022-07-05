<template>
  <div class="navbar">
    <div class="layout layout--horizontal-dt">
      <div class="navbar__group">
        <app-navigation-list :list="navBar" />
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
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
