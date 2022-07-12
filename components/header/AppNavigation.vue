<template>
  <nav class="navigation">
    <div class="layout layout--horizontal-dt">
      <div class="navigation__group">
        <app-navigation-list :list="navigation.main" />
        <app-navigation-list
          :list="navigation.other"
          :options="{ theme: 'mixed' }"
        />
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
  @include gt-xs {
    background: $bg-grey;
  }

  @include xs {
    order: 2;
    border-top: 1px solid #dde0e6;
  }

  &__group {
    @include gt-sm {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
