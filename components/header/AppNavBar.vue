<template>
  <div id="navbar" :class="classNames" v-on="handleScroll">
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

const { scrolled, handleScroll } = useScrollHandler('navbar')
const classNames = computed(() =>
  useToggleClassName(scrolled.value, 'navbar', 'modified')
)
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  padding: 8px 0;

  @include gt-sm {
    position: sticky;
    top: 0;
    z-index: 3;
  }

  @include lt-md {
    border-top: 1px solid #dde0e6;
  }

  &--modified {
    @include gt-sm {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
    }
  }
}

.navbar-list {
  @include gt-sm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    &:last-child {
      @include lt-sm {
        display: none;
      }
    }
  }
}
</style>
