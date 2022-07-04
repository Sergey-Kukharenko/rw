<template>
  <nav class="navigation">
    <div class="layout layout--horizontal-dt">
      <div class="navigation__group">
        <app-navigation-list :list="navigation.main" />
        <app-navigation-list :list="navigation.other" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import dataNavigation from '@/data/navigation'
import AppNavigationList from '@/components/header/AppNavigationList.vue'

const navigation = ref(dataNavigation)
</script>

<style lang="scss" scoped>
.navigation {
  background: $bg-grey;

  &__group {
    @include gt-sm {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @include sm {
      margin: 0;
    }
  }
}
</style>
