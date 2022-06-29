<template>
  <section class="navigation">
    <div class="layout layout--horizontal-dt">
      <div class="navigation__group">
        <app-navigation-list :list="main" />
        <app-navigation-list :list="other" />
      </div>
    </div>
  </section>
</template>

<script setup>
import dataNavigation from '@/data/navigation'
import AppNavigationList from '@/components/AppNavigationList.vue'

const { main, other } = dataNavigation
</script>

<style lang="scss" scoped>
.navigation {
  background: $bg-grey;

  &__group {
    @include gt-xs {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @include xs {
      margin: 0;
    }
  }
}
</style>
