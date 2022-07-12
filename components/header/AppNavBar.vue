<template>
  <div class="navbar">
    <div class="layout layout--horizontal-dt">
      <div class="navbar-list">
        <div class="navbar-list__item">
          <app-navigation-list :list="navBar" :options="{ theme: 'full' }" />
        </div>
        <div class="navbar-list__item">
          <app-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dataNavBar from '@/data/nav-bar'
import AppNavigationList from '@/components/header/AppNavigationList.vue'
import AppSearch from '@/components/header/AppSearch.vue'

const navBar = ref(dataNavBar)
</script>

<style lang="scss" scoped>
.navbar {
  padding: 8px 0;

  @include xs {
    border-top: 1px solid #dde0e6;
  }

  &-list {
    @include gt-sm {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__item {
      @include sm {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
