<template>
  <div class="navbar">
    <div class="layout layout--horizontal-dt">
      <div class="navbar__group">
        <app-nav-bar-list :list="navBar" />
      </div>
    </div>
  </div>
</template>

<script setup>
import dataNavBar from '@/data/nav-bar'
import AppNavBarList from '@/components/header/AppNavBarList.vue'

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
